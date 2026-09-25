// 새 버전 배포 뒤 서비스 워커가 바뀌면, 옛 화면이 지워진 파일을 찾지 못하기 전에 새로 불러온다.
// 게임 중에는 기다렸다가 첫 화면으로 돌아올 때 새로고침한다.
let pending = false;

export function watchUpdates(isIdle: () => boolean) {
  if (!("serviceWorker" in navigator)) return;
  let hadController = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    // 처음 설치될 때는 새로고침할 필요가 없다
    if (!hadController) {
      hadController = true;
      return;
    }
    pending = true;
    if (isIdle()) location.reload();
  });
}

export const updatePending = () => pending;

/** 이번에 받은 언어별 와인 설명 파일을 오프라인 캐시에 넣어 둔다.
 *  (미리 받는 목록에서 뺀 파일이라, 첫 방문엔 서비스 워커가 아직 페이지를 맡기 전에 받아 저절로 담기지 않는다) */
export function cacheWineTexts() {
  if (!("serviceWorker" in navigator) || !("caches" in window)) return;
  navigator.serviceWorker.ready
    .then(async () => {
      const urls = performance
        .getEntriesByType("resource")
        .map((e) => e.name)
        .filter((n) => /\/assets\/i18n-[\w-]+\.js$/.test(n));
      if (!urls.length) return;
      const cache = await caches.open("wine-texts");
      await Promise.all(urls.map(async (u) => (await cache.match(u)) ?? cache.add(u)));
    })
    .catch(() => null);
}
