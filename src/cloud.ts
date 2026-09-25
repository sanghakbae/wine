// Firestore: 난이도별 전체 랭킹, 와인별 정답률, 로그인한 사람의 게임 기록.
// 쓰기는 모두 Google 로그인한 사람만 (firestore.rules 참고). 읽기(랭킹·정답률)는 누구나.
import type { Firestore } from "firebase/firestore";
import { firebaseApp } from "./firebase";
import { cloudEnabled } from "./cloudFlag";
import { currentUser } from "./auth";
import type { Level } from "./game/quiz";

export { cloudEnabled };

type FS = typeof import("firebase/firestore");

interface Ctx {
  db: Firestore;
  fs: FS;
}

let ctx: Promise<Ctx> | null = null;

function cloud(): Promise<Ctx> {
  ctx ??= Promise.all([firebaseApp(), import("firebase/firestore")]).then(([app, fs]) => ({ db: fs.getFirestore(app), fs }));
  return ctx;
}

const uid = () => currentUser()?.uid ?? null;

export interface Entry {
  uid: string;
  nick: string;
  score: number;
  correct: number;
  total: number;
  lang: string;
  at: number;
  mine: boolean;
}

const entries = (c: Ctx, level: Level) => c.fs.collection(c.db, "leaderboard", level, "entries");

export async function topScores(level: Level, n = 20): Promise<Entry[] | null> {
  if (!cloudEnabled) return null;
  try {
    const c = await cloud();
    const snap = await c.fs.getDocs(c.fs.query(entries(c, level), c.fs.orderBy("score", "desc"), c.fs.limit(n)));
    return snap.docs.map((d) => {
      const x = d.data();
      return {
        uid: d.id,
        nick: String(x.nick ?? "?"),
        score: Number(x.score ?? 0),
        correct: Number(x.correct ?? 0),
        total: Number(x.total ?? 10),
        lang: String(x.lang ?? ""),
        at: x.at?.toMillis?.() ?? 0,
        mine: d.id === uid(),
      };
    });
  } catch {
    return null;
  }
}

/** 기록 등록. 이전 기록보다 낮으면 순위만 계산한다. 반환값: 전체 순위 */
export async function submitScore(level: Level, nick: string, score: number, correct: number, total: number, lang: string): Promise<number | null> {
  if (!cloudEnabled) return null;
  try {
    const me = uid();
    if (!me) return null;
    const c = await cloud();
    const { fs } = c;
    const ref = fs.doc(entries(c, level), me);
    const prev = await fs.getDoc(ref);
    const prevScore = prev.exists() ? Number(prev.data().score ?? 0) : -1;
    const best = Math.max(prevScore, score);
    if (score >= prevScore) {
      await fs.setDoc(ref, {
        nick: nick.slice(0, 12),
        score,
        correct,
        total,
        lang: lang.slice(0, 5),
        at: fs.serverTimestamp(),
        v: __APP_VERSION__.slice(0, 12),
      });
    }
    const higher = await fs.getCountFromServer(fs.query(entries(c, level), fs.where("score", ">", best)));
    return higher.data().count + 1;
  } catch {
    return null;
  }
}

/** 와인별 정답률 { n: 푼 횟수, c: 맞힌 횟수 } */
export async function wineRate(id: string): Promise<{ n: number; c: number } | null> {
  if (!cloudEnabled) return null;
  try {
    const c = await cloud();
    const snap = await c.fs.getDoc(c.fs.doc(c.db, "wineStats", id));
    if (!snap.exists()) return { n: 0, c: 0 };
    const x = snap.data();
    return { n: Number(x.n ?? 0), c: Number(x.c ?? 0) };
  } catch {
    return null;
  }
}

export function recordAnswer(id: string, correct: boolean) {
  if (!cloudEnabled) return;
  if (!uid()) return;
  cloud()
    .then(async (c) => {
      const { fs } = c;
      await fs.setDoc(fs.doc(c.db, "wineStats", id), { n: fs.increment(1), c: fs.increment(correct ? 1 : 0) }, { merge: true });
    })
    .catch(() => null);
}

// 닉네임은 기기에 기억해 둔다
const NICK = "blind-bottle:nick";
export function savedNick(): string {
  try {
    return localStorage.getItem(NICK) ?? "";
  } catch {
    return "";
  }
}
export function saveNick(n: string) {
  try {
    localStorage.setItem(NICK, n);
  } catch {
    // 무시
  }
}

// ───────────────────────── 로그인한 사람의 게임 기록 (users/{uid})

export interface Progress {
  best: Record<Level, number>;
  found: string[];
  plays: number;
}

export async function loadProgress(): Promise<Progress | null> {
  const me = uid();
  if (!me) return null;
  try {
    const c = await cloud();
    const snap = await c.fs.getDoc(c.fs.doc(c.db, "users", me));
    if (!snap.exists()) return { best: { easy: 0, normal: 0, hard: 0 }, found: [], plays: 0 };
    const x = snap.data();
    return {
      best: { easy: Number(x.best?.easy ?? 0), normal: Number(x.best?.normal ?? 0), hard: Number(x.best?.hard ?? 0) },
      found: Array.isArray(x.found) ? x.found.map(String) : [],
      plays: Number(x.plays ?? 0),
    };
  } catch {
    return null;
  }
}

export async function saveProgress(p: Progress): Promise<boolean> {
  const me = uid();
  if (!me) return false;
  try {
    const c = await cloud();
    await c.fs.setDoc(c.fs.doc(c.db, "users", me), {
      name: (currentUser()?.name ?? "").slice(0, 40),
      best: p.best,
      found: p.found.slice(0, 5000),
      plays: p.plays,
      updatedAt: c.fs.serverTimestamp(),
    });
    return true;
  } catch {
    return false;
  }
}

/** 탈퇴 전에 서버에 남은 내 기록(게임 기록·랭킹)을 지운다. 와인별 정답률은 누구 것인지 남지 않는 합계라 그대로 둔다. */
export async function deleteMyData(): Promise<void> {
  const me = uid();
  if (!me) return;
  const c = await cloud();
  const { fs } = c;
  await Promise.all([
    fs.deleteDoc(fs.doc(c.db, "users", me)),
    ...(["easy", "normal", "hard"] as Level[]).map((l) => fs.deleteDoc(fs.doc(entries(c, l), me))),
  ]);
}
