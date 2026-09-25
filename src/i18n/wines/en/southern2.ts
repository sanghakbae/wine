import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  sh2_penfolds_maxs: {
    producer: "Penfolds",
    fact: "A Penfolds range named after Max Schubert, the legendary chief winemaker who created Grange. It carries on his philosophy of blending grapes from several regions.",
    quiz: [
      { q: "Which legendary Australian wine did Max Schubert, namesake of Penfolds Max’s, first create in the 1950s?", a: "Penfolds Grange", x: ["Henschke Hill of Grace", "Wolf Blass Black Label", "Torbreck RunRig"] },
    ],
  },
  sh2_penfolds_bin128: {
    producer: "Penfolds",
    fact: "A Shiraz Penfolds makes only from Coonawarra grapes. Coonawarra’s cool climate makes it more fragrant and elegant than Barossa Shiraz.",
    quiz: [
      { q: "What was the first vintage of Penfolds Bin 128 Coonawarra Shiraz?", a: "1962", x: ["1932", "1982", "2002"] },
    ],
  },
  sh2_penfolds_bin150: {
    producer: "Penfolds",
    fact: "A Penfolds Shiraz made only from grapes from Marananga, in the northwest of the Barossa Valley. It debuted with the 2008 vintage.",
    quiz: [
      { q: "What German place name did Marananga, as in Penfolds Bin 150, use before it was renamed during World War I?", a: "Gnadenfrei", x: ["Gnadenberg", "Hahndorf", "Neudorf"] },
    ],
  },
  sh2_penfolds_bin2: {
    producer: "Penfolds",
    fact: "A Penfolds Bin wine blending Mataro (Mourvèdre) into Shiraz. Made from grapes from several South Australian regions, it is ready to enjoy early.",
    quiz: [
      { q: "Among Penfolds wines known by number like Bin 2, which Bin number does Grange carry?", a: "Bin 95", x: ["Bin 1", "Bin 389", "Bin 707"] },
    ],
  },
  sh2_penfolds_magill: {
    producer: "Penfolds",
    fact: "Shiraz from Penfolds’ birthplace, the vineyard the Penfold couple planted at Magill near Adelaide in 1844. A rare vineyard surviving within a city.",
    quiz: [
      { q: "What was the original profession of Christopher Rawson Penfold, founder of Penfolds?", a: "Doctor", x: ["Minister", "Sea captain", "Lawyer"] },
      { q: "Which Penfolds wine is named after the Penfolds’ cottage still standing at Magill Estate?", a: "Grange", x: ["St Henri", "Yattarna", "Koonunga Hill"] },
    ],
  },
  sh2_torbreck_laird: {
    producer: "Torbreck",
    fact: "Torbreck’s top wine, a single-vineyard Shiraz from Marananga in the Barossa. It ages long in thick-staved new French oak.",
    quiz: [
      { q: "Who is a “Laird”, as in Torbreck The Laird, in Scottish usage?", a: "A landowning lord", x: ["A shepherd", "A forester", "The village priest"] },
    ],
  },
  sh2_torbreck_woodcutters: {
    producer: "Torbreck",
    fact: "A Barossa Shiraz named in memory of Torbreck founder Dave Powell’s days as a lumberjack in Scotland.",
    quiz: [
      { q: "In what year did Torbreck, maker of Woodcutter’s Shiraz, open?", a: "1994", x: ["1954", "1974", "2004"] },
    ],
  },
  sh2_torbreck_factor: {
    producer: "Torbreck",
    fact: "A Torbreck Shiraz from old vines in several Barossa Valley villages. Most Torbreck wine names come from old Scottish rural terms.",
    quiz: [
      { q: "Who was a “Factor”, as in Torbreck The Factor, in old Scotland?", a: "A steward who ran the estate for the lord", x: ["The miller who ground grain", "The village blacksmith", "A cattle drover"] },
    ],
  },
  sh2_greenockcreek_roennfeldt: {
    producer: "Greenock Creek",
    fact: "A cult Shiraz made in tiny amounts from old vines in Marananga, Barossa. It became a legend after scoring 100 points from Robert Parker.",
    quiz: [
      { q: "What is the “Roennfeldt Road” of Greenock Creek Roennfeldt Road?", a: "A Barossa road running past the vineyard", x: ["The founder’s German home village", "A creek beside the vineyard", "The winery’s old church"] },
    ],
  },
  sh2_rockford_basketpress: {
    producer: "Rockford",
    fact: "A Barossa Shiraz Rockford makes the traditional way with equipment over 100 years old. Sold mainly at the cellar door and by mailing list, it is hard to find.",
    quiz: [
      { q: "Where does the name Rockford Basket Press come from?", a: "An old-fashioned basket press for pressing grapes", x: ["A big basket for carrying grapes", "The founder’s childhood nickname", "A basket-shaped vineyard"] },
    ],
  },
  sh2_peterlehmann_stonewell: {
    producer: "Peter Lehmann",
    fact: "The top Shiraz of the winery Peter Lehmann founded in the late 1970s to buy grapes from Barossa growers facing a glut that would have gone to waste.",
    quiz: [
      { q: "Which playing card appears on Peter Lehmann labels and logo?", a: "The Queen of Clubs", x: ["The Ace of Spades", "The King of Hearts", "The Jack of Diamonds"] },
    ],
  },
  sh2_grantburge_meshach: {
    producer: "Grant Burge",
    fact: "The top Shiraz of the Barossa winery founded by Grant and Helen Burge in 1988. It is made from old-vine grapes.",
    quiz: [
      { q: "Who is the “Meshach” of Grant Burge Meshach?", a: "Grant Burge’s great-grandfather", x: ["A neighbour who sold the first vineyard", "The first Lutheran pastor in the Barossa", "The winery’s first chief winemaker"] },
    ],
  },
  sh2_langmeil_freedom: {
    producer: "Langmeil",
    fact: "From Barossa Shiraz vines among the oldest in the world. “Freedom” refers to the immigrants who came from Prussia seeking religious freedom.",
    quiz: [
      { q: "What does “1843” in Langmeil The Freedom 1843 mean?", a: "The year the vines were planted", x: ["The year the winery was founded", "The year of the first export", "The vineyard’s altitude in metres"] },
    ],
  },
  sh2_charlesmelton_ninepopes: {
    producer: "Charles Melton",
    fact: "A Rhône-style blend of old Barossa Grenache with Shiraz and Mourvèdre. Charles Melton’s flagship wine.",
    quiz: [
      { q: "How did the name Charles Melton Nine Popes come about?", a: "“Neuf” (new) in Châteauneuf-du-Pape was mistaken for the number nine", x: ["Nine popes blessed the vineyard", "Nine grapes are blended", "The founder collected nine papal medals"] },
    ],
  },
  sh2_glaetzer_amonra: {
    producer: "Glaetzer",
    fact: "Winemaker Ben Glaetzer’s top wine, made from old-vine Barossa Shiraz. It is bottled unfiltered.",
    quiz: [
      { q: "Which mythology does Amon-Ra, as in Glaetzer Amon-Ra, come from?", a: "The Egyptian sun god", x: ["The Greek god of wine", "The Norse god of thunder", "The Mesopotamian moon god"] },
    ],
  },
  sh2_johnduval_entity: {
    producer: "John Duval Wines",
    fact: "A Barossa Shiraz from John Duval, who was Penfolds’ chief winemaker in charge of Grange from 1986 to 2002 before going independent.",
    quiz: [
      { q: "At which winery was John Duval chief winemaker before going independent?", a: "Penfolds", x: ["Wolf Blass", "Henschke", "Yalumba"] },
    ],
  },
  sh2_yalumba_octavius: {
    producer: "Yalumba",
    fact: "The top wine Yalumba, Australia’s oldest family-owned winery, makes from old-vine Barossa Shiraz.",
    quiz: [
      { q: "Where does the name Yalumba The Octavius come from?", a: "The “octave”, a small oak barrel used for ageing", x: ["The eighth trial batch", "A blend of eight vineyards", "Eight years of ageing"] },
    ],
  },
  sh2_jacobscreek_doublebarrel: {
    producer: "Jacob's Creek",
    fact: "A Shiraz aged in wine barrels, then moved into barrels that held another spirit for a second ageing, hence “Double Barrel”.",
    quiz: [
      { q: "In what kind of barrel does Jacob’s Creek Double Barrel Shiraz get its second ageing?", a: "Barrels that aged whisky", x: ["Barrels that held sherry", "Barrels that held rum", "Barrels that held port"] },
    ],
  },
  sh2_henschke_cyril: {
    producer: "Henschke",
    fact: "An Eden Valley Cabernet Sauvignon made in honour of Cyril Henschke, who first launched single-vineyard wines like Hill of Grace.",
    quiz: [
      { q: "How is Cyril Henschke, honoured by Henschke Cyril Henschke, related to Stephen Henschke, who runs the winery today?", a: "Father", x: ["Grandfather", "Elder brother", "Uncle"] },
    ],
  },
  sh2_pewseyvale_riesling: {
    producer: "Pewsey Vale",
    fact: "The vineyard where English immigrant Joseph Gilbert first planted vines in the Eden Valley hills in 1847. Yalumba’s Hill-Smith family revived it in 1961.",
    quiz: [
      { q: "Where does the name Pewsey Vale come from?", a: "The Vale of Pewsey, a valley in Wiltshire, England", x: ["An Aboriginal word for “clear spring”", "The daughter who brought in the first harvest", "A neighbouring church"] },
    ],
  },
  sh2_darenberg_stumpjump: {
    producer: "d'Arenberg",
    fact: "d’Arenberg’s everyday blend. Every d’Arenberg label carries a red diagonal stripe.",
    quiz: [
      { q: "What was the “stump-jump plough”, invented in South Australia and the source of d’Arenberg The Stump Jump’s name?", a: "A plough that springs up and over tree stumps", x: ["A plough that pulls only weeds between vines", "A steam-powered plough", "A plough pulled by four oxen"] },
    ],
  },
  sh2_darenberg_footbolt: {
    producer: "d'Arenberg",
    fact: "A Shiraz whose name tells a story from the time of Joseph Osborn, who bought the McLaren Vale vineyard in 1912 and laid d’Arenberg’s foundations.",
    quiz: [
      { q: "What was the original “Footbolt” of d’Arenberg The Footbolt?", a: "A racehorse owned by Joseph Osborn", x: ["A creek beside the vineyard", "The founder’s hunting dog", "An old hand press"] },
    ],
  },
  sh2_wirrawirra_churchblock: {
    producer: "Wirra Wirra",
    fact: "The flagship blend of Wirra Wirra, a McLaren Vale winery founded in 1894, closed, and revived in 1969.",
    quiz: [
      { q: "Who revived and reopened Wirra Wirra in 1969?", a: "Greg Trott", x: ["Max Schubert", "Wolf Blass", "Peter Lehmann"] },
    ],
  },
  sh2_taylors_cs: {
    producer: "Taylors",
    fact: "Cabernet Sauvignon from a family winery founded by the Taylor family in the Clare Valley in 1969. In the UK and several other countries it is sold as “Wakefield”.",
    quiz: [
      { q: "Why are Taylors wines sold as “Wakefield” in many overseas markets?", a: "The name clashes with the Portuguese Port house Taylor’s", x: ["The British royal family asked for a change", "The founder changed his name", "It is named after the first export port"] },
    ],
  },
  sh2_mounthorrocks_cordoncut: {
    producer: "Mount Horrocks",
    fact: "A sweet Riesling made by winemaker Stephanie Toole in the Clare Valley. Without noble rot or frost, the grapes are dried on the vine to concentrate their sweetness.",
    quiz: [
      { q: "What is the “cordon cut” method of Mount Horrocks Cordon Cut?", a: "The fruiting canes are cut and the grapes dry while still hanging on the vine", x: ["Frozen grapes are picked at midnight", "Picked grapes are dried on straw", "Only botrytised berries are picked"] },
    ],
  },
  sh2_wynns_johnriddoch: {
    producer: "Wynns Coonawarra Estate",
    fact: "Wynns Coonawarra Estate’s top Cabernet Sauvignon, made only from the finest grapes. First vintage 1982.",
    quiz: [
      { q: "Who was John Riddoch, namesake of Wynns John Riddoch?", a: "The Scottish-born pioneer who first planted vines in Coonawarra", x: ["An Italian businessman who bought Wynns", "The winery’s first chief winemaker", "South Australia’s first governor"] },
    ],
  },
  sh2_shawsmith_sb: {
    producer: "Shaw + Smith",
    fact: "The flagship Sauvignon Blanc of the winery cousins Martin Shaw and Michael Hill-Smith founded in the Adelaide Hills in 1989.",
    quiz: [
      { q: "Which qualification did Michael Hill-Smith, co-founder of Shaw + Smith, earn in 1988 as the first Australian?", a: "Master of Wine (MW)", x: ["Master Sommelier (MS)", "A Bordeaux oenology degree", "The Jimmy Watson Trophy"] },
    ],
  },
  sh2_brokenwood_graveyard: {
    producer: "Brokenwood",
    fact: "The top Shiraz of Brokenwood, founded in the Hunter Valley in 1970 by three friends from Sydney. The land was once earmarked as a cemetery, hence “Graveyard”.",
    quiz: [
      { q: "What was the profession of the three co-founders of Brokenwood?", a: "Lawyers", x: ["Doctors", "Bankers", "Architects"] },
    ],
  },
  sh2_mountpleasant_oshea: {
    producer: "Mount Pleasant",
    fact: "A Mount Pleasant Shiraz honouring legendary Hunter Valley winemaker Maurice O’Shea. His wines were considered Australia’s best reds in the mid-20th century.",
    quiz: [
      { q: "In which country did Maurice O’Shea of Mount Pleasant study viticulture and winemaking?", a: "France", x: ["Germany", "Italy", "The United States"] },
    ],
  },
  sh2_tyrrells_vat47: {
    producer: "Tyrrell's",
    fact: "A Hunter Valley Chardonnay released with the 1971 vintage and considered Australia’s first commercial Chardonnay.",
    quiz: [
      { q: "Who first made Tyrrell’s Vat 47 in 1971?", a: "Murray Tyrrell", x: ["Bruce Tyrrell", "Edward Tyrrell", "Max Schubert"] },
    ],
  },
  sh2_lakesfolly_cabernets: {
    producer: "Lake's Folly",
    fact: "A winery founded in the Hunter Valley by Max Lake in 1963. The venture he himself called “Lake’s Folly” opened Australia’s boutique winery era.",
    quiz: [
      { q: "What was the main profession of Max Lake, founder of Lake’s Folly?", a: "Surgeon", x: ["Lawyer", "Banker", "Newspaper reporter"] },
    ],
  },
  sh2_clonakilla_sv: {
    producer: "Clonakilla",
    fact: "The flagship of the winery scientist Dr. John Kirk founded near Canberra in 1971. A little of the white grape Viognier is co-fermented with the Shiraz.",
    quiz: [
      { q: "Which French region, famous for blending Viognier into Syrah, was the model for Clonakilla Shiraz Viognier?", a: "Côte-Rôtie", x: ["Châteauneuf-du-Pape", "Cornas", "Bandol"] },
    ],
  },
  sh2_xanadu_cs: {
    producer: "Xanadu",
    fact: "Cabernet Sauvignon from Xanadu, opened in the 1970s during Margaret River’s pioneering years. It shows the classic elegant yet firm Margaret River Cabernet.",
    quiz: [
      { q: "Where does the name Xanadu come from?", a: "English poet Coleridge’s poem “Kubla Khan”", x: ["The founder’s home village", "An Aboriginal word for “sea breeze”", "The first vineyard owner’s daughter"] },
    ],
  },
  sh2_voyager_chardonnay: {
    producer: "Voyager Estate",
    fact: "Chardonnay from the Margaret River winery mining entrepreneur Michael Wright bought and built up from 1991. Its white building and rose garden make it a beauty spot.",
    quiz: [
      { q: "In what architectural style is Voyager Estate’s white winery building?", a: "South African Cape Dutch style", x: ["French château style", "Tuscan farmhouse style", "Spanish Mission style"] },
    ],
  },
  sh2_cullen_kevinjohn: {
    producer: "Cullen Wines",
    fact: "Cullen’s top Chardonnay, made from biodynamically grown grapes. One of Margaret River’s leading Chardonnays.",
    quiz: [
      { q: "Whom does the name Cullen Kevin John honour?", a: "Doctor Kevin Cullen, who co-founded the winery", x: ["A neighbour who helped at the first harvest", "The founder’s first grandson", "Margaret River’s first winemaker"] },
    ],
  },
  sh2_vassefelix_heytesbury: {
    producer: "Vasse Felix",
    fact: "The top Chardonnay that Vasse Felix, Margaret River’s first winery, makes from its best blocks.",
    quiz: [
      { q: "What is the “Heytesbury” of Vasse Felix Heytesbury?", a: "The company of the Holmes à Court family, owners since 1987", x: ["A lighthouse off Margaret River", "The first winemaker’s home village", "An Aboriginal word for “white sand”"] },
    ],
  },
  sh2_tahbilk_marsanne: {
    producer: "Tahbilk",
    fact: "A historic Victorian winery founded in 1860. It tends one of the world’s largest Marsanne plantings, including vines planted in 1927.",
    quiz: [
      { q: "Which family has run Tahbilk since 1925?", a: "The Purbrick family", x: ["The Brown family", "The Henschke family", "The Hardy family"] },
    ],
  },
  sh2_yarrayering_dr1: {
    producer: "Yarra Yering",
    fact: "A Cabernet blend from the winery Dr. Bailey Carrodus founded in the Yarra Valley in 1969. The label simply says “Dry Red No. 1” instead of naming the grapes.",
    quiz: [
      { q: "What was the original profession of Bailey Carrodus, founder of Yarra Yering?", a: "Botanist", x: ["Surgeon", "Lawyer", "Mining engineer"] },
    ],
  },
  sh2_mountmary_quintet: {
    producer: "Mount Mary",
    fact: "The Bordeaux blend of Mount Mary in the Yarra Valley, begun when Dr. John Middleton planted vines in 1971. Small amounts are sold mainly to mailing-list customers.",
    quiz: [
      { q: "What does the name “Quintet” in Mount Mary Quintet signify?", a: "It blends five Bordeaux grape varieties", x: ["It blends grapes from five vineyards", "It is aged for five years", "It honours the founder’s five children"] },
    ],
  },
  sh2_coldstreamhills_pn: {
    producer: "Coldstream Hills",
    fact: "Pinot Noir from the winery that leading Australian wine critic James Halliday founded in the Yarra Valley in 1985.",
    quiz: [
      { q: "Which annual Australian wine guide did James Halliday, founder of Coldstream Hills, publish?", a: "The Halliday Wine Companion", x: ["The Penguin Wine Guide", "Hugh Johnson’s Pocket Wine Book", "Parker’s Wine Buyer’s Guide"] },
    ],
  },
  sh2_yeringstation_pn: {
    producer: "Yering Station",
    fact: "Pinot Noir from Yering Station, which stands on the site of an old Yarra Valley farm. The cool climate gives it delicacy.",
    quiz: [
      { q: "What is the significance of the Yering Station site in Victoria’s wine history?", a: "Where vines were first planted in Victoria, in 1838", x: ["Victoria’s first sparkling winery", "Founded by Australia’s first female winemaker", "The first Australian winery to use screw caps"] },
    ],
  },
  sh2_tenminutes_pn: {
    producer: "Ten Minutes by Tractor",
    fact: "Pinot Noir from cool vineyards on the sea-ringed Mornington Peninsula, south of Melbourne.",
    quiz: [
      { q: "Where does the name Ten Minutes by Tractor come from?", a: "The first three vineyards were within ten minutes of each other by tractor", x: ["The sea is ten minutes away by tractor", "The grapes are pressed within ten minutes", "The founder ran a tractor company"] },
    ],
  },
  sh2_chambers_raremuscat: {
    producer: "Chambers Rosewood",
    fact: "A fortified Muscat from the Rosewood winery in Rutherglen, run by the Chambers family for generations. It blends base wines aged for decades.",
    quiz: [
      { q: "Of Rutherglen Muscat’s four age classifications (Rutherglen, Classic, Grand, Rare), where does “Rare” sit?", a: "The highest level", x: ["The lowest level", "The second level", "The third level"] },
    ],
  },
  sh2_seppelt_sparklingshiraz: {
    producer: "Seppelt",
    fact: "A red sparkling wine from Seppelt at Great Western, Victoria. It is released only after long ageing in bottle.",
    quiz: [
      { q: "Who dug “The Drives”, the long ageing tunnels beneath Seppelt’s Great Western winery?", a: "Gold miners who had lost their work", x: ["British Army engineers", "Transported convicts", "Railway workers"] },
    ],
  },
  sh2_jansz_cuvee: {
    producer: "Jansz",
    fact: "A Tasmanian sparkling winery started in 1986 in partnership with Champagne house Louis Roederer. Like Champagne, it is made by second fermentation in bottle.",
    quiz: [
      { q: "Who is Jansz named after?", a: "Abel Janszoon Tasman, the Dutch explorer who first reached Tasmania", x: ["A Dutch merchant who founded the winery", "The founder’s grandfather", "English explorer James Cook"] },
    ],
  },
  sh2_cloudybay_pn: {
    producer: "Cloudy Bay",
    fact: "A Pinot Noir made by Cloudy Bay, famous for Sauvignon Blanc, from grapes grown in Marlborough’s cool southern valleys.",
    quiz: [
      { q: "Which explorer named these waters “Cloudy Bay” in 1770?", a: "Britain’s Captain James Cook", x: ["Abel Tasman of the Netherlands", "Dumont d’Urville of France", "Magellan of Portugal"] },
    ],
  },
  sh2_seresin_sb: {
    producer: "Seresin Estate",
    fact: "Sauvignon Blanc from the winery Michael Seresin founded in Marlborough in the early 1990s. Grapes are grown organically and biodynamically, and the label bears a handprint.",
    quiz: [
      { q: "What is the main profession of Michael Seresin, founder of Seresin Estate?", a: "Film cinematographer", x: ["Architect", "Rugby international", "Opera singer"] },
    ],
  },
  sh2_nautilus_sb: {
    producer: "Nautilus Estate",
    fact: "Sauvignon Blanc from a Marlborough winery whose emblem is the nautilus shell.",
    quiz: [
      { q: "Which Australian winery is run by the Hill-Smith family, owners of Nautilus Estate?", a: "Yalumba", x: ["Penfolds", "Henschke", "Jacob's Creek"] },
    ],
  },
  sh2_matua_sb: {
    producer: "Matua",
    fact: "A winery founded in Auckland in 1974 by brothers Ross and Bill Spence. Today it is a popular brand widely known for Marlborough Sauvignon Blanc.",
    quiz: [
      { q: "What New Zealand wine first did Matua achieve in 1974?", a: "New Zealand’s first Sauvignon Blanc", x: ["New Zealand’s first screw-capped wine", "New Zealand’s first Pinot Noir", "New Zealand’s first sparkling wine"] },
    ],
  },
  sh2_giesen_sb: {
    producer: "Giesen",
    fact: "Sauvignon Blanc from a family winery founded in New Zealand by three brothers in 1981. It is also known for its alcohol-free “0%” wines.",
    quiz: [
      { q: "What is the home country of the Giesen brothers Theo, Alex and Marcel?", a: "Germany", x: ["The Netherlands", "Austria", "Switzerland"] },
    ],
  },
  sh2_spyvalley_sb: {
    producer: "Spy Valley",
    fact: "Sauvignon Blanc from a family winery in Marlborough’s Waihopai Valley.",
    quiz: [
      { q: "Where does the name Spy Valley come from?", a: "An intelligence agency’s satellite station in the valley", x: ["A cave where spies hid in wartime", "A spy novel the founder wrote", "A tale of miners secretly digging gold"] },
    ],
  },
  sh2_astrolabe_sb: {
    producer: "Astrolabe",
    fact: "Sauvignon Blanc from Astrolabe, a small family winery in Marlborough.",
    quiz: [
      { q: "Where does the name Astrolabe come from?", a: "The ship of French explorer Dumont d’Urville, who charted New Zealand’s coast", x: ["Captain James Cook’s ship", "A traditional Māori canoe", "The founder’s yacht"] },
    ],
  },
  sh2_closhenri_sb: {
    producer: "Clos Henri",
    fact: "Sauvignon Blanc from the winery the Henri Bourgeois family of France’s Loire founded in Marlborough in 2000.",
    quiz: [
      { q: "In which French region has the Bourgeois family, founders of Clos Henri, made wine for generations?", a: "Sancerre", x: ["Chablis", "Bordeaux", "Alsace"] },
    ],
  },
  sh2_babich_blacklabel: {
    producer: "Babich",
    fact: "Marlborough Sauvignon Blanc from Babich, an old New Zealand family winery opened in 1916.",
    quiz: [
      { q: "Where did Josip Babich, founder of Babich, emigrate from?", a: "Dalmatia, Croatia", x: ["Sicily, Italy", "Crete, Greece", "Galicia, Spain"] },
    ],
  },
  sh2_tohu_sb: {
    producer: "Tohu Wines",
    fact: "A zesty Sauvignon Blanc that Tohu Wines makes from Marlborough grapes.",
    quiz: [
      { q: "What record does Tohu Wines hold in world wine history?", a: "The world’s first Māori-owned wine brand", x: ["The world’s first vegan-certified winery", "New Zealand’s first screw-capped wine", "The Southern Hemisphere’s first carbon-neutral winery"] },
    ],
  },
  sh2_pegasusbay_riesling: {
    producer: "Pegasus Bay",
    fact: "Riesling from the winery the Donaldson family runs in Waipara, north of Christchurch. A rich style with a touch of sweetness.",
    quiz: [
      { q: "What is the main profession of Ivan Donaldson, founder of Pegasus Bay?", a: "Neurologist", x: ["Lawyer", "Opera singer", "Rugby player"] },
    ],
  },
  sh2_kumeuriver_mates: {
    producer: "Kumeu River",
    fact: "Chardonnay made in Kumeu, near Auckland, by the Brajkovich family, who came from Croatia. It is considered New Zealand’s benchmark Chardonnay.",
    quiz: [
      { q: "Who is the “Mate” of Kumeu River Mate's Vineyard?", a: "Mate Brajkovich, father of the brothers who now run the winery", x: ["The friends who planted the vineyard together", "The English farmer who sold the first vineyard", "A Māori chief"] },
    ],
  },
  sh2_trinityhill_homage: {
    producer: "Trinity Hill",
    fact: "Trinity Hill’s top Syrah from the Gimblett Gravels of Hawke’s Bay. A wine that showed the promise of New Zealand Syrah.",
    quiz: [
      { q: "To whom is Trinity Hill Homage Syrah an “homage”?", a: "Gérard Jaboulet of Paul Jaboulet Aîné in the Rhône", x: ["Gérard Chave of Hermitage", "Marcel Guigal of Côte-Rôtie", "Jacques Perrin of Châteauneuf-du-Pape"] },
    ],
  },
  sh2_missionestate_syrah: {
    producer: "Mission Estate",
    fact: "Syrah from New Zealand’s oldest winery, founded in 1851 and still going today.",
    quiz: [
      { q: "Who founded Mission Estate?", a: "French Catholic missionaries (the Marists)", x: ["English Anglican ministers", "Croatian immigrants", "German Lutheran immigrants"] },
    ],
  },
  sh2_twopaddocks_pn: {
    producer: "Two Paddocks",
    fact: "Pinot Noir from the Central Otago winery founded by New Zealand-raised actor Sam Neill. It started on two small paddocks, hence the name.",
    quiz: [
      { q: "Which is a signature film of actor Sam Neill, founder of Two Paddocks?", a: "Jurassic Park", x: ["The Lord of the Rings", "Titanic", "The Matrix"] },
    ],
  },
  sh2_montes_alphasyrah: {
    producer: "Montes",
    fact: "The Syrah of Montes Alpha, Korea’s best-loved Chilean wine range. It is made rich from grapes grown in the warm Colchagua Valley sun.",
    quiz: [
      { q: "What music does Montes play constantly in the barrel room of its Apalta winery?", a: "Gregorian chant", x: ["Mozart symphonies", "Chilean folk music", "Jazz"] },
    ],
  },
  sh2_carmin_peumo: {
    producer: "Concha y Toro",
    fact: "Concha y Toro’s icon wine, made from Carmenère from the best blocks of its Peumo vineyard. It is considered Chile’s finest Carmenère.",
    quiz: [
      { q: "What does “Carmín” in Carmín de Peumo mean in Spanish?", a: "Crimson", x: ["Little garden", "Red stone", "Old tree"] },
    ],
  },
  sh2_terrunyo_carmenere: {
    producer: "Concha y Toro",
    fact: "Carmenère from Concha y Toro’s Terrunyo range, created to express each vineyard’s character. It is made from grapes from Peumo, the great Carmenère district.",
    quiz: [
      { q: "What does the name Concha y Toro Terrunyo mean?", a: "“Terruño”, the Spanish word for terroir", x: ["Mapuche for “red earth”", "The founder’s daughter’s name", "Latin for “three hills”"] },
    ],
  },
  sh2_almaviva_epu: {
    producer: "Almaviva",
    fact: "The second wine of Almaviva, the joint venture of Chile’s Concha y Toro and Bordeaux’s Mouton Rothschild.",
    quiz: [
      { q: "What does “EPU” in Almaviva EPU mean in the Mapuche language?", a: "Two", x: ["Sky", "Eagle", "River"] },
    ],
  },
  sh2_altair: {
    producer: "Viña San Pedro",
    fact: "The icon blend from vineyards Chile’s San Pedro developed with a great Bordeaux house high in the Cachapoal Valley, at the foot of the Andes.",
    quiz: [
      { q: "Which Saint-Émilion château first made Altaïr with Chile’s San Pedro?", a: "Château Dassault", x: ["Château Cheval Blanc", "Château Ausone", "Château Pavie"] },
      { q: "Where does the name Altaïr come from?", a: "The brightest star in the constellation Aquila (the Eagle)", x: ["An Andean peak", "A god of Mapuche myth", "A Chilean independence hero’s horse"] },
    ],
  },
  sh2_aquitania_lazuli: {
    producer: "Viña Aquitania",
    fact: "Cabernet Sauvignon from the winery founded near Santiago in 1990 by Bordeaux’s Paul Pontallier and Bruno Prats with Chile’s Felipe de Solminihac.",
    quiz: [
      { q: "Which Bordeaux First Growth did Paul Pontallier, co-founder of Viña Aquitania, run for many years as managing director?", a: "Château Margaux", x: ["Château Latour", "Château Haut-Brion", "Château Mouton Rothschild"] },
      { q: "What does the name Aquitania refer to?", a: "Aquitaine, the region of southwest France that includes Bordeaux", x: ["Spain’s Basque Country", "An island in southern Chile", "An old name for Tuscany"] },
    ],
  },
  sh2_gatonegro_cs: {
    producer: "Viña San Pedro",
    fact: "An everyday wine brand from Chile’s San Pedro, and a leading popular Chilean wine exported to many countries.",
    quiz: [
      { q: "What does “Gato Negro” mean in Spanish?", a: "Black cat", x: ["Black horse", "Black bull", "Black eagle"] },
    ],
  },
  sh2_cousinomacul_finisterrae: {
    producer: "Cousiño-Macul",
    fact: "A premium Cabernet Sauvignon-led blend made from Maipo Valley grapes by Cousiño-Macul, a historic Chilean winery.",
    quiz: [
      { q: "What does “Finis Terrae” mean in Latin?", a: "The end of the earth", x: ["Good land", "Red soil", "Gift of the earth"] },
    ],
  },
  sh2_santarita_triplec: {
    producer: "Santa Rita",
    fact: "A premium blend Santa Rita makes from Maipo Valley grapes. Unusually for Chile, it is built around Cabernet Franc.",
    quiz: [
      { q: "Where does the name Santa Rita Triple C come from?", a: "It blends three grapes that start with C", x: ["It is harvested in three passes", "The initials of three founders", "Grapes from three vineyards (campos)"] },
    ],
  },
  sh2_ventisquero_pangea: {
    producer: "Ventisquero",
    fact: "A Syrah Chile’s Ventisquero makes from Apalta grapes with John Duval, formerly of Australia’s Penfolds.",
    quiz: [
      { q: "What does the name Ventisquero Pangea refer to?", a: "The supercontinent that existed before the continents split", x: ["A Greek sea goddess", "Mapuche for “high mountain”", "Latin for “all grapes”"] },
    ],
  },
  sh2_losvascos_cs: {
    producer: "Los Vascos",
    fact: "Cabernet Sauvignon from Los Vascos in the Colchagua Valley. It is considered the first Chilean winery bought by the owners of a Bordeaux First Growth.",
    quiz: [
      { q: "Which family, owners of a Bordeaux First Growth, bought Los Vascos in 1988?", a: "The Rothschilds of Château Lafite Rothschild", x: ["The Mentzelopoulos family of Château Margaux", "The Dillons of Château Haut-Brion", "The Pinaults of Château Latour"] },
    ],
  },
  sh2_catena_alta: {
    producer: "Catena Zapata",
    fact: "A Malbec Catena Zapata makes by choosing only the best blocks from several high-altitude vineyards.",
    quiz: [
      { q: "What is Catena Zapata’s winery building, maker of Catena Alta, modelled on?", a: "A Maya pyramid", x: ["An Inca sun temple", "A Bordeaux château", "An old Spanish monastery"] },
    ],
  },
  sh2_angelicazapata: {
    producer: "Catena Zapata",
    fact: "A Catena Zapata wine made from high-altitude Malbec. Long oak ageing gives it a firm, deep taste.",
    quiz: [
      { q: "Who is the Angélica Zapata of Angélica Zapata Malbec Alta?", a: "Nicolás Catena’s mother", x: ["Nicolás Catena’s youngest daughter", "Nicolás Catena’s wife", "Mendoza’s first female winemaker"] },
    ],
  },
  sh2_luca_malbec: {
    producer: "Laura Catena",
    fact: "A Malbec from the personal brand Laura Catena of the Catena family makes separately from high Uco Valley grapes.",
    quiz: [
      { q: "Who is Laura Catena’s wine brand “Luca” named after?", a: "Laura Catena’s son", x: ["Nicolás Catena’s father", "The first founder, who came from Italy", "The first vineyard owner"] },
    ],
  },
  sh2_donapaula_malbec: {
    producer: "Doña Paula",
    fact: "A Malbec from the winery founded in Mendoza by the Claro group, owner of Chile’s Santa Rita.",
    quiz: [
      { q: "Whom does the name Doña Paula honour?", a: "Paula Jaraquemada, who hid 120 soldiers in Chile’s independence war", x: ["The founder’s mother", "Mendoza’s patron saint", "Argentina’s first female winemaker"] },
    ],
  },
  sh2_decero_malbec: {
    producer: "Finca Decero",
    fact: "A Malbec from the Remolinos vineyard, carved out of bare land in Agrelo, Mendoza.",
    quiz: [
      { q: "What does “Decero” in Finca Decero mean?", a: "From scratch (from zero)", x: ["Ten hills", "Dawn dew", "White rock"] },
    ],
  },
  sh2_crios_malbec: {
    producer: "Susana Balbo",
    fact: "A Malbec made by Susana Balbo, the first Argentine woman to earn a degree in oenology.",
    quiz: [
      { q: "What does “Crios” in Susana Balbo Crios mean?", a: "Children (offspring)", x: ["Dawn", "Crystal", "Wind"] },
    ],
  },
  sh2_santajulia_malbec: {
    producer: "Familia Zuccardi",
    fact: "An everyday wine brand from Mendoza’s Zuccardi family. It is also well known for its organic range.",
    quiz: [
      { q: "Who is the Santa Julia of the name?", a: "Julia Zuccardi, a daughter of the Zuccardi family", x: ["Mendoza’s patron saint", "The founder’s mother", "A saint from the Italian home village"] },
    ],
  },
  sh2_vinacobos_bramare: {
    producer: "Viña Cobos",
    fact: "A Malbec from Viña Cobos, founded in Mendoza in 1999 by a famed California winemaker and Argentine friends.",
    quiz: [
      { q: "Which famous American winemaker founded Viña Cobos?", a: "Paul Hobbs", x: ["Robert Mondavi", "Heidi Barrett", "Helen Turley"] },
    ],
  },
  sh2_yacochuya: {
    producer: "Yacochuya",
    fact: "A dark Malbec from grapes grown around 2,000 m up in Cafayate, Salta. It is made by Salta’s Etchart family together with a famous Bordeaux consultant.",
    quiz: [
      { q: "Which famous Bordeaux consultant co-produces Yacochuya?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  sh2_colome_torrontes: {
    producer: "Bodega Colomé",
    fact: "Torrontés from high-altitude vineyards in Salta’s Calchaquí Valley. It is Argentina’s signature white grape, with a vivid floral scent.",
    quiz: [
      { q: "Which Swiss businessman bought and revived Bodega Colomé in 2001?", a: "Donald Hess", x: ["Mayndert Pon", "Alexander Vik", "Eduardo Chadwick"] },
    ],
  },
  sh2_noemia: {
    producer: "Bodega Noemía de Patagonia",
    fact: "A wine made in tiny amounts from old Malbec vines planted in the 1930s in Río Negro, Patagonia.",
    quiz: [
      { q: "Who is Noemía named after?", a: "Noemi Marone Cinzano, of Italy’s Cinzano family, a co-founder", x: ["A legendary Indigenous princess", "The first vineyard owner’s wife", "Patagonia’s patron saint"] },
    ],
  },
  sh2_findelmundo_malbec: {
    producer: "Bodega del Fin del Mundo",
    fact: "A Malbec from a winery that turned desert in Neuquén, Patagonia, into vineyards. Strong winds and big day–night temperature swings give deeply coloured wines.",
    quiz: [
      { q: "What does “Fin del Mundo” mean in Spanish?", a: "The end of the world", x: ["Land of wind", "Star of the south", "White desert"] },
    ],
  },
  sh2_schroeder_saurus: {
    producer: "Familia Schroeder",
    fact: "A Malbec from Familia Schroeder, a family winery that planted vineyards on a desert plateau in Neuquén, Patagonia.",
    quiz: [
      { q: "Where does the Familia Schroeder wine name “Saurus” come from?", a: "Dinosaur fossils found while building the winery", x: ["The founder’s nickname", "Lizards living in the vineyard", "Old oil-drilling equipment"] },
    ],
  },
  sh2_rustenvrede_estate: {
    producer: "Rust en Vrede",
    fact: "A red-only winery on the slopes of the Helderberg in Stellenbosch. Former rugby international Jannie Engelbrecht bought it in 1977.",
    quiz: [
      { q: "What does “Rust en Vrede” mean in Dutch?", a: "Rest and peace", x: ["Red hill", "Wind and sea", "Old mill"] },
    ],
  },
  sh2_delairegraff_chardonnay: {
    producer: "Delaire Graff",
    fact: "A winery atop the Helshoogte Pass between Stellenbosch and Franschhoek. It is also famous for its hotel and artworks.",
    quiz: [
      { q: "What is the main business of Laurence Graff, owner of Delaire Graff?", a: "Diamond jeweller", x: ["Hotel chain owner", "Racehorse trainer", "Architect"] },
    ],
  },
  sh2_beyerskloof_pinotage: {
    producer: "Beyerskloof",
    fact: "The everyday wine of the Pinotage specialist founded by winemaker Beyers Truter, known as “the King of Pinotage”.",
    quiz: [
      { q: "At which great Stellenbosch estate was Beyers Truter, founder of Beyerskloof, winemaker for many years?", a: "Kanonkop", x: ["Meerlust", "Vergelegen", "Rustenberg"] },
    ],
  },
  sh2_fairview_goatsdoroam: {
    producer: "Fairview",
    fact: "A blend named after a story from the Fairview farm, also famous for goat’s cheese, where goats got into the vineyard and ate only the ripest grapes.",
    quiz: [
      { q: "Which French wine region does the name “Goats do Roam” play on?", a: "Côtes du Rhône", x: ["Châteauneuf-du-Pape", "Côte-Rôtie", "Côte de Nuits"] },
    ],
  },
  sh2_kenforrester_fmc: {
    producer: "Ken Forrester",
    fact: "The top white Ken Forrester, known as “Mr Chenin”, makes from old Chenin Blanc vines in Stellenbosch.",
    quiz: [
      { q: "What does “FMC” in Ken Forrester The FMC officially stand for?", a: "Forrester Meinert Chenin", x: ["Fine Mature Chenin", "First Muscat Cuvée", "French Model Cellar"] },
    ],
  },
  sh2_demorgenzon_chenin: {
    producer: "DeMorgenzon",
    fact: "A white made from old Chenin Blanc vines by DeMorgenzon, a winery on the Stellenbosch hills. The name means “the morning sun”.",
    quiz: [
      { q: "What music does DeMorgenzon play day and night in its vineyards and cellar?", a: "Baroque music", x: ["Jazz", "Traditional African drumming", "Rock music"] },
    ],
  },
  sh2_porseleinberg: {
    producer: "Boekenhoutskloof",
    fact: "A wine Boekenhoutskloof makes from organically grown Swartland Syrah. The winemaker prints the labels himself on an old press kept on the farm.",
    quiz: [
      { q: "What does “Porseleinberg” mean in Afrikaans?", a: "Porcelain mountain", x: ["Silver river", "Hill of the wind", "White sands"] },
    ],
  },
  sh2_sadie_palladius: {
    producer: "Sadie Family",
    fact: "A white blend Eben Sadie makes from many varieties of old vines across the Swartland. It set the benchmark for South African white blends.",
    quiz: [
      { q: "What do the names of Sadie Family’s two flagship wines, Palladius and Columella, have in common?", a: "Both were ancient Roman writers on agriculture", x: ["Both were Roman emperors", "Both are Greek gods", "Both are Swartland mountains"] },
    ],
  },
  sh2_allesverloren_tintabarocca: {
    producer: "Allesverloren",
    fact: "A red made from a Portuguese grape by an old family farm in Riebeek-Kasteel, Swartland. It is also famous for port-style fortified wines.",
    quiz: [
      { q: "What does the farm name Allesverloren mean?", a: "All is lost", x: ["Endless vineyards", "The lost sheep", "Late harvest"] },
    ],
  },
  sh2_grootconstantia_gouverneurs: {
    producer: "Groot Constantia",
    fact: "A Bordeaux blend from Groot Constantia, South Africa’s oldest wine farm, founded in 1685.",
    quiz: [
      { q: "Who founded the Groot Constantia farm?", a: "Cape governor Simon van der Stel", x: ["Jan van Riebeeck, founder of Cape Town", "Simon’s son Willem Adriaan van der Stel", "Mining magnate Cecil Rhodes"] },
    ],
  },
  sh2_kleinconstantia_sb: {
    producer: "Klein Constantia",
    fact: "Sauvignon Blanc from Klein Constantia, famous for Vin de Constance, grown on the sea-breezy Constantia slopes.",
    quiz: [
      { q: "How were Klein Constantia and Groot Constantia originally related?", a: "They were split from one Constantia farm founded in 1685", x: ["Two brothers founded them separately", "One bought the other and renamed it", "They are unrelated farms with similar names"] },
    ],
  },
  sh2_boschendal_1685: {
    producer: "Boschendal",
    fact: "Chardonnay from Boschendal, a historic farm at the entrance to Franschhoek, pioneered by French Huguenot settlers.",
    quiz: [
      { q: "What does “1685” in Boschendal 1685 mean?", a: "The year the Boschendal farm was first founded", x: ["The year of the first wine export", "The vineyard’s altitude in metres", "The number of vines on the farm"] },
    ],
  },
  sh2_simonsig_kaapsevonkel: {
    producer: "Simonsig",
    fact: "South Africa’s first bottle-fermented sparkling wine, created by Frans Malan in 1971. The starting point of South African “Cap Classique”.",
    quiz: [
      { q: "What does “Kaapse Vonkel” mean in Afrikaans?", a: "Cape sparkle", x: ["Cape star", "Sea foam", "Golden dew"] },
    ],
  },
  sh2_ernieels_signature: {
    producer: "Ernie Els Wines",
    fact: "A Bordeaux blend from the winery a world-famous South African sports star founded on the Helderberg slopes in Stellenbosch.",
    quiz: [
      { q: "In which sport is Ernie Els, founder of Ernie Els Wines, a star?", a: "Golf", x: ["Rugby", "Cricket", "Tennis"] },
    ],
  },
  sh2_glenelly_ladymay: {
    producer: "Glenelly",
    fact: "A Cabernet Sauvignon-led blend from the winery May-Eliane de Lencquesaing, who ran a great Bordeaux estate, founded in Stellenbosch at nearly 80. It is named after her.",
    quiz: [
      { q: "Which Pauillac Second Growth did May-Eliane de Lencquesaing, founder of Glenelly, run until 2007?", a: "Château Pichon Longueville Comtesse de Lalande", x: ["Château Pichon Baron", "Château Lynch-Bages", "Château Pontet-Canet"] },
    ],
  },
  sh2_lanzerac_pinotage: {
    producer: "Lanzerac",
    fact: "Pinotage from Lanzerac, a historic Stellenbosch farm also famous as a hotel.",
    quiz: [
      { q: "What wine history did Lanzerac make in 1961?", a: "It released the first wine with “Pinotage” named on the label", x: ["South Africa’s first screw cap", "South Africa’s first rosé", "South Africa’s first organic certification"] },
    ],
  },
  sh2_diemersfontein_pinotage: {
    producer: "Diemersfontein",
    fact: "Pinotage from Diemersfontein, a winery in Wellington, northeast of Cape Town. Its smooth, heavily oaked style became a hit.",
    quiz: [
      { q: "What is the nickname of the Pinotage style Diemersfontein pioneered and popularised?", a: "Coffee Pinotage", x: ["Vanilla Pinotage", "Smoky Pinotage", "Cherry Pinotage"] },
    ],
  },
  sh2_bouza_tannat: {
    producer: "Bodega Bouza",
    fact: "Tannat from a family-run boutique winery near the capital, Montevideo. A leader in showing the quality of Uruguayan Tannat.",
    quiz: [
      { q: "What is Bodega Bouza famous for collecting and displaying at the winery?", a: "Classic cars", x: ["Old wine bottles", "Gaucho saddles", "Contemporary art"] },
    ],
  },
  sh2_pisano_rpf: {
    producer: "Pisano",
    fact: "Tannat from the winery run for generations in Canelones by the Pisano family, descendants of Italian immigrants.",
    quiz: [
      { q: "What does “RPF” in Pisano RPF stand for?", a: "The family’s personal reserve (Reserva Personal de la Familia)", x: ["Red Premium Fruit", "Río de la Plata Finca", "A vineyard block number"] },
    ],
  },
  sh2_mercian_kikyogahara: {
    producer: "Château Mercian",
    fact: "Château Mercian’s flagship red, made from Merlot grown on the Kikyogahara plateau in Shiojiri, Nagano. It showed the world the promise of Japanese Merlot.",
    quiz: [
      { q: "Which Japanese drinks group owns Château Mercian?", a: "Kirin", x: ["Suntory", "Asahi", "Sapporo"] },
    ],
  },
  sh2_suntory_tomi: {
    producer: "Suntory",
    fact: "Suntory’s top Bordeaux blend, made only from the best grapes of its Tomi no Oka winery in Yamanashi.",
    quiz: [
      { q: "Which Saint-Julien grand cru château did Suntory, maker of Tomi, buy in 1983?", a: "Château Lagrange", x: ["Château Talbot", "Château Beychevelle", "Château Gruaud Larose"] },
    ],
  },
  sh2_greatwall_cs: {
    producer: "Great Wall (COFCO)",
    fact: "A leading Chinese wine brand (长城) whose name means the Great Wall. It released its first wine in Hebei in the early 1980s.",
    quiz: [
      { q: "Which Chinese state-owned company owns Great Wall (长城) wine?", a: "COFCO", x: ["Changyu", "Tsingtao Brewery", "Kweichow Moutai"] },
    ],
  },
  sh2_gracevineyard_chairmans: {
    producer: "Grace Vineyard",
    fact: "The top red of Grace Vineyard, a family winery founded in Shanxi province in 1997 by a Hong Kong businessman.",
    quiz: [
      { q: "What does Grace Vineyard’s Chinese name, 怡园 (Yiyuan), mean?", a: "Garden of joy", x: ["Golden hill", "Blue river", "Dragon’s forest"] },
    ],
  },
  sh2_helanqingxue_jiabeilan: {
    producer: "Helan Qingxue",
    fact: "A Bordeaux blend from a small winery at the foot of the Helan Mountains in Ningxia. It is considered the first wine to show that Chinese wine could reach world level.",
    quiz: [
      { q: "Which award did Helan Qingxue Jia Bei Lan 2009 win in 2011?", a: "A Decanter World Wine Awards International Trophy", x: ["Wine Spectator Wine of the Year", "100 points from Robert Parker", "The grand prize at a Bordeaux wine fair"] },
    ],
  },
  sh2_silverheights_summit: {
    producer: "Silver Heights",
    fact: "The top red of Silver Heights, a family winery at the foot of the Helan Mountains in Ningxia. Winemaker Gao Yuan (Emma Gao) runs it with her family.",
    quiz: [
      { q: "Where did Silver Heights winemaker Emma Gao study winemaking?", a: "Bordeaux, France", x: ["UC Davis, California", "Adelaide, Australia", "Geisenheim, Germany"] },
    ],
  },
  sh2_longdai: {
    producer: "Domaines Barons de Rothschild (Lafite)",
    fact: "A red from vineyards the owners of a great Bordeaux estate developed in the hills of Penglai on the Shandong peninsula. Its first vintage was 2017.",
    quiz: [
      { q: "The makers of Long Dai are the owners of which Bordeaux First Growth?", a: "Château Lafite Rothschild", x: ["Château Mouton Rothschild", "Château Margaux", "Château Latour"] },
    ],
  },
  sh2_sula_sb: {
    producer: "Sula Vineyards",
    fact: "Sauvignon Blanc from India’s leading winery, founded in Nashik in 1999 by Stanford graduate Rajeev Samant.",
    quiz: [
      { q: "Whose name does “Sula” in Sula Vineyards come from?", a: "The founder’s mother, Sulabha", x: ["A Hindu goddess", "A river flowing through Nashik", "The founder’s daughter"] },
    ],
  },
  sh2_grover_lareserve: {
    producer: "Grover Zampa Vineyards",
    fact: "The flagship red blend of Grover Vineyards, founded in 1988 in the Nandi Hills near Bengaluru. It is considered a pioneer of Indian wine.",
    quiz: [
      { q: "Which famous Bordeaux consultant advised Grover Vineyards for many years?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
};

export default T;
