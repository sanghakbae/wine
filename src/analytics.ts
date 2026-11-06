// Firebase 애널리틱스: 실제 배포 주소와 iOS 앱에서만 켠다 (개발 서버·localhost 미리보기는 통계를 오염시키지 않게 제외).
// 광고용 저장은 모두 거부로 두고, 게임 안에서 일어난 일만 이벤트로 남긴다. 사용자 ID 같은 개인정보는 보내지 않는다.
// iOS 앱은 네이티브 SDK 로만, 웹은 웹 SDK 로만 모은다 (앱 안 웹뷰의 웹 GA 는 잡히지 않고, 둘 다 켜면 이중 집계된다).
import { firebaseApp, firebaseConfig, hasFirebase, isLocal } from "./firebase";
import { IS_IOS } from "./platform";

type Params = Record<string, string | number | boolean>;
type Send = (name: string, params?: Params) => void;

// iOS 앱은 GoogleService-Info.plist 로 동작해 웹 설정이 필요 없다
const enabled = import.meta.env.PROD && (IS_IOS || (!isLocal && hasFirebase && !!firebaseConfig.measurementId));

let send: Send | null = null;
const queue: [string, Params | undefined][] = [];

// 네이티브 SDK 는 true/false 를 1/0 으로 남긴다 — 웹 이벤트와 값이 같도록 글자로 보낸다
const nativeParams = (params: Params = {}) =>
  Object.fromEntries(Object.entries(params).map(([k, v]) => [k, typeof v === "boolean" ? String(v) : v]));

/** iOS 앱: 광고 동의 기본값은 Info.plist 의 GOOGLE_ANALYTICS_DEFAULT_ALLOW_* 가 정한다 */
async function nativeSender(): Promise<Send> {
  const { FirebaseAnalytics } = await import("@capacitor-firebase/analytics");
  await FirebaseAnalytics.setEnabled({ enabled: true });
  return (name, params) => void FirebaseAnalytics.logEvent({ name, params: nativeParams(params) }).catch(() => null);
}

async function webSender(): Promise<Send | null> {
  const [app, fa] = await Promise.all([firebaseApp(), import("firebase/analytics")]);
  if (!(await fa.isSupported())) return null;
  fa.setConsent({ ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "granted" });
  const analytics = fa.getAnalytics(app);
  return (name, params) => fa.logEvent(analytics, name, params);
}

async function init() {
  send = await (IS_IOS ? nativeSender() : webSender());
  if (send) for (const [name, params] of queue.splice(0)) send(name, params);
}

/** 앱이 뜬 뒤 여유 있을 때 불러온다 (첫 화면을 늦추지 않게) */
export function startAnalytics() {
  if (!enabled) return;
  const go = () => init().catch(() => null);
  if ("requestIdleCallback" in window) requestIdleCallback(go, { timeout: 4000 });
  else setTimeout(go, 1500);
}

export function track(name: string, params?: Params) {
  if (!enabled) return;
  if (send) send(name, params);
  else if (queue.length < 50) queue.push([name, params]);
}
