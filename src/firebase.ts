// Firebase 앱 하나를 필요할 때 불러와 애널리틱스·Firestore·익명 로그인이 같이 쓴다.
import type { FirebaseApp } from "firebase/app";

const env = import.meta.env;
export const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const hasFirebase = !!firebaseConfig.apiKey && !!firebaseConfig.projectId;

/** 개발 서버·사설망 주소 (여기서는 통계·랭킹을 오염시키지 않는다) */
export const isLocal =
  import.meta.env.DEV ||
  /^(localhost|127\.|0\.0\.0\.0|\[::1\]|192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)/.test(location.hostname) ||
  /\.(local|localhost)$/.test(location.hostname);

let appPromise: Promise<FirebaseApp> | null = null;

export function firebaseApp(): Promise<FirebaseApp> {
  appPromise ??= import("firebase/app")
    .then(({ initializeApp, getApps, getApp }) => (getApps().length ? getApp() : initializeApp(firebaseConfig)))
    .catch((e) => {
      appPromise = null; // 실패는 기억하지 않는다 (다음에 다시 시도)
      throw e;
    });
  return appPromise;
}
