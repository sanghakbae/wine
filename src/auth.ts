// Google 로그인 (Firebase Auth). 로그인해야 기록을 서버에 저장하고 랭킹에 올릴 수 있다.
import type { Auth } from "firebase/auth";
import { firebaseApp } from "./firebase";
import { cloudEnabled } from "./cloudFlag";

export interface User {
  uid: string;
  name: string;
  photo: string | null;
}

let auth: Auth | null = null;
let current: User | null = null;
let ready = false;
const listeners = new Set<(u: User | null) => void>();

type FA = typeof import("firebase/auth");
let fa: FA | null = null;

async function init(): Promise<{ auth: Auth; fa: FA }> {
  if (auth && fa) return { auth, fa };
  const [app, mod] = await Promise.all([firebaseApp(), import("firebase/auth")]);
  fa = mod;
  auth = mod.getAuth(app);
  auth.languageCode = document.documentElement.lang || "ko";
  mod.onAuthStateChanged(auth, (u) => {
    current = u && !u.isAnonymous ? { uid: u.uid, name: u.displayName ?? u.email?.split("@")[0] ?? "Player", photo: u.photoURL } : null;
    ready = true;
    listeners.forEach((f) => f(current));
  });
  // 팝업이 막혀 리다이렉트로 로그인했다 돌아온 경우
  mod.getRedirectResult(auth).catch(() => null);
  return { auth, fa: mod };
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
    const code = (e as { code?: string }).code ?? "";
    if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") return;
    if (code === "auth/popup-blocked" || code === "auth/operation-not-supported-in-this-environment") throw new LoginError("popup");
    throw new LoginError("other");
  }
}

export async function signOut() {
  const { auth, fa } = await init();
  await fa.signOut(auth);
}

/** 계정 삭제 전 본인 확인 (최근 로그인이 필요하다). 클릭 직후 가장 먼저 불러야 팝업이 막히지 않는다 */
export async function reauthenticate() {
  const { auth, fa } = await init();
  const u = auth.currentUser;
  if (!u) throw new LoginError("other");
  await fa.reauthenticateWithPopup(u, new fa.GoogleAuthProvider());
}

/** 인증 계정 삭제 (reauthenticate 뒤, 서버 기록을 지운 다음에 부른다) */
export async function deleteAccount() {
  const { auth, fa } = await init();
  const u = auth.currentUser;
  if (u) await fa.deleteUser(u);
}
