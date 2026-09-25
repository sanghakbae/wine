import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  sh2_penfolds_maxs: {
    fact: "Linea di Penfolds dedicata a Max Schubert, leggendario capo enologo che creò il Grange. Ne prosegue la filosofia di assemblare uve di zone diverse.",
    quiz: [{ q: "Quale leggendario vino australiano creò negli anni ’50 Max Schubert, che dà il nome a Penfolds Max’s?", a: "Penfolds Grange", x: ["Henschke Hill of Grace", "Wolf Blass Black Label", "Torbreck RunRig"] }],
  },
  sh2_penfolds_bin128: {
    fact: "Shiraz che Penfolds produce solo con uve di Coonawarra. Grazie al clima fresco della zona è più profumato ed elegante degli Shiraz della Barossa.",
    quiz: [{ q: "Qual è la prima annata di Penfolds Bin 128 Coonawarra Shiraz?", a: "1962", x: ["1932", "1982", "2002"] }],
  },
  sh2_penfolds_bin150: {
    fact: "Shiraz che Penfolds produce solo con uve della zona di Marananga, a nord-ovest della Barossa Valley. È stato presentato con l’annata 2008.",
    quiz: [{ q: "Quale toponimo tedesco portava Marananga, nome del Penfolds Bin 150, prima di essere cambiato durante la Prima guerra mondiale?", a: "Gnadenfrei", x: ["Gnadenberg", "Hahndorf", "Neudorf"] }],
  },
  sh2_penfolds_bin2: {
    fact: "Vino «Bin» di Penfolds che unisce Shiraz e Mataro (Mourvèdre). Con uve di diverse zone del South Australia, è godibile presto.",
    quiz: [{ q: "Tra i vini Penfolds indicati con un numero come il Bin 2, quale numero «Bin» porta il Grange?", a: "Bin 95", x: ["Bin 1", "Bin 389", "Bin 707"] }],
  },
  sh2_penfolds_magill: {
    fact: "Shiraz del vigneto culla di Penfolds, creato nel 1844 dai coniugi Penfold a Magill, alle porte di Adelaide. È un raro vigneto sopravvissuto in piena città.",
    quiz: [
      { q: "Qual era il mestiere originale di Christopher Rawson Penfold, fondatore di Penfolds?", a: "Medico", x: ["Pastore protestante", "Capitano di nave", "Avvocato"] },
      { q: "Quale vino di Penfolds prende il nome dal cottage dei coniugi Penfold ancora presente a Magill Estate?", a: "Grange", x: ["St Henri", "Yattarna", "Koonunga Hill"] },
    ],
  },
  sh2_torbreck_laird: {
    fact: "Il vino di punta di Torbreck, Shiraz da vigneto singolo di Marananga, nella Barossa. Affina a lungo in spesse botti nuove di rovere francese.",
    quiz: [{ q: "Chi indica in scozzese la parola «Laird» di Torbreck The Laird?", a: "Il signore proprietario terriero", x: ["Il pastore di pecore", "Il guardiaboschi", "Il prete del villaggio"] }],
  },
  sh2_torbreck_woodcutters: {
    fact: "Shiraz della Barossa intitolato ai tempi in cui Dave Powell, fondatore di Torbreck, lavorava come boscaiolo in Scozia.",
    quiz: [{ q: "In che anno aprì Torbreck, produttrice di Woodcutter’s Shiraz?", a: "1994", x: ["1954", "1974", "2004"] }],
  },
  sh2_torbreck_factor: {
    fact: "Shiraz di Torbreck da vecchie viti di diversi villaggi della Barossa Valley. I nomi dei vini Torbreck vengono quasi tutti da antiche parole della campagna scozzese.",
    quiz: [{ q: "Chi era il «Factor» nella Scozia di un tempo, secondo il nome di Torbreck The Factor?", a: "L’amministratore che gestiva la tenuta per conto del signore", x: ["Il mugnaio che macinava il grano", "Il fabbro del villaggio", "Il mandriano"] }],
  },
  sh2_greenockcreek_roennfeldt: {
    fact: "Shiraz di culto prodotto in quantità minime da vecchie viti di Marananga, nella Barossa. È diventato leggenda ricevendo 100 punti da Robert Parker.",
    quiz: [{ q: "Che cos’è il «Roennfeldt Road» di Greenock Creek Roennfeldt Road?", a: "Il nome di una strada della Barossa che costeggia il vigneto", x: ["Il villaggio tedesco natale del fondatore", "Il torrente accanto al vigneto", "L’antica chiesa della cantina"] }],
  },
  sh2_rockford_basketpress: {
    fact: "Shiraz della Barossa che Rockford produce secondo tradizione con attrezzature di oltre cent’anni. Venduto soprattutto in cantina e tramite lista postale, è difficile da trovare.",
    quiz: [{ q: "Da dove viene il nome Rockford Basket Press?", a: "Dal vecchio torchio a cesto usato per spremere l’uva", x: ["Dalla grande cesta per trasportare l’uva", "Dal soprannome d’infanzia del fondatore", "Dalla forma a cesto del vigneto"] }],
  },
  sh2_peterlehmann_stonewell: {
    fact: "Lo Shiraz di punta della cantina che Peter Lehmann fondò alla fine degli anni ’70 per acquistare le uve dei viticoltori della Barossa, rimaste invendute per la sovrapproduzione.",
    quiz: [{ q: "Quale carta da gioco compare sull’etichetta e nel logo dei vini Peter Lehmann?", a: "La regina di fiori", x: ["L’asso di picche", "Il re di cuori", "Il fante di quadri"] }],
  },
  sh2_grantburge_meshach: {
    fact: "Lo Shiraz di punta della cantina della Barossa fondata nel 1988 da Grant e Helen Burge, da uve di vecchie viti.",
    quiz: [{ q: "Chi è il «Meshach» di Grant Burge Meshach?", a: "Il bisnonno di Grant Burge", x: ["Il contadino vicino che vendette il primo vigneto", "Il primo pastore luterano arrivato in Barossa", "Il primo capo enologo della cantina"] }],
  },
  sh2_langmeil_freedom: {
    fact: "Nasce da alcune delle viti di Shiraz più antiche del mondo, nella Barossa. Il nome «libertà» ricorda gli immigrati arrivati dalla Prussia in cerca di libertà religiosa.",
    quiz: [{ q: "Che cosa indica il «1843» di Langmeil The Freedom 1843?", a: "L’anno d’impianto delle viti", x: ["L’anno di fondazione della cantina", "L’anno della prima esportazione", "L’altitudine del vigneto in metri"] }],
  },
  sh2_charlesmelton_ninepopes: {
    fact: "Assemblaggio in stile Rodano di vecchia Grenache della Barossa con Shiraz e Mourvèdre. È il vino simbolo di Charles Melton.",
    quiz: [{ q: "Come nacque il nome Nine Popes (nove papi) di Charles Melton?", a: "Traducendo per errore il «neuf» (nuovo) di Châteauneuf-du-Pape con il numero nove", x: ["Il vigneto fu benedetto da nove papi", "Assembla nove vitigni", "Dalle nove medaglie papali collezionate dal fondatore"] }],
  },
  sh2_glaetzer_amonra: {
    fact: "Il vino di punta che l’enologo Ben Glaetzer produce con Shiraz di vecchie viti della Barossa. È imbottigliato senza filtrazione.",
    quiz: [{ q: "A quale mitologia appartiene il dio «Amon-Ra» di Glaetzer Amon-Ra?", a: "È il dio sole della mitologia egizia", x: ["È il dio del vino della mitologia greca", "È il dio del tuono della mitologia norrena", "È il dio della luna della mitologia mesopotamica"] }],
  },
  sh2_johnduval_entity: {
    fact: "Shiraz della Barossa di John Duval, che dal 1986 al 2002 fu capo enologo di Penfolds e responsabile del Grange, prima di mettersi in proprio.",
    quiz: [{ q: "In quale cantina lavorò come capo enologo John Duval prima di mettersi in proprio?", a: "Penfolds", x: ["Wolf Blass", "Henschke", "Yalumba"] }],
  },
  sh2_yalumba_octavius: {
    fact: "Il vino di punta che Yalumba, la più antica cantina familiare d’Australia, produce con Shiraz di vecchie viti della Barossa.",
    quiz: [{ q: "Da dove viene il nome Yalumba The Octavius?", a: "Dall’«octave», la piccola botte usata per l’affinamento", x: ["Dall’ottava vinificazione di prova", "Da un assemblaggio di otto vigneti", "Da otto anni di affinamento"] }],
  },
  sh2_jacobscreek_doublebarrel: {
    fact: "Shiraz detto «Double Barrel» perché, dopo l’affinamento in botti da vino, passa in botti che hanno contenuto un altro distillato per un secondo affinamento.",
    quiz: [{ q: "In quali botti fa il secondo affinamento Jacob’s Creek Double Barrel Shiraz?", a: "In botti che hanno invecchiato whisky", x: ["In botti che hanno contenuto sherry", "In botti che hanno contenuto rum", "In botti che hanno contenuto Porto"] }],
  },
  sh2_henschke_cyril: {
    fact: "Cabernet Sauvignon dell’Eden Valley prodotto in onore di Cyril Henschke, che per primo propose vini da vigneto singolo come Hill of Grace.",
    quiz: [{ q: "Che rapporto c’è tra Cyril Henschke, che dà il nome a questo vino, e Stephen Henschke, oggi alla guida della cantina?", a: "È il padre", x: ["È il nonno", "È il fratello maggiore", "È lo zio"] }],
  },
  sh2_pewseyvale_riesling: {
    fact: "Vigneto dove nel 1847 l’immigrato inglese Joseph Gilbert piantò per primo la vite sulle colline dell’Eden Valley. Nel 1961 la famiglia Hill-Smith di Yalumba lo fece rinascere.",
    quiz: [{ q: "Da dove viene il nome Pewsey Vale?", a: "Dalla valle «Vale of Pewsey», nel Wiltshire inglese", x: ["Dalla lingua aborigena, «sorgente limpida»", "Dal nome della figlia che fece la prima vendemmia", "Dal nome di una chiesa vicina"] }],
  },
  sh2_darenberg_stumpjump: {
    fact: "L’assemblaggio quotidiano di d’Arenberg. Tutte le etichette d’Arenberg portano una fascia rossa diagonale.",
    quiz: [{ q: "Che cos’era lo «stump jump plough», l’aratro inventato nel South Australia che dà il nome a d’Arenberg The Stump Jump?", a: "Un aratro che, urtando un ceppo, si solleva e lo scavalca", x: ["Un aratro che estirpa solo le erbacce tra le viti", "Un aratro a vapore", "Un aratro trainato da quattro buoi"] }],
  },
  sh2_darenberg_footbolt: {
    fact: "Shiraz il cui nome racconta i tempi di Joseph Osborn, che nel 1912 acquistò il vigneto di McLaren Vale gettando le basi di d’Arenberg.",
    quiz: [{ q: "Che cos’era in origine «The Footbolt» di d’Arenberg?", a: "Il cavallo da corsa di Joseph Osborn", x: ["Il torrente accanto al vigneto", "Il cane da caccia del fondatore", "Un vecchio torchio manuale"] }],
  },
  sh2_wirrawirra_churchblock: {
    fact: "L’assemblaggio simbolo di Wirra Wirra, cantina di McLaren Vale fondata nel 1894, chiusa e poi riportata in vita nel 1969.",
    quiz: [{ q: "Chi riaprì Wirra Wirra nel 1969?", a: "Greg Trott", x: ["Max Schubert", "Wolf Blass", "Peter Lehmann"] }],
  },
  sh2_taylors_cs: {
    fact: "Cabernet Sauvignon della cantina di famiglia fondata dalla famiglia Taylor nella Clare Valley nel 1969. In vari paesi, tra cui il Regno Unito, si vende con il nome «Wakefield».",
    quiz: [{ q: "Perché in molti paesi i vini Taylors si vendono con il nome «Wakefield»?", a: "Per non confondersi con la casa di Porto portoghese Taylor’s", x: ["La casa reale britannica chiese di cambiare nome", "Il fondatore cambiò cognome", "Dal nome del primo porto d’esportazione"] }],
  },
  sh2_mounthorrocks_cordoncut: {
    fact: "Riesling dolce che l’enologa Stephanie Toole produce nella Clare Valley. Senza muffa nobile né gelo, concentra gli zuccheri facendo appassire l’uva sulla pianta.",
    quiz: [{ q: "In che cosa consiste il metodo «Cordon Cut» di Mount Horrocks?", a: "Si taglia il tralcio con i grappoli e li si lascia appassire appesi alla pianta", x: ["Si vendemmia l’uva ghiacciata di notte", "Si stende l’uva raccolta su stuoie di paglia", "Si raccolgono solo gli acini con muffa nobile"] }],
  },
  sh2_wynns_johnriddoch: {
    fact: "Il Cabernet Sauvignon di punta che Wynns Coonawarra Estate produce selezionando solo le uve migliori. La prima annata è il 1982.",
    quiz: [{ q: "Chi era John Riddoch, protagonista del nome di Wynns John Riddoch?", a: "Il pioniere di origine scozzese che piantò per primo la vite a Coonawarra", x: ["L’imprenditore italiano che acquistò Wynns", "Il primo capo enologo della cantina", "Il primo governatore del South Australia"] }],
  },
  sh2_shawsmith_sb: {
    fact: "Il Sauvignon Blanc simbolo della cantina fondata nel 1989 ad Adelaide Hills dai cugini Martin Shaw e Michael Hill-Smith.",
    quiz: [{ q: "Quale titolo ottenne nel 1988 Michael Hill-Smith, cofondatore di Shaw + Smith, primo australiano a riceverlo?", a: "Master of Wine (MW)", x: ["Master Sommelier (MS)", "Laurea in enologia a Bordeaux", "Jimmy Watson Trophy"] }],
  },
  sh2_brokenwood_graveyard: {
    fact: "Lo Shiraz di punta di Brokenwood, fondata nella Hunter Valley nel 1970 da tre amici di Sydney. Si chiama «Graveyard» perché il terreno era destinato in origine a cimitero.",
    quiz: [{ q: "Qual era il mestiere dei tre fondatori di Brokenwood?", a: "Avvocati", x: ["Medici", "Bancari", "Architetti"] }],
  },
  sh2_mountpleasant_oshea: {
    fact: "Shiraz di Mount Pleasant dedicato a Maurice O’Shea, leggendario vinificatore della Hunter Valley. I suoi vini erano considerati i migliori rossi australiani della metà del Novecento.",
    quiz: [{ q: "In quale paese studiò viticoltura ed enologia Maurice O’Shea, alla guida di Mount Pleasant?", a: "Francia", x: ["Germania", "Italia", "Stati Uniti"] }],
  },
  sh2_tyrrells_vat47: {
    fact: "Chardonnay della Hunter Valley uscito con l’annata 1971, considerato il primo Chardonnay commerciale d’Australia.",
    quiz: [{ q: "Chi produsse per primo il Tyrrell’s Vat 47, nel 1971?", a: "Murray Tyrrell", x: ["Bruce Tyrrell", "Edward Tyrrell", "Max Schubert"] }],
  },
  sh2_lakesfolly_cabernets: {
    fact: "Cantina fondata nel 1963 da Max Lake nella Hunter Valley. Questa sfida, che lui stesso chiamò «la follia di Lake», aprì l’era delle cantine boutique australiane.",
    quiz: [{ q: "Qual era il mestiere di Max Lake, fondatore di Lake’s Folly?", a: "Chirurgo", x: ["Avvocato", "Banchiere", "Giornalista"] }],
  },
  sh2_clonakilla_sv: {
    fact: "Il vino simbolo della cantina fondata nel 1971 vicino a Canberra dallo scienziato John Kirk. Allo Shiraz si aggiunge un po’ di Viognier, un’uva bianca, fermentati insieme.",
    quiz: [{ q: "Quale zona francese, famosa per la tradizione di unire Viognier al Syrah, ha fatto da modello al Clonakilla Shiraz Viognier?", a: "Côte-Rôtie", x: ["Châteauneuf-du-Pape", "Cornas", "Bandol"] }],
  },
  sh2_xanadu_cs: {
    fact: "Cabernet Sauvignon di Xanadu, aperta negli anni ’70, nell’epoca pionieristica di Margaret River. È un esempio tipico del Cabernet di Margaret River, elegante e solido.",
    quiz: [{ q: "Da dove viene il nome Xanadu?", a: "Dalla poesia «Kubla Khan» del poeta inglese Coleridge", x: ["Dal villaggio natale del fondatore", "Dalla lingua aborigena, «brezza marina»", "Dal nome della figlia del primo proprietario del vigneto"] }],
  },
  sh2_voyager_chardonnay: {
    fact: "Chardonnay della cantina di Margaret River acquistata nel 1991 dall’imprenditore minerario Michael Wright. Con l’edificio bianco e il roseto è un luogo splendido da visitare.",
    quiz: [{ q: "In quale stile architettonico è l’edificio bianco della cantina di Voyager Estate?", a: "Lo stile Cape Dutch sudafricano", x: ["Lo stile château francese", "Lo stile colonico toscano", "Lo stile missione spagnolo"] }],
  },
  sh2_cullen_kevinjohn: {
    fact: "Lo Chardonnay di punta di Cullen, da uve coltivate in biodinamica. È uno degli Chardonnay simbolo di Margaret River.",
    quiz: [{ q: "Chi onora il nome Cullen Kevin John?", a: "Il medico Kevin Cullen, cofondatore della cantina", x: ["Un contadino vicino che aiutò alla prima vendemmia", "Il primo nipote del fondatore", "Il primo vinificatore di Margaret River"] }],
  },
  sh2_vassefelix_heytesbury: {
    fact: "Lo Chardonnay di punta che Vasse Felix, la prima cantina di Margaret River, produce con le uve delle parcelle migliori.",
    quiz: [{ q: "Che cos’è «Heytesbury» di Vasse Felix Heytesbury?", a: "Il nome dell’azienda della famiglia Holmes à Court, proprietaria di Vasse Felix dal 1987", x: ["Un faro al largo di Margaret River", "Il paese natale del primo enologo", "La parola aborigena per «sabbia bianca»"] }],
  },
  sh2_tahbilk_marsanne: {
    fact: "Cantina storica del Victoria, fondata nel 1860. Coltiva uno dei più vasti vigneti di Marsanne al mondo, con viti piantate già nel 1927.",
    quiz: [{ q: "Quale famiglia gestisce Tahbilk di generazione in generazione dal 1925?", a: "La famiglia Purbrick", x: ["La famiglia Brown", "La famiglia Henschke", "La famiglia Hardy"] }],
  },
  sh2_yarrayering_dr1: {
    fact: "Assemblaggio a base di Cabernet della cantina fondata nella Yarra Valley nel 1969 dal dottor Bailey Carrodus. In etichetta non compare il vitigno, ma solo «Dry Red No. 1».",
    quiz: [{ q: "Qual era il mestiere originale di Bailey Carrodus, fondatore di Yarra Yering?", a: "Botanico", x: ["Chirurgo", "Avvocato", "Ingegnere minerario"] }],
  },
  sh2_mountmary_quintet: {
    fact: "Assemblaggio bordolese di Mount Mary, nella Yarra Valley, nata nel 1971 quando il medico John Middleton piantò le prime viti. Le piccole quantità sono vendute soprattutto ai clienti della lista postale.",
    quiz: [{ q: "Quale significato ha il nome «Quintet» (quintetto) di Mount Mary Quintet?", a: "Assembla cinque vitigni bordolesi", x: ["Assembla uve di cinque vigneti", "Affina per cinque anni", "Onora i cinque figli del fondatore"] }],
  },
  sh2_coldstreamhills_pn: {
    fact: "Pinot Nero della cantina fondata nel 1985 nella Yarra Valley da James Halliday, il più noto critico del vino australiano.",
    quiz: [{ q: "Quale guida ai vini australiani pubblicava ogni anno James Halliday, fondatore di Coldstream Hills?", a: "Halliday Wine Companion", x: ["Penguin Wine Guide", "Hugh Johnson’s Pocket Wine Book", "Parker’s Wine Buyer’s Guide"] }],
  },
  sh2_yeringstation_pn: {
    fact: "Pinot Nero di Yering Station, sorta su un’antica fattoria della Yarra Valley. Il clima fresco gli dà un gusto delicato.",
    quiz: [{ q: "Che cosa rappresenta il sito di Yering Station nella storia del vino del Victoria?", a: "È il luogo dove nel 1838 si piantò la prima vite del Victoria", x: ["La prima cantina di spumanti del Victoria", "La cantina fondata dalla prima enologa australiana", "Il primo luogo in Australia a usare il tappo a vite"] }],
  },
  sh2_tenminutes_pn: {
    fact: "Pinot Nero dei freschi vigneti della Mornington Peninsula, circondata dal mare, a sud di Melbourne.",
    quiz: [{ q: "Da dove viene il nome Ten Minutes by Tractor (dieci minuti in trattore)?", a: "I primi tre vigneti erano tutti a dieci minuti di trattore l’uno dall’altro", x: ["Dalla cantina al mare ci sono dieci minuti di trattore", "L’uva viene pressata entro dieci minuti", "Il fondatore gestiva un’azienda di trattori"] }],
  },
  sh2_chambers_raremuscat: {
    fact: "Muscat fortificato della cantina Rosewood di Rutherglen, gestita da generazioni dalla famiglia Chambers. È un assemblaggio di vini vecchi di decenni.",
    quiz: [{ q: "Delle quattro categorie di invecchiamento del Rutherglen Muscat (Rutherglen, Classic, Grand, Rare), a quale corrisponde «Rare»?", a: "La più alta", x: ["La più bassa", "La seconda", "La terza"] }],
  },
  sh2_seppelt_sparklingshiraz: {
    fact: "Spumante rosso di Seppelt, a Great Western, nel Victoria. Esce solo dopo un lungo affinamento in bottiglia.",
    quiz: [{ q: "Chi scavò «The Drives», le lunghe gallerie d’affinamento sotto la cantina Seppelt di Great Western?", a: "Minatori d’oro rimasti senza lavoro", x: ["Il genio militare britannico", "Detenuti deportati", "Operai delle ferrovie"] }],
  },
  sh2_jansz_cuvee: {
    fact: "Cantina di spumanti della Tasmania avviata nel 1986 in collaborazione con la maison di champagne Louis Roederer. Rifermenta in bottiglia come lo champagne.",
    quiz: [{ q: "Da chi prende il nome Jansz?", a: "Da Abel Janszoon Tasman, l’esploratore olandese che per primo raggiunse la Tasmania", x: ["Da un mercante olandese che fondò la cantina", "Dal nonno del fondatore", "Dall’esploratore inglese James Cook"] }],
  },
  sh2_cloudybay_pn: {
    fact: "Pinot Nero che Cloudy Bay, famosa per il Sauvignon Blanc, produce con uve delle fresche valli meridionali di Marlborough.",
    quiz: [{ q: "Quale esploratore diede nel 1770 il nome «Cloudy Bay» (baia nuvolosa) a questo tratto di mare?", a: "Il capitano inglese James Cook", x: ["L’olandese Abel Tasman", "Il francese Dumont d’Urville", "Il portoghese Magellano"] }],
  },
  sh2_seresin_sb: {
    fact: "Sauvignon Blanc della cantina fondata a Marlborough all’inizio degli anni ’90 da Michael Seresin. Coltiva in biologico e biodinamica e mette in etichetta l’impronta di una mano.",
    quiz: [{ q: "Qual è il mestiere principale di Michael Seresin, fondatore di Seresin Estate?", a: "Direttore della fotografia cinematografica", x: ["Architetto", "Giocatore della nazionale di rugby", "Cantante lirico"] }],
  },
  sh2_nautilus_sb: {
    fact: "Sauvignon Blanc di una cantina di Marlborough che ha come simbolo la conchiglia del nautilo.",
    quiz: [{ q: "Quale cantina australiana gestisce la famiglia Hill-Smith, proprietaria di Nautilus Estate?", a: "Yalumba", x: ["Penfolds", "Henschke", "Jacob’s Creek"] }],
  },
  sh2_matua_sb: {
    fact: "Cantina fondata ad Auckland nel 1974 dai fratelli Ross e Bill Spence. Oggi è un marchio popolare molto noto per il Sauvignon Blanc di Marlborough.",
    quiz: [{ q: "Quale primato della storia del vino neozelandese stabilì Matua nel 1974?", a: "Il primo Sauvignon Blanc della Nuova Zelanda", x: ["Il primo vino neozelandese con tappo a vite", "Il primo Pinot Nero neozelandese", "Il primo spumante neozelandese"] }],
  },
  sh2_giesen_sb: {
    fact: "Sauvignon Blanc della cantina di famiglia fondata in Nuova Zelanda nel 1981 da tre fratelli. È noto anche per i vini dealcolati «0%».",
    quiz: [{ q: "Qual è il paese d’origine dei fratelli Theo, Alex e Marcel Giesen, fondatori di Giesen?", a: "Germania", x: ["Paesi Bassi", "Austria", "Svizzera"] }],
  },
  sh2_spyvalley_sb: {
    fact: "Sauvignon Blanc di una cantina di famiglia della valle del Waihopai, a Marlborough.",
    quiz: [{ q: "Da dove viene il nome Spy Valley?", a: "Dalla stazione di comunicazioni satellitari dei servizi segreti che si trova nella valle", x: ["Da una grotta dove si nascosero spie in tempo di guerra", "Da un romanzo di spionaggio scritto dal fondatore", "Dalla storia di minatori che estraevano oro di nascosto"] }],
  },
  sh2_astrolabe_sb: {
    fact: "Sauvignon Blanc prodotto da Astrolabe, piccola cantina di famiglia di Marlborough.",
    quiz: [{ q: "Da che cosa deriva il nome Astrolabe?", a: "Dalla nave dell’esploratore francese Dumont d’Urville, che esplorò le coste neozelandesi", x: ["Dalla nave del capitano James Cook", "Da una canoa tradizionale maori", "Dallo yacht del fondatore"] }],
  },
  sh2_closhenri_sb: {
    fact: "Sauvignon Blanc della cantina fondata a Marlborough nel 2000 dalla famiglia Henri Bourgeois, della Loira francese.",
    quiz: [{ q: "In quale zona francese la famiglia Bourgeois, fondatrice di Clos Henri, produce vino da generazioni?", a: "Sancerre", x: ["Chablis", "Bordeaux", "Alsazia"] }],
  },
  sh2_babich_blacklabel: {
    fact: "Sauvignon Blanc di Marlborough di Babich, storica cantina di famiglia neozelandese aperta nel 1916.",
    quiz: [{ q: "Da dove emigrò Josip Babich, fondatore di Babich?", a: "Dalla Dalmazia, in Croazia", x: ["Dalla Sicilia", "Da Creta", "Dalla Galizia spagnola"] }],
  },
  sh2_tohu_sb: {
    fact: "Sauvignon Blanc fresco che Tohu Wines produce con uve di Marlborough.",
    quiz: [{ q: "Quale primato detiene Tohu Wines nella storia del vino mondiale?", a: "È il primo marchio di vino al mondo di proprietà maori", x: ["È la prima cantina al mondo certificata vegana", "È il primo vino neozelandese con tappo a vite", "È la prima cantina a emissioni zero dell’emisfero australe"] }],
  },
  sh2_pegasusbay_riesling: {
    fact: "Riesling della cantina gestita dalla famiglia Donaldson a Waipara, a nord di Christchurch. È in stile ricco, con una leggera dolcezza residua.",
    quiz: [{ q: "Qual è il mestiere principale di Ivan Donaldson, fondatore di Pegasus Bay?", a: "Neurologo", x: ["Avvocato", "Cantante lirico", "Giocatore di rugby"] }],
  },
  sh2_kumeuriver_mates: {
    fact: "Chardonnay prodotto a Kumeu, vicino ad Auckland, dalla famiglia Brajkovich, arrivata dalla Croazia. È considerato il riferimento dello Chardonnay neozelandese.",
    quiz: [{ q: "Chi è il «Mate» di Kumeu River Mate’s Vineyard?", a: "Mate Brajkovich, padre dei fratelli che oggi guidano la cantina", x: ["Gli amici che coltivarono il vigneto insieme", "Il contadino inglese che vendette il primo vigneto", "Un capo maori"] }],
  },
  sh2_trinityhill_homage: {
    fact: "Il Syrah di punta di Trinity Hill, dai ghiaiosi Gimblett Gravels di Hawke’s Bay. Ha mostrato il potenziale del Syrah neozelandese.",
    quiz: [{ q: "A chi è dedicato l’«Homage» di Trinity Hill Homage Syrah?", a: "A Gérard Jaboulet, alla guida di Paul Jaboulet Aîné nel Rodano", x: ["A Gérard Chave dell’Hermitage", "A Marcel Guigal della Côte-Rôtie", "A Jacques Perrin di Châteauneuf-du-Pape"] }],
  },
  sh2_missionestate_syrah: {
    fact: "Syrah della cantina più antica della Nuova Zelanda, fondata nel 1851 e attiva ancora oggi.",
    quiz: [{ q: "Chi fondò Mission Estate?", a: "Missionari cattolici francesi (maristi)", x: ["Pastori anglicani inglesi", "Immigrati croati", "Immigrati luterani tedeschi"] }],
  },
  sh2_twopaddocks_pn: {
    fact: "Pinot Nero della cantina fondata nel Central Otago dall’attore Sam Neill, cresciuto in Nuova Zelanda. Il nome viene dai due piccoli pascoli da cui è partita.",
    quiz: [{ q: "Qual è uno dei film più celebri dell’attore Sam Neill, fondatore di Two Paddocks?", a: "Jurassic Park", x: ["Il Signore degli Anelli", "Titanic", "Matrix"] }],
  },
  sh2_montes_alphasyrah: {
    fact: "Il Syrah di Montes Alpha, la linea di vini cileni più amata in Corea. È intenso, da uve baciate dal caldo sole della Colchagua Valley.",
    quiz: [{ q: "Quale musica diffonde sempre Montes nella barricaia della cantina di Apalta?", a: "Il canto gregoriano", x: ["Le sinfonie di Mozart", "La musica popolare cilena", "Il jazz"] }],
  },
  sh2_carmin_peumo: {
    fact: "Il vino icona che Concha y Toro produce con il Carmenère della parcella migliore del vigneto di Peumo. È considerato il miglior Carmenère del Cile.",
    quiz: [{ q: "Che cosa significa in spagnolo «Carmín» di Carmín de Peumo?", a: "Rosso carminio", x: ["Piccolo giardino", "Pietra rossa", "Albero antico"] }],
  },
  sh2_terrunyo_carmenere: {
    fact: "Il Carmenère della linea Terrunyo, creata da Concha y Toro per esaltare il carattere di ogni vigneto. È prodotto con uve di Peumo, zona celebre per il Carmenère.",
    quiz: [{ q: "Quale significato ha il nome Concha y Toro Terrunyo?", a: "Viene dallo spagnolo «terruño», che significa «terroir»", x: ["In mapuche, «terra rossa»", "Il nome della figlia del fondatore", "In latino, «tre colli»"] }],
  },
  sh2_almaviva_epu: {
    fact: "Il secondo vino di Almaviva, joint venture tra la cilena Concha y Toro e Mouton Rothschild di Bordeaux.",
    quiz: [{ q: "Che cosa significa in mapuche «EPU» di Almaviva EPU?", a: "Due", x: ["Cielo", "Aquila", "Fiume"] }],
  },
  sh2_altair: {
    fact: "L’assemblaggio icona dei vigneti d’alta quota della Cachapoal Valley, ai piedi delle Ande, creati dalla cilena San Pedro insieme a un grande nome di Bordeaux.",
    quiz: [
      { q: "Quale château di Saint-Émilion creò inizialmente Altaïr insieme alla cilena San Pedro?", a: "Château Dassault", x: ["Château Cheval Blanc", "Château Ausone", "Château Pavie"] },
      { q: "Da dove viene il nome Altaïr?", a: "Dalla stella più luminosa della costellazione dell’Aquila", x: ["Da una vetta delle Ande", "Da un dio della mitologia mapuche", "Dal cavallo di un eroe dell’indipendenza cilena"] },
    ],
  },
  sh2_aquitania_lazuli: {
    fact: "Cabernet Sauvignon della cantina fondata nel 1990 vicino a Santiago dai bordolesi Paul Pontallier e Bruno Prats e dal cileno Felipe de Solminihac.",
    quiz: [
      { q: "Quale primo cru di Bordeaux guidò a lungo come direttore generale Paul Pontallier, cofondatore di Viña Aquitania?", a: "Château Margaux", x: ["Château Latour", "Château Haut-Brion", "Château Mouton Rothschild"] },
      { q: "A quale luogo si riferisce il nome Aquitania?", a: "All’Aquitania, la regione del sud-ovest della Francia dove si trova Bordeaux", x: ["Ai Paesi Baschi spagnoli", "A un’isola del Cile meridionale", "All’antico nome della Toscana"] },
    ],
  },
  sh2_gatonegro_cs: {
    fact: "Marchio di vino quotidiano della cilena San Pedro, esportato in molti paesi: è un popolare vino cileno per eccellenza.",
    quiz: [{ q: "Che cosa significa in spagnolo «Gato Negro»?", a: "Gatto nero", x: ["Cavallo nero", "Toro nero", "Aquila nera"] }],
  },
  sh2_cousinomacul_finisterrae: {
    fact: "Assemblaggio premium a base di Cabernet Sauvignon che la storica cantina cilena Cousiño-Macul produce con uve della Maipo Valley.",
    quiz: [{ q: "Che cosa significa in latino «Finis Terrae»?", a: "La fine della terra (la fine del mondo)", x: ["Terra buona", "Terra rossa", "Dono della terra"] }],
  },
  sh2_santarita_triplec: {
    fact: "Assemblaggio premium che Santa Rita produce con uve della Maipo Valley. Caso raro in Cile, è centrato sul Cabernet Franc.",
    quiz: [{ q: "Da dove viene il nome Santa Rita Triple C?", a: "Dall’assemblaggio di tre vitigni che iniziano con la C", x: ["Da tre vendemmie separate", "Dalle iniziali dei tre fondatori", "Da uve di tre vigneti («campo»)"] }],
  },
  sh2_ventisquero_pangea: {
    fact: "Syrah che la cilena Ventisquero produce con uve di Apalta insieme a John Duval, enologo che viene da Penfolds, in Australia.",
    quiz: [{ q: "Quale significato racchiude il nome Ventisquero Pangea?", a: "Il supercontinente in cui le terre erano unite prima di separarsi", x: ["Una dea greca del mare", "In mapuche, «montagna alta»", "In latino, «tutte le uve»"] }],
  },
  sh2_losvascos_cs: {
    fact: "Cabernet Sauvignon della cantina Los Vascos, nella Colchagua Valley. È considerata la prima cantina acquistata in Cile dalla famiglia proprietaria di un primo cru di Bordeaux.",
    quiz: [{ q: "Quale famiglia proprietaria di un primo cru di Bordeaux acquistò Los Vascos nel 1988?", a: "I Rothschild di Château Lafite Rothschild", x: ["I Mentzelopoulos di Château Margaux", "I Dillon di Château Haut-Brion", "I Pinault di Château Latour"] }],
  },
  sh2_catena_alta: {
    fact: "Malbec che Catena Zapata produce selezionando solo le parcelle migliori di diversi vigneti d’alta quota.",
    quiz: [{ q: "A che cosa si ispira l’edificio della cantina di Catena Zapata, produttrice di Catena Alta?", a: "A una piramide maya", x: ["A un tempio del sole inca", "A uno château di Bordeaux", "A un antico monastero spagnolo"] }],
  },
  sh2_angelicazapata: {
    fact: "Vino che Catena Zapata produce con Malbec di vigneti d’alta quota. Il lungo affinamento in botte gli dà un gusto solido e profondo.",
    quiz: [{ q: "Chi è Angélica Zapata, che dà il nome ad Angélica Zapata Malbec Alta?", a: "La madre di Nicolás Catena", x: ["La figlia più giovane di Nicolás Catena", "La moglie di Nicolás Catena", "La prima enologa di Mendoza"] }],
  },
  sh2_luca_malbec: {
    fact: "Malbec del marchio personale che Laura Catena, della famiglia Catena, produce a parte con uve d’alta quota della Valle de Uco.",
    quiz: [{ q: "Da chi prende il nome «Luca», il marchio di vino di Laura Catena?", a: "Dal figlio di Laura Catena", x: ["Dal padre di Nicolás Catena", "Dal primo fondatore arrivato dall’Italia", "Dal proprietario del primo vigneto"] }],
  },
  sh2_donapaula_malbec: {
    fact: "Malbec della cantina fondata a Mendoza dal gruppo Claro, proprietario della cilena Santa Rita.",
    quiz: [{ q: "Chi onora il nome Doña Paula?", a: "Paula Jaraquemada, che nascose 120 soldati durante la guerra d’indipendenza cilena", x: ["La madre del fondatore", "La santa patrona di Mendoza", "La prima enologa argentina"] }],
  },
  sh2_decero_malbec: {
    fact: "Malbec del vigneto Remolinos, ricavato dissodando un terreno incolto ad Agrelo, a Mendoza.",
    quiz: [{ q: "Quale significato racchiude «Decero» di Finca Decero?", a: "Da zero (dall’inizio)", x: ["Dieci colline", "Rugiada dell’alba", "Roccia bianca"] }],
  },
  sh2_crios_malbec: {
    fact: "Malbec di Susana Balbo, la prima donna argentina laureata in enologia.",
    quiz: [{ q: "Che cosa significa «Crios» di Susana Balbo Crios?", a: "I figli", x: ["L’alba", "Il cristallo", "Il vento"] }],
  },
  sh2_santajulia_malbec: {
    fact: "Marchio di vino quotidiano della famiglia Zuccardi di Mendoza, conosciuto anche per la linea biologica.",
    quiz: [{ q: "Chi è la protagonista del nome Santa Julia?", a: "Julia Zuccardi, figlia della famiglia Zuccardi", x: ["La santa patrona di Mendoza", "La madre del fondatore", "Una santa del paese d’origine italiano"] }],
  },
  sh2_vinacobos_bramare: {
    fact: "Malbec di Viña Cobos, fondata a Mendoza nel 1999 da un celebre enologo californiano insieme ad amici argentini.",
    quiz: [{ q: "Quale famoso enologo americano ha fondato Viña Cobos?", a: "Paul Hobbs", x: ["Robert Mondavi", "Heidi Barrett", "Helen Turley"] }],
  },
  sh2_yacochuya: {
    fact: "Malbec intenso da uve d’alta quota, intorno ai 2.000 metri, di Cafayate, a Salta. Lo producono insieme la famiglia Etchart di Salta e un celebre consulente bordolese.",
    quiz: [{ q: "Quale celebre consulente enologo bordolese produce Yacochuya?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] }],
  },
  sh2_colome_torrontes: {
    fact: "Torrontés dei vigneti d’alta quota della Valle Calchaquí, a Salta. È il bianco simbolo dell’Argentina, dal profumo floreale intenso.",
    quiz: [{ q: "Quale imprenditore svizzero acquistò e rilanciò Bodega Colomé nel 2001?", a: "Donald Hess", x: ["Mijndert Pon", "Alexander Vik", "Eduardo Chadwick"] }],
  },
  sh2_noemia: {
    fact: "Vino prodotto in quantità minime da vecchie viti di Malbec piantate negli anni ’30 a Río Negro, in Patagonia.",
    quiz: [{ q: "Da chi prende il nome Noemía?", a: "Da Noemi Marone Cinzano, della famiglia italiana Cinzano, cofondatrice della cantina", x: ["Dalla leggenda di una principessa indigena", "Dalla moglie del primo proprietario del vigneto", "Dalla santa patrona della Patagonia"] }],
  },
  sh2_findelmundo_malbec: {
    fact: "Malbec di una cantina che ha creato i suoi vigneti dissodando il deserto di Neuquén, in Patagonia. Il vento forte e la forte escursione termica danno vini dal colore intenso.",
    quiz: [{ q: "Che cosa significa in spagnolo «Fin del Mundo»?", a: "La fine del mondo", x: ["Terra del vento", "Stella del sud", "Deserto bianco"] }],
  },
  sh2_schroeder_saurus: {
    fact: "Malbec di Familia Schroeder, cantina di famiglia con i vigneti sull’altopiano desertico di Neuquén, in Patagonia.",
    quiz: [{ q: "Da dove viene il nome «Saurus» dei vini di Familia Schroeder?", a: "Dai fossili di dinosauro scoperti costruendo la cantina", x: ["Dal soprannome del fondatore", "Dalle lucertole che vivono nel vigneto", "Da vecchi impianti di estrazione del petrolio"] }],
  },
  sh2_rustenvrede_estate: {
    fact: "Cantina alle pendici dell’Helderberg, a Stellenbosch, che produce solo vini rossi. Nel 1977 l’ha acquistata Jannie Engelbrecht, ex giocatore della nazionale di rugby.",
    quiz: [{ q: "Che cosa significa in olandese «Rust en Vrede»?", a: "Riposo e pace", x: ["Collina rossa", "Vento e mare", "Vecchio mulino"] }],
  },
  sh2_delairegraff_chardonnay: {
    fact: "Cantina in cima al passo Helshoogte, tra Stellenbosch e Franschhoek. È famosa anche per l’hotel e le opere d’arte.",
    quiz: [{ q: "Qual è il mestiere principale di Laurence Graff, proprietario di Delaire Graff?", a: "Gioielliere di diamanti", x: ["Gestore di una catena di hotel", "Allenatore di cavalli da corsa", "Architetto"] }],
  },
  sh2_beyerskloof_pinotage: {
    fact: "Il vino quotidiano della cantina specializzata in Pinotage fondata da Beyers Truter, vinificatore detto «il re del Pinotage».",
    quiz: [{ q: "Di quale grande casa di Stellenbosch fu a lungo responsabile della vinificazione Beyers Truter, fondatore di Beyerskloof?", a: "Kanonkop", x: ["Meerlust", "Vergelegen", "Rustenberg"] }],
  },
  sh2_fairview_goatsdoroam: {
    fact: "Assemblaggio che deve il nome all’aneddoto delle capre della fattoria Fairview, famosa anche per i formaggi di capra, che entravano nel vigneto a mangiare solo l’uva più matura.",
    quiz: [{ q: "Di quale zona vinicola francese il nome Goats do Roam imita il suono?", a: "Côtes du Rhône", x: ["Châteauneuf-du-Pape", "Côte-Rôtie", "Côte de Nuits"] }],
  },
  sh2_kenforrester_fmc: {
    fact: "Il bianco di punta che Ken Forrester, detto «Mr. Chenin», produce con uve di vecchie viti di Chenin Blanc a Stellenbosch.",
    quiz: [{ q: "Di che cosa è sigla ufficialmente «FMC» di Ken Forrester The FMC?", a: "Forrester Meinert Chenin", x: ["Fine Mature Chenin", "First Muscat Cuvée", "French Model Cellar"] }],
  },
  sh2_demorgenzon_chenin: {
    fact: "Bianco che DeMorgenzon, cantina sulle colline di Stellenbosch, produce con vecchie viti di Chenin Blanc. Il nome significa «sole del mattino».",
    quiz: [{ q: "Quale musica diffonde DeMorgenzon giorno e notte nei vigneti e in cantina?", a: "Musica barocca", x: ["Jazz", "Tamburi tradizionali africani", "Musica rock"] }],
  },
  sh2_porseleinberg: {
    fact: "Vino che Boekenhoutskloof produce con Syrah biologico dello Swartland. Il vinificatore stampa le etichette di persona con una vecchia macchina da stampa tenuta alla fattoria.",
    quiz: [{ q: "Che cosa significa in afrikaans «Porseleinberg»?", a: "Montagna di porcellana", x: ["Fiume d’argento", "Collina del vento", "Spiaggia bianca"] }],
  },
  sh2_sadie_palladius: {
    fact: "Assemblaggio bianco che Eben Sadie ottiene da vecchie viti di diverse varietà di tutto lo Swartland. Ha fissato il riferimento per i bianchi d’assemblaggio sudafricani.",
    quiz: [{ q: "Che cosa hanno in comune i nomi dei due vini simbolo di Sadie Family, «Palladius» e «Columella»?", a: "Sono entrambi scrittori romani autori di opere sull’agricoltura", x: ["Sono entrambi imperatori romani", "Sono entrambi dei greci", "Sono entrambi monti dello Swartland"] }],
  },
  sh2_allesverloren_tintabarocca: {
    fact: "Rosso da un vitigno portoghese di una vecchia fattoria di famiglia di Riebeek-Kasteel, nello Swartland. È famosa anche per i vini fortificati in stile Porto.",
    quiz: [{ q: "Che cosa significa il nome della fattoria Allesverloren?", a: "Tutto è perduto", x: ["Vigna senza fine", "Pecora smarrita", "Vendemmia tardiva"] }],
  },
  sh2_grootconstantia_gouverneurs: {
    fact: "Assemblaggio bordolese di Groot Constantia, la più antica fattoria vinicola del Sudafrica, fondata nel 1685.",
    quiz: [{ q: "Chi fondò la fattoria di Groot Constantia?", a: "Il governatore del Capo Simon van der Stel", x: ["Jan van Riebeeck, fondatore di Città del Capo", "Willem Adriaan van der Stel, figlio di Simon", "Il magnate minerario Cecil Rhodes"] }],
  },
  sh2_kleinconstantia_sb: {
    fact: "Sauvignon Blanc che Klein Constantia, famosa per il Vin de Constance, produce sulle colline di Constantia battute dalla brezza marina.",
    quiz: [{ q: "Che rapporto c’era in origine tra Klein Constantia e Groot Constantia?", a: "Nascono dalla divisione dell’unica fattoria di Constantia fondata nel 1685", x: ["Due fattorie fondate separatamente da due fratelli", "Una fattoria acquistò l’altra e ne cambiò il nome", "Fattorie indipendenti con un nome solo simile"] }],
  },
  sh2_boschendal_1685: {
    fact: "Chardonnay di Boschendal, storica fattoria all’ingresso di Franschhoek, fondata da immigrati ugonotti francesi.",
    quiz: [{ q: "Che cosa indica il «1685» di Boschendal 1685?", a: "L’anno di fondazione della fattoria Boschendal", x: ["L’anno della prima esportazione di vino", "L’altitudine del vigneto in metri", "Il numero di viti piantate nella fattoria"] }],
  },
  sh2_simonsig_kaapsevonkel: {
    fact: "Il primo spumante sudafricano rifermentato in bottiglia, creato da Frans Malan nel 1971. È il punto di partenza del «Cap Classique» sudafricano.",
    quiz: [{ q: "Che cosa significa in afrikaans «Kaapse Vonkel»?", a: "Scintillio del Capo", x: ["Stella del Capo", "Schiuma del mare", "Rugiada d’oro"] }],
  },
  sh2_ernieels_signature: {
    fact: "Assemblaggio bordolese della cantina fondata sulle pendici dell’Helderberg, a Stellenbosch, da una star mondiale dello sport nata in Sudafrica.",
    quiz: [{ q: "In quale sport è una star Ernie Els, fondatore di Ernie Els Wines?", a: "Golf", x: ["Rugby", "Cricket", "Tennis"] }],
  },
  sh2_glenelly_ladymay: {
    fact: "Assemblaggio a base di Cabernet Sauvignon della cantina fondata a Stellenbosch, a quasi ottant’anni, da May-Eliane de Lencquesaing, già alla guida di un grande château bordolese. Il nome viene da lei.",
    quiz: [{ q: "Quale secondo cru di Pauillac guidò fino al 2007 May-Eliane de Lencquesaing, fondatrice di Glenelly?", a: "Château Pichon Longueville Comtesse de Lalande", x: ["Château Pichon Baron", "Château Lynch-Bages", "Château Pontet-Canet"] }],
  },
  sh2_lanzerac_pinotage: {
    fact: "Pinotage di Lanzerac, storica fattoria di Stellenbosch famosa anche come hotel.",
    quiz: [{ q: "Quale primato stabilì Lanzerac nel 1961?", a: "Produsse il primo vino con il nome del vitigno «Pinotage» in etichetta", x: ["Fu il primo in Sudafrica a usare il tappo a vite", "Produsse il primo rosato del Sudafrica", "Ottenne la prima certificazione biologica del Sudafrica"] }],
  },
  sh2_diemersfontein_pinotage: {
    fact: "Pinotage di Diemersfontein, cantina di Wellington, a nord-est di Città del Capo. È diventato popolare con uno stile morbido e ricco di rovere.",
    quiz: [{ q: "Con quale soprannome è noto lo stile di Pinotage lanciato e reso di moda da Diemersfontein?", a: "Coffee Pinotage", x: ["Vanilla Pinotage", "Smoke Pinotage", "Cherry Pinotage"] }],
  },
  sh2_bouza_tannat: {
    fact: "Tannat di una cantina boutique di famiglia alle porte della capitale Montevideo. È il portabandiera che ha fatto conoscere la qualità del Tannat uruguaiano.",
    quiz: [{ q: "Che cosa è famosa per collezionare ed esporre al suo interno la Bodega Bouza?", a: "Auto d’epoca", x: ["Vecchie bottiglie di vino", "Selle da gaucho", "Opere d’arte contemporanea"] }],
  },
  sh2_pisano_rpf: {
    fact: "Tannat della cantina di Canelones gestita di generazione in generazione dalla famiglia Pisano, discendente di immigrati italiani.",
    quiz: [{ q: "Di che cosa è sigla «RPF» di Pisano RPF?", a: "Reserva Personal de la Familia (riserva personale della famiglia)", x: ["Red Premium Fruit", "Río de la Plata Finca", "Il numero della parcella del vigneto"] }],
  },
  sh2_mercian_kikyogahara: {
    fact: "Il rosso simbolo di Château Mercian, da Merlot dei vigneti sull’altopiano di Kikyogahara a Shiojiri, nella prefettura di Nagano. Ha mostrato al mondo il potenziale del Merlot giapponese.",
    quiz: [{ q: "A quale gruppo giapponese di bevande alcoliche appartiene Château Mercian?", a: "Kirin", x: ["Suntory", "Asahi", "Sapporo"] }],
  },
  sh2_suntory_tomi: {
    fact: "Assemblaggio bordolese di punta che Suntory produce selezionando le uve migliori della cantina Tomi no Oka, a Yamanashi.",
    quiz: [{ q: "Quale grand cru di Saint-Julien, a Bordeaux, acquistò nel 1983 Suntory, produttrice di Tomi?", a: "Château Lagrange", x: ["Château Talbot", "Château Beychevelle", "Château Gruaud Larose"] }],
  },
  sh2_greatwall_cs: {
    fact: "Marchio simbolo del vino cinese, il cui nome (长城) significa Grande Muraglia. Ha prodotto il primo vino nello Hebei all’inizio degli anni ’80.",
    quiz: [{ q: "Quale impresa statale cinese possiede i vini Great Wall (长城)?", a: "COFCO", x: ["Changyu", "Birra Tsingtao", "Kweichow Moutai"] }],
  },
  sh2_gracevineyard_chairmans: {
    fact: "Il rosso di punta di Grace Vineyard, cantina di famiglia fondata nel 1997 nella provincia cinese dello Shanxi da un imprenditore di Hong Kong.",
    quiz: [{ q: "Che cosa significa il nome cinese di Grace Vineyard, 怡园 (Yiyuan)?", a: "Giardino della gioia", x: ["Collina d’oro", "Fiume azzurro", "Foresta del drago"] }],
  },
  sh2_helanqingxue_jiabeilan: {
    fact: "Assemblaggio bordolese di una piccola cantina ai piedi dei monti Helan, nel Ningxia. È considerato il primo vino a dimostrare che anche il vino cinese può raggiungere il livello mondiale.",
    quiz: [{ q: "Quale premio ottenne nel 2011 lo Helan Qingxue Jia Bei Lan 2009?", a: "Un International Trophy ai Decanter World Wine Awards", x: ["Il «Wine of the Year» di Wine Spectator", "100 punti da Robert Parker", "Il gran premio della fiera del vino di Bordeaux"] }],
  },
  sh2_silverheights_summit: {
    fact: "Il rosso di punta di Silver Heights, cantina di famiglia ai piedi dei monti Helan, nel Ningxia. La gestisce l’enologa Gao Yuan (Emma Gao) insieme alla famiglia.",
    quiz: [{ q: "Dove ha studiato enologia Emma Gao, vinificatrice di Silver Heights?", a: "A Bordeaux, in Francia", x: ["A Davis, in California", "Ad Adelaide, in Australia", "A Geisenheim, in Germania"] }],
  },
  sh2_longdai: {
    fact: "Rosso dei vigneti creati sulle colline di Penglai, nella penisola dello Shandong, dalla famiglia proprietaria di un grande château bordolese. La prima annata è il 2017.",
    quiz: [{ q: "La famiglia di quale primo cru di Bordeaux produce Long Dai?", a: "Château Lafite Rothschild", x: ["Château Mouton Rothschild", "Château Margaux", "Château Latour"] }],
  },
  sh2_sula_sb: {
    fact: "Sauvignon Blanc della cantina simbolo dell’India, fondata a Nashik nel 1999 da Rajeev Samant, laureato alla Stanford University.",
    quiz: [{ q: "Dal nome di chi viene «Sula» di Sula Vineyards?", a: "Dalla madre del fondatore, Sulabha", x: ["Da una dea induista", "Dal fiume che attraversa Nashik", "Dalla figlia del fondatore"] }],
  },
  sh2_grover_lareserve: {
    fact: "L’assemblaggio rosso simbolo di Grover Vineyards, fondata nel 1988 sulle Nandi Hills, vicino a Bangalore. È considerata pioniera del vino indiano.",
    quiz: [{ q: "Quale celebre consulente enologo bordolese ha affiancato a lungo Grover Vineyards?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] }],
  },
};

export default T;
