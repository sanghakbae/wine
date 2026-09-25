// Google 로그인 (Firebase Auth). 로그인해야 기록을 서버에 저장하고 랭킹에 올릴 수 있다.
import type { Auth } from "firebase/auth";
import { firebaseApp } from "./firebase";
import { cloudEnabled } from "./cloudFlag";

export interface User {
  uid: string;
  name: string;
  photo: string | null;
}

let current: User | null = null;
let ready = false;
const listeners = new Set<(u: User | null) => void>();

type FA = typeof import("firebase/auth");

// 한 번만 준비한다: 로그인 버튼을 일찍 눌러도 두 번 불러 상태 알림이 겹치지 않게
let initP: Promise<{ auth: Auth; fa: FA }> | null = null;

function init(): Promise<{ auth: Auth; fa: FA }> {
  initP ??= Promise.all([firebaseApp(), import("firebase/auth")])
    .then(([app, fa]) => {
      const auth = fa.getAuth(app);
      auth.languageCode = document.documentElement.lang || "ko";
      fa.onAuthStateChanged(auth, (u) => {
        current = u && !u.isAnonymous ? { uid: u.uid, name: u.displayName ?? u.email?.split("@")[0] ?? "Player", photo: u.photoURL } : null;
        ready = true;
        listeners.forEach((f) => f(current));
      });
      // 팝업이 막혀 리다이렉트로 로그인했다 돌아온 경우
      fa.getRedirectResult(auth).catch(() => null);
      return { auth, fa };
    })
    .catch((e) => {
      initP = null; // 실패는 기억하지 않는다 (다음에 다시 시도)
      throw e;
    });
  return initP;
}

/** 앱 시작 때 불러 로그인 상태를 복원한다 */
export function startAuth() {
  if (!cloudEnabled) return;
  init().catch(() => null);
}

export const currentUser = () => current;
export const authReady = () => ready;

export function onUser(f: (u: User | null) => void) {
  listeners.add(f);
  return () => listeners.delete(f);
}

/** 카카오톡·인스타그램·페이스북·라인·네이버 앱 안의 브라우저: Google 이 로그인을 막는다 */
export const inAppBrowser = () => /KAKAOTALK|NAVER\(inapp|Instagram|FBAN|FBAV|Line\/|; wv\)/i.test(navigator.userAgent);

export class LoginError extends Error {
  constructor(readonly reason: "inapp" | "popup" | "other") {
    super(reason);
  }
}

export async function signIn() {
  if (inAppBrowser()) throw new LoginError("inapp");
  const { auth, fa } = await init();
  auth.languageCode = document.documentElement.lang || "ko";
  const provider = new fa.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  try {
    await fa.signInWithPopup(auth, provider);
  } catch (e) {
    if (popupError(e)) throw popupError(e);
  }
}

/** 팝업 로그인 오류 정리: 사용자가 닫은 것은 오류가 아니다(null) */
function popupError(e: unknown): LoginError | null {
  const code = (e as { code?: string }).code ?? "";
  if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request" || code === "auth/user-cancelled") return null;
  if (code === "auth/popup-blocked" || code === "auth/operation-not-supported-in-this-environment") return new LoginError("popup");
  return new LoginError("other");
}

export async function signOut() {
  const { auth, fa } = await init();
  await fa.signOut(auth);
}

/** 계정 삭제 전 본인 확인 (최근 로그인이 필요하다). 클릭 직후 가장 먼저 불러야 팝업이 막히지 않는다.
 *  반환값: 확인됨 true, 사용자가 팝업을 닫음 false. 그 밖의 실패는 LoginError */
export async function reauthenticate(): Promise<boolean> {
  const { auth, fa } = await init();
  const u = auth.currentUser;
  if (!u) throw new LoginError("other");
  try {
    await fa.reauthenticateWithPopup(u, new fa.GoogleAuthProvider());
    return true;
  } catch (e) {
    const err = popupError(e);
    if (err) throw err;
    return false;
  }
}

/** 인증 계정 삭제 (reauthenticate 뒤, 서버 기록을 지운 다음에 부른다) */
export async function deleteAccount() {
  const { auth, fa } = await init();
  const u = auth.currentUser;
  if (u) await fa.deleteUser(u);
}
