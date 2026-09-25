import type { Level } from "./quiz";

// 기기 안에만 남는 기록: 최고 점수, 셀러(맞힌 와인), 판 수

interface Save {
  best: Record<Level, number>;
  found: string[];
  plays: number;
  level: Level;
}

const KEY = "blind-bottle:v1";

function load(): Save {
  const empty: Save = { best: { easy: 0, normal: 0, hard: 0 }, found: [], plays: 0, level: "easy" };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    const s = JSON.parse(raw) as Partial<Save>;
    return { ...empty, ...s, best: { ...empty.best, ...(s.best ?? {}) } };
  } catch {
    return empty;
  }
}

const state = load();
const foundSet = new Set(state.found);

function persist() {
  try {
    state.found = [...foundSet];
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // 저장 공간을 못 쓰는 환경(사생활 보호 창 등)에서는 기록 없이 진행
  }
}

export const store = {
  get level() {
    return state.level;
  },
  set level(l: Level) {
    state.level = l;
    persist();
  },
  best(l: Level) {
    return state.best[l];
  },
  get plays() {
    return state.plays;
  },
  isFound(id: string) {
    return foundSet.has(id);
  },
  get foundCount() {
    return foundSet.size;
  },
  addFound(id: string) {
    if (foundSet.has(id)) return false;
    foundSet.add(id);
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
};
