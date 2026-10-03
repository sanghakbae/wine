// 실행 환경: iOS 앱(Capacitor, `vite build --mode ios`)인지 웹인지
/** iOS 앱으로 빌드했는지 (앱 안의 주소는 capacitor://localhost 라 주소로는 개발 서버와 구분이 안 된다) */
export const IS_IOS = import.meta.env.MODE === "ios";
/** 개발·시뮬레이터 시험 빌드에서 소리를 끈다 (VITE_SILENT=1). 스토어 제출용은 반드시 이 값 없이 빌드한다 */
export const SILENT = import.meta.env.DEV || import.meta.env.VITE_SILENT === "1";
