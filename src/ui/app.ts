import { SHAPES } from "../bottle/shapes";
import { pickVintage } from "../data/vintage";
import { WINES, type Wine } from "../data/wines";
import {
  LEVELS,
  hintLabel,
  hintText,
  levelAbout,
  levelName,
  makeQuestion,
  qtypeLabel,
  wineQuiz,
  type HintKey,
  type Level,
  type Question,
  type QType,
} from "../game/quiz";
import { store } from "../game/store";
import {
  LANG_NAMES,
  countryName,
  factOf,
  familyAbout,
  familyName,
  grapeName,
  lang,
  loadWineTexts,
  originalFull,
  producerOf,
  regionName,
  setLang,
  t,
  typeName,
  wineName,
  type Lang,
} from "../i18n";
import type { Stage } from "../scene/stage";
import type { Music } from "../audio/music";
import { bottleIcon } from "./icon";
import { canInstall, install, iosNeedsTip, onInstallChange } from "./install";
import { track } from "../analytics";

/** style.css 의 오른쪽 기둥 레이아웃 조건과 같아야 한다 */
const SIDE_QUERY = "(min-width: 900px), (orientation: landscape) and (max-height: 520px)";

const ROUNDS = 10;

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

interface RoundResult {
  q: Question;
  correct: boolean;
  points: number;
}

type Mode = { kind: "game"; level: Level } | { kind: "wine"; level: Level; wine: Wine; queue: Question[] };

export class App {
  private hud: HTMLElement;
  private panel: HTMLElement;
  private cellar: HTMLElement;
  private sound: HTMLButtonElement;
  private mode: Mode = { kind: "game", level: store.level };
  private round = 0;
  private total = ROUNDS;
  private score = 0;
  private streak = 0;
  private results: RoundResult[] = [];
  private used = new Set<string>();
  private recent: QType[] = [];
  private q: Question | null = null;
  private answered = false;
  private hintsUsed: HintKey[] = [];
  private titleTimer = 0;

  constructor(
    root: HTMLElement,
    private stage: Stage,
    private music: Music,
  ) {
    root.insertAdjacentHTML(
      "beforeend",
      `<header class="hud" hidden></header>
       <section class="panel"></section>
       <button class="sound" aria-pressed="false"></button>
       <div class="cellar" hidden></div>`,
    );
    this.hud = root.querySelector(".hud")!;
    this.panel = root.querySelector(".panel")!;
    this.cellar = root.querySelector(".cellar")!;
    this.sound = root.querySelector(".sound")!;
    this.sound.onclick = () => {
      this.music.toggle();
      this.renderSound();
      track("music_toggle", { on: this.music.on });
    };
    this.music.onChange = () => this.renderSound();
    onInstallChange(() => {
      if (this.panel.classList.contains("title")) this.showTitle();
    });
    this.renderSound();
    new ResizeObserver(() => this.syncInsets()).observe(this.panel);
    new ResizeObserver(() => this.syncInsets()).observe(this.hud);
    window.addEventListener("resize", () => {
      this.syncInsets();
      fitLines(this.panel);
    });
    window.addEventListener("keydown", (e) => this.onKey(e));
    this.showTitle();
  }

  private renderSound() {
    const on = this.music.on;
    this.sound.innerHTML = on
      ? `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M9 17.5a2.5 2.5 0 1 1-2-2.45V5l11-2v11.5a2.5 2.5 0 1 1-2-2.45V6.6L9 7.9z"/></svg>`
      : `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M9 17.5a2.5 2.5 0 1 1-2-2.45V5l11-2v11.5a2.5 2.5 0 1 1-2-2.45V6.6L9 7.9z" opacity=".45"/><path d="M4 4l16 16" stroke="currentColor" stroke-width="2"/></svg>`;
    this.sound.classList.toggle("off", !on);
    this.sound.setAttribute("aria-pressed", String(on));
    this.sound.setAttribute("aria-label", "Music");
  }

  private syncInsets() {
    const wide = matchMedia(SIDE_QUERY).matches;
    const pr = this.panel.getBoundingClientRect();
    this.stage.bottomInset = wide ? 0 : pr.height + 8;
    this.stage.rightInset = wide ? pr.width + 24 : 0;
    this.stage.topInset = this.hud.hidden ? 0 : this.hud.getBoundingClientRect().height;
    this.stage.resize();
  }

