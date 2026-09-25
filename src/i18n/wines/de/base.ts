import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  lafite: {
    fact: "In der Klassifikation des Médoc von 1855 steht es als erstes unter den Premiers Crus. Das Etikett zeigt einen Stich des Château-Gebäudes mit seinem Turm.",
    quiz: [
      { q: "Welche Familie kaufte Château Lafite Rothschild im Jahr 1868?", a: "Familie Rothschild", x: ["Haus Orléans", "Königshaus Bourbon", "Familie Medici"] },
      { q: "Wie heißt der Zweitwein von Château Lafite Rothschild?", a: "Carruades de Lafite", x: ["Les Forts de Latour", "Pavillon Rouge du Château Margaux", "Le Petit Mouton"] },
    ],
  },
  margaux: {
    fact: "Das klassizistische Château wird „Versailles des Médoc“ genannt. Markenzeichen ist das Etikett mit dem Stich des Säulenportals.",
    quiz: [
      { q: "Wie heißt der Zweitwein von Château Margaux?", a: "Pavillon Rouge du Château Margaux", x: ["Carruades de Lafite", "Les Forts de Latour", "Le Clarence de Haut-Brion"] },
      { q: "Wie heißt der Weißwein von Château Margaux?", a: "Pavillon Blanc", x: ["Aile d’Argent", "Blanc de Lynch-Bages", "Musigny Blanc"] },
    ],
  },
  latour: {
    fact: "Der Turm mit dem Löwen auf dem Etikett erinnert an eine Festung aus dem Hundertjährigen Krieg. Seit 2012 verkauft das Gut nicht mehr en primeur, sondern bringt die Weine erst nach der Reifung auf den Markt.",
    quiz: [
      { q: "Welche Verkaufsform hat Château Latour 2012 aufgegeben?", a: "En primeur (Subskription)", x: ["Versteigerung", "Export ins Ausland", "Verkauf in Magnumflaschen"] },
      { q: "Wie heißt der Zweitwein von Château Latour?", a: "Les Forts de Latour", x: ["Carruades de Lafite", "Le Petit Mouton", "Clos du Marquis"] },
    ],
  },
  mouton: {
    fact: "Seit 1945 gestaltet jedes Jahr ein Künstler wie Chagall, Picasso oder Warhol den oberen Teil des Etiketts. 1973 stieg es als einziges Château vom Deuxième Cru zum Premier Cru auf.",
    quiz: [
      { q: "In welchem Jahr stieg Château Mouton Rothschild vom Deuxième Cru zum Premier Cru auf?", a: "1973", x: ["1855", "1945", "1982"] },
      { q: "Welches Symbol zierte 1945 das Etikett von Château Mouton Rothschild?", a: "Ein V für den Sieg", x: ["Eine Friedenstaube", "Der Eiffelturm", "Ein Widder mit Lorbeerkranz"] },
    ],
  },
  hautbrion: {
    fact: "In der Klassifikation von 1855 wurde es als einziges Gut aus den Graves statt aus dem Médoc zum Premier Cru. Im 17. Jahrhundert war es zudem der erste Wein, der in London unter eigenem Namen verkauft wurde.",
    quiz: [
      { q: "Welchen Rang erhielt Château Haut-Brion in der Klassifikation von 1855?", a: "Premier Cru", x: ["Deuxième Cru", "Troisième Cru", "Cinquième Cru"] },
      { q: "Welcher US-Bankier kaufte Château Haut-Brion im Jahr 1935?", a: "Clarence Dillon", x: ["J. P. Morgan", "John D. Rockefeller", "Andrew Mellon"] },
    ],
  },
  petrus: {
    fact: "Die Legende aus Pomerol wird fast zu 100 % aus Merlot gekeltert. Die Figur auf dem Etikett ist der heilige Petrus mit dem Himmelsschlüssel.",
    quiz: [
      { q: "Wer ist auf dem Etikett von Pétrus abgebildet?", a: "Der heilige Petrus mit Schlüssel", x: ["Der Apostel Paulus", "Bacchus", "Napoleon"] },
      { q: "Für welchen Boden ist der Weinberg von Pétrus berühmt?", a: "Blauer Ton", x: ["Kalksteinkies", "Granit", "Vulkanasche"] },
    ],
  },
  yquem: {
    fact: "Der Gipfel des edelsüßen Sauternes aus edelfaulen (Botrytis-)Trauben. 1855 erhielt es als einziges Gut den Rang Premier Cru Supérieur; das Gold in der klaren Flasche ist ein deutlicher Hinweis.",
    quiz: [
      { q: "Welchen einzigartigen Rang erhielt Château d'Yquem 1855?", a: "Premier Cru Supérieur", x: ["Premier Grand Cru Classé A", "Grand Cru", "Cru Bourgeois"] },
      { q: "Welcher Pilz lässt die Trauben von Château d'Yquem schrumpfen und konzentriert ihre Süße?", a: "Botrytis cinerea (Edelfäule)", x: ["Penicillium", "Florhefe", "Oidium"] },
    ],
  },
  chevalblanc: {
    fact: "Der Riese aus Saint-Émilion mit hohem Cabernet-Franc-Anteil. Berühmt wurde er auch durch den Film „Sideways“, in dem die Hauptfigur einen 1961er für einen besonderen Anlass hütet.",
    quiz: [
      { q: "Welchen Jahrgang Château Cheval Blanc hütet die Hauptfigur im Film „Sideways“?", a: "1961", x: ["1982", "1947", "2000"] },
    ],
  },
  drc: {
    fact: "Aus der nur gut 1,8 ha großen Einzellage kommen jährlich nur rund 6.000 Flaschen. Jedes Etikett trägt eine fortlaufende Flaschennummer.",
    quiz: [
      { q: "Wie groß ist der Weinberg Romanée-Conti ungefähr?", a: "ca. 1,8 ha", x: ["ca. 18 ha", "ca. 50 ha", "ca. 0,2 ha"] },
      { q: "Auf wen geht das „Conti“ in Romanée-Conti zurück?", a: "Den Prinzen von Conti, der die Lage 1760 kaufte", x: ["Einen General Napoleons", "Papst Conti III.", "Einen Mönch und Winzer namens Conti"] },
    ],
  },
  jadot: {
    fact: "Das Handelshaus (Négociant) aus Beaune ist berühmt für das Wappen mit dem Kopf des Weingottes Bacchus auf dem Etikett. Gegründet 1859.",
    quiz: [
      { q: "Wessen Kopf zeigt das Wappen auf dem Etikett von Louis Jadot?", a: "Bacchus (Gott des Weins)", x: ["Poseidon", "Der heilige Vinzenz", "Gründer Louis Jadot"] },
      { q: "In welchem Jahr wurde Louis Jadot gegründet?", a: "1859", x: ["1729", "1920", "1966"] },
    ],
  },
  duboeuf: {
    fact: "Der junge Wein kommt jedes Jahr am dritten Donnerstag im November weltweit gleichzeitig in den Handel. Sein Symbol ist das jährlich wechselnde Blumenetikett.",
    quiz: [
      { q: "Wann kommt der Beaujolais Nouveau in den Handel?", a: "Am dritten Donnerstag im November", x: ["Am ersten Freitag im November", "Am 1. Dezember", "Am letzten Samstag im Oktober"] },
      { q: "Welches Gärverfahren macht den Beaujolais Nouveau so früh trinkreif?", a: "Kohlensäuremaischung (Macération carbonique)", x: ["Solera", "Appassimento", "Zweite Gärung in der Flasche"] },
    ],
  },
  beaucastel: {
    fact: "Das Spitzengut aus Châteauneuf-du-Pape verwendet alle 13 zugelassenen Rebsorten. Flaschen dieser Appellation tragen oft ein eingeprägtes Wappen mit Papstkrone und Petrusschlüsseln.",
    quiz: [
      { q: "Wie viele der in Châteauneuf-du-Pape zugelassenen Rebsorten verwendet Château de Beaucastel?", a: "13", x: ["3", "7", "21"] },
      { q: "Was bedeutet der Name „Châteauneuf-du-Pape“?", a: "Neue Burg des Papstes", x: ["Weinberg des Papstes", "Neue Burg des Königs", "Neun Burgen"] },
    ],
  },
  domperignon: {
    fact: "Ein Prestige-Champagner, der nur in guten Jahren erzeugt wird. Typisch sind das schildförmige Etikett und die altmodische Flasche; der Name geht auf den Mönch Pierre Pérignon aus dem 17. Jahrhundert zurück.",
    quiz: [
      { q: "Wer war der Namensgeber von Dom Pérignon?", a: "Ein Benediktinermönch im 17. Jahrhundert", x: ["Ein General Napoleons", "Der Gründer der Familie Moët", "Der Koch Ludwigs XIV."] },
      { q: "In welchen Jahren wird Dom Pérignon erzeugt?", a: "Nur in guten Jahren", x: ["Jedes Jahr", "In jedem Schaltjahr", "Einmal alle 10 Jahre"] },
    ],
  },
  moet: {
    fact: "Das meistverkaufte Champagnerhaus der Welt. Der Name „Impérial“ erinnert an die Verbindung zu Kaiser Napoleon.",
    quiz: [
      { q: "Mit welcher Persönlichkeit ist der Name „Impérial“ von Moët & Chandon verbunden?", a: "Napoleon", x: ["Ludwig XIV.", "Marie Antoinette", "Charles de Gaulle"] },
      { q: "In welchem Jahr wurde Moët & Chandon gegründet?", a: "1743", x: ["1829", "1668", "1921"] },
    ],
  },
  veuve: {
    fact: "„Veuve“ bedeutet Witwe. Madame Clicquot, die mit 27 Jahren ihren Mann verlor, führte das Haus und erfand das Rütteln, bei dem durch Drehen der Flaschen die Hefe im Flaschenhals gesammelt wird.",
    quiz: [
      { q: "Was bedeutet das französische Wort „Veuve“?", a: "Witwe", x: ["Alte Dame", "Königin", "Tochter"] },
      { q: "Wie heißt das von Madame Clicquot erfundene Verfahren, bei dem die Flaschen gedreht werden, bis sich der Hefesatz im Hals sammelt?", a: "Rütteln (Remuage)", x: ["Dégorgement", "Solera", "Bâtonnage"] },
    ],
  },
  cristal: {
    fact: "Die klare Flasche wurde für Zar Alexander II. geschaffen. Berühmt ist die Anekdote, dass die Einbuchtung im Flaschenboden fehlt, damit sich darin keine Bombe verstecken ließ.",
    quiz: [
      { q: "Für wen wurde Cristal ursprünglich hergestellt?", a: "Zar Alexander II. von Russland", x: ["Napoleon III.", "Königin Victoria", "Ludwig XVI."] },
      { q: "Was unterscheidet die Cristal-Flasche von anderen Champagnerflaschen?", a: "Sie ist klar und hat keine Bodeneinbuchtung", x: ["Sie ist metallbeschichtet", "Sie hat einen bauchigen Hals", "Sie ist viereckig"] },
    ],
  },
  armand: {
    fact: "Die metallisch vergoldete Flasche mit aufgesetztem Pik-Emblem aus Zinn brachte ihr den Spitznamen „Ace of Spades“ ein. 2021 übernahm LVMH die Hälfte der Anteile.",
    quiz: [
      { q: "Welchen Spitznamen trägt Armand de Brignac?", a: "Ace of Spades", x: ["Golden Crown", "Black Queen", "Royal Heart"] },
      { q: "Welcher Konzern kaufte 2021 die Hälfte der Anteile an Armand de Brignac?", a: "LVMH", x: ["Kering", "Pernod Ricard", "Diageo"] },
    ],
  },
  pj: {
    fact: "Die weißen Anemonen, 1902 vom Jugendstil-Glaskünstler Émile Gallé entworfen, sind direkt in Emaille auf die Flasche aufgebracht.",
    quiz: [
      { q: "Welche Blume ziert die Flasche von Perrier-Jouët Belle Époque?", a: "Anemone", x: ["Rose", "Lilie", "Lavendel"] },
      { q: "Welcher Jugendstil-Künstler entwarf das Blumendekor der Belle Époque?", a: "Émile Gallé", x: ["Alfons Mucha", "René Lalique", "Gustav Klimt"] },
    ],
  },
  ruinart: {
    fact: "Das 1729 gegründete älteste Champagnerhaus. Der reine Chardonnay steckt in einer runden, klaren Flasche nach dem Vorbild des 18. Jahrhunderts.",
    quiz: [
      { q: "In welchem Jahr wurde Ruinart gegründet?", a: "1729", x: ["1743", "1811", "1876"] },
      { q: "Was waren die Kreidekeller („Crayères“), in denen Ruinart seinen Champagner reifen lässt, ursprünglich?", a: "Steinbrüche aus der Römerzeit", x: ["Katakomben eines mittelalterlichen Klosters", "Luftschutzbunker aus dem Zweiten Weltkrieg", "Alte Kohlebergwerke"] },
    ],
  },
  trimbach: {
    fact: "Das Elsässer Traditionshaus besteht seit 1626. Elsässer Wein darf gesetzlich nur in die lange, schlanke „Flûte“ abgefüllt werden.",
    quiz: [
      { q: "Seit welchem Jahr macht die Familie Trimbach Wein?", a: "1626", x: ["1789", "1855", "1920"] },
      { q: "Wie heißt der legendäre Einzellagen-Riesling von Trimbach?", a: "Clos Sainte Hune", x: ["Scharzhofberg", "Clos des Mouches", "Hill of Grace"] },
    ],
  },
  egonmuller: {
    fact: "Legendärer Riesling aus der Lage Scharzhofberg an der Saar. Die Trockenbeerenauslese gilt als teuerster Weißwein der Welt.",
    quiz: [
      { q: "Welches ist das teuerste Prädikat beim Egon Müller Scharzhofberger?", a: "Trockenbeerenauslese (TBA)", x: ["Kabinett", "Spätlese", "Großes Gewächs"] },
      { q: "Wo werden die Spitzenweine von Egon Müller vor allem verkauft?", a: "Bei der VDP-Versteigerung in Trier", x: ["Per Online-Verlosung", "En primeur in Bordeaux", "Per Versand an Clubmitglieder"] },
    ],
  },
  drloosen: {
    fact: "Mosel-Riesling, bekannt für das Etikett mit den großen Buchstaben „Dr. L“. Traditionell kam Moselwein in grüne, Rheinwein in braune Flaschen.",
    quiz: [
      { q: "Welcher Winzer leitet das Weingut Dr. Loosen?", a: "Ernst Loosen", x: ["Egon Müller", "Wilhelm Weil", "Helmut Dönnhoff"] },
      { q: "Welchen Riesling erzeugt Dr. Loosen gemeinsam mit Chateau Ste. Michelle in den USA?", a: "Eroica", x: ["Opus One", "Almaviva", "Seña"] },
    ],
  },
  bluenun: {
    fact: "In den 1920er-Jahren entstanden, wurde sie in den 1980ern zur meistverkauften Weinmarke der Welt. Der Name stammt von den blau gekleideten Nonnen auf dem Etikett.",
    quiz: [
      { q: "Woher hat Blue Nun ihren Namen?", a: "Von blau gekleideten Nonnen auf dem Etikett", x: ["Von blauen Trauben", "Vom blauen Wasser des Rheins", "Von der Tochter des Gründers"] },
    ],
  },
  juliusspital: {
    fact: "Die flache, runde Bocksbeutel-Flasche ist geschützt und dem Frankenwein vorbehalten. Das Juliusspital ist ein Weingut, das von einer 1576 gegründeten Spitalstiftung betrieben wird.",
    quiz: [
      { q: "Wer betreibt das Weingut Juliusspital?", a: "Eine 1576 gegründete Spitalstiftung", x: ["Das bayerische Königshaus", "Die Universität Würzburg", "Ein Benediktinerkloster"] },
    ],
  },
  sassicaia: {
    fact: "Der Urvater der „Super Tuscans“. Als erster Wein Italiens erhielt er eine eigene Herkunftsbezeichnung für ein einzelnes Gut (Bolgheri Sassicaia DOC). Der Stern auf dem Etikett ist eine Windrose.",
    quiz: [
      { q: "Was stellt der Stern auf dem Etikett von Sassicaia dar?", a: "Eine Windrose", x: ["Den Davidstern", "Das Wappen der Medici", "Den Polarstern"] },
      { q: "Was bedeutet der Name „Sassicaia“?", a: "Steiniger Boden", x: ["Meeresbrise", "Hügel des Jägers", "Rote Erde"] },
    ],
  },
  gaja: {
    fact: "Berühmt für das Etikett, auf dem nur die vier fetten schwarzen Buchstaben „GAJA“ auf weißem Grund stehen. Angelo Gaja machte Barbaresco zu einem Wein von Weltrang.",
    quiz: [
      { q: "Wer machte Gaja zu einem weltberühmten Weingut?", a: "Angelo Gaja", x: ["Bruno Giacosa", "Piero Antinori", "Giacomo Conterno"] },
      { q: "In welchem Jahr wurde das Weingut Gaja gegründet?", a: "1859", x: ["1920", "1961", "1783"] },
    ],
  },
  chianti: {
    fact: "Der „Fiasco“ mit seinem strohumwickelten runden Boden ist das Symbol des Chianti. Das Stroh schützte die Flasche beim Transport vor dem Zerbrechen.",
    quiz: [
      { q: "Wozu diente die Strohhülle der Chianti-Flasche ursprünglich?", a: "Schutz vor Bruch beim Transport", x: ["Den Wein kühl halten", "Schutz vor Sonnenlicht", "Schutz vor Fälschungen"] },
      { q: "Welches Tier ist das Symbol des Chianti-Classico-Siegels?", a: "Schwarzer Hahn (Gallo Nero)", x: ["Roter Löwe", "Weiße Taube", "Goldener Wolf"] },
    ],
  },
  masi: {
    fact: "Ein dichter, kraftvoller Rotwein aus Trauben, die über drei Monate getrocknet werden (Appassimento), um den Zucker zu konzentrieren. Amarone bedeutet „mit bitterem Anklang“.",
    quiz: [
      { q: "Wie heißt das Trocknen der Trauben bei der Herstellung von Amarone?", a: "Appassimento", x: ["Solera", "Botrytis", "Macération carbonique"] },
    ],
  },
  biondisanti: {
    fact: "Die Familie, die den Brunello di Montalcino erfand. Ende des 19. Jahrhunderts wählte sie den großbeerigen Sangiovese-Klon „Brunello“ aus und ließ den Wein lange reifen.",
    quiz: [
      { q: "Unter welchem anderen Namen kennt man den Sangiovese, aus dem Biondi-Santi den Brunello schuf?", a: "Sangiovese Grosso", x: ["Morellino", "Prugnolo Gentile", "Nebbiolo"] },
    ],
  },
  riscal: {
    fact: "Das goldene Drahtgeflecht um die Flasche sollte im 19. Jahrhundert Fälschungen verhindern, bei denen billiger Wein in die Flaschen gefüllt wurde.",
    quiz: [
      { q: "Wozu diente das goldene Drahtgeflecht um die Flasche von Marqués de Riscal ursprünglich?", a: "Schutz vor Fälschungen", x: ["Schutz vor Bruch beim Transport", "Schutz vor Sonnenlicht", "Als Geschenkverpackung"] },
      { q: "Welcher Architekt entwarf das wellenförmige Titan-Hotel von Marqués de Riscal?", a: "Frank Gehry", x: ["Zaha Hadid", "Tadao Ando", "Rem Koolhaas"] },
    ],
  },
  vegasicilia: {
    fact: "Spaniens bester Rotwein kommt erst nach fast zehn Jahren Reifung auf den Markt. „Único“ bedeutet „einzigartig“.",
    quiz: [
      { q: "Was bedeutet das spanische Wort „Único“?", a: "Einzigartig", x: ["Der Erste", "Alt", "Königlich"] },
      { q: "Welchen Wein bringt Vega Sicilia nach kürzerer Reifung als den Único heraus?", a: "Valbuena 5°", x: ["Alión", "Pingus", "Pesquera"] },
    ],
  },
  tiopepe: {
    fact: "Der Inbegriff des Fino-Sherrys: Er reift unter der Florhefe, die sich auf der Weinoberfläche bildet, und wird dadurch hell und salzig-würzig.",
    quiz: [
      { q: "Wie heißt die Hefeschicht auf dem Fino-Sherry, die den Wein vor Oxidation schützt?", a: "Flor", x: ["Botrytis", "Mousse", "Solera"] },
      { q: "Wie heißt das Verfahren, bei dem Sherry durch übereinander gestapelte Fässer weitergegeben und verschnitten wird?", a: "Solera-System", x: ["Appassimento", "Méthode champenoise", "Macération carbonique"] },
    ],
  },
  freixenet: {
    fact: "Cava ist spanischer Schaumwein, der wie Champagner durch eine zweite Gärung in der Flasche entsteht. Markenzeichen ist die mattschwarze Flasche.",
    quiz: [
      { q: "Wie entstehen die Bläschen im Cava?", a: "Zweite Gärung in der Flasche (traditionelle Methode)", x: ["Zusatz von Kohlensäure", "Tankgärung (Charmat-Methode)", "Brandyzusatz während der Gärung"] },
    ],
  },
  mateus: {
    fact: "Die flache Flaschenform ist von den Feldflaschen der Soldaten im Ersten Weltkrieg inspiriert. Das Gebäude auf dem Etikett ist der Mateus-Palast.",
    quiz: [
      { q: "Wovon ist die Form der Mateus-Flasche inspiriert?", a: "Feldflasche eines Soldaten im Ersten Weltkrieg", x: ["Lederner Weinschlauch", "Weihwasserfläschchen", "Parfümflakon"] },
      { q: "Welches Gebäude zeigt das Etikett von Mateus Rosé?", a: "Mateus-Palast", x: ["Turm von Belém", "Kathedrale von Porto", "Pena-Palast"] },
    ],
  },
  taylors: {
    fact: "Portwein ist ein Likörwein, bei dem während der Gärung Branntwein zugesetzt wird, damit Süße erhalten bleibt. Das 1692 gegründete Haus ist eines der ältesten Porthäuser.",
    quiz: [
      { q: "Was wird bei der Herstellung von Portwein während der Gärung zugesetzt?", a: "Traubenbrand", x: ["Zuckersirup", "Honig", "Whisky"] },
      { q: "In welchem Jahr wurde Taylor's (Taylor Fladgate) gegründet?", a: "1692", x: ["1815", "1756", "1888"] },
    ],
  },
  tokaji: {
    fact: "Edelsüßer Wein, den Ludwig XIV. den „Wein der Könige, König der Weine“ genannt haben soll. Die Zahl der Puttonyos gibt an, wie viele edelfaule Trauben zugesetzt wurden.",
    quiz: [
      { q: "Welcher König soll Tokajer den „Wein der Könige, König der Weine“ genannt haben?", a: "Ludwig XIV.", x: ["Napoleon", "Heinrich VIII.", "Peter der Große"] },
      { q: "Was geben die „Puttonyos“ an?", a: "Menge der edelfaulen Trauben (Süße)", x: ["Jahre der Reifung", "Alkoholgehalt", "Rang des Weinbergs"] },
    ],
  },
  bikaver: {
    fact: "Der Name bedeutet „Stierblut“. Der Legende nach erschraken 1552 die osmanischen Truppen über die rot gefärbten Bärte der ungarischen Verteidiger, weil sie glaubten, diese tränken Stierblut.",
    quiz: [
      { q: "Was bedeutet „Bikavér“?", a: "Stierblut", x: ["Rote Sonne", "Drachenträne", "Königsblut"] },
      { q: "Gegen wen wurde Eger 1552 verteidigt, als die Stierblut-Legende entstand?", a: "Osmanisches Reich", x: ["Mongolisches Reich", "Haus Habsburg", "Königreich Frankreich"] },
    ],
  },
  opusone: {
    fact: "Gemeinschaftswerk von Robert Mondavi und Baron Philippe de Rothschild von Mouton. Auf dem Etikett überlagern sich die Profile der beiden.",
    quiz: [
      { q: "Welches ist der erste Jahrgang von Opus One?", a: "1979", x: ["1966", "1985", "1994"] },
      { q: "Aus welchem Bereich stammt der Begriff „Opus One“?", a: "Musik (Werk Nr. 1)", x: ["Malerei", "Architektur", "Literatur"] },
    ],
  },
  mondavi: {
    fact: "1966 als erstes großes Weingut im Napa Valley seit der Prohibition gegründet. Bogen und Glockenturm auf dem Etikett zeigen das Kellereigebäude in Oakville.",
    quiz: [
      { q: "In welchem Jahr wurde das Weingut Robert Mondavi gegründet?", a: "1966", x: ["1933", "1976", "1989"] },
      { q: "Welchen Namen gab Robert Mondavi seinem im Eichenfass ausgebauten Sauvignon Blanc?", a: "Fumé Blanc", x: ["Blanc de Blancs", "Verdejo", "White Zinfandel"] },
    ],
  },
  kj: {
    fact: "Seit Jahrzehnten der meistverkaufte Chardonnay der USA. Sein Symbol ist das herbstlich gefärbte Rebenblatt auf dem Etikett.",
    quiz: [
      { q: "Welches Symbol trägt das Etikett von Kendall-Jackson?", a: "Herbstlich gefärbtes Rebenblatt", x: ["Bär", "Leuchtturm", "Goldene Traube"] },
      { q: "Wer gründete Kendall-Jackson?", a: "Jess Jackson", x: ["Robert Mondavi", "Ernest Gallo", "Chuck Wagner"] },
    ],
  },
  barefoot: {
    fact: "Der nackte Fußabdruck auf dem Etikett erinnert an das alte Stampfen der Trauben mit den Füßen. Nach Absatz ist es eine der größten Weinmarken der Welt.",
    quiz: [
      { q: "An welche Tradition erinnert der Fußabdruck auf dem Etikett von Barefoot?", a: "Trauben mit den Füßen stampfen", x: ["Barfuß durch den Weinberg gehen", "Ein Strandfest", "Tanzen nach der Lese"] },
    ],
  },
  grange: {
    fact: "Australiens bester Rotwein: Kellermeister Max Schubert entwickelte ihn in den 1950er-Jahren nach einer Bordeaux-Reise zunächst heimlich. Er ist als Kulturerbe anerkannt.",
    quiz: [
      { q: "Welcher Kellermeister schuf den ersten Grange?", a: "Max Schubert", x: ["Peter Lehmann", "John Duval", "Wolf Blass"] },
      { q: "Unter welchem Namen wurde Grange ursprünglich verkauft?", a: "Grange Hermitage", x: ["Grange Bordeaux", "Bin 1", "Penfolds Classic"] },
    ],
  },
  yellowtail: {
    fact: "Das Tier auf dem Etikett ist kein Känguru, sondern ein Gelbfuß-Felswallaby. Die Marke wurde zum meistverkauften Importwein der USA.",
    quiz: [
      { q: "Welches Tier zeigt das Etikett von [yellow tail]?", a: "Gelbfuß-Felswallaby", x: ["Känguru", "Koala", "Wombat"] },
    ],
  },
  cloudybay: {
    fact: "Mit dem ersten Jahrgang 1985 machte das Gut neuseeländischen Sauvignon Blanc weltbekannt. Die Berge auf dem Etikett sind die Richmond Range in Marlborough.",
    quiz: [
      { q: "Was ist auf dem Etikett von Cloudy Bay abgebildet?", a: "Die Richmond Range", x: ["Mount Cook", "Die Tasmansee", "Der Waitaki River"] },
      { q: "Welches ist der erste Jahrgang von Cloudy Bay?", a: "1985", x: ["1973", "1992", "2001"] },
    ],
  },
  almaviva: {
    fact: "Der „Opus One Chiles“. Das Muster auf dem Etikett ist ein kosmisches Symbol, das die Mapuche auf ihre Ritualtrommel „Kultrún“ malen.",
    quiz: [
      { q: "Woher stammt das Muster auf dem Etikett von Almaviva?", a: "Von der Mapuche-Trommel „Kultrún“", x: ["Vom Sonnengott der Inka", "Von den Statuen der Osterinsel", "Vom Andenkondor"] },
      { q: "Aus welchem Werk stammt die Figur Almaviva?", a: "Beaumarchais’ „Die Hochzeit des Figaro“", x: ["„Don Quijote“", "„Carmen“", "„Les Misérables“"] },
    ],
  },
  montes: {
    fact: "Der Engel auf dem Etikett soll der Schutzengel sein, der Gründer Douglas Murray mehrmals vor Unfällen bewahrte. Einer der beliebtesten chilenischen Weine in Korea.",
    quiz: [
      { q: "Welches Symbol trägt das Etikett von Montes Alpha?", a: "Ein Engel", x: ["Ein Teufel", "Ein Kondor", "Die Sonne"] },
      { q: "Welches ist die Hauptrebsorte des Montes-Spitzenweins „Purple Angel“?", a: "Carmenère", x: ["Malbec", "Pinot Noir", "Tempranillo"] },
    ],
  },
  casillero: {
    fact: "Der Name bedeutet „Keller des Teufels“. Der Legende nach verbreitete der Gründer das Gerücht, im Keller wohne der Teufel, um Diebe fernzuhalten.",
    quiz: [
      { q: "Was bedeutet „Casillero del Diablo“?", a: "Keller des Teufels", x: ["Weinberg des Teufels", "Anteil der Engel", "Tor zur Hölle"] },
    ],
  },
  sanpedro1865: {
    fact: "Der Name ist das Gründungsjahr des Weinguts San Pedro. In Korea wurde er als Geschenk berühmt, verbunden mit dem Golfer-Glückwunsch, „18 Löcher mit 65 Schlägen zu spielen“.",
    quiz: [
      { q: "Wofür steht der Name „1865“?", a: "Gründungsjahr des Weinguts San Pedro", x: ["Erntemenge im ersten Jahr", "Höhenlage des Weinbergs", "Geburtsjahr des Gründers"] },
      { q: "Mit welchem Glückwunsch wurde 1865 in Korea zum beliebten Geschenk?", a: "18 Löcher mit 65 Schlägen spielen", x: ["Von 18 bis 65 gesund bleiben", "Am 8. Januar 65-mal anstoßen", "65 Flaschen unter 18 Leuten teilen"] },
    ],
  },
  inniskillin: {
    fact: "Die Trauben werden erst bei Temperaturen unter minus 8 °C gefroren gelesen und gepresst. Mit dem Grand Prix der Vinexpo 1991 machte das Gut kanadischen Eiswein weltbekannt.",
    quiz: [
      { q: "Unter welcher Temperatur müssen die Trauben für kanadischen Eiswein gefroren gelesen werden?", a: "Minus 8 °C", x: ["Minus 2 °C", "Minus 20 °C", "0 °C"] },
      { q: "Auf welcher Messe gewann der Inniskillin Vidal Icewine 1991 den Hauptpreis?", a: "Vinexpo", x: ["Vinitaly", "ProWein", "London Wine Fair"] },
    ],
  },
  ott: {
    fact: "Die geschwungene, an einen Kegel erinnernde Flasche, die die Familie Ott in den 1930er-Jahren entwarf, wurde zum Symbol des Provence-Rosés.",
    quiz: [
      { q: "Wann wurde die geschwungene Flasche von Domaines Ott entworfen?", a: "In den 1930er-Jahren", x: ["In den 1880er-Jahren", "In den 1960er-Jahren", "In den 2000er-Jahren"] },
      { q: "Welches Champagnerhaus übernahm Domaines Ott im Jahr 2004?", a: "Louis Roederer", x: ["Moët & Chandon", "Veuve Clicquot", "Bollinger"] },
    ],
  },
  whisperingangel: {
    fact: "2006 eingeführt, trieb er den weltweiten Rosé-Boom voran. Der Name stammt von einer flüsternden Engelsfigur in der Kapelle des Châteaus.",
    quiz: [
      { q: "Wem gehört Château d’Esclans, das Whispering Angel erzeugt?", a: "Sacha Lichine", x: ["Brad Pitt", "Gérard Bertrand", "Alain Ducasse"] },
      { q: "In welchem Jahr kam Whispering Angel erstmals auf den Markt?", a: "2006", x: ["1985", "1998", "2015"] },
    ],
  },
  musar: {
    fact: "Selbst während des libanesischen Bürgerkriegs wurde hier trotz Granatbeschuss weiter gelesen. Vor der Freigabe reift der Wein fast 7 Jahre.",
    quiz: [
      { q: "Welcher Winzer machte Château Musar weltbekannt?", a: "Serge Hochar", x: ["Michel Rolland", "Émile Peynaud", "André Tchelistcheff"] },
      { q: "In welchem Jahr wurde Château Musar gegründet?", a: "1930", x: ["1855", "1975", "1998"] },
    ],
  },
};

export default T;
