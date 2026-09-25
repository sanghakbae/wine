import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  eu_prum_wehlener: {
    fact: "Productor emblemático de Wehlener Sonnenuhr, viñedo que debe su nombre al reloj de sol que se alza en su ladera. Es famoso por Rieslings de dulzor delicado, cerrados en su juventud, que envejecen durante décadas.",
    quiz: [
      { q: "¿Qué significa «Sonnenuhr» en J.J. Prüm Wehlener Sonnenuhr?", a: "Reloj de sol", x: ["Jardín a la luz de la luna", "Campanario", "Molino de agua"] },
    ],
  },
  eu_loosen_praelat: {
    fact: "Riesling de Erdener Prälat, considerado el viñedo más cálido del Mosela porque sus acantilados de pizarra roja lo protegen del viento. Al ser una parcela pequeña, su producción es muy reducida.",
    quiz: [
      { q: "¿Quién heredó el negocio familiar en 1988 y dio a conocer al mundo Dr. Loosen Erdener Prälat?", a: "Ernst Loosen", x: ["Egon Müller", "Johannes Selbach", "Carl von Schubert"] },
    ],
  },
  eu_christoffel_urzig: {
    fact: "Las empinadas laderas del pueblo de Ürzig mezclan pizarra con un suelo volcánico rojo poco común en el Mosela. Por eso son famosas por Rieslings con exóticos matices especiados.",
    quiz: [
      { q: "¿Qué significa «Würzgarten» en Ürziger Würzgarten?", a: "Jardín de especias", x: ["Bodega de vino", "Jardín amurallado", "Colina del sol"] },
    ],
  },
  eu_schloss_johannisberg: {
    fact: "Castillo del Rheingau que clasifica sus vinos por el color de la cápsula. Entre las cápsulas amarilla, verde, rosa y dorada, la verde (Grünlack) corresponde al Spätlese.",
    quiz: [
      { q: "¿Qué categoría nació, según la tradición, en Schloss Johannisberg en 1775 porque el mensajero que traía el permiso de vendimia llegó tarde?", a: "Spätlese (vendimia tardía)", x: ["Eiswein", "Kabinett", "Grosses Gewächs"] },
      { q: "¿Qué político recibió Schloss Johannisberg como regalo del emperador de Austria en 1816?", a: "Metternich", x: ["Bismarck", "Talleyrand", "Richelieu"] },
    ],
  },
  eu_weil_grafenberg: {
    fact: "Bodega fundada en Kiedrich en 1875 por el doctor Robert Weil, profesor de alemán en la Sorbona de París. Su vino insignia es el Riesling del empinado viñedo Gräfenberg.",
    quiz: [
      { q: "¿Qué empresa japonesa se convirtió en accionista mayoritaria de la bodega Robert Weil en 1988?", a: "Suntory", x: ["Kirin", "Asahi", "Sapporo"] },
    ],
  },
  eu_keller_gmax: {
    fact: "Riesling de la familia Keller, que elevó Rheinhessen a región de prestigio mundial. Se elabora en cantidades mínimas a partir de cepas viejas y se considera el Riesling seco más caro de Alemania.",
    quiz: [
      { q: "¿Por qué se dice que Keller G-Max es un vino misterioso?", a: "No se revela la ubicación de su viñedo", x: ["Cada año un pintor distinto diseña la etiqueta", "Solo se elabora como Eiswein", "Se cría bajo el mar"] },
    ],
  },
  eu_donnhoff_hermannshohle: {
    fact: "Helmut Dönnhoff llevó la pequeña región del Nahe a la escena mundial. Hermannshöhle, con su mezcla de pizarra y roca volcánica, se considera el mejor viñedo del Nahe.",
    quiz: [
      { q: "¿Qué hijo dirige Dönnhoff tras su padre Helmut?", a: "Cornelius Dönnhoff", x: ["Ernst Loosen", "Klaus Peter Keller", "Philipp Wittmann"] },
    ],
  },
  eu_haag_juffer: {
    fact: "Riesling de la ladera Juffer-Sonnenuhr, situada frente al pueblo de Brauneberg al otro lado del río. La familia Haag elabora, generación tras generación, vinos delicados y longevos.",
    quiz: [
      { q: "¿De qué significado procede la palabra «Juffer» en Fritz Haag Brauneberger Juffer?", a: "Doncella (señorita)", x: ["Muralla", "Zorro", "Sol"] },
    ],
  },
  eu_grunhaus_abtsberg: {
    fact: "Este viñedo a orillas del río Ruwer aparece por primera vez en documentos del siglo X. La familia von Schubert lo posee desde finales del siglo XIX y aún usa la etiqueta diseñada hacia 1900.",
    quiz: [
      { q: "¿Quién cultivó por primera vez los viñedos de Maximin Grünhaus?", a: "La abadía de San Maximino de Tréveris", x: ["La catedral de Colonia", "La casa real de Prusia", "La Universidad de Heidelberg"] },
      { q: "¿Por qué estilo es famosa la etiqueta de Maximin Grünhaus?", a: "Art nouveau (Jugendstil)", x: ["Bauhaus", "Pop art", "Rococó"] },
    ],
  },
  eu_selbach_zeltinger: {
    fact: "Bodega de la familia Selbach, que cultiva viñas en el pueblo de Zeltingen desde hace generaciones. Su vino emblemático es el Riesling de la empinada ladera Sonnenuhr, donde se alza un reloj de sol.",
    quiz: [
      { q: "¿Qué célebre viñedo del pueblo vecino forma una misma ladera continua con Selbach-Oster Zeltinger Sonnenuhr?", a: "Wehlener Sonnenuhr", x: ["Piesporter Goldtröpfchen", "Berncasteler Doctor", "Scharzhofberg"] },
    ],
  },
  eu_schloss_vollrads: {
    fact: "Castillo del Rheingau considerado una de las bodegas más antiguas del mundo. Su símbolo es una torre medieval rodeada por un foso.",
    quiz: [
      { q: "¿De qué año es el registro más antiguo de venta de vino de Schloss Vollrads?", a: "1211", x: ["1775", "1855", "1920"] },
    ],
  },
  eu_kloster_eberbach: {
    fact: "Bodega monástica fundada en 1136 por monjes cistercienses. El viñedo Steinberg, que los monjes cercaron con un muro, se compara a menudo con el Clos de Vougeot de Borgoña.",
    quiz: [
      { q: "¿Qué película protagonizada por Sean Connery se rodó en el monasterio de Kloster Eberbach?", a: "El nombre de la rosa", x: ["Indiana Jones y la última cruzada", "Los intocables de Eliot Ness", "James Bond contra Goldfinger"] },
    ],
  },
  eu_kunstler_holle: {
    fact: "Prestigiosa bodega de Hochheim, en el extremo oriental del Rheingau, donde el Meno se une al Rin. Sus Rieslings secos y potentes representan al Rheingau.",
    quiz: [
      { q: "¿Qué apodo, derivado de Hochheim, la tierra de Künstler Hochheimer Hölle, usaban los ingleses para los vinos del Rin?", a: "Hock", x: ["Claret", "Sack", "Bubbly"] },
    ],
  },
  eu_wittmann_morstein: {
    fact: "Riesling seco de Morstein, viñedo calcáreo de Westhofen que la familia Wittmann cultiva en biodinámica. Se considera el mejor vino de nivel Grand Cru de Rheinhessen.",
    quiz: [
      { q: "¿Quién dirige la bodega en biodinámica y elabora Wittmann Morstein?", a: "Philipp Wittmann", x: ["Klaus Peter Keller", "Helmut Dönnhoff", "Johannes Leitz"] },
    ],
  },
  eu_burklin_kirchenstuck: {
    fact: "Gran bodega familiar de Wachenheim, en el Palatinado (Pfalz), que sigue la agricultura biodinámica. Kirchenstück, una pequeña parcela junto a la iglesia, se considera el viñedo más valioso del Pfalz.",
    quiz: [
      { q: "¿En qué región se inspira la clasificación «G.C.» y «P.C.» que Dr. Bürklin-Wolf usa en sus etiquetas?", a: "Borgoña", x: ["La clasificación de 1855 de Burdeos", "Las categorías de crianza de Rioja", "La Échelle des Crus de Champaña"] },
    ],
  },
  eu_black_tower: {
    fact: "Marca de vino alemán nacida a finales de la década de 1960 que triunfó en el Reino Unido y en todo el mundo. Llama la atención su botella negra que parece de cerámica.",
    quiz: [
      { q: "¿A qué estilo alemán de vino blanco suave y dulce pertenecía Black Tower en sus inicios?", a: "Liebfraumilch", x: ["Eiswein", "Sekt", "Trockenbeerenauslese"] },
    ],
  },
  eu_wirsching_silvaner: {
    fact: "Bodega familiar de Iphofen, en Franconia, transmitida de generación en generación. En viñedos de margas yesíferas al pie del Steigerwald elabora Silvaner de notas terrosas, embotellado en la Bocksbeutel.",
    quiz: [
      { q: "¿Quién fue Julius Echter, que da nombre a Hans Wirsching Iphöfer Julius-Echter-Berg?", a: "Un príncipe-obispo de Wurzburgo de los siglos XVI y XVII", x: ["Un rey de Baviera", "Un reformador protestante", "Un obtentor que creó una variedad de uva"] },
    ],
  },
  eu_molitor_himmelreich: {
    fact: "Bodega que Markus Molitor heredó muy joven y convirtió en una de las mejores del Mosela. «Himmelreich» significa «reino de los cielos».",
    quiz: [
      { q: "¿Qué indica el color de la cápsula (blanca, verde o dorada) de las botellas de Markus Molitor?", a: "El grado de dulzor", x: ["El suelo del viñedo", "El tiempo de crianza", "El mes de la vendimia"] },
    ],
  },
  eu_thanisch_doctor: {
    fact: "Riesling de Doctor, pequeño y célebre viñedo en la empinada ladera justo detrás del pueblo de Bernkastel. Se ha contado entre los terrenos vitícolas más caros de Alemania.",
    quiz: [
      { q: "¿De qué leyenda procede el nombre «Doctor» (médico) de Dr. H. Thanisch Berncasteler Doctor?", a: "Un arzobispo de Tréveris enfermo sanó al beber vino de este viñedo", x: ["Junto al viñedo había un gran hospital", "El médico militar de Napoleón lo usaba como medicina", "Los vendimiadores vestían batas blancas de médico"] },
    ],
  },
  eu_leitz_einszweidry: {
    fact: "Riesling seco, ligero y fresco que elabora Johannes Leitz en Rüdesheim, donde el Rin cambia de rumbo. Su precio asequible lo ha hecho popular en todo el mundo.",
    quiz: [
      { q: "¿Qué juego de palabras esconde el nombre Leitz «Eins Zwei Dry»?", a: "Cambia el «drei» (tres) del alemán «uno, dos, tres» por el inglés «dry»", x: ["Los números de las sinfonías de Beethoven", "Los nombres de tres hermanos Leitz", "Un método de elaboración con tres filtrados"] },
    ],
  },
  eu_fxpichler_kellerberg: {
    fact: "Bodega que la familia Pichler de Oberloiben llevó a la cima de la Wachau. El Smaragd de Kellerberg, que domina el Danubio, reúne potencia y profundidad.",
    quiz: [
      { q: "¿De dónde viene el nombre de la categoría «Smaragd» de la etiqueta de F.X. Pichler?", a: "De un lagarto verde esmeralda que vive en los muros de piedra de los viñedos", x: ["De una mina de esmeraldas cercana", "De una joya de la corona de los Habsburgo", "De una botella verde"] },
    ],
  },
  eu_knoll_schutt: {
    fact: "Clásico de la Wachau elaborado de generación en generación por la familia Knoll de Unterloiben. Con métodos tradicionales ajenos a las modas, produce vinos que brillan más cuanto más envejecen.",
    quiz: [
      { q: "¿Qué santo aparece en la etiqueta de Knoll?", a: "San Urbano, patrón de los viticultores", x: ["San Pedro", "San Nicolás", "San Jorge"] },
    ],
  },
  eu_prager_achleiten: {
    fact: "Prestigiosa bodega de Weissenkirchen, en la Wachau. Dirigida por Toni Bodenstein, se hizo famosa por los Rieslings muy minerales de Achleiten, un viñedo en terrazas empinadas con muros de piedra.",
    quiz: [
      { q: "¿Qué río domina el viñedo Prager Achleiten?", a: "El Danubio", x: ["El Rin", "El Mosela", "El Elba"] },
    ],
  },
  eu_hirtzberger_singerriedel: {
    fact: "Prestigiosa bodega del pueblo de Spitz, en el oeste de la Wachau. Su vino emblemático es el Riesling Smaragd de Singerriedel, empinado viñedo en terrazas situado detrás del pueblo.",
    quiz: [
      { q: "En la clasificación «Vinea Wachau», creada en 1983 por productores de la Wachau como Hirtzberger, ¿cuál es la categoría más ligera?", a: "Steinfeder", x: ["Smaragd", "Kabinett", "Grosses Gewächs"] },
    ],
  },
  eu_brundlmayer_heiligenstein: {
    fact: "Prestigiosa bodega de Langenlois, en el Kamptal, impulsada por Willi Bründlmayer. Es famosa por el Riesling de la empinada colina Heiligenstein y por sus espumosos de método tradicional.",
    quiz: [
      { q: "¿Qué significa el nombre del viñedo de Bründlmayer Heiligenstein?", a: "Piedra (roca) sagrada", x: ["Colina blanca", "Pozo del santo", "Tumba del héroe"] },
    ],
  },
  eu_kracher_tba: {
    fact: "La niebla que se eleva en Illmitz, a orillas del lago Neusiedl, provoca la podredumbre noble que da origen a vinos dulces de fama mundial. El difunto Alois Kracher llevó los vinos de postre austriacos a la cima mundial.",
    quiz: [
      { q: "¿Cómo se llama la serie de Trockenbeerenauslese de Kracher que se cría en barricas de roble nuevas?", a: "Nouvelle Vague", x: ["Zwischen den Seen", "Smaragd", "Grand Cru Classé"] },
    ],
  },
  eu_domane_wachau: {
    fact: "Bodega cooperativa gestionada conjuntamente por numerosos viticultores de la Wachau. Tiene su sede en el Kellerschlössel, una bodega barroca de Dürnstein.",
    quiz: [
      { q: "¿Qué rey estuvo prisionero a finales del siglo XII en el castillo de Dürnstein, donde se encuentra Domäne Wachau?", a: "Ricardo I Corazón de León de Inglaterra", x: ["Luis IX de Francia", "Federico I del Sacro Imperio Romano Germánico", "Roberto I de Escocia"] },
      { q: "¿Qué nombre usaba Domäne Wachau antes de cambiarlo en 2008?", a: "Freie Weingärtner Wachau", x: ["Bodega Real de la Wachau", "Cooperativa de Vinos del Danubio", "Bodega del Monasterio de Dürnstein"] },
    ],
  },
  eu_moric_blaufrankisch: {
    fact: "Bodega del Burgenland fundada en 2001. Con viejas cepas de Blaufränkisch elabora tintos delicados al estilo de Borgoña que cambiaron la reputación de esta variedad.",
    quiz: [
      { q: "¿Qué enólogo fundó Moric y dio a conocer la Blaufränkisch al mundo?", a: "Roland Velich", x: ["Alois Kracher", "Willi Bründlmayer", "Emmerich Knoll"] },
    ],
  },
  eu_royaltokaji_essencia: {
    fact: "Solo se recoge el mosto que sueltan por su propio peso las uvas botritizadas amontonadas, y fermenta muy lentamente durante varios años. Apenas alcanza unos pocos grados de alcohol y es denso como la miel.",
    quiz: [
      { q: "¿Qué escritor británico de vinos cofundó la bodega Royal Tokaji en 1990?", a: "Hugh Johnson", x: ["Jancis Robinson", "Robert Parker", "Michael Broadbent"] },
    ],
  },
  eu_oremus_aszu: {
    fact: "Bodega de Tolcsva que toma su nombre del viñedo Oremus, donde según la leyenda nació el primer Tokaji Aszú. «Oremus» significa «oremos» en latín.",
    quiz: [
      { q: "¿Qué prestigiosa bodega española compró Oremus en 1993?", a: "Vega Sicilia", x: ["Marqués de Riscal", "Torres", "Bodegas Muga"] },
    ],
  },
  eu_disznoko_aszu: {
    fact: "Toma su nombre de una gran roca con forma de jabalí situada en medio del viñedo. Es una de las bodegas que, tras el fin del régimen comunista, lideraron con capital extranjero el renacimiento del Tokaji.",
    quiz: [
      { q: "¿Qué significa el nombre Disznókő?", a: "Roca del cerdo (jabalí)", x: ["Colina dorada", "Fuente del rey", "Valle del lobo"] },
      { q: "¿Qué empresa vinícola, filial de un grupo asegurador francés, es propietaria de Disznókő desde 1992?", a: "AXA Millésimes", x: ["LVMH", "Groupe Castel", "Baron Philippe de Rothschild"] },
    ],
  },
  eu_kefraya: {
    fact: "Una de las bodegas emblemáticas del Líbano, con viñedos en lo alto de las colinas occidentales del valle de la Bekaa. Las variedades francesas y el sol libanés dan tintos concentrados con notas especiadas.",
    quiz: [
      { q: "¿Entre qué dos cordilleras se encuentra el valle de la Bekaa, donde está Château Kefraya?", a: "El monte Líbano y el Antilíbano", x: ["Los montes Tauro y los montes Zagros", "El Cáucaso y los Urales", "El Atlas y el Rif"] },
    ],
  },
  eu_ixsir: {
    fact: "Bodega construida en las laderas de Batroun, en el norte del Líbano. Su nombre viene de la palabra árabe para «elixir», y es famosa por su diseño ecológico con el edificio enterrado bajo tierra.",
    quiz: [
      { q: "¿Qué cofundador de Ixsir fue presidente de Renault y Nissan?", a: "Carlos Ghosn", x: ["Bernard Arnault", "Jeque Mansour", "Richard Branson"] },
    ],
  },
  eu_massaya: {
    fact: "Bodega fundada en Tanail, en el valle de la Bekaa, por los hermanos Ghosn, que regresaron a su Líbano natal tras la guerra civil y se asociaron con prestigiosas casas vinícolas francesas.",
    quiz: [
      { q: "¿Qué prestigiosa bodega de Châteauneuf-du-Pape participó en la fundación de Massaya?", a: "Vieux Télégraphe (familia Brunier)", x: ["Château de Beaucastel (familia Perrin)", "Château Rayas", "E. Guigal"] },
    ],
  },
  eu_castel_grandvin: {
    fact: "Bodega familiar que nació de las vides que Eli Ben Zaken plantó junto a su casa. Se considera la pionera que abrió la era de los vinos israelíes de calidad.",
    quiz: [
      { q: "¿Cuál es la ciudad más cercana a los montes de Judea, donde se encuentra Domaine du Castel?", a: "Jerusalén", x: ["Haifa", "Eilat", "Nazaret"] },
    ],
  },
  eu_yarden_cabernet: {
    fact: "Cabernet de viñedos de suelo volcánico y clima fresco en los Altos del Golán. Es la marca emblemática de Golan Heights Winery, bodega abierta en los años ochenta que dio a conocer el vino israelí al mundo.",
    quiz: [
      { q: "¿A qué se refiere «Yarden» en hebreo?", a: "Al río Jordán", x: ["Al mar de Galilea", "Al monte Hermón", "Al mar Muerto"] },
    ],
  },
  eu_gaia_thalassitis: {
    fact: "Thalassitis, que significa «del mar», es un blanco salino y tenso elaborado con Assyrtiko de la isla volcánica de Santorini. Es el vino emblemático de Gaia Wines.",
    quiz: [
      { q: "¿Cómo se llama la conducción en forma de cesta, con la vid enrollada en círculo, que protege del fuerte viento las viñas de Santorini de Gaia Thalassitis?", a: "Kouloura", x: ["Gobelet", "Pérgola", "Guyot"] },
    ],
  },
  eu_boutari_naoussa: {
    fact: "Tinto emblemático del norte de Grecia elaborado con Xinomavro, cuyo nombre significa «uva negra ácida». Por su elevada acidez y sus taninos se le llama «el Barolo de Grecia».",
    quiz: [
      { q: "¿En qué año elaboró Boutari su primer vino en Naoussa?", a: "1879", x: ["1789", "1923", "1970"] },
    ],
  },
  eu_sigalas_assyrtiko: {
    fact: "Bodega situada cerca del pueblo de Oia, en el norte de Santorini. En una isla donde abundan las vides con raíces de más de cien años, elabora Assyrtiko de gran mineralidad.",
    quiz: [
      { q: "¿De qué plaga se libraron las vides gracias al suelo de arena volcánica de Santorini, donde está Domaine Sigalas?", a: "La filoxera", x: ["La polilla del racimo", "La mosca de la fruta", "Las termitas"] },
    ],
  },
  eu_tsinandali: {
    fact: "Blanco seco emblemático de Georgia elaborado con Rkatsiteli y Mtsvane. Toma su nombre del pueblo donde estaba la finca del aristócrata que introdujo la vinificación europea en el siglo XIX.",
    quiz: [
      { q: "¿Qué poeta aristócrata introdujo en Georgia la vinificación europea en el siglo XIX desde su finca de Tsinandali?", a: "Aleksandre Chavchavadze", x: ["Shota Rustaveli", "Heraclio II", "Niko Pirosmani"] },
    ],
  },
  eu_kindzmarauli: {
    fact: "La fermentación de la Saperavi se detiene a mitad por enfriamiento para conservar parte del azúcar natural de la uva. Es un tinto célebre de Georgia que solo se elabora en una zona delimitada de Kvareli.",
    quiz: [
      { q: "¿Por qué sabor es famoso el tinto Kindzmarauli?", a: "Semidulce, con dulzor natural", x: ["Muy seco", "Fortificado con brandy", "Espumoso, con burbujas"] },
    ],
  },
  eu_pheasants_tears: {
    fact: "Bodega fundada en Signagi por un agricultor georgiano y un pintor estadounidense. Su nombre viene de un viejo relato georgiano sobre un vino tan bueno que hasta el faisán llora.",
    quiz: [
      { q: "¿Cómo se llaman las grandes tinajas de barro enterradas que Pheasant's Tears usa para fermentar y criar sus vinos al modo tradicional?", a: "Qvevri", x: ["Barricas", "Foudres", "Solera"] },
      { q: "¿Qué pintor estadounidense cofundó Pheasant's Tears?", a: "John Wurdeman", x: ["Andy Warhol", "Keith Haring", "Jeff Koons"] },
    ],
  },
  eu_movia_puro: {
    fact: "Bodega de Aleš Kristančič, con viñedos a caballo entre Eslovenia e Italia. Puro sale al mercado con las lías de levadura aún dentro de la botella.",
    quiz: [
      { q: "¿Qué debe hacer uno mismo antes de beber Movia Puro?", a: "Abrir la botella boca abajo para expulsar los posos", x: ["Añadir jarabe de azúcar", "Agitar la botella para que haga espuma", "Remojar el corcho en agua"] },
    ],
  },
  eu_dingac: {
    fact: "Plavac Mali cultivado en las empinadas laderas que caen al mar en el sur de la península de Pelješac. En 1961 fue el primer vino de Croacia con denominación de origen protegida.",
    quiz: [
      { q: "¿Qué animal, que transportaba la uva por los empinados viñedos, aparece en la etiqueta de Dingač?", a: "El burro", x: ["La cabra", "El caballo", "La vaca"] },
    ],
  },
  eu_cricova_brut: {
    fact: "Es famosa por su gigantesca ciudad subterránea del vino, excavada en los túneles de una antigua cantera de caliza. En más de 100 km de galerías reposan espumosos de segunda fermentación en botella y valiosos vinos de colección.",
    quiz: [
      { q: "¿Qué primer cosmonauta del mundo visitó en los años sesenta las bodegas subterráneas de Cricova?", a: "Yuri Gagarin", x: ["Neil Armstrong", "John Glenn", "Alexéi Leónov"] },
    ],
  },
  eu_nyetimber: {
    fact: "Bodega de espumosos de West Sussex, en Inglaterra. Planta solo las tres variedades del champán y elabora con segunda fermentación en botella, lo que abrió el camino a la fama del espumoso inglés.",
    quiz: [
      { q: "¿Quiénes plantaron por primera vez variedades de Champaña en Nyetimber en 1988?", a: "Un matrimonio estadounidense, Stuart y Sandy Moss", x: ["La familia real británica", "Moët & Chandon", "La familia Taittinger"] },
    ],
  },
  eu_chapel_down: {
    fact: "Bodega emblemática del Reino Unido situada en Tenterden, en el condado de Kent, Inglaterra. Elabora espumosos con segunda fermentación en botella, como el champán.",
    quiz: [
      { q: "¿Qué tipo de suelo hace que los espumosos del sur de Inglaterra, como Chapel Down, se comparen con Champaña?", a: "Suelos de creta (caliza blanca)", x: ["Suelos de ceniza volcánica negra", "Suelos de pizarra roja", "Suelos aluviales de cantos rodados"] },
    ],
  },
  us_screaming_eagle: {
    fact: "Jean Phillips sacó su primera añada en 1992 en unas tierras que compró en Oakville. En la subasta de Napa de 2000, una botella de 6 litros se vendió por 500.000 dólares y asombró al mundo.",
    quiz: [
      { q: "¿Qué propietario de equipos deportivos estadounidense compró Screaming Eagle en 2006?", a: "Stan Kroenke", x: ["Jerry Jones", "Mark Cuban", "Robert Kraft"] },
      { q: "¿Qué enóloga de vinos de culto elaboró las primeras añadas de Screaming Eagle?", a: "Heidi Barrett", x: ["Warren Winiarski", "Mike Grgich", "Paul Draper"] },
    ],
  },
  us_harlan: {
    fact: "El promotor inmobiliario Bill Harlan la fundó en 1984 en las laderas al oeste de Oakville. Con la meta de ser un «primer gran cru» de Napa, ha obtenido varias veces 100 puntos Parker.",
    quiz: [
      { q: "¿Qué otra marca de vino de culto lanzó en los años noventa Bill Harlan, fundador de Harlan Estate?", a: "Bond", x: ["Scarecrow", "Colgin", "Screaming Eagle"] },
      { q: "¿Qué resort del valle de Napa cofundó Bill Harlan, fundador de Harlan Estate?", a: "Meadowood", x: ["Auberge du Soleil", "The Carneros Inn", "Solage"] },
    ],
  },
  us_dominus: {
    fact: "Vino que elabora el bordelés Christian Moueix, que dirigía Petrus, en el antiguo viñedo Napanook de Yountville. Su primera añada es de 1983.",
    quiz: [
      { q: "¿Qué dúo de arquitectos suizos diseñó el edificio de la bodega Dominus?", a: "Herzog & de Meuron", x: ["Frank Gehry", "Tadao Ando", "Renzo Piano"] },
      { q: "¿Qué tienen de particular los muros del edificio de la bodega Dominus?", a: "Son cestas de malla metálica rellenas de piedras de basalto", x: ["Son un muro cortina de vidrio", "Están revestidos con duelas de barrica", "Son de hormigón visto"] },
    ],
  },
  us_caymus_ss: {
    fact: "Cabernet de gama alta que la familia Wagner, al frente de Caymus, elabora cada año solo con las mejores barricas. Es el símbolo del estilo Napa, concentrado y suave.",
    quiz: [
      { q: "¿Qué récord tiene Caymus Special Selection en Wine Spectator?", a: "Es el único vino elegido dos veces «Vino del año»", x: ["Fue el primer vino estadounidense con 100 puntos", "Es el vino estadounidense vendido más caro", "Fue el primer vino criado en una estación espacial"] },
    ],
  },
  us_caymus: {
    fact: "Bodega fundada por la familia Wagner en Rutherford en 1972. Su Cabernet concentrado, de fruta madura y textura aterciopelada, es muy apreciado también en Corea del Sur.",
    quiz: [
      { q: "¿De dónde viene el nombre Caymus?", a: "Del Rancho Caymus, una concesión de tierras mexicana en la Napa del siglo XIX", x: ["Del nombre de la esposa del fundador", "Del antiguo nombre del río Napa", "Del pueblo alemán de origen de los Wagner"] },
      { q: "¿Qué familia fundó y dirige Caymus?", a: "La familia Wagner", x: ["La familia Mondavi", "La familia Gallo", "La familia Coppola"] },
    ],
  },
  us_silveroak_napa: {
    fact: "Se elabora solo con Cabernet Sauvignon criado en barricas de roble americano. El día que sale una nueva añada, se forman colas frente a la bodega.",
    quiz: [
      { q: "¿Qué edificio aparece en la etiqueta de Silver Oak?", a: "Una torre de agua", x: ["Un faro", "Un molino de viento", "Un campanario"] },
      { q: "¿Qué barricas usa Silver Oak, fiel a su estilo, para la crianza?", a: "Barricas de roble americano", x: ["Barricas de roble francés", "Barricas de roble esloveno", "Barricas de roble húngaro"] },
    ],
  },
  us_silveroak_av: {
    fact: "El Cabernet de Sonoma de Silver Oak, más suave y listo para beber antes que el de Napa Valley. Su etiqueta lleva el mismo dibujo de la torre de agua que el de Napa.",
    quiz: [
      { q: "¿Qué dos personas fundaron Silver Oak en 1972?", a: "Ray Duncan y Justin Meyer", x: ["Robert Mondavi y el barón Philippe", "Jack y Dolores Cakebread", "Dan y Margaret Duckhorn"] },
    ],
  },
  us_cask23: {
    fact: "Cabernet de gama alta que Stag's Leap Wine Cellars, fundada por Warren Winiarski, elabora solo con sus mejores uvas. La primera añada es la de 1974.",
    quiz: [
      { q: "¿De dónde viene el nombre Cask 23?", a: "De la barrica n.º 23, embotellada aparte por su excepcional calidad el primer año", x: ["De la parcela 23 del viñedo", "Del cumpleaños del fundador, un día 23", "De una norma de 23 meses de crianza"] },
      { q: "¿Qué prestigiosa casa italiana compró en 2007, junto con Chateau Ste. Michelle, Stag's Leap Wine Cellars, productora de Cask 23?", a: "Antinori", x: ["Gaja", "Frescobaldi", "Biondi-Santi"] },
    ],
  },
  us_slv: {
    fact: "S.L.V. son las siglas de «Stag's Leap Vineyard». Después de que la añada 1973 superara a grandes vinos franceses, una botella pasó a formar parte de la colección del Smithsonian en Estados Unidos.",
    quiz: [
      { q: "¿Cómo se llama la cata a ciegas de 1976 en la que Stag's Leap Wine Cellars S.L.V. 1973 ganó en la categoría de tintos?", a: "El Juicio de París", x: ["La clasificación de 1855 de Burdeos", "El gran premio de Vinexpo", "El Vino del año de Wine Spectator"] },
      { q: "¿Cuál era la profesión original de Warren Winiarski, fundador de Stag's Leap Wine Cellars, que elabora S.L.V.?", a: "Profesor de ciencias políticas en la Universidad de Chicago", x: ["Piloto de avión", "Geólogo petrolero", "Director de cine en Hollywood"] },
    ],
  },
  us_montelena_chard: {
    fact: "En el «Juicio de París» de 1976, su añada 1973 superó a grandes vinos de Borgoña y ganó en la categoría de blancos. La historia también se llevó al cine.",
    quiz: [
      { q: "¿Qué enólogo elaboró el Chateau Montelena Chardonnay 1973 que ganó el Juicio de París?", a: "Mike Grgich", x: ["Warren Winiarski", "Robert Mondavi", "André Tchelistcheff"] },
      { q: "¿Qué película de 2008 narra la victoria de Chateau Montelena Chardonnay en el Juicio de París?", a: "Bottle Shock", x: ["Entre copas (Sideways)", "Un buen año (A Good Year)", "Mondovino"] },
    ],
  },
  us_montelena_cab: {
    fact: "Cabernet elaborado en un château de piedra al pie del monte Saint Helena, al norte de Calistoga. Desde 1972 la familia Barrett dirige la antigua bodega, a la que devolvió la vida.",
    quiz: [
      { q: "¿A qué se dedicaba Alfred Tubbs, que fundó Chateau Montelena en 1882?", a: "Fabricante de cuerdas", x: ["Magnate del ferrocarril", "Minero de oro", "Banquero"] },
    ],
  },
  us_tokalon: {
    fact: "Cabernet de gama alta del legendario viñedo To Kalon de Oakville, justo detrás de la bodega Robert Mondavi. Es uno de los viñedos más famosos de Napa.",
    quiz: [
      { q: "¿Qué significa el nombre del viñedo To Kalon?", a: "«Lo más bello» en griego", x: ["«Colina de Dios» en latín", "«Tierra caliente» en español", "«Agua clara» en una lengua indígena"] },
      { q: "¿Qué pionero cultivó por primera vez el viñedo To Kalon en el siglo XIX y le dio nombre?", a: "Hamilton Crabb", x: ["George Yount", "Gustave Niebaum", "Charles Krug"] },
    ],
  },
  us_woodbridge: {
    fact: "Marca de vino diario que Robert Mondavi fundó en 1979 cerca de Lodi. Su objetivo era un vino de California que cualquiera pudiera beber sin complicaciones.",
    quiz: [
      { q: "¿De dónde viene el nombre «Woodbridge» de Woodbridge by Robert Mondavi?", a: "De una localidad cercana a Lodi, donde está la bodega", x: ["Del apellido de soltera de la madre del fundador", "Del nombre de un taller de barricas", "Del pueblo italiano de la familia Mondavi"] },
    ],
  },
  us_insignia: {
    fact: "Joseph Phelps, que dirigía una empresa constructora, lo lanzó por primera vez en 1974. Se considera el primer corte bordelés de California con un nombre propio.",
    quiz: [
      { q: "¿Qué empresa compró en 2022 Joseph Phelps, productora de Insignia?", a: "LVMH", x: ["E&J Gallo", "Constellation Brands", "Treasury Wine Estates"] },
    ],
  },
  us_heitz_martha: {
    fact: "Pionero de los cabernet de viñedo único de Napa, con el nombre del viñedo en la etiqueta desde la añada 1966. Es famoso por su aroma singular, que recuerda a menta y eucalipto.",
    quiz: [
      { q: "¿Quién es la «Martha» de Heitz Martha's Vineyard?", a: "Martha May, esposa de Tom May, dueño del viñedo", x: ["La hija de Joe Heitz", "El nombre de una isla de Massachusetts", "La madre del primer enólogo"] },
    ],
  },
  us_shafer_hillside: {
    fact: "El cabernet de gama más alta de la bodega que John Shafer, antiguo directivo de una editorial de Chicago, fundó en 1972 en las laderas del distrito de Stags Leap. Su hijo Doug Shafer amplió su fama.",
    quiz: [
      { q: "¿A qué grupo empresarial surcoreano pertenece la compañía que compró en 2022 Shafer Vineyards, productora de Hillside Select?", a: "Shinsegae", x: ["Lotte", "CJ", "SK"] },
    ],
  },
  us_diamond_creek: {
    fact: "Bodega fundada por Al Brounstein a finales de los años sesenta en Diamond Mountain. Se empeñó en embotellar su Cabernet siempre por separado, viñedo por viñedo.",
    quiz: [
      { q: "¿En qué se basan los nombres de los viñedos Volcanic Hill, Red Rock Terrace y Gravelly Meadow de Diamond Creek?", a: "En sus distintos tipos de suelo", x: ["En el mes de la vendimia", "En el año de plantación de las cepas", "En el nombre del enólogo"] },
    ],
  },
  us_dallavalle_maya: {
    fact: "La bodega la fundaron el italiano Gustav Dalla Valle y su esposa japonesa Naoko en las colinas al este de Oakville. Maya es un vino de culto con una alta proporción de Cabernet Franc.",
    quiz: [
      { q: "¿De quién procede el nombre «Maya» de Dalla Valle?", a: "De la hija del matrimonio fundador", x: ["De la madre del fundador", "De la antigua civilización maya", "De la esposa del primer enólogo"] },
    ],
  },
  us_bond: {
    fact: "Proyecto de Bill Harlan, de Harlan Estate, que selecciona viñedos de Napa de nivel «Grand Cru» y embotella cada uno por separado. Melbury es uno de esos primeros viñedos.",
    quiz: [
      { q: "¿Cuál es el planteamiento de Bond?", a: "Embotellar por separado cada uno de los mejores viñedos de Napa", x: ["Mezclar uvas de varios países", "Cambiar de variedad cada año", "Criar el vino bajo el mar"] },
    ],
  },
  us_scarecrow: {
    fact: "Procede del viñedo J.J. Cohn de Rutherford, con viejas cepas de Cabernet plantadas en los años cuarenta. El nieto de J.J. Cohn lanzó la primera añada en 2003.",
    quiz: [
      { q: "¿De qué película procede el nombre Scarecrow (espantapájaros)?", a: "El mago de Oz", x: ["Lo que el viento se llevó", "Casablanca", "Sonrisas y lágrimas (La novicia rebelde)"] },
    ],
  },
  us_colgin_cariad: {
    fact: "Corte bordelés de la bodega de culto de Napa que dirige Ann Colgin. En 2017 LVMH compró la mayor parte de Colgin Cellars.",
    quiz: [
      { q: "¿Qué significa en galés «Cariad», de Colgin?", a: "Amor", x: ["Estrella", "Colina", "Dragón"] },
    ],
  },
  us_sine_qua_non: {
    fact: "Vino de culto de estilo Ródano que el austriaco Manfred Krankl inició en 1994. Su nombre significa en latín «algo indispensable».",
    quiz: [
      { q: "¿Qué es lo más singular de Sine Qua Non?", a: "Cada añada cambian el nombre del vino y la ilustración de la etiqueta", x: ["Solo usa tapones de vidrio en lugar de corcho", "Se elabora cada año en un país distinto", "Solo se vende en subastas"] },
    ],
  },
  us_kistler: {
    fact: "Gran casa de Chardonnay fundada en Sonoma en 1978. Es famosa por sus Chardonnay finos y potentes, fermentados con levaduras naturales como en Borgoña.",
    quiz: [
      { q: "¿Quién fundó Kistler Vineyards?", a: "Steve Kistler", x: ["Jim Clendenen", "Josh Jensen", "David Lett"] },
    ],
  },
  us_farniente: {
    fact: "En 1979 Gil Nickel recuperó una bodega de piedra de Oakville fundada en 1885 y abandonada durante la Ley Seca. Se centra en dos vinos: Chardonnay y Cabernet.",
    quiz: [
      { q: "¿Qué significa el nombre Far Niente?", a: "«Sin preocupaciones», en italiano", x: ["«Tierra lejana», en latín", "«Pequeña granja», en español", "«Primera cosecha», en francés"] },
    ],
  },
  us_beringer_pr: {
    fact: "El cabernet de gama más alta de la bodega que los hermanos Beringer, oriundos de Maguncia (Alemania), fundaron en 1876 en St. Helena: la bodega de Napa con más años de funcionamiento ininterrumpido.",
    quiz: [
      { q: "¿Por qué pudo Beringer seguir abierta durante la Ley Seca?", a: "Obtuvo permiso para elaborar vino para ceremonias religiosas", x: ["Se usó como instituto de investigación agraria del gobierno", "Exportaba vino de contrabando a Canadá", "Suministraba vinagre al ejército"] },
    ],
  },
  us_beringer_wz: {
    fact: "Vino rosado, dulce y ligero, elaborado con uva tinta Zinfandel. En los años ochenta se vendió de forma explosiva en Estados Unidos y se convirtió en sinónimo de vino popular.",
    quiz: [
      { q: "¿Cómo obtiene Beringer White Zinfandel su color rosado?", a: "Dejando macerar muy poco tiempo los hollejos de la Zinfandel tinta", x: ["Añadiendo zumo de fresa", "Usando una uva de piel rosada", "Mezclándolo con champán rosado"] },
    ],
  },
  us_sutterhome_wz: {
    fact: "El White Zinfandel original, popularizado por Sutter Home, de la familia Trinchero. En los años ochenta se convirtió en el vino más popular de Estados Unidos.",
    quiz: [
      { q: "¿Qué hizo que Sutter Home White Zinfandel tuviera el sabor dulce que tiene hoy?", a: "Una fermentación que se detuvo por accidente en 1975", x: ["Un experimento para imitar el vino de hielo", "Un experimento de mezcla con rosado francés", "Una colaboración con una empresa de zumos"] },
    ],
  },
  us_duckhorn_merlot: {
    fact: "Fundada en 1976 por el matrimonio Dan y Margaret Duckhorn, elevó el Merlot de Napa a la categoría de vino de prestigio. Cada etiqueta lleva la ilustración de un ave acuática.",
    quiz: [
      { q: "¿Qué Merlot de Duckhorn fue elegido «Vino del Año» de Wine Spectator en 2017?", a: "Three Palms Vineyard Merlot", x: ["Decoy Merlot", "Goldeneye Merlot", "Paraduxx Merlot"] },
    ],
  },
  us_cakebread: {
    fact: "Bodega familiar fundada en 1973 en Rutherford por el matrimonio Jack y Dolores Cakebread. Su Chardonnay es un habitual de las cartas de vinos de los restaurantes de Napa.",
    quiz: [
      { q: "¿Quién fue el maestro de fotografía de Jack Cakebread, fundador de Cakebread Cellars?", a: "Ansel Adams", x: ["Annie Leibovitz", "Robert Capa", "Richard Avedon"] },
    ],
  },
  us_rombauer: {
    fact: "Sinónimo del Chardonnay californiano cremoso, desbordante de mantequilla y vainilla. Es la bodega familiar que el matrimonio Koerner y Joan Rombauer fundó en 1980.",
    quiz: [
      { q: "¿Qué famoso libro de cocina estadounidense escribió Irma Rombauer, pariente de la familia Rombauer?", a: "Joy of Cooking", x: ["Mastering the Art of French Cooking", "Kitchen Confidential", "Salt, Fat, Acid, Heat"] },
    ],
  },
  us_bv_latour: {
    fact: "El cabernet de gama más alta de BV, bodega fundada en Rutherford en 1900 por el francés Georges de Latour. Elaborado desde la añada 1936, se considera el pionero de los grandes cabernet de Napa.",
    quiz: [
      { q: "¿Qué significa en francés «Beaulieu», de Beaulieu Vineyard?", a: "Lugar hermoso", x: ["Colina alta", "Manantial antiguo", "Campo dorado"] },
      { q: "¿Qué legendario enólogo de origen ruso convirtió Georges de Latour Private Reserve en una obra maestra?", a: "André Tchelistcheff", x: ["Warren Winiarski", "Mike Grgich", "Paul Draper"] },
    ],
  },
  us_rubicon: {
    fact: "El tinto de gama más alta de Inglenook, bodega fundada en 1879 por el capitán finlandés Gustave Niebaum. La familia Coppola, que compró la antigua finca, lo elabora desde la añada 1978.",
    quiz: [
      { q: "¿Qué director de cine creó Inglenook Rubicon?", a: "Francis Ford Coppola", x: ["Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"] },
    ],
  },
  us_ridge_montebello: {
    fact: "Corte a base de Cabernet procedente de viñedos calizos en una alta cresta de las montañas de Santa Cruz. Paul Draper lo elaboró durante décadas con métodos tradicionales.",
    quiz: [
      { q: "¿Qué puesto logró Ridge Monte Bello 1971 en la categoría de tintos de la revancha del 30.º aniversario del «Juicio de París», en 2006?", a: "Primero", x: ["Segundo", "Quinto", "Décimo"] },
    ],
  },
  us_ridge_geyserville: {
    fact: "Corte a base de Zinfandel de un viñedo de Sonoma donde conviven cepas de más de cien años. Es el Zinfandel emblemático de Ridge, elaborado desde 1966.",
    quiz: [
      { q: "¿De dónde viene el nombre del pueblo de Geyserville, donde está el viñedo de Ridge Geyserville?", a: "De una zona cercana de géiseres", x: ["Del nombre de un minero de la fiebre del oro", "Del nombre de un misionero español", "Del nombre de una antigua estación de tren"] },
    ],
  },
  us_frank_family: {
    fact: "Bodega familiar instalada en un antiguo edificio de piedra de Calistoga. Se hizo popular con un Cabernet suave muy apreciado en los restaurantes de Napa.",
    quiz: [
      { q: "¿Cuál era la ocupación anterior de Rich Frank, fundador de Frank Family Vineyards?", a: "Presidente de Walt Disney Studios", x: ["Jugador profesional de béisbol", "Geólogo petrolero", "Piloto de aerolínea"] },
    ],
  },
  us_jordan: {
    fact: "Gran bodega de Sonoma que elabora un Cabernet tan elegante como un burdeos en un edificio inspirado en un château rural francés. Su primera añada fue la de 1976.",
    quiz: [
      { q: "¿Cuál era la profesión de Tom Jordan, que fundó la bodega Jordan en 1972?", a: "Geólogo petrolero", x: ["Productor de cine de Hollywood", "Golfista profesional", "Piloto de aviación"] },
    ],
  },
  us_spottswoode: {
    fact: "Bodega familiar en el extremo oeste del pueblo de St. Helena. Fue de las primeras de Napa en adoptar el cultivo ecológico y hoy la dirigen las hijas, que han tomado el relevo.",
    quiz: [
      { q: "¿Quién compró la finca Spottswoode en 1972 y levantó la bodega?", a: "Mary Novak", x: ["Margaret Duckhorn", "Ann Colgin", "Jean Phillips"] },
    ],
  },
  us_quintessa: {
    fact: "Corte bordelés elaborado con agricultura biodinámica en una finca al este de Rutherford que reúne colinas y valles. Su primera añada fue la de 1994.",
    quiz: [
      { q: "¿De qué país son Agustín y Valeria Huneeus, fundadores de Quintessa?", a: "Chile", x: ["Argentina", "España", "Italia"] },
    ],
  },
  us_pahlmeyer: {
    fact: "Bodega de culto de Napa fundada en los años ochenta por el abogado Jayson Pahlmeyer. En los noventa, la estrella de la enología Helen Turley se encargó de la elaboración.",
    quiz: [
      { q: "¿Qué empresa, la mayor compañía vinícola de Estados Unidos, compró Pahlmeyer en 2019?", a: "E&J Gallo", x: ["Constellation Brands", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us_schramsberg: {
    fact: "En 1965 el matrimonio Davies recuperó una antigua bodega de Calistoga fundada en 1862. Se elabora con segunda fermentación en botella en cuevas excavadas en la ladera.",
    quiz: [
      { q: "¿En qué ocasión se usó Schramsberg Blanc de Blancs para un brindis histórico en 1972?", a: "El banquete en Pekín entre el presidente Nixon y el primer ministro Zhou Enlai", x: ["La celebración del regreso del Apolo 11", "La ceremonia por la caída del Muro de Berlín", "La investidura del presidente Kennedy"] },
    ],
  },
  us_chandon: {
    fact: "Domaine Chandon, inaugurada en 1973 en Yountville (Napa Valley), fue la primera bodega de espumosos fundada en California por una casa de champán francesa.",
    quiz: [
      { q: "¿Qué casa de champán fundó en California Domaine Chandon, productora de Chandon Brut?", a: "Moët & Chandon", x: ["Veuve Clicquot", "Taittinger", "Louis Roederer"] },
    ],
  },
  us_roederer_estate: {
    fact: "La casa de champán Louis Roederer fundó esta bodega en 1982 en Anderson Valley, en el condado de Mendocino. Gracias a la niebla fresca elabora espumosos vivos y frescos.",
    quiz: [
      { q: "¿Cuál es el champán más famoso de Louis Roederer, fundadora de Roederer Estate?", a: "Cristal", x: ["Dom Pérignon", "La Grande Dame", "Belle Époque"] },
    ],
  },
  us_kosta_browne: {
    fact: "Estrella del Pinot Noir de Sonoma, elegido «Vino del Año» de Wine Spectator en 2011. Su primera añada fue la de 1997.",
    quiz: [
      { q: "¿Con qué dinero hicieron su primer vino los dos fundadores de Kosta Browne?", a: "Con las propinas ahorradas trabajando en un restaurante", x: ["Con un premio de lotería", "Con opciones sobre acciones de Silicon Valley", "Con beneficios del negocio petrolero"] },
    ],
  },
  us_williams_selyem: {
    fact: "Bodega fundada a finales de los setenta por dos amigos que empezaron a hacer vino en un garaje como afición de fin de semana. Es la pionera que llevó el Pinot Noir de Russian River Valley a la categoría de culto.",
    quiz: [
      { q: "¿De dónde viene el nombre Williams Selyem?", a: "De los apellidos de los dos fundadores, Burt Williams y Ed Selyem", x: ["De los nombres de dos viñedos", "De los nombres del matrimonio fundador", "De los nombres de un pueblo y un río"] },
    ],
  },
  us_sea_smoke: {
    fact: "Pinot Noir de laderas orientadas al sur en Santa Rita Hills, cultivado con agricultura biodinámica. Solo se vende por lista de pedidos por correo y es famoso por lo difícil que es conseguirlo.",
    quiz: [
      { q: "¿De dónde viene el nombre Sea Smoke?", a: "De la niebla que sube desde el mar siguiendo el río Santa Ynez", x: ["Del humo de un volcán cercano", "Del aroma a humo que dejó en la uva un incendio", "Del nombre del yate del fundador"] },
    ],
  },
  us_au_bon_climat: {
    fact: "Gran bodega de Santa Bárbara fundada en 1982. Frente a la moda californiana de vinos excesivamente concentrados, apostó por vinos frescos al estilo de Borgoña.",
    quiz: [
      { q: "¿Qué carismático enólogo fundó Au Bon Climat?", a: "Jim Clendenen", x: ["Paul Draper", "Manfred Krankl", "Josh Jensen"] },
      { q: "¿Qué significa en francés Au Bon Climat?", a: "Un buen lugar bien expuesto al sol", x: ["El castillo de la pequeña colina", "Regalo del mar", "Primera cosecha"] },
    ],
  },
  us_calera: {
    fact: "Gran casa de Pinot Noir que Josh Jensen, formado en Borgoña, fundó en lo alto de la sierra de Gavilán tras mucho buscar suelos calizos.",
    quiz: [
      { q: "¿Qué significa la palabra española «calera», que da nombre a Calera?", a: "Horno de cal", x: ["Puente de piedra", "Pequeño manantial", "Tierra roja"] },
    ],
  },
  us_meiomi: {
    fact: "Mezcla uvas de las zonas costeras de Monterey, Santa Bárbara y Sonoma para lograr un Pinot Noir suave y muy frutal. En 2015 se vendió a Constellation Brands.",
    quiz: [
      { q: "¿Qué famosa bodega de Napa dirige la familia de Joe Wagner, creador de Meiomi?", a: "Caymus", x: ["Silver Oak", "Beringer", "Duckhorn"] },
      { q: "¿Qué significa «Meiomi» en la lengua indígena de la que procede?", a: "Costa", x: ["Sol", "Uva", "Águila"] },
    ],
  },
  us_la_crema: {
    fact: "Marca que se dio a conocer con Pinot Noir y Chardonnay de la fresca zona costera de Sonoma. Es muy apreciada como Pinot Noir californiano de precio asequible.",
    quiz: [
      { q: "¿Quién fundó Kendall-Jackson, que compró La Crema y la hizo crecer?", a: "Jess Jackson", x: ["Ernest Gallo", "Robert Mondavi", "Chuck Wagner"] },
    ],
  },
  us_apothic: {
    fact: "Corte tinto de Zinfandel, Syrah, Cabernet y Merlot de sabor dulce e intenso. Lanzado a finales de los años 2000, impulsó el auge de los cortes tintos en Estados Unidos.",
    quiz: [
      { q: "¿De dónde procede el nombre Apothic?", a: "De la «apotheca», el lugar donde en la Europa medieval se mezclaba y guardaba el vino", x: ["De una diosa griega del vino", "Del nombre de la iglesia del pueblo del fundador", "De la expresión latina para «noche oscura»"] },
    ],
  },
  us_prisoner: {
    fact: "Corte tinto de Napa a base de Zinfandel, lanzado por primera vez en 2000. Con su sabor intenso y suave, abrió la moda de los cortes tintos en Estados Unidos.",
    quiz: [
      { q: "¿Qué pintor español hizo el grabado que aparece en la etiqueta de The Prisoner?", a: "Francisco de Goya", x: ["Pablo Picasso", "Diego Velázquez", "Salvador Dalí"] },
      { q: "¿Qué enólogo creó The Prisoner?", a: "Dave Phinney", x: ["Chuck Wagner", "Manfred Krankl", "Heidi Barrett"] },
    ],
  },
  us_papillon: {
    fact: "Corte de Napa de estilo bordelés de Orin Swift, la bodega fundada por Dave Phinney, creador de The Prisoner. Es famoso por sus etiquetas con fotografías e ilustraciones impactantes.",
    quiz: [
      { q: "¿De dónde viene el nombre Orin Swift?", a: "Del segundo nombre del padre del fundador y del apellido de soltera de su madre", x: ["De los nombres de dos viñedos", "Del nombre del perro del fundador", "Del nombre del protagonista de una novela"] },
      { q: "¿Qué empresa compró Orin Swift en 2016?", a: "E&J Gallo", x: ["LVMH", "Constellation Brands", "Treasury Wine Estates"] },
    ],
  },
  us_josh: {
    fact: "Marca californiana de vino diario que Joseph Carr lanzó a finales de los años 2000. Se considera una de las marcas de vino de crecimiento más rápido de Estados Unidos.",
    quiz: [
      { q: "¿Quién es el «Josh» de Josh Cellars?", a: "El padre del fundador, Joseph Carr", x: ["El hijo del fundador", "El primer enólogo", "El perro del fundador"] },
    ],
  },
  us_bogle: {
    fact: "Vino de la familia Bogle, que lleva varias generaciones cultivando la tierra en Clarksburg, en el delta del río Sacramento. Su vino insignia es un Petite Sirah intenso, casi como la tinta.",
    quiz: [
      { q: "¿A qué se dedicó la familia Bogle durante generaciones antes de plantar su primer viñedo en 1968?", a: "A la agricultura", x: ["Al negocio petrolero", "A la producción de cine", "A la construcción de ferrocarriles"] },
    ],
  },
  us_gallo: {
    fact: "Marca insignia de E&J Gallo, la mayor empresa vinícola familiar del mundo. Marcas como Barefoot, Apothic y Orin Swift también pertenecen a esta compañía.",
    quiz: [
      { q: "¿Qué hermanos fundaron en 1933 E&J Gallo, productora de Gallo Family Vineyards?", a: "Ernest y Julio Gallo", x: ["Robert y Peter Mondavi", "Jacob y Frederick Beringer", "Dan y Margaret Duckhorn"] },
      { q: "¿Qué terminó en Estados Unidos en 1933, el año en que los hermanos Gallo abrieron su bodega?", a: "La Ley Seca", x: ["La guerra de Secesión", "La Gran Depresión", "La Segunda Guerra Mundial"] },
    ],
  },
  us_grgich: {
    fact: "Bodega fundada el 4 de julio de 1977 por el croata Mike Grgich, autor del Chardonnay ganador del Juicio de París. La boina que siempre llevaba puesta era su seña de identidad.",
    quiz: [
      { q: "¿A qué negocio se dedicaba la familia de Austin Hills, cofundador de Grgich Hills junto a Mike Grgich?", a: "Al café Hills Bros.", x: ["A los hoteles Hilton", "Al chocolate Hershey's", "Al embotellado de Coca-Cola"] },
    ],
  },
  us_kenzo: {
    fact: "Bodega de propiedad japonesa fundada en un amplio terreno en las laderas del sureste de Napa Valley. La elaboración está a cargo de Heidi Barrett, antigua enóloga de Screaming Eagle.",
    quiz: [
      { q: "¿Qué empresa de videojuegos fundó Kenzo Tsujimoto, creador de Kenzo Estate?", a: "Capcom", x: ["Nintendo", "Sega", "Konami"] },
    ],
  },
  us_hess: {
    fact: "Bodega fundada por el empresario suizo Donald Hess en las empinadas laderas de Mount Veeder. En esta zona de montaña, más fresca que el valle, elabora un Cabernet firme.",
    quiz: [
      { q: "¿Qué famoso espacio alberga el edificio de la bodega The Hess Collection?", a: "Una galería de arte contemporáneo con obras reunidas por el fundador", x: ["Un museo de locomotoras de vapor", "Un acuario subterráneo", "Un observatorio astronómico"] },
    ],
  },
  us_ddo: {
    fact: "Bodega fundada en 1987 en Dundee Hills (Oregón) por la familia borgoñona Drouhin. Se convirtió en el símbolo de que una gran casa de Borgoña reconocía el potencial del Pinot Noir de Oregón.",
    quiz: [
      { q: "¿Qué casa de Borgoña fundó Domaine Drouhin Oregon?", a: "Maison Joseph Drouhin", x: ["Louis Jadot", "Louis Latour", "Domaine de la Romanée-Conti"] },
      { q: "¿Qué hija de la familia Drouhin lleva muchos años al frente de la elaboración en Domaine Drouhin Oregon?", a: "Véronique Drouhin", x: ["Anne-Claude Leflaive", "Lalou Bize-Leroy", "Marie-Thérèse Charlin"] },
    ],
  },
  us_eyrie: {
    fact: "Comenzó en 1965 con las primeras cepas de Pinot Noir plantadas en el valle de Willamette. Su añada 1975 se midió con los borgoñas en una cata en París en 1979 y dio a conocer Oregón al mundo.",
    quiz: [
      { q: "¿Quién fundó The Eyrie Vineyards y recibió el apodo de «Papa Pinot»?", a: "David Lett", x: ["Robert Drouhin", "Ken Evenstad", "Paul Gerrie"] },
      { q: "¿Qué significa «eyrie» en inglés?", a: "Nido en lo alto de un ave rapaz", x: ["Valle con niebla", "Viejo molino de agua", "Cabaña en el bosque"] },
    ],
  },
  us_beaux_freres: {
    fact: "Su nombre significa «cuñados» en francés. Es la bodega de Pinot Noir que Michael Etzel fundó con su cuñado en Ribbon Ridge, en el valle de Willamette.",
    quiz: [
      { q: "¿Qué famoso crítico de vinos fundó Beaux Frères junto a su cuñado Michael Etzel?", a: "Robert Parker", x: ["Jancis Robinson", "Hugh Johnson", "James Suckling"] },
    ],
  },
  us_domaine_serene: {
    fact: "Bodega fundada en Dundee Hills por el matrimonio Ken y Grace Evenstad, que la llevó a la élite del Pinot Noir de Oregón. Su vino insignia lleva el apellido de la pareja.",
    quiz: [
      { q: "¿De quién viene el nombre «Serene» de Domaine Serene?", a: "De Serena, hija del matrimonio fundador", x: ["De la madre del fundador", "De la diosa griega de la luna", "De un antiguo topónimo de Oregón"] },
    ],
  },
  us_cristom: {
    fact: "Bodega fundada en 1992 por Paul Gerrie en Eola-Amity Hills. Sus viñedos llevan nombres de mujeres de la familia, como Jessie, Louise y Marjorie.",
    quiz: [
      { q: "¿Cómo surgió el nombre Cristom?", a: "Uniendo los nombres de los hijos del fundador, Christine y Tom", x: ["Del nombre de un monasterio cristiano", "De un manantial de aguas cristalinas", "Del nombre del primer enólogo"] },
    ],
  },
  us_csm_riesling: {
    fact: "Pionera del vino del estado de Washington y una de las bodegas que más Riesling producen en el mundo. Su sede es un edificio de estilo château en Woodinville, cerca de Seattle.",
    quiz: [
      { q: "¿Qué Riesling elabora Chateau Ste. Michelle desde 1999 junto con el alemán Dr. Loosen?", a: "Eroica", x: ["Insignia", "Rubicon", "Opus One"] },
    ],
  },
  us_eroica: {
    fact: "Riesling que Chateau Ste. Michelle, de Washington, y Ernst Loosen, del Mosela, elaboran juntos desde 1999. Une la delicadeza alemana con la fruta generosa de Washington.",
    quiz: [
      { q: "¿De dónde procede el nombre Eroica?", a: "De la Sinfonía n.º 3 de Beethoven", x: ["De una ópera de Mozart", "De un drama musical de Wagner", "De una polonesa de Chopin"] },
    ],
  },
  us_quilceda: {
    fact: "El mejor productor de Cabernet de Washington, fundado en 1978 por Alex Golitzin. Ha obtenido varias veces 100 puntos Parker, lo que demostró el nivel de los vinos de Washington.",
    quiz: [
      { q: "¿Qué legendario enólogo, tío de Alex Golitzin, le animó a hacer vino antes de que fundara Quilceda Creek?", a: "André Tchelistcheff", x: ["Robert Mondavi", "Warren Winiarski", "Paul Draper"] },
    ],
  },
  us_leonetti: {
    fact: "Gary Figgins fundó la bodega en 1977 y convirtió su vino en un vino de culto de Washington que solo se vende por lista de pedidos por correo. Su hijo Chris Figgins ha tomado el relevo.",
    quiz: [
      { q: "¿Qué lugar ocupa Leonetti Cellar en la historia del vino de Walla Walla?", a: "Fue la primera bodega comercial de Walla Walla", x: ["Fue la primera casa de espumosos de Washington", "Fue la primera bodega con certificación ecológica de Estados Unidos", "Fue la primera bodega fundada con capital francés"] },
    ],
  },
  us_col_solare: {
    fact: "Corte bordelés que Chateau Ste. Michelle, de Washington, y la familia italiana Antinori elaboran juntos desde la añada 1995. Usa uvas de las cálidas laderas de Red Mountain.",
    quiz: [
      { q: "¿Qué significa en italiano Col Solare?", a: "Colina resplandeciente", x: ["Montaña roja", "Río del sol", "Valle dorado"] },
    ],
  },
  us_cayuse: {
    fact: "Bodega de culto con viñedos en el lado de Oregón del valle de Walla Walla, en suelos cubiertos de cantos rodados del tamaño de un puño. Cultiva con agricultura biodinámica y solo vende por correo.",
    quiz: [
      { q: "¿Qué enólogo originario de Champaña fundó Cayuse?", a: "Christophe Baron", x: ["Christian Moueix", "Manfred Krankl", "Robert Drouhin"] },
      { q: "¿Qué significa en francés «Cailloux», el nombre del viñedo de Cayuse?", a: "Guijarros (piedras)", x: ["Colina", "Manantial", "Bosque"] },
    ],
  },
  us_drfrank: {
    fact: "Bodega fundada en 1962 a orillas del lago Keuka, en Finger Lakes, por el doctor Konstantin Frank, botánico de origen ucraniano. Es la pionera del Riesling de Nueva York.",
    quiz: [
      { q: "¿Qué demostró el doctor Konstantin Frank en Finger Lakes?", a: "Que las variedades europeas (vinífera) pueden cultivarse incluso en el frío de Nueva York", x: ["Que solo las uvas autóctonas americanas resisten el frío", "Que el Riesling solo madura en invernadero", "Que se puede hacer champán con sidra"] },
    ],
  },
};

export default T;
