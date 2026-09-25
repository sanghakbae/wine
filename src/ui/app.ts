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
  countryName,
  factOf,
  familyAbout,
  familyName,
  grapeName,
  lang,
  originalFull,
  producerOf,
  regionName,
  t,
  typeName,
  wineName,
  type UIKey,
} from "../i18n";
import type { Stage } from "../scene/stage";
import type { Music } from "../audio/music";
import { bottleIcon } from "./icon";
import { copyBanner } from "./promo";
import { install, onInstallChange } from "./install";
import { countryLabel, myCountry, short3 } from "../country";
import { updatePending } from "./update";
import { LoginError, authReady, currentUser, deleteAccount, onUser, reauthenticate, signIn, signOut } from "../auth";
import { track } from "../analytics";
import { cloudEnabled, deleteMyData, recordAnswer, submitScore, topScores, wineRate, type Entry } from "../cloud";

/** Google 로그인 버튼 — 구글 브랜드 가이드의 공식 G 로고, 다크 테마 */
const GOOGLE_BTN = (label: string) =>
  `<button class="gbtn" data-act="login"><svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg><span>${label}</span></button>`;

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
  private liveRank: HTMLElement;
  /** 게임 중 왼쪽 위 랭킹: 서버에서 받은 상위 기록 (null = 못 불러옴, undefined = 불러오는 중) */
  private liveTop: Entry[] | null | undefined = undefined;
  private liveLevel: Level | null = null;
  private liveAt = 0;
  private cellarIO: IntersectionObserver | null = null;
  /** 판마다 늘어나는 번호: 늦게 도착한 비동기 결과가 다른 판 화면을 덮지 않게 */
  private gameNo = 0;
  private rankReq = 0;
  private vignette: HTMLElement;
  private view: "landing" | "play" | "result" | "wine" = "landing";
  private panel: HTMLElement;
  private cellar: HTMLElement;
  private sound: HTMLButtonElement;
  /** 첫 화면 왼쪽 위: 홍보 배너 복사 */
  private promo: HTMLButtonElement;
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
       <aside class="live-rank" hidden aria-live="polite"></aside>
       <section class="panel"></section>
       <button class="sound" aria-pressed="false"></button>
       <button class="promo" hidden><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M3 10.2v3.6c0 .7.5 1.2 1.2 1.2H6l1.3 4.4c.2.6.7 1 1.3 1h.9c.8 0 1.3-.7 1.1-1.5L9.6 15H11l6.4 3.6c.8.4 1.6-.1 1.6-1V6.4c0-.9-.9-1.4-1.6-1L11 9H4.2C3.5 9 3 9.5 3 10.2z"/><path d="M21 9.5a3.5 3.5 0 0 1 0 5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg></button>
       <div class="cellar" hidden></div>`,
    );
    this.hero = root.querySelector(".hero")!;
    this.vignette = root.querySelector(".vignette")!;
    this.hud = root.querySelector(".hud")!;
    this.liveRank = root.querySelector(".live-rank")!;
    this.liveRank.onclick = (e) => {
      if (!(e.target as HTMLElement).closest("[data-act=lr-toggle]")) return;
      setLiveRankCollapsed(!liveRankCollapsed());
      this.renderLiveRank();
    };
    this.panel = root.querySelector(".panel")!;
    this.cellar = root.querySelector(".cellar")!;
    this.sound = root.querySelector(".sound")!;
    this.promo = root.querySelector(".promo")!;
    this.promo.onclick = async () => {
      // 클립보드는 누른 그 순간에만 쓸 수 있어 병 그림도 여기서 바로 뜬다
      const how = await copyBanner(this.stage.capture());
      track("promo_copy", { how });
      this.toast(t(how === "image" ? "promo_copied" : how === "text" ? "promo_text" : how === "file" ? "promo_saved" : "promo_fail"));
    };
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
    // 셀러·랭킹 창이 화면을 덮고 있는 동안에는 뒤의 3D 를 그리지 않는다
    new MutationObserver(() => (this.stage.paused = !this.cellar.hidden)).observe(this.cellar, { attributes: true, attributeFilter: ["hidden"] });
    new ResizeObserver(() => {
      this.syncInsets();
      this.placeLiveRank();
    }).observe(this.panel);
    new ResizeObserver(() => {
      this.syncInsets();
      this.placeLiveRank();
    }).observe(this.hud);
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
  /** 로그인·계정 삭제 팝업이 열려 있는 동안 (이때 새로고침하면 팝업이 고아가 된다) */
  private busy = false;

  /** 새 버전으로 새로고침해도 되는 때: 첫 화면에 아무 창도 없이 있을 때.
   *  결과 화면은 랭킹 등록이 끝나지 않았을 수 있어 빼고, 손님이 쌓은 기록은 메모리에만 있어
   *  새로고침하면 사라지므로 그때는 다음 방문까지 새 버전을 미룬다 */
  get idle() {
    if (!store.saving && (store.plays > 0 || store.foundCount > 0)) return false;
    // 결과 화면에서 바로 첫 화면으로 와도 랭킹 등록이 끝날 때까지는 새로고침하지 않는다
    if (this.submittingGame !== null) return false;
    return this.view === "landing" && this.cellar.hidden && !this.busy;
  }

  private showTitle() {
    this.view = "landing";
    this.cellar.hidden = true;
    if (updatePending() && this.idle) return location.reload();
    this.liveRank.hidden = true;
    this.hud.hidden = true;
    this.hero.hidden = false;
    this.promo.hidden = false;
    this.vignette.hidden = false;
    document.title = `${t("appName")} — Wine Quiz`;
    this.spinLanding();
    this.startLandingTimer();
    this.renderLanding();
  }

  /** 게임 중 왼쪽 위 랭킹: 이번 난이도 상위 기록을 한 번 받아 두고(1분 캐시), 내 점수 줄을 실시간으로 끼워 넣는다 */
  private async loadLiveRank() {
    const m = this.mode;
    if (!cloudEnabled || m.kind !== "game") {
      this.liveRank.hidden = true;
      return;
    }
    const level = m.level;
    const fresh = this.liveLevel === level && this.liveTop && Date.now() - this.liveAt < 60_000;
    if (!fresh) {
      this.liveLevel = level;
      this.liveTop = undefined;
      this.renderLiveRank();
      const list = await topScores(level, 10);
      if (this.liveLevel !== level) return;
      this.liveTop = list;
      this.liveAt = Date.now();
    }
    this.renderLiveRank();
  }

  private renderLiveRank() {
    const m = this.mode;
    if (!cloudEnabled || m.kind !== "game" || this.view !== "play") {
      this.liveRank.hidden = true;
      return;
    }
    this.liveRank.hidden = false;
    const collapsed = liveRankCollapsed();
    this.liveRank.classList.toggle("collapsed", collapsed);
    const head = `<button class="lr-head" data-act="lr-toggle" aria-expanded="${!collapsed}"><span>🏆 ${levelName(m.level)} ${t("rank_btn")}</span><i>${collapsed ? "▸" : "▾"}</i></button>`;
    if (collapsed) {
      this.liveRank.innerHTML = head;
    } else if (!this.liveTop) {
      // 불러오는 중이거나 못 불러왔을 때는 순위를 짐작해 보여 주지 않는다 (빈 목록이면 늘 1위로 보이니까)
      this.liveRank.innerHTML = `${head}<p class="lr-note">${this.liveTop === undefined ? "…" : t("rank_fail")}</p>`;
    } else {
      // 서버 상위 기록 사이에 내 기록을 끼워 넣고 10위까지만 보여 준다.
      // 랭킹은 사람마다 최고 기록이라 내 줄도 최고 기록(서버·기기 중 큰 값)을 보여 주고, 이번 판이 넘어서면 실시간으로 오른다
      const me = currentUser();
      const others = this.liveTop.filter((x) => !(me && x.uid === me.uid));
      const mine = this.liveTop.find((x) => me && x.uid === me.uid)?.score ?? 0;
      const myScore = Math.max(mine, store.best(m.level), this.score);
      const myRank = others.filter((x) => x.score > myScore).length + 1;
      const rows = others.map((x) => ({ nick: x.nick, cc: x.cc, score: x.score, mine: false }));
      rows.splice(myRank - 1, 0, { nick: t("rank_me"), cc: myCountry(), score: myScore, mine: true });
      const top10 = rows.slice(0, 10);
      this.liveRank.innerHTML = `${head}
        <ol>${top10
          .map(
            (r, i) =>
              `<li class="${r.mine ? "mine" : ""}"><b>${i + 1}</b><i class="cc" title="${esc(countryLabel(r.cc))}">${esc(short3(countryLabel(r.cc)))}</i><span>${esc(short3(r.nick))}</span><em>${r.score.toLocaleString(lang())}</em></li>`,
          )
          .join("")}</ol>
        ${myRank > 10 ? `<p class="lr-me"><span>${t("rank_me")}</span><em>${myScore.toLocaleString(lang())}</em></p>` : ""}`;
    }
    this.placeLiveRank();
  }

  /** HUD 바로 아래에 붙인다 (화면을 돌리거나 크기를 바꿔 HUD 높이가 바뀌어도 따라간다) */
  private placeLiveRank() {
    if (this.liveRank.hidden) return;
    const top = Math.round(this.hud.getBoundingClientRect().bottom) + 6;
    this.liveRank.style.top = `${top}px`;
    // 폰에서 답을 고른 뒤 패널이 길어지면 랭킹이 패널을 덮지 않게 높이를 줄이고, 자리가 없으면 숨긴다
    const pr = this.panel.getBoundingClientRect();
    const lr = this.liveRank.getBoundingClientRect();
    const room = pr.left < lr.right && pr.right > lr.left ? pr.top - top - 6 : Infinity;
    this.liveRank.style.maxHeight = room === Infinity ? "" : `${Math.max(0, Math.floor(room))}px`;
    this.liveRank.style.visibility = room < 24 ? "hidden" : "";
  }

  /** 화면 위쪽에 잠깐 떴다 사라지는 안내 */
  private toast(msg: string) {
    document.querySelector(".toast")?.remove();
    const el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.classList.add("out"), 2800);
    setTimeout(() => el.remove(), 3300);
  }

  /** Google 로그인. 실패하면 이유에 맞춰 알려 준다 */
  private async login() {
    this.busy = true;
    try {
      await signIn();
    } catch (e) {
      const reason = e instanceof LoginError ? e.reason : "other";
      alert(t(reason === "inapp" ? "login_inapp" : reason === "popup" ? "login_popup" : "login_fail"));
    } finally {
      this.busy = false;
    }
  }

  /** 계정 삭제 확인 창. 브라우저 confirm() 을 오래 보고 있으면 뒤이은 Google 팝업이 막히므로
   *  화면 안에서 묻고, 확인 버튼을 누른 바로 그때 본인 확인 팝업을 연다 */
  private confirmDelete() {
    clearInterval(this.titleTimer);
    this.cellar.hidden = false;
    this.cellar.innerHTML = `
      <div class="confirm" role="alertdialog" aria-modal="true" aria-labelledby="del-q">
        <p id="del-q">${t("delete_confirm")}</p>
        <div class="row"><button class="primary danger" data-act="yes">${t("delete_account")}</button><button data-act="close">${t("close")}</button></div>
      </div>`;
    this.cellar.onclick = (e) => {
      const el = e.target as HTMLElement;
      const act = el.closest<HTMLElement>("[data-act]")?.dataset.act;
      if (act === "close" || el === this.cellar) return this.closeOverlay();
      if (act === "yes") {
        this.closeOverlay();
        this.deleteAccountFlow();
      }
    };
    this.cellar.querySelector<HTMLButtonElement>("[data-act=close]")?.focus();
  }

  /** 계정 삭제: 본인 확인 → 서버 기록 삭제 → 계정 삭제. 한 단계라도 실패하면 거기서 멈춘다 */
  private async deleteAccountFlow() {
    this.busy = true;
    try {
      await this.deleteAccountSteps();
    } finally {
      this.busy = false;
    }
  }

  private async deleteAccountSteps() {
    let ok: boolean;
    try {
      ok = await reauthenticate(); // 클릭 직후 첫 비동기 작업이어야 팝업이 막히지 않는다
    } catch (e) {
      return alert(t(e instanceof LoginError && e.reason === "popup" ? "login_popup" : "delete_fail"));
    }
    if (!ok) return; // 팝업을 닫았다: 아무것도 지우지 않는다
    store.forget();
    try {
      await deleteMyData();
      await deleteAccount();
      track("account_delete");
    } catch {
      alert(t("delete_fail"));
    }
  }

  /** 랜딩 뒤에서 도는 병을 다른 와인으로 바꾼다 */
  private spinLanding() {
    const pool = WINES.filter((w) => w.tier <= 2);
    const w = pool[Math.floor(Math.random() * pool.length)];
    this.stage.show(w, { name: true, info: true }, pickVintage(w));
  }

  private startLandingTimer() {
    clearInterval(this.titleTimer);
    this.titleTimer = window.setInterval(() => this.spinLanding(), 7000);
  }

  /** 셀러·랭킹 창 닫기: 랜딩 위에서 열었으면 병을 바꾸지 않고 타이머만 다시 돌린다 */
  private closeOverlay() {
    this.cellar.hidden = true;
    if (this.view === "landing") this.startLandingTimer();
  }

  private renderLanding() {
    const level = store.level;
    const user = currentUser();
    const sameTitle = t("appName").toUpperCase() === "BLIND BOTTLE";
    this.promo.setAttribute("aria-label", t("promo_btn"));
    this.promo.title = t("promo_btn");
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
      ${
        cloudEnabled && !user
          ? `<div class="start-row"><button class="primary cta" data-act="start">${t("start_now")}</button>${GOOGLE_BTN(t("login_google"))}</div>
             <p class="save-note">${t("login_save_note")}</p>`
          : `<button class="primary cta" data-act="start">${t("start_now")}</button>`
      }
      ${
        cloudEnabled && user
          ? `<div class="me">${user.photo ? `<img src="${esc(user.photo)}" alt="" referrerpolicy="no-referrer">` : ""}<span><b>${esc(user.name)}</b><small>${t("saved_note")}</small></span><button class="link" data-act="logout">${t("logout")}</button></div>`
          : ""
      }
      <nav class="links">
        <button class="link" data-act="cellar">${t("cellarBtn", { a: store.foundCount, b: WINES.length })}</button>
        ${cloudEnabled ? `<button class="link" data-act="rank">🏆 ${t("rank_btn")}</button>` : ""}
        ${cloudEnabled && user ? `<button class="link danger" data-act="delete">${t("delete_account")}</button>` : ""}
        <a class="link privacy" href="privacy.html" target="_blank" rel="noopener">${t("privacy")}</a>
      </nav>`;
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
          return this.login();
        case "logout":
          await store.flush();
          return signOut();
        case "delete":
          return this.confirmDelete();
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
    this.promo.hidden = true;
    this.vignette.hidden = true;
    this.hud.hidden = false;
    this.cellar.hidden = true;
    this.gameNo++;
    track("game_start", { level: mode.level, mode: mode.kind, lang: lang(), ...(mode.kind === "wine" ? { wine: mode.wine.id } : {}) });
    this.next();
    if (cloudEnabled && authReady() && !store.saving) this.toast(t("guest_toast"));
    this.loadLiveRank();
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
    // 와인별 퀴즈에서 와인 이름을 띄우면 이름 문제의 답이 된다
    const title = m.kind === "wine" ? t("cel_title") : levelName(m.level);
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
          ? `<div class="hints"><div class="hints-head"><b>${t("hint_title")}</b><small>${t("hint_cost", { n: cost })}</small></div><div class="hints-btns">${q.hints
              .map((h) => `<button class="hint" data-hint="${h}">${t(`hb_${h}` as UIKey)}</button>`)
              .join("")}</div></div>`
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
    // 와인별 퀴즈는 같은 와인을 되풀이해 푸니 공개 정답률에 넣지 않는다
    if (this.mode.kind === "game") recordAnswer(q.wine.id, correct);
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
    // 부가 표시는 맨 마지막에: 여기서 문제가 생겨도 정답 표시와 다음 버튼은 이미 그려져 있다
    this.renderLiveRank();
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
  /** 랭킹 등록 결과: null = 아직, 0 = 실패, n = 전체 순위 */
  private submitted: number | null = null;
  /** 랭킹 등록 중인 판 번호 (판마다 따로: 앞 판 등록이 늦어져도 다음 판 등록을 막지 않는다) */
  private submittingGame: number | null = null;

  private async autoSubmit() {
    const m = this.mode;
    const user = currentUser();
    if (!user || m.kind !== "game") return;
    const game = this.gameNo;
    this.submittingGame = game;
    // 랭킹에는 사람마다 최고 기록이 오른다: 이번 판보다 높은 판(로그인 전 손님으로 낸 판이나 등록에 실패한 판)이 있으면 그 판을 올린다
    const right = this.results.filter((r) => r.correct).length;
    const best = store.bestGame(m.level);
    const pick = best && best.score > this.score ? best : { score: this.score, correct: right };
    const rank = await submitScore(m.level, user.name, myCountry(), pick.score, pick.correct, this.results.length, lang());
    if (this.submittingGame === game) this.submittingGame = null;
    // 등록하는 동안 미뤄 둔 새 버전: 이제 첫 화면에 가만히 있으면 새로 불러온다
    if (updatePending() && this.idle) return location.reload();
    if (game !== this.gameNo) return;
    track("rank_submit", { level: m.level, score: this.score, ok: rank !== null });
    this.submitted = rank ?? 0;
    this.liveAt = 0; // 다음 판에는 새 랭킹을 받아 온다
    if (this.view === "result") this.renderResult();
  }

  /** 게임을 끝내며 기록을 한 번만 확정한다 */
  private showResult() {
    const m = this.mode;
    const right = this.results.filter((r) => r.correct).length;
    this.isBest = m.kind === "game" ? store.finish(m.level, this.score, right) : false;
    this.submitted = null;
    track("game_end", { level: m.level, mode: m.kind, score: this.score, correct: right, total: this.results.length, best: this.isBest, saved: store.saving });
    this.music.cue("finish");
    this.view = "result";
    this.hud.hidden = true;
    this.liveRank.hidden = true;
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
      else if (this.submitted === 0) rankBlock = `<p class="rank-msg">${t("rank_fail")}</p>`;
      else rankBlock = `<p class="rank-msg">…</p>`;
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
        this.login();
        return;
      }
      if (act === "again") this.startGame(m.kind === "wine" ? { ...m, queue: wineQuiz(m.wine, m.level) } : m);
      else if (act === "cellar") this.openCellar();
      else if (act === "home") this.showTitle();
    };
    // 로그인한 상태면 이번 판을 랭킹에 자동 등록한다 (Google 이름 + 접속 국가)
    if (cloudEnabled && m.kind === "game" && user && this.submitted === null && this.submittingGame !== this.gameNo) this.autoSubmit();
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
      if (el.closest("[data-act=close]")) return this.closeOverlay();
      const tab = el.closest<HTMLElement>("[data-level]");
      if (tab) this.openRanking(tab.dataset.level as Level);
    };
    const req = ++this.rankReq;
    const ol = this.cellar.querySelector(".rank-list");
    const list = await topScores(level, 20);
    if (req !== this.rankReq || !ol || !ol.isConnected) return;
    if (!list) ol.innerHTML = `<li class="rank-note">${t("rank_fail")}</li>`;
    else if (!list.length) ol.innerHTML = `<li class="rank-note">${t("rank_empty")}</li>`;
    else
      ol.innerHTML = list
        .map(
          (x, i) =>
            `<li class="${x.mine ? "mine" : ""}"><b class="rk">${i + 1}</b><span class="cc" title="${esc(countryLabel(x.cc))}">${esc(short3(countryLabel(x.cc)))}</span><span class="nk">${esc(short3(x.nick))}</span><span class="cr">${x.correct}/${x.total}</span><em>${x.score.toLocaleString(lang())}</em></li>`,
        )
        .join("");
  }

  // ───────────────────────── 와인 셀러 (도감)
  private openCellar() {
    clearInterval(this.titleTimer);
    // 셀러에는 퀴즈에서 맞힌 와인만 모인다 (못 맞힌 와인은 목록·검색·나라 거르기 어디에도 나오지 않는다)
    const mine = WINES.filter((w) => store.isFound(w.id));
    const countries = [...new Set(mine.map((w) => w.country))];
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
      </div>
      <div class="cel-grid"></div>`;
    const grid = this.cellar.querySelector<HTMLElement>(".cel-grid")!;
    const input = this.cellar.querySelector<HTMLInputElement>("input[type=search]")!;
    const sel = this.cellar.querySelector<HTMLSelectElement>("select")!;
    // 수백 개를 한꺼번에 그리지 않고 150개씩, 스크롤이 끝에 닿으면 이어 붙인다
    const BATCH = 150;
    let list: Wine[] = [];
    let shown = 0;
    const item = (w: Wine) =>
      `<button class="cel-item" data-id="${w.id}">${bottleIcon(w, 52)}<span><b>${esc(wineName(w))}</b><small>${esc(countryName(w.country))} · ${esc(regionName(w).split(" · ")[0])}</small></span></button>`;
    const sentinel = document.createElement("div");
    sentinel.className = "cel-more";
    const more = () => {
      // 한 묶음을 붙여도 아래 끝이 가까우면(큰 화면·짧은 목록) 계속 채운다
      do {
        if (shown >= list.length) return;
        sentinel.insertAdjacentHTML("beforebegin", list.slice(shown, shown + BATCH).map(item).join(""));
        shown = Math.min(list.length, shown + BATCH);
      } while (grid.scrollHeight - grid.scrollTop - grid.clientHeight < 400);
    };
    this.cellarIO?.disconnect();
    const io = new IntersectionObserver((es) => es.some((e) => e.isIntersecting) && more(), { root: grid, rootMargin: "400px" });
    this.cellarIO = io;
    const draw = () => {
      const k = input.value.trim().toLowerCase();
      list = mine.filter((w) => {
        if (sel.value && w.country !== sel.value) return false;
        if (!k) return true;
        return `${wineName(w)} ${w.original} ${regionName(w)} ${countryName(w.country)} ${grapeName(w)}`.toLowerCase().includes(k);
      });
      shown = 0;
      grid.replaceChildren(sentinel);
      // 아직 맞힌 와인이 없으면 퀴즈로 채우라고 알려 준다
      if (!mine.length) sentinel.insertAdjacentHTML("beforebegin", `<p class="cel-empty">${t("cel_empty")}</p>`);
      grid.scrollTop = 0;
      more();
    };
    draw();
    io.observe(sentinel);
    let typing = 0;
    input.oninput = () => {
      clearTimeout(typing);
      typing = window.setTimeout(draw, 160);
    };
    sel.onchange = draw;
    this.cellar.onclick = (e) => {
      const el = e.target as HTMLElement;
      if (el.closest("[data-act=close]")) return this.closeOverlay();
      const item = el.closest<HTMLElement>("[data-id]");
      if (item) this.viewWine(WINES.find((w) => w.id === item.dataset.id)!);
    };
  }

  private viewWine(w: Wine) {
    const found = store.isFound(w.id);
    track("wine_view", { wine: w.id, found });
    this.view = "wine";
    this.liveRank.hidden = true;
    this.hero.hidden = true;
    this.promo.hidden = true;
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
          : `<div class="detail"><div class="dname">${bottleIcon(w, 46, false)}<div><b>???</b><small>${t("cel_unknown")}</small></div></div><p class="fact">${t("cel_unknownTip")}</p></div>`
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
    if (!this.cellar.hidden && e.key === "Escape") return this.closeOverlay();
    if (!this.cellar.hidden || e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (this.panel.classList.contains("play")) {
      const d = /^(?:Digit|Numpad)([1-9])$/.exec(e.code);
      const n = d ? Number(d[1]) : NaN;
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

// 게임 중 랭킹 창을 접어 둘지 (화면 설정이라 기기에 기억)
const LR_KEY = "blind-bottle:live-rank";
function liveRankCollapsed() {
  try {
    return localStorage.getItem(LR_KEY) === "hidden";
  } catch {
    return false;
  }
}
function setLiveRankCollapsed(v: boolean) {
  try {
    localStorage.setItem(LR_KEY, v ? "hidden" : "shown");
  } catch {
    // 무시
  }
}
