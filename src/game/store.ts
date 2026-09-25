import type { Level } from "./quiz";
import { onUser } from "../auth";
import { loadProgress, saveProgress } from "../cloud";

// 게임 기록: 최고 점수, 셀러(맞힌 와인), 판 수.
//  - 로그인 안 함(손님): 메모리에만 있고 창을 닫으면 사라진다.
//  - Google 로그인: Firestore users/{uid} 에 저장하고, 빨리 뜨도록 기기에도 사용자별로 캐시한다.
// 난이도 선택은 기록이 아니라 화면 설정이라 기기에 남긴다.

/** 최고 점수를 낸 판 (랭킹 등록에는 그 판에서 맞힌 수도 있어야 한다) */
export interface BestGame {
  score: number;
  correct: number;
}

interface State {
  best: Record<Level, number>;
  /** 난이도별 최고 점수 판. 기기에만 둔다 (손님으로 낸 기록을 로그인한 뒤 랭킹에 올리려고) */
  games: Partial<Record<Level, BestGame>>;
  found: Set<string>;
  plays: number;
}

const empty = (): State => ({ best: { easy: 0, normal: 0, hard: 0 }, games: {}, found: new Set(), plays: 0 });

const LEVEL_KEY = "blind-bottle:level";
const LEGACY_KEY = "blind-bottle:v1"; // 로그인 기능 전(1.2.0 까지) 기기에 남긴 기록
const cacheKey = (uid: string) => `blind-bottle:u:${uid}`;

function read<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}
function write(key: string, v: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(v));
  } catch {
    // 저장 공간을 못 쓰면 서버 저장만
  }
}

interface Plain {
  best?: Partial<Record<Level, number>>;
  games?: Partial<Record<Level, BestGame>>;
  found?: string[];
  plays?: number;
  level?: Level;
}

function merge(...parts: (Plain | State | null)[]): State {
  const s = empty();
  for (const p of parts) {
    if (!p) continue;
    for (const l of ["easy", "normal", "hard"] as Level[]) {
      s.best[l] = Math.max(s.best[l], Number(p.best?.[l] ?? 0));
      const g = "games" in p ? p.games?.[l] : undefined;
      if (g && Number.isInteger(g.score) && Number.isInteger(g.correct) && g.score > (s.games[l]?.score ?? -1)) s.games[l] = { score: g.score, correct: g.correct };
    }
    for (const id of p.found ?? []) s.found.add(id);
    s.plays = Math.max(s.plays, Number(p.plays ?? 0));
  }
  return s;
}

const plain = (s: State) => ({ best: s.best, games: s.games, found: [...s.found], plays: s.plays });

let state = empty();
let uid: string | null = null;
let level: Level = read<Level>(LEVEL_KEY) ?? read<Plain>(LEGACY_KEY)?.level ?? "easy";
const listeners = new Set<() => void>();
let timer = 0;

function persist() {
  if (!uid) return;
  write(cacheKey(uid), plain(state));
  clearTimeout(timer);
  timer = window.setTimeout(flushNow, 800);
}

/** 미뤄 둔 서버 저장을 지금 한다 (로그아웃 직전 등). 서버 기록과 합친 결과를 받아 화면에도 반영한다 */
async function flushNow() {
  clearTimeout(timer);
  timer = 0;
  const me = uid;
  if (!me) return false;
  const merged = await saveProgress(plain(state));
  if (!merged || uid !== me) return false;
  const before = state.found.size + state.plays;
  state = merge(state, merged);
  write(cacheKey(me), plain(state));
  if (state.found.size + state.plays !== before) listeners.forEach((f) => f());
  return true;
}


onUser(async (u) => {
  if (u && u.uid !== uid) {
    // 손님으로 방금 한 기록은 계정으로 옮긴다. 다른 계정에서 바로 바꿔 들어온 경우엔 앞 계정 기록을 섞지 않는다
    const guest = uid === null ? state : null;
    clearTimeout(timer);
    timer = 0;
    uid = u.uid;
    const legacy = read<Plain>(LEGACY_KEY);
    state = merge(guest, read<Plain>(cacheKey(uid)), legacy);
    listeners.forEach((f) => f());
    const remote = await loadProgress();
    if (uid !== u.uid) return;
    state = merge(state, remote);
    if (legacy) {
      try {
        localStorage.removeItem(LEGACY_KEY);
      } catch {
        // 무시
      }
    }
    persist();
  } else if (!u && uid) {
    uid = null;
    state = empty();
  }
  listeners.forEach((f) => f());
});

export const store = {
  /** 서버에 저장되는 중인지 (Google 로그인) */
  get saving() {
    return uid !== null;
  },
  get level() {
    return level;
  },
  set level(l: Level) {
    level = l;
    write(LEVEL_KEY, l);
  },
  best(l: Level) {
    return state.best[l];
  },
  get plays() {
    return state.plays;
  },
  isFound(id: string) {
    return state.found.has(id);
  },
  get foundCount() {
    return state.found.size;
  },
  addFound(id: string) {
    if (state.found.has(id)) return false;
    state.found.add(id);
    persist();
    return true;
  },
  finish(l: Level, score: number, correct: number) {
    state.plays++;
    const isBest = score > state.best[l];
    if (isBest) state.best[l] = score;
    if (score > (state.games[l]?.score ?? -1)) state.games[l] = { score, correct };
    persist();
    return isBest;
  },
  /** 랭킹에 올릴 이 난이도의 최고 점수 판 (맞힌 수를 아는 판만) */
  bestGame(l: Level): BestGame | null {
    return state.games[l] ?? null;
  },
  onChange(f: () => void) {
    listeners.add(f);
  },
  /** 로그아웃 전에: 미뤄 둔 저장을 마저 한다 */
  flush() {
    return flushNow();
  },
  /** 계정 삭제 전에: 예약된 저장을 취소하고 기기에 남은 이 계정의 사본을 지운다 */
  forget() {
    clearTimeout(timer);
    timer = 0;
    if (!uid) return;
    try {
      localStorage.removeItem(cacheKey(uid));
    } catch {
      // 무시
    }
  },
};
