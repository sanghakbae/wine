import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  ib_sorisanlorenzo: {
    producer: "Gaja",
    fact: "Gaja’s first single-vineyard wine, launched in 1967. For a while it was released as “Langhe Nebbiolo” with a little Barbera, before returning to Barbaresco from the 2013 vintage.",
    quiz: [
      { q: "What does “Sorì” in Gaja Sorì San Lorenzo mean in Piedmontese dialect?", a: "A sunny south-facing slope", x: ["A foggy valley", "A churchyard", "An old vine"] },
    ],
  },
  ib_monfortino: {
    producer: "Giacomo Conterno",
    fact: "Giacomo Conterno’s Barolo Riserva from Serralunga grapes. Released only after many years in large wooden casks, it is the summit of traditional Barolo.",
    quiz: [
      { q: "In which years is Monfortino Barolo Riserva made?", a: "Only in outstanding years", x: ["Every single year", "Exactly every other year", "Only in leap years"] },
      { q: "Which Serralunga vineyard, bought by Giovanni Conterno, supplies Monfortino’s grapes?", a: "Cascina Francia", x: ["Monprivato", "Brunate", "Cannubi"] },
    ],
  },
  ib_giacosa: {
    producer: "Bruno Giacosa",
    fact: "A Barolo from the Falletto vineyard in Serralunga, bought by Bruno Giacosa, the Nebbiolo master who first built his fame as a négociant buying grapes.",
    quiz: [
      { q: "What label colour does Bruno Giacosa reserve for riservas from the very best years?", a: "Red", x: ["Black", "Gold", "Blue"] },
    ],
  },
  ib_bartolomascarello: {
    producer: "Bartolo Mascarello",
    fact: "A symbol of tradition that clung to the old way of blending several vineyards into a single Barolo. After Bartolo died, his daughter Maria Teresa took over.",
    quiz: [
      { q: "Which slogan did Bartolo Mascarello famously write on a label he drew himself?", a: "No Barrique, No Berlusconi", x: ["Terroir or Nothing", "Viva il Nebbiolo", "Slow Wine, Slow Life"] },
    ],
  },
  ib_monprivato: {
    producer: "Giuseppe Mascarello e Figlio",
    fact: "The flagship of the Mascarello family, who own almost all of the Monprivato vineyard in Castiglione Falletto. It is considered an elegant, fragrant traditional Barolo.",
    quiz: [
      { q: "Which riserva does Giuseppe Mascarello make only in good years from the best plot within Monprivato?", a: "Ca' d'Morissio", x: ["Monfortino", "Bricco Rocche", "La Poja"] },
    ],
  },
  ib_vietti: {
    producer: "Vietti",
    fact: "A great Castiglione Falletto house which, under Alfredo Currado, was an early pioneer of single-vineyard Barolo. The American Krause family acquired it in 2016.",
    quiz: [
      { q: "Which Piedmont white grape did Alfredo Currado of Vietti rescue from near-extinction?", a: "Arneis", x: ["Cortese", "Moscato", "Timorasso"] },
    ],
  },
  ib_piocesare: {
    producer: "Pio Cesare",
    fact: "A family winery that still makes wine in a cellar in Alba’s old town, where Roman walls remain. The founder’s descendants run it generation after generation.",
    quiz: [
      { q: "In what year did Cesare Pio found Pio Cesare in Alba?", a: "1881", x: ["1781", "1931", "1971"] },
    ],
  },
  ib_marchesibarolo: {
    producer: "Marchesi di Barolo",
    fact: "A winery continuing the old cellars of the Falletti marquises in the village of Barolo. It is said to be where Barolo became a long-aged dry red.",
    quiz: [
      { q: "In the Marchesi di Barolo story, how many barrels did Marchesa Juliette Colbert Falletti send to King Carlo Alberto?", a: "325 (one for each day except Lent)", x: ["12 (one a month)", "52 (one a week)", "1,000"] },
    ],
  },
  ib_fontanafredda: {
    producer: "Fontanafredda",
    fact: "A winery that began on a royal estate in Serralunga d’Alba. The Count of Mirafiore, the king’s son by his mistress, launched serious winemaking there.",
    quiz: [
      { q: "Which king bought the Fontanafredda estate and gave it to his mistress, “Bela Rosin”?", a: "Vittorio Emanuele II", x: ["Umberto I", "Carlo Alberto", "Napoleon III"] },
    ],
  },
  ib_scavino: {
    producer: "Paolo Scavino",
    fact: "A family winery in Castiglione Falletto. Its modern, small-barrel Barolo helped lead the “Barolo Boys” movement of the 1980s and 90s.",
    quiz: [
      { q: "Which winemaker leads Paolo Scavino and made its name with modern Barolo?", a: "Enrico Scavino", x: ["Elio Altare", "Roberto Voerzio", "Bruno Giacosa"] },
    ],
  },
  ib_ceretto: {
    producer: "Ceretto",
    fact: "A great Alba house built by brothers Bruno and Marcello Ceretto. In La Morra’s Brunate vineyard stands the family’s colourful “Barolo Chapel”.",
    quiz: [
      { q: "Which artists did the Ceretto family commission to paint the little chapel in the Brunate vineyard?", a: "Sol LeWitt and David Tremlett", x: ["Keith Haring and Andy Warhol", "Damien Hirst", "Jeff Koons"] },
    ],
  },
  ib_altare: {
    producer: "Elio Altare",
    fact: "Leader of the “Barolo Boys”, who brought short maceration and small new oak barrels to La Morra and pioneered modern Barolo. It led to a bitter feud with his father.",
    quiz: [
      { q: "What did Elio Altare destroy with a chainsaw in pursuit of his new methods?", a: "His father’s old large casks (botti)", x: ["Old trees in the vineyard", "The winery roof", "An old grape press"] },
    ],
  },
  ib_voerzio: {
    producer: "Roberto Voerzio",
    fact: "A single-vineyard Barolo from Roberto Voerzio of La Morra. Cerequio is a renowned vineyard straddling the border of La Morra and Barolo.",
    quiz: [
      { q: "For what vineyard practice is Roberto Voerzio famous?", a: "Drastic bunch-thinning for extremely low yields", x: ["Harvesting the grapes frozen", "Watering every day", "Machine harvesting only"] },
    ],
  },
  ib_produttori: {
    producer: "Produttori del Barbaresco",
    fact: "A cooperative of growers in the village of Barbaresco. In good years it releases separate riservas from nine vineyards, including Asili and Rabajà.",
    quiz: [
      { q: "Who founded Produttori del Barbaresco with local farmers in 1958?", a: "The village parish priest", x: ["The King of Italy", "Angelo Gaja", "A British wine merchant"] },
    ],
  },
  ib_braida: {
    producer: "Braida di Giacomo Bologna",
    fact: "The signature wine of Giacomo Bologna, who lifted Barbera from humble table wine to fine wine. It debuted with the 1982 vintage.",
    quiz: [
      { q: "What did Giacomo Bologna of Braida first try with Bricco dell'Uccellone that caused a stir?", a: "Ageing Barbera in small new oak barriques", x: ["Making sparkling Barbera", "Drying the grapes", "Blending with white grapes"] },
    ],
  },
  ib_cascinetta: {
    producer: "Vietti",
    fact: "A sweet, gently sparkling Moscato d’Asti at around 5% alcohol. Fermentation is stopped midway, keeping the grape’s sweetness and floral aroma.",
    quiz: [
      { q: "What do Italians call lightly sparkling wines like Vietti Moscato d'Asti Cascinetta?", a: "Frizzante", x: ["Passito", "Ripasso", "Recioto"] },
    ],
  },
  ib_martiniasti: {
    producer: "Martini & Rossi",
    fact: "A sweet sparkling wine made by fermenting Moscato grapes in one go in large sealed tanks to trap the bubbles. Light, at around 7% alcohol.",
    quiz: [
      { q: "For which drink is Martini & Rossi, maker of Martini Asti, world-famous?", a: "Vermouth", x: ["Grappa", "Limoncello", "Sambuca"] },
      { q: "In what year did Martini & Rossi open in Turin?", a: "1863", x: ["1763", "1923", "1963"] },
    ],
  },
  ib_ganciaasti: {
    producer: "Gancia",
    fact: "A pioneer of Italian spumante based in Canelli, in the Asti area. Founder Carlo Gancia is called “the father of Italian spumante”.",
    quiz: [
      { q: "Which French city did Gancia founder Carlo Gancia go to in order to learn sparkling winemaking?", a: "Reims", x: ["Bordeaux", "Dijon", "Lyon"] },
    ],
  },
  ib_ornellaia: {
    producer: "Tenuta dell'Ornellaia",
    fact: "A Super Tuscan made from Bordeaux grapes on the coastal hills of Bolgheri. After several changes of owner, it now belongs to the Frescobaldi family.",
    quiz: [
      { q: "Who founded Ornellaia in 1981?", a: "Lodovico Antinori", x: ["Piero Antinori", "Mario Incisa della Rocchetta", "Angelo Gaja"] },
      { q: "What is Ornellaia’s project in which an artist designs a special label each year?", a: "Vendemmia d’Artista", x: ["Arte in Bottiglia", "Biennale del Vino", "Galleria Bolgheri"] },
    ],
  },
  ib_masseto: {
    producer: "Tenuta dell'Ornellaia (Frescobaldi)",
    fact: "One of Italy’s most expensive reds, made only from Merlot from a single vineyard on a Bolgheri hill. It debuted with the 1986 vintage and now has its own dedicated cellar.",
    quiz: [
      { q: "What special soil is the Masseto vineyard known for?", a: "Bluish clay", x: ["Black volcanic ash", "White chalky limestone", "Red sandstone"] },
    ],
  },
  ib_tignanello: {
    producer: "Marchesi Antinori",
    fact: "A Super Tuscan from the Antinori family’s Tignanello vineyard. Its debut with the 1971 vintage changed the course of Italian wine.",
    quiz: [
      { q: "Why was Tignanello seen as radical in the 1970s?", a: "It aged Sangiovese in small barrels and left out white grapes", x: ["Its grapes were dried to make it sweet", "It was the first to use a screw cap", "It blended red into white wine"] },
    ],
  },
  ib_solaia: {
    producer: "Marchesi Antinori",
    fact: "A Cabernet Sauvignon-led Super Tuscan that Antinori makes from the vineyard right next to Tignanello. First released with the 1978 vintage.",
    quiz: [
      { q: "What honour did Solaia 1997 receive, a first for an Italian wine?", a: "No. 1 in Wine Spectator’s Top 100 (Wine of the Year)", x: ["Robert Parker’s first 100 points", "Official Vatican Mass wine", "A British royal warrant"] },
      { q: "What does the name “Solaia” mean?", a: "The sunny place", x: ["Salty ground", "The lone tree", "The walled vineyard"] },
    ],
  },
  ib_guadoaltasso: {
    producer: "Marchesi Antinori",
    fact: "The flagship red of the Antinori family’s estate in Bolgheri. It debuted with the 1990 vintage.",
    quiz: [
      { q: "What does the name “Guado al Tasso” mean?", a: "The badger’s ford", x: ["The fox’s hill", "The wolf’s spring", "The deer’s wood"] },
    ],
  },
  ib_casanovadineri: {
    producer: "Casanova di Neri",
    fact: "A family winery founded in Montalcino by the Neri family in the early 1970s. Tenuta Nuova is a dark, powerful Brunello from their southern vineyards.",
    quiz: [
      { q: "What honour did Casanova di Neri Tenuta Nuova 2001 receive in 2006?", a: "No. 1 Wine of the Year from Wine Spectator", x: ["An Italian presidential medal", "The grand prize at the Venice Biennale", "Official Vatican Mass wine"] },
    ],
  },
  ib_soldera: {
    producer: "Gianfranco Soldera",
    fact: "A legendary Sangiovese made by Gianfranco Soldera in Montalcino in large Slavonian oak casks. After breaking with the Brunello consortium, it is released as Toscana IGT.",
    quiz: [
      { q: "What happened in the Case Basse cellar in 2012?", a: "A vengeful ex-employee opened the casks and poured out several vintages", x: ["A flood submerged the cellar", "Lightning started a fire", "An entire vintage was stolen"] },
    ],
  },
  ib_poggiodisotto: {
    producer: "Poggio di Sotto",
    fact: "A winery in Castelnuovo dell’Abate, southeast of Montalcino. Long maceration and ageing in large casks give a delicate, traditional Brunello.",
    quiz: [
      { q: "Who founded Poggio di Sotto and made its name with traditional Brunello?", a: "Piero Palmucci", x: ["Gianfranco Soldera", "Angelo Gaja", "Paolo De Marchi"] },
    ],
  },
  ib_banfi: {
    producer: "Castello Banfi",
    fact: "A winery that built a vast estate south of Montalcino. The estate includes the medieval castle of Poggio alle Mura.",
    quiz: [
      { q: "Who founded Castello Banfi in Montalcino in 1978?", a: "The Italian-American Mariani brothers", x: ["The Antinori family", "France’s Rothschild family", "A British royal wine merchant"] },
    ],
  },
  ib_ilpoggione: {
    producer: "Il Poggione",
    fact: "One of the oldest estates in the area, at Sant’Angelo in Colle south of Montalcino. One family has tended it since the late 19th century.",
    quiz: [
      { q: "Which family has owned Il Poggione for generations?", a: "The Franceschi family", x: ["The Biondi-Santi family", "The Frescobaldi family", "The Antinori family"] },
    ],
  },
  ib_coldorcia: {
    producer: "Col d'Orcia",
    fact: "As the name suggests, a large Montalcino estate on a hill overlooking the Orcia river. Its extensive vineyards are farmed organically.",
    quiz: [
      { q: "The Marone Cinzano family bought Col d'Orcia in 1973. Which drink first made their name?", a: "Cinzano vermouth", x: ["Campari", "Aperol", "Fernet-Branca"] },
    ],
  },
  ib_castellodiama: {
    producer: "Castello di Ama",
    fact: "A great Chianti Classico estate in the tiny hamlet of Ama in Gaiole in Chianti. It also made its name with “L’Apparita”, a Merlot.",
    quiz: [
      { q: "What did Castello di Ama bring into its vineyards and villa from around 2000, drawing attention?", a: "Installations by world-famous contemporary artists", x: ["A museum of medieval knights", "A wine spa resort", "A large solar power plant"] },
    ],
  },
  ib_flaccianello: {
    producer: "Fontodi",
    fact: "Fontodi’s flagship, made from 100% Sangiovese by Giovanni Manetti in Panzano. It debuted with the 1981 vintage.",
    quiz: [
      { q: "What is the nickname of the round, amphitheatre-like slope in Panzano where Flaccianello grows?", a: "Conca d’Oro (the golden basin)", x: ["Val d’Orcia", "Colli Senesi", "Monte Amiata"] },
    ],
  },
  ib_fontalloro: {
    producer: "Fèlsina",
    fact: "A 100% Sangiovese from Fèlsina in Castelnuovo Berardenga. It uses grapes from vineyards straddling the Chianti Classico and Colli Senesi border.",
    quiz: [
      { q: "Who bought the Fèlsina estate in 1966?", a: "Domenico Poggiali", x: ["Piero Antinori", "Sergio Manetti", "Gianfranco Soldera"] },
    ],
  },
  ib_cepparello: {
    producer: "Isole e Olena",
    fact: "The 100% Sangiovese that made Paolo De Marchi’s name. In 2022 the estate was acquired by France’s EPI group, owner of Biondi-Santi.",
    quiz: [
      { q: "Where does the winery name Isole e Olena come from?", a: "It joins two small hamlets, Isole and Olena", x: ["The founder’s two daughters", "Islands and olive trees", "An old monastery’s name"] },
    ],
  },
  ib_ducaleoro: {
    producer: "Ruffino",
    fact: "Ruffino’s top Chianti Classico, wrapped in a gold label. Ruffino is an old Tuscan house founded by two cousins in 1877.",
    quiz: [
      { q: "Who is the “Ducale” (ducal) in Ruffino Riserva Ducale named after?", a: "The Duke of Aosta, a fan of Ruffino wine", x: ["The Medici Grand Duke", "The Duke of Milan", "The Doge of Venice"] },
    ],
  },
  ib_nipozzano: {
    producer: "Frescobaldi",
    fact: "A Chianti Rufina Riserva from vineyards around the medieval castle of Nipozzano in Rufina, east of Florence. It is the Frescobaldi family’s flagship wine.",
    quiz: [
      { q: "For how long has the Frescobaldi family been making wine in Tuscany?", a: "More than 700 years", x: ["About 50 years", "About 150 years", "About 300 years"] },
    ],
  },
  ib_luce: {
    producer: "Luce della Vite (Frescobaldi)",
    fact: "A Montalcino wine blending Sangiovese and Merlot. The name means “light”, and a radiant sun is drawn on the label.",
    quiz: [
      { q: "Which two families created Luce, first released with the 1993 vintage?", a: "Frescobaldi and Robert Mondavi", x: ["Antinori and Rothschild", "Gaja and Mondavi", "Frescobaldi and Rothschild"] },
    ],
  },
  ib_serrenuove: {
    producer: "Tenuta dell'Ornellaia",
    fact: "Ornellaia’s second wine, which debuted with the 1997 vintage. It is made to be enjoyed younger than the grand vin.",
    quiz: [
      { q: "Which family now owns Ornellaia, maker of Le Serre Nuove?", a: "Frescobaldi", x: ["Antinori", "Gaja", "Marzotto"] },
    ],
  },
  ib_pergoletorte: {
    producer: "Montevertine",
    fact: "A legendary 100% Sangiovese for which Sergio Manetti left the Chianti Classico name behind. It debuted with the 1977 vintage.",
    quiz: [
      { q: "What image changes with each vintage on the Le Pergole Torte label?", a: "A woman’s portrait by painter Alberto Manfredi", x: ["An engraving of a church", "A watercolour of grapes", "The family crest"] },
    ],
  },
  ib_avignonesi: {
    producer: "Avignonesi",
    fact: "Montepulciano’s leading winery. Since 2009 it has been run by Belgian-born Virginie Saverys, who converted it to biodynamic farming.",
    quiz: [
      { q: "Which Tuscan dessert wine made from dried grapes and aged for years is Avignonesi especially famous for?", a: "Vin Santo", x: ["Recioto", "Marsala", "Moscato d’Asti"] },
    ],
  },
  ib_redigaffi: {
    producer: "Tua Rita",
    fact: "A cult 100% Merlot made by Tua Rita in Suvereto on the Tuscan coast. It debuted with the 1994 vintage.",
    quiz: [
      { q: "Where does the winery name “Tua Rita”, maker of Redigaffi, come from?", a: "The name of founder Rita Tua", x: ["The village church", "An old Roman road", "A nearby river"] },
    ],
  },
  ib_villaantinori: {
    producer: "Marchesi Antinori",
    fact: "Antinori’s long-selling Tuscan red, first released in 1928. The label shows the Antinori family villa.",
    quiz: [
      { q: "In what year did the Antinori family join Florence’s winemakers’ guild and begin their wine business?", a: "1385", x: ["1685", "1885", "1935"] },
    ],
  },
  ib_quintarelli: {
    producer: "Giuseppe Quintarelli",
    fact: "A legendary Amarone from Giuseppe Quintarelli, “the master of the Veneto”. Made only in good years and released after long ageing in large casks.",
    quiz: [
      { q: "What is the Amarone-style wine Giuseppe Quintarelli made from dried Cabernet Franc and other grapes?", a: "Alzero", x: ["La Poja", "Costasera", "Ripassa"] },
    ],
  },
  ib_dalforno: {
    producer: "Dal Forno Romano",
    fact: "A cult Amarone made in an ultra-concentrated style by Romano Dal Forno in the Illasi valley, east of Valpolicella. It ages long in new oak.",
    quiz: [
      { q: "Which winemaker was Romano Dal Forno’s greatest influence and mentor in his youth?", a: "Giuseppe Quintarelli", x: ["Angelo Gaja", "Gianfranco Soldera", "Edoardo Valentini"] },
    ],
  },
  ib_allegrini: {
    producer: "Allegrini",
    fact: "An Amarone made for generations by the Allegrini family in Fumane, Valpolicella Classico. A great house that was early to launch single-vineyard wines.",
    quiz: [
      { q: "What is Allegrini’s flagship single-vineyard wine made from 100% Corvina?", a: "La Poja", x: ["Alzero", "Costasera", "Monprivato"] },
    ],
  },
  ib_bertani: {
    producer: "Bertani",
    fact: "A traditional Amarone famous for its long ageing before release. Bertani was one of the pioneers in bottling and selling Amarone early on.",
    quiz: [
      { q: "In what year did the Bertani brothers found their winery in Verona?", a: "1857", x: ["1757", "1907", "1957"] },
    ],
  },
  ib_zenato: {
    producer: "Zenato",
    fact: "Amarone from Zenato, based south of Lake Garda. Founded by Sergio Zenato in 1960, it is also well known for its Lugana white.",
    quiz: [
      { q: "What is Zenato’s wine made by refermenting Valpolicella on the grape skins left over from Amarone?", a: "Ripassa", x: ["La Poja", "Alzero", "Costasera"] },
    ],
  },
  ib_tommasi: {
    producer: "Tommasi",
    fact: "An Amarone made for generations by the Tommasi family in Pedemonte, Valpolicella. The family has run the business for over 100 years since its founding.",
    quiz: [
      { q: "What is the method, used for Tommasi Amarone, of drying harvested grapes for months to concentrate their sugar?", a: "Appassimento", x: ["Solera", "Charmat", "Botrytis"] },
    ],
  },
  ib_santamargherita: {
    producer: "Santa Margherita",
    fact: "In 1961 it made Pinot Grigio as a clear white with no skin contact, sparking a worldwide trend. Count Gaetano Marzotto founded the company in 1935.",
    quiz: [
      { q: "Who is Santa Margherita named after?", a: "The wife of founder Count Marzotto", x: ["The patron saint of Venice", "The founder’s eldest daughter", "A nearby church"] },
    ],
  },
  ib_mionetto: {
    producer: "Mionetto",
    fact: "A great Prosecco house based in Valdobbiadene. Second fermentation in large tanks (the Charmat method) keeps its fruit fresh.",
    quiz: [
      { q: "What is the signature colour of the Mionetto Prosecco Brut label?", a: "Orange", x: ["Black", "Blue", "Pink"] },
      { q: "In what year did Francesco Mionetto found Mionetto in Valdobbiadene?", a: "1887", x: ["1787", "1937", "1987"] },
    ],
  },
  ib_lamarca: {
    producer: "La Marca",
    fact: "A cooperative brand uniting thousands of growers around Treviso. It is one of the best-selling Proseccos in the US.",
    quiz: [
      { q: "What is the distinctive colour of the La Marca Prosecco label?", a: "Pale turquoise (Tiffany blue)", x: ["Orange", "Black", "Deep red"] },
    ],
  },
  ib_cartizze: {
    producer: "Bisol",
    fact: "A Prosecco from Cartizze, the most famous hillside zone of Valdobbiadene. The Bisol family has grown grapes in the area since the 16th century.",
    quiz: [
      { q: "Which family, famous for the Trento sparkling wine “Ferrari”, acquired Bisol in 2014?", a: "The Lunelli family", x: ["The Antinori family", "The Marzotto family", "The Frescobaldi family"] },
    ],
  },
  ib_ninofranco: {
    producer: "Nino Franco",
    fact: "The flagship Prosecco of the Nino Franco family winery in Valdobbiadene. Third-generation Primo Franco is credited with raising Prosecco’s quality.",
    quiz: [
      { q: "In what year did Nino Franco open in Valdobbiadene?", a: "1919", x: ["1819", "1969", "1999"] },
    ],
  },
  ib_tunina: {
    producer: "Jermann",
    fact: "Friuli’s signature white blend, made by Silvio Jermann from several white grapes. Launched in the 1970s, it raised the standing of Italian whites.",
    quiz: [
      { q: "Which Jermann Chardonnay was named after inspiration from a U2 song?", a: "Dreams", x: ["Vintage Tunina", "Terre Alte", "Rarità"] },
    ],
  },
  ib_gravner: {
    producer: "Gravner",
    fact: "An amber white made by Josko Gravner in Oslavia, on the Slovenian border, by soaking Ribolla Gialla on its skins for months. He is seen as a pioneer of “orange wine”.",
    quiz: [
      { q: "What fermentation and ageing vessel did Josko Gravner famously adopt?", a: "Georgian clay jars buried in the ground (qvevri)", x: ["Stainless-steel pressure tanks", "Concrete egg tanks", "Acacia-wood barrels"] },
    ],
  },
  ib_terrealte: {
    producer: "Livio Felluga",
    fact: "Friuli’s flagship white, blending three grapes from the Rosazzo hills. It deepens the longer it ages.",
    quiz: [
      { q: "What is drawn on Livio Felluga wine labels?", a: "An old map of the vineyard hills", x: ["A Venetian gondola", "The family crest and a lion", "A farmer picking grapes"] },
    ],
  },
  ib_terlano: {
    producer: "Cantina Terlano",
    fact: "An Alto Adige cooperative founded by growers in 1893. It is famous for whites that stay fresh even after decades of ageing.",
    quiz: [
      { q: "What is Cantina Terlano’s rare series, aged over ten years on its yeast lees?", a: "Rarità", x: ["Vin Santo", "Riserva Ducale", "Vecchio Samperi"] },
    ],
  },
  ib_cadelbosco: {
    producer: "Ca' del Bosco",
    fact: "The flagship Franciacorta sparkling wine from the estate Maurizio Zanella built south of Lake Iseo. Like Champagne, it undergoes a second fermentation in bottle.",
    quiz: [
      { q: "What does the name Ca' del Bosco mean?", a: "House in the woods", x: ["Castle on the hill", "Lakeside farm", "Stone church"] },
      { q: "Which sculptor made the huge bronze gate at the entrance to Ca' del Bosco?", a: "Arnaldo Pomodoro", x: ["Alberto Giacometti", "Marino Marini", "Umberto Boccioni"] },
    ],
  },
  ib_bellavista: {
    producer: "Bellavista",
    fact: "The core cuvée of a leading Franciacorta sparkling house. As the name says, it sits on the hill of Erbusco with a “beautiful view”.",
    quiz: [
      { q: "Which founder, a former builder, established Bellavista in 1977?", a: "Vittorio Moretti", x: ["Maurizio Zanella", "Carlo Gancia", "Gaetano Marzotto"] },
    ],
  },
  ib_planeta: {
    producer: "Planeta",
    fact: "An early flagship of the Planeta family, who led Sicily’s wine revival in the 1990s. It showed that Sicily could make world-class whites.",
    quiz: [
      { q: "Which large Sicilian cooperative did Diego Planeta of the Planeta family lead for many years?", a: "Settesoli", x: ["Donnafugata", "Regaleali", "Florio"] },
    ],
  },
  ib_benrye: {
    producer: "Donnafugata",
    fact: "A sweet passito made from sun-dried Zibibbo (Muscat of Alexandria) on the island of Pantelleria, between Sicily and Tunisia.",
    quiz: [
      { q: "What does “Ben Ryé” mean in Arabic?", a: "Son of the wind", x: ["Daughter of the sun", "Gift of the sea", "Jewel of the island"] },
      { q: "The winery name “Donnafugata” comes from an estate in which novel?", a: "Lampedusa’s The Leopard (Il Gattopardo)", x: ["Manzoni’s The Betrothed", "Verga’s I Malavoglia", "Eco’s The Name of the Rose"] },
    ],
  },
  ib_rossodelconte: {
    producer: "Tasca d'Almerita",
    fact: "The Tasca d’Almerita family’s flagship red, made from Nero d’Avola on the Regaleali estate in inland Sicily.",
    quiz: [
      { q: "In what year did the Tasca family buy the Regaleali estate in inland Sicily?", a: "1830", x: ["1730", "1930", "1980"] },
    ],
  },
  ib_debartoli: {
    producer: "Marco De Bartoli",
    fact: "Wine from Marco De Bartoli, who fought to revive high-quality traditional Marsala when it was seen as a cooking wine.",
    quiz: [
      { q: "What is Marco De Bartoli’s legendary wine, unfortified and aged in the old “perpetuo” way?", a: "Vecchio Samperi", x: ["Rosso del Conte", "Ben Ryé", "Radici"] },
    ],
  },
  ib_florio: {
    producer: "Florio",
    fact: "A leading house of Marsala, the fortified wine made famous by 18th-century English merchant John Woodhouse. It has vast cellars on the Marsala seafront.",
    quiz: [
      { q: "Who founded the Florio cellars in Marsala in 1833?", a: "Vincenzo Florio", x: ["John Woodhouse", "Benjamin Ingham", "Marco De Bartoli"] },
    ],
  },
  ib_passopisciaro: {
    producer: "Passopisciaro",
    fact: "A Nerello Mascalese red from high vineyards on the northern slope of Mount Etna. One of the wineries that led the Etna wine boom.",
    quiz: [
      { q: "Which Tuscan winery had Andrea Franchetti, founder of Passopisciaro, built earlier?", a: "Tenuta di Trinoro", x: ["Tenuta San Guido", "Montevertine", "Fontodi"] },
    ],
  },
  ib_benanti: {
    producer: "Benanti",
    fact: "A white made from Carricante on the eastern slope of Mount Etna. Volcanic soils near the sea give it a salty, linear taste.",
    quiz: [
      { q: "Which is the only village allowed to use “Etna Bianco Superiore”, as on Benanti Pietra Marina?", a: "Milo", x: ["Randazzo", "Taormina", "Catania"] },
    ],
  },
  ib_radici: {
    producer: "Mastroberardino",
    fact: "The flagship red of Mastroberardino, which saved Campania’s native grapes from disappearing after the war. In 1993 Taurasi became southern Italy’s first DOCG.",
    quiz: [
      { q: "At which archaeological site did Mastroberardino revive ancient vineyards with the authorities to make “Villa dei Misteri” wine?", a: "Pompeii", x: ["Herculaneum", "Paestum", "Ostia Antica"] },
    ],
  },
  ib_feudi: {
    producer: "Feudi di San Gregorio",
    fact: "A white made from Fiano, a native white grape of inland Irpinia in Campania. Feudi di San Gregorio led the new wave of southern Italian wine.",
    quiz: [
      { q: "In what year was Feudi di San Gregorio founded?", a: "1986", x: ["1886", "1936", "2006"] },
    ],
  },
  ib_es: {
    producer: "Gianfranco Fino",
    fact: "A rich red made by Gianfranco Fino and Simona Natale from Primitivo picked off old alberello (bush) vines in Puglia.",
    quiz: [
      { q: "From whose theory does Gianfranco Fino’s “Es” take its name?", a: "Freud", x: ["Jung", "Nietzsche", "Kant"] },
    ],
  },
  ib_valentini: {
    producer: "Valentini",
    fact: "An Abruzzo legend that makes decades-ageing masterpieces from Trebbiano, a grape seen as ordinary. It is famous for revealing almost nothing about its methods.",
    quiz: [
      { q: "Which winemaker made Valentini a legend by bottling only the best part of each harvest?", a: "Edoardo Valentini", x: ["Emidio Pepe", "Gianfranco Fino", "Angelo Gaja"] },
    ],
  },
  ib_emidiopepe: {
    producer: "Emidio Pepe",
    fact: "A family winery keeping old ways: grapes are destemmed by hand and wines aged in cement tanks. Old vintages are stockpiled in the cellar and released little by little.",
    quiz: [
      { q: "In what year did Emidio Pepe make his first wine in Abruzzo?", a: "1964", x: ["1904", "1934", "1994"] },
    ],
  },
  ib_turriga: {
    producer: "Argiolas",
    fact: "Sardinia’s flagship red, made by the Argiolas family of southern Sardinia mainly from the native Cannonau. It debuted with the 1988 vintage.",
    quiz: [
      { q: "Which winemaker, called “the father of the Super Tuscans”, helped create Argiolas Turriga?", a: "Giacomo Tachis", x: ["Michel Rolland", "Émile Peynaud", "Peter Sisseck"] },
    ],
  },
  ib_chiarli: {
    producer: "Cleto Chiarli",
    fact: "A lightly sparkling red made from Lambrusco di Sorbara near Modena. It has a pale ruby colour and bright acidity.",
    quiz: [
      { q: "In what year did Cleto Chiarli start making Lambrusco in Modena?", a: "1860", x: ["1760", "1920", "1970"] },
    ],
  },
  ib_valbuena: {
    producer: "Bodegas Vega Sicilia",
    fact: "Another red that Vega Sicilia makes on the same estate as Único. It is aged for less time than Único and released a little earlier.",
    quiz: [
      { q: "What does the “5” in Valbuena 5° mean?", a: "It is released in the fifth year after harvest", x: ["Five grapes are blended", "Grapes come from 5-year-old vines", "Only grapes from the fifth picking are used"] },
    ],
  },
  ib_pingus: {
    producer: "Dominio de Pingus (Peter Sisseck)",
    fact: "A Spanish cult wine made by Danish-born Peter Sisseck from very old Tempranillo vines. It won worldwide acclaim from its first vintage in 1995.",
    quiz: [
      { q: "Where does the name Pingus come from?", a: "Peter Sisseck’s childhood nickname", x: ["A river by the vineyard", "An old monastery", "Spanish for “little jewel”"] },
    ],
  },
  ib_florpingus: {
    producer: "Dominio de Pingus",
    fact: "A sibling wine made by the same hands as Pingus. It uses Tempranillo from old vines in several villages.",
    quiz: [
      { q: "Which Danish-born winemaker makes Flor de Pingus?", a: "Peter Sisseck", x: ["Álvaro Palacios", "Mariano García", "René Barbier"] },
    ],
  },
  ib_pesquera: {
    producer: "Alejandro Fernández",
    fact: "The winery Alejandro Fernández founded in Pesquera de Duero in the 1970s. He is credited with putting Ribera del Duero on the world map.",
    quiz: [
      { q: "Which wine did Robert Parker compare Tinto Pesquera to?", a: "Bordeaux’s Pétrus", x: ["Romanée-Conti", "Château d'Yquem", "Sassicaia"] },
    ],
  },
  ib_alion: {
    producer: "Vega Sicilia (Bodegas Alión)",
    fact: "A sister winery founded by Vega Sicilia in the early 1990s. It ages Tempranillo in new French oak for a more modern taste.",
    quiz: [
      { q: "Which family has owned Vega Sicilia and Alión since the 1980s?", a: "The Álvarez family", x: ["The Fernández family", "The Muga family", "The Torres family"] },
    ],
  },
  ib_aalto: {
    producer: "Bodegas Aalto",
    fact: "A rising Ribera del Duero star founded in 1999. It makes powerful reds from old Tempranillo vines in several villages.",
    quiz: [
      { q: "Which co-founder of Aalto had been Vega Sicilia’s winemaker for nearly 30 years?", a: "Mariano García", x: ["Peter Sisseck", "Alejandro Fernández", "Álvaro Palacios"] },
    ],
  },
  ib_emiliomoro: {
    producer: "Bodegas Emilio Moro",
    fact: "The flagship red of the Moro family, who have grown grapes for generations in Pesquera de Duero, Ribera del Duero.",
    quiz: [
      { q: "What is Tempranillo called locally in Ribera del Duero, home of Emilio Moro?", a: "Tinto Fino", x: ["Cencibel", "Ull de Llebre", "Tinta Roriz"] },
    ],
  },
  ib_protos: {
    producer: "Bodegas Protos",
    fact: "Ribera del Duero’s first winery, founded in 1927 by 11 growers in Peñafiel. It ages its wine in tunnels beneath Peñafiel castle.",
    quiz: [
      { q: "What does the name “Protos” mean?", a: "“First” in Greek", x: ["“City wall” in Latin", "“Riverbank” in Spanish", "“Vineyard” in Arabic"] },
      { q: "Which British architect designed Protos’s new winery?", a: "Richard Rogers", x: ["Norman Foster", "Zaha Hadid", "Frank Gehry"] },
    ],
  },
  ib_castilloygay: {
    producer: "Marqués de Murrieta",
    fact: "Marqués de Murrieta’s top wine, made only in good years. Its history began in 1852 on the Ygay estate near Logroño.",
    quiz: [
      { q: "Who founded Marqués de Murrieta and brought Bordeaux-style winemaking to Rioja?", a: "Luciano de Murrieta", x: ["Alejandro Fernández", "Rafael López de Heredia", "Enrique Forner"] },
    ],
  },
  ib_rioja904: {
    producer: "La Rioja Alta",
    fact: "The flagship of La Rioja Alta, founded in 1890 by five families beside the Haro railway station. A traditional style, aged long in American oak.",
    quiz: [
      { q: "What does “904” in Gran Reserva 904 stand for?", a: "The 1904 merger with Bodega Ardanza", x: ["Only 904 barrels are made", "A vineyard at 904 m altitude", "904 days of ageing"] },
    ],
  },
  ib_tondonia: {
    producer: "R. López de Heredia",
    fact: "The flagship of López de Heredia, founded in Haro in 1877. With long barrel ageing that lets it last for decades, it is the symbol of traditional Rioja.",
    quiz: [
      { q: "Which architect designed López de Heredia’s visitor pavilion?", a: "Zaha Hadid", x: ["Frank Gehry", "Santiago Calatrava", "Richard Rogers"] },
    ],
  },
  ib_cvneimperial: {
    producer: "CVNE",
    fact: "The top wine of CVNE, founded in 1879 beside the Haro railway station. Its 2004 vintage was No. 1, Wine of the Year, in Wine Spectator.",
    quiz: [
      { q: "What does CVNE stand for?", a: "Compañía Vinícola del Norte de España", x: ["Royal Castilian Wine Guild", "Union of Rioja Bodegas", "The initials of four founders"] },
    ],
  },
  ib_pradoenea: {
    producer: "Bodegas Muga",
    fact: "Muga’s top Gran Reserva, made only in good years. It ages long in oak barrels, then again in bottle before release.",
    quiz: [
      { q: "What is special about the Muga winery?", a: "It has its own cooperage making barrels in-house", x: ["All wines are aged in clay jars", "Grapes are carried in by helicopter", "It has an underground hydroelectric plant"] },
    ],
  },
  ib_torremuga: {
    producer: "Bodegas Muga",
    fact: "A modern-style Rioja that Muga first released with the 1991 vintage. It has deep colour, lush fruit and new French oak flavour.",
    quiz: [
      { q: "Which couple founded the Muga winery in Haro in 1932?", a: "Isaac Muga and Aurora Caño", x: ["Alejandro Fernández and Esperanza Rivera", "Mario Rotllant and Carmen Daurella", "Joan Juvé and Teresa Camps"] },
    ],
  },
  ib_caceres: {
    producer: "Marqués de Cáceres",
    fact: "A winery founded in Cenicero in 1970 by Enrique Forner. It brought in Bordeaux-style winemaking to offer a fruit-driven Rioja.",
    quiz: [
      { q: "Which French oenologist advised Marqués de Cáceres when it brought in Bordeaux-style winemaking?", a: "Émile Peynaud", x: ["Michel Rolland", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  ib_contino: {
    producer: "CVNE (Viñedos del Contino)",
    fact: "A Rioja from an estate on a bend of the Ebro near Laguardia. It was founded in the 1970s by CVNE and the family that had owned the estate.",
    quiz: [
      { q: "What type of wine is Contino credited with introducing to Rioja?", a: "A single-estate wine from one estate’s grapes", x: ["Rioja’s first sparkling wine", "Rioja’s first sweet wine", "Rioja’s first rosé"] },
    ],
  },
  ib_remirez: {
    producer: "Remírez de Ganuza",
    fact: "The winery Fernando Remírez de Ganuza founded in Samaniego, Rioja Alavesa. It makes wine from carefully selected grapes from small old vineyards.",
    quiz: [
      { q: "Which part of the grape bunch does Remírez de Ganuza use for its Reserva?", a: "Only the top part (the shoulders)", x: ["Only the bunch tips", "Whole bunches with stems", "Only the last berries to ripen"] },
    ],
  },
  ib_roda: {
    producer: "Bodegas Roda",
    fact: "The flagship Reserva of Roda, a rising star in Haro’s railway station district. It is made from old Tempranillo vines.",
    quiz: [
      { q: "Where does the name Roda come from?", a: "The first letters of founders Rotllant and Daurella", x: ["The Spanish word for “wheel”", "The village where the vineyard lies", "A nearby river"] },
    ],
  },
  ib_artadi: {
    producer: "Artadi",
    fact: "A Tempranillo made by Juan Carlos López de Lacalle from a single small vineyard in Laguardia. It is considered one of Spain’s finest single-vineyard wines.",
    quiz: [
      { q: "What did Artadi decide in 2015 that made headlines?", a: "To leave the Rioja appellation (DOCa)", x: ["To buy a French château", "To replant every vineyard with white grapes", "To swap cork for crown caps"] },
    ],
  },
  ib_campoviejo: {
    producer: "Campo Viejo",
    fact: "Founded in Logroño in 1959, it became one of the world’s best-selling Rioja brands. Its colourful labels are familiar everywhere.",
    quiz: [
      { q: "What does the name “Campo Viejo” mean?", a: "Old field", x: ["New castle", "Red hill", "Old knight"] },
    ],
  },
  ib_faustino: {
    producer: "Bodegas Faustino",
    fact: "A Rioja Gran Reserva instantly recognisable by its frosted, matt bottle. The flagship of the Faustino family, in business since 1861.",
    quiz: [
      { q: "Which painter painted the portrait on the Faustino I label?", a: "Rembrandt", x: ["Velázquez", "Goya", "El Greco"] },
    ],
  },
  ib_juangil: {
    producer: "Bodegas Juan Gil",
    fact: "A dark red made from Monastrell grown under the hot sun of Jumilla in southeastern Spain. Its silver label also earns it the name “Silver Label”.",
    quiz: [
      { q: "What does the “12 Meses” in Juan Gil 12 Meses mean?", a: "It was aged 12 months in oak", x: ["The vines are 12 months old", "It is released 12 months after harvest", "Grapes from 12 vineyards are blended"] },
    ],
  },
  ib_ermita: {
    producer: "Álvaro Palacios",
    fact: "One of Spain’s most expensive wines, made from old Garnacha vines on the steep slate (llicorella) slopes of Gratallops.",
    quiz: [
      { q: "What is the name of the Rioja wine family Álvaro Palacios was born into?", a: "Palacios Remondo", x: ["Marqués de Riscal", "Vega Sicilia", "López de Heredia"] },
    ],
  },
  ib_closmogador: {
    producer: "Clos Mogador",
    fact: "A winery founded by one of the pioneers who arrived in a declining Priorat in the late 1980s and revived it. It is made from old Garnacha and Cariñena.",
    quiz: [
      { q: "Who founded Clos Mogador and led the revival of Priorat?", a: "René Barbier", x: ["Peter Sisseck", "Mariano García", "Alejandro Fernández"] },
    ],
  },
  ib_closerasmus: {
    producer: "Clos i Terrasses",
    fact: "A cult Priorat wine, mainly Garnacha, from steep terraced vineyards in Gratallops. Production is tiny.",
    quiz: [
      { q: "Which female winemaker founded Clos Erasmus?", a: "Daphne Glorian", x: ["Marisol Bueno", "Virginie Saverys", "Maria Teresa Mascarello"] },
    ],
  },
  ib_masplana: {
    producer: "Torres",
    fact: "Torres’s flagship, made by Miguel A. Torres from Cabernet Sauvignon from a single Penedès vineyard. It showed the world what Spanish reds could do.",
    quiz: [
      { q: "What did the 1970 Mas La Plana achieve at the 1979 Paris “Wine Olympiad”?", a: "First place, ahead of great Bordeaux names", x: ["Second place, behind Latour", "Disqualified over suspected fraud", "First place in the white category"] },
      { q: "What was Torres Mas La Plana formerly called?", a: "Gran Coronas Black Label", x: ["Sangre de Toro Reserva", "Viña Sol Gran Reserva", "Torres Imperial"] },
    ],
  },
  ib_sangredetoro: {
    producer: "Torres",
    fact: "Torres’s long-selling red, first released in 1954. Made from Garnacha and Cariñena, it is soft and full of fruit.",
    quiz: [
      { q: "What hangs from the neck of a Sangre de Toro bottle?", a: "A small plastic bull figurine", x: ["A red ribbon", "A mini matador’s hat", "A cork bead"] },
      { q: "What does “Sangre de Toro” mean?", a: "Bull’s blood", x: ["Red sun", "The matador’s heart", "Holy land"] },
    ],
  },
  ib_numanthia: {
    producer: "Bodegas Numanthia",
    fact: "A powerful red from old Tinta de Toro vines in Toro, which survived phylloxera thanks to the sandy soil.",
    quiz: [
      { q: "What is Numanthia named after?", a: "Numantia, the ancient city that resisted Rome to the end", x: ["Numa, a legendary king of Rome", "A fortress built by crusaders", "The capital of a Moorish kingdom"] },
      { q: "Which group acquired Numanthia in 2008?", a: "LVMH (Moët Hennessy)", x: ["Pernod Ricard", "Kering", "E. & J. Gallo"] },
    ],
  },
  ib_senorans: {
    producer: "Pazo de Señoráns",
    fact: "A great Albariño house built by Marisol Bueno in the Val do Salnés. It is considered a flagship white of Rías Baixas.",
    quiz: [
      { q: "What does “Pazo” in Pazo de Señoráns mean?", a: "An old noble manor house in Galicia", x: ["A vineyard hill", "A harbour warehouse", "A monastery garden"] },
    ],
  },
  ib_martincodax: {
    producer: "Bodegas Martín Códax",
    fact: "Albariño from a winery founded in 1986 by growers near Cambados. Grapes grown in Atlantic sea breezes give it a zesty taste.",
    quiz: [
      { q: "Who is Martín Códax named after?", a: "A medieval Galician troubadour", x: ["A captain of the Age of Discovery", "A king of Castile", "The farmer who founded the winery"] },
    ],
  },
  ib_codorniu: {
    producer: "Codorníu",
    fact: "Codorníu is where Josep Raventós first made Cava by the Champagne method, in 1872. Anna adds Chardonnay for a softer taste.",
    quiz: [
      { q: "Who is the Anna of Anna de Codorníu?", a: "The Codorníu heiress who married into the Raventós family", x: ["The patron saint of Catalonia", "A queen of Spain", "The founder’s first granddaughter"] },
      { q: "Which Catalan Modernisme architect designed Codorníu’s cellar buildings?", a: "Josep Puig i Cadafalch", x: ["Antoni Gaudí", "Ricardo Bofill", "Rafael Moneo"] },
    ],
  },
  ib_juvecamps: {
    producer: "Juvé & Camps",
    fact: "The flagship vintage Cava of a family house in Sant Sadurní d’Anoia. It is made as a Brut Nature with no added sugar.",
    quiz: [
      { q: "Where does the name Juvé & Camps come from?", a: "The surnames of founders Joan Juvé and Teresa Camps", x: ["Two village names", "The nicknames of two founding friends", "The names of two vineyards"] },
    ],
  },
  ib_gramona: {
    producer: "Gramona",
    fact: "Gramona’s flagship long-aged sparkling wine, matured for years on its yeast lees. Xarel·lo gives it power and depth.",
    quiz: [
      { q: "Which sparkling wine label did Gramona create with other producers after leaving the Cava appellation in 2019?", a: "Corpinnat", x: ["Clàssic Penedès", "Franciacorta", "Crémant de Catalogne"] },
    ],
  },
  ib_bristolcream: {
    producer: "Harveys",
    fact: "A cream sherry from Harveys, founded in Bristol, England, in 1796. Several sherries are blended for a sweet, smooth taste.",
    quiz: [
      { q: "Where does the name Harveys Bristol Cream come from?", a: "A lady’s remark: if Bristol Milk is the milk, this is the cream", x: ["A dairy in Bristol harbour", "The founder’s daughter’s nickname", "A title given by the queen"] },
      { q: "What is the signature colour of the Harveys Bristol Cream bottle?", a: "Deep blue", x: ["Clear", "Dark green", "Black"] },
    ],
  },
  ib_lustau: {
    producer: "Emilio Lustau",
    fact: "A sweet sherry blending oloroso with Pedro Ximénez, aged in the hottest, most humid part of the cellar.",
    quiz: [
      { q: "Where does the name “East India Solera” come from?", a: "It recreates sherry that matured on ships to the East Indies", x: ["Sherry flavoured with Indian spices", "A cellar founded by the East India Company", "Sherry made from Indian grapes"] },
      { q: "What is an “almacenista”, whose sherries Lustau bottled and introduced?", a: "A small stockholder who only ages sherry", x: ["A sailor who shipped sherry", "A yeast master who raises flor", "A craftsman who makes corks"] },
    ],
  },
  ib_inocente: {
    producer: "Valdespino",
    fact: "A rare fino sherry made from a single vineyard’s grapes and fermented in wooden casks. Long ageing under flor gives it deep flavour.",
    quiz: [
      { q: "From which famous Jerez vineyard (pago) do Valdespino Inocente’s grapes come?", a: "Macharnudo", x: ["Balbaína", "Añina", "Carrascal"] },
    ],
  },
  ib_osborne: {
    producer: "Osborne",
    fact: "A fino sherry from Osborne in El Puerto de Santa María, on the Atlantic coast. Ageing under flor makes it light and salty.",
    quiz: [
      { q: "What shape is Osborne’s giant roadside emblem across Spain?", a: "A black bull", x: ["A flamenco dancer", "A golden grape cluster", "A white horse"] },
      { q: "Where was Thomas Osborne Mann, who founded Osborne in 1772, from?", a: "England", x: ["France", "The Netherlands", "Italy"] },
    ],
  },
  ib_noe: {
    producer: "González Byass",
    fact: "A jet-black, syrupy dessert sherry made from sun-dried Pedro Ximénez grapes and aged for many years.",
    quiz: [
      { q: "What does “VORS” guarantee on a sherry like González Byass Noé?", a: "Very old sherry aged over 30 years on average", x: ["A vintage sherry from one harvest", "A certified-organic sherry", "A sherry from botrytised grapes"] },
    ],
  },
  ib_laguita: {
    producer: "La Guita",
    fact: "A manzanilla sherry made only in Sanlúcar de Barrameda at the mouth of the Guadalquivir. Sea breezes let the flor grow thick, giving it a salty taste.",
    quiz: [
      { q: "The name La Guita comes from slang for what?", a: "Cash (money)", x: ["A guitar", "Sea breeze", "A small cask"] },
    ],
  },
  ib_alvear: {
    producer: "Alvear",
    fact: "A sweet wine made from sun-dried Pedro Ximénez by Alvear, the great house of Montilla-Moriles, south of Córdoba.",
    quiz: [
      { q: "What does “1927” in Alvear PX Solera 1927 mean?", a: "The year this solera was started", x: ["The year the grapes were picked", "The year Alvear opened", "The year it was bottled"] },
    ],
  },
  ib_lancers: {
    producer: "José Maria da Fonseca",
    fact: "A Portuguese rosé born in 1944 for the American market. It is famous for its opaque bottle that looks like a ceramic crock.",
    quiz: [
      { q: "Which Velázquez painting inspired the name Lancers?", a: "The Surrender of Breda (The Lances)", x: ["Las Meninas", "The Spinners", "The Triumph of Bacchus"] },
    ],
  },
  ib_barcavelha: {
    producer: "Casa Ferreirinha (Sogrape)",
    fact: "A legendary wine that blazed the trail for fine unfortified reds in the Douro, the land of Port. First made in 1952, it is released only in outstanding years.",
    quiz: [
      { q: "Which winemaker first created Barca Velha?", a: "Fernando Nicolau de Almeida", x: ["Dirk Niepoort", "José Maria da Fonseca", "Adriano Ramos Pinto"] },
      { q: "What does the name “Barca Velha” mean?", a: "Old boat", x: ["Old farmer", "Blue river", "First harvest"] },
    ],
  },
  ib_valemeao: {
    producer: "Quinta do Vale Meão",
    fact: "A wine estate on a wide bend of the river in the Douro Superior. For many years it supplied the grapes for Barca Velha.",
    quiz: [
      { q: "Which legendary Douro woman founded Quinta do Vale Meão in 1877?", a: "Dona Antónia Ferreira", x: ["Juliette Colbert Falletti", "Marisol Bueno", "Anna de Codorníu"] },
    ],
  },
  ib_crasto: {
    producer: "Quinta do Crasto",
    fact: "A red from the Roquette family’s estate on the Douro, made from old vineyards where many native grapes grow intermingled.",
    quiz: [
      { q: "What at Quinta do Crasto is a famous photo spot?", a: "An infinity pool overlooking the Douro", x: ["A cable car over the vineyards", "A floating cellar on the river", "A lookout on medieval walls"] },
    ],
  },
  ib_esporao: {
    producer: "Herdade do Esporão",
    fact: "The flagship red of Herdade do Esporão, a large estate in the Alentejo in southern Portugal. A medieval tower stands on the estate.",
    quiz: [
      { q: "What is special about the Esporão Reserva label?", a: "It features a different artist’s work every year", x: ["It always bears the same family crest", "It is engraved directly on the bottle", "It is made of cork bark"] },
    ],
  },
  ib_peramanca: {
    producer: "Cartuxa (Fundação Eugénio de Almeida)",
    fact: "The Alentejo’s greatest red, released only in outstanding years by the Eugénio de Almeida Foundation in Évora.",
    quiz: [
      { q: "The name Pêra-Manca comes from a phrase meaning what?", a: "Wobbly stone", x: ["Pear orchard", "Lame monk", "White tower"] },
      { q: "According to legend, on which voyage was Pêra-Manca carried in 1500?", a: "Cabral’s voyage that discovered Brazil", x: ["Vasco da Gama’s route to India", "Magellan’s circumnavigation", "Columbus’s first voyage"] },
    ],
  },
  ib_casalgarcia: {
    producer: "Aveleda",
    fact: "A light, zesty white from northern Portugal, first released in 1939. Slightly spritzy and low in alcohol, it is easy to enjoy.",
    quiz: [
      { q: "What does “Verde” (green) in Vinho Verde, Casal Garcia’s appellation, mean?", a: "A young, fresh wine", x: ["It is made from green grapes", "It comes in a green bottle", "It smells of seaweed"] },
    ],
  },
  ib_taylors20: {
    producer: "Taylor Fladgate",
    fact: "A tawny Port slowly oxidised over many years in small wooden casks, gaining an amber colour and nutty, caramel aromas.",
    quiz: [
      { q: "What does “20 Year Old” mean on Taylor’s 20 Year Old Tawny Port?", a: "The average age of a blend of Ports from many years", x: ["A single-year Port from exactly 20 years ago", "Grapes from 20-year-old vines", "20 years of ageing in bottle"] },
    ],
  },
  ib_sixgrapes: {
    producer: "Graham's",
    fact: "A reserve ruby Port made from grapes from the estates that supply vintage Port. Its rich fruit makes it a favourite introduction to Port.",
    quiz: [
      { q: "Where does the name Graham’s Six Grapes come from?", a: "The six-bunch mark once used for vintage-quality Port", x: ["Six grape varieties are blended", "Six years of Port are blended", "The founder’s six children"] },
    ],
  },
  ib_grahamsvintage: {
    producer: "Graham's",
    fact: "Graham’s vintage Port, “declared” only in outstanding years. Grapes from Quinta dos Malvedos in the Douro are at its heart.",
    quiz: [
      { q: "What was the original business of the Graham brothers, who founded Graham’s in 1820?", a: "Textile trading", x: ["Shipping", "Banking", "Cork production"] },
      { q: "Which Port family has owned Graham’s since 1970?", a: "The Symington family", x: ["The Sandeman family", "The Niepoort family", "The Guimaraens family"] },
    ],
  },
  ib_bin27: {
    producer: "Fonseca",
    fact: "A reserve Port from Fonseca, the Port house led for generations by the Guimaraens family. It is known for its deep, dark red-fruit flavour.",
    quiz: [
      { q: "Before its commercial release in 1972, who was Fonseca Bin 27 originally for?", a: "A blend for the family and their friends", x: ["The British royal household", "Rations for sailors", "Mass at the Vatican"] },
    ],
  },
  ib_dows: {
    producer: "Dow's (Symington)",
    fact: "The vintage Port of Dow’s, a Port house run by the Symington family. It is noted for a drier finish than other Ports.",
    quiz: [
      { q: "Which Douro estate is at the heart of Dow’s Vintage Port?", a: "Quinta do Bomfim", x: ["Quinta do Noval", "Quinta de Vargellas", "Quinta dos Malvedos"] },
    ],
  },
  ib_sandeman: {
    producer: "Sandeman",
    fact: "A Port and sherry house founded in London in 1790. The black-caped silhouette of “The Don” is its label emblem.",
    quiz: [
      { q: "What does Sandeman’s black silhouette “The Don” wear?", a: "A Portuguese student’s cape and a wide-brimmed Spanish hat", x: ["A Scottish kilt and beret", "A Royal Navy uniform and tricorn", "A monk’s robe and hood"] },
      { q: "Where was George Sandeman, founder of Sandeman, from?", a: "Scotland", x: ["Portugal", "The Netherlands", "Ireland"] },
    ],
  },
  ib_cockburns: {
    producer: "Cockburn's",
    fact: "The flagship reserve Port of Cockburn’s, a Port house founded in 1815. Today it is run by the Symington family.",
    quiz: [
      { q: "What is special about how “Cockburn’s” is pronounced in English?", a: "The “ck” is silent, so it sounds like “Co-burn”", x: ["Every letter is sounded: “Cock-burn”", "The “burn” is dropped: just “Cock”", "It is said the Portuguese way: “Kok-boorn”"] },
    ],
  },
  ib_nacional: {
    producer: "Quinta do Noval",
    fact: "A legendary vintage Port from a small plot within Quinta do Noval. The 1931 is ranked among the greatest Ports ever made.",
    quiz: [
      { q: "What is special about the vines of Quinta do Noval Nacional?", a: "They grow on their own roots, ungrafted", x: ["All are white vines over 100 years old", "They grow in a greenhouse", "They are replanted every year"] },
      { q: "Which arm of a French insurance group acquired Quinta do Noval in 1993?", a: "AXA Millésimes", x: ["LVMH", "Kering", "Pernod Ricard"] },
    ],
  },
  ib_niepoort: {
    producer: "Niepoort",
    fact: "A family Port house founded in 1842. Fifth-generation Dirk Niepoort has also made his name with Douro table wines.",
    quiz: [
      { q: "Where are the Niepoort family’s roots?", a: "The Netherlands", x: ["Scotland", "Germany", "Denmark"] },
      { q: "Where does Niepoort’s “Garrafeira” Port mature for years after its time in wood?", a: "Large glass demijohns", x: ["Clay jars buried in the ground", "Steel tanks under the sea", "Marble basins"] },
    ],
  },
  ib_warres: {
    producer: "Warre's",
    fact: "Warrior is the reserve Port of Warre’s, counted among the oldest Port brands. Today it is run by the Symington family.",
    quiz: [
      { q: "What is the significance of 1670, the year Warre’s opened?", a: "It was the first British Port company founded in Portugal", x: ["Brandy was first added to Port", "The Douro was demarcated", "The first vintage Port was declared"] },
    ],
  },
  ib_ramospinto: {
    producer: "Ramos Pinto",
    fact: "A tawny Port from the house Adriano Ramos Pinto founded in 1880. It is made from grapes from Quinta do Bom Retiro in the Douro.",
    quiz: [
      { q: "What made Ramos Pinto the talk of the town in the early 20th century?", a: "Bold Art Nouveau advertising posters", x: ["A railway line just for Port", "The world’s largest barrel", "Gold-leaf maps on Port bottles"] },
      { q: "Which Champagne house acquired Ramos Pinto in 1990?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  ib_blandys: {
    producer: "Blandy's",
    fact: "A Madeira house run by one family for generations since its founding in 1811. Malmsey is the sweetest style of Madeira.",
    quiz: [
      { q: "What is the traditional method of ageing Madeira like Blandy’s, warming it slowly for years in sunny lofts?", a: "Canteiro", x: ["Solera", "Appassimento", "Charmat"] },
      { q: "Where was John Blandy, founder of Blandy’s, from?", a: "England", x: ["Portugal", "Spain", "France"] },
    ],
  },
  ib_cossart: {
    producer: "Cossart Gordon",
    fact: "One of the oldest wine houses on Madeira. Bual is a moderately sweet Madeira style with lively acidity.",
    quiz: [
      { q: "In what year did Cossart Gordon open on Madeira?", a: "1745", x: ["1645", "1845", "1945"] },
    ],
  },
};

export default T;
