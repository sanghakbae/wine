import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  us2_slwc_artemis: {
    fact: "Cabernet de Napa Valley que Stag's Leap Wine Cellars elabora mezclando uva de varios viñedos. Su nombre viene de la diosa griega de la caza.",
    quiz: [
      { q: "¿De qué leyenda viene el «Stags Leap» del nombre de la bodega que elabora Artemis?", a: "Un ciervo perseguido por cazadores saltó un acantilado rocoso", x: ["Una manada de ciervos cruzó el río", "Un jefe indígena se convirtió en ciervo", "En una mina de oro apareció una cornamenta gigante"] },
    ],
  },
  us2_slwc_fay: {
    fact: "Cabernet de un viñedo contiguo a S.L.V. El fundador, Warren Winiarski, compró el terreno vecino tras probar el vino que elaboraba el dueño de este viñedo.",
    quiz: [
      { q: "¿Qué hizo por primera vez en el distrito de Stags Leap en 1961 Nathan Fay, que da nombre al Fay Vineyard?", a: "Plantar Cabernet Sauvignon", x: ["Organizar la primera subasta de vino", "Excavar la primera cueva bodega", "Elaborar el primer espumoso"] },
    ],
  },
  us2_stagsleap_winery_ps: {
    fact: "Antigua finca del distrito de Stags Leap que sacó su primera añada en 1893 y conserva su mansión de piedra, la «Manor House». Desde hace mucho es famosa por su Petite Sirah.",
    quiz: [
      { q: "Tras un pleito, ¿cómo diferenciaron sus nombres Stags' Leap Winery y Stag's Leap Wine Cellars?", a: "Cambiando la posición del apóstrofo (')", x: ["Una añadió «Napa» delante del nombre", "Una adoptó un nombre en francés", "Una quitó la palabra «Winery»"] },
    ],
  },
  us2_chimney_rock: {
    fact: "Bodega del distrito de Stags Leap que arrancó la mitad de un antiguo campo de golf para plantar viñas. Sus edificios reflejan el gusto de su fundador, Hack Wilson, que hizo negocios durante años en Sudáfrica.",
    quiz: [
      { q: "¿Qué estilo arquitectónico tiene el edificio blanco de la bodega Chimney Rock?", a: "El estilo holandés del Cabo, de Sudáfrica", x: ["El estilo misión español", "El de una villa toscana", "El estilo Tudor inglés"] },
    ],
  },
  us2_clos_du_val: {
    fact: "La fundaron a principios de los años setenta en el distrito de Stags Leap el francés Bernard Portet y el empresario estadounidense John Goelet. Su 1972 participó en el «Juicio de París».",
    quiz: [
      { q: "¿En qué château de Burdeos fue director técnico el padre de Bernard Portet, fundador de Clos Du Val?", a: "Château Lafite Rothschild", x: ["Château Margaux", "Château Latour", "Château Haut-Brion"] },
      { q: "¿Qué puesto logró el Cabernet 1972 de Clos Du Val en la revancha de 1986, en el décimo aniversario del «Juicio de París»?", a: "El primero", x: ["El segundo", "El quinto", "El último"] },
    ],
  },
  us2_cliff_lede: {
    fact: "Bodega fundada en 2002 por el constructor canadiense Cliff Lede tras comprar viñedos en el distrito de Stags Leap.",
    quiz: [
      { q: "¿Qué nombres puso Cliff Lede a las parcelas de su viñedo?", a: "Títulos de grandes canciones y álbumes de rock", x: ["Nombres de dioses griegos", "Nombres de familiares", "Nombres de constelaciones"] },
    ],
  },
  us2_silverado: {
    fact: "Bodega que compró viñedos en los años setenta en las colinas del distrito de Stags Leap, junto al Silverado Trail, y empezó a elaborar vino en 1981.",
    quiz: [
      { q: "¿Qué familia fundó Silverado Vineyards?", a: "La familia de Walt Disney", x: ["La familia Coppola", "La familia Getty", "La familia Kennedy"] },
    ],
  },
  us2_shafer_rsr: {
    fact: "Chardonnay que Shafer Vineyards, del distrito de Stags Leap, elabora en un fresco viñedo de Carneros. Es famoso por ser amplio y a la vez fresco.",
    quiz: [
      { q: "¿De dónde viene el nombre «Red Shoulder Ranch»?", a: "Del gavilán de hombros rojos, un ave rapaz que vive en el viñedo", x: ["De una colina de tierra roja", "Del caballo rojo favorito del fundador", "Del apodo del antiguo dueño del rancho"] },
    ],
  },
  us2_farniente_cab: {
    fact: "El tinto emblemático de Far Niente, que devolvió la vida a una bodega de piedra de Oakville abandonada durante la Ley Seca. Se elabora con uva de su finca de Oakville.",
    quiz: [
      { q: "¿Qué famoso pintor estadounidense era sobrino de John Benson, pionero de la fiebre del oro que fundó Far Niente en 1885?", a: "Winslow Homer", x: ["Edward Hopper", "Norman Rockwell", "Andrew Wyeth"] },
    ],
  },
  us2_nickel_nickel: {
    fact: "Bodega fundada en 1997 en Oakville por la familia de Gil Nickel. El viñedo Sullenger es la parcela de Cabernet situada justo detrás de la bodega, una granja del siglo XIX restaurada.",
    quiz: [
      { q: "¿Qué principio sigue Nickel & Nickel en todos sus vinos?", a: "Una sola variedad de un solo viñedo", x: ["Mezclar uva de varias zonas", "No usar nunca barrica de roble", "Usar solo tapón de rosca"] },
      { q: "¿Qué bodega hermana de Oakville dirige la misma familia que Nickel & Nickel?", a: "Far Niente", x: ["Silver Oak", "Caymus", "Duckhorn"] },
    ],
  },
  us2_plumpjack: {
    fact: "Bodega fundada en 1995 en Oakville. Al embotellar con tapón de rosca la mitad de su Reserve Cabernet de 1997, avivó el debate sobre el cierre de los vinos de alta gama.",
    quiz: [
      { q: "¿Qué cofundador de PlumpJack llegó más tarde a gobernador de California?", a: "Gavin Newsom", x: ["Arnold Schwarzenegger", "Jerry Brown", "Gray Davis"] },
      { q: "¿De qué personaje de Shakespeare es apodo «PlumpJack»?", a: "Falstaff", x: ["Hamlet", "Shylock", "El rey Lear"] },
    ],
  },
  us2_overture: {
    fact: "Segundo vino de Opus One, elaborado desde 1993. Durante mucho tiempo salió sin añada, como mezcla de varias cosechas.",
    quiz: [
      { q: "¿Qué dos personas fundaron la bodega cuyo segundo vino es Overture?", a: "Robert Mondavi y el barón Philippe de Rothschild", x: ["Robert Mondavi y Christian Moueix", "Bill Harlan y Éric de Rothschild", "Jack Cakebread y André Tchelistcheff"] },
    ],
  },
  us2_harlan_maiden: {
    fact: "Segundo vino procedente del mismo viñedo de ladera al oeste de Oakville. Se vende primero a los clientes de la lista de correo.",
    quiz: [
      { q: "¿De qué vino es The Maiden el segundo vino?", a: "Harlan Estate", x: ["Dominus", "Opus One", "Screaming Eagle"] },
    ],
  },
  us2_promontory: {
    fact: "Cabernet que la familia de Bill Harlan elabora en una remota finca de montaña al oeste de Oakville. Destaca su terreno agreste, rodeado de bosque y roca.",
    quiz: [
      { q: "¿Qué emblemático vino de culto fundó antes la familia que elabora Promontory?", a: "Harlan Estate", x: ["Screaming Eagle", "Colgin", "Dominus"] },
    ],
  },
  us2_groth_reserve: {
    fact: "El Cabernet cumbre de la bodega que Dennis Groth, antiguo directivo de la empresa de videojuegos Atari, y su esposa fundaron en 1981 tras comprar viñedos en Oakville.",
    quiz: [
      { q: "¿Qué récord logró el Reserve Cabernet 1985 de Groth?", a: "Fue el primer vino de California con 100 puntos Parker", x: ["Fue el primer vino llevado al espacio", "Es el vino estadounidense más caro vendido en subasta", "Fue el primer gran vino con tapón de rosca"] },
    ],
  },
  us2_napanook: {
    fact: "Segundo vino que toma el nombre de un histórico viñedo de Yountville. Lo elabora la familia Moueix, procedente de una gran casa de Pomerol, en Burdeos.",
    quiz: [
      { q: "¿De qué vino es Napanook el segundo vino?", a: "Dominus", x: ["Opus One", "Harlan Estate", "Insignia"] },
    ],
  },
  us2_frogs_leap_sb: {
    fact: "Bodega fundada en 1981 por John Williams y Larry Turley. Apuesta por el cultivo en secano, sin riego, y por la agricultura ecológica.",
    quiz: [
      { q: "¿Qué bodega de Napa imita en broma el nombre de Frog's Leap?", a: "Stag's Leap Wine Cellars", x: ["Harlan Estate", "Far Niente", "Chateau Montelena"] },
      { q: "¿Qué había originalmente en el lugar donde Frog's Leap elaboró su primer vino?", a: "Una granja de ranas", x: ["Una oficina de correos", "Una estación de tren", "Un monasterio"] },
    ],
  },
  us2_mondavi_fume: {
    fact: "En 1968 Robert Mondavi lanzó con un nombre nuevo, «Fumé Blanc», un Sauvignon Blanc seco criado en barrica de roble.",
    quiz: [
      { q: "¿En qué vino francés se inspiró Robert Mondavi para crear el nombre «Fumé Blanc»?", a: "Pouilly-Fumé", x: ["Sancerre", "Muscadet", "Chablis"] },
    ],
  },
  us2_mondavi_private: {
    fact: "Marca californiana de vinos para el día a día con el nombre de Robert Mondavi. Elabora vinos asequibles con uva de varias zonas.",
    quiz: [
      { q: "¿Dónde fundó Robert Mondavi en 1966 la primera gran bodega de Napa desde la Ley Seca?", a: "Oakville", x: ["Calistoga", "Yountville", "Carneros"] },
    ],
  },
  us2_trefethen_chard: {
    fact: "Bodega familiar fundada en 1968 por Gene y Katie Trefethen en Oak Knoll, en el sur de Napa. Ocupa un edificio de madera del siglo XIX.",
    quiz: [
      { q: "¿Qué reconocimiento obtuvo el Chardonnay 1976 de Trefethen en la «Olimpiada del Vino» de París de 1979?", a: "Mejor Chardonnay del mundo", x: ["El blanco con mayor potencial de guarda", "Mejor bodega revelación", "Mejor vino de postre"] },
    ],
  },
  us2_freemark_abbey: {
    fact: "Gran casa de St. Helena heredera de la bodega que fundó en 1886 la pionera Josephine Tychson. Tanto su tinto como su blanco participaron en el «Juicio de París».",
    quiz: [
      { q: "¿Cómo se formó el nombre Freemark Abbey?", a: "Uniendo fragmentos de los nombres de los tres socios que compraron la bodega", x: ["Por un antiguo monasterio usado como bodega", "Por el monasterio del pueblo natal del fundador", "Es el nombre del primer dueño del viñedo"] },
    ],
  },
  us2_charles_krug: {
    fact: "La bodega más antigua de Napa Valley, fundada en 1861 por el prusiano Charles Krug. Tras la Ley Seca revivió de la mano de nuevos dueños.",
    quiz: [
      { q: "¿Qué familia compró Charles Krug en 1943 y la sigue dirigiendo hoy?", a: "La familia Mondavi", x: ["La familia Gallo", "La familia Beringer", "La familia Martini"] },
      { q: "¿Quién dejó Charles Krug tras pelearse con su hermano Peter y fundó su propia bodega en 1966?", a: "Robert Mondavi", x: ["Louis M. Martini", "Joe Heitz", "Warren Winiarski"] },
    ],
  },
  us2_louis_martini: {
    fact: "La fundó el italiano Louis M. Martini en St. Helena en 1933, al terminar la Ley Seca. También es famosa por el Cabernet de su viñedo Monte Rosso, en Sonoma.",
    quiz: [
      { q: "¿Qué empresa, la mayor bodega de Estados Unidos, compró Louis M. Martini en 2002?", a: "E. & J. Gallo", x: ["Constellation Brands", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us2_abreu_madrona: {
    fact: "Vino que firma con su nombre David Abreu, quien ha cultivado los viñedos de varias bodegas de culto de Napa. Madrona Ranch es un viñedo en las colinas al oeste de St. Helena.",
    quiz: [
      { q: "¿En qué oficio se hizo famoso primero David Abreu en Napa?", a: "Gestor de viñedos y experto en viticultura", x: ["Crítico de vinos", "Tonelero", "Subastador de vinos"] },
    ],
  },
  us2_sterling: {
    fact: "La fundó el británico Peter Newton en 1964 en Calistoga. En lo alto de una colina se alza su edificio blanco, que recuerda a la isla griega de Míkonos, donde él había vivido.",
    quiz: [
      { q: "¿En qué suben los visitantes de Sterling Vineyards hasta la bodega de la colina?", a: "En un teleférico (góndola aérea)", x: ["En un tren de vapor", "En globo aerostático", "En un carruaje de caballos"] },
    ],
  },
  us2_clos_pegase: {
    fact: "Bodega de Calistoga fundada por los coleccionistas de arte Jan y Mitsuko Shrem. Su edificio salió de un concurso de diseño organizado junto con el Museo de Arte Moderno de San Francisco.",
    quiz: [
      { q: "¿Qué arquitecto posmoderno diseñó el edificio de Clos Pegase?", a: "Michael Graves", x: ["Frank Gehry", "Philip Johnson", "Renzo Piano"] },
    ],
  },
  us2_castello_amorosa: {
    fact: "Bodega instalada en un castillo de estilo toscano del siglo XIII que Dario Sattui levantó cerca de Calistoga tras largos años de obras. Tiene foso, puente levadizo y hasta cámara de tortura.",
    quiz: [
      { q: "¿Qué bodega de Napa dirigía antes la familia de Dario Sattui, fundador de Castello di Amorosa?", a: "V. Sattui", x: ["Beringer", "Charles Krug", "Sterling Vineyards"] },
    ],
  },
  us2_schramsberg_jschram: {
    fact: "El espumoso cumbre de Schramsberg, elaborado solo con los mejores vinos base y largamente envejecido. Su nombre viene de Jacob Schram, que abrió aquí una bodega en 1862.",
    quiz: [
      { q: "¿Qué escritor visitó Schramsberg en 1880 y describió su vino como «poesía embotellada»?", a: "Robert Louis Stevenson", x: ["Mark Twain", "Jack London", "John Steinbeck"] },
    ],
  },
  us2_chappellet: {
    fact: "Primera bodega de Pritchard Hill, fundada en 1967 por Donn y Molly Chappellet en la ladera de esta colina. Es famosa por sus firmes Cabernets de montaña.",
    quiz: [
      { q: "¿Qué forma tiene el edificio de la bodega Chappellet?", a: "Una pirámide", x: ["Una cúpula redonda", "Una barrica gigante", "Una fortaleza medieval"] },
    ],
  },
  us2_darioush: {
    fact: "Bodega fundada en Napa por el empresario iraní Darioush Khaledi. Llama la atención su edificio de columnas de piedra inspirado en los antiguos palacios persas.",
    quiz: [
      { q: "¿En qué ruinas antiguas se inspira el edificio de la bodega Darioush?", a: "Persépolis", x: ["El Partenón", "Angkor Wat", "La Alhambra"] },
    ],
  },
  us2_cain_five: {
    fact: "El vino emblemático de Cain Vineyard, que mezcla variedades bordelesas cultivadas en terrazas en lo alto de las laderas de Spring Mountain.",
    quiz: [
      { q: "¿Qué indica el «Five» de Cain Five?", a: "Que mezcla las cinco variedades de Burdeos", x: ["Que procede de cinco viñedos", "Los cinco hijos del fundador", "Que sale tras 5 años de crianza"] },
    ],
  },
  us2_spring_mountain: {
    fact: "Bodega que alberga «Miravalle», una antigua mansión en las laderas de Spring Mountain. Su Chardonnay 1973 quedó cuarto entre los blancos del «Juicio de París».",
    quiz: [
      { q: "¿En qué serie de televisión estadounidense de los años ochenta aparecía la mansión Miravalle de Spring Mountain Vineyard?", a: "Falcon Crest", x: ["Dallas", "Dinastía", "Twin Peaks"] },
    ],
  },
  us2_newton_unfiltered: {
    fact: "Bodega fundada en 1977 en Spring Mountain por Peter y Su Hua Newton. Se hizo famosa por su Chardonnay embotellado sin filtrar, como indica su nombre.",
    quiz: [
      { q: "¿Qué bodega había fundado antes en Calistoga Peter Newton, creador de Newton Vineyard?", a: "Sterling Vineyards", x: ["Chateau Montelena", "Schramsberg", "Clos Pegase"] },
      { q: "¿Qué dañó gravemente la bodega de Newton Vineyard en 2020?", a: "Un incendio forestal (el Glass Fire)", x: ["Un terremoto", "Una inundación", "La filoxera"] },
    ],
  },
  us2_pride_merlot: {
    fact: "Bodega fundada por la familia Pride en un antiguo viñedo en la cima de la cordillera Mayacamas. La etiqueta de cada vino indica qué proporción de uva procede de cada uno de los dos condados.",
    quiz: [
      { q: "¿Qué atraviesa justo por el medio el viñedo y la bodega de Pride Mountain Vineyards?", a: "La línea divisoria entre los condados de Napa y Sonoma", x: ["Una antigua vía de tren", "La falla de San Andrés", "La autopista de la costa del Pacífico"] },
    ],
  },
  us2_mayacamas: {
    fact: "Bodega de piedra construida a finales del siglo XIX en lo alto de Mount Veeder. Su Cabernet de estilo clásico necesita largos años de guarda, y su 1971 participó en el «Juicio de París».",
    quiz: [
      { q: "¿Qué matrimonio dirigió Mayacamas durante casi 45 años a partir de 1968?", a: "Bob y Elinor Travers", x: ["Jack y Dolores Cakebread", "Dan y Margaret Duckhorn", "Gene y Katie Trefethen"] },
    ],
  },
  us2_lokoya: {
    fact: "Fundada en 1995, elabora por separado Cabernets de montaña de cuatro zonas de Napa: Mount Veeder, Howell Mountain, Spring Mountain y Diamond Mountain.",
    quiz: [
      { q: "¿De dónde viene el nombre Lokoya?", a: "De un pueblo indígena que vivía en Mount Veeder", x: ["Del nombre de un misionero español", "De un tipo de roca volcánica", "Del nombre de la hija del fundador"] },
    ],
  },
  us2_cardinale: {
    fact: "Mezcla de Cabernet de primer nivel, elaborada en la bodega de Oakville con uva seleccionada en montañas y valles de todo Napa.",
    quiz: [
      { q: "¿Quién fundó Jackson Family Wines, propietaria de Cardinale?", a: "Jess Jackson", x: ["Robert Mondavi", "Ernest Gallo", "Chuck Wagner"] },
    ],
  },
  us2_dunn_howell: {
    fact: "Pequeña bodega que Randy Dunn fundó a finales de los años setenta en Howell Mountain. Es famosa por sus firmes Cabernets de montaña, capaces de envejecer durante décadas.",
    quiz: [
      { q: "¿En qué bodega de Napa fue enólogo Randy Dunn antes de montar la suya?", a: "Caymus", x: ["Silver Oak", "Beringer", "Robert Mondavi"] },
    ],
  },
  us2_cade: {
    fact: "Bodega fundada en 2005 en la cresta de Howell Mountain. Elabora firmes Cabernets en suelos volcánicos a más de 400 m de altitud.",
    quiz: [
      { q: "¿Qué bodega había fundado antes en Oakville el grupo que creó CADE?", a: "PlumpJack", x: ["Far Niente", "Screaming Eagle", "Harlan Estate"] },
    ],
  },
  us2_conundrum: {
    fact: "Mezcla blanca que Chuck Wagner, de Caymus, lanzó en 1989. Combina varias variedades, como Chardonnay, Sauvignon Blanc y Moscatel.",
    quiz: [
      { q: "¿Qué significa el nombre «Conundrum»?", a: "Enigma", x: ["Armonía", "Dorado", "Aventura"] },
      { q: "¿Qué bodega de Napa dirige la familia que creó Conundrum?", a: "Caymus", x: ["Silver Oak", "Duckhorn", "Beringer"] },
    ],
  },
  us2_decoy_cab: {
    fact: "Marca que Duckhorn Vineyards lanzó en 1985 para un consumo más desenfadado. Hoy elabora Cabernets suaves con uva del condado de Sonoma.",
    quiz: [
      { q: "¿Qué es un «decoy», que da nombre a Decoy?", a: "Un señuelo: un pato de madera que los cazadores ponen en el agua para atraer patos", x: ["Un estanque donde descansan los patos", "Una trompeta que anuncia la caza al amanecer", "La cabaña del cazador"] },
    ],
  },
  us2_mer_soleil: {
    fact: "Chardonnay que Charlie Wagner, de la familia Wagner de Caymus, elabora en las Santa Lucia Highlands de Monterey, una zona fresca batida por la brisa marina.",
    quiz: [
      { q: "¿Qué significa en francés «Mer Soleil»?", a: "Mar y sol", x: ["Montaña y luna", "Viento y lluvia", "Colina dorada"] },
    ],
  },
  us2_belle_glos: {
    fact: "Pinot Noir creado por Joe Wagner, de la familia Wagner de Caymus. Su seña de identidad es el grueso lacre rojo que envuelve el cuello de la botella.",
    quiz: [
      { q: "¿De quién viene el nombre Belle Glos?", a: "De Lorna Belle Glos Wagner, abuela del fundador", x: ["De la hija del fundador", "Del primer dueño del viñedo", "De su pueblo natal en Francia"] },
      { q: "¿Qué homenajea el lacre rojo del cuello de Belle Glos?", a: "El pintalabios rojo que la abuela se ponía cada día", x: ["El color del escudo de la bodega", "El color de la piel de la Pinot Noir", "La amapola de California"] },
    ],
  },
  us2_orin_8years: {
    fact: "Mezcla basada en Zinfandel creada por Dave Phinney, de Orin Swift. Es famosa por sus impactantes etiquetas fotográficas.",
    quiz: [
      { q: "¿A qué se refiere el nombre «8 Years in the Desert» (8 años en el desierto)?", a: "A los 8 años en que se comprometió a no hacer Zinfandel tras vender The Prisoner", x: ["A 8 años de crianza en una cueva del desierto", "A la mezcla de 8 viñedos del desierto", "A un viaje de 8 años del fundador por el desierto"] },
    ],
  },
  us2_mumm_napa: {
    fact: "Bodega de espumosos fundada en Napa Valley por una casa de champán francesa. Se elabora, como el champán, con segunda fermentación en botella.",
    quiz: [
      { q: "¿Qué casa de champán francesa fundó Mumm Napa?", a: "G.H. Mumm", x: ["Moët & Chandon", "Taittinger", "Louis Roederer"] },
    ],
  },
  us2_domaine_carneros: {
    fact: "Bodega de espumosos fundada en 1987 en las colinas de Carneros por una casa de champán francesa. Es famosa por su elegante château en lo alto de una colina.",
    quiz: [
      { q: "¿Qué casa de champán fundó Domaine Carneros?", a: "Taittinger", x: ["Moët & Chandon", "G.H. Mumm", "Louis Roederer"] },
      { q: "¿En qué château de Champaña se inspira el edificio de Domaine Carneros?", a: "Château de la Marquetterie", x: ["Château de Chambord", "Château de Chenonceau", "Palacio de Versalles"] },
    ],
  },
  us2_goldeneye: {
    fact: "Bodega de Pinot Noir fundada en 1996 por el matrimonio Duckhorn en Anderson Valley, en el condado de Mendocino. La uva crece en un valle fresco por el que entra y sale la niebla marina.",
    quiz: [
      { q: "¿De dónde viene el nombre Goldeneye?", a: "De una especie de pato (el porrón osculado)", x: ["De la película de James Bond", "De las uvas maduradas hasta un tono dorado", "Del apodo del matrimonio fundador"] },
    ],
  },
  us2_verite_lamuse: {
    fact: "Vinos de estilo bordelés elaborados con uva de las zonas de montaña de Sonoma. Son tres: «La Muse», basado en Merlot; «La Joie», en Cabernet; y «Le Désir», en Cabernet Franc.",
    quiz: [
      { q: "¿Qué enólogo bordelés elabora Vérité?", a: "Pierre Seillan", x: ["Michel Rolland", "Christian Moueix", "Bernard Portet"] },
    ],
  },
  us2_kenwood_jacklondon: {
    fact: "Se elabora con uva de un viñedo en terrazas de lava situado en el antiguo rancho del novelista Jack London. La etiqueta lleva la cabeza de lobo que él usaba como ex libris.",
    quiz: [
      { q: "¿Cuál es la obra más conocida del escritor que da nombre al Jack London Vineyard de Kenwood?", a: "La llamada de lo salvaje", x: ["Las uvas de la ira", "Moby Dick", "Las aventuras de Huckleberry Finn"] },
    ],
  },
  us2_paul_hobbs_rrv: {
    fact: "Bodega fundada en 1991 en Sonoma por Paul Hobbs, que se formó en Robert Mondavi y Opus One. También es famoso como asesor de bodegas de varios países.",
    quiz: [
      { q: "¿Qué bodega cofundó Paul Hobbs en Mendoza (Argentina)?", a: "Viña Cobos", x: ["Catena Zapata", "Clos de los Siete", "Bodega Norton"] },
    ],
  },
  us2_peter_michael_bellecote: {
    fact: "Bodega fundada en las laderas de Knights Valley por sir Peter Michael, empresario británico de la electrónica y la radiodifusión. Cada uno de sus vinos lleva un nombre en francés.",
    quiz: [
      { q: "¿Qué significa en francés «Belle Côte»?", a: "Bella ladera", x: ["Bella dama", "Costa azul", "Pequeño castillo"] },
    ],
  },
  us2_marcassin: {
    fact: "Pequeña bodega fundada por la asesora enológica Helen Turley y su marido, John Wetlaufer, en la zona costera de Sonoma. Es un Chardonnay de culto que solo se vende por lista de correo.",
    quiz: [
      { q: "¿Qué significa en francés «marcassin»?", a: "Jabato (cría de jabalí)", x: ["Cervatillo", "Liebre", "Cría de zorro"] },
    ],
  },
  us2_ridge_lytton: {
    fact: "Mezcla de Zinfandel de Ridge procedente de viñedos centenarios de Dry Creek Valley. Junto con Geyserville, es uno de los dos pilares de los Zinfandel de Ridge.",
    quiz: [
      { q: "¿Qué tiene de particular la etiqueta de Ridge Vineyards?", a: "Enumera todos los ingredientes usados en la elaboración", x: ["Indica las coordenadas GPS del viñedo", "El enólogo firma cada botella", "Anota el tiempo que hizo el día de la vendimia"] },
    ],
  },
  us2_rochioli: {
    fact: "Pinot Noir de la familia Rochioli, que cultiva la tierra en Russian River Valley desde hace varias generaciones. Sus viñedos se consideran la joya del Pinot Noir de la zona.",
    quiz: [
      { q: "¿Qué bodega de culto de Russian River Valley cimentó su fama inicial con uva de los Rochioli?", a: "Williams Selyem", x: ["Kosta Browne", "Kistler", "La Crema"] },
    ],
  },
  us2_littorai: {
    fact: "Bodega de Pinot Noir de la costa fundada en 1993 por Ted Lemon y su esposa. Su nombre procede del latín y significa «las costas».",
    quiz: [
      { q: "¿En qué domaine de Meursault fue Ted Lemon, fundador de Littorai, el primer estadounidense al frente de la elaboración?", a: "Domaine Guy Roulot", x: ["Domaine Leflaive", "Domaine des Comtes Lafon", "Domaine de la Romanée-Conti"] },
    ],
  },
  us2_flowers: {
    fact: "Bodega de Pinot Noir y Chardonnay fundada por Walt y Joan Flowers en una cresta de la Sonoma Coast con vistas al Pacífico.",
    quiz: [
      { q: "¿Qué familia se asoció con Flowers en 2009 y tomó las riendas de la gestión?", a: "La familia Huneeus (Quintessa)", x: ["La familia Jackson", "La familia Gallo", "La familia Mondavi"] },
    ],
  },
  us2_merry_edwards: {
    fact: "Bodega de Pinot Noir de Russian River Valley fundada en 1997 por Merry Edwards, de la primera generación de enólogas de California.",
    quiz: [
      { q: "¿Qué casa de champán compró la bodega Merry Edwards en 2019?", a: "Louis Roederer", x: ["Moët & Chandon", "Taittinger", "Bollinger"] },
    ],
  },
  us2_sonoma_cutrer: {
    fact: "Popular Chardonnay de la Sonoma Coast lanzado en 1981. Es un habitual de las cartas de vinos de los restaurantes estadounidenses.",
    quiz: [
      { q: "¿Para qué deporte llegó a tener la bodega Sonoma-Cutrer campos de competición, e incluso organizó campeonatos del mundo?", a: "Croquet", x: ["Polo", "Golf", "Tenis"] },
    ],
  },
  us2_hanzell: {
    fact: "La fundó en Sonoma en 1953 James D. Zellerbach, antiguo embajador de Estados Unidos en Italia. Fue la primera bodega de California en adoptar en serio la crianza en barrica de roble francés.",
    quiz: [
      { q: "¿Cómo se formó el nombre Hanzell?", a: "Uniendo el nombre de su esposa, Hana, y el apellido Zellerbach", x: ["De un antiguo topónimo húngaro", "Significa «pequeña colina» en alemán", "Es el nombre de su primer enólogo"] },
    ],
  },
  us2_buena_vista: {
    fact: "La primera bodega comercial de California, fundada en Sonoma en 1857. En 2011 la compró y la revitalizó el borgoñón Jean-Charles Boisset.",
    quiz: [
      { q: "¿Qué pionero de origen húngaro fundó Buena Vista y es llamado «el padre del vino californiano»?", a: "Agoston Haraszthy", x: ["Charles Krug", "Gustave Niebaum", "Georges de Latour"] },
    ],
  },
  us2_csj_cinq: {
    fact: "Mezcla de estilo bordelés de Sonoma cuya añada 1996 fue elegida en 1999 «vino del año» por Wine Spectator: el primer vino de Sonoma en lograrlo.",
    quiz: [
      { q: "¿Qué significa en francés «Cinq Cépages»?", a: "Cinco variedades", x: ["Cinco viñedos", "Quinta vendimia", "Cinco hermanos"] },
    ],
  },
  us2_rodney_strong: {
    fact: "Bodega de Rodney Strong, pionero que empezó en el negocio del vino en 1959 y encabezó la conversión del condado de Sonoma en una gran zona vinícola.",
    quiz: [
      { q: "¿A qué se dedicaba Rodney Strong antes de elaborar vino?", a: "Era bailarín de Broadway", x: ["Boxeador", "Pianista de jazz", "Locutor de radio"] },
    ],
  },
  us2_ferrari_carano_fume: {
    fact: "Bodega fundada en 1981 en Dry Creek Valley por el matrimonio Don y Rhonda Carano. Es famosa por su mansión de estilo italiano, «Villa Fiore», y sus jardines.",
    quiz: [
      { q: "¿Qué negocio dirigía en Reno (Nevada) Don Carano, fundador de Ferrari-Carano?", a: "El hotel casino Eldorado", x: ["Una estación de esquí", "Una compañía ferroviaria", "Una mina de plata"] },
    ],
  },
  us2_dry_creek_fume: {
    fact: "Primera bodega fundada en Dry Creek Valley tras la Ley Seca, creada por David Stare en 1972. Fue la primera de Sonoma en usar el nombre «Fumé Blanc».",
    quiz: [
      { q: "¿Qué aparece dibujado en la etiqueta de Dry Creek Vineyard?", a: "Un velero", x: ["Un faro", "Un halcón", "Una parra"] },
    ],
  },
  us2_seghesio_zin: {
    fact: "Casa de referencia del Zinfandel en Sonoma, nacida en 1895 cuando el italiano Edoardo Seghesio plantó su primer viñedo de Zinfandel. Logró sobrevivir a la Ley Seca.",
    quiz: [
      { q: "¿Qué empresa compró Seghesio Family Vineyards en 2011?", a: "Crimson Wine Group", x: ["E&J Gallo", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us2_coppola_claret: {
    fact: "Se inspiró en un clarete de 1906 hallado en la bodega de una antigua finca de Napa comprada por el cineasta Coppola. La botella va envuelta en una redecilla dorada.",
    quiz: [
      { q: "¿De qué región era originalmente el vino tinto al que los ingleses llamaban «claret»?", a: "Burdeos", x: ["Borgoña", "Rioja", "Toscana"] },
    ],
  },
  us2_sofia_bdb: {
    fact: "Nació de la promesa que Coppola hizo a su hija Sofia de elaborar algún día un espumoso con su nombre. Es un espumoso ligero y aromático.",
    quiz: [
      { q: "¿Qué película dirigió Sofia Coppola, que da nombre a Sofia Blanc de Blancs?", a: "Lost in Translation", x: ["El padrino", "Apocalypse Now", "Drácula"] },
    ],
  },
  us2_iron_horse: {
    fact: "Casa familiar de espumosos en Green Valley, dentro de Russian River Valley. Desde la cena de la cumbre Reagan-Gorbachov de 1985 se sirve con frecuencia en actos de la Casa Blanca.",
    quiz: [
      { q: "¿De dónde procede el nombre Iron Horse («caballo de hierro»)?", a: "De una estación del ferrocarril que cruzaba estas tierras en el siglo XIX", x: ["De un caballo de carreras del fundador", "De una herradura de una antigua herrería", "Del nombre de una mina cercana"] },
    ],
  },
  us2_j_cuvee20: {
    fact: "Casa de espumosos fundada en 1986 en Russian River Valley por la hija del fundador de Jordan Winery. E&J Gallo la compró en 2015.",
    quiz: [
      { q: "¿Qué significa la «J» de J Vineyards?", a: "Judy Jordan, su fundadora", x: ["La inicial de «Jubilee» (jubileo)", "La forma de J del viñedo", "John, el hijo de la fundadora"] },
    ],
  },
  us2_gloria_ferrer: {
    fact: "Primera bodega de espumosos de Carneros, abierta en 1986 por la familia Ferrer, gran nombre del cava español.",
    quiz: [
      { q: "¿Quién es la «Gloria» de Gloria Ferrer?", a: "La esposa de José Ferrer, de la familia Ferrer", x: ["La hija del fundador", "Una santa española", "Una cantante de ópera"] },
      { q: "¿Cuál es la casa de cava española de la familia Ferrer, fundadora de Gloria Ferrer?", a: "Freixenet", x: ["Codorníu", "Juvé & Camps", "Recaredo"] },
    ],
  },
  us2_korbel_natural: {
    fact: "Casa de espumosos fundada en 1882 en Russian River Valley por los tres hermanos Korbel. Se ha usado varias veces para el brindis de la investidura presidencial de Estados Unidos.",
    quiz: [
      { q: "¿De qué tierra natal procedían los hermanos Korbel?", a: "Bohemia (actual República Checa)", x: ["Toscana (Italia)", "Alsacia (Francia)", "Cataluña (España)"] },
    ],
  },
  us2_turley_oldvines: {
    fact: "Casa de referencia del Zinfandel fundada por Larry Turley en 1993. Ha buscado y preservado viñedos viejos de California de más de 100 años.",
    quiz: [
      { q: "¿Qué bodega de Napa cofundó Larry Turley antes de Turley Wine Cellars?", a: "Frog's Leap", x: ["Ridge Vineyards", "Ravenswood", "Seghesio"] },
      { q: "¿Qué famosa asesora enológica es hermana de Larry Turley?", a: "Helen Turley", x: ["Heidi Barrett", "Merry Edwards", "Cathy Corison"] },
    ],
  },
  us2_ravenswood: {
    fact: "Bodega especializada en Zinfandel fundada por Joel Peterson en 1976. Es famosa por su logotipo de tres cuervos formando un círculo.",
    quiz: [
      { q: "¿Cuál es el famoso lema de Ravenswood?", a: "No Wimpy Wines (nada de vinos flojos)", x: ["In Vino Veritas", "Bottled Poetry", "Time's Fun When You're Having Flies"] },
    ],
  },
  us2_menage_a_trois: {
    fact: "Coupage tinto creado en 1996 por la bodega Folie à Deux de Napa. Con su sabor dulce y suave impulsó la moda de los coupages tintos en Estados Unidos.",
    quiz: [
      { q: "¿A qué alude el nombre Ménage à Trois («entre tres»)?", a: "A las tres variedades de uva mezcladas", x: ["A sus tres fundadores", "A tres viñedos", "A tres fermentaciones"] },
      { q: "¿Cuál es la marca emblemática de la familia Trinchero, que compró Ménage à Trois en 2004?", a: "Sutter Home", x: ["Barefoot", "Woodbridge", "Kendall-Jackson"] },
    ],
  },
  us2_tablas_esprit: {
    fact: "Fundada en 1989 en Paso Robles por la familia francesa Perrin y el importador Robert Haas. Se plantó con esquejes de variedades del Ródano traídos de Francia.",
    quiz: [
      { q: "¿Qué gran finca de Châteauneuf-du-Pape pertenece a la familia Perrin, cofundadora de Tablas Creek?", a: "Château de Beaucastel", x: ["Château Rayas", "Domaine du Vieux Télégraphe", "Château La Nerthe"] },
    ],
  },
  us2_saxum_jb: {
    fact: "Coupage de estilo Ródano que Justin Smith elabora en el viñedo James Berry, al oeste de Paso Robles. La añada 2007 fue elegida «vino del año» de Wine Spectator en 2010.",
    quiz: [
      { q: "¿Qué significa «saxum» en latín?", a: "Roca", x: ["Sol", "Uva", "Viento"] },
    ],
  },
  us2_laventure: {
    fact: "Bodega fundada en 1998 en Paso Robles por Stephan Asseo, que antes elaboraba vino en Burdeos. Su nombre significa «la aventura» en francés.",
    quiz: [
      { q: "¿Por qué Stephan Asseo dejó Burdeos para instalarse en Paso Robles?", a: "Para mezclar Syrah y Cabernet sin las ataduras de la normativa", x: ["Porque sus viñedos de Burdeos se inundaron", "Para elaborar espumosos", "Para heredar el negocio familiar"] },
    ],
  },
  us2_justin_isosceles: {
    fact: "Coupage de estilo bordelés emblema de Justin, bodega fundada por Justin Baldwin en 1981 en Paso Robles. En 2010 la compró The Wonderful Company, dueña de Fiji Water y POM Wonderful.",
    quiz: [
      { q: "¿A qué alude el nombre Isosceles («triángulo isósceles»)?", a: "A un coupage de tres variedades bordelesas", x: ["A tres viñedos en colinas", "A tres hermanos fundadores", "A tres años de crianza"] },
    ],
  },
  us2_daou_sol: {
    fact: "Cabernet emblemático de la bodega que los hermanos libaneses Georges y Daniel Daou fundaron en la cima de una montaña de Paso Robles. Su nombre rinde homenaje al padre de los hermanos.",
    quiz: [
      { q: "¿Qué empresa vinícola australiana compró DAOU Vineyards en 2023?", a: "Treasury Wine Estates", x: ["Constellation Brands", "E&J Gallo", "LVMH"] },
    ],
  },
  us2_qupe_syrah: {
    fact: "Pionera de las variedades del Ródano en la Central Coast, fundada por Bob Lindquist en 1982. Compartía bodega de elaboración con Au Bon Climat.",
    quiz: [
      { q: "¿Qué significa «qupé» en la lengua de los indígenas chumash?", a: "Amapola de California", x: ["Foca", "Roble", "Águila"] },
    ],
  },
  us2_bonny_doon_cigare: {
    fact: "Coupage de estilo Châteauneuf-du-Pape elaborado por Randall Grahm, apodado «Rhône Ranger». En la etiqueta aparece una nave en forma de puro volando sobre el viñedo.",
    quiz: [
      { q: "¿Qué prohibía la ordenanza de Châteauneuf-du-Pape de 1954 que parodia Le Cigare Volant?", a: "Que los platillos volantes (ovnis) aterrizaran en los viñedos", x: ["Vendimiar de noche", "La vendimia mecánica", "Los tapones de plástico"] },
    ],
  },
  us2_foxen_pinot: {
    fact: "Bodega fundada en 1985 por Dick Doré y Bill Wathen en tierras de la familia Doré en Santa Maria Valley. Su marca distintiva es un ancla torcida.",
    quiz: [
      { q: "¿De quién procede el ancla de la etiqueta de Foxen?", a: "De William Benjamin Foxen, antepasado y antiguo capitán de barco inglés que marcaba su ganado con un ancla", x: ["Del misionero español Junípero Serra", "Del almirante Chester Nimitz", "Del padre del primer enólogo"] },
    ],
  },
  us2_hitching_post: {
    fact: "Pinot Noir de Santa Bárbara elaborado por Frank Ostini, dueño del asador «The Hitching Post» de Buellton, junto con su amigo Gray Hartley.",
    quiz: [
      { q: "¿Qué película de 2004 hizo famosos al restaurante y al vino Hitching Post?", a: "Entre copas (Sideways)", x: ["Bottle Shock", "Un buen año", "Mondovino"] },
    ],
  },
  us2_sanford_pinot: {
    fact: "Bodega de Sta. Rita Hills que Miles y Jack, los protagonistas de la película «Entre copas» (Sideways), visitan en primer lugar para catar.",
    quiz: [
      { q: "¿Qué hizo Richard Sanford en 1971 en Sta. Rita Hills junto a Michael Benedict?", a: "Plantar por primera vez Pinot Noir en la zona", x: ["Abrir la primera bodega de espumosos", "Organizar la primera subasta de vinos", "Obtener la primera certificación ecológica"] },
    ],
  },
  us2_fess_parker: {
    fact: "Bodega familiar fundada por el actor Fess Parker en Santa Ynez Valley. Es conocida por su Pinot Noir y sus variedades del Ródano de Santa Bárbara.",
    quiz: [
      { q: "¿Qué héroe pionero estadounidense interpretó Fess Parker en una serie de Disney de los años cincuenta?", a: "Davy Crockett", x: ["Buffalo Bill", "Wyatt Earp", "El Llanero Solitario"] },
    ],
  },
  us2_chalone_chard: {
    fact: "Bodega situada en una meseta caliza cerca de Pinnacles. Como en Borgoña, cultiva Chardonnay y Pinot Noir en suelos calcáreos.",
    quiz: [
      { q: "¿Qué puesto obtuvo el Chardonnay 1974 de Chalone en la categoría de blancos del Juicio de París de 1976?", a: "Tercero", x: ["Primero", "Sexto", "Décimo"] },
    ],
  },
  us2_wente_morningfog: {
    fact: "Chardonnay de la bodega familiar más antigua en funcionamiento continuo de Estados Unidos, fundada en 1883 en Livermore Valley por el alemán Carl Wente.",
    quiz: [
      { q: "¿Cómo se llama el clon de Chardonnay del que procede la mayoría de los viñedos de Chardonnay de California?", a: "Clon Wente", x: ["Clon Mondavi", "Clon Chablis", "Clon Napa"] },
    ],
  },
  us2_concannon_ps: {
    fact: "Fundada en 1883 en Livermore Valley por el irlandés James Concannon. Durante la Ley Seca sobrevivió elaborando vino de misa.",
    quiz: [
      { q: "¿Qué hizo Concannon por primera vez en Estados Unidos en los años sesenta?", a: "Lanzar un Petite Sirah con el nombre de la variedad en la etiqueta", x: ["Usar tapón de rosca en un vino de gama alta", "Elaborar un espumoso rosado", "Vender vino en lata"] },
    ],
  },
  us2_7deadlyzins: {
    fact: "Popular vino de Zinfandel de viñas viejas lanzado por los hermanos Michael y David, de la familia Phillips, agricultores en Lodi desde hace generaciones.",
    quiz: [
      { q: "¿A qué alude el nombre 7 Deadly Zins?", a: "A los siete pecados capitales del cristianismo (Seven Deadly Sins)", x: ["A las siete maravillas del mundo", "A siete viñedos", "A siete años de crianza"] },
    ],
  },
  us2_adelsheim: {
    fact: "Bodega pionera de Oregón, nacida en 1971 cuando David Adelsheim y su esposa compraron terrenos en las colinas del norte de Willamette Valley.",
    quiz: [
      { q: "¿Quién pintó los retratos de mujer que adornaron durante años las etiquetas de Adelsheim?", a: "Ginny Adelsheim, cofundadora", x: ["Andy Warhol", "Norman Rockwell", "Georgia O'Keeffe"] },
    ],
  },
  us2_argyle_brut: {
    fact: "Pionera de los espumosos de Oregón, fundada en Dundee en 1987 por un enólogo australiano y el enólogo estadounidense Rollin Soles.",
    quiz: [
      { q: "¿Qué enólogo australiano fundó Argyle junto a Rollin Soles?", a: "Brian Croser", x: ["Peter Lehmann", "Wolf Blass", "John Duval"] },
    ],
  },
  us2_sokol_blosser: {
    fact: "Bodega pionera de Oregón que plantó viñas en Dundee Hills en 1971. Desde muy pronto apostó por la agricultura y la arquitectura sostenibles.",
    quiz: [
      { q: "¿De dónde viene el nombre Sokol Blosser?", a: "De unir los apellidos de sus fundadores, Susan Sokol y Bill Blosser", x: ["De unir los nombres de dos pueblos", "Significa «colina soleada» en polaco", "Es el nombre del primer dueño del viñedo"] },
    ],
  },
  us2_wvv_estate: {
    fact: "Bodega de Willamette Valley fundada por Jim Bernau en 1983. Fue pionera en dar a conocer el Pinot Noir de Oregón al gran público.",
    quiz: [
      { q: "¿Qué estructura de propiedad tan peculiar tiene Willamette Valley Vineyards?", a: "Cotiza en el NASDAQ y pertenece a miles de pequeños accionistas", x: ["Pertenece a una comunidad monástica", "Pertenece a una universidad estatal", "Pertenece a una tribu indígena"] },
    ],
  },
  us2_ponzi_tavola: {
    fact: "Bodega pionera de Willamette Valley fundada en 1970 por el matrimonio Dick y Nancy Ponzi. Su hija Luisa se encargó de la elaboración durante muchos años.",
    quiz: [
      { q: "¿Qué casa de champán compró Ponzi Vineyards en 2021?", a: "Bollinger", x: ["Moët & Chandon", "Louis Roederer", "Taittinger"] },
    ],
  },
  us2_resonance: {
    fact: "Primera bodega que una gran casa de Borgoña fundó fuera de Francia. Nació en 2013 con la compra del viñedo Résonance, en Yamhill-Carlton.",
    quiz: [
      { q: "¿Qué négociant de Borgoña fundó Résonance?", a: "Louis Jadot", x: ["Joseph Drouhin", "Bouchard Père & Fils", "Albert Bichot"] },
    ],
  },
  us2_nicolas_jay: {
    fact: "Bodega fundada en Oregón en 2014 por Jean-Nicolas Méo, viticultor borgoñón de Vosne-Romanée, y Jay Boberg, ejecutivo de la industria discográfica.",
    quiz: [
      { q: "¿Qué domaine de Borgoña dirige Jean-Nicolas Méo, cofundador de Nicolas-Jay?", a: "Domaine Méo-Camuzet", x: ["Domaine Leroy", "Domaine Dujac", "Domaine Georges Roumier"] },
    ],
  },
  us2_columbia_crest_ge: {
    fact: "Gran bodega de Washington del mismo grupo que Chateau Ste. Michelle. Se encuentra en Horse Heaven Hills, con vistas al río Columbia.",
    quiz: [
      { q: "¿Qué vino de Columbia Crest fue elegido «vino del año» de Wine Spectator en 2009?", a: "El Reserve Cabernet Sauvignon 2005", x: ["El Grand Estates Merlot", "El H3 Cabernet Sauvignon", "El Two Vines Red Blend"] },
    ],
  },
  us2_14hands_cab: {
    fact: "Marca de Washington lanzada en 2005 por el grupo Chateau Ste. Michelle. Nació para restaurantes, pero su éxito la convirtió en una gran marca.",
    quiz: [
      { q: "¿A qué alude el nombre 14 Hands?", a: "A la alzada, medida en «manos», de los pequeños caballos salvajes de Horse Heaven Hills", x: ["A sus 14 fundadores", "A 14 viñedos", "A 14 vendimiadores"] },
    ],
  },
  us2_kung_fu_girl: {
    fact: "Riesling creado por Charles Smith, el rebelde del vino de Washington. En 2016 sus marcas se vendieron a Constellation Brands.",
    quiz: [
      { q: "¿A qué se dedicaba Charles Smith en Europa antes de hacer vino?", a: "Era mánager de grupos de rock", x: ["Era skater profesional", "Era doble de acción en el cine", "Era chef de restaurante"] },
    ],
  },
  us2_andrew_will_sorella: {
    fact: "Coupage de estilo bordelés de la bodega fundada por Chris Camarda en 1989. «Sorella» significa «hermana» en italiano y homenajea a su hermana fallecida.",
    quiz: [
      { q: "¿De quién procede el nombre de la bodega Andrew Will?", a: "De Andrew, sobrino del fundador, y Will, su hijo", x: ["De los dos hermanos del fundador", "De los dos dueños del primer viñedo", "De un poeta inglés"] },
    ],
  },
  us2_woodward_canyon: {
    fact: "Segunda bodega de Walla Walla Valley, fundada por Rick Small en 1981. Contribuyó muy pronto a forjar la reputación del Cabernet de Washington.",
    quiz: [
      { q: "¿Qué caracteriza las etiquetas de la Artist Series de Woodward Canyon?", a: "Cada año llevan la obra de un pintor distinto", x: ["Llevan una foto de la familia fundadora", "Llevan una foto aérea del viñedo", "Llevan un gráfico del clima de cada añada"] },
    ],
  },
  us2_lecole41_semillon: {
    fact: "Tercera bodega de Walla Walla Valley, abierta en 1983 en una antigua escuela de Frenchtown construida en 1915. «L'Ecole» significa «la escuela» en francés.",
    quiz: [
      { q: "¿Qué es el «41» de L'Ecole No 41?", a: "El número del distrito escolar al que pertenecía la escuela", x: ["El 41.º cumpleaños del fundador", "La carretera 41", "Sus 41 viñedos"] },
    ],
  },
  us2_long_shadows_sequel: {
    fact: "Syrah de Long Shadows, proyecto de Allen Shoup, antiguo director de Chateau Ste. Michelle, que encargó un vino a cada uno de varios enólogos de fama mundial.",
    quiz: [
      { q: "¿En qué gran casa australiana fue enólogo jefe John Duval, que elabora Sequel?", a: "Penfolds", x: ["Henschke", "Torbreck", "Two Hands"] },
    ],
  },
  us2_long_shadows_pedestal: {
    fact: "Tinto de Washington basado en Merlot que Long Shadows encarga a un asesor estrella de Burdeos.",
    quiz: [
      { q: "¿Qué famoso asesor enológico bordelés elabora Pedestal Merlot?", a: "Michel Rolland", x: ["Pierre Seillan", "Stéphane Derenoncourt", "Éric Boissenot"] },
    ],
  },
  us2_long_shadows_feather: {
    fact: "Cabernet de Washington que Long Shadows encarga a un maestro del Cabernet de montaña de Napa.",
    quiz: [
      { q: "¿Qué enólogo de Howell Mountain (Napa) elabora Feather Cabernet?", a: "Randy Dunn", x: ["Heidi Barrett", "Paul Hobbs", "Philippe Melka"] },
    ],
  },
  us2_long_shadows_poetsleap: {
    fact: "Riesling de Washington que Long Shadows encarga a un reputado viticultor de la región alemana del Nahe.",
    quiz: [
      { q: "¿Qué viticultor del Nahe (Alemania) elabora Poet's Leap Riesling?", a: "Armin Diel", x: ["Ernst Loosen", "Egon Müller", "Helmut Dönnhoff"] },
    ],
  },
  us2_doubleback: {
    fact: "Bodega fundada en su tierra natal por Drew Bledsoe, estrella del deporte nacido en Walla Walla, tras retirarse. Chris Figgins, de Leonetti, dirigió la elaboración en sus inicios.",
    quiz: [
      { q: "¿A qué se dedicaba antes Drew Bledsoe, fundador de Doubleback?", a: "Era quarterback de la NFL", x: ["Era jugador de la NBA", "Era lanzador de las Grandes Ligas de béisbol", "Era golfista profesional"] },
      { q: "¿Qué significado encierra el nombre Doubleback?", a: "Que volvió a su tierra natal", x: ["Que el vino se cría dos veces", "Que mezcla dos viñedos", "Que es el nombre de una jugada de fútbol americano"] },
    ],
  },
  us2_wiemer_dry_riesling: {
    fact: "Referencia del Riesling en Finger Lakes, fundada en 1979 a orillas del lago Seneca por Hermann J. Wiemer, originario de Bernkastel, en el Mosela alemán.",
    quiz: [
      { q: "¿Qué negocio ha llevado Hermann J. Wiemer junto con su bodega?", a: "Un vivero que injerta y vende variedades de uva europeas", x: ["Una quesería", "Una sidrería", "Una tonelería"] },
    ],
  },
  us2_drfrank_rkatsiteli: {
    fact: "Blanco elaborado por el Dr. Konstantin Frank con una variedad resistente al frío de la antigua Unión Soviética que llevó a Finger Lakes.",
    quiz: [
      { q: "¿De qué país es originaria la uva Rkatsiteli que el Dr. Frank plantó en Finger Lakes?", a: "Georgia", x: ["Armenia", "Grecia", "Bulgaria"] },
    ],
  },
  us2_wolffer_rose: {
    fact: "Rosado de la bodega fundada en 1988 en los Hamptons (Long Island) por Christian Wölffer, natural de Hamburgo. Es casi un símbolo de los veranos de Nueva York.",
    quiz: [
      { q: "¿Cómo se llama el nuevo rosado que lanzó Wölffer Estate aprovechando el auge del rosado?", a: "Summer in a Bottle", x: ["Whispering Angel", "Miraval", "Hampton Water"] },
    ],
  },
  us2_bedell_merlot: {
    fact: "Bodega del North Fork de Long Island. Su Merlot 2009 se sirvió en el almuerzo de la investidura presidencial de 2013 y fue el primer vino de Nueva York usado en una investidura.",
    quiz: [
      { q: "¿Cuál es la obra más famosa de New Line Cinema, el estudio que dirigía Michael Lynne, comprador de Bedell Cellars en 2000?", a: "El Señor de los Anillos", x: ["Harry Potter", "Star Wars", "El padrino"] },
    ],
  },
  us2_barboursville_octagon: {
    fact: "Bodega de Virginia fundada en 1976 por la familia italiana Zonin. En la finca se conservan las ruinas de la antigua mansión de un gobernador diseñada por Thomas Jefferson.",
    quiz: [
      { q: "¿De dónde procede el nombre Octagon («octógono»)?", a: "De la sala octogonal de la mansión diseñada por Jefferson", x: ["De una barrica octogonal", "De un coupage de ocho variedades", "De un viñedo dividido en ocho parcelas"] },
    ],
  },
  us2_rdv_lostmountain: {
    fact: "Fundada por el exmarine Rutger de Vink en una colina de granito al pie de las Blue Ridge, en Virginia, con una primera añada en 2008. Hace poco se vendió a la familia propietaria de Château Montrose.",
    quiz: [
      { q: "¿Qué es el nombre RdV?", a: "Las iniciales del fundador y la abreviatura de «rendez-vous»", x: ["Una sigla francesa de «el tinto de Virginia»", "Las coordenadas del viñedo", "El nombre de un río cercano"] },
    ],
  },
  us2_early_mountain_pm: {
    fact: "Bodega fundada en 2012 al pie de las Blue Ridge, en Virginia, por un matrimonio de empresarios de internet. Apuesta por el Petit Manseng, la uva blanca emblemática de Virginia.",
    quiz: [
      { q: "¿Qué empresa de internet cofundó Steve Case, fundador de Early Mountain?", a: "AOL", x: ["Yahoo", "Netscape", "eBay"] },
    ],
  },
  us2_gruet_brut: {
    fact: "Casa de espumosos fundada en 1984 por una familia francesa de Champaña que compró tierras en una meseta de Nuevo México. Se elabora con el mismo método que el champán.",
    quiz: [
      { q: "¿En qué región francesa elaboraba vino originalmente la familia Gruet?", a: "Champaña", x: ["Alsacia", "Borgoña", "Loira"] },
    ],
  },
  us2_missionhill_reserve_chard: {
    fact: "Bodega situada en una colina con vistas al lago Okanagan. Es famosa por su edificio de aire monacal y su alto campanario.",
    quiz: [
      { q: "¿Qué premio obtuvo el Chardonnay 1992 de Mission Hill en el International Wine & Spirit Competition (IWSC) de Londres de 1994?", a: "El trofeo al mejor Chardonnay del mundo", x: ["El premio al mejor vino de hielo", "El premio al mejor espumoso", "El premio al mejor coupage tinto"] },
    ],
  },
  us2_burrowing_owl_merlot: {
    fact: "Bodega fundada por Jim Wyse en la zona desértica del sur del Okanagan. Debe su nombre al mochuelo de madriguera (burrowing owl), un ave que estaba desapareciendo de la región.",
    quiz: [
      { q: "¿Qué hace Burrowing Owl con lo que cobra por las catas?", a: "Lo dona a una organización que protege al mochuelo de madriguera", x: ["Lo destina a becas para los trabajadores del viñedo", "Lo usa para comprar barricas de roble", "Lo dona al cuerpo de bomberos local"] },
    ],
  },
  us2_quails_gate_foch: {
    fact: "Bodega de la familia Stewart, que cultiva la tierra en West Kelowna desde 1908. Elabora un tinto intenso con viñas viejas plantadas en los años sesenta.",
    quiz: [
      { q: "¿En honor de quién se bautizó la uva Maréchal Foch?", a: "Ferdinand Foch, comandante supremo aliado en la Primera Guerra Mundial", x: ["Napoleón Bonaparte", "El marqués de La Fayette", "Charles de Gaulle"] },
    ],
  },
  us2_osoyoos_larose: {
    fact: "Bodega de estilo bordelés fundada en 1998 a orillas del lago Osoyoos por el grupo bordelés Taillan y la canadiense Vincor. Hoy pertenece solo a Taillan.",
    quiz: [
      { q: "¿De qué château de Burdeos del grupo Taillan procede el «Larose» de Osoyoos Larose?", a: "Château Gruaud Larose", x: ["Château Latour", "Château Lagrange", "Château Lafon-Rochet"] },
    ],
  },
  us2_nkmip_syrah: {
    fact: "Bodega situada en Osoyoos, zona desértica de Canadá. Nk'Mip significa «tierra baja» en la lengua indígena local.",
    quiz: [
      { q: "¿Qué récord ostenta Nk'Mip Cellars?", a: "Es la primera bodega de Norteamérica propiedad de una comunidad indígena", x: ["Fue la primera en producir vino de hielo en Canadá", "Obtuvo la primera certificación ecológica de Canadá", "Es la primera casa de espumosos de Norteamérica"] },
    ],
  },
  us2_summerhill_cipes: {
    fact: "Espumoso emblemático de la bodega ecológica fundada en 1986 en Kelowna por la familia Cipes. Es un coupage basado en Riesling con segunda fermentación en botella.",
    quiz: [
      { q: "¿Para qué usa Summerhill Pyramid Winery su pirámide, inspirada en la Gran Pirámide de Guiza?", a: "Para criar el vino", x: ["Para celebrar catas", "Para pasificar uvas", "Para fabricar barricas"] },
    ],
  },
  us2_clos_jordanne: {
    fact: "Bodega de Niágara fruto de la alianza entre la borgoñona Boisset y la canadiense Vincor. Su añada 2005 quedó primera en el «Juicio de Montreal» de 2009, por delante de grandes vinos de Borgoña y California.",
    quiz: [
      { q: "¿Qué arquitecto diseñó la bodega de Le Clos Jordanne, que nunca llegó a construirse?", a: "Frank Gehry", x: ["Renzo Piano", "Tadao Ando", "Zaha Hadid"] },
    ],
  },
  us2_peller_ice_cuvee: {
    fact: "Espumoso de Niágara elaborado con el método del champán. En la última fase se le añade un ingrediente muy canadiense que le da un dulzor sutil.",
    quiz: [
      { q: "¿Qué se añade en el licor de expedición (dosage) final de Ice Cuvée?", a: "Vino de hielo de Vidal", x: ["Jarabe de arce", "Miel", "Brandy de manzana"] },
    ],
  },
  us2_gretzky_cab_merlot: {
    fact: "Coupage tinto de la bodega y destilería de whisky que la leyenda del hockey sobre hielo Wayne Gretzky fundó en Niagara-on-the-Lake.",
    quiz: [
      { q: "¿Qué dorsal llevaba Wayne Gretzky como jugador, muy presente en su marca de vinos?", a: "99", x: ["66", "87", "9"] },
    ],
  },
};

export default T;
