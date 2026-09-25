import type { Wine } from "../wines";
import { mk } from "../make";

// 한국어 산지·품종 이름 → 라벨용 원어 (lang.ts 에 없는 것만)
export const REGIONS: Record<string, string> = {};
export const GRAPES: Record<string, string> = {};

const C2 = "Deuxième Grand Cru Classé en 1855";
const C3 = "Troisième Grand Cru Classé en 1855";
const C4 = "Quatrième Grand Cru Classé en 1855";
const C5 = "Cinquième Grand Cru Classé en 1855";
const SE_A = "Premier Grand Cru Classé 'A'";
const SE_1 = "Premier Grand Cru Classé";
const GRAVES = "Grand Cru Classé de Graves";
const SAUT1 = "Premier Cru Classé en 1855";
const SECOND = "Second Vin";

const BX = { country: "프랑스", area: "보르도" } as const;
const CS_M = "카베르네 소비뇽·메를로";
const M_CF = "메를로·카베르네 프랑";

/** 1855년 등급을 묻는 문제 */
const rankQ = (name: string, rank: "2등급" | "3등급" | "4등급" | "5등급") => ({
  q: `${name}의 1855년 메독 등급은?`,
  a: rank,
  x: (["2등급", "3등급", "4등급", "5등급"].filter((r) => r !== rank) as [string, string, string]),
});

