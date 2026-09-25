import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  ib_sorisanlorenzo: {
    fact: "Il primo vino da vigneto singolo di Gaja, uscito nel 1967. Per un periodo, con un piccolo saldo di Barbera, fu venduto come «Langhe Nebbiolo»; dall’annata 2013 è tornato Barbaresco.",
    quiz: [{ q: "Che cosa significa «Sorì» in dialetto piemontese, nel nome Gaja Sorì San Lorenzo?", a: "Collina ben soleggiata esposta a sud", x: ["Valle nebbiosa", "Sagrato della chiesa", "Vite vecchia"] }],
  },
  ib_monfortino: {
    fact: "Barolo Riserva che Giacomo Conterno ottiene da uve di Serralunga. Messo in commercio solo dopo molti anni in grandi botti di legno, è il vertice del Barolo tradizionalista.",
    quiz: [
      { q: "In quali anni si produce il Barolo Riserva Monfortino?", a: "Solo nelle annate eccezionali", x: ["Ogni anno, senza eccezioni", "Esattamente ogni due anni", "Solo negli anni bisestili"] },
      { q: "Quale vigneto di Serralunga acquistò Giovanni Conterno per le uve del Monfortino?", a: "Cascina Francia", x: ["Monprivato", "Brunate", "Cannubi"] },
    ],
  },
  ib_giacosa: {
    fact: "Barolo del vigneto Falletto, a Serralunga, acquistato direttamente da Bruno Giacosa, maestro del Nebbiolo che si era fatto un nome come négociant acquistando uve.",
    quiz: [{ q: "Di che colore è l’etichetta che Bruno Giacosa riserva alle Riserve delle annate migliori?", a: "Rossa", x: ["Nera", "Oro", "Blu"] }],
  },
  ib_bartolomascarello: {
    fact: "Simbolo dei tradizionalisti, fedele all’antica usanza di assemblare le uve di più vigneti in un solo Barolo. Dopo la morte di Bartolo, l’ha raccolto la figlia Maria Teresa.",
    quiz: [{ q: "Quale slogan scritto da Bartolo Mascarello su un’etichetta disegnata a mano fece scalpore?", a: "No Barrique, No Berlusconi", x: ["Terroir or Nothing", "Viva il Nebbiolo", "Slow Wine, Slow Life"] }],
  },
  ib_monprivato: {
    fact: "Il vino simbolo della famiglia Mascarello, che possiede quasi per intero il vigneto Monprivato a Castiglione Falletto. È considerato un Barolo tradizionalista elegante e profumato.",
    quiz: [{ q: "Quale Riserva produce Giuseppe Mascarello solo nelle buone annate dalla parcella migliore del Monprivato?", a: "Ca d’Morissio", x: ["Monfortino", "Bricco Rocche", "La Poja"] }],
  },
  ib_vietti: {
    fact: "Grande casa di Castiglione Falletto che, sotto la guida di Alfredo Currado, propose presto i Barolo da vigneto singolo. Nel 2016 è stata acquistata dalla famiglia americana Krause.",
    quiz: [{ q: "Quale vitigno bianco piemontese, quasi scomparso, fu salvato da Alfredo Currado di Vietti?", a: "Arneis", x: ["Cortese", "Moscato", "Timorasso"] }],
  },
  ib_piocesare: {
    fact: "Cantina di famiglia che vinifica ancora oggi nel centro storico di Alba, in una cantina dove restano le antiche mura romane. È gestita dai discendenti del fondatore.",
    quiz: [{ q: "In che anno Cesare Pio fondò Pio Cesare ad Alba?", a: "1881", x: ["1781", "1931", "1971"] }],
  },
  ib_marchesibarolo: {
    fact: "Cantina erede delle antiche cantine dei marchesi Falletti nel paese di Barolo. Si dice che proprio qui il Barolo divenne un rosso secco da lungo invecchiamento.",
    quiz: [{ q: "Quante botti di vino avrebbe inviato la marchesa Juliette Colbert Falletti al re Carlo Alberto, secondo la storia dei Marchesi di Barolo?", a: "325 botti (una al giorno, esclusa la Quaresima)", x: ["12 botti (una al mese)", "52 botti (una a settimana)", "1000 botti"] }],
  },
  ib_fontanafredda: {
    fact: "Cantina nata da una tenuta reale di Serralunga d’Alba. Fu il conte di Mirafiori, figlio del re e della sua amante, a lanciare davvero la produzione di vino.",
    quiz: [{ q: "Quale re acquistò la tenuta di Fontanafredda e la donò all’amata «Bela Rosin»?", a: "Vittorio Emanuele II", x: ["Umberto I", "Carlo Alberto", "Napoleone III"] }],
  },
  ib_scavino: {
    fact: "Cantina di famiglia di Castiglione Falletto. Con Barolo moderni affinati in piccole botti, fu protagonista negli anni ’80 e ’90 del movimento dei «Barolo Boys».",
    quiz: [{ q: "Quale vinificatore ha guidato Paolo Scavino rendendolo celebre per il Barolo moderno?", a: "Enrico Scavino", x: ["Elio Altare", "Roberto Voerzio", "Bruno Giacosa"] }],
  },
  ib_ceretto: {
    fact: "Grande casa di Alba cresciuta con i fratelli Bruno e Marcello Ceretto. Nel vigneto Brunate, a La Morra, sorge la variopinta «Cappella del Barolo» di proprietà della famiglia.",
    quiz: [{ q: "A quali artisti affidò la famiglia Ceretto la decorazione a colori vivaci della piccola cappella nel vigneto Brunate?", a: "Sol LeWitt e David Tremlett", x: ["Keith Haring e Andy Warhol", "Damien Hirst", "Jeff Koons"] }],
  },
  ib_altare: {
    fact: "Leader dei «Barolo Boys», che a La Morra introdusse macerazioni brevi e piccole botti nuove guidando il Barolo moderno. Questa scelta gli costò un duro scontro con il padre.",
    quiz: [{ q: "Che cosa distrusse con la motosega Elio Altare per imporre il suo nuovo metodo?", a: "Le vecchie botti grandi del padre", x: ["I vecchi alberi del vigneto", "Il tetto della cantina", "Un antico torchio"] }],
  },
  ib_voerzio: {
    fact: "Barolo da vigneto singolo di Roberto Voerzio, a La Morra. Cerequio è un celebre vigneto a cavallo del confine tra La Morra e Barolo.",
    quiz: [{ q: "Per quale pratica in vigna è famoso Roberto Voerzio?", a: "Un diradamento drastico dei grappoli per ridurre al minimo le rese", x: ["Vendemmia l’uva dopo averla congelata", "Irriga le viti ogni giorno", "Vendemmia solo a macchina"] }],
  },
  ib_produttori: {
    fact: "Cooperativa creata insieme dai viticoltori del paese di Barbaresco. Nelle buone annate produce a parte le Riserve di nove vigneti, tra cui Asili e Rabajà.",
    quiz: [{ q: "Chi fondò nel 1958, insieme ai contadini, i Produttori del Barbaresco?", a: "Il parroco del paese", x: ["Il re d’Italia", "Angelo Gaja", "Un mercante di vino inglese"] }],
  },
  ib_braida: {
    fact: "Il capolavoro di Giacomo Bologna, che trasformò la Barbera da semplice vino da tavola in un grande vino. Debuttò con l’annata 1982.",
    quiz: [{ q: "Quale novità, provata per la prima volta con il Bricco dell’Uccellone, fece parlare di Giacomo Bologna di Braida?", a: "L’affinamento della Barbera in piccole botti nuove (barrique)", x: ["Uno spumante di Barbera", "La vinificazione di uve appassite", "L’assemblaggio con uve bianche"] }],
  },
  ib_cascinetta: {
    fact: "Moscato d’Asti dolce e delicatamente frizzante, con circa il 5% di alcol. La fermentazione viene interrotta a metà per conservare la dolcezza e i profumi floreali dell’uva.",
    quiz: [{ q: "Come si chiama in Italia un vino leggermente mosso, come il Moscato d’Asti Cascinetta di Vietti?", a: "Frizzante", x: ["Passito", "Ripasso", "Recioto"] }],
  },
  ib_martiniasti: {
    fact: "Spumante dolce ottenuto facendo fermentare il Moscato in un’unica soluzione in grandi autoclavi, che trattengono le bollicine. Con circa il 7% di alcol è leggero.",
    quiz: [
      { q: "Per quale bevanda è famosa nel mondo Martini & Rossi, produttrice di Martini Asti?", a: "Il vermouth", x: ["La grappa", "Il limoncello", "La sambuca"] },
      { q: "In che anno Martini & Rossi, produttrice di Martini Asti, aprì a Torino?", a: "1863", x: ["1763", "1923", "1963"] },
    ],
  },
  ib_ganciaasti: {
    fact: "Pioniere dello spumante italiano con sede a Canelli, nell’Astigiano. Il fondatore Carlo Gancia è detto «il padre dello spumante italiano».",
    quiz: [{ q: "In quale città francese andò Carlo Gancia, fondatore di Gancia, per imparare a fare spumante?", a: "Reims", x: ["Bordeaux", "Digione", "Lione"] }],
  },
  ib_ornellaia: {
    fact: "Supertuscan da vitigni bordolesi delle colline costiere di Bolgheri. Dopo alcuni passaggi di proprietà, oggi appartiene alla famiglia Frescobaldi.",
    quiz: [
      { q: "Chi fondò l’Ornellaia nel 1981?", a: "Lodovico Antinori", x: ["Piero Antinori", "Mario Incisa della Rocchetta", "Angelo Gaja"] },
      { q: "Come si chiama il progetto con cui ogni anno un artista disegna un’etichetta speciale dell’Ornellaia?", a: "Vendemmia d’Artista", x: ["Arte in Bottiglia", "Biennale del Vino", "Galleria Bolgheri"] },
    ],
  },
  ib_masseto: {
    fact: "Uno dei rossi più cari d’Italia, solo Merlot da un unico vigneto sulle colline di Bolgheri. Debuttò con l’annata 1986 e oggi ha una cantina dedicata.",
    quiz: [{ q: "Qual è il terreno particolare del vigneto di Masseto?", a: "Argilla bluastra", x: ["Cenere vulcanica nera", "Calcare gessoso bianco", "Arenaria rossa"] }],
  },
  ib_tignanello: {
    fact: "Supertuscan del vigneto Tignanello della famiglia Antinori. Debuttò con l’annata 1971 e cambiò il corso del vino italiano.",
    quiz: [{ q: "Perché il Tignanello fu considerato rivoluzionario negli anni ’70?", a: "Affinò il Sangiovese in piccole botti e rinunciò alle uve bianche", x: ["Usò uve appassite per renderlo dolce", "Fu il primo con il tappo a vite", "Mescolò vino rosso a un bianco"] }],
  },
  ib_solaia: {
    fact: "Supertuscan che Antinori produce con base di Cabernet Sauvignon nel vigneto accanto a Tignanello. È uscito per la prima volta con l’annata 1978.",
    quiz: [
      { q: "Quale riconoscimento ottenne il Solaia 1997, primo vino italiano a riceverlo?", a: "Il primo posto nel «Wine of the Year» di Wine Spectator", x: ["Il primo 100 punti di Robert Parker", "La nomina a vino da messa ufficiale del Vaticano", "Il mandato di fornitore della corona britannica"] },
      { q: "Che cosa significa il nome Solaia?", a: "Luogo ben esposto al sole", x: ["Terra salmastra", "Albero solitario", "Vigna cinta da muri"] },
    ],
  },
  ib_guadoaltasso: {
    fact: "Il rosso simbolo della tenuta che la famiglia Antinori possiede a Bolgheri. Debuttò con l’annata 1990.",
    quiz: [{ q: "Che cosa significa il nome Guado al Tasso?", a: "Il guado dove passa il tasso", x: ["La collina della volpe", "La fonte del lupo", "Il bosco del cervo"] }],
  },
  ib_casanovadineri: {
    fact: "Cantina di famiglia fondata a Montalcino dalla famiglia Neri all’inizio degli anni ’70. Tenuta Nuova è un Brunello scuro e potente dai vigneti a sud.",
    quiz: [{ q: "Quale riconoscimento ottenne nel 2006 il Casanova di Neri Tenuta Nuova 2001?", a: "Il primo posto nel «Wine of the Year» di Wine Spectator", x: ["Un’onorificenza del Presidente della Repubblica", "Il primo premio della Biennale di Venezia", "La nomina a vino da messa ufficiale del Vaticano"] }],
  },
  ib_soldera: {
    fact: "Leggendario Sangiovese di Montalcino vinificato da Gianfranco Soldera in grandi botti di rovere di Slavonia. Uscito dal Consorzio del Brunello, oggi è venduto come IGT Toscana.",
    quiz: [{ q: "Che cosa accadde nel 2012 nella cantina di Case Basse?", a: "Un ex dipendente per vendetta aprì le botti e disperse diverse annate", x: ["Un’alluvione allagò la cantina", "Un fulmine provocò un incendio", "Furono rubate intere annate"] }],
  },
  ib_poggiodisotto: {
    fact: "Cantina di Castelnuovo dell’Abate, a sud-est di Montalcino. Con lunghe macerazioni e affinamento in grandi botti produce Brunello tradizionali e delicati.",
    quiz: [{ q: "Chi fondò Poggio di Sotto rendendolo famoso per il Brunello tradizionale?", a: "Piero Palmucci", x: ["Gianfranco Soldera", "Angelo Gaja", "Paolo De Marchi"] }],
  },
  ib_banfi: {
    fact: "Cantina che ha creato una tenuta immensa a sud di Montalcino. Al suo interno sorge il castello medievale di Poggio alle Mura.",
    quiz: [{ q: "Chi fondò Castello Banfi a Montalcino nel 1978?", a: "I fratelli Mariani, italoamericani", x: ["La famiglia Antinori", "I Rothschild francesi", "Un mercante di vino fornitore della corona inglese"] }],
  },
  ib_ilpoggione: {
    fact: "Una delle tenute più antiche della zona, a Sant’Angelo in Colle, a sud di Montalcino. Dalla fine dell’Ottocento è curata di generazione in generazione dalla stessa famiglia.",
    quiz: [{ q: "Quale famiglia possiede da generazioni Il Poggione?", a: "La famiglia Franceschi", x: ["La famiglia Biondi-Santi", "La famiglia Frescobaldi", "La famiglia Antinori"] }],
  },
  ib_coldorcia: {
    fact: "Grande tenuta di Montalcino che, come dice il nome, sorge su un colle affacciato sul fiume Orcia. Coltiva in biologico i suoi ampi vigneti.",
    quiz: [{ q: "Per quale bevanda era famosa la famiglia Marone Cinzano, che acquistò Col d’Orcia nel 1973?", a: "Il vermouth Cinzano", x: ["Il Campari", "L’Aperol", "Il Fernet-Branca"] }],
  },
  ib_castellodiama: {
    fact: "Grande nome del Chianti Classico nel piccolo borgo di Ama, a Gaiole in Chianti. È famoso anche per «L’Apparita», un Merlot.",
    quiz: [{ q: "Che cosa ha portato Castello di Ama nei suoi vigneti e nella villa, a partire dal 2000 circa, facendo parlare di sé?", a: "Installazioni di grandi artisti contemporanei", x: ["Un museo di un ordine cavalleresco medievale", "Un resort termale al vino", "Un grande impianto fotovoltaico"] }],
  },
  ib_flaccianello: {
    fact: "Il vino simbolo di Fontodi, Sangiovese al 100% prodotto a Panzano da Giovanni Manetti. Debuttò con l’annata 1981.",
    quiz: [{ q: "Come si chiama l’anfiteatro naturale di Panzano da cui proviene il Flaccianello?", a: "Conca d’Oro", x: ["Val d’Orcia", "Colli Senesi", "Monte Amiata"] }],
  },
  ib_fontalloro: {
    fact: "Sangiovese al 100% di Fèlsina, a Castelnuovo Berardenga. Usa uve di vigneti a cavallo tra Chianti Classico e Colli Senesi.",
    quiz: [{ q: "Chi acquistò la tenuta di Fèlsina nel 1966?", a: "Domenico Poggiali", x: ["Piero Antinori", "Sergio Manetti", "Gianfranco Soldera"] }],
  },
  ib_cepparello: {
    fact: "Vino che ha reso celebre Paolo De Marchi, Sangiovese al 100%. Nel 2022 la cantina è stata acquistata dal gruppo francese EPI, proprietario di Biondi-Santi.",
    quiz: [{ q: "Da dove viene il nome della cantina Isole e Olena?", a: "Dall’unione di due piccoli borghi, Isole e Olena", x: ["Dai nomi delle due figlie del fondatore", "Da un’isola e un olivo", "Dal nome di un antico monastero"] }],
  },
  ib_ducaleoro: {
    fact: "Il Chianti Classico di punta di Ruffino, con l’etichetta dorata. Ruffino è una storica casa toscana fondata nel 1877 da due cugini.",
    quiz: [{ q: "A chi si riferisce il «Ducale» (del duca) di Ruffino Riserva Ducale?", a: "Al duca d’Aosta, estimatore dei vini Ruffino", x: ["Al granduca de’ Medici", "Al duca di Milano", "Al doge di Venezia"] }],
  },
  ib_nipozzano: {
    fact: "Chianti Rufina Riserva dai vigneti attorno al castello medievale di Nipozzano, a Rufina, a est di Firenze. È il vino simbolo della famiglia Frescobaldi.",
    quiz: [{ q: "Da quanto tempo la famiglia Frescobaldi produce vino in Toscana?", a: "Da oltre 700 anni", x: ["Da circa 50 anni", "Da circa 150 anni", "Da circa 300 anni"] }],
  },
  ib_luce: {
    fact: "Vino di Montalcino che unisce Sangiovese e Merlot. Il nome significa «luce» e in etichetta c’è un sole raggiante.",
    quiz: [{ q: "Quali due famiglie crearono insieme Luce, uscito per la prima volta con l’annata 1993?", a: "Frescobaldi e Robert Mondavi", x: ["Antinori e Rothschild", "Gaja e Mondavi", "Frescobaldi e Rothschild"] }],
  },
  ib_serrenuove: {
    fact: "Il secondo vino dell’Ornellaia, uscito per la prima volta con l’annata 1997. È pensato per essere piacevole più giovane del vino principale.",
    quiz: [{ q: "Quale famiglia possiede oggi l’Ornellaia, che produce Le Serre Nuove?", a: "Frescobaldi", x: ["Antinori", "Gaja", "Marzotto"] }],
  },
  ib_pergoletorte: {
    fact: "Leggendario Sangiovese al 100% con cui Sergio Manetti abbandonò la denominazione Chianti Classico. Debuttò con l’annata 1977.",
    quiz: [{ q: "Quale immagine, diversa per ogni annata, compare sull’etichetta di Le Pergole Torte?", a: "Un ritratto femminile del pittore Alberto Manfredi", x: ["Un’incisione con una chiesa", "Un acquerello di grappoli", "Lo stemma di famiglia"] }],
  },
  ib_avignonesi: {
    fact: "Cantina simbolo di Montepulciano. Dal 2009 è guidata dalla belga Virginie Saverys, che l’ha convertita alla biodinamica.",
    quiz: [{ q: "Per quale vino da dessert toscano, da uve appassite e lungamente invecchiato, è particolarmente celebre Avignonesi?", a: "Vin Santo", x: ["Recioto", "Marsala", "Moscato d’Asti"] }],
  },
  ib_redigaffi: {
    fact: "Vino di culto, Merlot al 100%, prodotto da Tua Rita a Suvereto, sulla costa toscana. Debuttò con l’annata 1994.",
    quiz: [{ q: "Da dove viene il nome della cantina «Tua Rita», che produce Redigaffi?", a: "Dal nome della fondatrice, Rita Tua", x: ["Dal nome della chiesa del paese", "Da un’antica strada romana", "Da un fiume vicino"] }],
  },
  ib_villaantinori: {
    fact: "Rosso toscano sempreverde di Antinori, uscito per la prima volta nel 1928. In etichetta è raffigurata la villa della famiglia Antinori.",
    quiz: [{ q: "In che anno la famiglia Antinori entrò nell’Arte dei Vinattieri di Firenze, iniziando l’attività nel vino?", a: "1385", x: ["1685", "1885", "1935"] }],
  },
  ib_quintarelli: {
    fact: "Leggendario Amarone di Giuseppe Quintarelli, «il maestro del Veneto». Prodotto solo nelle buone annate, esce dopo un lungo affinamento in grandi botti.",
    quiz: [{ q: "Come si chiama il vino che Giuseppe Quintarelli produceva come un Amarone, con uve appassite di Cabernet Franc e altre?", a: "Alzero", x: ["La Poja", "Costasera", "Ripassa"] }],
  },
  ib_dalforno: {
    fact: "Amarone di culto, in stile estremamente concentrato, prodotto da Romano Dal Forno in Val d’Illasi, a est della Valpolicella. Affina a lungo in botti nuove.",
    quiz: [{ q: "Quale vinificatore fu il principale maestro di Romano Dal Forno in gioventù?", a: "Giuseppe Quintarelli", x: ["Angelo Gaja", "Gianfranco Soldera", "Edoardo Valentini"] }],
  },
  ib_allegrini: {
    fact: "Amarone prodotto di generazione in generazione dalla famiglia Allegrini a Fumane, nella Valpolicella Classica. È una grande casa che propose presto vini da vigneto singolo.",
    quiz: [{ q: "Come si chiama il celebre vino da vigneto singolo di Allegrini, Corvina al 100%?", a: "La Poja", x: ["Alzero", "Costasera", "Monprivato"] }],
  },
  ib_bertani: {
    fact: "Amarone tradizionalista famoso per il lungo affinamento prima dell’uscita. Bertani è tra i pionieri che iniziarono presto a imbottigliare e vendere l’Amarone.",
    quiz: [{ q: "In che anno i fratelli Bertani fondarono la loro cantina a Verona?", a: "1857", x: ["1757", "1907", "1957"] }],
  },
  ib_zenato: {
    fact: "L’Amarone di Zenato, con sede a sud del lago di Garda. Fondata nel 1960 da Sergio Zenato, la cantina è famosa anche per il Lugana bianco.",
    quiz: [{ q: "Come si chiama il vino che Zenato ottiene rifermentando la Valpolicella sulle vinacce rimaste dall’Amarone?", a: "Ripassa", x: ["La Poja", "Alzero", "Costasera"] }],
  },
  ib_tommasi: {
    fact: "Amarone prodotto di generazione in generazione dalla famiglia Tommasi a Pedemonte, in Valpolicella. Da oltre cent’anni l’azienda è guidata dalla famiglia.",
    quiz: [{ q: "Come si chiama il metodo, usato per l’Amarone di Tommasi, che lascia asciugare le uve per mesi per concentrarne gli zuccheri?", a: "Appassimento", x: ["Solera", "Charmat", "Botrytis"] }],
  },
  ib_santamargherita: {
    fact: "Nel 1961 lanciò una moda mondiale vinificando il Pinot Grigio in bianco, senza contatto con le bucce. L’azienda fu fondata nel 1935 dal conte Gaetano Marzotto.",
    quiz: [{ q: "A chi deve il nome Santa Margherita?", a: "Alla moglie del fondatore, il conte Marzotto", x: ["Alla patrona di Venezia", "Alla figlia maggiore del fondatore", "A una chiesa vicina"] }],
  },
  ib_mionetto: {
    fact: "Grande casa del Prosecco con sede a Valdobbiadene. Con il metodo Charmat, la seconda fermentazione in grandi autoclavi, esalta i profumi di frutta fresca.",
    quiz: [
      { q: "Qual è il colore simbolo dell’etichetta di Mionetto Prosecco Brut?", a: "Arancione", x: ["Nero", "Blu", "Rosa"] },
      { q: "In che anno Francesco Mionetto fondò Mionetto a Valdobbiadene?", a: "1887", x: ["1787", "1937", "1987"] },
    ],
  },
  ib_lamarca: {
    fact: "Marchio di una cooperativa che riunisce migliaia di viticoltori del Trevigiano. È uno dei Prosecco più venduti negli Stati Uniti.",
    quiz: [{ q: "Qual è il colore caratteristico dell’etichetta di La Marca Prosecco?", a: "Azzurro chiaro (sul blu Tiffany)", x: ["Arancione", "Nero", "Rosso scuro"] }],
  },
  ib_cartizze: {
    fact: "Prosecco di Cartizze, la collina più celebre di Valdobbiadene. La famiglia Bisol coltiva la vite in questa zona dal XVI secolo.",
    quiz: [{ q: "Quale famiglia, famosa per lo spumante trentino «Ferrari», acquistò Bisol nel 2014?", a: "La famiglia Lunelli", x: ["La famiglia Antinori", "La famiglia Marzotto", "La famiglia Frescobaldi"] }],
  },
  ib_ninofranco: {
    fact: "Il Prosecco simbolo di Nino Franco, cantina di famiglia di Valdobbiadene. Primo Franco, della terza generazione, è considerato colui che ha elevato la qualità del Prosecco.",
    quiz: [{ q: "In che anno aprì Nino Franco a Valdobbiadene?", a: "1919", x: ["1819", "1969", "1999"] }],
  },
  ib_tunina: {
    fact: "Il grande bianco d’assemblaggio friulano che Silvio Jermann ottiene da diversi vitigni bianchi. Uscito negli anni ’70, ha innalzato il prestigio dei bianchi italiani.",
    quiz: [{ q: "Quale Chardonnay di Jermann deve il nome a una canzone degli U2?", a: "Dreams", x: ["Vintage Tunina", "Terre Alte", "Rarità"] }],
  },
  ib_gravner: {
    fact: "Bianco ambrato che Josko Gravner, a Oslavia sul confine sloveno, ottiene macerando per mesi la Ribolla Gialla con le bucce. È considerato un pioniere degli «orange wine».",
    quiz: [{ q: "Quale contenitore per fermentazione e affinamento introdusse Josko Gravner, facendo scalpore?", a: "Le anfore georgiane interrate (qvevri)", x: ["Le autoclavi in acciaio inox", "Le uova di cemento", "Le botti di acacia"] }],
  },
  ib_terrealte: {
    fact: "Il bianco simbolo del Friuli, in cui Livio Felluga assembla tre vitigni delle colline di Rosazzo. Più invecchia, più guadagna in profondità.",
    quiz: [{ q: "Che cosa è raffigurato sulle etichette dei vini di Livio Felluga?", a: "Un’antica mappa delle colline vitate", x: ["Una gondola veneziana", "Lo stemma di famiglia con un leone", "Un contadino che vendemmia"] }],
  },
  ib_terlano: {
    fact: "Cooperativa dell’Alto Adige fondata nel 1893 dai viticoltori. È famosa per bianchi che restano freschi anche dopo decenni.",
    quiz: [{ q: "Come si chiama la rara serie che la Cantina Terlano affina oltre dieci anni sulle fecce prima di metterla in commercio?", a: "Rarità", x: ["Vin Santo", "Riserva Ducale", "Vecchio Samperi"] }],
  },
  ib_cadelbosco: {
    fact: "Lo spumante simbolo della Franciacorta, nato nella tenuta creata da Maurizio Zanella a sud del lago d’Iseo. È prodotto con rifermentazione in bottiglia, come lo champagne.",
    quiz: [
      { q: "Che cosa significa il nome Ca’ del Bosco?", a: "Casa nel bosco", x: ["Castello sulla collina", "Fattoria sul lago", "Chiesa di pietra"] },
      { q: "Quale scultore ha realizzato il grande cancello di bronzo all’ingresso di Ca’ del Bosco?", a: "Arnaldo Pomodoro", x: ["Alberto Giacometti", "Marino Marini", "Umberto Boccioni"] },
    ],
  },
  ib_bellavista: {
    fact: "La cuvée di base di una casa spumantistica simbolo della Franciacorta. Come dice il nome, si trova sulle colline di Erbusco, dove si apre una «bella vista».",
    quiz: [{ q: "Quale fondatore, proveniente dall’edilizia, creò Bellavista nel 1977?", a: "Vittorio Moretti", x: ["Maurizio Zanella", "Carlo Gancia", "Gaetano Marzotto"] }],
  },
  ib_planeta: {
    fact: "Uno dei primi vini simbolo della famiglia Planeta, protagonista della rinascita del vino siciliano negli anni ’90. Dimostrò che anche la Sicilia poteva produrre bianchi di livello mondiale.",
    quiz: [{ q: "Quale grande cooperativa siciliana ha guidato a lungo Diego Planeta, della famiglia Planeta?", a: "Settesoli", x: ["Donnafugata", "Regaleali", "Florio"] }],
  },
  ib_benrye: {
    fact: "Passito dolce da Zibibbo (Moscato d’Alessandria) appassito al sole sull’isola di Pantelleria, tra la Sicilia e la Tunisia.",
    quiz: [
      { q: "Che cosa significa in arabo «Ben Ryé»?", a: "Figlio del vento", x: ["Figlia del sole", "Dono del mare", "Gioiello dell’isola"] },
      { q: "Da quale romanzo viene «Donnafugata», la tenuta che dà il nome alla cantina?", a: "«Il Gattopardo» di Tomasi di Lampedusa", x: ["«I promessi sposi» di Manzoni", "«I Malavoglia» di Verga", "«Il nome della rosa» di Eco"] },
    ],
  },
  ib_rossodelconte: {
    fact: "Il rosso simbolo della famiglia Tasca d’Almerita, da Nero d’Avola della tenuta Regaleali, nell’entroterra siciliano.",
    quiz: [{ q: "In che anno la famiglia Tasca acquistò la tenuta di Regaleali, nell’entroterra siciliano?", a: "1830", x: ["1730", "1930", "1980"] }],
  },
  ib_debartoli: {
    fact: "Vino di Marco De Bartoli, che si batté per far rinascere il Marsala tradizionale di qualità quando era considerato un vino da cucina.",
    quiz: [{ q: "Come si chiama il leggendario vino di Marco De Bartoli, invecchiato con l’antico metodo «perpetuo» senza aggiunta di alcol?", a: "Vecchio Samperi", x: ["Rosso del Conte", "Ben Ryé", "Radici"] }],
  },
  ib_florio: {
    fact: "Casa simbolo del Marsala, il vino fortificato fatto conoscere al mondo dal mercante inglese John Woodhouse nel XVIII secolo. Ha immense cantine sul mare di Marsala.",
    quiz: [{ q: "Chi fondò le cantine Florio a Marsala nel 1833?", a: "Vincenzo Florio", x: ["John Woodhouse", "Benjamin Ingham", "Marco De Bartoli"] }],
  },
  ib_passopisciaro: {
    fact: "Rosso di Nerello Mascalese dai vigneti d’alta quota sul versante nord dell’Etna. È una delle cantine che hanno guidato il boom dei vini dell’Etna.",
    quiz: [{ q: "Quale cantina aveva creato in Toscana Andrea Franchetti prima di fondare Passopisciaro?", a: "Tenuta di Trinoro", x: ["Tenuta San Guido", "Montevertine", "Fontodi"] }],
  },
  ib_benanti: {
    fact: "Bianco di Carricante dal versante est dell’Etna. Il suolo vulcanico vicino al mare gli dà un gusto sapido e teso.",
    quiz: [{ q: "Qual è l’unico comune in cui si può produrre l’«Etna Bianco Superiore», come il Pietra Marina di Benanti?", a: "Milo", x: ["Randazzo", "Taormina", "Catania"] }],
  },
  ib_radici: {
    fact: "Il rosso simbolo di Mastroberardino, che salvò i vitigni autoctoni campani in via di estinzione dopo la guerra. Il Taurasi nel 1993 è stato la prima DOCG del Sud Italia.",
    quiz: [{ q: "In quale sito archeologico Mastroberardino ha fatto rivivere antichi vigneti con la soprintendenza, producendo il vino «Villa dei Misteri»?", a: "Pompei", x: ["Ercolano", "Paestum", "Ostia Antica"] }],
  },
  ib_feudi: {
    fact: "Bianco di Fiano, vitigno autoctono dell’Irpinia, nell’entroterra campano. Feudi di San Gregorio ha guidato la nuova ondata del vino del Sud Italia.",
    quiz: [{ q: "In che anno è stata fondata Feudi di San Gregorio?", a: "1986", x: ["1886", "1936", "2006"] }],
  },
  ib_es: {
    fact: "Rosso intenso che Gianfranco Fino e Simona Natale ottengono in Puglia da Primitivo di vecchi alberelli.",
    quiz: [{ q: "Dalla teoria di chi viene il nome «Es» di Gianfranco Fino?", a: "Freud", x: ["Jung", "Nietzsche", "Kant"] }],
  },
  ib_valentini: {
    fact: "Leggenda abruzzese che dal Trebbiano, vitigno considerato comune, ricava capolavori capaci di invecchiare decenni. È famosa per non rivelare quasi nulla dei suoi metodi.",
    quiz: [{ q: "Quale vinificatore rese leggendario Valentini imbottigliando solo una piccola parte delle uve migliori?", a: "Edoardo Valentini", x: ["Emidio Pepe", "Gianfranco Fino", "Angelo Gaja"] }],
  },
  ib_emidiopepe: {
    fact: "Cantina di famiglia fedele ai metodi antichi: gli acini vengono sgranati a mano e il vino affina in vasche di cemento. Conserva in cantina vecchie annate che mette in commercio poco alla volta.",
    quiz: [{ q: "In che anno Emidio Pepe produsse il suo primo vino in Abruzzo?", a: "1964", x: ["1904", "1934", "1994"] }],
  },
  ib_turriga: {
    fact: "Il rosso simbolo della Sardegna, prodotto dalla famiglia Argiolas nel sud dell’isola a base del vitigno autoctono Cannonau. Debuttò con l’annata 1988.",
    quiz: [{ q: "Quale enologo, detto «il padre dei Supertuscan», creò il Turriga insieme ad Argiolas?", a: "Giacomo Tachis", x: ["Michel Rolland", "Émile Peynaud", "Peter Sisseck"] }],
  },
  ib_chiarli: {
    fact: "Rosso frizzante da Lambrusco di Sorbara, vicino a Modena. Si distingue per il colore rubino chiaro e l’acidità vivace.",
    quiz: [{ q: "In che anno Cleto Chiarli iniziò a produrre Lambrusco a Modena?", a: "1860", x: ["1760", "1920", "1970"] }],
  },
  ib_valbuena: {
    fact: "L’altro rosso che Vega Sicilia produce nella stessa tenuta dell’Único. Affinato più brevemente, esce un po’ prima.",
    quiz: [{ q: "Che cosa indica il «5» di Valbuena 5°?", a: "Che esce nel quinto anno dopo la vendemmia", x: ["Che assembla cinque vitigni", "Che usa uve di viti giovani di 5 anni", "Che usa solo uve della quinta raccolta"] }],
  },
  ib_pingus: {
    fact: "Vino di culto spagnolo che il danese Peter Sisseck ottiene da vecchissime viti di Tempranillo. Dalla prima annata, il 1995, ha raccolto consensi in tutto il mondo.",
    quiz: [{ q: "Da dove viene il nome Pingus?", a: "Dal soprannome d’infanzia di Peter Sisseck", x: ["Dal fiume che scorre accanto al vigneto", "Dal nome di un antico monastero", "Dallo spagnolo per «piccolo gioiello»"] }],
  },
  ib_florpingus: {
    fact: "Il vino fratello di Pingus, fatto dalle stesse mani. È prodotto con Tempranillo di vecchie viti di diversi paesi.",
    quiz: [{ q: "Quale vinificatore di origine danese produce Flor de Pingus?", a: "Peter Sisseck", x: ["Álvaro Palacios", "Mariano García", "René Barbier"] }],
  },
  ib_pesquera: {
    fact: "Cantina fondata negli anni ’70 da Alejandro Fernández a Pesquera de Duero. È considerata la protagonista che ha fatto conoscere al mondo la Ribera del Duero.",
    quiz: [{ q: "A quale vino Robert Parker paragonò il Tinto Pesquera?", a: "Al Pétrus di Bordeaux", x: ["Alla Romanée-Conti", "Allo Château d’Yquem", "Al Sassicaia"] }],
  },
  ib_alion: {
    fact: "Cantina sorella fondata da Vega Sicilia all’inizio degli anni ’90. Il Tempranillo affina in botti nuove di rovere francese, per un gusto più moderno.",
    quiz: [{ q: "Quale famiglia possiede Vega Sicilia e Alión dagli anni ’80?", a: "La famiglia Álvarez", x: ["La famiglia Fernández", "La famiglia Muga", "La famiglia Torres"] }],
  },
  ib_aalto: {
    fact: "Astro nascente della Ribera del Duero, fondato nel 1999. Da vecchie viti di Tempranillo di diversi paesi nasce un rosso potente.",
    quiz: [{ q: "Chi fondò Aalto dopo essere stato per quasi 30 anni l’enologo di Vega Sicilia?", a: "Mariano García", x: ["Peter Sisseck", "Alejandro Fernández", "Álvaro Palacios"] }],
  },
  ib_emiliomoro: {
    fact: "Il rosso simbolo della famiglia Moro, che coltiva la vite da generazioni a Pesquera de Duero, nella Ribera del Duero.",
    quiz: [{ q: "Con quale nome locale si chiama il Tempranillo nella Ribera del Duero, zona di Emilio Moro?", a: "Tinto Fino", x: ["Cencibel", "Ull de Llebre", "Tinta Roriz"] }],
  },
  ib_protos: {
    fact: "La prima cantina della Ribera del Duero, fondata nel 1927 da 11 viticoltori di Peñafiel. Il vino affina in gallerie scavate sotto il castello di Peñafiel.",
    quiz: [
      { q: "Che cosa significa il nome Protos?", a: "«Primo» in greco", x: ["«Mura» in latino", "«Riva del fiume» in spagnolo", "«Vigneto» in arabo"] },
      { q: "Quale architetto britannico ha progettato la nuova cantina di Protos?", a: "Richard Rogers", x: ["Norman Foster", "Zaha Hadid", "Frank Gehry"] },
    ],
  },
  ib_castilloygay: {
    fact: "Il vino di punta di Marqués de Murrieta, prodotto solo nelle buone annate. La storia comincia nel 1852 nella tenuta di Ygay, vicino a Logroño.",
    quiz: [{ q: "Chi fondò Marqués de Murrieta portando nella Rioja i metodi di vinificazione bordolesi?", a: "Luciano de Murrieta", x: ["Alejandro Fernández", "Rafael López de Heredia", "Enrique Forner"] }],
  },
  ib_rioja904: {
    fact: "Il capolavoro di La Rioja Alta, fondata nel 1890 da cinque famiglie accanto alla stazione di Haro. È in stile tradizionale, con lungo affinamento in botti di rovere americano.",
    quiz: [{ q: "Che cosa indica il «904» di Gran Reserva 904?", a: "La fusione del 1904 con la bodega Ardanza", x: ["Che se ne producono solo 904 botti", "Un vigneto a 904 metri d’altitudine", "904 giorni di affinamento"] }],
  },
  ib_tondonia: {
    fact: "Il vino simbolo di López de Heredia, fondata ad Haro nel 1877. Con il lungo affinamento in botte regge per decenni ed è l’emblema della Rioja tradizionale.",
    quiz: [{ q: "Quale architetto ha progettato il padiglione per i visitatori di López de Heredia?", a: "Zaha Hadid", x: ["Frank Gehry", "Santiago Calatrava", "Richard Rogers"] }],
  },
  ib_cvneimperial: {
    fact: "Il vino di punta di CVNE, fondata nel 1879 accanto alla stazione di Haro. L’annata 2004 si è classificata al primo posto nel «Wine of the Year» di Wine Spectator.",
    quiz: [{ q: "Di che cosa è la sigla CVNE?", a: "Compañía Vinícola del Norte de España", x: ["Confraternita reale del vino di Castiglia", "Unione delle bodegas della Rioja", "Le iniziali dei quattro fondatori"] }],
  },
  ib_pradoenea: {
    fact: "La Gran Reserva di punta di Muga, prodotta solo nelle buone annate. Esce dopo un lungo affinamento in botte e un ulteriore affinamento in bottiglia.",
    quiz: [{ q: "Che cosa ha di speciale la bodega Muga?", a: "Ha una propria bottaia dove costruisce le botti", x: ["Affina tutti i vini in anfore di terracotta", "Trasporta l’uva in elicottero", "Ha una centrale idroelettrica sotterranea"] }],
  },
  ib_torremuga: {
    fact: "Rioja in stile moderno che Muga ha presentato con l’annata 1991. Si distingue per il colore scuro, il frutto generoso e il rovere francese nuovo.",
    quiz: [{ q: "Quale coppia fondò la bodega Muga ad Haro nel 1932?", a: "Isaac Muga e Aurora Caño", x: ["Alejandro Fernández ed Esperanza Rivera", "Mario Rotllant e Carmen Daurella", "Joan Juvé e Teresa Camps"] }],
  },
  ib_caceres: {
    fact: "Cantina fondata a Cenicero nel 1970 da Enrique Forner. Introdusse metodi bordolesi e propose una Rioja dal frutto vivo.",
    quiz: [{ q: "Quale enologo francese consigliò Marqués de Cáceres nell’introdurre i metodi bordolesi?", a: "Émile Peynaud", x: ["Michel Rolland", "Stéphane Derenoncourt", "Denis Dubourdieu"] }],
  },
  ib_contino: {
    fact: "Rioja da una tenuta in un’ansa dell’Ebro vicino a Laguardia. Fu fondata negli anni ’70 da CVNE insieme alla famiglia proprietaria dell’antica tenuta.",
    quiz: [{ q: "Quale tipo di vino si considera abbia introdotto Contino nella Rioja?", a: "Il vino di una sola tenuta (single estate)", x: ["Il primo spumante della Rioja", "Il primo vino dolce della Rioja", "Il primo rosato della Rioja"] }],
  },
  ib_remirez: {
    fact: "Cantina fondata da Fernando Remírez de Ganuza a Samaniego, nella Rioja Alavesa. Seleziona con cura le uve di piccoli vecchi vigneti.",
    quiz: [{ q: "Quale parte del grappolo usa Remírez de Ganuza per la sua Reserva?", a: "Solo la parte superiore del grappolo (le spalle)", x: ["Solo la punta del grappolo", "Il grappolo intero con i raspi", "Solo gli acini maturati per ultimi"] }],
  },
  ib_roda: {
    fact: "La Reserva simbolo di Roda, astro nascente del quartiere della stazione di Haro. È prodotta con uve di vecchie viti di Tempranillo.",
    quiz: [{ q: "Da dove viene il nome Roda?", a: "Dalle iniziali dei coniugi fondatori Rotllant e Daurella", x: ["Dallo spagnolo per «ruota»", "Dal paese del vigneto", "Da un fiume vicino"] }],
  },
  ib_artadi: {
    fact: "Tempranillo che Juan Carlos López de Lacalle ottiene da un unico piccolo vigneto di Laguardia. È considerato uno dei migliori vini da vigneto singolo di Spagna.",
    quiz: [{ q: "Quale decisione presa da Artadi nel 2015 fece scalpore?", a: "Uscire dalla denominazione d’origine Rioja (DOCa)", x: ["Acquistare uno château francese", "Ripiantare tutti i vigneti a uve bianche", "Adottare il tappo a corona al posto del sughero"] }],
  },
  ib_campoviejo: {
    fact: "Nato a Logroño nel 1959, è diventato uno dei marchi di Rioja più venduti al mondo. È familiare per le etichette colorate.",
    quiz: [{ q: "Che cosa significa il nome Campo Viejo?", a: "Campo vecchio", x: ["Castello nuovo", "Collina rossa", "Vecchio cavaliere"] }],
  },
  ib_faustino: {
    fact: "Gran Reserva della Rioja riconoscibile al primo sguardo per la bottiglia opaca, come smerigliata. È il vino simbolo della famiglia Faustino, attiva dal 1861.",
    quiz: [{ q: "Quale pittore dipinse il ritratto che compare sull’etichetta di Faustino I?", a: "Rembrandt", x: ["Velázquez", "Goya", "El Greco"] }],
  },
  ib_juangil: {
    fact: "Rosso intenso di Monastrell cresciuto sotto il sole cocente di Jumilla, nel sud-est della Spagna. Per l’etichetta argentata è detto anche «Silver Label».",
    quiz: [{ q: "Che cosa indicano i «12 meses» di Juan Gil?", a: "12 mesi di affinamento in botte", x: ["Viti di 12 mesi", "Uscita 12 mesi dopo la vendemmia", "Uve di 12 vigneti diversi"] }],
  },
  ib_ermita: {
    fact: "Uno dei vini più cari di Spagna, da vecchie viti di Garnacha sui ripidi pendii di ardesia (llicorella) di Gratallops.",
    quiz: [{ q: "Come si chiama la famiglia vinicola della Rioja in cui è nato e cresciuto Álvaro Palacios?", a: "Palacios Remondo", x: ["Marqués de Riscal", "Vega Sicilia", "López de Heredia"] }],
  },
  ib_closmogador: {
    fact: "Cantina fondata da uno dei pionieri che alla fine degli anni ’80 arrivarono nel decaduto Priorat e lo fecero rinascere. È prodotta con vecchie Garnacha e Cariñena.",
    quiz: [{ q: "Chi fondò Clos Mogador guidando la rinascita del Priorat?", a: "René Barbier", x: ["Peter Sisseck", "Mariano García", "Alejandro Fernández"] }],
  },
  ib_closerasmus: {
    fact: "Vino di culto del Priorat, a base di Garnacha dai ripidi terrazzamenti di Gratallops. La produzione è minima.",
    quiz: [{ q: "Quale vinificatrice ha fondato Clos Erasmus?", a: "Daphne Glorian", x: ["Marisol Bueno", "Virginie Saverys", "Maria Teresa Mascarello"] }],
  },
  ib_masplana: {
    fact: "Il capolavoro di Torres, Cabernet Sauvignon di un vigneto del Penedès prodotto da Miguel A. Torres. Ha mostrato al mondo il potenziale dei rossi spagnoli.",
    quiz: [
      { q: "Che risultato ottenne l’annata 1970 alle «Olimpiadi del vino» di Parigi del 1979?", a: "Il primo posto, davanti ai grandi nomi di Bordeaux", x: ["Il secondo posto dietro Latour", "La squalifica per sospetta frode", "Il primo posto tra i bianchi"] },
      { q: "Qual era il nome precedente di Torres Mas La Plana?", a: "Gran Coronas Black Label", x: ["Sangre de Toro Reserva", "Viña Sol Gran Reserva", "Torres Imperial"] },
    ],
  },
  ib_sangredetoro: {
    fact: "Il rosso sempreverde di Torres, uscito per la prima volta nel 1954. Da Garnacha e Cariñena, è morbido e ricco di frutto.",
    quiz: [
      { q: "Che cosa è appeso al collo della bottiglia di Sangre de Toro?", a: "Un piccolo toro di plastica", x: ["Un nastro rosso", "Un minuscolo cappello da torero", "Un ciondolo di sughero"] },
      { q: "Che cosa significa il nome Sangre de Toro?", a: "Sangue di toro", x: ["Sole rosso", "Cuore del torero", "Terra santa"] },
    ],
  },
  ib_numanthia: {
    fact: "Rosso potente da vecchie viti di Tinta de Toro che, grazie ai terreni sabbiosi, resistettero alla fillossera.",
    quiz: [
      { q: "Da che cosa prende il nome Numanthia?", a: "Dall’antica città di Numanzia, che resistette ai romani fino all’ultimo", x: ["Dal leggendario re romano Numa", "Da una fortezza dei crociati", "Dalla capitale di un regno moresco"] },
      { q: "Quale gruppo acquistò Numanthia nel 2008?", a: "LVMH (Moët Hennessy)", x: ["Pernod Ricard", "Kering", "E&J Gallo"] },
    ],
  },
  ib_senorans: {
    fact: "Grande casa di Albariño creata da Marisol Bueno nella Val do Salnés. È considerata un bianco simbolo delle Rías Baixas.",
    quiz: [{ q: "Che cosa significa «Pazo» in Pazo de Señoráns?", a: "Un’antica dimora nobiliare della Galizia", x: ["Una collina vitata", "Un magazzino portuale", "Il giardino di un monastero"] }],
  },
  ib_martincodax: {
    fact: "Albariño della cantina fondata nel 1986 dai viticoltori della zona di Cambados. Le uve cresciute alla brezza dell’Atlantico gli danno un gusto fresco.",
    quiz: [{ q: "Da chi prende il nome Martín Códax?", a: "Da un trovatore galiziano medievale", x: ["Da un capitano dell’epoca delle grandi esplorazioni", "Da un re di Castiglia", "Dal contadino che fondò la cantina"] }],
  },
  ib_codorniu: {
    fact: "Codorníu è la casa dove nel 1872 Josep Raventós produsse il primo Cava con il metodo champenoise. Anna, con una parte di Chardonnay, ha un gusto morbido.",
    quiz: [
      { q: "Chi era Anna, che dà il nome ad Anna de Codorníu?", a: "L’ereditiera della famiglia Codorníu che sposò un Raventós", x: ["La patrona della Catalogna", "Una regina di Spagna", "La prima nipote del fondatore"] },
      { q: "Quale architetto del modernismo catalano progettò le cantine di Codorníu?", a: "Josep Puig i Cadafalch", x: ["Antoni Gaudí", "Ricardo Bofill", "Rafael Moneo"] },
    ],
  },
  ib_juvecamps: {
    fact: "Il Cava millesimato simbolo di una casa di famiglia di Sant Sadurní d’Anoia. È un brut nature, senza zuccheri aggiunti.",
    quiz: [{ q: "Da dove viene il nome Juvé & Camps?", a: "Dai cognomi dei coniugi fondatori Joan Juvé e Teresa Camps", x: ["Dai nomi di due paesi", "Dai soprannomi di due amici soci", "Dai nomi di due vigneti"] }],
  },
  ib_gramona: {
    fact: "Lo spumante da lungo invecchiamento simbolo di Gramona, affinato per anni sui lieviti. Si distingue per la forza e la profondità date dallo Xarel·lo.",
    quiz: [{ q: "Con quale nome ha creato Gramona, insieme ad altri produttori, una nuova denominazione di spumante dopo aver lasciato il Cava nel 2019?", a: "Corpinnat", x: ["Clàssic Penedès", "Franciacorta", "Crémant de Catalogne"] }],
  },
  ib_bristolcream: {
    fact: "Il cream sherry di Harveys, nata a Bristol, in Inghilterra, nel 1796. Assemblando diversi sherry ottiene un gusto dolce e morbido.",
    quiz: [
      { q: "Da quale frase nasce il nome Harveys Bristol Cream?", a: "Una signora disse: «Se il Bristol Milk è latte, questo è panna»", x: ["Da una latteria del porto di Bristol", "Dal soprannome della figlia del fondatore", "Da un titolo concesso dalla regina"] },
      { q: "Qual è il colore simbolo della bottiglia di Harveys Bristol Cream?", a: "Blu scuro", x: ["Trasparente", "Verde scuro", "Nero"] },
    ],
  },
  ib_lustau: {
    fact: "Sherry dolce che unisce Oloroso e Pedro Ximénez, affinato nel punto più caldo e umido della cantina.",
    quiz: [
      { q: "Da dove viene il nome «East India Solera»?", a: "Riproduce lo sherry che maturava nelle navi in viaggio verso le Indie Orientali", x: ["Da uno sherry con spezie indiane", "Da una cantina fondata dalla Compagnia delle Indie Orientali", "Da uno sherry fatto con uve indiane"] },
      { q: "Chi è l’«almacenista», i cui sherry Lustau ha imbottigliato e fatto conoscere?", a: "Un piccolo custode che si limita a invecchiare lo sherry", x: ["Un marinaio che trasportava lo sherry", "Un maestro che coltiva il flor", "Un artigiano del sughero"] },
    ],
  },
  ib_inocente: {
    fact: "Raro Fino fermentato in botte con uve di un unico vigneto. Il lungo affinamento sotto il flor gli dà un gusto profondo.",
    quiz: [{ q: "Da quale celebre vigneto (pago) di Jerez vengono le uve di Valdespino Inocente?", a: "Macharnudo", x: ["Balbaína", "Añina", "Carrascal"] }],
  },
  ib_osborne: {
    fact: "Fino di Osborne, a El Puerto de Santa María sulla costa atlantica. Affinato sotto il flor, è leggero e sapido.",
    quiz: [
      { q: "Che forma ha la gigantesca insegna di Osborne lungo le strade spagnole?", a: "Un toro nero", x: ["Una ballerina di flamenco", "Un grappolo d’oro", "Un cavallo bianco"] },
      { q: "Da quale paese veniva Thomas Osborne Mann, che fondò Osborne nel 1772?", a: "Inghilterra", x: ["Francia", "Paesi Bassi", "Italia"] },
    ],
  },
  ib_noe: {
    fact: "Sherry da dessert nero e denso, da uve Pedro Ximénez appassite al sole e invecchiato per moltissimi anni.",
    quiz: [{ q: "Che cosa garantisce la sigla «VORS» su uno sherry come Noé di González Byass?", a: "Uno sherry molto vecchio, con età media oltre i 30 anni", x: ["Uno sherry millesimato di una sola vendemmia", "Uno sherry con certificazione biologica", "Uno sherry da uve botritizzate"] }],
  },
  ib_laguita: {
    fact: "Manzanilla prodotta solo a Sanlúcar de Barrameda, alla foce del Guadalquivir. Grazie alla brezza marina il flor cresce spesso e dà un gusto sapido.",
    quiz: [{ q: "Da quale parola gergale deriva il nome La Guita?", a: "Contanti (soldi)", x: ["Chitarra", "Brezza marina", "Botticella"] }],
  },
  ib_alvear: {
    fact: "Vino dolce da Pedro Ximénez appassito al sole, prodotto da Alvear, grande casa di Montilla-Moriles a sud di Cordova.",
    quiz: [{ q: "Che cosa indica il «1927» di Alvear PX Solera 1927?", a: "L’anno in cui è stata avviata questa solera", x: ["L’anno di vendemmia", "L’anno di fondazione di Alvear", "L’anno di imbottigliamento"] }],
  },
  ib_lancers: {
    fact: "Rosé portoghese nato nel 1944 pensando al mercato americano. È famoso per la bottiglia opaca che sembra una giara di ceramica.",
    quiz: [{ q: "Quale quadro di Velázquez ispirò il nome Lancers?", a: "La resa di Breda (Le lance)", x: ["Las Meninas", "Le filatrici", "Il trionfo di Bacco"] }],
  },
  ib_barcavelha: {
    fact: "Vino leggendario che nel Douro, terra del Porto, aprì la strada ai grandi rossi non fortificati. Prodotto per la prima volta nel 1952, esce solo nelle annate eccezionali.",
    quiz: [
      { q: "Quale enologo creò il Barca Velha?", a: "Fernando Nicolau de Almeida", x: ["Dirk Niepoort", "José Maria da Fonseca", "Adriano Ramos Pinto"] },
      { q: "Che cosa significa il nome Barca Velha?", a: "Vecchia barca", x: ["Vecchio contadino", "Fiume azzurro", "Prima vendemmia"] },
    ],
  },
  ib_valemeao: {
    fact: "Tenuta in un’ampia ansa del fiume nel Douro Superior. Per molto tempo le uve del Barca Velha sono venute da qui.",
    quiz: [{ q: "Quale leggendaria donna del Douro creò Quinta do Vale Meão nel 1877?", a: "Dona Antónia Ferreira", x: ["Juliette Colbert Falletti", "Marisol Bueno", "Anna de Codorníu"] }],
  },
  ib_crasto: {
    fact: "Rosso da una vecchia vigna, dove crescono mescolati molti vitigni autoctoni, nella tenuta della famiglia Roquette sulle rive del Douro.",
    quiz: [{ q: "Che cosa è famoso come angolo fotografico a Quinta do Crasto?", a: "La piscina a sfioro affacciata sul Douro", x: ["Una funivia sopra i vigneti", "Una cantina galleggiante sul fiume", "Un belvedere sulle mura medievali"] }],
  },
  ib_esporao: {
    fact: "Il rosso simbolo di Herdade do Esporão, vasta tenuta dell’Alentejo, nel sud del Portogallo. All’interno della tenuta sorge una torre medievale.",
    quiz: [{ q: "Qual è la particolarità dell’etichetta di Esporão Reserva?", a: "Cambia ogni anno con l’opera di un pittore diverso", x: ["Porta sempre lo stesso stemma di famiglia", "È incisa direttamente sulla bottiglia", "È fatta di corteccia di sughero"] }],
  },
  ib_peramanca: {
    fact: "Il miglior rosso dell’Alentejo, messo in commercio solo nelle annate eccezionali dalla Fondazione Eugénio de Almeida di Évora.",
    quiz: [
      { q: "Che cosa significa l’espressione da cui deriva il nome Pêra-Manca?", a: "Pietra che oscilla", x: ["Frutteto di pere", "Monaco zoppo", "Torre bianca"] },
      { q: "Secondo la leggenda, su quale viaggio fu imbarcato il Pêra-Manca nel 1500?", a: "Il viaggio di Cabral che scoprì il Brasile", x: ["La rotta per l’India di Vasco da Gama", "Il giro del mondo di Magellano", "Il primo viaggio di Colombo"] },
    ],
  },
  ib_casalgarcia: {
    fact: "Bianco leggero e fresco del Portogallo settentrionale, uscito per la prima volta nel 1939. Con una lieve frizzantezza e poco alcol, si beve con facilità.",
    quiz: [{ q: "Che cosa significa «Verde» nel Vinho Verde, la denominazione di Casal Garcia?", a: "Vino giovane e fresco", x: ["È fatto con uve verdi", "È in bottiglia verde", "Ha profumo di alghe"] }],
  },
  ib_taylors20: {
    fact: "Tawny ossidato lentamente per anni in piccole botti, che ne ricava un colore ambrato e profumi di frutta secca e caramello.",
    quiz: [{ q: "Che cosa indicano i «20 anni» del Taylor’s 20 Year Old Tawny Port?", a: "L’età media di invecchiamento dell’assemblaggio di più annate", x: ["Un Porto di una sola annata di esattamente 20 anni fa", "Uve di viti di 20 anni", "20 anni di affinamento in bottiglia"] }],
  },
  ib_sixgrapes: {
    fact: "Reserve Ruby da uve delle stesse quinte usate per i Vintage. Con il suo frutto intenso è amato come Porto d’ingresso.",
    quiz: [{ q: "Da dove viene il nome Graham’s Six Grapes?", a: "Dal simbolo dei sei grappoli che segnava i Porto di qualità Vintage", x: ["Dall’assemblaggio di sei vitigni", "Dall’assemblaggio di sei annate", "Dai sei figli del fondatore"] }],
  },
  ib_grahamsvintage: {
    fact: "Il Vintage Port di Graham’s, «dichiarato» solo nelle annate eccezionali. Si basa sulle uve della Quinta dos Malvedos, nel Douro.",
    quiz: [
      { q: "Di che cosa si occupavano in origine i fratelli Graham, che fondarono Graham’s nel 1820?", a: "Commercio di tessuti", x: ["Trasporti marittimi", "Banca", "Produzione di sughero"] },
      { q: "Quale famiglia del Porto possiede Graham’s dal 1970?", a: "La famiglia Symington", x: ["La famiglia Sandeman", "La famiglia Niepoort", "La famiglia Guimaraens"] },
    ],
  },
  ib_bin27: {
    fact: "Il Reserve Port di Fonseca, casa di Porto guidata da generazioni dalla famiglia Guimaraens. Si distingue per l’intenso frutto rosso scuro.",
    quiz: [{ q: "Per chi era in origine il Fonseca Bin 27, prima di essere messo in commercio nel 1972?", a: "Un Porto assemblato per la famiglia e gli amici", x: ["Una fornitura per la corona inglese", "La razione dei marinai", "Il vino da messa del Vaticano"] }],
  },
  ib_dows: {
    fact: "Il Vintage Port di Dow’s, casa guidata dalla famiglia Symington. È noto per un finale più secco degli altri Porto.",
    quiz: [{ q: "Quale quinta del Douro è il cuore del Dow’s Vintage Port?", a: "Quinta do Bomfim", x: ["Quinta do Noval", "Quinta de Vargellas", "Quinta dos Malvedos"] }],
  },
  ib_sandeman: {
    fact: "Casa di Porto e sherry aperta a Londra nel 1790. Il simbolo in etichetta è la silhouette di «The Don», avvolta in un mantello nero.",
    quiz: [
      { q: "Come è vestita la silhouette nera «The Don» di Sandeman?", a: "Mantello da studente portoghese e cappello spagnolo a tesa larga", x: ["Kilt scozzese e basco", "Uniforme della marina britannica e tricorno", "Saio da monaco e cappuccio"] },
      { q: "Da dove veniva George Sandeman, fondatore di Sandeman?", a: "Dalla Scozia", x: ["Dal Portogallo", "Dai Paesi Bassi", "Dall’Irlanda"] },
    ],
  },
  ib_cockburns: {
    fact: "Il Reserve Port simbolo di Cockburn’s, casa di Porto fondata nel 1815. Oggi è guidata dalla famiglia Symington.",
    quiz: [{ q: "Che cosa ha di particolare la pronuncia inglese di Cockburn’s?", a: "Il «ck» non si pronuncia: suona quasi «Coburn»", x: ["Si pronuncia tutto, «Cock-burn»", "Si tace «burn» e si dice «Cock»", "Si pronuncia alla portoghese, «Cocburne»"] }],
  },
  ib_nacional: {
    fact: "Leggendario Vintage Port che nasce solo da una piccola vigna all’interno della Quinta do Noval. L’annata 1931 è considerata il più grande Porto della storia.",
    quiz: [
      { q: "Che cosa hanno di speciale le viti del Quinta do Noval Nacional?", a: "Crescono sulle proprie radici, senza innesto", x: ["Sono tutte viti bianche ultracentenarie", "Crescono in serra", "Vengono ripiantate ogni anno"] },
      { q: "Quale società di un gruppo assicurativo francese acquistò Quinta do Noval nel 1993?", a: "AXA Millésimes", x: ["LVMH", "Kering", "Pernod Ricard"] },
    ],
  },
  ib_niepoort: {
    fact: "Casa di Porto di famiglia fondata nel 1842. Dirk Niepoort, quinta generazione, si è fatto un nome anche con i vini fermi del Douro.",
    quiz: [
      { q: "Da quale paese ha origine la famiglia Niepoort?", a: "Paesi Bassi", x: ["Scozia", "Germania", "Danimarca"] },
      { q: "Dove matura a lungo il Porto «Garrafeira» di Niepoort dopo l’affinamento in botte?", a: "In grandi damigiane di vetro", x: ["In giare di terracotta interrate", "In serbatoi d’acciaio sott’acqua", "In vasche di marmo"] },
    ],
  },
  ib_warres: {
    fact: "Il Reserve Port di Warre’s, considerata uno dei marchi di Porto più antichi. Oggi è guidata dalla famiglia Symington.",
    quiz: [{ q: "Che significato ha il 1670, anno di apertura di Warre’s?", a: "Fu la prima società di Porto britannica fondata in Portogallo", x: ["L’anno in cui si aggiunse per la prima volta acquavite al Porto", "L’anno in cui il Douro divenne zona d’origine", "L’anno della prima dichiarazione di un Vintage Port"] }],
  },
  ib_ramospinto: {
    fact: "Tawny della casa di Porto fondata nel 1880 da Adriano Ramos Pinto, con uve della Quinta do Bom Retiro, nel Douro.",
    quiz: [
      { q: "Per che cosa fece parlare di sé Ramos Pinto all’inizio del Novecento?", a: "Per audaci manifesti pubblicitari in stile art nouveau", x: ["Per una linea ferroviaria riservata al Porto", "Per la botte più grande del mondo", "Per una mappa dorata incisa sulle bottiglie"] },
      { q: "Quale maison di champagne acquistò Ramos Pinto nel 1990?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  ib_blandys: {
    fact: "Casa di Madeira fondata nel 1811 e da allora guidata dalla stessa famiglia. Il Malmsey è lo stile di Madeira più dolce.",
    quiz: [
      { q: "Come si chiama il metodo tradizionale che fa maturare lentamente il Madeira per anni nei sottotetti riscaldati dal sole?", a: "Canteiro", x: ["Solera", "Appassimento", "Charmat"] },
      { q: "Da quale paese veniva John Blandy, fondatore di Blandy’s?", a: "Inghilterra", x: ["Portogallo", "Spagna", "Francia"] },
    ],
  },
  ib_cossart: {
    fact: "Una delle più antiche case di Madeira. Il Bual è uno stile di Madeira mediamente dolce, con un’acidità viva.",
    quiz: [{ q: "In che anno Cossart Gordon aprì a Madeira?", a: "1745", x: ["1645", "1845", "1945"] }],
  },
};

export default T;
