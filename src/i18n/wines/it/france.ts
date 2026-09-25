import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  fr_latache: {
    fact: "Con la Romanée-Conti è uno dei due monopole di cui il DRC possiede l’intero vigneto. Supera di poco i 6 ettari, più del triplo della Romanée-Conti.",
    quiz: [{ q: "Come si chiama, come nel caso di La Tâche, un vigneto posseduto interamente da un solo domaine?", a: "Monopole", x: ["Climat", "Lieu-dit", "Métayage"] }],
  },
  fr_richebourg_drc: {
    fact: "Considerato il più opulento e concentrato tra i grand cru di Vosne-Romanée. Oltre al DRC, se ne dividono le parcelle Leroy, Anne Gros, Méo-Camuzet e altri.",
    quiz: [{ q: "Il Domaine de la Romanée-Conti, che produce questo Richebourg, appartiene alla famiglia de Villaine e a quale altra famiglia?", a: "La famiglia Leroy", x: ["La famiglia Rousseau", "La famiglia de Vogüé", "La famiglia Lafon"] }],
  },
  fr_rsv_drc: {
    fact: "Il nome viene dall’abbazia di Saint-Vivant, che curò questa terra nel Medioevo. Il DRC iniziò a produrlo nel 1966 prendendo il vigneto in affitto dalla famiglia Marey-Monge e lo acquistò nel 1988.",
    quiz: [
      { q: "Da dove viene il nome Romanée-Saint-Vivant?", a: "Dall’abbazia medievale di Saint-Vivant", x: ["Dal principe di Conti, nel XVIII secolo", "Da un generale di Napoleone", "Da una duchessa di Borgogna"] },
      { q: "A quale famiglia apparteneva il vigneto di Romanée-Saint-Vivant che il DRC prese in affitto e infine acquistò?", a: "La famiglia Marey-Monge", x: ["La famiglia Leroy", "La famiglia Liger-Belair", "La famiglia Mommessin"] },
    ],
  },
  fr_grandsechezeaux_drc: {
    fact: "Grand cru che amministrativamente appartiene al vicino comune di Flagey-Échezeaux, ma è considerato un vino di Vosne-Romanée. È molto più piccolo e più raro dell’Échezeaux.",
    quiz: [{ q: "Quale celebre grand cru cinto da un muro di pietra confina direttamente con il vigneto di Grands-Échezeaux?", a: "Clos de Vougeot", x: ["Clos de Tart", "Clos des Lambrays", "Clos de Bèze"] }],
  },
  fr_echezeaux_drc: {
    fact: "Il grand cru più esteso della zona di Vosne-Romanée, frazionato tra decine di proprietari. È considerato il grand cru rosso «d’ingresso» del DRC.",
    quiz: [{ q: "Quale affermazione sul vigneto grand cru di Échezeaux è corretta?", a: "È frazionato tra decine di proprietari", x: ["È un monopole del solo DRC", "Vi si può produrre solo vino bianco", "È stato promosso grand cru negli anni ’90"] }],
  },
  fr_montrachet_drc: {
    fact: "Vigneto di poco più di 8 ettari a cavallo tra Puligny e Chassagne, considerato la culla dei migliori Chardonnay del mondo.",
    quiz: [{ q: "Quale scrittore francese avrebbe detto che il Montrachet va bevuto «in ginocchio e a capo scoperto»?", a: "Alexandre Dumas", x: ["Victor Hugo", "Honoré de Balzac", "Émile Zola"] }],
  },
  fr_liger_romanee: {
    fact: "Monopole di meno di un ettaro sul pendio appena sopra la Romanée-Conti. All’inizio degli anni 2000 Louis-Michel Liger-Belair lo ha ripreso e la famiglia ha iniziato a vinificarlo in proprio.",
    quiz: [{ q: "Quale primato detiene La Romanée?", a: "È la più piccola AOC di Francia", x: ["È la più antica AOC di Francia", "È il grand cru più esteso della Borgogna", "È il primo vigneto con certificazione biologica di Francia"] }],
  },
  fr_meo_crosparantoux: {
    fact: "Premier cru reso leggendario da Henri Jayer, il «dio della Borgogna», che dissodò un terreno abbandonato dove crescevano topinambur. Jayer coltivava a mezzadria le vigne di Méo-Camuzet e fu il maestro di Jean-Nicolas Méo.",
    quiz: [{ q: "Quale vignaiolo, detto il «dio della Borgogna», dissodò il Cros Parantoux rendendolo leggendario?", a: "Henri Jayer", x: ["Armand Rousseau", "Georges Roumier", "Henri Gouges"] }],
  },
  fr_annegros_cdv: {
    fact: "Il Clos de Vougeot è un grand cru di 50 ettari cinto da un muro di pietra dai monaci nel XII secolo, oggi diviso tra circa 80 proprietari. Anne Gros ne cura la parcella Grand Maupertui.",
    quiz: [
      { q: "Quale ordine monastico cinse di mura e coltivò il Clos de Vougeot dal XII secolo?", a: "I cistercensi", x: ["I cluniacensi", "I gesuiti", "I francescani"] },
      { q: "Quale confraternita del vino di Borgogna ha sede nel castello del Clos de Vougeot?", a: "Chevaliers du Tastevin", x: ["Commanderie du Bontemps de Médoc", "Ordre des Coteaux de Champagne", "Les Compagnons du Beaujolais"] },
    ],
  },
  fr_leroy_musigny: {
    fact: "Domaine fondato nel 1988 da Lalou Bize-Leroy. Coltivato in biodinamica fin dall’inizio e con rese ridottissime, produce i vini più cari della Borgogna.",
    quiz: [{ q: "Chi guida il Domaine Leroy ed è stata fino al 1992 anche co-gerente del DRC?", a: "Lalou Bize-Leroy", x: ["Anne-Claude Leflaive", "Henri Jayer", "Christophe Roumier"] }],
  },
  fr_vogue_musigny: {
    fact: "Il maggior proprietario del grand cru Musigny, di cui possiede quasi due terzi. Le uve delle viti giovani vengono declassate a Chambolle-Musigny premier cru.",
    quiz: [{ q: "Quale vino raro produce de Vogüé, quasi in esclusiva, nel vigneto del Musigny?", a: "Musigny Blanc (bianco)", x: ["Musigny rosé", "Musigny spumante", "Musigny dolce botritizzato"] }],
  },
  fr_mugnier_musigny: {
    fact: "Frédéric Mugnier ha preso in mano il domaine di famiglia nel 1985 portandolo al vertice dello stile delicato di Chambolle. Nel 2004 ha ripreso il Clos de la Maréchale, dato in affitto a Faiveley.",
    quiz: [{ q: "Quale altro mestiere ha svolto fino alla fine degli anni ’90 Frédéric Mugnier, alla guida del Domaine Jacques-Frédéric Mugnier?", a: "Pilota d’aereo", x: ["Medico", "Avvocato", "Cuoco"] }],
  },
  fr_roumier_bm: {
    fact: "Domaine di culto di Chambolle-Musigny guidato da Christophe Roumier. Il Bonnes-Mares è un grand cru a cavallo tra Chambolle-Musigny e Morey-Saint-Denis.",
    quiz: [
      { q: "Chi guida il Domaine Georges Roumier e lo ha reso un domaine di culto?", a: "Christophe Roumier", x: ["Eric Rousseau", "Frédéric Mugnier", "Jean-Nicolas Méo"] },
      { q: "Il grand cru Bonnes-Mares si estende tra Chambolle-Musigny e quale altro comune?", a: "Morey-Saint-Denis", x: ["Gevrey-Chambertin", "Vosne-Romanée", "Vougeot"] },
    ],
  },
  fr_dujac_cdlr: {
    fact: "Domaine fondato a Morey-Saint-Denis nel 1968 dal parigino Jacques Seysses. È famoso per la fermentazione a grappolo intero, con i raspi.",
    quiz: [{ q: "Chi fondò il Domaine Dujac nel 1968?", a: "Jacques Seysses", x: ["Henri Jayer", "Armand Rousseau", "Christophe Roumier"] }],
  },
  fr_ponsot_cdlr: {
    fact: "Nel 2008, quando a un’asta di New York comparve un Clos Saint-Denis 1945 di Ponsot, Laurent Ponsot intervenne di persona per fermarlo: Ponsot aveva prodotto il primo vino di quel vigneto solo nel 1982.",
    quiz: [{ q: "Quale famigerato falsario di vini fu smascherato quando Laurent Ponsot fermò i falsi Ponsot all’asta del 2008?", a: "Rudy Kurniawan", x: ["Hardy Rodenstock", "Bernard Madoff", "Frank Abagnale"] }],
  },
  fr_closdetart: {
    fact: "Grand cru monopole che dal 1141 ha avuto solo quattro proprietari: le monache di Tart, la famiglia Marey-Monge, la famiglia Mommessin e oggi Artémis, della famiglia Pinault.",
    quiz: [
      { q: "Chi possedette il Clos de Tart dal 1141 fino alla Rivoluzione francese?", a: "Le monache cistercensi dell’abbazia di Tart", x: ["I monaci dell’abbazia di Cluny", "I duchi di Borgogna", "I Templari"] },
      { q: "Chi ha acquistato il Clos de Tart dopo la famiglia Mommessin?", a: "Artémis di François Pinault", x: ["LVMH di Bernard Arnault", "Il miliardario americano Stan Kroenke", "I fratelli Bouygues"] },
    ],
  },
  fr_lambrays: {
    fact: "Grand cru di Morey-Saint-Denis posseduto quasi interamente da un solo domaine. Promosso grand cru solo nel 1981, è stato acquistato da LVMH nel 2014.",
    quiz: [
      { q: "In che anno il Clos des Lambrays è stato promosso grand cru?", a: "1981", x: ["1936", "1961", "2001"] },
      { q: "Quale gruppo ha acquistato il Clos des Lambrays nel 2014?", a: "LVMH", x: ["Artémis (famiglia Pinault)", "Groupe Castel", "Pernod Ricard"] },
    ],
  },
  fr_rousseau_chambertin: {
    fact: "Il Chambertin è il «vino dei re» che Napoleone avrebbe portato con sé persino in campagna militare. Armand Rousseau è considerato il miglior domaine di Gevrey-Chambertin.",
    quiz: [
      { q: "Quale personaggio storico, secondo la tradizione, amava più di tutti il Chambertin?", a: "Napoleone", x: ["Luigi XIV", "Carlo Magno", "Giovanna d’Arco"] },
      { q: "Da dove verrebbe, secondo la tradizione, il nome «Chambertin»?", a: "Dal campo di un contadino di nome Bertin (champ de Bertin)", x: ["Dalla chiesa dell’abbazia di Bertin", "Dall’accampamento del generale romano Bertinus", "Da un’antica parola per «collina verde»"] },
    ],
  },
  fr_rousseau_beze: {
    fact: "Uno dei vigneti più antichi della Borgogna, dissodato nel VII secolo dai monaci dell’abbazia di Bèze. Il suo vino può essere venduto anche con il nome di «Chambertin».",
    quiz: [
      { q: "Chi dissodò per primo il vigneto di Chambertin-Clos de Bèze?", a: "I monaci dell’abbazia di Bèze, nel VII secolo", x: ["I monaci cistercensi del XII secolo", "Il principe di Conti nel XVIII secolo", "L’esercito di Napoleone nel XIX secolo"] },
      { q: "Quale privilegio concede il disciplinare a Chambertin-Clos de Bèze?", a: "Può essere venduto anche come «Chambertin»", x: ["Può chiamarsi «Romanée-Conti»", "Può essere venduto senza annata", "Anche il suo bianco può essere venduto come grand cru"] },
    ],
  },
  fr_bichot_moutonne: {
    fact: "Monopole di Long-Depaquit, il domaine di Chablis di Albert Bichot. Si estende a cavallo di due grand cru di Chablis, Vaudésir e Preuses.",
    quiz: [{ q: "In che anno fu fondata Albert Bichot, che produce La Moutonne?", a: "1831", x: ["1731", "1797", "1880"] }],
  },
  fr_leflaive_puligny: {
    fact: "Grande casa di bianchi simbolo di Puligny-Montrachet. Negli anni ’90 Anne-Claude Leflaive convertì tutti i vigneti alla biodinamica, guidando la svolta ecologica della Borgogna.",
    quiz: [{ q: "Chi guidò la conversione del Domaine Leflaive alla biodinamica negli anni ’90?", a: "Anne-Claude Leflaive", x: ["Lalou Bize-Leroy", "Dominique Lafon", "Jean-François Coche-Dury"] }],
  },
  fr_leflaive_batard: {
    fact: "Grand cru sul pendio appena sotto il Montrachet. Come i vicini Chevalier («cavaliere») e Pucelle («fanciulla»), ha un nome legato alla storia della famiglia di un antico signore.",
    quiz: [{ q: "Che cosa significa «Bâtard» in Bâtard-Montrachet?", a: "Bastardo (figlio illegittimo)", x: ["Cavaliere", "Fanciulla", "Monaco"] }],
  },
  fr_cochedury_cc: {
    fact: "Grand cru bianco della collina di Corton. Quello di Coche-Dury è prodotto in quantità minime ed è tra i bianchi di Borgogna più difficili da trovare.",
    quiz: [{ q: "Secondo la leggenda, perché Carlo Magno fece piantare uve bianche sulla collina di Corton?", a: "Perché il vino rosso gli macchiava la barba bianca", x: ["Perché il papa aveva vietato il vino rosso", "Perché l’uva bianca si vendeva più cara", "Perché la guerra aveva distrutto tutte le uve rosse"] }],
  },
  fr_cochedury_meursault: {
    fact: "Produttore leggendario il cui Meursault comunale si vende a prezzi da grand cru di altri domaine. La fama l’ha costruita Jean-François Coche-Dury, e oggi il figlio Raphaël ne prosegue il lavoro.",
    quiz: [{ q: "Quale vignaiolo ha costruito la fama del Meursault di Coche-Dury?", a: "Jean-François Coche-Dury", x: ["Henri Jayer", "Dominique Lafon", "Aubert de Villaine"] }],
  },
  fr_bonneau_cc: {
    fact: "Raro domaine che produce solo due grand cru, Corton-Charlemagne e Corton. Nel 2017 è stato acquistato dal miliardario americano Stan Kroenke.",
    quiz: [{ q: "Quale cantina di culto della Napa Valley possiede il miliardario americano che acquistò Bonneau du Martray nel 2017?", a: "Screaming Eagle", x: ["Harlan Estate", "Opus One", "Sine Qua Non"] }],
  },
  fr_latour_cc: {
    fact: "Azienda di famiglia attiva dal 1797, tra i maggiori proprietari della collina di Corton. Ancora oggi costruisce le botti nella propria tonnelleria.",
    quiz: [
      { q: "Quale château possiede Louis Latour come sede ad Aloxe-Corton, sulla collina di Corton?", a: "Château Corton Grancey", x: ["Château de Meursault", "Château de Puligny-Montrachet", "Château de Pommard"] },
      { q: "In che anno inizia la storia di Louis Latour, produttore di questo Corton-Charlemagne?", a: "1797", x: ["1731", "1859", "1920"] },
    ],
  },
  fr_faiveley_cortons: {
    fact: "Grand cru monopole di Corton che porta nel nome del vigneto quello della famiglia produttrice. Faiveley è un’azienda di famiglia che si tramanda di generazione in generazione a Nuits-Saint-Georges.",
    quiz: [
      { q: "In che anno Faiveley, produttore di questo vino, aprì a Nuits-Saint-Georges?", a: "1825", x: ["1731", "1797", "1920"] },
      { q: "Quale monopole ha vinificato in affitto Faiveley per oltre 50 anni, prima di restituirlo alla famiglia Mugnier nel 2004?", a: "Clos de la Maréchale", x: ["Clos de Tart", "Clos des Lambrays", "Clos des Ducs"] },
    ],
  },
  fr_drouhin_mouches: {
    fact: "Premier cru di Beaune che Maurice Drouhin acquistò pezzo per pezzo da vari proprietari negli anni ’20. Drouhin ne è il maggiore proprietario.",
    quiz: [
      { q: "Quale insetto indicano le «mouches» del Clos des Mouches?", a: "Le api", x: ["Le farfalle", "Le libellule", "Le coccinelle"] },
      { q: "Dove si trova la cantina fondata negli Stati Uniti nel 1987 da Joseph Drouhin, produttore del Clos des Mouches?", a: "In Oregon", x: ["Nella Napa Valley", "A Sonoma", "Nello stato di Washington"] },
    ],
  },
  fr_bouchard_enfant: {
    fact: "Monopole di Beaune Grèves curato un tempo dalle suore carmelitane. Il nome nasce dalla storia di una suora che avrebbe predetto la nascita di Luigi XIV; Bouchard lo acquistò nel 1791, dopo la Rivoluzione.",
    quiz: [
      { q: "Che cosa significa il nome «Vigne de l’Enfant Jésus»?", a: "La vigna di Gesù Bambino", x: ["La vigna della Madonna", "La vigna del re", "La vigna dell’abate"] },
      { q: "Di quale re una suora carmelitana avrebbe predetto la nascita, secondo la storia legata a Vigne de l’Enfant Jésus?", a: "Luigi XIV", x: ["Luigi XVI", "Enrico IV", "Napoleone I"] },
    ],
  },
  fr_hospices_rolin: {
    fact: "Vino dei vigneti donati agli Hospices de Beaune, ospedale di beneficenza fondato nel 1443. Ogni anno viene venduto nell’asta di beneficenza di vini più famosa del mondo.",
    quiz: [
      { q: "Quando si tiene l’asta di beneficenza in cui si vende la Cuvée Nicolas Rolin degli Hospices de Beaune?", a: "Ogni anno, la terza domenica di novembre", x: ["Ogni anno, la prima domenica di settembre", "Una volta ogni cinque anni, in primavera", "Ogni anno, il 1° gennaio"] },
      { q: "Chi era la moglie di Nicolas Rolin, con cui fondò gli Hospices de Beaune?", a: "Guigone de Salins", x: ["Madame Clicquot", "Anna d’Austria", "Margherita di Borgogna"] },
    ],
  },
  fr_dangerville_ducs: {
    fact: "Monopole premier cru di Volnay, un tempo vigneto dei duchi di Borgogna. Negli anni ’20 e ’30 il marchese d’Angerville fu, con Henri Gouges e altri, tra i pionieri dell’imbottigliamento al domaine.",
    quiz: [
      { q: "A chi si riferiscono i «Ducs» del Clos des Ducs?", a: "Agli antichi duchi di Borgogna", x: ["Ai vescovi della curia papale", "Ai comandanti delle legioni romane", "Ai monaci di un monastero"] },
      { q: "In che cosa fu pioniere il marchese d’Angerville con i suoi colleghi negli anni ’20 e ’30?", a: "Nell’imbottigliare al domaine invece di vendere ai négociant", x: ["Nell’introdurre lo spumante metodo champenoise", "Nel piantare Cabernet Sauvignon in Borgogna", "Nell’adottare il tappo a vite"] },
    ],
  },
  fr_lafon_perrieres: {
    fact: "Grande casa simbolo di Meursault, che possiede anche una piccola parte del grand cru Montrachet. Perrières, che prende il nome da antiche cave di pietra, è considerato il miglior premier cru di Meursault.",
    quiz: [{ q: "Quale membro della famiglia Lafon diede vita nel 1923 alla «Paulée de Meursault», la festa dell’ultimo giorno delle «Trois Glorieuses» di novembre?", a: "Il conte Jules Lafon", x: ["Louis Latour", "Joseph Drouhin", "Henri Jayer"] }],
  },
  fr_fevre_lesclos: {
    fact: "Les Clos è il più esteso dei grand cru di Chablis. William Fèvre è considerato il domaine che possiede più grand cru di Chablis.",
    quiz: [
      { q: "Quanti sono in tutto i grand cru di Chablis, tra cui Les Clos di William Fèvre?", a: "7", x: ["3", "12", "33"] },
      { q: "Quale maison di champagne acquistò William Fèvre nel 1998?", a: "Henriot", x: ["Bollinger", "Taittinger", "Laurent-Perrier"] },
    ],
  },
  fr_raveneau: {
    fact: "Leggenda di Chablis fondata nel 1948 da François Raveneau. Affina in vecchie botti di rovere Chablis capaci di reggere decenni.",
    quiz: [{ q: "Con quale altra grande famiglia di Chablis si imparentò François Raveneau tramite matrimonio?", a: "La famiglia Dauvissat", x: ["La famiglia Fèvre", "La famiglia Laroche", "La famiglia Bichot"] }],
  },
  fr_dauvissat: {
    fact: "Con i parenti Raveneau è considerato il vertice di Chablis. In una zona dove dominano le vasche d’acciaio, resta fedele all’affinamento in botte.",
    quiz: [{ q: "Quale tecnica, importata dalla Côte d’Or, usano grandi domaine di Chablis come Vincent Dauvissat?", a: "Fermentazione in botte e lungo affinamento sulle fecce", x: ["Macerazione carbonica", "Appassimento delle uve", "Invecchiamento in solera"] }],
  },
  fr_laroche: {
    fact: "La cantina d’affinamento di Laroche è l’«Obédiencerie», edificio monastico del IX secolo. Qui furono custodite le reliquie di San Martino, portate da Tours nell’877 per sottrarle ai Normanni.",
    quiz: [{ q: "Quale santo onora il nome di Chablis Saint Martin del Domaine Laroche?", a: "San Martino, vescovo di Tours", x: ["San Bernardo, guida dei cistercensi", "San Dionigi, primo vescovo di Parigi", "Santa Giovanna d’Arco"] }],
  },
  fr_fuisse: {
    fact: "Grande casa di Chardonnay simbolo del Mâconnais. Dall’annata 2020 il Pouilly-Fuissé è la prima denominazione del Mâconnais ad avere vigneti premier cru.",
    quiz: [{ q: "Quale classificazione è nata a Pouilly-Fuissé, dove si trova Château-Fuissé, a partire dall’annata 2020?", a: "Premier cru", x: ["Grand cru", "Cru Bourgeois", "Cru classé"] }],
  },
  fr_lapierre_morgon: {
    fact: "Pioniere del vino naturale, vinificato quasi senza anidride solforosa. Con Foillard, Thévenet e Breton formava la «banda dei quattro» del Beaujolais.",
    quiz: [{ q: "Quale chimico e négociant ispirò la vinificazione senza additivi alla «banda dei quattro» del Beaujolais, tra cui Marcel Lapierre?", a: "Jules Chauvet", x: ["Émile Peynaud", "Louis Pasteur", "Henri Jayer"] }],
  },
  fr_jacques_mav: {
    fact: "Con l’acquisto da parte di Louis Jadot nel 1996 fu il primo caso di una grande casa di Borgogna entrata nei cru del Beaujolais. Produce un Gamay vinificato alla borgognona, da lungo invecchiamento.",
    quiz: [{ q: "Da dove viene il nome «Moulin-à-Vent», dove si trova Château des Jacques?", a: "Da un vecchio mulino a vento sulla collina del paese", x: ["Da un mulino ad acqua di epoca romana", "Dal nome di un fiume ventoso", "Dal nome di un antico monastero"] }],
  },
  fr_jadot_bjv: {
    fact: "Denominazione di livello superiore, prodotta in una serie di comuni designati del Beaujolais settentrionale. In etichetta c’è lo stemma con il volto di Bacco, simbolo di Louis Jadot.",
    quiz: [
      { q: "Di chi è il volto nello stemma sull’etichetta di Louis Jadot Beaujolais-Villages?", a: "Bacco, dio del vino", x: ["Nettuno, dio del mare", "Apollo, dio del sole", "San Vincenzo, patrono dei vignaioli"] },
      { q: "Quanti sono i «cru», il livello più alto del Beaujolais, che possono riportare il nome del comune?", a: "10", x: ["3", "7", "22"] },
    ],
  },
  fr_duboeuf_fleurie: {
    fact: "Cru del Beaujolais profumato e morbido, come suggerisce il nome che evoca i fiori. È famoso per l’etichetta a fiori di Duboeuf.",
    quiz: [{ q: "Quale soprannome si dà spesso ai Fleurie come quello di Georges Duboeuf, per il loro gusto profumato ed elegante?", a: "La regina del Beaujolais", x: ["Il re del Beaujolais", "Il cavaliere del Beaujolais", "Il monaco del Beaujolais"] }],
  },
  fr_guigal_mouline: {
    fact: "Il primo vino da vigneto singolo di Guigal, da un pendio ad anfiteatro della Côte Blonde. Al Syrah si aggiunge un po’ di Viognier, fermentato insieme.",
    quiz: [
      { q: "Con quale soprannome si indicano insieme i tre vini La Mouline, La Landonne e La Turque di Guigal?", a: "I «La La»", x: ["Triple Crown", "Les Trois", "Il trio della Côte-Rôtie"] },
      { q: "Qual è la prima annata di La Mouline di Guigal?", a: "1966", x: ["1946", "1978", "1985"] },
    ],
  },
  fr_guigal_landonne: {
    fact: "Il più scuro e potente dei «La La», Syrah al 100% dai ripidi pendii della Côte Brune. È un vigneto acquistato a pezzi da vari proprietari e ripiantato.",
    quiz: [{ q: "Qual è la prima annata di La Landonne di Guigal?", a: "1978", x: ["1966", "1985", "1995"] }],
  },
  fr_guigal_turque: {
    fact: "Il più giovane dei «La La», da un vigneto a lungo abbandonato che Guigal ha ripiantato all’inizio degli anni ’80. Pur trovandosi nella Côte Brune, contiene un po’ di Viognier.",
    quiz: [{ q: "Qual è la prima annata di La Turque di Guigal?", a: "1985", x: ["1966", "1978", "1999"] }],
  },
  fr_guigal_cdr: {
    fact: "Il vino quotidiano simbolo di Guigal, casa fondata nel 1946 da Étienne Guigal ad Ampuis. Da grande nome del Rodano settentrionale, ha un’alta percentuale di Syrah.",
    quiz: [
      { q: "Quale antico castello della Côte-Rôtie ha acquistato Guigal nel 1995 per farne la propria sede?", a: "Château d’Ampuis", x: ["Château-Grillet", "Château Rayas", "Château La Nerthe"] },
      { q: "In che anno Étienne Guigal fondò la casa Guigal?", a: "1946", x: ["1808", "1834", "1990"] },
    ],
  },
  fr_chapoutier_belleruche: {
    fact: "Il Côtes du Rhône quotidiano di Chapoutier, grande casa dell’Hermitage attiva dal 1808. Su un lato dell’etichetta sono impressi i punti in rilievo del Braille.",
    quiz: [{ q: "Che cosa aggiunge Chapoutier dagli anni ’90 su tutte le sue etichette, compresa quella di Belleruche?", a: "La scrittura Braille per i non vedenti", x: ["Un codice QR", "La firma del fondatore", "La mappa del vigneto"] }],
  },
  fr_chapoutier_sizeranne: {
    fact: "Vino di un vigneto acquistato dalla famiglia di Maurice Monier de la Sizeranne, non vedente che ideò un Braille abbreviato. Nel 1994 fu il primo vino con l’etichetta in Braille.",
    quiz: [{ q: "Chi era Maurice Monier de la Sizeranne, che dà il nome a questo vino e ispirò le etichette in Braille di Chapoutier?", a: "Un non vedente che si impegnò a diffondere il Braille", x: ["Il fondatore di Chapoutier", "Un vescovo della curia di Avignone", "Un generale di Napoleone"] }],
  },
  fr_jaboulet_chapelle: {
    fact: "Leggenda del Rodano che prende il nome dalla cappella in cima alla collina dell’Hermitage. L’annata 1961 è considerata uno dei migliori vini del XX secolo.",
    quiz: [
      { q: "Da che cosa della collina dell’Hermitage viene il nome La Chapelle?", a: "Da una piccola cappella in cima alla collina", x: ["Dalla cattedrale di un antico monastero", "Da un casino di caccia reale", "Da un tempio romano"] },
      { q: "Quale famiglia, proprietaria di Château La Lagune a Bordeaux, acquistò nel 2006 Paul Jaboulet Aîné, produttore di La Chapelle?", a: "La famiglia Frey", x: ["La famiglia Perrin", "La famiglia Guigal", "La famiglia Rothschild"] },
    ],
  },
  fr_jaboulet_p45: {
    fact: "Il vino quotidiano simbolo di Paul Jaboulet Aîné, grande casa del Rodano aperta nel 1834. È un Côtes du Rhône facile, da uve del Rodano meridionale.",
    quiz: [{ q: "Che cosa significa il nome Parallèle 45?", a: "Il 45° parallelo nord, che passa vicino alla cantina", x: ["Il 45° anniversario della fondazione", "45 vitigni diversi", "45 mesi di affinamento"] }],
  },
  fr_chave_hermitage: {
    fact: "Il miglior domaine del Rodano, che assembla in una sola bottiglia i vini di diverse parcelle della collina dell’Hermitage. La famiglia Chave acquista vigne all’Hermitage dal 1865.",
    quiz: [{ q: "Da quale anno, secondo l’etichetta di Jean-Louis Chave, la famiglia coltiva la vite «di padre in figlio»?", a: "1481", x: ["1731", "1808", "1946"] }],
  },
  fr_jamet: {
    fact: "Domaine tradizionalista che assembla il Syrah di diverse parcelle della Côte-Rôtie. Ama la fermentazione a grappolo intero ed è considerato l’archetipo del Syrah speziato del Rodano settentrionale.",
    quiz: [{ q: "A che cosa si riferisce il nome «Côte-Rôtie» (collina arrostita), dove produce il Domaine Jamet?", a: "Ai ripidi pendii esposti a sud, arroventati dal sole", x: ["A un terreno di cenere vulcanica", "All’affinamento in botti tostate", "A un vecchio vigneto bruciato da un incendio"] }],
  },
  fr_clape_cornas: {
    fact: "Domaine che ha fatto conoscere Cornas vinificando Syrah in modo tradizionale quando la denominazione era ancora sconosciuta. Oggi lo portano avanti il figlio e il nipote.",
    quiz: [{ q: "Quale significato viene attribuito al toponimo «Cornas», dove si trova Auguste Clape?", a: "Terra bruciata (dal celtico)", x: ["Collina sassosa", "Terra del papa", "Fiume nero"] }],
  },
  fr_grillet: {
    fact: "Santuario del Viognier, dove un’unica tenuta occupa da sola un’intera AOC. Il suo marchio è la bottiglia bruna, alta e sottile, che nessun’altra cantina francese usa.",
    quiz: [
      { q: "Che cosa ha di speciale l’AOC Château-Grillet?", a: "Un’unica tenuta occupa da sola l’intera AOC", x: ["È l’unica AOC di spumante del Rodano", "Deve assemblare rosso e bianco", "Paga ogni anno un tributo alla curia papale"] },
      { q: "Quale proprietario di Château Latour, a Bordeaux, acquistò Château-Grillet nel 2011?", a: "François Pinault", x: ["Bernard Arnault", "Martin Bouygues", "Stan Kroenke"] },
    ],
  },
  fr_vernay_condrieu: {
    fact: "Il domaine di Georges Vernay, che negli anni ’60 salvò il Viognier dall’estinzione. Era soprannominato «il papa di Condrieu».",
    quiz: [{ q: "Che cosa accadde ai vigneti di Condrieu negli anni ’60, quando Georges Vernay difese il Viognier?", a: "Si ridussero a pochi ettari, rischiando di sparire", x: ["Vi fu scoperta per la prima volta la fillossera", "Furono promossi grand cru", "Furono convertiti alla produzione di rossi"] }],
  },
  fr_rayas: {
    fact: "Vino di culto di Châteauneuf-du-Pape, Grenache al 100% da terreni sabbiosi circondati dai boschi. È famoso anche per la vecchia cantina e l’etichetta semplice.",
    quiz: [{ q: "Quale famiglia guida da generazioni Château Rayas?", a: "La famiglia Reynaud", x: ["La famiglia Perrin", "La famiglia Brunier", "La famiglia Avril"] }],
  },
  fr_closdespapes: {
    fact: "Grande nome di Châteauneuf-du-Pape tramandato di generazione in generazione dalla famiglia Avril. L’annata 2007 fu al primo posto nella classifica «Wine of the Year» di Wine Spectator.",
    quiz: [{ q: "Quale famiglia porta avanti da generazioni Clos des Papes?", a: "La famiglia Avril", x: ["La famiglia Reynaud", "La famiglia Brunier", "La famiglia Féraud"] }],
  },
  fr_vieuxtelegraphe: {
    fact: "Châteauneuf-du-Pape dall’altopiano di La Crau, coperto di ciottoli arrotondati (galets). La famiglia Brunier lo coltiva dalla fine dell’Ottocento.",
    quiz: [
      { q: "Da dove viene il nome Vieux Télégraphe?", a: "Dalla torre del telegrafo ottico costruita da Chappe a fine Settecento", x: ["Da un ufficio telegrafico dell’Ottocento", "Dal campanile della curia papale", "Da una cabina di segnalazione ferroviaria"] },
      { q: "Come si chiama l’altopiano coperto di ciottoli arrotondati dove si trova Vieux Télégraphe?", a: "La Crau", x: ["La Nerthe", "Côte Blonde", "Les Bessards"] },
    ],
  },
  fr_pegau: {
    fact: "Châteauneuf-du-Pape tradizionalista guidato da Paul Féraud e dalla figlia Laurence. Fermenta le uve a grappolo intero e affina a lungo in grandi botti (foudres).",
    quiz: [{ q: "Che cosa significa il nome «Pégau» del Domaine du Pégau?", a: "Una brocca da vino medievale in terracotta", x: ["Il cappello del papa", "Un campo pieno di ciottoli", "Un nido di colombi"] }],
  },
  fr_lanerthe: {
    fact: "Una delle tenute più antiche di Châteauneuf-du-Pape, citata già in documenti del XVI secolo. Unisce Grenache, Syrah e Mourvèdre in vini equilibrati.",
    quiz: [{ q: "Che cosa significa il nome «Châteauneuf-du-Pape», dove si trova Château La Nerthe?", a: "Il castello nuovo del papa", x: ["L’antica vigna del papa", "Il vino del nuovo papa", "Il giardino estivo del papa"] }],
  },
  fr_bonneau_celestins: {
    fact: "Leggenda di Châteauneuf-du-Pape, affinata a lungo in una stretta cantina sotto il paese ed uscita solo nelle annate migliori. Dopo la morte di Henri Bonneau nel 2016, il figlio Marcel ne ha preso il testimone.",
    quiz: [{ q: "Quale altra cuvée produce Henri Bonneau oltre alla Réserve des Célestins?", a: "Cuvée Marie Beurrier", x: ["Cuvée Da Capo", "Hommage à Jacques Perrin", "La Crau"] }],
  },
  fr_perrin_cdr: {
    fact: "Il Côtes du Rhône quotidiano della famiglia Perrin, che guida Château de Beaucastel. Unisce Grenache, Syrah e Mourvèdre.",
    quiz: [{ q: "Quale rosé provenzale ha creato la famiglia Perrin in collaborazione con star di Hollywood?", a: "Miraval", x: ["Whispering Angel", "Minuty", "Domaines Ott"] }],
  },
  fr_aqueria_tavel: {
    fact: "Tenuta simbolo dell’AOC Tavel, dove è ammesso solo il rosé. Più scuro di colore e più strutturato dei rosé provenzali, si abbina bene al cibo.",
    quiz: [{ q: "Del Tavel, rosé come quello di Château d’Aqueria, si dice «il rosé dei re, il ○○ dei rosé». Qual è la parola mancante?", a: "Re", x: ["Regina", "Papa", "Imperatore"] }],
  },
  fr_dp_rose: {
    fact: "Il rosé di Dom Pérignon, prodotto solo nelle annate migliori. La prima annata, il 1959, fu venduta quasi tutta allo scià di Persia.",
    quiz: [{ q: "In quale storico banchetto del 1971 si brindò con Dom Pérignon Rosé 1959?", a: "La festa per i 2500 anni dell’Impero persiano", x: ["La cena d’apertura dell’Esposizione universale di Parigi", "La cena d’insediamento del presidente Kennedy", "Il matrimonio di Ranieri III di Monaco"] }],
  },
  fr_moet_rose: {
    fact: "La versione rosé di Moët Impérial. Con l’aggiunta di vino rosso da Pinot Nero ottiene un colore rosa con profumi di fragola e ciliegia.",
    quiz: [{ q: "In che anno fu fondata Moët & Chandon, che produce il Rosé Impérial?", a: "1743", x: ["1729", "1772", "1811"] }],
  },
  fr_moet_ice: {
    fact: "Uscito nel 2011, è il primo champagne al mondo pensato per essere bevuto con il ghiaccio. È dolce e intenso perché il gusto non si annacqui quando il ghiaccio si scioglie.",
    quiz: [{ q: "Qual è il modo consigliato per gustare Moët & Chandon Ice Impérial?", a: "In un grande bicchiere con ghiaccio", x: ["Riscaldato", "Mescolato a metà con ginger ale", "Con la cannuccia direttamente dalla bottiglia"] }],
  },
  fr_veuve_lgd: {
    fact: "La cuvée di prestigio di Veuve Clicquot. Fu presentata nel 1972, per il bicentenario della maison, con l’annata 1962.",
    quiz: [{ q: "Chi onora il nome La Grande Dame («la grande signora») di Veuve Clicquot?", a: "Madame Clicquot", x: ["Maria Antonietta", "L’imperatrice Giuseppina", "Lily Bollinger"] }],
  },
  fr_veuve_rose: {
    fact: "Rosé ottenuto aggiungendo vino rosso all’assemblaggio della Yellow Label. Veuve Clicquot è nota per essere stata la prima maison a produrre champagne rosé con questo metodo di assemblaggio.",
    quiz: [{ q: "In che anno Madame Clicquot creò il primo champagne rosé per assemblaggio con vino rosso, come il Veuve Clicquot Rosé?", a: "1818", x: ["1729", "1874", "1921"] }],
  },
  fr_roederer_collection: {
    fact: "Il non millesimato di Louis Roederer uscito nel 2021 al posto dello storico Brut Premier. Si basa su una «riserva perpetua» che assembla i vini di riserva accumulati anno dopo anno.",
    quiz: [{ q: "Che cosa indicano i numeri come «242» o «243» di Louis Roederer Collection?", a: "Il numero progressivo dell’assemblaggio dalla fondazione nel 1776", x: ["I mesi di affinamento", "Il numero di vini assemblati", "Le bottiglie prodotte (in migliaia)"] }],
  },
  fr_krug_gc: {
    fact: "Lo champagne simbolo di Krug, assemblaggio di oltre 120 vini di una decina di annate diverse. Ogni bottiglia riporta il numero della sua «Édition».",
    quiz: [{ q: "Chi fondò nel 1843 Krug, produttore di Krug Grande Cuvée?", a: "Joseph Krug", x: ["Nicolas Ruinart", "Florens-Louis Heidsieck", "Claude Moët"] }],
  },
  fr_krug_mesnil: {
    fact: "Prodotto solo con Chardonnay di un vigneto di 1,84 ettari cinto da mura nel cuore del villaggio di Le Mesnil-sur-Oger. Krug lo acquistò nel 1971 e ne produsse la prima annata nel 1979.",
    quiz: [{ q: "In che anno fu costruito il muro di pietra che cinge il vigneto del Krug Clos du Mesnil?", a: "1698", x: ["1843", "1971", "1979"] }],
  },
  fr_krug_rose: {
    fact: "Rosé che aggiunge al metodo Krug, basato sull’assemblaggio di più annate, del vino rosso da Pinot Nero. Come la Grande Cuvée, porta un numero di Édition.",
    quiz: [{ q: "Quale gruppo possiede dal 1999 Krug, produttore del Krug Rosé?", a: "LVMH", x: ["Kering", "Pernod Ricard", "Gruppo Laurent-Perrier"] }],
  },
  fr_bollinger_sc: {
    fact: "Lo champagne simbolo di Bollinger, nata ad Aÿ nel 1829. Con molto Pinot Nero e una parte fermentata in botte, è pieno e strutturato.",
    quiz: [
      { q: "Quale personaggio del cinema è legato da lungo tempo a Bollinger Special Cuvée?", a: "James Bond", x: ["Sherlock Holmes", "Indiana Jones", "Jay Gatsby"] },
      { q: "Quale dirigente di Bollinger disse di bere champagne «quando sono felice e quando sono triste»?", a: "Lily Bollinger", x: ["Madame Clicquot", "Louise Pommery", "Coco Chanel"] },
    ],
  },
  fr_bollinger_ga: {
    fact: "Lo champagne millesimato di Bollinger, prodotto solo nelle annate migliori. Tutti i vini fermentano in piccole botti di rovere.",
    quiz: [{ q: "Quale chiusura usa Bollinger La Grande Année durante il lungo affinamento in bottiglia?", a: "Il tappo di sughero naturale", x: ["Il tappo a corona", "Il tappo a vite", "Il tappo di vetro"] }],
  },
  fr_bollinger_rd: {
    fact: "Il capolavoro di Bollinger: affinato a lungo sui lieviti e sboccato poco prima della messa in commercio. La prima annata è il 1952.",
    quiz: [
      { q: "Che cosa significa «R.D.» in Bollinger R.D.?", a: "Récemment dégorgé (sboccato di recente)", x: ["Royal Delivery (fornitura reale)", "Red Dry", "Réserve du Domaine"] },
      { q: "Quale primato ha Bollinger R.D. nella storia delle etichette di champagne?", a: "È stato il primo a indicare in etichetta la data di sboccatura", x: ["È stato il primo con l’etichetta in Braille", "È stato il primo stampato direttamente sul vetro", "È stato il primo con un codice QR in etichetta"] },
    ],
  },
  fr_salon: {
    fact: "Nasce dallo champagne che Eugène-Aimé Salon produceva a inizio Novecento per il proprio consumo. Prodotto solo nelle annate eccezionali, esce appena poche decine di volte in un secolo.",
    quiz: [
      { q: "Qual è la particolare regola di produzione di Salon?", a: "Solo Chardonnay di Le Mesnil-sur-Oger e solo nelle annate eccezionali", x: ["Prodotto ogni anno, solo in versione rosé", "Solo assemblaggi di più annate, senza millesimo", "Solo Pinot Nero"] },
      { q: "Quale maison sorella, confinante con Salon, appartiene allo stesso gruppo Laurent-Perrier?", a: "Delamotte", x: ["Krug", "Bollinger", "Henriot"] },
    ],
  },
  fr_taittinger_br: {
    fact: "Il non millesimato simbolo di Taittinger, leggero ed elegante grazie a una quota relativamente alta di Chardonnay. Affina nelle cave di gesso sotto l’antica abbazia di Saint-Nicaise a Reims.",
    quiz: [{ q: "Quale antica maison di champagne, antenata di Taittinger, acquistò Pierre Taittinger nel 1932 dandole il suo nome?", a: "Forest-Fourneaux", x: ["Heidsieck Monopole", "Ruinart", "Delamotte"] }],
  },
  fr_taittinger_comtes: {
    fact: "La cuvée di prestigio di Taittinger, prodotta solo nelle buone annate con Chardonnay grand cru della Côte des Blancs. La prima annata è il 1952.",
    quiz: [{ q: "Chi onora il nome Comtes de Champagne di Taittinger?", a: "Tebaldo IV, conte di Champagne, tornato dalle crociate", x: ["Carlo Magno", "Napoleone I", "San Remigio, arcivescovo di Reims"] }],
  },
  fr_polroger_br: {
    fact: "Maison di famiglia nata a Épernay nel 1849. Fornitore ufficiale della casa reale britannica, fu servito anche alle nozze del principe William nel 2011.",
    quiz: [{ q: "Quale soprannome ha ottenuto in Gran Bretagna Pol Roger Brut Réserve per il colore della capsula sul collo?", a: "White Foil", x: ["Gold Foil", "Black Label", "Yellow Label"] }],
  },
  fr_polroger_swc: {
    fact: "Cuvée di prestigio creata a partire dall’annata 1975 in onore di Churchill, che amò Pol Roger per tutta la vita. Ha lo stile potente, dominato dal Pinot Nero, che Churchill prediligeva.",
    quiz: [
      { q: "Che cosa fece Pol Roger alle etichette per il mercato britannico alla morte di Churchill, nel 1965?", a: "Bordò l’etichetta con una fascia nera", x: ["Vi aggiunse il ritratto di Churchill", "Sospese la produzione di quell’anno", "Dipinse di rosso le bottiglie"] },
      { q: "Quale nome diede Churchill a un suo cavallo da corsa in onore di Odette Pol-Roger?", a: "Pol Roger", x: ["Champagne", "Victory", "Blenheim"] },
    ],
  },
  fr_lp_lacuvee: {
    fact: "Il non millesimato simbolo della maison nata a Tours-sur-Marne nel 1812. Con molto Chardonnay, è limpido e fresco.",
    quiz: [{ q: "Chi guidò Laurent-Perrier dal 1949 facendone una maison di fama mondiale?", a: "Bernard de Nonancourt", x: ["Pierre Taittinger", "Lily Bollinger", "Joseph Krug"] }],
  },
  fr_lp_rose: {
    fact: "Uscito nel 1968 in una bottiglia con stemma a scudo ispirata a quelle dell’epoca di Enrico IV. Pinot Nero al 100%, è considerato un punto di riferimento per lo champagne rosé.",
    quiz: [{ q: "Come ottiene il suo colore rosa Laurent-Perrier Cuvée Rosé?", a: "Per macerazione delle bucce di Pinot Nero", x: ["Aggiungendo vino rosso", "Con coloranti vegetali", "Con un lungo affinamento in botte"] }],
  },
  fr_lp_gs: {
    fact: "La cuvée più prestigiosa di Laurent-Perrier, che assembla tre annate eccezionali per ricreare «l’annata perfetta». Ogni edizione porta un numero di «Itération».",
    quiz: [
      { q: "In che cosa Laurent-Perrier Grand Siècle si distingue dalla maggior parte degli champagne di prestigio?", a: "Assembla tre annate eccezionali", x: ["Usa uve di un solo anno", "È prodotto solo in versione rosé", "Affina dieci anni in botte"] },
      { q: "Quale re regnava nell’epoca a cui si riferisce «Grand Siècle» (il grande secolo)?", a: "Luigi XIV", x: ["Luigi XVI", "Napoleone I", "Enrico IV"] },
    ],
  },
  fr_r_ruinart: {
    fact: "Il non millesimato simbolo di Ruinart, la prima maison di champagne, fondata nel 1729. È imbottigliato nella bottiglia tonda ispirata a quelle del Settecento.",
    quiz: [{ q: "Come si chiamano le cave sotterranee di Ruinart dove affina R de Ruinart, antiche cave di gesso scavate fin dall’epoca romana?", a: "Crayères", x: ["Cuverie", "Chai", "Bodega"] }],
  },
  fr_dom_ruinart: {
    fact: "La cuvée di prestigio di Ruinart, prodotta solo nelle buone annate con Chardonnay grand cru. Indizio: il colore dorato nella bottiglia tonda e trasparente.",
    quiz: [{ q: "Quale monaco, che avrebbe consigliato al nipote di dedicarsi allo champagne, onora il nome Dom Ruinart?", a: "Dom Thierry Ruinart", x: ["Dom Pierre Pérignon", "San Bernardo", "San Remigio"] }],
  },
  fr_pj_grandbrut: {
    fact: "Il non millesimato simbolo di Perrier-Jouët, nata a Épernay nel 1811. Con molto Pinot Nero e Pinot Meunier, è ricco di profumi fruttati.",
    quiz: [
      { q: "Da dove viene il nome della maison Perrier-Jouët?", a: "Dai cognomi dei due coniugi fondatori", x: ["Dal nome di due villaggi", "Dai nomi dei fratelli fondatori", "Dal nome di due vigneti della Champagne"] },
      { q: "Quale fiore, disegnato dall’artista art nouveau Émile Gallé, è il simbolo di Perrier-Jouët?", a: "L’anemone", x: ["La rosa", "Il giglio", "Il tulipano"] },
    ],
  },
  fr_pj_blason: {
    fact: "Champagne rosé con un’etichetta ispirata allo stemma della famiglia Perrier-Jouët. L’aggiunta di vino rosso da Pinot Nero gli dà profumi di frutti rossi.",
    quiz: [{ q: "Che cosa significa «Blason» in Perrier-Jouët Blason Rosé?", a: "Lo stemma di famiglia (scudo araldico)", x: ["Rosa", "Regina", "Primo amore"] }],
  },
  fr_armand_rose: {
    fact: "Rosé in bottiglia metallizzata rosa con etichetta a forma di picca in peltro. Nel 2014 il rapper Jay-Z ha acquisito il marchio.",
    quiz: [
      { q: "Quale soprannome ha Armand de Brignac Rosé per la forma della sua etichetta in peltro?", a: "Ace of Spades", x: ["King of Hearts", "Queen of Diamonds", "Joker"] },
      { q: "Quale rapper americano acquistò Armand de Brignac nel 2014?", a: "Jay-Z", x: ["Kanye West", "Snoop Dogg", "Drake"] },
    ],
  },
  fr_piper: {
    fact: "Champagne riconoscibile al primo sguardo per l’etichetta rosso acceso. È stato a lungo lo champagne ufficiale del Festival di Cannes.",
    quiz: [{ q: "A quale regina il fondatore di Piper-Heidsieck avrebbe dedicato la sua prima cuvée?", a: "Maria Antonietta", x: ["L’imperatrice Giuseppina", "La regina Vittoria", "Caterina de’ Medici"] }],
  },
  fr_charles_heidsieck: {
    fact: "Maison fondata nel 1851 da Charles-Camille Heidsieck. È nota per un non millesimato dal carattere evoluto, ricco di vini di riserva.",
    quiz: [{ q: "Che cosa accadde al fondatore di Charles Heidsieck, soprannominato negli Stati Uniti «Champagne Charlie»?", a: "Fu incarcerato come spia durante la guerra di secessione", x: ["Sopravvisse al naufragio del Titanic", "Si arruolò nell’esercito di Napoleone", "Fece fortuna con la corsa all’oro"] }],
  },
  fr_feuillatte: {
    fact: "Marchio nato nel 1976 dall’unione di cooperative di numerosi viticoltori. È uno degli champagne più venduti in Francia.",
    quiz: [{ q: "Che cosa caratterizza il produttore di Nicolas Feuillatte?", a: "È un’unione di cooperative con migliaia di viticoltori", x: ["È una famiglia nobile attiva dal XVII secolo", "È un domaine con un solo vigneto monopole", "È una maison riservata alla corte degli zar"] }],
  },
  fr_mumm: {
    fact: "Maison fondata a Reims nel 1827 dalla famiglia Mumm, di origine tedesca. È famosa per la fascia rossa che attraversa in diagonale l’etichetta.",
    quiz: [
      { q: "A che cosa si ispira la fascia rossa di Mumm Cordon Rouge?", a: "Al nastro rosso della Legion d’onore", x: ["Alla bandiera francese", "Alla berretta rossa dei cardinali", "Allo stemma della corte degli zar"] },
      { q: "Di quale competizione sportiva Mumm Cordon Rouge è stato a lungo, dal 2000, lo champagne del podio?", a: "Formula 1", x: ["Tour de France", "Wimbledon", "Coppa del mondo FIFA"] },
    ],
  },
  fr_lanson_black: {
    fact: "Il non millesimato simbolo della maison nata a Reims nel 1760. Senza fermentazione malolattica, conserva un’acidità fresca che ricorda la mela.",
    quiz: [
      { q: "Quale simbolo della maison compare sul collo di Lanson Le Black Label?", a: "La croce di Malta", x: ["Il giglio", "Un leone", "Una corona"] },
      { q: "Di quale torneo di tennis Lanson è lo champagne ufficiale dal 1977?", a: "Wimbledon", x: ["Roland Garros", "US Open", "Australian Open"] },
    ],
  },
  fr_billecart_rose: {
    fact: "Champagne rosé famoso per il tenue color salmone nella bottiglia trasparente. È delicato: a un assemblaggio ricco di Chardonnay si aggiunge un po’ di vino rosso da Pinot Nero.",
    quiz: [{ q: "Da dove viene il nome Billecart-Salmon?", a: "Dai cognomi dei due coniugi fondatori, sposati nel 1818", x: ["Dal colore salmone del suo rosé", "Dal nome di due villaggi", "Dai soprannomi dei fratelli fondatori"] }],
  },
  fr_selosse_initial: {
    fact: "L’epicentro della moda degli champagne «de vigneron», fatti con uve di proprietà. Fermenta in botte come in Borgogna, per uno champagne che sembra un vino.",
    quiz: [
      { q: "Chi guida Jacques Selosse e ha dato il via alla moda degli champagne de vigneron?", a: "Anselme Selosse", x: ["Rémi Krug", "Bernard de Nonancourt", "Charles Philipponnat"] },
      { q: "Che cosa significa la sigla «RM» sull’etichetta di uno champagne de vigneron come Jacques Selosse?", a: "Récoltant-manipulant (vignaiolo che coltiva e vinifica)", x: ["Négociant-manipulant (maison che acquista uve)", "Coopérative de manipulation (cooperativa)", "Marque d’acheteur (marchio del distributore)"] },
    ],
  },
  fr_philipponnat_goisses: {
    fact: "Vigneto di 5,5 ettari su un pendio esposto a sud, inclinato di quasi 45 gradi sulla Marna. Più caldo del resto della Champagne, dà champagne potenti.",
    quiz: [{ q: "Che cosa rappresenta Clos des Goisses di Philipponnat nella storia dello champagne?", a: "È considerato il primo champagne da vigneto singolo", x: ["Il primo champagne rosé", "Il primo champagne brut", "Il primo blanc de blancs"] }],
  },
  fr_deutz: {
    fact: "Maison fondata ad Aÿ nel 1838 dai tedeschi William Deutz e Pierre-Hubert Geldermann. Assembla in parti uguali i tre vitigni, con un bell’equilibrio.",
    quiz: [{ q: "Quale maison di champagne acquistò Deutz nel 1993?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] }],
  },
  fr_henriot: {
    fact: "Maison di famiglia fondata a Reims nel 1808 da Apolline Henriot. È nota per uno stile delicato con una quota alta di Chardonnay.",
    quiz: [{ q: "Quali due grandi case di Borgogna acquistò la famiglia Henriot negli anni ’90?", a: "Bouchard Père & Fils e William Fèvre", x: ["Louis Jadot e Joseph Drouhin", "Louis Latour e Faiveley", "Leroy e Leflaive"] }],
  },
  fr_gosset: {
    fact: "La più antica casa vinicola della Champagne, nata ad Aÿ nel 1584 quando Pierre Gosset produceva vini fermi. Usa una bottiglia ispirata a quelle antiche.",
    quiz: [{ q: "Quale anno di fondazione fa di Gosset la più antica casa vinicola della Champagne?", a: "1584", x: ["1729", "1743", "1811"] }],
  },
  fr_pommery: {
    fact: "Maison di Reims fatta crescere da Madame Louise Pommery dopo la morte del marito. È famosa per le immense cave sotterranee che collegano antiche cave di gesso di epoca romana.",
    quiz: [
      { q: "Quale stile, lanciato da Pommery nel 1874, cambiò la storia dello champagne?", a: "Il brut, quasi senza zucchero", x: ["Lo champagne rosé", "Lo champagne millesimato", "Il blanc de blancs"] },
      { q: "Quale donna guidava Pommery quando lanciò il primo champagne brut?", a: "Madame Louise Pommery", x: ["Madame Clicquot", "Lily Bollinger", "Carol Duval-Leroy"] },
    ],
  },
  fr_duval_leroy: {
    fact: "Maison di famiglia nata nel 1859 a Vertus, nella Côte des Blancs. Caso raro tra le grandi maison, è ancora gestita dalla famiglia fondatrice.",
    quiz: [{ q: "Quale imprenditrice guida Duval-Leroy da quando rimase vedova nel 1991?", a: "Carol Duval-Leroy", x: ["Lily Bollinger", "Madame Clicquot", "Louise Pommery"] }],
  },
  fr_ayala: {
    fact: "Maison fondata ad Aÿ nel 1860 da Edmond de Ayala. Fu presto nota per champagne secchi, con poco zucchero.",
    quiz: [{ q: "Quale maison di champagne acquistò Ayala nel 2005?", a: "Bollinger", x: ["LVMH", "Louis Roederer", "Taittinger"] }],
  },
  fr_delamotte: {
    fact: "Una delle maison più antiche della Champagne, aperta nel 1760. È prodotto con Chardonnay grand cru della Côte des Blancs.",
    quiz: [{ q: "Quale leggendario champagne, prodotto solo nelle grandi annate con lo Chardonnay di un unico villaggio, è la maison sorella confinante con Delamotte?", a: "Salon", x: ["Krug Clos du Mesnil", "Dom Ruinart", "Taittinger Comtes de Champagne"] }],
  },
  fr_dagueneau_silex: {
    fact: "Il capolavoro di Dagueneau, l’«enfant terrible della Loira» che portò il Pouilly-Fumé ai vertici mondiali del Sauvignon Blanc. Dopo la sua morte in un incidente di ultraleggero nel 2008, ne prosegue il lavoro il figlio Louis-Benjamin.",
    quiz: [{ q: "A che cosa si riferisce il nome «Silex» di Didier Dagueneau?", a: "Al terreno di selce (pietra focaia)", x: ["All’etichetta argentata", "Al latino «silenzio»", "Al nome del cane del fondatore"] }],
  },
  fr_ladoucette: {
    fact: "Vino della famiglia de Ladoucette, proprietaria della tenuta più estesa di Pouilly-Fumé. La sua sede è il fiabesco Château du Nozet.",
    quiz: [{ q: "Qual è il castello sede della famiglia de Ladoucette, produttrice di questo Pouilly-Fumé?", a: "Château du Nozet", x: ["Château de Tracy", "Château-Grillet", "Château de Saumur"] }],
  },
  fr_bourgeois_sancerre: {
    fact: "Il Sancerre simbolo di una cantina di famiglia che si tramanda da generazioni a Chavignol. È considerato un manuale del Sauvignon Blanc fresco.",
    quiz: [
      { q: "Dove ha fondato Henri Bourgeois nel 2000 la nuova cantina «Clos Henri», alla ricerca del Sauvignon Blanc?", a: "A Marlborough, in Nuova Zelanda", x: ["Nella Casablanca Valley, in Cile", "A Stellenbosch, in Sudafrica", "Nella Napa Valley, negli Stati Uniti"] },
      { q: "Per che cos’altro è famoso il villaggio di Chavignol, dove ha sede Henri Bourgeois?", a: "Per il formaggio di capra Crottin de Chavignol", x: ["Per le ostriche", "Per il tartufo", "Per la senape"] },
    ],
  },
  fr_jolivet_sancerre: {
    fact: "Giovane cantina nata come négociant senza vigneti propri e diventata un simbolo della Loira orientale. Produce sia Sancerre sia Pouilly-Fumé.",
    quiz: [{ q: "In che anno Pascal Jolivet fondò la sua azienda vinicola con il proprio nome?", a: "1987", x: ["1808", "1920", "1961"] }],
  },
  fr_vacheron_sancerre: {
    fact: "Domaine di famiglia nel cuore del paese di Sancerre. Vinifica parcella per parcella il Sauvignon Blanc dei vigneti coltivati in biodinamica.",
    quiz: [{ q: "Quale altro vino del Domaine Vacheron gode di una stima rara per Sancerre?", a: "Il rosso da Pinot Nero", x: ["Il rosso da Cabernet Sauvignon", "Il dolce botritizzato", "Il vino fortificato"] }],
  },
  fr_huet_vouvray: {
    fact: "Grande casa di Chenin Blanc simbolo di Vouvray. A seconda dell’annata, dallo stesso vigneto produce versioni secche, demi-sec e dolci.",
    quiz: [{ q: "I tre celebri vigneti del Domaine Huet sono Le Mont, Clos du Bourg e quale altro?", a: "Le Haut-Lieu", x: ["La Roche aux Moines", "Clos de la Dioterie", "Les Baronnes"] }],
  },
  fr_joly_coulee: {
    fact: "Vigneto piantato per la prima volta nel 1130 dai monaci cistercensi. È una delle poche AOC monopole, possedute per intero da una sola famiglia.",
    quiz: [{ q: "Quale metodo di coltivazione ha diffuso nel mondo Nicolas Joly del Clos de la Coulée de Serrant?", a: "La biodinamica", x: ["La coltura idroponica", "La coltivazione intensiva irrigua", "La coltivazione in serra"] }],
  },
  fr_rougeard: {
    fact: "Cabernet Franc della Loira che i fratelli Charly e Nady Foucault, vinificando alla maniera tradizionale, hanno portato allo status di culto mondiale.",
    quiz: [{ q: "Quali fratelli, proprietari di Château Montrose a Bordeaux, acquistarono Clos Rougeard nel 2017?", a: "Martin e Olivier Bouygues", x: ["La famiglia Pinault", "La famiglia Arnault", "La famiglia Rothschild"] }],
  },
  fr_joguet_chinon: {
    fact: "Il primo domaine di Chinon a produrre cuvée separate per vigneto. Il Clos de la Dioterie è il vigneto simbolo, con vecchie viti di Cabernet Franc.",
    quiz: [{ q: "Che cosa faceva a Parigi Charles Joguet prima di ereditare le vigne di famiglia nel 1957?", a: "Il pittore e scultore", x: ["Il cantante lirico", "Il regista", "L’architetto"] }],
  },
  fr_pepiere_briords: {
    fact: "Muscadet da vecchie viti piantate tra gli anni ’30 e ’50. Muscadet non è un vitigno ma il nome della zona, ed è considerato il compagno ideale delle ostriche.",
    quiz: [{ q: "Che cosa significa la dicitura «sur lie» su un Muscadet come il Clos des Briords?", a: "Che è affinato sulle fecce fini dei lieviti", x: ["Che viene da un vigneto lungo il fiume", "Che è vendemmiato tardivamente", "Che è affinato in botti nuove"] }],
  },
  fr_trimbach_csh: {
    fact: "Monopole di 1,67 ettari nel cuore del grand cru Rosacker di Hunawihr. Curato da oltre 200 anni dalla famiglia Trimbach, è uno dei migliori Riesling secchi del mondo.",
    quiz: [{ q: "Che cosa Trimbach evita di proposito di indicare sull’etichetta del Clos Sainte Hune?", a: "La menzione grand cru", x: ["L’annata", "Il nome del vitigno", "Il nome del produttore"] }],
  },
  fr_trimbach_gewurz: {
    fact: "Il vitigno simbolo dell’Alsazia, esplosivo di litchi e rosa. Trimbach è famoso per vinificarlo secco, senza dolcezza.",
    quiz: [{ q: "In che anno Trimbach, produttore di questo Gewurztraminer, iniziò a fare vino in Alsazia?", a: "1626", x: ["1639", "1731", "1919"] }],
  },
  fr_hugel_gentil: {
    fact: "Assemblaggio alsaziano di più vitigni come Gewurztraminer, Pinot Gris, Riesling e Sylvaner. «Gentil» era l’antico nome degli assemblaggi di vitigni nobili.",
    quiz: [{ q: "In che anno la famiglia Hugel, produttrice di Gentil, iniziò a fare vino a Riquewihr?", a: "1639", x: ["1626", "1789", "1919"] }],
  },
  fr_hugel_riesling: {
    fact: "Il Riesling simbolo di Hugel, famoso per l’etichetta gialla. È una delle bottiglie più comuni per chi si avvicina per la prima volta ai vini d’Alsazia.",
    quiz: [
      { q: "Di che colore è l’etichetta che rende riconoscibili da lontano i vini Hugel come questo Riesling?", a: "Gialla", x: ["Nera", "Blu", "Rossa"] },
      { q: "Quali categorie di vini dolci alsaziani contribuì a far riconoscere per legge Jean Hugel negli anni ’80?", a: "Vendanges Tardives e Sélection de Grains Nobles", x: ["Grand cru e premier cru", "Crémant d’Alsace", "Vin de table"] },
    ],
  },
  fr_zind_rangen: {
    fact: "Vigneto sul ripidissimo pendio vulcanico del Rangen, il grand cru più meridionale d’Alsazia. Zind-Humbrecht è nato nel 1959 dall’unione dei vigneti di due famiglie.",
    quiz: [{ q: "Quale titolo conseguì nel 1989 Olivier Humbrecht di Zind-Humbrecht, primo francese a ottenerlo?", a: "Master of Wine (MW)", x: ["Master Sommelier (MS)", "Enologo diplomato di Stato (DNO)", "Meilleur Ouvrier de France (MOF)"] }],
  },
  fr_weinbach_schlossberg: {
    fact: "Domaine del Clos des Capucins, coltivato per la prima volta nel 1612 dai frati cappuccini. Dal 1898 è guidato dalla famiglia Faller.",
    quiz: [
      { q: "Chi coltivò per primo, nel 1612, il Clos des Capucins del Domaine Weinbach?", a: "I frati cappuccini", x: ["Le monache cistercensi", "I Templari", "I padri gesuiti"] },
      { q: "Quale primato ottenne nel 1975 lo Schlossberg, da cui nasce il Riesling di Weinbach?", a: "Fu il primo grand cru d’Alsazia", x: ["Il vigneto cooperativo più grande d’Alsazia", "Il primo vigneto biologico certificato d’Alsazia", "La più piccola AOC di Francia"] },
    ],
  },
  fr_deiss_altenberg: {
    fact: "Nello stesso vigneto più vitigni sono piantati insieme, raccolti e vinificati insieme. Per questo in etichetta compare in grande solo il nome del vigneto, non il vitigno.",
    quiz: [{ q: "Quale filosofia del vino sosteneva Jean-Michel Deiss, alla guida di Marcel Deiss?", a: "Il terroir prima del vitigno, con più varietà piantate nello stesso vigneto", x: ["Usare sempre un solo vitigno al 100%", "Solo anfore al posto delle botti", "Produrre solo spumanti"] }],
  },
  fr_miraval: {
    fact: "Il rosé delle celebrità per antonomasia, con la prima annata nel 2012. Château Miraval si trova a Correns, nell’entroterra provenzale.",
    quiz: [
      { q: "Quale coppia di star di Hollywood creò il rosé Miraval insieme alla famiglia Perrin?", a: "Brad Pitt e Angelina Jolie", x: ["Tom Cruise e Katie Holmes", "George e Amal Clooney", "Hugh Jackman e Deborra-Lee Furness"] },
      { q: "Quale band registrò parte dell’album «The Wall» nello studio di registrazione di Château Miraval?", a: "I Pink Floyd", x: ["I Beatles", "I Rolling Stones", "I Queen"] },
    ],
  },
  fr_minuty_m: {
    fact: "Rosé leggero e fresco di una famiglia attiva dal 1936 sulla penisola di Saint-Tropez. La bottiglia a «corsetto», con il vitino stretto, fu ideata da questa famiglia negli anni ’60.",
    quiz: [{ q: "Quale gruppo è diventato nel 2023 azionista di maggioranza di Château Minuty, produttore di M de Minuty?", a: "LVMH (Moët Hennessy)", x: ["Pernod Ricard", "Groupe Castel", "Artémis"] }],
  },
  fr_minuty_281: {
    fact: "Il rosé di punta di Minuty, uscito nel 2015. Il suo marchio è il decoro blu intenso che scende lungo il fianco della bottiglia.",
    quiz: [{ q: "Da che cosa viene il numero del 281 di Château Minuty?", a: "Dal codice Pantone del blu che ricorda il Mediterraneo", x: ["Dal numero catastale del vigneto", "Dalle bottiglie prodotte il primo anno", "Dall’altitudine del vigneto in metri"] }],
  },
  fr_garrus: {
    fact: "Uno dei rosé più cari al mondo, da vecchie viti di Grenache fermentate e affinate in botte. Nel 2019 LVMH è diventata azionista di maggioranza di Château d’Esclans.",
    quiz: [
      { q: "In che cosa la vinificazione di Garrus di Château d’Esclans differisce da quella di un comune rosé provenzale?", a: "Fermenta e affina in botte", x: ["Assembla vino rosso e bianco", "Vi si aggiunge anidride carbonica", "Si usano uve appassite"] },
      { q: "Chi ha fondato Château d’Esclans, produttore di Garrus e Whispering Angel?", a: "Sacha Lichine", x: ["Gérard Bertrand", "Marc Perrin", "Michel Rolland"] },
    ],
  },
  fr_rockangel: {
    fact: "Il «fratello maggiore» di Whispering Angel. Una parte fermenta in botte, per un gusto più ricco e rotondo.",
    quiz: [{ q: "Quale scrittore del vino, padre di Sacha Lichine (creatore di Rock Angel), possedeva Château Prieuré-Lichine a Bordeaux?", a: "Alexis Lichine", x: ["Robert Parker", "Émile Peynaud", "Hugh Johnson"] }],
  },
  fr_tempier: {
    fact: "Grande casa che ha fatto conoscere al mondo il Bandol puntando sul Mourvèdre. La famiglia Peyraud contribuì anche alla nascita dell’AOC Bandol nel 1941.",
    quiz: [{ q: "Chi, celebre per la cucina e la tavola del Domaine Tempier, ispirò profondamente la chef americana Alice Waters?", a: "Lulu Peyraud", x: ["Julia Child", "Paul Bocuse", "Madame Clicquot"] }],
  },
  fr_pibarnon: {
    fact: "Grande nome di Bandol che coltiva Mourvèdre su pendii calcarei ad anfiteatro affacciati sul mare.",
    quiz: [{ q: "Quale famiglia acquistò Château de Pibarnon nel 1977 portandolo ai vertici di Bandol?", a: "La famiglia de Saint-Victor", x: ["La famiglia Peyraud", "La famiglia Rougier", "La famiglia Bertrand"] }],
  },
  fr_simone: {
    fact: "Tenuta che possiede circa metà della minuscola AOC Palette, vicino ad Aix-en-Provence. Produce bianchi a base di Clairette che invecchiano per decenni.",
    quiz: [{ q: "Quale famiglia porta avanti Château Simone dal 1830?", a: "La famiglia Rougier", x: ["La famiglia Perrin", "La famiglia Lichine", "La famiglia Ott"] }],
  },
  fr_daumas_gassac: {
    fact: "Leggenda della Linguadoca, con la prima annata nel 1978 su consiglio di un geologo che riconobbe il suolo di origine glaciale. Fu chiamato «il grand cru della Linguadoca».",
    quiz: [
      { q: "Quale leggendario enologo bordolese aiutò a vinificare la prima annata di Mas de Daumas Gassac?", a: "Émile Peynaud", x: ["Michel Rolland", "Jules Chauvet", "Denis Dubourdieu"] },
      { q: "Chi fondò Mas de Daumas Gassac e comparve nel film «Mondovino» opponendosi all’arrivo di Robert Mondavi ad Aniane?", a: "Aimé Guibert", x: ["Gérard Bertrand", "Alain Brumont", "Sacha Lichine"] },
    ],
  },
  fr_bertrand_cdr: {
    fact: "Rosé con il fondo della bottiglia modellato come una rosa sbocciata. Il design, del 2010, vinse un concorso per giovani designer.",
    quiz: [
      { q: "Qual è la particolarità della bottiglia di Côte des Roses di Gérard Bertrand?", a: "Il fondo ha la forma di una rosa", x: ["È a forma di cuore", "È di vetro blu", "Ha l’etichetta in Braille"] },
      { q: "In quale campo si era fatto un nome Gérard Bertrand, creatore di Côte des Roses, prima di dedicarsi al vino?", a: "Il rugby", x: ["Il calcio", "Il ciclismo", "Il tennis"] },
    ],
  },
  fr_cedre: {
    fact: "Tenuta di famiglia simbolo di Cahors, patria del Malbec. Dai vigneti coltivati in biologico nasce un Malbec scuro e potente.",
    quiz: [{ q: "Quale soprannome avevano un tempo i vini di Cahors come Château du Cèdre, per il loro colore scurissimo?", a: "Vino nero", x: ["Vino di sangue", "Vino della notte", "Vino d’inchiostro"] }],
  },
  fr_montus: {
    fact: "L’ammiraglia di Madiran, Tannat al 100%. Alain Brumont, che acquistò la tenuta nel 1980, trasformò il ruvido Tannat in un grande vino.",
    quiz: [{ q: "Chi ha rilanciato la fama di Madiran con Château Montus?", a: "Alain Brumont", x: ["Gérard Bertrand", "Aimé Guibert", "Sacha Lichine"] }],
  },
  fr_cauhape: {
    fact: "Vino dolce da vendemmia tardiva di Petit Manseng lasciato appassire sulla pianta fino a tardo autunno. Il nome significa «Sinfonia di novembre».",
    quiz: [{ q: "Secondo una leggenda legata al Jurançon, zona di questo vino, quale re di Francia ebbe alla nascita le labbra bagnate con aglio e Jurançon?", a: "Enrico IV", x: ["Luigi XIV", "Carlo Magno", "Napoleone I"] }],
  },
  fr_macle: {
    fact: "Il vertice del «vin jaune» (vino giallo), affinato per oltre sei anni in botte sotto un velo di lievito. Ha profumi di noce e spezie.",
    quiz: [
      { q: "Qual è la capacità del «clavelin», la bottiglia tradizionale del vin jaune come lo Château-Chalon di Jean Macle?", a: "62 cl", x: ["75 cl", "50 cl", "37,5 cl"] },
      { q: "Per quanto tempo minimo il vin jaune deve affinare in botte sotto il velo di lievito?", a: "6 anni e 3 mesi", x: ["1 anno", "3 anni", "10 anni"] },
    ],
  },
  fr_tissot_poulsard: {
    fact: "Domaine simbolo del Giura, coltivato in biodinamica da Stéphane Tissot. Il Poulsard è un vitigno rosso autoctono del Giura, dal colore chiaro come un rosé.",
    quiz: [{ q: "Quale scienziato, cresciuto ad Arbois dove ha sede il Domaine Tissot, vi coltivò una vigna studiando la fermentazione?", a: "Louis Pasteur", x: ["Marie Curie", "Antoine Lavoisier", "Charles Darwin"] }],
  },
};

export default T;
