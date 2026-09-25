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
import { canInstall, install, onInstallChange } from "./install";
import { currentUser, deleteAccount, onUser, signIn, signOut } from "../auth";
import { track } from "../analytics";
import { cloudEnabled, deleteMyData, recordAnswer, saveNick, savedNick, submitScore, topScores, wineRate } from "../cloud";

/** Google 로그인 버튼 (구글 브랜드 가이드의 흰 버튼 + G 로고) */
const GOOGLE_BTN = (label: string) =>
  `<button class="gbtn" data-act="login"><svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg><span>${label}</span></button>`;

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
  private hero: HTMLElement;
  private vignette: HTMLElement;
  private view: "landing" | "play" | "result" | "wine" = "landing";
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
      `<div class="vignette" hidden></div>
       <header class="hero" hidden></header>
       <header class="hud" hidden></header>
       <section class="panel"></section>
       <button class="sound" aria-pressed="false"></button>
       <div class="cellar" hidden></div>`,
    );
    this.hero = root.querySelector(".hero")!;
    this.vignette = root.querySelector(".vignette")!;
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
    onInstallChange(() => this.view === "landing" && this.renderLanding());
    // 로그인·로그아웃하거나 서버 기록을 불러오면 보이는 화면을 다시 그린다
    onUser(() => {
      if (this.view === "landing") this.renderLanding();
      else if (this.view === "result") this.renderResult();
    });
    store.onChange(() => this.view === "landing" && this.renderLanding());
    this.renderSound();
    new ResizeObserver(() => this.syncInsets()).observe(this.panel);
    new ResizeObserver(() => this.syncInsets()).observe(this.hud);
    new ResizeObserver(() => this.syncInsets()).observe(this.hero);
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
    const pr = this.panel.getBoundingClientRect();
    if (this.view === "landing") {
      // 랜딩: 위 타이틀과 아래 버튼 사이 가운데에 병을 세운다
      this.stage.bottomInset = window.innerHeight - pr.top + 8;
      this.stage.rightInset = 0;
      this.stage.topInset = this.hero.getBoundingClientRect().bottom;
    } else {
      const wide = matchMedia(SIDE_QUERY).matches;
      this.stage.bottomInset = wide ? 0 : pr.height + 8;
      this.stage.rightInset = wide ? pr.width + 24 : 0;
      this.stage.topInset = this.hud.hidden ? 0 : this.hud.getBoundingClientRect().height;
    }
    this.stage.resize();
  }

  // ───────────────────────── 첫 화면 (랜딩)
  private showTitle() {
    this.view = "landing";
    this.hud.hidden = true;
    this.cellar.hidden = true;
    this.hero.hidden = false;
    this.vignette.hidden = false;
    document.title = `${t("appName")} — Wine Quiz`;
    const spin = () => {
      const pool = WINES.filter((w) => w.tier <= 2);
      const w = pool[Math.floor(Math.random() * pool.length)];
      this.stage.show(w, { name: true, info: true }, pickVintage(w));
    };
    spin();
    clearInterval(this.titleTimer);
    this.titleTimer = window.setInterval(spin, 7000);
    this.renderLanding();
  }

  private renderLanding() {
    const level = store.level;
    const user = currentUser();
    const sameTitle = t("appName").toUpperCase() === "BLIND BOTTLE";
    this.hero.innerHTML = `
      <div class="eyebrow"><i></i>WINE QUIZ · ${WINES.length.toLocaleString(lang())}<i></i></div>
      <h1 class="wordmark">BLIND BOTTLE</h1>
      ${sameTitle ? "" : `<div class="subtitle">${t("appName")}</div>`}
      <p class="tag">${t("tagline", { n: WINES.length })}</p>`;
    this.panel.className = "panel landing";
    this.panel.innerHTML = `
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
      <button class="primary cta" data-act="start">${t("start_now")}</button>
      ${
        cloudEnabled
          ? user
            ? `<div class="me">${user.photo ? `<img src="${esc(user.photo)}" alt="" referrerpolicy="no-referrer">` : ""}<span><b>${esc(user.name)}</b><small>${t("saved_note")}</small></span><button class="link" data-act="logout">${t("logout")}</button></div>`
            : `${GOOGLE_BTN(t("login_google"))}<p class="save-note">${t("login_save_note")}</p>`
          : ""
      }
      <nav class="links">
        <button class="link" data-act="cellar">${t("cellarBtn", { a: store.foundCount, b: WINES.length })}</button>
        ${cloudEnabled ? `<button class="link" data-act="rank">🏆 ${t("rank_btn")}</button>` : ""}
        ${canInstall() ? `<button class="link" data-act="install">⬇ ${t("install")}</button>` : ""}
        ${cloudEnabled && user ? `<button class="link danger" data-act="delete">${t("delete_account")}</button>` : ""}
      </nav>
      <footer class="foot">
        <label class="lang">🌐 <select aria-label="${t("langLabel")}">${(Object.keys(LANG_NAMES) as Lang[])
          .map((l) => `<option value="${l}" ${l === lang() ? "selected" : ""}>${LANG_NAMES[l]}</option>`)
          .join("")}</select></label>
        <a href="privacy.html" target="_blank" rel="noopener">${t("privacy")}</a>
      </footer>`;
    this.panel.querySelector<HTMLSelectElement>(".lang select")!.onchange = async (e) => {
      setLang((e.target as HTMLSelectElement).value as Lang);
      track("language_change", { lang: lang() });
      await loadWineTexts();
      this.renderLanding();
    };
    this.panel.onclick = async (e) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-level],[data-act]");
      if (!el) return;
      this.music.unlock();
      if (el.dataset.level) {
        store.level = el.dataset.level as Level;
        this.renderLanding();
        return;
      }
      switch (el.dataset.act) {
        case "start":
          return this.startGame({ kind: "game", level: store.level });
        case "cellar":
          return this.openCellar();
        case "rank":
          return this.openRanking(store.level);
        case "install":
          track("install_click");
          return install();
        case "login":
          track("login_click", { where: "landing" });
          return signIn().catch(() => null);
        case "logout":
          return signOut();
        case "delete":
          if (!confirm(t("delete_confirm"))) return;
          await deleteMyData().catch(() => null);
          await deleteAccount().catch(() => null);
          track("account_delete");
          return;
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
    this.view = "play";
    this.hero.hidden = true;
    this.vignette.hidden = true;
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
    recordAnswer(q.wine.id, correct);
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
    this.fillRates();
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
      ${cloudEnabled ? `<p class="rate" data-rate="${w.id}"></p>` : ""}
    </div>`;
  }

  // ───────────────────────── 결과
  private isBest = false;
  private submitted: number | null = null;

  /** 게임을 끝내며 기록을 한 번만 확정한다 */
  private showResult() {
    const m = this.mode;
    const right = this.results.filter((r) => r.correct).length;
    this.isBest = m.kind === "game" ? store.finish(m.level, this.score) : false;
    this.submitted = null;
    track("game_end", { level: m.level, mode: m.kind, score: this.score, correct: right, total: this.results.length, best: this.isBest, saved: store.saving });
    this.music.cue("finish");
    this.view = "result";
    this.hud.hidden = true;
    this.renderResult();
  }

  /** 결과 화면 (로그인하면 다시 그려서 랭킹 등록 폼을 보여 준다) */
  private renderResult() {
    const m = this.mode;
    const right = this.results.filter((r) => r.correct).length;
    const user = currentUser();
    let rankBlock = "";
    if (cloudEnabled && m.kind === "game") {
      if (!user) rankBlock = `<div class="rank-login">${GOOGLE_BTN(t("login_to_rank"))}<p class="save-note">${t("login_save_note")}</p></div>`;
      else if (this.submitted) rankBlock = `<p class="rank-msg">${t("rank_done", { n: this.submitted })} · <a href="#" data-act="rank">${t("rank_title")}</a></p>`;
      else
        rankBlock = `<form class="rank-form"><input name="nick" maxlength="12" placeholder="${t("rank_nick")}" value="${esc(savedNick() || user.name.slice(0, 12))}" autocomplete="nickname" required><button class="primary">${t("rank_submit")}</button><span class="rank-msg" aria-live="polite"></span></form>`;
    }
    this.panel.className = "panel result";
    this.panel.innerHTML = `
      <div class="res-head">
        <div class="big">${this.score.toLocaleString(lang())}<small>${t("ptsUnit")}</small></div>
        <div>${t("resCorrect", { a: right, b: this.results.length })}${this.isBest ? ` · <span class="best">${t("resBest")}</span>` : ""}</div>
        <div class="grade">${grade(right / this.results.length)}</div>
      </div>
      ${rankBlock}
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
      if (act === "rank") {
        e.preventDefault();
        return this.openRanking(m.level);
      }
      if (act === "login") {
        track("login_click", { where: "result" });
        signIn().catch(() => null);
        return;
      }
      if (act === "again") this.startGame(m.kind === "wine" ? { ...m, queue: wineQuiz(m.wine, m.level) } : m);
      else if (act === "cellar") this.openCellar();
      else if (act === "home") this.showTitle();
    };
    const form = this.panel.querySelector<HTMLFormElement>(".rank-form");
    if (form) {
      const score = this.score;
      form.onsubmit = async (e) => {
        e.preventDefault();
        const nick = (form.elements.namedItem("nick") as HTMLInputElement).value.trim();
        if (!nick) return;
        saveNick(nick);
        const btn = form.querySelector("button")!;
        const msg = form.querySelector<HTMLElement>(".rank-msg")!;
        btn.disabled = true;
        const rank = await submitScore(m.level, nick, score, right, this.results.length, lang());
        track("rank_submit", { level: m.level, score, ok: rank !== null });
        if (rank) {
          this.submitted = rank;
          this.renderResult();
        } else {
          msg.textContent = t("rank_fail");
          btn.disabled = false;
        }
      };
    }
    this.syncInsets();
  }

  /** 해설 카드에 와인별 정답률 채우기 */
  private fillRates() {
    this.panel.querySelectorAll<HTMLElement>("[data-rate]").forEach(async (el) => {
      const r = await wineRate(el.dataset.rate!);
      if (r && r.n > 0) el.textContent = t("wine_rate", { p: Math.round((r.c / r.n) * 100), n: r.n });
    });
  }

  // ───────────────────────── 전체 랭킹
  private async openRanking(level: Level) {
    clearInterval(this.titleTimer);
    track("rank_open", { level });
    this.cellar.hidden = false;
    this.cellar.innerHTML = `
      <div class="cel-head">
        <h2>🏆 ${t("rank_title")}</h2>
        <button class="ghost" data-act="close" aria-label="${t("close")}">✕</button>
      </div>
      <div class="rank-tabs" role="tablist">${(Object.keys(LEVELS) as Level[])
        .map((l) => `<button role="tab" aria-selected="${l === level}" class="${l === level ? "on" : ""}" data-level="${l}">${levelName(l)}</button>`)
        .join("")}</div>
      <ol class="rank-list"><li class="rank-note">…</li></ol>`;
    this.cellar.onclick = (e) => {
      const el = e.target as HTMLElement;
      if (el.closest("[data-act=close]")) {
        this.cellar.hidden = true;
        if (this.hud.hidden && !this.panel.classList.contains("result")) this.showTitle();
        return;
      }
      const tab = el.closest<HTMLElement>("[data-level]");
      if (tab) this.openRanking(tab.dataset.level as Level);
    };
    const list = await topScores(level, 20);
    const ol = this.cellar.querySelector(".rank-list");
    if (!ol) return;
    if (!list) ol.innerHTML = `<li class="rank-note">${t("rank_fail")}</li>`;
    else if (!list.length) ol.innerHTML = `<li class="rank-note">${t("rank_empty")}</li>`;
    else
      ol.innerHTML = list
        .map(
          (x, i) => `<li class="${x.mine ? "mine" : ""}"><b class="rk">${i + 1}</b><span class="nk">${esc(x.nick)}</span><span class="cr">${x.correct}/${x.total}</span><em>${x.score.toLocaleString(lang())}</em></li>`,
        )
        .join("");
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
    this.view = "wine";
    this.hero.hidden = true;
    this.vignette.hidden = true;
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
    this.fillRates();
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
