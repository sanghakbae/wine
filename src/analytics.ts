// Firebase 애널리틱스: 실제 배포 주소에서만 켠다 (개발 서버·localhost 미리보기는 통계를 오염시키지 않게 제외).
// 광고용 저장은 모두 거부로 두고, 게임 안에서 일어난 일만 이벤트로 남긴다.
import type { Analytics } from "firebase/analytics";
import { firebaseApp, firebaseConfig, hasFirebase, isLocal } from "./firebase";

type Params = Record<string, string | number | boolean>;

const enabled = import.meta.env.PROD && !isLocal && hasFirebase && !!firebaseConfig.measurementId;

let analytics: Analytics | null = null;
let log: ((a: Analytics, name: string, params?: Params) => void) | null = null;
const queue: [string, Params | undefined][] = [];

async function init() {
  const [app, fa] = await Promise.all([firebaseApp(), import("firebase/analytics")]);
  if (!(await fa.isSupported())) return;
  fa.setConsent({ ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "granted" });
  analytics = fa.getAnalytics(app);
  log = (a, name, params) => fa.logEvent(a, name, params);
  for (const [name, params] of queue.splice(0)) log(analytics, name, params);
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
  if (analytics && log) log(analytics, name, params);
  else if (queue.length < 50) queue.push([name, params]);
}
