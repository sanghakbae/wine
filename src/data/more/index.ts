import type { Wine } from "../wines";
import * as bordeaux from "./bordeaux";
import * as france from "./france";
import * as italyIberia from "./italyIberia";
import * as europeUsa from "./europeUsa";
import * as southern from "./southern";
import * as southern2 from "./southern2";
import * as europe2 from "./europe2";
import * as usa2 from "./usa2";
import * as france2 from "./france2";
import * as italyIberia2 from "./italyIberia2";

const parts = [bordeaux, france, italyIberia, europeUsa, southern, southern2, europe2, usa2, france2, italyIberia2];

export const MORE_WINES: Wine[] = parts.flatMap((p) => p.WINES);
/** 데이터 파일별 와인 목록 (번역 파일도 같은 이름으로 나눈다) */
export const PARTS: Record<string, Wine[]> = { bordeaux: bordeaux.WINES, france: france.WINES, italyIberia: italyIberia.WINES, europeUsa: europeUsa.WINES, southern: southern.WINES, southern2: southern2.WINES, europe2: europe2.WINES, usa2: usa2.WINES, france2: france2.WINES, italyIberia2: italyIberia2.WINES };
export const MORE_REGIONS: Record<string, string> = Object.assign({}, ...parts.map((p) => p.REGIONS));
export const MORE_GRAPES: Record<string, string> = Object.assign({}, ...parts.map((p) => p.GRAPES));
