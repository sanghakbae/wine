import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  lafite: {
    fact: "Nella classificazione del Médoc del 1855 fu il primo nome in elenco tra i Premiers Crus. In etichetta c’è un’incisione del castello con la sua torretta.",
    quiz: [
      { q: "Quale famiglia acquistò Château Lafite Rothschild nel 1868?", a: "La famiglia Rothschild", x: ["La famiglia d’Orléans", "La casa reale dei Borbone", "La famiglia Medici"] },
      { q: "Come si chiama il secondo vino di Lafite Rothschild?", a: "Carruades de Lafite", x: ["Les Forts de Latour", "Pavillon Rouge du Château Margaux", "Le Petit Mouton"] },
    ],
  },
  margaux: {
    fact: "Château neoclassico soprannominato «la Versailles del Médoc». Il suo marchio di fabbrica è l’etichetta con l’incisione del portico a colonne.",
    quiz: [
      { q: "Qual è il secondo vino di Château Margaux?", a: "Pavillon Rouge du Château Margaux", x: ["Carruades de Lafite", "Les Forts de Latour", "Le Clarence de Haut-Brion"] },
      { q: "Come si chiama il vino bianco prodotto da Château Margaux?", a: "Pavillon Blanc", x: ["Aile d’Argent", "Blanc de Lynch-Bages", "Musigny Blanc"] },
    ],
  },
  latour: {
    fact: "La torre sormontata da un leone in etichetta ricorda una fortezza della Guerra dei cent’anni. Dal 2012 ha abbandonato la vendita en primeur (sui futures) e mette in commercio i vini solo dopo averli affinati.",
    quiz: [
      { q: "Quale modalità di vendita ha abbandonato Château Latour dal 2012?", a: "L’en primeur (vendita sui futures)", x: ["La vendita all’asta", "L’esportazione all’estero", "La vendita in magnum"] },
      { q: "Qual è il secondo vino di Latour?", a: "Les Forts de Latour", x: ["Carruades de Lafite", "Le Petit Mouton", "Clos du Marquis"] },
    ],
  },
  mouton: {
    fact: "Dal 1945 ogni anno un artista come Chagall, Picasso o Warhol dipinge la parte alta dell’etichetta. È l’unico château promosso da secondo a primo cru, nel 1973.",
    quiz: [
      { q: "In che anno Mouton Rothschild fu promosso da secondo a primo cru?", a: "1973", x: ["1855", "1945", "1982"] },
      { q: "Quale simbolo compare sull’etichetta di Mouton Rothschild del 1945?", a: "La V della vittoria", x: ["La colomba della pace", "La Torre Eiffel", "Un montone con la corona d’alloro"] },
    ],
  },
  hautbrion: {
    fact: "Nella classificazione del 1855 fu l’unico primo cru a non venire dal Médoc ma dalle Graves. Nel XVII secolo fu anche il primo vino venduto a Londra con il proprio nome.",
    quiz: [
      { q: "Quale classe ottenne Château Haut-Brion nella classificazione del 1855?", a: "Primo cru", x: ["Secondo cru", "Terzo cru", "Quinto cru"] },
      { q: "Quale banchiere americano acquistò Château Haut-Brion nel 1935?", a: "Clarence Dillon", x: ["J.P. Morgan", "John D. Rockefeller", "Andrew Mellon"] },
    ],
  },
  petrus: {
    fact: "Leggenda di Pomerol prodotta con Merlot quasi al 100%. La figura in etichetta è San Pietro (Petrus) con le chiavi del Paradiso.",
    quiz: [
      { q: "Chi è raffigurato sull’etichetta di Pétrus?", a: "San Pietro con le chiavi", x: ["San Paolo", "Bacco", "Napoleone"] },
      { q: "Per quale terreno è famoso il vigneto di Pétrus?", a: "L’argilla blu", x: ["La ghiaia calcarea", "Il granito", "La cenere vulcanica"] },
    ],
  },
  yquem: {
    fact: "Il vertice dei vini dolci di Sauternes, da uve colpite da muffa nobile (Botrytis). Nella classificazione del 1855 fu l’unico a ricevere il rango di «Premier Cru Supérieur». Indizio: il colore dorato nella bottiglia trasparente.",
    quiz: [
      { q: "Quale rango unico ottenne Château d’Yquem nella classificazione del 1855?", a: "Premier Cru Supérieur", x: ["Premier Grand Cru Classé A", "Grand Cru", "Cru Bourgeois"] },
      { q: "Quale muffa fa appassire gli acini di Yquem concentrandone gli zuccheri?", a: "Botrytis cinerea (muffa nobile)", x: ["Penicillium", "Lievito flor", "Oidio"] },
    ],
  },
  chevalblanc: {
    fact: "Gigante di Saint-Émilion con un’alta percentuale di Cabernet Franc. È famoso per l’annata 1961 che il protagonista del film «Sideways» custodisce gelosamente.",
    quiz: [{ q: "Quale annata di Cheval Blanc custodisce gelosamente il protagonista del film «Sideways»?", a: "1961", x: ["1982", "1947", "2000"] }],
  },
  drc: {
    fact: "Da un unico vigneto di circa 1,8 ettari escono solo 6.000 bottiglie circa all’anno. Ogni etichetta riporta il numero di serie della bottiglia.",
    quiz: [
      { q: "Quanto è esteso all’incirca il vigneto della Romanée-Conti?", a: "Circa 1,8 ettari", x: ["Circa 18 ettari", "Circa 50 ettari", "Circa 0,2 ettari"] },
      { q: "Da chi deriva il «Conti» di Romanée-Conti?", a: "Dal principe di Conti, che acquistò il vigneto nel 1760", x: ["Da un generale di Napoleone", "Da papa Conti III", "Da un monaco vinificatore di nome Conti"] },
    ],
  },
  jadot: {
    fact: "Négociant di Beaune famoso per lo stemma in etichetta con il volto di Bacco, dio del vino. Fondato nel 1859.",
    quiz: [
      { q: "Di chi è il volto nello stemma dell’etichetta Louis Jadot?", a: "Bacco (dio del vino)", x: ["Poseidone", "San Vincenzo", "Il fondatore Louis Jadot"] },
      { q: "In che anno fu fondata Louis Jadot?", a: "1859", x: ["1729", "1920", "1966"] },
    ],
  },
  duboeuf: {
    fact: "Vino novello lanciato in contemporanea in tutto il mondo il terzo giovedì di novembre. Il suo simbolo è l’etichetta a fiori che cambia ogni anno.",
    quiz: [
      { q: "In che giorno esce il Beaujolais Nouveau?", a: "Il terzo giovedì di novembre", x: ["Il primo venerdì di novembre", "Il 1° dicembre", "L’ultimo sabato di ottobre"] },
      { q: "Quale tecnica di fermentazione rende il Beaujolais Nouveau pronto da bere così presto?", a: "La macerazione carbonica", x: ["La solera", "L’appassimento", "La rifermentazione in bottiglia"] },
    ],
  },
  beaucastel: {
    fact: "Grande nome di Châteauneuf-du-Pape che usa tutti e 13 i vitigni ammessi. Le bottiglie della zona portano spesso in rilievo lo stemma con la tiara papale e le chiavi di San Pietro.",
    quiz: [
      { q: "Quanti sono i vitigni ammessi a Châteauneuf-du-Pape, tutti usati da Château de Beaucastel?", a: "13", x: ["3", "7", "21"] },
      { q: "Che cosa significa il nome «Châteauneuf-du-Pape»?", a: "Il castello nuovo del papa", x: ["La vigna del papa", "Il castello nuovo del re", "I nove castelli"] },
    ],
  },
  domperignon: {
    fact: "Champagne di prestigio prodotto solo nelle annate migliori. Si riconosce dall’etichetta a scudo e dalla bottiglia di foggia antica; il nome viene dal monaco seicentesco Pierre Pérignon.",
    quiz: [
      { q: "Chi era il Dom Pérignon che dà il nome allo champagne?", a: "Un monaco benedettino del XVII secolo", x: ["Un generale di Napoleone", "Il fondatore della famiglia Moët", "Il cuoco di Luigi XIV"] },
      { q: "In quali anni si produce Dom Pérignon?", a: "Solo nelle annate migliori", x: ["Ogni anno", "Ogni anno bisestile", "Una volta ogni dieci anni"] },
    ],
  },
  moet: {
    fact: "La maison di champagne più venduta al mondo. «Impérial» è un omaggio al legame con l’imperatore Napoleone.",
    quiz: [
      { q: "A quale personaggio è legato il nome «Impérial» di Moët & Chandon?", a: "Napoleone", x: ["Luigi XIV", "Maria Antonietta", "Charles de Gaulle"] },
      { q: "In che anno fu fondata Moët & Chandon?", a: "1743", x: ["1829", "1668", "1921"] },
    ],
  },
  veuve: {
    fact: "«Veuve» significa vedova. Rimasta vedova a 27 anni, Madame Clicquot guidò l’azienda e ideò il remuage, la rotazione delle bottiglie per raccogliere i sedimenti.",
    quiz: [
      { q: "Che cosa significa in francese «Veuve»?", a: "Vedova", x: ["Anziana signora", "Regina", "Figlia"] },
      { q: "Come si chiama la tecnica ideata da Madame Clicquot per raccogliere i sedimenti nel collo ruotando le bottiglie?", a: "Remuage", x: ["Dégorgement", "Solera", "Bâtonnage"] },
    ],
  },
  cristal: {
    fact: "Bottiglia trasparente creata per lo zar Alessandro II di Russia. Celebre l’aneddoto secondo cui fu eliminato l’incavo sul fondo (punt) perché non vi si potesse nascondere una bomba.",
    quiz: [
      { q: "Per chi fu creato in origine lo champagne Cristal?", a: "Lo zar Alessandro II di Russia", x: ["Napoleone III", "La regina Vittoria d’Inghilterra", "Luigi XVI"] },
      { q: "In che cosa si distingue la bottiglia di Cristal dalle altre bottiglie di champagne?", a: "È trasparente e senza incavo sul fondo", x: ["È rivestita di metallo", "Ha il collo rigonfio", "È quadrata"] },
    ],
  },
  armand: {
    fact: "La bottiglia dorata metallizzata con l’asso di picche in peltro le vale il soprannome «Ace of Spades». Nel 2021 LVMH ne ha acquisito metà delle quote.",
    quiz: [
      { q: "Qual è il soprannome di Armand de Brignac?", a: "Ace of Spades (asso di picche)", x: ["Golden Crown", "Black Queen", "Royal Heart"] },
      { q: "Quale gruppo acquistò metà di Armand de Brignac nel 2021?", a: "LVMH", x: ["Kering", "Pernod Ricard", "Diageo"] },
    ],
  },
  pj: {
    fact: "Sulla bottiglia sono smaltati direttamente gli anemoni bianchi disegnati nel 1902 dal maestro vetraio art nouveau Émile Gallé.",
    quiz: [
      { q: "Quale fiore è raffigurato sulla bottiglia di Belle Époque?", a: "L’anemone", x: ["La rosa", "Il giglio", "La lavanda"] },
      { q: "Quale artista art nouveau disegnò il decoro floreale di Belle Époque?", a: "Émile Gallé", x: ["Alfons Mucha", "René Lalique", "Gustav Klimt"] },
    ],
  },
  ruinart: {
    fact: "La più antica maison di champagne, fondata nel 1729. Imbottiglia Chardonnay al 100% in una bottiglia tonda e trasparente ispirata a quelle del XVIII secolo.",
    quiz: [
      { q: "In che anno fu fondata Ruinart?", a: "1729", x: ["1743", "1811", "1876"] },
      { q: "Che cos’erano in origine le crayères, le cave di gesso dove Ruinart affina lo champagne?", a: "Cave di pietra di epoca romana", x: ["Catacombe di un monastero medievale", "Rifugi antiaerei della Seconda guerra mondiale", "Vecchie miniere di carbone"] },
    ],
  },
  trimbach: {
    fact: "Grande casa alsaziana attiva dal 1626. Per legge i vini d’Alsazia vanno imbottigliati solo nella bottiglia lunga e sottile detta «flûte».",
    quiz: [
      { q: "In che anno la famiglia Trimbach iniziò a produrre vino?", a: "1626", x: ["1789", "1855", "1920"] },
      { q: "Qual è il leggendario Riesling da vigneto singolo di Trimbach?", a: "Clos Sainte Hune", x: ["Scharzhofberg", "Clos des Mouches", "Hill of Grace"] },
    ],
  },
  egonmuller: {
    fact: "Leggendario Riesling del vigneto Scharzhofberg, sulla Saar. Il suo Trockenbeerenauslese è considerato il vino bianco più caro del mondo.",
    quiz: [
      { q: "Qual è la categoria più costosa di Egon Müller Scharzhofberger?", a: "Trockenbeerenauslese (TBA)", x: ["Kabinett", "Spätlese", "Grosses Gewächs"] },
      { q: "Dove si vendono soprattutto i vini di punta di Egon Müller?", a: "All’asta VDP di Treviri", x: ["Con un’estrazione a sorte online", "All’en primeur di Bordeaux", "Per corrispondenza riservata ai soci"] },
    ],
  },
  drloosen: {
    fact: "Riesling della Mosella famoso per la grande scritta «Dr. L» in etichetta. Per tradizione i vini della Mosella andavano in bottiglie verdi, quelli del Reno in bottiglie marroni.",
    quiz: [
      { q: "Quale vinificatore guida la cantina Dr. Loosen?", a: "Ernst Loosen", x: ["Egon Müller", "Wilhelm Weil", "Helmut Dönnhoff"] },
      { q: "Quale Riesling produce Dr. Loosen insieme all’americana Chateau Ste. Michelle?", a: "Eroica", x: ["Opus One", "Almaviva", "Seña"] },
    ],
  },
  bluenun: {
    fact: "Nato negli anni ’20, negli anni ’80 era il marchio di vino più venduto al mondo. Il nome viene dalle suore vestite di blu in etichetta.",
    quiz: [{ q: "Da che cosa deriva il nome Blue Nun?", a: "Dalle suore vestite di blu in etichetta", x: ["Da un’uva blu", "Dall’acqua azzurra del Reno", "Dalla figlia del fondatore"] }],
  },
  juliusspital: {
    fact: "La bottiglia piatta e tondeggiante «Bocksbeutel» è riservata per legge ai vini della Franconia. Juliusspital è una cantina gestita da un ospedale di beneficenza fondato nel 1576.",
    quiz: [{ q: "Chi gestisce la cantina Juliusspital?", a: "La fondazione di un ospedale di beneficenza del 1576", x: ["La casa reale di Baviera", "L’Università di Würzburg", "Un monastero benedettino"] }],
  },
  sassicaia: {
    fact: "Il capostipite dei «Supertuscan». È stato il primo vino italiano con una denominazione tutta sua (DOC Bolgheri Sassicaia). La stella in etichetta è una rosa dei venti.",
    quiz: [
      { q: "Che cos’è la stella sull’etichetta di Sassicaia?", a: "Una rosa dei venti", x: ["La stella di David", "Lo stemma dei Medici", "La stella polare"] },
      { q: "Che cosa significa il nome «Sassicaia»?", a: "Terreno pieno di sassi", x: ["Brezza marina", "Collina del cacciatore", "Terra rossa"] },
    ],
  },
  gaja: {
    fact: "Famosa per l’etichetta bianca con le sole quattro lettere nere «GAJA». Angelo Gaja ha portato il Barbaresco ai vertici mondiali.",
    quiz: [
      { q: "Chi ha reso Gaja una cantina di fama mondiale?", a: "Angelo Gaja", x: ["Bruno Giacosa", "Piero Antinori", "Giacomo Conterno"] },
      { q: "In che anno è nata la cantina Gaja?", a: "1859", x: ["1920", "1961", "1783"] },
    ],
  },
  chianti: {
    fact: "Il «fiasco», con il fondo tondo rivestito di paglia, è il simbolo del Chianti. La paglia serviva a proteggere la bottiglia dagli urti durante il trasporto.",
    quiz: [
      { q: "A che cosa serviva in origine l’impagliatura del fiasco di Chianti?", a: "A evitare che si rompesse durante il trasporto", x: ["A mantenere fresco il vino", "A proteggerlo dalla luce", "A prevenire le contraffazioni"] },
      { q: "Quale animale è il simbolo del marchio del Chianti Classico?", a: "Il gallo nero", x: ["Il leone rosso", "La colomba bianca", "Il lupo d’oro"] },
    ],
  },
  masi: {
    fact: "Rosso intenso e potente ottenuto da uve lasciate appassire per oltre tre mesi (appassimento) per concentrarne gli zuccheri. Il nome «Amarone» richiama la sua nota amarognola.",
    quiz: [{ q: "Come si chiama il processo di essiccazione delle uve usato per l’Amarone?", a: "Appassimento", x: ["Solera", "Botrytis", "Macerazione carbonica"] }],
  },
  biondisanti: {
    fact: "La famiglia che ha creato il Brunello di Montalcino. A fine Ottocento selezionò il clone di Sangiovese ad acino grosso detto «Brunello» e lo fece invecchiare a lungo.",
    quiz: [{ q: "Con quale altro nome è noto il Sangiovese selezionato da Biondi-Santi per dare vita al Brunello?", a: "Sangiovese Grosso", x: ["Morellino", "Prugnolo Gentile", "Nebbiolo"] }],
  },
  riscal: {
    fact: "La rete metallica dorata che avvolge la bottiglia fu introdotta nell’Ottocento per impedire che venisse riempita con vino scadente e contraffatta.",
    quiz: [
      { q: "A che cosa serviva in origine la rete dorata attorno alla bottiglia di Marqués de Riscal?", a: "A prevenire le contraffazioni", x: ["A evitare rotture durante il trasporto", "A proteggere dalla luce", "Come confezione regalo"] },
      { q: "Quale architetto ha progettato l’hotel in titanio ondulato di Marqués de Riscal?", a: "Frank Gehry", x: ["Zaha Hadid", "Tadao Ando", "Rem Koolhaas"] },
    ],
  },
  vegasicilia: {
    fact: "Il più grande rosso di Spagna, messo in commercio solo dopo quasi dieci anni di affinamento. «Único» significa «unico, il solo».",
    quiz: [
      { q: "Che cosa significa in spagnolo «Único»?", a: "Unico, il solo", x: ["Primo", "Antico", "Del re"] },
      { q: "Quale vino di Vega Sicilia affina meno a lungo dell’Único?", a: "Valbuena 5°", x: ["Alión", "Pingus", "Pesquera"] },
    ],
  },
  tiopepe: {
    fact: "Il Fino per antonomasia: affina sotto il velo di lievito «flor» che si forma in superficie, da cui il colore chiaro e il gusto sapido.",
    quiz: [
      { q: "Come si chiama il velo di lievito che si forma sulla superficie dello sherry Fino e lo protegge dall’ossidazione?", a: "Flor", x: ["Botrytis", "Mousse", "Solera"] },
      { q: "Come si chiama il metodo che fa invecchiare lo sherry travasandolo e miscelandolo tra file di botti sovrapposte?", a: "Sistema solera", x: ["Appassimento", "Metodo champenoise", "Macerazione carbonica"] },
    ],
  },
  freixenet: {
    fact: "Cava, lo spumante spagnolo prodotto con rifermentazione in bottiglia come lo champagne. Il suo marchio di fabbrica è la bottiglia nera opaca.",
    quiz: [{ q: "Come si ottengono le bollicine del Cava?", a: "Rifermentazione in bottiglia (metodo tradizionale)", x: ["Aggiunta di anidride carbonica", "Fermentazione in autoclave (metodo Charmat)", "Aggiunta di brandy durante la fermentazione"] }],
  },
  mateus: {
    fact: "La bottiglia piatta a fiaschetta si ispira alle borracce dei soldati della Prima guerra mondiale. L’edificio in etichetta è il Palazzo di Mateus.",
    quiz: [
      { q: "A che cosa si ispira la forma della bottiglia di Mateus?", a: "Alla borraccia dei soldati della Prima guerra mondiale", x: ["A un otre di pelle", "A un’ampolla di acqua santa", "A una boccetta di profumo"] },
      { q: "Quale edificio è raffigurato sull’etichetta di Mateus?", a: "Il Palazzo di Mateus", x: ["La Torre di Belém", "La Cattedrale di Porto", "Il Palazzo da Pena"] },
    ],
  },
  taylors: {
    fact: "Il Porto è un vino fortificato: durante la fermentazione si aggiunge acquavite per conservarne la dolcezza. Taylor’s, fondata nel 1692, è una delle più antiche case di Porto.",
    quiz: [
      { q: "Che cosa si aggiunge durante la fermentazione del Porto?", a: "Acquavite di vino", x: ["Sciroppo di zucchero", "Miele", "Whisky"] },
      { q: "In che anno fu fondata Taylor’s (Taylor Fladgate)?", a: "1692", x: ["1815", "1756", "1888"] },
    ],
  },
  tokaji: {
    fact: "Vino dolce da uve botritizzate che Luigi XIV avrebbe definito «vino dei re, re dei vini». I puttonyos indicano la quantità di uve aszú aggiunte.",
    quiz: [
      { q: "Quale re avrebbe definito il Tokaji «vino dei re, re dei vini»?", a: "Luigi XIV", x: ["Napoleone", "Enrico VIII", "Pietro il Grande"] },
      { q: "Che cosa indicano i «puttonyos»?", a: "La quantità di uve botritizzate aggiunte (la dolcezza)", x: ["Gli anni di invecchiamento", "La gradazione alcolica", "La classe del vigneto"] },
    ],
  },
  bikaver: {
    fact: "Significa «sangue di toro». Secondo la leggenda, nel 1552 l’esercito ottomano si spaventò vedendo le barbe arrossate dei soldati ungheresi, convinto che bevessero sangue di toro.",
    quiz: [
      { q: "Che cosa significa «Bikavér»?", a: "Sangue di toro", x: ["Sole rosso", "Lacrime di drago", "Sangue del re"] },
      { q: "Contro chi si combatté l’assedio di Eger del 1552, da cui nasce la leggenda del sangue di toro?", a: "L’Impero ottomano", x: ["L’Impero mongolo", "Gli Asburgo", "Il Regno di Francia"] },
    ],
  },
  opusone: {
    fact: "Vino nato dall’alleanza tra Robert Mondavi e il barone Philippe de Rothschild di Mouton. In etichetta si sovrappongono i profili dei due uomini.",
    quiz: [
      { q: "Qual è la prima annata di Opus One?", a: "1979", x: ["1966", "1985", "1994"] },
      { q: "Da quale ambito viene il termine «Opus One»?", a: "La musica (opera numero 1)", x: ["L’arte", "L’architettura", "La letteratura"] },
    ],
  },
  mondavi: {
    fact: "Nel 1966 fu la prima grande cantina fondata a Napa dopo il Proibizionismo. L’arco e il campanile in etichetta sono l’edificio della cantina di Oakville.",
    quiz: [
      { q: "In che anno fu fondata la cantina Robert Mondavi?", a: "1966", x: ["1933", "1976", "1989"] },
      { q: "Che nome diede Robert Mondavi al suo Sauvignon Blanc affinato in rovere?", a: "Fumé Blanc", x: ["Blanc de Blancs", "Verdejo", "White Zinfandel"] },
    ],
  },
  kj: {
    fact: "Da decenni è lo Chardonnay più venduto negli Stati Uniti. Il simbolo è la foglia di vite autunnale in etichetta.",
    quiz: [
      { q: "Qual è il simbolo dell’etichetta Kendall-Jackson?", a: "Una foglia di vite autunnale", x: ["Un orso", "Un faro", "Un grappolo d’oro"] },
      { q: "Chi ha fondato Kendall-Jackson?", a: "Jess Jackson", x: ["Robert Mondavi", "Ernest Gallo", "Chuck Wagner"] },
    ],
  },
  barefoot: {
    fact: "L’impronta di piede nudo in etichetta ricorda l’antica pigiatura dell’uva con i piedi. Per volumi è tra i marchi di vino più grandi al mondo.",
    quiz: [{ q: "Quale tradizione richiama l’impronta sull’etichetta di Barefoot?", a: "La pigiatura dell’uva con i piedi", x: ["Passeggiare scalzi tra le vigne", "Una festa in spiaggia", "Ballare dopo la vendemmia"] }],
  },
  grange: {
    fact: "Il più grande rosso australiano, sperimentato in segreto negli anni ’50 dall’enologo Max Schubert dopo un viaggio a Bordeaux. È un vino riconosciuto come patrimonio culturale.",
    quiz: [
      { q: "Quale enologo creò il Grange?", a: "Max Schubert", x: ["Peter Lehmann", "John Duval", "Wolf Blass"] },
      { q: "Quale nome portava in origine il Grange?", a: "Grange Hermitage", x: ["Grange Bordeaux", "Bin 1", "Penfolds Classic"] },
    ],
  },
  yellowtail: {
    fact: "L’animale in etichetta non è un canguro ma un wallaby delle rocce dai piedi gialli. È diventato il vino d’importazione più venduto negli Stati Uniti.",
    quiz: [{ q: "Quale animale compare sull’etichetta di [yellow tail]?", a: "Il wallaby delle rocce dai piedi gialli", x: ["Il canguro", "Il koala", "Il vombato"] }],
  },
  cloudybay: {
    fact: "Con la prima annata, il 1985, ha fatto conoscere al mondo il Sauvignon Blanc neozelandese. Le montagne in etichetta sono la catena delle Richmond, a Marlborough.",
    quiz: [
      { q: "Che cosa è raffigurato sull’etichetta di Cloudy Bay?", a: "La catena delle Richmond", x: ["Il Monte Cook", "Il Mar di Tasman", "Il fiume Waitaki"] },
      { q: "Qual è la prima annata di Cloudy Bay?", a: "1985", x: ["1973", "1992", "2001"] },
    ],
  },
  almaviva: {
    fact: "L’«Opus One cileno». Il motivo in etichetta è il simbolo del cosmo che i Mapuche dipingono sul kultrún, il loro tamburo rituale.",
    quiz: [
      { q: "Da che cosa deriva il motivo sull’etichetta di Almaviva?", a: "Dal kultrún, il tamburo dei Mapuche", x: ["Dal dio sole degli Inca", "Dalle statue dell’Isola di Pasqua", "Dal condor delle Ande"] },
      { q: "Di quale opera è un personaggio Almaviva?", a: "«Le nozze di Figaro» di Beaumarchais", x: ["Don Chisciotte", "Carmen", "I miserabili"] },
    ],
  },
  montes: {
    fact: "Si dice che l’angelo in etichetta sia il custode che più volte salvò da incidenti il fondatore Douglas Murray. È uno dei vini cileni più amati in Corea.",
    quiz: [
      { q: "Qual è il simbolo dell’etichetta di Montes Alpha?", a: "Un angelo", x: ["Un diavolo", "Un condor", "Il sole"] },
      { q: "Qual è il vitigno principale di «Purple Angel», il vino icona di Montes?", a: "Carmenère", x: ["Malbec", "Pinot Nero", "Tempranillo"] },
    ],
  },
  casillero: {
    fact: "Significa «cantina del diavolo». Secondo la leggenda il fondatore, per tenere lontani i ladri, fece girare la voce che nella sua cantina sotterranea abitasse il diavolo.",
    quiz: [{ q: "Che cosa significa «Casillero del Diablo»?", a: "La cantina del diavolo", x: ["La vigna del diavolo", "La parte degli angeli", "La porta dell’inferno"] }],
  },
  sanpedro1865: {
    fact: "Il nome è l’anno di fondazione di Viña San Pedro. In Corea è diventato un regalo famoso grazie all’augurio golfistico «fare 18 buche in 65 colpi».",
    quiz: [
      { q: "Che cosa indica il nome «1865»?", a: "L’anno di fondazione di Viña San Pedro", x: ["La resa della prima vendemmia", "L’altitudine del vigneto", "L’anno di nascita del fondatore"] },
      { q: "Con quale augurio il 1865 è diventato un regalo famoso in Corea?", a: "Fare 18 buche in 65 colpi", x: ["Arrivare a 65 anni in 18 anni", "Brindare 65 volte l’8 gennaio", "Dividere 65 bottiglie in 18 persone"] },
    ],
  },
  inniskillin: {
    fact: "Si vendemmia e si pressa l’uva ghiacciata sotto gli 8 gradi sotto zero. Con il Grand Prix vinto al Vinexpo del 1991 ha fatto conoscere al mondo l’icewine canadese.",
    quiz: [
      { q: "Sotto quale temperatura deve essere ghiacciata l’uva per l’icewine canadese?", a: "-8 °C", x: ["-2 °C", "-20 °C", "0 °C"] },
      { q: "In quale fiera l’Inniskillin Vidal Icewine vinse il Grand Prix nel 1991?", a: "Vinexpo", x: ["Vinitaly", "ProWein", "London Wine Fair"] },
    ],
  },
  ott: {
    fact: "La bottiglia sinuosa a forma di birillo, disegnata negli anni ’30 dalla famiglia Ott, è diventata il simbolo del rosé provenzale.",
    quiz: [
      { q: "Quando fu disegnata la bottiglia sinuosa di Domaines Ott?", a: "Negli anni ’30", x: ["Negli anni ’80 dell’Ottocento", "Negli anni ’60", "Negli anni 2000"] },
      { q: "Quale maison di champagne acquistò Domaines Ott nel 2004?", a: "Louis Roederer", x: ["Moët & Chandon", "Veuve Clicquot", "Bollinger"] },
    ],
  },
  whisperingangel: {
    fact: "Uscito nel 2006, ha guidato il boom mondiale del rosé. Il nome viene dalla statua di un angelo sussurrante nella cappella dello château.",
    quiz: [
      { q: "Chi è il proprietario di Château d’Esclans, che produce Whispering Angel?", a: "Sacha Lichine", x: ["Brad Pitt", "Gérard Bertrand", "Alain Ducasse"] },
      { q: "In che anno è uscito Whispering Angel?", a: "2006", x: ["1985", "1998", "2015"] },
    ],
  },
  musar: {
    fact: "Cantina che ha continuato a vendemmiare schivando le bombe anche durante la guerra civile libanese. Affina i vini per quasi 7 anni prima di metterli in commercio.",
    quiz: [
      { q: "Quale vinificatore ha reso famoso nel mondo Château Musar?", a: "Serge Hochar", x: ["Michel Rolland", "Émile Peynaud", "André Tchelistcheff"] },
      { q: "In che anno fu fondato Château Musar?", a: "1930", x: ["1855", "1975", "1998"] },
    ],
  },
};

export default T;
