import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  sh_penfolds_bin389: {
    fact: "Assemblaggio di Cabernet e Shiraz creato da Max Schubert nel 1960. È soprannominato «Baby Grange» perché affina nelle botti usate in precedenza per il Grange.",
    quiz: [{ q: "Qual è il soprannome di Penfolds Bin 389?", a: "Baby Grange", x: ["Little Penfolds", "Il Pétrus d’Australia", "Il gioiello della Barossa"] }],
  },
  sh_penfolds_bin407: {
    fact: "Il Cabernet Sauvignon di Penfolds uscito per la prima volta con l’annata 1990. Assemblando uve di diverse zone, è pensato per essere godibile prima del Bin 707.",
    quiz: [{ q: "Che cos’era in origine il numero «Bin» dei vini Penfolds, come il Bin 407?", a: "Il numero dello scomparto della cantina dove si conservava il vino", x: ["Il numero della parcella del vigneto", "Il numero di matricola dell’enologo", "La data della prima uscita"] }],
  },
  sh_penfolds_bin707: {
    fact: "Il miglior Cabernet Sauvignon di Penfolds, con prima annata nel 1964. Negli anni in cui le uve non sono all’altezza, non viene prodotto affatto.",
    quiz: [{ q: "Da che cosa deriva il «707» di Penfolds Bin 707?", a: "Dall’aereo di linea Boeing 707", x: ["Dal 707° anniversario della fondazione", "Da un vigneto a 707 metri d’altitudine", "Dalla 707ª vinificazione di prova"] }],
  },
  sh_penfolds_bin28: {
    fact: "Lo Shiraz simbolo di Penfolds, con prima annata nel 1959. «Kalimna» è il vigneto della Barossa acquistato da Penfolds nel 1945.",
    quiz: [{ q: "Di che cosa è il nome «Kalimna» di Penfolds Bin 28?", a: "Di un vigneto della Barossa acquistato da Penfolds", x: ["Della moglie del fondatore", "Del primo capo enologo", "Della sede di Adelaide"] }],
  },
  sh_penfolds_koonunga: {
    fact: "Il vino quotidiano di Penfolds, uscito per la prima volta nel 1976. Prende il nome dal vigneto Koonunga Hill, nella Barossa Valley.",
    quiz: [{ q: "In che anno uscì per la prima volta Penfolds Koonunga Hill?", a: "1976", x: ["1936", "1996", "2006"] }],
  },
  sh_penfolds_sthenri: {
    fact: "A differenza del Grange, affinato in botti nuove, matura in grandi tini di rovere vecchi di decenni, che valorizzano il frutto invece del legno.",
    quiz: [{ q: "In che cosa affina Penfolds St Henri?", a: "In grandi tini di rovere vecchi di decenni", x: ["In piccole botti nuove di rovere francese", "In giare di terracotta interrate", "In uova di cemento"] }],
  },
  sh_penfolds_yattarna: {
    fact: "Lo Chardonnay di punta di Penfolds, prima annata 1995, frutto di anni di sperimentazione alla ricerca di un «Grange bianco».",
    quiz: [{ q: "Che cosa significa nella lingua aborigena il nome Penfolds Yattarna?", a: "Poco a poco, gradualmente", x: ["Oro bianco", "Vento del sud", "Acqua limpida"] }],
  },
  sh_penfolds_rwt: {
    fact: "Shiraz della Barossa Valley affinato in botti di rovere francese. È l’altro vertice di Penfolds, in contrasto con il Grange che usa rovere americano.",
    quiz: [{ q: "Di che cosa è sigla il nome Penfolds RWT?", a: "Red Winemaking Trial (sperimentazione di vinificazione in rosso)", x: ["Royal Wine Treasure", "Reserve Wine Tasting", "Rare Wine Tradition"] }],
  },
  sh_henschke_hillofgrace: {
    fact: "Shiraz da vigneto singolo dell’Eden Valley, dove crescono le viti «nonne» piantate negli anni ’60 dell’Ottocento. Porta il nome del vigneto in etichetta dal 1958.",
    quiz: [{ q: "Da dove viene il nome Hill of Grace di Henschke?", a: "Dalla traduzione inglese di «Gnadenberg», la chiesa luterana di fronte al vigneto", x: ["Dal nome di Grace, figlia del fondatore", "Da un luogo sacro aborigeno", "Dalla visita della regina d’Inghilterra"] }],
  },
  sh_henschke_edelstone: {
    fact: "Nasce da un vecchio vigneto di Shiraz dell’Eden Valley piantato nel 1912. Henschke lo imbottiglia con il nome del vigneto dal 1952.",
    quiz: [{ q: "In che anno fu piantato lo Shiraz nel vigneto Mount Edelstone di Henschke?", a: "1912", x: ["1812", "1962", "1992"] }],
  },
  sh_torbreck_runrig: {
    fact: "Alle vecchie viti di Shiraz della Barossa aggiunge un po’ di Viognier. «RunRig» prende il nome da un antico sistema scozzese di coltivazione comune.",
    quiz: [{ q: "Da dove viene il nome «Torbreck», la cantina che produce RunRig?", a: "Da una foresta scozzese dove il fondatore lavorò come boscaiolo", x: ["Dal castello del paese natale del fondatore", "Da un toponimo aborigeno della Barossa", "Dal cognome del primo proprietario del vigneto"] }],
  },
  sh_twohands_angelsshare: {
    fact: "Shiraz di McLaren Vale di Two Hands, cantina fondata nel 1999 da Michael Twelftree e Richard Mintz.",
    quiz: [{ q: "A che cosa si riferisce in origine l’espressione «Angels’ Share» (la parte degli angeli) di Two Hands?", a: "Al liquido che evapora durante l’affinamento in botte", x: ["All’uva lasciata nel vigneto dopo la vendemmia", "Al primo bicchiere assaggiato dall’enologo", "Al vino dato in decima alla chiesa"] }],
  },
  sh_clarendon_astralis: {
    fact: "Lo Shiraz di punta di Clarendon Hills, cantina fondata da Roman Bratasiuk, prodotto con uve di vecchie viti.",
    quiz: [{ q: "Che cosa significa in latino il nome Astralis di Clarendon Hills?", a: "Delle stelle, astrale", x: ["Alta collina", "Terra rossa", "Albero antico"] }],
  },
  sh_wolfblass_yellow: {
    fact: "Il vino quotidiano simbolo della cantina fondata nel 1966 dal vinificatore tedesco Wolf Blass. L’etichetta gialla e l’aquila araldica sono il suo marchio.",
    quiz: [{ q: "Da quale paese viene Wolfgang Blass, creatore di Wolf Blass Yellow Label?", a: "Germania", x: ["Austria", "Svizzera", "Paesi Bassi"] }],
  },
  sh_wolfblass_black: {
    fact: "L’assemblaggio di punta di Wolf Blass, prima annata 1973. Si è fatto un nome vincendo per tre anni di fila il più prestigioso premio australiano per i vini rossi.",
    quiz: [{ q: "Quale premio australiano vinse Wolf Blass Black Label tre anni di fila negli anni ’70?", a: "Il Jimmy Watson Trophy", x: ["Il Max Schubert Trophy", "La Canberra Gold Cup", "La Murray River Medal"] }],
  },
  sh_jacobscreek: {
    fact: "Il nome nasce dal vigneto che l’immigrato tedesco Johann Gramp piantò nel 1847 lungo il torrente Jacob’s Creek, nella Barossa. È il marchio d’esportazione che ha fatto conoscere il vino australiano nel mondo.",
    quiz: [{ q: "Da dove viene il nome Jacob’s Creek?", a: "Dal torrente che scorreva accanto al primo vigneto", x: ["Dal nome del figlio del fondatore", "Dal nome della prima nave d’esportazione", "Dal nome di un capo aborigeno"] }],
  },
  sh_lindemans_bin65: {
    fact: "Nasce dal vigneto piantato nella Hunter Valley nel 1843 da Henry Lindeman, chirurgo inglese. È uno degli Chardonnay australiani più venduti al mondo.",
    quiz: [{ q: "Che mestiere faceva in origine Henry Lindeman, fondatore di Lindeman’s?", a: "Il chirurgo", x: ["Il capitano di un piroscafo", "Il cercatore d’oro", "Il sacerdote anglicano"] }],
  },
  sh_rosemount_diamond: {
    fact: "Il vino simbolo di Rosemount, avviata nella Hunter Valley nel 1969 da Robert Oatley. Si chiama «Diamond Label» per l’etichetta a rombo.",
    quiz: [{ q: "Da dove viene il nome Rosemount Diamond Label?", a: "Dall’etichetta a forma di rombo (diamante)", x: ["Da un vigneto vicino a una miniera di diamanti", "Dal 60° anniversario della fondazione", "Da una pietra finta incastonata nella bottiglia"] }],
  },
  sh_hardys_eileen: {
    fact: "Lo Shiraz di punta di Hardys, fondata nel 1853 dall’immigrato inglese Thomas Hardy. Porta il nome di Eileen Hardy, la matriarca che guidò la famiglia.",
    quiz: [{ q: "Chi è l’«Eileen Hardy» di Hardys Eileen Hardy Shiraz?", a: "La matriarca che guidò la famiglia Hardy", x: ["La prima enologa di Hardys", "La madre del fondatore Thomas Hardy", "Una nobildonna inglese che fondò la cantina"] }],
  },
  sh_darenberg_deadarm: {
    fact: "Lo Shiraz simbolo di d’Arenberg, famoso per la fascia rossa diagonale sull’etichetta. È prodotto con uve di vecchie viti in cui una malattia ha fatto seccare un braccio.",
    quiz: [{ q: "A che cosa si riferisce il «Dead Arm» (braccio morto) di d’Arenberg The Dead Arm?", a: "A una malattia che fa seccare un braccio della vite", x: ["Al fondatore ferito a un braccio in guerra", "A un letto di fiume secco accanto al vigneto", "A un torchio rotto alla prima vendemmia"] }],
  },
  sh_leeuwin_art: {
    fact: "Lo Chardonnay della «Art Series», che ogni anno porta in etichetta il quadro di un pittore australiano contemporaneo. Ha reso Margaret River una zona di Chardonnay di fama mondiale.",
    quiz: [{ q: "Quale grande nome del vino americano consigliò Leeuwin Estate nella scelta del sito per il vigneto?", a: "Robert Mondavi", x: ["Ernest Gallo", "Warren Winiarski", "Jess Jackson"] }],
  },
  sh_cullen_diana: {
    fact: "L’assemblaggio a base di Cabernet simbolo di Cullen, fondata nel 1971 da Kevin e Diana Cullen. La figlia Vanya Cullen coltiva i vigneti in biodinamica.",
    quiz: [{ q: "Chi onora il nome Cullen Diana Madeline?", a: "Diana Cullen, cofondatrice della cantina", x: ["La figlia di un vicino che aiutò alla prima vendemmia", "Diana, principessa del Galles", "La prima nipote del fondatore"] }],
  },
  sh_vassefelix: {
    fact: "La prima cantina di Margaret River, fondata nel 1967 dal medico Tom Cullity. «Vasse» viene da un marinaio francese scomparso in quelle acque.",
    quiz: [{ q: "Che cosa significa in latino «Felix» di Vasse Felix?", a: "Fortunato", x: ["Del bosco", "Rosso", "Del mare"] }],
  },
  sh_mosswood: {
    fact: "Cantina pioniera di Margaret River, dove il dottor Bill Pannell piantò le viti nel 1969. È rinomata per Cabernet delicati e longevi.",
    quiz: [{ q: "Qual era il mestiere originale di Bill Pannell, fondatore di Moss Wood?", a: "Medico", x: ["Avvocato", "Ingegnere minerario", "Insegnante di liceo"] }],
  },
  sh_capementelle: {
    fact: "Cabernet Sauvignon di una delle prime cantine di Margaret River, fondata nel 1970 da David Hohnen.",
    quiz: [{ q: "Quale altra cantina fondò David Hohnen di Cape Mentelle in Nuova Zelanda nel 1985?", a: "Cloudy Bay", x: ["Villa Maria", "Oyster Bay", "Kim Crawford"] }],
  },
  sh_grosset_polishhill: {
    fact: "Riesling secco che Jeffrey Grosset ottiene dai terreni sassosi e poveri di Polish Hill River, nella Clare Valley. È considerato il riferimento del Riesling australiano.",
    quiz: [
      { q: "Da dove viene il toponimo «Polish Hill» di Grosset Polish Hill?", a: "Dagli immigrati polacchi stabilitisi nell’Ottocento", x: ["Da rocce lucide (polish)", "Dal cognome del primo proprietario del vigneto", "Da una concessione della corona polacca"] },
      { q: "Quale chiusura cominciarono a usare insieme nel 2000 i produttori di Riesling della Clare Valley come Grosset, al posto del sughero?", a: "Il tappo a vite", x: ["Il tappo di vetro", "Il sigillo di cera", "Il tappo a corona"] },
    ],
  },
  sh_jimbarry_armagh: {
    fact: "Lo Shiraz di punta di Jim Barry, da un vigneto singolo nella zona «Armagh» della Clare Valley. È considerato uno Shiraz icona dell’Australia.",
    quiz: [{ q: "Di quale paese è in origine il toponimo «Armagh» di Jim Barry The Armagh?", a: "Irlanda", x: ["Scozia", "Galles", "Inghilterra"] }],
  },
  sh_wynns_blacklabel: {
    fact: "Il riferimento del Cabernet di Coonawarra, prima annata 1954. L’edificio a tre timpani in etichetta è la cantina costruita da John Riddoch nel 1891.",
    quiz: [{ q: "Qual è la caratteristica della cantina raffigurata sull’etichetta di Wynns Coonawarra Black Label?", a: "Tre timpani appuntiti", x: ["Un tetto a cupola", "Un’alta torre dell’orologio", "Un grande mulino a vento"] }],
  },
  sh_yalumba_signature: {
    fact: "Il rosso simbolo della più antica cantina familiare d’Australia, fondata nel 1849. Ha una propria bottaia dove costruisce le botti.",
    quiz: [
      { q: "Che cosa compare ogni anno sull’etichetta di Yalumba The Signature?", a: "La firma di una persona che ha dato un contributo alla cantina", x: ["Il ritratto del fondatore", "Il grafico delle piogge dell’anno", "Una foto aerea del vigneto"] },
      { q: "Qual era il mestiere originale di Samuel Smith, che fondò Yalumba nel 1849?", a: "Birraio", x: ["Capitano di nave", "Banchiere", "Fabbro"] },
    ],
  },
  sh_brownbrothers_omf: {
    fact: "Vino dolce della famiglia Brown di Milawa, nel Victoria. All’Orange Muscat, profumato di fiori d’arancio, si unisce il Flora.",
    quiz: [{ q: "In che anno la famiglia Brown, produttrice di Orange Muscat & Flora, fece il suo primo vino a Milawa?", a: "1889", x: ["1789", "1939", "1969"] }],
  },
  sh_mollydooker_boxer: {
    fact: "Lo Shiraz simbolo di Mollydooker, fondata nel 2005 da Sparky e Sarah Marquis. È famoso per le etichette da fumetto e il gusto intenso e maturo.",
    quiz: [
      { q: "Che cosa significa «Mollydooker», nome della cantina di The Boxer, nel gergo australiano?", a: "Mancino", x: ["Beone", "Cacciatore di canguri", "Ladro d’uva"] },
      { q: "A che cosa serve lo «scossone Mollydooker», che consiste nell’agitare forte la bottiglia capovolta appena aperta?", a: "A liberare l’azoto aggiunto per preservare la freschezza", x: ["A mescolare il deposito", "A creare le bollicine", "Ad ammorbidire il tappo"] },
    ],
  },
  sh_seppeltsfield_para100: {
    fact: "Ogni anno imbottiglia una botte di Tawny messa in cantina esattamente cento anni prima. Seppeltsfield è l’unica al mondo a farlo ogni anno.",
    quiz: [{ q: "In che anno iniziò la tradizione del Seppeltsfield Para 100 Year Old, mettendo da parte la prima botte da aprire cento anni dopo?", a: "1878", x: ["1778", "1928", "1958"] }],
  },
  sh_debortoli_nobleone: {
    fact: "Il vino dolce simbolo dell’Australia, da Sémillon botritizzato. Fu prodotto per la prima volta nel 1982 da De Bortoli, cantina fondata nel 1928 da una famiglia di immigrati italiani.",
    quiz: [{ q: "Quale vinificatore creò il De Bortoli Noble One nel 1982?", a: "Darren De Bortoli", x: ["Max Schubert", "Wolf Blass", "Peter Lehmann"] }],
  },
  sh_19crimes: {
    fact: "Ogni etichetta riporta il volto di un vero detenuto deportato dall’Inghilterra in Australia. Inquadrandola con un’app sullo smartphone, il detenuto si anima e racconta la sua storia.",
    quiz: [{ q: "Da dove viene il nome 19 Crimes?", a: "Dai 19 reati punibili con la deportazione in Australia", x: ["Dai 19 errori commessi dal fondatore", "Da 19 evasi", "Dalla 19ª nave di detenuti arrivata in Australia"] }],
  },
  sh_tyrrells_vat1: {
    fact: "Leggenda del Sémillon della Hunter: vinificato senza botte e con poco alcol, è leggero, ma con un lungo affinamento in bottiglia sviluppa profumi di pane tostato e miele.",
    quiz: [{ q: "Quale vino, lanciato da Tyrrell’s nel 1971, è considerato il primo Chardonnay commerciale d’Australia?", a: "Vat 47", x: ["Bin 65", "Yattarna", "Art Series"] }],
  },
  sh_cloudybay_tekoko: {
    fact: "Lo speciale Sauvignon Blanc di Cloudy Bay, fermentato e affinato in botte con lieviti indigeni. A differenza del fresco Sauvignon Blanc base, è cremoso e corposo.",
    quiz: [{ q: "Da dove viene il nome Te Koko di Cloudy Bay?", a: "Dal nome maori della baia di Cloudy Bay", x: ["Dal nome maori della figlia del fondatore", "Dal monte alle spalle della cantina", "Dalla costellazione del giorno della prima vendemmia"] }],
  },
  sh_kimcrawford_sb: {
    fact: "Marchio fondato nel 1996 dal vinificatore Kim Crawford e dalla moglie Erica. Il suo Sauvignon Blanc di Marlborough, ricco di frutta tropicale, è diventato popolare in tutto il mondo.",
    quiz: [{ q: "Chi è il «Kim Crawford» di Kim Crawford Sauvignon Blanc?", a: "Il vinificatore neozelandese che fondò la cantina", x: ["Il contadino che vendette il primo vigneto", "Un giocatore della nazionale australiana di cricket", "Il primo sindaco di Marlborough"] }],
  },
  sh_villamaria_privatebin: {
    fact: "Cantina fondata ad Auckland nel 1961 da George Fistonich. È la pioniera che ha diffuso il tappo a vite nel vino neozelandese.",
    quiz: [{ q: "Quale decisione, rara per una grande cantina, prese Villa Maria nel 2001?", a: "Sostituì il sughero con il tappo a vite su tutti i vini", x: ["Smise di produrre vini bianchi", "Iniziò a vendere il vino solo in lattina", "Interruppe tutte le esportazioni"] }],
  },
  sh_oysterbay_sb: {
    fact: "Marchio di Sauvignon Blanc di Marlborough della famiglia Delegat. Fresco e pulito, è esportato in molti paesi.",
    quiz: [{ q: "Qual è l’origine della famiglia Delegat, che produce Oyster Bay?", a: "Immigrati croati", x: ["Immigrati scozzesi", "Immigrati olandesi", "Una tribù maori"] }],
  },
  sh_brancott_sb: {
    fact: "La cantina che nel 1973 piantò il primo vigneto commerciale di Marlborough. È la pioniera che ha aperto l’era del Sauvignon Blanc di Marlborough.",
    quiz: [{ q: "Quale nome di marchio usava un tempo Brancott Estate?", a: "Montana", x: ["Kaikoura", "Blenheim Estate", "Canterbury Hill"] }],
  },
  sh_dogpoint_sb: {
    fact: "Cantina con cui il viticoltore Ivan Sutherland e l’enologo James Healy, entrambi a lungo in Cloudy Bay, hanno prodotto la prima annata nel 2002.",
    quiz: [{ q: "In quale cantina avevano lavorato insieme i due fondatori di Dog Point?", a: "Cloudy Bay", x: ["Villa Maria", "Montana", "Kim Crawford"] }],
  },
  sh_greywacke_sb: {
    fact: "Cantina fondata nel 2009 da Kevin Judd, per 25 anni enologo fondatore di Cloudy Bay. È famoso anche come fotografo dei paesaggi del vino neozelandese.",
    quiz: [{ q: "Che cos’è la «greywacke» di Greywacke Sauvignon Blanc?", a: "Un’arenaria comune nei letti dei fiumi di Marlborough", x: ["Il cane grigio del fondatore", "Il cielo nebbioso dell’alba", "Una balena di una leggenda maori"] }],
  },
  sh_feltonroad_pn: {
    fact: "Cantina simbolo di Bannockburn, nel Central Otago, che coltiva le viti in biodinamica. Ha portato il Pinot Nero neozelandese ai vertici mondiali.",
    quiz: [{ q: "Quale metodo di coltivazione si applica al vigneto del Felton Road Bannockburn Pinot Noir?", a: "La biodinamica", x: ["La coltura idroponica", "La coltivazione in serra", "L’agricoltura intensiva con concimi chimici"] }],
  },
  sh_atarangi_pn: {
    fact: "Cantina pioniera fondata a Martinborough nel 1980 da Clive Paton. «Ata Rangi» in maori significa «nuovo inizio» o «cielo dell’alba».",
    quiz: [{ q: "Come arrivò in Nuova Zelanda il «clone Gumboot» (stivale di gomma) usato per l’Ata Rangi Pinot Noir?", a: "Un funzionario di dogana sequestrò le talee nascoste in uno stivale e le piantò", x: ["Lo inviò in dono l’ambasciatore francese", "Ne portarono i semi gli uccelli migratori", "Lo creò un istituto universitario per incrocio"] }],
  },
  sh_craggy_sophia: {
    fact: "L’assemblaggio bordolese a base di Merlot di Craggy Range, con uve dei Gimblett Gravels, i terreni ghiaiosi di Hawke’s Bay.",
    quiz: [{ q: "Quale monte, noto nella leggenda maori come un gigante addormentato, si erge alle spalle della cantina di Craggy Range Sophia?", a: "Il Te Mata Peak", x: ["Il monte Ruapehu", "Il monte Cook", "Il monte Taranaki"] }],
  },
  sh_temata_coleraine: {
    fact: "Pioniere degli assemblaggi bordolesi neozelandesi, prodotto da Te Mata Estate, gestita dalla famiglia Buck a Hawke’s Bay.",
    quiz: [{ q: "Qual è la prima annata del Te Mata Coleraine?", a: "1982", x: ["1952", "2002", "2012"] }],
  },
  sh_stoneleigh_sb: {
    fact: "Prende il nome dai vigneti su antichi letti di fiume sassosi della zona di Rapaura, a Marlborough. Si dice che i sassi scaldati di giorno cedano calore di notte, aiutando l’uva a maturare.",
    quiz: [{ q: "Quale caratteristica del vigneto è legata al nome di Stoneleigh Sauvignon Blanc?", a: "Un terreno pieno di sassi tondi di un antico letto di fiume", x: ["Dune di sabbia in riva al mare", "Pendii coperti di cenere vulcanica", "Terrazze su una scogliera calcarea"] }],
  },
  sh_saintclair_sb: {
    fact: "Cantina di famiglia di Marlborough nata nel 1994, quando i coniugi Ibbotson, che coltivavano e vendevano uva, lanciarono il loro vino.",
    quiz: [{ q: "Da chi deriva il nome «Saint Clair» di Saint Clair Sauvignon Blanc?", a: "Da James Sinclair, il colono che per primo coltivò questa terra", x: ["Da Claire, figlia del fondatore", "Da suor Claire, missionaria francese", "Dalla regina del primo paese d’esportazione"] }],
  },
  sh_mtdifficulty_pn: {
    fact: "Cantina fondata da un gruppo di viticoltori di Bannockburn, nel Central Otago. Ha preso il nome dal monte che sovrasta i vigneti.",
    quiz: [{ q: "Di che cosa è il nome «Mt Difficulty» di Mt Difficulty Pinot Noir?", a: "Del monte che domina il vigneto", x: ["Soprannome del primo, difficile anno di coltivazione", "Una vetta himalayana scalata dal fondatore", "Una galleria di una vecchia miniera d’oro"] }],
  },
  sh_rippon_pn: {
    fact: "Vigneto di famiglia sul pendio di un lago, famoso per il paesaggio da cartolina con il lago e le Alpi meridionali sullo sfondo.",
    quiz: [{ q: "Su quale lago si affaccia il vigneto del Rippon Mature Vine Pinot Noir?", a: "Il lago Wanaka", x: ["Il lago Taupo", "Il lago Rotorua", "Il lago Tekapo"] }],
  },
  sh_sena: {
    fact: "Vino icona del Cile nato dall’unione tra Eduardo Chadwick e Robert Mondavi, con la prima annata nel 1995. Oggi è prodotto solo dalla famiglia Chadwick.",
    quiz: [{ q: "Quale celebre nome del vino della Napa Valley avviò Seña insieme a Eduardo Chadwick?", a: "Robert Mondavi", x: ["Jess Jackson", "Ernest Gallo", "Warren Winiarski"] }],
  },
  sh_donmelchor: {
    fact: "Il Cabernet Sauvignon di punta di Concha y Toro, prima annata 1987. Nasce dai vigneti di Puente Alto, ai piedi delle Ande.",
    quiz: [{ q: "Chi è il protagonista del nome Don Melchor?", a: "Il fondatore che creò Concha y Toro nel 1883", x: ["Un generale dell’indipendenza cilena", "Il primo capo enologo", "Il nobile spagnolo che vendette il vigneto"] }],
  },
  sh_montes_alpham: {
    fact: "Il vino icona di Montes, assemblaggio bordolese uscito per la prima volta con l’annata 1996. È prodotto con le uve delle colline di Apalta, a Colchagua.",
    quiz: [{ q: "Qual è la prima annata di Montes Alpha M?", a: "1996", x: ["1976", "2006", "2016"] }],
  },
  sh_montes_folly: {
    fact: "Si chiama «Folly» (follia) perché il Syrah fu piantato sui ripidi pendii di Apalta, dove nessuno aveva mai coltivato la vite. È famoso anche per la stravagante etichetta illustrata.",
    quiz: [{ q: "Quale pittore inglese ha disegnato l’etichetta di Montes Folly?", a: "Ralph Steadman", x: ["David Hockney", "Quentin Blake", "Banksy"] }],
  },
  sh_montes_purpleangel: {
    fact: "Il vino icona di Montes prodotto con il Carmenère, vitigno simbolo del Cile. Il Carmenère fu a lungo scambiato per Merlot, finché nel 1994 se ne scoprì la vera identità.",
    quiz: [
      { q: "Di chi sarebbe l’angelo custode che compare su ogni etichetta Montes, come quella di Montes Purple Angel?", a: "Del cofondatore Douglas Murray", x: ["Della figlia del fondatore Aurelio Montes", "Di O’Higgins, eroe dell’indipendenza cilena", "Della regina del primo paese d’esportazione"] },
      { q: "Con quale vitigno veniva confuso in Cile il Carmenère di Montes Purple Angel, prima della scoperta del 1994?", a: "Merlot", x: ["Malbec", "Syrah", "Pinot Nero"] },
    ],
  },
  sh_closapalta: {
    fact: "Il vino icona di Lapostolle, prima annata 1997. L’annata 2005 fu eletta al primo posto nel «Wine of the Year» di Wine Spectator nel 2008.",
    quiz: [{ q: "Quale celebre liquore francese è stato creato dalla famiglia Marnier Lapostolle, produttrice di Clos Apalta?", a: "Grand Marnier", x: ["Cointreau", "Chartreuse", "Bénédictine"] }],
  },
  sh_vinedochadwick: {
    fact: "Cabernet da vigneto singolo della famiglia Chadwick, prima annata 1999. Nel 2004, alla degustazione alla cieca di Berlino, si classificò primo davanti ai primi cru di Bordeaux.",
    quiz: [{ q: "Che cos’era in origine il vigneto di Viñedo Chadwick?", a: "Il campo da polo del padre di Eduardo Chadwick", x: ["Un aeroporto dell’aviazione cilena", "Una miniera di rame", "L’orto di un monastero"] }],
  },
  sh_casaconcha_cs: {
    fact: "Linea premium di Concha y Toro, con uve di vigneti dalla forte personalità territoriale. Il Cabernet Sauvignon viene dalle uve di Puente Alto.",
    quiz: [{ q: "Da che cosa deriva il nome Marqués de Casa Concha?", a: "Dal titolo di marchese concesso dal re di Spagna alla famiglia Concha", x: ["Dalla chiesa accanto al primo vigneto", "Dal cognome da nubile della moglie del fondatore", "Dal soprannome del primo presidente del Cile"] }],
  },
  sh_santarita_120: {
    fact: "Il nome onora i 120 patrioti che nel 1814, durante la guerra d’indipendenza, si salvarono nascondendosi nella cantina sotterranea. È uno dei vini cileni più amati in Corea.",
    quiz: [
      { q: "Che cosa indica il «120» di Santa Rita 120?", a: "I 120 soldati indipendentisti nascosti nella cantina", x: ["Il 120° anniversario della fondazione", "Viti di 120 anni", "120 botti di rovere"] },
      { q: "Quale padrona della tenuta nascose nel 1814 nella cantina i soldati indipendentisti della storia di Santa Rita 120?", a: "Paula Jaraquemada", x: ["Eva Perón", "Gabriela Mistral", "Isabel Allende"] },
    ],
  },
  sh_santarita_casareal: {
    fact: "Il vino di punta che Santa Rita produce con uve di un vecchio vigneto di Cabernet ad Alto Jahuel, nella Maipo Valley.",
    quiz: [{ q: "In che anno fu fondata Santa Rita, produttrice di Casa Real?", a: "1880", x: ["1780", "1930", "1960"] }],
  },
  sh_errazuriz_donmax: {
    fact: "Il vino icona che Errázuriz produce in onore del fondatore, con uve della Aconcagua Valley.",
    quiz: [{ q: "Chi è il protagonista del nome Errázuriz Don Maximiano?", a: "Il fondatore, che creò la cantina nel 1870", x: ["Il primo presidente del Cile", "Il primo capo enologo", "Un monaco spagnolo che lasciò in eredità il vigneto"] }],
  },
  sh_conosur_bicicleta: {
    fact: "La bicicletta in etichetta rende omaggio ai lavoratori che si spostano pedalando tra i vigneti. Cono Sur, nata nel 1993, ha reso popolare il Pinot Nero cileno.",
    quiz: [
      { q: "Perché sull’etichetta di Cono Sur Bicicleta c’è una bicicletta?", a: "Per rendere omaggio ai lavoratori che si spostano in bici tra i vigneti", x: ["Perché il fondatore era un ciclista", "Perché è il vino ufficiale del Tour de France", "Perché c’è un vigneto a forma di bicicletta"] },
      { q: "Che cosa significa «Cono Sur» di Cono Sur Bicicleta?", a: "Cono meridionale (l’estremo sud del Sudamerica)", x: ["Vento del sud", "Neve delle Ande", "Croce del Sud"] },
    ],
  },
  sh_carmen_granreserva: {
    fact: "Cabernet Sauvignon di Carmen, fondata nel 1850 e considerata il più antico marchio di vino del Cile.",
    quiz: [{ q: "Da chi prende il nome Viña Carmen, produttrice della Gran Reserva?", a: "Dalla moglie del fondatore Christian Lanz", x: ["Dalla protagonista dell’opera «Carmen»", "Dalla figlia di un eroe dell’indipendenza cilena", "Dalla santa patrona della cantina"] }],
  },
  sh_lapostolle_alexandre: {
    fact: "La linea principale di Lapostolle, cantina fondata in Cile nel 1994 da Alexandra Marnier Lapostolle, della famiglia del Grand Marnier.",
    quiz: [{ q: "Quale «flying winemaker» bordolese collabora con Lapostolle, produttrice di Cuvée Alexandre, fin dalla fondazione?", a: "Michel Rolland", x: ["Émile Peynaud", "Denis Dubourdieu", "Stéphane Derenoncourt"] }],
  },
  sh_cousinomacul_ar: {
    fact: "Storica cantina cilena gestita da generazioni dalla famiglia fondatrice. A Macul, dentro Santiago, restano le sue antiche cantine.",
    quiz: [{ q: "In che anno fu fondata Cousiño-Macul, produttrice di Antiguas Reservas?", a: "1856", x: ["1756", "1926", "1976"] }],
  },
  sh_santacarolina_reservado: {
    fact: "Cabernet Sauvignon quotidiano di una storica cantina cilena fondata nel 1875 da Luis Pereira.",
    quiz: [{ q: "Da chi prende il nome Santa Carolina?", a: "Da Carolina, moglie del fondatore Luis Pereira", x: ["Dalla regina Carolina di Spagna", "Dalla prima figlia del fondatore", "Dalla madre di un eroe dell’indipendenza cilena"] }],
  },
  sh_leyda_garuma: {
    fact: "Sauvignon Blanc della fresca Leyda Valley, vicina al Pacifico. Il vento freddo e la nebbia che salgono dal mare gli danno un’acidità vivace.",
    quiz: [{ q: "Che cosa rappresenta Viña Leyda, produttrice di Leyda Single Vineyard, per la Leyda Valley?", a: "È la pioniera che vi piantò i primi vigneti", x: ["È la prima cantina del Cile", "È una cantina fondata dalla corona spagnola", "È l’unica cantina statale del Cile"] }],
  },
  sh_emiliana_coyam: {
    fact: "L’assemblaggio simbolo di Emiliana, all’avanguardia nell’agricoltura biologica e biodinamica. «Coyam» in lingua mapuche significa quercia.",
    quiz: [{ q: "Quale metodo di coltivazione si usa nei vigneti di Emiliana Coyam?", a: "Biologico e biodinamico", x: ["Coltura idroponica", "Uve geneticamente modificate", "Coltivazione in serra"] }],
  },
  sh_vik: {
    fact: "L’assemblaggio icona della cantina fondata dall’imprenditore norvegese Alexander Vik. La valle di Millahue, dove si trovano i vigneti, in lingua mapuche significa «terra d’oro».",
    quiz: [{ q: "Di quale paese è l’imprenditore Alexander Vik, fondatore della cantina che produce Vik?", a: "Norvegia", x: ["Svezia", "Danimarca", "Finlandia"] }],
  },
  sh_torres_santadigna: {
    fact: "Il vino simbolo della cantina cilena fondata a Curicó nel 1979 dalla famiglia spagnola Torres.",
    quiz: [{ q: "Di quale paese è la grande famiglia del vino Torres, produttrice di Miguel Torres Santa Digna?", a: "Spagna", x: ["Italia", "Francia", "Portogallo"] }],
  },
  sh_catena_adrianna: {
    fact: "Malbec della parcella più ricca di sassi di antico letto di fiume del vigneto Adrianna, a Gualtallary, a circa 1.500 metri d’altitudine.",
    quiz: [{ q: "Chi è l’«Adrianna» di Catena Zapata Adrianna Vineyard?", a: "La figlia più giovane di Nicolás Catena", x: ["La prima enologa della famiglia Catena", "La patrona del paese vicino al vigneto", "Una cantante di tango argentina"] }],
  },
  sh_catena_malbec: {
    fact: "Nicolás Catena ha portato il Malbec argentino alla fama mondiale aprendo vigneti d’alta quota, oltre i 1.000 metri.",
    quiz: [{ q: "In che anno Nicola Catena, capostipite della famiglia Catena, piantò il primo vigneto di Malbec a Mendoza?", a: "1902", x: ["1802", "1952", "1982"] }],
  },
  sh_catena_malbecargentino: {
    fact: "Il Malbec di Catena Zapata famoso per l’etichetta che racconta la storia del Malbec attraverso quattro donne.",
    quiz: [{ q: "Che cosa simboleggiano le quattro donne sull’etichetta di Catena Zapata Malbec Argentino?", a: "La storia del Malbec dalla Francia all’Argentina", x: ["Le quattro figure del tango", "Le quattro stagioni dell’Argentina", "I quattro santi patroni di Mendoza"] }],
  },
  sh_nicolascatenazapata: {
    fact: "L’assemblaggio di punta di Catena Zapata, prima annata 1997. Unisce Malbec al Cabernet Sauvignon.",
    quiz: [{ q: "Che cos’è «Zapata» in Nicolás Catena Zapata?", a: "Il cognome materno di Nicolás Catena", x: ["Il rivoluzionario messicano Emiliano Zapata", "Il paese dove si trova il vigneto", "Il paese italiano del nonno"] }],
  },
  sh_achavalferrer_altamira: {
    fact: "Malbec da vigneto singolo della cantina fondata nel 1998 da amici argentini e italiani. Nasce dal vigneto Altamira, con vecchie viti.",
    quiz: [{ q: "Da dove viene il nome Achával-Ferrer?", a: "Dai cognomi di due cofondatori", x: ["Dai nomi di due fiumi che attraversano il vigneto", "Dai nomi dei nonni del fondatore", "Dai nomi di due paesi del vigneto"] }],
  },
  sh_chevaldesandes: {
    fact: "Vino prodotto da un grande château di Saint-Émilion insieme a Terrazas de los Andes. Unendo Malbec e Cabernet Sauvignon, punta a essere il «grand cru delle Ande».",
    quiz: [{ q: "Quale prestigioso château di Bordeaux produce Cheval des Andes?", a: "Château Cheval Blanc", x: ["Château Lafite Rothschild", "Château Margaux", "Château Haut-Brion"] }],
  },
  sh_terrazas_reserva: {
    fact: "Cantina argentina di LVMH, nata dalla prima cantina che Moët & Chandon fondò fuori dalla Francia, nel 1959.",
    quiz: [{ q: "Quale idea esprime il nome Terrazas de los Andes (terrazze delle Ande)?", a: "Piantare ogni vitigno all’altitudine più adatta", x: ["Coltivare l’uva sommersa come in una risaia a terrazze", "Portare uve cilene oltre le Ande", "Produrre tante bottiglie quanti sono i gradini"] }],
  },
  sh_colome_malbec: {
    fact: "Una delle cantine più antiche d’Argentina, fondata nel 1831, coltiva alcuni dei vigneti più alti del mondo, oltre i 2.000 metri.",
    quiz: [{ q: "Di quale artista raccoglie esclusivamente le opere il museo all’interno della Bodega Colomé?", a: "James Turrell", x: ["Andy Warhol", "Yayoi Kusama", "Damien Hirst"] }],
  },
  sh_trapiche_oakcask: {
    fact: "Cantina simbolo dell’Argentina, aperta nel 1883, e marchio di vino argentino esportato in molti paesi.",
    quiz: [{ q: "Che cosa indica in origine in spagnolo «trapiche» di Trapiche Oak Cask Malbec?", a: "Un frantoio per spremere frutta o canna da zucchero", x: ["Un cesto per la vendemmia", "Il vento freddo delle Ande", "Una grotta per conservare il vino"] }],
  },
  sh_norton_reserva: {
    fact: "Cantina fondata nel 1895 da Edmund Norton, ingegnere inglese arrivato per costruire la ferrovia. Dal 1989 appartiene a una famiglia austriaca.",
    quiz: [{ q: "Qual è l’attività di famiglia degli austriaci che acquistarono Norton nel 1989?", a: "Il cristallo (Swarovski)", x: ["Il cioccolato", "Le bevande energetiche", "I pianoforti"] }],
  },
  sh_luigibosca_malbec: {
    fact: "Cantina di famiglia fondata nel 1901 dall’immigrato spagnolo Leoncio Arizu. È ancora gestita dalla famiglia Arizu.",
    quiz: [{ q: "Quale famiglia gestisce da generazioni Luigi Bosca?", a: "La famiglia Arizu", x: ["La famiglia Catena", "La famiglia Zuccardi", "La famiglia Chadwick"] }],
  },
  sh_zuccardi_concreto: {
    fact: "Malbec fermentato e affinato solo in vasche di cemento, senza botti, per esprimere fedelmente il terroir di Paraje Altamira.",
    quiz: [{ q: "Quale riconoscimento ha ottenuto per tre anni di fila dal 2019 la cantina della Valle de Uco di Zuccardi, produttrice di Concreto?", a: "Il primo posto nella classifica World’s Best Vineyards", x: ["Tre stelle Michelin", "Patrimonio mondiale UNESCO", "Il primo posto nel «Wine of the Year» di Wine Spectator"] }],
  },
  sh_alamos_malbec: {
    fact: "Il Malbec quotidiano della famiglia Catena. Il nome viene dai pioppi piantati come frangivento ai margini dei vigneti di Mendoza.",
    quiz: [{ q: "Che cosa significa «Alamos» di Alamos Malbec?", a: "I pioppi piantati come frangivento nel vigneto", x: ["L’acqua di disgelo delle Ande", "Una festa indigena della vendemmia", "Il paese natale del fondatore"] }],
  },
  sh_closdelossiete: {
    fact: "Nasce dai vigneti creati a Vista Flores, nella Valle de Uco, dal consulente enologo bordolese Michel Rolland insieme a investitori francesi.",
    quiz: [{ q: "Che cosa indica il «Siete» (sette) di Clos de los Siete?", a: "I sette investitori (cantine) che aderirono all’inizio", x: ["Le sette vette attorno al vigneto", "Sette vitigni", "Sette anni di affinamento"] }],
  },
  sh_elenemigo_malbec: {
    fact: "Marchio creato insieme da Alejandro Vigil, capo enologo di Catena Zapata, e dalla storica Adrianna Catena.",
    quiz: [{ q: "Che cosa significa in spagnolo «El Enemigo»?", a: "Il nemico", x: ["L’amico", "Il viandante", "Il fratello"] }],
  },
  sh_rutini_cabmalbec: {
    fact: "Assemblaggio di Cabernet e Malbec di una storica cantina di Mendoza fondata nel 1885 dall’immigrato italiano Felipe Rutini.",
    quiz: [{ q: "Da quale paese veniva Felipe Rutini, fondatore di Rutini?", a: "Italia", x: ["Spagna", "Francia", "Germania"] }],
  },
  sh_salentein_reserve: {
    fact: "Cantina pioniera dell’alta Valle de Uco, oltre i 1.000 metri. Al suo interno ospita il museo d’arte «Killka».",
    quiz: [{ q: "Di quale paese è Mijndert Pon, fondatore di Bodegas Salentein?", a: "Paesi Bassi", x: ["Belgio", "Danimarca", "Svizzera"] }],
  },
  sh_kaiken_ultra: {
    fact: "Malbec della cantina fondata nel 2002 a Mendoza, al di là delle Ande, da Aurelio Montes della cilena Montes.",
    quiz: [{ q: "Da che cosa deriva il nome «Kaiken» di Kaiken Ultra Malbec?", a: "Da un’oca selvatica della Patagonia che attraversa le Ande", x: ["Dal dio sole degli indigeni andini", "Dal vento caldo di Mendoza", "Dal cavallo del fondatore"] }],
  },
  sh_trivento_reserve: {
    fact: "Malbec della cantina fondata nel 1996 a Mendoza, in Argentina, dalla cilena Concha y Toro.",
    quiz: [{ q: "Che cosa significa «Trivento» di Trivento Reserve Malbec?", a: "I tre venti che soffiano sui vigneti di Mendoza", x: ["Tre fratelli fondatori", "Tre fiumi", "Tre vendemmie all’anno"] }],
  },
  sh_garzon_tannat: {
    fact: "Il Tannat, arrivato dal sud-ovest della Francia, è diventato il vitigno simbolo dell’Uruguay. Garzón ha creato i suoi vigneti su colline vicine all’Atlantico.",
    quiz: [{ q: "Quale celebre località balneare uruguaiana si trova vicino ai vigneti di Bodega Garzón Tannat?", a: "Punta del Este", x: ["Copacabana", "Mar del Plata", "Viña del Mar"] }],
  },
  sh_miolo_lote43: {
    fact: "Il vino simbolo del Vale dos Vinhedos, la prima indicazione d’origine del Brasile. Il nome viene dal numero del lotto del primo terreno acquistato dal fondatore.",
    quiz: [{ q: "Qual è l’origine della famiglia Miolo, produttrice di Lote 43?", a: "Immigrati italiani arrivati in Brasile a fine Ottocento", x: ["Nobili della corte portoghese", "Missionari luterani tedeschi", "Immigrati giapponesi"] }],
  },
  sh_lacetto_nebbiolo: {
    fact: "Cantina simbolo della Valle de Guadalupe, cuore del vino messicano. È particolarmente famosa per il Nebbiolo, vitigno italiano.",
    quiz: [{ q: "Da dove veniva Angelo Cetto, fondatore di L.A. Cetto?", a: "Dall’Italia", x: ["Dalla Spagna", "Dalla Francia", "Dalla Germania"] }],
  },
  sh_casamadero_3v: {
    fact: "Rosso che assembla tre vitigni, prodotto dalla cantina più antica del continente americano.",
    quiz: [{ q: "In che anno fu fondata Casa Madero, la cantina più antica delle Americhe, produttrice di 3V?", a: "1597", x: ["1697", "1797", "1897"] }],
  },
  sh_kanonkop_paulsauer: {
    fact: "L’assemblaggio bordolese simbolo del Sudafrica. Il nome viene da Paul Sauer, politico proprietario della fattoria Kanonkop.",
    quiz: [{ q: "Da dove viene il nome «Kanonkop» di Kanonkop Paul Sauer?", a: "Da una collina da cui si sparava un colpo di cannone all’arrivo delle navi", x: ["Da una fabbrica di cannoni della guerra anglo-boera", "Da acini tondi come palle di cannone", "Dal soprannome militare del primo proprietario"] }],
  },
  sh_kanonkop_pinotage: {
    fact: "Il vino simbolo di Kanonkop, grande nome del Pinotage, vitigno creato in Sudafrica. Fermenta in tini aperti, con follature manuali delle bucce.",
    quiz: [{ q: "Con quale vitigno fu incrociato il Pinot Nero nel 1925 per creare il Pinotage di Kanonkop?", a: "Cinsault (allora chiamato in Sudafrica «Hermitage»)", x: ["Syrah", "Merlot", "Gamay"] }],
  },
  sh_meerlust_rubicon: {
    fact: "L’assemblaggio bordolese di Meerlust, tenuta tramandata dalla famiglia Myburgh dal 1757. La prima annata è il 1980.",
    quiz: [{ q: "Quale significato racchiude il nome «Rubicon» di Meerlust Rubicon?", a: "Una decisione irrevocabile (Cesare che attraversa il Rubicone)", x: ["Il colore rosso rubino", "Il nome del fiume accanto al vigneto", "Il vezzeggiativo della figlia del fondatore"] }],
  },
  sh_kleinconstantia_vdc: {
    fact: "Nel 1986 ha fatto rinascere il leggendario vino dolce di Constantia, conteso dalle corti europee tra Settecento e Ottocento. È imbottigliato in una bottiglia da 500 ml ispirata a quelle antiche.",
    quiz: [
      { q: "Quale personaggio avrebbe bevuto con piacere il vino di Constantia, antenato del Vin de Constance, anche in esilio a Sant’Elena?", a: "Napoleone", x: ["Luigi XVI", "L’ammiraglio Nelson", "Bismarck"] },
      { q: "Quale scrittrice citò il vino di Constantia, antenato del Vin de Constance, nel romanzo «Ragione e sentimento»?", a: "Jane Austen", x: ["Charlotte Brontë", "George Eliot", "Virginia Woolf"] },
    ],
  },
  sh_sadie_columella: {
    fact: "Assemblaggio a base di Syrah che Eben Sadie ottiene da uve di tutto lo Swartland. Con la prima annata nel 2000 è diventato il simbolo dell’innovazione del vino sudafricano.",
    quiz: [{ q: "Da chi prende il nome Columella di Sadie Family?", a: "Da uno scrittore romano autore di un’opera sull’agricoltura", x: ["Dal capitano olandese che scoprì lo Swartland", "Dal nonno del fondatore", "Da un dio greco del vino"] }],
  },
  sh_boekenhoutskloof_cs: {
    fact: "Cantina di Franschhoek il cui nome in afrikaans significa «valle del faggio del Capo (boekenhout)».",
    quiz: [{ q: "Quali sette oggetti sono raffigurati in fila sull’etichetta di Boekenhoutskloof?", a: "Sedie", x: ["Grappoli d’uva", "Botti", "Bicchieri da vino"] }],
  },
  sh_rustenberg_jxm: {
    fact: "L’assemblaggio bordolese di Rustenberg, tenuta curata dalla famiglia Barlow dal 1941, con uve delle pendici del Simonsberg.",
    quiz: [{ q: "Chi era John X. Merriman, che dà il nome al John X Merriman di Rustenberg?", a: "L’ultimo primo ministro della Colonia del Capo, proprietario di questa fattoria", x: ["Il primo professore di enologia del Sudafrica", "Un capitano della Compagnia britannica delle Indie Orientali", "Il capitano della nazionale di rugby"] }],
  },
  sh_vergelegen_v: {
    fact: "Il rosso di punta della tenuta fondata nel 1700 dal governatore del Capo Willem Adriaan van der Stel.",
    quiz: [{ q: "Che cosa significa in olandese «Vergelegen» di Vergelegen V?", a: "Luogo lontano", x: ["Valle verde", "Collina del vento", "Fattoria del re"] }],
  },
  sh_hamiltonrussell_pn: {
    fact: "Una delle cantine più meridionali d’Africa, fondata nel 1975 da Tim Hamilton Russell in una fresca valle vicino al mare. Produce solo Pinot Nero e Chardonnay.",
    quiz: [{ q: "Che cosa significa «Hemel-en-Aarde», dove si trova il vigneto del Pinot Nero di Hamilton Russell?", a: "Cielo e terra", x: ["Mare e montagna", "Sole e luna", "Vento e pioggia"] }],
  },
  sh_mullineux_straw: {
    fact: "Vino dolce che i coniugi Chris e Andrea Mullineux producono con Chenin Blanc dello Swartland.",
    quiz: [{ q: "Come si trattano le uve per produrre il Mullineux Straw Wine?", a: "Si fanno appassire su stuoie di paglia per concentrarne gli zuccheri", x: ["Si lasciano gelare sulla pianta", "Si mettono in salamoia nell’acqua di mare", "Si interrano per passare l’inverno"] }],
  },
  sh_grahambeck_brut: {
    fact: "Il portabandiera del «Cap Classique», lo spumante sudafricano rifermentato in bottiglia come lo champagne.",
    quiz: [{ q: "In quale evento storico del 1994 si brindò con Graham Beck Brut?", a: "La festa per l’insediamento del presidente Nelson Mandela", x: ["Il matrimonio del principe di Galles", "La chiusura delle Olimpiadi di Sydney", "L’elezione di un papa"] }],
  },
  sh_kwv_cathedral: {
    fact: "Colosso del vino sudafricano nato nel 1918 come cooperativa di viticoltori. «Cathedral Cellar» prende il nome da una vecchia cantina con soffitto a volta come quello di una cattedrale.",
    quiz: [{ q: "Di che cosa è sigla «KWV» di KWV Cathedral Cellar?", a: "Della cooperativa dei viticoltori sudafricani", x: ["Di una società di esportazione del vino del Capo", "Di un’associazione reale del vino", "Di una banca del vino di Kimberley"] }],
  },
  sh_nederburg_winemasters: {
    fact: "Cantina storica di Paarl, fondata nel 1791. Grande produttore, ha guidato per decenni l’industria del vino sudafricana.",
    quiz: [{ q: "Quale grande evento del vino sudafricano ha avviato per la prima volta Nederburg nel 1975?", a: "L’asta del vino Nederburg", x: ["La maratona del vino di Città del Capo", "La festa della pigiatura", "Il treno del vino"] }],
  },
  sh_chocolateblock: {
    fact: "Assemblaggio a base di Syrah con Grenache, Cinsault, Cabernet Sauvignon e Viognier. Intenso e morbido, è tra i vini più popolari del Sudafrica.",
    quiz: [{ q: "Quale marchio di vino quotidiano produce anche la cantina di The Chocolate Block?", a: "Porcupine Ridge", x: ["Yellow Tail", "19 Crimes", "Barefoot"] }],
  },
  sh_warwick_trilogy: {
    fact: "L’assemblaggio bordolese di Warwick Estate, reso celebre da Norma Ratcliffe, una delle prime donne enologhe del Sudafrica.",
    quiz: [{ q: "Che coppa è la «Wedding Cup», simbolo di Warwick Estate, produttrice di Trilogy?", a: "Una coppa doppia da cui due persone devono bere insieme senza versare", x: ["Un bicchiere che gli sposi rompono insieme", "Una coppa ricavata da una vite centenaria", "Un calice di chiesa ispirato al Graal"] }],
  },
  sh_inniskillin_riesling: {
    fact: "Prodotto con Riesling vendemmiato ghiacciato nelle notti d’inverno, unisce a una dolcezza intensa l’acidità tipica del vitigno.",
    quiz: [{ q: "Chi fondò Inniskillin, produttrice del Riesling Icewine?", a: "Donald Ziraldo e Karl Kaiser", x: ["Andrew Peller e Gary Pillitteri", "Allan Jackson e Don Triggs", "Robert Mondavi e Philippe de Rothschild"] }],
  },
  sh_peller_vidal_icewine: {
    fact: "Icewine della cantina del Niagara di una grande azienda vinicola canadese fondata da Andrew Peller.",
    quiz: [{ q: "Qual era il paese natale di Andrew Peller, fondatore dell’azienda che produce Peller Estates Vidal Icewine?", a: "Ungheria", x: ["Germania", "Italia", "Polonia"] }],
  },
  sh_pillitteri_cf_icewine: {
    fact: "Icewine rosso ottenuto dal vitigno a bacca rossa Cabernet Franc. Pillitteri è una cantina di famiglia del Niagara particolarmente dedicata all’icewine.",
    quiz: [{ q: "Qual era la terra natale di Gary Pillitteri, fondatore di Pillitteri?", a: "La Sicilia", x: ["Creta", "Madeira", "L’Andalusia"] }],
  },
  sh_missionhill_oculus: {
    fact: "L’assemblaggio bordolese di punta di Mission Hill, cantina con un alto campanile sulle rive del lago Okanagan.",
    quiz: [{ q: "Quale celebre bevanda ha creato l’azienda fondata da Anthony von Mandl, proprietario di Mission Hill?", a: "White Claw (hard seltzer)", x: ["Red Bull", "Corona Extra", "Smirnoff Ice"] }],
  },
  sh_jacksontriggs_icewine: {
    fact: "Icewine di Vidal prodotto da una grande cantina di Niagara-on-the-Lake.",
    quiz: [{ q: "Da dove viene il nome «Jackson-Triggs» di Jackson-Triggs Vidal Icewine?", a: "Dai cognomi dei cofondatori Allan Jackson e Don Triggs", x: ["Dai nomi di due fiumi del Niagara", "Dai cognomi da nubili dei coniugi fondatori", "Dai cognomi dei due proprietari del primo vigneto"] }],
  },
  sh_mercian_koshu: {
    fact: "Il marchio simbolo del vino giapponese, gestito dal gruppo Kirin. Con il vitigno autoctono Koshu produce un bianco delicato e pulito.",
    quiz: [{ q: "In quale paese inviò due giovani a studiare enologia nel 1877 l’azienda da cui nasce Mercian, produttrice di Château Mercian Koshu?", a: "Francia", x: ["Germania", "Italia", "Stati Uniti"] }],
  },
  sh_grace_koshu: {
    fact: "Koshu di Grace Wine, aperta a Katsunuma nel 1923. È il portabandiera che ha portato il vino giapponese sulla scena mondiale.",
    quiz: [{ q: "Quale famiglia gestisce da generazioni Grace Wine, produttrice di Grace Koshu?", a: "La famiglia Misawa", x: ["La famiglia Suzuki", "La famiglia Sato", "La famiglia Toyoda"] }],
  },
  sh_suntory_tominooka: {
    fact: "Koshu della cantina Tomi no Oka, curata direttamente da Suntory su una collina di Yamanashi.",
    quiz: [{ q: "Quale montagna si vede nei giorni limpidi dalla collina della cantina Suntory Tomi no Oka?", a: "Il Fuji", x: ["L’Aso", "Il Tateyama", "L’Hakusan"] }],
  },
  sh_aoyun: {
    fact: "Assemblaggio a base di Cabernet Sauvignon che LVMH produce con uve di villaggi dello Yunnan, ai piedi dell’Himalaya, oltre i 2.000 metri. La prima annata è il 2013.",
    quiz: [
      { q: "Che cosa significa il nome Ao Yun (敖云)?", a: "Volare sopra le nuvole", x: ["Drago rosso", "Sorgente del cielo", "Montagna innevata"] },
      { q: "Quale montagna sacra del buddismo tibetano si erge vicino ai vigneti di Ao Yun?", a: "Il Meili Xueshan", x: ["L’Everest", "L’Annapurna", "Il Kailash"] },
    ],
  },
  sh_changyu_moser: {
    fact: "Château costruito ai piedi dei monti Helan, nel Ningxia, da Changyu, la prima cantina moderna della Cina, fondata nel 1892. È prodotto insieme al vinificatore austriaco Lenz Moser.",
    quiz: [
      { q: "Che cosa indica «XV» in Changyu Moser XV?", a: "Lenz Moser, quindicesima generazione della famiglia austriaca Moser", x: ["15 anni di affinamento", "La quindicesima annata", "Un assemblaggio di 15 vigneti"] },
      { q: "Chi fondò Changyu, produttrice del Moser XV, nel 1892?", a: "Il grande mercante della diaspora cinese Zhang Bishi (张弼士)", x: ["L’imperatore Guangxu della dinastia Qing", "Un missionario francese", "Un mercante giapponese"] },
    ],
  },
};

export default T;
