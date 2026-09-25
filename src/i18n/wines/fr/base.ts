import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  lafite: {
    fact: "Premier nom cité parmi les premiers crus du classement de 1855 du Médoc. L’étiquette représente en gravure le château flanqué de sa tour.",
    quiz: [
      { q: "Quelle famille a acheté Château Lafite Rothschild en 1868 ?", a: "La famille Rothschild", x: ["La famille d’Orléans", "La maison de Bourbon", "La famille Médicis"] },
      { q: "Quel est le second vin de Château Lafite Rothschild ?", a: "Carruades de Lafite", x: ["Les Forts de Latour", "Pavillon Rouge du Château Margaux", "Le Petit Mouton"] },
    ],
  },
  margaux: {
    fact: "Château néoclassique surnommé « le Versailles du Médoc ». Son étiquette gravée, montrant le portique à colonnes, est sa marque de fabrique.",
    quiz: [
      { q: "Quel est le second vin de Château Margaux ?", a: "Pavillon Rouge du Château Margaux", x: ["Carruades de Lafite", "Les Forts de Latour", "Le Clarence de Haut-Brion"] },
      { q: "Comment s’appelle le vin blanc de Château Margaux ?", a: "Pavillon Blanc", x: ["Aile d’Argent", "Blanc de Lynch-Bages", "Musigny Blanc"] },
    ],
  },
  latour: {
    fact: "La tour surmontée d’un lion sur l’étiquette rappelle une forteresse de la guerre de Cent Ans. Depuis 2012, le château a renoncé à la vente en primeur et ne vend ses vins qu’après les avoir fait vieillir.",
    quiz: [
      { q: "Quel mode de vente Château Latour a-t-il abandonné en 2012 ?", a: "La vente en primeur", x: ["La vente aux enchères", "L’exportation", "La vente en magnum"] },
      { q: "Quel est le second vin de Château Latour ?", a: "Les Forts de Latour", x: ["Carruades de Lafite", "Le Petit Mouton", "Clos du Marquis"] },
    ],
  },
  mouton: {
    fact: "Depuis 1945, un artiste comme Chagall, Picasso ou Warhol illustre chaque année le haut de l’étiquette. C’est le seul château passé de deuxième à premier cru classé, en 1973.",
    quiz: [
      { q: "En quelle année Château Mouton Rothschild est-il passé de deuxième à premier cru classé ?", a: "1973", x: ["1855", "1945", "1982"] },
      { q: "Quel symbole figure sur l’étiquette 1945 de Château Mouton Rothschild ?", a: "Le V de la victoire", x: ["La colombe de la paix", "La tour Eiffel", "Un mouton couronné de lauriers"] },
    ],
  },
  hautbrion: {
    fact: "Seul château hors du Médoc, dans les Graves, à être classé premier cru en 1855. Au XVIIe siècle, ce fut aussi le premier vin vendu à Londres sous son propre nom.",
    quiz: [
      { q: "Quel rang Château Haut-Brion a-t-il obtenu dans le classement de 1855 ?", a: "Premier cru", x: ["Deuxième cru", "Troisième cru", "Cinquième cru"] },
      { q: "Quel banquier américain a acheté Château Haut-Brion en 1935 ?", a: "Clarence Dillon", x: ["J.P. Morgan", "John D. Rockefeller", "Andrew Mellon"] },
    ],
  },
  petrus: {
    fact: "Légende de Pomerol, élaborée avec près de 100 % de merlot. Le personnage de l’étiquette est saint Pierre (Petrus) tenant les clés du paradis.",
    quiz: [
      { q: "Quel personnage figure sur l’étiquette de Pétrus ?", a: "Saint Pierre et ses clés", x: ["Saint Paul", "Bacchus", "Napoléon"] },
      { q: "Quel sol fait la réputation du vignoble de Pétrus ?", a: "L’argile bleue", x: ["Les graviers calcaires", "Le granit", "Les cendres volcaniques"] },
    ],
  },
  yquem: {
    fact: "Sommet des liquoreux de Sauternes, issus de raisins atteints de pourriture noble (botrytis). Seul « premier cru supérieur » du classement de 1855 ; sa couleur dorée derrière le verre transparent est un indice.",
    quiz: [
      { q: "Quel rang unique Château d’Yquem a-t-il reçu dans le classement de 1855 ?", a: "Premier cru supérieur", x: ["Premier grand cru classé A", "Grand cru", "Cru bourgeois"] },
      { q: "Quel champignon flétrit les raisins d’Yquem et en concentre le sucre ?", a: "Botrytis cinerea", x: ["Penicillium", "La levure de flor", "L’oïdium"] },
    ],
  },
  chevalblanc: {
    fact: "Géant de Saint-Émilion riche en cabernet franc. Il est célèbre grâce au film « Sideways », où le héros garde précieusement une bouteille de 1961.",
    quiz: [
      { q: "Quel millésime de Château Cheval Blanc le héros du film « Sideways » garde-t-il précieusement ?", a: "1961", x: ["1982", "1947", "2000"] },
    ],
  },
  drc: {
    fact: "Une seule parcelle d’à peine 1,8 ha, qui ne donne qu’environ 6 000 bouteilles par an. Chaque étiquette porte le numéro de sa bouteille.",
    quiz: [
      { q: "Quelle est la superficie approximative de la Romanée-Conti ?", a: "Environ 1,8 ha", x: ["Environ 18 ha", "Environ 50 ha", "Environ 0,2 ha"] },
      { q: "D’où vient le « Conti » de Romanée-Conti ?", a: "Du prince de Conti, acquéreur en 1760", x: ["D’un général de Napoléon", "Du pape Conti III", "D’un moine vigneron nommé Conti"] },
    ],
  },
  jadot: {
    fact: "Négociant de Beaune fondé en 1859, célèbre pour l’emblème à tête de Bacchus, dieu du vin, sur ses étiquettes.",
    quiz: [
      { q: "Qui représente le visage de l’emblème de Louis Jadot ?", a: "Bacchus, dieu du vin", x: ["Poséidon", "Saint Vincent", "Le fondateur Louis Jadot"] },
      { q: "En quelle année la maison Louis Jadot a-t-elle été fondée ?", a: "1859", x: ["1729", "1920", "1966"] },
    ],
  },
  duboeuf: {
    fact: "Vin primeur lancé simultanément dans le monde entier le troisième jeudi de novembre. Son étiquette fleurie, renouvelée chaque année, en est le symbole.",
    quiz: [
      { q: "Quand le beaujolais nouveau est-il mis en vente ?", a: "Le troisième jeudi de novembre", x: ["Le premier vendredi de novembre", "Le 1er décembre", "Le dernier samedi d’octobre"] },
      { q: "Quelle méthode de vinification rend le beaujolais nouveau vite prêt à boire ?", a: "La macération carbonique", x: ["La solera", "L’appassimento", "La seconde fermentation en bouteille"] },
    ],
  },
  beaucastel: {
    fact: "Grande maison de Châteauneuf-du-Pape qui utilise les 13 cépages autorisés. Les bouteilles de l’appellation portent souvent en relief la tiare pontificale et les clés de saint Pierre.",
    quiz: [
      { q: "Château de Beaucastel utilise tous les cépages autorisés à Châteauneuf-du-Pape : combien sont-ils ?", a: "13", x: ["3", "7", "21"] },
      { q: "Que signifie le nom « Châteauneuf-du-Pape » ?", a: "Le nouveau château du pape", x: ["La vigne du pape", "Le nouveau château du roi", "Les neuf châteaux"] },
    ],
  },
  domperignon: {
    fact: "Champagne de prestige produit uniquement les bonnes années. Étiquette en forme d’écu, bouteille à l’ancienne, et un nom emprunté au moine Pierre Pérignon, au XVIIe siècle.",
    quiz: [
      { q: "Qui était Dom Pérignon ?", a: "Un moine bénédictin du XVIIe siècle", x: ["Un général de Napoléon", "Le fondateur de la maison Moët", "Le cuisinier de Louis XIV"] },
      { q: "Quelles années Dom Pérignon est-il produit ?", a: "Seulement les bonnes années", x: ["Chaque année", "Les années bissextiles", "Une fois tous les 10 ans"] },
    ],
  },
  moet: {
    fact: "La maison de champagne la plus vendue au monde. Le nom « Impérial » rappelle ses liens avec l’empereur Napoléon.",
    quiz: [
      { q: "À quel personnage le nom « Impérial » de Moët & Chandon est-il lié ?", a: "Napoléon", x: ["Louis XIV", "Marie-Antoinette", "Charles de Gaulle"] },
      { q: "En quelle année Moët & Chandon a-t-il été fondé ?", a: "1743", x: ["1829", "1668", "1921"] },
    ],
  },
  veuve: {
    fact: "Veuve à 27 ans, Madame Clicquot prit la tête de la maison et inventa le remuage, qui consiste à tourner les bouteilles pour rassembler le dépôt.",
    quiz: [
      { q: "Que signifie « Veuve » dans Veuve Clicquot ?", a: "Une femme qui a perdu son mari", x: ["Une vieille dame", "Une reine", "La fille du fondateur"] },
      { q: "Quelle technique, inventée par Madame Clicquot, consiste à tourner les bouteilles pour amener le dépôt dans le col ?", a: "Le remuage", x: ["Le dégorgement", "La solera", "Le bâtonnage"] },
    ],
  },
  cristal: {
    fact: "Bouteille transparente créée pour le tsar Alexandre II. Selon une anecdote célèbre, on supprima le creux du fond (la piqûre) pour qu’on ne puisse pas y cacher de bombe.",
    quiz: [
      { q: "Pour qui Cristal a-t-il été créé à l’origine ?", a: "Le tsar Alexandre II", x: ["Napoléon III", "La reine Victoria", "Louis XVI"] },
      { q: "En quoi la bouteille de Cristal diffère-t-elle des autres champagnes ?", a: "Transparente, sans creux au fond", x: ["Elle est plaquée de métal", "Son col est bombé", "Elle est carrée"] },
    ],
  },
  armand: {
    fact: "Bouteille dorée à revêtement métallique, ornée d’un as de pique en étain, d’où son surnom « Ace of Spades ». LVMH en a racheté la moitié en 2021.",
    quiz: [
      { q: "Quel est le surnom d’Armand de Brignac ?", a: "Ace of Spades", x: ["Golden Crown", "Black Queen", "Royal Heart"] },
      { q: "Quel groupe a acquis la moitié d’Armand de Brignac en 2021 ?", a: "LVMH", x: ["Kering", "Pernod Ricard", "Diageo"] },
    ],
  },
  pj: {
    fact: "Les anémones blanches dessinées en 1902 par le maître verrier Art nouveau Émile Gallé sont émaillées directement sur la bouteille.",
    quiz: [
      { q: "Quelle fleur orne la bouteille Belle Époque ?", a: "L’anémone", x: ["La rose", "Le lys", "La lavande"] },
      { q: "Quel artiste Art nouveau a dessiné le décor floral de Belle Époque ?", a: "Émile Gallé", x: ["Alfons Mucha", "René Lalique", "Gustav Klimt"] },
    ],
  },
  ruinart: {
    fact: "La plus ancienne maison de champagne, fondée en 1729. Son 100 % chardonnay est logé dans une bouteille ronde et transparente inspirée d’un flacon du XVIIIe siècle.",
    quiz: [
      { q: "En quelle année Ruinart a-t-il été fondé ?", a: "1729", x: ["1743", "1811", "1876"] },
      { q: "Qu’étaient à l’origine les crayères, caves de craie où Ruinart fait vieillir ses champagnes ?", a: "Des carrières gallo-romaines", x: ["Les catacombes d’une abbaye médiévale", "Des abris de la Seconde Guerre mondiale", "D’anciennes mines de charbon"] },
    ],
  },
  trimbach: {
    fact: "Grande maison alsacienne depuis 1626. La loi impose aux vins d’Alsace la bouteille haute et élancée appelée « flûte ».",
    quiz: [
      { q: "En quelle année la famille Trimbach a-t-elle commencé à faire du vin ?", a: "1626", x: ["1789", "1855", "1920"] },
      { q: "Quel est le légendaire riesling de parcelle unique de Trimbach ?", a: "Clos Sainte-Hune", x: ["Scharzhofberg", "Clos des Mouches", "Hill of Grace"] },
    ],
  },
  egonmuller: {
    fact: "Riesling légendaire du vignoble de Scharzhofberg, sur les bords de la Sarre. Son trockenbeerenauslese passe pour le vin blanc le plus cher du monde.",
    quiz: [
      { q: "Quelle est la catégorie la plus chère d’Egon Müller Scharzhofberger ?", a: "Trockenbeerenauslese (TBA)", x: ["Kabinett", "Spätlese", "Grosses Gewächs"] },
      { q: "Où se vendent surtout les meilleurs vins d’Egon Müller ?", a: "Aux enchères du VDP à Trèves", x: ["Par tirage au sort en ligne", "En primeur à Bordeaux", "Par correspondance à des membres"] },
    ],
  },
  drloosen: {
    fact: "Riesling de Moselle reconnaissable à son grand « Dr. L » sur l’étiquette. Traditionnellement, les vins de Moselle étaient en bouteille verte, ceux du Rhin en bouteille brune.",
    quiz: [
      { q: "Quel vigneron dirige le domaine Dr. Loosen ?", a: "Ernst Loosen", x: ["Egon Müller", "Wilhelm Weil", "Helmut Dönnhoff"] },
      { q: "Quel riesling Dr. Loosen élabore-t-il avec Chateau Ste. Michelle aux États-Unis ?", a: "Eroica", x: ["Opus One", "Almaviva", "Seña"] },
    ],
  },
  bluenun: {
    fact: "Née dans les années 1920, elle devint dans les années 1980 la marque de vin la plus vendue au monde. Son nom vient des religieuses vêtues de bleu sur l’étiquette.",
    quiz: [
      { q: "D’où vient le nom Blue Nun ?", a: "Des religieuses vêtues de bleu", x: ["D’un raisin bleu", "Des eaux bleues du Rhin", "De la fille du fondateur"] },
    ],
  },
  juliusspital: {
    fact: "La bouteille plate et ronde appelée « Bocksbeutel » est réservée par la loi aux vins de Franconie. Juliusspital est un domaine géré par un hospice caritatif fondé en 1576.",
    quiz: [
      { q: "Qui gère le domaine Juliusspital ?", a: "Une fondation hospitalière créée en 1576", x: ["La maison royale de Bavière", "L’université de Wurtzbourg", "Une abbaye bénédictine"] },
    ],
  },
  sassicaia: {
    fact: "L’ancêtre des « supertoscans » et le premier vin italien doté d’une appellation propre à un seul domaine (Bolgheri Sassicaia DOC). L’étoile de l’étiquette est une rose des vents.",
    quiz: [
      { q: "Que représente l’étoile de l’étiquette de Sassicaia ?", a: "Une rose des vents", x: ["L’étoile de David", "Le blason des Médicis", "L’étoile Polaire"] },
      { q: "Que signifie le nom « Sassicaia » ?", a: "Terre caillouteuse", x: ["Brise marine", "Colline du chasseur", "Terre rouge"] },
    ],
  },
  gaja: {
    fact: "Célèbre pour son étiquette blanche portant seulement quatre lettres noires : « GAJA ». Angelo Gaja a hissé le barbaresco au rang des plus grands vins du monde.",
    quiz: [
      { q: "Qui a fait de Gaja un domaine de renommée mondiale ?", a: "Angelo Gaja", x: ["Bruno Giacosa", "Piero Antinori", "Giacomo Conterno"] },
      { q: "En quelle année le domaine Gaja a-t-il été fondé ?", a: "1859", x: ["1920", "1961", "1783"] },
    ],
  },
  chianti: {
    fact: "Le « fiasco », au fond rond gainé de paille, est le symbole du chianti. La paille protégeait la bouteille pendant le transport.",
    quiz: [
      { q: "À quoi servait à l’origine la paille autour de la bouteille de chianti ?", a: "Protéger la bouteille au transport", x: ["Garder le vin au frais", "Le protéger de la lumière", "Empêcher la contrefaçon"] },
      { q: "Quel animal figure sur le label du Chianti Classico ?", a: "Le coq noir (gallo nero)", x: ["Le lion rouge", "La colombe blanche", "Le loup doré"] },
    ],
  },
  masi: {
    fact: "Rouge puissant et concentré, élaboré à partir de raisins séchés plus de trois mois (appassimento). « Amarone » signifie « aux notes amères ».",
    quiz: [
      { q: "Comment appelle-t-on le séchage des raisins destinés à l’amarone ?", a: "Appassimento", x: ["Solera", "Botrytis", "Macération carbonique"] },
    ],
  },
  biondisanti: {
    fact: "La famille qui a inventé le brunello di Montalcino. À la fin du XIXe siècle, elle sélectionna le « brunello », un clone de sangiovese à gros grains, et l’éleva longuement.",
    quiz: [
      { q: "Sous quel autre nom connaît-on le sangiovese sélectionné par Biondi-Santi pour créer le brunello ?", a: "Sangiovese grosso", x: ["Morellino", "Prugnolo gentile", "Nebbiolo"] },
    ],
  },
  riscal: {
    fact: "Le grillage doré qui enveloppe la bouteille fut posé au XIXe siècle pour empêcher les fraudeurs de la remplir de vin bon marché.",
    quiz: [
      { q: "À quoi servait à l’origine le grillage doré des bouteilles Riscal ?", a: "Empêcher la contrefaçon", x: ["Éviter la casse au transport", "Protéger de la lumière", "Faire un emballage cadeau"] },
      { q: "Quel architecte a conçu l’hôtel ondulant en titane de Marqués de Riscal ?", a: "Frank Gehry", x: ["Zaha Hadid", "Tadao Ando", "Rem Koolhaas"] },
    ],
  },
  vegasicilia: {
    fact: "Le plus grand rouge d’Espagne, commercialisé seulement après près de 10 ans de vieillissement. « Único » signifie « unique ».",
    quiz: [
      { q: "Que signifie « Único » en espagnol ?", a: "Unique", x: ["Premier", "Ancien", "Royal"] },
      { q: "Quel vin Vega Sicilia élève-t-il moins longtemps que l’Único ?", a: "Valbuena 5°", x: ["Alión", "Pingus", "Pesquera"] },
    ],
  },
  tiopepe: {
    fact: "La référence du fino : élevé sous la « flor », un voile de levures à la surface du vin, il garde une robe pâle et une saveur saline.",
    quiz: [
      { q: "Quel voile de levures protège le fino de l’oxydation ?", a: "La flor", x: ["Le botrytis", "La mousse", "La solera"] },
      { q: "Comment s’appelle l’élevage du xérès par transferts entre fûts étagés ?", a: "Le système de solera", x: ["L’appassimento", "La méthode champenoise", "La macération carbonique"] },
    ],
  },
  freixenet: {
    fact: "Le cava, vin effervescent espagnol élaboré comme le champagne par seconde fermentation en bouteille. Sa bouteille noire mate est sa marque de fabrique.",
    quiz: [
      { q: "Comment le cava obtient-il ses bulles ?", a: "Seconde fermentation en bouteille", x: ["Injection de gaz carbonique", "Fermentation en cuve (méthode Charmat)", "Ajout d’eau-de-vie en fermentation"] },
    ],
  },
  mateus: {
    fact: "Bouteille plate en forme de flasque, inspirée des gourdes des soldats de la Première Guerre mondiale. Le bâtiment de l’étiquette est le palais de Mateus.",
    quiz: [
      { q: "De quoi s’inspire la forme de la bouteille Mateus ?", a: "La gourde des soldats de 14-18", x: ["Une outre en cuir", "Un flacon d’eau bénite", "Un flacon de parfum"] },
      { q: "Quel bâtiment figure sur l’étiquette de Mateus ?", a: "Le palais de Mateus", x: ["La tour de Belém", "La cathédrale de Porto", "Le palais de Pena"] },
    ],
  },
  taylors: {
    fact: "Le porto est un vin muté : on ajoute de l’eau-de-vie pendant la fermentation pour garder du sucre. Fondée en 1692, Taylor’s est l’une des plus anciennes maisons de porto.",
    quiz: [
      { q: "Qu’ajoute-t-on pendant la fermentation du porto ?", a: "De l’eau-de-vie de raisin", x: ["Du sirop de sucre", "Du miel", "Du whisky"] },
      { q: "En quelle année Taylor’s (Taylor Fladgate) a-t-il été fondé ?", a: "1692", x: ["1815", "1756", "1888"] },
    ],
  },
  tokaji: {
    fact: "Liquoreux de pourriture noble que Louis XIV aurait appelé « le vin des rois, le roi des vins ». Les puttonyos indiquent la quantité de raisins botrytisés ajoutés.",
    quiz: [
      { q: "Quel roi aurait appelé le tokaji « le vin des rois, le roi des vins » ?", a: "Louis XIV", x: ["Napoléon", "Henri VIII", "Pierre le Grand"] },
      { q: "Qu’indiquent les « puttonyos » ?", a: "La quantité de raisins botrytisés (douceur)", x: ["Les années de vieillissement", "Le degré d’alcool", "Le classement du vignoble"] },
    ],
  },
  bikaver: {
    fact: "Son nom signifie « sang de taureau ». Selon la légende, en 1552, les Ottomans, voyant la barbe rougie des soldats hongrois, prirent peur en croyant qu’ils buvaient du sang de taureau.",
    quiz: [
      { q: "Que signifie « Bikavér » ?", a: "Sang de taureau", x: ["Soleil rouge", "Larmes de dragon", "Sang du roi"] },
      { q: "Contre qui eut lieu le siège d’Eger de 1552, à l’origine de la légende ?", a: "L’Empire ottoman", x: ["L’Empire mongol", "Les Habsbourg", "Le royaume de France"] },
    ],
  },
  opusone: {
    fact: "Vin né de l’alliance de Robert Mondavi et du baron Philippe de Rothschild (Mouton). L’étiquette superpose leurs deux profils en silhouette.",
    quiz: [
      { q: "Quel est le premier millésime d’Opus One ?", a: "1979", x: ["1966", "1985", "1994"] },
      { q: "De quel domaine vient le terme « Opus One » ?", a: "La musique (opus n° 1)", x: ["La peinture", "L’architecture", "La littérature"] },
    ],
  },
  mondavi: {
    fact: "Premier grand domaine fondé dans la Napa après la Prohibition, en 1966. L’arche et le clocher de l’étiquette sont ceux du chai d’Oakville.",
    quiz: [
      { q: "En quelle année le domaine Robert Mondavi a-t-il été fondé ?", a: "1966", x: ["1933", "1976", "1989"] },
      { q: "Quel nom Robert Mondavi a-t-il donné à son sauvignon blanc élevé en fût de chêne ?", a: "Fumé Blanc", x: ["Blanc de Blancs", "Verdejo", "White Zinfandel"] },
    ],
  },
  kj: {
    fact: "Le chardonnay le plus vendu aux États-Unis depuis des décennies. La feuille de vigne aux couleurs d’automne sur l’étiquette en est l’emblème.",
    quiz: [
      { q: "Quel est l’emblème de l’étiquette Kendall-Jackson ?", a: "Une feuille de vigne automnale", x: ["Un ours", "Un phare", "Une grappe dorée"] },
      { q: "Qui a fondé Kendall-Jackson ?", a: "Jess Jackson", x: ["Robert Mondavi", "Ernest Gallo", "Chuck Wagner"] },
    ],
  },
  barefoot: {
    fact: "L’empreinte de pied nu sur l’étiquette rappelle l’ancien foulage du raisin aux pieds. C’est l’une des plus grandes marques de vin au monde en volume.",
    quiz: [
      { q: "Quelle tradition évoque l’empreinte de pied de l’étiquette Barefoot ?", a: "Le foulage du raisin aux pieds", x: ["Marcher pieds nus dans les vignes", "Une fête sur la plage", "La danse de fin de vendanges"] },
    ],
  },
  grange: {
    fact: "Le plus grand rouge australien, mis au point en secret par l’œnologue Max Schubert après un voyage à Bordeaux dans les années 1950. Il a été reconnu comme élément du patrimoine.",
    quiz: [
      { q: "Quel œnologue a créé Penfolds Grange ?", a: "Max Schubert", x: ["Peter Lehmann", "John Duval", "Wolf Blass"] },
      { q: "Sous quel nom Penfolds Grange était-il vendu à l’origine ?", a: "Grange Hermitage", x: ["Grange Bordeaux", "Bin 1", "Penfolds Classic"] },
    ],
  },
  yellowtail: {
    fact: "L’animal de l’étiquette n’est pas un kangourou mais un wallaby des rochers à pieds jaunes. La marque est devenue le vin importé le plus vendu aux États-Unis.",
    quiz: [
      { q: "Quel animal figure sur l’étiquette de [yellow tail] ?", a: "Un wallaby à pieds jaunes", x: ["Un kangourou", "Un koala", "Un wombat"] },
    ],
  },
  cloudybay: {
    fact: "Son premier millésime, 1985, a fait connaître au monde le sauvignon blanc néo-zélandais. Les montagnes de l’étiquette sont la chaîne Richmond, à Marlborough.",
    quiz: [
      { q: "Que représente l’étiquette de Cloudy Bay ?", a: "La chaîne Richmond", x: ["Le mont Cook", "La mer de Tasman", "La rivière Waitaki"] },
      { q: "Quel est le premier millésime de Cloudy Bay ?", a: "1985", x: ["1973", "1992", "2001"] },
    ],
  },
  almaviva: {
    fact: "L’« Opus One chilien ». Le motif de l’étiquette reprend le symbole cosmique peint sur le kultrún, le tambour rituel des Mapuches.",
    quiz: [
      { q: "D’où vient le motif de l’étiquette d’Almaviva ?", a: "Le kultrún, tambour mapuche", x: ["Le dieu soleil inca", "Les statues de l’île de Pâques", "Le condor des Andes"] },
      { q: "De quelle œuvre Almaviva est-il un personnage ?", a: "« Le Mariage de Figaro » de Beaumarchais", x: ["« Don Quichotte »", "« Carmen »", "« Les Misérables »"] },
    ],
  },
  montes: {
    fact: "L’ange de l’étiquette serait l’ange gardien qui a protégé plusieurs fois le fondateur Douglas Murray lors d’accidents. C’est l’un des vins chiliens les plus appréciés en Corée.",
    quiz: [
      { q: "Quel est l’emblème de l’étiquette Montes Alpha ?", a: "Un ange", x: ["Un démon", "Un condor", "Un soleil"] },
      { q: "Quel est le cépage principal de « Purple Angel », le vin icône de Montes ?", a: "Carménère", x: ["Malbec", "Pinot noir", "Tempranillo"] },
    ],
  },
  casillero: {
    fact: "Son nom signifie « la cave du diable ». Selon la légende, le fondateur fit courir le bruit qu’un diable hantait sa cave pour éloigner les voleurs.",
    quiz: [
      { q: "Que signifie « Casillero del Diablo » ?", a: "La cave du diable", x: ["La vigne du diable", "La part des anges", "La porte de l’enfer"] },
    ],
  },
  sanpedro1865: {
    fact: "Le nom reprend l’année de fondation de la bodega San Pedro. En Corée, il est devenu un cadeau prisé grâce au vœu des golfeurs : « faire les 18 trous en 65 coups ».",
    quiz: [
      { q: "Que signifie le nom « 1865 » ?", a: "L’année de fondation de San Pedro", x: ["Le volume de la première récolte", "L’altitude du vignoble", "L’année de naissance du fondateur"] },
      { q: "Quel vœu a rendu le 1865 populaire comme cadeau en Corée ?", a: "Faire les 18 trous en 65 coups", x: ["Atteindre 65 ans en 18 ans", "Trinquer 65 fois le 8 janvier", "Partager 65 bouteilles à 18"] },
    ],
  },
  inniskillin: {
    fact: "Le raisin est vendangé et pressé gelé, sous les -8 °C. Son grand prix au Vinexpo 1991 a fait connaître au monde le vin de glace canadien.",
    quiz: [
      { q: "Sous quelle température le raisin doit-il avoir gelé pour un vin de glace canadien ?", a: "-8 °C", x: ["-2 °C", "-20 °C", "0 °C"] },
      { q: "Dans quel salon Inniskillin Vidal Icewine a-t-il reçu un grand prix en 1991 ?", a: "Vinexpo", x: ["Vinitaly", "ProWein", "London Wine Fair"] },
    ],
  },
  ott: {
    fact: "La bouteille galbée en forme de quille, dessinée par la famille Ott dans les années 1930, est devenue le symbole du rosé de Provence.",
    quiz: [
      { q: "Quand la bouteille galbée de Domaines Ott a-t-elle été dessinée ?", a: "Dans les années 1930", x: ["Dans les années 1880", "Dans les années 1960", "Dans les années 2000"] },
      { q: "Quelle maison de champagne a racheté Domaines Ott en 2004 ?", a: "Louis Roederer", x: ["Moët & Chandon", "Veuve Clicquot", "Bollinger"] },
    ],
  },
  whisperingangel: {
    fact: "Lancé en 2006, il a porté le boom mondial du rosé. Son nom vient d’une statue d’ange qui chuchote dans la chapelle du château.",
    quiz: [
      { q: "Qui est le propriétaire du Château d’Esclans, producteur de Whispering Angel ?", a: "Sacha Lichine", x: ["Brad Pitt", "Gérard Bertrand", "Alain Ducasse"] },
      { q: "En quelle année Whispering Angel est-il sorti ?", a: "2006", x: ["1985", "1998", "2015"] },
    ],
  },
  musar: {
    fact: "Domaine libanais qui a poursuivi ses vendanges sous les obus pendant la guerre civile. Ses vins vieillissent près de 7 ans avant d’être commercialisés.",
    quiz: [
      { q: "Quel vigneron a fait connaître Château Musar au monde ?", a: "Serge Hochar", x: ["Michel Rolland", "Émile Peynaud", "André Tchelistcheff"] },
      { q: "En quelle année Château Musar a-t-il été fondé ?", a: "1930", x: ["1855", "1975", "1998"] },
    ],
  },
};

export default T;
