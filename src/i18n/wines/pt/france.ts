import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  fr_latache: {
    fact: "Um dos dois monopoles que o DRC possui por inteiro, junto com o Romanée-Conti. Com pouco mais de 6 ha, é mais de três vezes maior que o Romanée-Conti.",
    quiz: [
      { q: "Como se chama o caso em que um só domaine possui um vinhedo inteiro, como o La Tâche?", a: "Monopole", x: ["Climat", "Lieu-dit", "Métayage"] },
    ],
  },
  fr_richebourg_drc: {
    fact: "Considerado o mais opulento e intenso dos Grands Crus de Vosne-Romanée. Além do DRC, produtores como Leroy, Anne Gros e Méo-Camuzet dividem o vinhedo.",
    quiz: [
      { q: "O Domaine de la Romanée-Conti, que faz este Richebourg, pertence a duas famílias: os de Villaine e qual outra?", a: "Família Leroy", x: ["Família Rousseau", "Família de Vogüé", "Família Lafon"] },
    ],
  },
  fr_rsv_drc: {
    fact: "O nome vem da abadia de Saint-Vivant, que cultivava estas terras na Idade Média. O DRC começou a produzi-lo em 1966 arrendando o vinhedo da família Marey-Monge e o comprou em 1988.",
    quiz: [
      { q: "De onde vem o nome Romanée-Saint-Vivant?", a: "Da abadia medieval de Saint-Vivant", x: ["Do príncipe de Conti, no século XVIII", "De um general de Napoleão", "De uma duquesa da Borgonha"] },
      { q: "De que família era o vinhedo Romanée-Saint-Vivant que o DRC arrendou e acabou comprando?", a: "Família Marey-Monge", x: ["Família Leroy", "Família Liger-Belair", "Família Mommessin"] },
    ],
  },
  fr_grandsechezeaux_drc: {
    fact: "Grand Cru que administrativamente pertence à vizinha Flagey-Échezeaux, mas é tratado como vinho de Vosne-Romanée. É bem menor e mais raro que o Échezeaux.",
    quiz: [
      { q: "Que famoso Grand Cru cercado por muros de pedra faz divisa com o vinhedo Grands-Échezeaux?", a: "Clos de Vougeot", x: ["Clos de Tart", "Clos des Lambrays", "Clos de Bèze"] },
    ],
  },
  fr_echezeaux_drc: {
    fact: "O maior Grand Cru da área de Vosne-Romanée, dividido em pequenas parcelas entre dezenas de proprietários. É considerado a porta de entrada dos Grands Crus tintos do DRC.",
    quiz: [
      { q: "Qual afirmação sobre o vinhedo Grand Cru Échezeaux é verdadeira?", a: "É dividido entre dezenas de proprietários", x: ["É um monopole exclusivo do DRC", "Só pode produzir vinho branco", "Virou Grand Cru nos anos 1990"] },
    ],
  },
  fr_montrachet_drc: {
    fact: "Vinhedo de pouco mais de 8 ha entre as vilas de Puligny e Chassagne, considerado a origem dos melhores Chardonnays do mundo.",
    quiz: [
      { q: "Que escritor francês teria dito que o Montrachet deve ser bebido “de chapéu tirado e de joelhos”?", a: "Alexandre Dumas", x: ["Victor Hugo", "Honoré de Balzac", "Émile Zola"] },
    ],
  },
  fr_liger_romanee: {
    fact: "Monopole de menos de 1 ha logo acima do Romanée-Conti, na encosta. No início dos anos 2000, Louis-Michel Liger-Belair o recuperou e a família passou a vinificá-lo diretamente.",
    quiz: [
      { q: "Que recorde o La Romanée detém?", a: "É a menor AOC da França", x: ["É a AOC mais antiga da França", "É o maior Grand Cru da Borgonha", "Foi o primeiro vinhedo orgânico certificado da França"] },
    ],
  },
  fr_meo_crosparantoux: {
    fact: "Premier Cru que Henri Jayer, o “deus da Borgonha”, transformou em lenda ao desbravar um terreno abandonado onde crescia tupinambo. Jayer cultivava vinhedos do Méo-Camuzet como meeiro e foi mestre de Jean-Nicolas Méo.",
    quiz: [
      { q: "Que vinicultor, chamado de “deus da Borgonha”, desbravou o Cros Parantoux e o tornou lendário?", a: "Henri Jayer", x: ["Armand Rousseau", "Georges Roumier", "Henri Gouges"] },
    ],
  },
  fr_annegros_cdv: {
    fact: "O Clos de Vougeot é um Grand Cru de 50 ha murado por monges no século XII e hoje dividido entre uns 80 proprietários. Anne Gros cultiva a parcela Grand Maupertui.",
    quiz: [
      { q: "Que ordem religiosa ergueu os muros e cultivou o Clos de Vougeot a partir do século XII?", a: "Os cistercienses", x: ["Os monges de Cluny", "Os jesuítas", "Os franciscanos"] },
      { q: "Que confraria do vinho da Borgonha tem sede no castelo do Clos de Vougeot?", a: "Chevaliers du Tastevin", x: ["Commanderie du Bontemps de Médoc", "Ordre des Coteaux de Champagne", "Les Compagnons du Beaujolais"] },
    ],
  },
  fr_leroy_musigny: {
    fact: "Domaine fundado em 1988 por Lalou Bize-Leroy. Cultivado em biodinâmica desde o início e com rendimentos reduzidíssimos, produz os vinhos mais caros da Borgonha.",
    quiz: [
      { q: "Quem comanda o Domaine Leroy e foi codiretora do DRC até 1992?", a: "Lalou Bize-Leroy", x: ["Anne-Claude Leflaive", "Henri Jayer", "Christophe Roumier"] },
    ],
  },
  fr_vogue_musigny: {
    fact: "O maior proprietário do Grand Cru Musigny, com quase dois terços do vinhedo. As uvas das vinhas jovens são rebaixadas e vendidas como Chambolle-Musigny 1er Cru.",
    quiz: [
      { q: "Que vinho raro a de Vogüé produz praticamente sozinha no vinhedo Musigny?", a: "Musigny Blanc (branco)", x: ["Musigny rosé", "Musigny espumante", "Musigny doce botritizado"] },
    ],
  },
  fr_mugnier_musigny: {
    fact: "Frédéric Mugnier assumiu o domaine da família em 1985 e o levou ao auge do estilo delicado de Chambolle. Em 2004 recuperou o Clos de la Maréchale, que estava arrendado à Faiveley.",
    quiz: [
      { q: "Que outra profissão Frédéric Mugnier exerceu até o fim dos anos 1990, enquanto cuidava do domaine?", a: "Piloto de avião", x: ["Médico", "Advogado", "Cozinheiro"] },
    ],
  },
  fr_roumier_bm: {
    fact: "Domaine cult de Chambolle-Musigny comandado por Christophe Roumier. O Bonnes-Mares é um Grand Cru que se estende pelas vilas de Chambolle-Musigny e Morey-Saint-Denis.",
    quiz: [
      { q: "Quem comanda o Domaine Georges Roumier e o elevou a status cult?", a: "Christophe Roumier", x: ["Éric Rousseau", "Frédéric Mugnier", "Jean-Nicolas Méo"] },
      { q: "Além de Chambolle-Musigny, por qual vila se estende o Grand Cru Bonnes-Mares?", a: "Morey-Saint-Denis", x: ["Gevrey-Chambertin", "Vosne-Romanée", "Vougeot"] },
    ],
  },
  fr_dujac_cdlr: {
    fact: "Domaine fundado em Morey-Saint-Denis em 1968 pelo parisiense Jacques Seysses. É famoso por fermentar os cachos inteiros, com engaço.",
    quiz: [
      { q: "Quem fundou o Domaine Dujac em 1968?", a: "Jacques Seysses", x: ["Henri Jayer", "Armand Rousseau", "Christophe Roumier"] },
    ],
  },
  fr_ponsot_cdlr: {
    fact: "Em 2008, quando um Ponsot Clos Saint-Denis 1945 apareceu num leilão em Nova York, Laurent Ponsot foi pessoalmente barrar a venda: a Ponsot só começou a fazer vinho desse vinhedo em 1982.",
    quiz: [
      { q: "Que notório falsificador de vinhos foi desmascarado quando Laurent Ponsot barrou falsos Ponsot num leilão de 2008?", a: "Rudy Kurniawan", x: ["Hardy Rodenstock", "Bernard Madoff", "Frank Abagnale"] },
    ],
  },
  fr_closdetart: {
    fact: "Grand Cru monopole que teve só quatro donos desde 1141: as freiras de Tart, a família Marey-Monge, a família Mommessin e hoje a Artémis, da família Pinault.",
    quiz: [
      { q: "Quem foi dono do Clos de Tart de 1141 até a Revolução Francesa?", a: "As freiras cistercienses da abadia de Tart", x: ["Os monges da abadia de Cluny", "A casa dos duques da Borgonha", "Os Templários"] },
      { q: "Quem comprou o Clos de Tart depois da família Mommessin?", a: "A Artémis, de François Pinault", x: ["A LVMH, de Bernard Arnault", "O magnata americano Stan Kroenke", "Os irmãos Bouygues"] },
    ],
  },
  fr_lambrays: {
    fact: "Grand Cru de Morey-Saint-Denis que pertence quase inteiro a um só domaine. Foi promovido tardiamente a Grand Cru em 1981 e comprado pela LVMH em 2014.",
    quiz: [
      { q: "Em que ano o Clos des Lambrays foi promovido a Grand Cru?", a: "1981", x: ["1936", "1961", "2001"] },
      { q: "Que grupo comprou o Clos des Lambrays em 2014?", a: "LVMH", x: ["Artémis (família Pinault)", "Groupe Castel", "Pernod Ricard"] },
    ],
  },
  fr_rousseau_chambertin: {
    fact: "O Chambertin é o “vinho dos reis” que Napoleão levava até em campanha. Armand Rousseau é considerado o melhor domaine de Gevrey-Chambertin.",
    quiz: [
      { q: "Que figura histórica teria sido a maior apreciadora do Chambertin, vinhedo do Armand Rousseau Chambertin?", a: "Napoleão", x: ["Luís XIV", "Carlos Magno", "Joana d’Arc"] },
      { q: "Qual é a origem tradicional do nome “Chambertin”?", a: "O campo de um camponês chamado Bertin (Champ de Bertin)", x: ["A igreja da abadia de Bertin", "O acampamento do general romano Bertinus", "Uma palavra antiga para “colina verde”"] },
    ],
  },
  fr_rousseau_beze: {
    fact: "Um dos vinhedos mais antigos da Borgonha, cultivado no século VII pelos monges da abadia de Bèze. Seu vinho também pode ser vendido com o nome “Chambertin”.",
    quiz: [
      { q: "Quem cultivou primeiro o vinhedo Chambertin-Clos de Bèze?", a: "Os monges da abadia de Bèze, no século VII", x: ["Monges cistercienses do século XII", "O príncipe de Conti, no século XVIII", "O exército de Napoleão, no século XIX"] },
      { q: "Que privilégio as regras concedem ao Chambertin-Clos de Bèze?", a: "Pode ser vendido também como “Chambertin”", x: ["Pode usar o nome “Romanée-Conti”", "Pode ser vendido sem safra", "Pode vender também brancos como Grand Cru"] },
    ],
  },
  fr_bichot_moutonne: {
    fact: "Monopole do Domaine Long-Depaquit, de Chablis, que pertence à Albert Bichot. Estende-se por dois Grands Crus de Chablis, Vaudésir e Preuses.",
    quiz: [
      { q: "Em que ano foi fundada a Albert Bichot, que produz o La Moutonne?", a: "1831", x: ["1731", "1797", "1880"] },
    ],
  },
  fr_leflaive_puligny: {
    fact: "Grande casa de brancos, símbolo de Puligny-Montrachet. Nos anos 1990, Anne-Claude Leflaive converteu todos os vinhedos à biodinâmica e liderou a onda de viticultura ecológica na Borgonha.",
    quiz: [
      { q: "Quem levou o Domaine Leflaive à biodinâmica nos anos 1990?", a: "Anne-Claude Leflaive", x: ["Lalou Bize-Leroy", "Dominique Lafon", "Jean-François Coche-Dury"] },
    ],
  },
  fr_leflaive_batard: {
    fact: "Grand Cru na encosta logo abaixo do Montrachet. Assim como os vizinhos Chevalier (cavaleiro) e Pucelle (donzela), seu nome se liga à história da família de um antigo senhor feudal.",
    quiz: [
      { q: "O que significa “Bâtard” em Bâtard-Montrachet?", a: "Bastardo (filho ilegítimo)", x: ["Cavaleiro", "Donzela", "Monge"] },
    ],
  },
  fr_cochedury_cc: {
    fact: "Grand Cru branco da colina de Corton. O de Coche-Dury é produzido em quantidade tão pequena que está entre as garrafas mais difíceis de encontrar de toda a Borgonha branca.",
    quiz: [
      { q: "Segundo a lenda, por que Carlos Magno mandou plantar uvas brancas na colina de Corton?", a: "O vinho tinto manchava sua barba branca", x: ["O papa proibiu o vinho tinto", "As uvas brancas vendiam mais caro", "A guerra matou todas as uvas tintas"] },
    ],
  },
  fr_cochedury_meursault: {
    fact: "Produtor lendário cujo Meursault de vila é vendido a preço de Grand Cru de outros domaines. Jean-François Coche-Dury construiu a fama, e o filho Raphaël dá continuidade.",
    quiz: [
      { q: "Que vinicultor construiu a fama do Meursault de Coche-Dury?", a: "Jean-François Coche-Dury", x: ["Henri Jayer", "Dominique Lafon", "Aubert de Villaine"] },
    ],
  },
  fr_bonneau_cc: {
    fact: "Domaine raro que produz apenas dois Grands Crus, Corton-Charlemagne e Corton. Em 2017 foi comprado pelo magnata americano Stan Kroenke.",
    quiz: [
      { q: "Que vinícola cult de Napa Valley pertence ao magnata americano que comprou o Bonneau du Martray em 2017?", a: "Screaming Eagle", x: ["Harlan Estate", "Opus One", "Sine Qua Non"] },
    ],
  },
  fr_latour_cc: {
    fact: "Empresa familiar desde 1797 e uma das maiores proprietárias da colina de Corton. Ainda hoje fabrica as próprias barricas em sua tanoaria.",
    quiz: [
      { q: "Que château em Aloxe-Corton, na colina de Corton, é a sede da Louis Latour?", a: "Château Corton Grancey", x: ["Château de Meursault", "Château de Puligny-Montrachet", "Château de Pommard"] },
      { q: "Em que ano começou a história da Louis Latour?", a: "1797", x: ["1731", "1859", "1920"] },
    ],
  },
  fr_faiveley_cortons: {
    fact: "Grand Cru monopole de Corton que leva no nome o da família produtora. A Faiveley é uma empresa familiar de Nuits-Saint-Georges, passada de geração em geração.",
    quiz: [
      { q: "Em que ano a Faiveley, que produz este vinho, abriu as portas em Nuits-Saint-Georges?", a: "1825", x: ["1731", "1797", "1920"] },
      { q: "Que monopole a Faiveley arrendou por mais de 50 anos e devolveu em 2004 aos donos, a família Mugnier?", a: "Clos de la Maréchale", x: ["Clos de Tart", "Clos des Lambrays", "Clos des Ducs"] },
    ],
  },
  fr_drouhin_mouches: {
    fact: "Premier Cru de Beaune que Maurice Drouhin reuniu nos anos 1920, comprando pedaço por pedaço de vários donos. A Drouhin é a maior proprietária do vinhedo.",
    quiz: [
      { q: "Que inseto o “Mouches” de Clos des Mouches designa neste vinhedo?", a: "Abelhas", x: ["Borboletas", "Libélulas", "Joaninhas"] },
      { q: "Onde fica a vinícola que a Joseph Drouhin fundou nos Estados Unidos em 1987?", a: "Oregon", x: ["Napa Valley", "Sonoma", "Washington"] },
    ],
  },
  fr_bouchard_enfant: {
    fact: "Monopole de Beaune Grèves cultivado pelas carmelitas. O nome vem da história de uma freira que teria profetizado o nascimento de Luís XIV; a Bouchard o comprou em 1791, depois da Revolução.",
    quiz: [
      { q: "O que significa o nome “Vigne de l’Enfant Jésus”?", a: "Vinha do Menino Jesus", x: ["Vinha da Virgem", "Vinha do Rei", "Vinha do Abade"] },
      { q: "Segundo a história ligada ao Vigne de l’Enfant Jésus, que rei teve o nascimento profetizado por uma carmelita?", a: "Luís XIV", x: ["Luís XVI", "Henrique IV", "Napoleão I"] },
    ],
  },
  fr_hospices_rolin: {
    fact: "Vinho de vinhedos doados aos Hospices de Beaune, hospital beneficente fundado em 1443. Todo ano é vendido no mais famoso leilão beneficente de vinhos do mundo.",
    quiz: [
      { q: "Quando acontece o leilão beneficente em que o Cuvée Nicolas Rolin é vendido?", a: "Todo ano, no terceiro domingo de novembro", x: ["Todo ano, no primeiro domingo de setembro", "Uma vez a cada cinco anos, na primavera", "Todo ano, em 1º de janeiro"] },
      { q: "Quem era a esposa de Nicolas Rolin, que fundou com ele os Hospices de Beaune?", a: "Guigone de Salins", x: ["Madame Clicquot", "Ana da Áustria", "Margarida da Borgonha"] },
    ],
  },
  fr_dangerville_ducs: {
    fact: "Monopole Premier Cru de Volnay que pertenceu aos antigos duques da Borgonha. Nos anos 1920 e 1930, o marquês d’Angerville, com Henri Gouges e outros, liderou o engarrafamento no próprio domaine.",
    quiz: [
      { q: "A quem se refere “Ducs” em Clos des Ducs?", a: "Aos antigos duques da Borgonha", x: ["Aos bispos da Santa Sé", "Aos comandantes das legiões romanas", "Aos monges de um mosteiro"] },
      { q: "O que a família do marquês d’Angerville liderou nos anos 1920 e 1930, com outros produtores?", a: "Engarrafar no domaine em vez de vender aos négociants", x: ["Introduzir espumantes pelo método champenoise", "Plantar Cabernet Sauvignon na Borgonha", "Adotar a tampa de rosca"] },
    ],
  },
  fr_lafon_perrieres: {
    fact: "Grande nome de Meursault que tem também um pouco do Grand Cru Montrachet. O Perrières, cujo nome vem de antigas pedreiras, é considerado o melhor Premier Cru de Meursault.",
    quiz: [
      { q: "Que membro da família Lafon criou em 1923 a “Paulée de Meursault”, banquete realizado no último dia das “Trois Glorieuses”, em novembro?", a: "O conde Jules Lafon", x: ["Louis Latour", "Joseph Drouhin", "Henri Jayer"] },
    ],
  },
  fr_fevre_lesclos: {
    fact: "Les Clos é o maior dos Grands Crus de Chablis. A William Fèvre é considerada o domaine com mais vinhedos Grand Cru em Chablis.",
    quiz: [
      { q: "Quantos vinhedos Grand Cru existem em Chablis, onde fica o Les Clos da William Fèvre?", a: "7", x: ["3", "12", "33"] },
      { q: "Que família de Champagne comprou a William Fèvre em 1998?", a: "Henriot", x: ["Bollinger", "Taittinger", "Laurent-Perrier"] },
    ],
  },
  fr_raveneau: {
    fact: "Lenda de Chablis fundada por François Raveneau em 1948. Amadurece em barricas velhas e produz Chablis capazes de durar décadas.",
    quiz: [
      { q: "A que outra grande família de Chablis François Raveneau se ligou pelo casamento?", a: "Família Dauvissat", x: ["Família Fèvre", "Família Laroche", "Família Bichot"] },
    ],
  },
  fr_dauvissat: {
    fact: "Junto com os parentes Raveneau, é considerado o topo de Chablis. Numa região onde predominam os tanques de inox, insiste no amadurecimento em barricas de carvalho.",
    quiz: [
      { q: "Que prática de vinificação grandes produtores de Chablis como Vincent Dauvissat trouxeram da Côte d’Or?", a: "Fermentação em barrica e longo contato com as borras", x: ["Maceração carbônica", "Secagem das uvas (appassimento)", "Amadurecimento em solera"] },
    ],
  },
  fr_laroche: {
    fact: "A adega de amadurecimento da Laroche é a “Obédiencerie”, um edifício monástico do século IX. Ali foram guardadas as relíquias de São Martinho, trazidas de Tours em 877 para escapar dos normandos.",
    quiz: [
      { q: "Que santo o Domaine Laroche Chablis Saint Martin homenageia?", a: "São Martinho, bispo de Tours", x: ["São Bernardo, líder dos cistercienses", "São Dionísio, primeiro bispo de Paris", "Santa Joana d’Arc"] },
    ],
  },
  fr_fuisse: {
    fact: "Grande nome do Chardonnay no Mâconnais. A partir da safra 2020, Pouilly-Fuissé passou a ter os primeiros vinhedos Premier Cru do Mâconnais.",
    quiz: [
      { q: "Que categoria foi criada em Pouilly-Fuissé, onde fica o Château-Fuissé, a partir da safra 2020?", a: "Premier Cru", x: ["Grand Cru", "Cru Bourgeois", "Cru Classé"] },
    ],
  },
  fr_lapierre_morgon: {
    fact: "Pioneiro do vinho natural, feito quase sem dióxido de enxofre. Com Foillard, Thévenet e Breton, formava a “Gangue dos Quatro” do Beaujolais.",
    quiz: [
      { q: "Que químico e négociant inspirou a vinificação sem aditivos da “Gangue dos Quatro” do Beaujolais, que incluía Marcel Lapierre?", a: "Jules Chauvet", x: ["Émile Peynaud", "Louis Pasteur", "Henri Jayer"] },
    ],
  },
  fr_jacques_mav: {
    fact: "Comprado pela Louis Jadot em 1996, foi o primeiro caso de uma grande casa da Borgonha entrando nos crus do Beaujolais. Vinificado à moda borgonhesa, dá Gamays de guarda.",
    quiz: [
      { q: "De onde vem o nome “Moulin-à-Vent”, onde fica o Château des Jacques?", a: "De um velho moinho de vento na colina da vila", x: ["De um moinho d’água romano", "De um rio de ventos fortes", "De um antigo mosteiro"] },
    ],
  },
  fr_jadot_bjv: {
    fact: "Categoria um degrau acima, vinda de vilas designadas do norte do Beaujolais. O rótulo traz o brasão com o rosto de Baco, símbolo da Louis Jadot.",
    quiz: [
      { q: "De quem é o rosto no brasão do rótulo do Louis Jadot Beaujolais-Villages?", a: "Baco, deus do vinho", x: ["Netuno, deus do mar", "Apolo, deus do sol", "São Vicente, padroeiro dos vinicultores"] },
      { q: "Quantos “crus”, a categoria máxima com nome de vila, existem no Beaujolais?", a: "10", x: ["3", "7", "22"] },
    ],
  },
  fr_duboeuf_fleurie: {
    fact: "Cru do Beaujolais perfumado e macio, como sugere o nome, que lembra flores. É famoso pelo rótulo florido da Duboeuf.",
    quiz: [
      { q: "Que apelido costumam receber os vinhos de Fleurie, como o Georges Duboeuf Fleurie, pelo sabor perfumado e elegante?", a: "Rainha do Beaujolais", x: ["Rei do Beaujolais", "Cavaleiro do Beaujolais", "Monge do Beaujolais"] },
    ],
  },
  fr_guigal_mouline: {
    fact: "Primeiro vinho de vinhedo único da Guigal, vindo de uma encosta em forma de anfiteatro na Côte Blonde. A Syrah é cofermentada com um pouco de Viognier.",
    quiz: [
      { q: "Qual é o apelido do trio La Mouline, La Landonne e La Turque, da Guigal?", a: "Os “La La”", x: ["Tríplice Coroa", "Les Trois", "Trio da Côte-Rôtie"] },
      { q: "Qual foi a primeira safra do Guigal La Mouline?", a: "1966", x: ["1946", "1978", "1985"] },
    ],
  },
  fr_guigal_landonne: {
    fact: "O mais escuro e potente dos “La La”, feito com 100% Syrah numa encosta íngreme da Côte Brune. É um vinhedo reunido aos pedaços, comprado de vários donos e replantado.",
    quiz: [
      { q: "Qual foi a primeira safra do Guigal La Landonne?", a: "1978", x: ["1966", "1985", "1995"] },
    ],
  },
  fr_guigal_turque: {
    fact: "O caçula dos “La La”: um vinhedo abandonado por muito tempo que a Guigal replantou no início dos anos 1980. Fica na Côte Brune, mas leva um pouco de Viognier.",
    quiz: [
      { q: "Qual foi a primeira safra do Guigal La Turque?", a: "1985", x: ["1966", "1978", "1999"] },
    ],
  },
  fr_guigal_cdr: {
    fact: "O vinho do dia a dia emblemático da Guigal, casa fundada em Ampuis por Étienne Guigal em 1946. Como convém a um grande nome do Rhône Norte, tem alta proporção de Syrah.",
    quiz: [
      { q: "Que antigo castelo de Côte-Rôtie a Guigal comprou em 1995 e transformou em sede?", a: "Château d’Ampuis", x: ["Château-Grillet", "Château Rayas", "Château La Nerthe"] },
      { q: "Em que ano Étienne Guigal fundou a Guigal?", a: "1946", x: ["1808", "1834", "1990"] },
    ],
  },
  fr_chapoutier_belleruche: {
    fact: "Côtes du Rhône do dia a dia da Chapoutier, grande casa de Hermitage desde 1808. Um lado do rótulo traz inscrições em relevo em braile.",
    quiz: [
      { q: "O que a Chapoutier, incluindo o Belleruche, imprime em todos os seus rótulos desde os anos 1990?", a: "Braile para pessoas cegas", x: ["Código QR", "Assinatura do fundador", "Mapa do vinhedo"] },
    ],
  },
  fr_chapoutier_sizeranne: {
    fact: "Vinho de um vinhedo comprado da família de Maurice Monier de la Sizeranne, homem cego que criou um braile abreviado. Em 1994 foi o primeiro vinho a receber rótulo em braile.",
    quiz: [
      { q: "Quem foi Maurice Monier de la Sizeranne, que dá nome a este vinho e inspirou os rótulos em braile da Chapoutier?", a: "Um cego dedicado à difusão do braile", x: ["O fundador da Chapoutier", "Um bispo da corte papal de Avignon", "Um general de Napoleão"] },
    ],
  },
  fr_jaboulet_chapelle: {
    fact: "Lenda do Rhône batizada em homenagem à capela no alto da colina de Hermitage. A safra 1961 é considerada um dos maiores vinhos do século XX.",
    quiz: [
      { q: "De onde vem o nome La Chapelle, na colina de Hermitage?", a: "Da pequena capela no alto da colina", x: ["Da catedral de um antigo mosteiro", "De um pavilhão de caça real", "De um templo romano"] },
      { q: "Que família, dona do Château La Lagune em Bordeaux, comprou em 2006 a Paul Jaboulet Aîné, produtora do La Chapelle?", a: "Família Frey", x: ["Família Perrin", "Família Guigal", "Família Rothschild"] },
    ],
  },
  fr_jaboulet_p45: {
    fact: "O vinho do dia a dia emblemático da Paul Jaboulet Aîné, grande casa do Rhône fundada em 1834. É um Côtes du Rhône descomplicado, feito com uvas do Rhône Sul.",
    quiz: [
      { q: "O que significa o nome Parallèle 45?", a: "O paralelo 45° norte, que passa perto da vinícola", x: ["Os 45 anos da fundação", "45 castas diferentes", "45 meses de amadurecimento"] },
    ],
  },
  fr_chave_hermitage: {
    fact: "O maior domaine do Rhône, que faz uma só garrafa reunindo vinhos de várias parcelas da colina de Hermitage. A família Chave começou a comprar vinhedos em Hermitage em 1865.",
    quiz: [
      { q: "Em que ano começa a viticultura “passada de pai para filho” citada no rótulo de Jean-Louis Chave?", a: "1481", x: ["1731", "1808", "1946"] },
    ],
  },
  fr_jamet: {
    fact: "Domaine tradicionalista que mistura Syrah de várias parcelas de Côte-Rôtie. Adepto da fermentação com cachos inteiros, é considerado um modelo de Syrah do Rhône Norte com notas intensas de especiarias.",
    quiz: [
      { q: "A que se refere o nome “Côte-Rôtie” (encosta assada), do vinho do Domaine Jamet?", a: "Às encostas íngremes voltadas para o sul, aquecidas pelo sol", x: ["A um solo de cinzas vulcânicas", "Ao amadurecimento em barricas tostadas", "A um antigo vinhedo queimado num incêndio"] },
    ],
  },
  fr_clape_cornas: {
    fact: "Domaine que fez o nome de Cornas vinificando Syrah à moda tradicional quando a denominação ainda era desconhecida. Hoje o filho e o neto dão continuidade.",
    quiz: [
      { q: "Qual é o significado tradicionalmente atribuído ao nome “Cornas”, onde fica Auguste Clape?", a: "Terra queimada (em celta)", x: ["Colina pedregosa", "Terra do papa", "Rio negro"] },
    ],
  },
  fr_grillet: {
    fact: "Santuário do Viognier onde uma única propriedade ocupa toda a AOC. A garrafa marrom, fina e alongada, que nenhuma outra vinícola francesa usa, é sua marca registrada.",
    quiz: [
      { q: "O que a AOC Château-Grillet tem de especial?", a: "Uma única propriedade ocupa a AOC inteira", x: ["É a única AOC de espumante do Rhône", "Exige misturar tinto e branco", "Paga tributo anual ao papa"] },
      { q: "Quem, dono do Château Latour em Bordeaux, comprou o Château-Grillet em 2011?", a: "François Pinault", x: ["Bernard Arnault", "Martin Bouygues", "Stan Kroenke"] },
    ],
  },
  fr_vernay_condrieu: {
    fact: "Domaine de Georges Vernay, que salvou o Viognier da extinção nos anos 1960. Ele era chamado de “papa de Condrieu”.",
    quiz: [
      { q: "O que acontecia com os vinhedos de Condrieu nos anos 1960, quando Georges Vernay salvou o Viognier?", a: "Tinham encolhido a poucos hectares e quase sumiram", x: ["A filoxera foi descoberta ali pela primeira vez", "Foram promovidos a Grand Cru", "Passaram a produzir vinho tinto"] },
    ],
  },
  fr_rayas: {
    fact: "Vinho cult de Châteauneuf-du-Pape feito com 100% Grenache em solos arenosos cercados por bosques. É famoso também pela adega antiga e pelo rótulo simples.",
    quiz: [
      { q: "Que família comanda o Château Rayas há gerações?", a: "Família Reynaud", x: ["Família Perrin", "Família Brunier", "Família Avril"] },
    ],
  },
  fr_closdespapes: {
    fact: "Grande nome de Châteauneuf-du-Pape mantido há gerações pela família Avril. A safra 2007 ficou em 1º lugar no “Vinho do Ano” da Wine Spectator.",
    quiz: [
      { q: "Que família mantém o Clos des Papes há gerações?", a: "Família Avril", x: ["Família Reynaud", "Família Brunier", "Família Féraud"] },
    ],
  },
  fr_vieuxtelegraphe: {
    fact: "Châteauneuf-du-Pape do planalto de La Crau, coberto de seixos arredondados (galets). A família Brunier cuida dele desde o fim do século XIX.",
    quiz: [
      { q: "De onde vem o nome Vieux Télégraphe?", a: "De uma torre de telégrafo óptico de Chappe, do fim do século XVIII", x: ["De uma agência de telégrafo do século XIX", "Do campanário do palácio papal", "De um posto de sinalização ferroviária"] },
      { q: "Em que planalto coberto de seixos arredondados fica o Vieux Télégraphe?", a: "La Crau", x: ["La Nerthe", "Côte Blonde", "Les Bessards"] },
    ],
  },
  fr_pegau: {
    fact: "Châteauneuf-du-Pape tradicionalista comandado por Paul Féraud e sua filha Laurence. As uvas fermentam com engaço e amadurecem por muito tempo em grandes tonéis (foudres).",
    quiz: [
      { q: "O que significa o nome “Pégau”, do Domaine du Pégau?", a: "Uma jarra de vinho medieval de barro", x: ["O chapéu do papa", "Um vinhedo pedregoso", "Um ninho de pombos"] },
    ],
  },
  fr_lanerthe: {
    fact: "Uma das propriedades mais antigas de Châteauneuf-du-Pape, já citada em registros do século XVI. Faz vinhos equilibrados de Grenache com Syrah e Mourvèdre.",
    quiz: [
      { q: "O que significa “Châteauneuf-du-Pape”, onde fica o Château La Nerthe?", a: "Castelo novo do papa", x: ["Antigo vinhedo do papa", "Vinho do novo papa", "Jardim de verão do papa"] },
    ],
  },
  fr_bonneau_celestins: {
    fact: "Lenda de Châteauneuf-du-Pape, amadurecida longamente numa apertada adega subterrânea da vila e lançada só nos bons anos. Desde a morte de Henri Bonneau, em 2016, o filho Marcel dá continuidade.",
    quiz: [
      { q: "Que outra cuvée Henri Bonneau produz além da Réserve des Célestins?", a: "Cuvée Marie Beurrier", x: ["Cuvée Da Capo", "Hommage à Jacques Perrin", "La Crau"] },
    ],
  },
  fr_perrin_cdr: {
    fact: "Côtes du Rhône do dia a dia feito pela família Perrin, que comanda o Château de Beaucastel. Leva Grenache com Syrah e Mourvèdre.",
    quiz: [
      { q: "Que rosé da Provence a família Perrin fez em parceria com astros de Hollywood?", a: "Miraval", x: ["Whispering Angel", "Minuty", "Domaines Ott"] },
    ],
  },
  fr_aqueria_tavel: {
    fact: "Propriedade emblemática da AOC Tavel, onde só se permite rosé. Mais escuro e encorpado que os rosés da Provence, combina bem com comida.",
    quiz: [
      { q: "Complete a expressão sobre o rosé de Tavel, como o do Château d’Aqueria: “o rosé dos reis, o ___ dos rosés”.", a: "Rei", x: ["Rainha", "Papa", "Imperador"] },
    ],
  },
  fr_dp_rose: {
    fact: "O rosé do Dom Pérignon, feito só em anos de boa colheita. A primeira safra, 1959, foi vendida quase toda ao xá do Irã.",
    quiz: [
      { q: "Em que banquete histórico de 1971 se brindou com o Dom Pérignon Rosé 1959?", a: "Na festa dos 2.500 anos do Império Persa", x: ["No jantar de abertura da Exposição Universal de Paris", "No jantar de posse do presidente Kennedy", "No casamento de Rainier III de Mônaco"] },
    ],
  },
  fr_moet_rose: {
    fact: "A versão rosé do Moët Impérial. Leva vinho tinto de Pinot Noir, que dá a cor rosada e aromas de morango e cereja.",
    quiz: [
      { q: "Em que ano foi fundada a Moët & Chandon, que produz o Rosé Impérial?", a: "1743", x: ["1729", "1772", "1811"] },
    ],
  },
  fr_moet_ice: {
    fact: "Lançado em 2011, foi o primeiro Champagne do mundo feito para ser bebido com gelo. É doce e intenso para não perder o sabor quando o gelo derrete.",
    quiz: [
      { q: "Qual é a forma recomendada de beber o Moët & Chandon Ice Impérial?", a: "Em taça grande, com gelo", x: ["Aquecido", "Meio a meio com ginger ale", "Direto da garrafa, de canudinho"] },
    ],
  },
  fr_veuve_lgd: {
    fact: "A cuvée de prestígio da Veuve Clicquot. Foi lançada em 1972, no bicentenário da casa, com a safra 1962.",
    quiz: [
      { q: "Quem o nome La Grande Dame (“a grande dama”), da Veuve Clicquot, homenageia?", a: "Madame Clicquot", x: ["Maria Antonieta", "A imperatriz Josefina", "Lily Bollinger"] },
    ],
  },
  fr_veuve_rose: {
    fact: "Rosé feito misturando vinho tinto ao blend do Yellow Label. A Veuve Clicquot é considerada a casa que criou esse método de rosé por assemblage.",
    quiz: [
      { q: "Em que ano Madame Clicquot criou o primeiro Champagne rosé misturando vinho tinto, como no Veuve Clicquot Rosé?", a: "1818", x: ["1729", "1874", "1921"] },
    ],
  },
  fr_roederer_collection: {
    fact: "O não safrado da Louis Roederer lançado em 2021 no lugar do antigo Brut Premier. É feito pelo método de “reserva perpétua”, que mistura vinhos de reserva acumulados ano após ano.",
    quiz: [
      { q: "O que significam números como “242” e “243” no Louis Roederer Collection?", a: "O número do blend desde a fundação, em 1776", x: ["Os meses de amadurecimento", "O número de vinhos no corte", "A produção em milhares de garrafas"] },
    ],
  },
  fr_krug_gc: {
    fact: "O Champagne emblemático da Krug, feito com mais de 120 vinhos de uns dez anos diferentes. Cada garrafa traz o número da sua “edição”.",
    quiz: [
      { q: "Quem fundou a Krug, produtora do Grande Cuvée, em 1843?", a: "Joseph Krug", x: ["Nicolas Ruinart", "Florens-Louis Heidsieck", "Claude Moët"] },
    ],
  },
  fr_krug_mesnil: {
    fact: "Feito só com Chardonnay de um vinhedo murado de 1,84 ha no centro da vila de Le Mesnil-sur-Oger. A Krug o comprou em 1971 e lançou a primeira safra, 1979.",
    quiz: [
      { q: "Em que ano foi erguido o muro de pedra que cerca o vinhedo do Krug Clos du Mesnil?", a: "1698", x: ["1843", "1971", "1979"] },
    ],
  },
  fr_krug_rose: {
    fact: "Rosé que soma vinho tinto de Pinot Noir ao método Krug de misturar vários anos. Como o Grande Cuvée, leva número de edição.",
    quiz: [
      { q: "Que grupo é dono da Krug, produtora do Krug Rosé, desde 1999?", a: "LVMH", x: ["Kering", "Pernod Ricard", "Grupo Laurent-Perrier"] },
    ],
  },
  fr_bollinger_sc: {
    fact: "O Champagne emblemático da Bollinger, fundada em Aÿ em 1829. Com muita Pinot Noir e parte fermentada em barrica, é encorpado.",
    quiz: [
      { q: "Que personagem de cinema é famoso por sua longa ligação com o Bollinger Special Cuvée?", a: "James Bond", x: ["Sherlock Holmes", "Indiana Jones", "Jay Gatsby"] },
      { q: "Que dirigente da Bollinger disse beber Champagne “quando está feliz e quando está triste”?", a: "Lily Bollinger", x: ["Madame Clicquot", "Louise Pommery", "Coco Chanel"] },
    ],
  },
  fr_bollinger_ga: {
    fact: "O Champagne safrado da Bollinger, feito só em bons anos. Todos os vinhos fermentam em pequenas barricas de carvalho.",
    quiz: [
      { q: "Que tampa o Bollinger La Grande Année usa durante o longo amadurecimento na garrafa?", a: "Rolha de cortiça natural", x: ["Tampa metálica (crown cap)", "Tampa de rosca", "Tampa de vidro"] },
    ],
  },
  fr_bollinger_rd: {
    fact: "Obra-prima da Bollinger, amadurecida longamente sobre as borras, que só são retiradas pouco antes do lançamento. A primeira safra foi a de 1952.",
    quiz: [
      { q: "O que significa “R.D.” no Bollinger R.D.?", a: "Récemment dégorgé (dégorgement recente)", x: ["Royal Delivery (fornecedor real)", "Red Dry", "Réserve du Domaine"] },
      { q: "Que novidade o Bollinger R.D. trouxe à história dos rótulos de Champagne?", a: "Indicar a data do dégorgement no rótulo", x: ["Gravar braile no rótulo", "Imprimir direto na garrafa, sem rótulo", "Pôr um código QR no rótulo"] },
    ],
  },
  fr_salon: {
    fact: "Começou com o Champagne que Eugène-Aimé Salon fazia para consumo próprio no início do século XX. Feito só em anos excepcionais, sai apenas algumas dezenas de vezes por século.",
    quiz: [
      { q: "Qual é a regra especial de produção do Salon?", a: "Só Chardonnay de uma vila, Le Mesnil-sur-Oger, em anos excepcionais", x: ["É feito todo ano, só em versão rosé", "Só é lançado como não safrado, misturando anos", "Usa apenas Pinot Noir"] },
      { q: "Que casa-irmã, vizinha de muro do Salon, pertence ao mesmo grupo Laurent-Perrier?", a: "Delamotte", x: ["Krug", "Bollinger", "Henriot"] },
    ],
  },
  fr_taittinger_br: {
    fact: "O não safrado emblemático da Taittinger, leve e elegante graças à proporção relativamente alta de Chardonnay. Amadurece nas caves de giz sob a antiga abadia de Saint-Nicaise, em Reims.",
    quiz: [
      { q: "Que antiga casa de Champagne, precursora da Taittinger, Pierre Taittinger comprou em 1932 e rebatizou com seu nome?", a: "Forest-Fourneaux", x: ["Heidsieck Monopole", "Ruinart", "Delamotte"] },
    ],
  },
  fr_taittinger_comtes: {
    fact: "A cuvée de prestígio da Taittinger, feita só em bons anos com Chardonnay Grand Cru da Côte des Blancs. A primeira safra foi a de 1952.",
    quiz: [
      { q: "Quem o nome Comtes de Champagne, da Taittinger, homenageia?", a: "Teobaldo IV, conde de Champagne, que voltou das Cruzadas", x: ["Carlos Magno", "Napoleão I", "São Remígio, arcebispo de Reims"] },
    ],
  },
  fr_polroger_br: {
    fact: "Casa familiar fundada em Épernay em 1849. Fornecedora oficial da Casa Real britânica, foi servida no casamento do príncipe William em 2011.",
    quiz: [
      { q: "Que apelido o Pol Roger Brut Réserve ganhou no Reino Unido por causa da cor da cápsula?", a: "White Foil", x: ["Gold Foil", "Black Label", "Yellow Label"] },
    ],
  },
  fr_polroger_swc: {
    fact: "Cuvée de prestígio criada a partir da safra 1975 em homenagem a Churchill, fã do Pol Roger a vida inteira. Segue o estilo potente, à base de Pinot Noir, que ele apreciava.",
    quiz: [
      { q: "O que a Pol Roger fez nos rótulos exportados para o Reino Unido quando Churchill morreu, em 1965?", a: "Contornou o rótulo com uma faixa preta", x: ["Pôs o retrato de Churchill no rótulo", "Parou a produção naquele ano", "Pintou as garrafas de vermelho"] },
      { q: "Que nome Churchill deu a seu cavalo de corrida em homenagem a Odette Pol-Roger?", a: "Pol Roger", x: ["Champagne", "Victory", "Blenheim"] },
    ],
  },
  fr_lp_lacuvee: {
    fact: "O não safrado emblemático da casa fundada em Tours-sur-Marne em 1812. Com alta proporção de Chardonnay, é límpido e fresco.",
    quiz: [
      { q: "Quem comandou a Laurent-Perrier a partir de 1949 e a transformou numa casa de fama mundial?", a: "Bernard de Nonancourt", x: ["Pierre Taittinger", "Lily Bollinger", "Joseph Krug"] },
    ],
  },
  fr_lp_rose: {
    fact: "Lançado em 1968 numa garrafa com brasão inspirada nas da época de Henrique IV. Feito com 100% Pinot Noir, é uma referência de Champagne rosé.",
    quiz: [
      { q: "Como o Laurent-Perrier Cuvée Rosé ganha sua cor rosada?", a: "Por maceração, deixando as cascas de Pinot Noir em contato com o mosto", x: ["Misturando vinho tinto", "Adicionando corante vegetal", "Amadurecendo muito tempo em barrica"] },
    ],
  },
  fr_lp_gs: {
    fact: "A cuvée máxima da Laurent-Perrier, que mistura vinhos de três grandes safras para recriar um “ano perfeito”. Cada edição recebe um número de “Itération”.",
    quiz: [
      { q: "Em que o Laurent-Perrier Grand Siècle difere da maioria dos Champagnes de prestígio?", a: "Mistura três grandes safras", x: ["Usa uvas de um só ano", "É feito só em versão rosé", "Amadurece 10 anos em barrica"] },
      { q: "Que rei governou a época a que se refere “Grand Siècle” (o grande século)?", a: "Luís XIV", x: ["Luís XVI", "Napoleão I", "Henrique IV"] },
    ],
  },
  fr_r_ruinart: {
    fact: "O não safrado emblemático da Ruinart, a primeira casa de Champagne, fundada em 1729. Vem numa garrafa redonda inspirada nas do século XVIII.",
    quiz: [
      { q: "Como se chamam as caves da Ruinart onde o R de Ruinart amadurece, pedreiras de giz escavadas desde a época romana?", a: "Crayères", x: ["Cuverie", "Chai", "Bodega"] },
    ],
  },
  fr_dom_ruinart: {
    fact: "A cuvée de prestígio da Ruinart, feita só em bons anos com Chardonnay Grand Cru. A pista é o dourado na garrafa redonda e transparente.",
    quiz: [
      { q: "Que monge, que teria aconselhado o sobrinho a entrar no negócio do Champagne, é homenageado pelo Dom Ruinart?", a: "Dom Thierry Ruinart", x: ["Dom Pierre Pérignon", "São Bernardo", "São Remígio"] },
    ],
  },
  fr_pj_grandbrut: {
    fact: "O não safrado emblemático da Perrier-Jouët, fundada em Épernay em 1811. Com muita Pinot Noir e Pinot Meunier, é rico em aromas de fruta.",
    quiz: [
      { q: "De onde vem o nome da casa Perrier-Jouët, produtora do Grand Brut?", a: "Dos sobrenomes do casal fundador", x: ["Do nome de duas vilas", "Dos nomes de dois irmãos fundadores", "Dos nomes de dois vinhedos de Champagne"] },
      { q: "Que flor, desenhada pelo artista art nouveau Émile Gallé, simboliza a Perrier-Jouët?", a: "Anêmona", x: ["Rosa", "Lírio", "Tulipa"] },
    ],
  },
  fr_pj_blason: {
    fact: "Champagne rosé com rótulo inspirado no brasão da família Perrier-Jouët. Leva vinho tinto de Pinot Noir, que dá aromas de frutas vermelhas.",
    quiz: [
      { q: "O que significa “Blason” em Perrier-Jouët Blason Rosé?", a: "Brasão de família", x: ["Rosa", "Rainha", "Primeiro amor"] },
    ],
  },
  fr_armand_rose: {
    fact: "Rosé em garrafa metalizada cor-de-rosa com rótulo de estanho em forma de naipe de espadas. Em 2014, o rapper Jay-Z comprou a marca.",
    quiz: [
      { q: "Que apelido o Armand de Brignac Rosé ganhou pelo formato do rótulo de estanho?", a: "Ace of Spades", x: ["King of Hearts", "Queen of Diamonds", "Joker"] },
      { q: "Que rapper americano comprou a Armand de Brignac em 2014?", a: "Jay-Z", x: ["Kanye West", "Snoop Dogg", "Drake"] },
    ],
  },
  fr_piper: {
    fact: "Champagne reconhecível de longe pelo rótulo vermelho vivo. Por muito tempo foi o Champagne oficial do Festival de Cannes.",
    quiz: [
      { q: "A que rainha o fundador da Piper-Heidsieck teria dedicado sua primeira cuvée?", a: "Maria Antonieta", x: ["A imperatriz Josefina", "A rainha Vitória", "Catarina de Médici"] },
    ],
  },
  fr_charles_heidsieck: {
    fact: "Casa fundada em 1851 por Charles-Camille Heidsieck. É famosa pelo não safrado de sabor evoluído, com generosa proporção de vinhos de reserva.",
    quiz: [
      { q: "O que aconteceu com o fundador da Charles Heidsieck, chamado nos Estados Unidos de “Champagne Charlie”?", a: "Foi preso como espião na Guerra de Secessão", x: ["Sobreviveu ao Titanic", "Alistou-se no exército de Napoleão", "Ficou rico na corrida do ouro"] },
    ],
  },
  fr_feuillatte: {
    fact: "Marca criada em 1976 pela união de cooperativas de inúmeros viticultores. É um dos Champagnes mais vendidos da França.",
    quiz: [
      { q: "O que caracteriza quem produz o Champagne Nicolas Feuillatte?", a: "Uma união de cooperativas com milhares de viticultores", x: ["Uma família nobre desde o século XVII", "Um domaine com um só vinhedo monopole", "Uma casa exclusiva da corte russa"] },
    ],
  },
  fr_mumm: {
    fact: "Casa fundada em Reims em 1827 pela família Mumm, de origem alemã. É famosa pela faixa vermelha que atravessa o rótulo na diagonal.",
    quiz: [
      { q: "Em que se inspirou a faixa vermelha do Mumm Cordon Rouge?", a: "Na faixa vermelha da Legião de Honra", x: ["Na bandeira da França", "No chapéu vermelho de cardeal", "No brasão da casa imperial russa"] },
      { q: "Em que competição esportiva o Mumm Cordon Rouge foi por muito tempo, a partir de 2000, o Champagne do pódio?", a: "Fórmula 1", x: ["Tour de France", "Wimbledon", "Copa do Mundo da FIFA"] },
    ],
  },
  fr_lanson_black: {
    fact: "O não safrado emblemático da casa fundada em Reims em 1760. Sem fermentação malolática, conserva uma acidez fresca, de maçã.",
    quiz: [
      { q: "Que símbolo da casa aparece no gargalo do Lanson Le Black Label?", a: "A cruz de Malta", x: ["A flor-de-lis", "Um leão", "Uma coroa"] },
      { q: "De que torneio de tênis a Lanson é Champagne oficial desde 1977?", a: "Wimbledon", x: ["Roland Garros", "US Open", "Australian Open"] },
    ],
  },
  fr_billecart_rose: {
    fact: "Champagne rosé famoso pelo tom salmão claro na garrafa transparente. Um pouco de vinho tinto de Pinot Noir num blend rico em Chardonnay o deixa delicado.",
    quiz: [
      { q: "De onde vem o nome Billecart-Salmon?", a: "Dos sobrenomes do casal fundador, casado em 1818", x: ["Da cor salmão do rosé", "Dos nomes de duas vilas", "Dos apelidos de dois irmãos fundadores"] },
    ],
  },
  fr_selosse_initial: {
    fact: "Epicentro da febre dos “Champagnes de vinhateiro”, feitos com uvas próprias. Fermentado em barrica, como na Borgonha, dá um Champagne com cara de vinho.",
    quiz: [
      { q: "Quem comanda a Jacques Selosse e desencadeou a febre dos Champagnes de vinhateiro?", a: "Anselme Selosse", x: ["Rémi Krug", "Bernard de Nonancourt", "Charles Philipponnat"] },
      { q: "O que significa a sigla “RM” no rótulo de Champagnes de vinhateiro como o Jacques Selosse?", a: "Récoltant-manipulant (quem cultiva e vinifica)", x: ["Négociant-manipulant (casa que compra uvas)", "Coopérative de manipulation (cooperativa)", "Marque d’acheteur (marca de distribuidor)"] },
    ],
  },
  fr_philipponnat_goisses: {
    fact: "Vinhedo de 5,5 ha numa encosta voltada para o sul, com inclinação de quase 45 graus, sobre o rio Marne. Mais quente que o resto de Champagne, dá Champagnes potentes.",
    quiz: [
      { q: "Qual é a importância do Philipponnat Clos des Goisses na história do Champagne?", a: "É considerado o primeiro Champagne de vinhedo único", x: ["Foi o primeiro Champagne rosé", "Foi o primeiro Champagne brut", "Foi o primeiro Blanc de Blancs"] },
    ],
  },
  fr_deutz: {
    fact: "Casa fundada em Aÿ em 1838 pelos alemães William Deutz e Pierre-Hubert Geldermann. Mistura as três castas em proporções parecidas e tem ótimo equilíbrio.",
    quiz: [
      { q: "Que casa de Champagne comprou a Deutz em 1993?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  fr_henriot: {
    fact: "Casa familiar fundada em Reims em 1808 por Apolline Henriot. É conhecida pelo estilo delicado, com alta proporção de Chardonnay.",
    quiz: [
      { q: "Que duas grandes casas da Borgonha a família Henriot comprou nos anos 1990?", a: "Bouchard Père & Fils e William Fèvre", x: ["Louis Jadot e Joseph Drouhin", "Louis Latour e Faiveley", "Leroy e Leflaive"] },
    ],
  },
  fr_gosset: {
    fact: "A mais antiga casa de vinhos de Champagne, iniciada em Aÿ em 1584 por Pierre Gosset, que fazia vinhos sem bolhas. Usa uma garrafa inspirada nas antigas.",
    quiz: [
      { q: "Que ano de fundação faz da Gosset a casa de vinhos mais antiga de Champagne?", a: "1584", x: ["1729", "1743", "1811"] },
    ],
  },
  fr_pommery: {
    fact: "Casa de Reims desenvolvida por Madame Louise Pommery depois de ficar viúva. É famosa pelas enormes caves que interligam antigas pedreiras de giz da época romana.",
    quiz: [
      { q: "Que estilo a Pommery lançou em 1874, mudando a história do Champagne?", a: "O brut, quase sem açúcar", x: ["O Champagne rosé", "O Champagne safrado", "O Blanc de Blancs"] },
      { q: "Que mulher comandava a Pommery quando ela lançou o primeiro Champagne brut?", a: "Madame Louise Pommery", x: ["Madame Clicquot", "Lily Bollinger", "Carol Duval-Leroy"] },
    ],
  },
  fr_duval_leroy: {
    fact: "Casa familiar fundada em 1859 em Vertus, na Côte des Blancs. Algo raro entre as grandes casas, ainda é administrada pela família fundadora.",
    quiz: [
      { q: "Que empresária comanda a Duval-Leroy desde que ficou viúva, em 1991?", a: "Carol Duval-Leroy", x: ["Lily Bollinger", "Madame Clicquot", "Louise Pommery"] },
    ],
  },
  fr_ayala: {
    fact: "Casa fundada em Aÿ em 1860 por Edmond de Ayala. Cedo ficou conhecida por Champagnes secos, com pouco açúcar.",
    quiz: [
      { q: "Que família de Champagne comprou a Ayala em 2005?", a: "Bollinger", x: ["LVMH", "Louis Roederer", "Taittinger"] },
    ],
  },
  fr_delamotte: {
    fact: "Fundada em 1760, é uma das casas mais antigas de Champagne. Usa Chardonnay Grand Cru da Côte des Blancs.",
    quiz: [
      { q: "Que lendário Champagne, de uma casa-irmã vizinha de muro da Delamotte, é feito com Chardonnay de uma só vila e só em bons anos?", a: "Salon", x: ["Krug Clos du Mesnil", "Dom Ruinart", "Taittinger Comtes de Champagne"] },
    ],
  },
  fr_dagueneau_silex: {
    fact: "Obra-prima de Dagueneau, o “enfant terrible do Loire”, que levou Pouilly-Fumé ao topo mundial do Sauvignon Blanc. Desde sua morte num acidente de ultraleve, em 2008, o filho Louis-Benjamin dá continuidade.",
    quiz: [
      { q: "A que se refere o nome “Silex”, de Didier Dagueneau?", a: "Ao solo de sílex (pederneira)", x: ["Ao rótulo prateado", "À palavra latina para “silêncio”", "Ao nome do cachorro do fundador"] },
    ],
  },
  fr_ladoucette: {
    fact: "Vinho da família Ladoucette, dona da maior propriedade de Pouilly-Fumé. A sede é o Château du Nozet, um castelo de conto de fadas.",
    quiz: [
      { q: "Qual é o castelo-sede da família Ladoucette, produtora do de Ladoucette Pouilly-Fumé?", a: "Château du Nozet", x: ["Château de Tracy", "Château-Grillet", "Château de Saumur"] },
    ],
  },
  fr_bourgeois_sancerre: {
    fact: "O Sancerre emblemático de uma vinícola familiar que atravessa gerações na vila de Chavignol, em Sancerre. É considerado um Sauvignon Blanc fresco de manual.",
    quiz: [
      { q: "Onde a Henri Bourgeois fundou em 2000 a nova vinícola “Clos Henri”, em busca de Sauvignon Blanc?", a: "Marlborough, Nova Zelândia", x: ["Vale de Casablanca, Chile", "Stellenbosch, África do Sul", "Napa Valley, EUA"] },
      { q: "Por que outra coisa é famosa a vila de Chavignol, onde fica a Henri Bourgeois?", a: "Pelo queijo de cabra Crottin de Chavignol", x: ["Pelas ostras", "Pelas trufas", "Pela mostarda"] },
    ],
  },
  fr_jolivet_sancerre: {
    fact: "Vinícola jovem que começou como négociant, sem vinhedos, e virou referência no Loire oriental. Faz tanto Sancerre quanto Pouilly-Fumé.",
    quiz: [
      { q: "Em que ano Pascal Jolivet fundou a empresa de vinhos com seu nome?", a: "1987", x: ["1808", "1920", "1961"] },
    ],
  },
  fr_vacheron_sancerre: {
    fact: "Domaine familiar no coração da vila de Sancerre. Vinifica separadamente, parcela por parcela, o Sauvignon Blanc de vinhedos cultivados em biodinâmica.",
    quiz: [
      { q: "Que outro vinho do Domaine Vacheron recebe elogios raros em Sancerre?", a: "O tinto de Pinot Noir", x: ["O tinto de Cabernet Sauvignon", "O doce botritizado", "O fortificado"] },
    ],
  },
  fr_huet_vouvray: {
    fact: "A grande casa de Chenin Blanc de Vouvray. Conforme a safra, faz no mesmo vinhedo versões secas, meio-secas e doces.",
    quiz: [
      { q: "Os três famosos vinhedos únicos do Domaine Huet são Le Mont, Clos du Bourg e qual?", a: "Le Haut-Lieu", x: ["La Roche aux Moines", "Clos de la Dioterie", "Les Baronnes"] },
    ],
  },
  fr_joly_coulee: {
    fact: "Vinhedo plantado pela primeira vez por monges cistercienses em 1130. É uma das raras AOC monopole, pertencente inteira a uma só família.",
    quiz: [
      { q: "Que método de cultivo Nicolas Joly, do Clos de la Coulée de Serrant, divulgou pelo mundo?", a: "Biodinâmica", x: ["Hidroponia", "Cultivo irrigado em massa", "Cultivo em estufa"] },
    ],
  },
  fr_rougeard: {
    fact: "Cabernet Franc do Loire que os irmãos Charly e Nady Foucault, com métodos tradicionais, elevaram a status cult mundial.",
    quiz: [
      { q: "Que irmãos, donos do Château Montrose em Bordeaux, compraram o Clos Rougeard em 2017?", a: "Martin e Olivier Bouygues", x: ["Família Pinault", "Família Arnault", "Família Rothschild"] },
    ],
  },
  fr_joguet_chinon: {
    fact: "O primeiro domaine de Chinon a lançar cuvées separadas por vinhedo. O Clos de la Dioterie é seu vinhedo emblemático, de velhas vinhas de Cabernet Franc.",
    quiz: [
      { q: "O que Charles Joguet fazia em Paris antes de herdar o vinhedo da família, em 1957?", a: "Era pintor e escultor", x: ["Cantor de ópera", "Cineasta", "Arquiteto"] },
    ],
  },
  fr_pepiere_briords: {
    fact: "Muscadet de velhas vinhas plantadas entre os anos 1930 e 1950. Muscadet não é casta, e sim nome de região; é o par clássico das ostras.",
    quiz: [
      { q: "O que significa “sur lie” no rótulo de Muscadets como o Clos des Briords?", a: "Amadurecido sobre as borras de levedura", x: ["De vinhedo à beira do rio", "De colheita tardia", "Amadurecido em barricas novas"] },
    ],
  },
  fr_trimbach_csh: {
    fact: "Monopole de 1,67 ha no coração do Grand Cru Rosacker, em Hunawihr. Cultivado pela família Trimbach há mais de 200 anos, é um dos maiores Rieslings secos do mundo.",
    quiz: [
      { q: "O que a Trimbach deixa de propósito de indicar no rótulo do Clos Sainte Hune?", a: "A menção Grand Cru", x: ["A safra", "O nome da casta", "O nome do produtor"] },
    ],
  },
  fr_trimbach_gewurz: {
    fact: "A casta emblemática da Alsácia, que explode em aromas de lichia e rosa. A Trimbach é famosa por vinificá-la seca, sem açúcar.",
    quiz: [
      { q: "Em que ano a Trimbach, produtora deste Gewurztraminer, começou a fazer vinho na Alsácia?", a: "1626", x: ["1639", "1731", "1919"] },
    ],
  },
  fr_hugel_gentil: {
    fact: "Corte à moda alsaciana de várias castas, como Gewurztraminer, Pinot Gris, Riesling e Sylvaner. “Gentil” era o antigo nome dos cortes de castas nobres.",
    quiz: [
      { q: "Em que ano a família Hugel, que produz o Gentil, começou a fazer vinho em Riquewihr?", a: "1639", x: ["1626", "1789", "1919"] },
    ],
  },
  fr_hugel_riesling: {
    fact: "O Riesling emblemático da Hugel, famoso pelo rótulo amarelo. É uma das garrafas mais comuns para quem prova vinho da Alsácia pela primeira vez.",
    quiz: [
      { q: "Que cor de rótulo faz os vinhos Hugel, como este Riesling, se destacarem de longe?", a: "Amarelo", x: ["Preto", "Azul", "Vermelho"] },
      { q: "Que categorias de vinho doce da Alsácia Jean Hugel ajudou a regulamentar nos anos 1980?", a: "Vendanges Tardives e Sélection de Grains Nobles", x: ["Grand Cru e Premier Cru", "Crémant d’Alsace", "Vin de Table"] },
    ],
  },
  fr_zind_rangen: {
    fact: "Vinhedo na encosta vulcânica e íngreme do Rangen, o Grand Cru mais ao sul da Alsácia. A Zind-Humbrecht nasceu em 1959 da união dos vinhedos de duas famílias.",
    quiz: [
      { q: "Que título Olivier Humbrecht, da Zind-Humbrecht, obteve em 1989, o primeiro francês a conquistá-lo?", a: "Master of Wine (MW)", x: ["Master Sommelier (MS)", "Diplôme National d’Œnologue (DNO)", "Meilleur Ouvrier de France (MOF)"] },
    ],
  },
  fr_weinbach_schlossberg: {
    fact: "Domaine situado no Clos des Capucins, cultivado por monges capuchinhos em 1612. É comandado pela família Faller desde 1898.",
    quiz: [
      { q: "Quem cultivou pela primeira vez o Clos des Capucins do Domaine Weinbach, em 1612?", a: "Monges capuchinhos", x: ["Freiras cistercienses", "Templários", "Padres jesuítas"] },
      { q: "Que recorde o Schlossberg, de onde vem este Riesling Weinbach, conquistou em 1975?", a: "Primeiro Grand Cru da Alsácia", x: ["Maior vinhedo cooperativo da Alsácia", "Primeiro vinhedo orgânico certificado da Alsácia", "Menor AOC da França"] },
    ],
  },
  fr_deiss_altenberg: {
    fact: "Várias castas são plantadas misturadas no mesmo vinhedo, colhidas e vinificadas juntas. Por isso o rótulo destaca só o nome do vinhedo, não o da casta.",
    quiz: [
      { q: "Que filosofia Jean-Michel Deiss, da Marcel Deiss, defendeu?", a: "Terroir acima da casta, com várias castas plantadas juntas", x: ["Usar só uma casta, 100%", "Usar só ânforas, nunca barricas", "Fazer só espumantes"] },
    ],
  },
  fr_miraval: {
    fact: "Sinônimo de rosé de celebridade, com primeira safra em 2012. O Château Miraval fica em Correns, no interior da Provence.",
    quiz: [
      { q: "Que casal de Hollywood criou o Miraval rosé com a família Perrin?", a: "Brad Pitt e Angelina Jolie", x: ["Tom Cruise e Katie Holmes", "George e Amal Clooney", "Hugh Jackman e Deborra-Lee Furness"] },
      { q: "Que banda gravou parte do álbum “The Wall” no estúdio do Château Miraval?", a: "Pink Floyd", x: ["The Beatles", "The Rolling Stones", "Queen"] },
    ],
  },
  fr_minuty_m: {
    fact: "Rosé leve e fresco de uma família da península de Saint-Tropez, em atividade desde 1936. A garrafa de cintura fina, em forma de “espartilho”, foi criada por essa família nos anos 1960.",
    quiz: [
      { q: "Que grupo se tornou acionista majoritário do Château Minuty, produtor do M de Minuty, em 2023?", a: "LVMH (Moët Hennessy)", x: ["Pernod Ricard", "Groupe Castel", "Artémis"] },
    ],
  },
  fr_minuty_281: {
    fact: "O rosé de topo da Minuty, lançado em 2015. A decoração azul-escura que escorre pela lateral da garrafa é sua marca registrada.",
    quiz: [
      { q: "De onde vem o número do Château Minuty 281?", a: "Do código Pantone de um azul que lembra o Mediterrâneo", x: ["Do número do lote do vinhedo", "Das garrafas produzidas no primeiro ano", "Da altitude do vinhedo (m)"] },
    ],
  },
  fr_garrus: {
    fact: "Um dos rosés mais caros do mundo, feito com uvas de velhas vinhas de Grenache fermentadas e amadurecidas em barrica. Em 2019 a LVMH se tornou acionista majoritária do Château d’Esclans.",
    quiz: [
      { q: "Em que a vinificação do Garrus, do Château d’Esclans, difere da dos rosés comuns da Provence?", a: "Fermenta e amadurece em barrica", x: ["Mistura tinto e branco", "Recebe gás carbônico", "Usa uvas secas"] },
      { q: "Quem fundou o Château d’Esclans, produtor do Garrus e do Whispering Angel?", a: "Sacha Lichine", x: ["Gérard Bertrand", "Marc Perrin", "Michel Rolland"] },
    ],
  },
  fr_rockangel: {
    fact: "O “irmão mais velho” do Whispering Angel. Parte fermenta em barrica, o que lhe dá um sabor mais rico e redondo.",
    quiz: [
      { q: "Que escritor de vinhos, pai de Sacha Lichine (criador do Rock Angel), foi dono do Château Prieuré-Lichine em Bordeaux?", a: "Alexis Lichine", x: ["Robert Parker", "Émile Peynaud", "Hugh Johnson"] },
    ],
  },
  fr_tempier: {
    fact: "Grande nome que levou Bandol ao mundo com a Mourvèdre como base. A família Peyraud também ajudou a criar a AOC Bandol, em 1941.",
    quiz: [
      { q: "Quem, famosa pela cozinha e pela mesa do Domaine Tempier, inspirou muito a chef americana Alice Waters?", a: "Lulu Peyraud", x: ["Julia Child", "Paul Bocuse", "Madame Clicquot"] },
    ],
  },
  fr_pibarnon: {
    fact: "Grande nome de Bandol que cultiva Mourvèdre em encostas calcárias em forma de anfiteatro, voltadas para o mar.",
    quiz: [
      { q: "Que família comprou o Château de Pibarnon em 1977 e o levou ao topo de Bandol?", a: "Família de Saint-Victor", x: ["Família Peyraud", "Família Rougier", "Família Bertrand"] },
    ],
  },
  fr_simone: {
    fact: "Propriedade dona de cerca de metade de Palette, minúscula AOC perto de Aix-en-Provence. Faz brancos à base de Clairette que amadurecem por décadas.",
    quiz: [
      { q: "Que família mantém o Château Simone desde 1830?", a: "Família Rougier", x: ["Família Perrin", "Família Lichine", "Família Ott"] },
    ],
  },
  fr_daumas_gassac: {
    fact: "Lenda do Languedoc cuja primeira safra saiu em 1978, a conselho de um geólogo que reconheceu ali solos da era glacial. Foi chamado de “Grand Cru do Languedoc”.",
    quiz: [
      { q: "Que lendário enólogo de Bordeaux ajudou a vinificar a primeira safra do Mas de Daumas Gassac?", a: "Émile Peynaud", x: ["Michel Rolland", "Jules Chauvet", "Denis Dubourdieu"] },
      { q: "Quem fundou o Mas de Daumas Gassac e, por se opor à chegada de Robert Mondavi a Aniane, aparece no filme “Mondovino”?", a: "Aimé Guibert", x: ["Gérard Bertrand", "Alain Brumont", "Sacha Lichine"] },
    ],
  },
  fr_bertrand_cdr: {
    fact: "Rosé cuja garrafa tem o fundo moldado como uma rosa aberta. O desenho, de um jovem designer, venceu um concurso em 2010.",
    quiz: [
      { q: "O que caracteriza a garrafa do Gérard Bertrand Côte des Roses?", a: "O fundo tem forma de rosa", x: ["Tem formato de coração", "É de vidro azul", "O rótulo tem braile"] },
      { q: "Em que área Gérard Bertrand, criador do Côte des Roses, se destacou antes de se dedicar ao vinho?", a: "Rúgbi", x: ["Futebol", "Ciclismo", "Tênis"] },
    ],
  },
  fr_cedre: {
    fact: "Propriedade familiar emblemática de Cahors, terra natal da Malbec. Faz Malbecs escuros e potentes em vinhedos orgânicos.",
    quiz: [
      { q: "Que apelido os vinhos de Cahors, como o Château du Cèdre, receberam antigamente pela cor escura?", a: "Vinho negro", x: ["Vinho de sangue", "Vinho da noite", "Vinho de tinta"] },
    ],
  },
  fr_montus: {
    fact: "O carro-chefe de Madiran, feito com 100% Tannat. Alain Brumont, que comprou a propriedade em 1980, transformou a Tannat, tida como rústica, em vinho fino.",
    quiz: [
      { q: "Quem recuperou a fama de Madiran com o Château Montus?", a: "Alain Brumont", x: ["Gérard Bertrand", "Aimé Guibert", "Sacha Lichine"] },
    ],
  },
  fr_cauhape: {
    fact: "Vinho doce de colheita tardia feito com Petit Manseng passificada no pé até o fim do outono. O nome significa “Sinfonia de Novembro”.",
    quiz: [
      { q: "Segundo uma lenda de Jurançon, região deste vinho, que rei francês teve os lábios molhados com alho e vinho de Jurançon ao nascer?", a: "Henrique IV", x: ["Luís XIV", "Carlos Magno", "Napoleão I"] },
    ],
  },
  fr_macle: {
    fact: "O ápice do “vin jaune” (vinho amarelo), amadurecido por mais de 6 anos sob um véu de leveduras que se forma sobre o vinho no barril. Tem aromas de nozes e especiarias.",
    quiz: [
      { q: "Qual é a capacidade do “clavelin”, garrafa tradicional do vin jaune como o Jean Macle Château-Chalon?", a: "62 cl", x: ["75 cl", "50 cl", "37,5 cl"] },
      { q: "Qual é o tempo mínimo que o vin jaune deve amadurecer sob o véu de leveduras no barril?", a: "6 anos e 3 meses", x: ["1 ano", "3 anos", "10 anos"] },
    ],
  },
  fr_tissot_poulsard: {
    fact: "Domaine de referência do Jura, cultivado em biodinâmica por Stéphane Tissot. A Poulsard é uma tinta nativa do Jura, de cor clara como a de um rosé.",
    quiz: [
      { q: "Que cientista cresceu em Arbois, onde fica o Domaine Tissot, e ali cuidou de um vinhedo enquanto pesquisava a fermentação?", a: "Louis Pasteur", x: ["Marie Curie", "Antoine Lavoisier", "Charles Darwin"] },
    ],
  },
};

export default T;
