// 로그인 (Firebase Auth). 로그인해야 기록을 서버에 저장하고 랭킹에 올릴 수 있다.
//  - 웹: Google 팝업
//  - iOS 앱: Apple·Google 네이티브 로그인 창으로 토큰을 받아 웹 SDK 에 로그인한다 (웹뷰 안 구글 OAuth 는 구글이 막는다)
import type { Auth, AuthCredential, User as FbUser } from "firebase/auth";
import { firebaseApp, firebaseConfig } from "./firebase";
import { cloudEnabled } from "./cloudFlag";
import { IS_IOS } from "./platform";

export type Provider = "google" | "apple";

export interface User {
  uid: string;
  name: string;
  photo: string | null;
  provider: Provider | null;
}

function toUser(u: FbUser): User {
  const pid = u.providerData[0]?.providerId;
  const provider: Provider | null = pid === "apple.com" ? "apple" : pid === "google.com" ? "google" : null;
  // Apple '이메일 가리기'는 무작위 주소라 이름 대신 쓰지 않는다 (랭킹에 앞 3자가 공개된다)
  const fromMail = provider === "apple" ? null : u.email?.split("@")[0];
  return { uid: u.uid, name: u.displayName ?? fromMail ?? "Player", photo: u.photoURL, provider };
}

/** 로그인할 수 있는 방법 — iOS 앱은 Apple 로그인도 함께 둔다 (구글 로그인이 있으면 Apple 로그인도 있어야 한다, 가이드라인 4.8) */
export const providers: Provider[] = IS_IOS ? ["apple", "google"] : ["google"];

let current: User | null = null;
let nativeSigningIn = false;
let ready = false;
const listeners = new Set<(u: User | null) => void>();

type FA = typeof import("firebase/auth");

// 한 번만 준비한다: 로그인 버튼을 일찍 눌러도 두 번 불러 상태 알림이 겹치지 않게
let initP: Promise<{ auth: Auth; fa: FA }> | null = null;

