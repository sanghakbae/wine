import type { Wine } from "./wines";

/** 이 와인이 실제로 나올 법한 빈티지 하나를 고른다. NV 는 null. */
export function pickVintage(w: Wine, rand = Math.random): string | null {
  if (w.nv) return null;
  const from = w.since ? Math.max(w.since, 1990) : 1995;
  const to = 2021;
  // 최근 연도일수록 자주 나오게
  const t = Math.pow(rand(), 0.6);
  return String(Math.round(to - (to - from) * (1 - t)));
}
