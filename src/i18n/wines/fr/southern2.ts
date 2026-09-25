import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  sh2_penfolds_maxs: {
    fact: "Gamme de Penfolds baptisée d’après Max Schubert, le légendaire chef de cave qui a créé Grange. Elle perpétue sa philosophie : assembler des raisins de plusieurs régions.",
    quiz: [
      { q: "Quel vin australien légendaire Max Schubert, qui a donné son nom à Penfolds Max’s, a-t-il créé dans les années 1950 ?", a: "Penfolds Grange", x: ["Henschke Hill of Grace", "Wolf Blass Black Label", "Torbreck RunRig"] },
    ],
  },
  sh2_penfolds_bin128: {
    fact: "Shiraz que Penfolds élabore uniquement avec des raisins de Coonawarra. Grâce au climat frais de la région, elle est plus parfumée et plus élégante qu’une shiraz de la Barossa.",
    quiz: [
      { q: "Quel est le premier millésime de Penfolds Bin 128 Coonawarra Shiraz ?", a: "1962", x: ["1932", "1982", "2002"] },
    ],
  },
  sh2_penfolds_bin150: {
    fact: "Shiraz de Penfolds issue uniquement de raisins du secteur de Marananga, au nord-ouest de la Barossa Valley. Elle a été lancée avec le millésime 2008.",
    quiz: [
      { q: "Avant d’être rebaptisée pendant la Première Guerre mondiale, quel nom allemand portait Marananga, qui a donné son nom à Penfolds Bin 150 ?", a: "Gnadenfrei", x: ["Gnadenberg", "Hahndorf", "Neudorf"] },
    ],
  },
  sh2_penfolds_bin2: {
    fact: "Vin « Bin » de Penfolds qui assemble shiraz et mataro (mourvèdre). Élaboré avec des raisins de plusieurs régions d’Australie-Méridionale, il se boit jeune.",
    quiz: [
      { q: "Parmi les vins Penfolds désignés par un numéro, comme Penfolds Bin 2, quel numéro « Bin » porte Grange ?", a: "Bin 95", x: ["Bin 1", "Bin 389", "Bin 707"] },
    ],
  },
  sh2_penfolds_magill: {
    fact: "Shiraz issue du vignoble berceau de Penfolds, planté en 1844 par le couple Penfold à Magill, près d’Adélaïde. C’est l’un des rares vignobles encore enclavés en pleine ville.",
    quiz: [
      { q: "Quel était le métier d’origine de Christopher Rawson Penfold, fondateur de Penfolds ?", a: "Médecin", x: ["Pasteur", "Capitaine de navire", "Avocat"] },
      { q: "Quel vin Penfolds porte le nom du cottage des Penfold, toujours debout à Magill Estate ?", a: "Grange", x: ["St Henri", "Yattarna", "Koonunga Hill"] },
    ],
  },
  sh2_torbreck_laird: {
    fact: "Le vin le plus prestigieux de Torbreck, issu d’un vignoble unique de shiraz à Marananga, dans la Barossa. Il est longuement élevé en fûts neufs de chêne français à douelles épaisses.",
    quiz: [
      { q: "Qui désigne le mot écossais « laird » dans The Laird de Torbreck ?", a: "Un seigneur propriétaire terrien", x: ["Un berger qui mène les moutons", "Un garde forestier", "Le prêtre du village"] },
    ],
  },
  sh2_torbreck_woodcutters: {
    fact: "Shiraz de la Barossa baptisée en souvenir des années où Dave Powell, fondateur de Torbreck, travaillait comme bûcheron en Écosse.",
    quiz: [
      { q: "En quelle année Torbreck, producteur de Woodcutter’s Shiraz, a-t-il été fondé ?", a: "1994", x: ["1954", "1974", "2004"] },
    ],
  },
  sh2_torbreck_factor: {
    fact: "Shiraz de Torbreck issue de vieilles vignes de plusieurs villages de la Barossa Valley. La plupart des noms des vins Torbreck viennent de l’ancien parler rural écossais.",
    quiz: [
      { q: "Dans l’Écosse d’autrefois, qui était le « factor » qui a inspiré The Factor de Torbreck ?", a: "L’intendant qui gérait le domaine pour le seigneur", x: ["Le meunier qui moulait le grain", "Le forgeron du village", "Le bouvier qui menait le bétail"] },
    ],
  },
  sh2_greenockcreek_roennfeldt: {
    fact: "Shiraz culte produite en toute petite quantité à partir de vieilles vignes de Marananga, dans la Barossa. Elle est entrée dans la légende en obtenant 100 points de Robert Parker.",
    quiz: [
      { q: "Que désigne « Roennfeldt Road » dans Greenock Creek Roennfeldt Road Shiraz ?", a: "Une route de la Barossa qui longe le vignoble", x: ["Le village allemand natal du fondateur", "Le ruisseau qui borde le vignoble", "L’ancienne église du domaine"] },
    ],
  },
  sh2_rockford_basketpress: {
    fact: "Shiraz de la Barossa que Rockford élabore selon la tradition, avec du matériel plus que centenaire. Vendue surtout au caveau et par liste de diffusion, elle est difficile à trouver.",
    quiz: [
      { q: "D’où vient le nom de Rockford Basket Press ?", a: "D’un pressoir à cage à l’ancienne", x: ["Des grandes hottes pour porter le raisin", "Du surnom d’enfance du fondateur", "D’un vignoble en forme de panier"] },
    ],
  },
  sh2_peterlehmann_stonewell: {
    fact: "La shiraz haut de gamme de la maison fondée par Peter Lehmann à la fin des années 1970 pour racheter les raisins des vignerons de la Barossa, menacés d’être jetés en pleine surproduction.",
    quiz: [
      { q: "Quelle carte à jouer figure sur l’étiquette et le logo des vins Peter Lehmann ?", a: "La dame de trèfle", x: ["L’as de pique", "Le roi de cœur", "Le valet de carreau"] },
    ],
  },
  sh2_grantburge_meshach: {
    fact: "La shiraz haut de gamme du domaine de la Barossa fondé en 1988 par Grant et Helen Burge, issue de vieilles vignes.",
    quiz: [
      { q: "Qui était Meshach, qui a donné son nom à Grant Burge Meshach ?", a: "L’arrière-grand-père de Grant Burge", x: ["Le voisin qui a vendu le premier vignoble", "Le premier pasteur luthérien de la Barossa", "Le premier chef de cave du domaine"] },
    ],
  },
  sh2_langmeil_freedom: {
    fact: "Issu de ceps de shiraz de la Barossa qui comptent parmi les plus vieux du monde. Le nom « liberté » rend hommage aux immigrés venus de Prusse en quête de liberté religieuse.",
    quiz: [
      { q: "Que signifie « 1843 » dans Langmeil The Freedom 1843 Shiraz ?", a: "L’année de plantation des vignes", x: ["L’année de fondation du domaine", "L’année de la première exportation", "L’altitude du vignoble (m)"] },
    ],
  },
  sh2_charlesmelton_ninepopes: {
    fact: "Assemblage de style rhodanien associant vieux grenaches de la Barossa, shiraz et mourvèdre. C’est le vin phare de Charles Melton.",
    quiz: [
      { q: "D’où vient le nom de Nine Popes (« neuf papes ») de Charles Melton ?", a: "Du « neuf » de Châteauneuf-du-Pape, compris à tort comme le chiffre 9", x: ["D’un vignoble béni par neuf papes", "D’un assemblage de neuf cépages", "Des neuf médailles papales du fondateur"] },
    ],
  },
  sh2_glaetzer_amonra: {
    fact: "Le vin phare élaboré par Ben Glaetzer à partir de vieilles vignes de shiraz de la Barossa. Il est mis en bouteille sans filtration.",
    quiz: [
      { q: "Quel dieu est Amon-Ra, qui a donné son nom à Glaetzer Amon-Ra ?", a: "Le dieu soleil de la mythologie égyptienne", x: ["Le dieu grec du vin", "Le dieu nordique du tonnerre", "Le dieu mésopotamien de la lune"] },
    ],
  },
  sh2_johnduval_entity: {
    fact: "Shiraz de la Barossa élaborée par John Duval, chef de cave de Penfolds responsable de Grange de 1986 à 2002, après s’être mis à son compte.",
    quiz: [
      { q: "Dans quelle maison John Duval a-t-il été chef de cave avant de se mettre à son compte ?", a: "Penfolds", x: ["Wolf Blass", "Henschke", "Yalumba"] },
    ],
  },
  sh2_yalumba_octavius: {
    fact: "Le vin phare de Yalumba, plus ancien domaine familial d’Australie, issu de vieilles vignes de shiraz de la Barossa.",
    quiz: [
      { q: "D’où vient le nom de The Octavius de Yalumba ?", a: "D’un petit fût d’élevage appelé « octave »", x: ["Du huitième essai de vinification", "D’un assemblage de huit vignobles", "De huit années d’élevage"] },
    ],
  },
  sh2_jacobscreek_doublebarrel: {
    fact: "Shiraz dite « Double Barrel » car, après un élevage en fûts de vin, elle passe une seconde fois en fûts ayant contenu un autre alcool.",
    quiz: [
      { q: "Dans quel fût Jacob’s Creek Double Barrel Shiraz effectue-t-il son second élevage ?", a: "Un ancien fût de whisky", x: ["Un ancien fût de xérès", "Un ancien fût de rhum", "Un ancien fût de porto"] },
    ],
  },
  sh2_henschke_cyril: {
    fact: "Cabernet sauvignon d’Eden Valley qui rend hommage à Cyril Henschke, le premier à proposer des vins de vignoble unique comme Hill of Grace.",
    quiz: [
      { q: "Pour Stephen Henschke, qui dirige aujourd’hui le domaine, qui était Cyril Henschke, à qui ce vin rend hommage ?", a: "Son père", x: ["Son grand-père", "Son frère aîné", "Son oncle"] },
    ],
  },
  sh2_pewseyvale_riesling: {
    fact: "Vignoble où l’immigré anglais Joseph Gilbert planta en 1847 les premières vignes des collines d’Eden Valley. La famille Hill-Smith, de Yalumba, l’a fait renaître en 1961.",
    quiz: [
      { q: "D’où vient le nom de Pewsey Vale ?", a: "De la « Vale of Pewsey », une vallée du Wiltshire, en Angleterre", x: ["D’un mot aborigène signifiant « source claire »", "Du prénom de la fille qui fit la première vendange", "Du nom de l’église voisine"] },
    ],
  },
  sh2_darenberg_stumpjump: {
    fact: "L’assemblage du quotidien de d’Arenberg. Toutes les étiquettes de d’Arenberg portent une bande rouge en diagonale.",
    quiz: [
      { q: "Qu’est-ce que la « charrue stump-jump », inventée en Australie-Méridionale, qui a donné son nom à The Stump Jump de d’Arenberg ?", a: "Une charrue qui se soulève pour sauter les souches", x: ["Une charrue qui n’arrache que les mauvaises herbes entre les rangs", "Une charrue actionnée par une machine à vapeur", "Une charrue tirée par quatre bœufs"] },
    ],
  },
  sh2_darenberg_footbolt: {
    fact: "Shiraz dont le nom évoque l’époque de Joseph Osborn, qui posa les bases de d’Arenberg en achetant un vignoble de McLaren Vale en 1912.",
    quiz: [
      { q: "À l’origine, qu’était « Footbolt », qui a donné son nom à The Footbolt de d’Arenberg ?", a: "Un cheval de course de Joseph Osborn", x: ["Le ruisseau qui longe le vignoble", "Le chien de chasse du fondateur", "Un ancien pressoir manuel"] },
    ],
  },
  sh2_wirrawirra_churchblock: {
    fact: "L’assemblage phare de Wirra Wirra, domaine de McLaren Vale fondé en 1894, fermé, puis ressuscité en 1969.",
    quiz: [
      { q: "Qui a fait renaître Wirra Wirra en 1969 ?", a: "Greg Trott", x: ["Max Schubert", "Wolf Blass", "Peter Lehmann"] },
    ],
  },
  sh2_taylors_cs: {
    fact: "Cabernet sauvignon du domaine familial fondé en 1969 par la famille Taylor dans la Clare Valley. Au Royaume-Uni et dans plusieurs autres pays, il est vendu sous le nom de « Wakefield ».",
    quiz: [
      { q: "Pourquoi les vins Taylors sont-ils vendus sous le nom de « Wakefield » dans de nombreux pays ?", a: "Pour éviter la confusion avec la maison de porto Taylor’s", x: ["La famille royale britannique l’a exigé", "Le fondateur a changé de nom", "C’est le nom du premier port d’exportation"] },
    ],
  },
  sh2_mounthorrocks_cordoncut: {
    fact: "Riesling liquoreux élaboré par Stephanie Toole dans la Clare Valley. Sans pourriture noble ni gel, le raisin se concentre en sucre en séchant sur la vigne.",
    quiz: [
      { q: "En quoi consiste la méthode « cordon cut » de Mount Horrocks Cordon Cut ?", a: "On coupe les sarments chargés de grappes et le raisin sèche sur la vigne", x: ["On vendange le raisin gelé en pleine nuit", "On fait sécher le raisin cueilli sur de la paille", "On ne cueille que les baies touchées par le botrytis"] },
    ],
  },
  sh2_wynns_johnriddoch: {
    fact: "Le cabernet sauvignon haut de gamme de Wynns Coonawarra Estate, élaboré avec une sélection des meilleurs raisins. Premier millésime en 1982.",
    quiz: [
      { q: "Qui était John Riddoch, qui a donné son nom à Wynns John Riddoch ?", a: "Un pionnier d’origine écossaise, le premier à planter de la vigne à Coonawarra", x: ["L’homme d’affaires italien qui a racheté Wynns", "Le premier chef de cave du domaine", "Le premier gouverneur d’Australie-Méridionale"] },
    ],
  },
  sh2_shawsmith_sb: {
    fact: "Le sauvignon blanc phare du domaine fondé en 1989 dans les Adelaide Hills par deux cousins, Martin Shaw et Michael Hill-Smith.",
    quiz: [
      { q: "Quel titre Michael Hill-Smith, cofondateur de Shaw + Smith, a-t-il été le premier Australien à obtenir, en 1988 ?", a: "Master of Wine (MW)", x: ["Master Sommelier (MS)", "Diplôme d’œnologie de l’université de Bordeaux", "Trophée Jimmy Watson"] },
    ],
  },
  sh2_brokenwood_graveyard: {
    fact: "La shiraz haut de gamme de Brokenwood, domaine fondé en 1970 dans la Hunter Valley par trois amis de Sydney. Elle s’appelle « Graveyard » car le terrain était à l’origine destiné à un cimetière.",
    quiz: [
      { q: "Quel était le métier des trois cofondateurs de Brokenwood ?", a: "Avocats", x: ["Médecins", "Employés de banque", "Architectes"] },
    ],
  },
  sh2_mountpleasant_oshea: {
    fact: "Shiraz de Mount Pleasant qui rend hommage à Maurice O’Shea, légendaire vinificateur de la Hunter Valley. Ses vins passaient pour les meilleurs rouges d’Australie au milieu du XXe siècle.",
    quiz: [
      { q: "Dans quel pays Maurice O’Shea, qui a dirigé Mount Pleasant, a-t-il étudié la viticulture et l’œnologie ?", a: "La France", x: ["L’Allemagne", "L’Italie", "Les États-Unis"] },
    ],
  },
  sh2_tyrrells_vat47: {
    fact: "Chardonnay de la Hunter Valley lancé avec le millésime 1971 et considéré comme le premier chardonnay commercial d’Australie.",
    quiz: [
      { q: "Qui a créé Tyrrell’s Vat 47 en 1971 ?", a: "Murray Tyrrell", x: ["Bruce Tyrrell", "Edward Tyrrell", "Max Schubert"] },
    ],
  },
  sh2_lakesfolly_cabernets: {
    fact: "Domaine fondé en 1963 par Max Lake dans la Hunter Valley. Ce pari, qu’il qualifiait lui-même de « folie de Lake » (Folly), a ouvert l’ère des domaines boutique en Australie.",
    quiz: [
      { q: "Quel était le métier de Max Lake, fondateur de Lake’s Folly ?", a: "Chirurgien", x: ["Avocat", "Banquier", "Journaliste"] },
    ],
  },
  sh2_clonakilla_sv: {
    fact: "Le vin phare du domaine fondé en 1971 près de Canberra par le scientifique John Kirk. Un peu de viognier, cépage blanc, est cofermenté avec la shiraz.",
    quiz: [
      { q: "Quelle appellation française, célèbre pour sa tradition d’assembler du viognier à la syrah, a servi de modèle à Clonakilla Shiraz Viognier ?", a: "Côte-Rôtie", x: ["Châteauneuf-du-Pape", "Cornas", "Bandol"] },
    ],
  },
  sh2_xanadu_cs: {
    fact: "Cabernet sauvignon de Xanadu, domaine ouvert dans les années 1970, aux temps pionniers de Margaret River. Il incarne le cabernet de Margaret River, élégant et structuré.",
    quiz: [
      { q: "D’où vient le nom de Xanadu ?", a: "Du poème « Kubla Khan » du poète anglais Coleridge", x: ["Du village natal du fondateur", "D’un mot aborigène signifiant « brise marine »", "Du prénom de la fille du premier propriétaire"] },
    ],
  },
  sh2_voyager_chardonnay: {
    fact: "Chardonnay du domaine de Margaret River racheté en 1991 et développé par Michael Wright, homme d’affaires du secteur minier. Ses bâtiments blancs et sa roseraie en font un lieu très visité.",
    quiz: [
      { q: "De quel style architectural relèvent les bâtiments blancs de Voyager Estate ?", a: "Le style Cape Dutch d’Afrique du Sud", x: ["Le style château à la française", "Le style ferme toscane", "Le style mission espagnole"] },
    ],
  },
  sh2_cullen_kevinjohn: {
    fact: "Le chardonnay haut de gamme de Cullen, issu de raisins cultivés en biodynamie. C’est l’un des chardonnays emblématiques de Margaret River.",
    quiz: [
      { q: "À qui rend hommage le nom de Kevin John, de Cullen ?", a: "Au médecin Kevin Cullen, cofondateur du domaine", x: ["Au voisin qui aida à la première vendange", "Au premier petit-fils du fondateur", "Au premier vinificateur de Margaret River"] },
    ],
  },
  sh2_vassefelix_heytesbury: {
    fact: "Chardonnay haut de gamme que Vasse Felix, premier domaine de Margaret River, élabore avec les raisins de ses meilleures parcelles.",
    quiz: [
      { q: "Que désigne « Heytesbury » dans Vasse Felix Heytesbury ?", a: "La société de la famille Holmes à Court, propriétaire de Vasse Felix depuis 1987", x: ["Un phare au large de Margaret River", "Le village natal du premier vinificateur", "Un mot aborigène signifiant « sable blanc »"] },
    ],
  },
  sh2_tahbilk_marsanne: {
    fact: "Domaine historique du Victoria fondé en 1860. Il cultive l’un des plus vastes vignobles de marsanne au monde, dont des ceps plantés en 1927.",
    quiz: [
      { q: "Quelle famille dirige Tahbilk de génération en génération depuis 1925 ?", a: "La famille Purbrick", x: ["La famille Brown", "La famille Henschke", "La famille Hardy"] },
    ],
  },
  sh2_yarrayering_dr1: {
    fact: "Assemblage à base de cabernet du domaine fondé en 1969 dans la Yarra Valley par le Dr Bailey Carrodus. L’étiquette n’indique aucun cépage, seulement « Dry Red No. 1 ».",
    quiz: [
      { q: "Quel était le métier d’origine de Bailey Carrodus, fondateur de Yarra Yering ?", a: "Botaniste", x: ["Chirurgien", "Avocat", "Ingénieur des mines"] },
    ],
  },
  sh2_mountmary_quintet: {
    fact: "Assemblage bordelais de Mount Mary, dans la Yarra Valley, domaine né des vignes plantées en 1971 par le médecin John Middleton. Produit en petite quantité, il est surtout vendu par liste de diffusion.",
    quiz: [
      { q: "Que signifie le nom « Quintet » (quintette) de Mount Mary Quintet ?", a: "Il assemble cinq cépages bordelais", x: ["Il assemble les raisins de cinq vignobles", "Il est élevé pendant cinq ans", "Il rend hommage aux cinq enfants du fondateur"] },
    ],
  },
  sh2_coldstreamhills_pn: {
    fact: "Pinot noir du domaine fondé en 1985 dans la Yarra Valley par James Halliday, le plus célèbre critique de vin d’Australie.",
    quiz: [
      { q: "Quel guide annuel des vins australiens James Halliday, fondateur de Coldstream Hills, publiait-il ?", a: "Halliday Wine Companion", x: ["Penguin Wine Guide", "Hugh Johnson’s Pocket Wine Book", "Parker’s Wine Buyer’s Guide"] },
    ],
  },
  sh2_yeringstation_pn: {
    fact: "Pinot noir de Yering Station, installé sur le site d’une ancienne exploitation agricole de la Yarra Valley. Le climat frais lui donne un goût délicat.",
    quiz: [
      { q: "Quelle place occupe le site de Yering Station dans l’histoire du vin du Victoria ?", a: "C’est là que la vigne fut plantée pour la première fois dans le Victoria, en 1838", x: ["Le premier domaine de vins effervescents du Victoria", "Le domaine fondé par la première femme vinificatrice d’Australie", "Le premier domaine australien à adopter la capsule à vis"] },
    ],
  },
  sh2_tenminutes_pn: {
    fact: "Pinot noir issu des vignobles frais de la Mornington Peninsula, presqu’île entourée par la mer au sud de Melbourne.",
    quiz: [
      { q: "D’où vient le nom de Ten Minutes by Tractor (« à dix minutes en tracteur ») ?", a: "Les trois premiers vignobles étaient à dix minutes en tracteur les uns des autres", x: ["La mer est à dix minutes en tracteur du domaine", "Le raisin est pressé moins de dix minutes après la vendange", "Le fondateur dirigeait une entreprise de tracteurs"] },
    ],
  },
  sh2_chambers_raremuscat: {
    fact: "Muscat muté de Rosewood, domaine de Rutherglen tenu par la famille Chambers depuis des générations. Il assemble des vins de réserve vieux de plusieurs décennies.",
    quiz: [
      { q: "Parmi les quatre niveaux de vieillissement du muscat de Rutherglen (Rutherglen, Classic, Grand, Rare), où se situe « Rare » ?", a: "C’est le niveau le plus élevé", x: ["C’est le niveau le plus bas", "C’est le deuxième niveau", "C’est le troisième niveau"] },
    ],
  },
  sh2_seppelt_sparklingshiraz: {
    fact: "Vin rouge effervescent élaboré par Seppelt à Great Western, dans le Victoria. Il n’est commercialisé qu’après un long vieillissement en bouteille.",
    quiz: [
      { q: "Qui a creusé « The Drives », les longues galeries de vieillissement sous le domaine Seppelt de Great Western ?", a: "Des chercheurs d’or au chômage", x: ["Le génie de l’armée britannique", "Des bagnards déportés", "Des ouvriers du chemin de fer"] },
    ],
  },
  sh2_jansz_cuvee: {
    fact: "Maison de vins effervescents de Tasmanie née en 1986 d’un partenariat avec la maison de champagne Louis Roederer. Comme en Champagne, la seconde fermentation a lieu en bouteille.",
    quiz: [
      { q: "D’où vient le nom de Jansz ?", a: "De l’explorateur néerlandais Abel Janszoon Tasman, premier Européen à atteindre la Tasmanie", x: ["D’un marchand néerlandais fondateur du domaine", "Du grand-père du fondateur", "De l’explorateur anglais James Cook"] },
    ],
  },
  sh2_cloudybay_pn: {
    fact: "Pinot noir élaboré par Cloudy Bay, célèbre pour son sauvignon blanc, avec des raisins des vallées fraîches du sud de Marlborough.",
    quiz: [
      { q: "Quel explorateur a baptisé cette baie « Cloudy Bay » (baie nuageuse) en 1770 ?", a: "Le capitaine britannique James Cook", x: ["Le Néerlandais Abel Tasman", "Le Français Dumont d’Urville", "Le Portugais Magellan"] },
    ],
  },
  sh2_seresin_sb: {
    fact: "Sauvignon blanc du domaine fondé à Marlborough au début des années 1990 par Michael Seresin. Le raisin est cultivé en bio et en biodynamie, et l’étiquette porte une empreinte de main.",
    quiz: [
      { q: "Quel est le métier principal de Michael Seresin, fondateur de Seresin Estate ?", a: "Directeur de la photographie", x: ["Architecte", "Joueur de l’équipe nationale de rugby", "Chanteur d’opéra"] },
    ],
  },
  sh2_nautilus_sb: {
    fact: "Sauvignon blanc d’un domaine de Marlborough qui a pour emblème la coquille du nautile.",
    quiz: [
      { q: "Quel domaine australien possède la famille Hill-Smith, propriétaire de Nautilus Estate ?", a: "Yalumba", x: ["Penfolds", "Henschke", "Jacob’s Creek"] },
    ],
  },
  sh2_matua_sb: {
    fact: "Domaine fondé en 1974 à Auckland par les frères Ross et Bill Spence. C’est aujourd’hui une marque grand public connue pour son sauvignon blanc de Marlborough.",
    quiz: [
      { q: "Quelle première de l’histoire du vin néo-zélandais Matua a-t-il réalisée en 1974 ?", a: "Le premier sauvignon blanc de Nouvelle-Zélande", x: ["Le premier vin néo-zélandais sous capsule à vis", "Le premier pinot noir de Nouvelle-Zélande", "Le premier vin effervescent de Nouvelle-Zélande"] },
    ],
  },
  sh2_giesen_sb: {
    fact: "Sauvignon blanc du domaine familial fondé en Nouvelle-Zélande en 1981 par trois frères. Il s’est aussi fait connaître avec ses vins désalcoolisés « 0 % ».",
    quiz: [
      { q: "De quel pays sont originaires les frères Theo, Alex et Marcel Giesen, fondateurs de Giesen ?", a: "L’Allemagne", x: ["Les Pays-Bas", "L’Autriche", "La Suisse"] },
    ],
  },
  sh2_spyvalley_sb: {
    fact: "Sauvignon blanc d’un domaine familial de la vallée de la Waihopai, à Marlborough.",
    quiz: [
      { q: "D’où vient le nom de Spy Valley ?", a: "De la station satellite des services de renseignement installée dans la vallée", x: ["D’une grotte où se cachait un espion pendant la guerre", "D’un roman d’espionnage écrit par le fondateur", "D’une histoire de mineurs qui extrayaient de l’or en secret"] },
    ],
  },
  sh2_astrolabe_sb: {
    fact: "Sauvignon blanc élaboré par Astrolabe, petit domaine familial de Marlborough.",
    quiz: [
      { q: "D’où vient le nom d’Astrolabe ?", a: "Du navire de Dumont d’Urville, explorateur français des côtes néo-zélandaises", x: ["Du navire du capitaine James Cook", "D’une pirogue traditionnelle maorie", "Du voilier du fondateur"] },
    ],
  },
  sh2_closhenri_sb: {
    fact: "Sauvignon blanc du domaine fondé en 2000 à Marlborough par la famille ligérienne Henri Bourgeois.",
    quiz: [
      { q: "Dans quelle appellation française la famille Bourgeois, fondatrice de Clos Henri, fait-elle du vin depuis des générations ?", a: "Sancerre", x: ["Chablis", "Bordeaux", "Alsace"] },
    ],
  },
  sh2_babich_blacklabel: {
    fact: "Sauvignon blanc de Marlborough de Babich, vieux domaine familial néo-zélandais ouvert en 1916.",
    quiz: [
      { q: "D’où venait Josip Babich, l’immigré qui a fondé Babich ?", a: "De Dalmatie, en Croatie", x: ["De Sicile, en Italie", "De Crète, en Grèce", "De Galice, en Espagne"] },
    ],
  },
  sh2_tohu_sb: {
    fact: "Sauvignon blanc frais élaboré par Tohu Wines avec des raisins de Marlborough.",
    quiz: [
      { q: "Quel record Tohu Wines détient-il dans l’histoire mondiale du vin ?", a: "Première marque de vin au monde détenue par des Maoris", x: ["Premier domaine au monde certifié vegan", "Premier vin néo-zélandais sous capsule à vis", "Premier domaine neutre en carbone de l’hémisphère Sud"] },
    ],
  },
  sh2_pegasusbay_riesling: {
    fact: "Riesling du domaine exploité par la famille Donaldson à Waipara, au nord de Christchurch. Un style riche, avec une légère douceur résiduelle.",
    quiz: [
      { q: "Quel est le métier principal d’Ivan Donaldson, fondateur de Pegasus Bay ?", a: "Neurologue", x: ["Avocat", "Chanteur d’opéra", "Joueur de rugby"] },
    ],
  },
  sh2_kumeuriver_mates: {
    fact: "Chardonnay élaboré à Kumeu, près d’Auckland, par la famille Brajkovich, venue de Croatie. Il fait figure de référence pour le chardonnay néo-zélandais.",
    quiz: [
      { q: "Qui est « Mate » dans Kumeu River Mate’s Vineyard Chardonnay ?", a: "Mate Brajkovich, père des frères qui dirigent aujourd’hui le domaine", x: ["Les amis (mates) qui ont planté le vignoble", "Le fermier anglais qui a vendu le premier vignoble", "Un chef maori"] },
    ],
  },
  sh2_trinityhill_homage: {
    fact: "La syrah haut de gamme de Trinity Hill, issue des sols de graviers des Gimblett Gravels, à Hawke’s Bay. Elle a révélé le potentiel de la syrah néo-zélandaise.",
    quiz: [
      { q: "À qui Trinity Hill Homage Syrah rend-il « hommage » ?", a: "À Gérard Jaboulet, qui dirigea Paul Jaboulet Aîné dans le Rhône", x: ["À Gérard Chave, de l’Hermitage", "À Marcel Guigal, de Côte-Rôtie", "À Jacques Perrin, de Châteauneuf-du-Pape"] },
    ],
  },
  sh2_missionestate_syrah: {
    fact: "Syrah du plus ancien domaine viticole de Nouvelle-Zélande, fondé en 1851 et toujours en activité.",
    quiz: [
      { q: "Qui a fondé Mission Estate ?", a: "Des missionnaires catholiques français (maristes)", x: ["Des pasteurs anglicans anglais", "Des immigrés croates", "Des immigrés luthériens allemands"] },
    ],
  },
  sh2_twopaddocks_pn: {
    fact: "Pinot noir du domaine fondé en Central Otago par l’acteur Sam Neill, qui a grandi en Nouvelle-Zélande. Le nom vient des deux petits enclos (paddocks) où tout a commencé.",
    quiz: [
      { q: "Quel est le film le plus célèbre de Sam Neill, l’acteur qui a fondé Two Paddocks ?", a: "Jurassic Park", x: ["Le Seigneur des anneaux", "Titanic", "Matrix"] },
    ],
  },
  sh2_montes_alphasyrah: {
    fact: "La syrah de Montes Alpha, la gamme de vins chiliens la plus appréciée en Corée. Des raisins gorgés du soleil de la vallée de Colchagua lui donnent un style intense.",
    quiz: [
      { q: "Quelle musique Montes diffuse-t-il en permanence dans le chai à barriques de son domaine d’Apalta ?", a: "Du chant grégorien", x: ["Des symphonies de Mozart", "De la musique folklorique chilienne", "Du jazz"] },
    ],
  },
  sh2_carmin_peumo: {
    fact: "Vin icône élaboré par Concha y Toro avec le carménère des meilleures parcelles de son vignoble de Peumo. Il est considéré comme le meilleur carménère du Chili.",
    quiz: [
      { q: "Que signifie en espagnol « Carmín », dans Carmín de Peumo ?", a: "Rouge carmin, cramoisi", x: ["Petit jardin", "Pierre rouge", "Vieil arbre"] },
    ],
  },
  sh2_terrunyo_carmenere: {
    fact: "Carménère de la gamme Terrunyo, créée par Concha y Toro pour exprimer le caractère de chaque vignoble. Il est issu de Peumo, terre d’élection du carménère.",
    quiz: [
      { q: "Que signifie le nom de Concha y Toro Terrunyo ?", a: "Terroir, de l’espagnol « terruño »", x: ["« Terre rouge » en mapuche", "Le prénom de la fille du fondateur", "« Trois collines » en latin"] },
    ],
  },
  sh2_almaviva_epu: {
    fact: "Le second vin d’Almaviva, coentreprise entre le chilien Concha y Toro et le bordelais Château Mouton Rothschild.",
    quiz: [
      { q: "Que signifie en mapuche « EPU », dans EPU d’Almaviva ?", a: "Deux (2)", x: ["Ciel", "Aigle", "Rivière"] },
    ],
  },
  sh2_altair: {
    fact: "Assemblage icône issu du vignoble d’altitude que le chilien San Pedro a créé avec une grande maison bordelaise, au pied des Andes, dans la vallée du Cachapoal.",
    quiz: [
      { q: "Avec quel château de Saint-Émilion San Pedro a-t-il créé Altaïr à l’origine ?", a: "Château Dassault", x: ["Château Cheval Blanc", "Château Ausone", "Château Pavie"] },
      { q: "D’où vient le nom d’Altaïr ?", a: "De l’étoile la plus brillante de la constellation de l’Aigle", x: ["D’un sommet des Andes", "D’un dieu de la mythologie mapuche", "Du cheval d’un héros de l’indépendance chilienne"] },
    ],
  },
  sh2_aquitania_lazuli: {
    fact: "Cabernet sauvignon du domaine fondé en 1990 près de Santiago par les Bordelais Paul Pontallier et Bruno Prats, avec le Chilien Felipe de Solminihac.",
    quiz: [
      { q: "Quel premier grand cru classé de Bordeaux Paul Pontallier, cofondateur de Viña Aquitania, a-t-il longtemps dirigé ?", a: "Château Margaux", x: ["Château Latour", "Château Haut-Brion", "Château Mouton Rothschild"] },
      { q: "À quoi renvoie le nom d’Aquitania ?", a: "À l’Aquitaine, région du sud-ouest de la France où se trouve Bordeaux", x: ["Au Pays basque espagnol", "À une île du sud du Chili", "À l’ancien nom de la Toscane"] },
    ],
  },
  sh2_gatonegro_cs: {
    fact: "Marque de vins du quotidien du chilien San Pedro, exportée dans de nombreux pays : l’un des vins grand public emblématiques du Chili.",
    quiz: [
      { q: "Que signifie en espagnol « Gato Negro » ?", a: "Chat noir", x: ["Cheval noir", "Taureau noir", "Aigle noir"] },
    ],
  },
  sh2_cousinomacul_finisterrae: {
    fact: "Assemblage haut de gamme à base de cabernet sauvignon, élaboré avec des raisins de la vallée du Maipo par Cousiño-Macul, domaine historique du Chili.",
    quiz: [
      { q: "Que signifie en latin « Finis Terrae » ?", a: "Le bout de la terre (la fin du monde)", x: ["La bonne terre", "La terre rouge", "Le don de la terre"] },
    ],
  },
  sh2_santarita_triplec: {
    fact: "Assemblage haut de gamme de Santa Rita, élaboré avec des raisins de la vallée du Maipo. Fait rare au Chili, il est fondé sur le cabernet franc.",
    quiz: [
      { q: "D’où vient le nom de Santa Rita Triple C ?", a: "De l’assemblage de trois cépages commençant par C", x: ["D’une vendange en trois passages", "Des initiales des trois fondateurs", "De l’assemblage de trois vignobles (campos)"] },
    ],
  },
  sh2_ventisquero_pangea: {
    fact: "Syrah élaborée par le chilien Ventisquero avec des raisins d’Apalta, en collaboration avec John Duval, ancien chef de cave de Penfolds en Australie.",
    quiz: [
      { q: "Que signifie le nom de Pangea, de Ventisquero ?", a: "Le supercontinent qui réunissait toutes les terres avant leur séparation", x: ["Une déesse grecque de la mer", "« Haute montagne » en mapuche", "« Tous les raisins » en latin"] },
    ],
  },
  sh2_losvascos_cs: {
    fact: "Cabernet sauvignon du domaine Los Vascos, dans la vallée de Colchagua. C’est le premier domaine chilien racheté par la famille propriétaire d’un premier grand cru classé de Bordeaux.",
    quiz: [
      { q: "Quelle famille propriétaire d’un premier grand cru classé de Bordeaux a racheté Los Vascos en 1988 ?", a: "Les Rothschild de Château Lafite Rothschild", x: ["Les Mentzelopoulos de Château Margaux", "Les Dillon de Château Haut-Brion", "Les Pinault de Château Latour"] },
    ],
  },
  sh2_catena_alta: {
    fact: "Malbec élaboré par Catena Zapata avec une sélection des meilleures parcelles de plusieurs vignobles d’altitude.",
    quiz: [
      { q: "De quoi s’inspire le bâtiment de la bodega Catena Zapata, qui élabore Catena Alta Malbec ?", a: "D’une pyramide maya", x: ["D’un temple inca du soleil", "D’un château bordelais", "D’un ancien monastère espagnol"] },
    ],
  },
  sh2_angelicazapata: {
    fact: "Malbec issu des vignobles d’altitude de Catena Zapata. Un long élevage en fût lui donne structure et profondeur.",
    quiz: [
      { q: "Qui était Angélica Zapata, qui a donné son nom à Angélica Zapata Malbec Alta ?", a: "La mère de Nicolás Catena", x: ["La benjamine de Nicolás Catena", "L’épouse de Nicolás Catena", "La première femme vinificatrice de Mendoza"] },
    ],
  },
  sh2_luca_malbec: {
    fact: "Malbec de la marque personnelle de Laura Catena, de la famille Catena, élaboré à part avec des raisins d’altitude de la vallée de Uco.",
    quiz: [
      { q: "À qui Luca, la marque de vin de Laura Catena, doit-elle son nom ?", a: "Au fils de Laura Catena", x: ["Au père de Nicolás Catena", "Au fondateur de la famille, venu d’Italie", "Au premier propriétaire du vignoble"] },
    ],
  },
  sh2_donapaula_malbec: {
    fact: "Malbec du domaine fondé à Mendoza par le groupe Claro, propriétaire du chilien Santa Rita.",
    quiz: [
      { q: "À qui rend hommage le nom de Doña Paula ?", a: "À Paula Jaraquemada, qui cacha 120 soldats pendant la guerre d’indépendance du Chili", x: ["À la mère du fondateur", "À la sainte patronne de Mendoza", "À la première femme vinificatrice d’Argentine"] },
    ],
  },
  sh2_decero_malbec: {
    fact: "Malbec issu du vignoble Remolinos, créé en défrichant une terre vierge d’Agrelo, à Mendoza.",
    quiz: [
      { q: "Que signifie « Decero » dans Finca Decero ?", a: "À partir de zéro (en partant de rien)", x: ["Dix collines", "Rosée de l’aube", "Rocher blanc"] },
    ],
  },
  sh2_crios_malbec: {
    fact: "Malbec élaboré par Susana Balbo, première femme d’Argentine diplômée en œnologie.",
    quiz: [
      { q: "Que signifie « Crios », nom de ce malbec de Susana Balbo ?", a: "Les enfants", x: ["L’aube", "Le cristal", "Le vent"] },
    ],
  },
  sh2_santajulia_malbec: {
    fact: "Marque de vins du quotidien de la famille Zuccardi, à Mendoza, également connue pour sa gamme bio.",
    quiz: [
      { q: "Qui a inspiré le nom de Santa Julia ?", a: "Julia Zuccardi, fille de la famille Zuccardi", x: ["La sainte patronne de Mendoza", "La mère du fondateur", "Une sainte du village natal en Italie"] },
    ],
  },
  sh2_vinacobos_bramare: {
    fact: "Malbec de Viña Cobos, domaine fondé en 1999 à Mendoza par un célèbre vinificateur californien et des amis argentins.",
    quiz: [
      { q: "Quel célèbre vinificateur américain a fondé Viña Cobos ?", a: "Paul Hobbs", x: ["Robert Mondavi", "Heidi Barrett", "Helen Turley"] },
    ],
  },
  sh2_yacochuya: {
    fact: "Malbec intense issu de vignes d’altitude, vers 2 000 m, à Cafayate, dans la province de Salta. Il est élaboré par la famille Etchart, de Salta, avec un célèbre consultant bordelais.",
    quiz: [
      { q: "Quel célèbre œnologue-conseil bordelais coproduit Yacochuya ?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  sh2_colome_torrontes: {
    fact: "Torrontés issu des vignobles d’altitude de la vallée Calchaquí, à Salta. C’est le grand cépage blanc argentin, aux arômes floraux éclatants.",
    quiz: [
      { q: "Quel homme d’affaires suisse a racheté et relancé Bodega Colomé en 2001 ?", a: "Donald Hess", x: ["Meindert Pon", "Alexander Vik", "Eduardo Chadwick"] },
    ],
  },
  sh2_noemia: {
    fact: "Vin produit en toute petite quantité à partir de vieilles vignes de malbec plantées dans les années 1930 à Río Negro, en Patagonie.",
    quiz: [
      { q: "D’où vient le nom de Noemía ?", a: "De Noemi Marone Cinzano, de la famille italienne Cinzano, cofondatrice du domaine", x: ["D’une légende de princesse indigène", "De l’épouse du premier propriétaire du vignoble", "De la sainte patronne de la Patagonie"] },
    ],
  },
  sh2_findelmundo_malbec: {
    fact: "Malbec d’un domaine qui a créé son vignoble en défrichant le désert de Neuquén, en Patagonie. Le vent fort et les grands écarts de température donnent des vins à la couleur profonde.",
    quiz: [
      { q: "Que signifie en espagnol « Fin del Mundo » ?", a: "La fin du monde", x: ["La terre du vent", "L’étoile du Sud", "Le désert blanc"] },
    ],
  },
  sh2_schroeder_saurus: {
    fact: "Malbec de Familia Schroeder, domaine familial qui a planté son vignoble sur un plateau désertique de Neuquén, en Patagonie.",
    quiz: [
      { q: "D’où vient « Saurus », le nom de ce vin de Familia Schroeder ?", a: "D’un fossile de dinosaure découvert pendant la construction de la cave", x: ["Du surnom du fondateur", "D’un lézard qui vit dans les vignes", "D’un ancien équipement de forage pétrolier"] },
    ],
  },
  sh2_rustenvrede_estate: {
    fact: "Domaine du flanc du Helderberg, à Stellenbosch, qui ne produit que des vins rouges. Il a été racheté en 1977 par Jannie Engelbrecht, ancien international de rugby.",
    quiz: [
      { q: "Que signifie en néerlandais « Rust en Vrede » ?", a: "Repos et paix", x: ["Colline rouge", "Vent et mer", "Vieux moulin"] },
    ],
  },
  sh2_delairegraff_chardonnay: {
    fact: "Domaine perché au sommet du col de Helshoogte, entre Stellenbosch et Franschhoek, également réputé pour son hôtel et ses œuvres d’art.",
    quiz: [
      { q: "Quel est le métier principal de Laurence Graff, propriétaire de Delaire Graff ?", a: "Joaillier diamantaire", x: ["Patron d’une chaîne hôtelière", "Entraîneur de chevaux de course", "Architecte"] },
    ],
  },
  sh2_beyerskloof_pinotage: {
    fact: "Vin du quotidien du domaine spécialisé en pinotage fondé par Beyers Truter, surnommé « le roi du pinotage ».",
    quiz: [
      { q: "Dans quel grand domaine de Stellenbosch Beyers Truter, fondateur de Beyerskloof, a-t-il longtemps été chef de cave ?", a: "Kanonkop", x: ["Meerlust", "Vergelegen", "Rustenberg"] },
    ],
  },
  sh2_fairview_goatsdoroam: {
    fact: "Assemblage dont le nom vient d’une anecdote de la ferme Fairview, également célèbre pour ses fromages de chèvre : ses chèvres seraient entrées dans les vignes pour ne manger que les raisins les plus mûrs.",
    quiz: [
      { q: "Quelle appellation française le nom « Goats do Roam » imite-t-il par sa sonorité ?", a: "Côtes-du-Rhône", x: ["Châteauneuf-du-Pape", "Côte-Rôtie", "Côte de Nuits"] },
    ],
  },
  sh2_kenforrester_fmc: {
    fact: "Blanc haut de gamme élaboré par Ken Forrester, surnommé « Mister Chenin », avec les raisins de vieilles vignes de chenin blanc de Stellenbosch.",
    quiz: [
      { q: "Officiellement, de quoi « FMC » est-il l’abréviation dans The FMC de Ken Forrester ?", a: "Forrester Meinert Chenin", x: ["Fine Mature Chenin", "First Muscat Cuvée", "French Model Cellar"] },
    ],
  },
  sh2_demorgenzon_chenin: {
    fact: "Blanc élaboré à partir de vieilles vignes de chenin blanc par DeMorgenzon, domaine des collines de Stellenbosch. Son nom signifie « le soleil du matin ».",
    quiz: [
      { q: "Quelle musique DeMorgenzon diffuse-t-il jour et nuit dans ses vignes et son chai ?", a: "De la musique baroque", x: ["Du jazz", "Des percussions africaines traditionnelles", "Du rock"] },
    ],
  },
  sh2_porseleinberg: {
    fact: "Vin élaboré par Boekenhoutskloof avec de la syrah cultivée en bio dans le Swartland. Le vigneron imprime lui-même les étiquettes sur une vieille presse installée à la ferme.",
    quiz: [
      { q: "Que signifie en afrikaans « Porseleinberg » ?", a: "Montagne de porcelaine", x: ["Rivière d’argent", "Colline du vent", "Plage de sable blanc"] },
    ],
  },
  sh2_sadie_palladius: {
    fact: "Assemblage blanc qu’Eben Sadie élabore à partir de vieilles vignes de plusieurs cépages disséminées dans tout le Swartland. Il a fixé la référence des assemblages blancs sud-africains.",
    quiz: [
      { q: "Quel est le point commun entre Palladius et Columella, les deux vins phares de Sadie Family ?", a: "Ce sont deux auteurs de la Rome antique qui ont écrit sur l’agriculture", x: ["Ce sont deux empereurs romains", "Ce sont deux dieux de la mythologie grecque", "Ce sont deux montagnes du Swartland"] },
    ],
  },
  sh2_allesverloren_tintabarocca: {
    fact: "Rouge issu d’un cépage portugais, élaboré par une vieille ferme familiale de Riebeek-Kasteel, dans le Swartland, également réputée pour ses vins mutés de style porto.",
    quiz: [
      { q: "Que signifie le nom de la ferme Allesverloren ?", a: "Tout est perdu", x: ["Vignes à perte de vue", "La brebis égarée", "Vendange tardive"] },
    ],
  },
  sh2_grootconstantia_gouverneurs: {
    fact: "Assemblage bordelais de Groot Constantia, le plus ancien domaine viticole d’Afrique du Sud, fondé en 1685.",
    quiz: [
      { q: "Qui a fondé le domaine de Groot Constantia ?", a: "Simon van der Stel, gouverneur du Cap", x: ["Jan van Riebeeck, fondateur du Cap", "Willem Adriaan van der Stel, fils de Simon", "Cecil Rhodes, magnat des mines"] },
    ],
  },
  sh2_kleinconstantia_sb: {
    fact: "Sauvignon blanc élaboré par Klein Constantia, célèbre pour son Vin de Constance, sur les coteaux de Constantia balayés par la brise marine.",
    quiz: [
      { q: "Quel lien unissait à l’origine Klein Constantia et Groot Constantia ?", a: "Ce sont deux parties de l’unique domaine de Constantia, créé en 1685", x: ["Deux fermes fondées séparément par deux frères", "L’une a racheté l’autre et changé son nom", "Aucun, seuls leurs noms se ressemblent"] },
    ],
  },
  sh2_boschendal_1685: {
    fact: "Chardonnay de Boschendal, ferme historique à l’entrée de la vallée de Franschhoek, défrichée par des huguenots français.",
    quiz: [
      { q: "Que signifie « 1685 » dans Boschendal 1685 ?", a: "L’année de fondation de la ferme de Boschendal", x: ["L’année de la première exportation de vin", "L’altitude du vignoble (m)", "Le nombre de ceps plantés sur la ferme"] },
    ],
  },
  sh2_simonsig_kaapsevonkel: {
    fact: "Créé en 1971 par Frans Malan, c’est le premier vin effervescent d’Afrique du Sud à seconde fermentation en bouteille, point de départ du « Cap Classique » sud-africain.",
    quiz: [
      { q: "Que signifie en afrikaans « Kaapse Vonkel » ?", a: "L’étincelle du Cap", x: ["L’étoile du Cap", "L’écume de la mer", "La rosée dorée"] },
    ],
  },
  sh2_ernieels_signature: {
    fact: "Assemblage bordelais du domaine fondé sur les pentes du Helderberg, à Stellenbosch, par une star mondiale du sport originaire d’Afrique du Sud.",
    quiz: [
      { q: "Dans quel sport Ernie Els, fondateur d’Ernie Els Wines, est-il une star ?", a: "Le golf", x: ["Le rugby", "Le cricket", "Le tennis"] },
    ],
  },
  sh2_glenelly_ladymay: {
    fact: "Assemblage à base de cabernet sauvignon du domaine fondé à Stellenbosch, à près de 80 ans, par May-Eliane de Lencquesaing, qui dirigeait une grande maison bordelaise. Le vin porte son nom.",
    quiz: [
      { q: "Quel deuxième cru classé de Pauillac May-Eliane de Lencquesaing, fondatrice de Glenelly, a-t-elle dirigé jusqu’en 2007 ?", a: "Château Pichon Longueville Comtesse de Lalande", x: ["Château Pichon Baron", "Château Lynch-Bages", "Château Pontet-Canet"] },
    ],
  },
  sh2_lanzerac_pinotage: {
    fact: "Pinotage de Lanzerac, ferme historique de Stellenbosch également célèbre pour son hôtel.",
    quiz: [
      { q: "Quelle première Lanzerac a-t-il réalisée en 1961 ?", a: "Le premier vin portant le nom de cépage « Pinotage » sur l’étiquette", x: ["La première capsule à vis d’Afrique du Sud", "Le premier rosé d’Afrique du Sud", "La première certification bio d’Afrique du Sud"] },
    ],
  },
  sh2_diemersfontein_pinotage: {
    fact: "Pinotage de Diemersfontein, domaine de Wellington, au nord-est du Cap. Son style souple, aux notes boisées marquées, a connu un grand succès.",
    quiz: [
      { q: "Quel surnom porte le style de pinotage lancé et popularisé par Diemersfontein ?", a: "Le pinotage « café »", x: ["Le pinotage « vanille »", "Le pinotage « fumé »", "Le pinotage « cerise »"] },
    ],
  },
  sh2_bouza_tannat: {
    fact: "Tannat d’une bodega boutique familiale des environs de Montevideo, la capitale. C’est l’un des fers de lance de la qualité du tannat uruguayen.",
    quiz: [
      { q: "Quelle collection Bodega Bouza est-elle célèbre pour exposer dans ses murs ?", a: "Des voitures anciennes", x: ["De vieilles bouteilles de vin", "Des selles de gaucho", "Des œuvres d’art contemporain"] },
    ],
  },
  sh2_pisano_rpf: {
    fact: "Tannat du domaine de Canelones exploité de génération en génération par la famille Pisano, descendante d’immigrés italiens.",
    quiz: [
      { q: "De quoi « RPF » est-il l’abréviation dans Pisano RPF Tannat ?", a: "Reserva Personal de la Familia", x: ["Red Premium Fruit", "Río de la Plata Finca", "Un numéro de parcelle"] },
    ],
  },
  sh2_mercian_kikyogahara: {
    fact: "Le rouge phare de Château Mercian, issu du merlot du plateau de Kikyogahara, à Shiojiri (Nagano). Il a révélé au monde le potentiel du merlot japonais.",
    quiz: [
      { q: "À quel groupe japonais de boissons appartient Château Mercian ?", a: "Kirin", x: ["Suntory", "Asahi", "Sapporo"] },
    ],
  },
  sh2_suntory_tomi: {
    fact: "Assemblage bordelais haut de gamme que Suntory élabore avec les meilleurs raisins de son domaine Tomi no Oka, dans la préfecture de Yamanashi.",
    quiz: [
      { q: "Quel cru classé de Saint-Julien, à Bordeaux, Suntory, producteur de Tomi, a-t-il racheté en 1983 ?", a: "Château Lagrange", x: ["Château Talbot", "Château Beychevelle", "Château Gruaud-Larose"] },
    ],
  },
  sh2_greatwall_cs: {
    fact: "Grande marque de vin chinoise (Changcheng) dont le nom signifie « Grande Muraille ». Elle a sorti son premier vin au début des années 1980 dans le Hebei.",
    quiz: [
      { q: "Quelle entreprise d’État chinoise possède la marque Great Wall (Changcheng) ?", a: "Le groupe COFCO", x: ["Changyu", "La brasserie Tsingtao", "Kweichow Moutai"] },
    ],
  },
  sh2_gracevineyard_chairmans: {
    fact: "Le rouge haut de gamme de Grace Vineyard, domaine familial fondé en 1997 dans la province du Shanxi par un homme d’affaires hongkongais.",
    quiz: [
      { q: "Que signifie « Yiyuan » (怡园), le nom chinois de Grace Vineyard ?", a: "Le jardin de la joie", x: ["La colline d’or", "Le fleuve bleu", "La forêt du dragon"] },
    ],
  },
  sh2_helanqingxue_jiabeilan: {
    fact: "Assemblage bordelais d’un petit domaine situé au pied des monts Helan, dans le Ningxia. On le considère comme le premier vin à avoir montré que la Chine pouvait atteindre le niveau mondial.",
    quiz: [
      { q: "Quel prix Jia Bei Lan 2009 de Helan Qingxue a-t-il remporté en 2011 ?", a: "Un International Trophy aux Decanter World Wine Awards", x: ["Vin de l’année du Wine Spectator", "100 points de Robert Parker", "Le grand prix de Vinexpo Bordeaux"] },
    ],
  },
  sh2_silverheights_summit: {
    fact: "Le rouge haut de gamme de Silver Heights, domaine familial du pied des monts Helan, dans le Ningxia, dirigé par la vinificatrice Gao Yuan (Emma Gao) et sa famille.",
    quiz: [
      { q: "Où Emma Gao, vinificatrice de Silver Heights, a-t-elle étudié l’œnologie ?", a: "À Bordeaux, en France", x: ["À Davis, en Californie", "À Adélaïde, en Australie", "À Geisenheim, en Allemagne"] },
    ],
  },
  sh2_longdai: {
    fact: "Rouge issu du vignoble créé par la famille propriétaire d’un grand château bordelais sur les collines de Penglai, dans la péninsule du Shandong. Premier millésime en 2017.",
    quiz: [
      { q: "Quel premier grand cru classé de Bordeaux appartient à la famille qui produit Long Dai ?", a: "Château Lafite Rothschild", x: ["Château Mouton Rothschild", "Château Margaux", "Château Latour"] },
    ],
  },
  sh2_sula_sb: {
    fact: "Sauvignon blanc du grand domaine indien fondé en 1999 à Nashik par Rajeev Samant, diplômé de l’université Stanford.",
    quiz: [
      { q: "À qui Sula Vineyards doit-il son nom ?", a: "À Sulabha, la mère du fondateur", x: ["À une déesse hindoue", "À la rivière qui traverse Nashik", "À la fille du fondateur"] },
    ],
  },
  sh2_grover_lareserve: {
    fact: "L’assemblage rouge phare de Grover Vineyards, domaine fondé en 1988 dans les Nandi Hills, près de Bangalore, et considéré comme un pionnier du vin indien.",
    quiz: [
      { q: "Quel célèbre œnologue-conseil bordelais a longtemps conseillé Grover Vineyards ?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
};

export default T;
