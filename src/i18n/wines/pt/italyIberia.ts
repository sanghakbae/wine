import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  ib_sorisanlorenzo: {
    fact: "O primeiro vinho de vinhedo único da Gaja, lançado em 1967. Por um tempo levou um pouco de Barbera e saiu como “Langhe Nebbiolo”, mas voltou a ser Barbaresco a partir da safra 2013.",
    quiz: [
      { q: "O que significa “Sorì”, de Sorì San Lorenzo, no dialeto piemontês?", a: "Encosta voltada para o sul, bem ensolarada", x: ["Vale enevoado", "Adro da igreja", "Videira velha"] },
    ],
  },
  ib_monfortino: {
    fact: "Barolo Riserva que Giacomo Conterno faz com uvas de Serralunga. Lançado só depois de muitos anos em grandes tonéis de madeira, é o ápice do Barolo tradicionalista.",
    quiz: [
      { q: "Em que anos o Monfortino Barolo Riserva é produzido?", a: "Só em anos de colheita excepcional", x: ["Todos os anos, sem falta", "Exatamente a cada dois anos", "Só em anos bissextos"] },
      { q: "Que vinhedo de Serralunga, comprado por Giovanni Conterno, fornece as uvas do Monfortino?", a: "Cascina Francia", x: ["Monprivato", "Brunate", "Cannubi"] },
    ],
  },
  ib_giacosa: {
    fact: "Barolo do vinhedo Falletto, em Serralunga, adquirido por Bruno Giacosa, mestre do Nebbiolo que construiu a fama como négociant, comprando uvas.",
    quiz: [
      { q: "Que cor de rótulo Bruno Giacosa reserva às Riservas dos melhores anos?", a: "Vermelho", x: ["Preto", "Dourado", "Azul"] },
    ],
  },
  ib_bartolomascarello: {
    fact: "Símbolo dos tradicionalistas, fiel ao antigo método de fazer um único Barolo misturando uvas de vários vinhedos. Após a morte de Bartolo, a filha Maria Teresa assumiu.",
    quiz: [
      { q: "Que frase Bartolo Mascarello escreveu num rótulo desenhado por ele, causando polêmica?", a: "No Barrique, No Berlusconi", x: ["Terroir or Nothing", "Viva il Nebbiolo", "Slow Wine, Slow Life"] },
    ],
  },
  ib_monprivato: {
    fact: "O vinho emblemático da família Mascarello, que possui quase sozinha o vinhedo Monprivato, em Castiglione Falletto. É considerado um Barolo tradicionalista elegante e perfumado.",
    quiz: [
      { q: "Que Riserva Giuseppe Mascarello faz, só em bons anos, com a melhor parcela do Monprivato?", a: "Ca’ d’Morissio", x: ["Monfortino", "Bricco Rocche", "La Poja"] },
    ],
  },
  ib_vietti: {
    fact: "Grande casa de Castiglione Falletto que, sob Alfredo Currado, lançou cedo Barolos de vinhedo único. Em 2016 foi comprada pela família americana Krause.",
    quiz: [
      { q: "Que uva branca do Piemonte, quase extinta, Alfredo Currado, da Vietti, salvou?", a: "Arneis", x: ["Cortese", "Moscato", "Timorasso"] },
    ],
  },
  ib_piocesare: {
    fact: "Vinícola familiar que ainda faz vinho numa adega no centro histórico de Alba, onde restam antigas muralhas romanas. Os descendentes do fundador a comandam de geração em geração.",
    quiz: [
      { q: "Em que ano Cesare Pio fundou a Pio Cesare em Alba?", a: "1881", x: ["1781", "1931", "1971"] },
    ],
  },
  ib_marchesibarolo: {
    fact: "Vinícola herdeira da antiga adega dos marqueses Falletti, na vila de Barolo. Conta-se que foi ali que o Barolo se firmou como tinto seco de longa guarda.",
    quiz: [
      { q: "Na história da Marchesi di Barolo, quantos barris de vinho a marquesa Giulia Colbert Falletti enviou ao rei Carlos Alberto?", a: "325 (um por dia, exceto na Quaresma)", x: ["12 (um por mês)", "52 (um por semana)", "1.000"] },
    ],
  },
  ib_fontanafredda: {
    fact: "Vinícola nascida numa propriedade real em Serralunga d’Alba. O conde de Mirafiori, filho do rei com a amante, foi quem impulsionou a produção de vinho.",
    quiz: [
      { q: "Que rei comprou a propriedade de Fontanafredda e a deu à amante, a “Bela Rosin”?", a: "Vítor Emanuel II", x: ["Humberto I", "Carlos Alberto", "Napoleão III"] },
    ],
  },
  ib_scavino: {
    fact: "Vinícola familiar de Castiglione Falletto. Com Barolos modernos em pequenas barricas, liderou a corrente dos “Barolo Boys” nos anos 1980 e 1990.",
    quiz: [
      { q: "Que vinicultor comanda a Paolo Scavino e ficou famoso pelo Barolo moderno?", a: "Enrico Scavino", x: ["Elio Altare", "Roberto Voerzio", "Bruno Giacosa"] },
    ],
  },
  ib_ceretto: {
    fact: "Grande casa de Alba criada pelos irmãos Bruno e Marcello Ceretto. No vinhedo Brunate, em La Morra, fica a colorida “Capela do Barolo”, da família.",
    quiz: [
      { q: "Que artistas a família Ceretto convidou para pintar em cores vivas a pequena capela do vinhedo Brunate?", a: "Sol LeWitt e David Tremlett", x: ["Keith Haring e Andy Warhol", "Damien Hirst", "Jeff Koons"] },
    ],
  },
  ib_altare: {
    fact: "Líder dos “Barolo Boys”, que em La Morra adotou macerações curtas e pequenas barricas novas, levando o Barolo à modernidade. Isso lhe custou um grande conflito com o pai.",
    quiz: [
      { q: "O que Elio Altare destruiu com uma motosserra para impor seu novo método?", a: "Os velhos tonéis grandes do pai (botti)", x: ["As videiras velhas do vinhedo", "O telhado da adega", "A antiga prensa de uvas"] },
    ],
  },
  ib_voerzio: {
    fact: "Barolo de vinhedo único feito por Roberto Voerzio, de La Morra. O Cerequio é um vinhedo famoso na divisa entre La Morra e a vila de Barolo.",
    quiz: [
      { q: "Por qual manejo de vinhedo Roberto Voerzio ficou famoso?", a: "Desbaste radical de cachos para reduzir ao extremo o rendimento", x: ["Congelar as uvas antes da colheita", "Irrigar todos os dias", "Colher apenas à máquina"] },
    ],
  },
  ib_produttori: {
    fact: "Cooperativa formada pelos viticultores da vila de Barbaresco. Nos bons anos, lança separadamente Riservas de nove vinhedos, como Asili e Rabajà.",
    quiz: [
      { q: "Quem fundou com os agricultores, em 1958, a Produttori del Barbaresco?", a: "O padre da igreja da vila", x: ["O rei da Itália", "Angelo Gaja", "Um comerciante de vinhos inglês"] },
    ],
  },
  ib_braida: {
    fact: "Obra-prima de Giacomo Bologna, que tirou a Barbera do papel de vinho de mesa comum e a elevou a vinho fino. Estreou com a safra 1982.",
    quiz: [
      { q: "Que novidade Giacomo Bologna, da Braida, testou no Bricco dell’Uccellone, causando sensação?", a: "Amadurecer Barbera em pequenas barricas novas", x: ["Fazer espumante de Barbera", "Vinificar com uvas secas", "Misturar com uvas brancas"] },
    ],
  },
  ib_cascinetta: {
    fact: "Moscato d’Asti doce, com cerca de 5% de álcool e bolhas delicadas. A fermentação é interrompida no meio para preservar o doce e o aroma floral da uva.",
    quiz: [
      { q: "Como se chama na Itália um vinho de bolhas leves, como o Vietti Moscato d’Asti Cascinetta?", a: "Frizzante", x: ["Passito", "Ripasso", "Recioto"] },
    ],
  },
  ib_martiniasti: {
    fact: "Espumante doce feito com uvas Moscato fermentadas de uma só vez em grandes tanques fechados, que retêm as bolhas. É leve, com cerca de 7% de álcool.",
    quiz: [
      { q: "Por que bebida a Martini & Rossi, produtora do Martini Asti, ficou famosa no mundo?", a: "Vermute", x: ["Grappa", "Limoncello", "Sambuca"] },
      { q: "Em que ano a Martini & Rossi, produtora do Martini Asti, abriu as portas em Turim?", a: "1863", x: ["1763", "1923", "1963"] },
    ],
  },
  ib_ganciaasti: {
    fact: "Pioneira do spumante italiano, com sede em Canelli, na região de Asti. O fundador, Carlo Gancia, é chamado de “pai do spumante italiano”.",
    quiz: [
      { q: "Em que cidade francesa Carlo Gancia, fundador da Gancia, foi aprender a fazer espumante?", a: "Reims", x: ["Bordeaux", "Dijon", "Lyon"] },
    ],
  },
  ib_ornellaia: {
    fact: "Supertoscano feito com castas bordalesas nas colinas costeiras de Bolgheri. Depois de algumas trocas de dono, hoje pertence à família Frescobaldi.",
    quiz: [
      { q: "Quem fundou a Ornellaia em 1981?", a: "Lodovico Antinori", x: ["Piero Antinori", "Mario Incisa della Rocchetta", "Angelo Gaja"] },
      { q: "Como se chama o projeto da Ornellaia em que, a cada ano, um artista cria um rótulo especial?", a: "Vendemmia d’Artista", x: ["Arte in Bottiglia", "Biennale del Vino", "Galleria Bolgheri"] },
    ],
  },
  ib_masseto: {
    fact: "Um dos tintos mais caros da Itália, feito só com Merlot de um vinhedo nas colinas de Bolgheri. Estreou com a safra 1986 e hoje tem adega própria.",
    quiz: [
      { q: "Que solo especial é associado ao vinhedo do Masseto?", a: "Argila de tom azulado", x: ["Cinza vulcânica negra", "Giz calcário branco", "Arenito vermelho"] },
    ],
  },
  ib_tignanello: {
    fact: "Supertoscano do vinhedo Tignanello, da família Antinori. Estreou com a safra 1971 e mudou os rumos do vinho italiano.",
    quiz: [
      { q: "Por que o Tignanello foi considerado ousado nos anos 1970?", a: "Amadureceu Sangiovese em pequenas barricas e dispensou as uvas brancas", x: ["Usou uvas secas para ficar doce", "Foi o primeiro com tampa de rosca", "Misturou tinto a um vinho branco"] },
    ],
  },
  ib_solaia: {
    fact: "Supertoscano que a Antinori faz à base de Cabernet Sauvignon num vinhedo vizinho ao Tignanello. Saiu pela primeira vez com a safra 1978.",
    quiz: [
      { q: "Que honra a safra 1997 do Solaia foi o primeiro vinho italiano a receber?", a: "1º lugar no “Vinho do Ano” da Wine Spectator", x: ["Os primeiros 100 pontos de Robert Parker", "Vinho de missa oficial do Vaticano", "Certificado de fornecedor da Casa Real britânica"] },
      { q: "O que significa o nome Solaia?", a: "Lugar ensolarado", x: ["Terra salgada", "Árvore solitária", "Vinhedo murado"] },
    ],
  },
  ib_guadoaltasso: {
    fact: "O tinto emblemático da propriedade da família Antinori em Bolgheri. Estreou com a safra 1990.",
    quiz: [
      { q: "O que significa o nome Guado al Tasso?", a: "Vau por onde passa o texugo", x: ["Colina da raposa", "Fonte do lobo", "Bosque do cervo"] },
    ],
  },
  ib_casanovadineri: {
    fact: "Vinícola familiar fundada pela família Neri em Montalcino no início dos anos 1970. O Tenuta Nuova é um Brunello escuro e potente, dos vinhedos do sul.",
    quiz: [
      { q: "Que honra o Casanova di Neri Tenuta Nuova 2001 recebeu em 2006?", a: "1º lugar no “Vinho do Ano” da Wine Spectator", x: ["Uma condecoração do presidente da Itália", "O grande prêmio da Bienal de Veneza", "Vinho de missa oficial do Vaticano"] },
    ],
  },
  ib_soldera: {
    fact: "Lendário Sangiovese que Gianfranco Soldera fazia em Montalcino em grandes tonéis de carvalho da Eslavônia. Depois de romper com o consórcio do Brunello, passou a sair como Toscana IGT.",
    quiz: [
      { q: "O que aconteceu na adega do Case Basse em 2012?", a: "Um ex-funcionário vingativo abriu os tonéis e derramou várias safras", x: ["Uma enchente inundou a adega", "Um raio provocou um incêndio", "Todas as safras foram roubadas"] },
    ],
  },
  ib_poggiodisotto: {
    fact: "Vinícola de Castelnuovo dell’Abate, no sudeste de Montalcino. Com macerações longas e tonéis grandes, faz Brunellos tradicionalistas e delicados.",
    quiz: [
      { q: "Quem fundou a Poggio di Sotto e a tornou famosa pelo Brunello tradicional?", a: "Piero Palmucci", x: ["Gianfranco Soldera", "Angelo Gaja", "Paolo De Marchi"] },
    ],
  },
  ib_banfi: {
    fact: "Vinícola que formou uma enorme propriedade no sul de Montalcino. Dentro dela fica o castelo medieval de Poggio alle Mura.",
    quiz: [
      { q: "Quem fundou o Castello Banfi em Montalcino, em 1978?", a: "Os irmãos Mariani, ítalo-americanos", x: ["A família Antinori", "Os Rothschild franceses", "Um comerciante de vinhos da corte inglesa"] },
    ],
  },
  ib_ilpoggione: {
    fact: "Uma das propriedades mais antigas da região, em Sant’Angelo in Colle, no sul de Montalcino. Desde o fim do século XIX é cultivada pela mesma família.",
    quiz: [
      { q: "Que família é dona do Il Poggione há gerações?", a: "Família Franceschi", x: ["Família Biondi-Santi", "Família Frescobaldi", "Família Antinori"] },
    ],
  },
  ib_coldorcia: {
    fact: "Grande propriedade de Montalcino numa colina que, como diz o nome, domina o rio Orcia. Cultiva em orgânico seus extensos vinhedos.",
    quiz: [
      { q: "Por que bebida era famosa a família Marone Cinzano, que comprou a Col d’Orcia em 1973?", a: "Vermute Cinzano", x: ["Campari", "Aperol", "Fernet-Branca"] },
    ],
  },
  ib_castellodiama: {
    fact: "Grande nome do Chianti Classico no pequeno vilarejo de Ama, em Gaiole in Chianti. Também ficou famoso pelo “L’Apparita”, feito com Merlot.",
    quiz: [
      { q: "O que o Castello di Ama começou a instalar, por volta de 2000, nos vinhedos e na villa, chamando a atenção?", a: "Obras de artistas contemporâneos de renome mundial", x: ["Um museu de ordens de cavalaria medievais", "Um resort de spa de vinho", "Uma grande usina solar"] },
    ],
  },
  ib_flaccianello: {
    fact: "O vinho emblemático da Fontodi, feito com 100% Sangiovese por Giovanni Manetti em Panzano. Estreou com a safra 1981.",
    quiz: [
      { q: "Qual é o apelido do anfiteatro de encostas de Panzano, onde nasce o Flaccianello?", a: "Conca d’Oro (concha de ouro)", x: ["Val d’Orcia", "Colli Senesi", "Monte Amiata"] },
    ],
  },
  ib_fontalloro: {
    fact: "Vinho 100% Sangiovese da Fèlsina, de Castelnuovo Berardenga. Usa uvas de vinhedos na divisa entre o Chianti Classico e os Colli Senesi.",
    quiz: [
      { q: "Quem comprou a propriedade Fèlsina em 1966?", a: "Domenico Poggiali", x: ["Piero Antinori", "Sergio Manetti", "Gianfranco Soldera"] },
    ],
  },
  ib_cepparello: {
    fact: "Vinho que deu fama a Paolo De Marchi, feito com 100% Sangiovese. Em 2022 a Isole e Olena foi comprada pelo grupo francês EPI, dono da Biondi-Santi.",
    quiz: [
      { q: "De onde vem o nome da vinícola Isole e Olena?", a: "Da união de duas pequenas vilas, Isole e Olena", x: ["Dos nomes das duas filhas do fundador", "De ilhas e oliveiras", "Do nome de um antigo mosteiro"] },
    ],
  },
  ib_ducaleoro: {
    fact: "O Chianti Classico de topo da Ruffino, de rótulo dourado. A Ruffino é uma tradicional casa toscana fundada em 1877 por dois primos.",
    quiz: [
      { q: "A quem se refere o “Ducale” (ducal) do Ruffino Riserva Ducale?", a: "Ao duque de Aosta, apreciador dos vinhos Ruffino", x: ["Ao grão-duque Médici", "Ao duque de Milão", "Ao doge de Veneza"] },
    ],
  },
  ib_nipozzano: {
    fact: "Chianti Rufina Riserva de vinhedos em torno do castelo medieval de Nipozzano, em Rufina, a leste de Florença. É o vinho emblemático da família Frescobaldi.",
    quiz: [
      { q: "Há quanto tempo a família Frescobaldi faz vinho na Toscana?", a: "Mais de 700 anos", x: ["Cerca de 50 anos", "Cerca de 150 anos", "Cerca de 300 anos"] },
    ],
  },
  ib_luce: {
    fact: "Vinho de Montalcino que mistura Sangiovese e Merlot. O nome significa “luz”, e o rótulo mostra um sol irradiando luz.",
    quiz: [
      { q: "Que duas famílias criaram juntas o Luce, lançado com a safra 1993?", a: "Frescobaldi e Robert Mondavi", x: ["Antinori e Rothschild", "Gaja e Mondavi", "Frescobaldi e Rothschild"] },
    ],
  },
  ib_serrenuove: {
    fact: "Segundo vinho da Ornellaia, lançado com a safra 1997. É feito para ser apreciado mais jovem que o vinho principal.",
    quiz: [
      { q: "Que família é hoje dona da Ornellaia, produtora do Le Serre Nuove?", a: "Frescobaldi", x: ["Antinori", "Gaja", "Marzotto"] },
    ],
  },
  ib_pergoletorte: {
    fact: "Vinho lendário que Sergio Manetti fazia com 100% Sangiovese e que abandonou a denominação Chianti Classico. Estreou com a safra 1977.",
    quiz: [
      { q: "Que imagem, diferente a cada safra, aparece no rótulo do Le Pergole Torte?", a: "Um retrato de mulher do pintor Alberto Manfredi", x: ["Uma gravura de igreja", "Uma aquarela de cachos de uva", "O brasão da família"] },
    ],
  },
  ib_avignonesi: {
    fact: "Vinícola emblemática de Montepulciano. Desde 2009, sob o comando da belga Virginie Saverys, passou à biodinâmica.",
    quiz: [
      { q: "Que vinho de sobremesa toscano, feito com uvas secas e longamente amadurecido, deu fama especial à Avignonesi?", a: "Vin Santo", x: ["Recioto", "Marsala", "Moscato d’Asti"] },
    ],
  },
  ib_redigaffi: {
    fact: "Vinho cult 100% Merlot da Tua Rita, em Suvereto, no litoral toscano. Estreou com a safra 1994.",
    quiz: [
      { q: "De onde vem o nome da vinícola Tua Rita, produtora do Redigaffi?", a: "Do nome da fundadora, Rita Tua", x: ["Do nome da igreja da vila", "De uma antiga estrada romana", "De um rio próximo"] },
    ],
  },
  ib_villaantinori: {
    fact: "Tinto toscano campeão de vendas da Antinori, lançado em 1928. O rótulo mostra a villa da família Antinori.",
    quiz: [
      { q: "Em que ano a família Antinori entrou para a guilda dos vinhateiros de Florença, iniciando o negócio do vinho?", a: "1385", x: ["1685", "1885", "1935"] },
    ],
  },
  ib_quintarelli: {
    fact: "Amarone lendário de Giuseppe Quintarelli, o “mestre do Vêneto”. Feito só em bons anos, é lançado depois de longo amadurecimento em grandes tonéis.",
    quiz: [
      { q: "Como se chama o vinho que Giuseppe Quintarelli fazia como um Amarone, com Cabernet Franc e outras uvas secas?", a: "Alzero", x: ["La Poja", "Costasera", "Ripassa"] },
    ],
  },
  ib_dalforno: {
    fact: "Amarone cult de estilo extremamente concentrado, feito por Romano Dal Forno no vale de Illasi, a leste de Valpolicella. Amadurece longamente em barricas novas.",
    quiz: [
      { q: "Que vinicultor, quase um mestre, mais influenciou Romano Dal Forno na juventude?", a: "Giuseppe Quintarelli", x: ["Angelo Gaja", "Gianfranco Soldera", "Edoardo Valentini"] },
    ],
  },
  ib_allegrini: {
    fact: "Amarone feito há gerações pela família Allegrini em Fumane, no Valpolicella Classico. É uma casa que lançou cedo vinhos de vinhedo único.",
    quiz: [
      { q: "Como se chama o vinho emblemático de vinhedo único que a Allegrini faz com 100% Corvina?", a: "La Poja", x: ["Alzero", "Costasera", "Monprivato"] },
    ],
  },
  ib_bertani: {
    fact: "Amarone tradicionalista famoso pelo longo amadurecimento antes do lançamento. A Bertani foi uma das pioneiras em engarrafar e vender Amarone.",
    quiz: [
      { q: "Em que ano os irmãos Bertani fundaram a vinícola em Verona?", a: "1857", x: ["1757", "1907", "1957"] },
    ],
  },
  ib_zenato: {
    fact: "Amarone da Zenato, sediada ao sul do lago de Garda. Fundada em 1960 por Sergio Zenato, a casa também é famosa pelo branco Lugana.",
    quiz: [
      { q: "Como se chama o vinho que a Zenato faz refermentando Valpolicella sobre as cascas que sobram do Amarone?", a: "Ripassa", x: ["La Poja", "Alzero", "Costasera"] },
    ],
  },
  ib_tommasi: {
    fact: "Amarone feito há gerações pela família Tommasi em Pedemonte, no Valpolicella. Há mais de 100 anos, desde a fundação, a empresa é administrada pela família.",
    quiz: [
      { q: "Como se chama o método, usado no Amarone Tommasi, de secar as uvas colhidas por meses para concentrar o açúcar?", a: "Appassimento", x: ["Solera", "Charmat", "Botrytis"] },
    ],
  },
  ib_santamargherita: {
    fact: "Vinho que, em 1961, fez do Pinot Grigio um branco límpido, sem contato com as cascas, e lançou uma moda mundial. A empresa foi fundada em 1935 pelo conde Gaetano Marzotto.",
    quiz: [
      { q: "De quem vem o nome Santa Margherita?", a: "Da esposa do fundador, o conde Marzotto", x: ["Da padroeira de Veneza", "Da filha mais velha do fundador", "De uma igreja próxima"] },
    ],
  },
  ib_mionetto: {
    fact: "Grande nome do Prosecco sediado em Valdobbiadene. Com o método Charmat, de segunda fermentação em grandes tanques, preserva aromas frescos de fruta.",
    quiz: [
      { q: "Qual é a cor-símbolo do rótulo do Mionetto Prosecco Brut?", a: "Laranja", x: ["Preto", "Azul", "Rosa"] },
      { q: "Em que ano Francesco Mionetto fundou a Mionetto em Valdobbiadene?", a: "1887", x: ["1787", "1937", "1987"] },
    ],
  },
  ib_lamarca: {
    fact: "Marca de uma cooperativa que reúne milhares de viticultores da região de Treviso. É um dos Proseccos mais vendidos dos Estados Unidos.",
    quiz: [
      { q: "Qual é a cor característica do rótulo do La Marca Prosecco?", a: "Azul-turquesa claro (tipo azul Tiffany)", x: ["Laranja", "Preto", "Vermelho-escuro"] },
    ],
  },
  ib_cartizze: {
    fact: "Prosecco de Cartizze, a colina mais famosa de Valdobbiadene. A família Bisol cultiva uvas na região desde o século XVI.",
    quiz: [
      { q: "Que família, famosa pelo espumante Ferrari de Trento, comprou a Bisol em 2014?", a: "Família Lunelli", x: ["Família Antinori", "Família Marzotto", "Família Frescobaldi"] },
    ],
  },
  ib_ninofranco: {
    fact: "O Prosecco emblemático da Nino Franco, vinícola familiar de Valdobbiadene. Primo Franco, da terceira geração, é considerado quem elevou a qualidade do Prosecco.",
    quiz: [
      { q: "Em que ano a Nino Franco abriu as portas em Valdobbiadene?", a: "1919", x: ["1819", "1969", "1999"] },
    ],
  },
  ib_tunina: {
    fact: "Corte branco emblemático do Friuli, em que Silvio Jermann mistura várias uvas brancas. Lançado nos anos 1970, elevou o prestígio dos brancos italianos.",
    quiz: [
      { q: "Que Chardonnay a Jermann batizou inspirada numa canção do U2?", a: "Dreams", x: ["Vintage Tunina", "Terre Alte", "Rarità"] },
    ],
  },
  ib_gravner: {
    fact: "Branco cor de âmbar que Josko Gravner, de Oslavia, na fronteira eslovena, faz macerando Ribolla Gialla com as cascas por meses. É considerado pioneiro do “vinho laranja”.",
    quiz: [
      { q: "Que recipiente de fermentação e amadurecimento Josko Gravner adotou, chamando a atenção?", a: "Ânforas georgianas enterradas no chão (qvevri)", x: ["Tanques de aço sob pressão", "Ovos de concreto", "Tonéis de acácia"] },
    ],
  },
  ib_terrealte: {
    fact: "Branco emblemático do Friuli, em que Livio Felluga mistura três castas das colinas de Rosazzo. Fica mais profundo com o tempo.",
    quiz: [
      { q: "O que aparece nos rótulos dos vinhos Livio Felluga?", a: "Um mapa antigo das colinas de vinhedos", x: ["Uma gôndola de Veneza", "O brasão da família com um leão", "Um camponês colhendo uvas"] },
    ],
  },
  ib_terlano: {
    fact: "Cooperativa do Alto Adige fundada por viticultores em 1893. É famosa por brancos que não perdem o frescor mesmo depois de décadas.",
    quiz: [
      { q: "Como se chama a série rara que a Cantina Terlano lança depois de mais de 10 anos sobre as borras?", a: "Rarità", x: ["Vin Santo", "Riserva Ducale", "Vecchio Samperi"] },
    ],
  },
  ib_cadelbosco: {
    fact: "Espumante emblemático da Franciacorta, criado por Maurizio Zanella ao sul do lago de Iseo. É feito com segunda fermentação na garrafa, como o Champagne.",
    quiz: [
      { q: "O que significa o nome Ca’ del Bosco?", a: "Casa no bosque", x: ["Castelo na colina", "Fazenda à beira do lago", "Igreja de pedra"] },
      { q: "Que escultor fez o enorme portão de bronze da entrada da Ca’ del Bosco?", a: "Arnaldo Pomodoro", x: ["Alberto Giacometti", "Marino Marini", "Umberto Boccioni"] },
    ],
  },
  ib_bellavista: {
    fact: "A cuvée básica da casa de espumantes emblemática da Franciacorta. Fica nas colinas de Erbusco, com uma “bela vista”, como diz o nome.",
    quiz: [
      { q: "Que empresário da construção civil fundou a Bellavista em 1977?", a: "Vittorio Moretti", x: ["Maurizio Zanella", "Carlo Gancia", "Gaetano Marzotto"] },
    ],
  },
  ib_planeta: {
    fact: "Um dos primeiros vinhos emblemáticos da família Planeta, que liderou o renascimento do vinho siciliano nos anos 1990. Mostrou que a Sicília também podia fazer brancos de nível mundial.",
    quiz: [
      { q: "Que grande cooperativa siciliana Diego Planeta, da família Planeta, comandou por muito tempo?", a: "Settesoli", x: ["Donnafugata", "Regaleali", "Florio"] },
    ],
  },
  ib_benrye: {
    fact: "Passito doce feito com Zibibbo (Moscato di Alessandria) seco ao sol na ilha de Pantelleria, entre a Sicília e a Tunísia.",
    quiz: [
      { q: "O que significa “Ben Ryé” em árabe?", a: "Filho do vento", x: ["Filha do sol", "Presente do mar", "Joia da ilha"] },
      { q: "De que romance vem “Donnafugata”, nome da vinícola e de uma propriedade da história?", a: "“O Leopardo” (Il Gattopardo), de Lampedusa", x: ["“Os Noivos”, de Manzoni", "“Os Malavoglia”, de Verga", "“O Nome da Rosa”, de Eco"] },
    ],
  },
  ib_rossodelconte: {
    fact: "O tinto emblemático da família Tasca d’Almerita, feito com Nero d’Avola na propriedade Regaleali, no interior da Sicília.",
    quiz: [
      { q: "Em que ano a família Tasca comprou a propriedade Regaleali, no interior da Sicília?", a: "1830", x: ["1730", "1930", "1980"] },
    ],
  },
  ib_debartoli: {
    fact: "Vinho de Marco De Bartoli, que lutou para recuperar o Marsala tradicional de qualidade numa época em que era visto como vinho de cozinha.",
    quiz: [
      { q: "Como se chama o lendário vinho de Marco De Bartoli, amadurecido pelo antigo método “perpetuo”, sem adição de álcool?", a: "Vecchio Samperi", x: ["Rosso del Conte", "Ben Ryé", "Radici"] },
    ],
  },
  ib_florio: {
    fact: "Casa emblemática do Marsala, o vinho fortificado que o comerciante inglês John Woodhouse apresentou ao mundo no século XVIII. Tem uma enorme adega à beira-mar em Marsala.",
    quiz: [
      { q: "Quem fundou a adega Florio em Marsala, em 1833?", a: "Vincenzo Florio", x: ["John Woodhouse", "Benjamin Ingham", "Marco De Bartoli"] },
    ],
  },
  ib_passopisciaro: {
    fact: "Tinto de Nerello Mascalese, de vinhedos altos na encosta norte do vulcão Etna. É uma das vinícolas que lideraram o boom dos vinhos do Etna.",
    quiz: [
      { q: "Que vinícola Andrea Franchetti, fundador da Passopisciaro, criou antes na Toscana?", a: "Tenuta di Trinoro", x: ["Tenuta San Guido", "Montevertine", "Fontodi"] },
    ],
  },
  ib_benanti: {
    fact: "Branco de Carricante da encosta leste do vulcão Etna. Tem sabor salino e retilíneo, vindo de solos vulcânicos perto do mar.",
    quiz: [
      { q: "Qual é a única comuna que pode usar a denominação “Etna Bianco Superiore”, presente no Benanti Pietra Marina?", a: "Milo", x: ["Randazzo", "Taormina", "Catânia"] },
    ],
  },
  ib_radici: {
    fact: "Tinto emblemático da Mastroberardino, que salvou as castas nativas da Campânia em declínio depois da guerra. Em 1993 o Taurasi se tornou a primeira DOCG do sul da Itália.",
    quiz: [
      { q: "Em que sítio arqueológico a Mastroberardino recuperou antigos vinhedos, com as autoridades de arqueologia, para fazer o vinho “Villa dei Misteri”?", a: "Pompeia", x: ["Herculano", "Paestum", "Óstia Antiga"] },
    ],
  },
  ib_feudi: {
    fact: "Branco de Fiano, uva branca nativa da Irpínia, no interior da Campânia. A Feudi di San Gregorio liderou a nova onda do vinho do sul da Itália.",
    quiz: [
      { q: "Em que ano a Feudi di San Gregorio foi fundada?", a: "1986", x: ["1886", "1936", "2006"] },
    ],
  },
  ib_es: {
    fact: "Tinto intenso que o casal Gianfranco Fino e Simona Natale faz com Primitivo de velhas vinhas em alberello (condução em arbusto) na Puglia.",
    quiz: [
      { q: "De qual teoria vem o nome “Es”, de Gianfranco Fino?", a: "De Freud", x: ["De Jung", "De Nietzsche", "De Kant"] },
    ],
  },
  ib_valentini: {
    fact: "Lenda dos Abruzos que faz obras-primas de décadas de guarda com a Trebbiano, uva considerada comum. É famosa por quase não revelar seus métodos.",
    quiz: [
      { q: "Que vinicultor, que engarrafava só a melhor parte das uvas colhidas, fez da Valentini uma lenda?", a: "Edoardo Valentini", x: ["Emidio Pepe", "Gianfranco Fino", "Angelo Gaja"] },
    ],
  },
  ib_emidiopepe: {
    fact: "Vinícola familiar fiel aos métodos antigos, desengaçando as uvas à mão e amadurecendo em tanques de cimento. Guarda safras antigas na adega e as lança aos poucos.",
    quiz: [
      { q: "Em que ano Emidio Pepe fez seu primeiro vinho nos Abruzos?", a: "1964", x: ["1904", "1934", "1994"] },
    ],
  },
  ib_turriga: {
    fact: "O tinto emblemático da Sardenha, feito pela família Argiolas, no sul da ilha, à base da uva nativa Cannonau. Estreou com a safra 1988.",
    quiz: [
      { q: "Que enólogo, chamado de “pai dos supertoscanos”, criou o Argiolas Turriga junto com a família?", a: "Giacomo Tachis", x: ["Michel Rolland", "Émile Peynaud", "Peter Sisseck"] },
    ],
  },
  ib_chiarli: {
    fact: "Tinto levemente frisante feito com Lambrusco di Sorbara, perto de Modena. Tem cor rubi clara e acidez fresca.",
    quiz: [
      { q: "Em que ano a Cleto Chiarli começou a fazer Lambrusco em Modena?", a: "1860", x: ["1760", "1920", "1970"] },
    ],
  },
  ib_valbuena: {
    fact: "Outro tinto que a Vega Sicilia faz na mesma propriedade do Único. Amadurece menos tempo e é lançado mais cedo que o Único.",
    quiz: [
      { q: "O que significa o “5” de Valbuena 5°?", a: "É lançado no quinto ano após a colheita", x: ["Mistura cinco castas", "Usa uvas de vinhas de 5 anos", "Usa só a quinta colheita"] },
    ],
  },
  ib_pingus: {
    fact: "Vinho cult espanhol feito pelo dinamarquês Peter Sisseck com uvas de Tempranillo muito velhas. Desde a primeira safra, 1995, recebeu elogios do mundo todo.",
    quiz: [
      { q: "De onde vem o nome Pingus?", a: "Do apelido de infância de Peter Sisseck", x: ["De um rio ao lado do vinhedo", "De um antigo mosteiro", "De uma palavra espanhola para “pequena joia”"] },
    ],
  },
  ib_florpingus: {
    fact: "Vinho-irmão do Pingus, feito pelas mesmas mãos. Usa Tempranillo de velhas vinhas de várias vilas.",
    quiz: [
      { q: "Que enólogo dinamarquês faz o Flor de Pingus?", a: "Peter Sisseck", x: ["Álvaro Palacios", "Mariano García", "René Barbier"] },
    ],
  },
  ib_pesquera: {
    fact: "Vinícola fundada por Alejandro Fernández nos anos 1970 em Pesquera de Duero. É considerada a grande responsável por levar Ribera del Duero ao mundo.",
    quiz: [
      { q: "A que vinho Robert Parker comparou o Tinto Pesquera?", a: "Ao Pétrus, de Bordeaux", x: ["Ao Romanée-Conti", "Ao Château d’Yquem", "Ao Sassicaia"] },
    ],
  },
  ib_alion: {
    fact: "Vinícola-irmã fundada pela Vega Sicilia no início dos anos 1990. Amadurece Tempranillo em barricas francesas novas, com sabor mais moderno.",
    quiz: [
      { q: "Que família é dona da Vega Sicilia e da Alión desde os anos 1980?", a: "Família Álvarez", x: ["Família Fernández", "Família Muga", "Família Torres"] },
    ],
  },
  ib_aalto: {
    fact: "Estrela de Ribera del Duero fundada em 1999. Faz tintos potentes com uvas de velhas vinhas de Tempranillo de várias vilas.",
    quiz: [
      { q: "Quem fundou a Aalto depois de quase 30 anos como enólogo da Vega Sicilia?", a: "Mariano García", x: ["Peter Sisseck", "Alejandro Fernández", "Álvaro Palacios"] },
    ],
  },
  ib_emiliomoro: {
    fact: "O tinto emblemático da família Moro, que cultiva uvas há gerações em Pesquera de Duero, na Ribera del Duero.",
    quiz: [
      { q: "Como a Tempranillo é chamada localmente em Ribera del Duero, onde nasce o Emilio Moro?", a: "Tinto Fino", x: ["Cencibel", "Ull de Llebre", "Tinta Roriz"] },
    ],
  },
  ib_protos: {
    fact: "A primeira vinícola de Ribera del Duero, fundada em 1927 por 11 viticultores de Peñafiel. Amadurece o vinho em túneis sob o castelo de Peñafiel.",
    quiz: [
      { q: "O que significa o nome Protos?", a: "“Primeiro”, em grego", x: ["“Muralha”, em latim", "“Beira-rio”, em espanhol", "“Vinhedo”, em árabe"] },
      { q: "Que arquiteto britânico projetou a nova vinícola da Protos?", a: "Richard Rogers", x: ["Norman Foster", "Zaha Hadid", "Frank Gehry"] },
    ],
  },
  ib_castilloygay: {
    fact: "O vinho de topo da Marqués de Murrieta, feito só em bons anos. A história começou em 1852 na propriedade Ygay, perto de Logroño.",
    quiz: [
      { q: "Quem fundou a Marqués de Murrieta e introduziu na Rioja a vinificação ao estilo de Bordeaux?", a: "Luciano de Murrieta", x: ["Alejandro Fernández", "Rafael López de Heredia", "Enrique Forner"] },
    ],
  },
  ib_rioja904: {
    fact: "O vinho emblemático da La Rioja Alta, fundada em 1890 por cinco famílias ao lado da estação de trem de Haro. Tem estilo tradicional, com longo amadurecimento em barricas de carvalho americano.",
    quiz: [
      { q: "O que significa o “904” de Gran Reserva 904?", a: "A fusão com a bodega Ardanza em 1904", x: ["Só se fazem 904 barris", "Vinhedo a 904 m de altitude", "904 dias de amadurecimento"] },
    ],
  },
  ib_tondonia: {
    fact: "O vinho emblemático da López de Heredia, fundada em Haro em 1877. Com longo amadurecimento em barril, dura décadas e é símbolo da Rioja tradicional.",
    quiz: [
      { q: "Quem projetou o pavilhão de visitantes da López de Heredia?", a: "Zaha Hadid", x: ["Frank Gehry", "Santiago Calatrava", "Richard Rogers"] },
    ],
  },
  ib_cvneimperial: {
    fact: "O vinho de topo da CVNE, fundada em 1879 ao lado da estação de trem de Haro. A safra 2004 ficou em 1º lugar no “Vinho do Ano” da Wine Spectator.",
    quiz: [
      { q: "O que significa a sigla CVNE?", a: "Compañía Vinícola del Norte de España (Companhia Vinícola do Norte da Espanha)", x: ["Confraria Real do Vinho de Castela", "União das Bodegas da Rioja", "Iniciais dos quatro fundadores"] },
    ],
  },
  ib_pradoenea: {
    fact: "A Gran Reserva de topo da Muga, feita só em bons anos. Depois de longo amadurecimento em barrica, amadurece de novo na garrafa antes de ser lançada.",
    quiz: [
      { q: "O que é considerado especial na vinícola Muga?", a: "Tem tanoaria própria, que faz suas barricas", x: ["Amadurece todos os vinhos em ânforas de barro", "Transporta as uvas de helicóptero", "Tem uma usina hidrelétrica no subsolo"] },
    ],
  },
  ib_torremuga: {
    fact: "Rioja de estilo moderno lançado pela Muga com a safra 1991. Tem cor escura, fruta abundante e notas de carvalho francês novo.",
    quiz: [
      { q: "Que casal fundou a vinícola Muga em Haro, em 1932?", a: "Isaac Muga e Aurora Caño", x: ["Alejandro Fernández e Esperanza Rivera", "Mario Rotllant e Carmen Daurella", "Joan Juvé e Teresa Camps"] },
    ],
  },
  ib_caceres: {
    fact: "Vinícola fundada por Enrique Forner em Cenicero, em 1970. Trouxe a vinificação bordalesa e lançou Riojas de fruta viva.",
    quiz: [
      { q: "Que enólogo francês orientou a Marqués de Cáceres ao introduzir a vinificação bordalesa?", a: "Émile Peynaud", x: ["Michel Rolland", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  ib_contino: {
    fact: "Rioja de uma propriedade num meandro do rio Ebro, perto de Laguardia. Foi fundada nos anos 1970 pela CVNE e pela família dona da antiga propriedade.",
    quiz: [
      { q: "Que tipo de vinho o Contino teria sido o primeiro a lançar na Rioja?", a: "Vinho de propriedade única, só com uvas próprias", x: ["O primeiro espumante da Rioja", "O primeiro vinho doce da Rioja", "O primeiro rosé da Rioja"] },
    ],
  },
  ib_remirez: {
    fact: "Vinícola fundada por Fernando Remírez de Ganuza em Samaniego, na Rioja Alavesa. Seleciona com cuidado uvas de pequenos vinhedos antigos.",
    quiz: [
      { q: "Que parte do cacho a Remírez de Ganuza usa para fazer o Reserva?", a: "Só a parte de cima (os “ombros”)", x: ["Só a ponta do cacho", "O cacho inteiro, com engaço", "Só as bagas que amadurecem por último"] },
    ],
  },
  ib_roda: {
    fact: "A Reserva emblemática da Roda, estrela do bairro da estação de Haro. É feita com uvas de velhas vinhas de Tempranillo.",
    quiz: [
      { q: "De onde vem o nome Roda?", a: "Das iniciais dos sobrenomes do casal fundador, Rotllant e Daurella", x: ["Da palavra “rueda” (roda, em espanhol)", "Do nome da vila do vinhedo", "De um rio próximo"] },
    ],
  },
  ib_artadi: {
    fact: "Tempranillo que Juan Carlos López de Lacalle faz com um único pequeno vinhedo em Laguardia. É considerado um dos melhores vinhos de vinhedo único da Espanha.",
    quiz: [
      { q: "Que decisão da Artadi, em 2015, deu o que falar?", a: "Sair da denominação Rioja (DOCa)", x: ["Comprar um château francês", "Trocar todos os vinhedos por uvas brancas", "Adotar tampa metálica no lugar da rolha"] },
    ],
  },
  ib_campoviejo: {
    fact: "Nascida em Logroño em 1959, tornou-se uma das marcas de Rioja mais vendidas do mundo. É conhecida pelos rótulos coloridos.",
    quiz: [
      { q: "O que significa o nome Campo Viejo?", a: "Campo velho", x: ["Castelo novo", "Colina vermelha", "Cavaleiro idoso"] },
    ],
  },
  ib_faustino: {
    fact: "Gran Reserva da Rioja reconhecível pela garrafa fosca, como se estivesse coberta de geada. É o vinho emblemático da família Faustino, em atividade desde 1861.",
    quiz: [
      { q: "Que pintor fez o retrato que aparece no rótulo do Faustino I?", a: "Rembrandt", x: ["Velázquez", "Goya", "El Greco"] },
    ],
  },
  ib_juangil: {
    fact: "Tinto intenso de Monastrell cultivada sob o sol forte de Jumilla, no sudeste da Espanha. Por causa do rótulo prateado, também é chamado de “Silver Label”.",
    quiz: [
      { q: "O que significa “12 Meses” em Juan Gil 12 Meses?", a: "Amadureceu 12 meses em barrica", x: ["As videiras têm 12 meses", "É lançado 12 meses após a colheita", "Mistura uvas de 12 vinhedos"] },
    ],
  },
  ib_ermita: {
    fact: "Um dos vinhos mais caros da Espanha, feito com Garnacha de velhas vinhas nas encostas íngremes de xisto (llicorella) de Gratallops.",
    quiz: [
      { q: "Em que família de vinho da Rioja Álvaro Palacios nasceu e cresceu?", a: "Palacios Remondo", x: ["Marqués de Riscal", "Vega Sicilia", "López de Heredia"] },
    ],
  },
  ib_closmogador: {
    fact: "Vinícola fundada por um dos pioneiros que chegaram ao decadente Priorat no fim dos anos 1980 e reergueram a região. Usa Garnacha e Cariñena de vinhas velhas.",
    quiz: [
      { q: "Quem fundou o Clos Mogador e liderou o renascimento do Priorat?", a: "René Barbier", x: ["Peter Sisseck", "Mariano García", "Alejandro Fernández"] },
    ],
  },
  ib_closerasmus: {
    fact: "Vinho cult do Priorat, feito sobretudo com Garnacha nos terraços íngremes de Gratallops. A produção é pequeníssima.",
    quiz: [
      { q: "Que enóloga fundou o Clos Erasmus?", a: "Daphne Glorian", x: ["Marisol Bueno", "Virginie Saverys", "Maria Teresa Mascarello"] },
    ],
  },
  ib_masplana: {
    fact: "Obra-prima da Torres, feita por Miguel A. Torres com Cabernet Sauvignon de um único vinhedo no Penedès. Mostrou ao mundo o potencial dos tintos espanhóis.",
    quiz: [
      { q: "Que resultado a safra 1970 obteve na “Olimpíada do Vinho” de Paris, em 1979?", a: "1º lugar, à frente de grandes nomes de Bordeaux", x: ["2º lugar, atrás do Latour", "Desclassificação por suspeita de fraude", "1º lugar na categoria de brancos"] },
      { q: "Qual era o antigo nome do Torres Mas La Plana?", a: "Gran Coronas Black Label", x: ["Sangre de Toro Reserva", "Viña Sol Gran Reserva", "Torres Imperial"] },
    ],
  },
  ib_sangredetoro: {
    fact: "Tinto campeão de vendas da Torres, lançado em 1954. Feito com Garnacha e Cariñena, é macio e frutado.",
    quiz: [
      { q: "O que vem pendurado no gargalo do Sangre de Toro?", a: "Um pequeno touro de plástico", x: ["Uma fita vermelha", "Um mini chapéu de toureiro", "Uma bolinha de cortiça"] },
      { q: "O que significa o nome Sangre de Toro?", a: "Sangue de touro", x: ["Sol vermelho", "Coração de toureiro", "Terra sagrada"] },
    ],
  },
  ib_numanthia: {
    fact: "Tinto potente de Toro, feito com velhas vinhas de Tinta de Toro que resistiram à filoxera graças aos solos arenosos.",
    quiz: [
      { q: "De onde vem o nome Numanthia?", a: "De Numância, cidade antiga que resistiu aos romanos até o fim", x: ["De Numa, lendário rei de Roma", "De uma fortaleza erguida pelos cruzados", "Da capital de um reino mouro"] },
      { q: "Que grupo comprou a Numanthia em 2008?", a: "LVMH (Moët Hennessy)", x: ["Pernod Ricard", "Kering", "E&J Gallo"] },
    ],
  },
  ib_senorans: {
    fact: "Grande nome do Albariño criado por Marisol Bueno no Val do Salnés. É considerado um dos brancos emblemáticos de Rías Baixas.",
    quiz: [
      { q: "O que significa “Pazo”, em Pazo de Señoráns?", a: "Antigo solar nobre da Galícia", x: ["Colina de vinhedos", "Armazém do porto", "Jardim de mosteiro"] },
    ],
  },
  ib_martincodax: {
    fact: "Albariño da vinícola fundada em 1986 por viticultores da região de Cambados. As uvas, criadas sob a brisa do Atlântico, dão um sabor fresco.",
    quiz: [
      { q: "De quem vem o nome Martín Códax?", a: "De um trovador galego medieval", x: ["De um capitão da era das navegações", "De um rei de Castela", "Do agricultor que fundou a vinícola"] },
    ],
  },
  ib_codorniu: {
    fact: "Foi na Codorníu que Josep Raventós fez a primeira Cava pelo método champenoise, em 1872. O Anna leva Chardonnay, o que o deixa mais macio.",
    quiz: [
      { q: "Quem é a Anna que dá nome ao Anna de Codorníu?", a: "A herdeira da família Codorníu que se casou com um Raventós", x: ["A padroeira da Catalunha", "Uma rainha da Espanha", "A primeira neta do fundador"] },
      { q: "Que arquiteto do modernismo catalão projetou as adegas da Codorníu?", a: "Josep Puig i Cadafalch", x: ["Antoni Gaudí", "Ricardo Bofill", "Rafael Moneo"] },
    ],
  },
  ib_juvecamps: {
    fact: "Cava safrada emblemática da casa familiar de Sant Sadurní d’Anoia. É um Brut Nature, sem adição de açúcar.",
    quiz: [
      { q: "De onde vem o nome Juvé & Camps?", a: "Dos sobrenomes do casal fundador, Joan Juvé e Teresa Camps", x: ["Dos nomes de duas vilas", "Dos apelidos de dois amigos fundadores", "Dos nomes de dois vinhedos"] },
    ],
  },
  ib_gramona: {
    fact: "O espumante de longo amadurecimento emblemático da Gramona, que passa muitos anos sobre as borras. A Xarel·lo lhe dá força e profundidade.",
    quiz: [
      { q: "Que denominação de espumante a Gramona criou com outros produtores em 2019, ao deixar a Cava?", a: "Corpinnat", x: ["Clàssic Penedès", "Franciacorta", "Crémant de Catalunya"] },
    ],
  },
  ib_bristolcream: {
    fact: "Cream sherry da Harveys, casa nascida em Bristol, na Inglaterra, em 1796. Mistura vários Jerez para um sabor doce e macio.",
    quiz: [
      { q: "De que frase vem o nome Harveys Bristol Cream?", a: "De uma senhora que disse: “se o Bristol Milk é leite, este é creme”", x: ["De uma fábrica de leite no porto de Bristol", "Do apelido da filha do fundador", "De um título dado pela rainha"] },
      { q: "Qual é a cor-símbolo da garrafa do Harveys Bristol Cream?", a: "Azul-escuro", x: ["Transparente", "Verde-escuro", "Preto"] },
    ],
  },
  ib_lustau: {
    fact: "Jerez doce que mistura Oloroso com Pedro Ximénez e amadurece no canto mais quente e úmido da adega.",
    quiz: [
      { q: "De onde vem o nome “East India Solera”?", a: "Recria o Jerez que amadurecia nas viagens de navio às Índias Orientais", x: ["É um Jerez com especiarias indianas", "Vem de uma adega fundada pela Companhia das Índias Orientais", "É feito com uvas indianas"] },
      { q: "Nos Jerez “almacenista” que a Lustau engarrafou e divulgou, quem é o almacenista?", a: "Um pequeno armazenista que só envelhece o Jerez", x: ["Um marinheiro que transportava Jerez", "Um mestre das leveduras de flor", "Um artesão de rolhas"] },
    ],
  },
  ib_inocente: {
    fact: "Raro Fino fermentado em barril de madeira, com uvas de um único vinhedo. O longo amadurecimento sob o flor lhe dá sabor profundo.",
    quiz: [
      { q: "De que famoso vinhedo (pago) de Jerez vêm as uvas do Valdespino Inocente?", a: "Macharnudo", x: ["Balbaína", "Añina", "Carrascal"] },
    ],
  },
  ib_osborne: {
    fact: "Fino da Osborne, de El Puerto de Santa María, no litoral atlântico. Amadurecido sob o flor, é leve e salino.",
    quiz: [
      { q: "Qual é a forma do enorme painel-símbolo da Osborne à beira das estradas espanholas?", a: "Um touro negro", x: ["Uma bailarina de flamenco", "Um cacho de uvas dourado", "Um cavalo branco"] },
      { q: "De que país era Thomas Osborne Mann, que fundou a Osborne em 1772?", a: "Inglaterra", x: ["França", "Países Baixos", "Itália"] },
    ],
  },
  ib_noe: {
    fact: "Jerez de sobremesa negro e denso, feito com Pedro Ximénez seca ao sol e envelhecido por muitos anos.",
    quiz: [
      { q: "O que garante a sigla “VORS” em Jerez como o González Byass Noé?", a: "Jerez muito velho, com média de mais de 30 anos", x: ["Jerez safrado, de uma só colheita", "Jerez com certificação orgânica", "Jerez de uvas botritizadas"] },
    ],
  },
  ib_laguita: {
    fact: "Manzanilla, o Jerez feito apenas em Sanlúcar de Barrameda, na foz do Guadalquivir. A brisa do mar engrossa o flor e dá um sabor salino.",
    quiz: [
      { q: "De que gíria vem o nome La Guita?", a: "Dinheiro vivo", x: ["Guitarra", "Brisa do mar", "Barrilzinho"] },
    ],
  },
  ib_alvear: {
    fact: "Vinho doce feito com Pedro Ximénez seca ao sol pela Alvear, grande casa de Montilla-Moriles, ao sul de Córdoba.",
    quiz: [
      { q: "O que significa o “1927” do Alvear PX Solera 1927?", a: "O ano em que esta solera começou", x: ["O ano da colheita", "O ano de fundação da Alvear", "O ano do engarrafamento"] },
    ],
  },
  ib_lancers: {
    fact: "Rosé português criado em 1944 para o mercado americano. É famoso pela garrafa opaca, parecida com um jarro de cerâmica.",
    quiz: [
      { q: "Que quadro de Velázquez inspirou o nome Lancers?", a: "A Rendição de Breda (As Lanças)", x: ["As Meninas", "As Fiandeiras", "O Triunfo de Baco"] },
    ],
  },
  ib_barcavelha: {
    fact: "Vinho lendário que abriu no Douro, terra do Porto, o caminho dos grandes tintos não fortificados. Criado em 1952, só é lançado em anos excepcionais.",
    quiz: [
      { q: "Que enólogo criou o Barca Velha?", a: "Fernando Nicolau de Almeida", x: ["Dirk Niepoort", "José Maria da Fonseca", "Adriano Ramos Pinto"] },
      { q: "O que significa o nome Barca Velha?", a: "Barco antigo", x: ["Lavrador idoso", "Rio azul", "Primeira colheita"] },
    ],
  },
  ib_valemeao: {
    fact: "Quinta situada numa ampla curva do rio no Douro Superior. Por muito tempo, as uvas do Barca Velha vieram dali.",
    quiz: [
      { q: "Que lendária mulher do Douro criou a Quinta do Vale Meão em 1877?", a: "Dona Antónia Ferreira", x: ["Giulia Colbert Falletti", "Marisol Bueno", "Anna de Codorníu"] },
    ],
  },
  ib_crasto: {
    fact: "Tinto da quinta da família Roquette à beira do Douro, feito com uvas de vinhas velhas onde várias castas nativas crescem misturadas.",
    quiz: [
      { q: "Que atração da Quinta do Crasto é famosa entre fotógrafos?", a: "A piscina de borda infinita sobre o rio Douro", x: ["Um teleférico sobre os vinhedos", "Uma adega flutuante no rio", "Um mirante sobre muralhas medievais"] },
    ],
  },
  ib_esporao: {
    fact: "O tinto emblemático da Herdade do Esporão, grande propriedade no Alentejo, sul de Portugal. Dentro dela ergue-se uma torre medieval.",
    quiz: [
      { q: "O que caracteriza o rótulo do Esporão Reserva?", a: "Traz a obra de um artista diferente a cada ano", x: ["Sempre o mesmo brasão de família", "É gravado direto na garrafa, sem rótulo", "É feito de casca de cortiça"] },
    ],
  },
  ib_peramanca: {
    fact: "O maior tinto do Alentejo, lançado só em anos excepcionais pela Fundação Eugénio de Almeida, de Évora.",
    quiz: [
      { q: "De que expressão vem o nome Pêra-Manca?", a: "Pedra que balança", x: ["Pomar de peras", "Monge manco", "Torre branca"] },
      { q: "Segundo a lenda, em que viagem o Pêra-Manca foi levado em 1500?", a: "Na viagem de Cabral que chegou ao Brasil", x: ["Na viagem de Vasco da Gama à Índia", "Na volta ao mundo de Fernão de Magalhães", "Na primeira viagem de Colombo"] },
    ],
  },
  ib_casalgarcia: {
    fact: "Branco leve e fresco do norte de Portugal, lançado em 1939. Com um leve frisante e pouco álcool, é ótimo para beber sem compromisso.",
    quiz: [
      { q: "O que indica o “Verde” de Vinho Verde, categoria do Casal Garcia?", a: "Vinho jovem e fresco", x: ["É feito com uvas verdes", "É engarrafado em vidro verde", "Tem aroma de algas"] },
    ],
  },
  ib_taylors20: {
    fact: "Porto Tawny amadurecido lentamente por muitos anos em pequenos barris de madeira, oxidando até ganhar cor âmbar e aromas de frutos secos e caramelo.",
    quiz: [
      { q: "O que significa “20 anos” no Taylor’s 20 Year Old Tawny?", a: "A idade média do corte de Portos de vários anos", x: ["Um Porto de um único ano, exatamente de 20 anos atrás", "Uvas de videiras de 20 anos", "20 anos de amadurecimento na garrafa"] },
    ],
  },
  ib_sixgrapes: {
    fact: "Reserve Ruby feito com uvas das quintas que produzem os Portos Vintage. Com fruta intensa, é querido como porta de entrada para o Porto.",
    quiz: [
      { q: "De onde vem o nome Graham’s Six Grapes?", a: "Do símbolo de seis cachos que marcava os Portos de nível Vintage", x: ["Da mistura de seis castas", "Da mistura de seis anos", "Dos seis filhos do fundador"] },
    ],
  },
  ib_grahamsvintage: {
    fact: "O Porto Vintage da Graham’s, “declarado” só em anos excepcionais. Tem como base as uvas da Quinta dos Malvedos, no Douro.",
    quiz: [
      { q: "Qual era o negócio original dos irmãos Graham, que fundaram a Graham’s em 1820?", a: "Comércio de tecidos", x: ["Navegação", "Banco", "Produção de cortiça"] },
      { q: "Que família de Porto é dona da Graham’s desde 1970?", a: "Família Symington", x: ["Família Sandeman", "Família Niepoort", "Família Guimaraens"] },
    ],
  },
  ib_bin27: {
    fact: "O Porto Reserve da Fonseca, casa de Porto comandada por gerações pela família Guimaraens. Tem sabor intenso de frutas escuras.",
    quiz: [
      { q: "Para quem era originalmente o Fonseca Bin 27, antes de ser comercializado em 1972?", a: "Um Porto misturado para a família e os amigos beberem", x: ["Fornecimento à Casa Real britânica", "Ração de marinheiros", "Missas do Vaticano"] },
    ],
  },
  ib_dows: {
    fact: "O Porto Vintage da Dow’s, casa comandada pela família Symington. É conhecido pelo final mais seco que o de outros Portos.",
    quiz: [
      { q: "Que quinta do Douro é a base do Dow’s Vintage Port?", a: "Quinta do Bomfim", x: ["Quinta do Noval", "Quinta de Vargellas", "Quinta dos Malvedos"] },
    ],
  },
  ib_sandeman: {
    fact: "Casa de Porto e Jerez fundada em Londres em 1790. A silhueta de capa preta do “Don” é o símbolo do rótulo.",
    quiz: [
      { q: "O que veste a silhueta preta do “Don”, da Sandeman?", a: "Capa de estudante português e chapéu espanhol de abas largas", x: ["Kilt escocês e boina", "Farda da Marinha britânica e tricórnio", "Hábito e capuz de monge"] },
      { q: "De onde era George Sandeman, fundador da Sandeman?", a: "Escócia", x: ["Portugal", "Países Baixos", "Irlanda"] },
    ],
  },
  ib_cockburns: {
    fact: "O Porto Reserve emblemático da Cockburn’s, casa fundada em 1815. Hoje é comandada pela família Symington.",
    quiz: [
      { q: "O que é peculiar na pronúncia inglesa de Cockburn’s?", a: "O “ck” é mudo e soa como “Co-burn”", x: ["Lê-se tudo: “Cock-burn”", "O “burn” é mudo e soa só “Cock”", "Pronuncia-se à portuguesa: “Cok-bur-ne”"] },
    ],
  },
  ib_nacional: {
    fact: "Lendário Porto Vintage produzido só num pequeno vinhedo dentro da Quinta do Noval. A safra 1931 é considerada o maior Porto da história.",
    quiz: [
      { q: "O que as videiras do Quinta do Noval Nacional têm de especial?", a: "Crescem com raízes próprias, sem enxerto", x: ["São todas videiras brancas com mais de 100 anos", "Crescem em estufa", "São replantadas todo ano"] },
      { q: "Que empresa do grupo segurador francês comprou a Quinta do Noval em 1993?", a: "AXA Millésimes", x: ["LVMH", "Kering", "Pernod Ricard"] },
    ],
  },
  ib_niepoort: {
    fact: "Casa familiar de Porto fundada em 1842. Dirk Niepoort, da quinta geração, também ficou famoso pelos vinhos de mesa do Douro.",
    quiz: [
      { q: "De que país vem a família Niepoort?", a: "Países Baixos", x: ["Escócia", "Alemanha", "Dinamarca"] },
      { q: "Onde o Porto “Garrafeira” da Niepoort amadurece longamente depois do barril?", a: "Em grandes garrafões de vidro (demijohns)", x: ["Em ânforas enterradas", "Em tanques de ferro no fundo do mar", "Em tanques de mármore"] },
    ],
  },
  ib_warres: {
    fact: "O Warrior é o Porto Reserve da Warre’s, considerada uma das marcas de Porto mais antigas. Hoje é comandada pela família Symington.",
    quiz: [
      { q: "Qual é o significado de 1670, ano de fundação da Warre’s?", a: "Foi a primeira empresa britânica de Porto em Portugal", x: ["Foi o ano em que se adicionou aguardente ao Porto pela primeira vez", "Foi o ano da demarcação do Douro", "Foi o ano da primeira declaração de Vintage"] },
    ],
  },
  ib_ramospinto: {
    fact: "Porto Tawny da casa fundada por Adriano Ramos Pinto em 1880. É feito com uvas da Quinta do Bom Retiro, no Douro.",
    quiz: [
      { q: "O que chamou a atenção na Ramos Pinto no início do século XX?", a: "Cartazes publicitários ousados em estilo art nouveau", x: ["Uma linha de trem exclusiva para o Porto", "O maior barril de carvalho do mundo", "Um mapa em folha de ouro nas garrafas"] },
      { q: "Que casa de Champagne comprou a Ramos Pinto em 1990?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  ib_blandys: {
    fact: "Casa de vinho da Madeira fundada em 1811 e mantida pela mesma família desde então. O Malmsey (Malvasia) é o estilo mais doce de Madeira.",
    quiz: [
      { q: "Como se chama o método tradicional de amadurecer lentamente a Madeira, como a Blandy’s, aquecida por anos em sótãos ensolarados?", a: "Canteiro", x: ["Solera", "Appassimento", "Charmat"] },
      { q: "De que país era John Blandy, fundador da Blandy’s?", a: "Inglaterra", x: ["Portugal", "Espanha", "França"] },
    ],
  },
  ib_cossart: {
    fact: "Uma das casas de vinho mais antigas da Madeira. O Bual é um estilo de Madeira moderadamente doce, com acidez viva.",
    quiz: [
      { q: "Em que ano a Cossart Gordon abriu as portas na Madeira?", a: "1745", x: ["1645", "1845", "1945"] },
    ],
  },
};

export default T;
