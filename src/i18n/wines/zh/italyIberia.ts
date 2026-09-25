import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  ib_sorisanlorenzo: {
    fact: "Gaja于1967年首次推出的单一园葡萄酒。曾一度混入少量巴贝拉、以“Langhe Nebbiolo”名义出品，自2013年份起重新回归巴巴莱斯科。",
    quiz: [
      { q: "Gaja Sorì San Lorenzo中的“Sorì”在皮埃蒙特方言中是什么意思？", a: "阳光充足的朝南山坡", x: ["雾气弥漫的山谷", "教堂前院", "古老的葡萄树"] },
    ],
  },
  ib_monfortino: {
    fact: "Giacomo Conterno以塞拉伦加的葡萄酿造的巴罗洛珍藏（Riserva）。在大木桶中陈酿多年后才上市，是传统派巴罗洛的巅峰。",
    quiz: [
      { q: "Monfortino Barolo Riserva在什么样的年份酿造？", a: "只在收成出色的年份", x: ["每年都酿", "恰好每两年一次", "只在闰年"] },
      { q: "Giovanni Conterno买下、为Monfortino提供葡萄的塞拉伦加葡萄园是？", a: "Cascina Francia", x: ["Monprivato", "Brunate", "Cannubi"] },
    ],
  },
  ib_giacosa: {
    fact: "以收购葡萄酿酒的酒商身份建立声誉的内比奥罗大师Bruno Giacosa，在塞拉伦加亲自置办的Falletto园所出的巴罗洛。",
    quiz: [
      { q: "Bruno Giacosa只给最出色年份的珍藏酒使用的酒标颜色是？", a: "红色", x: ["黑色", "金色", "蓝色"] },
    ],
  },
  ib_bartolomascarello: {
    fact: "坚持混合多块葡萄园的葡萄、只酿一款巴罗洛的老派做法，是传统派的象征。Bartolo去世后由女儿Maria Teresa接手。",
    quiz: [
      { q: "Bartolo Mascarello在亲手绘制的酒标上写下、引发热议的标语是？", a: "No Barrique, No Berlusconi", x: ["Terroir or Nothing", "Viva il Nebbiolo", "Slow Wine, Slow Life"] },
    ],
  },
  ib_monprivato: {
    fact: "几乎独占卡斯蒂利奥内法莱托Monprivato园的Mascarello家族的代表作，被视为优雅芬芳的传统派巴罗洛。",
    quiz: [
      { q: "Giuseppe Mascarello只在好年份以Monprivato中最佳地块酿造的珍藏酒是？", a: "Cà d'Morissio", x: ["Monfortino", "Bricco Rocche", "La Poja"] },
    ],
  },
  ib_vietti: {
    fact: "在Alfredo Currado带领下较早推出单一园巴罗洛的卡斯蒂利奥内法莱托名门。2016年被美国的Krause家族收购。",
    quiz: [
      { q: "Vietti的Alfredo Currado让哪个险些消失的皮埃蒙特白葡萄品种重获新生？", a: "阿内斯（Arneis）", x: ["柯蒂斯（Cortese）", "莫斯卡托（Moscato）", "帝莫拉索（Timorasso）"] },
    ],
  },
  ib_piocesare: {
    fact: "至今仍在阿尔巴老城区、保留着古罗马城墙的酒窖里酿酒的家族酒庄，由创始人的后代世代经营。",
    quiz: [
      { q: "Cesare Pio在阿尔巴创立Pio Cesare是在哪一年？", a: "1881年", x: ["1781年", "1931年", "1971年"] },
    ],
  },
  ib_marchesibarolo: {
    fact: "承袭巴罗洛村Falletti侯爵家族旧酒窖的酒庄。相传正是在这里，巴罗洛确立了可长期陈年的干红风格。",
    quiz: [
      { q: "在Marchesi di Barolo的故事中，Giulia Colbert Falletti侯爵夫人送给卡洛·阿尔贝托国王多少桶酒？", a: "325桶（除大斋期外每天一桶）", x: ["12桶（每月一桶）", "52桶（每周一桶）", "1000桶"] },
    ],
  },
  ib_fontanafredda: {
    fact: "始于阿尔巴附近塞拉伦加王室庄园的酒庄。国王与情人所生的儿子Mirafiori伯爵正式开启了这里的葡萄酒酿造。",
    quiz: [
      { q: "买下Fontanafredda庄园并送给情人“Bela Rosin”的国王是？", a: "维托里奥·埃马努埃莱二世", x: ["翁贝托一世", "卡洛·阿尔贝托", "拿破仑三世"] },
    ],
  },
  ib_scavino: {
    fact: "卡斯蒂利奥内法莱托的家族酒庄。以使用小橡木桶的现代派巴罗洛，引领了1980至90年代的“巴罗洛男孩”潮流。",
    quiz: [
      { q: "掌管Paolo Scavino、以现代派巴罗洛成名的酿酒师是？", a: "Enrico Scavino", x: ["Elio Altare", "Roberto Voerzio", "Bruno Giacosa"] },
    ],
  },
  ib_ceretto: {
    fact: "由Bruno和Marcello Ceretto兄弟发扬光大的阿尔巴名门。在拉莫拉的Brunate园里，矗立着这个家族拥有的色彩缤纷的“巴罗洛小教堂”。",
    quiz: [
      { q: "Ceretto家族委托将Brunate园中的小教堂涂成缤纷色彩的艺术家是？", a: "索尔·勒维特与大卫·特雷姆莱特", x: ["凯斯·哈林与安迪·沃霍尔", "达米恩·赫斯特", "杰夫·昆斯"] },
    ],
  },
  ib_altare: {
    fact: "在拉莫拉引入短时间浸渍与小型新橡木桶、引领现代派巴罗洛的“巴罗洛男孩”领袖。他为此与父亲发生了激烈冲突。",
    quiz: [
      { q: "Elio Altare为坚持新方法而用电锯毁掉的是？", a: "父亲的老旧大木桶（botti）", x: ["葡萄园里的老树", "酒厂的屋顶", "旧葡萄压榨机"] },
    ],
  },
  ib_voerzio: {
    fact: "拉莫拉的Roberto Voerzio酿造的单一园巴罗洛。Cerequio是横跨拉莫拉与巴罗洛村交界的著名葡萄园。",
    quiz: [
      { q: "Roberto Voerzio以哪种葡萄园管理方式出名？", a: "大刀阔斧地疏果，将产量降到极低", x: ["先冻结葡萄再采收", "每天浇水", "只用机器采收"] },
    ],
  },
  ib_produttori: {
    fact: "巴巴莱斯科村的种植者共同酿酒的合作社。好年份会分别推出Asili、Rabajà等九块葡萄园的珍藏酒。",
    quiz: [
      { q: "1958年与农民们一起创立Produttori del Barbaresco的人物是？", a: "村里教堂的神父", x: ["意大利国王", "Angelo Gaja", "英国葡萄酒商"] },
    ],
  },
  ib_braida: {
    fact: "Giacomo Bologna把巴贝拉从普通餐酒提升为高级葡萄酒的代表作，1982年份首次亮相。",
    quiz: [
      { q: "Braida的Giacomo Bologna在Bricco dell'Uccellone上首次尝试、引发热议的做法是？", a: "将巴贝拉放在小型新橡木桶（barrique）中陈酿", x: ["用巴贝拉酿起泡酒", "风干葡萄后酿造", "与白葡萄混酿"] },
    ],
  },
  ib_cascinetta: {
    fact: "酒精度约5%、带着细微气泡的甜型阿斯蒂莫斯卡托。在发酵中途停止发酵，保留了葡萄的甜味与花香。",
    quiz: [
      { q: "像Vietti Moscato d'Asti Cascinetta这样气泡微弱的葡萄酒，在意大利被称为？", a: "Frizzante（微起泡）", x: ["Passito（风干甜酒）", "Ripasso（回酿）", "Recioto（风干甜红）"] },
    ],
  },
  ib_martiniasti: {
    fact: "将莫斯卡托葡萄在大型密闭罐中一次发酵、锁住气泡的甜型起泡酒。酒精度约7%，口感轻盈。",
    quiz: [
      { q: "酿造Martini Asti的Martini & Rossi闻名世界的酒是？", a: "味美思（Vermouth）", x: ["格拉帕（Grappa）", "柠檬甜酒（Limoncello）", "桑布卡（Sambuca）"] },
      { q: "酿造Martini Asti的Martini & Rossi在都灵创立于哪一年？", a: "1863年", x: ["1763年", "1923年", "1963年"] },
    ],
  },
  ib_ganciaasti: {
    fact: "总部位于阿斯蒂地区卡内利的意大利起泡酒（spumante）先驱。创始人Carlo Gancia被誉为“意大利起泡酒之父”。",
    quiz: [
      { q: "Gancia创始人Carlo Gancia前往学习起泡酒酿造的法国城市是？", a: "兰斯", x: ["波尔多", "第戎", "里昂"] },
    ],
  },
  ib_ornellaia: {
    fact: "在保格利沿海山丘以波尔多品种酿造的超级托斯卡纳。几经易主，如今归Frescobaldi家族所有。",
    quiz: [
      { q: "1981年创立Ornellaia的人物是？", a: "Lodovico Antinori", x: ["Piero Antinori", "Mario Incisa della Rocchetta", "Angelo Gaja"] },
      { q: "Ornellaia每年请一位艺术家绘制特别酒标的项目名称是？", a: "Vendemmia d'Artista", x: ["Arte in Bottiglia", "Biennale del Vino", "Galleria Bolgheri"] },
    ],
  },
  ib_masseto: {
    fact: "在保格利山丘的一块葡萄园中只用梅洛酿造，是意大利最昂贵的红葡萄酒之一。1986年份首次亮相，如今拥有专属酒窖。",
    quiz: [
      { q: "Masseto葡萄园的特殊土壤是？", a: "泛着蓝色的黏土", x: ["黑色火山灰", "白色白垩石灰岩", "红色砂岩"] },
    ],
  },
  ib_tignanello: {
    fact: "出自Antinori家族Tignanello葡萄园的超级托斯卡纳。1971年份首次亮相，改变了意大利葡萄酒的走向。",
    quiz: [
      { q: "Tignanello在1970年代被视为离经叛道的原因是？", a: "将桑娇维塞放入小橡木桶陈酿，且不混入白葡萄", x: ["风干葡萄使酒变甜", "首次使用螺旋盖", "在白葡萄酒中混入红葡萄酒"] },
    ],
  },
  ib_solaia: {
    fact: "Antinori在紧邻Tignanello的葡萄园以赤霞珠为主酿造的超级托斯卡纳，1978年份首次推出。",
    quiz: [
      { q: "Solaia 1997年份作为意大利葡萄酒首次获得的荣誉是？", a: "《葡萄酒观察家》“年度葡萄酒”第一名", x: ["Robert Parker首个100分", "被定为教廷官方弥撒用酒", "获英国王室供货认证"] },
      { q: "Solaia这个名字的意思是？", a: "阳光充足的地方", x: ["含盐的土地", "孤零零的树", "石墙内的田地"] },
    ],
  },
  ib_guadoaltasso: {
    fact: "Antinori家族在保格利庄园的招牌红葡萄酒，1990年份首次亮相。",
    quiz: [
      { q: "Guado al Tasso这个名字的意思是？", a: "獾涉过的浅滩", x: ["狐狸之丘", "狼之泉", "鹿之林"] },
    ],
  },
  ib_casanovadineri: {
    fact: "Neri家族于1970年代初在蒙塔尔奇诺创立的家族酒庄。Tenuta Nuova是出自南部葡萄园、浓郁有力的布鲁奈罗。",
    quiz: [
      { q: "Casanova di Neri Tenuta Nuova 2001在2006年获得的荣誉是？", a: "《葡萄酒观察家》“年度葡萄酒”第一名", x: ["意大利总统勋章", "威尼斯双年展大奖", "被定为教廷官方弥撒用酒"] },
    ],
  },
  ib_soldera: {
    fact: "Gianfranco Soldera在蒙塔尔奇诺用斯拉沃尼亚大橡木桶酿造的传奇桑娇维塞。与布鲁奈罗协会决裂后，改以托斯卡纳IGT出品。",
    quiz: [
      { q: "2012年Case Basse酒窖发生了什么事件？", a: "心怀怨恨的前员工打开酒桶，倒掉了多个年份的酒", x: ["洪水淹没了酒窖", "雷击引发火灾", "整个年份的酒都被偷走"] },
    ],
  },
  ib_poggiodisotto: {
    fact: "位于蒙塔尔奇诺东南部Castelnuovo dell'Abate的酒庄。以长时间浸渍和大木桶陈酿，酿出细腻的传统派布鲁奈罗。",
    quiz: [
      { q: "创立Poggio di Sotto、以传统布鲁奈罗成名的人物是？", a: "Piero Palmucci", x: ["Gianfranco Soldera", "Angelo Gaja", "Paolo De Marchi"] },
    ],
  },
  ib_banfi: {
    fact: "在蒙塔尔奇诺南部开辟出巨大庄园的酒庄，庄园内还拥有中世纪城堡Poggio alle Mura。",
    quiz: [
      { q: "1978年在蒙塔尔奇诺创立Castello Banfi的是？", a: "意大利裔美国人Mariani兄弟", x: ["Antinori家族", "法国罗斯柴尔德家族", "英国王室葡萄酒商"] },
    ],
  },
  ib_ilpoggione: {
    fact: "位于蒙塔尔奇诺南部Sant'Angelo in Colle、当地最古老的庄园之一。自19世纪末起由同一家族世代经营。",
    quiz: [
      { q: "世代拥有Il Poggione的家族是？", a: "Franceschi家族", x: ["Biondi-Santi家族", "Frescobaldi家族", "Antinori家族"] },
    ],
  },
  ib_coldorcia: {
    fact: "正如其名，坐落在俯瞰奥尔恰河山丘上的蒙塔尔奇诺大型庄园。广阔的葡萄园采用有机种植。",
    quiz: [
      { q: "1973年买下Col d'Orcia的Marone Cinzano家族原本以哪种酒闻名？", a: "仙山露（Cinzano）味美思", x: ["金巴利（Campari）", "阿佩罗（Aperol）", "菲奈特·布兰卡（Fernet-Branca）"] },
    ],
  },
  ib_castellodiama: {
    fact: "位于基安蒂盖奥莱（Gaiole in Chianti）小村阿玛的经典基安蒂名门。也以梅洛酿造的“L'Apparita”闻名。",
    quiz: [
      { q: "Castello di Ama自2000年前后引入葡萄园和宅邸、引发热议的是？", a: "世界级当代艺术家的装置作品", x: ["中世纪骑士团博物馆", "葡萄酒温泉度假村", "大型太阳能电站"] },
    ],
  },
  ib_flaccianello: {
    fact: "Giovanni Manetti在潘扎诺以100%桑娇维塞酿造的Fontodi代表作，1981年份首次亮相。",
    quiz: [
      { q: "出产Flaccianello的潘扎诺圆形斜坡的别称是？", a: "Conca d'Oro（金色盆地）", x: ["Val d'Orcia", "Colli Senesi", "Monte Amiata"] },
    ],
  },
  ib_fontalloro: {
    fact: "Castelnuovo Berardenga的Fèlsina以100%桑娇维塞酿造的酒，使用横跨经典基安蒂与Colli Senesi交界葡萄园的葡萄。",
    quiz: [
      { q: "1966年买下Fèlsina庄园的人物是？", a: "Domenico Poggiali", x: ["Piero Antinori", "Sergio Manetti", "Gianfranco Soldera"] },
    ],
  },
  ib_cepparello: {
    fact: "Paolo De Marchi以100%桑娇维塞酿造而闻名的酒。2022年被拥有Biondi-Santi的法国EPI集团收购。",
    quiz: [
      { q: "Isole e Olena这个酒庄名的由来是？", a: "合并了Isole与Olena两个小村的名字", x: ["创始人两个女儿的名字", "岛屿与橄榄树", "古修道院的名字"] },
    ],
  },
  ib_ducaleoro: {
    fact: "披着金色酒标的Ruffino顶级经典基安蒂。Ruffino是1877年由一对堂兄弟创立的托斯卡纳老牌名门。",
    quiz: [
      { q: "Ruffino Riserva Ducale中“Ducale（公爵的）”这个名字与谁有关？", a: "喜爱Ruffino葡萄酒的奥斯塔公爵", x: ["美第奇大公", "米兰公爵", "威尼斯总督"] },
    ],
  },
  ib_nipozzano: {
    fact: "出自佛罗伦萨以东鲁菲纳（Rufina）中世纪Nipozzano城堡周围葡萄园的鲁菲纳基安蒂珍藏，是Frescobaldi家族的招牌酒。",
    quiz: [
      { q: "Frescobaldi家族在托斯卡纳酿酒已有多少年？", a: "700多年", x: ["约50年", "约150年", "约300年"] },
    ],
  },
  ib_luce: {
    fact: "在蒙塔尔奇诺混合桑娇维塞与梅洛酿造的酒。名字意为“光”，酒标上画着光芒四射的太阳。",
    quiz: [
      { q: "共同打造1993年份首次亮相的Luce的两个家族是？", a: "Frescobaldi与Robert Mondavi", x: ["Antinori与Rothschild", "Gaja与Mondavi", "Frescobaldi与Rothschild"] },
    ],
  },
  ib_serrenuove: {
    fact: "Ornellaia的副牌酒，1997年份首次亮相。酿得比正牌酒更适合在年轻时享用。",
    quiz: [
      { q: "如今拥有酿造Le Serre Nuove的Ornellaia的家族是？", a: "Frescobaldi", x: ["Antinori", "Gaja", "Marzotto"] },
    ],
  },
  ib_pergoletorte: {
    fact: "Sergio Manetti以100%桑娇维塞酿造、并为此放弃经典基安蒂名称的传奇酒款，1977年份首次亮相。",
    quiz: [
      { q: "Le Pergole Torte酒标上每个年份都会更换的画是？", a: "画家Alberto Manfredi绘制的女性肖像", x: ["教堂风景版画", "葡萄串水彩画", "家族纹章"] },
    ],
  },
  ib_avignonesi: {
    fact: "蒙特普尔恰诺的代表性酒庄。自2009年起由比利时人Virginie Saverys掌管，并转向生物动力法。",
    quiz: [
      { q: "Avignonesi尤负盛名、以风干葡萄酿造并长期陈酿的托斯卡纳甜点酒是？", a: "圣酒（Vin Santo）", x: ["雷乔托（Recioto）", "马沙拉（Marsala）", "阿斯蒂莫斯卡托（Moscato d'Asti）"] },
    ],
  },
  ib_redigaffi: {
    fact: "托斯卡纳沿海苏韦雷托（Suvereto）的Tua Rita以100%梅洛酿造的膜拜酒，1994年份首次亮相。",
    quiz: [
      { q: "酿造Redigaffi的“Tua Rita”这个酒庄名的由来是？", a: "创始人Rita Tua的名字", x: ["村里教堂的名字", "古罗马大道的名字", "附近河流的名字"] },
    ],
  },
  ib_villaantinori: {
    fact: "1928年首次推出的Antinori长销托斯卡纳红葡萄酒。酒标上画着Antinori家族的宅邸。",
    quiz: [
      { q: "Antinori家族加入佛罗伦萨葡萄酒商行会、开始葡萄酒事业是在哪一年？", a: "1385年", x: ["1685年", "1885年", "1935年"] },
    ],
  },
  ib_quintarelli: {
    fact: "“威尼托大师”Giuseppe Quintarelli酿造的传奇阿玛罗尼。只在好年份酿造，在大木桶中长期陈酿后才上市。",
    quiz: [
      { q: "Giuseppe Quintarelli用品丽珠等风干葡萄、以阿玛罗尼方式酿造的酒叫什么？", a: "Alzero", x: ["La Poja", "Costasera", "Ripassa"] },
    ],
  },
  ib_dalforno: {
    fact: "Romano Dal Forno在瓦尔波利切拉东部的伊拉西谷以极度浓缩的风格酿造的膜拜级阿玛罗尼，在新橡木桶中长期陈酿。",
    quiz: [
      { q: "Romano Dal Forno年轻时受其影响最深、亦师亦友的酿酒师是？", a: "Giuseppe Quintarelli", x: ["Angelo Gaja", "Gianfranco Soldera", "Edoardo Valentini"] },
    ],
  },
  ib_allegrini: {
    fact: "Allegrini家族在经典瓦尔波利切拉的富马内（Fumane）世代酿造的阿玛罗尼。是较早推出单一园酒款的名门。",
    quiz: [
      { q: "Allegrini以100%科维纳酿造的招牌单一园酒叫什么？", a: "La Poja", x: ["Alzero", "Costasera", "Monprivato"] },
    ],
  },
  ib_bertani: {
    fact: "以上市前陈酿时间长而闻名的传统派阿玛罗尼。Bertani是较早将阿玛罗尼装瓶出售的先驱之一。",
    quiz: [
      { q: "Bertani兄弟在维罗纳创立酒庄是在哪一年？", a: "1857年", x: ["1757年", "1907年", "1957年"] },
    ],
  },
  ib_zenato: {
    fact: "总部位于加尔达湖南岸的Zenato的阿玛罗尼。1960年由Sergio Zenato创立，也以卢加纳（Lugana）白葡萄酒闻名。",
    quiz: [
      { q: "Zenato利用酿完阿玛罗尼后剩下的葡萄皮，让瓦尔波利切拉再次发酵而成的酒叫什么？", a: "Ripassa", x: ["La Poja", "Alzero", "Costasera"] },
    ],
  },
  ib_tommasi: {
    fact: "瓦尔波利切拉佩德蒙特（Pedemonte）的Tommasi家族世代酿造的阿玛罗尼。创立后的100多年来一直由家族经营。",
    quiz: [
      { q: "像Tommasi阿玛罗尼这样，将采收的葡萄风干数月以浓缩糖分的方法称为？", a: "风干法（appassimento）", x: ["索雷拉陈酿", "查马法", "贵腐"] },
    ],
  },
  ib_santamargherita: {
    fact: "1961年率先把灰皮诺酿成不经果皮接触的清澈白葡萄酒，引领了世界潮流。公司由Gaetano Marzotto伯爵于1935年创立。",
    quiz: [
      { q: "Santa Margherita这个名字取自谁？", a: "创始人Marzotto伯爵的妻子", x: ["威尼斯的守护圣人", "创始人的长女", "附近教堂的名字"] },
    ],
  },
  ib_mionetto: {
    fact: "总部位于瓦尔多比亚德内的普洛赛克名门。以在大罐中二次发酵的查马法，保留新鲜的果香。",
    quiz: [
      { q: "Mionetto Prosecco Brut酒标的标志性颜色是？", a: "橙色", x: ["黑色", "蓝色", "粉色"] },
      { q: "Francesco Mionetto在瓦尔多比亚德内创立Mionetto是在哪一年？", a: "1887年", x: ["1787年", "1937年", "1987年"] },
    ],
  },
  ib_lamarca: {
    fact: "由特雷维索一带数千户种植者组成的合作社品牌，是美国最畅销的普洛赛克之一。",
    quiz: [
      { q: "La Marca Prosecco酒标的特色颜色是？", a: "浅蓝绿色（蒂芙尼蓝系）", x: ["橙色", "黑色", "深红色"] },
    ],
  },
  ib_cartizze: {
    fact: "出自瓦尔多比亚德内最著名的山丘区Cartizze的普洛赛克。Bisol家族自16世纪起就在这一带种植葡萄。",
    quiz: [
      { q: "2014年收购Bisol、以特伦托起泡酒“Ferrari”闻名的家族是？", a: "Lunelli家族", x: ["Antinori家族", "Marzotto家族", "Frescobaldi家族"] },
    ],
  },
  ib_ninofranco: {
    fact: "瓦尔多比亚德内家族酒庄Nino Franco的招牌普洛赛克。第三代Primo Franco被视为提升普洛赛克品质的人物。",
    quiz: [
      { q: "Nino Franco在瓦尔多比亚德内创立于哪一年？", a: "1919年", x: ["1819年", "1969年", "1999年"] },
    ],
  },
  ib_tunina: {
    fact: "Silvio Jermann混合多种白葡萄酿成的弗留利代表性白葡萄调配酒。1970年代首次亮相，提升了意大利白葡萄酒的地位。",
    quiz: [
      { q: "Jermann受U2的歌启发而命名的霞多丽酒款是？", a: "Dreams", x: ["Vintage Tunina", "Terre Alte", "Rarità"] },
    ],
  },
  ib_gravner: {
    fact: "斯洛文尼亚边境小村奥斯拉维亚的Josko Gravner将丽波拉（Ribolla Gialla）带皮浸泡数月酿成的琥珀色白葡萄酒，被视为“橙酒”的先驱。",
    quiz: [
      { q: "Josko Gravner引入作为发酵、陈酿容器而引发热议的是？", a: "格鲁吉亚埋在地下的陶罐（qvevri）", x: ["不锈钢压力罐", "混凝土蛋形罐", "洋槐木桶"] },
    ],
  },
  ib_terrealte: {
    fact: "Livio Felluga混合罗萨佐（Rosazzo）山丘三个品种酿造的弗留利代表性白葡萄酒。陈年越久越显深邃。",
    quiz: [
      { q: "Livio Felluga酒标上画的是？", a: "描绘葡萄园山丘的古地图", x: ["威尼斯贡多拉", "家族纹章与狮子", "采收葡萄的农夫"] },
    ],
  },
  ib_terlano: {
    fact: "1893年由种植者联合创立的上阿迪杰合作社。以陈年数十年仍不失鲜活的白葡萄酒闻名。",
    quiz: [
      { q: "Cantina Terlano在酵母酒泥上陈酿10年以上推出的稀有系列叫什么？", a: "Rarità", x: ["Vin Santo", "Riserva Ducale", "Vecchio Samperi"] },
    ],
  },
  ib_cadelbosco: {
    fact: "Maurizio Zanella在伊塞奥湖南岸打造的弗朗齐亚柯达代表性起泡酒。与香槟一样采用瓶中二次发酵。",
    quiz: [
      { q: "Ca' del Bosco这个名字的意思是？", a: "林中之家", x: ["山丘上的城堡", "湖畔农场", "石砌的教堂"] },
      { q: "制作Ca' del Bosco入口巨大青铜大门的雕塑家是？", a: "阿纳尔多·波莫多罗", x: ["阿尔贝托·贾科梅蒂", "马里诺·马里尼", "翁贝托·波丘尼"] },
    ],
  },
  ib_bellavista: {
    fact: "弗朗齐亚柯达代表性起泡酒酒庄的基础款特酿。正如其名，酒庄坐落在“美景”尽收眼底的埃尔布斯科（Erbusco）山丘。",
    quiz: [
      { q: "1977年创立Bellavista、建筑商出身的创始人是？", a: "Vittorio Moretti", x: ["Maurizio Zanella", "Carlo Gancia", "Gaetano Marzotto"] },
    ],
  },
  ib_planeta: {
    fact: "引领1990年代西西里葡萄酒复兴的Planeta家族早期代表作，证明了西西里也能酿出世界级的白葡萄酒。",
    quiz: [
      { q: "Planeta家族的Diego Planeta长期掌管的西西里大型合作社是？", a: "Settesoli", x: ["Donnafugata", "Regaleali", "Florio"] },
    ],
  },
  ib_benrye: {
    fact: "在西西里与突尼斯之间的潘泰莱里亚岛，以晒干的Zibibbo（亚历山大麝香）酿造的甜型风干酒（passito）。",
    quiz: [
      { q: "“Ben Ryé”在阿拉伯语中是什么意思？", a: "风之子", x: ["太阳之女", "大海的礼物", "岛屿的明珠"] },
      { q: "酒庄名“Donnafugata”来自哪部小说中的庄园名？", a: "兰佩杜萨的《豹》", x: ["曼佐尼的《约婚夫妇》", "维尔加的《马拉沃利亚一家》", "艾柯的《玫瑰的名字》"] },
    ],
  },
  ib_rossodelconte: {
    fact: "Tasca d'Almerita家族在西西里内陆Regaleali庄园以黑达沃拉酿造的招牌红葡萄酒。",
    quiz: [
      { q: "Tasca家族买下西西里内陆Regaleali庄园是在哪一年？", a: "1830年", x: ["1730年", "1930年", "1980年"] },
    ],
  },
  ib_debartoli: {
    fact: "在马沙拉被当作料理酒的年代，致力于复兴高品质传统马沙拉的Marco De Bartoli的酒。",
    quiz: [
      { q: "Marco De Bartoli以不加酒精的古老“perpetuo”方式陈酿的传奇酒款叫什么？", a: "Vecchio Samperi", x: ["Rosso del Conte", "Ben Ryé", "Radici"] },
    ],
  },
  ib_florio: {
    fact: "18世纪英国商人John Woodhouse让世人认识的加强型葡萄酒马沙拉的代表酒庄。在马沙拉海边拥有巨大的酒窖。",
    quiz: [
      { q: "1833年在马沙拉建立Florio酒窖的人物是？", a: "Vincenzo Florio", x: ["John Woodhouse", "Benjamin Ingham", "Marco De Bartoli"] },
    ],
  },
  ib_passopisciaro: {
    fact: "在埃特纳火山北坡的高海拔葡萄园以马斯卡斯奈莱洛（Nerello Mascalese）酿造的红葡萄酒，是引领埃特纳葡萄酒热潮的酒庄之一。",
    quiz: [
      { q: "创立Passopisciaro的Andrea Franchetti此前在托斯卡纳开创的酒庄是？", a: "Tenuta di Trinoro", x: ["Tenuta San Guido", "Montevertine", "Fontodi"] },
    ],
  },
  ib_benanti: {
    fact: "以埃特纳火山东坡的卡利坎特（Carricante）酿造的白葡萄酒。特点是源自近海火山土壤的咸鲜而挺拔的口感。",
    quiz: [
      { q: "Benanti Pietra Marina所标注的“Etna Bianco Superiore”，唯一可以使用该名称的村庄是？", a: "米洛（Milo）", x: ["兰达佐（Randazzo）", "陶尔米纳", "卡塔尼亚"] },
    ],
  },
  ib_radici: {
    fact: "守护了战后日渐消失的坎帕尼亚本土品种的Mastroberardino招牌红葡萄酒。陶拉斯（Taurasi）于1993年成为南意大利首个DOCG。",
    quiz: [
      { q: "Mastroberardino与考古部门合作复原古葡萄园、酿造“Villa dei Misteri”葡萄酒的遗址是？", a: "庞贝", x: ["赫库兰尼姆", "帕埃斯图姆", "奥斯蒂亚古城"] },
    ],
  },
  ib_feudi: {
    fact: "以坎帕尼亚内陆伊尔皮尼亚（Irpinia）的本土白葡萄菲亚诺酿造的白葡萄酒。Feudi di San Gregorio引领了南意大利葡萄酒的新浪潮。",
    quiz: [
      { q: "Feudi di San Gregorio创立于哪一年？", a: "1986年", x: ["1886年", "1936年", "2006年"] },
    ],
  },
  ib_es: {
    fact: "Gianfranco Fino与Simona Natale夫妇以普利亚古老灌木式（alberello）老藤的普里米蒂沃酿造的浓郁红葡萄酒。",
    quiz: [
      { q: "Gianfranco Fino“Es”这个名字取自谁的理论？", a: "弗洛伊德", x: ["荣格", "尼采", "康德"] },
    ],
  },
  ib_valentini: {
    fact: "以被视为平庸品种的特雷比奥罗酿出可陈放数十年杰作的阿布鲁佐传奇。以几乎从不透露酿造方法而闻名。",
    quiz: [
      { q: "只挑选采收葡萄中最好的一小部分装瓶、使Valentini成为传奇的酿酒师是？", a: "Edoardo Valentini", x: ["Emidio Pepe", "Gianfranco Fino", "Angelo Gaja"] },
    ],
  },
  ib_emidiopepe: {
    fact: "坚守用手从果串上捋下果粒、在水泥罐中陈酿等古法的家族酒庄。把老年份酒存放在酒窖里，一点点推出。",
    quiz: [
      { q: "Emidio Pepe在阿布鲁佐酿出第一款酒是在哪一年？", a: "1964年", x: ["1904年", "1934年", "1994年"] },
    ],
  },
  ib_turriga: {
    fact: "撒丁岛南部的Argiolas家族以本土品种卡诺娜（Cannonau）为主酿造的岛上代表性红葡萄酒，1988年份首次亮相。",
    quiz: [
      { q: "参与打造Argiolas Turriga、被称为“超级托斯卡纳之父”的酿酒师是？", a: "Giacomo Tachis", x: ["Michel Rolland", "Émile Peynaud", "Peter Sisseck"] },
    ],
  },
  ib_chiarli: {
    fact: "以摩德纳附近索尔巴拉（Sorbara）的蓝布鲁斯科（Lambrusco）酿造的微起泡红葡萄酒。淡宝石红色，酸度清新。",
    quiz: [
      { q: "Cleto Chiarli在摩德纳开始酿造蓝布鲁斯科是在哪一年？", a: "1860年", x: ["1760年", "1920年", "1970年"] },
    ],
  },
  ib_valbuena: {
    fact: "Vega Sicilia在与Único相同的庄园酿造的另一款红葡萄酒。陈酿时间比Único短，上市也更早。",
    quiz: [
      { q: "Valbuena 5°中的“5”代表什么？", a: "在采收后的第五年上市", x: ["混合了五个品种", "使用树龄5年的幼树葡萄", "只用第五次采收的葡萄"] },
    ],
  },
  ib_pingus: {
    fact: "丹麦人Peter Sisseck以极老的丹魄葡萄树果实酿造的西班牙膜拜酒。自1995年首个年份起便广受世界赞誉。",
    quiz: [
      { q: "Pingus这个名字来自哪里？", a: "Peter Sisseck儿时的绰号", x: ["流经葡萄园旁的河名", "古修道院的名字", "西班牙语的“小宝石”"] },
    ],
  },
  ib_florpingus: {
    fact: "与Pingus出自同一双手的兄弟酒款，以多个村庄的老藤丹魄酿造。",
    quiz: [
      { q: "酿造Flor de Pingus的丹麦裔酿酒师是？", a: "Peter Sisseck", x: ["Álvaro Palacios", "Mariano García", "René Barbier"] },
    ],
  },
  ib_pesquera: {
    fact: "Alejandro Fernández于1970年代在Pesquera de Duero创立的酒庄，被视为让杜埃罗河岸扬名世界的功臣。",
    quiz: [
      { q: "Robert Parker将Tinto Pesquera比作哪款酒？", a: "波尔多的Pétrus", x: ["Romanée-Conti", "Château d'Yquem", "Sassicaia"] },
    ],
  },
  ib_alion: {
    fact: "Vega Sicilia于1990年代初创立的兄弟酒庄。将丹魄放在法国新橡木桶中陈酿，风味更现代。",
    quiz: [
      { q: "自1980年代起拥有Vega Sicilia与Alión的家族是？", a: "Álvarez家族", x: ["Fernández家族", "Muga家族", "Torres家族"] },
    ],
  },
  ib_aalto: {
    fact: "1999年创立的杜埃罗河岸新兴名庄。以多个村庄的老藤丹魄酿造强劲的红葡萄酒。",
    quiz: [
      { q: "共同创立Aalto、曾在Vega Sicilia掌管酿造近30年的人物是？", a: "Mariano García", x: ["Peter Sisseck", "Alejandro Fernández", "Álvaro Palacios"] },
    ],
  },
  ib_emiliomoro: {
    fact: "在杜埃罗河岸Pesquera de Duero世代种植葡萄的Moro家族的招牌红葡萄酒。",
    quiz: [
      { q: "在出产Emilio Moro的杜埃罗河岸，丹魄的当地名称是？", a: "Tinto Fino", x: ["Cencibel", "Ull de Llebre", "Tinta Roriz"] },
    ],
  },
  ib_protos: {
    fact: "1927年由佩尼亚菲耶尔（Peñafiel）的11位种植者联合创立的杜埃罗河岸第一家酒庄。在佩尼亚菲耶尔城堡下的洞穴中陈酿葡萄酒。",
    quiz: [
      { q: "Protos这个名字的意思是？", a: "希腊语的“第一”", x: ["拉丁语的“城墙”", "西班牙语的“河畔”", "阿拉伯语的“葡萄园”"] },
      { q: "设计Protos新酒厂的英国建筑师是？", a: "理查德·罗杰斯", x: ["诺曼·福斯特", "扎哈·哈迪德", "弗兰克·盖里"] },
    ],
  },
  ib_castilloygay: {
    fact: "只在好年份酿造的Marqués de Murrieta顶级酒款。其历史始于1852年洛格罗尼奥附近的Ygay庄园。",
    quiz: [
      { q: "创立Marqués de Murrieta、把波尔多式酿法引入里奥哈的人物是？", a: "Luciano de Murrieta", x: ["Alejandro Fernández", "Rafael López de Heredia", "Enrique Forner"] },
    ],
  },
  ib_rioja904: {
    fact: "1890年由五个家族在阿罗（Haro）火车站旁创立的La Rioja Alta的代表作，是在美国橡木桶中长期陈酿的传统风格。",
    quiz: [
      { q: "Gran Reserva 904中的“904”代表什么？", a: "1904年与Ardanza酒庄合并", x: ["只酿904桶", "海拔904米的葡萄园", "陈酿904天"] },
    ],
  },
  ib_tondonia: {
    fact: "1877年创立于阿罗的López de Heredia的代表作。经长时间桶陈、可陈放数十年，是传统里奥哈的象征。",
    quiz: [
      { q: "设计López de Heredia访客展馆的建筑师是？", a: "扎哈·哈迪德", x: ["弗兰克·盖里", "圣地亚哥·卡拉特拉瓦", "理查德·罗杰斯"] },
    ],
  },
  ib_cvneimperial: {
    fact: "1879年创立于阿罗火车站旁的CVNE的顶级酒款。2004年份荣登《葡萄酒观察家》“年度葡萄酒”第一名。",
    quiz: [
      { q: "CVNE是什么的缩写？", a: "北西班牙葡萄酒公司（Compañía Vinícola del Norte de España）", x: ["卡斯蒂利亚皇家葡萄酒协会", "里奥哈酒庄联合会", "四位创始人名字的首字母"] },
    ],
  },
  ib_pradoenea: {
    fact: "只在好年份酿造的Muga顶级特级珍藏（Gran Reserva）。在橡木桶中长期陈酿后，还会在瓶中再次陈年才上市。",
    quiz: [
      { q: "Muga酒厂的特别之处是？", a: "设有自制橡木桶的制桶工坊", x: ["所有酒都在陶罐中陈酿", "用直升机运送葡萄", "地下有水力发电站"] },
    ],
  },
  ib_torremuga: {
    fact: "Muga以1991年份首次推出的现代风格里奥哈。特点是深邃的颜色、丰盈的果味和法国新橡木的风味。",
    quiz: [
      { q: "1932年在阿罗创立Muga酒厂的夫妇是？", a: "Isaac Muga与Aurora Caño", x: ["Alejandro Fernández与Esperanza Rivera", "Mario Rotllant与Carmen Daurella", "Joan Juvé与Teresa Camps"] },
    ],
  },
  ib_caceres: {
    fact: "1970年Enrique Forner在塞尼塞罗（Cenicero）创立的酒庄。引入波尔多式酿法，推出果香鲜活的里奥哈。",
    quiz: [
      { q: "Marqués de Cáceres引入波尔多式酿法时提供建议的法国酿酒学家是？", a: "Émile Peynaud", x: ["Michel Rolland", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  ib_contino: {
    fact: "出自拉瓜迪亚附近埃布罗河蜿蜒流过之庄园的里奥哈。1970年代由CVNE与原庄园主家族共同创立。",
    quiz: [
      { q: "Contino被认为在里奥哈首创的葡萄酒形式是？", a: "只用单一庄园葡萄酿造的单一庄园酒", x: ["里奥哈第一款起泡酒", "里奥哈第一款甜酒", "里奥哈第一款桃红"] },
    ],
  },
  ib_remirez: {
    fact: "Fernando Remírez de Ganuza在阿拉瓦里奥哈（Rioja Alavesa）的萨马涅戈创立的酒庄。精心挑选老旧小块葡萄园的葡萄酿造。",
    quiz: [
      { q: "Remírez de Ganuza酿造珍藏酒时使用果串的哪个部位？", a: "只用果串的上半部（“肩部”）", x: ["只用果串尖端", "连梗的整串", "只用最晚成熟的果粒"] },
    ],
  },
  ib_roda: {
    fact: "位于阿罗火车站区的新兴名庄Roda的招牌珍藏酒，以老藤丹魄的葡萄酿造。",
    quiz: [
      { q: "Roda这个名字的由来是？", a: "创始夫妇Rotllant与Daurella姓氏的开头字母", x: ["西班牙语的“车轮”", "葡萄园所在村庄的名字", "附近河流的名字"] },
    ],
  },
  ib_artadi: {
    fact: "Juan Carlos López de Lacalle在拉瓜迪亚的一小块葡萄园酿造的丹魄，被视为西班牙最好的单一园葡萄酒之一。",
    quiz: [
      { q: "Artadi在2015年做出、引发热议的决定是？", a: "退出里奥哈原产地命名（DOCa）", x: ["收购一座法国酒庄", "把所有葡萄园改种白葡萄", "以皇冠盖取代软木塞"] },
    ],
  },
  ib_campoviejo: {
    fact: "1959年始于洛格罗尼奥，成长为全球最畅销的里奥哈品牌之一。以色彩缤纷的酒标为人熟知。",
    quiz: [
      { q: "Campo Viejo这个名字的意思是？", a: "古老的田野", x: ["新城堡", "红色山丘", "老骑士"] },
    ],
  },
  ib_faustino: {
    fact: "以仿佛蒙上一层霜的磨砂酒瓶一眼可辨的里奥哈特级珍藏，是自1861年传承至今的Faustino家族代表作。",
    quiz: [
      { q: "Faustino I酒标上的肖像画出自哪位画家？", a: "伦勃朗", x: ["委拉斯开兹", "戈雅", "埃尔·格列柯"] },
    ],
  },
  ib_juangil: {
    fact: "以西班牙东南部胡米利亚（Jumilla）炽烈阳光下生长的莫纳斯特雷尔（Monastrell）酿造的浓郁红葡萄酒。因银色酒标也被称为“银标”。",
    quiz: [
      { q: "Juan Gil 12 Meses中的“12 Meses（12个月）”代表什么？", a: "在橡木桶中陈酿12个月", x: ["葡萄树树龄12个月", "采收后12个月上市", "混合了12块葡萄园的葡萄"] },
    ],
  },
  ib_ermita: {
    fact: "以格拉塔洛普斯（Gratallops）陡峭板岩（llicorella）山坡上的老藤歌海娜酿造，是西班牙最昂贵的葡萄酒之一。",
    quiz: [
      { q: "Álvaro Palacios出生成长的里奥哈葡萄酒世家是？", a: "Palacios Remondo", x: ["Marqués de Riscal", "Vega Sicilia", "López de Heredia"] },
    ],
  },
  ib_closmogador: {
    fact: "1980年代末来到衰落的普里奥拉托、让这一地区重获新生的开拓者之一所创立的酒庄。以老藤歌海娜和佳丽酿酿造。",
    quiz: [
      { q: "创立Clos Mogador、引领普里奥拉托复兴的人物是？", a: "René Barbier", x: ["Peter Sisseck", "Mariano García", "Alejandro Fernández"] },
    ],
  },
  ib_closerasmus: {
    fact: "在格拉塔洛普斯陡峭的梯田葡萄园以歌海娜为主酿造的普里奥拉托膜拜酒，产量极少。",
    quiz: [
      { q: "创立Clos Erasmus的女酿酒师是？", a: "Daphne Glorian", x: ["Marisol Bueno", "Virginie Saverys", "Maria Teresa Mascarello"] },
    ],
  },
  ib_masplana: {
    fact: "Miguel A. Torres在佩内德斯的一块葡萄园以赤霞珠酿造的Torres代表作，向世界展示了西班牙红葡萄酒的潜力。",
    quiz: [
      { q: "1970年份在1979年巴黎“葡萄酒奥林匹克”上取得了什么成绩？", a: "击败波尔多名庄夺得第一", x: ["仅次于Latour获得第二", "因作弊嫌疑被取消资格", "获白葡萄酒组第一"] },
      { q: "Torres Mas La Plana以前的名字是？", a: "Gran Coronas Black Label", x: ["Sangre de Toro Reserva", "Viña Sol Gran Reserva", "Torres Imperial"] },
    ],
  },
  ib_sangredetoro: {
    fact: "1954年首次推出的Torres长销红葡萄酒。以歌海娜和佳丽酿酿造，口感柔和、果香丰富。",
    quiz: [
      { q: "Sangre de Toro瓶颈上挂着什么？", a: "一只小塑料公牛", x: ["红丝带", "迷你斗牛士帽", "软木小球"] },
      { q: "Sangre de Toro这个名字的意思是？", a: "公牛之血", x: ["红太阳", "斗牛士之心", "圣地"] },
    ],
  },
  ib_numanthia: {
    fact: "以托罗（Toro）凭借沙质土壤躲过根瘤蚜的老藤托罗红（Tinta de Toro）酿造的强劲红葡萄酒。",
    quiz: [
      { q: "Numanthia这个名字取自什么？", a: "抵抗罗马军队直到最后的古城努曼提亚", x: ["罗马传说中的国王努马", "十字军建造的要塞", "摩尔人王国的首都"] },
      { q: "2008年收购Numanthia的集团是？", a: "LVMH（Moët Hennessy）", x: ["Pernod Ricard", "Kering", "E&J Gallo"] },
    ],
  },
  ib_senorans: {
    fact: "Marisol Bueno在萨尔内斯谷（Val do Salnés）打造的阿尔巴利诺名门，被视为下海湾（Rías Baixas）的代表性白葡萄酒。",
    quiz: [
      { q: "Pazo de Señoráns中的“Pazo”是什么意思？", a: "加利西亚地区的古老贵族宅邸", x: ["葡萄园山丘", "港口仓库", "修道院花园"] },
    ],
  },
  ib_martincodax: {
    fact: "1986年由坎巴多斯（Cambados）附近的种植者联合创立的酒庄的阿尔巴利诺。以饱受大西洋海风吹拂的葡萄酿出清爽的口感。",
    quiz: [
      { q: "Martín Códax这个名字取自谁？", a: "中世纪加利西亚的吟游诗人", x: ["大航海时代的船长", "卡斯蒂利亚国王", "创立酒庄的农民"] },
    ],
  },
  ib_codorniu: {
    fact: "1872年，Josep Raventós在Codorníu首次以香槟法酿造卡瓦。Anna中混入了霞多丽，口感柔和。",
    quiz: [
      { q: "Anna de Codorníu名字中的Anna是谁？", a: "与Raventós家族联姻的Codorníu家族女继承人", x: ["加泰罗尼亚的守护圣人", "西班牙女王", "创始人的第一个孙女"] },
      { q: "设计Codorníu酒窖建筑的加泰罗尼亚现代主义建筑师是？", a: "何塞普·普伊赫·伊·卡达法尔克", x: ["安东尼·高迪", "里卡多·波菲尔", "拉斐尔·莫内奥"] },
    ],
  },
  ib_juvecamps: {
    fact: "代表圣萨杜尔尼达诺亚（Sant Sadurní d'Anoia）家族卡瓦酒庄的年份卡瓦，以不加糖的天然极干型（Brut Nature）酿造。",
    quiz: [
      { q: "Juvé & Camps这个名字的由来是？", a: "创始夫妇Joan Juvé与Teresa Camps的姓氏", x: ["两个村庄的名字", "两位共同创始好友的绰号", "两块葡萄园的名字"] },
    ],
  },
  ib_gramona: {
    fact: "在酵母酒泥上长年陈酿的Gramona代表性长陈起泡酒。特点是沙雷洛（Xarel·lo）带来的力量与深度。",
    quiz: [
      { q: "Gramona于2019年离开卡瓦产区、与其他生产者共同创立的起泡酒名称是？", a: "Corpinnat", x: ["Clàssic Penedès", "Franciacorta", "Crémant de Catalogne"] },
    ],
  },
  ib_bristolcream: {
    fact: "1796年始于英国布里斯托尔的Harveys的奶油雪莉。混合多种雪莉，口感甜美柔顺。",
    quiz: [
      { q: "Harveys Bristol Cream这个名字源自哪句话？", a: "一位贵妇说“如果布里斯托尔牛奶是牛奶，那这就是奶油”", x: ["布里斯托尔港的牛奶工厂", "创始人女儿的绰号", "女王赐予的称号"] },
      { q: "Harveys Bristol Cream酒瓶的标志色是？", a: "深蓝色", x: ["透明", "深绿色", "黑色"] },
    ],
  },
  ib_lustau: {
    fact: "在欧罗索（Oloroso）中混入佩德罗-希梅内斯，放在酒窖中最炎热潮湿的地方陈酿的甜型雪莉。",
    quiz: [
      { q: "“East India Solera”这个名字来自什么？", a: "重现装船往返东印度途中熟成的雪莉的做法", x: ["加入印度香料的雪莉", "东印度公司建造的酒窖", "用印度葡萄酿的雪莉"] },
      { q: "Lustau装瓶推介的“Almacenista”雪莉中，Almacenista指的是？", a: "只负责陈酿雪莉的小型储藏商", x: ["运送雪莉的船员", "培育酒花的酵母匠人", "制作软木塞的工匠"] },
    ],
  },
  ib_inocente: {
    fact: "以单一葡萄园的葡萄在木桶中发酵的少见菲诺雪莉。在酒花（flor）下长期陈酿，风味深邃。",
    quiz: [
      { q: "Valdespino Inocente的葡萄出自赫雷斯哪块著名葡萄园（pago）？", a: "Macharnudo", x: ["Balbaína", "Añina", "Carrascal"] },
    ],
  },
  ib_osborne: {
    fact: "大西洋海滨圣玛丽亚港（El Puerto de Santa María）的Osborne酿造的菲诺雪莉。在酒花下陈酿，轻盈而带咸鲜。",
    quiz: [
      { q: "矗立在西班牙公路旁的Osborne巨型标志广告牌是什么形状？", a: "黑色公牛", x: ["弗拉门戈舞者", "金色葡萄串", "白马"] },
      { q: "1772年创立Osborne的Thomas Osborne Mann来自哪个国家？", a: "英国", x: ["法国", "荷兰", "意大利"] },
    ],
  },
  ib_noe: {
    fact: "以晒干的佩德罗-希梅内斯葡萄酿造并长年陈酿、漆黑浓稠的甜点雪莉。",
    quiz: [
      { q: "González Byass Noé这类雪莉上的“VORS”保证了什么？", a: "平均陈酿30年以上的极老雪莉", x: ["只用单一年份的年份雪莉", "有机认证雪莉", "用贵腐葡萄酿造的雪莉"] },
    ],
  },
  ib_laguita: {
    fact: "只在瓜达尔基维尔河口的桑卢卡尔-德巴拉梅达（Sanlúcar de Barrameda）酿造的曼萨尼亚雪莉。得益于海风，酒花生长得很厚，带有咸鲜味。",
    quiz: [
      { q: "La Guita这个名字来自一个意为什么的俚语？", a: "现金（钱）", x: ["吉他（乐器）", "海风", "小酒桶"] },
    ],
  },
  ib_alvear: {
    fact: "科尔多瓦以南蒙蒂利亚-莫里莱斯（Montilla-Moriles）的名门Alvear以晒干的佩德罗-希梅内斯酿造的甜酒。",
    quiz: [
      { q: "Alvear PX Solera 1927中的“1927”代表什么？", a: "这个索雷拉开始的年份", x: ["采收葡萄的年份", "Alvear创立的年份", "装瓶的年份"] },
    ],
  },
  ib_lancers: {
    fact: "1944年瞄准美国市场而诞生的葡萄牙桃红。以看起来像陶罐的不透明酒瓶闻名。",
    quiz: [
      { q: "为Lancers之名带来灵感的委拉斯开兹画作是？", a: "《布雷达的投降》（又名《长矛》）", x: ["《宫娥》", "《纺纱女》", "《酒神的胜利》"] },
    ],
  },
  ib_barcavelha: {
    fact: "在波特酒之乡杜罗河开辟出非加强型高级红葡萄酒之路的传奇酒款。1952年首次酿造，只在杰出年份推出。",
    quiz: [
      { q: "首创Barca Velha的酿酒师是？", a: "Fernando Nicolau de Almeida", x: ["Dirk Niepoort", "José Maria da Fonseca", "Adriano Ramos Pinto"] },
      { q: "Barca Velha这个名字的意思是？", a: "古老的船", x: ["老农夫", "蓝色的河", "第一次收获"] },
    ],
  },
  ib_valemeao: {
    fact: "位于上杜罗（Douro Superior）宽阔河湾的葡萄园。长期以来，Barca Velha的葡萄都出自这里。",
    quiz: [
      { q: "1877年开辟Quinta do Vale Meão的杜罗河传奇女性是？", a: "Dona Antónia Ferreira", x: ["Giulia Colbert Falletti", "Marisol Bueno", "Anna de Codorníu"] },
    ],
  },
  ib_crasto: {
    fact: "以杜罗河畔Roquette家族葡萄园中多个本土品种混杂生长的老藤葡萄酿造的红葡萄酒。",
    quiz: [
      { q: "Quinta do Crasto著名的拍照打卡点是？", a: "俯瞰杜罗河的无边泳池", x: ["越过葡萄园的缆车", "漂在河上的水上酒窖", "中世纪城墙上的观景台"] },
    ],
  },
  ib_esporao: {
    fact: "葡萄牙南部阿连特茹广阔庄园Herdade do Esporão的招牌红葡萄酒。庄园内矗立着一座中世纪塔楼。",
    quiz: [
      { q: "Esporão Reserva酒标的特点是？", a: "每年换成不同画家的作品", x: ["始终印着同一个家族纹章", "不贴酒标，直接刻在瓶上", "用软木树皮制成"] },
    ],
  },
  ib_peramanca: {
    fact: "埃武拉（Évora）的Eugénio de Almeida基金会只在杰出年份推出的阿连特茹顶级红葡萄酒。",
    quiz: [
      { q: "Pêra-Manca这个名字源自一个意为什么的词？", a: "摇晃的石头", x: ["梨园", "跛脚的修士", "白色的塔"] },
      { q: "据传说，Pêra-Manca在1500年被装上了哪次航行？", a: "卡布拉尔发现巴西的航行", x: ["达伽马开辟印度航线", "麦哲伦环球航行", "哥伦布的首次航行"] },
    ],
  },
  ib_casalgarcia: {
    fact: "1939年首次推出的葡萄牙北部轻盈清爽的白葡萄酒。带有微微气泡，酒精度低，适合轻松畅饮。",
    quiz: [
      { q: "Casal Garcia所属的“Vinho Verde（绿酒）”中，“Verde（绿色）”指的是？", a: "年轻而新鲜的葡萄酒", x: ["用绿色葡萄酿造", "装在绿色瓶中", "带有海藻味"] },
    ],
  },
  ib_taylors20: {
    fact: "在小木桶中经年缓慢氧化陈酿，获得琥珀色和坚果、焦糖香气的茶色波特（Tawny Port）。",
    quiz: [
      { q: "Taylor's 20 Year Old Tawny Port中的“20年”代表什么？", a: "混合多年份波特后的平均陈酿年数", x: ["恰好20年前单一年份的波特", "树龄20年葡萄树的果实", "在瓶中陈酿20年"] },
    ],
  },
  ib_sixgrapes: {
    fact: "以酿造年份波特的葡萄园的葡萄酿成的珍藏宝石红波特。果味浓郁，是深受喜爱的波特入门款。",
    quiz: [
      { q: "Graham's Six Grapes这个名字的由来是？", a: "昔日标在年份级波特上的六串葡萄符号", x: ["混合了六个品种", "混合了六个年份的波特", "创始人的六个子女"] },
    ],
  },
  ib_grahamsvintage: {
    fact: "只在杰出年份“宣布”的Graham's年份波特，以杜罗河Quinta dos Malvedos的葡萄为核心。",
    quiz: [
      { q: "1820年创立Graham's的Graham兄弟原本从事什么生意？", a: "纺织品贸易", x: ["航运业", "银行业", "软木生产"] },
      { q: "自1970年起拥有Graham's的波特家族是？", a: "Symington家族", x: ["Sandeman家族", "Niepoort家族", "Guimaraens家族"] },
    ],
  },
  ib_bin27: {
    fact: "由Guimaraens家族世代掌管的波特酒庄Fonseca的珍藏波特。特点是浓郁的黑红色水果风味。",
    quiz: [
      { q: "Fonseca Bin 27在1972年上市之前，原本是为谁准备的波特？", a: "家族和朋友自饮而调配的波特", x: ["供应英国王室", "配给水手", "教廷弥撒用酒"] },
    ],
  },
  ib_dows: {
    fact: "由Symington家族掌管的波特酒庄Dow's的年份波特，以比其他波特更干的余味著称。",
    quiz: [
      { q: "作为Dow's年份波特核心的杜罗河葡萄园是？", a: "Quinta do Bomfim", x: ["Quinta do Noval", "Quinta de Vargellas", "Quinta dos Malvedos"] },
    ],
  },
  ib_sandeman: {
    fact: "1790年在伦敦创立的波特与雪莉酒庄。身披黑色斗篷的“The Don”剪影是酒标的象征。",
    quiz: [
      { q: "Sandeman的黑色剪影“The Don”身上的装束是？", a: "葡萄牙大学生斗篷与西班牙宽檐帽", x: ["苏格兰短裙与贝雷帽", "英国海军制服与三角帽", "修士长袍与兜帽"] },
      { q: "创立Sandeman的George Sandeman的故乡是？", a: "苏格兰", x: ["葡萄牙", "荷兰", "爱尔兰"] },
    ],
  },
  ib_cockburns: {
    fact: "创立于1815年的波特酒庄Cockburn's的招牌珍藏波特，如今由Symington家族掌管。",
    quiz: [
      { q: "Cockburn's在英语中的发音特点是？", a: "不读“ck”，接近“Co-burn”", x: ["每个字母都读，念成“Cock-burn”", "不读“burn”，只念“Cock”", "按葡萄牙语念成“Coc-bur-ne”"] },
    ],
  },
  ib_nacional: {
    fact: "只出自Quinta do Noval内一小块葡萄园的传奇年份波特。1931年份被视为史上最伟大的波特。",
    quiz: [
      { q: "Quinta do Noval Nacional葡萄树的特别之处是？", a: "未经嫁接，以自身根系生长", x: ["全是100年以上的白葡萄树", "在温室里生长", "每年重新种植"] },
      { q: "1993年收购Quinta do Noval的法国保险集团旗下公司是？", a: "AXA Millésimes", x: ["LVMH", "Kering", "Pernod Ricard"] },
    ],
  },
  ib_niepoort: {
    fact: "1842年创立的家族波特酒庄。第五代的Dirk Niepoort也以杜罗河的佐餐酒闻名。",
    quiz: [
      { q: "Niepoort家族源自哪个国家？", a: "荷兰", x: ["苏格兰", "德国", "丹麦"] },
      { q: "Niepoort的“Garrafeira”波特在木桶陈酿之后，长期熟成的容器是？", a: "大玻璃坛（demijohn）", x: ["埋在地下的陶罐", "海底的铁罐", "大理石水槽"] },
    ],
  },
  ib_warres: {
    fact: "Warrior是Warre's的珍藏波特，而Warre's被视为最古老的波特品牌之一，如今由Symington家族掌管。",
    quiz: [
      { q: "Warre's创立的1670年有什么意义？", a: "它是在葡萄牙创立的第一家英国波特公司", x: ["首次在波特中加入白兰地的年份", "杜罗河被定为原产地的年份", "首次宣布年份波特的年份"] },
    ],
  },
  ib_ramospinto: {
    fact: "1880年由Adriano Ramos Pinto创立的波特酒庄的茶色波特，以杜罗河Quinta do Bom Retiro的葡萄酿造。",
    quiz: [
      { q: "Ramos Pinto在20世纪初引发热议的是？", a: "新艺术风格的大胆广告海报", x: ["波特专用铁路线", "世界最大的橡木桶", "刻在波特酒瓶上的金箔地图"] },
      { q: "1990年收购Ramos Pinto的香槟酒庄是？", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  ib_blandys: {
    fact: "创立于1811年、由同一家族世代传承的马德拉酒庄。马姆齐（Malmsey）是马德拉酒中最甜的风格。",
    quiz: [
      { q: "像Blandy's这样，在向阳的阁楼里长年缓慢加温陈酿马德拉酒的传统方法是？", a: "Canteiro", x: ["索雷拉（Solera）", "风干法（Appassimento）", "查马法（Charmat）"] },
      { q: "创立Blandy's的John Blandy来自哪个国家？", a: "英国", x: ["葡萄牙", "西班牙", "法国"] },
    ],
  },
  ib_cossart: {
    fact: "马德拉最古老的酒庄之一。布尔（Bual）是甜度适中、酸度鲜活的马德拉风格。",
    quiz: [
      { q: "Cossart Gordon在马德拉创立于哪一年？", a: "1745年", x: ["1645年", "1845年", "1945年"] },
    ],
  },
};

export default T;
