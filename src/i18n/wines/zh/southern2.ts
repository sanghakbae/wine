import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  sh2_penfolds_maxs: {
    fact: "以缔造Grange的传奇首席酿酒师马克斯·舒伯特命名的Penfolds系列，延续了他混合多个产区葡萄的酿酒理念。",
    quiz: [
      { q: "Penfolds Max's之名的主人公马克斯·舒伯特在1950年代首创的澳大利亚传奇葡萄酒是？", a: "Penfolds Grange", x: ["Henschke Hill of Grace", "Wolf Blass Black Label", "Torbreck RunRig"] },
    ],
  },
  sh2_penfolds_bin128: {
    fact: "Penfolds只用库纳瓦拉葡萄酿造的设拉子。得益于库纳瓦拉凉爽的气候，比巴罗萨设拉子更芬芳优雅。",
    quiz: [
      { q: "Penfolds Bin 128 Coonawarra Shiraz的首个年份是？", a: "1962年", x: ["1932年", "1982年", "2002年"] },
    ],
  },
  sh2_penfolds_bin150: {
    fact: "Penfolds只用巴罗萨谷西北部马拉南加（Marananga）地区葡萄酿造的设拉子，以2008年份首次亮相。",
    quiz: [
      { q: "Penfolds Bin 150的“Marananga”在第一次世界大战期间改名之前使用的德语地名是？", a: "Gnadenfrei", x: ["Gnadenberg", "Hahndorf", "Neudorf"] },
    ],
  },
  sh2_penfolds_bin2: {
    fact: "在设拉子中混入马塔罗（Mataro，即慕合怀特）的Penfolds Bin系列酒款。以南澳多个产区的葡萄酿造，适合早饮。",
    quiz: [
      { q: "在像Penfolds Bin 2这样以编号相称的Penfolds酒款中，Grange的Bin编号是？", a: "Bin 95", x: ["Bin 1", "Bin 389", "Bin 707"] },
    ],
  },
  sh2_penfolds_magill: {
    fact: "出自1844年Penfold夫妇在阿德莱德近郊马吉尔（Magill）开辟的Penfolds发源地葡萄园的设拉子，是城市中罕见保留下来的葡萄园。",
    quiz: [
      { q: "创立Penfolds的Christopher Rawson Penfold原本的职业是？", a: "医生", x: ["牧师", "船长", "律师"] },
      { q: "以Penfold夫妇留在Magill Estate的小屋命名的Penfolds酒款是？", a: "Grange", x: ["St Henri", "Yattarna", "Koonunga Hill"] },
    ],
  },
  sh2_torbreck_laird: {
    fact: "以巴罗萨马拉南加的单一园设拉子酿造的Torbreck顶级酒款，在厚实的法国新橡木桶中长期陈酿。",
    quiz: [
      { q: "Torbreck The Laird中的“Laird”在苏格兰语中指谁？", a: "拥有土地的领主（地主）", x: ["放羊的牧人", "守林人", "村里的神职人员"] },
    ],
  },
  sh2_torbreck_woodcutters: {
    fact: "为纪念Torbreck创始人Dave Powell在苏格兰当伐木工的岁月而命名的巴罗萨设拉子。",
    quiz: [
      { q: "酿造Woodcutter's Shiraz的Torbreck创立于哪一年？", a: "1994年", x: ["1954年", "1974年", "2004年"] },
    ],
  },
  sh2_torbreck_factor: {
    fact: "出自巴罗萨谷多个村庄老藤设拉子的Torbreck设拉子。Torbreck的酒名大多取自苏格兰古老的乡村用语。",
    quiz: [
      { q: "Torbreck The Factor中的“Factor”在古代苏格兰是什么人？", a: "代替领主管理领地的管家", x: ["磨坊主", "村里的铁匠", "赶牛的牧人"] },
    ],
  },
  sh2_greenockcreek_roennfeldt: {
    fact: "以巴罗萨马拉南加的老藤极少量酿造的膜拜级设拉子。获得Robert Parker的100分后成为传奇。",
    quiz: [
      { q: "Greenock Creek Roennfeldt Road中的“Roennfeldt Road”是什么？", a: "从葡萄园旁经过的巴罗萨道路名", x: ["创始人故乡的德国村名", "葡萄园旁的溪流名", "酒庄旧教堂的名字"] },
    ],
  },
  sh2_rockford_basketpress: {
    fact: "Rockford用百年以上的老设备、坚守传统方法酿造的巴罗萨设拉子。主要通过酒窖门店和邮购名单销售，很难买到。",
    quiz: [
      { q: "Rockford Basket Press这个名字来自什么？", a: "旧式的篮式葡萄压榨机", x: ["搬运葡萄的大竹筐", "创始人小时候的绰号", "篮子形状的葡萄园地形"] },
    ],
  },
  sh2_peterlehmann_stonewell: {
    fact: "1970年代末巴罗萨葡萄过剩，Peter Lehmann为收购面临被丢弃的农户葡萄而创立酒庄，这是其顶级设拉子。",
    quiz: [
      { q: "Peter Lehmann酒标和标志上的扑克牌是？", a: "梅花Q", x: ["黑桃A", "红心K", "方块J"] },
    ],
  },
  sh2_grantburge_meshach: {
    fact: "Grant与Helen Burge夫妇于1988年创立的巴罗萨酒庄的顶级设拉子，以老藤葡萄酿造。",
    quiz: [
      { q: "Grant Burge Meshach中的“Meshach”是谁？", a: "Grant Burge的曾祖父", x: ["卖出第一块葡萄园的邻居农夫", "来到巴罗萨的第一位路德宗牧师", "酒庄的首任首席酿酒师"] },
    ],
  },
  sh2_langmeil_freedom: {
    fact: "出自世界上最古老之列的巴罗萨设拉子葡萄树。“自由”之名来自为寻求宗教自由而从普鲁士远渡而来的移民。",
    quiz: [
      { q: "Langmeil The Freedom 1843中的“1843”代表什么？", a: "种下葡萄树的年份", x: ["创立酒庄的年份", "首次出口的年份", "葡萄园的海拔（米）"] },
    ],
  },
  sh2_charlesmelton_ninepopes: {
    fact: "在巴罗萨的老藤歌海娜中混入设拉子与慕合怀特的罗讷风格调配酒，是Charles Melton的招牌酒。",
    quiz: [
      { q: "Charles Melton Nine Popes（九位教皇）这个名字是怎么来的？", a: "把Châteauneuf-du-Pape中的“neuf（新）”误译成了数字9", x: ["因为葡萄园受过九位教皇祝福", "因为混合了九个品种", "来自创始人收藏的九枚教皇纪念章"] },
    ],
  },
  sh2_glaetzer_amonra: {
    fact: "酿酒师Ben Glaetzer以巴罗萨老藤设拉子酿造的顶级酒款，不经过滤直接装瓶。",
    quiz: [
      { q: "Glaetzer Amon-Ra中的“Amon-Ra”是哪个神话中的神？", a: "埃及神话中的太阳神", x: ["希腊神话中的酒神", "北欧神话中的雷神", "美索不达米亚神话中的月神"] },
    ],
  },
  sh2_johnduval_entity: {
    fact: "1986至2002年间担任Penfolds首席酿酒师、负责Grange的John Duval独立后酿造的巴罗萨设拉子。",
    quiz: [
      { q: "John Duval独立前担任首席酿酒师的酒庄是？", a: "Penfolds", x: ["Wolf Blass", "Henschke", "Yalumba"] },
    ],
  },
  sh2_yalumba_octavius: {
    fact: "澳大利亚最古老的家族酒庄Yalumba以巴罗萨老藤设拉子酿造的顶级酒款。",
    quiz: [
      { q: "Yalumba The Octavius这个名字来自什么？", a: "陈酿用的小橡木桶“octave”", x: ["第八次试酿", "八块葡萄园的调配", "八年的陈酿"] },
    ],
  },
  sh2_jacobscreek_doublebarrel: {
    fact: "在葡萄酒橡木桶中陈酿后，再转入盛过其他酒的橡木桶二次陈酿，因此被称为“Double Barrel”的设拉子。",
    quiz: [
      { q: "Jacob's Creek Double Barrel Shiraz第二次陈酿所用的桶是？", a: "陈酿过威士忌的橡木桶", x: ["盛过雪莉的橡木桶", "盛过朗姆酒的橡木桶", "盛过波特的橡木桶"] },
    ],
  },
  sh2_henschke_cyril: {
    fact: "为纪念首推Hill of Grace等单一园酒款的Cyril Henschke而酿造的伊顿谷赤霞珠。",
    quiz: [
      { q: "Cyril Henschke这款酒的主人公Cyril Henschke与现任酒庄掌门Stephen Henschke是什么关系？", a: "父亲", x: ["祖父", "哥哥", "叔叔"] },
    ],
  },
  sh2_pewseyvale_riesling: {
    fact: "1847年英国移民Joseph Gilbert首次在伊顿谷山丘种下葡萄的葡萄园。1961年由Yalumba的Hill-Smith家族复兴。",
    quiz: [
      { q: "Pewsey Vale这个名字来自哪里？", a: "英格兰威尔特郡的山谷“Vale of Pewsey”", x: ["原住民语言的“清泉”", "首次采收的女儿的名字", "邻近教堂的名字"] },
    ],
  },
  sh2_darenberg_stumpjump: {
    fact: "d'Arenberg的日常调配酒。d'Arenberg的所有酒标上都有一条红色斜带。",
    quiz: [
      { q: "成为d'Arenberg The Stump Jump之名由来、在南澳发明的“树桩跳犁”是什么样的犁？", a: "碰到树桩会弹起越过的犁", x: ["只拔葡萄树间杂草的犁", "蒸汽机驱动的犁", "四头牛拉的犁"] },
    ],
  },
  sh2_darenberg_footbolt: {
    fact: "名字中蕴含着1912年买下麦克拉伦谷葡萄园、奠定d'Arenberg基础的Joseph Osborn时代故事的设拉子。",
    quiz: [
      { q: "d'Arenberg The Footbolt中的“Footbolt”原本是什么？", a: "Joseph Osborn养的赛马", x: ["葡萄园旁的小溪", "创始人的猎犬", "旧式手动压榨机"] },
    ],
  },
  sh2_wirrawirra_churchblock: {
    fact: "1894年创立后关闭的麦克拉伦谷酒庄于1969年被复兴，这是Wirra Wirra的招牌调配酒。",
    quiz: [
      { q: "1969年复兴Wirra Wirra并重新开业的人是？", a: "Greg Trott", x: ["Max Schubert", "Wolf Blass", "Peter Lehmann"] },
    ],
  },
  sh2_taylors_cs: {
    fact: "1969年Taylor家族在克莱尔谷创立的家族酒庄的赤霞珠。在英国等多个国家以“Wakefield”之名销售。",
    quiz: [
      { q: "Taylors葡萄酒在海外多国以“Wakefield”之名销售的原因是？", a: "与葡萄牙波特酒公司Taylor's重名", x: ["英国王室要求改名", "创始人改了名字", "取自首个出口港的名字"] },
    ],
  },
  sh2_mounthorrocks_cordoncut: {
    fact: "酿酒师Stephanie Toole在克莱尔谷酿造的甜型雷司令。不借助贵腐菌或霜冻，而是让葡萄在树上风干来浓缩甜味。",
    quiz: [
      { q: "Mount Horrocks Cordon Cut中的“Cordon Cut”是什么方法？", a: "剪断挂着葡萄的枝条，让葡萄留在树上风干", x: ["深夜采摘冻结的葡萄", "把摘下的葡萄摊在稻草上晾干", "只挑选长了贵腐菌的果粒采摘"] },
    ],
  },
  sh2_wynns_johnriddoch: {
    fact: "Wynns Coonawarra Estate只挑选最好的葡萄酿造的顶级赤霞珠，1982年推出首个年份。",
    quiz: [
      { q: "Wynns John Riddoch的主人公John Riddoch是谁？", a: "在库纳瓦拉首次种下葡萄的苏格兰裔拓荒者", x: ["收购Wynns的意大利企业家", "酒庄的首任首席酿酒师", "南澳首任总督"] },
    ],
  },
  sh2_shawsmith_sb: {
    fact: "表兄弟Martin Shaw与Michael Hill-Smith于1989年在阿德莱德山区创立的酒庄的招牌长相思。",
    quiz: [
      { q: "共同创立Shaw + Smith的Michael Hill-Smith于1988年成为首位获得哪项资格的澳大利亚人？", a: "葡萄酒大师（MW）", x: ["侍酒大师（MS）", "波尔多大学酿酒学学位", "Jimmy Watson Trophy"] },
    ],
  },
  sh2_brokenwood_graveyard: {
    fact: "1970年悉尼三位朋友在猎人谷创立的Brokenwood的顶级设拉子。因这片土地原本被划为公墓用地而得名“Graveyard”。",
    quiz: [
      { q: "共同创立Brokenwood的三个人的本业是？", a: "律师", x: ["医生", "银行职员", "建筑师"] },
    ],
  },
  sh2_mountpleasant_oshea: {
    fact: "为纪念猎人谷传奇酿酒师Maurice O'Shea而酿造的Mount Pleasant设拉子。O'Shea的酒被视为20世纪中叶澳大利亚最好的红葡萄酒。",
    quiz: [
      { q: "掌管Mount Pleasant的Maurice O'Shea在哪个国家学习了葡萄种植与酿酒？", a: "法国", x: ["德国", "意大利", "美国"] },
    ],
  },
  sh2_tyrrells_vat47: {
    fact: "以1971年份推出、被视为澳大利亚首款商业霞多丽的猎人谷霞多丽。",
    quiz: [
      { q: "1971年首次酿造Tyrrell's Vat 47的人是？", a: "Murray Tyrrell", x: ["Bruce Tyrrell", "Edward Tyrrell", "Max Schubert"] },
    ],
  },
  sh2_lakesfolly_cabernets: {
    fact: "1963年Max Lake在猎人谷创立的酒庄。他自称为“Lake的荒唐之举（Folly）”的这次挑战，开启了澳大利亚精品酒庄的时代。",
    quiz: [
      { q: "创立Lake's Folly的Max Lake的本业是？", a: "外科医生", x: ["律师", "银行家", "报社记者"] },
    ],
  },
  sh2_clonakilla_sv: {
    fact: "科学家John Kirk博士于1971年在堪培拉近郊创立的酒庄的代表作。在设拉子中加入少许白葡萄品种维欧尼共同发酵。",
    quiz: [
      { q: "Clonakilla Shiraz Viognier所效仿的、以在西拉中混入维欧尼的传统闻名的法国产区是？", a: "罗第丘（Côte-Rôtie）", x: ["教皇新堡", "科尔纳斯", "邦多勒"] },
    ],
  },
  sh2_xanadu_cs: {
    fact: "玛格丽特河开拓期的1970年代开业的Xanadu所酿的赤霞珠，展现了优雅而坚实的玛格丽特河赤霞珠典范。",
    quiz: [
      { q: "Xanadu这个名字来自什么？", a: "英国诗人柯勒律治的诗《忽必烈汗》", x: ["创始人的故乡村庄", "原住民语言的“海风”", "第一块葡萄园园主女儿的名字"] },
    ],
  },
  sh2_voyager_chardonnay: {
    fact: "矿业企业家Michael Wright于1991年买下并发展起来的玛格丽特河酒庄的霞多丽。白色建筑和玫瑰园让这里成为名胜。",
    quiz: [
      { q: "Voyager Estate的白色酒庄建筑是什么建筑风格？", a: "南非的开普荷兰式（Cape Dutch）", x: ["法国城堡式", "意大利托斯卡纳农舍式", "西班牙传教会式"] },
    ],
  },
  sh2_cullen_kevinjohn: {
    fact: "Cullen以生物动力法种植的葡萄酿造的顶级霞多丽，是玛格丽特河的代表性霞多丽之一。",
    quiz: [
      { q: "Cullen Kevin John这个名字是为了纪念谁？", a: "共同创立酒庄的医生Kevin Cullen", x: ["帮忙首次采收的邻居农夫", "创始人的第一个孙子", "玛格丽特河的首位酿酒师"] },
    ],
  },
  sh2_vassefelix_heytesbury: {
    fact: "玛格丽特河第一家酒庄Vasse Felix以最佳地块葡萄酿造的顶级霞多丽。",
    quiz: [
      { q: "Vasse Felix Heytesbury中的“Heytesbury”是什么？", a: "自1987年起拥有Vasse Felix的Holmes à Court家族的公司名", x: ["玛格丽特河近海的灯塔", "首任酿酒师的故乡村庄", "原住民语言的“白沙”"] },
    ],
  },
  sh2_tahbilk_marsanne: {
    fact: "1860年创立的维多利亚州历史性酒庄。打理着包括1927年种下的葡萄树在内、世界上面积数一数二的玛珊（Marsanne）葡萄园。",
    quiz: [
      { q: "自1925年起世代经营Tahbilk的家族是？", a: "Purbrick家族", x: ["Brown家族", "Henschke家族", "Hardy家族"] },
    ],
  },
  sh2_yarrayering_dr1: {
    fact: "Bailey Carrodus博士于1969年在雅拉谷（Yarra Valley）创立的酒庄的赤霞珠调配酒。酒标上不写品种，只写“Dry Red No. 1”。",
    quiz: [
      { q: "创立Yarra Yering的Bailey Carrodus原本的职业是？", a: "植物学家", x: ["外科医生", "律师", "矿山工程师"] },
    ],
  },
  sh2_mountmary_quintet: {
    fact: "医生John Middleton博士于1971年种下葡萄而起步的雅拉谷Mount Mary的波尔多式调配酒。产量很少，主要卖给邮购名单上的顾客。",
    quiz: [
      { q: "Mount Mary Quintet中“Quintet（五重奏）”这个名字蕴含的意思是？", a: "混合五个波尔多品种酿造", x: ["混合五块葡萄园的葡萄", "陈酿五年", "纪念创始人的五个子女"] },
    ],
  },
  sh2_coldstreamhills_pn: {
    fact: "澳大利亚著名葡萄酒评论家James Halliday于1985年在雅拉谷创立的酒庄的黑皮诺。",
    quiz: [
      { q: "创立Coldstream Hills的James Halliday每年出版的澳大利亚葡萄酒指南是？", a: "Halliday Wine Companion", x: ["Penguin Wine Guide", "Hugh Johnson's Pocket Wine Book", "Parker's Wine Buyer's Guide"] },
    ],
  },
  sh2_yeringstation_pn: {
    fact: "坐落在雅拉谷古老农场旧址上的Yering Station的黑皮诺，在凉爽气候中呈现细腻的风味。",
    quiz: [
      { q: "Yering Station所在地在维多利亚州葡萄酒史上有何意义？", a: "1838年维多利亚州首次种植葡萄的地方", x: ["维多利亚州第一家起泡酒酒庄", "澳大利亚首位女酿酒师创立的地方", "澳大利亚首家使用螺旋盖的地方"] },
    ],
  },
  sh2_tenminutes_pn: {
    fact: "出自墨尔本以南、三面环海的莫宁顿半岛（Mornington Peninsula）凉爽葡萄园的黑皮诺。",
    quiz: [
      { q: "Ten Minutes by Tractor（拖拉机十分钟）这个名字来自哪里？", a: "最初的三块葡萄园彼此相距都在拖拉机十分钟车程内", x: ["从酒庄开拖拉机到海边只要十分钟", "采收的葡萄十分钟内就压榨", "创始人经营拖拉机公司"] },
    ],
  },
  sh2_chambers_raremuscat: {
    fact: "Chambers家族世代经营的路斯格兰（Rutherglen）Rosewood酒庄的加强型麝香葡萄酒，混合了陈放数十年的原酒。",
    quiz: [
      { q: "在路斯格兰麝香的四个陈年等级（Rutherglen、Classic、Grand、Rare）中，“Rare”属于哪一级？", a: "最高等级", x: ["最低等级", "第二等级", "第三等级"] },
    ],
  },
  sh2_seppelt_sparklingshiraz: {
    fact: "维多利亚州大西部（Great Western）的Seppelt酿造的红色起泡酒，经过长时间瓶中陈年后才推出。",
    quiz: [
      { q: "挖掘Seppelt Great Western酒庄地下长长的陈酿隧道“The Drives”的是？", a: "失业的金矿矿工", x: ["英军工兵", "被流放的囚犯", "铁路工人"] },
    ],
  },
  sh2_jansz_cuvee: {
    fact: "1986年与香槟酒庄Louis Roederer携手起步的塔斯马尼亚起泡酒酒庄。与香槟一样以瓶中二次发酵酿造。",
    quiz: [
      { q: "Jansz这个名字来自谁？", a: "首位到达塔斯马尼亚的荷兰探险家阿贝尔·扬松·塔斯曼", x: ["创立酒庄的荷兰商人", "创始人的祖父", "英国探险家詹姆斯·库克"] },
    ],
  },
  sh2_cloudybay_pn: {
    fact: "以长相思闻名的Cloudy Bay用马尔堡凉爽的南部山谷葡萄酿造的黑皮诺。",
    quiz: [
      { q: "1770年为这片海湾取名“Cloudy Bay（云湾）”的探险家是？", a: "英国的詹姆斯·库克船长", x: ["荷兰的阿贝尔·塔斯曼", "法国的迪蒙·迪尔维尔", "葡萄牙的麦哲伦"] },
    ],
  },
  sh2_seresin_sb: {
    fact: "Michael Seresin于1990年代初在马尔堡创立的酒庄的长相思。以有机与生物动力法种植葡萄，酒标上印有手印图案。",
    quiz: [
      { q: "创立Seresin Estate的Michael Seresin的本业是？", a: "电影摄影指导", x: ["建筑师", "橄榄球国家队队员", "歌剧演员"] },
    ],
  },
  sh2_nautilus_sb: {
    fact: "以鹦鹉螺（nautilus）贝壳为象征的马尔堡酒庄的长相思。",
    quiz: [
      { q: "拥有Nautilus Estate的Hill-Smith家族在澳大利亚经营的酒庄是？", a: "Yalumba", x: ["Penfolds", "Henschke", "Jacob's Creek"] },
    ],
  },
  sh2_matua_sb: {
    fact: "Ross与Bill Spence兄弟于1974年在奥克兰创立的酒庄，如今是以马尔堡长相思广为人知的大众品牌。",
    quiz: [
      { q: "Matua在1974年创下的新西兰葡萄酒史纪录是？", a: "新西兰第一款长相思", x: ["新西兰第一款螺旋盖葡萄酒", "新西兰第一款黑皮诺", "新西兰第一款起泡酒"] },
    ],
  },
  sh2_giesen_sb: {
    fact: "1981年由三兄弟在新西兰创立的家族酒庄的长相思。也以去除酒精的“0%”葡萄酒闻名。",
    quiz: [
      { q: "创立Giesen的Theo、Alex、Marcel Giesen三兄弟的故乡是？", a: "德国", x: ["荷兰", "奥地利", "瑞士"] },
    ],
  },
  sh2_spyvalley_sb: {
    fact: "马尔堡怀霍派谷（Waihopai）的家族酒庄酿造的长相思。",
    quiz: [
      { q: "Spy Valley这个名字来自哪里？", a: "山谷里情报机构的卫星通信站", x: ["战争时间谍藏身的洞穴", "创始人写的谍战小说", "偷偷采金的矿工故事"] },
    ],
  },
  sh2_astrolabe_sb: {
    fact: "马尔堡的小型家族酒庄Astrolabe酿造的长相思。",
    quiz: [
      { q: "Astrolabe这个名字来自什么？", a: "考察新西兰海岸的法国探险家迪蒙·迪尔维尔的船", x: ["詹姆斯·库克船长的船", "毛利人的传统独木舟", "创始人驾驶的游艇"] },
    ],
  },
  sh2_closhenri_sb: {
    fact: "法国卢瓦尔的Henri Bourgeois家族于2000年在马尔堡创立的酒庄的长相思。",
    quiz: [
      { q: "创立Clos Henri的Bourgeois家族世代酿酒的法国产区是？", a: "桑塞尔", x: ["夏布利", "波尔多", "阿尔萨斯"] },
    ],
  },
  sh2_babich_blacklabel: {
    fact: "1916年开业的新西兰老牌家族酒庄Babich的马尔堡长相思。",
    quiz: [
      { q: "创立Babich的Josip Babich是从哪里移民而来的？", a: "克罗地亚达尔马提亚", x: ["意大利西西里", "希腊克里特岛", "西班牙加利西亚"] },
    ],
  },
  sh2_tohu_sb: {
    fact: "Tohu Wines以马尔堡葡萄酿造的清爽长相思。",
    quiz: [
      { q: "Tohu Wines在世界葡萄酒史上保持的纪录是？", a: "世界第一个毛利人拥有的葡萄酒品牌", x: ["世界第一家纯素认证酒庄", "新西兰第一款螺旋盖葡萄酒", "南半球第一家碳中和酒庄"] },
    ],
  },
  sh2_pegasusbay_riesling: {
    fact: "Donaldson家族在基督城以北的怀帕拉（Waipara）经营的酒庄的雷司令，是略带余甜的丰满风格。",
    quiz: [
      { q: "创立Pegasus Bay的Ivan Donaldson的本业是？", a: "神经科医生", x: ["律师", "歌剧演员", "橄榄球运动员"] },
    ],
  },
  sh2_kumeuriver_mates: {
    fact: "来自克罗地亚的Brajkovich家族在奥克兰近郊库穆（Kumeu）酿造的霞多丽，被视为新西兰霞多丽的标杆。",
    quiz: [
      { q: "Kumeu River Mate's Vineyard中的“Mate”是谁？", a: "如今掌管酒庄的兄弟们的父亲Mate Brajkovich", x: ["一起开垦葡萄园的朋友们", "卖出第一块葡萄园的英国农夫", "毛利酋长"] },
    ],
  },
  sh2_trinityhill_homage: {
    fact: "出自霍克斯湾砾石地吉布利特砾石区的Trinity Hill顶级西拉，展现了新西兰西拉的潜力。",
    quiz: [
      { q: "Trinity Hill Homage Syrah是向谁致敬（homage）？", a: "掌管罗讷Paul Jaboulet Aîné的Gérard Jaboulet", x: ["埃米塔日的Gérard Chave", "罗第丘的Marcel Guigal", "教皇新堡的Jacques Perrin"] },
    ],
  },
  sh2_missionestate_syrah: {
    fact: "1851年创立并延续至今、新西兰最古老的酒庄所酿的西拉。",
    quiz: [
      { q: "创立Mission Estate的是？", a: "法国天主教传教士（圣母会）", x: ["英国圣公会牧师", "克罗地亚移民", "德国路德宗移民"] },
    ],
  },
  sh2_twopaddocks_pn: {
    fact: "在新西兰长大的演员山姆·尼尔在中奥塔哥创立的酒庄的黑皮诺。因起步于两小块牧场而得名。",
    quiz: [
      { q: "创立Two Paddocks的演员山姆·尼尔的代表作是？", a: "《侏罗纪公园》", x: ["《指环王》", "《泰坦尼克号》", "《黑客帝国》"] },
    ],
  },
  sh2_montes_alphasyrah: {
    fact: "在韩国最受欢迎的智利葡萄酒系列Montes Alpha的西拉。以沐浴空加瓜谷温暖阳光的葡萄酿得浓郁饱满。",
    quiz: [
      { q: "Montes在阿帕塔酒庄的橡木桶陈酿库里一直播放的音乐是？", a: "格里高利圣咏", x: ["莫扎特交响曲", "智利民间音乐", "爵士乐"] },
    ],
  },
  sh2_carmin_peumo: {
    fact: "Concha y Toro以Peumo葡萄园最佳地块的佳美娜酿造的标志酒款，被视为智利最好的佳美娜。",
    quiz: [
      { q: "Carmín de Peumo中的“Carmín”在西班牙语中是什么意思？", a: "胭脂红（深红色）", x: ["小花园", "红石", "老树"] },
    ],
  },
  sh2_terrunyo_carmenere: {
    fact: "Concha y Toro为展现各葡萄园个性而打造的Terrunyo系列的佳美娜，以佳美娜名产地Peumo的葡萄酿造。",
    quiz: [
      { q: "Concha y Toro Terrunyo这个名字蕴含的意思是？", a: "意为“风土（terroir）”的西班牙语terruño", x: ["马普切语的“红土”", "创始人女儿的名字", "拉丁语的“三座山丘”"] },
    ],
  },
  sh2_almaviva_epu: {
    fact: "智利Concha y Toro与波尔多Mouton Rothschild的合资酒款Almaviva推出的副牌酒。",
    quiz: [
      { q: "Almaviva EPU中的“EPU”在马普切语中是什么意思？", a: "二（2）", x: ["天空", "鹰", "河"] },
    ],
  },
  sh2_altair: {
    fact: "智利San Pedro与波尔多名门携手，在安第斯山麓卡查波阿尔谷（Cachapoal）高地开辟的葡萄园所出的标志性调配酒。",
    quiz: [
      { q: "最初与智利San Pedro共同打造Altaïr的波尔多圣埃美隆酒庄是？", a: "Château Dassault", x: ["Château Cheval Blanc", "Château Ausone", "Château Pavie"] },
      { q: "Altaïr这个名字来自什么？", a: "天鹰座中最亮的星", x: ["安第斯山的山峰", "马普切神话中的神", "智利独立英雄的马"] },
    ],
  },
  sh2_aquitania_lazuli: {
    fact: "波尔多的Paul Pontallier、Bruno Prats与智利的Felipe de Solminihac于1990年在圣地亚哥近郊创立的酒庄的赤霞珠。",
    quiz: [
      { q: "共同创立Viña Aquitania的Paul Pontallier长期担任总经理的波尔多一级庄是？", a: "Château Margaux", x: ["Château Latour", "Château Haut-Brion", "Château Mouton Rothschild"] },
      { q: "Aquitania这个名字指的是？", a: "波尔多所在的法国西南部阿基坦地区", x: ["西班牙巴斯克地区", "智利南部的岛屿", "意大利托斯卡纳的古称"] },
    ],
  },
  sh2_gatonegro_cs: {
    fact: "智利San Pedro的日常葡萄酒品牌，是出口到世界多国的智利代表性大众葡萄酒。",
    quiz: [
      { q: "Gato Negro在西班牙语中是什么意思？", a: "黑猫", x: ["黑马", "黑色公牛", "黑鹰"] },
    ],
  },
  sh2_cousinomacul_finisterrae: {
    fact: "智利历史性酒庄Cousiño-Macul以迈坡谷葡萄酿造、以赤霞珠为主的高端调配酒。",
    quiz: [
      { q: "Finis Terrae在拉丁语中是什么意思？", a: "天涯海角（世界的尽头）", x: ["好地方", "红土", "大地的礼物"] },
    ],
  },
  sh2_santarita_triplec: {
    fact: "Santa Rita以迈坡谷葡萄酿造的高端调配酒。在智利少见地以品丽珠为核心。",
    quiz: [
      { q: "Santa Rita Triple C这个名字来自哪里？", a: "混合了三个以C开头的品种", x: ["分三次采收", "三位创始人的首字母", "混合了三块葡萄园（Campo）的葡萄"] },
    ],
  },
  sh2_ventisquero_pangea: {
    fact: "智利Ventisquero与出身澳大利亚Penfolds的酿酒师John Duval合作，以阿帕塔葡萄酿造的西拉。",
    quiz: [
      { q: "Ventisquero Pangea这个名字蕴含的意思是？", a: "大陆分裂前连成一体的超大陆", x: ["希腊神话中的海之女神", "马普切语的“高山”", "拉丁语的“所有葡萄”"] },
    ],
  },
  sh2_losvascos_cs: {
    fact: "空加瓜谷Los Vascos酒庄酿造的赤霞珠。它被视为波尔多一级庄的主人家族在智利买下的第一家酒庄。",
    quiz: [
      { q: "1988年买下Los Vascos的波尔多一级庄主人家族是？", a: "Château Lafite Rothschild的罗斯柴尔德家族", x: ["Château Margaux的Mentzelopoulos家族", "Château Haut-Brion的Dillon家族", "Château Latour的Pinault家族"] },
    ],
  },
  sh2_catena_alta: {
    fact: "Catena Zapata从多块高海拔葡萄园中只挑选最佳地块酿造的马尔贝克。",
    quiz: [
      { q: "酿造Catena Alta的Catena Zapata酒庄建筑是仿照什么建造的？", a: "玛雅文明的金字塔", x: ["印加的太阳神殿", "法国波尔多的城堡", "西班牙的古修道院"] },
    ],
  },
  sh2_angelicazapata: {
    fact: "Catena Zapata以高海拔葡萄园的马尔贝克酿造的酒。在橡木桶中长期陈酿，口感坚实深邃。",
    quiz: [
      { q: "Angélica Zapata Malbec Alta中的“Angélica Zapata”是谁？", a: "Nicolás Catena的母亲", x: ["Nicolás Catena的小女儿", "Nicolás Catena的妻子", "门多萨首位女酿酒师"] },
    ],
  },
  sh2_luca_malbec: {
    fact: "Catena家族的Laura Catena以乌科谷高地葡萄另行酿造的个人品牌马尔贝克。",
    quiz: [
      { q: "Laura Catena的葡萄酒品牌“Luca”这个名字来自谁？", a: "Laura Catena的儿子", x: ["Nicolás Catena的父亲", "来自意大利的第一代创始人", "第一块葡萄园的园主"] },
    ],
  },
  sh2_donapaula_malbec: {
    fact: "拥有智利Santa Rita的Claro集团在门多萨创立的酒庄的马尔贝克。",
    quiz: [
      { q: "Doña Paula这个名字是为了纪念谁？", a: "智利独立战争时藏匿120名士兵的Paula Jaraquemada", x: ["创始人的母亲", "门多萨的守护圣人", "阿根廷首位女酿酒师"] },
    ],
  },
  sh2_decero_malbec: {
    fact: "出自在门多萨阿格雷洛（Agrelo）的荒地上新开垦的Remolinos葡萄园的马尔贝克。",
    quiz: [
      { q: "Finca Decero中的“Decero”蕴含的意思是？", a: "从零开始（白手起家）", x: ["十座山丘", "黎明的露水", "白色岩石"] },
    ],
  },
  sh2_crios_malbec: {
    fact: "阿根廷首位获得酿酒学学位的女性Susana Balbo酿造的马尔贝克。",
    quiz: [
      { q: "Susana Balbo Crios中的“Crios”是什么意思？", a: "孩子们", x: ["黎明", "水晶", "风"] },
    ],
  },
  sh2_santajulia_malbec: {
    fact: "门多萨的Zuccardi家族打造的日常葡萄酒品牌，也以有机系列闻名。",
    quiz: [
      { q: "Santa Julia这个名字的主人公是？", a: "Zuccardi家族的女儿Julia Zuccardi", x: ["门多萨的守护圣人", "创始人的母亲", "意大利故乡村庄的圣女"] },
    ],
  },
  sh2_vinacobos_bramare: {
    fact: "一位在加州声名显赫的酿酒师与阿根廷朋友于1999年在门多萨创立的Viña Cobos的马尔贝克。",
    quiz: [
      { q: "创立Viña Cobos的美国著名酿酒师是？", a: "Paul Hobbs", x: ["Robert Mondavi", "Heidi Barrett", "Helen Turley"] },
    ],
  },
  sh2_yacochuya: {
    fact: "以萨尔塔卡法亚特（Cafayate）海拔2,000米上下的高地葡萄酿造的浓郁马尔贝克，由萨尔塔的Etchart家族与一位波尔多著名顾问共同打造。",
    quiz: [
      { q: "共同酿造Yacochuya的波尔多著名酿酒顾问是？", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  sh2_colome_torrontes: {
    fact: "出自萨尔塔卡尔查基谷（Calchaquí）高海拔葡萄园的特浓情（Torrontés），这是花香艳丽的阿根廷代表性白葡萄品种。",
    quiz: [
      { q: "2001年买下并复兴Bodega Colomé的瑞士企业家是？", a: "Donald Hess", x: ["Mijndert Pon", "Alexander Vik", "Eduardo Chadwick"] },
    ],
  },
  sh2_noemia: {
    fact: "以巴塔哥尼亚内格罗河（Río Negro）1930年代种下的老藤马尔贝克极少量酿造的葡萄酒。",
    quiz: [
      { q: "Noemía这个名字来自谁？", a: "共同创立酒庄的意大利仙山露家族的Noemi Marone Cinzano", x: ["原住民公主的传说", "第一块葡萄园园主的妻子", "巴塔哥尼亚的守护圣人"] },
    ],
  },
  sh2_findelmundo_malbec: {
    fact: "在巴塔哥尼亚内乌肯（Neuquén）沙漠开垦出葡萄园的酒庄的马尔贝克。风大、昼夜温差大，酒色深浓。",
    quiz: [
      { q: "“Fin del Mundo”在西班牙语中是什么意思？", a: "世界的尽头", x: ["风之地", "南方之星", "白色沙漠"] },
    ],
  },
  sh2_schroeder_saurus: {
    fact: "在巴塔哥尼亚内乌肯沙漠高原开垦葡萄园的家族酒庄Familia Schroeder的马尔贝克。",
    quiz: [
      { q: "Familia Schroeder的酒名“Saurus”来自什么？", a: "建造酒庄时发现的恐龙化石", x: ["创始人的绰号", "生活在葡萄园里的蜥蜴", "旧式石油开采设备"] },
    ],
  },
  sh2_rustenvrede_estate: {
    fact: "只酿造红葡萄酒的斯泰伦博斯赫尔德堡（Helderberg）山麓酒庄。1977年被橄榄球国家队出身的Jannie Engelbrecht买下。",
    quiz: [
      { q: "Rust en Vrede在荷兰语中是什么意思？", a: "休憩与和平", x: ["红色山丘", "风与海", "古老的磨坊"] },
    ],
  },
  sh2_delairegraff_chardonnay: {
    fact: "位于连接斯泰伦博斯与弗兰施霍克的赫尔斯霍格特（Helshoogte）山口顶端的酒庄，也以酒店和艺术品闻名。",
    quiz: [
      { q: "拥有Delaire Graff的Laurence Graff的本业是？", a: "钻石珠宝商", x: ["连锁酒店经营者", "赛马驯马师", "建筑师"] },
    ],
  },
  sh2_beyerskloof_pinotage: {
    fact: "被称为“皮诺塔吉之王”的酿酒师Beyers Truter创立的皮诺塔吉专门酒庄的日常酒。",
    quiz: [
      { q: "创立Beyerskloof的Beyers Truter长期负责酿造的斯泰伦博斯名门是？", a: "Kanonkop", x: ["Meerlust", "Vergelegen", "Rustenberg"] },
    ],
  },
  sh2_fairview_goatsdoroam: {
    fact: "名字源于一则轶事：在也以山羊奶酪闻名的Fairview农场，山羊们溜进葡萄园，专挑熟透的葡萄吃。",
    quiz: [
      { q: "Goats do Roam这个名字模仿的是哪个法国葡萄酒产区的发音？", a: "Côtes du Rhône", x: ["Châteauneuf-du-Pape", "Côte-Rôtie", "Côte de Nuits"] },
    ],
  },
  sh2_kenforrester_fmc: {
    fact: "被称为“白诗南先生”的Ken Forrester以斯泰伦博斯老藤白诗南酿造的顶级白葡萄酒。",
    quiz: [
      { q: "Ken Forrester The FMC中的“FMC”官方上是什么的缩写？", a: "Forrester Meinert Chenin", x: ["Fine Mature Chenin", "First Muscat Cuvée", "French Model Cellar"] },
    ],
  },
  sh2_demorgenzon_chenin: {
    fact: "斯泰伦博斯山丘上的酒庄DeMorgenzon以老藤白诗南酿造的白葡萄酒。名字意为“晨光”。",
    quiz: [
      { q: "DeMorgenzon在葡萄园和酒窖里日夜播放的音乐是？", a: "巴洛克音乐", x: ["爵士乐", "非洲传统鼓乐", "摇滚乐"] },
    ],
  },
  sh2_porseleinberg: {
    fact: "Boekenhoutskloof以斯瓦特兰有机种植的西拉酿造的酒。酿酒师用放在农场里的老式印刷机亲手印制酒标。",
    quiz: [
      { q: "Porseleinberg在南非荷兰语中是什么意思？", a: "瓷器山", x: ["银色河流", "风之丘", "白沙地"] },
    ],
  },
  sh2_sadie_palladius: {
    fact: "Eben Sadie混合斯瓦特兰各地多个品种老藤酿造的白葡萄调配酒，为南非白葡萄调配酒树立了标杆。",
    quiz: [
      { q: "Sadie Family两款招牌酒“Palladius”与“Columella”名字的共同点是？", a: "都是撰写农业著作的古罗马作家", x: ["都是罗马皇帝", "都是希腊神话中的神", "都是斯瓦特兰的山名"] },
    ],
  },
  sh2_allesverloren_tintabarocca: {
    fact: "斯瓦特兰里贝克-卡斯特尔（Riebeek-Kasteel）的古老家族农场以葡萄牙品种酿造的红葡萄酒，也以波特风格的加强型葡萄酒闻名。",
    quiz: [
      { q: "农场名Allesverloren是什么意思？", a: "失去了一切", x: ["无尽的葡萄园", "迷途的羊", "晚收"] },
    ],
  },
  sh2_grootconstantia_gouverneurs: {
    fact: "1685年创立、南非最古老的葡萄酒农场Groot Constantia的波尔多式调配酒。",
    quiz: [
      { q: "创立Groot Constantia农场的人是？", a: "开普总督Simon van der Stel", x: ["建立开普敦的Jan van Riebeeck", "Simon的儿子Willem Adriaan van der Stel", "矿业大亨Cecil Rhodes"] },
    ],
  },
  sh2_kleinconstantia_sb: {
    fact: "以Vin de Constance闻名的Klein Constantia在海风吹拂的康斯坦提亚山丘上酿造的长相思。",
    quiz: [
      { q: "Klein Constantia与Groot Constantia原本是什么关系？", a: "由1685年创立的同一座Constantia农场分割而来", x: ["两兄弟各自创立的农场", "一座农场买下另一座后改了名", "毫无关系、只是名字相似的农场"] },
    ],
  },
  sh2_boschendal_1685: {
    fact: "由法国胡格诺派移民开拓、位于弗兰施霍克入口的历史性农场Boschendal的霞多丽。",
    quiz: [
      { q: "Boschendal 1685中的“1685”代表什么？", a: "Boschendal农场最初建立的年份", x: ["首次出口葡萄酒的年份", "葡萄园的海拔（米）", "农场种下的葡萄树数量"] },
    ],
  },
  sh2_simonsig_kaapsevonkel: {
    fact: "1971年由Frans Malan酿造的南非首款瓶中二次发酵起泡酒，是南非“Cap Classique”的起点。",
    quiz: [
      { q: "“Kaapse Vonkel”在南非荷兰语中是什么意思？", a: "开普的闪耀", x: ["开普之星", "海上泡沫", "金色露珠"] },
    ],
  },
  sh2_ernieels_signature: {
    fact: "南非出身的世界级体育明星在斯泰伦博斯赫尔德堡山麓创立的酒庄的波尔多式调配酒。",
    quiz: [
      { q: "创立Ernie Els Wines的厄尼·埃尔斯是哪个项目的明星？", a: "高尔夫", x: ["橄榄球", "板球", "网球"] },
    ],
  },
  sh2_glenelly_ladymay: {
    fact: "曾掌管波尔多名庄的May-Eliane de Lencquesaing年近八旬时在斯泰伦博斯创立的酒庄所酿的以赤霞珠为主的调配酒，名字就来自她本人。",
    quiz: [
      { q: "创立Glenelly的May-Eliane de Lencquesaing在2007年之前掌管的波尔多波亚克二级庄是？", a: "Château Pichon Longueville Comtesse de Lalande", x: ["Château Pichon Baron", "Château Lynch-Bages", "Château Pontet-Canet"] },
    ],
  },
  sh2_lanzerac_pinotage: {
    fact: "以斯泰伦博斯历史性农场兼酒店闻名的Lanzerac的皮诺塔吉。",
    quiz: [
      { q: "Lanzerac在1961年创下的葡萄酒史纪录是？", a: "推出首款在酒标上标注“Pinotage”品种名的葡萄酒", x: ["南非首家使用螺旋盖", "推出南非首款桃红葡萄酒", "南非首家获得有机认证"] },
    ],
  },
  sh2_diemersfontein_pinotage: {
    fact: "开普敦东北方惠灵顿（Wellington）的酒庄Diemersfontein酿造的皮诺塔吉，以橡木香浓郁、口感柔顺的风格大受欢迎。",
    quiz: [
      { q: "Diemersfontein首推并带起潮流的皮诺塔吉风格被称为？", a: "咖啡皮诺塔吉", x: ["香草皮诺塔吉", "烟熏皮诺塔吉", "樱桃皮诺塔吉"] },
    ],
  },
  sh2_bouza_tannat: {
    fact: "首都蒙得维的亚近郊家族经营的精品酒庄酿造的丹娜，是让乌拉圭丹娜品质广为人知的代表。",
    quiz: [
      { q: "Bodega Bouza以在酒庄内收藏展示什么而闻名？", a: "经典老爷车", x: ["古老的酒瓶", "高乔人的马鞍", "当代艺术作品"] },
    ],
  },
  sh2_pisano_rpf: {
    fact: "意大利移民后裔Pisano家族在卡内洛内斯（Canelones）世代经营的酒庄所酿的丹娜。",
    quiz: [
      { q: "Pisano RPF中的“RPF”是什么的缩写？", a: "家族私人珍藏（Reserva Personal de la Familia）", x: ["Red Premium Fruit", "Río de la Plata Finca", "葡萄园地块编号"] },
    ],
  },
  sh2_mercian_kikyogahara: {
    fact: "以长野县盐尻市桔梗原（Kikyogahara）高原葡萄园的梅洛酿造的Château Mercian招牌红葡萄酒，让世界看到了日本梅洛的潜力。",
    quiz: [
      { q: "旗下拥有Château Mercian的日本酒类企业集团是？", a: "麒麟", x: ["三得利", "朝日", "札幌"] },
    ],
  },
  sh2_suntory_tomi: {
    fact: "三得利从山梨县登美之丘酒庄只挑选最好的葡萄酿造的顶级波尔多式调配酒。",
    quiz: [
      { q: "酿造Tomi的三得利于1983年买下的波尔多圣朱利安列级酒庄是？", a: "Château Lagrange", x: ["Château Talbot", "Château Beychevelle", "Château Gruaud Larose"] },
    ],
  },
  sh2_greatwall_cs: {
    fact: "以万里长城命名的中国代表性葡萄酒品牌长城。1980年代初在河北推出第一款葡萄酒。",
    quiz: [
      { q: "拥有长城（Great Wall）葡萄酒的中国国有企业是？", a: "中粮集团（COFCO）", x: ["张裕", "青岛啤酒", "贵州茅台"] },
    ],
  },
  sh2_gracevineyard_chairmans: {
    fact: "香港企业家于1997年在中国山西省创立的家族酒庄怡园（Grace Vineyard）的顶级红葡萄酒。",
    quiz: [
      { q: "Grace Vineyard的中文名“怡园”是什么意思？", a: "喜悦之园", x: ["黄金山丘", "碧水之河", "龙之林"] },
    ],
  },
  sh2_helanqingxue_jiabeilan: {
    fact: "宁夏贺兰山东麓的小酒庄贺兰晴雪酿造的波尔多式调配酒，被视为首次证明中国葡萄酒也能达到世界水准的酒款。",
    quiz: [
      { q: "Jia Bei Lan（贺兰晴雪加贝兰）2009年份在2011年获得的奖项是？", a: "Decanter世界葡萄酒大赛国际大奖", x: ["《葡萄酒观察家》年度葡萄酒", "Robert Parker 100分", "波尔多葡萄酒博览会大奖"] },
    ],
  },
  sh2_silverheights_summit: {
    fact: "宁夏贺兰山东麓的家族酒庄银色高地（Silver Heights）的顶级红葡萄酒，由酿酒师高源（Emma Gao）与家人共同经营。",
    quiz: [
      { q: "银色高地（Silver Heights）的酿酒师高源在哪里学习酿酒？", a: "法国波尔多", x: ["美国加州戴维斯", "澳大利亚阿德莱德", "德国盖森海姆"] },
    ],
  },
  sh2_longdai: {
    fact: "波尔多名庄的主人家族在山东半岛蓬莱丘陵开辟的葡萄园所酿的红葡萄酒瓏岱，2017年推出首个年份。",
    quiz: [
      { q: "酿造Long Dai（瓏岱）的是哪座波尔多一级庄的主人家族？", a: "Château Lafite Rothschild", x: ["Château Mouton Rothschild", "Château Margaux", "Château Latour"] },
    ],
  },
  sh2_sula_sb: {
    fact: "毕业于美国斯坦福大学的Rajeev Samant于1999年在纳西克（Nashik）创立的印度代表性酒庄的长相思。",
    quiz: [
      { q: "Sula Vineyards中的“Sula”来自谁的名字？", a: "创始人的母亲Sulabha", x: ["印度教女神", "流经纳西克的河", "创始人的女儿"] },
    ],
  },
  sh2_grover_lareserve: {
    fact: "1988年创立于班加罗尔近郊南迪山（Nandi Hills）的Grover Vineyards的招牌红葡萄调配酒，被视为印度葡萄酒的先驱。",
    quiz: [
      { q: "长期为Grover Vineyards提供咨询的波尔多著名酿酒顾问是？", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
};

export default T;
