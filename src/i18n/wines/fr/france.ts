import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  fr_latache: {
    fact: "Avec la Romanée-Conti, l’un des deux monopoles que le DRC possède en totalité. Avec un peu plus de 6 ha, il est plus de trois fois plus grand que la Romanée-Conti.",
    quiz: [{ q: "Comment appelle-t-on un vignoble entièrement détenu par un seul domaine, comme La Tâche ?", a: "Monopole", x: ["Climat", "Lieu-dit", "Métayage"] }],
  },
  fr_richebourg_drc: {
    fact: "Réputé le plus opulent et le plus concentré des grands crus de Vosne-Romanée. Outre le DRC, Leroy, Anne Gros ou Méo-Camuzet s’en partagent les parcelles.",
    quiz: [{ q: "Outre la famille de Villaine, quelle famille copossède le Domaine de la Romanée-Conti, producteur du Richebourg ?", a: "La famille Leroy", x: ["La famille Rousseau", "La famille de Vogüé", "La famille Lafon"] }],
  },
  fr_rsv_drc: {
    fact: "Son nom vient du prieuré de Saint-Vivant, dont les moines cultivaient ces terres au Moyen Âge. Le DRC l’exploite en fermage dès 1966 auprès de la famille Marey-Monge, puis l’achète en 1988.",
    quiz: [
      { q: "D’où vient le nom de la Romanée-Saint-Vivant du DRC ?", a: "Du monastère médiéval de Saint-Vivant", x: ["Du prince de Conti au XVIIIe siècle", "D’un général de Napoléon", "D’une duchesse de Bourgogne"] },
      { q: "À quelle famille appartenait la Romanée-Saint-Vivant que le DRC a d’abord louée avant de l’acheter ?", a: "La famille Marey-Monge", x: ["La famille Leroy", "La famille Liger-Belair", "La famille Mommessin"] },
    ],
  },
  fr_grandsechezeaux_drc: {
    fact: "Grand cru rattaché administrativement à la commune voisine de Flagey-Échezeaux, mais considéré comme un vin de Vosne-Romanée. Bien plus petit et plus rare que l’Échezeaux.",
    quiz: [{ q: "Quel célèbre grand cru ceint de murs jouxte directement le Grands-Échezeaux du DRC ?", a: "Clos de Vougeot", x: ["Clos de Tart", "Clos des Lambrays", "Clos de Bèze"] }],
  },
  fr_echezeaux_drc: {
    fact: "Le plus vaste grand cru du secteur de Vosne-Romanée, morcelé entre des dizaines de propriétaires. On le présente comme la porte d’entrée des grands crus rouges du DRC.",
    quiz: [{ q: "Quelle affirmation sur le grand cru Échezeaux, d’où provient l’Échezeaux du DRC, est exacte ?", a: "Il est morcelé entre des dizaines de propriétaires", x: ["C’est un monopole du DRC", "Il ne produit que du vin blanc", "Il a été promu grand cru dans les années 1990"] }],
  },
  fr_montrachet_drc: {
    fact: "Un climat d’un peu plus de 8 ha à cheval sur Puligny et Chassagne, considéré comme le berceau du plus grand chardonnay du monde.",
    quiz: [{ q: "Quel écrivain français aurait dit que le montrachet se boit « à genoux et tête découverte » ?", a: "Alexandre Dumas", x: ["Victor Hugo", "Honoré de Balzac", "Émile Zola"] }],
  },
  fr_liger_romanee: {
    fact: "Monopole de moins de 1 ha situé sur la pente juste au-dessus de la Romanée-Conti. Au début des années 2000, Louis-Michel Liger-Belair l’a récupéré et la famille le vinifie désormais elle-même.",
    quiz: [{ q: "Quel record détient La Romanée ?", a: "La plus petite AOC de France", x: ["La plus ancienne AOC de France", "Le plus vaste grand cru de Bourgogne", "Le premier vignoble certifié bio de France"] }],
  },
  fr_meo_crosparantoux: {
    fact: "Premier cru devenu légendaire grâce à Henri Jayer, le « dieu de la Bourgogne », qui défricha ce terrain abandonné envahi de topinambours. Jayer travaillait en métayage les vignes de Méo-Camuzet et forma Jean-Nicolas Méo.",
    quiz: [{ q: "Quel vigneron, surnommé le « dieu de la Bourgogne », a défriché le Cros Parantoux et en a fait une légende ?", a: "Henri Jayer", x: ["Armand Rousseau", "Georges Roumier", "Henri Gouges"] }],
  },
  fr_annegros_cdv: {
    fact: "Le Clos de Vougeot est un grand cru de 50 ha que des moines ceignirent de murs au XIIe siècle ; il est aujourd’hui partagé entre quelque 80 propriétaires. Anne Gros y cultive la parcelle du Grand Maupertui.",
    quiz: [
      { q: "Quel ordre monastique a ceint de murs et mis en valeur le Clos de Vougeot dès le XIIe siècle ?", a: "Les Cisterciens", x: ["L’ordre de Cluny", "Les Jésuites", "Les Franciscains"] },
      { q: "Quelle confrérie bachique bourguignonne a son siège au château du Clos de Vougeot ?", a: "Chevaliers du Tastevin", x: ["Commanderie du Bontemps de Médoc", "Ordre des Coteaux de Champagne", "Compagnons du Beaujolais"] },
    ],
  },
  fr_leroy_musigny: {
    fact: "Domaine fondé en 1988 par Lalou Bize-Leroy. Conduit en biodynamie dès l’origine avec des rendements extrêmement bas, il produit les vins les plus chers de Bourgogne.",
    quiz: [{ q: "Qui dirige le Domaine Leroy et fut aussi cogérante du DRC jusqu’en 1992 ?", a: "Lalou Bize-Leroy", x: ["Anne-Claude Leflaive", "Henri Jayer", "Christophe Roumier"] }],
  },
  fr_vogue_musigny: {
    fact: "Premier propriétaire du grand cru Musigny, dont il détient près des deux tiers. Les raisins des jeunes vignes sont déclassés en chambolle-musigny premier cru.",
    quiz: [{ q: "Quel vin rare le domaine de Vogüé est-il presque le seul à produire dans le Musigny ?", a: "Musigny blanc", x: ["Musigny rosé", "Musigny effervescent", "Musigny liquoreux botrytisé"] }],
  },
  fr_mugnier_musigny: {
    fact: "Frédéric Mugnier reprend le domaine familial en 1985 et le hisse au sommet du style délicat de Chambolle. En 2004, il récupère le Clos de la Maréchale, jusque-là loué à Faiveley.",
    quiz: [{ q: "Quel métier Frédéric Mugnier, à la tête du domaine Jacques-Frédéric Mugnier, a-t-il exercé en parallèle jusqu’à la fin des années 1990 ?", a: "Pilote de ligne", x: ["Médecin", "Avocat", "Cuisinier"] }],
  },
  fr_roumier_bm: {
    fact: "Domaine culte de Chambolle-Musigny dirigé par Christophe Roumier. Le Bonnes-Mares est un grand cru à cheval sur Chambolle-Musigny et Morey-Saint-Denis.",
    quiz: [
      { q: "Qui dirige le Domaine Georges Roumier et l’a hissé au rang de domaine culte ?", a: "Christophe Roumier", x: ["Éric Rousseau", "Frédéric Mugnier", "Jean-Nicolas Méo"] },
      { q: "Outre Chambolle-Musigny, sur quelle commune s’étend le grand cru Bonnes-Mares ?", a: "Morey-Saint-Denis", x: ["Gevrey-Chambertin", "Vosne-Romanée", "Vougeot"] },
    ],
  },
  fr_dujac_cdlr: {
    fact: "Domaine fondé en 1968 à Morey-Saint-Denis par le Parisien Jacques Seysses. Il est réputé pour sa vinification en grappes entières.",
    quiz: [{ q: "Qui a fondé le Domaine Dujac en 1968 ?", a: "Jacques Seysses", x: ["Henri Jayer", "Armand Rousseau", "Christophe Roumier"] }],
  },
  fr_ponsot_cdlr: {
    fact: "En 2008, lors d’une vente aux enchères à New York, Laurent Ponsot fit lui-même retirer un Clos Saint-Denis Ponsot 1945 : le domaine n’avait commencé à produire ce vin qu’en 1982.",
    quiz: [{ q: "Quel célèbre faussaire a été démasqué en 2008 quand Laurent Ponsot a fait retirer de faux vins Ponsot d’une vente aux enchères ?", a: "Rudy Kurniawan", x: ["Hardy Rodenstock", "Bernard Madoff", "Frank Abagnale"] }],
  },
  fr_closdetart: {
    fact: "Grand cru monopole qui n’a connu que quatre propriétaires depuis 1141 : l’abbaye de Tart, la famille Marey-Monge, la famille Mommessin et aujourd’hui Artémis, holding de la famille Pinault.",
    quiz: [
      { q: "Qui a possédé le Clos de Tart de 1141 jusqu’à la Révolution française ?", a: "Les cisterciennes de l’abbaye de Tart", x: ["Les moines de l’abbaye de Cluny", "La maison des ducs de Bourgogne", "L’ordre du Temple"] },
      { q: "Qui a racheté le Clos de Tart après la famille Mommessin ?", a: "Artémis, de François Pinault", x: ["LVMH, de Bernard Arnault", "Le milliardaire américain Stan Kroenke", "Les frères Bouygues"] },
    ],
  },
  fr_lambrays: {
    fact: "Grand cru de Morey-Saint-Denis presque entièrement détenu par un seul domaine. Promu tardivement grand cru, en 1981, il a été acheté par LVMH en 2014.",
    quiz: [
      { q: "En quelle année le Clos des Lambrays a-t-il été promu grand cru ?", a: "1981", x: ["1936", "1961", "2001"] },
      { q: "Quel groupe a racheté le Clos des Lambrays en 2014 ?", a: "LVMH", x: ["Artémis (famille Pinault)", "Groupe Castel", "Pernod Ricard"] },
    ],
  },
  fr_rousseau_chambertin: {
    fact: "Le Chambertin est le « vin des rois », que Napoléon aurait emporté jusque dans ses campagnes. Armand Rousseau passe pour le meilleur domaine de Gevrey-Chambertin.",
    quiz: [
      { q: "Quel personnage historique aurait été le plus fervent amateur de chambertin ?", a: "Napoléon", x: ["Louis XIV", "Charlemagne", "Jeanne d’Arc"] },
      { q: "Quelle est l’origine supposée du nom « Chambertin » ?", a: "Le champ d’un paysan nommé Bertin", x: ["L’église de l’abbaye de Bertin", "Le camp du général romain Bertinus", "Un vieux mot signifiant « colline verte »"] },
    ],
  },
  fr_rousseau_beze: {
    fact: "L’un des plus anciens vignobles de Bourgogne, mis en valeur au VIIe siècle par les moines de l’abbaye de Bèze. Son vin peut aussi être vendu sous le nom de « Chambertin ».",
    quiz: [
      { q: "Qui a été le premier à cultiver le vignoble du Chambertin-Clos de Bèze ?", a: "Les moines de l’abbaye de Bèze au VIIe siècle", x: ["Les moines cisterciens au XIIe siècle", "Le prince de Conti au XVIIIe siècle", "L’armée de Napoléon au XIXe siècle"] },
      { q: "Quel privilège la réglementation accorde-t-elle au Chambertin-Clos de Bèze ?", a: "Il peut aussi être vendu sous le nom de « Chambertin »", x: ["Il peut porter le nom de « Romanée-Conti »", "Il peut être vendu sans millésime", "Il peut aussi être vendu en grand cru blanc"] },
    ],
  },
  fr_bichot_moutonne: {
    fact: "Monopole du Domaine Long-Depaquit, propriété chablisienne d’Albert Bichot. Il s’étend sur deux grands crus de Chablis, Vaudésir et Preuses.",
    quiz: [{ q: "En quelle année a été fondée la maison Albert Bichot, qui produit La Moutonne ?", a: "1831", x: ["1731", "1797", "1880"] }],
  },
  fr_leflaive_puligny: {
    fact: "Grande maison de vins blancs, emblème de Puligny-Montrachet. Dans les années 1990, Anne-Claude Leflaive convertit tout le domaine en biodynamie et ouvrit la voie à la viticulture écologique en Bourgogne.",
    quiz: [{ q: "Qui a converti le Domaine Leflaive à la biodynamie dans les années 1990 ?", a: "Anne-Claude Leflaive", x: ["Lalou Bize-Leroy", "Dominique Lafon", "Jean-François Coche-Dury"] }],
  },
  fr_leflaive_batard: {
    fact: "Grand cru situé sur la pente juste sous le Montrachet. Comme ses voisins Chevalier-Montrachet et Les Pucelles, il doit son nom à une légende sur la famille d’un ancien seigneur.",
    quiz: [{ q: "Que signifie « bâtard » dans Bâtard-Montrachet ?", a: "Enfant illégitime", x: ["Chevalier", "Pucelle", "Moine"] }],
  },
  fr_cochedury_cc: {
    fact: "Grand cru blanc de la colline de Corton. Produit en quantités infimes, celui de Coche-Dury compte parmi les bourgognes blancs les plus difficiles à trouver.",
    quiz: [{ q: "Selon la légende, pourquoi Charlemagne fit-il planter des cépages blancs sur la colline de Corton ?", a: "Le vin rouge tachait sa barbe blanche", x: ["Le pape avait interdit le vin rouge", "Le raisin blanc se vendait plus cher", "La guerre avait détruit les vignes rouges"] }],
  },
  fr_cochedury_meursault: {
    fact: "Producteur légendaire dont même le meursault village se vend au prix des grands crus d’autres domaines. Jean-François Coche-Dury en a bâti la réputation et son fils Raphaël a pris la relève.",
    quiz: [{ q: "Quel vigneron a bâti la réputation du meursault de Coche-Dury ?", a: "Jean-François Coche-Dury", x: ["Henri Jayer", "Dominique Lafon", "Aubert de Villaine"] }],
  },
  fr_bonneau_cc: {
    fact: "Domaine rare qui ne produit que deux grands crus, Corton-Charlemagne et Corton. Il a été racheté en 2017 par le milliardaire américain Stan Kroenke.",
    quiz: [{ q: "Quel domaine culte de la Napa Valley appartient au milliardaire américain qui a racheté Bonneau du Martray en 2017 ?", a: "Screaming Eagle", x: ["Harlan Estate", "Opus One", "Sine Qua Non"] }],
  },
  fr_latour_cc: {
    fact: "Entreprise familiale depuis 1797 et l’un des plus grands propriétaires de la colline de Corton. La maison fabrique encore ses fûts dans sa propre tonnellerie.",
    quiz: [
      { q: "Quel château Louis Latour possède-t-il comme siège à Aloxe-Corton, sur la colline de Corton ?", a: "Château Corton Grancey", x: ["Château de Meursault", "Château de Puligny-Montrachet", "Château de Pommard"] },
      { q: "En quelle année commence l’histoire de la maison Louis Latour, qui produit ce Corton-Charlemagne ?", a: "1797", x: ["1731", "1859", "1920"] },
    ],
  },
  fr_faiveley_cortons: {
    fact: "Grand cru monopole de Corton dont le nom porte celui de la famille qui le produit. Faiveley est une entreprise familiale établie depuis des générations à Nuits-Saint-Georges.",
    quiz: [
      { q: "En quelle année Faiveley, qui produit ce vin, a-t-il été fondé à Nuits-Saint-Georges ?", a: "1825", x: ["1731", "1797", "1920"] },
      { q: "Quel monopole Faiveley a-t-il exploité en fermage pendant plus de 50 ans avant de le rendre à la famille Mugnier en 2004 ?", a: "Clos de la Maréchale", x: ["Clos de Tart", "Clos des Lambrays", "Clos des Ducs"] },
    ],
  },
  fr_drouhin_mouches: {
    fact: "Premier cru de Beaune que Maurice Drouhin a rassemblé parcelle par parcelle auprès de plusieurs propriétaires dans les années 1920. Drouhin en est le premier propriétaire.",
    quiz: [
      { q: "Quel insecte désignent les « mouches » du Clos des Mouches ?", a: "Les abeilles", x: ["Les papillons", "Les libellules", "Les coccinelles"] },
      { q: "Où se trouve le domaine fondé en 1987 aux États-Unis par Joseph Drouhin, producteur du Clos des Mouches ?", a: "Oregon", x: ["Napa Valley", "Sonoma", "État de Washington"] },
    ],
  },
  fr_bouchard_enfant: {
    fact: "Monopole de Beaune Grèves jadis cultivé par les carmélites. Son nom viendrait d’une religieuse qui aurait prédit la naissance de Louis XIV ; Bouchard l’a acheté en 1791, après la Révolution.",
    quiz: [
      { q: "À qui fait référence le nom de la « Vigne de l’Enfant Jésus » ?", a: "Au Christ enfant", x: ["À la Vierge Marie", "Au roi", "À l’abbé du monastère"] },
      { q: "Quel roi, dont une carmélite aurait prédit la naissance, est lié au nom de la Vigne de l’Enfant Jésus ?", a: "Louis XIV", x: ["Louis XVI", "Henri IV", "Napoléon Ier"] },
    ],
  },
  fr_hospices_rolin: {
    fact: "Vin issu des vignes léguées aux Hospices de Beaune, hôpital de charité fondé en 1443. Il est vendu chaque année lors de la plus célèbre vente aux enchères de vins caritative au monde.",
    quiz: [
      { q: "Quand a lieu la vente aux enchères caritative où est vendue la Cuvée Nicolas Rolin des Hospices de Beaune ?", a: "Chaque année, le troisième dimanche de novembre", x: ["Chaque année, le premier dimanche de septembre", "Tous les cinq ans, au printemps", "Chaque année, le 1er janvier"] },
      { q: "Quelle épouse de Nicolas Rolin a fondé avec lui les Hospices de Beaune ?", a: "Guigone de Salins", x: ["Madame Clicquot", "Anne d’Autriche", "Marguerite de Bourgogne"] },
    ],
  },
  fr_dangerville_ducs: {
    fact: "Monopole premier cru de Volnay qui appartenait jadis aux ducs de Bourgogne. Dans les années 1920-1930, le marquis d’Angerville fut, avec Henri Gouges notamment, un pionnier de la mise en bouteille au domaine.",
    quiz: [
      { q: "À qui renvoient les « ducs » du Clos des Ducs ?", a: "Aux anciens ducs de Bourgogne", x: ["Aux évêques de la cour pontificale", "Aux commandants des légions romaines", "Aux moines d’un monastère"] },
      { q: "Quelle pratique la famille du marquis d’Angerville a-t-elle défendue avec d’autres vignerons dans les années 1920-1930 ?", a: "La mise en bouteille au domaine plutôt que la vente au négoce", x: ["Les effervescents à la champenoise", "La plantation de cabernet sauvignon en Bourgogne", "L’adoption de la capsule à vis"] },
    ],
  },
  fr_lafon_perrieres: {
    fact: "Domaine emblématique de Meursault, qui possède aussi un peu de grand cru Montrachet. Les Perrières, dont le nom rappelle d’anciennes carrières de pierre, passent pour le meilleur premier cru de Meursault.",
    quiz: [{ q: "Quel membre de la famille des Comtes Lafon a créé en 1923 la Paulée de Meursault, fête qui clôt chaque année les « Trois Glorieuses » de novembre ?", a: "Le comte Jules Lafon", x: ["Louis Latour", "Joseph Drouhin", "Henri Jayer"] }],
  },
  fr_fevre_lesclos: {
    fact: "Les Clos est le plus vaste des grands crus de Chablis. William Fèvre passe pour le domaine qui possède le plus de grands crus à Chablis.",
    quiz: [
      { q: "Combien de climats compte le grand cru de Chablis, auquel appartient Les Clos de William Fèvre ?", a: "7", x: ["3", "12", "33"] },
      { q: "Quelle maison de Champagne a racheté William Fèvre en 1998 ?", a: "Henriot", x: ["Bollinger", "Taittinger", "Laurent-Perrier"] },
    ],
  },
  fr_raveneau: {
    fact: "Légende de Chablis fondée en 1948 par François Raveneau. Élevés dans de vieux fûts de chêne, ses chablis tiennent plusieurs décennies.",
    quiz: [{ q: "À quelle autre grande famille de Chablis François Raveneau, fondateur du domaine, s’est-il lié par mariage ?", a: "La famille Dauvissat", x: ["La famille Fèvre", "La famille Laroche", "La famille Bichot"] }],
  },
  fr_dauvissat: {
    fact: "Avec ses cousins Raveneau, ce domaine est considéré comme le sommet de Chablis. Dans une région où la cuve inox domine, il reste fidèle à l’élevage en fût de chêne.",
    quiz: [{ q: "Quelle méthode les grands domaines de Chablis comme Vincent Dauvissat ont-ils importée de la Côte-d’Or ?", a: "Fermentation en fût et long élevage sur lies", x: ["Macération carbonique", "Passerillage (appassimento)", "Élevage en solera"] }],
  },
  fr_laroche: {
    fact: "Laroche fait vieillir ses vins dans l’Obédiencerie, bâtiment monastique du IXe siècle. Les reliques de saint Martin, apportées de Tours en 877 pour les soustraire aux Normands, y furent abritées.",
    quiz: [{ q: "Quel saint le Chablis Saint Martin du Domaine Laroche honore-t-il ?", a: "Saint Martin, évêque de Tours", x: ["Saint Bernard, figure des Cisterciens", "Saint Denis, premier évêque de Paris", "Sainte Jeanne d’Arc"] }],
  },
  fr_fuisse: {
    fact: "Grande maison de chardonnay, emblème du Mâconnais. Depuis le millésime 2020, Pouilly-Fuissé est la première appellation du Mâconnais à compter des premiers crus.",
    quiz: [{ q: "Quelle classification est apparue à partir du millésime 2020 à Pouilly-Fuissé, où se trouve le Château-Fuissé ?", a: "Premier cru", x: ["Grand cru", "Cru bourgeois", "Cru classé"] }],
  },
  fr_lapierre_morgon: {
    fact: "Pionnier du vin nature, vinifié presque sans soufre. Avec Foillard, Thévenet et Breton, il formait la « bande des quatre » du Beaujolais.",
    quiz: [{ q: "Quel chimiste et négociant a converti la « bande des quatre » du Beaujolais, dont Marcel Lapierre, à la vinification sans intrants ?", a: "Jules Chauvet", x: ["Émile Peynaud", "Louis Pasteur", "Henri Jayer"] }],
  },
  fr_jacques_mav: {
    fact: "En l’achetant en 1996, Louis Jadot devint la première grande maison bourguignonne à s’implanter dans les crus du Beaujolais. On y vinifie à la bourguignonne des gamays de garde.",
    quiz: [{ q: "D’où vient le nom de Moulin-à-Vent, où se trouve le Château des Jacques ?", a: "D’un vieux moulin à vent sur la colline", x: ["D’un moulin à eau d’époque romaine", "D’une rivière balayée par le vent", "D’un ancien monastère"] }],
  },
  fr_jadot_bjv: {
    fact: "Échelon supérieur du Beaujolais, issu de communes désignées du nord de la région. L’étiquette porte la tête de Bacchus, emblème de Louis Jadot.",
    quiz: [
      { q: "Quel visage figure sur l’emblème de l’étiquette du Beaujolais-Villages de Louis Jadot ?", a: "Bacchus, dieu du vin", x: ["Neptune, dieu de la mer", "Apollon, dieu du soleil", "Saint Vincent, patron des vignerons"] },
      { q: "Combien de crus, niveau le plus élevé du Beaujolais, ont droit à leur nom de commune ?", a: "10", x: ["3", "7", "22"] },
    ],
  },
  fr_duboeuf_fleurie: {
    fact: "Cru du Beaujolais parfumé et souple, fidèle à son nom évocateur de fleurs. Duboeuf l’a rendu célèbre avec son étiquette fleurie.",
    quiz: [{ q: "Quel surnom donne-t-on souvent aux fleuries, comme celui de Georges Duboeuf, pour leur élégance parfumée ?", a: "La reine du Beaujolais", x: ["Le roi du Beaujolais", "Le chevalier du Beaujolais", "Le moine du Beaujolais"] }],
  },
  fr_guigal_mouline: {
    fact: "Premier vin parcellaire de Guigal, issu d’une pente en amphithéâtre de la Côte Blonde. Un peu de viognier y est cofermenté avec la syrah.",
    quiz: [
      { q: "Quel surnom réunit les trois vins La Mouline, La Landonne et La Turque de Guigal ?", a: "Les « La La »", x: ["La Triple Couronne", "Les Trois", "Le trio de Côte-Rôtie"] },
      { q: "Quel est le premier millésime de La Mouline de Guigal ?", a: "1966", x: ["1946", "1978", "1985"] },
    ],
  },
  fr_guigal_landonne: {
    fact: "Le plus sombre et le plus puissant des « La La », 100 % syrah issu des pentes abruptes de la Côte Brune. Guigal a reconstitué ce vignoble en rachetant des parcelles à de nombreux propriétaires, puis l’a replanté.",
    quiz: [{ q: "Quel est le premier millésime de La Landonne de Guigal ?", a: "1978", x: ["1966", "1985", "1995"] }],
  },
  fr_guigal_turque: {
    fact: "Cadet des « La La », issu d’une vigne longtemps abandonnée que Guigal a replantée au début des années 1980. Bien que située en Côte Brune, elle reçoit un peu de viognier.",
    quiz: [{ q: "Quel est le premier millésime de La Turque de Guigal ?", a: "1985", x: ["1966", "1978", "1999"] }],
  },
  fr_guigal_cdr: {
    fact: "Le vin de tous les jours emblématique de Guigal, maison fondée en 1946 à Ampuis par Étienne Guigal. Fidèle à ses racines du Rhône nord, il fait la part belle à la syrah.",
    quiz: [
      { q: "Quel ancien château de Côte-Rôtie Guigal a-t-il acheté en 1995 pour y installer son siège ?", a: "Château d’Ampuis", x: ["Château-Grillet", "Château Rayas", "Château La Nerthe"] },
      { q: "En quelle année Étienne Guigal a-t-il fondé sa maison ?", a: "1946", x: ["1808", "1834", "1990"] },
    ],
  },
  fr_chapoutier_belleruche: {
    fact: "Le côtes-du-rhône de tous les jours de Chapoutier, grande maison de l’Hermitage depuis 1808. Un côté de l’étiquette porte des points en relief : du braille.",
    quiz: [{ q: "Qu’est-ce que Chapoutier inscrit depuis les années 1990 sur toutes ses étiquettes, dont celle du Belleruche ?", a: "Du braille pour les non-voyants", x: ["Un QR code", "La signature du fondateur", "La carte du vignoble"] }],
  },
  fr_chapoutier_sizeranne: {
    fact: "Vin issu de vignes achetées à la famille de Maurice Monier de la Sizeranne, aveugle qui mit au point un braille abrégé. En 1994, ce fut le premier vin à porter une étiquette en braille.",
    quiz: [{ q: "Qui était Maurice Monier de la Sizeranne, qui a donné son nom à ce vin et inspiré les étiquettes en braille de Chapoutier ?", a: "Un aveugle qui a œuvré à diffuser le braille", x: ["Le fondateur de Chapoutier", "Un évêque de la cour papale d’Avignon", "Un général de Napoléon"] }],
  },
  fr_jaboulet_chapelle: {
    fact: "Légende du Rhône qui tire son nom de la chapelle au sommet de la colline de l’Hermitage. Le 1961 est considéré comme l’un des plus grands vins du XXe siècle.",
    quiz: [
      { q: "D’où vient le nom La Chapelle, sur la colline de l’Hermitage ?", a: "D’une petite chapelle au sommet de la colline", x: ["De la cathédrale d’un ancien monastère", "D’un pavillon de chasse royal", "D’un temple romain"] },
      { q: "Quelle famille, propriétaire du Château La Lagune à Bordeaux, a racheté en 2006 Paul Jaboulet Aîné, producteur de La Chapelle ?", a: "La famille Frey", x: ["La famille Perrin", "La famille Guigal", "La famille Rothschild"] },
    ],
  },
  fr_jaboulet_p45: {
    fact: "Le vin de tous les jours emblématique de Paul Jaboulet Aîné, grande maison du Rhône fondée en 1834. Un côtes-du-rhône facile, élaboré avec des raisins du Rhône méridional.",
    quiz: [{ q: "Que signifie le nom Parallèle 45 ?", a: "Le 45e parallèle nord, qui passe près du domaine", x: ["Les 45 ans de la maison", "45 cépages différents", "45 mois d’élevage"] }],
  },
  fr_chave_hermitage: {
    fact: "Le plus grand domaine du Rhône, qui assemble en une seule cuvée les vins de plusieurs parcelles de la colline de l’Hermitage. La famille Chave y achète des vignes depuis 1865.",
    quiz: [{ q: "Selon l’étiquette de Jean-Louis Chave, depuis quelle année la famille est-elle vigneronne « de père en fils » ?", a: "1481", x: ["1731", "1808", "1946"] }],
  },
  fr_jamet: {
    fact: "Domaine traditionaliste qui assemble des syrahs de plusieurs parcelles de Côte-Rôtie. Adepte de la vendange entière, il incarne la syrah épicée du Rhône nord.",
    quiz: [{ q: "À quoi renvoie le nom « Côte-Rôtie », appellation du Domaine Jamet ?", a: "Des pentes abruptes plein sud, rôties par le soleil", x: ["Un sol de cendres volcaniques", "Un élevage en fûts brûlés", "D’anciennes vignes ravagées par un incendie"] }],
  },
  fr_clape_cornas: {
    fact: "Domaine qui a fait connaître Cornas, alors ignoré de tous, en vinifiant la syrah à l’ancienne. Son fils et son petit-fils ont pris la relève.",
    quiz: [{ q: "Quel sens attribue-t-on au nom « Cornas », où se trouve le domaine Auguste Clape ?", a: "Terre brûlée (en celte)", x: ["Colline pierreuse", "Terre du pape", "Rivière noire"] }],
  },
  fr_grillet: {
    fact: "Haut lieu du viognier, où un seul domaine occupe toute l’AOC. Sa bouteille brune, longue et fine, qu’aucun autre domaine français n’utilise, est sa signature.",
    quiz: [
      { q: "Qu’a de particulier l’AOC Château-Grillet ?", a: "Un seul domaine occupe toute l’AOC", x: ["C’est la seule AOC effervescente du Rhône", "Le rouge et le blanc doivent y être assemblés", "Elle verse chaque année un tribut au pape"] },
      { q: "Quel propriétaire du Château Latour, à Bordeaux, a racheté Château-Grillet en 2011 ?", a: "François Pinault", x: ["Bernard Arnault", "Martin Bouygues", "Stan Kroenke"] },
    ],
  },
  fr_vernay_condrieu: {
    fact: "Domaine de Georges Vernay, qui sauva le viognier menacé de disparition dans les années 1960. On le surnommait le « pape de Condrieu ».",
    quiz: [{ q: "Qu’est-il arrivé au vignoble de Condrieu dans les années 1960, quand Georges Vernay sauvait le viognier ?", a: "Réduit à quelques hectares, il a failli disparaître", x: ["On y a découvert le phylloxéra pour la première fois", "Il a été promu grand cru", "Il s’est converti au vin rouge"] }],
  },
  fr_rayas: {
    fact: "Vin culte de Châteauneuf-du-Pape, 100 % grenache issu de sols sableux cernés de bois. Il est aussi célèbre pour son chai vétuste et son étiquette modeste.",
    quiz: [{ q: "Quelle famille dirige le Château Rayas depuis des générations ?", a: "La famille Reynaud", x: ["La famille Perrin", "La famille Brunier", "La famille Avril"] }],
  },
  fr_closdespapes: {
    fact: "Grand nom de Châteauneuf-du-Pape transmis de génération en génération dans la famille Avril. Le 2007 a été élu « vin de l’année » par Wine Spectator.",
    quiz: [{ q: "Quelle famille se transmet le Clos des Papes de génération en génération ?", a: "La famille Avril", x: ["La famille Reynaud", "La famille Brunier", "La famille Féraud"] }],
  },
  fr_vieuxtelegraphe: {
    fact: "Châteauneuf-du-Pape issu du plateau de La Crau, couvert de galets roulés. La famille Brunier le cultive depuis la fin du XIXe siècle.",
    quiz: [
      { q: "D’où vient le nom Vieux Télégraphe ?", a: "D’une tour du télégraphe optique de Chappe (fin XVIIIe)", x: ["D’un bureau de télégraphe du XIXe siècle", "D’un clocher de la cour papale", "D’un poste de signalisation ferroviaire"] },
      { q: "Sur quel plateau couvert de galets roulés se trouve le Vieux Télégraphe ?", a: "La Crau", x: ["La Nerthe", "Côte Blonde", "Les Bessards"] },
    ],
  },
  fr_pegau: {
    fact: "Châteauneuf-du-Pape traditionaliste dirigé par Paul Féraud et sa fille Laurence. Les raisins fermentent avec leurs rafles et le vin vieillit longuement en grands foudres.",
    quiz: [{ q: "Que signifie « Pégau », nom du Domaine du Pégau ?", a: "Une cruche à vin médiévale en terre cuite", x: ["La coiffe du pape", "Un champ de galets", "Un nid de pigeons"] }],
  },
  fr_lanerthe: {
    fact: "L’un des plus anciens domaines de Châteauneuf-du-Pape, déjà cité au XVIe siècle. Il assemble grenache, syrah et mourvèdre pour des vins équilibrés.",
    quiz: [{ q: "Que signifie « Châteauneuf-du-Pape », appellation du Château La Nerthe ?", a: "Le nouveau château du pape", x: ["L’ancien vignoble du pape", "Le vin du nouveau pape", "Le jardin d’été du pape"] }],
  },
  fr_bonneau_celestins: {
    fact: "Légende de Châteauneuf-du-Pape, longuement élevée dans une cave souterraine au cœur du village et commercialisée seulement les grandes années. Depuis la mort d’Henri Bonneau en 2016, son fils Marcel a pris la relève.",
    quiz: [{ q: "Quelle autre cuvée Henri Bonneau produit-il aux côtés de la Réserve des Célestins ?", a: "Cuvée Marie Beurrier", x: ["Cuvée Da Capo", "Hommage à Jacques Perrin", "La Crau"] }],
  },
  fr_perrin_cdr: {
    fact: "Le côtes-du-rhône de tous les jours de la famille Perrin, propriétaire du Château de Beaucastel. Un assemblage de grenache, syrah et mourvèdre.",
    quiz: [{ q: "Quel rosé de Provence la famille Perrin, qui produit ce côtes-du-rhône, a-t-elle lancé avec des stars d’Hollywood ?", a: "Miraval", x: ["Whispering Angel", "Minuty", "Domaines Ott"] }],
  },
  fr_aqueria_tavel: {
    fact: "Domaine phare de Tavel, AOC réservée aux rosés. Plus coloré et plus charpenté qu’un rosé de Provence, il se marie volontiers avec les plats.",
    quiz: [{ q: "Complétez l’expression consacrée au tavel, comme celui du Château d’Aquéria : « le rosé des rois, le ○○ des rosés ».", a: "Roi", x: ["Reine", "Pape", "Empereur"] }],
  },
  fr_dp_rose: {
    fact: "Le rosé de Dom Pérignon, produit seulement les grandes années. Le premier millésime, 1959, fut vendu presque en totalité au shah d’Iran.",
    quiz: [{ q: "Lors de quel banquet historique de 1971 a-t-on trinqué au Dom Pérignon Rosé 1959 ?", a: "Le 2 500e anniversaire de l’Empire perse", x: ["L’ouverture de l’Exposition universelle de Paris", "L’investiture du président Kennedy", "Le mariage de Rainier III de Monaco"] }],
  },
  fr_moet_rose: {
    fact: "La version rosée du Moët Impérial. L’ajout de vin rouge de pinot noir lui donne sa robe rose et ses arômes de fraise et de cerise.",
    quiz: [{ q: "En quelle année a été fondée la maison Moët & Chandon, qui produit le Rosé Impérial ?", a: "1743", x: ["1729", "1772", "1811"] }],
  },
  fr_moet_ice: {
    fact: "Lancé en 2011, premier champagne au monde conçu pour être bu sur glace. Il est plus doux et plus concentré pour ne pas s’affadir quand la glace fond.",
    quiz: [{ q: "Comment est-il recommandé de déguster le Moët & Chandon Ice Impérial ?", a: "Dans un grand verre rempli de glaçons", x: ["Réchauffé", "Coupé à moitié avec du ginger ale", "À la paille, directement à la bouteille"] }],
  },
  fr_veuve_lgd: {
    fact: "La cuvée de prestige de Veuve Clicquot, lancée en 1972 pour le bicentenaire de la maison avec le millésime 1962.",
    quiz: [{ q: "Quelle femme La Grande Dame de Veuve Clicquot honore-t-elle ?", a: "Madame Clicquot", x: ["Marie-Antoinette", "L’impératrice Joséphine", "Lily Bollinger"] }],
  },
  fr_veuve_rose: {
    fact: "Rosé obtenu en ajoutant du vin rouge à l’assemblage de la Carte Jaune. Veuve Clicquot est réputée avoir créé le premier champagne rosé d’assemblage.",
    quiz: [{ q: "En quelle année Madame Clicquot a-t-elle créé le premier champagne rosé d’assemblage, ancêtre du Veuve Clicquot Rosé ?", a: "1818", x: ["1729", "1874", "1921"] }],
  },
  fr_roederer_collection: {
    fact: "Le brut sans année de Louis Roederer, lancé en 2021 pour remplacer le Brut Premier. Il repose sur une « réserve perpétuelle » qui accumule les vins de réserve année après année.",
    quiz: [{ q: "Que signifient les nombres comme « 242 » ou « 243 » associés à la Collection de Louis Roederer ?", a: "Le rang de l’assemblage depuis la fondation en 1776", x: ["Le nombre de mois d’élevage", "Le nombre de vins assemblés", "La production en milliers de bouteilles"] }],
  },
  fr_krug_gc: {
    fact: "Le champagne phare de Krug, assemblage de plus de 120 vins issus d’une dizaine d’années. Chaque bouteille porte le numéro de son « édition ».",
    quiz: [{ q: "Qui a fondé en 1843 la maison Krug, qui produit la Grande Cuvée ?", a: "Joseph Krug", x: ["Nicolas Ruinart", "Florens-Louis Heidsieck", "Claude Moët"] }],
  },
  fr_krug_mesnil: {
    fact: "Élaboré uniquement avec le chardonnay d’un clos de 1,84 ha ceint de murs, au cœur du village du Mesnil-sur-Oger. Krug l’a acheté en 1971 et en a tiré un premier millésime en 1979.",
    quiz: [{ q: "En quelle année a été érigé le mur qui ceint le vignoble du Krug Clos du Mesnil ?", a: "1698", x: ["1843", "1971", "1979"] }],
  },
  fr_krug_rose: {
    fact: "Rosé qui ajoute du vin rouge de pinot noir à l’assemblage pluriannuel propre à Krug. Comme la Grande Cuvée, il porte un numéro d’édition.",
    quiz: [{ q: "Quel groupe possède depuis 1999 la maison Krug, qui produit ce rosé ?", a: "LVMH", x: ["Kering", "Pernod Ricard", "Groupe Laurent-Perrier"] }],
  },
  fr_bollinger_sc: {
    fact: "Le champagne phare de Bollinger, maison née à Aÿ en 1829. Riche en pinot noir et en partie fermenté en fût de chêne, il est ample et vineux.",
    quiz: [
      { q: "Quel personnage de cinéma est célèbre pour sa longue fidélité au Bollinger Special Cuvée ?", a: "James Bond", x: ["Sherlock Holmes", "Indiana Jones", "Jay Gatsby"] },
      { q: "Quelle dirigeante de Bollinger disait boire du champagne « quand je suis heureuse et quand je suis triste » ?", a: "Lily Bollinger", x: ["Madame Clicquot", "Louise Pommery", "Coco Chanel"] },
    ],
  },
  fr_bollinger_ga: {
    fact: "Le champagne millésimé de Bollinger, produit seulement les grandes années. Tous ses vins fermentent en petits fûts de chêne.",
    quiz: [{ q: "Quel bouchon La Grande Année de Bollinger utilise-t-elle pendant son long vieillissement en bouteille ?", a: "Un bouchon de liège naturel", x: ["Une capsule couronne", "Une capsule à vis", "Un bouchon en verre"] }],
  },
  fr_bollinger_rd: {
    fact: "Chef-d’œuvre de Bollinger, longuement vieilli sur lies puis dégorgé juste avant sa commercialisation. Le premier millésime est 1952.",
    quiz: [
      { q: "Que signifie « R.D. » dans Bollinger R.D. ?", a: "Récemment dégorgé", x: ["Royal Delivery", "Red Dry", "Réserve du Domaine"] },
      { q: "Quelle première Bollinger R.D. a-t-il réalisée dans l’histoire des étiquettes de champagne ?", a: "Indiquer la date de dégorgement sur l’étiquette", x: ["Graver l’étiquette en braille", "Imprimer directement sur la bouteille, sans étiquette", "Ajouter un QR code à l’étiquette"] },
    ],
  },
  fr_salon: {
    fact: "Né au début du XXe siècle du champagne qu’Eugène-Aimé Salon élaborait pour sa propre consommation. Produit uniquement les années exceptionnelles, il ne sort que quelques dizaines de fois par siècle.",
    quiz: [
      { q: "Quelle règle de production singulière Salon s’impose-t-il ?", a: "Du chardonnay du seul Mesnil-sur-Oger, les grandes années uniquement", x: ["Chaque année, et uniquement en rosé", "Uniquement en sans année, par assemblage de millésimes", "Uniquement du pinot noir"] },
      { q: "Quelle maison sœur, voisine mitoyenne de Salon, appartient comme elle au groupe Laurent-Perrier ?", a: "Delamotte", x: ["Krug", "Bollinger", "Henriot"] },
    ],
  },
  fr_taittinger_br: {
    fact: "Le brut sans année phare de Taittinger, léger et élégant grâce à une part assez élevée de chardonnay. Il vieillit dans des crayères situées sous l’ancienne abbaye Saint-Nicaise de Reims.",
    quiz: [{ q: "Quelle ancienne maison de Champagne, rachetée en 1932 par Pierre Taittinger qui lui donna son nom, est l’ancêtre de Taittinger ?", a: "Forest-Fourneaux", x: ["Heidsieck & Co Monopole", "Ruinart", "Delamotte"] }],
  },
  fr_taittinger_comtes: {
    fact: "La cuvée de prestige de Taittinger, 100 % chardonnay des grands crus de la Côte des Blancs, produite seulement les grandes années. Le premier millésime est 1952.",
    quiz: [{ q: "Quel personnage le nom Comtes de Champagne de Taittinger honore-t-il ?", a: "Thibaut IV, comte de Champagne revenu de croisade", x: ["Charlemagne", "Napoléon Ier", "Saint Remi, archevêque de Reims"] }],
  },
  fr_polroger_br: {
    fact: "Maison familiale née à Épernay en 1849. Fournisseur attitré de la Couronne britannique, elle a été servie au mariage du prince William en 2011.",
    quiz: [{ q: "Quel surnom le Pol Roger Brut Réserve doit-il, en Grande-Bretagne, à la couleur de sa collerette ?", a: "White Foil", x: ["Gold Foil", "Black Label", "Yellow Label"] }],
  },
  fr_polroger_swc: {
    fact: "Cuvée de prestige créée à partir du millésime 1975 en hommage à Churchill, fidèle toute sa vie à Pol Roger. Un style puissant dominé par le pinot noir, comme il l’aimait.",
    quiz: [
      { q: "À la mort de Churchill en 1965, qu’a fait Pol Roger sur les étiquettes destinées au Royaume-Uni ?", a: "Il les a bordées d’un liseré noir", x: ["Il y a ajouté le portrait de Churchill", "Il a arrêté la production cette année-là", "Il a peint les bouteilles en rouge"] },
      { q: "Quel nom Churchill a-t-il donné à l’un de ses chevaux de course, en hommage à Odette Pol-Roger ?", a: "Pol Roger", x: ["Champagne", "Victory", "Blenheim"] },
    ],
  },
  fr_lp_lacuvee: {
    fact: "Le brut sans année phare de la maison née à Tours-sur-Marne en 1812. Riche en chardonnay, il est limpide et frais.",
    quiz: [{ q: "Qui a dirigé Laurent-Perrier à partir de 1949 et en a fait une maison de renommée mondiale ?", a: "Bernard de Nonancourt", x: ["Pierre Taittinger", "Lily Bollinger", "Joseph Krug"] }],
  },
  fr_lp_rose: {
    fact: "Lancé en 1968 dans une bouteille blasonnée inspirée d’un flacon de l’époque d’Henri IV. Élaboré à 100 % en pinot noir, il fait référence parmi les champagnes rosés.",
    quiz: [{ q: "Comment le Laurent-Perrier Cuvée Rosé obtient-il sa couleur ?", a: "Par macération des peaux de pinot noir", x: ["Par ajout de vin rouge", "Par ajout de colorant végétal", "Par un long élevage en fût de chêne"] }],
  },
  fr_lp_gs: {
    fact: "La cuvée suprême de Laurent-Perrier, qui assemble trois grandes années pour recréer « l’année parfaite ». Chaque édition porte un numéro d’« itération ».",
    quiz: [
      { q: "En quoi Grand Siècle de Laurent-Perrier diffère-t-il de la plupart des champagnes de prestige ?", a: "Il assemble trois grands millésimes", x: ["Il n’utilise que des raisins d’une seule année", "Il n’existe qu’en rosé", "Il vieillit 10 ans en fût de chêne"] },
      { q: "Quel roi régnait sur le « Grand Siècle » auquel renvoie ce nom ?", a: "Louis XIV", x: ["Louis XVI", "Napoléon Ier", "Henri IV"] },
    ],
  },
  fr_r_ruinart: {
    fact: "Le brut sans année phare de Ruinart, première maison de Champagne, fondée en 1729. Il est présenté dans une bouteille ronde inspirée des flacons du XVIIIe siècle.",
    quiz: [{ q: "Comment appelle-t-on les caves de Ruinart où vieillit le R de Ruinart, d’anciennes carrières de craie creusées dès l’époque romaine ?", a: "Crayères", x: ["Cuverie", "Chai", "Bodega"] }],
  },
  fr_dom_ruinart: {
    fact: "La cuvée de prestige de Ruinart, 100 % chardonnay grand cru, produite seulement les grandes années. Indice : sa robe dorée dans une bouteille ronde transparente.",
    quiz: [{ q: "Quel moine, qui aurait poussé son neveu à se lancer dans le champagne, le nom Dom Ruinart honore-t-il ?", a: "Dom Thierry Ruinart", x: ["Dom Pierre Pérignon", "Saint Bernard", "Saint Remi"] }],
  },
  fr_pj_grandbrut: {
    fact: "Le brut sans année phare de Perrier-Jouët, maison née à Épernay en 1811. Riche en pinot noir et en pinot meunier, il est très fruité.",
    quiz: [
      { q: "D’où vient le nom de la maison Perrier-Jouët, qui produit le Grand Brut ?", a: "Des noms du couple fondateur", x: ["De deux noms de villages", "Des prénoms de deux frères fondateurs", "De deux vignobles champenois"] },
      { q: "Quelle fleur, dessinée par l’artiste Art nouveau Émile Gallé, symbolise Perrier-Jouët ?", a: "L’anémone", x: ["La rose", "Le lys", "La tulipe"] },
    ],
  },
  fr_pj_blason: {
    fact: "Champagne rosé dont l’étiquette reprend les armoiries de la famille Perrier-Jouët. L’ajout de vin rouge de pinot noir lui donne ses arômes de fruits rouges.",
    quiz: [{ q: "Que signifie « blason » dans Perrier-Jouët Blason Rosé ?", a: "Les armoiries d’une famille", x: ["Une fleur de rose", "Une reine", "Un premier amour"] }],
  },
  fr_armand_rose: {
    fact: "Rosé en bouteille plaquée de métal rose, ornée d’une étiquette en étain en forme de pique. En 2014, le rappeur Jay-Z a racheté la marque.",
    quiz: [
      { q: "Quel surnom l’Armand de Brignac Rosé doit-il à la forme de l’étiquette en étain de sa bouteille ?", a: "Ace of Spades", x: ["King of Hearts", "Queen of Diamonds", "Joker"] },
      { q: "Quel rappeur américain a racheté Armand de Brignac en 2014 ?", a: "Jay-Z", x: ["Kanye West", "Snoop Dogg", "Drake"] },
    ],
  },
  fr_piper: {
    fact: "Champagne reconnaissable au premier coup d’œil à son étiquette rouge vif. Il a longtemps été le champagne officiel du Festival de Cannes.",
    quiz: [{ q: "À quelle reine le fondateur de Piper-Heidsieck aurait-il dédié sa première cuvée ?", a: "Marie-Antoinette", x: ["L’impératrice Joséphine", "La reine Victoria", "Catherine de Médicis"] }],
  },
  fr_charles_heidsieck: {
    fact: "Maison fondée en 1851 par Charles-Camille Heidsieck. Généreux en vins de réserve, son brut sans année est réputé pour sa complexité.",
    quiz: [{ q: "Qu’est-il arrivé au fondateur de Charles Heidsieck, surnommé « Champagne Charlie » aux États-Unis ?", a: "Emprisonné pour espionnage pendant la guerre de Sécession", x: ["Il a survécu au naufrage du Titanic", "Il s’est engagé dans l’armée de Napoléon", "Il a fait fortune pendant la ruée vers l’or"] }],
  },
  fr_feuillatte: {
    fact: "Marque créée en 1976 par une union de coopératives regroupant de très nombreux vignerons. C’est l’un des champagnes les plus vendus en France.",
    quiz: [{ q: "Quelle est la particularité de la structure qui produit le champagne Nicolas Feuillatte ?", a: "Une union de coopératives de milliers de vignerons", x: ["Une famille noble établie depuis le XVIIe siècle", "Un domaine en monopole sur un seul vignoble", "Une maison réservée à la cour impériale russe"] }],
  },
  fr_mumm: {
    fact: "Maison fondée à Reims en 1827 par la famille Mumm, originaire d’Allemagne. Elle est célèbre pour le ruban rouge qui barre son étiquette en diagonale.",
    quiz: [
      { q: "Qu’est-ce qui a inspiré le ruban rouge du Mumm Cordon Rouge ?", a: "Le grand cordon rouge de la Légion d’honneur", x: ["Le drapeau français", "La barrette rouge des cardinaux", "Les armoiries de la cour impériale russe"] },
      { q: "De quelle compétition le Mumm Cordon Rouge a-t-il longtemps été le champagne du podium à partir de 2000 ?", a: "Formule 1", x: ["Tour de France", "Wimbledon", "Coupe du monde de la FIFA"] },
    ],
  },
  fr_lanson_black: {
    fact: "Le brut sans année phare de la maison née à Reims en 1760. Élaboré sans fermentation malolactique, il garde une acidité vive qui évoque la pomme.",
    quiz: [
      { q: "Quel emblème de la maison figure sur le col du Lanson Le Black Label ?", a: "La croix de Malte", x: ["La fleur de lys", "Un lion", "Une couronne"] },
      { q: "De quel tournoi de tennis Lanson est-il le champagne officiel depuis 1977 ?", a: "Wimbledon", x: ["Roland-Garros", "US Open", "Open d’Australie"] },
    ],
  },
  fr_billecart_rose: {
    fact: "Champagne rosé célèbre pour sa pâle robe saumonée dans une bouteille transparente. Un assemblage riche en chardonnay, relevé d’un peu de vin rouge de pinot noir, lui donne sa finesse.",
    quiz: [{ q: "D’où vient le nom Billecart-Salmon ?", a: "Des noms du couple fondateur, marié en 1818", x: ["De la couleur saumon de son rosé", "De deux noms de villages", "Des surnoms de deux frères fondateurs"] }],
  },
  fr_selosse_initial: {
    fact: "Épicentre de l’engouement pour les champagnes de vignerons, élaborés avec leurs propres raisins. Fermentés en fût comme en Bourgogne, ce sont des champagnes très vineux.",
    quiz: [
      { q: "Qui, à la tête de Jacques Selosse, a lancé l’engouement pour les champagnes de vignerons ?", a: "Anselme Selosse", x: ["Rémi Krug", "Bernard de Nonancourt", "Charles Philipponnat"] },
      { q: "Que signifie la mention « RM » sur l’étiquette d’un champagne de vigneron comme Jacques Selosse ?", a: "Récoltant-manipulant", x: ["Négociant-manipulant", "Coopérative de manipulation", "Marque d’acheteur"] },
    ],
  },
  fr_philipponnat_goisses: {
    fact: "Clos de 5,5 ha sur un coteau plein sud incliné à près de 45 degrés, qui domine la Marne. Plus chaud que le reste de la Champagne, il donne des champagnes puissants.",
    quiz: [{ q: "Quelle place le Clos des Goisses de Philipponnat occupe-t-il dans l’histoire du champagne ?", a: "Il passe pour le premier champagne d’un seul vignoble", x: ["Le premier champagne rosé", "Le premier champagne brut", "Le premier blanc de blancs"] }],
  },
  fr_deutz: {
    fact: "Maison fondée à Aÿ en 1838 par deux Allemands, William Deutz et Pierre-Hubert Geldermann. Ses trois cépages assemblés à parts presque égales lui donnent un bel équilibre.",
    quiz: [{ q: "Quelle maison de Champagne a racheté Deutz en 1993 ?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] }],
  },
  fr_henriot: {
    fact: "Maison familiale fondée à Reims en 1808 par Apolline Henriot. Elle est connue pour son style délicat, riche en chardonnay.",
    quiz: [{ q: "Quelles grandes maisons de Bourgogne la famille Henriot a-t-elle achetées dans les années 1990 ?", a: "Bouchard Père & Fils et William Fèvre", x: ["Louis Jadot et Joseph Drouhin", "Louis Latour et Faiveley", "Leroy et Leflaive"] }],
  },
  fr_gosset: {
    fact: "La plus ancienne maison de vins de Champagne, née à Aÿ en 1584 quand Pierre Gosset y élaborait des vins tranquilles. Sa bouteille reprend la forme d’un flacon ancien.",
    quiz: [{ q: "Quelle année de fondation fait de Gosset la plus ancienne maison de vins de Champagne ?", a: "1584", x: ["1729", "1743", "1811"] }],
  },
  fr_pommery: {
    fact: "Maison rémoise développée par Madame Louise Pommery, devenue veuve. Elle est célèbre pour ses immenses caves qui relient d’anciennes carrières de craie romaines.",
    quiz: [
      { q: "Quel style Pommery, producteur du Brut Royal, a-t-il lancé en 1874, changeant l’histoire du champagne ?", a: "Le brut, presque sans sucre", x: ["Le champagne rosé", "Le champagne millésimé", "Le blanc de blancs"] },
      { q: "Quelle femme dirigeait Pommery lorsque la maison a lancé le premier champagne brut ?", a: "Madame Louise Pommery", x: ["Madame Clicquot", "Lily Bollinger", "Carol Duval-Leroy"] },
    ],
  },
  fr_duval_leroy: {
    fact: "Maison familiale née en 1859 à Vertus, dans la Côte des Blancs. Fait rare parmi les grandes maisons, elle est toujours dirigée par la famille fondatrice.",
    quiz: [{ q: "Quelle dirigeante a pris la tête de Duval-Leroy après la mort de son mari en 1991 ?", a: "Carol Duval-Leroy", x: ["Lily Bollinger", "Madame Clicquot", "Louise Pommery"] }],
  },
  fr_ayala: {
    fact: "Maison fondée à Aÿ en 1860 par Edmond de Ayala. Elle s’est fait très tôt un nom avec des champagnes secs, peu dosés.",
    quiz: [{ q: "Quelle maison de Champagne a racheté Ayala en 2005 ?", a: "Bollinger", x: ["LVMH", "Louis Roederer", "Taittinger"] }],
  },
  fr_delamotte: {
    fact: "Maison fondée en 1760, l’une des plus anciennes de Champagne. Elle élabore ses vins avec des chardonnays grands crus de la Côte des Blancs.",
    quiz: [{ q: "Quel champagne légendaire, maison sœur et mitoyenne de Delamotte, est élaboré avec le chardonnay d’un seul village et seulement les grandes années ?", a: "Salon", x: ["Krug Clos du Mesnil", "Dom Ruinart", "Taittinger Comtes de Champagne"] }],
  },
  fr_dagueneau_silex: {
    fact: "Le vin phare de Didier Dagueneau, « l’enfant terrible de la Loire », qui hissa Pouilly-Fumé au sommet mondial du sauvignon blanc. Depuis sa mort dans un accident d’ULM en 2008, son fils Louis-Benjamin a pris la relève.",
    quiz: [{ q: "À quoi renvoie le nom « Silex » de Didier Dagueneau ?", a: "Un sol de silex", x: ["Une étiquette argentée", "« Silence » en latin", "Le nom du chien du fondateur"] }],
  },
  fr_ladoucette: {
    fact: "Le vin de la famille de Ladoucette, plus grand propriétaire de Pouilly-Fumé. Son fief est le Château du Nozet, digne d’un conte de fées.",
    quiz: [{ q: "Quel château est le fief de la famille de Ladoucette, qui produit ce pouilly-fumé ?", a: "Château du Nozet", x: ["Château de Tracy", "Château-Grillet", "Château de Saumur"] }],
  },
  fr_bourgeois_sancerre: {
    fact: "Le sancerre phare d’une famille établie depuis des générations à Chavignol, sur la commune de Sancerre. Il fait figure de modèle du sauvignon blanc vif.",
    quiz: [
      { q: "Où Henri Bourgeois a-t-il fondé en 2000 un nouveau domaine, le Clos Henri, en quête de sauvignon blanc ?", a: "Marlborough, Nouvelle-Zélande", x: ["Casablanca, Chili", "Stellenbosch, Afrique du Sud", "Napa Valley, États-Unis"] },
      { q: "Pour quoi d’autre le village de Chavignol, où se trouve Henri Bourgeois, est-il célèbre ?", a: "Le crottin de Chavignol, fromage de chèvre", x: ["Les huîtres", "Les truffes", "La moutarde"] },
    ],
  },
  fr_jolivet_sancerre: {
    fact: "Jeune maison partie sans vignes, comme négociant, devenue une référence de la Loire orientale. Elle produit à la fois du sancerre et du pouilly-fumé.",
    quiz: [{ q: "En quelle année Pascal Jolivet a-t-il fondé la maison qui porte son nom ?", a: "1987", x: ["1808", "1920", "1961"] }],
  },
  fr_vacheron_sancerre: {
    fact: "Domaine familial installé au cœur du bourg de Sancerre. Il vinifie parcelle par parcelle des sauvignons blancs cultivés en biodynamie.",
    quiz: [{ q: "Quel autre vin du Domaine Vacheron est très apprécié, chose rare à ce niveau à Sancerre ?", a: "Un rouge de pinot noir", x: ["Un rouge de cabernet sauvignon", "Un liquoreux botrytisé", "Un vin muté"] }],
  },
  fr_huet_vouvray: {
    fact: "Grande maison de chenin blanc, emblème de Vouvray. Selon le millésime, un même vignoble y donne du sec, du demi-sec ou du moelleux.",
    quiz: [{ q: "Outre Le Mont et le Clos du Bourg, quel est le troisième vignoble célèbre du Domaine Huet ?", a: "Le Haut-Lieu", x: ["La Roche aux Moines", "Clos de la Dioterie", "Les Baronnes"] }],
  },
  fr_joly_coulee: {
    fact: "Vignoble planté pour la première fois en 1130 par des moines cisterciens. C’est l’une des rares AOC monopoles, entièrement détenue par une seule famille.",
    quiz: [{ q: "Quelle méthode de culture Nicolas Joly, du Clos de la Coulée de Serrant, a-t-il contribué à faire connaître dans le monde entier ?", a: "La biodynamie", x: ["L’hydroponie", "La culture intensive irriguée", "La culture sous serre"] }],
  },
  fr_rougeard: {
    fact: "Cabernet franc de Loire élevé au rang de vin culte mondial par les frères Charly et Nady Foucault, fidèles aux méthodes traditionnelles.",
    quiz: [{ q: "Qui, propriétaire du Château Montrose à Bordeaux, a racheté le Clos Rougeard en 2017 ?", a: "Les frères Martin et Olivier Bouygues", x: ["La famille Pinault", "La famille Arnault", "La famille Rothschild"] }],
  },
  fr_joguet_chinon: {
    fact: "Premier domaine de Chinon à commercialiser séparément ses cuvées parcellaires. Le Clos de la Dioterie, planté de vieux cabernets francs, en est le vignoble phare.",
    quiz: [{ q: "Que faisait Charles Joguet à Paris avant de reprendre les vignes familiales en 1957 ?", a: "Peintre et sculpteur", x: ["Chanteur d’opéra", "Cinéaste", "Architecte"] }],
  },
  fr_pepiere_briords: {
    fact: "Muscadet issu de vieilles vignes plantées entre les années 1930 et 1950. Le muscadet n’est pas un cépage mais une appellation, compagnon idéal des huîtres.",
    quiz: [{ q: "Que signifie la mention « sur lie » sur l’étiquette d’un muscadet comme le Clos des Briords ?", a: "Élevé sur ses lies de levures", x: ["Issu de vignes au bord du fleuve", "Vendangé tardivement", "Élevé en fût neuf"] }],
  },
  fr_trimbach_csh: {
    fact: "Monopole de 1,67 ha au cœur du grand cru Rosacker, à Hunawihr. Cultivé depuis plus de 200 ans par la famille Trimbach, c’est l’un des plus grands rieslings secs du monde.",
    quiz: [{ q: "Quelle mention Trimbach s’abstient-il volontairement d’inscrire sur l’étiquette du Clos Sainte Hune ?", a: "La mention grand cru", x: ["Le millésime", "Le cépage", "Le nom du producteur"] }],
  },
  fr_trimbach_gewurz: {
    fact: "Cépage emblématique de l’Alsace, explosif en arômes de litchi et de rose. Trimbach est réputé pour le vinifier sec, sans sucrosité.",
    quiz: [{ q: "En quelle année Trimbach, qui produit ce gewurztraminer, a-t-il commencé à faire du vin en Alsace ?", a: "1626", x: ["1639", "1731", "1919"] }],
  },
  fr_hugel_gentil: {
    fact: "Assemblage à l’alsacienne de plusieurs cépages : gewurztraminer, pinot gris, riesling, sylvaner… « Gentil » était l’ancien nom des assemblages de cépages nobles.",
    quiz: [{ q: "En quelle année la famille Hugel, qui produit le Gentil, a-t-elle commencé à faire du vin à Riquewihr ?", a: "1639", x: ["1626", "1789", "1919"] }],
  },
  fr_hugel_riesling: {
    fact: "Le riesling phare de Hugel, célèbre pour son étiquette jaune. C’est l’une des bouteilles par lesquelles on découvre le plus souvent les vins d’Alsace.",
    quiz: [
      { q: "De quelle couleur est l’étiquette qui rend les vins Hugel, comme ce riesling, reconnaissables de loin ?", a: "Jaune", x: ["Noire", "Bleue", "Rouge"] },
      { q: "Quelles mentions alsaciennes de vins doux Jean Hugel a-t-il fait réglementer dans les années 1980 ?", a: "Vendanges tardives et sélection de grains nobles", x: ["Grand cru et premier cru", "Crémant d’Alsace", "Vin de table"] },
    ],
  },
  fr_zind_rangen: {
    fact: "Vignoble accroché aux pentes volcaniques abruptes du Rangen, grand cru le plus méridional d’Alsace. Le domaine Zind-Humbrecht est né en 1959 de l’union des vignes de deux familles.",
    quiz: [{ q: "Quel titre Olivier Humbrecht, à la tête de Zind-Humbrecht, a-t-il été le premier Français à obtenir, en 1989 ?", a: "Master of Wine (MW)", x: ["Master Sommelier (MS)", "Diplôme national d’œnologue (DNO)", "Meilleur ouvrier de France (MOF)"] }],
  },
  fr_weinbach_schlossberg: {
    fact: "Domaine installé dans le Clos des Capucins, mis en valeur en 1612 par des moines capucins. La famille Faller le dirige depuis 1898.",
    quiz: [
      { q: "Qui a mis en valeur le premier, en 1612, le Clos des Capucins du Domaine Weinbach ?", a: "Des moines capucins", x: ["Des religieuses cisterciennes", "Les Templiers", "Des pères jésuites"] },
      { q: "Quel record le Schlossberg, d’où vient ce vin de Weinbach, a-t-il obtenu en 1975 ?", a: "Premier grand cru d’Alsace", x: ["Plus grand vignoble coopératif d’Alsace", "Premier vignoble certifié bio d’Alsace", "Plus petite AOC de France"] },
    ],
  },
  fr_deiss_altenberg: {
    fact: "Plusieurs cépages y sont complantés dans une même parcelle, puis récoltés et vinifiés ensemble. L’étiquette affiche donc en grand le nom du lieu plutôt que le cépage.",
    quiz: [{ q: "Quelle philosophie défendait Jean-Michel Deiss, à la tête du domaine Marcel Deiss ?", a: "Le terroir avant le cépage, avec des cépages complantés", x: ["Un seul cépage à 100 %", "Des amphores plutôt que des fûts", "Uniquement des effervescents"] }],
  },
  fr_miraval: {
    fact: "L’incarnation du rosé de célébrités, dont le premier millésime date de 2012. Le Château Miraval se trouve à Correns, dans l’arrière-pays provençal.",
    quiz: [
      { q: "Quel couple de stars d’Hollywood a lancé le rosé Miraval avec la famille Perrin ?", a: "Brad Pitt et Angelina Jolie", x: ["Tom Cruise et Katie Holmes", "George et Amal Clooney", "Hugh Jackman et Deborra-Lee Furness"] },
      { q: "Quel groupe a enregistré une partie de l’album « The Wall » dans le studio du Château Miraval ?", a: "Pink Floyd", x: ["The Beatles", "The Rolling Stones", "Queen"] },
    ],
  },
  fr_minuty_m: {
    fact: "Rosé léger et vif d’une famille installée sur la presqu’île de Saint-Tropez depuis 1936. La bouteille cintrée en forme de « corset » a été imaginée par cette famille dans les années 1960.",
    quiz: [{ q: "Quel groupe est devenu en 2023 l’actionnaire majoritaire du Château Minuty, producteur du M de Minuty ?", a: "LVMH (Moët Hennessy)", x: ["Pernod Ricard", "Groupe Castel", "Artémis"] }],
  },
  fr_minuty_281: {
    fact: "Le rosé haut de gamme de Minuty, lancé en 2015. Sa signature : un décor bleu profond qui coule le long de la bouteille.",
    quiz: [{ q: "D’où vient le nombre du Château Minuty 281 ?", a: "Le numéro Pantone d’un bleu méditerranéen", x: ["Le numéro cadastral du vignoble", "Le nombre de bouteilles de la première année", "L’altitude du vignoble en mètres"] }],
  },
  fr_garrus: {
    fact: "L’un des rosés les plus chers du monde, issu de vieilles grenaches, fermenté et élevé en fût de chêne. LVMH est devenu en 2019 l’actionnaire majoritaire du Château d’Esclans.",
    quiz: [
      { q: "En quoi la vinification du Garrus du Château d’Esclans diffère-t-elle de celle des rosés de Provence classiques ?", a: "Fermentation et élevage en fût de chêne", x: ["Assemblage de vin rouge et de vin blanc", "Ajout de gaz carbonique", "Raisins passerillés"] },
      { q: "Qui a fondé le Château d’Esclans, créateur du Garrus et du Whispering Angel ?", a: "Sacha Lichine", x: ["Gérard Bertrand", "Marc Perrin", "Michel Rolland"] },
    ],
  },
  fr_rockangel: {
    fact: "Le grand frère du Whispering Angel. Fermenté en partie en fût de chêne, il est plus riche et plus rond.",
    quiz: [{ q: "Quel auteur de livres sur le vin, propriétaire du Château Prieuré-Lichine à Bordeaux, était le père de Sacha Lichine, créateur du Rock Angel ?", a: "Alexis Lichine", x: ["Robert Parker", "Émile Peynaud", "Hugh Johnson"] }],
  },
  fr_tempier: {
    fact: "Grand domaine qui a fait connaître le bandol dans le monde autour du mourvèdre. La famille Peyraud a aussi contribué à la naissance de l’AOC Bandol en 1941.",
    quiz: [{ q: "Quelle figure du Domaine Tempier, célèbre pour sa cuisine et sa table, a profondément inspiré la cheffe américaine Alice Waters ?", a: "Lulu Peyraud", x: ["Julia Child", "Paul Bocuse", "Madame Clicquot"] }],
  },
  fr_pibarnon: {
    fact: "Grand nom de Bandol qui cultive le mourvèdre sur des pentes calcaires en amphithéâtre face à la mer.",
    quiz: [{ q: "Quelle famille a acheté le Château de Pibarnon en 1977 et l’a hissé au sommet de Bandol ?", a: "La famille de Saint-Victor", x: ["La famille Peyraud", "La famille Rougier", "La famille Bertrand"] }],
  },
  fr_simone: {
    fact: "Domaine qui détient environ la moitié de la minuscule AOC Palette, près d’Aix-en-Provence. Il y élabore, autour de la clairette, des blancs capables de vieillir des décennies.",
    quiz: [{ q: "Quelle famille se transmet le Château Simone depuis 1830 ?", a: "La famille Rougier", x: ["La famille Perrin", "La famille Lichine", "La famille Ott"] }],
  },
  fr_daumas_gassac: {
    fact: "Légende du Languedoc, née en 1978 sur les conseils d’un géologue qui avait repéré ses sols de dépôts glaciaires. On l’a surnommé le « grand cru du Languedoc ».",
    quiz: [
      { q: "Quel légendaire œnologue bordelais a aidé à vinifier le premier millésime du Mas de Daumas Gassac ?", a: "Émile Peynaud", x: ["Michel Rolland", "Jules Chauvet", "Denis Dubourdieu"] },
      { q: "Quel fondateur du Mas de Daumas Gassac, opposé à l’implantation de Robert Mondavi à Aniane, apparaît dans le film « Mondovino » ?", a: "Aimé Guibert", x: ["Gérard Bertrand", "Alain Brumont", "Sacha Lichine"] },
    ],
  },
  fr_bertrand_cdr: {
    fact: "Rosé dont le fond de bouteille est façonné en rose épanouie. Ce design, signé d’un jeune designer, a remporté un concours en 2010.",
    quiz: [
      { q: "Quelle est la particularité de la bouteille de Côte des Roses de Gérard Bertrand ?", a: "Son fond a la forme d’une rose", x: ["Elle a la forme d’un cœur", "Elle est en verre bleu", "Son étiquette est en braille"] },
      { q: "Dans quel sport Gérard Bertrand, créateur du Côte des Roses, s’est-il illustré avant de se consacrer au vin ?", a: "Le rugby", x: ["Le football", "Le cyclisme", "Le tennis"] },
    ],
  },
  fr_cedre: {
    fact: "Domaine familial emblématique de Cahors, berceau du malbec. Ses vignes cultivées en bio donnent des malbecs sombres et puissants.",
    quiz: [{ q: "Quel surnom les vins de Cahors, comme le Château du Cèdre, devaient-ils autrefois à leur couleur très sombre ?", a: "Le vin noir", x: ["Le vin de sang", "Le vin de la nuit", "Le vin d’encre"] }],
  },
  fr_montus: {
    fact: "Le fleuron de Madiran, 100 % tannat. Alain Brumont, qui acheta le domaine en 1980, a fait de ce cépage réputé rustique un grand vin.",
    quiz: [{ q: "Qui a redonné son prestige à Madiran avec le Château Montus ?", a: "Alain Brumont", x: ["Gérard Bertrand", "Aimé Guibert", "Sacha Lichine"] }],
  },
  fr_cauhape: {
    fact: "Vin doux de vendanges tardives, élaboré avec du petit manseng passerillé sur souche jusqu’à la fin de l’automne. Son nom évoque ces vendanges de novembre.",
    quiz: [{ q: "Selon une légende liée au Jurançon, région de ce vin, quel roi de France eut à sa naissance les lèvres frottées d’ail et humectées de jurançon ?", a: "Henri IV", x: ["Louis XIV", "Charlemagne", "Napoléon Ier"] }],
  },
  fr_macle: {
    fact: "Le sommet du vin jaune, élevé plus de six ans en fût sous un voile de levures qui se forme à la surface du vin. Arômes de noix et d’épices.",
    quiz: [
      { q: "Quelle est la contenance du clavelin, bouteille traditionnelle du vin jaune comme le Château-Chalon de Jean Macle ?", a: "62 cl", x: ["75 cl", "50 cl", "37,5 cl"] },
      { q: "Quelle est la durée minimale d’élevage du vin jaune sous voile, en fût ?", a: "6 ans et 3 mois", x: ["1 an", "3 ans", "10 ans"] },
    ],
  },
  fr_tissot_poulsard: {
    fact: "Domaine phare du Jura, conduit en biodynamie par Stéphane Tissot. Le poulsard est un cépage rouge autochtone du Jura, à la robe aussi pâle qu’un rosé.",
    quiz: [{ q: "Quel scientifique, qui a grandi à Arbois où se trouve le Domaine Tissot, y cultivait une vigne pour étudier la fermentation ?", a: "Louis Pasteur", x: ["Marie Curie", "Antoine Lavoisier", "Charles Darwin"] }],
  },
};

export default T;
