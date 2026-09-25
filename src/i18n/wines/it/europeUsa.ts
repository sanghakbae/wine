import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  eu_prum_wehlener: {
    fact: "Il produttore simbolo della Wehlener Sonnenuhr, vigneto che prende il nome dalla meridiana sul pendio. È famoso per Riesling dalla dolcezza delicata, chiusi da giovani e capaci di invecchiare per decenni.",
    quiz: [{ q: "Che cosa significa «Sonnenuhr» in J.J. Prüm Wehlener Sonnenuhr?", a: "Meridiana", x: ["Giardino al chiaro di luna", "Campanile", "Mulino ad acqua"] }],
  },
  eu_loosen_praelat: {
    fact: "Riesling dell’Erdener Prälat, considerato il vigneto più caldo della Mosella grazie alle pareti di ardesia rossa che lo riparano dal vento. Essendo piccolo, la produzione è minima.",
    quiz: [{ q: "Chi prese in mano l’azienda di famiglia nel 1988 e fece conoscere al mondo il Dr. Loosen Erdener Prälat?", a: "Ernst Loosen", x: ["Egon Müller", "Johannes Selbach", "Carl von Schubert"] }],
  },
  eu_christoffel_urzig: {
    fact: "I ripidi pendii di Ürzig mescolano all’ardesia un raro suolo vulcanico rosso, insolito per la Mosella. Per questo i suoi Riesling sono famosi per le note esotiche di spezie.",
    quiz: [{ q: "Che cosa significa «Würzgarten» in Ürziger Würzgarten?", a: "Giardino delle spezie", x: ["Cantina del vino", "Giardino delle mura", "Collina del sole"] }],
  },
  eu_schloss_johannisberg: {
    fact: "Castello del Rheingau che distingue le categorie con il colore della capsula: gialla, verde, rosa e oro. La capsula verde (Grünlack) indica lo Spätlese.",
    quiz: [
      { q: "Quale categoria sarebbe nata a Schloss Johannisberg nel 1775, quando il corriere con il permesso di vendemmiare arrivò in ritardo?", a: "Spätlese (vendemmia tardiva)", x: ["Eiswein", "Kabinett", "Grosses Gewächs"] },
      { q: "Quale statista ricevette in dono Schloss Johannisberg dall’imperatore d’Austria nel 1816?", a: "Metternich", x: ["Bismarck", "Talleyrand", "Richelieu"] },
    ],
  },
  eu_weil_grafenberg: {
    fact: "Cantina fondata a Kiedrich nel 1875 dal dottor Robert Weil, già professore di tedesco alla Sorbona di Parigi. Il suo vino di punta è il Riesling del ripido vigneto Gräfenberg.",
    quiz: [{ q: "Quale azienda giapponese divenne azionista di maggioranza di Robert Weil nel 1988?", a: "Suntory", x: ["Kirin", "Asahi", "Sapporo"] }],
  },
  eu_keller_gmax: {
    fact: "Riesling della famiglia Keller, che ha portato il Rheinhessen alla ribalta mondiale. Prodotto in quantità minime da vecchie viti, è considerato il Riesling secco tedesco più caro.",
    quiz: [{ q: "Perché il Keller G-Max è considerato un vino misterioso?", a: "Non viene rivelata la posizione del vigneto", x: ["Ogni anno un pittore diverso ne disegna l’etichetta", "È prodotto solo come Eiswein", "Affina sott’acqua in mare"] }],
  },
  eu_donnhoff_hermannshohle: {
    fact: "Helmut Dönnhoff ha portato sulla scena mondiale la piccola regione della Nahe. Hermannshöhle, dove ardesia e rocce vulcaniche si mescolano, è considerato il miglior vigneto della Nahe.",
    quiz: [{ q: "Quale figlio guida oggi Dönnhoff dopo il padre Helmut?", a: "Cornelius Dönnhoff", x: ["Ernst Loosen", "Klaus Peter Keller", "Philipp Wittmann"] }],
  },
  eu_haag_juffer: {
    fact: "Riesling del pendio Juffer-Sonnenuhr, di fronte al paese di Brauneberg sull’altra riva del fiume. Di generazione in generazione la famiglia Haag produce vini delicati e longevi.",
    quiz: [{ q: "Da quale significato deriva la parola «Juffer» di Fritz Haag Brauneberger Juffer?", a: "Signorina (fanciulla)", x: ["Mura", "Volpe", "Sole"] }],
  },
  eu_grunhaus_abtsberg: {
    fact: "Questo vigneto sul fiume Ruwer compare per la prima volta in documenti del X secolo. Dalla fine dell’Ottocento è della famiglia von Schubert, che usa ancora l’etichetta disegnata intorno al 1900.",
    quiz: [
      { q: "Chi coltivò per primo i vigneti di Maximin Grünhaus?", a: "L’abbazia di San Massimino di Treviri", x: ["Il duomo di Colonia", "La casa reale di Prussia", "L’Università di Heidelberg"] },
      { q: "Per quale stile è famosa l’etichetta di Maximin Grünhaus?", a: "Art nouveau (Jugendstil)", x: ["Bauhaus", "Pop art", "Rococò"] },
    ],
  },
  eu_selbach_zeltinger: {
    fact: "Cantina della famiglia Selbach, che coltiva la vite da generazioni a Zeltingen. Il suo vino simbolo è il Riesling del ripido pendio Sonnenuhr, dove sorge una meridiana.",
    quiz: [{ q: "Quale celebre vigneto del paese vicino forma un unico pendio con la Zeltinger Sonnenuhr di Selbach-Oster?", a: "Wehlener Sonnenuhr", x: ["Piesporter Goldtröpfchen", "Bernkasteler Doctor", "Scharzhofberg"] }],
  },
  eu_schloss_vollrads: {
    fact: "Castello del Rheingau considerato una delle cantine più antiche del mondo. Il suo simbolo è la torre medievale circondata dal fossato.",
    quiz: [{ q: "Di che anno è il documento più antico che attesta la vendita di vino da parte di Schloss Vollrads?", a: "1211", x: ["1775", "1855", "1920"] }],
  },
  eu_kloster_eberbach: {
    fact: "Cantina monastica fondata nel 1136 dai monaci cistercensi. Il vigneto Steinberg, cinto da mura dai monaci, è spesso paragonato al Clos de Vougeot di Borgogna.",
    quiz: [{ q: "Quale film con Sean Connery è stato girato nell’abbazia di Kloster Eberbach?", a: "Il nome della rosa", x: ["Indiana Jones e l’ultima crociata", "Gli intoccabili", "Agente 007 – Missione Goldfinger"] }],
  },
  eu_kunstler_holle: {
    fact: "Grande nome di Hochheim, all’estremità orientale del Rheingau dove il Meno incontra il Reno. Con i suoi Riesling potenti e secchi è un simbolo del Rheingau.",
    quiz: [{ q: "Quale soprannome, derivato da Hochheim, patria di Künstler Hochheimer Hölle, usavano gli inglesi per i vini del Reno?", a: "Hock", x: ["Claret", "Sack", "Bubbly"] }],
  },
  eu_wittmann_morstein: {
    fact: "Riesling secco del vigneto calcareo Morstein, coltivato in biodinamica dalla famiglia Wittmann a Westhofen. È considerato un vino da grand cru, il migliore del Rheinhessen.",
    quiz: [{ q: "Chi guida la cantina Wittmann in biodinamica e produce il Morstein?", a: "Philipp Wittmann", x: ["Klaus Peter Keller", "Helmut Dönnhoff", "Johannes Leitz"] }],
  },
  eu_burklin_kirchenstuck: {
    fact: "Grande cantina di famiglia di Wachenheim, nel Palatinato, coltivata in biodinamica. Il piccolo vigneto Kirchenstück, accanto alla chiesa, è considerato il più prezioso del Palatinato.",
    quiz: [{ q: "A quale regione si ispirano le categorie «G.C.» e «P.C.» usate in etichetta da Dr. Bürklin-Wolf?", a: "Borgogna", x: ["La classificazione di Bordeaux del 1855", "Le categorie d’invecchiamento della Rioja", "L’Échelle des Crus della Champagne"] }],
  },
  eu_black_tower: {
    fact: "Marchio di vino tedesco nato alla fine degli anni ’60 e diventato popolarissimo nel Regno Unito e nel mondo. Salta all’occhio la bottiglia nerissima, che sembra di ceramica.",
    quiz: [{ q: "A quale stile di vino bianco tedesco, morbido e dolce, apparteneva Black Tower alla sua nascita?", a: "Liebfraumilch", x: ["Eiswein", "Sekt", "Trockenbeerenauslese"] }],
  },
  eu_wirsching_silvaner: {
    fact: "Cantina di famiglia che si tramanda da generazioni a Iphofen, in Franconia. Dai vigneti di marne gessose ai piedi dello Steigerwald ottiene un Silvaner terroso, imbottigliato nel Bocksbeutel.",
    quiz: [{ q: "Chi era Julius Echter, che dà il nome al vigneto di Hans Wirsching Iphöfer Julius-Echter-Berg?", a: "Il principe-vescovo di Würzburg tra XVI e XVII secolo", x: ["Un re di Baviera", "Un riformatore protestante", "L’ibridatore che creò un vitigno"] }],
  },
  eu_molitor_himmelreich: {
    fact: "Cantina che Markus Molitor, subentrato giovanissimo nell’azienda di famiglia, ha portato ai vertici della Mosella. «Himmelreich» significa «regno dei cieli».",
    quiz: [{ q: "Che cosa indica il colore della capsula (bianca, verde, oro) sulle bottiglie di Markus Molitor?", a: "Il grado di dolcezza", x: ["Il terreno del vigneto", "La durata dell’affinamento", "Il mese di vendemmia"] }],
  },
  eu_thanisch_doctor: {
    fact: "Riesling del Doctor, piccolo celebre vigneto sul ripido pendio proprio dietro il paese di Bernkastel. È stato a lungo tra i terreni vitati più cari della Germania.",
    quiz: [{ q: "Da quale leggenda viene il nome «Doctor» (medico) di Dr. Thanisch Berncasteler Doctor?", a: "Un arcivescovo di Treviri malato guarì bevendo il vino di questo vigneto", x: ["Accanto al vigneto c’era un grande ospedale", "Il medico militare di Napoleone lo usava come medicina", "I vendemmiatori indossavano camici bianchi"] }],
  },
  eu_leitz_einszweidry: {
    fact: "Riesling secco, leggero e fresco di Johannes Leitz, a Rüdesheim, dove il Reno fa una curva. È amato in tutto il mondo per il prezzo accessibile.",
    quiz: [{ q: "Su quale gioco di parole si basa il nome Leitz «Eins Zwei Dry»?", a: "Sul tedesco «uno, due, tre», con il «drei» trasformato nell’inglese «dry»", x: ["Sui numeri delle sinfonie di Beethoven", "Sui nomi dei tre fratelli Leitz", "Su un metodo di tripla filtrazione"] }],
  },
  eu_fxpichler_kellerberg: {
    fact: "Cantina che la famiglia Pichler di Oberloiben ha portato ai vertici della Wachau. Lo Smaragd del Kellerberg, affacciato sul Danubio, unisce potenza e profondità.",
    quiz: [{ q: "Da dove viene il nome della categoria «Smaragd» sulle etichette di F.X. Pichler?", a: "Dalla lucertola color smeraldo che vive nei muretti a secco dei vigneti", x: ["Da una vicina miniera di smeraldi", "Da una gemma della corona asburgica", "Dalla bottiglia verde"] }],
  },
  eu_knoll_schutt: {
    fact: "Un classico della Wachau prodotto di generazione in generazione dalla famiglia Knoll a Unterloiben. Con metodi tradizionali, lontani dalle mode, crea vini che brillano con l’invecchiamento.",
    quiz: [{ q: "Quale santo è raffigurato sull’etichetta di Knoll?", a: "Sant’Urbano, patrono dei vignaioli", x: ["San Pietro", "San Nicola", "San Giorgio"] }],
  },
  eu_prager_achleiten: {
    fact: "Grande nome di Weissenkirchen, nella Wachau. Sotto la guida di Toni Bodenstein è diventato celebre per il Riesling minerale dei ripidi terrazzamenti a muretti dell’Achleiten.",
    quiz: [{ q: "Su quale fiume si affaccia il vigneto Achleiten di Prager?", a: "Il Danubio", x: ["Il Reno", "La Mosella", "L’Elba"] }],
  },
  eu_hirtzberger_singerriedel: {
    fact: "Grande nome di Spitz, nella Wachau occidentale. Il suo vino simbolo è il Riesling Smaragd dei ripidi terrazzamenti del Singerriedel, dietro il paese.",
    quiz: [{ q: "Qual è la categoria più leggera della classificazione «Vinea Wachau», creata nel 1983 da produttori della Wachau come Hirtzberger?", a: "Steinfeder", x: ["Smaragd", "Kabinett", "Grosses Gewächs"] }],
  },
  eu_brundlmayer_heiligenstein: {
    fact: "Grande nome di Langenlois, nel Kamptal, fatto crescere da Willi Bründlmayer. È famoso per il Riesling della ripida collina dell’Heiligenstein e per gli spumanti metodo classico.",
    quiz: [{ q: "Che cosa significa il nome del vigneto Heiligenstein di Bründlmayer?", a: "Pietra (roccia) sacra", x: ["Collina bianca", "Pozzo del santo", "Tomba dell’eroe"] }],
  },
  eu_kracher_tba: {
    fact: "Le nebbie che salgono dal lago di Neusiedl, a Illmitz, favoriscono la muffa nobile e danno vini dolci di livello mondiale. Il compianto Alois Kracher ha portato i vini da dessert austriaci al vertice mondiale.",
    quiz: [{ q: "Come si chiama la serie di Trockenbeerenauslese di Kracher affinata in botti nuove?", a: "Nouvelle Vague", x: ["Zwischen den Seen", "Smaragd", "Grand Cru Classé"] }],
  },
  eu_domane_wachau: {
    fact: "Cantina cooperativa gestita insieme da numerosi viticoltori della Wachau. Ha sede nel barocco «Kellerschlössel» di Dürnstein.",
    quiz: [
      { q: "Quale re fu prigioniero alla fine del XII secolo nel castello di Dürnstein, dove ha sede Domäne Wachau?", a: "Riccardo Cuor di Leone d’Inghilterra", x: ["Luigi IX di Francia", "Federico I del Sacro Romano Impero", "Roberto I di Scozia"] },
      { q: "Quale nome usava Domäne Wachau prima di cambiarlo nel 2008?", a: "Freie Weingärtner Wachau", x: ["Cantina reale della Wachau", "Consorzio del vino del Danubio", "Cantina dell’abbazia di Dürnstein"] },
    ],
  },
  eu_moric_blaufrankisch: {
    fact: "Cantina del Burgenland fondata nel 2001. Con vecchie viti di Blaufränkisch produce rossi delicati come un Borgogna, cambiando la reputazione di questo vitigno.",
    quiz: [{ q: "Quale vinificatore ha fondato Moric facendo conoscere al mondo il Blaufränkisch?", a: "Roland Velich", x: ["Alois Kracher", "Willi Bründlmayer", "Emmerich Knoll"] }],
  },
  eu_royaltokaji_essencia: {
    fact: "Si raccoglie solo il succo che cola per effetto del proprio peso dalle uve botritizzate ammucchiate, e lo si fa fermentare lentissimamente per anni. Ha pochi gradi di alcol ed è denso come il miele.",
    quiz: [{ q: "Quale scrittore del vino inglese fu tra i fondatori di Royal Tokaji nel 1990?", a: "Hugh Johnson", x: ["Jancis Robinson", "Robert Parker", "Michael Broadbent"] }],
  },
  eu_oremus_aszu: {
    fact: "Cantina di Tolcsva che prende il nome dal vigneto Oremus, dove secondo la leggenda nacque il primo Tokaji Aszú. «Oremus» in latino significa «preghiamo».",
    quiz: [{ q: "Quale grande casa spagnola acquistò Oremus nel 1993?", a: "Vega Sicilia", x: ["Marqués de Riscal", "Torres", "Bodegas Muga"] }],
  },
  eu_disznoko_aszu: {
    fact: "Prende il nome da una grande roccia a forma di cinghiale in mezzo al vigneto. È una delle cantine che, dopo la fine del regime comunista, guidarono con capitali stranieri la rinascita del Tokaj.",
    quiz: [
      { q: "Che cosa significa il nome Disznókő?", a: "Pietra del maiale (cinghiale)", x: ["Collina d’oro", "Fonte del re", "Valle del lupo"] },
      { q: "Quale società vinicola di un gruppo assicurativo francese possiede Disznókő dal 1992?", a: "AXA Millésimes", x: ["LVMH", "Groupe Castel", "Baron Philippe de Rothschild"] },
    ],
  },
  eu_kefraya: {
    fact: "Una delle cantine simbolo del Libano, con i vigneti in alto sulle colline a ovest della Valle della Beqaa. Vitigni francesi e sole libanese danno rossi intensi e speziati.",
    quiz: [{ q: "Tra quali due catene montuose si trova la Valle della Beqaa, dove ha sede Château Kefraya?", a: "Monte Libano e Antilibano", x: ["Monti Tauri e Zagros", "Caucaso e Urali", "Atlante e Rif"] }],
  },
  eu_ixsir: {
    fact: "Cantina sorta sulle pendici di Batroun, nel nord del Libano. Il nome viene dalla parola araba per «elisir» ed è famosa per il progetto ecologico con l’edificio interrato.",
    quiz: [{ q: "Quale ex presidente di Renault e Nissan è tra i fondatori di Ixsir?", a: "Carlos Ghosn", x: ["Bernard Arnault", "Sheikh Mansour", "Richard Branson"] }],
  },
  eu_massaya: {
    fact: "Cantina fondata a Tanail, nella Valle della Beqaa, dai fratelli Ghosn, tornati in Libano dopo la guerra civile, insieme a grandi nomi del vino francese.",
    quiz: [{ q: "Quale grande casa di Châteauneuf-du-Pape partecipò alla fondazione di Massaya?", a: "Vieux Télégraphe (famiglia Brunier)", x: ["Château de Beaucastel (famiglia Perrin)", "Château Rayas", "E. Guigal"] }],
  },
  eu_castel_grandvin: {
    fact: "Cantina di famiglia nata dalle viti che Eli Ben Zaken piantò vicino a casa. È considerata la pioniera dell’era dei vini di qualità in Israele.",
    quiz: [{ q: "Qual è la città più vicina alle colline della Giudea, dove si trova il Domaine du Castel?", a: "Gerusalemme", x: ["Haifa", "Eilat", "Nazaret"] }],
  },
  eu_yarden_cabernet: {
    fact: "Cabernet dai freschi vigneti vulcanici delle Alture del Golan. Golan Heights Winery, aperta negli anni ’80, è il marchio che ha fatto conoscere al mondo il vino israeliano.",
    quiz: [{ q: "Che cosa indica in ebraico «Yarden»?", a: "Il fiume Giordano", x: ["Il lago di Tiberiade", "Il monte Hermon", "Il Mar Morto"] }],
  },
  eu_gaia_thalassitis: {
    fact: "Thalassitis, cioè «del mare», è un bianco sapido e tagliente da Assyrtiko dell’isola vulcanica di Santorini. È il vino simbolo di Gaia Wines.",
    quiz: [{ q: "Come si chiama la forma d’allevamento a cesto, con la vite avvolta in cerchio, che protegge le viti di Santorini del Gaia Thalassitis dai venti forti?", a: "Kouloura", x: ["Alberello (gobelet)", "Pergola", "Guyot"] }],
  },
  eu_boutari_naoussa: {
    fact: "Il rosso simbolo della Grecia settentrionale, da Xinomavro, «uva nera acida». Con acidità e tannini elevati, è detto «il Barolo di Grecia».",
    quiz: [{ q: "In che anno Boutari produsse il suo primo vino a Naoussa?", a: "1879", x: ["1789", "1923", "1970"] }],
  },
  eu_sigalas_assyrtiko: {
    fact: "Cantina vicino al villaggio di Oia, nel nord di Santorini. Sull’isola, dove sono comuni radici ultracentenarie, produce un Assyrtiko ricco di mineralità.",
    quiz: [{ q: "Quale parassita hanno potuto evitare le viti di Santorini, dove ha sede il Domaine Sigalas, grazie al suolo di sabbia vulcanica?", a: "La fillossera", x: ["La tignola della vite", "Il moscerino della frutta", "Le termiti"] }],
  },
  eu_tsinandali: {
    fact: "Il bianco secco simbolo della Georgia, da Rkatsiteli e Mtsvane. Prende il nome dal villaggio dove sorgeva la tenuta del nobile che nell’Ottocento introdusse la vinificazione europea.",
    quiz: [{ q: "Quale nobile poeta introdusse nell’Ottocento in Georgia la vinificazione europea, nella sua tenuta di Tsinandali?", a: "Alexander Chavchavadze", x: ["Shota Rustaveli", "Eraclio II", "Niko Pirosmani"] }],
  },
  eu_kindzmarauli: {
    fact: "La fermentazione del Saperavi viene fermata a metà con il freddo, lasciando gli zuccheri naturali dell’uva. È il celebre rosso georgiano prodotto solo in una zona delimitata attorno a Kvareli.",
    quiz: [{ q: "Per quale gusto è famoso il rosso Kindzmarauli?", a: "Semidolce, di dolcezza naturale", x: ["Secco e asciutto", "Fortificato con brandy", "Frizzante"] }],
  },
  eu_pheasants_tears: {
    fact: "Cantina fondata a Sighnaghi da un contadino georgiano e da un pittore americano. Il nome viene da un’antica storia georgiana: un vino così buono da far piangere persino il fagiano.",
    quiz: [
      { q: "Come si chiama la grande giara di terracotta interrata che Pheasant’s Tears usa per fermentare e affinare secondo tradizione?", a: "Qvevri", x: ["Barrique", "Foudre", "Solera"] },
      { q: "Quale pittore americano ha fondato Pheasant’s Tears?", a: "John Wurdeman", x: ["Andy Warhol", "Keith Haring", "Jeff Koons"] },
    ],
  },
  eu_movia_puro: {
    fact: "Cantina di Aleš Kristančič, con vigneti a cavallo del confine tra Slovenia e Italia. Il Puro esce con le fecce dei lieviti ancora nella bottiglia.",
    quiz: [{ q: "Che cosa deve fare chi beve il Movia Puro prima di servirlo?", a: "Stapparlo tenendo la bottiglia capovolta per espellere il deposito", x: ["Aggiungere sciroppo di zucchero", "Agitare la bottiglia per fare schiuma", "Ammorbidire il tappo in acqua"] }],
  },
  eu_dingac: {
    fact: "Plavac Mali che cresce sui ripidi pendii a picco sul mare, nel sud della penisola di Pelješac. Nel 1961 fu il primo vino croato a ottenere una denominazione protetta.",
    quiz: [{ q: "Quale animale, che trasportava l’uva sui ripidi vigneti, è raffigurato sull’etichetta di Dingač?", a: "L’asino", x: ["La capra", "Il cavallo", "Il bue"] }],
  },
  eu_cricova_brut: {
    fact: "È famosa per l’immensa città sotterranea del vino ricavata dalle gallerie di antiche cave di calcare. In oltre 100 km di tunnel riposano spumanti rifermentati in bottiglia e preziose collezioni.",
    quiz: [{ q: "Quale primo cosmonauta della storia visitò le cantine sotterranee di Cricova negli anni ’60?", a: "Jurij Gagarin", x: ["Neil Armstrong", "John Glenn", "Aleksej Leonov"] }],
  },
  eu_nyetimber: {
    fact: "Cantina di spumanti del West Sussex, in Inghilterra. Piantando solo i tre vitigni dello champagne e rifermentando in bottiglia, ha aperto la strada alla fama degli spumanti inglesi.",
    quiz: [{ q: "Chi piantò per primo i vitigni dello champagne a Nyetimber, nel 1988?", a: "La coppia americana Stuart e Sandy Moss", x: ["La famiglia reale britannica", "Moët & Chandon", "La famiglia Taittinger"] }],
  },
  eu_chapel_down: {
    fact: "Cantina simbolo dell’Inghilterra, a Tenterden, nel Kent. Produce spumanti con rifermentazione in bottiglia, come lo champagne.",
    quiz: [{ q: "Quale terreno fa dire che gli spumanti dell’Inghilterra meridionale come Chapel Down somigliano alla Champagne?", a: "Il suolo gessoso", x: ["Il suolo di cenere vulcanica nera", "Il suolo di ardesia rossa", "Le alluvioni di ciottoli di fiume"] }],
  },
  us_screaming_eagle: {
    fact: "Jean Phillips produsse la prima annata nel 1992 dalla terra acquistata a Oakville. Nel 2000, all’asta della Napa, una bottiglia da 6 litri fu venduta per 500.000 dollari, stupendo il mondo.",
    quiz: [
      { q: "Quale proprietario di squadre sportive americane acquistò Screaming Eagle nel 2006?", a: "Stan Kroenke", x: ["Jerry Jones", "Mark Cuban", "Robert Kraft"] },
      { q: "Quale vinificatrice di vini di culto firmò le prime annate di Screaming Eagle?", a: "Heidi Barrett", x: ["Warren Winiarski", "Mike Grgich", "Paul Draper"] },
    ],
  },
  us_harlan: {
    fact: "Fondata nel 1984 dall’immobiliarista Bill Harlan sulle pendici a ovest di Oakville. Puntando a essere il «primo cru» della Napa, ha ottenuto più volte 100 punti da Robert Parker.",
    quiz: [
      { q: "Quale altro marchio di vino di culto lanciò Bill Harlan, fondatore di Harlan Estate, negli anni ’90?", a: "BOND", x: ["Scarecrow", "Colgin", "Screaming Eagle"] },
      { q: "Quale resort della Napa Valley ha cofondato Bill Harlan, creatore di Harlan Estate?", a: "Meadowood", x: ["Auberge du Soleil", "Carneros Inn", "Solage"] },
    ],
  },
  us_dominus: {
    fact: "Vino che Christian Moueix, il bordolese che guidava Pétrus, produce dall’antico vigneto Napanook di Yountville. La prima annata è il 1983.",
    quiz: [
      { q: "Quale duo di architetti svizzeri ha progettato la cantina di Dominus?", a: "Herzog & de Meuron", x: ["Frank Gehry", "Tadao Ando", "Renzo Piano"] },
      { q: "Qual è la particolarità dei muri della cantina di Dominus?", a: "Sono gabbioni di rete metallica riempiti di pietre di basalto", x: ["Sono vetrate continue", "Sono rivestiti di doghe di botte", "Sono in cemento a vista"] },
    ],
  },
  us_caymus_ss: {
    fact: "Il Cabernet di punta che la famiglia Wagner di Caymus ottiene ogni anno selezionando solo le botti migliori. È il simbolo dello stile Napa, intenso e morbido.",
    quiz: [{ q: "Quale primato detiene Caymus Special Selection con Wine Spectator?", a: "È l’unico vino eletto due volte «Wine of the Year»", x: ["È il primo vino americano ad aver preso 100 punti", "È il vino americano venduto al prezzo più alto", "È il primo vino affinato su una stazione spaziale"] }],
  },
  us_caymus: {
    fact: "Cantina fondata a Rutherford nel 1972 dalla famiglia Wagner. Il suo Cabernet intenso, dal frutto maturo e dalla trama vellutata, è molto amato anche in Corea.",
    quiz: [
      { q: "Da dove viene il nome Caymus?", a: "Dal «Rancho Caymus», concessione terriera messicana della Napa ottocentesca", x: ["Dal nome della moglie del fondatore", "Dall’antico nome del fiume Napa", "Dal paese tedesco d’origine dei Wagner"] },
      { q: "Quale famiglia ha fondato e guida Caymus?", a: "La famiglia Wagner", x: ["La famiglia Mondavi", "La famiglia Gallo", "La famiglia Coppola"] },
    ],
  },
  us_silveroak_napa: {
    fact: "È prodotto solo con Cabernet Sauvignon affinato in botti di rovere americano. Il giorno dell’uscita della nuova annata, davanti alla cantina si forma la fila.",
    quiz: [
      { q: "Quale edificio è raffigurato sull’etichetta di Silver Oak?", a: "Una torre dell’acqua", x: ["Un faro", "Un mulino a vento", "Un campanile"] },
      { q: "Quali botti usa immancabilmente Silver Oak per l’affinamento?", a: "Botti di rovere americano", x: ["Botti di rovere francese", "Botti di rovere di Slavonia", "Botti di rovere ungherese"] },
    ],
  },
  us_silveroak_av: {
    fact: "Il Cabernet di Sonoma di Silver Oak, più morbido e pronto prima della bottiglia della Napa Valley. In etichetta c’è la stessa torre dell’acqua del Napa.",
    quiz: [{ q: "Chi fondò insieme Silver Oak nel 1972?", a: "Ray Duncan e Justin Meyer", x: ["Robert Mondavi e il barone Philippe", "Jack e Dolores Cakebread", "Dan e Margaret Duckhorn"] }],
  },
  us_cask23: {
    fact: "Il Cabernet di punta di Stag’s Leap Wine Cellars, fondata da Warren Winiarski, ottenuto selezionando solo le uve migliori. La prima annata è il 1974.",
    quiz: [
      { q: "Da dove viene il nome Cask 23?", a: "Dalla botte numero 23, così eccellente il primo anno da essere imbottigliata a parte", x: ["Dalla 23ª parcella del vigneto", "Dal compleanno del fondatore, il 23", "Da una regola di 23 mesi di affinamento"] },
      { q: "Quale grande casa italiana acquistò nel 2007, insieme a Chateau Ste. Michelle, Stag’s Leap Wine Cellars, produttrice del Cask 23?", a: "Antinori", x: ["Gaja", "Frescobaldi", "Biondi-Santi"] },
    ],
  },
  us_slv: {
    fact: "S.L.V. sta per «Stag’s Leap Vineyard». Dopo che l’annata 1973 batté i grandi vini francesi, una bottiglia è entrata nelle collezioni dello Smithsonian.",
    quiz: [
      { q: "In quale degustazione alla cieca del 1976 lo Stag’s Leap Wine Cellars S.L.V. 1973 vinse la categoria dei rossi?", a: "Il Giudizio di Parigi", x: ["La classificazione di Bordeaux del 1855", "Il Grand Prix del Vinexpo", "Il «Wine of the Year» di Wine Spectator"] },
      { q: "Qual era il mestiere originale di Warren Winiarski, fondatore di Stag’s Leap Wine Cellars e creatore dello S.L.V.?", a: "Docente di scienze politiche all’Università di Chicago", x: ["Pilota d’aereo", "Geologo petrolifero", "Regista di Hollywood"] },
    ],
  },
  us_montelena_chard: {
    fact: "Al «Giudizio di Parigi» del 1976 l’annata 1973 batté i grandi bianchi di Borgogna vincendo la categoria dei bianchi. La storia è diventata anche un film.",
    quiz: [
      { q: "Quale vinificatore produsse il Chateau Montelena Chardonnay 1973, vincitore al Giudizio di Parigi?", a: "Mike Grgich", x: ["Warren Winiarski", "Robert Mondavi", "André Tchelistcheff"] },
      { q: "Quale film del 2008 racconta la vittoria di Chateau Montelena Chardonnay al Giudizio di Parigi?", a: "Bottle Shock", x: ["Sideways", "Un’ottima annata", "Mondovino"] },
    ],
  },
  us_montelena_cab: {
    fact: "Cabernet prodotto in uno château di pietra ai piedi del monte St. Helena, a nord di Calistoga. Dal 1972 la famiglia Barrett ha fatto rinascere l’antica cantina e la guida.",
    quiz: [{ q: "Qual era il mestiere di Alfred Tubbs, che fondò Chateau Montelena nel 1882?", a: "Fabbricante di corde", x: ["Magnate delle ferrovie", "Cercatore d’oro", "Banchiere"] }],
  },
  us_tokalon: {
    fact: "Il Cabernet di punta del leggendario vigneto To Kalon di Oakville, proprio dietro la cantina Robert Mondavi. È uno dei vigneti più famosi della Napa.",
    quiz: [
      { q: "Che cosa significa il nome del vigneto To Kalon?", a: "In greco, «la cosa più bella»", x: ["In latino, «collina di Dio»", "In spagnolo, «terra calda»", "In lingua nativa, «acqua limpida»"] },
      { q: "Quale pioniere coltivò per primo nell’Ottocento il vigneto To Kalon e gli diede il nome?", a: "Hamilton Crabb", x: ["George Yount", "Gustave Niebaum", "Charles Krug"] },
    ],
  },
  us_woodbridge: {
    fact: "Marchio di vino quotidiano creato da Robert Mondavi nel 1979 vicino a Lodi. L’obiettivo era un vino californiano che chiunque potesse bere con semplicità.",
    quiz: [{ q: "Da che cosa viene il nome «Woodbridge» di Woodbridge by Robert Mondavi?", a: "Da una località vicino a Lodi, dove si trova la cantina", x: ["Dal cognome da nubile della madre del fondatore", "Dal nome di una bottaia", "Dal paese italiano d’origine dei Mondavi"] }],
  },
  us_insignia: {
    fact: "Lanciato per la prima volta nel 1974 da Joseph Phelps, che guidava un’impresa di costruzioni. È considerato il primo assemblaggio in stile bordolese della California con un nome proprio.",
    quiz: [{ q: "Quale gruppo ha acquistato nel 2022 Joseph Phelps, produttore di Insignia?", a: "LVMH", x: ["E&J Gallo", "Constellation Brands", "Treasury Wine Estates"] }],
  },
  us_heitz_martha: {
    fact: "Pioniere dei Cabernet da vigneto singolo della Napa, con il nome del vigneto in etichetta dall’annata 1966. È famoso per un profumo particolare che ricorda menta ed eucalipto.",
    quiz: [{ q: "Chi è la «Martha» di Heitz Martha’s Vineyard?", a: "Martha May, moglie del proprietario del vigneto Tom May", x: ["La figlia di Joe Heitz", "Un’isola del Massachusetts", "La madre del primo vinificatore"] }],
  },
  us_shafer_hillside: {
    fact: "Il Cabernet di punta della cantina fondata nel 1972 sulle pendici dello Stags Leap District da John Shafer, già dirigente di una casa editrice di Chicago. Il figlio Doug Shafer ne ha accresciuto la fama.",
    quiz: [{ q: "A quale gruppo coreano appartiene l’azienda che nel 2022 ha acquistato Shafer Vineyards, produttrice dell’Hillside Select?", a: "Shinsegae", x: ["Lotte", "CJ", "SK"] }],
  },
  us_diamond_creek: {
    fact: "Cantina fondata alla fine degli anni ’60 da Al Brounstein sul Diamond Mountain. Insisteva nell’imbottigliare il Cabernet separatamente vigneto per vigneto.",
    quiz: [{ q: "In base a che cosa sono stati chiamati i vigneti «Volcanic Hill», «Red Rock Terrace» e «Gravelly Meadow» di Diamond Creek?", a: "In base ai diversi terreni", x: ["In base al mese di vendemmia", "In base all’anno d’impianto", "In base al nome del vinificatore"] }],
  },
  us_dallavalle_maya: {
    fact: "Fondata sulle colline a est di Oakville dall’italiano Gustav Dalla Valle e dalla moglie giapponese Naoko. È un vino di culto con un’alta percentuale di Cabernet Franc.",
    quiz: [{ q: "Da chi prende il nome «Maya» di Dalla Valle?", a: "Dalla figlia dei coniugi fondatori", x: ["Dalla madre del fondatore", "Dall’antica civiltà maya", "Dalla moglie del primo vinificatore"] }],
  },
  us_bond: {
    fact: "Progetto di Bill Harlan di Harlan Estate, che seleziona vigneti da «grand cru» della Napa e li imbottiglia uno per uno. Melbury è uno dei primi di questi vigneti.",
    quiz: [{ q: "Quale approccio segue BOND?", a: "Imbottigliare separatamente i migliori vigneti della Napa", x: ["Assemblare uve di diversi paesi", "Cambiare vitigno ogni anno", "Affinare il vino in fondo al mare"] }],
  },
  us_scarecrow: {
    fact: "Nasce dal vigneto J.J. Cohn di Rutherford, dove crescono vecchie viti di Cabernet piantate negli anni ’40. Il nipote di Cohn ne ha prodotto la prima annata nel 2003.",
    quiz: [{ q: "Da quale film viene il nome Scarecrow (spaventapasseri)?", a: "Il mago di Oz", x: ["Via col vento", "Casablanca", "Tutti insieme appassionatamente"] }],
  },
  us_colgin_cariad: {
    fact: "Assemblaggio in stile bordolese della cantina di culto della Napa guidata da Ann Colgin. Nel 2017 LVMH ha acquisito la maggior parte delle quote di Colgin Cellars.",
    quiz: [{ q: "Che cosa significa in gallese «Cariad», nome del vino di Colgin?", a: "Amore", x: ["Stella", "Collina", "Drago"] }],
  },
  us_sine_qua_non: {
    fact: "Vino di culto in stile Rodano avviato nel 1994 dall’austriaco Manfred Krankl. Il nome in latino significa «ciò senza cui non si può».",
    quiz: [{ q: "Qual è la caratteristica più insolita di Sine Qua Non?", a: "A ogni annata cambiano il nome del vino e il disegno dell’etichetta", x: ["Usa solo tappi di vetro al posto del sughero", "Ogni anno è prodotto in un paese diverso", "È venduto solo all’asta"] }],
  },
  us_kistler: {
    fact: "Grande casa dello Chardonnay fondata a Sonoma nel 1978. È famosa per Chardonnay delicati e potenti, fermentati con lieviti indigeni come in Borgogna.",
    quiz: [{ q: "Chi ha fondato Kistler Vineyards?", a: "Steve Kistler", x: ["Jim Clendenen", "Josh Jensen", "David Lett"] }],
  },
  us_farniente: {
    fact: "Cantina di pietra di Oakville fondata nel 1885 e abbandonata con il Proibizionismo, riportata in vita da Gil Nickel nel 1979. Si concentra su due soli vini, Chardonnay e Cabernet.",
    quiz: [{ q: "Che cosa significa il nome Far Niente?", a: "In italiano, «senza pensieri»", x: ["In latino, «terra lontana»", "In spagnolo, «piccola fattoria»", "In francese, «prima vendemmia»"] }],
  },
  us_beringer_pr: {
    fact: "Il Cabernet di punta di Beringer, fondata nel 1876 a St. Helena dai fratelli Beringer di Magonza: è la cantina della Napa attiva più a lungo senza interruzioni.",
    quiz: [{ q: "Perché Beringer poté restare aperta anche durante il Proibizionismo?", a: "Ebbe il permesso di produrre vino per le funzioni religiose", x: ["Fu usata come istituto di ricerca agricola del governo", "Esportava di nascosto in Canada", "Forniva aceto all’esercito"] }],
  },
  us_beringer_wz: {
    fact: "Vino rosa dolce e leggero ottenuto da uve rosse di Zinfandel. Negli anni ’80 ebbe un successo esplosivo negli Stati Uniti, diventando il simbolo del vino popolare.",
    quiz: [{ q: "Come ottiene il suo colore rosa il Beringer White Zinfandel?", a: "Lasciando le bucce del Zinfandel rosso a contatto per brevissimo tempo", x: ["Aggiungendo succo di fragola", "Usando un’uva dalla buccia rosa", "Assemblando champagne rosé"] }],
  },
  us_sutterhome_wz: {
    fact: "L’originale White Zinfandel reso popolare da Sutter Home, della famiglia Trinchero. Negli anni ’80 divenne il vino più amato d’America.",
    quiz: [{ q: "Da che cosa nacque il gusto dolce del Sutter Home White Zinfandel?", a: "Da un incidente del 1975, in cui la fermentazione si arrestò a metà", x: ["Da un esperimento per imitare l’icewine", "Da un esperimento con rosé francese", "Da una collaborazione con un’azienda di succhi"] }],
  },
  us_duckhorn_merlot: {
    fact: "Fondata nel 1976 da Dan e Margaret Duckhorn, ha portato il Merlot della Napa tra i grandi vini. Ogni etichetta raffigura un uccello acquatico.",
    quiz: [{ q: "Quale Merlot di Duckhorn fu eletto «Wine of the Year» da Wine Spectator nel 2017?", a: "Three Palms Vineyard Merlot", x: ["Decoy Merlot", "Goldeneye Merlot", "Paraduxx Merlot"] }],
  },
  us_cakebread: {
    fact: "Cantina di famiglia fondata a Rutherford nel 1973 da Jack e Dolores Cakebread. È uno Chardonnay abituale nelle carte dei vini dei ristoranti della Napa.",
    quiz: [{ q: "Chi fu il maestro di fotografia di Jack Cakebread, fondatore di Cakebread Cellars?", a: "Ansel Adams", x: ["Annie Leibovitz", "Robert Capa", "Richard Avedon"] }],
  },
  us_rombauer: {
    fact: "Il simbolo dello Chardonnay californiano cremoso, ricco di burro e vaniglia. È la cantina di famiglia fondata nel 1980 da Koerner e Joan Rombauer.",
    quiz: [{ q: "Quale celebre libro di cucina americano scrisse Irma Rombauer, parente della famiglia Rombauer?", a: "The Joy of Cooking", x: ["Mastering the Art of French Cooking", "Kitchen Confidential", "Salt Fat Acid Heat"] }],
  },
  us_bv_latour: {
    fact: "Il Cabernet di punta di BV, fondata a Rutherford nel 1900 dal francese Georges de Latour. Prodotto dall’annata 1936, è considerato il capostipite dei grandi Cabernet della Napa.",
    quiz: [
      { q: "Che cosa significa in francese «Beaulieu» di Beaulieu Vineyard?", a: "Bel luogo", x: ["Alta collina", "Vecchia fonte", "Campo d’oro"] },
      { q: "Quale leggendario vinificatore di origine russa rese un capolavoro il Georges de Latour Private Reserve?", a: "André Tchelistcheff", x: ["Warren Winiarski", "Mike Grgich", "Paul Draper"] },
    ],
  },
  us_rubicon: {
    fact: "Il rosso di punta di Inglenook, fondata nel 1879 dal capitano finlandese Gustave Niebaum. La famiglia Coppola, che acquistò l’antica tenuta, lo produce dall’annata 1978.",
    quiz: [{ q: "Quale regista ha creato l’Inglenook Rubicon?", a: "Francis Ford Coppola", x: ["Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"] }],
  },
  us_ridge_montebello: {
    fact: "Assemblaggio a base di Cabernet da vigneti calcarei su un’alta cresta delle Santa Cruz Mountains. Paul Draper lo ha vinificato per decenni con metodi tradizionali.",
    quiz: [{ q: "Che posizione ottenne il Ridge Monte Bello 1971 tra i rossi alla rivincita del 2006, per i 30 anni del Giudizio di Parigi?", a: "Primo", x: ["Secondo", "Quinto", "Decimo"] }],
  },
  us_ridge_geyserville: {
    fact: "Assemblaggio a base di Zinfandel da un vigneto di Sonoma dove crescono anche viti ultracentenarie. È lo Zinfandel simbolo di Ridge, prodotto dal 1966.",
    quiz: [{ q: "Da che cosa prende il nome il paese di Geyserville, dove si trova il vigneto di Ridge Geyserville?", a: "Dalla vicina zona di geyser", x: ["Dal nome di un minatore della corsa all’oro", "Dal nome di un missionario spagnolo", "Dal nome di una vecchia stazione ferroviaria"] }],
  },
  us_frank_family: {
    fact: "Cantina di famiglia ospitata in un antico edificio di pietra a Calistoga. È diventata popolare con un Cabernet morbido, amato dai ristoranti della Napa.",
    quiz: [{ q: "Quale incarico aveva ricoperto Rich Frank, fondatore di Frank Family Vineyards?", a: "Presidente dei Walt Disney Studios", x: ["Giocatore di baseball professionista", "Geologo petrolifero", "Pilota di linea"] }],
  },
  us_jordan: {
    fact: "Grande nome di Sonoma che produce Cabernet eleganti come un Bordeaux in un edificio ispirato a uno château di campagna francese. La prima annata è il 1976.",
    quiz: [{ q: "Qual era il mestiere di Tom Jordan, che fondò la cantina Jordan nel 1972?", a: "Geologo petrolifero", x: ["Produttore cinematografico di Hollywood", "Golfista professionista", "Pilota d’aereo"] }],
  },
  us_spottswoode: {
    fact: "Cantina di famiglia all’estremità occidentale del paese di St. Helena. Tra le prime nella Napa a passare al biologico, è portata avanti dalle figlie.",
    quiz: [{ q: "Chi acquistò la tenuta di Spottswoode nel 1972 e ne fece una cantina?", a: "Mary Novak", x: ["Margaret Duckhorn", "Ann Colgin", "Jean Phillips"] }],
  },
  us_quintessa: {
    fact: "Assemblaggio in stile bordolese prodotto in biodinamica in una tenuta che racchiude colline e valli a est di Rutherford. La prima annata è il 1994.",
    quiz: [{ q: "Qual è il paese d’origine di Agustín e Valeria Huneeus, fondatori di Quintessa?", a: "Cile", x: ["Argentina", "Spagna", "Italia"] }],
  },
  us_pahlmeyer: {
    fact: "Cantina di culto della Napa fondata negli anni ’80 dall’avvocato Jayson Pahlmeyer. Negli anni ’90 la vinificazione fu affidata alla star Helen Turley.",
    quiz: [{ q: "Quale grande azienda vinicola americana acquistò Pahlmeyer nel 2019?", a: "E&J Gallo", x: ["Constellation Brands", "Jackson Family Wines", "Treasury Wine Estates"] }],
  },
  us_schramsberg: {
    fact: "Nel 1965 i coniugi Davies riportarono in vita questa vecchia cantina di Calistoga fondata nel 1862. Rifermenta in bottiglia nelle grotte scavate nella collina.",
    quiz: [{ q: "In quale occasione storica del 1972 si brindò con Schramsberg Blanc de Blancs?", a: "La cena a Pechino tra il presidente Nixon e il premier Zhou Enlai", x: ["La festa per il rientro dell’Apollo 11", "La cerimonia per la caduta del Muro di Berlino", "L’insediamento del presidente Kennedy"] }],
  },
  us_chandon: {
    fact: "Domaine Chandon, aperto nel 1973 a Yountville, nella Napa Valley, fu la prima cantina di spumanti fondata in California da una maison di champagne francese.",
    quiz: [{ q: "Quale maison di champagne fondò in California Domaine Chandon, produttore di Chandon Brut?", a: "Moët & Chandon", x: ["Veuve Clicquot", "Taittinger", "Louis Roederer"] }],
  },
  us_roederer_estate: {
    fact: "Fondata nel 1982 dalla maison di champagne Louis Roederer nella Anderson Valley, contea di Mendocino. Le nebbie fresche le permettono spumanti vivaci.",
    quiz: [{ q: "Qual è lo champagne più celebre di Louis Roederer, fondatrice di Roederer Estate?", a: "Cristal", x: ["Dom Pérignon", "La Grande Dame", "Belle Époque"] }],
  },
  us_kosta_browne: {
    fact: "Star del Pinot Nero di Sonoma, eletta «Wine of the Year» da Wine Spectator nel 2011. Ha prodotto la prima annata nel 1997.",
    quiz: [{ q: "Con che cosa finanziarono il loro primo vino i due fondatori di Kosta Browne?", a: "Con le mance raccolte lavorando in un ristorante", x: ["Con una vincita alla lotteria", "Con le stock option della Silicon Valley", "Con i guadagni del petrolio"] }],
  },
  us_williams_selyem: {
    fact: "Fondata da due amici che alla fine degli anni ’70 iniziarono a fare vino in garage come hobby del fine settimana. È la pioniera che ha portato il Pinot Nero della Russian River Valley allo status di culto.",
    quiz: [{ q: "Da dove viene il nome Williams Selyem?", a: "Dai cognomi dei due fondatori, Burt Williams ed Ed Selyem", x: ["Dai nomi di due vigneti", "Dai nomi dei coniugi fondatori", "Dai nomi di un paese e di un fiume"] }],
  },
  us_sea_smoke: {
    fact: "Pinot Nero coltivato in biodinamica sui pendii esposti a sud delle Sta. Rita Hills. È famoso perché si vende solo tramite lista postale ed è difficile da trovare.",
    quiz: [{ q: "Da dove viene il nome Sea Smoke?", a: "Dalla nebbia che sale dal mare lungo il fiume Santa Ynez", x: ["Dal fumo di un vulcano vicino", "Dal sentore di fumo lasciato sull’uva da un incendio", "Dal nome dello yacht del fondatore"] }],
  },
  us_au_bon_climat: {
    fact: "Grande nome di Santa Barbara fondato nel 1982. Contro la moda californiana dei vini troppo concentrati, ha puntato su vini freschi come un Borgogna.",
    quiz: [
      { q: "Quale vinificatore dalla forte personalità ha fondato Au Bon Climat?", a: "Jim Clendenen", x: ["Paul Draper", "Manfred Krankl", "Josh Jensen"] },
      { q: "Che cosa significa in francese Au Bon Climat?", a: "Un buon luogo ben esposto al sole", x: ["Il castello sulla collinetta", "Dono del mare", "Prima vendemmia"] },
    ],
  },
  us_calera: {
    fact: "Grande nome del Pinot Nero fondato in alto sulle Gavilan Mountains da Josh Jensen, formatosi in Borgogna, dopo una lunga ricerca di suoli calcarei.",
    quiz: [{ q: "Che cosa significa in spagnolo «Calera»?", a: "Fornace da calce", x: ["Ponte di pietra", "Piccola sorgente", "Terra rossa"] }],
  },
  us_meiomi: {
    fact: "Assemblando uve delle zone costiere di Monterey, Santa Barbara e Sonoma, ottiene un Pinot Nero morbido e fruttato. Nel 2015 è stato venduto a Constellation Brands.",
    quiz: [
      { q: "Quale celebre cantina della Napa gestisce la famiglia di Joe Wagner, creatore di Meiomi?", a: "Caymus", x: ["Silver Oak", "Beringer", "Duckhorn"] },
      { q: "Che cosa significa Meiomi nella lingua dei nativi?", a: "Costa", x: ["Sole", "Uva", "Aquila"] },
    ],
  },
  us_la_crema: {
    fact: "Marchio diventato famoso per Pinot Nero e Chardonnay della fresca Sonoma Coast. È un Pinot Nero californiano amato per il prezzo accessibile.",
    quiz: [{ q: "Quale fondatore di Kendall-Jackson acquistò La Crema facendola crescere?", a: "Jess Jackson", x: ["Ernest Gallo", "Robert Mondavi", "Chuck Wagner"] }],
  },
  us_apothic: {
    fact: "Assemblaggio rosso di Zinfandel, Syrah, Cabernet e Merlot dal gusto dolce e intenso. Uscito alla fine degli anni 2000, ha guidato il boom dei red blend americani.",
    quiz: [{ q: "Da che cosa deriva il nome Apothic?", a: "Dall’«apotheca», il luogo dove nell’Europa medievale si mescolava e conservava il vino", x: ["Da una dea greca del vino", "Dalla chiesa del paese natale del fondatore", "Dal latino per «notte scura»"] }],
  },
  us_prisoner: {
    fact: "Assemblaggio rosso della Napa a base di Zinfandel, uscito per la prima volta nel 2000. Intenso e morbido, ha aperto la moda dei red blend americani.",
    quiz: [
      { q: "Quale pittore spagnolo ha realizzato l’incisione usata sull’etichetta di The Prisoner?", a: "Francisco Goya", x: ["Pablo Picasso", "Diego Velázquez", "Salvador Dalí"] },
      { q: "Quale vinificatore creò The Prisoner?", a: "Dave Phinney", x: ["Chuck Wagner", "Manfred Krankl", "Heidi Barrett"] },
    ],
  },
  us_papillon: {
    fact: "Assemblaggio in stile bordolese della Napa di Orin Swift, fondata da Dave Phinney, creatore di The Prisoner. È famoso per le etichette con foto e disegni d’impatto.",
    quiz: [
      { q: "Da dove viene il nome Orin Swift?", a: "Dal secondo nome del padre del fondatore e dal cognome da nubile della madre", x: ["Dai nomi di due vigneti", "Dal nome del cane del fondatore", "Dal protagonista di un romanzo"] },
      { q: "Quale azienda acquistò Orin Swift nel 2016?", a: "E&J Gallo", x: ["LVMH", "Constellation Brands", "Treasury Wine Estates"] },
    ],
  },
  us_josh: {
    fact: "Marchio californiano di vino quotidiano lanciato da Joseph Carr alla fine degli anni 2000. È considerato uno dei marchi di vino cresciuti più in fretta negli Stati Uniti.",
    quiz: [{ q: "Chi è il «Josh» di Josh Cellars?", a: "Il padre del fondatore Joseph Carr", x: ["Il figlio del fondatore", "Il primo vinificatore", "Il cane del fondatore"] }],
  },
  us_bogle: {
    fact: "Vino della famiglia Bogle, che coltiva la terra da generazioni a Clarksburg, nel delta del fiume Sacramento. Il suo cavallo di battaglia è un Petite Sirah scuro come l’inchiostro.",
    quiz: [{ q: "Di che cosa si occupava da generazioni la famiglia Bogle prima di piantare il primo vigneto nel 1968?", a: "Di agricoltura", x: ["Di petrolio", "Di produzione cinematografica", "Di costruzione di ferrovie"] }],
  },
  us_gallo: {
    fact: "Il marchio simbolo di E&J Gallo, la più grande azienda vinicola familiare del mondo. Ne fanno parte anche marchi come Barefoot, Apothic e Orin Swift.",
    quiz: [
      { q: "Quali fratelli fondarono nel 1933 E&J Gallo, produttrice di Gallo Family Vineyards?", a: "Ernest e Julio Gallo", x: ["Robert e Peter Mondavi", "Jacob e Frederick Beringer", "Dan e Margaret Duckhorn"] },
      { q: "Che cosa finì negli Stati Uniti nel 1933, l’anno in cui i fratelli Gallo aprirono la cantina?", a: "Il Proibizionismo", x: ["La guerra di secessione", "La Grande depressione", "La Seconda guerra mondiale"] },
    ],
  },
  us_grgich: {
    fact: "Fondata il 4 luglio 1977 dal croato Mike Grgich, autore dello Chardonnay vincitore al Giudizio di Parigi. Il suo marchio di fabbrica era il basco che portava sempre.",
    quiz: [{ q: "Di che cosa si occupava la famiglia di Austin Hills, che fondò Grgich Hills con Mike Grgich?", a: "Del caffè Hills Bros.", x: ["Degli hotel Hilton", "Del cioccolato Hershey", "Dell’imbottigliamento della Coca-Cola"] }],
  },
  us_kenzo: {
    fact: "Cantina di proprietà giapponese su un vasto terreno alle pendici sud-orientali della Napa Valley. La vinificazione è affidata a Heidi Barrett, che firmò Screaming Eagle.",
    quiz: [{ q: "Quale azienda di videogiochi fondò Kenzo Tsujimoto, creatore di Kenzo Estate?", a: "Capcom", x: ["Nintendo", "Sega", "Konami"] }],
  },
  us_hess: {
    fact: "Cantina fondata dall’imprenditore svizzero Donald Hess sui ripidi pendii del Mount Veeder. Dalla montagna, più fresca della valle, nasce un Cabernet deciso.",
    quiz: [{ q: "Che cosa ospita, notoriamente, l’edificio della cantina Hess Collection?", a: "Una galleria d’arte contemporanea raccolta dal fondatore", x: ["Un museo delle locomotive a vapore", "Un acquario sotterraneo", "Un osservatorio astronomico"] }],
  },
  us_ddo: {
    fact: "Cantina fondata nel 1987 a Dundee Hills, in Oregon, dalla famiglia Drouhin di Borgogna. È diventata il simbolo del riconoscimento del Pinot Nero dell’Oregon da parte di una grande casa borgognona.",
    quiz: [
      { q: "Quale azienda di Borgogna ha fondato Domaine Drouhin Oregon?", a: "Maison Joseph Drouhin", x: ["Louis Jadot", "Louis Latour", "Domaine de la Romanée-Conti"] },
      { q: "Quale figlia della famiglia Drouhin firma da anni i vini di Domaine Drouhin Oregon?", a: "Véronique Drouhin", x: ["Anne-Claude Leflaive", "Lalou Bize-Leroy", "Marie-Thérèse Charlin"] },
    ],
  },
  us_eyrie: {
    fact: "Iniziò nel 1965 piantando il primo Pinot Nero della Willamette Valley. L’annata 1975, messa a confronto con la Borgogna a una degustazione parigina del 1979, fece conoscere al mondo l’Oregon.",
    quiz: [
      { q: "Chi fondò The Eyrie Vineyards e fu soprannominato «Papa Pinot»?", a: "David Lett", x: ["Robert Drouhin", "Ken Evenstad", "Paul Gerrie"] },
      { q: "Che cosa significa in inglese «Eyrie»?", a: "Il nido d’alta quota dei rapaci", x: ["Una valle nebbiosa", "Un vecchio mulino ad acqua", "Una capanna nel bosco"] },
    ],
  },
  us_beaux_freres: {
    fact: "Il nome significa in francese «cognati». È la cantina di Pinot Nero fondata da Michael Etzel con il cognato sulla Ribbon Ridge, nella Willamette Valley.",
    quiz: [{ q: "Quale celebre critico del vino fondò Beaux Frères con il cognato Michael Etzel?", a: "Robert Parker", x: ["Jancis Robinson", "Hugh Johnson", "James Suckling"] }],
  },
  us_domaine_serene: {
    fact: "Cantina fondata a Dundee Hills da Ken e Grace Evenstad, portata ai vertici del Pinot Nero dell’Oregon. Il vino di punta porta il cognome dei coniugi.",
    quiz: [{ q: "Da chi prende il nome «Serene» di Domaine Serene?", a: "Da Serena, figlia dei coniugi fondatori", x: ["Dalla madre del fondatore", "Dalla dea greca della luna", "Da un antico toponimo dell’Oregon"] }],
  },
  us_cristom: {
    fact: "Cantina fondata nel 1992 da Paul Gerrie nelle Eola-Amity Hills. Ogni vigneto porta il nome di una donna di famiglia, come Jessie, Louise e Marjorie.",
    quiz: [{ q: "Come nasce il nome Cristom?", a: "Unendo i nomi dei figli del fondatore, Christine e Tom", x: ["Dal nome di un monastero cristiano", "Da una sorgente limpida come il cristallo", "Dal nome del primo vinificatore"] }],
  },
  us_csm_riesling: {
    fact: "Pioniere del vino dello stato di Washington e tra i maggiori produttori di Riesling al mondo. La sede è lo château di Woodinville, vicino a Seattle.",
    quiz: [{ q: "Quale Riesling produce Chateau Ste. Michelle dal 1999 insieme al tedesco Dr. Loosen?", a: "Eroica", x: ["Insignia", "Rubicon", "Opus One"] }],
  },
  us_eroica: {
    fact: "Riesling prodotto dal 1999 da Chateau Ste. Michelle, nello stato di Washington, ed Ernst Loosen della Mosella. Unisce la finezza tedesca al frutto generoso di Washington.",
    quiz: [{ q: "Da che cosa prende il nome Eroica?", a: "Dalla Sinfonia n. 3 di Beethoven", x: ["Da un’opera di Mozart", "Da un dramma musicale di Wagner", "Da una polacca di Chopin"] }],
  },
  us_quilceda: {
    fact: "Il miglior produttore di Cabernet dello stato di Washington, fondato nel 1978 da Alex Golitzin. Ha ricevuto più volte 100 punti da Robert Parker, dimostrando il livello dei vini di Washington.",
    quiz: [{ q: "Quale leggendario vinificatore, zio di Alex Golitzin, lo spinse verso il vino prima che fondasse Quilceda Creek?", a: "André Tchelistcheff", x: ["Robert Mondavi", "Warren Winiarski", "Paul Draper"] }],
  },
  us_leonetti: {
    fact: "Fondata nel 1977 da Gary Figgins, è diventata un vino di culto di Washington venduto solo tramite lista postale. Il figlio Chris Figgins ne ha raccolto il testimone.",
    quiz: [{ q: "Che cosa rappresenta Leonetti Cellar nella storia del vino di Walla Walla?", a: "È stata la prima cantina commerciale di Walla Walla", x: ["La prima casa di spumanti di Washington", "La prima cantina biologica certificata degli Stati Uniti", "La prima cantina fondata con capitali francesi"] }],
  },
  us_col_solare: {
    fact: "Assemblaggio in stile bordolese prodotto dall’annata 1995 da Chateau Ste. Michelle di Washington insieme alla famiglia Antinori. Usa uve dei caldi pendii della Red Mountain.",
    quiz: [{ q: "Che cosa significa in italiano Col Solare?", a: "Collina splendente di sole", x: ["Montagna rossa", "Fiume del sole", "Valle d’oro"] }],
  },
  us_cayuse: {
    fact: "Cantina di culto con i vigneti sul versante dell’Oregon della Walla Walla Valley, coperto di sassi tondi grandi come un pugno. Coltivata in biodinamica, vende solo per corrispondenza.",
    quiz: [
      { q: "Quale vinificatore originario della Champagne ha fondato Cayuse?", a: "Christophe Baron", x: ["Christian Moueix", "Manfred Krankl", "Robert Drouhin"] },
      { q: "Che cosa significa in francese «Cailloux», nome del vigneto di Cayuse?", a: "Ciottoli (sassi)", x: ["Colline", "Sorgenti", "Boschi"] },
    ],
  },
  us_drfrank: {
    fact: "Cantina fondata nel 1962 sulle rive del lago Keuka, nei Finger Lakes, dal botanico ucraino Konstantin Frank. È il pioniere del Riesling di New York.",
    quiz: [{ q: "Che cosa dimostrò il dottor Konstantin Frank nei Finger Lakes?", a: "Che anche nel freddo di New York si possono coltivare le viti europee (vinifera)", x: ["Che solo le uve native americane resistono al freddo", "Che il Riesling matura solo in serra", "Che con il sidro si può fare lo champagne"] }],
  },
};

export default T;
