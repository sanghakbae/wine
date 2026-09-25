import { track } from "../analytics";

// 홈 화면 설치: 안드로이드·데스크톱 크롬은 설치 창을 띄울 수 있고, iOS 사파리는 안내 문구만 보여 준다.

interface InstallPrompt extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

let deferred: InstallPrompt | null = null;
const listeners = new Set<() => void>();

// 첫 화면에 설치 버튼이 없으니 preventDefault 하지 않는다: 브라우저가 자체 설치 안내(미니 인포바 등)를 띄우게 둔다
window.addEventListener("beforeinstallprompt", (e) => {
  deferred = e as InstallPrompt;
  listeners.forEach((f) => f());
});
window.addEventListener("appinstalled", () => {
  track("app_installed");
  deferred = null;
  listeners.forEach((f) => f());
});

export const standalone = () =>
  matchMedia("(display-mode: standalone)").matches || (navigator as unknown as { standalone?: boolean }).standalone === true;

export const canInstall = () => !!deferred && !standalone();

/** iOS 사파리에서 아직 홈 화면에 안 올린 경우 */
export const iosNeedsTip = () => {
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return ios && !standalone();
};

export async function install() {
  if (!deferred) return;
  const d = deferred;
  deferred = null;
  await d.prompt();
  await d.userChoice.catch(() => null);
  listeners.forEach((f) => f());
}

export function onInstallChange(f: () => void) {
  listeners.add(f);
}