function init(): Promise<{ auth: Auth; fa: FA }> {
  initP ??= Promise.all([firebaseApp(), import("firebase/auth")])
    .then(([app, fa]) => {
      // iOS 앱(capacitor://)은 팝업·리다이렉트 해석기를 붙이면 로그인 상태 복원이 멈출 수 있어 저장소만 정해 초기화한다
      const auth = IS_IOS ? fa.initializeAuth(app, { persistence: fa.indexedDBLocalPersistence }) : fa.getAuth(app);
      auth.languageCode = document.documentElement.lang || "ko";
      fa.onAuthStateChanged(auth, (u) => {
        current = u && !u.isAnonymous ? toUser(u) : null;
        ready = true;
        // 네이티브 로그인 중에는 이름(Apple 은 첫 로그인 때만 준다)을 넣은 뒤 signIn 이 알린다 — 'Player' 로 랭킹에 오르지 않게
        if (!nativeSigningIn) listeners.forEach((f) => f(current));
      });
      // 팝업이 막혀 리다이렉트로 로그인했다 돌아온 경우 (웹)
      if (!IS_IOS) fa.getRedirectResult(auth).catch(() => null);
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

/** 네이티브 로그인 플러그인 — 웹 빌드에서는 이 import 가 통째로 빠진다 */
function nativeAuth(): Promise<typeof import("@capacitor-firebase/authentication")> {
  return import.meta.env.MODE === "ios" ? import("@capacitor-firebase/authentication") : Promise.reject(new Error("iOS only"));
}

/** iOS: 네이티브 로그인 창으로 토큰을 받아 웹 SDK 용 자격 증명으로 바꾼다.
 *  Apple 은 이름을 처음 로그인할 때 한 번만 주므로 그 이름도 넘기고, code 는 계정 삭제 때 Apple 연결 해제에 쓴다 */
async function nativeCredential(p: Provider, fa: FA): Promise<{ cred: AuthCredential; code?: string; name: string | null }> {
  const { FirebaseAuthentication } = await nativeAuth();
  if (p === "apple") {
    const r = await FirebaseAuthentication.signInWithApple({ skipNativeAuth: true });
    const c = r.credential;
    if (!c?.idToken) throw new Error("no Apple token");
    return { cred: new fa.OAuthProvider("apple.com").credential({ idToken: c.idToken, rawNonce: c.nonce }), code: c.authorizationCode, name: r.user?.displayName ?? null };
  }
  const r = await FirebaseAuthentication.signInWithGoogle({ skipNativeAuth: true });
  const c = r.credential;
  if (!c?.idToken) throw new Error("no Google token");
  return { cred: fa.GoogleAuthProvider.credential(c.idToken, c.accessToken), name: null };
}

/** 네이티브 로그인 오류: 사용자가 취소했으면 null */
function nativeError(e: unknown): LoginError | null {
  const msg = `${(e as { code?: string })?.code ?? ""} ${(e as { message?: string })?.message ?? e}`;
  if (/cancel|closed-by-user|1001|-5\b/i.test(msg)) return null;
  return new LoginError("other");
}

export async function signIn(p: Provider = "google") {
  if (IS_IOS) {
    const { auth, fa } = await init();
    nativeSigningIn = true;
    try {
      const { cred, name } = await nativeCredential(p, fa);
      const r = await fa.signInWithCredential(auth, cred);
      if (name && !r.user.displayName) await fa.updateProfile(r.user, { displayName: name }).catch(() => null);
    } catch (e) {
      const err = nativeError(e);
      if (err) throw err;
    } finally {
      nativeSigningIn = false;
      // 로그인이 끝난(또는 취소된) 지금 상태를 한 번 알린다
      current = auth.currentUser && !auth.currentUser.isAnonymous ? toUser(auth.currentUser) : null;
      listeners.forEach((f) => f(current));
    }
    return;
  }
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
  if (IS_IOS) await nativeAuth().then(({ FirebaseAuthentication }) => FirebaseAuthentication.signOut()).catch(() => null);
}

/** iOS Apple 로그인 사용자의 재인증 때 받은 인증 코드 (계정 삭제 때 Apple 연결 해제에 쓴다) */
let appleCode: string | undefined;

/** 계정 삭제 전 본인 확인 (최근 로그인이 필요하다). 클릭 직후 가장 먼저 불러야 팝업이 막히지 않는다.
 *  반환값: 확인됨 true, 사용자가 팝업을 닫음 false. 그 밖의 실패는 LoginError */
export async function reauthenticate(): Promise<boolean> {
  const { auth, fa } = await init();
  const u = auth.currentUser;
  if (!u) throw new LoginError("other");
  if (IS_IOS) {
    try {
      const { cred, code } = await nativeCredential(toUser(u).provider ?? "google", fa);
      await fa.reauthenticateWithCredential(u, cred);
      appleCode = code;
      return true;
    } catch (e) {
      const err = nativeError(e);
      if (err) throw err;
      return false;
    }
  }
  try {
    await fa.reauthenticateWithPopup(u, new fa.GoogleAuthProvider());
    return true;
  } catch (e) {
    const err = popupError(e);
    if (err) throw err;
    return false;
  }
}

/** Apple 로그인 연결을 끊는다 (가이드라인 5.1.1(v)). 네이티브 Apple 로그인이 주는 것은 '인증 코드'라 REST 로 tokenType CODE 를 보낸다.
 *  실패해도 계정 삭제는 계속한다 */
async function revokeApple(u: FbUser, code: string) {
  try {
    const idToken = await u.getIdToken();
    await fetch(`https://identitytoolkit.googleapis.com/v2/accounts:revokeToken?key=${firebaseConfig.apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ providerId: "apple.com", tokenType: "CODE", token: code, idToken }),
    });
  } catch {
    // 무시
  }
}

/** 인증 계정 삭제 (reauthenticate 뒤, 서버 기록을 지운 다음에 부른다) */
export async function deleteAccount() {
  const { auth, fa } = await init();
  const u = auth.currentUser;
  if (!u) return;
  if (IS_IOS && appleCode && toUser(u).provider === "apple") await revokeApple(u, appleCode);
  appleCode = undefined;
  await fa.deleteUser(u);
  if (IS_IOS) await nativeAuth().then(({ FirebaseAuthentication }) => FirebaseAuthentication.signOut()).catch(() => null);
}
