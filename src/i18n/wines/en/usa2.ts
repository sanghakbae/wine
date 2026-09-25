import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  us2_slwc_artemis: {
    producer: "Stag's Leap Wine Cellars",
    fact: "A Napa Valley Cabernet Stag’s Leap Wine Cellars blends from several vineyards. It is named after the Greek goddess of the hunt.",
    quiz: [
      { q: "From which legend does “Stags Leap”, in the name of the winery behind Artemis, come?", a: "A stag fleeing hunters leapt across a rocky cliff", x: ["A herd of deer crossed the river", "A Native chief turned into a stag", "Giant antlers were found in a gold mine"] },
    ],
  },
  us2_slwc_fay: {
    producer: "Stag's Leap Wine Cellars",
    fact: "Cabernet from the vineyard right next to S.L.V. Founder Warren Winiarski bought the neighbouring land after tasting a wine made by this vineyard’s owner.",
    quiz: [
      { q: "What did Nathan Fay, namesake of Fay Vineyard, do first in the Stags Leap District in 1961?", a: "He was the first to plant Cabernet Sauvignon", x: ["He held the first wine auction", "He dug the first cave cellar", "He made the first sparkling wine"] },
    ],
  },
  us2_stagsleap_winery_ps: {
    producer: "Stags' Leap Winery",
    fact: "An old Stags Leap District estate that released its first vintage in 1893, with its stone “Manor House” still standing. It has long been known for Petite Sirah.",
    quiz: [
      { q: "After their lawsuit, how were Stags' Leap Winery and Stag's Leap Wine Cellars told apart?", a: "By placing the apostrophe differently", x: ["One added “Napa” to the front", "One switched to a French name", "One dropped the word “winery”"] },
    ],
  },
  us2_chimney_rock: {
    producer: "Chimney Rock",
    fact: "A Stags Leap District winery that ploughed up half an old golf course to plant vines. Its buildings reflect the taste of founder Hack Wilson, who did business in South Africa for many years.",
    quiz: [
      { q: "In what architectural style is Chimney Rock’s white winery building?", a: "South African Cape Dutch style", x: ["Spanish Mission style", "Tuscan villa style", "English Tudor style"] },
    ],
  },
  us2_clos_du_val: {
    producer: "Clos Du Val",
    fact: "Founded in the Stags Leap District in the early 1970s by Frenchman Bernard Portet with American businessman John Goelet. Its 1972 was entered in the “Judgment of Paris”.",
    quiz: [
      { q: "At which Bordeaux château was the father of Bernard Portet, founder of Clos Du Val, technical director?", a: "Château Lafite Rothschild", x: ["Château Margaux", "Château Latour", "Château Haut-Brion"] },
      { q: "How did the 1972 Clos Du Val Cabernet finish in the 1986 “Judgment of Paris” 10th-anniversary rematch?", a: "1st", x: ["2nd", "5th", "Last"] },
    ],
  },
  us2_cliff_lede: {
    producer: "Cliff Lede Vineyards",
    fact: "A winery founded in 2002 when Canadian construction entrepreneur Cliff Lede bought vineyards in the Stags Leap District.",
    quiz: [
      { q: "What names does Cliff Lede give to each vineyard block?", a: "Titles of classic rock songs and albums", x: ["Names of Greek gods", "Names of family members", "Names of constellations"] },
    ],
  },
  us2_silverado: {
    producer: "Silverado Vineyards",
    fact: "A winery that bought vineyards on the Stags Leap District hills by the Silverado Trail in the 1970s and began making wine in 1981.",
    quiz: [
      { q: "Which family founded Silverado Vineyards?", a: "Walt Disney’s family", x: ["The Coppola family", "The Getty family", "The Kennedy family"] },
    ],
  },
  us2_shafer_rsr: {
    producer: "Shafer Vineyards",
    fact: "A Chardonnay Shafer Vineyards of the Stags Leap District makes from cool Carneros vineyards. It is known for being rich yet fresh.",
    quiz: [
      { q: "Where does the name Red Shoulder Ranch come from?", a: "The red-shouldered hawks living in the vineyard", x: ["A hill of exposed red earth", "The founder’s beloved red horse", "An old rancher’s nickname"] },
    ],
  },
  us2_farniente_cab: {
    producer: "Far Niente",
    fact: "The flagship red of Far Niente, which revived an Oakville stone winery abandoned during Prohibition. It is made from Oakville estate grapes.",
    quiz: [
      { q: "Which famous American painter was the nephew of John Benson, the Gold Rush pioneer who founded Far Niente in 1885?", a: "Winslow Homer", x: ["Edward Hopper", "Norman Rockwell", "Andrew Wyeth"] },
    ],
  },
  us2_nickel_nickel: {
    producer: "Nickel & Nickel",
    fact: "A winery founded in Oakville in 1997 by Gil Nickel’s family. Sullenger Vineyard is the Cabernet vineyard right behind the winery, a restored 19th-century farmstead.",
    quiz: [
      { q: "What rule does Nickel & Nickel follow for all its wines?", a: "Each is made from one variety from one vineyard", x: ["Grapes from several regions are blended", "No oak is used at all", "Only screw caps are used"] },
      { q: "Which Oakville sister winery is run by the same family as Nickel & Nickel?", a: "Far Niente", x: ["Silver Oak", "Caymus", "Duckhorn"] },
    ],
  },
  us2_plumpjack: {
    producer: "PlumpJack",
    fact: "A winery founded in Oakville in 1995. It bottled half its 1997 Reserve Cabernet under screw cap, igniting the fine-wine closure debate.",
    quiz: [
      { q: "Which co-founder of PlumpJack later became Governor of California?", a: "Gavin Newsom", x: ["Arnold Schwarzenegger", "Jerry Brown", "Gray Davis"] },
      { q: "PlumpJack is the nickname of which Shakespeare character?", a: "Falstaff", x: ["Hamlet", "Shylock", "King Lear"] },
    ],
  },
  us2_overture: {
    producer: "Opus One",
    fact: "Opus One’s second wine, made since 1993. For many years it was blended from several vintages and released without a vintage date.",
    quiz: [
      { q: "Which two men founded the winery whose second wine is Overture?", a: "Robert Mondavi and Baron Philippe de Rothschild", x: ["Robert Mondavi and Christian Moueix", "Bill Harlan and Eric de Rothschild", "Jack Cakebread and André Tchelistcheff"] },
    ],
  },
  us2_harlan_maiden: {
    producer: "Harlan Estate",
    fact: "A second wine from the same hillside vineyard west of Oakville. It is offered first to mailing-list customers.",
    quiz: [
      { q: "The Maiden is the second wine of which wine?", a: "Harlan Estate", x: ["Dominus", "Opus One", "Screaming Eagle"] },
    ],
  },
  us2_promontory: {
    producer: "Harlan family",
    fact: "A Cabernet the Harlan family makes from remote mountain land west of Oakville. Its rugged terrain is ringed by forest and rock.",
    quiz: [
      { q: "Which flagship cult wine did the family behind Promontory found earlier?", a: "Harlan Estate", x: ["Screaming Eagle", "Colgin", "Dominus"] },
    ],
  },
  us2_groth_reserve: {
    producer: "Groth Vineyards",
    fact: "The top Cabernet of the winery founded in 1981 when Dennis Groth, an executive at games company Atari, and his wife bought vineyards in Oakville.",
    quiz: [
      { q: "What record did the 1985 Groth Reserve Cabernet set?", a: "The first California wine to score 100 Parker points", x: ["The first wine taken into space", "The most expensive American wine at auction", "The first fine wine with a screw cap"] },
    ],
  },
  us2_napanook: {
    producer: "Christian Moueix",
    fact: "A second wine named after a historic Yountville vineyard. It is made by the Moueix family, of great Pomerol estates in Bordeaux.",
    quiz: [
      { q: "Napanook is the second wine of which wine?", a: "Dominus", x: ["Opus One", "Harlan Estate", "Insignia"] },
    ],
  },
  us2_frogs_leap_sb: {
    producer: "Frog's Leap",
    fact: "A winery founded in 1981 by John Williams and Larry Turley. It insists on dry farming, with no irrigation, and organic growing.",
    quiz: [
      { q: "Which Napa winery does the name Frog’s Leap playfully imitate?", a: "Stag's Leap Wine Cellars", x: ["Harlan Estate", "Far Niente", "Chateau Montelena"] },
      { q: "What was the place where Frog’s Leap first made wine originally?", a: "A frog farm", x: ["A post office", "A railway station", "A monastery"] },
    ],
  },
  us2_mondavi_fume: {
    producer: "Robert Mondavi Winery",
    fact: "In 1968 Robert Mondavi released his oak-aged dry Sauvignon Blanc under a new name, “Fumé Blanc”.",
    quiz: [
      { q: "Which French wine did Robert Mondavi model the name “Fumé Blanc” on?", a: "Pouilly-Fumé", x: ["Sancerre", "Muscadet", "Chablis"] },
    ],
  },
  us2_mondavi_private: {
    producer: "Robert Mondavi Winery",
    fact: "A California everyday wine brand bearing Robert Mondavi’s name. It makes affordable wines from grapes from several regions.",
    quiz: [
      { q: "Where did Robert Mondavi found Napa’s first large post-Prohibition winery in 1966?", a: "Oakville", x: ["Calistoga", "Yountville", "Carneros"] },
    ],
  },
  us2_trefethen_chard: {
    producer: "Trefethen Family Vineyards",
    fact: "A family winery founded in 1968 by Gene and Katie Trefethen in Oak Knoll, southern Napa. It uses a wooden winery building from the 19th century.",
    quiz: [
      { q: "What was the 1976 Trefethen Chardonnay judged at the 1979 Paris “Wine Olympics”?", a: "The world’s best Chardonnay", x: ["The longest-ageing white", "The best new winery", "The best dessert wine"] },
    ],
  },
  us2_freemark_abbey: {
    producer: "Freemark Abbey",
    fact: "A great St. Helena house descended from the winery female pioneer Josephine Tychson founded in 1886. Both its red and white were in the “Judgment of Paris”.",
    quiz: [
      { q: "How was the name Freemark Abbey formed?", a: "From pieces of the names of the three partners who bought it", x: ["An old abbey building became the winery", "It is named after an abbey in the founder’s hometown", "It is the first vineyard owner’s name"] },
    ],
  },
  us2_charles_krug: {
    producer: "Charles Krug",
    fact: "Napa Valley’s oldest winery, founded in 1861 by Prussian-born Charles Krug. It was revived under new owners after Prohibition.",
    quiz: [
      { q: "Which family bought Charles Krug in 1943 and still runs it?", a: "The Mondavi family", x: ["The Gallo family", "The Beringer family", "The Martini family"] },
      { q: "Who left Charles Krug after a quarrel with his brother Peter and founded his own winery in 1966?", a: "Robert Mondavi", x: ["Louis M. Martini", "Joe Heitz", "Warren Winiarski"] },
    ],
  },
  us2_louis_martini: {
    producer: "Louis M. Martini",
    fact: "Founded in St. Helena in 1933, as Prohibition ended, by Italian-born Louis M. Martini. It is also known for Cabernet from Sonoma’s Monte Rosso vineyard.",
    quiz: [
      { q: "Which largest US wine company acquired Louis M. Martini in 2002?", a: "E. & J. Gallo", x: ["Constellation Brands", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us2_abreu_madrona: {
    producer: "Abreu Vineyards",
    fact: "Wine made under his own name by David Abreu, who has tended the vineyards of many Napa cult wineries. Madrona Ranch is a vineyard on the hills west of St. Helena.",
    quiz: [
      { q: "In what field did David Abreu first make his name in Napa?", a: "Vineyard management and viticulture", x: ["Wine criticism", "Barrel making", "Wine auctioneering"] },
    ],
  },
  us2_sterling: {
    producer: "Sterling Vineyards",
    fact: "Founded in Calistoga in 1964 by Englishman Peter Newton. Its white hilltop building resembles the Greek island of Mykonos, where he had lived.",
    quiz: [
      { q: "How do visitors to Sterling Vineyards get up to the hilltop winery?", a: "An aerial tramway (cable car)", x: ["A steam train", "A hot-air balloon", "A horse-drawn carriage"] },
    ],
  },
  us2_clos_pegase: {
    producer: "Clos Pegase",
    fact: "A Calistoga winery founded by art collectors Jan and Mitsuko Shrem. Its building came from a design competition held with the San Francisco Museum of Modern Art.",
    quiz: [
      { q: "Which postmodern architect designed the Clos Pegase winery?", a: "Michael Graves", x: ["Frank Gehry", "Philip Johnson", "Renzo Piano"] },
    ],
  },
  us2_castello_amorosa: {
    producer: "Castello di Amorosa",
    fact: "A winery inside a 13th-century Tuscan-style castle that Dario Sattui built near Calistoga over many years. It even has a moat, a drawbridge and a torture chamber.",
    quiz: [
      { q: "Which Napa winery did the family of Dario Sattui, builder of Castello di Amorosa, run first?", a: "V. Sattui", x: ["Beringer", "Charles Krug", "Sterling Vineyards"] },
    ],
  },
  us2_schramsberg_jschram: {
    producer: "Schramsberg Vineyards",
    fact: "Schramsberg’s top sparkling wine, long-aged from only its finest base wines. It is named after Jacob Schram, who opened a winery here in 1862.",
    quiz: [
      { q: "Which author visited Schramsberg in 1880 and called its wine “bottled poetry”?", a: "Robert Louis Stevenson", x: ["Mark Twain", "Jack London", "John Steinbeck"] },
    ],
  },
  us2_chappellet: {
    producer: "Chappellet",
    fact: "The first winery on Pritchard Hill, founded on its slopes in 1967 by Donn and Molly Chappellet. It is known for firm mountain-grown Cabernet.",
    quiz: [
      { q: "What shape is the Chappellet winery building?", a: "A pyramid", x: ["A round dome", "A giant barrel", "A medieval fortress"] },
    ],
  },
  us2_darioush: {
    producer: "Darioush",
    fact: "A Napa winery founded by Iranian-born businessman Darioush Khaledi. Its stone-columned building, modelled on an ancient Persian palace, catches the eye.",
    quiz: [
      { q: "Which ancient site is the Darioush winery building modelled on?", a: "Persepolis", x: ["The Parthenon", "Angkor Wat", "The Alhambra"] },
    ],
  },
  us2_cain_five: {
    producer: "Cain Vineyard & Winery",
    fact: "Cain Vineyard’s flagship, blending Bordeaux grapes grown on terraces high on Spring Mountain.",
    quiz: [
      { q: "What does “Five” in Cain Five mean?", a: "It blends five Bordeaux grapes", x: ["Five vineyards", "The founder’s five children", "It is released after five years of ageing"] },
    ],
  },
  us2_spring_mountain: {
    producer: "Spring Mountain Vineyard",
    fact: "A winery on the slopes of Spring Mountain that includes the old mansion “Miravalle”. Its 1973 Chardonnay placed fourth in the white category at the “Judgment of Paris”.",
    quiz: [
      { q: "Which 1980s American TV drama used Spring Mountain Vineyard’s Miravalle mansion as a setting?", a: "Falcon Crest", x: ["Dallas", "Dynasty", "Twin Peaks"] },
    ],
  },
  us2_newton_unfiltered: {
    producer: "Newton Vineyard",
    fact: "A winery founded on Spring Mountain in 1977 by Peter and Su Hua Newton. It made its name with a Chardonnay bottled, as the name says, without filtering.",
    quiz: [
      { q: "Which Calistoga winery had Peter Newton, founder of Newton Vineyard, founded earlier?", a: "Sterling Vineyards", x: ["Chateau Montelena", "Schramsberg", "Clos Pegase"] },
      { q: "What badly damaged the Newton Vineyard winery in 2020?", a: "A wildfire (the Glass Fire)", x: ["An earthquake", "A flood", "Phylloxera"] },
    ],
  },
  us2_pride_merlot: {
    producer: "Pride Mountain Vineyards",
    fact: "A winery the Pride family founded on an old vineyard atop the Mayacamas Mountains. Each label states the share of grapes from each of two counties.",
    quiz: [
      { q: "What runs right through the middle of Pride Mountain’s vineyards and winery?", a: "The Napa–Sonoma county line", x: ["An old railway track", "The San Andreas Fault", "The Pacific Coast Highway"] },
    ],
  },
  us2_mayacamas: {
    producer: "Mayacamas Vineyards",
    fact: "A stone winery built high on Mount Veeder in the late 19th century. Its old-style Cabernet needs long ageing; the 1971 was entered in the “Judgment of Paris”.",
    quiz: [
      { q: "Which couple ran Mayacamas for nearly 45 years from 1968?", a: "Bob and Elinor Travers", x: ["Jack and Dolores Cakebread", "Dan and Margaret Duckhorn", "Gene and Katie Trefethen"] },
    ],
  },
  us2_lokoya: {
    producer: "Jackson Family Wines",
    fact: "Founded in 1995, it makes separate mountain Cabernets from four Napa districts: Mount Veeder, Howell Mountain, Spring Mountain and Diamond Mountain.",
    quiz: [
      { q: "Where does the name Lokoya come from?", a: "A Native tribe that lived on Mount Veeder", x: ["A Spanish missionary’s name", "A type of volcanic rock", "The founder’s daughter’s name"] },
    ],
  },
  us2_cardinale: {
    producer: "Jackson Family Wines",
    fact: "A top Cabernet blend made at an Oakville winery from grapes chosen from mountains and valleys across Napa.",
    quiz: [
      { q: "Who founded Jackson Family Wines, owner of Cardinale?", a: "Jess Jackson", x: ["Robert Mondavi", "Ernest Gallo", "Chuck Wagner"] },
    ],
  },
  us2_dunn_howell: {
    producer: "Dunn Vineyards",
    fact: "A small winery Randy Dunn started on Howell Mountain in the late 1970s. It is known for firm mountain Cabernet that lasts for decades.",
    quiz: [
      { q: "At which Napa winery was Randy Dunn winemaker before starting his own?", a: "Caymus", x: ["Silver Oak", "Beringer", "Robert Mondavi"] },
    ],
  },
  us2_cade: {
    producer: "PlumpJack Group",
    fact: "A winery founded in 2005 on a Howell Mountain ridge. It makes firm Cabernet from volcanic mountain soils over 400 m up.",
    quiz: [
      { q: "Which Oakville winery did the wine group behind CADE found earlier?", a: "PlumpJack", x: ["Far Niente", "Screaming Eagle", "Harlan Estate"] },
    ],
  },
  us2_conundrum: {
    producer: "Wagner Family (Caymus)",
    fact: "A white blend first released in 1989 by Chuck Wagner of Caymus. It blends several grapes, including Chardonnay, Sauvignon Blanc and Muscat.",
    quiz: [
      { q: "What does the name Conundrum mean?", a: "A riddle", x: ["Harmony", "Golden", "Adventure"] },
      { q: "Which Napa winery is run by the family that launched Conundrum?", a: "Caymus", x: ["Silver Oak", "Duckhorn", "Beringer"] },
    ],
  },
  us2_decoy_cab: {
    producer: "Duckhorn Vineyards",
    fact: "A brand Duckhorn Vineyards launched in 1985 for easier drinking. Today it makes smooth Cabernet from Sonoma County grapes.",
    quiz: [
      { q: "What is a “decoy”, as in Decoy?", a: "A wooden duck hunters float on water to lure ducks", x: ["A pond where ducks rest", "A horn announcing the dawn hunt", "A hunter’s cabin"] },
    ],
  },
  us2_mer_soleil: {
    producer: "Wagner Family (Caymus)",
    fact: "A Chardonnay Charlie Wagner of Caymus’s Wagner family makes in Monterey’s Santa Lucia Highlands, a cool, sea-breezy region.",
    quiz: [
      { q: "What does “Mer Soleil” mean in French?", a: "Sea and sun", x: ["Mountain and moon", "Wind and rain", "Golden hill"] },
    ],
  },
  us2_belle_glos: {
    producer: "Belle Glos",
    fact: "A Pinot Noir created by Joe Wagner of Caymus’s Wagner family. The thick red wax wrapped around the neck is its trademark.",
    quiz: [
      { q: "Who is Belle Glos named after?", a: "The founder’s grandmother, Lorna Belle Glos Wagner", x: ["The founder’s daughter", "The first vineyard owner", "A home village in France"] },
      { q: "What does the red wax on the neck of Belle Glos bottles honour?", a: "The red lipstick his grandmother wore every day", x: ["The colour of the winery crest", "The colour of Pinot Noir skins", "The California poppy"] },
    ],
  },
  us2_orin_8years: {
    producer: "Orin Swift",
    fact: "A Zinfandel-led blend made by Dave Phinney of Orin Swift. It is famous for its striking photo label.",
    quiz: [
      { q: "What does the name 8 Years in the Desert refer to?", a: "The eight years he agreed not to make Zinfandel after selling The Prisoner", x: ["Eight years of ageing in a desert cave", "A blend of eight desert vineyards", "The founder’s eight-year desert journey"] },
    ],
  },
  us2_mumm_napa: {
    producer: "Mumm Napa",
    fact: "A sparkling winery founded in Napa Valley by a French Champagne house. Like Champagne, it is made by second fermentation in bottle.",
    quiz: [
      { q: "Which French Champagne house founded Mumm Napa?", a: "G.H. Mumm", x: ["Moët & Chandon", "Taittinger", "Louis Roederer"] },
    ],
  },
  us2_domaine_carneros: {
    producer: "Domaine Carneros",
    fact: "A sparkling winery founded on the Carneros hills in 1987 by a French Champagne house. It is famous for its elegant hilltop château.",
    quiz: [
      { q: "Which Champagne house founded Domaine Carneros?", a: "Taittinger", x: ["Moët & Chandon", "G.H. Mumm", "Louis Roederer"] },
      { q: "Which Champagne château is the Domaine Carneros building modelled on?", a: "Château de la Marquetterie", x: ["Château de Chambord", "Château de Chenonceau", "Château de Versailles"] },
    ],
  },
  us2_goldeneye: {
    producer: "Duckhorn Vineyards",
    fact: "A Pinot Noir winery the Duckhorns founded in the Anderson Valley, Mendocino County, in 1996. Grapes grow in a cool valley where sea fog drifts in and out.",
    quiz: [
      { q: "Where does the name Goldeneye come from?", a: "A species of duck (the common goldeneye)", x: ["A James Bond film", "Golden ripe grapes", "The founders’ nickname"] },
    ],
  },
  us2_verite_lamuse: {
    producer: "Jackson Family Wines",
    fact: "Bordeaux-style wines from Sonoma mountain grapes. There are three: Merlot-led “La Muse”, Cabernet-led “La Joie” and Cabernet Franc-led “Le Désir”.",
    quiz: [
      { q: "Which Bordeaux-born winemaker makes Vérité?", a: "Pierre Seillan", x: ["Michel Rolland", "Christian Moueix", "Bernard Portet"] },
    ],
  },
  us2_kenwood_jacklondon: {
    producer: "Kenwood Vineyards",
    fact: "Made from grapes grown on lava terraces on novelist Jack London’s old ranch. The label bears the wolf’s-head emblem he used as a bookplate.",
    quiz: [
      { q: "Which is a signature work of the author who gave his name to Kenwood Jack London Vineyard?", a: "The Call of the Wild", x: ["The Grapes of Wrath", "Moby-Dick", "Adventures of Huckleberry Finn"] },
    ],
  },
  us2_paul_hobbs_rrv: {
    producer: "Paul Hobbs Winery",
    fact: "A winery founded in Sonoma in 1991 by Paul Hobbs, who built his career at Robert Mondavi and Opus One. He is also famous as a consultant to wineries in many countries.",
    quiz: [
      { q: "Which winery did Paul Hobbs co-found in Mendoza, Argentina?", a: "Viña Cobos", x: ["Catena Zapata", "Clos de los Siete", "Bodega Norton"] },
    ],
  },
  us2_peter_michael_bellecote: {
    producer: "Peter Michael Winery",
    fact: "A winery founded on the slopes of Knights Valley by Sir Peter Michael, a British electronics and broadcasting entrepreneur. Every wine has a French name.",
    quiz: [
      { q: "What does “Belle Côte” mean in French?", a: "Beautiful slope", x: ["Beautiful woman", "Blue coast", "Little castle"] },
    ],
  },
  us2_marcassin: {
    producer: "Marcassin",
    fact: "A small winery on the Sonoma Coast founded by consultant winemaker Helen Turley and her husband John Wetlaufer. A cult Chardonnay sold only by mailing list.",
    quiz: [
      { q: "What does “Marcassin” mean in French?", a: "A young wild boar", x: ["A fawn", "A hare", "A fox cub"] },
    ],
  },
  us2_ridge_lytton: {
    producer: "Ridge Vineyards",
    fact: "Ridge’s Zinfandel blend from Dry Creek Valley vineyards with vines over 100 years old. With Geyserville, one of the two pillars of Ridge Zinfandel.",
    quiz: [
      { q: "What is unusual about Ridge Vineyards labels?", a: "They list every ingredient used in making the wine", x: ["They give the vineyard’s GPS coordinates", "The winemaker signs every bottle", "They record the weather on harvest day"] },
    ],
  },
  us2_rochioli: {
    producer: "Rochioli Vineyards",
    fact: "Pinot Noir from the Rochioli family, who have farmed in the Russian River Valley for generations. Their vineyards are considered the jewels of the region’s Pinot Noir.",
    quiz: [
      { q: "Which Russian River Valley cult winery built its early fame on Rochioli family grapes?", a: "Williams Selyem", x: ["Kosta Browne", "Kistler", "La Crema"] },
    ],
  },
  us2_littorai: {
    producer: "Littorai",
    fact: "A coastal Pinot Noir winery founded in 1993 by Ted Lemon and his wife. The name comes from Latin and means “coasts”.",
    quiz: [
      { q: "At which Meursault domaine was Ted Lemon, founder of Littorai, the first American to be head winemaker?", a: "Domaine Guy Roulot", x: ["Domaine Leflaive", "Domaine des Comtes Lafon", "Domaine de la Romanée-Conti"] },
    ],
  },
  us2_flowers: {
    producer: "Flowers Vineyards",
    fact: "A Pinot Noir and Chardonnay winery founded by Walt and Joan Flowers on a Sonoma Coast ridge overlooking the Pacific.",
    quiz: [
      { q: "Which family partnered with Flowers and took over its management in 2009?", a: "The Huneeus family (Quintessa)", x: ["The Jackson family", "The Gallo family", "The Mondavi family"] },
    ],
  },
  us2_merry_edwards: {
    producer: "Merry Edwards Winery",
    fact: "A Russian River Valley Pinot Noir winery founded in 1997 by Merry Edwards, one of California’s first generation of women winemakers.",
    quiz: [
      { q: "Which Champagne house acquired Merry Edwards Winery in 2019?", a: "Louis Roederer", x: ["Moët & Chandon", "Taittinger", "Bollinger"] },
    ],
  },
  us2_sonoma_cutrer: {
    producer: "Sonoma-Cutrer",
    fact: "A popular Sonoma Coast Chardonnay first released in 1981. A regular on American restaurant wine lists.",
    quiz: [
      { q: "For which sport did Sonoma-Cutrer build competition courts and even host a world championship?", a: "Croquet", x: ["Polo", "Golf", "Tennis"] },
    ],
  },
  us2_hanzell: {
    producer: "Hanzell Vineyards",
    fact: "Founded in Sonoma in 1953 by James D. Zellerbach, a former US ambassador to Italy. It was the first in California to adopt ageing in French oak in earnest.",
    quiz: [
      { q: "How was the name Hanzell formed?", a: "From his wife Hana’s name and the surname Zellerbach", x: ["From an old Hungarian place name", "German for “little hill”", "The first winemaker’s name"] },
    ],
  },
  us2_buena_vista: {
    producer: "Buena Vista Winery",
    fact: "California’s first commercial winery, founded in Sonoma in 1857. Burgundy’s Jean-Charles Boisset bought and revived it in 2011.",
    quiz: [
      { q: "Which Hungarian-born pioneer founded Buena Vista and is called “the father of California wine”?", a: "Agoston Haraszthy", x: ["Charles Krug", "Gustave Niebaum", "Georges de Latour"] },
    ],
  },
  us2_csj_cinq: {
    producer: "Chateau St. Jean",
    fact: "A Sonoma Bordeaux-style blend whose 1996 was Wine Spectator’s Wine of the Year in 1999, the first Sonoma wine to be so honoured.",
    quiz: [
      { q: "What does “Cinq Cépages” mean in French?", a: "Five grape varieties", x: ["Five vineyards", "The fifth harvest", "Five brothers"] },
    ],
  },
  us2_rodney_strong: {
    producer: "Rodney Strong Vineyards",
    fact: "The winery of Rodney Strong, a pioneer who entered the wine business in 1959 and led the way in making Sonoma County a renowned region.",
    quiz: [
      { q: "What was Rodney Strong’s profession before he made wine?", a: "Broadway dancer", x: ["Boxer", "Jazz pianist", "Radio announcer"] },
    ],
  },
  us2_ferrari_carano_fume: {
    producer: "Ferrari-Carano",
    fact: "A winery founded in Dry Creek Valley in 1981 by Don and Rhonda Carano. Its Italianate mansion “Villa Fiore” and gardens are famous.",
    quiz: [
      { q: "What business did Don Carano, founder of Ferrari-Carano, run in Reno, Nevada?", a: "The Eldorado Hotel Casino", x: ["A ski resort", "A railway company", "A silver mine"] },
    ],
  },
  us2_dry_creek_fume: {
    producer: "Dry Creek Vineyard",
    fact: "The first winery founded in Dry Creek Valley after Prohibition, by David Stare in 1972. It was the first in Sonoma to use the name “Fumé Blanc”.",
    quiz: [
      { q: "What is drawn on the Dry Creek Vineyard label?", a: "A sailboat", x: ["A lighthouse", "A hawk", "A grapevine"] },
    ],
  },
  us2_seghesio_zin: {
    producer: "Seghesio Family Vineyards",
    fact: "A great Sonoma Zinfandel house that began when Italian-born Edoardo Seghesio planted his first Zinfandel vineyard in 1895. It survived Prohibition.",
    quiz: [
      { q: "Which company acquired Seghesio Family Vineyards in 2011?", a: "Crimson Wine Group", x: ["E. & J. Gallo", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us2_coppola_claret: {
    producer: "Francis Ford Coppola Winery",
    fact: "Inspired by a 1906 claret director Coppola found in the cellar of the old Napa winery he bought. The bottle is wrapped in gold netting.",
    quiz: [
      { q: "“Claret” was originally the English name for red wine from which region?", a: "Bordeaux", x: ["Burgundy", "Rioja", "Tuscany"] },
    ],
  },
  us2_sofia_bdb: {
    producer: "Francis Ford Coppola Winery",
    fact: "Born of Coppola’s promise to his daughter Sofia that one day he would make a sparkling wine and name it after her. A light, fragrant sparkler.",
    quiz: [
      { q: "Which film did Sofia Coppola, namesake of Sofia Blanc de Blancs, direct?", a: "Lost in Translation", x: ["The Godfather", "Apocalypse Now", "Dracula"] },
    ],
  },
  us2_iron_horse: {
    producer: "Iron Horse Vineyards",
    fact: "A family sparkling house in Green Valley, Russian River Valley. Since the 1985 Reagan–Gorbachev summit dinner, it has been served regularly at White House events.",
    quiz: [
      { q: "Where does the name Iron Horse come from?", a: "A 19th-century railway stop on this land", x: ["The founder’s racehorse", "A blacksmith’s iron horseshoe", "A nearby mine"] },
    ],
  },
  us2_j_cuvee20: {
    producer: "J Vineyards & Winery",
    fact: "A sparkling house founded in the Russian River Valley in 1986 by the daughter of Jordan Winery’s founder. E. & J. Gallo acquired it in 2015.",
    quiz: [
      { q: "What does the “J” in J Vineyards stand for?", a: "Founder Judy Jordan", x: ["The initial of “Jubilee”", "A J-shaped vineyard", "The founder’s son John"] },
    ],
  },
  us2_gloria_ferrer: {
    producer: "Gloria Ferrer",
    fact: "The first sparkling winery in Carneros, opened in 1986 by the Ferrer family, a great Spanish Cava house.",
    quiz: [
      { q: "Who is the “Gloria” of Gloria Ferrer?", a: "The wife of José Ferrer of the Ferrer family", x: ["The founder’s daughter", "A Spanish saint", "An opera singer"] },
      { q: "Which Spanish Cava company belongs to the Ferrer family, founders of Gloria Ferrer?", a: "Freixenet", x: ["Codorníu", "Juvé & Camps", "Recaredo"] },
    ],
  },
  us2_korbel_natural: {
    producer: "Korbel Champagne Cellars",
    fact: "A sparkling house founded in the Russian River Valley in 1882 by the three Korbel brothers. It has been used for toasts at several US presidential inaugurations.",
    quiz: [
      { q: "Where did the Korbel brothers come from?", a: "Bohemia (now the Czech Republic)", x: ["Tuscany, Italy", "Alsace, France", "Catalonia, Spain"] },
    ],
  },
  us2_turley_oldvines: {
    producer: "Turley Wine Cellars",
    fact: "A great Zinfandel house founded by Larry Turley in 1993. It has sought out and protected California vineyards over 100 years old.",
    quiz: [
      { q: "Which Napa winery did Larry Turley co-found before Turley Wine Cellars?", a: "Frog's Leap", x: ["Ridge Vineyards", "Ravenswood", "Seghesio"] },
      { q: "Which famous consultant winemaker is Larry Turley’s sister?", a: "Helen Turley", x: ["Heidi Barrett", "Merry Edwards", "Cathy Corison"] },
    ],
  },
  us2_ravenswood: {
    producer: "Ravenswood",
    fact: "A Zinfandel specialist founded by Joel Peterson in 1976. It is famous for its logo of three ravens forming a circle.",
    quiz: [
      { q: "What is Ravenswood’s famous motto?", a: "No Wimpy Wines", x: ["In Vino Veritas", "Bottled Poetry", "Time’s Fun When You’re Having Flies"] },
    ],
  },
  us2_menage_a_trois: {
    producer: "Trinchero Family Estates",
    fact: "A red blend first made in 1996 by Napa’s Folie à Deux winery. Its sweet, smooth taste led the American red blend trend.",
    quiz: [
      { q: "What does the name Ménage à Trois (“a household of three”) refer to?", a: "The three grape varieties blended", x: ["Three founders", "Three vineyards", "Three fermentations"] },
      { q: "What is the flagship brand of the Trinchero family, who acquired Ménage à Trois in 2004?", a: "Sutter Home", x: ["Barefoot", "Woodbridge", "Kendall-Jackson"] },
    ],
  },
  us2_tablas_esprit: {
    producer: "Tablas Creek Vineyard",
    fact: "Founded in Paso Robles in 1989 by France’s Perrin family and importer Robert Haas. They planted Rhône vine cuttings brought over from France.",
    quiz: [
      { q: "Which great Châteauneuf-du-Pape estate belongs to the Perrin family, co-founders of Tablas Creek?", a: "Château de Beaucastel", x: ["Château Rayas", "Domaine du Vieux Télégraphe", "Château La Nerthe"] },
    ],
  },
  us2_saxum_jb: {
    producer: "Saxum Vineyards",
    fact: "A Rhône-style blend Justin Smith makes from the James Berry Vineyard west of Paso Robles. The 2007 was Wine Spectator’s Wine of the Year in 2010.",
    quiz: [
      { q: "What does “Saxum” mean in Latin?", a: "Rock", x: ["Sun", "Grape", "Wind"] },
    ],
  },
  us2_laventure: {
    producer: "L'Aventure Winery",
    fact: "A winery founded in Paso Robles in 1998 by Stephan Asseo, who had made wine in Bordeaux. The name is French for “adventure”.",
    quiz: [
      { q: "Why did Stephan Asseo leave Bordeaux for Paso Robles?", a: "To blend Syrah and Cabernet free of appellation rules", x: ["His Bordeaux vineyards were flooded", "He wanted to make sparkling wine", "To take over a family business"] },
    ],
  },
  us2_justin_isosceles: {
    producer: "Justin Vineyards & Winery",
    fact: "The flagship Bordeaux-style blend of Justin, founded in Paso Robles by Justin Baldwin in 1981. In 2010 it was bought by The Wonderful Company, owner of Fiji Water and POM Wonderful.",
    quiz: [
      { q: "What does the name Isosceles (as in an isosceles triangle) refer to?", a: "A blend of three Bordeaux grapes", x: ["Three hillside vineyards", "Three founding brothers", "Three years of ageing"] },
    ],
  },
  us2_daou_sol: {
    producer: "DAOU Vineyards",
    fact: "The flagship Cabernet of the winery Lebanese-born brothers Georges and Daniel Daou founded on a Paso Robles mountaintop. The name honours the brothers’ father.",
    quiz: [
      { q: "Which Australian wine company acquired DAOU Vineyards in 2023?", a: "Treasury Wine Estates", x: ["Constellation Brands", "E. & J. Gallo", "LVMH"] },
    ],
  },
  us2_qupe_syrah: {
    producer: "Qupé",
    fact: "A Central Coast pioneer of Rhône grapes, founded by Bob Lindquist in 1982. It shared a winery with Au Bon Climat.",
    quiz: [
      { q: "What does “Qupé” mean in the Chumash language?", a: "California poppy", x: ["Seal", "Oak tree", "Eagle"] },
    ],
  },
  us2_bonny_doon_cigare: {
    producer: "Bonny Doon Vineyard",
    fact: "A Châteauneuf-du-Pape-style blend made by Randall Grahm, “the Rhône Ranger”. The label shows a cigar-shaped craft flying over a vineyard.",
    quiz: [
      { q: "What did the 1954 Châteauneuf-du-Pape ordinance satirised by Le Cigare Volant ban?", a: "Flying saucers (UFOs) landing in vineyards", x: ["Harvesting grapes at night", "Machine harvesting", "Plastic corks"] },
    ],
  },
  us2_foxen_pinot: {
    producer: "Foxen Vineyard",
    fact: "A winery founded in 1985 by Dick Doré and Bill Wathen on Doré family land in the Santa Maria Valley. Its lopsided anchor emblem is its trademark.",
    quiz: [
      { q: "Where does the anchor on the Foxen label come from?", a: "Ancestor William Benjamin Foxen, an English sea captain who branded cattle with an anchor", x: ["Spanish missionary Junípero Serra", "Admiral Chester Nimitz", "The first winemaker’s father"] },
    ],
  },
  us2_hitching_post: {
    producer: "Hitching Post Wines",
    fact: "A Santa Barbara Pinot Noir made by Frank Ostini, owner of the Hitching Post steakhouse in Buellton, and his friend Gray Hartley.",
    quiz: [
      { q: "Which 2004 film featuring the Hitching Post restaurant and wine made them famous?", a: "Sideways", x: ["Bottle Shock", "A Good Year", "Mondovino"] },
    ],
  },
  us2_sanford_pinot: {
    producer: "Sanford Winery",
    fact: "The Sta. Rita Hills winery where Miles and Jack stop first to taste in the film “Sideways”.",
    quiz: [
      { q: "What did Richard Sanford and Michael Benedict do in the Sta. Rita Hills in 1971?", a: "They planted the area’s first Pinot Noir", x: ["They opened its first sparkling winery", "They held its first wine auction", "They earned its first organic certification"] },
    ],
  },
  us2_fess_parker: {
    producer: "Fess Parker Winery",
    fact: "A family winery founded by actor Fess Parker in the Santa Ynez Valley. It is known for Santa Barbara Pinot Noir and Rhône grapes.",
    quiz: [
      { q: "Which American frontier hero did Fess Parker play in a 1950s Disney series?", a: "Davy Crockett", x: ["Buffalo Bill", "Wyatt Earp", "The Lone Ranger"] },
    ],
  },
  us2_chalone_chard: {
    producer: "Chalone Vineyard",
    fact: "A winery on a limestone plateau near the Pinnacles. Like Burgundy, it grows Chardonnay and Pinot Noir on chalky soil.",
    quiz: [
      { q: "Where did the 1974 Chalone Chardonnay place in the white category at the 1976 “Judgment of Paris”?", a: "3rd", x: ["1st", "6th", "10th"] },
    ],
  },
  us2_wente_morningfog: {
    producer: "Wente Vineyards",
    fact: "Chardonnay from America’s oldest continuously family-run winery, founded in the Livermore Valley in 1883 by German-born Carl Wente.",
    quiz: [
      { q: "What is the Chardonnay clone at the root of most California Chardonnay vineyards called?", a: "The Wente clone", x: ["The Mondavi clone", "The Chablis clone", "The Napa clone"] },
    ],
  },
  us2_concannon_ps: {
    producer: "Concannon Vineyard",
    fact: "Founded in the Livermore Valley in 1883 by Irish-born James Concannon. During Prohibition it survived by making sacramental wine.",
    quiz: [
      { q: "What did Concannon do first in America in the 1960s?", a: "Release Petite Sirah as a varietal-labelled wine", x: ["Use screw caps on a fine wine", "Make a sparkling rosé", "Sell wine in cans"] },
    ],
  },
  us2_7deadlyzins: {
    producer: "Michael David Winery",
    fact: "A popular old-vine Zinfandel from brothers Michael and David of the Phillips family, who have farmed in Lodi for generations.",
    quiz: [
      { q: "What does the name 7 Deadly Zins play on?", a: "The Seven Deadly Sins of Christianity", x: ["The Seven Wonders of the World", "Seven vineyards", "Seven years of ageing"] },
    ],
  },
  us2_adelsheim: {
    producer: "Adelsheim Vineyard",
    fact: "An early Oregon winery, begun in 1971 when David Adelsheim and his wife bought land in the hills of the northern Willamette Valley.",
    quiz: [
      { q: "Who drew the women’s portraits that long adorned Adelsheim labels?", a: "Co-founder Ginny Adelsheim", x: ["Andy Warhol", "Norman Rockwell", "Georgia O’Keeffe"] },
    ],
  },
  us2_argyle_brut: {
    producer: "Argyle Winery",
    fact: "A pioneer of Oregon sparkling wine, founded in Dundee in 1987 by an Australian winemaker and American winemaker Rollin Soles.",
    quiz: [
      { q: "Which Australian winemaker founded Argyle with Rollin Soles?", a: "Brian Croser", x: ["Peter Lehmann", "Wolf Blass", "John Duval"] },
    ],
  },
  us2_sokol_blosser: {
    producer: "Sokol Blosser",
    fact: "A pioneering Oregon winery that planted vines in the Dundee Hills in 1971. It was early to embrace eco-friendly farming and architecture.",
    quiz: [
      { q: "How was the name Sokol Blosser formed?", a: "From the surnames of founders Susan Sokol and Bill Blosser", x: ["From two village names", "Polish for “sunny hill”", "The first vineyard owner’s name"] },
    ],
  },
  us2_wvv_estate: {
    producer: "Willamette Valley Vineyards",
    fact: "A Willamette Valley winery founded by Jim Bernau in 1983. It led the way in bringing Oregon Pinot Noir to a wide public.",
    quiz: [
      { q: "What is unusual about the ownership of Willamette Valley Vineyards?", a: "It is a Nasdaq-listed company owned by many small shareholders", x: ["It is owned by a monastic community", "It is owned by a state university", "It is owned by a Native tribe"] },
    ],
  },
  us2_ponzi_tavola: {
    producer: "Ponzi Vineyards",
    fact: "A pioneering Willamette Valley winery founded by Dick and Nancy Ponzi in 1970. Their daughter Luisa was winemaker for many years.",
    quiz: [
      { q: "Which Champagne house acquired Ponzi Vineyards in 2021?", a: "Bollinger", x: ["Moët & Chandon", "Louis Roederer", "Taittinger"] },
    ],
  },
  us2_resonance: {
    producer: "Maison Louis Jadot",
    fact: "The first winery a great Burgundy house founded outside France. It began in 2013 with the purchase of the Résonance vineyard in Yamhill-Carlton.",
    quiz: [
      { q: "Which Burgundy négociant founded Résonance?", a: "Louis Jadot", x: ["Joseph Drouhin", "Bouchard Père & Fils", "Albert Bichot"] },
    ],
  },
  us2_nicolas_jay: {
    producer: "Nicolas-Jay",
    fact: "An Oregon winery founded in 2014 by Vosne-Romanée winemaker Jean-Nicolas Méo and music executive Jay Boberg.",
    quiz: [
      { q: "Which Burgundy domaine is run by Jean-Nicolas Méo, co-founder of Nicolas-Jay?", a: "Domaine Méo-Camuzet", x: ["Domaine Leroy", "Domaine Dujac", "Domaine Georges Roumier"] },
    ],
  },
  us2_columbia_crest_ge: {
    producer: "Columbia Crest",
    fact: "A large Washington winery in the same group as Chateau Ste. Michelle. It sits in the Horse Heaven Hills overlooking the Columbia River.",
    quiz: [
      { q: "Which Columbia Crest wine was Wine Spectator’s Wine of the Year in 2009?", a: "The 2005 Reserve Cabernet Sauvignon", x: ["Grand Estates Merlot", "H3 Cabernet Sauvignon", "Two Vines Red Blend"] },
    ],
  },
  us2_14hands_cab: {
    producer: "14 Hands",
    fact: "A Washington brand launched by the Chateau Ste. Michelle group in 2005. Originally meant for restaurants, it grew so popular it became a major brand.",
    quiz: [
      { q: "What does the name 14 Hands refer to?", a: "The height of the small wild horses that roamed the Horse Heaven Hills", x: ["14 founders", "14 vineyards", "14 harvest workers"] },
    ],
  },
  us2_kung_fu_girl: {
    producer: "Charles Smith Wines",
    fact: "A Riesling made by Charles Smith, the maverick of the Washington wine scene. In 2016 his brands were sold to Constellation Brands.",
    quiz: [
      { q: "What did Charles Smith do in Europe before making wine?", a: "Managed rock bands", x: ["Pro skateboarding", "Film stunt work", "Worked as a restaurant chef"] },
    ],
  },
  us2_andrew_will_sorella: {
    producer: "Andrew Will Winery",
    fact: "A Bordeaux-style blend from the winery Chris Camarda founded in 1989. Sorella is Italian for “sister”, in memory of his late sister.",
    quiz: [
      { q: "Who is the winery name Andrew Will taken from?", a: "The founder’s nephew Andrew and son Will", x: ["The founder’s two brothers", "The two owners of the first vineyard", "An English poet"] },
    ],
  },
  us2_woodward_canyon: {
    producer: "Woodward Canyon",
    fact: "The second winery in the Walla Walla Valley, founded by Rick Small in 1981. It built the reputation of Washington Cabernet early on.",
    quiz: [
      { q: "What is special about the Woodward Canyon Artist Series label?", a: "It uses a different artist’s painting each year", x: ["It uses the founder’s family photos", "It uses aerial photos of the vineyard", "It uses a weather chart for each vintage"] },
    ],
  },
  us2_lecole41_semillon: {
    producer: "L'Ecole No 41",
    fact: "Walla Walla Valley’s third winery, opened in 1983 in an old Frenchtown schoolhouse built in 1915. L’Ecole is French for “the school”.",
    quiz: [
      { q: "What is the “41” in L'Ecole No 41?", a: "The school district number of the schoolhouse", x: ["The founder’s 41st birthday", "Highway 41", "41 vineyards"] },
    ],
  },
  us2_long_shadows_sequel: {
    producer: "Long Shadows",
    fact: "A Syrah from Long Shadows, where Allen Shoup, former head of Chateau Ste. Michelle, entrusted one wine each to world-famous winemakers.",
    quiz: [
      { q: "At which great Australian house was John Duval, maker of Sequel, chief winemaker?", a: "Penfolds", x: ["Henschke", "Torbreck", "Two Hands"] },
    ],
  },
  us2_long_shadows_pedestal: {
    producer: "Long Shadows",
    fact: "A Merlot-led Washington red that Long Shadows entrusts to a star Bordeaux consultant.",
    quiz: [
      { q: "Which famous Bordeaux consultant makes Pedestal Merlot?", a: "Michel Rolland", x: ["Pierre Seillan", "Stéphane Derenoncourt", "Éric Boissenot"] },
    ],
  },
  us2_long_shadows_feather: {
    producer: "Long Shadows",
    fact: "A Washington Cabernet that Long Shadows entrusts to a master of Napa mountain Cabernet.",
    quiz: [
      { q: "Which Howell Mountain winemaker from Napa makes Feather Cabernet?", a: "Randy Dunn", x: ["Heidi Barrett", "Paul Hobbs", "Philippe Melka"] },
    ],
  },
  us2_long_shadows_poetsleap: {
    producer: "Long Shadows",
    fact: "A Washington Riesling that Long Shadows entrusts to a winemaker from a great estate in Germany’s Nahe.",
    quiz: [
      { q: "Which Nahe winemaker makes Poet’s Leap Riesling?", a: "Armin Diel", x: ["Ernst Loosen", "Egon Müller", "Helmut Dönnhoff"] },
    ],
  },
  us2_doubleback: {
    producer: "Doubleback",
    fact: "A winery founded in his hometown by Walla Walla-born sports star Drew Bledsoe after retiring. Chris Figgins of Leonetti led its early winemaking.",
    quiz: [
      { q: "What was the former profession of Drew Bledsoe, founder of Doubleback?", a: "NFL quarterback", x: ["NBA basketball player", "Major League pitcher", "Pro golfer"] },
      { q: "What does the name Doubleback mean?", a: "Coming back home", x: ["It is aged twice", "Two vineyards are blended", "It is the name of a football play"] },
    ],
  },
  us2_wiemer_dry_riesling: {
    producer: "Hermann J. Wiemer Vineyard",
    fact: "A great Finger Lakes Riesling house founded on the shore of Seneca Lake in 1979 by Hermann J. Wiemer, from Bernkastel on Germany’s Mosel.",
    quiz: [
      { q: "What business has Hermann J. Wiemer run alongside the winery?", a: "A nursery selling grafted European vines", x: ["A cheese workshop", "A cider house", "A cooperage"] },
    ],
  },
  us2_drfrank_rkatsiteli: {
    producer: "Dr. Konstantin Frank",
    fact: "A white made by Dr. Konstantin Frank from a cold-hardy grape of the former Soviet region, brought to the Finger Lakes.",
    quiz: [
      { q: "What is the home country of the Rkatsiteli grape Dr. Frank planted in the Finger Lakes?", a: "Georgia", x: ["Armenia", "Greece", "Bulgaria"] },
    ],
  },
  us2_wolffer_rose: {
    producer: "Wölffer Estate",
    fact: "Rosé from the winery Hamburg-born Christian Wölffer founded in the Hamptons, Long Island, in 1988. It is a symbol of New York’s summer resorts.",
    quiz: [
      { q: "Which new rosé did Wölffer Estate launch on the back of rosé’s popularity?", a: "Summer in a Bottle", x: ["Whispering Angel", "Miraval", "Hampton Water"] },
    ],
  },
  us2_bedell_merlot: {
    producer: "Bedell Cellars",
    fact: "A winery on Long Island’s North Fork. Its 2009 Merlot was served at the 2013 presidential inaugural luncheon, the first New York wine used at an inauguration.",
    quiz: [
      { q: "Which is the signature film of New Line Cinema, run by Michael Lynne, who bought Bedell Cellars in 2000?", a: "The Lord of the Rings", x: ["Harry Potter", "Star Wars", "The Godfather"] },
    ],
  },
  us2_barboursville_octagon: {
    producer: "Barboursville Vineyards",
    fact: "A Virginia winery founded in 1976 by Italy’s Zonin family. The ruins of an old governor’s mansion designed by Thomas Jefferson stand on the estate.",
    quiz: [
      { q: "Where does the name Octagon come from?", a: "The octagonal room in the Jefferson-designed mansion", x: ["An octagonal barrel", "A blend of eight grapes", "A vineyard of eight blocks"] },
    ],
  },
  us2_rdv_lostmountain: {
    producer: "RdV Vineyards",
    fact: "Founded by former Marine Rutger de Vink on a granite hill at the foot of Virginia’s Blue Ridge, with a first vintage in 2008. It was recently sold to the family that owns Château Montrose.",
    quiz: [
      { q: "What is the name “RdV”?", a: "The founder’s initials, and short for “rendezvous”", x: ["A French abbreviation for “red of Virginia”", "The vineyard’s coordinates", "The name of a nearby river"] },
    ],
  },
  us2_early_mountain_pm: {
    producer: "Early Mountain Vineyards",
    fact: "A Virginia winery at the foot of the Blue Ridge, founded in 2012 by an internet entrepreneur and his wife. It focuses on Petit Manseng, Virginia’s signature white grape.",
    quiz: [
      { q: "Which internet company did Steve Case, founder of Early Mountain, co-found?", a: "AOL", x: ["Yahoo", "Netscape", "eBay"] },
    ],
  },
  us2_gruet_brut: {
    producer: "Gruet Winery",
    fact: "A sparkling house founded in 1984 by a French Champagne family who bought land on a New Mexico plateau. It is made the same way as Champagne.",
    quiz: [
      { q: "In which French region did the Gruet family originally make wine?", a: "Champagne", x: ["Alsace", "Burgundy", "Loire"] },
    ],
  },
  us2_missionhill_reserve_chard: {
    producer: "Mission Hill",
    fact: "A hilltop winery overlooking Okanagan Lake. It is famous for its monastery-like buildings and tall bell tower.",
    quiz: [
      { q: "Which award did the 1992 Mission Hill Chardonnay win at the 1994 International Wine & Spirit Competition (IWSC) in London?", a: "The trophy for the world’s best Chardonnay", x: ["Best icewine", "Best sparkling wine", "Best red blend"] },
    ],
  },
  us2_burrowing_owl_merlot: {
    producer: "Burrowing Owl Estate",
    fact: "A winery Jim Wyse founded in the desert of the southern Okanagan. It is named after the burrowing owl, which was vanishing from the area.",
    quiz: [
      { q: "What does Burrowing Owl do with the tasting fees it charges?", a: "Donates them to burrowing owl conservation", x: ["Funds scholarships for vineyard workers", "Buys oak barrels", "Donates them to the local fire station"] },
    ],
  },
  us2_quails_gate_foch: {
    producer: "Quails' Gate",
    fact: "The winery of the Stewart family, who have farmed in West Kelowna since 1908. It makes a rich red from old vines planted in the 1960s.",
    quiz: [
      { q: "Whom does the grape name “Maréchal Foch” honour?", a: "Ferdinand Foch, Allied supreme commander in World War I", x: ["Napoleon Bonaparte", "The Marquis de Lafayette", "Charles de Gaulle"] },
    ],
  },
  us2_osoyoos_larose: {
    producer: "Osoyoos Larose",
    fact: "A Bordeaux-style winery founded on the shores of Osoyoos Lake in 1998 by Bordeaux’s Groupe Taillan and Canada’s Vincor. Today Taillan owns it alone.",
    quiz: [
      { q: "From which Groupe Taillan Bordeaux château does the “Larose” of Osoyoos Larose come?", a: "Château Gruaud Larose", x: ["Château Latour", "Château Lagrange", "Château Lafon-Rochet"] },
    ],
  },
  us2_nkmip_syrah: {
    producer: "Nk'Mip Cellars",
    fact: "A winery in Osoyoos, in Canada’s desert region. Nk’Mip means “flat land” in the local Indigenous language.",
    quiz: [
      { q: "What record does Nk'Mip Cellars hold?", a: "North America’s first Indigenous-owned winery", x: ["Canada’s first icewine producer", "Canada’s first organic certification", "North America’s first sparkling house"] },
    ],
  },
  us2_summerhill_cipes: {
    producer: "Summerhill Pyramid Winery",
    fact: "The flagship sparkling wine of the organic winery the Cipes family founded in Kelowna in 1986. Mainly Riesling, it is made by second fermentation in bottle.",
    quiz: [
      { q: "What does Summerhill Pyramid Winery do in the pyramid it built after the Great Pyramid of Giza?", a: "Ages its wine", x: ["Holds tastings", "Dries grapes", "Makes barrels"] },
    ],
  },
  us2_clos_jordanne: {
    producer: "Le Clos Jordanne",
    fact: "A Niagara winery founded by Burgundy’s Boisset and Canada’s Vincor. Its 2005 beat top Burgundies and Californians to first place at the 2009 “Judgment of Montreal”.",
    quiz: [
      { q: "Which architect designed Le Clos Jordanne’s winery, which was never built?", a: "Frank Gehry", x: ["Renzo Piano", "Tadao Ando", "Zaha Hadid"] },
    ],
  },
  us2_peller_ice_cuvee: {
    producer: "Peller Estates",
    fact: "A Niagara sparkling wine made by the Champagne method. A distinctly Canadian ingredient added at the final stage gives it a gentle sweetness.",
    quiz: [
      { q: "What goes into the final dosage (sugar top-up) of Ice Cuvée?", a: "Vidal icewine", x: ["Maple syrup", "Honey", "Apple brandy"] },
    ],
  },
  us2_gretzky_cab_merlot: {
    producer: "Wayne Gretzky Estates",
    fact: "A red blend from the winery and whisky distillery ice hockey legend Wayne Gretzky founded in Niagara-on-the-Lake.",
    quiz: [
      { q: "Which jersey number from his playing days is often used on Wayne Gretzky wines?", a: "99", x: ["66", "87", "9"] },
    ],
  },
};

export default T;
