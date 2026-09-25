import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  sh2_penfolds_maxs: {
    fact: "Linie von Penfolds, benannt nach dem legendären Chefönologen Max Schubert, dem Schöpfer des Grange. Sie führt seine Philosophie fort, Trauben aus mehreren Anbaugebieten zu verschneiden.",
    quiz: [
      { q: "Welchen legendären australischen Wein schuf Max Schubert, Namensgeber des Penfolds Max's, in den 1950er-Jahren?", a: "Penfolds Grange", x: ["Henschke Hill of Grace", "Wolf Blass Black Label", "Torbreck RunRig"] },
    ],
  },
  sh2_penfolds_bin128: {
    fact: "Shiraz, den Penfolds ausschließlich aus Trauben aus Coonawarra erzeugt. Dank des kühlen Klimas von Coonawarra ist er duftiger und eleganter als Shiraz aus dem Barossa.",
    quiz: [
      { q: "Welches ist der erste Jahrgang des Penfolds Bin 128 Coonawarra Shiraz?", a: "1962", x: ["1932", "1982", "2002"] },
    ],
  },
  sh2_penfolds_bin150: {
    fact: "Shiraz von Penfolds, ausschließlich aus Trauben aus Marananga im Nordwesten des Barossa Valley. Erstmals vorgestellt wurde er mit dem Jahrgang 2008.",
    quiz: [
      { q: "Welchen deutschen Ortsnamen trug „Marananga“ (Penfolds Bin 150), bevor er im Ersten Weltkrieg geändert wurde?", a: "Gnadenfrei", x: ["Gnadenberg", "Hahndorf", "Neudorf"] },
    ],
  },
  sh2_penfolds_bin2: {
    fact: "Bin-Wein von Penfolds: Shiraz, verschnitten mit Mataro (Mourvèdre). Aus Trauben mehrerer Anbaugebiete Südaustraliens erzeugt und schon jung zugänglich.",
    quiz: [
      { q: "Penfolds benennt Weine wie den Bin 2 mit Nummern. Welche Bin-Nummer trägt der Grange?", a: "Bin 95", x: ["Bin 1", "Bin 389", "Bin 707"] },
    ],
  },
  sh2_penfolds_magill: {
    fact: "Shiraz aus dem Stammweinberg von Penfolds in Magill bei Adelaide, den das Ehepaar Penfold 1844 anlegte. Ein seltener Weinberg, der mitten in der Stadt überlebt hat.",
    quiz: [
      { q: "Welchen Beruf hatte Penfolds-Gründer Christopher Rawson Penfold ursprünglich?", a: "Arzt", x: ["Pfarrer", "Schiffskapitän", "Rechtsanwalt"] },
      { q: "Welcher Penfolds-Wein ist nach dem Cottage des Ehepaars Penfold benannt, das auf dem Magill Estate erhalten ist?", a: "Grange", x: ["St Henri", "Yattarna", "Koonunga Hill"] },
    ],
  },
  sh2_torbreck_laird: {
    fact: "Spitzenwein von Torbreck aus Shiraz einer Einzellage in Marananga im Barossa. Er reift lange in dickwandigen neuen französischen Eichenfässern.",
    quiz: [
      { q: "Wen bezeichnet das schottische Wort „Laird“ im Namen des Torbreck The Laird?", a: "Einen Gutsherrn mit eigenem Land", x: ["Einen Schafhirten", "Einen Förster", "Einen Dorfgeistlichen"] },
    ],
  },
  sh2_torbreck_woodcutters: {
    fact: "Barossa-Shiraz, benannt nach der Zeit, in der Torbreck-Gründer Dave Powell in Schottland als Holzfäller arbeitete.",
    quiz: [
      { q: "In welchem Jahr wurde Torbreck, der Erzeuger des Woodcutter's Shiraz, gegründet?", a: "1994", x: ["1954", "1974", "2004"] },
    ],
  },
  sh2_torbreck_factor: {
    fact: "Shiraz von Torbreck aus alten Shiraz-Reben mehrerer Dörfer im Barossa Valley. Die meisten Torbreck-Weine tragen Namen aus alten schottischen Landbegriffen.",
    quiz: [
      { q: "Wer war im alten Schottland der „Factor“, nach dem Torbreck The Factor benannt ist?", a: "Ein Verwalter, der das Gut für den Gutsherrn führte", x: ["Ein Müller, der Getreide mahlte", "Der Dorfschmied", "Ein Hirte, der Rinderherden trieb"] },
    ],
  },
  sh2_greenockcreek_roennfeldt: {
    fact: "Kult-Shiraz von alten Reben in Marananga im Barossa, in winzigen Mengen erzeugt. Mit 100 Punkten von Robert Parker wurde er zur Legende.",
    quiz: [
      { q: "Was ist die „Roennfeldt Road“ im Namen des Greenock Creek Roennfeldt Road?", a: "Eine Straße im Barossa, die am Weinberg vorbeiführt", x: ["Das deutsche Heimatdorf des Gründers", "Ein Bach neben dem Weinberg", "Die alte Kirche des Weinguts"] },
    ],
  },
  sh2_rockford_basketpress: {
    fact: "Barossa-Shiraz, den Rockford nach traditioneller Methode mit über 100 Jahre alten Geräten erzeugt. Er wird vor allem ab Weingut und über eine Mailingliste verkauft und ist schwer zu bekommen.",
    quiz: [
      { q: "Woher stammt der Name Rockford Basket Press?", a: "Von einer altmodischen Korbpresse für Trauben", x: ["Von großen Körben für den Traubentransport", "Vom Kindheitsspitznamen des Gründers", "Von der korbförmigen Geländeform des Weinbergs"] },
    ],
  },
  sh2_peterlehmann_stonewell: {
    fact: "Spitzen-Shiraz des Weinguts, das Peter Lehmann Ende der 1970er-Jahre gründete, um Barossa-Winzern in einer Traubenschwemme die Ernte abzukaufen, die sonst weggeworfen worden wäre.",
    quiz: [
      { q: "Welche Spielkarte erscheint auf Etikett und Logo der Peter-Lehmann-Weine?", a: "Kreuz-Dame", x: ["Pik-Ass", "Herz-König", "Karo-Bube"] },
    ],
  },
  sh2_grantburge_meshach: {
    fact: "Spitzen-Shiraz des Barossa-Weinguts, das Grant und Helen Burge 1988 gründeten. Er wird aus Trauben alter Reben gekeltert.",
    quiz: [
      { q: "Wer ist „Meshach“ im Namen des Grant Burge Meshach?", a: "Grant Burges Urgroßvater", x: ["Ein Nachbar, der den ersten Weinberg verkaufte", "Der erste lutherische Pastor im Barossa", "Der erste Chefönologe des Weinguts"] },
    ],
  },
  sh2_langmeil_freedom: {
    fact: "Stammt von Shiraz-Reben im Barossa, die zu den ältesten der Welt zählen. Der Name „Freiheit“ erinnert an Einwanderer, die auf der Suche nach Religionsfreiheit aus Preußen kamen.",
    quiz: [
      { q: "Wofür steht die „1843“ im Langmeil The Freedom 1843?", a: "Das Jahr, in dem die Reben gepflanzt wurden", x: ["Das Gründungsjahr des Weinguts", "Das Jahr des ersten Exports", "Die Höhenlage des Weinbergs (m)"] },
    ],
  },
  sh2_charlesmelton_ninepopes: {
    fact: "Cuvée im Rhône-Stil aus altem Grenache im Barossa mit Shiraz und Mourvèdre. Das Aushängeschild von Charles Melton.",
    quiz: [
      { q: "Wie kam Charles Meltons Nine Popes („neun Päpste“) zu seinem Namen?", a: "„Neuf“ (neu) in Châteauneuf-du-Pape wurde als Zahl 9 missverstanden", x: ["Neun Päpste sollen den Weinberg gesegnet haben", "Er wird aus neun Rebsorten verschnitten", "Nach neun Papstmedaillen, die der Gründer sammelte"] },
    ],
  },
  sh2_glaetzer_amonra: {
    fact: "Spitzenwein, den Winemaker Ben Glaetzer aus Shiraz alter Reben im Barossa erzeugt. Er wird unfiltriert abgefüllt.",
    quiz: [
      { q: "Welcher mythologische Gott ist „Amon-Ra“, der Namensgeber des Glaetzer Amon-Ra?", a: "Der Sonnengott der ägyptischen Mythologie", x: ["Der Weingott der griechischen Mythologie", "Der Donnergott der nordischen Mythologie", "Der Mondgott der mesopotamischen Mythologie"] },
    ],
  },
  sh2_johnduval_entity: {
    fact: "Barossa-Shiraz von John Duval, der von 1986 bis 2002 als Chefönologe von Penfolds für den Grange verantwortlich war und sich dann selbstständig machte.",
    quiz: [
      { q: "Bei welchem Weingut war John Duval Chefönologe, bevor er sich selbstständig machte?", a: "Penfolds", x: ["Wolf Blass", "Henschke", "Yalumba"] },
    ],
  },
  sh2_yalumba_octavius: {
    fact: "Spitzenwein von Yalumba, Australiens ältestem Familienweingut, aus Shiraz alter Reben im Barossa.",
    quiz: [
      { q: "Woher stammt der Name Yalumba The Octavius?", a: "Vom kleinen Reifefass „Octave“", x: ["Von der achten Versuchscharge", "Von einem Verschnitt aus acht Weinbergen", "Von acht Jahren Reifezeit"] },
    ],
  },
  sh2_jacobscreek_doublebarrel: {
    fact: "Shiraz, der zuerst in Weinfässern reift und dann in Fässern, die zuvor eine andere Spirituose enthielten, ein zweites Mal – daher „Double Barrel“.",
    quiz: [
      { q: "In welchem Fass reift der Jacob's Creek Double Barrel Shiraz ein zweites Mal?", a: "In einem ehemaligen Whiskyfass", x: ["In einem ehemaligen Sherryfass", "In einem ehemaligen Rumfass", "In einem ehemaligen Portweinfass"] },
    ],
  },
  sh2_henschke_cyril: {
    fact: "Cabernet Sauvignon aus dem Eden Valley zu Ehren von Cyril Henschke, der als Erster Einzellagenweine wie den Hill of Grace herausbrachte.",
    quiz: [
      { q: "Was ist Cyril Henschke, Namensgeber des Henschke Cyril Henschke, für Stephen Henschke, der das Weingut heute führt?", a: "Sein Vater", x: ["Sein Großvater", "Sein älterer Bruder", "Sein Onkel"] },
    ],
  },
  sh2_pewseyvale_riesling: {
    fact: "Weinberg, den der englische Einwanderer Joseph Gilbert 1847 als Erster an den Hängen des Eden Valley bepflanzte. 1961 belebte die Familie Hill-Smith von Yalumba ihn wieder.",
    quiz: [
      { q: "Woher stammt der Name Pewsey Vale?", a: "Vom „Vale of Pewsey“, einem Tal in Wiltshire, England", x: ["Aus der Sprache der Aborigines: „klare Quelle“", "Vom Namen der Tochter, die die erste Lese einbrachte", "Vom Namen einer benachbarten Kirche"] },
    ],
  },
  sh2_darenberg_stumpjump: {
    fact: "Alltags-Cuvée von d'Arenberg. Alle Etiketten von d'Arenberg tragen einen roten Diagonalstreifen.",
    quiz: [
      { q: "Der in Südaustralien erfundene „Stump-Jump-Pflug“ gab d'Arenberg The Stump Jump seinen Namen. Was für ein Pflug ist das?", a: "Ein Pflug, der an Baumstümpfen hochspringt und darüber hinweggleitet", x: ["Ein Pflug, der nur das Unkraut zwischen den Reben ausreißt", "Ein Pflug mit Dampfmaschinenantrieb", "Ein Pflug, den vier Ochsen ziehen"] },
    ],
  },
  sh2_darenberg_footbolt: {
    fact: "Shiraz, dessen Name an die Zeit von Joseph Osborn erinnert, der 1912 einen Weinberg in McLaren Vale kaufte und damit den Grundstein für d'Arenberg legte.",
    quiz: [
      { q: "Was war „Footbolt“ im d'Arenberg The Footbolt ursprünglich?", a: "Ein Rennpferd von Joseph Osborn", x: ["Ein Bach am Weinberg", "Der Jagdhund des Gründers", "Eine alte Handpresse"] },
    ],
  },
  sh2_wirrawirra_churchblock: {
    fact: "Aushängeschild-Cuvée von Wirra Wirra, einem 1894 gegründeten und später geschlossenen Weingut in McLaren Vale, das 1969 wiederbelebt wurde.",
    quiz: [
      { q: "Wer erweckte Wirra Wirra 1969 zu neuem Leben?", a: "Greg Trott", x: ["Max Schubert", "Wolf Blass", "Peter Lehmann"] },
    ],
  },
  sh2_taylors_cs: {
    fact: "Cabernet Sauvignon des Familienweinguts, das die Familie Taylor 1969 im Clare Valley gründete. In Großbritannien und anderen Ländern wird er unter dem Namen „Wakefield“ verkauft.",
    quiz: [
      { q: "Warum werden Taylors-Weine in vielen Ländern unter dem Namen „Wakefield“ verkauft?", a: "Wegen der Namensgleichheit mit dem portugiesischen Portweinhaus Taylor's", x: ["Das britische Königshaus verlangte eine Umbenennung", "Der Gründer änderte seinen Namen", "Nach dem Hafen des ersten Exports"] },
    ],
  },
  sh2_mounthorrocks_cordoncut: {
    fact: "Süßer Riesling, den Winemakerin Stephanie Toole im Clare Valley erzeugt. Ohne Edelfäule oder Frost werden die Trauben am Rebstock getrocknet, um den Zucker zu konzentrieren.",
    quiz: [
      { q: "Was versteht man beim Mount Horrocks Cordon Cut unter „Cordon Cut“?", a: "Die Fruchtruten werden gekappt, die Trauben trocknen am Stock", x: ["Gefrorene Trauben werden mitten in der Nacht gelesen", "Gelesene Trauben werden auf Stroh getrocknet", "Nur edelfaule Beeren werden ausgelesen"] },
    ],
  },
  sh2_wynns_johnriddoch: {
    fact: "Spitzen-Cabernet-Sauvignon, den Wynns Coonawarra Estate nur aus den besten Trauben erzeugt. Der erste Jahrgang war 1982.",
    quiz: [
      { q: "Wer war John Riddoch, Namensgeber des Wynns John Riddoch?", a: "Ein Pionier aus Schottland, der in Coonawarra die ersten Reben pflanzte", x: ["Ein italienischer Unternehmer, der Wynns kaufte", "Der erste Chefönologe des Weinguts", "Der erste Gouverneur Südaustraliens"] },
    ],
  },
  sh2_shawsmith_sb: {
    fact: "Sauvignon Blanc als Aushängeschild des Weinguts, das die Cousins Martin Shaw und Michael Hill-Smith 1989 in den Adelaide Hills gründeten.",
    quiz: [
      { q: "Welchen Titel erwarb Michael Hill-Smith, Mitgründer von Shaw + Smith, 1988 als erster Australier?", a: "Master of Wine (MW)", x: ["Master Sommelier (MS)", "Önologie-Diplom der Universität Bordeaux", "Jimmy Watson Trophy"] },
    ],
  },
  sh2_brokenwood_graveyard: {
    fact: "Spitzen-Shiraz von Brokenwood, 1970 von drei Freunden aus Sydney im Hunter Valley gegründet. Das Land war ursprünglich als Friedhof ausgewiesen – daher der Name „Graveyard“.",
    quiz: [
      { q: "Welchen Hauptberuf hatten die drei Gründer von Brokenwood?", a: "Anwälte", x: ["Ärzte", "Bankangestellte", "Architekten"] },
    ],
  },
  sh2_mountpleasant_oshea: {
    fact: "Shiraz von Mount Pleasant zu Ehren von Maurice O'Shea, dem legendären Winemaker des Hunter Valley. Seine Weine galten Mitte des 20. Jahrhunderts als die besten Rotweine Australiens.",
    quiz: [
      { q: "In welchem Land studierte Maurice O'Shea, der Mount Pleasant führte, Weinbau und Önologie?", a: "Frankreich", x: ["Deutschland", "Italien", "USA"] },
    ],
  },
  sh2_tyrrells_vat47: {
    fact: "Chardonnay aus dem Hunter Valley, der mit dem Jahrgang 1971 erschien und als erster kommerzieller Chardonnay Australiens gilt.",
    quiz: [
      { q: "Wer erzeugte 1971 den ersten Tyrrell's Vat 47?", a: "Murray Tyrrell", x: ["Bruce Tyrrell", "Edward Tyrrell", "Max Schubert"] },
    ],
  },
  sh2_lakesfolly_cabernets: {
    fact: "Weingut, das Max Lake 1963 im Hunter Valley gründete. Er selbst nannte sein Wagnis „Lakes Torheit“ (Folly) – es läutete in Australien die Ära der Boutique-Weingüter ein.",
    quiz: [
      { q: "Welchen Hauptberuf hatte Max Lake, der Gründer von Lake's Folly?", a: "Chirurg", x: ["Rechtsanwalt", "Bankier", "Zeitungsreporter"] },
    ],
  },
  sh2_clonakilla_sv: {
    fact: "Aushängeschild des Weinguts, das der Wissenschaftler Dr. John Kirk 1971 bei Canberra gründete. Zum Shiraz kommt ein kleiner Anteil der weißen Rebsorte Viognier, beide werden gemeinsam vergoren.",
    quiz: [
      { q: "Welches französische Anbaugebiet, berühmt für den Verschnitt von Syrah mit Viognier, war Vorbild für den Clonakilla Shiraz Viognier?", a: "Côte-Rôtie", x: ["Châteauneuf-du-Pape", "Cornas", "Bandol"] },
    ],
  },
  sh2_xanadu_cs: {
    fact: "Cabernet Sauvignon von Xanadu, gegründet in den 1970er-Jahren, der Pionierzeit von Margaret River. Er verkörpert den typisch eleganten, straffen Cabernet aus Margaret River.",
    quiz: [
      { q: "Woher stammt der Name Xanadu?", a: "Aus dem Gedicht „Kubla Khan“ des englischen Dichters Coleridge", x: ["Vom Heimatdorf des Gründers", "Aus der Sprache der Aborigines: „Meeresbrise“", "Vom Namen der Tochter des ersten Weinbergbesitzers"] },
    ],
  },
  sh2_voyager_chardonnay: {
    fact: "Chardonnay des Weinguts in Margaret River, das der Bergbauunternehmer Michael Wright 1991 kaufte und ausbaute. Mit weißem Gebäude und Rosengarten ist es ein beliebtes Ausflugsziel.",
    quiz: [
      { q: "In welchem Baustil ist das weiße Kellereigebäude von Voyager Estate gehalten?", a: "Im südafrikanischen kapholländischen Stil", x: ["Im französischen Château-Stil", "Im toskanischen Landhausstil", "Im spanischen Missionsstil"] },
    ],
  },
  sh2_cullen_kevinjohn: {
    fact: "Spitzen-Chardonnay von Cullen aus biodynamisch angebauten Trauben. Einer der bedeutendsten Chardonnays aus Margaret River.",
    quiz: [
      { q: "Wen ehrt der Name Cullen Kevin John?", a: "Den Arzt Kevin Cullen, Mitgründer des Weinguts", x: ["Einen Nachbarn, der bei der ersten Lese half", "Den ersten Enkel des Gründers", "Den ersten Winemaker von Margaret River"] },
    ],
  },
  sh2_vassefelix_heytesbury: {
    fact: "Spitzen-Chardonnay von Vasse Felix, dem ersten Weingut in Margaret River, aus Trauben der besten Parzellen.",
    quiz: [
      { q: "Was ist „Heytesbury“ im Namen des Vasse Felix Heytesbury?", a: "Die Firma der Familie Holmes à Court, der Vasse Felix seit 1987 gehört", x: ["Ein Leuchtturm vor der Küste von Margaret River", "Das Heimatdorf des ersten Winemakers", "Ein Aborigine-Wort für „weißer Sand“"] },
    ],
  },
  sh2_tahbilk_marsanne: {
    fact: "Historisches Weingut in Victoria, gegründet 1860. Es pflegt eine der größten Marsanne-Pflanzungen der Welt, darunter Reben aus dem Jahr 1927.",
    quiz: [
      { q: "Welche Familie führt Tahbilk seit 1925 über Generationen?", a: "Familie Purbrick", x: ["Familie Brown", "Familie Henschke", "Familie Hardy"] },
    ],
  },
  sh2_yarrayering_dr1: {
    fact: "Cabernet-Cuvée des Weinguts, das Dr. Bailey Carrodus 1969 im Yarra Valley gründete. Auf dem Etikett steht statt der Rebsorten nur „Dry Red No. 1“.",
    quiz: [
      { q: "Welchen Beruf hatte Yarra-Yering-Gründer Bailey Carrodus ursprünglich?", a: "Botaniker", x: ["Chirurg", "Rechtsanwalt", "Bergbauingenieur"] },
    ],
  },
  sh2_mountmary_quintet: {
    fact: "Bordeaux-Cuvée von Mount Mary im Yarra Valley, wo der Arzt Dr. John Middleton 1971 die ersten Reben pflanzte. Die kleinen Mengen gehen überwiegend an Kunden der Mailingliste.",
    quiz: [
      { q: "Was steckt hinter dem Namen „Quintet“ (Quintett) beim Mount Mary Quintet?", a: "Er wird aus fünf Bordeaux-Rebsorten verschnitten", x: ["Er vereint Trauben aus fünf Weinbergen", "Er reift fünf Jahre lang", "Er ehrt die fünf Kinder des Gründers"] },
    ],
  },
  sh2_coldstreamhills_pn: {
    fact: "Pinot Noir des Weinguts, das James Halliday, Australiens bekanntester Weinkritiker, 1985 im Yarra Valley gründete.",
    quiz: [
      { q: "Welchen australischen Weinführer gab James Halliday, der Gründer von Coldstream Hills, jedes Jahr heraus?", a: "Halliday Wine Companion", x: ["Penguin Wine Guide", "Hugh Johnson's Pocket Wine Book", "Parker's Wine Buyer's Guide"] },
    ],
  },
  sh2_yeringstation_pn: {
    fact: "Pinot Noir von Yering Station auf dem Gelände einer alten Farm im Yarra Valley. Das kühle Klima sorgt für Finesse.",
    quiz: [
      { q: "Welche Bedeutung hat das Gelände von Yering Station für die Weingeschichte Victorias?", a: "Hier wurden 1838 die ersten Reben Victorias gepflanzt", x: ["Hier entstand Victorias erste Schaumweinkellerei", "Hier gründete Australiens erste Winzerin ihr Weingut", "Hier wurde in Australien erstmals der Schraubverschluss verwendet"] },
    ],
  },
  sh2_tenminutes_pn: {
    fact: "Pinot Noir aus kühlen Weinbergen auf der vom Meer umgebenen Mornington Peninsula südlich von Melbourne.",
    quiz: [
      { q: "Woher stammt der Name Ten Minutes by Tractor („zehn Minuten mit dem Traktor“)?", a: "Die ersten drei Weinberge lagen mit dem Traktor zehn Minuten voneinander entfernt", x: ["Vom Weingut bis zum Meer sind es mit dem Traktor zehn Minuten", "Die Trauben werden binnen zehn Minuten nach der Lese gepresst", "Der Gründer führte eine Traktorenfirma"] },
    ],
  },
  sh2_chambers_raremuscat: {
    fact: "Likörwein aus Muscat von Rosewood in Rutherglen, das die Familie Chambers seit Generationen führt. Verschnitten werden jahrzehntealte Reserven.",
    quiz: [
      { q: "Wo steht „Rare“ unter den vier Reifestufen des Rutherglen Muscat (Rutherglen, Classic, Grand, Rare)?", a: "Höchste Stufe", x: ["Niedrigste Stufe", "Zweitniedrigste Stufe", "Zweithöchste Stufe"] },
    ],
  },
  sh2_seppelt_sparklingshiraz: {
    fact: "Roter Schaumwein von Seppelt aus Great Western in Victoria. Er kommt erst nach langer Flaschenreife auf den Markt.",
    quiz: [
      { q: "Wer grub „The Drives“, die langen Reifetunnel unter der Seppelt-Kellerei in Great Western?", a: "Arbeitslos gewordene Goldgräber", x: ["Pioniere der britischen Armee", "Deportierte Sträflinge", "Eisenbahnarbeiter"] },
    ],
  },
  sh2_jansz_cuvee: {
    fact: "Schaumweinkellerei in Tasmanien, 1986 in Partnerschaft mit dem Champagnerhaus Louis Roederer gegründet. Wie Champagner entsteht der Wein durch Flaschengärung.",
    quiz: [
      { q: "Auf wen geht der Name Jansz zurück?", a: "Auf Abel Janszoon Tasman, den niederländischen Entdecker Tasmaniens", x: ["Auf einen niederländischen Kaufmann, der das Weingut gründete", "Auf den Großvater des Gründers", "Auf den britischen Entdecker James Cook"] },
    ],
  },
  sh2_cloudybay_pn: {
    fact: "Pinot Noir von Cloudy Bay – berühmt für Sauvignon Blanc – aus Trauben der kühlen südlichen Täler von Marlborough.",
    quiz: [
      { q: "Welcher Entdecker gab dieser Meeresbucht 1770 den Namen „Cloudy Bay“ (wolkige Bucht)?", a: "Der Brite Kapitän James Cook", x: ["Der Niederländer Abel Tasman", "Der Franzose Dumont d'Urville", "Der Portugiese Magellan"] },
    ],
  },
  sh2_seresin_sb: {
    fact: "Sauvignon Blanc des Weinguts, das Michael Seresin Anfang der 1990er-Jahre in Marlborough gründete. Die Trauben werden ökologisch und biodynamisch angebaut, das Etikett ziert ein Handabdruck.",
    quiz: [
      { q: "Welchen Hauptberuf hat Michael Seresin, Gründer von Seresin Estate?", a: "Kameramann beim Film", x: ["Architekt", "Rugby-Nationalspieler", "Opernsänger"] },
    ],
  },
  sh2_nautilus_sb: {
    fact: "Sauvignon Blanc eines Weinguts in Marlborough, das die Schale des Perlboots (Nautilus) als Symbol führt.",
    quiz: [
      { q: "Welches Weingut betreibt die Familie Hill-Smith, Eigentümerin von Nautilus Estate, in Australien?", a: "Yalumba", x: ["Penfolds", "Henschke", "Jacob's Creek"] },
    ],
  },
  sh2_matua_sb: {
    fact: "Weingut, das die Brüder Ross und Bill Spence 1974 in Auckland gründeten. Heute eine bekannte Massenmarke für Marlborough Sauvignon Blanc.",
    quiz: [
      { q: "Welches Novum der neuseeländischen Weingeschichte gelang Matua 1974?", a: "Neuseelands erster Sauvignon Blanc", x: ["Neuseelands erster Wein mit Schraubverschluss", "Neuseelands erster Pinot Noir", "Neuseelands erster Schaumwein"] },
    ],
  },
  sh2_giesen_sb: {
    fact: "Sauvignon Blanc des Familienweinguts, das drei Brüder 1981 in Neuseeland gründeten. Bekannt wurde es auch mit entalkoholisierten „0 %“-Weinen.",
    quiz: [
      { q: "Aus welchem Land stammen die Brüder Theo, Alex und Marcel Giesen, die Giesen gründeten?", a: "Deutschland", x: ["Niederlande", "Österreich", "Schweiz"] },
    ],
  },
  sh2_spyvalley_sb: {
    fact: "Sauvignon Blanc eines Familienweinguts im Waihopai Valley in Marlborough.",
    quiz: [
      { q: "Woher stammt der Name Spy Valley?", a: "Von einer Satelliten-Abhörstation des Geheimdienstes im Tal", x: ["Von einer Höhle, in der sich im Krieg Spione versteckten", "Von einem Spionageroman des Gründers", "Von Goldgräbern, die heimlich schürften"] },
    ],
  },
  sh2_astrolabe_sb: {
    fact: "Sauvignon Blanc des kleinen Familienweinguts Astrolabe in Marlborough.",
    quiz: [
      { q: "Woher stammt der Name Astrolabe?", a: "Vom Schiff des Franzosen Dumont d'Urville, der Neuseelands Küsten erkundete", x: ["Vom Schiff von Kapitän James Cook", "Von einem traditionellen Kanu der Māori", "Von der Jacht des Gründers"] },
    ],
  },
  sh2_closhenri_sb: {
    fact: "Sauvignon Blanc des Weinguts, das die Familie Henri Bourgeois von der französischen Loire im Jahr 2000 in Marlborough gründete.",
    quiz: [
      { q: "In welchem französischen Anbaugebiet macht die Familie Bourgeois, Gründerin von Clos Henri, seit Generationen Wein?", a: "Sancerre", x: ["Chablis", "Bordeaux", "Elsass"] },
    ],
  },
  sh2_babich_blacklabel: {
    fact: "Marlborough Sauvignon Blanc von Babich, einem der ältesten Familienweingüter Neuseelands, gegründet 1916.",
    quiz: [
      { q: "Woher wanderte Josip Babich, der Gründer von Babich, ein?", a: "Aus Dalmatien, Kroatien", x: ["Aus Sizilien, Italien", "Aus Kreta, Griechenland", "Aus Galicien, Spanien"] },
    ],
  },
  sh2_tohu_sb: {
    fact: "Frischer Sauvignon Blanc, den Tohu Wines aus Trauben aus Marlborough erzeugt.",
    quiz: [
      { q: "Welchen Rekord hält Tohu Wines in der Weingeschichte?", a: "Erste Weinmarke der Welt in Māori-Besitz", x: ["Erstes vegan zertifiziertes Weingut der Welt", "Neuseelands erster Wein mit Schraubverschluss", "Erstes klimaneutrales Weingut der Südhalbkugel"] },
    ],
  },
  sh2_pegasusbay_riesling: {
    fact: "Riesling des Weinguts der Familie Donaldson in Waipara nördlich von Christchurch. Ein opulenter Stil mit leichter Restsüße.",
    quiz: [
      { q: "Welchen Hauptberuf hat Ivan Donaldson, der Gründer von Pegasus Bay?", a: "Neurologe", x: ["Rechtsanwalt", "Opernsänger", "Rugbyspieler"] },
    ],
  },
  sh2_kumeuriver_mates: {
    fact: "Chardonnay der aus Kroatien eingewanderten Familie Brajkovich aus Kumeu bei Auckland. Er gilt als Maßstab für neuseeländischen Chardonnay.",
    quiz: [
      { q: "Wer ist „Mate“ im Namen des Kumeu River Mate's Vineyard?", a: "Maté Brajkovich, Vater der Brüder, die das Weingut heute führen", x: ["Freunde, die den Weinberg gemeinsam anlegten", "Ein englischer Farmer, der den ersten Weinberg verkaufte", "Ein Häuptling der Māori"] },
    ],
  },
  sh2_trinityhill_homage: {
    fact: "Spitzen-Syrah von Trinity Hill aus den Gimblett Gravels, den Kiesböden von Hawke's Bay. Er zeigte, welches Potenzial Syrah in Neuseeland hat.",
    quiz: [
      { q: "Wem ist die „Homage“ des Trinity Hill Homage Syrah gewidmet?", a: "Gérard Jaboulet, der Paul Jaboulet Aîné an der Rhône leitete", x: ["Gérard Chave aus Hermitage", "Marcel Guigal aus der Côte-Rôtie", "Jacques Perrin aus Châteauneuf-du-Pape"] },
    ],
  },
  sh2_missionestate_syrah: {
    fact: "Syrah vom ältesten noch bestehenden Weingut Neuseelands, gegründet 1851.",
    quiz: [
      { q: "Wer gründete Mission Estate?", a: "Französische katholische Missionare (Maristen)", x: ["Ein anglikanischer Pfarrer aus England", "Kroatische Einwanderer", "Deutsche lutherische Einwanderer"] },
    ],
  },
  sh2_twopaddocks_pn: {
    fact: "Pinot Noir des Weinguts, das der in Neuseeland aufgewachsene Schauspieler Sam Neill in Central Otago gründete. Der Name erinnert an die Anfänge auf zwei kleinen Weiden (Paddocks).",
    quiz: [
      { q: "In welchem bekannten Film spielte Sam Neill, Gründer von Two Paddocks, eine Hauptrolle?", a: "Jurassic Park", x: ["Der Herr der Ringe", "Titanic", "Matrix"] },
    ],
  },
  sh2_montes_alphasyrah: {
    fact: "Syrah aus der Linie Montes Alpha, der in Korea beliebtesten chilenischen Weinlinie. Kraftvoll aus Trauben, die in der warmen Sonne des Colchagua Valley reifen.",
    quiz: [
      { q: "Welche Musik läuft bei Montes im Fasskeller der Kellerei in Apalta ununterbrochen?", a: "Gregorianischer Choral", x: ["Mozart-Sinfonien", "Chilenische Volksmusik", "Jazz"] },
    ],
  },
  sh2_carmin_peumo: {
    fact: "Ikonenwein von Concha y Toro aus Carmenère der besten Parzellen im Weinberg Peumo. Er gilt als bester Carmenère Chiles.",
    quiz: [
      { q: "Was bedeutet das spanische „Carmín“ im Carmín de Peumo?", a: "Karminrot", x: ["Kleiner Garten", "Roter Stein", "Alter Baum"] },
    ],
  },
  sh2_terrunyo_carmenere: {
    fact: "Carmenère aus der Linie Terrunyo, mit der Concha y Toro den Charakter einzelner Weinberge herausarbeitet. Die Trauben stammen aus Peumo, einer Hochburg des Carmenère.",
    quiz: [
      { q: "Was bedeutet der Name Terrunyo bei Concha y Toro?", a: "Das spanische „terruño“, also Terroir", x: ["„Rote Erde“ in der Sprache der Mapuche", "Der Name der Tochter des Gründers", "Lateinisch für „drei Hügel“"] },
    ],
  },
  sh2_almaviva_epu: {
    fact: "Zweitwein von Almaviva, dem Gemeinschaftsprojekt von Concha y Toro aus Chile und Mouton Rothschild aus Bordeaux.",
    quiz: [
      { q: "Was bedeutet „EPU“ im Almaviva EPU in der Sprache der Mapuche?", a: "Zwei (2)", x: ["Himmel", "Adler", "Fluss"] },
    ],
  },
  sh2_altair: {
    fact: "Ikonen-Cuvée aus einem Hochlagen-Weinberg im Cachapoal Valley am Fuß der Anden, den Chiles San Pedro gemeinsam mit einem renommierten Bordeaux-Haus anlegte.",
    quiz: [
      { q: "Mit welchem Château aus Saint-Émilion brachte San Pedro den Altaïr ursprünglich heraus?", a: "Château Dassault", x: ["Château Cheval Blanc", "Château Ausone", "Château Pavie"] },
      { q: "Woher stammt der Name Altaïr?", a: "Vom hellsten Stern im Sternbild Adler", x: ["Von einem Andengipfel", "Von einem Gott der Mapuche-Mythologie", "Vom Pferd eines chilenischen Unabhängigkeitshelden"] },
    ],
  },
  sh2_aquitania_lazuli: {
    fact: "Cabernet Sauvignon des Weinguts, das Paul Pontallier und Bruno Prats aus Bordeaux mit dem Chilenen Felipe de Solminihac 1990 bei Santiago gründeten.",
    quiz: [
      { q: "Welches Bordeaux-Premier-Cru leitete Paul Pontallier, Mitgründer von Viña Aquitania, viele Jahre als Generaldirektor?", a: "Château Margaux", x: ["Château Latour", "Château Haut-Brion", "Château Mouton Rothschild"] },
      { q: "Worauf verweist der Name Aquitania?", a: "Auf Aquitanien, die Region um Bordeaux im Südwesten Frankreichs", x: ["Auf das spanische Baskenland", "Auf eine Insel im Süden Chiles", "Auf einen alten Namen der Toskana"] },
    ],
  },
  sh2_gatonegro_cs: {
    fact: "Alltagsweinmarke von San Pedro aus Chile, die in viele Länder exportiert wird und zu den bekanntesten Konsumweinen Chiles zählt.",
    quiz: [
      { q: "Was bedeutet „Gato Negro“ auf Spanisch?", a: "Schwarze Katze", x: ["Schwarzes Pferd", "Schwarzer Stier", "Schwarzer Adler"] },
    ],
  },
  sh2_cousinomacul_finisterrae: {
    fact: "Premium-Cuvée auf Basis von Cabernet Sauvignon, die das historische chilenische Weingut Cousiño-Macul aus Trauben des Maipo Valley erzeugt.",
    quiz: [
      { q: "Was bedeutet „Finis Terrae“ auf Latein?", a: "Ende der Erde (Ende der Welt)", x: ["Gutes Land", "Rote Erde", "Geschenk der Erde"] },
    ],
  },
  sh2_santarita_triplec: {
    fact: "Premium-Cuvée von Santa Rita aus Trauben des Maipo Valley. Für Chile ungewöhnlich steht Cabernet Franc im Mittelpunkt.",
    quiz: [
      { q: "Woher stammt der Name Santa Rita Triple C?", a: "Von drei verschnittenen Rebsorten, die mit C beginnen", x: ["Von drei getrennten Lesedurchgängen", "Von den Initialen der drei Gründer", "Von Trauben aus drei Weinbergen (Campo)"] },
    ],
  },
  sh2_ventisquero_pangea: {
    fact: "Syrah aus Trauben aus Apalta, den Chiles Ventisquero gemeinsam mit John Duval erzeugt, dem früheren Winemaker von Penfolds aus Australien.",
    quiz: [
      { q: "Was bedeutet der Name Pangea bei Ventisquero?", a: "Den Superkontinent, bevor die Kontinente auseinanderdrifteten", x: ["Eine Meeresgöttin der griechischen Mythologie", "„Hoher Berg“ in der Sprache der Mapuche", "Lateinisch für „alle Trauben“"] },
    ],
  },
  sh2_losvascos_cs: {
    fact: "Cabernet Sauvignon des Weinguts Los Vascos im Colchagua Valley. Es gilt als erstes Weingut in Chile, das die Eigentümerfamilie eines Bordeaux-Premier-Cru erwarb.",
    quiz: [
      { q: "Welche Eigentümerfamilie eines Bordeaux-Premier-Cru kaufte Los Vascos 1988?", a: "Die Rothschilds von Château Lafite Rothschild", x: ["Die Mentzelopoulos von Château Margaux", "Die Dillons von Château Haut-Brion", "Die Pinaults von Château Latour"] },
    ],
  },
  sh2_catena_alta: {
    fact: "Malbec, den Catena Zapata nur aus den besten Parzellen mehrerer Hochlagen-Weinberge erzeugt.",
    quiz: [
      { q: "Wovon ist das Kellereigebäude von Catena Zapata, dem Erzeuger des Catena Alta, inspiriert?", a: "Von einer Maya-Pyramide", x: ["Von einem Sonnentempel der Inka", "Von einem Château in Bordeaux", "Von einem alten spanischen Kloster"] },
    ],
  },
  sh2_angelicazapata: {
    fact: "Malbec aus Hochlagen-Weinbergen von Catena Zapata. Die lange Reife im Eichenfass verleiht ihm Struktur und Tiefe.",
    quiz: [
      { q: "Wer ist „Angélica Zapata“ im Namen des Angélica Zapata Malbec Alta?", a: "Die Mutter von Nicolás Catena", x: ["Die jüngste Tochter von Nicolás Catena", "Die Ehefrau von Nicolás Catena", "Die erste Önologin Mendozas"] },
    ],
  },
  sh2_luca_malbec: {
    fact: "Malbec aus Hochlagen im Uco Valley, den Laura Catena aus der Familie Catena unter ihrer eigenen Marke erzeugt.",
    quiz: [
      { q: "Auf wen geht der Name von Laura Catenas Weinmarke „Luca“ zurück?", a: "Auf Laura Catenas Sohn", x: ["Auf den Vater von Nicolás Catena", "Auf den ersten Firmengründer, der aus Italien kam", "Auf den ersten Weinbergbesitzer"] },
    ],
  },
  sh2_donapaula_malbec: {
    fact: "Malbec des Weinguts, das die Claro-Gruppe, Eigentümerin von Santa Rita in Chile, in Mendoza gründete.",
    quiz: [
      { q: "Wen ehrt der Name Doña Paula?", a: "Paula Jaraquemada, die im chilenischen Unabhängigkeitskrieg 120 Soldaten versteckte", x: ["Die Mutter des Gründers", "Die Schutzheilige Mendozas", "Die erste Önologin Argentiniens"] },
    ],
  },
  sh2_decero_malbec: {
    fact: "Malbec aus dem Weinberg Remolinos, der in Agrelo, Mendoza, auf zuvor unbebautem Land neu angelegt wurde.",
    quiz: [
      { q: "Was bedeutet „Decero“ im Namen Finca Decero?", a: "Von null an (von Grund auf)", x: ["Zehn Hügel", "Morgentau", "Weißer Fels"] },
    ],
  },
  sh2_crios_malbec: {
    fact: "Malbec von Susana Balbo, der ersten Frau Argentiniens mit einem Abschluss in Önologie.",
    quiz: [
      { q: "Was bedeutet „Crios“ im Namen des Susana Balbo Crios?", a: "Kinder", x: ["Morgendämmerung", "Kristall", "Wind"] },
    ],
  },
  sh2_santajulia_malbec: {
    fact: "Alltagsweinmarke der Familie Zuccardi aus Mendoza. Bekannt ist sie auch für ihre Bio-Linie.",
    quiz: [
      { q: "Nach wem ist Santa Julia benannt?", a: "Nach Julia Zuccardi, einer Tochter der Familie", x: ["Nach der Schutzheiligen Mendozas", "Nach der Mutter des Gründers", "Nach einer Heiligen aus dem italienischen Heimatdorf"] },
    ],
  },
  sh2_vinacobos_bramare: {
    fact: "Malbec von Viña Cobos, das ein bekannter kalifornischer Winemaker 1999 mit argentinischen Freunden in Mendoza gründete.",
    quiz: [
      { q: "Wer aus der kalifornischen Weinszene gründete Viña Cobos?", a: "Paul Hobbs", x: ["Robert Mondavi", "Heidi Barrett", "Helen Turley"] },
    ],
  },
  sh2_yacochuya: {
    fact: "Kraftvoller Malbec aus Hochlagen um 2.000 m in Cafayate, Salta. Die Familie Etchart aus Salta erzeugt ihn gemeinsam mit einem berühmten Berater aus Bordeaux.",
    quiz: [
      { q: "Welcher berühmte Önologie-Berater aus Bordeaux ist Partner bei Yacochuya?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  sh2_colome_torrontes: {
    fact: "Torrontés aus Hochlagen-Weinbergen im Calchaquí-Tal in Salta – Argentiniens weiße Paraderebsorte mit üppigem Blütenduft.",
    quiz: [
      { q: "Welcher Schweizer Unternehmer kaufte Bodega Colomé 2001 und belebte sie wieder?", a: "Donald Hess", x: ["Meindert Pon", "Alexander Vik", "Eduardo Chadwick"] },
    ],
  },
  sh2_noemia: {
    fact: "Wein in winzigen Mengen von alten Malbec-Reben, die in den 1930er-Jahren in Río Negro in Patagonien gepflanzt wurden.",
    quiz: [
      { q: "Auf wen geht der Name Noemía zurück?", a: "Auf Noemi Marone Cinzano aus der italienischen Familie Cinzano, Mitgründerin des Weinguts", x: ["Auf die Legende einer indigenen Prinzessin", "Auf die Frau des ersten Weinbergbesitzers", "Auf die Schutzheilige Patagoniens"] },
    ],
  },
  sh2_findelmundo_malbec: {
    fact: "Malbec eines Weinguts, das seine Weinberge in der Wüste von Neuquén in Patagonien urbar machte. Starker Wind und große Unterschiede zwischen Tag- und Nachttemperatur sorgen für tiefdunkle Weine.",
    quiz: [
      { q: "Was bedeutet „Fin del Mundo“ auf Spanisch?", a: "Ende der Welt", x: ["Land des Windes", "Stern des Südens", "Weiße Wüste"] },
    ],
  },
  sh2_schroeder_saurus: {
    fact: "Malbec von Familia Schroeder, einem Familienweingut, das seine Weinberge auf einem Wüstenplateau in Neuquén, Patagonien, anlegte.",
    quiz: [
      { q: "Woher stammt der Name „Saurus“ der Weine von Familia Schroeder?", a: "Von Dinosaurierfossilien, die beim Bau der Kellerei gefunden wurden", x: ["Vom Spitznamen des Gründers", "Von Eidechsen, die im Weinberg leben", "Von alten Geräten zur Ölförderung"] },
    ],
  },
  sh2_rustenvrede_estate: {
    fact: "Weingut am Fuß des Helderbergs in Stellenbosch, das ausschließlich Rotwein erzeugt. 1977 kaufte es der frühere Rugby-Nationalspieler Jannie Engelbrecht.",
    quiz: [
      { q: "Was bedeutet „Rust en Vrede“ auf Niederländisch?", a: "Ruhe und Frieden", x: ["Roter Hügel", "Wind und Meer", "Alte Mühle"] },
    ],
  },
  sh2_delairegraff_chardonnay: {
    fact: "Weingut auf der Passhöhe des Helshoogte zwischen Stellenbosch und Franschhoek. Auch für sein Hotel und seine Kunstwerke bekannt.",
    quiz: [
      { q: "Welchen Hauptberuf hat Laurence Graff, der Eigentümer von Delaire Graff?", a: "Diamantjuwelier", x: ["Manager einer Hotelkette", "Rennpferdetrainer", "Architekt"] },
    ],
  },
  sh2_beyerskloof_pinotage: {
    fact: "Alltagswein von Beyerskloof, einem auf Pinotage spezialisierten Weingut, gegründet von Winemaker Beyers Truter, dem „König des Pinotage“.",
    quiz: [
      { q: "Auf welchem renommierten Weingut in Stellenbosch war Beyers Truter, Gründer von Beyerskloof, lange für die Weinbereitung verantwortlich?", a: "Kanonkop", x: ["Meerlust", "Vergelegen", "Rustenberg"] },
    ],
  },
  sh2_fairview_goatsdoroam: {
    fact: "Cuvée der auch für Ziegenkäse bekannten Farm Fairview. Der Name geht auf die Anekdote zurück, dass Ziegen in den Weinberg eindrangen und sich die reifsten Trauben aussuchten.",
    quiz: [
      { q: "Den Klang welches französischen Anbaugebiets ahmt der Name „Goats do Roam“ nach?", a: "Côtes du Rhône", x: ["Châteauneuf-du-Pape", "Côte-Rôtie", "Côte de Nuits"] },
    ],
  },
  sh2_kenforrester_fmc: {
    fact: "Spitzen-Weißwein, den Ken Forrester, genannt „Mr. Chenin“, aus Trauben alter Chenin-Blanc-Reben in Stellenbosch erzeugt.",
    quiz: [
      { q: "Wofür steht „FMC“ im Ken Forrester The FMC offiziell?", a: "Forrester Meinert Chenin", x: ["Fine Mature Chenin", "First Muscat Cuvée", "French Model Cellar"] },
    ],
  },
  sh2_demorgenzon_chenin: {
    fact: "Weißwein aus alten Chenin-Blanc-Reben von DeMorgenzon an den Hängen von Stellenbosch. Der Name bedeutet „Morgensonne“.",
    quiz: [
      { q: "Welche Musik läuft bei DeMorgenzon Tag und Nacht in Weinbergen und Keller?", a: "Barockmusik", x: ["Jazz", "Afrikanische Trommelmusik", "Rockmusik"] },
    ],
  },
  sh2_porseleinberg: {
    fact: "Wein, den Boekenhoutskloof aus biologisch angebautem Syrah im Swartland erzeugt. Der Winemaker druckt die Etiketten selbst auf einer alten Druckpresse auf der Farm.",
    quiz: [
      { q: "Was bedeutet „Porseleinberg“ auf Afrikaans?", a: "Porzellanberg", x: ["Silberfluss", "Windhügel", "Weißer Sandstrand"] },
    ],
  },
  sh2_sadie_palladius: {
    fact: "Weiße Cuvée, die Eben Sadie aus verschiedenen Rebsorten alter Reben aus dem ganzen Swartland verschneidet. Sie setzte den Maßstab für weiße Cuvées in Südafrika.",
    quiz: [
      { q: "Was haben die Namen der beiden Aushängeschilder von Sadie Family, „Palladius“ und „Columella“, gemeinsam?", a: "Beide waren antike römische Autoren, die über Landwirtschaft schrieben", x: ["Beide waren römische Kaiser", "Beide sind Götter der griechischen Mythologie", "Beide sind Berge im Swartland"] },
    ],
  },
  sh2_allesverloren_tintabarocca: {
    fact: "Rotwein aus portugiesischen Rebsorten von einer alten Familienfarm in Riebeek-Kasteel im Swartland. Bekannt auch für seinen Likörwein im Portweinstil.",
    quiz: [
      { q: "Was bedeutet der Farmname „Allesverloren“?", a: "Alles verloren", x: ["Endlose Weinberge", "Verlorenes Schaf", "Späte Lese"] },
    ],
  },
  sh2_grootconstantia_gouverneurs: {
    fact: "Bordeaux-Cuvée von Groot Constantia, dem ältesten Weingut Südafrikas, gegründet 1685.",
    quiz: [
      { q: "Wer gründete die Farm Groot Constantia?", a: "Kap-Gouverneur Simon van der Stel", x: ["Jan van Riebeeck, Gründer von Kapstadt", "Simons Sohn Willem Adriaan van der Stel", "Bergbaumagnat Cecil Rhodes"] },
    ],
  },
  sh2_kleinconstantia_sb: {
    fact: "Sauvignon Blanc von Klein Constantia – berühmt für den Vin de Constance – von den meeresbrisenumwehten Hängen von Constantia.",
    quiz: [
      { q: "In welcher Beziehung standen Klein Constantia und Groot Constantia ursprünglich?", a: "Beide entstanden durch Teilung der 1685 gegründeten Farm Constantia", x: ["Zwei Brüder gründeten sie getrennt voneinander", "Eine Farm kaufte die andere und benannte sie um", "Keine – die Namen sind nur zufällig ähnlich"] },
    ],
  },
  sh2_boschendal_1685: {
    fact: "Chardonnay von Boschendal, der historischen Farm am Eingang des Franschhoek-Tals, die französische Hugenotten urbar machten.",
    quiz: [
      { q: "Wofür steht die „1685“ im Boschendal 1685?", a: "Das Gründungsjahr der Farm Boschendal", x: ["Das Jahr des ersten Weinexports", "Die Höhenlage des Weinbergs (m)", "Die Zahl der gepflanzten Rebstöcke"] },
    ],
  },
  sh2_simonsig_kaapsevonkel: {
    fact: "Südafrikas erster Schaumwein mit Flaschengärung, 1971 von Frans Malan kreiert. Er markiert den Beginn der südafrikanischen „Cap Classique“.",
    quiz: [
      { q: "Was bedeutet „Kaapse Vonkel“ auf Afrikaans?", a: "Funkeln des Kaps", x: ["Stern des Kaps", "Meeresschaum", "Goldener Tau"] },
    ],
  },
  sh2_ernieels_signature: {
    fact: "Bordeaux-Cuvée des Weinguts, das ein weltbekannter Sportstar aus Südafrika am Fuß des Helderbergs in Stellenbosch gründete.",
    quiz: [
      { q: "In welcher Sportart ist Ernie Els, der Gründer von Ernie Els Wines, ein Star?", a: "Golf", x: ["Rugby", "Cricket", "Tennis"] },
    ],
  },
  sh2_glenelly_ladymay: {
    fact: "Cuvée auf Basis von Cabernet Sauvignon aus dem Weingut, das May-Eliane de Lencquesaing, frühere Leiterin eines renommierten Bordeaux-Guts, mit fast 80 Jahren in Stellenbosch gründete. Der Name ist ihr gewidmet.",
    quiz: [
      { q: "Welches Deuxième Cru aus Pauillac leitete May-Eliane de Lencquesaing, die Gründerin von Glenelly, bis 2007?", a: "Château Pichon Longueville Comtesse de Lalande", x: ["Château Pichon Baron", "Château Lynch-Bages", "Château Pontet-Canet"] },
    ],
  },
  sh2_lanzerac_pinotage: {
    fact: "Pinotage von Lanzerac, der historischen Farm in Stellenbosch, die auch als Hotel bekannt ist.",
    quiz: [
      { q: "Welche Premiere der Weingeschichte gelang Lanzerac 1961?", a: "Der erste Wein mit „Pinotage“ als Sortenangabe auf dem Etikett", x: ["Der erste Schraubverschluss Südafrikas", "Der erste Roséwein Südafrikas", "Die erste Bio-Zertifizierung Südafrikas"] },
    ],
  },
  sh2_diemersfontein_pinotage: {
    fact: "Pinotage von Diemersfontein aus Wellington nordöstlich von Kapstadt. Sein weicher Stil mit kräftigen Eichenaromen wurde sehr populär.",
    quiz: [
      { q: "Welchen Spitznamen trägt der Pinotage-Stil, den Diemersfontein erfand und populär machte?", a: "Kaffee-Pinotage", x: ["Vanille-Pinotage", "Rauch-Pinotage", "Kirsch-Pinotage"] },
    ],
  },
  sh2_bouza_tannat: {
    fact: "Tannat eines familiengeführten Boutique-Weinguts bei der Hauptstadt Montevideo. Es machte die Qualität des uruguayischen Tannat international bekannt.",
    quiz: [
      { q: "Was sammelt Bodega Bouza und stellt es auf dem Weingut aus?", a: "Oldtimer", x: ["Alte Weinflaschen", "Gaucho-Sättel", "Moderne Kunst"] },
    ],
  },
  sh2_pisano_rpf: {
    fact: "Tannat der Familie Pisano, Nachfahren italienischer Einwanderer, die ihr Weingut in Canelones seit Generationen führen.",
    quiz: [
      { q: "Wofür steht „RPF“ im Pisano RPF?", a: "Reserva Personal de la Familia (Privatreserve der Familie)", x: ["Red Premium Fruit", "Río de la Plata Finca", "Eine Parzellennummer des Weinbergs"] },
    ],
  },
  sh2_mercian_kikyogahara: {
    fact: "Aushängeschild-Rotwein von Château Mercian aus Merlot vom Kikyogahara-Hochplateau in Shiojiri, Nagano. Er machte das Potenzial japanischen Merlots weltweit bekannt.",
    quiz: [
      { q: "Zu welchem japanischen Getränkekonzern gehört Château Mercian?", a: "Kirin", x: ["Suntory", "Asahi", "Sapporo"] },
    ],
  },
  sh2_suntory_tomi: {
    fact: "Spitzen-Bordeaux-Cuvée, die Suntory nur aus den besten Trauben des Weinguts Tomi no Oka in Yamanashi erzeugt.",
    quiz: [
      { q: "Welches Grand-Cru-Classé-Château in Saint-Julien kaufte Suntory, der Erzeuger des Tomi, 1983?", a: "Château Lagrange", x: ["Château Talbot", "Château Beychevelle", "Château Gruaud Larose"] },
    ],
  },
  sh2_greatwall_cs: {
    fact: "Chinas bekannte Weinmarke (长城), deren Name „Große Mauer“ bedeutet. Den ersten Wein brachte sie Anfang der 1980er-Jahre in Hebei heraus.",
    quiz: [
      { q: "Welcher chinesische Staatskonzern besitzt die Weinmarke Great Wall (长城)?", a: "COFCO", x: ["Changyu", "Tsingtao-Brauerei", "Kweichow Moutai"] },
    ],
  },
  sh2_gracevineyard_chairmans: {
    fact: "Spitzen-Rotwein von Grace Vineyard, dem Familienweingut, das ein Unternehmer aus Hongkong 1997 in der Provinz Shanxi (山西) gründete.",
    quiz: [
      { q: "Was bedeutet der chinesische Name von Grace Vineyard, „怡园“ (Yíyuán)?", a: "Garten der Freude", x: ["Goldener Hügel", "Blauer Fluss", "Drachenwald"] },
    ],
  },
  sh2_helanqingxue_jiabeilan: {
    fact: "Bordeaux-Cuvée eines kleinen Weinguts am Fuß des Helan-Gebirges in Ningxia. Sie gilt als erster Wein, der zeigte, dass China Weltklasse erreichen kann.",
    quiz: [
      { q: "Welche Auszeichnung erhielt der Jahrgang 2009 des Helan Qingxue Jia Bei Lan im Jahr 2011?", a: "International Trophy der Decanter World Wine Awards", x: ["Wine of the Year von Wine Spectator", "100 Punkte von Robert Parker", "Großer Preis der Bordeaux-Weinmesse"] },
    ],
  },
  sh2_silverheights_summit: {
    fact: "Spitzen-Rotwein von Silver Heights, einem Familienweingut am Fuß des Helan-Gebirges in Ningxia. Winemakerin Gao Yuan (Emma Gao) führt es gemeinsam mit ihrer Familie.",
    quiz: [
      { q: "Wo studierte Emma Gao, die Winemakerin von Silver Heights, Önologie?", a: "In Bordeaux, Frankreich", x: ["In Davis, Kalifornien", "In Adelaide, Australien", "In Geisenheim, Deutschland"] },
    ],
  },
  sh2_longdai: {
    fact: "Rotwein aus Weinbergen, die die Eigentümerfamilie eines großen Bordeaux-Hauses in den Hügeln von Penglai auf der Halbinsel Shandong anlegte. Der erste Jahrgang war 2017.",
    quiz: [
      { q: "Die Eigentümerfamilie welches Bordeaux-Premier-Cru erzeugt den Long Dai?", a: "Château Lafite Rothschild", x: ["Château Mouton Rothschild", "Château Margaux", "Château Latour"] },
    ],
  },
  sh2_sula_sb: {
    fact: "Sauvignon Blanc von Indiens führendem Weingut, das der Stanford-Absolvent Rajeev Samant 1999 in Nashik gründete.",
    quiz: [
      { q: "Woher stammt das „Sula“ im Namen Sula Vineyards?", a: "Von Sulabha, der Mutter des Gründers", x: ["Von einer hinduistischen Göttin", "Von einem Fluss bei Nashik", "Von der Tochter des Gründers"] },
    ],
  },
  sh2_grover_lareserve: {
    fact: "Aushängeschild-Rotcuvée von Grover Vineyards, 1988 in den Nandi Hills bei Bengaluru gegründet. Das Weingut gilt als Pionier des indischen Weins.",
    quiz: [
      { q: "Welcher berühmte Önologie-Berater aus Bordeaux beriet Grover Vineyards viele Jahre lang?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
};

export default T;
