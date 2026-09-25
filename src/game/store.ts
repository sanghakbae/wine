import type { Level } from "./quiz";
import { onBeforeRedirect, onUser } from "../auth";
import { loadProgress, saveProgress } from "../cloud";

// 게임 기록: 최고 점수, 셀러(맞힌 와인), 판 수.
//  - 로그인 안 함(손님): 메모리에만 있고 창을 닫으면 사라진다.
//  - Google 로그인: Firestore users/{uid} 에 저장하고, 빨리 뜨도록 기기에도 사용자별로 캐시한다.
// 난이도 선택은 기록이 아니라 화면 설정이라 기기에 남긴다.

interface State {
  best: Record<Level, number>;
  found: Set<string>;
  plays: number;
}

const empty = (): State => ({ best: { easy: 0, normal: 0, hard: 0 }, found: new Set(), plays: 0 });

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
  found?: string[];
  plays?: number;
  level?: Level;
}

function merge(...parts: (Plain | State | null)[]): State {
  const s = empty();
  for (const p of parts) {
    if (!p) continue;
    for (const l of ["easy", "normal", "hard"] as Level[]) s.best[l] = Math.max(s.best[l], Number(p.best?.[l] ?? 0));
    for (const id of p.found ?? []) s.found.add(id);
    s.plays = Math.max(s.plays, Number(p.plays ?? 0));
  }
  return s;
}

const plain = (s: State) => ({ best: s.best, found: [...s.found], plays: s.plays });

// 리다이렉트 로그인으로 페이지가 다시 열렸을 때, 떠나기 전 손님 기록을 되살린다 (같은 탭에서 한 번만)
const GUEST_STASH = "blind-bottle:guest-stash";
function takeGuestStash(): State {
  try {
    const raw = sessionStorage.getItem(GUEST_STASH);
    sessionStorage.removeItem(GUEST_STASH);
    return raw ? merge(JSON.parse(raw) as Plain) : empty();
  } catch {
    return empty();
  }
}

let state = takeGuestStash();
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

/** 미뤄 둔 서버 저장을 지금 한다 (로그아웃 직전 등) */
function flushNow() {
  clearTimeout(timer);
  timer = 0;
  if (uid) return saveProgress(plain(state));
  return Promise.resolve(false);
}

onBeforeRedirect(() => {
  if (uid) return;
  try {
    sessionStorage.setItem(GUEST_STASH, JSON.stringify(plain(state)));
  } catch {
    // 무시
  }
});

onUser(async (u) => {
  if (u && u.uid !== uid) {
    uid = u.uid;
    const guest = state; // 손님으로 방금 한 기록도 계정으로 옮긴다
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
  finish(l: Level, score: number) {
    state.plays++;
    const isBest = score > state.best[l];
    if (isBest) state.best[l] = score;
    persist();
    return isBest;
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
