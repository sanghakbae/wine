import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  us2_slwc_artemis: {
    fact: "Napa-Valley-Cabernet von Stag's Leap Wine Cellars, eine Cuvée aus Trauben mehrerer Weinberge. Der Name stammt von der griechischen Göttin der Jagd.",
    quiz: [
      { q: "Auf welche Legende geht der Name „Stags Leap“ der Kellerei hinter dem Artemis zurück?", a: "Ein gejagter Hirsch sprang über eine Felsklippe", x: ["Eine Hirschherde zog über einen Fluss", "Ein Häuptling verwandelte sich in einen Hirsch", "In einer Goldmine fand man ein riesiges Geweih"] },
    ],
  },
  us2_slwc_fay: {
    fact: "Cabernet aus dem Weinberg direkt neben S.L.V. Gründer Warren Winiarski kaufte das Nachbarland, nachdem er einen Wein des Weinbergbesitzers probiert hatte.",
    quiz: [
      { q: "Was tat Nathan Fay, nach dem der Fay Vineyard benannt ist, 1961 als Erster im Stags Leap District?", a: "Er pflanzte als Erster Cabernet Sauvignon", x: ["Er hielt die erste Weinauktion ab", "Er grub den ersten Höhlenkeller", "Er erzeugte den ersten Schaumwein"] },
    ],
  },
  us2_stagsleap_winery_ps: {
    fact: "Altes Anwesen im Stags Leap District mit erstem Jahrgang 1893, auf dem das steinerne Herrenhaus „Manor House“ erhalten ist. Seit Langem für Petite Sirah bekannt.",
    quiz: [
      { q: "Wie unterscheiden sich Stags' Leap Winery und Stag's Leap Wine Cellars nach einem Rechtsstreit im Namen?", a: "Durch die Stellung des Apostrophs", x: ["Eines setzte „Napa“ vor den Namen", "Eines nahm einen französischen Namen an", "Eines strich das Wort „Winery“"] },
    ],
  },
  us2_chimney_rock: {
    fact: "Weingut im Stags Leap District, für das die Hälfte eines früheren Golfplatzes umgepflügt und mit Reben bepflanzt wurde. Die Gebäude spiegeln den Geschmack von Gründer Hack Wilson, der lange in Südafrika Geschäfte machte.",
    quiz: [
      { q: "In welchem Baustil ist das weiße Gebäude von Chimney Rock gehalten?", a: "Kapholländischer Stil aus Südafrika", x: ["Spanischer Missionsstil", "Toskanischer Villenstil", "Englischer Tudorstil"] },
    ],
  },
  us2_clos_du_val: {
    fact: "Vom Franzosen Bernard Portet Anfang der 1970er-Jahre gemeinsam mit dem US-Geschäftsmann John Goelet im Stags Leap District gegründet. Der Jahrgang 1972 trat beim „Urteil von Paris“ an.",
    quiz: [
      { q: "Bei welchem Bordeaux-Château war der Vater von Clos-Du-Val-Gründer Bernard Portet technischer Direktor?", a: "Château Lafite Rothschild", x: ["Château Margaux", "Château Latour", "Château Haut-Brion"] },
      { q: "Welchen Platz belegte der Clos Du Val Cabernet 1972 bei der Revanche zum 10. Jahrestag des „Urteils von Paris“ 1986?", a: "Platz 1", x: ["Platz 2", "Platz 5", "Letzter Platz"] },
    ],
  },
  us2_cliff_lede: {
    fact: "Weingut, das der kanadische Bauunternehmer Cliff Lede 2002 mit dem Kauf von Weinbergen im Stags Leap District gründete.",
    quiz: [
      { q: "Wie benannte Cliff Lede die einzelnen Parzellen seiner Weinberge?", a: "Nach Rockklassikern und Rockalben", x: ["Nach griechischen Göttern", "Nach Familienmitgliedern", "Nach Sternbildern"] },
    ],
  },
  us2_silverado: {
    fact: "Weingut an den Hügeln des Stags Leap District am Silverado Trail. Die Weinberge wurden in den 1970er-Jahren gekauft, ab 1981 entstand eigener Wein.",
    quiz: [
      { q: "Welche Familie gründete Silverado Vineyards?", a: "Die Familie von Walt Disney", x: ["Die Familie Coppola", "Die Familie Getty", "Die Familie Kennedy"] },
    ],
  },
  us2_shafer_rsr: {
    fact: "Chardonnay, den Shafer Vineyards aus dem Stags Leap District in einem kühlen Weinberg in Carneros erzeugt. Bekannt für seine Fülle bei zugleich frischem Geschmack.",
    quiz: [
      { q: "Woher stammt der Name Red Shoulder Ranch?", a: "Vom Rotschulterbussard, einem Greifvogel im Weinberg", x: ["Von einem Hügel mit roter Erde", "Vom roten Lieblingspferd des Gründers", "Vom Spitznamen eines früheren Ranchbesitzers"] },
    ],
  },
  us2_farniente_cab: {
    fact: "Das rote Aushängeschild von Far Niente, das die während der Prohibition verlassene steinerne Kellerei in Oakville wiederbelebte. Er entsteht aus Trauben des eigenen Oakville-Guts.",
    quiz: [
      { q: "Welcher bekannte US-Maler war der Neffe des Goldrausch-Pioniers John Benson, der Far Niente 1885 gründete?", a: "Winslow Homer", x: ["Edward Hopper", "Norman Rockwell", "Andrew Wyeth"] },
    ],
  },
  us2_nickel_nickel: {
    fact: "Von der Familie von Gil Nickel 1997 in Oakville gegründetes Weingut. Der Sullenger Vineyard ist die Cabernet-Lage direkt hinter der Kellerei, einem restaurierten Bauernhof aus dem 19. Jahrhundert.",
    quiz: [
      { q: "Welchem Prinzip folgt Nickel & Nickel bei allen Weinen?", a: "Nur eine Rebsorte aus einem einzigen Weinberg", x: ["Trauben aus mehreren Regionen verschneiden", "Überhaupt keine Eichenfässer verwenden", "Nur Schraubverschluss verwenden"] },
      { q: "Welches Schwesterweingut in Oakville gehört derselben Familie wie Nickel & Nickel?", a: "Far Niente", x: ["Silver Oak", "Caymus", "Duckhorn"] },
    ],
  },
  us2_plumpjack: {
    fact: "1995 in Oakville gegründetes Weingut. Dass es die Hälfte seines Reserve Cabernet 1997 mit Schraubverschluss abfüllte, entfachte die Debatte über Verschlüsse für Spitzenweine.",
    quiz: [
      { q: "Wer war Mitgründer von PlumpJack und wurde später Gouverneur von Kalifornien?", a: "Gavin Newsom", x: ["Arnold Schwarzenegger", "Jerry Brown", "Gray Davis"] },
      { q: "PlumpJack ist der Spitzname welcher Shakespeare-Figur?", a: "Falstaff", x: ["Hamlet", "Shylock", "König Lear"] },
    ],
  },
  us2_overture: {
    fact: "Zweitwein von Opus One, erzeugt seit 1993. Lange wurde er aus mehreren Jahrgängen verschnitten und ohne Jahrgangsangabe verkauft.",
    quiz: [
      { q: "Wer gründete gemeinsam das Weingut, dessen Zweitwein Overture ist?", a: "Robert Mondavi und Baron Philippe de Rothschild", x: ["Robert Mondavi und Christian Moueix", "Bill Harlan und Éric de Rothschild", "Jack Cakebread und André Tchelistcheff"] },
    ],
  },
  us2_harlan_maiden: {
    fact: "Zweitwein aus demselben Weinberg an den Berghängen westlich von Oakville. Er wird zuerst an Kunden auf der Mailingliste verkauft.",
    quiz: [
      { q: "Von welchem Wein ist The Maiden der Zweitwein?", a: "Harlan Estate", x: ["Dominus", "Opus One", "Screaming Eagle"] },
    ],
  },
  us2_promontory: {
    fact: "Cabernet der Familie von Bill Harlan aus einem abgelegenen Berggelände westlich von Oakville. Typisch ist das raue, von Wald und Fels umgebene Terrain.",
    quiz: [
      { q: "Welchen Kultwein hatte die Familie hinter Promontory zuvor gegründet?", a: "Harlan Estate", x: ["Screaming Eagle", "Colgin", "Dominus"] },
    ],
  },
  us2_groth_reserve: {
    fact: "Spitzen-Cabernet des Weinguts, das Dennis Groth, damals Manager beim Spielekonzern Atari, und seine Frau 1981 mit dem Kauf eines Weinbergs in Oakville gründeten.",
    quiz: [
      { q: "Welchen Rekord stellte der Groth Reserve Cabernet 1985 auf?", a: "Erster kalifornischer Wein mit 100 Parker-Punkten", x: ["Erster Wein im Weltraum", "Teuerster US-Wein bei einer Auktion", "Erster Spitzenwein mit Schraubverschluss"] },
    ],
  },
  us2_napanook: {
    fact: "Zweitwein, benannt nach einem geschichtsträchtigen Weinberg in Yountville. Erzeugt von der Familie Moueix, die aus dem Pomerol in Bordeaux stammt.",
    quiz: [
      { q: "Von welchem Wein ist Napanook der Zweitwein?", a: "Dominus", x: ["Opus One", "Harlan Estate", "Insignia"] },
    ],
  },
  us2_frogs_leap_sb: {
    fact: "1981 von John Williams und Larry Turley gegründetes Weingut. Es setzt konsequent auf Trockenfeldbau ohne Bewässerung und auf ökologischen Anbau.",
    quiz: [
      { q: "Welches Napa-Weingut nimmt der Name Frog's Leap scherzhaft auf die Schippe?", a: "Stag's Leap Wine Cellars", x: ["Harlan Estate", "Far Niente", "Chateau Montelena"] },
      { q: "Was befand sich ursprünglich dort, wo Frog's Leap seinen ersten Wein erzeugte?", a: "Eine Froschzucht", x: ["Ein Postamt", "Ein Bahnhof", "Ein Kloster"] },
    ],
  },
  us2_mondavi_fume: {
    fact: "1968 brachte Robert Mondavi einen im Eichenfass ausgebauten trockenen Sauvignon Blanc unter dem neuen Namen „Fumé Blanc“ heraus.",
    quiz: [
      { q: "An welchem französischen Wein orientierte sich Robert Mondavi beim Namen „Fumé Blanc“?", a: "Pouilly-Fumé", x: ["Sancerre", "Muscadet", "Chablis"] },
    ],
  },
  us2_mondavi_private: {
    fact: "Kalifornische Alltagsweinmarke unter dem Namen Robert Mondavi. Aus Trauben mehrerer Regionen entstehen preiswerte Weine.",
    quiz: [
      { q: "Wo gründete Robert Mondavi 1966 die erste große Kellerei im Napa Valley seit der Prohibition?", a: "Oakville", x: ["Calistoga", "Yountville", "Carneros"] },
    ],
  },
  us2_trefethen_chard: {
    fact: "Familienweingut, das Gene und Katie Trefethen 1968 in Oak Knoll im Süden des Napa Valley gründeten. Es nutzt ein hölzernes Kellereigebäude aus dem 19. Jahrhundert.",
    quiz: [
      { q: "Welche Auszeichnung erhielt der Trefethen Chardonnay 1976 bei der „Wein-Olympiade“ 1979 in Paris?", a: "Bester Chardonnay der Welt", x: ["Langlebigster Weißwein", "Bestes neues Weingut", "Bester Dessertwein"] },
    ],
  },
  us2_freemark_abbey: {
    fact: "Traditionsweingut in St. Helena, das auf die Kellerei zurückgeht, die die Pionierin Josephine Tychson 1886 gründete. Beim „Urteil von Paris“ war es mit Rot- und Weißwein vertreten.",
    quiz: [
      { q: "Wie kam der Name Freemark Abbey zustande?", a: "Aus Namensteilen der drei Partner, die das Weingut kauften", x: ["Die Kellerei war ein ehemaliges Kloster", "Nach dem Kloster in der Heimat des Gründers", "Nach dem Besitzer des ersten Weinbergs"] },
    ],
  },
  us2_charles_krug: {
    fact: "Das älteste Weingut im Napa Valley, 1861 vom gebürtigen Preußen Charles Krug gegründet. Nach der Prohibition lebte es unter neuen Eigentümern wieder auf.",
    quiz: [
      { q: "Welche Familie kaufte Charles Krug 1943 und führt es bis heute?", a: "Die Familie Mondavi", x: ["Die Familie Gallo", "Die Familie Beringer", "Die Familie Martini"] },
      { q: "Wer verließ Charles Krug nach einem Streit mit seinem Bruder Peter und gründete 1966 ein eigenes Weingut?", a: "Robert Mondavi", x: ["Louis M. Martini", "Joe Heitz", "Warren Winiarski"] },
    ],
  },
  us2_louis_martini: {
    fact: "Der gebürtige Italiener Louis M. Martini gründete das Weingut 1933, im Jahr des Endes der Prohibition, in St. Helena. Bekannt ist es auch für Cabernet aus dem Weinberg Monte Rosso in Sonoma.",
    quiz: [
      { q: "Welches größte Weinunternehmen der USA übernahm Louis M. Martini 2002?", a: "E&J Gallo", x: ["Constellation Brands", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us2_abreu_madrona: {
    fact: "Wein von David Abreu, der die Weinberge zahlreicher Kultweingüter im Napa Valley betreut hat, unter eigenem Namen. Madrona Ranch ist eine Lage in den Hügeln westlich von St. Helena.",
    quiz: [
      { q: "Womit machte sich David Abreu in Napa zuerst einen Namen?", a: "Als Weinbergsmanager und Anbauexperte", x: ["Als Weinkritiker", "Als Fassbinder", "Als Weinauktionator"] },
    ],
  },
  us2_sterling: {
    fact: "1964 vom Briten Peter Newton in Calistoga gegründet. Auf dem Hügel steht ein weißes Gebäude, das an die griechische Insel Mykonos erinnert, auf der er gelebt hatte.",
    quiz: [
      { q: "Womit fahren Besucher von Sterling Vineyards zur Kellerei auf dem Hügel hinauf?", a: "Mit einer Gondelbahn (Seilbahn)", x: ["Mit einer Dampflok", "Mit einem Heißluftballon", "Mit einer Pferdekutsche"] },
    ],
  },
  us2_clos_pegase: {
    fact: "Weingut der Kunstsammler Jan und Mitsuko Shrem in Calistoga. Das Gebäude ging aus einem Architekturwettbewerb hervor, den sie mit dem San Francisco Museum of Modern Art ausrichteten.",
    quiz: [
      { q: "Welcher postmoderne Architekt entwarf das Gebäude von Clos Pegase?", a: "Michael Graves", x: ["Frank Gehry", "Philip Johnson", "Renzo Piano"] },
    ],
  },
  us2_castello_amorosa: {
    fact: "Weingut in einer Burg im toskanischen Stil des 13. Jahrhunderts, die Dario Sattui nach langer Bauzeit bei Calistoga errichtete. Mit Burggraben, Zugbrücke und sogar einer Folterkammer.",
    quiz: [
      { q: "Welches Napa-Weingut betrieb die Familie von Dario Sattui schon vor dem Castello di Amorosa?", a: "V. Sattui", x: ["Beringer", "Charles Krug", "Sterling Vineyards"] },
    ],
  },
  us2_schramsberg_jschram: {
    fact: "Spitzen-Schaumwein von Schramsberg aus den besten Grundweinen, der besonders lange reift. Der Name ehrt Jacob Schram, der hier 1862 ein Weingut gründete.",
    quiz: [
      { q: "Welcher Schriftsteller besuchte Schramsberg 1880 und nannte den Wein dort „Poesie in Flaschen“?", a: "Robert Louis Stevenson", x: ["Mark Twain", "Jack London", "John Steinbeck"] },
    ],
  },
  us2_chappellet: {
    fact: "Donn und Molly Chappellet gründeten 1967 am Hang von Pritchard Hill das erste Weingut auf diesem Hügel. Bekannt für kraftvollen Cabernet aus Berglagen.",
    quiz: [
      { q: "Welche Form hat das Kellereigebäude von Chappellet?", a: "Eine Pyramide", x: ["Eine runde Kuppel", "Ein riesiges Eichenfass", "Eine mittelalterliche Festung"] },
    ],
  },
  us2_darioush: {
    fact: "Weingut des aus dem Iran stammenden Unternehmers Darioush Khaledi im Napa Valley. Ins Auge fällt das Gebäude mit Steinsäulen nach dem Vorbild eines altpersischen Palasts.",
    quiz: [
      { q: "Welche antike Stätte diente dem Gebäude von Darioush als Vorbild?", a: "Persepolis", x: ["Der Parthenon", "Angkor Wat", "Die Alhambra"] },
    ],
  },
  us2_cain_five: {
    fact: "Aushängeschild von Cain Vineyard: eine Cuvée aus Bordeaux-Rebsorten, die auf Terrassen hoch an den Hängen des Spring Mountain wachsen.",
    quiz: [
      { q: "Wofür steht „Five“ im Namen Cain Five?", a: "Für fünf verschnittene Bordeaux-Rebsorten", x: ["Für fünf Weinberge", "Für die fünf Kinder des Gründers", "Für die Freigabe nach 5 Jahren Reife"] },
    ],
  },
  us2_spring_mountain: {
    fact: "Weingut am Spring Mountain mit dem historischen Herrenhaus „Miravalle“. Sein Chardonnay 1973 belegte beim „Urteil von Paris“ Platz 4 bei den Weißweinen.",
    quiz: [
      { q: "In welcher US-Fernsehserie der 1980er-Jahre diente das Herrenhaus Miravalle von Spring Mountain Vineyard als Kulisse?", a: "Falcon Crest", x: ["Dallas", "Der Denver-Clan", "Twin Peaks"] },
    ],
  },
  us2_newton_unfiltered: {
    fact: "Von Peter und Su Hua Newton 1977 am Spring Mountain gegründetes Weingut. Berühmt wurde es mit einem Chardonnay, der, wie der Name sagt, ohne Filtration abgefüllt wird.",
    quiz: [
      { q: "Welches Weingut hatte Peter Newton, der Gründer von Newton Vineyard, zuvor in Calistoga gegründet?", a: "Sterling Vineyards", x: ["Chateau Montelena", "Schramsberg", "Clos Pegase"] },
      { q: "Was richtete 2020 schwere Schäden an der Kellerei von Newton Vineyard an?", a: "Ein Waldbrand (Glass Fire)", x: ["Ein Erdbeben", "Ein Hochwasser", "Die Reblaus"] },
    ],
  },
  us2_pride_merlot: {
    fact: "Weingut der Familie Pride auf alten Weinbergen hoch oben in den Mayacamas Mountains. Auf jedem Etikett steht, wie viel Prozent der Trauben aus welchem der beiden Countys stammen.",
    quiz: [
      { q: "Was verläuft mitten durch Weinberge und Kellerei von Pride Mountain Vineyards?", a: "Die Grenze zwischen Napa und Sonoma County", x: ["Eine alte Bahnstrecke", "Die San-Andreas-Verwerfung", "Der Pacific Coast Highway"] },
    ],
  },
  us2_mayacamas: {
    fact: "Steinerne Kellerei, Ende des 19. Jahrhunderts hoch am Mount Veeder erbaut. Ihr Cabernet im alten Stil braucht lange Reife, der Jahrgang 1971 trat beim „Urteil von Paris“ an.",
    quiz: [
      { q: "Welches Ehepaar führte Mayacamas ab 1968 fast 45 Jahre lang?", a: "Bob und Elinor Travers", x: ["Jack und Dolores Cakebread", "Dan und Margaret Duckhorn", "Gene und Katie Trefethen"] },
    ],
  },
  us2_lokoya: {
    fact: "1995 gegründete Marke für Berg-Cabernets, die getrennt aus vier Napa-Gebieten erzeugt werden: Mount Veeder, Howell Mountain, Spring Mountain und Diamond Mountain.",
    quiz: [
      { q: "Woher stammt der Name Lokoya?", a: "Von einem Stamm der Ureinwohner am Mount Veeder", x: ["Von einem spanischen Missionar", "Von einer Art Vulkangestein", "Von der Tochter des Gründers"] },
    ],
  },
  us2_cardinale: {
    fact: "Spitzen-Cabernet-Cuvée aus ausgewählten Trauben von Berg- und Tallagen im ganzen Napa Valley, erzeugt in der Kellerei in Oakville.",
    quiz: [
      { q: "Wer gründete Jackson Family Wines, zu dem Cardinale gehört?", a: "Jess Jackson", x: ["Robert Mondavi", "Ernest Gallo", "Chuck Wagner"] },
    ],
  },
  us2_dunn_howell: {
    fact: "Kleines Weingut, das Randy Dunn Ende der 1970er-Jahre am Howell Mountain gründete. Bekannt für kraftvollen Berg-Cabernet, der Jahrzehnte reifen kann.",
    quiz: [
      { q: "Bei welchem Napa-Weingut war Randy Dunn vor der Gründung seines eigenen Weinguts Kellermeister?", a: "Caymus", x: ["Silver Oak", "Beringer", "Robert Mondavi"] },
    ],
  },
  us2_cade: {
    fact: "2005 auf einem Bergrücken am Howell Mountain gegründetes Weingut. Auf vulkanischen Böden in über 400 m Höhe entsteht kraftvoller Cabernet.",
    quiz: [
      { q: "Welches Weingut hatte die Gruppe hinter CADE zuvor in Oakville gegründet?", a: "PlumpJack", x: ["Far Niente", "Screaming Eagle", "Harlan Estate"] },
    ],
  },
  us2_conundrum: {
    fact: "Weiße Cuvée, die Chuck Wagner von Caymus 1989 erstmals herausbrachte. Sie vereint mehrere Rebsorten wie Chardonnay, Sauvignon Blanc und Muscat.",
    quiz: [
      { q: "Was bedeutet das englische Wort Conundrum?", a: "Rätsel", x: ["Harmonie", "Goldglanz", "Abenteuer"] },
      { q: "Welches Napa-Weingut führt die Familie, die Conundrum erstmals herausbrachte?", a: "Caymus", x: ["Silver Oak", "Duckhorn", "Beringer"] },
    ],
  },
  us2_decoy_cab: {
    fact: "Marke, die Duckhorn Vineyards 1985 für unkomplizierteren Genuss einführte. Heute entsteht darunter ein weicher Cabernet aus Trauben des Sonoma County.",
    quiz: [
      { q: "Was bedeutet der Name Decoy?", a: "Eine hölzerne Lockente, mit der Jäger Enten anlocken", x: ["Ein Teich, an dem Enten rasten", "Ein Horn, das die Morgenjagd ankündigt", "Eine Jagdhütte"] },
    ],
  },
  us2_mer_soleil: {
    fact: "Chardonnay, den Charlie Wagner aus der Caymus-Familie Wagner in den Santa Lucia Highlands bei Monterey erzeugt. Das Gebiet ist kühl und vom Meereswind geprägt.",
    quiz: [
      { q: "Was bedeutet Mer Soleil auf Französisch?", a: "Meer und Sonne", x: ["Berg und Mond", "Wind und Regen", "Goldener Hügel"] },
    ],
  },
  us2_belle_glos: {
    fact: "Pinot Noir von Joe Wagner aus der Caymus-Familie Wagner. Markenzeichen ist das dicke rote Wachs um den Flaschenhals.",
    quiz: [
      { q: "Nach wem ist Belle Glos benannt?", a: "Nach Lorna Belle Glos Wagner, der Großmutter des Gründers", x: ["Nach der Tochter des Gründers", "Nach dem Besitzer des ersten Weinbergs", "Nach einem Heimatdorf in Frankreich"] },
      { q: "Woran erinnert das rote Wachs am Flaschenhals von Belle Glos?", a: "An den roten Lippenstift, den die Großmutter täglich trug", x: ["An die Farbe des Familienwappens", "An die Farbe der Pinot-Noir-Schalen", "An den Kalifornischen Mohn"] },
    ],
  },
  us2_orin_8years: {
    fact: "Zinfandel-betonte Cuvée von Dave Phinney von Orin Swift. Bekannt für ihr ausdrucksstarkes Fotoetikett.",
    quiz: [
      { q: "Worauf spielt der Name 8 Years in the Desert (8 Jahre in der Wüste) an?", a: "Auf die vereinbarte 8-jährige Zinfandel-Pause nach dem Verkauf von The Prisoner", x: ["Auf 8 Jahre Reife in einer Wüstenhöhle", "Auf eine Cuvée aus 8 Wüstenweinbergen", "Auf eine 8-jährige Wüstenreise des Gründers"] },
    ],
  },
  us2_mumm_napa: {
    fact: "Schaumweinkellerei, die ein französisches Champagnerhaus im Napa Valley gründete. Wie Champagner entsteht der Wein durch Flaschengärung.",
    quiz: [
      { q: "Welches französische Champagnerhaus gründete Mumm Napa?", a: "G.H. Mumm", x: ["Moët & Chandon", "Taittinger", "Louis Roederer"] },
    ],
  },
  us2_domaine_carneros: {
    fact: "Schaumweinkellerei, die ein französisches Champagnerhaus 1987 auf einem Hügel in Carneros gründete. Berühmt für das elegante Château auf der Anhöhe.",
    quiz: [
      { q: "Welches Champagnerhaus gründete Domaine Carneros?", a: "Taittinger", x: ["Moët & Chandon", "G.H. Mumm", "Louis Roederer"] },
      { q: "Welches Château in der Champagne diente dem Gebäude von Domaine Carneros als Vorbild?", a: "Château de la Marquetterie", x: ["Château de Chambord", "Château de Chenonceau", "Château de Versailles"] },
    ],
  },
  us2_goldeneye: {
    fact: "Pinot-Noir-Weingut, das das Ehepaar Duckhorn 1996 im Anderson Valley im Mendocino County gründete. Die Trauben wachsen in einem kühlen Tal, in das Meeresnebel zieht.",
    quiz: [
      { q: "Woher stammt der Name Goldeneye?", a: "Von einer Entenart (der Schellente)", x: ["Vom James-Bond-Film", "Von goldgelb gereiften Beeren", "Vom Spitznamen des Gründerpaars"] },
    ],
  },
  us2_verite_lamuse: {
    fact: "Wein im Bordeaux-Stil aus Trauben aus Sonoma. Es gibt drei Cuvées: den Merlot-betonten „La Muse“, den Cabernet-betonten „La Joie“ und den Cabernet-Franc-betonten „Le Désir“.",
    quiz: [
      { q: "Welcher Önologe aus Bordeaux erzeugt Vérité?", a: "Pierre Seillan", x: ["Michel Rolland", "Christian Moueix", "Bernard Portet"] },
    ],
  },
  us2_kenwood_jacklondon: {
    fact: "Aus Trauben von Lavaterrassen auf der einstigen Ranch des Schriftstellers Jack London. Das Etikett zeigt den Wolfskopf, den er als Exlibris verwendete.",
    quiz: [
      { q: "Welches ist das bekannteste Werk des Schriftstellers, nach dem der Kenwood Jack London Vineyard benannt ist?", a: "Der Ruf der Wildnis", x: ["Früchte des Zorns", "Moby Dick", "Die Abenteuer des Huckleberry Finn"] },
    ],
  },
  us2_paul_hobbs_rrv: {
    fact: "Paul Hobbs, der bei Robert Mondavi und Opus One Erfahrung sammelte, gründete das Weingut 1991 in Sonoma. Er ist auch als Berater für Weingüter in vielen Ländern bekannt.",
    quiz: [
      { q: "Welches Weingut gründete Paul Hobbs mit Partnern in Mendoza, Argentinien?", a: "Viña Cobos", x: ["Catena Zapata", "Clos de los Siete", "Bodega Norton"] },
    ],
  },
  us2_peter_michael_bellecote: {
    fact: "Weingut, das der britische Elektronik- und Medienunternehmer Sir Peter Michael an den Hängen des Knights Valley gründete. Jeder Wein trägt einen französischen Namen.",
    quiz: [
      { q: "Was bedeutet Belle Côte auf Französisch?", a: "Schöner Hang", x: ["Schöne Frau", "Blaue Küste", "Kleines Schloss"] },
    ],
  },
  us2_marcassin: {
    fact: "Kleines Weingut, das die Önologin und Beraterin Helen Turley mit ihrem Mann John Wetlaufer an der Küste von Sonoma gründete. Der Kult-Chardonnay wird nur über die Mailingliste verkauft.",
    quiz: [
      { q: "Was bedeutet Marcassin auf Französisch?", a: "Frischling (junges Wildschwein)", x: ["Rehkitz", "Feldhase", "Fuchswelpe"] },
    ],
  },
  us2_ridge_lytton: {
    fact: "Zinfandel-Cuvée von Ridge aus über 100 Jahre alten Rebanlagen im Dry Creek Valley. Zusammen mit Geyserville eine der beiden Säulen der Ridge-Zinfandels.",
    quiz: [
      { q: "Was ist das Besondere an den Etiketten von Ridge Vineyards?", a: "Alle bei der Herstellung verwendeten Zutaten stehen darauf", x: ["Die GPS-Koordinaten des Weinbergs stehen darauf", "Der Kellermeister signiert jede Flasche", "Das Wetter am Lesetag steht darauf"] },
    ],
  },
  us2_rochioli: {
    fact: "Pinot Noir der Familie Rochioli, die seit Generationen im Russian River Valley Landwirtschaft betreibt. Ihre Weinberge gelten als Juwelen des Pinot Noir in dieser Gegend.",
    quiz: [
      { q: "Welches Kultweingut im Russian River Valley begründete seinen frühen Ruhm mit Trauben der Familie Rochioli?", a: "Williams Selyem", x: ["Kosta Browne", "Kistler", "La Crema"] },
    ],
  },
  us2_littorai: {
    fact: "Pinot-Noir-Weingut an der Küste, 1993 von Ted Lemon und seiner Frau gegründet. Der Name kommt aus dem Lateinischen und bedeutet „die Küsten“.",
    quiz: [
      { q: "Bei welcher Domaine in Meursault war Littorai-Gründer Ted Lemon als erster Amerikaner Kellermeister?", a: "Domaine Guy Roulot", x: ["Domaine Leflaive", "Domaine des Comtes Lafon", "Domaine de la Romanée-Conti"] },
    ],
  },
  us2_flowers: {
    fact: "Pinot-Noir- und Chardonnay-Weingut, das Walt und Joan Flowers auf einem Bergrücken an der Sonoma Coast mit Blick auf den Pazifik gründeten.",
    quiz: [
      { q: "Welche Familie wurde 2009 Partner von Flowers und übernahm die Führung?", a: "Die Familie Huneeus (Quintessa)", x: ["Die Familie Jackson", "Die Familie Gallo", "Die Familie Mondavi"] },
    ],
  },
  us2_merry_edwards: {
    fact: "Pinot-Noir-Weingut im Russian River Valley, 1997 gegründet von Merry Edwards, einer Pionierin aus der ersten Generation kalifornischer Önologinnen.",
    quiz: [
      { q: "Welches Champagnerhaus übernahm 2019 das Weingut Merry Edwards?", a: "Louis Roederer", x: ["Moët & Chandon", "Taittinger", "Bollinger"] },
    ],
  },
  us2_sonoma_cutrer: {
    fact: "Beliebter Chardonnay von der Sonoma Coast, erstmals 1981 herausgebracht. Ein Dauergast auf den Weinkarten amerikanischer Restaurants.",
    quiz: [
      { q: "Für welche Sportart baute Sonoma-Cutrer Turnieranlagen und richtete sogar Weltmeisterschaften aus?", a: "Krocket", x: ["Polo", "Golf", "Tennis"] },
    ],
  },
  us2_hanzell: {
    fact: "1953 von James D. Zellerbach, dem früheren US-Botschafter in Italien, in Sonoma gegründet. Als erstes Weingut Kaliforniens setzte es konsequent auf den Ausbau in französischen Eichenfässern.",
    quiz: [
      { q: "Wie entstand der Name Hanzell?", a: "Aus dem Vornamen seiner Frau Hana und dem Nachnamen Zellerbach", x: ["Nach einem alten ungarischen Ortsnamen", "Altenglisch für „kleiner Hügel“", "Nach dem ersten Kellermeister"] },
    ],
  },
  us2_buena_vista: {
    fact: "1857 in Sonoma gegründet und damit das erste kommerzielle Weingut Kaliforniens. 2011 kaufte der Burgunder Jean-Charles Boisset es und belebte es neu.",
    quiz: [
      { q: "Welcher gebürtige Ungar gründete Buena Vista und gilt als „Vater des kalifornischen Weinbaus“?", a: "Agoston Haraszthy", x: ["Charles Krug", "Gustave Niebaum", "Georges de Latour"] },
    ],
  },
  us2_csj_cinq: {
    fact: "Bordeaux-Cuvée aus Sonoma, deren Jahrgang 1996 vom Wine Spectator 1999 zum „Wein des Jahres“ gekürt wurde. Das war zuvor noch keinem Sonoma-Wein gelungen.",
    quiz: [
      { q: "Was bedeutet Cinq Cépages auf Französisch?", a: "Fünf Rebsorten", x: ["Fünf Weinberge", "Fünfte Lese", "Fünf Brüder"] },
    ],
  },
  us2_rodney_strong: {
    fact: "Weingut von Rodney Strong, der 1959 ins Weingeschäft einstieg und als Pionier maßgeblich dazu beitrug, das Sonoma County zur renommierten Weinregion zu machen.",
    quiz: [
      { q: "Welchen Beruf hatte Rodney Strong, bevor er Wein machte?", a: "Broadway-Tänzer", x: ["Boxer", "Jazzpianist", "Radiosprecher"] },
    ],
  },
  us2_ferrari_carano_fume: {
    fact: "Von Don und Rhonda Carano 1981 im Dry Creek Valley gegründetes Weingut. Berühmt sind das italienisch anmutende Herrenhaus „Villa Fiore“ und sein Garten.",
    quiz: [
      { q: "Welches Unternehmen führte Ferrari-Carano-Gründer Don Carano in Reno, Nevada?", a: "Das Eldorado Hotel Casino", x: ["Ein Skigebiet", "Eine Eisenbahngesellschaft", "Eine Silbermine"] },
    ],
  },
  us2_dry_creek_fume: {
    fact: "David Stare gründete es 1972 als erstes Weingut im Dry Creek Valley seit der Prohibition. Als erstes in Sonoma verwendete es den Namen „Fumé Blanc“.",
    quiz: [
      { q: "Was ist auf dem Etikett von Dry Creek Vineyard abgebildet?", a: "Ein Segelboot", x: ["Ein Leuchtturm", "Ein Falke", "Eine Weinranke"] },
    ],
  },
  us2_seghesio_zin: {
    fact: "Zinfandel-Traditionshaus in Sonoma, dessen Geschichte 1895 begann, als der Italiener Edoardo Seghesio seinen ersten Zinfandel-Weinberg pflanzte. Es überstand auch die Prohibition.",
    quiz: [
      { q: "Welches Unternehmen übernahm 2011 Seghesio Family Vineyards?", a: "Crimson Wine Group", x: ["E&J Gallo", "Jackson Family Wines", "Treasury Wine Estates"] },
    ],
  },
  us2_coppola_claret: {
    fact: "Inspiriert von einem Claret des Jahrgangs 1906, den Regisseur Coppola im Keller eines alten Napa-Weinguts fand, das er gekauft hatte. Die Flasche ist mit einem goldenen Netz umhüllt.",
    quiz: [
      { q: "Die Rotweine welcher Region nannten die Engländer ursprünglich Claret?", a: "Bordeaux", x: ["Burgund", "Rioja", "Toskana"] },
    ],
  },
  us2_sofia_bdb: {
    fact: "Entstanden aus Coppolas Versprechen an seine Tochter Sofia, eines Tages einen Schaumwein zu machen und ihn nach ihr zu benennen. Ein leichter, duftiger Schaumwein.",
    quiz: [
      { q: "Bei welchem Film führte Sofia Coppola, Namensgeberin des Sofia Blanc de Blancs, Regie?", a: "Lost in Translation – Zwischen den Welten", x: ["Der Pate", "Apocalypse Now", "Bram Stoker’s Dracula"] },
    ],
  },
  us2_iron_horse: {
    fact: "Familiengeführte Schaumweinkellerei in Green Valley im Russian River Valley. Seit dem Gipfeltreffen von Reagan und Gorbatschow 1985 wird ihr Schaumwein regelmäßig bei Anlässen im Weißen Haus ausgeschenkt.",
    quiz: [
      { q: "Woher stammt der Name Iron Horse (Eisernes Pferd)?", a: "Von einem Bahnhof der Eisenbahn, die im 19. Jahrhundert über das Land fuhr", x: ["Vom Rennpferd des Gründers", "Von einem Hufeisen aus der Schmiede", "Von einer nahen Mine"] },
    ],
  },
  us2_j_cuvee20: {
    fact: "Schaumweinkellerei, die die Tochter des Gründers von Jordan Winery 1986 im Russian River Valley gründete. 2015 übernahm E&J Gallo sie.",
    quiz: [
      { q: "Wofür steht das „J“ in J Vineyards?", a: "Für Judy Jordan, die Gründerin", x: ["Für „Jubilee“ (Jubiläum)", "Für die J-Form des Weinbergs", "Für John, einen Sohn der Familie"] },
    ],
  },
  us2_gloria_ferrer: {
    fact: "Erste Schaumweinkellerei in Carneros, 1986 von der spanischen Cava-Familie Ferrer eröffnet.",
    quiz: [
      { q: "Wer ist die Gloria in Gloria Ferrer?", a: "Die Frau von José Ferrer aus der Familie Ferrer", x: ["Die Tochter des Gründers", "Eine spanische Heilige", "Eine Opernsängerin"] },
      { q: "Welche spanische Cava-Kellerei gehört der Familie Ferrer, die Gloria Ferrer gründete?", a: "Freixenet", x: ["Codorníu", "Juvé y Camps", "Recaredo"] },
    ],
  },
  us2_korbel_natural: {
    fact: "Schaumweinkellerei, die die drei Brüder Korbel 1882 im Russian River Valley gründeten. Ihr Schaumwein diente mehrfach zum Anstoßen bei Amtseinführungen von US-Präsidenten.",
    quiz: [
      { q: "Aus welcher Heimat kamen die Brüder Korbel?", a: "Aus Böhmen (heute Tschechien)", x: ["Aus der Toskana in Italien", "Aus dem Elsass in Frankreich", "Aus Katalonien in Spanien"] },
    ],
  },
  us2_turley_oldvines: {
    fact: "Zinfandel-Spezialist, 1993 von Larry Turley gegründet. Das Weingut spürt über 100 Jahre alte kalifornische Rebanlagen auf und bewahrt sie.",
    quiz: [
      { q: "Welches Napa-Weingut hatte Larry Turley vor Turley Wine Cellars mitgegründet?", a: "Frog's Leap", x: ["Ridge Vineyards", "Ravenswood", "Seghesio"] },
      { q: "Welche bekannte Önologin und Beraterin ist die Schwester von Larry Turley?", a: "Helen Turley", x: ["Heidi Barrett", "Merry Edwards", "Cathy Corison"] },
    ],
  },
  us2_ravenswood: {
    fact: "Von Joel Peterson 1976 gegründeter Zinfandel-Spezialist. Bekannt für das Logo aus drei Raben, die einen Kreis bilden.",
    quiz: [
      { q: "Wie lautet das berühmte Motto von Ravenswood?", a: "No Wimpy Wines (Keine Weichei-Weine)", x: ["In Vino Veritas", "Bottled Poetry", "Time's Fun When You're Having Flies"] },
    ],
  },
  us2_menage_a_trois: {
    fact: "Rote Cuvée, die das Napa-Weingut Folie à Deux 1996 erstmals erzeugte. Mit ihrem süßlich-weichen Geschmack prägte sie den Trend zu roten Cuvées in den USA.",
    quiz: [
      { q: "Worauf bezieht sich der Name Ménage à Trois („zu dritt“)?", a: "Auf die drei verschnittenen Rebsorten", x: ["Auf die drei Gründer", "Auf drei Weinberge", "Auf drei Gärungen"] },
      { q: "Welche Hauptmarke gehört der Familie Trinchero, die Ménage à Trois 2004 übernahm?", a: "Sutter Home", x: ["Barefoot", "Woodbridge", "Kendall-Jackson"] },
    ],
  },
  us2_tablas_esprit: {
    fact: "1989 von der französischen Familie Perrin und dem Importeur Robert Haas in Paso Robles gegründet. Gepflanzt wurden aus Frankreich eingeführte Reben der Rhône-Sorten.",
    quiz: [
      { q: "Welches Weingut in Châteauneuf-du-Pape gehört der Familie Perrin, die Tablas Creek mitgründete?", a: "Château de Beaucastel", x: ["Château Rayas", "Domaine du Vieux Télégraphe", "Château La Nerthe"] },
    ],
  },
  us2_saxum_jb: {
    fact: "Cuvée im Rhône-Stil, die Justin Smith aus dem James Berry Vineyard westlich von Paso Robles erzeugt. Der Jahrgang 2007 wurde 2010 vom Wine Spectator zum „Wein des Jahres“ gekürt.",
    quiz: [
      { q: "Was bedeutet Saxum auf Lateinisch?", a: "Fels", x: ["Sonne", "Traube", "Wind"] },
    ],
  },
  us2_laventure: {
    fact: "Weingut, das der zuvor in Bordeaux tätige Winzer Stephan Asseo 1998 in Paso Robles gründete. Der Name ist Französisch für „Abenteuer“.",
    quiz: [
      { q: "Warum verließ Stephan Asseo Bordeaux und ging nach Paso Robles?", a: "Er wollte Syrah und Cabernet ohne Vorschriften verschneiden", x: ["Seine Weinberge in Bordeaux wurden überflutet", "Er wollte Schaumwein erzeugen", "Er sollte den Familienbetrieb übernehmen"] },
    ],
  },
  us2_justin_isosceles: {
    fact: "Bordeaux-Cuvée und Aushängeschild von Justin, das Justin Baldwin 1981 in Paso Robles gründete. 2010 übernahm The Wonderful Company (Fiji Water, POM Wonderful) das Weingut.",
    quiz: [
      { q: "Worauf bezieht sich der Name Isosceles (gleichschenkliges Dreieck)?", a: "Auf die Cuvée aus drei Bordeaux-Rebsorten", x: ["Auf drei Weinberge auf Hügeln", "Auf drei Gründerbrüder", "Auf 3 Jahre Reife"] },
    ],
  },
  us2_daou_sol: {
    fact: "Aushängeschild-Cabernet des Weinguts, das die aus dem Libanon stammenden Brüder Georges und Daniel Daou auf einem Berggipfel in Paso Robles gründeten. Der Name ehrt ihren Vater.",
    quiz: [
      { q: "Welches australische Weinunternehmen übernahm 2023 DAOU Vineyards?", a: "Treasury Wine Estates", x: ["Constellation Brands", "E&J Gallo", "LVMH"] },
    ],
  },
  us2_qupe_syrah: {
    fact: "Von Bob Lindquist 1982 gegründeter Pionier der Rhône-Sorten an der Central Coast. Die Kellerei teilte er sich mit Au Bon Climat.",
    quiz: [
      { q: "Was bedeutet Qupé in der Sprache der Chumash?", a: "Kalifornischer Mohn", x: ["Seehund", "Eiche", "Adler"] },
    ],
  },
  us2_bonny_doon_cigare: {
    fact: "Cuvée im Stil eines Châteauneuf-du-Pape von Randall Grahm, genannt „Rhône Ranger“. Das Etikett zeigt ein zigarrenförmiges Flugobjekt über dem Weinberg.",
    quiz: [
      { q: "Was verbietet der Gemeindeerlass von Châteauneuf-du-Pape von 1954, den Le Cigare Volant parodiert?", a: "Die Landung fliegender Untertassen (UFOs) in den Weinbergen", x: ["Die Lese bei Nacht", "Die maschinelle Lese", "Korken aus Kunststoff"] },
    ],
  },
  us2_foxen_pinot: {
    fact: "Von Dick Doré und Bill Wathen 1985 auf dem Land der Familie Doré im Santa Maria Valley gegründet. Markenzeichen ist ein schief gezeichneter Anker.",
    quiz: [
      { q: "Auf wen geht der Anker auf dem Etikett von Foxen zurück?", a: "Auf Vorfahr William Benjamin Foxen, einen englischen Ex-Kapitän mit Anker als Brandzeichen fürs Vieh", x: ["Auf den spanischen Missionar Junípero Serra", "Auf Admiral Chester Nimitz", "Auf den Vater des ersten Kellermeisters"] },
    ],
  },
  us2_hitching_post: {
    fact: "Pinot Noir aus Santa Barbara, den Frank Ostini, Besitzer des Steakhauses „Hitching Post“ in Buellton, gemeinsam mit seinem Freund Gray Hartley erzeugt.",
    quiz: [
      { q: "In welchem Film von 2004 wurden Restaurant und Wein Hitching Post berühmt?", a: "Sideways", x: ["Bottle Shock", "Ein gutes Jahr", "Mondovino"] },
    ],
  },
  us2_sanford_pinot: {
    fact: "Weingut in den Sta. Rita Hills, das Miles und Jack im Film „Sideways“ als Erstes zur Weinprobe besuchen.",
    quiz: [
      { q: "Was taten Richard Sanford und Michael Benedict 1971 in den Sta. Rita Hills?", a: "Sie pflanzten den ersten Pinot Noir der Gegend", x: ["Sie eröffneten die erste Schaumweinkellerei", "Sie hielten die erste Weinauktion ab", "Sie erhielten die erste Bio-Zertifizierung"] },
    ],
  },
  us2_fess_parker: {
    fact: "Familienweingut, das der Schauspieler Fess Parker im Santa Ynez Valley gründete. Bekannt für Pinot Noir und Rhône-Sorten aus Santa Barbara.",
    quiz: [
      { q: "Welchen amerikanischen Pionierhelden spielte Fess Parker in den 1950er-Jahren in einer Disney-Serie?", a: "Davy Crockett", x: ["Buffalo Bill", "Wyatt Earp", "Lone Ranger"] },
    ],
  },
  us2_chalone_chard: {
    fact: "Weingut auf einem Kalksteinplateau nahe den Pinnacles. Wie in Burgund wachsen Chardonnay und Pinot Noir hier auf kalkhaltigem Boden.",
    quiz: [
      { q: "Welchen Platz belegte der Chalone Chardonnay 1974 beim „Urteil von Paris“ 1976 bei den Weißweinen?", a: "Platz 3", x: ["Platz 1", "Platz 6", "Platz 10"] },
    ],
  },
  us2_wente_morningfog: {
    fact: "Chardonnay des ältesten ununterbrochen familiengeführten Weinguts der USA, 1883 vom Deutschen Carl Wente im Livermore Valley gegründet.",
    quiz: [
      { q: "Wie heißt der Chardonnay-Klon, auf den die meisten Chardonnay-Weinberge Kaliforniens zurückgehen?", a: "Wente-Klon", x: ["Mondavi-Klon", "Chablis-Klon", "Napa-Klon"] },
    ],
  },
  us2_concannon_ps: {
    fact: "1883 vom Iren James Concannon im Livermore Valley gegründet. Während der Prohibition hielt sich das Weingut mit Messwein über Wasser.",
    quiz: [
      { q: "Was tat Concannon in den 1960er-Jahren als Erster in den USA?", a: "Petite Sirah als Rebsortenwein abfüllen", x: ["Schraubverschluss für Spitzenwein verwenden", "Rosé-Schaumwein erzeugen", "Wein in Dosen verkaufen"] },
    ],
  },
  us2_7deadlyzins: {
    fact: "Beliebter Wein aus alten Zinfandel-Reben von den Brüdern Michael und David aus der Familie Phillips, die seit Generationen in Lodi Landwirtschaft betreibt.",
    quiz: [
      { q: "Worauf spielt der Name 7 Deadly Zins an?", a: "Auf die sieben Todsünden (Seven Deadly Sins)", x: ["Auf die sieben Weltwunder", "Auf sieben Weinberge", "Auf 7 Jahre Reife"] },
    ],
  },
  us2_adelsheim: {
    fact: "Frühes Oregon-Weingut, dessen Geschichte 1971 begann, als David Adelsheim und seine Frau Land an den Hügeln im Norden des Willamette Valley kauften.",
    quiz: [
      { q: "Wer malte die Frauenporträts, die lange die Etiketten von Adelsheim zierten?", a: "Mitgründerin Ginny Adelsheim", x: ["Andy Warhol", "Norman Rockwell", "Georgia O’Keeffe"] },
    ],
  },
  us2_argyle_brut: {
    fact: "Pionier des Schaumweins in Oregon, 1987 von einem australischen Winzer und dem US-Önologen Rollin Soles in Dundee gegründet.",
    quiz: [
      { q: "Welcher australische Winzer gründete Argyle gemeinsam mit Rollin Soles?", a: "Brian Croser", x: ["Peter Lehmann", "Wolf Blass", "John Duval"] },
    ],
  },
  us2_sokol_blosser: {
    fact: "Oregon-Pionierweingut, das 1971 in den Dundee Hills Reben pflanzte. Früh setzte es auf umweltfreundlichen Anbau und nachhaltige Architektur.",
    quiz: [
      { q: "Wie entstand der Name Sokol Blosser?", a: "Aus den Nachnamen des Gründerpaars Susan Sokol und Bill Blosser", x: ["Aus den Namen zweier Dörfer", "Polnisch für „Sonnenhügel“", "Nach dem Besitzer des ersten Weinbergs"] },
    ],
  },
  us2_wvv_estate: {
    fact: "1983 von Jim Bernau gegründetes Weingut im Willamette Valley. Es trug maßgeblich dazu bei, Pinot Noir aus Oregon einem breiten Publikum bekannt zu machen.",
    quiz: [
      { q: "Was ist an der Eigentümerstruktur von Willamette Valley Vineyards besonders?", a: "An der Nasdaq notiert, mit sehr vielen Kleinaktionären", x: ["Im Besitz einer Klostergemeinschaft", "Im Besitz einer staatlichen Universität", "Im Besitz eines Stammes der Ureinwohner"] },
    ],
  },
  us2_ponzi_tavola: {
    fact: "Pionierweingut im Willamette Valley, 1970 von Dick und Nancy Ponzi gegründet. Tochter Luisa war lange Jahre Kellermeisterin.",
    quiz: [
      { q: "Welches Champagnerhaus übernahm 2021 Ponzi Vineyards?", a: "Bollinger", x: ["Moët & Chandon", "Louis Roederer", "Taittinger"] },
    ],
  },
  us2_resonance: {
    fact: "Das erste Weingut, das ein burgundisches Traditionshaus außerhalb Frankreichs gründete. Den Anfang machte 2013 der Kauf des Résonance Vineyard in Yamhill-Carlton.",
    quiz: [
      { q: "Welches burgundische Handelshaus gründete Résonance?", a: "Louis Jadot", x: ["Joseph Drouhin", "Bouchard Père & Fils", "Albert Bichot"] },
    ],
  },
  us2_nicolas_jay: {
    fact: "2014 in Oregon gegründet vom burgundischen Winzer Jean-Nicolas Méo aus Vosne-Romanée und dem Musikmanager Jay Boberg.",
    quiz: [
      { q: "Welche burgundische Domaine führt Jean-Nicolas Méo, Mitgründer von Nicolas-Jay?", a: "Domaine Méo-Camuzet", x: ["Domaine Leroy", "Domaine Dujac", "Domaine Georges Roumier"] },
    ],
  },
  us2_columbia_crest_ge: {
    fact: "Großes Weingut in Washington, das zur selben Gruppe wie Chateau Ste. Michelle gehört. Es liegt in den Horse Heaven Hills mit Blick auf den Columbia River.",
    quiz: [
      { q: "Welcher Wein von Columbia Crest wurde 2009 vom Wine Spectator zum „Wein des Jahres“ gekürt?", a: "Reserve Cabernet Sauvignon 2005", x: ["Grand Estates Merlot", "H3 Cabernet Sauvignon", "Two Vines Red Blend"] },
    ],
  },
  us2_14hands_cab: {
    fact: "Marke aus Washington, 2005 von der Gruppe Chateau Ste. Michelle eingeführt. Ursprünglich für die Gastronomie gedacht, wurde sie dank ihrer Beliebtheit zur großen Marke.",
    quiz: [
      { q: "Worauf bezieht sich der Name 14 Hands?", a: "Auf das Stockmaß (in Handbreiten) der kleinen Wildpferde der Horse Heaven Hills", x: ["Auf 14 Gründer", "Auf 14 Weinberge", "Auf 14 Erntehelfer"] },
    ],
  },
  us2_kung_fu_girl: {
    fact: "Riesling von Charles Smith, dem Enfant terrible der Weinszene in Washington. 2016 wurden seine Marken an Constellation Brands verkauft.",
    quiz: [
      { q: "Was machte Charles Smith in Europa, bevor er Wein erzeugte?", a: "Er managte Rockbands", x: ["Er war Profi-Skateboarder", "Er war Stuntman beim Film", "Er war Küchenchef"] },
    ],
  },
  us2_andrew_will_sorella: {
    fact: "Bordeaux-Cuvée des 1989 von Chris Camarda gegründeten Weinguts. Sorella ist Italienisch für „Schwester“ und ehrt seine verstorbene Schwester.",
    quiz: [
      { q: "Nach wem ist das Weingut Andrew Will benannt?", a: "Nach Andrew, dem Neffen, und Will, dem Sohn des Gründers", x: ["Nach zwei Brüdern des Gründers", "Nach den zwei Besitzern des ersten Weinbergs", "Nach einem englischen Dichter"] },
    ],
  },
  us2_woodward_canyon: {
    fact: "1981 von Rick Small gegründet, das zweite Weingut im Walla Walla Valley. Es trug schon früh zum Ruf des Cabernet aus Washington bei.",
    quiz: [
      { q: "Was ist das Besondere an den Etiketten der Woodward Canyon Artist Series?", a: "Jedes Jahr zeigen sie das Bild eines anderen Künstlers", x: ["Sie zeigen Familienfotos des Gründers", "Sie zeigen Luftbilder des Weinbergs", "Sie zeigen Wetterkurven des Jahrgangs"] },
    ],
  },
  us2_lecole41_semillon: {
    fact: "Drittes Weingut im Walla Walla Valley, 1983 in einem 1915 erbauten Schulhaus in Frenchtown eröffnet. L'Ecole ist Französisch für „Schule“.",
    quiz: [
      { q: "Wofür steht die „41“ in L'Ecole No 41?", a: "Für die Nummer des Schulbezirks des Gebäudes", x: ["Für den 41. Geburtstag des Gründers", "Für die Landstraße 41", "Für 41 Weinberge"] },
    ],
  },
  us2_long_shadows_sequel: {
    fact: "Syrah von Long Shadows, wo der frühere Chef von Chateau Ste. Michelle, Allen Shoup, weltbekannten Önologen jeweils einen Wein anvertraute.",
    quiz: [
      { q: "Bei welchem australischen Traditionshaus war John Duval, der den Sequel erzeugt, Chefönologe?", a: "Penfolds", x: ["Henschke", "Torbreck", "Two Hands"] },
    ],
  },
  us2_long_shadows_pedestal: {
    fact: "Merlot-betonter Rotwein aus Washington, den Long Shadows einem Star-Berater aus Bordeaux anvertraut hat.",
    quiz: [
      { q: "Welcher berühmte Önologe und Berater aus Bordeaux erzeugt den Pedestal Merlot?", a: "Michel Rolland", x: ["Pierre Seillan", "Stéphane Derenoncourt", "Eric Boissenot"] },
    ],
  },
  us2_long_shadows_feather: {
    fact: "Cabernet aus Washington, den Long Shadows einem Meister des Berg-Cabernets aus Napa anvertraut hat.",
    quiz: [
      { q: "Wer vom Howell Mountain in Napa erzeugt den Feather Cabernet?", a: "Randy Dunn", x: ["Heidi Barrett", "Paul Hobbs", "Philippe Melka"] },
    ],
  },
  us2_long_shadows_poetsleap: {
    fact: "Riesling aus Washington, den Long Shadows einem Spitzenwinzer von der Nahe anvertraut hat.",
    quiz: [
      { q: "Welcher Winzer von der Nahe erzeugt den Poet's Leap Riesling?", a: "Armin Diel", x: ["Ernst Loosen", "Egon Müller", "Helmut Dönnhoff"] },
    ],
  },
  us2_doubleback: {
    fact: "Weingut, das der aus Walla Walla stammende Sportstar Drew Bledsoe nach seinem Karriereende in seiner Heimat gründete. Chris Figgins von Leonetti leitete anfangs die Weinbereitung.",
    quiz: [
      { q: "Welchen Beruf hatte Doubleback-Gründer Drew Bledsoe zuvor?", a: "NFL-Quarterback", x: ["NBA-Basketballspieler", "Pitcher in der MLB", "Profigolfer"] },
      { q: "Wofür steht der Name Doubleback?", a: "Für die Rückkehr in die Heimat", x: ["Für doppelte Reifung", "Für einen Verschnitt aus zwei Weinbergen", "Für einen Football-Spielzug"] },
    ],
  },
  us2_wiemer_dry_riesling: {
    fact: "Riesling-Spitzenweingut in den Finger Lakes, 1979 von Hermann J. Wiemer aus Bernkastel an der Mosel am Ufer des Seneca Lake gegründet.",
    quiz: [
      { q: "Welchen Betrieb führt Hermann J. Wiemer neben dem Weingut?", a: "Eine Rebschule für veredelte europäische Reben", x: ["Eine Käserei", "Eine Apfelweinkelterei", "Eine Fassbinderei"] },
    ],
  },
  us2_drfrank_rkatsiteli: {
    fact: "Weißwein aus einer kälteresistenten Rebsorte aus dem Gebiet der früheren Sowjetunion, die Dr. Konstantin Frank in die Finger Lakes brachte.",
    quiz: [
      { q: "Aus welchem Land stammt die Rebsorte Rkatsiteli, die Dr. Frank in den Finger Lakes pflanzte?", a: "Georgien", x: ["Armenien", "Griechenland", "Bulgarien"] },
    ],
  },
  us2_wolffer_rose: {
    fact: "Rosé des Weinguts, das der Hamburger Christian Wölffer 1988 in den Hamptons auf Long Island gründete. Er gilt als Inbegriff des New Yorker Sommers auf dem Land.",
    quiz: [
      { q: "Wie heißt der Rosé, den Wölffer Estate dank des Rosé-Booms neu herausbrachte?", a: "Summer in a Bottle", x: ["Whispering Angel", "Miraval", "Hampton Water"] },
    ],
  },
  us2_bedell_merlot: {
    fact: "Weingut auf der North Fork von Long Island. Sein Merlot 2009 wurde 2013 beim Mittagessen zur Amtseinführung des Präsidenten serviert, als erster New Yorker Wein bei einer Amtseinführung.",
    quiz: [
      { q: "Welches ist das bekannteste Werk von New Line Cinema, dem Filmstudio von Michael Lynne, der Bedell Cellars 2000 kaufte?", a: "Der Herr der Ringe", x: ["Harry Potter", "Star Wars", "Der Pate"] },
    ],
  },
  us2_barboursville_octagon: {
    fact: "Weingut in Virginia, 1976 von der italienischen Familie Zonin gegründet. Auf dem Anwesen stehen die Ruinen des von Thomas Jefferson entworfenen Herrenhauses eines früheren Gouverneurs.",
    quiz: [
      { q: "Woher stammt der Name Octagon (Achteck)?", a: "Von einem achteckigen Raum im Herrenhaus, das Jefferson entwarf", x: ["Von achteckigen Eichenfässern", "Von einer Cuvée aus acht Rebsorten", "Von einem Weinberg mit acht Parzellen"] },
    ],
  },
  us2_rdv_lostmountain: {
    fact: "Der ehemalige US-Marine Rutger de Vink gründete das Weingut auf Granithügeln am Fuß der Blue Ridge in Virginia, erster Jahrgang war 2008. Vor Kurzem wurde es an die Eigentümerfamilie von Château Montrose verkauft.",
    quiz: [
      { q: "Wofür steht der Name RdV?", a: "Für die Initialen des Gründers und kurz für „Rendez-vous“", x: ["Für eine französische Abkürzung von „Rotwein aus Virginia“", "Für die Koordinaten des Weinbergs", "Für den Namen eines nahen Flusses"] },
    ],
  },
  us2_early_mountain_pm: {
    fact: "Weingut am Fuß der Blue Ridge in Virginia, 2012 von einem Ehepaar aus der Internetbranche gegründet. Es setzt vor allem auf Petit Manseng, die weiße Vorzeigesorte Virginias.",
    quiz: [
      { q: "Welches Internetunternehmen gründete Early-Mountain-Gründer Steve Case mit?", a: "AOL", x: ["Yahoo", "Netscape", "eBay"] },
    ],
  },
  us2_gruet_brut: {
    fact: "Schaumweinhaus, das eine französische Champagnerfamilie 1984 mit dem Kauf von Land auf der Hochebene von New Mexico gründete. Hergestellt wird es wie Champagner.",
    quiz: [
      { q: "In welcher französischen Region machte die Familie Gruet ursprünglich Wein?", a: "Champagne", x: ["Elsass", "Burgund", "Loire"] },
    ],
  },
  us2_missionhill_reserve_chard: {
    fact: "Weingut auf einem Hügel über dem Okanagan Lake. Berühmt für das klosterähnliche Gebäude mit seinem hohen Glockenturm.",
    quiz: [
      { q: "Welche Auszeichnung erhielt der Mission Hill Chardonnay 1992 bei der International Wine & Spirit Competition (IWSC) 1994 in London?", a: "Trophäe für den besten Chardonnay der Welt", x: ["Preis für den besten Eiswein", "Preis für den besten Schaumwein", "Preis für die beste rote Cuvée"] },
    ],
  },
  us2_burrowing_owl_merlot: {
    fact: "Weingut, das Jim Wyse in der Wüstenlandschaft im Süden des Okanagan gründete. Der Name stammt vom Kaninchenkauz (Burrowing Owl), der in der Gegend fast verschwunden war.",
    quiz: [
      { q: "Was macht Burrowing Owl mit den Gebühren für Weinproben?", a: "Es spendet sie für den Schutz des Kaninchenkauzes", x: ["Es finanziert Stipendien für Weinbergsarbeiter", "Es kauft davon Eichenfässer", "Es spendet sie der örtlichen Feuerwehr"] },
    ],
  },
  us2_quails_gate_foch: {
    fact: "Weingut der Familie Stewart, die seit 1908 in West Kelowna Landwirtschaft betreibt. Aus alten, in den 1960er-Jahren gepflanzten Reben entsteht ein dichter Rotwein.",
    quiz: [
      { q: "Zu wessen Ehren wurde die Rebsorte Maréchal Foch benannt?", a: "Ferdinand Foch, Oberbefehlshaber der Alliierten im Ersten Weltkrieg", x: ["Napoleon Bonaparte", "Marquis de La Fayette", "Charles de Gaulle"] },
    ],
  },
  us2_osoyoos_larose: {
    fact: "Weingut im Bordeaux-Stil, 1998 von der Bordelaiser Groupe Taillan und dem kanadischen Unternehmen Vincor am Osoyoos Lake gegründet. Heute gehört es allein der Groupe Taillan.",
    quiz: [
      { q: "Nach welchem Bordeaux-Château der Groupe Taillan ist das „Larose“ in Osoyoos Larose benannt?", a: "Château Gruaud-Larose", x: ["Château Latour", "Château Lagrange", "Château Lafon-Rochet"] },
    ],
  },
  us2_nkmip_syrah: {
    fact: "Weingut in Osoyoos, der Wüstenregion Kanadas. Nk'Mip bedeutet in der Sprache der Ureinwohner „tief gelegenes Land“.",
    quiz: [
      { q: "Welchen Rekord hält Nk'Mip Cellars?", a: "Erstes Weingut Nordamerikas im Besitz einer indigenen Gemeinschaft", x: ["Erster Eiswein Kanadas", "Erste Bio-Zertifizierung Kanadas", "Erstes Schaumweinhaus Nordamerikas"] },
    ],
  },
  us2_summerhill_cipes: {
    fact: "Aushängeschild-Schaumwein des Bioweinguts, das die Familie Cipes 1986 in Kelowna gründete. Eine Riesling-betonte Cuvée mit Flaschengärung.",
    quiz: [
      { q: "Wozu dient die Pyramide, die Summerhill Pyramid Winery der Großen Pyramide von Gizeh nachgebaut hat?", a: "Zur Reifung der Weine", x: ["Für Weinproben", "Zum Trocknen von Trauben", "Zum Fassbau"] },
    ],
  },
  us2_clos_jordanne: {
    fact: "Weingut in Niagara, gegründet von Boisset aus Burgund und dem kanadischen Unternehmen Vincor. Der Jahrgang 2005 belegte 2009 beim „Urteil von Montreal“ Platz 1 vor Spitzenweinen aus Burgund und Kalifornien.",
    quiz: [
      { q: "Welcher Architekt entwarf die Kellerei von Le Clos Jordanne, die nie gebaut wurde?", a: "Frank Gehry", x: ["Renzo Piano", "Tadao Ando", "Zaha Hadid"] },
    ],
  },
  us2_peller_ice_cuvee: {
    fact: "Nach der Champagnermethode hergestellter Schaumwein aus Niagara. Im letzten Schritt sorgt eine typisch kanadische Zutat für dezente Süße.",
    quiz: [
      { q: "Was wird der Ice Cuvée bei der abschließenden Dosage (Süßung) zugesetzt?", a: "Vidal-Eiswein", x: ["Ahornsirup", "Honig", "Apfelbrand"] },
    ],
  },
  us2_gretzky_cab_merlot: {
    fact: "Rote Cuvée von Weingut und Whiskybrennerei der Eishockeylegende Wayne Gretzky in Niagara-on-the-Lake.",
    quiz: [
      { q: "Welche Rückennummer aus seiner Spielerzeit taucht oft bei der Weinmarke von Wayne Gretzky auf?", a: "99", x: ["66", "87", "9"] },
    ],
  },
};

export default T;
