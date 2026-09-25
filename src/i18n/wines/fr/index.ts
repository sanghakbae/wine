// 이 언어의 와인 해설·전용 문제 (데이터 파일별로 나눠 번역한 것을 합친다)
import type { WineText } from "../../index";
import base from "./base";
import bordeaux from "./bordeaux";
import france from "./france";
import italyIberia from "./italyIberia";
import europeUsa from "./europeUsa";
import southern from "./southern";
import southern2 from "./southern2";
import europe2 from "./europe2";
import usa2 from "./usa2";
import france2 from "./france2";
import italyIberia2 from "./italyIberia2";

const ALL: Record<string, WineText> = { ...base, ...bordeaux, ...france, ...italyIberia, ...europeUsa, ...southern, ...southern2, ...europe2, ...usa2, ...france2, ...italyIberia2 };

export default ALL;
