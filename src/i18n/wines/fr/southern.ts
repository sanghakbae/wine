import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  sh_penfolds_bin389: {
    fact: "Assemblage cabernet-shiraz créé par Max Schubert en 1960. On le surnomme « Baby Grange » parce qu’il est élevé dans les fûts qui ont servi à Grange.",
    quiz: [
      { q: "Quel est le surnom de Penfolds Bin 389 Cabernet Shiraz ?", a: "Baby Grange", x: ["Little Penfolds", "Le Pétrus australien", "Le joyau de la Barossa"] },
    ],
  },
  sh_penfolds_bin407: {
    fact: "Cabernet sauvignon de Penfolds lancé avec le millésime 1990. Assemblant des raisins de plusieurs régions, il se boit plus tôt que le Bin 707.",
    quiz: [
      { q: "À l’origine, à quoi correspondait le numéro « Bin » des vins Penfolds comme Penfolds Bin 407 Cabernet Sauvignon ?", a: "Au casier où le vin était stocké en cave", x: ["Au numéro de la parcelle", "Au matricule de l’œnologue", "À la date de première sortie"] },
    ],
  },
  sh_penfolds_bin707: {
    fact: "Le plus grand cabernet sauvignon de Penfolds, premier millésime 1964. Il n’est pas produit les années où la qualité du raisin déçoit.",
    quiz: [
      { q: "D’où vient le « 707 » de Penfolds Bin 707 Cabernet Sauvignon ?", a: "Du Boeing 707", x: ["Des 707 ans de la maison", "D’un vignoble à 707 m d’altitude", "Du 707e essai de vinification"] },
    ],
  },
  sh_penfolds_bin28: {
    fact: "La shiraz emblématique de Penfolds, premier millésime 1959. « Kalimna » est un vignoble de la Barossa acheté par Penfolds en 1945.",
    quiz: [
      { q: "Que désigne « Kalimna » dans Penfolds Bin 28 Kalimna Shiraz ?", a: "Un vignoble de la Barossa acheté par Penfolds", x: ["Le prénom de l’épouse du fondateur", "Le nom du premier chef de cave", "Le siège de la maison à Adélaïde"] },
    ],
  },
  sh_penfolds_koonunga: {
    fact: "Vin du quotidien de Penfolds lancé en 1976, qui tire son nom du vignoble de Koonunga Hill, dans la Barossa Valley.",
    quiz: [
      { q: "En quelle année Penfolds Koonunga Hill Shiraz Cabernet est-il sorti pour la première fois ?", a: "1976", x: ["1936", "1996", "2006"] },
    ],
  },
  sh_penfolds_sthenri: {
    fact: "Contrairement à Grange, élevé en fûts neufs, il vieillit dans de grands foudres de chêne vieux de plusieurs décennies, qui privilégient le fruit plutôt que le boisé.",
    quiz: [
      { q: "Dans quel contenant Penfolds St Henri Shiraz est-il élevé ?", a: "De grands foudres de chêne très anciens", x: ["De petites barriques neuves françaises", "Des jarres en terre enterrées", "Des cuves œuf en béton"] },
    ],
  },
  sh_penfolds_yattarna: {
    fact: "Le chardonnay haut de gamme de Penfolds, premier millésime 1995, fruit de longues années d’essais pour créer un « Grange blanc ».",
    quiz: [
      { q: "Que signifie le nom de Penfolds Yattarna Chardonnay dans une langue aborigène ?", a: "Petit à petit, peu à peu", x: ["Or blanc", "Vent du sud", "Eau claire"] },
    ],
  },
  sh_penfolds_rwt: {
    fact: "Shiraz de la Barossa Valley élevée en fûts de chêne français : l’autre sommet de Penfolds, en contraste avec Grange, élevé en chêne américain.",
    quiz: [
      { q: "De quoi « RWT », dans Penfolds RWT Shiraz, est-il l’abréviation ?", a: "Red Winemaking Trial", x: ["Royal Wine Treasure", "Reserve Wine Tasting", "Rare Wine Tradition"] },
    ],
  },
  sh_henschke_hillofgrace: {
    fact: "Shiraz d’un vignoble unique d’Eden Valley où poussent des vignes « grands-pères » plantées dans les années 1860. Il porte le nom du vignoble depuis 1958.",
    quiz: [
      { q: "D’où vient le nom de Hill of Grace, de Henschke ?", a: "De la traduction anglaise de Gnadenberg, l’église luthérienne d’en face", x: ["Du prénom de Grace, fille du fondateur", "D’un site sacré aborigène", "D’une visite de la reine d’Angleterre"] },
    ],
  },
  sh_henschke_edelstone: {
    fact: "Issu d’une vieille parcelle de shiraz d’Eden Valley plantée en 1912. Henschke le met en bouteille sous le nom du vignoble depuis 1952.",
    quiz: [
      { q: "En quelle année la shiraz du vignoble Mount Edelstone de Henschke a-t-elle été plantée ?", a: "1912", x: ["1812", "1962", "1992"] },
    ],
  },
  sh_torbreck_runrig: {
    fact: "De vieilles shiraz de la Barossa complétées d’un peu de viognier. « RunRig » désigne un ancien système écossais de culture en commun.",
    quiz: [
      { q: "D’où vient le nom « Torbreck », producteur de RunRig ?", a: "D’une forêt écossaise où le fondateur fut bûcheron", x: ["D’un château de la ville natale du fondateur", "D’un toponyme aborigène de la Barossa", "Du nom du premier propriétaire du vignoble"] },
    ],
  },
  sh_twohands_angelsshare: {
    fact: "Shiraz de McLaren Vale de Two Hands, domaine fondé en 1999 par Michael Twelftree et Richard Mintz.",
    quiz: [
      { q: "À l’origine, que désigne l’expression « Angels’ Share » (part des anges) de Two Hands Angels’ Share Shiraz ?", a: "L’alcool qui s’évapore pendant l’élevage en fût", x: ["Les raisins laissés sur pied après la vendange", "Le premier verre goûté par le vigneron", "Le vin de dîme offert à l’église"] },
    ],
  },
  sh_clarendon_astralis: {
    fact: "La shiraz haut de gamme de Clarendon Hills, domaine fondé par Roman Bratasiuk, issue de très vieilles vignes.",
    quiz: [
      { q: "Que signifie en latin le nom Astralis, de Clarendon Hills ?", a: "Des étoiles, astral", x: ["Haute colline", "Terre rouge", "Vieil arbre"] },
    ],
  },
  sh_wolfblass_yellow: {
    fact: "Le vin du quotidien phare du domaine fondé en 1966 par l’œnologue d’origine allemande Wolf Blass. L’étiquette jaune et l’aigle héraldique sont sa signature.",
    quiz: [
      { q: "De quel pays est originaire Wolfgang Blass, créateur de Wolf Blass Yellow Label Cabernet Sauvignon ?", a: "L’Allemagne", x: ["L’Autriche", "La Suisse", "Les Pays-Bas"] },
    ],
  },
  sh_wolfblass_black: {
    fact: "L’assemblage phare de Wolf Blass, premier millésime 1973. Il s’est fait un nom en remportant trois années de suite le prix le plus prestigieux d’Australie pour les vins rouges.",
    quiz: [
      { q: "Quel prix australien Wolf Blass Black Label a-t-il remporté trois années de suite dans les années 1970 ?", a: "Le Jimmy Watson Trophy", x: ["Le Max Schubert Trophy", "La Canberra Gold Cup", "La Murray River Medal"] },
    ],
  },
  sh_jacobscreek: {
    fact: "Son nom vient du ruisseau Jacob’s Creek, dans la Barossa, au bord duquel l’immigrant allemand Johann Gramp planta des vignes en 1847. Marque d’export emblématique, elle a fait connaître le vin australien au monde.",
    quiz: [
      { q: "D’où vient le nom de Jacob’s Creek ?", a: "Du ruisseau qui longeait le premier vignoble", x: ["Du prénom du fils du fondateur", "Du nom du premier navire d’exportation", "Du nom d’un chef aborigène"] },
    ],
  },
  sh_lindemans_bin65: {
    fact: "Tout a commencé en 1843, quand Henry Lindeman, chirurgien anglais, planta des vignes dans la Hunter Valley. C’est l’un des chardonnays australiens les plus vendus au monde.",
    quiz: [
      { q: "Quel était le premier métier d’Henry Lindeman, fondateur de la maison qui produit Lindeman’s Bin 65 Chardonnay ?", a: "Chirurgien", x: ["Capitaine de bateau à vapeur", "Mineur dans les mines d’or", "Pasteur anglican"] },
    ],
  },
  sh_rosemount_diamond: {
    fact: "Le vin phare de Rosemount, domaine créé par Robert Oatley dans la Hunter Valley en 1969. Son étiquette en losange lui vaut le nom de « Diamond Label ».",
    quiz: [
      { q: "D’où vient le nom de Rosemount Estate Diamond Label Shiraz ?", a: "De son étiquette en forme de losange", x: ["D’un vignoble près d’une mine de diamants", "Des 60 ans de la maison", "D’une fausse pierre incrustée dans la bouteille"] },
    ],
  },
  sh_hardys_eileen: {
    fact: "La shiraz phare de Hardys, maison fondée en 1853 par l’immigrant anglais Thomas Hardy. Elle rend hommage à Eileen Hardy, la matriarche qui dirigea la famille.",
    quiz: [
      { q: "Qui était l’Eileen Hardy de Hardys Eileen Hardy Shiraz ?", a: "La matriarche qui dirigea la famille Hardy", x: ["La première femme œnologue de Hardys", "La mère du fondateur Thomas Hardy", "Une aristocrate anglaise fondatrice du domaine"] },
    ],
  },
  sh_darenberg_deadarm: {
    fact: "La shiraz emblématique de d’Arenberg, célèbre pour la bande rouge qui barre l’étiquette en diagonale. Elle provient de vieilles vignes dont un bras s’est desséché à cause d’une maladie.",
    quiz: [
      { q: "Que désigne le « Dead Arm » (bras mort) de The Dead Arm Shiraz ?", a: "Une maladie qui dessèche un bras de la vigne", x: ["Le fondateur blessé au bras à la guerre", "Un bras de rivière asséché près du vignoble", "Un pressoir cassé lors de la première vendange"] },
    ],
  },
  sh_leeuwin_art: {
    fact: "Chardonnay de la gamme « Art Series », dont l’étiquette reproduit chaque année l’œuvre d’un peintre australien contemporain. Il a fait de Margaret River une région de chardonnay de classe mondiale.",
    quiz: [
      { q: "Quel grand nom du vin américain a conseillé Leeuwin Estate, producteur de Leeuwin Estate Art Series Chardonnay, dans le choix de son vignoble ?", a: "Robert Mondavi", x: ["Ernest Gallo", "Warren Winiarski", "Jess Jackson"] },
    ],
  },
  sh_cullen_diana: {
    fact: "L’assemblage à base de cabernet emblématique de Cullen, domaine fondé en 1971 par Kevin et Diana Cullen. Leur fille Vanya Cullen cultive le vignoble en biodynamie.",
    quiz: [
      { q: "À qui le nom Diana Madeline, de Cullen, rend-il hommage ?", a: "À Diana Cullen, cofondatrice du domaine", x: ["À la fille d’un voisin venu aider aux premières vendanges", "À Diana, princesse de Galles", "À la première petite-fille du fondateur"] },
    ],
  },
  sh_vassefelix: {
    fact: "Premier domaine de Margaret River, fondé en 1967 par le médecin Tom Cullity. « Vasse » vient d’un marin français disparu au large de cette côte.",
    quiz: [
      { q: "Que signifie en latin le « Felix » de Vasse Felix Cabernet Sauvignon ?", a: "Heureux, chanceux", x: ["Des forêts", "Rouge", "De la mer"] },
    ],
  },
  sh_mosswood: {
    fact: "Domaine pionnier de Margaret River, où le Dr Bill Pannell planta des vignes en 1969. Il est réputé pour ses cabernets fins et de longue garde.",
    quiz: [
      { q: "Quel était le métier d’origine de Bill Pannell, fondateur de Moss Wood ?", a: "Médecin", x: ["Avocat", "Ingénieur des mines", "Professeur de lycée"] },
    ],
  },
  sh_capementelle: {
    fact: "Cabernet sauvignon de l’un des premiers domaines de Margaret River, fondé en 1970 par David Hohnen.",
    quiz: [
      { q: "Quel autre domaine David Hohnen, fondateur de Cape Mentelle, a-t-il créé en Nouvelle-Zélande en 1985 ?", a: "Cloudy Bay", x: ["Villa Maria", "Oyster Bay", "Kim Crawford"] },
    ],
  },
  sh_grosset_polishhill: {
    fact: "Riesling sec que Jeffrey Grosset élabore sur les sols pauvres et caillouteux de Polish Hill River, dans la Clare Valley. C’est une référence du riesling australien.",
    quiz: [
      { q: "D’où vient le toponyme « Polish Hill » de Grosset Polish Hill Riesling ?", a: "Des immigrants polonais installés au XIXe siècle", x: ["De roches lustrées (« polish »)", "Du nom du premier propriétaire du vignoble", "D’un don de la couronne polonaise"] },
      { q: "Quelle fermeture Grosset et d’autres producteurs de riesling de la Clare Valley ont-ils adoptée ensemble en 2000 à la place du bouchon en liège ?", a: "La capsule à vis", x: ["Le bouchon en verre", "Le cachet de cire", "La capsule couronne"] },
    ],
  },
  sh_jimbarry_armagh: {
    fact: "La plus grande shiraz de Jim Barry, issue d’un vignoble unique du secteur « Armagh », dans la Clare Valley. C’est l’une des shiraz icônes de l’Australie.",
    quiz: [
      { q: "À l’origine, de quel pays vient le nom de lieu « Armagh » de The Armagh Shiraz de Jim Barry ?", a: "L’Irlande", x: ["L’Écosse", "Le pays de Galles", "L’Angleterre"] },
    ],
  },
  sh_wynns_blacklabel: {
    fact: "La référence du cabernet de Coonawarra, premier millésime 1954. Le bâtiment aux trois pignons de l’étiquette est le chai construit en 1891 par John Riddoch.",
    quiz: [
      { q: "Qu’a de particulier le chai dessiné sur l’étiquette de Wynns Coonawarra Estate Black Label Cabernet Sauvignon ?", a: "Trois pignons pointus", x: ["Un toit en dôme", "Une haute tour d’horloge", "Un grand moulin à vent"] },
    ],
  },
  sh_yalumba_signature: {
    fact: "Le rouge phare du plus ancien domaine familial d’Australie, fondé en 1849. La maison possède sa propre tonnellerie.",
    quiz: [
      { q: "Qu’ajoute-t-on chaque année sur l’étiquette de Yalumba The Signature Cabernet Sauvignon Shiraz ?", a: "La signature d’une personne ayant marqué la maison", x: ["Le portrait du fondateur", "Le graphique des pluies de l’année", "Une carte aérienne du vignoble"] },
      { q: "Quel était le métier de Samuel Smith, qui fonda en 1849 Yalumba, producteur de Yalumba The Signature ?", a: "Brasseur", x: ["Capitaine de navire", "Banquier", "Forgeron"] },
    ],
  },
  sh_brownbrothers_omf: {
    fact: "Vin doux de la famille Brown, à Milawa dans le Victoria. On y assemble un muscat orange aux arômes de fleur d’oranger avec du flora.",
    quiz: [
      { q: "En quelle année la famille Brown, productrice de Brown Brothers Orange Muscat & Flora, a-t-elle fait son premier vin à Milawa ?", a: "1889", x: ["1789", "1939", "1969"] },
    ],
  },
  sh_mollydooker_boxer: {
    fact: "La shiraz emblématique de Mollydooker, domaine fondé en 2005 par Sparky et Sarah Marquis. Célèbre pour ses étiquettes façon bande dessinée et son style dense et très mûr.",
    quiz: [
      { q: "Que signifie « mollydooker », nom du producteur de The Boxer Shiraz, en argot australien ?", a: "Gaucher", x: ["Gros buveur", "Chasseur de kangourous", "Voleur de raisin"] },
      { q: "À quoi sert le « Mollydooker Shake », qui consiste à secouer vigoureusement la bouteille tête en bas dès l’ouverture de The Boxer Shiraz ?", a: "Chasser l’azote ajouté pour préserver la fraîcheur", x: ["Remettre en suspension le dépôt", "Créer des bulles", "Assouplir le bouchon"] },
    ],
  },
  sh_seppeltsfield_para100: {
    fact: "Chaque année, la maison met en bouteille un fût de tawny rempli exactement 100 ans plus tôt. Seppeltsfield est le seul domaine au monde à le faire chaque année.",
    quiz: [
      { q: "En quelle année est née la tradition de Seppeltsfield Para 100 Year Old Vintage Tawny, avec le premier fût mis de côté pour être ouvert 100 ans plus tard ?", a: "1878", x: ["1778", "1928", "1958"] },
    ],
  },
  sh_debortoli_nobleone: {
    fact: "Le grand liquoreux australien, issu de sémillon botrytisé. Il fut élaboré pour la première fois en 1982 par De Bortoli, maison fondée en 1928 par une famille d’immigrants italiens.",
    quiz: [
      { q: "Quel œnologue a créé Noble One de De Bortoli en 1982 ?", a: "Darren De Bortoli", x: ["Max Schubert", "Wolf Blass", "Peter Lehmann"] },
    ],
  },
  sh_19crimes: {
    fact: "Chaque étiquette montre le visage d’un vrai bagnard déporté d’Angleterre vers l’Australie. Avec une application mobile, le prisonnier s’anime et raconte son histoire.",
    quiz: [
      { q: "D’où vient le nom de 19 Crimes Shiraz ?", a: "Des 19 crimes passibles de déportation en Australie", x: ["Des 19 erreurs du fondateur", "De 19 évadés de prison", "Du 19e navire de forçats arrivé en Australie"] },
    ],
  },
  sh_tyrrells_vat1: {
    fact: "La légende du sémillon de la Hunter : vinifié sans bois et peu alcoolisé, il développe après un long vieillissement en bouteille des notes de pain grillé et de miel.",
    quiz: [
      { q: "Quel vin Tyrrell’s, producteur de Tyrrell’s Vat 1 Hunter Semillon, a-t-il lancé en 1971, considéré comme le premier chardonnay commercial d’Australie ?", a: "Vat 47", x: ["Bin 65", "Yattarna", "Art Series"] },
    ],
  },
  sh_cloudybay_tekoko: {
    fact: "Le sauvignon blanc à part de Cloudy Bay, fermenté avec des levures indigènes et élevé en fût. Plus crémeux et ample que le sauvignon blanc classique, vif et frais.",
    quiz: [
      { q: "D’où vient le nom de Te Koko, de Cloudy Bay ?", a: "Du nom maori de la baie de Cloudy Bay", x: ["Du nom maori de la fille du fondateur", "De la montagne derrière le domaine", "D’une constellation visible le jour de la première vendange"] },
    ],
  },
  sh_kimcrawford_sb: {
    fact: "Marque créée en 1996 par l’œnologue Kim Crawford et sa femme Erica. Son sauvignon blanc de Marlborough aux arômes de fruits tropicaux a conquis le monde.",
    quiz: [
      { q: "Qui est le Kim Crawford de Kim Crawford Sauvignon Blanc ?", a: "L’œnologue néo-zélandais qui a fondé le domaine", x: ["Le fermier qui vendit le premier vignoble", "Un joueur de cricket australien", "Le premier maire de Marlborough"] },
    ],
  },
  sh_villamaria_privatebin: {
    fact: "Domaine fondé à Auckland en 1961 par George Fistonich. Il est le pionnier de la capsule à vis dans le vin néo-zélandais.",
    quiz: [
      { q: "Quelle décision, rare pour un grand domaine, Villa Maria a-t-il prise en 2001 ?", a: "Passer tous ses vins à la capsule à vis", x: ["Arrêter les vins blancs", "Ne plus vendre qu’en canette", "Cesser toute exportation"] },
    ],
  },
  sh_oysterbay_sb: {
    fact: "Marque de sauvignon blanc de Marlborough de la famille Delegat, exportée dans de nombreux pays pour son style frais et net.",
    quiz: [
      { q: "Quelles sont les origines de la famille Delegat, productrice d’Oyster Bay ?", a: "Des immigrants croates", x: ["Des immigrants écossais", "Des immigrants néerlandais", "Une tribu maorie"] },
    ],
  },
  sh_brancott_sb: {
    fact: "Premier domaine à planter un vignoble commercial à Marlborough, en 1973 : le pionnier de l’ère du sauvignon blanc de Marlborough.",
    quiz: [
      { q: "Sous quel nom de marque Brancott Estate était-il connu auparavant ?", a: "Montana", x: ["Kaikoura", "Blenheim Estate", "Canterbury Hill"] },
    ],
  },
  sh_dogpoint_sb: {
    fact: "Domaine créé par le viticulteur Ivan Sutherland et l’œnologue James Healy, longtemps chez Cloudy Bay, qui ont sorti leur premier millésime en 2002.",
    quiz: [
      { q: "Dans quel domaine les deux fondateurs de Dog Point travaillaient-ils ensemble auparavant ?", a: "Cloudy Bay", x: ["Villa Maria", "Montana", "Kim Crawford"] },
    ],
  },
  sh_greywacke_sb: {
    fact: "Domaine fondé en 2009 par Kevin Judd, œnologue fondateur de Cloudy Bay où il travailla 25 ans. Il est aussi réputé comme photographe des paysages viticoles néo-zélandais.",
    quiz: [
      { q: "Qu’est-ce que la « greywacke » qui a donné son nom à Greywacke Sauvignon Blanc ?", a: "Un grès courant dans le lit des rivières de Marlborough", x: ["Le chien gris du fondateur", "Un ciel d’aube brumeux", "Une baleine des légendes maories"] },
    ],
  },
  sh_feltonroad_pn: {
    fact: "Domaine phare de Bannockburn, dans le Central Otago, cultivé en biodynamie. Il a hissé le pinot noir néo-zélandais au sommet mondial.",
    quiz: [
      { q: "Quelle méthode de culture s’applique au vignoble de Felton Road Bannockburn Pinot Noir ?", a: "La biodynamie", x: ["L’hydroponie", "La culture sous serre", "L’agriculture intensive aux engrais chimiques"] },
    ],
  },
  sh_atarangi_pn: {
    fact: "Domaine pionnier fondé à Martinborough en 1980 par Clive Paton. « Ata Rangi » signifie en maori « nouveau départ » ou « ciel de l’aube ».",
    quiz: [
      { q: "Comment le « clone Gumboot » (botte en caoutchouc) utilisé pour Ata Rangi Pinot Noir est-il arrivé en Nouvelle-Zélande ?", a: "Un douanier a planté des sarments saisis, cachés dans une botte", x: ["Offert par l’ambassadeur de France", "Des graines apportées par des oiseaux migrateurs", "Créé par croisement dans un institut universitaire"] },
    ],
  },
  sh_craggy_sophia: {
    fact: "Assemblage bordelais à dominante merlot de Craggy Range, issu des sols de graves du Gimblett Gravels, à Hawke’s Bay.",
    quiz: [
      { q: "Quel sommet, géant endormi des légendes maories, se dresse derrière le domaine qui produit Sophia de Craggy Range ?", a: "Te Mata Peak", x: ["Le mont Ruapehu", "Le mont Cook", "Le mont Taranaki"] },
    ],
  },
  sh_temata_coleraine: {
    fact: "Pionnier des assemblages bordelais en Nouvelle-Zélande, produit par Te Mata Estate, domaine de Hawke’s Bay dirigé par la famille Buck.",
    quiz: [
      { q: "Quel est le premier millésime de Coleraine de Te Mata ?", a: "1982", x: ["1952", "2002", "2012"] },
    ],
  },
  sh_stoneleigh_sb: {
    fact: "Son nom vient des vignobles caillouteux d’un ancien lit de rivière, dans le secteur de Rapaura à Marlborough. Les galets chauffés le jour restitueraient la chaleur la nuit pour mûrir le raisin.",
    quiz: [
      { q: "Quelle particularité du vignoble est liée au nom de Stoneleigh Sauvignon Blanc ?", a: "Un ancien lit de rivière couvert de galets", x: ["Des dunes de sable en bord de mer", "Des pentes couvertes de cendres volcaniques", "Des terrasses sur une falaise calcaire"] },
    ],
  },
  sh_saintclair_sb: {
    fact: "Domaine familial de Marlborough né en 1994, quand le couple Ibbotson, qui vendait jusque-là ses raisins, lança son propre vin.",
    quiz: [
      { q: "De qui vient le nom de Saint Clair Marlborough Sauvignon Blanc ?", a: "De James Sinclair, premier colon à cultiver ces terres", x: ["De Claire, fille du fondateur", "De sœur Claire, missionnaire française", "D’une reine du premier pays importateur"] },
    ],
  },
  sh_mtdifficulty_pn: {
    fact: "Domaine fondé par un groupe de viticulteurs de Bannockburn, dans le Central Otago. Il porte le nom de la montagne qui domine ses vignes.",
    quiz: [
      { q: "Que désigne « Mt Difficulty » dans Mt Difficulty Bannockburn Pinot Noir ?", a: "La montagne qui domine le vignoble", x: ["Le surnom d’une première année difficile", "Un sommet himalayen gravi par le fondateur", "La galerie d’une ancienne mine d’or"] },
    ],
  },
  sh_rippon_pn: {
    fact: "Vignoble familial sur un coteau au bord d’un lac, célèbre pour son paysage de carte postale avec le lac et les Alpes du Sud en toile de fond.",
    quiz: [
      { q: "Quel lac le vignoble de Rippon Mature Vine Pinot Noir surplombe-t-il ?", a: "Le lac Wanaka", x: ["Le lac Taupo", "Le lac Rotorua", "Le lac Tekapo"] },
    ],
  },
  sh_sena: {
    fact: "Vin icône chilien né de l’alliance d’Eduardo Chadwick et de Robert Mondavi, premier millésime 1995. Il est aujourd’hui produit par la seule famille Chadwick.",
    quiz: [
      { q: "Quelle figure du vin de la Napa Valley a lancé Seña avec Eduardo Chadwick ?", a: "Robert Mondavi", x: ["Jess Jackson", "Ernest Gallo", "Warren Winiarski"] },
    ],
  },
  sh_donmelchor: {
    fact: "Le plus grand cabernet sauvignon de Concha y Toro, premier millésime 1987, issu du vignoble de Puente Alto, au pied des Andes.",
    quiz: [
      { q: "Qui était le Don Melchor de Don Melchor ?", a: "Le fondateur de Concha y Toro, en 1883", x: ["Un général de l’indépendance chilienne", "Le premier chef de cave", "Un noble espagnol qui vendit le vignoble"] },
    ],
  },
  sh_montes_alpham: {
    fact: "L’assemblage bordelais icône de Montes, premier millésime 1996, issu des coteaux d’Apalta, à Colchagua.",
    quiz: [
      { q: "Quel est le premier millésime de Montes Alpha M ?", a: "1996", x: ["1976", "2006", "2016"] },
    ],
  },
  sh_montes_folly: {
    fact: "Planter de la syrah sur les pentes abruptes d’Apalta, où personne n’avait jamais planté de vigne, lui a valu son nom de « Folly » (folie). Son étiquette illustrée et loufoque est aussi célèbre.",
    quiz: [
      { q: "Quel artiste britannique a illustré l’étiquette de Montes Folly Syrah ?", a: "Ralph Steadman", x: ["David Hockney", "Quentin Blake", "Banksy"] },
    ],
  },
  sh_montes_purpleangel: {
    fact: "Vin icône de Montes à base de carménère, le cépage emblème du Chili. Longtemps confondu avec le merlot, le carménère n’a été identifié qu’en 1994.",
    quiz: [
      { q: "L’ange présent sur chaque étiquette Montes, comme sur Montes Purple Angel, serait l’ange gardien de qui ?", a: "Du cofondateur Douglas Murray", x: ["De la fille du fondateur Aurelio Montes", "Du héros de l’indépendance O’Higgins", "De la reine du premier pays importateur"] },
      { q: "Avant son identification en 1994, pour quel cépage le carménère de Montes Purple Angel était-il pris au Chili ?", a: "Le merlot", x: ["Le malbec", "La syrah", "Le pinot noir"] },
    ],
  },
  sh_closapalta: {
    fact: "Vin icône de Lapostolle, premier millésime 1997. Son 2005 a été classé premier du palmarès « vin de l’année » de Wine Spectator en 2008.",
    quiz: [
      { q: "Quelle célèbre liqueur française doit-on à la famille Marnier-Lapostolle, productrice de Clos Apalta ?", a: "Grand Marnier", x: ["Cointreau", "Chartreuse", "Bénédictine"] },
    ],
  },
  sh_vinedochadwick: {
    fact: "Cabernet de parcelle unique de la famille Chadwick, premier millésime 1999. En 2004, lors de la dégustation à l’aveugle de Berlin, il a devancé les premiers crus de Bordeaux.",
    quiz: [
      { q: "Qu’était à l’origine le vignoble de Viñedo Chadwick ?", a: "Le terrain de polo du père d’Eduardo Chadwick", x: ["Un aérodrome de l’armée de l’air chilienne", "Une mine de cuivre", "Le potager d’un monastère"] },
    ],
  },
  sh_casaconcha_cs: {
    fact: "Gamme premium de Concha y Toro, issue de vignobles au terroir marqué. Le cabernet sauvignon provient de Puente Alto.",
    quiz: [
      { q: "D’où vient le nom de Marqués de Casa Concha Cabernet Sauvignon ?", a: "Du titre de marquis accordé par le roi d’Espagne à la famille Concha", x: ["D’une église voisine du premier vignoble", "Du nom de jeune fille de l’épouse du fondateur", "Du surnom du premier président chilien"] },
    ],
  },
  sh_santarita_120: {
    fact: "Son nom honore les 120 soldats indépendantistes qui, en 1814, eurent la vie sauve en se cachant dans la cave du domaine. C’est l’un des vins chiliens les plus appréciés en Corée.",
    quiz: [
      { q: "Que signifie le « 120 » de Santa Rita 120 Cabernet Sauvignon ?", a: "Les 120 soldats cachés dans la cave du domaine", x: ["Les 120 ans de la maison", "Des vignes de 120 ans", "120 fûts de chêne"] },
      { q: "Quelle maîtresse de domaine cacha dans sa cave, en 1814, les soldats de l’histoire de Santa Rita 120 ?", a: "Paula Jaraquemada", x: ["Eva Perón", "Gabriela Mistral", "Isabel Allende"] },
    ],
  },
  sh_santarita_casareal: {
    fact: "Le vin phare de Santa Rita, issu d’une vieille parcelle de cabernet d’Alto Jahuel, dans la vallée du Maipo.",
    quiz: [
      { q: "En quelle année Santa Rita, producteur de Casa Real Cabernet Sauvignon, a-t-il été fondé ?", a: "1880", x: ["1780", "1930", "1960"] },
    ],
  },
  sh_errazuriz_donmax: {
    fact: "Vin icône élaboré par Errázuriz en hommage à son fondateur, à partir de raisins de la vallée de l’Aconcagua.",
    quiz: [
      { q: "Qui était le Don Maximiano de Don Maximiano Founder’s Reserve, d’Errázuriz ?", a: "Le fondateur du domaine, en 1870", x: ["Le premier président du Chili", "Le premier chef de cave", "Un moine espagnol qui légua le vignoble"] },
    ],
  },
  sh_conosur_bicicleta: {
    fact: "Le vélo de l’étiquette rend hommage aux ouvriers qui circulent à vélo entre les rangs de vigne. Fondé en 1993, Cono Sur a popularisé le pinot noir chilien.",
    quiz: [
      { q: "Pourquoi un vélo figure-t-il sur l’étiquette de Cono Sur Bicicleta Pinot Noir ?", a: "En hommage aux ouvriers qui parcourent les vignes à vélo", x: ["Le fondateur était cycliste professionnel", "C’est le vin officiel du Tour de France", "Un vignoble a la forme d’un vélo"] },
      { q: "Que signifie « Cono Sur » dans Cono Sur Bicicleta Pinot Noir ?", a: "Cône Sud", x: ["Vent du sud", "Neige des Andes", "Croix du Sud"] },
    ],
  },
  sh_carmen_granreserva: {
    fact: "Cabernet sauvignon de Carmen, fondé en 1850 et considéré comme la plus ancienne marque de vin du Chili.",
    quiz: [
      { q: "De qui vient le nom de Viña Carmen, producteur de Carmen Gran Reserva Cabernet Sauvignon ?", a: "De l’épouse du fondateur Christian Lanz", x: ["De l’héroïne de l’opéra « Carmen »", "De la fille d’un héros de l’indépendance", "De la sainte patronne du domaine"] },
    ],
  },
  sh_lapostolle_alexandre: {
    fact: "La gamme phare de Lapostolle, domaine fondé au Chili en 1994 par Alexandra Marnier-Lapostolle, de la famille du Grand Marnier.",
    quiz: [
      { q: "Quel « flying winemaker » bordelais accompagne Lapostolle, producteur de Lapostolle Cuvée Alexandre Carménère, depuis sa création ?", a: "Michel Rolland", x: ["Émile Peynaud", "Denis Dubourdieu", "Stéphane Derenoncourt"] },
    ],
  },
  sh_cousinomacul_ar: {
    fact: "Domaine historique du Chili, dirigé de génération en génération par la famille fondatrice. Ses anciennes caves subsistent à Macul, en pleine ville de Santiago.",
    quiz: [
      { q: "En quelle année Cousiño-Macul, producteur de Cousiño-Macul Antiguas Reservas Cabernet Sauvignon, a-t-il été fondé ?", a: "1856", x: ["1756", "1926", "1976"] },
    ],
  },
  sh_santacarolina_reservado: {
    fact: "Cabernet sauvignon du quotidien d’un domaine chilien historique, fondé en 1875 par Luis Pereira.",
    quiz: [
      { q: "De qui vient le nom de Santa Carolina, producteur de Santa Carolina Reservado Cabernet Sauvignon ?", a: "De Carolina, épouse du fondateur Luis Pereira", x: ["De la reine Caroline d’Espagne", "De la fille aînée du fondateur", "De la mère d’un héros de l’indépendance"] },
    ],
  },
  sh_leyda_garuma: {
    fact: "Sauvignon blanc de la fraîche vallée de Leyda, proche du Pacifique. Le vent froid et les brumes venus de l’océan lui donnent une acidité vive.",
    quiz: [
      { q: "Quelle place Viña Leyda, producteur de Leyda Single Vineyard Garuma Sauvignon Blanc, occupe-t-il dans la vallée de Leyda ?", a: "Le pionnier qui y planta les premières vignes", x: ["Le premier domaine viticole du Chili", "Un domaine fondé par la couronne d’Espagne", "Le seul domaine d’État du Chili"] },
    ],
  },
  sh_emiliana_coyam: {
    fact: "L’assemblage phare d’Emiliana, pionnier du bio et de la biodynamie. « Coyam » signifie « chêne » en mapuche.",
    quiz: [
      { q: "Quelle méthode de culture est appliquée aux vignes de Coyam, d’Emiliana ?", a: "L’agriculture biologique et biodynamique", x: ["La culture hydroponique", "Des raisins génétiquement modifiés", "La culture sous serre"] },
    ],
  },
  sh_vik: {
    fact: "L’assemblage icône du domaine fondé par l’homme d’affaires norvégien Alexander Vik. La vallée de Millahue, où poussent ses vignes, signifie « lieu d’or » en mapuche.",
    quiz: [
      { q: "De quel pays est originaire Alexander Vik, fondateur du domaine qui produit Vik ?", a: "La Norvège", x: ["La Suède", "Le Danemark", "La Finlande"] },
    ],
  },
  sh_torres_santadigna: {
    fact: "Le vin emblématique du domaine chilien fondé à Curicó en 1979 par la famille espagnole Torres.",
    quiz: [
      { q: "De quel pays vient la famille Torres, productrice de Miguel Torres Santa Digna Cabernet Sauvignon ?", a: "L’Espagne", x: ["L’Italie", "La France", "Le Portugal"] },
    ],
  },
  sh_catena_adrianna: {
    fact: "Malbec issu d’une parcelle riche en galets d’un ancien lit de rivière, au sein du vignoble Adrianna, à Gualtallary, vers 1 500 m d’altitude.",
    quiz: [
      { q: "Qui est l’Adrianna d’Adrianna Vineyard River Stones Malbec, de Catena Zapata ?", a: "La fille cadette de Nicolás Catena", x: ["La première femme œnologue de la famille Catena", "La sainte patronne du village voisin", "Une chanteuse de tango argentine"] },
    ],
  },
  sh_catena_malbec: {
    fact: "Nicolás Catena a défriché des vignobles d’altitude, à plus de 1 000 m, et hissé le malbec argentin au rang des grands vins du monde.",
    quiz: [
      { q: "En quelle année Nicola Catena, premier de la lignée qui produit Catena Malbec, a-t-il planté sa première vigne de malbec à Mendoza ?", a: "1902", x: ["1802", "1952", "1982"] },
    ],
  },
  sh_catena_malbecargentino: {
    fact: "Malbec de Catena Zapata célèbre pour son étiquette où quatre femmes racontent l’histoire du malbec.",
    quiz: [
      { q: "Que symbolisent les quatre femmes de l’étiquette de Malbec Argentino, de Catena Zapata ?", a: "L’histoire du malbec, de la France à l’Argentine", x: ["Les quatre figures du tango", "Les quatre saisons argentines", "Les quatre saints patrons de Mendoza"] },
    ],
  },
  sh_nicolascatenazapata: {
    fact: "L’assemblage phare de Catena Zapata, premier millésime 1997, qui associe cabernet sauvignon et malbec.",
    quiz: [
      { q: "Que désigne « Zapata » dans Nicolás Catena Zapata ?", a: "Le nom de famille de la mère de Nicolás Catena", x: ["Le révolutionnaire mexicain Emiliano Zapata", "Le village où se trouve le vignoble", "Le village italien du grand-père"] },
    ],
  },
  sh_achavalferrer_altamira: {
    fact: "Malbec de parcelle unique d’un domaine fondé en 1998 par des amis argentins et italiens, issu des vieilles vignes du vignoble d’Altamira.",
    quiz: [
      { q: "D’où vient le nom Achával-Ferrer ?", a: "Des noms de famille de deux cofondateurs", x: ["De deux rivières qui traversent le vignoble", "Des prénoms des grands-parents du fondateur", "De deux villages du vignoble"] },
    ],
  },
  sh_chevaldesandes: {
    fact: "Vin né du partenariat entre un grand nom de Saint-Émilion et Terrazas de los Andes. Assemblant malbec et cabernet sauvignon, il se veut le « grand cru des Andes ».",
    quiz: [
      { q: "Quel grand château bordelais coproduit Cheval des Andes ?", a: "Château Cheval Blanc", x: ["Château Lafite Rothschild", "Château Margaux", "Château Haut-Brion"] },
    ],
  },
  sh_terrazas_reserva: {
    fact: "Domaine argentin de LVMH, issu du premier chai créé hors de France par Moët & Chandon, en 1959.",
    quiz: [
      { q: "Quelle idée exprime le nom de Terrazas de los Andes (« terrasses des Andes ») ?", a: "Planter chaque cépage à l’altitude qui lui convient", x: ["Cultiver la vigne inondée comme une rizière en terrasses", "Faire venir du raisin chilien par-delà les Andes", "Produire autant de bouteilles que de terrasses"] },
    ],
  },
  sh_colome_malbec: {
    fact: "L’un des plus anciens domaines d’Argentine, fondé en 1831, qui cultive des vignobles parmi les plus hauts du monde, à plus de 2 000 m d’altitude.",
    quiz: [
      { q: "Le musée de Bodega Colomé, producteur de Colomé Estate Malbec, est entièrement consacré à quel artiste ?", a: "James Turrell", x: ["Andy Warhol", "Yayoi Kusama", "Damien Hirst"] },
    ],
  },
  sh_trapiche_oakcask: {
    fact: "Grand domaine argentin fondé en 1883, dont la marque est exportée dans de nombreux pays.",
    quiz: [
      { q: "Que désigne à l’origine le mot espagnol « trapiche » de Trapiche Oak Cask Malbec ?", a: "Un pressoir à fruits ou à canne à sucre", x: ["Un panier de vendange", "Un vent froid des Andes", "Une grotte pour stocker le vin"] },
    ],
  },
  sh_norton_reserva: {
    fact: "Domaine fondé en 1895 par Edmund Norton, ingénieur anglais venu construire le chemin de fer. Il appartient depuis 1989 à une famille autrichienne.",
    quiz: [
      { q: "Quelle est l’activité de la famille autrichienne qui a racheté en 1989 Norton, producteur de Norton Reserva Malbec ?", a: "Le cristal (Swarovski)", x: ["Le chocolat", "Les boissons énergisantes", "Les pianos"] },
    ],
  },
  sh_luigibosca_malbec: {
    fact: "Domaine familial fondé en 1901 par l’immigrant espagnol Leoncio Arizu, toujours dirigé par la famille Arizu.",
    quiz: [
      { q: "Quelle famille dirige Luigi Bosca de génération en génération ?", a: "La famille Arizu", x: ["La famille Catena", "La famille Zuccardi", "La famille Chadwick"] },
    ],
  },
  sh_zuccardi_concreto: {
    fact: "Malbec fermenté et élevé uniquement en cuves de béton, sans fût, pour exprimer tel quel le terroir de Paraje Altamira.",
    quiz: [
      { q: "Quelle distinction la bodega de Zuccardi dans la vallée de l’Uco, qui produit Zuccardi Concreto Malbec, a-t-elle reçue trois années de suite à partir de 2019 ?", a: "1re place des World’s Best Vineyards", x: ["Trois étoiles au Guide Michelin", "Inscription au patrimoine mondial de l’Unesco", "Vin de l’année de Wine Spectator"] },
    ],
  },
  sh_alamos_malbec: {
    fact: "Malbec du quotidien de la famille Catena. Son nom vient des peupliers plantés en brise-vent en bordure des vignes de Mendoza.",
    quiz: [
      { q: "Que signifie « Alamos » dans Alamos Malbec ?", a: "Les peupliers plantés en brise-vent", x: ["L’eau de fonte des neiges des Andes", "Une fête indigène des récoltes", "Le village natal du fondateur"] },
    ],
  },
  sh_closdelossiete: {
    fact: "Issu d’un vignoble créé à Vista Flores, dans la vallée de l’Uco, par le consultant bordelais Michel Rolland et des investisseurs français.",
    quiz: [
      { q: "Que désigne le « Siete » (sept) de Clos de los Siete ?", a: "Les sept investisseurs (domaines) fondateurs", x: ["Les sept sommets autour du vignoble", "Sept cépages", "Sept ans d’élevage"] },
    ],
  },
  sh_elenemigo_malbec: {
    fact: "Marque fondée par Alejandro Vigil, chef de cave de Catena Zapata, et l’historienne Adrianna Catena.",
    quiz: [
      { q: "Que signifie « El Enemigo » en espagnol ?", a: "L’ennemi", x: ["L’ami", "Le voyageur", "Le frère"] },
    ],
  },
  sh_rutini_cabmalbec: {
    fact: "Assemblage cabernet-malbec d’une maison traditionnelle de Mendoza fondée en 1885 par l’immigrant italien Felipe Rutini.",
    quiz: [
      { q: "De quel pays venait Felipe Rutini, fondateur de la maison qui produit Rutini Cabernet-Malbec ?", a: "L’Italie", x: ["L’Espagne", "La France", "L’Allemagne"] },
    ],
  },
  sh_salentein_reserve: {
    fact: "Domaine pionnier des hauteurs de la vallée de l’Uco, à plus de 1 000 m d’altitude. Il abrite un musée d’art, « Killka ».",
    quiz: [
      { q: "De quel pays est originaire Mijndert Pon, fondateur de Bodegas Salentein, producteur de Salentein Reserve Malbec ?", a: "Les Pays-Bas", x: ["La Belgique", "Le Danemark", "La Suisse"] },
    ],
  },
  sh_kaiken_ultra: {
    fact: "Malbec du domaine fondé en 2002 à Mendoza, de l’autre côté des Andes, par Aurelio Montes, du domaine chilien Montes.",
    quiz: [
      { q: "D’où vient le nom « Kaiken » de Kaiken Ultra Malbec ?", a: "D’une oie sauvage de Patagonie qui franchit les Andes", x: ["Du dieu soleil des peuples andins", "D’un vent chaud de Mendoza", "Du cheval du fondateur"] },
    ],
  },
  sh_trivento_reserve: {
    fact: "Malbec du domaine fondé en 1996 à Mendoza, en Argentine, par le chilien Concha y Toro.",
    quiz: [
      { q: "Que signifie « Trivento » dans Trivento Reserve Malbec ?", a: "Les trois vents qui soufflent sur les vignes de Mendoza", x: ["Trois frères fondateurs", "Trois rivières", "Trois vendanges par an"] },
    ],
  },
  sh_garzon_tannat: {
    fact: "Venu du Sud-Ouest de la France, le tannat est devenu le cépage emblème de l’Uruguay. Garzón a planté ses vignes sur des collines proches de l’Atlantique.",
    quiz: [
      { q: "Quelle célèbre station balnéaire uruguayenne se trouve près des vignes de Bodega Garzón Tannat ?", a: "Punta del Este", x: ["Copacabana", "Mar del Plata", "Viña del Mar"] },
    ],
  },
  sh_miolo_lote43: {
    fact: "Le vin phare du Vale dos Vinhedos, première indication géographique du Brésil. Son nom vient du numéro de la première parcelle achetée par le fondateur.",
    quiz: [
      { q: "Quelles sont les origines de la famille Miolo, productrice de Miolo Lote 43 ?", a: "Des immigrants italiens arrivés au Brésil à la fin du XIXe siècle", x: ["La noblesse de la cour portugaise", "Des missionnaires luthériens allemands", "Des immigrants japonais"] },
    ],
  },
  sh_lacetto_nebbiolo: {
    fact: "Domaine phare de la vallée de Guadalupe, cœur du vin mexicain, réputé notamment pour son nebbiolo, cépage italien.",
    quiz: [
      { q: "D’où venait Angelo Cetto, fondateur de L.A. Cetto, producteur de L.A. Cetto Nebbiolo ?", a: "D’Italie", x: ["D’Espagne", "De France", "D’Allemagne"] },
    ],
  },
  sh_casamadero_3v: {
    fact: "Rouge assemblant trois cépages, élaboré par le plus ancien domaine du continent américain.",
    quiz: [
      { q: "En quelle année Casa Madero, le plus ancien domaine des Amériques et producteur de Casa Madero 3V, a-t-il été fondé ?", a: "1597", x: ["1697", "1797", "1897"] },
    ],
  },
  sh_kanonkop_paulsauer: {
    fact: "L’assemblage bordelais emblématique de l’Afrique du Sud. Il tient son nom de Paul Sauer, homme politique qui possédait la ferme de Kanonkop.",
    quiz: [
      { q: "D’où vient le nom « Kanonkop » du domaine qui produit Paul Sauer ?", a: "D’une colline d’où l’on tirait au canon à l’arrivée des navires", x: ["D’une fabrique de canons de la guerre des Boers", "De raisins ronds comme des boulets", "Du surnom militaire du premier propriétaire"] },
    ],
  },
  sh_kanonkop_pinotage: {
    fact: "Le vin phare de Kanonkop, maître du pinotage, cépage né en Afrique du Sud. Il fermente en cuves ouvertes où l’on enfonce le chapeau de marc à la main.",
    quiz: [
      { q: "Avec quel cépage, alors appelé « hermitage » en Afrique du Sud, le pinot noir a-t-il été croisé en 1925 pour créer le pinotage de Kanonkop Pinotage ?", a: "Le cinsault", x: ["La syrah", "Le merlot", "Le gamay"] },
    ],
  },
  sh_meerlust_rubicon: {
    fact: "Assemblage bordelais de Meerlust, domaine de la famille Myburgh depuis 1757, premier millésime 1980.",
    quiz: [
      { q: "Quel sens porte le nom Rubicon, de Meerlust ?", a: "Une décision irréversible (César franchissant le Rubicon)", x: ["Une robe rouge rubis", "Le nom de la rivière voisine", "Le surnom de la fille du fondateur"] },
    ],
  },
  sh_kleinconstantia_vdc: {
    fact: "Ressuscité en 1986, ce liquoreux légendaire de Constantia était convoité par toutes les cours d’Europe aux XVIIIe et XIXe siècles. Il est logé dans une bouteille de 500 ml copiée d’un modèle ancien.",
    quiz: [
      { q: "Quel personnage buvait volontiers le vin de Constantia, ancêtre du Vin de Constance, même en exil à Sainte-Hélène ?", a: "Napoléon", x: ["Louis XVI", "L’amiral Nelson", "Bismarck"] },
      { q: "Quelle romancière évoque le vin de Constantia, ancêtre du Vin de Constance, dans « Raison et Sentiments » ?", a: "Jane Austen", x: ["Charlotte Brontë", "George Eliot", "Virginia Woolf"] },
    ],
  },
  sh_sadie_columella: {
    fact: "Assemblage à dominante syrah qu’Eben Sadie élabore avec des raisins de tout le Swartland. Premier millésime 2000, il est devenu le symbole du renouveau du vin sud-africain.",
    quiz: [
      { q: "De qui vient le nom de Columella, de Sadie Family ?", a: "D’un auteur romain qui écrivit sur l’agriculture", x: ["D’un capitaine hollandais qui découvrit le Swartland", "Du grand-père du fondateur", "D’un dieu grec du vin"] },
    ],
  },
  sh_boekenhoutskloof_cs: {
    fact: "Domaine de Franschhoek dont le nom signifie en afrikaans « la vallée du hêtre du Cap » (boekenhout).",
    quiz: [
      { q: "Quels objets, au nombre de sept, sont alignés sur l’étiquette de Boekenhoutskloof Franschhoek Cabernet Sauvignon ?", a: "Des chaises", x: ["Des grappes", "Des fûts", "Des verres à vin"] },
    ],
  },
  sh_rustenberg_jxm: {
    fact: "Assemblage bordelais de Rustenberg, domaine cultivé par la famille Barlow depuis 1941, issu des contreforts du Simonsberg.",
    quiz: [
      { q: "Qui était John X. Merriman, qui a donné son nom à John X Merriman de Rustenberg ?", a: "Le dernier Premier ministre de la colonie du Cap, propriétaire du domaine", x: ["Le premier professeur d’œnologie d’Afrique du Sud", "Un capitaine de la Compagnie britannique des Indes orientales", "Un capitaine de l’équipe nationale de rugby"] },
    ],
  },
  sh_vergelegen_v: {
    fact: "Le rouge phare d’un domaine fondé en 1700 par le gouverneur du Cap Willem Adriaan van der Stel.",
    quiz: [
      { q: "Que signifie en néerlandais « Vergelegen », dans Vergelegen V ?", a: "Situé au loin", x: ["Vallée verte", "Colline du vent", "Ferme du roi"] },
    ],
  },
  sh_hamiltonrussell_pn: {
    fact: "L’un des domaines les plus méridionaux d’Afrique, fondé en 1975 par Tim Hamilton Russell dans une vallée fraîche proche de la mer. Il ne produit que du pinot noir et du chardonnay.",
    quiz: [
      { q: "Que signifie « Hemel-en-Aarde », où se trouve le vignoble de Hamilton Russell Vineyards Pinot Noir ?", a: "Ciel et terre", x: ["Mer et montagne", "Soleil et lune", "Vent et pluie"] },
    ],
  },
  sh_mullineux_straw: {
    fact: "Vin doux élaboré par Chris et Andrea Mullineux à partir de chenin blanc du Swartland.",
    quiz: [
      { q: "Que fait-on aux raisins avant d’élaborer Mullineux Straw Wine ?", a: "On les sèche sur de la paille pour concentrer le sucre", x: ["On les laisse geler sur la vigne", "On les fait mariner dans l’eau de mer", "On les enterre pour passer l’hiver"] },
    ],
  },
  sh_grahambeck_brut: {
    fact: "Figure de proue du Cap Classique, le vin effervescent sud-africain élaboré comme le champagne par seconde fermentation en bouteille.",
    quiz: [
      { q: "Lors de quel événement historique Graham Beck Brut a-t-il servi au toast en 1994 ?", a: "L’investiture du président Nelson Mandela", x: ["Le mariage d’un prince britannique", "La clôture des Jeux olympiques de Sydney", "L’intronisation d’un pape"] },
    ],
  },
  sh_kwv_cathedral: {
    fact: "Poids lourd du vin sud-africain, né en 1918 comme coopérative de viticulteurs. « Cathedral Cellar » tient son nom d’un ancien chai de vieillissement voûté comme une cathédrale.",
    quiz: [
      { q: "Que désigne le sigle « KWV » de KWV Cathedral Cellar Cabernet Sauvignon ?", a: "La coopérative des viticulteurs sud-africains", x: ["Une société d’export de vins du Cap", "Une association royale du vin", "La banque du vin de Kimberley"] },
    ],
  },
  sh_nederburg_winemasters: {
    fact: "Domaine historique de Paarl fondé en 1791 : un grand producteur qui a longtemps mené l’industrie du vin sud-africain.",
    quiz: [
      { q: "Quel grand événement viticole sud-africain Nederburg, producteur de Nederburg The Winemasters, a-t-il lancé en 1975 ?", a: "La vente aux enchères de Nederburg", x: ["Le marathon du vin du Cap", "Une fête du foulage du raisin", "Un voyage en train du vin"] },
    ],
  },
  sh_chocolateblock: {
    fact: "Assemblage à base de syrah, complété de grenache, cinsault, cabernet sauvignon et viognier. Dense et soyeux, c’est l’un des vins les plus populaires d’Afrique du Sud.",
    quiz: [
      { q: "Quelle marque de vin du quotidien le domaine qui produit The Chocolate Block propose-t-il aussi ?", a: "Porcupine Ridge", x: ["[yellow tail]", "19 Crimes", "Barefoot"] },
    ],
  },
  sh_warwick_trilogy: {
    fact: "Assemblage bordelais de Warwick Estate, qu’a fait connaître Norma Ratcliffe, l’une des premières femmes vinificatrices d’Afrique du Sud.",
    quiz: [
      { q: "Qu’est-ce que la « Wedding Cup », emblème de Warwick Estate, producteur de Trilogy ?", a: "Une coupe double où deux personnes boivent en même temps sans renverser", x: ["Un verre que les mariés brisent ensemble", "Une coupe taillée dans une vigne centenaire", "Un calice d’église copié du Graal"] },
    ],
  },
  sh_inniskillin_riesling: {
    fact: "Élaboré avec du riesling vendangé gelé en pleine nuit d’hiver : une douceur intense, portée par l’acidité propre au riesling.",
    quiz: [
      { q: "Qui sont les deux cofondateurs d’Inniskillin, producteur d’Inniskillin Riesling Icewine ?", a: "Donald Ziraldo et Karl Kaiser", x: ["Andrew Peller et Gary Pillitteri", "Allan Jackson et Don Triggs", "Robert Mondavi et Philippe de Rothschild"] },
    ],
  },
  sh_peller_vidal_icewine: {
    fact: "Vin de glace du domaine de Niagara d’une grande entreprise vinicole canadienne fondée par Andrew Peller.",
    quiz: [
      { q: "De quel pays est originaire Andrew Peller, fondateur de l’entreprise qui produit Peller Estates Vidal Icewine ?", a: "La Hongrie", x: ["L’Allemagne", "L’Italie", "La Pologne"] },
    ],
  },
  sh_pillitteri_cf_icewine: {
    fact: "Vin de glace à la robe rouge, issu du cabernet franc. Pillitteri est un domaine familial de Niagara qui mise particulièrement sur le vin de glace.",
    quiz: [
      { q: "D’où est originaire Gary Pillitteri, fondateur du domaine qui produit Pillitteri Cabernet Franc Icewine ?", a: "De Sicile, en Italie", x: ["De Crète, en Grèce", "De Madère, au Portugal", "D’Andalousie, en Espagne"] },
    ],
  },
  sh_missionhill_oculus: {
    fact: "L’assemblage bordelais phare de Mission Hill, domaine au haut clocher dressé au bord du lac Okanagan.",
    quiz: [
      { q: "Quelle boisson célèbre a été créée par l’entreprise d’Anthony von Mandl, propriétaire de Mission Hill, producteur d’Oculus ?", a: "White Claw (hard seltzer)", x: ["Red Bull", "Corona Extra", "Smirnoff Ice"] },
    ],
  },
  sh_jacksontriggs_icewine: {
    fact: "Vin de glace de vidal d’un grand domaine situé à Niagara-on-the-Lake.",
    quiz: [
      { q: "D’où vient le nom de Jackson-Triggs Vidal Icewine ?", a: "Des noms des cofondateurs Allan Jackson et Don Triggs", x: ["De deux rivières du Niagara", "Des noms de jeune fille du couple fondateur", "Des noms des deux propriétaires du premier vignoble"] },
    ],
  },
  sh_mercian_koshu: {
    fact: "Grande marque du vin japonais, exploitée par le groupe Kirin. Elle élabore avec le koshu, cépage indigène du Japon, un blanc fin et net.",
    quiz: [
      { q: "Dans quel pays la société à l’origine de Mercian, producteur de Château Mercian Koshu, envoya-t-elle deux jeunes gens apprendre la vinification en 1877 ?", a: "La France", x: ["L’Allemagne", "L’Italie", "Les États-Unis"] },
    ],
  },
  sh_grace_koshu: {
    fact: "Koshu de Grace Wine, maison ouverte en 1923 à Katsunuma, figure de proue du vin japonais sur la scène mondiale.",
    quiz: [
      { q: "Quelle famille dirige de génération en génération Grace Wine, producteur de Grace Koshu ?", a: "La famille Misawa", x: ["La famille Suzuki", "La famille Sato", "La famille Toyota"] },
    ],
  },
  sh_suntory_tominooka: {
    fact: "Koshu du domaine Tomi no Oka, que Suntory cultive lui-même sur une colline de Yamanashi.",
    quiz: [
      { q: "Quelle montagne aperçoit-on par temps clair depuis la colline du domaine Tomi no Oka de Suntory ?", a: "Le mont Fuji", x: ["Le mont Aso", "Le mont Tate", "Le mont Haku"] },
    ],
  },
  sh_aoyun: {
    fact: "Assemblage à dominante cabernet sauvignon élaboré par LVMH avec des raisins de villages du Yunnan, au pied de l’Himalaya, à plus de 2 000 m d’altitude. Premier millésime 2013.",
    quiz: [
      { q: "Que signifie le nom Ao Yun (敖云) ?", a: "Voler au-dessus des nuages", x: ["Dragon rouge", "Source céleste", "Montagne enneigée"] },
      { q: "Quelle montagne sacrée du bouddhisme tibétain se dresse près des vignes d’Ao Yun ?", a: "Le Meili Xueshan", x: ["L’Everest", "L’Annapurna", "Le mont Kailash"] },
    ],
  },
  sh_changyu_moser: {
    fact: "Château créé au pied des monts Helan, dans le Ningxia, par Changyu, premier domaine moderne de Chine fondé en 1892. Il est élaboré avec l’œnologue autrichien Lenz Moser.",
    quiz: [
      { q: "Que signifie le « XV » de Château Changyu Moser XV ?", a: "Lenz Moser, 15e génération de la famille autrichienne", x: ["15 ans d’élevage", "Le 15e millésime", "Un assemblage de 15 vignobles"] },
      { q: "Qui a fondé en 1892 Changyu, producteur de Château Changyu Moser XV ?", a: "Zhang Bishi, grand marchand chinois d’outre-mer", x: ["L’empereur Guangxu", "Un missionnaire français", "Un marchand japonais"] },
    ],
  },
};

export default T;
