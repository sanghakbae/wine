import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  ib_sorisanlorenzo: {
    fact: "Primer vino de viñedo único de Gaja, lanzado en 1967. Durante un tiempo se vendió como «Langhe Nebbiolo» con un poco de Barbera en el ensamblaje, y volvió a la denominación Barbaresco a partir de la añada 2013.",
    quiz: [
      { q: "¿Qué significa «Sorì» en dialecto piamontés, en el Sorì San Lorenzo de Gaja?", a: "Ladera soleada orientada al sur", x: ["Valle brumoso", "Atrio de una iglesia", "Cepa vieja"] },
    ],
  },
  ib_monfortino: {
    fact: "Barolo Riserva que Giacomo Conterno elabora con uvas de Serralunga. Solo sale al mercado tras varios años de crianza en grandes toneles de madera y es la cumbre del Barolo tradicional.",
    quiz: [
      { q: "¿En qué añadas se elabora el Monfortino Barolo Riserva?", a: "Solo en las añadas excepcionales", x: ["Todos los años sin excepción", "Exactamente cada dos años", "Solo en los años bisiestos"] },
      { q: "¿Qué viñedo de Serralunga, comprado por Giovanni Conterno, aporta las uvas del Monfortino?", a: "Cascina Francia", x: ["Monprivato", "Brunate", "Cannubi"] },
    ],
  },
  ib_giacosa: {
    fact: "Barolo del viñedo Falletto, que Bruno Giacosa, maestro del Nebbiolo que se hizo famoso como negociante comprando uva, adquirió en propiedad en Serralunga.",
    quiz: [
      { q: "¿De qué color es la etiqueta que Bruno Giacosa reserva a las Riserva de sus mejores añadas?", a: "Roja", x: ["Negra", "Dorada", "Azul"] },
    ],
  },
  ib_bartolomascarello: {
    fact: "Símbolo del Barolo tradicional, fiel al antiguo método de elaborar un único Barolo mezclando uvas de varios viñedos. Tras la muerte de Bartolo, su hija Maria Teresa tomó el relevo.",
    quiz: [
      { q: "¿Qué lema escribió Bartolo Mascarello en unas etiquetas dibujadas por él mismo, causando revuelo?", a: "No Barrique, No Berlusconi", x: ["Terroir or Nothing", "Viva il Nebbiolo", "Slow Wine, Slow Life"] },
    ],
  },
  ib_monprivato: {
    fact: "Vino emblemático de la familia Mascarello, propietaria casi única del viñedo Monprivato en Castiglione Falletto. Se considera uno de los Barolos tradicionales más elegantes y aromáticos.",
    quiz: [
      { q: "¿Qué Riserva elabora Giuseppe Mascarello, solo en las buenas añadas, con la mejor parcela de Monprivato?", a: "Ca d'Morissio", x: ["Monfortino", "Bricco Rocche", "La Poja"] },
    ],
  },
  ib_vietti: {
    fact: "Prestigiosa casa de Castiglione Falletto que, bajo la dirección de Alfredo Currado, fue de las primeras en lanzar Barolos de viñedo único. En 2016 la compró la familia estadounidense Krause.",
    quiz: [
      { q: "¿Qué uva blanca piamontesa, casi desaparecida, rescató Alfredo Currado, de Vietti?", a: "Arneis", x: ["Cortese", "Moscato", "Timorasso"] },
    ],
  },
  ib_piocesare: {
    fact: "Bodega familiar que sigue elaborando vino en su bodega del casco antiguo de Alba, donde aún quedan restos de la muralla romana. Los descendientes del fundador la dirigen generación tras generación.",
    quiz: [
      { q: "¿En qué año fundó Cesare Pio la bodega Pio Cesare en Alba?", a: "1881", x: ["1781", "1931", "1971"] },
    ],
  },
  ib_marchesibarolo: {
    fact: "Bodega heredera de las antiguas cavas de los marqueses Falletti, en el pueblo de Barolo. Se dice que aquí el Barolo se consolidó como un tinto seco de larga guarda.",
    quiz: [
      { q: "¿Cuántos toneles de vino envió la marquesa Giulia Colbert Falletti al rey Carlos Alberto, según la historia de Marchesi di Barolo?", a: "325 (uno por día, salvo en Cuaresma)", x: ["12 (uno por mes)", "52 (uno por semana)", "1000"] },
    ],
  },
  ib_fontanafredda: {
    fact: "Bodega nacida en una finca real de Serralunga d'Alba. El conde de Mirafiori, hijo del rey y de su amante, fue quien impulsó en serio la elaboración de vino.",
    quiz: [
      { q: "¿Qué rey compró la finca de Fontanafredda y se la regaló a su amante, la «Bela Rosin»?", a: "Víctor Manuel II", x: ["Humberto I", "Carlos Alberto", "Napoleón III"] },
    ],
  },
  ib_scavino: {
    fact: "Bodega familiar de Castiglione Falletto que, con Barolos modernos criados en barricas pequeñas, lideró la corriente de los «Barolo Boys» en las décadas de 1980 y 1990.",
    quiz: [
      { q: "¿Qué enólogo, al frente de Paolo Scavino, se dio a conocer con sus Barolos modernos?", a: "Enrico Scavino", x: ["Elio Altare", "Roberto Voerzio", "Bruno Giacosa"] },
    ],
  },
  ib_ceretto: {
    fact: "Prestigiosa casa de Alba impulsada por los hermanos Bruno y Marcello Ceretto. En el viñedo Brunate de La Morra se alza la colorida «capilla del Barolo», propiedad de la familia.",
    quiz: [
      { q: "¿A qué artistas encargó la familia Ceretto pintar de colores la pequeña capilla del viñedo Brunate?", a: "Sol LeWitt y David Tremlett", x: ["Keith Haring y Andy Warhol", "Damien Hirst", "Jeff Koons"] },
    ],
  },
  ib_altare: {
    fact: "Líder de los «Barolo Boys» que en La Morra introdujo maceraciones cortas y barricas nuevas pequeñas, abriendo paso al Barolo moderno. Aquello le valió un fuerte enfrentamiento con su padre.",
    quiz: [
      { q: "¿Qué destruyó Elio Altare con una motosierra para imponer sus nuevos métodos?", a: "Los viejos toneles grandes (botti) de su padre", x: ["Los árboles viejos del viñedo", "El tejado de la bodega", "La antigua prensa de uva"] },
    ],
  },
  ib_voerzio: {
    fact: "Barolo de viñedo único elaborado por Roberto Voerzio en La Morra. Cerequio es un célebre viñedo situado a caballo entre los municipios de La Morra y Barolo.",
    quiz: [
      { q: "¿Por qué práctica en el viñedo es famoso Roberto Voerzio?", a: "Aclarar racimos sin piedad para reducir al extremo los rendimientos", x: ["Vendimiar la uva después de congelarla", "Regar las cepas todos los días", "Vendimiar solo a máquina"] },
    ],
  },
  ib_produttori: {
    fact: "Cooperativa formada por los viticultores del pueblo de Barbaresco. En las buenas añadas embotella por separado las Riservas de nueve viñedos, como Asili o Rabajà.",
    quiz: [
      { q: "¿Quién fundó en 1958 los Produttori del Barbaresco junto con los agricultores?", a: "El párroco del pueblo", x: ["El rey de Italia", "Angelo Gaja", "Un comerciante de vinos inglés"] },
    ],
  },
  ib_braida: {
    fact: "Vino emblemático de Giacomo Bologna, que elevó la Barbera de simple vino de mesa a gran vino. Debutó con la añada 1982.",
    quiz: [
      { q: "¿Qué novedad probó por primera vez Giacomo Bologna, de Braida, con el Bricco dell'Uccellone, causando sensación?", a: "Criar la Barbera en barricas nuevas pequeñas", x: ["Hacer un espumoso de Barbera", "Elaborarlo con uvas pasificadas", "Mezclarla con uvas blancas"] },
    ],
  },
  ib_cascinetta: {
    fact: "Moscato d'Asti dulce, con una burbuja suave y en torno al 5 % de alcohol. La fermentación se detiene a medio camino para conservar el dulzor y los aromas florales de la uva.",
    quiz: [
      { q: "¿Cómo se llama en Italia un vino de burbuja ligera como el Moscato d'Asti Cascinetta de Vietti?", a: "Frizzante", x: ["Passito", "Ripasso", "Recioto"] },
    ],
  },
  ib_martiniasti: {
    fact: "Espumoso dulce de uva Moscato fermentada de una sola vez en grandes depósitos cerrados que atrapan la burbuja. Es ligero, con en torno al 7 % de alcohol.",
    quiz: [
      { q: "¿Qué bebida dio fama mundial a Martini & Rossi, productor del Martini Asti?", a: "Vermut", x: ["Grappa", "Limoncello", "Sambuca"] },
      { q: "¿En qué año abrió sus puertas en Turín Martini & Rossi, productor del Martini Asti?", a: "1863", x: ["1763", "1923", "1963"] },
    ],
  },
  ib_ganciaasti: {
    fact: "Pionera del spumante italiano con sede en Canelli, en la zona de Asti. Su fundador, Carlo Gancia, es conocido como el «padre del spumante italiano».",
    quiz: [
      { q: "¿A qué ciudad francesa fue Carlo Gancia, fundador de Gancia, para aprender a elaborar espumosos?", a: "Reims", x: ["Burdeos", "Dijon", "Lyon"] },
    ],
  },
  ib_ornellaia: {
    fact: "Supertoscano elaborado con variedades bordelesas en las colinas costeras de Bolgheri. Tras varios cambios de propietario, hoy pertenece a la familia Frescobaldi.",
    quiz: [
      { q: "¿Quién fundó Ornellaia en 1981?", a: "Lodovico Antinori", x: ["Piero Antinori", "Mario Incisa della Rocchetta", "Angelo Gaja"] },
      { q: "¿Cómo se llama el proyecto de Ornellaia en el que cada año un artista crea una etiqueta especial?", a: "Vendemmia d'Artista", x: ["Arte in Bottiglia", "Biennale del Vino", "Galleria Bolgheri"] },
    ],
  },
  ib_masseto: {
    fact: "Uno de los tintos más caros de Italia, elaborado solo con Merlot de un único viñedo en las colinas de Bolgheri. Debutó con la añada 1986 y hoy tiene su propia bodega.",
    quiz: [
      { q: "¿Qué suelo especial caracteriza el viñedo de Masseto?", a: "Arcilla de tono azulado", x: ["Ceniza volcánica negra", "Caliza cretácica blanca", "Arenisca roja"] },
    ],
  },
  ib_tignanello: {
    fact: "Supertoscano del viñedo Tignanello de la familia Antinori. Debutó con la añada 1971 y cambió el rumbo del vino italiano.",
    quiz: [
      { q: "¿Por qué se consideró rompedor el Tignanello en la década de 1970?", a: "Crió la Sangiovese en barricas pequeñas y no llevaba uvas blancas", x: ["Se hizo dulce con uvas pasificadas", "Fue el primero con tapón de rosca", "Mezclaba vino blanco con tinto"] },
    ],
  },
  ib_solaia: {
    fact: "Supertoscano que Antinori elabora sobre todo con Cabernet Sauvignon en el viñedo contiguo al de Tignanello. Salió por primera vez con la añada 1978.",
    quiz: [
      { q: "¿Qué honor recibió el Solaia 1997, el primer vino italiano en lograrlo?", a: "Número 1 del «Vino del Año» de Wine Spectator", x: ["Los primeros 100 puntos de Robert Parker", "Vino de misa oficial del Vaticano", "Proveedor acreditado de la Casa Real británica"] },
      { q: "¿Qué significa el nombre Solaia?", a: "Lugar muy soleado", x: ["Tierra salobre", "Árbol solitario", "Parcela cercada por muros de piedra"] },
    ],
  },
  ib_guadoaltasso: {
    fact: "Tinto emblemático de la finca que la familia Antinori posee en Bolgheri. Debutó con la añada 1990.",
    quiz: [
      { q: "¿Qué significa el nombre Guado al Tasso?", a: "El vado del tejón", x: ["La colina del zorro", "La fuente del lobo", "El bosque del ciervo"] },
    ],
  },
  ib_casanovadineri: {
    fact: "Bodega fundada por la familia Neri en Montalcino a principios de la década de 1970. Tenuta Nuova es un Brunello denso y potente de sus viñedos del sur.",
    quiz: [
      { q: "¿Qué honor recibió en 2006 el Casanova di Neri Tenuta Nuova 2001?", a: "Número 1 del «Vino del Año» de Wine Spectator", x: ["Una condecoración del presidente de Italia", "El gran premio de la Bienal de Venecia", "Vino de misa oficial del Vaticano"] },
    ],
  },
  ib_soldera: {
    fact: "Legendario Sangiovese que Gianfranco Soldera elaboraba en Montalcino en grandes toneles de roble de Eslavonia. Tras romper con el consorcio del Brunello, se comercializa como IGT Toscana.",
    quiz: [
      { q: "¿Qué ocurrió en 2012 en la bodega de Case Basse?", a: "Un exempleado resentido abrió los toneles y derramó varias añadas", x: ["Una inundación anegó la bodega", "Un rayo provocó un incendio", "Robaron todas las añadas"] },
    ],
  },
  ib_poggiodisotto: {
    fact: "Bodega de Castelnuovo dell'Abate, al sureste de Montalcino. Con maceraciones largas y crianza en grandes toneles de madera, elabora Brunellos tradicionales y delicados.",
    quiz: [
      { q: "¿Quién fundó Poggio di Sotto y lo dio a conocer con sus Brunellos tradicionales?", a: "Piero Palmucci", x: ["Gianfranco Soldera", "Angelo Gaja", "Paolo De Marchi"] },
    ],
  },
  ib_banfi: {
    fact: "Bodega que levantó una enorme finca al sur de Montalcino. Dentro de ella se alza el castillo medieval de Poggio alle Mura.",
    quiz: [
      { q: "¿Quiénes fundaron Castello Banfi en Montalcino en 1978?", a: "Los hermanos Mariani, italoestadounidenses", x: ["La familia Antinori", "La familia Rothschild francesa", "Un comerciante de vinos de la Casa Real británica"] },
    ],
  },
  ib_ilpoggione: {
    fact: "Una de las fincas más antiguas de la zona, en Sant'Angelo in Colle, al sur de Montalcino. La misma familia la cuida generación tras generación desde finales del siglo XIX.",
    quiz: [
      { q: "¿Qué familia es propietaria de Il Poggione desde hace generaciones?", a: "La familia Franceschi", x: ["La familia Biondi Santi", "La familia Frescobaldi", "La familia Antinori"] },
    ],
  },
  ib_coldorcia: {
    fact: "Gran finca de Montalcino situada, como indica su nombre, en una colina que domina el río Orcia. Cultiva en ecológico su extenso viñedo.",
    quiz: [
      { q: "¿Con qué bebida se había hecho famosa la familia Marone Cinzano, que compró Col d'Orcia en 1973?", a: "El vermut Cinzano", x: ["Campari", "Aperol", "Fernet-Branca"] },
    ],
  },
  ib_castellodiama: {
    fact: "Prestigiosa casa de Chianti Classico situada en la pequeña aldea de Ama, en Gaiole in Chianti. También se hizo famosa por «L'Apparita», elaborado con Merlot.",
    quiz: [
      { q: "¿Qué incorporó Castello di Ama a sus viñedos y su villa desde alrededor de 2000, causando sensación?", a: "Instalaciones de grandes artistas contemporáneos", x: ["Un museo de órdenes de caballería medievales", "Un balneario de vinoterapia", "Una gran planta solar"] },
    ],
  },
  ib_flaccianello: {
    fact: "Vino emblemático de Fontodi, elaborado por Giovanni Manetti en Panzano con 100 % Sangiovese. Debutó con la añada 1981.",
    quiz: [
      { q: "¿Qué apodo recibe el anfiteatro de laderas de Panzano de donde procede el Flaccianello?", a: "Conca d'Oro (cuenca de oro)", x: ["Val d'Orcia", "Colli Senesi", "Monte Amiata"] },
    ],
  },
  ib_fontalloro: {
    fact: "Vino 100 % Sangiovese de Fèlsina, en Castelnuovo Berardenga. Procede de viñedos situados a caballo entre el Chianti Classico y los Colli Senesi.",
    quiz: [
      { q: "¿Quién compró la finca de Fèlsina en 1966?", a: "Domenico Poggiali", x: ["Piero Antinori", "Sergio Manetti", "Gianfranco Soldera"] },
    ],
  },
  ib_cepparello: {
    fact: "Vino 100 % Sangiovese que dio fama a Paolo De Marchi. En 2022 la bodega pasó a manos del grupo francés EPI, propietario de Biondi Santi.",
    quiz: [
      { q: "¿De dónde viene el nombre de la bodega Isole e Olena?", a: "De la unión de dos aldeas, Isole y Olena", x: ["De los nombres de las dos hijas del fundador", "De una isla y un olivo", "Del nombre de un antiguo monasterio"] },
    ],
  },
  ib_ducaleoro: {
    fact: "El Chianti Classico de más alta gama de Ruffino, con su etiqueta dorada. Ruffino es una histórica casa toscana fundada en 1877 por dos primos.",
    quiz: [
      { q: "¿Con quién está relacionado el nombre «Ducale» (ducal) de la Riserva Ducale de Ruffino?", a: "Con el duque de Aosta, aficionado a los vinos Ruffino", x: ["Con el gran duque Médici", "Con el duque de Milán", "Con el dux de Venecia"] },
    ],
  },
  ib_nipozzano: {
    fact: "Chianti Rufina Riserva de los viñedos que rodean el castillo medieval de Nipozzano, en Rufina, al este de Florencia. Es el vino emblemático de la familia Frescobaldi.",
    quiz: [
      { q: "¿Desde hace cuánto tiempo elabora vino en la Toscana la familia Frescobaldi?", a: "Más de 700 años", x: ["Unos 50 años", "Unos 150 años", "Unos 300 años"] },
    ],
  },
  ib_luce: {
    fact: "Vino de Montalcino que ensambla Sangiovese y Merlot. Su nombre significa «luz» y la etiqueta muestra un sol radiante.",
    quiz: [
      { q: "¿Qué dos familias crearon juntas Luce, que debutó con la añada 1993?", a: "Frescobaldi y Robert Mondavi", x: ["Antinori y Rothschild", "Gaja y Mondavi", "Frescobaldi y Rothschild"] },
    ],
  },
  ib_serrenuove: {
    fact: "Segundo vino de Ornellaia, lanzado con la añada 1997. Está pensado para disfrutarse más joven que el gran vino.",
    quiz: [
      { q: "¿Qué familia es hoy propietaria de Ornellaia, que elabora Le Serre Nuove?", a: "Frescobaldi", x: ["Antinori", "Gaja", "Marzotto"] },
    ],
  },
  ib_pergoletorte: {
    fact: "Legendario vino 100 % Sangiovese de Sergio Manetti, que acabó abandonando la denominación Chianti Classico. Debutó con la añada 1977.",
    quiz: [
      { q: "¿Qué imagen cambia en cada añada en la etiqueta de Le Pergole Torte?", a: "Un retrato de mujer del pintor Alberto Manfredi", x: ["Un grabado de una iglesia", "Una acuarela de un racimo", "El escudo de la familia"] },
    ],
  },
  ib_avignonesi: {
    fact: "Bodega emblemática de Montepulciano. Desde 2009 la dirige la belga Virginie Saverys, que la convirtió a la agricultura biodinámica.",
    quiz: [
      { q: "¿Por qué vino de postre toscano, elaborado con uvas pasificadas y de larga crianza, es especialmente famosa Avignonesi?", a: "Vin Santo", x: ["Recioto", "Marsala", "Moscato d'Asti"] },
    ],
  },
  ib_redigaffi: {
    fact: "Vino de culto 100 % Merlot de Tua Rita, en Suvereto, en la costa toscana. Debutó con la añada 1994.",
    quiz: [
      { q: "¿De dónde viene el nombre de la bodega Tua Rita, que elabora Redigaffi?", a: "Del nombre de su fundadora, Rita Tua", x: ["Del nombre de la iglesia del pueblo", "De una antigua calzada romana", "De un río cercano"] },
    ],
  },
  ib_villaantinori: {
    fact: "Clásico tinto toscano de Antinori, lanzado por primera vez en 1928. En la etiqueta aparece la villa de la familia Antinori.",
    quiz: [
      { q: "¿En qué año empezó la familia Antinori en el negocio del vino al ingresar en el gremio de vinateros de Florencia?", a: "1385", x: ["1685", "1885", "1935"] },
    ],
  },
  ib_quintarelli: {
    fact: "Legendario Amarone de Giuseppe Quintarelli, el «maestro del Véneto». Solo se elaboraba en las buenas añadas y salía al mercado tras una larga crianza en grandes toneles de madera.",
    quiz: [
      { q: "¿Cómo se llama el vino que Giuseppe Quintarelli elaboraba al estilo del Amarone con Cabernet Franc y otras uvas pasificadas?", a: "Alzero", x: ["La Poja", "Costasera", "Ripassa"] },
    ],
  },
  ib_dalforno: {
    fact: "Amarone de culto que Romano Dal Forno elabora en un estilo extremadamente concentrado en el valle de Illasi, al este de Valpolicella. Se cría largo tiempo en barricas nuevas.",
    quiz: [
      { q: "¿Qué enólogo fue una especie de maestro y la mayor influencia del joven Romano Dal Forno?", a: "Giuseppe Quintarelli", x: ["Angelo Gaja", "Gianfranco Soldera", "Edoardo Valentini"] },
    ],
  },
  ib_allegrini: {
    fact: "Amarone que la familia Allegrini elabora generación tras generación en Fumane, en la Valpolicella Classica. Es una casa de prestigio pionera en los vinos de viñedo único.",
    quiz: [
      { q: "¿Cómo se llama el emblemático vino de viñedo único que Allegrini elabora con 100 % Corvina?", a: "La Poja", x: ["Alzero", "Costasera", "Monprivato"] },
    ],
  },
  ib_bertani: {
    fact: "Amarone tradicional famoso por su larga crianza antes de salir al mercado. Bertani fue una de las pioneras en embotellar y vender Amarone.",
    quiz: [
      { q: "¿En qué año fundaron los hermanos Bertani su bodega en Verona?", a: "1857", x: ["1757", "1907", "1957"] },
    ],
  },
  ib_zenato: {
    fact: "Amarone de Zenato, bodega con sede al sur del lago de Garda. La fundó Sergio Zenato en 1960 y también es muy conocida por su blanco de Lugana.",
    quiz: [
      { q: "¿Cómo se llama el vino de Zenato que se obtiene refermentando Valpolicella sobre los hollejos del Amarone?", a: "Ripassa", x: ["La Poja", "Alzero", "Costasera"] },
    ],
  },
  ib_tommasi: {
    fact: "Amarone que la familia Tommasi elabora generación tras generación en Pedemonte, en Valpolicella. La familia dirige la bodega desde hace más de 100 años.",
    quiz: [
      { q: "¿Cómo se llama el método, usado en el Amarone de Tommasi, de secar durante meses la uva vendimiada para concentrar sus azúcares?", a: "Appassimento", x: ["Solera", "Charmat", "Botrytis"] },
    ],
  },
  ib_santamargherita: {
    fact: "Vino que en 1961 vinificó la Pinot Grigio sin contacto con los hollejos, como un blanco limpio, y desató una moda mundial. El conde Gaetano Marzotto fundó la empresa en 1935.",
    quiz: [
      { q: "¿De quién toma su nombre Santa Margherita?", a: "De la esposa del conde Marzotto, su fundador", x: ["De la santa patrona de Venecia", "De la hija mayor del fundador", "De una iglesia cercana"] },
    ],
  },
  ib_mionetto: {
    fact: "Prestigiosa casa de prosecco con sede en Valdobbiadene. Con el método Charmat, de segunda fermentación en grandes depósitos, preserva los aromas frescos de la fruta.",
    quiz: [
      { q: "¿Cuál es el color emblemático de la etiqueta del Mionetto Prosecco Brut?", a: "Naranja", x: ["Negro", "Azul", "Rosa"] },
      { q: "¿En qué año fundó Francesco Mionetto la bodega Mionetto en Valdobbiadene?", a: "1887", x: ["1787", "1937", "1987"] },
    ],
  },
  ib_lamarca: {
    fact: "Marca cooperativa que agrupa a miles de viticultores de la zona de Treviso. Es uno de los proseccos más vendidos en Estados Unidos.",
    quiz: [
      { q: "¿Qué color caracteriza la etiqueta de La Marca Prosecco?", a: "Azul verdoso claro (tipo azul Tiffany)", x: ["Naranja", "Negro", "Rojo oscuro"] },
    ],
  },
  ib_cartizze: {
    fact: "Prosecco de Cartizze, la zona de colinas más famosa de Valdobbiadene. La familia Bisol cultiva viñas en la zona desde el siglo XVI.",
    quiz: [
      { q: "¿Qué familia, famosa por el espumoso Ferrari de Trento, compró Bisol en 2014?", a: "La familia Lunelli", x: ["La familia Antinori", "La familia Marzotto", "La familia Frescobaldi"] },
    ],
  },
  ib_ninofranco: {
    fact: "Prosecco emblemático de Nino Franco, bodega familiar de Valdobbiadene. Primo Franco, de la tercera generación, es considerado uno de los grandes artífices de la mejora del prosecco.",
    quiz: [
      { q: "¿En qué año abrió sus puertas Nino Franco en Valdobbiadene?", a: "1919", x: ["1819", "1969", "1999"] },
    ],
  },
  ib_tunina: {
    fact: "Emblemático ensamblaje blanco del Friuli que Silvio Jermann elabora con varias uvas blancas. Presentado en la década de 1970, elevó el prestigio de los blancos italianos.",
    quiz: [
      { q: "¿Qué Chardonnay de Jermann recibió su nombre inspirándose en una canción de U2?", a: "Dreams", x: ["Vintage Tunina", "Terre Alte", "Rarità"] },
    ],
  },
  ib_gravner: {
    fact: "Blanco ambarino que Josko Gravner, de Oslavia, pueblo fronterizo con Eslovenia, elabora macerando la Ribolla Gialla con sus hollejos durante meses. Se le considera pionero del «vino naranja».",
    quiz: [
      { q: "¿Qué recipiente de fermentación y crianza adoptó Josko Gravner, causando sensación?", a: "La tinaja de barro georgiana enterrada (qvevri)", x: ["El depósito de acero inoxidable a presión", "El depósito de hormigón en forma de huevo", "El tonel de acacia"] },
    ],
  },
  ib_terrealte: {
    fact: "Emblemático blanco del Friuli que Livio Felluga elabora ensamblando tres variedades de las colinas de Rosazzo. Gana profundidad con los años de guarda.",
    quiz: [
      { q: "¿Qué aparece dibujado en las etiquetas de los vinos de Livio Felluga?", a: "Un mapa antiguo de las colinas de viñedos", x: ["Una góndola veneciana", "El escudo familiar con un león", "Un campesino vendimiando"] },
    ],
  },
  ib_terlano: {
    fact: "Cooperativa del Alto Adigio fundada en 1893 por un grupo de viticultores. Es famosa por sus blancos, que conservan la frescura incluso tras décadas de guarda.",
    quiz: [
      { q: "¿Cómo se llama la rara serie que Cantina Terlano comercializa tras más de 10 años de crianza sobre lías?", a: "Rarità", x: ["Vin Santo", "Riserva Ducale", "Vecchio Samperi"] },
    ],
  },
  ib_cadelbosco: {
    fact: "Espumoso emblemático de Franciacorta, fruto de la finca que Maurizio Zanella levantó al sur del lago de Iseo. Como el champán, se elabora con segunda fermentación en botella.",
    quiz: [
      { q: "¿Qué significa el nombre Ca' del Bosco?", a: "La casa del bosque", x: ["El castillo de la colina", "La granja del lago", "La iglesia de piedra"] },
      { q: "¿Qué escultor creó la enorme puerta de bronce de la entrada de Ca' del Bosco?", a: "Arnaldo Pomodoro", x: ["Alberto Giacometti", "Marino Marini", "Umberto Boccioni"] },
    ],
  },
  ib_bellavista: {
    fact: "Cuvée básica de una de las casas de espumosos más representativas de Franciacorta. Como su nombre indica, se asienta en las colinas de Erbusco, con una «bella vista» sobre el paisaje.",
    quiz: [
      { q: "¿Qué fundador, procedente del sector de la construcción, creó Bellavista en 1977?", a: "Vittorio Moretti", x: ["Maurizio Zanella", "Carlo Gancia", "Gaetano Marzotto"] },
    ],
  },
  ib_planeta: {
    fact: "Uno de los primeros vinos emblemáticos de la familia Planeta, motor del renacimiento del vino siciliano en la década de 1990. Demostró que Sicilia podía dar blancos de nivel mundial.",
    quiz: [
      { q: "¿Qué gran cooperativa siciliana dirigió durante muchos años Diego Planeta, de la familia Planeta?", a: "Settesoli", x: ["Donnafugata", "Regaleali", "Florio"] },
    ],
  },
  ib_benrye: {
    fact: "Passito dulce elaborado en la isla de Pantelaria, entre Sicilia y Túnez, con uva Zibibbo (Moscatel de Alejandría) secada al sol.",
    quiz: [
      { q: "¿Qué significa «Ben Ryé» en árabe?", a: "Hijo del viento", x: ["Hija del sol", "Regalo del mar", "Joya de la isla"] },
      { q: "¿De la finca de qué novela procede el nombre de la bodega Donnafugata?", a: "«El gatopardo» de Lampedusa", x: ["«Los novios» de Manzoni", "«Los Malavoglia» de Verga", "«El nombre de la rosa» de Eco"] },
    ],
  },
  ib_rossodelconte: {
    fact: "Tinto emblemático de la familia Tasca d'Almerita, elaborado con Nero d'Avola en la finca Regaleali, en el interior de Sicilia.",
    quiz: [
      { q: "¿En qué año compró la familia Tasca la finca Regaleali, en el interior de Sicilia?", a: "1830", x: ["1730", "1930", "1980"] },
    ],
  },
  ib_debartoli: {
    fact: "Vino de Marco De Bartoli, que luchó por recuperar el Marsala tradicional de calidad cuando se lo consideraba un simple vino para cocinar.",
    quiz: [
      { q: "¿Cómo se llama el legendario vino que Marco De Bartoli criaba sin añadir alcohol, con el antiguo método «perpetuo»?", a: "Vecchio Samperi", x: ["Rosso del Conte", "Ben Ryé", "Radici"] },
    ],
  },
  ib_florio: {
    fact: "Casa emblemática del Marsala, el vino generoso que el comerciante inglés John Woodhouse dio a conocer en el siglo XVIII. Tiene enormes bodegas junto al mar en Marsala.",
    quiz: [
      { q: "¿Quién fundó la bodega Florio en Marsala en 1833?", a: "Vincenzo Florio", x: ["John Woodhouse", "Benjamin Ingham", "Marco De Bartoli"] },
    ],
  },
  ib_passopisciaro: {
    fact: "Tinto de Nerello Mascalese procedente de viñedos de altura en la ladera norte del Etna. Passopisciaro es una de las bodegas que impulsaron el auge de los vinos del Etna.",
    quiz: [
      { q: "¿Qué bodega había creado antes en la Toscana Andrea Franchetti, fundador de Passopisciaro?", a: "Tenuta di Trinoro", x: ["Tenuta San Guido", "Montevertine", "Fontodi"] },
    ],
  },
  ib_benanti: {
    fact: "Blanco de Carricante de la ladera este del Etna. Se distingue por un sabor salino y recto que le aportan los suelos volcánicos cercanos al mar.",
    quiz: [
      { q: "¿Cuál es el único municipio que puede usar la mención «Etna Bianco Superiore», que lleva el Pietra Marina de Benanti?", a: "Milo", x: ["Randazzo", "Taormina", "Catania"] },
    ],
  },
  ib_radici: {
    fact: "Tinto emblemático de Mastroberardino, bodega que salvó las variedades autóctonas de Campania cuando desaparecían tras la guerra. En 1993 el Taurasi se convirtió en la primera DOCG del sur de Italia.",
    quiz: [
      { q: "¿En qué yacimiento arqueológico recuperó Mastroberardino, junto con las autoridades arqueológicas, antiguos viñedos para elaborar el vino «Villa dei Misteri»?", a: "Pompeya", x: ["Herculano", "Paestum", "Ostia Antica"] },
    ],
  },
  ib_feudi: {
    fact: "Blanco elaborado con Fiano, uva blanca autóctona de Irpinia, en el interior de Campania. Feudi di San Gregorio encabezó la nueva ola de los vinos del sur de Italia.",
    quiz: [
      { q: "¿En qué año se fundó Feudi di San Gregorio?", a: "1986", x: ["1886", "1936", "2006"] },
    ],
  },
  ib_es: {
    fact: "Tinto intenso que Gianfranco Fino y su esposa Simona Natale elaboran con Primitivo de viejas cepas en vaso (alberello) de Apulia.",
    quiz: [
      { q: "¿De la teoría de quién toma su nombre el «Es» de Gianfranco Fino?", a: "Freud", x: ["Jung", "Nietzsche", "Kant"] },
    ],
  },
  ib_valentini: {
    fact: "Leyenda de los Abruzos que convierte el Trebbiano, tenido por una uva corriente, en obras maestras capaces de envejecer durante décadas. Es famoso por no revelar casi nada de su forma de elaborar.",
    quiz: [
      { q: "¿Qué elaborador hizo legendario a Valentini embotellando solo una pequeña parte, la mejor, de cada cosecha?", a: "Edoardo Valentini", x: ["Emidio Pepe", "Gianfranco Fino", "Angelo Gaja"] },
    ],
  },
  ib_emidiopepe: {
    fact: "Bodega familiar fiel a los métodos antiguos: despalilla a mano y cría en depósitos de cemento. Guarda añadas viejas en su bodega y las va sacando poco a poco.",
    quiz: [
      { q: "¿En qué año elaboró Emidio Pepe su primer vino en los Abruzos?", a: "1964", x: ["1904", "1934", "1994"] },
    ],
  },
  ib_turriga: {
    fact: "El tinto emblemático de Cerdeña, que la familia Argiolas elabora en el sur de la isla a partir de la variedad autóctona Cannonau. Debutó con la añada 1988.",
    quiz: [
      { q: "¿Qué enólogo, llamado «el padre de los supertoscanos», creó Turriga junto con Argiolas?", a: "Giacomo Tachis", x: ["Michel Rolland", "Émile Peynaud", "Peter Sisseck"] },
    ],
  },
  ib_chiarli: {
    fact: "Tinto ligeramente espumoso elaborado con Lambrusco di Sorbara, cerca de Módena. Destaca por su color rubí claro y su acidez fresca.",
    quiz: [
      { q: "¿En qué año empezó Cleto Chiarli a elaborar Lambrusco en Módena?", a: "1860", x: ["1760", "1920", "1970"] },
    ],
  },
  ib_valbuena: {
    fact: "El otro tinto que Vega Sicilia elabora en la misma finca que el Único. Con una crianza más corta, sale antes al mercado.",
    quiz: [
      { q: "¿Qué indica el «5» de Valbuena 5°?", a: "Que sale al mercado en el quinto año tras la vendimia", x: ["Que mezcla cinco variedades", "Que procede de cepas jóvenes de cinco años", "Que solo usa uva de la quinta pasada de vendimia"] },
    ],
  },
  ib_pingus: {
    fact: "Vino de culto español que el danés Peter Sisseck elabora con uva de cepas muy viejas de Tempranillo. Desde su primera añada, 1995, cosechó elogios en todo el mundo.",
    quiz: [
      { q: "¿De dónde viene el nombre de Pingus?", a: "Del apodo de infancia de Peter Sisseck", x: ["Del río que pasa junto al viñedo", "Del nombre de un antiguo monasterio", "De una palabra española que significa «joya pequeña»"] },
    ],
  },
  ib_florpingus: {
    fact: "Vino hermano de Pingus, elaborado por las mismas manos con Tempranillo de viejas cepas de varios pueblos.",
    quiz: [
      { q: "¿Qué enólogo de origen danés elabora Flor de Pingus?", a: "Peter Sisseck", x: ["Álvaro Palacios", "Mariano García", "René Barbier"] },
    ],
  },
  ib_pesquera: {
    fact: "Bodega fundada por Alejandro Fernández en Pesquera de Duero en los años setenta. Se le considera uno de los grandes artífices de la fama mundial de Ribera del Duero.",
    quiz: [
      { q: "¿Con qué vino comparó Robert Parker el Tinto Pesquera?", a: "Pétrus, de Burdeos", x: ["Romanée-Conti", "Château d'Yquem", "Sassicaia"] },
    ],
  },
  ib_alion: {
    fact: "Bodega hermana que Vega Sicilia fundó a principios de los años noventa. Cría el Tempranillo en barricas nuevas de roble francés para lograr un estilo más moderno.",
    quiz: [
      { q: "¿Qué familia es propietaria de Vega Sicilia y Alión desde los años ochenta?", a: "La familia Álvarez", x: ["La familia Fernández", "La familia Muga", "La familia Torres"] },
    ],
  },
  ib_aalto: {
    fact: "Estrella emergente de Ribera del Duero fundada en 1999. Elabora tintos potentes con uva de viejas cepas de Tempranillo de varios pueblos.",
    quiz: [
      { q: "¿Quién cofundó Aalto tras casi 30 años como enólogo de Vega Sicilia?", a: "Mariano García", x: ["Peter Sisseck", "Alejandro Fernández", "Álvaro Palacios"] },
    ],
  },
  ib_emiliomoro: {
    fact: "El tinto emblemático de la familia Moro, que cultiva la viña de generación en generación en Pesquera de Duero, en Ribera del Duero.",
    quiz: [
      { q: "¿Con qué nombre local se conoce el Tempranillo en Ribera del Duero, tierra de Emilio Moro?", a: "Tinto Fino", x: ["Cencibel", "Ull de Llebre", "Tinta Roriz"] },
    ],
  },
  ib_protos: {
    fact: "La primera bodega de Ribera del Duero, fundada en 1927 por 11 viticultores de Peñafiel. Cría sus vinos en galerías excavadas bajo el castillo de Peñafiel.",
    quiz: [
      { q: "¿Qué significa el nombre «Protos»?", a: "«Primero» en griego", x: ["«Muralla» en latín", "«Ribera» en español", "«Viñedo» en árabe"] },
      { q: "¿Qué arquitecto británico diseñó la nueva bodega de Protos?", a: "Richard Rogers", x: ["Norman Foster", "Zaha Hadid", "Frank Gehry"] },
    ],
  },
  ib_castilloygay: {
    fact: "El vino cumbre de Marqués de Murrieta, que solo se elabora en los grandes años. Su historia comenzó en 1852 en la finca Ygay, cerca de Logroño.",
    quiz: [
      { q: "¿Quién fundó Marqués de Murrieta e introdujo en Rioja la elaboración al estilo de Burdeos?", a: "Luciano de Murrieta", x: ["Alejandro Fernández", "Rafael López de Heredia", "Enrique Forner"] },
    ],
  },
  ib_rioja904: {
    fact: "El vino emblemático de La Rioja Alta, fundada en 1890 por cinco familias junto a la estación de tren de Haro. Estilo tradicional, con larga crianza en barrica de roble americano.",
    quiz: [
      { q: "¿Qué indica el «904» de Gran Reserva 904?", a: "La fusión con Bodega Ardanza en 1904", x: ["Que solo se elaboran 904 barricas", "Un viñedo a 904 m de altitud", "904 días de crianza"] },
    ],
  },
  ib_tondonia: {
    fact: "El vino emblemático de López de Heredia, fundada en Haro en 1877. Símbolo del Rioja tradicional, su larga crianza en barrica le permite durar décadas.",
    quiz: [
      { q: "¿Quién diseñó el pabellón de visitantes de López de Heredia?", a: "Zaha Hadid", x: ["Frank Gehry", "Santiago Calatrava", "Richard Rogers"] },
    ],
  },
  ib_cvneimperial: {
    fact: "El vino cumbre de CVNE, fundada en 1879 junto a la estación de tren de Haro. Su añada 2004 fue elegida número 1 del año por Wine Spectator.",
    quiz: [
      { q: "¿Qué significan las siglas CVNE?", a: "Compañía Vinícola del Norte de España", x: ["Cofradía Real Vinícola de Castilla", "Unión de Bodegas de Rioja", "Las iniciales de sus cuatro fundadores"] },
    ],
  },
  ib_pradoenea: {
    fact: "El gran reserva cumbre de Muga, que solo se elabora en los grandes años. Tras una larga crianza en barrica, vuelve a reposar en botella antes de salir al mercado.",
    quiz: [
      { q: "¿Qué tiene de singular la bodega Muga?", a: "Su propia tonelería, donde fabrica sus barricas", x: ["Cría todos sus vinos en tinajas de barro", "Transporta la uva en helicóptero", "Tiene una central hidroeléctrica subterránea"] },
    ],
  },
  ib_torremuga: {
    fact: "Rioja de estilo moderno que Muga lanzó con la añada 1991. Destaca por su color intenso, su fruta generosa y las notas de roble francés nuevo.",
    quiz: [
      { q: "¿Qué matrimonio fundó la bodega Muga en Haro en 1932?", a: "Isaac Muga y Aurora Caño", x: ["Alejandro Fernández y Esperanza Rivera", "Mario Rotllant y Carmen Daurella", "Joan Juvé y Teresa Camps"] },
    ],
  },
  ib_caceres: {
    fact: "Bodega fundada en 1970 por Enrique Forner en Cenicero. Introdujo la elaboración al estilo de Burdeos y dio a conocer riojas de fruta viva.",
    quiz: [
      { q: "¿Qué enólogo francés asesoró a Marqués de Cáceres al introducir la elaboración al estilo de Burdeos?", a: "Émile Peynaud", x: ["Michel Rolland", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  ib_contino: {
    fact: "Rioja de una finca rodeada por un meandro del Ebro cerca de Laguardia. La fundaron en los años setenta CVNE y la familia que antes era dueña de la finca.",
    quiz: [
      { q: "¿Qué tipo de vino se considera que Contino introdujo por primera vez en Rioja?", a: "El vino de finca única, solo con uva propia", x: ["El primer espumoso de Rioja", "El primer vino dulce de Rioja", "El primer rosado de Rioja"] },
    ],
  },
  ib_remirez: {
    fact: "Bodega fundada por Fernando Remírez de Ganuza en Samaniego, en la Rioja Alavesa. Elabora con uva minuciosamente seleccionada de pequeñas parcelas viejas.",
    quiz: [
      { q: "¿Qué parte del racimo usa Remírez de Ganuza para su Reserva?", a: "Solo la parte superior (los hombros)", x: ["Solo la punta del racimo", "El racimo entero con raspón", "Solo las bayas que maduran más tarde"] },
    ],
  },
  ib_roda: {
    fact: "El reserva emblemático de Roda, joven casa de prestigio situada en el Barrio de la Estación de Haro. Se elabora con uva de viejas cepas de Tempranillo.",
    quiz: [
      { q: "¿De dónde viene el nombre «Roda»?", a: "De las primeras letras de los fundadores, Rotllant y Daurella", x: ["De la palabra catalana «roda», rueda", "Del pueblo donde está el viñedo", "De un río cercano"] },
    ],
  },
  ib_artadi: {
    fact: "Tempranillo que Juan Carlos López de Lacalle elabora en una pequeña parcela de Laguardia. Está considerado uno de los mejores vinos de viñedo único de España.",
    quiz: [
      { q: "¿Qué decisión tomada por Artadi en 2015 dio mucho que hablar?", a: "Abandonar la DOCa Rioja", x: ["Comprar un château en Francia", "Replantar todos sus viñedos con uva blanca", "Cambiar el corcho por el tapón corona"] },
    ],
  },
  ib_campoviejo: {
    fact: "Nacida en Logroño en 1959, se ha convertido en una de las marcas de Rioja más vendidas del mundo. Su etiqueta multicolor la hace muy reconocible.",
    quiz: [
      { q: "¿Qué evoca el nombre de Campo Viejo?", a: "Un campo antiguo", x: ["Un castillo nuevo", "Una colina roja", "Un viejo caballero"] },
    ],
  },
  ib_faustino: {
    fact: "Gran reserva de Rioja reconocible al instante por su botella mate, como escarchada. Es el vino emblemático de la familia Faustino, en activo desde 1861.",
    quiz: [
      { q: "¿Qué pintor es el autor del retrato que aparece en la etiqueta de Faustino I?", a: "Rembrandt", x: ["Velázquez", "Goya", "El Greco"] },
    ],
  },
  ib_juangil: {
    fact: "Tinto intenso de Monastrell criada bajo el sol abrasador de Jumilla, en el sureste de España. Por su etiqueta plateada también se le llama «etiqueta plata».",
    quiz: [
      { q: "¿Qué indica el «12 Meses» de Juan Gil 12 Meses?", a: "Que ha pasado 12 meses en barrica de roble", x: ["Que las cepas tienen 12 meses", "Que sale 12 meses después de la vendimia", "Que mezcla uva de 12 viñedos"] },
    ],
  },
  ib_ermita: {
    fact: "Uno de los vinos más caros de España, elaborado con viejas Garnachas de las empinadas laderas de pizarra (llicorella) de Gratallops.",
    quiz: [
      { q: "¿De qué familia vinícola de Rioja procede Álvaro Palacios?", a: "Palacios Remondo", x: ["Marqués de Riscal", "Vega Sicilia", "López de Heredia"] },
    ],
  },
  ib_closmogador: {
    fact: "Bodega fundada por uno de los pioneros que llegaron a finales de los años ochenta al decaído Priorat y lo resucitaron. Se elabora con viejas Garnacha y Cariñena.",
    quiz: [
      { q: "¿Quién fundó Clos Mogador e impulsó el renacimiento del Priorat?", a: "René Barbier", x: ["Peter Sisseck", "Mariano García", "Alejandro Fernández"] },
    ],
  },
  ib_closerasmus: {
    fact: "Vino de culto del Priorat elaborado sobre todo con Garnacha en las empinadas terrazas de Gratallops. Su producción es muy escasa.",
    quiz: [
      { q: "¿Qué enóloga fundó Clos Erasmus?", a: "Daphne Glorian", x: ["Marisol Bueno", "Virginie Saverys", "Maria Teresa Mascarello"] },
    ],
  },
  ib_masplana: {
    fact: "El vino emblemático de Torres, elaborado por Miguel A. Torres con Cabernet Sauvignon de un viñedo del Penedès. Mostró al mundo el potencial de los tintos españoles.",
    quiz: [
      { q: "¿Qué logró la añada 1970 en la «Olimpiada del Vino» de París de 1979?", a: "El primer puesto, por delante de grandes de Burdeos", x: ["El segundo puesto, tras Latour", "La descalificación por sospecha de fraude", "El primer puesto en la categoría de blancos"] },
      { q: "¿Cuál era el nombre anterior de Torres Mas La Plana?", a: "Gran Coronas Etiqueta Negra", x: ["Sangre de Toro Reserva", "Viña Sol Gran Reserva", "Torres Imperial"] },
    ],
  },
  ib_sangredetoro: {
    fact: "Tinto superventas de Torres lanzado en 1954. Elaborado con Garnacha y Cariñena, es suave y muy frutal.",
    quiz: [
      { q: "¿Qué cuelga del cuello de la botella de Sangre de Toro?", a: "Un pequeño toro de plástico", x: ["Una cinta roja", "Un minisombrero de torero", "Una bolita de corcho"] },
      { q: "¿Qué vino húngaro tiene un nombre que significa lo mismo que Sangre de Toro?", a: "Egri Bikavér", x: ["Tokaji Aszú", "Szekszárdi Kadarka", "Villányi Franc"] },
    ],
  },
  ib_numanthia: {
    fact: "Tinto potente elaborado con viejas cepas de Tinta de Toro que resistieron la filoxera gracias a los suelos arenosos de Toro.",
    quiz: [
      { q: "¿De dónde toma su nombre Numanthia?", a: "De Numancia, la antigua ciudad que resistió a Roma hasta el final", x: ["De Numa, legendario rey de Roma", "De una fortaleza construida por los cruzados", "De la capital de un reino moro"] },
      { q: "¿Qué grupo compró Numanthia en 2008?", a: "LVMH (Moët Hennessy)", x: ["Pernod Ricard", "Kering", "E. & J. Gallo"] },
    ],
  },
  ib_senorans: {
    fact: "Gran casa de Albariño levantada por Marisol Bueno en el Val do Salnés. Está considerado uno de los blancos emblemáticos de Rías Baixas.",
    quiz: [
      { q: "¿Qué es un «pazo», como el de Pazo de Señoráns?", a: "Una antigua casa señorial gallega", x: ["Una colina de viñedos", "Un almacén portuario", "El jardín de un monasterio"] },
    ],
  },
  ib_martincodax: {
    fact: "Albariño de la bodega fundada en 1986 por viticultores de los alrededores de Cambados. La uva, criada con la brisa del Atlántico, le da un sabor fresco.",
    quiz: [
      { q: "¿De quién toma su nombre Martín Códax?", a: "De un trovador gallego medieval", x: ["De un capitán de la era de los descubrimientos", "De un rey de Castilla", "Del agricultor que fundó la bodega"] },
    ],
  },
  ib_codorniu: {
    fact: "En Codorníu, Josep Raventós elaboró en 1872 el primer cava por el método champenoise. Anna lleva Chardonnay en su mezcla, lo que le da un sabor suave.",
    quiz: [
      { q: "¿Quién es la Anna que da nombre a Anna de Codorníu?", a: "La heredera de los Codorníu que se casó con un Raventós", x: ["La patrona de Cataluña", "Una reina de España", "La primera nieta del fundador"] },
      { q: "¿Qué arquitecto modernista catalán diseñó las cavas de Codorníu?", a: "Josep Puig i Cadafalch", x: ["Antoni Gaudí", "Ricardo Bofill", "Rafael Moneo"] },
    ],
  },
  ib_juvecamps: {
    fact: "El cava de añada emblemático de esta casa familiar de Sant Sadurní d'Anoia. Es un brut nature, sin azúcar añadido.",
    quiz: [
      { q: "¿De dónde viene el nombre Juvé & Camps?", a: "De los apellidos del matrimonio fundador, Joan Juvé y Teresa Camps", x: ["De dos pueblos", "De los apodos de dos amigos cofundadores", "De dos viñedos"] },
    ],
  },
  ib_gramona: {
    fact: "El gran espumoso de larga crianza de Gramona, que envejece muchos años sobre sus lías. Destaca por la fuerza y la profundidad que le da el Xarel·lo.",
    quiz: [
      { q: "¿Qué marca colectiva de espumosos creó Gramona con otros elaboradores tras dejar la DO Cava en 2019?", a: "Corpinnat", x: ["Clàssic Penedès", "Franciacorta", "Crémant de Catalogne"] },
    ],
  },
  ib_bristolcream: {
    fact: "Jerez cream de Harveys, casa nacida en 1796 en Bristol (Inglaterra). Mezcla varios jereces para lograr un sabor dulce y suave.",
    quiz: [
      { q: "¿De qué frase nace el nombre de Harveys Bristol Cream?", a: "«Si el Bristol Milk es la leche, esto es la crema», dicho por una dama", x: ["De una lechería del puerto de Bristol", "Del apodo de la hija del fundador", "De un título otorgado por la reina"] },
      { q: "¿Cuál es el color emblemático de la botella de Harveys Bristol Cream?", a: "Azul intenso", x: ["Transparente", "Verde oscuro", "Negro"] },
    ],
  },
  ib_lustau: {
    fact: "Jerez dulce que mezcla oloroso con Pedro Ximénez y se cría en la zona más cálida y húmeda de la bodega.",
    quiz: [
      { q: "¿De dónde viene el nombre «East India Solera»?", a: "Recrea los jereces que maduraban en los barcos que iban y venían de las Indias Orientales", x: ["Es un jerez con especias de la India", "De una bodega fundada por la Compañía de las Indias Orientales", "Es un jerez de uva india"] },
      { q: "¿Qué es un «almacenista», como los que Lustau embotelló y dio a conocer?", a: "Un pequeño bodeguero que solo cría y guarda jerez", x: ["Un marinero que transportaba jerez", "Un maestro que cultiva la levadura flor", "Un artesano del corcho"] },
    ],
  },
  ib_inocente: {
    fact: "Fino poco común, de un solo viñedo y fermentado en barrica. Su larga crianza bajo flor le da un sabor profundo.",
    quiz: [
      { q: "¿De qué famoso pago de Jerez procede la uva del Inocente de Valdespino?", a: "Macharnudo", x: ["Balbaína", "Añina", "Carrascal"] },
    ],
  },
  ib_osborne: {
    fact: "Fino de Osborne, casa de El Puerto de Santa María, a orillas del Atlántico. Criado bajo el velo de flor, es ligero y salino.",
    quiz: [
      { q: "¿Qué forma tiene la gigantesca valla de Osborne que se alza junto a las carreteras españolas?", a: "Un toro negro", x: ["Una bailaora de flamenco", "Un racimo dorado", "Un caballo blanco"] },
      { q: "¿De qué país era Thomas Osborne Mann, que fundó Osborne en 1772?", a: "Inglaterra", x: ["Francia", "Países Bajos", "Italia"] },
    ],
  },
  ib_noe: {
    fact: "Jerez de postre negro y denso, elaborado con uva Pedro Ximénez pasificada al sol y criado durante muchos años.",
    quiz: [
      { q: "¿Qué garantiza la mención «VORS» en jereces como el Noé de González Byass?", a: "Un jerez muy viejo, con más de 30 años de crianza media", x: ["Un jerez de añada, de una sola cosecha", "Un jerez con certificación ecológica", "Un jerez de uva botritizada"] },
    ],
  },
  ib_laguita: {
    fact: "Manzanilla que solo se elabora en Sanlúcar de Barrameda, en la desembocadura del Guadalquivir. La brisa marina hace crecer una flor gruesa que le da su sabor salino.",
    quiz: [
      { q: "¿Qué significa en jerga «guita», la palabra que da nombre a La Guita?", a: "Dinero en efectivo", x: ["Guitarra", "Brisa marina", "Barrilito"] },
    ],
  },
  ib_alvear: {
    fact: "Vino dulce que Alvear, gran casa de Montilla-Moriles, al sur de Córdoba, elabora con Pedro Ximénez pasificada al sol.",
    quiz: [
      { q: "¿Qué indica el «1927» de la Solera 1927 de Alvear?", a: "El año en que se inició esta solera", x: ["El año de la vendimia", "El año de fundación de Alvear", "El año de embotellado"] },
    ],
  },
  ib_lancers: {
    fact: "Rosado portugués nacido en 1944 pensando en el mercado estadounidense. Es famoso por su botella opaca con aspecto de jarra de cerámica.",
    quiz: [
      { q: "¿Qué cuadro de Velázquez inspiró el nombre de Lancers?", a: "La rendición de Breda (Las lanzas)", x: ["Las meninas", "Las hilanderas", "El triunfo de Baco"] },
    ],
  },
  ib_barcavelha: {
    fact: "Vino legendario que abrió en el Duero, tierra del oporto, el camino de los grandes tintos sin fortificar. Elaborado por primera vez en 1952, solo sale en los años excepcionales.",
    quiz: [
      { q: "¿Qué enólogo creó Barca Velha?", a: "Fernando Nicolau de Almeida", x: ["Dirk Niepoort", "José Maria da Fonseca", "Adriano Ramos Pinto"] },
      { q: "¿Qué significa el nombre «Barca Velha»?", a: "Barca vieja", x: ["Viejo labrador", "Río azul", "Primera cosecha"] },
    ],
  },
  ib_valemeao: {
    fact: "Finca situada en un amplio meandro del río en el Douro Superior. Durante mucho tiempo, de aquí salió la uva de Barca Velha.",
    quiz: [
      { q: "¿Qué legendaria mujer del Duero fundó la Quinta do Vale Meão en 1877?", a: "Dona Antónia Ferreira", x: ["Giulia Colbert Falletti", "Marisol Bueno", "Anna de Codorníu"] },
    ],
  },
  ib_crasto: {
    fact: "Tinto de la finca de la familia Roquette a orillas del Duero, elaborado con uva de viñas viejas donde crecen mezcladas muchas variedades autóctonas.",
    quiz: [
      { q: "¿Qué rincón de la Quinta do Crasto es famoso por las fotos?", a: "La piscina infinita con vistas al Duero", x: ["Un teleférico que cruza el viñedo", "Una bodega flotante sobre el río", "Un mirador sobre murallas medievales"] },
    ],
  },
  ib_esporao: {
    fact: "El tinto emblemático de Herdade do Esporão, extensa finca del Alentejo, en el sur de Portugal. Dentro de la finca se alza una torre medieval.",
    quiz: [
      { q: "¿Qué tiene de especial la etiqueta de Esporão Reserva?", a: "Cambia cada año con la obra de un artista distinto", x: ["Siempre lleva el mismo escudo familiar", "No existe: el texto va grabado en la botella", "Está hecha de corteza de corcho"] },
    ],
  },
  ib_peramanca: {
    fact: "El mejor tinto del Alentejo, que la Fundação Eugénio de Almeida de Évora solo saca en los años excepcionales.",
    quiz: [
      { q: "¿Qué significa la expresión de la que viene el nombre «Pêra-Manca»?", a: "Piedra que se tambalea", x: ["Huerto de perales", "Monje cojo", "Torre blanca"] },
      { q: "Según la leyenda, ¿en qué viaje de 1500 se embarcó el Pêra-Manca?", a: "El de Cabral, que llegó a Brasil", x: ["El de Vasco da Gama, que abrió la ruta a la India", "La vuelta al mundo de Magallanes", "El primer viaje de Colón"] },
    ],
  },
  ib_casalgarcia: {
    fact: "Blanco ligero y fresco del norte de Portugal, lanzado en 1939. Con un leve cosquilleo de burbuja y poco alcohol, es ideal para beber sin complicaciones.",
    quiz: [
      { q: "¿Qué significa «verde» en «Vinho Verde», la categoría de Casal Garcia?", a: "Que es un vino joven y fresco", x: ["Que se elabora con uvas verdes", "Que se embotella en vidrio verde", "Que tiene aroma a algas"] },
    ],
  },
  ib_taylors20: {
    fact: "Oporto tawny que se oxida lentamente durante muchos años en pequeños toneles de madera, lo que le da su color ámbar y sus notas de frutos secos y caramelo.",
    quiz: [
      { q: "¿Qué indica «20 Year Old» en el Taylor's 20 Year Old Tawny Port?", a: "La edad media de una mezcla de oportos de varios años", x: ["Que es el oporto de un solo año, de hace exactamente 20 años", "Que procede de cepas de 20 años", "Que ha envejecido 20 años en botella"] },
    ],
  },
  ib_sixgrapes: {
    fact: "Oporto ruby reserva elaborado con uva de las quintas que dan los vintage. Su fruta intensa lo convierte en un oporto de iniciación muy querido.",
    quiz: [
      { q: "¿De dónde viene el nombre de Graham's Six Grapes?", a: "Del símbolo de seis racimos con que se marcaban los oportos de calidad vintage", x: ["De la mezcla de seis variedades", "De la mezcla de oportos de seis años", "De los seis hijos del fundador"] },
    ],
  },
  ib_grahamsvintage: {
    fact: "El oporto vintage de Graham's, que solo se «declara» en los años excepcionales. Su base es la uva de la Quinta dos Malvedos, en el Duero.",
    quiz: [
      { q: "¿A qué se dedicaban originalmente los hermanos Graham, que fundaron Graham's en 1820?", a: "Al comercio textil", x: ["Al transporte marítimo", "A la banca", "A la producción de corcho"] },
      { q: "¿Qué familia del oporto es dueña de Graham's desde 1970?", a: "La familia Symington", x: ["La familia Sandeman", "La familia Niepoort", "La familia Guimaraens"] },
    ],
  },
  ib_bin27: {
    fact: "Oporto reserva de Fonseca, casa dirigida durante generaciones por la familia Guimaraens. Destaca por su intensa fruta de tonos rojo oscuro.",
    quiz: [
      { q: "Antes de salir a la venta en 1972, ¿para quién era originalmente el Fonseca Bin 27?", a: "Una mezcla que la familia preparaba para ella y sus amigos", x: ["Un suministro para la casa real británica", "Una ración para los marineros", "Vino de misa para el Vaticano"] },
    ],
  },
  ib_dows: {
    fact: "El oporto vintage de Dow's, casa dirigida por la familia Symington. Se le reconoce un final más seco que el de otros oportos.",
    quiz: [
      { q: "¿Qué quinta del Duero es la base del Dow's Vintage Port?", a: "Quinta do Bomfim", x: ["Quinta do Noval", "Quinta de Vargellas", "Quinta dos Malvedos"] },
    ],
  },
  ib_sandeman: {
    fact: "Casa de oporto y jerez fundada en Londres en 1790. Su símbolo en la etiqueta es «The Don», una silueta envuelta en una capa negra.",
    quiz: [
      { q: "¿Qué indumentaria lleva «The Don», la silueta negra de Sandeman?", a: "Capa de estudiante portugués y sombrero español de ala ancha", x: ["Falda escocesa y boina", "Uniforme de la Marina británica y tricornio", "Hábito y capucha de monje"] },
      { q: "¿De dónde era George Sandeman, fundador de Sandeman?", a: "Escocia", x: ["Portugal", "Países Bajos", "Irlanda"] },
    ],
  },
  ib_cockburns: {
    fact: "El oporto reserva emblemático de Cockburn's, casa fundada en 1815. Hoy la dirige la familia Symington.",
    quiz: [
      { q: "¿Qué particularidad tiene la pronunciación inglesa de Cockburn's?", a: "La «ck» no se pronuncia: suena parecido a «Co-burn»", x: ["Se pronuncian todas las letras: «Cock-burn»", "No se pronuncia «burn»: suena «Cock»", "Se lee a la portuguesa: «Coc-bur-ne»"] },
    ],
  },
  ib_nacional: {
    fact: "Oporto vintage legendario que solo procede de una pequeña parcela dentro de la Quinta do Noval. Su añada 1931 está considerada el mejor oporto de la historia.",
    quiz: [
      { q: "¿Qué tienen de especial las cepas de Quinta do Noval Nacional?", a: "Crecen sobre sus propias raíces, sin injertar", x: ["Todas son cepas blancas de más de 100 años", "Crecen en un invernadero", "Se replantan cada año"] },
      { q: "¿Qué filial de un grupo asegurador francés compró Quinta do Noval en 1993?", a: "AXA Millésimes", x: ["LVMH", "Kering", "Pernod Ricard"] },
    ],
  },
  ib_niepoort: {
    fact: "Casa familiar de oporto fundada en 1842. Dirk Niepoort, de la quinta generación, también se ha hecho un nombre con sus vinos tranquilos del Duero.",
    quiz: [
      { q: "¿De qué país es originaria la familia Niepoort?", a: "Países Bajos", x: ["Escocia", "Alemania", "Dinamarca"] },
      { q: "Tras su paso por madera, ¿dónde madura durante años el oporto «Garrafeira» de Niepoort?", a: "En grandes damajuanas de vidrio", x: ["En tinajas de barro enterradas", "En depósitos de acero bajo el mar", "En pilas de mármol"] },
    ],
  },
  ib_warres: {
    fact: "Warrior es el oporto reserva de Warre's, considerada una de las marcas de oporto más antiguas. Hoy la dirige la familia Symington.",
    quiz: [
      { q: "¿Qué tiene de especial 1670, el año en que se fundó Warre's?", a: "Fue la primera empresa británica de oporto establecida en Portugal", x: ["Es el año en que se añadió brandy al oporto por primera vez", "Es el año en que el Duero se convirtió en denominación de origen", "Es el año de la primera declaración de un oporto vintage"] },
    ],
  },
  ib_ramospinto: {
    fact: "Oporto tawny de la casa fundada en 1880 por Adriano Ramos Pinto. Se elabora con uva de la Quinta do Bom Retiro, en el Duero.",
    quiz: [
      { q: "¿Con qué dio que hablar Ramos Pinto a principios del siglo XX?", a: "Con atrevidos carteles publicitarios de estilo art nouveau", x: ["Con una línea de tren exclusiva para el oporto", "Con la mayor barrica del mundo", "Con un mapa en pan de oro grabado en las botellas"] },
      { q: "¿Qué casa de champán compró Ramos Pinto en 1990?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  ib_blandys: {
    fact: "Casa de vino de Madeira fundada en 1811 y en manos de la misma familia desde entonces. El malmsey es el estilo más dulce de Madeira.",
    quiz: [
      { q: "¿Cómo se llama el método tradicional que envejece el madeira, como el de Blandy's, calentándolo lentamente durante años en desvanes soleados?", a: "Canteiro", x: ["Solera", "Appassimento", "Charmat"] },
      { q: "¿De qué país era John Blandy, fundador de Blandy's?", a: "Inglaterra", x: ["Portugal", "España", "Francia"] },
    ],
  },
  ib_cossart: {
    fact: "Una de las casas de vino más antiguas de Madeira. El bual es un estilo de madeira moderadamente dulce, con una acidez viva.",
    quiz: [
      { q: "¿En qué año abrió Cossart Gordon en Madeira?", a: "1745", x: ["1645", "1845", "1945"] },
    ],
  },
};

export default T;
