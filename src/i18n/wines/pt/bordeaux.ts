import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  bx_rauzansegla: {
    fact: "Segundo cru de Margaux fundado em 1661. Em 1994 foi comprado pela família Wertheimer, dona da Chanel.",
    quiz: [
      { q: "Que empresa de moda comprou o Château Rauzan-Ségla em 1994?", a: "Chanel", x: ["Hermès", "Dior", "Gucci"] },
    ],
  },
  bx_rauzangassies: {
    fact: "Segundo cru de Margaux que surgiu da divisão da antiga propriedade Rauzan, separando-se do Rauzan-Ségla. A família Quié o administra junto com o Croizet-Bages, em Pauillac.",
    quiz: [
      { q: "Com que château de Margaux o Rauzan-Gassies formava originalmente uma só propriedade?", a: "Château Rauzan-Ségla", x: ["Château Brane-Cantenac", "Château Lascombes", "Château Durfort-Vivens"] },
      { q: "Que quinto cru de Pauillac a família Quié administra junto com o Château Rauzan-Gassies?", a: "Château Croizet-Bages", x: ["Château Lynch-Moussas", "Château Pédesclaux", "Château Batailley"] },
    ],
  },
  bx_leovillelascases: {
    fact: "Nasceu da divisão em três da propriedade Léoville, uma das maiores do Médoc. O portão de pedra com um leão no rótulo é a entrada do vinhedo “Grand Clos”.",
    quiz: [
      { q: "Que escultura fica sobre o portão de pedra no rótulo do Château Léoville Las Cases?", a: "Um leão", x: ["Uma águia", "Um cavalo", "Um sino"] },
      { q: "Que família comanda o Château Léoville Las Cases?", a: "Família Delon", x: ["Família Barton", "Família Cuvelier", "Família Borie"] },
    ],
  },
  bx_leovillepoyferre: {
    fact: "Um dos três châteaux nascidos da divisão da propriedade Léoville. Pertence à família Cuvelier desde 1920.",
    quiz: [
      { q: "Que família é dona do Château Léoville Poyferré desde 1920?", a: "Família Cuvelier", x: ["Família Delon", "Família Barton", "Família Las Cases"] },
    ],
  },
  bx_leovillebarton: {
    fact: "A família Barton, de origem irlandesa, comprou-o em 1826 e o mantém até hoje. Sem edifício próprio, é vinificado no vizinho Langoa Barton.",
    quiz: [
      { q: "Qual é a origem da família Barton, dona do Château Léoville Barton?", a: "Irlanda", x: ["Escócia", "Países Baixos", "Alemanha"] },
      { q: "Em que terceiro cru da mesma família o Château Léoville Barton é vinificado?", a: "Château Langoa Barton", x: ["Château Lagrange", "Château Talbot", "Château Saint-Pierre"] },
    ],
  },
  bx_durfortvivens: {
    fact: "Segundo cru de Margaux cujo nome vem da família medieval Durfort de Duras. Sob o comando de Gonzague Lurton, passou à agricultura biodinâmica.",
    quiz: [
      { q: "Qual é a posição do Château Durfort-Vivens na classificação do Médoc de 1855?", a: "Segundo cru", x: ["Terceiro cru", "Quarto cru", "Quinto cru"] },
    ],
  },
  bx_gruaudlarose: {
    fact: "Segundo cru de Saint-Julien cujo rótulo traz o lema “o vinho dos reis, o rei dos vinhos”. Pertence desde 1997 ao grupo bordalês Taillan.",
    quiz: [
      { q: "O que diz o lema escrito no rótulo do Château Gruaud Larose?", a: "O vinho dos reis, o rei dos vinhos", x: ["Gotas enviadas pelos deuses", "A rainha do Médoc", "Vinho feito de paciência"] },
    ],
  },
  bx_lascombes: {
    fact: "Segundo cru de Margaux que recuperou a fama depois de ser comprado, nos anos 1950, pelo escritor de vinhos americano de origem russa Alexis Lichine.",
    quiz: [
      { q: "Que escritor de vinhos comprou e revitalizou o Château Lascombes nos anos 1950?", a: "Alexis Lichine", x: ["Robert Parker", "Émile Peynaud", "Hugh Johnson"] },
    ],
  },
  bx_branecantenac: {
    fact: "Propriedade cultivada pelo barão de Brane, o “Napoleão das vinhas”, depois de vender o atual Mouton Rothschild. Hoje é comandada por Henri Lurton.",
    quiz: [
      { q: "Que propriedade de Pauillac o barão de Brane vendeu antes de se dedicar ao Brane-Cantenac?", a: "O atual Château Mouton Rothschild", x: ["O atual Château Lafite Rothschild", "O atual Château Latour", "O atual Château Pichon Baron"] },
      { q: "Qual era o apelido do barão de Brane, que deu nome ao Château Brane-Cantenac?", a: "Napoleão das vinhas", x: ["Marajá de Saint-Estèphe", "Papa do Médoc", "Rei do vinho"] },
    ],
  },
  bx_pichonbaron: {
    fact: "Segundo cru de Pauillac famoso pelo château de conto de fadas com torres pontiagudas. Pertence desde 1987 à AXA Millésimes, da seguradora AXA.",
    quiz: [
      { q: "Quem comprou o Château Pichon Baron em 1987?", a: "AXA Millésimes", x: ["LVMH", "Chanel", "Louis Roederer"] },
      { q: "Com que château o Pichon Baron formava uma só propriedade antes da divisão?", a: "Château Pichon Longueville Comtesse de Lalande", x: ["Château Latour", "Château Lynch-Bages", "Château Pontet-Canet"] },
    ],
  },
  bx_pichoncomtesse: {
    fact: "O nome vem de Virginie, a filha que herdou parte da propriedade Pichon e se casou com o conde de Lalande. Em 2007 foi comprado pela casa de Champagne Louis Roederer.",
    quiz: [
      { q: "Que casa de Champagne comprou o Château Pichon Longueville Comtesse de Lalande em 2007?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  bx_ducrubeaucaillou: {
    fact: "“Beaucaillou” significa “belos seixos”, em referência às colinas de cascalho à beira do Gironde. Pertence à família Borie desde 1941.",
    quiz: [
      { q: "O que significa “Beaucaillou” no nome do Château Ducru-Beaucaillou?", a: "Belos seixos", x: ["Bela colina", "Torre antiga", "Pequeno bosque"] },
      { q: "Que família é dona do Château Ducru-Beaucaillou desde 1941?", a: "Família Borie", x: ["Família Delon", "Família Barton", "Família Cuvelier"] },
    ],
  },
  bx_cosdestournel: {
    fact: "Louis-Gaspard d’Estournel, o “Marajá de Saint-Estèphe”, apaixonado pelo comércio com a Índia, coroou sua adega com torres de estilo oriental. Pertence a Michel Reybier desde 2000.",
    quiz: [
      { q: "O que caracteriza o edifício da adega do Château Cos d’Estournel?", a: "Torres em forma de pagode indiano", x: ["Torre de castelo medieval", "Colunas de templo grego", "Casa de tijolos em estilo Tudor"] },
      { q: "Qual era o apelido de Louis-Gaspard d’Estournel, fundador do Château Cos d’Estournel?", a: "Marajá de Saint-Estèphe", x: ["Napoleão das vinhas", "Papa do Médoc", "Rei do vinho"] },
    ],
  },
  bx_montrose: {
    fact: "O nome vem de uma colina coberta de urzes cor-de-rosa (“mont rose”). Em 2006 foi comprado pelos irmãos Bouygues, empresários franceses.",
    quiz: [
      { q: "De onde vem o nome Château Montrose?", a: "De uma colina coberta de urzes cor-de-rosa", x: ["De um roseiral", "De um monte de rochas vermelhas", "Do nome da filha do fundador"] },
      { q: "Quem comprou o Château Montrose em 2006?", a: "Os irmãos Bouygues", x: ["Os irmãos Wertheimer", "A família Delon", "A família Las Cases"] },
    ],
  },
  bx_kirwan: {
    fact: "Leva o nome do irlandês Mark Kirwan, que cuidou da propriedade no século XVIII. Pertence desde 1925 à família Schÿler, négociants de Bordeaux.",
    quiz: [
      { q: "Qual é a posição do Château Kirwan na classificação do Médoc de 1855?", a: "Terceiro cru", x: ["Segundo cru", "Quarto cru", "Quinto cru"] },
    ],
  },
  bx_dissan: {
    fact: "Castelo do século XVII cercado por um fosso. O rótulo traz um lema em latim que significa “para a mesa dos reis e o altar dos deuses”.",
    quiz: [
      { q: "O que significa o lema em latim do rótulo do Château d’Issan?", a: "Para a mesa dos reis e o altar dos deuses", x: ["Deus habita a vinha", "A paciência faz o vinho", "Somente o melhor"] },
    ],
  },
  bx_lagrange: {
    fact: "Terceiro cru de Saint-Julien comprado em 1983 pela japonesa Suntory, que renovou os vinhedos e a adega.",
    quiz: [
      { q: "Que empresa japonesa comprou o Château Lagrange em 1983?", a: "Suntory", x: ["Kirin", "Asahi", "Sapporo"] },
    ],
  },
  bx_langoabarton: {
    fact: "Château do século XVIII comprado por Hugh Barton em 1821. Em sua adega também se vinifica o Léoville Barton.",
    quiz: [
      { q: "Que segundo cru também é vinificado na adega do Château Langoa Barton?", a: "Château Léoville Barton", x: ["Château Léoville Poyferré", "Château Gruaud Larose", "Château Ducru-Beaucaillou"] },
    ],
  },
  bx_giscours: {
    fact: "Vasta propriedade que, somando bosques e pastagens, chega a centenas de hectares. Desde 1995 é administrada pela família do empresário holandês Eric Albada Jelgersma.",
    quiz: [
      { q: "Qual é a nacionalidade da família Albada Jelgersma, que administra o Château Giscours desde 1995?", a: "Holandesa", x: ["Belga", "Suíça", "Britânica"] },
      { q: "Que château de Margaux é administrado pela mesma família do Giscours?", a: "Château du Tertre", x: ["Château Dauzac", "Château Pouget", "Château Ferrière"] },
    ],
  },
  bx_malescot: {
    fact: "O nome une Simon Malescot, conselheiro jurídico do rei no século XVII, e o conde de Saint-Exupéry, dono no século XIX. A família Zuger o comanda desde 1955.",
    quiz: [
      { q: "Qual é a obra mais famosa do escritor da mesma família do conde de Saint-Exupéry, do Château Malescot St. Exupéry?", a: "O Pequeno Príncipe", x: ["O Estrangeiro", "Os Miseráveis", "Os Três Mosqueteiros"] },
    ],
  },
  bx_boydcantenac: {
    fact: "O nome vem de Jacques Boyd, dono destas terras no século XVIII. A família Guillemet o administra junto com o Château Pouget, quarto cru.",
    quiz: [
      { q: "Que quarto cru é administrado pela mesma família do Château Boyd-Cantenac?", a: "Château Pouget", x: ["Château Talbot", "Château Saint-Pierre", "Château Lafon-Rochet"] },
    ],
  },
  bx_cantenacbrown: {
    fact: "Château em estilo Tudor inglês construído pelo comerciante de vinhos de origem escocesa John Lewis Brown, uma arquitetura rara no Médoc.",
    quiz: [
      { q: "Qual é o estilo arquitetônico do Château Cantenac Brown?", a: "Tudor inglês", x: ["Neoclássico", "Pagode indiano", "Renascimento italiano"] },
    ],
  },
  bx_palmer: {
    fact: "Leva o nome do general britânico Charles Palmer, veterano das guerras napoleônicas, que o comprou em 1814. É terceiro cru, mas alcança preços acima dos segundos crus.",
    quiz: [
      { q: "Qual era a nacionalidade de Charles Palmer, que deu nome ao Château Palmer?", a: "Britânica", x: ["Irlandesa", "Holandesa", "Americana"] },
      { q: "Qual é a combinação de cores característica do rótulo do Château Palmer?", a: "Dourado sobre fundo preto", x: ["Vermelho sobre fundo branco", "Prateado sobre fundo azul", "Dourado sobre fundo verde"] },
    ],
  },
  bx_lalagune: {
    fact: "O primeiro Grand Cru Classé que se encontra ao subir de Bordeaux rumo ao Médoc. Desde 2000 pertence à família Frey, também dona da Paul Jaboulet Aîné, no Rhône.",
    quiz: [
      { q: "Que vinícola do Rhône é administrada pela família Frey, dona do Château La Lagune?", a: "Paul Jaboulet Aîné", x: ["Guigal", "Chapoutier", "Château de Beaucastel"] },
    ],
  },
  bx_desmirail: {
    fact: "Terceiro cru de Margaux administrado pela família Lurton, grande nome do vinho em Bordeaux. Chegou a ser apenas um nome depois que os vinhedos se dispersaram, mas renasceu.",
    quiz: [
      { q: "Qual é a posição do Château Desmirail na classificação do Médoc de 1855?", a: "Terceiro cru", x: ["Segundo cru", "Quarto cru", "Quinto cru"] },
    ],
  },
  bx_calonsegur: {
    fact: "O marquês de Ségur, dono de Lafite e Latour, teria dito “meu coração está em Calon”; daí o coração desenhado no rótulo.",
    quiz: [
      { q: "Que símbolo aparece no rótulo do Château Calon Ségur?", a: "Um coração", x: ["Um leão", "Um sino", "Uma coroa"] },
      { q: "Que primeiros crus também pertenciam ao marquês de Ségur da história do coração do Calon Ségur?", a: "Lafite e Latour", x: ["Margaux e Haut-Brion", "Mouton e Haut-Brion", "Margaux e Mouton"] },
    ],
  },
  bx_ferriere: {
    fact: "Terceiro cru de Margaux, um dos menores châteaux da classificação de 1855. Comandado por Claire Villars-Lurton, adota a agricultura biodinâmica.",
    quiz: [
      { q: "Qual é a posição do Château Ferrière na classificação do Médoc de 1855?", a: "Terceiro cru", x: ["Segundo cru", "Quarto cru", "Quinto cru"] },
    ],
  },
  bx_marquisdalesme: {
    fact: "O nome original era “Marquis d’Alesme Becker”. Depois de comprado pela família Perrodo em 2006, perdeu o “Becker” do nome e foi renovado.",
    quiz: [
      { q: "Qual era o antigo nome do Château Marquis d’Alesme?", a: "Marquis d’Alesme Becker", x: ["Marquis de Terme", "Malescot St. Exupéry", "Rauzan-Gassies"] },
    ],
  },
  bx_saintpierre: {
    fact: "Quarto cru comprado em 1982 por Henri Martin, ex-prefeito de Saint-Julien. É administrado pela mesma família do Château Gloria.",
    quiz: [
      { q: "Que vinho de Saint-Julien é feito pela mesma família do Château Saint-Pierre?", a: "Château Gloria", x: ["Château Talbot", "Château Beychevelle", "Château Lagrange"] },
    ],
  },
  bx_talbot: {
    fact: "Diz-se que o nome vem do general inglês John Talbot, morto na batalha de Castillon, no fim da Guerra dos Cem Anos. Seu branco, o “Caillou Blanc”, também é famoso.",
    quiz: [
      { q: "Em que guerra lutou o general inglês John Talbot, que teria dado nome ao Château Talbot?", a: "Guerra dos Cem Anos", x: ["Guerra dos Trinta Anos", "Guerra das Rosas", "Guerras Napoleônicas"] },
      { q: "Como se chama o vinho branco do Château Talbot?", a: "Caillou Blanc", x: ["Pavillon Blanc", "Aile d’Argent", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_branaireducru: {
    fact: "Quarto cru de Saint-Julien, de frente para o Château Beychevelle, do outro lado da estrada. É administrado pela família Maroteaux desde 1988.",
    quiz: [
      { q: "Qual é a posição do Château Branaire-Ducru na classificação do Médoc de 1855?", a: "Quarto cru", x: ["Segundo cru", "Terceiro cru", "Quinto cru"] },
    ],
  },
  bx_duhartmilon: {
    fact: "Quarto cru de Pauillac vizinho do Lafite Rothschild, comprado e revitalizado em 1962 pela família Rothschild do Lafite.",
    quiz: [
      { q: "Quem comprou o Château Duhart-Milon em 1962?", a: "Os Rothschild do Lafite", x: ["Os Rothschild do Mouton", "AXA Millésimes", "Família Las Cases"] },
    ],
  },
  bx_pouget: {
    fact: "Pequeno quarto cru de Margaux, administrado pela família Guillemet junto com o terceiro cru Boyd-Cantenac.",
    quiz: [
      { q: "Que terceiro cru é administrado pela mesma família do Château Pouget?", a: "Château Boyd-Cantenac", x: ["Château Cantenac Brown", "Château Kirwan", "Château d’Issan"] },
    ],
  },
  bx_latourcarnet: {
    fact: "Castelo medieval que conserva o fosso e uma antiga torre de vigia. Em 2000 foi comprado pelo empresário do vinho Bernard Magrez.",
    quiz: [
      { q: "Quem é dono tanto do Château La Tour Carnet quanto do Château Pape Clément?", a: "Bernard Magrez", x: ["Michel Rolland", "Jean-Luc Thunevin", "Gérard Perse"] },
    ],
  },
  bx_lafonrochet: {
    fact: "Quarto cru de Saint-Estèphe comprado e revitalizado pela família Tesseron em 1960. Chama a atenção com o edifício e o rótulo pintados de amarelo vivo.",
    quiz: [
      { q: "Que cor marca o edifício e o rótulo do Château Lafon-Rochet?", a: "Amarelo", x: ["Azul", "Rosa", "Verde"] },
    ],
  },
  bx_beychevelle: {
    fact: "O nome vem dos barcos que, ao passar pelo rio, baixavam as velas (“baisse voile”) em homenagem ao almirante duque de Épernon. O rótulo também traz um barco.",
    quiz: [
      { q: "Que gesto deu origem ao nome do Château Beychevelle?", a: "Baixar as velas", x: ["Levantar âncora", "Tocar o sino", "Agitar a bandeira"] },
      { q: "O que aparece no rótulo do Château Beychevelle?", a: "Um barco", x: ["Um leão", "Um coração", "Um sino"] },
    ],
  },
  bx_prieurelichine: {
    fact: "Château erguido onde havia um antigo priorado beneditino. Em 1951 Alexis Lichine o comprou e lhe deu seu nome.",
    quiz: [
      { q: "O que significa “Prieuré” no nome do Château Prieuré-Lichine?", a: "Priorado (mosteiro)", x: ["Fortaleza", "Moinho", "Mercado"] },
      { q: "Quem deu seu nome ao Château Prieuré-Lichine?", a: "Alexis Lichine", x: ["Robert Mondavi", "Émile Peynaud", "Hugh Barton"] },
    ],
  },
  bx_marquisdeterme: {
    fact: "Quarto cru de Margaux que herdou o nome do marquês de Terme, seu dono no século XVIII. Pertence à família Sénéclauze desde 1935.",
    quiz: [
      { q: "Qual é a posição do Château Marquis de Terme na classificação do Médoc de 1855?", a: "Quarto cru", x: ["Segundo cru", "Terceiro cru", "Quinto cru"] },
    ],
  },
  bx_pontetcanet: {
    fact: "Quinto cru de Pauillac que adotou cedo a biodinâmica e lavra os vinhedos com arados puxados por cavalos. Pertence à família Tesseron desde 1975.",
    quiz: [
      { q: "O que o Château Pontet-Canet usa no lugar do trator para lavrar os vinhedos?", a: "Cavalos", x: ["Bois", "Burros", "Robôs"] },
      { q: "Que família é dona do Château Pontet-Canet desde 1975?", a: "Família Tesseron", x: ["Família Las Cases", "Família Borie", "Família Delon"] },
    ],
  },
  bx_batailley: {
    fact: "Diz-se que o nome vem de uma batalha travada ali na Guerra dos Cem Anos. Separou-se do Haut-Batailley em 1942 e é administrado pela família Castéja.",
    quiz: [
      { q: "Que quinto cru vizinho surgiu da divisão do Château Batailley?", a: "Château Haut-Batailley", x: ["Château Grand-Puy-Lacoste", "Château Lynch-Moussas", "Château d’Armailhac"] },
    ],
  },
  bx_hautbatailley: {
    fact: "Quinto cru de Pauillac separado da propriedade Batailley em 1942. Em 2017 foi comprado pela família Cazes, dona do Lynch-Bages.",
    quiz: [
      { q: "Que família comprou o Château Haut-Batailley em 2017?", a: "Família Cazes", x: ["Família Tesseron", "Família Castéja", "Família Delon"] },
    ],
  },
  bx_grandpuylacoste: {
    fact: "“Puy” significa colina: o château fica numa colina de cascalho no interior de Pauillac. É administrado pela família Borie desde 1978.",
    quiz: [
      { q: "O que significa “Puy” no nome do Château Grand-Puy-Lacoste?", a: "Colina", x: ["Poço", "Floresta", "Rio"] },
    ],
  },
  bx_grandpuyducasse: {
    fact: "Quinto cru com vinhedos espalhados por toda Pauillac e o edifício do château à beira do rio, na cidade de Pauillac.",
    quiz: [
      { q: "Qual é a posição do Château Grand-Puy Ducasse na classificação do Médoc de 1855?", a: "Quinto cru", x: ["Segundo cru", "Terceiro cru", "Quarto cru"] },
    ],
  },
  bx_lynchbages: {
    fact: "O nome vem da família Lynch, de origem irlandesa, que foi sua dona. Comandado pela família Cazes desde 1939, ganhou o apelido de “Latour dos pobres”.",
    quiz: [
      { q: "Qual é o apelido do Château Lynch-Bages?", a: "Latour dos pobres", x: ["Versalhes do Médoc", "Marajá de Saint-Estèphe", "Joia de Pomerol"] },
      { q: "Que família comanda o Château Lynch-Bages desde 1939?", a: "Família Cazes", x: ["Família Lynch", "Família Borie", "Família Tesseron"] },
    ],
  },
  bx_lynchmoussas: {
    fact: "Como o Lynch-Bages, pertenceu à família Lynch, de origem irlandesa. Hoje é administrado pela família Castéja, a mesma do Château Batailley.",
    quiz: [
      { q: "Que quinto cru a família Castéja administra junto com o Château Lynch-Moussas?", a: "Château Batailley", x: ["Château Haut-Batailley", "Château Clerc Milon", "Château Pédesclaux"] },
    ],
  },
  bx_dauzac: {
    fact: "Quinto cru de Margaux famoso por ter sido o lugar onde se testou pela primeira vez, no fim do século XIX, a “calda bordalesa” (sulfato de cobre com cal), que protege as videiras contra fungos.",
    quiz: [
      { q: "Que tratamento de vinhedo teria sido testado pela primeira vez no Château Dauzac?", a: "Calda bordalesa", x: ["Calda sulfocálcica", "DDT", "Permanganato de potássio"] },
    ],
  },
  bx_darmailhac: {
    fact: "Comprado em 1933 pelo barão Philippe de Rothschild. Depois de mudar de nome algumas vezes, como “Mouton Baron Philippe”, recuperou em 1989 o nome original d’Armailhac.",
    quiz: [
      { q: "Que nome o Château d’Armailhac usou durante um tempo?", a: "Château Mouton Baron Philippe", x: ["Château Mouton Cadet", "Château Petit Mouton", "Château Clerc Mouton"] },
    ],
  },
  bx_dutertre: {
    fact: "Fica sobre uma colina (“tertre”) na vila de Arsac, a oeste da denominação Margaux. É administrado pela família Albada Jelgersma, a mesma do Giscours.",
    quiz: [
      { q: "Que terceiro cru de Margaux é administrado pela mesma família do Château du Tertre?", a: "Château Giscours", x: ["Château Kirwan", "Château d’Issan", "Château Palmer"] },
    ],
  },
  bx_hautbagesliberal: {
    fact: "Herdou o nome da família Libéral, sua dona no século XVIII. Claire Villars-Lurton o comanda junto com o terceiro cru Ferrière e adota a biodinâmica.",
    quiz: [
      { q: "Que terceiro cru de Margaux é comandado pela mesma pessoa do Château Haut-Bages Libéral?", a: "Château Ferrière", x: ["Château Desmirail", "Château Kirwan", "Château d’Issan"] },
    ],
  },
  bx_pedesclaux: {
    fact: "Fundado em 1810 pelo corretor de vinhos bordalês Pierre-Urbain Pédesclaux. Em 2009 Jacky Lorenzetti o comprou e o renovou com um edifício moderno envolto em vidro.",
    quiz: [
      { q: "Que empresário comprou e renovou o Château Pédesclaux em 2009?", a: "Jacky Lorenzetti", x: ["Bernard Magrez", "Michel Reybier", "François Pinault"] },
    ],
  },
  bx_belgrave: {
    fact: "Quinto cru da vila de Saint-Laurent, no Haut-Médoc, administrado pela négociant bordalesa Dourthe.",
    quiz: [
      { q: "Qual é a posição do Château Belgrave na classificação do Médoc de 1855?", a: "Quinto cru", x: ["Segundo cru", "Terceiro cru", "Quarto cru"] },
    ],
  },
  bx_camensac: {
    fact: "Quinto cru da vila de Saint-Laurent, no Haut-Médoc. Com os vizinhos Belgrave e La Tour Carnet, é um dos três châteaux classificados de Saint-Laurent.",
    quiz: [
      { q: "Que quarto cru fica na mesma vila de Saint-Laurent que o Château Camensac?", a: "Château La Tour Carnet", x: ["Château Talbot", "Château Saint-Pierre", "Château Pouget"] },
    ],
  },
  bx_coslabory: {
    fact: "Pequeno quinto cru colado ao Cos d’Estournel, em Saint-Estèphe, administrado pela família Audoy.",
    quiz: [
      { q: "Com que segundo cru de Saint-Estèphe o Château Cos Labory faz divisa?", a: "Château Cos d’Estournel", x: ["Château Montrose", "Château Calon Ségur", "Château Lafon-Rochet"] },
    ],
  },
  bx_clercmilon: {
    fact: "Quinto cru de Pauillac vizinho do Mouton Rothschild e do Lafite Rothschild. Foi comprado em 1970 pelo barão Philippe de Rothschild.",
    quiz: [
      { q: "Quem comprou o Château Clerc Milon em 1970?", a: "Barão Philippe de Rothschild", x: ["Éric de Rothschild", "Jean-Michel Cazes", "Henri Martin"] },
    ],
  },
  bx_croizetbages: {
    fact: "O nome une os irmãos Croizet, donos destas terras no século XVIII, e a vila de Bages. É administrado pela família Quié, a mesma do Rauzan-Gassies.",
    quiz: [
      { q: "Que segundo cru de Margaux é administrado pela mesma família do Château Croizet-Bages?", a: "Château Rauzan-Gassies", x: ["Château Rauzan-Ségla", "Château Brane-Cantenac", "Château Lascombes"] },
    ],
  },
  bx_cantemerle: {
    fact: "O nome costuma ser interpretado como “o melro canta”. Foi acrescentado tardiamente à classificação de 1855, entrando no fim da lista dos quintos crus.",
    quiz: [
      { q: "Como o Château Cantemerle entrou na classificação de 1855?", a: "Foi acrescentado depois de a lista sair", x: ["Foi rebaixado de primeiro cru", "Foi escolhido por sorteio", "Subiu na revisão de 1973"] },
    ],
  },
  bx_lepin: {
    fact: "Vinhedo minúsculo cuja primeira safra foi lançada em 1979 pela família belga Thienpont. O nome vem de um pinheiro solitário que havia ao lado.",
    quiz: [
      { q: "De onde vem o nome Le Pin?", a: "De um pinheiro ao lado do vinhedo", x: ["Do nome do fundador", "De um antigo mosteiro", "De uma pequena ponte de pedra"] },
      { q: "Qual é a nacionalidade da família Thienpont, dona do Le Pin?", a: "Belga", x: ["Holandesa", "Suíça", "Luxemburguesa"] },
    ],
  },
  bx_lafleur: {
    fact: "Pequeno vinhedo colado ao Pétrus, cuidado pela família Guinaudeau como uma propriedade familiar. Para Pomerol, tem alta proporção de Cabernet Franc.",
    quiz: [
      { q: "Que família cuida do Château Lafleur?", a: "Família Guinaudeau", x: ["Família Moueix", "Família Thienpont", "Família Durantou"] },
    ],
  },
  bx_vcc: {
    fact: "Grande nome de Pomerol comprado em 1924 pela família belga Thienpont. Algo raro em Pomerol, tem alta proporção de Cabernet Franc e Cabernet Sauvignon.",
    quiz: [
      { q: "Que família comprou o Vieux Château Certan em 1924?", a: "Família Thienpont", x: ["Família Moueix", "Família Guinaudeau", "Família Nicolas"] },
    ],
  },
  bx_levangile: {
    fact: "Château de Pomerol situado entre o Pétrus e o Cheval Blanc. Desde 1990 os Rothschild do Lafite têm participação nele e o administram.",
    quiz: [
      { q: "O que significa “Évangile” no nome do Château L’Évangile?", a: "Evangelho", x: ["Anjo", "Catedral", "Peregrino"] },
    ],
  },
  bx_laconseillante: {
    fact: "O nome vem de Catherine Conseillan, sua dona no século XVIII. Pertence à família Nicolas desde 1871; a cápsula e as letras violeta do rótulo são sua marca registrada.",
    quiz: [
      { q: "Qual é a cor característica da cápsula do Château La Conseillante?", a: "Violeta", x: ["Dourado", "Preto", "Branco"] },
    ],
  },
  bx_trotanoy: {
    fact: "Diz-se que o nome vem de “trop ennuie” (“cansativo demais”), de tão árduo que era lavrar o solo compacto. Jean-Pierre Moueix o comprou em 1953.",
    quiz: [
      { q: "Que négociant comprou o Château Trotanoy em 1953?", a: "Jean-Pierre Moueix", x: ["Dourthe", "Cordier", "Barão Philippe de Rothschild"] },
    ],
  },
  bx_egliseclinet: {
    fact: "O nome vem do vinhedo ao lado da igreja de Pomerol. Sob o comando de Denis Durantou, a partir de 1983, chegou ao topo de Pomerol.",
    quiz: [
      { q: "O que significa “Église” no nome do Château L’Église-Clinet?", a: "Igreja", x: ["Fortaleza", "Poço", "Praça"] },
    ],
  },
  bx_clinet: {
    fact: "Château de Pomerol comprado em 1998 pela família Laborde e comandado pelo filho, Ronan Laborde. Combina Merlot com Cabernet Sauvignon.",
    quiz: [
      { q: "Que família comanda o Château Clinet?", a: "Família Laborde", x: ["Família Durantou", "Família Nicolas", "Família Thienpont"] },
    ],
  },
  bx_gazin: {
    fact: "Na Idade Média pertenceu aos Cavaleiros Hospitalários de São João de Jerusalém, cuja cruz permanece no rótulo. É da família Bailliencourt há gerações.",
    quiz: [
      { q: "A que antigo dono se refere a cruz do rótulo do Château Gazin?", a: "Os Cavaleiros Hospitalários (Ordem de São João)", x: ["A Santa Sé", "O arcebispo de Bordeaux", "A coroa inglesa"] },
    ],
  },
  bx_nenin: {
    fact: "Château de Pomerol comprado e renovado em 1997 pela família Delon, do Léoville Las Cases.",
    quiz: [
      { q: "Que família comprou o Château Nénin em 1997?", a: "Família Delon", x: ["Família Thienpont", "Família Moueix", "Família Laborde"] },
    ],
  },
  bx_bonpasteur: {
    fact: "Château de Pomerol cultivado por gerações pela família do consultor enológico de fama mundial Michel Rolland. O nome significa “o bom pastor”.",
    quiz: [
      { q: "Que consultor enológico tem forte ligação com o Château Le Bon Pasteur?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  bx_lafleurpetrus: {
    fact: "Fica entre os vizinhos Lafleur e Pétrus, e por isso junta os dois nomes. Pertence à família de Jean-Pierre Moueix.",
    quiz: [
      { q: "Que négociant é dono do Château La Fleur-Pétrus?", a: "Jean-Pierre Moueix", x: ["Família Thienpont", "Família Guinaudeau", "Domaine Clarence Dillon"] },
    ],
  },
  bx_ausone: {
    fact: "Grande nome de Saint-Émilion batizado em homenagem ao poeta romano Ausônio, do século IV. Antes da revisão da classificação de 2022, retirou-se por conta própria da avaliação, junto com o Cheval Blanc.",
    quiz: [
      { q: "De quem vem o nome do Château Ausone?", a: "Do poeta romano Ausônio", x: ["Do imperador romano Adriano", "Do monge Saint Émilion", "De Carlos Magno"] },
      { q: "Que família comanda o Château Ausone?", a: "Família Vauthier", x: ["Família Moueix", "Família de Boüard", "Família Manoncourt"] },
    ],
  },
  bx_angelus: {
    fact: "O nome vem dos sinos do Angelus de três igrejas, ouvidos do vinhedo, e o rótulo traz um sino dourado. Em 2012 chegou à categoria máxima “A”.",
    quiz: [
      { q: "Qual é o símbolo do rótulo do Château Angélus?", a: "Um sino", x: ["Um anjo", "Uma chave", "Uma flor-de-lis"] },
      { q: "Que château chegou junto com o Angélus, em 2012, à categoria máxima “A” de Saint-Émilion?", a: "Château Pavie", x: ["Château Figeac", "Château Canon", "Château Troplong Mondot"] },
    ],
  },
  bx_pavie: {
    fact: "Comprado em 1998 por Gérard Perse, que investiu pesado; em 2012 chegou, com o Angélus, à categoria máxima “A” de Saint-Émilion.",
    quiz: [
      { q: "Quem comprou o Château Pavie em 1998?", a: "Gérard Perse", x: ["Hubert de Boüard", "Alain Vauthier", "Bernard Magrez"] },
    ],
  },
  bx_figeac: {
    fact: "Algo raro em Saint-Émilion, as duas Cabernets somam mais da metade do vinhedo. O vizinho Cheval Blanc nasceu de terras separadas da propriedade Figeac no século XIX.",
    quiz: [
      { q: "Que famoso château surgiu de uma parte da propriedade Figeac separada no século XIX?", a: "Château Cheval Blanc", x: ["Château Ausone", "Château Angélus", "Château Pavie"] },
      { q: "Em que ano o Château Figeac chegou à categoria máxima “A” de Saint-Émilion?", a: "2022", x: ["2012", "1996", "2006"] },
    ],
  },
  bx_canon: {
    fact: "Premier Grand Cru Classé de Saint-Émilion que leva o nome de Jacques Kanon, dono no século XVIII. Em 1996 foi comprado pela família Wertheimer, dona da Chanel.",
    quiz: [
      { q: "Quem é dono tanto do Château Canon quanto do Rauzan-Ségla, em Margaux?", a: "Chanel (família Wertheimer)", x: ["LVMH", "AXA Millésimes", "Louis Roederer"] },
    ],
  },
  bx_belairmonange: {
    fact: "Em 2008 a família Moueix comprou o antigo Château Bélair e o rebatizou em homenagem a Anne-Adèle Monange, da família. Em 2012 incorporou o vizinho Château Magdelaine.",
    quiz: [
      { q: "Que château da família Moueix foi incorporado ao Château Bélair-Monange em 2012?", a: "Château Magdelaine", x: ["Château Canon", "Château Troplong Mondot", "Clos Fourtet"] },
    ],
  },
  bx_troplongmondot: {
    fact: "Fica numa das colinas calcárias mais altas de Saint-Émilion. Tornou-se Premier Grand Cru Classé em 2006 e foi comprado em 2017 pela resseguradora SCOR.",
    quiz: [
      { q: "Quem comprou o Château Troplong Mondot em 2017?", a: "A resseguradora SCOR", x: ["AXA Millésimes", "Chanel", "Suntory"] },
    ],
  },
  bx_valandraud: {
    fact: "Pioneiro dos “vinhos de garagem”, começou a ser feito numa pequena garagem pelo casal Jean-Luc Thunevin e Murielle Andraud. A primeira safra saiu em 1991, e em 2012 chegou a Premier Grand Cru Classé.",
    quiz: [
      { q: "Como são chamados os vinhos que, como o Château Valandraud, eram feitos em pequena quantidade em garagens e causaram furor nos anos 1990?", a: "Vinhos de garagem", x: ["Vinhos naturais", "Supertoscanos", "Vinhos laranja"] },
      { q: "Quem criou o Château Valandraud?", a: "Jean-Luc Thunevin", x: ["Gérard Perse", "Michel Rolland", "Hubert de Boüard"] },
    ],
  },
  bx_lamondotte: {
    fact: "A primeira safra saiu em 1996, de um pequeno vinhedo da família dos condes von Neipperg. Na revisão de 2012, foi direto para Premier Grand Cru Classé.",
    quiz: [
      { q: "Que família é dona do La Mondotte?", a: "Família von Neipperg", x: ["Família Vauthier", "Família Moueix", "Família Bécot"] },
    ],
  },
  bx_tertreroteboeuf: {
    fact: "Significa “colina onde o boi arrota”: a encosta era tão íngreme que os bois ofegavam ao lavrar. Mesmo sem classificação, alcança preços de primeira linha.",
    quiz: [
      { q: "O que significa o nome Tertre Rôteboeuf?", a: "Colina onde o boi arrota", x: ["Colina do boi assado", "Campo do touro vermelho", "Encosta onde o lavrador descansa"] },
    ],
  },
  bx_beausejourbecot: {
    fact: "Foi rebaixado na revisão dos anos 1980 por ter incorporado parcelas sem classificação, mas recuperou o Premier Grand Cru Classé em 1996. É administrado pela família Bécot.",
    quiz: [
      { q: "Que categoria o Château Beau-Séjour Bécot perdeu nos anos 1980 e recuperou em 1996?", a: "Premier Grand Cru Classé", x: ["Cru Bourgeois", "Grand Cru Classé de Graves", "Segundo cru de 1855"] },
    ],
  },
  bx_closfourtet: {
    fact: "Fica bem em frente às muralhas da vila de Saint-Émilion, com caves escavadas em antigas pedreiras de calcário no subsolo. A família Cuvelier o comprou em 2001.",
    quiz: [
      { q: "Que família comprou o Clos Fourtet em 2001?", a: "Família Cuvelier", x: ["Família Lurton", "Família Bécot", "Família Perse"] },
    ],
  },
  bx_larcisducasse: {
    fact: "Vem de um vinhedo em terraços numa encosta voltada para o sul, vizinho do Pavie. Tornou-se Premier Grand Cru Classé na revisão de 2012.",
    quiz: [
      { q: "Em que ano o Château Larcis Ducasse se tornou Premier Grand Cru Classé?", a: "2012", x: ["1996", "2006", "1955"] },
    ],
  },
  bx_paviemacquin: {
    fact: "Leva o nome de Albert Macquin, que difundiu em Saint-Émilion a enxertia em porta-enxertos americanos depois da filoxera. Tornou-se Premier Grand Cru Classé em 2006.",
    quiz: [
      { q: "Por que Albert Macquin, que deu nome ao Château Pavie Macquin, é lembrado?", a: "Difundiu a enxertia em porta-enxertos americanos após a filoxera", x: ["Inventou a calda bordalesa", "Criou a classificação de 1855", "Foi o primeiro a engarrafar no château"] },
    ],
  },
  bx_canonlagaffeliere: {
    fact: "Château de Saint-Émilion que pertence à família dos condes von Neipperg desde 1971. Tornou-se Premier Grand Cru Classé em 2012.",
    quiz: [
      { q: "Que família é dona tanto do Château Canon-la-Gaffelière quanto do La Mondotte?", a: "Família von Neipperg", x: ["Família Wertheimer", "Família Moueix", "Família Vauthier"] },
    ],
  },
  bx_missionhautbrion: {
    fact: "O nome vem dos padres missionários (lazaristas) que cultivaram estas terras no século XVII. Em 1983 foi comprado pela família Dillon, dona do Haut-Brion, do outro lado da estrada.",
    quiz: [
      { q: "Quem comprou o Château La Mission Haut-Brion em 1983?", a: "Domaine Clarence Dillon", x: ["Bernard Magrez", "Família Cathiard", "Louis Roederer"] },
      { q: "A que se refere “Mission” no nome do Château La Mission Haut-Brion?", a: "Aos antigos padres missionários", x: ["A uma expedição militar", "A uma missão diplomática", "A uma expedição de exploradores"] },
    ],
  },
  bx_papeclement: {
    fact: "Vinhedo que pertenceu a Bertrand de Got, arcebispo de Bordeaux que em 1305 se tornou o papa Clemente V. Hoje é administrado por Bernard Magrez.",
    quiz: [
      { q: "Para onde o papa Clemente V, que deu nome ao Château Pape Clément, transferiu a sede papal?", a: "Avignon", x: ["Bordeaux", "Lyon", "Reims"] },
    ],
  },
  bx_smithhautlafitte: {
    fact: "Guarda o nome do comerciante escocês George Smith, do século XVIII. Em 1990 foi comprado pelo casal Cathiard, ex-esquiadores, e a filha deles criou a marca de cosméticos à base de uva Caudalie.",
    quiz: [
      { q: "Que marca de cosméticos foi criada pela filha da família Cathiard, do Château Smith Haut Lafitte?", a: "Caudalie", x: ["L’Occitane", "Nuxe", "Biotherm"] },
      { q: "Qual era a profissão anterior do casal Cathiard, que comprou o Château Smith Haut Lafitte em 1990?", a: "Esquiadores", x: ["Velejadores", "Ciclistas", "Tenistas"] },
    ],
  },
  bx_chevalier: {
    fact: "Grande nome de Pessac-Léognan, numa clareira em meio a um pinheiral, com o tinto e o branco classificados em Graves. É administrado pela família Bernard desde 1983.",
    quiz: [
      { q: "Que vinhos do Domaine de Chevalier foram classificados em Graves?", a: "O tinto e o branco", x: ["Só o tinto", "Só o branco", "Só o vinho doce"] },
    ],
  },
  bx_hautbailly: {
    fact: "Comprado em 1998 pelo banqueiro americano Robert Wilmers. Preserva um vinhedo antigo com videiras de mais de 100 anos, de várias castas plantadas misturadas.",
    quiz: [
      { q: "Qual era a nacionalidade de Robert Wilmers, que comprou o Château Haut-Bailly em 1998?", a: "Americana", x: ["Britânica", "Belga", "Honconguesa"] },
    ],
  },
  bx_malartic: {
    fact: "Leva o nome da família do conde de Malartic, almirante do século XVIII, e o rótulo traz um veleiro. Em 1997 foi comprado pela família belga Bonnie.",
    quiz: [
      { q: "Qual é a nacionalidade da família Bonnie, que comprou o Château Malartic-Lagravière em 1997?", a: "Belga", x: ["Holandesa", "Suíça", "Americana"] },
    ],
  },
  bx_carbonnieux: {
    fact: "Conta-se que os antigos monges beneditinos vendiam seu vinho branco ao sultão otomano, que proibia o álcool, como “água mineral de Carbonnieux”.",
    quiz: [
      { q: "Com que nome os monges do Château Carbonnieux teriam vendido o vinho ao sultão otomano?", a: "Água mineral de Carbonnieux", x: ["Água benta de Carbonnieux", "Chá de ervas de Carbonnieux", "Suco de uva de Carbonnieux"] },
    ],
  },
  bx_lescarmes: {
    fact: "O nome guarda a memória do vinhedo dos antigos frades carmelitas. Em 2010 Patrice Pichet o comprou e construiu uma adega em forma de navio projetada por Philippe Starck.",
    quiz: [
      { q: "Que designer projetou a nova adega do Château Les Carmes Haut-Brion?", a: "Philippe Starck", x: ["Jean Nouvel", "Frank Gehry", "Tadao Ando"] },
    ],
  },
  bx_suduiraut: {
    fact: "Premier cru de Sauternes vizinho do Yquem. Diz-se que os jardins foram desenhados por Le Nôtre, autor dos jardins de Versalhes; pertence à AXA Millésimes desde 1992.",
    quiz: [
      { q: "Quem é dono do Château Suduiraut desde 1992?", a: "AXA Millésimes", x: ["LVMH", "Domaines Barons de Rothschild", "Domaine Clarence Dillon"] },
    ],
  },
  bx_rieussec: {
    fact: "Premier cru de Sauternes comprado em 1984 pelos Rothschild do Lafite, na vila de Fargues, vizinha do Yquem.",
    quiz: [
      { q: "Quem comprou o Château Rieussec em 1984?", a: "Os Rothschild do Lafite", x: ["AXA Millésimes", "Os Rothschild do Mouton", "LVMH"] },
    ],
  },
  bx_climens: {
    fact: "Premier cru apelidado de “Senhor de Barsac”. É feito com 100% Sémillon e cultivado em biodinâmica.",
    quiz: [
      { q: "Qual é o apelido do Château Climens?", a: "Senhor de Barsac", x: ["Rainha de Sauternes", "Versalhes do Médoc", "Yquem dos pobres"] },
    ],
  },
  bx_coutet: {
    fact: "Premier cru de Barsac que conserva um edifício de fortaleza medieval. É famoso pela “Cuvée Madame”, feita em pequena quantidade só em anos excepcionais.",
    quiz: [
      { q: "Que cuvée especial o Château Coutet faz em pequena quantidade só em anos excepcionais?", a: "Cuvée Madame", x: ["Cuvée Louise", "Réserve du Général", "Cuvée Prestige"] },
    ],
  },
  bx_guiraud: {
    fact: "Premier cru de Sauternes com certificação orgânica. Em 2006 foi comprado por um grupo que incluía Robert Peugeot, da família Peugeot, e Olivier Bernard, do Domaine de Chevalier.",
    quiz: [
      { q: "Que família do setor automobilístico participou da compra do Château Guiraud em 2006?", a: "Família Peugeot", x: ["Família Renault", "Família Citroën", "Família Michelin"] },
    ],
  },
  bx_latourblanche: {
    fact: "Em 1907 o dono, Daniel Iffla Osiris, doou-o ao Estado com a condição de que ali se criasse uma escola de viticultura e enologia. Até hoje é administrado por uma escola ligada ao Ministério da Agricultura.",
    quiz: [
      { q: "Quem é o dono do Château La Tour Blanche?", a: "O Estado francês (Ministério da Agricultura)", x: ["A Universidade de Bordeaux", "A cidade de Bordeaux", "A cooperativa de produtores de Sauternes"] },
    ],
  },
  bx_lafauriepeyraguey: {
    fact: "Em 2014 Silvio Denz, presidente da marca de cristais Lalique, comprou-o e abriu no château o hotel e restaurante Lalique.",
    quiz: [
      { q: "A que marca de cristais o Château Lafaurie-Peyraguey está ligado?", a: "Lalique", x: ["Baccarat", "Swarovski", "Riedel"] },
    ],
  },
  bx_fargues: {
    fact: "Propriedade mantida desde o século XV pela família Lur Saluces, que foi dona do Yquem por muito tempo. Não é classificado, mas é considerado um Sauternes à altura do Yquem.",
    quiz: [
      { q: "Que Sauternes de categoria superior pertenceu por muito tempo à família Lur Saluces, dona do Château de Fargues?", a: "Château d’Yquem", x: ["Château Suduiraut", "Château Climens", "Château Rieussec"] },
    ],
  },
  bx_sociandomallet: {
    fact: "Comprado em 1969 pelo négociant Jean Gautreau, que o transformou num vinho à altura dos classificados. Não participa da seleção dos Crus Bourgeois e vende apenas pelo próprio nome.",
    quiz: [
      { q: "Quem comprou e desenvolveu o Château Sociando-Mallet a partir de 1969?", a: "Jean Gautreau", x: ["Henri Martin", "Jean-Michel Cazes", "Alexis Lichine"] },
    ],
  },
  bx_chassespleen: {
    fact: "Significa “afasta a melancolia (spleen)”; conta-se que o nome foi dado por Byron ou por Baudelaire. É considerado um dos grandes representantes dos Crus Bourgeois.",
    quiz: [
      { q: "O que significa o nome Chasse-Spleen?", a: "Afasta a melancolia", x: ["Descanso do caçador", "Colina brilhante", "Bosque que barra o vento"] },
    ],
  },
  bx_gloria: {
    fact: "Henri Martin, prefeito de Saint-Julien, criou-o a partir dos anos 1940 comprando, parcela por parcela, terrenos dos châteaux classificados vizinhos. Não é classificado, mas é tratado como se fosse.",
    quiz: [
      { q: "Quem criou o Château Gloria?", a: "Henri Martin", x: ["Jean Gautreau", "Alexis Lichine", "Philippe de Rothschild"] },
    ],
  },
  bx_phelansegur: {
    fact: "Propriedade de Saint-Estèphe construída no século XIX pelo irlandês Bernard Phelan. Fora da classificação, é avaliado no nível de um Grand Cru Classé.",
    quiz: [
      { q: "De onde era Bernard Phelan, que deu nome ao Château Phélan Ségur?", a: "Irlanda", x: ["Escócia", "Inglaterra", "Países Baixos"] },
    ],
  },
  bx_potensac: {
    fact: "Château do norte do Médoc administrado pela família Delon, do Léoville Las Cases, famoso pela ótima relação entre qualidade e preço.",
    quiz: [
      { q: "Que família administra o Château Potensac?", a: "Família Delon", x: ["Família Cazes", "Família Borie", "Família Cuvelier"] },
    ],
  },
  bx_poujeaux: {
    fact: "O château mais representativo de Moulis, comprado em 2008 pela família Cuvelier, dona do Clos Fourtet, em Saint-Émilion.",
    quiz: [
      { q: "Que família é dona tanto do Château Poujeaux quanto do Clos Fourtet, em Saint-Émilion?", a: "Família Cuvelier", x: ["Família Lurton", "Família Delon", "Família Moueix"] },
    ],
  },
  bx_clarke: {
    fact: "Château de Listrac comprado em 1973 pelo barão Edmond de Rothschild, que replantou os vinhedos.",
    quiz: [
      { q: "Quem comprou o Château Clarke em 1973?", a: "Edmond de Rothschild", x: ["Philippe de Rothschild", "Éric de Rothschild", "Clarence Dillon"] },
    ],
  },
  bx_depez: {
    fact: "Château de Saint-Estèphe comprado em 1995 pela casa de Champagne Louis Roederer, que mais tarde comprou também o Pichon Comtesse.",
    quiz: [
      { q: "Que casa de Champagne comprou o Château de Pez em 1995?", a: "Louis Roederer", x: ["Bollinger", "Veuve Clicquot", "Pol Roger"] },
    ],
  },
  bx_angludet: {
    fact: "Château de Margaux comprado em 1961 pela família Sichel, que também é coproprietária do terceiro cru Château Palmer.",
    quiz: [
      { q: "De que terceiro cru a família Sichel, do Château d’Angludet, é coproprietária?", a: "Château Palmer", x: ["Château Giscours", "Château Kirwan", "Château d’Issan"] },
    ],
  },
  bx_ormesdepez: {
    fact: "Château de Saint-Estèphe administrado desde 1940 pela família Cazes, dona do Lynch-Bages.",
    quiz: [
      { q: "Que família administra o Château Ormes de Pez?", a: "Família Cazes", x: ["Família Delon", "Família Tesseron", "Família Borie"] },
    ],
  },
  bx_carruades: {
    fact: "Segundo vinho do Lafite Rothschild. O nome vem do vinhedo da colina “Carruades”, incorporado à propriedade Lafite.",
    quiz: [
      { q: "De que país veio principalmente a demanda que fez disparar o preço do Carruades de Lafite no fim dos anos 2000?", a: "China", x: ["Japão", "Rússia", "Índia"] },
    ],
  },
  bx_pavillonrouge: {
    fact: "Segundo vinho do Château Margaux, que recebeu o nome “Pavillon Rouge” pela primeira vez em 1908.",
    quiz: [
      { q: "Qual é o vinho branco do Château Margaux que faz par com o Pavillon Rouge?", a: "Pavillon Blanc", x: ["Aile d’Argent", "Caillou Blanc", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_fortsdelatour: {
    fact: "Segundo vinho do Château Latour, com primeira safra em 1966. Como o Latour, só é lançado depois de bem amadurecido.",
    quiz: [
      { q: "Qual foi a primeira safra do Les Forts de Latour?", a: "1966", x: ["1945", "1982", "1990"] },
    ],
  },
  bx_petitmouton: {
    fact: "Segundo vinho do Mouton Rothschild, lançado pela primeira vez nos anos 1990. O branco do mesmo château é o “Aile d’Argent”.",
    quiz: [
      { q: "Qual é o vinho branco do château que produz o Le Petit Mouton?", a: "Aile d’Argent", x: ["Pavillon Blanc", "Caillou Blanc", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_clarence: {
    fact: "Segundo vinho que em 2007 trocou o nome “Bahans Haut-Brion” pelo atual, em homenagem ao banqueiro americano Clarence Dillon, que comprou o Haut-Brion em 1935.",
    quiz: [
      { q: "Qual era o antigo nome do Le Clarence de Haut-Brion?", a: "Bahans Haut-Brion", x: ["La Chapelle de la Mission", "Carruades de Haut-Brion", "Pavillon de Haut-Brion"] },
      { q: "Quem o Le Clarence de Haut-Brion homenageia?", a: "O banqueiro americano Clarence Dillon", x: ["O papa Clemente V", "O rei Carlos II da Inglaterra", "Napoleão III"] },
    ],
  },
  bx_alterego: {
    fact: "Lançado em 1998 no lugar do antigo segundo vinho, “Réserve du Général”. Como diz o nome, é vinificado à parte como o “outro eu” do Palmer.",
    quiz: [
      { q: "Qual era o nome do segundo vinho do Château Palmer antes do Alter Ego?", a: "Réserve du Général", x: ["Pavillon Rouge", "Les Forts", "Clos du Marquis"] },
    ],
  },
  bx_petitcheval: {
    fact: "Segundo vinho do Cheval Blanc, lançado pela primeira vez em 1988.",
    quiz: [
      { q: "Quem comprou em 1998 o Château Cheval Blanc, que produz o Le Petit Cheval?", a: "Bernard Arnault e Albert Frère", x: ["François Pinault", "Os irmãos Wertheimer", "Os irmãos Bouygues"] },
    ],
  },
  bx_closdumarquis: {
    fact: "Por muito tempo foi considerado o segundo vinho do Léoville Las Cases, mas desde 2007 é feito como vinho independente, de um vinhedo separado.",
    quiz: [
      { q: "Que vinho passou a ser o segundo vinho do Léoville Las Cases em 2007, no lugar do Clos du Marquis?", a: "Le Petit Lion du Marquis de Las Cases", x: ["Les Forts de Latour", "Réserve de la Comtesse", "La Croix de Beaucaillou"] },
    ],
  },
  bx_pagodesdecos: {
    fact: "Segundo vinho do Cos d’Estournel, batizado em referência às torres de estilo oriental (pagodes) do telhado da adega.",
    quiz: [
      { q: "De onde vem o nome Les Pagodes de Cos?", a: "Das torres orientais no telhado da adega", x: ["Do diário de viagem do fundador à Índia", "Dos pinheiros do vinhedo", "Do campanário da igreja da vila"] },
    ],
  },
  bx_carillonangelus: {
    fact: "Segundo vinho do Angélus. “Carillon” é um instrumento de vários sinos, o que o liga ao Angélus, cujo símbolo é um sino.",
    quiz: [
      { q: "O que significa “Carillon” no nome Carillon d’Angélus?", a: "Instrumento com vários sinos", x: ["Pequeno vinhedo", "Flauta de pastor", "Jardim de mosteiro"] },
    ],
  },
  bx_pavillonblanc: {
    fact: "A denominação Margaux só reconhece tintos, por isso o branco do Château Margaux sai como “AOC Bordeaux”. É feito com 100% Sauvignon Blanc.",
    quiz: [
      { q: "Por que o Pavillon Blanc du Château Margaux não pode usar a denominação “Margaux”?", a: "A AOC Margaux só reconhece vinhos tintos", x: ["Porque é um segundo vinho", "Porque não usa barricas de carvalho", "Porque é feito com uvas compradas"] },
    ],
  },
  bx_moutoncadet: {
    fact: "Começou em 1930, quando o barão Philippe de Rothschild vendeu à parte o vinho de uma safra ruim, que não pôde sair como Mouton Rothschild. “Cadet” significa caçula e se refere a Philippe, o filho mais novo.",
    quiz: [
      { q: "O que significa “Cadet” em Mouton Cadet?", a: "Caçula", x: ["Primogênito", "Cavaleiro", "Cordeirinho"] },
    ],
  },
  bx_montperat: {
    fact: "Tinto de Bordeaux que fez grande sucesso na Coreia e no Japão depois de ser comparado à música da banda de rock Queen no mangá “Gotas de Deus”.",
    quiz: [
      { q: "A que banda de rock o Château Mont-Pérat é comparado no mangá “Gotas de Deus”?", a: "Queen", x: ["The Beatles", "The Rolling Stones", "Led Zeppelin"] },
    ],
  },
};

export default T;
