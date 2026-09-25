import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  us2_slwc_artemis: {
    fact: "Cabernet della Napa Valley che Stag’s Leap Wine Cellars ottiene assemblando uve di diversi vigneti. Il nome viene dalla dea greca della caccia.",
    quiz: [{ q: "Da quale leggenda viene il nome «Stags Leap» della cantina che produce Artemis?", a: "Un cervo inseguito dai cacciatori saltò oltre una parete di roccia", x: ["Un branco di cervi attraversò il fiume migrando", "Un capo nativo si trasformò in cervo", "Da una miniera d’oro emerse un enorme palco di cervo"] }],
  },
  us2_slwc_fay: {
    fact: "Cabernet dal vigneto accanto a quello dello S.L.V. Il fondatore Warren Winiarski comprò il terreno vicino dopo aver assaggiato il vino fatto dal proprietario di questo vigneto.",
    quiz: [{ q: "Che cosa fece per primo nel 1961 nello Stags Leap District Nathan Fay, che dà il nome al Fay Vineyard?", a: "Piantò il primo Cabernet Sauvignon", x: ["Organizzò la prima asta di vini", "Scavò la prima cantina in grotta", "Produsse il primo spumante"] }],
  },
  us2_stagsleap_winery_ps: {
    fact: "Antica tenuta dello Stags Leap District con prima annata nel 1893, dove resta la casa padronale in pietra, la «Manor House». È famosa da tempo per il Petite Sirah.",
    quiz: [{ q: "Come si sono distinte nel nome, dopo una causa legale, Stags’ Leap Winery e Stag’s Leap Wine Cellars?", a: "Con una diversa posizione dell’apostrofo", x: ["Una ha aggiunto «Napa» davanti al nome", "Una ha preso un nome francese", "Una ha tolto la parola «Winery»"] }],
  },
  us2_chimney_rock: {
    fact: "Cantina dello Stags Leap District nata piantando vigne su metà di un vecchio campo da golf. L’edificio riflette i gusti del fondatore Hack Wilson, che aveva lavorato a lungo in Sudafrica.",
    quiz: [{ q: "In quale stile architettonico è l’edificio bianco della cantina Chimney Rock?", a: "Cape Dutch sudafricano", x: ["Missione spagnola", "Villa toscana", "Tudor inglese"] }],
  },
  us2_clos_du_val: {
    fact: "Fondata all’inizio degli anni ’70 nello Stags Leap District dal francese Bernard Portet con l’imprenditore americano John Goelet. L’annata 1972 partecipò al «Giudizio di Parigi».",
    quiz: [
      { q: "In quale château di Bordeaux lavorò come direttore tecnico il padre di Bernard Portet, fondatore di Clos Du Val?", a: "Château Lafite Rothschild", x: ["Château Margaux", "Château Latour", "Château Haut-Brion"] },
      { q: "Che risultato ottenne il Cabernet Clos Du Val 1972 alla rivincita del 1986, per i dieci anni del Giudizio di Parigi?", a: "Primo posto", x: ["Secondo posto", "Quinto posto", "Ultimo posto"] },
    ],
  },
  us2_cliff_lede: {
    fact: "Cantina fondata nel 2002 dall’imprenditore edile canadese Cliff Lede, che acquistò vigneti nello Stags Leap District.",
    quiz: [{ q: "Quali nomi ha dato Cliff Lede alle parcelle del suo vigneto?", a: "Titoli di celebri canzoni e album rock", x: ["Nomi di dei greci", "Nomi di familiari", "Nomi di costellazioni"] }],
  },
  us2_silverado: {
    fact: "Cantina che acquistò vigneti negli anni ’70 sulle colline dello Stags Leap District, lungo la Silverado Trail, e iniziò a produrre vino nel 1981.",
    quiz: [{ q: "Quale famiglia fondò Silverado Vineyards?", a: "La famiglia di Walt Disney", x: ["La famiglia Coppola", "La famiglia Getty", "La famiglia Kennedy"] }],
  },
  us2_shafer_rsr: {
    fact: "Chardonnay che Shafer Vineyards, dello Stags Leap District, produce nei freschi vigneti di Carneros. È famoso per un gusto pieno ma fresco.",
    quiz: [{ q: "Da che cosa viene il nome Red Shoulder Ranch?", a: "Dalla poiana spallerosse (un rapace) che vive nel vigneto", x: ["Da una collina di terra rossa", "Dal cavallo rosso amato dal fondatore", "Dal soprannome del vecchio proprietario del ranch"] }],
  },
  us2_farniente_cab: {
    fact: "Il rosso simbolo di Far Niente, che riportò in vita la cantina di pietra di Oakville abbandonata con il Proibizionismo. È prodotto con uve della tenuta di Oakville.",
    quiz: [{ q: "Quale celebre pittore americano era nipote di John Benson, pioniere della corsa all’oro che fondò Far Niente nel 1885?", a: "Winslow Homer", x: ["Edward Hopper", "Norman Rockwell", "Andrew Wyeth"] }],
  },
  us2_nickel_nickel: {
    fact: "Cantina fondata a Oakville nel 1997 dalla famiglia di Gil Nickel. Il Sullenger Vineyard è il vigneto di Cabernet proprio dietro la cantina, ricavata da una fattoria ottocentesca.",
    quiz: [
      { q: "Quale principio rispetta Nickel & Nickel per tutti i suoi vini?", a: "Un solo vitigno da un solo vigneto", x: ["Assemblare uve di diverse zone", "Non usare mai botti", "Usare solo tappi a vite"] },
      { q: "Quale cantina sorella di Oakville è gestita dalla stessa famiglia di Nickel & Nickel?", a: "Far Niente", x: ["Silver Oak", "Caymus", "Duckhorn"] },
    ],
  },
  us2_plumpjack: {
    fact: "Cantina fondata a Oakville nel 1995. Imbottigliando con il tappo a vite metà del suo Cabernet Reserve 1997, accese il dibattito sulle chiusure dei grandi vini.",
    quiz: [
      { q: "Quale cofondatore di PlumpJack divenne in seguito governatore della California?", a: "Gavin Newsom", x: ["Arnold Schwarzenegger", "Jerry Brown", "Gray Davis"] },
      { q: "Di quale personaggio di Shakespeare è soprannome «PlumpJack»?", a: "Falstaff", x: ["Amleto", "Shylock", "Re Lear"] },
    ],
  },
  us2_overture: {
    fact: "Il secondo vino di Opus One, prodotto dal 1993. A lungo è uscito senza annata, assemblando più vendemmie.",
    quiz: [{ q: "Chi fondò la cantina che ha Overture come secondo vino?", a: "Robert Mondavi e il barone Philippe de Rothschild", x: ["Robert Mondavi e Christian Moueix", "Bill Harlan ed Eric de Rothschild", "Jack Cakebread e André Tchelistcheff"] }],
  },
  us2_harlan_maiden: {
    fact: "Secondo vino dallo stesso vigneto sulle pendici a ovest di Oakville. È venduto prima ai clienti della lista postale.",
    quiz: [{ q: "Di quale vino è il secondo vino The Maiden?", a: "Harlan Estate", x: ["Dominus", "Opus One", "Screaming Eagle"] }],
  },
  us2_promontory: {
    fact: "Cabernet che la famiglia di Bill Harlan produce su un terreno isolato tra le montagne a ovest di Oakville. Lo caratterizza un terreno aspro, circondato da boschi e rocce.",
    quiz: [{ q: "Quale vino di culto aveva creato in precedenza la famiglia che produce Promontory?", a: "Harlan Estate", x: ["Screaming Eagle", "Colgin", "Dominus"] }],
  },
  us2_groth_reserve: {
    fact: "Il Cabernet di punta della cantina fondata nel 1981 a Oakville da Dennis Groth, dirigente dell’azienda di videogiochi Atari, e dalla moglie.",
    quiz: [{ q: "Quale primato stabilì il Cabernet Groth Reserve 1985?", a: "Fu il primo vino californiano a ricevere 100 punti da Robert Parker", x: ["Fu il primo vino portato nello spazio", "È il vino americano più caro mai venduto all’asta", "Fu il primo grande vino con tappo a vite"] }],
  },
  us2_napanook: {
    fact: "Secondo vino che prende il nome da uno storico vigneto di Yountville. È prodotto dalla famiglia Moueix, grande nome di Pomerol.",
    quiz: [{ q: "Di quale vino è il secondo vino Napanook?", a: "Dominus", x: ["Opus One", "Harlan Estate", "Insignia"] }],
  },
  us2_frogs_leap_sb: {
    fact: "Cantina fondata nel 1981 da John Williams e Larry Turley. È fedele alla coltivazione in asciutto, senza irrigazione, e al biologico.",
    quiz: [
      { q: "Quale cantina della Napa imita scherzosamente il nome Frog’s Leap?", a: "Stag’s Leap Wine Cellars", x: ["Harlan Estate", "Far Niente", "Chateau Montelena"] },
      { q: "Che cos’era in origine il luogo dove Frog’s Leap produsse il suo primo vino?", a: "Un allevamento di rane", x: ["Un ufficio postale", "Una stazione ferroviaria", "Un monastero"] },
    ],
  },
  us2_mondavi_fume: {
    fact: "Nel 1968 Robert Mondavi lanciò il suo Sauvignon Blanc secco affinato in botte con il nuovo nome di «Fumé Blanc».",
    quiz: [{ q: "A quale vino francese si ispirò Robert Mondavi per il nome «Fumé Blanc»?", a: "Pouilly-Fumé", x: ["Sancerre", "Muscadet", "Chablis"] }],
  },
  us2_mondavi_private: {
    fact: "Marchio californiano di vino quotidiano che porta il nome di Robert Mondavi. Con uve di diverse zone produce vini a prezzi accessibili.",
    quiz: [{ q: "Dove fondò Robert Mondavi nel 1966 la prima grande cantina della Napa dopo il Proibizionismo?", a: "A Oakville", x: ["A Calistoga", "A Yountville", "A Carneros"] }],
  },
  us2_trefethen_chard: {
    fact: "Cantina di famiglia fondata nel 1968 da Gene e Katie Trefethen a Oak Knoll, nel sud della Napa. Usa un edificio in legno costruito nell’Ottocento.",
    quiz: [{ q: "Quale riconoscimento ottenne lo Chardonnay Trefethen 1976 alle «Olimpiadi del vino» di Parigi del 1979?", a: "Miglior Chardonnay del mondo", x: ["Il bianco più longevo", "Miglior cantina esordiente", "Miglior vino da dessert"] }],
  },
  us2_freemark_abbey: {
    fact: "Grande nome di St. Helena, erede della cantina fondata nel 1886 dalla pioniera Josephine Tychson. Al «Giudizio di Parigi» partecipò sia con il rosso sia con il bianco.",
    quiz: [{ q: "Come nacque il nome Freemark Abbey?", a: "Unendo un pezzo del nome di ciascuno dei tre soci che acquistarono la cantina", x: ["La cantina era un’antica abbazia", "Dal monastero del paese natale del fondatore", "È il nome del primo proprietario del vigneto"] }],
  },
  us2_charles_krug: {
    fact: "La cantina più antica della Napa Valley, fondata nel 1861 dal prussiano Charles Krug. Dopo il Proibizionismo è rinata con un nuovo proprietario.",
    quiz: [
      { q: "Quale famiglia acquistò Charles Krug nel 1943 e la guida ancora oggi?", a: "La famiglia Mondavi", x: ["La famiglia Gallo", "La famiglia Beringer", "La famiglia Martini"] },
      { q: "Chi lasciò Charles Krug dopo un litigio con il fratello Peter e fondò la propria cantina nel 1966?", a: "Robert Mondavi", x: ["Louis M. Martini", "Joe Heitz", "Warren Winiarski"] },
    ],
  },
  us2_louis_martini: {
    fact: "Fondata a St. Helena nel 1933, alla fine del Proibizionismo, dall’italiano Louis M. Martini. È famosa anche per il Cabernet del vigneto Monte Rosso, a Sonoma.",
    quiz: [{ q: "Quale grande azienda vinicola americana acquistò Louis M. Martini nel 2002?", a: "E&J Gallo", x: ["Constellation Brands", "Jackson Family Wines", "Treasury Wine Estates"] }],
  },
  us2_abreu_madrona: {
    fact: "Vino con il proprio nome di David Abreu, che ha curato i vigneti di molte cantine di culto della Napa. Madrona Ranch è un vigneto sulle colline a ovest di St. Helena.",
    quiz: [{ q: "Per quale attività si era fatto un nome David Abreu nella Napa?", a: "Gestione e coltivazione dei vigneti", x: ["Critica del vino", "Fabbricazione di botti", "Battitore d’aste di vino"] }],
  },
  us2_sterling: {
    fact: "Fondata a Calistoga nel 1964 dall’inglese Peter Newton. L’edificio bianco in cima alla collina ricorda l’isola greca di Mykonos, dove aveva vissuto.",
    quiz: [{ q: "Con che cosa salgono i visitatori di Sterling Vineyards fino alla cantina sulla collina?", a: "Una cabinovia (funivia)", x: ["Un treno a vapore", "Una mongolfiera", "Una carrozza trainata da cavalli"] }],
  },
  us2_clos_pegase: {
    fact: "Cantina fondata a Calistoga dai collezionisti d’arte Jan e Mitsuko Shrem. L’edificio è nato da un concorso di progettazione indetto con il Museo d’arte moderna di San Francisco.",
    quiz: [{ q: "Quale architetto postmoderno ha progettato l’edificio di Clos Pegase?", a: "Michael Graves", x: ["Frank Gehry", "Philip Johnson", "Renzo Piano"] }],
  },
  us2_castello_amorosa: {
    fact: "Cantina dentro un castello in stile toscano del XIII secolo che Dario Sattui ha costruito, dopo lunghi lavori, vicino a Calistoga. Ha fossato, ponte levatoio e perfino una camera delle torture.",
    quiz: [{ q: "Quale cantina della Napa gestiva già la famiglia di Dario Sattui, fondatore del Castello di Amorosa?", a: "V. Sattui", x: ["Beringer", "Charles Krug", "Sterling Vineyards"] }],
  },
  us2_schramsberg_jschram: {
    fact: "Lo spumante di punta che Schramsberg affina a lungo selezionando solo i vini base migliori. Il nome viene da Jacob Schram, che qui aprì la cantina nel 1862.",
    quiz: [{ q: "Quale scrittore visitò Schramsberg nel 1880 definendone il vino «poesia in bottiglia»?", a: "Robert Louis Stevenson", x: ["Mark Twain", "Jack London", "John Steinbeck"] }],
  },
  us2_chappellet: {
    fact: "La prima cantina di Pritchard Hill, fondata sulle sue pendici nel 1967 da Donn e Molly Chappellet. È famosa per un Cabernet di montagna, solido e strutturato.",
    quiz: [{ q: "Che forma ha l’edificio della cantina Chappellet?", a: "Una piramide", x: ["Una cupola", "Una botte gigante", "Un castello medievale"] }],
  },
  us2_darioush: {
    fact: "Cantina fondata nella Napa dall’imprenditore iraniano Darioush Khaledi. Colpisce l’edificio a colonne di pietra ispirato ai palazzi dell’antica Persia.",
    quiz: [{ q: "A quale sito antico si ispira l’edificio della cantina Darioush?", a: "Persepoli", x: ["Il Partenone", "Angkor Wat", "L’Alhambra"] }],
  },
  us2_cain_five: {
    fact: "Il vino simbolo di Cain Vineyard, che assembla vitigni bordolesi coltivati su terrazze d’alta quota dello Spring Mountain.",
    quiz: [{ q: "Che cosa indica il «Five» di Cain Five?", a: "Assembla cinque vitigni bordolesi", x: ["Cinque vigneti", "I cinque figli del fondatore", "Esce dopo cinque anni di affinamento"] }],
  },
  us2_spring_mountain: {
    fact: "Cantina sui pendii dello Spring Mountain che ospita l’antica villa «Miravalle». Il suo Chardonnay 1973 si classificò quarto tra i bianchi al «Giudizio di Parigi».",
    quiz: [{ q: "Di quale serie TV americana degli anni ’80 fu set la villa Miravalle di Spring Mountain Vineyard?", a: "Falcon Crest", x: ["Dallas", "Dynasty", "Twin Peaks"] }],
  },
  us2_newton_unfiltered: {
    fact: "Cantina fondata sullo Spring Mountain nel 1977 da Peter e Su Hua Newton. Si è fatta un nome con uno Chardonnay imbottigliato, come dice il nome, senza filtrazione.",
    quiz: [
      { q: "Quale cantina aveva fondato prima a Calistoga Peter Newton, fondatore di Newton Vineyard?", a: "Sterling Vineyards", x: ["Chateau Montelena", "Schramsberg", "Clos Pegase"] },
      { q: "Che cosa danneggiò gravemente la cantina di Newton Vineyard nel 2020?", a: "Un incendio boschivo (il Glass Fire)", x: ["Un terremoto", "Un’alluvione", "La fillossera"] },
    ],
  },
  us2_pride_merlot: {
    fact: "Cantina fondata dalla famiglia Pride su un antico vigneto in cima ai monti Mayacamas. Per ogni vino, l’etichetta indica la percentuale di uve provenienti dalle due contee.",
    quiz: [{ q: "Che cosa passa proprio in mezzo ai vigneti e alla cantina di Pride Mountain Vineyards?", a: "Il confine tra le contee di Napa e Sonoma", x: ["Una vecchia ferrovia", "La faglia di Sant’Andrea", "L’autostrada della costa del Pacifico"] }],
  },
  us2_mayacamas: {
    fact: "Cantina in pietra costruita a fine Ottocento in alto sul Mount Veeder. Il suo Cabernet vecchio stile, che dà il meglio dopo un lungo affinamento, partecipò con l’annata 1971 al «Giudizio di Parigi».",
    quiz: [{ q: "Quale coppia guidò Mayacamas per quasi 45 anni dal 1968?", a: "Bob ed Elinor Travers", x: ["Jack e Dolores Cakebread", "Dan e Margaret Duckhorn", "Gene e Katie Trefethen"] }],
  },
  us2_lokoya: {
    fact: "Fondata nel 1995, produce Cabernet di montagna vinificati separatamente da quattro zone della Napa: Mount Veeder, Howell Mountain, Spring Mountain e Diamond Mountain.",
    quiz: [{ q: "Da che cosa viene il nome Lokoya?", a: "Da una tribù nativa che viveva sul Mount Veeder", x: ["Dal nome di un missionario spagnolo", "Da un tipo di roccia vulcanica", "Dal nome della figlia del fondatore"] }],
  },
  us2_cardinale: {
    fact: "Assemblaggio di Cabernet di punta, vinificato nella cantina di Oakville con uve scelte tra monti e valli di tutta la Napa.",
    quiz: [{ q: "Chi fondò Jackson Family Wines, proprietaria di Cardinale?", a: "Jess Jackson", x: ["Robert Mondavi", "Ernest Gallo", "Chuck Wagner"] }],
  },
  us2_dunn_howell: {
    fact: "Piccola cantina avviata da Randy Dunn alla fine degli anni ’70 su Howell Mountain. È famosa per Cabernet di montagna solidi, capaci di reggere decenni.",
    quiz: [{ q: "Di quale cantina della Napa era vinificatore Randy Dunn prima di mettersi in proprio?", a: "Caymus", x: ["Silver Oak", "Beringer", "Robert Mondavi"] }],
  },
  us2_cade: {
    fact: "Cantina fondata nel 2005 sulla cresta di Howell Mountain. Da terreni vulcanici oltre i 400 metri produce Cabernet solidi.",
    quiz: [{ q: "Quale cantina di Oakville aveva fondato in precedenza il gruppo del vino che ha creato CADE?", a: "PlumpJack", x: ["Far Niente", "Screaming Eagle", "Harlan Estate"] }],
  },
  us2_conundrum: {
    fact: "Assemblaggio bianco presentato nel 1989 da Chuck Wagner di Caymus. Unisce diversi vitigni, tra cui Chardonnay, Sauvignon Blanc e Moscato.",
    quiz: [
      { q: "Che cosa significa il nome Conundrum?", a: "Enigma", x: ["Armonia", "Dorato", "Avventura"] },
      { q: "Quale cantina della Napa guida la famiglia che ha lanciato Conundrum?", a: "Caymus", x: ["Silver Oak", "Duckhorn", "Beringer"] },
    ],
  },
  us2_decoy_cab: {
    fact: "Marchio lanciato da Duckhorn Vineyards nel 1985 per un consumo più leggero. Oggi produce un Cabernet morbido con uve della contea di Sonoma.",
    quiz: [{ q: "Che cosa indica il nome Decoy?", a: "Il richiamo di legno a forma d’anatra che i cacciatori fanno galleggiare per attirare le anatre", x: ["Lo stagno dove si riposano le anatre", "Il corno che annuncia la caccia all’alba", "Il capanno del cacciatore"] }],
  },
  us2_mer_soleil: {
    fact: "Chardonnay che Charlie Wagner, della famiglia Wagner di Caymus, produce nelle Santa Lucia Highlands di Monterey, zona fresca battuta dalla brezza marina.",
    quiz: [{ q: "Che cosa significa in francese «Mer Soleil»?", a: "Mare e sole", x: ["Montagna e luna", "Vento e pioggia", "Collina d’oro"] }],
  },
  us2_belle_glos: {
    fact: "Pinot Nero creato da Joe Wagner, della famiglia Wagner di Caymus. Il suo marchio è lo spesso strato di ceralacca rossa che avvolge il collo della bottiglia.",
    quiz: [
      { q: "Da chi prende il nome Belle Glos?", a: "Da Lorna Belle Glos Wagner, nonna del fondatore", x: ["Dalla figlia del fondatore", "Dal primo proprietario del vigneto", "Da un paese francese d’origine"] },
      { q: "Che cosa ricorda la ceralacca rossa sul collo delle bottiglie di Belle Glos?", a: "Il rossetto rosso che la nonna metteva ogni giorno", x: ["Il colore dello stemma della cantina", "Il colore della buccia del Pinot Nero", "Il papavero californiano"] },
    ],
  },
  us2_orin_8years: {
    fact: "Assemblaggio a base di Zinfandel creato da Dave Phinney di Orin Swift. È famoso per l’etichetta fotografica di forte impatto.",
    quiz: [{ q: "A che cosa si riferisce il nome 8 Years in the Desert (otto anni nel deserto)?", a: "Agli otto anni in cui, dopo aver venduto The Prisoner, si era impegnato a non produrre Zinfandel", x: ["Affina otto anni in una grotta nel deserto", "Assembla otto vigneti del deserto", "A un viaggio di otto anni del fondatore nel deserto"] }],
  },
  us2_mumm_napa: {
    fact: "Cantina di spumanti fondata nella Napa Valley da una maison di champagne francese. Rifermenta in bottiglia come lo champagne.",
    quiz: [{ q: "Quale maison di champagne francese fondò Mumm Napa?", a: "G.H. Mumm", x: ["Moët & Chandon", "Taittinger", "Louis Roederer"] }],
  },
  us2_domaine_carneros: {
    fact: "Cantina di spumanti fondata sulle colline di Carneros nel 1987 da una maison di champagne francese. È famosa per l’elegante château in cima alla collina.",
    quiz: [
      { q: "Quale maison di champagne fondò Domaine Carneros?", a: "Taittinger", x: ["Moët & Chandon", "G.H. Mumm", "Louis Roederer"] },
      { q: "A quale château della Champagne si ispira l’edificio di Domaine Carneros?", a: "Château de la Marquetterie", x: ["Château de Chambord", "Château de Chenonceau", "Château de Versailles"] },
    ],
  },
  us2_goldeneye: {
    fact: "Cantina di Pinot Nero fondata nel 1996 dai coniugi Duckhorn nella Anderson Valley, contea di Mendocino. L’uva cresce in una valle fresca dove entra la nebbia marina.",
    quiz: [{ q: "Da che cosa viene il nome Goldeneye?", a: "Da una specie di anatra (il quattrocchi)", x: ["Da un film di James Bond", "Dagli acini maturi color oro", "Dal soprannome dei coniugi fondatori"] }],
  },
  us2_verite_lamuse: {
    fact: "Vini in stile bordolese da uve delle montagne di Sonoma. Sono tre: «La Muse» a base di Merlot, «La Joie» a base di Cabernet e «Le Désir» a base di Cabernet Franc.",
    quiz: [{ q: "Quale vinificatore di origine bordolese produce Vérité?", a: "Pierre Seillan", x: ["Michel Rolland", "Christian Moueix", "Bernard Portet"] }],
  },
  us2_kenwood_jacklondon: {
    fact: "Nasce dai vigneti terrazzati su lava nell’antico ranch dello scrittore Jack London. In etichetta c’è la testa di lupo che usava come ex libris.",
    quiz: [{ q: "Qual è l’opera più celebre dello scrittore che dà il nome al Kenwood Jack London Vineyard?", a: "Il richiamo della foresta", x: ["Furore", "Moby Dick", "Le avventure di Huckleberry Finn"] }],
  },
  us2_paul_hobbs_rrv: {
    fact: "Cantina fondata a Sonoma nel 1991 da Paul Hobbs, formatosi con Robert Mondavi e Opus One. È famoso anche come consulente di cantine in molti paesi.",
    quiz: [{ q: "Quale cantina ha cofondato Paul Hobbs a Mendoza, in Argentina?", a: "Viña Cobos", x: ["Catena Zapata", "Clos de los Siete", "Bodega Norton"] }],
  },
  us2_peter_michael_bellecote: {
    fact: "Cantina fondata sulle pendici della Knights Valley da Sir Peter Michael, imprenditore inglese dell’elettronica e dei media. Ogni vino ha un nome francese.",
    quiz: [{ q: "Che cosa significa in francese «Belle Côte»?", a: "Bel pendio", x: ["Bella signora", "Costa azzurra", "Piccolo castello"] }],
  },
  us2_marcassin: {
    fact: "Piccola cantina fondata sulla costa di Sonoma dalla consulente enologica Helen Turley e dal marito John Wetlaufer. È uno Chardonnay di culto venduto solo tramite lista postale.",
    quiz: [{ q: "Che cosa significa in francese «Marcassin»?", a: "Cinghialetto", x: ["Cerbiatto", "Leprotto", "Volpacchiotto"] }],
  },
  us2_ridge_lytton: {
    fact: "Assemblaggio a base di Zinfandel di Ridge, da un vigneto della Dry Creek Valley con viti ultracentenarie. Con Geyserville è uno dei due pilastri degli Zinfandel di Ridge.",
    quiz: [{ q: "Qual è la particolarità delle etichette di Ridge Vineyards?", a: "Elencano tutti gli ingredienti usati nella vinificazione", x: ["Riportano le coordinate GPS del vigneto", "L’enologo firma ogni bottiglia", "Indicano il meteo del giorno di vendemmia"] }],
  },
  us2_rochioli: {
    fact: "Pinot Nero della famiglia Rochioli, che coltiva da generazioni la Russian River Valley. I suoi vigneti sono considerati i gioielli del Pinot Nero della zona.",
    quiz: [{ q: "Quale cantina di culto della Russian River Valley costruì la sua prima fama con le uve della famiglia Rochioli?", a: "Williams Selyem", x: ["Kosta Browne", "Kistler", "La Crema"] }],
  },
  us2_littorai: {
    fact: "Cantina di Pinot Nero della costa fondata nel 1993 da Ted Lemon e dalla moglie. Il nome deriva dal latino e significa «le coste».",
    quiz: [{ q: "Di quale domaine di Meursault fu Ted Lemon, fondatore di Littorai, il primo americano responsabile della vinificazione?", a: "Domaine Guy Roulot", x: ["Domaine Leflaive", "Domaine des Comtes Lafon", "Domaine de la Romanée-Conti"] }],
  },
  us2_flowers: {
    fact: "Cantina di Pinot Nero e Chardonnay fondata da Walt e Joan Flowers su una cresta della Sonoma Coast affacciata sul Pacifico.",
    quiz: [{ q: "Quale famiglia si è associata a Flowers nel 2009, rilevandone la gestione?", a: "La famiglia Huneeus (Quintessa)", x: ["La famiglia Jackson", "La famiglia Gallo", "La famiglia Mondavi"] }],
  },
  us2_merry_edwards: {
    fact: "Cantina di Pinot Nero della Russian River Valley fondata nel 1997 da Merry Edwards, della prima generazione di enologhe californiane.",
    quiz: [{ q: "Quale maison di champagne ha acquistato Merry Edwards Winery nel 2019?", a: "Louis Roederer", x: ["Moët & Chandon", "Taittinger", "Bollinger"] }],
  },
  us2_sonoma_cutrer: {
    fact: "Popolare Chardonnay della Sonoma Coast, presentato per la prima volta nel 1981. È un classico delle carte dei vini dei ristoranti americani.",
    quiz: [{ q: "Per quale sport Sonoma-Cutrer si dotò di campi da gara, ospitando persino i campionati del mondo?", a: "Il croquet", x: ["Il polo", "Il golf", "Il tennis"] }],
  },
  us2_hanzell: {
    fact: "Fondata a Sonoma nel 1953 da James D. Zellerbach, ambasciatore degli Stati Uniti in Italia. Fu la prima in California a introdurre davvero l’affinamento in botti di rovere francese.",
    quiz: [{ q: "Come nacque il nome Hanzell?", a: "Unendo il nome della moglie Hana e il cognome Zellerbach", x: ["Da un antico toponimo ungherese", "Dal tedesco per «piccola collina»", "Dal nome del primo enologo"] }],
  },
  us2_buena_vista: {
    fact: "La prima cantina commerciale della California, fondata a Sonoma nel 1857. Nel 2011 l’ha acquistata e rilanciata il borgognone Jean-Charles Boisset.",
    quiz: [{ q: "Quale pioniere ungherese fondò Buena Vista e fu detto «il padre del vino californiano»?", a: "Agoston Haraszthy", x: ["Charles Krug", "Gustave Niebaum", "Georges de Latour"] }],
  },
  us2_csj_cinq: {
    fact: "Assemblaggio in stile bordolese di Sonoma: l’annata 1996 fu eletta «Wine of the Year» da Wine Spectator nel 1999, primo vino di Sonoma a riuscirci.",
    quiz: [{ q: "Che cosa significa in francese «Cinq Cépages»?", a: "Cinque vitigni", x: ["Cinque vigneti", "Quinta vendemmia", "Cinque fratelli"] }],
  },
  us2_rodney_strong: {
    fact: "Cantina di Rodney Strong, pioniere che iniziò l’attività nel vino nel 1959 e contribuì a fare della contea di Sonoma una grande zona vinicola.",
    quiz: [{ q: "Quale mestiere faceva Rodney Strong prima di produrre vino?", a: "Ballerino a Broadway", x: ["Pugile", "Pianista jazz", "Annunciatore radiofonico"] }],
  },
  us2_ferrari_carano_fume: {
    fact: "Cantina fondata nel 1981 da Don e Rhonda Carano nella Dry Creek Valley. Sono famosi la villa all’italiana «Villa Fiore» e i suoi giardini.",
    quiz: [{ q: "Quale attività gestiva a Reno, in Nevada, Don Carano, fondatore di Ferrari-Carano?", a: "L’Eldorado Hotel Casino", x: ["Una stazione sciistica", "Una compagnia ferroviaria", "Una miniera d’argento"] }],
  },
  us2_dry_creek_fume: {
    fact: "La prima cantina fondata nella Dry Creek Valley dopo il Proibizionismo, da David Stare nel 1972. Fu la prima a Sonoma a usare il nome «Fumé Blanc».",
    quiz: [{ q: "Che cosa è raffigurato sull’etichetta di Dry Creek Vineyard?", a: "Una barca a vela", x: ["Un faro", "Un falco", "Un tralcio di vite"] }],
  },
  us2_seghesio_zin: {
    fact: "Grande nome dello Zinfandel di Sonoma, nato nel 1895 quando l’italiano Edoardo Seghesio piantò il primo vigneto di Zinfandel. Superò anche il Proibizionismo.",
    quiz: [{ q: "Quale azienda acquistò Seghesio Family Vineyards nel 2011?", a: "Crimson Wine Group", x: ["E&J Gallo", "Jackson Family Wines", "Treasury Wine Estates"] }],
  },
  us2_coppola_claret: {
    fact: "Ispirato a un Claret del 1906 ritrovato dal regista Coppola nelle cantine di una vecchia cantina della Napa da lui acquistata. La bottiglia è avvolta in una rete dorata.",
    quiz: [{ q: "I vini rossi di quale zona chiamavano in origine «Claret» gli inglesi?", a: "Bordeaux", x: ["Borgogna", "Rioja", "Toscana"] }],
  },
  us2_sofia_bdb: {
    fact: "Nasce dalla promessa di Coppola alla figlia Sofia di creare un giorno uno spumante con il suo nome. È uno spumante leggero e profumato.",
    quiz: [{ q: "Quale film ha diretto Sofia Coppola, che dà il nome a Sofia Blanc de Blancs?", a: "Lost in Translation – L’amore tradotto", x: ["Il padrino", "Apocalypse Now", "Dracula di Bram Stoker"] }],
  },
  us2_iron_horse: {
    fact: "Casa di spumanti di famiglia della Green Valley, nella Russian River Valley. Dal vertice Reagan-Gorbaciov del 1985 è stata usata regolarmente negli eventi della Casa Bianca.",
    quiz: [{ q: "Da che cosa viene il nome Iron Horse (cavallo di ferro)?", a: "Da una fermata della ferrovia che nell’Ottocento attraversava questa terra", x: ["Dal cavallo da corsa del fondatore", "Dal ferro di cavallo di una fucina", "Dal nome di una miniera vicina"] }],
  },
  us2_j_cuvee20: {
    fact: "Casa di spumanti fondata nel 1986 nella Russian River Valley dalla figlia del fondatore della cantina Jordan. Nel 2015 l’ha acquistata E&J Gallo.",
    quiz: [{ q: "Che cosa indica la «J» di J Vineyards?", a: "La fondatrice Judy Jordan", x: ["L’iniziale di «Jubilee» (giubileo)", "La forma a J del vigneto", "John, figlio del fondatore"] }],
  },
  us2_gloria_ferrer: {
    fact: "La prima cantina di spumanti di Carneros, aperta nel 1986 dalla famiglia Ferrer, grande nome del Cava spagnolo.",
    quiz: [
      { q: "Chi è la «Gloria» di Gloria Ferrer?", a: "La moglie di José Ferrer, della famiglia Ferrer", x: ["La figlia del fondatore", "Una santa spagnola", "Una cantante lirica"] },
      { q: "Quale casa spagnola di Cava appartiene alla famiglia Ferrer, fondatrice di Gloria Ferrer?", a: "Freixenet", x: ["Codorníu", "Juvé & Camps", "Recaredo"] },
    ],
  },
  us2_korbel_natural: {
    fact: "Casa di spumanti fondata nel 1882 nella Russian River Valley dai tre fratelli Korbel. È stata usata più volte per i brindisi alle cerimonie d’insediamento dei presidenti americani.",
    quiz: [{ q: "Da quale terra partirono i fratelli Korbel?", a: "Dalla Boemia (oggi Repubblica Ceca)", x: ["Dalla Toscana", "Dall’Alsazia", "Dalla Catalogna"] }],
  },
  us2_turley_oldvines: {
    fact: "Grande nome dello Zinfandel fondato da Larry Turley nel 1993. Ha cercato e salvato vecchi vigneti californiani ultracentenari.",
    quiz: [
      { q: "Quale cantina della Napa aveva cofondato Larry Turley prima di Turley Wine Cellars?", a: "Frog’s Leap", x: ["Ridge Vineyards", "Ravenswood", "Seghesio"] },
      { q: "Quale celebre consulente enologa è sorella di Larry Turley?", a: "Helen Turley", x: ["Heidi Barrett", "Merry Edwards", "Cathy Corison"] },
    ],
  },
  us2_ravenswood: {
    fact: "Cantina specializzata in Zinfandel fondata nel 1976 da Joel Peterson. È famosa per il logo con tre corvi disposti in cerchio.",
    quiz: [{ q: "Qual è il celebre motto di Ravenswood?", a: "No Wimpy Wines (niente vini mollaccioni)", x: ["In Vino Veritas", "Bottled Poetry", "Time’s Fun When You’re Having Flies"] }],
  },
  us2_menage_a_trois: {
    fact: "Assemblaggio rosso creato nel 1996 dalla cantina Folie à Deux della Napa. Dolce e morbido, ha guidato la moda dei red blend americani.",
    quiz: [
      { q: "A che cosa si riferisce il nome Ménage à Trois («in tre insieme»)?", a: "Ai tre vitigni assemblati", x: ["Ai tre fondatori", "A tre vigneti", "A tre fermentazioni"] },
      { q: "Qual è il marchio simbolo della famiglia Trinchero, che acquistò Ménage à Trois nel 2004?", a: "Sutter Home", x: ["Barefoot", "Woodbridge", "Kendall-Jackson"] },
    ],
  },
  us2_tablas_esprit: {
    fact: "Fondata nel 1989 a Paso Robles dalla famiglia francese Perrin e dall’importatore Robert Haas. Vi furono piantate barbatelle di vitigni del Rodano importate dalla Francia.",
    quiz: [{ q: "Quale grande nome di Châteauneuf-du-Pape della famiglia Perrin ha cofondato Tablas Creek?", a: "Château de Beaucastel", x: ["Château Rayas", "Domaine du Vieux Télégraphe", "Château La Nerthe"] }],
  },
  us2_saxum_jb: {
    fact: "Assemblaggio in stile Rodano che Justin Smith produce dal James Berry Vineyard, a ovest di Paso Robles. L’annata 2007 è stata «Wine of the Year» di Wine Spectator nel 2010.",
    quiz: [{ q: "Che cosa significa in latino «Saxum»?", a: "Roccia", x: ["Sole", "Uva", "Vento"] }],
  },
  us2_laventure: {
    fact: "Cantina fondata a Paso Robles nel 1998 da Stephan Asseo, che faceva vino a Bordeaux. Il nome in francese significa «l’avventura».",
    quiz: [{ q: "Perché Stephan Asseo lasciò Bordeaux per Paso Robles?", a: "Per assemblare Syrah e Cabernet senza i vincoli dei disciplinari", x: ["Un’alluvione aveva sommerso i suoi vigneti bordolesi", "Voleva produrre spumanti", "Doveva ereditare l’azienda di famiglia"] }],
  },
  us2_justin_isosceles: {
    fact: "L’assemblaggio bordolese simbolo di Justin, fondata a Paso Robles nel 1981 da Justin Baldwin. Nel 2010 l’ha acquistata The Wonderful Company, proprietaria di Fiji Water e POM Wonderful.",
    quiz: [{ q: "A che cosa si riferisce il nome Isosceles (triangolo isoscele)?", a: "A un assemblaggio di tre vitigni bordolesi", x: ["A tre vigneti in collina", "Ai tre fratelli fondatori", "A tre anni di affinamento"] }],
  },
  us2_daou_sol: {
    fact: "Il Cabernet simbolo della cantina fondata in cima a una montagna di Paso Robles dai fratelli libanesi Georges e Daniel Daou. Il nome onora il padre dei fratelli.",
    quiz: [{ q: "Quale azienda vinicola australiana ha acquistato DAOU Vineyards nel 2023?", a: "Treasury Wine Estates", x: ["Constellation Brands", "E&J Gallo", "LVMH"] }],
  },
  us2_qupe_syrah: {
    fact: "Pioniere dei vitigni del Rodano sulla Central Coast, fondato nel 1982 da Bob Lindquist. Condivideva la stessa cantina con Au Bon Climat.",
    quiz: [{ q: "Che cosa significa «Qupé» nella lingua dei nativi Chumash?", a: "Papavero californiano", x: ["Foca", "Quercia", "Aquila"] }],
  },
  us2_bonny_doon_cigare: {
    fact: "Assemblaggio in stile Châteauneuf-du-Pape di Randall Grahm, detto il «Rhône Ranger». In etichetta c’è un oggetto volante a forma di sigaro sopra un vigneto.",
    quiz: [{ q: "Che cosa vietava l’ordinanza di Châteauneuf-du-Pape del 1954, presa in giro da Le Cigare Volant?", a: "L’atterraggio dei dischi volanti (UFO) nei vigneti", x: ["La vendemmia notturna", "La vendemmia meccanica", "I tappi di plastica"] }],
  },
  us2_foxen_pinot: {
    fact: "Cantina fondata nel 1985 da Dick Doré e Bill Wathen su un terreno della famiglia Doré, nella Santa Maria Valley. Il suo marchio è un’ancora disegnata storta.",
    quiz: [{ q: "Da chi viene l’ancora dell’etichetta di Foxen?", a: "Da William Benjamin Foxen, antenato ed ex capitano inglese che usava un’ancora per marchiare il bestiame", x: ["Dal missionario spagnolo Junípero Serra", "Dall’ammiraglio Chester Nimitz", "Dal padre del primo enologo"] }],
  },
  us2_hitching_post: {
    fact: "Pinot Nero di Santa Barbara prodotto da Frank Ostini, proprietario della steakhouse «Hitching Post» di Buellton, insieme all’amico Gray Hartley.",
    quiz: [{ q: "In quale film del 2004 compaiono il ristorante e il vino Hitching Post, diventando famosi?", a: "Sideways", x: ["Bottle Shock", "Un’ottima annata", "Mondovino"] }],
  },
  us2_sanford_pinot: {
    fact: "La cantina delle Sta. Rita Hills dove Miles e Jack, protagonisti del film «Sideways», si fermano per la prima degustazione.",
    quiz: [{ q: "Che cosa fece Richard Sanford nel 1971 con Michael Benedict nelle Sta. Rita Hills?", a: "Piantò per primo il Pinot Nero nella zona", x: ["Aprì la prima cantina di spumanti", "Organizzò la prima asta di vini", "Ottenne la prima certificazione biologica"] }],
  },
  us2_fess_parker: {
    fact: "Cantina di famiglia fondata nella Santa Ynez Valley dall’attore Fess Parker. È famosa per il Pinot Nero e i vitigni del Rodano di Santa Barbara.",
    quiz: [{ q: "Quale eroe della frontiera americana interpretò Fess Parker in una serie Disney degli anni ’50?", a: "Davy Crockett", x: ["Buffalo Bill", "Wyatt Earp", "Il Cavaliere Solitario"] }],
  },
  us2_chalone_chard: {
    fact: "Cantina su un altopiano calcareo vicino ai Pinnacles. Come in Borgogna, coltiva Chardonnay e Pinot Nero su suoli calcarei.",
    quiz: [{ q: "In che posizione si classificò lo Chardonnay Chalone 1974 tra i bianchi del «Giudizio di Parigi» del 1976?", a: "Terzo", x: ["Primo", "Sesto", "Decimo"] }],
  },
  us2_wente_morningfog: {
    fact: "Chardonnay della cantina familiare più longeva d’America, fondata nel 1883 nella Livermore Valley dal tedesco Carl Wente.",
    quiz: [{ q: "Come si chiama il clone di Chardonnay da cui discende la maggior parte dei vigneti di Chardonnay della California?", a: "Clone Wente", x: ["Clone Mondavi", "Clone Chablis", "Clone Napa"] }],
  },
  us2_concannon_ps: {
    fact: "Fondata nel 1883 nella Livermore Valley dall’irlandese James Concannon. Durante il Proibizionismo sopravvisse producendo vino da messa.",
    quiz: [{ q: "Che cosa fece per primo negli Stati Uniti Concannon negli anni ’60?", a: "Lanciò il Petite Sirah come vino con il nome del vitigno", x: ["Usò il tappo a vite su un grande vino", "Produsse uno spumante rosé", "Vendette vino in lattina"] }],
  },
  us2_7deadlyzins: {
    fact: "Vino di successo lanciato con vecchie viti di Zinfandel dai fratelli Michael e David, della famiglia Phillips, agricoltori da generazioni a Lodi.",
    quiz: [{ q: "A che cosa allude il nome 7 Deadly Zins?", a: "Ai sette peccati capitali del cristianesimo (Seven Deadly Sins)", x: ["Alle sette meraviglie del mondo", "A sette vigneti", "A sette anni di affinamento"] }],
  },
  us2_adelsheim: {
    fact: "Una delle prime cantine dell’Oregon, nata nel 1971 quando David Adelsheim e la moglie acquistarono un terreno sulle colline a nord della Willamette Valley.",
    quiz: [{ q: "Chi dipinse i ritratti femminili che hanno a lungo decorato le etichette di Adelsheim?", a: "La cofondatrice Ginny Adelsheim", x: ["Andy Warhol", "Norman Rockwell", "Georgia O’Keeffe"] }],
  },
  us2_argyle_brut: {
    fact: "Pioniere degli spumanti dell’Oregon, fondato a Dundee nel 1987 da un enologo australiano e dall’enologo americano Rollin Soles.",
    quiz: [{ q: "Quale enologo australiano fondò Argyle insieme a Rollin Soles?", a: "Brian Croser", x: ["Peter Lehmann", "Wolf Blass", "John Duval"] }],
  },
  us2_sokol_blosser: {
    fact: "Cantina pioniera dell’Oregon che piantò le viti a Dundee Hills nel 1971. Ha puntato presto sull’agricoltura e l’architettura sostenibili.",
    quiz: [{ q: "Come nacque il nome Sokol Blosser?", a: "Unendo i cognomi dei coniugi fondatori, Susan Sokol e Bill Blosser", x: ["Unendo i nomi di due paesi", "Dal polacco, «collina del sole»", "È il nome del primo proprietario del vigneto"] }],
  },
  us2_wvv_estate: {
    fact: "Cantina della Willamette Valley fondata da Jim Bernau nel 1983. Ha fatto molto per far conoscere al grande pubblico il Pinot Nero dell’Oregon.",
    quiz: [{ q: "Qual è la particolare struttura proprietaria di Willamette Valley Vineyards?", a: "È una società quotata al Nasdaq, divisa tra moltissimi piccoli azionisti", x: ["È di proprietà di una comunità monastica", "È di proprietà di un’università statale", "È di proprietà di una tribù nativa"] }],
  },
  us2_ponzi_tavola: {
    fact: "Cantina pioniera della Willamette Valley fondata nel 1970 da Dick e Nancy Ponzi. La figlia Luisa ne ha curato a lungo la vinificazione.",
    quiz: [{ q: "Quale maison di champagne ha acquistato Ponzi Vineyards nel 2021?", a: "Bollinger", x: ["Moët & Chandon", "Louis Roederer", "Taittinger"] }],
  },
  us2_resonance: {
    fact: "La prima cantina fondata fuori dalla Francia da una grande casa di Borgogna. Nasce dall’acquisto, nel 2013, del vigneto Résonance a Yamhill-Carlton.",
    quiz: [{ q: "Quale négociant di Borgogna ha fondato Résonance?", a: "Louis Jadot", x: ["Joseph Drouhin", "Bouchard Père & Fils", "Albert Bichot"] }],
  },
  us2_nicolas_jay: {
    fact: "Cantina fondata in Oregon nel 2014 dal vinificatore borgognone Jean-Nicolas Méo, di Vosne-Romanée, e dal discografico Jay Boberg.",
    quiz: [{ q: "Quale domaine di Borgogna guida Jean-Nicolas Méo, cofondatore di Nicolas-Jay?", a: "Domaine Méo-Camuzet", x: ["Domaine Leroy", "Domaine Dujac", "Domaine Georges Roumier"] }],
  },
  us2_columbia_crest_ge: {
    fact: "Grande cantina dello stato di Washington, dello stesso gruppo di Chateau Ste. Michelle. Si trova nelle Horse Heaven Hills, affacciate sul fiume Columbia.",
    quiz: [{ q: "Quale vino di Columbia Crest fu eletto «Wine of the Year» da Wine Spectator nel 2009?", a: "Il Reserve Cabernet Sauvignon 2005", x: ["Il Grand Estates Merlot", "L’H3 Cabernet Sauvignon", "Il Two Vines Red Blend"] }],
  },
  us2_14hands_cab: {
    fact: "Marchio di Washington lanciato nel 2005 dal gruppo Chateau Ste. Michelle. Nato per i ristoranti, è diventato un grande marchio grazie al successo.",
    quiz: [{ q: "A che cosa si riferisce il nome 14 Hands?", a: "All’altezza dei piccoli cavalli selvaggi che correvano per le Horse Heaven Hills", x: ["Ai 14 fondatori", "A 14 vigneti", "Ai 14 vendemmiatori"] }],
  },
  us2_kung_fu_girl: {
    fact: "Riesling creato da Charles Smith, l’anticonformista del vino di Washington. Nel 2016 i suoi marchi sono stati venduti a Constellation Brands.",
    quiz: [{ q: "Che cosa faceva in Europa Charles Smith prima di produrre vino?", a: "Il manager di band rock", x: ["Lo skateboarder professionista", "Lo stuntman cinematografico", "Lo chef di ristorante"] }],
  },
  us2_andrew_will_sorella: {
    fact: "Assemblaggio bordolese della cantina fondata nel 1989 da Chris Camarda. «Sorella» in italiano ricorda la sorella scomparsa.",
    quiz: [{ q: "Da chi viene il nome della cantina Andrew Will?", a: "Dal nipote del fondatore, Andrew, e dal figlio, Will", x: ["Dai due fratelli del fondatore", "Dai due proprietari del primo vigneto", "Da un poeta inglese"] }],
  },
  us2_woodward_canyon: {
    fact: "La seconda cantina della Walla Walla Valley, fondata nel 1981 da Rick Small. Ha costruito presto la fama del Cabernet di Washington.",
    quiz: [{ q: "Qual è la particolarità dell’etichetta della Woodward Canyon Artist Series?", a: "Ogni anno riporta l’opera di un pittore diverso", x: ["Riporta una foto della famiglia del fondatore", "Riporta una foto aerea del vigneto", "Riporta il grafico meteo dell’annata"] }],
  },
  us2_lecole41_semillon: {
    fact: "La terza cantina della Walla Walla Valley, aperta nel 1983 in una vecchia scuola del 1915 a Frenchtown. «L’Ecole» in francese significa «la scuola».",
    quiz: [{ q: "Che cosa indica il «41» di L’Ecole No 41?", a: "Il numero del distretto scolastico a cui apparteneva la scuola", x: ["Il 41° compleanno del fondatore", "La strada statale 41", "41 vigneti"] }],
  },
  us2_long_shadows_sequel: {
    fact: "Il Syrah di Long Shadows, progetto con cui Allen Shoup, già alla guida di Chateau Ste. Michelle, ha affidato un vino ciascuno a vinificatori di fama mondiale.",
    quiz: [{ q: "Di quale grande casa australiana fu capo enologo John Duval, che produce Sequel?", a: "Penfolds", x: ["Henschke", "Torbreck", "Two Hands"] }],
  },
  us2_long_shadows_pedestal: {
    fact: "Rosso di Washington a base di Merlot che Long Shadows affida a un consulente star di Bordeaux.",
    quiz: [{ q: "Quale celebre consulente enologo bordolese produce il Pedestal Merlot?", a: "Michel Rolland", x: ["Pierre Seillan", "Stéphane Derenoncourt", "Éric Boissenot"] }],
  },
  us2_long_shadows_feather: {
    fact: "Cabernet di Washington che Long Shadows affida a un maestro del Cabernet di montagna della Napa.",
    quiz: [{ q: "Quale vinificatore di Howell Mountain, nella Napa, produce il Feather Cabernet?", a: "Randy Dunn", x: ["Heidi Barrett", "Paul Hobbs", "Philippe Melka"] }],
  },
  us2_long_shadows_poetsleap: {
    fact: "Riesling di Washington che Long Shadows affida a un vinificatore di una grande casa della Nahe, in Germania.",
    quiz: [{ q: "Quale vinificatore tedesco della Nahe produce il Poet’s Leap Riesling?", a: "Armin Diel", x: ["Ernst Loosen", "Egon Müller", "Helmut Dönnhoff"] }],
  },
  us2_doubleback: {
    fact: "Cantina fondata nella natia Walla Walla da una star dello sport dopo il ritiro, Drew Bledsoe. Chris Figgins di Leonetti ne ha guidato le prime vinificazioni.",
    quiz: [
      { q: "Qual era la professione di Drew Bledsoe, fondatore di Doubleback?", a: "Quarterback della NFL", x: ["Cestista della NBA", "Lanciatore della Major League", "Golfista professionista"] },
      { q: "Quale significato ha il nome Doubleback?", a: "Il ritorno a casa", x: ["Due affinamenti", "L’assemblaggio di due vigneti", "Uno schema del football americano"] },
    ],
  },
  us2_wiemer_dry_riesling: {
    fact: "Grande nome del Riesling dei Finger Lakes, fondato nel 1979 sulle rive del lago Seneca da Hermann J. Wiemer, originario di Bernkastel, sulla Mosella.",
    quiz: [{ q: "Quale attività ha gestito Hermann J. Wiemer accanto alla cantina?", a: "Un vivaio di barbatelle innestate di vitigni europei", x: ["Un caseificio", "Una sidreria", "Una bottaia"] }],
  },
  us2_drfrank_rkatsiteli: {
    fact: "Bianco prodotto dal dottor Konstantin Frank con un vitigno resistente al freddo dell’ex area sovietica, portato nei Finger Lakes.",
    quiz: [{ q: "Qual è il paese d’origine del Rkatsiteli piantato dal dottor Frank nei Finger Lakes?", a: "Georgia", x: ["Armenia", "Grecia", "Bulgaria"] }],
  },
  us2_wolffer_rose: {
    fact: "Rosé della cantina fondata nel 1988 negli Hamptons, a Long Island, dall’amburghese Christian Wölffer. È quasi un simbolo delle vacanze estive dei newyorkesi.",
    quiz: [{ q: "Quale nuovo rosé ha lanciato Wölffer Estate sull’onda del successo del rosé?", a: "Summer in a Bottle", x: ["Whispering Angel", "Miraval", "Hampton Water"] }],
  },
  us2_bedell_merlot: {
    fact: "Cantina della North Fork di Long Island. Il suo Merlot 2009 fu servito al pranzo per l’insediamento presidenziale del 2013, primo vino di New York a comparire a un insediamento.",
    quiz: [{ q: "Qual è il film più celebre di New Line Cinema, la casa guidata da Michael Lynne, che acquistò Bedell Cellars nel 2000?", a: "Il Signore degli Anelli", x: ["Harry Potter", "Guerre stellari", "Il padrino"] }],
  },
  us2_barboursville_octagon: {
    fact: "Cantina della Virginia fondata nel 1976 dalla famiglia italiana Zonin. Nella tenuta restano le rovine della villa di un governatore, progettata da Thomas Jefferson.",
    quiz: [{ q: "Da dove viene il nome Octagon (ottagono)?", a: "Dalla stanza ottagonale della villa progettata da Jefferson", x: ["Da una botte ottagonale", "Da un assemblaggio di otto vitigni", "Da un vigneto di otto parcelle"] }],
  },
  us2_rdv_lostmountain: {
    fact: "Fondata dall’ex marine Rutger de Vink su una collina granitica ai piedi delle Blue Ridge, in Virginia, con la prima annata nel 2008. Di recente è stata venduta alla famiglia proprietaria di Château Montrose.",
    quiz: [{ q: "Che cos’è il nome RdV?", a: "Le iniziali del fondatore e l’abbreviazione di «rendez-vous»", x: ["Una sigla francese per «rosso della Virginia»", "Le coordinate del vigneto", "Il nome di un fiume vicino"] }],
  },
  us2_early_mountain_pm: {
    fact: "Cantina fondata nel 2012 ai piedi delle Blue Ridge, in Virginia, da una coppia di imprenditori di internet. Punta molto sul Petit Manseng, il bianco di bandiera della Virginia.",
    quiz: [{ q: "Quale società internet ha cofondato Steve Case, fondatore di Early Mountain?", a: "AOL", x: ["Yahoo", "Netscape", "eBay"] }],
  },
  us2_gruet_brut: {
    fact: "Casa di spumanti fondata da una famiglia francese della Champagne, che nel 1984 acquistò terreni sugli altopiani del New Mexico. Segue lo stesso metodo dello champagne.",
    quiz: [{ q: "In quale zona francese produceva vino in origine la famiglia Gruet?", a: "Champagne", x: ["Alsazia", "Borgogna", "Loira"] }],
  },
  us2_missionhill_reserve_chard: {
    fact: "Cantina su una collina affacciata sul lago Okanagan. È famosa per l’edificio che ricorda un monastero e l’alto campanile.",
    quiz: [{ q: "Quale premio vinse lo Chardonnay Mission Hill 1992 all’International Wine & Spirit Competition (IWSC) di Londra del 1994?", a: "Il trofeo per il miglior Chardonnay del mondo", x: ["Il premio per il miglior icewine", "Il premio per il miglior spumante", "Il premio per il miglior assemblaggio rosso"] }],
  },
  us2_burrowing_owl_merlot: {
    fact: "Cantina fondata da Jim Wyse nella zona desertica a sud dell’Okanagan. Prende il nome dalla civetta delle tane, in via di scomparsa nella zona.",
    quiz: [{ q: "Che cosa fa Burrowing Owl con il costo delle degustazioni?", a: "Lo dona a un’associazione per la protezione della civetta delle tane", x: ["Lo usa per borse di studio dei lavoratori della vigna", "Lo usa per comprare botti", "Lo dona ai vigili del fuoco locali"] }],
  },
  us2_quails_gate_foch: {
    fact: "Cantina della famiglia Stewart, che coltiva la terra a West Kelowna dal 1908. Con vecchie viti piantate negli anni ’60 produce un rosso intenso.",
    quiz: [{ q: "In onore di chi fu chiamato il vitigno «Maréchal Foch»?", a: "Ferdinand Foch, comandante supremo alleato nella Prima guerra mondiale", x: ["Napoleone Bonaparte", "Il marchese di La Fayette", "Charles de Gaulle"] }],
  },
  us2_osoyoos_larose: {
    fact: "Cantina in stile bordolese fondata nel 1998 sul lago Osoyoos dal gruppo bordolese Taillan e dalla canadese Vincor. Oggi appartiene al solo gruppo Taillan.",
    quiz: [{ q: "Da quale château bordolese del gruppo Taillan viene il «Larose» di Osoyoos Larose?", a: "Château Gruaud Larose", x: ["Château Latour", "Château Lagrange", "Château Lafon-Rochet"] }],
  },
  us2_nkmip_syrah: {
    fact: "Cantina di Osoyoos, nella zona desertica del Canada. Nk’Mip in lingua nativa significa «terra bassa».",
    quiz: [{ q: "Quale primato detiene Nk’Mip Cellars?", a: "È la prima cantina del Nord America di proprietà di una comunità nativa", x: ["Il primo icewine del Canada", "La prima certificazione biologica del Canada", "La prima casa di spumanti del Nord America"] }],
  },
  us2_summerhill_cipes: {
    fact: "Lo spumante simbolo della cantina biologica fondata a Kelowna nel 1986 dalla famiglia Cipes. A base di Riesling, rifermenta in bottiglia.",
    quiz: [{ q: "Che cosa fa Summerhill Pyramid Winery nella piramide costruita a imitazione della Grande Piramide di Giza?", a: "Vi fa affinare il vino", x: ["Vi organizza le degustazioni", "Vi fa appassire l’uva", "Vi costruisce le botti"] }],
  },
  us2_clos_jordanne: {
    fact: "Cantina del Niagara nata dalla collaborazione tra il borgognone Boisset e la canadese Vincor. L’annata 2005 vinse il «Giudizio di Montréal» del 2009, battendo grandi vini di Borgogna e California.",
    quiz: [{ q: "Quale architetto progettò la cantina di Le Clos Jordanne, rimasta poi mai costruita?", a: "Frank Gehry", x: ["Renzo Piano", "Tadao Ando", "Zaha Hadid"] }],
  },
  us2_peller_ice_cuvee: {
    fact: "Spumante del Niagara prodotto con il metodo champenoise. Nell’ultima fase si aggiunge un ingrediente tipicamente canadese che gli dà una dolcezza delicata.",
    quiz: [{ q: "Che cosa si aggiunge al dosaggio finale della Ice Cuvée?", a: "Icewine di Vidal", x: ["Sciroppo d’acero", "Miele", "Brandy di mele"] }],
  },
  us2_gretzky_cab_merlot: {
    fact: "Assemblaggio rosso della cantina e distilleria di whisky fondata a Niagara-on-the-Lake dalla leggenda dell’hockey su ghiaccio Wayne Gretzky.",
    quiz: [{ q: "Quale numero di maglia, che portava da giocatore, compare spesso sui vini Wayne Gretzky?", a: "99", x: ["66", "87", "9"] }],
  },
};

export default T;
