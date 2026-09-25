import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  lafite: {
    producer: "Domaines Barons de Rothschild (Lafite)",
    fact: "Listed first among the First Growths in the 1855 Médoc classification. The label shows an engraving of the château with its tower.",
    quiz: [
      { q: "Which family bought Château Lafite Rothschild in 1868?", a: "The Rothschild family", x: ["The House of Orléans", "The Bourbon dynasty", "The Medici family"] },
      { q: "What is Lafite Rothschild’s second wine called?", a: "Carruades de Lafite", x: ["Les Forts de Latour", "Pavillon Rouge du Château Margaux", "Le Petit Mouton"] },
    ],
  },
  margaux: {
    producer: "Château Margaux",
    fact: "A neoclassical château known as the “Versailles of the Médoc”. Its trademark label is an engraving of the columned portico.",
    quiz: [
      { q: "What is Château Margaux’s second wine?", a: "Pavillon Rouge du Château Margaux", x: ["Carruades de Lafite", "Les Forts de Latour", "Le Clarence de Haut-Brion"] },
      { q: "What is Château Margaux’s white wine called?", a: "Pavillon Blanc", x: ["Aile d’Argent", "Blanc de Lynch-Bages", "Musigny Blanc"] },
    ],
  },
  latour: {
    producer: "Château Latour",
    fact: "The lion-topped tower on the label is a remnant of a Hundred Years’ War fortress. Since 2012 it has stopped selling en primeur and releases wines only after ageing them.",
    quiz: [
      { q: "Which way of selling did Château Latour give up in 2012?", a: "En primeur (futures)", x: ["Auction sales", "Exports abroad", "Magnum bottles"] },
      { q: "What is Latour’s second wine?", a: "Les Forts de Latour", x: ["Carruades de Lafite", "Le Petit Mouton", "Clos du Marquis"] },
    ],
  },
  mouton: {
    producer: "Baron Philippe de Rothschild",
    fact: "Since 1945, artists such as Chagall, Picasso and Warhol have painted the top of the label each year. In 1973 it became the only château ever promoted from Second to First Growth.",
    quiz: [
      { q: "In what year was Mouton Rothschild promoted from Second to First Growth?", a: "1973", x: ["1855", "1945", "1982"] },
      { q: "What symbol appeared on the 1945 Mouton Rothschild label?", a: "A “V” for Victory", x: ["A dove of peace", "The Eiffel Tower", "A ram wearing a laurel wreath"] },
    ],
  },
  hautbrion: {
    producer: "Domaine Clarence Dillon",
    fact: "The only château outside the Médoc, from Graves, to be ranked a First Growth in 1855. In 17th-century London it was also the first wine sold under its own name.",
    quiz: [
      { q: "What rank did Château Haut-Brion receive in the 1855 classification?", a: "First Growth", x: ["Second Growth", "Third Growth", "Fifth Growth"] },
      { q: "Which American banker bought Château Haut-Brion in 1935?", a: "Clarence Dillon", x: ["J.P. Morgan", "John D. Rockefeller", "Andrew Mellon"] },
    ],
  },
  petrus: {
    producer: "Pétrus",
    fact: "Pomerol’s legend, made from almost 100% Merlot. The figure on the label is Saint Peter (Petrus) holding the keys to heaven.",
    quiz: [
      { q: "Who is pictured on the Pétrus label?", a: "Saint Peter holding keys", x: ["Saint Paul", "Bacchus", "Napoleon"] },
      { q: "What soil is Pétrus’s vineyard famous for?", a: "Blue clay", x: ["Limestone gravel", "Granite", "Volcanic ash"] },
    ],
  },
  yquem: {
    producer: "Château d'Yquem",
    fact: "The pinnacle of Sauternes sweet wine, made from noble-rot (botrytis) grapes. It alone was ranked “Superior First Growth” in 1855. The golden glow in a clear bottle is the clue.",
    quiz: [
      { q: "What unique rank did Château d'Yquem receive in 1855?", a: "Premier Cru Supérieur", x: ["Premier Grand Cru Classé A", "Grand Cru", "Cru Bourgeois"] },
      { q: "Which mould shrivels Yquem’s grapes and concentrates their sugar?", a: "Botrytis cinerea (noble rot)", x: ["Penicillium", "Flor yeast", "Oidium"] },
    ],
  },
  chevalblanc: {
    producer: "Château Cheval Blanc",
    fact: "A Saint-Émilion giant with a high share of Cabernet Franc. Famous as the 1961 bottle the hero saves in the film “Sideways”.",
    quiz: [
      { q: "Which Cheval Blanc vintage does the hero save in the film “Sideways”?", a: "1961", x: ["1982", "1947", "2000"] },
    ],
  },
  drc: {
    producer: "Domaine de la Romanée-Conti (DRC)",
    fact: "A single vineyard of barely 1.8 ha yields only about 6,000 bottles a year. Every label carries its own bottle number.",
    quiz: [
      { q: "Roughly how large is the Romanée-Conti vineyard?", a: "About 1.8 ha", x: ["About 18 ha", "About 50 ha", "About 0.2 ha"] },
      { q: "Where does the “Conti” in Romanée-Conti come from?", a: "The Prince of Conti, who bought it in 1760", x: ["One of Napoleon’s generals", "Pope Conti III", "A winemaking monk named Conti"] },
    ],
  },
  jadot: {
    producer: "Maison Louis Jadot",
    fact: "A Beaune négociant famous for the head of Bacchus, god of wine, on its label. Founded in 1859.",
    quiz: [
      { q: "Whose face is the emblem on the Louis Jadot label?", a: "Bacchus (god of wine)", x: ["Poseidon", "Saint Vincent", "Founder Louis Jadot"] },
      { q: "In what year was Louis Jadot founded?", a: "1859", x: ["1729", "1920", "1966"] },
    ],
  },
  duboeuf: {
    producer: "Georges Duboeuf",
    fact: "A new-vintage wine released worldwide on the third Thursday of November each year. Its flowery label, redesigned every year, is its signature.",
    quiz: [
      { q: "When is Beaujolais Nouveau released?", a: "The third Thursday of November", x: ["The first Friday of November", "December 1", "The last Saturday of October"] },
      { q: "Which fermentation method makes Beaujolais Nouveau ready to drink so early?", a: "Carbonic maceration", x: ["Solera", "Appassimento", "Second fermentation in bottle"] },
    ],
  },
  beaucastel: {
    producer: "Famille Perrin",
    fact: "A great Châteauneuf-du-Pape estate that uses all 13 permitted grape varieties. Bottles from this area are often embossed with the papal tiara and Saint Peter’s keys.",
    quiz: [
      { q: "How many permitted Châteauneuf-du-Pape varieties does Château de Beaucastel use?", a: "13", x: ["3", "7", "21"] },
      { q: "What does the name “Châteauneuf-du-Pape” mean?", a: "The pope’s new castle", x: ["The pope’s vineyard", "The king’s new castle", "Nine castles"] },
    ],
  },
  domperignon: {
    producer: "Moët & Chandon",
    fact: "A prestige Champagne made only in good vintages. It has a shield-shaped label and an old-style bottle, and is named after the 17th-century monk Pierre Pérignon.",
    quiz: [
      { q: "Who was the Dom Pérignon of the name?", a: "A 17th-century Benedictine monk", x: ["One of Napoleon’s generals", "The founder of Moët", "Louis XIV’s chef"] },
      { q: "In which years is Dom Pérignon made?", a: "Only in good vintage years", x: ["Every year", "Every leap year", "Once every ten years"] },
    ],
  },
  moet: {
    producer: "Moët & Chandon",
    fact: "The world’s best-selling Champagne house. “Impérial” comes from its ties to Emperor Napoleon.",
    quiz: [
      { q: "Which figure is linked to the name Moët & Chandon “Impérial”?", a: "Napoleon", x: ["Louis XIV", "Marie Antoinette", "Charles de Gaulle"] },
      { q: "In what year was Moët & Chandon founded?", a: "1743", x: ["1829", "1668", "1921"] },
    ],
  },
  veuve: {
    producer: "Veuve Clicquot Ponsardin",
    fact: "“Veuve” means widow. Widowed at 27, Madame Clicquot ran the house and devised riddling, turning bottles to collect the sediment.",
    quiz: [
      { q: "What does the French word “Veuve” mean?", a: "Widow", x: ["Old lady", "Queen", "Daughter"] },
      { q: "What technique did Madame Clicquot devise to gather sediment in the bottle neck by turning bottles?", a: "Riddling (remuage)", x: ["Disgorgement (dégorgement)", "Solera", "Bâtonnage"] },
    ],
  },
  cristal: {
    producer: "Louis Roederer",
    fact: "A clear bottle created for Tsar Alexander II of Russia. Legend says the punt in the base was removed so no bomb could be hidden there.",
    quiz: [
      { q: "For whom was Cristal originally made?", a: "Tsar Alexander II of Russia", x: ["Napoleon III", "Queen Victoria", "Louis XVI"] },
      { q: "How does the Cristal bottle differ from other Champagne bottles?", a: "It is clear and has no punt", x: ["It is metal-plated", "It has a bulging neck", "It is square"] },
    ],
  },
  armand: {
    producer: "Famille Cattier",
    fact: "Its metal-plated gold bottle with a pewter spade emblem earned it the nickname “Ace of Spades”. In 2021 LVMH bought a half stake.",
    quiz: [
      { q: "What is Armand de Brignac’s nickname?", a: "Ace of Spades", x: ["Golden Crown", "Black Queen", "Royal Heart"] },
      { q: "Which group bought half of Armand de Brignac in 2021?", a: "LVMH", x: ["Kering", "Pernod Ricard", "Diageo"] },
    ],
  },
  pj: {
    producer: "Perrier-Jouët",
    fact: "White anemones painted in 1902 by Art Nouveau glass artist Émile Gallé are enamelled directly onto the bottle.",
    quiz: [
      { q: "Which flower is painted on the Belle Époque bottle?", a: "Anemone", x: ["Rose", "Lily", "Lavender"] },
      { q: "Which Art Nouveau artist designed Belle Époque’s floral decoration?", a: "Émile Gallé", x: ["Alphonse Mucha", "René Lalique", "Gustav Klimt"] },
    ],
  },
  ruinart: {
    producer: "Ruinart",
    fact: "The oldest Champagne house, founded in 1729. Its round, clear bottle, modelled on an 18th-century flask, holds 100% Chardonnay.",
    quiz: [
      { q: "In what year was Ruinart founded?", a: "1729", x: ["1743", "1811", "1876"] },
      { q: "What were Ruinart’s chalk ageing cellars, the “crayères”, originally?", a: "Ancient Roman quarries", x: ["Catacombs of a medieval abbey", "WWII air-raid shelters", "Old coal mines"] },
    ],
  },
  trimbach: {
    producer: "Trimbach",
    fact: "A great Alsace house dating back to 1626. By law, Alsace wine may only be bottled in the tall, slender bottle called a “flûte”.",
    quiz: [
      { q: "In what year did the Trimbach family start making wine?", a: "1626", x: ["1789", "1855", "1920"] },
      { q: "What is Trimbach’s legendary single-vineyard Riesling?", a: "Clos Sainte Hune", x: ["Scharzhofberg", "Clos des Mouches", "Hill of Grace"] },
    ],
  },
  egonmuller: {
    producer: "Egon Müller",
    fact: "A legendary Riesling from the Scharzhofberg vineyard on the Saar. Its Trockenbeerenauslese is counted among the world’s most expensive white wines.",
    quiz: [
      { q: "Which is the most expensive level of Egon Müller Scharzhofberger?", a: "Trockenbeerenauslese (TBA)", x: ["Kabinett", "Spätlese", "Grosses Gewächs"] },
      { q: "Where are Egon Müller’s top wines mainly sold?", a: "The VDP auction in Trier", x: ["An online lottery", "Bordeaux en primeur", "Members-only mail order"] },
    ],
  },
  drloosen: {
    producer: "Dr. Loosen",
    fact: "A Mosel Riesling known for its big “Dr. L” label. Mosel wine traditionally came in green bottles, Rhine wine in brown ones.",
    quiz: [
      { q: "Which winemaker runs Dr. Loosen?", a: "Ernst Loosen", x: ["Egon Müller", "Wilhelm Weil", "Helmut Dönnhoff"] },
      { q: "Which Riesling does Dr. Loosen make with Chateau Ste. Michelle in the US?", a: "Eroica", x: ["Opus One", "Almaviva", "Seña"] },
    ],
  },
  bluenun: {
    producer: "F.W. Langguth Erben",
    fact: "Born in the 1920s, it became the world’s best-selling wine brand in the 1980s. The name comes from the nuns in blue habits on the label.",
    quiz: [
      { q: "What on the label gave Blue Nun its name?", a: "Nuns dressed in blue", x: ["Blue grapes", "The blue waters of the Rhine", "The founder’s daughter"] },
    ],
  },
  juliusspital: {
    producer: "Juliusspital",
    fact: "The flat, round “Bocksbeutel” bottle is protected for use by Franken wines only. Juliusspital is a winery run by a charitable hospital founded in 1576.",
    quiz: [
      { q: "Who runs the Juliusspital winery?", a: "A charitable hospital foundation from 1576", x: ["The Bavarian royal family", "The University of Würzburg", "A Benedictine monastery"] },
    ],
  },
  sassicaia: {
    producer: "Tenuta San Guido",
    fact: "The original “Super Tuscan”, and the first Italian wine to get an appellation for a single estate (Bolgheri Sassicaia DOC). The star on the label is a compass rose.",
    quiz: [
      { q: "What is the star on the Sassicaia label?", a: "A compass rose", x: ["The Star of David", "The Medici coat of arms", "The Pole Star"] },
      { q: "What does the name “Sassicaia” mean?", a: "Stony ground", x: ["Sea breeze", "Hunter’s hill", "Red earth"] },
    ],
  },
  gaja: {
    producer: "Gaja",
    fact: "Famous for a white label bearing just four bold black letters: “GAJA”. Angelo Gaja raised Barbaresco to the world’s top tier.",
    quiz: [
      { q: "Who made Gaja a world-class winery?", a: "Angelo Gaja", x: ["Bruno Giacosa", "Piero Antinori", "Giacomo Conterno"] },
      { q: "In what year was the Gaja winery founded?", a: "1859", x: ["1920", "1961", "1783"] },
    ],
  },
  chianti: {
    producer: "Traditional Tuscan style",
    fact: "The straw-wrapped, round-bottomed “fiasco” is the symbol of Chianti. The straw protected the bottle from breaking in transport.",
    quiz: [
      { q: "What was the straw wrapping on Chianti bottles originally for?", a: "Protecting the bottle in transport", x: ["Keeping the wine cool", "Blocking sunlight", "Preventing counterfeits"] },
      { q: "Which animal is the emblem of Chianti Classico?", a: "A black rooster (Gallo Nero)", x: ["A red lion", "A white dove", "A golden wolf"] },
    ],
  },
  masi: {
    producer: "Masi Agricola",
    fact: "A dense, powerful red made from grapes dried for over three months (appassimento) to concentrate their sugar. Amarone means “the bitter one”.",
    quiz: [
      { q: "What is the drying of grapes for Amarone called?", a: "Appassimento", x: ["Solera", "Botrytis", "Carbonic maceration"] },
    ],
  },
  biondisanti: {
    producer: "Biondi-Santi",
    fact: "The family that created Brunello di Montalcino. In the late 19th century they selected a large-berried Sangiovese clone, “Brunello”, and aged it for a long time.",
    quiz: [
      { q: "What is the other name of the Sangiovese that Biondi-Santi selected to create Brunello?", a: "Sangiovese Grosso", x: ["Morellino", "Prugnolo Gentile", "Nebbiolo"] },
    ],
  },
  riscal: {
    producer: "Marqués de Riscal",
    fact: "The gold wire mesh around the bottle was added in the 19th century to stop fakes filled with cheap wine.",
    quiz: [
      { q: "What was the gold wire mesh on Riscal bottles originally for?", a: "Preventing counterfeits", x: ["Preventing breakage in transport", "Blocking sunlight", "Gift wrapping"] },
      { q: "Which architect designed Marqués de Riscal’s rippling titanium hotel?", a: "Frank Gehry", x: ["Zaha Hadid", "Tadao Ando", "Rem Koolhaas"] },
    ],
  },
  vegasicilia: {
    producer: "Bodegas Vega Sicilia",
    fact: "Spain’s greatest red, released only after nearly ten years of ageing. “Único” means “the only one”.",
    quiz: [
      { q: "What does the Spanish word “Único” mean?", a: "Unique, the only one", x: ["First", "Old", "Royal"] },
      { q: "Which Vega Sicilia wine is aged for less time than Único?", a: "Valbuena 5°", x: ["Alión", "Pingus", "Pesquera"] },
    ],
  },
  tiopepe: {
    producer: "González Byass",
    fact: "The benchmark fino sherry, aged under “flor”, a film of yeast on the wine’s surface, giving a pale colour and a salty tang.",
    quiz: [
      { q: "What is the yeast film on fino sherry that protects it from oxidation?", a: "Flor", x: ["Botrytis", "Mousse", "Solera"] },
      { q: "What is the method of ageing sherry by moving and blending it through tiers of casks?", a: "The solera system", x: ["Appassimento", "The Champagne method", "Carbonic maceration"] },
    ],
  },
  freixenet: {
    producer: "Freixenet",
    fact: "A Spanish sparkling Cava made by second fermentation in bottle, like Champagne. The matt jet-black bottle is its trademark.",
    quiz: [
      { q: "How does Cava get its bubbles?", a: "Second fermentation in bottle (traditional method)", x: ["Carbon dioxide injection", "Tank fermentation (Charmat method)", "Adding brandy during fermentation"] },
    ],
  },
  mateus: {
    producer: "Sogrape",
    fact: "Its flat flask bottle was inspired by a World War I soldier’s canteen. The building on the label is the Mateus Palace.",
    quiz: [
      { q: "What inspired the shape of the Mateus bottle?", a: "A WWI soldier’s canteen", x: ["A leather wineskin", "A holy-water flask", "A perfume bottle"] },
      { q: "Which building is pictured on the Mateus label?", a: "The Mateus Palace", x: ["Belém Tower", "Porto Cathedral", "Pena Palace"] },
    ],
  },
  taylors: {
    producer: "Taylor Fladgate",
    fact: "Port is a fortified wine: brandy is added mid-fermentation to keep it sweet. Founded in 1692, Taylor’s is one of the oldest Port houses.",
    quiz: [
      { q: "What is added during fermentation to make Port?", a: "Grape brandy", x: ["Sugar syrup", "Honey", "Whisky"] },
      { q: "In what year was Taylor’s (Taylor Fladgate) founded?", a: "1692", x: ["1815", "1756", "1888"] },
    ],
  },
  tokaji: {
    producer: "Royal Tokaji",
    fact: "A noble-rot sweet wine that Louis XIV reportedly called “the wine of kings, the king of wines”. Puttonyos show how much botrytized grape was added.",
    quiz: [
      { q: "Which king is said to have called Tokaji “the wine of kings, the king of wines”?", a: "Louis XIV", x: ["Napoleon", "Henry VIII", "Peter the Great"] },
      { q: "What do “puttonyos” indicate?", a: "The amount of botrytized grapes (sweetness)", x: ["Years of ageing", "Alcohol content", "Vineyard rank"] },
    ],
  },
  bikaver: {
    producer: "Eger region wineries",
    fact: "Means “bull’s blood”. Legend says that in 1552 Ottoman troops saw Hungarian soldiers’ red-stained beards and fled in fear, thinking they drank bull’s blood.",
    quiz: [
      { q: "What does “Bikavér” mean?", a: "Bull’s blood", x: ["Red sun", "Dragon’s tears", "King’s blood"] },
      { q: "Who was the enemy at the 1552 siege of Eger that gave rise to the bull’s blood legend?", a: "The Ottoman Empire", x: ["The Mongol Empire", "The Habsburgs", "The Kingdom of France"] },
    ],
  },
  opusone: {
    producer: "Robert Mondavi & Baron Philippe de Rothschild",
    fact: "A joint creation of Robert Mondavi and Baron Philippe of Mouton Rothschild. The label shows both men’s profiles in overlapping silhouette.",
    quiz: [
      { q: "What was Opus One’s first vintage?", a: "1979", x: ["1966", "1985", "1994"] },
      { q: "From which field does the term “Opus One” come?", a: "Music (a first numbered work)", x: ["Painting", "Architecture", "Literature"] },
    ],
  },
  mondavi: {
    producer: "Robert Mondavi Winery",
    fact: "Founded in 1966, it was the first large winery built in Napa after Prohibition. The arch and bell tower on the label are the Oakville winery building.",
    quiz: [
      { q: "In what year was the Robert Mondavi Winery founded?", a: "1966", x: ["1933", "1976", "1989"] },
      { q: "What name did Robert Mondavi give his oak-aged Sauvignon Blanc?", a: "Fumé Blanc", x: ["Blanc de Blancs", "Verdejo", "White Zinfandel"] },
    ],
  },
  kj: {
    producer: "Kendall-Jackson",
    fact: "America’s best-selling Chardonnay for decades. An autumn-coloured grape leaf on the label is its symbol.",
    quiz: [
      { q: "What is the symbol on the Kendall-Jackson label?", a: "An autumn grape leaf", x: ["A bear", "A lighthouse", "A golden grape cluster"] },
      { q: "Who founded Kendall-Jackson?", a: "Jess Jackson", x: ["Robert Mondavi", "Ernest Gallo", "Chuck Wagner"] },
    ],
  },
  barefoot: {
    producer: "E. & J. Gallo",
    fact: "The bare footprint on the label recalls the old way of crushing grapes by foot. By volume it is one of the world’s largest wine brands.",
    quiz: [
      { q: "What tradition does the footprint on the Barefoot label recall?", a: "Crushing grapes by foot", x: ["Walking the vineyard barefoot", "A beach festival", "Dancing after the harvest"] },
    ],
  },
  grange: {
    producer: "Penfolds",
    fact: "Australia’s greatest red, created by winemaker Max Schubert through secret trials after a 1950s trip to Bordeaux inspired him. It has been listed as a heritage icon.",
    quiz: [
      { q: "Which winemaker first created Grange?", a: "Max Schubert", x: ["Peter Lehmann", "John Duval", "Wolf Blass"] },
      { q: "What was Grange originally called?", a: "Grange Hermitage", x: ["Grange Bordeaux", "Bin 1", "Penfolds Classic"] },
    ],
  },
  yellowtail: {
    producer: "Casella Family Brands",
    fact: "The animal on the label is not a kangaroo but a yellow-footed rock-wallaby. It grew into the best-selling imported wine in the US.",
    quiz: [
      { q: "Which animal is on the [yellow tail] label?", a: "Yellow-footed rock-wallaby", x: ["Kangaroo", "Koala", "Wombat"] },
    ],
  },
  cloudybay: {
    producer: "Cloudy Bay",
    fact: "Its first vintage in 1985 introduced New Zealand Sauvignon Blanc to the world. The mountains on the label are Marlborough’s Richmond Range.",
    quiz: [
      { q: "What is pictured on the Cloudy Bay label?", a: "The Richmond Range", x: ["Mount Cook", "The Tasman Sea", "The Waitaki River"] },
      { q: "What was Cloudy Bay’s first vintage?", a: "1985", x: ["1973", "1992", "2001"] },
    ],
  },
  almaviva: {
    producer: "Concha y Toro & Baron Philippe de Rothschild",
    fact: "The “Opus One of Chile”. The label pattern is the cosmic symbol painted on the “kultrún”, a ceremonial drum of the Mapuche people.",
    quiz: [
      { q: "Where does the Almaviva label pattern come from?", a: "The Mapuche “kultrún” drum", x: ["The Inca sun god", "The Easter Island statues", "The Andean condor"] },
      { q: "Almaviva is the name of a character from which work?", a: "Beaumarchais’s The Marriage of Figaro", x: ["Don Quixote", "Carmen", "Les Misérables"] },
    ],
  },
  montes: {
    producer: "Montes",
    fact: "The angel on the label is said to be the guardian angel who saved founder Douglas Murray from several accidents. One of the best-loved Chilean wines in Korea.",
    quiz: [
      { q: "What is the symbol on the Montes Alpha label?", a: "An angel", x: ["A devil", "A condor", "The sun"] },
      { q: "What is the main grape of Montes’s icon wine “Purple Angel”?", a: "Carmenère", x: ["Malbec", "Pinot Noir", "Tempranillo"] },
    ],
  },
  casillero: {
    producer: "Concha y Toro",
    fact: "Means “the Devil’s cellar”. Legend says the founder spread a rumour that the Devil lived in his cellar to scare off thieves.",
    quiz: [
      { q: "What does “Casillero del Diablo” mean?", a: "The Devil’s cellar", x: ["The Devil’s vineyard", "The angels’ share", "The gates of hell"] },
    ],
  },
  sanpedro1865: {
    producer: "Viña San Pedro",
    fact: "Named for the year the San Pedro winery was founded. In Korea it became a famous gift thanks to the golf wish “play 18 holes in 65 strokes”.",
    quiz: [
      { q: "What does the name “1865” refer to?", a: "The year Viña San Pedro was founded", x: ["The first harvest’s yield", "The vineyard’s altitude", "The founder’s birth year"] },
      { q: "Which good-luck wish made 1865 a popular gift in Korea?", a: "Play 18 holes in 65 strokes", x: ["Reach age 65 in 18 years", "Make 65 toasts on January 8", "Let 18 people share 65 bottles"] },
    ],
  },
  inniskillin: {
    producer: "Inniskillin",
    fact: "Pressed from grapes harvested frozen below −8°C. Winning the grand prize at Vinexpo 1991 put Canadian icewine on the world map.",
    quiz: [
      { q: "Below what temperature must grapes freeze before Canadian icewine can be harvested?", a: "−8°C", x: ["−2°C", "−20°C", "0°C"] },
      { q: "At which fair did Inniskillin Vidal Icewine win the grand prize in 1991?", a: "Vinexpo", x: ["Vinitaly", "ProWein", "London Wine Fair"] },
    ],
  },
  ott: {
    producer: "Domaines Ott",
    fact: "The curvy, bowling-pin-like bottle designed by the Ott family in the 1930s became a symbol of Provence rosé.",
    quiz: [
      { q: "When was the Domaines Ott curved bottle first designed?", a: "The 1930s", x: ["The 1880s", "The 1960s", "The 2000s"] },
      { q: "Which Champagne house acquired Domaines Ott in 2004?", a: "Louis Roederer", x: ["Moët & Chandon", "Veuve Clicquot", "Bollinger"] },
    ],
  },
  whisperingangel: {
    producer: "Château d'Esclans",
    fact: "Launched in 2006, it led the global rosé boom. The name comes from the whispering angel statue in the château’s chapel.",
    quiz: [
      { q: "Who owns Château d'Esclans, maker of Whispering Angel?", a: "Sacha Lichine", x: ["Brad Pitt", "Gérard Bertrand", "Alain Ducasse"] },
      { q: "In what year was Whispering Angel first released?", a: "2006", x: ["1985", "1998", "2015"] },
    ],
  },
  musar: {
    producer: "Hochar family",
    fact: "A winery that kept harvesting through Lebanon’s civil war, dodging shellfire. Its wines are aged for nearly seven years before release.",
    quiz: [
      { q: "Which winemaker made Château Musar world-famous?", a: "Serge Hochar", x: ["Michel Rolland", "Émile Peynaud", "André Tchelistcheff"] },
      { q: "In what year was Château Musar founded?", a: "1930", x: ["1855", "1975", "1998"] },
    ],
  },
};

export default T;
