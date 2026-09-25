import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  us2_slwc_artemis: {
    fact: "Cabernet do Napa Valley que a Stag’s Leap Wine Cellars faz misturando uvas de vários vinhedos. O nome vem da deusa grega da caça.",
    quiz: [
      { q: "De que lenda vem o “Stags Leap” do nome da vinícola que faz o Artemis?", a: "Um cervo perseguido por caçadores saltou por cima de um penhasco", x: ["Uma manada de cervos atravessou o rio", "Um chefe indígena virou cervo", "Uma enorme galhada de cervo apareceu numa mina de ouro"] },
    ],
  },
  us2_slwc_fay: {
    fact: "Cabernet do vinhedo vizinho ao S.L.V. O fundador Warren Winiarski provou o vinho feito pelo dono deste vinhedo e comprou a terra ao lado.",
    quiz: [
      { q: "O que Nathan Fay, que dá nome ao Fay Vineyard, fez pela primeira vez no distrito de Stags Leap em 1961?", a: "Plantou Cabernet Sauvignon pela primeira vez", x: ["Organizou o primeiro leilão de vinhos", "Escavou a primeira adega em caverna", "Fez o primeiro espumante"] },
    ],
  },
  us2_stagsleap_winery_ps: {
    fact: "Antiga propriedade do distrito de Stags Leap, com primeira safra em 1893, onde ainda está a mansão de pedra “Manor House”. É famosa há muito tempo pelo Petite Sirah.",
    quiz: [
      { q: "Depois de um processo, como a Stags’ Leap Winery e a Stag’s Leap Wine Cellars diferenciaram seus nomes?", a: "Mudando a posição do apóstrofo (’)", x: ["Uma pôs “Napa” antes do nome", "Uma mudou para um nome francês", "Uma tirou a palavra “Winery”"] },
    ],
  },
  us2_chimney_rock: {
    fact: "Vinícola do distrito de Stags Leap que arrancou metade de um antigo campo de golfe para plantar uvas. O prédio reflete o gosto do fundador Hack Wilson, que fez negócios por muito tempo na África do Sul.",
    quiz: [
      { q: "Em que estilo arquitetônico é o prédio branco da Chimney Rock?", a: "Cape Dutch, da África do Sul", x: ["Missão espanhola", "Villa toscana", "Tudor inglês"] },
    ],
  },
  us2_clos_du_val: {
    fact: "Fundada no início dos anos 1970 no distrito de Stags Leap pelo francês Bernard Portet com o empresário americano John Goelet. A safra 1972 participou do “Julgamento de Paris”.",
    quiz: [
      { q: "Em que château de Bordeaux o pai de Bernard Portet, fundador da Clos Du Val, foi diretor técnico?", a: "Château Lafite Rothschild", x: ["Château Margaux", "Château Latour", "Château Haut-Brion"] },
      { q: "Que resultado o Cabernet Clos Du Val 1972 obteve na revanche de 1986, pelos 10 anos do Julgamento de Paris?", a: "1º lugar", x: ["2º lugar", "5º lugar", "Último lugar"] },
    ],
  },
  us2_cliff_lede: {
    fact: "Vinícola fundada em 2002 pelo empresário canadense da construção Cliff Lede, que comprou vinhedos no distrito de Stags Leap.",
    quiz: [
      { q: "Que nomes Cliff Lede deu às parcelas do vinhedo?", a: "Títulos de clássicos e álbuns do rock", x: ["Nomes de deuses gregos", "Nomes de parentes", "Nomes de constelações"] },
    ],
  },
  us2_silverado: {
    fact: "Vinícola que comprou vinhedos nos anos 1970 nas colinas do distrito de Stags Leap, junto à Silverado Trail, e começou a fazer vinho em 1981.",
    quiz: [
      { q: "Que família fundou a Silverado Vineyards?", a: "A família de Walt Disney", x: ["A família Coppola", "A família Getty", "A família Kennedy"] },
    ],
  },
  us2_shafer_rsr: {
    fact: "Chardonnay que a Shafer Vineyards, do distrito de Stags Leap, faz num vinhedo fresco de Carneros. É famoso pelo sabor rico e ao mesmo tempo vivo.",
    quiz: [
      { q: "De onde vem o nome Red Shoulder Ranch?", a: "Do gavião-de-ombro-vermelho, ave de rapina que vive no vinhedo", x: ["De uma colina de terra vermelha exposta", "De um cavalo vermelho querido do fundador", "Do apelido do antigo dono do rancho"] },
    ],
  },
  us2_farniente_cab: {
    fact: "O tinto emblemático da Far Niente, que recuperou a vinícola de pedra de Oakville abandonada na Lei Seca. É feito com uvas da propriedade em Oakville.",
    quiz: [
      { q: "Que famoso pintor americano era sobrinho de John Benson, pioneiro da corrida do ouro que fundou a Far Niente em 1885?", a: "Winslow Homer", x: ["Edward Hopper", "Norman Rockwell", "Andrew Wyeth"] },
    ],
  },
  us2_nickel_nickel: {
    fact: "Vinícola fundada em Oakville em 1997 pela família de Gil Nickel. O Sullenger Vineyard é o vinhedo de Cabernet logo atrás da vinícola, instalada numa casa de fazenda do século XIX restaurada.",
    quiz: [
      { q: "Que princípio a Nickel & Nickel segue em todos os seus vinhos?", a: "Uma só casta, de um só vinhedo", x: ["Mistura uvas de várias regiões", "Nunca usa barricas de carvalho", "Só usa tampa de rosca"] },
      { q: "Que vinícola-irmã de Oakville é administrada pela mesma família da Nickel & Nickel?", a: "Far Niente", x: ["Silver Oak", "Caymus", "Duckhorn"] },
    ],
  },
  us2_plumpjack: {
    fact: "Vinícola fundada em Oakville em 1995. Ao engarrafar metade do Cabernet Reserve 1997 com tampa de rosca, acendeu o debate sobre o fechamento dos vinhos finos.",
    quiz: [
      { q: "Que cofundador da PlumpJack se tornaria governador da Califórnia?", a: "Gavin Newsom", x: ["Arnold Schwarzenegger", "Jerry Brown", "Gray Davis"] },
      { q: "PlumpJack é o apelido de que personagem de Shakespeare?", a: "Falstaff", x: ["Hamlet", "Shylock", "Rei Lear"] },
    ],
  },
  us2_overture: {
    fact: "Segundo vinho do Opus One, feito desde 1993. Por muito tempo foi lançado sem safra, misturando várias colheitas.",
    quiz: [
      { q: "Quem fundou juntos a vinícola que tem o Overture como segundo vinho?", a: "Robert Mondavi e o barão Philippe de Rothschild", x: ["Robert Mondavi e Christian Moueix", "Bill Harlan e Éric de Rothschild", "Jack Cakebread e André Tchelistcheff"] },
    ],
  },
  us2_harlan_maiden: {
    fact: "Segundo vinho do mesmo vinhedo nas encostas a oeste de Oakville. É vendido primeiro aos clientes da lista de mala direta.",
    quiz: [
      { q: "The Maiden é o segundo vinho de qual vinho?", a: "Harlan Estate", x: ["Dominus", "Opus One", "Screaming Eagle"] },
    ],
  },
  us2_promontory: {
    fact: "Cabernet que a família de Bill Harlan faz numa propriedade isolada nas montanhas a oeste de Oakville. O terreno acidentado, cercado de floresta e rochas, é sua marca.",
    quiz: [
      { q: "Que grande vinho cult a família que faz o Promontory criou antes?", a: "Harlan Estate", x: ["Screaming Eagle", "Colgin", "Dominus"] },
    ],
  },
  us2_groth_reserve: {
    fact: "O Cabernet de topo da vinícola fundada em Oakville em 1981 por Dennis Groth, ex-executivo da empresa de videogames Atari, e sua esposa.",
    quiz: [
      { q: "Que recorde o Groth Reserve Cabernet 1985 estabeleceu?", a: "Primeiro vinho californiano a receber 100 pontos de Robert Parker", x: ["Primeiro vinho levado ao espaço", "Vinho americano vendido mais caro em leilão", "Primeiro vinho fino com tampa de rosca"] },
    ],
  },
  us2_napanook: {
    fact: "Segundo vinho batizado com o nome de um histórico vinhedo de Yountville. É feito pela família Moueix, grande nome de Pomerol, em Bordeaux.",
    quiz: [
      { q: "O Napanook é o segundo vinho de qual vinho?", a: "Dominus", x: ["Opus One", "Harlan Estate", "Insignia"] },
    ],
  },
  us2_frogs_leap_sb: {
    fact: "Vinícola fundada em 1981 por John Williams e Larry Turley. Insiste no cultivo orgânico e de sequeiro, sem irrigação.",
    quiz: [
      { q: "Que vinícola de Napa o nome Frog’s Leap imita de brincadeira?", a: "Stag’s Leap Wine Cellars", x: ["Harlan Estate", "Far Niente", "Chateau Montelena"] },
      { q: "O que era originalmente o lugar onde a Frog’s Leap fez seu primeiro vinho?", a: "Uma fazenda de criação de rãs", x: ["Uma agência dos correios", "Uma estação de trem", "Um mosteiro"] },
    ],
  },
  us2_mondavi_fume: {
    fact: "Em 1968, Robert Mondavi lançou seu Sauvignon Blanc seco amadurecido em carvalho com um novo nome: “Fumé Blanc”.",
    quiz: [
      { q: "Em que vinho francês Robert Mondavi se inspirou para criar o nome “Fumé Blanc”?", a: "Pouilly-Fumé", x: ["Sancerre", "Muscadet", "Chablis"] },
    ],
  },
  us2_mondavi_private: {
    fact: "Marca californiana de vinhos do dia a dia com o nome de Robert Mondavi. Usa uvas de várias regiões para vinhos de preço acessível.",
    quiz: [
      { q: "Onde Robert Mondavi fundou em 1966 a primeira grande vinícola de Napa depois da Lei Seca?", a: "Oakville", x: ["Calistoga", "Yountville", "Carneros"] },
    ],
  },
  us2_trefethen_chard: {
    fact: "Vinícola familiar fundada em 1968 pelo casal Gene e Katie Trefethen em Oak Knoll, no sul de Napa. Usa um prédio de madeira do século XIX.",
    quiz: [
      { q: "Que avaliação o Chardonnay Trefethen 1976 recebeu na “Olimpíada do Vinho” de Paris, em 1979?", a: "Melhor Chardonnay do mundo", x: ["Branco de maior potencial de guarda", "Melhor vinícola estreante", "Melhor vinho de sobremesa"] },
    ],
  },
  us2_freemark_abbey: {
    fact: "Grande casa de St. Helena, herdeira da vinícola fundada em 1886 pela pioneira Josephine Tychson. Teve tinto e branco no “Julgamento de Paris”.",
    quiz: [
      { q: "Como foi criado o nome Freemark Abbey?", a: "Juntando pedaços dos nomes dos três sócios que compraram a vinícola", x: ["A vinícola funcionava num antigo mosteiro", "Homenageia um mosteiro da terra natal do fundador", "É o nome do primeiro dono do vinhedo"] },
    ],
  },
  us2_charles_krug: {
    fact: "A vinícola mais antiga do Napa Valley, fundada em 1861 pelo prussiano Charles Krug. Depois da Lei Seca, renasceu com novos donos.",
    quiz: [
      { q: "Que família comprou a Charles Krug em 1943 e a comanda até hoje?", a: "Família Mondavi", x: ["Família Gallo", "Família Beringer", "Família Martini"] },
      { q: "Quem deixou a Charles Krug após brigar com o irmão Peter e fundou a própria vinícola em 1966?", a: "Robert Mondavi", x: ["Louis M. Martini", "Joe Heitz", "Warren Winiarski"] },
    ],
  },
  us2_louis_martini: {
    fact: "Fundada em St. Helena em 1933, ano do fim da Lei Seca, pelo italiano Louis M. Martini. Também é famosa pelo Cabernet do vinhedo Monte Rosso, em Sonoma.",
    quiz: [
      { q: "Que empresa, a maior de vinhos dos EUA, comprou a Louis M. Martini em 2002?", a: "E&J Gallo", x: ["Constellation Brands", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us2_abreu_madrona: {
    fact: "Vinho que David Abreu, que cuida dos vinhedos de várias vinícolas cult de Napa, faz com o próprio nome. O Madrona Ranch é um vinhedo nas colinas a oeste de St. Helena.",
    quiz: [
      { q: "Por qual atividade David Abreu ficou famoso primeiro em Napa?", a: "Especialista em manejo e cultivo de vinhedos", x: ["Crítico de vinhos", "Fabricante de barricas", "Leiloeiro de vinhos"] },
    ],
  },
  us2_sterling: {
    fact: "Fundada em Calistoga em 1964 pelo inglês Peter Newton. O prédio branco no alto da colina lembra a ilha grega de Míconos, onde ele viveu.",
    quiz: [
      { q: "O que os visitantes da Sterling Vineyards usam para subir até a vinícola no alto da colina?", a: "Um teleférico (gôndola aérea)", x: ["Uma locomotiva a vapor", "Um balão", "Uma carruagem puxada a cavalo"] },
    ],
  },
  us2_clos_pegase: {
    fact: "Vinícola fundada em Calistoga pelo casal de colecionadores de arte Jan e Mitsuko Shrem. O prédio saiu de um concurso de projetos organizado com o Museu de Arte Moderna de São Francisco.",
    quiz: [
      { q: "Que arquiteto pós-moderno projetou o prédio da Clos Pegase?", a: "Michael Graves", x: ["Frank Gehry", "Philip Johnson", "Renzo Piano"] },
    ],
  },
  us2_castello_amorosa: {
    fact: "Vinícola dentro de um castelo em estilo toscano do século XIII, construído perto de Calistoga por Dario Sattui depois de uma longa obra. Tem fosso, ponte levadiça e até câmara de tortura.",
    quiz: [
      { q: "Que vinícola de Napa a família de Dario Sattui, criador do Castello di Amorosa, já administrava antes?", a: "V. Sattui", x: ["Beringer", "Charles Krug", "Sterling Vineyards"] },
    ],
  },
  us2_schramsberg_jschram: {
    fact: "O espumante de topo da Schramsberg, feito só com os melhores vinhos-base e longamente amadurecido. O nome vem de Jacob Schram, que abriu a vinícola ali em 1862.",
    quiz: [
      { q: "Que escritor visitou a Schramsberg em 1880 e chamou seu vinho de “poesia engarrafada”?", a: "Robert Louis Stevenson", x: ["Mark Twain", "Jack London", "John Steinbeck"] },
    ],
  },
  us2_chappellet: {
    fact: "Fundada em 1967 por Donn e Molly Chappellet nas encostas de Pritchard Hill, foi a primeira vinícola dessa colina. É famosa pelo Cabernet firme de montanha.",
    quiz: [
      { q: "Que forma tem o prédio da vinícola Chappellet?", a: "Pirâmide", x: ["Cúpula redonda", "Barril gigante", "Fortaleza medieval"] },
    ],
  },
  us2_darioush: {
    fact: "Vinícola fundada em Napa pelo empresário iraniano Darioush Khaledi. O prédio com colunas de pedra, inspirado nos antigos palácios persas, chama a atenção.",
    quiz: [
      { q: "Em que sítio antigo se inspira o prédio da vinícola Darioush?", a: "Persépolis", x: ["Partenon", "Angkor Wat", "Alhambra"] },
    ],
  },
  us2_cain_five: {
    fact: "O vinho emblemático da Cain Vineyard, que mistura castas bordalesas cultivadas em terraços no alto das encostas de Spring Mountain.",
    quiz: [
      { q: "O que significa o “Five” de Cain Five?", a: "Mistura as cinco castas de Bordeaux", x: ["Cinco vinhedos", "Os cinco filhos do fundador", "Lançado após 5 anos de amadurecimento"] },
    ],
  },
  us2_spring_mountain: {
    fact: "Vinícola que abriga a antiga mansão “Miravalle”, nas encostas de Spring Mountain. O Chardonnay 1973 ficou em 4º lugar entre os brancos no “Julgamento de Paris”.",
    quiz: [
      { q: "Que série de TV americana dos anos 1980 usou como cenário a mansão Miravalle, da Spring Mountain Vineyard?", a: "Falcon Crest", x: ["Dallas", "Dinastia", "Twin Peaks"] },
    ],
  },
  us2_newton_unfiltered: {
    fact: "Vinícola fundada em 1977 em Spring Mountain pelo casal Peter e Su Hua Newton. Ficou famosa pelo Chardonnay engarrafado sem filtração, como diz o nome.",
    quiz: [
      { q: "Que vinícola Peter Newton, fundador da Newton Vineyard, havia criado antes em Calistoga?", a: "Sterling Vineyards", x: ["Chateau Montelena", "Schramsberg", "Clos Pegase"] },
      { q: "O que danificou gravemente a vinícola Newton Vineyard em 2020?", a: "Um incêndio florestal (Glass Fire)", x: ["Um terremoto", "Uma enchente", "A filoxera"] },
    ],
  },
  us2_pride_merlot: {
    fact: "Vinícola fundada pela família Pride num antigo vinhedo no topo das montanhas Mayacamas. Cada rótulo informa a proporção de uvas vindas de cada um dos dois condados.",
    quiz: [
      { q: "O que passa bem no meio dos vinhedos e da adega da Pride Mountain Vineyards?", a: "A divisa entre os condados de Napa e Sonoma", x: ["Uma antiga linha de trem", "A falha de San Andreas", "A rodovia da costa do Pacífico"] },
    ],
  },
  us2_mayacamas: {
    fact: "Vinícola de pedra construída no fim do século XIX no alto do Mount Veeder. Faz Cabernets à moda antiga, que precisam de tempo; a safra 1971 participou do “Julgamento de Paris”.",
    quiz: [
      { q: "Que casal comandou a Mayacamas por quase 45 anos, a partir de 1968?", a: "Bob e Elinor Travers", x: ["Jack e Dolores Cakebread", "Dan e Margaret Duckhorn", "Gene e Katie Trefethen"] },
    ],
  },
  us2_lokoya: {
    fact: "Fundada em 1995, faz Cabernets de montanha separados de quatro regiões de Napa: Mount Veeder, Howell Mountain, Spring Mountain e Diamond Mountain.",
    quiz: [
      { q: "De onde vem o nome Lokoya?", a: "De um povo indígena que vivia no Mount Veeder", x: ["Do nome de um missionário espanhol", "De um tipo de rocha vulcânica", "Do nome da filha do fundador"] },
    ],
  },
  us2_cardinale: {
    fact: "Corte de Cabernet de topo feito na vinícola de Oakville com uvas escolhidas em montanhas e vales de todo o Napa.",
    quiz: [
      { q: "Quem fundou a Jackson Family Wines, dona do Cardinale?", a: "Jess Jackson", x: ["Robert Mondavi", "Ernest Gallo", "Chuck Wagner"] },
    ],
  },
  us2_dunn_howell: {
    fact: "Pequena vinícola iniciada por Randy Dunn no fim dos anos 1970 em Howell Mountain. É famosa por Cabernets de montanha firmes, que aguentam décadas.",
    quiz: [
      { q: "Em que vinícola de Napa Randy Dunn foi enólogo antes de abrir a sua?", a: "Caymus", x: ["Silver Oak", "Beringer", "Robert Mondavi"] },
    ],
  },
  us2_cade: {
    fact: "Vinícola fundada em 2005 no topo de Howell Mountain. Faz Cabernets firmes em solo vulcânico, a mais de 400 m de altitude.",
    quiz: [
      { q: "Que vinícola o grupo que fundou a CADE havia criado antes em Oakville?", a: "PlumpJack", x: ["Far Niente", "Screaming Eagle", "Harlan Estate"] },
    ],
  },
  us2_conundrum: {
    fact: "Corte branco lançado em 1989 por Chuck Wagner, da Caymus. Mistura várias castas, como Chardonnay, Sauvignon Blanc e Muscat.",
    quiz: [
      { q: "O que significa o nome Conundrum?", a: "Enigma", x: ["Harmonia", "Dourado", "Aventura"] },
      { q: "Que vinícola de Napa é comandada pela família que lançou o Conundrum?", a: "Caymus", x: ["Silver Oak", "Duckhorn", "Beringer"] },
    ],
  },
  us2_decoy_cab: {
    fact: "Marca lançada pela Duckhorn Vineyards em 1985 para ser apreciada de modo mais descontraído. Hoje faz um Cabernet macio com uvas do condado de Sonoma.",
    quiz: [
      { q: "O que significa “decoy”?", a: "O pato de madeira que o caçador põe na água como chamariz", x: ["Um lago onde os patos descansam", "A corneta que anuncia a caça ao amanhecer", "A cabana do caçador"] },
    ],
  },
  us2_mer_soleil: {
    fact: "Chardonnay feito por Charlie Wagner, da família Wagner (Caymus), nas Santa Lucia Highlands, em Monterey, região fresca soprada pela brisa do mar.",
    quiz: [
      { q: "O que significa Mer Soleil em francês?", a: "Mar e sol", x: ["Montanha e lua", "Vento e chuva", "Colina dourada"] },
    ],
  },
  us2_belle_glos: {
    fact: "Pinot Noir criado por Joe Wagner, da família Wagner (Caymus). A grossa camada de cera vermelha no gargalo é sua marca registrada.",
    quiz: [
      { q: "De quem vem o nome Belle Glos?", a: "Da avó do fundador, Lorna Belle Glos Wagner", x: ["Da filha do fundador", "Do primeiro dono do vinhedo", "De uma vila natal na França"] },
      { q: "O que a cera vermelha no gargalo do Belle Glos homenageia?", a: "O batom vermelho que a avó usava todo dia", x: ["A cor do brasão da vinícola", "A cor da casca da Pinot Noir", "A papoula da Califórnia"] },
    ],
  },
  us2_orin_8years: {
    fact: "Corte à base de Zinfandel criado por Dave Phinney, da Orin Swift. É famoso pelo rótulo com uma foto impactante.",
    quiz: [
      { q: "A que se refere o nome 8 Years in the Desert (8 anos no deserto)?", a: "Aos 8 anos em que se comprometeu a não fazer Zinfandel depois de vender o The Prisoner", x: ["Amadurece 8 anos numa caverna do deserto", "Mistura 8 vinhedos do deserto", "A uma viagem de 8 anos do fundador pelo deserto"] },
    ],
  },
  us2_mumm_napa: {
    fact: "Vinícola de espumantes fundada no Napa Valley por uma casa de Champagne francesa. Faz espumantes com segunda fermentação na garrafa, como o Champagne.",
    quiz: [
      { q: "Que casa de Champagne francesa fundou a Mumm Napa?", a: "G.H. Mumm", x: ["Moët & Chandon", "Taittinger", "Louis Roederer"] },
    ],
  },
  us2_domaine_carneros: {
    fact: "Vinícola de espumantes fundada em 1987 nas colinas de Carneros por uma casa de Champagne francesa. É famosa pelo elegante château no alto da colina.",
    quiz: [
      { q: "Que casa de Champagne fundou a Domaine Carneros?", a: "Taittinger", x: ["Moët & Chandon", "G.H. Mumm", "Louis Roederer"] },
      { q: "Em que château da Champagne se inspira o prédio da Domaine Carneros?", a: "Château de la Marquetterie", x: ["Château de Chambord", "Château de Chenonceau", "Château de Versailles"] },
    ],
  },
  us2_goldeneye: {
    fact: "Vinícola de Pinot Noir fundada em 1996 pelo casal Duckhorn no Anderson Valley, condado de Mendocino. As uvas crescem num vale fresco por onde entra a neblina do mar.",
    quiz: [
      { q: "De onde vem o nome Goldeneye?", a: "De uma espécie de pato (o olho-dourado)", x: ["Do filme de James Bond", "Das bagas douradas de tão maduras", "Do apelido do casal fundador"] },
    ],
  },
  us2_verite_lamuse: {
    fact: "Vinho ao estilo bordalês feito com uvas das montanhas de Sonoma. São três: “La Muse”, à base de Merlot; “La Joie”, à base de Cabernet; e “Le Désir”, à base de Cabernet Franc.",
    quiz: [
      { q: "Que enólogo de Bordeaux faz os vinhos Vérité?", a: "Pierre Seillan", x: ["Michel Rolland", "Christian Moueix", "Bernard Portet"] },
    ],
  },
  us2_kenwood_jacklondon: {
    fact: "Feito com uvas de terraços de lava no antigo rancho do escritor Jack London. O rótulo traz a cabeça de lobo que ele usava como ex-libris.",
    quiz: [
      { q: "Qual é a obra mais famosa do escritor que dá nome ao Kenwood Jack London Vineyard?", a: "O Chamado da Floresta", x: ["As Vinhas da Ira", "Moby Dick", "As Aventuras de Huckleberry Finn"] },
    ],
  },
  us2_paul_hobbs_rrv: {
    fact: "Vinícola fundada em Sonoma em 1991 por Paul Hobbs, que fez carreira na Robert Mondavi e no Opus One. Também é famoso como consultor de vinícolas em vários países.",
    quiz: [
      { q: "Que vinícola Paul Hobbs cofundou em Mendoza, na Argentina?", a: "Viña Cobos", x: ["Catena Zapata", "Clos de los Siete", "Bodega Norton"] },
    ],
  },
  us2_peter_michael_bellecote: {
    fact: "Vinícola fundada nas encostas do Knights Valley por Sir Peter Michael, empresário britânico de eletrônica e radiodifusão. Cada vinho recebe um nome em francês.",
    quiz: [
      { q: "O que significa Belle Côte em francês?", a: "Bela encosta", x: ["Bela mulher", "Costa azul", "Pequeno castelo"] },
    ],
  },
  us2_marcassin: {
    fact: "Pequena vinícola fundada na costa de Sonoma pela consultora enológica Helen Turley e seu marido, John Wetlaufer. É um Chardonnay cult vendido só por lista de mala direta.",
    quiz: [
      { q: "O que significa Marcassin em francês?", a: "Filhote de javali", x: ["Cervo jovem", "Lebre", "Filhote de raposa"] },
    ],
  },
  us2_ridge_lytton: {
    fact: "Corte de Zinfandel da Ridge, de vinhedos com vinhas de mais de 100 anos no Dry Creek Valley. Com o Geyserville, é um dos dois pilares do Zinfandel da Ridge.",
    quiz: [
      { q: "O que é peculiar nos rótulos da Ridge Vineyards?", a: "Listam todos os ingredientes usados na vinificação", x: ["Trazem as coordenadas GPS do vinhedo", "O enólogo assina cada garrafa", "Informam o clima do dia da colheita"] },
    ],
  },
  us2_rochioli: {
    fact: "Pinot Noir da família Rochioli, que cultiva a terra há várias gerações no Russian River Valley. Os vinhedos da família são considerados joias do Pinot Noir da região.",
    quiz: [
      { q: "Que vinícola cult do Russian River Valley construiu sua fama inicial com as uvas da família Rochioli?", a: "Williams Selyem", x: ["Kosta Browne", "Kistler", "La Crema"] },
    ],
  },
  us2_littorai: {
    fact: "Vinícola de Pinot Noir costeira fundada em 1993 por Ted Lemon e a esposa. O nome vem do latim e significa “litorais”.",
    quiz: [
      { q: "Em que domaine de Meursault Ted Lemon, fundador da Littorai, foi o primeiro americano a ser chefe de vinificação?", a: "Domaine Guy Roulot", x: ["Domaine Leflaive", "Domaine des Comtes Lafon", "Domaine de la Romanée-Conti"] },
    ],
  },
  us2_flowers: {
    fact: "Vinícola de Pinot Noir e Chardonnay fundada por Walt e Joan Flowers numa crista da Sonoma Coast com vista para o Pacífico.",
    quiz: [
      { q: "Que família se associou à Flowers e assumiu a gestão em 2009?", a: "A família Huneeus (Quintessa)", x: ["A família Jackson", "A família Gallo", "A família Mondavi"] },
    ],
  },
  us2_merry_edwards: {
    fact: "Vinícola de Pinot Noir do Russian River Valley fundada em 1997 por Merry Edwards, da primeira geração de enólogas da Califórnia.",
    quiz: [
      { q: "Que casa de Champagne comprou a Merry Edwards em 2019?", a: "Louis Roederer", x: ["Moët & Chandon", "Taittinger", "Bollinger"] },
    ],
  },
  us2_sonoma_cutrer: {
    fact: "Chardonnay popular da Sonoma Coast lançado em 1981. É presença constante nas cartas de vinho dos restaurantes americanos.",
    quiz: [
      { q: "Para que esporte a Sonoma-Cutrer tinha quadras oficiais e chegou a sediar campeonatos mundiais?", a: "Croquet", x: ["Polo", "Golfe", "Tênis"] },
    ],
  },
  us2_hanzell: {
    fact: "Fundada em Sonoma em 1953 por James D. Zellerbach, ex-embaixador dos EUA na Itália. Foi a primeira da Califórnia a adotar a sério o amadurecimento em barricas francesas.",
    quiz: [
      { q: "Como foi criado o nome Hanzell?", a: "Juntando o nome da esposa, Hana, e o sobrenome Zellerbach", x: ["De um antigo topônimo húngaro", "Significa “pequena colina” em alemão", "É o nome do primeiro enólogo"] },
    ],
  },
  us2_buena_vista: {
    fact: "Fundada em Sonoma em 1857, foi a primeira vinícola comercial da Califórnia. Em 2011 o borgonhês Jean-Charles Boisset a comprou e a revitalizou.",
    quiz: [
      { q: "Que pioneiro húngaro fundou a Buena Vista e é chamado de “pai do vinho californiano”?", a: "Agoston Haraszthy", x: ["Charles Krug", "Gustave Niebaum", "Georges de Latour"] },
    ],
  },
  us2_csj_cinq: {
    fact: "Corte bordalês de Sonoma cuja safra 1996 foi eleita “Vinho do Ano” da Wine Spectator em 1999, o primeiro vinho de Sonoma a conseguir isso.",
    quiz: [
      { q: "O que significa Cinq Cépages em francês?", a: "Cinco castas", x: ["Cinco vinhedos", "Quinta colheita", "Cinco irmãos"] },
    ],
  },
  us2_rodney_strong: {
    fact: "Vinícola de Rodney Strong, pioneiro que entrou no negócio do vinho em 1959 e ajudou a fazer do condado de Sonoma uma grande região vinícola.",
    quiz: [
      { q: "Qual era a profissão de Rodney Strong antes de fazer vinho?", a: "Bailarino da Broadway", x: ["Boxeador", "Pianista de jazz", "Locutor de rádio"] },
    ],
  },
  us2_ferrari_carano_fume: {
    fact: "Vinícola fundada em 1981 no Dry Creek Valley pelo casal Don e Rhonda Carano. A mansão de estilo italiano “Villa Fiore” e seus jardins são famosos.",
    quiz: [
      { q: "Que negócio Don Carano, fundador da Ferrari-Carano, administrava em Reno, Nevada?", a: "O hotel-cassino Eldorado", x: ["Uma estação de esqui", "Uma ferrovia", "Uma mina de prata"] },
    ],
  },
  us2_dry_creek_fume: {
    fact: "A primeira vinícola fundada no Dry Creek Valley depois da Lei Seca, criada por David Stare em 1972. Foi a primeira de Sonoma a usar o nome “Fumé Blanc”.",
    quiz: [
      { q: "O que aparece no rótulo da Dry Creek Vineyard?", a: "Um veleiro", x: ["Um farol", "Um falcão", "Uma parreira"] },
    ],
  },
  us2_seghesio_zin: {
    fact: "Grande casa de Zinfandel de Sonoma, iniciada em 1895 quando o italiano Edoardo Seghesio plantou seu primeiro vinhedo de Zinfandel. Resistiu até à Lei Seca.",
    quiz: [
      { q: "Que empresa comprou a Seghesio Family Vineyards em 2011?", a: "Crimson Wine Group", x: ["E&J Gallo", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us2_coppola_claret: {
    fact: "Inspirado num Claret de 1906 que o cineasta Coppola encontrou na adega da antiga vinícola de Napa que comprou. A garrafa vem envolta numa rede dourada.",
    quiz: [
      { q: "“Claret” era originalmente o nome inglês dos tintos de que região?", a: "Bordeaux", x: ["Borgonha", "Rioja", "Toscana"] },
    ],
  },
  us2_sofia_bdb: {
    fact: "Nasceu da promessa de Coppola à filha Sofia de um dia fazer um espumante com o nome dela. É um espumante leve e perfumado.",
    quiz: [
      { q: "Que filme foi dirigido por Sofia Coppola, que dá nome ao Sofia Blanc de Blancs?", a: "Encontros e Desencontros (Lost in Translation)", x: ["O Poderoso Chefão", "Apocalypse Now", "Drácula de Bram Stoker"] },
    ],
  },
  us2_iron_horse: {
    fact: "Casa familiar de espumantes em Green Valley, no Russian River Valley. Desde o jantar da cúpula Reagan-Gorbachev de 1985, é presença frequente em eventos da Casa Branca.",
    quiz: [
      { q: "De onde vem o nome Iron Horse (cavalo de ferro)?", a: "De uma parada da ferrovia que passava por estas terras no século XIX", x: ["De um cavalo de corrida do fundador", "De uma ferradura de ferreiro", "Do nome de uma mina próxima"] },
    ],
  },
  us2_j_cuvee20: {
    fact: "Casa de espumantes fundada em 1986 no Russian River Valley pela filha do fundador da vinícola Jordan. Em 2015 foi comprada pela E&J Gallo.",
    quiz: [
      { q: "O que significa o “J” de J Vineyards?", a: "A fundadora, Judy Jordan", x: ["A inicial de “Jubilee” (festa)", "O formato de J do vinhedo", "John, filho do fundador"] },
    ],
  },
  us2_gloria_ferrer: {
    fact: "A primeira vinícola de espumantes de Carneros, aberta em 1986 pela família Ferrer, grande nome da Cava espanhola.",
    quiz: [
      { q: "Quem é a Gloria de Gloria Ferrer?", a: "A esposa de José Ferrer, da família Ferrer", x: ["A filha do fundador", "Uma santa espanhola", "Uma cantora de ópera"] },
      { q: "Que empresa espanhola de Cava pertence à família Ferrer, fundadora da Gloria Ferrer?", a: "Freixenet", x: ["Codorníu", "Juvé & Camps", "Recaredo"] },
    ],
  },
  us2_korbel_natural: {
    fact: "Casa de espumantes fundada em 1882 pelos três irmãos Korbel no Russian River Valley. Foi usada várias vezes no brinde de posse de presidentes americanos.",
    quiz: [
      { q: "De onde vieram os irmãos Korbel?", a: "Da Boêmia (atual República Tcheca)", x: ["Da Toscana, na Itália", "Da Alsácia, na França", "Da Catalunha, na Espanha"] },
    ],
  },
  us2_turley_oldvines: {
    fact: "Grande casa de Zinfandel fundada por Larry Turley em 1993. Tem buscado e preservado vinhedos californianos com videiras de mais de 100 anos.",
    quiz: [
      { q: "Que vinícola de Napa Larry Turley cofundou antes da Turley Wine Cellars?", a: "Frog’s Leap", x: ["Ridge Vineyards", "Ravenswood", "Seghesio"] },
      { q: "Que famosa consultora enológica é irmã de Larry Turley?", a: "Helen Turley", x: ["Heidi Barrett", "Merry Edwards", "Cathy Corison"] },
    ],
  },
  us2_ravenswood: {
    fact: "Vinícola especializada em Zinfandel fundada por Joel Peterson em 1976. É famosa pelo logotipo com três corvos formando um círculo.",
    quiz: [
      { q: "Qual é o famoso lema da Ravenswood?", a: "No Wimpy Wines (nada de vinhos frouxos)", x: ["In Vino Veritas", "Bottled Poetry", "Time’s Fun When You’re Having Flies"] },
    ],
  },
  us2_menage_a_trois: {
    fact: "Corte tinto criado em 1996 pela vinícola Folie à Deux, de Napa. Doce e macio, liderou a moda dos cortes tintos nos EUA.",
    quiz: [
      { q: "A que se refere o nome Ménage à Trois (“a três”)?", a: "Às três castas misturadas", x: ["Aos três fundadores", "A três vinhedos", "A três fermentações"] },
      { q: "Qual é a marca emblemática da família Trinchero, que comprou o Ménage à Trois em 2004?", a: "Sutter Home", x: ["Barefoot", "Woodbridge", "Kendall-Jackson"] },
    ],
  },
  us2_tablas_esprit: {
    fact: "Fundada em 1989 em Paso Robles pela família francesa Perrin e pelo importador Robert Haas. Plantou mudas de castas do Rhône trazidas da França.",
    quiz: [
      { q: "Que grande casa de Châteauneuf-du-Pape da família Perrin participou da fundação da Tablas Creek?", a: "Château de Beaucastel", x: ["Château Rayas", "Domaine du Vieux Télégraphe", "Château La Nerthe"] },
    ],
  },
  us2_saxum_jb: {
    fact: "Corte ao estilo do Rhône que Justin Smith faz no vinhedo James Berry, a oeste de Paso Robles. A safra 2007 foi eleita “Vinho do Ano” da Wine Spectator em 2010.",
    quiz: [
      { q: "O que significa Saxum em latim?", a: "Rocha", x: ["Sol", "Uva", "Vento"] },
    ],
  },
  us2_laventure: {
    fact: "Vinícola fundada em Paso Robles em 1998 por Stephan Asseo, que fazia vinho em Bordeaux. O nome significa “aventura” em francês.",
    quiz: [
      { q: "Por que Stephan Asseo deixou Bordeaux e foi para Paso Robles?", a: "Queria misturar Syrah e Cabernet sem as amarras das regras", x: ["Seus vinhedos em Bordeaux foram inundados", "Queria fazer espumante", "Para assumir o negócio da família"] },
    ],
  },
  us2_justin_isosceles: {
    fact: "O corte bordalês emblemático da Justin, fundada em Paso Robles em 1981 por Justin Baldwin. Em 2010 foi comprada pela The Wonderful Company, dona da Fiji Water e da POM Wonderful.",
    quiz: [
      { q: "A que se refere o nome Isosceles (triângulo isósceles)?", a: "A um corte de três castas bordalesas", x: ["A três vinhedos em colinas", "Aos três irmãos fundadores", "A 3 anos de amadurecimento"] },
    ],
  },
  us2_daou_sol: {
    fact: "O Cabernet emblemático da vinícola fundada no alto de uma montanha em Paso Robles pelos irmãos libaneses Georges e Daniel Daou. O nome homenageia o pai dos irmãos.",
    quiz: [
      { q: "Que empresa australiana de vinhos comprou a DAOU Vineyards em 2023?", a: "Treasury Wine Estates", x: ["Constellation Brands", "E&J Gallo", "LVMH"] },
    ],
  },
  us2_qupe_syrah: {
    fact: "Pioneira das castas do Rhône na Central Coast, fundada por Bob Lindquist em 1982. Dividia a mesma adega com a Au Bon Climat.",
    quiz: [
      { q: "O que significa Qupé na língua dos indígenas chumash?", a: "Papoula-da-califórnia", x: ["Foca", "Carvalho", "Águia"] },
    ],
  },
  us2_bonny_doon_cigare: {
    fact: "Corte em estilo Châteauneuf-du-Pape feito por Randall Grahm, o “Rhône Ranger”. O rótulo mostra um objeto voador em forma de charuto sobre o vinhedo.",
    quiz: [
      { q: "O que proibia o decreto de 1954 de Châteauneuf-du-Pape satirizado pelo Le Cigare Volant?", a: "O pouso de discos voadores (OVNIs) nos vinhedos", x: ["A colheita noturna", "A colheita mecânica", "Rolhas de plástico"] },
    ],
  },
  us2_foxen_pinot: {
    fact: "Vinícola fundada em 1985 por Dick Doré e Bill Wathen nas terras da família Doré, no Santa Maria Valley. A âncora torta é sua marca registrada.",
    quiz: [
      { q: "De onde vem a âncora do rótulo da Foxen?", a: "De William Benjamin Foxen, antepassado e ex-capitão inglês que usava uma âncora para marcar o gado", x: ["Do missionário espanhol Junípero Serra", "Do almirante Chester Nimitz", "Do pai do primeiro enólogo"] },
    ],
  },
  us2_hitching_post: {
    fact: "Pinot Noir de Santa Barbara feito por Frank Ostini, dono da churrascaria “Hitching Post”, em Buellton, e pelo amigo Gray Hartley.",
    quiz: [
      { q: "Em que filme de 2004 o restaurante e o vinho Hitching Post ficaram famosos?", a: "Sideways", x: ["Bottle Shock", "Um Bom Ano", "Mondovino"] },
    ],
  },
  us2_sanford_pinot: {
    fact: "Vinícola de Sta. Rita Hills que Miles e Jack, protagonistas do filme “Sideways”, visitam primeiro para degustar.",
    quiz: [
      { q: "O que Richard Sanford fez em Sta. Rita Hills em 1971, com Michael Benedict?", a: "Plantou o primeiro Pinot Noir da região", x: ["Abriu a primeira vinícola de espumantes", "Organizou o primeiro leilão de vinhos", "Obteve a primeira certificação orgânica"] },
    ],
  },
  us2_fess_parker: {
    fact: "Vinícola familiar fundada no Santa Ynez Valley pelo ator Fess Parker. É famosa pelo Pinot Noir e pelas castas do Rhône de Santa Barbara.",
    quiz: [
      { q: "Que herói pioneiro americano Fess Parker interpretou numa série da Disney nos anos 1950?", a: "Davy Crockett", x: ["Buffalo Bill", "Wyatt Earp", "Lone Ranger"] },
    ],
  },
  us2_chalone_chard: {
    fact: "Vinícola num planalto calcário perto de Pinnacles. Como na Borgonha, cultiva Chardonnay e Pinot Noir em solo calcário.",
    quiz: [
      { q: "Em que lugar ficou o Chardonnay Chalone 1974 entre os brancos no “Julgamento de Paris” de 1976?", a: "3º lugar", x: ["1º lugar", "6º lugar", "10º lugar"] },
    ],
  },
  us2_wente_morningfog: {
    fact: "Chardonnay da vinícola familiar mais antiga em funcionamento contínuo dos EUA, fundada no Livermore Valley em 1883 pelo alemão Carl Wente.",
    quiz: [
      { q: "Como se chama o clone de Chardonnay que deu origem à maioria dos vinhedos de Chardonnay da Califórnia?", a: "Clone Wente", x: ["Clone Mondavi", "Clone Chablis", "Clone Napa"] },
    ],
  },
  us2_concannon_ps: {
    fact: "Fundada no Livermore Valley em 1883 pelo irlandês James Concannon. Durante a Lei Seca, sobreviveu fazendo vinho de missa.",
    quiz: [
      { q: "O que a Concannon fez pela primeira vez nos EUA nos anos 1960?", a: "Lançou um vinho varietal com o nome Petite Sirah no rótulo", x: ["Usou tampa de rosca num vinho fino", "Fez um espumante rosé", "Vendeu vinho em lata"] },
    ],
  },
  us2_7deadlyzins: {
    fact: "Vinho de sucesso lançado com velhas vinhas de Zinfandel por Michael e David, da família Phillips, que cultiva a terra há gerações em Lodi.",
    quiz: [
      { q: "A que alude o nome 7 Deadly Zins?", a: "Aos sete pecados capitais (Seven Deadly Sins)", x: ["Às sete maravilhas do mundo", "A sete vinhedos", "A sete anos de amadurecimento"] },
    ],
  },
  us2_adelsheim: {
    fact: "Vinícola pioneira do Oregon, que começou em 1971 quando o casal David Adelsheim comprou terras nas colinas do norte do Willamette Valley.",
    quiz: [
      { q: "Quem pintou os retratos de mulher que decoraram por muito tempo os rótulos da Adelsheim?", a: "A cofundadora Ginny Adelsheim", x: ["Andy Warhol", "Norman Rockwell", "Georgia O’Keeffe"] },
    ],
  },
  us2_argyle_brut: {
    fact: "Pioneira do espumante do Oregon, fundada em Dundee em 1987 por um enólogo australiano e o americano Rollin Soles.",
    quiz: [
      { q: "Que enólogo australiano fundou a Argyle com Rollin Soles?", a: "Brian Croser", x: ["Peter Lehmann", "Wolf Blass", "John Duval"] },
    ],
  },
  us2_sokol_blosser: {
    fact: "Vinícola pioneira do Oregon, que plantou uvas nas Dundee Hills em 1971. Dedicou-se cedo ao cultivo e à arquitetura sustentáveis.",
    quiz: [
      { q: "Como foi criado o nome Sokol Blosser?", a: "Juntando os sobrenomes do casal fundador, Susan Sokol e Bill Blosser", x: ["Juntando os nomes de duas vilas", "Significa “colina ensolarada” em polonês", "É o nome do primeiro dono do vinhedo"] },
    ],
  },
  us2_wvv_estate: {
    fact: "Vinícola do Willamette Valley fundada por Jim Bernau em 1983. Esteve na linha de frente da popularização do Pinot Noir do Oregon.",
    quiz: [
      { q: "Qual é a estrutura de propriedade peculiar da Willamette Valley Vineyards?", a: "Empresa listada na Nasdaq, dividida entre muitos pequenos acionistas", x: ["Pertence a uma comunidade monástica", "Pertence a uma universidade estadual", "Pertence a um povo indígena"] },
    ],
  },
  us2_ponzi_tavola: {
    fact: "Vinícola pioneira do Willamette Valley fundada em 1970 pelo casal Dick e Nancy Ponzi. A filha Luisa foi a enóloga por muito tempo.",
    quiz: [
      { q: "Que casa de Champagne comprou a Ponzi Vineyards em 2021?", a: "Bollinger", x: ["Moët & Chandon", "Louis Roederer", "Taittinger"] },
    ],
  },
  us2_resonance: {
    fact: "A primeira vinícola criada fora da França por uma grande casa da Borgonha. Começou em 2013 com a compra do vinhedo Résonance, em Yamhill-Carlton.",
    quiz: [
      { q: "Que négociant da Borgonha fundou a Résonance?", a: "Louis Jadot", x: ["Joseph Drouhin", "Bouchard Père & Fils", "Albert Bichot"] },
    ],
  },
  us2_nicolas_jay: {
    fact: "Vinícola fundada no Oregon em 2014 por Jean-Nicolas Méo, vinicultor de Vosne-Romanée, na Borgonha, e Jay Boberg, executivo de gravadora.",
    quiz: [
      { q: "Que domaine da Borgonha é comandado por Jean-Nicolas Méo, cofundador da Nicolas-Jay?", a: "Domaine Méo-Camuzet", x: ["Domaine Leroy", "Domaine Dujac", "Domaine Georges Roumier"] },
    ],
  },
  us2_columbia_crest_ge: {
    fact: "Grande vinícola de Washington do mesmo grupo da Chateau Ste. Michelle. Fica nas Horse Heaven Hills, com vista para o rio Columbia.",
    quiz: [
      { q: "Que vinho da Columbia Crest foi eleito “Vinho do Ano” da Wine Spectator em 2009?", a: "O Reserve Cabernet Sauvignon 2005", x: ["Grand Estates Merlot", "H3 Cabernet Sauvignon", "Two Vines Red Blend"] },
    ],
  },
  us2_14hands_cab: {
    fact: "Marca de Washington lançada em 2005 pelo grupo Chateau Ste. Michelle. Criada para restaurantes, fez tanto sucesso que virou uma grande marca.",
    quiz: [
      { q: "A que se refere o nome 14 Hands?", a: "À altura dos pequenos cavalos selvagens que corriam pelas Horse Heaven Hills", x: ["A 14 fundadores", "A 14 vinhedos", "A 14 colhedores"] },
    ],
  },
  us2_kung_fu_girl: {
    fact: "Riesling criado por Charles Smith, o rebelde da indústria do vinho de Washington. Em 2016 suas marcas foram vendidas à Constellation Brands.",
    quiz: [
      { q: "O que Charles Smith fazia na Europa antes de fazer vinho?", a: "Empresário de bandas de rock", x: ["Skatista profissional", "Dublê de cinema", "Chef de restaurante"] },
    ],
  },
  us2_andrew_will_sorella: {
    fact: "Corte bordalês da vinícola fundada por Chris Camarda em 1989. Sorella significa “irmã” em italiano e homenageia a irmã falecida dele.",
    quiz: [
      { q: "De quem vem o nome da vinícola Andrew Will?", a: "Do sobrinho Andrew e do filho Will do fundador", x: ["Dos dois irmãos do fundador", "Dos dois donos do primeiro vinhedo", "De um poeta inglês"] },
    ],
  },
  us2_woodward_canyon: {
    fact: "A segunda vinícola do Walla Walla Valley, fundada por Rick Small em 1981. Construiu cedo a fama do Cabernet de Washington.",
    quiz: [
      { q: "O que caracteriza o rótulo da Woodward Canyon Artist Series?", a: "Traz a obra de um artista diferente a cada ano", x: ["Traz uma foto da família do fundador", "Traz uma foto aérea do vinhedo", "Traz um gráfico do clima da safra"] },
    ],
  },
  us2_lecole41_semillon: {
    fact: "A terceira vinícola do Walla Walla Valley, aberta em 1983 numa antiga escola de Frenchtown construída em 1915. L’Ecole significa “escola” em francês.",
    quiz: [
      { q: "O que é o “41” de L’Ecole No 41?", a: "O número do distrito escolar a que o prédio pertencia", x: ["O 41º aniversário do fundador", "A rodovia 41", "41 vinhedos"] },
    ],
  },
  us2_long_shadows_sequel: {
    fact: "Syrah da Long Shadows, projeto em que Allen Shoup, que comandou a Chateau Ste. Michelle, confiou um vinho a cada enólogo de renome mundial.",
    quiz: [
      { q: "Em que grande casa australiana John Duval, que faz o Sequel, foi enólogo-chefe?", a: "Penfolds", x: ["Henschke", "Torbreck", "Two Hands"] },
    ],
  },
  us2_long_shadows_pedestal: {
    fact: "Tinto de Washington à base de Merlot que a Long Shadows confiou a um consultor-estrela de Bordeaux.",
    quiz: [
      { q: "Que famoso consultor enológico de Bordeaux faz o Pedestal Merlot?", a: "Michel Rolland", x: ["Pierre Seillan", "Stéphane Derenoncourt", "Eric Boissenot"] },
    ],
  },
  us2_long_shadows_feather: {
    fact: "Cabernet de Washington que a Long Shadows confiou a um mestre do Cabernet de montanha de Napa.",
    quiz: [
      { q: "Que vinicultor de Howell Mountain, em Napa, faz o Feather Cabernet?", a: "Randy Dunn", x: ["Heidi Barrett", "Paul Hobbs", "Philippe Melka"] },
    ],
  },
  us2_long_shadows_poetsleap: {
    fact: "Riesling de Washington que a Long Shadows confiou ao vinicultor de uma grande casa do Nahe, na Alemanha.",
    quiz: [
      { q: "Que vinicultor do Nahe, na Alemanha, faz o Poet’s Leap Riesling?", a: "Armin Diel", x: ["Ernst Loosen", "Egon Müller", "Helmut Dönnhoff"] },
    ],
  },
  us2_doubleback: {
    fact: "Vinícola fundada em Walla Walla, sua terra natal, pelo astro do esporte Drew Bledsoe depois de se aposentar. Chris Figgins, da Leonetti, conduziu as primeiras vinificações.",
    quiz: [
      { q: "Qual era a profissão de Drew Bledsoe, fundador da Doubleback?", a: "Quarterback da NFL", x: ["Jogador da NBA", "Arremessador da MLB", "Golfista profissional"] },
      { q: "Que ideia o nome Doubleback carrega?", a: "Voltar para casa", x: ["Amadurece duas vezes", "Mistura dois vinhedos", "É o nome de uma jogada de futebol americano"] },
    ],
  },
  us2_wiemer_dry_riesling: {
    fact: "Grande casa de Riesling dos Finger Lakes, fundada em 1979 às margens do lago Seneca por Hermann J. Wiemer, de Bernkastel, no Mosel.",
    quiz: [
      { q: "Que outro negócio Hermann J. Wiemer mantém junto com a vinícola?", a: "Um viveiro que enxerta e vende mudas de castas europeias", x: ["Uma queijaria", "Uma sidraria", "Uma tanoaria"] },
    ],
  },
  us2_drfrank_rkatsiteli: {
    fact: "Branco que o dr. Konstantin Frank fez com uma casta resistente ao frio da antiga União Soviética, trazida para os Finger Lakes.",
    quiz: [
      { q: "De que país é originária a Rkatsiteli plantada pelo dr. Frank nos Finger Lakes?", a: "Geórgia", x: ["Armênia", "Grécia", "Bulgária"] },
    ],
  },
  us2_wolffer_rose: {
    fact: "Rosé da vinícola fundada nos Hamptons, em Long Island, em 1988 por Christian Wölffer, de Hamburgo. É quase um símbolo do verão nova-iorquino.",
    quiz: [
      { q: "Como se chama o rosé que a Wölffer Estate lançou graças ao sucesso dos rosés?", a: "Summer in a Bottle", x: ["Whispering Angel", "Miraval", "Hampton Water"] },
    ],
  },
  us2_bedell_merlot: {
    fact: "Vinícola do North Fork de Long Island. Seu Merlot 2009 foi servido no almoço da posse presidencial de 2013, o primeiro vinho de Nova York usado numa posse.",
    quiz: [
      { q: "Qual é a franquia mais famosa da New Line Cinema, comandada por Michael Lynne, que comprou a Bedell Cellars em 2000?", a: "O Senhor dos Anéis", x: ["Harry Potter", "Star Wars", "O Poderoso Chefão"] },
    ],
  },
  us2_barboursville_octagon: {
    fact: "Vinícola da Virgínia fundada em 1976 pela família italiana Zonin. Na propriedade estão as ruínas da antiga mansão de um governador, projetada por Thomas Jefferson.",
    quiz: [
      { q: "De onde vem o nome Octagon (octógono)?", a: "Da sala octogonal da mansão projetada por Jefferson", x: ["De barris octogonais", "De um corte de oito castas", "De um vinhedo de oito parcelas"] },
    ],
  },
  us2_rdv_lostmountain: {
    fact: "Fundada por Rutger de Vink, ex-fuzileiro naval, numa colina de granito no sopé das Blue Ridge, na Virgínia; a primeira safra saiu em 2008. Recentemente foi vendida à família dona do Château Montrose.",
    quiz: [
      { q: "O que é “RdV”?", a: "As iniciais do fundador e a abreviação de “rendez-vous”", x: ["Sigla francesa para “tinto da Virgínia”", "As coordenadas do vinhedo", "O nome de um rio próximo"] },
    ],
  },
  us2_early_mountain_pm: {
    fact: "Vinícola fundada em 2012 no sopé das Blue Ridge, na Virgínia, por um casal de empresários da internet. Aposta na Petit Manseng, a branca emblemática da Virgínia.",
    quiz: [
      { q: "Que empresa de internet Steve Case, fundador da Early Mountain, cofundou?", a: "AOL", x: ["Yahoo", "Netscape", "eBay"] },
    ],
  },
  us2_gruet_brut: {
    fact: "Casa de espumantes fundada por uma família de Champagne que comprou terras num planalto do Novo México em 1984. Faz espumantes pelo mesmo método do Champagne.",
    quiz: [
      { q: "Em que região francesa a família Gruet fazia vinho originalmente?", a: "Champagne", x: ["Alsácia", "Borgonha", "Loire"] },
    ],
  },
  us2_missionhill_reserve_chard: {
    fact: "Vinícola no alto de uma colina com vista para o lago Okanagan. É famosa pelo prédio que lembra um mosteiro e pela alta torre do sino.",
    quiz: [
      { q: "Que prêmio o Chardonnay Mission Hill 1992 recebeu no International Wine & Spirit Competition (IWSC) de Londres, em 1994?", a: "Troféu de melhor Chardonnay do mundo", x: ["Prêmio de melhor icewine", "Prêmio de melhor espumante", "Prêmio de melhor corte tinto"] },
    ],
  },
  us2_burrowing_owl_merlot: {
    fact: "Vinícola fundada por Jim Wyse na zona desértica do sul do Okanagan. O nome vem da coruja-buraqueira, que estava desaparecendo da região.",
    quiz: [
      { q: "O que a Burrowing Owl faz com a taxa cobrada pelas degustações?", a: "Doa a entidades de proteção da coruja-buraqueira", x: ["Financia bolsas para os trabalhadores do vinhedo", "Compra barricas de carvalho", "Doa ao corpo de bombeiros local"] },
    ],
  },
  us2_quails_gate_foch: {
    fact: "Vinícola da família Stewart, que cultiva a terra em West Kelowna desde 1908. Com videiras velhas plantadas nos anos 1960, faz um tinto intenso.",
    quiz: [
      { q: "Quem a uva “Maréchal Foch” homenageia?", a: "Ferdinand Foch, comandante supremo dos Aliados na Primeira Guerra Mundial", x: ["Napoleão Bonaparte", "O marquês de La Fayette", "Charles de Gaulle"] },
    ],
  },
  us2_osoyoos_larose: {
    fact: "Vinícola ao estilo bordalês fundada em 1998 às margens do lago Osoyoos pelo grupo bordalês Taillan e pela canadense Vincor. Hoje pertence só ao Taillan.",
    quiz: [
      { q: "De que château de Bordeaux do grupo Taillan vem o “Larose” de Osoyoos Larose?", a: "Château Gruaud Larose", x: ["Château Latour", "Château Lagrange", "Château Lafon-Rochet"] },
    ],
  },
  us2_nkmip_syrah: {
    fact: "Vinícola em Osoyoos, na zona desértica do Canadá. Nk’Mip significa “terra baixa” na língua indígena.",
    quiz: [
      { q: "Que recorde a Nk’Mip Cellars detém?", a: "Primeira vinícola da América do Norte de propriedade de uma comunidade indígena", x: ["Primeiro icewine do Canadá", "Primeira certificação orgânica do Canadá", "Primeira casa de espumantes da América do Norte"] },
    ],
  },
  us2_summerhill_cipes: {
    fact: "O espumante emblemático da vinícola orgânica fundada em Kelowna em 1986 pela família Cipes. À base de Riesling, é feito com segunda fermentação na garrafa.",
    quiz: [
      { q: "O que a Summerhill Pyramid Winery faz na pirâmide construída à imagem da Grande Pirâmide de Gizé?", a: "Amadurece os vinhos", x: ["Promove degustações", "Seca as uvas", "Fabrica barricas"] },
    ],
  },
  us2_clos_jordanne: {
    fact: "Vinícola de Niagara criada pela borgonhesa Boisset em parceria com a canadense Vincor. A safra 2005 superou grandes Borgonhas e Californianos e ficou em 1º lugar no “Julgamento de Montreal” de 2009.",
    quiz: [
      { q: "Que arquiteto projetou a vinícola do Le Clos Jordanne, que acabou nunca sendo construída?", a: "Frank Gehry", x: ["Renzo Piano", "Tadao Ando", "Zaha Hadid"] },
    ],
  },
  us2_peller_ice_cuvee: {
    fact: "Espumante de Niagara feito pelo método champenoise. Na etapa final, um ingrediente bem canadense lhe dá um leve toque doce.",
    quiz: [
      { q: "O que é adicionado na dosagem final do Ice Cuvée?", a: "Icewine de Vidal", x: ["Xarope de bordo", "Mel", "Aguardente de maçã"] },
    ],
  },
  us2_gretzky_cab_merlot: {
    fact: "Corte tinto da vinícola e destilaria de uísque fundada em Niagara-on-the-Lake pela lenda do hóquei no gelo Wayne Gretzky.",
    quiz: [
      { q: "Que número de camisa de Wayne Gretzky aparece com frequência na marca de vinhos?", a: "99", x: ["66", "87", "9"] },
    ],
  },
};

export default T;
