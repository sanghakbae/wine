import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  bx_rauzansegla: {
    fact: "1661 gegründetes Deuxième Cru aus Margaux. 1994 kaufte die Familie Wertheimer, Eigentümerin von Chanel, das Château.",
    quiz: [
      { q: "Welches Modehaus kaufte 1994 Château Rauzan-Ségla?", a: "Chanel", x: ["Hermès", "Dior", "Gucci"] },
    ],
  },
  bx_rauzangassies: {
    fact: "Deuxième Cru aus Margaux, das bei der Teilung des alten Rauzan-Guts von Rauzan-Ségla getrennt wurde. Die Familie Quié führt es zusammen mit Croizet-Bages in Pauillac.",
    quiz: [
      { q: "Mit welchem Château aus Margaux bildete Château Rauzan-Gassies ursprünglich ein Gut?", a: "Château Rauzan-Ségla", x: ["Château Brane-Cantenac", "Château Lascombes", "Château Durfort-Vivens"] },
      { q: "Welches Cinquième Cru aus Pauillac führt die Familie Quié neben Château Rauzan-Gassies?", a: "Château Croizet-Bages", x: ["Château Lynch-Moussas", "Château Pédesclaux", "Château Batailley"] },
    ],
  },
  bx_leovillelascases: {
    fact: "Entstand, als das Léoville-Gut, einst eines der größten im Médoc, dreigeteilt wurde. Das Steintor mit der Löwenfigur auf dem Etikett ist der Eingang zum Weinberg „Grand Clos“.",
    quiz: [
      { q: "Welche Figur sitzt auf dem Steintor, das auf dem Etikett von Château Léoville Las Cases abgebildet ist?", a: "Löwe", x: ["Adler", "Pferd", "Glocke"] },
      { q: "Welche Familie führt Château Léoville Las Cases?", a: "Familie Delon", x: ["Familie Barton", "Familie Cuvelier", "Familie Borie"] },
    ],
  },
  bx_leovillepoyferre: {
    fact: "Eines der drei Châteaux, die aus der Teilung des Léoville-Guts hervorgingen. Seit 1920 gehört es der Familie Cuvelier.",
    quiz: [
      { q: "Welche Familie besitzt Château Léoville Poyferré seit 1920?", a: "Familie Cuvelier", x: ["Familie Delon", "Familie Barton", "Familie Cazes"] },
    ],
  },
  bx_leovillebarton: {
    fact: "Die irischstämmige Familie Barton kaufte das Gut 1826 und besitzt es bis heute. Da es kein eigenes Schlossgebäude gibt, wird der Wein im benachbarten Langoa Barton gekeltert.",
    quiz: [
      { q: "Woher stammt die Familie Barton, Eigentümerin von Château Léoville Barton, ursprünglich?", a: "Irland", x: ["Schottland", "Niederlande", "Deutschland"] },
      { q: "In welchem Troisième Cru derselben Familie wird Château Léoville Barton mitgekeltert?", a: "Château Langoa Barton", x: ["Château Lagrange", "Château Talbot", "Château Saint-Pierre"] },
    ],
  },
  bx_durfortvivens: {
    fact: "Deuxième Cru aus Margaux, benannt nach dem mittelalterlichen Adelsgeschlecht Durfort de Duras. Unter Gonzague Lurton wurde es auf biodynamischen Anbau umgestellt.",
    quiz: [
      { q: "Welchen Rang hat Château Durfort-Vivens in der Médoc-Klassifikation von 1855?", a: "Deuxième Cru", x: ["Troisième Cru", "Quatrième Cru", "Cinquième Cru"] },
    ],
  },
  bx_gruaudlarose: {
    fact: "Deuxième Cru aus Saint-Julien, auf dessen Etikett der Spruch „Wein der Könige, König der Weine“ steht. Seit 1997 gehört es der Bordelaiser Groupe Taillan.",
    quiz: [
      { q: "Was bedeutet der Spruch auf dem Etikett von Château Gruaud Larose?", a: "Wein der Könige, König der Weine", x: ["Von Gott geschenkte Tropfen", "Königin des Médoc", "Aus Geduld gekelterter Wein"] },
    ],
  },
  bx_lascombes: {
    fact: "Deuxième Cru aus Margaux, dessen Ruf der in Russland geborene amerikanische Weinautor Alexis Lichine in den 1950er-Jahren nach dem Kauf wiederbelebte.",
    quiz: [
      { q: "Welcher Weinautor kaufte Château Lascombes in den 1950er-Jahren und brachte es wieder zu Ansehen?", a: "Alexis Lichine", x: ["Robert Parker", "Émile Peynaud", "Hugh Johnson"] },
    ],
  },
  bx_branecantenac: {
    fact: "Gut des Baron de Branne, genannt „Napoleon der Reben“, das er aufbaute, nachdem er das heutige Mouton Rothschild verkauft hatte. Heute führt es Henri Lurton.",
    quiz: [
      { q: "Welches Gut in Pauillac hatte Baron de Branne von Château Brane-Cantenac zuvor verkauft?", a: "Das heutige Château Mouton Rothschild", x: ["Das heutige Château Lafite Rothschild", "Das heutige Château Latour", "Das heutige Château Pichon Baron"] },
      { q: "Welchen Beinamen trug Baron de Branne, nach dem Château Brane-Cantenac benannt ist?", a: "Napoleon der Reben", x: ["Maharadscha von Saint-Estèphe", "Papst des Médoc", "König der Weine"] },
    ],
  },
  bx_pichonbaron: {
    fact: "Deuxième Cru aus Pauillac, berühmt für sein märchenhaftes Schloss mit spitzen Türmchen. Seit 1987 gehört es AXA Millésimes, der Weinsparte des Versicherers AXA.",
    quiz: [
      { q: "Wer kaufte Château Pichon Baron 1987?", a: "AXA Millésimes", x: ["LVMH", "Chanel", "Louis Roederer"] },
      { q: "Mit welchem Château bildete Château Pichon Baron ursprünglich ein einziges Gut?", a: "Château Pichon Longueville Comtesse de Lalande", x: ["Château Latour", "Château Lynch-Bages", "Château Pontet-Canet"] },
    ],
  },
  bx_pichoncomtesse: {
    fact: "Benannt nach der Tochter Virginie, die einen Teil des Pichon-Guts erbte und den Comte de Lalande heiratete. 2007 kaufte das Champagnerhaus Louis Roederer das Château.",
    quiz: [
      { q: "Welches Champagnerhaus übernahm 2007 Château Pichon Longueville Comtesse de Lalande?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  bx_ducrubeaucaillou: {
    fact: "„Beaucaillou“ bedeutet „schöne Kiesel“ und meint den Kieshügel am Ufer der Gironde. Seit 1941 gehört das Gut der Familie Borie.",
    quiz: [
      { q: "Was bedeutet „Beaucaillou“ im Namen von Château Ducru-Beaucaillou?", a: "Schöne Kiesel", x: ["Schöner Hügel", "Alter Turm", "Kleiner Wald"] },
      { q: "Welche Familie besitzt Château Ducru-Beaucaillou seit 1941?", a: "Familie Borie", x: ["Familie Delon", "Familie Barton", "Familie Cuvelier"] },
    ],
  },
  bx_cosdestournel: {
    fact: "Louis-Gaspard d'Estournel, der „Maharadscha von Saint-Estèphe“, war vom Indienhandel so begeistert, dass er seinem Keller orientalische Pagodentürme aufsetzte. Seit 2000 gehört das Gut Michel Reybier.",
    quiz: [
      { q: "Was ist das Besondere am Kellergebäude von Château Cos d'Estournel?", a: "Pagodentürme im indischen Stil", x: ["Mittelalterliche Burgtürme", "Säulen eines griechischen Tempels", "Backsteinhaus im Tudorstil"] },
      { q: "Welchen Beinamen trug Louis-Gaspard d'Estournel, der Gründer von Château Cos d'Estournel?", a: "Maharadscha von Saint-Estèphe", x: ["Napoleon der Reben", "Papst des Médoc", "König der Weine"] },
    ],
  },
  bx_montrose: {
    fact: "Der Name stammt von einem mit rosa Heidekraut bedeckten Hügel („mont rose“). 2006 kauften die französischen Unternehmer Martin und Olivier Bouygues das Gut.",
    quiz: [
      { q: "Woher stammt der Name Château Montrose?", a: "Von einem Hügel voll rosa Heidekraut", x: ["Von einem Rosengarten", "Von einem roten Felsberg", "Vom Namen der Gründertochter"] },
      { q: "Wer kaufte Château Montrose 2006?", a: "Die Brüder Bouygues", x: ["Die Brüder Wertheimer", "Familie Delon", "Familie Cazes"] },
    ],
  },
  bx_kirwan: {
    fact: "Benannt nach dem Iren Mark Kirwan, der das Gut im 18. Jahrhundert ausbaute. Seit 1925 gehört es der Bordelaiser Négociant-Familie Schÿler.",
    quiz: [
      { q: "Welchen Rang hat Château Kirwan in der Médoc-Klassifikation von 1855?", a: "Troisième Cru", x: ["Deuxième Cru", "Quatrième Cru", "Cinquième Cru"] },
    ],
  },
  bx_dissan: {
    fact: "Ein von einem Wassergraben umgebenes Schloss aus dem 17. Jahrhundert. Auf dem Etikett steht der lateinische Spruch „Für die Tafel der Könige und die Altäre der Götter“.",
    quiz: [
      { q: "Was bedeutet der lateinische Spruch auf dem Etikett von Château d'Issan?", a: "Für die Tafel der Könige und die Altäre der Götter", x: ["Gott wohnt im Weinberg", "Geduld macht den Wein", "Nur das Beste"] },
    ],
  },
  bx_lagrange: {
    fact: "Troisième Cru aus Saint-Julien, das 1983 vom japanischen Konzern Suntory gekauft wurde, der Weinberge und Keller von Grund auf erneuerte.",
    quiz: [
      { q: "Welcher japanische Konzern kaufte Château Lagrange 1983?", a: "Suntory", x: ["Kirin", "Asahi", "Sapporo"] },
    ],
  },
  bx_langoabarton: {
    fact: "Château aus dem 18. Jahrhundert, das Hugh Barton 1821 kaufte. In seinem Keller wird auch Léoville Barton gekeltert.",
    quiz: [
      { q: "Welcher Deuxième-Cru-Wein wird im Keller von Château Langoa Barton mitgekeltert?", a: "Château Léoville Barton", x: ["Château Léoville Poyferré", "Château Gruaud Larose", "Château Ducru-Beaucaillou"] },
    ],
  },
  bx_giscours: {
    fact: "Ein weitläufiges Gut, das mit Wäldern und Wiesen mehrere hundert Hektar umfasst. Seit 1995 führt es die Familie des niederländischen Unternehmers Eric Albada Jelgersma.",
    quiz: [
      { q: "Aus welchem Land stammt die Familie Albada Jelgersma, die Château Giscours seit 1995 führt?", a: "Niederlande", x: ["Belgien", "Schweiz", "Großbritannien"] },
      { q: "Welches Château in Margaux führt dieselbe Familie wie Château Giscours?", a: "Château du Tertre", x: ["Château Dauzac", "Château Pouget", "Château Ferrière"] },
    ],
  },
  bx_malescot: {
    fact: "Der Name verbindet Simon Malescot, im 17. Jahrhundert Rechtsberater des Königs, mit dem Comte de Saint-Exupéry, Eigentümer im 19. Jahrhundert. Seit 1955 führt die Familie Zuger das Gut.",
    quiz: [
      { q: "Welches berühmte Buch schrieb ein Autor aus der Familie des Comte de Saint-Exupéry von Château Malescot St. Exupéry?", a: "Der kleine Prinz", x: ["Der Fremde", "Les Misérables", "Die drei Musketiere"] },
    ],
  },
  bx_boydcantenac: {
    fact: "Benannt nach Jacques Boyd, dem das Land im 18. Jahrhundert gehörte. Die Familie Guillemet führt es zusammen mit dem Quatrième Cru Château Pouget.",
    quiz: [
      { q: "Welches Quatrième Cru führt dieselbe Familie wie Château Boyd-Cantenac?", a: "Château Pouget", x: ["Château Talbot", "Château Saint-Pierre", "Château Lafon-Rochet"] },
    ],
  },
  bx_cantenacbrown: {
    fact: "Das vom schottischstämmigen Weinhändler John Lewis Brown errichtete Château im englischen Tudorstil ist ein im Médoc seltener Bau.",
    quiz: [
      { q: "In welchem Baustil ist das Gebäude von Château Cantenac Brown errichtet?", a: "Englischer Tudorstil", x: ["Klassizismus", "Indischer Pagodenstil", "Italienische Renaissance"] },
    ],
  },
  bx_palmer: {
    fact: "Benannt nach dem englischen General Charles Palmer, der in den Napoleonischen Kriegen kämpfte und das Gut 1814 kaufte. Obwohl nur Troisième Cru, wird es über dem Preis der Deuxièmes Crus gehandelt.",
    quiz: [
      { q: "Woher stammte Charles Palmer, nach dem Château Palmer benannt ist?", a: "England", x: ["Irland", "Niederlande", "USA"] },
      { q: "Welche Farbkombination prägt das Etikett von Château Palmer?", a: "Gold auf Schwarz", x: ["Rot auf Weiß", "Silber auf Blau", "Gold auf Grün"] },
    ],
  },
  bx_lalagune: {
    fact: "Das erste Grand Cru Classé, auf das man von Bordeaux aus in Richtung Médoc trifft. Seit 2000 gehört es der Familie Frey, der an der Rhône auch Paul Jaboulet Aîné gehört.",
    quiz: [
      { q: "Welches Weingut an der Rhône führt die Familie Frey, Eigentümerin von Château La Lagune?", a: "Paul Jaboulet Aîné", x: ["Guigal", "Chapoutier", "Château de Beaucastel"] },
    ],
  },
  bx_desmirail: {
    fact: "Troisième Cru aus Margaux, geführt von der Bordelaiser Winzerdynastie Lurton. Zeitweise waren die Weinberge verstreut und nur der Name blieb, bis das Gut wiederbelebt wurde.",
    quiz: [
      { q: "Welchen Rang hat Château Desmirail in der Médoc-Klassifikation von 1855?", a: "Troisième Cru", x: ["Deuxième Cru", "Quatrième Cru", "Cinquième Cru"] },
    ],
  },
  bx_calonsegur: {
    fact: "Der Marquis de Ségur, dem Lafite und Latour gehörten, soll gesagt haben, sein Herz sei in Calon – daher das Herz auf dem Etikett.",
    quiz: [
      { q: "Welches Symbol ziert das Etikett von Château Calon Ségur?", a: "Ein Herz", x: ["Ein Löwe", "Eine Glocke", "Eine Krone"] },
      { q: "Welche Premiers Crus besaß der Marquis de Ségur aus der Herz-Anekdote von Calon Ségur außerdem?", a: "Lafite und Latour", x: ["Margaux und Haut-Brion", "Mouton und Haut-Brion", "Margaux und Mouton"] },
    ],
  },
  bx_ferriere: {
    fact: "Troisième Cru aus Margaux und eines der kleinsten Châteaux der Klassifikation von 1855. Unter Claire Villars-Lurton wird biodynamisch gearbeitet.",
    quiz: [
      { q: "Welchen Rang hat Château Ferrière in der Médoc-Klassifikation von 1855?", a: "Troisième Cru", x: ["Deuxième Cru", "Quatrième Cru", "Cinquième Cru"] },
    ],
  },
  bx_marquisdalesme: {
    fact: "Ursprünglich hieß das Gut „Marquis d'Alesme Becker“. Nach dem Kauf 2006 strich die Familie Perrodo das „Becker“ aus dem Namen und erneuerte das Château.",
    quiz: [
      { q: "Wie hieß Château Marquis d'Alesme früher?", a: "Marquis d'Alesme Becker", x: ["Marquis de Terme", "Malescot St. Exupéry", "Rauzan-Gassies"] },
    ],
  },
  bx_saintpierre: {
    fact: "Quatrième Cru, das Henri Martin, einst Bürgermeister von Saint-Julien, 1982 kaufte. Dieselbe Familie führt auch Château Gloria.",
    quiz: [
      { q: "Welchen Wein aus Saint-Julien führt dieselbe Familie wie Château Saint-Pierre?", a: "Château Gloria", x: ["Château Talbot", "Château Beychevelle", "Château Lagrange"] },
    ],
  },
  bx_talbot: {
    fact: "Soll nach dem englischen General John Talbot benannt sein, der am Ende des Hundertjährigen Kriegs in der Schlacht bei Castillon fiel. Bekannt ist auch der Weißwein „Caillou Blanc“.",
    quiz: [
      { q: "In welchem Krieg kämpfte der englische General John Talbot, auf den der Name Château Talbot zurückgehen soll?", a: "Hundertjähriger Krieg", x: ["Dreißigjähriger Krieg", "Rosenkriege", "Napoleonische Kriege"] },
      { q: "Wie heißt der Weißwein von Château Talbot?", a: "Caillou Blanc", x: ["Pavillon Blanc", "Aile d'Argent", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_branaireducru: {
    fact: "Quatrième Cru aus Saint-Julien, das auf der anderen Straßenseite Château Beychevelle gegenüberliegt. Seit 1988 führt es die Familie Maroteaux.",
    quiz: [
      { q: "Welchen Rang hat Château Branaire-Ducru in der Médoc-Klassifikation von 1855?", a: "Quatrième Cru", x: ["Deuxième Cru", "Troisième Cru", "Cinquième Cru"] },
    ],
  },
  bx_duhartmilon: {
    fact: "Quatrième Cru aus Pauillac in direkter Nachbarschaft zu Lafite Rothschild. 1962 kauften die Rothschilds von Lafite das Gut und brachten es wieder in Form.",
    quiz: [
      { q: "Wer kaufte Château Duhart-Milon 1962?", a: "Die Rothschilds von Lafite Rothschild", x: ["Die Rothschilds von Mouton Rothschild", "AXA Millésimes", "Familie Cazes"] },
    ],
  },
  bx_pouget: {
    fact: "Kleines Quatrième Cru aus Margaux, das die Familie Guillemet zusammen mit dem Troisième Cru Boyd-Cantenac führt.",
    quiz: [
      { q: "Welches Troisième Cru führt dieselbe Familie wie Château Pouget?", a: "Château Boyd-Cantenac", x: ["Château Cantenac Brown", "Château Kirwan", "Château d'Issan"] },
    ],
  },
  bx_latourcarnet: {
    fact: "Mittelalterliche Burg mit Wassergraben und altem Wachturm. 2000 kaufte der Weinunternehmer Bernard Magrez das Gut.",
    quiz: [
      { q: "Wem gehören sowohl Château La Tour Carnet als auch Château Pape Clément?", a: "Bernard Magrez", x: ["Michel Rolland", "Jean-Luc Thunevin", "Gérard Perse"] },
    ],
  },
  bx_lafonrochet: {
    fact: "Quatrième Cru aus Saint-Estèphe, das die Familie Tesseron 1960 kaufte und wiederbelebte. Schlossgebäude und Etikett sind knallgelb und fallen sofort auf.",
    quiz: [
      { q: "Welche Farbe prägt Schlossgebäude und Etikett von Château Lafon-Rochet?", a: "Gelb", x: ["Blau", "Rosa", "Grün"] },
    ],
  },
  bx_beychevelle: {
    fact: "Der Name geht darauf zurück, dass vorbeifahrende Schiffe zu Ehren des Admirals Herzog von Épernon die Segel senkten („baisse voile“). Auch auf dem Etikett ist ein Schiff abgebildet.",
    quiz: [
      { q: "Welche Handlung gab Château Beychevelle seinen Namen?", a: "Die Segel senken", x: ["Den Anker lichten", "Die Glocke läuten", "Die Flagge schwenken"] },
      { q: "Was ist auf dem Etikett von Château Beychevelle abgebildet?", a: "Ein Schiff", x: ["Ein Löwe", "Ein Herz", "Eine Glocke"] },
    ],
  },
  bx_prieurelichine: {
    fact: "Château auf dem Gelände eines ehemaligen Benediktinerpriorats („prieuré“). 1951 kaufte Alexis Lichine das Gut und gab ihm seinen Namen.",
    quiz: [
      { q: "Was bedeutet „Prieuré“ im Namen von Château Prieuré-Lichine?", a: "Kloster", x: ["Festung", "Mühle", "Markt"] },
      { q: "Nach wem ist Château Prieuré-Lichine benannt?", a: "Alexis Lichine", x: ["Robert Mondavi", "Émile Peynaud", "Hugh Barton"] },
    ],
  },
  bx_marquisdeterme: {
    fact: "Quatrième Cru aus Margaux, das den Namen seines Eigentümers aus dem 18. Jahrhundert, des Marquis de Terme, trägt. Seit 1935 gehört es der Familie Sénéclauze.",
    quiz: [
      { q: "Welchen Rang hat Château Marquis de Terme in der Médoc-Klassifikation von 1855?", a: "Quatrième Cru", x: ["Deuxième Cru", "Troisième Cru", "Cinquième Cru"] },
    ],
  },
  bx_pontetcanet: {
    fact: "Cinquième Cru aus Pauillac, das früh auf biodynamischen Anbau umstellte und seine Weinberge mit Pferdepflügen bearbeitet. Seit 1975 gehört es der Familie Tesseron.",
    quiz: [
      { q: "Was setzt Château Pontet-Canet statt Traktoren bei der Bodenbearbeitung im Weinberg ein?", a: "Pferde", x: ["Ochsen", "Esel", "Roboter"] },
      { q: "Welche Familie besitzt Château Pontet-Canet seit 1975?", a: "Familie Tesseron", x: ["Familie Cazes", "Familie Borie", "Familie Delon"] },
    ],
  },
  bx_batailley: {
    fact: "Der Name soll auf eine Schlacht zurückgehen, die hier im Hundertjährigen Krieg geschlagen wurde. 1942 wurde Haut-Batailley abgetrennt; geführt wird das Gut von der Familie Castéja.",
    quiz: [
      { q: "Welches benachbarte Cinquième Cru wurde von Château Batailley abgetrennt?", a: "Château Haut-Batailley", x: ["Château Grand-Puy-Lacoste", "Château Lynch-Moussas", "Château d'Armailhac"] },
    ],
  },
  bx_hautbatailley: {
    fact: "Cinquième Cru aus Pauillac, das 1942 vom Batailley-Gut abgetrennt wurde. 2017 kaufte es die Familie Cazes, Eigentümerin von Lynch-Bages.",
    quiz: [
      { q: "Welche Familie kaufte Château Haut-Batailley 2017?", a: "Familie Cazes", x: ["Familie Tesseron", "Familie Castéja", "Familie Delon"] },
    ],
  },
  bx_grandpuylacoste: {
    fact: "„Puy“ bedeutet Hügel: Das Gut liegt auf einer Kieskuppe im Hinterland von Pauillac. Seit 1978 führt es die Familie Borie.",
    quiz: [
      { q: "Was bedeutet „Puy“ im Namen von Château Grand-Puy-Lacoste?", a: "Hügel", x: ["Brunnen", "Wald", "Fluss"] },
    ],
  },
  bx_grandpuyducasse: {
    fact: "Cinquième Cru, dessen Weinberge über ganz Pauillac verstreut sind, während das Schlossgebäude am Flussufer im Ort Pauillac steht.",
    quiz: [
      { q: "Welchen Rang hat Château Grand-Puy Ducasse in der Médoc-Klassifikation von 1855?", a: "Cinquième Cru", x: ["Deuxième Cru", "Troisième Cru", "Quatrième Cru"] },
    ],
  },
  bx_lynchbages: {
    fact: "Benannt nach der irischstämmigen Familie Lynch, der es einst gehörte. Seit 1939 führt es die Familie Cazes, und es trägt den Beinamen „Latour des kleinen Mannes“.",
    quiz: [
      { q: "Welchen Beinamen trägt Château Lynch-Bages?", a: "Latour des kleinen Mannes", x: ["Versailles des Médoc", "Maharadscha von Saint-Estèphe", "Juwel von Pomerol"] },
      { q: "Welche Familie führt Château Lynch-Bages seit 1939?", a: "Familie Cazes", x: ["Familie Lynch", "Familie Borie", "Familie Tesseron"] },
    ],
  },
  bx_lynchmoussas: {
    fact: "Wie Lynch-Bages gehörte auch dieses Gut einst der irischstämmigen Familie Lynch. Heute führt es die Familie Castéja, der auch Château Batailley gehört.",
    quiz: [
      { q: "Welches Cinquième Cru führt die Familie Castéja neben Château Lynch-Moussas?", a: "Château Batailley", x: ["Château Haut-Batailley", "Château Clerc Milon", "Château Pédesclaux"] },
    ],
  },
  bx_dauzac: {
    fact: "Cinquième Cru aus Margaux, berühmt als Ort, an dem Ende des 19. Jahrhunderts die Bordeauxbrühe (Mischung aus Kupfersulfat und Kalk) gegen Pilzkrankheiten der Reben erstmals erprobt wurde.",
    quiz: [
      { q: "Welches Pflanzenschutzmittel soll auf Château Dauzac erstmals erprobt worden sein?", a: "Bordeauxbrühe", x: ["Schwefelkalkbrühe", "DDT", "Kaliumpermanganat"] },
    ],
  },
  bx_darmailhac: {
    fact: "1933 kaufte Baron Philippe de Rothschild das Gut. Nach Namen wie „Mouton Baron Philippe“ erhielt es 1989 seinen ursprünglichen Namen d'Armailhac zurück.",
    quiz: [
      { q: "Welchen Namen trug Château d'Armailhac zeitweise?", a: "Château Mouton Baron Philippe", x: ["Château Mouton Cadet", "Château Petit Mouton", "Château Clerc Mouton"] },
    ],
  },
  bx_dutertre: {
    fact: "Liegt auf einem Hügel („tertre“) im Ort Arsac im Westen der Appellation Margaux. Geführt wird es von der Familie Albada Jelgersma, der auch Giscours gehört.",
    quiz: [
      { q: "Welches Troisième Cru in Margaux führt dieselbe Familie wie Château du Tertre?", a: "Château Giscours", x: ["Château Kirwan", "Château d'Issan", "Château Palmer"] },
    ],
  },
  bx_hautbagesliberal: {
    fact: "Trägt den Namen der Familie Libéral, Eigentümerin im 18. Jahrhundert. Claire Villars-Lurton führt es zusammen mit dem Troisième Cru Ferrière und arbeitet biodynamisch.",
    quiz: [
      { q: "Welches Troisième Cru in Margaux wird von derselben Person geführt wie Château Haut-Bages Libéral?", a: "Château Ferrière", x: ["Château Desmirail", "Château Kirwan", "Château d'Issan"] },
    ],
  },
  bx_pedesclaux: {
    fact: "1810 vom Bordelaiser Weinmakler Pierre-Urbain Pédesclaux gegründet. 2009 kaufte Jacky Lorenzetti das Gut und ließ ein modernes, verglastes Gebäude errichten.",
    quiz: [
      { q: "Welcher Unternehmer kaufte Château Pédesclaux 2009 und gestaltete es neu?", a: "Jacky Lorenzetti", x: ["Bernard Magrez", "Michel Reybier", "François Pinault"] },
    ],
  },
  bx_belgrave: {
    fact: "Cinquième Cru im Ort Saint-Laurent im Haut-Médoc, geführt vom Bordelaiser Négociant Dourthe.",
    quiz: [
      { q: "Welchen Rang hat Château Belgrave in der Médoc-Klassifikation von 1855?", a: "Cinquième Cru", x: ["Deuxième Cru", "Troisième Cru", "Quatrième Cru"] },
    ],
  },
  bx_camensac: {
    fact: "Cinquième Cru im Ort Saint-Laurent im Haut-Médoc. Zusammen mit den Nachbarn Belgrave und La Tour Carnet ist es eines der drei klassifizierten Châteaux von Saint-Laurent.",
    quiz: [
      { q: "Welches Quatrième Cru liegt wie Château Camensac im Ort Saint-Laurent?", a: "Château La Tour Carnet", x: ["Château Talbot", "Château Saint-Pierre", "Château Pouget"] },
    ],
  },
  bx_coslabory: {
    fact: "Kleines Cinquième Cru direkt neben Cos d'Estournel in Saint-Estèphe, geführt von der Familie Audoy.",
    quiz: [
      { q: "An welches Deuxième Cru in Saint-Estèphe grenzt Château Cos Labory?", a: "Château Cos d'Estournel", x: ["Château Montrose", "Château Calon Ségur", "Château Lafon-Rochet"] },
    ],
  },
  bx_clercmilon: {
    fact: "Cinquième Cru aus Pauillac in Nachbarschaft zu Mouton Rothschild und Lafite Rothschild. 1970 kaufte Baron Philippe de Rothschild das Gut.",
    quiz: [
      { q: "Wer kaufte Château Clerc Milon 1970?", a: "Baron Philippe de Rothschild", x: ["Éric de Rothschild", "Jean-Michel Cazes", "Henri Martin"] },
    ],
  },
  bx_croizetbages: {
    fact: "Der Name verbindet die Brüder Croizet, denen das Land im 18. Jahrhundert gehörte, mit dem Weiler Bages. Geführt wird es von der Familie Quié, der auch Rauzan-Gassies gehört.",
    quiz: [
      { q: "Welches Deuxième Cru in Margaux führt dieselbe Familie wie Château Croizet-Bages?", a: "Château Rauzan-Gassies", x: ["Château Rauzan-Ségla", "Château Brane-Cantenac", "Château Lascombes"] },
    ],
  },
  bx_cantemerle: {
    fact: "Der Name wird als „die Amsel (merle) singt“ gedeutet. Das Château wurde der Klassifikation von 1855 nachträglich hinzugefügt und steht als letztes Cinquième Cru auf der Liste.",
    quiz: [
      { q: "Wie kam Château Cantemerle in die Klassifikation von 1855?", a: "Es wurde nachträglich hinzugefügt", x: ["Es wurde vom Premier Cru herabgestuft", "Es wurde ausgelost", "Es stieg 1973 nach einer Neubewertung auf"] },
    ],
  },
  bx_lepin: {
    fact: "Winziger Weinberg, dessen ersten Jahrgang die belgische Familie Thienpont 1979 herausbrachte. Der Name stammt von einer einzelnen Kiefer, die daneben stand.",
    quiz: [
      { q: "Woher stammt der Name Le Pin?", a: "Von einer Kiefer neben dem Weinberg", x: ["Vom Namen des Gründers", "Von einem alten Kloster", "Von einer kleinen Steinbrücke"] },
      { q: "Aus welchem Land stammt die Familie Thienpont, der Le Pin gehört?", a: "Belgien", x: ["Niederlande", "Schweiz", "Luxemburg"] },
    ],
  },
  bx_lafleur: {
    fact: "Kleiner Weinberg direkt neben Pétrus, den die Familie Guinaudeau wie einen Familienhof bewirtschaftet. Für Pomerol ist der Anteil an Cabernet Franc hoch.",
    quiz: [
      { q: "Welche Familie bewirtschaftet Château Lafleur?", a: "Familie Guinaudeau", x: ["Familie Moueix", "Familie Thienpont", "Familie Durantou"] },
    ],
  },
  bx_vcc: {
    fact: "Renommiertes Gut in Pomerol, das die belgische Familie Thienpont 1924 kaufte. Für Pomerol ungewöhnlich ist der hohe Anteil an Cabernet Franc und Cabernet Sauvignon.",
    quiz: [
      { q: "Welche Familie kaufte Vieux Château Certan 1924?", a: "Familie Thienpont", x: ["Familie Moueix", "Familie Guinaudeau", "Familie Nicolas"] },
    ],
  },
  bx_levangile: {
    fact: "Château in Pomerol zwischen Pétrus und Cheval Blanc. 1990 erwarben die Rothschilds von Lafite Anteile und führen seither das Gut.",
    quiz: [
      { q: "Was bedeutet „Évangile“ im Namen von Château L'Évangile?", a: "Evangelium", x: ["Engel", "Kirche", "Pilger"] },
    ],
  },
  bx_laconseillante: {
    fact: "Benannt nach Catherine Conseillan, Eigentümerin im 18. Jahrhundert. Seit 1871 gehört es der Familie Nicolas; violette Kapsel und Etikettschrift sind sein Markenzeichen.",
    quiz: [
      { q: "Welche Farbe hat die typische Kapsel von Château La Conseillante?", a: "Violett", x: ["Gold", "Schwarz", "Weiß"] },
    ],
  },
  bx_trotanoy: {
    fact: "Der Name soll von „trop ennuie“ („zu mühsam“) kommen, weil der harte Boden so schwer zu bearbeiten war. 1953 kaufte Jean-Pierre Moueix das Gut.",
    quiz: [
      { q: "Welcher Négociant kaufte Château Trotanoy 1953?", a: "Jean-Pierre Moueix", x: ["Dourthe", "Cordier", "Baron Philippe de Rothschild"] },
    ],
  },
  bx_egliseclinet: {
    fact: "Benannt nach dem Weinberg neben der Kirche von Pomerol. Seit 1983 führt Denis Durantou das Gut und hat es in die Spitze Pomerols gebracht.",
    quiz: [
      { q: "Was bedeutet „Église“ im Namen von Château L'Église-Clinet?", a: "Kirche", x: ["Festung", "Brunnen", "Platz"] },
    ],
  },
  bx_clinet: {
    fact: "Château in Pomerol, das die Familie Laborde 1998 kaufte und das heute Sohn Ronan Laborde führt. Zum Merlot kommt Cabernet Sauvignon in die Cuvée.",
    quiz: [
      { q: "Welche Familie führt Château Clinet?", a: "Familie Laborde", x: ["Familie Durantou", "Familie Nicolas", "Familie Thienpont"] },
    ],
  },
  bx_gazin: {
    fact: "Im Mittelalter gehörte das Land dem Johanniterorden (Hospitaliter), dessen Kreuz noch heute auf dem Etikett steht. Seit Generationen besitzt es die Familie de Bailliencourt.",
    quiz: [
      { q: "Auf welchen früheren Eigentümer verweist das Kreuz auf dem Etikett von Château Gazin?", a: "Johanniterorden (Hospitaliter)", x: ["Heiliger Stuhl", "Erzbischof von Bordeaux", "Englisches Königshaus"] },
    ],
  },
  bx_nenin: {
    fact: "Château in Pomerol, das die Familie Delon von Léoville Las Cases 1997 kaufte und neu aufbaute.",
    quiz: [
      { q: "Welche Familie kaufte Château Nénin 1997?", a: "Familie Delon", x: ["Familie Thienpont", "Familie Moueix", "Familie Laborde"] },
    ],
  },
  bx_bonpasteur: {
    fact: "Château in Pomerol, das die Familie des weltbekannten Önologen Michel Rolland über Generationen bewirtschaftete. Der Name bedeutet „der gute Hirte“.",
    quiz: [
      { q: "Mit welchem Weinberater ist Château Le Bon Pasteur eng verbunden?", a: "Michel Rolland", x: ["Émile Peynaud", "Stéphane Derenoncourt", "Denis Dubourdieu"] },
    ],
  },
  bx_lafleurpetrus: {
    fact: "Liegt zwischen den Nachbarn Lafleur und Pétrus und verbindet deren Namen. Es gehört der Familie von Jean-Pierre Moueix.",
    quiz: [
      { q: "Welcher Négociant besitzt Château La Fleur-Pétrus?", a: "Jean-Pierre Moueix", x: ["Familie Thienpont", "Familie Guinaudeau", "Domaine Clarence Dillon"] },
    ],
  },
  bx_ausone: {
    fact: "Renommiertes Gut in Saint-Émilion, benannt nach dem römischen Dichter Ausonius aus dem 4. Jahrhundert. Vor der Neuklassifizierung 2022 zog es sich zusammen mit Cheval Blanc freiwillig aus der Klassifikation zurück.",
    quiz: [
      { q: "Nach wem ist Château Ausone benannt?", a: "Dem römischen Dichter Ausonius", x: ["Dem römischen Kaiser Hadrian", "Dem heiligen Émilion", "Karl dem Großen"] },
      { q: "Welche Familie führt Château Ausone?", a: "Familie Vauthier", x: ["Familie Moueix", "Familie de Boüard", "Familie Manoncourt"] },
    ],
  },
  bx_angelus: {
    fact: "Der Name kommt vom Angelusläuten dreier Kirchen, das im Weinberg zu hören ist; auch das Etikett zeigt eine goldene Glocke. 2012 erreichte das Gut den höchsten Rang „A“.",
    quiz: [
      { q: "Welches Symbol trägt das Etikett von Château Angélus?", a: "Glocke", x: ["Engel", "Schlüssel", "Lilie"] },
      { q: "Welches Château stieg 2012 zusammen mit Château Angélus in den höchsten Rang „A“ von Saint-Émilion auf?", a: "Château Pavie", x: ["Château Figeac", "Château Canon", "Château Troplong Mondot"] },
    ],
  },
  bx_pavie: {
    fact: "Gérard Perse kaufte das Gut 1998 und investierte massiv; 2012 stieg es zusammen mit Angélus in den höchsten Rang „A“ von Saint-Émilion auf.",
    quiz: [
      { q: "Wer kaufte Château Pavie 1998?", a: "Gérard Perse", x: ["Hubert de Boüard", "Alain Vauthier", "Bernard Magrez"] },
    ],
  },
  bx_figeac: {
    fact: "Für Saint-Émilion ungewöhnlich machen die beiden Cabernet-Sorten mehr als die Hälfte der Rebfläche aus. Das benachbarte Cheval Blanc wurde im 19. Jahrhundert vom Figeac-Gut abgetrennt.",
    quiz: [
      { q: "Welches berühmte Château entstand im 19. Jahrhundert aus einem abgetrennten Teil des Figeac-Guts?", a: "Château Cheval Blanc", x: ["Château Ausone", "Château Angélus", "Château Pavie"] },
      { q: "In welchem Jahr erreichte Château Figeac den höchsten Rang „A“ von Saint-Émilion?", a: "2022", x: ["2012", "1996", "2006"] },
    ],
  },
  bx_canon: {
    fact: "Premier Grand Cru Classé in Saint-Émilion, benannt nach Jacques Kanon, Eigentümer im 18. Jahrhundert. 1996 kaufte die Familie Wertheimer, Eigentümerin von Chanel, das Gut.",
    quiz: [
      { q: "Wem gehören sowohl Château Canon als auch Rauzan-Ségla in Margaux?", a: "Chanel (Familie Wertheimer)", x: ["LVMH", "AXA Millésimes", "Louis Roederer"] },
    ],
  },
  bx_belairmonange: {
    fact: "2008 kaufte die Familie Moueix das frühere Château Bélair und benannte es zu Ehren von Anne-Adèle Monange aus der Familie um. 2012 wurde das benachbarte Château Magdelaine eingegliedert.",
    quiz: [
      { q: "Welches Château der Familie Moueix wurde 2012 in Château Bélair-Monange eingegliedert?", a: "Château Magdelaine", x: ["Château Canon", "Château Troplong Mondot", "Clos Fourtet"] },
    ],
  },
  bx_troplongmondot: {
    fact: "Liegt auf einem der höchsten Kalksteinhügel von Saint-Émilion. 2006 wurde es Premier Grand Cru Classé, 2017 kaufte es der Rückversicherer SCOR.",
    quiz: [
      { q: "Wer kaufte Château Troplong Mondot 2017?", a: "Rückversicherer SCOR", x: ["AXA Millésimes", "Chanel", "Suntory"] },
    ],
  },
  bx_valandraud: {
    fact: "Der Urvater der „Garagenweine“, den Jean-Luc Thunevin und Murielle Andraud in einer kleinen Garage zu keltern begannen. Erster Jahrgang war 1991, 2012 wurde es Premier Grand Cru Classé.",
    quiz: [
      { q: "Wie nennt man Weine wie Château Valandraud, die in kleinen Garagen in Kleinstmengen entstanden und in den 1990er-Jahren Furore machten?", a: "Garagenweine", x: ["Naturweine", "Supertoskaner", "Orange Wines"] },
      { q: "Wer schuf Château Valandraud?", a: "Jean-Luc Thunevin", x: ["Gérard Perse", "Michel Rolland", "Hubert de Boüard"] },
    ],
  },
  bx_lamondotte: {
    fact: "Aus dem kleinen Weinberg der Grafen von Neipperg kam 1996 der erste Jahrgang. Bei der Neuklassifizierung 2012 stieg es direkt zum Premier Grand Cru Classé auf.",
    quiz: [
      { q: "Welcher Familie gehört La Mondotte?", a: "Familie von Neipperg", x: ["Familie Vauthier", "Familie Moueix", "Familie Bécot"] },
    ],
  },
  bx_tertreroteboeuf: {
    fact: "Der Name bedeutet „Hügel, an dem der Ochse rülpst“ – der Hang war so steil, dass die pflügenden Ochsen keuchten. Auch ohne Klassifizierung erzielt der Wein Spitzenpreise.",
    quiz: [
      { q: "Was bedeutet der Name Château Tertre Rôteboeuf?", a: "Hügel, an dem der Ochse rülpst", x: ["Hügel des Rinderbratens", "Feld des roten Stiers", "Hang, an dem der Bauer ruht"] },
    ],
  },
  bx_beausejourbecot: {
    fact: "Bei der Neuklassifizierung in den 1980er-Jahren wurde es herabgestuft, weil es nicht klassifizierte Parzellen eingegliedert hatte; 1996 erhielt es den Rang Premier Grand Cru Classé zurück. Geführt wird es von der Familie Bécot.",
    quiz: [
      { q: "Welchen Rang verlor Château Beau-Séjour Bécot in den 1980er-Jahren und erhielt ihn 1996 zurück?", a: "Premier Grand Cru Classé", x: ["Cru Bourgeois", "Grand Cru Classé de Graves", "Deuxième Cru von 1855"] },
    ],
  },
  bx_closfourtet: {
    fact: "Liegt direkt vor der Stadtmauer von Saint-Émilion; unter dem Weinberg erstrecken sich Keller in alten Kalksteinbrüchen. 2001 kaufte die Familie Cuvelier das Gut.",
    quiz: [
      { q: "Welche Familie kaufte Clos Fourtet 2001?", a: "Familie Cuvelier", x: ["Familie Lurton", "Familie Bécot", "Familie Perse"] },
    ],
  },
  bx_larcisducasse: {
    fact: "Stammt aus terrassierten Weinbergen an einem Südhang neben Pavie. Bei der Neuklassifizierung 2012 stieg es zum Premier Grand Cru Classé auf.",
    quiz: [
      { q: "In welchem Jahr wurde Château Larcis Ducasse zum Premier Grand Cru Classé?", a: "2012", x: ["1996", "2006", "1955"] },
    ],
  },
  bx_paviemacquin: {
    fact: "Benannt nach Albert Macquin, der nach der Reblauskrise das Pfropfen auf amerikanische Unterlagen in Saint-Émilion verbreitete. 2006 wurde es Premier Grand Cru Classé.",
    quiz: [
      { q: "Wofür ist Albert Macquin bekannt, nach dem Château Pavie Macquin benannt ist?", a: "Er verbreitete das Pfropfen auf amerikanische Unterlagen", x: ["Er erfand die Bordeauxbrühe", "Er erstellte die Klassifikation von 1855", "Er füllte als Erster auf dem Château ab"] },
    ],
  },
  bx_canonlagaffeliere: {
    fact: "Château in Saint-Émilion, das seit 1971 den Grafen von Neipperg gehört. 2012 wurde es Premier Grand Cru Classé.",
    quiz: [
      { q: "Welche Familie besitzt sowohl Château Canon-la-Gaffelière als auch La Mondotte?", a: "Familie von Neipperg", x: ["Familie Wertheimer", "Familie Moueix", "Familie Vauthier"] },
    ],
  },
  bx_missionhautbrion: {
    fact: "Der Name geht auf die Priester einer Missionsgesellschaft (Lazaristen) zurück, die das Land im 17. Jahrhundert bewirtschafteten. 1983 kaufte die Familie Dillon, Eigentümerin des gegenüberliegenden Haut-Brion, das Gut.",
    quiz: [
      { q: "Wer kaufte Château La Mission Haut-Brion 1983?", a: "Domaine Clarence Dillon", x: ["Bernard Magrez", "Familie Cathiard", "Louis Roederer"] },
      { q: "Worauf bezieht sich „Mission“ im Namen von Château La Mission Haut-Brion?", a: "Priester einer Missionsgesellschaft", x: ["Militärischer Feldzug", "Diplomatische Gesandtschaft", "Forschungsexpedition"] },
    ],
  },
  bx_papeclement: {
    fact: "Der Weinberg gehörte Bertrand de Got, Erzbischof von Bordeaux, der 1305 als Clemens V. Papst wurde. Heute führt ihn Bernard Magrez.",
    quiz: [
      { q: "Wohin verlegte Papst Clemens V., nach dem Château Pape Clément benannt ist, den Papstsitz?", a: "Avignon", x: ["Bordeaux", "Lyon", "Reims"] },
    ],
  },
  bx_smithhautlafitte: {
    fact: "Der Name erinnert an den schottischen Händler George Smith aus dem 18. Jahrhundert. 1990 kaufte das frühere Skirennfahrer-Ehepaar Cathiard das Gut; ihre Tochter gründete die Traubenkosmetik „Caudalie“.",
    quiz: [
      { q: "Welche Kosmetikmarke gründete die Tochter der Familie Cathiard von Château Smith Haut Lafitte?", a: "Caudalie", x: ["L’Occitane", "Nuxe", "Biotherm"] },
      { q: "Welchen Beruf übte das Ehepaar Cathiard aus, bevor es Château Smith Haut Lafitte 1990 kaufte?", a: "Skirennfahrer", x: ["Segler", "Radrennfahrer", "Tennisspieler"] },
    ],
  },
  bx_chevalier: {
    fact: "Renommiertes Gut in Pessac-Léognan auf einer Lichtung im Kiefernwald; Rot- wie Weißwein sind in der Graves-Klassifikation vertreten. Seit 1983 führt es die Familie Bernard.",
    quiz: [
      { q: "Welche Weine von Domaine de Chevalier sind in der Graves-Klassifikation vertreten?", a: "Rot- und Weißwein", x: ["Nur Rotwein", "Nur Weißwein", "Nur Süßwein"] },
    ],
  },
  bx_hautbailly: {
    fact: "1998 kaufte der amerikanische Bankier Robert Wilmers das Gut. Es bewahrt einen alten Weinberg mit über 100 Jahre alten Reben verschiedener Sorten im gemischten Satz.",
    quiz: [
      { q: "Aus welchem Land stammte Robert Wilmers, der Château Haut-Bailly 1998 kaufte?", a: "USA", x: ["Großbritannien", "Belgien", "Hongkong"] },
    ],
  },
  bx_malartic: {
    fact: "Benannt nach der Familie des Admirals Comte de Malartic aus dem 18. Jahrhundert; das Etikett zeigt ein Segelschiff. 1997 kaufte die belgische Familie Bonnie das Gut.",
    quiz: [
      { q: "Aus welchem Land stammt die Familie Bonnie, die Château Malartic-Lagravière 1997 kaufte?", a: "Belgien", x: ["Niederlande", "Schweiz", "USA"] },
    ],
  },
  bx_carbonnieux: {
    fact: "Berühmt ist die Anekdote, dass Benediktinermönche dem osmanischen Sultan, der Alkohol verbot, ihren Weißwein als „Mineralwasser von Carbonnieux“ verkauften.",
    quiz: [
      { q: "Unter welchem Namen sollen die Mönche von Château Carbonnieux dem osmanischen Sultan Wein verkauft haben?", a: "Mineralwasser von Carbonnieux", x: ["Weihwasser von Carbonnieux", "Kräutertee von Carbonnieux", "Traubensaft von Carbonnieux"] },
    ],
  },
  bx_lescarmes: {
    fact: "Der Name erinnert an den früheren Weinberg der Karmelitermönche. 2010 kaufte Patrice Pichet das Gut und ließ einen schiffsförmigen Keller nach Entwurf von Philippe Starck bauen.",
    quiz: [
      { q: "Welcher Designer entwarf den neuen Keller von Château Les Carmes Haut-Brion?", a: "Philippe Starck", x: ["Jean Nouvel", "Frank Gehry", "Tadao Ando"] },
    ],
  },
  bx_suduiraut: {
    fact: "Premier Cru aus Sauternes direkt neben d'Yquem. Der Garten soll von André Le Nôtre, dem Gestalter der Gärten von Versailles, stammen; seit 1992 gehört das Gut AXA Millésimes.",
    quiz: [
      { q: "Wem gehört Château Suduiraut seit 1992?", a: "AXA Millésimes", x: ["LVMH", "Domaines Barons de Rothschild", "Domaine Clarence Dillon"] },
    ],
  },
  bx_rieussec: {
    fact: "Premier Cru aus Sauternes im Ort Fargues, Nachbar von d'Yquem, das die Rothschilds von Lafite 1984 kauften.",
    quiz: [
      { q: "Wer kaufte Château Rieussec 1984?", a: "Die Rothschilds von Lafite Rothschild", x: ["AXA Millésimes", "Die Rothschilds von Mouton Rothschild", "LVMH"] },
    ],
  },
  bx_climens: {
    fact: "Premier Cru mit dem Beinamen „Fürst von Barsac“. Der Wein wird zu 100 % aus Sémillon gekeltert, der Weinberg wurde biodynamisch bewirtschaftet.",
    quiz: [
      { q: "Welchen Beinamen trägt Château Climens?", a: "Fürst von Barsac", x: ["Königin von Sauternes", "Versailles des Médoc", "Yquem des kleinen Mannes"] },
    ],
  },
  bx_coutet: {
    fact: "Premier Cru aus Barsac, auf dem noch ein mittelalterlicher Festungsbau steht. Berühmt ist die „Cuvée Madame“, die nur in herausragenden Jahren in kleinen Mengen entsteht.",
    quiz: [
      { q: "Welche Sondercuvée erzeugt Château Coutet nur in herausragenden Jahren?", a: "Cuvée Madame", x: ["Cuvée Louise", "Réserve du Général", "Cuvée Prestige"] },
    ],
  },
  bx_guiraud: {
    fact: "Bio-zertifiziertes Premier Cru aus Sauternes. 2006 kauften es unter anderem Robert Peugeot aus der Familie Peugeot und Olivier Bernard von Domaine de Chevalier.",
    quiz: [
      { q: "Welche Autodynastie beteiligte sich 2006 am Kauf von Château Guiraud?", a: "Familie Peugeot", x: ["Familie Renault", "Familie Citroën", "Familie Michelin"] },
    ],
  },
  bx_latourblanche: {
    fact: "1907 vermachte Eigentümer Daniel Iffla Osiris das Gut dem Staat unter der Bedingung, dass dort eine Schule für Weinbau und Önologie entsteht. Bis heute betreibt es eine Schule des Landwirtschaftsministeriums.",
    quiz: [
      { q: "Wem gehört Château La Tour Blanche?", a: "Französischer Staat (Landwirtschaftsministerium)", x: ["Universität Bordeaux", "Stadt Bordeaux", "Winzerverband von Sauternes"] },
    ],
  },
  bx_lafauriepeyraguey: {
    fact: "2014 kaufte Silvio Denz, Chef der Kristallmarke Lalique, das Gut und eröffnete im Château ein Lalique-Hotel mit Restaurant.",
    quiz: [
      { q: "Mit welcher Kristallmarke ist Château Lafaurie-Peyraguey verbunden?", a: "Lalique", x: ["Baccarat", "Swarovski", "Riedel"] },
    ],
  },
  bx_fargues: {
    fact: "Seit dem 15. Jahrhundert im Besitz der Familie Lur-Saluces, der lange auch d'Yquem gehörte. Obwohl nicht klassifiziert, gilt der Wein als Sauternes, der d'Yquem nahekommt.",
    quiz: [
      { q: "Welches Premier Cru Supérieur aus Sauternes besaß die Familie Lur-Saluces von Château de Fargues lange Zeit?", a: "Château d'Yquem", x: ["Château Suduiraut", "Château Climens", "Château Rieussec"] },
    ],
  },
  bx_sociandomallet: {
    fact: "Der Négociant Jean Gautreau kaufte das Gut 1969 und machte daraus einen Wein auf dem Niveau der klassifizierten Châteaux. An der Cru-Bourgeois-Bewertung nimmt es nicht teil und verkauft sich allein über seinen Namen.",
    quiz: [
      { q: "Wer kaufte Château Sociando-Mallet 1969 und baute es auf?", a: "Jean Gautreau", x: ["Henri Martin", "Jean-Michel Cazes", "Alexis Lichine"] },
    ],
  },
  bx_chassespleen: {
    fact: "Der Name bedeutet „vertreibt die Schwermut (spleen)“ und soll auf Lord Byron oder Baudelaire zurückgehen. Es gilt als Aushängeschild der Crus Bourgeois.",
    quiz: [
      { q: "Was bedeutet der Name Château Chasse-Spleen?", a: "Vertreibt die Schwermut", x: ["Rast des Jägers", "Leuchtender Hügel", "Wald, der den Wind abhält"] },
    ],
  },
  bx_gloria: {
    fact: "Henri Martin, Bürgermeister von Saint-Julien, schuf das Gut ab den 1940er-Jahren, indem er Parzelle um Parzelle von benachbarten klassifizierten Châteaux kaufte. Ohne Klassifizierung wird es dennoch wie ein Cru Classé geschätzt.",
    quiz: [
      { q: "Wer gründete Château Gloria?", a: "Henri Martin", x: ["Jean Gautreau", "Alexis Lichine", "Philippe de Rothschild"] },
    ],
  },
  bx_phelansegur: {
    fact: "Gut in Saint-Estèphe, das der Ire Bernard Phelan im 19. Jahrhundert aufbaute. Obwohl nicht klassifiziert, wird es auf dem Niveau eines Grand Cru Classé eingeschätzt.",
    quiz: [
      { q: "Woher stammte Bernard Phelan, nach dem Château Phélan Ségur benannt ist?", a: "Irland", x: ["Schottland", "England", "Niederlande"] },
    ],
  },
  bx_potensac: {
    fact: "Château im nördlichen Médoc, geführt von der Familie Delon von Léoville Las Cases und bekannt für sein gutes Preis-Leistungs-Verhältnis.",
    quiz: [
      { q: "Welche Familie führt Château Potensac?", a: "Familie Delon", x: ["Familie Cazes", "Familie Borie", "Familie Cuvelier"] },
    ],
  },
  bx_poujeaux: {
    fact: "Das führende Château in Moulis, das 2008 die Familie Cuvelier kaufte, Eigentümerin von Clos Fourtet in Saint-Émilion.",
    quiz: [
      { q: "Welche Familie besitzt sowohl Château Poujeaux als auch Clos Fourtet in Saint-Émilion?", a: "Familie Cuvelier", x: ["Familie Lurton", "Familie Delon", "Familie Moueix"] },
    ],
  },
  bx_clarke: {
    fact: "Château in Listrac, das Baron Edmond de Rothschild 1973 kaufte und dessen Weinberge er neu bepflanzen ließ.",
    quiz: [
      { q: "Wer kaufte Château Clarke 1973?", a: "Edmond de Rothschild", x: ["Philippe de Rothschild", "Éric de Rothschild", "Clarence Dillon"] },
    ],
  },
  bx_depez: {
    fact: "Château in Saint-Estèphe, das 1995 das Champagnerhaus Louis Roederer kaufte. Später erwarb Roederer auch Pichon Comtesse.",
    quiz: [
      { q: "Welches Champagnerhaus kaufte Château de Pez 1995?", a: "Louis Roederer", x: ["Bollinger", "Veuve Clicquot", "Pol Roger"] },
    ],
  },
  bx_angludet: {
    fact: "Château in Margaux, das die Familie Sichel 1961 kaufte. Die Familie ist auch Miteigentümerin des Troisième Cru Château Palmer.",
    quiz: [
      { q: "An welchem Troisième Cru ist die Familie Sichel von Château d'Angludet als Miteigentümerin beteiligt?", a: "Château Palmer", x: ["Château Giscours", "Château Kirwan", "Château d'Issan"] },
    ],
  },
  bx_ormesdepez: {
    fact: "Château in Saint-Estèphe, das die Familie Cazes, Eigentümerin von Lynch-Bages, seit 1940 führt.",
    quiz: [
      { q: "Welche Familie führt Château Ormes de Pez?", a: "Familie Cazes", x: ["Familie Delon", "Familie Tesseron", "Familie Borie"] },
    ],
  },
  bx_carruades: {
    fact: "Der Zweitwein von Lafite Rothschild. Der Name stammt von den Weinbergen auf dem Carruades-Hügel, die dem Lafite-Gut angegliedert wurden.",
    quiz: [
      { q: "Aus welchem Land kam vor allem die Nachfrage, die die Preise von Carruades de Lafite Ende der 2000er-Jahre in die Höhe trieb?", a: "China", x: ["Japan", "Russland", "Indien"] },
    ],
  },
  bx_pavillonrouge: {
    fact: "Der Zweitwein von Château Margaux, der 1908 erstmals den Namen „Pavillon Rouge“ trug.",
    quiz: [
      { q: "Welcher Weißwein von Château Margaux bildet das Gegenstück zu Pavillon Rouge du Château Margaux?", a: "Pavillon Blanc", x: ["Aile d'Argent", "Caillou Blanc", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_fortsdelatour: {
    fact: "Der Zweitwein von Château Latour, erster Jahrgang 1966. Wie Latour kommt er erst nach ausreichender Reife auf den Markt.",
    quiz: [
      { q: "Welcher war der erste Jahrgang von Les Forts de Latour?", a: "1966", x: ["1945", "1982", "1990"] },
    ],
  },
  bx_petitmouton: {
    fact: "Der Zweitwein von Mouton Rothschild, erstmals in den 1990er-Jahren vorgestellt. Der Weißwein desselben Châteaus heißt „Aile d'Argent“.",
    quiz: [
      { q: "Welchen Weißwein erzeugt das Château, von dem Le Petit Mouton stammt?", a: "Aile d'Argent", x: ["Pavillon Blanc", "Caillou Blanc", "Blanc de Lynch-Bages"] },
    ],
  },
  bx_clarence: {
    fact: "Zweitwein, der 2007 von „Bahans Haut-Brion“ umbenannt wurde – zu Ehren des amerikanischen Bankiers Clarence Dillon, der Haut-Brion 1935 kaufte.",
    quiz: [
      { q: "Wie hieß Le Clarence de Haut-Brion früher?", a: "Bahans Haut-Brion", x: ["La Chapelle de La Mission", "Carruades de Haut-Brion", "Pavillon de Haut-Brion"] },
      { q: "Wen ehrt Le Clarence de Haut-Brion?", a: "Den US-Bankier Clarence Dillon", x: ["Papst Clemens V.", "Den englischen König Karl II.", "Napoleon III."] },
    ],
  },
  bx_alterego: {
    fact: "Kam 1998 als Ersatz für den früheren Zweitwein „Réserve du Général“ heraus. Wie der Name sagt, wird er als „anderes Ich“ von Palmer eigenständig gekeltert.",
    quiz: [
      { q: "Wie hieß der Zweitwein von Château Palmer, bevor es Alter Ego de Palmer gab?", a: "Réserve du Général", x: ["Pavillon Rouge", "Les Forts", "Clos du Marquis"] },
    ],
  },
  bx_petitcheval: {
    fact: "Der Zweitwein von Cheval Blanc, erstmals 1988 vorgestellt.",
    quiz: [
      { q: "Wer kaufte 1998 Château Cheval Blanc, das Le Petit Cheval erzeugt?", a: "Bernard Arnault und Albert Frère", x: ["François Pinault", "Die Brüder Wertheimer", "Die Brüder Bouygues"] },
    ],
  },
  bx_closdumarquis: {
    fact: "Lange galt er als Zweitwein von Léoville Las Cases, seit 2007 wird er jedoch als eigenständiger Wein aus einer separaten Lage erzeugt.",
    quiz: [
      { q: "Welcher Wein wurde 2007 anstelle von Clos du Marquis zum Zweitwein von Léoville Las Cases?", a: "Le Petit Lion du Marquis de Las Cases", x: ["Les Forts de Latour", "Réserve de la Comtesse", "La Croix de Beaucaillou"] },
    ],
  },
  bx_pagodesdecos: {
    fact: "Der Zweitwein von Cos d'Estournel, benannt nach den orientalischen Pagodentürmen auf dem Kellerdach.",
    quiz: [
      { q: "Woher stammt der Name Les Pagodes de Cos?", a: "Von den Pagodentürmen auf dem Kellerdach", x: ["Vom Indien-Reisebericht des Gründers", "Von den Kiefern im Weinberg", "Vom Glockenturm der Dorfkirche"] },
    ],
  },
  bx_carillonangelus: {
    fact: "Der Zweitwein von Angélus. Ein „Carillon“ ist ein Instrument aus mehreren Glocken – passend zu Angélus, dessen Symbol eine Glocke ist.",
    quiz: [
      { q: "Was bedeutet „Carillon“ im Namen Carillon d'Angélus?", a: "Glockenspiel aus mehreren Glocken", x: ["Kleiner Weinberg", "Hirtenflöte", "Klostergarten"] },
    ],
  },
  bx_pavillonblanc: {
    fact: "Die Appellation Margaux gilt nur für Rotwein, daher kommt der Weiße von Château Margaux als „AOC Bordeaux“ auf den Markt. Er wird zu 100 % aus Sauvignon Blanc gekeltert.",
    quiz: [
      { q: "Warum darf Pavillon Blanc du Château Margaux die Herkunftsbezeichnung „Margaux“ nicht tragen?", a: "Weil die AOC Margaux nur Rotwein zulässt", x: ["Weil es ein Zweitwein ist", "Weil kein Eichenfass verwendet wird", "Weil die Trauben zugekauft werden"] },
    ],
  },
  bx_moutoncadet: {
    fact: "Baron Philippe de Rothschild begann 1930, Wein eines schwachen Jahrgangs, der nicht als Mouton Rothschild abgefüllt werden konnte, separat zu verkaufen. „Cadet“ heißt „der Jüngste“ und meint Philippe, den jüngsten Sohn.",
    quiz: [
      { q: "Was bedeutet „Cadet“ im Namen Mouton Cadet?", a: "Der Jüngste", x: ["Der Älteste", "Ritter", "Kleines Schaf"] },
    ],
  },
  bx_montperat: {
    fact: "Bordeaux-Rotwein, der im Manga „Die Tropfen der Götter“ mit der Musik der Rockband Queen verglichen wurde und dadurch in Korea und Japan sehr beliebt wurde.",
    quiz: [
      { q: "Mit welcher Rockband wird Château Mont-Pérat im Manga „Die Tropfen der Götter“ verglichen?", a: "Queen", x: ["The Beatles", "The Rolling Stones", "Led Zeppelin"] },
    ],
  },
};

export default T;