  // ───────────────────────── 첫 화면
  private showTitle() {
    this.hud.hidden = true;
    this.cellar.hidden = true;
    document.title = `${t("appName")} — Wine Quiz`;
    const level = store.level;
    const spin = () => {
      const pool = WINES.filter((w) => w.tier <= 2);
      const w = pool[Math.floor(Math.random() * pool.length)];
      this.stage.show(w, { name: true, info: true }, pickVintage(w));
    };
    spin();
    clearInterval(this.titleTimer);
    this.titleTimer = window.setInterval(spin, 7000);
    this.panel.className = "panel title";
    this.panel.innerHTML = `
      <div class="brand">
        <div class="logo">BLIND BOTTLE</div>
        <h1>${t("appName")}</h1>
        <p class="tag">${t("tagline", { n: WINES.length })}</p>
      </div>
      <div class="levels" role="radiogroup">
        ${(Object.keys(LEVELS) as Level[])
          .map(
            (l) => `<button class="level ${l === level ? "on" : ""}" data-level="${l}" role="radio" aria-checked="${l === level}">
              <b>${levelName(l)}</b><span>${levelAbout(l)}</span>
              <em>🏆 ${store.best(l).toLocaleString(lang())}</em>
            </button>`,
          )
          .join("")}
      </div>
      <div class="row">
        <button class="primary" data-act="start">${t("start", { n: ROUNDS })}</button>
        <button data-act="cellar">${t("cellarBtn", { a: store.foundCount, b: WINES.length })}</button>
        ${canInstall() ? `<button class="install" data-act="install">⬇ ${t("install")}</button>` : ""}
      </div>
      ${iosNeedsTip() ? `<p class="ios-tip">${t("iosTip")}</p>` : ""}
      <div class="foot">
        <label class="lang">🌐 <select aria-label="${t("langLabel")}">${(Object.keys(LANG_NAMES) as Lang[])
          .map((l) => `<option value="${l}" ${l === lang() ? "selected" : ""}>${LANG_NAMES[l]}</option>`)
          .join("")}</select></label>
        <span>${t("foot")} · v${__APP_VERSION__}</span>
      </div>`;
    this.panel.querySelector<HTMLSelectElement>(".lang select")!.onchange = async (e) => {
      setLang((e.target as HTMLSelectElement).value as Lang);
      track("language_change", { lang: lang() });
      await loadWineTexts();
      this.showTitle();
    };
    this.panel.onclick = (e) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-level],[data-act]");
      if (!el) return;
      this.music.unlock();
      if (el.dataset.level) {
        store.level = el.dataset.level as Level;
        this.showTitle();
      } else if (el.dataset.act === "start") this.startGame({ kind: "game", level: store.level });
      else if (el.dataset.act === "cellar") this.openCellar();
      else if (el.dataset.act === "install") {
        track("install_click");
        install();
      }
    };
    this.syncInsets();
  }

  // ───────────────────────── 게임
  private startGame(mode: Mode) {
    clearInterval(this.titleTimer);
    this.mode = mode;
    this.round = 0;
    this.total = mode.kind === "wine" ? mode.queue.length : ROUNDS;
    this.score = 0;
    this.streak = 0;
    this.results = [];
    this.used.clear();
    this.recent = [];
    this.hud.hidden = false;
    this.cellar.hidden = true;
    track("game_start", { level: mode.level, mode: mode.kind, lang: lang(), ...(mode.kind === "wine" ? { wine: mode.wine.id } : {}) });
    this.next();
  }

  private next() {
    if (this.round >= this.total) return this.showResult();
    this.round++;
    const m = this.mode;
    const q = m.kind === "wine" ? m.queue[this.round - 1] : makeQuestion(m.level, this.used, this.recent);
    this.q = q;
    this.used.add(q.wine.id);
    this.recent.push(q.qtype);
    this.answered = false;
    this.hintsUsed = [];
    this.stage.show(q.wine, q.hide, q.vintage);
    this.renderHud();
    this.renderQuestion();
  }

  private renderHud() {
    const m = this.mode;
    const title = m.kind === "wine" ? esc(wineName(m.wine)) : levelName(m.level);
    const pct = Math.round(((this.round - (this.answered ? 0 : 1)) / this.total) * 100);
    this.hud.innerHTML = `
      <button class="hud-quit" data-act="quit" aria-label="${t("quit")}"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>
      <div class="hud-mid"><span class="hud-lvl">${title}</span><span class="hud-round"><b>${this.round}</b> / ${this.total}</span></div>
      <div class="hud-bar" aria-hidden="true"><i style="width:${pct}%"></i></div>
      <div class="hud-score">${this.streak >= 2 ? `<span class="streak">${t("streak", { n: this.streak })}</span> ` : ""}<b>${this.score.toLocaleString(lang())}</b> ${t("ptsUnit")}</div>`;
    this.hud.onclick = (e) => {
      if ((e.target as HTMLElement).closest("[data-act=quit]")) this.showTitle();
    };
  }

  private renderQuestion() {
    const q = this.q!;
    const cost = LEVELS[this.mode.level].hintCost;
    this.panel.className = "panel play";
    this.panel.innerHTML = `
      <div class="qhead"><span class="chip">${qtypeLabel(q.qtype)}</span><h2 class="qline" title="${esc(q.prompt)}"><span>${esc(q.prompt)}</span></h2></div>
      <div class="options ${q.options.length > 4 ? "six" : ""}">
        ${q.options
          .map(
            (o, i) => `<button class="opt" data-i="${i}"><span class="k">${i + 1}</span><span class="t"><span class="fit">${esc(o.label)}</span>${o.sub ? `<small class="fit">${esc(o.sub)}</small>` : ""}</span></button>`,
          )
          .join("")}
      </div>
      ${
        q.hints.length
          ? `<div class="hints"><span>${t("hintCost", { n: cost })}</span>${q.hints
              .map((h) => `<button class="hint" data-hint="${h}">${hintLabel(h)}</button>`)
              .join("")}</div>`
          : ""
      }
      <div class="after"></div>`;
    fitLines(this.panel);
    this.panel.onclick = (e) => {
      const el = e.target as HTMLElement;
      const opt = el.closest<HTMLElement>(".opt");
      if (opt && !this.answered) return this.answer(Number(opt.dataset.i));
      const hint = el.closest<HTMLElement>("[data-hint]");
      if (hint && !this.answered) return this.useHint(hint.dataset.hint as HintKey, hint);
      const act = el.closest<HTMLElement>("[data-act]")?.dataset.act;
      if (act === "next") this.next();
    };
    this.syncInsets();
  }

  private useHint(h: HintKey, btn: HTMLElement) {
    if (this.hintsUsed.includes(h)) return;
    this.hintsUsed.push(h);
    btn.outerHTML = `<span class="hint used">${hintLabel(h)}: <b>${esc(hintText(this.q!.wine, h))}</b></span>`;
  }

  private answer(i: number) {
    const q = this.q!;
    this.answered = true;
    const correct = i === q.answer;
    const cost = LEVELS[this.mode.level].hintCost;
    let points = 0;
    if (correct) {
      this.streak++;
      points = Math.max(20, 100 - this.hintsUsed.length * cost) + Math.min(this.streak - 1, 5) * 10;
      this.score += points;
      store.addFound(q.wine.id);
    } else this.streak = 0;
    this.results.push({ q, correct, points });
    track("answer", { qtype: q.qtype, correct, level: this.mode.level, wine: q.wine.id, hints: this.hintsUsed.length });
    this.music.cue(correct ? "right" : "wrong");

    this.panel.querySelectorAll<HTMLButtonElement>(".opt").forEach((b, k) => {
      b.disabled = true;
      if (k === q.answer) b.classList.add("right");
      else if (k === i) b.classList.add("wrong");
    });
    this.panel.querySelectorAll<HTMLButtonElement>(".hint").forEach((b) => (b.disabled = true));
    this.stage.setHide({ name: false, info: false });
    this.stage.faceFront();
    this.renderHud();

    const last = this.round >= this.total;
    const after = this.panel.querySelector(".after")!;
    after.innerHTML = `
      <div class="verdict ${correct ? "ok" : "bad"}">${correct ? t("correct", { n: points }) : t("wrong", { a: esc(q.options[q.answer].label) })}</div>
      ${this.detailCard(q.wine, q)}
      <button class="primary" data-act="next">${last ? t("seeResult") : t("next")}</button>`;
    this.syncInsets();
    after.querySelector<HTMLButtonElement>("[data-act=next]")?.focus({ preventScroll: true });
    // 폰에서는 패널이 길어지므로 정답·해설이 보이게 내려 준다
    requestAnimationFrame(() => this.panel.scrollTo({ top: (after as HTMLElement).offsetTop - 8, behavior: "smooth" }));
  }

  private detailCard(w: Wine, q?: Question) {
    const fam = SHAPES[w.shape].family;
    const rows: [string, string][] = [
      [t("d_original"), originalFull(w)],
      [t("d_producer"), producerOf(w)],
      [t("d_place"), `${countryName(w.country)} · ${regionName(w)}`],
      [t("d_grape"), grapeName(w)],
      [t("d_type"), typeName(w.type)],
      [t("d_shape"), fam ? familyName(fam) : t("d_ownShape")],
    ];
    if (q?.vintage) rows.push([t("d_bottle"), t("d_vintage", { y: q.vintage })]);
    else if (w.nv) rows.push([t("d_nvKey"), t("d_nv")]);
    const fact = factOf(w);
    const shapeNote = q?.qtype === "shape" && fam ? `<p class="note">${esc(familyAbout(fam))}</p>` : "";
    return `<div class="detail">
      <div class="dname">${bottleIcon(w, 46)}<div><b>${esc(wineName(w))}</b><small>${esc(originalFull(w))}</small></div></div>
      <dl>${rows.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
      ${fact ? `<p class="fact">${esc(fact)}</p>` : ""}${shapeNote}
    </div>`;
  }

  // ───────────────────────── 결과
  private showResult() {
    const m = this.mode;
    const right = this.results.filter((r) => r.correct).length;
    const isBest = m.kind === "game" ? store.finish(m.level, this.score) : false;
    track("game_end", { level: m.level, mode: m.kind, score: this.score, correct: right, total: this.results.length, best: isBest });
    this.music.cue("finish");
    this.hud.hidden = true;
    this.panel.className = "panel result";
    this.panel.innerHTML = `
      <div class="res-head">
        <div class="big">${this.score.toLocaleString(lang())}<small>${t("ptsUnit")}</small></div>
        <div>${t("resCorrect", { a: right, b: this.results.length })}${isBest ? ` · <span class="best">${t("resBest")}</span>` : ""}</div>
        <div class="grade">${grade(right / this.results.length)}</div>
      </div>
      <ol class="res-list">
        ${this.results
          .map(
            (r, k) => `<li><button data-k="${k}">${bottleIcon(r.q.wine, 34)}<span><b>${esc(wineName(r.q.wine))}</b><small>${qtypeLabel(r.q.qtype)}</small></span><em class="${r.correct ? "ok" : "bad"}">${r.correct ? `+${r.points}` : "✕"}</em></button></li>`,
          )
          .join("")}
      </ol>
      <div class="row">
        <button class="primary" data-act="again">${m.kind === "wine" ? t("againWine") : t("again")}</button>
        <button data-act="cellar">${t("toCellar")}</button>
        <button data-act="home">${t("home")}</button>
      </div>`;
    this.panel.onclick = (e) => {
      const el = e.target as HTMLElement;
      const item = el.closest<HTMLElement>("[data-k]");
      if (item) {
        const r = this.results[Number(item.dataset.k)];
        this.stage.show(r.q.wine, { name: false, info: false }, r.q.vintage);
        return;
      }
      const act = el.closest<HTMLElement>("[data-act]")?.dataset.act;
      if (act === "again") this.startGame(m.kind === "wine" ? { ...m, queue: wineQuiz(m.wine, m.level) } : m);
      else if (act === "cellar") this.openCellar();
      else if (act === "home") this.showTitle();
    };
    this.syncInsets();
  }

  // ───────────────────────── 와인 셀러 (도감)
  private openCellar() {
    clearInterval(this.titleTimer);
    const countries = [...new Set(WINES.map((w) => w.country))];
    track("cellar_open", { found: store.foundCount });
    this.cellar.hidden = false;
    this.cellar.innerHTML = `
      <div class="cel-head">
        <h2>${t("cel_title")} <small>${store.foundCount}/${WINES.length}</small></h2>
        <button class="ghost" data-act="close" aria-label="${t("close")}">✕</button>
      </div>
      <p class="cel-tip">${t("cel_tip")}</p>
      <div class="cel-tools">
        <input type="search" placeholder="${t("cel_search")}" aria-label="${t("cel_search")}">
        <select aria-label="${t("q_country")}"><option value="">${t("cel_all")}</option>${countries
          .map((c) => `<option value="${esc(c)}">${esc(countryName(c))}</option>`)
          .join("")}</select>
        <label><input type="checkbox" data-f="found"> ${t("cel_found")}</label>
      </div>
      <div class="cel-grid"></div>`;
    const grid = this.cellar.querySelector<HTMLElement>(".cel-grid")!;
    const input = this.cellar.querySelector<HTMLInputElement>("input[type=search]")!;
    const sel = this.cellar.querySelector<HTMLSelectElement>("select")!;
    const onlyFound = this.cellar.querySelector<HTMLInputElement>("[data-f=found]")!;
    const draw = () => {
      const k = input.value.trim().toLowerCase();
      const list = WINES.filter((w) => {
        if (sel.value && w.country !== sel.value) return false;
        const found = store.isFound(w.id);
        if (onlyFound.checked && !found) return false;
        if (!k) return true;
        const place = `${regionName(w)} ${countryName(w.country)}`;
        const hay = found ? `${wineName(w)} ${w.original} ${place} ${grapeName(w)}` : place;
        return hay.toLowerCase().includes(k);
      });
      grid.innerHTML = list
        .map((w) => {
          const found = store.isFound(w.id);
          return `<button class="cel-item ${found ? "" : "unknown"}" data-id="${w.id}">${bottleIcon(w, 52, found)}<span><b>${found ? esc(wineName(w)) : "???"}</b><small>${esc(countryName(w.country))} · ${esc(regionName(w).split(" · ")[0])}</small></span></button>`;
        })
        .join("");
    };
    draw();
    input.oninput = draw;
    sel.onchange = draw;
    onlyFound.onchange = draw;
    this.cellar.onclick = (e) => {
      const el = e.target as HTMLElement;
      if (el.closest("[data-act=close]")) {
        this.cellar.hidden = true;
        if (this.hud.hidden && !this.panel.classList.contains("result")) this.showTitle();
        return;
      }
      const item = el.closest<HTMLElement>("[data-id]");
      if (item) this.viewWine(WINES.find((w) => w.id === item.dataset.id)!);
    };
  }

  private viewWine(w: Wine) {
    const found = store.isFound(w.id);
    track("wine_view", { wine: w.id, found });
    this.cellar.hidden = true;
    this.hud.hidden = true;
    this.stage.show(w, found ? { name: false, info: false } : { name: true, info: true }, pickVintage(w));
    const n = wineQuiz(w, store.level).length;
    this.panel.className = "panel view";
    this.panel.innerHTML = `
      ${
        found
          ? this.detailCard(w)
          : `<div class="detail"><div class="dname">${bottleIcon(w, 46, false)}<div><b>${t("cel_unknown")}</b><small>${esc(countryName(w.country))}</small></div></div><p class="fact">${t("cel_unknownTip")}</p></div>`
      }
      <div class="row">
        <button class="primary" data-act="quiz">${t("cel_quiz", { n })}</button>
        <button data-act="back">${t("cel_back")}</button>
        <button data-act="home">${t("home")}</button>
      </div>`;
    this.panel.onclick = (e) => {
      const act = (e.target as HTMLElement).closest<HTMLElement>("[data-act]")?.dataset.act;
      if (act === "quiz") this.startGame({ kind: "wine", level: store.level, wine: w, queue: wineQuiz(w, store.level) });
      else if (act === "back") this.openCellar();
      else if (act === "home") this.showTitle();
    };
    this.syncInsets();
  }

  private onKey(e: KeyboardEvent) {
    if (!this.cellar.hidden || e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
    if (this.panel.classList.contains("play")) {
      const n = Number(e.key);
      if (!this.answered && n >= 1 && n <= (this.q?.options.length ?? 0)) this.answer(n - 1);
      else if (this.answered && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        this.next();
      }
    }
  }
}

