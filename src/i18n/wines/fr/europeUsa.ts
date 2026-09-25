import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  eu_prum_wehlener: {
    fact: "Producteur phare de la Wehlener Sonnenuhr, vignoble nommé d’après le cadran solaire dressé sur ses pentes. Réputé pour ses Riesling d’une douceur délicate, fermés dans leur jeunesse puis capables de vieillir plusieurs décennies.",
    quiz: [{ q: "Que signifie « Sonnenuhr » dans Joh. Jos. Prüm Wehlener Sonnenuhr ?", a: "Cadran solaire", x: ["Jardin au clair de lune", "Clocher", "Moulin à eau"] }],
  },
  eu_loosen_praelat: {
    fact: "Riesling de l’Erdener Prälat, souvent cité comme le vignoble le plus chaud de la Mosel, abrité du vent par des falaises d’ardoise rouge. La parcelle est petite et la production très limitée.",
    quiz: [{ q: "Qui a repris le domaine familial en 1988 et fait connaître Dr. Loosen Erdener Prälat au monde entier ?", a: "Ernst Loosen", x: ["Egon Müller", "Johannes Selbach", "Carl von Schubert"] }],
  },
  eu_christoffel_urzig: {
    fact: "Les pentes abruptes du village d’Ürzig mêlent à l’ardoise un sol volcanique rouge, rare dans la Mosel. Elles donnent des Riesling réputés pour leurs notes d’épices exotiques.",
    quiz: [{ q: "Que signifie « Würzgarten » dans Ürziger Würzgarten ?", a: "Jardin d’épices", x: ["Cave à vin", "Jardin des remparts", "Colline du soleil"] }],
  },
  eu_schloss_johannisberg: {
    fact: "Château du Rheingau qui classe ses vins selon la couleur de la capsule : jaune, verte, rose ou or. La capsule verte (Grünlack) désigne la Spätlese.",
    quiz: [
      { q: "Quelle catégorie serait née à Schloss Johannisberg en 1775, lorsque le messager chargé d’apporter l’autorisation de vendanger arriva en retard ?", a: "Spätlese (vendange tardive)", x: ["Eiswein", "Kabinett", "Grosses Gewächs"] },
      { q: "Quel homme d’État reçut Schloss Johannisberg en cadeau de l’empereur d’Autriche en 1816 ?", a: "Metternich", x: ["Bismarck", "Talleyrand", "Richelieu"] },
    ],
  },
  eu_weil_grafenberg: {
    fact: "Domaine fondé en 1875 à Kiedrich par le Dr Robert Weil, ancien professeur d’allemand à la Sorbonne. Son vin phare est le Riesling du vignoble escarpé du Gräfenberg.",
    quiz: [{ q: "Quelle entreprise japonaise est devenue l’actionnaire majoritaire du domaine Robert Weil en 1988 ?", a: "Suntory", x: ["Kirin", "Asahi", "Sapporo"] }],
  },
  eu_keller_gmax: {
    fact: "Riesling de la famille Keller, qui a hissé la Rheinhessen au rang de région de renommée mondiale. Produit en quantités infimes à partir de vieilles vignes, il passe pour le Riesling sec allemand le plus cher.",
    quiz: [{ q: "Pourquoi dit-on du Keller G-Max qu’il est un vin mystérieux ?", a: "L’emplacement de ses vignes reste secret", x: ["Un peintre différent dessine l’étiquette chaque année", "Il n’est élaboré qu’en Eiswein", "Il vieillit au fond de la mer"] }],
  },
  eu_donnhoff_hermannshohle: {
    fact: "Helmut Dönnhoff a propulsé la petite région de la Nahe sur la scène mondiale. Mêlant ardoise et roche volcanique, la Hermannshöhle est considérée comme le meilleur vignoble de la Nahe.",
    quiz: [{ q: "Quel fils dirige aujourd’hui Dönnhoff à la suite de son père Helmut ?", a: "Cornelius Dönnhoff", x: ["Ernst Loosen", "Klaus Peter Keller", "Philipp Wittmann"] }],
  },
  eu_haag_juffer: {
    fact: "Riesling du coteau de la Juffer-Sonnenuhr, qui fait face au village de Brauneberg sur l’autre rive. La famille Haag y élabore de génération en génération des vins délicats et de longue garde.",
    quiz: [{ q: "D’où vient le mot « Juffer » dans Fritz Haag Brauneberger Juffer ?", a: "Demoiselle (jeune fille)", x: ["Rempart", "Renard", "Soleil"] }],
  },
  eu_grunhaus_abtsberg: {
    fact: "Ce vignoble des bords de la Ruwer apparaît dans les textes dès le Xe siècle. Aux mains de la famille von Schubert depuis la fin du XIXe siècle, il conserve une étiquette dessinée vers 1900.",
    quiz: [
      { q: "Qui a été le premier à cultiver le vignoble de Maximin Grünhaus ?", a: "L’abbaye Saint-Maximin de Trèves", x: ["La cathédrale de Cologne", "La maison royale de Prusse", "L’université de Heidelberg"] },
      { q: "Pour quel style l’étiquette de Maximin Grünhaus est-elle célèbre ?", a: "Art nouveau (Jugendstil)", x: ["Bauhaus", "Pop art", "Rococo"] },
    ],
  },
  eu_selbach_zeltinger: {
    fact: "Domaine de la famille Selbach, vignerons depuis des générations au village de Zeltingen. Son vin phare est le Riesling du coteau escarpé de la Sonnenuhr, où se dresse un cadran solaire.",
    quiz: [{ q: "Quel grand vignoble du village voisin prolonge le même coteau que la Zeltinger Sonnenuhr de Selbach-Oster ?", a: "Wehlener Sonnenuhr", x: ["Piesporter Goldtröpfchen", "Bernkasteler Doctor", "Scharzhofberg"] }],
  },
  eu_schloss_vollrads: {
    fact: "Château du Rheingau considéré comme l’un des plus anciens domaines viticoles du monde. Sa tour médiévale entourée de douves en est l’emblème.",
    quiz: [{ q: "De quelle année date le plus ancien document attestant une vente de vin par Schloss Vollrads ?", a: "1211", x: ["1775", "1855", "1920"] }],
  },
  eu_kloster_eberbach: {
    fact: "Domaine monastique fondé en 1136 par des moines cisterciens. Le vignoble du Steinberg, que les moines ont entouré de murs, est souvent comparé au Clos de Vougeot en Bourgogne.",
    quiz: [{ q: "Quel film avec Sean Connery a été tourné à l’abbaye de Kloster Eberbach ?", a: "Le Nom de la rose", x: ["Indiana Jones et la Dernière Croisade", "Les Incorruptibles", "Goldfinger"] }],
  },
  eu_kunstler_holle: {
    fact: "Grande maison de Hochheim, à l’extrémité est du Rheingau, là où le Main rejoint le Rhin. Ses Riesling secs et puissants font référence dans le Rheingau.",
    quiz: [{ q: "Quel surnom donné par les Anglais aux vins du Rhin vient de Hochheim, village de Künstler Hochheimer Hölle ?", a: "Hock", x: ["Claret", "Sack", "Bubbly"] }],
  },
  eu_wittmann_morstein: {
    fact: "Riesling sec du Morstein, vignoble calcaire de Westhofen cultivé en biodynamie par la famille Wittmann. Il compte parmi les plus grands crus de la Rheinhessen.",
    quiz: [{ q: "Qui conduit le domaine Wittmann en biodynamie et élabore le Morstein ?", a: "Philipp Wittmann", x: ["Klaus Peter Keller", "Helmut Dönnhoff", "Johannes Leitz"] }],
  },
  eu_burklin_kirchenstuck: {
    fact: "Grand domaine familial de Wachenheim, dans la Pfalz, conduit en biodynamie. Le Kirchenstück, petite parcelle voisine de l’église, passe pour le vignoble le plus précieux de la Pfalz.",
    quiz: [{ q: "Sur quel modèle reposent les mentions « G.C. » et « P.C. » des étiquettes de Dr. Bürklin-Wolf ?", a: "La Bourgogne", x: ["Le classement bordelais de 1855", "Les mentions d’élevage de la Rioja", "L’échelle des crus de Champagne"] }],
  },
  eu_black_tower: {
    fact: "Marque de vin allemand née à la fin des années 1960, devenue très populaire au Royaume-Uni et dans le monde. Sa bouteille d’un noir profond, qui évoque la céramique, se remarque au premier coup d’œil.",
    quiz: [{ q: "À quel style de vin blanc allemand léger et doux appartenait Black Tower à ses débuts ?", a: "Liebfraumilch", x: ["Eiswein", "Sekt", "Trockenbeerenauslese"] }],
  },
  eu_wirsching_silvaner: {
    fact: "Domaine familial d’Iphofen, en Franconie, transmis de génération en génération. Sur les marnes gypseuses des contreforts du Steigerwald, il élabore des Silvaner aux notes terreuses, mis en Bocksbeutel.",
    quiz: [{ q: "Qui était Julius Echter, qui a donné son nom à l’Iphöfer Julius-Echter-Berg de Hans Wirsching ?", a: "Un prince-évêque de Wurtzbourg (XVIe-XVIIe s.)", x: ["Un roi de Bavière", "Un réformateur protestant", "Un obtenteur de cépages"] }],
  },
  eu_molitor_himmelreich: {
    fact: "Domaine repris très jeune par Markus Molitor, qui l’a hissé parmi l’élite de la Mosel. « Himmelreich » signifie « royaume des cieux ».",
    quiz: [{ q: "Qu’indique la couleur de la capsule (blanche, verte, dorée) des bouteilles de Markus Molitor ?", a: "Le niveau de douceur", x: ["Le sol du vignoble", "La durée d’élevage", "Le mois des vendanges"] }],
  },
  eu_thanisch_doctor: {
    fact: "Riesling du Doctor, petit vignoble réputé sur le coteau abrupt qui domine le village de Bernkastel. Il a longtemps figuré parmi les terres viticoles les plus chères d’Allemagne.",
    quiz: [{ q: "De quelle légende vient le nom « Doctor » (médecin) du Berncasteler Doctor de Dr. H. Thanisch ?", a: "Un archevêque de Trèves malade guérit en buvant son vin", x: ["Un grand hôpital jouxtait le vignoble", "Le médecin de Napoléon s’en servait comme remède", "Les vendangeurs portaient des blouses de médecin"] }],
  },
  eu_leitz_einszweidry: {
    fact: "Riesling sec, léger et vif, élaboré par Johannes Leitz à Rüdesheim, là où le Rhin fait un coude. Son prix abordable lui vaut un succès mondial.",
    quiz: [{ q: "Sur quel jeu de mots repose le nom Leitz « Eins Zwei Dry » ?", a: "Le « drei » (trois) de « un, deux, trois » devient l’anglais « dry »", x: ["Les numéros des symphonies de Beethoven", "Les prénoms des trois frères Leitz", "Une vinification filtrée trois fois"] }],
  },
  eu_fxpichler_kellerberg: {
    fact: "Domaine que la famille Pichler d’Oberloiben a hissé au sommet de la Wachau. Le Smaragd du Kellerberg, qui domine le Danube, allie puissance et profondeur.",
    quiz: [{ q: "D’où vient le nom de la catégorie « Smaragd » sur l’étiquette de F.X. Pichler ?", a: "Un lézard vert émeraude qui vit dans les murets des vignes", x: ["Une mine d’émeraudes voisine", "Un joyau de la couronne des Habsbourg", "Une bouteille verte"] }],
  },
  eu_knoll_schutt: {
    fact: "Un classique de la Wachau, élaboré de génération en génération par la famille Knoll à Unterloiben. Fidèle à la tradition plutôt qu’aux modes, elle produit des vins qui s’épanouissent avec l’âge.",
    quiz: [{ q: "Quel saint figure sur l’étiquette de Knoll ?", a: "Saint Urbain, patron des vignerons", x: ["Saint Pierre", "Saint Nicolas", "Saint Georges"] }],
  },
  eu_prager_achleiten: {
    fact: "Grande maison de Weissenkirchen, en Wachau. Sous la direction de Toni Bodenstein, elle s’est illustrée avec les Riesling très minéraux de l’Achleiten, vignoble en terrasses escarpées soutenues par des murets de pierre.",
    quiz: [{ q: "Quel fleuve le vignoble de l’Achleiten de Prager surplombe-t-il ?", a: "Le Danube", x: ["Le Rhin", "La Moselle", "L’Elbe"] }],
  },
  eu_hirtzberger_singerriedel: {
    fact: "Grande maison de Spitz, village de l’ouest de la Wachau. Son vin phare est le Riesling Smaragd du Singerriedel, vignoble en terrasses escarpées situé derrière le village.",
    quiz: [{ q: "Dans la classification « Vinea Wachau » créée en 1983 par des producteurs comme Hirtzberger, quelle catégorie désigne les vins les plus légers ?", a: "Steinfeder", x: ["Smaragd", "Kabinett", "Grosses Gewächs"] }],
  },
  eu_brundlmayer_heiligenstein: {
    fact: "Grande maison de Langenlois, dans le Kamptal, développée par Willi Bründlmayer. Elle est réputée pour les Riesling de la colline escarpée du Heiligenstein et pour ses effervescents de méthode traditionnelle.",
    quiz: [{ q: "Que signifie le nom du vignoble Heiligenstein de Bründlmayer ?", a: "Pierre (rocher) sacrée", x: ["Colline blanche", "Puits du saint", "Tombeau du héros"] }],
  },
  eu_kracher_tba: {
    fact: "À Illmitz, au bord du lac de Neusiedl, les brumes favorisent la pourriture noble et donnent des liquoreux de classe mondiale. Le regretté Alois Kracher a porté les vins de dessert autrichiens au sommet.",
    quiz: [{ q: "Comment s’appelle la série de Trockenbeerenauslese de Kracher élevée en fûts de chêne neufs ?", a: "Nouvelle Vague", x: ["Zwischen den Seen", "Smaragd", "Grand Cru Classé"] }],
  },
  eu_domane_wachau: {
    fact: "Cave coopérative réunissant de nombreux vignerons de la Wachau. Elle a pour siège le « Kellerschlössel », chai baroque de Dürnstein.",
    quiz: [
      { q: "Quel roi fut emprisonné à la fin du XIIe siècle dans le château de Dürnstein, où se trouve Domäne Wachau ?", a: "Richard Cœur de Lion, roi d’Angleterre", x: ["Louis IX de France", "Frédéric Ier du Saint-Empire", "Robert Ier d’Écosse"] },
      { q: "Quel nom portait Domäne Wachau avant d’en changer en 2008 ?", a: "Freie Weingärtner Wachau", x: ["Cave royale de la Wachau", "Union vinicole du Danube", "Domaine de l’abbaye de Dürnstein"] },
    ],
  },
  eu_moric_blaufrankisch: {
    fact: "Domaine du Burgenland fondé en 2001. À partir de vieilles vignes de Blaufränkisch, il élabore des rouges d’une finesse bourguignonne qui ont changé la réputation de ce cépage.",
    quiz: [{ q: "Quel vigneron a fondé Moric et fait connaître le Blaufränkisch dans le monde ?", a: "Roland Velich", x: ["Alois Kracher", "Willi Bründlmayer", "Emmerich Knoll"] }],
  },
  eu_royaltokaji_essencia: {
    fact: "On ne recueille que le jus qui s’écoule des baies botrytisées entassées sous leur propre poids, puis on le laisse fermenter très lentement pendant des années. Il ne titre que quelques degrés et reste épais comme du miel.",
    quiz: [{ q: "Quel auteur britannique spécialiste du vin a cofondé Royal Tokaji en 1990 ?", a: "Hugh Johnson", x: ["Jancis Robinson", "Robert Parker", "Michael Broadbent"] }],
  },
  eu_oremus_aszu: {
    fact: "Domaine de Tolcsva qui tire son nom du vignoble Oremus, berceau légendaire du premier Tokaji Aszú. « Oremus » signifie « prions » en latin.",
    quiz: [{ q: "Quelle grande maison espagnole a racheté Oremus en 1993 ?", a: "Vega Sicilia", x: ["Marqués de Riscal", "Torres", "Bodegas Muga"] }],
  },
  eu_disznoko_aszu: {
    fact: "Son nom vient d’un gros rocher en forme de sanglier au milieu des vignes. C’est l’un des domaines qui, après la chute du régime communiste, ont mené la renaissance du Tokaji grâce à des capitaux étrangers.",
    quiz: [
      { q: "Que signifie le nom Disznókő ?", a: "Rocher du cochon (sanglier)", x: ["Colline d’or", "Source du roi", "Vallée du loup"] },
      { q: "Quelle société viticole, filiale d’un groupe d’assurance français, possède Disznókő depuis 1992 ?", a: "AXA Millésimes", x: ["LVMH", "Groupe Castel", "Baron Philippe de Rothschild"] },
    ],
  },
  eu_kefraya: {
    fact: "L’un des domaines phares du Liban, dont les vignes s’étagent en altitude sur les coteaux ouest de la vallée de la Bekaa. Cépages français et soleil libanais y donnent des rouges concentrés aux notes épicées.",
    quiz: [{ q: "Entre quelles chaînes de montagnes se trouve la vallée de la Bekaa, où est situé Château Kefraya ?", a: "Mont-Liban et Anti-Liban", x: ["Taurus et Zagros", "Caucase et Oural", "Atlas et Rif"] }],
  },
  eu_ixsir: {
    fact: "Domaine établi sur les contreforts de Batroun, dans le nord du Liban. Son nom vient du mot arabe signifiant « élixir », et il est célèbre pour ses bâtiments écologiques enterrés.",
    quiz: [{ q: "Quel cofondateur d’Ixsir a présidé Renault et Nissan ?", a: "Carlos Ghosn", x: ["Bernard Arnault", "Cheikh Mansour", "Richard Branson"] }],
  },
  eu_massaya: {
    fact: "Domaine fondé à Tanaïl, dans la vallée de la Bekaa, par les frères Ghosn, rentrés au Liban après la guerre civile, en partenariat avec de grandes maisons françaises.",
    quiz: [{ q: "Quelle grande maison de Châteauneuf-du-Pape a participé à la fondation de Massaya ?", a: "Vieux Télégraphe (famille Brunier)", x: ["Château de Beaucastel (famille Perrin)", "Château Rayas", "E. Guigal"] }],
  },
  eu_castel_grandvin: {
    fact: "Domaine familial né des vignes qu’Eli Ben Zaken avait plantées près de sa maison. Il est considéré comme le pionnier des vins haut de gamme en Israël.",
    quiz: [{ q: "Quelle ville est la plus proche des monts de Judée, où se trouve le Domaine du Castel ?", a: "Jérusalem", x: ["Haïfa", "Eilat", "Nazareth"] }],
  },
  eu_yarden_cabernet: {
    fact: "Cabernet issu de vignes plantées sur les sols volcaniques frais du plateau du Golan. Lancée dans les années 1980 par Golan Heights Winery, la marque Yarden a fait connaître le vin israélien dans le monde.",
    quiz: [{ q: "Que désigne Yarden en hébreu ?", a: "Le Jourdain", x: ["Le lac de Tibériade", "Le mont Hermon", "La mer Morte"] }],
  },
  eu_gaia_thalassitis: {
    fact: "Thalassitis, « de la mer », est un blanc salin et tranchant issu de l’Assyrtiko de Santorin, île volcanique. C’est la cuvée phare de Gaia Wines.",
    quiz: [{ q: "Quelle conduite en forme de panier, où la vigne est enroulée en cercle contre les vents violents, protège les vignes de Santorin de Gaia Thalassitis ?", a: "Kouloura", x: ["Gobelet", "Pergola", "Guyot"] }],
  },
  eu_boutari_naoussa: {
    fact: "Grand rouge du nord de la Grèce issu du Xinomavro, le « raisin noir acide ». Sa forte acidité et ses tanins lui valent le surnom de « Barolo grec ».",
    quiz: [{ q: "En quelle année Boutari a-t-il élaboré son premier vin à Naoussa ?", a: "1879", x: ["1789", "1923", "1970"] }],
  },
  eu_sigalas_assyrtiko: {
    fact: "Domaine situé près du village d’Oia, au nord de Santorin. Sur cette île où les vignes aux racines plus que centenaires sont courantes, il élabore des Assyrtiko d’une grande minéralité.",
    quiz: [{ q: "Grâce aux sols de sable volcanique de Santorin, où se trouve le Domaine Sigalas, quel ravageur les vignes ont-elles évité ?", a: "Le phylloxéra", x: ["Le ver de la grappe", "La drosophile", "Le termite"] }],
  },
  eu_tsinandali: {
    fact: "Grand blanc sec géorgien issu de Rkatsiteli et de Mtsvane. Il tient son nom du village où se trouvait le domaine de l’aristocrate qui introduisit la vinification européenne au XIXe siècle.",
    quiz: [{ q: "Quel poète aristocrate introduisit en Géorgie, depuis son domaine de Tsinandali, la vinification à l’européenne au XIXe siècle ?", a: "Alexandre Tchavtchavadzé", x: ["Chota Roustavéli", "Héraclius II", "Niko Pirosmani"] }],
  },
  eu_kindzmarauli: {
    fact: "La fermentation du Saperavi est stoppée en cours de route par le froid pour conserver une partie du sucre naturel du raisin. Ce rouge emblématique de Géorgie ne se produit que dans une zone délimitée autour de Kvareli.",
    quiz: [{ q: "Pour quel style le Kindzmarauli est-il réputé ?", a: "Demi-doux, d’une douceur naturelle", x: ["Très sec", "Muté à l’eau-de-vie", "Pétillant"] }],
  },
  eu_pheasants_tears: {
    fact: "Domaine fondé à Signagi par un paysan géorgien et un peintre américain. Son nom vient d’un vieux conte géorgien évoquant un vin si bon qu’il ferait pleurer un faisan.",
    quiz: [
      { q: "Comment s’appelle la grande jarre en argile enterrée que Pheasant’s Tears utilise pour fermenter et élever ses vins selon la tradition ?", a: "Qvevri", x: ["Barrique", "Foudre", "Solera"] },
      { q: "Quel peintre américain a cofondé Pheasant’s Tears ?", a: "John Wurdeman", x: ["Andy Warhol", "Keith Haring", "Jeff Koons"] },
    ],
  },
  eu_movia_puro: {
    fact: "Domaine d’Aleš Kristančič, dont les vignes chevauchent la frontière entre la Slovénie et l’Italie. Le Puro est commercialisé avec ses lies de levures laissées dans la bouteille.",
    quiz: [{ q: "Que doit faire soi-même le buveur avant de déguster le Movia Puro ?", a: "Ouvrir la bouteille tête en bas pour expulser le dépôt", x: ["Ajouter du sirop de sucre", "Secouer la bouteille pour la faire mousser", "Faire tremper le bouchon dans l’eau"] }],
  },
  eu_dingac: {
    fact: "Plavac Mali cultivé sur les pentes abruptes qui plongent dans la mer, au sud de la presqu’île de Pelješac. En 1961, il fut le premier vin de Croatie à obtenir une appellation d’origine protégée.",
    quiz: [{ q: "Quel animal, qui transportait le raisin dans les vignes escarpées, figure sur l’étiquette du Dingač ?", a: "L’âne", x: ["La chèvre", "Le cheval", "La vache"] }],
  },
  eu_cricova_brut: {
    fact: "Célèbre pour sa gigantesque cité souterraine du vin, aménagée dans les galeries d’anciennes carrières de calcaire. Plus de 100 km de galeries abritent des effervescents de méthode traditionnelle et de précieux vins de collection.",
    quiz: [{ q: "Quel premier homme de l’espace a visité les caves souterraines de Cricova dans les années 1960 ?", a: "Youri Gagarine", x: ["Neil Armstrong", "John Glenn", "Alexeï Leonov"] }],
  },
  eu_nyetimber: {
    fact: "Maison d’effervescents du West Sussex, en Angleterre. En ne plantant que les trois cépages du champagne et en pratiquant la seconde fermentation en bouteille, elle a bâti la réputation des bulles anglaises.",
    quiz: [{ q: "Qui a planté les premiers cépages champenois à Nyetimber en 1988 ?", a: "Le couple américain Stuart et Sandy Moss", x: ["La famille royale britannique", "Moët & Chandon", "La famille Taittinger"] }],
  },
  eu_chapel_down: {
    fact: "Domaine phare de l’Angleterre, installé à Tenterden, dans le Kent. Il élabore ses effervescents par seconde fermentation en bouteille, comme en Champagne.",
    quiz: [{ q: "Quel type de sol rapproche les effervescents du sud de l’Angleterre, comme Chapel Down, de la Champagne ?", a: "Un sol crayeux", x: ["Un sol de cendres volcaniques noires", "Un sol d’ardoise rouge", "Des alluvions de galets"] }],
  },
  us_screaming_eagle: {
    fact: "Jean Phillips a sorti son premier millésime en 1992 sur une terre achetée à Oakville. En 2000, une bouteille de 6 litres s’est vendue 500 000 dollars à la vente aux enchères de Napa, stupéfiant le monde du vin.",
    quiz: [
      { q: "Quel propriétaire de clubs sportifs américains a racheté Screaming Eagle en 2006 ?", a: "Stan Kroenke", x: ["Jerry Jones", "Mark Cuban", "Robert Kraft"] },
      { q: "Quelle figure des vins cultes a vinifié les premiers millésimes de Screaming Eagle ?", a: "Heidi Barrett", x: ["Warren Winiarski", "Mike Grgich", "Paul Draper"] },
    ],
  },
  us_harlan: {
    fact: "Fondé en 1984 par le promoteur immobilier Bill Harlan sur les coteaux à l’ouest d’Oakville. Avec l’ambition de créer un « premier grand cru » de Napa, il a obtenu à plusieurs reprises 100 points de Robert Parker.",
    quiz: [
      { q: "Quelle autre marque de vin culte Bill Harlan, fondateur de Harlan Estate, a-t-il lancée dans les années 1990 ?", a: "Bond", x: ["Scarecrow", "Colgin", "Screaming Eagle"] },
      { q: "Quel complexe hôtelier de la Napa Valley Bill Harlan, fondateur de Harlan Estate, a-t-il cofondé ?", a: "Meadowood", x: ["Auberge du Soleil", "Carneros Inn", "Solage"] },
    ],
  },
  us_dominus: {
    fact: "Vin élaboré par le Bordelais Christian Moueix, alors à la tête de Petrus, sur l’ancien vignoble Napanook de Yountville. Premier millésime : 1983.",
    quiz: [
      { q: "Quel duo d’architectes suisses a conçu le chai de Dominus ?", a: "Herzog & de Meuron", x: ["Frank Gehry", "Tadao Ando", "Renzo Piano"] },
      { q: "Quelle est la particularité des murs du chai de Dominus ?", a: "Des gabions en grillage remplis de basalte", x: ["Un mur-rideau entièrement vitré", "Un bardage en douelles de barrique", "Du béton brut apparent"] },
    ],
  },
  us_caymus_ss: {
    fact: "Cabernet de prestige que la famille Wagner, à la tête de Caymus, élabore chaque année avec ses meilleurs fûts. Il incarne le style de Napa, riche et soyeux.",
    quiz: [{ q: "Quel record le Caymus Special Selection détient-il chez Wine Spectator ?", a: "Seul vin élu deux fois « Vin de l’année »", x: ["Premier vin américain noté 100 points", "Vin américain le plus cher jamais vendu", "Premier vin élevé dans une station spatiale"] }],
  },
  us_caymus: {
    fact: "Domaine fondé en 1972 à Rutherford par la famille Wagner. Ses Cabernet riches, aux fruits mûrs et à la texture veloutée, sont très appréciés, y compris en Corée du Sud.",
    quiz: [
      { q: "D’où vient le nom Caymus ?", a: "Du « Rancho Caymus », concession mexicaine du XIXe siècle à Napa", x: ["Du prénom de l’épouse du fondateur", "De l’ancien nom de la rivière Napa", "Du village allemand des Wagner"] },
      { q: "Quelle famille a fondé et dirige Caymus ?", a: "La famille Wagner", x: ["La famille Mondavi", "La famille Gallo", "La famille Coppola"] },
    ],
  },
  us_silveroak_napa: {
    fact: "Élaboré uniquement en Cabernet Sauvignon et élevé en fûts de chêne américain. Le jour de la sortie de chaque nouveau millésime, les amateurs font la queue devant le domaine.",
    quiz: [
      { q: "Quel bâtiment figure sur l’étiquette de Silver Oak ?", a: "Un château d’eau", x: ["Un phare", "Un moulin à vent", "Un clocher d’église"] },
      { q: "Quels fûts Silver Oak utilise-t-il invariablement pour l’élevage ?", a: "Des fûts de chêne américain", x: ["Des fûts de chêne français", "Des fûts de chêne slovène", "Des fûts de chêne hongrois"] },
    ],
  },
  us_silveroak_av: {
    fact: "Le Cabernet de Sonoma de Silver Oak, plus souple et plus vite prêt à boire que la bouteille de Napa Valley. Son étiquette arbore le même château d’eau que celle de Napa.",
    quiz: [{ q: "Quels deux hommes ont cofondé Silver Oak en 1972 ?", a: "Ray Duncan et Justin Meyer", x: ["Robert Mondavi et le baron Philippe", "Jack et Dolores Cakebread", "Dan et Margaret Duckhorn"] }],
  },
  us_cask23: {
    fact: "Cabernet de prestige que Stag’s Leap Wine Cellars, fondé par Warren Winiarski, élabore avec ses meilleurs raisins. Premier millésime : 1974.",
    quiz: [
      { q: "D’où vient le nom Cask 23 ?", a: "Du fût n° 23, si exceptionnel la première année qu’il fut embouteillé à part", x: ["De la 23e parcelle du vignoble", "Du jour de naissance du fondateur, le 23", "D’une règle de 23 mois d’élevage"] },
      { q: "Quelle grande maison italienne a racheté en 2007, avec Chateau Ste. Michelle, Stag’s Leap Wine Cellars, producteur du Cask 23 ?", a: "Antinori", x: ["Gaja", "Frescobaldi", "Biondi-Santi"] },
    ],
  },
  us_slv: {
    fact: "S.L.V. est l’abréviation de « Stag’s Leap Vineyard ». Après la victoire du millésime 1973 face aux grands vins français, une bouteille est entrée dans les collections de la Smithsonian Institution.",
    quiz: [
      { q: "Lors de quelle dégustation à l’aveugle de 1976 le S.L.V. 1973 de Stag’s Leap Wine Cellars a-t-il pris la première place chez les rouges ?", a: "Le Jugement de Paris", x: ["Le classement de Bordeaux de 1855", "Le grand prix de Vinexpo", "Le Vin de l’année de Wine Spectator"] },
      { q: "Quel était le premier métier de Warren Winiarski, fondateur de Stag’s Leap Wine Cellars ?", a: "Professeur de sciences politiques", x: ["Pilote de ligne", "Géologue pétrolier", "Réalisateur à Hollywood"] },
    ],
  },
  us_montelena_chard: {
    fact: "Au « Jugement de Paris » de 1976, le millésime 1973 a devancé de grands bourgognes pour prendre la première place chez les blancs. Cette histoire a même été portée à l’écran.",
    quiz: [
      { q: "Quel œnologue a élaboré le Chateau Montelena Chardonnay 1973, vainqueur du Jugement de Paris ?", a: "Mike Grgich", x: ["Warren Winiarski", "Robert Mondavi", "André Tchelistcheff"] },
      { q: "Quel film de 2008 raconte la victoire du Chateau Montelena Chardonnay au Jugement de Paris ?", a: "Bottle Shock", x: ["Sideways", "Une grande année", "Mondovino"] },
    ],
  },
  us_montelena_cab: {
    fact: "Cabernet élaboré dans un château de pierre au pied du mont St. Helena, au nord de Calistoga. Depuis 1972, la famille Barrett dirige ce domaine historique qu’elle a fait renaître.",
    quiz: [{ q: "Quel était le métier d’Alfred Tubbs, fondateur de Chateau Montelena en 1882 ?", a: "Fabricant de cordages", x: ["Magnat des chemins de fer", "Exploitant de mines d’or", "Banquier"] }],
  },
  us_tokalon: {
    fact: "Cabernet de prestige issu de To Kalon, vignoble légendaire d’Oakville situé juste derrière le domaine Robert Mondavi. C’est l’un des vignobles les plus célèbres de Napa.",
    quiz: [
      { q: "Que signifie le nom du vignoble To Kalon ?", a: "« Le plus beau » en grec", x: ["« La colline de Dieu » en latin", "« La terre brûlante » en espagnol", "« L’eau claire » en langue amérindienne"] },
      { q: "Quel pionnier a le premier planté le vignoble To Kalon au XIXe siècle et lui a donné son nom ?", a: "Hamilton Crabb", x: ["George Yount", "Gustave Niebaum", "Charles Krug"] },
    ],
  },
  us_woodbridge: {
    fact: "Marque de vins du quotidien créée par Robert Mondavi en 1979 près de Lodi. L’objectif : un vin californien que chacun puisse boire sans façon.",
    quiz: [{ q: "D’où vient le nom « Woodbridge » de Woodbridge by Robert Mondavi ?", a: "D’une localité proche de Lodi, où se trouve le domaine", x: ["Du nom de jeune fille de la mère du fondateur", "D’un atelier de tonnellerie", "Du village italien des Mondavi"] }],
  },
  us_insignia: {
    fact: "Lancé en 1974 par Joseph Phelps, qui dirigeait alors une entreprise de construction. Il passe pour le premier assemblage de type bordelais de Californie à porter un nom propre.",
    quiz: [{ q: "Quel groupe a racheté en 2022 Joseph Phelps, producteur d’Insignia ?", a: "LVMH", x: ["E. & J. Gallo", "Constellation Brands", "Treasury Wine Estates"] }],
  },
  us_heitz_martha: {
    fact: "Pionnier des Cabernet de parcelle unique à Napa, avec le nom du vignoble sur l’étiquette dès le millésime 1966. Il est célèbre pour ses arômes singuliers de menthe et d’eucalyptus.",
    quiz: [{ q: "Qui est la « Martha » de Heitz Martha’s Vineyard ?", a: "Martha May, épouse de Tom May, propriétaire du vignoble", x: ["La fille de Joe Heitz", "Une île du Massachusetts", "La mère du premier œnologue"] }],
  },
  us_shafer_hillside: {
    fact: "Cabernet de prestige du domaine fondé en 1972 sur les coteaux du district de Stags Leap par John Shafer, ancien cadre d’une maison d’édition de Chicago. Son fils Doug Shafer en a fait grandir la renommée.",
    quiz: [{ q: "Quel groupe sud-coréen a racheté en 2022 Shafer Vineyards, producteur du Hillside Select ?", a: "Shinsegae", x: ["Lotte", "CJ", "SK"] }],
  },
  us_diamond_creek: {
    fact: "Domaine fondé à la fin des années 1960 sur Diamond Mountain par Al Brounstein. Il a toujours tenu à mettre son Cabernet en bouteille séparément, vignoble par vignoble.",
    quiz: [{ q: "D’après quoi les vignobles Volcanic Hill, Red Rock Terrace et Gravelly Meadow de Diamond Creek ont-ils été nommés ?", a: "Leurs sols différents", x: ["Le mois des vendanges", "L’année de plantation", "Le nom des œnologues"] }],
  },
  us_dallavalle_maya: {
    fact: "Fondé sur les collines à l’est d’Oakville par l’Italien Gustav Dalla Valle et son épouse japonaise Naoko. Un vin culte à forte proportion de Cabernet Franc.",
    quiz: [{ q: "À qui la cuvée « Maya » de Dalla Valle doit-elle son nom ?", a: "À la fille du couple fondateur", x: ["À la mère du fondateur", "À l’ancienne civilisation maya", "À l’épouse du premier œnologue"] }],
  },
  us_bond: {
    fact: "Projet de Bill Harlan (Harlan Estate) qui sélectionne des vignobles de Napa de niveau « grand cru » et les met en bouteille chacun séparément. Melbury compte parmi les premiers de ces vignobles.",
    quiz: [{ q: "Quelle approche Bond revendique-t-il ?", a: "Embouteiller séparément chacun des meilleurs vignobles de Napa", x: ["Assembler des raisins de plusieurs pays", "Changer de cépage chaque année", "Faire vieillir le vin au fond de la mer"] }],
  },
  us_scarecrow: {
    fact: "Issu du vignoble J.J. Cohn de Rutherford, où poussent de vieux Cabernet plantés dans les années 1940. Son petit-fils a sorti le premier millésime en 2003.",
    quiz: [{ q: "De quel film vient le nom Scarecrow (épouvantail) ?", a: "Le Magicien d’Oz", x: ["Autant en emporte le vent", "Casablanca", "La Mélodie du bonheur"] }],
  },
  us_colgin_cariad: {
    fact: "Assemblage de type bordelais du domaine culte de Napa dirigé par Ann Colgin. En 2017, LVMH a acquis la majorité de Colgin Cellars.",
    quiz: [{ q: "Que signifie en gallois « Cariad », nom d’une cuvée de Colgin ?", a: "Amour", x: ["Étoile", "Colline", "Dragon"] }],
  },
  us_sine_qua_non: {
    fact: "Vin culte de style rhodanien lancé en 1994 par l’Autrichien Manfred Krankl. Son nom signifie en latin « ce sans quoi rien n’est possible ».",
    quiz: [{ q: "Quelle est la plus grande singularité de Sine Qua Non ?", a: "Le nom du vin et l’étiquette changent à chaque millésime", x: ["Il n’utilise que des bouchons en verre", "Il est produit chaque année dans un pays différent", "Il n’est vendu qu’aux enchères"] }],
  },
  us_kistler: {
    fact: "Grande maison de Chardonnay fondée en 1978 dans le Sonoma. Elle est réputée pour ses Chardonnay fins et puissants, fermentés en levures indigènes comme en Bourgogne.",
    quiz: [{ q: "Qui a fondé Kistler Vineyards ?", a: "Steve Kistler", x: ["Jim Clendenen", "Josh Jensen", "David Lett"] }],
  },
  us_farniente: {
    fact: "En 1979, Gil Nickel a fait renaître ce domaine en pierre d’Oakville, fondé en 1885 puis abandonné pendant la Prohibition. Il se concentre sur deux vins : un Chardonnay et un Cabernet.",
    quiz: [{ q: "Que signifie le nom Far Niente ?", a: "« Sans souci » en italien", x: ["« Terre lointaine » en latin", "« Petite ferme » en espagnol", "« Première récolte » en français"] }],
  },
  us_beringer_pr: {
    fact: "Cabernet de prestige de Beringer, domaine fondé en 1876 à St. Helena par les frères Beringer, originaires de Mayence, et plus ancienne winery de Napa en activité continue.",
    quiz: [{ q: "Pourquoi Beringer a-t-il pu rester ouvert pendant la Prohibition ?", a: "Il était autorisé à produire du vin de messe", x: ["Il servait de centre de recherche agricole", "Il exportait en fraude vers le Canada", "Il fournissait du vinaigre à l’armée"] }],
  },
  us_beringer_wz: {
    fact: "Vin rosé léger et doux élaboré à partir de raisins rouges de Zinfandel. Ses ventes ont explosé aux États-Unis dans les années 1980, au point d’en faire l’emblème du vin grand public.",
    quiz: [{ q: "Comment le Beringer White Zinfandel obtient-il sa couleur rose ?", a: "Par une macération très courte des peaux du Zinfandel rouge", x: ["En ajoutant du jus de fraise", "Grâce à un raisin à peau rose", "En y mêlant du champagne rosé"] }],
  },
  us_sutterhome_wz: {
    fact: "Le White Zinfandel originel, popularisé par Sutter Home, maison de la famille Trinchero. Il est devenu le vin le plus en vogue des États-Unis dans les années 1980.",
    quiz: [{ q: "Quel événement a donné au White Zinfandel de Sutter Home sa douceur actuelle ?", a: "Un arrêt accidentel de la fermentation en 1975", x: ["Une expérience imitant le vin de glace", "Un essai d’assemblage avec un rosé français", "Une collaboration avec un fabricant de jus"] }],
  },
  us_duckhorn_merlot: {
    fact: "Fondé en 1976 par Dan et Margaret Duckhorn, ce domaine a hissé le Merlot de Napa au rang de grand vin. Chaque étiquette arbore un oiseau aquatique.",
    quiz: [{ q: "Quel Merlot de Duckhorn a été élu « Vin de l’année » par Wine Spectator en 2017 ?", a: "Three Palms Vineyard Merlot", x: ["Decoy Merlot", "Goldeneye Merlot", "Paraduxx Merlot"] }],
  },
  us_cakebread: {
    fact: "Domaine familial fondé en 1973 à Rutherford par Jack et Dolores Cakebread. Son Chardonnay est un habitué des cartes des vins des restaurants de Napa.",
    quiz: [{ q: "Quel maître a enseigné la photographie à Jack Cakebread, fondateur de Cakebread Cellars ?", a: "Ansel Adams", x: ["Annie Leibovitz", "Robert Capa", "Richard Avedon"] }],
  },
  us_rombauer: {
    fact: "La référence du Chardonnay californien crémeux, débordant d’arômes de beurre et de vanille. Domaine familial fondé en 1980 par Koerner et Joan Rombauer.",
    quiz: [{ q: "Quel célèbre livre de cuisine américain a été écrit par Irma Rombauer, parente de la famille Rombauer ?", a: "Joy of Cooking", x: ["Mastering the Art of French Cooking", "Kitchen Confidential", "Salt, Fat, Acid, Heat"] }],
  },
  us_bv_latour: {
    fact: "Cabernet de prestige de BV, domaine fondé en 1900 à Rutherford par le Français Georges de Latour. Produit sans interruption depuis le millésime 1936, il est considéré comme l’ancêtre des grands Cabernet de Napa.",
    quiz: [
      { q: "Que signifie en français le nom Beaulieu de Beaulieu Vineyard ?", a: "Bel endroit", x: ["Haute colline", "Vieille source", "Champ doré"] },
      { q: "Quel légendaire œnologue d’origine russe a fait du Georges de Latour Private Reserve un chef-d’œuvre ?", a: "André Tchelistcheff", x: ["Warren Winiarski", "Mike Grgich", "Paul Draper"] },
    ],
  },
  us_rubicon: {
    fact: "Grand rouge d’Inglenook, domaine fondé en 1879 par Gustave Niebaum, capitaine de navire d’origine finlandaise. La famille Coppola, qui a racheté l’ancienne propriété, le produit depuis le millésime 1978.",
    quiz: [{ q: "Quel cinéaste a créé l’Inglenook Rubicon ?", a: "Francis Ford Coppola", x: ["Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"] }],
  },
  us_ridge_montebello: {
    fact: "Assemblage à base de Cabernet issu de vignes sur calcaire, perchées sur une haute crête des Santa Cruz Mountains. Paul Draper l’a vinifié pendant des décennies selon des méthodes traditionnelles.",
    quiz: [{ q: "Quel rang a obtenu le Ridge Monte Bello 1971 chez les rouges lors de la revanche organisée en 2006 pour les 30 ans du « Jugement de Paris » ?", a: "1re place", x: ["2e place", "5e place", "10e place"] }],
  },
  us_ridge_geyserville: {
    fact: "Assemblage à base de Zinfandel issu d’un vignoble du Sonoma comptant des ceps plus que centenaires. C’est le Zinfandel emblématique de Ridge, produit depuis 1966.",
    quiz: [{ q: "D’où vient le nom du village de Geyserville, où se trouve le vignoble de Ridge Geyserville ?", a: "D’une zone de geysers voisine", x: ["D’un mineur de la ruée vers l’or", "D’un missionnaire espagnol", "D’une ancienne gare"] }],
  },
  us_frank_family: {
    fact: "Domaine familial installé dans un ancien chai en pierre de Calistoga. Son Cabernet souple, très apprécié des restaurants de Napa, a fait son succès.",
    quiz: [{ q: "Quel poste occupait auparavant Rich Frank, fondateur de Frank Family Vineyards ?", a: "Président des studios Walt Disney", x: ["Joueur de baseball professionnel", "Géologue pétrolier", "Pilote de ligne"] }],
  },
  us_jordan: {
    fact: "Grande maison du Sonoma qui élabore des Cabernet d’une élégance bordelaise dans un bâtiment inspiré d’un château de la campagne française. Premier millésime : 1976.",
    quiz: [{ q: "Quel était le métier de Tom Jordan, qui a fondé Jordan en 1972 ?", a: "Géologue pétrolier", x: ["Producteur de cinéma à Hollywood", "Golfeur professionnel", "Pilote d’avion"] }],
  },
  us_spottswoode: {
    fact: "Domaine familial situé à l’extrémité ouest du village de St. Helena. Pionnier de la viticulture biologique à Napa, il est aujourd’hui dirigé par les filles de la famille.",
    quiz: [{ q: "Qui a acheté la propriété de Spottswoode en 1972 pour y créer le domaine ?", a: "Mary Novak", x: ["Margaret Duckhorn", "Ann Colgin", "Jean Phillips"] }],
  },
  us_quintessa: {
    fact: "Assemblage de type bordelais élaboré en biodynamie sur un domaine à l’est de Rutherford réunissant collines et vallons. Premier millésime : 1994.",
    quiz: [{ q: "De quel pays sont originaires Agustín et Valeria Huneeus, fondateurs de Quintessa ?", a: "Chili", x: ["Argentine", "Espagne", "Italie"] }],
  },
  us_pahlmeyer: {
    fact: "Domaine culte de Napa fondé dans les années 1980 par Jayson Pahlmeyer, ancien avocat. Dans les années 1990, la vinification a été confiée à l’œnologue vedette Helen Turley.",
    quiz: [{ q: "Quel géant américain du vin a racheté Pahlmeyer en 2019 ?", a: "E. & J. Gallo", x: ["Constellation Brands", "Jackson Family Wines", "Treasury Wine Estates"] }],
  },
  us_schramsberg: {
    fact: "En 1965, le couple Davies a fait renaître ce domaine historique de Calistoga fondé en 1862. Ses effervescents naissent d’une seconde fermentation en bouteille, dans des caves creusées à flanc de colline.",
    quiz: [{ q: "À quelle occasion historique a-t-on trinqué au Schramsberg Blanc de Blancs en 1972 ?", a: "Le dîner de Pékin entre le président Nixon et Zhou Enlai", x: ["La fête du retour d’Apollo 11", "La célébration de la chute du mur de Berlin", "L’investiture du président Kennedy"] }],
  },
  us_chandon: {
    fact: "Ouvert en 1973 à Yountville, dans la Napa Valley, Domaine Chandon est le premier domaine d’effervescents fondé en Californie par une maison de Champagne française.",
    quiz: [{ q: "Quelle maison de Champagne a fondé en Californie Domaine Chandon, producteur du Chandon Brut ?", a: "Moët & Chandon", x: ["Veuve Clicquot", "Taittinger", "Louis Roederer"] }],
  },
  us_roederer_estate: {
    fact: "Fondé en 1982 par la maison de Champagne Louis Roederer dans l’Anderson Valley, comté de Mendocino. Les brouillards frais y donnent des effervescents vifs.",
    quiz: [{ q: "Quel est le champagne le plus célèbre de Louis Roederer, fondateur de Roederer Estate ?", a: "Cristal", x: ["Dom Pérignon", "La Grande Dame", "Belle Epoque"] }],
  },
  us_kosta_browne: {
    fact: "Star du Pinot Noir du Sonoma, élu « Vin de l’année » par Wine Spectator en 2011. Premier millésime : 1997.",
    quiz: [{ q: "Avec quel pécule les deux fondateurs de Kosta Browne ont-ils produit leur premier vin ?", a: "Les pourboires gagnés en travaillant au restaurant", x: ["Un gain au loto", "Des stock-options de la Silicon Valley", "Des bénéfices pétroliers"] }],
  },
  us_williams_selyem: {
    fact: "Fondé par deux amis qui ont commencé, à la fin des années 1970, à faire du vin dans un garage le week-end par passe-temps. Ce pionnier a hissé le Pinot Noir de la Russian River Valley au rang de vin culte.",
    quiz: [{ q: "D’où vient le nom Williams Selyem ?", a: "Des noms des deux fondateurs, Burt Williams et Ed Selyem", x: ["Des noms de deux vignobles", "Des prénoms d’un couple fondateur", "D’un village et d’une rivière"] }],
  },
  us_sea_smoke: {
    fact: "Pinot Noir cultivé en biodynamie sur des coteaux exposés au sud des Sta. Rita Hills. Vendu uniquement sur liste de diffusion par correspondance, il est réputé introuvable.",
    quiz: [{ q: "D’où vient le nom Sea Smoke ?", a: "Du brouillard qui remonte de l’océan le long de la Santa Ynez", x: ["De la fumée d’un volcan voisin", "D’un goût de fumée laissé par un incendie", "Du nom du yacht du fondateur"] }],
  },
  us_au_bon_climat: {
    fact: "Grande maison de Santa Barbara fondée en 1982. À contre-courant de la mode californienne des vins surconcentrés, elle a toujours défendu des vins frais à la bourguignonne.",
    quiz: [
      { q: "Quel vigneron haut en couleur a fondé Au Bon Climat ?", a: "Jim Clendenen", x: ["Paul Draper", "Manfred Krankl", "Josh Jensen"] },
      { q: "Que désigne le nom Au Bon Climat ?", a: "Une bonne parcelle bien ensoleillée", x: ["Le château de la petite colline", "Un cadeau de la mer", "La première récolte"] },
    ],
  },
  us_calera: {
    fact: "Grande maison de Pinot Noir fondée en altitude dans la chaîne de Gavilan par Josh Jensen, formé en Bourgogne, au terme d’une longue quête de sols calcaires.",
    quiz: [{ q: "Que signifie Calera en espagnol ?", a: "Four à chaux", x: ["Pont de pierre", "Petite source", "Terre rouge"] }],
  },
  us_meiomi: {
    fact: "Assemblage de raisins des régions côtières de Monterey, Santa Barbara et Sonoma, pour un Pinot Noir souple et très fruité. La marque a été vendue à Constellation Brands en 2015.",
    quiz: [
      { q: "Quelle célèbre winery de Napa est tenue par la famille de Joe Wagner, créateur de Meiomi ?", a: "Caymus", x: ["Silver Oak", "Beringer", "Duckhorn"] },
      { q: "Que signifie Meiomi dans une langue amérindienne ?", a: "Côte", x: ["Soleil", "Raisin", "Aigle"] },
    ],
  },
  us_la_crema: {
    fact: "Marque qui s’est fait connaître par ses Pinot Noir et Chardonnay de la fraîche Sonoma Coast. Elle est appréciée comme Pinot Noir californien à prix abordable.",
    quiz: [{ q: "Quel fondateur de Kendall-Jackson a racheté et développé La Crema ?", a: "Jess Jackson", x: ["Ernest Gallo", "Robert Mondavi", "Chuck Wagner"] }],
  },
  us_apothic: {
    fact: "Assemblage rouge de Zinfandel, Syrah, Cabernet et Merlot au goût doux et concentré. Lancé à la fin des années 2000, il a porté la vague des assemblages rouges aux États-Unis.",
    quiz: [{ q: "D’où vient le nom Apothic ?", a: "De l’« apotheca », où l’on assemblait et gardait le vin au Moyen Âge", x: ["D’une déesse grecque du vin", "D’une église du village du fondateur", "Du latin « nuit sombre »"] }],
  },
  us_prisoner: {
    fact: "Assemblage rouge de Napa à dominante de Zinfandel, lancé en 2000. Riche et souple, il a lancé la mode des assemblages rouges aux États-Unis.",
    quiz: [
      { q: "Quel peintre espagnol a réalisé la gravure qui orne l’étiquette de The Prisoner ?", a: "Francisco de Goya", x: ["Pablo Picasso", "Diego Vélasquez", "Salvador Dalí"] },
      { q: "Quel vigneron a créé The Prisoner ?", a: "Dave Phinney", x: ["Chuck Wagner", "Manfred Krankl", "Heidi Barrett"] },
    ],
  },
  us_papillon: {
    fact: "Assemblage de Napa de type bordelais d’Orin Swift, maison fondée par Dave Phinney, créateur de The Prisoner. Elle est célèbre pour ses étiquettes aux photos et illustrations percutantes.",
    quiz: [
      { q: "D’où vient le nom Orin Swift ?", a: "Des noms de ses deux parents", x: ["Des noms de deux vignobles", "Du nom du chien du fondateur", "D’un héros de roman"] },
      { q: "Quelle société a racheté Orin Swift en 2016 ?", a: "E. & J. Gallo", x: ["LVMH", "Constellation Brands", "Treasury Wine Estates"] },
    ],
  },
  us_josh: {
    fact: "Marque californienne de vins du quotidien lancée par Joseph Carr à la fin des années 2000. Elle compte parmi les marques de vin à la croissance la plus rapide aux États-Unis.",
    quiz: [{ q: "Qui est le « Josh » de Josh Cellars ?", a: "Le père du fondateur Joseph Carr", x: ["Le fils du fondateur", "Le premier œnologue", "Le chien du fondateur"] }],
  },
  us_bogle: {
    fact: "Vin de la famille Bogle, agriculteurs depuis plusieurs générations à Clarksburg, dans le delta du Sacramento. Son vin phare est un Petite Sirah dense, à la couleur d’encre.",
    quiz: [{ q: "Quelle activité la famille Bogle exerçait-elle depuis des générations avant de planter son premier vignoble en 1968 ?", a: "L’agriculture", x: ["Le pétrole", "La production de films", "La construction ferroviaire"] }],
  },
  us_gallo: {
    fact: "Marque phare d’E. & J. Gallo, la plus grande entreprise viticole familiale du monde. Barefoot, Apothic et Orin Swift font aussi partie du groupe.",
    quiz: [
      { q: "Quels frères ont fondé en 1933 E. & J. Gallo, producteur de Gallo Family Vineyards ?", a: "Ernest et Julio Gallo", x: ["Robert et Peter Mondavi", "Jacob et Frederick Beringer", "Dan et Margaret Duckhorn"] },
      { q: "Qu’est-ce qui a pris fin aux États-Unis en 1933, l’année où les frères Gallo ont ouvert leur winery ?", a: "La Prohibition", x: ["La guerre de Sécession", "La Grande Dépression", "La Seconde Guerre mondiale"] },
    ],
  },
  us_grgich: {
    fact: "Fondé le 4 juillet 1977 par le Croate Mike Grgich, qui avait vinifié le Chardonnay vainqueur du Jugement de Paris. Son éternel béret était sa marque de fabrique.",
    quiz: [{ q: "Quelle entreprise possédait la famille d’Austin Hills, cofondateur de Grgich Hills avec Mike Grgich ?", a: "Hills Bros. Coffee", x: ["Hilton Hotels", "Hershey’s", "Un embouteilleur de Coca-Cola"] }],
  },
  us_kenzo: {
    fact: "Domaine de propriété japonaise établi sur un vaste terrain à flanc de montagne, au sud-est de la Napa Valley. La vinification est confiée à Heidi Barrett, qui a signé Screaming Eagle.",
    quiz: [{ q: "Quelle société de jeux vidéo Kenzo Tsujimoto, fondateur de Kenzo Estate, a-t-il créée ?", a: "Capcom", x: ["Nintendo", "Sega", "Konami"] }],
  },
  us_hess: {
    fact: "Domaine fondé par l’homme d’affaires suisse Donald Hess sur les coteaux escarpés du mont Veeder. Plus frais que le fond de la vallée, ce terroir de montagne donne des Cabernet fermes.",
    quiz: [{ q: "Qu’abrite le bâtiment de The Hess Collection, ce qui fait sa renommée ?", a: "Une galerie d’art contemporain réunie par le fondateur", x: ["Un musée de locomotives à vapeur", "Un aquarium souterrain", "Un observatoire astronomique"] }],
  },
  us_ddo: {
    fact: "Domaine fondé en 1987 dans les Dundee Hills, en Oregon, par la famille bourguignonne Drouhin. Il symbolise la reconnaissance du potentiel du Pinot Noir de l’Oregon par une grande maison de Bourgogne.",
    quiz: [
      { q: "Quelle maison bourguignonne a fondé Domaine Drouhin Oregon ?", a: "Maison Joseph Drouhin", x: ["Louis Jadot", "Louis Latour", "Domaine de la Romanée-Conti"] },
      { q: "Quelle fille de la famille Drouhin vinifie depuis longtemps à Domaine Drouhin Oregon ?", a: "Véronique Drouhin", x: ["Anne-Claude Leflaive", "Lalou Bize-Leroy", "Marie-Thérèse Charlin"] },
    ],
  },
  us_eyrie: {
    fact: "Tout commence en 1965 avec les premiers Pinot Noir plantés dans la Willamette Valley. En 1979, lors d’une dégustation à Paris, le millésime 1975 rivalise avec des bourgognes et fait connaître l’Oregon au monde.",
    quiz: [
      { q: "Quel fondateur d’Eyrie Vineyards était surnommé « Papa Pinot » ?", a: "David Lett", x: ["Robert Drouhin", "Ken Evenstad", "Paul Gerrie"] },
      { q: "Que signifie « eyrie » en anglais ?", a: "L’aire d’un rapace, perchée en hauteur", x: ["Une vallée brumeuse", "Un vieux moulin à eau", "Une cabane dans les bois"] },
    ],
  },
  us_beaux_freres: {
    fact: "Son nom signifie « beaux-frères » en français. Michael Etzel l’a fondé avec son beau-frère sur Ribbon Ridge, dans la Willamette Valley, pour y produire du Pinot Noir.",
    quiz: [{ q: "Quel célèbre critique de vin a cofondé Beaux Frères avec son beau-frère Michael Etzel ?", a: "Robert Parker", x: ["Jancis Robinson", "Hugh Johnson", "James Suckling"] }],
  },
  us_domaine_serene: {
    fact: "Domaine fondé dans les Dundee Hills par Ken et Grace Evenstad, qui l’ont hissé parmi les plus grands Pinot Noir de l’Oregon. Leur cuvée phare porte le nom de famille du couple.",
    quiz: [{ q: "À qui le « Serene » de Domaine Serene doit-il son nom ?", a: "À Serena, la fille du couple fondateur", x: ["À la mère du fondateur", "À la déesse grecque de la Lune", "À un ancien lieu-dit de l’Oregon"] }],
  },
  us_cristom: {
    fact: "Domaine fondé en 1992 par Paul Gerrie dans les Eola-Amity Hills. Chaque vignoble porte le prénom d’une femme de la famille, comme Jessie, Louise ou Marjorie.",
    quiz: [{ q: "Comment a été formé le nom Cristom ?", a: "En combinant les prénoms des enfants du fondateur, Christine et Tom", x: ["D’après un monastère chrétien", "D’après une source limpide comme le cristal", "D’après le nom du premier œnologue"] }],
  },
  us_csm_riesling: {
    fact: "Pionnier du vin de l’État de Washington et l’un des plus grands producteurs de Riesling au monde. Il a pour siège un château à Woodinville, près de Seattle.",
    quiz: [{ q: "Quel Riesling Chateau Ste. Michelle élabore-t-il depuis 1999 avec l’Allemand Dr. Loosen ?", a: "Eroica", x: ["Insignia", "Rubicon", "Opus One"] }],
  },
  us_eroica: {
    fact: "Riesling élaboré depuis 1999 par Chateau Ste. Michelle (Washington) et Ernst Loosen (Mosel). Il marie la finesse allemande et le fruit généreux de Washington.",
    quiz: [{ q: "D’où vient le nom Eroica ?", a: "De la Symphonie n° 3 de Beethoven", x: ["D’un opéra de Mozart", "D’un drame musical de Wagner", "D’une polonaise de Chopin"] }],
  },
  us_quilceda: {
    fact: "Fondé en 1978 par Alex Golitzin, c’est le meilleur producteur de Cabernet de l’État de Washington. Ses multiples 100 points de Robert Parker ont prouvé le niveau des vins de Washington.",
    quiz: [{ q: "Quel légendaire œnologue, oncle d’Alex Golitzin, l’a poussé vers le vin avant qu’il ne fonde Quilceda Creek ?", a: "André Tchelistcheff", x: ["Robert Mondavi", "Warren Winiarski", "Paul Draper"] }],
  },
  us_leonetti: {
    fact: "Fondé en 1977 par Gary Figgins, qui en a fait un vin culte de Washington vendu uniquement sur liste de diffusion. Son fils Chris Figgins a pris la relève.",
    quiz: [{ q: "Quelle place Leonetti Cellar occupe-t-il dans l’histoire du vin de Walla Walla ?", a: "Première winery commerciale de Walla Walla", x: ["Première maison d’effervescents de Washington", "Première winery certifiée bio des États-Unis", "Première winery fondée par des capitaux français"] }],
  },
  us_col_solare: {
    fact: "Assemblage de type bordelais produit depuis le millésime 1995 par Chateau Ste. Michelle (Washington) et la famille italienne Antinori. Il est issu des coteaux brûlants de Red Mountain.",
    quiz: [{ q: "Que signifie Col Solare en italien ?", a: "Colline lumineuse", x: ["Montagne rouge", "Rivière du soleil", "Vallée d’or"] }],
  },
  us_cayuse: {
    fact: "Domaine culte dont les vignes poussent côté Oregon de la Walla Walla Valley, sur un sol couvert de galets ronds gros comme le poing. Cultivé en biodynamie, il ne vend que par correspondance.",
    quiz: [
      { q: "Quel vigneron originaire de Champagne a fondé Cayuse ?", a: "Christophe Baron", x: ["Christian Moueix", "Manfred Krankl", "Robert Drouhin"] },
      { q: "Que désigne en français « Cailloux », nom du vignoble de Cayuse ?", a: "Des galets (pierres)", x: ["Des collines", "Des sources", "Des forêts"] },
    ],
  },
  us_drfrank: {
    fact: "Domaine fondé en 1962 sur les rives du lac Keuka, dans les Finger Lakes, par le botaniste d’origine ukrainienne Konstantin Frank. C’est le pionnier du Riesling de l’État de New York.",
    quiz: [{ q: "Qu’a démontré Dr. Konstantin Frank dans les Finger Lakes ?", a: "Que les cépages européens (vinifera) peuvent pousser dans le froid de New York", x: ["Que seuls les raisins indigènes américains résistent au froid", "Que le Riesling ne mûrit qu’en serre", "Qu’on peut faire du champagne avec du cidre"] }],
  },
};

export default T;
