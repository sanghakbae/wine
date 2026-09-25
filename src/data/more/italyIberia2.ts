import type { Wine } from "../wines";
import { mk } from "../make";

// 이탈리아·스페인·포르투갈 두 번째 묶음.
// 한국어 산지·품종 이름 → 라벨용 원어 (lang.ts 와 다른 more/*.ts 에 없는 것만)
export const REGIONS: Record<string, string> = {
  // 이탈리아
  "아퀴 테르메": "Acqui Terme",
  가비: "Gavi",
  랑게: "Langhe",
  움브리아: "Umbria",
  몬테팔코: "Montefalco",
  토르자노: "Torgiano",
  라치오: "Lazio",
  카르미냐노: "Carmignano",
  발다르노: "Valdarno di Sopra",
  "발 도르차": "Val d'Orcia",
  소아베: "Soave Classico",
  브레간체: "Breganze",
  코넬리아노: "Conegliano Valdobbiadene",
  루가나: "Lugana",
  발텔리나: "Valtellina",
  트렌토: "Trento",
  트라민: "Tramin",
  "발레 이사르코": "Valle Isarco",
  "레조 에밀리아": "Reggiano",
  "그레코 디 투포": "Greco di Tufo",
  "팔레르노 델 마시코": "Falerno del Massico",
  살레르노: "Colli di Salerno",
  바실리카타: "Basilicata",
  불투레: "Aglianico del Vulture",
  살렌토: "Salento",
  비토리아: "Vittoria",
  알게로: "Alghero",
  술치스: "Carignano del Sulcis",
  // 스페인
  루에다: "Rueda",
  비에르소: "Bierzo",
  몬산트: "Montsant",
  "콘카 데 바르베라": "Conca de Barberà",
  "콘카 델 리우 아노이아": "Conca del Riu Anoia",
  코르핀나트: "Corpinnat",
  아라곤: "Aragón",
  소몬타노: "Somontano",
  "캄포 데 보르하": "Campo de Borja",
  나바라: "Navarra",
  // 포르투갈
  "몽상 이 멜가수": "Monção e Melgaço",
  "베이라 아틀란티쿠": "Beira Atlântico",
  당: "Dão",
};

export const GRAPES: Record<string, string> = {
  코르테세: "Cortese",
  아르네이스: "Arneis",
  브라케토: "Brachetto",
  가르가네가: "Garganega",
  베스파이올라: "Vespaiola",
  투르비아나: "Turbiana",
  사그란티노: "Sagrantino",
  그레케토: "Grechetto",
  네그로아마로: "Negroamaro",
  "말바지아 네라": "Malvasia Nera",
  프라파토: "Frappato",
  그레코: "Greco",
  피에디로소: "Piedirosso",
  케르너: "Kerner",
  피콜리트: "Picolit",
  멘시아: "Mencía",
  비우라: "Viura",
  모스카텔: "Moscatel",
  카스텔랑: "Castelão",
  알바리뉴: "Alvarinho",
  엥크루자두: "Encruzado",
};

const IT = "이탈리아";
const ES = "스페인";
const PT = "포르투갈";

const GAJA_STYLE = { layout: "minimal", paper: "#ffffff", ink: "#111111", font: "sans", emblem: "none", foil: null } as const;

