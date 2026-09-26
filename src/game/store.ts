import { CLEAR_AT, MAX_POINTS, STAGES, STAGE_ROUNDS, starsFor, type Level } from "./quiz";
import { LEVEL_IDS, clampInt, emptyStages, mergeStages, type StageProg, type Stages, type Summary } from "./stages";
import { onUser } from "../auth";
import { loadProgress, saveProgress } from "../cloud";

// 게임 기록: 최고 점수, 레벨 진행(레벨마다 가장 많이 맞힌 수·최고 점수), 셀러(맞힌 와인), 판 수.
//  - 로그인 안 함(손님): 메모리에만 있고 창을 닫으면 사라진다.
//  - Google 로그인: Firestore users/{uid} 에 저장하고, 빨리 뜨도록 기기에도 사용자별로 캐시한다.
// 난이도 선택은 기록이 아니라 화면 설정이라 기기에 남긴다.

interface State {
  best: Record<Level, number>;
  stages: Stages;
  found: Set<string>;
  plays: number;
}

const empty = (): State => ({ best: { easy: 0, normal: 0, hard: 0 }, stages: emptyStages(), found: new Set(), plays: 0 });

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
  stages?: Partial<Record<Level, Partial<StageProg>>>;
  found?: string[];
  plays?: number;
  level?: Level;
}

function merge(...parts: (Plain | State | null)[]): State {
  const s = empty();
  for (const p of parts) {
    if (!p) continue;
    for (const l of LEVEL_IDS) s.best[l] = Math.max(s.best[l], clampInt(p.best?.[l], STAGE_ROUNDS * MAX_POINTS));
    mergeStages(p.stages, s.stages);
    for (const id of p.found ?? []) s.found.add(id);
    s.plays = Math.max(s.plays, Number(p.plays ?? 0));
  }
  return s;
}

const plain = (s: State) => ({ best: s.best, stages: s.stages, found: [...s.found], plays: s.plays });

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
  const before = JSON.stringify(plain(state));
  state = merge(state, merged);
  write(cacheKey(me), plain(state));
  // 다른 기기에서 쌓은 기록이 합쳐졌으면 화면도 다시 그린다
  if (JSON.stringify(plain(state)) !== before) listeners.forEach((f) => f());
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
    // 서버 기록을 받기 전에 먼저 기기에 남긴다 (그 사이 새로고침돼도 손님으로 한 판이 사라지지 않게)
    write(cacheKey(uid), plain(state));
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
  /** 레벨 한 판을 끝낸다. 반환: 클리어했는지, 별, 이 레벨 최고 점수를 새로 냈는지, 이번에 처음 클리어했는지 */
  finishStage(l: Level, stage: number, correct: number, score: number) {
    const i = stage - 1;
    const p = state.stages[l];
    const wasCleared = p.c[i] >= CLEAR_AT;
    const cleared = correct >= CLEAR_AT;
    const isBest = score > p.s[i];
    state.plays++;
    p.c[i] = Math.max(p.c[i], correct);
    p.s[i] = Math.max(p.s[i], score);
    state.best[l] = Math.max(state.best[l], score);
    persist();
    return { cleared, stars: starsFor(correct), isBest, firstClear: cleared && !wasCleared };
  },
  /** Lv.stage 의 기록 (가장 많이 맞힌 수·최고 점수·별) */
  stage(l: Level, stage: number) {
    const c = state.stages[l].c[stage - 1] ?? 0;
    return { correct: c, score: state.stages[l].s[stage - 1] ?? 0, stars: starsFor(c), cleared: c >= CLEAR_AT };
  },
  /** Lv.1 은 늘 열려 있고, 그다음은 앞 레벨을 클리어하면 열린다 */
  unlocked(l: Level, stage: number) {
    return stage <= 1 || state.stages[l].c[stage - 2] >= CLEAR_AT;
  },
  /** 이어서 할 레벨: 아직 클리어하지 못한 첫 레벨 (모두 클리어했으면 마지막 레벨) */
  nextStage(l: Level) {
    const i = state.stages[l].c.findIndex((c) => c < CLEAR_AT);
    return i < 0 ? STAGES : i + 1;
  },
  summary(l: Level): Summary {
    const p = state.stages[l];
    let cleared = 0;
    let stars = 0;
    let pts = 0;
    for (let i = 0; i < STAGES; i++) {
      if (p.c[i] < CLEAR_AT) continue;
      cleared++;
      stars += starsFor(p.c[i]);
      pts += p.s[i];
    }
    return { cleared, stars, pts };
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
