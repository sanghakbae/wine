import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  us2_slwc_artemis: {
    fact: "Cabernet de Napa Valley que Stag’s Leap Wine Cellars élabore en assemblant les raisins de plusieurs vignobles. Son nom vient de la déesse de la chasse de la mythologie grecque.",
    quiz: [{ q: "De quelle légende vient le nom « Stags Leap » du domaine qui produit Artemis ?", a: "Un cerf traqué par des chasseurs a sauté par-dessus une falaise", x: ["Un troupeau de cerfs a traversé la rivière", "Un chef amérindien s’est changé en cerf", "Des bois de cerf géants ont été trouvés dans une mine d’or"] }],
  },
  us2_slwc_fay: {
    fact: "Cabernet issu du vignoble voisin de S.L.V. Le fondateur Warren Winiarski a acheté les terres d’à côté après avoir goûté le vin élaboré par le propriétaire de cette parcelle.",
    quiz: [{ q: "Qu’a fait en premier Nathan Fay, qui a donné son nom au Fay Vineyard, dans le district de Stags Leap en 1961 ?", a: "Il y a planté le premier cabernet sauvignon", x: ["Il a organisé la première vente aux enchères de vin", "Il a creusé la première cave souterraine", "Il a élaboré le premier vin effervescent"] }],
  },
  us2_stagsleap_winery_ps: {
    fact: "Ancien domaine du district de Stags Leap, dont le premier millésime date de 1893 et qui conserve sa demeure en pierre, le « Manor House ». Il est réputé depuis longtemps pour son petite sirah.",
    quiz: [{ q: "Comment Stags’ Leap Winery et Stag’s Leap Wine Cellars se sont-ils distingués au terme de leur procès ?", a: "En plaçant l’apostrophe à un endroit différent", x: ["L’un a ajouté « Napa » devant son nom", "L’un a adopté un nom français", "L’un a retiré le mot « Winery »"] }],
  },
  us2_chimney_rock: {
    fact: "Domaine du district de Stags Leap planté sur la moitié d’un ancien terrain de golf. Ses bâtiments reflètent les goûts de son fondateur Hack Wilson, qui a longtemps fait des affaires en Afrique du Sud.",
    quiz: [{ q: "De quel style architectural est le bâtiment blanc du domaine Chimney Rock ?", a: "Style hollandais du Cap (Afrique du Sud)", x: ["Style des missions espagnoles", "Style villa toscane", "Style Tudor anglais"] }],
  },
  us2_clos_du_val: {
    fact: "Fondé au début des années 1970 dans le district de Stags Leap par le Français Bernard Portet et l’homme d’affaires américain John Goelet. Son millésime 1972 a participé au « Jugement de Paris ».",
    quiz: [
      { q: "Dans quel château bordelais le père de Bernard Portet, fondateur de Clos Du Val, était-il régisseur ?", a: "Château Lafite Rothschild", x: ["Château Margaux", "Château Latour", "Château Haut-Brion"] },
      { q: "Quel classement le cabernet 1972 de Clos Du Val a-t-il obtenu lors de la revanche organisée en 1986 pour les 10 ans du « Jugement de Paris » ?", a: "1re place", x: ["2e place", "5e place", "Dernière place"] },
    ],
  },
  us2_cliff_lede: {
    fact: "Domaine fondé en 2002 par Cliff Lede, entrepreneur canadien du bâtiment, qui a acheté des vignes dans le district de Stags Leap.",
    quiz: [{ q: "Quels noms Cliff Lede a-t-il donnés à chaque parcelle de son vignoble ?", a: "Des titres de chansons et d’albums rock célèbres", x: ["Des noms de dieux grecs", "Les prénoms des membres de sa famille", "Des noms de constellations"] }],
  },
  us2_silverado: {
    fact: "Domaine qui a acheté des vignes dans les années 1970 sur les collines du district de Stags Leap, le long du Silverado Trail, et a commencé à faire du vin en 1981.",
    quiz: [{ q: "Quelle famille a fondé Silverado Vineyards ?", a: "La famille de Walt Disney", x: ["La famille Coppola", "La famille Getty", "La famille Kennedy"] }],
  },
  us2_shafer_rsr: {
    fact: "Chardonnay que Shafer Vineyards, domaine du district de Stags Leap, élabore dans un vignoble frais de Carneros. Il est réputé pour sa richesse alliée à une belle fraîcheur.",
    quiz: [{ q: "D’où vient le nom Red Shoulder Ranch ?", a: "De la buse à épaulettes, un rapace qui vit dans le vignoble", x: ["D’une colline à la terre rouge", "Du cheval rouge préféré du fondateur", "Du surnom d’un ancien propriétaire du ranch"] }],
  },
  us2_farniente_cab: {
    fact: "Le rouge phare de Far Niente, qui a fait revivre à Oakville un chai en pierre abandonné pendant la Prohibition. Il est élaboré avec les raisins du domaine d’Oakville.",
    quiz: [{ q: "Quel peintre américain célèbre était le neveu de John Benson, pionnier de la ruée vers l’or qui a fondé Far Niente en 1885 ?", a: "Winslow Homer", x: ["Edward Hopper", "Norman Rockwell", "Andrew Wyeth"] }],
  },
  us2_nickel_nickel: {
    fact: "Domaine fondé en 1997 à Oakville par la famille de Gil Nickel. Le Sullenger Vineyard est la parcelle de cabernet située juste derrière le chai, installé dans une ferme restaurée du XIXe siècle.",
    quiz: [
      { q: "Quel principe Nickel & Nickel respecte-t-il pour tous ses vins ?", a: "Un seul cépage issu d’un seul vignoble", x: ["Assembler des raisins de plusieurs régions", "Ne jamais utiliser de fût de chêne", "N’utiliser que des capsules à vis"] },
      { q: "Quel domaine d’Oakville, dirigé par la même famille, est la maison sœur de Nickel & Nickel ?", a: "Far Niente", x: ["Silver Oak", "Caymus", "Duckhorn"] },
    ],
  },
  us2_plumpjack: {
    fact: "Domaine fondé en 1995 à Oakville. En mettant en bouteille la moitié de son cabernet Reserve 1997 sous capsule à vis, il a relancé le débat sur les bouchons des grands vins.",
    quiz: [
      { q: "Quel cofondateur de PlumpJack est devenu plus tard gouverneur de Californie ?", a: "Gavin Newsom", x: ["Arnold Schwarzenegger", "Jerry Brown", "Gray Davis"] },
      { q: "De quel personnage de Shakespeare « PlumpJack » est-il le surnom ?", a: "Falstaff", x: ["Hamlet", "Shylock", "Le roi Lear"] },
    ],
  },
  us2_overture: {
    fact: "Second vin d’Opus One, produit depuis 1993. Pendant longtemps, il a été commercialisé sans millésime, en assemblant plusieurs années.",
    quiz: [{ q: "Quels sont les deux fondateurs du domaine dont Overture est le second vin ?", a: "Robert Mondavi et le baron Philippe de Rothschild", x: ["Robert Mondavi et Christian Moueix", "Bill Harlan et Éric de Rothschild", "Jack Cakebread et André Tchelistcheff"] }],
  },
  us2_harlan_maiden: {
    fact: "Second vin issu du même vignoble, sur les coteaux à l’ouest d’Oakville. Il est vendu en priorité aux clients inscrits sur la liste de diffusion.",
    quiz: [{ q: "The Maiden est le second vin de quel domaine ?", a: "Harlan Estate", x: ["Dominus", "Opus One", "Screaming Eagle"] }],
  },
  us2_promontory: {
    fact: "Cabernet élaboré par la famille de Bill Harlan sur un terrain isolé dans les montagnes à l’ouest d’Oakville. Il se distingue par un relief sauvage cerné de forêts et de rochers.",
    quiz: [{ q: "Quel vin culte emblématique la famille qui produit Promontory a-t-elle créé auparavant ?", a: "Harlan Estate", x: ["Screaming Eagle", "Colgin", "Dominus"] }],
  },
  us2_groth_reserve: {
    fact: "Le cabernet haut de gamme du domaine fondé par Dennis Groth, dirigeant de la société de jeux vidéo Atari, et sa femme, qui ont acheté des vignes à Oakville en 1981.",
    quiz: [{ q: "Quel record le cabernet Reserve 1985 de Groth a-t-il établi ?", a: "Premier vin californien noté 100 points par Robert Parker", x: ["Premier vin emporté dans l’espace", "Vin américain le plus cher vendu aux enchères", "Premier grand vin sous capsule à vis"] }],
  },
  us2_napanook: {
    fact: "Second vin qui porte le nom d’un vignoble historique de Yountville. Il est élaboré par la famille Moueix, grande famille de Pomerol à Bordeaux.",
    quiz: [{ q: "Napanook est le second vin de quel domaine ?", a: "Dominus", x: ["Opus One", "Harlan Estate", "Insignia"] }],
  },
  us2_frogs_leap_sb: {
    fact: "Domaine fondé en 1981 par John Williams et Larry Turley. Il reste fidèle à la culture sans irrigation (dry farming) et à l’agriculture biologique.",
    quiz: [
      { q: "Quel domaine de Napa le nom Frog’s Leap parodie-t-il ?", a: "Stag’s Leap Wine Cellars", x: ["Harlan Estate", "Far Niente", "Chateau Montelena"] },
      { q: "Qu’était à l’origine le lieu où Frog’s Leap a élaboré ses premiers vins ?", a: "Un élevage de grenouilles", x: ["Un bureau de poste", "Une gare", "Un monastère"] },
    ],
  },
  us2_mondavi_fume: {
    fact: "En 1968, Robert Mondavi a lancé un sauvignon blanc sec élevé en fût de chêne sous un nouveau nom, « Fumé Blanc ».",
    quiz: [{ q: "De quel vin français Robert Mondavi s’est-il inspiré pour créer le nom « Fumé Blanc » ?", a: "Pouilly-Fumé", x: ["Sancerre", "Muscadet", "Chablis"] }],
  },
  us2_mondavi_private: {
    fact: "Marque californienne de vins de tous les jours portant le nom de Robert Mondavi. Elle produit des vins abordables à partir de raisins de plusieurs régions.",
    quiz: [{ q: "Où Robert Mondavi a-t-il fondé en 1966 le premier grand domaine de Napa depuis la Prohibition ?", a: "Oakville", x: ["Calistoga", "Yountville", "Carneros"] }],
  },
  us2_trefethen_chard: {
    fact: "Domaine familial fondé en 1968 par Gene et Katie Trefethen à Oak Knoll, dans le sud de Napa. Il occupe un chai en bois construit au XIXe siècle.",
    quiz: [{ q: "Quelle distinction le chardonnay 1976 de Trefethen a-t-il reçue aux « Olympiades du vin » de Paris en 1979 ?", a: "Meilleur chardonnay du monde", x: ["Blanc au plus long potentiel de garde", "Meilleur nouveau domaine", "Meilleur vin de dessert"] }],
  },
  us2_freemark_abbey: {
    fact: "Grande maison de St. Helena, héritière du domaine fondé en 1886 par Josephine Tychson, une pionnière. Son rouge comme son blanc ont concouru au « Jugement de Paris ».",
    quiz: [{ q: "D’où vient le nom Freemark Abbey ?", a: "De la combinaison des noms des trois associés qui ont racheté le domaine", x: ["Le chai occupait une ancienne abbaye", "De l’abbaye de la ville natale du fondateur", "Du nom du premier propriétaire du vignoble"] }],
  },
  us2_charles_krug: {
    fact: "Le plus ancien domaine de Napa Valley, fondé en 1861 par le Prussien Charles Krug. Il a repris vie après la Prohibition avec un nouveau propriétaire.",
    quiz: [
      { q: "Quelle famille a racheté Charles Krug en 1943 et le dirige encore aujourd’hui ?", a: "La famille Mondavi", x: ["La famille Gallo", "La famille Beringer", "La famille Martini"] },
      { q: "Qui a quitté Charles Krug après une dispute avec son frère Peter pour fonder son propre domaine en 1966 ?", a: "Robert Mondavi", x: ["Louis M. Martini", "Joe Heitz", "Warren Winiarski"] },
    ],
  },
  us2_louis_martini: {
    fact: "Fondé à St. Helena en 1933, à la fin de la Prohibition, par l’Italien Louis M. Martini. Il est aussi réputé pour le cabernet du vignoble Monte Rosso, dans le Sonoma.",
    quiz: [{ q: "Quel groupe, premier producteur de vin des États-Unis, a racheté Louis M. Martini en 2002 ?", a: "E&J Gallo", x: ["Constellation Brands", "Jackson Family Wines", "Treasury Wine Estates"] }],
  },
  us2_abreu_madrona: {
    fact: "Vin élaboré sous son propre nom par David Abreu, qui a planté et entretenu les vignes de nombreux domaines cultes de Napa. Madrona Ranch est une parcelle située sur les collines à l’ouest de St. Helena.",
    quiz: [{ q: "Dans quel métier David Abreu s’est-il d’abord fait un nom à Napa ?", a: "Gestion et culture de vignobles", x: ["Critique de vin", "Tonnelier", "Commissaire-priseur de vins"] }],
  },
  us2_sterling: {
    fact: "Fondé en 1964 à Calistoga par l’Anglais Peter Newton. Au sommet d’une colline se dresse un bâtiment blanc rappelant l’île grecque de Mykonos, où il avait vécu.",
    quiz: [{ q: "Qu’empruntent les visiteurs de Sterling Vineyards pour monter au domaine perché sur la colline ?", a: "Un téléphérique", x: ["Une locomotive à vapeur", "Une montgolfière", "Une calèche"] }],
  },
  us2_clos_pegase: {
    fact: "Domaine fondé à Calistoga par Jan et Mitsuko Shrem, collectionneurs d’art. Le bâtiment est issu d’un concours d’architecture organisé avec le musée d’art moderne de San Francisco.",
    quiz: [{ q: "Quel architecte postmoderne a conçu le bâtiment de Clos Pegase ?", a: "Michael Graves", x: ["Frank Gehry", "Philip Johnson", "Renzo Piano"] }],
  },
  us2_castello_amorosa: {
    fact: "Domaine installé dans un château de style toscan du XIIIe siècle que Dario Sattui a bâti près de Calistoga au terme de longs travaux. Il compte douves, pont-levis et même une salle de torture.",
    quiz: [{ q: "Quel domaine de Napa la famille de Dario Sattui, fondateur de Castello di Amorosa, dirigeait-elle déjà ?", a: "V. Sattui", x: ["Beringer", "Charles Krug", "Sterling Vineyards"] }],
  },
  us2_schramsberg_jschram: {
    fact: "L’effervescent haut de gamme de Schramsberg, élaboré avec les meilleurs vins de base et longuement vieilli. Son nom rend hommage à Jacob Schram, qui a fondé le domaine en 1862.",
    quiz: [{ q: "Quel écrivain, en visite à Schramsberg en 1880, a qualifié ses vins de « poésie en bouteille » ?", a: "Robert Louis Stevenson", x: ["Mark Twain", "Jack London", "John Steinbeck"] }],
  },
  us2_chappellet: {
    fact: "Premier domaine de Pritchard Hill, fondé en 1967 sur ses pentes par Donn et Molly Chappellet. Il est réputé pour ses cabernets de montagne à la structure ferme.",
    quiz: [{ q: "Quelle forme a le chai de Chappellet ?", a: "Une pyramide", x: ["Un dôme arrondi", "Un fût de chêne géant", "Une forteresse médiévale"] }],
  },
  us2_darioush: {
    fact: "Domaine fondé à Napa par Darioush Khaledi, homme d’affaires d’origine iranienne. Son bâtiment à colonnes de pierre, inspiré des palais de la Perse antique, attire les regards.",
    quiz: [{ q: "De quel site antique s’inspire le bâtiment de Darioush ?", a: "Persépolis", x: ["Le Parthénon", "Angkor Vat", "L’Alhambra"] }],
  },
  us2_cain_five: {
    fact: "Le vin phare de Cain Vineyard, assemblage de cépages bordelais cultivés en terrasses sur les hautes pentes de Spring Mountain.",
    quiz: [{ q: "Que signifie « Five » dans Cain Five ?", a: "L’assemblage des cinq cépages bordelais", x: ["Cinq vignobles", "Les cinq enfants du fondateur", "Une sortie après cinq ans de vieillissement"] }],
  },
  us2_spring_mountain: {
    fact: "Domaine qui abrite Miravalle, une ancienne demeure sur les pentes de Spring Mountain. Son chardonnay 1973 a pris la 4e place des blancs au « Jugement de Paris ».",
    quiz: [{ q: "Quelle série télévisée américaine des années 1980 a été tournée dans la demeure Miravalle de Spring Mountain Vineyard ?", a: "Falcon Crest", x: ["Dallas", "Dynastie", "Twin Peaks"] }],
  },
  us2_newton_unfiltered: {
    fact: "Domaine fondé en 1977 sur Spring Mountain par Peter et Su Hua Newton. Il s’est fait un nom avec un chardonnay mis en bouteille sans filtration, comme l’indique son nom.",
    quiz: [
      { q: "Quel domaine Peter Newton, fondateur de Newton Vineyard, avait-il créé auparavant à Calistoga ?", a: "Sterling Vineyards", x: ["Chateau Montelena", "Schramsberg", "Clos Pegase"] },
      { q: "Qu’est-ce qui a gravement endommagé le domaine Newton Vineyard en 2020 ?", a: "Un incendie (le Glass Fire)", x: ["Un tremblement de terre", "Une inondation", "Le phylloxéra"] },
    ],
  },
  us2_pride_merlot: {
    fact: "Domaine fondé par la famille Pride sur un ancien vignoble au sommet des monts Mayacamas. L’étiquette de chaque vin indique la proportion de raisins provenant de chacun des deux comtés.",
    quiz: [{ q: "Qu’est-ce qui traverse en plein milieu le vignoble et le chai de Pride Mountain Vineyards ?", a: "La limite entre les comtés de Napa et de Sonoma", x: ["Une ancienne voie ferrée", "La faille de San Andreas", "La Pacific Coast Highway"] }],
  },
  us2_mayacamas: {
    fact: "Chai en pierre construit à la fin du XIXe siècle sur les hauteurs du mont Veeder. Son cabernet de style classique demande une longue garde ; le millésime 1971 a participé au « Jugement de Paris ».",
    quiz: [{ q: "Quel couple a dirigé Mayacamas pendant près de 45 ans à partir de 1968 ?", a: "Bob et Elinor Travers", x: ["Jack et Dolores Cakebread", "Dan et Margaret Duckhorn", "Gene et Katie Trefethen"] }],
  },
  us2_lokoya: {
    fact: "Fondé en 1995, il élabore séparément des cabernets de montagne issus de quatre appellations de Napa : Mount Veeder, Howell Mountain, Spring Mountain et Diamond Mountain.",
    quiz: [{ q: "D’où vient le nom Lokoya ?", a: "D’une tribu amérindienne qui vivait sur le mont Veeder", x: ["Du nom d’un missionnaire espagnol", "D’un type de roche volcanique", "Du prénom de la fille du fondateur"] }],
  },
  us2_cardinale: {
    fact: "Assemblage haut de gamme à base de cabernet, élaboré au chai d’Oakville avec des raisins choisis dans les montagnes et vallées de tout Napa.",
    quiz: [{ q: "Qui a fondé Jackson Family Wines, propriétaire de Cardinale ?", a: "Jess Jackson", x: ["Robert Mondavi", "Ernest Gallo", "Chuck Wagner"] }],
  },
  us2_dunn_howell: {
    fact: "Petit domaine lancé par Randy Dunn à la fin des années 1970 sur Howell Mountain. Il est réputé pour ses cabernets de montagne austères, capables de vieillir plusieurs décennies.",
    quiz: [{ q: "Dans quel domaine de Napa Randy Dunn était-il vinificateur avant de créer le sien ?", a: "Caymus", x: ["Silver Oak", "Beringer", "Robert Mondavi"] }],
  },
  us2_cade: {
    fact: "Domaine fondé en 2005 sur une crête de Howell Mountain. Il élabore des cabernets structurés sur des sols volcaniques situés à plus de 400 m d’altitude.",
    quiz: [{ q: "Quel domaine le groupe fondateur de CADE avait-il créé auparavant à Oakville ?", a: "PlumpJack", x: ["Far Niente", "Screaming Eagle", "Harlan Estate"] }],
  },
  us2_conundrum: {
    fact: "Assemblage blanc lancé en 1989 par Chuck Wagner, de Caymus. Il associe plusieurs cépages, dont le chardonnay, le sauvignon blanc et le muscat.",
    quiz: [
      { q: "Que signifie le nom Conundrum ?", a: "Énigme", x: ["Harmonie", "Doré", "Aventure"] },
      { q: "Quel domaine de Napa est dirigé par la famille qui a lancé Conundrum ?", a: "Caymus", x: ["Silver Oak", "Duckhorn", "Beringer"] },
    ],
  },
  us2_decoy_cab: {
    fact: "Marque lancée en 1985 par Duckhorn Vineyards pour des vins plus faciles à boire. Elle élabore aujourd’hui un cabernet souple avec des raisins du comté de Sonoma.",
    quiz: [{ q: "Que désigne le nom Decoy ?", a: "Un canard en bois que les chasseurs font flotter pour attirer les canards", x: ["Un étang où les canards font halte", "Un cor annonçant la chasse à l’aube", "Une cabane de chasseur"] }],
  },
  us2_mer_soleil: {
    fact: "Chardonnay élaboré par Charlie Wagner, de la famille Wagner de Caymus, dans les Santa Lucia Highlands, à Monterey. Une région fraîche balayée par la brise marine.",
    quiz: [{ q: "Que signifie le nom Mer Soleil ?", a: "La mer et le soleil", x: ["La montagne et la lune", "Le vent et la pluie", "La colline dorée"] }],
  },
  us2_belle_glos: {
    fact: "Pinot noir créé par Joe Wagner, de la famille Wagner de Caymus. Son épaisse cire rouge qui enveloppe le col de la bouteille est sa marque de fabrique.",
    quiz: [
      { q: "À qui Belle Glos doit-il son nom ?", a: "À Lorna Belle Glos Wagner, grand-mère du fondateur", x: ["À la fille du fondateur", "Au premier propriétaire du vignoble", "À un village natal en France"] },
      { q: "À quoi rend hommage la cire rouge du col des bouteilles de Belle Glos ?", a: "Au rouge à lèvres que la grand-mère portait chaque jour", x: ["À la couleur des armoiries du domaine", "À la couleur de la peau du pinot noir", "Au pavot de Californie"] },
    ],
  },
  us2_orin_8years: {
    fact: "Assemblage à base de zinfandel créé par Dave Phinney, d’Orin Swift. Il est célèbre pour ses étiquettes photographiques percutantes.",
    quiz: [{ q: "À quoi fait référence le nom 8 Years in the Desert (« 8 ans dans le désert ») ?", a: "Aux 8 ans sans zinfandel promis après la vente de The Prisoner", x: ["À un vieillissement de 8 ans dans une grotte du désert", "À l’assemblage de 8 vignobles du désert", "Aux 8 ans de voyage du fondateur dans le désert"] }],
  },
  us2_mumm_napa: {
    fact: "Maison d’effervescents fondée en Napa Valley par une maison de Champagne française. Ses vins sont élaborés comme le champagne, par seconde fermentation en bouteille.",
    quiz: [{ q: "Quelle maison de Champagne a fondé Mumm Napa ?", a: "G.H. Mumm", x: ["Moët & Chandon", "Taittinger", "Louis Roederer"] }],
  },
  us2_domaine_carneros: {
    fact: "Maison d’effervescents fondée en 1987 sur les collines de Carneros par une maison de Champagne française. Elle est célèbre pour son élégant château perché sur une colline.",
    quiz: [
      { q: "Quelle maison de Champagne a fondé Domaine Carneros ?", a: "Taittinger", x: ["Moët & Chandon", "G.H. Mumm", "Louis Roederer"] },
      { q: "Sur quel château champenois le bâtiment de Domaine Carneros est-il calqué ?", a: "Château de la Marquetterie", x: ["Château de Chambord", "Château de Chenonceau", "Château de Versailles"] },
    ],
  },
  us2_goldeneye: {
    fact: "Domaine de pinot noir fondé en 1996 par le couple Duckhorn dans l’Anderson Valley, comté de Mendocino. Les raisins y mûrissent dans une vallée fraîche où entre le brouillard marin.",
    quiz: [{ q: "D’où vient le nom Goldeneye ?", a: "D’un canard, le garrot à œil d’or", x: ["Du film de James Bond", "Des raisins mûrs aux reflets dorés", "Du surnom du couple fondateur"] }],
  },
  us2_verite_lamuse: {
    fact: "Vins de style bordelais élaborés avec des raisins de Sonoma. Il en existe trois : La Muse à base de merlot, La Joie à base de cabernet et Le Désir à base de cabernet franc.",
    quiz: [{ q: "Quel vinificateur bordelais élabore Vérité ?", a: "Pierre Seillan", x: ["Michel Rolland", "Christian Moueix", "Bernard Portet"] }],
  },
  us2_kenwood_jacklondon: {
    fact: "Élaboré avec les raisins d’un vignoble en terrasses sur sol de lave, situé sur l’ancien ranch du romancier Jack London. L’étiquette porte la tête de loup qu’il utilisait comme ex-libris.",
    quiz: [{ q: "Quelle est l’œuvre la plus célèbre de l’écrivain qui a donné son nom au Kenwood Jack London Vineyard ?", a: "L’Appel de la forêt", x: ["Les Raisins de la colère", "Moby Dick", "Les Aventures de Huckleberry Finn"] }],
  },
  us2_paul_hobbs_rrv: {
    fact: "Domaine fondé en 1991 dans le Sonoma par Paul Hobbs, passé par Robert Mondavi et Opus One. Il est aussi réputé comme consultant pour des domaines de nombreux pays.",
    quiz: [{ q: "Quel domaine Paul Hobbs a-t-il cofondé à Mendoza, en Argentine ?", a: "Viña Cobos", x: ["Catena Zapata", "Clos de los Siete", "Bodega Norton"] }],
  },
  us2_peter_michael_bellecote: {
    fact: "Domaine fondé sur les coteaux de Knights Valley par Sir Peter Michael, entrepreneur britannique de l’électronique et des médias. Chaque vin porte un nom français.",
    quiz: [{ q: "Que signifie le nom Belle Côte ?", a: "Un beau coteau", x: ["Une belle dame", "Une côte bleue au bord de la mer", "Un petit château"] }],
  },
  us2_marcassin: {
    fact: "Petit domaine fondé dans les collines côtières du Sonoma par la consultante Helen Turley et son mari John Wetlaufer. Ce chardonnay culte n’est vendu que sur liste de diffusion.",
    quiz: [{ q: "Que désigne le mot « marcassin » ?", a: "Un jeune sanglier", x: ["Un faon", "Un lièvre", "Un renardeau"] }],
  },
  us2_ridge_lytton: {
    fact: "Assemblage à base de zinfandel de Ridge, issu d’un vignoble centenaire de Dry Creek Valley. Avec Geyserville, c’est l’un des deux piliers des zinfandels de Ridge.",
    quiz: [{ q: "Quelle est la particularité des étiquettes de Ridge Vineyards ?", a: "Elles listent tous les ingrédients utilisés", x: ["Elles indiquent les coordonnées GPS du vignoble", "Le vinificateur signe chaque bouteille", "Elles indiquent la météo du jour des vendanges"] }],
  },
  us2_rochioli: {
    fact: "Pinot noir de la famille Rochioli, qui cultive la terre dans la Russian River Valley depuis plusieurs générations. Ses vignes sont considérées comme les joyaux du pinot noir de la région.",
    quiz: [{ q: "Quel domaine culte de la Russian River Valley a bâti sa première renommée avec les raisins de la famille Rochioli ?", a: "Williams Selyem", x: ["Kosta Browne", "Kistler", "La Crema"] }],
  },
  us2_littorai: {
    fact: "Domaine de pinot noir des régions côtières fondé en 1993 par Ted Lemon et sa femme. Son nom, d’origine latine, signifie « les rivages ».",
    quiz: [{ q: "Dans quel domaine de Meursault Ted Lemon, fondateur de Littorai, a-t-il été le premier Américain à diriger la vinification ?", a: "Domaine Guy Roulot", x: ["Domaine Leflaive", "Domaine des Comtes Lafon", "Domaine de la Romanée-Conti"] }],
  },
  us2_flowers: {
    fact: "Domaine de pinot noir et de chardonnay fondé par Walt et Joan Flowers sur une crête de la Sonoma Coast dominant le Pacifique.",
    quiz: [{ q: "Quelle famille s’est associée à Flowers en 2009 et en a repris la direction ?", a: "La famille Huneeus (Quintessa)", x: ["La famille Jackson", "La famille Gallo", "La famille Mondavi"] }],
  },
  us2_merry_edwards: {
    fact: "Domaine de pinot noir de la Russian River Valley fondé en 1997 par Merry Edwards, de la première génération de femmes œnologues en Californie.",
    quiz: [{ q: "Quelle maison de Champagne a racheté Merry Edwards en 2019 ?", a: "Louis Roederer", x: ["Moët & Chandon", "Taittinger", "Bollinger"] }],
  },
  us2_sonoma_cutrer: {
    fact: "Chardonnay populaire de la Sonoma Coast, lancé en 1981. Il figure sur la carte des vins de nombreux restaurants américains.",
    quiz: [{ q: "Pour quel sport Sonoma-Cutrer a-t-il aménagé des terrains de compétition et accueilli des championnats du monde ?", a: "Le croquet", x: ["Le polo", "Le golf", "Le tennis"] }],
  },
  us2_hanzell: {
    fact: "Fondé en 1953 dans le Sonoma par James D. Zellerbach, ancien ambassadeur des États-Unis en Italie. Il a été le premier en Californie à pratiquer vraiment l’élevage en fût de chêne français.",
    quiz: [{ q: "D’où vient le nom Hanzell ?", a: "Du prénom de son épouse Hana associé à son nom, Zellerbach", x: ["D’un ancien nom de lieu hongrois", "De « petite colline » en allemand", "Du nom du premier vinificateur"] }],
  },
  us2_buena_vista: {
    fact: "Premier domaine viticole commercial de Californie, fondé en 1857 dans le Sonoma. Le Bourguignon Jean-Charles Boisset l’a racheté en 2011 et lui a redonné vie.",
    quiz: [{ q: "Quel pionnier d’origine hongroise, fondateur de Buena Vista, est surnommé « le père du vin californien » ?", a: "Agoston Haraszthy", x: ["Charles Krug", "Gustave Niebaum", "Georges de Latour"] }],
  },
  us2_csj_cinq: {
    fact: "Assemblage bordelais du Sonoma dont le millésime 1996 a été élu « vin de l’année » par Wine Spectator en 1999, une première pour un vin du Sonoma.",
    quiz: [{ q: "Que désigne le nom Cinq Cépages ?", a: "Les cinq cépages de l’assemblage", x: ["Cinq vignobles", "La cinquième vendange", "Cinq frères"] }],
  },
  us2_rodney_strong: {
    fact: "Domaine de Rodney Strong, pionnier qui s’est lancé dans le vin en 1959 et a joué un rôle clé pour faire du comté de Sonoma une grande région viticole.",
    quiz: [{ q: "Quel métier exerçait Rodney Strong avant de faire du vin ?", a: "Danseur à Broadway", x: ["Boxeur", "Pianiste de jazz", "Animateur de radio"] }],
  },
  us2_ferrari_carano_fume: {
    fact: "Domaine fondé en 1981 dans la Dry Creek Valley par Don et Rhonda Carano. Sa demeure de style italien, la Villa Fiore, et ses jardins sont célèbres.",
    quiz: [{ q: "Quelle affaire Don Carano, fondateur de Ferrari-Carano, dirigeait-il à Reno, dans le Nevada ?", a: "L’Eldorado Hotel Casino", x: ["Une station de ski", "Une compagnie ferroviaire", "Une mine d’argent"] }],
  },
  us2_dry_creek_fume: {
    fact: "Premier domaine fondé dans la Dry Creek Valley depuis la Prohibition, créé en 1972 par David Stare. Il a été le premier du Sonoma à utiliser le nom « Fumé Blanc ».",
    quiz: [{ q: "Que représente l’étiquette de Dry Creek Vineyard ?", a: "Un voilier", x: ["Un phare", "Un faucon", "Un sarment de vigne"] }],
  },
  us2_seghesio_zin: {
    fact: "Grande maison de zinfandel du Sonoma, née en 1895 lorsque l’Italien Edoardo Seghesio a planté ses premières vignes de zinfandel. Elle a survécu à la Prohibition.",
    quiz: [{ q: "Quelle société a racheté Seghesio Family Vineyards en 2011 ?", a: "Crimson Wine Group", x: ["E&J Gallo", "Jackson Family Wines", "Treasury Wine Estates"] }],
  },
  us2_coppola_claret: {
    fact: "Inspiré d’un claret de 1906 découvert dans les caves de l’ancien domaine de Napa racheté par le cinéaste Coppola. La bouteille est habillée d’un filet doré.",
    quiz: [{ q: "À l’origine, de quelle région le nom anglais « claret » désignait-il les vins rouges ?", a: "Bordeaux", x: ["Bourgogne", "Rioja", "Toscane"] }],
  },
  us2_sofia_bdb: {
    fact: "Né de la promesse faite par Coppola à sa fille Sofia de créer un jour un effervescent à son nom. C’est un effervescent léger et parfumé.",
    quiz: [{ q: "Quel film a réalisé Sofia Coppola, qui a donné son nom au Sofia Blanc de Blancs ?", a: "Lost in Translation", x: ["Le Parrain", "Apocalypse Now", "Dracula"] }],
  },
  us2_iron_horse: {
    fact: "Maison familiale d’effervescents de Green Valley, dans la Russian River Valley. Depuis le dîner du sommet Reagan-Gorbatchev de 1985, ses vins sont régulièrement servis lors d’événements à la Maison-Blanche.",
    quiz: [{ q: "D’où vient le nom Iron Horse (« cheval de fer ») ?", a: "D’une halte ferroviaire qui desservait ces terres au XIXe siècle", x: ["Du cheval de course du fondateur", "Des fers à cheval d’une forge", "Du nom d’une mine voisine"] }],
  },
  us2_j_cuvee20: {
    fact: "Maison d’effervescents fondée en 1986 dans la Russian River Valley par la fille du fondateur de Jordan Winery. E&J Gallo l’a rachetée en 2015.",
    quiz: [{ q: "Que représente le « J » de J Vineyards ?", a: "Sa fondatrice, Judy Jordan", x: ["L’initiale de « Jubilee » (fête)", "La forme en J du vignoble", "John, le fils de la fondatrice"] }],
  },
  us2_gloria_ferrer: {
    fact: "Premier domaine d’effervescents de Carneros, ouvert en 1986 par la famille Ferrer, grande maison espagnole de cava.",
    quiz: [
      { q: "Qui est la « Gloria » de Gloria Ferrer ?", a: "L’épouse de José Ferrer, de la famille Ferrer", x: ["La fille du fondateur", "Une sainte espagnole", "Une chanteuse d’opéra"] },
      { q: "Quelle maison espagnole de cava appartient à la famille Ferrer, fondatrice de Gloria Ferrer ?", a: "Freixenet", x: ["Codorníu", "Juvé y Camps", "Recaredo"] },
    ],
  },
  us2_korbel_natural: {
    fact: "Maison d’effervescents fondée en 1882 dans la Russian River Valley par les trois frères Korbel. Elle a servi à plusieurs reprises pour les toasts d’investiture des présidents américains.",
    quiz: [{ q: "De quelle région natale venaient les frères Korbel ?", a: "La Bohême (actuelle Tchéquie)", x: ["La Toscane (Italie)", "L’Alsace (France)", "La Catalogne (Espagne)"] }],
  },
  us2_turley_oldvines: {
    fact: "Grande maison de zinfandel fondée en 1993 par Larry Turley. Elle recherche et préserve de vieux vignobles californiens plus que centenaires.",
    quiz: [
      { q: "Quel domaine de Napa Larry Turley avait-il cofondé avant Turley Wine Cellars ?", a: "Frog’s Leap", x: ["Ridge Vineyards", "Ravenswood", "Seghesio"] },
      { q: "Quelle célèbre consultante en vinification est la sœur de Larry Turley ?", a: "Helen Turley", x: ["Heidi Barrett", "Merry Edwards", "Cathy Corison"] },
    ],
  },
  us2_ravenswood: {
    fact: "Domaine spécialisé dans le zinfandel, fondé en 1976 par Joel Peterson. Il est célèbre pour son logo de trois corbeaux formant un cercle.",
    quiz: [{ q: "Quelle est la célèbre devise de Ravenswood ?", a: "No Wimpy Wines (pas de vins mollassons)", x: ["In Vino Veritas", "Bottled Poetry", "Time’s Fun When You’re Having Flies"] }],
  },
  us2_menage_a_trois: {
    fact: "Assemblage rouge créé en 1996 par le domaine Folie à Deux, à Napa. Sucré et souple, il a lancé la mode des assemblages rouges aux États-Unis.",
    quiz: [
      { q: "Que désigne le nom Ménage à Trois ?", a: "Les trois cépages de l’assemblage", x: ["Les trois fondateurs", "Trois vignobles", "Trois fermentations"] },
      { q: "Quelle est la marque phare de la famille Trinchero, qui a racheté Ménage à Trois en 2004 ?", a: "Sutter Home", x: ["Barefoot", "Woodbridge", "Kendall-Jackson"] },
    ],
  },
  us2_tablas_esprit: {
    fact: "Fondé en 1989 à Paso Robles par la famille française Perrin et l’importateur Robert Haas. On y a planté des cépages rhodaniens dont les plants venaient de France.",
    quiz: [{ q: "Quel grand domaine de Châteauneuf-du-Pape appartient à la famille Perrin, cofondatrice de Tablas Creek ?", a: "Château de Beaucastel", x: ["Château Rayas", "Domaine du Vieux Télégraphe", "Château La Nerthe"] }],
  },
  us2_saxum_jb: {
    fact: "Assemblage de style rhodanien élaboré par Justin Smith sur le James Berry Vineyard, à l’ouest de Paso Robles. Le millésime 2007 a été élu « vin de l’année » par Wine Spectator en 2010.",
    quiz: [{ q: "Que signifie « saxum » en latin ?", a: "Rocher", x: ["Soleil", "Raisin", "Vent"] }],
  },
  us2_laventure: {
    fact: "Domaine fondé en 1998 à Paso Robles par Stephan Asseo, qui faisait du vin à Bordeaux. Son nom signifie « l’aventure » en français.",
    quiz: [{ q: "Pourquoi Stephan Asseo a-t-il quitté Bordeaux pour Paso Robles ?", a: "Pour assembler syrah et cabernet sans contraintes réglementaires", x: ["Ses vignes bordelaises avaient été inondées", "Pour élaborer des effervescents", "Pour reprendre l’entreprise familiale"] }],
  },
  us2_justin_isosceles: {
    fact: "L’assemblage bordelais phare de Justin, domaine fondé en 1981 à Paso Robles par Justin Baldwin. The Wonderful Company, propriétaire de Fiji Water et POM Wonderful, l’a racheté en 2010.",
    quiz: [{ q: "À quoi renvoie le nom Isosceles (« isocèle ») ?", a: "À un assemblage de trois cépages bordelais", x: ["À trois vignobles à flanc de colline", "Aux trois frères fondateurs", "À trois ans d’élevage"] }],
  },
  us2_daou_sol: {
    fact: "Le cabernet phare du domaine fondé au sommet d’une colline de Paso Robles par les frères Georges et Daniel Daou, d’origine libanaise. Son nom rend hommage à leur père.",
    quiz: [{ q: "Quel groupe viticole australien a racheté DAOU en 2023 ?", a: "Treasury Wine Estates", x: ["Constellation Brands", "E&J Gallo", "LVMH"] }],
  },
  us2_qupe_syrah: {
    fact: "Pionnier des cépages rhodaniens sur la Central Coast, fondé en 1982 par Bob Lindquist. Il partageait un même chai avec Au Bon Climat.",
    quiz: [{ q: "Que signifie « Qupé » dans la langue des Amérindiens Chumash ?", a: "Pavot de Californie", x: ["Phoque", "Chêne", "Aigle"] }],
  },
  us2_bonny_doon_cigare: {
    fact: "Assemblage de style Châteauneuf-du-Pape élaboré par Randall Grahm, surnommé le « Rhône Ranger ». L’étiquette montre un engin en forme de cigare survolant les vignes.",
    quiz: [{ q: "Qu’interdisait l’arrêté municipal de Châteauneuf-du-Pape de 1954 dont se moque Le Cigare Volant ?", a: "L’atterrissage de soucoupes volantes dans les vignes", x: ["Les vendanges de nuit", "Les vendanges à la machine", "Les bouchons en plastique"] }],
  },
  us2_foxen_pinot: {
    fact: "Domaine fondé en 1985 par Dick Doré et Bill Wathen sur les terres de la famille Doré, dans la Santa Maria Valley. Son ancre de travers est sa marque de fabrique.",
    quiz: [{ q: "D’où vient l’ancre de l’étiquette de Foxen ?", a: "D’un ancêtre capitaine qui marquait son bétail d’une ancre", x: ["Du missionnaire espagnol Junípero Serra", "De l’amiral Chester Nimitz", "Du père du premier vinificateur"] }],
  },
  us2_hitching_post: {
    fact: "Pinot noir de Santa Barbara élaboré par Frank Ostini, propriétaire du steakhouse Hitching Post à Buellton, et son ami Gray Hartley.",
    quiz: [{ q: "Quel film de 2004, où apparaissent le restaurant et le vin Hitching Post, les a rendus célèbres ?", a: "Sideways", x: ["Bottle Shock", "Une grande année", "Mondovino"] }],
  },
  us2_sanford_pinot: {
    fact: "Domaine des Sta. Rita Hills où Miles et Jack, les héros du film « Sideways », font leur toute première dégustation.",
    quiz: [{ q: "Qu’a fait Richard Sanford avec Michael Benedict dans les Sta. Rita Hills en 1971 ?", a: "Ils y ont planté le premier pinot noir de la région", x: ["Ils ont ouvert le premier domaine d’effervescents", "Ils ont organisé la première vente aux enchères de vin", "Ils ont obtenu la première certification bio"] }],
  },
  us2_fess_parker: {
    fact: "Domaine familial fondé dans la Santa Ynez Valley par l’acteur Fess Parker. Il est réputé pour ses pinots noirs et ses cépages rhodaniens de Santa Barbara.",
    quiz: [{ q: "Quel héros pionnier américain Fess Parker a-t-il incarné dans une série Disney des années 1950 ?", a: "Davy Crockett", x: ["Buffalo Bill", "Wyatt Earp", "Lone Ranger"] }],
  },
  us2_chalone_chard: {
    fact: "Domaine situé sur un plateau calcaire près des Pinnacles. Comme en Bourgogne, il cultive chardonnay et pinot noir sur des sols calcaires.",
    quiz: [{ q: "Quel classement le chardonnay 1974 de Chalone a-t-il obtenu parmi les blancs au « Jugement de Paris » de 1976 ?", a: "3e place", x: ["1re place", "6e place", "10e place"] }],
  },
  us2_wente_morningfog: {
    fact: "Chardonnay du plus ancien domaine familial en activité continue des États-Unis, fondé en 1883 dans la Livermore Valley par l’Allemand Carl Wente.",
    quiz: [{ q: "Quel clone de chardonnay est à l’origine de la plupart des vignobles de chardonnay de Californie ?", a: "Le clone Wente", x: ["Le clone Mondavi", "Le clone Chablis", "Le clone Napa"] }],
  },
  us2_concannon_ps: {
    fact: "Fondé en 1883 dans la Livermore Valley par l’Irlandais James Concannon. Pendant la Prohibition, le domaine a survécu en produisant du vin de messe.",
    quiz: [{ q: "Qu’a fait Concannon pour la première fois aux États-Unis dans les années 1960 ?", a: "Commercialiser un vin sous le nom de cépage petite sirah", x: ["Boucher un grand vin avec une capsule à vis", "Élaborer un rosé effervescent", "Vendre du vin en canette"] }],
  },
  us2_7deadlyzins: {
    fact: "Vin à succès lancé avec de vieux zinfandels par Michael et David, frères de la famille Phillips, agriculteurs à Lodi depuis des générations.",
    quiz: [{ q: "À quoi fait allusion le nom 7 Deadly Zins ?", a: "Aux sept péchés capitaux (Seven Deadly Sins)", x: ["Aux sept merveilles du monde", "À sept vignobles", "À sept ans de vieillissement"] }],
  },
  us2_adelsheim: {
    fact: "L’un des premiers domaines de l’Oregon, né en 1971 lorsque David Adelsheim et sa femme ont acheté des terres sur les collines du nord de la Willamette Valley.",
    quiz: [{ q: "Qui a peint les portraits de femmes qui ont longtemps orné les étiquettes d’Adelsheim ?", a: "Ginny Adelsheim, cofondatrice", x: ["Andy Warhol", "Norman Rockwell", "Georgia O’Keeffe"] }],
  },
  us2_argyle_brut: {
    fact: "Pionnier des effervescents de l’Oregon, fondé en 1987 à Dundee par un vinificateur australien et le vinificateur américain Rollin Soles.",
    quiz: [{ q: "Quel vinificateur australien a fondé Argyle avec Rollin Soles ?", a: "Brian Croser", x: ["Peter Lehmann", "Wolf Blass", "John Duval"] }],
  },
  us2_sokol_blosser: {
    fact: "Domaine pionnier de l’Oregon, qui a planté ses vignes dans les Dundee Hills en 1971. Il s’est engagé très tôt dans l’agriculture et l’architecture écologiques.",
    quiz: [{ q: "D’où vient le nom Sokol Blosser ?", a: "Des noms du couple fondateur, Susan Sokol et Bill Blosser", x: ["De l’association de deux noms de villages", "De « colline ensoleillée » en polonais", "Du nom du premier propriétaire du vignoble"] }],
  },
  us2_wvv_estate: {
    fact: "Domaine de la Willamette Valley fondé en 1983 par Jim Bernau. Il a beaucoup contribué à faire connaître le pinot noir de l’Oregon au grand public.",
    quiz: [{ q: "Quelle est la structure de propriété originale de Willamette Valley Vineyards ?", a: "Une société cotée aux petits actionnaires", x: ["Une communauté monastique", "Une université d’État", "Une tribu amérindienne"] }],
  },
  us2_ponzi_tavola: {
    fact: "Domaine pionnier de la Willamette Valley fondé en 1970 par Dick et Nancy Ponzi. Leur fille Luisa en a longtemps dirigé la vinification.",
    quiz: [{ q: "Quelle maison de Champagne a racheté Ponzi Vineyards en 2021 ?", a: "Bollinger", x: ["Moët & Chandon", "Louis Roederer", "Taittinger"] }],
  },
  us2_resonance: {
    fact: "Premier domaine créé hors de France par une grande maison bourguignonne. Tout a commencé en 2013 avec l’achat du vignoble Résonance, à Yamhill-Carlton.",
    quiz: [{ q: "Quel négociant bourguignon a fondé Résonance ?", a: "Louis Jadot", x: ["Joseph Drouhin", "Bouchard Père & Fils", "Albert Bichot"] }],
  },
  us2_nicolas_jay: {
    fact: "Domaine fondé en 2014 dans l’Oregon par Jean-Nicolas Méo, vigneron bourguignon de Vosne-Romanée, et Jay Boberg, dirigeant de maison de disques.",
    quiz: [{ q: "Quel domaine bourguignon dirige Jean-Nicolas Méo, cofondateur de Nicolas-Jay ?", a: "Domaine Méo-Camuzet", x: ["Domaine Leroy", "Domaine Dujac", "Domaine Georges Roumier"] }],
  },
  us2_columbia_crest_ge: {
    fact: "Grand domaine de l’État de Washington appartenant au même groupe que Chateau Ste. Michelle. Il est situé dans les Horse Heaven Hills, qui dominent le fleuve Columbia.",
    quiz: [{ q: "Quel vin de Columbia Crest a été élu « vin de l’année » par Wine Spectator en 2009 ?", a: "Le Reserve Cabernet Sauvignon 2005", x: ["Le Grand Estates Merlot", "Le H3 Cabernet Sauvignon", "Le Two Vines Red Blend"] }],
  },
  us2_14hands_cab: {
    fact: "Marque de l’État de Washington lancée en 2005 par le groupe Chateau Ste. Michelle. D’abord réservée aux restaurants, elle est devenue une grande marque grâce à son succès.",
    quiz: [{ q: "À quoi renvoie le nom 14 Hands (« 14 mains ») ?", a: "À la taille de petits chevaux sauvages", x: ["À 14 fondateurs", "À 14 vignobles", "À 14 vendangeurs"] }],
  },
  us2_kung_fu_girl: {
    fact: "Riesling créé par Charles Smith, le franc-tireur du vin de l’État de Washington. Ses marques ont été vendues à Constellation Brands en 2016.",
    quiz: [{ q: "Que faisait Charles Smith en Europe avant de se lancer dans le vin ?", a: "Manager de groupes de rock", x: ["Skateur professionnel", "Cascadeur de cinéma", "Chef de restaurant"] }],
  },
  us2_andrew_will_sorella: {
    fact: "Assemblage bordelais du domaine fondé en 1989 par Chris Camarda. « Sorella » signifie « sœur » en italien et rend hommage à sa sœur disparue.",
    quiz: [{ q: "D’où vient le nom du domaine Andrew Will ?", a: "D’Andrew, neveu du fondateur, et de Will, son fils", x: ["Des deux frères du fondateur", "Des deux propriétaires du premier vignoble", "D’un poète anglais"] }],
  },
  us2_woodward_canyon: {
    fact: "Deuxième domaine de la Walla Walla Valley, fondé en 1981 par Rick Small. Il a très tôt bâti la réputation du cabernet de l’État de Washington.",
    quiz: [{ q: "Quelle est la particularité des étiquettes de l’Artist Series de Woodward Canyon ?", a: "Chaque année, l’œuvre d’un artiste différent", x: ["Une photo de famille du fondateur", "Une photo aérienne du vignoble", "Un graphique météo du millésime"] }],
  },
  us2_lecole41_semillon: {
    fact: "Troisième domaine de la Walla Walla Valley, ouvert en 1983 dans une ancienne école de Frenchtown construite en 1915, d’où son nom.",
    quiz: [{ q: "Que représente le « 41 » de L’Ecole No 41 ?", a: "Le numéro du district scolaire de l’école", x: ["Le 41e anniversaire du fondateur", "La route 41", "41 vignobles"] }],
  },
  us2_long_shadows_sequel: {
    fact: "Syrah de Long Shadows, domaine où Allen Shoup, ancien dirigeant de Chateau Ste. Michelle, a confié chaque vin à un vinificateur de renommée mondiale.",
    quiz: [{ q: "Dans quelle grande maison australienne John Duval, qui élabore Sequel, a-t-il été chef vinificateur ?", a: "Penfolds", x: ["Henschke", "Torbreck", "Two Hands"] }],
  },
  us2_long_shadows_pedestal: {
    fact: "Rouge de l’État de Washington à base de merlot, que Long Shadows a confié à un consultant vedette de Bordeaux.",
    quiz: [{ q: "Quel célèbre œnologue-conseil bordelais élabore le Pedestal Merlot ?", a: "Michel Rolland", x: ["Pierre Seillan", "Stéphane Derenoncourt", "Éric Boissenot"] }],
  },
  us2_long_shadows_feather: {
    fact: "Cabernet de l’État de Washington que Long Shadows a confié à un maître du cabernet de montagne de Napa.",
    quiz: [{ q: "Quel vinificateur de Howell Mountain, à Napa, élabore le Feather Cabernet ?", a: "Randy Dunn", x: ["Heidi Barrett", "Paul Hobbs", "Philippe Melka"] }],
  },
  us2_long_shadows_poetsleap: {
    fact: "Riesling de l’État de Washington que Long Shadows a confié au vinificateur d’un grand domaine de la Nahe, en Allemagne.",
    quiz: [{ q: "Quel vinificateur de la Nahe élabore le Poet’s Leap Riesling ?", a: "Armin Diel", x: ["Ernst Loosen", "Egon Müller", "Helmut Dönnhoff"] }],
  },
  us2_doubleback: {
    fact: "Domaine fondé dans sa ville natale par Drew Bledsoe, star du sport originaire de Walla Walla, après sa retraite. Chris Figgins, de Leonetti, en a dirigé les premières vinifications.",
    quiz: [
      { q: "Quel était le métier de Drew Bledsoe, fondateur de Doubleback ?", a: "Quarterback en NFL", x: ["Basketteur en NBA", "Lanceur en Major League Baseball", "Golfeur professionnel"] },
      { q: "Quel sens porte le nom Doubleback ?", a: "Le retour au pays natal", x: ["Un double vieillissement", "L’assemblage de deux vignobles", "Une tactique de football américain"] },
    ],
  },
  us2_wiemer_dry_riesling: {
    fact: "Grande maison de riesling des Finger Lakes, fondée en 1979 au bord du lac Seneca par Hermann J. Wiemer, originaire de Bernkastel, dans la Mosel.",
    quiz: [{ q: "Quelle activité Hermann J. Wiemer a-t-il menée en parallèle de son domaine ?", a: "Une pépinière de vignes greffées", x: ["Une fromagerie", "Une cidrerie", "Une tonnellerie"] }],
  },
  us2_drfrank_rkatsiteli: {
    fact: "Blanc élaboré par le Dr Konstantin Frank à partir d’un cépage résistant au froid, originaire de l’ex-URSS, qu’il a introduit dans les Finger Lakes.",
    quiz: [{ q: "De quel pays est originaire le rkatsiteli, cépage planté par le Dr Frank dans les Finger Lakes ?", a: "La Géorgie", x: ["L’Arménie", "La Grèce", "La Bulgarie"] }],
  },
  us2_wolffer_rose: {
    fact: "Rosé du domaine fondé en 1988 dans les Hamptons, à Long Island, par Christian Wölffer, originaire de Hambourg. C’est un symbole des étés new-yorkais.",
    quiz: [{ q: "Quel rosé Wölffer Estate a-t-il lancé en surfant sur la vogue du rosé ?", a: "Summer in a Bottle", x: ["Whispering Angel", "Miraval", "Hampton Water"] }],
  },
  us2_bedell_merlot: {
    fact: "Domaine de la North Fork de Long Island. Son merlot 2009, servi au déjeuner d’investiture présidentielle de 2013, est devenu le premier vin de New York servi lors d’une investiture.",
    quiz: [{ q: "Quel est le film phare de New Line Cinema, studio dirigé par Michael Lynne, qui a racheté Bedell Cellars en 2000 ?", a: "Le Seigneur des anneaux", x: ["Harry Potter", "Star Wars", "Le Parrain"] }],
  },
  us2_barboursville_octagon: {
    fact: "Domaine de Virginie fondé en 1976 par la famille italienne Zonin. Sur le domaine subsistent les ruines d’une ancienne demeure de gouverneur dessinée par Thomas Jefferson.",
    quiz: [{ q: "D’où vient le nom Octagon (« octogone ») ?", a: "De la pièce octogonale de la demeure dessinée par Jefferson", x: ["D’un fût de chêne octogonal", "D’un assemblage de huit cépages", "D’un vignoble divisé en huit parcelles"] }],
  },
  us2_rdv_lostmountain: {
    fact: "Domaine fondé par Rutger de Vink, ancien des Marines, sur des collines granitiques au pied des Blue Ridge, en Virginie ; premier millésime en 2008. Il a récemment été vendu à la famille propriétaire de Château Montrose.",
    quiz: [{ q: "Que signifie le nom RdV ?", a: "Les initiales du fondateur et l’abréviation de « rendez-vous »", x: ["Le sigle de « rouge de Virginie »", "Les coordonnées du vignoble", "Le nom d’une rivière voisine"] }],
  },
  us2_early_mountain_pm: {
    fact: "Domaine fondé en 2012 au pied des Blue Ridge, en Virginie, par un couple d’entrepreneurs de l’Internet. Il mise sur le petit manseng, cépage blanc emblématique de la Virginie.",
    quiz: [{ q: "Quelle société Internet Steve Case, fondateur d’Early Mountain, a-t-il cofondée ?", a: "AOL", x: ["Yahoo", "Netscape", "eBay"] }],
  },
  us2_gruet_brut: {
    fact: "Maison d’effervescents fondée en 1984 par une famille champenoise qui a acheté des terres sur les hauts plateaux du Nouveau-Mexique. Ses vins sont élaborés selon la méthode champenoise.",
    quiz: [{ q: "Dans quelle région française la famille Gruet faisait-elle du vin à l’origine ?", a: "La Champagne", x: ["L’Alsace", "La Bourgogne", "La Loire"] }],
  },
  us2_missionhill_reserve_chard: {
    fact: "Domaine perché sur une colline dominant le lac Okanagan. Il est célèbre pour son bâtiment aux allures de monastère et son haut clocher.",
    quiz: [{ q: "Quel prix le chardonnay 1992 de Mission Hill a-t-il reçu à l’International Wine & Spirit Competition (IWSC) de Londres en 1994 ?", a: "Le trophée du meilleur chardonnay du monde", x: ["Le prix du meilleur vin de glace", "Le prix du meilleur effervescent", "Le prix du meilleur assemblage rouge"] }],
  },
  us2_burrowing_owl_merlot: {
    fact: "Domaine fondé par Jim Wyse dans la zone désertique du sud de l’Okanagan. Il doit son nom à la chevêche des terriers, une chouette qui disparaissait de la région.",
    quiz: [{ q: "Que fait Burrowing Owl des frais de dégustation qu’il perçoit ?", a: "Il les reverse à la protection de la chevêche des terriers", x: ["Il finance des bourses pour les ouvriers viticoles", "Il achète des fûts de chêne", "Il les reverse à la caserne de pompiers locale"] }],
  },
  us2_quails_gate_foch: {
    fact: "Domaine de la famille Stewart, qui cultive la terre à West Kelowna depuis 1908. Ses vieilles vignes plantées dans les années 1960 donnent un rouge concentré.",
    quiz: [{ q: "En l’honneur de qui le cépage « maréchal foch » a-t-il été nommé ?", a: "Ferdinand Foch, commandant en chef des Alliés en 1918", x: ["Napoléon Bonaparte", "Le marquis de La Fayette", "Charles de Gaulle"] }],
  },
  us2_osoyoos_larose: {
    fact: "Domaine de style bordelais fondé en 1998 au bord du lac Osoyoos par le Groupe Taillan, de Bordeaux, et le Canadien Vincor. Il appartient aujourd’hui au seul Groupe Taillan.",
    quiz: [{ q: "De quel château bordelais du Groupe Taillan vient le « Larose » d’Osoyoos Larose ?", a: "Château Gruaud-Larose", x: ["Château Latour", "Château Lagrange", "Château Lafon-Rochet"] }],
  },
  us2_nkmip_syrah: {
    fact: "Domaine situé à Osoyoos, dans la zone désertique du Canada. Nk’Mip signifie « terre basse » dans la langue autochtone.",
    quiz: [{ q: "Quel record détient Nk’Mip Cellars ?", a: "Premier domaine d’Amérique du Nord appartenant à une communauté autochtone", x: ["Premier vin de glace canadien", "Première certification bio au Canada", "Première maison d’effervescents d’Amérique du Nord"] }],
  },
  us2_summerhill_cipes: {
    fact: "L’effervescent phare du domaine bio fondé en 1986 à Kelowna par la famille Cipes. À base de riesling, il est élaboré par seconde fermentation en bouteille.",
    quiz: [{ q: "À quoi sert la pyramide que Summerhill Pyramid Winery a construite sur le modèle de la grande pyramide de Gizeh ?", a: "À faire vieillir le vin", x: ["À organiser des dégustations", "À faire sécher les raisins", "À fabriquer des fûts"] }],
  },
  us2_clos_jordanne: {
    fact: "Domaine du Niagara fondé par le Bourguignon Boisset et le Canadien Vincor. Son millésime 2005 a pris la 1re place au « Jugement de Montréal » de 2009, devant de grands vins de Bourgogne et de Californie.",
    quiz: [{ q: "Quel architecte a dessiné le chai du Clos Jordanne, qui n’a finalement jamais été construit ?", a: "Frank Gehry", x: ["Renzo Piano", "Tadao Ando", "Zaha Hadid"] }],
  },
  us2_peller_ice_cuvee: {
    fact: "Effervescent du Niagara élaboré selon la méthode champenoise. Un ingrédient typiquement canadien, ajouté à la dernière étape, lui donne une douceur subtile.",
    quiz: [{ q: "Qu’ajoute-t-on lors du dosage final de l’Ice Cuvée ?", a: "Du vin de glace de vidal", x: ["Du sirop d’érable", "Du miel", "De l’eau-de-vie de pomme"] }],
  },
  us2_gretzky_cab_merlot: {
    fact: "Assemblage rouge du domaine et distillerie de whisky fondé à Niagara-on-the-Lake par la légende du hockey sur glace Wayne Gretzky.",
    quiz: [{ q: "Quel numéro de maillot de Wayne Gretzky apparaît souvent sur les vins de sa marque ?", a: "99", x: ["66", "87", "9"] }],
  },
};

export default T;
