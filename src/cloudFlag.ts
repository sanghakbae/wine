import { hasFirebase } from "./firebase";

/**
 * 로그인·서버 저장·랭킹을 켤지. Firebase 설정만 있으면 개발 서버에서도 켠다
 * (첫 화면에 "시작하기 / Google 로그인" 이 늘 보여야 한다). 이용 통계만 배포 주소에서 켠다 (analytics.ts).
 */
export const cloudEnabled = hasFirebase;
