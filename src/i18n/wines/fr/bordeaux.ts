import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  bx_rauzansegla: {
    fact: "Deuxième cru classé de Margaux fondé en 1661. En 1994, il a été racheté par la famille Wertheimer, propriétaire de Chanel.",
    quiz: [
      { q: "Quelle maison de mode a racheté le Château Rauzan-Ségla en 1994 ?", a: "Chanel", x: ["Hermès", "Dior", "Gucci"] },
    ],
  },
  bx_rauzangassies: {
    fact: "Deuxième cru classé de Margaux né du partage de l’ancien domaine de Rauzan, qui l’a séparé de Rauzan-Ségla. La famille Quié le dirige avec Croizet-Bages, à Pauillac.",
    quiz: [
      { q: "Avec quel château de Margaux le Château Rauzan-Gassies formait-il à l’origine un seul domaine ?", a: "Château Rauzan-Ségla", x: ["Château Brane-Cantenac", "Château Lascombes", "Château Durfort-Vivens"] },
      { q: "Quel cinquième cru classé de Pauillac est dirigé par la famille Quié, comme le Château Rauzan-Gassies ?", a: "Château Croizet-Bages", x: ["Château Lynch-Moussas", "Château Pédesclaux", "Château Batailley"] },
    ],
  },
  bx_leovillelascases: {
    fact: "Né de la division en trois du domaine de Léoville, l’un des plus vastes du Médoc. Le portail de pierre surmonté d’un lion, sur l’étiquette, marque l’entrée du vignoble du « Grand Clos ».",
    quiz: [
      { q: "Quelle sculpture surmonte le portail de pierre représenté sur l’étiquette du Château Léoville Las Cases ?", a: "Un lion", x: ["Un aigle", "Un cheval", "Une cloche"] },
      { q: "Quelle famille dirige le Château Léoville Las Cases ?", a: "La famille Delon", x: ["La famille Barton", "La famille Cuvelier", "La famille Borie"] },
    ],
  },
  bx_leovillepoyferre: {
    fact: "L’un des trois châteaux nés du partage du domaine de Léoville. La famille Cuvelier en est propriétaire depuis 1920.",
    quiz: [
      { q: "Quelle famille possède le Château Léoville Poyferré depuis 1920 ?", a: "La famille Cuvelier", x: ["La famille Delon", "La famille Barton", "La famille Cazes"] },
    ],
  },
  bx_leovillebarton: {
    fact: "La famille Barton, d’origine irlandaise, l’a acquis en 1826 et le possède toujours. Faute de bâtiment propre, il est vinifié au château voisin, Langoa Barton.",
    quiz: [
      { q: "De quel pays la famille Barton, propriétaire du Château Léoville Barton, est-elle originaire ?", a: "Irlande", x: ["Écosse", "Pays-Bas", "Allemagne"] },
      { q: "Quel troisième cru classé de la même famille est vinifié avec le Château Léoville Barton ?", a: "Château Langoa Barton", x: ["Château Lagrange", "Château Talbot", "Château Saint-Pierre"] },
    ],
  },
  bx_durfortvivens: {
    fact: "Deuxième cru classé de Margaux dont le nom vient de la famille seigneuriale médiévale de Durfort de Duras. Sous la direction de Gonzague Lurton, il est passé à la biodynamie.",
    quiz: [
      { q: "Quel est le rang du Château Durfort-Vivens dans le classement de 1855 du Médoc ?", a: "Deuxième cru classé", x: ["Troisième cru classé", "Quatrième cru classé", "Cinquième cru classé"] },
    ],
  },
  bx_gruaudlarose: {
    fact: "Deuxième cru classé de Saint-Julien dont l’étiquette porte la devise « le vin des rois, le roi des vins ». Il appartient depuis 1997 au groupe bordelais Taillan.",
    quiz: [
      { q: "Quelle devise figure sur l’étiquette du Château Gruaud Larose ?", a: "Le vin des rois, le roi des vins", x: ["La goutte tombée des dieux", "La reine du Médoc", "Le vin né de la patience"] },
    ],
  },
  bx_lascombes: {
    fact: "Deuxième cru classé de Margaux dont la réputation a été relancée dans les années 1950 par Alexis Lichine, auteur américain d’origine russe qui l’avait racheté.",
    quiz: [
      { q: "Quel auteur spécialisé dans le vin a racheté et relancé le Château Lascombes dans les années 1950 ?", a: "Alexis Lichine", x: ["Robert Parker", "Émile Peynaud", "Hugh Johnson"] },
    ],
  },
  bx_branecantenac: {
    fact: "Domaine façonné par le baron de Brane, surnommé le « Napoléon des vignes », après qu’il eut vendu l’actuel Mouton Rothschild. Il est aujourd’hui dirigé par Henri Lurton.",
    quiz: [
      { q: "Quel domaine de Pauillac le baron de Brane avait-il vendu avant de se consacrer au Château Brane-Cantenac ?", a: "L’actuel Château Mouton Rothschild", x: ["L’actuel Château Lafite Rothschild", "L’actuel Château Latour", "L’actuel Château Pichon Baron"] },
      { q: "Quel était le surnom du baron de Brane, qui a laissé son nom au Château Brane-Cantenac ?", a: "Le Napoléon des vignes", x: ["Le maharadjah de Saint-Estèphe", "Le pape du Médoc", "Le roi des vins"] },
    ],
  },
  bx_pichonbaron: {
    fact: "Deuxième cru classé de Pauillac célèbre pour son château de conte de fées hérissé de tourelles. Il appartient depuis 1987 à AXA Millésimes, filiale de l’assureur AXA.",
    quiz: [
      { q: "Qui a racheté le Château Pichon Baron en 1987 ?", a: "AXA Millésimes", x: ["LVMH", "Chanel", "Louis Roederer"] },
      { q: "Quel château formait à l’origine un seul domaine avec le Château Pichon Baron ?", a: "Château Pichon Longueville Comtesse de Lalande", x: ["Château Latour", "Château Lynch-Bages", "Château Pontet-Canet"] },
    ],
  },
  bx_pichoncomtesse: {
    fact: "Son nom vient de Virginie, fille héritière d’une part du domaine Pichon, qui épousa le comte de Lalande. En 2007, la maison de champagne Louis Roederer l’a racheté.",
    quiz: [
      { q: "Quelle maison de champagne a racheté le Château Pichon Longueville Comtesse de Lalande en 2007 ?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  bx_ducrubeaucaillou: {
    fact: "« Beaucaillou » signifie « beaux cailloux » et désigne la croupe de graves au bord de la Gironde. La famille Borie en est propriétaire depuis 1941.",
    quiz: [
      { q: "Que signifie « Beaucaillou » dans le nom du Château Ducru-Beaucaillou ?", a: "Beaux cailloux", x: ["Belle colline", "Vieille tour", "Petit bois"] },
      { q: "Quelle famille possède le Château Ducru-Beaucaillou depuis 1941 ?", a: "La famille Borie", x: ["La famille Delon", "La famille Barton", "La famille Cuvelier"] },
    ],
  },
  bx_cosdestournel: {
    fact: "Louis-Gaspard d’Estournel, le « maharadjah de Saint-Estèphe », passionné par le commerce avec l’Inde, fit coiffer son chai de pagodes orientales. Michel Reybier en est propriétaire depuis 2000.",
    quiz: [
      { q: "Quelle est la particularité du chai du Château Cos d’Estournel ?", a: "Des pagodes de style indien", x: ["Une tour de château médiéval", "Des colonnes de temple grec", "Une maison en brique de style Tudor"] },
      { q: "Quel était le surnom de Louis-Gaspard d’Estournel, fondateur du Château Cos d’Estournel ?", a: "Le maharadjah de Saint-Estèphe", x: ["Le Napoléon des vignes", "Le pape du Médoc", "Le roi des vins"] },
    ],
  },
  bx_montrose: {
    fact: "Son nom vient d’une colline couverte de bruyère rose (« mont rose »). En 2006, les frères Bouygues, entrepreneurs français, l’ont racheté.",
    quiz: [
      { q: "D’où vient le nom du Château Montrose ?", a: "D’une colline couverte de bruyère rose", x: ["D’une roseraie", "D’une montagne de roche rouge", "Du prénom de la fille du fondateur"] },
      { q: "Qui a racheté le Château Montrose en 2006 ?", a: "Les frères Bouygues", x: ["Les frères Wertheimer", "La famille Delon", "La famille Cazes"] },
    ],
  },
  bx_kirwan: {
    fact: "Il porte le nom de Mark Kirwan, originaire d’Irlande, qui mit le domaine en valeur au XVIIIe siècle. La famille Schÿler, négociants bordelais, le possède depuis 1925.",
    quiz: [
      { q: "Quel est le rang du Château Kirwan dans le classement de 1855 du Médoc ?", a: "Troisième cru classé", x: ["Deuxième cru classé", "Quatrième cru classé", "Cinquième cru classé"] },
    ],
  },
  bx_dissan: {
    fact: "Château du XVIIe siècle entouré de douves. Son étiquette porte une devise latine qui signifie « pour la table des rois et l’autel des dieux ».",
    quiz: [
      { q: "Que signifie la devise latine de l’étiquette du Château d’Issan ?", a: "Pour la table des rois et l’autel des dieux", x: ["Dieu demeure dans la vigne", "La patience fait le vin", "Seulement le meilleur"] },
    ],
  },
  bx_lagrange: {
    fact: "Troisième cru classé de Saint-Julien racheté en 1983 par le groupe japonais Suntory, qui a entièrement restructuré le vignoble et le chai.",
    quiz: [
      { q: "Quelle entreprise japonaise a racheté le Château Lagrange en 1983 ?", a: "Suntory", x: ["Kirin", "Asahi", "Sapporo"] },
    ],
  },
  bx_langoabarton: {
    fact: "Château du XVIIIe siècle acquis en 1821 par Hugh Barton. Le Léoville Barton est également vinifié dans son chai.",
    quiz: [
      { q: "Quel deuxième cru classé est vinifié dans le chai du Château Langoa Barton ?", a: "Château Léoville Barton", x: ["Château Léoville Poyferré", "Château Gruaud Larose", "Château Ducru-Beaucaillou"] },
    ],
  },
  bx_giscours: {
    fact: "Vaste domaine qui atteint plusieurs centaines d’hectares en comptant bois et prairies. Depuis 1995, il est dirigé par la famille de l’homme d’affaires néerlandais Eric Albada Jelgersma.",
    quiz: [
      { q: "De quel pays est originaire la famille Albada Jelgersma, à la tête du Château Giscours depuis 1995 ?", a: "Pays-Bas", x: ["Belgique", "Suisse", "Royaume-Uni"] },
      { q: "Quel château de Margaux est dirigé par la même famille que le Château Giscours ?", a: "Château du Tertre", x: ["Château Dauzac", "Château Pouget", "Château Ferrière"] },
    ],
  },
  bx_malescot: {
    fact: "Son nom associe Simon Malescot, conseiller du roi au XVIIe siècle, et le comte de Saint-Exupéry, propriétaire au XIXe siècle. La famille Zuger le dirige depuis 1955.",
    quiz: [
      { q: "Quelle est l’œuvre phare de l’écrivain issu de la même famille que le comte de Saint-Exupéry du Château Malescot St. Exupéry ?", a: "Le Petit Prince", x: ["L’Étranger", "Les Misérables", "Les Trois Mousquetaires"] },
    ],
  },
  bx_boydcantenac: {
    fact: "Son nom vient de Jacques Boyd, propriétaire de ces terres au XVIIIe siècle. La famille Guillemet le dirige avec le Château Pouget, quatrième cru classé.",
    quiz: [
      { q: "Quel quatrième cru classé est dirigé par la même famille que le Château Boyd-Cantenac ?", a: "Château Pouget", x: ["Château Talbot", "Château Saint-Pierre", "Château Lafon-Rochet"] },
    ],
  },
  bx_cantenacbrown: {
    fact: "Château de style Tudor anglais, rare dans le Médoc, construit par John Lewis Brown, négociant en vins d’origine écossaise.",
    quiz: [
      { q: "Quel est le style architectural du Château Cantenac Brown ?", a: "Tudor anglais", x: ["Néoclassique", "Pagode indienne", "Renaissance italienne"] },
    ],
  },
  bx_palmer: {
    fact: "Il doit son nom à Charles Palmer, général britannique des guerres napoléoniennes, qui l’acheta en 1814. Troisième cru classé, il se vend plus cher que bien des deuxièmes crus.",
    quiz: [
      { q: "Quelle était la nationalité de Charles Palmer, qui a donné son nom au Château Palmer ?", a: "Britannique", x: ["Irlandaise", "Néerlandaise", "Américaine"] },
      { q: "Quelle est la combinaison de couleurs emblématique de l’étiquette du Château Palmer ?", a: "Or sur fond noir", x: ["Rouge sur fond blanc", "Argent sur fond bleu", "Or sur fond vert"] },
    ],
  },
  bx_lalagune: {
    fact: "Le premier des grands crus classés que l’on rencontre en remontant de Bordeaux vers le Médoc. Depuis 2000, il appartient à la famille Frey, également propriétaire de Paul Jaboulet Aîné dans le Rhône.",
    quiz: [
      { q: "Quelle maison du Rhône appartient à la famille Frey, propriétaire du Château La Lagune ?", a: "Paul Jaboulet Aîné", x: ["Guigal", "Chapoutier", "Château de Beaucastel"] },
    ],
  },
  bx_desmirail: {
    fact: "Troisième cru classé de Margaux dirigé par la famille Lurton, grande dynastie du vin bordelais. Son vignoble, un temps dispersé au point qu’il ne restait que le nom, a été reconstitué.",
    quiz: [
      { q: "Quel est le rang du Château Desmirail dans le classement de 1855 du Médoc ?", a: "Troisième cru classé", x: ["Deuxième cru classé", "Quatrième cru classé", "Cinquième cru classé"] },
    ],
  },
  bx_calonsegur: {
    fact: "Le marquis de Ségur, propriétaire de Lafite et de Latour, aurait déclaré que son « cœur est à Calon » : d’où le cœur dessiné sur l’étiquette.",
    quiz: [
      { q: "Quel symbole figure sur l’étiquette du Château Calon Ségur ?", a: "Un cœur", x: ["Un lion", "Une cloche", "Une couronne"] },
      { q: "Quels premiers crus classés possédait aussi le marquis de Ségur, héros de l’anecdote du cœur de Calon Ségur ?", a: "Lafite et Latour", x: ["Margaux et Haut-Brion", "Mouton et Haut-Brion", "Margaux et Mouton"] },
    ],
  },
  bx_ferriere: {
    fact: "Troisième cru classé de Margaux, l’un des plus petits crus classés en 1855. Dirigé par Claire Villars-Lurton, il est cultivé en biodynamie.",
    quiz: [
      { q: "Quel est le rang du Château Ferrière dans le classement de 1855 du Médoc ?", a: "Troisième cru classé", x: ["Deuxième cru classé", "Quatrième cru classé", "Cinquième cru classé"] },
    ],
  },
  bx_marquisdalesme: {
    fact: "Il s’appelait à l’origine « Marquis d’Alesme Becker ». Après son rachat en 2006 par la famille Perrodo, il a abandonné le mot « Becker » et a été entièrement rénové.",
    quiz: [
      { q: "Quel était l’ancien nom du Château Marquis d’Alesme ?", a: "Marquis d’Alesme Becker", x: ["Marquis de Terme", "Malescot St. Exupéry", "Rauzan-Gassies"] },
    ],
  },
  bx_saintpierre: {
    fact: "Quatrième cru classé acquis en 1982 par Henri Martin, ancien maire de Saint-Julien. Il est dirigé par la même famille que le Château Gloria.",
    quiz: [
      { q: "Quel vin de Saint-Julien est produit par la même famille que le Château Saint-Pierre ?", a: "Château Gloria", x: ["Château Talbot", "Château Beychevelle", "Château Lagrange"] },
    ],
  },
  bx_talbot: {
    fact: "Son nom viendrait de John Talbot, général anglais tué à la bataille de Castillon à la fin de la guerre de Cent Ans. Son vin blanc, « Caillou Blanc », est également réputé.",
    quiz: [
      { q: "Dans quelle guerre combattit John Talbot, le général anglais qui aurait donné son nom au Château Talbot ?", a: "La guerre de Cent Ans", x: ["La guerre de Trente Ans", "La guerre des Deux-Roses", "Les guerres napoléoniennes"] },
      { q: "Comment s’appelle le vin blanc du Château Talbot ?", a: "Caillou Blanc", x: ["Pavillon Blanc", "Aile d’Argent", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_branaireducru: {
    fact: "Quatrième cru classé de Saint-Julien qui fait face au Château Beychevelle, de l’autre côté de la route. La famille Maroteaux le dirige depuis 1988.",
    quiz: [
      { q: "Quel est le rang du Château Branaire-Ducru dans le classement de 1855 du Médoc ?", a: "Quatrième cru classé", x: ["Deuxième cru classé", "Troisième cru classé", "Cinquième cru classé"] },
    ],
  },
  bx_duhartmilon: {
    fact: "Quatrième cru classé de Pauillac voisin de Lafite Rothschild, racheté et relancé en 1962 par la famille Rothschild de Lafite.",
    quiz: [
      { q: "Qui a racheté le Château Duhart-Milon en 1962 ?", a: "La famille Rothschild de Lafite", x: ["La famille Rothschild de Mouton", "AXA Millésimes", "La famille Cazes"] },
    ],
  },
  bx_pouget: {
    fact: "Petit quatrième cru classé de Margaux, dirigé par la famille Guillemet avec le Château Boyd-Cantenac, troisième cru classé.",
    quiz: [
      { q: "Quel troisième cru classé est dirigé par la même famille que le Château Pouget ?", a: "Château Boyd-Cantenac", x: ["Château Cantenac Brown", "Château Kirwan", "Château d’Issan"] },
    ],
  },
  bx_latourcarnet: {
    fact: "Château médiéval qui a conservé ses douves et son ancienne tour de guet. L’homme d’affaires du vin Bernard Magrez l’a racheté en 2000.",
    quiz: [
      { q: "Qui possède à la fois le Château La Tour Carnet et le Château Pape Clément ?", a: "Bernard Magrez", x: ["Michel Rolland", "Jean-Luc Thunevin", "Gérard Perse"] },
    ],
  },
  bx_lafonrochet: {
    fact: "Quatrième cru classé de Saint-Estèphe racheté et relancé en 1960 par la famille Tesseron. Son château et son étiquette peints en jaune vif ne passent pas inaperçus.",
    quiz: [
      { q: "Quelle couleur caractérise le bâtiment et l’étiquette du Château Lafon-Rochet ?", a: "Jaune", x: ["Bleu", "Rose", "Vert"] },
    ],
  },
  bx_beychevelle: {
    fact: "Son nom vient des navires qui baissaient les voiles (« baisse-voile ») en passant sur l’estuaire pour saluer l’amiral duc d’Épernon. Un navire figure d’ailleurs sur l’étiquette.",
    quiz: [
      { q: "De quel geste le nom du Château Beychevelle tire-t-il son origine ?", a: "Baisser les voiles", x: ["Lever l’ancre", "Sonner la cloche", "Agiter le drapeau"] },
      { q: "Que représente l’étiquette du Château Beychevelle ?", a: "Un navire", x: ["Un lion", "Un cœur", "Une cloche"] },
    ],
  },
  bx_prieurelichine: {
    fact: "Château bâti sur le site d’un ancien prieuré bénédictin. Alexis Lichine l’a racheté en 1951 et lui a donné son nom.",
    quiz: [
      { q: "Que désigne le mot « Prieuré » dans le nom du Château Prieuré-Lichine ?", a: "Un monastère", x: ["Une forteresse", "Un moulin", "Un marché"] },
      { q: "Qui a laissé son nom au Château Prieuré-Lichine ?", a: "Alexis Lichine", x: ["Robert Mondavi", "Émile Peynaud", "Hugh Barton"] },
    ],
  },
  bx_marquisdeterme: {
    fact: "Quatrième cru classé de Margaux qui porte le nom du marquis de Terme, son propriétaire au XVIIIe siècle. La famille Sénéclauze le possède depuis 1935.",
    quiz: [
      { q: "Quel est le rang du Château Marquis de Terme dans le classement de 1855 du Médoc ?", a: "Quatrième cru classé", x: ["Deuxième cru classé", "Troisième cru classé", "Cinquième cru classé"] },
    ],
  },
  bx_pontetcanet: {
    fact: "Cinquième cru classé de Pauillac passé très tôt à la biodynamie, dont les vignes sont labourées par des chevaux. La famille Tesseron le possède depuis 1975.",
    quiz: [
      { q: "Qu’utilise le Château Pontet-Canet à la place des tracteurs pour labourer ses vignes ?", a: "Des chevaux", x: ["Des bœufs", "Des ânes", "Des robots"] },
      { q: "Quelle famille possède le Château Pontet-Canet depuis 1975 ?", a: "La famille Tesseron", x: ["La famille Cazes", "La famille Borie", "La famille Delon"] },
    ],
  },
  bx_batailley: {
    fact: "Son nom viendrait d’une bataille livrée ici pendant la guerre de Cent Ans. Séparé de Haut-Batailley en 1942, il est dirigé par la famille Castéja.",
    quiz: [
      { q: "Quel cinquième cru classé voisin est issu d’une division du Château Batailley ?", a: "Château Haut-Batailley", x: ["Château Grand-Puy-Lacoste", "Château Lynch-Moussas", "Château d’Armailhac"] },
    ],
  },
  bx_hautbatailley: {
    fact: "Cinquième cru classé de Pauillac détaché du domaine de Batailley en 1942. En 2017, la famille Cazes, propriétaire de Lynch-Bages, l’a racheté.",
    quiz: [
      { q: "Quelle famille a racheté le Château Haut-Batailley en 2017 ?", a: "La famille Cazes", x: ["La famille Tesseron", "La famille Castéja", "La famille Delon"] },
    ],
  },
  bx_grandpuylacoste: {
    fact: "« Puy » signifie colline : le château se dresse sur une croupe de graves à l’intérieur des terres de Pauillac. La famille Borie le dirige depuis 1978.",
    quiz: [
      { q: "Que signifie « Puy » dans le nom du Château Grand-Puy-Lacoste ?", a: "Colline", x: ["Puits", "Forêt", "Rivière"] },
    ],
  },
  bx_grandpuyducasse: {
    fact: "Cinquième cru classé dont les vignes sont dispersées dans tout Pauillac, tandis que le château se dresse sur les quais du bourg, au bord de l’estuaire.",
    quiz: [
      { q: "Quel est le rang du Château Grand-Puy Ducasse dans le classement de 1855 du Médoc ?", a: "Cinquième cru classé", x: ["Deuxième cru classé", "Troisième cru classé", "Quatrième cru classé"] },
    ],
  },
  bx_lynchbages: {
    fact: "Son nom vient de la famille Lynch, d’origine irlandaise, qui l’a possédé. Dirigé depuis 1939 par la famille Cazes, il a gagné le surnom de « Latour du pauvre ».",
    quiz: [
      { q: "Quel surnom a été donné au Château Lynch-Bages ?", a: "Le Latour du pauvre", x: ["Le Versailles du Médoc", "Le maharadjah de Saint-Estèphe", "Le joyau de Pomerol"] },
      { q: "Quelle famille dirige le Château Lynch-Bages depuis 1939 ?", a: "La famille Cazes", x: ["La famille Lynch", "La famille Borie", "La famille Tesseron"] },
    ],
  },
  bx_lynchmoussas: {
    fact: "Comme Lynch-Bages, ce domaine appartenait à la famille Lynch, d’origine irlandaise. Il est aujourd’hui dirigé par la famille Castéja, comme le Château Batailley.",
    quiz: [
      { q: "Quel cinquième cru classé est dirigé par la famille Castéja, comme le Château Lynch-Moussas ?", a: "Château Batailley", x: ["Château Haut-Batailley", "Château Clerc Milon", "Château Pédesclaux"] },
    ],
  },
  bx_dauzac: {
    fact: "Cinquième cru classé de Margaux connu pour avoir été, à la fin du XIXe siècle, le premier terrain d’essai de la « bouillie bordelaise », mélange de sulfate de cuivre et de chaux contre les maladies cryptogamiques de la vigne.",
    quiz: [
      { q: "Quel traitement de la vigne aurait été expérimenté pour la première fois au Château Dauzac ?", a: "La bouillie bordelaise", x: ["La bouillie sulfocalcique", "Le DDT", "Le permanganate de potassium"] },
    ],
  },
  bx_darmailhac: {
    fact: "Racheté en 1933 par le baron Philippe de Rothschild, il a changé plusieurs fois de nom, dont « Mouton Baron Philippe », avant de retrouver son nom d’origine, d’Armailhac, en 1989.",
    quiz: [
      { q: "Quel nom le Château d’Armailhac a-t-il porté pendant un temps ?", a: "Château Mouton Baron Philippe", x: ["Château Mouton Cadet", "Château Petit Mouton", "Château Clerc Mouton"] },
    ],
  },
  bx_dutertre: {
    fact: "Il se dresse sur un tertre du village d’Arsac, à l’ouest de l’appellation Margaux. Il est dirigé par la famille Albada Jelgersma, comme le Château Giscours.",
    quiz: [
      { q: "Quel troisième cru classé de Margaux est dirigé par la même famille que le Château du Tertre ?", a: "Château Giscours", x: ["Château Kirwan", "Château d’Issan", "Château Palmer"] },
    ],
  },
  bx_hautbagesliberal: {
    fact: "Il porte le nom de la famille Libéral, propriétaire au XVIIIe siècle. Claire Villars-Lurton le dirige avec le Château Ferrière, troisième cru classé, et le cultive en biodynamie.",
    quiz: [
      { q: "Quel troisième cru classé de Margaux est dirigé par la même personne que le Château Haut-Bages Libéral ?", a: "Château Ferrière", x: ["Château Desmirail", "Château Kirwan", "Château d’Issan"] },
    ],
  },
  bx_pedesclaux: {
    fact: "Fondé en 1810 par Pierre Urbain Pédesclaux, courtier en vins bordelais. Jacky Lorenzetti l’a racheté en 2009 et l’a doté d’un bâtiment moderne habillé de verre.",
    quiz: [
      { q: "Quel homme d’affaires a racheté et rénové le Château Pédesclaux en 2009 ?", a: "Jacky Lorenzetti", x: ["Bernard Magrez", "Michel Reybier", "François Pinault"] },
    ],
  },
  bx_belgrave: {
    fact: "Cinquième cru classé du village de Saint-Laurent, en Haut-Médoc, exploité par la maison de négoce bordelaise Dourthe.",
    quiz: [
      { q: "Quel est le rang du Château Belgrave dans le classement de 1855 du Médoc ?", a: "Cinquième cru classé", x: ["Deuxième cru classé", "Troisième cru classé", "Quatrième cru classé"] },
    ],
  },
  bx_camensac: {
    fact: "Cinquième cru classé du village de Saint-Laurent, en Haut-Médoc. Avec ses voisins Belgrave et La Tour Carnet, c’est l’un des trois crus classés de Saint-Laurent.",
    quiz: [
      { q: "Quel quatrième cru classé se trouve dans le même village de Saint-Laurent que le Château Camensac ?", a: "Château La Tour Carnet", x: ["Château Talbot", "Château Saint-Pierre", "Château Pouget"] },
    ],
  },
  bx_coslabory: {
    fact: "Petit cinquième cru classé de Saint-Estèphe, collé au Château Cos d’Estournel et dirigé par la famille Audoy.",
    quiz: [
      { q: "Quel deuxième cru classé de Saint-Estèphe jouxte le Château Cos Labory ?", a: "Château Cos d’Estournel", x: ["Château Montrose", "Château Calon Ségur", "Château Lafon-Rochet"] },
    ],
  },
  bx_clercmilon: {
    fact: "Cinquième cru classé de Pauillac voisin de Mouton Rothschild et de Lafite Rothschild. Le baron Philippe de Rothschild l’a racheté en 1970.",
    quiz: [
      { q: "Qui a racheté le Château Clerc Milon en 1970 ?", a: "Le baron Philippe de Rothschild", x: ["Éric de Rothschild", "Jean-Michel Cazes", "Henri Martin"] },
    ],
  },
  bx_croizetbages: {
    fact: "Son nom associe les frères Croizet, propriétaires au XVIIIe siècle, et le hameau de Bages. Il est dirigé par la famille Quié, comme Rauzan-Gassies.",
    quiz: [
      { q: "Quel deuxième cru classé de Margaux est dirigé par la même famille que le Château Croizet-Bages ?", a: "Château Rauzan-Gassies", x: ["Château Rauzan-Ségla", "Château Brane-Cantenac", "Château Lascombes"] },
    ],
  },
  bx_cantemerle: {
    fact: "Son nom signifierait « le merle chante ». Ajouté tardivement au classement de 1855, il y figure en toute dernière position des cinquièmes crus.",
    quiz: [
      { q: "Comment le Château Cantemerle est-il entré dans le classement de 1855 ?", a: "Ajouté après la publication de la liste", x: ["Rétrogradé depuis le rang de premier cru", "Tiré au sort", "Promu lors de la révision de 1973"] },
    ],
  },
  bx_lepin: {
    fact: "Minuscule vignoble dont la famille belge Thienpont a sorti le premier millésime en 1979. Son nom vient d’un pin solitaire qui se dressait à côté.",
    quiz: [
      { q: "D’où vient le nom du vin Le Pin ?", a: "D’un pin isolé près de la vigne", x: ["Du nom du fondateur", "D’un ancien monastère", "D’un petit pont de pierre"] },
      { q: "De quel pays est originaire la famille Thienpont, propriétaire de Le Pin ?", a: "Belgique", x: ["Pays-Bas", "Suisse", "Luxembourg"] },
    ],
  },
  bx_lafleur: {
    fact: "Petit vignoble contigu à Petrus, cultivé par la famille Guinaudeau comme une ferme familiale. Pour un pomerol, la part de cabernet franc y est élevée.",
    quiz: [
      { q: "Quelle famille cultive le Château Lafleur ?", a: "La famille Guinaudeau", x: ["La famille Moueix", "La famille Thienpont", "La famille Durantou"] },
    ],
  },
  bx_vcc: {
    fact: "Grand nom de Pomerol racheté en 1924 par la famille belge Thienpont. Fait rare à Pomerol, le cabernet franc et le cabernet sauvignon y occupent une part importante.",
    quiz: [
      { q: "Quelle famille a racheté le Vieux Château Certan en 1924 ?", a: "La famille Thienpont", x: ["La famille Moueix", "La famille Guinaudeau", "La famille Nicolas"] },
    ],
  },
  bx_levangile: {
    fact: "Château de Pomerol situé entre Petrus et Cheval Blanc. En 1990, la famille Rothschild de Lafite y a pris une participation et en assure la gestion.",
    quiz: [
      { q: "À quoi le nom du Château L’Évangile fait-il référence ?", a: "Aux Évangiles", x: ["À un ange", "À une cathédrale", "À un pèlerin"] },
    ],
  },
  bx_laconseillante: {
    fact: "Son nom vient de Catherine Conseillan, propriétaire au XVIIIe siècle. La famille Nicolas le conserve depuis 1871 ; sa capsule et le lettrage violets de son étiquette sont sa signature.",
    quiz: [
      { q: "Quelle couleur caractérise la capsule du Château La Conseillante ?", a: "Violet", x: ["Or", "Noir", "Blanc"] },
    ],
  },
  bx_trotanoy: {
    fact: "Son nom viendrait de « trop ennuie », tant son sol compact était pénible à travailler. Jean-Pierre Moueix l’a racheté en 1953.",
    quiz: [
      { q: "Quel négociant a racheté le Château Trotanoy en 1953 ?", a: "Jean-Pierre Moueix", x: ["Dourthe", "Cordier", "Le baron Philippe de Rothschild"] },
    ],
  },
  bx_egliseclinet: {
    fact: "Son nom vient de la parcelle voisine de l’église de Pomerol. Dirigé depuis 1983 par Denis Durantou, il s’est hissé parmi les meilleurs pomerols.",
    quiz: [
      { q: "À quoi renvoie le mot « Église » dans le nom du Château L’Église-Clinet ?", a: "À l’église de Pomerol", x: ["À une forteresse", "À un puits", "À une place de village"] },
    ],
  },
  bx_clinet: {
    fact: "Château de Pomerol racheté en 1998 par la famille Laborde et dirigé par le fils, Ronan Laborde. Le merlot y est assemblé avec du cabernet sauvignon.",
    quiz: [
      { q: "Quelle famille dirige le Château Clinet ?", a: "La famille Laborde", x: ["La famille Durantou", "La famille Nicolas", "La famille Thienpont"] },
    ],
  },
  bx_gazin: {
    fact: "Au Moyen Âge, ces terres appartenaient aux Hospitaliers de Saint-Jean de Jérusalem, dont la croix figure toujours sur l’étiquette. La famille de Bailliencourt le possède depuis des générations.",
    quiz: [
      { q: "Quel ancien propriétaire la croix de l’étiquette du Château Gazin rappelle-t-elle ?", a: "Les Hospitaliers de Saint-Jean", x: ["La papauté", "L’archevêque de Bordeaux", "La couronne d’Angleterre"] },
    ],
  },
  bx_nenin: {
    fact: "Château de Pomerol racheté en 1997 par la famille Delon, propriétaire de Léoville Las Cases, qui l’a entièrement relancé.",
    quiz: [
      { q: "Quelle famille a racheté le Château Nénin en 1997 ?", a: "La famille Delon", x: ["La famille Thienpont", "La famille Moueix", "La famille Laborde"] },
    ],
  },
  bx_bonpasteur: {
    fact: "Château de Pomerol cultivé de génération en génération par la famille de Michel Rolland, célèbre consultant en œnologie. Son nom signifie « le bon berger ».",
    quiz: [
      { q: "Quel œnologue consultant est étroitement lié au Château Le Bon Pasteur ?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  bx_lafleurpetrus: {
    fact: "Situé entre ses voisins Lafleur et Petrus, il réunit leurs deux noms. Il appartient à la maison Jean-Pierre Moueix.",
    quiz: [
      { q: "Quel négociant possède le Château La Fleur-Pétrus ?", a: "Jean-Pierre Moueix", x: ["La famille Thienpont", "La famille Guinaudeau", "Domaine Clarence Dillon"] },
    ],
  },
  bx_ausone: {
    fact: "Grand nom de Saint-Émilion qui doit son nom à Ausone, poète romain du IVe siècle. Avant la révision du classement de 2022, il s’en est retiré de lui-même, tout comme Cheval Blanc.",
    quiz: [
      { q: "De qui le Château Ausone tient-il son nom ?", a: "Du poète romain Ausone", x: ["De l’empereur romain Hadrien", "De saint Émilion", "De Charlemagne"] },
      { q: "Quelle famille dirige le Château Ausone ?", a: "La famille Vauthier", x: ["La famille Moueix", "La famille de Boüard", "La famille Manoncourt"] },
    ],
  },
  bx_angelus: {
    fact: "Son nom vient des cloches de l’angélus de trois églises que l’on entend depuis les vignes, et une cloche dorée orne son étiquette. Il a été promu premier grand cru classé « A » en 2012.",
    quiz: [
      { q: "Quel est le symbole de l’étiquette du Château Angélus ?", a: "Une cloche", x: ["Un ange", "Une clé", "Un lys"] },
      { q: "Quel château a été promu premier grand cru classé « A » de Saint-Émilion en 2012, en même temps que le Château Angélus ?", a: "Château Pavie", x: ["Château Figeac", "Château Canon", "Château Troplong Mondot"] },
    ],
  },
  bx_pavie: {
    fact: "Racheté en 1998 par Gérard Perse, qui y a beaucoup investi, il a été promu premier grand cru classé « A » de Saint-Émilion en 2012, en même temps qu’Angélus.",
    quiz: [
      { q: "Qui a racheté le Château Pavie en 1998 ?", a: "Gérard Perse", x: ["Hubert de Boüard", "Alain Vauthier", "Bernard Magrez"] },
    ],
  },
  bx_figeac: {
    fact: "Fait rare à Saint-Émilion, les deux cabernets y représentent plus de la moitié de l’encépagement. Son voisin Cheval Blanc est né de terres détachées du domaine de Figeac au XIXe siècle.",
    quiz: [
      { q: "Quel célèbre château est né au XIXe siècle de terres détachées du domaine de Figeac ?", a: "Château Cheval Blanc", x: ["Château Ausone", "Château Angélus", "Château Pavie"] },
      { q: "En quelle année le Château Figeac a-t-il été promu premier grand cru classé « A » de Saint-Émilion ?", a: "2022", x: ["2012", "1996", "2006"] },
    ],
  },
  bx_canon: {
    fact: "Premier grand cru classé de Saint-Émilion qui porte le nom de Jacques Kanon, propriétaire au XVIIIe siècle. En 1996, la famille Wertheimer, propriétaire de Chanel, l’a racheté.",
    quiz: [
      { q: "Qui possède à la fois le Château Canon et le Château Rauzan-Ségla, à Margaux ?", a: "Chanel (la famille Wertheimer)", x: ["LVMH", "AXA Millésimes", "Louis Roederer"] },
    ],
  },
  bx_belairmonange: {
    fact: "En 2008, la famille Moueix a racheté l’ancien Château Bélair et l’a rebaptisé en hommage à Anne-Adèle Monange, une aïeule de la famille. En 2012, il a absorbé le Château Magdelaine voisin.",
    quiz: [
      { q: "Quel château de la famille Moueix a été fusionné avec le Château Bélair-Monange en 2012 ?", a: "Château Magdelaine", x: ["Château Canon", "Château Troplong Mondot", "Clos Fourtet"] },
    ],
  },
  bx_troplongmondot: {
    fact: "Il domine l’un des plus hauts coteaux calcaires de Saint-Émilion. Promu premier grand cru classé en 2006, il a été racheté en 2017 par le réassureur SCOR.",
    quiz: [
      { q: "Qui a racheté le Château Troplong Mondot en 2017 ?", a: "Le réassureur SCOR", x: ["AXA Millésimes", "Chanel", "Suntory"] },
    ],
  },
  bx_valandraud: {
    fact: "Pionnier des « vins de garage », né dans le petit hangar où le couple Jean-Luc Thunevin et Murielle Andraud a commencé à vinifier. Premier millésime en 1991, promu premier grand cru classé en 2012.",
    quiz: [
      { q: "Comment appelle-t-on ces vins produits en petite quantité dans un modeste local, comme le Château Valandraud, qui ont fait sensation dans les années 1990 ?", a: "Vins de garage", x: ["Vins nature", "Super toscans", "Vins orange"] },
      { q: "Qui a créé le Château Valandraud ?", a: "Jean-Luc Thunevin", x: ["Gérard Perse", "Michel Rolland", "Hubert de Boüard"] },
    ],
  },
  bx_lamondotte: {
    fact: "Le premier millésime est sorti en 1996 d’une petite parcelle de la famille des comtes von Neipperg. Lors de la révision de 2012, il a été directement promu premier grand cru classé.",
    quiz: [
      { q: "Quelle famille possède La Mondotte ?", a: "La famille von Neipperg", x: ["La famille Vauthier", "La famille Moueix", "La famille Bécot"] },
    ],
  },
  bx_tertreroteboeuf: {
    fact: "Son nom signifie « la colline où le bœuf rote » : la pente était si raide que les bœufs de labour s’essoufflaient. Sans aucun classement, il se vend au prix des plus grands.",
    quiz: [
      { q: "Que signifie le nom du Château Tertre Rôteboeuf ?", a: "La colline où le bœuf rote", x: ["La colline du bœuf rôti", "Le champ du taureau rouge", "La pente où se repose le paysan"] },
    ],
  },
  bx_beausejourbecot: {
    fact: "Rétrogradé lors de la révision des années 1980 pour avoir intégré des parcelles non classées, il a retrouvé le rang de premier grand cru classé en 1996. La famille Bécot le dirige.",
    quiz: [
      { q: "Quel rang le Château Beau-Séjour Bécot, rétrogradé dans les années 1980, a-t-il retrouvé en 1996 ?", a: "Premier grand cru classé", x: ["Cru bourgeois", "Cru classé de Graves", "Deuxième cru classé en 1855"] },
    ],
  },
  bx_closfourtet: {
    fact: "Situé juste devant les remparts de Saint-Émilion, il possède des caves creusées dans d’anciennes carrières de calcaire. La famille Cuvelier l’a racheté en 2001.",
    quiz: [
      { q: "Quelle famille a racheté le Clos Fourtet en 2001 ?", a: "La famille Cuvelier", x: ["La famille Lurton", "La famille Bécot", "La famille Perse"] },
    ],
  },
  bx_larcisducasse: {
    fact: "Issu d’un vignoble en terrasses sur un coteau exposé au sud, voisin de Pavie. Il a été promu premier grand cru classé lors de la révision de 2012.",
    quiz: [
      { q: "En quelle année le Château Larcis Ducasse a-t-il été promu premier grand cru classé ?", a: "2012", x: ["1996", "2006", "1955"] },
    ],
  },
  bx_paviemacquin: {
    fact: "Il porte le nom d’Albert Macquin, qui répandit à Saint-Émilion le greffage sur porte-greffe américain après le phylloxéra. Promu premier grand cru classé en 2006.",
    quiz: [
      { q: "Quel est le fait marquant d’Albert Macquin, qui a laissé son nom au Château Pavie Macquin ?", a: "Il a diffusé le greffage sur porte-greffe américain", x: ["Il a inventé la bouillie bordelaise", "Il a établi le classement de 1855", "Il a lancé la mise en bouteille au château"] },
    ],
  },
  bx_canonlagaffeliere: {
    fact: "Château de Saint-Émilion appartenant depuis 1971 à la famille des comtes von Neipperg. Il a été promu premier grand cru classé en 2012.",
    quiz: [
      { q: "Quelle famille possède à la fois le Château Canon-la-Gaffelière et La Mondotte ?", a: "La famille von Neipperg", x: ["La famille Wertheimer", "La famille Moueix", "La famille Vauthier"] },
    ],
  },
  bx_missionhautbrion: {
    fact: "Son nom vient des prêtres de la congrégation de la Mission (lazaristes) qui cultivaient ces terres au XVIIe siècle. En 1983, la famille Dillon, propriétaire de Haut-Brion juste en face, l’a racheté.",
    quiz: [
      { q: "Qui a racheté le Château La Mission Haut-Brion en 1983 ?", a: "Domaine Clarence Dillon", x: ["Bernard Magrez", "La famille Cathiard", "Louis Roederer"] },
      { q: "À quoi fait référence le mot « Mission » dans le nom du Château La Mission Haut-Brion ?", a: "À d’anciens prêtres missionnaires", x: ["À une expédition militaire", "À une mission diplomatique", "À une expédition d’exploration"] },
    ],
  },
  bx_papeclement: {
    fact: "Vignoble qui appartint à Bertrand de Goth, archevêque de Bordeaux devenu le pape Clément V en 1305. Il est aujourd’hui dirigé par Bernard Magrez.",
    quiz: [
      { q: "Où le pape Clément V, qui a donné son nom au Château Pape Clément, a-t-il transféré le siège de la papauté ?", a: "Avignon", x: ["Bordeaux", "Lyon", "Reims"] },
    ],
  },
  bx_smithhautlafitte: {
    fact: "Il porte encore le nom de George Smith, marchand écossais du XVIIIe siècle. En 1990, le couple Cathiard, d’anciens skieurs, l’a racheté, et leur fille a créé Caudalie, marque de cosmétiques à base de raisin.",
    quiz: [
      { q: "Quelle marque de cosmétiques a été créée par la fille de la famille Cathiard, propriétaire du Château Smith Haut Lafitte ?", a: "Caudalie", x: ["L’Occitane", "Nuxe", "Biotherm"] },
      { q: "Quel était le métier du couple Cathiard avant son rachat du Château Smith Haut Lafitte en 1990 ?", a: "Skieurs", x: ["Navigateurs", "Cyclistes", "Joueurs de tennis"] },
    ],
  },
  bx_chevalier: {
    fact: "Grand nom de Pessac-Léognan niché dans une clairière au milieu des pins, dont le rouge comme le blanc figurent au classement des Graves. La famille Bernard le dirige depuis 1983.",
    quiz: [
      { q: "Quels vins du Domaine de Chevalier figurent au classement des Graves ?", a: "Le rouge et le blanc", x: ["Le rouge seulement", "Le blanc seulement", "Le liquoreux seulement"] },
    ],
  },
  bx_hautbailly: {
    fact: "Racheté en 1998 par le banquier américain Robert Wilmers. Il préserve une vieille parcelle où des vignes plus que centenaires de différents cépages poussent mêlées.",
    quiz: [
      { q: "De quel pays était Robert Wilmers, qui a racheté le Château Haut-Bailly en 1998 ?", a: "États-Unis", x: ["Royaume-Uni", "Belgique", "Hong Kong"] },
    ],
  },
  bx_malartic: {
    fact: "Il porte le nom de la famille du comte de Malartic, amiral du XVIIIe siècle, et un voilier orne son étiquette. La famille belge Bonnie l’a racheté en 1997.",
    quiz: [
      { q: "De quel pays est originaire la famille Bonnie, qui a racheté le Château Malartic-Lagravière en 1997 ?", a: "Belgique", x: ["Pays-Bas", "Suisse", "États-Unis"] },
    ],
  },
  bx_carbonnieux: {
    fact: "Selon une anecdote célèbre, d’anciens moines bénédictins auraient vendu son vin blanc au sultan ottoman, à qui l’alcool était interdit, en le faisant passer pour de l’« eau minérale de Carbonnieux ».",
    quiz: [
      { q: "Sous quel nom les moines de Carbonnieux auraient-ils vendu leur vin au sultan ottoman ?", a: "Eau minérale de Carbonnieux", x: ["Eau bénite de Carbonnieux", "Tisane de Carbonnieux", "Jus de raisin de Carbonnieux"] },
    ],
  },
  bx_lescarmes: {
    fact: "Son nom rappelle le vignoble des anciens moines carmes. Patrice Pichet l’a racheté en 2010 et y a fait construire un chai en forme de navire conçu par Philippe Starck.",
    quiz: [
      { q: "Quel designer a conçu le nouveau chai du Château Les Carmes Haut-Brion ?", a: "Philippe Starck", x: ["Jean Nouvel", "Frank Gehry", "Tadao Ando"] },
    ],
  },
  bx_suduiraut: {
    fact: "Premier cru classé de Sauternes voisin d’Yquem. Son jardin aurait été dessiné par Le Nôtre, créateur des jardins de Versailles ; il appartient à AXA Millésimes depuis 1992.",
    quiz: [
      { q: "À qui appartient le Château Suduiraut depuis 1992 ?", a: "AXA Millésimes", x: ["LVMH", "Domaines Barons de Rothschild", "Domaine Clarence Dillon"] },
    ],
  },
  bx_rieussec: {
    fact: "Premier cru classé de Sauternes racheté en 1984 par la famille Rothschild de Lafite, situé à Fargues, village voisin d’Yquem.",
    quiz: [
      { q: "Qui a racheté le Château Rieussec en 1984 ?", a: "La famille Rothschild de Lafite", x: ["AXA Millésimes", "La famille Rothschild de Mouton", "LVMH"] },
    ],
  },
  bx_climens: {
    fact: "Premier cru classé surnommé « le seigneur de Barsac ». Il est élaboré à 100 % de sémillon et son vignoble a été conduit en biodynamie.",
    quiz: [
      { q: "Quel surnom a été donné au Château Climens ?", a: "Le seigneur de Barsac", x: ["La reine de Sauternes", "Le Versailles du Médoc", "L’Yquem du pauvre"] },
    ],
  },
  bx_coutet: {
    fact: "Premier cru classé de Barsac qui a conservé un bâtiment fortifié médiéval. Il est célèbre pour sa « Cuvée Madame », produite en petite quantité les seules grandes années.",
    quiz: [
      { q: "Quelle cuvée spéciale le Château Coutet produit-il en petite quantité les seules grandes années ?", a: "Cuvée Madame", x: ["Cuvée Louise", "Réserve du Général", "Cuvée Prestige"] },
    ],
  },
  bx_guiraud: {
    fact: "Premier cru classé de Sauternes certifié en agriculture biologique. En 2006, Robert Peugeot, de la famille Peugeot, et Olivier Bernard, du Domaine de Chevalier, notamment, l’ont racheté ensemble.",
    quiz: [
      { q: "Quelle famille de l’automobile a participé au rachat du Château Guiraud en 2006 ?", a: "La famille Peugeot", x: ["La famille Renault", "La famille Citroën", "La famille Michelin"] },
    ],
  },
  bx_latourblanche: {
    fact: "En 1907, son propriétaire Daniel Iffla Osiris l’a légué à l’État, à condition qu’on y crée une école de viticulture et d’œnologie. Une école rattachée au ministère de l’Agriculture l’exploite toujours.",
    quiz: [
      { q: "Qui est propriétaire du Château La Tour Blanche ?", a: "L’État français (ministère de l’Agriculture)", x: ["L’université de Bordeaux", "La ville de Bordeaux", "Le syndicat des producteurs de Sauternes"] },
    ],
  },
  bx_lafauriepeyraguey: {
    fact: "En 2014, Silvio Denz, président de la maison de cristal Lalique, l’a racheté et y a ouvert un hôtel et un restaurant Lalique.",
    quiz: [
      { q: "À quelle maison de cristal le Château Lafaurie-Peyraguey est-il associé ?", a: "Lalique", x: ["Baccarat", "Swarovski", "Riedel"] },
    ],
  },
  bx_fargues: {
    fact: "Domaine que la famille Lur Saluces, longtemps propriétaire d’Yquem, conserve depuis le XVe siècle. Non classé, il est pourtant considéré comme un sauternes digne d’Yquem.",
    quiz: [
      { q: "Quel premier cru supérieur de Sauternes la famille Lur Saluces, propriétaire du Château de Fargues, a-t-elle longtemps possédé ?", a: "Château d’Yquem", x: ["Château Suduiraut", "Château Climens", "Château Rieussec"] },
    ],
  },
  bx_sociandomallet: {
    fact: "Racheté en 1969 par le négociant Jean Gautreau, qui en a fait un vin à la hauteur des crus classés. Il ne participe pas à la sélection des crus bourgeois et se vend sur son seul nom.",
    quiz: [
      { q: "Qui a racheté le Château Sociando-Mallet en 1969 et l’a porté à son niveau actuel ?", a: "Jean Gautreau", x: ["Henri Martin", "Jean-Michel Cazes", "Alexis Lichine"] },
    ],
  },
  bx_chassespleen: {
    fact: "Son nom signifie « chasser le spleen », c’est-à-dire la mélancolie, et aurait été trouvé par Byron ou par Baudelaire. C’est l’un des porte-drapeaux des crus bourgeois.",
    quiz: [
      { q: "Que signifie le nom du Château Chasse-Spleen ?", a: "Chasser la mélancolie", x: ["Le repos du chasseur", "La colline lumineuse", "La forêt qui arrête le vent"] },
    ],
  },
  bx_gloria: {
    fact: "Henri Martin, maire de Saint-Julien, l’a constitué à partir des années 1940 en achetant une à une des parcelles aux crus classés voisins. Non classé, il est pourtant traité à l’égal des crus classés.",
    quiz: [
      { q: "Qui a fondé le Château Gloria ?", a: "Henri Martin", x: ["Jean Gautreau", "Alexis Lichine", "Philippe de Rothschild"] },
    ],
  },
  bx_phelansegur: {
    fact: "Domaine de Saint-Estèphe constitué au XIXe siècle par l’Irlandais Bernard Phelan. Hors classement, il est jugé du niveau d’un grand cru classé.",
    quiz: [
      { q: "D’où était originaire Bernard Phelan, qui a laissé son nom au Château Phélan Ségur ?", a: "Irlande", x: ["Écosse", "Angleterre", "Pays-Bas"] },
    ],
  },
  bx_potensac: {
    fact: "Château du nord du Médoc dirigé par la famille Delon, propriétaire de Léoville Las Cases, réputé pour son excellent rapport qualité-prix.",
    quiz: [
      { q: "Quelle famille dirige le Château Potensac ?", a: "La famille Delon", x: ["La famille Cazes", "La famille Borie", "La famille Cuvelier"] },
    ],
  },
  bx_poujeaux: {
    fact: "Château phare de Moulis, racheté en 2008 par la famille Cuvelier, propriétaire du Clos Fourtet à Saint-Émilion.",
    quiz: [
      { q: "Quelle famille possède à la fois le Château Poujeaux et le Clos Fourtet à Saint-Émilion ?", a: "La famille Cuvelier", x: ["La famille Lurton", "La famille Delon", "La famille Moueix"] },
    ],
  },
  bx_clarke: {
    fact: "Château de Listrac racheté en 1973 par le baron Edmond de Rothschild, qui en a entièrement replanté le vignoble.",
    quiz: [
      { q: "Qui a racheté le Château Clarke en 1973 ?", a: "Edmond de Rothschild", x: ["Philippe de Rothschild", "Éric de Rothschild", "Clarence Dillon"] },
    ],
  },
  bx_depez: {
    fact: "Château de Saint-Estèphe racheté en 1995 par la maison de champagne Louis Roederer, qui a ensuite acquis Pichon Comtesse.",
    quiz: [
      { q: "Quelle maison de champagne a racheté le Château de Pez en 1995 ?", a: "Louis Roederer", x: ["Bollinger", "Veuve Clicquot", "Pol Roger"] },
    ],
  },
  bx_angludet: {
    fact: "Château de Margaux racheté en 1961 par la famille Sichel, également copropriétaire du Château Palmer, troisième cru classé.",
    quiz: [
      { q: "De quel troisième cru classé la famille Sichel, à la tête du Château d’Angludet, est-elle copropriétaire ?", a: "Château Palmer", x: ["Château Giscours", "Château Kirwan", "Château d’Issan"] },
    ],
  },
  bx_ormesdepez: {
    fact: "Château de Saint-Estèphe dirigé depuis 1940 par la famille Cazes, propriétaire de Lynch-Bages.",
    quiz: [
      { q: "Quelle famille dirige le Château Ormes de Pez ?", a: "La famille Cazes", x: ["La famille Delon", "La famille Tesseron", "La famille Borie"] },
    ],
  },
  bx_carruades: {
    fact: "Second vin de Lafite Rothschild. Son nom vient des vignes du plateau des « Carruades », rattaché au domaine de Lafite.",
    quiz: [
      { q: "À la fin des années 2000, de quel pays venait surtout la demande qui a fait flamber le prix des Carruades de Lafite ?", a: "Chine", x: ["Japon", "Russie", "Inde"] },
    ],
  },
  bx_pavillonrouge: {
    fact: "Second vin du Château Margaux, qui a porté pour la première fois le nom de « Pavillon Rouge » en 1908.",
    quiz: [
      { q: "Quel vin blanc du Château Margaux fait pendant au Pavillon Rouge du Château Margaux ?", a: "Pavillon Blanc", x: ["Aile d’Argent", "Caillou Blanc", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_fortsdelatour: {
    fact: "Second vin du Château Latour, dont le premier millésime date de 1966. Comme Latour, il n’est mis en vente qu’après un long vieillissement.",
    quiz: [
      { q: "Quel est le premier millésime des Forts de Latour ?", a: "1966", x: ["1945", "1982", "1990"] },
    ],
  },
  bx_petitmouton: {
    fact: "Second vin de Mouton Rothschild, apparu dans les années 1990. Le vin blanc du même château s’appelle « Aile d’Argent ».",
    quiz: [
      { q: "Quel vin blanc produit le château qui élabore Le Petit Mouton ?", a: "Aile d’Argent", x: ["Pavillon Blanc", "Caillou Blanc", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_clarence: {
    fact: "Second vin rebaptisé en 2007, auparavant appelé « Bahans Haut-Brion », en hommage au banquier américain Clarence Dillon, qui acheta Haut-Brion en 1935.",
    quiz: [
      { q: "Quel était l’ancien nom du Clarence de Haut-Brion ?", a: "Bahans Haut-Brion", x: ["La Chapelle de la Mission", "Carruades de Haut-Brion", "Pavillon de Haut-Brion"] },
      { q: "À qui Le Clarence de Haut-Brion rend-il hommage ?", a: "Au banquier américain Clarence Dillon", x: ["Au pape Clément V", "Au roi Charles II d’Angleterre", "À Napoléon III"] },
    ],
  },
  bx_alterego: {
    fact: "Lancé en 1998 pour remplacer l’ancien second vin, « Réserve du Général ». Comme son nom l’indique, c’est l’« autre moi » de Palmer, élaboré comme un vin à part entière.",
    quiz: [
      { q: "Comment s’appelait le second vin du Château Palmer avant l’arrivée d’Alter Ego de Palmer ?", a: "Réserve du Général", x: ["Pavillon Rouge", "Les Forts", "Clos du Marquis"] },
    ],
  },
  bx_petitcheval: {
    fact: "Second vin de Cheval Blanc, apparu pour la première fois en 1988.",
    quiz: [
      { q: "Qui a racheté en 1998 le Château Cheval Blanc, qui produit Le Petit Cheval ?", a: "Bernard Arnault et Albert Frère", x: ["François Pinault", "Les frères Wertheimer", "Les frères Bouygues"] },
    ],
  },
  bx_closdumarquis: {
    fact: "Longtemps considéré comme le second vin de Léoville Las Cases, il est élaboré depuis 2007 comme un vin indépendant, issu de parcelles distinctes.",
    quiz: [
      { q: "Quel vin est devenu en 2007 le second vin de Léoville Las Cases à la place du Clos du Marquis ?", a: "Le Petit Lion du Marquis de Las Cases", x: ["Les Forts de Latour", "Réserve de la Comtesse", "La Croix de Beaucaillou"] },
    ],
  },
  bx_pagodesdecos: {
    fact: "Second vin de Cos d’Estournel, qui tire son nom des pagodes orientales coiffant le toit du chai.",
    quiz: [
      { q: "D’où vient le nom des Pagodes de Cos ?", a: "Des pagodes orientales du toit du chai", x: ["Du récit de voyage en Inde du fondateur", "Des pins du vignoble", "Du clocher de l’église du village"] },
    ],
  },
  bx_carillonangelus: {
    fact: "Second vin d’Angélus. Le « carillon » est un instrument composé de plusieurs cloches, en écho à la cloche emblème d’Angélus.",
    quiz: [
      { q: "Que désigne le mot « carillon » dans le nom du Carillon d’Angélus ?", a: "Un instrument composé de plusieurs cloches", x: ["Une petite vigne", "Une flûte de berger", "Un jardin de monastère"] },
    ],
  },
  bx_pavillonblanc: {
    fact: "L’appellation Margaux n’étant reconnue que pour les vins rouges, le blanc du Château Margaux sort en AOC Bordeaux. Il est élaboré à 100 % de sauvignon blanc.",
    quiz: [
      { q: "Pourquoi le Pavillon Blanc du Château Margaux ne peut-il pas porter l’appellation Margaux ?", a: "Parce que l’AOC Margaux n’admet que le rouge", x: ["Parce que c’est un second vin", "Parce qu’il n’est pas élevé en fût", "Parce qu’il est fait de raisins achetés"] },
    ],
  },
  bx_moutoncadet: {
    fact: "Né en 1930 lorsque le baron Philippe de Rothschild vendit à part un vin d’une récolte médiocre, jugé indigne de l’étiquette Mouton Rothschild. « Cadet » désigne le plus jeune fils, ce qu’était Philippe.",
    quiz: [
      { q: "Que signifie « Cadet » dans le nom Mouton Cadet ?", a: "Le plus jeune fils", x: ["Le fils aîné", "Un chevalier", "Un agneau"] },
    ],
  },
  bx_montperat: {
    fact: "Rouge de Bordeaux devenu très populaire en Corée et au Japon après que le manga « Les Gouttes de Dieu » l’a comparé à la musique du groupe de rock Queen.",
    quiz: [
      { q: "À quel groupe de rock le manga « Les Gouttes de Dieu » compare-t-il le Château Mont-Pérat ?", a: "Queen", x: ["The Beatles", "The Rolling Stones", "Led Zeppelin"] },
    ],
  },
};

export default T;
