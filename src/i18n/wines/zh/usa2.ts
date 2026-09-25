import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  us2_slwc_artemis: {
    fact: "Stag's Leap Wine Cellars混合多块葡萄园葡萄酿造的纳帕谷赤霞珠。名字取自希腊神话中的狩猎女神。",
    quiz: [
      { q: "酿造Artemis的酒庄名中的“Stags Leap”源自什么传说？", a: "被猎人追赶的雄鹿跃过了悬崖峭壁", x: ["鹿群渡河迁徙", "原住民酋长化身为鹿", "金矿中挖出了巨大的鹿角"] },
    ],
  },
  us2_slwc_fay: {
    fact: "出自紧邻S.L.V.的葡萄园的赤霞珠。创始人Warren Winiarski尝过这块园主人酿的酒后，买下了隔壁的土地。",
    quiz: [
      { q: "为Fay Vineyard留下名字的Nathan Fay于1961年在鹿跃区首次做了什么？", a: "首次种下赤霞珠", x: ["举办首场葡萄酒拍卖", "开凿首个洞穴酒窖", "酿造首款起泡酒"] },
    ],
  },
  us2_stagsleap_winery_ps: {
    fact: "1893年推出首个年份的鹿跃区古老庄园，至今保留着石砌宅邸“Manor House”。很早就以小西拉闻名。",
    quiz: [
      { q: "Stags' Leap Winery与Stag's Leap Wine Cellars在诉讼之后是如何区分名称的？", a: "撇号（'）的位置不同", x: ["一方在名称前加上了“Napa”", "一方改成了法语名", "一方去掉了“Winery”一词"] },
    ],
  },
  us2_chimney_rock: {
    fact: "在鹿跃区将一座旧高尔夫球场的一半翻耕后种下葡萄的酒庄。建筑中融入了长期在南非经商的创始人Hack Wilson的品味。",
    quiz: [
      { q: "Chimney Rock酒庄的白色建筑是什么建筑风格？", a: "南非开普荷兰式", x: ["西班牙传教会式", "托斯卡纳别墅式", "英国都铎式"] },
    ],
  },
  us2_clos_du_val: {
    fact: "法国人Bernard Portet与美国企业家John Goelet于1970年代初在鹿跃区创立。1972年份参加了“巴黎审判”。",
    quiz: [
      { q: "创立Clos Du Val的Bernard Portet的父亲曾担任技术主管的波尔多酒庄是？", a: "Château Lafite Rothschild", x: ["Château Margaux", "Château Latour", "Château Haut-Brion"] },
      { q: "Clos Du Val 1972年份赤霞珠在1986年“巴黎审判”十周年重赛中的成绩是？", a: "第1名", x: ["第2名", "第5名", "最后一名"] },
    ],
  },
  us2_cliff_lede: {
    fact: "加拿大建筑企业家Cliff Lede于2002年在鹿跃区买下葡萄园创立的酒庄。",
    quiz: [
      { q: "Cliff Lede为每个葡萄园地块取了什么样的名字？", a: "经典摇滚名曲与专辑名", x: ["希腊众神的名字", "家人的名字", "星座名"] },
    ],
  },
  us2_silverado: {
    fact: "1970年代在Silverado Trail旁的鹿跃区山丘买下葡萄园、1981年开始酿酒的酒庄。",
    quiz: [
      { q: "创立Silverado Vineyards的家族是？", a: "华特·迪士尼的家人", x: ["科波拉家族", "盖蒂家族", "肯尼迪家族"] },
    ],
  },
  us2_shafer_rsr: {
    fact: "鹿跃区的Shafer Vineyards在凉爽的卡内罗斯葡萄园酿造的霞多丽，以丰盈又清爽的口感闻名。",
    quiz: [
      { q: "Red Shoulder Ranch这个名字来自什么？", a: "生活在葡萄园里的赤肩鵟（一种鹰）", x: ["露出红土的山丘", "创始人珍爱的红马", "老牧场主的绰号"] },
    ],
  },
  us2_farniente_cab: {
    fact: "复兴了因禁酒令而荒废的奥克维尔石砌酒庄的Far Niente的招牌红葡萄酒，以奥克维尔庄园的葡萄酿造。",
    quiz: [
      { q: "1885年创立Far Niente的淘金热拓荒者John Benson，他那位著名的美国画家侄子是？", a: "温斯洛·霍默", x: ["爱德华·霍珀", "诺曼·洛克威尔", "安德鲁·怀斯"] },
    ],
  },
  us2_nickel_nickel: {
    fact: "Gil Nickel家族于1997年在奥克维尔创立的酒庄。Sullenger Vineyard是复原19世纪农舍而成的酒庄正后方的赤霞珠园。",
    quiz: [
      { q: "Nickel & Nickel对所有酒款坚持的原则是？", a: "只用单一葡萄园的单一品种酿造", x: ["混合多个产区的葡萄", "完全不用橡木桶", "只用螺旋盖"] },
      { q: "与Nickel & Nickel由同一家族经营的奥克维尔姊妹酒庄是？", a: "Far Niente", x: ["Silver Oak", "Caymus", "Duckhorn"] },
    ],
  },
  us2_plumpjack: {
    fact: "1995年在奥克维尔创立的酒庄。1997年份珍藏赤霞珠有一半用螺旋盖装瓶，点燃了高级葡萄酒瓶塞之争。",
    quiz: [
      { q: "共同创立PlumpJack、后来成为加州州长的人是？", a: "加文·纽森", x: ["阿诺德·施瓦辛格", "杰里·布朗", "格雷·戴维斯"] },
      { q: "PlumpJack是莎士比亚作品中哪个人物的绰号？", a: "福斯塔夫", x: ["哈姆雷特", "夏洛克", "李尔王"] },
    ],
  },
  us2_overture: {
    fact: "Opus One自1993年起酿造的副牌酒。长期以来都混合多个年份、不标年份推出。",
    quiz: [
      { q: "共同创立以Overture为副牌酒的酒庄的两个人是？", a: "罗伯特·蒙大维与菲利普·罗斯柴尔德男爵", x: ["罗伯特·蒙大维与Christian Moueix", "Bill Harlan与埃里克·罗斯柴尔德", "Jack Cakebread与André Tchelistcheff"] },
    ],
  },
  us2_harlan_maiden: {
    fact: "出自奥克维尔西侧山坡同一葡萄园的副牌酒，优先卖给邮购名单上的顾客。",
    quiz: [
      { q: "The Maiden是哪款酒的副牌酒？", a: "Harlan Estate", x: ["Dominus", "Opus One", "Screaming Eagle"] },
    ],
  },
  us2_promontory: {
    fact: "Bill Harlan家族在奥克维尔西侧偏僻山中的土地上酿造的赤霞珠。四周林木与岩石环绕的崎岖地形是其特点。",
    quiz: [
      { q: "酿造Promontory的家族此前创立的代表性膜拜酒是？", a: "Harlan Estate", x: ["Screaming Eagle", "Colgin", "Dominus"] },
    ],
  },
  us2_groth_reserve: {
    fact: "曾任游戏公司雅达利（Atari）高管的Dennis Groth夫妇于1981年在奥克维尔买下葡萄园创立的酒庄的顶级赤霞珠。",
    quiz: [
      { q: "Groth 1985年份珍藏赤霞珠创下的纪录是？", a: "第一款获得Robert Parker 100分的加州葡萄酒", x: ["第一款被带上太空的葡萄酒", "拍卖价最高的美国葡萄酒", "第一款使用螺旋盖的高级葡萄酒"] },
    ],
  },
  us2_napanook: {
    fact: "以扬特维尔历史悠久的葡萄园命名的副牌酒，由出身波尔多波美侯名门的Moueix家族酿造。",
    quiz: [
      { q: "Napanook是哪款酒的副牌酒？", a: "Dominus", x: ["Opus One", "Harlan Estate", "Insignia"] },
    ],
  },
  us2_frogs_leap_sb: {
    fact: "1981年由John Williams与Larry Turley创立的酒庄，坚持不灌溉的旱作法与有机种植。",
    quiz: [
      { q: "Frog's Leap这个名字调皮地模仿的是哪家纳帕酒庄？", a: "Stag's Leap Wine Cellars", x: ["Harlan Estate", "Far Niente", "Chateau Montelena"] },
      { q: "Frog's Leap最初酿酒的地方原本是什么？", a: "养青蛙的农场", x: ["邮局", "火车站", "修道院"] },
    ],
  },
  us2_mondavi_fume: {
    fact: "1968年，罗伯特·蒙大维将经橡木桶陈酿的干型长相思以“Fumé Blanc”这个新名字推出。",
    quiz: [
      { q: "罗伯特·蒙大维在取“Fumé Blanc”这个名字时模仿的法国葡萄酒是？", a: "普伊-富美（Pouilly-Fumé）", x: ["桑塞尔（Sancerre）", "密斯卡岱（Muscadet）", "夏布利（Chablis）"] },
    ],
  },
  us2_mondavi_private: {
    fact: "冠以罗伯特·蒙大维之名的加州日常葡萄酒品牌，以多个产区的葡萄酿造价格亲民的酒。",
    quiz: [
      { q: "1966年罗伯特·蒙大维在哪里创立了禁酒令之后纳帕的第一家大型酒庄？", a: "奥克维尔", x: ["卡利斯托加", "扬特维尔", "卡内罗斯"] },
    ],
  },
  us2_trefethen_chard: {
    fact: "Gene与Katie Trefethen夫妇于1968年在纳帕南部的橡树丘（Oak Knoll）创立的家族酒庄，使用19世纪建造的木结构酒厂建筑。",
    quiz: [
      { q: "Trefethen 1976年份霞多丽在1979年巴黎“葡萄酒奥林匹克”上获得的评价是？", a: "世界最佳霞多丽", x: ["最耐陈年的白葡萄酒", "最佳新锐酒庄", "最佳甜点酒"] },
    ],
  },
  us2_freemark_abbey: {
    fact: "源自1886年女性拓荒者Josephine Tychson所创酒庄的圣海伦娜名门。在“巴黎审判”中，红、白葡萄酒都入选参赛。",
    quiz: [
      { q: "Freemark Abbey这个名字是怎么来的？", a: "合并了买下酒庄的三位合伙人名字的各一部分", x: ["把古修道院建筑用作酒庄", "取自创始人故乡修道院的名字", "第一块葡萄园园主的名字"] },
    ],
  },
  us2_charles_krug: {
    fact: "1861年由普鲁士人Charles Krug创立的纳帕谷最古老的酒庄。禁酒令之后迎来新主人而重获新生。",
    quiz: [
      { q: "1943年买下Charles Krug并掌管至今的家族是？", a: "Mondavi家族", x: ["Gallo家族", "Beringer家族", "Martini家族"] },
      { q: "在Charles Krug与弟弟Peter争吵后离开、于1966年创立自己酒庄的人物是？", a: "罗伯特·蒙大维", x: ["Louis M. Martini", "Joe Heitz", "Warren Winiarski"] },
    ],
  },
  us2_louis_martini: {
    fact: "意大利人Louis M. Martini于禁酒令结束的1933年在圣海伦娜创立。也以索诺玛Monte Rosso葡萄园的赤霞珠闻名。",
    quiz: [
      { q: "2002年收购Louis M. Martini的美国最大葡萄酒公司是？", a: "E&J Gallo", x: ["Constellation Brands", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us2_abreu_madrona: {
    fact: "曾为纳帕多家膜拜酒庄打理葡萄园的David Abreu以自己名字酿造的酒。Madrona Ranch是圣海伦娜西侧山丘上的葡萄园。",
    quiz: [
      { q: "David Abreu在纳帕最先扬名的本业是？", a: "葡萄园管理与种植专家", x: ["葡萄酒评论家", "橡木桶制造商", "葡萄酒拍卖师"] },
    ],
  },
  us2_sterling: {
    fact: "英国人Peter Newton于1964年在卡利斯托加创立。山顶上矗立着酷似他曾居住的希腊米科诺斯岛风格的白色建筑。",
    quiz: [
      { q: "访客前往Sterling Vineyards山顶酒庄时乘坐的是？", a: "空中缆车", x: ["蒸汽火车", "热气球", "马车"] },
    ],
  },
  us2_clos_pegase: {
    fact: "艺术品收藏家Jan与Mitsuko Shrem夫妇在卡利斯托加创立的酒庄。建筑出自与旧金山现代艺术博物馆合办的设计竞赛。",
    quiz: [
      { q: "设计Clos Pegase酒庄建筑的后现代主义建筑师是？", a: "迈克尔·格雷夫斯", x: ["弗兰克·盖里", "菲利普·约翰逊", "伦佐·皮亚诺"] },
    ],
  },
  us2_castello_amorosa: {
    fact: "Dario Sattui经过长年施工，在卡利斯托加附近建成的13世纪托斯卡纳风格城堡中的酒庄。护城河、吊桥甚至刑讯室一应俱全。",
    quiz: [
      { q: "创立Castello di Amorosa的Dario Sattui家族此前经营的纳帕酒庄是？", a: "V. Sattui", x: ["Beringer", "Charles Krug", "Sterling Vineyards"] },
    ],
  },
  us2_schramsberg_jschram: {
    fact: "Schramsberg只挑选最佳原酒长期陈酿的顶级起泡酒。名字来自1862年在此开设酒庄的Jacob Schram。",
    quiz: [
      { q: "1880年造访Schramsberg并将这里的酒写成“装在瓶中的诗”的作家是？", a: "罗伯特·路易斯·史蒂文森", x: ["马克·吐温", "杰克·伦敦", "约翰·斯坦贝克"] },
    ],
  },
  us2_chappellet: {
    fact: "Don与Molly Chappellet夫妇于1967年在普里查德山（Pritchard Hill）山坡创立，是这座山丘上的第一家酒庄，以山地出产的坚实赤霞珠闻名。",
    quiz: [
      { q: "Chappellet酒庄建筑是什么形状？", a: "金字塔", x: ["圆顶", "巨大的橡木桶", "中世纪城堡"] },
    ],
  },
  us2_darioush: {
    fact: "伊朗出生的企业家Darioush Khaledi在纳帕创立的酒庄。仿古波斯宫殿的石柱建筑十分引人注目。",
    quiz: [
      { q: "Darioush酒庄建筑仿照的古代遗址是？", a: "波斯波利斯", x: ["帕特农神庙", "吴哥窟", "阿尔罕布拉宫"] },
    ],
  },
  us2_cain_five: {
    fact: "以春山（Spring Mountain）高处山坡梯田种植的波尔多品种调配而成的Cain Vineyard招牌酒。",
    quiz: [
      { q: "Cain Five中的“Five”代表什么？", a: "混合五个波尔多品种", x: ["五块葡萄园", "创始人的五个子女", "陈酿五年后上市"] },
    ],
  },
  us2_spring_mountain: {
    fact: "坐拥春山山坡旧宅邸“Miravalle”的酒庄。1973年份霞多丽在“巴黎审判”白葡萄酒组中位列第四。",
    quiz: [
      { q: "以Spring Mountain Vineyard的Miravalle宅邸为舞台的1980年代美国电视剧是？", a: "《鹰冠庄园》（Falcon Crest）", x: ["《达拉斯》", "《豪门恩怨》", "《双峰》"] },
    ],
  },
  us2_newton_unfiltered: {
    fact: "Peter与Su Hua Newton夫妇于1977年在春山创立的酒庄。正如其名，以不经过滤装瓶的霞多丽闻名。",
    quiz: [
      { q: "创立Newton Vineyard的Peter Newton在此之前于卡利斯托加创立的酒庄是？", a: "Sterling Vineyards", x: ["Chateau Montelena", "Schramsberg", "Clos Pegase"] },
      { q: "2020年严重损毁Newton Vineyard酒庄的是？", a: "山火（Glass Fire）", x: ["地震", "洪水", "根瘤蚜"] },
    ],
  },
  us2_pride_merlot: {
    fact: "Pride家族在马亚卡马斯山脉（Mayacamas）山顶的古老葡萄园上创立的酒庄。每款酒的酒标上都注明来自两个县的葡萄比例。",
    quiz: [
      { q: "穿过Pride Mountain Vineyards葡萄园和酒厂正中的是？", a: "纳帕县与索诺玛县的县界", x: ["旧铁轨", "圣安德烈亚斯断层", "太平洋海岸公路"] },
    ],
  },
  us2_mayacamas: {
    fact: "维德山高处建于19世纪末的石砌酒庄。需长期陈年才显真味的老派赤霞珠，1971年份曾参加“巴黎审判”。",
    quiz: [
      { q: "自1968年起掌管Mayacamas近45年的夫妇是？", a: "Bob与Elinor Travers", x: ["Jack与Dolores Cakebread", "Dan与Margaret Duckhorn", "Gene与Katie Trefethen"] },
    ],
  },
  us2_lokoya: {
    fact: "1995年创立，在纳帕的维德山、豪厄尔山、春山、钻石山四个山地产区分别酿造的山地赤霞珠。",
    quiz: [
      { q: "Lokoya这个名字来自什么？", a: "曾居住在维德山的原住民部落", x: ["西班牙传教士的名字", "一种火山岩", "创始人女儿的名字"] },
    ],
  },
  us2_cardinale: {
    fact: "混合纳帕各处山地与谷地的精选葡萄、在奥克维尔酒厂酿造的顶级赤霞珠调配酒。",
    quiz: [
      { q: "创立拥有Cardinale的Jackson Family Wines的人物是？", a: "杰斯·杰克逊", x: ["罗伯特·蒙大维", "欧内斯特·嘉露", "查克·瓦格纳"] },
    ],
  },
  us2_dunn_howell: {
    fact: "Randy Dunn于1970年代末在豪厄尔山（Howell Mountain）创立的小酒庄，以能陈年数十年的坚实山地赤霞珠闻名。",
    quiz: [
      { q: "Randy Dunn在创立自己的酒庄之前负责酿造的纳帕酒庄是？", a: "Caymus", x: ["Silver Oak", "Beringer", "Robert Mondavi"] },
    ],
  },
  us2_cade: {
    fact: "2005年在豪厄尔山山脊上创立的酒庄。在海拔400米以上的火山土产区酿造坚实的赤霞珠。",
    quiz: [
      { q: "创立CADE的葡萄酒集团此前在奥克维尔创立的酒庄是？", a: "PlumpJack", x: ["Far Niente", "Screaming Eagle", "Harlan Estate"] },
    ],
  },
  us2_conundrum: {
    fact: "Caymus的Chuck Wagner于1989年首次推出的白葡萄调配酒，混合霞多丽、长相思、麝香等多个品种。",
    quiz: [
      { q: "Conundrum这个名字的意思是？", a: "谜题", x: ["和谐", "金色", "冒险"] },
      { q: "首推Conundrum的家族掌管的纳帕酒庄是？", a: "Caymus", x: ["Silver Oak", "Duckhorn", "Beringer"] },
    ],
  },
  us2_decoy_cab: {
    fact: "Duckhorn Vineyards于1985年为了让人更轻松享用而推出的品牌，如今以索诺玛县的葡萄酿造柔顺的赤霞珠。",
    quiz: [
      { q: "Decoy这个名字的意思是？", a: "猎人为引诱野鸭而放在水上的木制鸭子模型", x: ["野鸭歇脚的池塘", "宣告清晨狩猎的号角", "猎人的小屋"] },
    ],
  },
  us2_mer_soleil: {
    fact: "Caymus的Wagner家族的Charlie Wagner在蒙特雷圣卢西亚高地（Santa Lucia Highlands）酿造的霞多丽。这是海风吹拂的凉爽产区。",
    quiz: [
      { q: "Mer Soleil在法语中是什么意思？", a: "大海与太阳", x: ["山与月", "风与雨", "黄金山丘"] },
    ],
  },
  us2_belle_glos: {
    fact: "Caymus的Wagner家族的Joe Wagner创立的黑皮诺。厚厚包裹瓶颈的红色蜡封是它的标志。",
    quiz: [
      { q: "Belle Glos这个名字来自谁？", a: "创始人的祖母Lorna Belle Glos Wagner", x: ["创始人的女儿", "第一块葡萄园的园主", "法国的故乡村庄"] },
      { q: "Belle Glos瓶颈上的红色蜡封是为了纪念什么？", a: "祖母每天都涂的红色口红", x: ["酒庄纹章的颜色", "黑皮诺果皮的颜色", "加州罂粟花"] },
    ],
  },
  us2_orin_8years: {
    fact: "Orin Swift的Dave Phinney酿造的以仙粉黛为主的调配酒，以强烈的照片酒标闻名。",
    quiz: [
      { q: "8 Years in the Desert（沙漠中的八年）这个名字指的是？", a: "卖掉The Prisoner后不能酿造仙粉黛的八年约定期", x: ["在沙漠洞穴中陈酿八年", "混合沙漠中八块葡萄园的葡萄", "创始人八年的沙漠之旅"] },
    ],
  },
  us2_mumm_napa: {
    fact: "法国香槟酒庄在纳帕谷创立的起泡酒酒庄，与香槟一样以瓶中二次发酵酿造。",
    quiz: [
      { q: "创立Mumm Napa的法国香槟酒庄是？", a: "G.H. Mumm", x: ["Moët & Chandon", "Taittinger", "Louis Roederer"] },
    ],
  },
  us2_domaine_carneros: {
    fact: "法国香槟酒庄于1987年在卡内罗斯山丘创立的起泡酒酒庄，以山丘上优雅的城堡建筑闻名。",
    quiz: [
      { q: "创立Domaine Carneros的香槟酒庄是？", a: "Taittinger", x: ["Moët & Chandon", "G.H. Mumm", "Louis Roederer"] },
      { q: "Domaine Carneros的城堡建筑仿照的香槟区城堡是？", a: "Château de la Marquetterie", x: ["Château de Chambord", "Château de Chenonceau", "Château de Versailles"] },
    ],
  },
  us2_goldeneye: {
    fact: "Duckhorn夫妇于1996年在门多西诺县安德森谷创立的黑皮诺酒庄。在海雾出没的凉爽山谷中种植葡萄。",
    quiz: [
      { q: "Goldeneye这个名字来自什么？", a: "一种野鸭（鹊鸭）", x: ["詹姆斯·邦德电影", "金黄成熟的葡萄粒", "创始夫妇的昵称"] },
    ],
  },
  us2_verite_lamuse: {
    fact: "以索诺玛山地葡萄酿造的波尔多式葡萄酒，共三款：以梅洛为主的“La Muse”、以赤霞珠为主的“La Joie”和以品丽珠为主的“Le Désir”。",
    quiz: [
      { q: "酿造Vérité的波尔多出身酿酒师是？", a: "Pierre Seillan", x: ["Michel Rolland", "Christian Moueix", "Bernard Portet"] },
    ],
  },
  us2_kenwood_jacklondon: {
    fact: "以小说家杰克·伦敦旧牧场里的熔岩梯田葡萄园的葡萄酿造。酒标上印着他当作藏书票使用的狼头图案。",
    quiz: [
      { q: "为Kenwood Jack London Vineyard提供名字的作家的代表作是？", a: "《野性的呼唤》", x: ["《愤怒的葡萄》", "《白鲸》", "《哈克贝利·费恩历险记》"] },
    ],
  },
  us2_paul_hobbs_rrv: {
    fact: "在Robert Mondavi与Opus One积累经验的Paul Hobbs于1991年在索诺玛创立的酒庄。他也以担任多国酒庄的顾问而闻名。",
    quiz: [
      { q: "Paul Hobbs在阿根廷门多萨参与创立的酒庄是？", a: "Viña Cobos", x: ["Catena Zapata", "Clos de los Siete", "Bodega Norton"] },
    ],
  },
  us2_peter_michael_bellecote: {
    fact: "英国电子与广播企业家Peter Michael爵士在奈茨谷（Knights Valley）山坡创立的酒庄，每款酒都取法语名字。",
    quiz: [
      { q: "Belle Côte在法语中是什么意思？", a: "美丽的山坡", x: ["美丽的女子", "蔚蓝海岸", "小城堡"] },
    ],
  },
  us2_marcassin: {
    fact: "酿酒顾问Helen Turley与丈夫John Wetlaufer在索诺玛海岸产区创立的小酒庄，是只通过邮购名单销售的膜拜霞多丽。",
    quiz: [
      { q: "Marcassin在法语中是什么意思？", a: "小野猪", x: ["小鹿", "野兔", "小狐狸"] },
    ],
  },
  us2_ridge_lytton: {
    fact: "出自干溪谷（Dry Creek Valley）百年以上老藤葡萄园的Ridge仙粉黛调配酒，与Geyserville并称Ridge仙粉黛的两大支柱。",
    quiz: [
      { q: "Ridge Vineyards酒标的独特之处是？", a: "列出酿造所用的全部原料", x: ["标注葡萄园的GPS坐标", "酿酒师在每瓶上签名", "记录采收当天的天气"] },
    ],
  },
  us2_rochioli: {
    fact: "在俄罗斯河谷世代务农的Rochioli家族的黑皮诺。这个家族的葡萄园被视为当地黑皮诺的瑰宝。",
    quiz: [
      { q: "靠采用Rochioli家族的葡萄建立早期声誉的俄罗斯河谷膜拜酒庄是？", a: "Williams Selyem", x: ["Kosta Browne", "Kistler", "La Crema"] },
    ],
  },
  us2_littorai: {
    fact: "Ted Lemon夫妇于1993年创立的海岸产区黑皮诺酒庄。名字源自拉丁语，意为“海岸们”。",
    quiz: [
      { q: "创立Littorai的Ted Lemon作为首位美国人担任酿酒总监的默尔索酒庄是？", a: "Domaine Guy Roulot", x: ["Domaine Leflaive", "Domaine des Comtes Lafon", "Domaine de la Romanée-Conti"] },
    ],
  },
  us2_flowers: {
    fact: "Walt与Joan Flowers夫妇在俯瞰太平洋的索诺玛海岸山脊上创立的黑皮诺与霞多丽酒庄。",
    quiz: [
      { q: "2009年与Flowers携手并接管经营的家族是？", a: "Huneeus家族（Quintessa）", x: ["Jackson家族", "Gallo家族", "Mondavi家族"] },
    ],
  },
  us2_merry_edwards: {
    fact: "加州第一代女酿酒师Merry Edwards于1997年创立的俄罗斯河谷黑皮诺酒庄。",
    quiz: [
      { q: "2019年收购Merry Edwards酒庄的香槟酒庄是？", a: "Louis Roederer", x: ["Moët & Chandon", "Taittinger", "Bollinger"] },
    ],
  },
  us2_sonoma_cutrer: {
    fact: "1981年首次推出的索诺玛海岸人气霞多丽，是美国餐厅酒单上的常客。",
    quiz: [
      { q: "Sonoma-Cutrer酒庄曾建有比赛用场地、甚至举办过世界锦标赛的运动是？", a: "槌球", x: ["马球", "高尔夫", "网球"] },
    ],
  },
  us2_hanzell: {
    fact: "曾任美国驻意大利大使的James D. Zellerbach于1953年在索诺玛创立，在加州率先正式采用法国橡木桶陈酿。",
    quiz: [
      { q: "Hanzell这个名字是怎么来的？", a: "合并了妻子Hana的名字与姓氏Zellerbach", x: ["取自匈牙利旧地名", "德语意为“小山丘”", "首任酿酒师的名字"] },
    ],
  },
  us2_buena_vista: {
    fact: "1857年创立于索诺玛的加州第一家商业酒庄。2011年被勃艮第出身的Jean-Charles Boisset买下并复兴。",
    quiz: [
      { q: "创立Buena Vista、被称为“加州葡萄酒之父”的匈牙利出生拓荒者是？", a: "Agoston Haraszthy", x: ["Charles Krug", "Gustave Niebaum", "Georges de Latour"] },
    ],
  },
  us2_csj_cinq: {
    fact: "1996年份于1999年荣登《葡萄酒观察家》“年度葡萄酒”的索诺玛波尔多式调配酒，是首款获此殊荣的索诺玛葡萄酒。",
    quiz: [
      { q: "Cinq Cépages在法语中是什么意思？", a: "五个品种", x: ["五块葡萄园", "第五次采收", "五兄弟"] },
    ],
  },
  us2_rodney_strong: {
    fact: "1959年投身葡萄酒事业、率先把索诺玛县打造成名产区的拓荒者Rodney Strong的酒庄。",
    quiz: [
      { q: "Rodney Strong在酿酒之前的职业是？", a: "百老汇舞者", x: ["拳击手", "爵士钢琴家", "电台播音员"] },
    ],
  },
  us2_ferrari_carano_fume: {
    fact: "Don与Rhonda Carano夫妇于1981年在干溪谷创立的酒庄，以意式宅邸“Villa Fiore”和花园闻名。",
    quiz: [
      { q: "创立Ferrari-Carano的Don Carano在内华达州里诺经营的事业是？", a: "Eldorado酒店赌场", x: ["滑雪度假村", "铁路公司", "银矿"] },
    ],
  },
  us2_dry_creek_fume: {
    fact: "1972年David Stare在干溪谷创立，是禁酒令之后当地的第一家酒庄，也是索诺玛首个使用“Fumé Blanc”之名的酒庄。",
    quiz: [
      { q: "Dry Creek Vineyard酒标上画的是？", a: "帆船", x: ["灯塔", "鹰", "葡萄藤"] },
    ],
  },
  us2_seghesio_zin: {
    fact: "1895年意大利人Edoardo Seghesio种下第一块仙粉黛园而起步的索诺玛仙粉黛名门，挺过了禁酒令时代。",
    quiz: [
      { q: "2011年收购Seghesio Family Vineyards的公司是？", a: "Crimson Wine Group", x: ["E&J Gallo", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us2_coppola_claret: {
    fact: "灵感来自电影导演科波拉在其买下的纳帕老酒庄酒窖中发现的一瓶1906年份克莱尔特（Claret）。酒瓶裹着金色网套。",
    quiz: [
      { q: "Claret原本是英国人对哪个产区红葡萄酒的称呼？", a: "波尔多", x: ["勃艮第", "里奥哈", "托斯卡纳"] },
    ],
  },
  us2_sofia_bdb: {
    fact: "源于科波拉对女儿索菲亚许下的承诺：总有一天要酿一款起泡酒并以她命名。这是一款轻盈芬芳的起泡酒。",
    quiz: [
      { q: "为Sofia Blanc de Blancs提供名字的索菲亚·科波拉执导的电影是？", a: "《迷失东京》", x: ["《教父》", "《现代启示录》", "《惊情四百年》"] },
    ],
  },
  us2_iron_horse: {
    fact: "俄罗斯河谷格林谷（Green Valley）的家族起泡酒酒庄。自1985年里根与戈尔巴乔夫峰会晚宴以来，一直被用于白宫活动。",
    quiz: [
      { q: "Iron Horse（铁马）这个名字来自什么？", a: "19世纪经过这片土地的铁路车站", x: ["创始人饲养的赛马", "铁匠铺的马蹄铁", "附近矿山的名字"] },
    ],
  },
  us2_j_cuvee20: {
    fact: "Jordan酒庄创始人的女儿于1986年在俄罗斯河谷创立的起泡酒酒庄。2015年被E&J Gallo收购。",
    quiz: [
      { q: "J Vineyards中的“J”代表什么？", a: "创始人Judy Jordan", x: ["“庆典（Jubilee）”的首字母", "J字形的葡萄园", "创始人的儿子John"] },
    ],
  },
  us2_gloria_ferrer: {
    fact: "西班牙卡瓦名门Ferrer家族于1986年开设的卡内罗斯第一家起泡酒酒庄。",
    quiz: [
      { q: "Gloria Ferrer中的“Gloria”是谁？", a: "Ferrer家族José Ferrer的妻子", x: ["创始人的女儿", "西班牙的圣女", "歌剧演员"] },
      { q: "创立Gloria Ferrer的Ferrer家族旗下的西班牙卡瓦公司是？", a: "Freixenet", x: ["Codorníu", "Juvé & Camps", "Recaredo"] },
    ],
  },
  us2_korbel_natural: {
    fact: "1882年Korbel三兄弟在俄罗斯河谷创立的起泡酒酒庄，多次被用于美国总统就职典礼的祝酒。",
    quiz: [
      { q: "Korbel兄弟离开的故乡是？", a: "波希米亚（今捷克）", x: ["意大利托斯卡纳", "法国阿尔萨斯", "西班牙加泰罗尼亚"] },
    ],
  },
  us2_turley_oldvines: {
    fact: "Larry Turley于1993年创立的仙粉黛名门，一直在寻访并守护百年以上的加州老藤葡萄园。",
    quiz: [
      { q: "Larry Turley在Turley Wine Cellars之前参与创立的纳帕酒庄是？", a: "Frog's Leap", x: ["Ridge Vineyards", "Ravenswood", "Seghesio"] },
      { q: "与Larry Turley是兄妹关系的著名酿酒顾问是？", a: "Helen Turley", x: ["Heidi Barrett", "Merry Edwards", "Cathy Corison"] },
    ],
  },
  us2_ravenswood: {
    fact: "Joel Peterson于1976年创立的仙粉黛专门酒庄，以三只乌鸦围成圆圈的标志闻名。",
    quiz: [
      { q: "Ravenswood著名的座右铭是？", a: "No Wimpy Wines（拒绝软弱无力的酒）", x: ["In Vino Veritas", "Bottled Poetry", "Time's Fun When You're Having Flies"] },
    ],
  },
  us2_menage_a_trois: {
    fact: "1996年由纳帕的Folie à Deux酒庄首创的红葡萄调配酒，以甜美柔顺的口感引领了美国红葡萄调配酒潮流。",
    quiz: [
      { q: "Ménage à Trois（三人行）这个名字指的是？", a: "调配所用的三个葡萄品种", x: ["三位创始人", "三块葡萄园", "三次发酵"] },
      { q: "2004年收购Ménage à Trois的Trinchero家族的招牌品牌是？", a: "Sutter Home", x: ["Barefoot", "Woodbridge", "Kendall-Jackson"] },
    ],
  },
  us2_tablas_esprit: {
    fact: "法国Perrin家族与进口商Robert Haas于1989年在帕索罗布尔斯（Paso Robles）创立，种下了从法国引进的罗讷品种苗木。",
    quiz: [
      { q: "共同创立Tablas Creek的Perrin家族的教皇新堡名门是？", a: "Château de Beaucastel", x: ["Château Rayas", "Domaine du Vieux Télégraphe", "Château La Nerthe"] },
    ],
  },
  us2_saxum_jb: {
    fact: "Justin Smith在帕索罗布尔斯西部James Berry葡萄园酿造的罗讷风格调配酒。2007年份在2010年荣登《葡萄酒观察家》“年度葡萄酒”。",
    quiz: [
      { q: "Saxum在拉丁语中是什么意思？", a: "岩石", x: ["太阳", "葡萄", "风"] },
    ],
  },
  us2_laventure: {
    fact: "曾在波尔多酿酒的Stephan Asseo于1998年在帕索罗布尔斯创立的酒庄。名字在法语中意为“冒险”。",
    quiz: [
      { q: "Stephan Asseo离开波尔多来到帕索罗布尔斯的原因是？", a: "想不受法规束缚地混合西拉与赤霞珠", x: ["波尔多的葡萄园被洪水淹没", "想酿造起泡酒", "为了继承家族生意"] },
    ],
  },
  us2_justin_isosceles: {
    fact: "Justin Baldwin于1981年在帕索罗布尔斯创立的Justin的招牌波尔多式调配酒。2010年被拥有斐济水和POM Wonderful的The Wonderful Company收购。",
    quiz: [
      { q: "Isosceles（等腰三角形）这个名字指的是？", a: "混合三个波尔多品种的调配酒", x: ["三座山丘上的葡萄园", "创始人三兄弟", "陈酿三年"] },
    ],
  },
  us2_daou_sol: {
    fact: "黎巴嫩出生的Georges与Daniel Daou兄弟在帕索罗布尔斯山顶创立的酒庄的招牌赤霞珠，名字是为纪念兄弟俩的父亲。",
    quiz: [
      { q: "2023年收购DAOU Vineyards的澳大利亚葡萄酒公司是？", a: "Treasury Wine Estates", x: ["Constellation Brands", "E&J Gallo", "LVMH"] },
    ],
  },
  us2_qupe_syrah: {
    fact: "Bob Lindquist于1982年创立的中央海岸罗讷品种先驱，曾与Au Bon Climat共用一座酒厂。",
    quiz: [
      { q: "Qupé在丘马什原住民语言中是什么意思？", a: "加州罂粟花", x: ["海豹", "橡树", "鹰"] },
    ],
  },
  us2_bonny_doon_cigare: {
    fact: "人称“罗讷游侠”（Rhône Ranger）的Randall Grahm酿造的教皇新堡风格调配酒。酒标上画着飞过葡萄园上空的雪茄形飞行物。",
    quiz: [
      { q: "Le Cigare Volant所讽刺的1954年教皇新堡条例禁止了什么？", a: "飞碟（UFO）在葡萄园降落", x: ["夜间采收葡萄", "机器采收", "塑料瓶塞"] },
    ],
  },
  us2_foxen_pinot: {
    fact: "Dick Doré与Bill Wathen于1985年在圣玛丽亚谷Doré家族的土地上创立的酒庄。歪歪扭扭的船锚图案是其标志。",
    quiz: [
      { q: "Foxen酒标上的船锚图案来自谁？", a: "用船锚作牲畜烙印、身为英国船长的祖先William Benjamin Foxen", x: ["西班牙传教士胡尼佩罗·塞拉", "海军上将切斯特·尼米兹", "首任酿酒师的父亲"] },
    ],
  },
  us2_hitching_post: {
    fact: "比尔顿（Buellton）牛排馆“Hitching Post”的老板Frank Ostini与朋友Gray Hartley共同酿造的圣巴巴拉黑皮诺。",
    quiz: [
      { q: "让Hitching Post餐厅和葡萄酒出名的2004年电影是？", a: "《杯酒人生》", x: ["《酒业风云》", "《美好的一年》", "《Mondovino》"] },
    ],
  },
  us2_sanford_pinot: {
    fact: "在电影《杯酒人生》中，主角Miles和Jack最先造访品酒的圣丽塔山酒庄。",
    quiz: [
      { q: "Richard Sanford于1971年与Michael Benedict在圣丽塔山做了什么？", a: "首次在当地种下黑皮诺", x: ["开设第一家起泡酒酒庄", "举办首场葡萄酒拍卖", "获得首个有机认证"] },
    ],
  },
  us2_fess_parker: {
    fact: "演员Fess Parker在圣伊内斯谷创立的家族酒庄，以圣巴巴拉的黑皮诺和罗讷品种闻名。",
    quiz: [
      { q: "Fess Parker在1950年代迪士尼剧集中饰演的美国拓荒英雄是？", a: "戴维·克罗克特", x: ["野牛比尔", "怀亚特·厄普", "独行侠"] },
    ],
  },
  us2_chalone_chard: {
    fact: "位于尖峰石阵（Pinnacles）附近石灰岩高原上的酒庄。像勃艮第一样在石灰质土壤上种植霞多丽和黑皮诺。",
    quiz: [
      { q: "Chalone 1974年份霞多丽在1976年“巴黎审判”白葡萄酒组中的名次是？", a: "第3名", x: ["第1名", "第6名", "第10名"] },
    ],
  },
  us2_wente_morningfog: {
    fact: "1883年德国人Carl Wente在利弗莫尔谷（Livermore Valley）创立、美国传承最久的家族酒庄所酿的霞多丽。",
    quiz: [
      { q: "成为加州大部分霞多丽葡萄园根源的霞多丽克隆名叫？", a: "Wente克隆", x: ["Mondavi克隆", "Chablis克隆", "Napa克隆"] },
    ],
  },
  us2_concannon_ps: {
    fact: "1883年爱尔兰人James Concannon在利弗莫尔谷创立。禁酒令时期靠酿造弥撒用酒撑了下来。",
    quiz: [
      { q: "Concannon在1960年代的美国首创了什么？", a: "推出标注品种名的小西拉葡萄酒", x: ["在高级葡萄酒上使用螺旋盖", "酿造桃红起泡酒", "出售罐装葡萄酒"] },
    ],
  },
  us2_7deadlyzins: {
    fact: "在洛迪世代务农的Phillips家族的Michael与David兄弟，以老藤仙粉黛推出的人气酒款。",
    quiz: [
      { q: "7 Deadly Zins这个名字影射的是？", a: "基督教的七宗罪（Seven Deadly Sins）", x: ["世界七大奇迹", "七块葡萄园", "陈酿七年"] },
    ],
  },
  us2_adelsheim: {
    fact: "David Adelsheim夫妇于1971年买下威拉米特河谷北部山丘的土地而起步的俄勒冈早期酒庄。",
    quiz: [
      { q: "长期装点Adelsheim酒标的女性肖像画出自谁手？", a: "共同创始人Ginny Adelsheim", x: ["Andy Warhol", "Norman Rockwell", "Georgia O'Keeffe"] },
    ],
  },
  us2_argyle_brut: {
    fact: "澳大利亚酿酒师与美国酿酒师Rollin Soles于1987年在邓迪创立的俄勒冈起泡酒先驱。",
    quiz: [
      { q: "与Rollin Soles共同创立Argyle的澳大利亚酿酒师是？", a: "Brian Croser", x: ["Peter Lehmann", "Wolf Blass", "John Duval"] },
    ],
  },
  us2_sokol_blosser: {
    fact: "1971年在邓迪山种下葡萄的俄勒冈拓荒酒庄，很早就致力于环保农法与环保建筑。",
    quiz: [
      { q: "Sokol Blosser这个名字是怎么来的？", a: "合并了创始夫妇Susan Sokol与Bill Blosser的姓氏", x: ["合并了两个村名", "波兰语意为“阳光山丘”", "第一块葡萄园园主的名字"] },
    ],
  },
  us2_wvv_estate: {
    fact: "Jim Bernau于1983年创立的威拉米特河谷酒庄，率先让大众认识俄勒冈黑皮诺。",
    quiz: [
      { q: "Willamette Valley Vineyards独特的所有权结构是？", a: "由众多小股东持股的纳斯达克上市公司", x: ["修道院团体所有", "州立大学所有", "原住民部落所有"] },
    ],
  },
  us2_ponzi_tavola: {
    fact: "Dick与Nancy Ponzi夫妇于1970年创立的威拉米特河谷拓荒酒庄，女儿Luisa长期负责酿造。",
    quiz: [
      { q: "2021年收购Ponzi Vineyards的香槟酒庄是？", a: "Bollinger", x: ["Moët & Chandon", "Louis Roederer", "Taittinger"] },
    ],
  },
  us2_resonance: {
    fact: "勃艮第名门首次在法国境外创立的酒庄。2013年买下扬希尔-卡尔顿（Yamhill-Carlton）的Résonance葡萄园而起步。",
    quiz: [
      { q: "创立Résonance的勃艮第酒商是？", a: "Louis Jadot", x: ["Joseph Drouhin", "Bouchard Père & Fils", "Albert Bichot"] },
    ],
  },
  us2_nicolas_jay: {
    fact: "沃恩-罗曼尼的勃艮第酿酒师Jean-Nicolas Méo与唱片公司高管Jay Boberg于2014年在俄勒冈创立的酒庄。",
    quiz: [
      { q: "共同创立Nicolas-Jay的Jean-Nicolas Méo掌管的勃艮第酒庄是？", a: "Domaine Méo-Camuzet", x: ["Domaine Leroy", "Domaine Dujac", "Domaine Georges Roumier"] },
    ],
  },
  us2_columbia_crest_ge: {
    fact: "与Chateau Ste. Michelle同属一个集团的华盛顿大型酒庄，坐落在俯瞰哥伦比亚河的马天堂山（Horse Heaven Hills）。",
    quiz: [
      { q: "2009年当选《葡萄酒观察家》“年度葡萄酒”的Columbia Crest酒款是？", a: "2005年份珍藏赤霞珠（Reserve Cabernet Sauvignon）", x: ["Grand Estates Merlot", "H3 Cabernet Sauvignon", "Two Vines Red Blend"] },
    ],
  },
  us2_14hands_cab: {
    fact: "Chateau Ste. Michelle集团于2005年推出的华盛顿品牌。原本面向餐厅，因人气高涨而成为大品牌。",
    quiz: [
      { q: "14 Hands这个名字指的是？", a: "驰骋于马天堂山的小型野马的身高", x: ["14位创始人", "14块葡萄园", "14名采收工"] },
    ],
  },
  us2_kung_fu_girl: {
    fact: "华盛顿葡萄酒界的异类Charles Smith酿造的雷司令。2016年他的品牌被卖给了Constellation Brands。",
    quiz: [
      { q: "Charles Smith在酿酒之前在欧洲做什么？", a: "摇滚乐队经纪人", x: ["职业滑板手", "电影特技演员", "餐厅主厨"] },
    ],
  },
  us2_andrew_will_sorella: {
    fact: "Chris Camarda于1989年创立的酒庄的波尔多式调配酒。Sorella在意大利语中意为“姐妹”，以纪念他已故的姐妹。",
    quiz: [
      { q: "Andrew Will这个酒庄名来自谁？", a: "创始人的侄子Andrew与儿子Will", x: ["创始人的两个兄弟", "第一块葡萄园的两位园主", "一位英国诗人的名字"] },
    ],
  },
  us2_woodward_canyon: {
    fact: "Rick Small于1981年创立、瓦拉瓦拉谷的第二家酒庄，很早就建立了华盛顿赤霞珠的名声。",
    quiz: [
      { q: "Woodward Canyon Artist Series酒标的特点是？", a: "每年采用不同画家的作品", x: ["使用创始人的家庭照片", "使用葡萄园航拍照片", "使用各年份的天气图表"] },
    ],
  },
  us2_lecole41_semillon: {
    fact: "1983年在法国城（Frenchtown）一座建于1915年的老校舍中开业、瓦拉瓦拉谷的第三家酒庄。L'Ecole在法语中意为“学校”。",
    quiz: [
      { q: "L'Ecole No 41中的“41”是什么？", a: "校舍所属的学区编号", x: ["创始人的41岁生日", "41号国道", "41块葡萄园"] },
    ],
  },
  us2_long_shadows_sequel: {
    fact: "曾掌管Chateau Ste. Michelle的Allen Shoup邀请世界级酿酒师各负责一款酒，这是Long Shadows的西拉。",
    quiz: [
      { q: "酿造Sequel的John Duval曾任首席酿酒师的澳大利亚名门是？", a: "Penfolds", x: ["Henschke", "Torbreck", "Two Hands"] },
    ],
  },
  us2_long_shadows_pedestal: {
    fact: "Long Shadows交由波尔多明星顾问酿造、以梅洛为主的华盛顿红葡萄酒。",
    quiz: [
      { q: "酿造Pedestal Merlot的波尔多著名酿酒顾问是？", a: "Michel Rolland", x: ["Pierre Seillan", "Stéphane Derenoncourt", "Eric Boissenot"] },
    ],
  },
  us2_long_shadows_feather: {
    fact: "Long Shadows交由纳帕山地赤霞珠名家酿造的华盛顿赤霞珠。",
    quiz: [
      { q: "酿造Feather赤霞珠的纳帕豪厄尔山酿酒师是？", a: "Randy Dunn", x: ["Heidi Barrett", "Paul Hobbs", "Philippe Melka"] },
    ],
  },
  us2_long_shadows_poetsleap: {
    fact: "Long Shadows交由德国那赫名门酿酒师酿造的华盛顿雷司令。",
    quiz: [
      { q: "酿造Poet's Leap雷司令的德国那赫酿酒师是？", a: "Armin Diel", x: ["Ernst Loosen", "Egon Müller", "Helmut Dönnhoff"] },
    ],
  },
  us2_doubleback: {
    fact: "瓦拉瓦拉出身的体育明星Drew Bledsoe退役后在故乡创立的酒庄。Leonetti的Chris Figgins主导了早期酿造。",
    quiz: [
      { q: "创立Doubleback的Drew Bledsoe以前的职业是？", a: "NFL四分卫", x: ["NBA篮球运动员", "美国职棒大联盟投手", "职业高尔夫球手"] },
      { q: "Doubleback这个名字蕴含的意思是？", a: "重返故乡", x: ["陈酿两次", "混合两块葡萄园", "一种橄榄球战术名"] },
    ],
  },
  us2_wiemer_dry_riesling: {
    fact: "出身德国摩泽尔伯恩卡斯特尔的Hermann J. Wiemer于1979年在塞尼卡湖（Seneca Lake）畔创立的五指湖区雷司令名门。",
    quiz: [
      { q: "Hermann J. Wiemer在经营酒庄的同时还经营什么生意？", a: "嫁接并出售欧洲葡萄品种的苗圃", x: ["奶酪工坊", "苹果酒酿造厂", "橡木桶工坊"] },
    ],
  },
  us2_drfrank_rkatsiteli: {
    fact: "Konstantin Frank博士将耐寒的前苏联地区品种引入五指湖区酿成的白葡萄酒。",
    quiz: [
      { q: "Frank博士在五指湖区种下的白羽（Rkatsiteli）品种的故乡是？", a: "格鲁吉亚", x: ["亚美尼亚", "希腊", "保加利亚"] },
    ],
  },
  us2_wolffer_rose: {
    fact: "汉堡出生的Christian Wölffer于1988年在长岛汉普顿斯（Hamptons）创立的酒庄所酿的桃红，堪称纽约夏日度假胜地的象征。",
    quiz: [
      { q: "Wölffer Estate乘着桃红热潮新推出的桃红叫什么？", a: "Summer in a Bottle", x: ["Whispering Angel", "Miraval", "Hampton Water"] },
    ],
  },
  us2_bedell_merlot: {
    fact: "长岛北叉（North Fork）的酒庄。2009年份梅洛登上2013年总统就职午宴，成为首款用于就职典礼的纽约葡萄酒。",
    quiz: [
      { q: "2000年买下Bedell Cellars的Michael Lynne所执掌的新线影业（New Line Cinema）的代表作是？", a: "《指环王》", x: ["《哈利·波特》", "《星球大战》", "《教父》"] },
    ],
  },
  us2_barboursville_octagon: {
    fact: "意大利Zonin家族于1976年创立的弗吉尼亚酒庄。庄园内保留着托马斯·杰斐逊设计的旧州长宅邸遗址。",
    quiz: [
      { q: "Octagon（八角形）这个名字来自什么？", a: "杰斐逊设计的宅邸中的八角形房间", x: ["八角形橡木桶", "八个品种的调配", "八个地块的葡萄园"] },
    ],
  },
  us2_rdv_lostmountain: {
    fact: "海军陆战队出身的Rutger de Vink在弗吉尼亚蓝岭山麓的花岗岩山丘上创立，2008年推出首个年份。最近被卖给了拥有Château Montrose的家族。",
    quiz: [
      { q: "RdV这个名字是什么？", a: "创始人名字的首字母，也是“rendezvous（约会）”的缩写", x: ["意为“弗吉尼亚之红”的法语缩写", "葡萄园的坐标", "附近河流的名字"] },
    ],
  },
  us2_early_mountain_pm: {
    fact: "一对互联网企业家夫妇于2012年在弗吉尼亚蓝岭山麓创立的酒庄，专注于弗吉尼亚的招牌白葡萄品种小芒森。",
    quiz: [
      { q: "创立Early Mountain的Steve Case参与创办的互联网公司是？", a: "AOL（美国在线）", x: ["雅虎", "网景", "eBay"] },
    ],
  },
  us2_gruet_brut: {
    fact: "法国香槟家族于1984年在新墨西哥高原买地创立的起泡酒酒庄，以与香槟相同的方法酿造。",
    quiz: [
      { q: "Gruet家族原本酿酒的法国产区是？", a: "香槟区", x: ["阿尔萨斯", "勃艮第", "卢瓦尔河谷"] },
    ],
  },
  us2_missionhill_reserve_chard: {
    fact: "坐落在俯瞰奥肯那根湖的山丘上的酒庄，以宛如修道院的建筑和高耸的钟楼闻名。",
    quiz: [
      { q: "Mission Hill 1992年份霞多丽在1994年伦敦国际葡萄酒暨烈酒大赛（IWSC）上获得的奖项是？", a: "世界最佳霞多丽奖杯", x: ["最佳冰酒奖", "最佳起泡酒奖", "最佳红葡萄调配酒奖"] },
    ],
  },
  us2_burrowing_owl_merlot: {
    fact: "Jim Wyse在奥肯那根南部沙漠地带创立的酒庄，以当地日渐消失的穴小鸮命名。",
    quiz: [
      { q: "Burrowing Owl酒庄收取品鉴费后用来做什么？", a: "捐给穴小鸮保护组织", x: ["用作葡萄园工人的奖学金", "用来购买橡木桶", "捐给当地消防局"] },
    ],
  },
  us2_quails_gate_foch: {
    fact: "自1908年起在西基洛纳（West Kelowna）务农的Stewart家族的酒庄，用1960年代种下的老藤酿造浓郁的红葡萄酒。",
    quiz: [
      { q: "葡萄品种“Maréchal Foch”是为纪念谁而命名的？", a: "第一次世界大战协约国总司令费迪南·福煦", x: ["拿破仑·波拿巴", "拉法耶特侯爵", "夏尔·戴高乐"] },
    ],
  },
  us2_osoyoos_larose: {
    fact: "波尔多的Taillan集团与加拿大Vincor于1998年在奥索尤斯湖（Osoyoos）畔创立的波尔多式酒庄，如今由Taillan集团独自拥有。",
    quiz: [
      { q: "Osoyoos Larose中的“Larose”取自Taillan集团旗下哪座波尔多酒庄？", a: "Château Gruaud Larose", x: ["Château Latour", "Château Lagrange", "Château Lafon-Rochet"] },
    ],
  },
  us2_nkmip_syrah: {
    fact: "位于加拿大沙漠地带奥索尤斯的酒庄。Nk'Mip在原住民语言中意为“低地”。",
    quiz: [
      { q: "Nk'Mip Cellars保持的纪录是？", a: "北美第一家原住民社区所有的酒庄", x: ["加拿大首个冰酒生产商", "加拿大首个有机认证", "北美第一家起泡酒酒庄"] },
    ],
  },
  us2_summerhill_cipes: {
    fact: "Cipes家族于1986年在基洛纳创立的有机酒庄的招牌起泡酒，以雷司令为主调配，采用瓶中二次发酵。",
    quiz: [
      { q: "Summerhill Pyramid Winery在仿照吉萨大金字塔建造的金字塔里做什么？", a: "陈酿葡萄酒", x: ["举办品鉴会", "风干葡萄", "制作橡木桶"] },
    ],
  },
  us2_clos_jordanne: {
    fact: "勃艮第的Boisset与加拿大Vincor合作创立的尼亚加拉酒庄。2005年份在2009年“蒙特利尔审判”中力压勃艮第与加州名酒夺得第一。",
    quiz: [
      { q: "为Le Clos Jordanne设计了酒庄、但最终未能建成的建筑师是？", a: "弗兰克·盖里", x: ["伦佐·皮亚诺", "安藤忠雄", "扎哈·哈迪德"] },
    ],
  },
  us2_peller_ice_cuvee: {
    fact: "以香槟法酿造的尼亚加拉起泡酒。在最后阶段加入颇具加拿大特色的原料，带出淡淡的甜味。",
    quiz: [
      { q: "Ice Cuvée最后补液（dosage）时加入的是？", a: "威代尔冰酒", x: ["枫糖浆", "蜂蜜", "苹果白兰地"] },
    ],
  },
  us2_gretzky_cab_merlot: {
    fact: "冰球传奇韦恩·格雷茨基在湖边尼亚加拉创立的酒庄兼威士忌蒸馏厂所出的红葡萄调配酒。",
    quiz: [
      { q: "韦恩·格雷茨基葡萄酒品牌常用的、他球员时代的球衣号码是？", a: "99", x: ["66", "87", "9"] },
    ],
  },
};

export default T;
