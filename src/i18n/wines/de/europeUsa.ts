import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  eu_prum_wehlener: {
    fact: "Führender Erzeuger der Wehlener Sonnenuhr, die nach der Sonnenuhr im Steilhang benannt ist. Berühmt für feinsüße Rieslinge, die jung verschlossen sind und jahrzehntelang reifen.",
    quiz: [
      { q: "Wonach ist die Lage von Joh. Jos. Prüm Wehlener Sonnenuhr benannt?", a: "Nach einer Sonnenuhr im Weinberg", x: ["Nach einem Mondgarten", "Nach einem Glockenturm", "Nach einer Wassermühle"] },
    ],
  },
  eu_loosen_praelat: {
    fact: "Riesling aus dem Erdener Prälat, der dank windgeschützter roter Schieferfelsen als wärmste Lage der Mosel gilt. Die Lage ist klein, die Menge entsprechend gering.",
    quiz: [
      { q: "Wer übernahm 1988 den Familienbetrieb und machte den Dr. Loosen Erdener Prälat weltbekannt?", a: "Ernst Loosen", x: ["Egon Müller", "Johannes Selbach", "Carl von Schubert"] },
    ],
  },
  eu_christoffel_urzig: {
    fact: "Im Steilhang von Ürzig mischt sich an der Mosel seltener roter Vulkanboden mit Schiefer. Daher ist der Riesling für seine exotisch-würzigen Aromen berühmt.",
    quiz: [
      { q: "Worauf spielt der Lagenname „Würzgarten“ im Ürziger Würzgarten an?", a: "Einen Garten voller Gewürze", x: ["Einen Weinkeller", "Einen Burggarten", "Einen Sonnenhügel"] },
    ],
  },
  eu_schloss_johannisberg: {
    fact: "Das Rheingauer Schloss kennzeichnet seine Qualitätsstufen mit der Farbe der Kapsel. Von Gelb-, Grün-, Rosa- und Goldlack steht der Grünlack für die Spätlese.",
    quiz: [
      { q: "Welches Prädikat soll 1775 auf Schloss Johannisberg entstanden sein, weil der Kurier mit der Leseerlaubnis zu spät kam?", a: "Spätlese", x: ["Eiswein", "Kabinett", "Großes Gewächs"] },
      { q: "Welcher Staatsmann erhielt Schloss Johannisberg 1816 vom österreichischen Kaiser geschenkt?", a: "Metternich", x: ["Bismarck", "Talleyrand", "Richelieu"] },
    ],
  },
  eu_weil_grafenberg: {
    fact: "Dr. Robert Weil, Deutschprofessor an der Pariser Sorbonne, gründete das Weingut 1875 in Kiedrich. Aushängeschild ist der Riesling aus der steilen Lage Gräfenberg.",
    quiz: [
      { q: "Welches japanische Unternehmen wurde 1988 Mehrheitseigner des Weinguts Robert Weil?", a: "Suntory", x: ["Kirin", "Asahi", "Sapporo"] },
    ],
  },
  eu_keller_gmax: {
    fact: "Riesling der Familie Keller, die Rheinhessen zu einer Region von Weltrang machte. In winzigen Mengen von alten Reben erzeugt, gilt er als teuerster trockener Riesling Deutschlands.",
    quiz: [
      { q: "Warum gilt der Keller G-Max als geheimnisvoller Wein?", a: "Die Lage des Weinbergs wird nicht verraten", x: ["Jedes Jahr gestaltet ein anderer Künstler das Etikett", "Er wird nur als Eiswein erzeugt", "Er reift auf dem Meeresgrund"] },
    ],
  },
  eu_donnhoff_hermannshohle: {
    fact: "Helmut Dönnhoff brachte das kleine Anbaugebiet Nahe auf die Weltbühne. Die Hermannshöhle mit ihrem Mix aus Schiefer und Vulkangestein gilt als beste Lage der Nahe.",
    quiz: [
      { q: "Welcher Sohn führt Dönnhoff heute als Nachfolger von Vater Helmut?", a: "Cornelius Dönnhoff", x: ["Ernst Loosen", "Klaus Peter Keller", "Philipp Wittmann"] },
    ],
  },
  eu_haag_juffer: {
    fact: "Riesling aus dem Hang Juffer-Sonnenuhr, der dem Ort Brauneberg auf der anderen Flussseite gegenüberliegt. Die Familie Haag keltert hier seit Generationen feine, langlebige Weine.",
    quiz: [
      { q: "Woher stammt das Wort „Juffer“ in Fritz Haag Brauneberger Juffer?", a: "Von Jungfer (junge Dame)", x: ["Von Stadtmauer", "Von Fuchs", "Von Sonne"] },
    ],
  },
  eu_grunhaus_abtsberg: {
    fact: "Dieser Weinberg an der Ruwer taucht erstmals in Urkunden des 10. Jahrhunderts auf. Seit Ende des 19. Jahrhunderts führt ihn die Familie von Schubert, die noch immer das um 1900 entworfene Etikett verwendet.",
    quiz: [
      { q: "Wer bewirtschaftete die Weinberge von Maximin Grünhaus als Erster?", a: "Die Abtei St. Maximin in Trier", x: ["Der Kölner Dom", "Das preußische Königshaus", "Die Universität Heidelberg"] },
      { q: "Für welchen Stil ist das Etikett von Maximin Grünhaus berühmt?", a: "Jugendstil (Art nouveau)", x: ["Bauhaus", "Pop-Art", "Rokoko"] },
    ],
  },
  eu_selbach_zeltinger: {
    fact: "Weingut der Familie Selbach, die in Zeltingen seit Generationen Reben pflegt. Aushängeschild ist der Riesling aus dem steilen Hang der Sonnenuhr, auf dem eine Sonnenuhr steht.",
    quiz: [
      { q: "Welche berühmte Lage des Nachbarorts bildet einen durchgehenden Hang mit der Zeltinger Sonnenuhr von Selbach-Oster?", a: "Wehlener Sonnenuhr", x: ["Piesporter Goldtröpfchen", "Bernkasteler Doctor", "Scharzhofberg"] },
    ],
  },
  eu_schloss_vollrads: {
    fact: "Das Rheingauer Schloss gilt als eines der ältesten Weingüter der Welt. Wahrzeichen ist der mittelalterliche, von einem Wassergraben umgebene Turm.",
    quiz: [
      { q: "Aus welchem Jahr stammt der älteste Beleg für einen Weinverkauf von Schloss Vollrads?", a: "1211", x: ["1775", "1855", "1920"] },
    ],
  },
  eu_kloster_eberbach: {
    fact: "1136 von Zisterziensermönchen gegründetes Klosterweingut. Der von den Mönchen ummauerte Steinberg wird oft mit dem Clos de Vougeot in Burgund verglichen.",
    quiz: [
      { q: "Welcher Film mit Sean Connery wurde im Kloster Eberbach gedreht?", a: "Der Name der Rose", x: ["Indiana Jones und der letzte Kreuzzug", "Die Unbestechlichen", "James Bond 007 – Goldfinger"] },
    ],
  },
  eu_kunstler_holle: {
    fact: "Spitzenweingut in Hochheim am Ostrand des Rheingaus, wo der Main in den Rhein mündet. Mit kraftvollen, trockenen Rieslingen steht es für den Rheingau.",
    quiz: [
      { q: "Welcher englische Spitzname für Rheinwein leitet sich von Hochheim ab, der Heimat von Künstler Hochheimer Hölle?", a: "Hock", x: ["Claret", "Sack", "Bubbly"] },
    ],
  },
  eu_wittmann_morstein: {
    fact: "Trockener Riesling aus der Kalksteinlage Morstein, die die Familie Wittmann in Westhofen biodynamisch bewirtschaftet. Gilt als Spitzenwein Rheinhessens auf Grand-Cru-Niveau.",
    quiz: [
      { q: "Wer führt das Weingut Wittmann biodynamisch und keltert den Morstein?", a: "Philipp Wittmann", x: ["Klaus Peter Keller", "Helmut Dönnhoff", "Johannes Leitz"] },
    ],
  },
  eu_burklin_kirchenstuck: {
    fact: "Großes Familienweingut in Wachenheim in der Pfalz, das biodynamisch arbeitet. Das kleine Kirchenstück neben der Kirche gilt als wertvollste Lage der Pfalz.",
    quiz: [
      { q: "An welchem Anbaugebiet orientieren sich die Stufen „G.C.“ und „P.C.“ auf den Etiketten von Dr. Bürklin-Wolf?", a: "Burgund", x: ["Bordeaux-Klassifikation von 1855", "Reifestufen der Rioja", "Échelle des Crus der Champagne"] },
    ],
  },
  eu_black_tower: {
    fact: "Ende der 1960er-Jahre entstandene deutsche Weinmarke, die in Großbritannien und weltweit sehr beliebt wurde. Die tiefschwarze, wie Keramik wirkende Flasche fällt sofort ins Auge.",
    quiz: [
      { q: "Zu welchem milden, lieblichen deutschen Weißweinstil gehörte Black Tower bei seiner Einführung?", a: "Liebfraumilch", x: ["Eiswein", "Sekt", "Trockenbeerenauslese"] },
    ],
  },
  eu_wirsching_silvaner: {
    fact: "Familienweingut, das seit Generationen in Iphofen in Franken arbeitet. Aus Gipskeuper-Lagen am Fuß des Steigerwalds kommt erdiger Silvaner im Bocksbeutel.",
    quiz: [
      { q: "Wer war Julius Echter, der Namensgeber des Iphöfer Julius-Echter-Berg von Hans Wirsching?", a: "Fürstbischof von Würzburg im 16./17. Jahrhundert", x: ["König von Bayern", "Ein Reformator", "Ein Rebenzüchter"] },
    ],
  },
  eu_molitor_himmelreich: {
    fact: "Markus Molitor übernahm den Familienbetrieb schon sehr jung und machte ihn zu einem Spitzengut der Mosel. Der Lagenname „Himmelreich“ bedeutet so viel wie Paradies.",
    quiz: [
      { q: "Was verrät die Kapselfarbe (Weiß, Grün, Gold) auf den Flaschen von Markus Molitor?", a: "Den Süßegrad", x: ["Den Boden des Weinbergs", "Die Reifedauer", "Den Monat der Lese"] },
    ],
  },
  eu_thanisch_doctor: {
    fact: "Riesling aus der kleinen, berühmten Steillage Doctor direkt hinter Bernkastel. Sie gilt seit Langem als teuerster Weinbergsboden Deutschlands.",
    quiz: [
      { q: "Auf welche Legende geht der Lagenname von Dr. H. Thanisch Berncasteler Doctor zurück?", a: "Ein kranker Trierer Erzbischof wurde durch den Wein geheilt", x: ["Neben dem Weinberg stand ein großes Krankenhaus", "Napoleons Militärarzt nutzte ihn als Arznei", "Die Lesehelfer trugen weiße Arztkittel"] },
    ],
  },
  eu_leitz_einszweidry: {
    fact: "Leichter, frischer trockener Riesling von Johannes Leitz aus Rüdesheim, wo der Rhein seine Biegung macht. Zu einem günstigen Preis weltweit beliebt.",
    quiz: [
      { q: "Welches Wortspiel steckt im Namen Leitz „Eins Zwei Dry“?", a: "Aus „drei“ in „eins, zwei, drei“ wird das englische „dry“", x: ["Eine Anspielung auf Beethovens Sinfonienummern", "Die Namen dreier Leitz-Brüder", "Ein Verfahren mit dreifacher Filtration"] },
    ],
  },
  eu_fxpichler_kellerberg: {
    fact: "Die Familie Pichler aus Oberloiben hob ihr Weingut an die Spitze der Wachau. Der Smaragd vom Kellerberg über der Donau vereint Kraft und Tiefe.",
    quiz: [
      { q: "Woher stammt der Name der Stufe „Smaragd“ auf dem Etikett von F.X. Pichler?", a: "Von smaragdgrünen Eidechsen in den Weinbergsmauern", x: ["Von einer nahen Smaragdmine", "Von einem Juwel der Habsburger Krone", "Von der grünen Flasche"] },
    ],
  },
  eu_knoll_schutt: {
    fact: "Ein Wachauer Klassiker, den die Familie Knoll in Unterloiben seit Generationen keltert. Traditionell und unabhängig von Moden entstehen Weine, die mit langer Reife aufblühen.",
    quiz: [
      { q: "Welcher Heilige ist auf dem Etikett von Knoll abgebildet?", a: "St. Urban, Schutzpatron der Winzer", x: ["St. Petrus", "St. Nikolaus", "St. Georg"] },
    ],
  },
  eu_prager_achleiten: {
    fact: "Spitzenweingut in Weißenkirchen in der Wachau. Unter Toni Bodenstein wurde es mit mineralischen Rieslingen von den steilen Steinterrassen der Achleiten berühmt.",
    quiz: [
      { q: "Über welchem Fluss liegt der Weinberg Achleiten von Prager?", a: "Donau", x: ["Rhein", "Mosel", "Elbe"] },
    ],
  },
  eu_hirtzberger_singerriedel: {
    fact: "Spitzenweingut in Spitz im Westen der Wachau. Aushängeschild ist der Riesling Smaragd von den steilen Terrassen des Singerriedel hinter dem Ort.",
    quiz: [
      { q: "Welches ist die leichteste Stufe der 1983 von Wachauer Winzern wie Hirtzberger geschaffenen Vinea-Wachau-Klassifikation?", a: "Steinfeder", x: ["Smaragd", "Kabinett", "Großes Gewächs"] },
    ],
  },
  eu_brundlmayer_heiligenstein: {
    fact: "Von Willi Bründlmayer in Langenlois im Kamptal groß gemachtes Weingut. Berühmt für Riesling vom steilen Heiligenstein und Sekt nach traditioneller Methode.",
    quiz: [
      { q: "Worauf verweist der Lagenname Heiligenstein bei Bründlmayer?", a: "Einen heiligen Stein (Felsen)", x: ["Einen weißen Hügel", "Einen Heiligenbrunnen", "Ein Heldengrab"] },
    ],
  },
  eu_kracher_tba: {
    fact: "Der Nebel am Neusiedler See bei Illmitz fördert die Edelfäule und bringt Süßweine von Weltrang hervor. Der verstorbene Alois Kracher führte österreichische Dessertweine an die Weltspitze.",
    quiz: [
      { q: "Wie heißt die Serie von Kracher-Trockenbeerenauslesen, die in neuen Eichenfässern reift?", a: "Nouvelle Vague", x: ["Zwischen den Seen", "Smaragd", "Grand Cru Classé"] },
    ],
  },
  eu_domane_wachau: {
    fact: "Genossenschaftsweingut, das von zahlreichen Wachauer Winzerfamilien gemeinsam getragen wird. Stammsitz ist das barocke Kellerschlössel in Dürnstein.",
    quiz: [
      { q: "Welcher König war Ende des 12. Jahrhunderts auf der Burg Dürnstein, dem Sitz der Domäne Wachau, gefangen?", a: "Richard Löwenherz von England", x: ["Ludwig IX. von Frankreich", "Kaiser Friedrich I. Barbarossa", "Robert I. von Schottland"] },
      { q: "Wie hieß die Domäne Wachau vor der Umbenennung im Jahr 2008?", a: "Freie Weingärtner Wachau", x: ["Königliche Kellerei Wachau", "Donau-Weingenossenschaft", "Klosterweingut Dürnstein"] },
    ],
  },
  eu_moric_blaufrankisch: {
    fact: "2001 gegründetes Weingut im Burgenland. Aus alten Blaufränkisch-Reben keltert es burgundisch feine Rotweine und hat den Ruf der Rebsorte verändert.",
    quiz: [
      { q: "Welcher Winzer gründete Moric und machte den Blaufränkisch international bekannt?", a: "Roland Velich", x: ["Alois Kracher", "Willi Bründlmayer", "Emmerich Knoll"] },
    ],
  },
  eu_royaltokaji_essencia: {
    fact: "Gesammelt wird nur der Saft, der aus aufgeschichteten edelfaulen Trauben unter ihrem eigenen Gewicht abfließt; er gärt über Jahre hinweg sehr langsam. Der Alkohol bleibt bei wenigen Prozent, die Konsistenz ist dick wie Honig.",
    quiz: [
      { q: "Welcher britische Weinautor gründete Royal Tokaji 1990 mit?", a: "Hugh Johnson", x: ["Jancis Robinson", "Robert Parker", "Michael Broadbent"] },
    ],
  },
  eu_oremus_aszu: {
    fact: "Weingut in Tolcsva, benannt nach der Lage Oremus, in der der Legende nach der erste Tokajer Aszú entstand. Oremus bedeutet auf Latein „Lasset uns beten“.",
    quiz: [
      { q: "Welches spanische Spitzengut kaufte Oremus im Jahr 1993?", a: "Vega Sicilia", x: ["Marqués de Riscal", "Torres", "Bodegas Muga"] },
    ],
  },
  eu_disznoko_aszu: {
    fact: "Benannt nach einem großen, an ein Wildschwein erinnernden Felsen mitten im Weinberg. Nach dem Ende des Kommunismus half das Gut mit ausländischem Kapital, Tokaj wiederzubeleben.",
    quiz: [
      { q: "Was bedeutet der Name Disznókő?", a: "Schweinestein (Wildschweinfelsen)", x: ["Goldener Hügel", "Königsquelle", "Wolfstal"] },
      { q: "Welche Weinfirma einer französischen Versicherungsgruppe besitzt Disznókő seit 1992?", a: "AXA Millésimes", x: ["LVMH", "Groupe Castel", "Baron Philippe de Rothschild"] },
    ],
  },
  eu_kefraya: {
    fact: "Eines der führenden Weingüter des Libanon mit Rebflächen hoch an den Westhängen des Bekaa-Tals. Französische Rebsorten und libanesische Sonne ergeben dichte, würzige Rotweine.",
    quiz: [
      { q: "Zwischen welchen beiden Gebirgen liegt das Bekaa-Tal, die Heimat von Château Kefraya?", a: "Libanon- und Antilibanon-Gebirge", x: ["Taurus- und Zagros-Gebirge", "Kaukasus und Ural", "Atlas- und Rif-Gebirge"] },
    ],
  },
  eu_ixsir: {
    fact: "Weingut an den Berghängen von Batroun im Norden des Libanon. Der Name geht auf das arabische Wort für „Elixier“ zurück; berühmt ist das umweltfreundliche, in die Erde gebaute Kellereigebäude.",
    quiz: [
      { q: "Welcher Mitgründer von Ixsir war Chef von Renault und Nissan?", a: "Carlos Ghosn", x: ["Bernard Arnault", "Scheich Mansour", "Richard Branson"] },
    ],
  },
  eu_massaya: {
    fact: "Die Brüder Ghosn kehrten nach dem Bürgerkrieg in den Libanon zurück und gründeten das Weingut in Tanail im Bekaa-Tal gemeinsam mit renommierten französischen Weinhäusern.",
    quiz: [
      { q: "Welches Spitzengut aus Châteauneuf-du-Pape war an der Gründung von Massaya beteiligt?", a: "Vieux Télégraphe (Familie Brunier)", x: ["Château de Beaucastel (Familie Perrin)", "Château Rayas", "E. Guigal"] },
    ],
  },
  eu_castel_grandvin: {
    fact: "Das Familienweingut begann mit Reben, die Eli Ben Zaken neben seinem Haus pflanzte. Es gilt als Pionier, der die Ära israelischer Spitzenweine einläutete.",
    quiz: [
      { q: "Welche Stadt liegt den Judäischen Bergen, der Heimat von Domaine du Castel, am nächsten?", a: "Jerusalem", x: ["Haifa", "Eilat", "Nazareth"] },
    ],
  },
  eu_yarden_cabernet: {
    fact: "Cabernet aus kühlen Vulkanböden auf den Golanhöhen. Mit dieser Marke machte die in den 1980er-Jahren gegründete Golan Heights Winery israelischen Wein international bekannt.",
    quiz: [
      { q: "Was bezeichnet das hebräische Wort „Yarden“?", a: "Den Jordan", x: ["Den See Genezareth", "Den Berg Hermon", "Das Tote Meer"] },
    ],
  },
  eu_gaia_thalassitis: {
    fact: "Thalassitis („vom Meer“) ist ein salziger, straffer Weißwein aus Assyrtiko von der Vulkaninsel Santorini und das Aushängeschild von Gaia Wines.",
    quiz: [
      { q: "Wie heißt die korbförmige Erziehung, bei der die Reben für Gaia Thalassitis auf Santorini zum Schutz vor starkem Wind rund gewunden werden?", a: "Kouloura", x: ["Gobelet", "Pergola", "Guyot"] },
    ],
  },
  eu_boutari_naoussa: {
    fact: "Nordgriechischer Rotwein aus Xinomavro, was „saure Schwarze“ bedeutet. Wegen hoher Säure und kräftiger Tannine nennt man ihn den „Barolo Griechenlands“.",
    quiz: [
      { q: "In welchem Jahr machte Boutari in Naoussa erstmals Wein?", a: "1879", x: ["1789", "1923", "1970"] },
    ],
  },
  eu_sigalas_assyrtiko: {
    fact: "Weingut nahe dem Dorf Oia im Norden Santorinis. Auf der Insel, wo über hundertjährige Wurzelstöcke keine Seltenheit sind, entsteht mineralischer Assyrtiko.",
    quiz: [
      { q: "Welchem Schädling entgingen die Reben von Domaine Sigalas dank der vulkanischen Sandböden Santorinis?", a: "Reblaus (Phylloxera)", x: ["Traubenwickler", "Fruchtfliege", "Termite"] },
    ],
  },
  eu_tsinandali: {
    fact: "Georgiens bekanntester trockener Weißwein aus Rkatsiteli und Mtsvane. Benannt nach dem Dorf, in dem ein Adliger im 19. Jahrhundert auf seinem Gut die europäische Weinbereitung einführte.",
    quiz: [
      { q: "Welcher adlige Dichter führte im 19. Jahrhundert auf seinem Gut in Tsinandali die europäische Weinbereitung in Georgien ein?", a: "Alexander Tschawtschawadse", x: ["Schota Rustaweli", "Erekle II.", "Niko Pirosmani"] },
    ],
  },
  eu_kindzmarauli: {
    fact: "Die Gärung des Saperavi wird durch Kühlung gestoppt, sodass natürliche Traubensüße erhalten bleibt. Der berühmte georgische Rotwein darf nur in einem festgelegten Gebiet um Kwareli erzeugt werden.",
    quiz: [
      { q: "Wofür ist der Rotwein Kindzmarauli bekannt?", a: "Halbsüß mit natürlicher Restsüße", x: ["Knochentrocken", "Mit Branntwein aufgespritet", "Perlend mit Kohlensäure"] },
    ],
  },
  eu_pheasants_tears: {
    fact: "Ein georgischer Bauer und ein amerikanischer Maler gründeten das Weingut in Signagi. Der Name stammt aus einer alten georgischen Erzählung über einen Wein, so gut, dass selbst ein Fasan Tränen vergießt.",
    quiz: [
      { q: "Wie heißt das große, in die Erde eingegrabene Tongefäß, in dem Pheasant's Tears seine Weine traditionell vergären und reifen lässt?", a: "Qvevri", x: ["Barrique", "Foudre", "Solera"] },
      { q: "Welcher amerikanische Maler gründete Pheasant's Tears mit?", a: "John Wurdeman", x: ["Andy Warhol", "Keith Haring", "Jeff Koons"] },
    ],
  },
  eu_movia_puro: {
    fact: "Weingut von Aleš Kristančič mit Weinbergen beiderseits der slowenisch-italienischen Grenze. Der Puro kommt mit dem Hefesatz noch in der Flasche in den Handel.",
    quiz: [
      { q: "Was muss man vor dem Genuss von Movia Puro selbst erledigen?", a: "Die Flasche kopfüber öffnen, um den Hefesatz zu entfernen", x: ["Zuckersirup hinzufügen", "Die Flasche schütteln, bis sie schäumt", "Den Korken in Wasser einweichen"] },
    ],
  },
  eu_dingac: {
    fact: "Plavac Mali von steilen Hängen, die im Süden der Halbinsel Pelješac zum Meer abfallen. 1961 erhielt er als erster Wein Kroatiens eine geschützte Herkunftsbezeichnung.",
    quiz: [
      { q: "Welches Tier, das früher die Trauben aus den steilen Weinbergen trug, ist auf dem Etikett von Dingač abgebildet?", a: "Esel", x: ["Ziege", "Pferd", "Kuh"] },
    ],
  },
  eu_cricova_brut: {
    fact: "Berühmt für seine riesige unterirdische Weinstadt in den Stollen eines alten Kalksteinbruchs. In über 100 km langen Gängen lagern Schaumweine aus Flaschengärung und kostbare Sammlerweine.",
    quiz: [
      { q: "Welcher erste Mensch im Weltall besuchte in den 1960er-Jahren die unterirdischen Keller von Cricova?", a: "Juri Gagarin", x: ["Neil Armstrong", "John Glenn", "Alexei Leonow"] },
    ],
  },
  eu_nyetimber: {
    fact: "Schaumweingut in West Sussex, England. Mit denselben drei Rebsorten wie in der Champagne und Flaschengärung begründete es den Ruf des englischen Schaumweins.",
    quiz: [
      { q: "Wer pflanzte 1988 als Erste Champagner-Rebsorten bei Nyetimber?", a: "Das US-Ehepaar Stuart und Sandy Moss", x: ["Das britische Königshaus", "Moët & Chandon", "Die Familie Taittinger"] },
    ],
  },
  eu_chapel_down: {
    fact: "Führendes englisches Weingut in Tenterden in der Grafschaft Kent. Seine Schaumweine entstehen wie Champagner durch Flaschengärung.",
    quiz: [
      { q: "Welcher Boden lässt südenglische Schaumweine wie Chapel Down an die Champagne erinnern?", a: "Kreideboden", x: ["Schwarzer Vulkanascheboden", "Roter Schieferboden", "Schwemmland aus Flusskies"] },
    ],
  },
  us_screaming_eagle: {
    fact: "Jean Phillips brachte 1992 den ersten Jahrgang von Land heraus, das sie in Oakville gekauft hatte. Im Jahr 2000 erzielte eine 6-Liter-Flasche bei der Napa-Auktion 500.000 US-Dollar und verblüffte die Welt.",
    quiz: [
      { q: "Welcher US-Sportklubbesitzer übernahm Screaming Eagle im Jahr 2006?", a: "Stan Kroenke", x: ["Jerry Jones", "Mark Cuban", "Robert Kraft"] },
      { q: "Wer kelterte die frühen Jahrgänge von Screaming Eagle?", a: "Heidi Barrett", x: ["Warren Winiarski", "Mike Grgich", "Paul Draper"] },
    ],
  },
  us_harlan: {
    fact: "Immobilienentwickler Bill Harlan gründete das Gut 1984 an den Hängen westlich von Oakville. Mit dem Ziel eines „Premier Cru“ des Napa Valley erhielt es mehrfach 100 Parker-Punkte.",
    quiz: [
      { q: "Welche weitere Kultweinmarke startete Bill Harlan, Gründer von Harlan Estate, in den 1990er-Jahren?", a: "Bond", x: ["Scarecrow", "Colgin", "Screaming Eagle"] },
      { q: "Welches Resort im Napa Valley gründete Bill Harlan, Gründer von Harlan Estate, mit?", a: "Meadowood", x: ["Auberge du Soleil", "Carneros Inn", "Solage"] },
    ],
  },
  us_dominus: {
    fact: "Christian Moueix aus Bordeaux, einst Leiter von Pétrus, keltert diesen Wein aus dem alten Napanook-Weinberg in Yountville. Erster Jahrgang war 1983.",
    quiz: [
      { q: "Welches Schweizer Architektenduo entwarf das Kellereigebäude von Dominus Estate?", a: "Herzog & de Meuron", x: ["Frank Gehry", "Tadao Ando", "Renzo Piano"] },
      { q: "Was ist das Besondere an den Wänden des Gebäudes von Dominus Estate?", a: "Drahtkörbe gefüllt mit Basaltsteinen", x: ["Vorhangfassade aus Glas", "Verkleidung aus Fassdauben", "Sichtbeton"] },
    ],
  },
  us_caymus_ss: {
    fact: "Die Familie Wagner, die Caymus führt, wählt jedes Jahr nur die besten Fässer für diesen Spitzen-Cabernet aus. Er gilt als Inbegriff des dichten, samtigen Napa-Stils.",
    quiz: [
      { q: "Welchen Rekord hält Caymus Special Selection bei Wine Spectator?", a: "Einziger Wein, der zweimal „Wein des Jahres“ wurde", x: ["Erster US-Wein mit 100 Punkten", "Teuerster je verkaufter US-Wein", "Erster Wein, der in einer Raumstation reifte"] },
    ],
  },
  us_caymus: {
    fact: "Die Familie Wagner gründete das Weingut 1972 in Rutherford. Mit reifer Frucht und samtiger Textur ist dieser dichte Cabernet auch in Korea sehr beliebt.",
    quiz: [
      { q: "Woher stammt der Name Caymus?", a: "Vom mexikanischen Landgut „Rancho Caymus“ im Napa des 19. Jahrhunderts", x: ["Vom Namen der Frau des Gründers", "Vom alten Namen des Napa River", "Von der deutschen Heimat der Wagners"] },
      { q: "Welche Familie gründete und führt Caymus?", a: "Familie Wagner", x: ["Familie Mondavi", "Familie Gallo", "Familie Coppola"] },
    ],
  },
  us_silveroak_napa: {
    fact: "Ausschließlich aus Cabernet Sauvignon, gereift in amerikanischer Eiche. Am Tag der Freigabe eines neuen Jahrgangs bilden sich vor dem Weingut lange Schlangen.",
    quiz: [
      { q: "Welches Bauwerk zeigt das Etikett von Silver Oak?", a: "Einen Wasserturm", x: ["Einen Leuchtturm", "Eine Windmühle", "Einen Kirchturm"] },
      { q: "Auf welche Fässer setzt Silver Oak beim Ausbau?", a: "Amerikanische Eiche", x: ["Französische Eiche", "Slowenische Eiche", "Ungarische Eiche"] },
    ],
  },
  us_silveroak_av: {
    fact: "Silver Oaks Cabernet aus Sonoma ist weicher und früher trinkreif als die Napa-Abfüllung. Auf dem Etikett prangt derselbe Wasserturm wie beim Napa-Wein.",
    quiz: [
      { q: "Wer gründete Silver Oak im Jahr 1972?", a: "Ray Duncan und Justin Meyer", x: ["Robert Mondavi und Baron Philippe", "Jack und Dolores Cakebread", "Dan und Margaret Duckhorn"] },
    ],
  },
  us_cask23: {
    fact: "Spitzen-Cabernet der von Warren Winiarski gegründeten Stag's Leap Wine Cellars aus den allerbesten Trauben. Erster Jahrgang war 1974.",
    quiz: [
      { q: "Woher stammt der Name Cask 23?", a: "Vom herausragenden Fass Nr. 23, das im ersten Jahr separat abgefüllt wurde", x: ["Von Parzelle 23 des Weinbergs", "Vom Geburtstag des Gründers am 23.", "Von einer Vorschrift über 23 Monate Reife"] },
      { q: "Welches italienische Spitzenhaus übernahm 2007 zusammen mit Chateau Ste. Michelle die Stag's Leap Wine Cellars, Erzeuger von Cask 23?", a: "Antinori", x: ["Gaja", "Frescobaldi", "Biondi-Santi"] },
    ],
  },
  us_slv: {
    fact: "S.L.V. steht für „Stag's Leap Vineyard“. Nachdem der 1973er französische Spitzenweine geschlagen hatte, kam eine Flasche in die Sammlung der Smithsonian Institution.",
    quiz: [
      { q: "Bei welcher Blindverkostung 1976 gewann der 1973er Stag's Leap Wine Cellars S.L.V. die Rotweinwertung?", a: "Urteil von Paris", x: ["Bordeaux-Klassifikation von 1855", "Grand Prix der Vinexpo", "„Wein des Jahres“ von Wine Spectator"] },
      { q: "Welchen Beruf hatte Warren Winiarski, Gründer von Stag's Leap Wine Cellars, ursprünglich?", a: "Dozent für Politikwissenschaft in Chicago", x: ["Flugzeugpilot", "Erdölgeologe", "Hollywood-Regisseur"] },
    ],
  },
  us_montelena_chard: {
    fact: "Beim „Urteil von Paris“ 1976 schlug der 1973er die großen Burgunder und gewann die Weißweinwertung. Die Geschichte wurde auch verfilmt.",
    quiz: [
      { q: "Wer kelterte den siegreichen 1973er Chateau Montelena Chardonnay beim Urteil von Paris?", a: "Mike Grgich", x: ["Warren Winiarski", "Robert Mondavi", "André Tchelistcheff"] },
      { q: "Welcher Film von 2008 erzählt vom Sieg des Chateau Montelena Chardonnay beim Urteil von Paris?", a: "Bottle Shock", x: ["Sideways", "Ein gutes Jahr", "Mondovino"] },
    ],
  },
  us_montelena_cab: {
    fact: "Cabernet aus dem steinernen Château am Fuß des Mount St. Helena nördlich von Calistoga. Seit 1972 hat die Familie Barrett das alte Weingut wiederbelebt und geführt.",
    quiz: [
      { q: "Welchen Beruf hatte Alfred Tubbs, der Chateau Montelena 1882 gründete?", a: "Seilhersteller", x: ["Eisenbahnmagnat", "Goldminenbesitzer", "Bankier"] },
    ],
  },
  us_tokalon: {
    fact: "Spitzen-Cabernet aus dem legendären Weinberg To Kalon in Oakville direkt hinter dem Weingut Robert Mondavi. Er gehört zu den berühmtesten Lagen des Napa Valley.",
    quiz: [
      { q: "Was bedeutet der Weinbergsname To Kalon?", a: "Griechisch für „das Schönste“", x: ["Latein für „Hügel der Götter“", "Spanisch für „heißes Land“", "Indigene Sprache für „klares Wasser“"] },
      { q: "Welcher Pionier legte den Weinberg To Kalon im 19. Jahrhundert an und gab ihm seinen Namen?", a: "Hamilton Crabb", x: ["George Yount", "Gustave Niebaum", "Charles Krug"] },
    ],
  },
  us_woodbridge: {
    fact: "Robert Mondavi gründete diese Alltagsweinmarke 1979 bei Lodi. Ziel war ein kalifornischer Wein, den jeder unkompliziert genießen kann.",
    quiz: [
      { q: "Woher stammt der Name „Woodbridge“ bei Woodbridge by Robert Mondavi?", a: "Von einem Ort bei Lodi, wo das Weingut liegt", x: ["Vom Mädchennamen der Mutter des Gründers", "Vom Namen einer Küferei", "Von der italienischen Heimat der Mondavis"] },
    ],
  },
  us_insignia: {
    fact: "Bauunternehmer Joseph Phelps brachte ihn 1974 erstmals heraus. Er gilt als erste Bordeaux-Cuvée Kaliforniens mit eigenem Fantasienamen.",
    quiz: [
      { q: "Welcher Konzern übernahm 2022 Joseph Phelps, den Erzeuger von Insignia?", a: "LVMH", x: ["E. & J. Gallo", "Constellation Brands", "Treasury Wine Estates"] },
    ],
  },
  us_heitz_martha: {
    fact: "Pionier des Einzellagen-Cabernets aus Napa, der ab dem Jahrgang 1966 den Weinbergsnamen auf dem Etikett trug. Berühmt für sein eigenwilliges Aroma von Minze und Eukalyptus.",
    quiz: [
      { q: "Wer ist die „Martha“ in Heitz Cellar Martha's Vineyard?", a: "Martha May, Frau des Weinbergsbesitzers Tom May", x: ["Die Tochter von Joe Heitz", "Eine Insel in Massachusetts", "Die Mutter des ersten Kellermeisters"] },
    ],
  },
  us_shafer_hillside: {
    fact: "Spitzen-Cabernet des Weinguts, das der Chicagoer Verlagsmanager John Shafer 1972 an den Hängen des Stags Leap District gründete. Sohn Doug Shafer baute den Ruf weiter aus.",
    quiz: [
      { q: "Welche koreanische Unternehmensgruppe übernahm 2022 Shafer Vineyards, den Erzeuger von Shafer Hillside Select?", a: "Shinsegae", x: ["Lotte", "CJ", "SK"] },
    ],
  },
  us_diamond_creek: {
    fact: "Al Brounstein gründete das Weingut Ende der 1960er-Jahre am Diamond Mountain. Er füllte seinen Cabernet konsequent getrennt nach Weinbergen ab.",
    quiz: [
      { q: "Wonach sind die Diamond-Creek-Weinberge „Volcanic Hill“, „Red Rock Terrace“ und „Gravelly Meadow“ benannt?", a: "Nach ihren unterschiedlichen Böden", x: ["Nach dem Monat der Lese", "Nach dem Pflanzjahr der Reben", "Nach den Namen der Kellermeister"] },
    ],
  },
  us_dallavalle_maya: {
    fact: "Der Italiener Gustav Dalla Valle und seine japanische Frau Naoko gründeten das Gut an den Hügeln östlich von Oakville. Ein Kultwein mit hohem Cabernet-Franc-Anteil.",
    quiz: [
      { q: "Nach wem ist Dalla Valle „Maya“ benannt?", a: "Nach der Tochter des Gründerpaars", x: ["Nach der Mutter des Gründers", "Nach der alten Maya-Kultur", "Nach der Frau des ersten Kellermeisters"] },
    ],
  },
  us_bond: {
    fact: "Projekt von Bill Harlan (Harlan Estate), der Napa-Lagen auf „Grand-Cru“-Niveau auswählt und jede einzeln abfüllt. Melbury ist eine der ersten dieser Lagen.",
    quiz: [
      { q: "Welchen Ansatz verfolgt Bond?", a: "Herausragende Napa-Lagen werden jeweils getrennt abgefüllt", x: ["Trauben aus mehreren Ländern werden verschnitten", "Jedes Jahr wird die Rebsorte gewechselt", "Der Wein reift auf dem Meeresgrund"] },
    ],
  },
  us_scarecrow: {
    fact: "Stammt aus dem J.J. Cohn Vineyard in Rutherford mit alten, in den 1940er-Jahren gepflanzten Cabernet-Reben. Sein Enkel brachte 2003 den ersten Jahrgang heraus.",
    quiz: [
      { q: "Aus welchem Film stammt der Name Scarecrow (Vogelscheuche)?", a: "Der Zauberer von Oz", x: ["Vom Winde verweht", "Casablanca", "Meine Lieder – meine Träume"] },
    ],
  },
  us_colgin_cariad: {
    fact: "Bordeaux-Cuvée des Napa-Kultweinguts unter Leitung von Ann Colgin. 2017 kaufte LVMH den Großteil der Anteile an Colgin Cellars.",
    quiz: [
      { q: "Was bedeutet das walisische Wort „Cariad“ in Colgin Cariad?", a: "Liebe", x: ["Stern", "Hügel", "Drache"] },
    ],
  },
  us_sine_qua_non: {
    fact: "Der Österreicher Manfred Krankl startete 1994 diesen Kultwein im Rhône-Stil. Der Name bedeutet auf Latein „unerlässliche Bedingung“.",
    quiz: [
      { q: "Was ist das Ungewöhnlichste an Sine Qua Non?", a: "Name und Etikettmotiv wechseln mit jedem Jahrgang", x: ["Er wird nur mit Glasstopfen statt Korken verschlossen", "Er entsteht jedes Jahr in einem anderen Land", "Er wird nur auf Auktionen verkauft"] },
    ],
  },
  us_kistler: {
    fact: "1978 in Sonoma gegründetes Chardonnay-Spitzenhaus. Bekannt für feine und zugleich kraftvolle Chardonnays, die wie in Burgund mit wilden Hefen vergoren werden.",
    quiz: [
      { q: "Wer gründete Kistler Vineyards?", a: "Steve Kistler", x: ["Jim Clendenen", "Josh Jensen", "David Lett"] },
    ],
  },
  us_farniente: {
    fact: "1885 gegründet und während der Prohibition verlassen, wurde das steinerne Weingut in Oakville 1979 von Gil Nickel wiederbelebt. Es konzentriert sich auf Chardonnay und Cabernet.",
    quiz: [
      { q: "Was bedeutet der Name Far Niente?", a: "Italienisch für „ganz ohne Sorgen“", x: ["Latein für „fernes Land“", "Spanisch für „kleiner Hof“", "Französisch für „erste Lese“"] },
    ],
  },
  us_beringer_pr: {
    fact: "Spitzen-Cabernet von Beringer, 1876 von den Brüdern Beringer aus Mainz in St. Helena gegründet und das am längsten ununterbrochen betriebene Weingut im Napa Valley.",
    quiz: [
      { q: "Warum musste Beringer während der Prohibition nicht schließen?", a: "Es durfte Messwein herstellen", x: ["Es diente als staatliches Agrarforschungsinstitut", "Es exportierte heimlich nach Kanada", "Es lieferte Essig an die Armee"] },
    ],
  },
  us_beringer_wz: {
    fact: "Süßer, leichter, rosafarbener Wein aus roten Zinfandel-Trauben. In den 1980er-Jahren verkaufte er sich in den USA explosionsartig und wurde zum Inbegriff des Massenweins.",
    quiz: [
      { q: "Woher hat der Beringer White Zinfandel seine rosa Farbe?", a: "Nur sehr kurzer Schalenkontakt roter Zinfandel-Trauben", x: ["Zusatz von Erdbeersaft", "Trauben mit rosa Schale", "Verschnitt mit Rosé-Champagner"] },
    ],
  },
  us_sutterhome_wz: {
    fact: "Der Original-White-Zinfandel, populär gemacht von Sutter Home der Familie Trinchero. In den 1980er-Jahren wurde er zum beliebtesten Wein der USA.",
    quiz: [
      { q: "Wodurch bekam der Sutter Home White Zinfandel seine heutige Süße?", a: "Durch eine steckengebliebene Gärung im Jahr 1975", x: ["Durch ein Experiment nach Eiswein-Vorbild", "Durch ein Experiment mit französischem Rosé", "Durch eine Kooperation mit einem Safthersteller"] },
    ],
  },
  us_duckhorn_merlot: {
    fact: "Dan und Margaret Duckhorn gründeten das Weingut 1976 und machten Napa-Merlot zum Spitzenwein. Jedes Etikett zeigt einen Wasservogel.",
    quiz: [
      { q: "Welcher Merlot von Duckhorn wurde 2017 bei Wine Spectator zum „Wein des Jahres“?", a: "Three Palms Vineyard Merlot", x: ["Decoy Merlot", "Goldeneye Merlot", "Paraduxx Merlot"] },
    ],
  },
  us_cakebread: {
    fact: "Jack und Dolores Cakebread gründeten das Familienweingut 1973 in Rutherford. Der Chardonnay ist fester Bestandteil der Weinkarten in den Restaurants des Napa Valley.",
    quiz: [
      { q: "Wer brachte Jack Cakebread, dem Gründer von Cakebread Cellars, das Fotografieren bei?", a: "Ansel Adams", x: ["Annie Leibovitz", "Robert Capa", "Richard Avedon"] },
    ],
  },
  us_rombauer: {
    fact: "Inbegriff des cremigen kalifornischen Chardonnays mit üppigen Noten von Butter und Vanille. Koerner und Joan Rombauer gründeten das Familienweingut 1980.",
    quiz: [
      { q: "Welches berühmte amerikanische Kochbuch schrieb Irma Rombauer, eine Verwandte der Familie Rombauer?", a: "Joy of Cooking", x: ["Mastering the Art of French Cooking", "Kitchen Confidential", "Salt, Fat, Acid, Heat"] },
    ],
  },
  us_bv_latour: {
    fact: "Spitzen-Cabernet von BV, das der Franzose Georges de Latour 1900 in Rutherford gründete. Seit dem Jahrgang 1936 gilt er als Urvater der großen Napa-Cabernets.",
    quiz: [
      { q: "Was bedeutet „Beaulieu“ in Beaulieu Vineyard auf Französisch?", a: "Schöner Ort", x: ["Hoher Hügel", "Alte Quelle", "Goldenes Feld"] },
      { q: "Welcher legendäre, aus Russland stammende Önologe machte die Georges de Latour Private Reserve zum Klassiker?", a: "André Tchelistcheff", x: ["Warren Winiarski", "Mike Grgich", "Paul Draper"] },
    ],
  },
  us_rubicon: {
    fact: "Spitzenrotwein von Inglenook, 1879 vom finnischen Kapitän Gustave Niebaum gegründet. Die Familie Coppola, die das alte Gut kaufte, erzeugt ihn seit dem Jahrgang 1978.",
    quiz: [
      { q: "Welcher Filmregisseur schuf Inglenook Rubicon?", a: "Francis Ford Coppola", x: ["Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"] },
    ],
  },
  us_ridge_montebello: {
    fact: "Cabernet-Cuvée aus Kalksteinlagen hoch oben auf einem Kamm der Santa Cruz Mountains. Paul Draper kelterte ihn jahrzehntelang auf traditionelle Weise.",
    quiz: [
      { q: "Welchen Platz belegte der 1971er Ridge Monte Bello 2006 in der Rotweinwertung der Neuauflage zum 30. Jubiläum des „Urteils von Paris“?", a: "Platz 1", x: ["Platz 2", "Platz 5", "Platz 10"] },
    ],
  },
  us_ridge_geyserville: {
    fact: "Zinfandel-Cuvée aus einem Sonoma-Weinberg mit teils über 100 Jahre alten Reben. Seit 1966 ist er Ridges Aushängeschild beim Zinfandel.",
    quiz: [
      { q: "Woher hat der Ort Geyserville, Heimat von Ridge Geyserville, seinen Namen?", a: "Von einem nahen Geysirfeld", x: ["Vom Namen eines Goldgräbers", "Vom Namen eines spanischen Missionars", "Vom Namen eines alten Bahnhofs"] },
    ],
  },
  us_frank_family: {
    fact: "Familienweingut in einem alten steinernen Kellereigebäude in Calistoga. Mit seinem weichen Cabernet wurde es in den Restaurants des Napa Valley beliebt.",
    quiz: [
      { q: "Welchen Posten hatte Rich Frank, Gründer von Frank Family Vineyards, früher inne?", a: "Präsident der Walt Disney Studios", x: ["Profi-Baseballspieler", "Erdölgeologe", "Linienpilot"] },
    ],
  },
  us_jordan: {
    fact: "Das Sonoma-Spitzengut keltert in einem Gebäude nach dem Vorbild eines französischen Landschlosses Cabernet von bordelaiser Eleganz. Erster Jahrgang war 1976.",
    quiz: [
      { q: "Welchen Beruf hatte Tom Jordan, der das Weingut Jordan 1972 gründete?", a: "Erdölgeologe", x: ["Hollywood-Filmproduzent", "Profigolfer", "Flugzeugpilot"] },
    ],
  },
  us_spottswoode: {
    fact: "Familienweingut am Westrand von St. Helena. Es stellte im Napa Valley früh auf ökologischen Anbau um und wird heute von den Töchtern geführt.",
    quiz: [
      { q: "Wer kaufte 1972 das Anwesen Spottswoode und baute das Weingut auf?", a: "Mary Novak", x: ["Margaret Duckhorn", "Ann Colgin", "Jean Phillips"] },
    ],
  },
  us_quintessa: {
    fact: "Bordeaux-Cuvée, biodynamisch erzeugt auf einem Anwesen östlich von Rutherford, das Hügel und Täler vereint. Erster Jahrgang war 1994.",
    quiz: [
      { q: "Aus welchem Land stammt das Gründerpaar von Quintessa, Agustín und Valeria Huneeus?", a: "Chile", x: ["Argentinien", "Spanien", "Italien"] },
    ],
  },
  us_pahlmeyer: {
    fact: "Der frühere Anwalt Jason Pahlmeyer gründete das Napa-Kultweingut in den 1980er-Jahren. In den 1990ern kelterte hier die Starwinzerin Helen Turley.",
    quiz: [
      { q: "Welches größte Weinunternehmen der USA übernahm Pahlmeyer im Jahr 2019?", a: "E. & J. Gallo", x: ["Constellation Brands", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us_schramsberg: {
    fact: "Das 1862 gegründete alte Weingut in Calistoga wurde 1965 vom Ehepaar Davies wiederbelebt. Der Schaumwein entsteht per Flaschengärung in Kellerhöhlen, die in den Hang gegraben wurden.",
    quiz: [
      { q: "Bei welchem Anlass wurde 1972 historisch mit Schramsberg Blanc de Blancs angestoßen?", a: "Beim Bankett von Präsident Nixon und Premier Zhou Enlai in Peking", x: ["Bei der Feier zur Rückkehr von Apollo 11", "Beim Fest zum Fall der Berliner Mauer", "Bei der Amtseinführung von Präsident Kennedy"] },
    ],
  },
  us_chandon: {
    fact: "Die 1973 in Yountville im Napa Valley eröffnete Domaine Chandon war das erste Schaumweingut, das ein französisches Champagnerhaus in Kalifornien gründete.",
    quiz: [
      { q: "Welches Champagnerhaus gründete Domaine Chandon, den Erzeuger von Chandon Brut, in Kalifornien?", a: "Moët & Chandon", x: ["Veuve Clicquot", "Taittinger", "Louis Roederer"] },
    ],
  },
  us_roederer_estate: {
    fact: "Das Champagnerhaus Louis Roederer gründete das Gut 1982 im Anderson Valley im Mendocino County. Kühler Nebel sorgt für frische Schaumweine.",
    quiz: [
      { q: "Welches ist der berühmteste Champagner von Louis Roederer, dem Gründer von Roederer Estate?", a: "Cristal", x: ["Dom Pérignon", "La Grande Dame", "Belle Époque"] },
    ],
  },
  us_kosta_browne: {
    fact: "Der Star unter den Sonoma-Pinots wurde 2011 bei Wine Spectator zum „Wein des Jahres“. Der erste Jahrgang erschien 1997.",
    quiz: [
      { q: "Womit finanzierten die beiden Gründer von Kosta Browne ihren ersten Wein?", a: "Mit Trinkgeld aus ihrer Arbeit im Restaurant", x: ["Mit einem Lottogewinn", "Mit Aktienoptionen aus dem Silicon Valley", "Mit Gewinnen aus dem Ölgeschäft"] },
    ],
  },
  us_williams_selyem: {
    fact: "Gegründet von zwei Freunden, die Ende der 1970er-Jahre als Wochenendhobby in einer Garage Wein machten. Pionier, der den Pinot Noir aus dem Russian River Valley zum Kultwein machte.",
    quiz: [
      { q: "Woher stammt der Name Williams Selyem?", a: "Von den Nachnamen der Gründer Burt Williams und Ed Selyem", x: ["Von den Namen zweier Weinberge", "Von den Namen eines Gründerehepaars", "Von einem Ort und einem Fluss"] },
    ],
  },
  us_sea_smoke: {
    fact: "Biodynamisch bewirtschafteter Pinot Noir von Südhängen in den Santa Rita Hills. Da er nur über eine Mailingliste verkauft wird, ist er berüchtigt schwer zu bekommen.",
    quiz: [
      { q: "Woher stammt der Name Sea Smoke?", a: "Vom Nebel, der vom Meer den Santa Ynez River hinaufzieht", x: ["Vom Rauch eines nahen Vulkans", "Vom Rauchton der Trauben nach einem Waldbrand", "Vom Namen der Yacht des Gründers"] },
    ],
  },
  us_au_bon_climat: {
    fact: "1982 gegründetes Spitzengut in Santa Barbara. Gegen den Trend zu übermäßig dichten Kaliforniern setzte es auf frische Weine im Stil Burgunds.",
    quiz: [
      { q: "Welcher eigenwillige Winzer gründete Au Bon Climat?", a: "Jim Clendenen", x: ["Paul Draper", "Manfred Krankl", "Josh Jensen"] },
      { q: "Was bedeutet Au Bon Climat auf Französisch?", a: "Eine gute, sonnige Lage", x: ["Burg auf einem kleinen Hügel", "Geschenk des Meeres", "Erste Lese"] },
    ],
  },
  us_calera: {
    fact: "Josh Jensen, der sein Handwerk in Burgund lernte, suchte lange nach Kalkboden und gründete das Pinot-Noir-Spitzengut schließlich hoch oben in der Gavilan Range.",
    quiz: [
      { q: "Was bedeutet der spanische Name Calera?", a: "Kalkofen", x: ["Steinbrücke", "Kleine Quelle", "Rote Erde"] },
    ],
  },
  us_meiomi: {
    fact: "Durch Verschnitt von Trauben aus den Küstenregionen Monterey, Santa Barbara und Sonoma entsteht ein weicher, fruchtbetonter Pinot Noir. 2015 wurde die Marke an Constellation Brands verkauft.",
    quiz: [
      { q: "Welches berühmte Napa-Weingut führt die Familie von Meiomi-Gründer Joe Wagner?", a: "Caymus", x: ["Silver Oak", "Beringer", "Duckhorn"] },
      { q: "Was bedeutet der Name Meiomi in der Sprache der Ureinwohner?", a: "Küste", x: ["Sonne", "Traube", "Adler"] },
    ],
  },
  us_la_crema: {
    fact: "Marke, die mit Pinot Noir und Chardonnay von der kühlen Sonoma Coast bekannt wurde. Als erschwinglicher kalifornischer Pinot Noir beliebt.",
    quiz: [
      { q: "Welcher Gründer von Kendall-Jackson übernahm La Crema und baute die Marke aus?", a: "Jess Jackson", x: ["Ernest Gallo", "Robert Mondavi", "Chuck Wagner"] },
    ],
  },
  us_apothic: {
    fact: "Rotwein-Cuvée aus Zinfandel, Syrah, Cabernet und Merlot mit süßlich-dichtem Geschmack. Ende der 2000er-Jahre erschienen, trieb sie den Boom der Red Blends in den USA voran.",
    quiz: [
      { q: "Wovon ist der Name Apothic abgeleitet?", a: "Von der „Apotheca“, in der man im mittelalterlichen Europa Wein mischte und lagerte", x: ["Von einer griechischen Weingöttin", "Von einer Kirche in der Heimat des Gründers", "Vom lateinischen Wort für „dunkle Nacht“"] },
    ],
  },
  us_prisoner: {
    fact: "Erstmals 2000 erschienene, Zinfandel-betonte Rotwein-Cuvée aus Napa. Mit ihrem dichten, weichen Geschmack begründete sie den Red-Blend-Trend in den USA.",
    quiz: [
      { q: "Welcher spanische Maler schuf die Radierung auf dem Etikett von The Prisoner?", a: "Francisco de Goya", x: ["Pablo Picasso", "Diego Velázquez", "Salvador Dalí"] },
      { q: "Wer kelterte The Prisoner als Erster?", a: "Dave Phinney", x: ["Chuck Wagner", "Manfred Krankl", "Heidi Barrett"] },
    ],
  },
  us_papillon: {
    fact: "Napa-Cuvée im Bordeaux-Stil von Orin Swift, dem Weingut von Dave Phinney, dem Schöpfer von The Prisoner. Bekannt für Etiketten mit markanten Fotos und Bildern.",
    quiz: [
      { q: "Woher stammt der Name Orin Swift?", a: "Vom zweiten Vornamen des Vaters und dem Mädchennamen der Mutter des Gründers", x: ["Von den Namen zweier Weinberge", "Vom Namen des Hundes des Gründers", "Vom Namen einer Romanfigur"] },
      { q: "Welches Unternehmen übernahm Orin Swift im Jahr 2016?", a: "E. & J. Gallo", x: ["LVMH", "Constellation Brands", "Treasury Wine Estates"] },
    ],
  },
  us_josh: {
    fact: "Kalifornische Alltagsweinmarke, die Joseph Carr Ende der 2000er-Jahre vorstellte. Sie gilt als eine der am schnellsten wachsenden Weinmarken der USA.",
    quiz: [
      { q: "Wer ist der „Josh“ von Josh Cellars?", a: "Der Vater von Gründer Joseph Carr", x: ["Der Sohn des Gründers", "Der erste Kellermeister", "Der Hund des Gründers"] },
    ],
  },
  us_bogle: {
    fact: "Wein der Familie Bogle, die in Clarksburg im Delta des Sacramento River seit Generationen Landwirtschaft betreibt. Aushängeschild ist der dichte, tintige Petite Sirah.",
    quiz: [
      { q: "Was betrieb die Familie Bogle über Generationen, bevor sie 1968 ihren ersten Weinberg pflanzte?", a: "Landwirtschaft", x: ["Ölgeschäft", "Filmproduktion", "Eisenbahnbau"] },
    ],
  },
  us_gallo: {
    fact: "Hauptmarke von E. & J. Gallo, dem größten familiengeführten Weinunternehmen der Welt. Auch Marken wie Barefoot, Apothic und Orin Swift gehören dazu.",
    quiz: [
      { q: "Wer gründete 1933 E. & J. Gallo, den Erzeuger von Gallo Family Vineyards?", a: "Ernest und Julio Gallo", x: ["Robert und Peter Mondavi", "Jacob und Frederick Beringer", "Dan und Margaret Duckhorn"] },
      { q: "Was endete 1933 in den USA, als die Gallo-Brüder ihr Weingut eröffneten?", a: "Die Prohibition", x: ["Der Bürgerkrieg", "Die Große Depression", "Der Zweite Weltkrieg"] },
    ],
  },
  us_grgich: {
    fact: "Der Kroate Mike Grgich, der den Sieger-Chardonnay beim Urteil von Paris kelterte, gründete das Gut am 4. Juli 1977. Die stets getragene Baskenmütze war sein Markenzeichen.",
    quiz: [
      { q: "In welcher Branche war die Familie von Austin Hills tätig, der Grgich Hills mit Mike Grgich gründete?", a: "Hills Bros. Kaffee", x: ["Hilton-Hotels", "Hershey-Schokolade", "Coca-Cola-Abfüllung"] },
    ],
  },
  us_kenzo: {
    fact: "Weingut in japanischem Besitz auf einem großen Gelände an den Hängen im Südosten des Napa Valley. Heidi Barrett, einst Winzerin von Screaming Eagle, übernahm die Kellerarbeit.",
    quiz: [
      { q: "Welche Spielefirma gründete Kenzo Tsujimoto, der Gründer von Kenzo Estate?", a: "Capcom", x: ["Nintendo", "Sega", "Konami"] },
    ],
  },
  us_hess: {
    fact: "Der Schweizer Unternehmer Donald Hess gründete das Weingut an den steilen Hängen des Mount Veeder. In den kühleren Berglagen entsteht ein straffer Cabernet.",
    quiz: [
      { q: "Wofür ist das Gebäude von The Hess Collection berühmt?", a: "Eine Galerie mit der Gegenwartskunstsammlung des Gründers", x: ["Ein Dampflokomotiven-Museum", "Ein unterirdisches Aquarium", "Eine Sternwarte"] },
    ],
  },
  us_ddo: {
    fact: "Die burgundische Familie Drouhin gründete das Weingut 1987 in den Dundee Hills in Oregon. Es wurde zum Symbol dafür, dass ein Burgunder Spitzenhaus das Potenzial des Oregon-Pinot-Noir anerkannte.",
    quiz: [
      { q: "Welches burgundische Haus gründete Domaine Drouhin Oregon?", a: "Maison Joseph Drouhin", x: ["Louis Jadot", "Louis Latour", "Domaine de la Romanée-Conti"] },
      { q: "Welche Tochter der Familie Drouhin leitet seit Langem die Kellerarbeit bei Domaine Drouhin Oregon?", a: "Véronique Drouhin", x: ["Anne-Claude Leflaive", "Lalou Bize-Leroy", "Marie-Thérèse Charlin"] },
    ],
  },
  us_eyrie: {
    fact: "Alles begann 1965 mit den ersten Pinot-Noir-Reben im Willamette Valley. Der 1975er trat 1979 bei einer Verkostung in Paris gegen Burgunder an und machte Oregon weltbekannt.",
    quiz: [
      { q: "Wer gründete The Eyrie Vineyards und wurde „Papa Pinot“ genannt?", a: "David Lett", x: ["Robert Drouhin", "Ken Evenstad", "Paul Gerrie"] },
      { q: "Was bedeutet das englische Wort „Eyrie“?", a: "Hoch gelegener Horst eines Greifvogels", x: ["Nebliges Tal", "Alte Wassermühle", "Hütte im Wald"] },
    ],
  },
  us_beaux_freres: {
    fact: "Der Name bedeutet auf Französisch „Schwäger“. Michael Etzel gründete das Pinot-Noir-Weingut mit seinem Schwager am Ribbon Ridge im Willamette Valley.",
    quiz: [
      { q: "Welcher berühmte Weinkritiker gründete Beaux Frères mit seinem Schwager Michael Etzel?", a: "Robert Parker", x: ["Jancis Robinson", "Hugh Johnson", "James Suckling"] },
    ],
  },
  us_domaine_serene: {
    fact: "Ken und Grace Evenstad gründeten das Weingut in den Dundee Hills und führten es an die Spitze der Oregon-Pinots. Der Spitzenwein trägt ihren Familiennamen.",
    quiz: [
      { q: "Von wessen Namen leitet sich „Serene“ in Domaine Serene ab?", a: "Von Serena, der Tochter des Gründerpaars", x: ["Von der Mutter des Gründers", "Von der griechischen Mondgöttin", "Von einem alten Ortsnamen in Oregon"] },
    ],
  },
  us_cristom: {
    fact: "Paul Gerrie gründete das Weingut 1992 in den Eola-Amity Hills. Die Weinberge tragen die Namen von Frauen der Familie wie Jessie, Louise und Marjorie.",
    quiz: [
      { q: "Wie entstand der Name Cristom?", a: "Aus den Namen der Kinder des Gründers, Christine und Tom", x: ["Vom Namen eines christlichen Klosters", "Von einer kristallklaren Quelle", "Vom Namen des ersten Kellermeisters"] },
    ],
  },
  us_csm_riesling: {
    fact: "Pionier des Weinbaus im Bundesstaat Washington und einer der größten Riesling-Erzeuger der Welt. Stammsitz ist das Château-Gebäude in Woodinville bei Seattle.",
    quiz: [
      { q: "Welchen Riesling erzeugt Chateau Ste. Michelle seit 1999 gemeinsam mit Dr. Loosen aus Deutschland?", a: "Eroica", x: ["Insignia", "Rubicon", "Opus One"] },
    ],
  },
  us_eroica: {
    fact: "Riesling, den Chateau Ste. Michelle aus Washington und Ernst Loosen von der Mosel seit 1999 gemeinsam erzeugen. Er verbindet deutsche Finesse mit der üppigen Frucht Washingtons.",
    quiz: [
      { q: "Wovon ist der Name Eroica abgeleitet?", a: "Von Beethovens 3. Sinfonie", x: ["Von einer Mozart-Oper", "Von einem Musikdrama Wagners", "Von einer Polonaise Chopins"] },
    ],
  },
  us_quilceda: {
    fact: "Von Alex Golitzin 1978 gegründet, gilt es als bester Cabernet-Erzeuger Washingtons. Mehrfach 100 Parker-Punkte bewiesen das Niveau der Weine aus Washington.",
    quiz: [
      { q: "Welcher legendäre Önologe und Onkel von Alex Golitzin ermutigte ihn zur Gründung von Quilceda Creek?", a: "André Tchelistcheff", x: ["Robert Mondavi", "Warren Winiarski", "Paul Draper"] },
    ],
  },
  us_leonetti: {
    fact: "Gary Figgins gründete es 1977 und machte es zum Kultwein Washingtons, der nur über eine Mailingliste verkauft wird. Sohn Chris Figgins führt es heute weiter.",
    quiz: [
      { q: "Welche Bedeutung hat Leonetti Cellar in der Weingeschichte von Walla Walla?", a: "Erstes kommerzielles Weingut in Walla Walla", x: ["Erstes Schaumweinhaus in Washington", "Erstes bio-zertifiziertes Weingut der USA", "Erstes Weingut mit französischem Kapital"] },
    ],
  },
  us_col_solare: {
    fact: "Bordeaux-Cuvée, die Chateau Ste. Michelle aus Washington und die italienische Familie Antinori seit dem Jahrgang 1995 gemeinsam erzeugen. Die Trauben wachsen an den heißen Hängen von Red Mountain.",
    quiz: [
      { q: "Was bedeutet Col Solare auf Italienisch?", a: "Leuchtender Hügel", x: ["Roter Berg", "Fluss der Sonne", "Goldenes Tal"] },
    ],
  },
  us_cayuse: {
    fact: "Kultweingut mit Weinbergen im Oregon-Teil des Walla Walla Valley, wo faustgroße runde Steine den Boden bedecken. Biodynamisch bewirtschaftet und nur per Mailingliste erhältlich.",
    quiz: [
      { q: "Welcher Winzer aus der Champagne gründete Cayuse?", a: "Christophe Baron", x: ["Christian Moueix", "Manfred Krankl", "Robert Drouhin"] },
      { q: "Was bedeutet der Weinbergsname „Cailloux“ bei Cayuse auf Französisch?", a: "Kiesel (Steine)", x: ["Hügel", "Quelle", "Wald"] },
    ],
  },
  us_drfrank: {
    fact: "Der aus der Ukraine stammende Botaniker Dr. Konstantin Frank gründete das Weingut 1962 am Keuka Lake in den Finger Lakes. Er ist der Pionier des Rieslings aus New York.",
    quiz: [
      { q: "Was bewies Dr. Konstantin Frank in den Finger Lakes?", a: "Europäische Rebsorten (Vinifera) gedeihen auch im kalten New York", x: ["Nur heimische amerikanische Reben überstehen die Kälte", "Riesling wird nur im Gewächshaus reif", "Aus Apfelwein lässt sich Champagner machen"] },
    ],
  },
};

export default T;
