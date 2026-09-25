import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  bx_rauzansegla: {
    fact: "创立于1661年的玛歌二级庄。1994年被拥有香奈儿的Wertheimer家族买下。",
    quiz: [
      { q: "1994年买下Château Rauzan-Ségla的时尚企业是？", a: "香奈儿", x: ["爱马仕", "迪奥", "古驰"] },
    ],
  },
  bx_rauzangassies: {
    fact: "昔日的Rauzan庄园分家时与Rauzan-Ségla分开的玛歌二级庄。Quié家族将它与波亚克的Croizet-Bages一同经营。",
    quiz: [
      { q: "原本与Château Rauzan-Gassies同属一个庄园的玛歌酒庄是？", a: "Château Rauzan-Ségla", x: ["Château Brane-Cantenac", "Château Lascombes", "Château Durfort-Vivens"] },
      { q: "与Château Rauzan-Gassies同由Quié家族经营的波亚克五级庄是？", a: "Château Croizet-Bages", x: ["Château Lynch-Moussas", "Château Pédesclaux", "Château Batailley"] },
    ],
  },
  bx_leovillelascases: {
    fact: "梅多克数一数二的大庄园Léoville一分为三时诞生。酒标上顶着狮子像的石门，是“Grand Clos”葡萄园的入口。",
    quiz: [
      { q: "Château Léoville Las Cases酒标上石门顶部的雕像是？", a: "狮子", x: ["鹰", "马", "钟"] },
      { q: "掌管Château Léoville Las Cases的家族是？", a: "Delon家族", x: ["Barton家族", "Cuvelier家族", "Borie家族"] },
    ],
  },
  bx_leovillepoyferre: {
    fact: "由Léoville庄园分出的三座酒庄之一。自1920年起归Cuvelier家族所有。",
    quiz: [
      { q: "自1920年起拥有Château Léoville Poyferré的家族是？", a: "Cuvelier家族", x: ["Delon家族", "Barton家族", "Cazes家族"] },
    ],
  },
  bx_leovillebarton: {
    fact: "爱尔兰裔的Barton家族于1826年购入并守护至今。由于没有独立的酒庄建筑，它在邻近的Langoa Barton一起酿造。",
    quiz: [
      { q: "拥有Château Léoville Barton的Barton家族根在哪里？", a: "爱尔兰", x: ["苏格兰", "荷兰", "德国"] },
      { q: "与Château Léoville Barton一起酿造、同属一个家族的三级庄是？", a: "Château Langoa Barton", x: ["Château Lagrange", "Château Talbot", "Château Saint-Pierre"] },
    ],
  },
  bx_durfortvivens: {
    fact: "名字来自中世纪领主Durfort de Duras家族的玛歌二级庄。在Gonzague Lurton的带领下改用了生物动力法种植。",
    quiz: [
      { q: "Château Durfort-Vivens在1855年梅多克分级中属于几级？", a: "二级", x: ["三级", "四级", "五级"] },
    ],
  },
  bx_gruaudlarose: {
    fact: "酒标上写着“王者之酒，酒中之王”的圣朱利安二级庄。自1997年起归波尔多的Taillan集团所有。",
    quiz: [
      { q: "Château Gruaud Larose酒标上那句话的意思是？", a: "王者之酒，酒中之王", x: ["神赐的水滴", "梅多克女王", "以耐心酿成的酒"] },
    ],
  },
  bx_lascombes: {
    fact: "1950年代由生于俄国的美国葡萄酒作家Alexis Lichine买下并重振声誉的玛歌二级庄。",
    quiz: [
      { q: "1950年代买下并重振Château Lascombes的葡萄酒作家是？", a: "Alexis Lichine", x: ["Robert Parker", "Émile Peynaud", "Hugh Johnson"] },
    ],
  },
  bx_branecantenac: {
    fact: "被称为“葡萄藤上的拿破仑”的布朗男爵卖掉今天的Mouton Rothschild之后经营的庄园，如今由Henri Lurton掌管。",
    quiz: [
      { q: "Château Brane-Cantenac的布朗男爵此前卖掉的波亚克庄园是？", a: "今天的Château Mouton Rothschild", x: ["今天的Château Lafite Rothschild", "今天的Château Latour", "今天的Château Pichon Baron"] },
      { q: "为Château Brane-Cantenac留下名字的布朗男爵有什么绰号？", a: "葡萄藤上的拿破仑", x: ["圣埃斯泰夫的大君", "梅多克的教皇", "葡萄酒之王"] },
    ],
  },
  bx_pichonbaron: {
    fact: "以尖塔耸立、宛如童话的城堡闻名的波亚克二级庄。自1987年起归保险公司安盛旗下的AXA Millésimes所有。",
    quiz: [
      { q: "1987年买下Château Pichon Baron的是？", a: "AXA Millésimes", x: ["LVMH", "Chanel", "Louis Roederer"] },
      { q: "原本与Château Pichon Baron同属一个庄园、后来分开的酒庄是？", a: "Château Pichon Longueville Comtesse de Lalande", x: ["Château Latour", "Château Lynch-Bages", "Château Pontet-Canet"] },
    ],
  },
  bx_pichoncomtesse: {
    fact: "分得Pichon庄园一部分的女儿Virginie嫁给了拉朗德伯爵，酒庄由此得名。2007年被香槟酒庄Louis Roederer买下。",
    quiz: [
      { q: "2007年收购Château Pichon Longueville Comtesse de Lalande的香槟酒庄是？", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  bx_ducrubeaucaillou: {
    fact: "“Beaucaillou”意为“美丽的砾石”，指吉伦特河畔的砾石丘。自1941年起归Borie家族所有。",
    quiz: [
      { q: "Château Ducru-Beaucaillou名字中的“Beaucaillou”是什么意思？", a: "美丽的砾石", x: ["美丽的山丘", "古老的塔楼", "小树林"] },
      { q: "自1941年起拥有Château Ducru-Beaucaillou的家族是？", a: "Borie家族", x: ["Delon家族", "Barton家族", "Cuvelier家族"] },
    ],
  },
  bx_cosdestournel: {
    fact: "人称“圣埃斯泰夫大君”的Louis Gaspard d'Estournel醉心于印度贸易，在酒窖屋顶上建起了东方风格的塔楼。自2000年起归Michel Reybier所有。",
    quiz: [
      { q: "Château Cos d'Estournel酒窖建筑的特征是？", a: "印度风格的宝塔", x: ["中世纪城堡塔楼", "希腊神庙石柱", "都铎式砖房"] },
      { q: "Château Cos d'Estournel创始人Louis Gaspard d'Estournel的绰号是？", a: "圣埃斯泰夫的大君", x: ["葡萄藤上的拿破仑", "梅多克的教皇", "葡萄酒之王"] },
    ],
  },
  bx_montrose: {
    fact: "名字来自覆盖着粉色石楠花的山丘（“mont rose”）。2006年被法国企业家Bouygues兄弟买下。",
    quiz: [
      { q: "Château Montrose这个名字来自什么？", a: "覆盖着粉色石楠花的山丘", x: ["玫瑰园", "红色岩山", "创始人女儿的名字"] },
      { q: "2006年买下Château Montrose的是？", a: "Bouygues兄弟", x: ["Wertheimer兄弟", "Delon家族", "Cazes家族"] },
    ],
  },
  bx_kirwan: {
    fact: "以18世纪经营这片庄园的爱尔兰人Mark Kirwan命名。自1925年起归波尔多酒商Schÿler家族所有。",
    quiz: [
      { q: "Château Kirwan在1855年梅多克分级中属于几级？", a: "三级", x: ["二级", "四级", "五级"] },
    ],
  },
  bx_dissan: {
    fact: "被护城河环绕的17世纪城堡。酒标上写着一句拉丁文：“为了国王的餐桌与神的祭坛”。",
    quiz: [
      { q: "Château d'Issan酒标上的拉丁文是什么意思？", a: "为了国王的餐桌与神的祭坛", x: ["神栖身于葡萄园", "耐心成就美酒", "唯有至臻"] },
    ],
  },
  bx_lagrange: {
    fact: "1983年被日本三得利买下，并全面整修了葡萄园和酒窖的圣朱利安三级庄。",
    quiz: [
      { q: "1983年买下Château Lagrange的日本企业是？", a: "三得利", x: ["麒麟", "朝日", "札幌"] },
    ],
  },
  bx_langoabarton: {
    fact: "1821年由Hugh Barton买下的18世纪酒庄。Léoville Barton也在这座酒庄的酒窖里一起酿造。",
    quiz: [
      { q: "在Château Langoa Barton酒窖中一起酿造的二级庄酒是？", a: "Château Léoville Barton", x: ["Château Léoville Poyferré", "Château Gruaud Larose", "Château Ducru-Beaucaillou"] },
    ],
  },
  bx_giscours: {
    fact: "连同森林和草地在内，面积达数百公顷的广阔庄园。自1995年起由荷兰企业家Eric Albada Jelgersma的家族经营。",
    quiz: [
      { q: "自1995年起经营Château Giscours的Albada Jelgersma家族来自哪个国家？", a: "荷兰", x: ["比利时", "瑞士", "英国"] },
      { q: "与Château Giscours由同一家族经营的玛歌酒庄是？", a: "Château du Tertre", x: ["Château Dauzac", "Château Pouget", "Château Ferrière"] },
    ],
  },
  bx_malescot: {
    fact: "名字结合了17世纪王室法律顾问Simon Malescot与19世纪庄主圣埃克苏佩里伯爵。自1955年起由Zuger家族掌管。",
    quiz: [
      { q: "与Château Malescot St. Exupéry的圣埃克苏佩里伯爵出自同一家族的作家，其代表作是？", a: "《小王子》", x: ["《局外人》", "《悲惨世界》", "《三个火枪手》"] },
    ],
  },
  bx_boydcantenac: {
    fact: "名字来自18世纪拥有这片土地的Jacques Boyd。Guillemet家族将它与四级庄Château Pouget一同经营。",
    quiz: [
      { q: "与Château Boyd-Cantenac由同一家族经营的四级庄是？", a: "Château Pouget", x: ["Château Talbot", "Château Saint-Pierre", "Château Lafon-Rochet"] },
    ],
  },
  bx_cantenacbrown: {
    fact: "由苏格兰裔葡萄酒商John Lewis Brown建造的英国都铎式城堡，在梅多克十分罕见。",
    quiz: [
      { q: "Château Cantenac Brown建筑的风格是？", a: "英国都铎式", x: ["新古典主义", "印度宝塔式", "意大利文艺复兴式"] },
    ],
  },
  bx_palmer: {
    fact: "参加过拿破仑战争的英国将军查尔斯·帕尔默于1814年买下此庄，酒庄由此得名。虽是三级庄，售价却在二级庄之上。",
    quiz: [
      { q: "为Château Palmer留下名字的查尔斯·帕尔默是哪国人？", a: "英国", x: ["爱尔兰", "荷兰", "美国"] },
      { q: "Château Palmer酒标的代表性配色是？", a: "黑底配金色", x: ["白底配红色", "蓝底配银色", "绿底配金色"] },
    ],
  },
  bx_lalagune: {
    fact: "从波尔多市区北上梅多克时最先遇到的列级名庄。自2000年起归同时拥有罗讷河谷Paul Jaboulet Aîné的Frey家族所有。",
    quiz: [
      { q: "拥有Château La Lagune的Frey家族在罗讷河谷经营的酒庄是？", a: "Paul Jaboulet Aîné", x: ["Guigal", "Chapoutier", "Château de Beaucastel"] },
    ],
  },
  bx_desmirail: {
    fact: "由波尔多葡萄酒世家Lurton家族经营的玛歌三级庄。一度因葡萄园分散而只剩下名字，后来得以复兴。",
    quiz: [
      { q: "Château Desmirail在1855年梅多克分级中属于几级？", a: "三级", x: ["二级", "四级", "五级"] },
    ],
  },
  bx_calonsegur: {
    fact: "同时拥有Lafite和Latour的塞古尔侯爵曾说“我的心在Calon”，因此酒标上画了一颗心。",
    quiz: [
      { q: "Château Calon Ségur酒标上画的象征是？", a: "心形", x: ["狮子", "钟", "皇冠"] },
      { q: "Calon Ségur心形轶事中的塞古尔侯爵还拥有哪两座一级庄？", a: "Lafite和Latour", x: ["Margaux和Haut-Brion", "Mouton和Haut-Brion", "Margaux和Mouton"] },
    ],
  },
  bx_ferriere: {
    fact: "在1855年列级酒庄中数一数二小的玛歌三级庄。由Claire Villars Lurton掌管，采用生物动力法。",
    quiz: [
      { q: "Château Ferrière在1855年梅多克分级中属于几级？", a: "三级", x: ["二级", "四级", "五级"] },
    ],
  },
  bx_marquisdalesme: {
    fact: "原名“Marquis d'Alesme Becker”。2006年被Perrodo家族买下后，去掉了名字中的“Becker”并焕然一新。",
    quiz: [
      { q: "Château Marquis d'Alesme以前的名字是？", a: "Marquis d'Alesme Becker", x: ["Marquis de Terme", "Malescot St. Exupéry", "Rauzan-Gassies"] },
    ],
  },
  bx_saintpierre: {
    fact: "曾任圣朱利安镇长的Henri Martin于1982年买下的四级庄，与Château Gloria由同一家族经营。",
    quiz: [
      { q: "与Château Saint-Pierre由同一家族经营的圣朱利安葡萄酒是？", a: "Château Gloria", x: ["Château Talbot", "Château Beychevelle", "Château Lagrange"] },
    ],
  },
  bx_talbot: {
    fact: "相传以百年战争末期在卡斯蒂永战役中阵亡的英格兰将军约翰·塔尔博特命名。白葡萄酒“Caillou Blanc”也很有名。",
    quiz: [
      { q: "相传为Château Talbot名字来源的英格兰将军约翰·塔尔博特参加的是哪场战争？", a: "百年战争", x: ["三十年战争", "玫瑰战争", "拿破仑战争"] },
      { q: "Château Talbot酿造的白葡萄酒叫什么？", a: "Caillou Blanc", x: ["Pavillon Blanc", "Aile d'Argent", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_branaireducru: {
    fact: "与马路对面的Château Beychevelle相望的圣朱利安四级庄。自1988年起由Maroteaux家族经营。",
    quiz: [
      { q: "Château Branaire-Ducru在1855年梅多克分级中属于几级？", a: "四级", x: ["二级", "三级", "五级"] },
    ],
  },
  bx_duhartmilon: {
    fact: "与Lafite Rothschild相邻的波亚克四级庄，1962年被Lafite的罗斯柴尔德家族买下并重振。",
    quiz: [
      { q: "1962年买下Château Duhart-Milon的是？", a: "Lafite Rothschild的罗斯柴尔德家族", x: ["Mouton Rothschild的罗斯柴尔德家族", "AXA Millésimes", "Cazes家族"] },
    ],
  },
  bx_pouget: {
    fact: "Guillemet家族与三级庄Boyd-Cantenac一同经营的玛歌小型四级庄。",
    quiz: [
      { q: "与Château Pouget由同一家族经营的三级庄是？", a: "Château Boyd-Cantenac", x: ["Château Cantenac Brown", "Château Kirwan", "Château d'Issan"] },
    ],
  },
  bx_latourcarnet: {
    fact: "保留着护城河和古老瞭望塔的中世纪城堡。2000年被葡萄酒企业家Bernard Magrez买下。",
    quiz: [
      { q: "同时拥有Château La Tour Carnet和Château Pape Clément的人物是？", a: "Bernard Magrez", x: ["Michel Rolland", "Jean-Luc Thunevin", "Gérard Perse"] },
    ],
  },
  bx_lafonrochet: {
    fact: "1960年被Tesseron家族买下并重振的圣埃斯泰夫四级庄。酒庄建筑和酒标都漆成亮黄色，十分醒目。",
    quiz: [
      { q: "代表Château Lafon-Rochet建筑与酒标的颜色是？", a: "黄色", x: ["蓝色", "粉色", "绿色"] },
    ],
  },
  bx_beychevelle: {
    fact: "过往船只为向海军元帅埃佩农公爵致敬而降帆（“baisse voile”），酒庄由此得名。酒标上也画着一艘船。",
    quiz: [
      { q: "成为Château Beychevelle名字由来的动作是？", a: "降帆", x: ["起锚", "鸣钟", "挥旗"] },
      { q: "Château Beychevelle酒标上画的是？", a: "船", x: ["狮子", "心形", "钟"] },
    ],
  },
  bx_prieurelichine: {
    fact: "建在昔日本笃会修道院（prieuré）旧址上的酒庄。1951年Alexis Lichine买下后冠上了自己的名字。",
    quiz: [
      { q: "Château Prieuré-Lichine中的“Prieuré”是什么意思？", a: "修道院", x: ["城堡要塞", "磨坊", "集市"] },
      { q: "为Château Prieuré-Lichine留下名字的人物是？", a: "Alexis Lichine", x: ["Robert Mondavi", "Émile Peynaud", "Hugh Barton"] },
    ],
  },
  bx_marquisdeterme: {
    fact: "沿用18世纪庄主德泰尔姆侯爵之名的玛歌四级庄。自1935年起归Sénéclauze家族所有。",
    quiz: [
      { q: "Château Marquis de Terme在1855年梅多克分级中属于几级？", a: "四级", x: ["二级", "三级", "五级"] },
    ],
  },
  bx_pontetcanet: {
    fact: "较早改用生物动力法、以马拉犁耕作葡萄园的波亚克五级庄。自1975年起归Tesseron家族所有。",
    quiz: [
      { q: "Château Pontet-Canet耕作葡萄园时用什么代替拖拉机？", a: "马", x: ["牛", "驴", "机器人"] },
      { q: "自1975年起拥有Château Pontet-Canet的家族是？", a: "Tesseron家族", x: ["Cazes家族", "Borie家族", "Delon家族"] },
    ],
  },
  bx_batailley: {
    fact: "相传名字来自百年战争期间在此发生的一场战斗。1942年与Haut-Batailley分家，由Castéja家族经营。",
    quiz: [
      { q: "从Château Batailley分出去的相邻五级庄是？", a: "Château Haut-Batailley", x: ["Château Grand-Puy-Lacoste", "Château Lynch-Moussas", "Château d'Armailhac"] },
    ],
  },
  bx_hautbatailley: {
    fact: "1942年从Batailley庄园分出的波亚克五级庄。2017年被拥有Lynch-Bages的Cazes家族买下。",
    quiz: [
      { q: "2017年买下Château Haut-Batailley的家族是？", a: "Cazes家族", x: ["Tesseron家族", "Castéja家族", "Delon家族"] },
    ],
  },
  bx_grandpuylacoste: {
    fact: "“Puy”意为山丘，酒庄坐落在波亚克内陆的砾石丘上。自1978年起由Borie家族经营。",
    quiz: [
      { q: "Château Grand-Puy-Lacoste名字中的“Puy”是什么意思？", a: "山丘", x: ["水井", "森林", "河流"] },
    ],
  },
  bx_grandpuyducasse: {
    fact: "葡萄园分散在波亚克各处，酒庄建筑则位于波亚克镇河畔的五级庄。",
    quiz: [
      { q: "Château Grand-Puy Ducasse在1855年梅多克分级中属于几级？", a: "五级", x: ["二级", "三级", "四级"] },
    ],
  },
  bx_lynchbages: {
    fact: "名字来自曾经拥有这里的爱尔兰裔Lynch家族。自1939年起由Cazes家族掌管，赢得了“穷人的拉图”这一绰号。",
    quiz: [
      { q: "Château Lynch-Bages的绰号是？", a: "穷人的拉图", x: ["梅多克的凡尔赛宫", "圣埃斯泰夫的大君", "波美侯的明珠"] },
      { q: "自1939年起掌管Château Lynch-Bages的家族是？", a: "Cazes家族", x: ["Lynch家族", "Borie家族", "Tesseron家族"] },
    ],
  },
  bx_lynchmoussas: {
    fact: "与Lynch-Bages一样，曾为爱尔兰裔Lynch家族所有的庄园。如今由与Château Batailley相同的Castéja家族经营。",
    quiz: [
      { q: "与Château Lynch-Moussas同由Castéja家族经营的五级庄是？", a: "Château Batailley", x: ["Château Haut-Batailley", "Château Clerc Milon", "Château Pédesclaux"] },
    ],
  },
  bx_dauzac: {
    fact: "以19世纪末首次试验防治葡萄霉病的“波尔多液”（硫酸铜与石灰的混合液）而闻名的玛歌五级庄。",
    quiz: [
      { q: "据说在Château Dauzac首次试验的葡萄园药剂是？", a: "波尔多液", x: ["石硫合剂", "DDT", "高锰酸钾"] },
    ],
  },
  bx_darmailhac: {
    fact: "1933年被菲利普·罗斯柴尔德男爵买下。曾几度更名为“Mouton Baron Philippe”等，1989年才恢复原名d'Armailhac。",
    quiz: [
      { q: "Château d'Armailhac曾经使用过的名字是？", a: "Château Mouton Baron Philippe", x: ["Château Mouton Cadet", "Château Petit Mouton", "Château Clerc Mouton"] },
    ],
  },
  bx_dutertre: {
    fact: "坐落在玛歌产区西侧阿萨克村的山丘（“tertre”）上，与Giscours由同一个Albada Jelgersma家族经营。",
    quiz: [
      { q: "与Château du Tertre由同一家族经营的玛歌三级庄是？", a: "Château Giscours", x: ["Château Kirwan", "Château d'Issan", "Château Palmer"] },
    ],
  },
  bx_hautbagesliberal: {
    fact: "沿用了18世纪庄主Libéral家族的名字。Claire Villars Lurton将它与三级庄Ferrière一同掌管，并采用生物动力法。",
    quiz: [
      { q: "与Château Haut-Bages Libéral由同一人掌管的玛歌三级庄是？", a: "Château Ferrière", x: ["Château Desmirail", "Château Kirwan", "Château d'Issan"] },
    ],
  },
  bx_pedesclaux: {
    fact: "1810年由波尔多葡萄酒经纪人Pierre Urbain Pédesclaux创立。2009年Jacky Lorenzetti将其买下，改建成玻璃包覆的现代建筑。",
    quiz: [
      { q: "2009年买下Château Pédesclaux并重新改造的企业家是？", a: "Jacky Lorenzetti", x: ["Bernard Magrez", "Michel Reybier", "François Pinault"] },
    ],
  },
  bx_belgrave: {
    fact: "位于上梅多克圣洛朗村的五级庄，由波尔多酒商Dourthe经营。",
    quiz: [
      { q: "Château Belgrave在1855年梅多克分级中属于几级？", a: "五级", x: ["二级", "三级", "四级"] },
    ],
  },
  bx_camensac: {
    fact: "上梅多克圣洛朗村的五级庄。与相邻的Belgrave、La Tour Carnet同为圣洛朗的三座列级酒庄。",
    quiz: [
      { q: "与Château Camensac同在圣洛朗村的四级庄是？", a: "Château La Tour Carnet", x: ["Château Talbot", "Château Saint-Pierre", "Château Pouget"] },
    ],
  },
  bx_coslabory: {
    fact: "紧挨着圣埃斯泰夫Cos d'Estournel的小型五级庄，由Audoy家族经营。",
    quiz: [
      { q: "与Château Cos Labory相邻的圣埃斯泰夫二级庄是？", a: "Château Cos d'Estournel", x: ["Château Montrose", "Château Calon Ségur", "Château Lafon-Rochet"] },
    ],
  },
  bx_clercmilon: {
    fact: "与Mouton Rothschild、Lafite Rothschild相邻的波亚克五级庄。1970年被菲利普·罗斯柴尔德男爵买下。",
    quiz: [
      { q: "1970年买下Château Clerc Milon的人物是？", a: "菲利普·罗斯柴尔德男爵", x: ["埃里克·罗斯柴尔德男爵", "Jean-Michel Cazes", "Henri Martin"] },
    ],
  },
  bx_croizetbages: {
    fact: "名字结合了18世纪拥有这片土地的Croizet兄弟与Bages村。与Rauzan-Gassies由同一个Quié家族经营。",
    quiz: [
      { q: "与Château Croizet-Bages由同一家族经营的玛歌二级庄是？", a: "Château Rauzan-Gassies", x: ["Château Rauzan-Ségla", "Château Brane-Cantenac", "Château Lascombes"] },
    ],
  },
  bx_cantemerle: {
    fact: "名字可解读为“乌鸫（merle）在歌唱”。它在1855年分级表公布后才被补列进去，排在五级庄的最后。",
    quiz: [
      { q: "Château Cantemerle是以什么方式进入1855年分级的？", a: "名单公布后才被补列进去", x: ["从一级庄降级而来", "通过抽签选出", "在1973年复审中升入"] },
    ],
  },
  bx_lepin: {
    fact: "1979年由比利时Thienpont家族推出首个年份的一小块葡萄园。名字来自旁边的一棵松树。",
    quiz: [
      { q: "Le Pin这个名字来自什么？", a: "葡萄园旁的一棵松树", x: ["创始人的名字", "古老的修道院", "小石桥"] },
      { q: "拥有Le Pin的Thienpont家族来自哪个国家？", a: "比利时", x: ["荷兰", "瑞士", "卢森堡"] },
    ],
  },
  bx_lafleur: {
    fact: "与Pétrus相邻的小葡萄园，Guinaudeau家族像打理家庭农场一样经营它。以波美侯而言，品丽珠比例较高。",
    quiz: [
      { q: "打理Château Lafleur的家族是？", a: "Guinaudeau家族", x: ["Moueix家族", "Thienpont家族", "Durantou家族"] },
    ],
  },
  bx_vcc: {
    fact: "1924年被比利时Thienpont家族买下的波美侯名庄。在波美侯少见地以较高比例的品丽珠和赤霞珠著称。",
    quiz: [
      { q: "1924年买下Vieux Château Certan的家族是？", a: "Thienpont家族", x: ["Moueix家族", "Guinaudeau家族", "Nicolas家族"] },
    ],
  },
  bx_levangile: {
    fact: "位于Pétrus与Cheval Blanc之间的波美侯酒庄。1990年Lafite的罗斯柴尔德家族购入股份并负责经营。",
    quiz: [
      { q: "Château L'Évangile中的“Évangile”是什么意思？", a: "福音书", x: ["天使", "教堂", "朝圣者"] },
    ],
  },
  bx_laconseillante: {
    fact: "名字来自18世纪的女庄主Catherine Conseillan。自1871年起由Nicolas家族守护，紫色瓶帽与紫色酒标文字是它的标志。",
    quiz: [
      { q: "Château La Conseillante瓶帽的代表色是？", a: "紫色", x: ["金色", "黑色", "白色"] },
    ],
  },
  bx_trotanoy: {
    fact: "据说名字来自“太累人了”（trop ennuie）一语，意思是这里坚硬的土壤耕作起来非常辛苦。1953年由Jean-Pierre Moueix买下。",
    quiz: [
      { q: "1953年买下Château Trotanoy的酒商是？", a: "Jean-Pierre Moueix", x: ["Dourthe", "Cordier", "Baron Philippe de Rothschild"] },
    ],
  },
  bx_egliseclinet: {
    fact: "名字来自波美侯教堂旁的葡萄园。自1983年起由Denis Durantou掌管，将它提升为顶级波美侯。",
    quiz: [
      { q: "Château L'Église-Clinet名字中的“Église”是什么意思？", a: "教堂", x: ["城堡要塞", "水井", "广场"] },
    ],
  },
  bx_clinet: {
    fact: "1998年被Laborde家族买下、由儿子Ronan Laborde掌管的波美侯酒庄。在梅洛中混入赤霞珠。",
    quiz: [
      { q: "掌管Château Clinet的家族是？", a: "Laborde家族", x: ["Durantou家族", "Nicolas家族", "Thienpont家族"] },
    ],
  },
  bx_gazin: {
    fact: "中世纪时是耶路撒冷圣约翰骑士团（医院骑士团）的领地，酒标上仍保留着骑士团的十字。世代归Bailliencourt家族所有。",
    quiz: [
      { q: "Château Gazin酒标上的十字代表的旧主人是？", a: "圣约翰骑士团（医院骑士团）", x: ["罗马教廷", "波尔多大主教", "英格兰王室"] },
    ],
  },
  bx_nenin: {
    fact: "1997年被Léoville Las Cases的Delon家族买下并重新打理的波美侯酒庄。",
    quiz: [
      { q: "1997年买下Château Nénin的家族是？", a: "Delon家族", x: ["Thienpont家族", "Moueix家族", "Laborde家族"] },
    ],
  },
  bx_bonpasteur: {
    fact: "世界级酿酒顾问Michel Rolland的家族世代经营的波美侯酒庄。名字意为“好牧人”。",
    quiz: [
      { q: "与Château Le Bon Pasteur渊源深厚的酿酒顾问是？", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  bx_lafleurpetrus: {
    fact: "位于相邻的Lafleur与Pétrus之间，因此合用了两者的名字。归Jean-Pierre Moueix家族所有。",
    quiz: [
      { q: "拥有Château La Fleur-Pétrus的酒商是？", a: "Jean-Pierre Moueix", x: ["Thienpont家族", "Guinaudeau家族", "Domaine Clarence Dillon"] },
    ],
  },
  bx_ausone: {
    fact: "以4世纪罗马诗人奥索尼乌斯（Ausonius）命名的圣埃美隆名庄。在2022年分级修订前，与Cheval Blanc一起主动退出了评级。",
    quiz: [
      { q: "Château Ausone的名字来自谁？", a: "罗马诗人奥索尼乌斯", x: ["罗马皇帝哈德良", "圣人埃米利安", "查理曼大帝"] },
      { q: "掌管Château Ausone的家族是？", a: "Vauthier家族", x: ["Moueix家族", "de Boüard家族", "Manoncourt家族"] },
    ],
  },
  bx_angelus: {
    fact: "据说在葡萄园里能听到三座教堂敲响的三钟经（Angélus）钟声，名字由此而来，酒标上也画着金色的钟。2012年跻身最高等级“A”。",
    quiz: [
      { q: "Château Angélus酒标的象征是？", a: "钟", x: ["天使", "钥匙", "百合"] },
      { q: "与Château Angélus一起在2012年升入圣埃美隆最高等级“A”的酒庄是？", a: "Château Pavie", x: ["Château Figeac", "Château Canon", "Château Troplong Mondot"] },
    ],
  },
  bx_pavie: {
    fact: "1998年Gérard Perse买下后大举投资，2012年与Angélus一起升入圣埃美隆最高等级“A”。",
    quiz: [
      { q: "1998年买下Château Pavie的人物是？", a: "Gérard Perse", x: ["Hubert de Boüard", "Alain Vauthier", "Bernard Magrez"] },
    ],
  },
  bx_figeac: {
    fact: "在圣埃美隆少见地以赤霞珠和品丽珠两个品种合计超过一半。相邻的Cheval Blanc是19世纪从Figeac庄园分出去的土地。",
    quiz: [
      { q: "19世纪从Château Figeac庄园分出一部分而诞生的著名酒庄是？", a: "Château Cheval Blanc", x: ["Château Ausone", "Château Angélus", "Château Pavie"] },
      { q: "Château Figeac升入圣埃美隆最高等级“A”是在哪一年？", a: "2022年", x: ["2012年", "1996年", "2006年"] },
    ],
  },
  bx_canon: {
    fact: "以18世纪庄主Jacques Kanon命名的圣埃美隆一级特等酒庄（Premier Grand Cru Classé）。1996年被拥有香奈儿的Wertheimer家族买下。",
    quiz: [
      { q: "同时拥有Château Canon与玛歌Rauzan-Ségla的是？", a: "Chanel（Wertheimer家族）", x: ["LVMH", "AXA Millésimes", "Louis Roederer"] },
    ],
  },
  bx_belairmonange: {
    fact: "2008年Moueix家族买下昔日的Château Bélair，为纪念家族中的Anne-Adèle Monange而改名。2012年并入了相邻的Château Magdelaine。",
    quiz: [
      { q: "2012年并入Château Bélair-Monange的Moueix家族酒庄是？", a: "Château Magdelaine", x: ["Château Canon", "Château Troplong Mondot", "Clos Fourtet"] },
    ],
  },
  bx_troplongmondot: {
    fact: "坐落在圣埃美隆数一数二高的石灰岩山丘上。2006年升为一级特等酒庄，2017年被再保险公司SCOR买下。",
    quiz: [
      { q: "2017年买下Château Troplong Mondot的是？", a: "再保险公司SCOR", x: ["AXA Millésimes", "Chanel", "三得利"] },
    ],
  },
  bx_valandraud: {
    fact: "Jean-Luc Thunevin与Murielle Andraud夫妇在小仓库里开始酿造，是“车库酒”的鼻祖。1991年推出首个年份，2012年升为一级特等酒庄。",
    quiz: [
      { q: "像Château Valandraud这样在小仓库里少量酿造、在1990年代掀起旋风的葡萄酒被称为？", a: "车库酒", x: ["自然酒", "超级托斯卡纳", "橙酒"] },
      { q: "创立Château Valandraud的人是？", a: "Jean-Luc Thunevin", x: ["Gérard Perse", "Michel Rolland", "Hubert de Boüard"] },
    ],
  },
  bx_lamondotte: {
    fact: "1996年，von Neipperg伯爵家族的一小块葡萄园推出了首个年份。在2012年分级修订中直接升为一级特等酒庄。",
    quiz: [
      { q: "拥有La Mondotte的家族是？", a: "von Neipperg家族", x: ["Vauthier家族", "Moueix家族", "Bécot家族"] },
    ],
  },
  bx_tertreroteboeuf: {
    fact: "意为“牛儿打嗝的山丘”，因坡度陡峭、耕地的牛累得直喘而得名。虽未列级，售价却跻身最顶级。",
    quiz: [
      { q: "Château Tertre Rôteboeuf名字的意思是？", a: "牛儿打嗝的山丘", x: ["烤牛肉之丘", "红色公牛的原野", "农夫歇脚的山坡"] },
    ],
  },
  bx_beausejourbecot: {
    fact: "1980年代分级修订时，因并入了未列级的地块而遭降级，1996年重获一级特等酒庄资格。由Bécot家族经营。",
    quiz: [
      { q: "Château Beau-Séjour Bécot在1980年代被降级、1996年重获的等级是？", a: "一级特等酒庄（Premier Grand Cru Classé）", x: ["中级庄（Cru Bourgeois）", "格拉夫列级酒庄", "1855年二级庄"] },
    ],
  },
  bx_closfourtet: {
    fact: "就在圣埃美隆镇城墙正前方，地下挖有由石灰岩采石场改成的酒窖。2001年被Cuvelier家族买下。",
    quiz: [
      { q: "2001年买下Clos Fourtet的家族是？", a: "Cuvelier家族", x: ["Lurton家族", "Bécot家族", "Perse家族"] },
    ],
  },
  bx_larcisducasse: {
    fact: "出自与Pavie相邻、朝南山坡上的梯田葡萄园。在2012年分级修订中升为一级特等酒庄。",
    quiz: [
      { q: "Château Larcis Ducasse升为一级特等酒庄是在哪一年？", a: "2012年", x: ["1996年", "2006年", "1955年"] },
    ],
  },
  bx_paviemacquin: {
    fact: "以在根瘤蚜灾害后把美国砧木嫁接法推广到圣埃美隆的Albert Macquin命名。2006年升为一级特等酒庄。",
    quiz: [
      { q: "为Château Pavie Macquin留下名字的Albert Macquin有何功绩？", a: "在根瘤蚜灾害后推广美国砧木嫁接", x: ["发明了波尔多液", "制定了1855年分级表", "首创在酒庄装瓶"] },
    ],
  },
  bx_canonlagaffeliere: {
    fact: "自1971年起归von Neipperg伯爵家族所有的圣埃美隆酒庄。2012年升为一级特等酒庄。",
    quiz: [
      { q: "同时拥有Château Canon-la-Gaffelière和La Mondotte的家族是？", a: "von Neipperg家族", x: ["Wertheimer家族", "Moueix家族", "Vauthier家族"] },
    ],
  },
  bx_missionhautbrion: {
    fact: "名字来自17世纪耕作这片土地的遣使会（拉匝禄会）神父。1983年被拥有马路对面Haut-Brion的Dillon家族买下。",
    quiz: [
      { q: "1983年买下Château La Mission Haut-Brion的是？", a: "Domaine Clarence Dillon", x: ["Bernard Magrez", "Cathiard家族", "Louis Roederer"] },
      { q: "Château La Mission Haut-Brion中的“Mission”指的是？", a: "昔日传教会的神父", x: ["军事远征队", "外交使团", "探险队"] },
    ],
  },
  bx_papeclement: {
    fact: "1305年成为教皇克雷芒五世的波尔多大主教Bertrand de Goth曾拥有的葡萄园。如今由Bernard Magrez经营。",
    quiz: [
      { q: "为Château Pape Clément留下名字的教皇克雷芒五世把教廷迁到了哪里？", a: "阿维尼翁", x: ["波尔多", "里昂", "兰斯"] },
    ],
  },
  bx_smithhautlafitte: {
    fact: "保留着18世纪苏格兰商人George Smith的名字。1990年被滑雪运动员出身的Cathiard夫妇买下，他们的女儿创立了葡萄护肤品牌欧缇丽（Caudalie）。",
    quiz: [
      { q: "Château Smith Haut Lafitte的Cathiard家女儿创立的化妆品牌是？", a: "欧缇丽（Caudalie）", x: ["欧舒丹（L'Occitane）", "欧树（Nuxe）", "碧欧泉（Biotherm）"] },
      { q: "1990年买下Château Smith Haut Lafitte的Cathiard夫妇之前的职业是？", a: "滑雪运动员", x: ["帆船运动员", "自行车运动员", "网球运动员"] },
    ],
  },
  bx_chevalier: {
    fact: "坐落在松林空地中的佩萨克-雷奥良名庄，红、白葡萄酒都入选了格拉夫列级。自1983年起由Bernard家族经营。",
    quiz: [
      { q: "Domaine de Chevalier入选格拉夫列级的是哪种酒？", a: "红葡萄酒和白葡萄酒都入选", x: ["只有红葡萄酒", "只有白葡萄酒", "只有甜酒"] },
    ],
  },
  bx_hautbailly: {
    fact: "1998年被美国银行家Robert Wilmers买下。这里守护着一片多个品种混种、树龄超过100年的老藤葡萄园。",
    quiz: [
      { q: "1998年买下Château Haut-Bailly的Robert Wilmers是哪国人？", a: "美国", x: ["英国", "比利时", "中国香港"] },
    ],
  },
  bx_malartic: {
    fact: "以18世纪海军上将马拉尔蒂克伯爵的家族命名，酒标上画着一艘帆船。1997年被比利时的Bonnie家族买下。",
    quiz: [
      { q: "1997年买下Château Malartic-Lagravière的Bonnie家族来自哪个国家？", a: "比利时", x: ["荷兰", "瑞士", "美国"] },
    ],
  },
  bx_carbonnieux: {
    fact: "相传昔日的本笃会修士把白葡萄酒当作“Carbonnieux矿泉水”，卖给禁酒的奥斯曼苏丹，这则轶事十分有名。",
    quiz: [
      { q: "相传Château Carbonnieux的修士向奥斯曼苏丹卖酒时用的名字是？", a: "Carbonnieux矿泉水", x: ["Carbonnieux圣水", "Carbonnieux草药茶", "Carbonnieux葡萄汁"] },
    ],
  },
  bx_lescarmes: {
    fact: "昔日加尔默罗会修士的葡萄园留在了名字里。2010年Patrice Pichet买下后，建造了由菲利普·斯塔克设计的船形酒窖。",
    quiz: [
      { q: "设计Château Les Carmes Haut-Brion新酒窖的设计师是？", a: "菲利普·斯塔克", x: ["让·努维尔", "弗兰克·盖里", "安藤忠雄"] },
    ],
  },
  bx_suduiraut: {
    fact: "与Yquem相邻的苏玳一级庄。相传花园由设计凡尔赛宫花园的勒诺特尔设计，自1992年起归AXA Millésimes所有。",
    quiz: [
      { q: "自1992年起拥有Château Suduiraut的是？", a: "AXA Millésimes", x: ["LVMH", "Domaines Barons de Rothschild", "Domaine Clarence Dillon"] },
    ],
  },
  bx_rieussec: {
    fact: "1984年被Lafite的罗斯柴尔德家族买下的苏玳一级庄，位于与Yquem相邻的法尔格村。",
    quiz: [
      { q: "1984年买下Château Rieussec的是？", a: "Lafite Rothschild的罗斯柴尔德家族", x: ["AXA Millésimes", "Mouton Rothschild的罗斯柴尔德家族", "LVMH"] },
    ],
  },
  bx_climens: {
    fact: "被称为“巴萨克之王”的一级庄。以100%赛美蓉酿造，并采用生物动力法种植。",
    quiz: [
      { q: "Château Climens的绰号是？", a: "巴萨克之王", x: ["苏玳女王", "梅多克的凡尔赛宫", "穷人的Yquem"] },
    ],
  },
  bx_coutet: {
    fact: "保留着中世纪要塞建筑的巴萨克一级庄。以只在杰出年份少量酿造的“Cuvée Madame”闻名。",
    quiz: [
      { q: "Château Coutet只在杰出年份少量酿造的特别酒款是？", a: "Cuvée Madame", x: ["Cuvée Louise", "Réserve du Général", "Cuvée Prestige"] },
    ],
  },
  bx_guiraud: {
    fact: "获得有机认证的苏玳一级庄。2006年由标致家族的Robert Peugeot与Domaine de Chevalier的Olivier Bernard等人共同买下。",
    quiz: [
      { q: "参与2006年收购Château Guiraud的汽车家族是？", a: "标致家族", x: ["雷诺家族", "雪铁龙家族", "米其林家族"] },
    ],
  },
  bx_latourblanche: {
    fact: "1907年，庄主Daniel Iffla Osiris以兴办葡萄种植与酿酒学校为条件，将它捐给了国家。如今仍由农业部下属的学校经营。",
    quiz: [
      { q: "Château La Tour Blanche的所有者是？", a: "法国国家（农业部）", x: ["波尔多大学", "波尔多市", "苏玳生产者合作社"] },
    ],
  },
  bx_lafauriepeyraguey: {
    fact: "2014年被水晶品牌莱俪（Lalique）的董事长Silvio Denz买下，并在酒庄内开设了莱俪酒店和餐厅。",
    quiz: [
      { q: "与Château Lafaurie-Peyraguey携手的水晶品牌是？", a: "莱俪（Lalique）", x: ["巴卡拉（Baccarat）", "施华洛世奇（Swarovski）", "醴铎（Riedel）"] },
    ],
  },
  bx_fargues: {
    fact: "曾长期拥有Yquem的Lur Saluces家族自15世纪起守护的庄园。虽未列级，却被视为可与Yquem比肩的苏玳。",
    quiz: [
      { q: "拥有Château de Fargues的Lur Saluces家族曾长期拥有的苏玳超一级庄是？", a: "Château d'Yquem", x: ["Château Suduiraut", "Château Climens", "Château Rieussec"] },
    ],
  },
  bx_sociandomallet: {
    fact: "1969年酒商Jean Gautreau将其买下，打造成不输列级酒庄的葡萄酒。它不参加中级庄评选，仅凭名字就能畅销。",
    quiz: [
      { q: "1969年买下并打造了Château Sociando-Mallet的人物是？", a: "Jean Gautreau", x: ["Henri Martin", "Jean-Michel Cazes", "Alexis Lichine"] },
    ],
  },
  bx_chassespleen: {
    fact: "意为“驱走忧郁（spleen）”，相传是拜伦或波德莱尔起的名字。被视为中级庄的代表。",
    quiz: [
      { q: "Château Chasse-Spleen名字的意思是？", a: "驱走忧郁", x: ["猎人的休憩", "闪耀的山丘", "挡风的树林"] },
    ],
  },
  bx_gloria: {
    fact: "圣朱利安镇长Henri Martin自1940年代起，从邻近的列级酒庄一块块买下地块建成。虽未列级，却享有不输列级酒庄的待遇。",
    quiz: [
      { q: "创立Château Gloria的人是？", a: "Henri Martin", x: ["Jean Gautreau", "Alexis Lichine", "Philippe de Rothschild"] },
    ],
  },
  bx_phelansegur: {
    fact: "由19世纪的爱尔兰人Bernard Phelan开创的圣埃斯泰夫庄园。虽不在列级之内，却被评为列级名庄的水准。",
    quiz: [
      { q: "为Château Phélan Ségur留下名字的Bernard Phelan来自哪里？", a: "爱尔兰", x: ["苏格兰", "英格兰", "荷兰"] },
    ],
  },
  bx_potensac: {
    fact: "由Léoville Las Cases的Delon家族经营的梅多克北部酒庄，以性价比出色而闻名。",
    quiz: [
      { q: "经营Château Potensac的家族是？", a: "Delon家族", x: ["Cazes家族", "Borie家族", "Cuvelier家族"] },
    ],
  },
  bx_poujeaux: {
    fact: "穆利斯（Moulis）的代表性酒庄，2008年被拥有圣埃美隆Clos Fourtet的Cuvelier家族买下。",
    quiz: [
      { q: "同时拥有Château Poujeaux和圣埃美隆Clos Fourtet的家族是？", a: "Cuvelier家族", x: ["Lurton家族", "Delon家族", "Moueix家族"] },
    ],
  },
  bx_clarke: {
    fact: "1973年被埃德蒙·罗斯柴尔德男爵买下并重新种植葡萄园的里斯特拉克酒庄。",
    quiz: [
      { q: "1973年买下Château Clarke的人物是？", a: "埃德蒙·罗斯柴尔德", x: ["菲利普·罗斯柴尔德", "埃里克·罗斯柴尔德", "克拉伦斯·狄龙"] },
    ],
  },
  bx_depez: {
    fact: "1995年被香槟酒庄Louis Roederer买下的圣埃斯泰夫酒庄。Roederer后来还买下了Pichon Comtesse。",
    quiz: [
      { q: "1995年买下Château de Pez的香槟酒庄是？", a: "Louis Roederer", x: ["Bollinger", "Veuve Clicquot", "Pol Roger"] },
    ],
  },
  bx_angludet: {
    fact: "1961年被Sichel家族买下的玛歌酒庄。这个家族也是三级庄Château Palmer的共同所有者。",
    quiz: [
      { q: "经营Château d'Angludet的Sichel家族共同拥有的三级庄是？", a: "Château Palmer", x: ["Château Giscours", "Château Kirwan", "Château d'Issan"] },
    ],
  },
  bx_ormesdepez: {
    fact: "拥有Lynch-Bages的Cazes家族自1940年起经营的圣埃斯泰夫酒庄。",
    quiz: [
      { q: "经营Château Ormes de Pez的家族是？", a: "Cazes家族", x: ["Delon家族", "Tesseron家族", "Borie家族"] },
    ],
  },
  bx_carruades: {
    fact: "Lafite Rothschild的副牌酒。名字来自并入Lafite庄园的“Carruades”山丘上的葡萄园。",
    quiz: [
      { q: "2000年代后期推高Carruades de Lafite价格的需求主要来自哪个国家？", a: "中国", x: ["日本", "俄罗斯", "印度"] },
    ],
  },
  bx_pavillonrouge: {
    fact: "Château Margaux的副牌酒，1908年首次以“Pavillon Rouge”之名推出。",
    quiz: [
      { q: "与Pavillon Rouge du Château Margaux配对的Château Margaux白葡萄酒是？", a: "Pavillon Blanc", x: ["Aile d'Argent", "Caillou Blanc", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_fortsdelatour: {
    fact: "Château Latour的副牌酒，首个年份为1966年。与Latour一样，要充分陈年后才上市。",
    quiz: [
      { q: "Les Forts de Latour的首个年份是？", a: "1966年", x: ["1945年", "1982年", "1990年"] },
    ],
  },
  bx_petitmouton: {
    fact: "Mouton Rothschild的副牌酒，1990年代首次推出。同一酒庄的白葡萄酒是“Aile d'Argent”。",
    quiz: [
      { q: "酿造Le Petit Mouton的酒庄出产的白葡萄酒是？", a: "Aile d'Argent", x: ["Pavillon Blanc", "Caillou Blanc", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_clarence: {
    fact: "为纪念1935年买下Haut-Brion的美国银行家克拉伦斯·狄龙，这款副牌酒于2007年由“Bahans Haut-Brion”改为现名。",
    quiz: [
      { q: "Le Clarence de Haut-Brion以前的名字是？", a: "Bahans Haut-Brion", x: ["La Chapelle de la Mission", "Carruades de Haut-Brion", "Pavillon de Haut-Brion"] },
      { q: "Le Clarence de Haut-Brion纪念的人物是？", a: "美国银行家克拉伦斯·狄龙", x: ["教皇克雷芒五世", "英国国王查理二世", "拿破仑三世"] },
    ],
  },
  bx_alterego: {
    fact: "1998年取代原先的副牌酒“Réserve du Général”推出。正如其名，它作为Palmer的“另一个自我”单独酿造。",
    quiz: [
      { q: "在Alter Ego de Palmer推出之前，Château Palmer的副牌酒叫什么？", a: "Réserve du Général", x: ["Pavillon Rouge", "Les Forts", "Clos du Marquis"] },
    ],
  },
  bx_petitcheval: {
    fact: "Cheval Blanc的副牌酒，1988年首次亮相。",
    quiz: [
      { q: "1998年买下酿造Le Petit Cheval的Château Cheval Blanc的是？", a: "贝尔纳·阿尔诺与阿尔贝·弗雷尔", x: ["弗朗索瓦·皮诺", "Wertheimer兄弟", "Bouygues兄弟"] },
    ],
  },
  bx_closdumarquis: {
    fact: "长期被视为Léoville Las Cases的副牌酒，但自2007年起改为出自独立地块的独立酒款。",
    quiz: [
      { q: "自2007年起取代Clos du Marquis、成为Léoville Las Cases副牌酒的是？", a: "Le Petit Lion du Marquis de Las Cases", x: ["Les Forts de Latour", "Réserve de la Comtesse", "La Croix de Beaucaillou"] },
    ],
  },
  bx_pagodesdecos: {
    fact: "Cos d'Estournel的副牌酒，名字取自酒窖屋顶上的东方风格塔楼（宝塔）。",
    quiz: [
      { q: "Les Pagodes de Cos的名字来自什么？", a: "酒窖屋顶上的东方风格塔楼", x: ["创始人的印度游记", "葡萄园里的松树", "村里教堂的钟楼"] },
    ],
  },
  bx_carillonangelus: {
    fact: "Angélus的副牌酒。“Carillon”是敲响多口钟的乐器（排钟），与以钟为象征的Angélus一脉相承。",
    quiz: [
      { q: "Carillon d'Angélus名字中的“Carillon”是什么意思？", a: "敲响多口钟的乐器", x: ["小葡萄园", "牧羊人的笛子", "修道院花园"] },
    ],
  },
  bx_pavillonblanc: {
    fact: "玛歌产区只认可红葡萄酒，因此Château Margaux的白葡萄酒以“AOC Bordeaux”出品。以100%长相思酿造。",
    quiz: [
      { q: "Pavillon Blanc du Château Margaux不能标注“Margaux”产区的原因是？", a: "玛歌AOC只认可红葡萄酒", x: ["因为它是副牌酒", "因为不使用橡木桶", "因为用外购葡萄酿造"] },
    ],
  },
  bx_moutoncadet: {
    fact: "1930年因收成不佳，无法以Mouton Rothschild之名推出的酒被菲利普·罗斯柴尔德男爵另行出售，由此诞生。“Cadet”意为幼子，指的正是身为家中幼子的菲利普。",
    quiz: [
      { q: "Mouton Cadet中的“Cadet”是什么意思？", a: "幼子", x: ["长子", "骑士", "小羊"] },
    ],
  },
  bx_montperat: {
    fact: "在漫画《神之水滴》中被比作皇后乐队的音乐，因此在韩国和日本大受欢迎的波尔多红葡萄酒。",
    quiz: [
      { q: "在漫画《神之水滴》中，Château Mont-Pérat被比作哪支摇滚乐队？", a: "皇后乐队", x: ["披头士乐队", "滚石乐队", "齐柏林飞艇"] },
    ],
  },
};

export default T;
