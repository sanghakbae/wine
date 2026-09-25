import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  eu_prum_wehlener: {
    producer: "Joh. Jos. Prüm",
    fact: "The leading producer of the Wehlener Sonnenuhr, named after the sundial on its slope. Famous for delicately sweet Rieslings that are closed when young and age for decades.",
    quiz: [
      { q: "What does “Sonnenuhr” in J.J. Prüm Wehlener Sonnenuhr mean?", a: "Sundial", x: ["Moonlit garden", "Bell tower", "Watermill"] },
    ],
  },
  eu_loosen_praelat: {
    producer: "Dr. Loosen",
    fact: "Riesling from the Erdener Prälat, sheltered from the wind by red slate cliffs and counted as the Mosel’s warmest vineyard. It is tiny, so production is very small.",
    quiz: [
      { q: "Who took over the family estate in 1988 and made Dr. Loosen Erdener Prälat known worldwide?", a: "Ernst Loosen", x: ["Egon Müller", "Johannes Selbach", "Carl von Schubert"] },
    ],
  },
  eu_christoffel_urzig: {
    producer: "Joh. Jos. Christoffel Erben",
    fact: "The steep slopes of Ürzig mix slate with red volcanic soil, rare in the Mosel. That is why its Riesling is famous for exotic spicy flavours.",
    quiz: [
      { q: "What does “Würzgarten” in Ürziger Würzgarten mean?", a: "Spice garden", x: ["Wine cellar", "Walled garden", "Sun hill"] },
    ],
  },
  eu_schloss_johannisberg: {
    producer: "Schloss Johannisberg",
    fact: "A Rheingau castle that grades its wines by capsule colour. Of the yellow, green, pink and gold capsules, green (Grünlack) marks the Spätlese.",
    quiz: [
      { q: "Which category is said to have been born at Schloss Johannisberg in 1775 when the courier with harvest permission arrived late?", a: "Spätlese (late harvest)", x: ["Eiswein", "Kabinett", "Grosses Gewächs"] },
      { q: "Which statesman was given Schloss Johannisberg by the Austrian emperor in 1816?", a: "Metternich", x: ["Bismarck", "Talleyrand", "Richelieu"] },
    ],
  },
  eu_weil_grafenberg: {
    producer: "Robert Weil",
    fact: "A winery founded in Kiedrich in 1875 by Dr. Robert Weil, a German professor at the Sorbonne in Paris. Riesling from the steep Gräfenberg vineyard is its flagship.",
    quiz: [
      { q: "Which Japanese company became majority owner of the Robert Weil estate in 1988?", a: "Suntory", x: ["Kirin", "Asahi", "Sapporo"] },
    ],
  },
  eu_keller_gmax: {
    producer: "Keller",
    fact: "A Riesling from the Keller family, who raised Rheinhessen to world fame. Made in tiny amounts from old vines, it is considered Germany’s most expensive dry Riesling.",
    quiz: [
      { q: "Why is Keller G-Max called a mysterious wine?", a: "The vineyard’s location is kept secret", x: ["A different artist draws the label each year", "It is only made as Eiswein", "It is aged under the sea"] },
    ],
  },
  eu_donnhoff_hermannshohle: {
    producer: "Dönnhoff",
    fact: "Helmut Dönnhoff put the small Nahe region on the world stage. Hermannshöhle, with mixed slate and volcanic rock, is considered the Nahe’s finest vineyard.",
    quiz: [
      { q: "Which son now runs Dönnhoff, following his father Helmut?", a: "Cornelius Dönnhoff", x: ["Ernst Loosen", "Klaus Peter Keller", "Philipp Wittmann"] },
    ],
  },
  eu_haag_juffer: {
    producer: "Fritz Haag",
    fact: "Riesling from the Juffer-Sonnenuhr slope facing the village of Brauneberg across the river. The Haag family has made delicate, long-lived wines for generations.",
    quiz: [
      { q: "What does “Juffer” in Fritz Haag Brauneberger Juffer come from?", a: "Maiden (young lady)", x: ["City wall", "Fox", "Sun"] },
    ],
  },
  eu_grunhaus_abtsberg: {
    producer: "C. von Schubert",
    fact: "This vineyard on the Ruwer first appears in 10th-century records. The von Schubert family has run it since the late 19th century and still uses a label designed around 1900.",
    quiz: [
      { q: "Who first cultivated the Maximin Grünhaus vineyards?", a: "St. Maximin’s Abbey in Trier", x: ["Cologne Cathedral", "The Prussian royal family", "Heidelberg University"] },
      { q: "In what style is the Maximin Grünhaus label famous?", a: "Art Nouveau (Jugendstil)", x: ["Bauhaus", "Pop art", "Rococo"] },
    ],
  },
  eu_selbach_zeltinger: {
    producer: "Selbach-Oster",
    fact: "The winery of the Selbach family, who have tended vines in Zeltingen for generations. Riesling from the steep Sonnenuhr slope, with its sundial, is the flagship.",
    quiz: [
      { q: "Which famous vineyard of the neighbouring village shares one slope with Selbach-Oster’s Zeltinger Sonnenuhr?", a: "Wehlener Sonnenuhr", x: ["Piesporter Goldtröpfchen", "Bernkasteler Doctor", "Scharzhofberg"] },
    ],
  },
  eu_schloss_vollrads: {
    producer: "Schloss Vollrads",
    fact: "A Rheingau castle counted among the world’s oldest wine estates. Its moated medieval tower is its symbol.",
    quiz: [
      { q: "From what year is the oldest record of Schloss Vollrads selling wine?", a: "1211", x: ["1775", "1855", "1920"] },
    ],
  },
  eu_kloster_eberbach: {
    producer: "Hessische Staatsweingüter Kloster Eberbach",
    fact: "A monastery winery founded by Cistercian monks in 1136. Its walled Steinberg vineyard, tended by the monks, is often compared to Burgundy’s Clos de Vougeot.",
    quiz: [
      { q: "Which Sean Connery film was shot at Kloster Eberbach?", a: "The Name of the Rose", x: ["Indiana Jones and the Last Crusade", "The Untouchables", "Goldfinger"] },
    ],
  },
  eu_kunstler_holle: {
    producer: "Künstler",
    fact: "A great estate in Hochheim, at the eastern edge of the Rheingau where the Main meets the Rhine. Its powerful dry Rieslings represent the Rheingau.",
    quiz: [
      { q: "Which English nickname for Rhine wine comes from Hochheim, home of Künstler Hochheimer Hölle?", a: "Hock", x: ["Claret", "Sack", "Bubbly"] },
    ],
  },
  eu_wittmann_morstein: {
    producer: "Wittmann",
    fact: "A dry Riesling from Morstein, a limestone vineyard farmed biodynamically by the Wittmann family of Westhofen. It is considered Rheinhessen’s top grand cru-level wine.",
    quiz: [
      { q: "Who makes Wittmann Morstein and runs the estate biodynamically?", a: "Philipp Wittmann", x: ["Klaus Peter Keller", "Helmut Dönnhoff", "Johannes Leitz"] },
    ],
  },
  eu_burklin_kirchenstuck: {
    producer: "Dr. Bürklin-Wolf",
    fact: "A large family estate in Wachenheim, Pfalz, that follows biodynamic farming. Kirchenstück, a small vineyard beside the church, is considered the Pfalz’s most precious site.",
    quiz: [
      { q: "Which region inspired the “G.C.” and “P.C.” ranks on Dr. Bürklin-Wolf labels?", a: "Burgundy", x: ["Bordeaux’s 1855 classification", "Rioja’s ageing categories", "Champagne’s échelle des crus"] },
    ],
  },
  eu_black_tower: {
    producer: "Reh Kendermann",
    fact: "A German wine brand born in the late 1960s that became hugely popular in Britain and around the world. Its jet-black, ceramic-looking bottle stands out at a glance.",
    quiz: [
      { q: "To which mild, sweet German white wine style did Black Tower belong when it first came out?", a: "Liebfraumilch", x: ["Eiswein", "Sekt", "Trockenbeerenauslese"] },
    ],
  },
  eu_wirsching_silvaner: {
    producer: "Hans Wirsching",
    fact: "A family estate handed down in Iphofen, Franken. It makes earthy Silvaner from gypsum-marl vineyards on the Steigerwald slopes and bottles it in the Bocksbeutel.",
    quiz: [
      { q: "Who was Julius Echter, namesake of Hans Wirsching’s Iphöfer Julius-Echter-Berg?", a: "A 16th–17th-century Prince-Bishop of Würzburg", x: ["A king of Bavaria", "A leader of the Reformation", "A grape breeder"] },
    ],
  },
  eu_molitor_himmelreich: {
    producer: "Markus Molitor",
    fact: "Markus Molitor took over the family estate young and built it into one of the Mosel’s best. “Himmelreich” means heaven.",
    quiz: [
      { q: "What does the capsule colour (white, green, gold) on a Markus Molitor bottle tell you?", a: "The level of sweetness", x: ["The vineyard soil", "The ageing time", "The month of harvest"] },
    ],
  },
  eu_thanisch_doctor: {
    producer: "Dr. H. Thanisch",
    fact: "Riesling from the Doctor, a small, famous vineyard on the steep slope just behind Bernkastel. It has long been counted among Germany’s most expensive vineyard land.",
    quiz: [
      { q: "From which legend does the name “Doctor” in Dr. Thanisch Berncasteler Doctor come?", a: "A sick Archbishop of Trier was cured by drinking its wine", x: ["A large hospital stood beside the vineyard", "Napoleon’s army surgeon used it as medicine", "The pickers wore white doctors’ coats"] },
    ],
  },
  eu_leitz_einszweidry: {
    producer: "Leitz",
    fact: "A light, crisp dry Riesling from Johannes Leitz in Rüdesheim, where the Rhine bends. Its easy price has made it loved worldwide.",
    quiz: [
      { q: "What is the pun in the name Leitz “Eins Zwei Dry”?", a: "German “one, two, three”, with “drei” turned into English “dry”", x: ["A Beethoven symphony number", "The names of three Leitz brothers", "A triple-filtering method"] },
    ],
  },
  eu_fxpichler_kellerberg: {
    producer: "F.X. Pichler",
    fact: "The estate the Pichler family of Oberloiben raised to the top of the Wachau. The Smaragd from Kellerberg, overlooking the Danube, combines power and depth.",
    quiz: [
      { q: "Where does the “Smaragd” category name on F.X. Pichler labels come from?", a: "An emerald-green lizard living in the vineyard stone walls", x: ["A nearby emerald mine", "A jewel in the Habsburg crown", "A green bottle"] },
    ],
  },
  eu_knoll_schutt: {
    producer: "Emmerich Knoll",
    fact: "A Wachau classic made for generations by the Knoll family of Unterloiben. Traditional and unswayed by fashion, its wines shine with long ageing.",
    quiz: [
      { q: "Which saint is pictured on the Knoll label?", a: "Saint Urban, patron saint of winegrowers", x: ["Saint Peter", "Saint Nicholas", "Saint George"] },
    ],
  },
  eu_prager_achleiten: {
    producer: "Prager",
    fact: "A great Wachau estate in Weissenkirchen. Under Toni Bodenstein it won fame for mineral-laden Riesling from Achleiten, a steep, stone-walled terraced vineyard.",
    quiz: [
      { q: "Which river does the Prager Achleiten vineyard overlook?", a: "The Danube", x: ["The Rhine", "The Mosel", "The Elbe"] },
    ],
  },
  eu_hirtzberger_singerriedel: {
    producer: "Franz Hirtzberger",
    fact: "A great estate in Spitz, in the western Wachau. Its flagship is the Riesling Smaragd from the steep Singerriedel terraces behind the village.",
    quiz: [
      { q: "Of the “Vinea Wachau” categories created in 1983 by producers like Hirtzberger, which is the lightest?", a: "Steinfeder", x: ["Smaragd", "Kabinett", "Grosses Gewächs"] },
    ],
  },
  eu_brundlmayer_heiligenstein: {
    producer: "Bründlmayer",
    fact: "The great estate built by Willi Bründlmayer in Langenlois, Kamptal. It is famous for Riesling from the steep Heiligenstein hill and for traditional-method sparkling wine.",
    quiz: [
      { q: "What does the vineyard name Heiligenstein mean?", a: "Holy stone (rock)", x: ["White hill", "Saint’s well", "Hero’s grave"] },
    ],
  },
  eu_kracher_tba: {
    producer: "Kracher",
    fact: "Mists rising from Lake Neusiedl at Illmitz bring on noble rot and world-class sweet wines. The late Alois Kracher took Austrian dessert wine to the world’s summit.",
    quiz: [
      { q: "What is Kracher’s series of Trockenbeerenauslese aged in new oak called?", a: "Nouvelle Vague", x: ["Zwischen den Seen", "Smaragd", "Grand Cru Classé"] },
    ],
  },
  eu_domane_wachau: {
    producer: "Domäne Wachau",
    fact: "A cooperative winery run jointly by many Wachau grape growers. Its base is the “Kellerschlössel”, a Baroque cellar in Dürnstein.",
    quiz: [
      { q: "Which king was held prisoner in the castle at Dürnstein, home of Domäne Wachau, in the late 12th century?", a: "Richard I the Lionheart of England", x: ["Louis IX of France", "Holy Roman Emperor Frederick I", "Robert I of Scotland"] },
      { q: "What was Domäne Wachau called before it changed its name in 2008?", a: "Freie Weingärtner Wachau", x: ["Royal Wachau Winery", "Danube Wine Union", "Dürnstein Abbey Winery"] },
    ],
  },
  eu_moric_blaufrankisch: {
    producer: "Moric",
    fact: "A Burgenland estate founded in 2001. Its Burgundy-like, delicate reds from old Blaufränkisch vines changed how the grape is judged.",
    quiz: [
      { q: "Which winemaker founded Moric and made Blaufränkisch known worldwide?", a: "Roland Velich", x: ["Alois Kracher", "Willi Bründlmayer", "Emmerich Knoll"] },
    ],
  },
  eu_royaltokaji_essencia: {
    producer: "Royal Tokaji",
    fact: "Only the juice that runs from piled botrytised grapes under their own weight is collected and fermented very slowly over several years. It reaches only a few degrees of alcohol and is as thick as honey.",
    quiz: [
      { q: "Which British wine writer co-founded the Royal Tokaji winery in 1990?", a: "Hugh Johnson", x: ["Jancis Robinson", "Robert Parker", "Michael Broadbent"] },
    ],
  },
  eu_oremus_aszu: {
    producer: "Oremus",
    fact: "A Tolcsva winery named after the Oremus vineyard, where legend says the first Tokaji Aszú was born. Oremus is Latin for “let us pray”.",
    quiz: [
      { q: "Which great Spanish house bought Oremus in 1993?", a: "Vega Sicilia", x: ["Marqués de Riscal", "Torres", "Bodegas Muga"] },
    ],
  },
  eu_disznoko_aszu: {
    producer: "Disznókő",
    fact: "Named after a large boar-shaped rock in the middle of the vineyard. One of the wineries that led Tokaj’s revival with foreign investment after communism ended.",
    quiz: [
      { q: "What does the name Disznókő mean?", a: "Pig (boar) rock", x: ["Golden hill", "King’s spring", "Wolf valley"] },
      { q: "Which wine company, part of a French insurance group, has owned Disznókő since 1992?", a: "AXA Millésimes", x: ["LVMH", "Groupe Castel", "Baron Philippe de Rothschild"] },
    ],
  },
  eu_kefraya: {
    producer: "Château Kefraya",
    fact: "One of Lebanon’s leading wineries, with vineyards high on the western slopes of the Bekaa Valley. French grapes and Lebanese sun make dark, spicy reds.",
    quiz: [
      { q: "Between which two mountain ranges lies the Bekaa Valley, home of Château Kefraya?", a: "Mount Lebanon and the Anti-Lebanon", x: ["The Taurus and the Zagros", "The Caucasus and the Urals", "The Atlas and the Rif"] },
    ],
  },
  eu_ixsir: {
    producer: "Ixsir",
    fact: "A winery on the slopes of Batroun in northern Lebanon. Its name comes from the Arabic for “elixir”, and it is famous for an eco-friendly design with the building buried underground.",
    quiz: [
      { q: "Which Ixsir co-founder once chaired Renault and Nissan?", a: "Carlos Ghosn", x: ["Bernard Arnault", "Sheikh Mansour", "Richard Branson"] },
    ],
  },
  eu_massaya: {
    producer: "Massaya",
    fact: "A winery in Taanayel in the Bekaa Valley, founded by the Ghosn brothers, who returned home to Lebanon after the civil war, in partnership with great French wine houses.",
    quiz: [
      { q: "Which great Châteauneuf-du-Pape house took part in founding Massaya?", a: "Vieux Télégraphe (Brunier family)", x: ["Château de Beaucastel (Perrin family)", "Château Rayas", "E. Guigal"] },
    ],
  },
  eu_castel_grandvin: {
    producer: "Domaine du Castel",
    fact: "A family winery that began with vines Eli Ben Zaken planted near his home. It is considered the pioneer that opened Israel’s era of fine wine.",
    quiz: [
      { q: "Which city is closest to the Judean Hills, home of Domaine du Castel?", a: "Jerusalem", x: ["Haifa", "Eilat", "Nazareth"] },
    ],
  },
  eu_yarden_cabernet: {
    producer: "Golan Heights Winery",
    fact: "Cabernet from cool volcanic-soil vineyards on the Golan Heights. Opened in the 1980s, the Golan Heights Winery is the brand that put Israeli wine on the world map.",
    quiz: [
      { q: "What does “Yarden” refer to in Hebrew?", a: "The Jordan River", x: ["The Sea of Galilee", "Mount Hermon", "The Dead Sea"] },
    ],
  },
  eu_gaia_thalassitis: {
    producer: "Gaia Wines",
    fact: "Thalassitis, meaning “of the sea”, is a salty, razor-sharp white made from Assyrtiko on the volcanic island of Santorini. It is Gaia Wines’ flagship.",
    quiz: [
      { q: "What is the basket-shaped training, coiling vines in a ring to protect them from strong winds, used for Gaia Thalassitis on Santorini?", a: "Kouloura", x: ["Gobelet", "Pergola", "Guyot"] },
    ],
  },
  eu_boutari_naoussa: {
    producer: "Boutari",
    fact: "Northern Greece’s flagship red, made from Xinomavro, meaning “sour black”. Its high acidity and tannin earn it the name “the Barolo of Greece”.",
    quiz: [
      { q: "In what year did Boutari first make wine in Naoussa?", a: "1879", x: ["1789", "1923", "1970"] },
    ],
  },
  eu_sigalas_assyrtiko: {
    producer: "Domaine Sigalas",
    fact: "A winery near Oia in northern Santorini. On an island where vine roots over a hundred years old are common, it makes mineral-laden Assyrtiko.",
    quiz: [
      { q: "Which pest could vines escape thanks to Santorini’s volcanic sand, home of Domaine Sigalas?", a: "Phylloxera", x: ["Grape moth", "Fruit fly", "Termites"] },
    ],
  },
  eu_tsinandali: {
    producer: "Kakheti region wineries",
    fact: "Georgia’s flagship dry white, made from Rkatsiteli and Mtsvane. It is named after the village with the estate of the 19th-century nobleman who brought in European winemaking.",
    quiz: [
      { q: "Which noble poet brought European-style winemaking to 19th-century Georgia from his Tsinandali estate?", a: "Alexander Chavchavadze", x: ["Shota Rustaveli", "Erekle II", "Niko Pirosmani"] },
    ],
  },
  eu_kindzmarauli: {
    producer: "Kindzmarauli Marani",
    fact: "Saperavi whose fermentation is halted by chilling, keeping the grape’s natural sugar. A signature Georgian red made only in a designated zone around Kvareli.",
    quiz: [
      { q: "What taste is Kindzmarauli, a red wine, famous for?", a: "Naturally semi-sweet", x: ["Bone-dry", "Fortified with brandy", "Sparkling"] },
    ],
  },
  eu_pheasants_tears: {
    producer: "Pheasant's Tears",
    fact: "A winery in Signagi founded by a Georgian farmer and an American painter. The name comes from an old Georgian tale of a wine so good it made even a pheasant weep.",
    quiz: [
      { q: "What large clay jar, buried in the ground, does Pheasant's Tears use for traditional fermentation and ageing?", a: "Qvevri", x: ["Barrique", "Foudre", "Solera"] },
      { q: "Which American painter co-founded Pheasant's Tears?", a: "John Wurdeman", x: ["Andy Warhol", "Keith Haring", "Jeff Koons"] },
    ],
  },
  eu_movia_puro: {
    producer: "Movia",
    fact: "The winery of Aleš Kristančič, whose vineyards straddle the Slovenian–Italian border. Puro is released with its yeast sediment still in the bottle.",
    quiz: [
      { q: "What must the drinker do before drinking Movia Puro?", a: "Open the bottle upside down to expel the sediment", x: ["Add sugar syrup", "Shake the bottle to make foam", "Soak the cork in water"] },
    ],
  },
  eu_dingac: {
    producer: "Vinarija Dingač",
    fact: "Plavac Mali grown on steep slopes plunging to the sea on the south of the Pelješac peninsula. In 1961 it became the first Croatian wine with a protected origin.",
    quiz: [
      { q: "Which animal, once used to carry grapes up the steep vineyards, is drawn on the Dingač label?", a: "A donkey", x: ["A goat", "A horse", "A cow"] },
    ],
  },
  eu_cricova_brut: {
    producer: "Cricova",
    fact: "Famous for a vast underground wine city made from old limestone quarry tunnels. More than 100 km of passages hold bottle-fermented sparkling wine and rare collector’s wines.",
    quiz: [
      { q: "Which first man in space visited Cricova’s underground cellars in the 1960s?", a: "Yuri Gagarin", x: ["Neil Armstrong", "John Glenn", "Alexei Leonov"] },
    ],
  },
  eu_nyetimber: {
    producer: "Nyetimber",
    fact: "A sparkling wine estate in West Sussex, England. Planting only the three Champagne grapes and using second fermentation in bottle, it launched the reputation of English sparkling wine.",
    quiz: [
      { q: "Who first planted Champagne grapes at Nyetimber in 1988?", a: "American couple Stuart and Sandy Moss", x: ["The British royal family", "Moët & Chandon", "The Taittinger family"] },
    ],
  },
  eu_chapel_down: {
    producer: "Chapel Down",
    fact: "A leading English winery in Tenterden, Kent. It makes sparkling wine by second fermentation in bottle, like Champagne.",
    quiz: [
      { q: "Which soil makes southern English sparkling wines like Chapel Down comparable to Champagne?", a: "Chalk", x: ["Black volcanic ash", "Red slate", "River-gravel alluvium"] },
    ],
  },
  us_screaming_eagle: {
    producer: "Screaming Eagle",
    fact: "Jean Phillips released the first vintage in 1992 from land she bought in Oakville. In 2000 a single 6-litre bottle sold for $500,000 at the Napa auction, stunning the world.",
    quiz: [
      { q: "Which American sports team owner acquired Screaming Eagle in 2006?", a: "Stan Kroenke", x: ["Jerry Jones", "Mark Cuban", "Robert Kraft"] },
      { q: "Which cult winemaker made Screaming Eagle’s early vintages?", a: "Heidi Barrett", x: ["Warren Winiarski", "Mike Grgich", "Paul Draper"] },
    ],
  },
  us_harlan: {
    producer: "Harlan Estate",
    fact: "Founded in 1984 by property developer Bill Harlan on the hillsides west of Oakville. Aiming to be a Napa “First Growth”, it has earned 100 Parker points several times.",
    quiz: [
      { q: "Which other cult wine brand did Harlan Estate founder Bill Harlan launch in the 1990s?", a: "BOND", x: ["Scarecrow", "Colgin", "Screaming Eagle"] },
      { q: "Which Napa Valley resort did Bill Harlan of Harlan Estate co-found?", a: "Meadowood", x: ["Auberge du Soleil", "Carneros Inn", "Solage"] },
    ],
  },
  us_dominus: {
    producer: "Christian Moueix",
    fact: "Wine made by Christian Moueix of Bordeaux, who ran Pétrus, from the old Napanook vineyard in Yountville. The first vintage was 1983.",
    quiz: [
      { q: "Which Swiss architecture duo designed the Dominus winery building?", a: "Herzog & de Meuron", x: ["Frank Gehry", "Tadao Ando", "Renzo Piano"] },
      { q: "What is special about the walls of the Dominus winery?", a: "Wire baskets filled with basalt stones", x: ["A glass curtain wall", "Cladding of oak barrel staves", "Exposed concrete"] },
    ],
  },
  us_caymus_ss: {
    producer: "Caymus Vineyards",
    fact: "The top Cabernet made by the Wagner family of Caymus from only the best barrels each year. It is the symbol of rich, smooth Napa style.",
    quiz: [
      { q: "What record does Caymus Special Selection hold with Wine Spectator?", a: "The only wine named Wine of the Year twice", x: ["The first American wine to score 100", "The most expensive American wine ever sold", "The first wine aged on a space station"] },
    ],
  },
  us_caymus: {
    producer: "Caymus Vineyards",
    fact: "The winery the Wagner family started in Rutherford in 1972. Its rich Cabernet with ripe fruit and velvety texture is also much loved in Korea.",
    quiz: [
      { q: "Where does the name Caymus come from?", a: "Rancho Caymus, a 19th-century Mexican land grant in Napa", x: ["The founder’s wife’s name", "An old name for the Napa River", "The Wagner family’s German hometown"] },
      { q: "Which family founded and runs Caymus?", a: "The Wagner family", x: ["The Mondavi family", "The Gallo family", "The Coppola family"] },
    ],
  },
  us_silveroak_napa: {
    producer: "Silver Oak",
    fact: "Made from Cabernet Sauvignon alone, aged in American oak barrels. On release day for each new vintage, people queue outside the winery.",
    quiz: [
      { q: "What building is drawn on the Silver Oak label?", a: "A water tower", x: ["A lighthouse", "A windmill", "A church steeple"] },
      { q: "Which oak barrels does Silver Oak insist on for ageing?", a: "American oak", x: ["French oak", "Slovenian oak", "Hungarian oak"] },
    ],
  },
  us_silveroak_av: {
    producer: "Silver Oak",
    fact: "Silver Oak’s Sonoma Cabernet, softer and readier to drink than the Napa Valley bottling. Its label shows the same water tower as the Napa wine.",
    quiz: [
      { q: "Which two men co-founded Silver Oak in 1972?", a: "Ray Duncan and Justin Meyer", x: ["Robert Mondavi and Baron Philippe", "Jack and Dolores Cakebread", "Dan and Margaret Duckhorn"] },
    ],
  },
  us_cask23: {
    producer: "Stag's Leap Wine Cellars",
    fact: "The top Cabernet of Stag’s Leap Wine Cellars, founded by Warren Winiarski, made only from the finest grapes. The 1974 was the first vintage.",
    quiz: [
      { q: "Where does the name Cask 23 come from?", a: "Cask No. 23, bottled separately as outstanding in the first year", x: ["The vineyard’s 23rd block", "The founder’s birthday, the 23rd", "A 23-month ageing rule"] },
      { q: "Which great Italian house bought Stag’s Leap Wine Cellars, maker of Cask 23, with Chateau Ste. Michelle in 2007?", a: "Antinori", x: ["Gaja", "Frescobaldi", "Biondi-Santi"] },
    ],
  },
  us_slv: {
    producer: "Stag's Leap Wine Cellars",
    fact: "S.L.V. stands for “Stag’s Leap Vineyard”. After the 1973 beat great French wines, a bottle entered the collection of the Smithsonian in the US.",
    quiz: [
      { q: "At which 1976 blind tasting did Stag’s Leap Wine Cellars S.L.V. 1973 win the red wine category?", a: "The Judgment of Paris", x: ["The 1855 Bordeaux classification", "The Vinexpo grand prize", "Wine Spectator’s Wine of the Year"] },
      { q: "What was the original job of Warren Winiarski, founder of Stag’s Leap Wine Cellars, maker of S.L.V.?", a: "Political science lecturer at the University of Chicago", x: ["Airline pilot", "Petroleum geologist", "Hollywood film director"] },
    ],
  },
  us_montelena_chard: {
    producer: "Chateau Montelena",
    fact: "At the 1976 “Judgment of Paris” its 1973 beat top white Burgundies to win the white wine category. The story was even made into a film.",
    quiz: [
      { q: "Which winemaker made the 1973 Chateau Montelena Chardonnay that won the Judgment of Paris?", a: "Mike Grgich", x: ["Warren Winiarski", "Robert Mondavi", "André Tchelistcheff"] },
      { q: "Which 2008 film tells the story of Chateau Montelena Chardonnay’s win at the Judgment of Paris?", a: "Bottle Shock", x: ["Sideways", "A Good Year", "Mondovino"] },
    ],
  },
  us_montelena_cab: {
    producer: "Chateau Montelena",
    fact: "A Cabernet made at a stone château at the foot of Mount Saint Helena, north of Calistoga. Since 1972 the Barrett family has revived and run the old winery.",
    quiz: [
      { q: "What was the main business of Alfred Tubbs, who founded Chateau Montelena in 1882?", a: "Rope manufacturing", x: ["Railroads", "Gold mining", "Banking"] },
    ],
  },
  us_tokalon: {
    producer: "Robert Mondavi Winery",
    fact: "A top Cabernet from To Kalon, the legendary Oakville vineyard right behind the Robert Mondavi Winery. It is one of Napa’s most famous vineyards.",
    quiz: [
      { q: "What does the vineyard name “To Kalon” mean?", a: "“The most beautiful” in Greek", x: ["“God’s hill” in Latin", "“Hot land” in Spanish", "“Clear water” in a Native language"] },
      { q: "Which pioneer first planted To Kalon and named it in the 19th century?", a: "Hamilton Crabb", x: ["George Yount", "Gustave Niebaum", "Charles Krug"] },
    ],
  },
  us_woodbridge: {
    producer: "Robert Mondavi Winery",
    fact: "An everyday wine brand Robert Mondavi founded near Lodi in 1979. It aimed to make California wine anyone could enjoy easily.",
    quiz: [
      { q: "Where does the “Woodbridge” in Woodbridge by Robert Mondavi come from?", a: "A place near Lodi, where the winery is", x: ["The founder’s mother’s maiden name", "The name of a cooperage", "The Mondavi family’s Italian hometown"] },
    ],
  },
  us_insignia: {
    producer: "Joseph Phelps Vineyards",
    fact: "First released in 1974 by Joseph Phelps, who had run a construction company. It is considered California’s first proprietary-named Bordeaux-style blend.",
    quiz: [
      { q: "Which company acquired Joseph Phelps, maker of Insignia, in 2022?", a: "LVMH", x: ["E. & J. Gallo", "Constellation Brands", "Treasury Wine Estates"] },
    ],
  },
  us_heitz_martha: {
    producer: "Heitz Cellar",
    fact: "A pioneer of Napa single-vineyard Cabernet, naming the vineyard on its label from the 1966 vintage. It is famous for a distinctive mint and eucalyptus aroma.",
    quiz: [
      { q: "Who is the “Martha” of Heitz Martha’s Vineyard?", a: "Martha May, wife of vineyard owner Tom May", x: ["Joe Heitz’s daughter", "An island in Massachusetts", "The first winemaker’s mother"] },
    ],
  },
  us_shafer_hillside: {
    producer: "Shafer Vineyards",
    fact: "The top Cabernet of the winery founded in 1972 on the Stags Leap District hillsides by John Shafer, a former Chicago publishing executive. His son Doug Shafer grew its fame.",
    quiz: [
      { q: "Which Korean business group bought Shafer Vineyards, maker of Hillside Select, in 2022?", a: "Shinsegae", x: ["Lotte", "CJ", "SK"] },
    ],
  },
  us_diamond_creek: {
    producer: "Diamond Creek Vineyards",
    fact: "A winery Al Brounstein founded on Diamond Mountain in the late 1960s. It insisted on bottling its Cabernet separately by vineyard only.",
    quiz: [
      { q: "What are Diamond Creek’s vineyard names “Volcanic Hill”, “Red Rock Terrace” and “Gravelly Meadow” based on?", a: "Their different soils", x: ["The month of harvest", "The year the vines were planted", "The winemakers’ names"] },
    ],
  },
  us_dallavalle_maya: {
    producer: "Dalla Valle Vineyards",
    fact: "Founded on the hills east of Oakville by Italian-born Gustav Dalla Valle and his Japanese-born wife Naoko. A cult wine with a high share of Cabernet Franc.",
    quiz: [
      { q: "Who is Dalla Valle “Maya” named after?", a: "The founders’ daughter", x: ["The founder’s mother", "The ancient Maya civilisation", "The first winemaker’s wife"] },
    ],
  },
  us_bond: {
    producer: "Bill Harlan (BOND)",
    fact: "A project by Bill Harlan of Harlan Estate that selects Napa’s “grand cru”-level vineyards and bottles each separately. Melbury is one of its first vineyards.",
    quiz: [
      { q: "What approach does BOND follow?", a: "Bottling each of Napa’s top vineyards separately", x: ["Blending grapes from several countries", "Changing the grape variety every year", "Ageing wine under the sea"] },
    ],
  },
  us_scarecrow: {
    producer: "Scarecrow Wine",
    fact: "From the J.J. Cohn vineyard in Rutherford, home to old Cabernet vines planted in the 1940s. His grandson released the first vintage in 2003.",
    quiz: [
      { q: "From which film does the name Scarecrow come?", a: "The Wizard of Oz", x: ["Gone with the Wind", "Casablanca", "The Sound of Music"] },
    ],
  },
  us_colgin_cariad: {
    producer: "Colgin Cellars",
    fact: "A Bordeaux-style blend from the Napa cult winery led by Ann Colgin. In 2017 LVMH bought a majority stake in Colgin Cellars.",
    quiz: [
      { q: "What does Colgin “Cariad” mean in Welsh?", a: "Love", x: ["Star", "Hill", "Dragon"] },
    ],
  },
  us_sine_qua_non: {
    producer: "Sine Qua Non",
    fact: "A Rhône-style cult wine started in 1994 by Austrian-born Manfred Krankl. The name is Latin for “something indispensable”.",
    quiz: [
      { q: "What is the most unusual thing about Sine Qua Non?", a: "The wine’s name and label art change every vintage", x: ["It uses only glass stoppers", "It is made in a different country each year", "It is sold only at auction"] },
    ],
  },
  us_kistler: {
    producer: "Kistler Vineyards",
    fact: "A great Chardonnay house founded in Sonoma in 1978. It is known for delicate yet powerful Chardonnay fermented with native yeasts, Burgundy-style.",
    quiz: [
      { q: "Who founded Kistler Vineyards?", a: "Steve Kistler", x: ["Jim Clendenen", "Josh Jensen", "David Lett"] },
    ],
  },
  us_farniente: {
    producer: "Far Niente",
    fact: "A stone winery in Oakville, founded in 1885 and abandoned during Prohibition, revived by Gil Nickel in 1979. It focuses on just Chardonnay and Cabernet.",
    quiz: [
      { q: "What does the name Far Niente mean?", a: "“Without a care” in Italian", x: ["“A distant land” in Latin", "“Little farm” in Spanish", "“First harvest” in French"] },
    ],
  },
  us_beringer_pr: {
    producer: "Beringer",
    fact: "The top Cabernet of Beringer, founded in St. Helena in 1876 by the Beringer brothers from Mainz, Germany, and Napa’s longest continuously operating winery.",
    quiz: [
      { q: "Why was Beringer able to stay open during Prohibition?", a: "It was licensed to make sacramental wine", x: ["It served as a government agricultural lab", "It smuggled wine into Canada", "It supplied vinegar to the army"] },
    ],
  },
  us_beringer_wz: {
    producer: "Beringer",
    fact: "A sweet, light pink wine made from red Zinfandel grapes. It sold explosively in 1980s America and became the byword for popular wine.",
    quiz: [
      { q: "How does Beringer White Zinfandel get its pink colour?", a: "Red Zinfandel skins are steeped only very briefly", x: ["Strawberry juice is added", "It is made from pink-skinned grapes", "Rosé Champagne is blended in"] },
    ],
  },
  us_sutterhome_wz: {
    producer: "Sutter Home",
    fact: "The original White Zinfandel, popularised by the Trinchero family’s Sutter Home. It became America’s most popular wine in the 1980s.",
    quiz: [
      { q: "How did Sutter Home White Zinfandel come to have its sweet taste?", a: "A stuck fermentation in 1975", x: ["An experiment copying icewine", "An experiment blending in French rosé", "A joint venture with a juice company"] },
    ],
  },
  us_duckhorn_merlot: {
    producer: "Duckhorn Vineyards",
    fact: "Founded in 1976 by Dan and Margaret Duckhorn, it raised Napa Merlot to luxury status. Every label features a waterfowl.",
    quiz: [
      { q: "Which Duckhorn Merlot was Wine Spectator’s Wine of the Year in 2017?", a: "Three Palms Vineyard Merlot", x: ["Decoy Merlot", "Goldeneye Merlot", "Paraduxx Merlot"] },
    ],
  },
  us_cakebread: {
    producer: "Cakebread Cellars",
    fact: "A family winery founded in Rutherford in 1973 by Jack and Dolores Cakebread. A regular Chardonnay on Napa restaurant wine lists.",
    quiz: [
      { q: "Who taught photography to Jack Cakebread, founder of Cakebread Cellars?", a: "Ansel Adams", x: ["Annie Leibovitz", "Robert Capa", "Richard Avedon"] },
    ],
  },
  us_rombauer: {
    producer: "Rombauer Vineyards",
    fact: "The byword for creamy California Chardonnay, brimming with butter and vanilla. A family winery founded in 1980 by Koerner and Joan Rombauer.",
    quiz: [
      { q: "Which famous American cookbook was written by Irma Rombauer, a relative of the Rombauer family?", a: "The Joy of Cooking", x: ["Mastering the Art of French Cooking", "Kitchen Confidential", "Salt Fat Acid Heat"] },
    ],
  },
  us_bv_latour: {
    producer: "Beaulieu Vineyard (BV)",
    fact: "The top Cabernet of BV, founded in Rutherford in 1900 by Frenchman Georges de Latour. Made since the 1936 vintage, it is seen as the original fine Napa Cabernet.",
    quiz: [
      { q: "What does “Beaulieu” in Beaulieu Vineyard mean in French?", a: "Beautiful place", x: ["High hill", "Old spring", "Golden field"] },
      { q: "Which legendary Russian-born winemaker made Georges de Latour Private Reserve a classic?", a: "André Tchelistcheff", x: ["Warren Winiarski", "Mike Grgich", "Paul Draper"] },
    ],
  },
  us_rubicon: {
    producer: "Inglenook (Coppola)",
    fact: "The top red of Inglenook, founded in 1879 by Finnish sea captain Gustave Niebaum. The Coppola family, who bought the old estate, has made it since the 1978 vintage.",
    quiz: [
      { q: "Which film director created Inglenook Rubicon?", a: "Francis Ford Coppola", x: ["Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"] },
    ],
  },
  us_ridge_montebello: {
    producer: "Ridge Vineyards",
    fact: "A Cabernet blend from limestone vineyards high on a ridge in the Santa Cruz Mountains. Paul Draper made it in the traditional way for decades.",
    quiz: [
      { q: "Where did Ridge Monte Bello 1971 finish in the red category of the 2006 “Judgment of Paris” 30th-anniversary rematch?", a: "1st", x: ["2nd", "5th", "10th"] },
    ],
  },
  us_ridge_geyserville: {
    producer: "Ridge Vineyards",
    fact: "A Zinfandel blend from a Sonoma vineyard that includes vines over 100 years old. Ridge’s flagship Zinfandel, made since 1966.",
    quiz: [
      { q: "Where does the name of Geyserville, home of the Ridge Geyserville vineyard, come from?", a: "The nearby geysers (geothermal field)", x: ["A Gold Rush miner’s name", "A Spanish missionary’s name", "An old railway station name"] },
    ],
  },
  us_frank_family: {
    producer: "Frank Family Vineyards",
    fact: "A family winery housed in an old stone winery building in Calistoga. It won popularity with a smooth Cabernet loved by Napa restaurants.",
    quiz: [
      { q: "What was the former job of Rich Frank, founder of Frank Family Vineyards?", a: "President of Walt Disney Studios", x: ["Pro baseball player", "Petroleum geologist", "Airline pilot"] },
    ],
  },
  us_jordan: {
    producer: "Jordan Vineyard & Winery",
    fact: "A great Sonoma estate making elegant, Bordeaux-like Cabernet in a building modelled on a French country château. The 1976 was its first vintage.",
    quiz: [
      { q: "What was the main profession of Tom Jordan, who founded Jordan Winery in 1972?", a: "Petroleum geologist", x: ["Hollywood film producer", "Pro golfer", "Airline pilot"] },
    ],
  },
  us_spottswoode: {
    producer: "Spottswoode",
    fact: "A family winery at the western edge of St. Helena. It was early to farm organically in Napa, and the daughters now run it.",
    quiz: [
      { q: "Who bought the Spottswoode estate in 1972 and built the winery?", a: "Mary Novak", x: ["Margaret Duckhorn", "Ann Colgin", "Jean Phillips"] },
    ],
  },
  us_quintessa: {
    producer: "Huneeus family",
    fact: "A Bordeaux-style blend made biodynamically on an estate east of Rutherford that takes in hills and valleys. The 1994 was the first vintage.",
    quiz: [
      { q: "What is the home country of Agustín and Valeria Huneeus, founders of Quintessa?", a: "Chile", x: ["Argentina", "Spain", "Italy"] },
    ],
  },
  us_pahlmeyer: {
    producer: "Pahlmeyer",
    fact: "A Napa cult winery founded in the 1980s by lawyer Jayson Pahlmeyer. In the 1990s, star winemaker Helen Turley made the wine.",
    quiz: [
      { q: "Which largest US wine company acquired Pahlmeyer in 2019?", a: "E. & J. Gallo", x: ["Constellation Brands", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us_schramsberg: {
    producer: "Schramsberg Vineyards",
    fact: "An old Calistoga winery founded in 1862 and revived by the Davies couple in 1965. It is made by second fermentation in bottle in caves dug into the hillside.",
    quiz: [
      { q: "At what historic 1972 occasion was Schramsberg Blanc de Blancs used for a toast?", a: "Nixon and Zhou Enlai’s dinner in Beijing", x: ["The Apollo 11 homecoming party", "The fall of the Berlin Wall ceremony", "President Kennedy’s inauguration"] },
    ],
  },
  us_chandon: {
    producer: "Domaine Chandon",
    fact: "Opened in Yountville, Napa Valley, in 1973, Domaine Chandon was the first California sparkling winery founded by a French Champagne house.",
    quiz: [
      { q: "Which Champagne house founded Domaine Chandon, maker of Chandon Brut, in California?", a: "Moët & Chandon", x: ["Veuve Clicquot", "Taittinger", "Louis Roederer"] },
    ],
  },
  us_roederer_estate: {
    producer: "Roederer Estate",
    fact: "Founded in 1982 by Champagne house Louis Roederer in the Anderson Valley, Mendocino County. Cool fog helps it make crisp sparkling wine.",
    quiz: [
      { q: "What is the most famous Champagne of Louis Roederer, founder of Roederer Estate?", a: "Cristal", x: ["Dom Pérignon", "La Grande Dame", "Belle Époque"] },
    ],
  },
  us_kosta_browne: {
    producer: "Kosta Browne",
    fact: "A Sonoma Pinot Noir star, named Wine Spectator’s Wine of the Year in 2011. It released its first vintage in 1997.",
    quiz: [
      { q: "What money did Kosta Browne’s two founders use to make their first wine?", a: "Tips saved while working in a restaurant", x: ["Lottery winnings", "Silicon Valley stock options", "Oil business profits"] },
    ],
  },
  us_williams_selyem: {
    producer: "Williams Selyem",
    fact: "Founded by two friends who started making wine in a garage as a weekend hobby in the late 1970s. The pioneer that raised Russian River Valley Pinot Noir to cult status.",
    quiz: [
      { q: "Where does the name Williams Selyem come from?", a: "The surnames of founders Burt Williams and Ed Selyem", x: ["Two vineyard names", "The names of a founding couple", "A town and a river"] },
    ],
  },
  us_sea_smoke: {
    producer: "Sea Smoke",
    fact: "Pinot Noir farmed biodynamically on south-facing slopes in the Sta. Rita Hills. Sold only through a mailing list, it is famously hard to get.",
    quiz: [
      { q: "Where does the name Sea Smoke come from?", a: "Fog rolling in from the sea along the Santa Ynez River", x: ["Smoke from a nearby volcano", "Smoke taint from a wildfire", "The founder’s yacht"] },
    ],
  },
  us_au_bon_climat: {
    producer: "Au Bon Climat",
    fact: "A great Santa Barbara house founded in 1982. It stuck to fresh, Burgundy-like wines against the California fashion for overly rich styles.",
    quiz: [
      { q: "Which larger-than-life winemaker founded Au Bon Climat?", a: "Jim Clendenen", x: ["Paul Draper", "Manfred Krankl", "Josh Jensen"] },
      { q: "What does “Au Bon Climat” mean in French?", a: "A good, sunny site", x: ["Castle on a little hill", "Gift of the sea", "First harvest"] },
    ],
  },
  us_calera: {
    producer: "Calera",
    fact: "A great Pinot Noir house founded high in the Gavilan Mountains by Josh Jensen, who learned his craft in Burgundy and searched long for limestone soil.",
    quiz: [
      { q: "What does the name “Calera” mean in Spanish?", a: "Lime kiln", x: ["Stone bridge", "Little spring", "Red earth"] },
    ],
  },
  us_meiomi: {
    producer: "Meiomi",
    fact: "It blends grapes from coastal Monterey, Santa Barbara and Sonoma into a smooth, fruity Pinot Noir. It was sold to Constellation Brands in 2015.",
    quiz: [
      { q: "Which famous Napa winery is run by the family of Joe Wagner, creator of Meiomi?", a: "Caymus", x: ["Silver Oak", "Beringer", "Duckhorn"] },
      { q: "What does the name “Meiomi” mean in a Native language?", a: "Coast", x: ["Sun", "Grape", "Eagle"] },
    ],
  },
  us_la_crema: {
    producer: "La Crema",
    fact: "A brand that made its name with Pinot Noir and Chardonnay from the cool Sonoma Coast. Loved as an affordable California Pinot Noir.",
    quiz: [
      { q: "Which Kendall-Jackson founder acquired and grew La Crema?", a: "Jess Jackson", x: ["Ernest Gallo", "Robert Mondavi", "Chuck Wagner"] },
    ],
  },
  us_apothic: {
    producer: "E. & J. Gallo",
    fact: "A sweet, rich red blend of Zinfandel, Syrah, Cabernet and Merlot. Launched in the late 2000s, it led America’s red blend boom.",
    quiz: [
      { q: "Where does the name Apothic come from?", a: "The “apotheca”, where wine was blended and stored in medieval Europe", x: ["A Greek goddess of wine", "A church in the founder’s hometown", "Latin for “dark night”"] },
    ],
  },
  us_prisoner: {
    producer: "The Prisoner Wine Company",
    fact: "A Zinfandel-led Napa red blend first released in 2000. Its rich, smooth taste started the American red blend trend.",
    quiz: [
      { q: "Which Spanish artist made the etching used on The Prisoner’s label?", a: "Francisco Goya", x: ["Pablo Picasso", "Diego Velázquez", "Salvador Dalí"] },
      { q: "Which winemaker first created The Prisoner?", a: "Dave Phinney", x: ["Chuck Wagner", "Manfred Krankl", "Heidi Barrett"] },
    ],
  },
  us_papillon: {
    producer: "Orin Swift",
    fact: "A Bordeaux-style Napa blend from Orin Swift, founded by Dave Phinney, creator of The Prisoner. It is famous for labels with striking photos and art.",
    quiz: [
      { q: "Where does the name Orin Swift come from?", a: "The founder’s father’s middle name and his mother’s maiden name", x: ["Two vineyard names", "The founder’s dog’s name", "A hero from a novel"] },
      { q: "Which company acquired Orin Swift in 2016?", a: "E. & J. Gallo", x: ["LVMH", "Constellation Brands", "Treasury Wine Estates"] },
    ],
  },
  us_josh: {
    producer: "Josh Cellars",
    fact: "A California everyday wine brand launched by Joseph Carr in the late 2000s. It is counted among the fastest-growing wine brands in the US.",
    quiz: [
      { q: "Who is the “Josh” of Josh Cellars?", a: "Founder Joseph Carr’s father", x: ["The founder’s son", "The first winemaker", "The founder’s dog"] },
    ],
  },
  us_bogle: {
    producer: "Bogle Vineyards",
    fact: "Wine from the Bogle family, who have farmed for generations in Clarksburg in the Sacramento River Delta. A dark, inky Petite Sirah is their flagship.",
    quiz: [
      { q: "What had the Bogle family done for generations before planting their first vineyard in 1968?", a: "Farming", x: ["Oil business", "Film production", "Railroad building"] },
    ],
  },
  us_gallo: {
    producer: "E. & J. Gallo",
    fact: "The flagship brand of E. & J. Gallo, the world’s largest family-owned wine company. Brands like Barefoot, Apothic and Orin Swift also belong to it.",
    quiz: [
      { q: "Which brothers founded E. & J. Gallo, maker of Gallo Family Vineyards, in 1933?", a: "Ernest and Julio Gallo", x: ["Robert and Peter Mondavi", "Jacob and Frederick Beringer", "Dan and Margaret Duckhorn"] },
      { q: "What ended in America in 1933, the year the Gallo brothers opened their winery?", a: "Prohibition", x: ["The Civil War", "The Great Depression", "World War II"] },
    ],
  },
  us_grgich: {
    producer: "Grgich Hills Estate",
    fact: "Founded on July 4, 1977 by Croatian-born Mike Grgich, who made the Chardonnay that won the Judgment of Paris. The beret he always wore was his trademark.",
    quiz: [
      { q: "What business did the family of Austin Hills, who co-founded Grgich Hills with Mike Grgich, run?", a: "Hills Bros. Coffee", x: ["Hilton Hotels", "Hershey chocolate", "Coca-Cola bottling"] },
    ],
  },
  us_kenzo: {
    producer: "Kenzo Estate",
    fact: "A Japanese-owned winery on a large mountainside property in southeastern Napa Valley. Heidi Barrett, who made Screaming Eagle, is its winemaker.",
    quiz: [
      { q: "Which video game company did Kenzo Tsujimoto, founder of Kenzo Estate, found?", a: "Capcom", x: ["Nintendo", "Sega", "Konami"] },
    ],
  },
  us_hess: {
    producer: "The Hess Collection",
    fact: "A winery founded on the steep slopes of Mount Veeder by Swiss businessman Donald Hess. It makes firm Cabernet in mountains cooler than the valley floor.",
    quiz: [
      { q: "What is The Hess Collection winery famous for housing?", a: "A gallery of contemporary art collected by the founder", x: ["A steam locomotive museum", "An underground aquarium", "An observatory"] },
    ],
  },
  us_ddo: {
    producer: "Domaine Drouhin Oregon",
    fact: "A winery founded in Oregon’s Dundee Hills in 1987 by Burgundy’s Drouhin family. It became a symbol of a great Burgundy house recognising Oregon Pinot Noir’s promise.",
    quiz: [
      { q: "Which Burgundy company founded Domaine Drouhin Oregon?", a: "Maison Joseph Drouhin", x: ["Louis Jadot", "Louis Latour", "Domaine de la Romanée-Conti"] },
      { q: "Which Drouhin daughter has long made the wine at Domaine Drouhin Oregon?", a: "Véronique Drouhin", x: ["Anne-Claude Leflaive", "Lalou Bize-Leroy", "Marie-Thérèse Charlin"] },
    ],
  },
  us_eyrie: {
    producer: "The Eyrie Vineyards",
    fact: "It began in 1965 with the first Pinot Noir planted in the Willamette Valley. Its 1975 competed against Burgundy at a 1979 Paris tasting and put Oregon on the map.",
    quiz: [
      { q: "Who founded The Eyrie Vineyards and was called “Papa Pinot”?", a: "David Lett", x: ["Robert Drouhin", "Ken Evenstad", "Paul Gerrie"] },
      { q: "What does “Eyrie” mean in English?", a: "A bird of prey’s high nest", x: ["A misty valley", "An old watermill", "A cabin in the woods"] },
    ],
  },
  us_beaux_freres: {
    producer: "Beaux Frères",
    fact: "The name is French for “brothers-in-law”. A Pinot Noir winery Michael Etzel founded with his brother-in-law on Ribbon Ridge in the Willamette Valley.",
    quiz: [
      { q: "Which famous wine critic co-founded Beaux Frères with his brother-in-law Michael Etzel?", a: "Robert Parker", x: ["Jancis Robinson", "Hugh Johnson", "James Suckling"] },
    ],
  },
  us_domaine_serene: {
    producer: "Domaine Serene",
    fact: "A winery founded in the Dundee Hills by Ken and Grace Evenstad, who raised it to the top tier of Oregon Pinot Noir. Their flagship bears the couple’s surname.",
    quiz: [
      { q: "Whose name does the “Serene” in Domaine Serene come from?", a: "Serena, the founders’ daughter", x: ["The founder’s mother", "The Greek goddess of the moon", "An old Oregon place name"] },
    ],
  },
  us_cristom: {
    producer: "Cristom",
    fact: "A winery founded in the Eola-Amity Hills by Paul Gerrie in 1992. Each vineyard is named after a woman of the family, such as Jessie, Louise and Marjorie.",
    quiz: [
      { q: "How was the name Cristom made?", a: "From the founder’s children, Christine and Tom", x: ["From a Christian monastery", "From a crystal-clear spring", "From the first winemaker’s name"] },
    ],
  },
  us_csm_riesling: {
    producer: "Chateau Ste. Michelle",
    fact: "A pioneer of Washington wine and one of the world’s largest Riesling producers. Its home is a château building in Woodinville near Seattle.",
    quiz: [
      { q: "Which Riesling has Chateau Ste. Michelle made with Germany’s Dr. Loosen since 1999?", a: "Eroica", x: ["Insignia", "Rubicon", "Opus One"] },
    ],
  },
  us_eroica: {
    producer: "Chateau Ste. Michelle & Ernst Loosen",
    fact: "A Riesling made since 1999 by Washington’s Chateau Ste. Michelle and the Mosel’s Ernst Loosen. It joins German finesse with Washington’s generous fruit.",
    quiz: [
      { q: "Where does the name Eroica come from?", a: "Beethoven’s Symphony No. 3", x: ["A Mozart opera", "A Wagner music drama", "A Chopin polonaise"] },
    ],
  },
  us_quilceda: {
    producer: "Quilceda Creek",
    fact: "Washington’s top Cabernet producer, founded by Alex Golitzin in 1978. Several 100-point scores from Robert Parker proved the quality of Washington wine.",
    quiz: [
      { q: "Which legendary winemaker, his uncle, encouraged Alex Golitzin to found Quilceda Creek?", a: "André Tchelistcheff", x: ["Robert Mondavi", "Warren Winiarski", "Paul Draper"] },
    ],
  },
  us_leonetti: {
    producer: "Leonetti Cellar",
    fact: "Founded in 1977 by Gary Figgins, who built it into a Washington cult wine sold only by mailing list. His son Chris Figgins carries it on.",
    quiz: [
      { q: "What is Leonetti Cellar’s place in Walla Walla wine history?", a: "Walla Walla’s first commercial winery", x: ["Washington’s first sparkling house", "America’s first certified-organic winery", "The first winery founded with French capital"] },
    ],
  },
  us_col_solare: {
    producer: "Chateau Ste. Michelle & Antinori",
    fact: "A Bordeaux-style blend made from the 1995 vintage by Washington’s Chateau Ste. Michelle and Italy’s Antinori family. It uses grapes from the hot slopes of Red Mountain.",
    quiz: [
      { q: "What does “Col Solare” mean in Italian?", a: "Shining hill", x: ["Red mountain", "River of the sun", "Golden valley"] },
    ],
  },
  us_cayuse: {
    producer: "Cayuse Vineyards",
    fact: "A cult winery with vineyards on the Oregon side of the Walla Walla Valley, covered in fist-sized round stones. Farmed biodynamically, it sells only by mail order.",
    quiz: [
      { q: "Which Champagne-born winemaker founded Cayuse?", a: "Christophe Baron", x: ["Christian Moueix", "Manfred Krankl", "Robert Drouhin"] },
      { q: "What does “Cailloux”, the name of a Cayuse vineyard, mean in French?", a: "Pebbles (stones)", x: ["Hill", "Spring", "Forest"] },
    ],
  },
  us_drfrank: {
    producer: "Dr. Konstantin Frank",
    fact: "A winery founded in 1962 on the shore of Keuka Lake in the Finger Lakes by Ukrainian-born botanist Dr. Konstantin Frank. The pioneer of New York Riesling.",
    quiz: [
      { q: "What did Dr. Konstantin Frank prove in the Finger Lakes?", a: "European (vinifera) grapes can grow even in cold New York", x: ["Only native American grapes survive the cold", "Riesling ripens only in greenhouses", "Champagne can be made from cider"] },
    ],
  },
};

export default T;
