import type { Wine } from "../wines";
import { mk } from "../make";
import type { LabelStyle } from "../../label/template";

// 2차 남반구·아시아 목록 — 호주·뉴질랜드·칠레·아르헨티나·남아공·우루과이·일본·중국·인도
// 한국어 산지·품종 이름 → 라벨용 원어 (lang.ts 와 다른 more/*.ts 에 없는 것만)
export const REGIONS: Record<string, string> = {
  태즈메이니아: "Tasmania",
  "캔버라 디스트릭트": "Canberra District",
  러더글렌: "Rutherglen",
  그램피언스: "Grampians",
  "나감비 레이크스": "Nagambie Lakes",
  "모닝턴 페닌슐라": "Mornington Peninsula",
  "노스 캔터베리": "North Canterbury",
  "와이파라 밸리": "Waipara Valley",
  오클랜드: "Auckland",
  쿠메우: "Kumeu",
  페우모: "Peumo",
  파타고니아: "Patagonia",
  "리오 네그로": "Río Negro",
  네우켄: "Neuquén",
  카파야테: "Cafayate",
  웰링턴: "Wellington",
  몬테비데오: "Montevideo",
  나가노: "Nagano",
  시오지리: "Shiojiri",
  허베이: "Hebei",
  산시: "Shanxi",
  마하라슈트라: "Maharashtra",
  나시크: "Nashik",
  카르나타카: "Karnataka",
  "난디 힐스": "Nandi Hills",
};

export const GRAPES: Record<string, string> = {
  토론테스: "Torrontés",
  "틴타 바로카": "Tinta Barocca",
  마르슬랑: "Marselan",
  "그르나슈 블랑": "Grenache Blanc",
};

// 흰 바탕에 빨간 'Penfolds' 로고, 검정 글씨의 펜폴즈 라벨
const PENFOLDS: Partial<LabelStyle> = {
  layout: "modern",
  paper: "#f8f5ee",
  ink: "#1b1410",
  accent: "#b3141c",
  foil: null,
  font: "roman",
  emblem: "none",
};

// 라벨을 가로지르는 빨간 사선 띠의 다렌버그 라벨
const DARENBERG: Partial<LabelStyle> = { paper: "#f7f4ec", accent: "#b3141c" };

const SA = { country: "호주", area: "사우스오스트레일리아" } as const;
const MR = { country: "호주", area: "웨스턴오스트레일리아", sub: "마거릿 리버" } as const;
const VIC = { country: "호주", area: "빅토리아" } as const;
const NSW = { country: "호주", area: "뉴사우스웨일스" } as const;
const MARL = { country: "뉴질랜드", area: "말버러" } as const;
const CL = { country: "칠레" } as const;
const AR = { country: "아르헨티나" } as const;
const ZA = { country: "남아프리카공화국", area: "웨스턴 케이프" } as const;

