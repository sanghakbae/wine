import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  sh_penfolds_bin389: {
    fact: "马克斯·舒伯特于1960年首创的赤霞珠·设拉子调配酒。因沿用陈酿过Grange的橡木桶，而被称为“小Grange”（Baby Grange）。",
    quiz: [
      { q: "Penfolds Bin 389的别称是？", a: "小Grange", x: ["小Penfolds", "澳大利亚的Pétrus", "巴罗萨的明珠"] },
    ],
  },
  sh_penfolds_bin407: {
    fact: "以1990年份首次推出的Penfolds赤霞珠。混合多个产区的葡萄，比Bin 707更适合早饮。",
    quiz: [
      { q: "像Penfolds Bin 407这样，Penfolds酒款上的“Bin”编号原本是什么？", a: "酒窖中存放葡萄酒的储酒格编号", x: ["葡萄园地块编号", "酿酒师的员工编号", "首次上市的日期"] },
    ],
  },
  sh_penfolds_bin707: {
    fact: "1964年推出首个年份的Penfolds顶级赤霞珠。葡萄品质不如预期的年份干脆不酿。",
    quiz: [
      { q: "Penfolds Bin 707中的“707”取自什么？", a: "波音707客机", x: ["创立707周年", "海拔707米的葡萄园", "第707次试酿"] },
    ],
  },
  sh_penfolds_bin28: {
    fact: "1959年推出首个年份的Penfolds招牌设拉子。名字中的“Kalimna”是Penfolds于1945年买下的巴罗萨葡萄园。",
    quiz: [
      { q: "Penfolds Bin 28上的“Kalimna”是什么的名字？", a: "Penfolds买下的巴罗萨葡萄园", x: ["创始人妻子的名字", "首任首席酿酒师的名字", "阿德莱德总部大楼"] },
    ],
  },
  sh_penfolds_koonunga: {
    fact: "1976年首次推出的Penfolds日常葡萄酒，名字取自巴罗萨谷的Koonunga Hill葡萄园。",
    quiz: [
      { q: "Penfolds Koonunga Hill首次推出是在哪一年？", a: "1976年", x: ["1936年", "1996年", "2006年"] },
    ],
  },
  sh_penfolds_sthenri: {
    fact: "与在新橡木桶中陈酿的Grange不同，它在有数十年历史的大橡木桶中陈酿，突出果味而非橡木香。",
    quiz: [
      { q: "Penfolds St Henri在什么容器中陈酿？", a: "有数十年历史的大橡木桶", x: ["法国新小橡木桶", "埋在地下的陶罐", "混凝土蛋形罐"] },
    ],
  },
  sh_penfolds_yattarna: {
    fact: "以“白色Grange”为目标，经多年试验后于1995年推出首个年份的Penfolds顶级霞多丽。",
    quiz: [
      { q: "Penfolds Yattarna这个名字在原住民语言中是什么意思？", a: "一点一点，逐渐地", x: ["白色黄金", "南风", "清水"] },
    ],
  },
  sh_penfolds_rwt: {
    fact: "将巴罗萨谷设拉子放在法国橡木桶中陈酿。与使用美国橡木桶的Grange形成对比，是Penfolds的另一座巅峰。",
    quiz: [
      { q: "Penfolds RWT是什么的缩写？", a: "Red Winemaking Trial（红葡萄酒酿造试验）", x: ["Royal Wine Treasure", "Reserve Wine Tasting", "Rare Wine Tradition"] },
    ],
  },
  sh_henschke_hillofgrace: {
    fact: "生长着1860年代种下的“祖父”葡萄树的伊顿谷单一园设拉子。自1958年起以葡萄园名推出。",
    quiz: [
      { q: "Henschke Hill of Grace这个名字来自哪里？", a: "葡萄园对面路德教堂“Gnadenberg”的英译", x: ["创始人女儿Grace的名字", "原住民圣地的名字", "纪念英国女王到访"] },
    ],
  },
  sh_henschke_edelstone: {
    fact: "出自1912年种下的伊顿谷老设拉子园。Henschke自1952年起以这块园的名字装瓶。",
    quiz: [
      { q: "Henschke Mount Edelstone葡萄园首次种下设拉子是在哪一年？", a: "1912年", x: ["1812年", "1962年", "1992年"] },
    ],
  },
  sh_torbreck_runrig: {
    fact: "在巴罗萨的老藤设拉子中混入少量维欧尼。“RunRig”取自苏格兰古老的共耕制度。",
    quiz: [
      { q: "酿造RunRig的“Torbreck”这个名字来自哪里？", a: "创始人曾做伐木工的苏格兰森林", x: ["创始人故乡的城堡名", "巴罗萨的原住民地名", "第一块葡萄园园主的姓"] },
    ],
  },
  sh_twohands_angelsshare: {
    fact: "1999年由Michael Twelftree与Richard Mintz创立的Two Hands的麦克拉伦谷设拉子。",
    quiz: [
      { q: "Two Hands Angels' Share中的“天使的份额（Angels' Share）”原本指什么？", a: "在橡木桶陈酿过程中蒸发消失的酒", x: ["采收后留在田里的葡萄", "酿酒师品尝的第一杯", "献给教会的什一税葡萄酒"] },
    ],
  },
  sh_clarendon_astralis: {
    fact: "Roman Bratasiuk创立的Clarendon Hills的顶级设拉子，以老藤葡萄酿造。",
    quiz: [
      { q: "Clarendon Hills Astralis的名字在拉丁语中是什么意思？", a: "星辰的，属于星星的", x: ["高高的山丘", "红土", "老树"] },
    ],
  },
  sh_wolfblass_yellow: {
    fact: "德国出生的酿酒师Wolf Blass于1966年创立的酒庄的招牌日常酒。黄色酒标和鹰徽是其标志。",
    quiz: [
      { q: "酿造Wolf Blass Yellow Label的Wolfgang Blass来自哪个国家？", a: "德国", x: ["奥地利", "瑞士", "荷兰"] },
    ],
  },
  sh_wolfblass_black: {
    fact: "1973年推出首个年份的Wolf Blass旗舰调配酒。连续三年摘得澳大利亚最具权威的红葡萄酒奖项而声名鹊起。",
    quiz: [
      { q: "Wolf Blass Black Label在1970年代连续三年获得的澳大利亚葡萄酒奖是？", a: "Jimmy Watson Trophy", x: ["Max Schubert Trophy", "Canberra Gold Cup", "Murray River Medal"] },
    ],
  },
  sh_jacobscreek: {
    fact: "名字源于1847年德国移民Johann Gramp在巴罗萨的雅各布溪（Jacob's Creek）畔开垦葡萄园。它是让澳大利亚葡萄酒闻名世界的代表性出口品牌。",
    quiz: [
      { q: "Jacob's Creek这个名字来自什么？", a: "流经第一块葡萄园旁的小溪名", x: ["创始人儿子的名字", "第一艘出口船的名字", "原住民酋长的名字"] },
    ],
  },
  sh_lindemans_bin65: {
    fact: "始于1843年英国外科医生Henry Lindeman在猎人谷开垦的葡萄园，是全球最畅销的澳大利亚霞多丽之一。",
    quiz: [
      { q: "酿造Lindeman's Bin 65的Lindeman's创始人Henry Lindeman原本从事什么工作？", a: "外科医生", x: ["蒸汽船船长", "金矿矿工", "圣公会牧师"] },
    ],
  },
  sh_rosemount_diamond: {
    fact: "1969年Robert Oatley在猎人谷创立的Rosemount的招牌酒。因菱形酒标而被称为“钻石标”。",
    quiz: [
      { q: "Rosemount Diamond Label这个名字来自什么？", a: "菱形（钻石形）的酒标", x: ["钻石矿旁的葡萄园", "创立60周年纪念", "瓶身镶嵌的人造宝石"] },
    ],
  },
  sh_hardys_eileen: {
    fact: "1853年英国移民Thomas Hardy创立的Hardys的旗舰设拉子，为纪念执掌家族的女主人Eileen Hardy而命名。",
    quiz: [
      { q: "Hardys Eileen Hardy Shiraz中的“Eileen Hardy”是谁？", a: "执掌Hardy家族的女主人", x: ["Hardys的首位女酿酒师", "创始人Thomas Hardy的母亲", "创立酒庄的英国贵族夫人"] },
    ],
  },
  sh_darenberg_deadarm: {
    fact: "以斜贯酒标的红色斜带闻名的d'Arenberg招牌设拉子，用一侧枝条因病枯死的老葡萄树的果实酿造。",
    quiz: [
      { q: "d'Arenberg The Dead Arm中的“Dead Arm（死臂）”指的是什么？", a: "使葡萄树一侧枝条枯死的病害", x: ["在战争中手臂受伤的创始人", "葡萄园旁干涸的河道", "首次采收时折断的压榨机"] },
    ],
  },
  sh_leeuwin_art: {
    fact: "每年将澳大利亚当代画家的作品印上酒标的“Art Series”霞多丽，让玛格丽特河成为世界级的霞多丽产区。",
    quiz: [
      { q: "在Leeuwin Estate选址时提供建议的美国葡萄酒巨匠是？", a: "罗伯特·蒙大维", x: ["欧内斯特·嘉露", "沃伦·温尼亚斯基", "杰斯·杰克逊"] },
    ],
  },
  sh_cullen_diana: {
    fact: "1971年由Kevin与Diana Cullen夫妇创立的Cullen的招牌赤霞珠调配酒。女儿Vanya Cullen以生物动力法打理葡萄园。",
    quiz: [
      { q: "Cullen Diana Madeline这个名字是为了纪念谁？", a: "共同创立酒庄的Diana Cullen", x: ["帮忙首次采收的邻居农夫的女儿", "英国王妃戴安娜", "创始人的第一个孙女"] },
    ],
  },
  sh_vassefelix: {
    fact: "1967年由医生Tom Cullity创立的玛格丽特河第一家酒庄。名字中的“Vasse”来自在这片近海失踪的一名法国水手。",
    quiz: [
      { q: "Vasse Felix中的“Felix”在拉丁语中是什么意思？", a: "幸运的", x: ["森林的", "红色的", "大海的"] },
    ],
  },
  sh_mosswood: {
    fact: "1969年由Bill Pannell博士种下葡萄树的玛格丽特河开拓型酒庄，以细腻而耐陈的赤霞珠享有盛名。",
    quiz: [
      { q: "创立Moss Wood的Bill Pannell原本的职业是？", a: "医生", x: ["律师", "矿山工程师", "高中教师"] },
    ],
  },
  sh_capementelle: {
    fact: "1970年David Hohnen创立的玛格丽特河早期酒庄所酿的赤霞珠。",
    quiz: [
      { q: "创立Cape Mentelle的David Hohnen于1985年在新西兰创立的另一家酒庄是？", a: "Cloudy Bay", x: ["Villa Maria", "Oyster Bay", "Kim Crawford"] },
    ],
  },
  sh_grosset_polishhill: {
    fact: "Jeffrey Grosset在克莱尔谷波兰山河（Polish Hill River）多石贫瘠的土地上酿造的干型雷司令，被视为澳大利亚雷司令的标杆。",
    quiz: [
      { q: "Grosset Polish Hill中的“Polish Hill”这个地名来自哪里？", a: "19世纪定居于此的波兰移民", x: ["光亮（polish）的岩石", "第一块葡萄园园主的姓", "波兰王室的赏赐"] },
      { q: "Grosset等克莱尔谷雷司令生产者在2000年一起开始用来代替软木塞的瓶塞是？", a: "螺旋盖", x: ["玻璃塞", "蜡封", "皇冠盖"] },
    ],
  },
  sh_jimbarry_armagh: {
    fact: "以克莱尔谷“Armagh”一带的单一园葡萄酿造的Jim Barry顶级设拉子，被视为澳大利亚的代表性标志设拉子。",
    quiz: [
      { q: "Jim Barry The Armagh中的“Armagh”原本是哪个国家的地名？", a: "爱尔兰", x: ["苏格兰", "威尔士", "英格兰"] },
    ],
  },
  sh_wynns_blacklabel: {
    fact: "1954年推出首个年份的库纳瓦拉赤霞珠标杆。酒标上带三角山墙的建筑，是John Riddoch于1891年建造的酒庄。",
    quiz: [
      { q: "Wynns Coonawarra Black Label酒标上所画酒庄建筑的特点是？", a: "三个尖尖的山墙屋顶", x: ["圆形穹顶", "高高的钟楼", "巨大的风车"] },
    ],
  },
  sh_yalumba_signature: {
    fact: "创立于1849年、澳大利亚最古老的家族酒庄的招牌红葡萄酒。酒庄设有自制橡木桶的工坊。",
    quiz: [
      { q: "Yalumba The Signature酒标上每年都会加入的是？", a: "对酒庄有贡献之人的签名", x: ["创始人的肖像", "当年的降雨量图表", "葡萄园航拍地图"] },
      { q: "1849年创立Yalumba的Samuel Smith原本的职业是？", a: "啤酒酿造商", x: ["船长", "银行家", "铁匠"] },
    ],
  },
  sh_brownbrothers_omf: {
    fact: "维多利亚州米拉瓦（Milawa）的Brown家族酿造的甜酒。在带橙花香的橙花麝香（Orange Muscat）中混入芙罗拉（Flora）。",
    quiz: [
      { q: "酿造Brown Brothers Orange Muscat & Flora的Brown家族在米拉瓦酿出第一款酒是在哪一年？", a: "1889年", x: ["1789年", "1939年", "1969年"] },
    ],
  },
  sh_mollydooker_boxer: {
    fact: "Sparky与Sarah Marquis夫妇于2005年创立的Mollydooker的招牌设拉子。以漫画般的酒标和浓郁熟透的口感闻名。",
    quiz: [
      { q: "酿造The Boxer的“Mollydooker”在澳大利亚俚语中是什么意思？", a: "左撇子", x: ["酒鬼", "袋鼠猎人", "偷葡萄的贼"] },
      { q: "打开Mollydooker The Boxer后立即把酒瓶倒过来用力摇晃的“Mollydooker Shake”，目的是？", a: "排出为保持新鲜而充入的氮气", x: ["把沉淀物摇匀", "制造气泡", "让软木塞变软"] },
    ],
  },
  sh_seppeltsfield_para100: {
    fact: "每年都将恰好100年前酿下的一桶茶色波特装瓶推出。世界上每年都这样做的只有Seppeltsfield。",
    quiz: [
      { q: "Seppeltsfield Para 100 Year Old Tawny的传统始于哪一年，也就是首次单独留出一桶、准备100年后开启的年份？", a: "1878年", x: ["1778年", "1928年", "1958年"] },
    ],
  },
  sh_debortoli_nobleone: {
    fact: "以感染贵腐菌的赛美蓉酿造的澳大利亚代表性甜酒。由1928年意大利移民家族创立的De Bortoli于1982年首次酿造。",
    quiz: [
      { q: "1982年首次酿造De Bortoli Noble One的酿酒师是？", a: "Darren De Bortoli", x: ["Max Schubert", "Wolf Blass", "Peter Lehmann"] },
    ],
  },
  sh_19crimes: {
    fact: "每张酒标上都印着从英国被流放到澳大利亚的真实囚犯的面孔。用手机应用扫描，囚犯就会动起来讲述自己的故事。",
    quiz: [
      { q: "19 Crimes这个名字来自什么？", a: "可被判流放澳大利亚的19种罪名", x: ["创始人犯下的19个错误", "19名越狱犯", "抵达澳大利亚的第19艘囚船"] },
    ],
  },
  sh_tyrrells_vat1: {
    fact: "不用橡木桶、以低酒精度轻盈酿造，但经长期瓶陈后会绽放烤面包与蜂蜜香气的猎人谷赛美蓉传奇。",
    quiz: [
      { q: "酿造Tyrrell's Vat 1的Tyrrell's于1971年推出、被视为澳大利亚首款商业霞多丽的酒是？", a: "Vat 47", x: ["Bin 65", "Yattarna", "Art Series"] },
    ],
  },
  sh_cloudybay_tekoko: {
    fact: "以野生酵母在橡木桶中发酵、陈酿的Cloudy Bay特别版长相思。与清爽的基础款长相思不同，口感奶油般厚重。",
    quiz: [
      { q: "Cloudy Bay Te Koko这个名字来自哪里？", a: "云湾（Cloudy Bay）海湾的毛利语名称", x: ["创始人女儿的毛利名", "酒庄后山的名字", "首次采收之日升起的星座"] },
    ],
  },
  sh_kimcrawford_sb: {
    fact: "1996年由酿酒师Kim Crawford和妻子Erica创立的品牌。以热带水果香气丰富的马尔堡长相思赢得世界性人气。",
    quiz: [
      { q: "Kim Crawford Sauvignon Blanc中的“Kim Crawford”是谁？", a: "创立酒庄的新西兰酿酒师", x: ["卖出第一块葡萄园的农夫", "澳大利亚板球国家队队员", "马尔堡首任市长"] },
    ],
  },
  sh_villamaria_privatebin: {
    fact: "1961年George Fistonich在奥克兰创立的酒庄，是在新西兰葡萄酒中推广螺旋盖的先驱。",
    quiz: [
      { q: "Villa Maria在2001年做出的、大型酒庄中少见的决定是？", a: "所有酒都改用螺旋盖代替软木塞", x: ["停止生产白葡萄酒", "开始只用罐装", "全面停止出口"] },
    ],
  },
  sh_oysterbay_sb: {
    fact: "Delegat家族打造的马尔堡长相思品牌。以清爽干净的口感出口到世界多个国家。",
    quiz: [
      { q: "酿造Oyster Bay的Delegat家族根源是？", a: "克罗地亚移民", x: ["苏格兰移民", "荷兰移民", "毛利部落"] },
    ],
  },
  sh_brancott_sb: {
    fact: "1973年在马尔堡开垦第一块商业葡萄园的酒庄，是开创马尔堡长相思时代的拓荒者。",
    quiz: [
      { q: "Brancott Estate以前使用的品牌名是？", a: "Montana", x: ["Kaikoura", "Blenheim Estate", "Canterbury Hill"] },
    ],
  },
  sh_dogpoint_sb: {
    fact: "曾在Cloudy Bay长期工作的葡萄种植者Ivan Sutherland与酿酒师James Healy于2002年推出首个年份的酒庄。",
    quiz: [
      { q: "创立Dog Point的两人此前共同工作过的酒庄是？", a: "Cloudy Bay", x: ["Villa Maria", "Montana", "Kim Crawford"] },
    ],
  },
  sh_greywacke_sb: {
    fact: "曾作为Cloudy Bay创始酿酒师工作25年的Kevin Judd于2009年创立的酒庄。他也是以拍摄新西兰葡萄酒风景闻名的摄影师。",
    quiz: [
      { q: "Greywacke Sauvignon Blanc中的“Greywacke”是什么？", a: "马尔堡河床上常见的砂岩", x: ["创始人养的灰狗", "雾蒙蒙的黎明天空", "毛利传说中的鲸鱼"] },
    ],
  },
  sh_feltonroad_pn: {
    fact: "中奥塔哥班诺克本的代表性酒庄，以生物动力法种植葡萄，将新西兰黑皮诺提升至世界顶尖水准。",
    quiz: [
      { q: "Felton Road Bannockburn Pinot Noir的葡萄园采用的耕作法是？", a: "生物动力法", x: ["水耕栽培", "温室栽培", "化肥集约耕作"] },
    ],
  },
  sh_atarangi_pn: {
    fact: "1980年Clive Paton在马丁堡创立的开拓型酒庄。“Ata Rangi”在毛利语中意为“新的开始”或“黎明的天空”。",
    quiz: [
      { q: "Ata Rangi黑皮诺所用的“Gumboot（胶靴）克隆”是怎样进入新西兰的？", a: "藏在胶靴里偷带入境的枝条被海关没收后种了下来", x: ["法国大使作为礼物送来", "候鸟带来了种子", "大学研究所杂交培育"] },
    ],
  },
  sh_craggy_sophia: {
    fact: "以霍克斯湾砾石地吉布利特砾石区（Gimblett Gravels）的葡萄酿造、以梅洛为主的Craggy Range波尔多式调配酒。",
    quiz: [
      { q: "耸立在Craggy Range（Sophia的酿造者）酒庄后方、在毛利传说中是沉睡巨人的山峰是？", a: "蒂马塔峰（Te Mata Peak）", x: ["鲁阿佩胡山", "库克山", "塔拉纳基山"] },
    ],
  },
  sh_temata_coleraine: {
    fact: "新西兰波尔多式调配酒的先驱，由霍克斯湾Buck家族经营的Te Mata Estate酿造。",
    quiz: [
      { q: "Te Mata Coleraine的首个年份是？", a: "1982年", x: ["1952年", "2002年", "2012年"] },
    ],
  },
  sh_stoneleigh_sb: {
    fact: "名字取自马尔堡拉帕乌拉（Rapaura）地区遍布石头的古老河床葡萄园。据说白天被晒热的石头会在夜里散热，帮助葡萄成熟。",
    quiz: [
      { q: "与Stoneleigh Sauvignon Blanc之名密切相关的葡萄园特征是？", a: "布满古河床圆石的土地", x: ["海边沙丘", "覆盖火山灰的山坡", "石灰岩峭壁上的梯田"] },
    ],
  },
  sh_saintclair_sb: {
    fact: "原本种植并出售葡萄的Ibbotson夫妇于1994年推出自有葡萄酒，由此起步的马尔堡家族酒庄。",
    quiz: [
      { q: "Saint Clair Sauvignon Blanc中的“Saint Clair”源自谁？", a: "最早开垦这片土地的移民James Sinclair", x: ["创始人的女儿Clair", "法国传教士克莱尔修女", "首个出口国的王后"] },
    ],
  },
  sh_mtdifficulty_pn: {
    fact: "由中奥塔哥班诺克本的葡萄种植者联合创立的酒庄，直接沿用了葡萄园上方那座山的名字。",
    quiz: [
      { q: "Mt Difficulty Pinot Noir中的“Mt Difficulty”是什么的名字？", a: "俯瞰葡萄园的山", x: ["种植艰难的第一年的绰号", "创始人登过的喜马拉雅山峰", "旧金矿的矿井"] },
    ],
  },
  sh_rippon_pn: {
    fact: "坐落在湖畔山坡上的家族葡萄园，以湖泊与南阿尔卑斯山为背景的如画风景闻名。",
    quiz: [
      { q: "Rippon Mature Vine Pinot Noir的葡萄园俯瞰的湖泊是？", a: "瓦纳卡湖", x: ["陶波湖", "罗托鲁阿湖", "特卡波湖"] },
    ],
  },
  sh_sena: {
    fact: "Eduardo Chadwick与罗伯特·蒙大维携手、于1995年推出首个年份的智利标志性葡萄酒。如今由Chadwick家族独立酿造。",
    quiz: [
      { q: "与Eduardo Chadwick共同创立Seña的美国纳帕谷葡萄酒名人是？", a: "罗伯特·蒙大维", x: ["杰斯·杰克逊", "欧内斯特·嘉露", "沃伦·温尼亚斯基"] },
    ],
  },
  sh_donmelchor: {
    fact: "1987年推出首个年份的Concha y Toro顶级赤霞珠，出自安第斯山麓普恩特阿尔托（Puente Alto）的葡萄园。",
    quiz: [
      { q: "Don Melchor这个名字的主人公是？", a: "1883年创立Concha y Toro的创始人", x: ["智利独立军将领", "首任首席酿酒师", "出售葡萄园的西班牙贵族"] },
    ],
  },
  sh_montes_alpham: {
    fact: "Montes于1996年推出首个年份的波尔多式调配标志酒款，以空加瓜谷阿帕塔山丘的葡萄酿造。",
    quiz: [
      { q: "Montes Alpha M的首个年份是？", a: "1996年", x: ["1976年", "2006年", "2016年"] },
    ],
  },
  sh_montes_folly: {
    fact: "在无人种植葡萄的阿帕塔陡峭山坡上种下西拉，因而得名“Folly（荒唐之举）”。也以古怪的绘画酒标闻名。",
    quiz: [
      { q: "绘制Montes Folly酒标的英国画家是？", a: "拉尔夫·斯特德曼", x: ["大卫·霍克尼", "昆廷·布莱克", "班克斯"] },
    ],
  },
  sh_montes_purpleangel: {
    fact: "以象征智利的品种佳美娜酿造的Montes标志酒款。佳美娜长期被误认为梅洛，直到1994年才被正名。",
    quiz: [
      { q: "像Montes Purple Angel一样出现在每张Montes酒标上的天使，据说是谁的守护天使？", a: "共同创始人道格拉斯·默里", x: ["创始人Aurelio Montes的女儿", "智利独立英雄奥希金斯", "首个出口国的女王"] },
      { q: "Montes Purple Angel的佳美娜在1994年正名之前，在智利被误认为哪个品种？", a: "梅洛", x: ["马尔贝克", "西拉", "黑皮诺"] },
    ],
  },
  sh_closapalta: {
    fact: "1997年推出首个年份的Lapostolle标志酒款。2005年份在2008年荣登《葡萄酒观察家》“年度葡萄酒”第一名。",
    quiz: [
      { q: "酿造Clos Apalta的Marnier-Lapostolle家族创造的著名法国酒是？", a: "柑曼怡（Grand Marnier）", x: ["君度（Cointreau）", "查特酒（Chartreuse）", "廊酒（Bénédictine）"] },
    ],
  },
  sh_vinedochadwick: {
    fact: "1999年推出首个年份的Chadwick家族单一园赤霞珠。在2004年柏林盲品会上力压波尔多一级庄夺得第一。",
    quiz: [
      { q: "Viñedo Chadwick葡萄园原本是什么？", a: "Eduardo Chadwick父亲的马球场", x: ["智利空军机场", "铜矿", "修道院菜园"] },
    ],
  },
  sh_casaconcha_cs: {
    fact: "Concha y Toro的高端系列，以产区个性鲜明的葡萄园葡萄酿造。其中赤霞珠以普恩特阿尔托的葡萄酿成。",
    quiz: [
      { q: "Marqués de Casa Concha这个名字取自什么？", a: "西班牙国王授予Concha家族的侯爵爵位", x: ["第一块葡萄园旁的教堂名", "创始人妻子的娘家姓", "智利首任总统的绰号"] },
    ],
  },
  sh_santarita_120: {
    fact: "为纪念1814年独立战争时藏身酒庄地下酒窖而保住性命的120名独立军士兵而命名，是在韩国最受欢迎的智利葡萄酒之一。",
    quiz: [
      { q: "Santa Rita 120中的“120”代表什么？", a: "藏身酒庄酒窖的120名独立军士兵", x: ["创立120周年", "树龄120年的葡萄树", "120个橡木桶"] },
      { q: "在1814年Santa Rita 120的故事中，把独立军士兵藏进酒窖的庄园女主人是？", a: "Paula Jaraquemada", x: ["Eva Perón", "Gabriela Mistral", "Isabel Allende"] },
    ],
  },
  sh_santarita_casareal: {
    fact: "Santa Rita以迈坡谷Alto Jahuel老赤霞珠园的葡萄酿造的旗舰酒。",
    quiz: [
      { q: "酿造Casa Real的Santa Rita酒庄创立于哪一年？", a: "1880年", x: ["1780年", "1930年", "1960年"] },
    ],
  },
  sh_errazuriz_donmax: {
    fact: "Errázuriz为纪念创始人而酿造的标志酒款，以阿空加瓜谷的葡萄酿成。",
    quiz: [
      { q: "Errázuriz Don Maximiano这个名字的主人公是？", a: "1870年创立酒庄的创始人", x: ["智利首任总统", "首任首席酿酒师", "传下葡萄园的西班牙修士"] },
    ],
  },
  sh_conosur_bicicleta: {
    fact: "酒标上的自行车，是为了致敬骑车往来于葡萄园间工作的工人。Cono Sur于1993年创立，让智利黑皮诺走进了大众。",
    quiz: [
      { q: "Cono Sur Bicicleta酒标上画着自行车的原因是？", a: "致敬骑车往来于葡萄园的工人", x: ["创始人是自行车运动员出身", "它是环法自行车赛的官方用酒", "有一块自行车形状的葡萄园"] },
      { q: "Cono Sur Bicicleta中的“Cono Sur”是什么意思？", a: "南锥体（南美大陆南端）", x: ["南风", "安第斯之雪", "南十字星"] },
    ],
  },
  sh_carmen_granreserva: {
    fact: "创立于1850年、被视为智利最古老葡萄酒品牌的Carmen所酿的赤霞珠。",
    quiz: [
      { q: "酿造Carmen Gran Reserva的Viña Carmen之名来自谁？", a: "创始人Christian Lanz的妻子", x: ["歌剧《卡门》的主人公", "智利独立英雄的女儿", "酒庄的守护圣人"] },
    ],
  },
  sh_lapostolle_alexandre: {
    fact: "柑曼怡家族的Alexandra Marnier Lapostolle于1994年在智利创立的Lapostolle的主力系列。",
    quiz: [
      { q: "酿造Lapostolle Cuvée Alexandre的Lapostolle从创立之初就合作的波尔多“飞行酿酒师”是？", a: "Michel Rolland", x: ["Émile Peynaud", "Denis Dubourdieu", "Stéphane Derenoncourt"] },
    ],
  },
  sh_cousinomacul_ar: {
    fact: "由创始家族世代经营的智利历史性酒庄。在圣地亚哥市区的马夸尔（Macul）仍保留着旧酒窖。",
    quiz: [
      { q: "酿造Cousiño-Macul Antiguas Reservas的Cousiño-Macul创立于哪一年？", a: "1856年", x: ["1756年", "1926年", "1976年"] },
    ],
  },
  sh_santacarolina_reservado: {
    fact: "1875年由Luis Pereira创立的智利老牌酒庄所酿的日常赤霞珠。",
    quiz: [
      { q: "Santa Carolina这个名字来自谁？", a: "创始人Luis Pereira的妻子Carolina", x: ["西班牙王后卡罗琳娜", "创始人的长女", "智利独立英雄的母亲"] },
    ],
  },
  sh_leyda_garuma: {
    fact: "出自靠近太平洋、气候凉爽的莱达谷（Leyda）的长相思。海上吹来的冷风和雾造就了清爽的酸度。",
    quiz: [
      { q: "酿造Leyda Single Vineyard的Viña Leyda对莱达谷有何意义？", a: "最早在这片山谷开辟葡萄园的拓荒者", x: ["智利第一家酒庄", "西班牙王室创立的酒庄", "智利唯一的国营酒庄"] },
    ],
  },
  sh_emiliana_coyam: {
    fact: "有机与生物动力法的先行者Emiliana的招牌调配酒。“Coyam”在原住民马普切语中意为橡树。",
    quiz: [
      { q: "Emiliana Coyam的葡萄园采用的耕作法是？", a: "有机与生物动力法", x: ["水耕栽培", "转基因葡萄种植", "温室栽培"] },
    ],
  },
  sh_vik: {
    fact: "挪威企业家Alexander Vik创立的酒庄的标志性调配酒。葡萄园所在的米劳埃（Millahue）山谷在马普切语中意为“黄金之地”。",
    quiz: [
      { q: "创立Vik酒庄的Alexander Vik是哪国的企业家？", a: "挪威", x: ["瑞典", "丹麦", "芬兰"] },
    ],
  },
  sh_torres_santadigna: {
    fact: "西班牙Torres家族于1979年在库里科（Curicó）创立的智利酒庄的招牌酒。",
    quiz: [
      { q: "酿造Miguel Torres Santa Digna的Torres家族是哪国的葡萄酒名门？", a: "西班牙", x: ["意大利", "法国", "葡萄牙"] },
    ],
  },
  sh_catena_adrianna: {
    fact: "出自海拔约1,500米瓜尔塔亚里（Gualtallary）的Adrianna葡萄园中、古河床石块较多的地块的马尔贝克。",
    quiz: [
      { q: "Catena Zapata Adrianna Vineyard中的“Adrianna”是谁？", a: "Nicolás Catena的小女儿", x: ["Catena家族首位女酿酒师", "葡萄园旁村庄的守护圣人", "阿根廷的探戈歌手"] },
    ],
  },
  sh_catena_malbec: {
    fact: "Nicolás Catena开拓海拔1,000米以上的高海拔葡萄园，将阿根廷马尔贝克提升为世界级葡萄酒。",
    quiz: [
      { q: "Catena家族第一代Nicola Catena在门多萨种下第一块马尔贝克园是在哪一年？", a: "1902年", x: ["1802年", "1952年", "1982年"] },
    ],
  },
  sh_catena_malbecargentino: {
    fact: "以用四位女性描绘马尔贝克历史的酒标闻名的Catena Zapata马尔贝克。",
    quiz: [
      { q: "Catena Zapata Malbec Argentino酒标上的四位女性象征什么？", a: "从法国延续到阿根廷的马尔贝克历史", x: ["探戈的四个动作", "阿根廷的四季", "门多萨的四位守护圣人"] },
    ],
  },
  sh_nicolascatenazapata: {
    fact: "1997年推出首个年份的Catena Zapata旗舰调配酒，在赤霞珠中混入马尔贝克。",
    quiz: [
      { q: "Nicolás Catena Zapata中的“Zapata”是什么？", a: "Nicolás Catena母亲一方的姓氏", x: ["墨西哥革命家埃米利亚诺·萨帕塔", "葡萄园所在的村名", "祖父在意大利的故乡"] },
    ],
  },
  sh_achavalferrer_altamira: {
    fact: "1998年由阿根廷和意大利的朋友们创立的酒庄的单一园马尔贝克，出自种有老藤的Altamira园。",
    quiz: [
      { q: "Achával-Ferrer这个名字来自什么？", a: "两位共同创始人的姓氏", x: ["穿过葡萄园的两条河名", "创始人祖父母的名字", "葡萄园所在的两个村名"] },
    ],
  },
  sh_chevaldesandes: {
    fact: "波尔多圣埃美隆名庄与Terrazas de los Andes共同酿造的葡萄酒。混合马尔贝克与赤霞珠，以“安第斯的特级园”为目标。",
    quiz: [
      { q: "共同酿造Cheval des Andes的波尔多名门酒庄是？", a: "Château Cheval Blanc", x: ["Château Lafite Rothschild", "Château Margaux", "Château Haut-Brion"] },
    ],
  },
  sh_terrazas_reserva: {
    fact: "源自Moët & Chandon于1959年首次在法国境外创立的酒庄，如今是LVMH旗下的阿根廷酒庄。",
    quiz: [
      { q: "Terrazas de los Andes（安第斯的梯田）这个名字蕴含的理念是？", a: "把每个品种分别种在最适合的海拔", x: ["像水稻梯田一样把葡萄泡在水里种植", "翻越安第斯运来智利葡萄", "按台阶数量决定瓶数"] },
    ],
  },
  sh_colome_malbec: {
    fact: "创立于1831年、阿根廷最古老的酒庄之一，打理着海拔2,000米以上、世界海拔最高级别的葡萄园。",
    quiz: [
      { q: "酿造Colomé Estate Malbec的Bodega Colomé内的美术馆只收藏哪位艺术家的作品？", a: "詹姆斯·特瑞尔", x: ["安迪·沃霍尔", "草间弥生", "达米恩·赫斯特"] },
    ],
  },
  sh_trapiche_oakcask: {
    fact: "1883年创立的阿根廷代表性酒庄，是出口到世界多国的阿根廷葡萄酒品牌。",
    quiz: [
      { q: "Trapiche Oak Cask Malbec中的“trapiche”在西班牙语中原本指什么？", a: "榨取水果或甘蔗汁的压榨机", x: ["采收葡萄的篮子", "安第斯的冷风", "储存葡萄酒的洞穴"] },
    ],
  },
  sh_norton_reserva: {
    fact: "1895年由前来修建铁路的英国工程师Edmund Norton创立的酒庄。自1989年起归一个奥地利家族所有。",
    quiz: [
      { q: "1989年买下Norton（Norton Reserva的酿造者）的奥地利家族的家业是？", a: "水晶（施华洛世奇）", x: ["巧克力", "能量饮料", "钢琴"] },
    ],
  },
  sh_luigibosca_malbec: {
    fact: "1901年由西班牙移民Leoncio Arizu创立的家族酒庄，至今仍由Arizu家族经营。",
    quiz: [
      { q: "世代经营Luigi Bosca的家族是？", a: "Arizu家族", x: ["Catena家族", "Zuccardi家族", "Chadwick家族"] },
    ],
  },
  sh_zuccardi_concreto: {
    fact: "不用橡木桶，只在混凝土罐中发酵、陈酿，原汁原味呈现Paraje Altamira土地风味的马尔贝克。",
    quiz: [
      { q: "酿造Zuccardi Concreto的Zuccardi位于乌科谷的酒庄，自2019年起连续三年获得的评价是？", a: "世界最佳葡萄园（World's Best Vineyards）第一名", x: ["米其林指南三星", "列入联合国教科文组织世界遗产", "《葡萄酒观察家》年度葡萄酒第一名"] },
    ],
  },
  sh_alamos_malbec: {
    fact: "Catena家族酿造的日常马尔贝克。名字来自在门多萨葡萄园边缘排列成防风林的白杨树。",
    quiz: [
      { q: "Alamos Malbec中的“Alamos”是什么意思？", a: "作为葡萄园防风林种下的白杨树", x: ["安第斯的融雪", "原住民的丰收节", "创始人的故乡村庄"] },
    ],
  },
  sh_closdelossiete: {
    fact: "出自波尔多酿酒顾问Michel Rolland与法国投资者在乌科谷维斯塔弗洛雷斯（Vista Flores）开辟的葡萄园。",
    quiz: [
      { q: "Clos de los Siete中的“Siete（7）”指的是什么？", a: "最初共同发起的七位投资者（酒庄）", x: ["环绕葡萄园的七座山峰", "七个葡萄品种", "陈酿七年"] },
    ],
  },
  sh_elenemigo_malbec: {
    fact: "Catena Zapata首席酿酒师Alejandro Vigil与历史学家Adrianna Catena共同创立的品牌。",
    quiz: [
      { q: "El Enemigo在西班牙语中是什么意思？", a: "敌人（仇敌）", x: ["朋友", "旅人", "兄弟"] },
    ],
  },
  sh_rutini_cabmalbec: {
    fact: "1885年由意大利移民Felipe Rutini创立的门多萨传统酒庄所酿的赤霞珠·马尔贝克调配酒。",
    quiz: [
      { q: "酿造Rutini Cabernet-Malbec的Rutini创始人Felipe Rutini来自哪个国家？", a: "意大利", x: ["西班牙", "法国", "德国"] },
    ],
  },
  sh_salentein_reserve: {
    fact: "海拔1,000米以上乌科谷高地的开拓型酒庄。酒庄内设有美术馆“Killka”。",
    quiz: [
      { q: "酿造Salentein Reserve的Bodegas Salentein创始人Mijndert Pon是哪国人？", a: "荷兰", x: ["比利时", "丹麦", "瑞士"] },
    ],
  },
  sh_kaiken_ultra: {
    fact: "智利Montes的Aurelio Montes于2002年翻越安第斯山，在门多萨创立的酒庄所酿的马尔贝克。",
    quiz: [
      { q: "Kaiken Ultra Malbec中的“Kaiken”来自什么？", a: "往来于安第斯山两侧的巴塔哥尼亚野雁", x: ["安第斯原住民的太阳神", "门多萨的热风", "创始人养的马"] },
    ],
  },
  sh_trivento_reserve: {
    fact: "智利Concha y Toro于1996年在阿根廷门多萨创立的酒庄所酿的马尔贝克。",
    quiz: [
      { q: "Trivento Reserve Malbec中的“Trivento”是什么意思？", a: "吹拂门多萨葡萄园的三种风", x: ["三兄弟创始人", "三条河", "一年三次采收"] },
    ],
  },
  sh_garzon_tannat: {
    fact: "丹娜是从法国西南部传来、后成为乌拉圭代表的品种。Garzón在靠近大西洋的丘陵上开辟了葡萄园。",
    quiz: [
      { q: "靠近Bodega Garzón Tannat葡萄园的乌拉圭著名海滨度假胜地是？", a: "埃斯特角城（Punta del Este）", x: ["科帕卡巴纳", "马德普拉塔", "比尼亚德尔马"] },
    ],
  },
  sh_miolo_lote43: {
    fact: "巴西首个原产地标示产区葡萄园谷（Vale dos Vinhedos）的代表酒款。名字来自创始人最初买下的土地的地块编号。",
    quiz: [
      { q: "酿造Miolo Lote 43的Miolo家族根源是？", a: "19世纪末来到巴西的意大利移民", x: ["葡萄牙王室贵族", "德国路德宗传教士", "日本移民"] },
    ],
  },
  sh_lacetto_nebbiolo: {
    fact: "代表墨西哥葡萄酒中心瓜达卢佩谷（Valle de Guadalupe）的酒庄，尤以意大利品种内比奥罗闻名。",
    quiz: [
      { q: "酿造L.A. Cetto Nebbiolo的L.A. Cetto创始人Angelo Cetto来自哪里？", a: "意大利", x: ["西班牙", "法国", "德国"] },
    ],
  },
  sh_casamadero_3v: {
    fact: "美洲大陆最古老的酒庄以三个品种调配酿造的红葡萄酒。",
    quiz: [
      { q: "酿造Casa Madero 3V、美洲大陆最古老的酒庄Casa Madero创立于哪一年？", a: "1597年", x: ["1697年", "1797年", "1897年"] },
    ],
  },
  sh_kanonkop_paulsauer: {
    fact: "南非的代表性波尔多式调配酒。名字来自曾拥有Kanonkop农场的政治家Paul Sauer。",
    quiz: [
      { q: "Kanonkop Paul Sauer中的“Kanonkop”这个名字来自什么？", a: "船只入港时鸣炮通报的山丘", x: ["布尔战争时的大炮工厂", "像炮弹一样圆的葡萄粒", "第一任主人的军中绰号"] },
    ],
  },
  sh_kanonkop_pinotage: {
    fact: "南非自创品种皮诺塔吉（Pinotage）的名门Kanonkop的招牌酒。在无盖发酵槽中以人工压帽的方式发酵。",
    quiz: [
      { q: "Kanonkop Pinotage的品种皮诺塔吉，是1925年由黑皮诺与哪个品种杂交而成？", a: "神索（当时在南非称为“Hermitage”）", x: ["西拉", "梅洛", "佳美"] },
    ],
  },
  sh_meerlust_rubicon: {
    fact: "自1757年起由Myburgh家族世代传承的Meerlust的波尔多式调配酒，1980年推出首个年份。",
    quiz: [
      { q: "Meerlust Rubicon中“Rubicon”这个名字的含义是？", a: "无法回头的决断（凯撒渡过卢比孔河）", x: ["宝石般的红色", "葡萄园旁的河名", "创始人女儿的昵称"] },
    ],
  },
  sh_kleinconstantia_vdc: {
    fact: "1986年复活了18至19世纪欧洲王室争相追捧的传奇康斯坦提亚甜酒。装在仿古瓶型的500毫升瓶中。",
    quiz: [
      { q: "据说在圣赫勒拿岛流放期间也爱喝康斯坦提亚葡萄酒（Vin de Constance的前身）的人物是？", a: "拿破仑", x: ["路易十六", "纳尔逊将军", "俾斯麦"] },
      { q: "在小说《理智与情感》中提到康斯坦提亚葡萄酒（Vin de Constance的前身）的作家是？", a: "简·奥斯汀", x: ["夏洛蒂·勃朗特", "乔治·艾略特", "弗吉尼亚·伍尔夫"] },
    ],
  },
  sh_sadie_columella: {
    fact: "Eben Sadie以斯瓦特兰（Swartland）各地的葡萄酿造、以西拉为主的调配酒。2000年推出首个年份，成为南非葡萄酒革新的象征。",
    quiz: [
      { q: "Sadie Family Columella这个名字来自谁？", a: "撰写农业著作的古罗马作家", x: ["发现斯瓦特兰的荷兰船长", "创始人的祖父", "希腊神话中的酒神"] },
    ],
  },
  sh_boekenhoutskloof_cs: {
    fact: "弗兰施霍克（Franschhoek）的酒庄，名字在南非荷兰语中意为“开普山毛榉（boekenhout）山谷”。",
    quiz: [
      { q: "Boekenhoutskloof酒标上并排画着的七件物品是？", a: "椅子", x: ["葡萄串", "橡木桶", "酒杯"] },
    ],
  },
  sh_rustenberg_jxm: {
    fact: "自1941年起由Barlow家族打理的Rustenberg的波尔多式调配酒，以西蒙斯堡（Simonsberg）山麓的葡萄酿造。",
    quiz: [
      { q: "Rustenberg John X Merriman的主人公John X. Merriman是谁？", a: "曾拥有这座农场的开普殖民地末任总理", x: ["南非首位酿酒学教授", "英国东印度公司船长", "橄榄球国家队队长"] },
    ],
  },
  sh_vergelegen_v: {
    fact: "出自1700年开普总督Willem Adriaan van der Stel创立的农场的旗舰红葡萄酒。",
    quiz: [
      { q: "Vergelegen V中的“Vergelegen”在荷兰语中是什么意思？", a: "遥远的地方", x: ["绿色山谷", "风之丘", "国王的农场"] },
    ],
  },
  sh_hamiltonrussell_pn: {
    fact: "1975年Tim Hamilton Russell在近海的凉爽山谷创立，是非洲最南端的酒庄之一。只酿造黑皮诺和霞多丽。",
    quiz: [
      { q: "Hamilton Russell黑皮诺葡萄园所在的“Hemel-en-Aarde”是什么意思？", a: "天与地", x: ["海与山", "日与月", "风与雨"] },
    ],
  },
  sh_mullineux_straw: {
    fact: "Chris与Andrea Mullineux夫妇以斯瓦特兰的白诗南酿造的甜酒。",
    quiz: [
      { q: "Mullineux Straw Wine是将葡萄如何处理后酿造的？", a: "摊在稻草上晾干以浓缩糖分", x: ["挂在树上冻结", "泡在海水里腌制", "埋在地下过冬"] },
    ],
  },
  sh_grahambeck_brut: {
    fact: "以与香槟相同的瓶中二次发酵酿造的南非起泡酒“Cap Classique”的代表。",
    quiz: [
      { q: "Graham Beck Brut在1994年被用作祝酒酒的历史性活动是？", a: "纳尔逊·曼德拉总统就职庆典", x: ["英国王子婚礼", "悉尼奥运会闭幕式", "罗马教皇就职典礼"] },
    ],
  },
  sh_kwv_cathedral: {
    fact: "1918年以葡萄种植者合作社起家的南非葡萄酒业巨头。“Cathedral Cellar”之名来自如大教堂般有拱顶的旧陈酿库。",
    quiz: [
      { q: "KWV Cathedral Cellar中的“KWV”是什么的缩写？", a: "南非葡萄种植者合作社", x: ["开普葡萄酒出口公司", "国王葡萄酒协会", "金伯利葡萄酒银行"] },
    ],
  },
  sh_nederburg_winemasters: {
    fact: "1791年创立于帕尔（Paarl）的历史性酒庄，是长期引领南非葡萄酒产业的大型生产者。",
    quiz: [
      { q: "酿造Nederburg The Winemasters的Nederburg于1975年首次举办的南非代表性葡萄酒活动是？", a: "Nederburg葡萄酒拍卖会", x: ["开普敦葡萄酒马拉松", "踩葡萄节", "葡萄酒列车之旅"] },
    ],
  },
  sh_chocolateblock: {
    fact: "以西拉为主，混入歌海娜、神索、赤霞珠、维欧尼的调配酒。以浓郁柔顺的口感成为南非数一数二的人气葡萄酒。",
    quiz: [
      { q: "酿造The Chocolate Block的酒庄同时推出的日常葡萄酒品牌是？", a: "Porcupine Ridge", x: ["[yellow tail]", "19 Crimes", "Barefoot"] },
    ],
  },
  sh_warwick_trilogy: {
    fact: "由南非首批女酿酒师之一Norma Ratcliffe打响名号的Warwick Estate的波尔多式调配酒。",
    quiz: [
      { q: "酿造Warwick Trilogy的Warwick Estate的象征“婚礼杯”（Wedding Cup）是什么样的杯子？", a: "带两个杯身、两人必须同时饮用且不能洒出的杯子", x: ["新郎新娘一起摔碎的玻璃杯", "用百年葡萄树雕成的木杯", "仿照圣杯的教堂用杯"] },
    ],
  },
  sh_inniskillin_riesling: {
    fact: "以隆冬夜里冻结状态采收的雷司令酿造，浓郁的甜味中保留着雷司令特有的酸度。",
    quiz: [
      { q: "共同创立Inniskillin（Inniskillin Riesling Icewine的酿造者）的两个人是？", a: "Donald Ziraldo与Karl Kaiser", x: ["Andrew Peller与Gary Pillitteri", "Allan Jackson与Don Triggs", "Robert Mondavi与Philippe de Rothschild"] },
    ],
  },
  sh_peller_vidal_icewine: {
    fact: "Andrew Peller创立的加拿大大型葡萄酒公司旗下尼亚加拉酒庄酿造的冰酒。",
    quiz: [
      { q: "酿造Peller Estates Vidal Icewine的公司创始人Andrew Peller的故乡是？", a: "匈牙利", x: ["德国", "意大利", "波兰"] },
    ],
  },
  sh_pillitteri_cf_icewine: {
    fact: "以红葡萄品种品丽珠酿造的红色冰酒。Pillitteri是特别专注于冰酒的尼亚加拉家族酒庄。",
    quiz: [
      { q: "酿造Pillitteri Cabernet Franc Icewine的Pillitteri创始人Gary Pillitteri的故乡是？", a: "意大利西西里", x: ["希腊克里特岛", "葡萄牙马德拉", "西班牙安达卢西亚"] },
    ],
  },
  sh_missionhill_oculus: {
    fact: "在奥肯那根湖（Okanagan）畔建起高耸钟楼的Mission Hill酒庄的旗舰波尔多式调配酒。",
    quiz: [
      { q: "酿造Oculus的Mission Hill庄主Anthony von Mandl所创立的公司推出的著名饮料是？", a: "White Claw（硬苏打）", x: ["红牛", "科罗娜特级", "Smirnoff Ice"] },
    ],
  },
  sh_jacksontriggs_icewine: {
    fact: "位于湖边尼亚加拉（Niagara-on-the-Lake）的大型酒庄酿造的威代尔冰酒。",
    quiz: [
      { q: "Jackson-Triggs Vidal Icewine中的“Jackson-Triggs”这个名字来自什么？", a: "共同创始人Allan Jackson与Don Triggs的姓氏", x: ["尼亚加拉的两条河名", "创始夫妇的婚前姓氏", "第一块葡萄园两位园主的姓"] },
    ],
  },
  sh_mercian_koshu: {
    fact: "麒麟集团旗下的日本葡萄酒代表品牌。以日本本土品种甲州酿造细腻清爽的白葡萄酒。",
    quiz: [
      { q: "成为Château Mercian前身的公司于1877年派两名青年前往学习酿酒的国家是？", a: "法国", x: ["德国", "意大利", "美国"] },
    ],
  },
  sh_grace_koshu: {
    fact: "1923年在胜沼创立的Grace Wine（中央葡萄酒）所酿的甲州，是让日本葡萄酒登上世界舞台的代表。",
    quiz: [
      { q: "世代经营Grace Wine（Grace Koshu的酿造者）的家族是？", a: "三泽家族", x: ["铃木家族", "佐藤家族", "丰田家族"] },
    ],
  },
  sh_suntory_tominooka: {
    fact: "三得利在山梨县山丘上亲自打理的登美之丘（Tomi no Oka）酒庄所酿的甲州。",
    quiz: [
      { q: "天气晴朗时，从三得利登美之丘酒庄的山丘上可以望见哪座山？", a: "富士山", x: ["阿苏山", "立山", "白山"] },
    ],
  },
  sh_aoyun: {
    fact: "LVMH以喜马拉雅山麓、海拔2,000米以上的云南高山村落葡萄酿造、以赤霞珠为主的调配酒。2013年推出首个年份。",
    quiz: [
      { q: "敖云（Ao Yun）这个名字的意思是？", a: "翱翔于云端之上", x: ["赤龙", "天泉", "雪山"] },
      { q: "耸立在敖云葡萄园附近的藏传佛教神山是？", a: "梅里雪山", x: ["珠穆朗玛峰", "安纳布尔纳峰", "冈仁波齐峰"] },
    ],
  },
  sh_changyu_moser: {
    fact: "1892年创立的中国第一家近代葡萄酒企业张裕，在宁夏贺兰山东麓建立的酒庄，与奥地利酿酒师Lenz Moser共同打造。",
    quiz: [
      { q: "Château Changyu Moser XV中的“XV”是什么意思？", a: "奥地利Moser家族的第15代传人Lenz Moser", x: ["陈酿15年", "第15个年份", "15块葡萄园的调配"] },
      { q: "酿造Château Changyu Moser XV的张裕于1892年由谁创立？", a: "华侨巨商张弼士", x: ["清朝光绪帝", "法国传教士", "日本贸易商"] },
    ],
  },
};

export default T;
