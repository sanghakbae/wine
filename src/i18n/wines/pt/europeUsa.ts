import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  eu_prum_wehlener: {
    fact: "O grande produtor do Wehlener Sonnenuhr, vinhedo batizado em homenagem ao relógio de sol da encosta. É famoso por Rieslings de doçura delicada, fechados na juventude, que amadurecem por décadas.",
    quiz: [
      { q: "O que significa “Sonnenuhr” em J.J. Prüm Wehlener Sonnenuhr?", a: "Relógio de sol", x: ["Jardim ao luar", "Campanário", "Moinho d’água"] },
    ],
  },
  eu_loosen_praelat: {
    fact: "Riesling do Erdener Prälat, considerado o vinhedo mais quente do Mosel, protegido do vento por penhascos de ardósia vermelha. Por ser pequeno, a produção é mínima.",
    quiz: [
      { q: "Quem assumiu o negócio da família em 1988 e levou o Dr. Loosen Erdener Prälat ao mundo?", a: "Ernst Loosen", x: ["Egon Müller", "Johannes Selbach", "Carl von Schubert"] },
    ],
  },
  eu_christoffel_urzig: {
    fact: "As encostas íngremes de Ürzig têm um solo vulcânico vermelho misturado à ardósia, algo raro no Mosel. Por isso seus Rieslings são famosos pelo sabor exótico de especiarias.",
    quiz: [
      { q: "O que significa “Würzgarten” em Ürziger Würzgarten?", a: "Jardim de especiarias", x: ["Adega de vinho", "Jardim da muralha", "Colina do sol"] },
    ],
  },
  eu_schloss_johannisberg: {
    fact: "Castelo do Rheingau que distingue suas categorias pela cor da cápsula. Entre as cápsulas amarela, verde, rosa e dourada, a verde (Grünlack) é a Spätlese.",
    quiz: [
      { q: "Que categoria teria nascido em 1775 no Schloss Johannisberg, quando o mensageiro com a autorização de colheita chegou atrasado?", a: "Spätlese (colheita tardia)", x: ["Eiswein", "Kabinett", "Grosses Gewächs"] },
      { q: "Que estadista recebeu o Schloss Johannisberg de presente do imperador da Áustria em 1816?", a: "Metternich", x: ["Bismarck", "Talleyrand", "Richelieu"] },
    ],
  },
  eu_weil_grafenberg: {
    fact: "Vinícola fundada em Kiedrich em 1875 pelo dr. Robert Weil, que tinha sido professor de alemão na Sorbonne, em Paris. O carro-chefe é o Riesling do íngreme vinhedo Gräfenberg.",
    quiz: [
      { q: "Que empresa japonesa se tornou acionista majoritária da Robert Weil em 1988?", a: "Suntory", x: ["Kirin", "Asahi", "Sapporo"] },
    ],
  },
  eu_keller_gmax: {
    fact: "Riesling da família Keller, que levou Rheinhessen ao nível mundial. Feito em quantidade mínima com vinhas velhas, é considerado o Riesling seco alemão mais caro.",
    quiz: [
      { q: "Por que o Keller G-Max é considerado um vinho misterioso?", a: "A localização do vinhedo não é revelada", x: ["Um artista diferente pinta o rótulo a cada ano", "Só é feito como Eiswein", "Amadurece no fundo do mar"] },
    ],
  },
  eu_donnhoff_hermannshohle: {
    fact: "Helmut Dönnhoff pôs a pequena região do Nahe no cenário mundial. O Hermannshöhle, com ardósia e rocha vulcânica misturadas, é considerado o melhor vinhedo do Nahe.",
    quiz: [
      { q: "Que filho sucedeu o pai, Helmut, no comando da Dönnhoff?", a: "Cornelius Dönnhoff", x: ["Ernst Loosen", "Klaus Peter Keller", "Philipp Wittmann"] },
    ],
  },
  eu_haag_juffer: {
    fact: "Riesling da encosta Juffer-Sonnenuhr, de frente para a vila de Brauneberg, do outro lado do rio. A família Haag faz há gerações vinhos delicados e longevos.",
    quiz: [
      { q: "De que palavra vem “Juffer”, em Fritz Haag Brauneberger Juffer?", a: "Donzela (moça)", x: ["Muralha", "Raposa", "Sol"] },
    ],
  },
  eu_grunhaus_abtsberg: {
    fact: "Este vinhedo à beira do rio Ruwer aparece pela primeira vez em registros do século X. Pertence à família von Schubert desde o fim do século XIX, que ainda usa o rótulo criado por volta de 1900.",
    quiz: [
      { q: "Quem cultivou primeiro os vinhedos Maximin Grünhaus?", a: "A abadia de São Maximino, de Trier", x: ["A catedral de Colônia", "A casa real da Prússia", "A Universidade de Heidelberg"] },
      { q: "Por qual estilo o rótulo Maximin Grünhaus é famoso?", a: "Art nouveau (Jugendstil)", x: ["Bauhaus", "Pop art", "Rococó"] },
    ],
  },
  eu_selbach_zeltinger: {
    fact: "Vinícola da família Selbach, que cultiva uvas em Zeltingen há gerações. O carro-chefe é o Riesling da íngreme encosta Sonnenuhr, onde fica um relógio de sol.",
    quiz: [
      { q: "Que famoso vinhedo da vila vizinha continua na mesma encosta do Zeltinger Sonnenuhr da Selbach-Oster?", a: "Wehlener Sonnenuhr", x: ["Piesporter Goldtröpfchen", "Bernkasteler Doctor", "Scharzhofberg"] },
    ],
  },
  eu_schloss_vollrads: {
    fact: "Castelo do Rheingau considerado uma das vinícolas mais antigas do mundo. A torre medieval cercada por um fosso é seu símbolo.",
    quiz: [
      { q: "De que ano é o registro mais antigo de venda de vinho do Schloss Vollrads?", a: "1211", x: ["1775", "1855", "1920"] },
    ],
  },
  eu_kloster_eberbach: {
    fact: "Vinícola-mosteiro fundada por monges cistercienses em 1136. O vinhedo Steinberg, murado pelos monges, é muitas vezes comparado ao Clos de Vougeot, da Borgonha.",
    quiz: [
      { q: "Que filme com Sean Connery foi rodado no mosteiro de Kloster Eberbach?", a: "O Nome da Rosa", x: ["Indiana Jones e a Última Cruzada", "Os Intocáveis", "007 contra Goldfinger"] },
    ],
  },
  eu_kunstler_holle: {
    fact: "Grande casa de Hochheim, no extremo leste do Rheingau, onde o Meno encontra o Reno. Seus Rieslings secos e potentes representam o Rheingau.",
    quiz: [
      { q: "Que apelido os ingleses davam aos vinhos do Reno, inspirado em Hochheim, terra do Künstler Hochheimer Hölle?", a: "Hock", x: ["Claret", "Sack", "Bubbly"] },
    ],
  },
  eu_wittmann_morstein: {
    fact: "Riesling seco do vinhedo calcário Morstein, cultivado em biodinâmica pela família Wittmann em Westhofen. É considerado o vinho de nível Grand Cru mais alto de Rheinhessen.",
    quiz: [
      { q: "Quem comanda a vinícola Wittmann em biodinâmica e produz o Morstein?", a: "Philipp Wittmann", x: ["Klaus Peter Keller", "Helmut Dönnhoff", "Johannes Leitz"] },
    ],
  },
  eu_burklin_kirchenstuck: {
    fact: "Grande vinícola familiar de Wachenheim, no Pfalz, que segue a biodinâmica. O pequeno vinhedo Kirchenstück, ao lado da igreja, é considerado o mais precioso do Pfalz.",
    quiz: [
      { q: "Em que região se inspiram as categorias “G.C.” e “P.C.” usadas nos rótulos da Dr. Bürklin-Wolf?", a: "Borgonha", x: ["Classificação de Bordeaux de 1855", "Categorias de envelhecimento da Rioja", "Échelle des crus de Champagne"] },
    ],
  },
  eu_black_tower: {
    fact: "Marca de vinho alemão nascida no fim dos anos 1960, que fez enorme sucesso no Reino Unido e no mundo. A garrafa toda preta, com ar de cerâmica, chama a atenção.",
    quiz: [
      { q: "A que estilo alemão de vinho branco suave e adocicado o Black Tower pertencia quando foi lançado?", a: "Liebfraumilch", x: ["Eiswein", "Sekt", "Trockenbeerenauslese"] },
    ],
  },
  eu_wirsching_silvaner: {
    fact: "Vinícola familiar de Iphofen, na Francônia, passada de geração em geração. Faz Silvaners terrosos em vinhedos de marga com gesso no sopé do Steigerwald e os engarrafa na Bocksbeutel.",
    quiz: [
      { q: "Quem foi Julius Echter, que dá nome ao Hans Wirsching Iphöfer Julius-Echter-Berg?", a: "Príncipe-bispo de Würzburg nos séculos XVI e XVII", x: ["Rei da Baviera", "Um reformador protestante", "Um melhorista que criou uma casta"] },
    ],
  },
  eu_molitor_himmelreich: {
    fact: "Vinícola que Markus Molitor herdou ainda jovem e levou ao topo do Mosel. “Himmelreich” significa reino dos céus.",
    quiz: [
      { q: "O que indica a cor da cápsula (branca, verde, dourada) das garrafas de Markus Molitor?", a: "O grau de doçura", x: ["O solo do vinhedo", "O tempo de amadurecimento", "O mês da colheita"] },
    ],
  },
  eu_thanisch_doctor: {
    fact: "Riesling do Doctor, pequeno e famoso vinhedo na encosta íngreme logo atrás da vila de Bernkastel. Há muito é considerado a terra de vinhedo mais cara da Alemanha.",
    quiz: [
      { q: "De que lenda vem o nome “Doctor” (médico) do Berncasteler Doctor?", a: "Um arcebispo de Trier doente sarou ao beber o vinho deste vinhedo", x: ["Havia um grande hospital ao lado do vinhedo", "O médico de Napoleão o usava como remédio", "Os colhedores usavam jaleco branco"] },
    ],
  },
  eu_leitz_einszweidry: {
    fact: "Riesling seco, leve e fresco, feito por Johannes Leitz em Rüdesheim, onde o Reno faz uma curva. É querido no mundo todo pelo preço acessível.",
    quiz: [
      { q: "Que trocadilho está por trás do nome Leitz “Eins Zwei Dry”?", a: "O “três” (drei) de “um, dois, três” em alemão virou o inglês “dry”", x: ["O número de uma sinfonia de Beethoven", "Os nomes dos três irmãos Leitz", "Um método de filtrar três vezes"] },
    ],
  },
  eu_fxpichler_kellerberg: {
    fact: "Vinícola que a família Pichler, de Oberloiben, levou ao topo da Wachau. O Smaragd do Kellerberg, que domina o Danúbio, reúne força e profundidade.",
    quiz: [
      { q: "De onde vem o nome da categoria “Smaragd” no rótulo de F.X. Pichler?", a: "De um lagarto verde-esmeralda que vive nos muros de pedra dos vinhedos", x: ["De uma mina de esmeraldas próxima", "De uma joia da coroa dos Habsburgo", "Da garrafa verde"] },
    ],
  },
  eu_knoll_schutt: {
    fact: "Clássico da Wachau feito há gerações pela família Knoll, de Unterloiben. Sem seguir modas, com métodos tradicionais, faz vinhos que brilham com o tempo.",
    quiz: [
      { q: "Que santo aparece no rótulo da Knoll?", a: "Santo Urbano, padroeiro dos viticultores", x: ["São Pedro", "São Nicolau", "São Jorge"] },
    ],
  },
  eu_prager_achleiten: {
    fact: "Grande nome de Weissenkirchen, na Wachau. Sob o comando de Toni Bodenstein, ficou famoso pelos Rieslings minerais do Achleiten, vinhedo íngreme em terraços com muros de pedra.",
    quiz: [
      { q: "Que rio o vinhedo Achleiten, da Prager, domina?", a: "Danúbio", x: ["Reno", "Mosel", "Elba"] },
    ],
  },
  eu_hirtzberger_singerriedel: {
    fact: "Grande nome de Spitz, na parte oeste da Wachau. O carro-chefe é o Riesling Smaragd do Singerriedel, vinhedo íngreme em terraços atrás da vila.",
    quiz: [
      { q: "Qual é a categoria mais leve da classificação “Vinea Wachau”, criada em 1983 por produtores como Hirtzberger?", a: "Steinfeder", x: ["Smaragd", "Kabinett", "Grosses Gewächs"] },
    ],
  },
  eu_brundlmayer_heiligenstein: {
    fact: "Grande nome de Langenlois, no Kamptal, construído por Willi Bründlmayer. É famoso pelo Riesling da íngreme colina Heiligenstein e pelos espumantes de método tradicional.",
    quiz: [
      { q: "O que significa o nome do vinhedo Heiligenstein, do Bründlmayer?", a: "Pedra (rocha) sagrada", x: ["Colina branca", "Poço do santo", "Túmulo do herói"] },
    ],
  },
  eu_kracher_tba: {
    fact: "A névoa que sobe do lago Neusiedl em Illmitz traz a podridão nobre e dá origem a vinhos doces de nível mundial. O saudoso Alois Kracher levou o vinho de sobremesa austríaco ao topo do mundo.",
    quiz: [
      { q: "Como se chama a série de Trockenbeerenauslese da Kracher amadurecida em barricas novas?", a: "Nouvelle Vague", x: ["Zwischen den Seen", "Smaragd", "Grand Cru Classé"] },
    ],
  },
  eu_domane_wachau: {
    fact: "Vinícola cooperativa mantida por inúmeros viticultores da Wachau. Tem como sede o “Kellerschlössel”, adega barroca em Dürnstein.",
    quiz: [
      { q: "Que rei esteve preso no fim do século XII no castelo de Dürnstein, onde fica a Domäne Wachau?", a: "Ricardo I, Coração de Leão, da Inglaterra", x: ["Luís IX da França", "Frederico I do Sacro Império", "Roberto I da Escócia"] },
      { q: "Que nome a Domäne Wachau usava antes de mudá-lo em 2008?", a: "Freie Weingärtner Wachau", x: ["Adega Real da Wachau", "Cooperativa do Vinho do Danúbio", "Vinícola do Mosteiro de Dürnstein"] },
    ],
  },
  eu_moric_blaufrankisch: {
    fact: "Vinícola do Burgenland fundada em 2001. Com velhas vinhas de Blaufränkisch, faz tintos delicados como os da Borgonha e mudou a imagem da casta.",
    quiz: [
      { q: "Que vinicultor fundou a Moric e levou a Blaufränkisch ao mundo?", a: "Roland Velich", x: ["Alois Kracher", "Willi Bründlmayer", "Emmerich Knoll"] },
    ],
  },
  eu_royaltokaji_essencia: {
    fact: "Reúne apenas o suco que escorre das uvas aszú empilhadas sob o próprio peso, fermentado lentíssimamente ao longo de anos. Tem só alguns graus de álcool e é denso como mel.",
    quiz: [
      { q: "Que escritor de vinhos britânico cofundou a Royal Tokaji em 1990?", a: "Hugh Johnson", x: ["Jancis Robinson", "Robert Parker", "Michael Broadbent"] },
    ],
  },
  eu_oremus_aszu: {
    fact: "Vinícola de Tolcsva batizada com o nome do vinhedo Oremus, onde teria nascido o primeiro Tokaji Aszú da lenda. Oremus significa “oremos” em latim.",
    quiz: [
      { q: "Que grande casa espanhola comprou a Oremus em 1993?", a: "Vega Sicilia", x: ["Marqués de Riscal", "Torres", "Bodegas Muga"] },
    ],
  },
  eu_disznoko_aszu: {
    fact: "O nome vem de uma grande rocha em forma de javali no meio do vinhedo. Com capital estrangeiro, foi uma das vinícolas que lideraram o renascimento de Tokaj após o fim do comunismo.",
    quiz: [
      { q: "O que significa o nome Disznókő?", a: "Pedra do porco (javali)", x: ["Colina dourada", "Fonte do rei", "Vale do lobo"] },
      { q: "Que empresa de vinhos do grupo segurador francês é dona da Disznókő desde 1992?", a: "AXA Millésimes", x: ["LVMH", "Groupe Castel", "Baron Philippe de Rothschild"] },
    ],
  },
  eu_kefraya: {
    fact: "Uma das vinícolas mais representativas do Líbano, com vinhedos no alto das colinas do oeste do vale do Bekaa. Castas francesas e o sol libanês dão tintos intensos com toque de especiarias.",
    quiz: [
      { q: "Entre quais cordilheiras fica o vale do Bekaa, onde está o Château Kefraya?", a: "Monte Líbano e Antilíbano", x: ["Montes Tauro e Zagros", "Cáucaso e Urais", "Atlas e Rife"] },
    ],
  },
  eu_ixsir: {
    fact: "Vinícola nas encostas de Batroun, no norte do Líbano. O nome vem da palavra árabe para “elixir”, e o prédio enterrado, de projeto ecológico, é famoso.",
    quiz: [
      { q: "Que ex-presidente da Renault e da Nissan é um dos cofundadores da Ixsir?", a: "Carlos Ghosn", x: ["Bernard Arnault", "Xeque Mansour", "Richard Branson"] },
    ],
  },
  eu_massaya: {
    fact: "Vinícola fundada em Tanail, no vale do Bekaa, pelos irmãos Ghosn, que voltaram ao Líbano depois da guerra civil e se associaram a grandes casas de vinho francesas.",
    quiz: [
      { q: "Que grande casa de Châteauneuf-du-Pape participou da fundação da Massaya?", a: "Vieux Télégraphe (família Brunier)", x: ["Château de Beaucastel (família Perrin)", "Château Rayas", "E. Guigal"] },
    ],
  },
  eu_castel_grandvin: {
    fact: "Vinícola familiar que começou com as videiras que Eli Ben Zaken plantou perto de casa. É considerada pioneira da era dos vinhos finos israelenses.",
    quiz: [
      { q: "Que cidade fica mais perto das Colinas da Judeia, onde está o Domaine du Castel?", a: "Jerusalém", x: ["Haifa", "Eilat", "Nazaré"] },
    ],
  },
  eu_yarden_cabernet: {
    fact: "Cabernet de vinhedos em solo vulcânico e fresco nas Colinas de Golã. A Golan Heights Winery, aberta nos anos 1980, levou o vinho israelense ao mundo com essa marca.",
    quiz: [
      { q: "A que se refere “Yarden” em hebraico?", a: "Ao rio Jordão", x: ["Ao mar da Galileia", "Ao monte Hermon", "Ao mar Morto"] },
    ],
  },
  eu_gaia_thalassitis: {
    fact: "Thalassitis, que significa “do mar”, é um branco salino e cortante de Assyrtiko da ilha vulcânica de Santorini. É o vinho emblemático da Gaia Wines.",
    quiz: [
      { q: "Como se chama a condução em forma de cesto, enrolada em círculo, que protege dos ventos fortes as videiras de Santorini do Gaia Thalassitis?", a: "Kouloura", x: ["Gobelet", "Pérgola", "Guyot"] },
    ],
  },
  eu_boutari_naoussa: {
    fact: "Tinto emblemático do norte da Grécia, feito com Xinomavro, que significa “uva negra ácida”. Com acidez e taninos altos, é chamado de “Barolo da Grécia”.",
    quiz: [
      { q: "Em que ano a Boutari fez seu primeiro vinho em Naoussa?", a: "1879", x: ["1789", "1923", "1970"] },
    ],
  },
  eu_sigalas_assyrtiko: {
    fact: "Vinícola perto da vila de Oia, no norte de Santorini. Numa ilha onde são comuns raízes com mais de cem anos, faz Assyrtikos cheios de mineralidade.",
    quiz: [
      { q: "Que praga as videiras de Santorini, onde fica o Domaine Sigalas, conseguiram evitar graças ao solo de areia vulcânica?", a: "Filoxera", x: ["Traça-da-uva", "Mosca-das-frutas", "Cupim"] },
    ],
  },
  eu_tsinandali: {
    fact: "Branco seco emblemático da Geórgia, feito com Rkatsiteli e Mtsvane. O nome vem da vila onde ficava a propriedade de um nobre do século XIX que trouxe a vinificação europeia.",
    quiz: [
      { q: "Que nobre e poeta introduziu a vinificação europeia na Geórgia, no século XIX, em sua propriedade de Tsinandali?", a: "Alexandre Chavchavadze", x: ["Shota Rustaveli", "Erekle II", "Niko Pirosmani"] },
    ],
  },
  eu_kindzmarauli: {
    fact: "A fermentação da Saperavi é interrompida pelo frio no meio, preservando o açúcar natural da uva. É um tinto típico da Geórgia, feito só numa área delimitada em torno de Kvareli.",
    quiz: [
      { q: "Por que sabor o tinto Kindzmarauli é famoso?", a: "Meio doce, com doçura natural", x: ["Totalmente seco", "Fortificado com aguardente", "Espumante"] },
    ],
  },
  eu_pheasants_tears: {
    fact: "Vinícola fundada em Sighnaghi por um agricultor georgiano e um pintor americano. O nome vem de um antigo conto georgiano sobre um vinho tão bom que faz até o faisão chorar.",
    quiz: [
      { q: "Que grande jarro de barro, enterrado no chão, a Pheasant’s Tears usa na fermentação e no amadurecimento tradicionais?", a: "Qvevri", x: ["Barrique", "Foudre", "Solera"] },
      { q: "Que pintor americano cofundou a Pheasant’s Tears?", a: "John Wurdeman", x: ["Andy Warhol", "Keith Haring", "Jeff Koons"] },
    ],
  },
  eu_movia_puro: {
    fact: "Vinícola de Aleš Kristančič, com vinhedos na fronteira entre a Eslovênia e a Itália. O Puro é lançado com as borras de levedura ainda dentro da garrafa.",
    quiz: [
      { q: "O que quem vai beber o Movia Puro precisa fazer antes?", a: "Abrir a garrafa de cabeça para baixo para expulsar as borras", x: ["Adicionar xarope de açúcar", "Agitar a garrafa para fazer espuma", "Deixar a rolha de molho na água"] },
    ],
  },
  eu_dingac: {
    fact: "Plavac Mali cultivada nas encostas íngremes que caem sobre o mar, no sul da península de Pelješac. Em 1961, foi o primeiro vinho croata com proteção de origem.",
    quiz: [
      { q: "Que animal, que carregava as uvas nos vinhedos íngremes, aparece no rótulo do Dingač?", a: "Burro", x: ["Cabra", "Cavalo", "Boi"] },
    ],
  },
  eu_cricova_brut: {
    fact: "Famosa pela enorme “cidade do vinho” subterrânea criada em túneis de antigas pedreiras de calcário. Nas galerias de mais de 100 km repousam espumantes de segunda fermentação na garrafa e raras garrafas de coleção.",
    quiz: [
      { q: "Que primeiro cosmonauta do mundo visitou as adegas subterrâneas de Cricova nos anos 1960?", a: "Iuri Gagarin", x: ["Neil Armstrong", "John Glenn", "Alexei Leonov"] },
    ],
  },
  eu_nyetimber: {
    fact: "Vinícola de espumantes de West Sussex, na Inglaterra. Plantando só as três castas do Champagne e usando a segunda fermentação na garrafa, abriu caminho para a fama do espumante inglês.",
    quiz: [
      { q: "Quem plantou pela primeira vez as castas do Champagne na Nyetimber, em 1988?", a: "O casal americano Stuart e Sandy Moss", x: ["A Casa Real britânica", "A Moët & Chandon", "A família Taittinger"] },
    ],
  },
  eu_chapel_down: {
    fact: "Vinícola de referência da Inglaterra, em Tenterden, no condado de Kent. Faz espumantes pelo mesmo método de segunda fermentação na garrafa do Champagne.",
    quiz: [
      { q: "Que solo faz os espumantes do sul da Inglaterra, como o Chapel Down, lembrarem a Champagne?", a: "Solo de giz (calcário)", x: ["Cinza vulcânica negra", "Ardósia vermelha", "Aluvião de seixos de rio"] },
    ],
  },
  us_screaming_eagle: {
    fact: "Jean Phillips lançou a primeira safra em 1992, de terras que comprou em Oakville. Em 2000, num leilão de Napa, uma garrafa de 6 litros foi vendida por 500 mil dólares, espantando o mundo.",
    quiz: [
      { q: "Que dono de times esportivos americano comprou a Screaming Eagle em 2006?", a: "Stan Kroenke", x: ["Jerry Jones", "Mark Cuban", "Robert Kraft"] },
      { q: "Quem, nome famoso dos vinhos cult, fez as primeiras safras da Screaming Eagle?", a: "Heidi Barrett", x: ["Warren Winiarski", "Mike Grgich", "Paul Draper"] },
    ],
  },
  us_harlan: {
    fact: "Fundada em 1984 pelo incorporador imobiliário Bill Harlan nas encostas a oeste de Oakville. Mirando ser um “primeiro cru” de Napa, recebeu várias vezes 100 pontos de Robert Parker.",
    quiz: [
      { q: "Que outra marca de vinho cult Bill Harlan, fundador da Harlan Estate, lançou nos anos 1990?", a: "BOND", x: ["Scarecrow", "Colgin", "Screaming Eagle"] },
      { q: "Que resort de Napa Valley Bill Harlan, fundador da Harlan Estate, ajudou a fundar?", a: "Meadowood", x: ["Auberge du Soleil", "Carneros Inn", "Solage"] },
    ],
  },
  us_dominus: {
    fact: "Vinho feito por Christian Moueix, de Bordeaux, que comandava o Pétrus, no antigo vinhedo Napanook, em Yountville. A primeira safra é de 1983.",
    quiz: [
      { q: "Que dupla de arquitetos suíços projetou a vinícola Dominus?", a: "Herzog & de Meuron", x: ["Frank Gehry", "Tadao Ando", "Renzo Piano"] },
      { q: "O que caracteriza as paredes do prédio da Dominus?", a: "Gaiolas de tela metálica cheias de pedras de basalto", x: ["Cortina de vidro", "Tábuas de barril de carvalho", "Concreto aparente"] },
    ],
  },
  us_caymus_ss: {
    fact: "Cabernet de topo que a família Wagner, da Caymus, faz selecionando só os melhores barris de cada ano. É símbolo do estilo Napa, intenso e macio.",
    quiz: [
      { q: "Que recorde o Caymus Special Selection tem na Wine Spectator?", a: "É o único vinho eleito duas vezes “Vinho do Ano”", x: ["Foi o primeiro vinho americano a receber 100 pontos", "É o vinho americano vendido mais caro", "Foi o primeiro vinho amadurecido numa estação espacial"] },
    ],
  },
  us_caymus: {
    fact: "Vinícola que a família Wagner fundou em Rutherford em 1972. Seu Cabernet intenso, de fruta madura e textura aveludada, também é muito querido na Coreia.",
    quiz: [
      { q: "De onde vem o nome Caymus?", a: "Do “Rancho Caymus”, concessão de terras mexicana em Napa no século XIX", x: ["Do nome da esposa do fundador", "Do antigo nome do rio Napa", "Da cidade natal alemã dos Wagner"] },
      { q: "Que família fundou e comanda a Caymus?", a: "Família Wagner", x: ["Família Mondavi", "Família Gallo", "Família Coppola"] },
    ],
  },
  us_silveroak_napa: {
    fact: "Feito só com Cabernet Sauvignon, amadurecido em barricas de carvalho americano. No dia do lançamento de cada nova safra, formam-se filas diante da vinícola.",
    quiz: [
      { q: "Que construção aparece no rótulo da Silver Oak?", a: "Uma caixa-d’água (torre)", x: ["Um farol", "Um moinho de vento", "O campanário de uma igreja"] },
      { q: "Que barricas a Silver Oak faz questão de usar no amadurecimento?", a: "De carvalho americano", x: ["De carvalho francês", "De carvalho esloveno", "De carvalho húngaro"] },
    ],
  },
  us_silveroak_av: {
    fact: "O Cabernet de Sonoma da Silver Oak, mais macio e pronto mais cedo que o de Napa Valley. O rótulo traz a mesma caixa-d’água do de Napa.",
    quiz: [
      { q: "Quem fundou juntos a Silver Oak em 1972?", a: "Ray Duncan e Justin Meyer", x: ["Robert Mondavi e o barão Philippe", "Jack e Dolores Cakebread", "Dan e Margaret Duckhorn"] },
    ],
  },
  us_cask23: {
    fact: "O Cabernet de topo da Stag’s Leap Wine Cellars, fundada por Warren Winiarski, feito só com as melhores uvas. A primeira safra foi a de 1974.",
    quiz: [
      { q: "De onde vem o nome Cask 23?", a: "Do barril nº 23, tão excepcional no primeiro ano que foi engarrafado à parte", x: ["Da 23ª parcela do vinhedo", "Do dia 23, aniversário do fundador", "De uma regra de 23 meses de amadurecimento"] },
      { q: "Que grande casa italiana comprou em 2007, com a Chateau Ste. Michelle, a Stag’s Leap Wine Cellars, produtora do Cask 23?", a: "Antinori", x: ["Gaja", "Frescobaldi", "Biondi-Santi"] },
    ],
  },
  us_slv: {
    fact: "S.L.V. é a sigla de “Stag’s Leap Vineyards”. Depois que a safra 1973 superou grandes vinhos franceses, uma garrafa entrou para o acervo do Smithsonian, nos EUA.",
    quiz: [
      { q: "Em que degustação às cegas de 1976 o Stag’s Leap Wine Cellars S.L.V. 1973 ficou em 1º lugar entre os tintos?", a: "O Julgamento de Paris", x: ["A classificação de Bordeaux de 1855", "O grande prêmio da Vinexpo", "O “Vinho do Ano” da Wine Spectator"] },
      { q: "Qual era a profissão original de Warren Winiarski, fundador da Stag’s Leap Wine Cellars?", a: "Professor de ciência política na Universidade de Chicago", x: ["Piloto de avião", "Geólogo de petróleo", "Diretor de cinema em Hollywood"] },
    ],
  },
  us_montelena_chard: {
    fact: "No “Julgamento de Paris” de 1976, a safra 1973 superou grandes brancos da Borgonha e ficou em 1º lugar entre os brancos. A história virou filme.",
    quiz: [
      { q: "Que vinicultor fez o Chateau Montelena Chardonnay 1973, vencedor do Julgamento de Paris?", a: "Mike Grgich", x: ["Warren Winiarski", "Robert Mondavi", "André Tchelistcheff"] },
      { q: "Que filme de 2008 conta a vitória do Chateau Montelena Chardonnay no Julgamento de Paris?", a: "Bottle Shock", x: ["Sideways", "Um Bom Ano", "Mondovino"] },
    ],
  },
  us_montelena_cab: {
    fact: "Cabernet feito num château de pedra no sopé do monte St. Helena, ao norte de Calistoga. Desde 1972 a família Barrett recuperou e comanda a antiga vinícola.",
    quiz: [
      { q: "Qual era o negócio de Alfred Tubbs, que fundou o Chateau Montelena em 1882?", a: "Fabricante de cordas", x: ["Magnata das ferrovias", "Minerador de ouro", "Banqueiro"] },
    ],
  },
  us_tokalon: {
    fact: "Cabernet de topo do lendário vinhedo To Kalon, em Oakville, logo atrás da vinícola Robert Mondavi. É um dos vinhedos mais famosos de Napa.",
    quiz: [
      { q: "O que significa o nome do vinhedo To Kalon?", a: "“O mais belo”, em grego", x: ["“Colina de Deus”, em latim", "“Terra quente”, em espanhol", "“Água clara”, na língua nativa"] },
      { q: "Que pioneiro cultivou e batizou o vinhedo To Kalon no século XIX?", a: "Hamilton Crabb", x: ["George Yount", "Gustave Niebaum", "Charles Krug"] },
    ],
  },
  us_woodbridge: {
    fact: "Marca de vinhos do dia a dia criada por Robert Mondavi perto de Lodi, em 1979. O objetivo era um vinho californiano fácil de beber para todos.",
    quiz: [
      { q: "De onde vem o nome Woodbridge, de Woodbridge by Robert Mondavi?", a: "De uma localidade perto de Lodi, onde fica a vinícola", x: ["Do sobrenome de solteira da mãe do fundador", "Do nome de uma tanoaria", "Da cidade natal italiana dos Mondavi"] },
    ],
  },
  us_insignia: {
    fact: "Lançado em 1974 por Joseph Phelps, que tinha uma construtora. É considerado o primeiro corte bordalês da Califórnia com nome próprio.",
    quiz: [
      { q: "Que empresa comprou em 2022 a Joseph Phelps, produtora do Insignia?", a: "LVMH", x: ["E&J Gallo", "Constellation Brands", "Treasury Wine Estates"] },
    ],
  },
  us_heitz_martha: {
    fact: "Pioneiro dos Cabernets de vinhedo único de Napa, com o nome do vinhedo no rótulo desde a safra 1966. É famoso pelo aroma singular, que lembra menta e eucalipto.",
    quiz: [
      { q: "Quem é a Martha do Heitz Martha’s Vineyard?", a: "Martha May, esposa do dono do vinhedo, Tom May", x: ["A filha de Joe Heitz", "Uma ilha de Massachusetts", "A mãe do primeiro enólogo"] },
    ],
  },
  us_shafer_hillside: {
    fact: "O Cabernet de topo da vinícola fundada em 1972 por John Shafer, ex-executivo de uma editora de Chicago, nas encostas do distrito de Stags Leap. O filho Doug Shafer ampliou a fama.",
    quiz: [
      { q: "Que grupo empresarial coreano comprou a Shafer Vineyards, produtora do Hillside Select, em 2022?", a: "Shinsegae", x: ["Lotte", "CJ", "SK"] },
    ],
  },
  us_diamond_creek: {
    fact: "Vinícola fundada por Al Brounstein no fim dos anos 1960 em Diamond Mountain. Fazia questão de engarrafar o Cabernet separado por vinhedo.",
    quiz: [
      { q: "Pelo que foram nomeados os vinhedos “Volcanic Hill”, “Red Rock Terrace” e “Gravelly Meadow”, da Diamond Creek?", a: "Pelos solos diferentes", x: ["Pelo mês da colheita", "Pelo ano de plantio", "Pelo nome dos enólogos"] },
    ],
  },
  us_dallavalle_maya: {
    fact: "Fundada nas colinas a leste de Oakville pelo italiano Gustav Dalla Valle e sua esposa japonesa, Naoko. É um vinho cult com alta proporção de Cabernet Franc.",
    quiz: [
      { q: "De quem vem o nome “Maya”, da Dalla Valle?", a: "Da filha do casal fundador", x: ["Da mãe do fundador", "Da antiga civilização maia", "Da esposa do primeiro enólogo"] },
    ],
  },
  us_bond: {
    fact: "Projeto de Bill Harlan, da Harlan Estate, que escolhe vinhedos de nível “Grand Cru” em Napa e engarrafa cada um separadamente. Melbury é um dos primeiros desses vinhedos.",
    quiz: [
      { q: "Qual é a proposta da BOND?", a: "Engarrafar separadamente cada um dos grandes vinhedos de Napa", x: ["Misturar uvas de vários países", "Trocar de casta a cada ano", "Amadurecer os vinhos no fundo do mar"] },
    ],
  },
  us_scarecrow: {
    fact: "Vem do vinhedo J.J. Cohn, em Rutherford, com velhas vinhas de Cabernet plantadas nos anos 1940. O neto de Cohn lançou a primeira safra em 2003.",
    quiz: [
      { q: "De que filme vem o nome Scarecrow (espantalho)?", a: "O Mágico de Oz", x: ["E o Vento Levou", "Casablanca", "A Noviça Rebelde"] },
    ],
  },
  us_colgin_cariad: {
    fact: "Corte bordalês da vinícola cult de Napa comandada por Ann Colgin. Em 2017 a LVMH comprou a maior parte da Colgin Cellars.",
    quiz: [
      { q: "O que significa “Cariad”, da Colgin, em galês?", a: "Amor", x: ["Estrela", "Colina", "Dragão"] },
    ],
  },
  us_sine_qua_non: {
    fact: "Vinho cult de estilo Rhône iniciado em 1994 pelo austríaco Manfred Krankl. O nome significa, em latim, “aquilo sem o qual não se pode passar”.",
    quiz: [
      { q: "Qual é a característica mais singular do Sine Qua Non?", a: "O nome do vinho e o desenho do rótulo mudam a cada safra", x: ["Usa só tampa de vidro, nunca rolha", "É feito num país diferente a cada ano", "Só é vendido em leilão"] },
    ],
  },
  us_kistler: {
    fact: "Grande casa de Chardonnay fundada em Sonoma em 1978. É famosa por Chardonnays delicados e potentes, fermentados com leveduras naturais, como na Borgonha.",
    quiz: [
      { q: "Quem fundou a Kistler Vineyards?", a: "Steve Kistler", x: ["Jim Clendenen", "Josh Jensen", "David Lett"] },
    ],
  },
  us_farniente: {
    fact: "Vinícola de pedra de Oakville, fundada em 1885 e abandonada na Lei Seca, que Gil Nickel recuperou em 1979. Concentra-se em apenas dois vinhos: Chardonnay e Cabernet.",
    quiz: [
      { q: "O que significa o nome Far Niente?", a: "“Sem preocupação alguma”, em italiano", x: ["“Terra distante”, em latim", "“Pequena fazenda”, em espanhol", "“Primeira colheita”, em francês"] },
    ],
  },
  us_beringer_pr: {
    fact: "O Cabernet de topo da vinícola fundada em St. Helena em 1876 pelos irmãos Beringer, de Mainz, na Alemanha: a mais antiga de Napa em funcionamento contínuo.",
    quiz: [
      { q: "Por que a Beringer pôde continuar aberta durante a Lei Seca?", a: "Tinha licença para fazer vinho para uso religioso", x: ["Serviu de instituto de pesquisa agrícola do governo", "Exportava escondido para o Canadá", "Fornecia vinagre ao exército"] },
    ],
  },
  us_beringer_wz: {
    fact: "Vinho rosado, doce e leve, feito com a tinta Zinfandel. Nos anos 1980 teve vendas explosivas nos EUA e virou sinônimo de vinho popular.",
    quiz: [
      { q: "Como o Beringer White Zinfandel ganha sua cor rosada?", a: "Deixando as cascas da Zinfandel em contato só por pouquíssimo tempo", x: ["Adicionando suco de morango", "Usando uvas de casca rosa", "Misturando Champagne rosé"] },
    ],
  },
  us_sutterhome_wz: {
    fact: "O White Zinfandel original, popularizado pela Sutter Home, da família Trinchero. Nos anos 1980 tornou-se o vinho mais popular dos Estados Unidos.",
    quiz: [
      { q: "O que deu ao Sutter Home White Zinfandel o sabor doce que tem hoje?", a: "Uma fermentação que parou sozinha no meio, em 1975", x: ["Uma experiência imitando o icewine", "Uma experiência misturando rosé francês", "Uma parceria com uma empresa de sucos"] },
    ],
  },
  us_duckhorn_merlot: {
    fact: "Fundada em 1976 pelo casal Dan e Margaret Duckhorn, levou o Merlot de Napa ao patamar dos grandes vinhos. Cada rótulo traz o desenho de uma ave aquática.",
    quiz: [
      { q: "Que Merlot da Duckhorn foi eleito “Vinho do Ano” da Wine Spectator em 2017?", a: "Three Palms Vineyard Merlot", x: ["Decoy Merlot", "Goldeneye Merlot", "Paraduxx Merlot"] },
    ],
  },
  us_cakebread: {
    fact: "Vinícola familiar fundada em Rutherford em 1973 por Jack e Dolores Cakebread. É presença constante nas cartas de vinho dos restaurantes de Napa.",
    quiz: [
      { q: "Quem ensinou fotografia a Jack Cakebread, fundador da Cakebread Cellars?", a: "Ansel Adams", x: ["Annie Leibovitz", "Robert Capa", "Richard Avedon"] },
    ],
  },
  us_rombauer: {
    fact: "Sinônimo do Chardonnay californiano cremoso, cheio de manteiga e baunilha. É uma vinícola familiar fundada em 1980 pelo casal Koerner e Joan Rombauer.",
    quiz: [
      { q: "Que famoso livro de receitas americano foi escrito por Irma Rombauer, parente da família Rombauer?", a: "The Joy of Cooking", x: ["Mastering the Art of French Cooking", "Kitchen Confidential", "Salt, Fat, Acid, Heat"] },
    ],
  },
  us_bv_latour: {
    fact: "O Cabernet de topo da BV, fundada em Rutherford em 1900 pelo francês Georges de Latour. Produzido desde a safra 1936, é considerado o pioneiro dos grandes Cabernets de Napa.",
    quiz: [
      { q: "O que significa “Beaulieu”, de Beaulieu Vineyard, em francês?", a: "Lugar bonito", x: ["Colina alta", "Fonte antiga", "Campo dourado"] },
      { q: "Que lendário enólogo de origem russa transformou o Georges de Latour Private Reserve numa obra-prima?", a: "André Tchelistcheff", x: ["Warren Winiarski", "Mike Grgich", "Paul Draper"] },
    ],
  },
  us_rubicon: {
    fact: "O tinto de topo da Inglenook, fundada em 1879 pelo capitão finlandês Gustave Niebaum. A família Coppola, que comprou a antiga propriedade, o produz desde a safra 1978.",
    quiz: [
      { q: "Que cineasta criou o Inglenook Rubicon?", a: "Francis Ford Coppola", x: ["Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"] },
    ],
  },
  us_ridge_montebello: {
    fact: "Corte de Cabernet de um vinhedo calcário no alto de uma crista das Santa Cruz Mountains. Paul Draper o vinificou por décadas com métodos tradicionais.",
    quiz: [
      { q: "Em que lugar ficou o Ridge Monte Bello 1971 entre os tintos na revanche de 2006, pelos 30 anos do Julgamento de Paris?", a: "1º lugar", x: ["2º lugar", "5º lugar", "10º lugar"] },
    ],
  },
  us_ridge_geyserville: {
    fact: "Corte de Zinfandel de um vinhedo de Sonoma com velhas vinhas de mais de 100 anos. É o Zinfandel emblemático da Ridge, produzido desde 1966.",
    quiz: [
      { q: "De onde vem o nome da vila de Geyserville, onde fica o vinhedo do Ridge Geyserville?", a: "De uma área de gêiseres nas redondezas", x: ["Do nome de um minerador da corrida do ouro", "Do nome de um missionário espanhol", "De uma antiga estação de trem"] },
    ],
  },
  us_frank_family: {
    fact: "Vinícola familiar instalada num antigo prédio de pedra em Calistoga. Ganhou popularidade com um Cabernet macio, querido nos restaurantes de Napa.",
    quiz: [
      { q: "Qual era o cargo anterior de Rich Frank, fundador da Frank Family Vineyards?", a: "Presidente dos Walt Disney Studios", x: ["Jogador profissional de beisebol", "Geólogo de petróleo", "Piloto de companhia aérea"] },
    ],
  },
  us_jordan: {
    fact: "Grande nome de Sonoma que faz Cabernets elegantes à moda de Bordeaux num prédio inspirado num château rural francês. A primeira safra foi a de 1976.",
    quiz: [
      { q: "Qual era a profissão de Tom Jordan, que fundou a Jordan em 1972?", a: "Geólogo de petróleo", x: ["Produtor de cinema em Hollywood", "Golfista profissional", "Piloto de avião"] },
    ],
  },
  us_spottswoode: {
    fact: "Vinícola familiar no extremo oeste da cidade de St. Helena. Foi uma das primeiras de Napa a adotar o cultivo orgânico, e as filhas dão continuidade.",
    quiz: [
      { q: "Quem comprou a propriedade Spottswoode em 1972 e criou a vinícola?", a: "Mary Novak", x: ["Margaret Duckhorn", "Ann Colgin", "Jean Phillips"] },
    ],
  },
  us_quintessa: {
    fact: "Corte bordalês cultivado em biodinâmica numa propriedade a leste de Rutherford que reúne colinas e vales. A primeira safra foi a de 1994.",
    quiz: [
      { q: "De que país são Agustín e Valeria Huneeus, fundadores da Quintessa?", a: "Chile", x: ["Argentina", "Espanha", "Itália"] },
    ],
  },
  us_pahlmeyer: {
    fact: "Vinícola cult de Napa fundada nos anos 1980 pelo advogado Jayson Pahlmeyer. Nos anos 1990, a estrela Helen Turley cuidou da vinificação.",
    quiz: [
      { q: "Que empresa, a maior de vinhos dos EUA, comprou a Pahlmeyer em 2019?", a: "E&J Gallo", x: ["Constellation Brands", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us_schramsberg: {
    fact: "Antiga vinícola de Calistoga, fundada em 1862 e recuperada pelo casal Davies em 1965. Faz espumantes com segunda fermentação na garrafa em cavernas escavadas na encosta.",
    quiz: [
      { q: "Em que ocasião o Schramsberg Blanc de Blancs foi usado num brinde histórico em 1972?", a: "No jantar em Pequim entre o presidente Nixon e o premiê Zhou Enlai", x: ["Na festa pelo retorno da Apollo 11", "Na celebração da queda do Muro de Berlim", "Na posse do presidente Kennedy"] },
    ],
  },
  us_chandon: {
    fact: "Aberta em 1973 em Yountville, no Napa Valley, a Domaine Chandon foi a primeira vinícola de espumantes criada na Califórnia por uma casa de Champagne francesa.",
    quiz: [
      { q: "Que casa de Champagne fundou a Domaine Chandon, produtora do Chandon Brut, na Califórnia?", a: "Moët & Chandon", x: ["Veuve Clicquot", "Taittinger", "Louis Roederer"] },
    ],
  },
  us_roederer_estate: {
    fact: "Fundada em 1982 pela casa de Champagne Louis Roederer no Anderson Valley, condado de Mendocino. A neblina fresca dá espumantes vivos.",
    quiz: [
      { q: "Qual é o Champagne mais famoso da Louis Roederer, fundadora da Roederer Estate?", a: "Cristal", x: ["Dom Pérignon", "La Grande Dame", "Belle Époque"] },
    ],
  },
  us_kosta_browne: {
    fact: "Estrela do Pinot Noir de Sonoma, eleita “Vinho do Ano” da Wine Spectator em 2011. A primeira safra saiu em 1997.",
    quiz: [
      { q: "Com que dinheiro os dois fundadores da Kosta Browne fizeram o primeiro vinho?", a: "Gorjetas juntadas trabalhando num restaurante", x: ["Prêmio da loteria", "Stock options do Vale do Silício", "Lucros com petróleo"] },
    ],
  },
  us_williams_selyem: {
    fact: "Fundada por dois amigos que, no fim dos anos 1970, começaram a fazer vinho numa garagem como hobby de fim de semana. É a pioneira que elevou o Pinot Noir do Russian River Valley a status cult.",
    quiz: [
      { q: "De onde vem o nome Williams Selyem?", a: "Dos sobrenomes dos dois fundadores, Burt Williams e Ed Selyem", x: ["Dos nomes de dois vinhedos", "Dos nomes do casal fundador", "Dos nomes de uma vila e de um rio"] },
    ],
  },
  us_sea_smoke: {
    fact: "Pinot Noir cultivado em biodinâmica nas encostas voltadas para o sul de Sta. Rita Hills. Vendido só por lista de mala direta, é famoso por ser difícil de encontrar.",
    quiz: [
      { q: "De onde vem o nome Sea Smoke?", a: "Da neblina que sobe do mar pelo rio Santa Ynez", x: ["Da fumaça de um vulcão próximo", "Do aroma de fumaça nas uvas após um incêndio", "Do nome do iate do fundador"] },
    ],
  },
  us_au_bon_climat: {
    fact: "Grande nome de Santa Barbara fundado em 1982. Resistindo à moda californiana dos vinhos pesados, insistiu em vinhos vivos, como os da Borgonha.",
    quiz: [
      { q: "Que vinicultor de personalidade marcante fundou a Au Bon Climat?", a: "Jim Clendenen", x: ["Paul Draper", "Manfred Krankl", "Josh Jensen"] },
      { q: "O que significa Au Bon Climat em francês?", a: "Um bom lugar, bem exposto ao sol", x: ["Castelo na colina", "Presente do mar", "Primeira colheita"] },
    ],
  },
  us_calera: {
    fact: "Grande casa de Pinot Noir que Josh Jensen, depois de aprender o ofício na Borgonha, fundou no alto das montanhas Gabilan após muito procurar solos calcários.",
    quiz: [
      { q: "O que significa Calera em espanhol?", a: "Forno de cal", x: ["Ponte de pedra", "Pequena fonte", "Terra vermelha"] },
    ],
  },
  us_meiomi: {
    fact: "Mistura uvas das regiões costeiras de Monterey, Santa Barbara e Sonoma para um Pinot Noir macio e bem frutado. Foi vendida à Constellation Brands em 2015.",
    quiz: [
      { q: "Que famosa vinícola de Napa é administrada pela família de Joe Wagner, criador do Meiomi?", a: "Caymus", x: ["Silver Oak", "Beringer", "Duckhorn"] },
      { q: "O que significa Meiomi na língua nativa?", a: "Litoral", x: ["Sol", "Uva", "Águia"] },
    ],
  },
  us_la_crema: {
    fact: "Marca que ficou conhecida pelo Pinot Noir e pelo Chardonnay da fria costa de Sonoma. É querida como Pinot Noir californiano de preço acessível.",
    quiz: [
      { q: "Que fundador da Kendall-Jackson comprou e fez crescer a La Crema?", a: "Jess Jackson", x: ["Ernest Gallo", "Robert Mondavi", "Chuck Wagner"] },
    ],
  },
  us_apothic: {
    fact: "Corte tinto de Zinfandel, Syrah, Cabernet e Merlot, doce e intenso. Lançado no fim dos anos 2000, liderou o boom dos cortes tintos nos EUA.",
    quiz: [
      { q: "De onde vem o nome Apothic?", a: "Da “apotheca”, onde se misturava e guardava vinho na Europa medieval", x: ["De uma deusa grega do vinho", "De uma igreja da cidade natal do fundador", "Do latim para “noite escura”"] },
    ],
  },
  us_prisoner: {
    fact: "Corte tinto de Napa à base de Zinfandel, lançado em 2000. Intenso e macio, abriu a moda dos cortes tintos nos EUA.",
    quiz: [
      { q: "Que pintor espanhol fez a gravura usada no rótulo do The Prisoner?", a: "Francisco Goya", x: ["Pablo Picasso", "Diego Velázquez", "Salvador Dalí"] },
      { q: "Que vinicultor criou o The Prisoner?", a: "Dave Phinney", x: ["Chuck Wagner", "Manfred Krankl", "Heidi Barrett"] },
    ],
  },
  us_papillon: {
    fact: "Corte bordalês de Napa da Orin Swift, criada por Dave Phinney, autor do The Prisoner. É famosa pelos rótulos com fotos e ilustrações impactantes.",
    quiz: [
      { q: "De onde vem o nome Orin Swift?", a: "Do nome do meio do pai do fundador e do sobrenome de solteira da mãe", x: ["Dos nomes de dois vinhedos", "Do nome do cachorro do fundador", "Do nome de um personagem de romance"] },
      { q: "Que empresa comprou a Orin Swift em 2016?", a: "E&J Gallo", x: ["LVMH", "Constellation Brands", "Treasury Wine Estates"] },
    ],
  },
  us_josh: {
    fact: "Marca californiana de vinhos do dia a dia lançada por Joseph Carr no fim dos anos 2000. É considerada uma das marcas de vinho que mais cresceram nos EUA.",
    quiz: [
      { q: "Quem é o Josh de Josh Cellars?", a: "O pai do fundador, Joseph Carr", x: ["O filho do fundador", "O primeiro enólogo", "O cachorro do fundador"] },
    ],
  },
  us_bogle: {
    fact: "Vinho da família Bogle, que cultiva a terra há várias gerações em Clarksburg, no delta do rio Sacramento. O carro-chefe é um Petite Sirah escuro, cor de tinta.",
    quiz: [
      { q: "O que a família Bogle fazia havia gerações antes de plantar o primeiro vinhedo, em 1968?", a: "Agricultura", x: ["Negócios de petróleo", "Produção de cinema", "Construção de ferrovias"] },
    ],
  },
  us_gallo: {
    fact: "Marca emblemática da E&J Gallo, a maior empresa familiar de vinhos do mundo. Marcas como Barefoot, Apothic e Orin Swift também pertencem a ela.",
    quiz: [
      { q: "Que irmãos fundaram em 1933 a E&J Gallo, produtora da Gallo Family Vineyards?", a: "Ernest e Julio Gallo", x: ["Robert e Peter Mondavi", "Jacob e Frederick Beringer", "Dan e Margaret Duckhorn"] },
      { q: "O que terminou nos EUA em 1933, ano em que os irmãos Gallo abriram a vinícola?", a: "A Lei Seca", x: ["A Guerra de Secessão", "A Grande Depressão", "A Segunda Guerra Mundial"] },
    ],
  },
  us_grgich: {
    fact: "Fundada em 4 de julho de 1977 pelo croata Mike Grgich, autor do Chardonnay vencedor do Julgamento de Paris. A boina que ele sempre usava era sua marca registrada.",
    quiz: [
      { q: "Qual era o negócio da família de Austin Hills, que fundou a Grgich Hills com Mike Grgich?", a: "Café Hills Bros.", x: ["Hotéis Hilton", "Chocolates Hershey", "Engarrafamento de Coca-Cola"] },
    ],
  },
  us_kenzo: {
    fact: "Vinícola de dono japonês, criada numa grande área de encosta no sudeste do Napa Valley. A vinificação ficou a cargo de Heidi Barrett, que fazia o Screaming Eagle.",
    quiz: [
      { q: "Que empresa de videogames foi fundada por Kenzo Tsujimoto, criador da Kenzo Estate?", a: "Capcom", x: ["Nintendo", "Sega", "Konami"] },
    ],
  },
  us_hess: {
    fact: "Vinícola fundada pelo empresário suíço Donald Hess nas encostas íngremes do Mount Veeder. Nas montanhas, mais frescas que o vale, faz Cabernets firmes.",
    quiz: [
      { q: "O que é famoso dentro do prédio da Hess Collection?", a: "Uma galeria de arte contemporânea reunida pelo fundador", x: ["Um museu de locomotivas a vapor", "Um aquário subterrâneo", "Um observatório astronômico"] },
    ],
  },
  us_ddo: {
    fact: "Vinícola fundada em 1987 pela família Drouhin, da Borgonha, nas Dundee Hills, em Oregon. Virou símbolo do reconhecimento do potencial do Pinot Noir do Oregon por uma grande casa borgonhesa.",
    quiz: [
      { q: "Que empresa da Borgonha fundou a Domaine Drouhin Oregon?", a: "Maison Joseph Drouhin", x: ["Louis Jadot", "Louis Latour", "Domaine de la Romanée-Conti"] },
      { q: "Que filha da família Drouhin cuida há muito tempo da vinificação da Domaine Drouhin Oregon?", a: "Véronique Drouhin", x: ["Anne-Claude Leflaive", "Lalou Bize-Leroy", "Marie-Thérèse Charlin"] },
    ],
  },
  us_eyrie: {
    fact: "Começou em 1965, com o primeiro Pinot Noir plantado no Willamette Valley. A safra 1975 enfrentou Borgonhas numa degustação em Paris, em 1979, e apresentou o Oregon ao mundo.",
    quiz: [
      { q: "Quem fundou a Eyrie Vineyards e ficou conhecido como “Papa Pinot”?", a: "David Lett", x: ["Robert Drouhin", "Ken Evenstad", "Paul Gerrie"] },
      { q: "O que significa “eyrie” em inglês?", a: "Ninho alto de ave de rapina", x: ["Vale enevoado", "Velho moinho d’água", "Cabana na floresta"] },
    ],
  },
  us_beaux_freres: {
    fact: "O nome significa, em francês, “cunhados”. É a vinícola de Pinot Noir que Michael Etzel fundou com o cunhado no Ribbon Ridge, no Willamette Valley.",
    quiz: [
      { q: "Que famoso crítico de vinhos fundou a Beaux Frères com o cunhado Michael Etzel?", a: "Robert Parker", x: ["Jancis Robinson", "Hugh Johnson", "James Suckling"] },
    ],
  },
  us_domaine_serene: {
    fact: "Vinícola fundada nas Dundee Hills pelo casal Ken e Grace Evenstad, que a levou ao topo do Pinot Noir do Oregon. O vinho de topo leva o sobrenome do casal.",
    quiz: [
      { q: "De quem vem o nome “Serene”, da Domaine Serene?", a: "Da filha do casal fundador, Serena", x: ["Da mãe do fundador", "Da deusa grega da lua", "De um antigo topônimo do Oregon"] },
    ],
  },
  us_cristom: {
    fact: "Vinícola fundada em 1992 por Paul Gerrie nas Eola-Amity Hills. Cada vinhedo leva o nome de uma mulher da família, como Jessie, Louise e Marjorie.",
    quiz: [
      { q: "Como foi criado o nome Cristom?", a: "Juntando os nomes dos filhos do fundador, Christine e Tom", x: ["A partir do nome de um mosteiro cristão", "A partir de uma fonte de água cristalina", "A partir do nome do primeiro enólogo"] },
    ],
  },
  us_csm_riesling: {
    fact: "Pioneira do vinho do estado de Washington e uma das vinícolas que mais produzem Riesling no mundo. A sede é o prédio em forma de château em Woodinville, perto de Seattle.",
    quiz: [
      { q: "Que Riesling a Chateau Ste. Michelle faz desde 1999 em parceria com a alemã Dr. Loosen?", a: "Eroica", x: ["Insignia", "Rubicon", "Opus One"] },
    ],
  },
  us_eroica: {
    fact: "Riesling feito desde 1999 pela Chateau Ste. Michelle, de Washington, com Ernst Loosen, do Mosel. Une a delicadeza alemã à fruta generosa de Washington.",
    quiz: [
      { q: "De onde vem o nome Eroica?", a: "Da Sinfonia nº 3 de Beethoven", x: ["De uma ópera de Mozart", "De um drama musical de Wagner", "De uma polonesa de Chopin"] },
    ],
  },
  us_quilceda: {
    fact: "O maior produtor de Cabernet de Washington, fundado em 1978 por Alex Golitzin. Recebeu várias vezes 100 pontos de Robert Parker, provando o nível dos vinhos de Washington.",
    quiz: [
      { q: "Que tio e lendário enólogo incentivou Alex Golitzin, fundador da Quilceda Creek, a fazer vinho?", a: "André Tchelistcheff", x: ["Robert Mondavi", "Warren Winiarski", "Paul Draper"] },
    ],
  },
  us_leonetti: {
    fact: "Fundada por Gary Figgins em 1977, virou vinho cult de Washington vendido só por lista de mala direta. O filho Chris Figgins dá continuidade.",
    quiz: [
      { q: "Qual é a importância da Leonetti Cellar na história do vinho de Walla Walla?", a: "É a primeira vinícola comercial de Walla Walla", x: ["É a primeira casa de espumantes de Washington", "É a primeira vinícola orgânica certificada dos EUA", "É a primeira vinícola criada com capital francês"] },
    ],
  },
  us_col_solare: {
    fact: "Corte bordalês feito desde a safra 1995 pela Chateau Ste. Michelle, de Washington, em parceria com a família italiana Antinori. Usa uvas das encostas quentes de Red Mountain.",
    quiz: [
      { q: "O que significa Col Solare em italiano?", a: "Colina ensolarada", x: ["Montanha vermelha", "Rio do sol", "Vale dourado"] },
    ],
  },
  us_cayuse: {
    fact: "Vinícola cult com vinhedos no lado do Oregon do Walla Walla Valley, em terreno coberto de pedras redondas do tamanho de um punho. Cultivada em biodinâmica, vende só por mala direta.",
    quiz: [
      { q: "Que vinicultor vindo da Champagne fundou a Cayuse?", a: "Christophe Baron", x: ["Christian Moueix", "Manfred Krankl", "Robert Drouhin"] },
      { q: "O que significa “Cailloux”, nome do vinhedo da Cayuse, em francês?", a: "Seixos (pedras)", x: ["Colina", "Fonte", "Floresta"] },
    ],
  },
  us_drfrank: {
    fact: "Vinícola fundada em 1962 às margens do lago Keuka, nos Finger Lakes, pelo botânico ucraniano dr. Konstantin Frank. É a pioneira do Riesling de Nova York.",
    quiz: [
      { q: "O que o dr. Konstantin Frank provou nos Finger Lakes?", a: "Que castas europeias (viníferas) podem crescer no frio de Nova York", x: ["Que só uvas nativas americanas resistem ao frio", "Que o Riesling só amadurece em estufa", "Que se pode fazer Champagne com sidra"] },
    ],
  },
};

export default T;
