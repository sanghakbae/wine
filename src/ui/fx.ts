// 화면 움직임 (anime.js). 모두 짧고 가볍게: 보는 사람이 기다리지 않게 0.5초 안에 끝난다.
// 움직임 줄이기를 켠 기기에서는 아무것도 하지 않는다. 끝나면 인라인 스타일을 지워 CSS(:active, 숨김 등)가 그대로 듣게 한다.
import { animate } from "animejs/animation";
import { stagger, cleanInlineStyles } from "animejs/utils";

type Targets = Element | Element[] | NodeListOf<Element> | HTMLCollection | null | undefined;

const reduce = () => typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;

function list(t: Targets): Element[] {
  if (!t) return [];
  if (t instanceof Element) return [t];
  return [...t];
}

function run(t: Targets, params: Parameters<typeof animate>[1]) {
  const els = list(t);
  if (!els.length || reduce()) return;
  const a = animate(els, params);
  a.then(() => cleanInlineStyles(a));
}

/** 아래에서 살짝 떠오르며 차례로 나타난다 (목록·버튼 묶음) */
export function rise(t: Targets, { gap = 45, delay = 0, y = 12 } = {}) {
  run(t, { opacity: [0, 1], translateY: [y, 0], duration: 420, delay: stagger(gap, { start: delay }), ease: "outCubic" });
}

/** 제자리에서 커지며 나타난다 (타일·별) */
export function pop(t: Targets, { gap = 35, delay = 0 } = {}) {
  run(t, { opacity: [0, 1], scale: [0.86, 1], duration: 380, delay: stagger(gap, { start: delay }), ease: "outBack(1.6)" });
}

/** 정답 보기: 한 번 튀어 오른다 */
export function bounce(t: Targets) {
  run(t, { scale: [1, 1.05, 1], duration: 420, ease: "outQuad" });
}

/** 오답 보기: 좌우로 흔들린다 */
export function shake(t: Targets) {
  run(t, { translateX: [0, -7, 7, -5, 5, -2, 0], duration: 420, ease: "linear" });
}

/** 정답 보기에서 '+점수'가 떠올랐다 사라진다 */
export function floatPoints(from: Element | null, text: string) {
  if (!from || reduce()) return;
  const r = from.getBoundingClientRect();
  const el = document.createElement("div");
  el.className = "fx-pts";
  el.textContent = text;
  el.style.left = `${r.left + r.width / 2}px`;
  el.style.top = `${r.top + r.height / 2}px`;
  document.body.appendChild(el);
  animate(el, {
    translateX: "-50%",
    translateY: ["-50%", "-210%"],
    opacity: [{ to: 1, duration: 120 }, { to: 1, duration: 420 }, { to: 0, duration: 300 }],
    scale: [0.7, 1.08],
    duration: 840,
    ease: "outCubic",
  }).then(() => el.remove());
}

/** 숫자가 이전 값에서 새 값까지 굴러간다 (점수) */
export function countUp(el: Element | null, from: number, to: number, format: (n: number) => string, duration = 600) {
  if (!el) return;
  if (reduce() || from === to) {
    el.textContent = format(to);
    return;
  }
  const o = { v: from };
  el.textContent = format(from);
  animate(o, {
    v: to,
    duration,
    ease: "outCubic",
    onUpdate: () => (el.textContent = format(Math.round(o.v))),
  });
}

/** 연속 정답 배지·별처럼 강조할 것을 한 번 두근거리게 */
export function pulse(t: Targets) {
  run(t, { scale: [1, 1.18, 1], duration: 360, ease: "outQuad" });
}
