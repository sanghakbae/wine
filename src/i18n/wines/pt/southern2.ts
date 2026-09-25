import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  sh2_penfolds_maxs: {
    fact: "Linha da Penfolds batizada em homenagem a Max Schubert, o lendário enólogo-chefe que criou o Grange. Segue sua filosofia de misturar uvas de várias regiões.",
    quiz: [
      { q: "Que lendário vinho australiano Max Schubert, homenageado no Penfolds Max’s, criou nos anos 1950?", a: "Penfolds Grange", x: ["Henschke Hill of Grace", "Wolf Blass Black Label", "Torbreck RunRig"] },
    ],
  },
  sh2_penfolds_bin128: {
    fact: "Shiraz que a Penfolds faz só com uvas de Coonawarra. Graças ao clima fresco da região, é mais perfumado e elegante que o Shiraz do Barossa.",
    quiz: [
      { q: "Qual foi a primeira safra do Penfolds Bin 128 Coonawarra Shiraz?", a: "1962", x: ["1932", "1982", "2002"] },
    ],
  },
  sh2_penfolds_bin150: {
    fact: "Shiraz da Penfolds feito só com uvas de Marananga, no noroeste do Barossa Valley. Estreou com a safra 2008.",
    quiz: [
      { q: "Que nome alemão Marananga, do Penfolds Bin 150, usava antes de ser rebatizada na Primeira Guerra Mundial?", a: "Gnadenfrei", x: ["Gnadenberg", "Hahndorf", "Neudorf"] },
    ],
  },
  sh2_penfolds_bin2: {
    fact: "Bin da Penfolds que mistura Shiraz com Mataro (Mourvèdre). Feito com uvas de várias regiões da Austrália do Sul, é bom para beber jovem.",
    quiz: [
      { q: "Entre os vinhos Penfolds chamados por número, como o Bin 2, qual é o número Bin do Grange?", a: "Bin 95", x: ["Bin 1", "Bin 389", "Bin 707"] },
    ],
  },
  sh2_penfolds_magill: {
    fact: "Shiraz do vinhedo de Magill, perto de Adelaide, berço da Penfolds, fundado pelo casal Penfold em 1844. É um raro vinhedo que sobrevive dentro da cidade.",
    quiz: [
      { q: "Qual era a profissão original de Christopher Rawson Penfold, fundador da Penfolds?", a: "Médico", x: ["Pastor", "Capitão de navio", "Advogado"] },
      { q: "Que vinho da Penfolds leva o nome da casinha do casal Penfold que existe até hoje no Magill Estate?", a: "Grange", x: ["St Henri", "Yattarna", "Koonunga Hill"] },
    ],
  },
  sh2_torbreck_laird: {
    fact: "O vinho de topo da Torbreck, feito com Shiraz de um único vinhedo em Marananga, no Barossa. Amadurece longamente em barricas francesas novas de aduelas grossas.",
    quiz: [
      { q: "A quem se refere “Laird” no dialeto escocês, em Torbreck The Laird?", a: "Ao senhor dono das terras", x: ["Ao pastor de ovelhas", "Ao guarda-florestal", "Ao padre da aldeia"] },
    ],
  },
  sh2_torbreck_woodcutters: {
    fact: "Shiraz do Barossa batizado em homenagem à época em que Dave Powell, fundador da Torbreck, trabalhou como lenhador na Escócia.",
    quiz: [
      { q: "Em que ano a Torbreck, produtora do Woodcutter’s Shiraz, abriu as portas?", a: "1994", x: ["1954", "1974", "2004"] },
    ],
  },
  sh2_torbreck_factor: {
    fact: "Shiraz da Torbreck de velhas vinhas de várias vilas do Barossa Valley. A maioria dos nomes de vinhos da Torbreck vem de antigas palavras rurais escocesas.",
    quiz: [
      { q: "Quem era o “factor” na antiga Escócia, em Torbreck The Factor?", a: "O administrador que cuidava da propriedade em nome do senhor", x: ["O moleiro que moía os grãos", "O ferreiro da aldeia", "O vaqueiro que tocava o gado"] },
    ],
  },
  sh2_greenockcreek_roennfeldt: {
    fact: "Shiraz cult feito em quantidade mínima com vinhas velhas de Marananga, no Barossa. Virou lenda ao receber 100 pontos de Robert Parker.",
    quiz: [
      { q: "O que é a “Roennfeldt Road” do Greenock Creek Roennfeldt Road?", a: "O nome da estrada do Barossa que passa ao lado do vinhedo", x: ["O nome da vila alemã natal do fundador", "O nome do riacho ao lado do vinhedo", "O nome da antiga igreja da vinícola"] },
    ],
  },
  sh2_rockford_basketpress: {
    fact: "Shiraz do Barossa que a Rockford faz à moda tradicional, com equipamentos de mais de 100 anos. Vendido sobretudo na vinícola e por lista de clientes, é difícil de encontrar.",
    quiz: [
      { q: "De onde vem o nome Rockford Basket Press?", a: "De uma antiga prensa de cesto para espremer uvas", x: ["Dos cestos usados para carregar uvas", "Do apelido de infância do fundador", "Do relevo do vinhedo em forma de cesto"] },
    ],
  },
  sh2_peterlehmann_stonewell: {
    fact: "O Shiraz de topo da vinícola que Peter Lehmann fundou no fim dos anos 1970 para comprar as uvas dos produtores do Barossa, ameaçadas de ir para o lixo numa época de excesso de oferta.",
    quiz: [
      { q: "Que carta de baralho aparece no rótulo e no logotipo dos vinhos Peter Lehmann?", a: "Dama de paus", x: ["Ás de espadas", "Rei de copas", "Valete de ouros"] },
    ],
  },
  sh2_grantburge_meshach: {
    fact: "O Shiraz de topo da vinícola do Barossa fundada em 1988 pelo casal Grant e Helen Burge. É feito com uvas de vinhas velhas.",
    quiz: [
      { q: "Quem é o Meshach do Grant Burge Meshach?", a: "O bisavô de Grant Burge", x: ["O vizinho que vendeu o primeiro vinhedo", "O primeiro pastor luterano do Barossa", "O primeiro enólogo-chefe da vinícola"] },
    ],
  },
  sh2_langmeil_freedom: {
    fact: "Vem de videiras de Shiraz do Barossa que estão entre as mais antigas do mundo. O nome “liberdade” homenageia os imigrantes que vieram da Prússia em busca de liberdade religiosa.",
    quiz: [
      { q: "O que significa o “1843” de Langmeil The Freedom 1843?", a: "O ano de plantio das videiras", x: ["O ano de fundação da vinícola", "O ano da primeira exportação", "A altitude do vinhedo (m)"] },
    ],
  },
  sh2_charlesmelton_ninepopes: {
    fact: "Corte ao estilo do Rhône, com velhas Grenache do Barossa, Shiraz e Mourvèdre. É o vinho emblemático de Charles Melton.",
    quiz: [
      { q: "Como surgiu o nome Nine Popes (nove papas), de Charles Melton?", a: "De uma tradução errada do “neuf” (novo) de Châteauneuf-du-Pape como o número 9", x: ["O vinhedo foi abençoado por nove papas", "Mistura nove castas", "O fundador colecionava nove medalhas papais"] },
    ],
  },
  sh2_glaetzer_amonra: {
    fact: "O vinho de topo que o enólogo Ben Glaetzer faz com velhas vinhas de Shiraz do Barossa. É engarrafado sem filtração.",
    quiz: [
      { q: "Quem é Amon-Rá, do Glaetzer Amon-Ra?", a: "O deus do sol da mitologia egípcia", x: ["O deus do vinho da mitologia grega", "O deus do trovão da mitologia nórdica", "O deus da lua da mitologia mesopotâmica"] },
    ],
  },
  sh2_johnduval_entity: {
    fact: "Shiraz do Barossa feito por John Duval, que foi o enólogo-chefe responsável pelo Grange na Penfolds de 1986 a 2002, depois de se tornar independente.",
    quiz: [
      { q: "Em que vinícola John Duval foi enólogo-chefe antes de se tornar independente?", a: "Penfolds", x: ["Wolf Blass", "Henschke", "Yalumba"] },
    ],
  },
  sh2_yalumba_octavius: {
    fact: "O vinho de topo que a Yalumba, a vinícola familiar mais antiga da Austrália, faz com velhas vinhas de Shiraz do Barossa.",
    quiz: [
      { q: "De onde vem o nome Yalumba The Octavius?", a: "Do pequeno barril de carvalho “octave” usado no amadurecimento", x: ["Do oitavo teste de vinificação", "De um corte de oito vinhedos", "De oito anos de amadurecimento"] },
    ],
  },
  sh2_jacobscreek_doublebarrel: {
    fact: "Shiraz amadurecido em barricas de vinho e depois transferido para barris que guardaram outra bebida, onde amadurece de novo; por isso “Double Barrel”.",
    quiz: [
      { q: "Em que tipo de barril o Jacob’s Creek Double Barrel Shiraz faz o segundo amadurecimento?", a: "Barris que envelheceram uísque", x: ["Barris que guardaram Jerez", "Barris que guardaram rum", "Barris que guardaram Porto"] },
    ],
  },
  sh2_henschke_cyril: {
    fact: "Cabernet Sauvignon do Eden Valley em homenagem a Cyril Henschke, que lançou os primeiros vinhos de vinhedo único da casa, como o Hill of Grace.",
    quiz: [
      { q: "Qual é o parentesco de Cyril Henschke com Stephen Henschke, que hoje comanda a vinícola?", a: "Pai", x: ["Avô", "Irmão mais velho", "Tio"] },
    ],
  },
  sh2_pewseyvale_riesling: {
    fact: "Vinhedo onde o imigrante inglês Joseph Gilbert plantou as primeiras uvas das colinas do Eden Valley, em 1847. Em 1961, a família Hill-Smith, da Yalumba, o recuperou.",
    quiz: [
      { q: "De onde vem o nome Pewsey Vale?", a: "Do vale inglês “Vale of Pewsey”, em Wiltshire", x: ["Da língua nativa, significando “fonte clara”", "Do nome da filha que fez a primeira colheita", "Do nome de uma igreja vizinha"] },
    ],
  },
  sh2_darenberg_stumpjump: {
    fact: "O corte do dia a dia da d’Arenberg. Todos os rótulos da d’Arenberg trazem uma faixa diagonal vermelha.",
    quiz: [
      { q: "Que tipo de arado é o “stump jump plough”, inventado na Austrália do Sul, que deu nome ao d’Arenberg Stump Jump?", a: "Um arado que salta ao bater num toco e passa por cima", x: ["Um arado que arranca só as ervas entre as videiras", "Um arado movido a vapor", "Um arado puxado por quatro bois"] },
    ],
  },
  sh2_darenberg_footbolt: {
    fact: "Shiraz que leva no nome uma história da época de Joseph Osborn, que em 1912 comprou o vinhedo em McLaren Vale e lançou as bases da d’Arenberg.",
    quiz: [
      { q: "O que era originalmente o “Footbolt” do d’Arenberg The Footbolt?", a: "Um cavalo de corrida de Joseph Osborn", x: ["Um riacho ao lado do vinhedo", "O cão de caça do fundador", "Uma antiga prensa manual"] },
    ],
  },
  sh2_wirrawirra_churchblock: {
    fact: "O corte emblemático da Wirra Wirra, vinícola de McLaren Vale fundada em 1894, que havia fechado e foi revivida em 1969.",
    quiz: [
      { q: "Quem reviveu e reabriu a Wirra Wirra em 1969?", a: "Greg Trott", x: ["Max Schubert", "Wolf Blass", "Peter Lehmann"] },
    ],
  },
  sh2_taylors_cs: {
    fact: "Cabernet Sauvignon da vinícola familiar fundada pela família Taylor no Clare Valley em 1969. No Reino Unido e em vários países é vendido com o nome “Wakefield”.",
    quiz: [
      { q: "Por que os vinhos Taylors são vendidos em vários países com o nome “Wakefield”?", a: "O nome coincide com o da casa de Porto portuguesa Taylor’s", x: ["A Casa Real britânica mandou trocar o nome", "O fundador mudou de nome", "Homenageia o porto da primeira exportação"] },
    ],
  },
  sh2_mounthorrocks_cordoncut: {
    fact: "Riesling doce que a enóloga Stephanie Toole faz no Clare Valley. Sem botrytis nem geada, concentra o açúcar secando as uvas no próprio pé.",
    quiz: [
      { q: "Em que consiste o método “cordon cut” do Mount Horrocks Cordon Cut?", a: "Cortar os ramos com os cachos e deixá-los secar presos à videira", x: ["Colher uvas congeladas à meia-noite", "Secar as uvas colhidas sobre palha", "Colher só as bagas com podridão nobre"] },
    ],
  },
  sh2_wynns_johnriddoch: {
    fact: "O Cabernet Sauvignon de topo que a Wynns Coonawarra Estate faz selecionando só as melhores uvas. A primeira safra saiu em 1982.",
    quiz: [
      { q: "Quem foi John Riddoch, homenageado pelo Wynns John Riddoch?", a: "O pioneiro escocês que plantou as primeiras uvas em Coonawarra", x: ["O empresário italiano que comprou a Wynns", "O primeiro enólogo-chefe da vinícola", "O primeiro governador da Austrália do Sul"] },
    ],
  },
  sh2_shawsmith_sb: {
    fact: "O Sauvignon Blanc emblemático da vinícola fundada em 1989 nas Adelaide Hills pelos primos Martin Shaw e Michael Hill-Smith.",
    quiz: [
      { q: "Que título Michael Hill-Smith, cofundador da Shaw + Smith, obteve em 1988, o primeiro australiano a conquistá-lo?", a: "Master of Wine (MW)", x: ["Master Sommelier (MS)", "Diploma em enologia pela Universidade de Bordeaux", "Jimmy Watson Trophy"] },
    ],
  },
  sh2_brokenwood_graveyard: {
    fact: "O Shiraz de topo da Brokenwood, fundada no Hunter Valley em 1970 por três amigos de Sydney. O terreno havia sido reservado para um cemitério, daí o nome “Graveyard”.",
    quiz: [
      { q: "Qual era a profissão dos três fundadores da Brokenwood?", a: "Advogados", x: ["Médicos", "Bancários", "Arquitetos"] },
    ],
  },
  sh2_mountpleasant_oshea: {
    fact: "Shiraz da Mount Pleasant em homenagem a Maurice O’Shea, lendário enólogo do Hunter Valley. Seus vinhos eram considerados os melhores tintos australianos em meados do século XX.",
    quiz: [
      { q: "Em que país Maurice O’Shea, que comandou a Mount Pleasant, estudou viticultura e enologia?", a: "França", x: ["Alemanha", "Itália", "Estados Unidos"] },
    ],
  },
  sh2_tyrrells_vat47: {
    fact: "Chardonnay do Hunter Valley lançado com a safra 1971, considerado o primeiro Chardonnay comercial da Austrália.",
    quiz: [
      { q: "Quem fez o Tyrrell’s Vat 47 pela primeira vez, em 1971?", a: "Murray Tyrrell", x: ["Bruce Tyrrell", "Edward Tyrrell", "Max Schubert"] },
    ],
  },
  sh2_lakesfolly_cabernets: {
    fact: "Vinícola fundada por Max Lake no Hunter Valley em 1963. A aventura, que ele mesmo chamou de “loucura do Lake” (Folly), abriu a era das vinícolas-butique na Austrália.",
    quiz: [
      { q: "Qual era a profissão de Max Lake, fundador da Lake’s Folly?", a: "Cirurgião", x: ["Advogado", "Banqueiro", "Jornalista"] },
    ],
  },
  sh2_clonakilla_sv: {
    fact: "O vinho emblemático da vinícola fundada perto de Canberra em 1971 pelo cientista dr. John Kirk. Um pouco da branca Viognier é cofermentado com o Shiraz.",
    quiz: [
      { q: "Que região francesa, famosa pela tradição de misturar Viognier à Syrah, serviu de modelo ao Clonakilla Shiraz Viognier?", a: "Côte-Rôtie", x: ["Châteauneuf-du-Pape", "Cornas", "Bandol"] },
    ],
  },
  sh2_xanadu_cs: {
    fact: "Cabernet Sauvignon da Xanadu, aberta nos anos 1970, época pioneira de Margaret River. Mostra o Cabernet elegante e firme típico da região.",
    quiz: [
      { q: "De onde vem o nome Xanadu?", a: "Do poema “Kubla Khan”, do poeta inglês Coleridge", x: ["Da vila natal do fundador", "Da língua nativa, significando “brisa do mar”", "Do nome da filha do primeiro dono do vinhedo"] },
    ],
  },
  sh2_voyager_chardonnay: {
    fact: "Chardonnay da vinícola de Margaret River comprada e desenvolvida pelo empresário da mineração Michael Wright em 1991. O prédio branco e o roseiral fazem dela um ponto turístico.",
    quiz: [
      { q: "Em que estilo arquitetônico foi construído o prédio branco da Voyager Estate?", a: "Cape Dutch, da África do Sul", x: ["Château francês", "Casa de fazenda toscana", "Missão espanhola"] },
    ],
  },
  sh2_cullen_kevinjohn: {
    fact: "O Chardonnay de topo da Cullen, feito com uvas cultivadas em biodinâmica. É um dos Chardonnays emblemáticos de Margaret River.",
    quiz: [
      { q: "Quem o Cullen Kevin John homenageia?", a: "O médico Kevin Cullen, cofundador da vinícola", x: ["Um vizinho que ajudou na primeira colheita", "O primeiro neto dos fundadores", "O primeiro enólogo de Margaret River"] },
    ],
  },
  sh2_vassefelix_heytesbury: {
    fact: "O Chardonnay de topo da Vasse Felix, a primeira vinícola de Margaret River, feito com uvas das melhores parcelas.",
    quiz: [
      { q: "O que é “Heytesbury”, do Vasse Felix Heytesbury?", a: "A empresa da família Holmes à Court, dona da Vasse Felix desde 1987", x: ["Um farol na costa de Margaret River", "A vila natal do primeiro enólogo", "“Areia branca” na língua nativa"] },
    ],
  },
  sh2_tahbilk_marsanne: {
    fact: "Vinícola histórica de Victoria, fundada em 1860. Cultiva um dos maiores vinhedos de Marsanne do mundo, com videiras plantadas em 1927.",
    quiz: [
      { q: "Que família administra a Tahbilk há gerações, desde 1925?", a: "Família Purbrick", x: ["Família Brown", "Família Henschke", "Família Hardy"] },
    ],
  },
  sh2_yarrayering_dr1: {
    fact: "Corte de Cabernet da vinícola fundada em 1969 no Yarra Valley pelo dr. Bailey Carrodus. O rótulo não traz a casta, só “Dry Red No. 1”.",
    quiz: [
      { q: "Qual era a profissão original de Bailey Carrodus, fundador da Yarra Yering?", a: "Botânico", x: ["Cirurgião", "Advogado", "Engenheiro de minas"] },
    ],
  },
  sh2_mountmary_quintet: {
    fact: "Corte bordalês da Mount Mary, no Yarra Valley, que começou quando o médico dr. John Middleton plantou uvas em 1971. A pequena produção vai sobretudo para a lista de clientes.",
    quiz: [
      { q: "Que ideia está por trás do nome “Quintet” (quinteto) da Mount Mary?", a: "É feito com as cinco castas de Bordeaux", x: ["Mistura uvas de cinco vinhedos", "Amadurece cinco anos", "Homenageia os cinco filhos do fundador"] },
    ],
  },
  sh2_coldstreamhills_pn: {
    fact: "Pinot Noir da vinícola fundada no Yarra Valley em 1985 por James Halliday, o grande crítico de vinhos australiano.",
    quiz: [
      { q: "Que guia anual de vinhos australianos James Halliday, fundador da Coldstream Hills, publicava?", a: "Halliday Wine Companion", x: ["Penguin Wine Guide", "Hugh Johnson’s Pocket Wine Book", "Parker’s Wine Buyer’s Guide"] },
    ],
  },
  sh2_yeringstation_pn: {
    fact: "Pinot Noir da Yering Station, erguida numa antiga fazenda do Yarra Valley. O clima fresco dá um sabor delicado.",
    quiz: [
      { q: "Qual é a importância do local da Yering Station na história do vinho de Victoria?", a: "Foi onde se plantaram as primeiras uvas de Victoria, em 1838", x: ["Foi a primeira vinícola de espumantes de Victoria", "Foi fundada pela primeira enóloga da Austrália", "Foi a primeira a usar tampa de rosca na Austrália"] },
    ],
  },
  sh2_tenminutes_pn: {
    fact: "Pinot Noir de vinhedos frescos da Mornington Peninsula, cercada pelo mar, ao sul de Melbourne.",
    quiz: [
      { q: "De onde vem o nome Ten Minutes by Tractor (dez minutos de trator)?", a: "Os três primeiros vinhedos ficavam a menos de dez minutos de trator um do outro", x: ["A vinícola fica a dez minutos de trator do mar", "As uvas são prensadas em até dez minutos após a colheita", "O fundador tinha uma empresa de tratores"] },
    ],
  },
  sh2_chambers_raremuscat: {
    fact: "Muscat fortificado da Rosewood, vinícola de Rutherglen administrada há gerações pela família Chambers. Mistura vinhos-base com décadas de idade.",
    quiz: [
      { q: "Nas quatro categorias de envelhecimento do Muscat de Rutherglen (Rutherglen, Classic, Grand, Rare), onde fica o “Rare”?", a: "É a categoria mais alta", x: ["É a categoria mais baixa", "É a segunda categoria", "É a terceira categoria"] },
    ],
  },
  sh2_seppelt_sparklingshiraz: {
    fact: "Espumante tinto da Seppelt, de Great Western, em Victoria. Só é lançado depois de um longo amadurecimento em garrafa.",
    quiz: [
      { q: "Quem escavou “The Drives”, os longos túneis de amadurecimento sob a vinícola Seppelt de Great Western?", a: "Mineiros de ouro que tinham ficado sem trabalho", x: ["Engenheiros do exército britânico", "Prisioneiros degredados", "Operários ferroviários"] },
    ],
  },
  sh2_jansz_cuvee: {
    fact: "Vinícola de espumantes da Tasmânia criada em 1986 em parceria com a casa de Champagne Louis Roederer. Faz espumantes com segunda fermentação na garrafa, como o Champagne.",
    quiz: [
      { q: "De quem vem o nome Jansz?", a: "Do explorador holandês Abel Janszoon Tasman, o primeiro a chegar à Tasmânia", x: ["Do comerciante holandês que fundou a vinícola", "Do avô do fundador", "Do explorador inglês James Cook"] },
    ],
  },
  sh2_cloudybay_pn: {
    fact: "Pinot Noir que a Cloudy Bay, famosa pelo Sauvignon Blanc, faz com uvas dos vales frescos do sul de Marlborough.",
    quiz: [
      { q: "Que explorador batizou este mar de “Cloudy Bay” (baía nublada) em 1770?", a: "O capitão inglês James Cook", x: ["O holandês Abel Tasman", "O francês Dumont d’Urville", "O português Fernão de Magalhães"] },
    ],
  },
  sh2_seresin_sb: {
    fact: "Sauvignon Blanc da vinícola que Michael Seresin fundou em Marlborough no início dos anos 1990. As uvas são cultivadas em orgânico e biodinâmica, e o rótulo traz a marca de uma mão.",
    quiz: [
      { q: "Qual é a profissão principal de Michael Seresin, fundador da Seresin Estate?", a: "Diretor de fotografia de cinema", x: ["Arquiteto", "Jogador da seleção de rúgbi", "Cantor de ópera"] },
    ],
  },
  sh2_nautilus_sb: {
    fact: "Sauvignon Blanc de uma vinícola de Marlborough que usa como símbolo a concha do náutilo.",
    quiz: [
      { q: "Que vinícola australiana é administrada pela família Hill-Smith, dona da Nautilus Estate?", a: "Yalumba", x: ["Penfolds", "Henschke", "Jacob’s Creek"] },
    ],
  },
  sh2_matua_sb: {
    fact: "Vinícola fundada em Auckland em 1974 pelos irmãos Ross e Bill Spence. Hoje é uma marca popular, conhecida pelo Sauvignon Blanc de Marlborough.",
    quiz: [
      { q: "Que marco da história do vinho neozelandês a Matua estabeleceu em 1974?", a: "O primeiro Sauvignon Blanc da Nova Zelândia", x: ["O primeiro vinho neozelandês com tampa de rosca", "O primeiro Pinot Noir da Nova Zelândia", "O primeiro espumante da Nova Zelândia"] },
    ],
  },
  sh2_giesen_sb: {
    fact: "Sauvignon Blanc da vinícola familiar fundada na Nova Zelândia em 1981 por três irmãos. Também ficou conhecida pelos vinhos sem álcool, a linha “0%”.",
    quiz: [
      { q: "De que país vieram os irmãos Theo, Alex e Marcel Giesen, fundadores da Giesen?", a: "Alemanha", x: ["Países Baixos", "Áustria", "Suíça"] },
    ],
  },
  sh2_spyvalley_sb: {
    fact: "Sauvignon Blanc de uma vinícola familiar do vale Waihopai, em Marlborough.",
    quiz: [
      { q: "De onde vem o nome Spy Valley?", a: "De uma estação de comunicações por satélite do serviço de inteligência dentro do vale", x: ["De uma caverna onde espiões se esconderam na guerra", "De um romance de espionagem escrito pelo fundador", "De uma história de mineiros que garimpavam ouro às escondidas"] },
    ],
  },
  sh2_astrolabe_sb: {
    fact: "Sauvignon Blanc da Astrolabe, pequena vinícola familiar de Marlborough.",
    quiz: [
      { q: "De onde vem o nome Astrolabe?", a: "Do navio do explorador francês Dumont d’Urville, que explorou a costa neozelandesa", x: ["Do navio do capitão James Cook", "De uma canoa tradicional maori", "Do veleiro do fundador"] },
    ],
  },
  sh2_closhenri_sb: {
    fact: "Sauvignon Blanc da vinícola que a família Henri Bourgeois, do Loire, fundou em Marlborough em 2000.",
    quiz: [
      { q: "Em que região francesa a família Bourgeois, fundadora do Clos Henri, faz vinho há gerações?", a: "Sancerre", x: ["Chablis", "Bordeaux", "Alsácia"] },
    ],
  },
  sh2_babich_blacklabel: {
    fact: "Sauvignon Blanc de Marlborough da Babich, antiga vinícola familiar neozelandesa aberta em 1916.",
    quiz: [
      { q: "De onde veio o imigrante Josip Babich, fundador da Babich?", a: "Da Dalmácia, na Croácia", x: ["Da Sicília, na Itália", "De Creta, na Grécia", "Da Galícia, na Espanha"] },
    ],
  },
  sh2_tohu_sb: {
    fact: "Sauvignon Blanc fresco que a Tohu Wines faz com uvas de Marlborough.",
    quiz: [
      { q: "Que recorde a Tohu Wines tem na história do vinho?", a: "Primeira marca de vinho do mundo de propriedade maori", x: ["Primeira vinícola com certificação vegana do mundo", "Primeiro vinho neozelandês com tampa de rosca", "Primeira vinícola neutra em carbono do Hemisfério Sul"] },
    ],
  },
  sh2_pegasusbay_riesling: {
    fact: "Riesling da vinícola da família Donaldson em Waipara, ao norte de Christchurch. É de estilo rico, com um leve açúcar residual.",
    quiz: [
      { q: "Qual é a profissão de Ivan Donaldson, fundador da Pegasus Bay?", a: "Neurologista", x: ["Advogado", "Cantor de ópera", "Jogador de rúgbi"] },
    ],
  },
  sh2_kumeuriver_mates: {
    fact: "Chardonnay da família Brajkovich, vinda da Croácia, feito em Kumeu, perto de Auckland. É considerado referência do Chardonnay neozelandês.",
    quiz: [
      { q: "Quem é o “Mate” do Kumeu River Mate’s Vineyard?", a: "Mate Brajkovich, pai dos irmãos que hoje comandam a vinícola", x: ["Os amigos que ajudaram a plantar o vinhedo", "O fazendeiro inglês que vendeu o primeiro vinhedo", "Um chefe maori"] },
    ],
  },
  sh2_trinityhill_homage: {
    fact: "A Syrah de topo da Trinity Hill, dos solos de cascalho do Gimblett Gravels, em Hawke’s Bay. Mostrou o potencial da Syrah neozelandesa.",
    quiz: [
      { q: "A quem é dedicada a “homenagem” do Trinity Hill Homage Syrah?", a: "A Gérard Jaboulet, que comandou a Paul Jaboulet Aîné, no Rhône", x: ["A Gérard Chave, de Hermitage", "A Marcel Guigal, de Côte-Rôtie", "A Jacques Perrin, de Châteauneuf-du-Pape"] },
    ],
  },
  sh2_missionestate_syrah: {
    fact: "Syrah da vinícola mais antiga da Nova Zelândia, fundada em 1851 e ativa até hoje.",
    quiz: [
      { q: "Quem fundou a Mission Estate?", a: "Missionários católicos franceses (maristas)", x: ["Pastores anglicanos ingleses", "Imigrantes croatas", "Imigrantes luteranos alemães"] },
    ],
  },
  sh2_twopaddocks_pn: {
    fact: "Pinot Noir da vinícola fundada em Central Otago pelo ator Sam Neill, que cresceu na Nova Zelândia. O nome vem dos dois pequenos pastos onde tudo começou.",
    quiz: [
      { q: "Qual é o filme mais conhecido de Sam Neill, fundador da Two Paddocks?", a: "Jurassic Park", x: ["O Senhor dos Anéis", "Titanic", "Matrix"] },
    ],
  },
  sh2_montes_alphasyrah: {
    fact: "O Syrah da linha Montes Alpha, a linha chilena mais querida na Coreia. É feito intenso, com uvas amadurecidas pelo sol quente do vale de Colchagua.",
    quiz: [
      { q: "Que música a Montes toca sem parar na sala de barricas da vinícola de Apalta?", a: "Canto gregoriano", x: ["Sinfonias de Mozart", "Música folclórica chilena", "Jazz"] },
    ],
  },
  sh2_carmin_peumo: {
    fact: "Vinho ícone que a Concha y Toro faz com a Carménère da melhor parcela do vinhedo de Peumo. É considerado o melhor Carménère do Chile.",
    quiz: [
      { q: "O que significa “Carmín”, de Carmín de Peumo, em espanhol?", a: "Carmim (vermelho intenso)", x: ["Pequeno jardim", "Pedra vermelha", "Árvore antiga"] },
    ],
  },
  sh2_terrunyo_carmenere: {
    fact: "Carménère da linha Terrunyo, criada pela Concha y Toro para expressar a personalidade de cada vinhedo. É feito com uvas de Peumo, grande terra da Carménère.",
    quiz: [
      { q: "Qual é o significado do nome Terrunyo, da Concha y Toro?", a: "Vem de “terruño”, o “terroir” em espanhol", x: ["“Terra vermelha” em mapuche", "O nome da filha do fundador", "“Três colinas” em latim"] },
    ],
  },
  sh2_almaviva_epu: {
    fact: "Segundo vinho da Almaviva, parceria entre a chilena Concha y Toro e o Mouton Rothschild, de Bordeaux.",
    quiz: [
      { q: "O que significa “EPU”, da Almaviva, em mapuche?", a: "Dois (2)", x: ["Céu", "Águia", "Rio"] },
    ],
  },
  sh2_altair: {
    fact: "Corte ícone de um vinhedo de altitude no vale de Cachapoal, ao pé dos Andes, criado pela chilena San Pedro em parceria com uma grande casa de Bordeaux.",
    quiz: [
      { q: "Que château de Saint-Émilion criou o Altaïr com a chilena San Pedro?", a: "Château Dassault", x: ["Château Cheval Blanc", "Château Ausone", "Château Pavie"] },
      { q: "De onde vem o nome Altaïr?", a: "Da estrela mais brilhante da constelação da Águia", x: ["De um pico dos Andes", "De um deus da mitologia mapuche", "Do cavalo de um herói da independência chilena"] },
    ],
  },
  sh2_aquitania_lazuli: {
    fact: "Cabernet Sauvignon da vinícola fundada perto de Santiago em 1990 pelos bordaleses Paul Pontallier e Bruno Prats com o chileno Felipe de Solminihac.",
    quiz: [
      { q: "Que primeiro cru de Bordeaux Paul Pontallier, cofundador da Viña Aquitania, dirigiu por muito tempo?", a: "Château Margaux", x: ["Château Latour", "Château Haut-Brion", "Château Mouton Rothschild"] },
      { q: "A que lugar se refere o nome Aquitania?", a: "À Aquitânia, região do sudoeste da França onde fica Bordeaux", x: ["Ao País Basco espanhol", "A uma ilha do sul do Chile", "Ao antigo nome da Toscana"] },
    ],
  },
  sh2_gatonegro_cs: {
    fact: "Marca de vinhos do dia a dia da chilena San Pedro: um vinho popular do Chile exportado para muitos países.",
    quiz: [
      { q: "O que significa Gato Negro em espanhol?", a: "Gato preto", x: ["Cavalo preto", "Touro preto", "Águia preta"] },
    ],
  },
  sh2_cousinomacul_finisterrae: {
    fact: "Corte premium à base de Cabernet Sauvignon que a histórica Cousiño-Macul faz com uvas do vale do Maipo.",
    quiz: [
      { q: "O que significa Finis Terrae em latim?", a: "Fim da terra (fim do mundo)", x: ["Terra boa", "Solo vermelho", "Presente da terra"] },
    ],
  },
  sh2_santarita_triplec: {
    fact: "Corte premium da Santa Rita com uvas do vale do Maipo. Algo raro no Chile, tem a Cabernet Franc como base.",
    quiz: [
      { q: "De onde vem o nome Santa Rita Triple C?", a: "Mistura três castas que começam com C", x: ["É colhido em três etapas", "Das iniciais de três fundadores", "Mistura uvas de três vinhedos (“campos”)"] },
    ],
  },
  sh2_ventisquero_pangea: {
    fact: "Syrah que a chilena Ventisquero faz com uvas de Apalta em parceria com John Duval, enólogo vindo da australiana Penfolds.",
    quiz: [
      { q: "Que ideia o nome Pangea, da Ventisquero, carrega?", a: "O supercontinente de antes da separação dos continentes", x: ["Uma deusa grega do mar", "“Montanha alta” em mapuche", "“Todas as uvas” em latim"] },
    ],
  },
  sh2_losvascos_cs: {
    fact: "Cabernet Sauvignon da vinícola Los Vascos, no vale de Colchagua. É considerada a primeira vinícola comprada no Chile pela família dona de um primeiro cru de Bordeaux.",
    quiz: [
      { q: "Que família dona de um primeiro cru de Bordeaux comprou a Los Vascos em 1988?", a: "Os Rothschild do Château Lafite Rothschild", x: ["Os Mentzelopoulos do Château Margaux", "Os Dillon do Château Haut-Brion", "Os Pinault do Château Latour"] },
    ],
  },
  sh2_catena_alta: {
    fact: "Malbec que a Catena Zapata faz escolhendo só as melhores parcelas de vários vinhedos de altitude.",
    quiz: [
      { q: "Em que se inspira o prédio da Catena Zapata, produtora do Catena Alta?", a: "Numa pirâmide maia", x: ["Num templo inca do sol", "Num château de Bordeaux", "Num antigo mosteiro espanhol"] },
    ],
  },
  sh2_angelicazapata: {
    fact: "Vinho que a Catena Zapata faz com Malbec de vinhedos de altitude. O longo amadurecimento em barrica lhe dá sabor firme e profundo.",
    quiz: [
      { q: "Quem é Angélica Zapata, do Angélica Zapata Malbec Alta?", a: "A mãe de Nicolás Catena", x: ["A filha caçula de Nicolás Catena", "A esposa de Nicolás Catena", "A primeira enóloga de Mendoza"] },
    ],
  },
  sh2_luca_malbec: {
    fact: "Malbec da marca pessoal que Laura Catena, da família Catena, faz à parte com uvas de altitude do Valle de Uco.",
    quiz: [
      { q: "De quem vem o nome “Luca”, marca de vinhos de Laura Catena?", a: "Do filho de Laura Catena", x: ["Do pai de Nicolás Catena", "Do fundador da primeira geração, vindo da Itália", "Do primeiro dono do vinhedo"] },
    ],
  },
  sh2_donapaula_malbec: {
    fact: "Malbec da vinícola fundada em Mendoza pelo grupo Claro, dono da chilena Santa Rita.",
    quiz: [
      { q: "Quem é homenageada pelo nome Doña Paula?", a: "Paula Jaraquemada, que escondeu 120 soldados na guerra de independência do Chile", x: ["A mãe do fundador", "A padroeira de Mendoza", "A primeira enóloga da Argentina"] },
    ],
  },
  sh2_decero_malbec: {
    fact: "Malbec do vinhedo Remolinos, aberto em terra virgem desbravada em Agrelo, Mendoza.",
    quiz: [
      { q: "Que ideia o nome “Decero”, da Finca Decero, carrega?", a: "Do zero (começar do nada)", x: ["Dez colinas", "Orvalho da madrugada", "Rocha branca"] },
    ],
  },
  sh2_crios_malbec: {
    fact: "Malbec de Susana Balbo, a primeira mulher da Argentina a se formar em enologia.",
    quiz: [
      { q: "O que significa “Crios”, de Susana Balbo Crios?", a: "Filhos (as crias)", x: ["Madrugada", "Cristal", "Vento"] },
    ],
  },
  sh2_santajulia_malbec: {
    fact: "Marca de vinhos do dia a dia da família Zuccardi, de Mendoza. Também é conhecida pela linha orgânica.",
    quiz: [
      { q: "Quem é a Julia que dá nome ao Santa Julia?", a: "Julia Zuccardi, filha da família Zuccardi", x: ["A padroeira de Mendoza", "A mãe do fundador", "A santa da vila natal italiana"] },
    ],
  },
  sh2_vinacobos_bramare: {
    fact: "Malbec da Viña Cobos, fundada em Mendoza em 1999 por um renomado enólogo californiano e amigos argentinos.",
    quiz: [
      { q: "Que famoso enólogo americano fundou a Viña Cobos?", a: "Paul Hobbs", x: ["Robert Mondavi", "Heidi Barrett", "Helen Turley"] },
    ],
  },
  sh2_yacochuya: {
    fact: "Malbec intenso de uvas de altitude, a cerca de 2.000 m, em Cafayate, Salta. É feito pela família Etchart, de Salta, com um famoso consultor de Bordeaux.",
    quiz: [
      { q: "Que famoso consultor enológico de Bordeaux faz o Yacochuya?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  sh2_colome_torrontes: {
    fact: "Torrontés de vinhedos de altitude no vale Calchaquí, em Salta. É a uva branca emblemática da Argentina, de aroma floral exuberante.",
    quiz: [
      { q: "Que empresário suíço comprou e revitalizou a Bodega Colomé em 2001?", a: "Donald Hess", x: ["Meindert Pon", "Alexander Vik", "Eduardo Chadwick"] },
    ],
  },
  sh2_noemia: {
    fact: "Vinho feito em quantidade mínima com velhas vinhas de Malbec plantadas nos anos 1930 em Río Negro, na Patagônia.",
    quiz: [
      { q: "De quem vem o nome Noemía?", a: "De Noemi Marone Cinzano, da família italiana Cinzano, cofundadora da vinícola", x: ["Da lenda de uma princesa indígena", "Da esposa do primeiro dono do vinhedo", "Da padroeira da Patagônia"] },
    ],
  },
  sh2_findelmundo_malbec: {
    fact: "Malbec de uma vinícola que transformou em vinhedo um deserto de Neuquén, na Patagônia. O vento forte e a grande amplitude térmica dão vinhos de cor intensa.",
    quiz: [
      { q: "O que significa “Fin del Mundo” em espanhol?", a: "Fim do mundo", x: ["Terra do vento", "Estrela do sul", "Deserto branco"] },
    ],
  },
  sh2_schroeder_saurus: {
    fact: "Malbec da Familia Schroeder, vinícola familiar que plantou vinhedos no planalto desértico de Neuquén, na Patagônia.",
    quiz: [
      { q: "De onde vem o nome “Saurus”, dos vinhos da Familia Schroeder?", a: "De fósseis de dinossauro encontrados durante a construção da vinícola", x: ["Do apelido do fundador", "De um lagarto que vive no vinhedo", "De um antigo equipamento de extração de petróleo"] },
    ],
  },
  sh2_rustenvrede_estate: {
    fact: "Vinícola que só faz tintos, no sopé do Helderberg, em Stellenbosch. Em 1977 foi comprada por Jannie Engelbrecht, ex-jogador da seleção de rúgbi.",
    quiz: [
      { q: "O que significa Rust en Vrede em holandês?", a: "Descanso e paz", x: ["Colina vermelha", "Vento e mar", "Moinho antigo"] },
    ],
  },
  sh2_delairegraff_chardonnay: {
    fact: "Vinícola no alto do passo de Helshoogte, que liga Stellenbosch a Franschhoek. Também é famosa pelo hotel e pelas obras de arte.",
    quiz: [
      { q: "Qual é o negócio principal de Laurence Graff, dono da Delaire Graff?", a: "Joalheria de diamantes", x: ["Rede de hotéis", "Treinamento de cavalos de corrida", "Arquitetura"] },
    ],
  },
  sh2_beyerskloof_pinotage: {
    fact: "Vinho do dia a dia da vinícola especializada em Pinotage fundada pelo enólogo Beyers Truter, o “rei da Pinotage”.",
    quiz: [
      { q: "Em que grande casa de Stellenbosch Beyers Truter, fundador da Beyerskloof, foi enólogo por muito tempo?", a: "Kanonkop", x: ["Meerlust", "Vergelegen", "Rustenberg"] },
    ],
  },
  sh2_fairview_goatsdoroam: {
    fact: "Corte cujo nome vem da história das cabras da fazenda Fairview, também famosa pelo queijo de cabra, que entraram no vinhedo e comeram só as uvas mais maduras.",
    quiz: [
      { q: "O nome Goats do Roam imita o som de que região vinícola francesa?", a: "Côtes du Rhône", x: ["Châteauneuf-du-Pape", "Côte-Rôtie", "Côte de Nuits"] },
    ],
  },
  sh2_kenforrester_fmc: {
    fact: "O branco de topo feito com velhas vinhas de Chenin Blanc de Stellenbosch por Ken Forrester, o “Mister Chenin”.",
    quiz: [
      { q: "Oficialmente, o que significa a sigla “FMC” do Ken Forrester The FMC?", a: "Forrester Meinert Chenin", x: ["Fine Mature Chenin", "First Muscat Cuvée", "French Model Cellar"] },
    ],
  },
  sh2_demorgenzon_chenin: {
    fact: "Branco feito com velhas vinhas de Chenin Blanc pela DeMorgenzon, vinícola nas colinas de Stellenbosch. O nome significa “sol da manhã”.",
    quiz: [
      { q: "Que música a DeMorgenzon toca dia e noite no vinhedo e na adega?", a: "Música barroca", x: ["Jazz", "Tambores tradicionais africanos", "Rock"] },
    ],
  },
  sh2_porseleinberg: {
    fact: "Vinho da Boekenhoutskloof feito com Syrah orgânica de Swartland. O enólogo imprime os rótulos pessoalmente, numa velha impressora que fica na fazenda.",
    quiz: [
      { q: "O que significa Porseleinberg em africâner?", a: "Montanha de porcelana", x: ["Rio prateado", "Colina do vento", "Areal branco"] },
    ],
  },
  sh2_sadie_palladius: {
    fact: "Corte branco que Eben Sadie faz com velhas vinhas de várias castas espalhadas por Swartland. Tornou-se referência dos cortes brancos sul-africanos.",
    quiz: [
      { q: "O que têm em comum Palladius e Columella, nomes dos dois vinhos emblemáticos da Sadie Family?", a: "Ambos foram escritores romanos que escreveram sobre agricultura", x: ["Ambos foram imperadores romanos", "Ambos são deuses da mitologia grega", "Ambos são montanhas de Swartland"] },
    ],
  },
  sh2_allesverloren_tintabarocca: {
    fact: "Tinto de casta portuguesa feito por uma antiga fazenda familiar de Riebeek-Kasteel, em Swartland. Também é famosa pelo fortificado em estilo Porto.",
    quiz: [
      { q: "O que significa Allesverloren, o nome da fazenda?", a: "Tudo perdido", x: ["Vinhedo sem fim", "Ovelha perdida", "Colheita tardia"] },
    ],
  },
  sh2_grootconstantia_gouverneurs: {
    fact: "Corte bordalês da Groot Constantia, a fazenda de vinho mais antiga da África do Sul, fundada em 1685.",
    quiz: [
      { q: "Quem fundou a fazenda Groot Constantia?", a: "Simon van der Stel, governador do Cabo", x: ["Jan van Riebeeck, fundador da Cidade do Cabo", "Willem Adriaan van der Stel, filho de Simon", "Cecil Rhodes, magnata da mineração"] },
    ],
  },
  sh2_kleinconstantia_sb: {
    fact: "Sauvignon Blanc que a Klein Constantia, famosa pelo Vin de Constance, faz nas colinas de Constantia, batidas pela brisa do mar.",
    quiz: [
      { q: "Qual era a relação original entre Klein Constantia e Groot Constantia?", a: "Eram uma só fazenda, Constantia, fundada em 1685 e depois dividida", x: ["Foram fundadas separadamente por dois irmãos", "Uma comprou a outra e mudou o nome", "Não têm relação, só o nome parecido"] },
    ],
  },
  sh2_boschendal_1685: {
    fact: "Chardonnay da Boschendal, fazenda histórica na entrada de Franschhoek, desbravada por imigrantes huguenotes franceses.",
    quiz: [
      { q: "O que significa o “1685” de Boschendal 1685?", a: "O ano em que a fazenda Boschendal foi fundada", x: ["O ano da primeira exportação de vinho", "A altitude do vinhedo (m)", "O número de videiras plantadas na fazenda"] },
    ],
  },
  sh2_simonsig_kaapsevonkel: {
    fact: "Primeiro espumante sul-africano com segunda fermentação na garrafa, criado por Frans Malan em 1971. É o ponto de partida do “Cap Classique” da África do Sul.",
    quiz: [
      { q: "O que significa “Kaapse Vonkel” em africâner?", a: "Brilho do Cabo", x: ["Estrela do Cabo", "Espuma do mar", "Orvalho dourado"] },
    ],
  },
  sh2_ernieels_signature: {
    fact: "Corte bordalês da vinícola fundada no sopé do Helderberg, em Stellenbosch, por um astro do esporte mundial nascido na África do Sul.",
    quiz: [
      { q: "Em que esporte brilhou Ernie Els, fundador da Ernie Els Wines?", a: "Golfe", x: ["Rúgbi", "Críquete", "Tênis"] },
    ],
  },
  sh2_glenelly_ladymay: {
    fact: "Corte à base de Cabernet Sauvignon da vinícola que May-Eliane de Lencquesaing, que comandava uma grande casa de Bordeaux, fundou em Stellenbosch aos quase 80 anos. O nome vem dela.",
    quiz: [
      { q: "Que segundo cru de Pauillac May-Eliane de Lencquesaing, fundadora da Glenelly, comandou até 2007?", a: "Château Pichon Longueville Comtesse de Lalande", x: ["Château Pichon Baron", "Château Lynch-Bages", "Château Pontet-Canet"] },
    ],
  },
  sh2_lanzerac_pinotage: {
    fact: "Pinotage da Lanzerac, fazenda histórica de Stellenbosch também famosa como hotel.",
    quiz: [
      { q: "Que marco a Lanzerac deixou na história do vinho em 1961?", a: "Lançou o primeiro vinho com o nome da casta “Pinotage” no rótulo", x: ["Foi a primeira da África do Sul a usar tampa de rosca", "Lançou o primeiro rosé sul-africano", "Recebeu a primeira certificação orgânica da África do Sul"] },
    ],
  },
  sh2_diemersfontein_pinotage: {
    fact: "Pinotage da Diemersfontein, vinícola de Wellington, a nordeste da Cidade do Cabo. Fez sucesso com um estilo macio e de carvalho marcante.",
    quiz: [
      { q: "Qual é o apelido do estilo de Pinotage lançado e popularizado pela Diemersfontein?", a: "Pinotage de café", x: ["Pinotage de baunilha", "Pinotage defumado", "Pinotage de cereja"] },
    ],
  },
  sh2_bouza_tannat: {
    fact: "Tannat de uma vinícola-butique familiar perto de Montevidéu, a capital. É uma das que mostraram ao mundo a qualidade do Tannat uruguaio.",
    quiz: [
      { q: "O que a Bodega Bouza é famosa por colecionar e expor dentro da vinícola?", a: "Carros clássicos", x: ["Garrafas de vinho antigas", "Selas de gaúcho", "Obras de arte contemporânea"] },
    ],
  },
  sh2_pisano_rpf: {
    fact: "Tannat da vinícola que a família Pisano, descendente de imigrantes italianos, administra há gerações em Canelones.",
    quiz: [
      { q: "O que significa a sigla “RPF” do Pisano RPF?", a: "Reserva Personal de la Familia (reserva pessoal da família)", x: ["Red Premium Fruit", "Río de la Plata Finca", "O número de uma parcela do vinhedo"] },
    ],
  },
  sh2_mercian_kikyogahara: {
    fact: "O tinto emblemático do Château Mercian, feito com Merlot do planalto de Kikyogahara, em Shiojiri, Nagano. Mostrou ao mundo o potencial do Merlot japonês.",
    quiz: [
      { q: "A que grupo japonês de bebidas pertence o Château Mercian?", a: "Kirin", x: ["Suntory", "Asahi", "Sapporo"] },
    ],
  },
  sh2_suntory_tomi: {
    fact: "Corte bordalês de topo que a Suntory faz com as melhores uvas da vinícola Tomi no Oka, em Yamanashi.",
    quiz: [
      { q: "Que Grand Cru de Saint-Julien, em Bordeaux, a Suntory, produtora do Tomi, comprou em 1983?", a: "Château Lagrange", x: ["Château Talbot", "Château Beychevelle", "Château Gruaud Larose"] },
    ],
  },
  sh2_greatwall_cs: {
    fact: "Marca emblemática do vinho chinês, cujo nome (长城) significa Grande Muralha. Lançou seu primeiro vinho em Hebei no início dos anos 1980.",
    quiz: [
      { q: "Que estatal chinesa é dona dos vinhos Great Wall (长城)?", a: "COFCO", x: ["Changyu", "Cervejaria Tsingtao", "Kweichow Moutai"] },
    ],
  },
  sh2_gracevineyard_chairmans: {
    fact: "O tinto de topo da Grace Vineyard, vinícola familiar fundada em 1997 na província de Shanxi (山西) por um empresário de Hong Kong.",
    quiz: [
      { q: "O que significa 怡园 (Yiyuan), nome chinês da Grace Vineyard?", a: "Jardim da alegria", x: ["Colina dourada", "Rio azul", "Floresta do dragão"] },
    ],
  },
  sh2_helanqingxue_jiabeilan: {
    fact: "Corte bordalês de uma pequena vinícola no sopé das montanhas Helan, em Ningxia. É considerado o primeiro vinho a mostrar que a China pode chegar ao nível mundial.",
    quiz: [
      { q: "Que prêmio o Helan Qingxue Jia Bei Lan 2009 recebeu em 2011?", a: "Troféu Internacional do Decanter World Wine Awards", x: ["“Vinho do Ano” da Wine Spectator", "100 pontos de Robert Parker", "Grande prêmio da feira de vinhos de Bordeaux"] },
    ],
  },
  sh2_silverheights_summit: {
    fact: "O tinto de topo da Silver Heights, vinícola familiar no sopé das montanhas Helan, em Ningxia. A enóloga Gao Yuan (Emma Gao) a administra com a família.",
    quiz: [
      { q: "Onde a enóloga Emma Gao, da Silver Heights, estudou enologia?", a: "Em Bordeaux, na França", x: ["Em Davis, na Califórnia", "Em Adelaide, na Austrália", "Em Geisenheim, na Alemanha"] },
    ],
  },
  sh2_longdai: {
    fact: "Tinto de vinhedos plantados nas colinas de Penglai, na península de Shandong, pela família dona de uma grande casa de Bordeaux. A primeira safra foi a de 2017.",
    quiz: [
      { q: "Qual é o primeiro cru de Bordeaux da família que produz o Long Dai?", a: "Château Lafite Rothschild", x: ["Château Mouton Rothschild", "Château Margaux", "Château Latour"] },
    ],
  },
  sh2_sula_sb: {
    fact: "Sauvignon Blanc da vinícola indiana emblemática fundada em Nashik em 1999 por Rajeev Samant, formado em Stanford.",
    quiz: [
      { q: "De quem vem o nome “Sula”, da Sula Vineyards?", a: "De Sulabha, mãe do fundador", x: ["De uma deusa hindu", "De um rio que passa por Nashik", "Da filha do fundador"] },
    ],
  },
  sh2_grover_lareserve: {
    fact: "O corte tinto emblemático da Grover Vineyards, fundada em 1988 nas Nandi Hills, perto de Bangalore. É considerada pioneira do vinho indiano.",
    quiz: [
      { q: "Que famoso consultor enológico de Bordeaux assessorou a Grover Vineyards por muito tempo?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
};

export default T;
