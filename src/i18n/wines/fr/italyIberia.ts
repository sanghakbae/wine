import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  ib_sorisanlorenzo: {
    fact: "Premier vin de parcelle unique lancé par Gaja en 1967. Longtemps vendu en « Langhe Nebbiolo » avec un peu de barbera dans l’assemblage, il est revenu à l’appellation Barbaresco à partir du millésime 2013.",
    quiz: [
      { q: "Dans le Sorì San Lorenzo de Gaja, que signifie « Sorì » en dialecte piémontais ?", a: "Coteau ensoleillé exposé au sud", x: ["Vallée brumeuse", "Parvis d’église", "Vieux pied de vigne"] },
    ],
  },
  ib_monfortino: {
    fact: "Barolo Riserva élaboré par Giacomo Conterno avec des raisins de Serralunga. Sommet du Barolo traditionnel, il n’est commercialisé qu’après plusieurs années d’élevage en grands foudres.",
    quiz: [
      { q: "Quelles années le Monfortino Barolo Riserva est-il produit ?", a: "Seulement les grands millésimes", x: ["Chaque année sans exception", "Exactement une année sur deux", "Seulement les années bissextiles"] },
      { q: "Quel vignoble de Serralunga, acheté par Giovanni Conterno, fournit les raisins du Monfortino ?", a: "Cascina Francia", x: ["Monprivato", "Brunate", "Cannubi"] },
    ],
  },
  ib_giacosa: {
    fact: "Barolo du vignoble Falletto, que Bruno Giacosa, maître du nebbiolo d’abord réputé comme négociant achetant ses raisins, a acquis en propre à Serralunga.",
    quiz: [
      { q: "Quelle couleur d’étiquette Bruno Giacosa réserve-t-il à ses Riserva des plus grands millésimes ?", a: "Rouge", x: ["Noir", "Or", "Bleu"] },
    ],
  },
  ib_bartolomascarello: {
    fact: "Symbole du Barolo traditionnel, fidèle à l’ancienne méthode d’un seul Barolo assemblant plusieurs vignobles. À la mort de Bartolo, sa fille Maria Teresa a repris le flambeau.",
    quiz: [
      { q: "Quelle formule Bartolo Mascarello a-t-il inscrite sur des étiquettes dessinées de sa main, faisant sensation ?", a: "No Barrique, No Berlusconi", x: ["Terroir or Nothing", "Viva il Nebbiolo", "Slow Wine, Slow Life"] },
    ],
  },
  ib_monprivato: {
    fact: "Vin phare de la famille Mascarello, quasi unique propriétaire du vignoble Monprivato à Castiglione Falletto. Il compte parmi les Barolo traditionnels les plus élégants et parfumés.",
    quiz: [
      { q: "Quelle Riserva Giuseppe Mascarello tire-t-il, les bonnes années seulement, de la meilleure parcelle de Monprivato ?", a: "Ca d’Morissio", x: ["Monfortino", "Bricco Rocche", "La Poja"] },
    ],
  },
  ib_vietti: {
    fact: "Grande maison de Castiglione Falletto qui, sous la conduite d’Alfredo Currado, fut parmi les premières à proposer des Barolo de cru. Elle a été rachetée en 2016 par la famille américaine Krause.",
    quiz: [
      { q: "Quel cépage blanc piémontais, presque disparu, Alfredo Currado de Vietti a-t-il sauvé ?", a: "Arneis", x: ["Cortese", "Moscato", "Timorasso"] },
    ],
  },
  ib_piocesare: {
    fact: "Maison familiale qui vinifie encore aujourd’hui dans ses caves du vieil Alba, là où subsistent les anciens remparts romains. Les descendants du fondateur la dirigent de génération en génération.",
    quiz: [
      { q: "En quelle année Cesare Pio a-t-il fondé Pio Cesare à Alba ?", a: "1881", x: ["1781", "1931", "1971"] },
    ],
  },
  ib_marchesibarolo: {
    fact: "Maison héritière des anciennes caves des marquis Falletti, dans le village de Barolo. C’est ici, dit-on, que le Barolo est devenu un rouge sec de longue garde.",
    quiz: [
      { q: "Dans l’histoire de Marchesi di Barolo, combien de fûts la marquise Giulia Colbert Falletti envoya-t-elle au roi Charles-Albert ?", a: "325 (un par jour, hors Carême)", x: ["12 (un par mois)", "52 (un par semaine)", "1000"] },
    ],
  },
  ib_fontanafredda: {
    fact: "Maison née sur un domaine royal de Serralunga d’Alba. Le comte de Mirafiori, fils du roi et de sa maîtresse, y a véritablement lancé la production de vin.",
    quiz: [
      { q: "Quel roi acheta le domaine de Fontanafredda pour l’offrir à sa maîtresse, la « Bela Rosin » ?", a: "Victor-Emmanuel II", x: ["Humbert Ier", "Charles-Albert", "Napoléon III"] },
    ],
  },
  ib_scavino: {
    fact: "Domaine familial de Castiglione Falletto qui, avec des Barolo modernes élevés en barriques, a mené le mouvement des « Barolo Boys » dans les années 1980-1990.",
    quiz: [
      { q: "Quel vinificateur, à la tête de Paolo Scavino, s’est fait un nom avec des Barolo modernes ?", a: "Enrico Scavino", x: ["Elio Altare", "Roberto Voerzio", "Bruno Giacosa"] },
    ],
  },
  ib_ceretto: {
    fact: "Grande maison d’Alba développée par les frères Bruno et Marcello Ceretto. Dans le vignoble Brunate, à La Morra, se dresse la colorée « chapelle du Barolo » qui leur appartient.",
    quiz: [
      { q: "À quels artistes la famille Ceretto a-t-elle confié la décoration colorée de la petite chapelle du vignoble Brunate ?", a: "Sol LeWitt et David Tremlett", x: ["Keith Haring et Andy Warhol", "Damien Hirst", "Jeff Koons"] },
    ],
  },
  ib_altare: {
    fact: "Chef de file des « Barolo Boys » à La Morra, il a imposé le Barolo moderne avec des macérations courtes et de petites barriques neuves, au prix d’un grave conflit avec son père.",
    quiz: [
      { q: "Qu’est-ce qu’Elio Altare a détruit à la tronçonneuse pour imposer ses nouvelles méthodes ?", a: "Les vieux foudres (botti) de son père", x: ["Les vieux arbres du vignoble", "Le toit de la cave", "L’ancien pressoir"] },
    ],
  },
  ib_voerzio: {
    fact: "Barolo de cru élaboré par Roberto Voerzio à La Morra. Cerequio est un vignoble réputé à cheval sur les communes de La Morra et de Barolo.",
    quiz: [
      { q: "Pour quelle pratique viticole Roberto Voerzio est-il célèbre ?", a: "Des vendanges en vert sévères pour des rendements minimes", x: ["Vendanger des raisins gelés", "Irriguer tous les jours", "Vendanger uniquement à la machine"] },
    ],
  },
  ib_produttori: {
    fact: "Coopérative réunissant les viticulteurs du village de Barbaresco. Les grandes années, elle produit séparément des Riserva de neuf crus, dont Asili et Rabajà.",
    quiz: [
      { q: "Qui fonda en 1958 les Produttori del Barbaresco avec les paysans ?", a: "Le curé du village", x: ["Le roi d’Italie", "Angelo Gaja", "Un négociant anglais"] },
    ],
  },
  ib_braida: {
    fact: "Vin emblématique de Giacomo Bologna, qui a hissé la barbera du simple vin de table au rang de grand vin. Premier millésime : 1982.",
    quiz: [
      { q: "Quelle innovation Giacomo Bologna, de Braida, a-t-il tentée avec le Bricco dell’Uccellone ?", a: "Élever la barbera en barriques neuves", x: ["Faire un effervescent de barbera", "Vinifier des raisins passerillés", "Assembler la barbera avec du raisin blanc"] },
    ],
  },
  ib_cascinetta: {
    fact: "Moscato d’Asti doux et légèrement perlant, autour de 5 % d’alcool. La fermentation est stoppée en cours de route pour garder le sucre et les arômes floraux du raisin.",
    quiz: [
      { q: "Comment appelle-t-on en Italie un vin légèrement pétillant comme le Moscato d’Asti Cascinetta de Vietti ?", a: "Frizzante", x: ["Passito", "Ripasso", "Recioto"] },
    ],
  },
  ib_martiniasti: {
    fact: "Effervescent doux obtenu en fermentant le moscato en une seule fois dans de grandes cuves closes qui retiennent les bulles. Léger, il titre environ 7 % d’alcool.",
    quiz: [
      { q: "Quelle boisson a rendu Martini & Rossi, producteur du Martini Asti, célèbre dans le monde entier ?", a: "Vermouth", x: ["Grappa", "Limoncello", "Sambuca"] },
      { q: "En quelle année Martini & Rossi, producteur du Martini Asti, a-t-il vu le jour à Turin ?", a: "1863", x: ["1763", "1923", "1963"] },
    ],
  },
  ib_ganciaasti: {
    fact: "Pionnier du spumante italien, installé à Canelli dans la région d’Asti. Son fondateur Carlo Gancia est surnommé « le père du spumante italien ».",
    quiz: [
      { q: "Dans quelle ville française Carlo Gancia, fondateur de Gancia, est-il allé apprendre l’élaboration des vins effervescents ?", a: "Reims", x: ["Bordeaux", "Dijon", "Lyon"] },
    ],
  },
  ib_ornellaia: {
    fact: "Supertoscan élaboré avec des cépages bordelais sur les collines côtières de Bolgheri. Après plusieurs changements de propriétaire, il appartient aujourd’hui à la famille Frescobaldi.",
    quiz: [
      { q: "Qui a fondé Ornellaia en 1981 ?", a: "Lodovico Antinori", x: ["Piero Antinori", "Mario Incisa della Rocchetta", "Angelo Gaja"] },
      { q: "Comment s’appelle le projet d’Ornellaia où un artiste dessine chaque année une étiquette spéciale ?", a: "Vendemmia d’Artista", x: ["Arte in Bottiglia", "Biennale del Vino", "Galleria Bolgheri"] },
    ],
  },
  ib_masseto: {
    fact: "L’un des rouges les plus chers d’Italie, issu uniquement de merlot d’une seule parcelle des collines de Bolgheri. Lancé avec le millésime 1986, il dispose aujourd’hui de sa propre cave.",
    quiz: [
      { q: "Quel sol particulier fait la réputation du vignoble de Masseto ?", a: "Une argile aux reflets bleutés", x: ["Des cendres volcaniques noires", "Un calcaire crayeux blanc", "Du grès rouge"] },
    ],
  },
  ib_tignanello: {
    fact: "Supertoscan issu du vignoble Tignanello de la famille Antinori. Lancé avec le millésime 1971, il a changé le cours du vin italien.",
    quiz: [
      { q: "Pourquoi le Tignanello a-t-il paru révolutionnaire dans les années 1970 ?", a: "Sangiovese élevé en barrique, sans raisins blancs", x: ["Raisins séchés pour le rendre doux", "Premier vin sous capsule à vis", "Rouge coupé de vin blanc"] },
    ],
  },
  ib_solaia: {
    fact: "Supertoscan à dominante de cabernet sauvignon qu’Antinori élabore sur la parcelle voisine de Tignanello. Premier millésime : 1978.",
    quiz: [
      { q: "Quel honneur le Solaia 1997 a-t-il été le premier vin italien à recevoir ?", a: "N° 1 du « Wine of the Year » de Wine Spectator", x: ["Premier 100 points de Robert Parker", "Vin de messe officiel du Vatican", "Fournisseur agréé de la Cour britannique"] },
      { q: "Que signifie le nom Solaia ?", a: "Endroit bien ensoleillé", x: ["Terre salée", "Arbre solitaire", "Parcelle close de murets"] },
    ],
  },
  ib_guadoaltasso: {
    fact: "Rouge phare du domaine de la famille Antinori à Bolgheri, lancé avec le millésime 1990.",
    quiz: [
      { q: "Que signifie le nom Guado al Tasso ?", a: "Le gué du blaireau", x: ["La colline du renard", "La source du loup", "La forêt du cerf"] },
    ],
  },
  ib_casanovadineri: {
    fact: "Domaine familial fondé par la famille Neri à Montalcino au début des années 1970. Tenuta Nuova est un brunello dense et puissant issu des vignes du sud.",
    quiz: [
      { q: "Quel honneur le Casanova di Neri Tenuta Nuova 2001 a-t-il reçu en 2006 ?", a: "N° 1 du « Wine of the Year » de Wine Spectator", x: ["Médaille du président de la République", "Grand prix de la Biennale de Venise", "Vin de messe officiel du Vatican"] },
    ],
  },
  ib_soldera: {
    fact: "Sangiovese légendaire élaboré par Gianfranco Soldera à Montalcino en grands foudres de chêne de Slavonie. Depuis sa rupture avec le Consorzio du Brunello, il sort en IGT Toscana.",
    quiz: [
      { q: "Que s’est-il passé en 2012 dans la cave de Case Basse ?", a: "Un ex-employé rancunier a vidé les foudres de plusieurs millésimes", x: ["Une inondation a noyé la cave", "La foudre a provoqué un incendie", "Tous les millésimes ont été volés"] },
    ],
  },
  ib_poggiodisotto: {
    fact: "Domaine de Castelnuovo dell’Abate, au sud-est de Montalcino. Longues macérations et élevage en grands foudres y donnent un brunello traditionnel tout en finesse.",
    quiz: [
      { q: "Qui a fondé Poggio di Sotto et l’a fait connaître par ses brunellos traditionnels ?", a: "Piero Palmucci", x: ["Gianfranco Soldera", "Angelo Gaja", "Paolo De Marchi"] },
    ],
  },
  ib_banfi: {
    fact: "Domaine qui a bâti un immense vignoble au sud de Montalcino, englobant le château médiéval de Poggio alle Mura.",
    quiz: [
      { q: "Qui a fondé Castello Banfi à Montalcino en 1978 ?", a: "Les frères Mariani, Italo-Américains", x: ["La famille Antinori", "La famille Rothschild", "Un négociant de la Cour d’Angleterre"] },
    ],
  },
  ib_ilpoggione: {
    fact: "L’un des plus anciens domaines de Montalcino, à Sant’Angelo in Colle, au sud de l’appellation. Une même famille le cultive de génération en génération depuis la fin du XIXe siècle.",
    quiz: [
      { q: "Quelle famille possède Il Poggione depuis des générations ?", a: "La famille Franceschi", x: ["La famille Biondi Santi", "La famille Frescobaldi", "La famille Antinori"] },
    ],
  },
  ib_coldorcia: {
    fact: "Grand domaine de Montalcino qui, comme son nom l’indique, domine la vallée de l’Orcia depuis sa colline. Son vaste vignoble est cultivé en bio.",
    quiz: [
      { q: "Avec quelle boisson la famille Marone Cinzano, qui racheta Col d’Orcia en 1973, s’était-elle d’abord fait un nom ?", a: "Vermouth Cinzano", x: ["Campari", "Aperol", "Fernet-Branca"] },
    ],
  },
  ib_castellodiama: {
    fact: "Grande maison du Chianti Classico installée dans le hameau d’Ama, à Gaiole in Chianti. Elle s’est aussi fait connaître avec « L’Apparita », un pur merlot.",
    quiz: [
      { q: "Qu’est-ce que Castello di Ama a fait entrer vers 2000 dans ses vignes et sa villa, faisant sensation ?", a: "Des installations de grands artistes contemporains", x: ["Un musée des ordres de chevalerie", "Une station thermale au vin", "Une grande centrale solaire"] },
    ],
  },
  ib_flaccianello: {
    fact: "Vin phare de Fontodi, élaboré à 100 % de sangiovese par Giovanni Manetti à Panzano. Premier millésime : 1981.",
    quiz: [
      { q: "Quel surnom porte l’amphithéâtre de coteaux de Panzano d’où vient le Flaccianello ?", a: "Conca d’Oro (conque d’or)", x: ["Val d’Orcia", "Colli Senesi", "Monte Amiata"] },
    ],
  },
  ib_fontalloro: {
    fact: "Pur sangiovese de Fèlsina, à Castelnuovo Berardenga, issu de vignes à cheval sur le Chianti Classico et les Colli Senesi.",
    quiz: [
      { q: "Qui a acheté le domaine de Fèlsina en 1966 ?", a: "Domenico Poggiali", x: ["Piero Antinori", "Sergio Manetti", "Gianfranco Soldera"] },
    ],
  },
  ib_cepparello: {
    fact: "Pur sangiovese qui a fait la renommée de Paolo De Marchi. Le domaine a été racheté en 2022 par le groupe français EPI, propriétaire de Biondi Santi.",
    quiz: [
      { q: "D’où vient le nom du domaine Isole e Olena ?", a: "De la réunion de deux hameaux, Isole et Olena", x: ["Des prénoms des deux filles du fondateur", "D’une île et d’un olivier", "Du nom d’un ancien monastère"] },
    ],
  },
  ib_ducaleoro: {
    fact: "Chianti Classico haut de gamme de Ruffino, reconnaissable à son étiquette dorée. Ruffino est une vieille maison toscane fondée en 1877 par deux cousins.",
    quiz: [
      { q: "À qui le nom « Ducale » (ducal) de la Riserva Ducale de Ruffino fait-il référence ?", a: "Au duc d’Aoste, amateur des vins Ruffino", x: ["Au grand-duc de Médicis", "Au duc de Milan", "Au doge de Venise"] },
    ],
  },
  ib_nipozzano: {
    fact: "Chianti Rùfina Riserva issu des vignes entourant le château médiéval de Nipozzano, à Rufina, à l’est de Florence. C’est le vin emblématique de la famille Frescobaldi.",
    quiz: [
      { q: "Depuis combien de temps la famille Frescobaldi produit-elle du vin en Toscane ?", a: "Plus de 700 ans", x: ["Environ 50 ans", "Environ 150 ans", "Environ 300 ans"] },
    ],
  },
  ib_luce: {
    fact: "Vin de Montalcino qui assemble sangiovese et merlot. Son nom signifie « lumière », et son étiquette montre un soleil rayonnant.",
    quiz: [
      { q: "Quelles deux familles ont créé ensemble Luce, lancé avec le millésime 1993 ?", a: "Frescobaldi et Robert Mondavi", x: ["Antinori et Rothschild", "Gaja et Mondavi", "Frescobaldi et Rothschild"] },
    ],
  },
  ib_serrenuove: {
    fact: "Second vin d’Ornellaia, lancé avec le millésime 1997. Il est conçu pour être apprécié plus jeune que le grand vin.",
    quiz: [
      { q: "Quelle famille possède aujourd’hui Ornellaia, qui produit Le Serre Nuove ?", a: "Frescobaldi", x: ["Antinori", "Gaja", "Marzotto"] },
    ],
  },
  ib_pergoletorte: {
    fact: "Vin légendaire que Sergio Manetti élaborait à 100 % de sangiovese, quitte à abandonner l’appellation Chianti Classico. Premier millésime : 1977.",
    quiz: [
      { q: "Quelle image change à chaque millésime sur l’étiquette de Le Pergole Torte ?", a: "Un portrait de femme du peintre Alberto Manfredi", x: ["Une gravure d’église", "Une aquarelle de grappe", "Les armoiries de la famille"] },
    ],
  },
  ib_avignonesi: {
    fact: "Domaine phare de Montepulciano. Dirigé depuis 2009 par la Belge Virginie Saverys, il est passé à la biodynamie.",
    quiz: [
      { q: "Pour quel vin de dessert toscan, fait de raisins séchés et longuement vieilli, Avignonesi est-il particulièrement réputé ?", a: "Vin Santo", x: ["Recioto", "Marsala", "Moscato d’Asti"] },
    ],
  },
  ib_redigaffi: {
    fact: "Vin culte 100 % merlot de Tua Rita, à Suvereto, sur la côte toscane. Premier millésime : 1994.",
    quiz: [
      { q: "D’où vient le nom du domaine Tua Rita, qui produit Redigaffi ?", a: "Du nom de sa fondatrice, Rita Tua", x: ["Du nom de l’église du village", "D’une ancienne voie romaine", "D’une rivière voisine"] },
    ],
  },
  ib_villaantinori: {
    fact: "Rouge toscan incontournable d’Antinori, apparu en 1928. Son étiquette représente la villa de la famille Antinori.",
    quiz: [
      { q: "En quelle année la famille Antinori s’est-elle lancée dans le vin en entrant dans la corporation des vignerons de Florence ?", a: "1385", x: ["1685", "1885", "1935"] },
    ],
  },
  ib_quintarelli: {
    fact: "Amarone légendaire de Giuseppe Quintarelli, « le maître de la Vénétie ». Produit seulement les bonnes années, il ne sort qu’après un long élevage en grands foudres.",
    quiz: [
      { q: "Comment s’appelle le vin que Giuseppe Quintarelli élaborait comme un amarone, avec du cabernet franc et d’autres raisins séchés ?", a: "Alzero", x: ["La Poja", "Costasera", "Ripassa"] },
    ],
  },
  ib_dalforno: {
    fact: "Amarone culte au style extrêmement concentré, élaboré par Romano Dal Forno dans le Val d’Illasi, à l’est de la Valpolicella. Il vieillit longuement en barriques neuves.",
    quiz: [
      { q: "Quel vigneron a été le mentor et la plus grande influence du jeune Romano Dal Forno ?", a: "Giuseppe Quintarelli", x: ["Angelo Gaja", "Gianfranco Soldera", "Edoardo Valentini"] },
    ],
  },
  ib_allegrini: {
    fact: "Amarone élaboré de génération en génération par la famille Allegrini à Fumane, en Valpolicella Classico. Cette grande maison a été pionnière des vins de parcelle.",
    quiz: [
      { q: "Quel est le célèbre vin de parcelle 100 % corvina d’Allegrini ?", a: "La Poja", x: ["Alzero", "Costasera", "Monprivato"] },
    ],
  },
  ib_bertani: {
    fact: "Amarone traditionnel réputé pour son très long vieillissement avant commercialisation. Bertani fut l’un des pionniers de la mise en bouteille de l’amarone.",
    quiz: [
      { q: "En quelle année les frères Bertani ont-ils fondé leur maison à Vérone ?", a: "1857", x: ["1757", "1907", "1957"] },
    ],
  },
  ib_zenato: {
    fact: "Amarone de Zenato, maison installée au sud du lac de Garde. Fondée en 1960 par Sergio Zenato, elle est aussi réputée pour son Lugana blanc.",
    quiz: [
      { q: "Comment s’appelle le vin de Zenato obtenu en refermentant du valpolicella sur les marcs de l’amarone ?", a: "Ripassa", x: ["La Poja", "Alzero", "Costasera"] },
    ],
  },
  ib_tommasi: {
    fact: "Amarone élaboré de génération en génération par la famille Tommasi à Pedemonte, en Valpolicella. La maison est aux mains de la famille depuis plus de 100 ans.",
    quiz: [
      { q: "Comment appelle-t-on la méthode, utilisée pour l’amarone de Tommasi, qui consiste à sécher les raisins plusieurs mois pour concentrer leurs sucres ?", a: "Appassimento", x: ["Solera", "Charmat", "Botrytis"] },
    ],
  },
  ib_santamargherita: {
    fact: "Le vin qui a lancé la mode mondiale du pinot grigio en le vinifiant dès 1961 en blanc limpide, sans contact avec les peaux. La maison a été fondée en 1935 par le comte Gaetano Marzotto.",
    quiz: [
      { q: "D’où vient le nom Santa Margherita ?", a: "De l’épouse du comte Marzotto, le fondateur", x: ["De la sainte patronne de Venise", "De la fille aînée du fondateur", "D’une église voisine"] },
    ],
  },
  ib_mionetto: {
    fact: "Grande maison de prosecco installée à Valdobbiadene. La méthode Charmat, avec seconde fermentation en grande cuve, préserve la fraîcheur des arômes fruités.",
    quiz: [
      { q: "Quelle est la couleur emblématique de l’étiquette du Mionetto Prosecco Brut ?", a: "Orange", x: ["Noir", "Bleu", "Rose"] },
      { q: "En quelle année Francesco Mionetto a-t-il fondé Mionetto à Valdobbiadene ?", a: "1887", x: ["1787", "1937", "1987"] },
    ],
  },
  ib_lamarca: {
    fact: "Marque coopérative réunissant des milliers de viticulteurs de la région de Trévise. C’est l’un des prosecco les plus vendus aux États-Unis.",
    quiz: [
      { q: "Quelle couleur caractérise l’étiquette du La Marca Prosecco ?", a: "Bleu-vert pâle (façon bleu Tiffany)", x: ["Orange", "Noir", "Rouge foncé"] },
    ],
  },
  ib_cartizze: {
    fact: "Prosecco de Cartizze, le coteau le plus réputé de Valdobbiadene. La famille Bisol y cultive la vigne depuis le XVIe siècle.",
    quiz: [
      { q: "Quelle famille, célèbre pour l’effervescent trentin Ferrari, a racheté Bisol en 2014 ?", a: "La famille Lunelli", x: ["La famille Antinori", "La famille Marzotto", "La famille Frescobaldi"] },
    ],
  },
  ib_ninofranco: {
    fact: "Prosecco phare de Nino Franco, maison familiale de Valdobbiadene. Primo Franco, de la troisième génération, compte parmi ceux qui ont élevé la qualité du prosecco.",
    quiz: [
      { q: "En quelle année Nino Franco a-t-il été fondé à Valdobbiadene ?", a: "1919", x: ["1819", "1969", "1999"] },
    ],
  },
  ib_tunina: {
    fact: "Assemblage blanc emblématique du Frioul, élaboré par Silvio Jermann à partir de plusieurs cépages blancs. Lancé dans les années 1970, il a rehaussé le prestige des blancs italiens.",
    quiz: [
      { q: "Quel chardonnay Jermann a-t-il baptisé en s’inspirant d’une chanson de U2 ?", a: "Dreams", x: ["Vintage Tunina", "Terre Alte", "Rarità"] },
    ],
  },
  ib_gravner: {
    fact: "Blanc ambré élaboré par Josko Gravner à Oslavia, près de la frontière slovène, en laissant macérer la ribolla gialla sur ses peaux pendant des mois. Il est vu comme un pionnier du « vin orange ».",
    quiz: [
      { q: "Quel contenant de fermentation et d’élevage Josko Gravner a-t-il adopté, faisant sensation ?", a: "La jarre géorgienne enterrée (qvevri)", x: ["La cuve inox sous pression", "La cuve œuf en béton", "Le fût d’acacia"] },
    ],
  },
  ib_terrealte: {
    fact: "Blanc emblématique du Frioul, signé Livio Felluga, qui assemble trois cépages des collines de Rosazzo. Il gagne en profondeur avec le temps.",
    quiz: [
      { q: "Que représentent les étiquettes des vins Livio Felluga ?", a: "Une carte ancienne des coteaux viticoles", x: ["Une gondole vénitienne", "Les armoiries familiales et un lion", "Un paysan vendangeant"] },
    ],
  },
  ib_terlano: {
    fact: "Coopérative du Haut-Adige fondée en 1893 par des viticulteurs. Elle est réputée pour ses blancs qui restent éclatants de fraîcheur après des décennies.",
    quiz: [
      { q: "Comment s’appelle la série rare de Cantina Terlano, élevée plus de 10 ans sur lies ?", a: "Rarità", x: ["Vin Santo", "Riserva Ducale", "Vecchio Samperi"] },
    ],
  },
  ib_cadelbosco: {
    fact: "Effervescent emblématique de Franciacorta, né du domaine créé par Maurizio Zanella au sud du lac d’Iseo. Il est élaboré comme le champagne, par seconde fermentation en bouteille.",
    quiz: [
      { q: "Que signifie le nom Ca’ del Bosco ?", a: "La maison dans les bois", x: ["Le château sur la colline", "La ferme au bord du lac", "L’église de pierre"] },
      { q: "Quel sculpteur a réalisé l’immense portail de bronze à l’entrée de Ca’ del Bosco ?", a: "Arnaldo Pomodoro", x: ["Alberto Giacometti", "Marino Marini", "Umberto Boccioni"] },
    ],
  },
  ib_bellavista: {
    fact: "Cuvée de base de la grande maison d’effervescents de Franciacorta. Fidèle à son nom, elle surplombe une « belle vue » depuis la colline d’Erbusco.",
    quiz: [
      { q: "Quel entrepreneur du bâtiment a fondé Bellavista en 1977 ?", a: "Vittorio Moretti", x: ["Maurizio Zanella", "Carlo Gancia", "Gaetano Marzotto"] },
    ],
  },
  ib_planeta: {
    fact: "L’un des premiers vins phares de la famille Planeta, moteur de la renaissance du vin sicilien dans les années 1990. Il a prouvé que la Sicile pouvait produire des blancs de classe mondiale.",
    quiz: [
      { q: "Quelle grande coopérative sicilienne Diego Planeta a-t-il longtemps présidée ?", a: "Settesoli", x: ["Donnafugata", "Regaleali", "Florio"] },
    ],
  },
  ib_benrye: {
    fact: "Passito doux élaboré sur l’île de Pantelleria, entre la Sicile et la Tunisie, avec du zibibbo (muscat d’Alexandrie) séché au soleil.",
    quiz: [
      { q: "Que signifie « Ben Ryé » en arabe ?", a: "Fils du vent", x: ["Fille du soleil", "Cadeau de la mer", "Joyau de l’île"] },
      { q: "De quel roman vient le nom du domaine Donnafugata ?", a: "Le Guépard de Lampedusa", x: ["Les Fiancés de Manzoni", "Les Malavoglia de Verga", "Le Nom de la rose d’Eco"] },
    ],
  },
  ib_rossodelconte: {
    fact: "Rouge emblématique de la famille Tasca d’Almerita, élaboré en nero d’Avola sur le domaine de Regaleali, au cœur de la Sicile.",
    quiz: [
      { q: "En quelle année la famille Tasca a-t-elle acquis le domaine de Regaleali, dans l’intérieur de la Sicile ?", a: "1830", x: ["1730", "1930", "1980"] },
    ],
  },
  ib_debartoli: {
    fact: "Vin de Marco De Bartoli, qui s’est battu pour faire renaître le marsala traditionnel de qualité à une époque où on le reléguait à la cuisine.",
    quiz: [
      { q: "Comment s’appelle le vin légendaire de Marco De Bartoli, non muté et élevé selon l’ancienne méthode « perpetuo » ?", a: "Vecchio Samperi", x: ["Rosso del Conte", "Ben Ryé", "Radici"] },
    ],
  },
  ib_florio: {
    fact: "Grande maison de marsala, le vin muté que l’Anglais John Woodhouse fit connaître au XVIIIe siècle. Ses immenses chais bordent le front de mer de Marsala.",
    quiz: [
      { q: "Qui a fondé les chais Florio à Marsala en 1833 ?", a: "Vincenzo Florio", x: ["John Woodhouse", "Benjamin Ingham", "Marco De Bartoli"] },
    ],
  },
  ib_passopisciaro: {
    fact: "Rouge de nerello mascalese issu de vignes d’altitude sur le versant nord de l’Etna. Le domaine compte parmi les moteurs de l’essor des vins de l’Etna.",
    quiz: [
      { q: "Quel domaine toscan Andrea Franchetti, fondateur de Passopisciaro, avait-il créé auparavant ?", a: "Tenuta di Trinoro", x: ["Tenuta San Guido", "Montevertine", "Fontodi"] },
    ],
  },
  ib_benanti: {
    fact: "Blanc de carricante du versant est de l’Etna. Il se distingue par une bouche saline et droite, née des sols volcaniques proches de la mer.",
    quiz: [
      { q: "Quelle est la seule commune autorisée à revendiquer l’« Etna Bianco Superiore » que porte le Pietra Marina de Benanti ?", a: "Milo", x: ["Randazzo", "Taormine", "Catane"] },
    ],
  },
  ib_radici: {
    fact: "Rouge emblématique de Mastroberardino, qui a sauvé les cépages autochtones de Campanie menacés de disparition après la guerre. Le Taurasi est devenu en 1993 la première DOCG du Sud de l’Italie.",
    quiz: [
      { q: "Sur quel site antique Mastroberardino a-t-il fait revivre d’anciennes vignes avec les autorités archéologiques pour produire le vin « Villa dei Misteri » ?", a: "Pompéi", x: ["Herculanum", "Paestum", "Ostie"] },
    ],
  },
  ib_feudi: {
    fact: "Blanc de fiano, cépage autochtone de l’Irpinia, dans l’intérieur de la Campanie. Feudi di San Gregorio a mené la nouvelle vague des vins du Sud de l’Italie.",
    quiz: [
      { q: "En quelle année Feudi di San Gregorio a-t-il été fondé ?", a: "1986", x: ["1886", "1936", "2006"] },
    ],
  },
  ib_es: {
    fact: "Rouge dense élaboré par le couple Gianfranco Fino et Simona Natale avec de vieux primitivo conduits en alberello (gobelet) dans les Pouilles.",
    quiz: [
      { q: "De la théorie de quel penseur Gianfranco Fino a-t-il tiré le nom de son vin « Es » ?", a: "Freud", x: ["Jung", "Nietzsche", "Kant"] },
    ],
  },
  ib_valentini: {
    fact: "Légende des Abruzzes qui tire du trebbiano, cépage jugé banal, des chefs-d’œuvre capables de vieillir des décennies. Le domaine est célèbre pour ne presque rien dévoiler de ses méthodes.",
    quiz: [
      { q: "Quel vigneron a fait de Valentini une légende en ne mettant en bouteille qu’une petite part de ses meilleurs raisins ?", a: "Edoardo Valentini", x: ["Emidio Pepe", "Gianfranco Fino", "Angelo Gaja"] },
    ],
  },
  ib_emidiopepe: {
    fact: "Domaine familial fidèle aux méthodes anciennes : égrappage des baies à la main et élevage en cuves de ciment. Il garde en cave de vieux millésimes qu’il libère peu à peu.",
    quiz: [
      { q: "En quelle année Emidio Pepe a-t-il élaboré son premier vin dans les Abruzzes ?", a: "1964", x: ["1904", "1934", "1994"] },
    ],
  },
  ib_turriga: {
    fact: "Rouge emblématique de la Sardaigne, élaboré par la famille Argiolas dans le sud de l’île autour du cannonau, cépage autochtone. Premier millésime : 1988.",
    quiz: [
      { q: "Quel œnologue, surnommé « le père des supertoscans », a cocréé le Turriga d’Argiolas ?", a: "Giacomo Tachis", x: ["Michel Rolland", "Émile Peynaud", "Peter Sisseck"] },
    ],
  },
  ib_chiarli: {
    fact: "Rouge légèrement pétillant élaboré avec du lambrusco de Sorbara, près de Modène. Il se distingue par sa robe rubis clair et son acidité vive.",
    quiz: [
      { q: "En quelle année Cleto Chiarli a-t-il commencé à produire du lambrusco à Modène ?", a: "1860", x: ["1760", "1920", "1970"] },
    ],
  },
  ib_valbuena: {
    fact: "L’autre rouge de Vega Sicilia, issu du même domaine que l’Único. Élevé moins longtemps, il sort plus tôt que l’Único.",
    quiz: [
      { q: "Que signifie le « 5 » de Valbuena 5° ?", a: "Il sort la 5e année après la vendange", x: ["Il assemble cinq cépages", "Il vient de jeunes vignes de 5 ans", "Il n’utilise que la 5e récolte"] },
    ],
  },
  ib_pingus: {
    fact: "Vin culte espagnol élaboré par le Danois Peter Sisseck avec des raisins de très vieilles vignes de tempranillo. Il a été acclamé dans le monde entier dès son premier millésime, 1995.",
    quiz: [
      { q: "D’où vient le nom Pingus ?", a: "Du surnom d’enfance de Peter Sisseck", x: ["D’une rivière longeant le vignoble", "D’un ancien monastère", "D’un mot espagnol signifiant « petit bijou »"] },
    ],
  },
  ib_florpingus: {
    fact: "Vin frère du Pingus, élaboré par la même main avec du tempranillo de vieilles vignes de plusieurs villages.",
    quiz: [
      { q: "Quel vinificateur d’origine danoise élabore Flor de Pingus ?", a: "Peter Sisseck", x: ["Álvaro Palacios", "Mariano García", "René Barbier"] },
    ],
  },
  ib_pesquera: {
    fact: "Bodega fondée dans les années 1970 à Pesquera de Duero par Alejandro Fernández, considéré comme l’artisan de la renommée mondiale de Ribera del Duero.",
    quiz: [
      { q: "À quel vin Robert Parker a-t-il comparé le Tinto Pesquera ?", a: "Petrus, à Bordeaux", x: ["Romanée-Conti", "Château d’Yquem", "Sassicaia"] },
    ],
  },
  ib_alion: {
    fact: "Bodega sœur fondée par Vega Sicilia au début des années 1990. Son tempranillo, élevé en barriques françaises neuves, affiche un style plus moderne.",
    quiz: [
      { q: "Quelle famille possède Vega Sicilia et Alión depuis les années 1980 ?", a: "La famille Álvarez", x: ["La famille Fernández", "La famille Muga", "La famille Torres"] },
    ],
  },
  ib_aalto: {
    fact: "Étoile montante de Ribera del Duero, fondée en 1999. Elle tire des rouges puissants de vieilles vignes de tempranillo réparties sur plusieurs villages.",
    quiz: [
      { q: "Qui, après près de 30 ans à la tête des vinifications de Vega Sicilia, a cofondé Aalto ?", a: "Mariano García", x: ["Peter Sisseck", "Alejandro Fernández", "Álvaro Palacios"] },
    ],
  },
  ib_emiliomoro: {
    fact: "Rouge emblématique de la famille Moro, vignerons de père en fils à Pesquera de Duero, en Ribera del Duero.",
    quiz: [
      { q: "Comment appelle-t-on localement le tempranillo en Ribera del Duero, d’où vient Emilio Moro ?", a: "Tinto Fino", x: ["Cencibel", "Ull de Llebre", "Tinta Roriz"] },
    ],
  },
  ib_protos: {
    fact: "Première bodega de Ribera del Duero, fondée en 1927 par onze viticulteurs de Peñafiel. Ses vins vieillissent dans des galeries creusées sous le château de Peñafiel.",
    quiz: [
      { q: "Que signifie le nom Protos ?", a: "« Premier » en grec", x: ["« Rempart » en latin", "« Rive » en espagnol", "« Vignoble » en arabe"] },
      { q: "Quel architecte britannique a conçu la nouvelle cave de Protos ?", a: "Richard Rogers", x: ["Norman Foster", "Zaha Hadid", "Frank Gehry"] },
    ],
  },
  ib_castilloygay: {
    fact: "Vin de prestige de Marqués de Murrieta, produit seulement les grandes années. Son histoire commence en 1852 sur le domaine d’Ygay, près de Logroño.",
    quiz: [
      { q: "Qui a fondé Marqués de Murrieta et introduit les méthodes bordelaises en Rioja ?", a: "Luciano de Murrieta", x: ["Alejandro Fernández", "Rafael López de Heredia", "Enrique Forner"] },
    ],
  },
  ib_rioja904: {
    fact: "Vin phare de La Rioja Alta, maison fondée en 1890 par cinq familles près de la gare de Haro. Style traditionnel, avec un long élevage en fûts de chêne américain.",
    quiz: [
      { q: "Que signifie le « 904 » du Gran Reserva 904 ?", a: "La fusion avec la bodega Ardanza en 1904", x: ["Seulement 904 fûts produits", "Un vignoble à 904 m d’altitude", "904 jours d’élevage"] },
    ],
  },
  ib_tondonia: {
    fact: "Vin emblématique de López de Heredia, maison fondée à Haro en 1877. Symbole de la Rioja traditionnelle, il traverse les décennies grâce à un long élevage en fût.",
    quiz: [
      { q: "Quel architecte a conçu le pavillon d’accueil des visiteurs de López de Heredia ?", a: "Zaha Hadid", x: ["Frank Gehry", "Santiago Calatrava", "Richard Rogers"] },
    ],
  },
  ib_cvneimperial: {
    fact: "Vin de prestige de CVNE, maison fondée en 1879 près de la gare de Haro. Le millésime 2004 a été classé n° 1 du « Wine of the Year » de Wine Spectator.",
    quiz: [
      { q: "Que signifie le sigle CVNE ?", a: "Compañía Vinícola del Norte de España", x: ["Confrérie royale des vins de Castille", "Union des bodegas de la Rioja", "Initiales des quatre fondateurs"] },
    ],
  },
  ib_pradoenea: {
    fact: "Gran Reserva de prestige de Muga, produit seulement les grandes années. Après un long élevage en fût de chêne, il vieillit encore en bouteille avant sa sortie.",
    quiz: [
      { q: "Quelle particularité distingue la bodega Muga ?", a: "Elle possède sa propre tonnellerie", x: ["Tous ses vins vieillissent en jarres d’argile", "Ses raisins arrivent en hélicoptère", "Une centrale hydroélectrique en sous-sol"] },
    ],
  },
  ib_torremuga: {
    fact: "Rioja de style moderne lancé par Muga avec le millésime 1991. Couleur profonde, fruit généreux et notes de chêne français neuf le caractérisent.",
    quiz: [
      { q: "Quel couple a fondé la bodega Muga à Haro en 1932 ?", a: "Isaac Muga et Aurora Caño", x: ["Alejandro Fernández et Esperanza Rivera", "Mario Rotllant et Carmen Daurella", "Joan Juvé et Teresa Camps"] },
    ],
  },
  ib_caceres: {
    fact: "Bodega fondée en 1970 à Cenicero par Enrique Forner. Elle a introduit les méthodes bordelaises pour proposer des riojas au fruit éclatant.",
    quiz: [
      { q: "Quel œnologue français a conseillé Marqués de Cáceres lors de l’introduction des méthodes bordelaises ?", a: "Émile Peynaud", x: ["Michel Rolland", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  ib_contino: {
    fact: "Rioja issu d’un domaine près de Laguardia, niché dans une boucle de l’Èbre. Il a été fondé dans les années 1970 par CVNE et la famille propriétaire historique du domaine.",
    quiz: [
      { q: "Quel type de vin Contino passe-t-il pour avoir introduit le premier en Rioja ?", a: "Le vin issu d’un seul domaine", x: ["Le premier effervescent de Rioja", "Le premier vin doux de Rioja", "Le premier rosé de Rioja"] },
    ],
  },
  ib_remirez: {
    fact: "Bodega fondée par Fernando Remírez de Ganuza à Samaniego, en Rioja Alavesa. Les raisins de petites et vieilles parcelles y sont triés avec un soin extrême.",
    quiz: [
      { q: "Quelle partie de la grappe Remírez de Ganuza utilise-t-il pour sa Reserva ?", a: "Seulement le haut de la grappe (les épaules)", x: ["Seulement la pointe de la grappe", "La grappe entière avec sa rafle", "Seulement les baies les plus tardives"] },
    ],
  },
  ib_roda: {
    fact: "Reserva emblématique de Roda, étoile montante installée dans le quartier de la gare de Haro. Il est élaboré avec des raisins de vieilles vignes de tempranillo.",
    quiz: [
      { q: "D’où vient le nom Roda ?", a: "Des initiales des fondateurs Rotllant et Daurella", x: ["D’un mot signifiant « roue »", "Du nom du village du vignoble", "D’une rivière voisine"] },
    ],
  },
  ib_artadi: {
    fact: "Tempranillo élaboré par Juan Carlos López de Lacalle sur une seule petite parcelle de Laguardia. Il compte parmi les meilleurs vins de parcelle d’Espagne.",
    quiz: [
      { q: "Quelle décision d’Artadi a fait sensation en 2015 ?", a: "Quitter l’appellation Rioja (DOCa)", x: ["Racheter un château français", "Replanter toutes ses vignes en blanc", "Remplacer le liège par la capsule couronne"] },
    ],
  },
  ib_campoviejo: {
    fact: "Né en 1959 à Logroño, c’est devenu l’une des marques de rioja les plus vendues au monde. Ses étiquettes colorées le rendent familier.",
    quiz: [
      { q: "Que signifie le nom Campo Viejo ?", a: "Vieux champ", x: ["Nouveau château", "Colline rouge", "Vieux chevalier"] },
    ],
  },
  ib_faustino: {
    fact: "Rioja Gran Reserva reconnaissable au premier coup d’œil à sa bouteille mate, comme givrée. C’est le vin emblématique de la famille Faustino, active depuis 1861.",
    quiz: [
      { q: "Quel peintre est l’auteur du portrait figurant sur l’étiquette du Faustino I ?", a: "Rembrandt", x: ["Velázquez", "Goya", "Le Greco"] },
    ],
  },
  ib_juangil: {
    fact: "Rouge dense de monastrell mûri sous le soleil brûlant de Jumilla, dans le sud-est de l’Espagne. Son étiquette argentée lui vaut le surnom de « Silver Label ».",
    quiz: [
      { q: "Que signifie « 12 Meses » dans Juan Gil 12 Meses ?", a: "12 mois d’élevage en fût de chêne", x: ["Des vignes âgées de 12 mois", "Une sortie 12 mois après la vendange", "Un assemblage de 12 parcelles"] },
    ],
  },
  ib_ermita: {
    fact: "L’un des vins les plus chers d’Espagne, issu de vieilles garnachas plantées sur les pentes abruptes de schiste (llicorella) de Gratallops.",
    quiz: [
      { q: "De quelle famille de vignerons de la Rioja est issu Álvaro Palacios ?", a: "Palacios Remondo", x: ["Marqués de Riscal", "Vega Sicilia", "López de Heredia"] },
    ],
  },
  ib_closmogador: {
    fact: "Domaine fondé par l’un des pionniers venus, à la fin des années 1980, faire renaître un Priorat alors en déclin. Il est élaboré avec de vieilles garnachas et cariñenas.",
    quiz: [
      { q: "Qui a fondé Clos Mogador et mené la renaissance du Priorat ?", a: "René Barbier", x: ["Peter Sisseck", "Mariano García", "Alejandro Fernández"] },
    ],
  },
  ib_closerasmus: {
    fact: "Vin culte du Priorat, à dominante de garnacha, issu des terrasses escarpées de Gratallops. Sa production est minuscule.",
    quiz: [
      { q: "Quelle vigneronne a fondé Clos Erasmus ?", a: "Daphne Glorian", x: ["Marisol Bueno", "Virginie Saverys", "Maria Teresa Mascarello"] },
    ],
  },
  ib_masplana: {
    fact: "Vin emblématique de Torres, élaboré par Miguel A. Torres en cabernet sauvignon sur une seule parcelle du Penedès. Il a révélé au monde le potentiel des rouges espagnols.",
    quiz: [
      { q: "Quel résultat le millésime 1970 a-t-il obtenu aux « Olympiades du vin » de Paris en 1979 ?", a: "1re place devant de grands bordeaux", x: ["2e place derrière Latour", "Disqualifié pour soupçon de fraude", "1re place chez les blancs"] },
      { q: "Quel était l’ancien nom du Mas La Plana de Torres ?", a: "Gran Coronas Black Label", x: ["Sangre de Toro Reserva", "Viña Sol Gran Reserva", "Torres Imperial"] },
    ],
  },
  ib_sangredetoro: {
    fact: "Rouge incontournable de Torres, apparu en 1954. Élaboré avec garnacha et cariñena, il est souple et très fruité.",
    quiz: [
      { q: "Qu’est-ce qui est accroché au col de la bouteille de Sangre de Toro ?", a: "Une petite figurine de taureau en plastique", x: ["Un ruban rouge", "Un mini chapeau de torero", "Un pompon en liège"] },
      { q: "Que signifie le nom Sangre de Toro ?", a: "Sang de taureau", x: ["Soleil rouge", "Cœur de torero", "Terre sacrée"] },
    ],
  },
  ib_numanthia: {
    fact: "Rouge puissant issu des vieilles vignes de tinta de Toro qui, grâce aux sols sableux, ont résisté au phylloxéra.",
    quiz: [
      { q: "D’où vient le nom Numanthia ?", a: "De Numance, cité antique qui résista à Rome jusqu’au bout", x: ["De Numa, roi légendaire de Rome", "D’une forteresse bâtie par les croisés", "De la capitale d’un royaume maure"] },
      { q: "Quel groupe a racheté Numanthia en 2008 ?", a: "LVMH (Moët Hennessy)", x: ["Pernod Ricard", "Kering", "E. & J. Gallo"] },
    ],
  },
  ib_senorans: {
    fact: "Grande maison d’albariño bâtie par Marisol Bueno dans le Val do Salnés. Son vin compte parmi les blancs de référence des Rías Baixas.",
    quiz: [
      { q: "Que désigne le mot « pazo » dans Pazo de Señoráns ?", a: "Un ancien manoir noble de Galice", x: ["Un coteau planté de vignes", "Un entrepôt portuaire", "Le jardin d’un monastère"] },
    ],
  },
  ib_martincodax: {
    fact: "Albariño d’une bodega fondée en 1986 par des viticulteurs des environs de Cambados. Ses raisins, battus par les vents de l’Atlantique, donnent un vin vif.",
    quiz: [
      { q: "D’où vient le nom Martín Códax ?", a: "D’un troubadour galicien du Moyen Âge", x: ["D’un capitaine des Grandes Découvertes", "D’un roi de Castille", "D’un paysan fondateur de la bodega"] },
    ],
  },
  ib_codorniu: {
    fact: "Codorníu est la maison où Josep Raventós élabora en 1872 le premier cava selon la méthode champenoise. La cuvée Anna, qui inclut du chardonnay, offre une bouche tout en rondeur.",
    quiz: [
      { q: "Qui est l’Anna qui a donné son nom à Anna de Codorníu ?", a: "L’héritière Codorníu mariée à un Raventós", x: ["La sainte patronne de la Catalogne", "Une reine d’Espagne", "La première petite-fille du fondateur"] },
      { q: "Quel architecte moderniste catalan a conçu les caves de Codorníu ?", a: "Josep Puig i Cadafalch", x: ["Antoni Gaudí", "Ricardo Bofill", "Rafael Moneo"] },
    ],
  },
  ib_juvecamps: {
    fact: "Cava millésimé emblématique de cette maison familiale de Sant Sadurní d’Anoia. Il est élaboré en brut nature, sans ajout de sucre.",
    quiz: [
      { q: "D’où vient le nom Juvé & Camps ?", a: "Du couple fondateur, Joan Juvé et Teresa Camps", x: ["Des noms de deux villages", "Des surnoms de deux amis cofondateurs", "Des noms de deux vignobles"] },
    ],
  },
  ib_gramona: {
    fact: "Effervescent de longue garde emblématique de Gramona, qui vieillit de longues années sur lies. Le xarel·lo lui apporte puissance et profondeur.",
    quiz: [
      { q: "Quelle appellation d’effervescents Gramona a-t-il créée en 2019 avec d’autres producteurs, après avoir quitté le Cava ?", a: "Corpinnat", x: ["Clàssic Penedès", "Franciacorta", "Crémant de Catalogne"] },
    ],
  },
  ib_bristolcream: {
    fact: "Cream sherry de Harveys, maison née en 1796 à Bristol, en Angleterre. L’assemblage de plusieurs xérès lui donne sa douceur veloutée.",
    quiz: [
      { q: "D’où vient le nom Harveys Bristol Cream ?", a: "D’une dame : « Si le Bristol Milk est du lait, ceci est de la crème »", x: ["D’une laiterie du port de Bristol", "Du surnom de la fille du fondateur", "D’un titre accordé par la reine"] },
      { q: "Quelle est la couleur emblématique de la bouteille de Harveys Bristol Cream ?", a: "Bleu profond", x: ["Transparent", "Vert foncé", "Noir"] },
    ],
  },
  ib_lustau: {
    fact: "Xérès doux assemblant oloroso et pedro ximénez, vieilli dans la partie la plus chaude et la plus humide de la bodega.",
    quiz: [
      { q: "D’où vient le nom « East India Solera » ?", a: "Il imite les xérès mûris à bord des navires des Indes orientales", x: ["Un xérès aux épices indiennes", "Une bodega fondée par la Compagnie des Indes", "Un xérès de raisins indiens"] },
      { q: "Lustau a mis en bouteille des xérès « almacenista » : qu’est-ce qu’un almacenista ?", a: "Un petit éleveur-stockeur de xérès", x: ["Un marin transportant le xérès", "Un maître levurier cultivant la flor", "Un artisan bouchonnier"] },
    ],
  },
  ib_inocente: {
    fact: "Fino rare, issu d’un seul vignoble et fermenté en fût. Son long vieillissement sous voile de flor lui donne une grande profondeur.",
    quiz: [
      { q: "De quel célèbre vignoble (pago) de Jerez proviennent les raisins de l’Inocente de Valdespino ?", a: "Macharnudo", x: ["Balbaína", "Añina", "Carrascal"] },
    ],
  },
  ib_osborne: {
    fact: "Fino élaboré par Osborne à El Puerto de Santa María, sur la côte atlantique. Vieilli sous un voile de levures (flor), il est léger et salin.",
    quiz: [
      { q: "Quelle forme a l’immense panneau emblématique d’Osborne dressé au bord des routes espagnoles ?", a: "Un taureau noir", x: ["Une danseuse de flamenco", "Une grappe dorée", "Un cheval blanc"] },
      { q: "De quel pays était originaire Thomas Osborne Mann, fondateur d’Osborne en 1772 ?", a: "Angleterre", x: ["France", "Pays-Bas", "Italie"] },
    ],
  },
  ib_noe: {
    fact: "Xérès de dessert noir et sirupeux, élaboré avec du pedro ximénez séché au soleil puis vieilli de longues années.",
    quiz: [
      { q: "Que garantit la mention « VORS » d’un xérès comme le Noé de González Byass ?", a: "Un très vieux xérès, de plus de 30 ans d’âge moyen", x: ["Un xérès millésimé d’une seule récolte", "Un xérès certifié bio", "Un xérès de raisins botrytisés"] },
    ],
  },
  ib_laguita: {
    fact: "Manzanilla produite uniquement à Sanlúcar de Barrameda, à l’embouchure du Guadalquivir. L’air marin y fait prospérer un épais voile de flor, source de salinité.",
    quiz: [
      { q: "Le nom La Guita vient d’un mot d’argot. Que signifie-t-il ?", a: "L’argent liquide", x: ["La guitare", "Le vent marin", "Le petit tonneau"] },
    ],
  },
  ib_alvear: {
    fact: "Vin doux de pedro ximénez séché au soleil, élaboré par Alvear, grande maison de Montilla-Moriles, au sud de Cordoue.",
    quiz: [
      { q: "Que signifie le « 1927 » de l’Alvear PX Solera 1927 ?", a: "L’année de création de cette solera", x: ["L’année de la vendange", "L’année de fondation d’Alvear", "L’année de mise en bouteille"] },
    ],
  },
  ib_lancers: {
    fact: "Rosé portugais né en 1944 pour conquérir le marché américain. Il est célèbre pour sa bouteille opaque qui ressemble à une jarre en céramique.",
    quiz: [
      { q: "Quel tableau de Velázquez a inspiré le nom Lancers ?", a: "La Reddition de Breda (Les Lances)", x: ["Les Ménines", "Les Fileuses", "Le Triomphe de Bacchus"] },
    ],
  },
  ib_barcavelha: {
    fact: "Vin légendaire qui a ouvert, dans le Douro, terre du porto, la voie des grands rouges non mutés. Créé en 1952, il ne sort que les années exceptionnelles.",
    quiz: [
      { q: "Qui a créé le Barca Velha ?", a: "Fernando Nicolau de Almeida", x: ["Dirk Niepoort", "José Maria da Fonseca", "Adriano Ramos Pinto"] },
      { q: "Que signifie le nom Barca Velha ?", a: "Vieille barque", x: ["Vieux paysan", "Fleuve bleu", "Première vendange"] },
    ],
  },
  ib_valemeao: {
    fact: "Domaine niché dans un large méandre du Douro Superior. Pendant longtemps, les raisins du Barca Velha en sont venus.",
    quiz: [
      { q: "Quelle femme légendaire du Douro a créé la Quinta do Vale Meão en 1877 ?", a: "Dona Antónia Ferreira", x: ["Giulia Colbert Falletti", "Marisol Bueno", "Anna de Codorníu"] },
    ],
  },
  ib_crasto: {
    fact: "Rouge de la quinta de la famille Roquette, au bord du Douro, issu de vieilles vignes où de nombreux cépages autochtones poussent mêlés.",
    quiz: [
      { q: "Quel lieu de la Quinta do Crasto est célèbre auprès des photographes ?", a: "La piscine à débordement dominant le Douro", x: ["Le téléphérique au-dessus des vignes", "Le chai flottant sur le fleuve", "Le belvédère sur des remparts médiévaux"] },
    ],
  },
  ib_esporao: {
    fact: "Rouge emblématique de la Herdade do Esporão, vaste domaine de l’Alentejo, dans le sud du Portugal. Une tour médiévale se dresse sur la propriété.",
    quiz: [
      { q: "Quelle est la particularité de l’étiquette de l’Esporão Reserva ?", a: "Elle change chaque année, avec l’œuvre d’un autre peintre", x: ["Elle porte toujours les mêmes armoiries", "Elle est gravée directement sur la bouteille", "Elle est faite d’écorce de liège"] },
    ],
  },
  ib_peramanca: {
    fact: "Le plus grand rouge de l’Alentejo, produit seulement les années exceptionnelles par la Fondation Eugénio de Almeida, à Évora.",
    quiz: [
      { q: "Que signifie l’expression d’où vient le nom Pêra-Manca ?", a: "Pierre branlante", x: ["Verger de poiriers", "Moine boiteux", "Tour blanche"] },
      { q: "Selon la légende, à bord de quelle expédition le Pêra-Manca fut-il embarqué en 1500 ?", a: "Le voyage de Cabral qui découvrit le Brésil", x: ["La route des Indes de Vasco de Gama", "Le tour du monde de Magellan", "Le premier voyage de Colomb"] },
    ],
  },
  ib_casalgarcia: {
    fact: "Blanc léger et vif du nord du Portugal, apparu en 1939. Légèrement perlant et peu alcoolisé, il se boit en toute simplicité.",
    quiz: [
      { q: "Dans « Vinho Verde », l’appellation du Casal Garcia, que signifie « verde » (vert) ?", a: "Un vin jeune et frais", x: ["Élaboré avec des raisins verts", "Mis en bouteille verte", "Aux arômes d’algues"] },
    ],
  },
  ib_taylors20: {
    fact: "Porto tawny longuement oxydé en petits fûts, d’où sa robe ambrée et ses arômes de fruits secs et de caramel.",
    quiz: [
      { q: "Que signifie « 20 ans » pour le Taylor’s 20 Year Old Tawny Port ?", a: "L’âge moyen d’un assemblage de plusieurs années", x: ["Un porto d’une seule année, 20 ans plus tôt", "Des raisins de vignes de 20 ans", "20 ans de vieillissement en bouteille"] },
    ],
  },
  ib_sixgrapes: {
    fact: "Porto Reserve Ruby issu des raisins des quintas qui produisent les portos vintage. Son fruit intense en fait un porto d’initiation très apprécié.",
    quiz: [
      { q: "D’où vient le nom Graham’s Six Grapes ?", a: "Du symbole de six grappes marquant les portos de niveau vintage", x: ["Un assemblage de six cépages", "Un assemblage de six années", "Les six enfants du fondateur"] },
    ],
  },
  ib_grahamsvintage: {
    fact: "Porto vintage de Graham’s, « déclaré » seulement les années exceptionnelles. Il repose surtout sur les raisins de la Quinta dos Malvedos, dans le Douro.",
    quiz: [
      { q: "Quelle était l’activité d’origine des frères Graham, fondateurs de Graham’s en 1820 ?", a: "Négoce de textiles", x: ["Transport maritime", "Banque", "Production de liège"] },
      { q: "Quelle famille du porto possède Graham’s depuis 1970 ?", a: "La famille Symington", x: ["La famille Sandeman", "La famille Niepoort", "La famille Guimaraens"] },
    ],
  },
  ib_bin27: {
    fact: "Porto Reserve de Fonseca, maison dirigée de génération en génération par la famille Guimaraens. Il se distingue par un fruit noir intense.",
    quiz: [
      { q: "Avant sa commercialisation en 1972, à qui le Fonseca Bin 27 était-il destiné ?", a: "À la famille et à ses amis", x: ["À la Cour britannique", "Aux rations des marins", "Aux messes du Vatican"] },
    ],
  },
  ib_dows: {
    fact: "Porto vintage de Dow’s, maison dirigée par la famille Symington. Sa finale plus sèche que celle des autres portos est sa signature.",
    quiz: [
      { q: "Quelle quinta du Douro est au cœur du Dow’s Vintage Port ?", a: "Quinta do Bomfim", x: ["Quinta do Noval", "Quinta de Vargellas", "Quinta dos Malvedos"] },
    ],
  },
  ib_sandeman: {
    fact: "Maison de porto et de xérès fondée à Londres en 1790. La silhouette du « Don », drapé d’une cape noire, est l’emblème de ses étiquettes.",
    quiz: [
      { q: "Quelle tenue porte « le Don », la silhouette noire de Sandeman ?", a: "Une cape d’étudiant portugais et un chapeau espagnol à large bord", x: ["Un kilt écossais et un béret", "Un uniforme de la Royal Navy et un tricorne", "Une robe de moine et une capuche"] },
      { q: "De quel pays était originaire George Sandeman, fondateur de Sandeman ?", a: "Écosse", x: ["Portugal", "Pays-Bas", "Irlande"] },
    ],
  },
  ib_cockburns: {
    fact: "Porto Reserve emblématique de Cockburn’s, maison fondée en 1815 et aujourd’hui dirigée par la famille Symington.",
    quiz: [
      { q: "Quelle est la particularité de la prononciation anglaise de Cockburn’s ?", a: "Le « ck » est muet : on dit « Coburn »", x: ["Tout se prononce : « Cock-burn »", "Le « burn » est muet : on dit « Cock »", "À la portugaise : « Kokbourne »"] },
    ],
  },
  ib_nacional: {
    fact: "Porto vintage légendaire issu d’une petite parcelle de la Quinta do Noval. Le millésime 1931 est considéré comme le plus grand porto de l’histoire.",
    quiz: [
      { q: "Quelle est la particularité des vignes du Quinta do Noval Nacional ?", a: "Elles poussent franc de pied, sans greffe", x: ["Ce sont toutes des vignes blanches centenaires", "Elles poussent sous serre", "Elles sont replantées chaque année"] },
      { q: "Quelle filiale d’un groupe d’assurances français a racheté la Quinta do Noval en 1993 ?", a: "AXA Millésimes", x: ["LVMH", "Kering", "Pernod Ricard"] },
    ],
  },
  ib_niepoort: {
    fact: "Maison familiale de porto fondée en 1842. Dirk Niepoort, de la cinquième génération, s’est aussi illustré avec les vins tranquilles du Douro.",
    quiz: [
      { q: "De quel pays la famille Niepoort est-elle originaire ?", a: "Pays-Bas", x: ["Écosse", "Allemagne", "Danemark"] },
      { q: "Où le porto « Garrafeira » de Niepoort poursuit-il son long vieillissement après le fût ?", a: "Dans de grandes bonbonnes de verre (demijohns)", x: ["Dans des jarres d’argile enterrées", "Dans des cuves d’acier sous la mer", "Dans des bassins de marbre"] },
    ],
  },
  ib_warres: {
    fact: "Warrior est le porto Reserve de Warre’s, considérée comme l’une des plus anciennes marques de porto. La maison est aujourd’hui dirigée par la famille Symington.",
    quiz: [
      { q: "Qu’a de particulier 1670, année de fondation de Warre’s ?", a: "Première maison de porto britannique au Portugal", x: ["Premier ajout d’eau-de-vie au porto", "Délimitation de l’appellation Douro", "Premier porto vintage déclaré"] },
    ],
  },
  ib_ramospinto: {
    fact: "Porto tawny de la maison fondée en 1880 par Adriano Ramos Pinto, élaboré avec les raisins de la Quinta do Bom Retiro, dans le Douro.",
    quiz: [
      { q: "Qu’est-ce qui a fait sensation chez Ramos Pinto au début du XXe siècle ?", a: "Des affiches publicitaires audacieuses de style Art nouveau", x: ["Une ligne de train réservée au porto", "Le plus grand fût de chêne du monde", "Une carte dorée gravée sur les bouteilles"] },
      { q: "Quelle maison de champagne a racheté Ramos Pinto en 1990 ?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  ib_blandys: {
    fact: "Maison de madère fondée en 1811 et transmise depuis de génération en génération au sein d’une même famille. Le malmsey est le style de madère le plus doux.",
    quiz: [
      { q: "Comment s’appelle la méthode traditionnelle où un madère comme Blandy’s vieillit lentement, des années durant, dans des greniers chauffés par le soleil ?", a: "Canteiro", x: ["Solera", "Appassimento", "Charmat"] },
      { q: "De quel pays était originaire John Blandy, fondateur de Blandy’s ?", a: "Angleterre", x: ["Portugal", "Espagne", "France"] },
    ],
  },
  ib_cossart: {
    fact: "L’une des plus anciennes maisons de Madère. Le bual est un style de madère moyennement doux, à l’acidité bien vive.",
    quiz: [
      { q: "En quelle année Cossart Gordon a-t-il été fondé à Madère ?", a: "1745", x: ["1645", "1845", "1945"] },
    ],
  },
};

export default T;
