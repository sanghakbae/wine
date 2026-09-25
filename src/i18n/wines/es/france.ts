import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  fr_latache: {
    fact: "Junto con Romanée-Conti, es uno de los dos monopoles cuyo viñedo pertenece por entero y en exclusiva al DRC. Mide algo más de 6 ha, más del triple que Romanée-Conti.",
    quiz: [
      { q: "¿Cómo se denomina el caso en que, como en La Tâche, un único domaine posee todo el viñedo?", a: "Monopole", x: ["Climat", "Lieu-dit", "Métayage"] },
    ],
  },
  fr_richebourg_drc: {
    fact: "Tiene fama de ser el más opulento y concentrado de los grands crus de Vosne-Romanée. Además del DRC, se reparten el viñedo Leroy, Anne Gros y Méo-Camuzet, entre otros.",
    quiz: [
      { q: "¿Qué familia comparte con los De Villaine la propiedad del Domaine de la Romanée-Conti, que elabora el Richebourg del DRC?", a: "La familia Leroy", x: ["La familia Rousseau", "La familia de Vogüé", "La familia Lafon"] },
    ],
  },
  fr_rsv_drc: {
    fact: "Su nombre procede de la abadía de Saint-Vivant, que cultivaba estas tierras en la Edad Media. El DRC empezó a elaborarlo en 1966 arrendando el viñedo a la familia Marey-Monge y lo compró en 1988.",
    quiz: [
      { q: "¿De dónde procede el nombre del Romanée-Saint-Vivant del DRC?", a: "De la abadía medieval de Saint-Vivant", x: ["Del príncipe de Conti, en el siglo XVIII", "Del nombre de un general de Napoleón", "De una duquesa de Borgoña"] },
      { q: "¿A qué familia pertenecía el viñedo de Romanée-Saint-Vivant que el DRC arrendó y acabó comprando?", a: "La familia Marey-Monge", x: ["La familia Leroy", "La familia Liger-Belair", "La familia Mommessin"] },
    ],
  },
  fr_grandsechezeaux_drc: {
    fact: "Grand Cru que administrativamente pertenece al vecino pueblo de Flagey-Échezeaux, pero se considera un vino de Vosne-Romanée. Es mucho más pequeño y escaso que Échezeaux.",
    quiz: [
      { q: "¿Qué famoso Grand Cru rodeado por un muro de piedra linda directamente con el viñedo de Grands-Échezeaux del DRC?", a: "Clos de Vougeot", x: ["Clos de Tart", "Clos des Lambrays", "Clos de Bèze"] },
    ],
  },
  fr_echezeaux_drc: {
    fact: "Es el Grand Cru más extenso de la zona de Vosne-Romanée, repartido en pequeñas parcelas entre decenas de propietarios. Se considera la puerta de entrada a los grands crus tintos del DRC.",
    quiz: [
      { q: "¿Qué afirmación es correcta sobre el viñedo Grand Cru Échezeaux, de donde procede el Échezeaux del DRC?", a: "Está repartido en pequeñas parcelas entre decenas de propietarios", x: ["Es un monopole exclusivo del DRC", "Solo puede producir vino blanco", "Fue ascendido a Grand Cru en la década de 1990"] },
    ],
  },
  fr_montrachet_drc: {
    fact: "Viñedo de algo más de 8 ha a caballo entre los pueblos de Puligny y Chassagne, considerado la cuna del mejor Chardonnay del mundo.",
    quiz: [
      { q: "¿Qué escritor francés habría dicho que el Montrachet debe beberse «quitándose el sombrero y de rodillas»?", a: "Alexandre Dumas", x: ["Victor Hugo", "Honoré de Balzac", "Émile Zola"] },
    ],
  },
  fr_liger_romanee: {
    fact: "Monopole de menos de 1 ha situado en la ladera justo por encima de Romanée-Conti. A principios de los años 2000, Louis-Michel Liger-Belair lo recuperó y la familia empezó a elaborarlo directamente.",
    quiz: [
      { q: "¿Qué récord ostenta La Romanée?", a: "Es la AOC más pequeña de Francia", x: ["Es la AOC más antigua de Francia", "Es el Grand Cru más extenso de Borgoña", "Fue el primer viñedo con certificación ecológica de Francia"] },
    ],
  },
  fr_meo_crosparantoux: {
    fact: "Premier Cru que Henri Jayer, «el dios de Borgoña», convirtió en leyenda tras roturar un terreno abandonado donde crecían tupinambos. Jayer cultivaba en aparcería los viñedos de Méo-Camuzet y formó a Jean-Nicolas Méo.",
    quiz: [
      { q: "¿Qué enólogo, apodado «el dios de Borgoña», roturó Cros Parantoux y lo convirtió en leyenda?", a: "Henri Jayer", x: ["Armand Rousseau", "Georges Roumier", "Henri Gouges"] },
    ],
  },
  fr_annegros_cdv: {
    fact: "El Clos de Vougeot es un Grand Cru de 50 ha que los monjes cercaron con un muro de piedra en el siglo XII; hoy se lo reparten unos 80 propietarios. Anne Gros cultiva la parcela Grand Maupertui.",
    quiz: [
      { q: "¿Qué orden monástica cercó con un muro de piedra y cultivó desde el siglo XII el Clos de Vougeot, de donde procede el Clos Vougeot de Anne Gros?", a: "La orden del Císter", x: ["La orden de Cluny", "La Compañía de Jesús", "La orden franciscana"] },
      { q: "¿Qué cofradía del vino de Borgoña tiene su sede en el castillo del Clos de Vougeot?", a: "Chevaliers du Tastevin", x: ["Commanderie du Bontemps de Médoc", "Ordre des Coteaux de Champagne", "Les Compagnons du Beaujolais"] },
    ],
  },
  fr_leroy_musigny: {
    fact: "Domaine fundado en 1988 por Lalou Bize-Leroy. Cultivado en biodinámica desde el principio y con rendimientos extremadamente bajos, produce los vinos más caros de Borgoña.",
    quiz: [
      { q: "¿Quién dirige el Domaine Leroy y compartió también la dirección del DRC hasta 1992?", a: "Lalou Bize-Leroy", x: ["Anne-Claude Leflaive", "Henri Jayer", "Christophe Roumier"] },
    ],
  },
  fr_vogue_musigny: {
    fact: "Es el mayor propietario del Grand Cru Musigny, con casi dos tercios del viñedo. La uva de las cepas jóvenes se desclasifica y se vende como Chambolle-Musigny Premier Cru en lugar de Musigny.",
    quiz: [
      { q: "¿Qué vino poco común elabora De Vogüé casi en exclusiva en el viñedo de Musigny?", a: "Musigny Blanc (blanco)", x: ["Musigny rosado", "Musigny espumoso", "Musigny dulce de podredumbre noble"] },
    ],
  },
  fr_mugnier_musigny: {
    fact: "Frédéric Mugnier tomó las riendas del domaine familiar en 1985 y lo llevó a la cima del estilo delicado de Chambolle. En 2004 recuperó el Clos de la Maréchale, que había estado arrendado a Faiveley.",
    quiz: [
      { q: "¿Qué profesión compaginó hasta finales de los años noventa Frédéric Mugnier, al frente del domaine Jacques-Frédéric Mugnier?", a: "Piloto de avión", x: ["Médico", "Abogado", "Cocinero"] },
    ],
  },
  fr_roumier_bm: {
    fact: "Domaine de culto de Chambolle-Musigny dirigido por Christophe Roumier. Bonnes-Mares es un Grand Cru que se extiende por los pueblos de Chambolle-Musigny y Morey-Saint-Denis.",
    quiz: [
      { q: "¿Quién dirige el Domaine Georges Roumier y lo elevó a la categoría de culto?", a: "Christophe Roumier", x: ["Éric Rousseau", "Frédéric Mugnier", "Jean-Nicolas Méo"] },
      { q: "Además de Chambolle-Musigny, ¿por qué otro pueblo se extiende el Grand Cru Bonnes-Mares, del que procede el Bonnes-Mares de Georges Roumier?", a: "Morey-Saint-Denis", x: ["Gevrey-Chambertin", "Vosne-Romanée", "Vougeot"] },
    ],
  },
  fr_dujac_cdlr: {
    fact: "Domaine fundado en 1968 en Morey-Saint-Denis por el parisino Jacques Seysses. Es famoso por fermentar los racimos enteros, con su raspón.",
    quiz: [
      { q: "¿Quién fundó el Domaine Dujac en 1968?", a: "Jacques Seysses", x: ["Henri Jayer", "Armand Rousseau", "Christophe Roumier"] },
    ],
  },
  fr_ponsot_cdlr: {
    fact: "En 2008, cuando salió a subasta en Nueva York un Clos Saint-Denis 1945 de Ponsot, Laurent Ponsot en persona lo impidió: Ponsot no elaboró vino de ese viñedo hasta 1982.",
    quiz: [
      { q: "¿Qué célebre falsificador de vinos quedó al descubierto cuando Laurent Ponsot, del Domaine Ponsot, frenó unos falsos Ponsot en una subasta de 2008?", a: "Rudy Kurniawan", x: ["Hardy Rodenstock", "Bernard Madoff", "Frank Abagnale"] },
    ],
  },
  fr_closdetart: {
    fact: "Monopole Grand Cru que solo ha tenido cuatro propietarios desde 1141: el convento de Tart, la familia Marey-Monge, la familia Mommessin y, hoy, Artémis, de la familia Pinault.",
    quiz: [
      { q: "¿Quiénes fueron propietarias del Clos de Tart desde 1141 hasta la Revolución francesa?", a: "Las monjas cistercienses de la abadía de Tart", x: ["Los monjes de la abadía de Cluny", "La casa ducal de Borgoña", "La Orden del Temple"] },
      { q: "¿Quién compró el Clos de Tart después de la familia Mommessin?", a: "Artémis, de François Pinault", x: ["LVMH, de Bernard Arnault", "El magnate estadounidense Stan Kroenke", "Los hermanos Bouygues"] },
    ],
  },
  fr_lambrays: {
    fact: "Grand Cru de Morey-Saint-Denis que pertenece casi por completo a un solo domaine. Fue ascendido tardíamente a Grand Cru en 1981 y LVMH lo compró en 2014.",
    quiz: [
      { q: "¿En qué año fue ascendido a Grand Cru el Clos des Lambrays?", a: "1981", x: ["1936", "1961", "2001"] },
      { q: "¿Qué grupo adquirió el Clos des Lambrays en 2014?", a: "LVMH", x: ["Artémis (familia Pinault)", "Groupe Castel", "Pernod Ricard"] },
    ],
  },
  fr_rousseau_chambertin: {
    fact: "El Chambertin es el «vino de reyes» que, según se cuenta, Napoleón se llevaba incluso a sus campañas militares. Armand Rousseau está considerado el mejor domaine de Gevrey-Chambertin.",
    quiz: [
      { q: "Según la tradición, ¿qué personaje histórico era el mayor aficionado al Chambertin, el viñedo del Chambertin de Armand Rousseau?", a: "Napoleón", x: ["Luis XIV", "Carlomagno", "Juana de Arco"] },
      { q: "¿Cuál es el origen tradicional del nombre «Chambertin»?", a: "El campo de un campesino llamado Bertin (Champ de Bertin)", x: ["La iglesia de la abadía de Bertin", "El campamento del general romano Bertinus", "Una antigua expresión para «colina verde»"] },
    ],
  },
  fr_rousseau_beze: {
    fact: "Uno de los viñedos más antiguos de Borgoña, plantado en el siglo VII por los monjes de la abadía de Bèze. Su vino también puede venderse con el nombre de «Chambertin».",
    quiz: [
      { q: "¿Quiénes plantaron por primera vez el viñedo de Chambertin-Clos de Bèze?", a: "Los monjes de la abadía de Bèze, en el siglo VII", x: ["Los monjes cistercienses, en el siglo XII", "El príncipe de Conti, en el siglo XVIII", "El ejército de Napoleón, en el siglo XIX"] },
      { q: "¿Qué privilegio otorga la normativa al Chambertin-Clos de Bèze?", a: "Puede venderse también como «Chambertin»", x: ["Puede llevar el nombre «Romanée-Conti»", "Puede venderse sin añada", "Su vino blanco también puede venderse como Grand Cru"] },
    ],
  },
  fr_bichot_moutonne: {
    fact: "Monopole del Domaine Long-Depaquit, la finca de Chablis propiedad de Albert Bichot. Se extiende por dos viñedos Grand Cru de Chablis: Vaudésir y Preuses.",
    quiz: [
      { q: "¿En qué año se fundó Albert Bichot, la casa que elabora La Moutonne?", a: "1831", x: ["1731", "1797", "1880"] },
    ],
  },
  fr_leflaive_puligny: {
    fact: "Casa de referencia del vino blanco de Puligny-Montrachet. En los años noventa, Anne-Claude Leflaive pasó todo el viñedo a la biodinámica y abrió camino a la viticultura ecológica en Borgoña.",
    quiz: [
      { q: "¿Quién llevó el Domaine Leflaive a la biodinámica en los años noventa?", a: "Anne-Claude Leflaive", x: ["Lalou Bize-Leroy", "Dominique Lafon", "Jean-François Coche-Dury"] },
    ],
  },
  fr_leflaive_batard: {
    fact: "Grand Cru situado en la ladera justo debajo de Montrachet. Como en sus vecinos Chevalier (caballero) y Pucelle (doncella), su nombre está ligado a una historia sobre la familia de un antiguo señor feudal.",
    quiz: [
      { q: "¿Qué significa «Bâtard» en Bâtard-Montrachet?", a: "Bastardo (hijo ilegítimo)", x: ["Caballero", "Doncella", "Monje"] },
    ],
  },
  fr_cochedury_cc: {
    fact: "Grand Cru blanco de la colina de Corton. El de Coche-Dury tiene una producción tan pequeña que se considera una de las botellas más difíciles de conseguir entre los blancos de Borgoña.",
    quiz: [
      { q: "Según la leyenda, ¿por qué mandó Carlomagno plantar uvas blancas en la colina de Corton?", a: "Porque el vino tinto le teñía de rojo la barba blanca", x: ["Porque el papa había prohibido el vino tinto", "Porque la uva blanca se vendía más cara", "Porque la guerra había acabado con todas las uvas tintas"] },
    ],
  },
  fr_cochedury_meursault: {
    fact: "Productor legendario cuyo simple Meursault de pueblo se vende al precio de los grands crus de otros domaines. Jean-François Coche-Dury forjó su fama y hoy le sucede su hijo Raphaël.",
    quiz: [
      { q: "¿Qué enólogo forjó la fama del Meursault de Coche-Dury?", a: "Jean-François Coche-Dury", x: ["Henri Jayer", "Dominique Lafon", "Aubert de Villaine"] },
    ],
  },
  fr_bonneau_cc: {
    fact: "Domaine poco común que solo elabora dos grands crus: Corton-Charlemagne y Corton. En 2017 lo compró el magnate estadounidense Stan Kroenke.",
    quiz: [
      { q: "¿Qué bodega de culto de Napa Valley posee el magnate estadounidense que compró Bonneau du Martray en 2017?", a: "Screaming Eagle", x: ["Harlan Estate", "Opus One", "Sine Qua Non"] },
    ],
  },
  fr_latour_cc: {
    fact: "Empresa familiar en activo desde 1797 y uno de los mayores propietarios de la colina de Corton. Todavía fabrica sus barricas de roble en su propia tonelería.",
    quiz: [
      { q: "¿Qué château tiene Louis Latour como sede en Aloxe-Corton, en la colina de Corton?", a: "Château Corton Grancey", x: ["Château de Meursault", "Château de Puligny-Montrachet", "Château de Pommard"] },
      { q: "¿En qué año comienza la historia de Louis Latour, que elabora este Corton-Charlemagne?", a: "1797", x: ["1731", "1859", "1920"] },
    ],
  },
  fr_faiveley_cortons: {
    fact: "Monopole Grand Cru de Corton cuyo nombre de viñedo incluye el apellido de la familia productora. Faiveley es una empresa familiar de Nuits-Saint-Georges que ha pasado de generación en generación.",
    quiz: [
      { q: "¿En qué año abrió sus puertas en Nuits-Saint-Georges la casa Faiveley, que elabora este vino?", a: "1825", x: ["1731", "1797", "1920"] },
      { q: "¿Qué monopole, arrendado durante más de 50 años, devolvió Faiveley en 2004 a sus dueños, la familia Mugnier?", a: "Clos de la Maréchale", x: ["Clos de Tart", "Clos des Lambrays", "Clos des Ducs"] },
    ],
  },
  fr_drouhin_mouches: {
    fact: "Premier Cru de Beaune que Maurice Drouhin fue comprando parcela a parcela a varios propietarios en los años veinte. Drouhin es el mayor propietario de este viñedo.",
    quiz: [
      { q: "¿A qué insecto se refiere «mouches» en el nombre del viñedo Clos des Mouches?", a: "La abeja", x: ["La mariposa", "La libélula", "La mariquita"] },
      { q: "¿Dónde está la bodega que Joseph Drouhin, productor del Clos des Mouches, fundó en Estados Unidos en 1987?", a: "Oregón", x: ["Napa Valley", "Sonoma", "Estado de Washington"] },
    ],
  },
  fr_bouchard_enfant: {
    fact: "Monopole de Beaune Grèves que cultivaban las monjas carmelitas. Su nombre viene de la historia de una monja que profetizó el nacimiento de Luis XIV; tras la Revolución, en 1791, lo compró Bouchard.",
    quiz: [
      { q: "¿Qué significa el nombre «Vigne de l'Enfant Jésus»?", a: "Viña del Niño Jesús", x: ["Viña de la Virgen", "Viña del Rey", "Viña del Abad"] },
      { q: "Según la historia ligada al nombre de Vigne de l'Enfant Jésus, ¿el nacimiento de qué rey profetizó una monja carmelita?", a: "Luis XIV", x: ["Luis XVI", "Enrique IV", "Napoleón I"] },
    ],
  },
  fr_hospices_rolin: {
    fact: "Vino procedente de viñedos donados a los Hospices de Beaune, hospital benéfico fundado en 1443. Cada año se vende en la subasta benéfica de vino más famosa del mundo.",
    quiz: [
      { q: "¿Cuándo se celebra la subasta benéfica en la que se vende la Cuvée Nicolas Rolin de los Hospices de Beaune?", a: "Cada año, el tercer domingo de noviembre", x: ["Cada año, el primer domingo de septiembre", "Una vez cada cinco años, en primavera", "Cada año, el 1 de enero"] },
      { q: "¿Quién fue la esposa de Nicolas Rolin, que da nombre a esta cuvée, y fundó con él los Hospices de Beaune?", a: "Guigone de Salins", x: ["Madame Clicquot", "Ana de Austria", "Margarita de Borgoña"] },
    ],
  },
  fr_dangerville_ducs: {
    fact: "Monopole Premier Cru de Volnay que perteneció a los antiguos duques de Borgoña. En los años veinte y treinta, el marqués d'Angerville, junto con Henri Gouges y otros, fue pionero del embotellado en el propio domaine.",
    quiz: [
      { q: "¿A quiénes alude «Ducs» en Clos des Ducs?", a: "A los antiguos duques de Borgoña", x: ["A los obispos de la curia papal", "A los comandantes de las legiones romanas", "A los monjes de un monasterio"] },
      { q: "¿Qué práctica impulsó la familia del Marquis d'Angerville junto con sus colegas en los años veinte y treinta?", a: "Embotellar en el domaine en vez de vender a los négociants", x: ["Introducir el espumoso al estilo de Champaña", "Plantar Cabernet Sauvignon en Borgoña", "Adoptar el tapón de rosca"] },
    ],
  },
  fr_lafon_perrieres: {
    fact: "Casa de referencia de Meursault que también posee una pequeña parcela del Grand Cru Montrachet. Perrières, cuyo nombre viene de unas antiguas canteras de piedra, se considera el mejor Premier Cru de Meursault.",
    quiz: [
      { q: "¿Qué miembro de la familia Comtes Lafon creó en 1923 la Paulée de Meursault, el banquete que se celebra cada noviembre el último día de las «Trois Glorieuses»?", a: "El conde Jules Lafon", x: ["Louis Latour", "Joseph Drouhin", "Henri Jayer"] },
    ],
  },
  fr_fevre_lesclos: {
    fact: "Les Clos es el más extenso de los grands crus de Chablis. William Fèvre está considerado el domaine con más viñedos Grand Cru de Chablis.",
    quiz: [
      { q: "¿Cuántos viñedos Grand Cru hay en Chablis, incluido Les Clos de William Fèvre?", a: "7", x: ["3", "12", "33"] },
      { q: "¿Qué casa de champán adquirió William Fèvre en 1998?", a: "Henriot", x: ["Bollinger", "Taittinger", "Laurent-Perrier"] },
    ],
  },
  fr_raveneau: {
    fact: "Leyenda de Chablis fundada en 1948 por François Raveneau. Elabora Chablis criados en viejas barricas de roble, capaces de aguantar décadas.",
    quiz: [
      { q: "¿Con qué otra gran familia de Chablis emparentó por matrimonio François Raveneau, fundador de Raveneau?", a: "La familia Dauvissat", x: ["La familia Fèvre", "La familia Laroche", "La familia Bichot"] },
    ],
  },
  fr_dauvissat: {
    fact: "Junto con su pariente Raveneau, está considerado la cumbre de Chablis. En una zona donde abundan los depósitos de acero inoxidable, se mantiene fiel a la crianza en barrica de roble.",
    quiz: [
      { q: "¿Qué método de elaboración tomaron de la Côte d'Or grandes casas de Chablis como Vincent Dauvissat?", a: "Fermentación en barrica y larga crianza sobre lías", x: ["Maceración carbónica", "Pasificación de la uva (appassimento)", "Crianza en solera"] },
    ],
  },
  fr_laroche: {
    fact: "La bodega de crianza de Laroche es la «Obédiencerie», un edificio monástico del siglo IX. Allí se custodiaron las reliquias de San Martín, traídas desde Tours en 877 para ponerlas a salvo de los normandos.",
    quiz: [
      { q: "¿A qué santo honra el nombre del Chablis Saint Martin del Domaine Laroche?", a: "San Martín, obispo de Tours", x: ["San Bernardo, guía del Císter", "San Dionisio, primer obispo de París", "Santa Juana de Arco"] },
    ],
  },
  fr_fuisse: {
    fact: "Casa de referencia del Chardonnay del Mâconnais. Desde la añada 2020, Pouilly-Fuissé es la primera denominación del Mâconnais con viñedos Premier Cru.",
    quiz: [
      { q: "¿Qué categoría existe desde la añada 2020 en Pouilly-Fuissé, donde se encuentra Château-Fuissé?", a: "Premier Cru", x: ["Grand Cru", "Cru Bourgeois", "Cru Classé"] },
    ],
  },
  fr_lapierre_morgon: {
    fact: "Pionero del vino natural, elaborado casi sin sulfitos. Con Foillard, Thévenet y Breton formó la llamada «banda de los cuatro» del Beaujolais.",
    quiz: [
      { q: "¿Qué químico y négociant inspiró la vinificación sin aditivos a la «banda de los cuatro» del Beaujolais, entre ellos Marcel Lapierre?", a: "Jules Chauvet", x: ["Émile Peynaud", "Louis Pasteur", "Henri Jayer"] },
    ],
  },
  fr_jacques_mav: {
    fact: "Cuando Louis Jadot lo compró en 1996, fue la primera vez que una gran casa de Borgoña apostaba por un cru de Beaujolais. Elabora un Gamay vinificado al estilo borgoñón y pensado para la guarda.",
    quiz: [
      { q: "¿De dónde viene el nombre de Moulin-à-Vent, donde se encuentra Château des Jacques?", a: "De un viejo molino de viento en la colina del pueblo", x: ["De un molino de agua de época romana", "De un río azotado por fuertes vientos", "De un antiguo monasterio"] },
    ],
  },
  fr_jadot_bjv: {
    fact: "Categoría superior procedente de determinados pueblos del norte del Beaujolais. La etiqueta lleva el emblema con el rostro de Baco, símbolo de Louis Jadot.",
    quiz: [
      { q: "¿De quién es el rostro del emblema que aparece en la etiqueta del Beaujolais-Villages de Louis Jadot?", a: "Baco, dios del vino", x: ["Neptuno, dios del mar", "Apolo, dios del sol", "San Vicente, patrón de los viticultores"] },
      { q: "¿Cuántos «crus», la categoría más alta del Beaujolais, pueden llevar el nombre de su pueblo?", a: "10", x: ["3", "7", "22"] },
    ],
  },
  fr_duboeuf_fleurie: {
    fact: "Cru del Beaujolais aromático y suave, tal como sugiere su nombre, que evoca las flores. Es famoso por las etiquetas con dibujos de flores de Duboeuf.",
    quiz: [
      { q: "¿Qué apodo reciben a menudo los vinos de Fleurie, como el Fleurie de Georges Duboeuf, por su carácter aromático y elegante?", a: "La reina del Beaujolais", x: ["El rey del Beaujolais", "El caballero del Beaujolais", "El monje del Beaujolais"] },
    ],
  },
  fr_guigal_mouline: {
    fact: "Primer vino de viñedo único de Guigal, procedente de una ladera en forma de anfiteatro de la Côte Blonde. La Syrah se cofermenta con un poco de Viognier.",
    quiz: [
      { q: "¿Qué apodo reciben en conjunto los tres vinos La Mouline, La Landonne y La Turque de Guigal?", a: "Los «La La»", x: ["La Triple Corona", "Les Trois", "El trío de Côte-Rôtie"] },
      { q: "¿Cuál fue la primera añada de La Mouline de Guigal?", a: "1966", x: ["1946", "1978", "1985"] },
    ],
  },
  fr_guigal_landonne: {
    fact: "El más oscuro y potente de los «La La», elaborado 100 % con Syrah en las empinadas laderas de la Côte Brune. Es un viñedo replantado tras comprarlo parcela a parcela a varios propietarios.",
    quiz: [
      { q: "¿Cuál fue la primera añada de La Landonne de Guigal?", a: "1978", x: ["1966", "1985", "1995"] },
    ],
  },
  fr_guigal_turque: {
    fact: "El benjamín de los «La La»: un viñedo abandonado durante mucho tiempo que Guigal replantó y recuperó a principios de los años ochenta. Aunque está en la Côte Brune, lleva un poco de Viognier.",
    quiz: [
      { q: "¿Cuál fue la primera añada de La Turque de Guigal?", a: "1985", x: ["1966", "1978", "1999"] },
    ],
  },
  fr_guigal_cdr: {
    fact: "El vino de diario emblemático de Guigal, casa fundada en 1946 por Étienne Guigal en Ampuis. Como corresponde a una gran casa del norte del Ródano, lleva una alta proporción de Syrah.",
    quiz: [
      { q: "¿Qué antiguo castillo de Côte-Rôtie compró en 1995 Guigal, productor de este Côtes du Rhône, para convertirlo en su sede?", a: "Château d'Ampuis", x: ["Château-Grillet", "Château Rayas", "Château La Nerthe"] },
      { q: "¿En qué año fundó Étienne Guigal la casa Guigal?", a: "1946", x: ["1808", "1834", "1990"] },
    ],
  },
  fr_chapoutier_belleruche: {
    fact: "El Côtes du Rhône de diario de Chapoutier, gran casa de Hermitage en activo desde 1808. En un lado de la etiqueta lleva puntos en relieve de braille.",
    quiz: [
      { q: "¿Qué incluye Chapoutier desde los años noventa en todas sus etiquetas, incluida la de Belleruche?", a: "Braille para personas ciegas", x: ["Un código QR", "La firma del fundador", "Un mapa del viñedo"] },
    ],
  },
  fr_chapoutier_sizeranne: {
    fact: "Vino de un viñedo comprado a la familia de Maurice Monier de la Sizeranne, un hombre ciego que ideó un braille abreviado. En 1994 este vino fue el primero en llevar etiqueta en braille.",
    quiz: [
      { q: "¿Quién fue Maurice Monier de la Sizeranne, que da nombre a este vino e inspiró las etiquetas en braille de Chapoutier?", a: "Un hombre ciego que impulsó la difusión del braille", x: ["El fundador de Chapoutier", "Un obispo de la corte papal de Aviñón", "Un general de Napoleón"] },
    ],
  },
  fr_jaboulet_chapelle: {
    fact: "Leyenda del Ródano que toma su nombre de la capilla que corona la colina de Hermitage. Su añada 1961 se considera uno de los mejores vinos del siglo XX.",
    quiz: [
      { q: "¿De qué elemento de la colina de Hermitage procede el nombre de La Chapelle?", a: "De una pequeña capilla en la cima de la colina", x: ["De la catedral de un antiguo monasterio", "De un pabellón de caza real", "De un templo de época romana"] },
      { q: "¿Qué familia, propietaria de Château La Lagune en Burdeos, compró en 2006 Paul Jaboulet Aîné, productor de La Chapelle?", a: "La familia Frey", x: ["La familia Perrin", "La familia Guigal", "La familia Rothschild"] },
    ],
  },
  fr_jaboulet_p45: {
    fact: "El vino de diario emblemático de Paul Jaboulet Aîné, gran casa del Ródano fundada en 1834. Es un Côtes du Rhône fácil de beber, elaborado con uvas del sur del Ródano.",
    quiz: [
      { q: "¿Qué significa el nombre Parallèle 45?", a: "El paralelo 45 norte, que pasa cerca de la bodega", x: ["El 45.º aniversario de la fundación", "45 variedades de uva", "45 meses de crianza"] },
    ],
  },
  fr_chave_hermitage: {
    fact: "El mejor domaine del Ródano, que ensambla vinos de varias parcelas de la colina de Hermitage en una sola botella. La familia Chave compra viñedos en Hermitage desde 1865.",
    quiz: [
      { q: "¿En qué año comenzó la viticultura transmitida «de padre a hijo» que figura en la etiqueta de Jean-Louis Chave?", a: "1481", x: ["1731", "1808", "1946"] },
    ],
  },
  fr_jamet: {
    fact: "Domaine tradicionalista que ensambla Syrah de varias parcelas de Côte-Rôtie. Suele fermentar con racimo entero y se considera el prototipo de la Syrah especiada del norte del Ródano.",
    quiz: [
      { q: "¿A qué alude el nombre «Côte-Rôtie» (ladera asada), la denominación del Domaine Jamet?", a: "A laderas empinadas orientadas al sur que el sol abrasa", x: ["A suelos de ceniza volcánica", "A la crianza en barricas tostadas al fuego", "A un viejo viñedo arrasado por un incendio"] },
    ],
  },
  fr_clape_cornas: {
    fact: "Domaine que dio a conocer Cornas cuando aún era una denominación desconocida, elaborando Syrah de forma tradicional. Hoy lo continúan su hijo y su nieto.",
    quiz: [
      { q: "¿Qué significado se atribuye al topónimo «Cornas», donde se encuentra Auguste Clape?", a: "Tierra quemada (en celta)", x: ["Colina pedregosa", "Tierra del papa", "Río negro"] },
    ],
  },
  fr_grillet: {
    fact: "Santuario del Viognier donde una sola finca ocupa toda la AOC. Su seña de identidad es una botella marrón, alta y estrecha, que no utiliza ninguna otra bodega francesa.",
    quiz: [
      { q: "¿Qué tiene de especial la AOC Château-Grillet?", a: "Una sola finca ocupa toda la AOC", x: ["Es la única AOC de espumoso del Ródano", "Obliga a mezclar vino tinto y blanco", "Paga cada año un tributo a la Santa Sede"] },
      { q: "¿Qué propietario de Château Latour, en Burdeos, compró Château-Grillet en 2011?", a: "François Pinault", x: ["Bernard Arnault", "Martin Bouygues", "Stan Kroenke"] },
    ],
  },
  fr_vernay_condrieu: {
    fact: "Domaine de Georges Vernay, que salvó el Viognier cuando estaba a punto de desaparecer en los años sesenta. Lo apodaban «el papa de Condrieu».",
    quiz: [
      { q: "¿Qué les ocurría a los viñedos de Condrieu en los años sesenta, cuando Georges Vernay salvó el Viognier?", a: "Se habían reducido a unas pocas hectáreas y casi desaparecen", x: ["Se detectó allí por primera vez la filoxera", "Fueron ascendidos a Grand Cru", "Pasaron a ser una zona de vino tinto"] },
    ],
  },
  fr_rayas: {
    fact: "Vino de culto de Châteauneuf-du-Pape elaborado 100 % con Grenache en suelos arenosos rodeados de bosque. También es famoso por su vieja bodega y su sencilla etiqueta.",
    quiz: [
      { q: "¿Qué familia ha dirigido Château Rayas durante generaciones?", a: "La familia Reynaud", x: ["La familia Perrin", "La familia Brunier", "La familia Avril"] },
    ],
  },
  fr_closdespapes: {
    fact: "Gran casa de Châteauneuf-du-Pape transmitida de generación en generación por la familia Avril. Su añada 2007 ocupó el primer puesto del «Vino del Año» de Wine Spectator.",
    quiz: [
      { q: "¿Qué familia ha llevado Clos des Papes durante generaciones?", a: "La familia Avril", x: ["La familia Reynaud", "La familia Brunier", "La familia Féraud"] },
    ],
  },
  fr_vieuxtelegraphe: {
    fact: "Châteauneuf-du-Pape procedente de la meseta de La Crau, cubierta de cantos rodados (galets). La familia Brunier lo cultiva desde finales del siglo XIX.",
    quiz: [
      { q: "¿De dónde viene el nombre Vieux Télégraphe?", a: "De una torre de telégrafo óptico construida por Chappe a finales del siglo XVIII", x: ["De una oficina de telégrafos del siglo XIX", "Del campanario de la corte papal", "De una caseta de señales ferroviarias"] },
      { q: "¿Cómo se llama la meseta cubierta de cantos rodados donde se encuentra Vieux Télégraphe?", a: "La Crau", x: ["La Nerthe", "Côte Blonde", "Les Bessards"] },
    ],
  },
  fr_pegau: {
    fact: "Châteauneuf-du-Pape tradicionalista dirigido por Paul Féraud y su hija Laurence. Fermenta la uva con raspón y la cría largamente en grandes toneles de roble (foudres).",
    quiz: [
      { q: "¿Qué significa «Pégau», el nombre del Domaine du Pégau?", a: "Una jarra medieval de barro para el vino", x: ["El sombrero del papa", "Un viñedo pedregoso", "Un nido de palomas"] },
    ],
  },
  fr_lanerthe: {
    fact: "Una de las fincas más antiguas de Châteauneuf-du-Pape, cuyo nombre ya aparece en documentos del siglo XVI. Mezcla Grenache con Syrah y Mourvèdre para elaborar vinos equilibrados.",
    quiz: [
      { q: "¿Qué significa «Châteauneuf-du-Pape», donde se encuentra Château La Nerthe?", a: "El castillo nuevo del papa", x: ["El viejo viñedo del papa", "El vino del nuevo papa", "El jardín de verano del papa"] },
    ],
  },
  fr_bonneau_celestins: {
    fact: "Leyenda de Châteauneuf-du-Pape que se cría largamente en una estrecha bodega subterránea del pueblo y solo sale al mercado en los buenos años. Tras la muerte de Henri Bonneau en 2016, lo continúa su hijo Marcel.",
    quiz: [
      { q: "¿Qué otra cuvée elabora Henri Bonneau además de la Réserve des Célestins?", a: "Cuvée Marie Beurrier", x: ["Cuvée Da Capo", "Hommage à Jacques Perrin", "La Crau"] },
    ],
  },
  fr_perrin_cdr: {
    fact: "Côtes du Rhône de diario de la familia Perrin, al frente de Château de Beaucastel. Mezcla Grenache con Syrah y Mourvèdre.",
    quiz: [
      { q: "¿Qué rosado de Provenza creó la familia Perrin, productora de este Côtes du Rhône, en alianza con estrellas de Hollywood?", a: "Miraval", x: ["Whispering Angel", "Minuty", "Domaines Ott"] },
    ],
  },
  fr_aqueria_tavel: {
    fact: "Finca emblemática de Tavel, una AOC que solo admite rosado. Más oscuro y con más cuerpo que los rosados de Provenza, marida muy bien con la comida.",
    quiz: [
      { q: "Sobre los rosados de Tavel como el de Château d'Aqueria se dice: «el rosado de los reyes, el ___ de los rosados». ¿Qué palabra falta?", a: "Rey", x: ["Reina", "Papa", "Emperador"] },
    ],
  },
  fr_dp_rose: {
    fact: "El rosado de Dom Pérignon, elaborado solo en años de buena cosecha. Casi toda su primera añada, la 1959, se vendió al sah de Irán.",
    quiz: [
      { q: "¿En qué banquete histórico de 1971 se brindó con Dom Pérignon Rosé 1959?", a: "En las celebraciones del 2500 aniversario del Imperio persa", x: ["En la cena inaugural de la Exposición Universal de París", "En la cena de investidura del presidente Kennedy", "En la boda de Rainiero III de Mónaco"] },
    ],
  },
  fr_moet_rose: {
    fact: "La versión rosada de Moët Impérial. Se le añade vino tinto de Pinot Noir para lograr un color rosa con aromas de fresa y cereza.",
    quiz: [
      { q: "¿En qué año se fundó Moët & Chandon, productora del Moët & Chandon Rosé Impérial?", a: "1743", x: ["1729", "1772", "1811"] },
    ],
  },
  fr_moet_ice: {
    fact: "Lanzado en 2011, es el primer champán del mundo pensado para beberse con hielo. Se elabora dulce e intenso para que el sabor no se diluya cuando el hielo se derrite.",
    quiz: [
      { q: "¿Cómo se recomienda disfrutar el Moët & Chandon Ice Impérial?", a: "En una copa grande con hielo", x: ["Calentado", "Mezclado a partes iguales con ginger ale", "Directamente de la botella con pajita"] },
    ],
  },
  fr_veuve_lgd: {
    fact: "La cuvée de prestigio de Veuve Clicquot. Se presentó en 1972, año del bicentenario de la casa, con la añada 1962.",
    quiz: [
      { q: "¿A quién rinde homenaje el nombre La Grande Dame («la gran dama») de Veuve Clicquot?", a: "Madame Clicquot", x: ["María Antonieta", "La emperatriz Josefina", "Lily Bollinger"] },
    ],
  },
  fr_veuve_rose: {
    fact: "Rosado elaborado añadiendo vino tinto al ensamblaje de la Yellow Label (etiqueta amarilla). Veuve Clicquot es conocida como la primera casa que elaboró champán rosado por este método de mezcla.",
    quiz: [
      { q: "¿En qué año elaboró Madame Clicquot por primera vez un champán rosado mezclando vino tinto, como el Veuve Clicquot Rosé?", a: "1818", x: ["1729", "1874", "1921"] },
    ],
  },
  fr_roederer_collection: {
    fact: "Es el NV de Louis Roederer que en 2021 sustituyó al veterano Brut Premier. Se elabora con una «reserva perpetua» que mezcla vinos de reserva acumulados año tras año.",
    quiz: [
      { q: "¿Qué indican números como «242» o «243» en Louis Roederer Collection?", a: "El número de mezcla desde la fundación en 1776", x: ["Los meses de crianza", "La cantidad de vinos mezclados", "Las botellas producidas (en miles)"] },
    ],
  },
  fr_krug_gc: {
    fact: "El champán emblemático de Krug, que mezcla más de 120 vinos de una decena de añadas. Cada botella lleva el número de su «edición».",
    quiz: [
      { q: "¿Quién fundó en 1843 la casa Krug, que elabora Krug Grande Cuvée?", a: "Joseph Krug", x: ["Nicolas Ruinart", "Florens-Louis Heidsieck", "Claude Moët"] },
    ],
  },
  fr_krug_mesnil: {
    fact: "Se elabora solo con Chardonnay de una parcela de 1,84 ha rodeada por un muro de piedra en pleno pueblo de Le Mesnil-sur-Oger. Krug la compró en 1971 y lanzó su primera añada, la 1979.",
    quiz: [
      { q: "¿En qué año se levantó por primera vez el muro de piedra que rodea el viñedo de Krug Clos du Mesnil?", a: "1698", x: ["1843", "1971", "1979"] },
    ],
  },
  fr_krug_rose: {
    fact: "Rosado que añade vino tinto de Pinot Noir al método de Krug de mezclar varias añadas. Como la Grande Cuvée, lleva número de edición.",
    quiz: [
      { q: "¿Qué grupo es dueño desde 1999 de Krug, que elabora Krug Rosé?", a: "LVMH", x: ["Kering", "Pernod Ricard", "Grupo Laurent-Perrier"] },
    ],
  },
  fr_bollinger_sc: {
    fact: "El champán emblemático de Bollinger, casa fundada en 1829 en Aÿ. Con mucho Pinot Noir y una parte fermentada en barricas de roble, resulta potente.",
    quiz: [
      { q: "¿Qué personaje de cine es famoso por su larga relación con Bollinger Special Cuvée?", a: "James Bond", x: ["Sherlock Holmes", "Indiana Jones", "Jay Gatsby"] },
      { q: "¿Qué directora de Bollinger dejó la frase «bebo champán cuando estoy feliz y cuando estoy triste»?", a: "Lily Bollinger", x: ["Madame Clicquot", "Louise Pommery", "Coco Chanel"] },
    ],
  },
  fr_bollinger_ga: {
    fact: "El champán de añada de Bollinger, que solo se elabora en los buenos años. Todo el vino fermenta en pequeñas barricas de roble.",
    quiz: [
      { q: "¿Qué cierre usa La Grande Année de Bollinger durante su larga crianza en botella?", a: "Corcho natural", x: ["Chapa corona", "Tapón de rosca", "Tapón de vidrio"] },
    ],
  },
  fr_bollinger_rd: {
    fact: "La obra maestra de Bollinger: envejece largo tiempo sobre sus lías y se degüella justo antes de salir al mercado. La primera añada fue la 1952.",
    quiz: [
      { q: "¿Qué significa «R.D.» en Bollinger R.D.?", a: "Récemment dégorgé (degollado recientemente)", x: ["Royal Delivery (proveedor real)", "Red Dry (tinto seco)", "Réserve du Domaine"] },
      { q: "¿Qué hizo Bollinger R.D. por primera vez en la historia de las etiquetas de champán?", a: "Indicar la fecha de degüelle en la etiqueta", x: ["Grabar la etiqueta en braille", "Imprimir directamente en la botella, sin etiqueta", "Incluir un código QR en la etiqueta"] },
    ],
  },
  fr_salon: {
    fact: "Nació del champán que Eugène-Aimé Salon elaboraba para su propio consumo a principios del siglo XX. Solo se hace en años excepcionales, por lo que sale apenas unas decenas de veces por siglo.",
    quiz: [
      { q: "¿Cuál es la regla de producción especial de Salon?", a: "Solo Chardonnay de un único pueblo, Le Mesnil-sur-Oger, y solo en años excepcionales", x: ["Se elabora cada año y solo como rosado", "Solo se vende como NV, mezclando vinos de varios años", "Solo usa Pinot Noir"] },
      { q: "¿Qué casa hermana, pared con pared con Salon, pertenece también al grupo Laurent-Perrier?", a: "Delamotte", x: ["Krug", "Bollinger", "Henriot"] },
    ],
  },
  fr_taittinger_br: {
    fact: "El NV emblemático de Taittinger, ligero y elegante por su proporción relativamente alta de Chardonnay. Envejece en bodegas de creta bajo la antigua abadía de Saint-Nicaise, en Reims.",
    quiz: [
      { q: "¿Qué antigua casa de champán, antecesora de Taittinger, compró Pierre Taittinger en 1932 para darle su nombre?", a: "Forest-Fourneaux", x: ["Heidsieck & Co Monopole", "Ruinart", "Delamotte"] },
    ],
  },
  fr_taittinger_comtes: {
    fact: "La cuvée de prestigio de Taittinger, elaborada solo en buenos años y únicamente con Chardonnay Grand Cru de la Côte des Blancs. La primera añada fue la 1952.",
    quiz: [
      { q: "¿A quién rinde homenaje el nombre de Taittinger Comtes de Champagne?", a: "Teobaldo IV, conde de Champaña, que regresó de las cruzadas", x: ["Carlomagno", "Napoleón I", "San Remigio, arzobispo de Reims"] },
    ],
  },
  fr_polroger_br: {
    fact: "Casa familiar fundada en 1849 en Épernay. Con el sello de proveedor de la Casa Real británica, se sirvió también en la boda del príncipe Guillermo en 2011.",
    quiz: [
      { q: "¿Qué apodo recibe Pol Roger Brut Réserve en el Reino Unido por el color de la cápsula del cuello?", a: "White Foil", x: ["Gold Foil", "Black Label", "Yellow Label"] },
    ],
  },
  fr_polroger_swc: {
    fact: "Cuvée de prestigio creada a partir de la añada 1975 en homenaje a Churchill, fiel a Pol Roger toda su vida. Sigue el estilo potente, basado en el Pinot Noir, que tanto le gustaba.",
    quiz: [
      { q: "¿Qué hizo Pol Roger con la etiqueta de exportación al Reino Unido cuando murió en 1965 Churchill, quien da nombre a la Cuvée Sir Winston Churchill?", a: "Le puso un ribete negro", x: ["Añadió un retrato de Churchill", "Detuvo la producción de ese año", "Pintó las botellas de rojo"] },
      { q: "¿Qué nombre dio Churchill a su caballo de carreras en honor a Odette Pol-Roger?", a: "Pol Roger", x: ["Champagne", "Victory", "Blenheim"] },
    ],
  },
  fr_lp_lacuvee: {
    fact: "El NV emblemático de la casa fundada en 1812 en Tours-sur-Marne. Su alta proporción de Chardonnay le da un perfil limpio y fresco.",
    quiz: [
      { q: "¿Quién dirigió Laurent-Perrier desde 1949 y la convirtió en una casa de fama mundial?", a: "Bernard de Nonancourt", x: ["Pierre Taittinger", "Lily Bollinger", "Joseph Krug"] },
    ],
  },
  fr_lp_rose: {
    fact: "Apareció en 1968 en una botella con escudo heráldico inspirada en las de la época de Enrique IV. Elaborado 100 % con Pinot Noir, se considera un referente del champán rosado.",
    quiz: [
      { q: "¿Cómo obtiene su color rosado Laurent-Perrier Cuvée Rosé?", a: "Por maceración de los hollejos de Pinot Noir", x: ["Mezclando vino tinto", "Añadiendo colorantes vegetales", "Con una larga crianza en barrica de roble"] },
    ],
  },
  fr_lp_gs: {
    fact: "La cuvée cumbre de Laurent-Perrier, que busca recrear el «año perfecto» mezclando vinos de tres añadas excepcionales. Cada edición lleva un número de «Itération».",
    quiz: [
      { q: "¿En qué se diferencia Grand Siècle de Laurent-Perrier de la mayoría de los champanes de prestigio?", a: "Mezcla tres añadas excepcionales", x: ["Usa uvas de un solo año", "Solo se elabora como rosado", "Envejece 10 años en barrica de roble"] },
      { q: "¿Qué rey gobernó en la época a la que alude «Grand Siècle» (el Gran Siglo)?", a: "Luis XIV", x: ["Luis XVI", "Napoleón I", "Enrique IV"] },
    ],
  },
  fr_r_ruinart: {
    fact: "El NV emblemático de Ruinart, la primera casa de champán, fundada en 1729. Se presenta en una botella redondeada inspirada en las del siglo XVIII.",
    quiz: [
      { q: "¿Cómo se llaman las galerías subterráneas de Ruinart donde envejece R de Ruinart, antiguas canteras de creta excavadas desde la época romana?", a: "Crayères", x: ["Cuverie", "Chai", "Solera"] },
    ],
  },
  fr_dom_ruinart: {
    fact: "La cuvée de prestigio de Ruinart, elaborada solo en buenos años y únicamente con Chardonnay Grand Cru. La pista es su color dorado dentro de una botella redondeada y transparente.",
    quiz: [
      { q: "¿Qué monje, que según la tradición animó a su sobrino a dedicarse al champán, da nombre a Dom Ruinart?", a: "Dom Thierry Ruinart", x: ["Dom Pierre Pérignon", "San Bernardo", "San Remigio"] },
    ],
  },
  fr_pj_grandbrut: {
    fact: "El NV emblemático de Perrier-Jouët, casa fundada en 1811 en Épernay. Su alta proporción de Pinot Noir y Pinot Meunier le aporta mucha fruta.",
    quiz: [
      { q: "¿De dónde viene el nombre de la casa Perrier-Jouët, que elabora Perrier-Jouët Grand Brut?", a: "De los apellidos del matrimonio fundador", x: ["De los nombres de dos pueblos", "De los nombres de los hermanos fundadores", "De los nombres de dos viñedos de Champaña"] },
      { q: "¿Qué flor, dibujada por el artista del art nouveau Émile Gallé, es el símbolo de Perrier-Jouët?", a: "La anémona", x: ["La rosa", "El lirio", "El tulipán"] },
    ],
  },
  fr_pj_blason: {
    fact: "Champán rosado con una etiqueta inspirada en el escudo de armas de la familia Perrier-Jouët. El vino tinto de Pinot Noir de la mezcla le da aromas de frutos rojos.",
    quiz: [
      { q: "¿Qué significa «Blason» en Perrier-Jouët Blason Rosé?", a: "Escudo de armas de la familia", x: ["Rosa", "Reina", "Primer amor"] },
    ],
  },
  fr_armand_rose: {
    fact: "Rosado en botella metalizada de color rosa con una etiqueta de peltre en forma de pica. El rapero Jay-Z compró la marca en 2014.",
    quiz: [
      { q: "¿Qué apodo recibe Armand de Brignac Rosé por la forma de la etiqueta de peltre de su botella?", a: "Ace of Spades (as de picas)", x: ["King of Hearts (rey de corazones)", "Queen of Diamonds (reina de diamantes)", "Joker (comodín)"] },
      { q: "¿Qué rapero estadounidense compró Armand de Brignac en 2014?", a: "Jay-Z", x: ["Kanye West", "Snoop Dogg", "Drake"] },
    ],
  },
  fr_piper: {
    fact: "Champán que se reconoce al instante por su etiqueta de un rojo intenso. Durante muchos años fue el champán oficial del Festival de Cannes.",
    quiz: [
      { q: "¿A qué reina, según la tradición, dedicó su primera cuvée el fundador de Piper-Heidsieck?", a: "María Antonieta", x: ["La emperatriz Josefina", "La reina Victoria", "Catalina de Médici"] },
    ],
  },
  fr_charles_heidsieck: {
    fact: "Casa fundada en 1851 por Charles-Camille Heidsieck. Es famosa por un NV de marcado carácter evolucionado, gracias a una generosa proporción de vinos de reserva.",
    quiz: [
      { q: "¿Qué le ocurrió al fundador de Charles Heidsieck, apodado «Champagne Charlie» en Estados Unidos?", a: "Fue encarcelado como espía durante la guerra de Secesión", x: ["Sobrevivió al hundimiento del Titanic", "Se alistó en el ejército de Napoleón", "Se hizo rico con la fiebre del oro"] },
    ],
  },
  fr_feuillatte: {
    fact: "Marca creada en 1976 por la unión de cooperativas de numerosos viticultores. Es uno de los champanes más vendidos en Francia.",
    quiz: [
      { q: "¿Qué caracteriza a la entidad que elabora el champán Nicolas Feuillatte?", a: "Es una unión de cooperativas con miles de viticultores", x: ["Es una familia noble desde el siglo XVII", "Es un domaine monopole con un solo viñedo", "Es una casa exclusiva de la corte imperial rusa"] },
    ],
  },
  fr_mumm: {
    fact: "Casa fundada en 1827 en Reims por la familia Mumm, de origen alemán. Es famosa por la banda roja que cruza en diagonal su etiqueta.",
    quiz: [
      { q: "¿En qué se inspira la banda roja de Mumm Cordon Rouge?", a: "En la banda roja de la Legión de Honor", x: ["En la bandera francesa", "En el capelo rojo de los cardenales", "En el escudo de la familia imperial rusa"] },
      { q: "¿En qué competición deportiva fue Mumm Cordon Rouge durante años, desde 2000, el champán del podio?", a: "La Fórmula 1", x: ["El Tour de Francia", "Wimbledon", "La Copa Mundial de la FIFA"] },
    ],
  },
  fr_lanson_black: {
    fact: "El NV emblemático de la casa fundada en 1760 en Reims. Al no hacer la fermentación maloláctica, conserva una acidez fresca que recuerda a la manzana.",
    quiz: [
      { q: "¿Qué símbolo de la casa lleva grabado el cuello de la botella de Lanson Le Black Label?", a: "La cruz de Malta", x: ["La flor de lis", "Un león", "Una corona"] },
      { q: "¿Con qué torneo de tenis colabora Lanson desde 1977 como champán oficial?", a: "Wimbledon", x: ["Roland Garros", "US Open", "Open de Australia"] },
    ],
  },
  fr_billecart_rose: {
    fact: "Champán rosado famoso por su suave tono salmón en botella transparente. Una mezcla con mucho Chardonnay y un poco de vino tinto de Pinot Noir le da delicadeza.",
    quiz: [
      { q: "¿De dónde viene el nombre Billecart-Salmon?", a: "De los apellidos del matrimonio fundador, casado en 1818", x: ["Del color salmón de su rosado", "De los nombres de dos pueblos", "Del apodo de los hermanos fundadores"] },
    ],
  },
  fr_selosse_initial: {
    fact: "El epicentro del auge del «champán de viticultor», elaborado con uvas propias. Fermenta en barrica de roble, como en Borgoña, para lograr un champán con carácter de vino.",
    quiz: [
      { q: "¿Quién, al frente de Jacques Selosse, desató el auge del champán de viticultor?", a: "Anselme Selosse", x: ["Rémi Krug", "Bernard de Nonancourt", "Charles Philipponnat"] },
      { q: "¿Qué significa «RM» en la etiqueta de un champán de viticultor como Jacques Selosse?", a: "Viticultor que cultiva y elabora (récoltant-manipulant)", x: ["Casa que compra uva para elaborar (négociant-manipulant)", "Cooperativa (coopérative de manipulation)", "Marca de distribuidor (marque d'acheteur)"] },
    ],
  },
  fr_philipponnat_goisses: {
    fact: "Viñedo de 5,5 ha en una ladera orientada al sur, con casi 45 grados de pendiente, que domina el Marne. Más cálido que el resto de Champaña, da champanes potentes.",
    quiz: [
      { q: "¿Qué lugar ocupa Clos des Goisses de Philipponnat en la historia del champán?", a: "Se considera el primer champán de un único viñedo", x: ["Fue el primer champán rosado", "Fue el primer champán brut", "Fue el primer blanc de blancs"] },
    ],
  },
  fr_deutz: {
    fact: "Casa fundada en 1838 en Aÿ por los alemanes William Deutz y Pierre-Hubert Geldermann. Mezcla las tres variedades a partes casi iguales y logra un buen equilibrio.",
    quiz: [
      { q: "¿Qué casa de champán se hizo con Deutz en 1993?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  fr_henriot: {
    fact: "Casa familiar fundada en 1808 en Reims por Apolline Henriot. Es conocida por su estilo delicado, con una alta proporción de Chardonnay.",
    quiz: [
      { q: "¿Qué dos grandes casas de Borgoña compró la familia Henriot en la década de 1990?", a: "Bouchard Père & Fils y William Fèvre", x: ["Louis Jadot y Joseph Drouhin", "Louis Latour y Faiveley", "Leroy y Leflaive"] },
    ],
  },
  fr_gosset: {
    fact: "La casa de vinos más antigua de Champaña, nacida en 1584 en Aÿ cuando Pierre Gosset elaboraba vinos sin burbujas. Usa una botella inspirada en modelos antiguos.",
    quiz: [
      { q: "¿Qué año de fundación hace de Gosset la casa de vinos más antigua de Champaña?", a: "1584", x: ["1729", "1743", "1811"] },
    ],
  },
  fr_pommery: {
    fact: "Casa de Reims impulsada por Madame Louise Pommery tras quedar viuda. Es famosa por sus enormes bodegas subterráneas, que enlazan antiguas canteras de creta de la época romana.",
    quiz: [
      { q: "¿Qué estilo lanzó en 1874 Pommery, la casa de Pommery Brut Royal, cambiando la historia del champán?", a: "El brut, casi sin azúcar", x: ["El champán rosado", "El champán de añada", "El blanc de blancs"] },
      { q: "¿Qué mujer dirigía Pommery cuando la casa lanzó el primer champán brut?", a: "Madame Louise Pommery", x: ["Madame Clicquot", "Lily Bollinger", "Carol Duval-Leroy"] },
    ],
  },
  fr_duval_leroy: {
    fact: "Casa familiar fundada en 1859 en el pueblo de Vertus, en la Côte des Blancs. Es una de las pocas grandes casas que siguen en manos de la familia fundadora.",
    quiz: [
      { q: "¿Qué empresaria dirige Duval-Leroy desde que enviudó en 1991?", a: "Carol Duval-Leroy", x: ["Lily Bollinger", "Madame Clicquot", "Louise Pommery"] },
    ],
  },
  fr_ayala: {
    fact: "Casa fundada en 1860 en Aÿ por Edmond de Ayala. Muy pronto se hizo famosa por sus champanes secos, con poco azúcar.",
    quiz: [
      { q: "¿Quién compró la casa Ayala en 2005?", a: "Bollinger", x: ["LVMH", "Louis Roederer", "Taittinger"] },
    ],
  },
  fr_delamotte: {
    fact: "Fundada en 1760, es una de las casas más antiguas de Champaña. Elabora sus vinos con Chardonnay Grand Cru de la Côte des Blancs.",
    quiz: [
      { q: "¿Qué legendario champán de una casa hermana, pared con pared con Delamotte, se elabora con Chardonnay de un único pueblo y solo en buenos años?", a: "Salon", x: ["Krug Clos du Mesnil", "Dom Ruinart", "Taittinger Comtes de Champagne"] },
    ],
  },
  fr_dagueneau_silex: {
    fact: "La obra cumbre de Didier Dagueneau, el «enfant terrible del Loira» que elevó Pouilly-Fumé a la élite mundial del Sauvignon Blanc. Tras su muerte en un accidente de avioneta en 2008, su hijo Louis-Benjamin tomó el relevo.",
    quiz: [
      { q: "¿A qué alude el nombre «Silex» de Didier Dagueneau?", a: "A un suelo de sílex (pedernal)", x: ["A su etiqueta plateada", "A la palabra latina para «silencio»", "Al nombre del perro del fundador"] },
    ],
  },
  fr_ladoucette: {
    fact: "El vino de la familia Ladoucette, dueña de la mayor finca de Pouilly-Fumé. Su sede es el Château du Nozet, un castillo de cuento de hadas.",
    quiz: [
      { q: "¿Qué castillo es la sede de la familia Ladoucette, que elabora el Pouilly-Fumé de Ladoucette?", a: "Château du Nozet", x: ["Château de Tracy", "Château-Grillet", "Château de Saumur"] },
    ],
  },
  fr_bourgeois_sancerre: {
    fact: "El Sancerre emblemático de una bodega familiar que pasa de generación en generación en el pueblo de Chavignol, en Sancerre. Se considera un Sauvignon Blanc fresco de manual.",
    quiz: [
      { q: "¿Dónde fundó Henri Bourgeois en 2000 una nueva bodega, Clos Henri, en busca de Sauvignon Blanc?", a: "Marlborough (Nueva Zelanda)", x: ["Valle de Casablanca (Chile)", "Stellenbosch (Sudáfrica)", "Napa Valley (Estados Unidos)"] },
      { q: "¿Por qué otra cosa es famoso Chavignol, el pueblo de Henri Bourgeois?", a: "Por el queso de cabra crottin de Chavignol", x: ["Por las ostras", "Por las trufas", "Por la mostaza"] },
    ],
  },
  fr_jolivet_sancerre: {
    fact: "Bodega joven que empezó como negociante, sin viñedos propios, y llegó a ser un referente del Loira oriental. Elabora tanto Sancerre como Pouilly-Fumé.",
    quiz: [
      { q: "¿En qué año fundó Pascal Jolivet la empresa vinícola que lleva su nombre?", a: "1987", x: ["1808", "1920", "1961"] },
    ],
  },
  fr_vacheron_sancerre: {
    fact: "Domaine familiar situado en pleno pueblo de Sancerre. Vinifica por separado, parcela a parcela, el Sauvignon Blanc de sus viñedos biodinámicos.",
    quiz: [
      { q: "¿Qué otro vino del Domaine Vacheron recibe una valoración poco habitual en Sancerre?", a: "Su tinto de Pinot Noir", x: ["Su tinto de Cabernet Sauvignon", "Su vino dulce de podredumbre noble", "Su vino fortificado"] },
    ],
  },
  fr_huet_vouvray: {
    fact: "Referente del Chenin Blanc en Vouvray. Según la cosecha de cada año, de un mismo viñedo elabora vinos secos, semisecos o dulces.",
    quiz: [
      { q: "¿Cuál es, junto a Le Mont y Clos du Bourg, el tercer viñedo célebre del Domaine Huet?", a: "Le Haut-Lieu", x: ["La Roche aux Moines", "Clos de la Dioterie", "Les Baronnes"] },
    ],
  },
  fr_joly_coulee: {
    fact: "Viñedo plantado por primera vez por monjes cistercienses en 1130. Es una de las pocas AOC monopole, en las que una sola familia posee toda la denominación.",
    quiz: [
      { q: "¿Qué método de cultivo difundió por todo el mundo Nicolas Joly, de Clos de la Coulée de Serrant?", a: "La biodinámica", x: ["El cultivo hidropónico", "El cultivo intensivo con riego", "El cultivo en invernadero"] },
    ],
  },
  fr_rougeard: {
    fact: "Cabernet Franc del Loira que los hermanos Charly y Nady Foucault, con métodos tradicionales, elevaron a vino de culto mundial.",
    quiz: [
      { q: "¿Qué hermanos, dueños de Château Montrose en Burdeos, compraron Clos Rougeard en 2017?", a: "Martin y Olivier Bouygues", x: ["La familia Pinault", "La familia Arnault", "La familia Rothschild"] },
    ],
  },
  fr_joguet_chinon: {
    fact: "El primer domaine de Chinon en embotellar cuvées por viñedo. Clos de la Dioterie es su viñedo estrella, con viejas cepas de Cabernet Franc.",
    quiz: [
      { q: "¿A qué se dedicaba Charles Joguet en París antes de heredar los viñedos familiares en 1957?", a: "Pintor y escultor", x: ["Cantante de ópera", "Director de cine", "Arquitecto"] },
    ],
  },
  fr_pepiere_briords: {
    fact: "Muscadet de viejas cepas plantadas entre los años treinta y cincuenta. Muscadet no es una variedad sino el nombre de la denominación, y se considera el compañero ideal de las ostras.",
    quiz: [
      { q: "¿Qué significa «sur lie» en la etiqueta de un Muscadet como Clos des Briords?", a: "Que ha reposado sobre sus lías", x: ["Que procede de viñedos junto al río", "Que se vendimió tarde", "Que envejeció en barricas nuevas de roble"] },
    ],
  },
  fr_trimbach_csh: {
    fact: "Monopole de 1,67 ha en pleno Grand Cru Rosacker de Hunawihr. Cuidado por la familia Trimbach durante más de 200 años, es uno de los mejores rieslings secos del mundo.",
    quiz: [
      { q: "¿Qué omite a propósito Trimbach en la etiqueta de Clos Sainte Hune?", a: "La mención Grand Cru", x: ["La añada", "El nombre de la variedad", "El nombre del productor"] },
    ],
  },
  fr_trimbach_gewurz: {
    fact: "Variedad emblemática de Alsacia que estalla en aromas de lichi y rosa. Trimbach es famosa por vinificarla seca, sin dulzor.",
    quiz: [
      { q: "¿En qué año empezó a hacer vino en Alsacia Trimbach, que elabora Trimbach Gewurztraminer?", a: "1626", x: ["1639", "1731", "1919"] },
    ],
  },
  fr_hugel_gentil: {
    fact: "Mezcla al estilo alsaciano de varias variedades como Gewurztraminer, Pinot Gris, Riesling y Sylvaner. «Gentil» era el antiguo nombre de las mezclas de variedades nobles.",
    quiz: [
      { q: "¿En qué año empezó a hacer vino en Riquewihr la familia Hugel, que elabora Hugel Gentil?", a: "1639", x: ["1626", "1789", "1919"] },
    ],
  },
  fr_hugel_riesling: {
    fact: "El riesling emblemático de Hugel, famoso por su etiqueta amarilla. Es una de las botellas con las que más gente descubre los vinos de Alsacia.",
    quiz: [
      { q: "¿De qué color es la etiqueta que hace reconocibles desde lejos vinos de Hugel como su Riesling?", a: "Amarillo", x: ["Negro", "Azul", "Rojo"] },
      { q: "¿Qué menciones de vino dulce de Alsacia impulsó Jean Hugel para que se regularan por ley en los años ochenta?", a: "Vendanges Tardives y Sélection de Grains Nobles", x: ["Grand Cru y Premier Cru", "Crémant d'Alsace", "Vin de Table"] },
    ],
  },
  fr_zind_rangen: {
    fact: "Viñedo en la empinada ladera volcánica del Rangen, el Grand Cru más meridional de Alsacia. Zind-Humbrecht nació en 1959 de la unión de los viñedos de dos familias.",
    quiz: [
      { q: "¿Qué título obtuvo en 1989 Olivier Humbrecht, al frente de Zind-Humbrecht, como primer francés en lograrlo?", a: "Master of Wine (MW)", x: ["Master Sommelier (MS)", "Diplôme National d'Œnologue (DNO)", "Meilleur Ouvrier de France (MOF)"] },
    ],
  },
  fr_weinbach_schlossberg: {
    fact: "Domaine situado en el Clos des Capucins, cultivado por monjes capuchinos en 1612. Desde 1898 lo dirige la familia Faller.",
    quiz: [
      { q: "¿Quiénes cultivaron por primera vez, en 1612, el Clos des Capucins del Domaine Weinbach?", a: "Monjes capuchinos", x: ["Monjas cistercienses", "Los caballeros templarios", "Sacerdotes jesuitas"] },
      { q: "¿Qué hito logró en 1975 el Schlossberg, de donde sale el riesling de Weinbach?", a: "Fue el primer Grand Cru de Alsacia", x: ["Era el mayor viñedo cooperativo de Alsacia", "Fue el primer viñedo con certificación ecológica de Alsacia", "Era la AOC más pequeña de Francia"] },
    ],
  },
  fr_deiss_altenberg: {
    fact: "Varias variedades se plantan mezcladas en un mismo viñedo y se vendimian y vinifican juntas. Por eso la etiqueta destaca solo el nombre del viñedo, no la variedad.",
    quiz: [
      { q: "¿Qué filosofía del vino defendió Jean-Michel Deiss, al frente de Marcel Deiss?", a: "El terruño por encima de la variedad, con varias variedades plantadas juntas en un viñedo", x: ["Usar siempre una sola variedad al 100 %", "Usar solo ánforas, nunca barricas de roble", "Elaborar únicamente espumosos"] },
    ],
  },
  fr_miraval: {
    fact: "El rosado de famosos por excelencia, con primera añada en 2012. Château Miraval se encuentra en Correns, un pueblo del interior de Provenza.",
    quiz: [
      { q: "¿Qué pareja de estrellas de Hollywood creó el rosado Miraval junto con la familia Perrin?", a: "Brad Pitt y Angelina Jolie", x: ["Tom Cruise y Katie Holmes", "George y Amal Clooney", "Hugh Jackman y Deborra-Lee Furness"] },
      { q: "¿Qué banda grabó parte del álbum «The Wall» en el estudio de Château Miraval, de donde sale el rosado Miraval?", a: "Pink Floyd", x: ["The Beatles", "The Rolling Stones", "Queen"] },
    ],
  },
  fr_minuty_m: {
    fact: "Rosado ligero y fresco de una familia instalada desde 1936 en la península de Saint-Tropez. La botella de cintura estrecha, tipo «corsé», la ideó esta familia en los años sesenta.",
    quiz: [
      { q: "¿Qué grupo se convirtió en 2023 en accionista mayoritario de Château Minuty, que elabora M de Minuty?", a: "LVMH (Moët Hennessy)", x: ["Pernod Ricard", "Grupo Castel", "Artémis"] },
    ],
  },
  fr_minuty_281: {
    fact: "El rosado cumbre de Minuty, lanzado en 2015. Su seña de identidad es el adorno azul intenso que cae por el costado de la botella.",
    quiz: [
      { q: "¿Qué indica el número del rosado 281 de Château Minuty?", a: "Del código Pantone de un azul que evoca el Mediterráneo", x: ["Del número catastral del viñedo", "De las botellas producidas el primer año", "De la altitud del viñedo en metros"] },
    ],
  },
  fr_garrus: {
    fact: "Uno de los rosados más caros del mundo, elaborado con uvas de viejas cepas de Grenache que fermentan y se crían en barrica de roble. En 2019, LVMH pasó a ser accionista mayoritario de Château d'Esclans.",
    quiz: [
      { q: "¿En qué se diferencia la elaboración de Garrus, de Château d'Esclans, de la de otros rosados de Provenza?", a: "Fermenta y se cría en barrica de roble", x: ["Mezcla vino tinto y vino blanco", "Se le añade gas carbónico", "Usa uvas pasificadas"] },
      { q: "¿Quién fundó Château d'Esclans, que elabora Garrus y Whispering Angel?", a: "Sacha Lichine", x: ["Gérard Bertrand", "Marc Perrin", "Michel Rolland"] },
    ],
  },
  fr_rockangel: {
    fact: "El hermano mayor de Whispering Angel. Una parte fermenta en barrica de roble, lo que le da un sabor más rico y redondo.",
    quiz: [
      { q: "¿Qué escritor de vinos, padre de Sacha Lichine, creador de Rock Angel, fue dueño de Château Prieuré-Lichine en Burdeos?", a: "Alexis Lichine", x: ["Robert Parker", "Émile Peynaud", "Hugh Johnson"] },
    ],
  },
  fr_tempier: {
    fact: "La casa que dio a conocer Bandol al mundo con la Mourvèdre como base. La familia Peyraud contribuyó también al nacimiento de la AOC Bandol en 1941.",
    quiz: [
      { q: "¿Qué figura, famosa por la cocina y la mesa del Domaine Tempier, inspiró profundamente a la chef estadounidense Alice Waters?", a: "Lulu Peyraud", x: ["Julia Child", "Paul Bocuse", "Madame Clicquot"] },
    ],
  },
  fr_pibarnon: {
    fact: "Casa de referencia de Bandol que cultiva Mourvèdre en laderas calcáreas en forma de anfiteatro con vistas al mar.",
    quiz: [
      { q: "¿Qué familia compró Château de Pibarnon en 1977 y lo llevó a la élite de Bandol?", a: "La familia de Saint-Victor", x: ["La familia Peyraud", "La familia Rougier", "La familia Bertrand"] },
    ],
  },
  fr_simone: {
    fact: "Finca que posee cerca de la mitad de Palette, una AOC diminuta junto a Aix-en-Provence. Con la Clairette como base, elabora blancos que envejecen durante décadas.",
    quiz: [
      { q: "¿Qué familia mantiene Château Simone desde 1830?", a: "La familia Rougier", x: ["La familia Perrin", "La familia Lichine", "La familia Ott"] },
    ],
  },
  fr_daumas_gassac: {
    fact: "Leyenda del Languedoc cuya primera añada, la 1978, nació por consejo de un geólogo que reconoció sus suelos de depósitos glaciares. Se le llamó el «Grand Cru del Languedoc».",
    quiz: [
      { q: "¿Qué legendario enólogo de Burdeos ayudó a elaborar la primera añada de Mas de Daumas Gassac?", a: "Émile Peynaud", x: ["Michel Rolland", "Jules Chauvet", "Denis Dubourdieu"] },
      { q: "¿Quién fundó Mas de Daumas Gassac, se opuso a la llegada de Robert Mondavi a Aniane y apareció en el documental «Mondovino»?", a: "Aimé Guibert", x: ["Gérard Bertrand", "Alain Brumont", "Sacha Lichine"] },
    ],
  },
  fr_bertrand_cdr: {
    fact: "Rosado cuya botella tiene el fondo moldeado en forma de rosa abierta. El diseño, de un joven diseñador, ganó un concurso en 2010.",
    quiz: [
      { q: "¿Qué tiene de especial la botella de Côte des Roses de Gérard Bertrand?", a: "El fondo tiene forma de rosa", x: ["Tiene forma de corazón", "Es de vidrio azul", "La etiqueta lleva braille"] },
      { q: "¿En qué ámbito destacó Gérard Bertrand, creador de Côte des Roses, antes de dedicarse de lleno al vino?", a: "El rugby", x: ["El fútbol", "El ciclismo", "El tenis"] },
    ],
  },
  fr_cedre: {
    fact: "Finca familiar emblemática de Cahors, cuna de la Malbec. En viñedos de cultivo ecológico elabora malbecs oscuros y potentes.",
    quiz: [
      { q: "¿Qué apodo recibían antiguamente los vinos de Cahors, como Château du Cèdre, por su color oscuro?", a: "Vino negro", x: ["Vino de sangre", "Vino de la noche", "Vino de tinta"] },
    ],
  },
  fr_montus: {
    fact: "El buque insignia de Madiran, elaborado 100 % con Tannat. Alain Brumont, que compró la finca en 1980, convirtió la Tannat, tachada de rústica, en un vino de alta gama.",
    quiz: [
      { q: "¿Quién devolvió el prestigio a Madiran con Château Montus?", a: "Alain Brumont", x: ["Gérard Bertrand", "Aimé Guibert", "Sacha Lichine"] },
    ],
  },
  fr_cauhape: {
    fact: "Vino dulce de vendimia tardía elaborado con Petit Manseng que se deja pasificar en la cepa hasta finales de otoño. Su nombre significa «Sinfonía de noviembre».",
    quiz: [
      { q: "¿A qué rey de Francia, según una leyenda de Jurançon (la zona de este vino), le untaron los labios con ajo y vino de Jurançon al nacer?", a: "Enrique IV", x: ["Luis XIV", "Carlomagno", "Napoleón I"] },
    ],
  },
  fr_macle: {
    fact: "La cumbre del «vin jaune» (vino amarillo), que envejece más de 6 años bajo un velo de levaduras formado sobre el vino en la barrica. Tiene aromas de nuez y especias.",
    quiz: [
      { q: "¿Qué capacidad tiene el «clavelin», la botella tradicional del vin jaune, como el Château-Chalon de Jean Macle?", a: "62 cl", x: ["75 cl", "50 cl", "37,5 cl"] },
      { q: "¿Cuánto tiempo como mínimo debe envejecer el vin jaune bajo el velo de levaduras en barrica?", a: "6 años y 3 meses", x: ["1 año", "3 años", "10 años"] },
    ],
  },
  fr_tissot_poulsard: {
    fact: "Domaine de referencia del Jura, cultivado en biodinámica por Stéphane Tissot. La Poulsard es una uva tinta autóctona del Jura, de color tan pálido como un rosado.",
    quiz: [
      { q: "¿Qué científico, criado en Arbois, donde está el Domaine Tissot, cultivó viñedos e investigó la fermentación?", a: "Louis Pasteur", x: ["Marie Curie", "Antoine Lavoisier", "Charles Darwin"] },
    ],
  },
};

export default T;
