import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/700.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/900.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/great-vibes/400.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/600.css";
import "@fontsource/unifrakturmaguntia/400.css";
import "./style.css";
import { Stage } from "./scene/stage";
import { App } from "./ui/app";
import { Music } from "./audio/music";
import { FONT_LOADS } from "./label/painter";
import { lang, loadWineTexts } from "./i18n";
import { startAnalytics, track } from "./analytics";
import { standalone } from "./ui/install";
import { startAuth } from "./auth";
import { cacheWineTexts, watchUpdates } from "./ui/update";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import flagFont from "country-flag-emoji-polyfill/dist/TwemojiCountryFlags.woff2?url";

// 랭킹의 국기: Windows 크롬·엣지는 국기 이모지 대신 "KR" 글자를 그리므로 그때만 국기 글꼴(직접 호스팅)을 붙인다
polyfillCountryFlagEmojis("Twemoji Country Flags", flagFont);

async function boot() {
  // 라벨 캔버스에 글꼴이 빠지지 않도록, 그리고 고른 언어의 와인 해설을 먼저 불러 둔다
  await Promise.all([...FONT_LOADS.map((f) => document.fonts.load(f).catch(() => null)), loadWineTexts()]);
  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.innerHTML = `<div class="stage"></div>`;
  const stage = new Stage(app.querySelector(".stage")!);
  const music = new Music();
  const game = new App(app, stage, music);
  watchUpdates(() => game.idle);
  cacheWineTexts();
  startAuth();
  startAnalytics();
  track("app_open", { lang: lang(), standalone: standalone(), version: __APP_VERSION__ });
  if (import.meta.env.DEV) Object.assign(window, { __stage: stage, __music: music, __app: game });
}
boot().catch((e) => {
  // 시작하다 실패하면(WebGL 미지원 등) 로딩 화면에 멈춰 있지 않고 알려 준다
  console.error(e);
  const app = document.querySelector<HTMLDivElement>("#app");
  if (app)
    app.innerHTML = `<div class="boot"><div style="max-width:320px;text-align:center;letter-spacing:0;line-height:1.6;color:#e9dcc6;font-weight:500">
      3D 화면을 시작하지 못했어요. 브라우저를 최신으로 업데이트하거나 다른 브라우저로 열어 주세요.<br><br>
      Couldn’t start the 3D view. Please update your browser or try another one.<br><br>
      <button onclick="location.reload()" style="font:inherit;padding:4.5px 8px;border-radius:6px;border:1px solid #d9b56a;background:#6b1224;color:#fff">↻</button></div></div>`;
});
