import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  lafite: {
    fact: "En la clasificación de 1855 del Médoc encabezó la lista de los primeros grands crus. La etiqueta muestra un grabado del château con su torre.",
    quiz: [
      { q: "¿Qué familia compró Château Lafite Rothschild en 1868?", a: "La familia Rothschild", x: ["La casa de Orleans", "La casa real de Borbón", "La familia Médici"] },
      { q: "¿Cómo se llama el segundo vino de Lafite Rothschild?", a: "Carruades de Lafite", x: ["Les Forts de Latour", "Pavillon Rouge du Château Margaux", "Le Petit Mouton"] },
    ],
  },
  margaux: {
    fact: "Château neoclásico apodado «el Versalles del Médoc». Su sello es la etiqueta con el grabado del pórtico de columnas.",
    quiz: [
      { q: "¿Cuál es el segundo vino de Château Margaux?", a: "Pavillon Rouge du Château Margaux", x: ["Carruades de Lafite", "Les Forts de Latour", "Le Clarence de Haut-Brion"] },
      { q: "¿Cómo se llama el vino blanco que elabora Château Margaux?", a: "Pavillon Blanc", x: ["Aile d'Argent", "Blanc de Lynch-Bages", "Musigny Blanc"] },
    ],
  },
  latour: {
    fact: "La torre coronada por un león de la etiqueta recuerda una fortaleza de la guerra de los Cien Años. Desde 2012 abandonó la venta en primeur y solo saca sus vinos tras envejecerlos.",
    quiz: [
      { q: "¿Qué modo de venta abandonó Château Latour en 2012?", a: "La venta en primeur (a futuro)", x: ["La venta en subasta", "La exportación", "La venta en botellas mágnum"] },
      { q: "¿Cuál es el segundo vino de Latour?", a: "Les Forts de Latour", x: ["Carruades de Lafite", "Le Petit Mouton", "Clos du Marquis"] },
    ],
  },
  mouton: {
    fact: "Desde 1945, cada año un artista como Chagall, Picasso o Warhol pinta la parte superior de la etiqueta. En 1973 se convirtió en el único château ascendido de segundo a primer cru.",
    quiz: [
      { q: "¿En qué año ascendió Mouton Rothschild de segundo a primer cru?", a: "1973", x: ["1855", "1945", "1982"] },
      { q: "¿Qué símbolo aparece en la etiqueta de Mouton Rothschild de 1945?", a: "La V de la victoria", x: ["La paloma de la paz", "La torre Eiffel", "Un carnero con corona de laurel"] },
    ],
  },
  hautbrion: {
    fact: "En la clasificación de 1855 fue el único primer cru que no estaba en el Médoc, sino en Graves. En el siglo XVII fue también el primer vino vendido en Londres con su propio nombre.",
    quiz: [
      { q: "¿Qué categoría obtuvo Château Haut-Brion en la clasificación de 1855?", a: "Primer cru", x: ["Segundo cru", "Tercer cru", "Quinto cru"] },
      { q: "¿Qué banquero estadounidense compró Château Haut-Brion en 1935?", a: "Clarence Dillon", x: ["J. P. Morgan", "John D. Rockefeller", "Andrew Mellon"] },
    ],
  },
  petrus: {
    fact: "Leyenda de Pomerol elaborada casi al 100 % con Merlot. La figura de la etiqueta es san Pedro (Petrus) con las llaves del cielo.",
    quiz: [
      { q: "¿Quién aparece en la etiqueta de Pétrus?", a: "San Pedro con las llaves", x: ["San Pablo", "Baco", "Napoleón"] },
      { q: "¿Por qué suelo es famoso el viñedo de Pétrus?", a: "Arcilla azul", x: ["Grava calcárea", "Granito", "Ceniza volcánica"] },
    ],
  },
  yquem: {
    fact: "La cumbre de los vinos dulces de Sauternes, hechos con uvas afectadas por la podredumbre noble (botrytis). En 1855 fue el único en recibir la categoría de «primer cru superior»; la pista es el dorado tras el vidrio transparente.",
    quiz: [
      { q: "¿Qué categoría única recibió Château d'Yquem en la clasificación de 1855?", a: "Premier Cru Supérieur (primer cru superior)", x: ["Primer cru A", "Grand Cru", "Cru Bourgeois"] },
      { q: "¿Qué hongo arruga las uvas de Yquem y concentra su dulzor?", a: "Botrytis cinerea (podredumbre noble)", x: ["Penicillium", "La levadura flor", "El oídio"] },
    ],
  },
  chevalblanc: {
    fact: "Gigante de Saint-Émilion con una alta proporción de Cabernet Franc. Es famoso por la botella de 1961 que guarda como un tesoro el protagonista de la película «Entre copas» (Sideways).",
    quiz: [
      { q: "¿Qué añada de Cheval Blanc guarda como un tesoro el protagonista de la película «Entre copas»?", a: "1961", x: ["1982", "1947", "2000"] },
    ],
  },
  drc: {
    fact: "De un único viñedo de apenas 1,8 ha salen unas 6000 botellas al año. Cada etiqueta lleva impreso el número de serie de la botella.",
    quiz: [
      { q: "¿Qué extensión tiene aproximadamente el viñedo de Romanée-Conti?", a: "Unas 1,8 ha", x: ["Unas 18 ha", "Unas 50 ha", "Unas 0,2 ha"] },
      { q: "¿De quién viene el nombre «Conti» de Romanée-Conti?", a: "Del príncipe de Conti, que compró el viñedo en 1760", x: ["De un general de Napoleón", "Del papa Conti III", "De un monje vinicultor llamado Conti"] },
    ],
  },
  jadot: {
    fact: "Négociant de Beaune famoso por el emblema con el rostro de Baco (dios del vino) de su etiqueta. Fundado en 1859.",
    quiz: [
      { q: "¿De quién es el rostro del emblema de la etiqueta de Louis Jadot?", a: "Baco (dios del vino)", x: ["Poseidón", "San Vicente", "El fundador, Louis Jadot"] },
      { q: "¿En qué año se fundó Louis Jadot?", a: "1859", x: ["1729", "1920", "1966"] },
    ],
  },
  duboeuf: {
    fact: "Vino nuevo que sale a la venta en todo el mundo a la vez el tercer jueves de noviembre. Su símbolo es la etiqueta floral que cambia cada año.",
    quiz: [
      { q: "¿Qué día sale a la venta el Beaujolais Nouveau?", a: "El tercer jueves de noviembre", x: ["El primer viernes de noviembre", "El 1 de diciembre", "El último sábado de octubre"] },
      { q: "¿Qué método de fermentación permite beber tan pronto el Beaujolais Nouveau?", a: "Maceración carbónica", x: ["Solera", "Appassimento", "Segunda fermentación en botella"] },
    ],
  },
  beaucastel: {
    fact: "Gran casa de Châteauneuf-du-Pape que emplea las 13 variedades autorizadas. Muchas botellas de esta zona llevan en relieve el escudo con la tiara papal y las llaves de san Pedro.",
    quiz: [
      { q: "¿Cuántas variedades autorizadas en Châteauneuf-du-Pape emplea en total Château de Beaucastel?", a: "13", x: ["3", "7", "21"] },
      { q: "¿Qué significa el nombre «Châteauneuf-du-Pape»?", a: "El castillo nuevo del papa", x: ["El viñedo del papa", "El castillo nuevo del rey", "Los nueve castillos"] },
    ],
  },
  domperignon: {
    fact: "Champán de prestigio que solo se elabora en los años de buena cosecha. Destacan su etiqueta en forma de escudo y su botella de estilo antiguo; el nombre viene del monje del siglo XVII Pierre Pérignon.",
    quiz: [
      { q: "¿Quién fue el personaje que da nombre a Dom Pérignon?", a: "Un monje benedictino del siglo XVII", x: ["Un general de Napoleón", "El fundador de la familia Moët", "El cocinero de Luis XIV"] },
      { q: "¿En qué años se elabora Dom Pérignon?", a: "Solo en los años de buena cosecha", x: ["Todos los años", "Cada año bisiesto", "Una vez cada diez años"] },
    ],
  },
  moet: {
    fact: "La casa de champán que más vende en el mundo. «Impérial» alude a su vínculo con el emperador Napoleón.",
    quiz: [
      { q: "¿Con qué personaje está ligado el nombre «Impérial» de Moët & Chandon?", a: "Napoleón", x: ["Luis XIV", "María Antonieta", "Charles de Gaulle"] },
      { q: "¿En qué año se fundó Moët & Chandon?", a: "1743", x: ["1829", "1668", "1921"] },
    ],
  },
  veuve: {
    fact: "«Veuve» significa viuda. Madame Clicquot, que enviudó a los 27 años, dirigió la casa e ideó el removido, técnica que gira las botellas para reunir los posos.",
    quiz: [
      { q: "¿Qué significa «veuve» en francés?", a: "Viuda", x: ["Anciana", "Reina", "Hija"] },
      { q: "¿Cómo se llama la técnica ideada por Madame Clicquot para reunir los posos en el cuello girando la botella?", a: "Removido (remuage)", x: ["Degüelle (dégorgement)", "Solera", "Bâtonnage"] },
    ],
  },
  cristal: {
    fact: "Botella transparente creada para el zar Alejandro II de Rusia. Es famosa la anécdota de que se eliminó el hundimiento del fondo (picada) para que no pudiera esconderse una bomba.",
    quiz: [
      { q: "¿Para quién se creó originalmente el champán Cristal?", a: "El zar Alejandro II de Rusia", x: ["Napoleón III", "La reina Victoria de Inglaterra", "Luis XVI"] },
      { q: "¿En qué se distingue la botella de Cristal de las de otros champanes?", a: "Es transparente y no tiene hundimiento en el fondo", x: ["Está recubierta de metal", "Tiene el cuello abombado", "Es cuadrada"] },
    ],
  },
  armand: {
    fact: "Su botella dorada, recubierta de metal y con un as de picas de peltre, le vale el apodo de «Ace of Spades». En 2021 LVMH compró la mitad de la empresa.",
    quiz: [
      { q: "¿Cuál es el apodo de Armand de Brignac?", a: "Ace of Spades (as de picas)", x: ["Golden Crown", "Black Queen", "Royal Heart"] },
      { q: "¿Qué grupo compró la mitad de Armand de Brignac en 2021?", a: "LVMH", x: ["Kering", "Pernod Ricard", "Diageo"] },
    ],
  },
  pj: {
    fact: "Las anémonas blancas que el vidriero art nouveau Émile Gallé dibujó en 1902 van esmaltadas directamente sobre la botella.",
    quiz: [
      { q: "¿Qué flor aparece en la botella de Belle Époque?", a: "La anémona", x: ["La rosa", "El lirio", "La lavanda"] },
      { q: "¿Qué artista del art nouveau diseñó la decoración floral de Belle Époque?", a: "Émile Gallé", x: ["Alfons Mucha", "René Lalique", "Gustav Klimt"] },
    ],
  },
  ruinart: {
    fact: "Fundada en 1729, es la casa de champán más antigua. Embotella Chardonnay al 100 % en una botella redonda y transparente inspirada en las del siglo XVIII.",
    quiz: [
      { q: "¿En qué año se fundó Ruinart?", a: "1729", x: ["1743", "1811", "1876"] },
      { q: "¿Qué eran originalmente las «crayères», las bodegas de creta donde Ruinart envejece su champán?", a: "Canteras de la época romana", x: ["Catacumbas de un monasterio medieval", "Refugios antiaéreos de la Segunda Guerra Mundial", "Antiguas minas de carbón"] },
    ],
  },
  trimbach: {
    fact: "Gran casa alsaciana en activo desde 1626. Por ley, los vinos de Alsacia solo pueden embotellarse en la botella alta y estrecha llamada «flûte».",
    quiz: [
      { q: "¿En qué año empezó la familia Trimbach a elaborar vino?", a: "1626", x: ["1789", "1855", "1920"] },
      { q: "¿Cuál es el legendario Riesling de viñedo único de Trimbach?", a: "Clos Sainte Hune", x: ["Scharzhofberg", "Clos des Mouches", "Hill of Grace"] },
    ],
  },
  egonmuller: {
    fact: "Riesling legendario del viñedo Scharzhofberg, a orillas del Saar. Su Trockenbeerenauslese está considerado el vino blanco más caro del mundo.",
    quiz: [
      { q: "¿Cuál es la categoría más cara del Scharzhofberger de Egon Müller?", a: "Trockenbeerenauslese (TBA)", x: ["Kabinett", "Spätlese", "Grosses Gewächs"] },
      { q: "¿Dónde se venden sobre todo los mejores vinos de Egon Müller?", a: "En la subasta VDP de Tréveris", x: ["En sorteos en línea", "En primeur en Burdeos", "Por correo a los socios de un club"] },
    ],
  },
  drloosen: {
    fact: "Riesling del Mosela famoso por las grandes letras «Dr. L» de su etiqueta. Tradicionalmente, los vinos del Mosela iban en botella verde y los del Rin en botella marrón.",
    quiz: [
      { q: "¿Qué enólogo dirige la bodega Dr. Loosen?", a: "Ernst Loosen", x: ["Egon Müller", "Wilhelm Weil", "Helmut Dönnhoff"] },
      { q: "¿Qué Riesling elabora Dr. Loosen junto con la estadounidense Chateau Ste. Michelle?", a: "Eroica", x: ["Opus One", "Almaviva", "Seña"] },
    ],
  },
  bluenun: {
    fact: "Nacido en la década de 1920, en los años ochenta llegó a ser la marca de vino más vendida del mundo. Su nombre viene de las monjas vestidas de azul de la etiqueta.",
    quiz: [
      { q: "¿De qué elemento de la etiqueta viene el nombre de Blue Nun?", a: "De las monjas vestidas de azul", x: ["De unas uvas azules", "De las aguas azules del Rin", "De la hija del fundador"] },
    ],
  },
  juliusspital: {
    fact: "La botella plana y redondeada «Bocksbeutel» está protegida y reservada a los vinos de Franconia. Juliusspital es una bodega gestionada por un hospital benéfico fundado en 1576.",
    quiz: [
      { q: "¿Quién gestiona la bodega Juliusspital?", a: "La fundación de un hospital benéfico creado en 1576", x: ["La casa real de Baviera", "La Universidad de Wurzburgo", "Un monasterio benedictino"] },
    ],
  },
  sassicaia: {
    fact: "El pionero de los «supertoscanos» y la primera bodega italiana con una denominación de origen propia (Bolgheri Sassicaia DOC). La estrella de la etiqueta es una rosa de los vientos.",
    quiz: [
      { q: "¿Qué representa la estrella de la etiqueta de Sassicaia?", a: "Una rosa de los vientos", x: ["La estrella de David", "El escudo de los Médici", "La estrella polar"] },
      { q: "¿Qué significa el nombre «Sassicaia»?", a: "Tierra pedregosa", x: ["Brisa marina", "Colina del cazador", "Tierra roja"] },
    ],
  },
  gaja: {
    fact: "Famoso por su etiqueta blanca con solo cuatro gruesas letras negras: «GAJA». Angelo Gaja elevó el Barbaresco a la élite mundial.",
    quiz: [
      { q: "¿Quién convirtió Gaja en una bodega de fama mundial?", a: "Angelo Gaja", x: ["Bruno Giacosa", "Piero Antinori", "Giacomo Conterno"] },
      { q: "¿En qué año abrió la bodega Gaja?", a: "1859", x: ["1920", "1961", "1783"] },
    ],
  },
  chianti: {
    fact: "El «fiasco», con su fondo redondo envuelto en paja, es el símbolo del Chianti. La paja servía para que la botella no se rompiera durante el transporte.",
    quiz: [
      { q: "¿Para qué servía originalmente la funda de paja de la botella de Chianti?", a: "Para que no se rompiera durante el transporte", x: ["Para mantener el vino frío", "Para protegerlo de la luz del sol", "Para evitar falsificaciones"] },
      { q: "¿Qué animal simboliza el sello del Chianti Classico?", a: "El gallo negro (gallo nero)", x: ["Un león rojo", "Una paloma blanca", "Un lobo dorado"] },
    ],
  },
  masi: {
    fact: "Tinto intenso y potente elaborado con uvas secadas durante más de tres meses (appassimento) para concentrar el azúcar. «Amarone» alude a su deje amargo.",
    quiz: [
      { q: "¿Cómo se llama el secado de las uvas con que se elabora el Amarone?", a: "Appassimento", x: ["Solera", "Botrytis", "Maceración carbónica"] },
    ],
  },
  biondisanti: {
    fact: "La familia que creó el Brunello di Montalcino. A finales del siglo XIX seleccionó el clon de Sangiovese de grano grueso llamado «Brunello» y lo sometió a largas crianzas.",
    quiz: [
      { q: "¿Con qué otro nombre se conoce el Sangiovese que seleccionó Biondi-Santi para crear el Brunello?", a: "Sangiovese Grosso", x: ["Morellino", "Prugnolo Gentile", "Nebbiolo"] },
    ],
  },
  riscal: {
    fact: "La malla dorada que envuelve la botella se añadió en el siglo XIX para impedir que la rellenaran con vino barato y la falsificaran.",
    quiz: [
      { q: "¿Para qué servía originalmente la malla dorada que envuelve la botella de Riscal?", a: "Para evitar falsificaciones", x: ["Para evitar roturas en el transporte", "Para protegerla de la luz", "Como envoltorio de regalo"] },
      { q: "¿Qué arquitecto diseñó el ondulante hotel de titanio de Marqués de Riscal?", a: "Frank Gehry", x: ["Zaha Hadid", "Tadao Ando", "Rem Koolhaas"] },
    ],
  },
  vegasicilia: {
    fact: "El gran tinto de España, que no sale al mercado hasta tras casi diez años de crianza. Su nombre, «Único», subraya que no tiene igual.",
    quiz: [
      { q: "¿Qué quiere expresar el nombre «Único» de Vega Sicilia?", a: "Que es el único, sin igual", x: ["Que es el primero", "Que es antiguo", "Que es del rey"] },
      { q: "¿Qué vino elabora Vega Sicilia con una crianza más corta que la del Único?", a: "Valbuena 5°", x: ["Alión", "Pingus", "Pesquera"] },
    ],
  },
  tiopepe: {
    fact: "Sinónimo de jerez fino: envejece bajo el velo de levaduras llamado «flor», que le da su color pálido y su sabor salino.",
    quiz: [
      { q: "¿Qué velo de levaduras se forma sobre el jerez fino e impide que se oxide?", a: "La flor", x: ["La botrytis", "La mousse", "La solera"] },
      { q: "¿Cómo se llama el sistema que cría el jerez pasándolo y mezclándolo entre hileras de botas superpuestas?", a: "Sistema de solera", x: ["Appassimento", "Método champenoise", "Maceración carbónica"] },
    ],
  },
  freixenet: {
    fact: "Cava, el espumoso español elaborado con segunda fermentación en botella, como el champán. Su seña de identidad es la botella negra mate.",
    quiz: [
      { q: "¿Cómo obtiene sus burbujas el cava?", a: "Segunda fermentación en botella (método tradicional)", x: ["Inyección de gas carbónico", "Fermentación en depósito (método Charmat)", "Adición de brandy durante la fermentación"] },
    ],
  },
  mateus: {
    fact: "Su botella plana en forma de petaca se inspiró en las cantimploras de los soldados de la Primera Guerra Mundial. El edificio de la etiqueta es el Palacio de Mateus.",
    quiz: [
      { q: "¿En qué se inspiró la forma de la botella de Mateus?", a: "En la cantimplora de los soldados de la Primera Guerra Mundial", x: ["En una bota de vino de cuero", "En un frasco de agua bendita", "En un frasco de perfume"] },
      { q: "¿Qué edificio aparece en la etiqueta de Mateus?", a: "El Palacio de Mateus", x: ["La Torre de Belém", "La catedral de Oporto", "El Palacio da Pena"] },
    ],
  },
  taylors: {
    fact: "El oporto es un vino fortificado al que se añade aguardiente durante la fermentación para conservar su dulzor. Taylor's, fundada en 1692, es una de las casas de oporto más antiguas.",
    quiz: [
      { q: "¿Qué se añade durante la fermentación al elaborar oporto?", a: "Aguardiente de uva", x: ["Jarabe de azúcar", "Miel", "Whisky"] },
      { q: "¿En qué año se fundó Taylor's (Taylor Fladgate)?", a: "1692", x: ["1815", "1756", "1888"] },
    ],
  },
  tokaji: {
    fact: "Vino dulce de podredumbre noble al que, según se cuenta, Luis XIV llamó «vino de reyes, rey de vinos». Los puttonyos indican cuánta uva botritizada se añadió.",
    quiz: [
      { q: "¿Qué rey habría llamado al tokaji «vino de reyes, rey de vinos»?", a: "Luis XIV", x: ["Napoleón", "Enrique VIII", "Pedro el Grande"] },
      { q: "¿Qué indican los «puttonyos»?", a: "La cantidad de uva botritizada añadida (el dulzor)", x: ["Los años de crianza", "El grado alcohólico", "La categoría del viñedo"] },
    ],
  },
  bikaver: {
    fact: "Significa «sangre de toro». Según la leyenda, en 1552 el ejército otomano se asustó al ver las barbas teñidas de rojo de los soldados húngaros, convencido de que bebían sangre de toro.",
    quiz: [
      { q: "¿Qué significa «Bikavér»?", a: "Sangre de toro", x: ["Sol rojo", "Lágrimas de dragón", "Sangre de rey"] },
      { q: "¿Contra quién se libró en 1552 el asedio de Eger que dio origen a la leyenda de la sangre de toro?", a: "El Imperio otomano", x: ["El Imperio mongol", "La casa de Habsburgo", "El reino de Francia"] },
    ],
  },
  opusone: {
    fact: "Vino nacido de la alianza entre Robert Mondavi y el barón Philippe de Mouton Rothschild. En la etiqueta se superponen las siluetas de perfil de ambos.",
    quiz: [
      { q: "¿Cuál fue la primera añada de Opus One?", a: "1979", x: ["1966", "1985", "1994"] },
      { q: "¿De qué campo procede el término «Opus One»?", a: "La música (obra número 1)", x: ["La pintura", "La arquitectura", "La literatura"] },
    ],
  },
  mondavi: {
    fact: "En 1966 fue la primera gran bodega construida en Napa desde la Ley Seca. El arco y el campanario de la etiqueta son los de su bodega de Oakville.",
    quiz: [
      { q: "¿En qué año se fundó la bodega Robert Mondavi?", a: "1966", x: ["1933", "1976", "1989"] },
      { q: "¿Qué nombre dio Robert Mondavi a su Sauvignon Blanc criado en roble?", a: "Fumé Blanc", x: ["Blanc de Blancs", "Verdejo", "White Zinfandel"] },
    ],
  },
  kj: {
    fact: "Desde hace décadas es el Chardonnay más vendido de Estados Unidos. Su símbolo es la hoja de vid otoñal de la etiqueta.",
    quiz: [
      { q: "¿Cuál es el símbolo de la etiqueta de Kendall-Jackson?", a: "Una hoja de vid otoñal", x: ["Un oso", "Un faro", "Un racimo dorado"] },
      { q: "¿Quién fundó Kendall-Jackson?", a: "Jess Jackson", x: ["Robert Mondavi", "Ernest Gallo", "Chuck Wagner"] },
    ],
  },
  barefoot: {
    fact: "La huella de pie descalzo de la etiqueta evoca la antigua costumbre de pisar la uva. Por volumen de ventas es una de las mayores marcas de vino del mundo.",
    quiz: [
      { q: "¿Qué tradición evoca la huella de la etiqueta de Barefoot?", a: "Pisar la uva con los pies", x: ["Pasear descalzo por el viñedo", "Una fiesta en la playa", "Bailar tras la vendimia"] },
    ],
  },
  grange: {
    fact: "El gran tinto de Australia, que el enólogo Max Schubert ensayó a escondidas tras inspirarse en un viaje a Burdeos en los años cincuenta. Está declarado patrimonio cultural.",
    quiz: [
      { q: "¿Qué enólogo creó el Grange?", a: "Max Schubert", x: ["Peter Lehmann", "John Duval", "Wolf Blass"] },
      { q: "¿Qué nombre llevaba el Grange en sus inicios?", a: "Grange Hermitage", x: ["Grange Bordeaux", "Bin 1", "Penfolds Classic"] },
    ],
  },
  yellowtail: {
    fact: "El animal de la etiqueta no es un canguro, sino un ualabí de las rocas de patas amarillas. Llegó a ser el vino importado más vendido de Estados Unidos.",
    quiz: [
      { q: "¿Qué animal aparece en la etiqueta de [yellow tail]?", a: "Un ualabí de las rocas de patas amarillas", x: ["Un canguro", "Un koala", "Un wombat"] },
    ],
  },
  cloudybay: {
    fact: "Con su primera añada, en 1985, dio a conocer al mundo el Sauvignon Blanc de Nueva Zelanda. Las montañas de la etiqueta son la cordillera Richmond, en Marlborough.",
    quiz: [
      { q: "¿Qué aparece dibujado en la etiqueta de Cloudy Bay?", a: "La cordillera Richmond", x: ["El monte Cook", "El mar de Tasmania", "El río Waitaki"] },
      { q: "¿Cuál fue la primera añada de Cloudy Bay?", a: "1985", x: ["1973", "1992", "2001"] },
    ],
  },
  almaviva: {
    fact: "El «Opus One chileno». El motivo de la etiqueta es el símbolo del cosmos que los mapuches pintan en el kultrún, su tambor ceremonial.",
    quiz: [
      { q: "¿De dónde procede el motivo de la etiqueta de Almaviva?", a: "Del kultrún, el tambor mapuche", x: ["Del dios sol inca", "De los moáis de la isla de Pascua", "Del cóndor andino"] },
      { q: "¿De qué obra es personaje «Almaviva»?", a: "«Las bodas de Fígaro», de Beaumarchais", x: ["«Don Quijote»", "«Carmen»", "«Los miserables»"] },
    ],
  },
  montes: {
    fact: "Se dice que el ángel de la etiqueta es el ángel de la guarda que libró varias veces de accidentes al fundador Douglas Murray. Es uno de los vinos chilenos más queridos en Corea del Sur.",
    quiz: [
      { q: "¿Cuál es el símbolo de la etiqueta de Montes Alpha?", a: "Un ángel", x: ["Un demonio", "Un cóndor", "El sol"] },
      { q: "¿Cuál es la variedad principal de «Purple Angel», el vino icono de Montes?", a: "Carmenère", x: ["Malbec", "Pinot Noir", "Tempranillo"] },
    ],
  },
  casillero: {
    fact: "Su nombre viene de una leyenda: el fundador hizo correr el rumor de que el diablo vivía en su bodega subterránea para ahuyentar a los ladrones.",
    quiz: [
      { q: "¿Qué designa el «casillero» de Casillero del Diablo?", a: "La bodega subterránea donde vivía el diablo", x: ["Un viñedo embrujado", "La parte de los ángeles", "La puerta del infierno"] },
    ],
  },
  sanpedro1865: {
    fact: "El nombre es el año de fundación de Viña San Pedro. En Corea del Sur se hizo famoso como regalo gracias a un buen deseo golfista: «jugar 18 hoyos en 65 golpes».",
    quiz: [
      { q: "¿Qué indica el nombre «1865»?", a: "El año de fundación de Viña San Pedro", x: ["La producción de la primera cosecha", "La altitud del viñedo", "El año de nacimiento del fundador"] },
      { q: "¿Qué buen deseo hizo famoso el 1865 como regalo en Corea del Sur?", a: "Jugar 18 hoyos en 65 golpes", x: ["Vivir 18 años más, hasta los 65", "Brindar 65 veces el 8 de enero", "Que 18 personas se repartan 65 botellas"] },
    ],
  },
  inniskillin: {
    fact: "Se vendimia y prensa la uva congelada por debajo de 8 grados bajo cero. En 1991 ganó el gran premio de Vinexpo y dio a conocer al mundo el icewine canadiense.",
    quiz: [
      { q: "¿Por debajo de qué temperatura debe estar congelada la uva para vendimiar icewine canadiense?", a: "8 °C bajo cero", x: ["2 °C bajo cero", "20 °C bajo cero", "0 °C"] },
      { q: "¿En qué feria ganó el gran premio el Inniskillin Vidal Icewine en 1991?", a: "Vinexpo", x: ["Vinitaly", "ProWein", "London Wine Fair"] },
    ],
  },
  ott: {
    fact: "La botella curvilínea, con forma de bolo, que la familia Ott diseñó en los años treinta se convirtió en el símbolo del rosado de Provenza.",
    quiz: [
      { q: "¿Cuándo se diseñó la botella curvilínea de Domaines Ott?", a: "En la década de 1930", x: ["En la década de 1880", "En la década de 1960", "En la década de 2000"] },
      { q: "¿Qué casa de champán compró Domaines Ott en 2004?", a: "Louis Roederer", x: ["Moët & Chandon", "Veuve Clicquot", "Bollinger"] },
    ],
  },
  whisperingangel: {
    fact: "Lanzado en 2006, impulsó el auge mundial del rosado. Su nombre viene de la estatua de un ángel que susurra en la capilla del château.",
    quiz: [
      { q: "¿Quién es el propietario de Château d'Esclans, creador de Whispering Angel?", a: "Sacha Lichine", x: ["Brad Pitt", "Gérard Bertrand", "Alain Ducasse"] },
      { q: "¿En qué año salió Whispering Angel?", a: "2006", x: ["1985", "1998", "2015"] },
    ],
  },
  musar: {
    fact: "Bodega que siguió vendimiando entre bombardeos durante la guerra civil libanesa. Cría sus vinos casi siete años antes de sacarlos al mercado.",
    quiz: [
      { q: "¿Qué enólogo dio a conocer al mundo Château Musar?", a: "Serge Hochar", x: ["Michel Rolland", "Émile Peynaud", "André Tchelistcheff"] },
      { q: "¿En qué año se fundó Château Musar?", a: "1930", x: ["1855", "1975", "1998"] },
    ],
  },
};

export default T;
