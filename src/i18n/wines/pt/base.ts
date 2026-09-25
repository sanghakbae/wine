import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  lafite: {
    fact: "Foi o primeiro nome listado entre os Premiers Crus na classificação do Médoc de 1855. O rótulo traz uma gravura do château com sua torre.",
    quiz: [
      { q: "Que família comprou o Château Lafite Rothschild em 1868?", a: "Família Rothschild", x: ["Família Orléans", "Casa de Bourbon", "Família Médici"] },
      { q: "Qual é o segundo vinho do Lafite Rothschild?", a: "Carruades de Lafite", x: ["Les Forts de Latour", "Pavillon Rouge du Château Margaux", "Le Petit Mouton"] },
    ],
  },
  margaux: {
    fact: "Château neoclássico apelidado de “Versalhes do Médoc”. O rótulo com a gravura do pórtico de colunas é sua marca registrada.",
    quiz: [
      { q: "Qual é o segundo vinho do Château Margaux?", a: "Pavillon Rouge du Château Margaux", x: ["Carruades de Lafite", "Les Forts de Latour", "Le Clarence de Haut-Brion"] },
      { q: "Como se chama o vinho branco feito pelo Château Margaux?", a: "Pavillon Blanc", x: ["Aile d’Argent", "Blanc de Lynch-Bages", "Musigny Blanc"] },
    ],
  },
  latour: {
    fact: "A torre com um leão no rótulo é vestígio de uma fortaleza da Guerra dos Cem Anos. Desde 2012 o château deixou de vender en primeur e só lança os vinhos depois de amadurecidos.",
    quiz: [
      { q: "Que forma de venda o Château Latour abandonou a partir de 2012?", a: "En primeur (venda antecipada)", x: ["Venda em leilão", "Exportação", "Venda em garrafas magnum"] },
      { q: "Qual é o segundo vinho do Latour?", a: "Les Forts de Latour", x: ["Carruades de Lafite", "Le Petit Mouton", "Clos du Marquis"] },
    ],
  },
  mouton: {
    fact: "Desde 1945, a cada ano um artista como Chagall, Picasso ou Warhol pinta a parte de cima do rótulo. É o único château promovido de segundo a primeiro cru, em 1973.",
    quiz: [
      { q: "Em que ano o Mouton Rothschild foi promovido de segundo a primeiro cru?", a: "1973", x: ["1855", "1945", "1982"] },
      { q: "Que símbolo aparece no rótulo do Mouton Rothschild de 1945?", a: "O V da vitória", x: ["A pomba da paz", "A Torre Eiffel", "Um carneiro coroado de louros"] },
    ],
  },
  hautbrion: {
    fact: "Na classificação de 1855, foi o único primeiro cru de fora do Médoc, vindo de Graves. No século XVII, foi também o primeiro vinho vendido pelo nome em Londres.",
    quiz: [
      { q: "Que posição o Château Haut-Brion recebeu na classificação de 1855?", a: "Primeiro cru (Premier Cru)", x: ["Segundo cru", "Terceiro cru", "Quinto cru"] },
      { q: "Que banqueiro americano comprou o Château Haut-Brion em 1935?", a: "Clarence Dillon", x: ["J.P. Morgan", "John D. Rockefeller", "Andrew Mellon"] },
    ],
  },
  petrus: {
    fact: "Lenda de Pomerol feita com quase 100% de Merlot. A figura do rótulo é São Pedro (Petrus) segurando as chaves do céu.",
    quiz: [
      { q: "Quem aparece no rótulo do Pétrus?", a: "São Pedro com as chaves", x: ["São Paulo", "Baco", "Napoleão"] },
      { q: "Por qual tipo de solo o vinhedo do Pétrus é famoso?", a: "Argila azul", x: ["Cascalho calcário", "Granito", "Cinza vulcânica"] },
    ],
  },
  yquem: {
    fact: "O auge dos vinhos doces de Sauternes, feitos com uvas atacadas pela podridão nobre (Botrytis). Foi o único a receber a categoria “Premier Cru Supérieur” em 1855. A pista é o dourado na garrafa transparente.",
    quiz: [
      { q: "Que categoria única o Château d’Yquem recebeu na classificação de 1855?", a: "Premier Cru Supérieur", x: ["Premier Grand Cru Classé A", "Grand Cru", "Cru Bourgeois"] },
      { q: "Que fungo murcha as uvas do Yquem e concentra seu açúcar?", a: "Botrytis cinerea (podridão nobre)", x: ["Penicillium", "Levedura de flor", "Oídio"] },
    ],
  },
  chevalblanc: {
    fact: "Gigante de Saint-Émilion com alta proporção de Cabernet Franc. Ficou famoso no filme “Sideways” pela garrafa de 1961 que o protagonista guardava com carinho.",
    quiz: [
      { q: "Que safra de Cheval Blanc o protagonista de “Sideways” guardava para uma ocasião especial?", a: "1961", x: ["1982", "1947", "2000"] },
    ],
  },
  drc: {
    fact: "Um único vinhedo de pouco mais de 1,8 ha produz cerca de 6 mil garrafas por ano. Cada rótulo traz o número de série da garrafa.",
    quiz: [
      { q: "Qual é a área aproximada do vinhedo Romanée-Conti?", a: "Cerca de 1,8 ha", x: ["Cerca de 18 ha", "Cerca de 50 ha", "Cerca de 0,2 ha"] },
      { q: "De quem vem o “Conti” de Romanée-Conti?", a: "Do príncipe de Conti, que comprou o vinhedo em 1760", x: ["De um general de Napoleão", "Do papa Conti III", "De um monge vinicultor chamado Conti"] },
    ],
  },
  jadot: {
    fact: "Négociant de Beaune famoso pelo brasão com o rosto de Baco (deus do vinho) no rótulo. Fundado em 1859.",
    quiz: [
      { q: "De quem é o rosto no brasão do rótulo da Louis Jadot?", a: "Baco (deus do vinho)", x: ["Poseidon", "São Vicente", "O fundador Louis Jadot"] },
      { q: "Em que ano a Louis Jadot foi fundada?", a: "1859", x: ["1729", "1920", "1966"] },
    ],
  },
  duboeuf: {
    fact: "Vinho novo lançado ao mesmo tempo no mundo todo na terceira quinta-feira de novembro. O rótulo florido, que muda a cada ano, é o seu símbolo.",
    quiz: [
      { q: "Quando o Beaujolais Nouveau é lançado?", a: "Na terceira quinta-feira de novembro", x: ["Na primeira sexta-feira de novembro", "Em 1º de dezembro", "No último sábado de outubro"] },
      { q: "Que método de fermentação permite beber o Beaujolais Nouveau tão cedo?", a: "Maceração carbônica", x: ["Solera", "Appassimento", "Segunda fermentação na garrafa"] },
    ],
  },
  beaucastel: {
    fact: "Grande nome de Châteauneuf-du-Pape que usa todas as 13 castas autorizadas. As garrafas da região muitas vezes trazem em relevo a tiara papal e as chaves de São Pedro.",
    quiz: [
      { q: "Quantas castas autorizadas em Châteauneuf-du-Pape o Château de Beaucastel usa?", a: "13", x: ["3", "7", "21"] },
      { q: "O que significa o nome “Châteauneuf-du-Pape”?", a: "Castelo novo do papa", x: ["Vinhedo do papa", "Castelo novo do rei", "Nove castelos"] },
    ],
  },
  domperignon: {
    fact: "Champagne de prestígio feito só em anos de boa colheita. Tem rótulo em forma de escudo e garrafa de estilo antigo, e o nome vem do monge Pierre Pérignon, do século XVII.",
    quiz: [
      { q: "Quem inspirou o nome Dom Pérignon?", a: "Um monge beneditino do século XVII", x: ["Um general de Napoleão", "O fundador da família Moët", "O cozinheiro de Luís XIV"] },
      { q: "Em que anos o Dom Pérignon é produzido?", a: "Só em anos de boa colheita", x: ["Todos os anos", "Em todo ano bissexto", "Uma vez a cada 10 anos"] },
    ],
  },
  moet: {
    fact: "A casa de Champagne que mais vende no mundo. “Impérial” vem de sua ligação com o imperador Napoleão.",
    quiz: [
      { q: "Que personagem está ligado ao nome “Impérial” da Moët & Chandon?", a: "Napoleão", x: ["Luís XIV", "Maria Antonieta", "Charles de Gaulle"] },
      { q: "Em que ano a Moët & Chandon foi fundada?", a: "1743", x: ["1829", "1668", "1921"] },
    ],
  },
  veuve: {
    fact: "“Veuve” significa viúva. Viúva aos 27 anos, Madame Clicquot assumiu a empresa e criou a remuage, técnica de girar as garrafas para juntar os sedimentos.",
    quiz: [
      { q: "O que significa “Veuve” em francês?", a: "Viúva", x: ["Senhora idosa", "Rainha", "Filha"] },
      { q: "Que técnica, criada por Madame Clicquot, gira as garrafas para juntar os sedimentos no gargalo?", a: "Remuage", x: ["Dégorgement", "Solera", "Bâtonnage"] },
    ],
  },
  cristal: {
    fact: "Garrafa transparente criada para o czar Alexandre II da Rússia. Conta-se que o fundo côncavo (punt) foi eliminado para que ninguém pudesse esconder uma bomba ali.",
    quiz: [
      { q: "Para quem o Cristal foi criado originalmente?", a: "O czar Alexandre II da Rússia", x: ["Napoleão III", "A rainha Vitória", "Luís XVI"] },
      { q: "Em que a garrafa do Cristal difere das outras garrafas de Champagne?", a: "É transparente e não tem fundo côncavo (punt)", x: ["É revestida de metal", "Tem o gargalo bojudo", "É quadrada"] },
    ],
  },
  armand: {
    fact: "A garrafa dourada e metalizada com um ás de espadas de estanho lhe valeu o apelido “Ace of Spades”. Em 2021 a LVMH comprou metade da marca.",
    quiz: [
      { q: "Qual é o apelido do Armand de Brignac?", a: "Ace of Spades (ás de espadas)", x: ["Golden Crown", "Black Queen", "Royal Heart"] },
      { q: "Que grupo comprou metade do Armand de Brignac em 2021?", a: "LVMH", x: ["Kering", "Pernod Ricard", "Diageo"] },
    ],
  },
  pj: {
    fact: "As anêmonas brancas desenhadas em 1902 pelo vidreiro art nouveau Émile Gallé são esmaltadas diretamente na garrafa.",
    quiz: [
      { q: "Que flor aparece na garrafa do Belle Époque?", a: "Anêmona", x: ["Rosa", "Lírio", "Lavanda"] },
      { q: "Que artista art nouveau desenhou a decoração floral do Belle Époque?", a: "Émile Gallé", x: ["Alfons Mucha", "René Lalique", "Gustav Klimt"] },
    ],
  },
  ruinart: {
    fact: "Fundada em 1729, é a casa de Champagne mais antiga. Engarrafa 100% Chardonnay numa garrafa redonda e transparente inspirada nas do século XVIII.",
    quiz: [
      { q: "Em que ano a Ruinart foi fundada?", a: "1729", x: ["1743", "1811", "1876"] },
      { q: "O que eram originalmente as “crayères”, as caves de giz onde a Ruinart amadurece seu Champagne?", a: "Pedreiras da época romana", x: ["Catacumbas de um mosteiro medieval", "Abrigos antiaéreos da Segunda Guerra", "Antigas minas de carvão"] },
    ],
  },
  trimbach: {
    fact: "Casa da Alsácia em atividade desde 1626. Por lei, os vinhos da Alsácia só podem ser engarrafados na garrafa alta e fina chamada “flûte”.",
    quiz: [
      { q: "Em que ano a família Trimbach começou a fazer vinho?", a: "1626", x: ["1789", "1855", "1920"] },
      { q: "Qual é o lendário Riesling de vinhedo único da Trimbach?", a: "Clos Sainte Hune", x: ["Scharzhofberg", "Clos des Mouches", "Hill of Grace"] },
    ],
  },
  egonmuller: {
    fact: "Riesling lendário do vinhedo Scharzhofberg, às margens do rio Saar. Seu Trockenbeerenauslese é considerado o vinho branco mais caro do mundo.",
    quiz: [
      { q: "Qual é a categoria mais cara do Egon Müller Scharzhofberger?", a: "Trockenbeerenauslese (TBA)", x: ["Kabinett", "Spätlese", "Grosses Gewächs"] },
      { q: "Onde são vendidos principalmente os melhores vinhos de Egon Müller?", a: "No leilão VDP de Trier", x: ["Em sorteio online", "No en primeur de Bordeaux", "Por venda postal a sócios"] },
    ],
  },
  drloosen: {
    fact: "Riesling do Mosel famoso pelo rótulo com um grande “Dr. L”. Tradicionalmente, os vinhos do Mosel usavam garrafas verdes, e os do Reno, marrons.",
    quiz: [
      { q: "Quem comanda a vinícola Dr. Loosen?", a: "Ernst Loosen", x: ["Egon Müller", "Wilhelm Weil", "Helmut Dönnhoff"] },
      { q: "Que Riesling a Dr. Loosen faz em parceria com a americana Chateau Ste. Michelle?", a: "Eroica", x: ["Opus One", "Almaviva", "Seña"] },
    ],
  },
  bluenun: {
    fact: "Nascida nos anos 1920, tornou-se na década de 1980 a marca de vinho mais vendida do mundo. O nome vem das freiras de hábito azul do rótulo.",
    quiz: [
      { q: "De que elemento do rótulo vem o nome Blue Nun?", a: "Freiras de hábito azul", x: ["Uvas azuis", "As águas azuis do Reno", "A filha do fundador"] },
    ],
  },
  juliusspital: {
    fact: "A garrafa achatada e arredondada “Bocksbeutel” é protegida por lei e reservada aos vinhos da Francônia. A Juliusspital é uma vinícola mantida por um hospital beneficente fundado em 1576.",
    quiz: [
      { q: "Quem administra a vinícola Juliusspital?", a: "Uma fundação hospitalar beneficente de 1576", x: ["A casa real da Baviera", "A Universidade de Würzburg", "Um mosteiro beneditino"] },
    ],
  },
  sassicaia: {
    fact: "O pioneiro dos “supertoscanos”. Foi o primeiro vinho italiano a ter uma denominação de origem exclusiva de uma só vinícola (Bolgheri Sassicaia DOC). A estrela do rótulo é uma rosa dos ventos.",
    quiz: [
      { q: "O que é a estrela do rótulo do Sassicaia?", a: "Uma rosa dos ventos", x: ["A estrela de Davi", "O brasão dos Médici", "A Estrela Polar"] },
      { q: "O que significa o nome “Sassicaia”?", a: "Terra pedregosa", x: ["Brisa do mar", "Colina do caçador", "Terra vermelha"] },
    ],
  },
  gaja: {
    fact: "Famoso pelo rótulo branco com apenas quatro letras pretas em negrito: “GAJA”. Angelo Gaja levou o Barbaresco ao topo mundial.",
    quiz: [
      { q: "Quem transformou a Gaja numa vinícola de fama mundial?", a: "Angelo Gaja", x: ["Bruno Giacosa", "Piero Antinori", "Giacomo Conterno"] },
      { q: "Em que ano a vinícola Gaja foi fundada?", a: "1859", x: ["1920", "1961", "1783"] },
    ],
  },
  chianti: {
    fact: "O “fiasco”, de fundo redondo envolto em palha, é o símbolo do Chianti. A palha protegia a garrafa para que não quebrasse no transporte.",
    quiz: [
      { q: "Qual era a função original da palha que envolve a garrafa de Chianti?", a: "Proteger a garrafa no transporte", x: ["Manter o vinho fresco", "Bloquear a luz do sol", "Evitar falsificações"] },
      { q: "Que animal é o símbolo do selo do Chianti Classico?", a: "O galo negro (Gallo Nero)", x: ["O leão vermelho", "A pomba branca", "O lobo dourado"] },
    ],
  },
  masi: {
    fact: "Tinto denso e potente, feito com uvas secas por mais de três meses (appassimento) para concentrar o açúcar. “Amarone” significa “com um toque amargo”.",
    quiz: [
      { q: "Como se chama a secagem das uvas na produção do Amarone?", a: "Appassimento", x: ["Solera", "Botrytis", "Maceração carbônica"] },
    ],
  },
  biondisanti: {
    fact: "A família que criou o Brunello di Montalcino. No fim do século XIX, selecionou o clone de Sangiovese de bagas grandes chamado “Brunello” e o amadureceu por muito tempo.",
    quiz: [
      { q: "Qual é o outro nome da Sangiovese que a Biondi-Santi selecionou para criar o Brunello?", a: "Sangiovese Grosso", x: ["Morellino", "Prugnolo Gentile", "Nebbiolo"] },
    ],
  },
  riscal: {
    fact: "A rede dourada que envolve a garrafa foi colocada no século XIX para impedir falsificações com vinho barato.",
    quiz: [
      { q: "Qual era a função original da rede dourada da garrafa do Riscal?", a: "Evitar falsificações", x: ["Evitar quebras no transporte", "Bloquear a luz do sol", "Servir de embalagem de presente"] },
      { q: "Que arquiteto projetou o ondulante hotel de titânio da Marqués de Riscal?", a: "Frank Gehry", x: ["Zaha Hadid", "Tadao Ando", "Rem Koolhaas"] },
    ],
  },
  vegasicilia: {
    fact: "O maior tinto da Espanha, lançado só depois de quase 10 anos de amadurecimento. “Único” tem em espanhol o mesmo sentido que em português.",
    quiz: [
      { q: "O que significa “Único” em espanhol?", a: "Único, sem igual", x: ["Primeiro", "Antigo", "Do rei"] },
      { q: "Que vinho a Vega Sicilia lança com amadurecimento mais curto que o Único?", a: "Valbuena 5°", x: ["Alión", "Pingus", "Pesquera"] },
    ],
  },
  tiopepe: {
    fact: "Sinônimo de Jerez Fino: amadurece sob o “flor”, véu de leveduras que se forma na superfície do vinho e lhe dá cor clara e sabor salino.",
    quiz: [
      { q: "Que véu de leveduras se forma na superfície do Fino e impede a oxidação do vinho?", a: "Flor", x: ["Botrytis", "Mousse", "Solera"] },
      { q: "Como se chama o sistema em que o Jerez passa entre barris empilhados, misturando-se ao amadurecer?", a: "Sistema de solera", x: ["Appassimento", "Método champenoise", "Maceração carbônica"] },
    ],
  },
  freixenet: {
    fact: "Cava, o espumante espanhol feito com segunda fermentação na garrafa, como o Champagne. A garrafa preta fosca é sua marca registrada.",
    quiz: [
      { q: "Como a Cava obtém suas bolhas?", a: "Segunda fermentação na garrafa (método tradicional)", x: ["Injeção de gás carbônico", "Fermentação em tanque (método Charmat)", "Adição de aguardente durante a fermentação"] },
    ],
  },
  mateus: {
    fact: "A garrafa achatada foi inspirada nos cantis dos soldados da Primeira Guerra Mundial. O edifício do rótulo é o Palácio de Mateus.",
    quiz: [
      { q: "Em que se inspirou o formato da garrafa do Mateus?", a: "No cantil dos soldados da Primeira Guerra", x: ["Num odre de couro", "Num frasco de água benta", "Num frasco de perfume"] },
      { q: "Que edifício aparece no rótulo do Mateus?", a: "O Palácio de Mateus", x: ["A Torre de Belém", "A Sé do Porto", "O Palácio da Pena"] },
    ],
  },
  taylors: {
    fact: "O Porto é um vinho fortificado: adiciona-se aguardente durante a fermentação para preservar o doce. Fundada em 1692, a Taylor’s é uma das casas de Porto mais antigas.",
    quiz: [
      { q: "O que se adiciona durante a fermentação na produção do Porto?", a: "Aguardente vínica", x: ["Xarope de açúcar", "Mel", "Uísque"] },
      { q: "Em que ano a Taylor’s (Taylor Fladgate) foi fundada?", a: "1692", x: ["1815", "1756", "1888"] },
    ],
  },
  tokaji: {
    fact: "Vinho doce de podridão nobre que Luís XIV teria chamado de “vinho dos reis, rei dos vinhos”. Os puttonyos indicam quanto de uva aszú (botritizada) foi adicionado.",
    quiz: [
      { q: "Qual rei teria chamado o Tokaji de “vinho dos reis, rei dos vinhos”?", a: "Luís XIV", x: ["Napoleão", "Henrique VIII", "Pedro, o Grande"] },
      { q: "O que indica o termo “puttonyos”?", a: "A quantidade de uvas botritizadas (doçura)", x: ["Os anos de amadurecimento", "O teor alcoólico", "A classificação do vinhedo"] },
    ],
  },
  bikaver: {
    fact: "Significa “sangue de touro”. Diz a lenda que, em 1552, o exército otomano se assustou com as barbas tingidas de vermelho dos soldados húngaros, achando que bebiam sangue de touro.",
    quiz: [
      { q: "O que significa “Bikavér”?", a: "Sangue de touro", x: ["Sol vermelho", "Lágrimas de dragão", "Sangue real"] },
      { q: "Quem era o inimigo no cerco de Eger de 1552, origem da lenda do sangue de touro?", a: "O Império Otomano", x: ["O Império Mongol", "A Casa de Habsburgo", "O Reino da França"] },
    ],
  },
  opusone: {
    fact: "Vinho nascido da parceria entre Robert Mondavi e o barão Philippe de Rothschild, do Mouton. O rótulo sobrepõe as silhuetas de perfil dos dois.",
    quiz: [
      { q: "Qual foi a primeira safra do Opus One?", a: "1979", x: ["1966", "1985", "1994"] },
      { q: "De que área vem o termo “Opus One”?", a: "Música (obra número 1)", x: ["Artes plásticas", "Arquitetura", "Literatura"] },
    ],
  },
  mondavi: {
    fact: "Fundada em 1966, foi a primeira grande vinícola criada em Napa depois da Lei Seca. O arco e o campanário do rótulo são do prédio da vinícola em Oakville.",
    quiz: [
      { q: "Em que ano a vinícola Robert Mondavi foi fundada?", a: "1966", x: ["1933", "1976", "1989"] },
      { q: "Que nome Robert Mondavi deu a seu Sauvignon Blanc amadurecido em carvalho?", a: "Fumé Blanc", x: ["Blanc de Blancs", "Verdejo", "White Zinfandel"] },
    ],
  },
  kj: {
    fact: "Há décadas é o Chardonnay mais vendido dos Estados Unidos. A folha de videira em cores de outono no rótulo é seu símbolo.",
    quiz: [
      { q: "Qual é o símbolo do rótulo da Kendall-Jackson?", a: "Uma folha de videira outonal", x: ["Um urso", "Um farol", "Um cacho de uvas dourado"] },
      { q: "Quem fundou a Kendall-Jackson?", a: "Jess Jackson", x: ["Robert Mondavi", "Ernest Gallo", "Chuck Wagner"] },
    ],
  },
  barefoot: {
    fact: "A pegada de pé descalço do rótulo lembra o antigo costume de pisar as uvas. Em volume de vendas, é uma das maiores marcas de vinho do mundo.",
    quiz: [
      { q: "Que tradição a pegada do rótulo da Barefoot evoca?", a: "Pisar as uvas com os pés", x: ["Caminhar descalço pelo vinhedo", "Uma festa na praia", "Dançar depois da colheita"] },
    ],
  },
  grange: {
    fact: "O maior tinto da Austrália, criado pelo enólogo Max Schubert, que se inspirou numa viagem a Bordeaux nos anos 1950 e fez testes em segredo. É um vinho declarado patrimônio cultural.",
    quiz: [
      { q: "Qual enólogo criou o Grange?", a: "Max Schubert", x: ["Peter Lehmann", "John Duval", "Wolf Blass"] },
      { q: "Com que nome o Grange foi lançado originalmente?", a: "Grange Hermitage", x: ["Grange Bordeaux", "Bin 1", "Penfolds Classic"] },
    ],
  },
  yellowtail: {
    fact: "O animal do rótulo não é um canguru, e sim um wallaby-das-rochas-de-pés-amarelos. Tornou-se o vinho importado mais vendido dos Estados Unidos.",
    quiz: [
      { q: "Que animal aparece no rótulo do [yellow tail]?", a: "Wallaby-das-rochas-de-pés-amarelos", x: ["Canguru", "Coala", "Vombate"] },
    ],
  },
  cloudybay: {
    fact: "Com sua primeira safra, em 1985, apresentou ao mundo o Sauvignon Blanc da Nova Zelândia. As montanhas do rótulo são a cordilheira Richmond, em Marlborough.",
    quiz: [
      { q: "O que aparece no rótulo do Cloudy Bay?", a: "A cordilheira Richmond", x: ["O Monte Cook", "O Mar da Tasmânia", "O rio Waitaki"] },
      { q: "Qual foi a primeira safra do Cloudy Bay?", a: "1985", x: ["1973", "1992", "2001"] },
    ],
  },
  almaviva: {
    fact: "O “Opus One chileno”. O desenho do rótulo é o símbolo do cosmos pintado no kultrun, o tambor cerimonial do povo mapuche.",
    quiz: [
      { q: "De onde vem o desenho do rótulo do Almaviva?", a: "Do kultrun, tambor dos mapuches", x: ["Do deus-sol inca", "Das estátuas da Ilha de Páscoa", "Do condor dos Andes"] },
      { q: "Almaviva é o nome de um personagem de qual obra?", a: "“As Bodas de Fígaro”, de Beaumarchais", x: ["Dom Quixote", "Carmen", "Os Miseráveis"] },
    ],
  },
  montes: {
    fact: "O anjo do rótulo seria o anjo da guarda que livrou o fundador Douglas Murray de vários acidentes. É um dos vinhos chilenos mais queridos na Coreia.",
    quiz: [
      { q: "Qual é o símbolo do rótulo do Montes Alpha?", a: "Um anjo", x: ["Um diabo", "Um condor", "O sol"] },
      { q: "Qual é a principal uva do “Purple Angel”, vinho ícone da Montes?", a: "Carménère", x: ["Malbec", "Pinot Noir", "Tempranillo"] },
    ],
  },
  casillero: {
    fact: "Significa “adega do diabo”. Diz a lenda que o fundador espalhou o boato de que o diabo morava na adega subterrânea para afastar os ladrões.",
    quiz: [
      { q: "O que significa “Casillero del Diablo”?", a: "Adega do diabo", x: ["Vinhedo do diabo", "A parte dos anjos", "Porta do inferno"] },
    ],
  },
  sanpedro1865: {
    fact: "O nome é o ano de fundação da vinícola San Pedro. Na Coreia, ficou famoso como presente acompanhado de um voto de golfe: “jogar os 18 buracos em 65 tacadas”.",
    quiz: [
      { q: "O que significa o nome “1865”?", a: "O ano de fundação da vinícola San Pedro", x: ["A produção da primeira colheita", "A altitude do vinhedo", "O ano de nascimento do fundador"] },
      { q: "Com que voto o 1865 ficou famoso como presente na Coreia?", a: "Jogar os 18 buracos em 65 tacadas", x: ["Viver 18 anos até chegar aos 65", "Brindar 65 vezes em 8 de janeiro", "18 pessoas dividirem 65 garrafas"] },
    ],
  },
  inniskillin: {
    fact: "As uvas são colhidas e prensadas congeladas, abaixo de -8 °C. Ao ganhar o grande prêmio da Vinexpo em 1991, apresentou o icewine canadense ao mundo.",
    quiz: [
      { q: "Abaixo de que temperatura as uvas devem estar congeladas para a colheita do icewine canadense?", a: "-8 °C", x: ["-2 °C", "-20 °C", "0 °C"] },
      { q: "Em que feira o Inniskillin Vidal Icewine ganhou o grande prêmio em 1991?", a: "Vinexpo", x: ["Vinitaly", "ProWein", "London Wine Fair"] },
    ],
  },
  ott: {
    fact: "A garrafa curvilínea, parecida com um pino de boliche, desenhada pela família Ott nos anos 1930, virou símbolo do rosé da Provence.",
    quiz: [
      { q: "Quando foi desenhada a garrafa curvilínea da Domaines Ott?", a: "Anos 1930", x: ["Anos 1880", "Anos 1960", "Anos 2000"] },
      { q: "Que casa de Champagne comprou a Domaines Ott em 2004?", a: "Louis Roederer", x: ["Moët & Chandon", "Veuve Clicquot", "Bollinger"] },
    ],
  },
  whisperingangel: {
    fact: "Lançado em 2006, liderou o boom mundial do rosé. O nome vem da estátua de um anjo sussurrante na capela do château.",
    quiz: [
      { q: "Quem é o dono do Château d’Esclans, que produz o Whispering Angel?", a: "Sacha Lichine", x: ["Brad Pitt", "Gérard Bertrand", "Alain Ducasse"] },
      { q: "Em que ano o Whispering Angel foi lançado?", a: "2006", x: ["1985", "1998", "2015"] },
    ],
  },
  musar: {
    fact: "Vinícola que seguiu colhendo mesmo sob as bombas da guerra civil libanesa. Amadurece os vinhos por quase 7 anos antes de lançá-los.",
    quiz: [
      { q: "Qual enólogo levou o Château Musar ao mundo?", a: "Serge Hochar", x: ["Michel Rolland", "Émile Peynaud", "André Tchelistcheff"] },
      { q: "Em que ano o Château Musar foi fundado?", a: "1930", x: ["1855", "1975", "1998"] },
    ],
  },
};

export default T;