export const WINES: Wine[] = [
  // ───────── 이탈리아 · 피에몬테
  mk({
    id: "ib2_villam", name: "빌라 엠 비앙코", original: "Villa M Bianco", labelName: "Villa M", maker: "Gianni Gagliardo",
    producer: "잔니 갈리아르도", producerQ: true, country: IT, area: "피에몬테", grape: "모스카토",
    type: "sparkling", tier: 1, shape: "champagne", cap: "#1b1410", nv: true, style: { layout: "italian" },
    fact: "바롤로 산지 라 모라의 잔니 갈리아르도 가문이 1978년 모스카토 양조를 시작하며 키운 브랜드. 달콤하고 가벼운 기포로 사랑받는다.",
    quiz: [
      { q: "빌라 엠을 만드는 잔니 갈리아르도가 1974년, 거의 사라져 가던 것을 '입양'하듯 되살린 청포도는?", a: "파보리타", x: ["코르테세", "티모라소", "에르바루체"] },
    ],
  }),
  mk({
    id: "ib2_santero958", name: "산테로 958 모스카토", original: "958 Santero Moscato", labelName: "958", maker: "Santero",
    producer: "산테로", country: IT, area: "피에몬테", grape: "모스카토",
    type: "sparkling", tier: 1, shape: "champagne", cap: "#c9a24e", nv: true, style: { layout: "italian" },
    fact: "모스카토의 고향 산토 스테파노 벨보에서 산테로 형제가 세운 스파클링 하우스의 대표작. 복숭아·꽃 향이 나는 달콤한 맛으로 사랑받는다.",
    quiz: [
      { q: "산테로 958의 숫자 '958'이 뜻하는 것은?", a: "와이너리를 세운 1958년", x: ["포도밭의 해발 고도 958m", "첫해에 만든 958병", "마을의 우편번호"] },
    ],
  }),
  mk({
    id: "ib2_rosaregale", name: "반피 로사 레갈레 브라케토 다퀴", original: "Rosa Regale", maker: "Banfi",
    producer: "반피", country: IT, area: "피에몬테", sub: "아퀴 테르메", grape: "브라케토",
    type: "sparkling", tier: 1, shape: "champagne", liquid: "redLight", cap: "#8e1520", cls: "Brachetto d'Acqui DOCG", style: { layout: "italian" },
    fact: "장미 향이 도는 붉은 브라케토 포도로 빚은 달콤한 스파클링 레드. 알코올이 7% 안팎으로 낮아 디저트와 잘 어울린다.",
    quiz: [
      { q: "반피가 브라케토 다퀴를 소개하며 드는 전설에서, 연인들에게 이 와인을 마시게 했다는 인물은?", a: "클레오파트라", x: ["마리 앙투아네트", "나폴레옹", "카사노바"] },
    ],
  }),
  mk({
    id: "ib2_lascolca", name: "라 스콜카 가비 데이 가비 에티케타 네라", original: "Gavi dei Gavi Etichetta Nera", labelName: "Gavi dei Gavi", maker: "La Scolca",
    producer: "라 스콜카", country: IT, area: "피에몬테", sub: "가비", grape: "코르테세",
    type: "white", tier: 2, shape: "burgundy", glass: "flint", cap: "#1b1410", cls: "Gavi DOCG",
    style: { layout: "dark", paper: "#161616", ink: "#e9dcb4", foil: "gold" },
    fact: "솔다티 가문이 1917~1919년 사들인 영지에서 빚는 가비의 대표 화이트. '검은 라벨'이라는 뜻의 에티케타 네라는 1968년 상표로 등록됐다.",
    quiz: [
      { q: "라 스콜카(La Scolca)라는 영지 이름에 담긴 뜻은?", a: "멀리 내다보는 곳(옛 망루)", x: ["숲속의 샘", "돌이 많은 언덕", "수도사의 집"] },
    ],
  }),
  mk({
    id: "ib2_blange", name: "체레토 블랑제 아르네이스", original: "Blangé", maker: "Ceretto",
    producer: "체레토", country: IT, area: "피에몬테", sub: "랑게", grape: "아르네이스",
    type: "white", tier: 2, shape: "burgundy", cap: "#d8c9a0", cls: "Langhe DOC Arneis", since: 1985,
    fact: "1985년 첫선을 보인 체레토의 아르네이스. 붉은 품종 일색이던 랑게에서 화이트 붐을 일으키며 한 시대를 풍미했다.",
    quiz: [
      { q: "블랑제(Blangé)라는 밭 이름은 어떤 전설에서 왔나?", a: "나폴레옹 군대의 제빵사(불랑제)가 진을 쳤던 곳", x: ["성녀 블랑카가 기적을 일으킨 곳", "하얀 안개가 늘 끼는 언덕", "중세 기사 블랑제의 영지"] },
    ],
  }),
  mk({
    id: "ib2_aleste", name: "루치아노 산드로네 바롤로 알레스테", original: "Barolo Aleste", labelName: "Aleste", maker: "Luciano Sandrone",
    producer: "루치아노 산드로네", country: IT, area: "피에몬테", sub: "바롤로", grape: "네비올로",
    type: "red", tier: 3, shape: "burgundy", cap: "#1b1410", cls: "Barolo DOCG", since: 2013,
    fact: "루치아노 산드로네를 대표하던 칸누비 보스키스 밭의 바롤로. 2013년 빈티지부터 '알레스테'라는 새 이름으로 나온다.",
    quiz: [
      { q: "'알레스테(Aleste)'라는 이름은 어떻게 지었나?", a: "손주 알레시아와 스테파노의 이름 앞 글자를 합쳐서", x: ["밭 옆을 흐르는 개울 이름에서", "라틴어로 '높은 언덕'이라는 뜻에서", "산드로네 부부의 이름을 합쳐서"] },
    ],
  }),
  mk({
    id: "ib2_granbussia", name: "알도 콘테르노 그란부시아 바롤로 리세르바", original: "Granbussia", maker: "Poderi Aldo Conterno",
    producer: "포데리 알도 콘테르노", country: IT, area: "피에몬테", sub: "바롤로", grape: "네비올로",
    type: "red", tier: 2, shape: "burgundy", cap: "#7a1522", cls: "Barolo Riserva DOCG",
    fact: "몬포르테 달바 부시아 언덕의 로미라스코 밭 포도를 중심으로 좋은 해에만 빚는 리세르바. 오래 숙성한 뒤에야 출시된다.",
    quiz: [
      { q: "알도 콘테르노가 1969년 형 조반니와 갈라서며 떠나온 아버지의 와이너리는?", a: "자코모 콘테르노", x: ["바르톨로 마스카렐로", "브루노 자코사", "피오 체자레"] },
    ],
  }),
  mk({
    id: "ib2_prunotto", name: "프루노토 바롤로 부시아", original: "Barolo Bussia", maker: "Prunotto",
    producer: "프루노토", country: IT, area: "피에몬테", sub: "바롤로", grape: "네비올로",
    type: "red", tier: 2, shape: "burgundy", cap: "#8a1a22", cls: "Barolo DOCG",
    fact: "1923년 알프레도 프루노토가 협동조합을 넘겨받아 키운 알바의 와이너리. 바롤로와 바르바레스코를 해외에 알린 선구자로 꼽힌다.",
    quiz: [
      { q: "1989년부터 프루노토 와인을 유통하다 1994년 경영권을 넘겨받은 토스카나 가문은?", a: "안티노리", x: ["프레스코발디", "리카솔리", "마체이"] },
    ],
  }),
  mk({
    id: "ib2_laspinetta", name: "라 스피네타 바르바레스코 갈리나", original: "Barbaresco Gallina", maker: "La Spinetta",
    producer: "라 스피네타", country: IT, area: "피에몬테", sub: "바르바레스코", grape: "네비올로",
    type: "red", tier: 2, shape: "burgundy", cap: "#1b1410", cls: "Barbaresco DOCG",
    fact: "1977년부터 모스카토 다스티로 이름을 알린 리베티 가문이 네이베의 갈리나 밭에서 빚는 바르바레스코.",
    quiz: [
      { q: "라 스피네타 바르바레스코 라벨에 그려진 동물은?", a: "코뿔소", x: ["말", "독수리", "멧돼지"] },
      { q: "라 스피네타 라벨의 코뿔소 그림은 누구의 1515년 목판화인가?", a: "알브레히트 뒤러", x: ["레오나르도 다 빈치", "한스 홀바인", "피터르 브뤼헐"] },
    ],
  }),
  mk({
    id: "ib2_darmagi", name: "가야 다르마지", original: "Darmagi", maker: "Gaja",
    producer: "가야", country: IT, area: "피에몬테", sub: "랑게", grape: "카베르네 소비뇽·메를로·카베르네 프랑",
    type: "red", tier: 2, shape: "bordeaux", cap: "#1b1410", cls: "Langhe DOC", style: GAJA_STYLE,
    fact: "안젤로 가야가 바르바레스코 마을의 네비올로 밭을 뽑고 카베르네 소비뇽을 심어 빚은 와인. 피에몬테 전통에 대한 도전으로 화제를 모았다.",
    quiz: [
      { q: "'다르마지(Darmagi)'는 피에몬테 사투리로 무슨 뜻인가?", a: "아깝다(안타깝다)", x: ["자랑스럽다", "새로운 시작", "용감한 자"] },
      { q: "다르마지라는 이름은 누구의 탄식에서 나왔다고 전하나?", a: "안젤로 가야의 아버지 조반니", x: ["안젤로 가야의 딸 가이아", "이웃 농부들", "바르바레스코 마을 신부"] },
    ],
  }),
  mk({
    id: "ib2_sperss", name: "가야 스페르스", original: "Sperss", maker: "Gaja",
    producer: "가야", country: IT, area: "피에몬테", sub: "바롤로", grape: "네비올로",
    type: "red", tier: 2, shape: "burgundy", cap: "#1b1410", cls: "Barolo DOCG", style: GAJA_STYLE,
    fact: "바르바레스코의 명가 가야가 1988년 세랄룽가 달바의 밭을 사들여 빚기 시작한 바롤로.",
    quiz: [
      { q: "'스페르스(Sperss)'는 피에몬테 사투리로 무슨 뜻인가?", a: "그리움(향수)", x: ["아깝다", "해 뜨는 언덕", "끈기"] },
    ],
  }),
  mk({
    id: "ib2_gaiarey", name: "가야 가이아 앤 레이", original: "Gaia & Rey", maker: "Gaja",
    producer: "가야", country: IT, area: "피에몬테", sub: "랑게", grape: "샤르도네",
    type: "white", tier: 2, shape: "burgundy", cap: "#d8c9a0", cls: "Langhe DOC", style: GAJA_STYLE,
    fact: "가야가 피에몬테에서 선구적으로 심은 샤르도네를 작은 오크통에서 숙성해 빚는 화이트.",
    quiz: [
      { q: "가이아 앤 레이의 이름 속 '가이아'와 '레이'는 누구인가?", a: "안젤로 가야의 맏딸과 할머니", x: ["안젤로 가야의 아내와 어머니", "포도밭 두 곳의 이름", "가야의 첫 양조가 두 사람"] },
    ],
  }),
  mk({
    id: "ib2_nivole", name: "미켈레 키아를로 니볼레 모스카토 다스티", original: "Nivole", maker: "Michele Chiarlo",
    producer: "미켈레 키아를로", country: IT, area: "피에몬테", sub: "아스티", grape: "모스카토",
    type: "sparkling", tier: 1, shape: "burgundy", glass: "flint", cap: "#c9a857", cls: "Moscato d'Asti DOCG", style: { layout: "italian" },
    fact: "알코올 5% 안팎에 은은하게 기포가 이는 달콤한 모스카토 다스티. 흔히 375ml 작은 병에 담겨 나온다.",
    quiz: [
      { q: "'니볼레(Nivole)'는 피에몬테 사투리로 무슨 뜻인가?", a: "구름", x: ["꿀벌", "봄바람", "작은 별"] },
    ],
  }),
  mk({
    id: "ib2_marcenasco", name: "레나토 라티 바롤로 마르체나스코", original: "Barolo Marcenasco", maker: "Renato Ratti",
    producer: "레나토 라티", country: IT, area: "피에몬테", sub: "바롤로", grape: "네비올로",
    type: "red", tier: 3, shape: "burgundy", cap: "#6a1822", cls: "Barolo DOCG",
    fact: "라 모라의 옛 수도원 아바치아 델라눈치아타 둘레 마르체나스코 밭에서 나는 바롤로. 수도원 셀러에는 라티 와인 박물관이 있다.",
    quiz: [
      { q: "레나토 라티가 1970년대에 만들어 바롤로 역사에 이름을 남긴 것은?", a: "바롤로의 이름난 밭(크뤼)을 표시한 지도", x: ["최초의 바롤로 협동조합", "바롤로 전용 와인잔", "네비올로 클론 은행"] },
    ],
  }),
  mk({
    id: "ib2_borgogno", name: "보르고뇨 바롤로", original: "Borgogno Barolo",
    producer: "보르고뇨", country: IT, area: "피에몬테", sub: "바롤로", grape: "네비올로",
    type: "red", tier: 2, shape: "burgundy", cap: "#7a1522", cls: "Barolo DOCG",
    fact: "1761년 문을 연 랑게에서 손꼽히게 오래된 와이너리. 1861년 이탈리아 통일을 축하하는 오찬에 이 집 바롤로가 올랐다고 전한다.",
    quiz: [
      { q: "2008년 보르고뇨를 인수한 오스카 파리네티가 세운 것으로 유명한 이탈리아 식품 매장 체인은?", a: "이탈리(Eataly)", x: ["바릴라", "페레로", "라바차"] },
    ],
  }),

  // ───────── 이탈리아 · 토스카나 · 움브리아 · 라치오
  mk({
    id: "ib2_excelsus", name: "카스텔로 반피 엑셀수스", original: "Excelsus", maker: "Castello Banfi",
    producer: "카스텔로 반피", country: IT, area: "토스카나", sub: "몬탈치노", grape: "메를로·카베르네 소비뇽",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Toscana IGT", since: 1995,
    fact: "반피가 몬탈치노 영지에서 메를로와 카베르네 소비뇽으로 빚는 슈퍼 투스칸. 1995년 빈티지로 첫선을 보였고 뛰어난 해에만 만든다.",
    quiz: [
      { q: "와이너리 이름 '반피'의 주인공 테오돌린다 반피가 살림을 맡았던 인물은?", a: "교황 비오 11세", x: ["국왕 움베르토 1세", "지휘자 아르투로 토스카니니", "작곡가 자코모 푸치니"] },
    ],
  }),
  mk({
    id: "ib2_santacristina", name: "산타 크리스티나 로소", original: "Santa Cristina Rosso", labelName: "Santa Cristina", maker: "Marchesi Antinori",
    producer: "안티노리", producerQ: true, country: IT, area: "토스카나", grape: "산지오베제·메를로",
    type: "red", tier: 1, shape: "bordeaux", cap: "#8e1520", cls: "Toscana IGT", since: 1946,
    fact: "안티노리 가문이 1946년 처음 선보인 데일리 와인. 산지오베제의 신선한 과일 맛을 살려 부담 없이 즐기도록 만든다.",
    quiz: [
      { q: "산타 크리스티나가 처음 만들어진 해는?", a: "1946년", x: ["1885년", "1971년", "1999년"] },
    ],
  }),
  mk({
    id: "ib2_cervaro", name: "체르바로 델라 살라", original: "Cervaro della Sala", maker: "Castello della Sala · Antinori",
    producer: "안티노리(카스텔로 델라 살라)", producerQ: true, country: IT, area: "움브리아", grape: "샤르도네·그레케토",
    type: "white", tier: 2, shape: "burgundy", cap: "#c9a24e", cls: "Umbria IGT", since: 1985,
    fact: "안티노리가 움브리아 오르비에토 근처의 중세 성 카스텔로 델라 살라에서 빚는 화이트. 이탈리아에서 일찍이 바리크 숙성을 시도한 화이트로 꼽힌다.",
    quiz: [
      { q: "'체르바로'라는 이름은 어디에서 왔나?", a: "14세기 이 성을 가졌던 모날데스키 델라 체르바라 가문", x: ["성 주변 숲에 사는 사슴(체르보)", "성을 지은 건축가", "움브리아의 강 이름"] },
    ],
  }),
  mk({
    id: "ib2_bramito", name: "브라미토 델라 살라", original: "Bramìto della Sala", maker: "Castello della Sala · Antinori",
    producer: "안티노리(카스텔로 델라 살라)", producerQ: true, country: IT, area: "움브리아", grape: "샤르도네",
    type: "white", tier: 2, shape: "burgundy", cap: "#d8c9a0", cls: "Umbria IGT",
    fact: "체르바로와 같은 카스텔로 델라 살라 영지의 샤르도네로 빚는 화이트. 화석이 섞인 점토질 땅에서 자란 포도를 쓴다.",
    quiz: [
      { q: "'브라미토(Bramìto)'는 무엇을 가리키는 말인가?", a: "사슴이 짝을 부르며 우는 소리", x: ["성의 종소리", "늑대의 울음", "포도를 밟는 소리"] },
    ],
  }),
  mk({
    id: "ib2_peppoli", name: "안티노리 페폴리 키안티 클라시코", original: "Pèppoli", maker: "Marchesi Antinori",
    producer: "안티노리", country: IT, area: "토스카나", sub: "키안티", grape: "산지오베제",
    type: "red", tier: 1, shape: "bordeaux", cap: "#7a1522", cls: "Chianti Classico DOCG",
    fact: "안티노리가 바디아 아 파시냐노 근처에 가진 페폴리 영지에서 빚는 키안티 클라시코. 산지오베제의 싱그러운 과일 맛을 살렸다.",
    quiz: [
      { q: "안티노리 가문이 페폴리 영지를 사들인 해는?", a: "1985년", x: ["1385년", "1928년", "2005년"] },
    ],
  }),
  mk({
    id: "ib2_guidalberto", name: "구이달베르토", original: "Guidalberto", maker: "Tenuta San Guido",
    producer: "테누타 산 귀도", producerQ: true, country: IT, area: "토스카나", sub: "볼게리", grape: "카베르네 소비뇽·메를로",
    type: "red", tier: 2, shape: "bordeaux", cap: "#1b1410", cls: "Toscana IGT", since: 2000,
    fact: "사시카이아를 만드는 테누타 산 귀도가 2000년 빈티지로 처음 내놓은 와인. 사시카이아보다 일찍 즐기기 좋게 만든다.",
    quiz: [
      { q: "와인 이름의 주인공 구이달베르토 델라 게라르데스카가 심은 것으로 알려진 볼게리의 명물은?", a: "5km에 이르는 사이프러스 가로수길", x: ["볼게리 성의 포도나무 정원", "해안가 소나무 숲", "언덕 위 올리브 과수원"] },
    ],
  }),
  mk({
    id: "ib2_brolio", name: "바로네 리카솔리 카스텔로 디 브롤리오", original: "Castello di Brolio", maker: "Barone Ricasoli",
    producer: "바로네 리카솔리", country: IT, area: "토스카나", sub: "키안티", grape: "산지오베제",
    type: "red", tier: 2, shape: "bordeaux", cap: "#8e1520", cls: "Chianti Classico Gran Selezione",
    fact: "1141년부터 이어진 리카솔리 가문이 가이올레 인 키안티의 브롤리오 성 둘레 밭에서 빚는 최상급 키안티 클라시코.",
    quiz: [
      { q: "1872년 키안티의 품종 배합 비율을 처음 정리한 베티노 리카솔리의 또 다른 이력은?", a: "통일 이탈리아의 총리", x: ["피렌체 대주교", "메디치 가문의 마지막 대공", "밀라노 스칼라 극장 작곡가"] },
    ],
  }),
  mk({
    id: "ib2_coltibuono", name: "바디아 아 콜티부오노 키안티 클라시코", original: "Badia a Coltibuono Chianti Classico", labelName: "Badia a Coltibuono",
    producer: "바디아 아 콜티부오노", country: IT, area: "토스카나", sub: "키안티", grape: "산지오베제",
    type: "red", tier: 2, shape: "bordeaux", cap: "#6a1822", cls: "Chianti Classico DOCG",
    fact: "1051년 발롬브로사회 수도사들이 세운 수도원이 1846년 지금 주인의 조상에게 넘어가 와이너리가 됐다.",
    quiz: [
      { q: "'바디아 아 콜티부오노'는 무슨 뜻인가?", a: "좋은 수확의 수도원", x: ["언덕 위의 성", "검은 수탉의 집", "성녀 부오나의 교회"] },
    ],
  }),
  mk({
    id: "ib2_fonterutoli", name: "마체이 카스텔로 디 폰테루톨리", original: "Castello Fonterutoli", maker: "Marchesi Mazzei",
    producer: "마체이", country: IT, area: "토스카나", sub: "키안티", grape: "산지오베제",
    type: "red", tier: 2, shape: "bordeaux", cap: "#1b1410", cls: "Chianti Classico Gran Selezione",
    fact: "1435년부터 카스텔리나 인 키안티의 폰테루톨리 마을을 지켜 온 마체이 가문의 최상급 키안티 클라시코.",
    quiz: [
      { q: "마체이 가문의 선조 세르 라포 마체이가 1398년 남긴 문서가 유명한 이유는?", a: "'키안티'를 와인 이름으로 쓴 가장 오래된 기록", x: ["최초의 와인 수출 계약서", "메디치 가문과 맺은 결혼 계약", "산지오베제라는 이름의 첫 기록"] },
    ],
  }),
  mk({
    id: "ib2_camartina", name: "퀘르차벨라 카마르티나", original: "Camartina", maker: "Querciabella",
    producer: "퀘르차벨라", country: IT, area: "토스카나", grape: "카베르네 소비뇽·산지오베제",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#2f4a2c", cls: "Toscana IGT", since: 1981,
    fact: "1974년 주세페 카스틸리오니가 그레베 인 키안티에 세운 퀘르차벨라의 대표 슈퍼 투스칸. 1981년 빈티지로 첫선을 보였다.",
    quiz: [
      { q: "퀘르차벨라가 2000년부터 이탈리아에서 앞서 도입한 농법의 특징은?", a: "동물성 재료를 전혀 쓰지 않는 바이오다이내믹", x: ["포도밭에 양을 풀어 풀을 뜯게 하는 방식", "비닐하우스 재배", "달빛 아래에서만 수확하는 방식"] },
    ],
  }),
  mk({
    id: "ib2_isodi", name: "카스텔라레 이 소디 디 산 니콜로", original: "I Sodi di San Niccolò", maker: "Castellare di Castellina",
    producer: "카스텔라레 디 카스텔리나", country: IT, area: "토스카나", grape: "산지오베제·말바지아 네라",
    type: "red", tier: 3, shape: "bordeaux", cap: "#7a1522", cls: "Toscana IGT", since: 1977,
    fact: "산지오베제에 말바지아 네라를 조금 섞어 빚는 초기 슈퍼 투스칸. 1977년 빈티지로 첫선을 보였다.",
    quiz: [
      { q: "카스텔라레 와인 라벨에 빈티지마다 바뀌어 그려지는 것은?", a: "멸종 위기에 처한 새", x: ["토스카나의 옛 성", "해마다 다른 화가의 자화상", "그해 수확한 포도송이"] },
    ],
  }),
  mk({
    id: "ib2_ilblu", name: "브란카이아 일 블루", original: "Il Blu", maker: "Brancaia",
    producer: "브란카이아", country: IT, area: "토스카나", grape: "산지오베제·메를로·카베르네 소비뇽",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1f3a5f", cls: "Toscana IGT", since: 1988, style: { accent: "#1f3a5f" },
    fact: "산지오베제와 메를로를 거의 반씩 섞어 빚는 브란카이아의 대표작. 1988년 빈티지로 첫선을 보였다.",
    quiz: [
      { q: "1981년 브란카이아 영지를 휴가용으로 사들인 비트머 부부의 고향은?", a: "스위스 취리히", x: ["독일 뮌헨", "오스트리아 빈", "영국 런던"] },
    ],
  }),
  mk({
    id: "ib2_trinoro", name: "테누타 디 트리노로", original: "Tenuta di Trinoro",
    producer: "테누타 디 트리노로", country: IT, area: "토스카나", sub: "발 도르차", grape: "카베르네 프랑·메를로",
    type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Toscana IGT",
    fact: "안드레아 프란케티가 1990년대 초 외딴 발 도르차의 황무지에 포도나무를 빽빽이 심어 일군 컬트 와인. 카베르네 프랑이 중심이다.",
    quiz: [
      { q: "테누타 디 트리노로가 어린 나무 포도 등으로 만드는 세컨드 와인은?", a: "레 쿠폴레", x: ["레 세레 누오베", "일 브루차토", "레 볼테"] },
    ],
  }),
  mk({
    id: "ib2_messorio", name: "레 마키올레 메소리오", original: "Messorio", maker: "Le Macchiole",
    producer: "레 마키올레", country: IT, area: "토스카나", sub: "볼게리", grape: "메를로",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#5a1620", cls: "Toscana IGT", since: 1994,
    fact: "볼게리의 초기 개척자 레 마키올레가 1994년 빈티지부터 메를로로 빚는 대표작. 2004 빈티지가 와인 스펙테이터 100점을 받았다.",
    quiz: [
      { q: "1983년 레 마키올레를 함께 세운 에우제니오 캄폴미가 2002년 세상을 떠난 뒤 와이너리를 이끈 사람은?", a: "아내 친치아 메를리", x: ["동생 루카 캄폴미", "양조가 자코모 타키스", "이웃 오르넬라이아의 주인"] },
    ],
  }),
  mk({
    id: "ib2_camarcanda", name: "가야 카마르칸다", original: "Camarcanda", maker: "Ca'Marcanda · Gaja",
    producer: "가야", country: IT, area: "토스카나", sub: "볼게리", grape: "메를로·카베르네 소비뇽·카베르네 프랑",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Bolgheri DOC",
    fact: "피에몬테의 가야가 1996년 볼게리에 마련한 영지 카 마르칸다의 대표 와인. 보르도 품종으로 빚는다.",
    quiz: [
      { q: "'카 마르칸다(Ca'Marcanda)'는 피에몬테 사투리로 무슨 뜻인가?", a: "끝없는 흥정의 집", x: ["바닷바람의 집", "붉은 흙의 집", "마르칸다 백작의 집"] },
    ],
  }),
  mk({
    id: "ib2_capezzana", name: "빌라 디 카페차나 카르미냐노", original: "Villa di Capezzana", maker: "Tenuta di Capezzana",
    producer: "테누타 디 카페차나", country: IT, area: "토스카나", sub: "카르미냐노", grape: "산지오베제·카베르네 소비뇽",
    type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: "Carmignano DOCG",
    fact: "804년 문서에 이미 포도주 생산이 기록된 영지의 카르미냐노. 1920년부터 콘티니 보나코시 가문이 가꾼다.",
    quiz: [
      { q: "카르미냐노를 키안티·포미노 등과 함께 1716년 칙령으로 처음 지정한 인물은?", a: "토스카나 대공 코시모 3세 데 메디치", x: ["나폴레옹 보나파르트", "교황 율리오 2세", "로렌초 데 메디치"] },
    ],
  }),
  mk({
    id: "ib2_roccamacie", name: "로카 델레 마치에 키안티 클라시코", original: "Rocca delle Macìe Chianti Classico", labelName: "Rocca delle Macìe",
    producer: "로카 델레 마치에", country: IT, area: "토스카나", sub: "키안티", grape: "산지오베제",
    type: "red", tier: 1, shape: "bordeaux", cap: "#8e1520", cls: "Chianti Classico DOCG",
    fact: "1973년 카스텔리나 인 키안티의 레 마치에 영지를 사들여 세운 와이너리. 지금은 창업자의 셋째 아들 세르조 가족이 이끈다.",
    quiz: [
      { q: "로카 델레 마치에를 세운 이탈로 칭가렐리가 제작해 크게 흥행한 영화 시리즈는?", a: "버드 스펜서·테렌스 힐의 '트리니티' 서부극", x: ["세르조 레오네의 '무법자' 3부작", "페데리코 펠리니의 '달콤한 인생'", "주세페 토르나토레의 '시네마 천국'"] },
    ],
  }),
  mk({
    id: "ib2_ilborro", name: "일 보로", original: "Il Borro",
    producer: "일 보로", country: IT, area: "토스카나", sub: "발다르노", grape: "메를로·카베르네 소비뇽·시라",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Toscana IGT",
    fact: "피렌체와 아레초 사이 발다르노의 중세 마을을 품은 영지 일 보로에서 빚는 레드. 1993년부터 한 패션 가문이 되살렸다.",
    quiz: [
      { q: "1993년 아오스타 공작에게서 일 보로 영지를 사들인 인물은?", a: "페루초 페라가모", x: ["로도비코 안티노리", "안젤로 가야", "마우리치오 차넬라"] },
    ],
  }),
  mk({
    id: "ib2_25anni", name: "아르날도 카프라이 사그란티노 25 안니", original: "25 Anni", maker: "Arnaldo Caprai",
    producer: "아르날도 카프라이", country: IT, area: "움브리아", sub: "몬테팔코", grape: "사그란티노",
    type: "red", tier: 2, shape: "bordeaux", cap: "#3a0f14", cls: "Montefalco Sagrantino DOCG", since: 1993,
    fact: "몬테팔코의 토착 품종 사그란티노를 세계에 알린 와인. 1993년 빈티지를 1996년에 내놓으며 이 품종을 주목받게 했다.",
    quiz: [
      { q: "'25 안니(25 Anni)'라는 이름의 뜻은?", a: "와이너리 창립 25주년 기념", x: ["25년 동안 숙성", "수령 25년 넘은 포도나무", "25개 밭의 포도를 섞음"] },
    ],
  }),
  mk({
    id: "ib2_montiano", name: "팔레스코 몬티아노", original: "Montiano", maker: "Falesco",
    producer: "팔레스코", country: IT, area: "라치오", grape: "메를로",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Lazio IGT",
    fact: "라치오 북부 몬테피아스코네 근처의 메를로로 빚는 와인. 1990년대 이탈리아 메를로의 아이콘으로 떠올랐다.",
    quiz: [
      { q: "1979년 팔레스코를 세운 형제는?", a: "리카르도·렌초 코타렐라", x: ["존·해리 마리아니", "브루노·마르첼로 체레토", "피에로·로도비코 안티노리"] },
    ],
  }),
  mk({
    id: "ib2_rubesco", name: "룽가로티 루베스코 리제르바 비냐 몬티키오", original: "Rubesco Riserva Vigna Monticchio", labelName: "Rubesco", maker: "Lungarotti",
    producer: "룽가로티", country: IT, area: "움브리아", sub: "토르자노", grape: "산지오베제",
    type: "red", tier: 2, shape: "bordeaux", cap: "#6a1822", cls: "Torgiano Rosso Riserva DOCG", since: 1964,
    fact: "조르조 룽가로티가 토르자노의 몬티키오 밭에서 1964년 빈티지로 처음 빚은 리제르바. 움브리아를 대표하는 레드로 꼽힌다.",
    quiz: [
      { q: "1974년 조르조·마리아 그라치아 룽가로티 부부가 토르자노에 연 것은?", a: "와인 박물관", x: ["양조 학교", "와인 전용 호텔", "오페라 극장"] },
    ],
  }),

  // ───────── 이탈리아 · 베네토 · 롬바르디아 · 트렌티노 알토 아디제 · 프리울리
  mk({
    id: "ib2_palazzotorre", name: "알레그리니 팔라초 델라 토레", original: "Palazzo della Torre", maker: "Allegrini",
    producer: "알레그리니", country: IT, area: "베네토", grape: "코르비나·론디넬라",
    type: "red", tier: 1, shape: "bordeaux", cap: "#1b1410", cls: "Veronese IGT",
    fact: "포도의 70%는 곧바로 발효하고, 30%는 몇 달 말렸다가 더해 다시 발효시키는 방식으로 빚는 레드.",
    quiz: [
      { q: "팔라초 델라 토레라는 이름은 어디에서 왔나?", a: "푸마네에 있는 르네상스 저택 빌라 델라 토레", x: ["베로나 원형 경기장", "가르다 호숫가의 등대", "알레그리니 가문의 첫 셀러 탑"] },
    ],
  }),
  mk({
    id: "ib2_campofiorin", name: "마시 캄포피오린", original: "Campofiorin", maker: "Masi",
    producer: "마시", country: IT, area: "베네토", grape: "코르비나·론디넬라",
    type: "red", tier: 1, shape: "bordeaux", cap: "#8e1520", cls: "Rosso del Veronese IGT", since: 1964,
    fact: "아마로네를 빚은 말린 포도 찌꺼기에 젊은 와인을 다시 발효시키는 '리파소' 방식으로 빚는다. 원조 '슈퍼 베네치안'으로 불린다.",
    quiz: [
      { q: "캄포피오린이 처음 만들어진 해는?", a: "1964년", x: ["1864년", "1934년", "1994년"] },
    ],
  }),
  mk({
    id: "ib2_calvarino", name: "피에로판 소아베 클라시코 칼바리노", original: "Calvarino", maker: "Pieropan",
    producer: "피에로판", country: IT, area: "베네토", sub: "소아베", grape: "가르가네가·트레비아노",
    type: "white", tier: 3, shape: "burgundy", cap: "#d8c9a0", cls: "Soave Classico DOC", since: 1971,
    fact: "니노 피에로판이 1971년 선보인 소아베 최초의 싱글 빈야드 와인. 가파른 현무암 비탈의 포도로 빚는다.",
    quiz: [
      { q: "'칼바리노(Calvarino)'라는 밭 이름의 뜻은?", a: "작은 골고다(고난의 길)", x: ["작은 성", "대머리 언덕", "따뜻한 샘"] },
    ],
  }),
  mk({
    id: "ib2_foscarino", name: "안셀미 카피텔 포스카리노", original: "Capitel Foscarino", maker: "Anselmi",
    producer: "안셀미", country: IT, area: "베네토", grape: "가르가네가·샤르도네",
    type: "white", tier: 2, shape: "burgundy", cap: "#d8c9a0", cls: "Veneto IGT",
    fact: "로베르토 안셀미가 몬테 포스카리노의 화산 토양에서 자란 포도로 빚는 화이트. 소아베 지역의 품질 혁신을 이끈 와인으로 꼽힌다.",
    quiz: [
      { q: "로베르토 안셀미가 2000년 결단해 화제를 모은 일은?", a: "소아베 원산지 명칭을 버리고 IGT 베네토로 내놓기 시작했다", x: ["모든 와인을 오렌지 와인으로 바꿨다", "포도밭을 전부 샤르도네로 갈아엎었다", "코르크 대신 유리 마개만 쓰기로 했다"] },
    ],
  }),
  mk({
    id: "ib2_torcolato", name: "마쿨란 토르콜라토", original: "Torcolato", maker: "Maculan",
    producer: "마쿨란", country: IT, area: "베네토", sub: "브레간체", grape: "베스파이올라",
    type: "sweet", tier: 3, shape: "tokaji", cap: "#c9a24e", cls: "Breganze DOC",
    fact: "브레간체에서 수확한 포도를 겨우내 말려 빚는 달콤한 파시토. 이 지역 토르콜라토의 절반가량을 마쿨란이 만든다.",
    quiz: [
      { q: "토르콜라토를 빚는 품종 '베스파이올라'라는 이름은 어떤 곤충에서 왔나?", a: "말벌", x: ["꿀벌", "나비", "무당벌레"] },
    ],
  }),
  mk({
    id: "ib2_zonin", name: "조닌 프로세코 브뤼", original: "Zonin Prosecco Brut", labelName: "Zonin",
    producer: "조닌", country: IT, area: "베네토", grape: "글레라",
    type: "sparkling", tier: 1, shape: "champagne", cap: "#c9a24e", cls: "Prosecco DOC", nv: true, style: { layout: "italian" },
    fact: "1821년 베네토의 감벨라라에서 시작한 조닌 가문의 프로세코. 조닌은 이탈리아에서 가장 큰 가족 경영 와인 회사로 꼽힌다.",
    quiz: [
      { q: "조닌 가문이 감벨라라에서 와인 사업을 시작한 해는?", a: "1821년", x: ["1721년", "1921년", "1961년"] },
    ],
  }),
  mk({
    id: "ib2_carpene", name: "카르페네 말볼티 1868 엑스트라 드라이", original: "1868 Extra Dry", maker: "Carpenè Malvolti",
    producer: "카르페네 말볼티", country: IT, area: "베네토", sub: "코넬리아노", grape: "글레라",
    type: "sparkling", tier: 2, shape: "champagne", cap: "#c9a24e", cls: "Conegliano Valdobbiadene Prosecco Superiore DOCG", nv: true, style: { layout: "italian" },
    fact: "1868년 안토니오 카르페네가 코넬리아노에 세운 와이너리. 프로세코를 처음 스파클링으로 빚어 판 곳으로 꼽힌다.",
    quiz: [
      { q: "안토니오 카르페네가 1876년 코넬리아노에 함께 세운 것은?", a: "이탈리아 최초의 양조 학교", x: ["이탈리아 최초의 유리병 공장", "프로세코 협동조합", "베네토 와인 박물관"] },
    ],
  }),
  mk({
    id: "ib2_bottegagold", name: "보테가 골드 프로세코", original: "Bottega Gold", maker: "Bottega",
    producer: "보테가", country: IT, area: "베네토", sub: "트레비소", grape: "글레라",
    type: "sparkling", tier: 1, shape: "champagne", glass: "gold", cap: "#c9a24e", cls: "Prosecco DOC Brut", nv: true,
    style: { layout: "italian", foil: "gold" },
    fact: "병 전체를 금빛으로 입힌 프로세코. 보테가는 그라파 증류소로도 이름난 트레비소의 가문이다.",
    quiz: [
      { q: "보테가 골드의 금빛 병이 떠올리게 한다는 베네치아 건축물의 장식은?", a: "산 마르코 대성당의 금빛 모자이크", x: ["리알토 다리의 금박 난간", "두칼레 궁전의 황금 계단", "무라노 섬의 유리 샹들리에"] },
    ],
  }),
  mk({
    id: "ib2_berlucchi", name: "베를루키 '61 프란차코르타 브뤼", original: "'61 Franciacorta Brut", labelName: "'61", maker: "Guido Berlucchi",
    producer: "구이도 베를루키", country: IT, area: "롬바르디아", sub: "프란차코르타", grape: "샤르도네·피노 누아",
    type: "sparkling", tier: 2, shape: "champagne", cap: "#1b1410", cls: "Franciacorta DOCG", nv: true, style: { layout: "italian" },
    fact: "구이도 베를루키와 양조가 프랑코 칠리아니가 1961년 처음 빚은 프란차코르타 스파클링을 기념하는 퀴베.",
    quiz: [
      { q: "베를루키 '61의 '61'이 기념하는 일은?", a: "1961년 첫 프란차코르타 스파클링을 만든 일", x: ["1961년 프란차코르타 DOCG 지정", "창업자의 61번째 생일", "61개월 동안의 병 숙성"] },
    ],
  }),
  mk({
    id: "ib2_cadeifrati", name: "카 데이 프라티 루가나 이 프라티", original: "I Frati", maker: "Ca' dei Frati",
    producer: "카 데이 프라티", country: IT, area: "롬바르디아", sub: "루가나", grape: "투르비아나",
    type: "white", tier: 3, shape: "bordeaux", glass: "flint", cap: "#d8c9a0", cls: "Lugana DOC",
    fact: "가르다 호수 남쪽 시르미오네의 달 체로 가문이 1969년 처음 병에 담아 낸 루가나. 토착 품종 투르비아나로 빚는다.",
    quiz: [
      { q: "'카 데이 프라티(Ca' dei Frati)'는 무슨 뜻인가?", a: "수도사들의 집", x: ["어부들의 집", "호숫가의 집", "포도 따는 이들의 집"] },
    ],
  }),
  mk({
    id: "ib2_sfursat", name: "니노 네그리 스푸르사트 5 스텔레", original: "Sfursat 5 Stelle", maker: "Nino Negri",
    producer: "니노 네그리", country: IT, area: "롬바르디아", sub: "발텔리나", grape: "네비올로",
    type: "red", tier: 3, shape: "burgundy", cap: "#7a1522", cls: "Sforzato di Valtellina DOCG",
    fact: "알프스 자락 발텔리나의 가파른 계단식 밭에서 자란 네비올로(키아벤나스카)로 빚는 니노 네그리의 최상급 와인.",
    quiz: [
      { q: "스푸르사트(스포르차토)는 어떻게 만드는 와인인가?", a: "수확한 포도를 석 달쯤 말린 뒤 빚는다", x: ["얼어붙은 포도를 짜서 빚는다", "귀부 곰팡이가 핀 포도로 빚는다", "발효 중에 브랜디를 더한다"] },
    ],
  }),
  mk({
    id: "ib2_ferraribrut", name: "페라리 브뤼", original: "Ferrari Brut", labelName: "Ferrari",
    producer: "페라리", country: IT, area: "트렌티노", sub: "트렌토", grape: "샤르도네",
    type: "sparkling", tier: 1, shape: "champagne", cap: "#1b1410", cls: "Trentodoc", nv: true, style: { layout: "italian" },
    fact: "1902년 줄리오 페라리가 트렌토에서 시작한 스파클링 하우스의 기본 퀴베. 샴페인과 같은 병 속 2차 발효로 만든다.",
    quiz: [
      { q: "2021년 시즌부터 페라리 트렌토가 시상대 공식 축하주로 쓰인 스포츠 대회는?", a: "포뮬러 1", x: ["투르 드 프랑스", "UEFA 챔피언스리그", "윔블던 테니스"] },
    ],
  }),
  mk({
    id: "ib2_giulioferrari", name: "줄리오 페라리 리제르바 델 폰다토레", original: "Giulio Ferrari Riserva del Fondatore", labelName: "Giulio Ferrari", maker: "Ferrari",
    producer: "페라리", country: IT, area: "트렌티노", sub: "트렌토", grape: "샤르도네",
    type: "sparkling", tier: 2, shape: "champagne", cap: "#c9a24e", cls: "Trentodoc", since: 1972, style: { layout: "italian" },
    fact: "창업자 줄리오 페라리에게 바치는 페라리의 최상급 스파클링. 한 밭의 샤르도네로 빚어 효모 앙금 위에서 10년 안팎 숙성한다.",
    quiz: [
      { q: "1972년 빈티지 몇천 병을 형제들 몰래 숨겨 두었다가 이 와인을 탄생시킨 인물은?", a: "마우로 루넬리", x: ["줄리오 페라리", "브루노 루넬리", "마우리치오 차넬라"] },
    ],
  }),
  mk({
    id: "ib2_kastelaz", name: "엘레나 발히 게뷔르츠트라미너 카스텔라츠", original: "Kastelaz Gewürztraminer", labelName: "Kastelaz", maker: "Elena Walch",
    producer: "엘레나 발히", country: IT, area: "알토 아디제", sub: "트라민", grape: "게뷔르츠트라미너",
    type: "white", tier: 3, shape: "flute", cap: "#c9a24e", cls: "Alto Adige DOC",
    fact: "게뷔르츠트라미너라는 이름이 비롯된 트라민 마을 위, 가파른 카스텔라츠 밭에서 빚는다. 1997년 빈티지로 첫선을 보였다.",
    quiz: [
      { q: "엘레나 발히가 와인을 만들기 전에 하던 일은?", a: "건축가", x: ["오페라 가수", "변호사", "패션 디자이너"] },
    ],
  }),
  mk({
    id: "ib2_nussbaumer", name: "트라민 누스바우머 게뷔르츠트라미너", original: "Nussbaumer", maker: "Cantina Tramin",
    producer: "칸티나 트라민", country: IT, area: "알토 아디제", sub: "트라민", grape: "게뷔르츠트라미너",
    type: "white", tier: 3, shape: "flute", cap: "#b8562a", cls: "Alto Adige DOC",
    fact: "트라민 마을 위 로엔 산자락의 누스바우머 농가 밭에서 빚는 게뷔르츠트라미너. 이탈리아에서 상을 가장 많이 받은 게뷔르츠로 꼽힌다.",
    quiz: [
      { q: "1898년 칸티나 트라민을 세운 인물은?", a: "트라민 마을 본당 신부 크리스티안 슈로트", x: ["합스부르크 황실의 포도원 관리인", "트라민 촌장", "볼차노의 은행가"] },
    ],
  }),
  mk({
    id: "ib2_novacella", name: "아바치아 디 노바첼라 케르너", original: "Abbazia di Novacella Kerner", labelName: "Kerner", maker: "Abbazia di Novacella",
    producer: "아바치아 디 노바첼라", country: IT, area: "알토 아디제", sub: "발레 이사르코", grape: "케르너",
    type: "white", tier: 3, shape: "flute", cap: "#d8c9a0", cls: "Alto Adige Valle Isarco DOC",
    fact: "브레사노네 근처의 수도원이 지금도 직접 운영하는 와이너리. 이탈리아 북쪽 끝 발레 이사르코의 포도밭에서 상쾌한 화이트를 빚는다.",
    quiz: [
      { q: "노바첼라 수도원이 세워진 해는?", a: "1142년", x: ["842년", "1442년", "1742년"] },
    ],
  }),
  mk({
    id: "ib2_oslavje", name: "라디콘 오슬라비에", original: "Oslavje", maker: "Radikon",
    producer: "라디콘", country: IT, area: "프리울리", sub: "베네치아 줄리아", grape: "샤르도네·소비뇽 블랑·피노 그리조",
    type: "white", tier: 3, shape: "burgundy", liquid: "amber", cap: "#1b1410", cls: "Venezia Giulia IGT",
    fact: "슬로베니아 국경 마을 오슬라비아에서 청포도를 껍질째 오래 담가 빚는 호박빛 화이트. 스탄코 라디콘은 오렌지 와인의 선구자로 꼽힌다.",
    quiz: [
      { q: "라디콘이 와인을 담는 병의 특징은?", a: "500ml·1리터 병에 전용 가는 코르크를 쓴다", x: ["모든 와인을 매그넘으로만 낸다", "흙항아리째 판매한다", "왁스로 병 전체를 감싼다"] },
    ],
  }),
  mk({
    id: "ib2_vespa", name: "바스티아니치 베스파 비앙코", original: "Vespa Bianco", maker: "Bastianich",
    producer: "바스티아니치", country: IT, area: "프리울리", sub: "베네치아 줄리아", grape: "샤르도네·소비뇽 블랑·피콜리트",
    type: "white", tier: 3, shape: "burgundy", cap: "#e2b53a", cls: "Venezia Giulia IGT", since: 1998,
    fact: "1997년 프리울리 콜리 오리엔탈리에 포도밭을 산 바스티아니치 가문의 대표 화이트. 포도밭을 맴도는 말벌(베스파)에서 이름을 땄다.",
    quiz: [
      { q: "바스티아니치를 이끄는 조 바스티아니치가 심사위원으로 이름을 알린 TV 프로그램은?", a: "마스터셰프", x: ["헬스 키친", "톱 셰프", "아이언 셰프"] },
    ],
  }),

  // ───────── 이탈리아 · 아브루초 · 에밀리아 로마냐
  mk({
    id: "ib2_edizione", name: "파르네세 에디치오네 친퀘 아우토크토니", original: "Edizione Cinque Autoctoni", labelName: "Edizione", maker: "Farnese",
    producer: "파르네세", country: IT, area: "아브루초", grape: "몬테풀치아노·프리미티보·산지오베제",
    type: "red", tier: 1, shape: "bordeauxHeavy", cap: "#1b1410", nv: true,
    fact: "아브루초와 풀리아 두 지역의 토착 품종 다섯 가지를 섞어 빚는다. 빈티지 대신 몇 번째 출시인지를 뜻하는 번호를 붙인다.",
    quiz: [
      { q: "에디치오네 친퀘 아우토크토니의 '친퀘 아우토크토니'는 무슨 뜻인가?", a: "다섯 가지 토착 품종", x: ["다섯 해 숙성", "다섯 개 마을", "다섯 번째 판"] },
    ],
  }),
  mk({
    id: "ib2_tralcetto", name: "차카니니 트랄체토 몬테풀치아노 다브루초", original: "Tralcetto", maker: "Cantina Zaccagnini",
    producer: "칸티나 차카니니", country: IT, area: "아브루초", grape: "몬테풀치아노",
    type: "red", tier: 1, shape: "bordeaux", cap: "#8e1520", cls: "Montepulciano d'Abruzzo DOC", since: 1978,
    fact: "1978년 빈티지로 처음 나온 차카니니의 대표 레드. 가지치기 때 잘라 낸 포도 덩굴을 병목에 하나하나 손으로 매단다.",
    quiz: [
      { q: "트랄체토 병목에 손으로 매다는 것은?", a: "포도나무 덩굴 가지", x: ["올리브 가지", "작은 코르크 인형", "밀 이삭"] },
    ],
  }),
  mk({
    id: "ib2_cvetic", name: "마시아렐리 마리나 츠베티치 몬테풀치아노 다브루초 리제르바", original: "Marina Cvetić Montepulciano d'Abruzzo Riserva", labelName: "Marina Cvetić", maker: "Masciarelli",
    producer: "마시아렐리", country: IT, area: "아브루초", grape: "몬테풀치아노",
    type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Montepulciano d'Abruzzo DOC Riserva",
    fact: "아브루초 와인을 세계에 알린 잔니 마시아렐리가 만든 고급 라인. 2008년 그가 세상을 떠난 뒤 가족이 뒤를 잇고 있다.",
    quiz: [
      { q: "마시아렐리의 '마리나 츠베티치' 라인은 누구의 이름을 딴 것인가?", a: "창업자 잔니 마시아렐리의 아내", x: ["창업자의 어머니", "라인을 설계한 양조가", "아브루초 전설 속 여인"] },
    ],
  }),
  mk({
    id: "ib2_riunite", name: "리우니테 람브루스코", original: "Riunite Lambrusco", labelName: "Riunite",
    producer: "칸티네 리우니테", country: IT, area: "에밀리아 로마냐", grape: "람브루스코",
    type: "sparkling", tier: 1, shape: "champagne", glass: "green", liquid: "redLight", cap: "#8e1520", nv: true, style: { layout: "italian" },
    fact: "1950년 에밀리아 재배자들이 모여 세운 협동조합의 달콤한 약발포성 레드. 1976년부터 2000년까지 미국에서 가장 많이 팔린 수입 와인이었다.",
    quiz: [
      { q: "1970~80년대 미국 광고로 유명해진 리우니테의 광고 문구는?", a: "Riunite on ice, that's nice", x: ["Pop the Italian cork", "Just a little Lambrusco", "Viva la Riunite"] },
    ],
  }),
  mk({
    id: "ib2_concerto", name: "메디치 에르메테 콘체르토", original: "Concerto", maker: "Medici Ermete",
    producer: "메디치 에르메테", country: IT, area: "에밀리아 로마냐", sub: "레조 에밀리아", grape: "람브루스코",
    type: "sparkling", tier: 2, shape: "champagne", glass: "green", liquid: "red", cap: "#5a1620", cls: "Reggiano Lambrusco DOC", since: 1993,
    style: { layout: "italian" },
    fact: "레조 에밀리아의 라 람파타 밭에서 유기농으로 기른 람브루스코 살라미노로 빚는 드라이 스파클링 레드.",
    quiz: [
      { q: "1993년 빈티지로 첫선을 보인 콘체르토가 람브루스코 역사에서 처음 이룬 일은?", a: "한 밭 포도로만 빚은 빈티지 람브루스코", x: ["병 속 2차 발효로 만든 첫 람브루스코", "처음 수출된 람브루스코", "처음 DOC를 받은 람브루스코"] },
    ],
  }),

  // ───────── 이탈리아 · 캄파니아 · 바실리카타 · 풀리아
  mk({
    id: "ib2_loggiaserra", name: "테레도라 그레코 디 투포 로자 델라 세라", original: "Loggia della Serra", maker: "Terredora di Paolo",
    producer: "테레도라", country: IT, area: "캄파니아", sub: "그레코 디 투포", grape: "그레코",
    type: "white", tier: 3, shape: "burgundy", cap: "#d8c9a0", cls: "Greco di Tufo DOCG",
    fact: "이르피니아의 테레도라가 그레코로 빚는 화이트. 와이너리 이름은 창업자 발터의 아내 도라 디 파올로에게서 따왔다.",
    quiz: [
      { q: "1994년 발터 마스트로베라르디노가 테레도라를 세우게 된 계기는?", a: "형 안토니오와 가문의 와이너리를 나눠 가졌다", x: ["폼페이 유적 발굴에 참여했다", "타우라지 협동조합에서 독립했다", "미국 투자자에게 회사를 팔았다"] },
    ],
  }),
  mk({
    id: "ib2_falerno", name: "빌라 마틸데 팔레르노 델 마시코 로소", original: "Falerno del Massico Rosso", maker: "Villa Matilde Avallone",
    producer: "빌라 마틸데", country: IT, area: "캄파니아", sub: "팔레르노 델 마시코", grape: "아글리아니코·피에디로소",
    type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: "Falerno del Massico DOC",
    fact: "플리니우스와 호라티우스가 찬양한 고대 로마의 명주 팔레르눔을 되살리려는 연구에서 태어났다. 1960년대 변호사 아발로네가 시작했다.",
    quiz: [
      { q: "와이너리 이름 '빌라 마틸데'의 마틸데는 누구인가?", a: "창업자 프란체스코 파올로 아발로네의 아내", x: ["고대 로마의 여신", "영지를 판 귀족 부인", "창업자의 맏딸"] },
    ],
  }),
  mk({
    id: "ib2_montevetrano", name: "몬테베트라노", original: "Montevetrano",
    producer: "몬테베트라노", country: IT, area: "캄파니아", sub: "살레르노", grape: "카베르네 소비뇽·메를로·아글리아니코",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Colli di Salerno IGT", since: 1991,
    fact: "사진가였던 실비아 임파라토가 살레르노 근처 가족 영지에서 1991년부터 빚기 시작한 레드. 리카르도 코타렐라가 양조를 도왔다.",
    quiz: [
      { q: "로버트 파커가 몬테베트라노를 두고 붙인 별명은?", a: "남부의 사시카이아", x: ["캄파니아의 페트뤼스", "나폴리의 오르넬라이아", "지중해의 라투르"] },
    ],
  }),
  mk({
    id: "ib2_lafirma", name: "칸티네 델 노타이오 라 피르마", original: "La Firma", maker: "Cantine del Notaio",
    producer: "칸티네 델 노타이오", country: IT, area: "바실리카타", sub: "불투레", grape: "아글리아니코",
    type: "red", tier: 3, shape: "bordeaux", cap: "#3a0f14", cls: "Aglianico del Vulture DOC",
    fact: "불투레 화산 토양의 아글리아니코로 빚는 레드. 1998년 게라르도 주라트라보케티가 이 와이너리를 세웠다.",
    quiz: [
      { q: "칸티네 델 노타이오의 와인 이름(서명·인장·등기부 등)은 무엇에서 따왔나?", a: "공증인이던 창업자 아버지의 직업 용어", x: ["중세 수도원 기록", "베르디 오페라의 제목", "고대 그리스 신화"] },
    ],
  }),
  mk({
    id: "ib2_sessantanni", name: "산 마르차노 세산타니 프리미티보 디 만두리아", original: "Sessantanni", maker: "Cantine San Marzano",
    producer: "칸티네 산 마르차노", country: IT, area: "풀리아", sub: "만두리아", grape: "프리미티보",
    type: "red", tier: 1, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Primitivo di Manduria DOP",
    fact: "1962년 재배자 19명이 뜻을 모아 세운 칸티네 산 마르차노의 대표 레드. 키 낮은 부시 형태로 키운 늙은 프리미티보로 빚는다.",
    quiz: [
      { q: "'세산타니(Sessantanni)'라는 이름의 뜻은?", a: "수령 60년이 넘은 포도나무", x: ["60개월 오크 숙성", "창립 60주년", "60개 농가의 포도"] },
    ],
  }),
  mk({
    id: "ib2_fiveroses", name: "레오네 데 카스트리스 파이브 로지스", original: "Five Roses", maker: "Leone de Castris",
    producer: "레오네 데 카스트리스", country: IT, area: "풀리아", sub: "살렌토", grape: "네그로아마로·말바지아 네라",
    type: "rose", tier: 2, shape: "bordeaux", cap: "#b8562a", cls: "Salento Rosato IGT", since: 1943,
    fact: "1943년 이탈리아에서 처음 병에 담아 판 로제 와인. 네그로아마로 90%에 말바지아 네라를 섞는다.",
    quiz: [
      { q: "파이브 로지스 탄생의 계기가 된, 로제 와인을 대량 주문한 인물은?", a: "연합군 보급 담당 미군 장군 찰스 폴레티", x: ["교황 비오 12세", "영국 총리 윈스턴 처칠", "국왕 비토리오 에마누엘레 3세"] },
    ],
  }),

  // ───────── 이탈리아 · 시칠리아 · 사르데냐
  mk({
    id: "ib2_pithos", name: "COS 피토스 로소", original: "Pithos Rosso", maker: "COS",
    producer: "COS", country: IT, area: "시칠리아", sub: "비토리아", grape: "네로 다볼라·프라파토",
    type: "red", tier: 3, shape: "burgundy", cap: "#b8562a",
    fact: "1980년 비토리아의 세 친구가 세운 COS가 흙항아리(암포라)에서 빚는 레드. '피토스'는 그리스어로 항아리를 뜻한다.",
    quiz: [
      { q: "와이너리 이름 COS는 무엇에서 왔나?", a: "세 창업자 칠리아·오키핀티·스트라노의 성 머리글자", x: ["라틴어 '시칠리아 최고의 셀러'의 약자", "근처 마을 코미소의 옛 이름", "첫 와인의 이름"] },
    ],
  }),
  mk({
    id: "ib2_sp68", name: "아리안나 오키핀티 SP68 로소", original: "SP68 Rosso", maker: "Arianna Occhipinti",
    producer: "아리안나 오키핀티", country: IT, area: "시칠리아", sub: "비토리아", grape: "프라파토·네로 다볼라",
    type: "red", tier: 3, shape: "burgundy", cap: "#8e1520", cls: "Terre Siciliane IGT",
    fact: "COS 공동 창업자 주스토 오키핀티의 조카 아리안나가 비토리아에서 빚는 가볍고 싱그러운 레드.",
    quiz: [
      { q: "'SP68'이라는 이름은 무엇을 가리키나?", a: "포도밭 옆을 지나는 68번 지방도로", x: ["68번 포도밭 구획", "1968년에 심은 포도나무", "68일 동안의 침용"] },
    ],
  }),
  mk({
    id: "ib2_magma", name: "프랑크 코르넬리센 마그마", original: "Magma", maker: "Frank Cornelissen",
    producer: "프랑크 코르넬리센", country: IT, area: "시칠리아", sub: "에트나", grape: "네렐로 마스칼레제",
    type: "red", tier: 3, shape: "burgundy", cap: "#1b1410",
    fact: "에트나 북쪽 솔리키아타에서 2001년부터 자연주의 방식으로 빚는 컬트 와인. 한 해 1500병 안팎만 나온다.",
    quiz: [
      { q: "에트나에서 마그마를 빚는 프랑크 코르넬리센의 고국은?", a: "벨기에", x: ["네덜란드", "독일", "덴마크"] },
    ],
  }),
  mk({
    id: "ib2_calderara", name: "테누타 델레 테레 네레 칼데라라 소타나", original: "Calderara Sottana", maker: "Tenuta delle Terre Nere",
    producer: "테누타 델레 테레 네레", country: IT, area: "시칠리아", sub: "에트나", grape: "네렐로 마스칼레제",
    type: "red", tier: 3, shape: "burgundy", cap: "#1b1410", cls: "Etna Rosso DOC",
    fact: "와인 수입상 마르코 데 그라치아가 에트나 북쪽 비탈에 세운 와이너리의 대표 싱글 콘트라다(밭) 와인.",
    quiz: [
      { q: "테누타 델레 테레 네레의 '테레 네레'는 무슨 뜻인가?", a: "검은 땅", x: ["붉은 언덕", "불의 산", "새 포도밭"] },
    ],
  }),
  mk({
    id: "ib2_ducaenrico", name: "두카 디 살라파루타 두카 엔리코", original: "Duca Enrico", maker: "Duca di Salaparuta",
    producer: "두카 디 살라파루타", country: IT, area: "시칠리아", grape: "네로 다볼라",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Terre Siciliane IGT", since: 1984,
    fact: "시칠리아에서 네로 다볼라만으로 빚은 첫 고급 레드로 꼽힌다. 부테라의 수오르 마르케자 영지 포도를 쓴다.",
    quiz: [
      { q: "두카 엔리코가 처음 만들어진 해는?", a: "1984년", x: ["1824년", "1954년", "2004년"] },
    ],
  }),
  mk({
    id: "ib2_milleunanotte", name: "돈나푸가타 밀레 에 우나 노테", original: "Mille e una Notte", maker: "Donnafugata",
    producer: "돈나푸가타", country: IT, area: "시칠리아", grape: "네로 다볼라",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1f3a5f", cls: "Sicilia DOC", since: 1995,
    fact: "돈나푸가타가 1995년 빈티지로 선보인 대표 레드. 네로 다볼라를 중심으로 빚어 오래 숙성할 수 있다.",
    quiz: [
      { q: "'밀레 에 우나 노테(Mille e una Notte)'는 무슨 뜻인가?", a: "천하룻밤(천일야화)", x: ["천 개의 별", "첫날밤", "천 년의 포도나무"] },
    ],
  }),
  mk({
    id: "ib2_tancredi", name: "돈나푸가타 탄크레디", original: "Tancredi", maker: "Donnafugata",
    producer: "돈나푸가타", country: IT, area: "시칠리아", grape: "네로 다볼라·카베르네 소비뇽",
    type: "red", tier: 2, shape: "bordeaux", cap: "#7a1522", cls: "Terre Siciliane IGT", since: 1990,
    fact: "1990년 토착 품종 네로 다볼라에 카베르네 소비뇽을 섞어 선보인 돈나푸가타의 레드.",
    quiz: [
      { q: "탄크레디라는 이름은 어느 작품 속 인물에서 따왔나?", a: "람페두사의 소설 《표범(일 가토파르도)》", x: ["로시니의 오페라 《탄크레디》", "보카치오의 《데카메론》", "단테의 《신곡》"] },
    ],
  }),
  mk({
    id: "ib2_sellamosca", name: "셀라 앤 모스카 칸노나우 리제르바", original: "Cannonau di Sardegna Riserva", labelName: "Cannonau Riserva", maker: "Sella & Mosca",
    producer: "셀라 앤 모스카", country: IT, area: "사르데냐", sub: "알게로", grape: "칸노나우",
    type: "red", tier: 2, shape: "bordeaux", cap: "#8e1520", cls: "Cannonau di Sardegna DOC Riserva",
    fact: "알게로 근처에 유럽에서 손꼽히게 넓은 한 덩어리 포도원을 일군 와이너리. 처음에는 필록세라에 강한 대목을 기르는 묘목장이었다.",
    quiz: [
      { q: "1899년 셀라 앤 모스카를 세운 기술자 에르미니오 셀라와 변호사 에드가르도 모스카의 고향은?", a: "피에몬테", x: ["사르데냐", "토스카나", "시칠리아"] },
    ],
  }),
  mk({
    id: "ib2_terrebrune", name: "산타디 테레 브루네", original: "Terre Brune", maker: "Cantina di Santadi",
    producer: "칸티나 디 산타디", country: IT, area: "사르데냐", sub: "술치스", grape: "카리냐노",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#3a0f14", cls: "Carignano del Sulcis DOC Superiore", since: 1984,
    fact: "1984년 빈티지로 첫선을 보인 사르데냐 최초의 바리크 숙성 레드. '슈퍼 투스칸의 아버지' 자코모 타키스가 함께 빚었다.",
    quiz: [
      { q: "'테레 브루네(Terre Brune)'는 무슨 뜻인가?", a: "갈색 땅", x: ["검은 바다", "바람의 언덕", "오래된 포도나무"] },
    ],
  }),
  mk({
    id: "ib2_barrua", name: "아그리콜라 푸니카 바루아", original: "Barrua", maker: "Agricola Punica",
    producer: "아그리콜라 푸니카", country: IT, area: "사르데냐", grape: "카리냐노·카베르네 소비뇽·메를로",
    type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Isola dei Nuraghi IGT",
    fact: "2002년 사르데냐 남서부 술치스에 세운 아그리콜라 푸니카의 대표 레드. 카리냐노에 보르도 품종을 섞는다.",
    quiz: [
      { q: "칸티나 디 산타디와 손잡고 아그리콜라 푸니카를 세운 토스카나의 와이너리는?", a: "테누타 산 귀도(사시카이아)", x: ["안티노리", "오르넬라이아", "비온디 산티"] },
    ],
  }),

  // ───────── 스페인 · 리오하
  mk({
    id: "ib2_beronia", name: "베로니아 레세르바", original: "Beronia Reserva",
    producer: "보데가스 베로니아", country: ES, area: "리오하", grape: "템프라니요",
    type: "red", tier: 1, shape: "bordeaux", cap: "#7a1522", cls: "Rioja DOCa Reserva",
    fact: "1973년 바스크 지방 미식 모임 '초코(txoko)'의 친구들이 리오하의 올라우리에 세운 보데가의 대표 레세르바.",
    quiz: [
      { q: "1982년 베로니아를 인수한 셰리 명가는?", a: "곤살레스 비아스", x: ["오스본", "루스타우", "하비스"] },
    ],
  }),
  mk({
    id: "ib2_ramonbilbao", name: "라몬 빌바오 크리안사", original: "Ramón Bilbao Crianza",
    producer: "보데가스 라몬 빌바오", country: ES, area: "리오하", sub: "아로", grape: "템프라니요",
    type: "red", tier: 1, shape: "bordeaux", cap: "#1b1410", cls: "Rioja DOCa Crianza",
    fact: "1924년 아로에서 라몬 빌바오 무르가가 문을 연 보데가의 대표 크리안사. 템프라니요로 빚는다.",
    quiz: [
      { q: "1999년 라몬 빌바오를 인수한 사모라 가문의 대표 상품은?", a: "리큐어 '리코르 43'", x: ["맥주 '마오우'", "셰리 '티오 페페'", "브랜디 '카를로스 1세'"] },
    ],
  }),
  mk({
    id: "ib2_ardanza", name: "라 리오하 알타 비냐 아르단사 레세르바", original: "Viña Ardanza", maker: "La Rioja Alta",
    producer: "라 리오하 알타", country: ES, area: "리오하", sub: "아로", grape: "템프라니요·가르나차",
    type: "red", tier: 2, shape: "bordeaux", cap: "#c9a24e", cls: "Rioja DOCa Reserva",
    fact: "템프라니요와 가르나차를 따로 오래 통 숙성한 뒤 섞어 빚는 클래식 레세르바. 1942년 상표로 등록됐다.",
    quiz: [
      { q: "비냐 아르단사라는 이름은 누구에게서 따왔나?", a: "라 리오하 알타 창립 동업자 알프레도 아르단사", x: ["아로 기차역을 지은 기술자", "리오하의 수호성인", "첫 양조 책임자의 아내"] },
    ],
  }),
  mk({
    id: "ib2_ysios", name: "이시오스", original: "Ysios",
    producer: "보데가스 이시오스", country: ES, area: "리오하", sub: "라과르디아", grape: "템프라니요",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Rioja DOCa",
    fact: "라과르디아 들판에 물결치는 지붕을 얹은 양조장으로 유명한 보데가. 2001년 문을 열었고 지금은 페르노리카 그룹에 속한다.",
    quiz: [
      { q: "이시오스의 물결 모양 양조장을 설계한 건축가는?", a: "산티아고 칼라트라바", x: ["프랭크 게리", "자하 하디드", "리처드 로저스"] },
      { q: "'이시오스(Ysios)'라는 이름은 누구에게 바치는 것인가?", a: "이집트 신 이시스와 오시리스", x: ["그리스 술의 신 디오니소스", "로마 농업의 여신 케레스", "바스크 전설의 여신 마리"] },
    ],
  }),
  mk({
    id: "ib2_monopole", name: "쿠네 모노폴 클라시코", original: "Monopole Clásico", maker: "CVNE",
    producer: "쿠네(CVNE)", country: ES, area: "리오하", sub: "아로", grape: "비우라",
    type: "white", tier: 3, shape: "bordeaux", glass: "flint", cap: "#d8c9a0", cls: "Rioja DOCa",
    fact: "1915년 이름을 등록해 스페인에서 가장 오래된 화이트 와인 상표로 꼽히는 모노폴을 옛 방식대로 되살린 와인.",
    quiz: [
      { q: "모노폴 클라시코가 1960년대 방식을 따라 조금 섞는 것은?", a: "만사니야 셰리", x: ["페드로 히메네스 스위트 와인", "포도 브랜디", "레드 와인"] },
    ],
  }),

  // ───────── 스페인 · 카스티야 이 레온 · 무르시아
  mk({
    id: "ib2_carraovejas", name: "파고 데 카라오베하스", original: "Pago de Carraovejas",
    producer: "파고 데 카라오베하스", country: ES, area: "카스티야 이 레온", sub: "리베라 델 두에로", grape: "템프라니요·카베르네 소비뇽·메를로",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#5a1620", cls: "Ribera del Duero DO",
    fact: "1987년 세고비아의 식당 주인 호세 마리아 루이스가 뜻을 모아 페냐피엘에 세운 와이너리. 1991년 첫 수확을 했다.",
    quiz: [
      { q: "호세 마리아 루이스가 파고 데 카라오베하스를 세운 것은 어떤 요리에 어울릴 와인을 원해서였나?", a: "세고비아식 새끼 돼지 통구이(코치니요)", x: ["발렌시아 파에야", "가스파초", "갈리시아식 문어 요리"] },
    ],
  }),
  mk({
    id: "ib2_monasterio", name: "아시엔다 모나스테리오", original: "Hacienda Monasterio",
    producer: "아시엔다 모나스테리오", country: ES, area: "카스티야 이 레온", sub: "리베라 델 두에로", grape: "템프라니요·카베르네 소비뇽·메를로",
    type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Ribera del Duero DO",
    fact: "리베라 델 두에로의 영지에서 템프라니요에 카베르네 소비뇽과 메를로를 섞어 빚는 레드.",
    quiz: [
      { q: "1990년 아시엔다 모나스테리오를 맡으러 스페인에 왔다가 훗날 핑구스를 만든 양조가는?", a: "피터 시섹", x: ["마리아노 가르시아", "알레한드로 페르난데스", "알바로 팔라시오스"] },
    ],
  }),
  mk({
    id: "ib2_condadohaza", name: "콘다도 데 아사", original: "Condado de Haza",
    producer: "알레한드로 페르난데스", producerQ: true, country: ES, area: "카스티야 이 레온", sub: "리베라 델 두에로", grape: "템프라니요",
    type: "red", tier: 3, shape: "bordeaux", cap: "#7a1522", cls: "Ribera del Duero DO",
    fact: "리베라 델 두에로의 아사 마을 근처, 두에로강 가 영지에서 템프라니요로만 빚는 레드.",
    quiz: [
      { q: "콘다도 데 아사를 일군 양조가가 먼저 세계에 알린 와인은?", a: "틴토 페스케라", x: ["베가 시실리아 우니코", "핑구스", "에밀리오 모로"] },
    ],
  }),
  mk({
    id: "ib2_mauro", name: "보데가스 마우로", original: "Mauro", maker: "Bodegas Mauro",
    producer: "보데가스 마우로", country: ES, area: "카스티야 이 레온", grape: "템프라니요·시라",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Vino de la Tierra de Castilla y León",
    fact: "1980년 투델라 데 두에로에 세운 와이너리. 리베라 델 두에로 경계 바로 밖이라 원산지 명칭 없이 내놓는다.",
    quiz: [
      { q: "와인 이름 '마우로'는 누구에게서 따왔나?", a: "창업자 마리아노 가르시아의 아버지", x: ["창업자의 맏아들", "마을의 수호성인", "첫 포도밭 주인"] },
    ],
  }),
  mk({
    id: "ib2_retuerta", name: "아바디아 레투에르타 셀렉시온 에스페시알", original: "Selección Especial", maker: "Abadía Retuerta",
    producer: "아바디아 레투에르타", country: ES, area: "카스티야 이 레온", grape: "템프라니요·카베르네 소비뇽·시라",
    type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Vino de la Tierra de Castilla y León",
    fact: "1146년 세워진 산타 마리아 데 레투에르타 수도원 둘레 영지의 와인. 수도원은 지금 호텔 '르 도멘'으로 쓰인다.",
    quiz: [
      { q: "1988년 아바디아 레투에르타 영지를 사들인 곳은?", a: "제약 회사 산도스(지금의 노바티스)", x: ["자동차 회사 세아트", "LVMH 그룹", "스페인 왕실"] },
    ],
  }),
  mk({
    id: "ib2_pintia", name: "핀티아", original: "Pintia", maker: "Bodegas Pintia",
    producer: "베가 시실리아(보데가스 핀티아)", producerQ: true, country: ES, area: "카스티야 이 레온", sub: "토로", grape: "틴타 데 토로",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Toro DO", since: 2001,
    fact: "알리온, 토카이의 오레무스에 이어 알바레스 가문이 세 번째로 일군 와이너리. 2001년 빈티지로 처음 시장에 나왔다.",
    quiz: [
      { q: "토로의 핀티아를 세운 스페인의 전설적 와이너리는?", a: "베가 시실리아", x: ["보데가스 누만시아", "도미니오 데 핑구스", "마르케스 데 무리에타"] },
    ],
  }),
  mk({
    id: "ib2_riscalrueda", name: "마르케스 데 리스칼 루에다 베르데호", original: "Marqués de Riscal Rueda Verdejo", labelName: "Marqués de Riscal",
    producer: "마르케스 데 리스칼", country: ES, area: "카스티야 이 레온", sub: "루에다", grape: "베르데호",
    type: "white", tier: 1, shape: "bordeaux", cap: "#c9a24e", cls: "Rueda DO",
    fact: "리오하의 명가 마르케스 데 리스칼이 루에다에서 빚는 상큼한 베르데호. 셰리식 와인이 많던 이 지역에 신선한 화이트 바람을 일으켰다.",
    quiz: [
      { q: "마르케스 데 리스칼이 루에다에서 화이트 와인을 빚기 시작한 해는?", a: "1972년", x: ["1858년", "1936년", "1999년"] },
    ],
  }),
  mk({
    id: "ib2_belondrade", name: "벨론드라데 이 뤼르통", original: "Belondrade y Lurton",
    producer: "벨론드라데", country: ES, area: "카스티야 이 레온", sub: "루에다", grape: "베르데호",
    type: "white", tier: 3, shape: "burgundy", cap: "#d8c9a0", cls: "Rueda DO", since: 1994,
    fact: "프랑스 출신 디디에 벨론드라데가 1994년 빈티지부터 베르데호를 오크통에서 발효·숙성해 빚은 루에다의 선구적 화이트.",
    quiz: [
      { q: "와인 이름 속 '뤼르통(Lurton)'은 누구를 가리키나?", a: "보르도 뤼르통 가문 출신인 창업자의 아내 브리지트", x: ["포도밭을 판 스페인 귀족", "첫 양조장을 지은 건축가", "루에다 마을의 옛 이름"] },
    ],
  }),
  mk({
    id: "ib2_josepariente", name: "호세 파리엔테 베르데호", original: "José Pariente Verdejo",
    producer: "보데가스 호세 파리엔테", country: ES, area: "카스티야 이 레온", sub: "루에다", grape: "베르데호",
    type: "white", tier: 2, shape: "bordeaux", cap: "#c9a24e", cls: "Rueda DO",
    fact: "1998년 빅토리아 파리엔테가 라 세카 마을의 오래된 베르데호 나무로 빚기 시작한 루에다 화이트.",
    quiz: [
      { q: "와인 이름 '호세 파리엔테'는 누구인가?", a: "창업자 빅토리아 파리엔테의 아버지", x: ["루에다를 개척한 수도사", "창업자의 남편", "스페인의 유명 투우사"] },
    ],
  }),
  mk({
    id: "ib2_petalos", name: "페탈로스 델 비에르소", original: "Pétalos del Bierzo", maker: "Descendientes de J. Palacios",
    producer: "데센디엔테스 데 J. 팔라시오스", producerQ: true, country: ES, area: "카스티야 이 레온", sub: "비에르소", grape: "멘시아",
    type: "red", tier: 2, shape: "burgundy", cap: "#1b1410", cls: "Bierzo DO",
    fact: "알바로 팔라시오스와 조카 리카르도 페레스가 1999년 비에르소의 코룰론에 세운 와이너리의 입문 와인. 비탈의 오래된 멘시아로 빚는다.",
    quiz: [
      { q: "와이너리 이름 '데센디엔테스 데 J. 팔라시오스'의 J. 팔라시오스는 누구인가?", a: "알바로 팔라시오스의 아버지 호세 팔라시오스", x: ["비에르소의 옛 수도원장", "알바로의 형", "리오하의 유명 양조학자"] },
    ],
  }),
  mk({
    id: "ib2_elnido", name: "엘 니도", original: "El Nido", maker: "Bodegas El Nido",
    producer: "보데가스 엘 니도", country: ES, area: "무르시아", sub: "후미야", grape: "카베르네 소비뇽·모나스트렐",
    type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Jumilla DO", since: 2002,
    fact: "후안 길을 만드는 길 가문이 수입상 호르헤 오르도녜스와 함께 2002년 후미야에 세운 와이너리의 대표작.",
    quiz: [
      { q: "엘 니도의 양조를 함께 맡은 호주 출신 양조가는?", a: "크리스 링랜드", x: ["피터 시섹", "존 듀발", "브라이언 크로저"] },
    ],
  }),

  // ───────── 스페인 · 갈리시아
  mk({
    id: "ib2_fefinanes", name: "알바리뇨 데 페피냐네스", original: "Albariño de Fefiñanes", maker: "Palacio de Fefiñanes",
    producer: "팔라시오 데 페피냐네스", country: ES, area: "갈리시아", sub: "리아스 바이하스", grape: "알바리뇨",
    type: "white", tier: 3, shape: "bordeaux", glass: "flint", cap: "#d8c9a0", cls: "Rías Baixas DO",
    fact: "캄바도스의 옛 궁전 팔라시오 데 페피냐네스에 자리한 보데가의 알바리뇨. 1928년 처음 만든 라벨을 지금도 그대로 쓴다.",
    quiz: [
      { q: "팔라시오 데 페피냐네스가 1928년 처음으로 한 일은?", a: "알바리뇨를 라벨 붙인 병에 담아 판매했다", x: ["알바리뇨 포도를 처음 심었다", "스페인 최초로 스크루캡을 썼다", "알바리뇨로 스파클링을 만들었다"] },
    ],
  }),
  mk({
    id: "ib2_barrantes", name: "파소 바란테스 알바리뇨", original: "Pazo Barrantes Albariño",
    producer: "파소 바란테스", country: ES, area: "갈리시아", sub: "리아스 바이하스", grape: "알바리뇨",
    type: "white", tier: 3, shape: "burgundy", glass: "flint", cap: "#d8c9a0", cls: "Rías Baixas DO",
    fact: "살네스 계곡의 16세기 석조 저택(파소) 곁에 1991년 양조장을 지어 빚기 시작한 알바리뇨.",
    quiz: [
      { q: "파소 바란테스를 가진 세브리안사가리가 가문이 리오하에서 소유한 명가는?", a: "마르케스 데 무리에타", x: ["마르케스 데 리스칼", "라 리오하 알타", "쿠네(CVNE)"] },
    ],
  }),
  mk({
    id: "ib2_mardefrades", name: "마르 데 프라데스 알바리뇨", original: "Mar de Frades Albariño", labelName: "Mar de Frades",
    producer: "마르 데 프라데스", country: ES, area: "갈리시아", sub: "리아스 바이하스", grape: "알바리뇨",
    type: "white", tier: 1, shape: "flute", glass: "cobalt", cap: "#1f3a5f", cls: "Rías Baixas DO", style: { accent: "#1f3a5f" },
    fact: "대서양 바다를 떠올리게 하는 파란 병에 담긴 리아스 바이하스의 알바리뇨. 산뜻하고 짭짤한 맛이 특징이다.",
    quiz: [
      { q: "마르 데 프라데스 라벨에서 와인이 알맞게 차가워지면(11℃ 이하) 나타나는 그림은?", a: "파란 배", x: ["물고기", "등대", "갈매기"] },
    ],
  }),

  // ───────── 스페인 · 카탈루냐 · 아라곤 · 나바라
  mk({
    id: "ib2_vallllach", name: "발 야크", original: "Vall Llach",
    producer: "셀레르 발 야크", country: ES, area: "카탈루냐", sub: "프리오랏", grape: "카리녜나·가르나차",
    type: "red", tier: 3, shape: "burgundy", cap: "#1b1410", cls: "Priorat DOQ",
    fact: "1990년대 초 쇠락해 가던 포레라 마을을 되살리려는 뜻으로 시작한 와이너리. 오래된 카리녜나가 중심이다.",
    quiz: [
      { q: "공증인 엔리크 코스타와 함께 발 야크를 세운 인물은?", a: "카탈루냐의 가수 류이스 야크", x: ["건축가 산티아고 칼라트라바", "축구 감독 펩 과르디올라", "첼리스트 파우 카살스"] },
    ],
  }),
  mk({
    id: "ib2_scaladei", name: "스칼라 데이 프리오르", original: "Prior", maker: "Scala Dei",
    producer: "셀레르스 데 스칼라 데이", country: ES, area: "카탈루냐", sub: "프리오랏", grape: "가르나차·카리녜나",
    type: "red", tier: 3, shape: "burgundy", cap: "#7a1522", cls: "Priorat DOQ",
    fact: "1194년 이베리아반도 최초의 카르투시오회 수도원이 세워진 스칼라 데이 마을의 와이너리. 수도사들이 이 땅에 포도를 가꿨다.",
    quiz: [
      { q: "'프리오랏'이라는 지명은 어디에서 왔나?", a: "스칼라 데이 수도원의 수도원장(프리오르)", x: ["로마 시대 장군 프리오르", "근처 강의 이름", "카탈루냐 말로 '붉은 땅'"] },
      { q: "전설에 따르면 수도사들이 이곳에 수도원을 세우게 된 계기는?", a: "양치기가 천사들이 하늘로 오르는 사다리를 보았다는 이야기", x: ["땅속에서 성모상이 발견됐다", "샘에서 포도주가 솟았다", "별똥별이 떨어졌다"] },
    ],
  }),
  mk({
    id: "ib2_capcanes", name: "캅사네스 페라흐 하아비브", original: "Peraj Ha'abib", labelName: "Flor de Primavera", maker: "Celler de Capçanes",
    producer: "셀레르 데 캅사네스", country: ES, area: "카탈루냐", sub: "몬산트", grape: "카베르네 소비뇽·카리녜나·가르나차",
    type: "red", tier: 3, shape: "bordeaux", cap: "#1f3a5f", cls: "Montsant DO",
    fact: "1933년 협동조합으로 시작한 캅사네스가 빚는 코셔 와인. 히브리어 이름은 '봄꽃(플로르 데 프리마베라)'이라는 뜻이다.",
    quiz: [
      { q: "1995년 캅사네스에 코셔 와인을 만들어 달라고 요청한 곳은?", a: "바르셀로나 유대인 공동체", x: ["이스라엘 대사관", "뉴욕의 코셔 식당 체인", "몬세라트 수도원"] },
    ],
  }),
  mk({
    id: "ib2_jeanleon", name: "진 레온 비냐 라 스칼라 카베르네 소비뇽", original: "Vinya La Scala", maker: "Jean Leon",
    producer: "진 레온", country: ES, area: "카탈루냐", sub: "페네데스", grape: "카베르네 소비뇽",
    type: "red", tier: 3, shape: "bordeaux", cap: "#1b1410", cls: "Penedès DO Gran Reserva",
    fact: "베벌리힐스에서 식당을 성공시킨 스페인 출신 진 레온이 1963년 페네데스에 포도밭을 일궈 빚은 카베르네 소비뇽. 첫 빈티지는 1969년이다.",
    quiz: [
      { q: "진 레온이 1969년 첫 빈티지를 모두 보낸 곳은?", a: "베벌리힐스에 있던 자신의 식당 '라 스칼라'", x: ["마드리드 왕궁", "바르셀로나 리세우 극장", "뉴욕의 월도프 아스토리아 호텔"] },
    ],
  }),
  mk({
    id: "ib2_milmanda", name: "토레스 밀만다", original: "Milmanda", maker: "Torres",
    producer: "토레스", country: ES, area: "카탈루냐", sub: "콘카 데 바르베라", grape: "샤르도네",
    type: "white", tier: 2, shape: "burgundy", cap: "#d8c9a0", cls: "Conca de Barberà DO",
    fact: "1980년대 중반 처음 나온 토레스의 샤르도네. 부르고뉴에서 건너온 시토회 수도사들에게 바치는 와인이다.",
    quiz: [
      { q: "밀만다라는 이름은 무엇에서 왔나?", a: "1174년 포블레트 수도원 소유가 된 밀만다 성", x: ["토레스 가문의 첫 포도밭 주인", "근처 강의 이름", "카탈루냐의 옛 성인 이름"] },
    ],
  }),
  mk({
    id: "ib2_gransmuralles", name: "토레스 그란스 무라예스", original: "Grans Muralles", maker: "Torres",
    producer: "토레스", country: ES, area: "카탈루냐", sub: "콘카 데 바르베라", grape: "가르나차·카리녜나·모나스트렐",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Conca de Barberà DO", since: 1996,
    fact: "1996년 첫선을 보인 토레스의 최상급 레드. 거의 사라졌던 카탈루냐 토착 품종 가로와 케롤을 되살려 섞는다.",
    quiz: [
      { q: "'그란스 무라예스'는 무엇을 가리키나?", a: "포블레트 수도원을 지키던 큰 성벽", x: ["바르셀로나 항구의 방파제", "피레네산맥의 절벽", "토레스 셀러의 돌담"] },
    ],
  }),
  mk({
    id: "ib2_vinasol", name: "토레스 비냐 솔", original: "Viña Sol", maker: "Torres",
    producer: "토레스", country: ES, area: "카탈루냐", grape: "파레야다",
    type: "white", tier: 1, shape: "bordeaux", cap: "#e2b53a", cls: "Catalunya DO",
    fact: "양조 공부를 막 마친 미겔 토레스가 1962년 파레야다를 낮은 온도에서 발효해 탄생시킨 상큼한 화이트.",
    quiz: [
      { q: "비냐 솔이 처음 만들어진 해는?", a: "1962년", x: ["1870년", "1936년", "1992년"] },
    ],
  }),
  mk({
    id: "ib2_esmeralda", name: "토레스 비냐 에스메랄다", original: "Viña Esmeralda", maker: "Torres",
    producer: "토레스", country: ES, area: "카탈루냐", grape: "모스카텔·게뷔르츠트라미너",
    type: "white", tier: 1, shape: "flute", cap: "#23676a", cls: "Catalunya DO",
    fact: "모스카텔과 게뷔르츠트라미너를 섞어 꽃향기가 화사한 토레스의 화이트. 가볍고 향긋해 입문용으로 사랑받는다.",
    quiz: [
      { q: "'에스메랄다(에메랄드)'라는 이름은 무엇의 빛깔에서 왔나?", a: "지중해 바다", x: ["포도 껍질", "병 유리", "포도밭의 이끼"] },
    ],
  }),
  mk({
    id: "ib2_denit", name: "라벤토스 이 블랑 데 니트", original: "de Nit", maker: "Raventós i Blanc",
    producer: "라벤토스 이 블랑", country: ES, area: "카탈루냐", sub: "콘카 델 리우 아노이아", grape: "샤렐로·마카베오·모나스트렐",
    type: "sparkling", tier: 3, shape: "champagne", liquid: "rosePale", cap: "#1b1410", cls: "Conca del Riu Anoia", style: { layout: "iberian" },
    fact: "1497년부터 산트 사두르니 다노이아에서 포도를 가꿔 온 가문의 로제 스파클링. '데 니트'는 카탈루냐어로 '밤의'라는 뜻이다.",
    quiz: [
      { q: "라벤토스 이 블랑이 2012년 내린 결단은?", a: "카바 원산지 명칭을 떠나 '콘카 델 리우 아노이아'를 새로 만들었다", x: ["샴페인 하우스에 회사를 팔았다", "모든 와인을 무알코올로 바꿨다", "프리오랏으로 양조장을 옮겼다"] },
    ],
  }),
  mk({
    id: "ib2_turodenmota", name: "레카레도 투로 덴 모타", original: "Turó d'en Mota", maker: "Recaredo",
    producer: "레카레도", country: ES, area: "카탈루냐", sub: "코르핀나트", grape: "샤렐로",
    type: "sparkling", tier: 3, shape: "champagne", cap: "#1b1410", cls: "Corpinnat Brut Nature", style: { layout: "iberian" },
    fact: "1940년에 심은 1헥타르가 안 되는 샤렐로 밭 한 곳의 포도로 빚어 효모 앙금 위에서 10년 넘게 숙성하는 스파클링.",
    quiz: [
      { q: "레카레도가 모든 스파클링을 만드는 방식의 특징은?", a: "당분을 더하지 않는 브뤼 나튀르로만 만든다", x: ["큰 탱크에서 2차 발효한다", "로제만 만든다", "빈티지 없이 여러 해를 섞는다"] },
    ],
  }),
  mk({
    id: "ib2_heredad", name: "세구라 비우다스 레세르바 에레다드", original: "Reserva Heredad", maker: "Segura Viudas",
    producer: "세구라 비우다스", country: ES, area: "카탈루냐", sub: "페네데스", grape: "마카베오·파레야다",
    type: "sparkling", tier: 1, shape: "champagne", cap: "#c9a24e", cls: "Cava Brut Reserva", nv: true, style: { layout: "iberian", foil: "silver" },
    fact: "원래 세구라 비우다스 가문과 친구들을 위해 만들던 카바. 손으로 분 병에 가문 문장을 붙였다.",
    quiz: [
      { q: "에레다드 병의 가장 큰 특징은?", a: "주석 받침대와 금속 문장을 단 병", x: ["밀짚으로 감싼 병", "새까만 무광 병", "도자기 병"] },
    ],
  }),
  mk({
    id: "ib2_enate", name: "에나테 샤르도네 바리카", original: "Enate Chardonnay Fermentado en Barrica", labelName: "Enate",
    producer: "보데가스 에나테", country: ES, area: "아라곤", sub: "소몬타노", grape: "샤르도네",
    type: "white", tier: 2, shape: "burgundy", cap: "#d8c9a0", cls: "Somontano DO", style: { layout: "art" },
    fact: "피레네산맥 남쪽 소몬타노의 에나테가 오크통에서 발효한 샤르도네. 에나테는 와인마다 화가의 작품을 라벨에 쓴다.",
    quiz: [
      { q: "에나테 샤르도네 바리카 라벨에 처음 작품이 실린 스페인 화가는?", a: "안토니오 사우라", x: ["살바도르 달리", "호안 미로", "파블로 피카소"] },
    ],
  }),
  mk({
    id: "ib2_trespicos", name: "보르사오 트레스 피코스", original: "Tres Picos", maker: "Bodegas Borsao",
    producer: "보데가스 보르사오", country: ES, area: "아라곤", sub: "캄포 데 보르하", grape: "가르나차",
    type: "red", tier: 1, shape: "burgundy", cap: "#1b1410", cls: "Campo de Borja DO",
    fact: "몬카요산 비탈 해발 600~700m에서 자란 오래된 가르나차로 빚는 진하고 부드러운 레드.",
    quiz: [
      { q: "'트레스 피코스(세 봉우리)'가 가리키는 산은?", a: "몬카요 산괴", x: ["몬세라트", "시에라 네바다", "몬산트"] },
    ],
  }),
  mk({
    id: "ib2_chivite125", name: "치비테 콜렉시온 125 블랑코", original: "Colección 125 Blanco", maker: "Chivite",
    producer: "치비테", country: ES, area: "나바라", grape: "샤르도네",
    type: "white", tier: 3, shape: "burgundy", cap: "#c9a24e", cls: "Navarra DO",
    fact: "11대째 이어 온 나바라의 치비테 가문이 샤르도네로 빚는 최상급 화이트. '125'는 가문의 첫 해외 수출 125주년을 기념한다.",
    quiz: [
      { q: "치비테 가문이 포도밭과 셀러를 가졌다는 기록이 남은 가장 오래된 문서의 연도는?", a: "1647년", x: ["1492년", "1789년", "1901년"] },
    ],
  }),

  // ───────── 스페인 · 안달루시아 (셰리)
  mk({
    id: "ib2_lagitana", name: "이달고 라 히타나 만사니야", original: "La Gitana Manzanilla", labelName: "La Gitana", maker: "Hidalgo",
    producer: "이달고", country: ES, area: "안달루시아", sub: "산루카르 데 바라메다", grape: "팔로미노",
    type: "fortified", tier: 2, shape: "sherry", liquid: "fino", cap: "#d8c9a0", nv: true,
    fact: "1792년 산루카르 데 바라메다에 세워진 이달고의 대표 만사니야. 라벨에 집시 여인의 초상이 그려져 있다.",
    quiz: [
      { q: "'라 히타나(집시 여인)'라는 이름이 붙은 사연은?", a: "말라가에서 이 와인을 팔던 집시 여인의 술집이 유명했다", x: ["창업자의 아내가 집시 출신이었다", "플라멩코 무용수가 광고 모델이었다", "셀러에 집시 가족이 살았다"] },
    ],
  }),
  mk({
    id: "ib2_solear", name: "바르바디요 솔레아르 만사니야", original: "Solear", maker: "Barbadillo",
    producer: "바르바디요", country: ES, area: "안달루시아", sub: "산루카르 데 바라메다", grape: "팔로미노",
    type: "fortified", tier: 2, shape: "sherry", liquid: "fino", cap: "#c9a24e", nv: true,
    fact: "1821년 산루카르 데 바라메다에 세워진 바르바디요의 대표 만사니야. 바르바디요는 만사니야를 가장 많이 만드는 집이다.",
    quiz: [
      { q: "바르바디요가 1975년 내놓아 스페인에서 가장 많이 팔리는 화이트가 된 와인은?", a: "카스티요 데 산 디에고", x: ["비냐 솔", "마르틴 코닥스", "모노폴"] },
    ],
  }),
  mk({
    id: "ib2_drysack", name: "드라이 색", original: "Dry Sack", maker: "Williams & Humbert",
    producer: "윌리엄스 앤 험버트", producerQ: true, country: ES, area: "안달루시아", sub: "헤레스", grape: "팔로미노·페드로 히메네스",
    type: "fortified", tier: 1, shape: "sherry", liquid: "amber", cap: "#8e1520", nv: true,
    fact: "1906년 처음 나온 윌리엄스 앤 험버트의 미디엄 셰리. 드라이한 셰리에 달콤한 페드로 히메네스를 섞는다.",
    quiz: [
      { q: "드라이 색 병을 감싸는 상징적인 포장은?", a: "삼베 자루", x: ["밀짚 바구니", "가죽 끈", "금속 철망"] },
    ],
  }),

  // ───────── 포르투갈 · 도루 (테이블 와인)
  mk({
    id: "ib2_fabelhaft", name: "니포트 파벨하프트 틴투", original: "Fabelhaft", maker: "Niepoort",
    producer: "니포트", country: PT, area: "도루", grape: "투리가 프랑카·틴타 호리스",
    type: "red", tier: 2, shape: "bordeaux", cap: "#1b1410", cls: "Douro DOC", since: 2002,
    fact: "니포트가 2002년 빈티지로 처음 빚은 도루 레드. 독일어로 '멋진'과 '우화 같은'을 함께 떠올리게 하는 이름이다.",
    quiz: [
      { q: "파벨하프트 라벨에 이어지는 12컷 그림은 누구의 이야기인가?", a: "빌헬름 부슈의 까마귀 한스 후케바인", x: ["그림 형제의 브레멘 음악대", "이솝의 여우와 포도", "안데르센의 미운 오리 새끼"] },
    ],
  }),
  mk({
    id: "ib2_batuta", name: "니포트 바투타", original: "Batuta", maker: "Niepoort",
    producer: "니포트", country: PT, area: "도루", grape: "투리가 프랑카·틴타 호리스",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1410", cls: "Douro DOC", since: 1999,
    fact: "디르크 니포트가 도루의 오래된 밭 포도로 빚는 최상급 레드. 1999년 빈티지로 첫선을 보였다.",
    quiz: [
      { q: "'바투타(Batuta)'는 무엇을 뜻하나?", a: "오케스트라 지휘봉", x: ["포도 밟는 발", "작은 나무통", "뱃사공의 노"] },
    ],
  }),
  mk({
    id: "ib2_vallado", name: "킨타 두 발라두 헤제르바 필드 블렌드", original: "Quinta do Vallado Reserva Field Blend", labelName: "Quinta do Vallado",
    producer: "킨타 두 발라두", country: PT, area: "도루", grape: "투리가 프랑카·틴타 호리스·투리가 나시오날",
    type: "red", tier: 3, shape: "bordeaux", cap: "#1b1410", cls: "Douro DOC",
    fact: "1716년 세워진 도루의 포도원으로, 한때 도나 안토니아 페헤이라의 소유였고 지금도 그 후손이 이끈다.",
    quiz: [
      { q: "킨타 두 발라두가 크라스투·발레 메앙·니포트 등과 함께 결성한 도루 생산자 모임은?", a: "도루 보이스", x: ["도루 브라더스", "포트 클럽", "리우 도루 소사이어티"] },
    ],
  }),
  mk({
    id: "ib2_papafigos", name: "카자 페헤이리냐 파파 피구스", original: "Papa Figos", maker: "Casa Ferreirinha",
    producer: "카자 페헤이리냐(소그라페)", country: PT, area: "도루", sub: "도루 수페리오르", grape: "틴타 바로카·틴타 호리스·투리가 프랑카",
    type: "red", tier: 2, shape: "bordeaux", cap: "#e2b53a", cls: "Douro DOC",
    fact: "바르카 벨랴를 만드는 카자 페헤이리냐가 도루 수페리오르의 높은 밭 포도로 빚는 산뜻한 레드.",
    quiz: [
      { q: "'파파 피구스(무화과 먹보)'는 도루를 지나는 어떤 새의 별명인가?", a: "꾀꼬리(황금꾀꼬리)", x: ["황새", "제비", "딱따구리"] },
    ],
  }),
  mk({
    id: "ib2_chryseia", name: "크리세이아", original: "Chryseia", maker: "Prats & Symington",
    producer: "프라츠 앤 시밍턴", producerQ: true, country: PT, area: "도루", sub: "도루 수페리오르", grape: "투리가 나시오날·투리가 프랑카",
    type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#c9a24e", cls: "Douro DOC", since: 2000,
    fact: "보르도 코스 데스투르넬을 이끌던 브뤼노 프라츠와 포트 명가 시밍턴 가문이 손잡고 2000년 빈티지로 선보인 도루 레드.",
    quiz: [
      { q: "'크리세이아(Chryseia)'라는 이름의 뜻은?", a: "고대 그리스어로 '황금빛'", x: ["라틴어로 '포도송이'", "포르투갈어로 '새벽'", "그리스어로 '두 친구'"] },
    ],
  }),

  // ───────── 포르투갈 · 포트
  mk({
    id: "ib2_donaantonia", name: "페헤이라 도나 안토니아 헤제르바 토니", original: "Dona Antónia Reserva Tawny", labelName: "Dona Antónia", maker: "Ferreira",
    producer: "페헤이라", country: PT, area: "도루", sub: "빌라 노바 드 가이아", grape: "투리가 프랑카·틴타 호리스·투리가 나시오날",
    type: "fortified", tier: 2, shape: "port", glass: "flint", liquid: "amber", cap: "#8e1520", nv: true,
    fact: "19세기 도루 최대의 포도원 주인이던 '페헤이리냐' 도나 안토니아에게 바치는 토니 포트.",
    quiz: [
      { q: "1861년 도루강 급류에서 배가 뒤집혔을 때 도나 안토니아가 살아남은 이유로 전하는 것은?", a: "넓게 부푼 크리놀린 치마가 부낭 역할을 했다", x: ["포트 통을 붙잡고 떠 있었다", "뱃사공이 업고 헤엄쳤다", "배에 타지 않고 강가로 걸어갔다"] },
    ],
  }),
  mk({
    id: "ib2_croftpink", name: "크로프트 핑크", original: "Croft Pink", maker: "Croft",
    producer: "크로프트", country: PT, area: "도루", sub: "빌라 노바 드 가이아", grape: "투리가 프랑카·틴타 호리스",
    type: "fortified", tier: 1, shape: "port", glass: "flint", liquid: "rose", cap: "#d86f4f", nv: true,
    fact: "로제 포트라는 새 장르를 연 크로프트의 포트. 루비 포트보다 껍질 접촉을 짧게 해 분홍빛을 낸다.",
    quiz: [
      { q: "크로프트 핑크가 첫 로제 포트로 선보인 해는?", a: "2008년", x: ["1978년", "1992년", "2018년"] },
    ],
  }),
  mk({
    id: "ib2_kopke", name: "코프케 콜헤이타 포트", original: "Kopke Colheita",
    producer: "코프케", country: PT, area: "도루", sub: "빌라 노바 드 가이아", grape: "투리가 프랑카·틴타 호리스",
    type: "fortified", tier: 2, shape: "port", glass: "flint", liquid: "amber", cap: "#1b1410",
    fact: "1638년 한자동맹 상인 니콜라우 코프케가 세운 포트 하우스. 한 해 수확으로 빚어 나무통에서 오래 숙성하는 콜헤이타로 이름났다.",
    quiz: [
      { q: "포트의 '콜헤이타(Colheita)'는 어떤 와인인가?", a: "한 해 수확 포도로 만들어 나무통에서 오래 숙성한 토니", x: ["여러 해를 섞어 병에서 숙성한 루비", "청포도로만 만든 화이트 포트", "수확 뒤 2년 만에 병입한 빈티지 포트"] },
    ],
  }),
  mk({
    id: "ib2_churchills", name: "처칠스 빈티지 포트", original: "Churchill's Vintage Port",
    producer: "처칠스", country: PT, area: "도루", sub: "빌라 노바 드 가이아", grape: "투리가 나시오날·투리가 프랑카",
    type: "fortified", tier: 3, shape: "port", cap: "#1b1410",
    fact: "그레이엄 포트 가문 출신 조니 그레이엄이 1981년 세운 포트 하우스의 빈티지 포트. 50년 만에 새로 생긴 영국계 포트 회사였다.",
    quiz: [
      { q: "'처칠스'라는 회사 이름은 어디에서 왔나?", a: "창업자 아내 캐럴라인의 결혼 전 성", x: ["영국 총리 윈스턴 처칠", "포르투 항구의 처칠 부두", "첫 포도원의 영국인 주인"] },
    ],
  }),
  mk({
    id: "ib2_chipdry", name: "테일러스 칩 드라이 화이트 포트", original: "Chip Dry", maker: "Taylor's",
    producer: "테일러 플라드게이트", country: PT, area: "도루", sub: "빌라 노바 드 가이아", grape: "말바지아",
    type: "fortified", tier: 1, shape: "port", glass: "flint", liquid: "golden", cap: "#d8c9a0", nv: true,
    fact: "1934년 처음 블렌딩된 드라이 화이트 포트. 얼음과 토닉워터를 섞은 '포트 토닉'으로 즐겨 마신다.",
    quiz: [
      { q: "'칩 드라이'라는 이름은 어디에서 왔나?", a: "'나뭇조각처럼 바짝 마른(dry as a chip)'이라는 영어 표현", x: ["감자칩과 어울리는 와인", "창업자의 별명 '칩'", "나무 조각을 넣어 숙성"] },
    ],
  }),
  mk({
    id: "ib2_velhotes", name: "칼렝 벨료트스", original: "Cálem Velhotes", labelName: "Velhotes",
    producer: "칼렝", country: PT, area: "도루", sub: "빌라 노바 드 가이아", grape: "투리가 프랑카·틴타 호리스",
    type: "fortified", tier: 1, shape: "port", liquid: "amber", cap: "#8e1520", nv: true,
    fact: "1934년 나온 칼렝의 대표 포트로 포르투갈에서 가장 많이 팔리는 포트 브랜드로 꼽힌다. '벨료트스'는 '영감님들'이라는 정겨운 말이다.",
    quiz: [
      { q: "1859년 세워진 칼렝의 로고 속 범선(카라벨)이 상징하는 것은?", a: "자체 선단으로 포트를 브라질에 실어 나르던 역사", x: ["탐험가 바스쿠 다 가마의 인도 항로", "도루강의 포트 운반선 하벨루", "창업자가 선원이었던 과거"] },
    ],
  }),
  mk({
    id: "ib2_vesuvio", name: "킨타 두 베주비우 빈티지 포트", original: "Quinta do Vesúvio Vintage Port", labelName: "Quinta do Vesúvio",
    producer: "킨타 두 베주비우", country: PT, area: "도루", sub: "도루 수페리오르", grape: "투리가 나시오날·투리가 프랑카",
    type: "fortified", tier: 3, shape: "port", cap: "#1b1410",
    fact: "1827년 지은 화강암 발효조에서 지금도 사람이 발로 포도를 밟아 빚는 도루 수페리오르 포도원의 빈티지 포트.",
    quiz: [
      { q: "1989년 킨타 두 베주비우를 사들인 포트 가문은?", a: "시밍턴 가문", x: ["플라드게이트 가문", "니포트 가문", "샌드맨 가문"] },
    ],
  }),

  // ───────── 포르투갈 · 비뉴 베르드 · 당 · 바이하다 · 알렌테주 · 세투발
  mk({
    id: "ib2_soalheiro", name: "소알례이루 알바리뉴", original: "Soalheiro Alvarinho",
    producer: "소알례이루", country: PT, area: "비뉴 베르드", sub: "몽상 이 멜가수", grape: "알바리뉴",
    type: "white", tier: 3, shape: "flute", liquid: "whiteGreen", cap: "#e2b53a", cls: "Vinho Verde DOC",
    fact: "멜가수에 처음 알바리뉴를 심은 세르데이라 가문이 1982년 멜가수 최초의 알바리뉴 브랜드로 내놓은 화이트.",
    quiz: [
      { q: "'소알례이루(Soalheiro)'라는 밭 이름의 뜻은?", a: "종일 해가 드는 곳", x: ["바람 부는 언덕", "강가의 모래밭", "오래된 수도원"] },
    ],
  }),
  mk({
    id: "ib2_carvalhais", name: "킨타 두스 카르발랴이스 엥크루자두", original: "Quinta dos Carvalhais Encruzado", labelName: "Quinta dos Carvalhais",
    producer: "소그라페", producerQ: true, country: PT, area: "당", grape: "엥크루자두",
    type: "white", tier: 3, shape: "burgundy", cap: "#d8c9a0", cls: "Dão DOC",
    fact: "포르투갈 중부 당 지방에 자리한 영지 킨타 두스 카르발랴이스가 토착 청포도 엥크루자두로 빚는 화이트.",
    quiz: [
      { q: "킨타 두스 카르발랴이스를 가진 회사가 세계적으로 이름을 떨친 와인은?", a: "마테우스 로제", x: ["랜서스 로제", "카잘 가르시아", "페리키타"] },
    ],
  }),
  mk({
    id: "ib2_luispato", name: "루이스 파투 비냐스 벨랴스", original: "Vinhas Velhas", maker: "Luís Pato",
    producer: "루이스 파투", country: PT, area: "베이라 아틀란티쿠", grape: "바가",
    type: "red", tier: 3, shape: "bordeaux", cap: "#3a0f14", cls: "Vinho Regional Beira Atlântico",
    fact: "'미스터 바가'로 불리는 루이스 파투가 바이하다의 오래된 바가 나무로 빚는 레드. 딸 필리파 파투도 이름난 양조가다.",
    quiz: [
      { q: "루이스 파투가 1999년 스스로 선택해 한 일은?", a: "바이하다 원산지 명칭을 떠나 지역 와인으로 내놓기 시작했다", x: ["모든 포도밭을 알바리뉴로 바꿨다", "포트 와인 생산을 시작했다", "양조장을 도루로 옮겼다"] },
    ],
  }),
  mk({
    id: "ib2_mouchao", name: "에르다드 두 무샹", original: "Mouchão", maker: "Herdade do Mouchão",
    producer: "에르다드 두 무샹", country: PT, area: "알렌테주", grape: "알리칸트 부셰·트링카데이라",
    type: "red", tier: 3, shape: "bordeaux", cap: "#1b1410", cls: "Alentejo DOC",
    fact: "영국계 코르크 상인 레이놀즈 가문이 19세기부터 일군 알렌테주 영지. 포르투갈에 처음 알리칸트 부셰를 들여온 곳으로 꼽힌다.",
    quiz: [
      { q: "1974년 혁명 뒤 무샹 영지에 벌어진 일은?", a: "국가에 몰수됐다가 1985년 가문에 돌아왔다", x: ["포도밭이 모두 코르크 숲으로 바뀌었다", "스페인 회사에 팔렸다", "대형 협동조합으로 바뀌었다"] },
    ],
  }),
  mk({
    id: "ib2_cartuxaea", name: "카르투샤 EA 틴투", original: "EA Tinto", maker: "Cartuxa",
    producer: "카르투샤(에우제니우 드 알메이다 재단)", country: PT, area: "알렌테주", sub: "에보라", grape: "아라고네스·트링카데이라",
    type: "red", tier: 1, shape: "bordeaux", cap: "#8e1520", cls: "Vinho Regional Alentejano",
    fact: "페라 망카를 만드는 에보라의 에우제니우 드 알메이다 재단이 빚는 부담 없는 데일리 레드.",
    quiz: [
      { q: "'EA'는 무엇의 머리글자인가?", a: "재단을 세운 에우제니우 드 알메이다", x: ["에보라와 알렌테주", "영어 'Extra Aged'", "첫 양조가 에두아르두 알베스"] },
    ],
  }),
  mk({
    id: "ib2_periquita", name: "주제 마리아 다 폰세카 페리키타", original: "Periquita", maker: "José Maria da Fonseca",
    producer: "주제 마리아 다 폰세카", country: PT, area: "세투발", grape: "카스텔랑",
    type: "red", tier: 1, shape: "bordeaux", cap: "#2f4a2c", cls: "Vinho Regional Península de Setúbal",
    fact: "1850년부터 이어 온 포르투갈에서 가장 오래된 테이블 와인 브랜드. 카스텔랑 품종이 중심이다.",
    quiz: [
      { q: "'페리키타(Periquita)'라는 이름의 뜻과 유래는?", a: "'작은 앵무새'라는 뜻의 첫 포도밭 이름", x: ["창업자 딸의 애칭", "세투발 항구의 등대 이름", "포르투갈 민요의 제목"] },
    ],
  }),
  mk({
    id: "ib2_alambre", name: "주제 마리아 다 폰세카 알람브르 모스카텔 드 세투발", original: "Alambre Moscatel de Setúbal", labelName: "Alambre", maker: "José Maria da Fonseca",
    producer: "주제 마리아 다 폰세카", country: PT, area: "세투발", sub: "아제이탕", grape: "모스카텔",
    type: "fortified", tier: 3, shape: "sherry", glass: "flint", liquid: "amber", cap: "#c9a24e",
    fact: "발효 중 포도 브랜디를 더해 단맛을 남긴 세투발의 주정강화 와인. '알람브르'는 창업자가 처음 모스카텔을 심은 영지 이름이다.",
    quiz: [
      { q: "알람브르를 만드는 주제 마리아 다 폰세카가 세워진 해는?", a: "1834년", x: ["1756년", "1888년", "1944년"] },
    ],
  }),
  mk({
    id: "ib2_bacalhoa", name: "킨타 다 바칼랴우", original: "Quinta da Bacalhôa", maker: "Bacalhôa Vinhos",
    producer: "바칼랴우 비뉴스", country: PT, area: "세투발", grape: "카베르네 소비뇽·메를로",
    type: "red", tier: 3, shape: "bordeaux", cap: "#1b1410", cls: "Vinho Regional Península de Setúbal",
    fact: "15세기 궁전 팔라시우 다 바칼랴우 영지에서 나는, 포르투갈 최초의 카베르네 소비뇽 와인으로 꼽히는 레드. 1979년 첫 수확을 했다.",
    quiz: [
      { q: "2000년 바칼랴우 영지를 사들인 인물은?", a: "미술품 수집가이자 사업가 주제 베라르두", x: ["축구 감독 주제 무리뉴", "건축가 알바루 시자", "소설가 주제 사라마구"] },
    ],
  }),
];
