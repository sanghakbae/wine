import { hasFirebase, isLocal } from "./firebase";

/** 로그인·서버 저장·랭킹을 켤지. 실제 배포 주소에서만 켜고, 개발 중 시험하려면 주소 뒤에 ?cloud 를 붙인다. */
export const cloudEnabled = hasFirebase && (!isLocal || new URLSearchParams(location.search).has("cloud"));
