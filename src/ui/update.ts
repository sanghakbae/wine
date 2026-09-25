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
