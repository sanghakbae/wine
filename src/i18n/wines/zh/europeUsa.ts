import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  eu_prum_wehlener: {
    fact: "以葡萄园山坡上的日晷命名的Wehlener Sonnenuhr的代表生产者。年轻时封闭，能陈年数十年，以细腻甜美的雷司令闻名。",
    quiz: [
      { q: "J.J. Prüm Wehlener Sonnenuhr中的“Sonnenuhr”是什么意思？", a: "日晷", x: ["月光花园", "钟楼", "水车"] },
    ],
  },
  eu_loosen_praelat: {
    fact: "红色板岩峭壁挡住寒风，使Erdener Prälat被视为摩泽尔最温暖的葡萄园。园子很小，产量极少。",
    quiz: [
      { q: "1988年接手家业、让Dr. Loosen Erdener Prälat扬名世界的人物是？", a: "Ernst Loosen", x: ["Egon Müller", "Johannes Selbach", "Carl von Schubert"] },
    ],
  },
  eu_christoffel_urzig: {
    fact: "于尔齐希（Ürzig）村的陡坡上，摩泽尔少见的红色火山性土壤与板岩交织，因此以带有异国香料风味的雷司令闻名。",
    quiz: [
      { q: "Ürziger Würzgarten中的“Würzgarten”是什么意思？", a: "香料花园", x: ["葡萄酒仓库", "城墙花园", "太阳之丘"] },
    ],
  },
  eu_schloss_johannisberg: {
    fact: "以瓶帽颜色区分等级的莱茵高城堡酒庄。在黄、绿、粉、金等瓶帽中，绿色瓶帽（Grünlack）代表晚收（Spätlese）。",
    quiz: [
      { q: "相传因1775年送来采收许可的信使迟到，而在Schloss Johannisberg诞生的等级是？", a: "晚收（Spätlese）", x: ["冰酒（Eiswein）", "珍藏（Kabinett）", "特级园干型（Grosses Gewächs）"] },
      { q: "1816年从奥地利皇帝手中获赠Schloss Johannisberg的政治家是？", a: "梅特涅", x: ["俾斯麦", "塔列朗", "黎塞留"] },
    ],
  },
  eu_weil_grafenberg: {
    fact: "曾任巴黎索邦大学德语教授的Robert Weil博士于1875年在基德里希（Kiedrich）创立的酒庄。陡峭的Gräfenberg葡萄园雷司令是其招牌。",
    quiz: [
      { q: "1988年成为Robert Weil酒庄大股东的日本企业是？", a: "三得利", x: ["麒麟", "朝日", "札幌"] },
    ],
  },
  eu_keller_gmax: {
    fact: "把莱茵黑森提升为世界级产区的Keller家族的雷司令。以老藤极少量酿造，被视为德国最昂贵的干型雷司令。",
    quiz: [
      { q: "Keller G-Max被称为神秘之酒的原因是？", a: "不公开葡萄园的位置", x: ["每年请不同画家绘制酒标", "只酿成冰酒", "在海底陈酿"] },
    ],
  },
  eu_donnhoff_hermannshohle: {
    fact: "Helmut Dönnhoff把小产区那赫推上了世界舞台。板岩与火山岩交错的Hermannshöhle被视为那赫最好的葡萄园。",
    quiz: [
      { q: "继父亲Helmut之后掌管Dönnhoff的儿子是？", a: "Cornelius Dönnhoff", x: ["Ernst Loosen", "Klaus Peter Keller", "Philipp Wittmann"] },
    ],
  },
  eu_haag_juffer: {
    fact: "出自与对岸Brauneberg村相望的Juffer-Sonnenuhr山坡的雷司令。Haag家族世代酿造细腻而耐久的葡萄酒。",
    quiz: [
      { q: "Fritz Haag Brauneberger Juffer中的“Juffer”源自什么意思？", a: "少女（姑娘）", x: ["城墙", "狐狸", "太阳"] },
    ],
  },
  eu_grunhaus_abtsberg: {
    fact: "这片鲁沃河畔的葡萄园最早见于10世纪的文献。自19世纪末起由von Schubert家族传承，至今仍使用约1900年设计的酒标。",
    quiz: [
      { q: "最早耕作Maximin Grünhaus葡萄园的是？", a: "特里尔的圣马克西敏修道院", x: ["科隆大教堂", "普鲁士王室", "海德堡大学"] },
      { q: "Maximin Grünhaus的酒标以哪种风格闻名？", a: "新艺术运动（青年风格）", x: ["包豪斯", "波普艺术", "洛可可"] },
    ],
  },
  eu_selbach_zeltinger: {
    fact: "在策尔廷根（Zeltingen）村世代种植葡萄的Selbach家族酒庄。以立着日晷的陡峭Sonnenuhr山坡的雷司令为代表作。",
    quiz: [
      { q: "与Selbach-Oster Zeltinger Sonnenuhr同处一面山坡、属于相邻村庄的著名葡萄园是？", a: "Wehlener Sonnenuhr", x: ["Piesporter Goldtröpfchen", "Bernkasteler Doctor", "Scharzhofberg"] },
    ],
  },
  eu_schloss_vollrads: {
    fact: "被视为世界上最古老的酒庄之一的莱茵高城堡。被护城河环绕的中世纪塔楼是这里的象征。",
    quiz: [
      { q: "Schloss Vollrads出售葡萄酒的最早记录是哪一年的？", a: "1211年", x: ["1775年", "1855年", "1920年"] },
    ],
  },
  eu_kloster_eberbach: {
    fact: "1136年由西多会修士创立的修道院酒庄。修士们筑墙打理的Steinberg葡萄园常被拿来与勃艮第的Clos de Vougeot相比。",
    quiz: [
      { q: "以Kloster Eberbach修道院为拍摄地、肖恩·康纳利主演的电影是？", a: "《玫瑰之名》", x: ["《夺宝奇兵3：圣战奇兵》", "《铁面无私》", "《007之金手指》"] },
    ],
  },
  eu_kunstler_holle: {
    fact: "位于美因河与莱茵河交汇处、莱茵高东端霍赫海姆（Hochheim）的名门。以有力的干型雷司令代表莱茵高。",
    quiz: [
      { q: "源自Künstler Hochheimer Hölle的故乡霍赫海姆、英国人对莱茵葡萄酒的昵称是？", a: "Hock", x: ["Claret", "Sack", "Bubbly"] },
    ],
  },
  eu_wittmann_morstein: {
    fact: "韦斯特霍芬（Westhofen）的Wittmann家族以生物动力法打理的石灰质葡萄园Morstein的干型雷司令，被视为莱茵黑森最顶级的特级园水准酒款。",
    quiz: [
      { q: "酿造Wittmann Morstein、以生物动力法掌管酒庄的人物是？", a: "Philipp Wittmann", x: ["Klaus Peter Keller", "Helmut Dönnhoff", "Johannes Leitz"] },
    ],
  },
  eu_burklin_kirchenstuck: {
    fact: "法尔兹瓦亨海姆（Wachenheim）的大型家族酒庄，遵循生物动力法。教堂旁的小葡萄园Kirchenstück被视为法尔兹最珍贵的园子。",
    quiz: [
      { q: "Dr. Bürklin-Wolf酒标上使用的“G.C.”“P.C.”等级仿照的是哪个产区？", a: "勃艮第", x: ["波尔多1855年分级", "里奥哈陈酿等级", "香槟村庄评级（Échelle des Crus）"] },
    ],
  },
  eu_black_tower: {
    fact: "诞生于1960年代末、在英国等世界各地大受欢迎的德国葡萄酒品牌。看起来像陶瓷的漆黑酒瓶十分醒目。",
    quiz: [
      { q: "Black Tower刚推出时所属的德国柔和甜美型白葡萄酒风格是？", a: "圣母之乳（Liebfraumilch）", x: ["冰酒（Eiswein）", "德国起泡酒（Sekt）", "枯萄精选（Trockenbeerenauslese）"] },
    ],
  },
  eu_wirsching_silvaner: {
    fact: "在弗兰肯伊普霍芬（Iphofen）世代传承的家族酒庄。在施泰格瓦尔德山麓的石膏泥灰岩葡萄园酿造带泥土气息的西万尼，装入大肚瓶（Bocksbeutel）。",
    quiz: [
      { q: "Hans Wirsching Iphöfer Julius-Echter-Berg名字中的Julius Echter是什么人物？", a: "16至17世纪的维尔茨堡采邑主教", x: ["巴伐利亚国王", "宗教改革家", "培育葡萄品种的育种家"] },
    ],
  },
  eu_molitor_himmelreich: {
    fact: "Markus Molitor年纪轻轻接手家业，将其打造成摩泽尔顶尖的酒庄。“Himmelreich”意为天国。",
    quiz: [
      { q: "Markus Molitor酒瓶的瓶帽颜色（白、绿、金）表示什么？", a: "甜度", x: ["葡萄园土壤", "陈酿时间", "采收月份"] },
    ],
  },
  eu_thanisch_doctor: {
    fact: "出自伯恩卡斯特尔村正后方陡坡上的小名园Doctor的雷司令。这里一直被视为德国最昂贵的葡萄园土地之一。",
    quiz: [
      { q: "Dr. Thanisch Berncasteler Doctor中“Doctor（医生）”之名来自什么传说？", a: "患病的特里尔大主教喝了这块园的酒后痊愈", x: ["葡萄园旁有一家大医院", "拿破仑的军医拿它当药", "采收工穿着白色医生袍"] },
    ],
  },
  eu_leitz_einszweidry: {
    fact: "莱茵河转弯处吕德斯海姆的Johannes Leitz酿造的轻盈清爽干型雷司令。价格亲民，深受世界各地喜爱。",
    quiz: [
      { q: "Leitz“Eins Zwei Dry”这个名字玩的是什么文字游戏？", a: "把德语数字“一、二、三”中的三（drei）换成英语的dry", x: ["贝多芬交响曲的编号", "Leitz家族三兄弟的名字", "过滤三次的酿造方式"] },
    ],
  },
  eu_fxpichler_kellerberg: {
    fact: "由上洛伊本（Oberloiben）的Pichler家族提升到瓦豪最高水准的酒庄。俯瞰多瑙河的Kellerberg的Smaragd兼具力量与深度。",
    quiz: [
      { q: "F.X. Pichler酒标上“Smaragd”等级的名字来自什么？", a: "生活在葡萄园石墙中的翠绿色蜥蜴", x: ["附近的祖母绿矿", "哈布斯堡王冠上的宝石", "绿色的酒瓶"] },
    ],
  },
  eu_knoll_schutt: {
    fact: "下洛伊本（Unterloiben）的Knoll家族世代酿造的瓦豪经典。不追逐潮流，以传统方式酿出越陈越出色的葡萄酒。",
    quiz: [
      { q: "Knoll酒标上画的圣人是谁？", a: "葡萄种植者的守护圣人圣乌尔班", x: ["圣彼得", "圣尼古拉", "圣乔治"] },
    ],
  },
  eu_prager_achleiten: {
    fact: "瓦豪魏森基兴（Weißenkirchen）的名门。在Toni Bodenstein的带领下，以陡峭石墙梯田Achleiten矿物感十足的雷司令而扬名。",
    quiz: [
      { q: "Prager Achleiten葡萄园俯瞰的河流是？", a: "多瑙河", x: ["莱茵河", "摩泽尔河", "易北河"] },
    ],
  },
  eu_hirtzberger_singerriedel: {
    fact: "瓦豪西部施皮茨（Spitz）村的名门。以村后陡峭的Singerriedel梯田出产的雷司令Smaragd为代表作。",
    quiz: [
      { q: "在Hirtzberger等瓦豪生产者于1983年创立的“Vinea Wachau”等级中，最轻盈的酒是？", a: "Steinfeder", x: ["Smaragd", "Kabinett", "Grosses Gewächs"] },
    ],
  },
  eu_brundlmayer_heiligenstein: {
    fact: "由坎普谷朗根洛伊斯（Langenlois）的Willi Bründlmayer发扬光大的名门。以陡峭的Heiligenstein山丘雷司令和传统法起泡酒闻名。",
    quiz: [
      { q: "Bründlmayer Heiligenstein的葡萄园名是什么意思？", a: "神圣的石头（岩石）", x: ["白色山丘", "圣人之井", "英雄之墓"] },
    ],
  },
  eu_kracher_tba: {
    fact: "新锡德尔湖畔伊尔米茨（Illmitz）升起的雾气引来贵腐菌，孕育出世界级的甜酒。已故的Alois Kracher将奥地利甜点酒推上了世界之巅。",
    quiz: [
      { q: "Kracher枯萄精选中在新橡木桶中陈酿的系列叫什么？", a: "Nouvelle Vague", x: ["Zwischen den Seen", "Smaragd", "Grand Cru Classé"] },
    ],
  },
  eu_domane_wachau: {
    fact: "由瓦豪众多葡萄种植农户共同经营的合作社酒庄。以杜恩施泰因（Dürnstein）的巴洛克酒窖“Kellerschlössel”为大本营。",
    quiz: [
      { q: "12世纪末被囚禁在Domäne Wachau所在的杜恩施泰因城堡中的国王是？", a: "英格兰的“狮心王”理查一世", x: ["法国的路易九世", "神圣罗马帝国的腓特烈一世", "苏格兰的罗伯特一世"] },
      { q: "Domäne Wachau在2008年改名之前使用的名字是？", a: "Freie Weingärtner Wachau", x: ["瓦豪皇家酿酒所", "多瑙河葡萄酒协会", "杜恩施泰因修道院酒庄"] },
    ],
  },
  eu_moric_blaufrankisch: {
    fact: "2001年创立的布尔根兰酒庄。以老藤蓝佛朗克（Blaufränkisch）酿出勃艮第般细腻的红葡萄酒，改变了人们对这个品种的评价。",
    quiz: [
      { q: "创立Moric、让蓝佛朗克闻名世界的酿酒师是？", a: "Roland Velich", x: ["Alois Kracher", "Willi Bründlmayer", "Emmerich Knoll"] },
    ],
  },
  eu_royaltokaji_essencia: {
    fact: "只收集堆放的贵腐葡萄靠自身重量流出的汁液，历时数年极其缓慢地发酵。酒精度只有几度，浓稠如蜜。",
    quiz: [
      { q: "1990年共同创立Royal Tokaji酒庄的英国葡萄酒作家是？", a: "Hugh Johnson", x: ["Jancis Robinson", "Robert Parker", "Michael Broadbent"] },
    ],
  },
  eu_oremus_aszu: {
    fact: "以传说中第一款托卡伊阿苏诞生地Oremus葡萄园命名的托尔查瓦（Tolcsva）酒庄。Oremus在拉丁语中意为“让我们祈祷”。",
    quiz: [
      { q: "1993年买下Oremus的西班牙名门是？", a: "Vega Sicilia", x: ["Marqués de Riscal", "Torres", "Bodegas Muga"] },
    ],
  },
  eu_disznoko_aszu: {
    fact: "名字来自葡萄园正中一块形似野猪的巨石。它是共产体制结束后与外资一起引领托卡伊复兴的酒庄之一。",
    quiz: [
      { q: "Disznókő这个名字是什么意思？", a: "猪（野猪）石", x: ["黄金山丘", "国王之泉", "狼谷"] },
      { q: "自1992年起拥有Disznókő的法国保险集团旗下葡萄酒公司是？", a: "AXA Millésimes", x: ["LVMH", "Castel集团", "Baron Philippe de Rothschild"] },
    ],
  },
  eu_kefraya: {
    fact: "葡萄园位于贝卡谷地西侧高坡上的黎巴嫩代表性酒庄之一。法国品种与黎巴嫩的阳光相遇，酿出浓郁且带香料风味的红葡萄酒。",
    quiz: [
      { q: "Château Kefraya所在的贝卡谷地位于哪两座山脉之间？", a: "黎巴嫩山脉与前黎巴嫩山脉", x: ["托罗斯山脉与扎格罗斯山脉", "高加索山脉与乌拉尔山脉", "阿特拉斯山脉与里夫山脉"] },
    ],
  },
  eu_ixsir: {
    fact: "建在黎巴嫩北部拜特龙（Batroun）山麓的酒庄。名字来自意为“灵药（elixir）”的阿拉伯语，以把建筑埋入地下的环保设计闻名。",
    quiz: [
      { q: "共同创立Ixsir、曾任雷诺-日产董事长的人物是？", a: "卡洛斯·戈恩", x: ["贝尔纳·阿尔诺", "谢赫·曼苏尔", "理查德·布兰森"] },
    ],
  },
  eu_massaya: {
    fact: "内战结束后回到故乡黎巴嫩的Ghosn兄弟与法国葡萄酒名门携手，在贝卡谷地塔奈勒（Taanayel）创立的酒庄。",
    quiz: [
      { q: "参与创立Massaya的教皇新堡名门是？", a: "Vieux Télégraphe（Brunier家族）", x: ["Château de Beaucastel（Perrin家族）", "Château Rayas", "E. Guigal"] },
    ],
  },
  eu_castel_grandvin: {
    fact: "始于Eli Ben Zaken在自家附近种下的葡萄树的家族酒庄，被视为开创以色列高级葡萄酒时代的先驱。",
    quiz: [
      { q: "离Domaine du Castel所在的犹地亚山地最近的城市是？", a: "耶路撒冷", x: ["海法", "埃拉特", "拿撒勒"] },
    ],
  },
  eu_yarden_cabernet: {
    fact: "生长在戈兰高地凉爽火山土壤葡萄园的赤霞珠。1980年代创立的戈兰高地酒庄是让以色列葡萄酒走向世界的代表品牌。",
    quiz: [
      { q: "Yarden在希伯来语中指的是什么？", a: "约旦河", x: ["加利利湖", "黑门山", "死海"] },
    ],
  },
  eu_gaia_thalassitis: {
    fact: "意为“海洋的”Thalassitis是以火山岛圣托里尼的阿斯提可（Assyrtiko）酿造、咸鲜而锐利的白葡萄酒，是Gaia Wines的代表作。",
    quiz: [
      { q: "为保护Gaia Thalassitis的圣托里尼葡萄树免受强风侵袭，将枝条盘绕成篮子状的整形方式是？", a: "Kouloura", x: ["Gobelet", "Pergola", "Guyot"] },
    ],
  },
  eu_boutari_naoussa: {
    fact: "以意为“酸黑葡萄”的黑喜诺（Xinomavro）酿造的希腊北部代表性红葡萄酒。酸度与单宁都很高，被称为“希腊的巴罗洛”。",
    quiz: [
      { q: "Boutari在纳乌萨首次酿酒是在哪一年？", a: "1879年", x: ["1789年", "1923年", "1970年"] },
    ],
  },
  eu_sigalas_assyrtiko: {
    fact: "位于圣托里尼北部伊亚（Oia）村附近的酒庄。在这座根系超过百年的葡萄树随处可见的岛上，酿出矿物感十足的阿斯提可。",
    quiz: [
      { q: "多亏Domaine Sigalas所在圣托里尼的火山沙土，葡萄树得以躲过哪种害虫？", a: "根瘤蚜", x: ["葡萄蛾", "果蝇", "白蚁"] },
    ],
  },
  eu_tsinandali: {
    fact: "以白羽（Rkatsiteli）和姆茨瓦涅（Mtsvane）酿造的格鲁吉亚代表性干白。名字取自19世纪引入欧洲式酿酒法的贵族庄园所在的村庄。",
    quiz: [
      { q: "19世纪在齐南达利村庄园将欧洲式葡萄酒酿造引入格鲁吉亚的贵族诗人是？", a: "亚历山大·恰夫恰瓦泽", x: ["绍塔·鲁斯塔韦利", "埃雷克勒二世", "尼科·皮罗斯马尼"] },
    ],
  },
  eu_kindzmarauli: {
    fact: "在萨佩拉维（Saperavi）发酵中途以低温终止发酵，保留葡萄本身的糖分。只在夸雷利（Kvareli）一带的指定区域酿造，是格鲁吉亚的名产红葡萄酒。",
    quiz: [
      { q: "Kindzmarauli是以哪种口感闻名的红葡萄酒？", a: "带天然甜味的半甜型", x: ["极干的干型", "加入白兰地的加强型", "带气泡的起泡型"] },
    ],
  },
  eu_pheasants_tears: {
    fact: "在西格纳吉（Sighnaghi）由格鲁吉亚农民与美国画家共同创立的酒庄。名字来自格鲁吉亚古老传说：好酒能让野鸡都落泪。",
    quiz: [
      { q: "Pheasant's Tears以传统方式用于发酵、陈酿的埋地大陶罐是？", a: "陶罐（qvevri）", x: ["小橡木桶（barrique）", "大木桶（foudre）", "索雷拉（solera）"] },
      { q: "共同创立Pheasant's Tears的美国画家是？", a: "John Wurdeman", x: ["Andy Warhol", "Keith Haring", "Jeff Koons"] },
    ],
  },
  eu_movia_puro: {
    fact: "拥有横跨斯洛文尼亚与意大利边境葡萄园的Aleš Kristančič的酒庄。Puro上市时将酵母沉淀原封不动留在瓶中。",
    quiz: [
      { q: "饮用Movia Puro之前，饮用者需要亲自做什么？", a: "把酒瓶倒持着开瓶，排出沉淀", x: ["加入糖浆", "摇晃酒瓶制造泡沫", "把软木塞泡水"] },
    ],
  },
  eu_dingac: {
    fact: "生长在佩列沙茨（Pelješac）半岛南侧、直落大海的陡坡上的普拉瓦茨马里（Plavac Mali）。1961年成为克罗地亚首个获得原产地保护的葡萄酒。",
    quiz: [
      { q: "Dingač酒标上画着的、曾在陡峭葡萄园中驮运葡萄的动物是？", a: "驴", x: ["山羊", "马", "牛"] },
    ],
  },
  eu_cricova_brut: {
    fact: "以用古老石灰岩采石场隧道改建的巨大地下葡萄酒城闻名。在总长超过100公里的地下通道中，沉睡着瓶中二次发酵的起泡酒和珍贵的收藏酒。",
    quiz: [
      { q: "1960年代造访Cricova地下酒窖的世界首位宇航员是？", a: "尤里·加加林", x: ["尼尔·阿姆斯特朗", "约翰·格伦", "阿列克谢·列昂诺夫"] },
    ],
  },
  eu_nyetimber: {
    fact: "英格兰西萨塞克斯的起泡酒酒庄。只种植与香槟相同的三个品种，以瓶中二次发酵酿造，开创了英国起泡酒的名声。",
    quiz: [
      { q: "1988年首次在Nyetimber种下香槟品种的是？", a: "美国夫妇Stuart与Sandy Moss", x: ["英国王室", "Moët & Chandon", "Taittinger家族"] },
    ],
  },
  eu_chapel_down: {
    fact: "位于英格兰肯特郡滕特登（Tenterden）的英国代表性酒庄。以与香槟相同的瓶中二次发酵法酿造起泡酒。",
    quiz: [
      { q: "Chapel Down等南英格兰起泡酒被认为与香槟区相似，是因为哪种土壤？", a: "白垩质土壤", x: ["黑色火山灰土壤", "红色板岩土壤", "河卵石冲积土"] },
    ],
  },
  us_screaming_eagle: {
    fact: "Jean Phillips在奥克维尔买下的土地上于1992年推出首个年份。2000年纳帕拍卖会上，一瓶6升装以50万美元成交，震惊世界。",
    quiz: [
      { q: "2006年收购Screaming Eagle的美国体育球队老板是？", a: "斯坦·克伦克", x: ["杰里·琼斯", "马克·库班", "罗伯特·卡夫"] },
      { q: "酿造Screaming Eagle早期年份的膜拜酒酿酒师是？", a: "Heidi Barrett", x: ["Warren Winiarski", "Mike Grgich", "Paul Draper"] },
    ],
  },
  us_harlan: {
    fact: "房地产开发商Bill Harlan于1984年在奥克维尔西侧山坡创立。以成为纳帕的“一级庄”为目标，多次获得Robert Parker的100分。",
    quiz: [
      { q: "创立Harlan Estate的Bill Harlan在1990年代新创立的另一个膜拜酒品牌是？", a: "Bond", x: ["Scarecrow", "Colgin", "Screaming Eagle"] },
      { q: "创立Harlan Estate的Bill Harlan参与创立的纳帕谷度假村是？", a: "Meadowood", x: ["Auberge du Soleil", "Carneros Inn", "Solage"] },
    ],
  },
  us_dominus: {
    fact: "曾掌管Pétrus的波尔多人Christian Moueix在扬特维尔（Yountville）昔日的Napanook葡萄园酿造的葡萄酒。首个年份是1983年。",
    quiz: [
      { q: "设计Dominus酒庄建筑的瑞士建筑师组合是？", a: "赫尔佐格和德梅隆", x: ["弗兰克·盖里", "安藤忠雄", "伦佐·皮亚诺"] },
      { q: "Dominus酒庄建筑外墙的特点是？", a: "用铁丝网笼装满玄武岩石块砌成的墙", x: ["通体玻璃幕墙", "贴满橡木桶板的墙", "清水混凝土墙"] },
    ],
  },
  us_caymus_ss: {
    fact: "掌管Caymus的Wagner家族每年只挑选最好的酒桶酿成的顶级赤霞珠，是浓郁柔顺的纳帕风格的象征。",
    quiz: [
      { q: "Caymus Special Selection在《葡萄酒观察家》创下的纪录是？", a: "唯一两度当选“年度葡萄酒”的酒款", x: ["第一款获100分的美国葡萄酒", "售价最高的美国葡萄酒", "第一款在空间站陈酿的葡萄酒"] },
    ],
  },
  us_caymus: {
    fact: "Wagner家族于1972年在卢瑟福（Rutherford）创立的酒庄。以成熟的果味和天鹅绒般的质感酿出浓郁的赤霞珠，在韩国也深受喜爱。",
    quiz: [
      { q: "Caymus这个名字来自哪里？", a: "19世纪纳帕的墨西哥赠地“Rancho Caymus”", x: ["创始人妻子的名字", "纳帕河的旧称", "Wagner家族在德国的故乡"] },
      { q: "创立并掌管Caymus的家族是？", a: "Wagner家族", x: ["Mondavi家族", "Gallo家族", "Coppola家族"] },
    ],
  },
  us_silveroak_napa: {
    fact: "只用赤霞珠一个品种，在美国橡木桶中陈酿。每逢新年份上市之日，酒庄门前都会排起长队。",
    quiz: [
      { q: "Silver Oak酒标上画的建筑是？", a: "水塔", x: ["灯塔", "风车", "教堂钟楼"] },
      { q: "Silver Oak坚持使用的陈酿橡木桶是？", a: "美国橡木桶", x: ["法国橡木桶", "斯洛文尼亚橡木桶", "匈牙利橡木桶"] },
    ],
  },
  us_silveroak_av: {
    fact: "比纳帕谷版本更柔和、更适合早饮的Silver Oak索诺玛赤霞珠。酒标上画着与纳帕版相同的水塔。",
    quiz: [
      { q: "1972年共同创立Silver Oak的两个人是？", a: "Ray Duncan与Justin Meyer", x: ["Robert Mondavi与Baron Philippe", "Jack与Dolores Cakebread", "Dan与Margaret Duckhorn"] },
    ],
  },
  us_cask23: {
    fact: "Warren Winiarski创立的Stag's Leap Wine Cellars只挑选最出色的葡萄酿造的顶级赤霞珠。首个年份是1974年。",
    quiz: [
      { q: "Cask 23这个名字来自哪里？", a: "首年表现格外出色而单独装瓶的23号桶", x: ["葡萄园的第23个地块", "创始人23日的生日", "23个月陈酿的规定"] },
      { q: "2007年与Chateau Ste. Michelle共同收购Stag's Leap Wine Cellars（Cask 23的酿造者）的意大利名门是？", a: "Antinori", x: ["Gaja", "Frescobaldi", "Biondi-Santi"] },
    ],
  },
  us_slv: {
    fact: "S.L.V.是“Stag's Leap Vineyard”的缩写。1973年份击败法国名酒后，那瓶酒被美国史密森尼博物馆收藏。",
    quiz: [
      { q: "Stag's Leap Wine Cellars S.L.V. 1973年份夺得红葡萄酒组第一的1976年盲品会是？", a: "巴黎审判", x: ["波尔多1855年分级评审", "Vinexpo大奖", "《葡萄酒观察家》年度葡萄酒"] },
      { q: "酿造S.L.V.的Stag's Leap Wine Cellars创始人Warren Winiarski原本的职业是？", a: "芝加哥大学政治学讲师", x: ["飞行员", "石油地质学家", "好莱坞电影导演"] },
    ],
  },
  us_montelena_chard: {
    fact: "在1976年的“巴黎审判”中，1973年份击败勃艮第名酒，夺得白葡萄酒组第一。这个故事还被拍成了电影。",
    quiz: [
      { q: "酿造在巴黎审判中夺冠的Chateau Montelena Chardonnay 1973年份的酿酒师是？", a: "Mike Grgich", x: ["Warren Winiarski", "Robert Mondavi", "André Tchelistcheff"] },
      { q: "讲述Chateau Montelena霞多丽在巴黎审判中夺冠的2008年电影是？", a: "《酒业风云》（Bottle Shock）", x: ["《杯酒人生》", "《美好的一年》", "《Mondovino》"] },
    ],
  },
  us_montelena_cab: {
    fact: "在卡利斯托加（Calistoga）以北圣海伦娜山麓的石砌城堡中酿造的赤霞珠。自1972年起，Barrett家族复兴了这座老酒庄并一直掌管。",
    quiz: [
      { q: "1882年创立Chateau Montelena的Alfred Tubbs的本业是？", a: "绳索制造商", x: ["铁路大亨", "金矿商", "银行家"] },
    ],
  },
  us_tokalon: {
    fact: "出自Robert Mondavi酒庄正后方、奥克维尔传奇葡萄园To Kalon的顶级赤霞珠。To Kalon是纳帕最著名的葡萄园之一。",
    quiz: [
      { q: "To Kalon这个葡萄园名是什么意思？", a: "希腊语的“最美之物”", x: ["拉丁语的“神之丘”", "西班牙语的“炎热之地”", "原住民语言的“清水”"] },
      { q: "19世纪最早开垦To Kalon葡萄园并为之命名的拓荒者是？", a: "Hamilton Crabb", x: ["George Yount", "Gustave Niebaum", "Charles Krug"] },
    ],
  },
  us_woodbridge: {
    fact: "Robert Mondavi于1979年在洛迪（Lodi）附近创立的日常葡萄酒品牌，目标是酿造人人都能轻松享用的加州葡萄酒。",
    quiz: [
      { q: "Woodbridge by Robert Mondavi中的“Woodbridge”来自什么？", a: "酒庄所在的洛迪附近的地名", x: ["创始人母亲的娘家姓", "橡木桶工坊的名字", "Mondavi家族在意大利的故乡"] },
    ],
  },
  us_insignia: {
    fact: "经营建筑公司的Joseph Phelps于1974年首次推出，被视为加州第一款冠以专属名称的波尔多式调配酒。",
    quiz: [
      { q: "2022年收购Joseph Phelps（Insignia的酿造者）的企业是？", a: "LVMH", x: ["E&J Gallo", "Constellation Brands", "Treasury Wine Estates"] },
    ],
  },
  us_heitz_martha: {
    fact: "从1966年份起就把葡萄园名写上酒标，是纳帕单一园赤霞珠的先驱。以类似薄荷和桉树的独特香气闻名。",
    quiz: [
      { q: "Heitz Martha's Vineyard中的“Martha”是谁？", a: "葡萄园主Tom May的妻子Martha May", x: ["Joe Heitz的女儿", "马萨诸塞州的岛名", "首任酿酒师的母亲"] },
    ],
  },
  us_shafer_hillside: {
    fact: "曾任芝加哥出版社高管的John Shafer于1972年在鹿跃区（Stags Leap District）山坡创立的酒庄的顶级赤霞珠。儿子Doug Shafer让它声名远扬。",
    quiz: [
      { q: "2022年收购Shafer Vineyards（Shafer Hillside Select的酿造者）的韩国企业集团是？", a: "新世界（Shinsegae）", x: ["乐天", "CJ", "SK"] },
    ],
  },
  us_diamond_creek: {
    fact: "Al Brounstein于1960年代末在钻石山（Diamond Mountain）创立的酒庄。坚持只按葡萄园分别装瓶赤霞珠。",
    quiz: [
      { q: "Diamond Creek的“Volcanic Hill”“Red Rock Terrace”“Gravelly Meadow”等葡萄园名是依据什么命名的？", a: "各不相同的土壤", x: ["采收月份", "种植年份", "酿酒师的名字"] },
    ],
  },
  us_dallavalle_maya: {
    fact: "意大利人Gustav Dalla Valle与日本籍妻子Naoko在奥克维尔东侧山丘创立，是品丽珠比例较高的膜拜酒。",
    quiz: [
      { q: "Dalla Valle“Maya”的名字来自谁？", a: "创始夫妇的女儿", x: ["创始人的母亲", "古代玛雅文明", "首任酿酒师的妻子"] },
    ],
  },
  us_bond: {
    fact: "Harlan Estate的Bill Harlan挑选纳帕“特级园”级葡萄园、逐一单独装瓶的项目。Melbury是最早的葡萄园之一。",
    quiz: [
      { q: "Bond追求的方式是？", a: "把纳帕出色的葡萄园各自单独装瓶", x: ["混合多国的葡萄", "每年更换一个品种", "在海底陈酿"] },
    ],
  },
  us_scarecrow: {
    fact: "出自卢瑟福的J.J. Cohn葡萄园，那里生长着1940年代种下的老赤霞珠。他的孙子于2003年推出首个年份。",
    quiz: [
      { q: "Scarecrow（稻草人）这个名字来自哪部电影？", a: "《绿野仙踪》", x: ["《乱世佳人》", "《卡萨布兰卡》", "《音乐之声》"] },
    ],
  },
  us_colgin_cariad: {
    fact: "由Ann Colgin掌管的纳帕膜拜酒庄酿造的波尔多式调配酒。2017年LVMH买下了Colgin Cellars的大部分股份。",
    quiz: [
      { q: "Colgin“Cariad”在威尔士语中是什么意思？", a: "爱", x: ["星星", "山丘", "龙"] },
    ],
  },
  us_sine_qua_non: {
    fact: "奥地利人Manfred Krankl于1994年创立的罗讷风格膜拜酒。名字在拉丁语中意为“不可或缺之物”。",
    quiz: [
      { q: "Sine Qua Non最独特之处是？", a: "每个年份的酒名和酒标图案都不同", x: ["只用玻璃塞，不用软木塞", "每年在不同国家酿造", "只通过拍卖出售"] },
    ],
  },
  us_kistler: {
    fact: "1978年在索诺玛创立的霞多丽名门。以像勃艮第一样用天然酵母发酵、细腻而有力的霞多丽闻名。",
    quiz: [
      { q: "创立Kistler Vineyards的人物是？", a: "Steve Kistler", x: ["Jim Clendenen", "Josh Jensen", "David Lett"] },
    ],
  },
  us_farniente: {
    fact: "1885年创立后因禁酒令而荒废的奥克维尔石砌酒庄，于1979年由Gil Nickel复兴。专注于霞多丽和赤霞珠两款酒。",
    quiz: [
      { q: "Far Niente这个名字是什么意思？", a: "意大利语的“无忧无虑”", x: ["拉丁语的“遥远的土地”", "西班牙语的“小农场”", "法语的“第一次收获”"] },
    ],
  },
  us_beringer_pr: {
    fact: "1876年由来自德国美因茨的Beringer兄弟在圣海伦娜创立，是纳帕持续经营最久的酒庄，这是它的顶级赤霞珠。",
    quiz: [
      { q: "Beringer在禁酒令时期也得以不关门的原因是？", a: "获准酿造宗教仪式用酒", x: ["被用作政府农业研究所", "偷偷出口到加拿大", "向军队供应醋"] },
    ],
  },
  us_beringer_wz: {
    fact: "以红色仙粉黛葡萄酿造的甜美轻盈的粉色葡萄酒。1980年代在美国爆红，成为大众葡萄酒的代名词。",
    quiz: [
      { q: "Beringer White Zinfandel的粉红色是如何得到的？", a: "只让红色仙粉黛葡萄的果皮极短时间浸渍", x: ["加入草莓汁", "用粉色果皮的葡萄酿造", "混入桃红香槟"] },
    ],
  },
  us_sutterhome_wz: {
    fact: "由Trinchero家族的Sutter Home推广开来的元祖白仙粉黛。1980年代成为美国最受欢迎的葡萄酒。",
    quiz: [
      { q: "Sutter Home White Zinfandel拥有如今甜美口感的契机是？", a: "1975年发酵中途停止的意外", x: ["模仿冰酒的实验", "混入法国桃红的实验", "与果汁公司的合作"] },
    ],
  },
  us_duckhorn_merlot: {
    fact: "Dan与Margaret Duckhorn夫妇于1976年创立，把纳帕梅洛推上了名酒之列。每张酒标上都画着水鸟。",
    quiz: [
      { q: "2017年当选《葡萄酒观察家》“年度葡萄酒”的Duckhorn梅洛是？", a: "Three Palms Vineyard Merlot", x: ["Decoy Merlot", "Goldeneye Merlot", "Paraduxx Merlot"] },
    ],
  },
  us_cakebread: {
    fact: "Jack与Dolores Cakebread夫妇于1973年在卢瑟福创立的家族酒庄，是纳帕餐厅酒单上的常客霞多丽。",
    quiz: [
      { q: "教Cakebread Cellars创始人Jack Cakebread摄影的老师是？", a: "安塞尔·亚当斯", x: ["安妮·莱博维茨", "罗伯特·卡帕", "理查德·阿维顿"] },
    ],
  },
  us_rombauer: {
    fact: "充满黄油与香草香气的奶油风格加州霞多丽的代名词。由Koerner与Joan Rombauer夫妇于1980年创立的家族酒庄。",
    quiz: [
      { q: "Rombauer家族的亲戚Irma Rombauer所写的美国著名食谱是？", a: "《烹饪之乐》（Joy of Cooking）", x: ["《掌握法式烹饪艺术》", "《厨房机密》", "《盐、脂、酸、热》"] },
    ],
  },
  us_bv_latour: {
    fact: "1900年由法国人Georges de Latour在卢瑟福创立的BV的顶级赤霞珠。从1936年份延续至今，被视为纳帕名品赤霞珠的鼻祖。",
    quiz: [
      { q: "Beaulieu Vineyard中的“Beaulieu”在法语中是什么意思？", a: "美丽的地方", x: ["高高的山丘", "古老的泉水", "金色的田野"] },
      { q: "将Georges de Latour Private Reserve打造成杰作、出生于俄国的传奇酿酒师是？", a: "André Tchelistcheff", x: ["Warren Winiarski", "Mike Grgich", "Paul Draper"] },
    ],
  },
  us_rubicon: {
    fact: "1879年由芬兰籍船长Gustave Niebaum创立的Inglenook的顶级红葡萄酒。买下旧庄园的Coppola家族自1978年份起开始酿造。",
    quiz: [
      { q: "打造Inglenook Rubicon的电影导演是？", a: "弗朗西斯·福特·科波拉", x: ["史蒂文·斯皮尔伯格", "昆汀·塔伦蒂诺", "马丁·斯科塞斯"] },
    ],
  },
  us_ridge_montebello: {
    fact: "出自圣克鲁斯山脉高处山脊石灰岩葡萄园的赤霞珠调配酒。Paul Draper以传统方式酿造了数十年。",
    quiz: [
      { q: "Ridge Monte Bello 1971年份在2006年“巴黎审判”30周年重赛的红葡萄酒组中排名第几？", a: "第1名", x: ["第2名", "第5名", "第10名"] },
    ],
  },
  us_ridge_geyserville: {
    fact: "出自混有百年老藤的索诺玛葡萄园的仙粉黛调配酒，是Ridge自1966年延续至今的招牌仙粉黛。",
    quiz: [
      { q: "Ridge Geyserville葡萄园所在的盖瑟维尔（Geyserville）镇名来自什么？", a: "附近的间歇泉（geyser）地带", x: ["淘金矿工的名字", "西班牙传教士的名字", "旧火车站的名字"] },
    ],
  },
  us_frank_family: {
    fact: "坐落在卡利斯托加古老石砌酒庄建筑中的家族酒庄，以纳帕餐厅青睐的柔顺赤霞珠赢得人气。",
    quiz: [
      { q: "创立Frank Family Vineyards的Rich Frank以前的职业是？", a: "华特迪士尼影业总裁", x: ["职业棒球运动员", "石油地质学家", "航空公司飞行员"] },
    ],
  },
  us_jordan: {
    fact: "在仿照法国乡村城堡的建筑中酿造波尔多般优雅赤霞珠的索诺玛名门。首个年份是1976年。",
    quiz: [
      { q: "1972年创立Jordan酒庄的Tom Jordan的本业是？", a: "石油地质学家", x: ["好莱坞电影制片人", "职业高尔夫球手", "飞行员"] },
    ],
  },
  us_spottswoode: {
    fact: "位于圣海伦娜镇西端的家族酒庄。在纳帕较早开始有机种植，由女儿们接班经营。",
    quiz: [
      { q: "1972年买下Spottswoode庄园并创立酒庄的人物是？", a: "Mary Novak", x: ["Margaret Duckhorn", "Ann Colgin", "Jean Phillips"] },
    ],
  },
  us_quintessa: {
    fact: "在卢瑟福以东坐拥山丘与山谷的庄园里，以生物动力法酿造的波尔多式调配酒。首个年份是1994年。",
    quiz: [
      { q: "创立Quintessa的Agustín与Valeria Huneeus夫妇来自哪个国家？", a: "智利", x: ["阿根廷", "西班牙", "意大利"] },
    ],
  },
  us_pahlmeyer: {
    fact: "律师出身的Jayson Pahlmeyer于1980年代创立的纳帕膜拜酒庄。1990年代由明星酿酒师Helen Turley负责酿造。",
    quiz: [
      { q: "2019年收购Pahlmeyer的美国最大葡萄酒公司是？", a: "E&J Gallo", x: ["Constellation Brands", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us_schramsberg: {
    fact: "1862年创立的卡利斯托加老酒庄，于1965年由Davies夫妇复兴。在凿入山坡的洞穴酒窖中以瓶中二次发酵酿造。",
    quiz: [
      { q: "Schramsberg Blanc de Blancs在1972年被用于哪场历史性的祝酒？", a: "尼克松总统与周恩来总理的北京晚宴", x: ["阿波罗11号返航庆功宴", "柏林墙倒塌纪念仪式", "肯尼迪总统就职典礼"] },
    ],
  },
  us_chandon: {
    fact: "1973年在纳帕谷扬特维尔开业的Domaine Chandon，是法国香槟酒庄在加州创立的第一家起泡酒酒庄。",
    quiz: [
      { q: "在加州创立Domaine Chandon（Chandon Brut的酿造者）的香槟酒庄是？", a: "Moët & Chandon", x: ["Veuve Clicquot", "Taittinger", "Louis Roederer"] },
    ],
  },
  us_roederer_estate: {
    fact: "香槟酒庄Louis Roederer于1982年在门多西诺县安德森谷创立。得益于凉爽的雾气，酿出清爽的起泡酒。",
    quiz: [
      { q: "创立Roederer Estate的Louis Roederer最著名的香槟是？", a: "Cristal", x: ["Dom Pérignon", "La Grande Dame", "Belle Époque"] },
    ],
  },
  us_kosta_browne: {
    fact: "2011年当选《葡萄酒观察家》“年度葡萄酒”的索诺玛黑皮诺明星，1997年推出首个年份。",
    quiz: [
      { q: "Kosta Browne两位创始人最初酿酒的本钱是？", a: "在餐厅工作攒下的小费", x: ["彩票奖金", "硅谷股票期权", "石油生意的收益"] },
    ],
  },
  us_williams_selyem: {
    fact: "由1970年代末把在车库酿酒当作周末爱好的两位朋友创立，是把俄罗斯河谷黑皮诺推上膜拜酒之列的先驱。",
    quiz: [
      { q: "Williams Selyem这个名字来自哪里？", a: "两位创始人Burt Williams与Ed Selyem的姓氏", x: ["两块葡萄园的名字", "创始夫妇的名字", "村庄与河流的名字"] },
    ],
  },
  us_sea_smoke: {
    fact: "在圣丽塔山（Santa Rita Hills）朝南山坡以生物动力法种植的黑皮诺。只通过邮购名单销售，以难以买到而闻名。",
    quiz: [
      { q: "Sea Smoke这个名字来自什么？", a: "从海上沿圣伊内斯河涌来的雾", x: ["附近火山的烟", "山火后葡萄沾染的烟熏味", "创始人游艇的名字"] },
    ],
  },
  us_au_bon_climat: {
    fact: "1982年创立的圣巴巴拉名门。对抗过于浓重的加州潮流，坚持勃艮第般清爽的风格。",
    quiz: [
      { q: "创立Au Bon Climat、个性十足的酿酒师是？", a: "Jim Clendenen", x: ["Paul Draper", "Manfred Krankl", "Josh Jensen"] },
      { q: "Au Bon Climat在法语中是什么意思？", a: "阳光充足的好地块", x: ["小山丘上的城堡", "大海的礼物", "第一次收获"] },
    ],
  },
  us_calera: {
    fact: "在勃艮第学艺的Josh Jensen为寻找石灰岩土壤四处奔走，最终在加比兰山脉（Gavilan）高处创立的黑皮诺名门。",
    quiz: [
      { q: "Calera这个名字在西班牙语中是什么意思？", a: "石灰窑", x: ["石桥", "小泉", "红土"] },
    ],
  },
  us_meiomi: {
    fact: "混合蒙特雷、圣巴巴拉、索诺玛沿海产区的葡萄，酿出柔顺而果香浓郁的黑皮诺。2015年被卖给Constellation Brands。",
    quiz: [
      { q: "创立Meiomi的Joe Wagner所属家族经营的著名纳帕酒庄是？", a: "Caymus", x: ["Silver Oak", "Beringer", "Duckhorn"] },
      { q: "Meiomi这个名字在原住民语言中是什么意思？", a: "海岸", x: ["太阳", "葡萄", "鹰"] },
    ],
  },
  us_la_crema: {
    fact: "以凉爽的索诺玛海岸产区黑皮诺和霞多丽打响名气的品牌，以亲民价格的加州黑皮诺深受喜爱。",
    quiz: [
      { q: "收购并发展La Crema的Kendall-Jackson创始人是？", a: "杰斯·杰克逊", x: ["欧内斯特·嘉露", "罗伯特·蒙大维", "查克·瓦格纳"] },
    ],
  },
  us_apothic: {
    fact: "混合仙粉黛、西拉、赤霞珠、梅洛，呈现甜美浓郁口感的红葡萄调配酒。2000年代后期问世，引领了美国红葡萄调配酒热潮。",
    quiz: [
      { q: "Apothic这个名字取自什么？", a: "中世纪欧洲调配和存放葡萄酒的地方“apotheca”", x: ["希腊神话中的酒之女神", "创始人故乡的教堂名", "拉丁语的“黑夜”"] },
    ],
  },
  us_prisoner: {
    fact: "2000年首次推出、以仙粉黛为主的纳帕红葡萄调配酒。以浓郁柔顺的口感开启了美国红葡萄调配酒的流行。",
    quiz: [
      { q: "The Prisoner酒标上所用版画的作者、西班牙画家是？", a: "弗朗西斯科·戈雅", x: ["巴勃罗·毕加索", "迭戈·委拉斯开兹", "萨尔瓦多·达利"] },
      { q: "首创The Prisoner的酿酒师是？", a: "Dave Phinney", x: ["Chuck Wagner", "Manfred Krankl", "Heidi Barrett"] },
    ],
  },
  us_papillon: {
    fact: "创造The Prisoner的Dave Phinney所创立的Orin Swift的波尔多式纳帕调配酒。以使用强烈照片和绘画的酒标闻名。",
    quiz: [
      { q: "Orin Swift这个名字来自哪里？", a: "创始人父亲的中间名和母亲的娘家姓", x: ["两块葡萄园的名字", "创始人养的狗的名字", "小说主人公的名字"] },
      { q: "2016年收购Orin Swift的公司是？", a: "E&J Gallo", x: ["LVMH", "Constellation Brands", "Treasury Wine Estates"] },
    ],
  },
  us_josh: {
    fact: "Joseph Carr于2000年代后期推出的加州日常葡萄酒品牌，被视为美国增长最快的葡萄酒品牌之一。",
    quiz: [
      { q: "Josh Cellars中的“Josh”是谁？", a: "创始人Joseph Carr的父亲", x: ["创始人的儿子", "首任酿酒师", "创始人的爱犬"] },
    ],
  },
  us_bogle: {
    fact: "在萨克拉门托河三角洲的克拉克斯堡（Clarksburg）世代务农的Bogle家族的葡萄酒。浓郁如墨的小西拉（Petite Sirah）是其招牌。",
    quiz: [
      { q: "Bogle家族在1968年种下第一块葡萄园之前世代从事的是？", a: "务农", x: ["石油生意", "电影制作", "铁路建设"] },
    ],
  },
  us_gallo: {
    fact: "全球最大的家族经营葡萄酒公司E&J Gallo的招牌品牌。Barefoot、Apothic、Orin Swift等品牌也都属于这家公司。",
    quiz: [
      { q: "1933年创立E&J Gallo（Gallo Family Vineyards的酿造者）的兄弟是？", a: "Ernest与Julio Gallo", x: ["Robert与Peter Mondavi", "Jacob与Frederick Beringer", "Dan与Margaret Duckhorn"] },
      { q: "Gallo兄弟开设酒庄的1933年，美国结束了什么？", a: "禁酒令", x: ["南北战争", "大萧条", "第二次世界大战"] },
    ],
  },
  us_grgich: {
    fact: "酿造出巴黎审判冠军霞多丽的克罗地亚人Mike Grgich于1977年7月4日创立。他总戴着的贝雷帽是他的标志。",
    quiz: [
      { q: "与Mike Grgich共同创立Grgich Hills的Austin Hills家族从事什么生意？", a: "Hills Bros.咖啡", x: ["希尔顿酒店", "好时巧克力", "可口可乐装瓶"] },
    ],
  },
  us_kenzo: {
    fact: "建在纳帕谷东南山麓大片土地上、由日本人拥有的酒庄。曾酿造Screaming Eagle的Heidi Barrett负责酿造。",
    quiz: [
      { q: "创立Kenzo Estate的辻本宪三所创办的游戏公司是？", a: "卡普空（Capcom）", x: ["任天堂", "世嘉", "科乐美"] },
    ],
  },
  us_hess: {
    fact: "瑞士企业家Donald Hess在维德山（Mount Veeder）陡坡上创立的酒庄。在比谷地凉爽的山区酿造结构紧实的赤霞珠。",
    quiz: [
      { q: "The Hess Collection酒庄建筑内以什么闻名？", a: "创始人收藏的当代艺术画廊", x: ["蒸汽机车博物馆", "地下水族馆", "天文台"] },
    ],
  },
  us_ddo: {
    fact: "勃艮第的Drouhin家族于1987年在俄勒冈邓迪山（Dundee Hills）创立的酒庄，成为勃艮第名门认可俄勒冈黑皮诺潜力的象征。",
    quiz: [
      { q: "创立Domaine Drouhin Oregon的勃艮第公司是？", a: "Maison Joseph Drouhin", x: ["Louis Jadot", "Louis Latour", "Domaine de la Romanée-Conti"] },
      { q: "长期负责Domaine Drouhin Oregon酿造的Drouhin家族女儿是？", a: "Véronique Drouhin", x: ["Anne-Claude Leflaive", "Lalou Bize-Leroy", "Marie-Thérèse Charlin"] },
    ],
  },
  us_eyrie: {
    fact: "始于1965年在威拉米特河谷首次种下黑皮诺。1975年份在1979年巴黎品鉴会上与勃艮第一较高下，让俄勒冈闻名世界。",
    quiz: [
      { q: "创立The Eyrie Vineyards、被称为“黑皮诺老爹”（Papa Pinot）的人物是？", a: "David Lett", x: ["Robert Drouhin", "Ken Evenstad", "Paul Gerrie"] },
      { q: "Eyrie在英语中是什么意思？", a: "猛禽筑在高处的巢", x: ["雾气弥漫的山谷", "古老的水车", "林中小屋"] },
    ],
  },
  us_beaux_freres: {
    fact: "名字在法语中意为“姻亲兄弟”，是Michael Etzel与妹夫一起在威拉米特河谷Ribbon Ridge创立的黑皮诺酒庄。",
    quiz: [
      { q: "与妻子的兄弟Michael Etzel共同创立Beaux Frères的著名葡萄酒评论家是？", a: "Robert Parker", x: ["Jancis Robinson", "Hugh Johnson", "James Suckling"] },
    ],
  },
  us_domaine_serene: {
    fact: "Ken与Grace Evenstad夫妇在邓迪山创立，并将其推上俄勒冈顶级黑皮诺之列的酒庄。招牌酒冠以夫妇的姓氏。",
    quiz: [
      { q: "Domaine Serene中的“Serene”来自谁的名字？", a: "创始夫妇的女儿Serena", x: ["创始人的母亲", "希腊神话中的月亮女神", "俄勒冈的旧地名"] },
    ],
  },
  us_cristom: {
    fact: "1992年Paul Gerrie在伊奥拉-阿米蒂山（Eola-Amity Hills）创立的酒庄。每块葡萄园都以Jessie、Louise、Marjorie等家族女性的名字命名。",
    quiz: [
      { q: "Cristom这个名字是怎么来的？", a: "合并了创始人子女Christine与Tom的名字", x: ["来自一座基督教修道院的名字", "来自水晶般清澈的泉水", "来自首任酿酒师的名字"] },
    ],
  },
  us_csm_riesling: {
    fact: "华盛顿州葡萄酒的开拓者，也是世界上酿造雷司令最多的酒庄之一。以西雅图近郊伍丁维尔（Woodinville）的城堡建筑为大本营。",
    quiz: [
      { q: "Chateau Ste. Michelle与德国Dr. Loosen携手、自1999年起酿造的雷司令是？", a: "Eroica", x: ["Insignia", "Rubicon", "Opus One"] },
    ],
  },
  us_eroica: {
    fact: "华盛顿的Chateau Ste. Michelle与摩泽尔的Ernst Loosen自1999年起合作酿造的雷司令，融合了德式的细腻与华盛顿丰富的果味。",
    quiz: [
      { q: "Eroica这个名字取自什么？", a: "贝多芬第三交响曲", x: ["莫扎特的歌剧", "瓦格纳的乐剧", "肖邦的波兰舞曲"] },
    ],
  },
  us_quilceda: {
    fact: "1978年由Alex Golitzin创立的华盛顿顶级赤霞珠生产者。多次获得Robert Parker的100分，证明了华盛顿葡萄酒的水准。",
    quiz: [
      { q: "劝创立Quilceda Creek的Alex Golitzin酿酒的舅舅、传奇酿酒师是？", a: "André Tchelistcheff", x: ["Robert Mondavi", "Warren Winiarski", "Paul Draper"] },
    ],
  },
  us_leonetti: {
    fact: "Gary Figgins于1977年创立，并将其打造成只通过邮购名单销售的华盛顿膜拜酒。儿子Chris Figgins正在接班。",
    quiz: [
      { q: "Leonetti Cellar在瓦拉瓦拉葡萄酒史上有何意义？", a: "瓦拉瓦拉第一家商业酒庄", x: ["华盛顿第一家起泡酒酒庄", "美国第一家有机认证酒庄", "第一家由法国资本创立的酒庄"] },
    ],
  },
  us_col_solare: {
    fact: "华盛顿的Chateau Ste. Michelle与意大利Antinori家族携手、自1995年份起酿造的波尔多式调配酒。使用在红山（Red Mountain）炎热山坡上生长的葡萄。",
    quiz: [
      { q: "Col Solare在意大利语中是什么意思？", a: "闪耀的山丘", x: ["红色的山", "太阳之河", "黄金山谷"] },
    ],
  },
  us_cayuse: {
    fact: "葡萄园位于瓦拉瓦拉谷俄勒冈一侧、遍布拳头大圆石的土地上的膜拜酒庄。以生物动力法打理，只通过邮购销售。",
    quiz: [
      { q: "创立Cayuse、来自香槟区的酿酒师是？", a: "Christophe Baron", x: ["Christian Moueix", "Manfred Krankl", "Robert Drouhin"] },
      { q: "Cayuse的葡萄园名“Cailloux”在法语中是什么意思？", a: "砾石（石子）", x: ["山丘", "泉水", "森林"] },
    ],
  },
  us_drfrank: {
    fact: "乌克兰出生的植物学家Konstantin Frank博士于1962年在五指湖区的库卡湖（Keuka Lake）畔创立的酒庄，是纽约雷司令的开拓者。",
    quiz: [
      { q: "Konstantin Frank博士在五指湖区证明了什么？", a: "即使在寒冷的纽约也能种植欧洲酿酒葡萄", x: ["只有美国本土葡萄能耐寒", "雷司令只能在温室中成熟", "可以用苹果酒酿造香槟"] },
    ],
  },
};

export default T;
