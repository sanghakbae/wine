import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  fr_latache: {
    fact: "与Romanée-Conti并列，是DRC独家拥有整片葡萄园的两块独占园（monopole）之一。面积约6公顷，是Romanée-Conti的三倍多。",
    quiz: [
      { q: "像La Tâche这样由一家酒庄独占整片葡萄园的情况称为？", a: "独占园（monopole）", x: ["风土地块（climat）", "小地块（lieu-dit）", "分成租佃制（métayage）"] },
    ],
  },
  fr_richebourg_drc: {
    fact: "被评为沃恩-罗曼尼特级园中最丰满浓郁的一块。除DRC外，Leroy、Anne Gros、Méo-Camuzet等也分有此园。",
    quiz: [
      { q: "共同拥有酿造Richebourg的Domaine de la Romanée-Conti的两大家族，一个是de Villaine家族，另一个是？", a: "Leroy家族", x: ["Rousseau家族", "de Vogüé家族", "Lafon家族"] },
    ],
  },
  fr_rsv_drc: {
    fact: "名字来自中世纪耕作这片土地的圣维旺修道院。DRC自1966年起向Marey-Monge家族租园酿造，1988年将其买下。",
    quiz: [
      { q: "DRC Romanée-Saint-Vivant的名字来自哪里？", a: "中世纪的圣维旺修道院", x: ["18世纪的孔蒂亲王", "拿破仑手下将军的名字", "勃艮第公爵夫人"] },
      { q: "DRC先租后买下的Romanée-Saint-Vivant葡萄园原属哪个家族？", a: "Marey-Monge家族", x: ["Leroy家族", "Liger-Belair家族", "Mommessin家族"] },
    ],
  },
  fr_grandsechezeaux_drc: {
    fact: "行政上属于邻近的弗拉热-埃切索村，却被当作沃恩-罗曼尼的酒看待的特级园。比Échezeaux小得多，也更珍贵。",
    quiz: [
      { q: "与DRC Grands-Échezeaux葡萄园紧邻、以石墙环绕闻名的特级园是？", a: "Clos de Vougeot", x: ["Clos de Tart", "Clos des Lambrays", "Clos de Bèze"] },
    ],
  },
  fr_echezeaux_drc: {
    fact: "沃恩-罗曼尼一带面积最大的特级园，由数十位园主细分持有。它被称为DRC红葡萄酒特级园中的入门款。",
    quiz: [
      { q: "关于出产DRC Échezeaux的Échezeaux特级园，下列说法正确的是？", a: "由数十位园主细分持有", x: ["是DRC独家拥有的独占园", "只能酿造白葡萄酒", "1990年代才升为特级园"] },
    ],
  },
  fr_montrachet_drc: {
    fact: "横跨普里尼和夏山两个村、面积约8公顷的葡萄园，被誉为出产世界最佳霞多丽之地。",
    quiz: [
      { q: "相传说过喝Montrachet应当“脱帽下跪”的法国作家是？", a: "大仲马", x: ["维克多·雨果", "巴尔扎克", "左拉"] },
    ],
  },
  fr_liger_romanee: {
    fact: "位于Romanée-Conti正上方山坡、面积不足1公顷的独占园。2000年代初Louis-Michel Liger-Belair将其收回，由家族亲自酿造。",
    quiz: [
      { q: "La Romanée保持着什么纪录？", a: "法国面积最小的AOC", x: ["法国最古老的AOC", "勃艮第面积最大的特级园", "法国第一块获有机认证的葡萄园"] },
    ],
  },
  fr_meo_crosparantoux: {
    fact: "“勃艮第酒神”亨利·贾耶（Henri Jayer）把长满菊芋的荒地开垦出来，将它打造成传奇的一级园。贾耶曾租种Méo-Camuzet的葡萄园，并指导了Jean-Nicolas Méo。",
    quiz: [
      { q: "开垦Cros Parantoux并使之成为传奇、被称为“勃艮第酒神”的酿酒师是？", a: "Henri Jayer", x: ["Armand Rousseau", "Georges Roumier", "Henri Gouges"] },
    ],
  },
  fr_annegros_cdv: {
    fact: "Clos de Vougeot是12世纪修士筑石墙开垦的50公顷特级园，如今由80多位园主分有。Anne Gros打理其中的Grand Maupertui地块。",
    quiz: [
      { q: "自12世纪起筑石墙开垦出Clos de Vougeot（Anne Gros Clos Vougeot的出处）的修会是？", a: "西多会", x: ["克吕尼会", "耶稣会", "方济各会"] },
      { q: "以伏旧园城堡为总部的勃艮第葡萄酒骑士会是？", a: "Chevaliers du Tastevin", x: ["Commanderie du Bontemps de Médoc", "Ordre des Coteaux de Champagne", "Les Compagnons du Beaujolais"] },
    ],
  },
  fr_leroy_musigny: {
    fact: "Lalou Bize-Leroy于1988年创立的酒庄。从一开始就采用生物动力法耕作，并将产量压到极低，酿出勃艮第最昂贵的葡萄酒。",
    quiz: [
      { q: "掌管Domaine Leroy、并曾任DRC共同管理人直到1992年的人物是？", a: "Lalou Bize-Leroy", x: ["Anne-Claude Leflaive", "Henri Jayer", "Christophe Roumier"] },
    ],
  },
  fr_vogue_musigny: {
    fact: "拥有Musigny特级园近三分之二的最大园主。年轻葡萄树的果实不作为Musigny，而是降级为香波-慕西尼一级园出售。",
    quiz: [
      { q: "de Vogüé在Musigny园中几乎独家酿造的稀有酒款是？", a: "Musigny Blanc（白葡萄酒）", x: ["Musigny桃红葡萄酒", "Musigny起泡酒", "Musigny贵腐甜酒"] },
    ],
  },
  fr_mugnier_musigny: {
    fact: "Frédéric Mugnier于1985年接手家族酒庄，将它提升为细腻香波风格的巅峰。2004年收回了此前租给Faiveley的Clos de la Maréchale。",
    quiz: [
      { q: "接手Jacques-Frédéric Mugnier酒庄的Frédéric Mugnier，直到1990年代末一直兼任的职业是？", a: "飞行员", x: ["医生", "律师", "厨师"] },
    ],
  },
  fr_roumier_bm: {
    fact: "由Christophe Roumier掌管的香波-慕西尼膜拜级酒庄。Bonnes-Mares是横跨香波-慕西尼与莫雷-圣丹尼两个村的特级园。",
    quiz: [
      { q: "掌管Domaine Georges Roumier并使其跻身膜拜级的人物是？", a: "Christophe Roumier", x: ["Eric Rousseau", "Frédéric Mugnier", "Jean-Nicolas Méo"] },
      { q: "出产Georges Roumier Bonnes-Mares的Bonnes-Mares特级园，横跨香波-慕西尼和哪个村？", a: "莫雷-圣丹尼", x: ["热夫雷-香贝丹", "沃恩-罗曼尼", "伏旧"] },
    ],
  },
  fr_dujac_cdlr: {
    fact: "1968年由巴黎人Jacques Seysses在莫雷-圣丹尼创立的酒庄，以整串带梗发酵闻名。",
    quiz: [
      { q: "1968年创立Domaine Dujac的人物是？", a: "Jacques Seysses", x: ["Henri Jayer", "Armand Rousseau", "Christophe Roumier"] },
    ],
  },
  fr_ponsot_cdlr: {
    fact: "2008年纽约拍卖会上出现了一瓶Ponsot Clos Saint-Denis 1945年份，Laurent Ponsot亲自出面叫停——Ponsot首次酿造该园的酒其实是在1982年。",
    quiz: [
      { q: "Domaine Ponsot的Laurent Ponsot在2008年拍卖会上拦下假冒Ponsot酒，由此暴露的一代葡萄酒造假者是？", a: "Rudy Kurniawan", x: ["Hardy Rodenstock", "Bernard Madoff", "Frank Abagnale"] },
    ],
  },
  fr_closdetart: {
    fact: "自1141年以来仅换过四任主人的特级独占园：历经塔尔修女院、Marey-Monge家族、Mommessin家族，如今归Pinault家族的Artémis所有。",
    quiz: [
      { q: "从1141年到法国大革命期间拥有Clos de Tart的是？", a: "塔尔修女院的西多会修女", x: ["克吕尼修道院的修士", "勃艮第公爵家族", "圣殿骑士团"] },
      { q: "继Mommessin家族之后买下Clos de Tart的是？", a: "弗朗索瓦·皮诺的Artémis", x: ["贝尔纳·阿尔诺的LVMH", "美国富豪斯坦·克伦克", "Bouygues兄弟"] },
    ],
  },
  fr_lambrays: {
    fact: "几乎整片由一家酒庄拥有的莫雷-圣丹尼特级园。1981年才姗姗来迟地升为特级园，2014年被LVMH买下。",
    quiz: [
      { q: "Clos des Lambrays升为特级园是在哪一年？", a: "1981年", x: ["1936年", "1961年", "2001年"] },
      { q: "2014年收购Clos des Lambrays的集团是？", a: "LVMH", x: ["Artémis（Pinault家族）", "Castel集团", "Pernod Ricard"] },
    ],
  },
  fr_rousseau_chambertin: {
    fact: "相传拿破仑连出征时都要带上香贝丹，它因此被称为“王者之酒”。Armand Rousseau被视为热夫雷-香贝丹最好的酒庄。",
    quiz: [
      { q: "相传最爱喝香贝丹（Armand Rousseau Chambertin的出处）的历史人物是？", a: "拿破仑", x: ["路易十四", "查理曼大帝", "圣女贞德"] },
      { q: "相传“Chambertin”这个名字的由来是？", a: "一位名叫Bertin的农夫的田地（Champ de Bertin）", x: ["Bertin修道院的教堂", "罗马将军Bertinus的营地", "古语中的“绿色山丘”"] },
    ],
  },
  fr_rousseau_beze: {
    fact: "7世纪由贝兹修道院的修士开垦，是勃艮第最古老的葡萄园之一。此园的酒也可以用“Chambertin”之名出售。",
    quiz: [
      { q: "最早开垦Chambertin-Clos de Bèze葡萄园的是？", a: "7世纪贝兹修道院的修士", x: ["12世纪的西多会修士", "18世纪的孔蒂亲王", "19世纪的拿破仑军队"] },
      { q: "按规定，Chambertin-Clos de Bèze享有什么特权？", a: "也可以用“Chambertin”之名出售", x: ["可以冠上“Romanée-Conti”之名", "可以不标年份出售", "白葡萄酒也能以特级园出售"] },
    ],
  },
  fr_bichot_moutonne: {
    fact: "Albert Bichot旗下夏布利酒庄Long-Depaquit的独占园，横跨夏布利特级园Vaudésir与Preuses两块园。",
    quiz: [
      { q: "酿造La Moutonne的Albert Bichot创立于哪一年？", a: "1831年", x: ["1731年", "1797年", "1880年"] },
    ],
  },
  fr_leflaive_puligny: {
    fact: "普里尼-蒙哈榭的代表性白葡萄酒名门。1990年代Anne-Claude Leflaive将全部葡萄园改为生物动力法，引领了勃艮第的环保耕作潮流。",
    quiz: [
      { q: "1990年代带领Domaine Leflaive转向生物动力法的人物是？", a: "Anne-Claude Leflaive", x: ["Lalou Bize-Leroy", "Dominique Lafon", "Jean-François Coche-Dury"] },
    ],
  },
  fr_leflaive_batard: {
    fact: "位于Montrachet正下方山坡的特级园。它与相邻的Chevalier（骑士）、Pucelle（少女）两块园一样，名字里都藏着昔日领主家族的故事。",
    quiz: [
      { q: "Bâtard-Montrachet中的“Bâtard”是什么意思？", a: "私生子", x: ["骑士", "少女", "修士"] },
    ],
  },
  fr_cochedury_cc: {
    fact: "科尔登山丘上的白葡萄酒特级园。Coche-Dury的这款产量极少，被视为勃艮第白葡萄酒中最难买到的一瓶。",
    quiz: [
      { q: "相传查理曼大帝下令在科尔登山丘种植白葡萄的原因是？", a: "红葡萄酒会把他的白胡子染红", x: ["教皇禁止了红葡萄酒", "白葡萄卖得更贵", "红葡萄都在战争中死光了"] },
    ],
  },
  fr_cochedury_meursault: {
    fact: "连村级默尔索都能卖到别家特级园价格的传奇生产者。Jean-François Coche-Dury建立了名声，如今由儿子Raphaël接班。",
    quiz: [
      { q: "建立Coche-Dury默尔索名声的酿酒师是？", a: "Jean-François Coche-Dury", x: ["Henri Jayer", "Dominique Lafon", "Aubert de Villaine"] },
    ],
  },
  fr_bonneau_cc: {
    fact: "只酿造Corton-Charlemagne和Corton两款特级园酒的少见酒庄。2017年被美国富豪斯坦·克伦克买下。",
    quiz: [
      { q: "2017年买下Bonneau du Martray的美国富豪所拥有的纳帕谷膜拜酒庄是？", a: "Screaming Eagle", x: ["Harlan Estate", "Opus One", "Sine Qua Non"] },
    ],
  },
  fr_latour_cc: {
    fact: "自1797年传承至今的家族企业，是科尔登山丘最大的园主之一。至今仍在自家工坊制作橡木桶。",
    quiz: [
      { q: "Louis Latour在科尔登山丘的阿罗斯-科尔登作为大本营的城堡是？", a: "Château Corton Grancey", x: ["Château de Meursault", "Château de Puligny-Montrachet", "Château de Pommard"] },
      { q: "酿造Corton-Charlemagne的Louis Latour，其历史始于哪一年？", a: "1797年", x: ["1731年", "1859年", "1920年"] },
    ],
  },
  fr_faiveley_cortons: {
    fact: "园名中带有生产者家族姓氏的科尔登特级独占园。Faiveley是在夜-圣乔治世代传承的家族企业。",
    quiz: [
      { q: "酿造这款酒的Faiveley在夜-圣乔治创立于哪一年？", a: "1825年", x: ["1731年", "1797年", "1920年"] },
      { q: "Faiveley租用酿造50多年后，于2004年归还给园主Mugnier家族的独占园是？", a: "Clos de la Maréchale", x: ["Clos de Tart", "Clos des Lambrays", "Clos des Ducs"] },
    ],
  },
  fr_drouhin_mouches: {
    fact: "1920年代Maurice Drouhin从多位园主手中一块块买下的博讷一级园。Drouhin是这块园的最大园主。",
    quiz: [
      { q: "在Clos des Mouches中，“Mouches”指的是哪种昆虫？", a: "蜜蜂", x: ["蝴蝶", "蜻蜓", "瓢虫"] },
      { q: "酿造Clos des Mouches的Joseph Drouhin于1987年在美国创立的酒庄位于哪里？", a: "俄勒冈州", x: ["纳帕谷", "索诺玛", "华盛顿州"] },
    ],
  },
  fr_bouchard_enfant: {
    fact: "由加尔默罗会修女打理的博讷-格雷夫独占园。名字源于一位修女预言路易十四诞生的故事，大革命后的1791年被Bouchard买下。",
    quiz: [
      { q: "“Vigne de l'Enfant Jésus”这个名字的意思是？", a: "圣婴耶稣的葡萄园", x: ["圣母的葡萄园", "国王的葡萄园", "修道院院长的葡萄园"] },
      { q: "与Vigne de l'Enfant Jésus之名相关、传说由加尔默罗会修女预言其诞生的国王是？", a: "路易十四", x: ["路易十六", "亨利四世", "拿破仑一世"] },
    ],
  },
  fr_hospices_rolin: {
    fact: "出自1443年创立的慈善医院博讷济贫院（Hospices de Beaune）受赠葡萄园的酒。每年通过世界最著名的慈善葡萄酒拍卖会出售。",
    quiz: [
      { q: "出售Hospices de Beaune Cuvée Nicolas Rolin的慈善拍卖会在何时举行？", a: "每年11月的第三个星期日", x: ["每年9月的第一个星期日", "每五年一次，在春季", "每年1月1日"] },
      { q: "与Nicolas Rolin一同创立博讷济贫院的妻子是？", a: "Guigone de Salins", x: ["凯歌夫人", "奥地利的安妮", "勃艮第的玛格丽特"] },
    ],
  },
  fr_dangerville_ducs: {
    fact: "曾属于昔日勃艮第公爵的沃尔奈一级独占园。1920至30年代，d'Angerville侯爵与Henri Gouges等人一起率先推动酒庄自行装瓶。",
    quiz: [
      { q: "Clos des Ducs中的“Ducs”指的是？", a: "昔日的勃艮第公爵", x: ["教廷的主教", "罗马军团长", "修道院的修士"] },
      { q: "Marquis d'Angerville家族在1920至30年代与同伴一起率先推动的是？", a: "不卖给酒商，而在酒庄自行装瓶", x: ["引入香槟法起泡酒", "在勃艮第种植赤霞珠", "采用螺旋盖"] },
    ],
  },
  fr_lafon_perrieres: {
    fact: "默尔索的代表性名门，也持有少量Montrachet特级园。名字源自古代采石场的Perrières被视为默尔索最好的一级园。",
    quiz: [
      { q: "每年11月“光荣三日”的最后一天，默尔索都会举行“默尔索宴”（Paulée de Meursault）。1923年创办这场盛宴的Comtes Lafon家族人物是？", a: "Jules Lafon伯爵", x: ["Louis Latour", "Joseph Drouhin", "Henri Jayer"] },
    ],
  },
  fr_fevre_lesclos: {
    fact: "Les Clos是夏布利特级园中面积最大的一块。William Fèvre被视为拥有最多夏布利特级园的酒庄。",
    quiz: [
      { q: "William Fèvre Les Clos所属的夏布利特级园共有几块？", a: "7块", x: ["3块", "12块", "33块"] },
      { q: "1998年收购William Fèvre的香槟家族是？", a: "Henriot", x: ["Bollinger", "Taittinger", "Laurent-Perrier"] },
    ],
  },
  fr_raveneau: {
    fact: "1948年由François Raveneau创立的夏布利传奇。在老橡木桶中陈酿，酿出可陈放数十年的夏布利。",
    quiz: [
      { q: "创立Raveneau的François Raveneau通过婚姻结缘的另一家夏布利名门是？", a: "Dauvissat家族", x: ["Fèvre家族", "Laroche家族", "Bichot家族"] },
    ],
  },
  fr_dauvissat: {
    fact: "与亲戚Raveneau并列为夏布利巅峰的酒庄。在普遍使用不锈钢罐的夏布利，坚持采用橡木桶陈酿。",
    quiz: [
      { q: "Vincent Dauvissat等夏布利名门从金丘引入的酿造方式是？", a: "橡木桶发酵与长时间带酒泥陈酿", x: ["二氧化碳浸渍法", "风干葡萄（appassimento）", "索雷拉陈酿"] },
    ],
  },
  fr_laroche: {
    fact: "Laroche的陈酿酒窖是9世纪的修道院建筑“Obédiencerie”。877年为躲避诺曼人而从图尔迁来的圣马丁遗骸曾供奉于此。",
    quiz: [
      { q: "Domaine Laroche Chablis Saint Martin的名字纪念的圣人是？", a: "图尔主教圣马丁", x: ["领导西多会的圣伯尔纳", "巴黎首任主教圣德尼", "圣女贞德"] },
    ],
  },
  fr_fuisse: {
    fact: "马贡内的代表性霞多丽名门。自2020年份起，普伊-富赛成为马贡内首个拥有一级园的产区。",
    quiz: [
      { q: "Château-Fuissé所在的普伊-富赛，自2020年份起新设的等级是？", a: "一级园（Premier Cru）", x: ["特级园（Grand Cru）", "中级庄（Cru Bourgeois）", "列级酒庄（Cru Classé）"] },
    ],
  },
  fr_lapierre_morgon: {
    fact: "几乎不添加二氧化硫酿酒的自然酒先驱。与Foillard、Thévenet、Breton一起被称为“博若莱四人帮”。",
    quiz: [
      { q: "启发Marcel Lapierre等“博若莱四人帮”进行无添加酿造的化学家兼酒商是？", a: "Jules Chauvet", x: ["Émile Peynaud", "Louis Pasteur", "Henri Jayer"] },
    ],
  },
  fr_jacques_mav: {
    fact: "1996年被Louis Jadot买下，成为勃艮第名门进军博若莱特级村的首例。以勃艮第方式酿造，出品可长期陈放的佳美。",
    quiz: [
      { q: "Château des Jacques所在的“Moulin-à-Vent”这个名字来自什么？", a: "村中山丘上的古老风车", x: ["罗马时代的水车", "一条风很大的河的名字", "古修道院的名字"] },
    ],
  },
  fr_jadot_bjv: {
    fact: "出自博若莱北部指定村庄、高一个等级的酒。酒标上印着Louis Jadot的标志——巴克斯头像徽章。",
    quiz: [
      { q: "Louis Jadot Beaujolais-Villages酒标上头像徽章的主人公是？", a: "酒神巴克斯", x: ["海神尼普顿", "太阳神阿波罗", "葡萄农的守护圣人圣文森特"] },
      { q: "博若莱可以标注村名的最高等级“特级村（cru）”共有几个？", a: "10个", x: ["3个", "7个", "22个"] },
    ],
  },
  fr_duboeuf_fleurie: {
    fact: "正如让人联想到花的名字，这是一款芬芳柔和的博若莱特级村酒。以Duboeuf的花卉图案酒标闻名。",
    quiz: [
      { q: "因芬芳优雅的口感，Georges Duboeuf Fleurie这类弗勒里葡萄酒常被冠以什么别称？", a: "博若莱女王", x: ["博若莱之王", "博若莱骑士", "博若莱修士"] },
    ],
  },
  fr_guigal_mouline: {
    fact: "出自Côte Blonde圆形剧场般山坡的Guigal首款单一园酒。在西拉中混入少量维欧尼一起发酵。",
    quiz: [
      { q: "Guigal La Mouline、La Landonne、La Turque三款酒的合称是？", a: "La La", x: ["Triple Crown", "Les Trois", "Côte-Rôtie Trio"] },
      { q: "Guigal La Mouline的首个年份是？", a: "1966年", x: ["1946年", "1978年", "1985年"] },
    ],
  },
  fr_guigal_landonne: {
    fact: "在Côte Brune的陡坡上以100%西拉酿造，是“La La”中最浓郁有力的一款。这片园是从多位园主手中一块块买下后重新种植的。",
    quiz: [
      { q: "Guigal La Landonne的首个年份是？", a: "1978年", x: ["1966年", "1985年", "1995年"] },
    ],
  },
  fr_guigal_turque: {
    fact: "Guigal于1980年代初将长期荒废的葡萄园重新种植复活，是“La La”中最年轻的一款。虽位于Côte Brune，却混入少量维欧尼。",
    quiz: [
      { q: "Guigal La Turque的首个年份是？", a: "1985年", x: ["1966年", "1978年", "1999年"] },
    ],
  },
  fr_guigal_cdr: {
    fact: "1946年Étienne Guigal在昂皮伊（Ampuis）创立的Guigal的招牌日常酒。不愧为北罗讷名门，西拉比例较高。",
    quiz: [
      { q: "酿造Guigal Côtes du Rhône的Guigal于1995年买下并作为大本营的罗第丘古堡是？", a: "Château d'Ampuis", x: ["Château-Grillet", "Château Rayas", "Château La Nerthe"] },
      { q: "Étienne Guigal创立Guigal是在哪一年？", a: "1946年", x: ["1808年", "1834年", "1990年"] },
    ],
  },
  fr_chapoutier_belleruche: {
    fact: "自1808年传承至今的埃米塔日名门Chapoutier的日常款罗讷丘。酒标一侧刻有凹凸的盲文。",
    quiz: [
      { q: "自1990年代起，包括Belleruche在内，Chapoutier在所有酒标上都会加上的是？", a: "供视障人士阅读的盲文", x: ["二维码", "创始人签名", "葡萄园地图"] },
    ],
  },
  fr_chapoutier_sizeranne: {
    fact: "这款酒出自从Monier de la Sizeranne家族购得的葡萄园，该家族的Maurice de la Sizeranne是发明简写盲文的视障者。1994年，这款酒首次贴上了盲文酒标。",
    quiz: [
      { q: "这款酒名字的主人公、促成Chapoutier盲文酒标的Maurice Monier de la Sizeranne是什么样的人？", a: "致力于推广盲文的视障者", x: ["Chapoutier的创始人", "阿维尼翁教廷的主教", "拿破仑手下的将军"] },
    ],
  },
  fr_jaboulet_chapelle: {
    fact: "名字取自埃米塔日山顶小礼拜堂的罗讷传奇。1961年份被视为20世纪最伟大的葡萄酒之一。",
    quiz: [
      { q: "La Chapelle这个名字来自埃米塔日山丘上的什么？", a: "山顶的小礼拜堂", x: ["古修道院大教堂", "王室狩猎行宫", "罗马时代的神庙"] },
      { q: "2006年买下酿造La Chapelle的Paul Jaboulet Aîné的，是拥有波尔多Château La Lagune的哪个家族？", a: "Frey家族", x: ["Perrin家族", "Guigal家族", "Rothschild家族"] },
    ],
  },
  fr_jaboulet_p45: {
    fact: "1834年创立的罗讷名门Paul Jaboulet Aîné的招牌日常酒，是用南罗讷葡萄酿造、平易近人的罗讷丘。",
    quiz: [
      { q: "Parallèle 45这个名字的意思是？", a: "经过酒庄附近的北纬45度线", x: ["创立45周年", "45个葡萄品种", "陈酿45个月"] },
    ],
  },
  fr_chave_hermitage: {
    fact: "将埃米塔日山丘多个地块的酒调配成一瓶的罗讷顶级酒庄。Chave家族自1865年起在埃米塔日购置葡萄园。",
    quiz: [
      { q: "Jean-Louis Chave酒标上写着“父子相传的葡萄种植”，其起始年份是？", a: "1481年", x: ["1731年", "1808年", "1946年"] },
    ],
  },
  fr_jamet: {
    fact: "调配罗第丘多个地块西拉的传统派酒庄。常用整串发酵，被视为香料气息浓郁的北罗讷西拉典范。",
    quiz: [
      { q: "Domaine Jamet出产的“Côte-Rôtie（烤焦的山坡）”，这个名字指的是？", a: "被阳光烤热的朝南陡坡", x: ["火山灰土壤", "经火烤的橡木桶陈酿", "被山火烧过的旧葡萄园"] },
    ],
  },
  fr_clape_cornas: {
    fact: "从科尔纳斯还默默无闻时起，就以传统方式酿造西拉并打响名气的酒庄。如今由儿子和孙子接班。",
    quiz: [
      { q: "Auguste Clape所在的“Cornas”这个地名，相传是什么意思？", a: "烧焦的土地（凯尔特语）", x: ["多石的山丘", "教皇的土地", "黑色的河"] },
    ],
  },
  fr_grillet: {
    fact: "由一座庄园独占整个AOC的维欧尼圣地。其他任何法国酒庄都不使用的细长棕色酒瓶是它的标志。",
    quiz: [
      { q: "Château-Grillet AOC的特别之处是？", a: "由一座庄园独占整个AOC", x: ["罗讷唯一的起泡酒AOC", "必须混合红白葡萄酒", "每年向教廷进贡"] },
      { q: "2011年买下Château-Grillet的，是波尔多Château Latour的哪位主人？", a: "弗朗索瓦·皮诺", x: ["贝尔纳·阿尔诺", "马丁·布伊格", "斯坦·克伦克"] },
    ],
  },
  fr_vernay_condrieu: {
    fact: "1960年代守护了险些消失的维欧尼的Georges Vernay所创立的酒庄。他被称为“孔德里约教皇”。",
    quiz: [
      { q: "在Georges Vernay守护维欧尼的1960年代，孔德里约的葡萄园经历了什么？", a: "面积缩减到仅剩几公顷，险些消失", x: ["首次发现根瘤蚜", "升为特级园", "改为红葡萄酒产区"] },
    ],
  },
  fr_rayas: {
    fact: "在林木环绕的沙质土壤上以100%歌海娜酿造的教皇新堡膜拜酒。也以破旧的酒窖和朴素的酒标闻名。",
    quiz: [
      { q: "世代掌管Château Rayas的家族是？", a: "Reynaud家族", x: ["Perrin家族", "Brunier家族", "Avril家族"] },
    ],
  },
  fr_closdespapes: {
    fact: "Avril家族世代传承的教皇新堡名门。2007年份荣登《葡萄酒观察家》“年度百大葡萄酒”第一名。",
    quiz: [
      { q: "世代传承Clos des Papes的家族是？", a: "Avril家族", x: ["Reynaud家族", "Brunier家族", "Féraud家族"] },
    ],
  },
  fr_vieuxtelegraphe: {
    fact: "出自布满圆形鹅卵石（galets）的La Crau高原的教皇新堡。Brunier家族自19世纪末起就在此耕耘。",
    quiz: [
      { q: "Vieux Télégraphe这个名字来自什么？", a: "18世纪末沙普（Chappe）建造的光学通信塔", x: ["19世纪的电报局", "教廷的钟楼", "铁路信号站"] },
      { q: "Vieux Télégraphe所在、布满圆形鹅卵石的高原是？", a: "La Crau", x: ["La Nerthe", "Côte Blonde", "Les Bessards"] },
    ],
  },
  fr_pegau: {
    fact: "由Paul Féraud和女儿Laurence掌管的传统派教皇新堡。葡萄带梗发酵，并在大橡木桶（foudre）中长时间陈酿。",
    quiz: [
      { q: "Domaine du Pégau中“Pégau”这个名字的意思是？", a: "中世纪的陶土酒壶", x: ["教皇的帽子", "多石的田地", "鸽子窝"] },
    ],
  },
  fr_lanerthe: {
    fact: "16世纪的文献中便有记载，是教皇新堡最古老的庄园之一。在歌海娜中混入西拉、慕合怀特，酿出均衡的葡萄酒。",
    quiz: [
      { q: "Château La Nerthe所在的“Châteauneuf-du-Pape”这个名字的意思是？", a: "教皇的新城堡", x: ["教皇的旧葡萄园", "新教皇的葡萄酒", "教皇的夏日花园"] },
    ],
  },
  fr_bonneau_celestins: {
    fact: "在村中狭窄的地下酒窖里长期陈酿、只在好年份推出的教皇新堡传奇。2016年Henri Bonneau辞世后，由儿子Marcel接班。",
    quiz: [
      { q: "Henri Bonneau除了Réserve des Célestins之外推出的另一款酒是？", a: "Cuvée Marie Beurrier", x: ["Cuvée da Capo", "Hommage à Jacques Perrin", "La Crau"] },
    ],
  },
  fr_perrin_cdr: {
    fact: "掌管Château de Beaucastel的Perrin家族酿造的日常款罗讷丘。在歌海娜中混入西拉、慕合怀特。",
    quiz: [
      { q: "酿造Perrin罗讷丘的Perrin家族与好莱坞明星合作酿造的普罗旺斯桃红是？", a: "Miraval", x: ["Whispering Angel", "Minuty", "Domaines Ott"] },
    ],
  },
  fr_aqueria_tavel: {
    fact: "只允许酿造桃红的AOC塔维勒（Tavel）的代表性庄园。比普罗旺斯桃红颜色更深、更有力量，很适合佐餐。",
    quiz: [
      { q: "形容Château d'Aqueria这类塔维勒桃红的说法：“王者的桃红，桃红之○”。空格处是？", a: "王", x: ["女王", "教皇", "皇帝"] },
    ],
  },
  fr_dp_rose: {
    fact: "只在好年份酿造的Dom Pérignon桃红。首个年份1959年几乎全部卖给了伊朗国王。",
    quiz: [
      { q: "1971年以Dom Pérignon Rosé 1959年份举杯的历史性盛宴是？", a: "波斯帝国建国2500周年庆典", x: ["巴黎世界博览会开幕晚宴", "肯尼迪总统就职晚宴", "摩纳哥兰尼埃三世的婚礼"] },
    ],
  },
  fr_moet_rose: {
    fact: "Moët Impérial的桃红版本。混入黑皮诺红葡萄酒，呈现带草莓、樱桃香气的粉红色。",
    quiz: [
      { q: "酿造Moët & Chandon Rosé Impérial的Moët & Chandon创立于哪一年？", a: "1743年", x: ["1729年", "1772年", "1811年"] },
    ],
  },
  fr_moet_ice: {
    fact: "2011年推出的全球首款“加冰饮用”香槟。为了在冰块融化后风味也不变淡，酿得甜美而浓郁。",
    quiz: [
      { q: "享用Moët & Chandon Ice Impérial的推荐方式是？", a: "在大杯中加冰饮用", x: ["加热后温饮", "与姜汁汽水各半混合", "用吸管直接从瓶中喝"] },
    ],
  },
  fr_veuve_lgd: {
    fact: "Veuve Clicquot的顶级特酿。在创立200周年的1972年，以1962年份首次推出。",
    quiz: [
      { q: "Veuve Clicquot La Grande Dame（“伟大的女士”）这个名字纪念的人物是？", a: "凯歌夫人", x: ["玛丽·安托瓦内特", "约瑟芬皇后", "莉莉·堡林爵"] },
    ],
  },
  fr_veuve_rose: {
    fact: "在Yellow Label调配中混入红葡萄酒酿成的桃红。Veuve Clicquot被认为是首家以这种混合方式酿造桃红香槟的酒庄。",
    quiz: [
      { q: "凯歌夫人首次混入红葡萄酒、酿出桃红香槟（正如Veuve Clicquot Rosé）是在哪一年？", a: "1818年", x: ["1729年", "1874年", "1921年"] },
    ],
  },
  fr_roederer_collection: {
    fact: "2021年取代长期以来的Brut Premier推出的Louis Roederer无年份香槟。采用将历年积累的储备酒混合的“永续储备”方式酿造。",
    quiz: [
      { q: "Louis Roederer Collection上“242”“243”这类数字的意思是？", a: "自1776年创立以来的第几次调配", x: ["陈酿的月数", "混合的酒款数量", "产量（千瓶）"] },
    ],
  },
  fr_krug_gc: {
    fact: "以跨越十多个年份、120多款酒调配而成的Krug招牌香槟。每瓶都标有第几版（Édition）的编号。",
    quiz: [
      { q: "1843年创立Krug的人物是？", a: "Joseph Krug", x: ["Nicolas Ruinart", "Florens-Louis Heidsieck", "Claude Moët"] },
    ],
  },
  fr_krug_mesnil: {
    fact: "只用勒梅尼勒-奥热村中心一块石墙环绕、面积1.84公顷的葡萄园的霞多丽酿造。Krug于1971年买下，1979年推出首个年份。",
    quiz: [
      { q: "Krug Clos du Mesnil葡萄园的石墙最早建于哪一年？", a: "1698年", x: ["1843年", "1971年", "1979年"] },
    ],
  },
  fr_krug_rose: {
    fact: "在混合多个年份的Krug酿法中加入黑皮诺红葡萄酒酿成的桃红香槟。与Grande Cuvée一样标有版本编号。",
    quiz: [
      { q: "自1999年起拥有Krug的集团是？", a: "LVMH", x: ["Kering", "Pernod Ricard", "Laurent-Perrier集团"] },
    ],
  },
  fr_bollinger_sc: {
    fact: "1829年始于阿伊（Aÿ）的Bollinger的招牌香槟。黑皮诺比例高，部分在橡木桶中发酵，风格厚重。",
    quiz: [
      { q: "与Bollinger Special Cuvée有着长久渊源而闻名的电影人物是？", a: "詹姆斯·邦德", x: ["夏洛克·福尔摩斯", "印第安纳·琼斯", "杰伊·盖茨比"] },
      { q: "留下“快乐时喝香槟，悲伤时也喝香槟”这句名言的Bollinger女掌门人是？", a: "莉莉·堡林爵", x: ["凯歌夫人", "波默里夫人", "可可·香奈儿"] },
    ],
  },
  fr_bollinger_ga: {
    fact: "只在好年份酿造的Bollinger年份香槟。所有酒液都在小橡木桶中发酵。",
    quiz: [
      { q: "Bollinger La Grande Année在瓶中长期陈酿期间使用的瓶塞是？", a: "天然软木塞", x: ["皇冠盖", "螺旋盖", "玻璃塞"] },
    ],
  },
  fr_bollinger_rd: {
    fact: "在酒泥上长期陈酿、直到临上市前才除渣的Bollinger杰作。首个年份为1952年。",
    quiz: [
      { q: "Bollinger R.D.中的“R.D.”是什么意思？", a: "近期除渣（Récemment Dégorgé）", x: ["皇家供货（Royal Delivery）", "干红（Red Dry）", "酒庄珍藏（Réserve du Domaine）"] },
      { q: "Bollinger R.D.在香槟酒标史上首创了什么？", a: "在酒标上注明除渣日期", x: ["在酒标上刻盲文", "不贴酒标，直接印在瓶身上", "在酒标上加二维码"] },
    ],
  },
  fr_salon: {
    fact: "始于Eugène-Aimé Salon在20世纪初为自己饮用而酿造的香槟。只在杰出年份酿造，一个世纪只出品几十次。",
    quiz: [
      { q: "Salon有什么特别的酿造规则？", a: "只用勒梅尼勒-奥热一个村的霞多丽，且只在杰出年份酿造", x: ["每年酿造且只出桃红", "只混合多个年份，推出无年份酒", "只用黑皮诺"] },
      { q: "与Salon比邻而居、同属Laurent-Perrier集团的姊妹酒庄是？", a: "Delamotte", x: ["Krug", "Bollinger", "Henriot"] },
    ],
  },
  fr_taittinger_br: {
    fact: "霞多丽比例较高、轻盈优雅的Taittinger招牌无年份香槟。在兰斯古老的圣尼凯斯修道院地下白垩酒窖中陈酿。",
    quiz: [
      { q: "1932年被Pierre Taittinger买下并冠上自己姓氏、作为Taittinger前身的老牌香槟酒庄是？", a: "Forest-Fourneaux", x: ["Heidsieck Monopole", "Ruinart", "Delamotte"] },
    ],
  },
  fr_taittinger_comtes: {
    fact: "只在好年份以白丘（Côte des Blancs）特级园霞多丽酿造的Taittinger顶级特酿。首个年份为1952年。",
    quiz: [
      { q: "Taittinger Comtes de Champagne这个名字纪念的人物是？", a: "从十字军东征归来的香槟伯爵蒂博四世", x: ["查理曼大帝", "拿破仑一世", "兰斯大主教圣雷米"] },
    ],
  },
  fr_polroger_br: {
    fact: "1849年始于埃佩尔奈的家族酒庄。获英国王室供货认证，也曾用于2011年威廉王子的婚礼。",
    quiz: [
      { q: "Pol Roger Brut Réserve在英国因瓶颈锡箔的颜色而得到的昵称是？", a: "White Foil（白箔）", x: ["Gold Foil（金箔）", "Black Label（黑标）", "Yellow Label（黄标）"] },
    ],
  },
  fr_polroger_swc: {
    fact: "为纪念一生钟爱Pol Roger的丘吉尔，自1975年份起酿造的顶级特酿。采用丘吉尔喜爱的、以黑皮诺为主的强劲风格。",
    quiz: [
      { q: "1965年这款酒的主人公丘吉尔去世后，Pol Roger对出口英国的酒标做了什么？", a: "给酒标镶上了黑边", x: ["在酒标上加入丘吉尔肖像", "当年停止生产", "把酒瓶涂成红色"] },
      { q: "丘吉尔为纪念Pol Roger家族的Odette Pol-Roger，给自己的赛马取了什么名字？", a: "Pol Roger", x: ["Champagne", "Victory", "Blenheim"] },
    ],
  },
  fr_lp_lacuvee: {
    fact: "1812年始于图尔-马恩（Tours-sur-Marne）的酒庄的招牌无年份香槟。霞多丽比例高，清澈清新。",
    quiz: [
      { q: "自1949年起掌管Laurent-Perrier、将其打造成世界级酒庄的人物是？", a: "Bernard de Nonancourt", x: ["Pierre Taittinger", "Lily Bollinger", "Joseph Krug"] },
    ],
  },
  fr_lp_rose: {
    fact: "1968年推出，装在仿亨利四世时代酒瓶、带盾形纹章的瓶中。被视为以100%黑皮诺酿造的桃红香槟的标杆。",
    quiz: [
      { q: "Laurent-Perrier Cuvée Rosé以什么方式呈现粉红色？", a: "浸泡黑皮诺果皮萃取颜色的浸渍法", x: ["混入红葡萄酒", "添加植物色素", "在橡木桶中长期陈酿"] },
    ],
  },
  fr_lp_gs: {
    fact: "混合三个杰出年份的酒、力求重现“完美年份”的Laurent-Perrier顶级特酿。每个版本都有“Itération”编号。",
    quiz: [
      { q: "Laurent-Perrier Grand Siècle与大多数顶级香槟的不同之处是？", a: "混合三个杰出年份酿造", x: ["只用单一年份的葡萄", "只酿桃红", "在橡木桶中陈酿10年"] },
      { q: "“Grand Siècle（伟大的世纪）”所指时代的君主是？", a: "路易十四", x: ["路易十六", "拿破仑一世", "亨利四世"] },
    ],
  },
  fr_r_ruinart: {
    fact: "1729年创立的第一家香槟酒庄Ruinart的招牌无年份香槟。装在仿18世纪酒瓶的圆润瓶中。",
    quiz: [
      { q: "R de Ruinart陈酿所在的Ruinart地下酒窖，即自罗马时代开凿的白垩采石场，被称为？", a: "Crayères", x: ["Cuverie", "Chai", "Bodega"] },
    ],
  },
  fr_dom_ruinart: {
    fact: "只在好年份以特级园霞多丽酿造的Ruinart顶级特酿。透明圆瓶中的金黄色是线索。",
    quiz: [
      { q: "Dom Ruinart这个名字纪念的、相传劝侄子经营香槟生意的修士是？", a: "Dom Thierry Ruinart", x: ["Dom Pierre Pérignon", "圣伯尔纳", "圣雷米"] },
    ],
  },
  fr_pj_grandbrut: {
    fact: "1811年始于埃佩尔奈的Perrier-Jouët的招牌无年份香槟。黑皮诺和莫尼耶皮诺比例高，果香丰富。",
    quiz: [
      { q: "Perrier-Jouët Grand Brut的酒庄名“Perrier-Jouët”来自什么？", a: "创始夫妇两人的姓氏", x: ["两个村庄的名字", "创始兄弟的名字", "香槟区两块葡萄园的名字"] },
      { q: "象征Perrier-Jouët、由新艺术运动艺术家埃米尔·加莱所绘的花是？", a: "银莲花", x: ["玫瑰", "百合", "郁金香"] },
    ],
  },
  fr_pj_blason: {
    fact: "酒标仿照Perrier-Jouët家族纹章的桃红香槟。混入黑皮诺红葡萄酒，呈现红色水果香气。",
    quiz: [
      { q: "Perrier-Jouët Blason Rosé中的“Blason”是什么意思？", a: "家族纹章（盾形图案）", x: ["玫瑰花", "女王", "初恋"] },
    ],
  },
  fr_armand_rose: {
    fact: "以粉色金属镀瓶、贴着白镴黑桃标的桃红香槟。2014年说唱歌手Jay-Z收购了该品牌。",
    quiz: [
      { q: "Armand de Brignac Rosé因瓶上白镴酒标的形状而得的别称是？", a: "黑桃A（Ace of Spades）", x: ["红心K（King of Hearts）", "方块Q（Queen of Diamonds）", "小丑（Joker）"] },
      { q: "2014年收购Armand de Brignac的美国说唱歌手是？", a: "Jay-Z", x: ["Kanye West", "Snoop Dogg", "Drake"] },
    ],
  },
  fr_piper: {
    fact: "凭鲜红的酒标一眼就能认出的香槟。长期担任戛纳电影节的官方香槟。",
    quiz: [
      { q: "相传Piper-Heidsieck的创始人将首款特酿献给了哪位王后？", a: "玛丽·安托瓦内特", x: ["约瑟芬皇后", "维多利亚女王", "凯瑟琳·德·美第奇"] },
    ],
  },
  fr_charles_heidsieck: {
    fact: "1851年由Charles-Camille Heidsieck创立的酒庄。以大量混入储备酒、陈年风味浓郁的无年份香槟闻名。",
    quiz: [
      { q: "在美国被称为“香槟查理”的Charles Heidsieck创始人有过什么经历？", a: "南北战争期间以间谍罪名入狱", x: ["在泰坦尼克号沉船中幸存", "加入了拿破仑军队", "在淘金热中发了大财"] },
    ],
  },
  fr_feuillatte: {
    fact: "1976年由众多种植农户的合作社联合创立的品牌，是法国最畅销的香槟之一。",
    quiz: [
      { q: "酿造Nicolas Feuillatte香槟的机构有什么特点？", a: "由数千名种植者组成的合作社联盟", x: ["自17世纪传承至今的贵族世家", "只拥有一块葡萄园的独占园酒庄", "俄国皇室专属酒庄"] },
    ],
  },
  fr_mumm: {
    fact: "1827年由来自德国的Mumm家族在兰斯创立的酒庄。以斜穿酒标的红色绶带闻名。",
    quiz: [
      { q: "Mumm Cordon Rouge的红色绶带灵感来自什么？", a: "法国荣誉军团勋章的红色绶带", x: ["法国国旗", "枢机主教的红帽", "俄国皇室纹章"] },
      { q: "自2000年起，Mumm Cordon Rouge长期担任哪项体育赛事的颁奖台香槟？", a: "一级方程式（F1）", x: ["环法自行车赛", "温布尔登网球锦标赛", "FIFA世界杯"] },
    ],
  },
  fr_lanson_black: {
    fact: "1760年始于兰斯的酒庄的招牌无年份香槟。不进行苹果酸-乳酸发酵，保留了苹果般清爽的酸度。",
    quiz: [
      { q: "Lanson Le Black Label瓶颈上刻着的酒庄标志是？", a: "马耳他十字", x: ["百合花纹章", "狮子", "皇冠"] },
      { q: "Lanson自1977年起结缘并担任官方香槟的网球赛事是？", a: "温布尔登", x: ["法网（罗兰·加洛斯）", "美网", "澳网"] },
    ],
  },
  fr_billecart_rose: {
    fact: "以透明瓶中淡淡的三文鱼色闻名的桃红香槟。在霞多丽比例较高的调配中混入少许黑皮诺红葡萄酒，风格细腻。",
    quiz: [
      { q: "Billecart-Salmon这个名字来自哪里？", a: "1818年结婚的创始夫妇两人的姓氏", x: ["三文鱼（salmon）般的桃红酒色", "两个村庄的名字", "创始兄弟的绰号"] },
    ],
  },
  fr_selosse_initial: {
    fact: "以自种葡萄酿酒的“果农香槟”热潮的发源地。像勃艮第一样在橡木桶中发酵，酿出如葡萄酒般的香槟。",
    quiz: [
      { q: "掌管Jacques Selosse并掀起果农香槟热潮的人物是？", a: "Anselme Selosse", x: ["Rémi Krug", "Bernard de Nonancourt", "Charles Philipponnat"] },
      { q: "Jacques Selosse这类果农香槟酒标上的“RM”是什么意思？", a: "自种自酿的农户（Récoltant-Manipulant）", x: ["购买葡萄酿酒的酒庄（Négociant-Manipulant）", "合作社（Coopérative de Manipulation）", "经销商品牌（Marque d'Acheteur）"] },
    ],
  },
  fr_philipponnat_goisses: {
    fact: "俯瞰马恩河、坡度近45度的朝南山坡上的5.5公顷葡萄园。这里比香槟区其他地方更温暖，出产强劲的香槟。",
    quiz: [
      { q: "Philipponnat Clos des Goisses在香槟史上有何意义？", a: "被视为第一款单一园香槟", x: ["第一款桃红香槟", "第一款天然型（Brut）香槟", "第一款白中白香槟"] },
    ],
  },
  fr_deutz: {
    fact: "1838年由来自德国的William Deutz与Pierre-Hubert Geldermann在阿伊创立的酒庄。三个品种均衡调配，平衡感出色。",
    quiz: [
      { q: "1993年收购Deutz的香槟酒庄是？", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  fr_henriot: {
    fact: "1808年由Apolline Henriot在兰斯创立的家族酒庄。以霞多丽比例较高的细腻风格著称。",
    quiz: [
      { q: "Henriot家族在1990年代买下的两家勃艮第名门是？", a: "Bouchard Père & Fils和William Fèvre", x: ["Louis Jadot和Joseph Drouhin", "Louis Latour和Faiveley", "Leroy和Leflaive"] },
    ],
  },
  fr_gosset: {
    fact: "1584年Pierre Gosset在阿伊开始酿造无气泡葡萄酒，是香槟区最古老的葡萄酒酒庄。使用仿古瓶型的酒瓶。",
    quiz: [
      { q: "Gosset被视为香槟区最古老葡萄酒酒庄，依据是它的创立年份。这一年是？", a: "1584年", x: ["1729年", "1743年", "1811年"] },
    ],
  },
  fr_pommery: {
    fact: "由丧夫的波默里夫人（Louise Pommery）发扬光大的兰斯酒庄。以连通罗马时代白垩采石场的巨大地下酒窖闻名。",
    quiz: [
      { q: "Pommery于1874年首次推出、改写了香槟历史的风格是？", a: "几乎去除甜味的天然型（Brut）", x: ["桃红香槟", "年份香槟", "白中白"] },
      { q: "带领Pommery首推天然型香槟的女性是？", a: "波默里夫人", x: ["凯歌夫人", "莉莉·堡林爵", "Carol Duval-Leroy"] },
    ],
  },
  fr_duval_leroy: {
    fact: "1859年始于白丘韦尔蒂（Vertus）村的家族酒庄。在大型酒庄中少见地至今仍由创始家族经营。",
    quiz: [
      { q: "1991年丧夫后一直掌管Duval-Leroy的女性经营者是？", a: "Carol Duval-Leroy", x: ["莉莉·堡林爵", "凯歌夫人", "波默里夫人"] },
    ],
  },
  fr_ayala: {
    fact: "1860年由Edmond de Ayala在阿伊创立的酒庄。很早就以减少甜度的干型香槟闻名。",
    quiz: [
      { q: "2005年收购Ayala的香槟家族是？", a: "Bollinger", x: ["LVMH", "Louis Roederer", "Taittinger"] },
    ],
  },
  fr_delamotte: {
    fact: "创立于1760年，是香槟区数一数二古老的酒庄。以白丘特级园的霞多丽酿造。",
    quiz: [
      { q: "与Delamotte比邻而居的姊妹酒庄、只在好年份以单一村庄霞多丽酿造的传奇香槟是？", a: "Salon", x: ["Krug Clos du Mesnil", "Dom Ruinart", "Taittinger Comtes de Champagne"] },
    ],
  },
  fr_dagueneau_silex: {
    fact: "将普伊-富美提升为世界顶级长相思产区的“卢瓦尔坏小子”Dagueneau的代表作。2008年他因轻型飞机事故去世后，由儿子Louis-Benjamin接班。",
    quiz: [
      { q: "Didier Dagueneau“Silex”这个名字指的是？", a: "燧石土壤", x: ["银色酒标", "拉丁语的“沉默”", "创始人爱犬的名字"] },
    ],
  },
  fr_ladoucette: {
    fact: "在普伊-富美拥有最大庄园的Ladoucette家族的酒。大本营是宛如童话城堡的Château du Nozet。",
    quiz: [
      { q: "酿造de Ladoucette普伊-富美的Ladoucette家族，其大本营城堡是？", a: "Château du Nozet", x: ["Château de Tracy", "Château-Grillet", "Château de Saumur"] },
    ],
  },
  fr_bourgeois_sancerre: {
    fact: "在桑塞尔的沙维尼奥勒村世代传承的家族酒庄的招牌桑塞尔，被视为清爽长相思的教科书。",
    quiz: [
      { q: "Henri Bourgeois于2000年为寻找长相思而新建酒庄“Clos Henri”的地方是？", a: "新西兰马尔堡", x: ["智利卡萨布兰卡谷", "南非斯泰伦博斯", "美国纳帕谷"] },
      { q: "Henri Bourgeois所在的沙维尼奥勒村还以什么闻名？", a: "山羊奶酪Crottin de Chavignol", x: ["生蚝", "松露", "芥末酱"] },
    ],
  },
  fr_jolivet_sancerre: {
    fact: "没有自有葡萄园、以酒商身份起步，后来成为卢瓦尔东部代表的年轻酒庄。同时酿造桑塞尔和普伊-富美。",
    quiz: [
      { q: "Pascal Jolivet以自己名字创立葡萄酒公司是在哪一年？", a: "1987年", x: ["1808年", "1920年", "1961年"] },
    ],
  },
  fr_vacheron_sancerre: {
    fact: "坐落在桑塞尔镇中心的家族酒庄。将生物动力法种植的长相思按地块分开酿造。",
    quiz: [
      { q: "Domaine Vacheron在桑塞尔少见地获得高度评价的另一款酒是？", a: "黑皮诺红葡萄酒", x: ["赤霞珠红葡萄酒", "贵腐甜酒", "加强型葡萄酒"] },
    ],
  },
  fr_huet_vouvray: {
    fact: "武弗雷的代表性白诗南名门。每年根据收成情况，从同一块园中分别酿造干型、半干型和甜型。",
    quiz: [
      { q: "Domaine Huet三块著名的单一园是Le Mont、Clos du Bourg和哪一块？", a: "Le Haut-Lieu", x: ["La Roche aux Moines", "Clos de la Dioterie", "Les Baronnes"] },
    ],
  },
  fr_joly_coulee: {
    fact: "1130年由西多会修士首次种下葡萄的园子。是少数由一个家族拥有整个AOC的独占AOC之一。",
    quiz: [
      { q: "Clos de la Coulée de Serrant的Nicolas Joly率先向全世界推广的耕作法是？", a: "生物动力法", x: ["水耕栽培", "灌溉式大规模种植", "温室栽培"] },
    ],
  },
  fr_rougeard: {
    fact: "由Charly与Nady Foucault兄弟以传统方式酿造、跻身世界级膜拜酒之列的卢瓦尔品丽珠。",
    quiz: [
      { q: "2017年买下Clos Rougeard的，是拥有波尔多Château Montrose的哪对兄弟？", a: "Martin与Olivier Bouygues兄弟", x: ["Pinault家族", "Arnault家族", "Rothschild家族"] },
    ],
  },
  fr_joguet_chinon: {
    fact: "希农第一家按地块分别推出特酿的酒庄。Clos de la Dioterie是种有老藤品丽珠的招牌葡萄园。",
    quiz: [
      { q: "Charles Joguet在1957年继承家族葡萄园之前，在巴黎从事什么？", a: "画家兼雕塑家", x: ["歌剧演员", "电影导演", "建筑师"] },
    ],
  },
  fr_pepiere_briords: {
    fact: "出自1930至50年代种下的老藤的密斯卡岱。Muscadet不是品种名而是产区名，被视为生蚝的绝配。",
    quiz: [
      { q: "Clos des Briords这类密斯卡岱酒标上的“sur lie”是什么意思？", a: "在酵母酒泥上陈酿", x: ["出自河畔葡萄园", "晚收", "在新橡木桶中陈酿"] },
    ],
  },
  fr_trimbach_csh: {
    fact: "位于于纳维尔村Rosacker特级园正中、面积1.67公顷的独占园。由Trimbach家族打理了200多年，是世界上最好的干型雷司令之一。",
    quiz: [
      { q: "Trimbach故意不在Clos Sainte Hune酒标上标注的是？", a: "特级园（Grand Cru）字样", x: ["年份", "品种名", "生产者名"] },
    ],
  },
  fr_trimbach_gewurz: {
    fact: "荔枝与玫瑰香气迸发的阿尔萨斯代表品种。Trimbach以将其酿成不带甜味的干型而闻名。",
    quiz: [
      { q: "酿造Trimbach琼瑶浆的Trimbach在阿尔萨斯开始酿酒是在哪一年？", a: "1626年", x: ["1639年", "1731年", "1919年"] },
    ],
  },
  fr_hugel_gentil: {
    fact: "混合琼瑶浆、灰皮诺、雷司令、西万尼等多个品种的阿尔萨斯式调配酒。“Gentil”是昔日对高级品种调配酒的称呼。",
    quiz: [
      { q: "酿造Hugel Gentil的Hugel家族在里克威尔（Riquewihr）开始酿酒是在哪一年？", a: "1639年", x: ["1626年", "1789年", "1919年"] },
    ],
  },
  fr_hugel_riesling: {
    fact: "以黄色酒标闻名的Hugel招牌雷司令，是初识阿尔萨斯葡萄酒的人最常接触的酒款之一。",
    quiz: [
      { q: "Hugel雷司令等Hugel酒款远远就能认出的酒标颜色是？", a: "黄色", x: ["黑色", "蓝色", "红色"] },
      { q: "Hugel家族的Jean Hugel在1980年代率先推动立法的阿尔萨斯甜酒等级是？", a: "晚收（Vendanges Tardives）与贵腐精选（Sélection de Grains Nobles）", x: ["特级园与一级园", "阿尔萨斯起泡酒（Crémant d'Alsace）", "日常餐酒（Vin de Table）"] },
    ],
  },
  fr_zind_rangen: {
    fact: "位于阿尔萨斯最南端特级园Rangen火山岩陡坡上的葡萄园。Zind-Humbrecht酒庄于1959年由两个家族的葡萄园合并而成。",
    quiz: [
      { q: "掌管Zind-Humbrecht的Olivier Humbrecht在1989年成为首位获得哪项资格的法国人？", a: "葡萄酒大师（MW）", x: ["侍酒大师（MS）", "国家认证酿酒师（DNO）", "法国最佳手工业者（MOF）"] },
    ],
  },
  fr_weinbach_schlossberg: {
    fact: "坐落在1612年由嘉布遣会修士开垦的Clos des Capucins的酒庄。自1898年起由Faller家族掌管。",
    quiz: [
      { q: "1612年最早开垦Domaine Weinbach的Clos des Capucins的是？", a: "嘉布遣会修士", x: ["西多会修女", "圣殿骑士团", "耶稣会神父"] },
      { q: "出产Weinbach雷司令的Schlossberg于1975年创下的纪录是？", a: "阿尔萨斯第一个特级园", x: ["阿尔萨斯最大的合作社葡萄园", "阿尔萨斯第一块有机认证葡萄园", "法国面积最小的AOC"] },
    ],
  },
  fr_deiss_altenberg: {
    fact: "在同一块园中混种多个品种，一起采收、一起酿造。因此酒标上不写品种，只大大地写上园名。",
    quiz: [
      { q: "掌管Marcel Deiss的Jean-Michel Deiss所主张的葡萄酒理念是？", a: "风土重于品种，同一块园混种多个品种", x: ["必须100%只用一个品种", "不用橡木桶，只用陶罐（amphora）", "只酿起泡酒"] },
    ],
  },
  fr_miraval: {
    fact: "2012年推出首个年份的明星桃红代名词。Château Miraval位于普罗旺斯内陆的科朗斯（Correns）村。",
    quiz: [
      { q: "与Perrin家族一起首创Miraval桃红的好莱坞明星夫妇是？", a: "布拉德·皮特与安吉丽娜·朱莉", x: ["汤姆·克鲁斯与凯蒂·霍尔姆斯", "乔治·克鲁尼与艾迈勒·克鲁尼", "休·杰克曼与黛博拉-李·弗内斯"] },
      { q: "在Château Miraval的录音室里录制了专辑《迷墙》部分内容的乐队是？", a: "平克·弗洛伊德", x: ["披头士乐队", "滚石乐队", "皇后乐队"] },
    ],
  },
  fr_minuty_m: {
    fact: "自1936年起在圣特罗佩半岛传承的家族所酿的轻盈清爽桃红。腰身纤细的“束腰”瓶是这个家族在1960年代设计的。",
    quiz: [
      { q: "2023年成为酿造M de Minuty的Château Minuty大股东的集团是？", a: "LVMH（Moët Hennessy）", x: ["Pernod Ricard", "Castel集团", "Artémis"] },
    ],
  },
  fr_minuty_281: {
    fact: "2015年推出的Minuty顶级桃红。沿瓶身流淌而下的深蓝色装饰是它的标志。",
    quiz: [
      { q: "Château Minuty 281中的数字取自什么？", a: "一种地中海般蓝色的潘通色号", x: ["葡萄园的门牌号", "首年生产的瓶数", "葡萄园的海拔（米）"] },
    ],
  },
  fr_garrus: {
    fact: "以老藤歌海娜的葡萄在橡木桶中发酵、陈酿，是世界上最昂贵的桃红之一。2019年LVMH成为Château d'Esclans的大股东。",
    quiz: [
      { q: "Château d'Esclans Garrus与一般普罗旺斯桃红不同的酿造方式是？", a: "在橡木桶中发酵、陈酿", x: ["混合红白葡萄酒", "注入二氧化碳", "使用风干葡萄"] },
      { q: "创立Château d'Esclans（Garrus与Whispering Angel的酿造者）的人物是？", a: "Sacha Lichine", x: ["Gérard Bertrand", "Marc Perrin", "Michel Rolland"] },
    ],
  },
  fr_rockangel: {
    fact: "Whispering Angel的“兄长”级桃红。部分在橡木桶中发酵，口感更丰满圆润。",
    quiz: [
      { q: "酿造Rock Angel的Sacha Lichine的父亲、曾是波尔多Château Prieuré-Lichine主人的葡萄酒作家是？", a: "Alexis Lichine", x: ["Robert Parker", "Émile Peynaud", "Hugh Johnson"] },
    ],
  },
  fr_tempier: {
    fact: "以慕合怀特为核心，让邦多勒闻名世界的名门。Peyraud家族在1941年邦多勒AOC的诞生中也出了力。",
    quiz: [
      { q: "以Domaine Tempier的厨房与餐桌闻名、给美国名厨爱丽丝·沃特斯带来巨大启发的人物是？", a: "Lulu Peyraud", x: ["Julia Child", "Paul Bocuse", "Madame Clicquot"] },
    ],
  },
  fr_pibarnon: {
    fact: "在俯瞰大海、呈圆形剧场状的石灰质山坡上种植慕合怀特的邦多勒名门。",
    quiz: [
      { q: "1977年买下Château de Pibarnon并将其打造为邦多勒顶尖酒庄的家族是？", a: "de Saint-Victor家族", x: ["Peyraud家族", "Rougier家族", "Bertrand家族"] },
    ],
  },
  fr_simone: {
    fact: "拥有艾克斯普罗旺斯旁的微型AOC帕莱特（Palette）约一半面积的庄园。以克莱雷特为主，酿造可陈放数十年的白葡萄酒。",
    quiz: [
      { q: "自1830年起传承Château Simone的家族是？", a: "Rougier家族", x: ["Perrin家族", "Lichine家族", "Ott家族"] },
    ],
  },
  fr_daumas_gassac: {
    fact: "听从一位看出冰河期沉积土壤价值的地质学家的建议，于1978年推出首个年份的朗格多克传奇，被称为“朗格多克的特级园”。",
    quiz: [
      { q: "协助Mas de Daumas Gassac酿造首个年份的波尔多传奇酿酒学家是？", a: "Émile Peynaud", x: ["Michel Rolland", "Jules Chauvet", "Denis Dubourdieu"] },
      { q: "创立Mas de Daumas Gassac、对抗Robert Mondavi进军阿尼亚讷，并出现在纪录片《Mondovino》中的人物是？", a: "Aimé Guibert", x: ["Gérard Bertrand", "Alain Brumont", "Sacha Lichine"] },
    ],
  },
  fr_bertrand_cdr: {
    fact: "瓶底被塑造成盛开玫瑰形状的桃红。这是2010年一位年轻设计师在设计大赛中获奖的作品。",
    quiz: [
      { q: "Gérard Bertrand Côte des Roses酒瓶的特点是？", a: "瓶底呈玫瑰花形", x: ["酒瓶呈心形", "酒瓶是蓝色玻璃", "酒标上有盲文"] },
      { q: "创立Côte des Roses的Gérard Bertrand在专注葡萄酒事业之前，曾在哪个领域扬名？", a: "橄榄球", x: ["足球", "自行车", "网球"] },
    ],
  },
  fr_cedre: {
    fact: "马尔贝克故乡卡奥尔的代表性家族庄园。在有机种植的葡萄园里酿出浓郁有力的马尔贝克。",
    quiz: [
      { q: "Château du Cèdre这类卡奥尔葡萄酒，昔日因颜色深浓而得到的别称是？", a: "黑酒", x: ["血之酒", "夜之酒", "墨水酒"] },
    ],
  },
  fr_montus: {
    fact: "以100%丹娜酿造的马迪朗旗舰酒。1980年买下这座庄园的Alain Brumont把被认为粗犷的丹娜变成了高级葡萄酒。",
    quiz: [
      { q: "以Château Montus重振马迪朗声誉的人物是？", a: "Alain Brumont", x: ["Gérard Bertrand", "Aimé Guibert", "Sacha Lichine"] },
    ],
  },
  fr_cauhape: {
    fact: "以挂在树上直到深秋风干的小芒森酿造的晚收甜酒。名字意为“十一月交响曲”。",
    quiz: [
      { q: "与这款酒的产地瑞朗松有关的传说中，出生时嘴唇被抹上大蒜和瑞朗松葡萄酒的法国国王是？", a: "亨利四世", x: ["路易十四", "查理曼大帝", "拿破仑一世"] },
    ],
  },
  fr_macle: {
    fact: "在桶中酒液表面的酵母膜下陈酿6年以上的“黄葡萄酒”（vin jaune）之巅。带有核桃与香料般的香气。",
    quiz: [
      { q: "盛装Jean Macle Château-Chalon这类黄葡萄酒的传统酒瓶“clavelin”容量是？", a: "62cl", x: ["75cl", "50cl", "37.5cl"] },
      { q: "黄葡萄酒必须在桶中酵母膜下陈酿的最短时间是？", a: "6年3个月", x: ["1年", "3年", "10年"] },
    ],
  },
  fr_tissot_poulsard: {
    fact: "由Stéphane Tissot以生物动力法打理的汝拉代表性酒庄。普萨（Poulsard）是颜色淡得像桃红的汝拉本土红葡萄品种。",
    quiz: [
      { q: "在Domaine Tissot所在的阿尔布瓦长大、在此打理葡萄园并研究发酵的科学家是？", a: "路易·巴斯德", x: ["玛丽·居里", "安托万·拉瓦锡", "查尔斯·达尔文"] },
    ],
  },
};

export default T;
