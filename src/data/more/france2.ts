import type { Wine } from "../wines";
import { mk } from "../make";

// 한국어 산지·품종 이름 → 라벨용 원어 (lang.ts 에 없는 것만)
export const REGIONS: Record<string, string> = {
  "코트 드 부르": "Côtes de Bourg",
  카스티용: "Castillon Côtes de Bordeaux",
  프롱삭: "Fronsac",
  "프랑 코트 드 보르도": "Francs Côtes de Bordeaux",
  "앙트르 되 메르": "Entre-Deux-Mers",
  "코트 드 브루이": "Côte de Brouilly",
  "생 베랑": "Saint-Véran",
  방투: "Ventoux",
  "봄 드 브니즈": "Muscat de Beaumes-de-Venise",
  바케라스: "Vacqueyras",
  디지: "Dizy",
  위르빌: "Urville",
  앙보네: "Ambonnay",
  "카르 드 숌": "Quarts de Chaume",
  "크레망 드 루아르": "Crémant de Loire",
  게브빌레르: "Guebwiller",
  알피유: "Alpilles",
  "코토 덱상프로방스": "Coteaux d'Aix-en-Provence",
  "미네르부아 라 리비니에르": "Minervois-La Livinière",
  모리: "Maury",
  코르시카: "Corse",
  "코트 뒤 쥐라": "Côtes du Jura",
};

export const GRAPES: Record<string, string> = {
  "피노 블랑": "Pinot Blanc",
  오세루아: "Auxerrois",
  시아카렐루: "Sciaccarellu",
  니엘루치우: "Nielluccio",
};

const BX = { country: "프랑스", area: "보르도" } as const;
const BG = { country: "프랑스", area: "부르고뉴" } as const;
const RH = { country: "프랑스", area: "론" } as const;
const CH = { country: "프랑스", area: "샹파뉴" } as const;
const LO = { country: "프랑스", area: "루아르" } as const;
const AL = { country: "프랑스", area: "알자스" } as const;

const SE_1 = "Premier Grand Cru Classé";
const SE_GCC = "Grand Cru Classé";
const GRAVES = "Grand Cru Classé de Graves";
const SAUT1 = "Premier Cru Classé en 1855";
const SAUT2 = "Deuxième Cru Classé en 1855";
const SECOND = "Second Vin";

const CS_M = "카베르네 소비뇽·메를로";
const M_CF = "메를로·카베르네 프랑";
const M_CS = "메를로·카베르네 소비뇽";
const SEM_SB = "세미용·소비뇽 블랑";
const CHAMP3 = "샤르도네·피노 누아·피노 뫼니에";
const PN3 = "피노 누아·샤르도네·피노 뫼니에";

/** "○○는 어느 샤토의 세컨드 와인일까?" */
const secondQ = (name: string, a: string, x: [string, string, string]) => ({
  q: `${name}는 어느 샤토의 세컨드 와인일까?`,
  a,
  x,
});

