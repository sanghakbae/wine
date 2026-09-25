import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  bx_rauzansegla: {
    fact: "Secondo cru di Margaux fondato nel 1661. Nel 1994 è stato acquistato dalla famiglia Wertheimer, proprietaria di Chanel.",
    quiz: [{ q: "Quale azienda di moda acquistò Château Rauzan-Ségla nel 1994?", a: "Chanel", x: ["Hermès", "Dior", "Gucci"] }],
  },
  bx_rauzangassies: {
    fact: "Secondo cru di Margaux nato dalla divisione dell’antica tenuta Rauzan, che lo separò da Rauzan-Ségla. La famiglia Quié lo gestisce insieme a Croizet-Bages, a Pauillac.",
    quiz: [
      { q: "Con quale château di Margaux formava in origine un’unica tenuta Château Rauzan-Gassies?", a: "Château Rauzan-Ségla", x: ["Château Brane-Cantenac", "Château Lascombes", "Château Durfort-Vivens"] },
      { q: "Quale quinto cru di Pauillac è gestito dalla stessa famiglia Quié di Château Rauzan-Gassies?", a: "Château Croizet-Bages", x: ["Château Lynch-Moussas", "Château Pédesclaux", "Château Batailley"] },
    ],
  },
  bx_leovillelascases: {
    fact: "Nacque dalla divisione in tre della tenuta Léoville, una delle più vaste del Médoc. Il portale di pietra sormontato da un leone in etichetta è l’ingresso del vigneto «Grand Clos».",
    quiz: [
      { q: "Quale scultura sovrasta il portale di pietra sull’etichetta di Château Léoville Las Cases?", a: "Un leone", x: ["Un’aquila", "Un cavallo", "Una campana"] },
      { q: "Quale famiglia guida Château Léoville Las Cases?", a: "La famiglia Delon", x: ["La famiglia Barton", "La famiglia Cuvelier", "La famiglia Borie"] },
    ],
  },
  bx_leovillepoyferre: {
    fact: "Uno dei tre château nati dalla divisione della tenuta Léoville. Dal 1920 appartiene alla famiglia Cuvelier.",
    quiz: [{ q: "Quale famiglia possiede Château Léoville Poyferré dal 1920?", a: "La famiglia Cuvelier", x: ["La famiglia Delon", "La famiglia Barton", "La famiglia Cazes"] }],
  },
  bx_leovillebarton: {
    fact: "La famiglia Barton, di origine irlandese, lo acquistò nel 1826 e lo possiede tuttora. Non avendo un proprio château, viene vinificato nella vicina Langoa Barton.",
    quiz: [
      { q: "Da dove ha origine la famiglia Barton, proprietaria di Château Léoville Barton?", a: "Irlanda", x: ["Scozia", "Paesi Bassi", "Germania"] },
      { q: "Quale terzo cru della stessa famiglia vinifica insieme Château Léoville Barton?", a: "Château Langoa Barton", x: ["Château Lagrange", "Château Talbot", "Château Saint-Pierre"] },
    ],
  },
  bx_durfortvivens: {
    fact: "Secondo cru di Margaux che deve il nome ai Durfort de Duras, signori medievali. Sotto la guida di Gonzague Lurton è passato alla biodinamica.",
    quiz: [{ q: "Quale classe ha Château Durfort-Vivens nella classificazione del Médoc del 1855?", a: "Secondo cru", x: ["Terzo cru", "Quarto cru", "Quinto cru"] }],
  },
  bx_gruaudlarose: {
    fact: "Secondo cru di Saint-Julien con in etichetta il motto «il re dei vini, il vino dei re». Dal 1997 appartiene al gruppo bordolese Taillan.",
    quiz: [{ q: "Che cosa dice il motto sull’etichetta di Château Gruaud Larose?", a: "Il re dei vini, il vino dei re", x: ["Una goccia donata da Dio", "La regina del Médoc", "Un vino nato dalla pazienza"] }],
  },
  bx_lascombes: {
    fact: "Secondo cru di Margaux riportato al suo splendore negli anni ’50 da Alexis Lichine, scrittore del vino americano nato in Russia, che lo acquistò.",
    quiz: [{ q: "Quale scrittore del vino acquistò e rilanciò Château Lascombes negli anni ’50?", a: "Alexis Lichine", x: ["Robert Parker", "Émile Peynaud", "Hugh Johnson"] }],
  },
  bx_branecantenac: {
    fact: "Tenuta curata dal barone Brane, detto «il Napoleone delle vigne», dopo aver venduto l’attuale Mouton Rothschild. Oggi è guidata da Henri Lurton.",
    quiz: [
      { q: "Quale tenuta di Pauillac aveva venduto in precedenza il barone Brane di Château Brane-Cantenac?", a: "L’attuale Château Mouton Rothschild", x: ["L’attuale Château Lafite Rothschild", "L’attuale Château Latour", "L’attuale Château Pichon Baron"] },
      { q: "Qual era il soprannome del barone Brane, che ha dato il nome a Château Brane-Cantenac?", a: "Il Napoleone delle vigne", x: ["Il maharaja di Saint-Estèphe", "Il papa del Médoc", "Il re del vino"] },
    ],
  },
  bx_pichonbaron: {
    fact: "Secondo cru di Pauillac famoso per il suo château da fiaba irto di guglie. Dal 1987 appartiene ad AXA Millésimes, del gruppo assicurativo AXA.",
    quiz: [
      { q: "Chi acquistò Château Pichon Baron nel 1987?", a: "AXA Millésimes", x: ["LVMH", "Chanel", "Louis Roederer"] },
      { q: "Con quale château formava in origine un’unica tenuta Château Pichon Baron?", a: "Château Pichon Longueville Comtesse de Lalande", x: ["Château Latour", "Château Lynch-Bages", "Château Pontet-Canet"] },
    ],
  },
  bx_pichoncomtesse: {
    fact: "Il nome nasce da Virginie, la figlia che ereditò parte della tenuta Pichon e sposò il conte di Lalande. Nel 2007 è stato acquistato dalla maison di champagne Louis Roederer.",
    quiz: [{ q: "Quale maison di champagne acquistò Château Pichon Longueville Comtesse de Lalande nel 2007?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] }],
  },
  bx_ducrubeaucaillou: {
    fact: "«Beaucaillou» significa «bei ciottoli» e indica le colline ghiaiose lungo la Gironda. Dal 1941 appartiene alla famiglia Borie.",
    quiz: [
      { q: "Che cosa significa «Beaucaillou» nel nome di Château Ducru-Beaucaillou?", a: "Bei ciottoli", x: ["Bella collina", "Vecchia torre", "Piccolo bosco"] },
      { q: "Quale famiglia possiede Château Ducru-Beaucaillou dal 1941?", a: "La famiglia Borie", x: ["La famiglia Delon", "La famiglia Barton", "La famiglia Cuvelier"] },
    ],
  },
  bx_cosdestournel: {
    fact: "Louis-Gaspard d’Estournel, il «maharaja di Saint-Estèphe» appassionato del commercio con l’India, coronò la cantina con pagode orientali. Dal 2000 è di proprietà di Michel Reybier.",
    quiz: [
      { q: "Qual è la caratteristica dell’edificio della cantina di Château Cos d’Estournel?", a: "Le torri a pagoda in stile indiano", x: ["Una torre di castello medievale", "Le colonne di un tempio greco", "Una casa di mattoni in stile Tudor"] },
      { q: "Qual era il soprannome di Louis-Gaspard d’Estournel, fondatore di Château Cos d’Estournel?", a: "Il maharaja di Saint-Estèphe", x: ["Il Napoleone delle vigne", "Il papa del Médoc", "Il re del vino"] },
    ],
  },
  bx_montrose: {
    fact: "Il nome viene dalla collina coperta di erica rosata («mont rose»). Nel 2006 è stato acquistato dai fratelli Bouygues, imprenditori francesi.",
    quiz: [
      { q: "Da dove deriva il nome di Château Montrose?", a: "Da una collina coperta di erica rosata", x: ["Da un roseto", "Da una montagna di roccia rossa", "Dal nome della figlia del fondatore"] },
      { q: "Chi acquistò Château Montrose nel 2006?", a: "I fratelli Bouygues", x: ["I fratelli Wertheimer", "La famiglia Delon", "La famiglia Cazes"] },
    ],
  },
  bx_kirwan: {
    fact: "Porta il nome dell’irlandese Mark Kirwan, che curò la tenuta nel XVIII secolo. Dal 1925 appartiene alla famiglia di négociant bordolesi Schÿler.",
    quiz: [{ q: "Quale classe ha Château Kirwan nella classificazione del Médoc del 1855?", a: "Terzo cru", x: ["Secondo cru", "Quarto cru", "Quinto cru"] }],
  },
  bx_dissan: {
    fact: "Castello seicentesco circondato da un fossato. In etichetta c’è il motto latino «per la mensa dei re e l’altare degli dei».",
    quiz: [{ q: "Che cosa significa il motto latino sull’etichetta di Château d’Issan?", a: "Per la mensa dei re e l’altare degli dei", x: ["Dio dimora nella vigna", "La pazienza fa il vino", "Solo il meglio"] }],
  },
  bx_lagrange: {
    fact: "Terzo cru di Saint-Julien acquistato nel 1983 dalla giapponese Suntory, che ne ha rinnovato vigneti e cantina.",
    quiz: [{ q: "Quale azienda giapponese acquistò Château Lagrange nel 1983?", a: "Suntory", x: ["Kirin", "Asahi", "Sapporo"] }],
  },
  bx_langoabarton: {
    fact: "Château settecentesco acquistato da Hugh Barton nel 1821. Nella sua cantina si vinifica anche il Léoville Barton.",
    quiz: [{ q: "Quale secondo cru si vinifica nella cantina di Château Langoa Barton?", a: "Château Léoville Barton", x: ["Château Léoville Poyferré", "Château Gruaud Larose", "Château Ducru-Beaucaillou"] }],
  },
  bx_giscours: {
    fact: "Tenuta vastissima che, tra boschi e prati, arriva a diverse centinaia di ettari. Dal 1995 è gestita dalla famiglia dell’imprenditore olandese Eric Albada Jelgersma.",
    quiz: [
      { q: "Di che nazionalità è la famiglia Albada Jelgersma, che gestisce Château Giscours dal 1995?", a: "Olandese", x: ["Belga", "Svizzera", "Britannica"] },
      { q: "Quale château di Margaux è gestito dalla stessa famiglia di Château Giscours?", a: "Château du Tertre", x: ["Château Dauzac", "Château Pouget", "Château Ferrière"] },
    ],
  },
  bx_malescot: {
    fact: "Il nome unisce Simon Malescot, consigliere del re nel Seicento, e il conte di Saint-Exupéry, proprietario nell’Ottocento. Dal 1955 è guidato dalla famiglia Zuger.",
    quiz: [{ q: "Qual è l’opera più celebre dello scrittore della stessa famiglia del conte di Saint-Exupéry di Château Malescot St. Exupéry?", a: "Il piccolo principe", x: ["Lo straniero", "I miserabili", "I tre moschettieri"] }],
  },
  bx_boydcantenac: {
    fact: "Il nome viene da Jacques Boyd, proprietario del terreno nel XVIII secolo. La famiglia Guillemet lo gestisce insieme al quarto cru Château Pouget.",
    quiz: [{ q: "Quale quarto cru è gestito dalla stessa famiglia di Château Boyd-Cantenac?", a: "Château Pouget", x: ["Château Talbot", "Château Saint-Pierre", "Château Lafon-Rochet"] }],
  },
  bx_cantenacbrown: {
    fact: "Château in stile Tudor inglese costruito dal mercante di vino di origine scozzese John Lewis Brown: un’architettura rara nel Médoc.",
    quiz: [{ q: "Qual è lo stile architettonico dell’edificio di Château Cantenac Brown?", a: "Tudor inglese", x: ["Neoclassico", "Pagoda indiana", "Rinascimento italiano"] }],
  },
  bx_palmer: {
    fact: "Prende il nome dal generale inglese Charles Palmer, reduce delle guerre napoleoniche, che lo acquistò nel 1814. È un terzo cru, ma si vende a prezzi da secondo cru e oltre.",
    quiz: [
      { q: "Di che nazionalità era Charles Palmer, che ha dato il nome a Château Palmer?", a: "Inglese", x: ["Irlandese", "Olandese", "Americana"] },
      { q: "Qual è la combinazione di colori tipica dell’etichetta di Château Palmer?", a: "Oro su fondo nero", x: ["Rosso su fondo bianco", "Argento su fondo blu", "Oro su fondo verde"] },
    ],
  },
  bx_lalagune: {
    fact: "È il primo grand cru classé che si incontra risalendo da Bordeaux verso il Médoc. Dal 2000 appartiene alla famiglia Frey, proprietaria anche di Paul Jaboulet Aîné nel Rodano.",
    quiz: [{ q: "Quale cantina del Rodano gestisce la famiglia Frey, proprietaria di Château La Lagune?", a: "Paul Jaboulet Aîné", x: ["Guigal", "Chapoutier", "Château de Beaucastel"] }],
  },
  bx_desmirail: {
    fact: "Terzo cru di Margaux gestito dalla famiglia Lurton, grande nome del vino bordolese. Per un periodo i suoi vigneti furono smembrati e ne restò solo il nome, prima della rinascita.",
    quiz: [{ q: "Quale classe ha Château Desmirail nella classificazione del Médoc del 1855?", a: "Terzo cru", x: ["Secondo cru", "Quarto cru", "Quinto cru"] }],
  },
  bx_calonsegur: {
    fact: "Il cuore in etichetta nasce dalla frase del marchese di Ségur, proprietario di Lafite e Latour: «il mio cuore è a Calon».",
    quiz: [
      { q: "Quale simbolo è disegnato sull’etichetta di Château Calon Ségur?", a: "Un cuore", x: ["Un leone", "Una campana", "Una corona"] },
      { q: "Quali primi cru possedeva il marchese di Ségur dell’aneddoto del cuore di Calon Ségur?", a: "Lafite e Latour", x: ["Margaux e Haut-Brion", "Mouton e Haut-Brion", "Margaux e Mouton"] },
    ],
  },
  bx_ferriere: {
    fact: "Terzo cru di Margaux, uno dei più piccoli château della classificazione del 1855. È guidato da Claire Villars Lurton e coltivato in biodinamica.",
    quiz: [{ q: "Quale classe ha Château Ferrière nella classificazione del Médoc del 1855?", a: "Terzo cru", x: ["Secondo cru", "Quarto cru", "Quinto cru"] }],
  },
  bx_marquisdalesme: {
    fact: "Il nome originale era «Marquis d’Alesme Becker». Dopo l’acquisto nel 2006, la famiglia Perrodo ha tolto «Becker» dal nome e lo ha rinnovato.",
    quiz: [{ q: "Qual era il nome precedente di Château Marquis d’Alesme?", a: "Marquis d’Alesme Becker", x: ["Marquis de Terme", "Malescot St. Exupéry", "Rauzan-Gassies"] }],
  },
  bx_saintpierre: {
    fact: "Quarto cru acquistato nel 1982 da Henri Martin, già sindaco di Saint-Julien. È gestito dalla stessa famiglia di Château Gloria.",
    quiz: [{ q: "Quale vino di Saint-Julien è prodotto dalla stessa famiglia di Château Saint-Pierre?", a: "Château Gloria", x: ["Château Talbot", "Château Beychevelle", "Château Lagrange"] }],
  },
  bx_talbot: {
    fact: "Si dice che prenda il nome dal generale inglese John Talbot, caduto nella battaglia di Castillon alla fine della Guerra dei cent’anni. È famoso anche il suo bianco «Caillou Blanc».",
    quiz: [
      { q: "In quale guerra combatté il generale inglese John Talbot, da cui Château Talbot prenderebbe il nome?", a: "La Guerra dei cent’anni", x: ["La Guerra dei trent’anni", "La Guerra delle due rose", "Le guerre napoleoniche"] },
      { q: "Come si chiama il vino bianco prodotto da Château Talbot?", a: "Caillou Blanc", x: ["Pavillon Blanc", "Aile d’Argent", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_branaireducru: {
    fact: "Quarto cru di Saint-Julien che si affaccia su Château Beychevelle dall’altro lato della strada. Dal 1988 è gestito dalla famiglia Maroteaux.",
    quiz: [{ q: "Quale classe ha Château Branaire-Ducru nella classificazione del Médoc del 1855?", a: "Quarto cru", x: ["Secondo cru", "Terzo cru", "Quinto cru"] }],
  },
  bx_duhartmilon: {
    fact: "Quarto cru di Pauillac confinante con Lafite Rothschild, acquistato e rilanciato nel 1962 dai Rothschild di Lafite.",
    quiz: [{ q: "Chi acquistò Château Duhart-Milon nel 1962?", a: "I Rothschild di Lafite Rothschild", x: ["I Rothschild di Mouton Rothschild", "AXA Millésimes", "La famiglia Cazes"] }],
  },
  bx_pouget: {
    fact: "Piccolo quarto cru di Margaux che la famiglia Guillemet gestisce insieme al terzo cru Boyd-Cantenac.",
    quiz: [{ q: "Quale terzo cru è gestito dalla stessa famiglia di Château Pouget?", a: "Château Boyd-Cantenac", x: ["Château Cantenac Brown", "Château Kirwan", "Château d’Issan"] }],
  },
  bx_latourcarnet: {
    fact: "Castello medievale che conserva il fossato e l’antica torre di guardia. Nel 2000 è stato acquistato dall’imprenditore del vino Bernard Magrez.",
    quiz: [{ q: "Chi possiede sia Château La Tour Carnet sia Château Pape Clément?", a: "Bernard Magrez", x: ["Michel Rolland", "Jean-Luc Thunevin", "Gérard Perse"] }],
  },
  bx_lafonrochet: {
    fact: "Quarto cru di Saint-Estèphe rilanciato dalla famiglia Tesseron, che lo acquistò nel 1960. Si fa notare per l’edificio e l’etichetta dipinti di un giallo acceso.",
    quiz: [{ q: "Qual è il colore simbolo dell’edificio e dell’etichetta di Château Lafon-Rochet?", a: "Giallo", x: ["Blu", "Rosa", "Verde"] }],
  },
  bx_beychevelle: {
    fact: "Il nome viene dall’usanza delle navi di passaggio sul fiume di ammainare le vele («baisse voile») in omaggio al duca d’Épernon, grande ammiraglio. Anche in etichetta c’è una nave.",
    quiz: [
      { q: "Quale gesto ha dato origine al nome di Château Beychevelle?", a: "Ammainare le vele", x: ["Levare l’ancora", "Suonare la campana", "Sventolare la bandiera"] },
      { q: "Che cosa è raffigurato sull’etichetta di Château Beychevelle?", a: "Una nave", x: ["Un leone", "Un cuore", "Una campana"] },
    ],
  },
  bx_prieurelichine: {
    fact: "Château sorto sul sito di un antico priorato benedettino (prieuré). Alexis Lichine lo acquistò nel 1951 e gli diede il suo nome.",
    quiz: [
      { q: "Che cosa significa «Prieuré» in Château Prieuré-Lichine?", a: "Priorato (monastero)", x: ["Fortezza", "Mulino", "Mercato"] },
      { q: "Chi ha dato il suo nome a Château Prieuré-Lichine?", a: "Alexis Lichine", x: ["Robert Mondavi", "Émile Peynaud", "Hugh Barton"] },
    ],
  },
  bx_marquisdeterme: {
    fact: "Quarto cru di Margaux che porta il nome del marchese di Terme, proprietario nel XVIII secolo. Dal 1935 appartiene alla famiglia Sénéclauze.",
    quiz: [{ q: "Quale classe ha Château Marquis de Terme nella classificazione del Médoc del 1855?", a: "Quarto cru", x: ["Secondo cru", "Terzo cru", "Quinto cru"] }],
  },
  bx_pontetcanet: {
    fact: "Quinto cru di Pauillac passato presto alla biodinamica, che lavora le vigne con aratri trainati da cavalli. Dal 1975 appartiene alla famiglia Tesseron.",
    quiz: [
      { q: "Che cosa usa Château Pontet-Canet al posto del trattore per lavorare le vigne?", a: "I cavalli", x: ["I buoi", "Gli asini", "I robot"] },
      { q: "Quale famiglia possiede Château Pontet-Canet dal 1975?", a: "La famiglia Tesseron", x: ["La famiglia Cazes", "La famiglia Borie", "La famiglia Delon"] },
    ],
  },
  bx_batailley: {
    fact: "Si dice che il nome venga da una battaglia combattuta qui durante la Guerra dei cent’anni. Nel 1942 si separò da Haut-Batailley ed è gestito dalla famiglia Castéja.",
    quiz: [{ q: "Quale quinto cru vicino è nato dalla divisione di Château Batailley?", a: "Château Haut-Batailley", x: ["Château Grand-Puy-Lacoste", "Château Lynch-Moussas", "Château d’Armailhac"] }],
  },
  bx_hautbatailley: {
    fact: "Quinto cru di Pauillac nato nel 1942 dalla divisione della tenuta Batailley. Nel 2017 è stato acquistato dalla famiglia Cazes, proprietaria di Lynch-Bages.",
    quiz: [{ q: "Quale famiglia acquistò Château Haut-Batailley nel 2017?", a: "La famiglia Cazes", x: ["La famiglia Tesseron", "La famiglia Castéja", "La famiglia Delon"] }],
  },
  bx_grandpuylacoste: {
    fact: "«Puy» significa collina: lo château sorge su una collina ghiaiosa nell’entroterra di Pauillac. Dal 1978 è gestito dalla famiglia Borie.",
    quiz: [{ q: "Che cosa significa «Puy» nel nome di Château Grand-Puy-Lacoste?", a: "Collina", x: ["Pozzo", "Bosco", "Fiume"] }],
  },
  bx_grandpuyducasse: {
    fact: "Quinto cru con vigneti sparsi in tutta Pauillac e l’edificio dello château sul lungofiume del paese.",
    quiz: [{ q: "Quale classe ha Château Grand-Puy Ducasse nella classificazione del Médoc del 1855?", a: "Quinto cru", x: ["Secondo cru", "Terzo cru", "Quarto cru"] }],
  },
  bx_lynchbages: {
    fact: "Il nome viene dalla famiglia Lynch, di origine irlandese, che ne fu proprietaria. Guidato dalla famiglia Cazes dal 1939, si è guadagnato il soprannome di «Latour dei poveri».",
    quiz: [
      { q: "Qual è il soprannome di Château Lynch-Bages?", a: "Il Latour dei poveri", x: ["La Versailles del Médoc", "Il maharaja di Saint-Estèphe", "Il gioiello di Pomerol"] },
      { q: "Quale famiglia guida Château Lynch-Bages dal 1939?", a: "La famiglia Cazes", x: ["La famiglia Lynch", "La famiglia Borie", "La famiglia Tesseron"] },
    ],
  },
  bx_lynchmoussas: {
    fact: "Come Lynch-Bages, fu una tenuta della famiglia Lynch di origine irlandese. Oggi è gestito dalla famiglia Castéja, la stessa di Château Batailley.",
    quiz: [{ q: "Quale quinto cru è gestito dalla stessa famiglia Castéja di Château Lynch-Moussas?", a: "Château Batailley", x: ["Château Haut-Batailley", "Château Clerc Milon", "Château Pédesclaux"] }],
  },
  bx_dauzac: {
    fact: "Quinto cru di Margaux famoso per essere il luogo in cui, a fine Ottocento, fu sperimentata per la prima volta la «poltiglia bordolese» (solfato di rame e calce) contro le malattie fungine della vite.",
    quiz: [{ q: "Quale trattamento per la vigna sarebbe stato sperimentato per la prima volta a Château Dauzac?", a: "La poltiglia bordolese", x: ["Il polisolfuro di calcio", "Il DDT", "Il permanganato di potassio"] }],
  },
  bx_darmailhac: {
    fact: "Acquistato nel 1933 dal barone Philippe de Rothschild. Dopo aver cambiato più volte nome, tra cui «Mouton Baron Philippe», nel 1989 ha ripreso il nome originale d’Armailhac.",
    quiz: [{ q: "Quale nome ha portato per un periodo Château d’Armailhac?", a: "Château Mouton Baron Philippe", x: ["Château Mouton Cadet", "Château Petit Mouton", "Château Clerc Mouton"] }],
  },
  bx_dutertre: {
    fact: "Sorge su un’altura («tertre») del paese di Arsac, a ovest della denominazione Margaux. È gestito dalla famiglia Albada Jelgersma, la stessa di Giscours.",
    quiz: [{ q: "Quale terzo cru di Margaux è gestito dalla stessa famiglia di Château du Tertre?", a: "Château Giscours", x: ["Château Kirwan", "Château d’Issan", "Château Palmer"] }],
  },
  bx_hautbagesliberal: {
    fact: "Porta il nome della famiglia Libéral, proprietaria nel XVIII secolo. Claire Villars Lurton lo guida insieme al terzo cru Ferrière, in biodinamica.",
    quiz: [{ q: "Quale terzo cru di Margaux è guidato dalla stessa persona di Château Haut-Bages Libéral?", a: "Château Ferrière", x: ["Château Desmirail", "Château Kirwan", "Château d’Issan"] }],
  },
  bx_pedesclaux: {
    fact: "Fondato nel 1810 dal mediatore di vini bordolese Pierre-Urbain Pédesclaux. Nel 2009 Jacky Lorenzetti lo ha acquistato e rinnovato con un moderno edificio avvolto nel vetro.",
    quiz: [{ q: "Quale imprenditore acquistò e rinnovò Château Pédesclaux nel 2009?", a: "Jacky Lorenzetti", x: ["Bernard Magrez", "Michel Reybier", "François Pinault"] }],
  },
  bx_belgrave: {
    fact: "Quinto cru del comune di Saint-Laurent, nell’Haut-Médoc, gestito dal négociant bordolese Dourthe.",
    quiz: [{ q: "Quale classe ha Château Belgrave nella classificazione del Médoc del 1855?", a: "Quinto cru", x: ["Secondo cru", "Terzo cru", "Quarto cru"] }],
  },
  bx_camensac: {
    fact: "Quinto cru di Saint-Laurent, nell’Haut-Médoc. Con i vicini Belgrave e La Tour Carnet è uno dei tre château classificati del comune.",
    quiz: [{ q: "Quale quarto cru si trova nello stesso comune di Saint-Laurent di Château Camensac?", a: "Château La Tour Carnet", x: ["Château Talbot", "Château Saint-Pierre", "Château Pouget"] }],
  },
  bx_coslabory: {
    fact: "Piccolo quinto cru di Saint-Estèphe, confinante con Cos d’Estournel, gestito dalla famiglia Audoy.",
    quiz: [{ q: "Quale secondo cru di Saint-Estèphe confina con Château Cos Labory?", a: "Château Cos d’Estournel", x: ["Château Montrose", "Château Calon Ségur", "Château Lafon-Rochet"] }],
  },
  bx_clercmilon: {
    fact: "Quinto cru di Pauillac vicino a Mouton Rothschild e Lafite Rothschild. Fu acquistato nel 1970 dal barone Philippe de Rothschild.",
    quiz: [{ q: "Chi acquistò Château Clerc Milon nel 1970?", a: "Il barone Philippe de Rothschild", x: ["Eric de Rothschild", "Jean-Michel Cazes", "Henri Martin"] }],
  },
  bx_croizetbages: {
    fact: "Il nome unisce quello dei fratelli Croizet, proprietari nel XVIII secolo, e quello del borgo di Bages. È gestito dalla famiglia Quié, la stessa di Rauzan-Gassies.",
    quiz: [{ q: "Quale secondo cru di Margaux è gestito dalla stessa famiglia di Château Croizet-Bages?", a: "Château Rauzan-Gassies", x: ["Château Rauzan-Ségla", "Château Brane-Cantenac", "Château Lascombes"] }],
  },
  bx_cantemerle: {
    fact: "Il nome viene interpretato come «canta il merlo». Fu aggiunto in ritardo alla classificazione del 1855, in fondo all’elenco dei quinti cru.",
    quiz: [{ q: "Come entrò Château Cantemerle nella classificazione del 1855?", a: "Fu aggiunto in ritardo, dopo la pubblicazione dell’elenco", x: ["Fu declassato da primo cru", "Fu estratto a sorte", "Fu promosso con la revisione del 1973"] }],
  },
  bx_lepin: {
    fact: "Minuscolo vigneto di cui la famiglia belga Thienpont ha prodotto la prima annata nel 1979. Il nome viene da un pino solitario che sorgeva accanto.",
    quiz: [
      { q: "Da dove viene il nome Le Pin?", a: "Da un pino solitario accanto al vigneto", x: ["Dal nome del fondatore", "Da un antico monastero", "Da un piccolo ponte di pietra"] },
      { q: "Di che nazionalità è la famiglia Thienpont, proprietaria di Le Pin?", a: "Belga", x: ["Olandese", "Svizzera", "Lussemburghese"] },
    ],
  },
  bx_lafleur: {
    fact: "Piccolo vigneto confinante con Pétrus, curato dalla famiglia Guinaudeau come una fattoria di famiglia. Per essere un Pomerol ha un’alta percentuale di Cabernet Franc.",
    quiz: [{ q: "Quale famiglia cura Château Lafleur?", a: "La famiglia Guinaudeau", x: ["La famiglia Moueix", "La famiglia Thienpont", "La famiglia Durantou"] }],
  },
  bx_vcc: {
    fact: "Grande nome di Pomerol acquistato nel 1924 dalla famiglia belga Thienpont. Caso raro a Pomerol, ha un’alta percentuale di Cabernet Franc e Cabernet Sauvignon.",
    quiz: [{ q: "Quale famiglia acquistò Vieux Château Certan nel 1924?", a: "La famiglia Thienpont", x: ["La famiglia Moueix", "La famiglia Guinaudeau", "La famiglia Nicolas"] }],
  },
  bx_levangile: {
    fact: "Château di Pomerol situato tra Pétrus e Cheval Blanc. Dal 1990 è gestito dai Rothschild di Lafite, che ne hanno acquisito le quote.",
    quiz: [{ q: "Che cosa significa «Évangile» nel nome di Château L’Évangile?", a: "Vangelo", x: ["Angelo", "Cattedrale", "Pellegrino"] }],
  },
  bx_laconseillante: {
    fact: "Deve il nome a Catherine Conseillan, proprietaria nel XVIII secolo. Dal 1871 appartiene alla famiglia Nicolas; la capsula e le scritte viola in etichetta sono il suo marchio.",
    quiz: [{ q: "Qual è il colore simbolo della capsula di Château La Conseillante?", a: "Viola", x: ["Oro", "Nero", "Bianco"] }],
  },
  bx_trotanoy: {
    fact: "Si dice che il nome venga da «trop ennuie» («troppo faticoso»), tanto era duro lavorare il suo terreno compatto. Jean-Pierre Moueix lo acquistò nel 1953.",
    quiz: [{ q: "Quale négociant acquistò Château Trotanoy nel 1953?", a: "Jean-Pierre Moueix", x: ["Dourthe", "Cordier", "Il barone Philippe de Rothschild"] }],
  },
  bx_egliseclinet: {
    fact: "Il nome viene dal vigneto accanto alla chiesa di Pomerol. Dal 1983 Denis Durantou lo ha guidato fino a portarlo ai vertici di Pomerol.",
    quiz: [{ q: "Che cosa significa «Église» nel nome di Château L’Église-Clinet?", a: "Chiesa", x: ["Fortezza", "Pozzo", "Piazza"] }],
  },
  bx_clinet: {
    fact: "Château di Pomerol acquistato nel 1998 dalla famiglia Laborde e guidato dal figlio Ronan Laborde. Unisce Merlot e Cabernet Sauvignon.",
    quiz: [{ q: "Quale famiglia guida Château Clinet?", a: "La famiglia Laborde", x: ["La famiglia Durantou", "La famiglia Nicolas", "La famiglia Thienpont"] }],
  },
  bx_gazin: {
    fact: "Nel Medioevo era una terra dell’Ordine di San Giovanni di Gerusalemme (Ospitalieri), la cui croce è rimasta in etichetta. Appartiene da generazioni alla famiglia Bailliencourt.",
    quiz: [{ q: "Quale antico proprietario richiama la croce sull’etichetta di Château Gazin?", a: "L’Ordine di San Giovanni (Ospitalieri)", x: ["La Santa Sede", "L’arcivescovo di Bordeaux", "La corona d’Inghilterra"] }],
  },
  bx_nenin: {
    fact: "Château di Pomerol acquistato e rinnovato nel 1997 dalla famiglia Delon di Léoville Las Cases.",
    quiz: [{ q: "Quale famiglia acquistò Château Nénin nel 1997?", a: "La famiglia Delon", x: ["La famiglia Thienpont", "La famiglia Moueix", "La famiglia Laborde"] }],
  },
  bx_bonpasteur: {
    fact: "Château di Pomerol curato da generazioni dalla famiglia di Michel Rolland, enologo consulente di fama mondiale. Il nome significa «il buon pastore».",
    quiz: [{ q: "A quale enologo consulente è strettamente legato Château Le Bon Pasteur?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] }],
  },
  bx_lafleurpetrus: {
    fact: "Sorge tra i vicini Lafleur e Pétrus, da cui il nome che unisce i due. Appartiene alla famiglia Jean-Pierre Moueix.",
    quiz: [{ q: "Quale négociant possiede Château La Fleur-Pétrus?", a: "Jean-Pierre Moueix", x: ["La famiglia Thienpont", "La famiglia Guinaudeau", "Domaine Clarence Dillon"] }],
  },
  bx_ausone: {
    fact: "Grande nome di Saint-Émilion che deve il nome al poeta romano Ausonio, del IV secolo. In vista della revisione del 2022 si è ritirato dalla classificazione insieme a Cheval Blanc.",
    quiz: [
      { q: "Da chi prende il nome Château Ausone?", a: "Dal poeta romano Ausonio", x: ["Dall’imperatore romano Adriano", "Da sant’Emiliano", "Da Carlo Magno"] },
      { q: "Quale famiglia guida Château Ausone?", a: "La famiglia Vauthier", x: ["La famiglia Moueix", "La famiglia de Boüard", "La famiglia Manoncourt"] },
    ],
  },
  bx_angelus: {
    fact: "Il nome viene dalle campane dell’Angelus di tre chiese che si sentono dal vigneto, e in etichetta c’è una campana dorata. Nel 2012 è salito al rango più alto, «A».",
    quiz: [
      { q: "Qual è il simbolo dell’etichetta di Château Angélus?", a: "Una campana", x: ["Un angelo", "Una chiave", "Un giglio"] },
      { q: "Quale château salì con Château Angélus al rango più alto «A» di Saint-Émilion nel 2012?", a: "Château Pavie", x: ["Château Figeac", "Château Canon", "Château Troplong Mondot"] },
    ],
  },
  bx_pavie: {
    fact: "Acquistato nel 1998 da Gérard Perse, che vi ha investito in grande. Nel 2012 è salito con Angélus al rango più alto «A» di Saint-Émilion.",
    quiz: [{ q: "Chi acquistò Château Pavie nel 1998?", a: "Gérard Perse", x: ["Hubert de Boüard", "Alain Vauthier", "Bernard Magrez"] }],
  },
  bx_figeac: {
    fact: "Caso raro a Saint-Émilion, i due Cabernet superano la metà dell’uvaggio. Il vicino Cheval Blanc è un terreno staccatosi dalla tenuta di Figeac nell’Ottocento.",
    quiz: [
      { q: "Quale celebre château nacque nell’Ottocento da una parte della tenuta di Château Figeac?", a: "Château Cheval Blanc", x: ["Château Ausone", "Château Angélus", "Château Pavie"] },
      { q: "In che anno Château Figeac è salito al rango più alto «A» di Saint-Émilion?", a: "2022", x: ["2012", "1996", "2006"] },
    ],
  },
  bx_canon: {
    fact: "Premier Grand Cru Classé di Saint-Émilion che porta il nome di Jacques Kanon, proprietario nel XVIII secolo. Nel 1996 è stato acquistato dalla famiglia Wertheimer, proprietaria di Chanel.",
    quiz: [{ q: "Chi possiede sia Château Canon sia Rauzan-Ségla a Margaux?", a: "Chanel (famiglia Wertheimer)", x: ["LVMH", "AXA Millésimes", "Louis Roederer"] }],
  },
  bx_belairmonange: {
    fact: "Nel 2008 la famiglia Moueix acquistò l’antico Château Bélair e lo ribattezzò in onore di Anne-Adèle Monange, antenata di famiglia. Nel 2012 vi ha incorporato il vicino Château Magdelaine.",
    quiz: [{ q: "Quale château della famiglia Moueix è stato incorporato in Château Bélair-Monange nel 2012?", a: "Château Magdelaine", x: ["Château Canon", "Château Troplong Mondot", "Clos Fourtet"] }],
  },
  bx_troplongmondot: {
    fact: "Sorge su una delle colline calcaree più alte di Saint-Émilion. Promosso Premier Grand Cru Classé nel 2006, nel 2017 è stato acquistato dal riassicuratore SCOR.",
    quiz: [{ q: "Chi acquistò Château Troplong Mondot nel 2017?", a: "Il riassicuratore SCOR", x: ["AXA Millésimes", "Chanel", "Suntory"] }],
  },
  bx_valandraud: {
    fact: "Capostipite dei «vins de garage», nato in un piccolo magazzino dai coniugi Jean-Luc Thunevin e Murielle Andraud. Prima annata nel 1991, promosso Premier Grand Cru Classé nel 2012.",
    quiz: [
      { q: "Come si chiamano i vini come Château Valandraud, prodotti in piccole quantità in un magazzino, che fecero scalpore negli anni ’90?", a: "Vins de garage", x: ["Vini naturali", "Supertuscan", "Orange wine"] },
      { q: "Chi ha creato Château Valandraud?", a: "Jean-Luc Thunevin", x: ["Gérard Perse", "Michel Rolland", "Hubert de Boüard"] },
    ],
  },
  bx_lamondotte: {
    fact: "La prima annata è uscita nel 1996 da un piccolo vigneto della famiglia dei conti von Neipperg. Con la revisione del 2012 è salito direttamente a Premier Grand Cru Classé.",
    quiz: [{ q: "Quale famiglia possiede La Mondotte?", a: "La famiglia von Neipperg", x: ["La famiglia Vauthier", "La famiglia Moueix", "La famiglia Bécot"] }],
  },
  bx_tertreroteboeuf: {
    fact: "Significa «la collina dove il bue rutta»: il pendio era così ripido che i buoi all’aratro ansimavano. Pur senza classificazione, si vende a prezzi da vertice assoluto.",
    quiz: [{ q: "Che cosa significa il nome di Château Tertre Rôteboeuf?", a: "La collina dove il bue rutta", x: ["La collina del manzo arrosto", "Il campo del toro rosso", "Il pendio dove riposa il contadino"] }],
  },
  bx_beausejourbecot: {
    fact: "Declassato nella revisione degli anni ’80 per aver accorpato vigneti non classificati, ha riconquistato il rango di Premier Grand Cru Classé nel 1996. È gestito dalla famiglia Bécot.",
    quiz: [{ q: "Quale rango, perso negli anni ’80, ha riconquistato Château Beau-Séjour Bécot nel 1996?", a: "Premier Grand Cru Classé", x: ["Cru Bourgeois", "Grand Cru Classé de Graves", "Secondo cru del 1855"] }],
  },
  bx_closfourtet: {
    fact: "Si trova proprio davanti alle mura del borgo di Saint-Émilion, con una cantina scavata nel sottosuolo in antiche cave di calcare. Nel 2001 è stato acquistato dalla famiglia Cuvelier.",
    quiz: [{ q: "Quale famiglia acquistò Clos Fourtet nel 2001?", a: "La famiglia Cuvelier", x: ["La famiglia Lurton", "La famiglia Bécot", "La famiglia Perse"] }],
  },
  bx_larcisducasse: {
    fact: "Nasce da vigneti terrazzati su un pendio esposto a sud, accanto a Pavie. Con la revisione del 2012 è salito a Premier Grand Cru Classé.",
    quiz: [{ q: "In che anno Château Larcis Ducasse è diventato Premier Grand Cru Classé?", a: "2012", x: ["1996", "2006", "1955"] }],
  },
  bx_paviemacquin: {
    fact: "Porta il nome di Albert Macquin, che dopo la fillossera diffuse a Saint-Émilion l’innesto su portinnesti americani. Promosso Premier Grand Cru Classé nel 2006.",
    quiz: [{ q: "Per che cosa è ricordato Albert Macquin, che ha dato il nome a Château Pavie Macquin?", a: "Diffuse l’innesto su portinnesti americani dopo la fillossera", x: ["Inventò la poltiglia bordolese", "Redasse la classificazione del 1855", "Fu il primo a imbottigliare allo château"] }],
  },
  bx_canonlagaffeliere: {
    fact: "Château di Saint-Émilion di proprietà della famiglia dei conti von Neipperg dal 1971. Promosso Premier Grand Cru Classé nel 2012.",
    quiz: [{ q: "Quale famiglia possiede sia Château Canon-la-Gaffelière sia La Mondotte?", a: "La famiglia von Neipperg", x: ["La famiglia Wertheimer", "La famiglia Moueix", "La famiglia Vauthier"] }],
  },
  bx_missionhautbrion: {
    fact: "Il nome viene dai sacerdoti della Congregazione della Missione (lazzaristi) che curarono questa terra nel Seicento. Nel 1983 è stato acquistato dalla famiglia Dillon, proprietaria di Haut-Brion dall’altro lato della strada.",
    quiz: [
      { q: "Chi acquistò Château La Mission Haut-Brion nel 1983?", a: "Domaine Clarence Dillon", x: ["Bernard Magrez", "La famiglia Cathiard", "Louis Roederer"] },
      { q: "A chi si riferisce la «Mission» di Château La Mission Haut-Brion?", a: "Agli antichi sacerdoti di una congregazione missionaria", x: ["A una spedizione militare", "A una missione diplomatica", "A una spedizione esplorativa"] },
    ],
  },
  bx_papeclement: {
    fact: "Vigneto appartenuto a Bertrand de Got, arcivescovo di Bordeaux divenuto papa Clemente V nel 1305. Oggi è gestito da Bernard Magrez.",
    quiz: [{ q: "Dove trasferì la sede papale Clemente V, che ha dato il nome a Château Pape Clément?", a: "Ad Avignone", x: ["A Bordeaux", "A Lione", "A Reims"] }],
  },
  bx_smithhautlafitte: {
    fact: "Porta ancora il nome del mercante scozzese George Smith, del XVIII secolo. Nel 1990 lo hanno acquistato i coniugi Cathiard, ex sciatori; la figlia ha creato la cosmetica all’uva «Caudalie».",
    quiz: [
      { q: "Quale marchio di cosmetici ha creato la figlia della famiglia Cathiard di Château Smith Haut Lafitte?", a: "Caudalie", x: ["L’Occitane", "Nuxe", "Biotherm"] },
      { q: "Qual era la professione precedente dei coniugi Cathiard, che acquistarono Château Smith Haut Lafitte nel 1990?", a: "Sciatori", x: ["Velisti", "Ciclisti", "Tennisti"] },
    ],
  },
  bx_chevalier: {
    fact: "Grande nome di Pessac-Léognan in una radura tra i pini, classificato fra i cru delle Graves sia per il rosso sia per il bianco. Dal 1983 è gestito dalla famiglia Bernard.",
    quiz: [{ q: "Quali vini di Domaine de Chevalier sono classificati fra i cru delle Graves?", a: "Sia il rosso sia il bianco", x: ["Solo il rosso", "Solo il bianco", "Solo il vino dolce"] }],
  },
  bx_hautbailly: {
    fact: "Acquistato nel 1998 dal banchiere americano Robert Wilmers. Custodisce un vecchio vigneto di viti ultracentenarie di più varietà piantate insieme.",
    quiz: [{ q: "Di che nazionalità era Robert Wilmers, che acquistò Château Haut-Bailly nel 1998?", a: "Americana", x: ["Britannica", "Belga", "Di Hong Kong"] }],
  },
  bx_malartic: {
    fact: "Porta il nome della famiglia del conte di Malartic, ammiraglio del XVIII secolo, e in etichetta c’è un veliero. Nel 1997 è stato acquistato dalla famiglia belga Bonnie.",
    quiz: [{ q: "Di che nazionalità è la famiglia Bonnie, che acquistò Château Malartic-Lagravière nel 1997?", a: "Belga", x: ["Olandese", "Svizzera", "Americana"] }],
  },
  bx_carbonnieux: {
    fact: "Celebre l’aneddoto dei monaci benedettini che vendevano il loro vino bianco al sultano ottomano, a cui l’alcol era vietato, spacciandolo per «acqua minerale di Carbonnieux».",
    quiz: [{ q: "Con quale nome i monaci di Château Carbonnieux avrebbero venduto il vino al sultano ottomano?", a: "Acqua minerale di Carbonnieux", x: ["Acqua santa di Carbonnieux", "Tisana di Carbonnieux", "Succo d’uva di Carbonnieux"] }],
  },
  bx_lescarmes: {
    fact: "Il nome ricorda il vigneto degli antichi frati carmelitani. Patrice Pichet, che lo acquistò nel 2010, vi ha costruito una cantina a forma di nave progettata da Philippe Starck.",
    quiz: [{ q: "Quale designer ha progettato la nuova cantina di Château Les Carmes Haut-Brion?", a: "Philippe Starck", x: ["Jean Nouvel", "Frank Gehry", "Tadao Ando"] }],
  },
  bx_suduiraut: {
    fact: "Premier cru di Sauternes confinante con Yquem. Si dice che il giardino sia stato progettato da Le Nôtre, autore dei giardini di Versailles; dal 1992 appartiene ad AXA Millésimes.",
    quiz: [{ q: "Chi possiede Château Suduiraut dal 1992?", a: "AXA Millésimes", x: ["LVMH", "Domaines Barons de Rothschild", "Domaine Clarence Dillon"] }],
  },
  bx_rieussec: {
    fact: "Premier cru di Sauternes acquistato nel 1984 dai Rothschild di Lafite, nel comune di Fargues, vicino a Yquem.",
    quiz: [{ q: "Chi acquistò Château Rieussec nel 1984?", a: "I Rothschild di Lafite Rothschild", x: ["AXA Millésimes", "I Rothschild di Mouton Rothschild", "LVMH"] }],
  },
  bx_climens: {
    fact: "Premier cru soprannominato «il signore di Barsac». È prodotto con Sémillon al 100% e coltivato in biodinamica.",
    quiz: [{ q: "Qual è il soprannome di Château Climens?", a: "Il signore di Barsac", x: ["La regina di Sauternes", "La Versailles del Médoc", "L’Yquem dei poveri"] }],
  },
  bx_coutet: {
    fact: "Premier cru di Barsac che conserva un edificio fortificato medievale. È famoso per la «Cuvée Madame», prodotta in piccole quantità solo nelle grandi annate.",
    quiz: [{ q: "Quale cuvée speciale produce Château Coutet in piccole quantità solo nelle grandi annate?", a: "Cuvée Madame", x: ["Cuvée Louise", "Réserve du Général", "Cuvée Prestige"] }],
  },
  bx_guiraud: {
    fact: "Premier cru di Sauternes con certificazione biologica. Nel 2006 è stato acquistato da un gruppo che comprendeva Robert Peugeot, della famiglia Peugeot, e Olivier Bernard di Domaine de Chevalier.",
    quiz: [{ q: "Quale famiglia dell’automobile partecipò all’acquisto di Château Guiraud nel 2006?", a: "La famiglia Peugeot", x: ["La famiglia Renault", "La famiglia Citroën", "La famiglia Michelin"] }],
  },
  bx_latourblanche: {
    fact: "Nel 1907 il proprietario Daniel Iffla Osiris lo donò allo Stato a condizione che vi nascesse una scuola di viticoltura ed enologia. Ancora oggi è gestito da una scuola del Ministero dell’Agricoltura.",
    quiz: [{ q: "Chi è il proprietario di Château La Tour Blanche?", a: "Lo Stato francese (Ministero dell’Agricoltura)", x: ["L’Università di Bordeaux", "La città di Bordeaux", "Il consorzio dei produttori di Sauternes"] }],
  },
  bx_lafauriepeyraguey: {
    fact: "Nel 2014 l’ha acquistato Silvio Denz, presidente del marchio di cristalli Lalique, che vi ha aperto un hotel e un ristorante Lalique.",
    quiz: [{ q: "Con quale marchio di cristalli si è legato Château Lafaurie-Peyraguey?", a: "Lalique", x: ["Baccarat", "Swarovski", "Riedel"] }],
  },
  bx_fargues: {
    fact: "Tenuta custodita dal XV secolo dalla famiglia Lur Saluces, a lungo proprietaria di Yquem. Pur senza classificazione, è considerato un Sauternes quasi all’altezza di Yquem.",
    quiz: [{ q: "Quale château di Sauternes, unico con il rango supremo, ha posseduto a lungo la famiglia Lur Saluces di Château de Fargues?", a: "Château d’Yquem", x: ["Château Suduiraut", "Château Climens", "Château Rieussec"] }],
  },
  bx_sociandomallet: {
    fact: "Acquistato nel 1969 dal négociant Jean Gautreau, che lo ha portato al livello dei château classificati. Non partecipa alla selezione dei Cru Bourgeois e si vende solo grazie al suo nome.",
    quiz: [{ q: "Chi acquistò Château Sociando-Mallet nel 1969 e lo fece crescere?", a: "Jean Gautreau", x: ["Henri Martin", "Jean-Michel Cazes", "Alexis Lichine"] }],
  },
  bx_chassespleen: {
    fact: "Significa «scaccia la malinconia (spleen)»; si racconta che il nome sia stato suggerito da Byron o da Baudelaire. È considerato il portabandiera dei Cru Bourgeois.",
    quiz: [{ q: "Che cosa significa il nome di Château Chasse-Spleen?", a: "Scaccia la malinconia", x: ["Il riposo del cacciatore", "La collina lucente", "Il bosco che ferma il vento"] }],
  },
  bx_gloria: {
    fact: "Creato dagli anni ’40 da Henri Martin, sindaco di Saint-Julien, acquistando una parcella alla volta dai vicini château classificati. Pur senza classificazione, è trattato alla pari dei cru classificati.",
    quiz: [{ q: "Chi ha fondato Château Gloria?", a: "Henri Martin", x: ["Jean Gautreau", "Alexis Lichine", "Philippe de Rothschild"] }],
  },
  bx_phelansegur: {
    fact: "Tenuta di Saint-Estèphe creata nell’Ottocento dall’irlandese Bernard Phelan. Pur fuori classificazione, è considerata al livello di un grand cru classé.",
    quiz: [{ q: "Da dove veniva Bernard Phelan, che ha dato il nome a Château Phélan Ségur?", a: "Dall’Irlanda", x: ["Dalla Scozia", "Dall’Inghilterra", "Dai Paesi Bassi"] }],
  },
  bx_potensac: {
    fact: "Château del Médoc settentrionale gestito dalla famiglia Delon di Léoville Las Cases, rinomato per l’ottimo rapporto qualità-prezzo.",
    quiz: [{ q: "Quale famiglia gestisce Château Potensac?", a: "La famiglia Delon", x: ["La famiglia Cazes", "La famiglia Borie", "La famiglia Cuvelier"] }],
  },
  bx_poujeaux: {
    fact: "Château simbolo di Moulis, acquistato nel 2008 dalla famiglia Cuvelier, proprietaria di Clos Fourtet a Saint-Émilion.",
    quiz: [{ q: "Quale famiglia possiede sia Château Poujeaux sia Clos Fourtet a Saint-Émilion?", a: "La famiglia Cuvelier", x: ["La famiglia Lurton", "La famiglia Delon", "La famiglia Moueix"] }],
  },
  bx_clarke: {
    fact: "Château di Listrac acquistato nel 1973 dal barone Edmond de Rothschild, che ne ha ripiantato i vigneti.",
    quiz: [{ q: "Chi acquistò Château Clarke nel 1973?", a: "Edmond de Rothschild", x: ["Philippe de Rothschild", "Eric de Rothschild", "Clarence Dillon"] }],
  },
  bx_depez: {
    fact: "Château di Saint-Estèphe acquistato nel 1995 dalla maison di champagne Louis Roederer, che in seguito ha comprato anche Pichon Comtesse.",
    quiz: [{ q: "Quale maison di champagne acquistò Château de Pez nel 1995?", a: "Louis Roederer", x: ["Bollinger", "Veuve Clicquot", "Pol Roger"] }],
  },
  bx_angludet: {
    fact: "Château di Margaux acquistato nel 1961 dalla famiglia Sichel, che è anche comproprietaria del terzo cru Château Palmer.",
    quiz: [{ q: "Di quale terzo cru è comproprietaria la famiglia Sichel, che gestisce Château d’Angludet?", a: "Château Palmer", x: ["Château Giscours", "Château Kirwan", "Château d’Issan"] }],
  },
  bx_ormesdepez: {
    fact: "Château di Saint-Estèphe gestito dal 1940 dalla famiglia Cazes, proprietaria di Lynch-Bages.",
    quiz: [{ q: "Quale famiglia gestisce Château Ormes de Pez?", a: "La famiglia Cazes", x: ["La famiglia Delon", "La famiglia Tesseron", "La famiglia Borie"] }],
  },
  bx_carruades: {
    fact: "Il secondo vino di Lafite Rothschild. Il nome viene dai vigneti della collina delle «Carruades», annessi alla tenuta di Lafite.",
    quiz: [{ q: "Da quale paese veniva soprattutto la domanda che fece schizzare il prezzo di Carruades de Lafite alla fine degli anni 2000?", a: "Cina", x: ["Giappone", "Russia", "India"] }],
  },
  bx_pavillonrouge: {
    fact: "Il secondo vino di Château Margaux, che porta il nome «Pavillon Rouge» dal 1908.",
    quiz: [{ q: "Quale vino bianco di Château Margaux fa coppia con Pavillon Rouge du Château Margaux?", a: "Pavillon Blanc", x: ["Aile d’Argent", "Caillou Blanc", "Blanc de Lynch-Bages"] }],
  },
  bx_fortsdelatour: {
    fact: "Il secondo vino di Château Latour, con prima annata nel 1966. Come Latour, esce solo dopo un lungo affinamento.",
    quiz: [{ q: "Qual è la prima annata di Les Forts de Latour?", a: "1966", x: ["1945", "1982", "1990"] }],
  },
  bx_petitmouton: {
    fact: "Il secondo vino di Mouton Rothschild, presentato per la prima volta negli anni ’90. Il bianco dello stesso château è l’«Aile d’Argent».",
    quiz: [{ q: "Quale vino bianco produce lo château di Le Petit Mouton?", a: "Aile d’Argent", x: ["Pavillon Blanc", "Caillou Blanc", "Blanc de Lynch-Bages"] }],
  },
  bx_clarence: {
    fact: "Secondo vino che nel 2007 ha abbandonato il nome «Bahans Haut-Brion» per onorare Clarence Dillon, il banchiere americano che acquistò Haut-Brion nel 1935.",
    quiz: [
      { q: "Qual era il nome precedente di Le Clarence de Haut-Brion?", a: "Bahans Haut-Brion", x: ["La Chapelle de la Mission", "Carruades de Haut-Brion", "Pavillon de Haut-Brion"] },
      { q: "Chi onora Le Clarence de Haut-Brion?", a: "Il banchiere americano Clarence Dillon", x: ["Papa Clemente V", "Il re inglese Carlo II", "Napoleone III"] },
    ],
  },
  bx_alterego: {
    fact: "Uscito nel 1998 al posto del precedente secondo vino «Réserve du Général». Come dice il nome, è l’«altro io» di Palmer, vinificato a parte.",
    quiz: [{ q: "Come si chiamava il secondo vino di Château Palmer prima di Alter Ego de Palmer?", a: "Réserve du Général", x: ["Pavillon Rouge", "Les Forts", "Clos du Marquis"] }],
  },
  bx_petitcheval: {
    fact: "Il secondo vino di Cheval Blanc, presentato per la prima volta nel 1988.",
    quiz: [{ q: "Chi acquistò nel 1998 Château Cheval Blanc, che produce Le Petit Cheval?", a: "Bernard Arnault e Albert Frère", x: ["François Pinault", "I fratelli Wertheimer", "I fratelli Bouygues"] }],
  },
  bx_closdumarquis: {
    fact: "A lungo considerato il secondo vino di Léoville Las Cases, dal 2007 è prodotto come vino indipendente da un vigneto separato.",
    quiz: [{ q: "Quale vino ha sostituito Clos du Marquis come secondo vino di Léoville Las Cases dal 2007?", a: "Le Petit Lion du Marquis de Las Cases", x: ["Les Forts de Latour", "Réserve de la Comtesse", "La Croix de Beaucaillou"] }],
  },
  bx_pagodesdecos: {
    fact: "Il secondo vino di Cos d’Estournel, che prende il nome dalle pagode orientali sul tetto della cantina.",
    quiz: [{ q: "Da dove viene il nome Les Pagodes de Cos?", a: "Dalle pagode orientali sul tetto della cantina", x: ["Dal diario di viaggio in India del fondatore", "Dai pini del vigneto", "Dal campanile della chiesa del paese"] }],
  },
  bx_carillonangelus: {
    fact: "Il secondo vino di Angélus. Il «carillon» è uno strumento che suona più campane, legato alla campana simbolo di Angélus.",
    quiz: [{ q: "Che cosa significa «Carillon» nel nome Carillon d’Angélus?", a: "Uno strumento che suona più campane", x: ["Un piccolo vigneto", "Il flauto del pastore", "Il giardino di un monastero"] }],
  },
  bx_pavillonblanc: {
    fact: "La denominazione Margaux riconosce solo i rossi, perciò il bianco di Château Margaux esce come «AOC Bordeaux». È prodotto con Sauvignon Blanc al 100%.",
    quiz: [{ q: "Perché Pavillon Blanc du Château Margaux non può indicare in etichetta la denominazione «Margaux»?", a: "Perché l’AOC Margaux riconosce solo i vini rossi", x: ["Perché è un secondo vino", "Perché non passa in botte", "Perché è fatto con uve acquistate"] }],
  },
  bx_moutoncadet: {
    fact: "Nacque nel 1930, quando il barone Philippe de Rothschild vendette a parte un vino di un’annata scarsa, non degno di Mouton Rothschild. «Cadet» indica il figlio minore, come lo era Philippe.",
    quiz: [{ q: "Che cosa significa «Cadet» in Mouton Cadet?", a: "Il figlio minore", x: ["Il primogenito", "Il cavaliere", "L’agnellino"] }],
  },
  bx_montperat: {
    fact: "Rosso di Bordeaux diventato popolarissimo in Corea e Giappone dopo che il manga «Le gocce di Dio» lo ha paragonato alla musica dei Queen.",
    quiz: [{ q: "A quale gruppo rock viene paragonato Château Mont-Pérat nel manga «Le gocce di Dio»?", a: "I Queen", x: ["I Beatles", "I Rolling Stones", "I Led Zeppelin"] }],
  },
};

export default T;
