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

/** 리다이렉트 로그인은 페이지를 새로 불러오므로, 떠나기 직전에 손님 기록을 잠깐 맡겨 둘 곳 */
let beforeRedirect: (() => void) | null = null;
export function onBeforeRedirect(f: () => void) {
  beforeRedirect = f;
}

export async function signIn() {
  const { auth, fa } = await init();
  auth.languageCode = document.documentElement.lang || "ko";
  const provider = new fa.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  try {
    await fa.signInWithPopup(auth, provider);
  } catch (e) {
    const code = (e as { code?: string }).code ?? "";
    // 팝업을 막는 환경(일부 인앱 브라우저·홈 화면 앱)에서는 리다이렉트로
    if (code === "auth/popup-blocked" || code === "auth/operation-not-supported-in-this-environment") {
      beforeRedirect?.();
      await fa.signInWithRedirect(auth, provider);
    } else if (code !== "auth/popup-closed-by-user" && code !== "auth/cancelled-popup-request") throw e;
  }
}

export async function signOut() {
  const { auth, fa } = await init();
  await fa.signOut(auth);
}

/** 계정 삭제(탈퇴): 서버 기록을 지운 뒤 인증 계정도 지운다. 오래전에 로그인했다면 다시 로그인이 필요할 수 있다. */
export async function deleteAccount() {
  const { auth, fa } = await init();
  const u = auth.currentUser;
  if (!u) return;
  try {
    await fa.deleteUser(u);
  } catch (e) {
    if ((e as { code?: string }).code === "auth/requires-recent-login") {
      await fa.reauthenticateWithPopup(u, new fa.GoogleAuthProvider());
      await fa.deleteUser(u);
    } else throw e;
  }
}