export const WINES: Wine[] = [
  // ───────── 보르도 · 생테밀리옹 · 포므롤
  mk({
    ...BX, id: "fr2_lagaffeliere", name: "샤토 라 가플리에르", original: "Château La Gaffelière", producer: "말레 로크포르 가문",
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620", cls: SE_1,
    fact: "1705년부터 말레 로크포르 가문이 이어 온 생테밀리옹의 1등급. 1969년 포도밭에서 포도덩굴을 새긴 4세기 로마 저택의 모자이크가 나왔다.",
    quiz: [
      { q: "샤토 라 가플리에르를 1705년부터 소유해 온 가문은?", a: "말레 로크포르 가문", x: ["베코 가문", "폰 나이페르크 가문", "마농쿠르 가문"] },
      { q: "1969년 샤토 라 가플리에르 포도밭에서 발견된 유적은?", a: "포도덩굴 모자이크가 깔린 로마 시대 저택", x: ["중세 수도원의 지하 납골당", "백년전쟁 때의 요새 성벽", "선사 시대 동굴 벽화"] },
    ],
  }),
  mk({
    ...BX, id: "fr2_trottevieille", name: "샤토 트로트비에유", original: "Château Trottevieille", producer: "카스테자 가문",
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: SE_1,
    fact: "생테밀리옹 석회암 고원 동쪽 끝의 1등급. 필록세라가 덮치기 전인 1868년에 심은 카베르네 프랑 나무가 아직 살아 있다.",
    quiz: [{ q: "샤토 트로트비에유 포도밭에 아직 남아 있는 귀한 나무는?", a: "필록세라 이전인 1868년에 심은 카베르네 프랑", x: ["로마 시대부터 이어 온 메를로", "1990년대 칠레에서 들여온 카르메네르", "나폴레옹이 심게 했다는 말벡"] }],
  }),
  mk({
    ...BX, id: "fr2_beausejour", name: "샤토 보세주르 (뒤포 라가로스)", original: "Château Beauséjour", producer: "조제핀 뒤포 라가로스·쿠르탱 가문",
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 2, shape: "bordeaux", cap: "#4a1219", cls: SE_1,
    fact: "오랫동안 뒤포 라가로스 가문이 지켜 온 1등급. 2021년 경매 싸움 끝에 가문의 조제핀이 화장품 기업 클라랭스의 쿠르탱 가문과 손잡고 사들였다.",
    quiz: [{ q: "2021년 샤토 보세주르를 조제핀 뒤포 라가로스와 함께 사들인 쿠르탱 가문의 기업은?", a: "클라랭스(화장품)", x: ["샤넬", "로레알", "에르메스"] }],
  }),
  mk({
    ...BX, id: "fr2_soutard", name: "샤토 수타르", original: "Château Soutard", producer: "AG2R 라 몽디알", producerQ: true,
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22", cls: SE_GCC,
    fact: "생테밀리옹 석회암 고원의 그랑 크뤼 클라세. 오랜 가족 경영을 마치고 2006년 보험 그룹 라 몽디알에 팔렸다.",
    quiz: [{ q: "2006년 샤토 수타르를 사들인 곳은?", a: "보험 그룹 라 몽디알", x: ["AXA 밀레짐", "LVMH", "카스텔 그룹"] }],
  }),
  mk({
    ...BX, id: "fr2_quinault", name: "샤토 캥노 랑클로", original: "Château Quinault l'Enclos", producer: "베르나르 아르노·알베르 프레르", producerQ: true,
    sub: "생테밀리옹", grape: "메를로·카베르네 프랑·카베르네 소비뇽", type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822",
    fact: "리부른 시내 한복판에 자리한 드문 생테밀리옹 샤토. 2008년 샤토 슈발 블랑의 주인들이 사들여 유기농으로 바꿨다.",
    quiz: [{ q: "2008년 샤토 캥노 랑클로를 사들인 이들이 함께 가진 생테밀리옹의 명가는?", a: "샤토 슈발 블랑", x: ["샤토 오존", "샤토 앙젤뤼스", "샤토 파비"] }],
  }),
  mk({
    ...BX, id: "fr2_ladominique", name: "샤토 라 도미니크", original: "Château La Dominique", producer: "클레망 파야 가문",
    sub: "생테밀리옹", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#7a1a22", cls: SE_GCC,
    fact: "샤토 슈발 블랑과 맞닿은 그랑 크뤼 클라세. 장 누벨이 설계한 새 양조장 지붕에는 붉은 유리 자갈을 깐 레스토랑 '라 테라스 루주'가 있다.",
    quiz: [{ q: "샤토 라 도미니크의 붉은 새 양조장을 설계한 건축가는?", a: "장 누벨", x: ["마리오 보타", "안도 다다오", "노먼 포스터"] }],
  }),
  mk({
    ...BX, id: "fr2_faugeres", name: "샤토 포제르", original: "Château Faugères", producer: "실비오 덴츠", producerQ: true,
    sub: "생테밀리옹", grape: "메를로·카베르네 프랑·카베르네 소비뇽", type: "red", tier: 3, shape: "bordeaux", cap: "#4b1d1d",
    fact: "2005년 스위스 사업가 실비오 덴츠가 사들여 2012년 그랑 크뤼 클라세에 올렸다. 마리오 보타가 설계한 양조장은 '와인의 대성당'이라 불린다.",
    quiz: [
      { q: "샤토 포제르의 '와인의 대성당' 양조장을 설계한 건축가는?", a: "마리오 보타", x: ["장 누벨", "프랭크 게리", "렌초 피아노"] },
      { q: "샤토 포제르의 주인 실비오 덴츠가 사들여 호텔을 연 소테른 1등급 샤토는?", a: "샤토 라포리 페라게", x: ["샤토 쉬뒤로", "샤토 기로", "샤토 리외섹"] },
    ],
  }),
  mk({
    ...BX, id: "fr2_monbousquet", name: "샤토 몽부스케", original: "Château Monbousquet", producer: "제라르 페스", producerQ: true,
    sub: "생테밀리옹", grape: "메를로·카베르네 프랑·카베르네 소비뇽", type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620",
    fact: "1993년 제라르 페스 부부가 처음으로 사들인 샤토. 포도밭과 셀러를 통째로 손봐 2006년 그랑 크뤼 클라세에 올렸다.",
    quiz: [{ q: "샤토 몽부스케의 주인 제라르 페스가 이끄는 생테밀리옹 최고 등급(A) 샤토는?", a: "샤토 파비", x: ["샤토 피작", "샤토 카농", "샤토 트로플롱 몽도"] }],
  }),
  mk({
    ...BX, id: "fr2_petitvillage", name: "샤토 프티 빌라주", original: "Château Petit-Village", producer: "물랭 가문",
    sub: "포므롤", grape: "메를로·카베르네 소비뇽·카베르네 프랑", type: "red", tier: 2, shape: "bordeaux", cap: "#6a1822",
    fact: "포므롤 고원의 샤토. 1989년부터 30년 넘게 AXA 밀레짐이 소유하다 2020년 샤토 보르가르의 주인 물랭 가문에 팔렸다.",
    quiz: [{ q: "1989년부터 2020년까지 샤토 프티 빌라주를 소유했던 곳은?", a: "AXA 밀레짐", x: ["장 피에르 무에크스", "도멘 바롱 드 로칠드", "LVMH"] }],
  }),
  mk({
    ...BX, id: "fr2_desales", name: "샤토 드 살", original: "Château de Sales", producer: "샤토 드 살",
    sub: "포므롤", grape: "메를로·카베르네 프랑·카베르네 소비뇽", type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22",
    fact: "포므롤에서 가장 넓은 영지. 16세기부터 한 핏줄의 후손들이 대를 이어 소유해 왔고, 17세기 성은 역사 기념물이다.",
    quiz: [{ q: "샤토 드 살이 포므롤에서 가진 기록은?", a: "포므롤에서 가장 넓은 영지", x: ["포므롤에서 가장 작은 샤토", "포므롤 최초의 등급 샤토", "포므롤 유일의 화이트 와인 산지"] }],
  }),

  // ───────── 보르도 · 그라브 · 페삭 레오냥
  mk({
    ...BX, id: "fr2_fieuzal", name: "샤토 드 피외잘", original: "Château de Fieuzal", producer: "퀸 가문",
    sub: "페삭레오냥", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620", cls: GRAVES,
    fact: "레오냥의 그라브 등급 샤토. 2001년 아일랜드 사업가 로클런 퀸 부부가 사들여 양조장을 새로 지었고, 지금은 아들이 잇는다.",
    quiz: [{ q: "2001년 샤토 드 피외잘을 사들인 로클런 퀸의 국적은?", a: "아일랜드", x: ["스코틀랜드", "미국", "벨기에"] }],
  }),
  mk({
    ...BX, id: "fr2_latourmartillac", name: "샤토 라투르 마르티약", original: "Château Latour-Martillac", producer: "크레스만 가문", producerQ: true,
    sub: "페삭레오냥", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: GRAVES,
    fact: "이름은 안뜰에 남은 12세기 요새의 탑에서 왔다. 1930년부터 크레스만 가문이 소유하며, 금빛·모래빛 줄무늬 라벨은 1934년부터 쓴다.",
    quiz: [
      { q: "샤토 라투르 마르티약 안뜰의 탑을 세운 이들은 어느 철학자의 조상일까?", a: "몽테스키외", x: ["볼테르", "몽테뉴", "루소"] },
      { q: "샤토 라투르 마르티약을 1930년부터 소유해 온 가문은?", a: "크레스만 가문", x: ["뤼르통 가문", "카티아르 가문", "딜롱 가문"] },
    ],
  }),
  mk({
    ...BX, id: "fr2_olivier", name: "샤토 올리비에", original: "Château Olivier", producer: "드 베트만 가문",
    sub: "페삭레오냥", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22", cls: GRAVES,
    fact: "해자로 둘러싸인 중세 성이 그대로 남은 레오냥의 샤토. 19세기부터 드 베트만 가문이 소유한다.",
    quiz: [
      { q: "샤토 올리비에를 19세기부터 소유해 온 가문은?", a: "드 베트만 가문", x: ["뤼르 살뤼스 가문", "크레스만 가문", "보리 가문"] },
      { q: "샤토 올리비에가 1959년 그라브 등급에서 받은 것은?", a: "레드와 화이트 모두 등급", x: ["레드만 등급", "화이트만 등급", "스위트 와인 등급"] },
    ],
  }),
  mk({
    ...BX, id: "fr2_couhinslurton", name: "샤토 쿠앵 뤼르통 블랑", original: "Château Couhins-Lurton", producer: "앙드레 뤼르통 가문",
    sub: "페삭레오냥", grape: "소비뇽 블랑", type: "white", tier: 3, shape: "bordeaux", cap: "#e0d3ad", cls: GRAVES,
    fact: "소비뇽 블랑만으로 만드는 그라브 등급 화이트. 원래 한 영지였던 이웃 샤토 쿠앵은 국립 농업 연구소(INRAE)가 연구용으로 운영한다.",
    quiz: [{ q: "샤토 쿠앵 뤼르통과 한 영지였던 이웃 샤토 쿠앵의 주인은?", a: "프랑스 국립 농업 연구소(INRAE)", x: ["보르도 대학교", "보르도 대주교구", "AXA 밀레짐"] }],
  }),
  mk({
    ...BX, id: "fr2_lalouviere", name: "샤토 라 루비에르", original: "Château La Louvière", producer: "앙드레 뤼르통 가문",
    sub: "페삭레오냥", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822",
    fact: "1965년 앙드레 뤼르통이 사들여 되살린 레오냥의 샤토. 18세기 말에 지은 신고전주의 저택은 역사 기념물로 지정됐다.",
    quiz: [{ q: "샤토 라 루비에르를 1965년 사들여 되살린 인물은?", a: "앙드레 뤼르통", x: ["베르나르 마그레즈", "장 미셸 카즈", "다니엘 카티아르"] }],
  }),

  // ───────── 보르도 · 소테른 · 바르삭
  mk({
    ...BX, id: "fr2_doisydaene", name: "샤토 두아지 데인", original: "Château Doisy-Daëne", producer: "뒤부르디외 가문",
    sub: "바르삭", grape: SEM_SB, type: "sweet", tier: 2, shape: "bordeaux", glass: "flint", cap: "#c9a857", cls: SAUT2,
    fact: "1924년부터 뒤부르디외 가문이 이어 온 바르삭의 2등급. 1990년 드니 뒤부르디외가 당도를 두 배 가까이 끌어올린 '렉스트라바강'을 선보였다.",
    quiz: [{ q: "샤토 두아지 데인이 뛰어난 해에만 소량 만드는 초고당도 퀴베는?", a: "렉스트라바강", x: ["퀴베 마담", "퀴베 루이즈", "르 프티 무통"] }],
  }),
  mk({
    ...BX, id: "fr2_doisyvedrines", name: "샤토 두아지 베드린", original: "Château Doisy-Védrines", producer: "카스테자 가문",
    sub: "바르삭", grape: SEM_SB, type: "sweet", tier: 3, shape: "bordeaux", glass: "flint", cap: "#caa24e", cls: SAUT2,
    fact: "옛 두아지 영지가 19세기 중반 셋으로 나뉘며 생긴 바르삭의 2등급. 오랫동안 카스테자 가문이 대를 이어 가꿔 왔다.",
    quiz: [{ q: "샤토 두아지 베드린과 함께 옛 두아지 영지에서 갈라져 나온 바르삭의 2등급 샤토는?", a: "샤토 두아지 데인", x: ["샤토 쿠테", "샤토 클리망", "샤토 드 미라"] }],
  }),
  mk({
    ...BX, id: "fr2_sigalasrabaud", name: "샤토 시갈라 라보", original: "Château Sigalas-Rabaud", producer: "샤토 시갈라 라보",
    sub: "소테른", grape: SEM_SB, type: "sweet", tier: 2, shape: "bordeaux", glass: "flint", cap: "#c9a857", cls: SAUT1,
    fact: "옛 샤토 라보가 1903년 둘로 나뉘며 생긴 소테른의 1등급. 두 샤토는 1929년 다시 합쳤다가 1952년 완전히 갈라섰다.",
    quiz: [{ q: "샤토 시갈라 라보와 원래 한 영지였던 소테른 1등급 샤토는?", a: "샤토 라보 프로미", x: ["샤토 라포리 페라게", "샤토 기로", "샤토 쉬뒤로"] }],
  }),
  mk({
    ...BX, id: "fr2_rabaudpromis", name: "샤토 라보 프로미", original: "Château Rabaud-Promis", producer: "샤토 라보 프로미",
    sub: "소테른", grape: SEM_SB, type: "sweet", tier: 3, shape: "bordeaux", glass: "flint", cap: "#d4b060", cls: SAUT1,
    fact: "1903년 옛 샤토 라보의 큰 몫을 사들인 아드리앵 프로미의 이름이 붙은 소테른의 1등급. 이웃 시갈라 라보와 한 뿌리다.",
    quiz: [{ q: "샤토 라보 프로미 이름 속 '프로미'는 누구일까?", a: "1903년 라보 영지 일부를 사들인 아드리앵 프로미", x: ["영지를 세운 중세 기사", "19세기 보르도 시장", "귀부 와인을 처음 만든 수도사"] }],
  }),
  mk({
    ...BX, id: "fr2_closhautpeyraguey", name: "클로 오 페라게", original: "Clos Haut-Peyraguey", producer: "베르나르 마그레즈", producerQ: true,
    sub: "소테른", grape: SEM_SB, type: "sweet", tier: 3, shape: "bordeaux", glass: "flint", cap: "#c9a857", cls: SAUT1,
    fact: "1879년 상속 분할 때 페라게 영지의 언덕 꼭대기 쪽이 떨어져 나와 생긴 1등급. 2012년 보르도의 와인 사업가 베르나르 마그레즈가 사들였다.",
    quiz: [
      { q: "클로 오 페라게와 1879년까지 한 영지였던 샤토는?", a: "샤토 라포리 페라게", x: ["샤토 시갈라 라보", "샤토 쉬뒤로", "샤토 기로"] },
      { q: "2012년 클로 오 페라게를 사들인, 샤토 파프 클레망의 주인은?", a: "베르나르 마그레즈", x: ["실비오 덴츠", "앙드레 뤼르통", "제라르 페스"] },
    ],
  }),
  mk({
    ...BX, id: "fr2_raynevigneau", name: "샤토 드 렌 비뇨", original: "Château de Rayne Vigneau", producer: "샤토 드 렌 비뇨",
    sub: "소테른", grape: SEM_SB, type: "sweet", tier: 2, shape: "bordeaux", glass: "flint", cap: "#c9a857", cls: SAUT1,
    fact: "봄므 언덕의 소테른 1등급. 20세기 초 주인이던 드 로통 자작이 포도밭 흙에서 마노·자수정·사파이어 같은 보석을 찾아낸 일로 유명하다.",
    quiz: [{ q: "20세기 초 샤토 드 렌 비뇨 포도밭 흙에서 쏟아져 나온 것은?", a: "마노·자수정 같은 준보석", x: ["로마 시대 금화", "공룡 화석", "중세 기사의 갑옷"] }],
  }),
  mk({
    ...BX, id: "fr2_myrat", name: "샤토 드 미라", original: "Château de Myrat", producer: "드 퐁탁 가문",
    sub: "바르삭", grape: SEM_SB, type: "sweet", tier: 3, shape: "bordeaux", glass: "flint", cap: "#caa24e", cls: SAUT2, since: 1990,
    fact: "1976년 주인 막스 드 퐁탁이 스위트 와인으로는 수지가 맞지 않는다며 포도나무를 모두 뽑았다. 1988년 자녀들이 다시 심어 1990년산부터 되살아났다.",
    quiz: [{ q: "샤토 드 미라가 1976년에 겪은 일은?", a: "포도나무를 모두 뽑아 버렸다", x: ["큰불이 나 샤토가 불탔다", "우박으로 수확을 모두 잃었다", "1855년 등급을 박탈당했다"] }],
  }),
  mk({
    ...BX, id: "fr2_malle", name: "샤토 드 말", original: "Château de Malle", producer: "샤토 드 말",
    sub: "소테른", grape: SEM_SB, type: "sweet", tier: 3, shape: "bordeaux", glass: "flint", cap: "#d4b060", cls: SAUT2,
    fact: "17세기 성과 이탈리아식 정원이 역사 기념물로 지정된 소테른의 2등급. 정원 조각상에는 코메디아 델라르테의 인물들이 서 있다.",
    quiz: [{ q: "샤토 드 말 정원의 조각상에 등장하는 이탈리아 즉흥 가면극은?", a: "코메디아 델라르테", x: ["오페라 부파", "가부키", "그랑 기뇰"] }],
  }),

  // ───────── 보르도 · 메독
  mk({
    ...BX, id: "fr2_hautmarbuzet", name: "샤토 오 마르뷔제", original: "Château Haut-Marbuzet", producer: "뒤보스크 가문",
    sub: "생테스테프", grape: M_CS, type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620",
    fact: "1952년 에르베 뒤보스크가 7ha로 시작한 생테스테프의 샤토. 메를로 비중이 높고 해마다 새 오크통에서만 숙성해 부드럽고 화려하다.",
    quiz: [
      { q: "샤토 오 마르뷔제가 숙성에 쓰는 오크통은?", a: "해마다 모두 새 오크통", x: ["100년 넘은 큰 나무통", "오크통 없이 스테인리스 탱크", "아카시아 나무통"] },
      { q: "1952년 샤토 오 마르뷔제를 일군 가문은?", a: "뒤보스크 가문", x: ["카즈 가문", "들롱 가문", "보리 가문"] },
    ],
  }),
  mk({
    ...BX, id: "fr2_siran", name: "샤토 시랑", original: "Château Siran", producer: "미아이 가문",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822",
    fact: "미아이 가문이 대를 이어 온 마고의 샤토. 1980년 스위스식 핵 방공호를 지어 와인 3만 병을 보관하고, 같은 해부터 화가 라벨을 선보였다.",
    quiz: [
      { q: "샤토 시랑이 1980년 지하에 만든 와인 저장고의 정체는?", a: "핵 공격에 대비한 방공호", x: ["로마 시대 채석장", "옛 수도원 납골당", "2차 대전 때의 잠수함 기지"] },
      { q: "샤토 시랑이 1980년부터 2005년까지 해마다 라벨에 담은 것은?", a: "그해 사건을 주제로 한 화가의 그림", x: ["주인 가족의 초상", "포도밭 항공 사진", "수확 날짜만 적은 흰 라벨"] },
    ],
  }),
  mk({
    ...BX, id: "fr2_meyney", name: "샤토 메네", original: "Château Meyney", producer: "CA 그랑 크뤼 (크레디 아그리콜)", producerQ: true,
    sub: "생테스테프", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#4a1219",
    fact: "지롱드강을 내려다보는 생테스테프의 샤토로, 17세기에는 푀양회 수도원이었다. 2004년 크레디 아그리콜 그룹이 사들였다.",
    quiz: [
      { q: "샤토 메네의 건물은 17세기에 무엇이었을까?", a: "수도원", x: ["요새", "등대", "세관"] },
      { q: "2004년 샤토 메네를 사들인 은행 그룹은?", a: "크레디 아그리콜", x: ["BNP 파리바", "소시에테 제네랄", "로칠드 은행"] },
    ],
  }),
  mk({
    ...BX, id: "fr2_labegorce", name: "샤토 라베고르스", original: "Château Labégorce", producer: "페로도 가문",
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22",
    fact: "1989년 석유 사업가 위베르 페로도가 사들여 이웃 영지들까지 합쳐 키운 마고의 샤토. 지금은 딸 나탈리가 이끈다.",
    quiz: [{ q: "샤토 라베고르스를 가진 페로도 가문이 함께 운영하는 마고의 3등급 샤토는?", a: "샤토 마르키 달렘", x: ["샤토 지스쿠르", "샤토 팔머", "샤토 키르완"] }],
  }),
  mk({
    ...BX, id: "fr2_lanessan", name: "샤토 라네상", original: "Château Lanessan", producer: "부테이예 가문",
    sub: "오메독", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822",
    fact: "여덟 세대째 부테이예 가문이 이어 온 오메독의 샤토. 말굽 모양 마구간에 벨 에포크 시대 마차를 모은 말 박물관이 있다.",
    quiz: [{ q: "샤토 라네상의 볼거리로 이름난 것은?", a: "옛 마차를 모은 말 박물관", x: ["클래식 자동차 박물관", "와인병 박물관", "로마 유적 전시관"] }],
  }),
  mk({
    ...BX, id: "fr2_loudenne", name: "샤토 루덴", original: "Château Loudenne", producer: "샤토 루덴",
    sub: "메독", grape: M_CS, type: "red", tier: 3, shape: "bordeaux", cap: "#7a1a22",
    fact: "지롱드강 가에 선 분홍빛 샤토. 1875년부터 125년 동안 진으로 이름난 영국 길비 가문이 소유했다.",
    quiz: [{ q: "1875년부터 샤토 루덴을 소유한 영국 길비 가문이 이름을 떨친 술은?", a: "진", x: ["위스키", "사이다", "흑맥주"] }],
  }),
  mk({
    ...BX, id: "fr2_tourdeby", name: "샤토 라 투르 드 비", original: "Château La Tour de By", producer: "파제스 가문",
    sub: "메독", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620",
    fact: "메독 북쪽 베가당 마을의 샤토. 1825년 지롱드강을 오가는 배를 이끌려고 세운 등대 탑이 라벨에 그려져 있다.",
    quiz: [{ q: "샤토 라 투르 드 비 라벨의 탑은 원래 무엇이었을까?", a: "강을 오가는 배를 위한 등대", x: ["풍차", "성당 종탑", "비둘기 집"] }],
  }),

  // ───────── 보르도 · 주변 산지
  mk({
    ...BX, id: "fr2_roccambes", name: "샤토 로크 드 캉브", original: "Château Roc de Cambes", producer: "프랑수아 미자빌", producerQ: true,
    sub: "코트 드 부르", grape: M_CS, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822",
    fact: "지롱드강 오른쪽 기슭 코트 드 부르의 대표 샤토. 1988년 생테밀리옹 테르트르 로트뵈프의 주인 프랑수아 미자빌이 사들였다.",
    quiz: [{ q: "샤토 로크 드 캉브의 주인 프랑수아 미자빌이 만드는 생테밀리옹의 컬트 와인은?", a: "샤토 테르트르 로트뵈프", x: ["샤토 발랑드로", "라 몽도트", "샤토 앙젤뤼스"] }],
  }),
  mk({
    ...BX, id: "fr2_aiguilhe", name: "샤토 데길", original: "Château d'Aiguilhe", producer: "폰 나이페르크 가문", producerQ: true,
    sub: "카스티용", grape: M_CF, type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620",
    fact: "13세기 성의 폐허가 남은 카스티용 코트 드 보르도의 샤토. 1998년 말 폰 나이페르크 백작이 사들였다.",
    quiz: [{ q: "샤토 데길을 가진 폰 나이페르크 가문이 만드는 생테밀리옹 1등급 샤토는?", a: "샤토 카농 라 가플리에르", x: ["샤토 카농", "샤토 파비", "샤토 트로플롱 몽도"] }],
  }),
  mk({
    ...BX, id: "fr2_fontenil", name: "샤토 퐁트닐", original: "Château Fontenil", producer: "미셸·다니 롤랑 부부", producerQ: true,
    sub: "프롱삭", grape: "메를로", type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822",
    fact: "세계를 누비는 양조 컨설턴트 미셸 롤랑과 아내 다니가 1986년 사들인 프롱삭의 샤토. 부부가 자기 이름을 걸고 만드는 와인이다.",
    quiz: [{ q: "샤토 퐁트닐의 주인으로, '플라잉 와인메이커'로 불리는 보르도의 양조 컨설턴트는?", a: "미셸 롤랑", x: ["에밀 페노", "드니 뒤부르디외", "스테판 드르농쿠르"] }],
  }),
  mk({
    ...BX, id: "fr2_lepuy", name: "샤토 르 퓌", original: "Château Le Puy", producer: "아모로 가문",
    sub: "프랑 코트 드 보르도", grape: M_CS, type: "red", tier: 2, shape: "bordeaux", cap: "#4b1d1d",
    fact: "1610년부터 아모로 가문이 화학 농약 없이 가꿔 온 보르도 변두리의 샤토. 2003년산이 '신의 물방울'에 등장해 값이 치솟았다.",
    quiz: [
      { q: "샤토 르 퓌를 일약 스타로 만든 일본 와인 만화는?", a: "신의 물방울", x: ["소믈리에", "바텐더", "고독한 미식가"] },
      { q: "샤토 르 퓌를 1610년부터 이어 온 가문은?", a: "아모로 가문", x: ["뒤부르디외 가문", "뤼르통 가문", "미자빌 가문"] },
    ],
  }),
  mk({
    ...BX, id: "fr2_bonnet", name: "샤토 보네 블랑", original: "Château Bonnet", producer: "앙드레 뤼르통 가문",
    sub: "앙트르 되 메르", grape: "소비뇽 블랑·세미용", type: "white", tier: 2, shape: "bordeaux", cap: "#e0d3ad",
    fact: "앙드레 뤼르통 가문의 앙트르 되 메르 영지로, 그가 보르도 곳곳에 샤토를 일구는 발판이 됐다. 가볍고 상큼한 보르도 화이트의 대명사다.",
    quiz: [{ q: "샤토 보네를 이끈 앙드레 뤼르통이 1965년 사들인 페삭 레오냥의 샤토는?", a: "샤토 라 루비에르", x: ["샤토 오 바이", "샤토 말라르틱 라그라비에르", "샤토 파프 클레망"] }],
  }),
  mk({
    ...BX, id: "fr2_sours", name: "샤토 드 수르 로제", original: "Château de Sours", producer: "마윈 (알리바바 창업자)", producerQ: true,
    grape: "메를로·카베르네 프랑", type: "rose", tier: 3, shape: "bordeaux", glass: "flint", cap: "#e8b8c0",
    fact: "영국인 주인들이 '보르도 로제'로 이름을 알린 앙트르 되 메르의 영지. 2016년 알리바바 창업자 마윈이 사들였다.",
    quiz: [{ q: "2016년 샤토 드 수르를 사들인 중국 기업가는?", a: "마윈", x: ["마화텅", "리카싱", "왕젠린"] }],
  }),

  // ───────── 보르도 · 화이트와 세컨드 와인
  mk({
    ...BX, id: "fr2_yquem_y", name: "이그렉 (Y 디켐)", original: "Y d'Yquem", producer: "샤토 디켐", producerQ: true,
    grape: "소비뇽 블랑·세미용", type: "white", tier: 2, shape: "bordeaux", glass: "flint", cap: "#d8c9a0",
    fact: "귀부 스위트 와인의 성지 디켐이 1959년 처음 만든 드라이 화이트. 라벨의 'Y'는 프랑스 알파벳 이름대로 '이그렉'이라 읽는다.",
    quiz: [
      { q: "디켐의 드라이 화이트 'Y'를 읽는 이름은?", a: "이그렉", x: ["와이", "이프실론", "예"] },
      { q: "디켐의 드라이 화이트 'Y'의 첫 빈티지는?", a: "1959년", x: ["1855년", "1921년", "1996년"] },
    ],
  }),
  mk({
    ...BX, id: "fr2_ailedargent", name: "에일 다르장", original: "Aile d'Argent", producer: "샤토 무통 로칠드", producerQ: true,
    grape: SEM_SB, type: "white", tier: 2, shape: "bordeaux", cap: "#d8c9a0", since: 1991,
    fact: "무통 로칠드 포도밭 한쪽 7ha의 화이트 품종으로 만드는 드라이 화이트. 1991년산으로 처음 선보였다.",
    quiz: [{ q: "무통 로칠드의 화이트 '에일 다르장'의 뜻은?", a: "은빛 날개", x: ["은빛 양", "하얀 성", "은 열쇠"] }],
  }),
  mk({
    ...BX, id: "fr2_reservecomtesse", name: "레제르브 드 라 콩테스", original: "Réserve de la Comtesse", producer: "샤토 피숑 롱그빌 콩테스 드 랄랑드", producerQ: true,
    sub: "포이약", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620", cls: SECOND,
    fact: "피숑 콩테스의 세컨드 와인. 이름의 '백작 부인'은 영지를 나눠 받아 랄랑드 백작과 결혼한 비르지니 드 피숑을 가리킨다.",
    quiz: [secondQ("레제르브 드 라 콩테스", "샤토 피숑 롱그빌 콩테스 드 랄랑드", ["샤토 피숑 바롱", "샤토 레오빌 라스 카즈", "샤토 코스 데스투르넬"])],
  }),
  mk({
    ...BX, id: "fr2_tourelles", name: "레 투렐 드 롱그빌", original: "Les Tourelles de Longueville", producer: "샤토 피숑 바롱", producerQ: true,
    sub: "포이약", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#4a1219", cls: SECOND,
    fact: "피숑 바롱의 세컨드 와인. 이름의 '투렐'은 동화 속 성처럼 솟은 샤토 지붕의 작은 뾰족탑들을 가리킨다.",
    quiz: [
      { q: "레 투렐 드 롱그빌의 '투렐'이 가리키는 것은?", a: "샤토 지붕의 작은 뾰족탑", x: ["포도밭의 돌담", "지하 저장고", "강가의 부두"] },
      secondQ("레 투렐 드 롱그빌", "샤토 피숑 바롱", ["샤토 피숑 롱그빌 콩테스 드 랄랑드", "샤토 린치 바주", "샤토 퐁테 카네"]),
    ],
  }),
  mk({
    ...BX, id: "fr2_echolynch", name: "에코 드 린치 바주", original: "Echo de Lynch-Bages", producer: "샤토 린치 바주", producerQ: true,
    sub: "포이약", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#6a1822", cls: SECOND, since: 2008,
    fact: "린치 바주의 세컨드 와인. 1976년부터 '샤토 오 바주 아베루스'라는 이름으로 나오다 2008년산부터 지금 이름을 달았다.",
    quiz: [{ q: "에코 드 린치 바주가 2008년 이전에 쓰던 이름은?", a: "샤토 오 바주 아베루스", x: ["샤토 오 바주 리베랄", "레 투렐 드 롱그빌", "샤토 크루아제 바주"] }],
  }),
  mk({
    ...BX, id: "fr2_damemontrose", name: "라 담 드 몽로즈", original: "La Dame de Montrose", producer: "샤토 몽로즈", producerQ: true,
    sub: "생테스테프", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22", cls: SECOND,
    fact: "생테스테프 2등급 샤토 몽로즈의 세컨드 와인. 지롱드강이 내려다보이는 같은 자갈 언덕의 포도로 만든다.",
    quiz: [secondQ("라 담 드 몽로즈", "샤토 몽로즈", ["샤토 칼롱 세귀르", "샤토 코스 데스투르넬", "샤토 펠랑 세귀르"])],
  }),
  mk({
    ...BX, id: "fr2_connetable", name: "코네타블 드 탈보", original: "Connétable de Talbot", producer: "샤토 탈보", producerQ: true,
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: SECOND,
    fact: "생쥘리앵 4등급 샤토 탈보의 세컨드 와인. '코네타블'은 중세 군대의 최고 지휘관을 이르던 칭호다.",
    quiz: [secondQ("코네타블 드 탈보", "샤토 탈보", ["샤토 그뤼오 라로즈", "샤토 베슈벨", "샤토 브라네르 뒤크뤼"])],
  }),
  mk({
    ...BX, id: "fr2_amiral", name: "아미랄 드 베슈벨", original: "Amiral de Beychevelle", producer: "샤토 베슈벨", producerQ: true,
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#1f3a5f", cls: SECOND,
    fact: "베슈벨의 세컨드 와인. '아미랄(제독)'은 지나는 배들이 돛을 내려 경의를 표했다는 해군 제독 에페르농 공작을 가리킨다.",
    quiz: [{ q: "아미랄 드 베슈벨의 '아미랄'은 무슨 뜻일까?", a: "해군 제독", x: ["대주교", "왕실 집사", "기사단장"] }],
  }),
  mk({
    ...BX, id: "fr2_fiefslagrange", name: "레 피에프 드 라그랑주", original: "Les Fiefs de Lagrange", producer: "샤토 라그랑주", producerQ: true,
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620", cls: SECOND,
    fact: "생쥘리앵 3등급 샤토 라그랑주의 세컨드 와인. 1983년 일본 산토리가 샤토를 사들인 뒤 포도밭과 셀러를 새로 일궜다.",
    quiz: [secondQ("레 피에프 드 라그랑주", "샤토 라그랑주", ["샤토 랑고아 바르통", "샤토 생 피에르", "샤토 글로리아"])],
  }),
  mk({
    ...BX, id: "fr2_sarget", name: "사르제 드 그뤼오 라로즈", original: "Sarget de Gruaud Larose", producer: "샤토 그뤼오 라로즈", producerQ: true,
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#6a1822", cls: SECOND,
    fact: "생쥘리앵 2등급 그뤼오 라로즈의 세컨드 와인. 이름은 19세기에 샤토를 가졌던 사르제 남작에게서 왔다.",
    quiz: [secondQ("사르제 드 그뤼오 라로즈", "샤토 그뤼오 라로즈", ["샤토 탈보", "샤토 브라네르 뒤크뤼", "샤토 라그랑주"])],
  }),
  mk({
    ...BX, id: "fr2_blasondissan", name: "블라종 디상", original: "Blason d'Issan", producer: "샤토 디상", producerQ: true,
    sub: "마고", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#5a1a22", cls: SECOND,
    fact: "해자로 둘러싸인 마고의 3등급 샤토 디상의 세컨드 와인. '블라종'은 가문의 문장(紋章)을 뜻한다.",
    quiz: [{ q: "블라종 디상을 만드는 샤토 디상의 라틴어 문구 'Regum mensis arisque deorum'의 뜻은?", a: "왕의 식탁과 신들의 제단을 위하여", x: ["신과 왕과 조국을 위하여", "진실은 와인 속에 있다", "땅이 주고 사람이 빚는다"] }],
  }),
  mk({
    ...BX, id: "fr2_chapellemission", name: "라 샤펠 드 라 미시옹 오브리옹", original: "La Chapelle de la Mission Haut-Brion", producer: "도멘 클라렌스 딜롱", producerQ: true,
    sub: "페삭레오냥", grape: CS_M, type: "red", tier: 2, shape: "bordeaux", cap: "#5b1620", cls: SECOND,
    fact: "라 미시옹 오브리옹의 세컨드 와인으로 1991년산부터 나왔다. 2006년부터는 옛 샤토 라 투르 오브리옹의 포도도 이 와인에 들어간다.",
    quiz: [{ q: "2005년산을 끝으로 이름이 사라지고 라 샤펠 드 라 미시옹 오브리옹에 합쳐진 샤토는?", a: "샤토 라 투르 오브리옹", x: ["샤토 레 카름 오브리옹", "샤토 라리베 오브리옹", "샤토 파프 클레망"] }],
  }),
  mk({
    ...BX, id: "fr2_croixbeaucaillou", name: "라 크루아 드 보카이유", original: "La Croix de Beaucaillou", producer: "샤토 뒤크뤼 보카이유", producerQ: true,
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#4a1219", cls: SECOND,
    fact: "생쥘리앵 2등급 뒤크뤼 보카이유의 세컨드 와인. 1941년부터 샤토를 이끈 보리 가문이 만든다.",
    quiz: [secondQ("라 크루아 드 보카이유", "샤토 뒤크뤼 보카이유", ["샤토 그랑 퓌 라코스트", "샤토 레오빌 바르통", "샤토 라그랑주"])],
  }),
  mk({
    ...BX, id: "fr2_petitlion", name: "르 프티 리옹 뒤 마르키 드 라스 카즈", original: "Le Petit Lion du Marquis de Las Cases", producer: "샤토 레오빌 라스 카즈", producerQ: true,
    sub: "생쥘리앵", grape: CS_M, type: "red", tier: 3, shape: "bordeaux", cap: "#4a1219", cls: SECOND, since: 2007,
    fact: "2007년산부터 레오빌 라스 카즈의 세컨드 와인이 됐다. '작은 사자'라는 이름은 레오빌 라스 카즈의 상징인 사자에서 왔다.",
    quiz: [{ q: "르 프티 리옹이 나오기 전 레오빌 라스 카즈의 세컨드 와인으로 여겨졌던 와인은?", a: "클로 뒤 마르키", x: ["레 파고드 드 코스", "카뤼아드 드 라피트", "레 포르 드 라투르"] }],
  }),
  mk({
    ...BX, id: "fr2_chapelleausone", name: "샤펠 도존", original: "Chapelle d'Ausone", producer: "샤토 오존", producerQ: true,
    sub: "생테밀리옹", grape: "카베르네 프랑·메를로", type: "red", tier: 3, shape: "bordeaux", cap: "#5b1620", cls: SECOND,
    fact: "생테밀리옹의 전설 샤토 오존의 세컨드 와인. 본 와인처럼 카베르네 프랑 비중이 높고 생산량이 아주 적다.",
    quiz: [secondQ("샤펠 도존", "샤토 오존", ["샤토 슈발 블랑", "샤토 앙젤뤼스", "샤토 피작"])],
  }),

  // ───────── 부르고뉴 · 코트 드 뉘
  mk({
    ...BG, id: "fr2_mugneret_echezeaux", name: "조르주 뮈네레 지부르 에셰조", original: "Échezeaux", maker: "Domaine Georges Mugneret-Gibourg",
    producer: "도멘 조르주 뮈네레 지부르", sub: "플라제 에셰조", grape: "피노 누아", type: "red", tier: 3, shape: "burgundy",
    cap: "#6a1822", cls: "Grand Cru",
    fact: "안과 의사 조르주 뮈네레가 키운 본 로마네의 도멘. 1988년 그가 세상을 떠난 뒤 약사였던 딸 마리 크리스틴과 동생 마리 앙드레가 이어받았다.",
    quiz: [
      { q: "도멘 조르주 뮈네레 지부르를 키운 조르주 뮈네레의 본업은?", a: "안과 의사", x: ["변호사", "항공기 조종사", "화학 교사"] },
      { q: "조르주 뮈네레가 세상을 떠난 뒤 도멘을 이끈 사람들은?", a: "두 딸 자매", x: ["세 아들 형제", "사위와 조카", "미국인 투자자"] },
    ],
  }),
  mk({
    ...BG, id: "fr2_rouget_cros", name: "에마뉘엘 루제 크로 파랑투", original: "Cros Parantoux", maker: "Domaine Emmanuel Rouget",
    producer: "도멘 에마뉘엘 루제", sub: "본 로마네", grape: "피노 누아", type: "red", tier: 2, shape: "burgundy",
    cap: "#5b1620", cls: "Vosne-Romanée Premier Cru",
    fact: "'부르고뉴의 신' 앙리 자이에의 조카가 만드는 크로 파랑투. 1996년 자이에가 은퇴하며 밭을 조카에게 넘겼다.",
    quiz: [{ q: "에마뉘엘 루제에게 크로 파랑투와 에셰조 밭을 물려준 삼촌은?", a: "앙리 자이에", x: ["앙리 구주", "아르망 루소", "자크 세이스"] }],
  }),
  mk({
    ...BG, id: "fr2_leroy_richebourg", name: "도멘 르루아 리쉬부르", original: "Richebourg", maker: "Domaine Leroy", producer: "도멘 르루아",
    sub: "본 로마네", grape: "피노 누아", type: "red", tier: 2, shape: "burgundy", cap: "#7a1a22", cls: "Grand Cru",
    fact: "도멘 르루아는 1988년 본 로마네의 도멘 샤를 노엘라를 통째로 사들이며 탄생했다. 처음부터 비오디나미로 가꾸며 수확량을 극도로 줄인다.",
    quiz: [{ q: "1988년 도멘 르루아가 탄생하며 통째로 사들인 본 로마네의 도멘은?", a: "도멘 샤를 노엘라", x: ["도멘 앙리 자이에", "도멘 메오 카뮈제", "도멘 르네 앙젤"] }],
  }),
  mk({
    ...BG, id: "fr2_grivot_richebourg", name: "장 그리보 리쉬부르", original: "Richebourg", maker: "Domaine Jean Grivot", producer: "도멘 장 그리보",
    sub: "본 로마네", grape: "피노 누아", type: "red", tier: 3, shape: "burgundy", cap: "#6a1822", cls: "Grand Cru",
    fact: "1980년대 초 도멘을 맡은 에티엔 그리보가 이끄는 본 로마네의 명가. 리쉬부르의 0.32ha 구획은 1984년에 사들였다.",
    quiz: [{ q: "1980년대 중반 에티엔 그리보가 받아들였던, 발효 전 저온 침용으로 논란을 부른 양조 컨설턴트는?", a: "기 아카드", x: ["미셸 롤랑", "에밀 페노", "쥘 쇼베"] }],
  }),
  mk({
    ...BG, id: "fr2_arnouxlachaux_rsv", name: "아르누 라쇼 로마네 생 비방", original: "Romanée-Saint-Vivant", maker: "Domaine Arnoux-Lachaux",
    producer: "도멘 아르누 라쇼", sub: "본 로마네", grape: "피노 누아", type: "red", tier: 3, shape: "burgundy", cap: "#4b1d1d",
    cls: "Grand Cru", since: 2008,
    fact: "1858년에 시작한 도멘 로베르 아르누가 사위 파스칼 라쇼를 거쳐 지금 이름이 됐다. 2012년부터 손자 샤를 라쇼가 이끌며 스타 도멘으로 떠올랐다.",
    quiz: [{ q: "도멘 아르누 라쇼의 옛 이름은?", a: "도멘 로베르 아르누", x: ["도멘 샤를 노엘라", "도멘 앙리 자이에", "도멘 클레르 다위"] }],
  }),
  mk({
    ...BG, id: "fr2_latour_cdv", name: "샤토 드 라 투르 클로 드 부조", original: "Clos de Vougeot", maker: "Château de la Tour",
    producer: "샤토 드 라 투르", sub: "부조", grape: "피노 누아", type: "red", tier: 3, shape: "burgundy", cap: "#6a1822", cls: "Grand Cru",
    fact: "클로 드 부조에서 가장 넓은 5.5ha 가까이를 가진 최대 소유주. 돌담 안에서 수확·양조·숙성·병입을 모두 하는 유일한 곳이다.",
    quiz: [{ q: "샤토 드 라 투르가 클로 드 부조에서 가진 특별한 점은?", a: "돌담 안에서 양조까지 하는 유일한 생산자다", x: ["밭 전체를 홀로 가진 모노폴이다", "화이트 와인만 만든다", "시토회 수도원이 직접 운영한다"] }],
  }),
  mk({
    ...BG, id: "fr2_vougeraie_closblanc", name: "도멘 드 라 부즈레 클로 블랑 드 부조", original: "Le Clos Blanc de Vougeot", maker: "Domaine de la Vougeraie",
    producer: "도멘 드 라 부즈레 (부아세 가문)", sub: "부조", grape: "샤르도네", type: "white", tier: 3, shape: "burgundy",
    cap: "#e0d3ad", cls: "Vougeot Premier Cru Monopole", since: 1999,
    fact: "1110년 무렵부터 시토회 수도사들이 화이트 포도를 심어 온 돌담 밭. 1999년 장 샤를 부아세가 가문의 밭을 모아 세운 도멘의 모노폴이다.",
    quiz: [
      { q: "클로 블랑 드 부조를 가진 도멘 드 라 부즈레를 1999년 세운 인물은?", a: "장 샤를 부아세", x: ["루이 파브리스 라투르", "프레데릭 드루앵", "에티엔 그리보"] },
      { q: "클로 블랑 드 부조 밭에 수도사들이 처음 포도를 심었다고 전하는 때는?", a: "1110년 무렵", x: ["로마 시대", "1789년 무렵", "1936년 무렵"] },
    ],
  }),
  mk({
    ...BG, id: "fr2_arlot", name: "도멘 드 라를로 클로 드 라를로", original: "Clos de l'Arlot", maker: "Domaine de l'Arlot",
    producer: "도멘 드 라를로 (AXA 밀레짐)", sub: "뉘 생 조르주", grape: "피노 누아", type: "red", tier: 3, shape: "burgundy",
    cap: "#5b1620", cls: "Nuits-Saint-Georges Premier Cru Monopole",
    fact: "뉘 생 조르주 남쪽 프레모 마을의 1er cru 모노폴. 1987년 보험 그룹 AXA가 옛 도멘을 사들여 도멘 드 라를로를 세웠다.",
    quiz: [{ q: "1987년 도멘 드 라를로를 세운 곳은?", a: "AXA 밀레짐", x: ["LVMH", "아르테미스", "카스텔 그룹"] }],
  }),
  mk({
    ...BG, id: "fr2_bclair_beze", name: "브뤼노 클레르 샹베르탱 클로 드 베즈", original: "Chambertin-Clos de Bèze", maker: "Domaine Bruno Clair",
    producer: "도멘 브뤼노 클레르", sub: "쥬브레 샹베르탱", grape: "피노 누아", type: "red", tier: 3, shape: "burgundy",
    cap: "#4b1d1d", cls: "Grand Cru",
    fact: "마르사네에 본거지를 둔 도멘. 1985년 옛 명가 클레르 다위가 가족 사이에 나뉠 때 1912년에 심은 나무가 자라는 이 샹베르탱 클로 드 베즈 밭을 물려받았다.",
    quiz: [{ q: "브뤼노 클레르가 밭을 물려받은, 1985년 쪼개진 옛 도멘은?", a: "도멘 클레르 다위", x: ["도멘 샤를 노엘라", "도멘 로베르 아르누", "도멘 쥘 블랭"] }],
  }),
  mk({
    ...BG, id: "fr2_fourrier_griotte", name: "도멘 푸리에 그리오트 샹베르탱", original: "Griotte-Chambertin", maker: "Domaine Fourrier",
    producer: "도멘 푸리에", sub: "쥬브레 샹베르탱", grape: "피노 누아", type: "red", tier: 3, shape: "burgundy", cap: "#7a1a22",
    cls: "Grand Cru",
    fact: "장 마리 푸리에가 1994년 가족 도멘을 맡아 오래된 나무의 섬세한 쥬브레로 이름을 알렸다. 그리오트 샹베르탱은 쥬브레에서 가장 작은 축의 그랑 크뤼다.",
    quiz: [{ q: "장 마리 푸리에가 1988년 빈티지 양조를 곁에서 배운 부르고뉴의 전설은?", a: "앙리 자이에", x: ["랄루 비즈 르루아", "오베르 드 빌렌", "아르망 루소"] }],
  }),

  // ───────── 부르고뉴 · 코트 드 본
  mk({
    ...BG, id: "fr2_cortongrancey", name: "루이 라투르 샤토 코르통 그랑세", original: "Château Corton Grancey", maker: "Louis Latour",
    producer: "루이 라투르", sub: "알록스코르통", grape: "피노 누아", type: "red", tier: 2, shape: "burgundy", cap: "#6a1822",
    cls: "Corton Grand Cru",
    fact: "코르통 언덕 다섯 구획의 피노 누아를 섞는 루이 라투르의 레드 그랑 크뤼. 이름은 루이 라투르가 본거지로 삼은 그랑세 가문의 옛 성에서 왔다.",
    quiz: [{ q: "루이 라투르가 샤토 코르통 그랑세를 그랑세 가문에게서 사들인 해는?", a: "1891년", x: ["1797년", "1936년", "1968년"] }],
  }),
  mk({
    ...BG, id: "fr2_roulot_charmes", name: "도멘 룰로 뫼르소 샤름", original: "Meursault Charmes", maker: "Domaine Roulot", producer: "도멘 룰로",
    sub: "뫼르소", grape: "샤르도네", type: "white", tier: 2, shape: "burgundy", cap: "#d8c9a0", cls: "Premier Cru",
    fact: "1830년부터 이어 온 뫼르소의 도멘. 1989년 대를 이은 장 마르크 룰로는 배우로도 활동하며 영화 '부르고뉴, 와인에서 찾은 삶'에 나왔다.",
    quiz: [{ q: "도멘 룰로를 이끄는 장 마르크 룰로가 와인 말고도 해 온 일은?", a: "배우", x: ["항공기 조종사", "안과 의사", "변호사"] }],
  }),
  mk({
    ...BG, id: "fr2_oleflaive_puligny", name: "올리비에 르플레브 퓔리니 몽라셰", original: "Puligny-Montrachet", maker: "Olivier Leflaive",
    producer: "올리비에 르플레브", sub: "퓔리니 몽라셰", grape: "샤르도네", type: "white", tier: 2, shape: "burgundy", cap: "#e0d3ad",
    fact: "도멘 르플레브 집안의 올리비에가 1984년 세운 네고시앙. 완성된 와인이 아니라 포도와 머스트를 사서 직접 빚는 방식으로 이름났다.",
    quiz: [
      { q: "올리비에 르플레브가 네고시앙을 세운 해는?", a: "1984년", x: ["1720년", "1859년", "1999년"] },
      { q: "올리비에 르플레브와 한 집안인 퓔리니 몽라셰의 이름난 도멘은?", a: "도멘 르플레브", x: ["도멘 코슈 뒤리", "도멘 룰로", "도멘 데 콩트 라퐁"] },
    ],
  }),
  mk({
    ...BG, id: "fr2_montille_taillepieds", name: "도멘 드 몽티유 볼네 타유피에", original: "Volnay Taillepieds", maker: "Domaine de Montille",
    producer: "도멘 드 몽티유", sub: "볼네", grape: "피노 누아", type: "red", tier: 3, shape: "burgundy", cap: "#6a1822", cls: "Premier Cru",
    fact: "디종의 변호사 위베르 드 몽티유가 50년 가까이 법정과 포도밭을 오가며 되살린 볼네의 도멘. 섬세하고 오래 사는 볼네로 이름났다.",
    quiz: [
      { q: "위베르 드 몽티유가 거침없는 입담으로 등장한 2004년 와인 다큐멘터리는?", a: "몽도비노", x: ["사이드웨이", "보틀 쇼크", "솜"] },
      { q: "위베르 드 몽티유가 포도 농사와 함께 평생 해 온 본업은?", a: "변호사", x: ["안과 의사", "배우", "항공기 조종사"] },
    ],
  }),
  mk({
    ...BG, id: "fr2_pommard_mareymonge", name: "샤토 드 포마르 클로 마레 몽주", original: "Clos Marey-Monge", maker: "Château de Pommard",
    producer: "샤토 드 포마르", sub: "포마르", grape: "피노 누아", type: "red", tier: 3, shape: "burgundy", cap: "#5b1620", cls: "Monopole",
    fact: "높이 2m 돌담에 둘러싸인 20ha 포도밭으로, 부르고뉴에서 가장 큰 모노폴이다. 2014년 미국 사업가 마이클 바움이 샤토와 함께 사들였다.",
    quiz: [{ q: "샤토 드 포마르의 클로 마레 몽주가 가진 기록은?", a: "부르고뉴에서 가장 큰 모노폴", x: ["부르고뉴에서 가장 작은 그랑 크뤼", "프랑스 최초의 AOC 포도밭", "부르고뉴에서 가장 높은 포도밭"] }],
  }),
  mk({
    ...BG, id: "fr2_champy_beaune", name: "메종 샹피 본 프르미에 크뤼", original: "Beaune Premier Cru", maker: "Maison Champy", producer: "메종 샹피",
    sub: "본", grape: "피노 누아", type: "red", tier: 3, shape: "burgundy", cap: "#7a1a22", cls: "Premier Cru",
    fact: "1720년 통 제조공 에듬 샹피가 본에 세운, 부르고뉴에서 가장 오래된 네고시앙. 15세기 셀러가 있는 본거지는 역사 기념물이다.",
    quiz: [
      { q: "메종 샹피가 가진 기록은?", a: "부르고뉴에서 가장 오래된 네고시앙", x: ["부르고뉴에서 가장 큰 협동조합", "프랑스 최초의 유기농 인증 와이너리", "부르고뉴 최초의 모노폴 소유주"] },
      { q: "메종 샹피가 세워진 해는?", a: "1720년", x: ["1797년", "1859년", "1920년"] },
    ],
  }),
  mk({
    ...BG, id: "fr2_chanson_feves", name: "샹송 본 클로 데 페브", original: "Beaune Clos des Fèves", maker: "Chanson Père & Fils",
    producer: "샹송 페르 에 피스", sub: "본", grape: "피노 누아", type: "red", tier: 2, shape: "burgundy", cap: "#5a1a22",
    cls: "Premier Cru Monopole",
    fact: "1750년 본에서 문을 연 네고시앙 샹송의 3.8ha 모노폴. 샹송은 15세기 본 성벽의 망루 '바스티옹'을 셀러로 쓴다.",
    quiz: [
      { q: "1999년 샹송 페르 에 피스를 사들인 샴페인 하우스는?", a: "볼랭저", x: ["루이 로드레", "테탱제", "모에 에 샹동"] },
      { q: "샹송이 와인을 숙성하는 '바스티옹'은 원래 무엇이었을까?", a: "본을 둘러싼 15세기 성벽의 망루", x: ["옛 수도원 성당", "로마 시대 원형극장", "나폴레옹 군대의 병영"] },
    ],
  }),

  // ───────── 부르고뉴 · 샤블리 · 마코네
  mk({
    ...BG, id: "fr2_chablisienne_grenouilles", name: "라 샤블리지엔 샤토 그르누이", original: "Château Grenouilles", maker: "La Chablisienne",
    producer: "라 샤블리지엔", sub: "샤블리", grape: "샤르도네", type: "white", tier: 2, shape: "burgundy", glass: "halfwhite",
    cap: "#e0d3ad", cls: "Chablis Grand Cru",
    fact: "1923년 세워진 샤블리의 협동조합 라 샤블리지엔이 그랑 크뤼 그르누이 밭 대부분을 가지고 만드는 대표작.",
    quiz: [
      { q: "샤블리 그랑 크뤼 '그르누이'의 뜻은?", a: "개구리", x: ["달팽이", "제비", "갈대"] },
      { q: "샤토 그르누이를 만드는 협동조합 라 샤블리지엔이 세워진 해는?", a: "1923년", x: ["1831년", "1968년", "2003년"] },
    ],
  }),
  mk({
    ...BG, id: "fr2_cmoreau_hospices", name: "크리스티앙 모로 클로 데 조스피스", original: "Clos des Hospices dans Les Clos", labelName: "Clos des Hospices",
    maker: "Domaine Christian Moreau Père & Fils", producer: "도멘 크리스티앙 모로", sub: "샤블리", grape: "샤르도네", type: "white",
    tier: 3, shape: "burgundy", glass: "halfwhite", cap: "#d8c9a0", cls: "Chablis Grand Cru", since: 2002,
    fact: "그랑 크뤼 레 클로 안의 작은 모노폴. 1904년 모로 가문이 샤블리의 구호 병원(오스피스)에게서 사들여 이런 이름이 붙었다.",
    quiz: [{ q: "클로 데 조스피스의 '오스피스'가 가리키는 것은?", a: "밭을 판 샤블리의 옛 구호 병원", x: ["밭을 일군 수도회", "순례자 숙소", "옛 영주의 사냥 별장"] }],
  }),
  mk({
    ...BG, id: "fr2_lmichel_montmains", name: "도멘 루이 미셸 샤블리 몽맹", original: "Chablis Montmains", maker: "Domaine Louis Michel & Fils",
    producer: "도멘 루이 미셸", sub: "샤블리", grape: "샤르도네", type: "white", tier: 3, shape: "burgundy", glass: "halfwhite",
    cap: "#e0d3ad", cls: "Premier Cru",
    fact: "1960년대 말부터 오크통을 버리고 스테인리스 탱크만 쓰는 샤블리의 명가. 나무 향 없는 맑고 짜릿한 샤블리의 교과서로 꼽힌다.",
    quiz: [{ q: "도멘 루이 미셸이 1960년대 말부터 고집해 온 양조 방식은?", a: "오크통 없이 스테인리스 탱크만 쓴다", x: ["새 오크통에서만 발효한다", "암포라에서 숙성한다", "귀부 포도만 쓴다"] }],
  }),
  mk({
    ...BG, id: "fr2_ferret_pf", name: "도멘 페레 푸이 퓌세", original: "Pouilly-Fuissé", maker: "Domaine J.A. Ferret", producer: "도멘 J.A. 페레",
    sub: "푸이 퓌세", grape: "샤르도네", type: "white", tier: 3, shape: "burgundy", cap: "#e0d3ad",
    fact: "1840년 문을 연 퓌세 마을의 가족 도멘. 밭별로 '테트 드 크뤼'·'오르 클라스'를 나눠 병입해 왔고, 2008년 루이 자도가 사들였다.",
    quiz: [{ q: "2008년 도멘 페레를 사들인 본의 네고시앙은?", a: "루이 자도", x: ["조셉 드루앵", "부샤르 페르 에 피스", "알베르 비쇼"] }],
  }),
  mk({
    ...BG, id: "fr2_verget_stveran", name: "베르제 생 베랑", original: "Saint-Véran", maker: "Verget", producer: "베르제 (장 마리 기팡스)",
    sub: "생 베랑", grape: "샤르도네", type: "white", tier: 3, shape: "burgundy", cap: "#e0d3ad", since: 1990,
    fact: "벨기에 출신 장 마리 기팡스가 1990년 세운 마코네의 네고시앙. 와인이 아니라 포도를 사서 자기 셀러에서 직접 빚는다.",
    quiz: [
      { q: "베르제를 세운 장 마리 기팡스의 고향 나라는?", a: "벨기에", x: ["스위스", "네덜란드", "캐나다"] },
      { q: "장 마리 기팡스가 직접 기른 포도로만 만드는 자기 도멘은?", a: "도멘 기팡스 에넨", x: ["도멘 J.A. 페레", "샤토 퓌세", "도멘 르플레브"] },
    ],
  }),

  // ───────── 부르고뉴 · 보졸레
  mk({
    ...BG, id: "fr2_foillard_py", name: "장 푸아야르 모르공 코트 뒤 퓌", original: "Morgon Côte du Py", maker: "Jean Foillard",
    producer: "도멘 장 푸아야르", sub: "모르공", grape: "가메", type: "red", tier: 2, shape: "burgundy", cap: "#8e1520",
    fact: "라피에르·테브네·브르통과 함께 '보졸레 4인방'으로 불린 내추럴 와인의 선구자. 코트 뒤 퓌는 모르공에서 가장 이름난 언덕이다.",
    quiz: [
      { q: "모르공 코트 뒤 퓌 같은 와인이 숙성하며 부르고뉴 피노 누아처럼 변하는 것을 가리키는 말은?", a: "모르고네(morgonner)", x: ["보졸레네", "플뢰리제", "샹베르티제"] },
      { q: "코트 뒤 퓌의 토양을 부르는 '로슈 푸리'의 뜻은?", a: "썩은 돌", x: ["붉은 흙", "검은 모래", "하얀 백악"] },
    ],
  }),
  mk({
    ...BG, id: "fr2_thivin_cdb", name: "샤토 티뱅 코트 드 브루이", original: "Château Thivin", producer: "샤토 티뱅 (조프레 가문)",
    sub: "코트 드 브루이", grape: "가메", type: "red", tier: 3, shape: "burgundy", cap: "#8e1520", cls: "Côte de Brouilly",
    fact: "브루이 산에서 가장 오래된 와인 영지. 1877년부터 조프레 가문이 대를 이어 브루이 산비탈의 가메를 가꾼다.",
    quiz: [{ q: "샤토 티뱅을 1877년부터 이끌어 온 가문은?", a: "조프레 가문", x: ["라피에르 가문", "뒤뵈프 가문", "쿠데르 가문"] }],
  }),
  mk({
    ...BG, id: "fr2_roilette_fleurie", name: "클로 드 라 루아레트 플뢰리", original: "Clos de la Roilette", maker: "Coudert Père et Fils",
    producer: "쿠데르 가문", sub: "플뢰리", grape: "가메", type: "red", tier: 3, shape: "burgundy", cap: "#8e1520",
    fact: "1920년대 옛 주인이 아끼던 경주마 '루아레트'의 이름을 붙이고 말 머리 실루엣을 라벨에 넣었다. 1967년부터 쿠데르 가문이 가꾼다.",
    quiz: [{ q: "클로 드 라 루아레트의 '루아레트'는 무엇의 이름일까?", a: "옛 주인의 경주마", x: ["마을 성당의 수호성인", "옛 주인의 딸", "밭 옆 개울"] }],
  }),
  mk({
    ...BG, id: "fr2_duboeuf_bjv", name: "조르주 뒤뵈프 보졸레 빌라쥐", original: "Beaujolais-Villages", maker: "Georges Duboeuf",
    producer: "조르주 뒤뵈프", sub: "보졸레 빌라쥐", grape: "가메", type: "red", tier: 1, shape: "burgundy", cap: "#b3202e",
    fact: "보졸레를 세계에 알린 조르주 뒤뵈프의 데일리 와인. 꽃무늬 라벨로 알아보기 쉽고, 누보보다 한결 짜임새가 있다.",
    quiz: [{ q: "조르주 뒤뵈프 보졸레 빌라쥐를 만든 조르주 뒤뵈프에게 붙은 별명은?", a: "보졸레의 왕", x: ["보졸레의 여왕", "부르고뉴의 신", "콩드리외의 교황"] }],
  }),

  // ───────── 론 북부
  mk({
    ...RH, id: "fr2_delas_bessards", name: "들라스 에르미타주 레 베사르", original: "Hermitage Les Bessards", maker: "Delas Frères",
    producer: "들라스 프레르", sub: "에르미타주", grape: "시라", type: "red", tier: 2, shape: "burgundy", cap: "#1c1a1a",
    fact: "1835년부터 이어 온 론 북부 네고시앙 들라스의 기함. 에르미타주 언덕 서쪽 화강암 구획 레 베사르의 시라로만 만든다.",
    quiz: [{ q: "1993년 들라스 프레르를 샴페인 하우스 도츠와 함께 사들인 곳은?", a: "루이 로드레", x: ["볼랭저", "모에 에 샹동", "테탱제"] }],
  }),
  mk({
    ...RH, id: "fr2_ermite", name: "샤푸티에 에르미타주 레르미트", original: "Ermitage L'Ermite", maker: "M. Chapoutier", producer: "M. 샤푸티에",
    sub: "에르미타주", grape: "시라", type: "red", tier: 2, shape: "burgundy", cap: "#1c1a1a", since: 1997,
    fact: "에르미타주 언덕 꼭대기 예배당 둘레 화강암 구획에서 나오는 샤푸티에의 단일 밭 와인. 샤푸티에는 옛 표기 'Ermitage'를 라벨에 쓴다.",
    quiz: [{ q: "샤푸티에 레르미트('은둔자')와 에르미타주라는 이름을 낳은 전설 속 인물은?", a: "십자군에서 돌아와 언덕에 은거한 기사", x: ["포도나무를 퍼뜨린 로마 황제", "언덕에 성당을 지은 교황", "와인을 처음 빚은 수녀"] }],
  }),
  mk({
    ...RH, id: "fr2_chantealouette", name: "샤푸티에 샹트 알루에트", original: "Chante-Alouette", maker: "M. Chapoutier", producer: "M. 샤푸티에",
    sub: "에르미타주", grape: "마르산", type: "white", tier: 2, shape: "burgundy", glass: "halfwhite", cap: "#d8c9a0",
    fact: "에르미타주 언덕의 마르산으로 만드는 샤푸티에의 화이트 에르미타주. 오래 두면 꿀과 견과 향이 짙어진다.",
    quiz: [{ q: "샤푸티에 샹트 알루에트라는 이름의 뜻은?", a: "종달새의 노래", x: ["나이팅게일의 둥지", "뻐꾸기 언덕", "제비의 춤"] }],
  }),
  mk({
    ...RH, id: "fr2_ampuis", name: "기갈 샤토 담퓌", original: "Château d'Ampuis", maker: "E. Guigal", producer: "E. 기갈",
    sub: "코트 로티", grape: "시라·비오니에", type: "red", tier: 2, shape: "burgundy", cap: "#1c1a1a", cls: "Côte-Rôtie", since: 1995,
    fact: "기갈이 1995년 사들여 되살린 앙퓌 마을의 옛 성 이름을 붙인 코트 로티. 코트 블롱드와 코트 브륀의 여러 구획을 섞는다.",
    quiz: [{ q: "기갈 샤토 담퓌의 첫 빈티지는?", a: "1995년", x: ["1966년", "1978년", "1985년"] }],
  }),
  mk({
    ...RH, id: "fr2_rostaing_landonne", name: "르네 로스탱 코트 로티 라 랑돈", original: "Côte-Rôtie La Landonne", maker: "Domaine Rostaing",
    producer: "도멘 로스탱", sub: "코트 로티", grape: "시라", type: "red", tier: 3, shape: "burgundy", cap: "#2a0f14",
    fact: "공증인이던 르네 로스탱이 1971년 작은 밭으로 시작한 도멘. 장인 알베르 데르비외와 삼촌 마리우스 장타즈의 오래된 밭을 물려받아 커졌다.",
    quiz: [
      { q: "르네 로스탱이 와인을 만들며 함께 가졌던 본업은?", a: "공증인", x: ["안과 의사", "배우", "항공기 조종사"] },
      { q: "르네 로스탱에게 코트 로티의 명당 밭을 물려준 두 사람은?", a: "장인 알베르 데르비외와 삼촌 마리우스 장타즈", x: ["아버지 에티엔 기갈과 형 마르셀 기갈", "스승 앙리 자이에와 친구 오귀스트 클라프", "장인 조르주 베르네와 삼촌 장 루이 샤브"] },
    ],
  }),
  mk({
    ...RH, id: "fr2_allemand_reynard", name: "티에리 알르망 코르나스 레나르", original: "Cornas Reynard", maker: "Thierry Allemand",
    producer: "티에리 알르망", sub: "코르나스", grape: "시라", type: "red", tier: 3, shape: "burgundy", cap: "#1c1a1a",
    fact: "포도 농가 출신이 아닌 티에리 알르망이 1982년 버려진 비탈 0.5ha로 시작한 코르나스의 컬트 도멘. 이산화황을 넣지 않은 퀴베도 만든다.",
    quiz: [{ q: "티에리 알르망이 만드는 두 코르나스 퀴베는 레나르와 무엇일까?", a: "샤이요", x: ["라 샤펠", "라 튀르크", "레 베사르"] }],
  }),
  mk({
    ...RH, id: "fr2_cuilleron_chaillets", name: "이브 퀴유롱 콩드리외 레 샤이예", original: "Condrieu Les Chaillets", maker: "Yves Cuilleron",
    producer: "이브 퀴유롱", sub: "콩드리외", grape: "비오니에", type: "white", tier: 3, shape: "burgundy", glass: "halfwhite", cap: "#d8c9a0",
    fact: "1987년 삼촌에게서 3.5ha 가족 도멘을 넘겨받아 론 북부의 대표 생산자로 키웠다. 레 샤이예는 오래된 비오니에로 만드는 콩드리외다.",
    quiz: [{ q: "이브 퀴유롱이 1987년 가족 도멘을 넘겨받은 사람은?", a: "삼촌 앙투안", x: ["아버지 에티엔", "장인 알베르", "형 마르셀"] }],
  }),

  // ───────── 론 남부
  mk({
    ...RH, id: "fr2_fortia", name: "샤토 포르티아", original: "Château Fortia", producer: "샤토 포르티아",
    sub: "샤토뇌프 뒤 파프", grape: "그르나슈·시라·무르베드르", type: "red", tier: 2, shape: "burgundy", cap: "#6a1822",
    fact: "프랑스 AOC 제도의 아버지 르 루아 남작이 이끌던 영지. 그의 노력으로 샤토뇌프 뒤 파프는 1936년 프랑스 첫 AOC 가운데 하나가 됐다.",
    quiz: [
      { q: "샤토 포르티아를 이끌며 프랑스 원산지 통제 명칭(AOC) 제도를 만든 인물은?", a: "르 루아 드 부아조마리에 남작", x: ["에밀 페노", "쥘 쇼베", "조르주 뒤뵈프"] },
      { q: "샤토 포르티아의 르 루아 남작이 1935년 조제프 카퓌스와 함께 세운 기관은?", a: "INAO(국립 원산지 명칭 연구소)", x: ["CIVB(보르도 와인 협회)", "OIV(국제 포도·와인 기구)", "코망드리 뒤 봉탕 드 메도크"] },
    ],
  }),
  mk({
    ...RH, id: "fr2_hommage", name: "보카스텔 오마주 아 자크 페랭", original: "Hommage à Jacques Perrin", maker: "Château de Beaucastel",
    producer: "페랭 가문", producerQ: true, sub: "샤토뇌프 뒤 파프", grape: "무르베드르·그르나슈·시라", type: "red", tier: 2,
    shape: "burgundy", cap: "#4b1d1d", since: 1989,
    fact: "1978년 세상을 떠난 자크 페랭을 기리는 보카스텔의 최상급 퀴베. 무르베드르를 60% 가까이 쓰고 뛰어난 해에만 만든다.",
    quiz: [{ q: "오마주 아 자크 페랭의 첫 빈티지는?", a: "1989년", x: ["1961년", "1978년", "2001년"] }],
  }),
  mk({
    ...RH, id: "fr2_coudoulet", name: "쿠둘레 드 보카스텔", original: "Coudoulet de Beaucastel", maker: "Château de Beaucastel",
    producer: "페랭 가문", producerQ: true, grape: "그르나슈·무르베드르·시라", type: "red", tier: 2, shape: "burgundy",
    cap: "#6a1822", cls: "Côtes du Rhône",
    fact: "A7 고속도로 하나를 사이에 두고 보카스텔과 마주한 밭의 와인. 샤토뇌프와 같은 둥근 자갈 땅이라 '작은 보카스텔'로 불린다.",
    quiz: [
      { q: "쿠둘레 드 보카스텔 포도밭과 샤토 드 보카스텔 포도밭 사이를 가르는 것은?", a: "A7 고속도로", x: ["론강", "로마 시대 성벽", "옛 운하"] },
      { q: "쿠둘레 드 보카스텔이 샤토뇌프 뒤 파프가 아닌 '코트 뒤 론'으로 나오는 까닭은?", a: "밭이 샤토뇌프 뒤 파프 경계 바로 밖에 있어서", x: ["포도를 사다 만들어서", "화이트 품종을 섞어서", "오크통을 쓰지 않아서"] },
    ],
  }),
  mk({
    ...RH, id: "fr2_fonsalette", name: "샤토 드 퐁살레트", original: "Château de Fonsalette", producer: "레노 가문 (샤토 라야스)", producerQ: true,
    grape: "그르나슈·생소·시라", type: "red", tier: 3, shape: "burgundy", cap: "#4b1d1d", cls: "Côtes du Rhône",
    fact: "샤토 라야스의 레노 가문이 샤토뇌프 뒤 파프 경계 밖에 세운 영지. 라야스 셀러에서 같은 방식으로 빚는다.",
    quiz: [{ q: "루이 레노가 샤토 드 퐁살레트를 세운 해는?", a: "1945년", x: ["1880년", "1936년", "1997년"] }],
  }),
  mk({
    ...RH, id: "fr2_destours", name: "샤토 데 투르 바케라스", original: "Château des Tours", producer: "에마뉘엘 레노", producerQ: true,
    sub: "바케라스", grape: "그르나슈·시라", type: "red", tier: 3, shape: "burgundy", cap: "#5b1620",
    fact: "샤토 라야스를 이끄는 에마뉘엘 레노가 아버지에게서 물려받은 바케라스의 영지. 라야스처럼 그르나슈를 중심으로 빚는다.",
    quiz: [{ q: "샤토 데 투르를 만드는 에마뉘엘 레노가 1997년 삼촌 자크에게서 이어받은 샤토뇌프 뒤 파프의 영지는?", a: "샤토 라야스", x: ["샤토 드 보카스텔", "샤토 포르티아", "클로 데 파프"] }],
  }),
  mk({
    ...RH, id: "fr2_stcosme", name: "샤토 드 생 콤 지공다스", original: "Château de Saint Cosme", producer: "바뤼올 가문",
    sub: "지공다스", grape: "그르나슈·시라", type: "red", tier: 2, shape: "burgundy", cap: "#6a1822",
    fact: "1490년부터 바뤼올 가문이 이어 온 지공다스의 대표 영지. 셀러 바닥에는 석회암을 파서 만든 갈로로만 시대 발효조가 남아 있다.",
    quiz: [
      { q: "샤토 드 생 콤 셀러에 남아 있는 오래된 유적은?", a: "바위를 파서 만든 갈로로만 시대 발효조", x: ["중세 기사단의 무기고", "나폴레옹 시대 화약고", "선사 시대 동굴 벽화"] },
      { q: "샤토 드 생 콤을 1490년부터 이어 온 가문은?", a: "바뤼올 가문", x: ["페랭 가문", "레노 가문", "사봉 가문"] },
    ],
  }),
  mk({
    ...RH, id: "fr2_montolivet", name: "클로 뒤 몽 올리베", original: "Clos du Mont-Olivet", producer: "사봉 가문",
    sub: "샤토뇌프 뒤 파프", grape: "그르나슈·시라·무르베드르", type: "red", tier: 3, shape: "burgundy", cap: "#6a1822",
    fact: "1932년 세라팽 사봉이 세운 샤토뇌프 뒤 파프의 가족 도멘. 1901년에 심은 그르나슈로 만드는 '퀴베 뒤 파페'가 이름났다.",
    quiz: [{ q: "클로 뒤 몽 올리베의 최상급 퀴베 '퀴베 뒤 파페'의 '파페'는 프로방스 말로 무슨 뜻일까?", a: "할아버지", x: ["교황", "아버지", "포도밭 일꾼"] }],
  }),
  mk({
    ...RH, id: "fr2_janasse_vv", name: "도멘 드 라 자나스 비에유 비뉴", original: "Châteauneuf-du-Pape Vieilles Vignes", maker: "Domaine de la Janasse",
    producer: "도멘 드 라 자나스", sub: "샤토뇌프 뒤 파프", grape: "그르나슈·시라·무르베드르", type: "red", tier: 2, shape: "burgundy",
    cap: "#5b1620",
    fact: "1973년 에메 사봉이 세운 도멘으로, 지금은 아들 크리스토프와 딸 이자벨이 이끈다. 비에유 비뉴는 오래된 그르나슈가 중심이다.",
    quiz: [
      { q: "도멘 드 라 자나스라는 이름은 무엇에서 왔을까?", a: "쿠르테종 마을의 가족 농장 이름", x: ["창업자 어머니의 이름", "로마 시대 신전", "근처 샘물"] },
      { q: "도멘 드 라 자나스를 1973년 세운 인물은?", a: "에메 사봉", x: ["세라팽 사봉", "앙리 봉노", "자크 레노"] },
    ],
  }),
  mk({
    ...RH, id: "fr2_vieilleferme", name: "라 비에유 페름 루주", original: "La Vieille Ferme", maker: "Famille Perrin", producer: "페랭 가문", producerQ: true,
    sub: "방투", grape: "그르나슈·시라·카리냥", type: "red", tier: 1, shape: "burgundy", cap: "#8e1520",
    fact: "샤토 드 보카스텔의 페랭 가문이 1970년 내놓은 데일리 와인. 방투 산자락 포도로 만들고, 라벨의 닭 그림 덕에 '치킨 와인'이라는 별명이 붙었다.",
    quiz: [
      { q: "라 비에유 페름 라벨에 그려진 동물은?", a: "닭", x: ["양", "돼지", "말"] },
      { q: "라 비에유 페름('오래된 농가')을 1970년 내놓은 가문이 가진 샤토뇌프 뒤 파프의 명가는?", a: "샤토 드 보카스텔", x: ["샤토 라야스", "클로 데 파프", "샤토 라 네르트"] },
    ],
  }),
  mk({
    ...RH, id: "fr2_durban_muscat", name: "도멘 드 뒤르방 뮈스카 드 봄 드 브니즈", original: "Muscat de Beaumes-de-Venise", maker: "Domaine de Durban",
    producer: "도멘 드 뒤르방", sub: "봄 드 브니즈", grape: "뮈스카", type: "fortified", tier: 3, shape: "burgundy", glass: "flint",
    liquid: "golden", cap: "#c9a24e", cls: "Vin Doux Naturel",
    fact: "봄 드 브니즈 언덕 위 도멘이 만드는 뮈스카 뱅 두 나튀렐. 발효 도중 주정을 넣어 포도의 단맛과 꽃향을 붙잡는다.",
    quiz: [
      { q: "도멘 드 뒤르방이 자리한 봄 드 브니즈의 '브니즈'가 가리키는 것은?", a: "옛 교황령 콩타 브내생", x: ["이탈리아 베네치아", "로마 장군 베니시우스", "'바람'을 뜻하는 옛말"] },
      { q: "도멘 드 뒤르방 뮈스카 같은 '뱅 두 나튀렐'은 어떻게 만들까?", a: "발효 도중 주정을 넣어 단맛을 남긴다", x: ["포도를 얼린 채 짠다", "짚 위에서 포도를 말린다", "병 속에서 두 번 발효한다"] },
    ],
  }),

  // ───────── 샹파뉴
  mk({
    ...CH, id: "fr2_jacquesson", name: "자크송 퀴베 700 시리즈", original: "Jacquesson Cuvée 700", producer: "자크송",
    sub: "디지", grape: CHAMP3, type: "sparkling", tier: 2, shape: "champagne", nv: true, cap: "#1a2330",
    fact: "1798년 문을 열어 나폴레옹에게 금메달을 받은 하우스. 2000년 수확분부터 한 해 수확을 중심으로 빚은 NV에 '728'처럼 번호를 붙인다.",
    quiz: [{ q: "자크송의 첫 번호 퀴베 '728'의 숫자가 뜻하는 것은?", a: "하우스가 만든 728번째 퀴베", x: ["728일 동안 숙성했다", "728개 구획의 포도를 섞었다", "1728년 창업을 기념한다"] }],
  }),
  mk({
    ...CH, id: "fr2_paillard", name: "브뤼노 파야르 프르미에르 퀴베", original: "Bruno Paillard Première Cuvée", producer: "브뤼노 파야르",
    sub: "랭스", grape: PN3, type: "sparkling", tier: 2, shape: "champagne", nv: true, cap: "#141414",
    fact: "1981년 스물일곱 살 브뤼노 파야르가 아끼던 재규어를 팔아 세운 하우스. 1983년부터 모든 병 뒷라벨에 데고르주망 날짜를 적어 왔다.",
    quiz: [{ q: "브뤼노 파야르가 1981년 샴페인 하우스를 세우려고 판 것은?", a: "아끼던 재규어 자동차", x: ["할아버지의 포도밭", "파리의 아파트", "경주마"] }],
  }),
  mk({
    ...CH, id: "fr2_devenoge", name: "드 브노주 코르동 블뢰", original: "De Venoge Cordon Bleu", producer: "드 브노주",
    sub: "에페르네", grape: PN3, type: "sparkling", tier: 3, shape: "champagne", nv: true, cap: "#1f3a8c", cls: "Brut",
    fact: "1837년 스위스 보 주 출신 앙리 마르크 드 브노주가 에페르네에 세운 하우스. 파란 리본 '코르동 블뢰'에는 고향의 브노주강이 담겨 있다.",
    quiz: [
      { q: "드 브노주를 세운 앙리 마르크 드 브노주의 고향 나라는?", a: "스위스", x: ["독일", "벨기에", "오스트리아"] },
      { q: "드 브노주 코르동 블뢰의 '파란 리본'이 상징하는 것은?", a: "창업자 고향의 브노주강", x: ["프랑스 해군", "레지옹 도뇌르 훈장", "창업자 부인의 드레스"] },
    ],
  }),
  mk({
    ...CH, id: "fr2_castellane", name: "드 카스텔란 브뤼", original: "De Castellane Brut", producer: "드 카스텔란",
    sub: "에페르네", grape: CHAMP3, type: "sparkling", tier: 2, shape: "champagne", nv: true, cap: "#b3141c", cls: "Brut",
    fact: "1895년 플로랑스 드 카스텔란 자작이 세운 에페르네의 하우스. 66m 높이의 탑이 에페르네 철길 옆에 우뚝 서 있다.",
    quiz: [{ q: "드 카스텔란 라벨의 붉은 X자 십자가를 부르는 이름은?", a: "성 안드레아 십자가", x: ["몰타 십자가", "로렌 십자가", "성 게오르기우스 십자가"] }],
  }),
  mk({
    ...CH, id: "fr2_drappier", name: "드라피에 카르트 도르", original: "Drappier Carte d'Or", producer: "드라피에",
    sub: "위르빌", grape: "피노 누아·샤르도네·피노 뫼니에", type: "sparkling", tier: 2, shape: "champagne", nv: true, cap: "#c9a24e", cls: "Brut",
    fact: "샹파뉴 남쪽 코트 데 바르의 위르빌 마을에서 대를 이어 온 하우스. 피노 누아를 80%나 써 블랑 드 누아에 가까운 풍성한 맛을 낸다.",
    quiz: [{ q: "가까운 콜롱베 레 되 제글리즈에 살며 드라피에 샴페인을 즐겨 마신 프랑스 대통령은?", a: "샤를 드골", x: ["프랑수아 미테랑", "자크 시라크", "조르주 퐁피두"] }],
  }),
  mk({
    ...CH, id: "fr2_agrapart_venus", name: "아그라파르 베뉘스", original: "Vénus", maker: "Agrapart & Fils", producer: "아그라파르 에 피스",
    sub: "아비즈", grape: "샤르도네", type: "sparkling", tier: 3, shape: "champagne", cap: "#e8e2cf", cls: "Blanc de Blancs Brut Nature",
    since: 2007,
    fact: "아비즈의 그로워 아그라파르가 한 구획의 샤르도네로 만드는 빈티지 샴페인. 흙이 다져지지 않도록 트랙터 대신 말로 밭을 간다.",
    quiz: [{ q: "아그라파르 '베뉘스'라는 이름의 주인공은?", a: "그 밭을 가는 암말", x: ["창업자의 딸", "마을 분수대의 여신 조각상", "마을 성당의 종"] }],
  }),
  mk({
    ...CH, id: "fr2_krug_ambonnay", name: "크뤼그 클로 담보네", original: "Krug Clos d'Ambonnay", producer: "크뤼그",
    sub: "앙보네", grape: "피노 누아", type: "sparkling", tier: 2, shape: "champagne", cap: "#c9b27a", cls: "Blanc de Noirs",
    since: 1995, style: { paper: "#efe4cb" },
    fact: "앙보네 마을 돌담 안 0.68ha 밭의 피노 누아로만 만드는 크뤼그의 가장 귀한 샴페인. 1995년산이 첫 빈티지다.",
    quiz: [
      { q: "크뤼그 클로 담보네 포도밭의 넓이는?", a: "약 0.68ha", x: ["약 6.8ha", "약 18ha", "약 68ha"] },
      { q: "크뤼그 클로 담보네의 첫 빈티지는?", a: "1995년", x: ["1843년", "1979년", "2008년"] },
    ],
  }),
  mk({
    ...CH, id: "fr2_moet_gv", name: "모에 에 샹동 그랑 빈티지", original: "Moët & Chandon Grand Vintage", producer: "모에 에 샹동",
    sub: "에페르네", grape: CHAMP3, type: "sparkling", tier: 1, shape: "champagne", cap: "#1a1416",
    fact: "작황이 좋은 한 해의 포도로만 만드는 모에의 빈티지 샴페인. 모에는 창업 99년 뒤인 1842년 첫 빈티지 샴페인을 냈다.",
    quiz: [{ q: "모에 에 샹동 그랑 빈티지를 만드는 모에가 첫 빈티지 샴페인을 낸 해는?", a: "1842년", x: ["1743년", "1921년", "2000년"] }],
  }),
  mk({
    ...CH, id: "fr2_moet_nectar", name: "모에 에 샹동 넥타르 앵페리얼", original: "Moët & Chandon Nectar Impérial", producer: "모에 에 샹동",
    sub: "에페르네", grape: PN3, type: "sparkling", tier: 1, shape: "champagne", nv: true, cap: "#d6a93a",
    fact: "리터당 45g 안팎의 당분을 넣어 달콤하게 만든 모에의 드미 섹 샴페인. 디저트나 과일과 잘 어울린다.",
    quiz: [{ q: "모에 에 샹동 넥타르 앵페리얼의 '넥타르'는 원래 무엇을 가리킬까?", a: "그리스 신화 속 신들의 음료", x: ["로마 황제의 포도밭", "꿀벌 여왕의 이름", "나폴레옹이 아끼던 말"] }],
  }),
  mk({
    ...CH, id: "fr2_pommery_louise", name: "포므리 퀴베 루이즈", original: "Pommery Cuvée Louise", producer: "포므리",
    sub: "랭스", grape: "샤르도네·피노 누아", type: "sparkling", tier: 2, shape: "champagne", cap: "#e8e2cf", since: 1979,
    fact: "브뤼 샴페인을 처음 선보인 마담 루이즈 포므리를 기리는 프레스티지 퀴베. 아비즈·크라망의 샤르도네와 아이의 피노 누아로 만든다.",
    quiz: [{ q: "포므리 퀴베 루이즈의 첫 빈티지는?", a: "1979년", x: ["1874년", "1921년", "2002년"] }],
  }),
  mk({
    ...CH, id: "fr2_lp_ultrabrut", name: "로랑 페리에 울트라 브뤼", original: "Laurent-Perrier Ultra Brut", producer: "로랑 페리에",
    sub: "투르 쉬르 마른", grape: "샤르도네·피노 누아", type: "sparkling", tier: 2, shape: "champagne", nv: true, cap: "#e8e2cf",
    cls: "Brut Nature",
    fact: "1981년 나온 당분 무첨가(논 도자주) 샴페인의 선구자. 1889년 영국 손님을 위해 만든 '설탕 없는 그랑 뱅'을 되살렸다.",
    quiz: [
      { q: "로랑 페리에 울트라 브뤼의 특징은?", a: "병입 전에 당분(도자주)을 전혀 넣지 않는다", x: ["얼음을 넣어 마시도록 달게 만든다", "레드 와인을 섞어 분홍빛을 낸다", "오크통에서 10년 숙성한다"] },
      { q: "로랑 페리에 울트라 브뤼가 처음 나온 해는?", a: "1981년", x: ["1889년", "1949년", "2006년"] },
    ],
  }),
  mk({
    ...CH, id: "fr2_billecart_nf", name: "빌카르 살몽 퀴베 니콜라 프랑수아", original: "Cuvée Nicolas François", maker: "Billecart-Salmon",
    producer: "빌카르 살몽", sub: "마뢰유 쉬르 아이", grape: "피노 누아·샤르도네", type: "sparkling", tier: 2, shape: "champagne",
    cap: "#e8e2cf", cls: "Brut",
    fact: "1818년 하우스를 세운 니콜라 프랑수아 빌카르의 이름을 딴 빌카르 살몽의 프레스티지 빈티지 샴페인. 좋은 해에만 만든다.",
    quiz: [{ q: "빌카르 살몽 퀴베 니콜라 프랑수아가 기리는 인물은?", a: "빌카르 살몽의 창업자", x: ["샴페인을 발명했다는 수도사", "나폴레옹의 장군", "하우스를 사들인 영국 상인"] }],
  }),
  mk({
    ...CH, id: "fr2_selosse_substance", name: "자크 셀로스 쉽스탕스", original: "Substance", maker: "Jacques Selosse", producer: "자크 셀로스",
    sub: "아비즈", grape: "샤르도네", type: "sparkling", tier: 2, shape: "champagne", nv: true, cap: "#e8e2cf", cls: "Blanc de Blancs Grand Cru",
    fact: "1986년부터 해마다 새 와인을 보태고 일부를 덜어 내는 방식으로 이어 온 셀로스의 블랑 드 블랑. 수십 해의 와인이 한 병에 섞여 있다.",
    quiz: [{ q: "자크 셀로스 쉽스탕스가 여러 해 와인을 섞는 방식은?", a: "셰리처럼 솔레라 방식", x: ["포트처럼 주정 강화", "아마로네처럼 포도 말리기", "보졸레처럼 탄산 침용"] }],
  }),
  mk({
    ...CH, id: "fr2_henriot_cuve38", name: "앙리오 퀴브 38", original: "Henriot Cuve 38", producer: "앙리오",
    sub: "랭스", grape: "샤르도네", type: "sparkling", tier: 3, shape: "champagne", nv: true, cap: "#1a2330", cls: "Blanc de Blancs Grand Cru",
    fact: "1990년 조제프 앙리오가 코트 데 블랑 그랑 크뤼 샤르도네를 모으기 시작한 '영구 리저브'. 해마다 일부만 덜어 매그넘으로만 낸다.",
    quiz: [{ q: "앙리오 퀴브 38의 '38'이 가리키는 것은?", a: "영구 리저브를 처음 담은 탱크 번호", x: ["숙성한 햇수", "섞은 빈티지의 수", "포도밭 구획의 수"] }],
  }),
  mk({
    ...CH, id: "fr2_barons_rothschild", name: "바롱 드 로칠드 브뤼", original: "Barons de Rothschild Brut", producer: "샴페인 바롱 드 로칠드",
    grape: "샤르도네·피노 누아", type: "sparkling", tier: 2, shape: "champagne", nv: true, cap: "#1c1a1a", cls: "Brut", since: 2005,
    fact: "2005년 로칠드 가문의 세 갈래가 처음으로 힘을 합쳐 세운 샴페인 하우스. 샤르도네 비중을 높여 섬세하게 만든다.",
    quiz: [
      { q: "2005년 샴페인 바롱 드 로칠드를 세우며 처음 손을 잡은 것은?", a: "로칠드 가문의 세 갈래", x: ["보르도 1등급 샤토 다섯 곳", "샴페인 협동조합 세 곳", "영국 왕실과 로칠드 은행"] },
      { q: "샴페인 바롱 드 로칠드를 세운 로칠드 가문의 한 갈래가 가진 보르도 1등급 샤토는?", a: "샤토 라피트 로칠드", x: ["샤토 라투르", "샤토 마고", "샤토 오브리옹"] },
    ],
  }),
  mk({
    ...CH, id: "fr2_roederer_bn", name: "루이 로드레 브뤼 나튀르 (필리프 스탁)", original: "Louis Roederer Brut Nature", producer: "루이 로드레",
    sub: "랭스", grape: "피노 누아·피노 뫼니에·샤르도네", type: "sparkling", tier: 2, shape: "champagne", cap: "#f2efe8",
    cls: "Brut Nature", since: 2006,
    fact: "디자이너 필리프 스탁과 함께 만든 당분 무첨가 빈티지 샴페인. 2006년산이 첫 빈티지로, 퀴미에르의 점토 땅 포도로 만든다.",
    quiz: [{ q: "루이 로드레 브뤼 나튀르를 셀러 마스터와 함께 구상하고 라벨을 디자인한 인물은?", a: "필리프 스탁", x: ["칼 라거펠트", "장 폴 고티에", "크리스티앙 루부탱"] }],
  }),

  // ───────── 루아르
  mk({
    ...LO, id: "fr2_huet_hautlieu", name: "도멘 위에 부브레 르 오 리외", original: "Le Haut-Lieu", maker: "Domaine Huet", producer: "도멘 위에",
    sub: "부브레", grape: "슈냉 블랑", type: "white", tier: 2, shape: "burgundy", glass: "halfwhite", cap: "#d8c9a0",
    fact: "1차 대전에서 몸을 다친 빅토르 위에가 부브레에 정착해 1928년 처음 산 밭. 2003년 뉴욕의 사업가 앤서니 황이 도멘을 인수했다.",
    quiz: [
      { q: "르 오 리외가 도멘 위에에게 특별한 까닭은?", a: "1928년 도멘이 처음 사들인 밭이다", x: ["도멘에서 가장 가파른 밭이다", "레드 와인만 나는 밭이다", "로마 시대 유적 위의 밭이다"] },
      { q: "2003년 도멘 위에를 인수한 앤서니 황이 따로 와이너리를 가진 곳은?", a: "헝가리 토카이", x: ["미국 나파 밸리", "이탈리아 바롤로", "스페인 리오하"] },
    ],
  }),
  mk({
    ...LO, id: "fr2_baumard_qdc", name: "도멘 데 보마르 카르 드 숌", original: "Quarts de Chaume", maker: "Domaine des Baumard", producer: "도멘 데 보마르",
    sub: "카르 드 숌", grape: "슈냉 블랑", type: "sweet", tier: 2, shape: "burgundy", glass: "flint", cap: "#c9a24e",
    fact: "레이용 강가 비탈의 귀부 슈냉 블랑으로 만드는 앙주의 스위트 와인. 카르 드 숌은 2011년 루아르 최초의 그랑 크뤼 AOC가 됐다.",
    quiz: [{ q: "도멘 데 보마르 카르 드 숌이 나오는 카르 드 숌 AOC가 2011년 얻은 기록은?", a: "루아르 최초의 그랑 크뤼 AOC", x: ["프랑스에서 가장 작은 AOC", "루아르 최초의 레드 와인 AOC", "프랑스 최초의 유기농 AOC"] }],
  }),
  mk({
    ...LO, id: "fr2_langlois", name: "랑글루아 샤토 크레망 드 루아르", original: "Langlois-Château Crémant de Loire", producer: "랑글루아 샤토 (볼랭저 가문)",
    sub: "크레망 드 루아르", grape: "슈냉 블랑·샤르도네·카베르네 프랑", type: "sparkling", tier: 2, shape: "champagne", nv: true,
    cap: "#1a2330", cls: "Brut",
    fact: "소뮈르의 석회암(튀포) 동굴 셀러에서 샴페인 방식으로 빚는 크레망. 1973년부터 샴페인 하우스 볼랭저 가문이 이끈다.",
    quiz: [
      { q: "1973년 랑글루아 샤토에 투자해 경영을 맡은 샴페인 하우스 가문은?", a: "볼랭저", x: ["테탱제", "크뤼그", "루이 로드레"] },
      { q: "랑글루아 샤토라는 이름은 어디에서 왔을까?", a: "창업자 에두아르 랑글루아와 잔 샤토 두 사람의 성", x: ["루아르강의 옛 성", "소뮈르 성의 영주 이름", "샴페인 하우스 이름을 빌려 왔다"] },
    ],
  }),
  mk({
    ...LO, id: "fr2_ackerman", name: "아케르망 크레망 드 루아르", original: "Ackerman Crémant de Loire", producer: "아케르망",
    sub: "크레망 드 루아르", grape: "슈냉 블랑·샤르도네", type: "sparkling", tier: 3, shape: "champagne", nv: true, cap: "#c9a24e", cls: "Brut",
    fact: "1811년 소뮈르에 문을 연 루아르에서 가장 오래된 스파클링 와인 하우스. 창업자 장 바티스트 아케르망이 샴페인 방식을 소뮈르 와인에 처음 들여왔다.",
    quiz: [
      { q: "아케르망이 가진 기록은?", a: "루아르에서 가장 오래된 스파클링 와인 하우스", x: ["프랑스 최초의 샴페인 하우스", "루아르 최초의 그랑 크뤼", "세계 최대의 로제 생산자"] },
      { q: "아케르망이 세워진 해는?", a: "1811년", x: ["1743년", "1885년", "1936년"] },
    ],
  }),
  mk({
    ...LO, id: "fr2_mellot_moussiere", name: "알퐁스 멜로 상세르 라 무시에르", original: "Sancerre La Moussière", maker: "Alphonse Mellot",
    producer: "알퐁스 멜로", sub: "상세르", grape: "소비뇽 블랑", type: "white", tier: 2, shape: "burgundy", glass: "halfwhite", cap: "#e0d3ad",
    fact: "1513년 기록에도 이름이 나오는 상세르의 멜로 가문 와인. 대를 잇는 아들이 '알퐁스'라는 이름을 물려받아 지금은 열아홉 번째 알퐁스가 이끈다.",
    quiz: [{ q: "알퐁스 멜로 가문의 전통은?", a: "대를 잇는 아들이 '알퐁스'라는 이름을 물려받는다", x: ["맏딸이 도멘을 물려받는다", "라벨에 늘 가문 문장만 넣는다", "10년마다 포도나무를 모두 새로 심는다"] }],
  }),
  mk({
    ...LO, id: "fr2_bredif_vouvray", name: "마르크 브레디프 부브레", original: "Marc Brédif Vouvray", producer: "마르크 브레디프 (라두세트 가문)",
    sub: "부브레", grape: "슈냉 블랑", type: "white", tier: 3, shape: "burgundy", glass: "halfwhite", cap: "#d8c9a0",
    fact: "루아르강 가 로슈코르봉의 석회암(튀포) 절벽을 파서 만든 동굴 셀러로 유명한 부브레의 명가. 가장 오래된 굴은 10세기로 거슬러 올라간다.",
    quiz: [{ q: "1980년 마르크 브레디프를 사들인, 푸이 퓌메의 가문은?", a: "라두세트 가문", x: ["부르주아 가문", "멜로 가문", "위에 가문"] }],
  }),

  // ───────── 알자스
  mk({
    ...AL, id: "fr2_trimbach_cfe", name: "트림바흐 리슬링 퀴베 프레데릭 에밀", original: "Cuvée Frédéric Émile", maker: "Trimbach", producer: "트림바흐",
    sub: "리보빌레", grape: "리슬링", type: "white", tier: 2, shape: "flute", cap: "#e3d7b3", cls: "Riesling",
    fact: "리보빌레의 두 그랑 크뤼 가이스베르그와 오스터베르그의 리슬링을 섞는다. 1967년 처음 선보였고, 트림바흐는 라벨에 그랑 크뤼를 적지 않는다.",
    quiz: [
      { q: "트림바흐 퀴베 프레데릭 에밀에 섞는 두 그랑 크뤼는 가이스베르그와 어디일까?", a: "오스터베르그", x: ["슐로스베르그", "랑겐", "로자케르"] },
      { q: "퀴베 프레데릭 에밀이라는 이름의 주인공은?", a: "19세기 말 트림바흐를 이끈 프레데릭 에밀 트림바흐", x: ["알자스를 되찾은 프랑스 장군", "리보빌레의 수호성인", "창업자의 스위스인 동업자"] },
    ],
  }),
  mk({
    ...AL, id: "fr2_schlumberger_kitterle", name: "도멘 슐룸베르제 리슬링 그랑 크뤼 키테를레", original: "Kitterlé", maker: "Domaines Schlumberger",
    producer: "도멘 슐룸베르제", sub: "게브빌레르", grape: "리슬링", type: "white", tier: 2, shape: "flute", cap: "#d8c9a0", cls: "Grand Cru",
    fact: "1810년 니콜라 슐룸베르제가 게브빌레르에 세운 도멘. 알자스에서 그랑 크뤼 밭을 가장 많이 가졌고, 키테를레는 화산성 사암의 급경사 그랑 크뤼다.",
    quiz: [
      { q: "도멘 슐룸베르제가 알자스에서 가진 기록은?", a: "그랑 크뤼 밭을 가장 많이 가졌다", x: ["알자스에서 가장 오래된 협동조합이다", "알자스 최초로 크레망을 만들었다", "유일하게 레드 그랑 크뤼를 만든다"] },
      { q: "도멘 슐룸베르제가 자리한 게브빌레르 마을의 특징은?", a: "그랑 크뤼 네 곳을 가진 알자스 유일의 마을", x: ["알자스에서 가장 북쪽 마을", "리슬링이 처음 발견된 마을", "화이트 와인이 금지된 마을"] },
    ],
  }),
  mk({
    ...AL, id: "fr2_weinbach_theo", name: "도멘 바인바흐 리슬링 퀴베 테오", original: "Riesling Cuvée Théo", maker: "Domaine Weinbach",
    producer: "도멘 바인바흐", sub: "카이제르스베르그", grape: "리슬링", type: "white", tier: 3, shape: "flute", cap: "#d8c9a0",
    fact: "카푸친회 수도사들이 일군 모노폴 클로 데 카퓌생의 포도로만 만든다. 이름은 도멘의 2대 주인이자 알자스 AOC 인정에 힘쓴 테오 팔레르에게서 왔다.",
    quiz: [{ q: "도멘 바인바흐 퀴베 테오의 '테오'는 누구일까?", a: "도멘을 이끈 테오 팔레르", x: ["클로를 일군 카푸친회 수도원장", "알자스의 수호성인 테오발트", "로마 황제 테오도시우스"] }],
  }),
  mk({
    ...AL, id: "fr2_dopff_julien", name: "도프 오 물랭 크레망 달자스 퀴베 쥘리앵", original: "Crémant d'Alsace Cuvée Julien", maker: "Dopff au Moulin",
    producer: "도프 오 물랭", sub: "리크비르", grape: "피노 블랑·오세루아", type: "sparkling", tier: 2, shape: "champagne", nv: true,
    cap: "#c9a24e", cls: "Brut",
    fact: "1900년 파리 만국박람회에서 샴페인 양조를 본 쥘리앵 도프가 샹파뉴에서 배워 와 알자스 스파클링을 처음 만들었다. 그를 기리는 퀴베다.",
    quiz: [
      { q: "도프 오 물랭의 쥘리앵 도프가 스파클링 와인에 눈뜬 계기는?", a: "1900년 파리 만국박람회", x: ["나폴레옹의 대관식 연회", "1차 대전 참전", "러시아 황실 방문"] },
      { q: "도프 오 물랭 퀴베 쥘리앵 같은 크레망 달자스가 AOC로 인정받은 해는?", a: "1976년", x: ["1900년", "1936년", "2011년"] },
    ],
  }),

  // ───────── 프로방스
  mk({
    id: "fr2_trevallon", name: "도멘 드 트레발롱 루주", original: "Domaine de Trévallon", producer: "뒤르바크 가문",
    country: "프랑스", area: "프로방스", sub: "알피유", grape: "카베르네 소비뇽·시라", type: "red", tier: 2, shape: "bordeaux", cap: "#4b1d1d",
    fact: "건축가 엘루아 뒤르바크가 1973년 레 보 드 프로방스에 카베르네와 시라를 심어 만든 와인. 카베르네 비중 상한 규정을 거부해 1990년대 AOC를 잃었다.",
    quiz: [
      { q: "도멘 드 트레발롱 라벨에 그림을 그린 사람은?", a: "창업자의 아버지이자 피카소의 벗인 화가 르네 뒤르바크", x: ["파블로 피카소", "마르크 샤갈", "앤디 워홀"] },
      { q: "도멘 드 트레발롱이 AOC를 버리고 지역 와인(IGP)으로 나오게 된 까닭은?", a: "카베르네 소비뇽 비중 상한 규정을 따르지 않아서", x: ["포도밭이 AOC 경계 밖으로 옮겨서", "화이트 품종을 섞어서", "병입을 다른 지역에서 해서"] },
    ],
  }),
  mk({
    id: "fr2_lacoste", name: "샤토 라 코스트 로제", original: "Château La Coste", producer: "패디 매킬런", producerQ: true,
    country: "프랑스", area: "프로방스", sub: "코토 덱상프로방스", grape: "그르나슈·생소", type: "rose", tier: 2, shape: "burgundy",
    glass: "flint", cap: "#efe9e2",
    fact: "아일랜드 사업가 패디 매킬런이 가꾼 엑상프로방스의 와이너리 겸 미술 공원. 안도 다다오·렌초 피아노·오스카르 니마이어의 건축이 포도밭 사이에 놓여 있다.",
    quiz: [
      { q: "샤토 라 코스트 입구의 아트 센터를 설계한 일본 건축가는?", a: "안도 다다오", x: ["구마 겐고", "이토 도요", "반 시게루"] },
      { q: "샤토 라 코스트 아트 센터 앞 물 위에 놓인 루이즈 부르주아의 조각은?", a: "거대한 거미", x: ["빨간 호박", "풍선 강아지", "생각하는 사람"] },
    ],
  }),
  mk({
    id: "fr2_leoube", name: "샤토 레우브 로제", original: "Château Léoube", producer: "뱀퍼드 가문 (JCB)", producerQ: true,
    country: "프랑스", area: "프로방스", sub: "코트 드 프로방스", grape: "그르나슈·생소", type: "rose", tier: 3, shape: "burgundy",
    glass: "flint", cap: "#efe9e2", since: 2008,
    fact: "영국 건설기계 회사 JCB의 뱀퍼드 부부가 1997년 사들인 보름 레 미모사 해안의 영지. 유기농으로 가꾸며 2008년 첫 빈티지를 냈다.",
    quiz: [{ q: "샤토 레우브를 소유한 뱀퍼드 가문의 회사는?", a: "건설기계 회사 JCB", x: ["자동차 회사 재규어", "위스키 회사 조니 워커", "패션 브랜드 버버리"] }],
  }),
  mk({
    id: "fr2_galoupet", name: "샤토 갈루페 로제", original: "Château Galoupet", producer: "모에 헤네시 (LVMH)", producerQ: true,
    country: "프랑스", area: "프로방스", sub: "코트 드 프로방스", grape: "그르나슈·생소", type: "rose", tier: 3, shape: "burgundy",
    glass: "flint", cap: "#efe9e2", cls: "Cru Classé",
    fact: "1955년 코트 드 프로방스 크뤼 클라세에 오른 영지. 숲으로 둘러싸인 이 영지를 2019년 모에 헤네시가 사들였다.",
    quiz: [
      { q: "샤토 갈루페가 1955년 오른 등급은?", a: "코트 드 프로방스 크뤼 클라세", x: ["그랑 크뤼 클라세 드 그라브", "크뤼 부르주아", "프르미에 그랑 크뤼 클라세"] },
      { q: "2019년 샤토 갈루페를 사들인 그룹은?", a: "모에 헤네시(LVMH)", x: ["페르노 리카", "케링", "카스텔 그룹"] },
    ],
  }),
  mk({
    id: "fr2_steroseline", name: "샤토 생트 로즐린 로제", original: "Château Sainte Roseline", producer: "샤토 생트 로즐린",
    country: "프랑스", area: "프로방스", sub: "코트 드 프로방스", grape: "그르나슈·생소", type: "rose", tier: 2, shape: "burgundy",
    glass: "flint", cap: "#efe9e2", cls: "Cru Classé",
    fact: "성녀 로즐린의 유해를 모신 예배당이 있는 레 자르크의 크뤼 클라세. 예배당에는 샤갈이 1975년 만든 모자이크 '천사들의 식사'가 있다.",
    quiz: [{ q: "샤토 생트 로즐린 예배당에 모자이크 '천사들의 식사'를 남긴 화가는?", a: "마르크 샤갈", x: ["파블로 피카소", "앙리 마티스", "장 콕토"] }],
  }),

  // ───────── 랑그독 · 루시용
  mk({
    id: "fr2_grangedesperes", name: "도멘 드 라 그랑주 데 페르 루주", original: "Domaine de la Grange des Pères", producer: "로랑 바이예", producerQ: true,
    country: "프랑스", area: "랑그독", sub: "에로", grape: "시라·무르베드르·카베르네 소비뇽", type: "red", tier: 2, shape: "burgundy",
    cap: "#4b1d1d", since: 1992,
    fact: "마스 드 도마 가삭과 같은 아니안 마을의 컬트 와인. 로랑 바이예가 트레발롱·장 루이 샤브·코슈 뒤리에서 일을 배워 1992년 첫 빈티지를 냈다.",
    quiz: [{ q: "그랑주 데 페르를 만든 로랑 바이예가 일을 배운 론 북부의 명가는?", a: "도멘 장 루이 샤브", x: ["E. 기갈", "M. 샤푸티에", "폴 자불레 애네"] }],
  }),
  mk({
    id: "fr2_closdora", name: "제라르 베르트랑 클로 도라", original: "Clos d'Ora", maker: "Gérard Bertrand", producer: "제라르 베르트랑",
    country: "프랑스", area: "랑그독", sub: "미네르부아 라 리비니에르", grape: "시라·그르나슈·무르베드르", type: "red", tier: 2,
    shape: "burgundy", cap: "#2a0f14", since: 2012,
    fact: "15년 준비 끝에 2012년 첫 빈티지를 낸 제라르 베르트랑의 기함. 돌담에 둘러싸인 9ha 밭을 비오디나미로 가꾸며 말로 밭을 간다.",
    quiz: [{ q: "제라르 베르트랑 클로 도라의 첫 빈티지는?", a: "2012년", x: ["1978년", "1992년", "2002년"] }],
  }),
  mk({
    id: "fr2_masamiel", name: "마스 아미엘 모리 20년", original: "Mas Amiel 20 Ans d'Âge", labelName: "Mas Amiel", producer: "마스 아미엘",
    country: "프랑스", area: "랑그독", sub: "모리", grape: "그르나슈", type: "fortified", tier: 3, shape: "bordeaux",
    liquid: "amber", cap: "#5b1620", nv: true, cls: "Maury",
    fact: "루시용 모리의 전통 주정강화 와인. 그르나슈 와인을 큰 유리병(봉본)에 담아 한 해 동안 햇볕과 눈을 맞히며 산화 숙성한 뒤 큰 나무통에서 오래 익힌다.",
    quiz: [{ q: "마스 아미엘이 모리 와인을 한 해 동안 바깥 햇볕 아래 숙성하는 용기는?", a: "큰 유리병(봉본)", x: ["암포라 항아리", "스테인리스 탱크", "콘크리트 달걀"] }],
  }),

  // ───────── 쉬드우에스트 · 코르시카 · 쥐라
  mk({
    id: "fr2_lagrezette", name: "샤토 라그레제트 카오르", original: "Château Lagrézette", producer: "알랭 도미니크 페랭", producerQ: true,
    country: "프랑스", area: "쉬드우에스트", sub: "카오르", grape: "말벡", type: "red", tier: 3, shape: "bordeaux", cap: "#2a0f14",
    fact: "15세기 성을 1980년 까르띠에의 CEO 알랭 도미니크 페랭이 사들여 되살린 카오르의 영지. 최상급 퀴베 '르 피주니에'가 유명하다.",
    quiz: [
      { q: "1980년 샤토 라그레제트를 사들인 알랭 도미니크 페랭이 이끌던 기업은?", a: "까르띠에", x: ["루이 비통", "에르메스", "샤넬"] },
      { q: "샤토 라그레제트의 최상급 퀴베 '르 피주니에'의 이름이 가리키는 것은?", a: "밭 한가운데의 17세기 비둘기 집", x: ["성의 망루", "옛 물레방아", "마을 성당"] },
    ],
  }),
  mk({
    id: "fr2_abbatucci_faustine", name: "도멘 콩트 아바투치 퀴베 포스틴", original: "Cuvée Faustine", maker: "Domaine Comte Abbatucci",
    producer: "도멘 콩트 아바투치", country: "프랑스", area: "코르시카", grape: "시아카렐루·니엘루치우", type: "red", tier: 3,
    shape: "burgundy", cap: "#6a1822",
    fact: "나폴레옹과 함께 싸운 코르시카의 영웅 아바투치 장군의 후손이 이끄는 도멘. 1960년대 아버지 앙투안이 섬 토착 품종을 모아 보존 포도원을 만들었다.",
    quiz: [{ q: "도멘 콩트 아바투치가 1960년대부터 모아 지켜 온 것은?", a: "코르시카 토착 포도 품종", x: ["나폴레옹의 편지", "로마 시대 암포라", "야생 올리브 나무"] }],
  }),
  mk({
    id: "fr2_arlay_vinjaune", name: "샤토 다를레 뱅 존", original: "Château d'Arlay Vin Jaune", labelName: "Château d'Arlay",
    producer: "샤토 다를레 (드 라기슈 가문)", country: "프랑스", area: "쥐라", sub: "코트 뒤 쥐라", grape: "사바냉", type: "white", tier: 3,
    shape: "burgundy", glass: "deadleaf", liquid: "golden", cap: "#c9a24e", cls: "Vin Jaune",
    fact: "1070년 기록이 남아 있는, 프랑스에서 가장 오래된 성 딸린 포도원으로 꼽힌다. 중세 이후 한 번도 팔린 적 없이 대물림됐다.",
    quiz: [{ q: "샤토 다를레 뱅 존 같은 쥐라의 뱅 존은 오크통에서 어떻게 숙성할까?", a: "보충하지 않고 효모 막 아래에서 여러 해 둔다", x: ["해마다 새 와인을 보충한다(솔레라)", "주정을 넣어 발효를 멈춘다", "포도를 짚 위에서 말린 뒤 빚는다"] }],
  }),
];
