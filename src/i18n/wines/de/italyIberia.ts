import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  ib_sorisanlorenzo: {
    fact: "Der erste Einzellagenwein, den Gaja 1967 herausbrachte. Eine Zeit lang kam er mit etwas Barbera als „Langhe Nebbiolo“ auf den Markt, seit dem Jahrgang 2013 ist er wieder ein Barbaresco.",
    quiz: [
      { q: "Was bedeutet „Sorì“ im Namen Sorì San Lorenzo von Gaja im piemontesischen Dialekt?", a: "Sonniger, nach Süden gerichteter Hang", x: ["Nebliges Tal", "Kirchenvorplatz", "Alte Rebstöcke"] },
    ],
  },
  ib_monfortino: {
    fact: "Barolo Riserva, den Giacomo Conterno aus Trauben aus Serralunga keltert. Er reift viele Jahre in großen Holzfässern, bevor er auf den Markt kommt – der Gipfel des traditionellen Barolo.",
    quiz: [
      { q: "In welchen Jahren wird der Monfortino Barolo Riserva erzeugt?", a: "Nur in herausragenden Jahrgängen", x: ["Jedes Jahr ohne Ausnahme", "Genau alle zwei Jahre", "Nur in Schaltjahren"] },
      { q: "Welche Lage in Serralunga kaufte Giovanni Conterno, um die Trauben für den Monfortino zu gewinnen?", a: "Cascina Francia", x: ["Monprivato", "Brunate", "Cannubi"] },
    ],
  },
  ib_giacosa: {
    fact: "Barolo aus der Lage Falletto in Serralunga, die sich Bruno Giacosa selbst zulegte – der Nebbiolo-Meister, der sich zuvor als Négociant mit zugekauften Trauben einen Namen gemacht hatte.",
    quiz: [
      { q: "Welche Etikettenfarbe verwendet Bruno Giacosa nur für die Riserva der besten Jahrgänge?", a: "Rot", x: ["Schwarz", "Gold", "Blau"] },
    ],
  },
  ib_bartolomascarello: {
    fact: "Symbol der Traditionalisten, das an der alten Methode festhielt, Trauben aus mehreren Lagen zu einem einzigen Barolo zu verschneiden. Nach Bartolos Tod übernahm seine Tochter Maria Teresa.",
    quiz: [
      { q: "Welcher Spruch auf einem von Bartolo Mascarello selbst gemalten Etikett sorgte für Aufsehen?", a: "No Barrique, No Berlusconi", x: ["Terroir or Nothing", "Viva il Nebbiolo", "Slow Wine, Slow Life"] },
    ],
  },
  ib_monprivato: {
    fact: "Das Aushängeschild der Familie Mascarello, der die Lage Monprivato in Castiglione Falletto fast allein gehört. Er gilt als eleganter, duftiger Barolo im traditionellen Stil.",
    quiz: [
      { q: "Welche Riserva erzeugt Giuseppe Mascarello nur in guten Jahren aus der besten Parzelle innerhalb von Monprivato?", a: "Ca d'Morissio", x: ["Monfortino", "Bricco Rocche", "La Poja"] },
    ],
  },
  ib_vietti: {
    fact: "Renommiertes Weingut aus Castiglione Falletto, das unter Alfredo Currado früh Einzellagen-Barolo herausbrachte. 2016 übernahm es die US-amerikanische Familie Krause.",
    quiz: [
      { q: "Welche weiße Rebsorte des Piemont rettete Alfredo Currado von Vietti vor dem Verschwinden?", a: "Arneis", x: ["Cortese", "Moscato", "Timorasso"] },
    ],
  },
  ib_piocesare: {
    fact: "Familienweingut, das bis heute in einem Keller in der Altstadt von Alba keltert, wo noch Reste der römischen Stadtmauer stehen. Die Nachfahren des Gründers führen es seit Generationen.",
    quiz: [
      { q: "In welchem Jahr gründete Cesare Pio das Weingut Pio Cesare in Alba?", a: "1881", x: ["1781", "1931", "1971"] },
    ],
  },
  ib_marchesibarolo: {
    fact: "Das Weingut führt die alten Keller der Marchesi Falletti im Ort Barolo weiter. Hier soll der Barolo zum lange gereiften, trockenen Rotwein geworden sein.",
    quiz: [
      { q: "Wie viele Fässer Wein schickte Marchesa Giulia Colbert Falletti laut der Geschichte von Marchesi di Barolo an König Karl Albert?", a: "325 (eines für jeden Tag außer der Fastenzeit)", x: ["12 (eines pro Monat)", "52 (eines pro Woche)", "1000"] },
    ],
  },
  ib_fontanafredda: {
    fact: "Das Weingut entstand auf einem königlichen Landgut in Serralunga d’Alba. Graf Mirafiore, Sohn des Königs und seiner Geliebten, brachte dort die Weinbereitung richtig in Gang.",
    quiz: [
      { q: "Welcher König kaufte das Gut Fontanafredda und schenkte es seiner Geliebten „Bela Rosin“?", a: "Viktor Emanuel II.", x: ["Umberto I.", "Karl Albert", "Napoleon III."] },
    ],
  },
  ib_scavino: {
    fact: "Familienweingut in Castiglione Falletto, das mit modernem, in kleinen Eichenfässern ausgebautem Barolo in den 1980er- und 90er-Jahren die Bewegung der „Barolo Boys“ mit anführte.",
    quiz: [
      { q: "Welcher Winzer führte Paolo Scavino und machte es mit modernem Barolo bekannt?", a: "Enrico Scavino", x: ["Elio Altare", "Roberto Voerzio", "Bruno Giacosa"] },
    ],
  },
  ib_ceretto: {
    fact: "Renommiertes Haus aus Alba, das die Brüder Bruno und Marcello Ceretto groß gemacht haben. In der Lage Brunate in La Morra steht die bunte „Barolo-Kapelle“ der Familie.",
    quiz: [
      { q: "Welche Künstler beauftragte die Familie Ceretto, die kleine Kapelle in der Lage Brunate bunt zu bemalen?", a: "Sol LeWitt und David Tremlett", x: ["Keith Haring und Andy Warhol", "Damien Hirst", "Jeff Koons"] },
    ],
  },
  ib_altare: {
    fact: "Anführer der „Barolo Boys“, der in La Morra kurze Maischestandzeiten und kleine neue Eichenfässer einführte und so den modernen Barolo prägte. Darüber geriet er heftig mit seinem Vater aneinander.",
    quiz: [
      { q: "Was zerlegte Elio Altare mit der Kettensäge, um seinen neuen Stil durchzusetzen?", a: "Die alten großen Holzfässer (Botti) seines Vaters", x: ["Alte Bäume im Weinberg", "Das Dach der Kellerei", "Eine alte Traubenpresse"] },
    ],
  },
  ib_voerzio: {
    fact: "Einzellagen-Barolo von Roberto Voerzio aus La Morra. Cerequio ist eine berühmte Lage an der Grenze zwischen La Morra und dem Ort Barolo.",
    quiz: [
      { q: "Für welche Arbeitsweise im Weinberg ist Roberto Voerzio berühmt?", a: "Radikales Ausdünnen der Trauben für extrem niedrige Erträge", x: ["Lese erst nach dem Gefrieren der Trauben", "Tägliches Bewässern", "Ausschließlich maschinelle Lese"] },
    ],
  },
  ib_produttori: {
    fact: "Genossenschaft der Winzer aus dem Ort Barbaresco. In guten Jahren füllt sie Riserve aus neun Lagen wie Asili und Rabajà getrennt ab.",
    quiz: [
      { q: "Wer gründete 1958 zusammen mit den Bauern die Produttori del Barbaresco?", a: "Der Pfarrer des Dorfes", x: ["Der König von Italien", "Angelo Gaja", "Ein englischer Weinhändler"] },
    ],
  },
  ib_braida: {
    fact: "Das Aushängeschild von Giacomo Bologna, der die Barbera vom einfachen Tischwein zum Spitzenwein erhob. Der erste Jahrgang war 1982.",
    quiz: [
      { q: "Womit sorgte Giacomo Bologna von Braida beim Bricco dell'Uccellone erstmals für Aufsehen?", a: "Ausbau von Barbera im kleinen neuen Eichenfass (Barrique)", x: ["Schaumwein aus Barbera", "Wein aus getrockneten Trauben", "Verschnitt mit weißen Trauben"] },
    ],
  },
  ib_cascinetta: {
    fact: "Süßer, zart perlender Moscato d’Asti mit rund 5 % Alkohol. Die Gärung wird vorzeitig gestoppt, sodass Süße und Blütenduft der Traube erhalten bleiben.",
    quiz: [
      { q: "Wie nennt man in Italien einen leicht perlenden Wein wie den Moscato d'Asti Cascinetta von Vietti?", a: "Frizzante", x: ["Passito", "Ripasso", "Recioto"] },
    ],
  },
  ib_martiniasti: {
    fact: "Süßer Schaumwein aus Moscato-Trauben, die in großen Drucktanks in einem Durchgang vergoren werden, sodass die Kohlensäure erhalten bleibt. Mit rund 7 % Alkohol ist er leicht.",
    quiz: [
      { q: "Mit welchem Getränk wurde Martini & Rossi, der Erzeuger von Martini Asti, weltberühmt?", a: "Wermut", x: ["Grappa", "Limoncello", "Sambuca"] },
      { q: "In welchem Jahr eröffnete Martini & Rossi, der Erzeuger von Martini Asti, in Turin?", a: "1863", x: ["1763", "1923", "1963"] },
    ],
  },
  ib_ganciaasti: {
    fact: "Pionier des italienischen Spumante mit Sitz in Canelli in der Provinz Asti. Gründer Carlo Gancia gilt als „Vater des italienischen Spumante“.",
    quiz: [
      { q: "In welche französische Stadt reiste Gancia-Gründer Carlo Gancia, um die Schaumweinbereitung zu lernen?", a: "Reims", x: ["Bordeaux", "Dijon", "Lyon"] },
    ],
  },
  ib_ornellaia: {
    fact: "Super Tuscan aus Bordeaux-Rebsorten von den Küstenhügeln Bolgheris. Nach mehreren Besitzerwechseln gehört das Gut heute der Familie Frescobaldi.",
    quiz: [
      { q: "Wer gründete Ornellaia im Jahr 1981?", a: "Lodovico Antinori", x: ["Piero Antinori", "Mario Incisa della Rocchetta", "Angelo Gaja"] },
      { q: "Wie heißt das Projekt von Ornellaia, bei dem jedes Jahr ein Künstler ein Sonderetikett gestaltet?", a: "Vendemmia d'Artista", x: ["Arte in Bottiglia", "Biennale del Vino", "Galleria Bolgheri"] },
    ],
  },
  ib_masseto: {
    fact: "Einer der teuersten Rotweine Italiens, reinsortig aus Merlot von einer einzigen Lage in den Hügeln von Bolgheri. Der erste Jahrgang war 1986, heute hat er einen eigenen Keller.",
    quiz: [
      { q: "Welcher besondere Boden zeichnet den Weinberg von Masseto aus?", a: "Bläulich schimmernder Ton", x: ["Schwarze Vulkanasche", "Weißer Kreidekalk", "Roter Sandstein"] },
    ],
  },
  ib_tignanello: {
    fact: "Super Tuscan aus der Lage Tignanello der Familie Antinori. Mit dem ersten Jahrgang 1971 veränderte er den Lauf des italienischen Weins.",
    quiz: [
      { q: "Warum galt der Tignanello in den 1970er-Jahren als Tabubruch?", a: "Sangiovese im kleinen Eichenfass ausgebaut, ohne weiße Trauben", x: ["Aus getrockneten Trauben süß gemacht", "Erster Wein mit Schraubverschluss", "Weißwein mit Rotwein verschnitten"] },
    ],
  },
  ib_solaia: {
    fact: "Super Tuscan, den Antinori in der direkt an Tignanello angrenzenden Lage überwiegend aus Cabernet Sauvignon keltert. Der erste Jahrgang war 1978.",
    quiz: [
      { q: "Welche Ehre erhielt der Solaia 1997 als erster italienischer Wein?", a: "Platz 1 als „Wine of the Year“ von Wine Spectator", x: ["Erste 100 Punkte von Robert Parker", "Offizieller Messwein des Vatikans", "Hoflieferant des britischen Königshauses"] },
      { q: "Was bedeutet der Name Solaia?", a: "Sonniger Ort", x: ["Salzige Erde", "Einsamer Baum", "Weinberg hinter der Steinmauer"] },
    ],
  },
  ib_guadoaltasso: {
    fact: "Der Spitzen-Rotwein vom Gut der Familie Antinori in Bolgheri. Der erste Jahrgang war 1990.",
    quiz: [
      { q: "Was bedeutet der Name Guado al Tasso?", a: "Furt des Dachses", x: ["Hügel des Fuchses", "Quelle des Wolfes", "Wald des Hirsches"] },
    ],
  },
  ib_casanovadineri: {
    fact: "Familienweingut, das die Familie Neri Anfang der 1970er-Jahre in Montalcino gründete. Tenuta Nuova ist ein dunkler, kraftvoller Brunello aus den südlichen Lagen.",
    quiz: [
      { q: "Welche Ehre erhielt der Casanova di Neri Tenuta Nuova 2001 im Jahr 2006?", a: "Platz 1 als „Wine of the Year“ von Wine Spectator", x: ["Verdienstorden des italienischen Staatspräsidenten", "Hauptpreis der Biennale von Venedig", "Offizieller Messwein des Vatikans"] },
    ],
  },
  ib_soldera: {
    fact: "Legendärer Sangiovese, den Gianfranco Soldera in Montalcino in großen Fässern aus slawonischer Eiche ausbaute. Nach dem Bruch mit dem Brunello-Konsortium kommt er als Toscana IGT auf den Markt.",
    quiz: [
      { q: "Was geschah 2012 im Keller von Case Basse?", a: "Ein rachsüchtiger Ex-Mitarbeiter öffnete die Fässer und ließ mehrere Jahrgänge auslaufen", x: ["Ein Hochwasser setzte den Keller unter Wasser", "Ein Blitzschlag löste einen Brand aus", "Ein kompletter Jahrgang wurde gestohlen"] },
    ],
  },
  ib_poggiodisotto: {
    fact: "Weingut in Castelnuovo dell’Abate im Südosten von Montalcino. Lange Maischestandzeit und Ausbau in großen Holzfässern ergeben feine Brunelli im traditionellen Stil.",
    quiz: [
      { q: "Wer gründete Poggio di Sotto und machte es mit traditionellem Brunello bekannt?", a: "Piero Palmucci", x: ["Gianfranco Soldera", "Angelo Gaja", "Paolo De Marchi"] },
    ],
  },
  ib_banfi: {
    fact: "Weingut, das im Süden von Montalcino ein riesiges Anwesen aufgebaut hat. Zum Gut gehört die mittelalterliche Burg Poggio alle Mura.",
    quiz: [
      { q: "Wer gründete Castello Banfi 1978 in Montalcino?", a: "Die italoamerikanischen Brüder Mariani", x: ["Die Familie Antinori", "Die französische Familie Rothschild", "Ein Weinhändler des britischen Königshauses"] },
    ],
  },
  ib_ilpoggione: {
    fact: "Eines der ältesten Güter der Gegend, gelegen in Sant’Angelo in Colle im Süden von Montalcino. Seit dem späten 19. Jahrhundert wird es von einer Familie über Generationen geführt.",
    quiz: [
      { q: "Welche Familie besitzt Il Poggione seit Generationen?", a: "Familie Franceschi", x: ["Familie Biondi-Santi", "Familie Frescobaldi", "Familie Antinori"] },
    ],
  },
  ib_coldorcia: {
    fact: "Großes Gut in Montalcino, das – wie der Name sagt – auf einem Hügel über dem Fluss Orcia liegt. Die ausgedehnten Weinberge werden biologisch bewirtschaftet.",
    quiz: [
      { q: "Womit war die Familie Marone Cinzano, die Col d'Orcia 1973 kaufte, ursprünglich berühmt geworden?", a: "Cinzano-Wermut", x: ["Campari", "Aperol", "Fernet-Branca"] },
    ],
  },
  ib_castellodiama: {
    fact: "Renommiertes Chianti-Classico-Gut im kleinen Weiler Ama in Gaiole in Chianti. Bekannt wurde es auch mit dem Merlot „L’Apparita“.",
    quiz: [
      { q: "Womit sorgte Castello di Ama ab etwa 2000 in Weinbergen und Villa für Aufsehen?", a: "Installationen weltbekannter Gegenwartskünstler", x: ["Ein Museum mittelalterlicher Ritterorden", "Ein Wein-Thermalresort", "Ein großes Solarkraftwerk"] },
    ],
  },
  ib_flaccianello: {
    fact: "Das Aushängeschild von Fontodi, das Giovanni Manetti in Panzano aus 100 % Sangiovese keltert. Der erste Jahrgang war 1981.",
    quiz: [
      { q: "Welchen Beinamen trägt der runde, amphitheaterförmige Hang in Panzano, von dem der Flaccianello stammt?", a: "Conca d'Oro (Goldenes Becken)", x: ["Val d'Orcia", "Colli Senesi", "Monte Amiata"] },
    ],
  },
  ib_fontalloro: {
    fact: "Wein aus 100 % Sangiovese von Fèlsina in Castelnuovo Berardenga. Die Trauben stammen aus Lagen an der Grenze zwischen Chianti Classico und Colli Senesi.",
    quiz: [
      { q: "Wer kaufte das Gut Fèlsina im Jahr 1966?", a: "Domenico Poggiali", x: ["Piero Antinori", "Sergio Manetti", "Gianfranco Soldera"] },
    ],
  },
  ib_cepparello: {
    fact: "Der Wein aus 100 % Sangiovese, mit dem Paolo De Marchi berühmt wurde. 2022 übernahm die französische Gruppe EPI, der auch Biondi-Santi gehört, das Weingut.",
    quiz: [
      { q: "Woher stammt der Name des Weinguts Isole e Olena?", a: "Von den beiden kleinen Weilern Isole und Olena", x: ["Von den Namen der zwei Töchter des Gründers", "Von Inseln und Olivenbäumen", "Vom Namen eines alten Klosters"] },
    ],
  },
  ib_ducaleoro: {
    fact: "Der Spitzen-Chianti-Classico von Ruffino mit goldenem Etikett. Ruffino ist ein traditionsreiches toskanisches Haus, 1877 von zwei Cousins gegründet.",
    quiz: [
      { q: "Auf wen bezieht sich „Ducale“ (herzoglich) im Namen Ruffino Riserva Ducale?", a: "Auf den Herzog von Aosta, der Ruffino-Weine schätzte", x: ["Auf den Großherzog aus dem Haus Medici", "Auf den Herzog von Mailand", "Auf den Dogen von Venedig"] },
    ],
  },
  ib_nipozzano: {
    fact: "Chianti Rufina Riserva aus den Weinbergen rund um die mittelalterliche Burg Nipozzano bei Rufina östlich von Florenz. Der Aushängewein der Familie Frescobaldi.",
    quiz: [
      { q: "Wie lange macht die Familie Frescobaldi schon Wein in der Toskana?", a: "Seit über 700 Jahren", x: ["Seit etwa 50 Jahren", "Seit etwa 150 Jahren", "Seit etwa 300 Jahren"] },
    ],
  },
  ib_luce: {
    fact: "Verschnitt aus Sangiovese und Merlot aus Montalcino. Der Name bedeutet „Licht“, auf dem Etikett strahlt eine Sonne.",
    quiz: [
      { q: "Welche zwei Familien schufen gemeinsam den Luce, dessen erster Jahrgang 1993 war?", a: "Frescobaldi und Robert Mondavi", x: ["Antinori und Rothschild", "Gaja und Mondavi", "Frescobaldi und Rothschild"] },
    ],
  },
  ib_serrenuove: {
    fact: "Der Zweitwein von Ornellaia, erstmals mit dem Jahrgang 1997 erschienen. Er ist so angelegt, dass er früher trinkreif ist als der Hauptwein.",
    quiz: [
      { q: "Welcher Familie gehört Ornellaia, der Erzeuger von Le Serre Nuove, heute?", a: "Frescobaldi", x: ["Antinori", "Gaja", "Marzotto"] },
    ],
  },
  ib_pergoletorte: {
    fact: "Legendärer Wein aus 100 % Sangiovese, mit dem Sergio Manetti der Herkunftsbezeichnung Chianti Classico den Rücken kehrte. Der erste Jahrgang war 1977.",
    quiz: [
      { q: "Welches Bild wechselt auf dem Etikett von Le Pergole Torte mit jedem Jahrgang?", a: "Ein Frauenporträt des Malers Alberto Manfredi", x: ["Ein Kupferstich mit einer Kirche", "Ein Aquarell mit Weintrauben", "Das Familienwappen"] },
    ],
  },
  ib_avignonesi: {
    fact: "Das führende Weingut von Montepulciano. Seit 2009 leitet es die Belgierin Virginie Saverys, die auf biodynamischen Anbau umgestellt hat.",
    quiz: [
      { q: "Für welchen toskanischen Dessertwein aus getrockneten Trauben mit langer Reifung ist Avignonesi besonders berühmt?", a: "Vin Santo", x: ["Recioto", "Marsala", "Moscato d'Asti"] },
    ],
  },
  ib_redigaffi: {
    fact: "Kultwein aus 100 % Merlot von Tua Rita in Suvereto an der toskanischen Küste. Der erste Jahrgang war 1994.",
    quiz: [
      { q: "Woher stammt der Name des Weinguts Tua Rita, das den Redigaffi erzeugt?", a: "Vom Namen der Gründerin Rita Tua", x: ["Vom Namen der Dorfkirche", "Vom Namen einer alten Römerstraße", "Vom Namen eines nahen Flusses"] },
    ],
  },
  ib_villaantinori: {
    fact: "Antinoris toskanischer Dauerbrenner unter den Rotweinen, erstmals 1928 erschienen. Auf dem Etikett ist die Villa der Familie Antinori abgebildet.",
    quiz: [
      { q: "In welchem Jahr trat die Familie Antinori der Florentiner Weinzunft bei und begann ihr Weingeschäft?", a: "1385", x: ["1685", "1885", "1935"] },
    ],
  },
  ib_quintarelli: {
    fact: "Legendärer Amarone von Giuseppe Quintarelli, dem „Meister des Veneto“. Er entsteht nur in guten Jahren und reift lange in großen Holzfässern, bevor er auf den Markt kommt.",
    quiz: [
      { q: "Wie heißt der Wein, den Giuseppe Quintarelli nach Amarone-Art aus getrockneten Trauben wie Cabernet Franc keltert?", a: "Alzero", x: ["La Poja", "Costasera", "Ripassa"] },
    ],
  },
  ib_dalforno: {
    fact: "Kult-Amarone, den Romano Dal Forno im Val d’Illasi im Osten des Valpolicella in extrem konzentriertem Stil keltert. Er reift lange in neuen Eichenfässern.",
    quiz: [
      { q: "Welcher Winzer war für den jungen Romano Dal Forno das große Vorbild, fast ein Lehrmeister?", a: "Giuseppe Quintarelli", x: ["Angelo Gaja", "Gianfranco Soldera", "Edoardo Valentini"] },
    ],
  },
  ib_allegrini: {
    fact: "Amarone, den die Familie Allegrini in Fumane im Valpolicella Classico seit Generationen keltert. Das Haus brachte früh Einzellagenweine heraus.",
    quiz: [
      { q: "Wie heißt der bekannte Einzellagenwein, den Allegrini aus 100 % Corvina keltert?", a: "La Poja", x: ["Alzero", "Costasera", "Monprivato"] },
    ],
  },
  ib_bertani: {
    fact: "Amarone im traditionellen Stil, bekannt für die lange Reifezeit vor der Freigabe. Bertani gehörte zu den Pionieren, die Amarone früh auf Flaschen abfüllten und verkauften.",
    quiz: [
      { q: "In welchem Jahr gründeten die Brüder Bertani ihr Weingut in Verona?", a: "1857", x: ["1757", "1907", "1957"] },
    ],
  },
  ib_zenato: {
    fact: "Amarone von Zenato mit Sitz südlich des Gardasees. Sergio Zenato gründete das Weingut 1960, bekannt ist es auch für seinen weißen Lugana.",
    quiz: [
      { q: "Wie heißt der Wein, für den Zenato Valpolicella auf dem Trester des Amarone ein zweites Mal vergären lässt?", a: "Ripassa", x: ["La Poja", "Alzero", "Costasera"] },
    ],
  },
  ib_tommasi: {
    fact: "Amarone, den die Familie Tommasi in Pedemonte im Valpolicella seit Generationen keltert. Seit der Gründung vor über 100 Jahren ist das Haus in Familienhand.",
    quiz: [
      { q: "Wie heißt das Verfahren, bei dem die gelesenen Trauben wie beim Tommasi Amarone monatelang getrocknet werden, um den Zucker zu konzentrieren?", a: "Appassimento", x: ["Solera", "Charmat", "Botrytis"] },
    ],
  },
  ib_santamargherita: {
    fact: "Dieser Wein löste 1961 einen weltweiten Trend aus, indem er Pinot Grigio ohne Schalenkontakt zu einem klaren Weißwein machte. Graf Gaetano Marzotto gründete das Unternehmen 1935.",
    quiz: [
      { q: "Nach wem ist Santa Margherita benannt?", a: "Nach der Frau des Gründers Graf Marzotto", x: ["Nach der Schutzpatronin Venedigs", "Nach der ältesten Tochter des Gründers", "Nach einer nahen Kirche"] },
    ],
  },
  ib_mionetto: {
    fact: "Renommiertes Prosecco-Haus mit Sitz in Valdobbiadene. Die zweite Gärung im großen Tank nach der Charmat-Methode bewahrt die frische Frucht.",
    quiz: [
      { q: "Welche Farbe ist das Markenzeichen auf dem Etikett von Mionetto Prosecco Brut?", a: "Orange", x: ["Schwarz", "Blau", "Rosa"] },
      { q: "In welchem Jahr gründete Francesco Mionetto das Haus Mionetto in Valdobbiadene?", a: "1887", x: ["1787", "1937", "1987"] },
    ],
  },
  ib_lamarca: {
    fact: "Genossenschaftsmarke, hinter der Tausende Winzerbetriebe rund um Treviso stehen. Einer der meistverkauften Proseccos in den USA.",
    quiz: [
      { q: "Welche Farbe prägt das Etikett von La Marca Prosecco?", a: "Helles Türkis (ähnlich Tiffany-Blau)", x: ["Orange", "Schwarz", "Dunkelrot"] },
    ],
  },
  ib_cartizze: {
    fact: "Prosecco aus Cartizze, der berühmtesten Hügellage von Valdobbiadene. Die Familie Bisol baut in dieser Gegend schon seit dem 16. Jahrhundert Reben an.",
    quiz: [
      { q: "Welche Familie, bekannt für den Trentiner Schaumwein „Ferrari“, übernahm Bisol 2014?", a: "Familie Lunelli", x: ["Familie Antinori", "Familie Marzotto", "Familie Frescobaldi"] },
    ],
  },
  ib_ninofranco: {
    fact: "Der bekannteste Prosecco des Familienweinguts Nino Franco in Valdobbiadene. Primo Franco aus der dritten Generation gilt als derjenige, der die Qualität des Prosecco entscheidend anhob.",
    quiz: [
      { q: "In welchem Jahr wurde Nino Franco in Valdobbiadene gegründet?", a: "1919", x: ["1819", "1969", "1999"] },
    ],
  },
  ib_tunina: {
    fact: "Der berühmte weiße Verschnitt aus dem Friaul, den Silvio Jermann aus mehreren weißen Rebsorten keltert. Seit seinem Debüt in den 1970er-Jahren hob er das Ansehen italienischer Weißweine.",
    quiz: [
      { q: "Welchen Chardonnay benannte Jermann nach einem Song von U2?", a: "Dreams", x: ["Vintage Tunina", "Terre Alte", "Rarità"] },
    ],
  },
  ib_gravner: {
    fact: "Bernsteinfarbener Weißwein, für den Josko Gravner in Oslavia an der slowenischen Grenze Ribolla Gialla monatelang auf den Schalen liegen lässt. Er gilt als Pionier des „Orange Wine“.",
    quiz: [
      { q: "Welches Gefäß für Gärung und Reifung führte Josko Gravner ein und sorgte damit für Aufsehen?", a: "Georgische, in die Erde eingegrabene Tonamphoren (Qvevri)", x: ["Drucktanks aus Edelstahl", "Betoneier", "Fässer aus Akazienholz"] },
    ],
  },
  ib_terrealte: {
    fact: "Der berühmte Weißwein des Friaul, den Livio Felluga aus drei Rebsorten von den Hügeln von Rosazzo verschneidet. Mit langer Reifung gewinnt er an Tiefe.",
    quiz: [
      { q: "Was zeigt das Etikett der Weine von Livio Felluga?", a: "Eine alte Landkarte der Weinberghügel", x: ["Eine venezianische Gondel", "Familienwappen mit Löwe", "Einen Bauern bei der Lese"] },
    ],
  },
  ib_terlano: {
    fact: "Kellereigenossenschaft in Südtirol, 1893 von Winzern gegründet. Berühmt für Weißweine, die selbst nach Jahrzehnten Reife frisch bleiben.",
    quiz: [
      { q: "Wie heißt die seltene Serie, die die Cantina Terlano über 10 Jahre auf der Hefe reifen lässt?", a: "Rarità", x: ["Vin Santo", "Riserva Ducale", "Vecchio Samperi"] },
    ],
  },
  ib_cadelbosco: {
    fact: "Der bekannte Franciacorta-Schaumwein von dem Gut, das Maurizio Zanella südlich des Iseosees aufgebaut hat. Wie Champagner entsteht er durch Flaschengärung.",
    quiz: [
      { q: "Was bedeutet der Name Ca' del Bosco?", a: "Haus im Wald", x: ["Burg auf dem Hügel", "Bauernhof am See", "Kirche aus Stein"] },
      { q: "Welcher Bildhauer schuf das riesige Bronzetor am Eingang von Ca' del Bosco?", a: "Arnaldo Pomodoro", x: ["Alberto Giacometti", "Marino Marini", "Umberto Boccioni"] },
    ],
  },
  ib_bellavista: {
    fact: "Die Basis-Cuvée des führenden Schaumweinhauses der Franciacorta. Es liegt, wie der Name sagt, mit „schöner Aussicht“ auf den Hügeln von Erbusco.",
    quiz: [
      { q: "Welcher Gründer aus der Baubranche rief Bellavista 1977 ins Leben?", a: "Vittorio Moretti", x: ["Maurizio Zanella", "Carlo Gancia", "Gaetano Marzotto"] },
    ],
  },
  ib_planeta: {
    fact: "Ein frühes Aushängeschild der Familie Planeta, die in den 1990er-Jahren die Renaissance des sizilianischen Weins anführte. Er bewies, dass auch Sizilien Weißweine von Weltklasse hervorbringen kann.",
    quiz: [
      { q: "Welche große sizilianische Genossenschaft leitete Diego Planeta aus der Familie Planeta lange Zeit?", a: "Settesoli", x: ["Donnafugata", "Regaleali", "Florio"] },
    ],
  },
  ib_benrye: {
    fact: "Süßer Passito von der Insel Pantelleria zwischen Sizilien und Tunesien, gekeltert aus sonnengetrocknetem Zibibbo (Moscato d’Alessandria).",
    quiz: [
      { q: "Was bedeutet „Ben Ryé“ auf Arabisch?", a: "Sohn des Windes", x: ["Tochter der Sonne", "Geschenk des Meeres", "Juwel der Insel"] },
      { q: "Aus welchem Roman stammt der Name des Guts „Donnafugata“?", a: "Lampedusas „Der Leopard“ (Il Gattopardo)", x: ["Manzonis „Die Brautleute“", "Vergas „Die Malavoglia“", "Ecos „Der Name der Rose“"] },
    ],
  },
  ib_rossodelconte: {
    fact: "Der bekannte Rotwein der Familie Tasca d’Almerita, gekeltert aus Nero d’Avola vom Gut Regaleali im Inneren Siziliens.",
    quiz: [
      { q: "In welchem Jahr kaufte die Familie Tasca das Gut Regaleali im Inneren Siziliens?", a: "1830", x: ["1730", "1930", "1980"] },
    ],
  },
  ib_debartoli: {
    fact: "Wein von Marco De Bartoli, der sich zu einer Zeit, als Marsala als Kochwein galt, für die Wiederbelebung hochwertiger, traditioneller Marsala-Weine einsetzte.",
    quiz: [
      { q: "Wie heißt der legendäre Wein, den Marco De Bartoli ohne Alkoholzusatz im alten „Perpetuo“-Verfahren reifen ließ?", a: "Vecchio Samperi", x: ["Rosso del Conte", "Ben Ryé", "Radici"] },
    ],
  },
  ib_florio: {
    fact: "Das führende Haus für Marsala, den aufgespriteten Wein, den im 18. Jahrhundert der englische Kaufmann John Woodhouse bekannt machte. Florio unterhält am Meer in Marsala riesige Keller.",
    quiz: [
      { q: "Wer gründete 1833 die Kellerei Florio in Marsala?", a: "Vincenzo Florio", x: ["John Woodhouse", "Benjamin Ingham", "Marco De Bartoli"] },
    ],
  },
  ib_passopisciaro: {
    fact: "Rotwein aus Nerello Mascalese von hoch gelegenen Weinbergen am Nordhang des Ätna. Eines der Weingüter, die den Ätna-Boom angeführt haben.",
    quiz: [
      { q: "Welches Weingut hatte Andrea Franchetti, der Gründer von Passopisciaro, zuvor in der Toskana aufgebaut?", a: "Tenuta di Trinoro", x: ["Tenuta San Guido", "Montevertine", "Fontodi"] },
    ],
  },
  ib_benanti: {
    fact: "Weißwein aus Carricante vom Osthang des Ätna. Typisch ist sein salziger, geradliniger Geschmack aus meeresnahen Vulkanböden.",
    quiz: [
      { q: "Welche Gemeinde darf als einzige die Bezeichnung „Etna Bianco Superiore“ führen, die auch der Pietra Marina von Benanti trägt?", a: "Milo", x: ["Randazzo", "Taormina", "Catania"] },
    ],
  },
  ib_radici: {
    fact: "Der bekannteste Rotwein von Mastroberardino, das die nach dem Krieg vom Verschwinden bedrohten autochthonen Rebsorten Kampaniens bewahrte. Taurasi wurde 1993 die erste DOCG Süditaliens.",
    quiz: [
      { q: "In welcher antiken Stätte belebte Mastroberardino mit den Archäologiebehörden alte Weinberge wieder, um den Wein „Villa dei Misteri“ zu keltern?", a: "Pompeji", x: ["Herculaneum", "Paestum", "Ostia Antica"] },
    ],
  },
  ib_feudi: {
    fact: "Weißwein aus der autochthonen weißen Rebsorte Fiano aus Irpinien im Landesinneren Kampaniens. Feudi di San Gregorio führte die neue Welle des süditalienischen Weins an.",
    quiz: [
      { q: "In welchem Jahr wurde Feudi di San Gregorio gegründet?", a: "1986", x: ["1886", "1936", "2006"] },
    ],
  },
  ib_es: {
    fact: "Kräftiger Rotwein, den das Ehepaar Gianfranco Fino und Simona Natale in Apulien aus Primitivo von alten Alberello-Stöcken (Buschreben) keltert.",
    quiz: [
      { q: "Aus wessen Theorie stammt der Name „Es“ des Weins von Gianfranco Fino?", a: "Freud", x: ["Jung", "Nietzsche", "Kant"] },
    ],
  },
  ib_valentini: {
    fact: "Legende der Abruzzen, die aus Trebbiano, einer als gewöhnlich geltenden Rebsorte, jahrzehntelang reifende Meisterwerke keltert. Berühmt dafür, kaum etwas über die Weinbereitung preiszugeben.",
    quiz: [
      { q: "Welcher Winzer machte Valentini zur Legende, indem er nur den besten Teil der Lese auf Flaschen füllte?", a: "Edoardo Valentini", x: ["Emidio Pepe", "Gianfranco Fino", "Angelo Gaja"] },
    ],
  },
  ib_emidiopepe: {
    fact: "Familienweingut, das an alten Methoden festhält: Die Trauben werden von Hand abgebeert, der Wein reift in Zementtanks. Alte Jahrgänge lagern im Keller und kommen nach und nach auf den Markt.",
    quiz: [
      { q: "In welchem Jahr kelterte Emidio Pepe in den Abruzzen seinen ersten Wein?", a: "1964", x: ["1904", "1934", "1994"] },
    ],
  },
  ib_turriga: {
    fact: "Der bekannteste Rotwein Sardiniens, den die Familie Argiolas im Süden der Insel vor allem aus der autochthonen Rebsorte Cannonau keltert. Der erste Jahrgang war 1988.",
    quiz: [
      { q: "Welcher als „Vater der Super Tuscans“ bekannte Önologe schuf den Turriga von Argiolas mit?", a: "Giacomo Tachis", x: ["Michel Rolland", "Émile Peynaud", "Peter Sisseck"] },
    ],
  },
  ib_chiarli: {
    fact: "Leicht perlender Rotwein aus Lambrusco di Sorbara aus der Nähe von Modena. Typisch sind die helle Rubinfarbe und die frische Säure.",
    quiz: [
      { q: "In welchem Jahr begann Cleto Chiarli in Modena mit der Lambrusco-Erzeugung?", a: "1860", x: ["1760", "1920", "1970"] },
    ],
  },
  ib_valbuena: {
    fact: "Ein weiterer Rotwein, den Vega Sicilia auf demselben Gut wie den Único erzeugt. Er reift kürzer als der Único und kommt früher auf den Markt.",
    quiz: [
      { q: "Wofür steht die „5“ in Valbuena 5°?", a: "Er kommt im fünften Jahr nach der Lese auf den Markt", x: ["Verschnitt aus fünf Rebsorten", "Trauben von fünf Jahre jungen Reben", "Nur Trauben aus der fünften Lese"] },
    ],
  },
  ib_pingus: {
    fact: "Spanischer Kultwein, den der Däne Peter Sisseck aus Trauben uralter Tempranillo-Reben keltert. Schon der erste Jahrgang 1995 erntete weltweit Begeisterung.",
    quiz: [
      { q: "Woher stammt der Name Pingus?", a: "Kindheitsspitzname von Peter Sisseck", x: ["Name des Flusses neben dem Weinberg", "Name eines alten Klosters", "Spanisch für „kleines Juwel“"] },
    ],
  },
  ib_florpingus: {
    fact: "Der Bruder des Pingus, mit derselben Handschrift gekeltert – aus Tempranillo von alten Reben aus mehreren Gemeinden.",
    quiz: [
      { q: "Welcher dänische Winzer erzeugt den Flor de Pingus?", a: "Peter Sisseck", x: ["Álvaro Palacios", "Mariano García", "René Barbier"] },
    ],
  },
  ib_pesquera: {
    fact: "Weingut, das Alejandro Fernández in den 1970er-Jahren in Pesquera de Duero gründete. Er gilt als derjenige, der Ribera del Duero weltweit bekannt machte.",
    quiz: [
      { q: "Mit welchem Wein verglich Robert Parker den Tinto Pesquera?", a: "Pétrus aus Bordeaux", x: ["Romanée-Conti", "Château d'Yquem", "Sassicaia"] },
    ],
  },
  ib_alion: {
    fact: "Schwesterweingut, das Vega Sicilia Anfang der 1990er-Jahre gründete. Der Tempranillo reift hier in neuen französischen Eichenfässern und schmeckt moderner.",
    quiz: [
      { q: "Welcher Familie gehören Vega Sicilia und Alión seit den 1980er-Jahren?", a: "Familie Álvarez", x: ["Familie Fernández", "Familie Muga", "Familie Torres"] },
    ],
  },
  ib_aalto: {
    fact: "1999 gegründetes Weingut, das zu den neuen Stars von Ribera del Duero zählt. Aus Trauben alter Tempranillo-Reben aus mehreren Gemeinden entstehen kraftvolle Rotweine.",
    quiz: [
      { q: "Wer war Mitgründer von Aalto, nachdem er fast 30 Jahre lang Kellermeister bei Vega Sicilia gewesen war?", a: "Mariano García", x: ["Peter Sisseck", "Alejandro Fernández", "Álvaro Palacios"] },
    ],
  },
  ib_emiliomoro: {
    fact: "Der bekannteste Rotwein der Familie Moro, die in Pesquera de Duero in Ribera del Duero seit Generationen Reben anbaut.",
    quiz: [
      { q: "Unter welchem regionalen Namen ist Tempranillo in Ribera del Duero, der Heimat von Emilio Moro, bekannt?", a: "Tinto Fino", x: ["Cencibel", "Ull de Llebre", "Tinta Roriz"] },
    ],
  },
  ib_protos: {
    fact: "Das erste Weingut von Ribera del Duero, 1927 von 11 Winzern aus Peñafiel gegründet. Der Wein reift in Stollen unterhalb der Burg von Peñafiel.",
    quiz: [
      { q: "Was bedeutet der Name Protos?", a: "Griechisch für „der Erste“", x: ["Lateinisch für „Stadtmauer“", "Spanisch für „Flussufer“", "Arabisch für „Weinberg“"] },
      { q: "Welcher britische Architekt entwarf die neue Kellerei von Protos?", a: "Richard Rogers", x: ["Norman Foster", "Zaha Hadid", "Frank Gehry"] },
    ],
  },
  ib_castilloygay: {
    fact: "Der Spitzenwein von Marqués de Murrieta, nur in guten Jahren erzeugt. Seine Geschichte begann 1852 auf dem Gut Ygay bei Logroño.",
    quiz: [
      { q: "Wer gründete Marqués de Murrieta und brachte die Bordelaiser Weinbereitung in die Rioja?", a: "Luciano de Murrieta", x: ["Alejandro Fernández", "Rafael López de Heredia", "Enrique Forner"] },
    ],
  },
  ib_rioja904: {
    fact: "Das Aushängeschild von La Rioja Alta, 1890 von fünf Familien neben dem Bahnhof von Haro gegründet. Traditioneller Stil mit langer Reifung in amerikanischer Eiche.",
    quiz: [
      { q: "Wofür steht die „904“ in Gran Reserva 904?", a: "Die Fusion mit der Bodega Ardanza im Jahr 1904", x: ["Es werden nur 904 Fässer erzeugt", "Ein Weinberg auf 904 m Höhe", "904 Tage Reifung"] },
    ],
  },
  ib_tondonia: {
    fact: "Das Aushängeschild von López de Heredia, 1877 in Haro gegründet. Symbol der traditionellen Rioja, die dank langer Fassreifung Jahrzehnte überdauert.",
    quiz: [
      { q: "Wer entwarf den Besucherpavillon von López de Heredia?", a: "Zaha Hadid", x: ["Frank Gehry", "Santiago Calatrava", "Richard Rogers"] },
    ],
  },
  ib_cvneimperial: {
    fact: "Der Spitzenwein von CVNE, 1879 neben dem Bahnhof von Haro gegründet. Der Jahrgang 2004 belegte bei Wine Spectator Platz 1 als „Wine of the Year“.",
    quiz: [
      { q: "Wofür steht die Abkürzung CVNE?", a: "Weingesellschaft Nordspaniens (Compañía Vinícola del Norte de España)", x: ["Königliche Weingenossenschaft Kastiliens", "Verband der Bodegas der Rioja", "Initialen der vier Gründer"] },
    ],
  },
  ib_pradoenea: {
    fact: "Die Spitzen-Gran-Reserva von Muga, nur in guten Jahren erzeugt. Nach langer Reifung im Eichenfass reift sie noch einmal in der Flasche, bevor sie auf den Markt kommt.",
    quiz: [
      { q: "Was gilt als Besonderheit der Kellerei Muga?", a: "Eine eigene Küferei, in der die Fässer selbst gebaut werden", x: ["Alle Weine reifen in Tonamphoren", "Die Trauben werden per Hubschrauber transportiert", "Ein unterirdisches Wasserkraftwerk"] },
    ],
  },
  ib_torremuga: {
    fact: "Moderner Rioja, den Muga erstmals mit dem Jahrgang 1991 herausbrachte. Typisch sind die tiefe Farbe, üppige Frucht und Aromen von neuer französischer Eiche.",
    quiz: [
      { q: "Welches Ehepaar gründete die Kellerei Muga 1932 in Haro?", a: "Isaac Muga und Aurora Caño", x: ["Alejandro Fernández und Esperanza Rivera", "Mario Rotllant und Carmen Daurella", "Joan Juvé und Teresa Camps"] },
    ],
  },
  ib_caceres: {
    fact: "Weingut, das Enrique Forner 1970 in Cenicero gründete. Mit Bordelaiser Kellertechnik brachte er fruchtbetonte Riojas auf den Markt.",
    quiz: [
      { q: "Welcher französische Önologe beriet Marqués de Cáceres bei der Einführung der Bordelaiser Weinbereitung?", a: "Émile Peynaud", x: ["Michel Rolland", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  ib_contino: {
    fact: "Rioja von einem Gut bei Laguardia in einer Schleife des Ebro. In den 1970er-Jahren gemeinsam von CVNE und der Familie der früheren Gutsbesitzer gegründet.",
    quiz: [
      { q: "Welche Weinart soll Contino als Erster in der Rioja eingeführt haben?", a: "Einen Gutswein ausschließlich aus Trauben eines einzigen Guts", x: ["Den ersten Schaumwein der Rioja", "Den ersten Süßwein der Rioja", "Den ersten Rosé der Rioja"] },
    ],
  },
  ib_remirez: {
    fact: "Weingut, das Fernando Remírez de Ganuza in Samaniego in der Rioja Alavesa gründete. Die Trauben aus kleinen, alten Parzellen werden akribisch selektiert.",
    quiz: [
      { q: "Welchen Teil der Traube verwendet Remírez de Ganuza für seine Reserva?", a: "Nur den oberen Teil (die Schultern)", x: ["Nur die Traubenspitze", "Ganze Trauben mitsamt Stielen", "Nur die zuletzt gereiften Beeren"] },
    ],
  },
  ib_roda: {
    fact: "Die bekannteste Reserva von Roda, einem aufstrebenden Weingut im Bahnhofsviertel von Haro. Gekeltert aus Trauben alter Tempranillo-Reben.",
    quiz: [
      { q: "Woher stammt der Name Roda?", a: "Aus den Anfangsbuchstaben der Gründer Rotllant und Daurella", x: ["Vom spanischen Wort für „Rad“", "Vom Namen des Dorfs mit den Weinbergen", "Vom Namen eines nahen Flusses"] },
    ],
  },
  ib_artadi: {
    fact: "Tempranillo, den Juan Carlos López de Lacalle aus einer einzigen kleinen Lage in Laguardia keltert. Gilt als einer der besten Einzellagenweine Spaniens.",
    quiz: [
      { q: "Mit welcher Entscheidung sorgte Artadi 2015 für Aufsehen?", a: "Austritt aus der Herkunftsbezeichnung Rioja (DOCa)", x: ["Kauf eines französischen Châteaus", "Umstellung aller Weinberge auf weiße Sorten", "Kronkorken statt Naturkorken"] },
    ],
  },
  ib_campoviejo: {
    fact: "1959 in Logroño gegründet und heute eine der meistverkauften Rioja-Marken der Welt. Bekannt für seine bunten Etiketten.",
    quiz: [
      { q: "Was bedeutet der Name Campo Viejo?", a: "Altes Feld", x: ["Neue Burg", "Roter Hügel", "Alter Ritter"] },
    ],
  },
  ib_faustino: {
    fact: "Rioja Gran Reserva, die man sofort an der matten, wie bereift wirkenden Flasche erkennt. Das Aushängeschild der Familie Faustino, deren Geschichte bis 1861 zurückreicht.",
    quiz: [
      { q: "Welcher Maler schuf das Porträt auf dem Etikett von Faustino I?", a: "Rembrandt", x: ["Velázquez", "Goya", "El Greco"] },
    ],
  },
  ib_juangil: {
    fact: "Kräftiger Rotwein aus Monastrell, der unter der heißen Sonne von Jumilla im Südosten Spaniens wächst. Wegen seines silbernen Etiketts wird er auch „Silver Label“ genannt.",
    quiz: [
      { q: "Was bedeutet „12 Meses“ (12 Monate) im Namen Juan Gil 12 Meses?", a: "12 Monate Reifung im Eichenfass", x: ["Die Reben sind 12 Monate alt", "Freigabe 12 Monate nach der Lese", "Trauben aus 12 Lagen verschnitten"] },
    ],
  },
  ib_ermita: {
    fact: "Einer der teuersten Weine Spaniens, gekeltert aus alten Garnacha-Reben an den steilen Schieferhängen (Llicorella) von Gratallops.",
    quiz: [
      { q: "Aus welcher Weinfamilie der Rioja stammt Álvaro Palacios?", a: "Palacios Remondo", x: ["Marqués de Riscal", "Vega Sicilia", "López de Heredia"] },
    ],
  },
  ib_closmogador: {
    fact: "Weingut eines der Pioniere, die Ende der 1980er-Jahre in das darniederliegende Priorat kamen und die Region wiederbelebten. Gekeltert aus alten Garnacha- und Cariñena-Reben.",
    quiz: [
      { q: "Wer gründete Clos Mogador und führte die Wiederbelebung des Priorat an?", a: "René Barbier", x: ["Peter Sisseck", "Mariano García", "Alejandro Fernández"] },
    ],
  },
  ib_closerasmus: {
    fact: "Kultwein des Priorat, vor allem aus Garnacha von steilen Terrassen in Gratallops. Die Produktion ist winzig.",
    quiz: [
      { q: "Welche Winzerin gründete Clos Erasmus?", a: "Daphne Glorian", x: ["Marisol Bueno", "Virginie Saverys", "Maria Teresa Mascarello"] },
    ],
  },
  ib_masplana: {
    fact: "Das Aushängeschild von Torres, das Miguel A. Torres aus Cabernet Sauvignon von einer einzigen Lage im Penedès keltert. Er machte das Potenzial spanischer Rotweine weltweit bekannt.",
    quiz: [
      { q: "Welchen Erfolg erzielte der Jahrgang 1970 bei der „Wein-Olympiade“ 1979 in Paris?", a: "Platz 1 vor renommierten Bordeaux-Gütern", x: ["Platz 2 hinter Latour", "Disqualifikation wegen Betrugsverdachts", "Platz 1 in der Weißweinkategorie"] },
      { q: "Wie hieß der Torres Mas La Plana früher?", a: "Gran Coronas Black Label", x: ["Sangre de Toro Reserva", "Viña Sol Gran Reserva", "Torres Imperial"] },
    ],
  },
  ib_sangredetoro: {
    fact: "Torres’ Dauerbrenner unter den Rotweinen, erstmals 1954 erschienen. Aus Garnacha und Cariñena gekeltert, weich und reich an Frucht.",
    quiz: [
      { q: "Was hängt am Flaschenhals von Sangre de Toro?", a: "Ein kleiner Plastikstier", x: ["Eine rote Schleife", "Ein Mini-Torerohut", "Eine Korkkugel"] },
      { q: "Was bedeutet der Name Sangre de Toro?", a: "Stierblut", x: ["Rote Sonne", "Herz des Toreros", "Heilige Erde"] },
    ],
  },
  ib_numanthia: {
    fact: "Kraftvoller Rotwein aus alten Tinta-de-Toro-Reben aus Toro, die dank der Sandböden die Reblaus überstanden haben.",
    quiz: [
      { q: "Woher stammt der Name Numanthia?", a: "Von der antiken Stadt Numantia, die den Römern bis zuletzt trotzte", x: ["Vom legendären römischen König Numa", "Von einer Burg der Kreuzritter", "Von der Hauptstadt eines maurischen Königreichs"] },
      { q: "Welcher Konzern übernahm Numanthia 2008?", a: "LVMH (Moët Hennessy)", x: ["Pernod Ricard", "Kering", "E&J Gallo"] },
    ],
  },
  ib_senorans: {
    fact: "Renommiertes Albariño-Gut, das Marisol Bueno im Val do Salnés aufgebaut hat. Gilt als einer der besten Weißweine der Rías Baixas.",
    quiz: [
      { q: "Was bedeutet „Pazo“ in Pazo de Señoráns?", a: "Ein alter galicischer Adelssitz", x: ["Ein Weinberghügel", "Ein Lagerhaus im Hafen", "Ein Klostergarten"] },
    ],
  },
  ib_martincodax: {
    fact: "Albariño eines Weinguts, das 1986 von Winzern aus der Umgebung von Cambados gegründet wurde. Die vom Atlantikwind umwehten Trauben sorgen für einen frischen Geschmack.",
    quiz: [
      { q: "Nach wem ist Martín Códax benannt?", a: "Nach einem mittelalterlichen galicischen Spielmann", x: ["Nach einem Kapitän aus der Zeit der Entdeckungsfahrten", "Nach einem König von Kastilien", "Nach dem Bauern, der das Weingut gründete"] },
    ],
  },
  ib_codorniu: {
    fact: "Bei Codorníu kelterte Josep Raventós 1872 nach der Champagner-Methode den ersten Cava. Beim Anna sorgt ein Anteil Chardonnay für einen weichen Geschmack.",
    quiz: [
      { q: "Wer war die Namensgeberin Anna von Anna de Codorníu?", a: "Die Codorníu-Erbin, die in die Familie Raventós einheiratete", x: ["Die Schutzpatronin Kataloniens", "Eine spanische Königin", "Die erste Enkelin des Gründers"] },
      { q: "Welcher Architekt des katalanischen Modernisme entwarf die Kellergebäude von Codorníu?", a: "Josep Puig i Cadafalch", x: ["Antoni Gaudí", "Ricardo Bofill", "Rafael Moneo"] },
    ],
  },
  ib_juvecamps: {
    fact: "Jahrgangs-Cava des Familienhauses in Sant Sadurní d’Anoia. Er wird als Brut Nature ohne Zuckerzugabe erzeugt.",
    quiz: [
      { q: "Woher stammt der Name Juvé & Camps?", a: "Von den Nachnamen des Gründerpaars Joan Juvé und Teresa Camps", x: ["Von den Namen zweier Dörfer", "Von den Spitznamen zweier befreundeter Gründer", "Von den Namen zweier Weinberge"] },
    ],
  },
  ib_gramona: {
    fact: "Gramonas berühmter Schaumwein mit sehr langer Hefelagerung. Typisch sind die Kraft und Tiefe, die der Xarel·lo verleiht.",
    quiz: [
      { q: "Wie heißt die Schaumwein-Bezeichnung, die Gramona nach dem Austritt aus der DO Cava 2019 mit anderen Erzeugern schuf?", a: "Corpinnat", x: ["Clàssic Penedès", "Franciacorta", "Crémant de Catalogne"] },
    ],
  },
  ib_bristolcream: {
    fact: "Cream Sherry von Harveys, das 1796 im englischen Bristol begann. Ein Verschnitt mehrerer Sherrys, süß und samtig.",
    quiz: [
      { q: "Auf welche Bemerkung geht der Name Harveys Bristol Cream zurück?", a: "Eine Dame: „Ist Bristol Milk die Milch, dann ist dies die Sahne“", x: ["Auf eine Molkerei im Hafen von Bristol", "Auf den Spitznamen der Tochter des Gründers", "Auf einen von der Königin verliehenen Titel"] },
      { q: "Welche Farbe hat die typische Flasche von Harveys Bristol Cream?", a: "Tiefblau", x: ["Durchsichtig", "Dunkelgrün", "Schwarz"] },
    ],
  },
  ib_lustau: {
    fact: "Süßer Sherry aus Oloroso mit Pedro Ximénez, der im heißesten und feuchtesten Teil der Bodega reift.",
    quiz: [
      { q: "Woher stammt der Name East India Solera?", a: "Er ahmt Sherrys nach, die auf Schiffen nach Ostindien und zurück reiften", x: ["Sherry mit indischen Gewürzen", "Eine von der Ostindien-Kompanie gegründete Bodega", "Sherry aus indischen Trauben"] },
      { q: "Was ist ein „Almacenista“, dessen Sherrys Lustau abfüllt und bekannt macht?", a: "Ein kleiner Lagerhalter, der Sherry nur reifen lässt", x: ["Ein Seemann, der Sherry transportierte", "Ein Hefemeister, der den Flor züchtet", "Ein Korkmacher"] },
    ],
  },
  ib_inocente: {
    fact: "Seltener Fino aus den Trauben einer einzigen Lage, die im Holzfass vergoren werden. Die lange Reifung unter Flor verleiht ihm tiefe Aromen.",
    quiz: [
      { q: "Aus welcher berühmten Lage (Pago) in Jerez stammen die Trauben des Valdespino Inocente?", a: "Macharnudo", x: ["Balbaína", "Añina", "Carrascal"] },
    ],
  },
  ib_osborne: {
    fact: "Fino von Osborne aus El Puerto de Santa María an der Atlantikküste. Durch die Reifung unter der Florhefe ist er leicht und salzig.",
    quiz: [
      { q: "Welche Form haben die riesigen Osborne-Werbeschilder an Spaniens Straßen?", a: "Ein schwarzer Stier", x: ["Eine Flamencotänzerin", "Eine goldene Weintraube", "Ein weißes Pferd"] },
      { q: "Aus welchem Land stammte Thomas Osborne Mann, der Osborne 1772 gründete?", a: "England", x: ["Frankreich", "Niederlande", "Italien"] },
    ],
  },
  ib_noe: {
    fact: "Tiefschwarzer, dickflüssiger Dessert-Sherry aus sonnengetrockneten Pedro-Ximénez-Trauben, der viele Jahre gereift ist.",
    quiz: [
      { q: "Was garantiert die Angabe „VORS“ bei Sherrys wie Noé von González Byass?", a: "Sehr alter Sherry mit über 30 Jahren durchschnittlicher Reifung", x: ["Jahrgangssherry aus einer einzigen Ernte", "Bio-zertifizierter Sherry", "Sherry aus edelfaulen Trauben"] },
    ],
  },
  ib_laguita: {
    fact: "Manzanilla, die nur in Sanlúcar de Barrameda an der Mündung des Guadalquivir erzeugt wird. Dank der Meeresbrise wächst der Flor besonders dick und sorgt für einen salzigen Geschmack.",
    quiz: [
      { q: "Aus welchem Slangwort stammt der Name La Guita?", a: "Bargeld (Geld)", x: ["Gitarre", "Meeresbrise", "Kleines Fass"] },
    ],
  },
  ib_alvear: {
    fact: "Süßwein aus sonnengetrocknetem Pedro Ximénez von Alvear, dem renommierten Haus aus Montilla-Moriles südlich von Córdoba.",
    quiz: [
      { q: "Was bedeutet „1927“ in Alvear PX Solera 1927?", a: "Das Jahr, in dem diese Solera angelegt wurde", x: ["Das Jahr der Traubenlese", "Das Gründungsjahr von Alvear", "Das Jahr der Abfüllung"] },
    ],
  },
  ib_lancers: {
    fact: "Portugiesischer Rosé, 1944 für den US-Markt geschaffen. Berühmt für seine undurchsichtige Flasche, die wie ein Tonkrug aussieht.",
    quiz: [
      { q: "Welches Gemälde von Velázquez inspirierte den Namen Lancers?", a: "Die Übergabe von Breda (Las Lanzas)", x: ["Las Meninas", "Die Spinnerinnen", "Der Triumph des Bacchus"] },
    ],
  },
  ib_barcavelha: {
    fact: "Legendärer Wein, der im Douro, der Heimat des Portweins, den Weg für hochwertige, nicht aufgespritete Rotweine ebnete. Erstmals 1952 erzeugt und nur in herausragenden Jahren freigegeben.",
    quiz: [
      { q: "Welcher Önologe schuf den Barca Velha?", a: "Fernando Nicolau de Almeida", x: ["Dirk Niepoort", "José Maria da Fonseca", "Adriano Ramos Pinto"] },
      { q: "Was bedeutet der Name Barca Velha?", a: "Altes Boot", x: ["Alter Bauer", "Blauer Fluss", "Erste Lese"] },
    ],
  },
  ib_valemeao: {
    fact: "Weingut an einer weiten Flussschleife im Douro Superior. Lange Zeit stammten die Trauben für den Barca Velha von hier.",
    quiz: [
      { q: "Welche legendäre Frau des Douro legte die Quinta do Vale Meão 1877 an?", a: "Dona Antónia Ferreira", x: ["Giulia Colbert Falletti", "Marisol Bueno", "Anna de Codorníu"] },
    ],
  },
  ib_crasto: {
    fact: "Rotwein vom Gut der Familie Roquette am Douro, aus alten Weinbergen, in denen zahlreiche autochthone Rebsorten im gemischten Satz stehen.",
    quiz: [
      { q: "Welches Fotomotiv ist auf der Quinta do Crasto berühmt?", a: "Der Infinity-Pool mit Blick auf den Douro", x: ["Eine Seilbahn über die Weinberge", "Ein schwimmender Keller auf dem Fluss", "Eine Aussichtsplattform auf einer mittelalterlichen Mauer"] },
    ],
  },
  ib_esporao: {
    fact: "Der bekannteste Rotwein der Herdade do Esporão, eines weitläufigen Guts im Alentejo in Südportugal. Auf dem Gut steht ein mittelalterlicher Turm.",
    quiz: [
      { q: "Was ist das Besondere am Etikett des Esporão Reserva?", a: "Es zeigt jedes Jahr das Werk eines anderen Künstlers", x: ["Es trägt immer dasselbe Familienwappen", "Es ist statt eines Etiketts direkt ins Glas graviert", "Es besteht aus Korkrinde"] },
    ],
  },
  ib_peramanca: {
    fact: "Der beste Rotwein des Alentejo, den die Stiftung Eugénio de Almeida in Évora nur in herausragenden Jahren freigibt.",
    quiz: [
      { q: "Woher stammt der Name Pêra-Manca?", a: "Von „wackelnder Stein“", x: ["Von „Birnengarten“", "Von „hinkender Mönch“", "Von „weißer Turm“"] },
      { q: "Auf welche Fahrt wurde der Pêra-Manca der Legende nach im Jahr 1500 mitgenommen?", a: "Cabrals Entdeckungsfahrt nach Brasilien", x: ["Vasco da Gamas Fahrt nach Indien", "Magellans Weltumsegelung", "Kolumbus’ erste Reise"] },
    ],
  },
  ib_casalgarcia: {
    fact: "Leichter, frischer Weißwein aus Nordportugal, erstmals 1939 erschienen. Er perlt leicht und hat wenig Alkohol – ideal für den unkomplizierten Genuss.",
    quiz: [
      { q: "Was bedeutet „Verde“ (grün) bei Vinho Verde, zu dem der Casal Garcia gehört?", a: "Junger, frischer Wein", x: ["Aus grünen Trauben gekeltert", "In grüne Flaschen gefüllt", "Duftet nach Seetang"] },
    ],
  },
  ib_taylors20: {
    fact: "Tawny Port, der in kleinen Holzfässern über viele Jahre langsam oxidativ reift und so Bernsteinfarbe sowie Aromen von Nüssen und Karamell gewinnt.",
    quiz: [
      { q: "Was bedeutet „20 Year Old“ beim Taylor's 20 Year Old Tawny Port?", a: "Das Durchschnittsalter eines Verschnitts mehrerer Jahrgänge", x: ["Port aus genau einem Jahr vor 20 Jahren", "Trauben von 20 Jahre alten Reben", "20 Jahre Flaschenreife"] },
    ],
  },
  ib_sixgrapes: {
    fact: "Reserve Ruby Port aus Trauben der Weinberge, die auch den Vintage Port liefern. Mit seiner intensiven Frucht ist er als Einstieg in die Portweinwelt beliebt.",
    quiz: [
      { q: "Woher stammt der Name Graham's Six Grapes?", a: "Vom Symbol aus sechs Trauben, mit dem vintagewürdige Ports markiert wurden", x: ["Von einem Verschnitt aus sechs Rebsorten", "Von einem Verschnitt aus sechs Jahrgängen", "Von den sechs Kindern des Gründers"] },
    ],
  },
  ib_grahamsvintage: {
    fact: "Der Vintage Port von Graham's, der nur in herausragenden Jahren „deklariert“ wird. Das Rückgrat bilden Trauben der Quinta dos Malvedos im Douro.",
    quiz: [
      { q: "Welches Geschäft betrieben die Brüder Graham ursprünglich, bevor sie 1820 Graham's gründeten?", a: "Textilhandel", x: ["Reederei", "Bankwesen", "Korkherstellung"] },
      { q: "Welche Portwein-Familie besitzt Graham's seit 1970?", a: "Familie Symington", x: ["Familie Sandeman", "Familie Niepoort", "Familie Guimaraens"] },
    ],
  },
  ib_bin27: {
    fact: "Reserve Port von Fonseca, dem Portweinhaus, das die Familie Guimaraens über Generationen geführt hat. Typisch ist die intensive Frucht dunkler Beeren.",
    quiz: [
      { q: "Für wen war der Fonseca Bin 27 ursprünglich gedacht, bevor er 1972 in den Handel kam?", a: "Ein Verschnitt für Familie und Freunde zum eigenen Genuss", x: ["Lieferung an das britische Königshaus", "Ration für Seeleute", "Messwein für den Vatikan"] },
    ],
  },
  ib_dows: {
    fact: "Vintage Port von Dow's, einem Portweinhaus der Familie Symington. Bekannt für einen trockeneren Abgang als andere Ports.",
    quiz: [
      { q: "Welche Quinta im Douro bildet das Herz des Dow's Vintage Port?", a: "Quinta do Bomfim", x: ["Quinta do Noval", "Quinta de Vargellas", "Quinta dos Malvedos"] },
    ],
  },
  ib_sandeman: {
    fact: "Port- und Sherryhaus, 1790 in London gegründet. Die Silhouette des „Don“ im schwarzen Umhang ist das Markenzeichen auf dem Etikett.",
    quiz: [
      { q: "Was trägt die schwarze Silhouette „The Don“ von Sandeman?", a: "Portugiesischen Studentenumhang und breitkrempigen spanischen Hut", x: ["Schottenkilt und Baskenmütze", "Britische Marineuniform und Dreispitz", "Mönchskutte mit Kapuze"] },
      { q: "Woher stammte George Sandeman, der Gründer von Sandeman?", a: "Schottland", x: ["Portugal", "Niederlande", "Irland"] },
    ],
  },
  ib_cockburns: {
    fact: "Der bekannte Reserve Port von Cockburn's, einem 1815 gegründeten Portweinhaus. Heute wird es von der Familie Symington geführt.",
    quiz: [
      { q: "Was ist an der englischen Aussprache von Cockburn's besonders?", a: "Das „ck“ bleibt stumm – etwa „Ko-bern“", x: ["Alles wird ausgesprochen: „Kock-burn“", "Das „burn“ bleibt stumm – nur „Kock“", "Man spricht es portugiesisch: „Kok-bur-ne“"] },
    ],
  },
  ib_nacional: {
    fact: "Legendärer Vintage Port aus einer kleinen Parzelle innerhalb der Quinta do Noval. Der Jahrgang 1931 gilt als bester Port aller Zeiten.",
    quiz: [
      { q: "Was ist das Besondere an den Reben des Quinta do Noval Nacional?", a: "Sie wachsen wurzelecht, also ungepfropft", x: ["Es sind durchweg über 100 Jahre alte weiße Reben", "Sie wachsen im Gewächshaus", "Sie werden jedes Jahr neu gepflanzt"] },
      { q: "Welche Tochter eines französischen Versicherungskonzerns übernahm 1993 die Quinta do Noval?", a: "AXA Millésimes", x: ["LVMH", "Kering", "Pernod Ricard"] },
    ],
  },
  ib_niepoort: {
    fact: "Familiengeführtes Portweinhaus, 1842 gegründet. Dirk Niepoort in fünfter Generation machte sich auch mit Douro-Tischweinen einen Namen.",
    quiz: [
      { q: "Aus welchem Land stammt die Familie Niepoort ursprünglich?", a: "Niederlande", x: ["Schottland", "Deutschland", "Dänemark"] },
      { q: "Worin reift der „Garrafeira“-Port von Niepoort nach dem Fassausbau noch lange weiter?", a: "In großen Glasballons (Demijohns)", x: ["In eingegrabenen Tonkrügen", "In Stahltanks auf dem Meeresgrund", "In Marmorbecken"] },
    ],
  },
  ib_warres: {
    fact: "Warrior ist der Reserve Port von Warre's, einer der ältesten Portweinmarken überhaupt. Heute wird das Haus von der Familie Symington geführt.",
    quiz: [
      { q: "Welche Bedeutung hat das Gründungsjahr 1670 von Warre's?", a: "Erstes in Portugal gegründetes britisches Portweinhaus", x: ["Erstmals wurde Portwein mit Brandy versetzt", "Der Douro wurde als Herkunftsgebiet festgelegt", "Der erste Vintage Port wurde deklariert"] },
    ],
  },
  ib_ramospinto: {
    fact: "Tawny Port des Portweinhauses, das Adriano Ramos Pinto 1880 gründete. Gekeltert aus Trauben der Quinta do Bom Retiro im Douro.",
    quiz: [
      { q: "Womit sorgte Ramos Pinto Anfang des 20. Jahrhunderts für Aufsehen?", a: "Mit kühnen Werbeplakaten im Jugendstil", x: ["Mit einer eigenen Portwein-Bahnlinie", "Mit dem größten Eichenfass der Welt", "Mit einer Landkarte in Blattgold auf der Flasche"] },
      { q: "Welches Champagnerhaus übernahm Ramos Pinto 1990?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  ib_blandys: {
    fact: "Madeira-Haus, 1811 gegründet und seither von einer Familie über Generationen geführt. Malmsey ist der süßeste Madeira-Stil.",
    quiz: [
      { q: "Wie heißt das traditionelle Verfahren, bei dem Madeira wie der von Blandy's viele Jahre lang auf sonnigen Dachböden langsam erwärmt reift?", a: "Canteiro", x: ["Solera", "Appassimento", "Charmat"] },
      { q: "Aus welchem Land stammte John Blandy, der Gründer von Blandy's?", a: "England", x: ["Portugal", "Spanien", "Frankreich"] },
    ],
  },
  ib_cossart: {
    fact: "Eines der ältesten Weinhäuser auf Madeira. Bual ist ein Madeira-Stil mit mäßiger Süße und lebendiger Säure.",
    quiz: [
      { q: "In welchem Jahr wurde Cossart Gordon auf Madeira gegründet?", a: "1745", x: ["1645", "1845", "1945"] },
    ],
  },
};

export default T;
