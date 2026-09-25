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

async function boot() {
  // 라벨 캔버스에 글꼴이 빠지지 않도록, 그리고 고른 언어의 와인 해설을 먼저 불러 둔다
  await Promise.all([...FONT_LOADS.map((f) => document.fonts.load(f).catch(() => null)), loadWineTexts()]);
  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.innerHTML = `<div class="stage"></div>`;
  const stage = new Stage(app.querySelector(".stage")!);
  const music = new Music();
  new App(app, stage, music);
  startAnalytics();
  track("app_open", { lang: lang(), standalone: standalone(), version: __APP_VERSION__ });
  if (import.meta.env.DEV) Object.assign(window, { __stage: stage, __music: music });
}
boot();
