import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  bx_rauzansegla: {
    producer: "Chanel (Wertheimer family)",
    fact: "A Margaux Second Growth founded in 1661. In 1994 it was bought by the Wertheimer family, owners of Chanel.",
    quiz: [
      { q: "Which fashion house bought Château Rauzan-Ségla in 1994?", a: "Chanel", x: ["Hermès", "Dior", "Gucci"] },
    ],
  },
  bx_rauzangassies: {
    producer: "Famille Quié",
    fact: "A Margaux Second Growth that split from Rauzan-Ségla when the old Rauzan estate was divided. The Quié family runs it along with Croizet-Bages in Pauillac.",
    quiz: [
      { q: "Which Margaux château was once a single estate with Château Rauzan-Gassies?", a: "Château Rauzan-Ségla", x: ["Château Brane-Cantenac", "Château Lascombes", "Château Durfort-Vivens"] },
      { q: "Which Pauillac Fifth Growth does the Quié family run alongside Château Rauzan-Gassies?", a: "Château Croizet-Bages", x: ["Château Lynch-Moussas", "Château Pédesclaux", "Château Batailley"] },
    ],
  },
  bx_leovillelascases: {
    producer: "Famille Delon",
    fact: "Born when the Léoville estate, once one of the Médoc’s largest, was split in three. The lion-topped stone gate on the label is the entrance to the “Grand Clos” vineyard.",
    quiz: [
      { q: "What statue sits atop the stone gate on the Château Léoville Las Cases label?", a: "A lion", x: ["An eagle", "A horse", "A bell"] },
      { q: "Which family runs Château Léoville Las Cases?", a: "The Delon family", x: ["The Barton family", "The Cuvelier family", "The Borie family"] },
    ],
  },
  bx_leovillepoyferre: {
    producer: "Famille Cuvelier",
    fact: "One of the three châteaux split from the Léoville estate. The Cuvelier family has owned it since 1920.",
    quiz: [
      { q: "Which family has owned Château Léoville Poyferré since 1920?", a: "The Cuvelier family", x: ["The Delon family", "The Barton family", "The Cazes family"] },
    ],
  },
  bx_leovillebarton: {
    producer: "Famille Barton",
    fact: "The Irish-rooted Barton family bought it in 1826 and still owns it. Having no château building of its own, it is made next door at Langoa Barton.",
    quiz: [
      { q: "Where are the roots of the Barton family, owners of Château Léoville Barton?", a: "Ireland", x: ["Scotland", "The Netherlands", "Germany"] },
      { q: "Which Third Growth of the same family shares its winemaking with Château Léoville Barton?", a: "Château Langoa Barton", x: ["Château Lagrange", "Château Talbot", "Château Saint-Pierre"] },
    ],
  },
  bx_durfortvivens: {
    producer: "Gonzague Lurton",
    fact: "A Margaux Second Growth named after the medieval lords of Durfort de Duras. Under Gonzague Lurton it has converted to biodynamic farming.",
    quiz: [
      { q: "What is Château Durfort-Vivens’s rank in the 1855 Médoc classification?", a: "Second Growth", x: ["Third Growth", "Fourth Growth", "Fifth Growth"] },
    ],
  },
  bx_gruaudlarose: {
    producer: "Groupe Taillan",
    fact: "A Saint-Julien Second Growth whose label bears the motto “the king of wines, the wine of kings”. Bordeaux’s Taillan group has owned it since 1997.",
    quiz: [
      { q: "What does the motto on the Château Gruaud Larose label mean?", a: "The king of wines, the wine of kings", x: ["Drops sent from the gods", "The queen of the Médoc", "A wine made by patience"] },
    ],
  },
  bx_lascombes: {
    producer: "Château Lascombes",
    fact: "A Margaux Second Growth whose reputation was revived in the 1950s by Russian-born American wine writer Alexis Lichine, who bought it.",
    quiz: [
      { q: "Which wine writer bought and revived Château Lascombes in the 1950s?", a: "Alexis Lichine", x: ["Robert Parker", "Émile Peynaud", "Hugh Johnson"] },
    ],
  },
  bx_branecantenac: {
    producer: "Henri Lurton",
    fact: "The estate that Baron de Brane, “the Napoleon of the vines”, developed after selling what is now Mouton Rothschild. Today it is run by Henri Lurton.",
    quiz: [
      { q: "Which Pauillac estate had Baron de Brane of Château Brane-Cantenac sold earlier?", a: "Today’s Château Mouton Rothschild", x: ["Today’s Château Lafite Rothschild", "Today’s Château Latour", "Today’s Château Pichon Baron"] },
      { q: "What was the nickname of Baron de Brane, who gave his name to Château Brane-Cantenac?", a: "The Napoleon of the vines", x: ["The Maharaja of Saint-Estèphe", "The Pope of the Médoc", "The king of wine"] },
    ],
  },
  bx_pichonbaron: {
    producer: "AXA Millésimes",
    fact: "A Pauillac Second Growth famous for its fairy-tale château with pointed turrets. AXA Millésimes, part of insurer AXA, has owned it since 1987.",
    quiz: [
      { q: "Who bought Château Pichon Baron in 1987?", a: "AXA Millésimes", x: ["LVMH", "Chanel", "Louis Roederer"] },
      { q: "Which château was once one estate with Château Pichon Baron?", a: "Château Pichon Longueville Comtesse de Lalande", x: ["Château Latour", "Château Lynch-Bages", "Château Pontet-Canet"] },
    ],
  },
  bx_pichoncomtesse: {
    producer: "Louis Roederer",
    fact: "Named after Virginie, the daughter who inherited part of the Pichon estate and married the Comte de Lalande. Champagne house Louis Roederer bought it in 2007.",
    quiz: [
      { q: "Which Champagne house acquired Château Pichon Longueville Comtesse de Lalande in 2007?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  bx_ducrubeaucaillou: {
    producer: "Famille Borie",
    fact: "“Beaucaillou” means “beautiful pebbles”, referring to the gravel slopes along the Gironde. The Borie family has owned it since 1941.",
    quiz: [
      { q: "What does “Beaucaillou” in Château Ducru-Beaucaillou mean?", a: "Beautiful pebbles", x: ["Beautiful hill", "Old tower", "Little wood"] },
      { q: "Which family has owned Château Ducru-Beaucaillou since 1941?", a: "The Borie family", x: ["The Delon family", "The Barton family", "The Cuvelier family"] },
    ],
  },
  bx_cosdestournel: {
    producer: "Michel Reybier",
    fact: "Louis-Gaspard d’Estournel, “the Maharaja of Saint-Estèphe”, was so taken with the India trade that he topped his cellar with Eastern pagodas. Michel Reybier has owned it since 2000.",
    quiz: [
      { q: "What is distinctive about Château Cos d'Estournel’s cellar building?", a: "Indian-style pagoda towers", x: ["Medieval castle towers", "Greek temple columns", "A Tudor-style brick house"] },
      { q: "What was the nickname of Louis-Gaspard d’Estournel, founder of Château Cos d'Estournel?", a: "The Maharaja of Saint-Estèphe", x: ["The Napoleon of the vines", "The Pope of the Médoc", "The king of wine"] },
    ],
  },
  bx_montrose: {
    producer: "Famille Bouygues",
    fact: "Its name comes from a hill covered in pink heather (“mont rose”). French businessmen the Bouygues brothers bought it in 2006.",
    quiz: [
      { q: "Where does the name Château Montrose come from?", a: "A hill covered in pink heather", x: ["A rose garden", "A red rocky mountain", "The founder’s daughter’s name"] },
      { q: "Who bought Château Montrose in 2006?", a: "The Bouygues brothers", x: ["The Wertheimer brothers", "The Delon family", "The Cazes family"] },
    ],
  },
  bx_kirwan: {
    producer: "Famille Schÿler",
    fact: "Named after Irishman Mark Kirwan, who developed the estate in the 18th century. The Bordeaux négociant Schÿler family has owned it since 1925.",
    quiz: [
      { q: "What is Château Kirwan’s rank in the 1855 Médoc classification?", a: "Third Growth", x: ["Second Growth", "Fourth Growth", "Fifth Growth"] },
    ],
  },
  bx_dissan: {
    producer: "Famille Cruse & Jacky Lorenzetti",
    fact: "A moated 17th-century castle. Its label carries a Latin motto meaning “for the tables of kings and the altars of the gods”.",
    quiz: [
      { q: "What does the Latin motto on the Château d'Issan label mean?", a: "For the tables of kings and the altars of the gods", x: ["God dwells in the vineyard", "Patience makes the wine", "Only the very best"] },
    ],
  },
  bx_lagrange: {
    producer: "Suntory",
    fact: "A Saint-Julien Third Growth bought in 1983 by Japan’s Suntory, which completely renovated its vineyards and cellars.",
    quiz: [
      { q: "Which Japanese company bought Château Lagrange in 1983?", a: "Suntory", x: ["Kirin", "Asahi", "Sapporo"] },
    ],
  },
  bx_langoabarton: {
    producer: "Famille Barton",
    fact: "An 18th-century château bought by Hugh Barton in 1821. Léoville Barton is also made in its cellars.",
    quiz: [
      { q: "Which Second Growth is also made in the Château Langoa Barton cellars?", a: "Château Léoville Barton", x: ["Château Léoville Poyferré", "Château Gruaud Larose", "Château Ducru-Beaucaillou"] },
    ],
  },
  bx_giscours: {
    producer: "Albada Jelgersma family",
    fact: "A vast estate covering several hundred hectares including woods and meadows. It has been run since 1995 by the family of Dutch businessman Eric Albada Jelgersma.",
    quiz: [
      { q: "What nationality is the Albada Jelgersma family, who have run Château Giscours since 1995?", a: "Dutch", x: ["Belgian", "Swiss", "British"] },
      { q: "Which Margaux château is run by the same family as Château Giscours?", a: "Château du Tertre", x: ["Château Dauzac", "Château Pouget", "Château Ferrière"] },
    ],
  },
  bx_malescot: {
    producer: "Famille Zuger",
    fact: "Its name combines Simon Malescot, a 17th-century royal legal counsellor, and the 19th-century owner Comte de Saint-Exupéry. The Zuger family has run it since 1955.",
    quiz: [
      { q: "What is the best-known work of the author from the same family as the Comte de Saint-Exupéry of Château Malescot St. Exupéry?", a: "The Little Prince", x: ["The Stranger", "Les Misérables", "The Three Musketeers"] },
    ],
  },
  bx_boydcantenac: {
    producer: "Famille Guillemet",
    fact: "Named after Jacques Boyd, who owned the land in the 18th century. The Guillemet family runs it together with the Fourth Growth Château Pouget.",
    quiz: [
      { q: "Which Fourth Growth is run by the same family as Château Boyd-Cantenac?", a: "Château Pouget", x: ["Château Talbot", "Château Saint-Pierre", "Château Lafon-Rochet"] },
    ],
  },
  bx_cantenacbrown: {
    producer: "Château Cantenac Brown",
    fact: "Built by Scottish-rooted wine merchant John Lewis Brown in English Tudor style, a rare sight in the Médoc.",
    quiz: [
      { q: "In what architectural style is Château Cantenac Brown built?", a: "English Tudor style", x: ["Neoclassical style", "Indian pagoda style", "Italian Renaissance style"] },
    ],
  },
  bx_palmer: {
    producer: "Sichel & Mähler-Besse families",
    fact: "Named after British general Charles Palmer, a veteran of the Napoleonic Wars, who bought it in 1814. A Third Growth that sells for more than many Second Growths.",
    quiz: [
      { q: "What nationality was Charles Palmer, who gave his name to Château Palmer?", a: "British", x: ["Irish", "Dutch", "American"] },
      { q: "What is the signature colour scheme of the Château Palmer label?", a: "Gold on black", x: ["Red on white", "Silver on blue", "Gold on green"] },
    ],
  },
  bx_lalagune: {
    producer: "Famille Frey",
    fact: "The first Grand Cru Classé you meet heading north from Bordeaux city into the Médoc. Since 2000 it has belonged to the Frey family, who also own Paul Jaboulet Aîné in the Rhône.",
    quiz: [
      { q: "Which Rhône winery is run by the Frey family, owners of Château La Lagune?", a: "Paul Jaboulet Aîné", x: ["Guigal", "Chapoutier", "Château de Beaucastel"] },
    ],
  },
  bx_desmirail: {
    producer: "Famille Lurton",
    fact: "A Margaux Third Growth run by the great Bordeaux wine family, the Lurtons. Its vineyards were once scattered and only the name survived, before it was revived.",
    quiz: [
      { q: "What is Château Desmirail’s rank in the 1855 Médoc classification?", a: "Third Growth", x: ["Second Growth", "Fourth Growth", "Fifth Growth"] },
    ],
  },
  bx_calonsegur: {
    producer: "Château Calon Ségur",
    fact: "The Marquis de Ségur, who owned Lafite and Latour, reportedly said “my heart is at Calon”, which is why a heart is drawn on the label.",
    quiz: [
      { q: "What symbol is drawn on the Château Calon Ségur label?", a: "A heart", x: ["A lion", "A bell", "A crown"] },
      { q: "In the Calon Ségur heart story, which First Growths did the Marquis de Ségur also own?", a: "Lafite and Latour", x: ["Margaux and Haut-Brion", "Mouton and Haut-Brion", "Margaux and Mouton"] },
    ],
  },
  bx_ferriere: {
    producer: "Claire Villars Lurton",
    fact: "A Margaux Third Growth and one of the smallest châteaux in the 1855 classification. Run by Claire Villars Lurton, it is farmed biodynamically.",
    quiz: [
      { q: "What is Château Ferrière’s rank in the 1855 Médoc classification?", a: "Third Growth", x: ["Second Growth", "Fourth Growth", "Fifth Growth"] },
    ],
  },
  bx_marquisdalesme: {
    producer: "Famille Perrodo",
    fact: "It was originally called “Marquis d’Alesme Becker”. After the Perrodo family bought it in 2006, they dropped “Becker” and relaunched it.",
    quiz: [
      { q: "What was Château Marquis d'Alesme’s former name?", a: "Marquis d’Alesme Becker", x: ["Marquis de Terme", "Malescot St. Exupéry", "Rauzan-Gassies"] },
    ],
  },
  bx_saintpierre: {
    producer: "Domaines Henri Martin",
    fact: "A Fourth Growth bought in 1982 by Henri Martin, a former mayor of Saint-Julien. The same family runs Château Gloria.",
    quiz: [
      { q: "Which Saint-Julien wine is run by the same family as Château Saint-Pierre?", a: "Château Gloria", x: ["Château Talbot", "Château Beychevelle", "Château Lagrange"] },
    ],
  },
  bx_talbot: {
    producer: "Famille Bignon-Cordier",
    fact: "Said to be named after English general John Talbot, killed at the Battle of Castillon at the end of the Hundred Years’ War. Its white wine, “Caillou Blanc”, is also famous.",
    quiz: [
      { q: "In which war did John Talbot, the English general said to have named Château Talbot, fight?", a: "The Hundred Years’ War", x: ["The Thirty Years’ War", "The Wars of the Roses", "The Napoleonic Wars"] },
      { q: "What is Château Talbot’s white wine called?", a: "Caillou Blanc", x: ["Pavillon Blanc", "Aile d’Argent", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_branaireducru: {
    producer: "Famille Maroteaux",
    fact: "A Saint-Julien Fourth Growth facing Château Beychevelle across the road. The Maroteaux family has run it since 1988.",
    quiz: [
      { q: "What is Château Branaire-Ducru’s rank in the 1855 Médoc classification?", a: "Fourth Growth", x: ["Second Growth", "Third Growth", "Fifth Growth"] },
    ],
  },
  bx_duhartmilon: {
    producer: "Domaines Barons de Rothschild (Lafite)",
    fact: "A Pauillac Fourth Growth next to Lafite Rothschild, bought and revived in 1962 by Lafite’s Rothschild family.",
    quiz: [
      { q: "Who bought Château Duhart-Milon in 1962?", a: "The Rothschilds of Lafite Rothschild", x: ["The Rothschilds of Mouton Rothschild", "AXA Millésimes", "The Cazes family"] },
    ],
  },
  bx_pouget: {
    producer: "Famille Guillemet",
    fact: "A small Margaux Fourth Growth that the Guillemet family runs together with the Third Growth Boyd-Cantenac.",
    quiz: [
      { q: "Which Third Growth is run by the same family as Château Pouget?", a: "Château Boyd-Cantenac", x: ["Château Cantenac Brown", "Château Kirwan", "Château d'Issan"] },
    ],
  },
  bx_latourcarnet: {
    producer: "Bernard Magrez",
    fact: "A medieval castle that still has its moat and old watchtower. Wine entrepreneur Bernard Magrez bought it in 2000.",
    quiz: [
      { q: "Who owns both Château La Tour Carnet and Château Pape Clément?", a: "Bernard Magrez", x: ["Michel Rolland", "Jean-Luc Thunevin", "Gérard Perse"] },
    ],
  },
  bx_lafonrochet: {
    producer: "Château Lafon-Rochet",
    fact: "A Saint-Estèphe Fourth Growth bought and revived by the Tesseron family in 1960. Its château and label are painted bright yellow, so it stands out.",
    quiz: [
      { q: "What colour defines Château Lafon-Rochet’s building and label?", a: "Yellow", x: ["Blue", "Pink", "Green"] },
    ],
  },
  bx_beychevelle: {
    producer: "Château Beychevelle",
    fact: "Named after passing ships lowering their sails (“baisse voile”) in salute to the Duke of Épernon, the admiral. A ship is drawn on the label too.",
    quiz: [
      { q: "Which action gave Château Beychevelle its name?", a: "Lowering the sails", x: ["Raising the anchor", "Ringing the bell", "Waving a flag"] },
      { q: "What is drawn on the Château Beychevelle label?", a: "A ship", x: ["A lion", "A heart", "A bell"] },
    ],
  },
  bx_prieurelichine: {
    producer: "Groupe Ballande",
    fact: "A château built on the site of an old Benedictine priory (“prieuré”). Alexis Lichine bought it in 1951 and added his own name.",
    quiz: [
      { q: "What does “Prieuré” in Château Prieuré-Lichine mean?", a: "A priory", x: ["A fortress", "A mill", "A market"] },
      { q: "Who gave his name to Château Prieuré-Lichine?", a: "Alexis Lichine", x: ["Robert Mondavi", "Émile Peynaud", "Hugh Barton"] },
    ],
  },
  bx_marquisdeterme: {
    producer: "Famille Sénéclauze",
    fact: "A Margaux Fourth Growth that keeps the name of its 18th-century owner, the Marquis de Terme. The Sénéclauze family has owned it since 1935.",
    quiz: [
      { q: "What is Château Marquis de Terme’s rank in the 1855 Médoc classification?", a: "Fourth Growth", x: ["Second Growth", "Third Growth", "Fifth Growth"] },
    ],
  },
  bx_pontetcanet: {
    producer: "Famille Tesseron",
    fact: "A Pauillac Fifth Growth that went biodynamic early and ploughs its vineyards with horses. The Tesseron family has owned it since 1975.",
    quiz: [
      { q: "What does Château Pontet-Canet use instead of tractors to plough its vineyards?", a: "Horses", x: ["Oxen", "Donkeys", "Robots"] },
      { q: "Which family has owned Château Pontet-Canet since 1975?", a: "The Tesseron family", x: ["The Cazes family", "The Borie family", "The Delon family"] },
    ],
  },
  bx_batailley: {
    producer: "Famille Castéja",
    fact: "Said to be named after a Hundred Years’ War battle fought here. It was split from Haut-Batailley in 1942 and is run by the Castéja family.",
    quiz: [
      { q: "Which neighbouring Fifth Growth split off from Château Batailley?", a: "Château Haut-Batailley", x: ["Château Grand-Puy-Lacoste", "Château Lynch-Moussas", "Château d'Armailhac"] },
    ],
  },
  bx_hautbatailley: {
    producer: "Famille Cazes",
    fact: "A Pauillac Fifth Growth split from the Batailley estate in 1942. In 2017 it was bought by the Cazes family, owners of Lynch-Bages.",
    quiz: [
      { q: "Which family bought Château Haut-Batailley in 2017?", a: "The Cazes family", x: ["The Tesseron family", "The Castéja family", "The Delon family"] },
    ],
  },
  bx_grandpuylacoste: {
    producer: "Famille Borie",
    fact: "“Puy” means hill: it sits on a gravel rise in inland Pauillac. The Borie family has run it since 1978.",
    quiz: [
      { q: "What does “Puy” in Château Grand-Puy-Lacoste mean?", a: "Hill", x: ["Well", "Forest", "River"] },
    ],
  },
  bx_grandpuyducasse: {
    producer: "Château Grand-Puy Ducasse",
    fact: "A Fifth Growth whose vineyards are scattered across Pauillac, while its château sits on the riverside in Pauillac village.",
    quiz: [
      { q: "What is Château Grand-Puy Ducasse’s rank in the 1855 Médoc classification?", a: "Fifth Growth", x: ["Second Growth", "Third Growth", "Fourth Growth"] },
    ],
  },
  bx_lynchbages: {
    producer: "Famille Cazes",
    fact: "Named after the Irish-rooted Lynch family who once owned it. Run by the Cazes family since 1939, it earned the nickname “the poor man’s Latour”.",
    quiz: [
      { q: "What is Château Lynch-Bages’s nickname?", a: "The poor man’s Latour", x: ["The Versailles of the Médoc", "The Maharaja of Saint-Estèphe", "The jewel of Pomerol"] },
      { q: "Which family has run Château Lynch-Bages since 1939?", a: "The Cazes family", x: ["The Lynch family", "The Borie family", "The Tesseron family"] },
    ],
  },
  bx_lynchmoussas: {
    producer: "Famille Castéja",
    fact: "Like Lynch-Bages, an estate once owned by the Irish-rooted Lynch family. Today it is run by the Castéja family, who also run Château Batailley.",
    quiz: [
      { q: "Which Fifth Growth does the Castéja family run alongside Château Lynch-Moussas?", a: "Château Batailley", x: ["Château Haut-Batailley", "Château Clerc Milon", "Château Pédesclaux"] },
    ],
  },
  bx_dauzac: {
    producer: "Château Dauzac",
    fact: "A Margaux Fifth Growth famous as the place where “Bordeaux mixture” (copper sulphate and lime), a remedy for vine mildew, was first tested in the late 19th century.",
    quiz: [
      { q: "Which vineyard treatment is said to have been first tested at Château Dauzac?", a: "Bordeaux mixture", x: ["Lime sulphur", "DDT", "Potassium permanganate"] },
    ],
  },
  bx_darmailhac: {
    producer: "Baron Philippe de Rothschild",
    fact: "Bought by Baron Philippe de Rothschild in 1933. After being renamed several times, including “Mouton Baron Philippe”, it got back its original name d’Armailhac in 1989.",
    quiz: [
      { q: "Which name did Château d'Armailhac once use?", a: "Château Mouton Baron Philippe", x: ["Château Mouton Cadet", "Château Petit Mouton", "Château Clerc Mouton"] },
    ],
  },
  bx_dutertre: {
    producer: "Albada Jelgersma family",
    fact: "It sits on a hill (“tertre”) in the village of Arsac, in the west of the Margaux appellation. It is run by the Albada Jelgersma family, who also run Giscours.",
    quiz: [
      { q: "Which Margaux Third Growth is run by the same family as Château du Tertre?", a: "Château Giscours", x: ["Château Kirwan", "Château d'Issan", "Château Palmer"] },
    ],
  },
  bx_hautbagesliberal: {
    producer: "Claire Villars Lurton",
    fact: "It keeps the name of its 18th-century owners, the Libéral family. Claire Villars Lurton runs it along with the Third Growth Ferrière, farming biodynamically.",
    quiz: [
      { q: "Which Margaux Third Growth is run by the same person as Château Haut-Bages Libéral?", a: "Château Ferrière", x: ["Château Desmirail", "Château Kirwan", "Château d'Issan"] },
    ],
  },
  bx_pedesclaux: {
    producer: "Jacky Lorenzetti",
    fact: "Founded in 1810 by Bordeaux wine broker Pierre Urbain Pédesclaux. Jacky Lorenzetti bought it in 2009 and gave it a modern glass-clad building.",
    quiz: [
      { q: "Which businessman bought and renovated Château Pédesclaux in 2009?", a: "Jacky Lorenzetti", x: ["Bernard Magrez", "Michel Reybier", "François Pinault"] },
    ],
  },
  bx_belgrave: {
    producer: "Dourthe",
    fact: "A Fifth Growth in the Haut-Médoc village of Saint-Laurent, run by Bordeaux négociant Dourthe.",
    quiz: [
      { q: "What is Château Belgrave’s rank in the 1855 Médoc classification?", a: "Fifth Growth", x: ["Second Growth", "Third Growth", "Fourth Growth"] },
    ],
  },
  bx_camensac: {
    producer: "Château Camensac",
    fact: "A Fifth Growth in the Haut-Médoc village of Saint-Laurent. With its neighbours Belgrave and La Tour Carnet, it is one of Saint-Laurent’s three classified châteaux.",
    quiz: [
      { q: "Which Fourth Growth is in the same village of Saint-Laurent as Château Camensac?", a: "Château La Tour Carnet", x: ["Château Talbot", "Château Saint-Pierre", "Château Pouget"] },
    ],
  },
  bx_coslabory: {
    producer: "Famille Audoy",
    fact: "A small Saint-Estèphe Fifth Growth right next to Cos d’Estournel, run by the Audoy family.",
    quiz: [
      { q: "Which Saint-Estèphe Second Growth borders Château Cos Labory?", a: "Château Cos d'Estournel", x: ["Château Montrose", "Château Calon Ségur", "Château Lafon-Rochet"] },
    ],
  },
  bx_clercmilon: {
    producer: "Baron Philippe de Rothschild",
    fact: "A Pauillac Fifth Growth neighbouring Mouton Rothschild and Lafite Rothschild. Baron Philippe de Rothschild bought it in 1970.",
    quiz: [
      { q: "Who bought Château Clerc Milon in 1970?", a: "Baron Philippe de Rothschild", x: ["Eric de Rothschild", "Jean-Michel Cazes", "Henri Martin"] },
    ],
  },
  bx_croizetbages: {
    producer: "Famille Quié",
    fact: "Its name joins the Croizet brothers, who owned the land in the 18th century, and the hamlet of Bages. It is run by the Quié family, who also run Rauzan-Gassies.",
    quiz: [
      { q: "Which Margaux Second Growth is run by the same family as Château Croizet-Bages?", a: "Château Rauzan-Gassies", x: ["Château Rauzan-Ségla", "Château Brane-Cantenac", "Château Lascombes"] },
    ],
  },
  bx_cantemerle: {
    producer: "Château Cantemerle",
    fact: "The name is read as “the blackbird (merle) sings”. It was added late to the 1855 list, taking the very last place among the Fifth Growths.",
    quiz: [
      { q: "How did Château Cantemerle enter the 1855 classification?", a: "It was added after the list was published", x: ["It was demoted from First Growth", "It was drawn by lot", "It rose in the 1973 revision"] },
    ],
  },
  bx_lepin: {
    producer: "Thienpont family",
    fact: "A tiny vineyard whose first vintage was released in 1979 by the Belgian Thienpont family. The name comes from a single pine tree that stood beside it.",
    quiz: [
      { q: "Where does the name Le Pin come from?", a: "A lone pine tree by the vineyard", x: ["The founder’s name", "An old monastery", "A small stone bridge"] },
      { q: "What nationality is the Thienpont family, owners of Le Pin?", a: "Belgian", x: ["Dutch", "Swiss", "Luxembourgish"] },
    ],
  },
  bx_lafleur: {
    producer: "Famille Guinaudeau",
    fact: "A small vineyard bordering Pétrus, tended like a family farm by the Guinaudeau family. It has a high share of Cabernet Franc for a Pomerol.",
    quiz: [
      { q: "Which family tends Château Lafleur?", a: "The Guinaudeau family", x: ["The Moueix family", "The Thienpont family", "The Durantou family"] },
    ],
  },
  bx_vcc: {
    producer: "Thienpont family",
    fact: "A great Pomerol estate bought in 1924 by the Belgian Thienpont family. Unusually for Pomerol, it has a high share of Cabernet Franc and Cabernet Sauvignon.",
    quiz: [
      { q: "Which family bought Vieux Château Certan in 1924?", a: "The Thienpont family", x: ["The Moueix family", "The Guinaudeau family", "The Nicolas family"] },
    ],
  },
  bx_levangile: {
    producer: "Domaines Barons de Rothschild (Lafite)",
    fact: "A Pomerol château lying between Pétrus and Cheval Blanc. Lafite’s Rothschild family bought a stake in 1990 and runs it.",
    quiz: [
      { q: "What does “Évangile” in Château L'Évangile mean?", a: "Gospel", x: ["Angel", "Church", "Pilgrim"] },
    ],
  },
  bx_laconseillante: {
    producer: "Famille Nicolas",
    fact: "Named after its 18th-century female owner, Catherine Conseillan. The Nicolas family has kept it since 1871; its violet capsule and label lettering are its trademark.",
    quiz: [
      { q: "What colour is Château La Conseillante’s signature capsule?", a: "Violet", x: ["Gold", "Black", "White"] },
    ],
  },
  bx_trotanoy: {
    producer: "Jean-Pierre Moueix",
    fact: "The name reportedly comes from “trop ennuie” (too much trouble), because the hard soil was so tiring to work. Jean-Pierre Moueix bought it in 1953.",
    quiz: [
      { q: "Which négociant bought Château Trotanoy in 1953?", a: "Jean-Pierre Moueix", x: ["Dourthe", "Cordier", "Baron Philippe de Rothschild"] },
    ],
  },
  bx_egliseclinet: {
    producer: "Famille Durantou",
    fact: "Named after its vineyard beside the Pomerol church. Denis Durantou, who ran it from 1983, raised it to the top rank of Pomerol.",
    quiz: [
      { q: "What does “Église” in Château L'Église-Clinet mean?", a: "Church", x: ["Fortress", "Well", "Square"] },
    ],
  },
  bx_clinet: {
    producer: "Famille Laborde",
    fact: "A Pomerol château bought by the Laborde family in 1998 and run by their son Ronan Laborde. It blends Cabernet Sauvignon into its Merlot.",
    quiz: [
      { q: "Which family runs Château Clinet?", a: "The Laborde family", x: ["The Durantou family", "The Nicolas family", "The Thienpont family"] },
    ],
  },
  bx_gazin: {
    producer: "Famille de Baillencourt",
    fact: "In the Middle Ages this land belonged to the Knights of St John of Jerusalem (the Hospitallers), whose cross remains on the label. The de Baillencourt family has owned it for generations.",
    quiz: [
      { q: "Which former owner does the cross on the Château Gazin label refer to?", a: "The Knights of St John (Hospitallers)", x: ["The Papacy", "The Archbishop of Bordeaux", "The English Crown"] },
    ],
  },
  bx_nenin: {
    producer: "Famille Delon",
    fact: "A Pomerol château bought and revitalised in 1997 by the Delon family of Léoville Las Cases.",
    quiz: [
      { q: "Which family bought Château Nénin in 1997?", a: "The Delon family", x: ["The Thienpont family", "The Moueix family", "The Laborde family"] },
    ],
  },
  bx_bonpasteur: {
    producer: "Château Le Bon Pasteur",
    fact: "A Pomerol château tended for generations by the family of world-famous consultant winemaker Michel Rolland. The name means “the good shepherd”.",
    quiz: [
      { q: "Which consultant winemaker is closely tied to Château Le Bon Pasteur?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  bx_lafleurpetrus: {
    producer: "Jean-Pierre Moueix",
    fact: "It lies between its neighbours Lafleur and Pétrus, and joins their two names. It is owned by the Jean-Pierre Moueix family.",
    quiz: [
      { q: "Which négociant owns Château La Fleur-Pétrus?", a: "Jean-Pierre Moueix", x: ["The Thienpont family", "The Guinaudeau family", "Domaine Clarence Dillon"] },
    ],
  },
  bx_ausone: {
    producer: "Famille Vauthier",
    fact: "A great Saint-Émilion estate named after the 4th-century Roman poet Ausonius. Ahead of the 2022 revision, it withdrew from the classification along with Cheval Blanc.",
    quiz: [
      { q: "Who is Château Ausone named after?", a: "The Roman poet Ausonius", x: ["The Roman emperor Hadrian", "Saint Émilion", "Charlemagne"] },
      { q: "Which family runs Château Ausone?", a: "The Vauthier family", x: ["The Moueix family", "The de Boüard family", "The Manoncourt family"] },
    ],
  },
  bx_angelus: {
    producer: "Famille de Boüard de Laforest",
    fact: "Named because the Angelus bells of three churches can be heard from the vineyard; a golden bell is drawn on the label. It rose to the top “A” rank in 2012.",
    quiz: [
      { q: "What is the symbol on the Château Angélus label?", a: "A bell", x: ["An angel", "A key", "A lily"] },
      { q: "Which château rose to Saint-Émilion’s top “A” rank alongside Château Angélus in 2012?", a: "Château Pavie", x: ["Château Figeac", "Château Canon", "Château Troplong Mondot"] },
    ],
  },
  bx_pavie: {
    producer: "Gérard Perse",
    fact: "Gérard Perse bought it in 1998 and invested heavily; in 2012 it rose with Angélus to Saint-Émilion’s top “A” rank.",
    quiz: [
      { q: "Who bought Château Pavie in 1998?", a: "Gérard Perse", x: ["Hubert de Boüard", "Alain Vauthier", "Bernard Magrez"] },
    ],
  },
  bx_figeac: {
    producer: "Famille Manoncourt",
    fact: "Unusually for Saint-Émilion, the two Cabernets make up more than half the blend. Neighbouring Cheval Blanc was land split off from the Figeac estate in the 19th century.",
    quiz: [
      { q: "Which famous château was created from part of the Figeac estate in the 19th century?", a: "Château Cheval Blanc", x: ["Château Ausone", "Château Angélus", "Château Pavie"] },
      { q: "In what year did Château Figeac reach Saint-Émilion’s top “A” rank?", a: "2022", x: ["2012", "1996", "2006"] },
    ],
  },
  bx_canon: {
    producer: "Chanel (Wertheimer family)",
    fact: "A Saint-Émilion Premier Grand Cru Classé named after its 18th-century owner, Jacques Kanon. The Wertheimer family, owners of Chanel, bought it in 1996.",
    quiz: [
      { q: "Who owns both Château Canon and Margaux’s Rauzan-Ségla?", a: "Chanel (Wertheimer family)", x: ["LVMH", "AXA Millésimes", "Louis Roederer"] },
    ],
  },
  bx_belairmonange: {
    producer: "Jean-Pierre Moueix",
    fact: "In 2008 the Moueix family bought the old Château Bélair and renamed it in honour of Anne-Adèle Monange of their family. In 2012 it absorbed neighbouring Château Magdelaine.",
    quiz: [
      { q: "Which Moueix château was merged into Château Bélair-Monange in 2012?", a: "Château Magdelaine", x: ["Château Canon", "Château Troplong Mondot", "Clos Fourtet"] },
    ],
  },
  bx_troplongmondot: {
    producer: "SCOR",
    fact: "It sits atop one of Saint-Émilion’s highest limestone hills. It became a Premier Grand Cru Classé in 2006, and the reinsurer SCOR bought it in 2017.",
    quiz: [
      { q: "Who bought Château Troplong Mondot in 2017?", a: "The reinsurer SCOR", x: ["AXA Millésimes", "Chanel", "Suntory"] },
    ],
  },
  bx_valandraud: {
    producer: "Jean-Luc Thunevin",
    fact: "The original “garage wine”, first made in a small shed by Jean-Luc Thunevin and Murielle Andraud. First vintage 1991; it became a Premier Grand Cru Classé in 2012.",
    quiz: [
      { q: "What are wines like Château Valandraud, made in tiny amounts in small sheds and a sensation in the 1990s, called?", a: "Garage wines", x: ["Natural wines", "Super Tuscans", "Orange wines"] },
      { q: "Who created Château Valandraud?", a: "Jean-Luc Thunevin", x: ["Gérard Perse", "Michel Rolland", "Hubert de Boüard"] },
    ],
  },
  bx_lamondotte: {
    producer: "Comtes von Neipperg",
    fact: "Its first vintage came in 1996 from a small vineyard of the Counts von Neipperg. In the 2012 revision it went straight to Premier Grand Cru Classé.",
    quiz: [
      { q: "Which family owns La Mondotte?", a: "The von Neipperg family", x: ["The Vauthier family", "The Moueix family", "The Bécot family"] },
    ],
  },
  bx_tertreroteboeuf: {
    producer: "François Mitjavile",
    fact: "Means “the hill where the ox belches”: the slope was so steep that ploughing oxen panted. It sells at top-tier prices without any classification.",
    quiz: [
      { q: "What does the name Château Tertre Rôteboeuf mean?", a: "The hill where the ox belches", x: ["The hill of roast beef", "The field of the red bull", "The slope where the farmer rests"] },
    ],
  },
  bx_beausejourbecot: {
    producer: "Famille Bécot",
    fact: "Demoted in the 1980s revision for merging in unclassified plots, it regained Premier Grand Cru Classé status in 1996. The Bécot family runs it.",
    quiz: [
      { q: "Which rank did Château Beau-Séjour Bécot lose in the 1980s and regain in 1996?", a: "Premier Grand Cru Classé", x: ["Cru Bourgeois", "Cru Classé de Graves", "Second Growth of 1855"] },
    ],
  },
  bx_closfourtet: {
    producer: "Famille Cuvelier",
    fact: "It lies just outside Saint-Émilion’s town walls, with cellars carved into old limestone quarries underground. The Cuvelier family bought it in 2001.",
    quiz: [
      { q: "Which family bought Clos Fourtet in 2001?", a: "The Cuvelier family", x: ["The Lurton family", "The Bécot family", "The Perse family"] },
    ],
  },
  bx_larcisducasse: {
    producer: "Château Larcis Ducasse",
    fact: "It comes from terraced vineyards on a south-facing slope next to Pavie. It rose to Premier Grand Cru Classé in the 2012 revision.",
    quiz: [
      { q: "In what year did Château Larcis Ducasse become a Premier Grand Cru Classé?", a: "2012", x: ["1996", "2006", "1955"] },
    ],
  },
  bx_paviemacquin: {
    producer: "Famille Corre-Macquin",
    fact: "Named after Albert Macquin, who spread grafting onto American rootstock in Saint-Émilion after phylloxera. It became a Premier Grand Cru Classé in 2006.",
    quiz: [
      { q: "What was Albert Macquin, namesake of Château Pavie Macquin, known for?", a: "Spreading grafting onto American rootstock after phylloxera", x: ["Inventing Bordeaux mixture", "Drawing up the 1855 classification", "First bottling wine at the château"] },
    ],
  },
  bx_canonlagaffeliere: {
    producer: "Comtes von Neipperg",
    fact: "A Saint-Émilion château owned by the Counts von Neipperg since 1971. It became a Premier Grand Cru Classé in 2012.",
    quiz: [
      { q: "Which family owns both Château Canon-la-Gaffelière and La Mondotte?", a: "The von Neipperg family", x: ["The Wertheimer family", "The Moueix family", "The Vauthier family"] },
    ],
  },
  bx_missionhautbrion: {
    producer: "Domaine Clarence Dillon",
    fact: "Named after the priests of a mission (the Lazarists) who tended the land in the 17th century. In 1983 it was bought by the Dillon family, owners of Haut-Brion across the road.",
    quiz: [
      { q: "Who bought Château La Mission Haut-Brion in 1983?", a: "Domaine Clarence Dillon", x: ["Bernard Magrez", "The Cathiard family", "Louis Roederer"] },
      { q: "What does “Mission” in Château La Mission Haut-Brion refer to?", a: "The priests of an old mission", x: ["A military expedition", "A diplomatic delegation", "An exploration party"] },
    ],
  },
  bx_papeclement: {
    producer: "Bernard Magrez",
    fact: "A vineyard once owned by Bertrand de Goth, Archbishop of Bordeaux, who became Pope Clement V in 1305. It is now run by Bernard Magrez.",
    quiz: [
      { q: "Where did Pope Clement V, namesake of Château Pape Clément, move the papacy?", a: "Avignon", x: ["Bordeaux", "Lyon", "Reims"] },
    ],
  },
  bx_smithhautlafitte: {
    producer: "Famille Cathiard",
    fact: "It keeps the name of 18th-century Scottish merchant George Smith. Former skiers Daniel and Florence Cathiard bought it in 1990, and their daughter created the grape-based skincare brand Caudalie.",
    quiz: [
      { q: "Which skincare brand did the Cathiard family’s daughter of Château Smith Haut Lafitte create?", a: "Caudalie", x: ["L’Occitane", "Nuxe", "Biotherm"] },
      { q: "What was the former profession of the Cathiards, who bought Château Smith Haut Lafitte in 1990?", a: "Skiers", x: ["Sailors", "Cyclists", "Tennis players"] },
    ],
  },
  bx_chevalier: {
    producer: "Famille Bernard",
    fact: "A great Pessac-Léognan estate in a clearing in a pine forest, classified in Graves for both red and white. The Bernard family has run it since 1983.",
    quiz: [
      { q: "Which Domaine de Chevalier wines are classified in Graves?", a: "Both red and white", x: ["Red only", "White only", "Sweet wine only"] },
    ],
  },
  bx_hautbailly: {
    producer: "Wilmers family",
    fact: "American banker Robert Wilmers bought it in 1998. It preserves an old plot of vines over 100 years old, with several varieties growing mixed together.",
    quiz: [
      { q: "What nationality was Robert Wilmers, who bought Château Haut-Bailly in 1998?", a: "American", x: ["British", "Belgian", "Hong Kong"] },
    ],
  },
  bx_malartic: {
    producer: "Bonnie family",
    fact: "Named after the family of the 18th-century admiral Comte de Malartic, and a sailing ship is drawn on the label. The Belgian Bonnie family bought it in 1997.",
    quiz: [
      { q: "What nationality is the Bonnie family, who bought Château Malartic-Lagravière in 1997?", a: "Belgian", x: ["Dutch", "Swiss", "American"] },
    ],
  },
  bx_carbonnieux: {
    producer: "Famille Perrin",
    fact: "Famous for the story that Benedictine monks sold its white wine to an Ottoman sultan, who forbade alcohol, as “Carbonnieux mineral water”.",
    quiz: [
      { q: "What name did Château Carbonnieux’s monks reportedly use when selling wine to the Ottoman sultan?", a: "Carbonnieux mineral water", x: ["Carbonnieux holy water", "Carbonnieux herbal tea", "Carbonnieux grape juice"] },
    ],
  },
  bx_lescarmes: {
    producer: "Patrice Pichet",
    fact: "The name recalls the vineyard of the old Carmelite friars. Patrice Pichet bought it in 2010 and built a ship-shaped cellar designed by Philippe Starck.",
    quiz: [
      { q: "Which designer created the new cellar at Château Les Carmes Haut-Brion?", a: "Philippe Starck", x: ["Jean Nouvel", "Frank Gehry", "Tadao Ando"] },
    ],
  },
  bx_suduiraut: {
    producer: "AXA Millésimes",
    fact: "A Sauternes First Growth bordering Yquem. Its gardens are said to have been designed by Le Nôtre, creator of the gardens of Versailles, and AXA Millésimes has owned it since 1992.",
    quiz: [
      { q: "Who has owned Château Suduiraut since 1992?", a: "AXA Millésimes", x: ["LVMH", "Domaines Barons de Rothschild", "Domaine Clarence Dillon"] },
    ],
  },
  bx_rieussec: {
    producer: "Domaines Barons de Rothschild (Lafite)",
    fact: "A Sauternes First Growth bought in 1984 by Lafite’s Rothschild family, located in the village of Fargues next to Yquem.",
    quiz: [
      { q: "Who bought Château Rieussec in 1984?", a: "The Rothschilds of Lafite Rothschild", x: ["AXA Millésimes", "The Rothschilds of Mouton Rothschild", "LVMH"] },
    ],
  },
  bx_climens: {
    producer: "Château Climens",
    fact: "A First Growth known as “the Lord of Barsac”. It is made from 100% Sémillon and has been farmed biodynamically.",
    quiz: [
      { q: "What is Château Climens’s nickname?", a: "The Lord of Barsac", x: ["The Queen of Sauternes", "The Versailles of the Médoc", "The poor man’s Yquem"] },
    ],
  },
  bx_coutet: {
    producer: "Famille Baly",
    fact: "A Barsac First Growth that keeps a medieval fortified building. It is famous for “Cuvée Madame”, made in tiny amounts only in outstanding years.",
    quiz: [
      { q: "Which special cuvée does Château Coutet make in small amounts only in great years?", a: "Cuvée Madame", x: ["Cuvée Louise", "Réserve du Général", "Cuvée Prestige"] },
    ],
  },
  bx_guiraud: {
    producer: "Château Guiraud",
    fact: "A certified-organic Sauternes First Growth. In 2006 it was bought by a group including Robert Peugeot of the Peugeot family and Olivier Bernard of Domaine de Chevalier.",
    quiz: [
      { q: "Which car-making family took part in buying Château Guiraud in 2006?", a: "The Peugeot family", x: ["The Renault family", "The Citroën family", "The Michelin family"] },
    ],
  },
  bx_latourblanche: {
    producer: "French Ministry of Agriculture",
    fact: "In 1907 owner Daniel Iffla Osiris gave it to the state on condition that a school of viticulture and winemaking be founded. A school under the Ministry of Agriculture still runs it.",
    quiz: [
      { q: "Who owns Château La Tour Blanche?", a: "The French state (Ministry of Agriculture)", x: ["The University of Bordeaux", "The City of Bordeaux", "A Sauternes growers’ cooperative"] },
    ],
  },
  bx_lafauriepeyraguey: {
    producer: "Silvio Denz (Lalique)",
    fact: "In 2014 Silvio Denz, chairman of crystal brand Lalique, bought it and opened a Lalique hotel and restaurant inside the château.",
    quiz: [
      { q: "Which crystal brand teamed up with Château Lafaurie-Peyraguey?", a: "Lalique", x: ["Baccarat", "Swarovski", "Riedel"] },
    ],
  },
  bx_fargues: {
    producer: "Famille Lur Saluces",
    fact: "An estate held since the 15th century by the Lur Saluces family, long the owners of Yquem. Though unclassified, it is counted as a Sauternes second only to Yquem.",
    quiz: [
      { q: "Which Sauternes Superior First Growth did the Lur Saluces family of Château de Fargues own for a long time?", a: "Château d'Yquem", x: ["Château Suduiraut", "Château Climens", "Château Rieussec"] },
    ],
  },
  bx_sociandomallet: {
    producer: "Famille Gautreau",
    fact: "Négociant Jean Gautreau bought it in 1969 and raised it to the level of a classified growth. It stays out of the Cru Bourgeois selection and sells on its name alone.",
    quiz: [
      { q: "Who bought Château Sociando-Mallet in 1969 and built it up?", a: "Jean Gautreau", x: ["Henri Martin", "Jean-Michel Cazes", "Alexis Lichine"] },
    ],
  },
  bx_chassespleen: {
    producer: "Château Chasse-Spleen",
    fact: "Means “chases away the spleen” (melancholy), a name said to come from Byron or Baudelaire. It is considered a flagship of the Crus Bourgeois.",
    quiz: [
      { q: "What does the name Château Chasse-Spleen mean?", a: "Chasing away melancholy", x: ["The hunter’s rest", "The shining hill", "The windbreak forest"] },
    ],
  },
  bx_gloria: {
    producer: "Domaines Henri Martin",
    fact: "Saint-Julien mayor Henri Martin built it from the 1940s by buying plots from neighbouring classified châteaux one by one. Though unclassified, it is treated like a classified growth.",
    quiz: [
      { q: "Who founded Château Gloria?", a: "Henri Martin", x: ["Jean Gautreau", "Alexis Lichine", "Philippe de Rothschild"] },
    ],
  },
  bx_phelansegur: {
    producer: "Château Phélan Ségur",
    fact: "A Saint-Estèphe estate built up in the 19th century by Irishman Bernard Phelan. Though outside the classification, it is rated at Grand Cru Classé level.",
    quiz: [
      { q: "Where did Bernard Phelan, namesake of Château Phélan Ségur, come from?", a: "Ireland", x: ["Scotland", "England", "The Netherlands"] },
    ],
  },
  bx_potensac: {
    producer: "Famille Delon",
    fact: "A château in the northern Médoc run by the Delon family of Léoville Las Cases, known for quality well above its price.",
    quiz: [
      { q: "Which family runs Château Potensac?", a: "The Delon family", x: ["The Cazes family", "The Borie family", "The Cuvelier family"] },
    ],
  },
  bx_poujeaux: {
    producer: "Famille Cuvelier",
    fact: "Moulis’s leading château, bought in 2008 by the Cuvelier family, owners of Clos Fourtet in Saint-Émilion.",
    quiz: [
      { q: "Which family owns both Château Poujeaux and Saint-Émilion’s Clos Fourtet?", a: "The Cuvelier family", x: ["The Lurton family", "The Delon family", "The Moueix family"] },
    ],
  },
  bx_clarke: {
    producer: "Edmond de Rothschild Heritage",
    fact: "A Listrac château bought in 1973 by Baron Edmond de Rothschild, who replanted its vineyards.",
    quiz: [
      { q: "Who bought Château Clarke in 1973?", a: "Edmond de Rothschild", x: ["Philippe de Rothschild", "Eric de Rothschild", "Clarence Dillon"] },
    ],
  },
  bx_depez: {
    producer: "Louis Roederer",
    fact: "A Saint-Estèphe château bought in 1995 by Champagne house Louis Roederer, which later also bought Pichon Comtesse.",
    quiz: [
      { q: "Which Champagne house bought Château de Pez in 1995?", a: "Louis Roederer", x: ["Bollinger", "Veuve Clicquot", "Pol Roger"] },
    ],
  },
  bx_angludet: {
    producer: "Famille Sichel",
    fact: "A Margaux château bought by the Sichel family in 1961. The family is also a co-owner of the Third Growth Château Palmer.",
    quiz: [
      { q: "Which Third Growth is co-owned by the Sichel family, who run Château d'Angludet?", a: "Château Palmer", x: ["Château Giscours", "Château Kirwan", "Château d'Issan"] },
    ],
  },
  bx_ormesdepez: {
    producer: "Famille Cazes",
    fact: "A Saint-Estèphe château run since 1940 by the Cazes family, owners of Lynch-Bages.",
    quiz: [
      { q: "Which family runs Château Ormes de Pez?", a: "The Cazes family", x: ["The Delon family", "The Tesseron family", "The Borie family"] },
    ],
  },
  bx_carruades: {
    producer: "Château Lafite Rothschild",
    fact: "Lafite Rothschild’s second wine. The name comes from the vineyards on the “Carruades” slope, which were added to the Lafite estate.",
    quiz: [
      { q: "In the late 2000s, demand from which country mainly sent Carruades de Lafite prices soaring?", a: "China", x: ["Japan", "Russia", "India"] },
    ],
  },
  bx_pavillonrouge: {
    producer: "Château Margaux",
    fact: "Château Margaux’s second wine, first labelled “Pavillon Rouge” in 1908.",
    quiz: [
      { q: "Which Château Margaux white wine pairs with Pavillon Rouge du Château Margaux?", a: "Pavillon Blanc", x: ["Aile d’Argent", "Caillou Blanc", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_fortsdelatour: {
    producer: "Château Latour",
    fact: "Château Latour’s second wine, first made in 1966. Like Latour, it is released only once fully aged.",
    quiz: [
      { q: "What was the first vintage of Les Forts de Latour?", a: "1966", x: ["1945", "1982", "1990"] },
    ],
  },
  bx_petitmouton: {
    producer: "Château Mouton Rothschild",
    fact: "Mouton Rothschild’s second wine, first introduced in the 1990s. The same château’s white wine is “Aile d’Argent”.",
    quiz: [
      { q: "What white wine does the château behind Le Petit Mouton produce?", a: "Aile d’Argent", x: ["Pavillon Blanc", "Caillou Blanc", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_clarence: {
    producer: "Château Haut-Brion",
    fact: "A second wine renamed from “Bahans Haut-Brion” in 2007 in honour of Clarence Dillon, the American banker who bought Haut-Brion in 1935.",
    quiz: [
      { q: "What was Le Clarence de Haut-Brion’s former name?", a: "Bahans Haut-Brion", x: ["La Chapelle de la Mission", "Carruades de Haut-Brion", "Pavillon de Haut-Brion"] },
      { q: "Whom does Le Clarence de Haut-Brion honour?", a: "American banker Clarence Dillon", x: ["Pope Clement V", "King Charles II of England", "Napoleon III"] },
    ],
  },
  bx_alterego: {
    producer: "Château Palmer",
    fact: "Launched in 1998 to replace the former second wine “Réserve du Général”. As the name says, it is made separately as Palmer’s “other self”.",
    quiz: [
      { q: "What was Château Palmer’s second wine called before Alter Ego de Palmer?", a: "Réserve du Général", x: ["Pavillon Rouge", "Les Forts", "Clos du Marquis"] },
    ],
  },
  bx_petitcheval: {
    producer: "Château Cheval Blanc",
    fact: "Cheval Blanc’s second wine, first released in 1988.",
    quiz: [
      { q: "Who bought Château Cheval Blanc, maker of Le Petit Cheval, in 1998?", a: "Bernard Arnault and Albert Frère", x: ["François Pinault", "The Wertheimer brothers", "The Bouygues brothers"] },
    ],
  },
  bx_closdumarquis: {
    producer: "Château Léoville Las Cases",
    fact: "Long regarded as Léoville Las Cases’s second wine, since 2007 it has been made as a separate wine from its own distinct vineyards.",
    quiz: [
      { q: "Which wine replaced Clos du Marquis as Léoville Las Cases’s second wine from 2007?", a: "Le Petit Lion du Marquis de Las Cases", x: ["Les Forts de Latour", "Réserve de la Comtesse", "La Croix de Beaucaillou"] },
    ],
  },
  bx_pagodesdecos: {
    producer: "Château Cos d'Estournel",
    fact: "Cos d’Estournel’s second wine, named after the Eastern-style pagoda towers on the cellar roof.",
    quiz: [
      { q: "Where does the name Les Pagodes de Cos come from?", a: "The Eastern-style towers on the cellar roof", x: ["The founder’s travel journal of India", "The pine trees in the vineyard", "The village church bell tower"] },
    ],
  },
  bx_carillonangelus: {
    producer: "Château Angélus",
    fact: "Angélus’s second wine. A “carillon” is an instrument of many bells, linking it to Angélus, whose emblem is a bell.",
    quiz: [
      { q: "What is a “carillon”, as in Carillon d'Angélus?", a: "An instrument of many bells", x: ["A small vineyard", "A shepherd’s pipe", "A monastery garden"] },
    ],
  },
  bx_pavillonblanc: {
    producer: "Château Margaux",
    fact: "The Margaux appellation only covers red wine, so Château Margaux’s white is released as “AOC Bordeaux”. It is 100% Sauvignon Blanc.",
    quiz: [
      { q: "Why can’t Pavillon Blanc du Château Margaux use the Margaux appellation?", a: "Margaux AOC only covers red wine", x: ["Because it is a second wine", "Because it is not oak-aged", "Because it is made from bought grapes"] },
    ],
  },
  bx_moutoncadet: {
    producer: "Baron Philippe de Rothschild",
    fact: "Started in 1930 when Baron Philippe de Rothschild sold separately a poor vintage that could not be released as Mouton Rothschild. “Cadet” means youngest, referring to Philippe, the youngest son.",
    quiz: [
      { q: "What does “Cadet” in Mouton Cadet mean?", a: "The youngest child", x: ["The eldest son", "A knight", "A little sheep"] },
    ],
  },
  bx_montperat: {
    producer: "Château Mont-Pérat",
    fact: "A Bordeaux red that became hugely popular in Korea and Japan after the manga “Drops of God” likened it to the music of the rock band Queen.",
    quiz: [
      { q: "Which rock band was Château Mont-Pérat likened to in the manga “Drops of God”?", a: "Queen", x: ["The Beatles", "The Rolling Stones", "Led Zeppelin"] },
    ],
  },
};

export default T;
