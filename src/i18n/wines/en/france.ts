import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  fr_latache: {
    producer: "Domaine de la Romanée-Conti (DRC)",
    fact: "With Romanée-Conti, one of the two monopoles whose entire vineyard DRC owns alone. At just over 6 ha, it is more than three times the size of Romanée-Conti.",
    quiz: [
      { q: "What is it called when one domaine owns an entire vineyard, as with La Tâche?", a: "Monopole", x: ["Climat", "Lieu-dit", "Métayage"] },
    ],
  },
  fr_richebourg_drc: {
    producer: "Domaine de la Romanée-Conti (DRC)",
    fact: "Considered the most opulent and concentrated of the Vosne-Romanée grands crus. Besides DRC, owners such as Leroy, Anne Gros and Méo-Camuzet share the vineyard.",
    quiz: [
      { q: "Domaine de la Romanée-Conti, maker of this Richebourg, is co-owned by the de Villaine family and which other family?", a: "The Leroy family", x: ["The Rousseau family", "The de Vogüé family", "The Lafon family"] },
    ],
  },
  fr_rsv_drc: {
    producer: "Domaine de la Romanée-Conti (DRC)",
    fact: "Named after the medieval Abbey of Saint-Vivant, which tended this land. DRC began making it in 1966 by leasing the vineyard from the Marey-Monge family and bought it in 1988.",
    quiz: [
      { q: "Where does the name of DRC’s Romanée-Saint-Vivant come from?", a: "The medieval Abbey of Saint-Vivant", x: ["The 18th-century Prince of Conti", "One of Napoleon’s generals", "A Duchess of Burgundy"] },
      { q: "From which family did DRC lease and finally buy its Romanée-Saint-Vivant vineyard?", a: "The Marey-Monge family", x: ["The Leroy family", "The Liger-Belair family", "The Mommessin family"] },
    ],
  },
  fr_grandsechezeaux_drc: {
    producer: "Domaine de la Romanée-Conti (DRC)",
    fact: "A grand cru that officially belongs to the neighbouring village of Flagey-Échezeaux but is treated as a Vosne-Romanée wine. Much smaller and rarer than Échezeaux.",
    quiz: [
      { q: "Which famous walled grand cru lies right next to DRC’s Grands-Échezeaux vineyard?", a: "Clos de Vougeot", x: ["Clos de Tart", "Clos des Lambrays", "Clos de Bèze"] },
    ],
  },
  fr_echezeaux_drc: {
    producer: "Domaine de la Romanée-Conti (DRC)",
    fact: "The largest grand cru in the Vosne-Romanée area, divided into small parcels among dozens of owners. It is called the entry point to DRC’s red grands crus.",
    quiz: [
      { q: "Which statement about the Échezeaux grand cru vineyard, source of DRC’s Échezeaux, is true?", a: "It is split into small parcels among dozens of owners", x: ["It is a monopole owned by DRC alone", "Only white wine may be made there", "It was promoted to grand cru in the 1990s"] },
    ],
  },
  fr_montrachet_drc: {
    producer: "Domaine de la Romanée-Conti (DRC)",
    fact: "A vineyard of about 8 ha straddling the villages of Puligny and Chassagne, considered the source of the world’s finest Chardonnay.",
    quiz: [
      { q: "Which French writer reportedly said Montrachet should be drunk “kneeling, with head bared”?", a: "Alexandre Dumas", x: ["Victor Hugo", "Honoré de Balzac", "Émile Zola"] },
    ],
  },
  fr_liger_romanee: {
    producer: "Domaine du Comte Liger-Belair",
    fact: "A monopole of less than 1 ha on the slope just above Romanée-Conti. In the early 2000s Louis-Michel Liger-Belair took it back and the family began making the wine itself.",
    quiz: [
      { q: "What record does La Romanée hold?", a: "France’s smallest AOC", x: ["France’s oldest AOC", "Burgundy’s largest grand cru", "France’s first certified-organic vineyard"] },
    ],
  },
  fr_meo_crosparantoux: {
    producer: "Domaine Méo-Camuzet",
    fact: "A premier cru turned into a legend by Henri Jayer, “the god of Burgundy”, who cleared abandoned land overgrown with Jerusalem artichokes. Jayer sharecropped Méo-Camuzet’s vines and taught Jean-Nicolas Méo.",
    quiz: [
      { q: "Which winemaker, called “the god of Burgundy”, cleared Cros Parantoux and made it a legend?", a: "Henri Jayer", x: ["Armand Rousseau", "Georges Roumier", "Henri Gouges"] },
    ],
  },
  fr_annegros_cdv: {
    producer: "Domaine Anne Gros",
    fact: "Clos de Vougeot is a 50 ha grand cru walled in by 12th-century monks and now shared by some 80 owners. Anne Gros tends its Grand Maupertui parcel.",
    quiz: [
      { q: "Which religious order walled in and cultivated Clos de Vougeot from the 12th century?", a: "The Cistercians", x: ["The Cluniacs", "The Jesuits", "The Franciscans"] },
      { q: "Which Burgundy wine brotherhood has its headquarters at the Château du Clos de Vougeot?", a: "Chevaliers du Tastevin", x: ["Commanderie du Bontemps de Médoc", "Ordre des Coteaux de Champagne", "Les Compagnons du Beaujolais"] },
    ],
  },
  fr_leroy_musigny: {
    producer: "Domaine Leroy",
    fact: "Founded by Lalou Bize-Leroy in 1988. Farmed biodynamically from the start with drastically low yields, it makes Burgundy’s most expensive wines.",
    quiz: [
      { q: "Who runs Domaine Leroy and was also co-director of DRC until 1992?", a: "Lalou Bize-Leroy", x: ["Anne-Claude Leflaive", "Henri Jayer", "Christophe Roumier"] },
    ],
  },
  fr_vogue_musigny: {
    producer: "Domaine Comte Georges de Vogüé",
    fact: "The largest owner of the Musigny grand cru, with nearly two-thirds of it. Grapes from young vines are declassified and sold as Chambolle-Musigny premier cru instead.",
    quiz: [
      { q: "Which rare wine does de Vogüé make almost alone from the Musigny vineyard?", a: "Musigny Blanc (white)", x: ["Musigny Rosé", "Sparkling Musigny", "Botrytised sweet Musigny"] },
    ],
  },
  fr_mugnier_musigny: {
    producer: "Domaine Jacques-Frédéric Mugnier",
    fact: "Frédéric Mugnier took over the family domaine in 1985 and raised it to the height of delicate Chambolle style. In 2004 he took back Clos de la Maréchale, which had been leased to Faiveley.",
    quiz: [
      { q: "What other job did Frédéric Mugnier hold until the late 1990s while running his domaine?", a: "Airline pilot", x: ["Doctor", "Lawyer", "Chef"] },
    ],
  },
  fr_roumier_bm: {
    producer: "Domaine Georges Roumier",
    fact: "A cult Chambolle-Musigny domaine led by Christophe Roumier. Bonnes-Mares is a grand cru straddling the villages of Chambolle-Musigny and Morey-Saint-Denis.",
    quiz: [
      { q: "Who leads Domaine Georges Roumier and raised it to cult status?", a: "Christophe Roumier", x: ["Eric Rousseau", "Frédéric Mugnier", "Jean-Nicolas Méo"] },
      { q: "Bonnes-Mares straddles Chambolle-Musigny and which other village?", a: "Morey-Saint-Denis", x: ["Gevrey-Chambertin", "Vosne-Romanée", "Vougeot"] },
    ],
  },
  fr_dujac_cdlr: {
    producer: "Domaine Dujac",
    fact: "A Morey-Saint-Denis domaine founded in 1968 by Parisian Jacques Seysses. It is known for fermenting whole bunches, stems and all.",
    quiz: [
      { q: "Who founded Domaine Dujac in 1968?", a: "Jacques Seysses", x: ["Henri Jayer", "Armand Rousseau", "Christophe Roumier"] },
    ],
  },
  fr_ponsot_cdlr: {
    producer: "Domaine Ponsot",
    fact: "When a 1945 Ponsot Clos Saint-Denis came up at a New York auction in 2008, Laurent Ponsot stopped the sale himself: Ponsot first made wine from that vineyard in 1982.",
    quiz: [
      { q: "Which notorious wine forger was exposed when Laurent Ponsot stopped fake Ponsot wines at a 2008 auction?", a: "Rudy Kurniawan", x: ["Hardy Rodenstock", "Bernard Madoff", "Frank Abagnale"] },
    ],
  },
  fr_closdetart: {
    producer: "Domaine du Clos de Tart",
    fact: "A grand cru monopole with only four owners since 1141: the Tart convent, the Marey-Monge family, the Mommessin family and now Artémis of the Pinault family.",
    quiz: [
      { q: "Who owned Clos de Tart from 1141 until the French Revolution?", a: "Cistercian nuns of the Tart convent", x: ["Monks of Cluny Abbey", "The Dukes of Burgundy", "The Knights Templar"] },
      { q: "Who bought Clos de Tart after the Mommessin family?", a: "François Pinault’s Artémis", x: ["Bernard Arnault’s LVMH", "American billionaire Stan Kroenke", "The Bouygues brothers"] },
    ],
  },
  fr_lambrays: {
    producer: "Domaine des Lambrays",
    fact: "A Morey-Saint-Denis grand cru almost entirely owned by one domaine. It was belatedly promoted to grand cru in 1981, and LVMH bought it in 2014.",
    quiz: [
      { q: "In what year was Clos des Lambrays promoted to grand cru?", a: "1981", x: ["1936", "1961", "2001"] },
      { q: "Which group acquired Clos des Lambrays in 2014?", a: "LVMH", x: ["Artémis (Pinault family)", "Groupe Castel", "Pernod Ricard"] },
    ],
  },
  fr_rousseau_chambertin: {
    producer: "Domaine Armand Rousseau",
    fact: "Chambertin is the “king of wines” that Napoleon is said to have taken even on campaign. Armand Rousseau is considered the finest domaine in Gevrey-Chambertin.",
    quiz: [
      { q: "Which historical figure is said to have loved Chambertin, the vineyard of Armand Rousseau’s Chambertin, above all?", a: "Napoleon", x: ["Louis XIV", "Charlemagne", "Joan of Arc"] },
      { q: "What is the traditional origin of the name “Chambertin”?", a: "The field of a farmer named Bertin (Champ de Bertin)", x: ["The church of Bertin Abbey", "The camp of the Roman general Bertinus", "An old word for “green hill”"] },
    ],
  },
  fr_rousseau_beze: {
    producer: "Domaine Armand Rousseau",
    fact: "One of Burgundy’s oldest vineyards, planted in the 7th century by monks of Bèze Abbey. Its wine may also be sold under the name “Chambertin”.",
    quiz: [
      { q: "Who first planted the Chambertin-Clos de Bèze vineyard?", a: "Monks of Bèze Abbey in the 7th century", x: ["Cistercian monks in the 12th century", "The Prince of Conti in the 18th century", "Napoleon’s army in the 19th century"] },
      { q: "What privilege does Chambertin-Clos de Bèze have under the rules?", a: "It may also be sold as “Chambertin”", x: ["It may be called “Romanée-Conti”", "It may be sold without a vintage", "Its white wine may also be sold as grand cru"] },
    ],
  },
  fr_bichot_moutonne: {
    producer: "Albert Bichot (Domaine Long-Depaquit)",
    fact: "A monopole of Domaine Long-Depaquit, Albert Bichot’s Chablis estate. It straddles two Chablis grands crus, Vaudésir and Preuses.",
    quiz: [
      { q: "In what year was Albert Bichot, maker of La Moutonne, founded?", a: "1831", x: ["1731", "1797", "1880"] },
    ],
  },
  fr_leflaive_puligny: {
    producer: "Domaine Leflaive",
    fact: "Puligny-Montrachet’s flagship white wine house. In the 1990s Anne-Claude Leflaive converted all its vineyards to biodynamics, leading Burgundy’s move to eco-friendly farming.",
    quiz: [
      { q: "Who led Domaine Leflaive into biodynamic farming in the 1990s?", a: "Anne-Claude Leflaive", x: ["Lalou Bize-Leroy", "Dominique Lafon", "Jean-François Coche-Dury"] },
    ],
  },
  fr_leflaive_batard: {
    producer: "Domaine Leflaive",
    fact: "A grand cru on the slope just below Montrachet. Along with its neighbours Chevalier (knight) and Pucelle (maiden), its name is bound up in a tale about an old lord’s family.",
    quiz: [
      { q: "What does “Bâtard” in Bâtard-Montrachet mean?", a: "Bastard (illegitimate child)", x: ["Knight", "Maiden", "Monk"] },
    ],
  },
  fr_cochedury_cc: {
    producer: "Domaine Coche-Dury",
    fact: "A white grand cru on the hill of Corton. Coche-Dury’s version is made in such tiny amounts that it is counted among the hardest Burgundy whites to find.",
    quiz: [
      { q: "According to legend, why did Charlemagne have white grapes planted on the hill of Corton?", a: "Red wine stained his white beard", x: ["The pope banned red wine", "White grapes sold for more", "War had killed all the red grapes"] },
    ],
  },
  fr_cochedury_meursault: {
    producer: "Domaine Coche-Dury",
    fact: "A legendary producer whose village Meursault sells for the price of other domaines’ grands crus. Jean-François Coche-Dury built its fame, and his son Raphaël carries it on.",
    quiz: [
      { q: "Which winemaker built the reputation of Coche-Dury Meursault?", a: "Jean-François Coche-Dury", x: ["Henri Jayer", "Dominique Lafon", "Aubert de Villaine"] },
    ],
  },
  fr_bonneau_cc: {
    producer: "Domaine Bonneau du Martray",
    fact: "A rare domaine that makes only two grands crus, Corton-Charlemagne and Corton. American billionaire Stan Kroenke bought it in 2017.",
    quiz: [
      { q: "Which Napa Valley cult winery belongs to the American billionaire who bought Bonneau du Martray in 2017?", a: "Screaming Eagle", x: ["Harlan Estate", "Opus One", "Sine Qua Non"] },
    ],
  },
  fr_latour_cc: {
    producer: "Maison Louis Latour",
    fact: "A family company dating from 1797 and one of the largest owners on the hill of Corton. It still makes its own barrels in its own cooperage.",
    quiz: [
      { q: "Which château in Aloxe-Corton, on the hill of Corton, is Louis Latour’s home base?", a: "Château Corton Grancey", x: ["Château de Meursault", "Château de Puligny-Montrachet", "Château de Pommard"] },
      { q: "In what year did the history of Louis Latour, maker of this Corton-Charlemagne, begin?", a: "1797", x: ["1731", "1859", "1920"] },
    ],
  },
  fr_faiveley_cortons: {
    producer: "Domaine Faiveley",
    fact: "A Corton grand cru monopole whose vineyard name includes the producer family’s name. Faiveley is a family company that has passed down the generations in Nuits-Saint-Georges.",
    quiz: [
      { q: "In what year did Faiveley, maker of this wine, open in Nuits-Saint-Georges?", a: "1825", x: ["1731", "1797", "1920"] },
      { q: "Which monopole did Faiveley lease for over 50 years before returning it to its owners, the Mugnier family, in 2004?", a: "Clos de la Maréchale", x: ["Clos de Tart", "Clos des Lambrays", "Clos des Ducs"] },
    ],
  },
  fr_drouhin_mouches: {
    producer: "Maison Joseph Drouhin",
    fact: "A Beaune premier cru that Maurice Drouhin pieced together from many owners in the 1920s. Drouhin is the vineyard’s largest owner.",
    quiz: [
      { q: "Which insect does “Mouches” in Clos des Mouches refer to here?", a: "Honeybees", x: ["Butterflies", "Dragonflies", "Ladybirds"] },
      { q: "Where is the American winery that Joseph Drouhin, maker of Clos des Mouches, founded in 1987?", a: "Oregon", x: ["Napa Valley", "Sonoma", "Washington"] },
    ],
  },
  fr_bouchard_enfant: {
    producer: "Bouchard Père & Fils",
    fact: "A Beaune Grèves monopole once tended by Carmelite nuns. Its name comes from a nun who is said to have foretold the birth of Louis XIV; Bouchard bought it after the Revolution, in 1791.",
    quiz: [
      { q: "What does the name “Vigne de l'Enfant Jésus” mean?", a: "Vineyard of the Infant Jesus", x: ["Vineyard of the Virgin", "The king’s vineyard", "The abbot’s vineyard"] },
      { q: "Whose birth did a Carmelite nun reportedly foretell, in the story behind Vigne de l'Enfant Jésus?", a: "Louis XIV", x: ["Louis XVI", "Henri IV", "Napoleon I"] },
    ],
  },
  fr_hospices_rolin: {
    producer: "Hospices de Beaune",
    fact: "A wine from vineyards donated to the Hospices de Beaune, a charity hospital founded in 1443. It is sold each year at the world’s most famous charity wine auction.",
    quiz: [
      { q: "When is the charity auction held where Hospices de Beaune Cuvée Nicolas Rolin is sold?", a: "Every year, on the third Sunday of November", x: ["Every year, on the first Sunday of September", "Once every five years, in spring", "Every year, on January 1"] },
      { q: "Who was the wife of Nicolas Rolin and co-founder of the Hospices de Beaune?", a: "Guigone de Salins", x: ["Madame Clicquot", "Anne of Austria", "Margaret of Burgundy"] },
    ],
  },
  fr_dangerville_ducs: {
    producer: "Domaine Marquis d'Angerville",
    fact: "A Volnay premier cru monopole that once belonged to the Dukes of Burgundy. In the 1920s–30s the Marquis d’Angerville, with Henri Gouges and others, pioneered bottling at the domaine.",
    quiz: [
      { q: "What does “Ducs” in Clos des Ducs refer to?", a: "The old Dukes of Burgundy", x: ["Papal bishops", "Roman legion commanders", "Monastery friars"] },
      { q: "What did the Marquis d’Angerville family pioneer with colleagues in the 1920s–30s?", a: "Bottling at the domaine instead of selling to négociants", x: ["Champagne-method sparkling wine", "Planting Cabernet Sauvignon in Burgundy", "Screw caps"] },
    ],
  },
  fr_lafon_perrieres: {
    producer: "Domaine des Comtes Lafon",
    fact: "Meursault’s leading house, which also owns a little of the Montrachet grand cru. Perrières, named after old stone quarries, is considered Meursault’s finest premier cru.",
    quiz: [
      { q: "Which member of the Lafon family started the Paulée de Meursault in 1923, the feast held on the last day of November’s “Trois Glorieuses”?", a: "Comte Jules Lafon", x: ["Louis Latour", "Joseph Drouhin", "Henri Jayer"] },
    ],
  },
  fr_fevre_lesclos: {
    producer: "Domaine William Fèvre",
    fact: "Les Clos is the largest of the Chablis grands crus. William Fèvre is considered the domaine with the most Chablis grand cru vineyards.",
    quiz: [
      { q: "How many Chablis grand cru vineyards are there, including Les Clos?", a: "7", x: ["3", "12", "33"] },
      { q: "Which Champagne family acquired William Fèvre in 1998?", a: "Henriot", x: ["Bollinger", "Taittinger", "Laurent-Perrier"] },
    ],
  },
  fr_raveneau: {
    producer: "Domaine François Raveneau",
    fact: "A Chablis legend founded by François Raveneau in 1948. It ages its wines in old oak barrels, making Chablis that lasts for decades.",
    quiz: [
      { q: "Which other great Chablis family did François Raveneau become linked to by marriage?", a: "The Dauvissat family", x: ["The Fèvre family", "The Laroche family", "The Bichot family"] },
    ],
  },
  fr_dauvissat: {
    producer: "Domaine Vincent Dauvissat",
    fact: "Together with its relatives the Raveneaus, considered the summit of Chablis. It sticks to oak ageing in a region where stainless-steel tanks are the norm.",
    quiz: [
      { q: "Which winemaking approach did great Chablis houses like Vincent Dauvissat bring in from the Côte d’Or?", a: "Barrel fermentation and long lees ageing", x: ["Carbonic maceration", "Drying grapes (appassimento)", "Solera ageing"] },
    ],
  },
  fr_laroche: {
    producer: "Domaine Laroche",
    fact: "Laroche’s ageing cellar is the “Obédiencerie”, a 9th-century monastic building. In 877 the relics of Saint Martin, brought from Tours to escape the Normans, were kept here.",
    quiz: [
      { q: "Which saint does Domaine Laroche Chablis Saint Martin honour?", a: "Saint Martin, Bishop of Tours", x: ["Saint Bernard of the Cistercians", "Saint Denis, first Bishop of Paris", "Saint Joan of Arc"] },
    ],
  },
  fr_fuisse: {
    producer: "Château-Fuissé (Famille Vincent)",
    fact: "A leading Chardonnay house of the Mâconnais. From the 2020 vintage, Pouilly-Fuissé became the first Mâconnais appellation with premier cru vineyards.",
    quiz: [
      { q: "Which new rank was created in Pouilly-Fuissé, home of Château-Fuissé, from the 2020 vintage?", a: "Premier Cru", x: ["Grand Cru", "Cru Bourgeois", "Cru Classé"] },
    ],
  },
  fr_lapierre_morgon: {
    producer: "Domaine Marcel Lapierre",
    fact: "A pioneer of natural wine, made with almost no sulphur. With Foillard, Thévenet and Breton he was one of the Beaujolais “Gang of Four”.",
    quiz: [
      { q: "Which chemist and négociant inspired Marcel Lapierre and the Beaujolais “Gang of Four” to make wine without additives?", a: "Jules Chauvet", x: ["Émile Peynaud", "Louis Pasteur", "Henri Jayer"] },
    ],
  },
  fr_jacques_mav: {
    producer: "Maison Louis Jadot",
    fact: "When Louis Jadot bought it in 1996, it was the first time a great Burgundy house moved into the Beaujolais crus. It makes Burgundy-style Gamay built to age.",
    quiz: [
      { q: "Where does the name “Moulin-à-Vent”, home of Château des Jacques, come from?", a: "An old windmill on the village hill", x: ["A Roman-era watermill", "The name of a windy river", "The name of an old monastery"] },
    ],
  },
  fr_jadot_bjv: {
    producer: "Maison Louis Jadot",
    fact: "A step-up level from designated villages in northern Beaujolais. The label bears Bacchus’s head, Louis Jadot’s emblem.",
    quiz: [
      { q: "Whose head is the emblem on the Louis Jadot Beaujolais-Villages label?", a: "Bacchus, god of wine", x: ["Neptune, god of the sea", "Apollo, god of the sun", "Saint Vincent, patron of winegrowers"] },
      { q: "How many top-level Beaujolais “crus” may use a village name?", a: "10", x: ["3", "7", "22"] },
    ],
  },
  fr_duboeuf_fleurie: {
    producer: "Georges Duboeuf",
    fact: "A fragrant, silky Beaujolais cru whose name evokes flowers. It is known for Duboeuf’s flower-painted label.",
    quiz: [
      { q: "What nickname is often given to Fleurie wines like Georges Duboeuf’s for their fragrant, elegant style?", a: "The Queen of Beaujolais", x: ["The King of Beaujolais", "The Knight of Beaujolais", "The Monk of Beaujolais"] },
    ],
  },
  fr_guigal_mouline: {
    producer: "E. Guigal",
    fact: "Guigal’s first single-vineyard wine, from an amphitheatre-like slope on the Côte Blonde. Its Syrah is co-fermented with a little Viognier.",
    quiz: [
      { q: "What nickname is given to Guigal’s La Mouline, La Landonne and La Turque together?", a: "The La Las", x: ["The Triple Crown", "Les Trois", "The Côte-Rôtie Trio"] },
      { q: "What was the first vintage of Guigal La Mouline?", a: "1966", x: ["1946", "1978", "1985"] },
    ],
  },
  fr_guigal_landonne: {
    producer: "E. Guigal",
    fact: "The darkest and most powerful of the “La Las”, made from 100% Syrah on the steep slopes of the Côte Brune. The vineyard was pieced together from many owners and replanted.",
    quiz: [
      { q: "What was the first vintage of Guigal La Landonne?", a: "1978", x: ["1966", "1985", "1995"] },
    ],
  },
  fr_guigal_turque: {
    producer: "E. Guigal",
    fact: "The youngest of the “La Las”, from a long-abandoned vineyard that Guigal replanted in the early 1980s. Although on the Côte Brune, it includes a little Viognier.",
    quiz: [
      { q: "What was the first vintage of Guigal La Turque?", a: "1985", x: ["1966", "1978", "1999"] },
    ],
  },
  fr_guigal_cdr: {
    producer: "E. Guigal",
    fact: "Guigal’s flagship everyday wine; the house was founded in Ampuis by Étienne Guigal in 1946. As befits a northern Rhône house, it is high in Syrah.",
    quiz: [
      { q: "Which old castle in Côte-Rôtie did Guigal buy in 1995 and make its base?", a: "Château d'Ampuis", x: ["Château-Grillet", "Château Rayas", "Château La Nerthe"] },
      { q: "In what year did Étienne Guigal found Guigal?", a: "1946", x: ["1808", "1834", "1990"] },
    ],
  },
  fr_chapoutier_belleruche: {
    producer: "M. Chapoutier",
    fact: "The everyday Côtes du Rhône from Chapoutier, a great Hermitage house dating from 1808. One side of the label is embossed with raised braille dots.",
    quiz: [
      { q: "What has Chapoutier printed on all its labels, including Belleruche, since the 1990s?", a: "Braille for the visually impaired", x: ["A QR code", "The founder’s signature", "A vineyard map"] },
    ],
  },
  fr_chapoutier_sizeranne: {
    producer: "M. Chapoutier",
    fact: "Wine from a vineyard bought from the family of Maurice Monier de la Sizeranne, a blind man who devised abridged braille. In 1994 it became the first wine with a braille label.",
    quiz: [
      { q: "Who was Maurice de la Sizeranne, namesake of this wine and inspiration for Chapoutier’s braille labels?", a: "A blind man who worked to spread braille", x: ["Chapoutier’s founder", "A bishop of the papal court in Avignon", "One of Napoleon’s generals"] },
    ],
  },
  fr_jaboulet_chapelle: {
    producer: "Paul Jaboulet Aîné",
    fact: "A Rhône legend named after the chapel on top of the hill of Hermitage. The 1961 is ranked among the greatest wines of the 20th century.",
    quiz: [
      { q: "What on the hill of Hermitage gave La Chapelle its name?", a: "A small chapel on the hilltop", x: ["An old abbey cathedral", "A royal hunting lodge", "A Roman temple"] },
      { q: "Which family, owners of Bordeaux’s Château La Lagune, bought Paul Jaboulet Aîné, maker of La Chapelle, in 2006?", a: "The Frey family", x: ["The Perrin family", "The Guigal family", "The Rothschild family"] },
    ],
  },
  fr_jaboulet_p45: {
    producer: "Paul Jaboulet Aîné",
    fact: "The flagship everyday wine of Paul Jaboulet Aîné, a great Rhône house founded in 1834. An easy-going Côtes du Rhône from southern Rhône grapes.",
    quiz: [
      { q: "What does the name Parallèle 45 mean?", a: "The 45th parallel north, which passes near the winery", x: ["The 45th anniversary of the house", "45 grape varieties", "45 months of ageing"] },
    ],
  },
  fr_chave_hermitage: {
    producer: "Domaine Jean-Louis Chave",
    fact: "The Rhône’s finest domaine, blending wines from several parcels on the hill of Hermitage into one bottle. The Chave family began buying Hermitage vineyards in 1865.",
    quiz: [
      { q: "According to the Jean-Louis Chave label, in what year did the family’s winegrowing “from father to son” begin?", a: "1481", x: ["1731", "1808", "1946"] },
    ],
  },
  fr_jamet: {
    producer: "Domaine Jamet",
    fact: "A traditionalist domaine blending Syrah from several Côte-Rôtie parcels. It favours whole-bunch fermentation and is seen as the model of spicy northern Rhône Syrah.",
    quiz: [
      { q: "What does the name “Côte-Rôtie” (roasted slope), where Domaine Jamet farms, refer to?", a: "Steep south-facing slopes baked by the sun", x: ["Volcanic ash soils", "Ageing in charred oak barrels", "Old vineyards burned by wildfire"] },
    ],
  },
  fr_clape_cornas: {
    producer: "Domaine Auguste Clape",
    fact: "A domaine that made Cornas’s name with traditional Syrah back when the appellation was unknown. Today his son and grandson carry it on.",
    quiz: [
      { q: "What is the traditional meaning of the place name “Cornas”, home of Auguste Clape?", a: "Burnt earth (in Celtic)", x: ["Stony hill", "The pope’s land", "Black river"] },
    ],
  },
  fr_grillet: {
    producer: "Artémis Domaines (Pinault family)",
    fact: "A Viognier shrine where a single estate occupies the whole AOC. Its trademark is a slender brown bottle used by no other French winery.",
    quiz: [
      { q: "What is special about the Château-Grillet AOC?", a: "A single estate occupies the entire AOC", x: ["It is the Rhône’s only sparkling AOC", "Red and white must be blended", "It pays tribute to the papacy each year"] },
      { q: "Which owner of Bordeaux’s Château Latour bought Château-Grillet in 2011?", a: "François Pinault", x: ["Bernard Arnault", "Martin Bouygues", "Stan Kroenke"] },
    ],
  },
  fr_vernay_condrieu: {
    producer: "Domaine Georges Vernay",
    fact: "The domaine of Georges Vernay, who saved Viognier from near-extinction in the 1960s. He was called “the Pope of Condrieu”.",
    quiz: [
      { q: "What was happening to Condrieu’s vineyards in the 1960s, when Georges Vernay saved Viognier?", a: "They had shrunk to a few hectares and nearly vanished", x: ["Phylloxera was first discovered there", "They were promoted to grand cru", "They switched to red wine"] },
    ],
  },
  fr_rayas: {
    producer: "Château Rayas (Famille Reynaud)",
    fact: "A cult Châteauneuf-du-Pape made from 100% Grenache on sandy soils ringed by woods. It is also famous for its ramshackle cellar and plain label.",
    quiz: [
      { q: "Which family has run Château Rayas for generations?", a: "The Reynaud family", x: ["The Perrin family", "The Brunier family", "The Avril family"] },
    ],
  },
  fr_closdespapes: {
    producer: "Clos des Papes (Famille Avril)",
    fact: "A great Châteauneuf-du-Pape estate handed down through the Avril family. Its 2007 was ranked No. 1, Wine of the Year, by Wine Spectator.",
    quiz: [
      { q: "Which family has handed down Clos des Papes for generations?", a: "The Avril family", x: ["The Reynaud family", "The Brunier family", "The Féraud family"] },
    ],
  },
  fr_vieuxtelegraphe: {
    producer: "Famille Brunier",
    fact: "A Châteauneuf-du-Pape from the La Crau plateau, covered in rounded stones (galets). The Brunier family has tended it since the late 19th century.",
    quiz: [
      { q: "Where does the name Vieux Télégraphe come from?", a: "An optical telegraph tower built by Chappe in the late 18th century", x: ["A 19th-century telegraph office", "The papal bell tower", "A railway signal box"] },
      { q: "On which stone-covered plateau does Vieux Télégraphe lie?", a: "La Crau", x: ["La Nerthe", "Côte Blonde", "Les Bessards"] },
    ],
  },
  fr_pegau: {
    producer: "Famille Féraud",
    fact: "A traditionalist Châteauneuf-du-Pape run by Paul Féraud and his daughter Laurence. Grapes are fermented with their stems and aged long in large casks (foudres).",
    quiz: [
      { q: "What does the name “Pégau” in Domaine du Pégau mean?", a: "A medieval earthenware wine jug", x: ["The pope’s hat", "A stony field", "A dove’s nest"] },
    ],
  },
  fr_lanerthe: {
    producer: "Château La Nerthe",
    fact: "One of the oldest estates in Châteauneuf-du-Pape, named in 16th-century records. It blends Syrah and Mourvèdre into Grenache for a balanced wine.",
    quiz: [
      { q: "What does “Châteauneuf-du-Pape”, home of Château La Nerthe, mean?", a: "The pope’s new castle", x: ["The pope’s old vineyard", "The new pope’s wine", "The pope’s summer garden"] },
    ],
  },
  fr_bonneau_celestins: {
    producer: "Domaine Henri Bonneau",
    fact: "A Châteauneuf-du-Pape legend, aged long in a cramped village cellar and released only in good years. After Henri Bonneau died in 2016, his son Marcel carried it on.",
    quiz: [
      { q: "Which other cuvée does Henri Bonneau release besides Réserve des Célestins?", a: "Cuvée Marie Beurrier", x: ["Cuvée Da Capo", "Hommage à Jacques Perrin", "La Crau"] },
    ],
  },
  fr_perrin_cdr: {
    producer: "Famille Perrin",
    fact: "An everyday Côtes du Rhône made by the Perrin family of Château de Beaucastel. It blends Syrah and Mourvèdre into Grenache.",
    quiz: [
      { q: "Which Provence rosé did the Perrin family create with Hollywood stars?", a: "Miraval", x: ["Whispering Angel", "Minuty", "Domaines Ott"] },
    ],
  },
  fr_aqueria_tavel: {
    producer: "Château d'Aqueria",
    fact: "The leading estate of Tavel, an AOC that allows only rosé. Deeper in colour and more powerful than Provence rosé, it goes well with food.",
    quiz: [
      { q: "Tavel rosé like Château d'Aqueria is called “the rosé of kings, the ___ of rosés”. What fills the blank?", a: "King", x: ["Queen", "Pope", "Emperor"] },
    ],
  },
  fr_dp_rose: {
    producer: "Moët & Chandon",
    fact: "Dom Pérignon’s rosé, made only in good vintages. Almost the entire first vintage, 1959, was sold to the Shah of Iran.",
    quiz: [
      { q: "At which historic 1971 banquet was Dom Pérignon Rosé 1959 used for toasts?", a: "The 2,500th anniversary of the Persian Empire", x: ["The opening dinner of the Paris World’s Fair", "President Kennedy’s inaugural dinner", "The wedding of Monaco’s Rainier III"] },
    ],
  },
  fr_moet_rose: {
    producer: "Moët & Chandon",
    fact: "The rosé version of Moët Impérial. Pinot Noir red wine is blended in for a pink hue with strawberry and cherry aromas.",
    quiz: [
      { q: "In what year was Moët & Chandon, maker of Rosé Impérial, founded?", a: "1743", x: ["1729", "1772", "1811"] },
    ],
  },
  fr_moet_ice: {
    producer: "Moët & Chandon",
    fact: "Launched in 2011 as the world’s first Champagne made to be drunk over ice. It is made sweet and rich so the taste doesn’t fade as the ice melts.",
    quiz: [
      { q: "What is the recommended way to enjoy Moët & Chandon Ice Impérial?", a: "Over ice in a large glass", x: ["Warmed up", "Mixed half-and-half with ginger ale", "From the bottle with a straw"] },
    ],
  },
  fr_veuve_lgd: {
    producer: "Veuve Clicquot Ponsardin",
    fact: "Veuve Clicquot’s prestige cuvée. It was first released in 1972, the house’s 200th anniversary, with the 1962 vintage.",
    quiz: [
      { q: "Whom does the name Veuve Clicquot La Grande Dame (“the great lady”) honour?", a: "Madame Clicquot", x: ["Marie Antoinette", "Empress Joséphine", "Lily Bollinger"] },
    ],
  },
  fr_veuve_rose: {
    producer: "Veuve Clicquot Ponsardin",
    fact: "A rosé made by blending red wine into the Yellow Label blend. Veuve Clicquot is known as the first house to make rosé Champagne this way.",
    quiz: [
      { q: "In what year did Madame Clicquot first make rosé Champagne by blending in red wine, as in Veuve Clicquot Rosé?", a: "1818", x: ["1729", "1874", "1921"] },
    ],
  },
  fr_roederer_collection: {
    producer: "Louis Roederer",
    fact: "Louis Roederer’s NV, launched in 2021 to replace the long-standing Brut Premier. It is made with a “perpetual reserve” of reserve wines built up year after year.",
    quiz: [
      { q: "What do numbers like “242” and “243” on Louis Roederer Collection mean?", a: "Which blend it is since the house’s founding in 1776", x: ["Months of ageing", "Number of wines blended", "Bottles produced (in thousands)"] },
    ],
  },
  fr_krug_gc: {
    producer: "Krug",
    fact: "Krug’s flagship Champagne, blending over 120 wines from more than ten different years. Each bottle is numbered with its “Edition”.",
    quiz: [
      { q: "Who founded Krug, maker of Krug Grande Cuvée, in 1843?", a: "Joseph Krug", x: ["Nicolas Ruinart", "Florens-Louis Heidsieck", "Claude Moët"] },
    ],
  },
  fr_krug_mesnil: {
    producer: "Krug",
    fact: "Made only from Chardonnay grown in a walled 1.84 ha vineyard in the middle of Le Mesnil-sur-Oger. Krug bought it in 1971 and released the first vintage, 1979.",
    quiz: [
      { q: "In what year was the wall around the Krug Clos du Mesnil vineyard first built?", a: "1698", x: ["1843", "1971", "1979"] },
    ],
  },
  fr_krug_rose: {
    producer: "Krug",
    fact: "A rosé made the Krug way, blending many years, with Pinot Noir red wine added. Like the Grande Cuvée, it carries an Edition number.",
    quiz: [
      { q: "Which group has owned Krug, maker of Krug Rosé, since 1999?", a: "LVMH", x: ["Kering", "Pernod Ricard", "Laurent-Perrier Group"] },
    ],
  },
  fr_bollinger_sc: {
    producer: "Bollinger",
    fact: "Bollinger’s flagship Champagne, from a house founded in Aÿ in 1829. High in Pinot Noir and partly fermented in oak, it is rich and weighty.",
    quiz: [
      { q: "Which film character is famous for his long association with Bollinger Special Cuvée?", a: "James Bond", x: ["Sherlock Holmes", "Indiana Jones", "Jay Gatsby"] },
      { q: "Which Bollinger matriarch said she drank Champagne “when I’m happy and when I’m sad”?", a: "Lily Bollinger", x: ["Madame Clicquot", "Louise Pommery", "Coco Chanel"] },
    ],
  },
  fr_bollinger_ga: {
    producer: "Bollinger",
    fact: "Bollinger’s vintage Champagne, made only in good years. Every wine is fermented in small oak barrels.",
    quiz: [
      { q: "What closure does Bollinger La Grande Année use during its long ageing in bottle?", a: "Natural cork", x: ["Crown cap", "Screw cap", "Glass stopper"] },
    ],
  },
  fr_bollinger_rd: {
    producer: "Bollinger",
    fact: "Bollinger’s masterpiece, aged long on its lees and disgorged just before release. The 1952 was the first vintage.",
    quiz: [
      { q: "What does “R.D.” in Bollinger R.D. stand for?", a: "Récemment Dégorgé (recently disgorged)", x: ["Royal Delivery", "Red Dry", "Réserve du Domaine"] },
      { q: "What did Bollinger R.D. do first in the history of Champagne labels?", a: "Print the disgorgement date on the label", x: ["Emboss the label in braille", "Print directly on the bottle with no label", "Add a QR code to the label"] },
    ],
  },
  fr_salon: {
    producer: "Salon",
    fact: "It began in the early 20th century as a Champagne Eugène-Aimé Salon made for his own drinking. Made only in outstanding years, it appears only a few dozen times a century.",
    quiz: [
      { q: "What is Salon’s special production rule?", a: "Only Chardonnay from Le Mesnil-sur-Oger, only in outstanding years", x: ["Made every year, rosé only", "Only non-vintage blends of several years", "Pinot Noir only"] },
      { q: "Which sister house shares a wall with Salon and belongs to the same Laurent-Perrier group?", a: "Delamotte", x: ["Krug", "Bollinger", "Henriot"] },
    ],
  },
  fr_taittinger_br: {
    producer: "Taittinger",
    fact: "Taittinger’s flagship NV, light and elegant thanks to a relatively high share of Chardonnay. It ages in chalk cellars beneath the old Saint-Nicaise abbey in Reims.",
    quiz: [
      { q: "Which old Champagne house, Taittinger’s predecessor, did Pierre Taittinger buy and rename in 1932?", a: "Forest-Fourneaux", x: ["Heidsieck & Co Monopole", "Ruinart", "Delamotte"] },
    ],
  },
  fr_taittinger_comtes: {
    producer: "Taittinger",
    fact: "Taittinger’s prestige cuvée, made only in good years from Côte des Blancs grand cru Chardonnay. The 1952 was the first vintage.",
    quiz: [
      { q: "Whom does the name Taittinger Comtes de Champagne honour?", a: "Thibaut IV, Count of Champagne, back from the Crusades", x: ["Charlemagne", "Napoleon I", "Saint Remi, Archbishop of Reims"] },
    ],
  },
  fr_polroger_br: {
    producer: "Pol Roger",
    fact: "A family house founded in Épernay in 1849. It holds a British royal warrant and was served at Prince William’s wedding in 2011.",
    quiz: [
      { q: "What nickname did Pol Roger Brut Réserve earn in Britain from the colour of its neck foil?", a: "White Foil", x: ["Gold Foil", "Black Label", "Yellow Label"] },
    ],
  },
  fr_polroger_swc: {
    producer: "Pol Roger",
    fact: "A prestige cuvée made from the 1975 vintage onwards in honour of Churchill, a lifelong Pol Roger lover. It follows the powerful, Pinot Noir-led style he liked.",
    quiz: [
      { q: "When Churchill died in 1965, what did Pol Roger do to its UK export labels?", a: "Added a black border to the label", x: ["Added Churchill’s portrait", "Halted production that year", "Painted the bottles red"] },
      { q: "What did Churchill name his racehorse in honour of Odette Pol-Roger?", a: "Pol Roger", x: ["Champagne", "Victory", "Blenheim"] },
    ],
  },
  fr_lp_lacuvee: {
    producer: "Laurent-Perrier",
    fact: "The flagship NV of a house founded in Tours-sur-Marne in 1812. A high share of Chardonnay makes it clean and fresh.",
    quiz: [
      { q: "Who ran Laurent-Perrier from 1949 and built it into a world-class house?", a: "Bernard de Nonancourt", x: ["Pierre Taittinger", "Lily Bollinger", "Joseph Krug"] },
    ],
  },
  fr_lp_rose: {
    producer: "Laurent-Perrier",
    fact: "Launched in 1968 in a crested bottle modelled on one from the time of Henri IV. Made from 100% Pinot Noir, it is seen as the benchmark rosé Champagne.",
    quiz: [
      { q: "How does Laurent-Perrier Cuvée Rosé get its pink colour?", a: "Maceration, steeping Pinot Noir skins", x: ["Blending in red wine", "Adding plant colouring", "Long ageing in oak"] },
    ],
  },
  fr_lp_gs: {
    producer: "Laurent-Perrier",
    fact: "Laurent-Perrier’s top cuvée, blending wines from three outstanding years to recreate “the perfect year”. Each edition carries an “Iteration” number.",
    quiz: [
      { q: "How does Laurent-Perrier Grand Siècle differ from most prestige Champagnes?", a: "It blends three outstanding vintages", x: ["It uses grapes from a single year", "It is made only as rosé", "It is aged ten years in oak"] },
      { q: "Which king ruled the era that “Grand Siècle” (the great century) refers to?", a: "Louis XIV", x: ["Louis XVI", "Napoleon I", "Henri IV"] },
    ],
  },
  fr_r_ruinart: {
    producer: "Ruinart",
    fact: "The flagship NV of Ruinart, the first Champagne house, founded in 1729. It comes in a round bottle modelled on an 18th-century flask.",
    quiz: [
      { q: "What are Ruinart’s underground cellars, chalk quarries dug since Roman times where R de Ruinart ages, called?", a: "Crayères", x: ["Cuverie", "Chai", "Bodega"] },
    ],
  },
  fr_dom_ruinart: {
    producer: "Ruinart",
    fact: "Ruinart’s prestige cuvée, made only in good years from grand cru Chardonnay. The golden glow in a clear round bottle is the clue.",
    quiz: [
      { q: "Which monk, said to have urged his nephew into the Champagne business, does Dom Ruinart honour?", a: "Dom Thierry Ruinart", x: ["Dom Pierre Pérignon", "Saint Bernard", "Saint Remi"] },
    ],
  },
  fr_pj_grandbrut: {
    producer: "Perrier-Jouët",
    fact: "The flagship NV of Perrier-Jouët, founded in Épernay in 1811. A high share of Pinot Noir and Pinot Meunier gives it rich fruit.",
    quiz: [
      { q: "Where does the house name “Perrier-Jouët” come from?", a: "The surnames of the founding couple", x: ["Two village names", "The founding brothers’ names", "Two Champagne vineyard names"] },
      { q: "Which flower, painted by Art Nouveau artist Émile Gallé, symbolises Perrier-Jouët?", a: "Anemone", x: ["Rose", "Lily", "Tulip"] },
    ],
  },
  fr_pj_blason: {
    producer: "Perrier-Jouët",
    fact: "A rosé Champagne with a label modelled on the Perrier-Jouët family crest. Pinot Noir red wine is blended in for red-fruit aromas.",
    quiz: [
      { q: "What does “Blason” in Perrier-Jouët Blason Rosé mean?", a: "A family coat of arms", x: ["A rose", "A queen", "A first love"] },
    ],
  },
  fr_armand_rose: {
    producer: "Famille Cattier",
    fact: "A rosé in a pink metal-plated bottle with a pewter spade label. Rapper Jay-Z acquired the brand in 2014.",
    quiz: [
      { q: "What nickname does Armand de Brignac Rosé get from the shape of its pewter label?", a: "Ace of Spades", x: ["King of Hearts", "Queen of Diamonds", "The Joker"] },
      { q: "Which American rapper acquired Armand de Brignac in 2014?", a: "Jay-Z", x: ["Kanye West", "Snoop Dogg", "Drake"] },
    ],
  },
  fr_piper: {
    producer: "Piper-Heidsieck",
    fact: "A Champagne recognisable at a glance by its bright red label. For many years it was the official Champagne of the Cannes Film Festival.",
    quiz: [
      { q: "To which queen is Piper-Heidsieck’s founder said to have dedicated his first cuvée?", a: "Marie Antoinette", x: ["Empress Joséphine", "Queen Victoria", "Catherine de’ Medici"] },
    ],
  },
  fr_charles_heidsieck: {
    producer: "Charles Heidsieck",
    fact: "A house founded in 1851 by Charles-Camille Heidsieck. It is known for NVs with a generous share of reserve wine and a rich, mature character.",
    quiz: [
      { q: "What happened to Charles Heidsieck’s founder, known in America as “Champagne Charlie”?", a: "He was jailed as a suspected spy during the Civil War", x: ["He survived the Titanic", "He joined Napoleon’s army", "He made a fortune in the Gold Rush"] },
    ],
  },
  fr_feuillatte: {
    producer: "Nicolas Feuillatte",
    fact: "A brand created in 1976 when many growers’ cooperatives joined forces. It is one of the best-selling Champagnes in France.",
    quiz: [
      { q: "What is distinctive about the maker of Nicolas Feuillatte Champagne?", a: "A union of cooperatives with thousands of growers", x: ["A noble family dating from the 17th century", "A monopole domaine with one vineyard", "A house exclusive to the Russian court"] },
    ],
  },
  fr_mumm: {
    producer: "G.H. Mumm",
    fact: "A house founded in Reims in 1827 by the German-born Mumm family. It is famous for the red sash running diagonally across its label.",
    quiz: [
      { q: "What inspired the red sash on Mumm Cordon Rouge?", a: "The red ribbon of the Légion d’honneur", x: ["The French flag", "A cardinal’s red hat", "The Russian imperial crest"] },
      { q: "At which sporting event was Mumm Cordon Rouge the podium Champagne for many years from 2000?", a: "Formula One (F1)", x: ["The Tour de France", "Wimbledon", "The FIFA World Cup"] },
    ],
  },
  fr_lanson_black: {
    producer: "Lanson",
    fact: "The flagship NV of a house founded in Reims in 1760. It skips malolactic fermentation, keeping a crisp, apple-like acidity.",
    quiz: [
      { q: "Which house emblem appears on the neck of Lanson Le Black Label?", a: "The Maltese cross", x: ["The fleur-de-lis", "A lion", "A crown"] },
      { q: "Which tennis tournament has Lanson been the official Champagne of since 1977?", a: "Wimbledon", x: ["Roland-Garros", "The US Open", "The Australian Open"] },
    ],
  },
  fr_billecart_rose: {
    producer: "Billecart-Salmon",
    fact: "A rosé Champagne famous for its pale salmon hue in a clear bottle. A Chardonnay-heavy blend with a little Pinot Noir red wine makes it delicate.",
    quiz: [
      { q: "Where does the name Billecart-Salmon come from?", a: "The surnames of the founding couple, married in 1818", x: ["Its salmon-coloured rosé", "Two village names", "The founding brothers’ nicknames"] },
    ],
  },
  fr_selosse_initial: {
    producer: "Jacques Selosse",
    fact: "The epicentre of the “grower Champagne” craze, made from the house’s own grapes. Fermented in oak like Burgundy, it makes Champagne that tastes like wine.",
    quiz: [
      { q: "Who leads Jacques Selosse and sparked the grower Champagne boom?", a: "Anselme Selosse", x: ["Rémi Krug", "Bernard de Nonancourt", "Charles Philipponnat"] },
      { q: "What does “RM” mean on a grower Champagne label like Jacques Selosse’s?", a: "A grower who makes wine from their own grapes (Récoltant-Manipulant)", x: ["A house that buys grapes (Négociant-Manipulant)", "A cooperative (Coopérative de Manipulation)", "A buyer’s own brand (Marque d’Acheteur)"] },
    ],
  },
  fr_philipponnat_goisses: {
    producer: "Philipponnat",
    fact: "A 5.5 ha vineyard on a south-facing slope of nearly 45 degrees overlooking the Marne. Warmer than the rest of Champagne, it yields powerful wines.",
    quiz: [
      { q: "What is Philipponnat Clos des Goisses’s place in Champagne history?", a: "It is considered the first single-vineyard Champagne", x: ["The first rosé Champagne", "The first brut Champagne", "The first blanc de blancs"] },
    ],
  },
  fr_deutz: {
    producer: "Deutz",
    fact: "A house founded in Aÿ in 1838 by German-born William Deutz and Pierre-Hubert Geldermann. An even blend of the three grapes gives it fine balance.",
    quiz: [
      { q: "Which Champagne house acquired Deutz in 1993?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  fr_henriot: {
    producer: "Henriot",
    fact: "A family house founded in Reims in 1808 by Apolline Henriot. It is known for a delicate style with a high share of Chardonnay.",
    quiz: [
      { q: "Which two great Burgundy houses did the Henriot family buy in the 1990s?", a: "Bouchard Père & Fils and William Fèvre", x: ["Louis Jadot and Joseph Drouhin", "Louis Latour and Faiveley", "Leroy and Leflaive"] },
    ],
  },
  fr_gosset: {
    producer: "Gosset",
    fact: "Champagne’s oldest wine house, begun in Aÿ in 1584 when Pierre Gosset made still wine. It uses a bottle modelled on an antique design.",
    quiz: [
      { q: "Which founding year makes Gosset the oldest wine house in Champagne?", a: "1584", x: ["1729", "1743", "1811"] },
    ],
  },
  fr_pommery: {
    producer: "Pommery",
    fact: "A Reims house built up by the widowed Madame Louise Pommery. It is famous for its vast cellars linking Roman-era chalk quarries.",
    quiz: [
      { q: "Which style did Pommery, maker of Brut Royal, launch in 1874, changing Champagne history?", a: "Brut, with almost no sugar", x: ["Rosé Champagne", "Vintage Champagne", "Blanc de blancs"] },
      { q: "Which woman led Pommery when it launched the first brut Champagne?", a: "Madame Louise Pommery", x: ["Madame Clicquot", "Lily Bollinger", "Carol Duval-Leroy"] },
    ],
  },
  fr_duval_leroy: {
    producer: "Duval-Leroy",
    fact: "A family house founded in 1859 in the Côte des Blancs village of Vertus. Unusually among large houses, it is still run by the founding family.",
    quiz: [
      { q: "Which businesswoman has led Duval-Leroy since losing her husband in 1991?", a: "Carol Duval-Leroy", x: ["Lily Bollinger", "Madame Clicquot", "Louise Pommery"] },
    ],
  },
  fr_ayala: {
    producer: "Ayala",
    fact: "A house founded in Aÿ in 1860 by Edmond de Ayala. It was known early on for dry Champagne with reduced sweetness.",
    quiz: [
      { q: "Which Champagne family acquired Ayala in 2005?", a: "Bollinger", x: ["LVMH", "Louis Roederer", "Taittinger"] },
    ],
  },
  fr_delamotte: {
    producer: "Delamotte",
    fact: "One of Champagne’s oldest houses, founded in 1760. It is made from Côte des Blancs grand cru Chardonnay.",
    quiz: [
      { q: "Which legendary Champagne, from a sister house sharing a wall with Delamotte, is made only in good years from one village’s Chardonnay?", a: "Salon", x: ["Krug Clos du Mesnil", "Dom Ruinart", "Taittinger Comtes de Champagne"] },
    ],
  },
  fr_dagueneau_silex: {
    producer: "Domaine Didier Dagueneau",
    fact: "The signature wine of Didier Dagueneau, the “enfant terrible of the Loire”, who lifted Pouilly-Fumé to the top rank of Sauvignon Blanc. Since he died in a light-aircraft crash in 2008, his son Louis-Benjamin has carried on.",
    quiz: [
      { q: "What does the name “Silex” refer to?", a: "Flint soil", x: ["Its silver label", "Latin for “silence”", "The founder’s dog’s name"] },
    ],
  },
  fr_ladoucette: {
    producer: "Baron de Ladoucette",
    fact: "Wine from the Ladoucette family, the largest estate owners in Pouilly-Fumé. Their home is the fairy-tale Château du Nozet.",
    quiz: [
      { q: "Which castle is home to the Ladoucette family, maker of de Ladoucette Pouilly-Fumé?", a: "Château du Nozet", x: ["Château de Tracy", "Château-Grillet", "Château de Saumur"] },
    ],
  },
  fr_bourgeois_sancerre: {
    producer: "Henri Bourgeois",
    fact: "The flagship Sancerre of a family winery handed down for generations in the village of Chavignol. It is considered a textbook crisp Sauvignon Blanc.",
    quiz: [
      { q: "Where did Henri Bourgeois found its new winery “Clos Henri” in 2000, in search of Sauvignon Blanc?", a: "Marlborough, New Zealand", x: ["Casablanca Valley, Chile", "Stellenbosch, South Africa", "Napa Valley, USA"] },
      { q: "What else is Chavignol, home of Henri Bourgeois, famous for?", a: "Crottin de Chavignol goat’s cheese", x: ["Oysters", "Truffles", "Mustard"] },
    ],
  },
  fr_jolivet_sancerre: {
    producer: "Pascal Jolivet",
    fact: "A young winery that began as a négociant with no vineyards and became a leader of the eastern Loire. It makes both Sancerre and Pouilly-Fumé.",
    quiz: [
      { q: "In what year did Pascal Jolivet found his wine company under his own name?", a: "1987", x: ["1808", "1920", "1961"] },
    ],
  },
  fr_vacheron_sancerre: {
    producer: "Domaine Vacheron",
    fact: "A family domaine in the heart of Sancerre village. It vinifies biodynamically farmed Sauvignon Blanc separately, plot by plot.",
    quiz: [
      { q: "Which other Domaine Vacheron wine is unusually highly rated for Sancerre?", a: "A Pinot Noir red", x: ["A Cabernet Sauvignon red", "A botrytised sweet wine", "A fortified wine"] },
    ],
  },
  fr_huet_vouvray: {
    producer: "Domaine Huet",
    fact: "Vouvray’s leading Chenin Blanc house. Depending on each year’s harvest, it makes dry, off-dry and sweet wines from the same vineyard.",
    quiz: [
      { q: "Domaine Huet’s three famous single vineyards are Le Mont, Clos du Bourg and which other?", a: "Le Haut-Lieu", x: ["La Roche aux Moines", "Clos de la Dioterie", "Les Baronnes"] },
    ],
  },
  fr_joly_coulee: {
    producer: "Nicolas Joly",
    fact: "A vineyard first planted by Cistercian monks in 1130. It is one of the few monopole AOCs where a single family owns the entire appellation.",
    quiz: [
      { q: "Which farming method did Nicolas Joly of Clos de la Coulée de Serrant champion around the world?", a: "Biodynamics", x: ["Hydroponics", "Irrigated mass production", "Greenhouse growing"] },
    ],
  },
  fr_rougeard: {
    producer: "Clos Rougeard",
    fact: "A Loire Cabernet Franc made in the traditional way by brothers Charly and Nady Foucault, who raised it to world cult status.",
    quiz: [
      { q: "Which brothers, owners of Bordeaux’s Château Montrose, bought Clos Rougeard in 2017?", a: "Martin and Olivier Bouygues", x: ["The Pinault family", "The Arnault family", "The Rothschild family"] },
    ],
  },
  fr_joguet_chinon: {
    producer: "Domaine Charles Joguet",
    fact: "The first domaine in Chinon to release separate single-vineyard cuvées. Clos de la Dioterie is its flagship vineyard of old Cabernet Franc vines.",
    quiz: [
      { q: "What was Charles Joguet doing in Paris before he inherited the family vineyard in 1957?", a: "Working as a painter and sculptor", x: ["Singing opera", "Directing films", "Working as an architect"] },
    ],
  },
  fr_pepiere_briords: {
    producer: "Domaine de la Pépière",
    fact: "A Muscadet from old vines planted in the 1930s–50s. Muscadet is an appellation, not a grape, and is the classic partner for oysters.",
    quiz: [
      { q: "What does “sur lie” mean on a Muscadet label like Clos des Briords?", a: "Aged on its yeast lees", x: ["Grown in riverside vineyards", "Harvested late", "Aged in new oak"] },
    ],
  },
  fr_trimbach_csh: {
    producer: "Trimbach",
    fact: "A 1.67 ha monopole in the heart of the Rosacker grand cru in Hunawihr. Tended by the Trimbach family for over 200 years, it is one of the world’s finest dry Rieslings.",
    quiz: [
      { q: "What does Trimbach deliberately leave off the Clos Sainte Hune label?", a: "The grand cru designation", x: ["The vintage", "The grape variety", "The producer’s name"] },
    ],
  },
  fr_trimbach_gewurz: {
    producer: "Trimbach",
    fact: "Alsace’s signature grape, bursting with lychee and rose. Trimbach is famous for making it dry, without sweetness.",
    quiz: [
      { q: "In what year did Trimbach, maker of this Gewurztraminer, start making wine in Alsace?", a: "1626", x: ["1639", "1731", "1919"] },
    ],
  },
  fr_hugel_gentil: {
    producer: "Famille Hugel",
    fact: "An Alsace-style blend of Gewurztraminer, Pinot Gris, Riesling, Sylvaner and more. “Gentil” was the old name for blends of noble grapes.",
    quiz: [
      { q: "In what year did the Hugel family, maker of Hugel Gentil, start making wine in Riquewihr?", a: "1639", x: ["1626", "1789", "1919"] },
    ],
  },
  fr_hugel_riesling: {
    producer: "Famille Hugel",
    fact: "Hugel’s flagship Riesling, famous for its yellow label. It is one of the bottles people most often meet on their first taste of Alsace wine.",
    quiz: [
      { q: "What label colour makes Hugel wines like this Riesling stand out from afar?", a: "Yellow", x: ["Black", "Blue", "Red"] },
      { q: "Which Alsace sweet wine categories did Jean Hugel help write into law in the 1980s?", a: "Vendanges Tardives and Sélection de Grains Nobles", x: ["Grand Cru and Premier Cru", "Crémant d’Alsace", "Vin de Table"] },
    ],
  },
  fr_zind_rangen: {
    producer: "Domaine Zind-Humbrecht",
    fact: "A vineyard on the steep volcanic slopes of Rangen, Alsace’s southernmost grand cru. Zind-Humbrecht was formed in 1959 when two families’ vineyards merged.",
    quiz: [
      { q: "Which qualification did Olivier Humbrecht of Zind-Humbrecht earn in 1989, the first Frenchman to do so?", a: "Master of Wine (MW)", x: ["Master Sommelier (MS)", "National Diploma of Oenology (DNO)", "Meilleur Ouvrier de France (MOF)"] },
    ],
  },
  fr_weinbach_schlossberg: {
    producer: "Domaine Weinbach",
    fact: "A domaine within the Clos des Capucins, first cultivated by Capuchin friars in 1612. The Faller family has run it since 1898.",
    quiz: [
      { q: "Who first cultivated Domaine Weinbach’s Clos des Capucins in 1612?", a: "Capuchin friars", x: ["Cistercian nuns", "The Knights Templar", "Jesuit priests"] },
      { q: "What record did Schlossberg, source of Weinbach’s Riesling, set in 1975?", a: "Alsace’s first grand cru", x: ["Alsace’s largest cooperative vineyard", "Alsace’s first certified-organic vineyard", "France’s smallest AOC"] },
    ],
  },
  fr_deiss_altenberg: {
    producer: "Domaine Marcel Deiss",
    fact: "Several grape varieties are interplanted in one vineyard, harvested and made together. So the label shows only the vineyard name in large letters instead of a grape.",
    quiz: [
      { q: "What wine philosophy did Jean-Michel Deiss of Marcel Deiss champion?", a: "Terroir over variety, with many grapes interplanted in one vineyard", x: ["Always use 100% of a single variety", "Use only amphorae instead of oak", "Make only sparkling wine"] },
    ],
  },
  fr_miraval: {
    producer: "Château Miraval (Famille Perrin)",
    fact: "The byword for celebrity rosé, with its first vintage in 2012. Château Miraval is in the inland Provence village of Correns.",
    quiz: [
      { q: "Which Hollywood couple first made Miraval rosé with the Perrin family?", a: "Brad Pitt and Angelina Jolie", x: ["Tom Cruise and Katie Holmes", "George and Amal Clooney", "Hugh Jackman and Deborra-Lee Furness"] },
      { q: "Which band recorded part of the album “The Wall” at Château Miraval’s recording studio?", a: "Pink Floyd", x: ["The Beatles", "The Rolling Stones", "Queen"] },
    ],
  },
  fr_minuty_m: {
    producer: "Château Minuty",
    fact: "A light, fresh rosé from a family on the Saint-Tropez peninsula since 1936. The family devised its wasp-waisted “corset” bottle in the 1960s.",
    quiz: [
      { q: "Which group became majority owner of Château Minuty, maker of M de Minuty, in 2023?", a: "LVMH (Moët Hennessy)", x: ["Pernod Ricard", "Groupe Castel", "Artémis"] },
    ],
  },
  fr_minuty_281: {
    producer: "Château Minuty",
    fact: "Minuty’s top rosé, launched in 2015. Its trademark is the deep blue decoration flowing down the side of the bottle.",
    quiz: [
      { q: "Where does the number in Château Minuty 281 come from?", a: "The Pantone number of a Mediterranean blue", x: ["The vineyard’s plot number", "Bottles made in the first year", "The vineyard’s altitude in metres"] },
    ],
  },
  fr_garrus: {
    producer: "Château d'Esclans",
    fact: "One of the world’s most expensive rosés, from old Grenache vines, fermented and aged in oak barrels. In 2019 LVMH became majority owner of Château d’Esclans.",
    quiz: [
      { q: "How is Château d'Esclans Garrus made differently from ordinary Provence rosé?", a: "It is fermented and aged in oak barrels", x: ["Red and white wine are blended", "Carbon dioxide is added", "The grapes are dried first"] },
      { q: "Who founded Château d'Esclans, maker of Garrus and Whispering Angel?", a: "Sacha Lichine", x: ["Gérard Bertrand", "Marc Perrin", "Michel Rolland"] },
    ],
  },
  fr_rockangel: {
    producer: "Château d'Esclans",
    fact: "The big brother of Whispering Angel. Part of it is fermented in oak for a richer, rounder taste.",
    quiz: [
      { q: "Which wine writer, owner of Bordeaux’s Château Prieuré-Lichine, was the father of Rock Angel’s creator Sacha Lichine?", a: "Alexis Lichine", x: ["Robert Parker", "Émile Peynaud", "Hugh Johnson"] },
    ],
  },
  fr_tempier: {
    producer: "Domaine Tempier (Famille Peyraud)",
    fact: "The great house that put Mourvèdre-based Bandol on the world map. The Peyraud family also helped create the Bandol AOC in 1941.",
    quiz: [
      { q: "Who, famous for Domaine Tempier’s kitchen and table, was a major inspiration to American chef Alice Waters?", a: "Lulu Peyraud", x: ["Julia Child", "Paul Bocuse", "Madame Clicquot"] },
    ],
  },
  fr_pibarnon: {
    producer: "Château de Pibarnon (Famille de Saint-Victor)",
    fact: "A great Bandol estate growing Mourvèdre on amphitheatre-shaped limestone slopes overlooking the sea.",
    quiz: [
      { q: "Which family bought Château de Pibarnon in 1977 and raised it to the top of Bandol?", a: "The de Saint-Victor family", x: ["The Peyraud family", "The Rougier family", "The Bertrand family"] },
    ],
  },
  fr_simone: {
    producer: "Château Simone (Famille Rougier)",
    fact: "An estate owning about half of Palette, a tiny AOC near Aix-en-Provence. It makes Clairette-based whites that age for decades.",
    quiz: [
      { q: "Which family has handed down Château Simone since 1830?", a: "The Rougier family", x: ["The Perrin family", "The Lichine family", "The Ott family"] },
    ],
  },
  fr_daumas_gassac: {
    producer: "Famille Guibert",
    fact: "A Languedoc legend whose first vintage came in 1978, on the advice of a geologist who spotted its glacial soils. It was called “the grand cru of the Languedoc”.",
    quiz: [
      { q: "Which legendary Bordeaux oenologist helped make Mas de Daumas Gassac’s first vintage?", a: "Émile Peynaud", x: ["Michel Rolland", "Jules Chauvet", "Denis Dubourdieu"] },
      { q: "Who founded Mas de Daumas Gassac, fought Robert Mondavi’s move into Aniane and appeared in the film “Mondovino”?", a: "Aimé Guibert", x: ["Gérard Bertrand", "Alain Brumont", "Sacha Lichine"] },
    ],
  },
  fr_bertrand_cdr: {
    producer: "Gérard Bertrand",
    fact: "A rosé whose bottle base is moulded like a rose in full bloom. The design won a young designer a competition prize in 2010.",
    quiz: [
      { q: "What is special about the Gérard Bertrand Côte des Roses bottle?", a: "Its base is shaped like a rose", x: ["It is heart-shaped", "It is made of blue glass", "Its label has braille"] },
      { q: "In which field did Gérard Bertrand, creator of Côte des Roses, make his name before focusing on wine?", a: "Rugby", x: ["Football", "Cycling", "Tennis"] },
    ],
  },
  fr_cedre: {
    producer: "Château du Cèdre",
    fact: "A family estate leading Cahors, the home of Malbec. It makes dark, powerful Malbec from organically farmed vineyards.",
    quiz: [
      { q: "What nickname did Cahors wines like Château du Cèdre earn long ago for their dark colour?", a: "Black wine", x: ["Blood wine", "Night wine", "Ink wine"] },
    ],
  },
  fr_montus: {
    producer: "Alain Brumont",
    fact: "Madiran’s flagship, made from 100% Tannat. Alain Brumont, who bought the estate in 1980, turned the supposedly rough Tannat into a fine wine.",
    quiz: [
      { q: "Who revived Madiran’s reputation with Château Montus?", a: "Alain Brumont", x: ["Gérard Bertrand", "Aimé Guibert", "Sacha Lichine"] },
    ],
  },
  fr_cauhape: {
    producer: "Domaine Cauhapé",
    fact: "A late-harvest sweet wine from Petit Manseng left to shrivel on the vine until late autumn. The name means “November Symphony”.",
    quiz: [
      { q: "According to a Jurançon legend, which French king had his lips rubbed with garlic and Jurançon wine at birth?", a: "Henri IV", x: ["Louis XIV", "Charlemagne", "Napoleon I"] },
    ],
  },
  fr_macle: {
    producer: "Domaine Jean Macle",
    fact: "The pinnacle of “vin jaune” (yellow wine), aged over six years under a film of yeast on the wine in the barrel. It smells of walnuts and spice.",
    quiz: [
      { q: "What is the volume of the “clavelin”, the traditional bottle for vin jaune like Jean Macle Château-Chalon?", a: "62 cl", x: ["75 cl", "50 cl", "37.5 cl"] },
      { q: "What is the minimum time vin jaune must age under its yeast film in barrel?", a: "6 years and 3 months", x: ["1 year", "3 years", "10 years"] },
    ],
  },
  fr_tissot_poulsard: {
    producer: "Domaine André et Mireille Tissot",
    fact: "A leading Jura domaine farmed biodynamically by Stéphane Tissot. Poulsard is a native Jura red grape as pale as a rosé.",
    quiz: [
      { q: "Which scientist grew up in Arbois, home of Domaine Tissot, tended vines there and studied fermentation?", a: "Louis Pasteur", x: ["Marie Curie", "Antoine Lavoisier", "Charles Darwin"] },
    ],
  },
};

export default T;