export const WINES: Wine[] = [
  // ───────── 메독 2등급
  mk({
    ...BX, id: "bx_rauzansegla", name: "샤토 로장 세글라", original: "Château Rauzan-Ségla", producer: "샤넬 (베르트하이머 가문)", producerQ: true,
    sub: "마고", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5a1a22", cls: C2,
    fact: "1661년에 세워진 마고의 2등급 샤토. 1994년 샤넬을 소유한 베르트하이머 가문이 사들였다.",
    quiz: [{ q: "샤토 로장 세글라를 1994년에 사들인 패션 기업은?", a: "샤넬", x: ["에르메스", "디올", "구찌"] }],
  }),
  mk({
    ...BX, id: "bx_rauzangassies", name: "샤토 로장 가시", original: "Château Rauzan-Gassies", producer: "키에 가문",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6d1b26", cls: C2,
    fact: "옛 로장 영지가 나뉘며 로장 세글라와 갈라진 마고의 2등급. 키에 가문이 포이약의 크루아제 바주와 함께 운영한다.",
    quiz: [
      { q: "샤토 로장 가시와 원래 한 영지였던 마고의 샤토는?", a: "샤토 로장 세글라", x: ["샤토 브란 캉트냑", "샤토 라스콩브", "샤토 뒤르포르 비방"] },
      { q: "샤토 로장 가시와 같은 키에 가문이 운영하는 포이약의 5등급 샤토는?", a: "샤토 크루아제 바주", x: ["샤토 린치 무사", "샤토 페데스클로", "샤토 바타이"] },
    ],
  }),
  mk({
    ...BX, id: "bx_leovillelascases", name: "샤토 레오빌 라스 카즈", original: "Château Léoville Las Cases", producer: "들롱 가문",
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#4a1219", cls: C2, style: { emblem: "lion" },
    fact: "메독에서 손꼽히게 컸던 레오빌 영지가 셋으로 나뉘며 생겼다. 라벨의 사자상이 얹힌 돌문은 '그랑 클로' 포도밭의 입구다.",
    quiz: [
      { q: "샤토 레오빌 라스 카즈 라벨에 그려진 돌문 위의 조각은?", a: "사자", x: ["독수리", "말", "종"] },
      { q: "샤토 레오빌 라스 카즈를 이끄는 가문은?", a: "들롱 가문", x: ["바르통 가문", "퀴블리에 가문", "보리 가문"] },
    ],
  }),
  mk({
    ...BX, id: "bx_leovillepoyferre", name: "샤토 레오빌 푸아페레", original: "Château Léoville Poyferré", producer: "퀴블리에 가문",
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#6a1822", cls: C2,
    fact: "레오빌 영지에서 갈라진 세 샤토 가운데 하나. 1920년부터 퀴블리에 가문이 소유하고 있다.",
    quiz: [{ q: "샤토 레오빌 푸아페레를 1920년부터 소유해 온 가문은?", a: "퀴블리에 가문", x: ["들롱 가문", "바르통 가문", "카즈 가문"] }],
  }),
  mk({
    ...BX, id: "bx_leovillebarton", name: "샤토 레오빌 바르통", original: "Château Léoville Barton", producer: "바르통 가문",
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620", cls: C2,
    fact: "아일랜드계 바르통 가문이 1826년 사들여 지금까지 지킨다. 샤토 건물이 따로 없어 이웃 랑고아 바르통에서 함께 빚는다.",
    quiz: [
      { q: "샤토 레오빌 바르통을 소유한 바르통 가문의 뿌리는?", a: "아일랜드", x: ["스코틀랜드", "네덜란드", "독일"] },
      { q: "샤토 레오빌 바르통을 함께 양조하는 같은 가문의 3등급 샤토는?", a: "샤토 랑고아 바르통", x: ["샤토 라그랑주", "샤토 탈보", "샤토 생피에르"] },
    ],
  }),
  mk({
    ...BX, id: "bx_durfortvivens", name: "샤토 뒤르포르 비방", original: "Château Durfort-Vivens", producer: "곤자그 뤼르통",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#3f1a1f", cls: C2,
    fact: "중세 영주 뒤르포르 드 뒤라스 가문에서 이름이 온 마고의 2등급. 곤자그 뤼르통이 이끌며 바이오다이내믹 농법으로 바꿨다.",
    quiz: [rankQ("샤토 뒤르포르 비방", "2등급")],
  }),
  mk({
    ...BX, id: "bx_gruaudlarose", name: "샤토 그뤼오 라로즈", original: "Château Gruaud Larose", producer: "타이양 그룹",
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#7a1a22", cls: C2,
    fact: "라벨에 '왕들의 와인, 와인의 왕'이라는 문구가 적힌 생쥘리앵의 2등급. 1997년부터 보르도의 타이양 그룹이 소유한다.",
    quiz: [{ q: "샤토 그뤼오 라로즈 라벨에 적힌 문구의 뜻은?", a: "왕들의 와인, 와인의 왕", x: ["신이 내린 물방울", "메독의 여왕", "인내가 빚은 와인"] }],
  }),
  mk({
    ...BX, id: "bx_lascombes", name: "샤토 라스콩브", original: "Château Lascombes", producer: "샤토 라스콩브",
    sub: "마고", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5d1824", cls: C2,
    fact: "1950년대 러시아 태생 미국 와인 작가 알렉시스 리신이 사들여 명성을 되살린 마고의 2등급.",
    quiz: [{ q: "1950년대 샤토 라스콩브를 사들여 되살린 와인 작가는?", a: "알렉시스 리신", x: ["로버트 파커", "에밀 페노", "휴 존슨"] }],
  }),
  mk({
    ...BX, id: "bx_branecantenac", name: "샤토 브란 캉트냑", original: "Château Brane-Cantenac", producer: "앙리 뤼르통",
    sub: "마고", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#6a1822", cls: C2,
    fact: "'포도나무의 나폴레옹'이라 불린 브란 남작이 지금의 무통 로칠드를 판 뒤 가꾼 영지. 지금은 앙리 뤼르통이 이끈다.",
    quiz: [
      { q: "샤토 브란 캉트냑의 브란 남작이 그 전에 팔았던 포이약 영지는?", a: "지금의 샤토 무통 로칠드", x: ["지금의 샤토 라피트 로칠드", "지금의 샤토 라투르", "지금의 샤토 피숑 바롱"] },
      { q: "샤토 브란 캉트냑에 이름을 남긴 브란 남작의 별명은?", a: "포도나무의 나폴레옹", x: ["생테스테프의 마하라자", "메독의 교황", "와인의 왕"] },
    ],
  }),
  mk({
    ...BX, id: "bx_pichonbaron", name: "샤토 피숑 바롱", original: "Château Pichon Baron", producer: "AXA 밀레짐", producerQ: true,
    sub: "포이약", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#2b2422", cls: C2,
    fact: "뾰족탑이 솟은 동화 같은 샤토로 유명한 포이약의 2등급. 1987년부터 보험사 AXA의 AXA 밀레짐이 소유한다.",
    quiz: [
      { q: "샤토 피숑 바롱을 1987년에 사들인 곳은?", a: "AXA 밀레짐", x: ["LVMH", "샤넬", "루이 로드레"] },
      { q: "샤토 피숑 바롱과 원래 한 영지였다가 나뉜 샤토는?", a: "샤토 피숑 롱그빌 콩테스 드 랄랑드", x: ["샤토 라투르", "샤토 린치 바주", "샤토 퐁테 카네"] },
    ],
  }),
  mk({
    ...BX, id: "bx_pichoncomtesse", name: "샤토 피숑 롱그빌 콩테스 드 랄랑드", original: "Château Pichon Longueville Comtesse de Lalande", producer: "루이 로드레", producerQ: true,
    sub: "포이약", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#6a1a24", cls: C2,
    fact: "피숑 영지를 나눠 받은 딸 비르지니가 랄랑드 백작과 결혼하며 이름이 붙었다. 2007년 샴페인 하우스 루이 로드레가 사들였다.",
    quiz: [{ q: "샤토 피숑 롱그빌 콩테스 드 랄랑드를 2007년에 인수한 샴페인 하우스는?", a: "루이 로드레", x: ["모에 에 샹동", "볼랭저", "테탱제"] }],
  }),
  mk({
    ...BX, id: "bx_ducrubeaucaillou", name: "샤토 뒤크뤼 보카이유", original: "Château Ducru-Beaucaillou", producer: "보리 가문",
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620", cls: C2,
    fact: "'보카이유'는 '아름다운 자갈'이라는 뜻으로, 지롱드강 가의 자갈 언덕을 가리킨다. 1941년부터 보리 가문이 소유한다.",
    quiz: [
      { q: "샤토 뒤크뤼 보카이유 이름 속 '보카이유'의 뜻은?", a: "아름다운 자갈", x: ["아름다운 언덕", "오래된 탑", "작은 숲"] },
      { q: "샤토 뒤크뤼 보카이유를 1941년부터 소유해 온 가문은?", a: "보리 가문", x: ["들롱 가문", "바르통 가문", "퀴블리에 가문"] },
    ],
  }),
  mk({
    ...BX, id: "bx_cosdestournel", name: "샤토 코스 데스투르넬", original: "Château Cos d'Estournel", producer: "미셸 레이비에",
    sub: "생테스테프", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#6b1d22", cls: C2,
    fact: "'생테스테프의 마하라자' 루이 가스파르 데스투르넬이 인도 무역에 빠져 셀러 지붕에 동양풍 탑을 얹었다. 2000년부터 미셸 레이비에가 소유한다.",
    quiz: [
      { q: "샤토 코스 데스투르넬 셀러 건물의 특징은?", a: "인도풍 파고다 탑", x: ["중세 성탑", "그리스 신전 기둥", "튜더 양식 벽돌집"] },
      { q: "샤토 코스 데스투르넬 창립자 루이 가스파르 데스투르넬의 별명은?", a: "생테스테프의 마하라자", x: ["포도나무의 나폴레옹", "메독의 교황", "와인의 왕"] },
    ],
  }),
  mk({
    ...BX, id: "bx_montrose", name: "샤토 몽로즈", original: "Château Montrose", producer: "부이그 가문", producerQ: true,
    sub: "생테스테프", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#4d1520", cls: C2,
    fact: "분홍빛 히스 꽃이 덮인 언덕('몽 로즈')에서 이름이 왔다. 2006년 프랑스 기업가 부이그 형제가 사들였다.",
    quiz: [
      { q: "샤토 몽로즈라는 이름은 무엇에서 왔을까?", a: "분홍빛 히스 꽃이 덮인 언덕", x: ["장미 정원", "붉은 바위산", "창업자 딸의 이름"] },
      { q: "샤토 몽로즈를 2006년에 사들인 사람들은?", a: "부이그 형제", x: ["베르트하이머 형제", "들롱 가문", "카즈 가문"] },
    ],
  }),

  // ───────── 메독 3등급
  mk({
    ...BX, id: "bx_kirwan", name: "샤토 키르완", original: "Château Kirwan", producer: "쉴레르 가문",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: C3,
    fact: "18세기 이 영지를 가꾼 아일랜드 출신 마크 키르완의 이름을 땄다. 1925년부터 보르도 네고시앙 쉴레르 가문이 소유한다.",
    quiz: [rankQ("샤토 키르완", "3등급")],
  }),
  mk({
    ...BX, id: "bx_dissan", name: "샤토 디상", original: "Château d'Issan", producer: "크뤼즈 가문·자키 로렌체티",
    sub: "마고", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#7a1a22", cls: C3,
    fact: "해자로 둘러싸인 17세기 성. 라벨에 '왕의 식탁과 신의 제단을 위하여'라는 라틴어 문구가 적혀 있다.",
    quiz: [{ q: "샤토 디상 라벨의 라틴어 문구가 뜻하는 것은?", a: "왕의 식탁과 신의 제단을 위하여", x: ["신은 포도밭에 머문다", "인내가 와인을 만든다", "오직 최고만을"] }],
  }),
  mk({
    ...BX, id: "bx_lagrange", name: "샤토 라그랑주", original: "Château Lagrange", producer: "산토리", producerQ: true,
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620", cls: C3,
    fact: "1983년 일본 산토리가 사들여 포도밭과 셀러를 새로 정비한 생쥘리앵의 3등급.",
    quiz: [{ q: "샤토 라그랑주를 1983년에 사들인 일본 기업은?", a: "산토리", x: ["기린", "아사히", "삿포로"] }],
  }),
  mk({
    ...BX, id: "bx_langoabarton", name: "샤토 랑고아 바르통", original: "Château Langoa Barton", producer: "바르통 가문",
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620", cls: C3,
    fact: "1821년 휴 바르통이 사들인 18세기 샤토. 이 샤토의 셀러에서 레오빌 바르통도 함께 빚는다.",
    quiz: [{ q: "샤토 랑고아 바르통 셀러에서 함께 양조하는 2등급 와인은?", a: "샤토 레오빌 바르통", x: ["샤토 레오빌 푸아페레", "샤토 그뤼오 라로즈", "샤토 뒤크뤼 보카이유"] }],
  }),
  mk({
    ...BX, id: "bx_giscours", name: "샤토 지스쿠르", original: "Château Giscours", producer: "알바다 옐게르스마 가문",
    sub: "마고", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5a1a22", cls: C3,
    fact: "숲과 초원까지 합치면 수백 헥타르에 이르는 넓은 영지. 1995년부터 네덜란드 사업가 에릭 알바다 옐게르스마 가문이 운영한다.",
    quiz: [
      { q: "샤토 지스쿠르를 1995년부터 운영해 온 알바다 옐게르스마 가문의 국적은?", a: "네덜란드", x: ["벨기에", "스위스", "영국"] },
      { q: "샤토 지스쿠르와 같은 가문이 운영하는 마고의 샤토는?", a: "샤토 뒤 테르트르", x: ["샤토 도작", "샤토 푸제", "샤토 페리에르"] },
    ],
  }),
  mk({
    ...BX, id: "bx_malescot", name: "샤토 말레스코 생텍쥐페리", original: "Château Malescot St. Exupéry", producer: "쥐게르 가문",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: C3,
    fact: "17세기 왕실 법률 고문 시몽 말레스코와 19세기 소유주 생텍쥐페리 백작의 이름을 합쳤다. 1955년부터 쥐게르 가문이 이끈다.",
    quiz: [{ q: "샤토 말레스코 생텍쥐페리의 생텍쥐페리 백작과 같은 집안 출신 작가의 대표작은?", a: "어린 왕자", x: ["이방인", "레 미제라블", "삼총사"] }],
  }),
  mk({
    ...BX, id: "bx_boydcantenac", name: "샤토 보이드 캉트냑", original: "Château Boyd-Cantenac", producer: "기유메 가문",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5e1a24", cls: C3,
    fact: "18세기 이 땅을 가진 자크 보이드에게서 이름이 왔다. 기유메 가문이 4등급 샤토 푸제와 함께 운영한다.",
    quiz: [{ q: "샤토 보이드 캉트냑과 같은 가문이 운영하는 4등급 샤토는?", a: "샤토 푸제", x: ["샤토 탈보", "샤토 생피에르", "샤토 라퐁 로셰"] }],
  }),
  mk({
    ...BX, id: "bx_cantenacbrown", name: "샤토 캉트냑 브라운", original: "Château Cantenac Brown", producer: "샤토 캉트냑 브라운",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#4f1a22", cls: C3,
    fact: "스코틀랜드계 와인 상인 존 루이스 브라운이 지은 영국 튜더 양식 샤토로, 메독에서 보기 드문 건축물이다.",
    quiz: [{ q: "샤토 캉트냑 브라운 건물의 건축 양식은?", a: "영국 튜더 양식", x: ["신고전주의 양식", "인도풍 파고다 양식", "이탈리아 르네상스 양식"] }],
  }),
  mk({
    ...BX, id: "bx_palmer", name: "샤토 팔머", original: "Château Palmer", producer: "시셸·말레 베스 가문", producerQ: true,
    sub: "마고", grape: "카베르네 소비뇽·메를로·프티 베르도", type: "red", tier: 2, shape: "bordeaux", cap: "#16130f", cls: C3,
    style: { paper: "#121110", ink: "#d8bd78", accent: "#c9a24e", foil: "gold" },
    fact: "나폴레옹 전쟁에 참전한 영국 장군 찰스 파머가 1814년 사들이며 이름이 붙었다. 3등급이지만 2등급 이상의 값에 팔린다.",
    quiz: [
      { q: "샤토 팔머에 이름을 남긴 찰스 파머의 국적은?", a: "영국", x: ["아일랜드", "네덜란드", "미국"] },
      { q: "샤토 팔머 라벨의 대표적인 색 조합은?", a: "검정 바탕에 금색", x: ["흰 바탕에 빨강", "파랑 바탕에 은색", "초록 바탕에 금색"] },
    ],
  }),
  mk({
    ...BX, id: "bx_lalagune", name: "샤토 라 라귄", original: "Château La Lagune", producer: "프레 가문", producerQ: true,
    sub: "오메독", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: C3,
    fact: "보르도 시내에서 메독으로 올라가면 가장 먼저 만나는 그랑 크뤼 클라세. 2000년부터 론의 폴 자불레 에네도 가진 프레 가문이 소유한다.",
    quiz: [{ q: "샤토 라 라귄을 소유한 프레 가문이 론에서 운영하는 와이너리는?", a: "폴 자불레 에네", x: ["기갈", "샤푸티에", "샤토 드 보카스텔"] }],
  }),
  mk({
    ...BX, id: "bx_desmirail", name: "샤토 데스미라이", original: "Château Desmirail", producer: "뤼르통 가문",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620", cls: C3,
    fact: "보르도의 와인 명가 뤼르통 가문이 운영하는 마고의 3등급. 한때 포도밭이 흩어져 이름만 남았다가 되살아났다.",
    quiz: [rankQ("샤토 데스미라이", "3등급")],
  }),
  mk({
    ...BX, id: "bx_calonsegur", name: "샤토 칼롱 세귀르", original: "Château Calon Ségur", producer: "샤토 칼롱 세귀르",
    sub: "생테스테프", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#7d1a24", cls: C3,
    fact: "라피트와 라투르를 가졌던 세귀르 후작이 '내 마음은 칼롱에 있다'고 말했다는 데서 라벨에 하트가 그려졌다.",
    quiz: [
      { q: "샤토 칼롱 세귀르 라벨에 그려진 상징은?", a: "하트", x: ["사자", "종", "왕관"] },
      { q: "칼롱 세귀르의 하트 일화 속 세귀르 후작이 함께 가졌던 1등급 샤토는?", a: "라피트와 라투르", x: ["마고와 오브리옹", "무통과 오브리옹", "마고와 무통"] },
    ],
  }),
  mk({
    ...BX, id: "bx_ferriere", name: "샤토 페리에르", original: "Château Ferrière", producer: "클레르 빌라르 뤼르통",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#4a1a20", cls: C3,
    fact: "1855년 등급 샤토 가운데 손꼽히게 작은 마고의 3등급. 클레르 빌라르 뤼르통이 이끌며 바이오다이내믹 농법을 쓴다.",
    quiz: [rankQ("샤토 페리에르", "3등급")],
  }),
  mk({
    ...BX, id: "bx_marquisdalesme", name: "샤토 마르키 달렘", original: "Château Marquis d'Alesme", producer: "페로도 가문",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#2a1a1c", cls: C3, since: 2009,
    fact: "원래 이름은 '마르키 달렘 베케르'였다. 2006년 페로도 가문이 사들인 뒤 이름에서 '베케르'를 떼고 새로 단장했다.",
    quiz: [{ q: "샤토 마르키 달렘의 예전 이름은?", a: "마르키 달렘 베케르", x: ["마르키 드 테름", "말레스코 생텍쥐페리", "로장 가시"] }],
  }),

  // ───────── 메독 4등급
  mk({
    ...BX, id: "bx_saintpierre", name: "샤토 생피에르", original: "Château Saint-Pierre", producer: "앙리 마르탱 가족",
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620", cls: C4,
    fact: "생쥘리앵 시장을 지낸 앙리 마르탱이 1982년 사들인 4등급. 샤토 글로리아와 같은 가족이 운영한다.",
    quiz: [{ q: "샤토 생피에르와 같은 가족이 운영하는 생쥘리앵의 와인은?", a: "샤토 글로리아", x: ["샤토 탈보", "샤토 베슈벨", "샤토 라그랑주"] }],
  }),
  mk({
    ...BX, id: "bx_talbot", name: "샤토 탈보", original: "Château Talbot", producer: "비뇽 코르디에 가족",
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#6a1822", cls: C4,
    fact: "백년전쟁 말 카스티용 전투에서 전사한 잉글랜드 장군 존 탤벗의 이름을 땄다고 전한다. 화이트 와인 '카유 블랑'도 유명하다.",
    quiz: [
      { q: "샤토 탈보 이름의 유래로 전하는 잉글랜드 장군 존 탤벗이 싸운 전쟁은?", a: "백년전쟁", x: ["30년 전쟁", "장미전쟁", "나폴레옹 전쟁"] },
      { q: "샤토 탈보가 만드는 화이트 와인의 이름은?", a: "카유 블랑", x: ["파비용 블랑", "엘 다르장", "블랑 드 린치 바주"] },
    ],
  }),
  mk({
    ...BX, id: "bx_branaireducru", name: "샤토 브라네르 뒤크뤼", original: "Château Branaire-Ducru", producer: "마로토 가문",
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22", cls: C4,
    fact: "길 건너 샤토 베슈벨과 마주한 생쥘리앵의 4등급. 1988년부터 마로토 가문이 운영한다.",
    quiz: [rankQ("샤토 브라네르 뒤크뤼", "4등급")],
  }),
  mk({
    ...BX, id: "bx_duhartmilon", name: "샤토 뒤아르 밀롱", original: "Château Duhart-Milon", producer: "도멘 바롱 드 로칠드 (라피트)", producerQ: true,
    sub: "포이약", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#4a1a22", cls: C4,
    fact: "라피트 로칠드와 이웃한 포이약의 4등급으로, 1962년 라피트의 로칠드 가문이 사들여 되살렸다.",
    quiz: [{ q: "샤토 뒤아르 밀롱을 1962년에 사들인 곳은?", a: "라피트 로칠드의 로칠드 가문", x: ["무통 로칠드의 로칠드 가문", "AXA 밀레짐", "카즈 가문"] }],
  }),
  mk({
    ...BX, id: "bx_pouget", name: "샤토 푸제", original: "Château Pouget", producer: "기유메 가문",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5e1a24", cls: C4,
    fact: "기유메 가문이 3등급 보이드 캉트냑과 함께 운영하는 마고의 작은 4등급 샤토.",
    quiz: [{ q: "샤토 푸제와 같은 가문이 운영하는 3등급 샤토는?", a: "샤토 보이드 캉트냑", x: ["샤토 캉트냑 브라운", "샤토 키르완", "샤토 디상"] }],
  }),
  mk({
    ...BX, id: "bx_latourcarnet", name: "샤토 라 투르 카르네", original: "Château La Tour Carnet", producer: "베르나르 마그레즈", producerQ: true,
    sub: "오메독", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#3a1a1e", cls: C4,
    fact: "해자와 옛 망루가 남은 중세 성. 2000년 와인 사업가 베르나르 마그레즈가 사들였다.",
    quiz: [{ q: "샤토 라 투르 카르네와 샤토 파프 클레망을 함께 소유한 인물은?", a: "베르나르 마그레즈", x: ["미셸 롤랑", "장 뤽 튀네뱅", "제라르 페스"] }],
  }),
  mk({
    ...BX, id: "bx_lafonrochet", name: "샤토 라퐁 로셰", original: "Château Lafon-Rochet", producer: "샤토 라퐁 로셰",
    sub: "생테스테프", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#b8922a", cls: C4,
    style: { paper: "#e8c547", ink: "#1b1410", accent: "#1b1410" },
    fact: "1960년 테스롱 가문이 사들여 되살린 생테스테프의 4등급. 샤토 건물과 라벨을 샛노란색으로 칠해 눈에 띈다.",
    quiz: [{ q: "샤토 라퐁 로셰의 샤토 건물과 라벨을 대표하는 색은?", a: "노란색", x: ["파란색", "분홍색", "초록색"] }],
  }),
  mk({
    ...BX, id: "bx_beychevelle", name: "샤토 베슈벨", original: "Château Beychevelle", producer: "샤토 베슈벨",
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620", cls: C4,
    fact: "강을 지나던 배들이 해군 제독 에페르농 공작에게 경의를 표해 돛을 내렸다('베스 부알')는 데서 이름이 왔다. 라벨에도 배가 그려져 있다.",
    quiz: [
      { q: "샤토 베슈벨 이름의 유래가 된 행동은?", a: "돛을 내리다", x: ["닻을 올리다", "종을 울리다", "깃발을 흔들다"] },
      { q: "샤토 베슈벨 라벨에 그려진 것은?", a: "배", x: ["사자", "하트", "종"] },
    ],
  }),
  mk({
    ...BX, id: "bx_prieurelichine", name: "샤토 프리외레 리신", original: "Château Prieuré-Lichine", producer: "발랑드 그룹",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: C4,
    fact: "옛 베네딕도회 수도원(프리외레) 자리에 들어선 샤토. 1951년 알렉시스 리신이 사들여 자기 이름을 붙였다.",
    quiz: [
      { q: "샤토 프리외레 리신의 '프리외레'가 뜻하는 것은?", a: "수도원", x: ["성채", "방앗간", "시장"] },
      { q: "샤토 프리외레 리신에 이름을 남긴 인물은?", a: "알렉시스 리신", x: ["로버트 몬다비", "에밀 페노", "휴 바르통"] },
    ],
  }),
  mk({
    ...BX, id: "bx_marquisdeterme", name: "샤토 마르키 드 테름", original: "Château Marquis de Terme", producer: "세네클로즈 가문",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620", cls: C4,
    fact: "18세기 소유주 테름 후작의 이름을 이어받은 마고의 4등급. 1935년부터 세네클로즈 가문이 소유한다.",
    quiz: [rankQ("샤토 마르키 드 테름", "4등급")],
  }),

  // ───────── 메독 5등급
  mk({
    ...BX, id: "bx_pontetcanet", name: "샤토 퐁테 카네", original: "Château Pontet-Canet", producer: "테스롱 가문",
    sub: "포이약", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620", cls: C5,
    fact: "일찍이 바이오다이내믹 농법으로 바꾸고 포도밭을 말이 끄는 쟁기로 가는 포이약의 5등급. 1975년부터 테스롱 가문이 소유한다.",
    quiz: [
      { q: "샤토 퐁테 카네가 포도밭을 갈 때 트랙터 대신 쓰는 것은?", a: "말", x: ["소", "당나귀", "로봇"] },
      { q: "샤토 퐁테 카네를 1975년부터 소유한 가문은?", a: "테스롱 가문", x: ["카즈 가문", "보리 가문", "들롱 가문"] },
    ],
  }),
  mk({
    ...BX, id: "bx_batailley", name: "샤토 바타이", original: "Château Batailley", producer: "카스테자 가문",
    sub: "포이약", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: C5,
    fact: "백년전쟁 때 이곳에서 벌어진 전투에서 이름이 왔다고 전한다. 1942년 오 바타이와 나뉘었고 카스테자 가문이 운영한다.",
    quiz: [{ q: "샤토 바타이에서 갈라져 나온 이웃 5등급 샤토는?", a: "샤토 오 바타이", x: ["샤토 그랑 퓌 라코스트", "샤토 린치 무사", "샤토 다르마약"] }],
  }),
  mk({
    ...BX, id: "bx_hautbatailley", name: "샤토 오 바타이", original: "Château Haut-Batailley", producer: "카즈 가문", producerQ: true,
    sub: "포이약", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#4a1a22", cls: C5,
    fact: "1942년 바타이 영지에서 갈라져 나온 포이약의 5등급. 2017년 린치 바주를 가진 카즈 가문이 사들였다.",
    quiz: [{ q: "샤토 오 바타이를 2017년에 사들인 가문은?", a: "카즈 가문", x: ["테스롱 가문", "카스테자 가문", "들롱 가문"] }],
  }),
  mk({
    ...BX, id: "bx_grandpuylacoste", name: "샤토 그랑 퓌 라코스트", original: "Château Grand-Puy-Lacoste", producer: "보리 가문",
    sub: "포이약", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22", cls: C5,
    fact: "'퓌(Puy)'는 언덕이라는 뜻으로, 포이약 내륙의 자갈 언덕에 자리한다. 1978년부터 보리 가문이 운영한다.",
    quiz: [{ q: "샤토 그랑 퓌 라코스트 이름 속 '퓌(Puy)'의 뜻은?", a: "언덕", x: ["우물", "숲", "강"] }],
  }),
  mk({
    ...BX, id: "bx_grandpuyducasse", name: "샤토 그랑 퓌 뒤카스", original: "Château Grand-Puy Ducasse", producer: "샤토 그랑 퓌 뒤카스",
    sub: "포이약", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: C5,
    fact: "포도밭은 포이약 곳곳에 흩어져 있고, 샤토 건물은 포이약 마을 강변에 자리한 5등급.",
    quiz: [rankQ("샤토 그랑 퓌 뒤카스", "5등급")],
  }),
  mk({
    ...BX, id: "bx_lynchbages", name: "샤토 린치 바주", original: "Château Lynch-Bages", producer: "카즈 가문",
    sub: "포이약", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#2a1c1c", cls: C5,
    fact: "아일랜드계 린치 가문이 소유했던 데서 이름이 왔다. 1939년부터 카즈 가문이 이끌며 '가난한 자의 라투르'라는 별명을 얻었다.",
    quiz: [
      { q: "샤토 린치 바주에 붙은 별명은?", a: "가난한 자의 라투르", x: ["메독의 베르사유", "생테스테프의 마하라자", "포므롤의 보석"] },
      { q: "샤토 린치 바주를 1939년부터 이끌어 온 가문은?", a: "카즈 가문", x: ["린치 가문", "보리 가문", "테스롱 가문"] },
    ],
  }),
  mk({
    ...BX, id: "bx_lynchmoussas", name: "샤토 린치 무사", original: "Château Lynch-Moussas", producer: "카스테자 가문",
    sub: "포이약", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620", cls: C5,
    fact: "린치 바주처럼 아일랜드계 린치 가문이 가졌던 영지. 지금은 샤토 바타이와 같은 카스테자 가문이 운영한다.",
    quiz: [{ q: "샤토 린치 무사와 같은 카스테자 가문이 운영하는 5등급 샤토는?", a: "샤토 바타이", x: ["샤토 오 바타이", "샤토 클레르 밀롱", "샤토 페데스클로"] }],
  }),
  mk({
    ...BX, id: "bx_dauzac", name: "샤토 도작", original: "Château Dauzac", producer: "샤토 도작",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#1f2a3a", cls: C5,
    fact: "19세기 말 포도나무 곰팡이병을 막는 '보르도액'(황산구리와 석회 혼합액)이 처음 시험된 곳으로 유명한 마고의 5등급.",
    quiz: [{ q: "샤토 도작에서 처음 시험된 것으로 알려진 포도밭 약제는?", a: "보르도액", x: ["석회유황합제", "DDT", "과망가니즈산칼륨"] }],
  }),
  mk({
    ...BX, id: "bx_darmailhac", name: "샤토 다르마약", original: "Château d'Armailhac", producer: "바롱 필리프 드 로칠드", producerQ: true,
    sub: "포이약", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#1c1a1a", cls: C5,
    fact: "1933년 바롱 필리프 드 로칠드가 사들였다. '무통 바롱 필리프' 등으로 이름이 바뀌다 1989년 원래 이름 다르마약을 되찾았다.",
    quiz: [{ q: "샤토 다르마약이 한때 썼던 이름은?", a: "샤토 무통 바롱 필리프", x: ["샤토 무통 카데", "샤토 프티 무통", "샤토 클레르 무통"] }],
  }),
  mk({
    ...BX, id: "bx_dutertre", name: "샤토 뒤 테르트르", original: "Château du Tertre", producer: "알바다 옐게르스마 가문",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22", cls: C5,
    fact: "마고 아펠라시옹 서쪽 아르삭 마을의 언덕('테르트르') 위에 자리한다. 지스쿠르와 같은 알바다 옐게르스마 가문이 운영한다.",
    quiz: [{ q: "샤토 뒤 테르트르와 같은 가문이 운영하는 마고의 3등급 샤토는?", a: "샤토 지스쿠르", x: ["샤토 키르완", "샤토 디상", "샤토 팔머"] }],
  }),
  mk({
    ...BX, id: "bx_hautbagesliberal", name: "샤토 오 바주 리베랄", original: "Château Haut-Bages Libéral", producer: "클레르 빌라르 뤼르통",
    sub: "포이약", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#4a1a20", cls: C5,
    fact: "18세기 소유주 리베랄 가문의 이름을 이어받았다. 클레르 빌라르 뤼르통이 3등급 페리에르와 함께 이끌며 바이오다이내믹 농법을 쓴다.",
    quiz: [{ q: "샤토 오 바주 리베랄과 같은 사람이 이끄는 마고의 3등급 샤토는?", a: "샤토 페리에르", x: ["샤토 데스미라이", "샤토 키르완", "샤토 디상"] }],
  }),
  mk({
    ...BX, id: "bx_pedesclaux", name: "샤토 페데스클로", original: "Château Pédesclaux", producer: "자키 로렌체티", producerQ: true,
    sub: "포이약", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#2a2426", cls: C5,
    fact: "1810년 보르도의 와인 중개상 피에르 위르뱅 페데스클로가 세웠다. 2009년 자키 로렌체티가 사들여 유리로 감싼 현대식 건물로 단장했다.",
    quiz: [{ q: "샤토 페데스클로를 2009년에 사들여 새로 단장한 사업가는?", a: "자키 로렌체티", x: ["베르나르 마그레즈", "미셸 레이비에", "프랑수아 피노"] }],
  }),
  mk({
    ...BX, id: "bx_belgrave", name: "샤토 벨그라브", original: "Château Belgrave", producer: "두르트",
    sub: "오메독", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: C5,
    fact: "오메독 생로랑 마을의 5등급으로, 보르도 네고시앙 두르트가 운영한다.",
    quiz: [rankQ("샤토 벨그라브", "5등급")],
  }),
  mk({
    ...BX, id: "bx_camensac", name: "샤토 카망삭", original: "Château Camensac", producer: "샤토 카망삭",
    sub: "오메독", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620", cls: C5,
    fact: "오메독 생로랑 마을의 5등급. 이웃한 벨그라브, 라 투르 카르네와 함께 생로랑의 등급 샤토 셋 가운데 하나다.",
    quiz: [{ q: "샤토 카망삭과 같은 생로랑 마을에 있는 4등급 샤토는?", a: "샤토 라 투르 카르네", x: ["샤토 탈보", "샤토 생피에르", "샤토 푸제"] }],
  }),
  mk({
    ...BX, id: "bx_coslabory", name: "샤토 코스 라보리", original: "Château Cos Labory", producer: "오두아 가문",
    sub: "생테스테프", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: C5,
    fact: "생테스테프의 코스 데스투르넬 바로 옆에 붙은 작은 5등급으로, 오두아 가문이 운영한다.",
    quiz: [{ q: "샤토 코스 라보리와 맞닿은 생테스테프의 2등급 샤토는?", a: "샤토 코스 데스투르넬", x: ["샤토 몽로즈", "샤토 칼롱 세귀르", "샤토 라퐁 로셰"] }],
  }),
  mk({
    ...BX, id: "bx_clercmilon", name: "샤토 클레르 밀롱", original: "Château Clerc Milon", producer: "바롱 필리프 드 로칠드", producerQ: true,
    sub: "포이약", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#1c1a1a", cls: C5,
    fact: "무통 로칠드, 라피트 로칠드와 이웃한 포이약의 5등급. 1970년 바롱 필리프 드 로칠드가 사들였다.",
    quiz: [{ q: "샤토 클레르 밀롱을 1970년에 사들인 인물은?", a: "바롱 필리프 드 로칠드", x: ["에릭 드 로칠드", "장 미셸 카즈", "앙리 마르탱"] }],
  }),
  mk({
    ...BX, id: "bx_croizetbages", name: "샤토 크루아제 바주", original: "Château Croizet-Bages", producer: "키에 가문",
    sub: "포이약", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6d1b26", cls: C5,
    fact: "18세기 이 땅을 가진 크루아제 형제와 바주 마을의 이름을 합쳤다. 로장 가시와 같은 키에 가문이 운영한다.",
    quiz: [{ q: "샤토 크루아제 바주와 같은 가문이 운영하는 마고의 2등급 샤토는?", a: "샤토 로장 가시", x: ["샤토 로장 세글라", "샤토 브란 캉트냑", "샤토 라스콩브"] }],
  }),
  mk({
    ...BX, id: "bx_cantemerle", name: "샤토 캉트메를", original: "Château Cantemerle", producer: "샤토 캉트메를",
    sub: "오메독", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22", cls: C5,
    fact: "이름은 '지빠귀(메를)가 노래한다'는 뜻으로 풀이된다. 1855년 등급표에 뒤늦게 덧붙여져 5등급 맨 끝에 이름을 올렸다.",
    quiz: [{ q: "샤토 캉트메를이 1855년 등급에 들어간 방식은?", a: "명단이 나온 뒤 뒤늦게 덧붙여졌다", x: ["1등급에서 강등됐다", "추첨으로 뽑혔다", "1973년 재심사로 올랐다"] }],
  }),

  // ───────── 포므롤
  mk({
    ...BX, id: "bx_lepin", name: "르 팽", original: "Le Pin", producer: "티엥퐁 가문", producerQ: true,
    sub: "포므롤", grape: "메를로", type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#7a1a22",
    style: { layout: "minimal", emblem: "none", paper: "#f7f4ec" },
    fact: "1979년 벨기에 티엥퐁 가문이 첫 빈티지를 낸 아주 작은 포도밭. 이름은 곁에 서 있던 소나무 한 그루에서 왔다.",
    quiz: [
      { q: "르 팽이라는 이름은 무엇에서 왔을까?", a: "포도밭 곁의 소나무 한 그루", x: ["창업자의 이름", "옛 수도원", "작은 돌다리"] },
      { q: "르 팽을 소유한 티엥퐁 가문의 국적은?", a: "벨기에", x: ["네덜란드", "스위스", "룩셈부르크"] },
    ],
  }),
  mk({
    ...BX, id: "bx_lafleur", name: "샤토 라플뢰르", original: "Château Lafleur", producer: "기노도 가문",
    sub: "포므롤", grape: M_CF, type: "red", tier: 2, shape: "bordeaux", cap: "#6a1822",
    fact: "페트뤼스와 맞닿은 작은 포도밭으로, 기노도 가문이 가족 농장처럼 가꾼다. 포므롤치고 카베르네 프랑 비율이 높다.",
    quiz: [{ q: "샤토 라플뢰르를 가꾸는 가문은?", a: "기노도 가문", x: ["무에크스 가문", "티엥퐁 가문", "뒤랑투 가문"] }],
  }),
  mk({
    ...BX, id: "bx_vcc", name: "비외 샤토 세르탕", original: "Vieux Château Certan", producer: "티엥퐁 가문",
    sub: "포므롤", grape: "메를로·카베르네 프랑·카베르네 소비뇽", type: "red", tier: 2, shape: "bordeaux", cap: "#7a1a22",
    fact: "1924년 벨기에 티엥퐁 가문이 사들인 포므롤의 명가. 포므롤에서 드물게 카베르네 프랑·카베르네 소비뇽 비율이 높다.",
    quiz: [{ q: "비외 샤토 세르탕을 1924년에 사들인 가문은?", a: "티엥퐁 가문", x: ["무에크스 가문", "기노도 가문", "니콜라 가문"] }],
  }),
  mk({
    ...BX, id: "bx_levangile", name: "샤토 레방질", original: "Château L'Évangile", producer: "도멘 바롱 드 로칠드 (라피트)", producerQ: true,
    sub: "포므롤", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#4a1a22",
    fact: "페트뤼스와 슈발 블랑 사이에 자리한 포므롤 샤토. 1990년 라피트의 로칠드 가문이 지분을 사들여 운영한다.",
    quiz: [{ q: "샤토 레방질의 '에방질(Évangile)'이 뜻하는 것은?", a: "복음서", x: ["천사", "성당", "순례자"] }],
  }),
  mk({
    ...BX, id: "bx_laconseillante", name: "샤토 라 콩세이양트", original: "Château La Conseillante", producer: "니콜라 가문",
    sub: "포므롤", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#6a3d86",
    style: { accent: "#6a3d86", ink: "#4a2a63" },
    fact: "18세기 여성 소유주 카트린 콩세이양에게서 이름이 왔다. 1871년부터 니콜라 가문이 지키며, 보랏빛 캡슐과 라벨 글씨가 트레이드마크다.",
    quiz: [{ q: "샤토 라 콩세이양트의 캡슐을 대표하는 색은?", a: "보라색", x: ["금색", "검은색", "흰색"] }],
  }),
  mk({
    ...BX, id: "bx_trotanoy", name: "샤토 트로타노이", original: "Château Trotanoy", producer: "장 피에르 무에크스", producerQ: true,
    sub: "포므롤", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620",
    fact: "'너무 힘들다(trop ennuie)'는 말에서 이름이 왔다는데, 단단한 토양을 갈기가 그만큼 고됐다는 뜻이다. 1953년 장 피에르 무에크스가 사들였다.",
    quiz: [{ q: "샤토 트로타노이를 1953년에 사들인 네고시앙은?", a: "장 피에르 무에크스", x: ["두르트", "코르디에", "바롱 필리프 드 로칠드"] }],
  }),
  mk({
    ...BX, id: "bx_egliseclinet", name: "샤토 레글리즈 클리네", original: "Château L'Église-Clinet", producer: "뒤랑투 가문",
    sub: "포므롤", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22",
    fact: "포므롤 성당 곁의 포도밭에서 이름이 왔다. 1983년부터 드니 뒤랑투가 이끌며 정상급 포므롤로 끌어올렸다.",
    quiz: [{ q: "샤토 레글리즈 클리네 이름 속 '에글리즈(Église)'의 뜻은?", a: "성당", x: ["성채", "우물", "광장"] }],
  }),
  mk({
    ...BX, id: "bx_clinet", name: "샤토 클리네", original: "Château Clinet", producer: "라보르드 가문",
    sub: "포므롤", grape: "메를로·카베르네 소비뇽", type: "red", tier: 3, shape: "bordeaux", cap: "#3a1a1e",
    fact: "1998년 라보르드 가문이 사들여 아들 로낭 라보르드가 이끄는 포므롤 샤토. 메를로에 카베르네 소비뇽을 섞는다.",
    quiz: [{ q: "샤토 클리네를 이끄는 가문은?", a: "라보르드 가문", x: ["뒤랑투 가문", "니콜라 가문", "티엥퐁 가문"] }],
  }),
  mk({
    ...BX, id: "bx_gazin", name: "샤토 가쟁", original: "Château Gazin", producer: "바이양쿠르 가문",
    sub: "포므롤", grape: "메를로·카베르네 소비뇽", type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822",
    fact: "중세에 예루살렘 성 요한 기사단(구호기사단)의 땅이었고, 라벨에 그 십자가가 남아 있다. 바이양쿠르 가문이 대대로 소유한다.",
    quiz: [{ q: "샤토 가쟁 라벨의 십자가가 가리키는 옛 주인은?", a: "성 요한 기사단(구호기사단)", x: ["교황청", "보르도 대주교", "잉글랜드 왕실"] }],
  }),
  mk({
    ...BX, id: "bx_nenin", name: "샤토 네냉", original: "Château Nénin", producer: "들롱 가문", producerQ: true,
    sub: "포므롤", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#4a1219",
    fact: "1997년 레오빌 라스 카즈의 들롱 가문이 사들여 새로 가꾼 포므롤 샤토.",
    quiz: [{ q: "샤토 네냉을 1997년에 사들인 가문은?", a: "들롱 가문", x: ["티엥퐁 가문", "무에크스 가문", "라보르드 가문"] }],
  }),
  mk({
    ...BX, id: "bx_bonpasteur", name: "샤토 르 봉 파스퇴르", original: "Château Le Bon Pasteur", producer: "샤토 르 봉 파스퇴르",
    sub: "포므롤", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620",
    fact: "세계적인 양조 컨설턴트 미셸 롤랑의 가족이 대대로 가꾼 포므롤 샤토. 이름은 '착한 목자'라는 뜻이다.",
    quiz: [{ q: "샤토 르 봉 파스퇴르와 인연이 깊은 양조 컨설턴트는?", a: "미셸 롤랑", x: ["에밀 페노", "스테판 드르농쿠르", "드니 뒤보르디외"] }],
  }),
  mk({
    ...BX, id: "bx_lafleurpetrus", name: "샤토 라 플뢰르 페트뤼스", original: "Château La Fleur-Pétrus", producer: "장 피에르 무에크스", producerQ: true,
    sub: "포므롤", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#8c1a1f",
    fact: "이웃한 라플뢰르와 페트뤼스 사이에 자리해 두 이름을 합쳤다. 장 피에르 무에크스 가문이 소유한다.",
    quiz: [{ q: "샤토 라 플뢰르 페트뤼스를 소유한 네고시앙은?", a: "장 피에르 무에크스", x: ["티엥퐁 가문", "기노도 가문", "도멘 클라렌스 딜롱"] }],
  }),

  // ───────── 생테밀리옹
  mk({
    ...BX, id: "bx_ausone", name: "샤토 오존", original: "Château Ausone", producer: "보티에 가문",
    sub: "생테밀리옹", grape: "카베르네 프랑·메를로", type: "red", tier: 2, shape: "bordeaux", cap: "#7a1a22", cls: SE_A,
    fact: "4세기 로마 시인 아우소니우스의 이름을 딴 생테밀리옹의 명가. 2022년 등급 개정을 앞두고 슈발 블랑과 함께 등급 심사에서 스스로 빠졌다.",
    quiz: [
      { q: "샤토 오존의 이름은 누구에게서 왔을까?", a: "로마 시인 아우소니우스", x: ["로마 황제 하드리아누스", "성 에밀리옹", "샤를마뉴 대제"] },
      { q: "샤토 오존을 이끄는 가문은?", a: "보티에 가문", x: ["무에크스 가문", "드 부아르 가문", "마농쿠르 가문"] },
    ],
  }),
  mk({
    ...BX, id: "bx_angelus", name: "샤토 앙젤뤼스", original: "Château Angélus", producer: "드 부아르 드 라포레 가문",
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#c9a24e", cls: SE_A,
    style: { foil: "gold", emblem: "none" },
    fact: "포도밭에서 세 성당의 삼종기도(앙젤뤼스) 종소리가 들린다는 데서 이름이 왔고, 라벨에도 금빛 종이 그려져 있다. 2012년 최고 등급 'A'에 올랐다.",
    quiz: [
      { q: "샤토 앙젤뤼스 라벨의 상징은?", a: "종", x: ["천사", "열쇠", "백합"] },
      { q: "샤토 앙젤뤼스와 함께 2012년 생테밀리옹 최고 등급 'A'에 오른 샤토는?", a: "샤토 파비", x: ["샤토 피작", "샤토 카농", "샤토 트로롱 몽도"] },
    ],
  }),
  mk({
    ...BX, id: "bx_pavie", name: "샤토 파비", original: "Château Pavie", producer: "제라르 페스", producerQ: true,
    sub: "생테밀리옹", grape: "메를로·카베르네 프랑·카베르네 소비뇽", type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1f2430", cls: SE_A,
    fact: "1998년 제라르 페스가 사들여 대대적으로 투자했고, 2012년 앙젤뤼스와 함께 생테밀리옹 최고 등급 'A'로 올랐다.",
    quiz: [{ q: "샤토 파비를 1998년에 사들인 인물은?", a: "제라르 페스", x: ["위베르 드 부아르", "알랭 보티에", "베르나르 마그레즈"] }],
  }),
  mk({
    ...BX, id: "bx_figeac", name: "샤토 피작", original: "Château Figeac", producer: "마농쿠르 가문",
    sub: "생테밀리옹", grape: "카베르네 소비뇽·카베르네 프랑·메를로", type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620", cls: SE_1,
    fact: "생테밀리옹에서 드물게 카베르네 두 품종이 절반을 넘는다. 이웃 슈발 블랑은 19세기에 피작 영지에서 떨어져 나간 땅이다.",
    quiz: [
      { q: "19세기 샤토 피작 영지 일부가 떨어져 나가 생긴 유명 샤토는?", a: "샤토 슈발 블랑", x: ["샤토 오존", "샤토 앙젤뤼스", "샤토 파비"] },
      { q: "샤토 피작이 생테밀리옹 최고 등급 'A'에 오른 해는?", a: "2022년", x: ["2012년", "1996년", "2006년"] },
    ],
  }),
  mk({
    ...BX, id: "bx_canon", name: "샤토 카농", original: "Château Canon", producer: "샤넬 (베르트하이머 가문)", producerQ: true,
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 2, shape: "bordeaux", cap: "#5a1a22", cls: SE_1,
    fact: "18세기 소유주 자크 카농의 이름을 딴 생테밀리옹의 프리미에 그랑 크뤼 클라세. 1996년 샤넬을 소유한 베르트하이머 가문이 사들였다.",
    quiz: [{ q: "샤토 카농과 마고의 로장 세글라를 함께 소유한 곳은?", a: "샤넬 (베르트하이머 가문)", x: ["LVMH", "AXA 밀레짐", "루이 로드레"] }],
  }),
  mk({
    ...BX, id: "bx_belairmonange", name: "샤토 벨레르 모낭주", original: "Château Bélair-Monange", producer: "장 피에르 무에크스", producerQ: true,
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: SE_1, since: 2008,
    fact: "2008년 무에크스 가문이 옛 샤토 벨레르를 사들여 가문의 안 아델 모낭주를 기려 이름을 바꿨다. 2012년 이웃 샤토 마들렌을 합쳤다.",
    quiz: [{ q: "2012년 샤토 벨레르 모낭주에 합쳐진 무에크스 가문의 샤토는?", a: "샤토 마들렌", x: ["샤토 카농", "샤토 트로롱 몽도", "클로 푸르테"] }],
  }),
  mk({
    ...BX, id: "bx_troplongmondot", name: "샤토 트로롱 몽도", original: "Château Troplong Mondot", producer: "SCOR", producerQ: true,
    sub: "생테밀리옹", grape: "메를로·카베르네 소비뇽·카베르네 프랑", type: "red", tier: 3, shape: "bordeaux", cap: "#4a1a22", cls: SE_1,
    fact: "생테밀리옹에서 손꼽히게 높은 석회암 언덕 위에 자리한다. 2006년 프리미에 그랑 크뤼 클라세에 올랐고, 2017년 재보험사 SCOR가 사들였다.",
    quiz: [{ q: "샤토 트로롱 몽도를 2017년에 사들인 곳은?", a: "재보험사 SCOR", x: ["AXA 밀레짐", "샤넬", "산토리"] }],
  }),
  mk({
    ...BX, id: "bx_valandraud", name: "샤토 발랑드로", original: "Château Valandraud", producer: "장 뤽 튀네뱅", producerQ: true,
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 2, shape: "bordeauxHeavy", cap: "#1a1416", cls: SE_1, since: 1991,
    fact: "장 뤽 튀네뱅과 뮈리엘 앙드로 부부가 작은 창고에서 빚기 시작한 '가라지 와인'의 원조. 1991년 첫 빈티지를 내고 2012년 프리미에 그랑 크뤼 클라세에 올랐다.",
    quiz: [
      { q: "샤토 발랑드로처럼 작은 창고에서 소량 빚어 1990년대 돌풍을 일으킨 와인을 부르는 말은?", a: "가라지 와인", x: ["내추럴 와인", "슈퍼 투스칸", "오렌지 와인"] },
      { q: "샤토 발랑드로를 만든 사람은?", a: "장 뤽 튀네뱅", x: ["제라르 페스", "미셸 롤랑", "위베르 드 부아르"] },
    ],
  }),
  mk({
    ...BX, id: "bx_lamondotte", name: "라 몽도트", original: "La Mondotte", producer: "폰 나이페르크 가문", producerQ: true,
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620", cls: SE_1, since: 1996,
    fact: "폰 나이페르크 백작 가문의 작은 포도밭에서 1996년 첫 빈티지가 나왔다. 2012년 등급 개정에서 곧바로 프리미에 그랑 크뤼 클라세에 올랐다.",
    quiz: [{ q: "라 몽도트를 소유한 가문은?", a: "폰 나이페르크 가문", x: ["보티에 가문", "무에크스 가문", "베코 가문"] }],
  }),
  mk({
    ...BX, id: "bx_tertreroteboeuf", name: "샤토 테르트르 로트뵈프", original: "Château Tertre Rôteboeuf", producer: "프랑수아 미자빌",
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822",
    fact: "'소가 트림하는 언덕'이라는 뜻으로, 비탈이 가팔라 밭 갈던 소가 헐떡였다는 데서 이름이 왔다. 등급 없이도 최정상급 값에 팔린다.",
    quiz: [{ q: "샤토 테르트르 로트뵈프 이름의 뜻은?", a: "소가 트림하는 언덕", x: ["구운 소고기의 언덕", "붉은 황소의 들판", "농부가 쉬는 비탈"] }],
  }),
  mk({
    ...BX, id: "bx_beausejourbecot", name: "샤토 보세주르 베코", original: "Château Beau-Séjour Bécot", producer: "베코 가문",
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22", cls: SE_1,
    fact: "1980년대 등급 개정 때 등급 없는 밭을 합쳤다는 이유로 강등됐다가 1996년 프리미에 그랑 크뤼 클라세를 되찾았다. 베코 가문이 운영한다.",
    quiz: [{ q: "샤토 보세주르 베코가 1980년대 강등됐다가 1996년 되찾은 등급은?", a: "프리미에 그랑 크뤼 클라세", x: ["크뤼 부르주아", "그랑 크뤼 클라세 드 그라브", "1855년 2등급"] }],
  }),
  mk({
    ...BX, id: "bx_closfourtet", name: "클로 푸르테", original: "Clos Fourtet", producer: "퀴블리에 가문", producerQ: true,
    sub: "생테밀리옹", grape: "메를로·카베르네 소비뇽·카베르네 프랑", type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: SE_1,
    fact: "생테밀리옹 마을 성벽 바로 앞에 있으며, 땅 밑으로 석회암 채석장 셀러가 뚫려 있다. 2001년 퀴블리에 가문이 사들였다.",
    quiz: [{ q: "2001년 클로 푸르테를 사들인 가문은?", a: "퀴블리에 가문", x: ["뤼르통 가문", "베코 가문", "페스 가문"] }],
  }),
  mk({
    ...BX, id: "bx_larcisducasse", name: "샤토 라르시 뒤카스", original: "Château Larcis Ducasse", producer: "샤토 라르시 뒤카스",
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620", cls: SE_1,
    fact: "파비와 이웃한 남향 비탈의 계단식 포도밭에서 나온다. 2012년 등급 개정에서 프리미에 그랑 크뤼 클라세로 올랐다.",
    quiz: [{ q: "샤토 라르시 뒤카스가 프리미에 그랑 크뤼 클라세로 오른 해는?", a: "2012년", x: ["1996년", "2006년", "1955년"] }],
  }),
  mk({
    ...BX, id: "bx_paviemacquin", name: "샤토 파비 마캥", original: "Château Pavie Macquin", producer: "코르 마캥 가문",
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#4a1a22", cls: SE_1,
    fact: "필록세라 뒤 미국산 대목에 접붙이는 방법을 생테밀리옹에 퍼뜨린 알베르 마캥의 이름을 땄다. 2006년 프리미에 그랑 크뤼 클라세에 올랐다.",
    quiz: [{ q: "샤토 파비 마캥에 이름을 남긴 알베르 마캥의 업적은?", a: "필록세라 뒤 미국 대목 접붙이기를 퍼뜨렸다", x: ["보르도액을 발명했다", "1855년 등급표를 만들었다", "처음으로 샤토에서 병입했다"] }],
  }),
  mk({
    ...BX, id: "bx_canonlagaffeliere", name: "샤토 카농 라 가플리에르", original: "Château Canon-la-Gaffelière", producer: "폰 나이페르크 가문", producerQ: true,
    sub: "생테밀리옹", grape: "메를로·카베르네 프랑·카베르네 소비뇽", type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: SE_1,
    fact: "1971년부터 폰 나이페르크 백작 가문이 소유한 생테밀리옹 샤토. 2012년 프리미에 그랑 크뤼 클라세에 올랐다.",
    quiz: [{ q: "샤토 카농 라 가플리에르와 라 몽도트를 함께 가진 가문은?", a: "폰 나이페르크 가문", x: ["베르트하이머 가문", "무에크스 가문", "보티에 가문"] }],
  }),

  // ───────── 페삭레오냥
  mk({
    ...BX, id: "bx_missionhautbrion", name: "샤토 라 미시옹 오브리옹", original: "Château La Mission Haut-Brion", producer: "도멘 클라렌스 딜롱", producerQ: true,
    sub: "페삭레오냥", grape: "카베르네 소비뇽·메를로·카베르네 프랑", type: "red", tier: 2, shape: "bordeaux", cap: "#20263a", cls: GRAVES,
    fact: "17세기 이 땅을 가꾼 선교회(라자로회) 사제들에게서 이름이 왔다. 1983년 길 건너 오브리옹을 가진 딜롱 가문이 사들였다.",
    quiz: [
      { q: "샤토 라 미시옹 오브리옹을 1983년에 사들인 곳은?", a: "도멘 클라렌스 딜롱", x: ["베르나르 마그레즈", "카티아르 가문", "루이 로드레"] },
      { q: "샤토 라 미시옹 오브리옹의 '미시옹'이 가리키는 것은?", a: "옛 선교회 사제들", x: ["군사 원정대", "외교 사절단", "탐험대"] },
    ],
  }),
  mk({
    ...BX, id: "bx_papeclement", name: "샤토 파프 클레망", original: "Château Pape Clément", producer: "베르나르 마그레즈", producerQ: true,
    sub: "페삭레오냥", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#7a1a22", cls: GRAVES,
    fact: "1305년 교황 클레멘스 5세가 된 보르도 대주교 베르트랑 드 고트가 가졌던 포도밭. 지금은 베르나르 마그레즈가 운영한다.",
    quiz: [{ q: "샤토 파프 클레망에 이름을 남긴 교황 클레멘스 5세가 교황청을 옮긴 곳은?", a: "아비뇽", x: ["보르도", "리옹", "랭스"] }],
  }),
  mk({
    ...BX, id: "bx_smithhautlafitte", name: "샤토 스미스 오 라피트", original: "Château Smith Haut Lafitte", producer: "카티아르 가문", producerQ: true,
    sub: "페삭레오냥", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620", cls: GRAVES,
    fact: "18세기 스코틀랜드 상인 조지 스미스의 이름이 남았다. 1990년 스키 선수 출신 카티아르 부부가 사들였고, 딸은 포도 화장품 '코달리'를 만들었다.",
    quiz: [
      { q: "샤토 스미스 오 라피트 카티아르 가문의 딸이 만든 화장품 브랜드는?", a: "코달리", x: ["록시땅", "눅스", "비오템"] },
      { q: "샤토 스미스 오 라피트를 1990년에 사들인 카티아르 부부의 이전 직업은?", a: "스키 선수", x: ["요트 선수", "사이클 선수", "테니스 선수"] },
    ],
  }),
  mk({
    ...BX, id: "bx_chevalier", name: "도멘 드 슈발리에", original: "Domaine de Chevalier", producer: "베르나르 가문",
    sub: "페삭레오냥", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#2f3a2a", cls: GRAVES,
    fact: "소나무 숲속 빈터에 자리한 페삭레오냥의 명가로, 레드와 화이트 모두 그라브 등급에 올랐다. 1983년부터 베르나르 가문이 운영한다.",
    quiz: [{ q: "도멘 드 슈발리에가 그라브 등급을 받은 와인은?", a: "레드와 화이트 모두", x: ["레드만", "화이트만", "스위트 와인만"] }],
  }),
  mk({
    ...BX, id: "bx_hautbailly", name: "샤토 오 바이", original: "Château Haut-Bailly", producer: "윌머스 가문",
    sub: "페삭레오냥", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: GRAVES,
    fact: "1998년 미국 은행가 로버트 윌머스가 사들였다. 100년이 넘은 고목들이 여러 품종 섞인 채 자라는 오래된 밭을 지키고 있다.",
    quiz: [{ q: "샤토 오 바이를 1998년에 사들인 로버트 윌머스의 국적은?", a: "미국", x: ["영국", "벨기에", "홍콩"] }],
  }),
  mk({
    ...BX, id: "bx_malartic", name: "샤토 말라르틱 라그라비에르", original: "Château Malartic-Lagravière", producer: "보니 가문",
    sub: "페삭레오냥", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#1f2a44", cls: GRAVES,
    fact: "18세기 제독 말라르틱 백작 집안의 이름이 붙었고, 라벨에 돛단배가 그려져 있다. 1997년 벨기에의 보니 가문이 사들였다.",
    quiz: [{ q: "샤토 말라르틱 라그라비에르를 1997년에 사들인 보니 가문의 국적은?", a: "벨기에", x: ["네덜란드", "스위스", "미국"] }],
  }),
  mk({
    ...BX, id: "bx_carbonnieux", name: "샤토 카르보니외", original: "Château Carbonnieux", producer: "페랭 가문",
    sub: "페삭레오냥", grape: "소비뇽 블랑·세미용", type: "white", tier: 3, shape: "bordeaux", glass: "flint", cap: "#d8c9a0", cls: GRAVES,
    fact: "옛 베네딕도회 수도사들이 술을 금하는 오스만 술탄에게 '카르보니외 광천수'라며 화이트 와인을 팔았다는 일화가 유명하다.",
    quiz: [{ q: "샤토 카르보니외 수도사들이 오스만 술탄에게 와인을 팔 때 붙였다는 이름은?", a: "카르보니외 광천수", x: ["카르보니외 성수", "카르보니외 약초차", "카르보니외 포도즙"] }],
  }),
  mk({
    ...BX, id: "bx_lescarmes", name: "샤토 레 카름 오브리옹", original: "Château Les Carmes Haut-Brion", producer: "파트리스 피셰",
    sub: "페삭레오냥", grape: "카베르네 프랑·메를로·카베르네 소비뇽", type: "red", tier: 3, shape: "bordeaux", cap: "#1c1a1a",
    fact: "옛 카르멜회 수도사들의 포도밭이 이름에 남았다. 2010년 파트리스 피셰가 사들여 필리프 스탁이 설계한 배 모양 셀러를 지었다.",
    quiz: [{ q: "샤토 레 카름 오브리옹의 새 셀러를 설계한 디자이너는?", a: "필리프 스탁", x: ["장 누벨", "프랭크 게리", "안도 다다오"] }],
  }),

  // ───────── 소테른 · 바르삭
  mk({
    ...BX, id: "bx_suduiraut", name: "샤토 쉬뒤로", original: "Château Suduiraut", producer: "AXA 밀레짐", producerQ: true,
    sub: "소테른", grape: "세미용·소비뇽 블랑", type: "sweet", tier: 3, shape: "bordeaux", glass: "flint", cap: "#c9a857", cls: SAUT1,
    fact: "디켐과 맞닿은 소테른의 1등급. 정원은 베르사유 정원을 만든 르 노트르가 설계했다고 전하며, 1992년부터 AXA 밀레짐이 소유한다.",
    quiz: [{ q: "샤토 쉬뒤로를 1992년부터 소유한 곳은?", a: "AXA 밀레짐", x: ["LVMH", "도멘 바롱 드 로칠드", "도멘 클라렌스 딜롱"] }],
  }),
  mk({
    ...BX, id: "bx_rieussec", name: "샤토 리외섹", original: "Château Rieussec", producer: "도멘 바롱 드 로칠드 (라피트)", producerQ: true,
    sub: "소테른", grape: "세미용·소비뇽 블랑", type: "sweet", tier: 3, shape: "bordeaux", glass: "flint", cap: "#caa24e", cls: SAUT1,
    fact: "1984년 라피트의 로칠드 가문이 사들인 소테른의 1등급으로, 디켐과 이웃한 파르그 마을에 있다.",
    quiz: [{ q: "샤토 리외섹을 1984년에 사들인 곳은?", a: "라피트 로칠드의 로칠드 가문", x: ["AXA 밀레짐", "무통 로칠드의 로칠드 가문", "LVMH"] }],
  }),
  mk({
    ...BX, id: "bx_climens", name: "샤토 클리망", original: "Château Climens", producer: "샤토 클리망",
    sub: "바르삭", grape: "세미용", type: "sweet", tier: 3, shape: "bordeaux", glass: "flint", cap: "#d4b24c", cls: SAUT1,
    fact: "'바르삭의 군주'라 불리는 1등급. 세미용 100%로 만들며 바이오다이내믹 농법으로 가꿨다.",
    quiz: [{ q: "샤토 클리망에 붙은 별명은?", a: "바르삭의 군주", x: ["소테른의 여왕", "메독의 베르사유", "가난한 자의 디켐"] }],
  }),
  mk({
    ...BX, id: "bx_coutet", name: "샤토 쿠테", original: "Château Coutet", producer: "발리 가문",
    sub: "바르삭", grape: "세미용·소비뇽 블랑", type: "sweet", tier: 3, shape: "bordeaux", glass: "flint", cap: "#c9a857", cls: SAUT1,
    fact: "중세 요새 건물이 남아 있는 바르삭의 1등급. 뛰어난 해에만 소량 내는 '퀴베 마담'으로 유명하다.",
    quiz: [{ q: "샤토 쿠테가 뛰어난 해에만 소량 만드는 특별 퀴베는?", a: "퀴베 마담", x: ["퀴베 루이즈", "레제르브 뒤 제네랄", "퀴베 프레스티주"] }],
  }),
  mk({
    ...BX, id: "bx_guiraud", name: "샤토 기로", original: "Château Guiraud", producer: "샤토 기로",
    sub: "소테른", grape: "세미용·소비뇽 블랑", type: "sweet", tier: 3, shape: "bordeaux", glass: "flint", cap: "#d8c9a0", cls: SAUT1,
    fact: "유기농 인증을 받은 소테른의 1등급. 2006년 푸조 가문의 로베르 푸조와 도멘 드 슈발리에의 올리비에 베르나르 등이 함께 사들였다.",
    quiz: [{ q: "2006년 샤토 기로 인수에 참여한 자동차 가문은?", a: "푸조 가문", x: ["르노 가문", "시트로엥 가문", "미쉐린 가문"] }],
  }),
  mk({
    ...BX, id: "bx_latourblanche", name: "샤토 라 투르 블랑슈", original: "Château La Tour Blanche", producer: "프랑스 농업부", producerQ: true,
    sub: "소테른", grape: "세미용·소비뇽 블랑", type: "sweet", tier: 3, shape: "bordeaux", glass: "flint", cap: "#e0d2a8", cls: SAUT1,
    fact: "1907년 소유주 다니엘 이플라 오시리스가 포도 재배·양조 학교를 세운다는 조건으로 국가에 기증했다. 지금도 농업부 소속 학교가 운영한다.",
    quiz: [{ q: "샤토 라 투르 블랑슈의 소유주는?", a: "프랑스 국가(농업부)", x: ["보르도 대학교", "보르도 시", "소테른 생산자 조합"] }],
  }),
  mk({
    ...BX, id: "bx_lafauriepeyraguey", name: "샤토 라포리 페라게", original: "Château Lafaurie-Peyraguey", producer: "실비오 덴츠 (랄리크)", producerQ: true,
    sub: "소테른", grape: "세미용·소비뇽 블랑", type: "sweet", tier: 3, shape: "bordeaux", glass: "flint", cap: "#c9a857", cls: SAUT1,
    fact: "2014년 크리스털 브랜드 랄리크의 회장 실비오 덴츠가 사들여 샤토 안에 랄리크 호텔과 레스토랑을 열었다.",
    quiz: [{ q: "샤토 라포리 페라게와 손잡은 크리스털 브랜드는?", a: "랄리크", x: ["바카라", "스와로브스키", "리델"] }],
  }),
  mk({
    ...BX, id: "bx_fargues", name: "샤토 드 파르그", original: "Château de Fargues", producer: "뤼르 살뤼스 가문", producerQ: true,
    sub: "소테른", grape: "세미용·소비뇽 블랑", type: "sweet", tier: 3, shape: "bordeaux", glass: "flint", cap: "#b8952f",
    fact: "디켐을 오래 소유했던 뤼르 살뤼스 가문이 15세기부터 지켜 온 영지. 등급은 없지만 디켐에 버금가는 소테른으로 꼽힌다.",
    quiz: [{ q: "샤토 드 파르그를 가진 뤼르 살뤼스 가문이 오랫동안 소유했던 소테른 특등급 샤토는?", a: "샤토 디켐", x: ["샤토 쉬뒤로", "샤토 클리망", "샤토 리외섹"] }],
  }),

  // ───────── 크뤼 부르주아·등급 밖 명가
  mk({
    ...BX, id: "bx_sociandomallet", name: "샤토 소시앙도 말레", original: "Château Sociando-Mallet", producer: "고트로 가문",
    sub: "오메독", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620",
    fact: "1969년 네고시앙 장 고트로가 사들여 등급 샤토 못지않은 와인으로 키웠다. 크뤼 부르주아 심사에 참여하지 않고 이름만으로 팔린다.",
    quiz: [{ q: "샤토 소시앙도 말레를 1969년에 사들여 키운 인물은?", a: "장 고트로", x: ["앙리 마르탱", "장 미셸 카즈", "알렉시스 리신"] }],
  }),
  mk({
    ...BX, id: "bx_chassespleen", name: "샤토 샤스 스플린", original: "Château Chasse-Spleen", producer: "샤토 샤스 스플린",
    sub: "물리스", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#6a1822",
    fact: "'우울(spleen)을 쫓는다'는 뜻으로, 바이런 또는 보들레르가 붙였다는 이야기가 전한다. 크뤼 부르주아의 대표 주자로 꼽힌다.",
    quiz: [{ q: "샤토 샤스 스플린 이름의 뜻은?", a: "우울을 쫓아낸다", x: ["사냥꾼의 휴식", "빛나는 언덕", "바람을 막는 숲"] }],
  }),
  mk({
    ...BX, id: "bx_gloria", name: "샤토 글로리아", original: "Château Gloria", producer: "앙리 마르탱 가족",
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#6a1822",
    fact: "생쥘리앵 시장 앙리 마르탱이 1940년대부터 이웃 등급 샤토들의 밭을 한 필지씩 사 모아 만들었다. 등급은 없지만 등급 샤토 못지않은 대접을 받는다.",
    quiz: [{ q: "샤토 글로리아를 세운 사람은?", a: "앙리 마르탱", x: ["장 고트로", "알렉시스 리신", "필리프 드 로칠드"] }],
  }),
  mk({
    ...BX, id: "bx_phelansegur", name: "샤토 펠랑 세귀르", original: "Château Phélan Ségur", producer: "샤토 펠랑 세귀르",
    sub: "생테스테프", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5a1a22",
    fact: "19세기 아일랜드 출신 버나드 펠런이 일군 생테스테프의 영지. 등급 밖이지만 그랑 크뤼 클라세급으로 평가받는다.",
    quiz: [{ q: "샤토 펠랑 세귀르에 이름을 남긴 버나드 펠런의 출신지는?", a: "아일랜드", x: ["스코틀랜드", "잉글랜드", "네덜란드"] }],
  }),
  mk({
    ...BX, id: "bx_potensac", name: "샤토 포탕삭", original: "Château Potensac", producer: "들롱 가문", producerQ: true,
    sub: "메독", grape: "메를로·카베르네 소비뇽", type: "red", tier: 3, shape: "bordeaux", cap: "#4a1219",
    fact: "레오빌 라스 카즈의 들롱 가문이 운영하는 메독 북쪽의 샤토로, 값에 비해 품질이 좋기로 이름났다.",
    quiz: [{ q: "샤토 포탕삭을 운영하는 가문은?", a: "들롱 가문", x: ["카즈 가문", "보리 가문", "퀴블리에 가문"] }],
  }),
  mk({
    ...BX, id: "bx_poujeaux", name: "샤토 푸조", original: "Château Poujeaux", producer: "퀴블리에 가문", producerQ: true,
    sub: "물리스", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822",
    fact: "물리스를 대표하는 샤토로, 2008년 생테밀리옹의 클로 푸르테를 가진 퀴블리에 가문이 사들였다.",
    quiz: [{ q: "샤토 푸조와 생테밀리옹의 클로 푸르테를 함께 가진 가문은?", a: "퀴블리에 가문", x: ["뤼르통 가문", "들롱 가문", "무에크스 가문"] }],
  }),
  mk({
    ...BX, id: "bx_clarke", name: "샤토 클라크", original: "Château Clarke", producer: "에드몽 드 로칠드 가문", producerQ: true,
    sub: "리스트락", grape: "메를로·카베르네 소비뇽", type: "red", tier: 3, shape: "bordeaux", cap: "#1f2a44",
    fact: "1973년 에드몽 드 로칠드 남작이 사들여 포도밭을 새로 심은 리스트락의 샤토.",
    quiz: [{ q: "샤토 클라크를 1973년에 사들인 인물은?", a: "에드몽 드 로칠드", x: ["필리프 드 로칠드", "에릭 드 로칠드", "클래런스 딜런"] }],
  }),
  mk({
    ...BX, id: "bx_depez", name: "샤토 드 페즈", original: "Château de Pez", producer: "루이 로드레", producerQ: true,
    sub: "생테스테프", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620",
    fact: "1995년 샴페인 하우스 루이 로드레가 사들인 생테스테프 샤토. 로드레는 뒤에 피숑 콩테스까지 사들였다.",
    quiz: [{ q: "샤토 드 페즈를 1995년에 사들인 샴페인 하우스는?", a: "루이 로드레", x: ["볼랭저", "뵈브 클리코", "폴 로저"] }],
  }),
  mk({
    ...BX, id: "bx_angludet", name: "샤토 당글뤼데", original: "Château d'Angludet", producer: "시셸 가문", producerQ: true,
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22",
    fact: "1961년 시셸 가문이 사들인 마고의 샤토. 이 가문은 3등급 샤토 팔머의 공동 소유주이기도 하다.",
    quiz: [{ q: "샤토 당글뤼데를 운영하는 시셸 가문이 공동 소유한 3등급 샤토는?", a: "샤토 팔머", x: ["샤토 지스쿠르", "샤토 키르완", "샤토 디상"] }],
  }),
  mk({
    ...BX, id: "bx_ormesdepez", name: "샤토 오름 드 페즈", original: "Château Ormes de Pez", producer: "카즈 가문", producerQ: true,
    sub: "생테스테프", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#2a1c1c",
    fact: "린치 바주를 가진 카즈 가문이 1940년부터 운영하는 생테스테프의 샤토.",
    quiz: [{ q: "샤토 오름 드 페즈를 운영하는 가문은?", a: "카즈 가문", x: ["들롱 가문", "테스롱 가문", "보리 가문"] }],
  }),

  // ───────── 세컨드 와인
  mk({
    ...BX, id: "bx_carruades", name: "카뤼아드 드 라피트", original: "Carruades de Lafite", producer: "샤토 라피트 로칠드", producerQ: true,
    sub: "포이약", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620", cls: SECOND,
    fact: "라피트 로칠드의 세컨드 와인. 이름은 라피트 영지에 합쳐진 '카뤼아드' 언덕의 포도밭에서 왔다.",
    quiz: [{ q: "2000년대 후반 카뤼아드 드 라피트의 값을 치솟게 한 수요는 주로 어느 나라에서 나왔을까?", a: "중국", x: ["일본", "러시아", "인도"] }],
  }),
  mk({
    ...BX, id: "bx_pavillonrouge", name: "파비용 루즈 뒤 샤토 마고", original: "Pavillon Rouge du Château Margaux", producer: "샤토 마고", producerQ: true,
    sub: "마고", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#6a1b24", cls: SECOND,
    fact: "샤토 마고의 세컨드 와인으로, 1908년 처음 '파비용 루즈'라는 이름을 달았다.",
    quiz: [{ q: "파비용 루즈 뒤 샤토 마고와 짝을 이루는 샤토 마고의 화이트 와인은?", a: "파비용 블랑", x: ["엘 다르장", "카유 블랑", "블랑 드 린치 바주"] }],
  }),
  mk({
    ...BX, id: "bx_fortsdelatour", name: "레 포르 드 라투르", original: "Les Forts de Latour", producer: "샤토 라투르", producerQ: true,
    sub: "포이약", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#7a1a22", cls: SECOND,
    fact: "샤토 라투르의 세컨드 와인으로 1966년 첫 빈티지가 나왔다. 라투르처럼 충분히 숙성시킨 뒤에야 출시한다.",
    quiz: [{ q: "레 포르 드 라투르의 첫 빈티지는?", a: "1966년", x: ["1945년", "1982년", "1990년"] }],
  }),
  mk({
    ...BX, id: "bx_petitmouton", name: "르 프티 무통 드 무통 로칠드", original: "Le Petit Mouton de Mouton Rothschild", producer: "샤토 무통 로칠드", producerQ: true,
    sub: "포이약", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#1c1a1a", cls: SECOND, since: 1997,
    fact: "무통 로칠드의 세컨드 와인으로 1990년대에 처음 선보였다. 같은 샤토의 화이트 와인은 '엘 다르장'이다.",
    quiz: [{ q: "르 프티 무통을 만드는 샤토에서 내는 화이트 와인은?", a: "엘 다르장", x: ["파비용 블랑", "카유 블랑", "블랑 드 린치 바주"] }],
  }),
  mk({
    ...BX, id: "bx_clarence", name: "르 클라랑스 드 오브리옹", original: "Le Clarence de Haut-Brion", producer: "샤토 오브리옹", producerQ: true,
    sub: "페삭레오냥", grape: "메를로·카베르네 소비뇽", type: "red", tier: 3, shape: "bordeaux", cap: "#20263a", cls: SECOND, since: 2007,
    fact: "1935년 오브리옹을 사들인 미국 은행가 클래런스 딜런을 기려 2007년 '바앙 오브리옹'에서 이름을 바꾼 세컨드 와인.",
    quiz: [
      { q: "르 클라랑스 드 오브리옹의 예전 이름은?", a: "바앙 오브리옹", x: ["라 샤펠 드 라 미시옹", "카뤼아드 드 오브리옹", "파비용 드 오브리옹"] },
      { q: "르 클라랑스 드 오브리옹이 기리는 인물은?", a: "미국 은행가 클래런스 딜런", x: ["교황 클레멘스 5세", "영국 왕 찰스 2세", "나폴레옹 3세"] },
    ],
  }),
  mk({
    ...BX, id: "bx_alterego", name: "알테르 에고 드 팔머", original: "Alter Ego de Palmer", producer: "샤토 팔머", producerQ: true,
    sub: "마고", grape: "메를로·카베르네 소비뇽", type: "red", tier: 2, shape: "bordeaux", cap: "#16130f", cls: SECOND, since: 1998,
    style: { paper: "#121110", ink: "#d8bd78", accent: "#c9a24e", foil: "gold" },
    fact: "1998년 예전 세컨드 와인 '레제르브 뒤 제네랄'을 대신해 나왔다. 이름처럼 팔머의 '또 다른 자아'로 따로 빚는다.",
    quiz: [{ q: "알테르 에고 드 팔머가 나오기 전 샤토 팔머의 세컨드 와인 이름은?", a: "레제르브 뒤 제네랄", x: ["파비용 루즈", "레 포르", "클로 뒤 마르키"] }],
  }),
  mk({
    ...BX, id: "bx_petitcheval", name: "르 프티 슈발", original: "Le Petit Cheval", producer: "샤토 슈발 블랑", producerQ: true,
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 2, shape: "bordeaux", cap: "#d4b24c", cls: SECOND,
    fact: "슈발 블랑의 세컨드 와인으로 1988년 첫선을 보였다.",
    quiz: [{ q: "르 프티 슈발을 만드는 샤토 슈발 블랑을 1998년에 사들인 사람들은?", a: "베르나르 아르노와 알베르 프레르", x: ["프랑수아 피노", "베르트하이머 형제", "부이그 형제"] }],
  }),
  mk({
    ...BX, id: "bx_closdumarquis", name: "클로 뒤 마르키", original: "Clos du Marquis", producer: "샤토 레오빌 라스 카즈", producerQ: true,
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#4a1219",
    fact: "오랫동안 레오빌 라스 카즈의 세컨드 와인으로 여겨졌지만, 2007년부터는 따로 떨어진 밭에서 나오는 독립 와인으로 만든다.",
    quiz: [{ q: "2007년부터 클로 뒤 마르키 대신 레오빌 라스 카즈의 세컨드 와인이 된 와인은?", a: "르 프티 리옹 뒤 마르키 드 라스 카즈", x: ["레 포르 드 라투르", "레제르브 드 라 콩테스", "라 크루아 드 보카이유"] }],
  }),
  mk({
    ...BX, id: "bx_pagodesdecos", name: "레 파고드 드 코스", original: "Les Pagodes de Cos", producer: "샤토 코스 데스투르넬", producerQ: true,
    sub: "생테스테프", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6b1d22", cls: SECOND, since: 1994,
    fact: "코스 데스투르넬의 세컨드 와인으로, 셀러 지붕의 동양풍 탑(파고다)에서 이름을 땄다.",
    quiz: [{ q: "레 파고드 드 코스의 이름은 무엇에서 왔을까?", a: "셀러 지붕의 동양풍 탑", x: ["창업자의 인도 여행기", "포도밭의 소나무", "마을 성당의 종탑"] }],
  }),
  mk({
    ...BX, id: "bx_carillonangelus", name: "카리용 당젤뤼스", original: "Carillon d'Angélus", producer: "샤토 앙젤뤼스", producerQ: true,
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#c9a24e", cls: SECOND,
    fact: "앙젤뤼스의 세컨드 와인. '카리용'은 여러 종을 울리는 악기로, 종을 상징으로 삼는 앙젤뤼스와 이어진다.",
    quiz: [{ q: "카리용 당젤뤼스 이름 속 '카리용'이 뜻하는 것은?", a: "여러 종을 울리는 악기", x: ["작은 포도밭", "양치기의 피리", "수도원 정원"] }],
  }),

  // ───────── 화이트·브랜드
  mk({
    ...BX, id: "bx_pavillonblanc", name: "파비용 블랑 뒤 샤토 마고", original: "Pavillon Blanc du Château Margaux", producer: "샤토 마고", producerQ: true,
    grape: "소비뇽 블랑", type: "white", tier: 3, shape: "bordeaux", glass: "flint", cap: "#e2d6b0",
    fact: "마고 아펠라시옹은 레드만 인정해서 샤토 마고의 화이트는 'AOC 보르도'로 나온다. 소비뇽 블랑 100%로 만든다.",
    quiz: [{ q: "파비용 블랑 뒤 샤토 마고가 '마고' 원산지 표기를 쓰지 못하는 까닭은?", a: "마고 AOC는 레드 와인만 인정해서", x: ["세컨드 와인이라서", "오크통을 쓰지 않아서", "포도를 사다 만들어서"] }],
  }),
  mk({
    ...BX, id: "bx_moutoncadet", name: "무통 카데", original: "Mouton Cadet", producer: "바롱 필리프 드 로칠드", producerQ: true,
    grape: "메를로·카베르네 소비뇽·카베르네 프랑", type: "red", tier: 1, shape: "bordeaux", cap: "#6a1822",
    fact: "1930년 바롱 필리프 드 로칠드가 작황이 나빠 무통 로칠드로 내지 못한 와인을 따로 팔며 시작했다. '카데'는 막내라는 뜻으로 막내아들이던 필리프를 가리킨다.",
    quiz: [{ q: "무통 카데의 '카데(Cadet)'가 뜻하는 것은?", a: "막내", x: ["장남", "기사", "작은 양"] }],
  }),
  mk({
    ...BX, id: "bx_montperat", name: "샤토 몽페라", original: "Château Mont-Pérat", producer: "샤토 몽페라",
    grape: "메를로·카베르네 소비뇽·카베르네 프랑", type: "red", tier: 1, shape: "bordeaux", cap: "#5b1620",
    fact: "만화 '신의 물방울'에서 록 밴드 퀸의 음악에 비유되며 한국과 일본에서 큰 인기를 얻은 보르도 레드.",
    quiz: [{ q: "샤토 몽페라가 만화 '신의 물방울'에서 비유된 록 밴드는?", a: "퀸", x: ["비틀스", "롤링 스톤스", "레드 제플린"] }],
  }),
];
