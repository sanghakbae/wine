import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  bx_rauzansegla: {
    fact: "Segundo cru de Margaux fundado en 1661. En 1994 lo compró la familia Wertheimer, propietaria de Chanel.",
    quiz: [
      { q: "¿Qué empresa de moda compró Château Rauzan-Ségla en 1994?", a: "Chanel", x: ["Hermès", "Dior", "Gucci"] },
    ],
  },
  bx_rauzangassies: {
    fact: "Segundo cru de Margaux que se separó de Rauzan-Ségla al dividirse la antigua finca Rauzan. La familia Quié lo gestiona junto con Château Croizet-Bages, en Pauillac.",
    quiz: [
      { q: "¿Con qué château de Margaux formaba originalmente una sola finca Château Rauzan-Gassies?", a: "Château Rauzan-Ségla", x: ["Château Brane-Cantenac", "Château Lascombes", "Château Durfort-Vivens"] },
      { q: "¿Qué quinto cru de Pauillac gestiona la familia Quié, la misma de Château Rauzan-Gassies?", a: "Château Croizet-Bages", x: ["Château Lynch-Moussas", "Château Pédesclaux", "Château Batailley"] },
    ],
  },
  bx_leovillelascases: {
    fact: "Nació al dividirse en tres la finca Léoville, una de las mayores del Médoc. El portal de piedra coronado por un león que aparece en la etiqueta es la entrada al viñedo «Grand Clos».",
    quiz: [
      { q: "¿Qué escultura corona el portal de piedra dibujado en la etiqueta de Château Léoville Las Cases?", a: "Un león", x: ["Un águila", "Un caballo", "Una campana"] },
      { q: "¿Qué familia dirige Château Léoville Las Cases?", a: "La familia Delon", x: ["La familia Barton", "La familia Cuvelier", "La familia Borie"] },
    ],
  },
  bx_leovillepoyferre: {
    fact: "Uno de los tres châteaux surgidos de la división de la finca Léoville. Pertenece a la familia Cuvelier desde 1920.",
    quiz: [
      { q: "¿Qué familia es propietaria de Château Léoville Poyferré desde 1920?", a: "La familia Cuvelier", x: ["La familia Delon", "La familia Barton", "La familia Cazes"] },
    ],
  },
  bx_leovillebarton: {
    fact: "La familia Barton, de origen irlandés, lo compró en 1826 y lo conserva hasta hoy. Como no tiene edificio de château propio, se elabora junto a su vecino Langoa Barton.",
    quiz: [
      { q: "¿De qué país procede la familia Barton, propietaria de Château Léoville Barton?", a: "Irlanda", x: ["Escocia", "Países Bajos", "Alemania"] },
      { q: "¿Qué tercer cru de la misma familia se elabora junto con Château Léoville Barton?", a: "Château Langoa Barton", x: ["Château Lagrange", "Château Talbot", "Château Saint-Pierre"] },
    ],
  },
  bx_durfortvivens: {
    fact: "Segundo cru de Margaux cuyo nombre procede de los Durfort de Duras, señores medievales. Lo dirige Gonzague Lurton, que lo convirtió a la agricultura biodinámica.",
    quiz: [
      { q: "¿Qué categoría tiene Château Durfort-Vivens en la clasificación del Médoc de 1855?", a: "Segundo cru", x: ["Tercer cru", "Cuarto cru", "Quinto cru"] },
    ],
  },
  bx_gruaudlarose: {
    fact: "Segundo cru de Saint-Julien cuya etiqueta lleva el lema «el vino de los reyes, el rey de los vinos». Desde 1997 pertenece al grupo bordelés Taillan.",
    quiz: [
      { q: "¿Qué significa el lema escrito en la etiqueta de Château Gruaud Larose?", a: "El vino de los reyes, el rey de los vinos", x: ["Gotas caídas del cielo", "La reina del Médoc", "Un vino hecho de paciencia"] },
    ],
  },
  bx_lascombes: {
    fact: "Segundo cru de Margaux que recuperó su prestigio en los años cincuenta, cuando lo compró Alexis Lichine, escritor de vinos estadounidense nacido en Rusia.",
    quiz: [
      { q: "¿Qué escritor de vinos compró y revitalizó Château Lascombes en los años cincuenta?", a: "Alexis Lichine", x: ["Robert Parker", "Émile Peynaud", "Hugh Johnson"] },
    ],
  },
  bx_branecantenac: {
    fact: "Finca que cuidó el barón de Brane, apodado «el Napoleón de las viñas», después de vender la actual Mouton Rothschild. Hoy la dirige Henri Lurton.",
    quiz: [
      { q: "¿Qué finca de Pauillac había vendido antes el barón de Brane, que dio nombre a Château Brane-Cantenac?", a: "La actual Château Mouton Rothschild", x: ["La actual Château Lafite Rothschild", "La actual Château Latour", "La actual Château Pichon Baron"] },
      { q: "¿Cuál era el apodo del barón de Brane, que dio nombre a Château Brane-Cantenac?", a: "El Napoleón de las viñas", x: ["El marajá de Saint-Estèphe", "El papa del Médoc", "El rey del vino"] },
    ],
  },
  bx_pichonbaron: {
    fact: "Segundo cru de Pauillac famoso por su château de cuento con torres puntiagudas. Desde 1987 pertenece a AXA Millésimes, filial de la aseguradora AXA.",
    quiz: [
      { q: "¿Quién compró Château Pichon Baron en 1987?", a: "AXA Millésimes", x: ["LVMH", "Chanel", "Louis Roederer"] },
      { q: "¿Qué château formaba una sola finca con Château Pichon Baron antes de separarse?", a: "Château Pichon Longueville Comtesse de Lalande", x: ["Château Latour", "Château Lynch-Bages", "Château Pontet-Canet"] },
    ],
  },
  bx_pichoncomtesse: {
    fact: "Debe su nombre a Virginie, la hija que heredó parte de la finca Pichon y se casó con el conde de Lalande. En 2007 lo compró la casa de champán Louis Roederer.",
    quiz: [
      { q: "¿Qué casa de champán adquirió Château Pichon Longueville Comtesse de Lalande en 2007?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  bx_ducrubeaucaillou: {
    fact: "«Beaucaillou» significa «bellos guijarros» y alude a las lomas de grava a orillas del estuario de la Gironda. Pertenece a la familia Borie desde 1941.",
    quiz: [
      { q: "¿Qué significa «Beaucaillou» en el nombre de Château Ducru-Beaucaillou?", a: "Bellos guijarros", x: ["Bella colina", "Torre antigua", "Pequeño bosque"] },
      { q: "¿Qué familia es propietaria de Château Ducru-Beaucaillou desde 1941?", a: "La familia Borie", x: ["La familia Delon", "La familia Barton", "La familia Cuvelier"] },
    ],
  },
  bx_cosdestournel: {
    fact: "Louis Gaspard d'Estournel, «el marajá de Saint-Estèphe», apasionado del comercio con la India, coronó el tejado de su bodega con torres de estilo oriental. Desde 2000 pertenece a Michel Reybier.",
    quiz: [
      { q: "¿Qué caracteriza el edificio de la bodega de Château Cos d'Estournel?", a: "Torres de pagoda de estilo indio", x: ["Torres de castillo medieval", "Columnas de templo griego", "Casa de ladrillo de estilo Tudor"] },
      { q: "¿Cuál era el apodo de Louis Gaspard d'Estournel, fundador de Château Cos d'Estournel?", a: "El marajá de Saint-Estèphe", x: ["El Napoleón de las viñas", "El papa del Médoc", "El rey del vino"] },
    ],
  },
  bx_montrose: {
    fact: "Su nombre procede de una colina cubierta de brezo de flor rosada («mont rose»). En 2006 lo compraron los hermanos Bouygues, empresarios franceses.",
    quiz: [
      { q: "¿De dónde procede el nombre de Château Montrose?", a: "De una colina cubierta de brezo rosado", x: ["De un jardín de rosas", "De un monte de rocas rojas", "Del nombre de la hija del fundador"] },
      { q: "¿Quiénes compraron Château Montrose en 2006?", a: "Los hermanos Bouygues", x: ["Los hermanos Wertheimer", "La familia Delon", "La familia Cazes"] },
    ],
  },
  bx_kirwan: {
    fact: "Lleva el nombre del irlandés Mark Kirwan, que cuidó la finca en el siglo XVIII. Desde 1925 pertenece a la familia Schÿler, negociantes de Burdeos.",
    quiz: [
      { q: "¿Qué categoría tiene Château Kirwan en la clasificación del Médoc de 1855?", a: "Tercer cru", x: ["Segundo cru", "Cuarto cru", "Quinto cru"] },
    ],
  },
  bx_dissan: {
    fact: "Castillo del siglo XVII rodeado por un foso. Su etiqueta lleva una divisa latina que significa «para la mesa de los reyes y el altar de los dioses».",
    quiz: [
      { q: "¿Qué significa la divisa latina de la etiqueta de Château d'Issan?", a: "Para la mesa de los reyes y el altar de los dioses", x: ["Dios habita en el viñedo", "La paciencia hace el vino", "Solo lo mejor"] },
    ],
  },
  bx_lagrange: {
    fact: "Tercer cru de Saint-Julien que la japonesa Suntory compró en 1983 y cuyos viñedos y bodega renovó por completo.",
    quiz: [
      { q: "¿Qué empresa japonesa compró Château Lagrange en 1983?", a: "Suntory", x: ["Kirin", "Asahi", "Sapporo"] },
    ],
  },
  bx_langoabarton: {
    fact: "Château del siglo XVIII que Hugh Barton compró en 1821. En su bodega se elabora también Léoville Barton.",
    quiz: [
      { q: "¿Qué segundo cru se elabora también en la bodega de Château Langoa Barton?", a: "Château Léoville Barton", x: ["Château Léoville Poyferré", "Château Gruaud Larose", "Château Ducru-Beaucaillou"] },
    ],
  },
  bx_giscours: {
    fact: "Extensa finca que, contando bosques y praderas, abarca varios cientos de hectáreas. Desde 1995 la gestiona la familia del empresario neerlandés Eric Albada Jelgersma.",
    quiz: [
      { q: "¿De qué nacionalidad es la familia Albada Jelgersma, que gestiona Château Giscours desde 1995?", a: "Neerlandesa", x: ["Belga", "Suiza", "Británica"] },
      { q: "¿Qué château de Margaux gestiona la misma familia que Château Giscours?", a: "Château du Tertre", x: ["Château Dauzac", "Château Pouget", "Château Ferrière"] },
    ],
  },
  bx_malescot: {
    fact: "Une los nombres de Simon Malescot, consejero jurídico del rey en el siglo XVII, y del conde de Saint-Exupéry, propietario en el siglo XIX. La familia Zuger lo dirige desde 1955.",
    quiz: [
      { q: "¿Cuál es la obra más famosa del escritor de la misma familia que el conde de Saint-Exupéry de Château Malescot St. Exupéry?", a: "El principito", x: ["El extranjero", "Los miserables", "Los tres mosqueteros"] },
    ],
  },
  bx_boydcantenac: {
    fact: "Su nombre procede de Jacques Boyd, dueño de estas tierras en el siglo XVIII. La familia Guillemet lo gestiona junto con Château Pouget, cuarto cru.",
    quiz: [
      { q: "¿Qué cuarto cru gestiona la misma familia que Château Boyd-Cantenac?", a: "Château Pouget", x: ["Château Talbot", "Château Saint-Pierre", "Château Lafon-Rochet"] },
    ],
  },
  bx_cantenacbrown: {
    fact: "Château de estilo Tudor inglés construido por John Lewis Brown, comerciante de vinos de origen escocés; una arquitectura poco habitual en el Médoc.",
    quiz: [
      { q: "¿Qué estilo arquitectónico tiene el edificio de Château Cantenac Brown?", a: "Tudor inglés", x: ["Neoclásico", "Pagoda de estilo indio", "Renacimiento italiano"] },
    ],
  },
  bx_palmer: {
    fact: "Toma su nombre del general inglés Charles Palmer, veterano de las guerras napoleónicas, que lo compró en 1814. Aunque es tercer cru, se vende a precios de segundo cru o superiores.",
    quiz: [
      { q: "¿De qué nacionalidad era Charles Palmer, que dio nombre a Château Palmer?", a: "Inglesa", x: ["Irlandesa", "Neerlandesa", "Estadounidense"] },
      { q: "¿Cuál es la combinación de colores característica de la etiqueta de Château Palmer?", a: "Dorado sobre fondo negro", x: ["Rojo sobre fondo blanco", "Plateado sobre fondo azul", "Dorado sobre fondo verde"] },
    ],
  },
  bx_lalagune: {
    fact: "El primer Grand Cru Classé que se encuentra al subir desde la ciudad de Burdeos hacia el Médoc. Desde 2000 pertenece a la familia Frey, también propietaria de Paul Jaboulet Aîné en el Ródano.",
    quiz: [
      { q: "¿Qué bodega del Ródano gestiona la familia Frey, propietaria de Château La Lagune?", a: "Paul Jaboulet Aîné", x: ["Guigal", "Chapoutier", "Château de Beaucastel"] },
    ],
  },
  bx_desmirail: {
    fact: "Tercer cru de Margaux gestionado por la familia Lurton, gran dinastía vinícola de Burdeos. Durante un tiempo sus viñedos se dispersaron y solo quedó el nombre, hasta que renació.",
    quiz: [
      { q: "¿Qué categoría tiene Château Desmirail en la clasificación del Médoc de 1855?", a: "Tercer cru", x: ["Segundo cru", "Cuarto cru", "Quinto cru"] },
    ],
  },
  bx_calonsegur: {
    fact: "Su etiqueta lleva un corazón porque el marqués de Ségur, dueño de Lafite y Latour, habría dicho: «Mi corazón está en Calon».",
    quiz: [
      { q: "¿Qué símbolo aparece en la etiqueta de Château Calon Ségur?", a: "Un corazón", x: ["Un león", "Una campana", "Una corona"] },
      { q: "¿Qué primeros crus poseía también el marqués de Ségur de la anécdota del corazón de Calon Ségur?", a: "Lafite y Latour", x: ["Margaux y Haut-Brion", "Mouton y Haut-Brion", "Margaux y Mouton"] },
    ],
  },
  bx_ferriere: {
    fact: "Tercer cru de Margaux, uno de los châteaux más pequeños de la clasificación de 1855. Lo dirige Claire Villars-Lurton, que aplica la agricultura biodinámica.",
    quiz: [
      { q: "¿Qué categoría tiene Château Ferrière en la clasificación del Médoc de 1855?", a: "Tercer cru", x: ["Segundo cru", "Cuarto cru", "Quinto cru"] },
    ],
  },
  bx_marquisdalesme: {
    fact: "Su nombre original era «Marquis d'Alesme Becker». Tras comprarlo en 2006, la familia Perrodo suprimió «Becker» del nombre y lo renovó.",
    quiz: [
      { q: "¿Cuál era el antiguo nombre de Château Marquis d'Alesme?", a: "Marquis d'Alesme Becker", x: ["Marquis de Terme", "Malescot St. Exupéry", "Rauzan-Gassies"] },
    ],
  },
  bx_saintpierre: {
    fact: "Cuarto cru que compró en 1982 Henri Martin, antiguo alcalde de Saint-Julien. Lo gestiona la misma familia que Château Gloria.",
    quiz: [
      { q: "¿Qué vino de Saint-Julien gestiona la misma familia que Château Saint-Pierre?", a: "Château Gloria", x: ["Château Talbot", "Château Beychevelle", "Château Lagrange"] },
    ],
  },
  bx_talbot: {
    fact: "Se dice que debe su nombre al general inglés John Talbot, muerto en la batalla de Castillon al final de la guerra de los Cien Años. También es famoso su vino blanco «Caillou Blanc».",
    quiz: [
      { q: "¿En qué guerra combatió el general inglés John Talbot, a quien se atribuye el nombre de Château Talbot?", a: "La guerra de los Cien Años", x: ["La guerra de los Treinta Años", "La guerra de las Dos Rosas", "Las guerras napoleónicas"] },
      { q: "¿Cómo se llama el vino blanco que elabora Château Talbot?", a: "Caillou Blanc", x: ["Pavillon Blanc", "Aile d'Argent", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_branaireducru: {
    fact: "Cuarto cru de Saint-Julien situado frente a Château Beychevelle, al otro lado de la carretera. Lo gestiona la familia Maroteaux desde 1988.",
    quiz: [
      { q: "¿Qué categoría tiene Château Branaire-Ducru en la clasificación del Médoc de 1855?", a: "Cuarto cru", x: ["Segundo cru", "Tercer cru", "Quinto cru"] },
    ],
  },
  bx_duhartmilon: {
    fact: "Cuarto cru de Pauillac vecino de Lafite Rothschild. En 1962 lo compró la familia Rothschild de Lafite, que lo revitalizó.",
    quiz: [
      { q: "¿Quién compró Château Duhart-Milon en 1962?", a: "La familia Rothschild de Lafite Rothschild", x: ["La familia Rothschild de Mouton Rothschild", "AXA Millésimes", "La familia Cazes"] },
    ],
  },
  bx_pouget: {
    fact: "Pequeño cuarto cru de Margaux que la familia Guillemet gestiona junto con el tercer cru Boyd-Cantenac.",
    quiz: [
      { q: "¿Qué tercer cru gestiona la misma familia que Château Pouget?", a: "Château Boyd-Cantenac", x: ["Château Cantenac Brown", "Château Kirwan", "Château d'Issan"] },
    ],
  },
  bx_latourcarnet: {
    fact: "Castillo medieval que conserva su foso y una antigua torre de vigía. En 2000 lo compró el empresario vinícola Bernard Magrez.",
    quiz: [
      { q: "¿Quién es propietario a la vez de Château La Tour Carnet y de Château Pape Clément?", a: "Bernard Magrez", x: ["Michel Rolland", "Jean-Luc Thunevin", "Gérard Perse"] },
    ],
  },
  bx_lafonrochet: {
    fact: "Cuarto cru de Saint-Estèphe que la familia Tesseron compró y revitalizó en 1960. Llama la atención por su edificio y su etiqueta pintados de amarillo intenso.",
    quiz: [
      { q: "¿Qué color distingue el edificio y la etiqueta de Château Lafon-Rochet?", a: "Amarillo", x: ["Azul", "Rosa", "Verde"] },
    ],
  },
  bx_beychevelle: {
    fact: "Su nombre viene de los barcos que, al pasar por el río, arriaban las velas («baisse voile») en homenaje al duque de Épernon, almirante de Francia. La etiqueta también muestra un barco.",
    quiz: [
      { q: "¿Qué gesto dio origen al nombre de Château Beychevelle?", a: "Arriar las velas", x: ["Levar anclas", "Tocar la campana", "Agitar las banderas"] },
      { q: "¿Qué aparece dibujado en la etiqueta de Château Beychevelle?", a: "Un barco", x: ["Un león", "Un corazón", "Una campana"] },
    ],
  },
  bx_prieurelichine: {
    fact: "Château levantado en el lugar de un antiguo priorato benedictino («prieuré»). En 1951 lo compró Alexis Lichine, que le dio su nombre.",
    quiz: [
      { q: "¿Qué significa «Prieuré» en el nombre de Château Prieuré-Lichine?", a: "Priorato", x: ["Ciudadela", "Molino", "Mercado"] },
      { q: "¿Quién dio su nombre a Château Prieuré-Lichine?", a: "Alexis Lichine", x: ["Robert Mondavi", "Émile Peynaud", "Hugh Barton"] },
    ],
  },
  bx_marquisdeterme: {
    fact: "Cuarto cru de Margaux que conserva el nombre de su propietario del siglo XVIII, el marqués de Terme. Pertenece a la familia Sénéclauze desde 1935.",
    quiz: [
      { q: "¿Qué categoría tiene Château Marquis de Terme en la clasificación del Médoc de 1855?", a: "Cuarto cru", x: ["Segundo cru", "Tercer cru", "Quinto cru"] },
    ],
  },
  bx_pontetcanet: {
    fact: "Quinto cru de Pauillac que adoptó pronto la biodinámica y labra sus viñedos con arados tirados por caballos. Pertenece a la familia Tesseron desde 1975.",
    quiz: [
      { q: "¿Qué utiliza Château Pontet-Canet en lugar del tractor para labrar sus viñedos?", a: "Caballos", x: ["Bueyes", "Burros", "Robots"] },
      { q: "¿Qué familia es propietaria de Château Pontet-Canet desde 1975?", a: "La familia Tesseron", x: ["La familia Cazes", "La familia Borie", "La familia Delon"] },
    ],
  },
  bx_batailley: {
    fact: "Se dice que su nombre procede de una batalla librada aquí durante la guerra de los Cien Años. En 1942 se separó de Haut-Batailley y hoy lo gestiona la familia Castéja.",
    quiz: [
      { q: "¿Qué quinto cru vecino surgió de la división de Château Batailley?", a: "Château Haut-Batailley", x: ["Château Grand-Puy-Lacoste", "Château Lynch-Moussas", "Château d'Armailhac"] },
    ],
  },
  bx_hautbatailley: {
    fact: "Quinto cru de Pauillac surgido en 1942 de la división de la finca Batailley. En 2017 lo compró la familia Cazes, propietaria de Lynch-Bages.",
    quiz: [
      { q: "¿Qué familia compró Château Haut-Batailley en 2017?", a: "La familia Cazes", x: ["La familia Tesseron", "La familia Castéja", "La familia Delon"] },
    ],
  },
  bx_grandpuylacoste: {
    fact: "«Puy» significa «colina»: el château se asienta sobre una loma de grava del interior de Pauillac. La familia Borie lo gestiona desde 1978.",
    quiz: [
      { q: "¿Qué significa «Puy» en el nombre de Château Grand-Puy-Lacoste?", a: "Colina", x: ["Pozo", "Bosque", "Río"] },
    ],
  },
  bx_grandpuyducasse: {
    fact: "Quinto cru con viñedos repartidos por todo Pauillac y el edificio del château a orillas del río, en el propio pueblo de Pauillac.",
    quiz: [
      { q: "¿Qué categoría tiene Château Grand-Puy Ducasse en la clasificación del Médoc de 1855?", a: "Quinto cru", x: ["Segundo cru", "Tercer cru", "Cuarto cru"] },
    ],
  },
  bx_lynchbages: {
    fact: "Su nombre procede de la familia Lynch, de origen irlandés, que fue su propietaria. Dirigido por la familia Cazes desde 1939, se ganó el apodo de «el Latour de los pobres».",
    quiz: [
      { q: "¿Qué apodo recibe Château Lynch-Bages?", a: "El Latour de los pobres", x: ["El Versalles del Médoc", "El marajá de Saint-Estèphe", "La joya de Pomerol"] },
      { q: "¿Qué familia dirige Château Lynch-Bages desde 1939?", a: "La familia Cazes", x: ["La familia Lynch", "La familia Borie", "La familia Tesseron"] },
    ],
  },
  bx_lynchmoussas: {
    fact: "Como Lynch-Bages, perteneció a la familia Lynch, de origen irlandés. Hoy lo gestiona la familia Castéja, la misma de Château Batailley.",
    quiz: [
      { q: "¿Qué quinto cru gestiona la familia Castéja, la misma de Château Lynch-Moussas?", a: "Château Batailley", x: ["Château Haut-Batailley", "Château Clerc Milon", "Château Pédesclaux"] },
    ],
  },
  bx_dauzac: {
    fact: "Quinto cru de Margaux famoso por ser el lugar donde, a finales del siglo XIX, se probó por primera vez el «caldo bordelés» (mezcla de sulfato de cobre y cal) contra los hongos de la vid.",
    quiz: [
      { q: "¿Qué tratamiento para el viñedo se probó por primera vez, según se dice, en Château Dauzac?", a: "El caldo bordelés", x: ["El caldo sulfocálcico", "El DDT", "El permanganato potásico"] },
    ],
  },
  bx_darmailhac: {
    fact: "Lo compró el barón Philippe de Rothschild en 1933. Tras llevar otros nombres, como «Mouton Baron Philippe», en 1989 recuperó su nombre original, d'Armailhac.",
    quiz: [
      { q: "¿Qué nombre llevó durante un tiempo Château d'Armailhac?", a: "Château Mouton Baron Philippe", x: ["Château Mouton Cadet", "Château Petit Mouton", "Château Clerc Mouton"] },
    ],
  },
  bx_dutertre: {
    fact: "Se alza sobre una loma («tertre») del pueblo de Arsac, en el oeste de la denominación Margaux. Lo gestiona la familia Albada Jelgersma, la misma de Giscours.",
    quiz: [
      { q: "¿Qué tercer cru de Margaux gestiona la misma familia que Château du Tertre?", a: "Château Giscours", x: ["Château Kirwan", "Château d'Issan", "Château Palmer"] },
    ],
  },
  bx_hautbagesliberal: {
    fact: "Conserva el nombre de la familia Libéral, su propietaria en el siglo XVIII. Claire Villars-Lurton lo dirige junto con el tercer cru Ferrière y aplica la agricultura biodinámica.",
    quiz: [
      { q: "¿Qué tercer cru de Margaux dirige la misma persona que Château Haut-Bages Libéral?", a: "Château Ferrière", x: ["Château Desmirail", "Château Kirwan", "Château d'Issan"] },
    ],
  },
  bx_pedesclaux: {
    fact: "Lo fundó en 1810 Pierre Urbain Pédesclaux, corredor de vinos de Burdeos. En 2009 lo compró Jacky Lorenzetti, que lo renovó con un moderno edificio envuelto en cristal.",
    quiz: [
      { q: "¿Qué empresario compró y renovó Château Pédesclaux en 2009?", a: "Jacky Lorenzetti", x: ["Bernard Magrez", "Michel Reybier", "François Pinault"] },
    ],
  },
  bx_belgrave: {
    fact: "Quinto cru del pueblo de Saint-Laurent, en el Haut-Médoc, gestionado por el negociante bordelés Dourthe.",
    quiz: [
      { q: "¿Qué categoría tiene Château Belgrave en la clasificación del Médoc de 1855?", a: "Quinto cru", x: ["Segundo cru", "Tercer cru", "Cuarto cru"] },
    ],
  },
  bx_camensac: {
    fact: "Quinto cru del pueblo de Saint-Laurent, en el Haut-Médoc. Junto con sus vecinos Belgrave y La Tour Carnet, es uno de los tres châteaux clasificados de Saint-Laurent.",
    quiz: [
      { q: "¿Qué cuarto cru se encuentra en el mismo pueblo de Saint-Laurent que Château Camensac?", a: "Château La Tour Carnet", x: ["Château Talbot", "Château Saint-Pierre", "Château Pouget"] },
    ],
  },
  bx_coslabory: {
    fact: "Pequeño quinto cru de Saint-Estèphe pegado a Cos d'Estournel, gestionado por la familia Audoy.",
    quiz: [
      { q: "¿Qué segundo cru de Saint-Estèphe linda con Château Cos Labory?", a: "Château Cos d'Estournel", x: ["Château Montrose", "Château Calon Ségur", "Château Lafon-Rochet"] },
    ],
  },
  bx_clercmilon: {
    fact: "Quinto cru de Pauillac vecino de Mouton Rothschild y Lafite Rothschild. En 1970 lo compró el barón Philippe de Rothschild.",
    quiz: [
      { q: "¿Quién compró Château Clerc Milon en 1970?", a: "El barón Philippe de Rothschild", x: ["Eric de Rothschild", "Jean-Michel Cazes", "Henri Martin"] },
    ],
  },
  bx_croizetbages: {
    fact: "Une los nombres de los hermanos Croizet, dueños de estas tierras en el siglo XVIII, y del pueblo de Bages. Lo gestiona la familia Quié, la misma de Rauzan-Gassies.",
    quiz: [
      { q: "¿Qué segundo cru de Margaux gestiona la misma familia que Château Croizet-Bages?", a: "Château Rauzan-Gassies", x: ["Château Rauzan-Ségla", "Château Brane-Cantenac", "Château Lascombes"] },
    ],
  },
  bx_cantemerle: {
    fact: "Su nombre suele interpretarse como «canta el mirlo» («merle»). Se añadió tarde a la clasificación de 1855 y figura en último lugar entre los quintos crus.",
    quiz: [
      { q: "¿Cómo entró Château Cantemerle en la clasificación de 1855?", a: "Se añadió tarde, cuando la lista ya se había publicado", x: ["Fue rebajado desde primer cru", "Fue elegido por sorteo", "Ascendió en la revisión de 1973"] },
    ],
  },
  bx_lepin: {
    fact: "Diminuto viñedo cuya primera añada lanzó en 1979 la familia belga Thienpont. Su nombre viene de un pino solitario que crecía a su lado.",
    quiz: [
      { q: "¿De dónde procede el nombre de Le Pin?", a: "De un pino solitario junto al viñedo", x: ["Del nombre del fundador", "De un antiguo monasterio", "De un pequeño puente de piedra"] },
      { q: "¿De qué nacionalidad es la familia Thienpont, propietaria de Le Pin?", a: "Belga", x: ["Neerlandesa", "Suiza", "Luxemburguesa"] },
    ],
  },
  bx_lafleur: {
    fact: "Pequeño viñedo lindante con Petrus que la familia Guinaudeau cuida como una granja familiar. Tiene una proporción de Cabernet Franc alta para ser un Pomerol.",
    quiz: [
      { q: "¿Qué familia cuida Château Lafleur?", a: "La familia Guinaudeau", x: ["La familia Moueix", "La familia Thienpont", "La familia Durantou"] },
    ],
  },
  bx_vcc: {
    fact: "Gran nombre de Pomerol que compró en 1924 la familia belga Thienpont. Algo poco habitual en Pomerol, tiene una alta proporción de Cabernet Franc y Cabernet Sauvignon.",
    quiz: [
      { q: "¿Qué familia compró Vieux Château Certan en 1924?", a: "La familia Thienpont", x: ["La familia Moueix", "La familia Guinaudeau", "La familia Nicolas"] },
    ],
  },
  bx_levangile: {
    fact: "Château de Pomerol situado entre Petrus y Cheval Blanc. En 1990 la familia Rothschild de Lafite adquirió una participación y hoy lo gestiona.",
    quiz: [
      { q: "¿Qué significa «Évangile» en el nombre de Château L'Évangile?", a: "Evangelio", x: ["Ángel", "Catedral", "Peregrino"] },
    ],
  },
  bx_laconseillante: {
    fact: "Su nombre procede de Catherine Conseillan, su propietaria en el siglo XVIII. La familia Nicolas lo conserva desde 1871, y la cápsula y las letras violetas de la etiqueta son su seña de identidad.",
    quiz: [
      { q: "¿Qué color caracteriza la cápsula de Château La Conseillante?", a: "Violeta", x: ["Dorado", "Negro", "Blanco"] },
    ],
  },
  bx_trotanoy: {
    fact: "Se dice que su nombre viene de «trop ennuie» («demasiado penoso»), porque labrar su suelo tan compacto era muy agotador. Jean-Pierre Moueix lo compró en 1953.",
    quiz: [
      { q: "¿Qué negociante compró Château Trotanoy en 1953?", a: "Jean-Pierre Moueix", x: ["Dourthe", "Cordier", "Baron Philippe de Rothschild"] },
    ],
  },
  bx_egliseclinet: {
    fact: "Su nombre procede del viñedo situado junto a la iglesia de Pomerol. Desde 1983, bajo la dirección de Denis Durantou, se elevó a la élite de Pomerol.",
    quiz: [
      { q: "¿Qué significa «Église» en el nombre de Château L'Église-Clinet?", a: "Iglesia", x: ["Fortaleza", "Pozo", "Plaza"] },
    ],
  },
  bx_clinet: {
    fact: "Château de Pomerol comprado en 1998 por la familia Laborde y dirigido por el hijo, Ronan Laborde. Combina Merlot con Cabernet Sauvignon.",
    quiz: [
      { q: "¿Qué familia dirige Château Clinet?", a: "La familia Laborde", x: ["La familia Durantou", "La familia Nicolas", "La familia Thienpont"] },
    ],
  },
  bx_gazin: {
    fact: "En la Edad Media perteneció a la Orden de San Juan de Jerusalén (los Hospitalarios), cuya cruz aún figura en la etiqueta. La familia de Bailliencourt lo posee desde hace generaciones.",
    quiz: [
      { q: "¿A qué antiguo propietario remite la cruz de la etiqueta de Château Gazin?", a: "La Orden de San Juan (Hospitalarios)", x: ["La Santa Sede", "El arzobispo de Burdeos", "La Corona inglesa"] },
    ],
  },
  bx_nenin: {
    fact: "Château de Pomerol que la familia Delon, de Léoville Las Cases, compró en 1997 y renovó a fondo.",
    quiz: [
      { q: "¿Qué familia compró Château Nénin en 1997?", a: "La familia Delon", x: ["La familia Thienpont", "La familia Moueix", "La familia Laborde"] },
    ],
  },
  bx_bonpasteur: {
    fact: "Château de Pomerol cultivado durante generaciones por la familia de Michel Rolland, el célebre enólogo consultor. Su nombre significa «el buen pastor».",
    quiz: [
      { q: "¿Qué enólogo consultor está estrechamente ligado a Château Le Bon Pasteur?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  bx_lafleurpetrus: {
    fact: "Se sitúa entre sus vecinos Lafleur y Petrus, y por eso une ambos nombres. Pertenece a la familia Moueix (Jean-Pierre Moueix).",
    quiz: [
      { q: "¿Qué negociante es propietario de Château La Fleur-Pétrus?", a: "Jean-Pierre Moueix", x: ["La familia Thienpont", "La familia Guinaudeau", "Domaine Clarence Dillon"] },
    ],
  },
  bx_ausone: {
    fact: "Gran casa de Saint-Émilion que lleva el nombre de Ausonio, poeta romano del siglo IV. Ante la revisión de la clasificación de 2022, se retiró voluntariamente del proceso junto con Cheval Blanc.",
    quiz: [
      { q: "¿De quién procede el nombre de Château Ausone?", a: "El poeta romano Ausonio", x: ["El emperador romano Adriano", "San Emilión", "Carlomagno"] },
      { q: "¿Qué familia dirige Château Ausone?", a: "La familia Vauthier", x: ["La familia Moueix", "La familia de Boüard", "La familia Manoncourt"] },
    ],
  },
  bx_angelus: {
    fact: "Su nombre alude al toque del Ángelus de tres iglesias que se oye desde el viñedo, y la etiqueta luce una campana dorada. En 2012 alcanzó la máxima categoría, «A».",
    quiz: [
      { q: "¿Cuál es el símbolo de la etiqueta de Château Angélus?", a: "Una campana", x: ["Un ángel", "Una llave", "Un lirio"] },
      { q: "¿Qué château alcanzó en 2012, junto con Château Angélus, la máxima categoría «A» de Saint-Émilion?", a: "Château Pavie", x: ["Château Figeac", "Château Canon", "Château Troplong Mondot"] },
    ],
  },
  bx_pavie: {
    fact: "Gérard Perse lo compró en 1998 e invirtió a gran escala; en 2012 ascendió, junto con Angélus, a la máxima categoría «A» de Saint-Émilion.",
    quiz: [
      { q: "¿Quién compró Château Pavie en 1998?", a: "Gérard Perse", x: ["Hubert de Boüard", "Alain Vauthier", "Bernard Magrez"] },
    ],
  },
  bx_figeac: {
    fact: "Caso raro en Saint-Émilion: las dos Cabernet suman más de la mitad del viñedo. Su vecino Cheval Blanc nació en el siglo XIX de tierras segregadas de la finca de Figeac.",
    quiz: [
      { q: "¿Qué famoso château nació en el siglo XIX de una parte segregada de la finca de Château Figeac?", a: "Château Cheval Blanc", x: ["Château Ausone", "Château Angélus", "Château Pavie"] },
      { q: "¿En qué año alcanzó Château Figeac la máxima categoría «A» de Saint-Émilion?", a: "2022", x: ["2012", "1996", "2006"] },
    ],
  },
  bx_canon: {
    fact: "Premier Grand Cru Classé de Saint-Émilion que debe su nombre a Jacques Kanon, su propietario en el siglo XVIII. En 1996 lo compró la familia Wertheimer, dueña de Chanel.",
    quiz: [
      { q: "¿Quién posee a la vez Château Canon y Château Rauzan-Ségla, en Margaux?", a: "Chanel (familia Wertheimer)", x: ["LVMH", "AXA Millésimes", "Louis Roederer"] },
    ],
  },
  bx_belairmonange: {
    fact: "En 2008 la familia Moueix compró el antiguo Château Bélair y lo rebautizó en honor de Anne-Adèle Monange, antepasada de la familia. En 2012 le incorporó el vecino Château Magdelaine.",
    quiz: [
      { q: "¿Qué château de la familia Moueix se integró en 2012 en Château Bélair-Monange?", a: "Château Magdelaine", x: ["Château Canon", "Château Troplong Mondot", "Clos Fourtet"] },
    ],
  },
  bx_troplongmondot: {
    fact: "Se asienta sobre una de las colinas calizas más altas de Saint-Émilion. Ascendió a Premier Grand Cru Classé en 2006 y en 2017 lo compró la reaseguradora SCOR.",
    quiz: [
      { q: "¿Quién compró Château Troplong Mondot en 2017?", a: "La reaseguradora SCOR", x: ["AXA Millésimes", "Chanel", "Suntory"] },
    ],
  },
  bx_valandraud: {
    fact: "Pionero de los «vinos de garaje», que Jean-Luc Thunevin y Murielle Andraud empezaron a elaborar en un pequeño almacén. Su primera añada fue la de 1991 y en 2012 ascendió a Premier Grand Cru Classé.",
    quiz: [
      { q: "¿Cómo se llaman los vinos que, como Château Valandraud, se elaboraban en pequeñas cantidades en un almacén y causaron furor en los años noventa?", a: "Vinos de garaje", x: ["Vinos naturales", "Supertoscanos", "Vinos naranjas"] },
      { q: "¿Quién creó Château Valandraud?", a: "Jean-Luc Thunevin", x: ["Gérard Perse", "Michel Rolland", "Hubert de Boüard"] },
    ],
  },
  bx_lamondotte: {
    fact: "Su primera añada salió en 1996 de un pequeño viñedo de la familia de los condes von Neipperg. En la revisión de 2012 ascendió directamente a Premier Grand Cru Classé.",
    quiz: [
      { q: "¿Qué familia es propietaria de La Mondotte?", a: "La familia von Neipperg", x: ["La familia Vauthier", "La familia Moueix", "La familia Bécot"] },
    ],
  },
  bx_tertreroteboeuf: {
    fact: "Significa «colina donde eructa el buey»: la ladera era tan empinada que los bueyes que la araban jadeaban. Sin estar clasificado, se vende a precios de primerísimo nivel.",
    quiz: [
      { q: "¿Qué significa el nombre de Château Tertre Rôteboeuf?", a: "Colina donde eructa el buey", x: ["Colina del buey asado", "Campo del toro rojo", "Ladera donde descansa el campesino"] },
    ],
  },
  bx_beausejourbecot: {
    fact: "En la revisión de los años ochenta fue degradado por haber incorporado parcelas sin clasificar, pero en 1996 recuperó el rango de Premier Grand Cru Classé. Lo gestiona la familia Bécot.",
    quiz: [
      { q: "¿Qué categoría perdió Château Beau-Séjour Bécot en los años ochenta y recuperó en 1996?", a: "Premier Grand Cru Classé", x: ["Cru Bourgeois", "Grand Cru Classé de Graves", "Segundo cru de 1855"] },
    ],
  },
  bx_closfourtet: {
    fact: "Se halla justo frente a las murallas del pueblo de Saint-Émilion, con bodegas excavadas bajo tierra en antiguas canteras de caliza. La familia Cuvelier lo compró en 2001.",
    quiz: [
      { q: "¿Qué familia compró Clos Fourtet en 2001?", a: "La familia Cuvelier", x: ["La familia Lurton", "La familia Bécot", "La familia Perse"] },
    ],
  },
  bx_larcisducasse: {
    fact: "Procede de un viñedo en terrazas sobre una ladera orientada al sur, vecina de Pavie. Ascendió a Premier Grand Cru Classé en la revisión de 2012.",
    quiz: [
      { q: "¿En qué año ascendió Château Larcis Ducasse a Premier Grand Cru Classé?", a: "2012", x: ["1996", "2006", "1955"] },
    ],
  },
  bx_paviemacquin: {
    fact: "Lleva el nombre de Albert Macquin, que difundió en Saint-Émilion el injerto sobre portainjertos americanos tras la filoxera. Ascendió a Premier Grand Cru Classé en 2006.",
    quiz: [
      { q: "¿Qué logro se atribuye a Albert Macquin, que dio nombre a Château Pavie Macquin?", a: "Difundió el injerto sobre pie americano tras la filoxera", x: ["Inventó el caldo bordelés", "Elaboró la clasificación de 1855", "Fue el primero en embotellar en el château"] },
    ],
  },
  bx_canonlagaffeliere: {
    fact: "Château de Saint-Émilion propiedad de la familia de los condes von Neipperg desde 1971. Ascendió a Premier Grand Cru Classé en 2012.",
    quiz: [
      { q: "¿Qué familia posee a la vez Château Canon-la-Gaffelière y La Mondotte?", a: "La familia von Neipperg", x: ["La familia Wertheimer", "La familia Moueix", "La familia Vauthier"] },
    ],
  },
  bx_missionhautbrion: {
    fact: "Su nombre procede de los sacerdotes de la Congregación de la Misión (lazaristas), que cultivaron estas tierras en el siglo XVII. En 1983 lo compró la familia Dillon, propietaria de Haut-Brion, al otro lado de la carretera.",
    quiz: [
      { q: "¿Quién compró Château La Mission Haut-Brion en 1983?", a: "Domaine Clarence Dillon", x: ["Bernard Magrez", "La familia Cathiard", "Louis Roederer"] },
      { q: "¿A qué alude «Mission» en el nombre de Château La Mission Haut-Brion?", a: "A antiguos sacerdotes misioneros", x: ["A una expedición militar", "A una delegación diplomática", "A una expedición de exploradores"] },
    ],
  },
  bx_papeclement: {
    fact: "Viñedo que perteneció a Bertrand de Goth, arzobispo de Burdeos que en 1305 se convirtió en el papa Clemente V. Hoy lo gestiona Bernard Magrez.",
    quiz: [
      { q: "¿Adónde trasladó la sede papal Clemente V, el papa que dio nombre a Château Pape Clément?", a: "Aviñón", x: ["Burdeos", "Lyon", "Reims"] },
    ],
  },
  bx_smithhautlafitte: {
    fact: "Conserva el nombre de George Smith, comerciante escocés del siglo XVIII. En 1990 lo compró el matrimonio Cathiard, antiguos esquiadores, y su hija creó Caudalie, una marca de cosmética a base de uva.",
    quiz: [
      { q: "¿Qué marca de cosmética creó la hija de la familia Cathiard, de Château Smith Haut Lafitte?", a: "Caudalie", x: ["L'Occitane", "Nuxe", "Biotherm"] },
      { q: "¿A qué se dedicaba antes el matrimonio Cathiard, que compró Château Smith Haut Lafitte en 1990?", a: "Al esquí de competición", x: ["A la vela de competición", "Al ciclismo profesional", "Al tenis profesional"] },
    ],
  },
  bx_chevalier: {
    fact: "Gran casa de Pessac-Léognan situada en un claro de un pinar; tanto su tinto como su blanco figuran en la clasificación de Graves. La familia Bernard lo dirige desde 1983.",
    quiz: [
      { q: "¿Qué vinos de Domaine de Chevalier están clasificados en Graves?", a: "Tanto el tinto como el blanco", x: ["Solo el tinto", "Solo el blanco", "Solo el vino dulce"] },
    ],
  },
  bx_hautbailly: {
    fact: "En 1998 lo compró el banquero estadounidense Robert Wilmers. Conserva un viejo viñedo con cepas de más de 100 años en el que conviven varias variedades mezcladas.",
    quiz: [
      { q: "¿De qué país era Robert Wilmers, que compró Château Haut-Bailly en 1998?", a: "Estados Unidos", x: ["Reino Unido", "Bélgica", "Hong Kong"] },
    ],
  },
  bx_malartic: {
    fact: "Lleva el nombre de la familia del conde de Malartic, almirante del siglo XVIII, y su etiqueta muestra un velero. En 1997 lo compró la familia belga Bonnie.",
    quiz: [
      { q: "¿De qué país es la familia Bonnie, que compró Château Malartic-Lagravière en 1997?", a: "Bélgica", x: ["Países Bajos", "Suiza", "Estados Unidos"] },
    ],
  },
  bx_carbonnieux: {
    fact: "Es célebre la anécdota de los antiguos monjes benedictinos que vendían su vino blanco a un sultán otomano, al que el alcohol le estaba prohibido, como «agua mineral de Carbonnieux».",
    quiz: [
      { q: "¿Con qué nombre vendían los monjes de Château Carbonnieux su vino al sultán otomano?", a: "Agua mineral de Carbonnieux", x: ["Agua bendita de Carbonnieux", "Tisana de Carbonnieux", "Mosto de Carbonnieux"] },
    ],
  },
  bx_lescarmes: {
    fact: "Su nombre recuerda el viñedo de los antiguos frailes carmelitas. Patrice Pichet lo compró en 2010 y levantó una bodega en forma de barco diseñada por Philippe Starck.",
    quiz: [
      { q: "¿Qué diseñador creó la nueva bodega de Château Les Carmes Haut-Brion?", a: "Philippe Starck", x: ["Jean Nouvel", "Frank Gehry", "Tadao Ando"] },
    ],
  },
  bx_suduiraut: {
    fact: "Premier Cru Classé de Sauternes, lindante con d'Yquem. Se dice que sus jardines los diseñó Le Nôtre, autor de los de Versalles, y desde 1992 pertenece a AXA Millésimes.",
    quiz: [
      { q: "¿Quién es propietario de Château Suduiraut desde 1992?", a: "AXA Millésimes", x: ["LVMH", "Domaines Barons de Rothschild", "Domaine Clarence Dillon"] },
    ],
  },
  bx_rieussec: {
    fact: "Premier Cru Classé de Sauternes comprado en 1984 por los Rothschild de Lafite; se encuentra en Fargues, municipio vecino de d'Yquem.",
    quiz: [
      { q: "¿Quién compró Château Rieussec en 1984?", a: "Los Rothschild de Lafite Rothschild", x: ["AXA Millésimes", "Los Rothschild de Mouton Rothschild", "LVMH"] },
    ],
  },
  bx_climens: {
    fact: "Premier Cru Classé apodado «el señor de Barsac». Se elabora 100 % con Sémillon y su viñedo se cultivó en biodinámica.",
    quiz: [
      { q: "¿Qué apodo recibe Château Climens?", a: "El señor de Barsac", x: ["La reina de Sauternes", "El Versalles del Médoc", "El d'Yquem de los pobres"] },
    ],
  },
  bx_coutet: {
    fact: "Premier Cru Classé de Barsac que conserva un edificio fortificado medieval. Es famoso por la «Cuvée Madame», que solo elabora en pequeñas cantidades en años excepcionales.",
    quiz: [
      { q: "¿Qué cuvée especial elabora Château Coutet en pequeñas cantidades solo en años excepcionales?", a: "Cuvée Madame", x: ["Cuvée Louise", "Réserve du Général", "Cuvée Prestige"] },
    ],
  },
  bx_guiraud: {
    fact: "Premier Cru Classé de Sauternes con certificación ecológica. En 2006 lo compraron, entre otros, Robert Peugeot, de la familia Peugeot, y Olivier Bernard, de Domaine de Chevalier.",
    quiz: [
      { q: "¿Qué familia del automóvil participó en 2006 en la compra de Château Guiraud?", a: "La familia Peugeot", x: ["La familia Renault", "La familia Citroën", "La familia Michelin"] },
    ],
  },
  bx_latourblanche: {
    fact: "En 1907 su propietario, Daniel Iffla Osiris, lo donó al Estado con la condición de fundar una escuela de viticultura y enología. Aún hoy lo gestiona una escuela dependiente del Ministerio de Agricultura.",
    quiz: [
      { q: "¿Quién es propietario de Château La Tour Blanche?", a: "El Estado francés (Ministerio de Agricultura)", x: ["La Universidad de Burdeos", "El ayuntamiento de Burdeos", "La cooperativa de productores de Sauternes"] },
    ],
  },
  bx_lafauriepeyraguey: {
    fact: "En 2014 lo compró Silvio Denz, presidente de la marca de cristal Lalique, que abrió dentro del château un hotel y un restaurante Lalique.",
    quiz: [
      { q: "¿Con qué marca de cristal está asociado Château Lafaurie-Peyraguey?", a: "Lalique", x: ["Baccarat", "Swarovski", "Riedel"] },
    ],
  },
  bx_fargues: {
    fact: "Finca que la familia Lur Saluces, propietaria durante mucho tiempo de d'Yquem, conserva desde el siglo XV. Aunque no está clasificado, se considera un Sauternes a la altura de d'Yquem.",
    quiz: [
      { q: "¿Qué château de Sauternes, de categoría Premier Cru Supérieur, poseyó durante mucho tiempo la familia Lur Saluces, dueña de Château de Fargues?", a: "Château d'Yquem", x: ["Château Suduiraut", "Château Climens", "Château Rieussec"] },
    ],
  },
  bx_sociandomallet: {
    fact: "En 1969 lo compró el negociante Jean Gautreau, que lo llevó a la altura de los châteaux clasificados. No se presenta a la selección de Cru Bourgeois y se vende solo por su nombre.",
    quiz: [
      { q: "¿Quién compró Château Sociando-Mallet en 1969 y lo encumbró?", a: "Jean Gautreau", x: ["Henri Martin", "Jean-Michel Cazes", "Alexis Lichine"] },
    ],
  },
  bx_chassespleen: {
    fact: "Significa «ahuyenta la melancolía (spleen)»; se cuenta que el nombre se lo dio Byron, o quizá Baudelaire. Se considera uno de los grandes referentes de los Cru Bourgeois.",
    quiz: [
      { q: "¿Qué significa el nombre de Château Chasse-Spleen?", a: "Ahuyenta la melancolía", x: ["Descanso del cazador", "Colina resplandeciente", "Bosque que frena el viento"] },
    ],
  },
  bx_gloria: {
    fact: "Henri Martin, alcalde de Saint-Julien, lo creó a partir de los años cuarenta comprando, parcela a parcela, viñedos de los châteaux clasificados vecinos. Sin estar clasificado, goza de una consideración digna de los clasificados.",
    quiz: [
      { q: "¿Quién fundó Château Gloria?", a: "Henri Martin", x: ["Jean Gautreau", "Alexis Lichine", "Philippe de Rothschild"] },
    ],
  },
  bx_phelansegur: {
    fact: "Finca de Saint-Estèphe levantada en el siglo XIX por el irlandés Bernard Phelan. Aunque está fuera de la clasificación, se valora al nivel de un Grand Cru Classé.",
    quiz: [
      { q: "¿De dónde procedía Bernard Phelan, que dio nombre a Château Phélan Ségur?", a: "Irlanda", x: ["Escocia", "Inglaterra", "Países Bajos"] },
    ],
  },
  bx_potensac: {
    fact: "Château del norte del Médoc gestionado por la familia Delon, de Léoville Las Cases, y famoso por su excelente relación calidad-precio.",
    quiz: [
      { q: "¿Qué familia gestiona Château Potensac?", a: "La familia Delon", x: ["La familia Cazes", "La familia Borie", "La familia Cuvelier"] },
    ],
  },
  bx_poujeaux: {
    fact: "Château emblemático de Moulis; en 2008 lo compró la familia Cuvelier, propietaria de Clos Fourtet en Saint-Émilion.",
    quiz: [
      { q: "¿Qué familia posee a la vez Château Poujeaux y Clos Fourtet, en Saint-Émilion?", a: "La familia Cuvelier", x: ["La familia Lurton", "La familia Delon", "La familia Moueix"] },
    ],
  },
  bx_clarke: {
    fact: "Château de Listrac que el barón Edmond de Rothschild compró en 1973 y cuyo viñedo replantó por completo.",
    quiz: [
      { q: "¿Quién compró Château Clarke en 1973?", a: "Edmond de Rothschild", x: ["Philippe de Rothschild", "Eric de Rothschild", "Clarence Dillon"] },
    ],
  },
  bx_depez: {
    fact: "Château de Saint-Estèphe comprado en 1995 por la casa de champán Louis Roederer, que más tarde adquirió también Pichon Comtesse.",
    quiz: [
      { q: "¿Qué casa de champán compró Château de Pez en 1995?", a: "Louis Roederer", x: ["Bollinger", "Veuve Clicquot", "Pol Roger"] },
    ],
  },
  bx_angludet: {
    fact: "Château de Margaux comprado en 1961 por la familia Sichel, que también es copropietaria de Château Palmer, tercer cru.",
    quiz: [
      { q: "¿De qué tercer cru es copropietaria la familia Sichel, que gestiona Château d'Angludet?", a: "Château Palmer", x: ["Château Giscours", "Château Kirwan", "Château d'Issan"] },
    ],
  },
  bx_ormesdepez: {
    fact: "Château de Saint-Estèphe gestionado desde 1940 por la familia Cazes, propietaria de Lynch-Bages.",
    quiz: [
      { q: "¿Qué familia gestiona Château Ormes de Pez?", a: "La familia Cazes", x: ["La familia Delon", "La familia Tesseron", "La familia Borie"] },
    ],
  },
  bx_carruades: {
    fact: "Segundo vino de Lafite Rothschild. Su nombre procede de los viñedos de la colina de «Carruades», incorporados a la finca de Lafite.",
    quiz: [
      { q: "¿De qué país procedía sobre todo la demanda que disparó el precio de Carruades de Lafite a finales de la década de 2000?", a: "China", x: ["Japón", "Rusia", "India"] },
    ],
  },
  bx_pavillonrouge: {
    fact: "Segundo vino de Château Margaux, que llevó por primera vez el nombre de «Pavillon Rouge» en 1908.",
    quiz: [
      { q: "¿Qué vino blanco de Château Margaux forma pareja con Pavillon Rouge du Château Margaux?", a: "Pavillon Blanc", x: ["Aile d'Argent", "Caillou Blanc", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_fortsdelatour: {
    fact: "Segundo vino de Château Latour, cuya primera añada fue la de 1966. Como Latour, solo sale al mercado tras una larga crianza.",
    quiz: [
      { q: "¿Cuál fue la primera añada de Les Forts de Latour?", a: "1966", x: ["1945", "1982", "1990"] },
    ],
  },
  bx_petitmouton: {
    fact: "Segundo vino de Mouton Rothschild, presentado por primera vez en la década de 1990. El vino blanco del mismo château es Aile d'Argent.",
    quiz: [
      { q: "¿Qué vino blanco elabora el château que produce Le Petit Mouton?", a: "Aile d'Argent", x: ["Pavillon Blanc", "Caillou Blanc", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_clarence: {
    fact: "Segundo vino que en 2007 dejó de llamarse Bahans Haut-Brion para rendir homenaje a Clarence Dillon, el banquero estadounidense que compró Haut-Brion en 1935.",
    quiz: [
      { q: "¿Cómo se llamaba antes Le Clarence de Haut-Brion?", a: "Bahans Haut-Brion", x: ["La Chapelle de la Mission", "Carruades de Haut-Brion", "Pavillon de Haut-Brion"] },
      { q: "¿A quién rinde homenaje Le Clarence de Haut-Brion?", a: "Al banquero estadounidense Clarence Dillon", x: ["Al papa Clemente V", "Al rey Carlos II de Inglaterra", "A Napoleón III"] },
    ],
  },
  bx_alterego: {
    fact: "Apareció en 1998 para sustituir al antiguo segundo vino, «Réserve du Général». Como indica su nombre, se elabora aparte como el «otro yo» de Palmer.",
    quiz: [
      { q: "¿Cómo se llamaba el segundo vino de Château Palmer antes de Alter Ego de Palmer?", a: "Réserve du Général", x: ["Pavillon Rouge", "Les Forts", "Clos du Marquis"] },
    ],
  },
  bx_petitcheval: {
    fact: "Segundo vino de Cheval Blanc, presentado por primera vez en 1988.",
    quiz: [
      { q: "¿Quiénes compraron en 1998 Château Cheval Blanc, que elabora Le Petit Cheval?", a: "Bernard Arnault y Albert Frère", x: ["François Pinault", "Los hermanos Wertheimer", "Los hermanos Bouygues"] },
    ],
  },
  bx_closdumarquis: {
    fact: "Durante mucho tiempo se consideró el segundo vino de Léoville Las Cases, pero desde 2007 se elabora como vino independiente, procedente de viñedos propios y separados.",
    quiz: [
      { q: "¿Qué vino pasó a ser en 2007 el segundo vino de Léoville Las Cases en lugar de Clos du Marquis?", a: "Le Petit Lion du Marquis de Las Cases", x: ["Les Forts de Latour", "Réserve de la Comtesse", "La Croix de Beaucaillou"] },
    ],
  },
  bx_pagodesdecos: {
    fact: "Segundo vino de Cos d'Estournel, cuyo nombre procede de las torres de estilo oriental (pagodas) que coronan el tejado de su bodega.",
    quiz: [
      { q: "¿De dónde procede el nombre de Les Pagodes de Cos?", a: "Las torres orientales del tejado de la bodega", x: ["El diario de viaje a la India del fundador", "Los pinos del viñedo", "El campanario de la iglesia del pueblo"] },
    ],
  },
  bx_carillonangelus: {
    fact: "Segundo vino de Angélus. Un «carillon» (carillón) es un instrumento que hace sonar varias campanas, en sintonía con Angélus, que tiene la campana como símbolo.",
    quiz: [
      { q: "¿Qué significa «Carillon» en el nombre de Carillon d'Angélus?", a: "Un instrumento de varias campanas", x: ["Un pequeño viñedo", "Una flauta de pastor", "Un jardín de monasterio"] },
    ],
  },
  bx_pavillonblanc: {
    fact: "La denominación Margaux solo ampara vinos tintos, así que el blanco de Château Margaux sale como «AOC Bordeaux». Se elabora 100 % con Sauvignon Blanc.",
    quiz: [
      { q: "¿Por qué Pavillon Blanc du Château Margaux no puede usar la denominación «Margaux»?", a: "Porque la AOC Margaux solo ampara tintos", x: ["Porque es un segundo vino", "Porque no usa barricas de roble", "Porque se elabora con uva comprada"] },
    ],
  },
  bx_moutoncadet: {
    fact: "Nació en 1930, cuando el barón Philippe de Rothschild vendió aparte el vino que, por una mala cosecha, no pudo comercializar como Mouton Rothschild. «Cadet» significa «el menor» y alude a Philippe, que era el hijo menor.",
    quiz: [
      { q: "¿Qué significa «Cadet» en Mouton Cadet?", a: "El benjamín", x: ["El primogénito", "El caballero", "El corderito"] },
    ],
  },
  bx_montperat: {
    fact: "Tinto de Burdeos que se hizo muy popular en Corea del Sur y Japón después de que el manga «Las gotas de Dios» lo comparara con la música del grupo de rock Queen.",
    quiz: [
      { q: "¿Con qué grupo de rock se compara Château Mont-Pérat en el manga «Las gotas de Dios»?", a: "Queen", x: ["The Beatles", "The Rolling Stones", "Led Zeppelin"] },
    ],
  },
};

export default T;