/**
 * 한 줄에 안 들어가는 글자는 줄바꿈 대신 글자 크기를 줄여 맞춘다.
 * 보기(.fit)는 최소 10px 까지 줄이고 그래도 넘치면 말줄임,
 * 질문(.qline)은 최소 11px 까지 줄이고 그래도 넘치면 한 줄 안에서 천천히 좌우로 흘려 전체를 보여 준다.
 */
function fitLines(root: HTMLElement) {
  requestAnimationFrame(() => {
    const shrink = (el: HTMLElement, min: number) => {
      el.style.fontSize = "";
      let size = parseFloat(getComputedStyle(el).fontSize);
      while (el.scrollWidth > el.clientWidth + 0.5 && size > min) {
        size -= 0.5;
        el.style.fontSize = `${size}px`;
      }
    };
    root.querySelectorAll<HTMLElement>(".fit").forEach((el) => shrink(el, 10));
    root.querySelectorAll<HTMLElement>(".qline").forEach((el) => {
      el.classList.remove("slide");
      shrink(el, 11);
      const over = el.scrollWidth - el.clientWidth;
      if (over > 1) {
        el.style.setProperty("--shift", `${-over - 4}px`);
        el.style.setProperty("--dur", `${Math.max(3, over / 22)}s`);
        el.classList.add("slide");
      }
    });
  });
}

function grade(r: number) {
  if (r >= 0.95) return t("g1");
  if (r >= 0.8) return t("g2");
  if (r >= 0.6) return t("g3");
  if (r >= 0.4) return t("g4");
  return t("g5");
}