export const WINES: Wine[] = [
  // ───────── 호주 · 펜폴즈
  mk({
    ...SA, id: "sh2_penfolds_maxs", name: "펜폴즈 맥스 시라즈 카베르네", original: "Penfolds Max's Shiraz Cabernet", labelName: "Max's", maker: "Penfolds", producer: "펜폴즈",
    grape: "시라즈·카베르네 소비뇽", type: "red", tier: 1, shape: "bordeaux", cap: "#8b1522", style: PENFOLDS,
    fact: "그랜지를 탄생시킨 전설의 수석 양조가 막스 슈버트의 이름을 딴 펜폴즈 라인. 여러 산지의 포도를 섞는 그의 양조 철학을 잇는다.",
    quiz: [{ q: "펜폴즈 맥스의 이름 주인공 막스 슈버트가 1950년대에 처음 만든 호주의 전설적인 와인은?", a: "펜폴즈 그랜지", x: ["헨쉬키 힐 오브 그레이스", "울프 블라스 블랙 라벨", "토브렉 런릭"] }],
  }),
  mk({
    ...SA, id: "sh2_penfolds_bin128", name: "펜폴즈 빈 128 쿠나와라 시라즈", original: "Penfolds Bin 128 Coonawarra Shiraz", labelName: "Bin 128", maker: "Penfolds", producer: "펜폴즈",
    sub: "쿠나와라", grape: "시라즈", type: "red", tier: 2, shape: "bordeaux", cap: "#8b1522", style: PENFOLDS,
    fact: "펜폴즈가 쿠나와라의 포도로만 만드는 시라즈. 서늘한 쿠나와라 기후 덕분에 바로사 시라즈보다 향긋하고 우아하다.",
    quiz: [{ q: "펜폴즈 빈 128 쿠나와라 시라즈의 첫 빈티지는?", a: "1962년", x: ["1932년", "1982년", "2002년"] }],
  }),
  mk({
    ...SA, id: "sh2_penfolds_bin150", name: "펜폴즈 빈 150 마라낭가 시라즈", original: "Penfolds Bin 150 Marananga Shiraz", labelName: "Bin 150", maker: "Penfolds", producer: "펜폴즈",
    sub: "바로사 밸리", grape: "시라즈", type: "red", tier: 2, shape: "bordeaux", cap: "#8b1522", since: 2008, style: PENFOLDS,
    fact: "바로사 밸리 서북쪽 마라낭가 지역의 포도로만 만드는 펜폴즈의 시라즈. 2008년 빈티지로 처음 선보였다.",
    quiz: [
      {
        q: "펜폴즈 빈 150의 '마라낭가'가 제1차 세계대전 때 이름을 바꾸기 전 쓰던 독일어 지명은?",
        a: "그나덴프라이",
        x: ["그나덴베르크", "한도르프", "노이도르프"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_penfolds_bin2", name: "펜폴즈 빈 2 시라즈 마타로", original: "Penfolds Bin 2 Shiraz Mataro", labelName: "Bin 2", maker: "Penfolds", producer: "펜폴즈",
    grape: "시라즈·무르베드르", type: "red", tier: 2, shape: "bordeaux", cap: "#8b1522", style: PENFOLDS,
    fact: "시라즈에 마타로(무르베드르)를 섞은 펜폴즈의 빈 와인. 남호주 여러 산지의 포도로 만들어 일찍부터 즐기기 좋다.",
    quiz: [{ q: "펜폴즈 빈 2처럼 번호로 불리는 펜폴즈 와인 가운데, 그랜지에 붙은 빈 번호는?", a: "빈 95", x: ["빈 1", "빈 389", "빈 707"] }],
  }),
  mk({
    ...SA, id: "sh2_penfolds_magill", name: "펜폴즈 매길 에스테이트 시라즈", original: "Penfolds Magill Estate Shiraz", labelName: "Magill Estate", maker: "Penfolds", producer: "펜폴즈",
    grape: "시라즈", type: "red", tier: 2, shape: "bordeaux", cap: "#8b1522", style: PENFOLDS,
    fact: "1844년 펜폴드 부부가 애들레이드 근교 매길에 일군 펜폴즈의 발상지 포도밭에서 나오는 시라즈. 도심 속에 남은 보기 드문 포도밭이다.",
    quiz: [
      { q: "펜폴즈를 세운 크리스토퍼 로슨 펜폴드의 원래 직업은?", a: "의사", x: ["목사", "선장", "변호사"] },
      { q: "매길 에스테이트에 남아 있는 펜폴드 부부의 오두막 이름을 딴 펜폴즈의 와인은?", a: "그랜지", x: ["세인트 헨리", "야타나", "쿠눙가 힐"] },
    ],
  }),

  // ───────── 호주 · 바로사·에덴 밸리
  mk({
    ...SA, id: "sh2_torbreck_laird", name: "토브렉 더 레어드", original: "The Laird", maker: "Torbreck", producer: "토브렉",
    sub: "바로사 밸리", grape: "시라즈", type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#1b1b1b",
    fact: "바로사 마라낭가의 단일 포도밭 시라즈로 만드는 토브렉의 최상급 와인. 두꺼운 새 프랑스 오크통에서 오래 숙성한다.",
    quiz: [
      {
        q: "토브렉 더 레어드의 '레어드(Laird)'는 스코틀랜드 말로 누구를 가리킬까?",
        a: "땅을 가진 영주(지주)",
        x: ["양 떼를 모는 목동", "숲을 지키는 산지기", "마을의 성직자"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_torbreck_woodcutters", name: "토브렉 우드커터스 시라즈", original: "Woodcutter's Shiraz", maker: "Torbreck", producer: "토브렉",
    sub: "바로사 밸리", grape: "시라즈", type: "red", tier: 2, shape: "bordeaux", cap: "#2a2a2a",
    fact: "토브렉을 세운 데이브 파월이 스코틀랜드에서 벌목꾼으로 일하던 시절을 기려 이름 붙인 바로사 시라즈.",
    quiz: [{ q: "토브렉 우드커터스 시라즈를 만드는 토브렉이 문을 연 해는?", a: "1994년", x: ["1954년", "1974년", "2004년"] }],
  }),
  mk({
    ...SA, id: "sh2_torbreck_factor", name: "토브렉 더 팩터", original: "The Factor", maker: "Torbreck", producer: "토브렉",
    sub: "바로사 밸리", grape: "시라즈", type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#1b1b1b",
    fact: "바로사 밸리 여러 마을의 오래된 시라즈 포도나무에서 나오는 토브렉의 시라즈. 토브렉 와인 이름은 대부분 스코틀랜드 옛 시골 말에서 따왔다.",
    quiz: [
      {
        q: "토브렉 더 팩터의 '팩터(Factor)'는 옛 스코틀랜드에서 어떤 사람이었을까?",
        a: "영주를 대신해 영지를 관리하던 관리인",
        x: ["곡식을 빻던 방앗간 주인", "마을의 대장장이", "소 떼를 몰던 목동"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_greenockcreek_roennfeldt", name: "그리녹 크릭 로엔펠트 로드 시라즈", original: "Greenock Creek Roennfeldt Road Shiraz", producer: "그리녹 크릭",
    sub: "바로사 밸리", grape: "시라즈", type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#2a1a14",
    fact: "바로사 마라낭가의 오래된 포도나무에서 아주 적은 양만 만드는 컬트 시라즈. 로버트 파커에게 100점을 받으며 전설이 됐다.",
    quiz: [
      {
        q: "그리녹 크릭 로엔펠트 로드의 '로엔펠트 로드'는 무엇일까?",
        a: "포도밭 옆을 지나는 바로사의 길 이름",
        x: ["창업자 고향인 독일 마을 이름", "포도밭 옆 개울 이름", "와이너리 옛 교회 이름"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_rockford_basketpress", name: "록퍼드 바스켓 프레스 시라즈", original: "Rockford Basket Press Shiraz", producer: "록퍼드",
    sub: "바로사 밸리", grape: "시라즈", type: "red", tier: 2, shape: "bordeaux", cap: "#3a1a14",
    fact: "록퍼드가 100년 넘은 옛 장비로 전통 방식을 지켜 만드는 바로사 시라즈. 주로 셀러 도어와 메일링 리스트로 팔아 구하기 어렵다.",
    quiz: [
      {
        q: "록퍼드 바스켓 프레스라는 이름은 무엇에서 왔을까?",
        a: "포도를 짜는 옛날식 바구니 압착기",
        x: ["포도를 나르던 대바구니", "창업자의 어릴 적 별명", "바구니 모양의 포도밭 지형"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_peterlehmann_stonewell", name: "피터 르만 스톤웰 시라즈", original: "Peter Lehmann Stonewell Shiraz", producer: "피터 르만",
    sub: "바로사 밸리", grape: "시라즈", type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#2a1a1a",
    fact: "1970년대 말 포도가 남아돌아 버려질 위기에 놓인 바로사 농가의 포도를 사 주려고 피터 르만이 세운 와이너리의 최상급 시라즈.",
    quiz: [{ q: "피터 르만 와인의 라벨과 로고에 들어가는 트럼프 카드는?", a: "클럽 퀸", x: ["스페이드 에이스", "하트 킹", "다이아몬드 잭"] }],
  }),
  mk({
    ...SA, id: "sh2_grantburge_meshach", name: "그랜트 버지 메샤크 시라즈", original: "Grant Burge Meshach Shiraz", producer: "그랜트 버지",
    sub: "바로사 밸리", grape: "시라즈", type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#3a0f14",
    fact: "그랜트·헬렌 버지 부부가 1988년 세운 바로사 와이너리의 최상급 시라즈. 오래된 포도나무 포도로 빚는다.",
    quiz: [
      {
        q: "그랜트 버지 메샤크의 '메샤크'는 누구일까?",
        a: "그랜트 버지의 증조할아버지",
        x: ["첫 포도밭을 판 이웃 농부", "바로사에 온 첫 루터교 목사", "와이너리의 첫 수석 양조가"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_langmeil_freedom", name: "랑마일 더 프리덤 1843 시라즈", original: "Langmeil The Freedom 1843 Shiraz", producer: "랑마일",
    sub: "바로사 밸리", grape: "시라즈", type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#2a1a14",
    fact: "세계에서 가장 오래된 축에 드는 바로사의 시라즈 포도나무에서 나온다. '자유'라는 이름은 종교의 자유를 찾아 프로이센에서 건너온 이민자에게서 왔다.",
    quiz: [
      {
        q: "랑마일 더 프리덤 1843의 '1843'은 무엇을 뜻할까?",
        a: "포도나무를 심은 해",
        x: ["와이너리를 세운 해", "첫 수출을 한 해", "포도밭의 해발 고도(m)"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_charlesmelton_ninepopes", name: "찰스 멜턴 나인 포프스", original: "Nine Popes", maker: "Charles Melton", producer: "찰스 멜턴",
    sub: "바로사 밸리", grape: "그르나슈·시라즈·무르베드르", type: "red", tier: 3, shape: "bordeaux", cap: "#5a2a5e",
    fact: "바로사의 오래된 그르나슈에 시라즈·무르베드르를 섞은 론 스타일 블렌드. 찰스 멜턴의 대표 와인이다.",
    quiz: [
      {
        q: "찰스 멜턴 나인 포프스(아홉 교황)라는 이름은 어떻게 생겼을까?",
        a: "샤토뇌프 뒤 파프의 '뇌프(새)'를 숫자 9로 잘못 옮겨서",
        x: ["아홉 명의 교황이 축복한 포도밭이라서", "아홉 가지 품종을 섞어서", "창업자가 모은 교황 메달 아홉 개에서"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_glaetzer_amonra", name: "글래처 아몬라 시라즈", original: "Glaetzer Amon-Ra Unfiltered Shiraz", labelName: "Amon-Ra", maker: "Glaetzer", producer: "글래처",
    sub: "바로사 밸리", grape: "시라즈", type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1b1b",
    fact: "양조가 벤 글래처가 바로사의 오래된 포도나무 시라즈로 만드는 최상급 와인. 여과하지 않고 병에 담는다.",
    quiz: [
      {
        q: "글래처 아몬라의 '아몬라(Amon-Ra)'는 어느 신화 속 신일까?",
        a: "이집트 신화의 태양신",
        x: ["그리스 신화의 포도주 신", "북유럽 신화의 천둥신", "메소포타미아 신화의 달의 신"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_johnduval_entity", name: "존 듀발 엔티티 시라즈", original: "John Duval Entity Shiraz", producer: "존 듀발 와인즈",
    sub: "바로사 밸리", grape: "시라즈", type: "red", tier: 3, shape: "bordeaux", cap: "#1a2330",
    fact: "1986~2002년 펜폴즈 수석 양조가로 그랜지를 책임진 존 듀발이 독립해 만드는 바로사 시라즈.",
    quiz: [{ q: "존 듀발이 독립하기 전 수석 양조가로 일한 와이너리는?", a: "펜폴즈", x: ["울프 블라스", "헨쉬키", "얄룸바"] }],
  }),
  mk({
    ...SA, id: "sh2_yalumba_octavius", name: "얄룸바 더 옥타비우스", original: "The Octavius Old Vine Shiraz", maker: "Yalumba", producer: "얄룸바",
    sub: "바로사 밸리", grape: "시라즈", type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#2a0f14",
    fact: "호주에서 가장 오래된 가족 경영 와이너리 얄룸바가 바로사의 오래된 포도나무 시라즈로 만드는 최상급 와인.",
    quiz: [
      {
        q: "얄룸바 더 옥타비우스라는 이름은 무엇에서 왔을까?",
        a: "숙성에 쓰는 작은 오크통 '옥타브'",
        x: ["여덟 번째로 만든 시험 양조", "여덟 개 포도밭의 블렌드", "8년 동안의 숙성"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_jacobscreek_doublebarrel", name: "제이콥스 크릭 더블 배럴 시라즈", original: "Jacob's Creek Double Barrel Shiraz", producer: "제이콥스 크릭",
    grape: "시라즈", type: "red", tier: 1, shape: "bordeaux", cap: "#1b1b1b",
    fact: "와인 오크통에서 숙성한 뒤, 다른 술을 담았던 오크통으로 옮겨 한 번 더 숙성해 '더블 배럴'이라 부르는 시라즈.",
    quiz: [
      {
        q: "제이콥스 크릭 더블 배럴 시라즈가 두 번째로 숙성되는 통은?",
        a: "위스키를 숙성했던 오크통",
        x: ["셰리를 담았던 오크통", "럼을 담았던 오크통", "포트를 담았던 오크통"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_henschke_cyril", name: "헨쉬키 시릴 헨쉬키 카베르네 소비뇽", original: "Cyril Henschke", maker: "Henschke", producer: "헨쉬키",
    sub: "에덴 밸리", grape: "카베르네 소비뇽·메를로·카베르네 프랑", type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620",
    fact: "힐 오브 그레이스 같은 단일 포도밭 와인을 처음 선보인 시릴 헨쉬키를 기려 만드는 에덴 밸리 카베르네 소비뇽.",
    quiz: [
      {
        q: "헨쉬키 시릴 헨쉬키의 주인공 시릴 헨쉬키는 지금 와이너리를 이끄는 스티븐 헨쉬키와 어떤 사이일까?",
        a: "아버지",
        x: ["할아버지", "형", "삼촌"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_pewseyvale_riesling", name: "퓨지 베일 에덴 밸리 리슬링", original: "Pewsey Vale Eden Valley Riesling", producer: "퓨지 베일",
    sub: "에덴 밸리", grape: "리슬링", type: "white", tier: 2, shape: "flute", cap: "#dfe3d0",
    fact: "1847년 영국 이민자 조지프 길버트가 에덴 밸리 언덕에 처음 포도를 심은 포도밭. 1961년 얄룸바의 힐스미스 가문이 되살렸다.",
    quiz: [
      {
        q: "퓨지 베일이라는 이름은 어디서 왔을까?",
        a: "잉글랜드 윌트셔의 골짜기 '베일 오브 퓨지'",
        x: ["원주민 말로 '맑은 샘'", "첫 수확을 한 딸의 이름", "이웃 교회의 이름"],
      },
    ],
  }),

  // ───────── 호주 · 맥라렌 베일·클레어·쿠나와라·애들레이드 힐스
  mk({
    ...SA, id: "sh2_darenberg_stumpjump", name: "다렌버그 스텀프 점프 GSM", original: "The Stump Jump Grenache Shiraz Mourvèdre", labelName: "The Stump Jump", maker: "d'Arenberg", producer: "다렌버그",
    sub: "맥라렌 베일", grape: "그르나슈·시라즈·무르베드르", type: "red", tier: 1, shape: "bordeaux", cap: "#b3141c", style: DARENBERG,
    fact: "다렌버그의 데일리 블렌드. 다렌버그 와인 라벨에는 모두 빨간 사선 띠가 들어간다.",
    quiz: [
      {
        q: "다렌버그 스텀프 점프의 이름이 된, 남호주에서 발명된 '스텀프 점프 쟁기'는 어떤 쟁기일까?",
        a: "나무 그루터기에 걸리면 튀어 올라 넘어가는 쟁기",
        x: ["포도나무 사이 잡초만 골라 뽑는 쟁기", "증기 기관으로 움직이는 쟁기", "소 네 마리가 끄는 쟁기"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_darenberg_footbolt", name: "다렌버그 더 풋볼트 시라즈", original: "The Footbolt Shiraz", maker: "d'Arenberg", producer: "다렌버그",
    sub: "맥라렌 베일", grape: "시라즈", type: "red", tier: 2, shape: "bordeaux", cap: "#b3141c", style: DARENBERG,
    fact: "1912년 맥라렌 베일 포도밭을 사들여 다렌버그의 기틀을 놓은 조지프 오즈번 시절의 이야기를 이름에 담은 시라즈.",
    quiz: [
      {
        q: "다렌버그 더 풋볼트의 '풋볼트'는 원래 무엇이었을까?",
        a: "조지프 오즈번이 기르던 경주마",
        x: ["포도밭 옆을 흐르는 개울", "창업자의 사냥개", "옛 수동 압착기"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_wirrawirra_churchblock", name: "위라 위라 처치 블록", original: "Wirra Wirra Church Block", producer: "위라 위라",
    sub: "맥라렌 베일", grape: "카베르네 소비뇽·시라즈·메를로", type: "red", tier: 2, shape: "bordeaux", cap: "#6a1822",
    fact: "1894년 세워졌다 문을 닫은 맥라렌 베일의 와이너리를 1969년 되살린 위라 위라의 대표 블렌드.",
    quiz: [{ q: "위라 위라를 1969년 되살려 다시 문을 연 사람은?", a: "그렉 트롯", x: ["막스 슈버트", "볼프 블라스", "피터 르만"] }],
  }),
  mk({
    ...SA, id: "sh2_taylors_cs", name: "테일러스 에스테이트 카베르네 소비뇽", original: "Taylors Estate Cabernet Sauvignon", producer: "테일러스",
    sub: "클레어 밸리", grape: "카베르네 소비뇽", type: "red", tier: 1, shape: "bordeaux", cap: "#7a1522",
    fact: "1969년 테일러 가문이 클레어 밸리에 세운 가족 와이너리의 카베르네 소비뇽. 영국 등 여러 나라에서는 '웨이크필드'라는 이름으로 판다.",
    quiz: [
      {
        q: "테일러스 와인이 해외 여러 나라에서 '웨이크필드(Wakefield)'라는 이름으로 팔리는 까닭은?",
        a: "포르투갈의 포트 회사 테일러스와 이름이 겹쳐서",
        x: ["영국 왕실이 이름을 바꾸라고 해서", "창업자가 이름을 바꿔서", "첫 수출 항구의 이름을 따서"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_mounthorrocks_cordoncut", name: "마운트 호락스 코든 컷 리슬링", original: "Mount Horrocks Cordon Cut Riesling", producer: "마운트 호락스",
    sub: "클레어 밸리", grape: "리슬링", type: "sweet", tier: 3, shape: "icewine", cap: "#c9a24e",
    fact: "양조가 스테퍼니 툴이 클레어 밸리에서 만드는 스위트 리슬링. 귀부균이나 서리 없이 포도나무 위에서 포도를 말려 단맛을 모은다.",
    quiz: [
      {
        q: "마운트 호락스 코든 컷의 '코든 컷'은 어떤 방법일까?",
        a: "포도가 달린 가지를 잘라 나무에 매단 채 말린다",
        x: ["언 포도를 한밤중에 딴다", "딴 포도를 짚 위에 널어 말린다", "귀부균이 핀 포도알만 골라 딴다"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_wynns_johnriddoch", name: "윈즈 존 리독 카베르네 소비뇽", original: "Wynns John Riddoch Cabernet Sauvignon", producer: "윈즈 쿠나와라 에스테이트",
    sub: "쿠나와라", grape: "카베르네 소비뇽", type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1b1b",
    fact: "윈즈 쿠나와라 에스테이트가 가장 좋은 포도만 골라 만드는 최상급 카베르네 소비뇽. 1982년 첫 빈티지를 냈다.",
    quiz: [
      {
        q: "윈즈 존 리독의 주인공 존 리독은 누구일까?",
        a: "쿠나와라에 처음 포도를 심은 스코틀랜드 출신 개척자",
        x: ["윈즈를 사들인 이탈리아 사업가", "와이너리의 첫 수석 양조가", "남호주의 첫 총독"],
      },
    ],
  }),
  mk({
    ...SA, id: "sh2_shawsmith_sb", name: "쇼 앤 스미스 소비뇽 블랑", original: "Shaw + Smith Sauvignon Blanc", producer: "쇼 앤 스미스",
    sub: "애들레이드 힐스", grape: "소비뇽 블랑", type: "white", tier: 2, shape: "bordeaux", cap: "#dfe3e6",
    fact: "사촌 사이인 마틴 쇼와 마이클 힐스미스가 1989년 애들레이드 힐스에 세운 와이너리의 대표 소비뇽 블랑.",
    quiz: [
      {
        q: "쇼 앤 스미스를 함께 세운 마이클 힐스미스가 1988년 호주인 최초로 얻은 자격은?",
        a: "마스터 오브 와인(MW)",
        x: ["마스터 소믈리에(MS)", "보르도 대학 양조학 학위", "지미 왓슨 트로피"],
      },
    ],
  }),

  // ───────── 호주 · 뉴사우스웨일스
  mk({
    ...NSW, id: "sh2_brokenwood_graveyard", name: "브로큰우드 그레이브야드 시라즈", original: "Brokenwood Graveyard Vineyard Shiraz", producer: "브로큰우드",
    sub: "헌터 밸리", grape: "시라즈", type: "red", tier: 2, shape: "bordeaux", cap: "#141414",
    fact: "1970년 시드니의 세 친구가 헌터 밸리에 세운 브로큰우드의 최상급 시라즈. 원래 공동묘지 부지로 지정됐던 땅이라 '그레이브야드'라는 이름이 붙었다.",
    quiz: [{ q: "브로큰우드를 함께 세운 세 사람의 본업은?", a: "변호사", x: ["의사", "은행원", "건축가"] }],
  }),
  mk({
    ...NSW, id: "sh2_mountpleasant_oshea", name: "마운트 플레전트 모리스 오셰이 시라즈", original: "Mount Pleasant Maurice O'Shea Shiraz", producer: "마운트 플레전트",
    sub: "헌터 밸리", grape: "시라즈", type: "red", tier: 3, shape: "bordeaux", cap: "#3a0f14",
    fact: "헌터 밸리의 전설적인 양조가 모리스 오셰이를 기린 마운트 플레전트의 시라즈. 오셰이의 와인은 20세기 중반 호주 최고의 레드로 꼽혔다.",
    quiz: [{ q: "마운트 플레전트를 이끈 모리스 오셰이가 포도 재배와 양조를 공부한 나라는?", a: "프랑스", x: ["독일", "이탈리아", "미국"] }],
  }),
  mk({
    ...NSW, id: "sh2_tyrrells_vat47", name: "티렐스 배트 47 샤르도네", original: "Tyrrell's Vat 47 Hunter Chardonnay", producer: "티렐스",
    sub: "헌터 밸리", grape: "샤르도네", type: "white", tier: 2, shape: "burgundy", cap: "#e2cf9b",
    fact: "1971년 빈티지로 나와 호주 최초의 상업용 샤르도네로 꼽히는 헌터 밸리의 샤르도네.",
    quiz: [{ q: "티렐스 배트 47을 1971년 처음 만든 사람은?", a: "머리 티렐", x: ["브루스 티렐", "에드워드 티렐", "막스 슈버트"] }],
  }),
  mk({
    ...NSW, id: "sh2_lakesfolly_cabernets", name: "레이크스 폴리 카베르네", original: "Lake's Folly Cabernets", producer: "레이크스 폴리",
    sub: "헌터 밸리", grape: "카베르네 소비뇽·시라즈·메를로", type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822",
    fact: "1963년 맥스 레이크가 헌터 밸리에 세운 와이너리. 스스로 '레이크의 어리석은 짓(Folly)'이라 이름 붙인 이 도전이 호주 부티크 와이너리 시대를 열었다.",
    quiz: [{ q: "레이크스 폴리를 세운 맥스 레이크의 본업은?", a: "외과 의사", x: ["변호사", "은행가", "신문 기자"] }],
  }),
  mk({
    ...NSW, id: "sh2_clonakilla_sv", name: "클로나킬라 시라즈 비오니에", original: "Clonakilla Shiraz Viognier", producer: "클로나킬라",
    sub: "캔버라 디스트릭트", grape: "시라즈·비오니에", type: "red", tier: 2, shape: "burgundy", cap: "#2a1a14",
    fact: "과학자 존 커크 박사가 1971년 캔버라 근교에 세운 와이너리의 대표작. 시라즈에 화이트 품종 비오니에를 조금 넣어 함께 발효한다.",
    quiz: [
      {
        q: "클로나킬라 시라즈 비오니에가 본보기로 삼은, 시라에 비오니에를 섞는 전통으로 유명한 프랑스 산지는?",
        a: "코트 로티",
        x: ["샤토뇌프 뒤 파프", "코르나스", "방돌"],
      },
    ],
  }),

  // ───────── 호주 · 웨스턴오스트레일리아
  mk({
    ...MR, id: "sh2_xanadu_cs", name: "제너두 카베르네 소비뇽", original: "Xanadu Cabernet Sauvignon", producer: "제너두",
    grape: "카베르네 소비뇽", type: "red", tier: 2, shape: "bordeaux", cap: "#394a8c",
    fact: "마거릿 리버 개척기인 1970년대에 문을 연 제너두의 카베르네 소비뇽. 우아하고 단단한 마거릿 리버 카베르네의 전형을 보여 준다.",
    quiz: [
      {
        q: "제너두라는 이름은 무엇에서 왔을까?",
        a: "영국 시인 콜리지의 시 '쿠빌라이 칸'",
        x: ["창업자의 고향 마을", "원주민 말로 '바닷바람'", "첫 포도밭 주인의 딸 이름"],
      },
    ],
  }),
  mk({
    ...MR, id: "sh2_voyager_chardonnay", name: "보이저 에스테이트 샤르도네", original: "Voyager Estate Chardonnay", producer: "보이저 에스테이트",
    grape: "샤르도네", type: "white", tier: 2, shape: "burgundy", cap: "#e3d7b3",
    fact: "광산 사업가 마이클 라이트가 1991년 사들여 키운 마거릿 리버 와이너리의 샤르도네. 하얀 건물과 장미 정원이 아름다운 명소다.",
    quiz: [
      {
        q: "보이저 에스테이트의 하얀 와이너리 건물은 어떤 건축 양식일까?",
        a: "남아공의 케이프 더치 양식",
        x: ["프랑스 샤토 양식", "이탈리아 토스카나 농가 양식", "스페인 미션 양식"],
      },
    ],
  }),
  mk({
    ...MR, id: "sh2_cullen_kevinjohn", name: "컬렌 케빈 존 샤르도네", original: "Kevin John", maker: "Cullen", producer: "컬렌",
    grape: "샤르도네", type: "white", tier: 3, shape: "burgundy", cap: "#d8c9a0",
    fact: "컬렌이 바이오다이내믹 농법으로 기른 포도로 만드는 최상급 샤르도네. 마거릿 리버를 대표하는 샤르도네 가운데 하나다.",
    quiz: [
      {
        q: "컬렌 케빈 존이라는 이름은 누구를 기린 것일까?",
        a: "와이너리를 함께 세운 의사 케빈 컬렌",
        x: ["첫 수확을 도운 이웃 농부", "창업자의 첫 손자", "마거릿 리버의 첫 양조가"],
      },
    ],
  }),
  mk({
    ...MR, id: "sh2_vassefelix_heytesbury", name: "바스 펠릭스 헤이츠버리 샤르도네", original: "Vasse Felix Heytesbury Chardonnay", producer: "바스 펠릭스",
    grape: "샤르도네", type: "white", tier: 3, shape: "burgundy", cap: "#1f2a38",
    fact: "마거릿 리버 최초의 와이너리 바스 펠릭스가 가장 좋은 구획의 포도로 만드는 최상급 샤르도네.",
    quiz: [
      {
        q: "바스 펠릭스 헤이츠버리의 '헤이츠버리'는 무엇일까?",
        a: "1987년부터 바스 펠릭스를 소유한 홈스 아 코트 가문의 회사 이름",
        x: ["마거릿 리버 앞바다의 등대", "첫 양조가의 고향 마을", "원주민 말로 '하얀 모래'"],
      },
    ],
  }),

  // ───────── 호주 · 빅토리아·태즈메이니아
  mk({
    ...VIC, id: "sh2_tahbilk_marsanne", name: "타빌크 마르산", original: "Tahbilk Marsanne", producer: "타빌크",
    sub: "나감비 레이크스", grape: "마르산", type: "white", tier: 2, shape: "burgundy", cap: "#c9b27a",
    fact: "1860년 세워진 빅토리아의 역사적 와이너리. 1927년 심은 포도나무를 비롯해 세계에서 손꼽히게 넓은 마르산 밭을 가꾼다.",
    quiz: [{ q: "1925년부터 타빌크를 대대로 운영해 온 가문은?", a: "퍼브릭 가문", x: ["브라운 가문", "헨쉬키 가문", "하디 가문"] }],
  }),
  mk({
    ...VIC, id: "sh2_yarrayering_dr1", name: "야라 예링 드라이 레드 No.1", original: "Yarra Yering Dry Red No. 1", producer: "야라 예링",
    sub: "야라 밸리", grape: "카베르네 소비뇽·메를로·말벡", type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620",
    fact: "베일리 캐로더스 박사가 1969년 야라 밸리에 세운 와이너리의 카베르네 블렌드. 라벨에 품종 대신 '드라이 레드 1번'이라고만 적는다.",
    quiz: [{ q: "야라 예링을 세운 베일리 캐로더스의 원래 직업은?", a: "식물학자", x: ["외과 의사", "변호사", "광산 기술자"] }],
  }),
  mk({
    ...VIC, id: "sh2_mountmary_quintet", name: "마운트 메리 퀸텟", original: "Mount Mary Quintet", producer: "마운트 메리",
    sub: "야라 밸리", grape: "카베르네 소비뇽·메를로·카베르네 프랑", type: "red", tier: 3, shape: "bordeaux", cap: "#3a2a1a",
    fact: "의사 존 미들턴 박사가 1971년 포도를 심어 시작한 야라 밸리 마운트 메리의 보르도 블렌드. 적은 양을 주로 메일링 리스트 고객에게 판다.",
    quiz: [
      {
        q: "마운트 메리 퀸텟의 '퀸텟(5중주)'이라는 이름에 담긴 뜻은?",
        a: "보르도 품종 다섯 가지를 섞어 만든다",
        x: ["다섯 개 포도밭의 포도를 섞는다", "5년 동안 숙성한다", "창업자의 다섯 자녀를 기린다"],
      },
    ],
  }),
  mk({
    ...VIC, id: "sh2_coldstreamhills_pn", name: "콜드스트림 힐스 피노 누아", original: "Coldstream Hills Pinot Noir", producer: "콜드스트림 힐스",
    sub: "야라 밸리", grape: "피노 누아", type: "red", tier: 2, shape: "burgundy", cap: "#6a1822",
    fact: "호주의 대표 와인 평론가 제임스 할리데이가 1985년 야라 밸리에 세운 와이너리의 피노 누아.",
    quiz: [
      {
        q: "콜드스트림 힐스를 세운 제임스 할리데이가 해마다 펴낸 호주 와인 안내서는?",
        a: "할리데이 와인 컴패니언",
        x: ["펭귄 와인 가이드", "휴 존슨 포켓 와인 북", "파커 와인 바이어스 가이드"],
      },
    ],
  }),
  mk({
    ...VIC, id: "sh2_yeringstation_pn", name: "예링 스테이션 피노 누아", original: "Yering Station Pinot Noir", producer: "예링 스테이션",
    sub: "야라 밸리", grape: "피노 누아", type: "red", tier: 3, shape: "burgundy", cap: "#7a1522",
    fact: "야라 밸리의 오래된 농장 자리에 선 예링 스테이션의 피노 누아. 서늘한 기후에서 섬세한 맛을 낸다.",
    quiz: [
      {
        q: "예링 스테이션 자리가 빅토리아주 와인 역사에서 갖는 의미는?",
        a: "1838년 빅토리아주에서 처음 포도를 심은 곳",
        x: ["빅토리아주 최초의 스파클링 와이너리", "호주 최초의 여성 양조가가 세운 곳", "호주 최초로 스크루캡을 쓴 곳"],
      },
    ],
  }),
  mk({
    ...VIC, id: "sh2_tenminutes_pn", name: "텐 미니츠 바이 트랙터 피노 누아", original: "Ten Minutes by Tractor Pinot Noir", producer: "텐 미니츠 바이 트랙터",
    sub: "모닝턴 페닌슐라", grape: "피노 누아", type: "red", tier: 3, shape: "burgundy", cap: "#2f4a2c",
    fact: "멜버른 남쪽, 바다에 둘러싸인 모닝턴 페닌슐라의 서늘한 포도밭에서 나오는 피노 누아.",
    quiz: [
      {
        q: "텐 미니츠 바이 트랙터(트랙터로 10분)라는 이름은 어디서 왔을까?",
        a: "처음 포도밭 세 곳이 트랙터로 10분 거리 안에 모여 있어서",
        x: ["와이너리에서 바다까지 트랙터로 10분이라서", "수확한 포도를 10분 안에 압착해서", "창업자가 트랙터 회사를 운영해서"],
      },
    ],
  }),
  mk({
    ...VIC, id: "sh2_chambers_raremuscat", name: "챔버스 로즈우드 레어 머스캣", original: "Chambers Rosewood Rare Rutherglen Muscat", producer: "챔버스 로즈우드",
    sub: "러더글렌", grape: "뮈스카", type: "fortified", tier: 3, shape: "port", cap: "#3a2414", nv: true,
    fact: "챔버스 가문이 대대로 운영해 온 러더글렌 로즈우드 와이너리의 주정강화 머스캣. 수십 년 묵은 원액을 섞어 만든다.",
    quiz: [
      {
        q: "러더글렌 머스캣의 네 단계 숙성 등급(러더글렌·클래식·그랜드·레어) 가운데 '레어'는 어디에 해당할까?",
        a: "가장 높은 등급",
        x: ["가장 낮은 등급", "두 번째 등급", "세 번째 등급"],
      },
    ],
  }),
  mk({
    ...VIC, id: "sh2_seppelt_sparklingshiraz", name: "세펠트 쇼 스파클링 시라즈", original: "Seppelt Show Sparkling Shiraz", producer: "세펠트",
    sub: "그램피언스", grape: "시라즈", type: "sparkling", tier: 3, shape: "champagne", liquid: "red", cap: "#5b1620",
    fact: "빅토리아 그레이트 웨스턴의 세펠트가 만드는 붉은 스파클링 와인. 오랜 병 숙성을 거친 뒤에야 내놓는다.",
    quiz: [
      {
        q: "세펠트 그레이트 웨스턴 와이너리 지하의 긴 숙성 터널 '더 드라이브스'를 판 사람들은?",
        a: "일거리를 잃은 금광 광부들",
        x: ["영국군 공병대", "유배 온 죄수들", "철도 노동자들"],
      },
    ],
  }),
  mk({
    id: "sh2_jansz_cuvee", name: "잔츠 프리미엄 퀴베", original: "Jansz Premium Cuvée", producer: "잔츠",
    country: "호주", area: "태즈메이니아", grape: "샤르도네·피노 누아", type: "sparkling", tier: 2, shape: "champagne", cap: "#1f2238", nv: true,
    fact: "1986년 샴페인 하우스 루이 로드레르와 손잡고 시작한 태즈메이니아의 스파클링 와이너리. 샴페인처럼 병 속 2차 발효로 만든다.",
    quiz: [
      {
        q: "잔츠라는 이름은 누구에게서 왔을까?",
        a: "태즈메이니아를 처음 찾은 네덜란드 탐험가 아벌 얀스존 타스만",
        x: ["와이너리를 세운 네덜란드 상인", "창업자의 할아버지", "영국 탐험가 제임스 쿡"],
      },
    ],
  }),

  // ───────── 뉴질랜드
  mk({
    ...MARL, id: "sh2_cloudybay_pn", name: "클라우디 베이 피노 누아", original: "Cloudy Bay Pinot Noir", producer: "클라우디 베이",
    grape: "피노 누아", type: "red", tier: 2, shape: "burgundy", cap: "#2a3a55",
    fact: "소비뇽 블랑으로 이름난 클라우디 베이가 말버러의 서늘한 남쪽 계곡 포도로 만드는 피노 누아.",
    quiz: [
      {
        q: "1770년 이 바다에 '흐린 만(Cloudy Bay)'이라는 이름을 붙인 탐험가는?",
        a: "영국의 제임스 쿡 선장",
        x: ["네덜란드의 아벌 타스만", "프랑스의 뒤몽 뒤르빌", "포르투갈의 마젤란"],
      },
    ],
  }),
  mk({
    ...MARL, id: "sh2_seresin_sb", name: "세레신 소비뇽 블랑", original: "Seresin Sauvignon Blanc", producer: "세레신 에스테이트",
    grape: "소비뇽 블랑", type: "white", tier: 2, shape: "bordeaux", cap: "#e6e2d6",
    fact: "마이클 세레신이 1990년대 초 말버러에 세운 와이너리의 소비뇽 블랑. 유기농·바이오다이내믹 농법으로 포도를 기르고, 라벨에 손바닥 문양을 넣는다.",
    quiz: [{ q: "세레신 에스테이트를 세운 마이클 세레신의 본업은?", a: "영화 촬영감독", x: ["건축가", "럭비 국가대표", "오페라 가수"] }],
  }),
  mk({
    ...MARL, id: "sh2_nautilus_sb", name: "노틸러스 소비뇽 블랑", original: "Nautilus Estate Sauvignon Blanc", producer: "노틸러스 에스테이트",
    grape: "소비뇽 블랑", type: "white", tier: 2, shape: "bordeaux", cap: "#1f3a5f",
    fact: "앵무조개(노틸러스) 껍데기를 상징으로 쓰는 말버러 와이너리의 소비뇽 블랑.",
    quiz: [{ q: "노틸러스 에스테이트를 소유한 힐스미스 가문이 호주에서 운영하는 와이너리는?", a: "얄룸바", x: ["펜폴즈", "헨쉬키", "제이콥스 크릭"] }],
  }),
  mk({
    ...MARL, id: "sh2_matua_sb", name: "마투아 소비뇽 블랑", original: "Matua Marlborough Sauvignon Blanc", producer: "마투아",
    grape: "소비뇽 블랑", type: "white", tier: 2, shape: "bordeaux", cap: "#dfe3e6",
    fact: "로스·빌 스펜스 형제가 1974년 오클랜드에서 세운 와이너리. 지금은 말버러 소비뇽 블랑으로 널리 알려진 대중 브랜드다.",
    quiz: [
      {
        q: "마투아가 1974년 세운 뉴질랜드 와인 역사의 기록은?",
        a: "뉴질랜드 최초의 소비뇽 블랑",
        x: ["뉴질랜드 최초의 스크루캡 와인", "뉴질랜드 최초의 피노 누아", "뉴질랜드 최초의 스파클링 와인"],
      },
    ],
  }),
  mk({
    ...MARL, id: "sh2_giesen_sb", name: "기젠 소비뇽 블랑", original: "Giesen Marlborough Sauvignon Blanc", producer: "기젠",
    grape: "소비뇽 블랑", type: "white", tier: 1, shape: "bordeaux", cap: "#d7d7d0",
    fact: "1981년 세 형제가 뉴질랜드에 세운 가족 와이너리의 소비뇽 블랑. 알코올을 뺀 '0%' 와인으로도 이름을 알렸다.",
    quiz: [{ q: "기젠을 세운 테오·알렉스·마르셀 기젠 형제의 고향 나라는?", a: "독일", x: ["네덜란드", "오스트리아", "스위스"] }],
  }),
  mk({
    ...MARL, id: "sh2_spyvalley_sb", name: "스파이 밸리 소비뇽 블랑", original: "Spy Valley Sauvignon Blanc", producer: "스파이 밸리",
    grape: "소비뇽 블랑", type: "white", tier: 2, shape: "bordeaux", cap: "#23676a",
    fact: "말버러 와이하오파이 계곡의 가족 와이너리가 만드는 소비뇽 블랑.",
    quiz: [
      {
        q: "스파이 밸리라는 이름은 어디서 왔을까?",
        a: "계곡 안에 있는 정보기관의 위성 통신 기지",
        x: ["전쟁 때 스파이가 숨었던 동굴", "창업자가 쓴 첩보 소설", "금을 몰래 캐던 광부 이야기"],
      },
    ],
  }),
  mk({
    ...MARL, id: "sh2_astrolabe_sb", name: "아스트롤라베 소비뇽 블랑", original: "Astrolabe Marlborough Sauvignon Blanc", producer: "아스트롤라베",
    grape: "소비뇽 블랑", type: "white", tier: 3, shape: "bordeaux", cap: "#1a2330",
    fact: "말버러의 작은 가족 와이너리 아스트롤라베가 만드는 소비뇽 블랑.",
    quiz: [
      {
        q: "아스트롤라베라는 이름은 무엇에서 왔을까?",
        a: "뉴질랜드 해안을 탐사한 프랑스 탐험가 뒤몽 뒤르빌의 배",
        x: ["제임스 쿡 선장의 배", "마오리족의 전통 카누", "창업자가 몰던 요트"],
      },
    ],
  }),
  mk({
    ...MARL, id: "sh2_closhenri_sb", name: "클로 앙리 소비뇽 블랑", original: "Clos Henri Sauvignon Blanc", producer: "클로 앙리",
    grape: "소비뇽 블랑", type: "white", tier: 2, shape: "bordeaux", cap: "#e3d7b3",
    fact: "프랑스 루아르의 앙리 부르주아 가문이 2000년 말버러에 세운 와이너리의 소비뇽 블랑.",
    quiz: [{ q: "클로 앙리를 세운 부르주아 가문이 대대로 와인을 만들어 온 프랑스 산지는?", a: "상세르", x: ["샤블리", "보르도", "알자스"] }],
  }),
  mk({
    ...MARL, id: "sh2_babich_blacklabel", name: "바비치 블랙 라벨 소비뇽 블랑", original: "Babich Black Label Sauvignon Blanc", producer: "바비치",
    grape: "소비뇽 블랑", type: "white", tier: 3, shape: "bordeaux", cap: "#141414",
    fact: "1916년 문을 연 뉴질랜드의 오래된 가족 와이너리 바비치의 말버러 소비뇽 블랑.",
    quiz: [{ q: "바비치를 세운 요십 바비치는 어디에서 건너온 이민자일까?", a: "크로아티아 달마치아", x: ["이탈리아 시칠리아", "그리스 크레타", "스페인 갈리시아"] }],
  }),
  mk({
    ...MARL, id: "sh2_tohu_sb", name: "토후 소비뇽 블랑", original: "Tohu Sauvignon Blanc", producer: "토후 와인즈",
    grape: "소비뇽 블랑", type: "white", tier: 3, shape: "bordeaux", cap: "#2f4a2c",
    fact: "토후 와인즈가 말버러의 포도로 만드는 상큼한 소비뇽 블랑.",
    quiz: [
      {
        q: "토후 와인즈가 세계 와인 역사에서 가진 기록은?",
        a: "세계 최초의 마오리족 소유 와인 브랜드",
        x: ["세계 최초의 비건 인증 와이너리", "뉴질랜드 최초의 스크루캡 와인", "남반구 최초의 탄소 중립 와이너리"],
      },
    ],
  }),
  mk({
    id: "sh2_pegasusbay_riesling", name: "페가수스 베이 리슬링", original: "Pegasus Bay Riesling", producer: "페가수스 베이",
    country: "뉴질랜드", area: "노스 캔터베리", sub: "와이파라 밸리", grape: "리슬링", type: "white", tier: 3, shape: "flute", cap: "#c9a24e",
    fact: "도널드슨 가족이 크라이스트처치 북쪽 와이파라에서 운영하는 와이너리의 리슬링. 살짝 단맛이 남는 풍부한 스타일이다.",
    quiz: [{ q: "페가수스 베이를 세운 아이번 도널드슨의 본업은?", a: "신경과 의사", x: ["변호사", "오페라 가수", "럭비 선수"] }],
  }),
  mk({
    id: "sh2_kumeuriver_mates", name: "쿠메우 리버 메이츠 빈야드 샤르도네", original: "Kumeu River Mate's Vineyard Chardonnay", producer: "쿠메우 리버",
    country: "뉴질랜드", area: "오클랜드", sub: "쿠메우", grape: "샤르도네", type: "white", tier: 3, shape: "burgundy", cap: "#d8c9a0",
    fact: "크로아티아에서 건너온 브라이코비치 가문이 오클랜드 근교 쿠메우에서 만드는 샤르도네. 뉴질랜드 샤르도네의 기준으로 꼽힌다.",
    quiz: [
      {
        q: "쿠메우 리버 메이츠 빈야드의 '메이트(Mate)'는 누구일까?",
        a: "지금 와이너리를 이끄는 형제들의 아버지 마테 브라이코비치",
        x: ["포도밭을 함께 일군 친구들", "첫 포도밭을 판 영국인 농부", "마오리족 추장"],
      },
    ],
  }),
  mk({
    id: "sh2_trinityhill_homage", name: "트리니티 힐 오마주 시라", original: "Trinity Hill Homage Syrah", producer: "트리니티 힐",
    country: "뉴질랜드", area: "호크스 베이", sub: "김블렛 그래블스", grape: "시라", type: "red", tier: 3, shape: "burgundy", cap: "#1b1b1b",
    fact: "호크스 베이의 자갈밭 김블렛 그래블스에서 나오는 트리니티 힐의 최상급 시라. 뉴질랜드 시라의 가능성을 보여 준 와인이다.",
    quiz: [
      {
        q: "트리니티 힐 오마주 시라는 누구에게 바치는 '오마주'일까?",
        a: "론의 폴 자불레 에네를 이끈 제라르 자불레",
        x: ["에르미타주의 제라르 샤브", "코트 로티의 마르셀 기갈", "샤토뇌프 뒤 파프의 자크 페랭"],
      },
    ],
  }),
  mk({
    id: "sh2_missionestate_syrah", name: "미션 에스테이트 시라", original: "Mission Estate Syrah", producer: "미션 에스테이트",
    country: "뉴질랜드", area: "호크스 베이", grape: "시라", type: "red", tier: 3, shape: "burgundy", cap: "#5a1a22",
    fact: "1851년 세워져 지금까지 이어지는, 뉴질랜드에서 가장 오래된 와이너리의 시라.",
    quiz: [
      {
        q: "미션 에스테이트를 세운 사람들은?",
        a: "프랑스 가톨릭 선교사(마리스트회)",
        x: ["영국 성공회 목사", "크로아티아 이민자", "독일 루터교 이민자"],
      },
    ],
  }),
  mk({
    id: "sh2_twopaddocks_pn", name: "투 패덕스 피노 누아", original: "Two Paddocks Pinot Noir", producer: "투 패덕스",
    country: "뉴질랜드", area: "센트럴 오타고", grape: "피노 누아", type: "red", tier: 2, shape: "burgundy", cap: "#394a8c",
    fact: "뉴질랜드에서 자란 배우 샘 닐이 센트럴 오타고에 세운 와이너리의 피노 누아. 작은 목초지 두 곳에서 시작해 이런 이름이 붙었다.",
    quiz: [{ q: "투 패덕스를 세운 배우 샘 닐의 대표 출연작은?", a: "쥬라기 공원", x: ["반지의 제왕", "타이타닉", "매트릭스"] }],
  }),

  // ───────── 칠레
  mk({
    ...CL, id: "sh2_montes_alphasyrah", name: "몬테스 알파 시라", original: "Montes Alpha Syrah", producer: "몬테스",
    area: "콜차과 밸리", grape: "시라", type: "red", tier: 1, shape: "bordeaux", cap: "#2a1a14",
    fact: "한국에서 가장 사랑받는 칠레 와인 라인 몬테스 알파의 시라. 콜차과 밸리의 따뜻한 햇볕을 받은 포도로 진하게 빚는다.",
    quiz: [{ q: "몬테스가 아팔타 와이너리의 오크통 숙성고에 늘 틀어 두는 음악은?", a: "그레고리오 성가", x: ["모차르트 교향곡", "칠레 민속 음악", "재즈"] }],
  }),
  mk({
    ...CL, id: "sh2_carmin_peumo", name: "콘차 이 토로 카르민 데 페우모", original: "Carmín de Peumo", maker: "Concha y Toro", producer: "콘차 이 토로",
    area: "카차포알 밸리", sub: "페우모", grape: "카르메네르·카베르네 소비뇽·카베르네 프랑", type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#8e1520",
    fact: "콘차 이 토로가 페우모 포도밭에서 가장 좋은 구획의 카르메네르로 만드는 아이콘 와인. 칠레 최고의 카르메네르로 꼽힌다.",
    quiz: [{ q: "카르민 데 페우모의 '카르민(Carmín)'은 스페인어로 무슨 뜻일까?", a: "진홍색", x: ["작은 정원", "붉은 돌", "오래된 나무"] }],
  }),
  mk({
    ...CL, id: "sh2_terrunyo_carmenere", name: "콘차 이 토로 테루뇨 카르메네르", original: "Terrunyo Carmenère", maker: "Concha y Toro", producer: "콘차 이 토로",
    area: "카차포알 밸리", sub: "페우모", grape: "카르메네르", type: "red", tier: 2, shape: "bordeaux", cap: "#5a1a22",
    fact: "콘차 이 토로가 포도밭마다의 개성을 살리려 만든 테루뇨 라인의 카르메네르. 카르메네르 명산지 페우모의 포도로 빚는다.",
    quiz: [
      {
        q: "콘차 이 토로 테루뇨라는 이름에 담긴 뜻은?",
        a: "'떼루아'를 뜻하는 스페인어 테루뇨(terruño)",
        x: ["마푸체어로 '붉은 땅'", "창업자 딸의 이름", "라틴어로 '세 개의 언덕'"],
      },
    ],
  }),
  mk({
    ...CL, id: "sh2_almaviva_epu", name: "알마비바 에푸", original: "EPU", maker: "Almaviva", producer: "알마비바",
    area: "마이포 밸리", sub: "푸엔테 알토", grape: "카베르네 소비뇽·카르메네르·카베르네 프랑", type: "red", tier: 2, shape: "bordeaux", cap: "#1b1b1b",
    fact: "칠레 콘차 이 토로와 보르도 무통 로칠드의 합작 와인 알마비바가 만드는 세컨드 와인.",
    quiz: [{ q: "알마비바 에푸의 '에푸(EPU)'는 마푸체어로 무슨 뜻일까?", a: "둘(2)", x: ["하늘", "독수리", "강"] }],
  }),
  mk({
    ...CL, id: "sh2_altair", name: "알타이르", original: "Altaïr", maker: "Viña Altaïr", producer: "산 페드로", producerQ: true,
    area: "카차포알 밸리", grape: "카베르네 소비뇽·카르메네르", type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1f2e",
    fact: "칠레 산 페드로가 보르도의 명가와 손잡고 안데스 기슭 카차포알 밸리 고지대에 일군 포도밭의 아이콘 블렌드.",
    quiz: [
      { q: "알타이르를 칠레 산 페드로와 처음 함께 만든 보르도 생테밀리옹의 샤토는?", a: "샤토 다소", x: ["샤토 슈발 블랑", "샤토 오존", "샤토 파비"] },
      { q: "알타이르라는 이름은 무엇에서 왔을까?", a: "독수리자리에서 가장 밝은 별", x: ["안데스의 봉우리", "마푸체 신화의 신", "칠레 독립 영웅의 말"] },
    ],
  }),
  mk({
    ...CL, id: "sh2_aquitania_lazuli", name: "아키타니아 라줄리 카베르네 소비뇽", original: "Lazuli Cabernet Sauvignon", maker: "Viña Aquitania", producer: "비냐 아키타니아",
    area: "마이포 밸리", grape: "카베르네 소비뇽", type: "red", tier: 3, shape: "bordeaux", cap: "#1f3a5f",
    fact: "보르도의 폴 퐁탈리에·브뤼노 프라와 칠레의 펠리페 데 솔미니악이 1990년 산티아고 근교에 세운 와이너리의 카베르네 소비뇽.",
    quiz: [
      {
        q: "비냐 아키타니아를 함께 세운 폴 퐁탈리에가 오랫동안 총지배인으로 이끈 보르도 1등급 샤토는?",
        a: "샤토 마고",
        x: ["샤토 라투르", "샤토 오브리옹", "샤토 무통 로칠드"],
      },
      {
        q: "아키타니아라는 이름이 가리키는 곳은?",
        a: "보르도가 있는 프랑스 남서부 아키텐 지방",
        x: ["스페인 바스크 지방", "칠레 남부의 섬", "이탈리아 토스카나의 옛 이름"],
      },
    ],
  }),
  mk({
    ...CL, id: "sh2_gatonegro_cs", name: "가토 네그로 카베르네 소비뇽", original: "Gato Negro Cabernet Sauvignon", producer: "산 페드로", producerQ: true,
    area: "센트럴 밸리", grape: "카베르네 소비뇽", type: "red", tier: 1, shape: "bordeaux", cap: "#141414",
    fact: "칠레 산 페드로가 만드는 데일리 와인 브랜드로, 세계 여러 나라에 수출되는 칠레 대표 대중 와인이다.",
    quiz: [{ q: "가토 네그로(Gato Negro)는 스페인어로 무슨 뜻일까?", a: "검은 고양이", x: ["검은 말", "검은 황소", "검은 독수리"] }],
  }),
  mk({
    ...CL, id: "sh2_cousinomacul_finisterrae", name: "쿠시뇨 마쿨 피니스 테라에", original: "Finis Terrae", maker: "Cousiño-Macul", producer: "쿠시뇨 마쿨",
    area: "마이포 밸리", grape: "카베르네 소비뇽·메를로", type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620",
    fact: "칠레의 역사적 와이너리 쿠시뇨 마쿨이 마이포 밸리 포도로 만드는 카베르네 소비뇽 중심의 프리미엄 블렌드.",
    quiz: [{ q: "피니스 테라에(Finis Terrae)는 라틴어로 무슨 뜻일까?", a: "땅끝(세상의 끝)", x: ["좋은 땅", "붉은 흙", "대지의 선물"] }],
  }),
  mk({
    ...CL, id: "sh2_santarita_triplec", name: "산타 리타 트리플 C", original: "Santa Rita Triple C", producer: "산타 리타",
    area: "마이포 밸리", grape: "카베르네 프랑·카베르네 소비뇽·카르메네르", type: "red", tier: 3, shape: "bordeaux", cap: "#7a1522",
    fact: "산타 리타가 마이포 밸리 포도로 만드는 프리미엄 블렌드. 칠레에서는 드물게 카베르네 프랑을 중심에 둔다.",
    quiz: [
      {
        q: "산타 리타 트리플 C라는 이름은 어디서 왔을까?",
        a: "C로 시작하는 세 품종을 섞어서",
        x: ["세 번에 나눠 수확해서", "세 창업자의 이니셜에서", "세 개 포도밭(Campo)의 포도를 섞어서"],
      },
    ],
  }),
  mk({
    ...CL, id: "sh2_ventisquero_pangea", name: "벤티스케로 판게아 시라", original: "Pangea Syrah", maker: "Ventisquero", producer: "벤티스케로",
    area: "콜차과 밸리", sub: "아팔타", grape: "시라", type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#2a1a14",
    fact: "칠레 벤티스케로가 호주 펜폴즈 출신 양조가 존 듀발과 함께 아팔타의 포도로 만드는 시라.",
    quiz: [
      {
        q: "벤티스케로 판게아라는 이름에 담긴 뜻은?",
        a: "대륙이 갈라지기 전 하나로 붙어 있던 초대륙",
        x: ["그리스 신화의 바다 여신", "마푸체어로 '높은 산'", "라틴어로 '모든 포도'"],
      },
    ],
  }),
  mk({
    ...CL, id: "sh2_losvascos_cs", name: "로스 바스코스 카베르네 소비뇽", original: "Los Vascos Cabernet Sauvignon", producer: "로스 바스코스",
    area: "콜차과 밸리", grape: "카베르네 소비뇽", type: "red", tier: 1, shape: "bordeaux", cap: "#1f2a38",
    fact: "콜차과 밸리의 로스 바스코스 와이너리가 만드는 카베르네 소비뇽. 보르도 1등급 샤토의 주인 가문이 칠레에서 처음 사들인 와이너리로 꼽힌다.",
    quiz: [
      {
        q: "로스 바스코스를 1988년 사들인, 보르도 1등급 샤토의 주인 가문은?",
        a: "샤토 라피트 로칠드의 로칠드 가문",
        x: ["샤토 마고의 멘첼로풀로스 가문", "샤토 오브리옹의 딜런 가문", "샤토 라투르의 피노 가문"],
      },
    ],
  }),

  // ───────── 아르헨티나
  mk({
    ...AR, id: "sh2_catena_alta", name: "카테나 알타 말벡", original: "Catena Alta Malbec", producer: "카테나 사파타",
    area: "멘도사", grape: "말벡", type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1b1b1b",
    fact: "카테나 사파타가 여러 고지대 포도밭에서 가장 좋은 구획만 골라 만드는 말벡.",
    quiz: [
      {
        q: "카테나 알타를 만드는 카테나 사파타의 와이너리 건물은 무엇을 본떠 지었을까?",
        a: "마야 문명의 피라미드",
        x: ["잉카의 태양 신전", "프랑스 보르도의 샤토", "스페인의 옛 수도원"],
      },
    ],
  }),
  mk({
    ...AR, id: "sh2_angelicazapata", name: "앙헬리카 사파타 말벡 알타", original: "Angélica Zapata Malbec Alta", maker: "Catena Zapata", producer: "카테나 사파타", producerQ: true,
    area: "멘도사", grape: "말벡", type: "red", tier: 2, shape: "bordeaux", cap: "#5a1a22",
    fact: "카테나 사파타가 고지대 포도밭의 말벡으로 만드는 와인. 오크통에서 오래 숙성해 단단하고 깊은 맛을 낸다.",
    quiz: [
      {
        q: "앙헬리카 사파타 말벡 알타의 '앙헬리카 사파타'는 누구일까?",
        a: "니콜라스 카테나의 어머니",
        x: ["니콜라스 카테나의 막내딸", "니콜라스 카테나의 아내", "멘도사 최초의 여성 양조가"],
      },
    ],
  }),
  mk({
    ...AR, id: "sh2_luca_malbec", name: "루카 말벡", original: "Luca Malbec", producer: "로라 카테나", producerQ: true,
    area: "멘도사", sub: "우코 밸리", grape: "말벡", type: "red", tier: 3, shape: "bordeaux", cap: "#2a1a14",
    fact: "카테나 가문의 로라 카테나가 우코 밸리 고지대 포도로 따로 만드는 개인 브랜드의 말벡.",
    quiz: [
      {
        q: "로라 카테나의 와인 브랜드 '루카'라는 이름은 누구에게서 왔을까?",
        a: "로라 카테나의 아들",
        x: ["니콜라스 카테나의 아버지", "이탈리아에서 온 1대 창업자", "첫 포도밭 주인"],
      },
    ],
  }),
  mk({
    ...AR, id: "sh2_donapaula_malbec", name: "도냐 파울라 에스테이트 말벡", original: "Doña Paula Estate Malbec", producer: "도냐 파울라",
    area: "멘도사", grape: "말벡", type: "red", tier: 2, shape: "bordeaux", cap: "#6a1822",
    fact: "칠레 산타 리타를 소유한 클라로 그룹이 멘도사에 세운 와이너리의 말벡.",
    quiz: [
      {
        q: "도냐 파울라라는 이름은 누구를 기린 것일까?",
        a: "칠레 독립 전쟁 때 병사 120명을 숨겨 준 파울라 하라케마다",
        x: ["창업자의 어머니", "멘도사의 수호성인", "아르헨티나 최초의 여성 양조가"],
      },
    ],
  }),
  mk({
    ...AR, id: "sh2_decero_malbec", name: "핀카 데세로 말벡", original: "Finca Decero Malbec Remolinos Vineyard", labelName: "Decero", producer: "핀카 데세로",
    area: "멘도사", sub: "루한 데 쿠요", grape: "말벡", type: "red", tier: 3, shape: "bordeaux", cap: "#23676a",
    fact: "멘도사 아그렐로의 빈 땅을 새로 개간해 일군 레몰리노스 포도밭에서 나오는 말벡.",
    quiz: [{ q: "핀카 데세로의 '데세로(Decero)'에 담긴 뜻은?", a: "맨땅에서부터(처음부터)", x: ["열 개의 언덕", "새벽 이슬", "하얀 바위"] }],
  }),
  mk({
    ...AR, id: "sh2_crios_malbec", name: "수사나 발보 크리오스 말벡", original: "Crios Malbec", maker: "Susana Balbo Wines", producer: "수사나 발보",
    area: "멘도사", grape: "말벡", type: "red", tier: 2, shape: "bordeaux", cap: "#7a1522",
    fact: "아르헨티나 여성 최초로 양조학 학위를 받은 수사나 발보가 만드는 말벡.",
    quiz: [{ q: "수사나 발보 크리오스의 '크리오스(Crios)'는 무슨 뜻일까?", a: "자녀들", x: ["새벽", "수정", "바람"] }],
  }),
  mk({
    ...AR, id: "sh2_santajulia_malbec", name: "산타 훌리아 말벡", original: "Santa Julia Malbec", maker: "Familia Zuccardi", producer: "수카르디", producerQ: true,
    area: "멘도사", grape: "말벡", type: "red", tier: 2, shape: "bordeaux", cap: "#b8562a",
    fact: "멘도사의 수카르디 가문이 만드는 데일리 와인 브랜드. 유기농 라인으로도 잘 알려져 있다.",
    quiz: [
      {
        q: "산타 훌리아라는 이름의 주인공은?",
        a: "수카르디 가문의 딸 훌리아 수카르디",
        x: ["멘도사의 수호성인", "창업자의 어머니", "이탈리아 고향 마을의 성녀"],
      },
    ],
  }),
  mk({
    ...AR, id: "sh2_vinacobos_bramare", name: "비냐 코보스 브라마레 말벡", original: "Bramare Malbec", maker: "Viña Cobos", producer: "비냐 코보스",
    area: "멘도사", grape: "말벡", type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#1b1b1b",
    fact: "캘리포니아에서 이름난 양조가가 아르헨티나 친구들과 1999년 멘도사에 세운 비냐 코보스의 말벡.",
    quiz: [{ q: "비냐 코보스를 세운 미국의 유명 양조가는?", a: "폴 홉스", x: ["로버트 몬다비", "하이디 배럿", "헬렌 털리"] }],
  }),
  mk({
    ...AR, id: "sh2_yacochuya", name: "야코추야", original: "Yacochuya", maker: "Yacochuya de Michel Rolland", producer: "야코추야",
    area: "살타", sub: "카파야테", grape: "말벡·카베르네 소비뇽", type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#2a0f14",
    fact: "살타 카파야테의 해발 2,000m 안팎 고지대 포도로 만드는 진한 말벡. 살타의 에차르트 가문과 보르도의 유명 컨설턴트가 함께 만든다.",
    quiz: [{ q: "야코추야를 함께 만드는 보르도의 유명 양조 컨설턴트는?", a: "미셸 롤랑", x: ["에밀 페이노", "스테판 드르농쿠르", "드니 뒤부르디외"] }],
  }),
  mk({
    ...AR, id: "sh2_colome_torrontes", name: "콜로메 토론테스", original: "Colomé Torrontés", producer: "보데가 콜로메",
    area: "살타", sub: "칼차키 밸리", grape: "토론테스", type: "white", tier: 3, shape: "bordeaux", glass: "flint", cap: "#e3d7b3",
    fact: "살타 칼차키 계곡의 고지대 포도밭에서 나오는 토론테스. 꽃향이 화사한 아르헨티나 대표 화이트 품종이다.",
    quiz: [{ q: "보데가 콜로메를 2001년 사들여 되살린 스위스 사업가는?", a: "도널드 헤스", x: ["메인데르트 폰", "알렉산데르 비크", "에두아르도 채드윅"] }],
  }),
  mk({
    ...AR, id: "sh2_noemia", name: "노에미아", original: "Noemía", maker: "Bodega Noemía de Patagonia", producer: "보데가 노에미아",
    area: "파타고니아", sub: "리오 네그로", grape: "말벡", type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#1b1b1b",
    fact: "파타고니아 리오 네그로에서 1930년대에 심은 오래된 말벡 포도나무로 아주 적은 양만 만드는 와인.",
    quiz: [
      {
        q: "노에미아라는 이름은 누구에게서 왔을까?",
        a: "와이너리를 함께 세운 이탈리아 친차노 가문의 노에미 마로네 친차노",
        x: ["원주민 공주의 전설", "첫 포도밭 주인의 아내", "파타고니아의 수호성인"],
      },
    ],
  }),
  mk({
    ...AR, id: "sh2_findelmundo_malbec", name: "핀 델 문도 레세르바 말벡", original: "Fin del Mundo Reserva Malbec", maker: "Bodega del Fin del Mundo", producer: "보데가 델 핀 델 문도",
    area: "파타고니아", sub: "네우켄", grape: "말벡", type: "red", tier: 3, shape: "bordeaux", cap: "#1f3a5f",
    fact: "파타고니아 네우켄의 사막을 개간해 포도밭을 일군 와이너리의 말벡. 바람이 세고 일교차가 커 색이 짙은 와인이 나온다.",
    quiz: [{ q: "'핀 델 문도(Fin del Mundo)'는 스페인어로 무슨 뜻일까?", a: "세상의 끝", x: ["바람의 땅", "남쪽의 별", "하얀 사막"] }],
  }),
  mk({
    ...AR, id: "sh2_schroeder_saurus", name: "파밀리아 슈뢰더 사우루스 말벡", original: "Saurus Malbec", maker: "Familia Schroeder", producer: "파밀리아 슈뢰더",
    area: "파타고니아", sub: "네우켄", grape: "말벡", type: "red", tier: 3, shape: "bordeaux", cap: "#394a8c",
    fact: "파타고니아 네우켄 사막 고원에 포도밭을 일군 가족 와이너리 파밀리아 슈뢰더의 말벡.",
    quiz: [
      {
        q: "파밀리아 슈뢰더의 와인 이름 '사우루스'는 무엇에서 왔을까?",
        a: "와이너리를 짓다가 발견한 공룡 화석",
        x: ["창업자의 별명", "포도밭에 사는 도마뱀", "옛 석유 채굴 장비"],
      },
    ],
  }),

  // ───────── 남아프리카공화국
  mk({
    ...ZA, id: "sh2_rustenvrede_estate", name: "루스트 엔 브레데 에스테이트", original: "Rust en Vrede Estate", producer: "루스트 엔 브레데",
    sub: "스텔렌보스", grape: "카베르네 소비뇽·시라·메를로", type: "red", tier: 3, shape: "bordeauxHeavy", cap: "#2a0f14",
    fact: "레드 와인만 만드는 스텔렌보스 헬데르베르그 산자락의 와이너리. 1977년 럭비 국가대표 출신 얀니 엥겔브레흐트가 사들였다.",
    quiz: [{ q: "루스트 엔 브레데(Rust en Vrede)는 네덜란드어로 무슨 뜻일까?", a: "휴식과 평화", x: ["붉은 언덕", "바람과 바다", "오래된 방앗간"] }],
  }),
  mk({
    ...ZA, id: "sh2_delairegraff_chardonnay", name: "델레어 그라프 뱅훅 리저브 샤르도네", original: "Delaire Graff Banghoek Reserve Chardonnay", labelName: "Banghoek Reserve", maker: "Delaire Graff", producer: "델레어 그라프",
    sub: "스텔렌보스", grape: "샤르도네", type: "white", tier: 2, shape: "burgundy", cap: "#d6b45c",
    fact: "스텔렌보스와 프란스후크를 잇는 헬스호흐테 고개 꼭대기의 와이너리. 호텔과 미술 작품으로도 유명하다.",
    quiz: [{ q: "델레어 그라프를 소유한 로런스 그라프의 본업은?", a: "다이아몬드 보석상", x: ["호텔 체인 경영자", "경주마 조련사", "건축가"] }],
  }),
  mk({
    ...ZA, id: "sh2_beyerskloof_pinotage", name: "베이어스클루프 피노타주", original: "Beyerskloof Pinotage", producer: "베이어스클루프",
    grape: "피노타주", type: "red", tier: 2, shape: "bordeaux", cap: "#7a1522",
    fact: "'피노타주의 왕'으로 불리는 양조가 베이어스 트뤼터가 세운 피노타주 전문 와이너리의 데일리 와인.",
    quiz: [{ q: "베이어스클루프를 세운 베이어스 트뤼터가 오랫동안 양조를 책임졌던 스텔렌보스의 명가는?", a: "카논콥", x: ["미어러스트", "베르겔레겐", "루스텐버그"] }],
  }),
  mk({
    ...ZA, id: "sh2_fairview_goatsdoroam", name: "페어뷰 고츠 두 롬 레드", original: "Goats do Roam Red", maker: "Fairview", producer: "페어뷰",
    grape: "시라·그르나슈·무르베드르", type: "red", tier: 2, shape: "bordeaux", cap: "#c9a24e",
    fact: "염소 치즈로도 유명한 페어뷰 농장에서 염소들이 포도밭에 들어가 잘 익은 포도만 골라 먹었다는 일화에서 이름을 지은 블렌드.",
    quiz: [{ q: "고츠 두 롬이라는 이름이 소리를 흉내 낸 프랑스 와인 산지는?", a: "코트 뒤 론", x: ["샤토뇌프 뒤 파프", "코트 로티", "코트 드 뉘"] }],
  }),
  mk({
    ...ZA, id: "sh2_kenforrester_fmc", name: "켄 포레스터 더 FMC 슈냉 블랑", original: "The FMC", maker: "Ken Forrester", producer: "켄 포레스터",
    sub: "스텔렌보스", grape: "슈냉 블랑", type: "white", tier: 3, shape: "burgundy", cap: "#b8942e",
    fact: "'미스터 슈냉'으로 불리는 켄 포레스터가 스텔렌보스의 오래된 슈냉 블랑 나무 포도로 만드는 최상급 화이트.",
    quiz: [
      {
        q: "켄 포레스터 더 FMC의 'FMC'는 공식적으로 무엇의 약자일까?",
        a: "포레스터·마이너트 슈냉(Forrester Meinert Chenin)",
        x: ["파인 머추어 슈냉(Fine Mature Chenin)", "퍼스트 머스캣 퀴베(First Muscat Cuvée)", "프렌치 모델 셀러(French Model Cellar)"],
      },
    ],
  }),
  mk({
    ...ZA, id: "sh2_demorgenzon_chenin", name: "데모르헨존 리저브 슈냉 블랑", original: "DeMorgenzon Reserve Chenin Blanc", producer: "데모르헨존",
    sub: "스텔렌보스", grape: "슈냉 블랑", type: "white", tier: 3, shape: "burgundy", cap: "#e3d7b3",
    fact: "스텔렌보스 언덕의 와이너리 데모르헨존이 오래된 슈냉 블랑 나무로 만드는 화이트. 이름은 '아침 햇살'이라는 뜻이다.",
    quiz: [{ q: "데모르헨존이 포도밭과 셀러에 밤낮으로 틀어 두는 음악은?", a: "바로크 음악", x: ["재즈", "아프리카 전통 북 연주", "록 음악"] }],
  }),
  mk({
    ...ZA, id: "sh2_porseleinberg", name: "포르셀레인베르흐", original: "Porseleinberg", producer: "부켄하우츠클루프", producerQ: true,
    sub: "스와틀랜드", grape: "시라", type: "red", tier: 3, shape: "burgundy", cap: "#1b1b1b",
    fact: "부켄하우츠클루프가 스와틀랜드에서 유기농으로 기른 시라로 만드는 와인. 양조가가 농장에 둔 옛 인쇄기로 라벨을 직접 찍는다.",
    quiz: [{ q: "포르셀레인베르흐(Porseleinberg)는 아프리칸스어로 무슨 뜻일까?", a: "도자기 산", x: ["은빛 강", "바람의 언덕", "흰 모래밭"] }],
  }),
  mk({
    ...ZA, id: "sh2_sadie_palladius", name: "사디 패밀리 팔라디우스", original: "Palladius", maker: "Sadie Family", producer: "사디 패밀리",
    sub: "스와틀랜드", grape: "슈냉 블랑·그르나슈 블랑·클레레트", type: "white", tier: 3, shape: "burgundy", cap: "#c9b27a",
    fact: "에번 사디가 스와틀랜드 곳곳의 오래된 포도나무 여러 품종을 섞어 만드는 화이트 블렌드. 남아공 화이트 블렌드의 기준을 세웠다.",
    quiz: [
      {
        q: "사디 패밀리의 두 대표 와인 '팔라디우스'와 '콜루멜라', 두 이름의 공통점은?",
        a: "둘 다 농업에 관한 책을 쓴 고대 로마 작가",
        x: ["둘 다 로마 황제", "둘 다 그리스 신화의 신", "둘 다 스와틀랜드의 산 이름"],
      },
    ],
  }),
  mk({
    ...ZA, id: "sh2_allesverloren_tintabarocca", name: "알레스페를로렌 틴타 바로카", original: "Allesverloren Tinta Barocca", producer: "알레스페를로렌",
    sub: "스와틀랜드", grape: "틴타 바로카", type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22",
    fact: "스와틀랜드 리베크 카스텔의 오래된 가족 농장이 포르투갈 품종으로 만드는 레드. 포트 스타일 주정강화 와인으로도 유명하다.",
    quiz: [{ q: "알레스페를로렌(Allesverloren)이라는 농장 이름의 뜻은?", a: "모든 것을 잃었다", x: ["끝없는 포도밭", "잃어버린 양", "늦은 수확"] }],
  }),
  mk({
    ...ZA, id: "sh2_grootconstantia_gouverneurs", name: "그루트 콘스탄시아 가버너스 리저브", original: "Groot Constantia Gouverneurs Reserve", producer: "그루트 콘스탄시아",
    sub: "콘스탄시아", grape: "카베르네 소비뇽·메를로·카베르네 프랑", type: "red", tier: 2, shape: "bordeaux", cap: "#1f2a38",
    fact: "1685년 세워진, 남아공에서 가장 오래된 와인 농장 그루트 콘스탄시아의 보르도 블렌드.",
    quiz: [
      {
        q: "그루트 콘스탄시아 농장을 세운 사람은?",
        a: "케이프 총독 시몬 판 데르 스텔",
        x: ["케이프타운을 세운 얀 판 리베크", "시몬의 아들 빌럼 아드리안 판 데르 스텔", "광산 재벌 세실 로즈"],
      },
    ],
  }),
  mk({
    ...ZA, id: "sh2_kleinconstantia_sb", name: "클라인 콘스탄시아 소비뇽 블랑", original: "Klein Constantia Estate Sauvignon Blanc", producer: "클라인 콘스탄시아",
    sub: "콘스탄시아", grape: "소비뇽 블랑", type: "white", tier: 3, shape: "bordeaux", cap: "#dfe3e6",
    fact: "뱅 드 콩스탕스로 유명한 클라인 콘스탄시아가 바닷바람이 부는 콘스탄시아 언덕에서 만드는 소비뇽 블랑.",
    quiz: [
      {
        q: "클라인 콘스탄시아와 그루트 콘스탄시아는 원래 어떤 관계였을까?",
        a: "1685년 세워진 하나의 콘스탄시아 농장이 나뉜 것",
        x: ["두 형제가 따로 세운 농장", "한 농장이 다른 농장을 사들여 이름을 바꾼 것", "서로 관계없이 이름만 비슷한 농장"],
      },
    ],
  }),
  mk({
    ...ZA, id: "sh2_boschendal_1685", name: "보스헨달 1685 샤르도네", original: "Boschendal 1685 Chardonnay", producer: "보스헨달",
    grape: "샤르도네", type: "white", tier: 2, shape: "burgundy", cap: "#d8c9a0",
    fact: "프랑스 위그노 이주민이 개척한 프란스후크 들머리의 역사적 농장 보스헨달의 샤르도네.",
    quiz: [
      {
        q: "보스헨달 1685의 '1685'는 무엇을 뜻할까?",
        a: "보스헨달 농장이 처음 세워진 해",
        x: ["첫 와인을 수출한 해", "포도밭의 해발 고도(m)", "농장에 심은 포도나무 수"],
      },
    ],
  }),
  mk({
    ...ZA, id: "sh2_simonsig_kaapsevonkel", name: "시몬시그 카프세 폰켈 브뤼", original: "Simonsig Kaapse Vonkel Brut", producer: "시몬시그",
    sub: "스텔렌보스", grape: "샤르도네·피노 누아·피노 뫼니에", type: "sparkling", tier: 2, shape: "champagne", cap: "#b8942e",
    fact: "1971년 프란스 말란이 만든 남아공 최초의 병 속 2차 발효 스파클링. 남아공 '캡 클라시크'의 출발점이다.",
    quiz: [{ q: "'카프세 폰켈(Kaapse Vonkel)'은 아프리칸스어로 무슨 뜻일까?", a: "케이프의 반짝임", x: ["케이프의 별", "바다의 거품", "금빛 이슬"] }],
  }),
  mk({
    ...ZA, id: "sh2_ernieels_signature", name: "어니 엘스 시그니처", original: "Ernie Els Signature", producer: "어니 엘스 와인즈",
    sub: "스텔렌보스", grape: "카베르네 소비뇽·메를로·카베르네 프랑", type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#141414",
    fact: "남아공 출신 세계적 스포츠 스타가 스텔렌보스 헬데르베르그 산자락에 세운 와이너리의 보르도 블렌드.",
    quiz: [{ q: "어니 엘스 와인즈를 세운 어니 엘스는 어떤 종목의 스타일까?", a: "골프", x: ["럭비", "크리켓", "테니스"] }],
  }),
  mk({
    ...ZA, id: "sh2_glenelly_ladymay", name: "글레넬리 레이디 메이", original: "Lady May", maker: "Glenelly", producer: "글레넬리",
    sub: "스텔렌보스", grape: "카베르네 소비뇽·프티 베르도", type: "red", tier: 3, shape: "bordeaux", cap: "#5a2a5e",
    fact: "보르도 명가를 이끌던 메엘리안 드 랑크생이 여든 가까운 나이에 스텔렌보스에 세운 와이너리의 카베르네 소비뇽 중심 블렌드. 이름은 그녀에게서 왔다.",
    quiz: [
      {
        q: "글레넬리를 세운 메엘리안 드 랑크생이 2007년까지 이끌었던 보르도 포이약의 2등급 샤토는?",
        a: "샤토 피숑 롱그빌 콩테스 드 랄랑드",
        x: ["샤토 피숑 바롱", "샤토 린치 바주", "샤토 퐁테 카네"],
      },
    ],
  }),
  mk({
    ...ZA, id: "sh2_lanzerac_pinotage", name: "란제락 피노타주", original: "Lanzerac Pinotage", producer: "란제락",
    sub: "스텔렌보스", grape: "피노타주", type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822",
    fact: "스텔렌보스의 역사적 농장이자 호텔로 유명한 란제락의 피노타주.",
    quiz: [
      {
        q: "란제락이 1961년 남긴 와인 역사의 기록은?",
        a: "라벨에 '피노타주'라는 품종 이름을 처음 적은 와인을 냈다",
        x: ["남아공 최초로 스크루캡을 썼다", "남아공 최초의 로제 와인을 냈다", "남아공 최초로 유기농 인증을 받았다"],
      },
    ],
  }),
  mk({
    ...ZA, id: "sh2_diemersfontein_pinotage", name: "디머스폰테인 피노타주", original: "Diemersfontein Pinotage", producer: "디머스폰테인",
    sub: "웰링턴", grape: "피노타주", type: "red", tier: 3, shape: "bordeaux", cap: "#3a2414",
    fact: "케이프타운 북동쪽 웰링턴의 와이너리 디머스폰테인이 만드는 피노타주. 오크 향이 진하고 부드러운 스타일로 인기를 끌었다.",
    quiz: [{ q: "디머스폰테인이 처음 선보여 유행시킨 피노타주 스타일의 별명은?", a: "커피 피노타주", x: ["바닐라 피노타주", "스모크 피노타주", "체리 피노타주"] }],
  }),

  // ───────── 우루과이
  mk({
    id: "sh2_bouza_tannat", name: "보데가 보우사 타나", original: "Bouza Tannat", maker: "Bodega Bouza", producer: "보데가 보우사",
    country: "우루과이", area: "몬테비데오", grape: "타나", type: "red", tier: 3, shape: "bordeaux", cap: "#1b1b1b",
    fact: "수도 몬테비데오 근교의 가족 경영 부티크 와이너리가 만드는 타나. 우루과이 타나의 품질을 알린 대표 주자다.",
    quiz: [{ q: "보데가 보우사가 와이너리 안에 모아 전시하는 것으로 유명한 것은?", a: "클래식 자동차", x: ["옛 와인 병", "가우초 말안장", "현대 미술 작품"] }],
  }),
  mk({
    id: "sh2_pisano_rpf", name: "피사노 RPF 타나", original: "Pisano RPF Tannat", producer: "피사노",
    country: "우루과이", area: "카나로네스", grape: "타나", type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22",
    fact: "이탈리아에서 건너온 이민자의 후손 피사노 가문이 카넬로네스에서 대를 이어 운영하는 와이너리의 타나.",
    quiz: [
      {
        q: "피사노 RPF의 'RPF'는 무엇의 약자일까?",
        a: "가족의 개인 소장 리저브(Reserva Personal de la Familia)",
        x: ["레드 프리미엄 프루트(Red Premium Fruit)", "리오 데 라 플라타 농장(Río de la Plata Finca)", "포도밭 구획 번호"],
      },
    ],
  }),

  // ───────── 일본 · 중국 · 인도
  mk({
    id: "sh2_mercian_kikyogahara", name: "샤토 메르시앙 기쿄가하라 메를로", original: "Château Mercian Kikyogahara Merlot", producer: "샤토 메르시앙",
    country: "일본", area: "나가노", sub: "시오지리", grape: "메를로", type: "red", tier: 3, shape: "bordeaux", cap: "#5a2a5e",
    fact: "나가노 시오지리의 기쿄가하라 고원 포도밭 메를로로 만드는 샤토 메르시앙의 대표 레드. 일본 메를로의 가능성을 세계에 알렸다.",
    quiz: [{ q: "샤토 메르시앙을 거느린 일본의 주류 기업 그룹은?", a: "기린", x: ["산토리", "아사히", "삿포로"] }],
  }),
  mk({
    id: "sh2_suntory_tomi", name: "산토리 토미", original: "Tomi", maker: "Suntory Tomi no Oka Winery", producer: "산토리",
    country: "일본", area: "야마나시", grape: "카베르네 소비뇽·메를로", type: "red", tier: 3, shape: "bordeaux", cap: "#1a2330",
    fact: "산토리가 야마나시 토미노오카 와이너리의 가장 좋은 포도만 골라 만드는 최상급 보르도 블렌드.",
    quiz: [{ q: "산토리 토미를 만드는 산토리가 1983년 사들인 보르도 생쥘리앵의 그랑 크뤼 샤토는?", a: "샤토 라그랑주", x: ["샤토 탈보", "샤토 베슈벨", "샤토 그뤼오 라로즈"] }],
  }),
  mk({
    id: "sh2_greatwall_cs", name: "그레이트 월 카베르네 소비뇽", original: "Great Wall Cabernet Sauvignon", producer: "그레이트 월(COFCO)",
    country: "중국", area: "허베이", grape: "카베르네 소비뇽", type: "red", tier: 2, shape: "bordeaux", cap: "#8e1520",
    fact: "만리장성을 뜻하는 이름의 중국 대표 와인 브랜드(长城). 1980년대 초 허베이에서 첫 와인을 냈다.",
    quiz: [{ q: "그레이트 월(长城) 와인을 소유한 중국 국영 기업은?", a: "중량그룹(COFCO)", x: ["장위", "칭다오 맥주", "구이저우 마오타이"] }],
  }),
  mk({
    id: "sh2_gracevineyard_chairmans", name: "그레이스 빈야드 체어맨스 리저브", original: "Grace Vineyard Chairman's Reserve", producer: "그레이스 빈야드(怡园)",
    country: "중국", area: "산시", grape: "카베르네 소비뇽·메를로", type: "red", tier: 3, shape: "bordeaux", cap: "#1f2238",
    fact: "홍콩 사업가가 1997년 중국 산시(山西)성에 세운 가족 와이너리 그레이스 빈야드의 최상급 레드.",
    quiz: [{ q: "그레이스 빈야드의 중국어 이름 '怡园(이위안)'의 뜻은?", a: "기쁨의 정원", x: ["황금 언덕", "푸른 강", "용의 숲"] }],
  }),
  mk({
    id: "sh2_helanqingxue_jiabeilan", name: "허란칭쉐 자베이란", original: "Jia Bei Lan", maker: "Helan Qingxue", producer: "허란칭쉐(贺兰晴雪)",
    country: "중국", area: "닝샤", grape: "카베르네 소비뇽·메를로", type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620",
    fact: "닝샤 허란산 기슭의 작은 와이너리가 만드는 보르도 블렌드. 중국 와인도 세계 수준에 오를 수 있음을 처음 보여 준 와인으로 꼽힌다.",
    quiz: [
      {
        q: "허란칭쉐 자베이란 2009년산이 2011년 받은 상은?",
        a: "디캔터 월드 와인 어워드 국제 트로피",
        x: ["와인 스펙테이터 올해의 와인", "로버트 파커 100점", "보르도 와인 박람회 대상"],
      },
    ],
  }),
  mk({
    id: "sh2_silverheights_summit", name: "실버 하이츠 더 서밋", original: "Silver Heights The Summit", producer: "실버 하이츠(银色高地)",
    country: "중국", area: "닝샤", grape: "카베르네 소비뇽·메를로", type: "red", tier: 3, shape: "bordeaux", cap: "#c9ccc6",
    fact: "닝샤 허란산 기슭의 가족 와이너리 실버 하이츠의 최상급 레드. 양조가 가오위안(엠마 가오)이 가족과 함께 운영한다.",
    quiz: [
      {
        q: "실버 하이츠의 양조가 엠마 가오가 양조를 공부한 곳은?",
        a: "프랑스 보르도",
        x: ["미국 캘리포니아 데이비스", "호주 애들레이드", "독일 가이젠하임"],
      },
    ],
  }),
  mk({
    id: "sh2_longdai", name: "롱다이", original: "Long Dai", maker: "Domaines Barons de Rothschild (Lafite)", producer: "도멘 바롱 드 로칠드(라피트)", producerQ: true,
    country: "중국", area: "산둥", grape: "카베르네 소비뇽·마르슬랑·카베르네 프랑", type: "red", tier: 2, shape: "bordeaux", cap: "#1f2a38", since: 2017,
    fact: "보르도 명가의 주인 가문이 산둥 반도 펑라이의 구릉에 일군 포도밭에서 만드는 레드. 2017년 첫 빈티지를 냈다.",
    quiz: [{ q: "롱다이를 만드는 곳은 어느 보르도 1등급 샤토의 주인 가문일까?", a: "샤토 라피트 로칠드", x: ["샤토 무통 로칠드", "샤토 마고", "샤토 라투르"] }],
  }),
  mk({
    id: "sh2_sula_sb", name: "술라 소비뇽 블랑", original: "Sula Sauvignon Blanc", producer: "술라 빈야즈",
    country: "인도", area: "마하라슈트라", sub: "나시크", grape: "소비뇽 블랑", type: "white", tier: 2, shape: "bordeaux", cap: "#d86f4f",
    fact: "미국 스탠퍼드 대학을 나온 라지브 사만트가 1999년 나시크에 세운 인도 대표 와이너리의 소비뇽 블랑.",
    quiz: [{ q: "술라 빈야즈의 '술라'는 누구의 이름에서 왔을까?", a: "창업자의 어머니 술라바", x: ["힌두교의 여신", "나시크를 흐르는 강", "창업자의 딸"] }],
  }),
  mk({
    id: "sh2_grover_lareserve", name: "그로버 잠파 라 레제르브", original: "La Réserve", maker: "Grover Zampa Vineyards", producer: "그로버 잠파",
    country: "인도", area: "카르나타카", sub: "난디 힐스", grape: "카베르네 소비뇽·시라즈", type: "red", tier: 3, shape: "bordeaux", cap: "#7a1522",
    fact: "1988년 벵갈루루 근교 난디 힐스에 세워진 그로버 빈야드의 대표 레드 블렌드. 인도 와인의 선구자로 꼽힌다.",
    quiz: [{ q: "그로버 빈야드에 오랫동안 자문한 보르도의 유명 양조 컨설턴트는?", a: "미셸 롤랑", x: ["에밀 페이노", "스테판 드르농쿠르", "드니 뒤부르디외"] }],
  }),
];
