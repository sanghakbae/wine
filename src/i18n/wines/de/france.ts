import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  fr_latache: {
    fact: "Neben der Romanée-Conti eine der beiden Monopollagen, die die DRC vollständig allein besitzt. Mit gut 6 ha ist sie mehr als dreimal so groß wie die Romanée-Conti.",
    quiz: [
      { q: "Wie nennt man es, wenn wie bei La Tâche eine einzige Domaine einen Weinberg vollständig besitzt?", a: "Monopole", x: ["Climat", "Lieu-dit", "Métayage"] },
    ],
  },
  fr_richebourg_drc: {
    fact: "Gilt als der üppigste und dichteste Grand Cru von Vosne-Romanée. Neben der DRC teilen sich unter anderem Leroy, Anne Gros und Méo-Camuzet die Lage.",
    quiz: [
      { q: "Welche Familie besitzt die Domaine de la Romanée-Conti, die den DRC Richebourg erzeugt, gemeinsam mit der Familie de Villaine?", a: "Familie Leroy", x: ["Familie Rousseau", "Familie de Vogüé", "Familie Lafon"] },
    ],
  },
  fr_rsv_drc: {
    fact: "Der Name geht auf die Abtei Saint-Vivant zurück, die das Land im Mittelalter bewirtschaftete. Die DRC pachtete die Lage 1966 von der Familie Marey-Monge und kaufte sie 1988.",
    quiz: [
      { q: "Woher stammt der Name des DRC Romanée-Saint-Vivant?", a: "Mittelalterliche Abtei Saint-Vivant", x: ["Prinz von Conti im 18. Jahrhundert", "Name eines Generals Napoleons", "Eine Herzogin von Burgund"] },
      { q: "Welcher Familie gehörte die Lage Romanée-Saint-Vivant, die die DRC erst pachtete und schließlich kaufte?", a: "Familie Marey-Monge", x: ["Familie Leroy", "Familie Liger-Belair", "Familie Mommessin"] },
    ],
  },
  fr_grandsechezeaux_drc: {
    fact: "Ein Grand Cru, der verwaltungsmäßig zum Nachbarort Flagey-Echézeaux gehört, aber als Vosne-Romanée gilt. Er ist deutlich kleiner und seltener als Échezeaux.",
    quiz: [
      { q: "Welcher berühmte, von einer Steinmauer umschlossene Grand Cru grenzt direkt an den Weinberg des DRC Grands-Échezeaux?", a: "Clos de Vougeot", x: ["Clos de Tart", "Clos des Lambrays", "Clos de Bèze"] },
    ],
  },
  fr_echezeaux_drc: {
    fact: "Der flächenmäßig größte Grand Cru rund um Vosne-Romanée, in kleine Parzellen unter Dutzenden Besitzern aufgeteilt. Er gilt als Einstieg unter den roten Grands Crus der DRC.",
    quiz: [
      { q: "Welche Aussage über den Grand Cru Échezeaux, aus dem der DRC Échezeaux stammt, ist richtig?", a: "Dutzende Besitzer teilen ihn sich", x: ["Er ist ein Monopole der DRC", "Hier darf nur Weißwein entstehen", "Er wurde in den 1990ern zum Grand Cru erhoben"] },
    ],
  },
  fr_montrachet_drc: {
    fact: "Eine gut 8 ha große Lage, die sich über die Gemeinden Puligny und Chassagne erstreckt und als Quelle des besten Chardonnays der Welt gilt.",
    quiz: [
      { q: "Welcher französische Schriftsteller soll gesagt haben, den Montrachet müsse man mit gezogenem Hut und auf Knien trinken?", a: "Alexandre Dumas", x: ["Victor Hugo", "Honoré de Balzac", "Émile Zola"] },
    ],
  },
  fr_liger_romanee: {
    fact: "Ein Monopole von nicht einmal 1 ha am Hang direkt oberhalb der Romanée-Conti. Anfang der 2000er holte Louis-Michel Liger-Belair die Lage zurück, seither erzeugt die Familie den Wein selbst.",
    quiz: [
      { q: "Welchen Rekord hält La Romanée?", a: "Kleinste AOC Frankreichs", x: ["Älteste AOC Frankreichs", "Größter Grand Cru Burgunds", "Erste Bio-zertifizierte Lage Frankreichs"] },
    ],
  },
  fr_meo_crosparantoux: {
    fact: "Ein 1er Cru, den der „Gott Burgunds“ Henri Jayer aus brachliegendem, mit Topinambur überwuchertem Land rodete und zur Legende machte. Jayer bewirtschaftete Lagen von Méo-Camuzet als Pächter und war Lehrmeister von Jean-Nicolas Méo.",
    quiz: [
      { q: "Welcher als „Gott Burgunds“ verehrte Winzer rodete Cros Parantoux und machte die Lage zur Legende?", a: "Henri Jayer", x: ["Armand Rousseau", "Georges Roumier", "Henri Gouges"] },
    ],
  },
  fr_annegros_cdv: {
    fact: "Clos de Vougeot ist ein 50 ha großer Grand Cru, den Mönche im 12. Jahrhundert mit einer Steinmauer umgaben; heute teilen ihn sich rund 80 Besitzer. Anne Gros bewirtschaftet darin die Parzelle Grand Maupertui.",
    quiz: [
      { q: "Welcher Orden umgab ab dem 12. Jahrhundert den Clos de Vougeot, aus dem Anne Gros’ Clos Vougeot stammt, mit einer Steinmauer?", a: "Zisterzienser", x: ["Cluniazenser", "Jesuiten", "Franziskaner"] },
      { q: "Welche burgundische Weinbruderschaft hat ihren Sitz im Château du Clos de Vougeot?", a: "Chevaliers du Tastevin", x: ["Commanderie du Bontemps de Médoc", "Ordre des Coteaux de Champagne", "Les Compagnons du Beaujolais"] },
    ],
  },
  fr_leroy_musigny: {
    fact: "Von Lalou Bize-Leroy 1988 gegründete Domaine. Von Anfang an biodynamisch bewirtschaftet und mit extrem niedrigen Erträgen, entstehen hier die teuersten Weine Burgunds.",
    quiz: [
      { q: "Wer leitet die Domaine Leroy und war bis 1992 auch Co-Geschäftsführerin der DRC?", a: "Lalou Bize-Leroy", x: ["Anne-Claude Leflaive", "Henri Jayer", "Christophe Roumier"] },
    ],
  },
  fr_vogue_musigny: {
    fact: "Größter Besitzer im Grand Cru Musigny mit fast zwei Dritteln der Fläche. Trauben junger Reben werden nicht als Musigny, sondern herabgestuft als Chambolle-Musigny 1er Cru verkauft.",
    quiz: [
      { q: "Welchen seltenen Wein erzeugt de Vogüé nahezu allein in der Lage Musigny?", a: "Musigny Blanc (Weißwein)", x: ["Musigny Rosé", "Musigny-Schaumwein", "Edelsüßer Musigny aus Edelfäule"] },
    ],
  },
  fr_mugnier_musigny: {
    fact: "Frédéric Mugnier übernahm 1985 die Familiendomaine und führte sie an die Spitze des feinen Chambolle-Stils. 2004 holte er den an Faiveley verpachteten Clos de la Maréchale zurück.",
    quiz: [
      { q: "Welchen Beruf übte Frédéric Mugnier, der die Domaine Jacques-Frédéric Mugnier übernahm, bis Ende der 1990er parallel aus?", a: "Flugzeugpilot", x: ["Arzt", "Anwalt", "Koch"] },
    ],
  },
  fr_roumier_bm: {
    fact: "Von Christophe Roumier geführte Kultdomaine in Chambolle-Musigny. Bonnes-Mares ist ein Grand Cru, der sich über die Gemeinden Chambolle-Musigny und Morey-Saint-Denis erstreckt.",
    quiz: [
      { q: "Wer führt die Domaine Georges Roumier und machte sie zum Kultweingut?", a: "Christophe Roumier", x: ["Eric Rousseau", "Frédéric Mugnier", "Jean-Nicolas Méo"] },
      { q: "Über Chambolle-Musigny und welche weitere Gemeinde erstreckt sich der Grand Cru Bonnes-Mares, aus dem Georges Roumiers Bonnes-Mares stammt?", a: "Morey-Saint-Denis", x: ["Gevrey-Chambertin", "Vosne-Romanée", "Vougeot"] },
    ],
  },
  fr_dujac_cdlr: {
    fact: "1968 von dem Pariser Jacques Seysses in Morey-Saint-Denis gegründete Domaine. Bekannt für die Vergärung ganzer Trauben mitsamt Stielen.",
    quiz: [
      { q: "Wer gründete 1968 die Domaine Dujac?", a: "Jacques Seysses", x: ["Henri Jayer", "Armand Rousseau", "Christophe Roumier"] },
    ],
  },
  fr_ponsot_cdlr: {
    fact: "2008 stoppte Laurent Ponsot persönlich eine New Yorker Auktion, auf der ein Ponsot Clos Saint-Denis 1945 angeboten wurde. Den Wein aus dieser Lage erzeugte Ponsot erstmals 1982.",
    quiz: [
      { q: "Welcher berüchtigte Weinfälscher flog auf, als Laurent Ponsot 2008 gefälschte Ponsot-Weine aus einer Auktion ziehen ließ?", a: "Rudy Kurniawan", x: ["Hardy Rodenstock", "Bernard Madoff", "Frank Abagnale"] },
    ],
  },
  fr_closdetart: {
    fact: "Ein Grand-Cru-Monopole, das seit 1141 nur vier Besitzer hatte: die Abtei Tart, die Familie Marey-Monge, die Familie Mommessin und heute Artémis der Familie Pinault.",
    quiz: [
      { q: "Wer besaß den Clos de Tart von 1141 bis zur Französischen Revolution?", a: "Zisterzienserinnen der Abtei Tart", x: ["Mönche der Abtei Cluny", "Die Herzöge von Burgund", "Der Templerorden"] },
      { q: "Wer kaufte den Clos de Tart nach der Familie Mommessin?", a: "Artémis von François Pinault", x: ["LVMH von Bernard Arnault", "US-Milliardär Stan Kroenke", "Die Brüder Bouygues"] },
    ],
  },
  fr_lambrays: {
    fact: "Grand Cru in Morey-Saint-Denis, der fast vollständig einer einzigen Domaine gehört. Er wurde erst 1981 zum Grand Cru erhoben und 2014 von LVMH gekauft.",
    quiz: [
      { q: "In welchem Jahr wurde der Clos des Lambrays zum Grand Cru erhoben?", a: "1981", x: ["1936", "1961", "2001"] },
      { q: "Welcher Konzern übernahm 2014 den Clos des Lambrays?", a: "LVMH", x: ["Artémis (Familie Pinault)", "Groupe Castel", "Pernod Ricard"] },
    ],
  },
  fr_rousseau_chambertin: {
    fact: "Chambertin ist der „Wein der Könige“, den Napoleon sogar auf seine Feldzüge mitgenommen haben soll. Armand Rousseau gilt als beste Domaine in Gevrey-Chambertin.",
    quiz: [
      { q: "Welche historische Persönlichkeit soll Chambertin, die Lage von Armand Rousseaus Chambertin, am liebsten getrunken haben?", a: "Napoleon", x: ["Ludwig XIV.", "Karl der Große", "Jeanne d’Arc"] },
      { q: "Worauf soll der Name „Chambertin“ zurückgehen?", a: "Feld des Bauern Bertin (Champ de Bertin)", x: ["Kirche einer Abtei Bertin", "Lager des römischen Generals Bertinus", "Altes Wort für „grüner Hügel“"] },
    ],
  },
  fr_rousseau_beze: {
    fact: "Eine der ältesten Lagen Burgunds, im 7. Jahrhundert von Mönchen der Abtei Bèze angelegt. Wein aus dieser Lage darf auch unter dem Namen „Chambertin“ verkauft werden.",
    quiz: [
      { q: "Wer legte den Weinberg Chambertin-Clos de Bèze ursprünglich an?", a: "Mönche der Abtei Bèze im 7. Jahrhundert", x: ["Zisterziensermönche im 12. Jahrhundert", "Der Prinz von Conti im 18. Jahrhundert", "Napoleons Armee im 19. Jahrhundert"] },
      { q: "Welches Privileg genießt Chambertin-Clos de Bèze laut Vorschrift?", a: "Er darf auch als „Chambertin“ verkauft werden", x: ["Er darf „Romanée-Conti“ heißen", "Er darf ohne Jahrgang verkauft werden", "Auch Weißwein darf als Grand Cru verkauft werden"] },
    ],
  },
  fr_bichot_moutonne: {
    fact: "Monopole der Chablis-Domaine Long-Depaquit, die Albert Bichot gehört. Die Lage erstreckt sich über die beiden Chablis Grands Crus Vaudésir und Preuses.",
    quiz: [
      { q: "In welchem Jahr wurde Albert Bichot, der Erzeuger von La Moutonne, gegründet?", a: "1831", x: ["1731", "1797", "1880"] },
    ],
  },
  fr_leflaive_puligny: {
    fact: "Das führende Weißweinhaus in Puligny-Montrachet. In den 1990ern stellte Anne-Claude Leflaive alle Lagen auf biodynamischen Anbau um und prägte damit den ökologischen Weinbau in Burgund.",
    quiz: [
      { q: "Wer führte die Domaine Leflaive in den 1990ern zum biodynamischen Anbau?", a: "Anne-Claude Leflaive", x: ["Lalou Bize-Leroy", "Dominique Lafon", "Jean-François Coche-Dury"] },
    ],
  },
  fr_leflaive_batard: {
    fact: "Grand Cru am Hang direkt unterhalb des Montrachet. Wie bei den Nachbarlagen Chevalier (Ritter) und Pucelles (Jungfrauen) ranken sich um den Namen Geschichten über die Familie eines einstigen Grundherrn.",
    quiz: [
      { q: "Was bedeutet „Bâtard“ in Bâtard-Montrachet?", a: "Bastard (uneheliches Kind)", x: ["Ritter", "Jungfrau", "Mönch"] },
    ],
  },
  fr_cochedury_cc: {
    fact: "Weißer Grand Cru am Hügel von Corton. Der von Coche-Dury wird in so kleinen Mengen erzeugt, dass er als eine der am schwersten erhältlichen Flaschen unter den weißen Burgundern gilt.",
    quiz: [
      { q: "Warum soll Karl der Große der Legende nach am Hügel von Corton weiße Trauben haben pflanzen lassen?", a: "Rotwein färbte seinen weißen Bart rot", x: ["Der Papst hatte Rotwein verboten", "Weiße Trauben brachten mehr Geld", "Der Krieg hatte alle roten Reben vernichtet"] },
    ],
  },
  fr_cochedury_meursault: {
    fact: "Legendärer Erzeuger, dessen einfacher Meursault (Village) zu Preisen gehandelt wird, die andere Domaines für Grands Crus verlangen. Jean-François Coche-Dury begründete den Ruf, sein Sohn Raphaël führt ihn fort.",
    quiz: [
      { q: "Welcher Winzer begründete den Ruf von Coche-Durys Meursault?", a: "Jean-François Coche-Dury", x: ["Henri Jayer", "Dominique Lafon", "Aubert de Villaine"] },
    ],
  },
  fr_bonneau_cc: {
    fact: "Eine seltene Domaine, die nur zwei Grands Crus erzeugt: Corton-Charlemagne und Corton. 2017 kaufte sie der US-Milliardär Stan Kroenke.",
    quiz: [
      { q: "Welches Kultweingut im Napa Valley besitzt der US-Milliardär, der 2017 Bonneau du Martray kaufte?", a: "Screaming Eagle", x: ["Harlan Estate", "Opus One", "Sine Qua Non"] },
    ],
  },
  fr_latour_cc: {
    fact: "Seit 1797 bestehendes Familienunternehmen und einer der größten Besitzer am Hügel von Corton. Die Eichenfässer entstehen bis heute in der eigenen Küferei.",
    quiz: [
      { q: "Welches Château in Aloxe-Corton am Hügel von Corton dient Louis Latour als Stammsitz?", a: "Château Corton Grancey", x: ["Château de Meursault", "Château de Puligny-Montrachet", "Château de Pommard"] },
      { q: "In welchem Jahr beginnt die Geschichte von Louis Latour, dem Erzeuger dieses Corton-Charlemagne?", a: "1797", x: ["1731", "1859", "1920"] },
    ],
  },
  fr_faiveley_cortons: {
    fact: "Grand-Cru-Monopole in Corton, dessen Lagenname den Familiennamen des Erzeugers trägt. Faiveley ist ein Familienunternehmen, das seit Generationen in Nuits-Saint-Georges ansässig ist.",
    quiz: [
      { q: "In welchem Jahr wurde Faiveley, der Erzeuger dieses Weins, in Nuits-Saint-Georges gegründet?", a: "1825", x: ["1731", "1797", "1920"] },
      { q: "Welches Monopole bewirtschaftete Faiveley über 50 Jahre als Pächter, bevor es 2004 an die Eigentümerfamilie Mugnier zurückging?", a: "Clos de la Maréchale", x: ["Clos de Tart", "Clos des Lambrays", "Clos des Ducs"] },
    ],
  },
  fr_drouhin_mouches: {
    fact: "Ein 1er Cru in Beaune, den Maurice Drouhin in den 1920ern Stück für Stück von vielen Besitzern zusammenkaufte. Drouhin ist der größte Besitzer der Lage.",
    quiz: [
      { q: "Welche Insekten sind mit „Mouches“ im Namen Clos des Mouches gemeint?", a: "Bienen", x: ["Schmetterlinge", "Libellen", "Marienkäfer"] },
      { q: "Wo gründete Joseph Drouhin, der Erzeuger des Clos des Mouches, 1987 ein Weingut in den USA?", a: "Oregon", x: ["Napa Valley", "Sonoma", "Washington"] },
    ],
  },
  fr_bouchard_enfant: {
    fact: "Monopole in Beaune-Grèves, das einst Karmelitinnen bewirtschafteten. Der Name geht auf eine Nonne zurück, die die Geburt Ludwigs XIV. vorhergesagt haben soll; nach der Revolution, 1791, kaufte Bouchard die Lage.",
    quiz: [
      { q: "Was bedeutet der Name Vigne de l'Enfant Jésus?", a: "Weinberg des Jesuskindes", x: ["Weinberg der Muttergottes", "Weinberg des Königs", "Weinberg des Abtes"] },
      { q: "Welcher König, dessen Geburt eine Karmelitin vorhergesagt haben soll, ist mit dem Namen Vigne de l'Enfant Jésus verbunden?", a: "Ludwig XIV.", x: ["Ludwig XVI.", "Heinrich IV.", "Napoleon I."] },
    ],
  },
  fr_hospices_rolin: {
    fact: "Wein aus Lagen, die dem 1443 gegründeten Wohltätigkeitshospital Hospices de Beaune gestiftet wurden. Er wird jedes Jahr auf der berühmtesten Wohltätigkeits-Weinauktion der Welt versteigert.",
    quiz: [
      { q: "Wann findet die Wohltätigkeitsauktion statt, auf der die Cuvée Nicolas Rolin der Hospices de Beaune versteigert wird?", a: "Jedes Jahr am dritten Sonntag im November", x: ["Jedes Jahr am ersten Sonntag im September", "Alle fünf Jahre im Frühjahr", "Jedes Jahr am 1. Januar"] },
      { q: "Wie hieß die Ehefrau von Nicolas Rolin, die mit ihm die Hospices de Beaune gründete?", a: "Guigone de Salins", x: ["Madame Clicquot", "Anna von Österreich", "Margarete von Burgund"] },
    ],
  },
  fr_dangerville_ducs: {
    fact: "Volnay-1er-Cru-Monopole, das einst den Herzögen von Burgund gehörte. In den 1920er- und 30er-Jahren war der Marquis d'Angerville zusammen mit Henri Gouges und anderen ein Vorreiter der Abfüllung auf der eigenen Domaine.",
    quiz: [
      { q: "Wer ist mit „Ducs“ im Namen Clos des Ducs gemeint?", a: "Die einstigen Herzöge von Burgund", x: ["Bischöfe der päpstlichen Kurie", "Römische Legionskommandanten", "Mönche eines Klosters"] },
      { q: "Wofür setzte sich die Familie Marquis d'Angerville in den 1920er- und 30er-Jahren mit Kollegen ein?", a: "Selbst abfüllen statt an Négociants verkaufen", x: ["Schaumwein nach Champagner-Methode einführen", "Cabernet Sauvignon in Burgund pflanzen", "Den Schraubverschluss einführen"] },
    ],
  },
  fr_lafon_perrieres: {
    fact: "Führendes Haus in Meursault, das auch ein kleines Stück vom Grand Cru Montrachet besitzt. Perrières, benannt nach einem alten Steinbruch, gilt als bester 1er Cru von Meursault.",
    quiz: [
      { q: "Welches Mitglied der Familie Lafon rief 1923 die „Paulée de Meursault“ ins Leben, das Fest am letzten Tag der „Trois Glorieuses“ im November?", a: "Graf Jules Lafon", x: ["Louis Latour", "Joseph Drouhin", "Henri Jayer"] },
    ],
  },
  fr_fevre_lesclos: {
    fact: "Les Clos ist die größte der Chablis-Grand-Cru-Lagen. William Fèvre gilt als Domaine mit dem größten Besitz an Chablis Grands Crus.",
    quiz: [
      { q: "Wie viele Grand-Cru-Lagen gibt es in Chablis, zu denen auch William Fèvres Les Clos gehört?", a: "7", x: ["3", "12", "33"] },
      { q: "Welches Champagnerhaus übernahm 1998 William Fèvre?", a: "Henriot", x: ["Bollinger", "Taittinger", "Laurent-Perrier"] },
    ],
  },
  fr_raveneau: {
    fact: "Die 1948 von François Raveneau gegründete Chablis-Legende. Durch den Ausbau in alten Eichenfässern entstehen Chablis, die Jahrzehnte überdauern.",
    quiz: [
      { q: "Mit welcher anderen großen Chablis-Familie ist François Raveneau, Gründer von Raveneau, durch Heirat verbunden?", a: "Familie Dauvissat", x: ["Familie Fèvre", "Familie Laroche", "Familie Bichot"] },
    ],
  },
  fr_dauvissat: {
    fact: "Zusammen mit dem verwandten Raveneau gilt die Domaine als Spitze des Chablis. In einer Region, in der Edelstahltanks üblich sind, hält sie am Ausbau im Eichenfass fest.",
    quiz: [
      { q: "Welche Ausbaumethode übernahmen große Chablis-Häuser wie Vincent Dauvissat von der Côte d'Or?", a: "Fassgärung und langes Hefelager", x: ["Kohlensäuremaischung", "Traubentrocknung (Appassimento)", "Solera-Ausbau"] },
    ],
  },
  fr_laroche: {
    fact: "Der Reifekeller von Laroche liegt im Klostergebäude „Obédiencerie“ aus dem 9. Jahrhundert. Hier wurden 877 die Reliquien des heiligen Martin aufbewahrt, die man vor den Normannen aus Tours in Sicherheit gebracht hatte.",
    quiz: [
      { q: "Welchen Heiligen ehrt der Name des Domaine Laroche Chablis Saint Martin?", a: "Heiliger Martin, Bischof von Tours", x: ["Heiliger Bernhard der Zisterzienser", "Heiliger Dionysius, erster Bischof von Paris", "Heilige Jeanne d’Arc"] },
    ],
  },
  fr_fuisse: {
    fact: "Führendes Chardonnay-Haus des Mâconnais. Mit dem Jahrgang 2020 erhielt Pouilly-Fuissé als erste Appellation im Mâconnais 1er-Cru-Lagen.",
    quiz: [
      { q: "Welche Klassifizierung gibt es in Pouilly-Fuissé, der Heimat von Château-Fuissé, seit dem Jahrgang 2020 neu?", a: "Premier Cru", x: ["Grand Cru", "Cru Bourgeois", "Cru Classé"] },
    ],
  },
  fr_lapierre_morgon: {
    fact: "Pionier des Naturweins, fast ganz ohne Schwefelzusatz vinifiziert. Zusammen mit Foillard, Thévenet und Breton zählte Lapierre zur „Viererbande des Beaujolais“.",
    quiz: [
      { q: "Welcher Chemiker und Négociant brachte Marcel Lapierre und die übrige „Viererbande des Beaujolais“ auf die zusatzfreie Vinifikation?", a: "Jules Chauvet", x: ["Émile Peynaud", "Louis Pasteur", "Henri Jayer"] },
    ],
  },
  fr_jacques_mav: {
    fact: "Mit dem Kauf durch Louis Jadot 1996 stieg erstmals ein großes Burgunderhaus in die Beaujolais-Crus ein. Nach burgundischer Art vinifiziert, entsteht hier lagerfähiger Gamay.",
    quiz: [
      { q: "Woher stammt der Name „Moulin-à-Vent“, wo Château des Jacques liegt?", a: "Alte Windmühle auf dem Hügel des Ortes", x: ["Römische Wassermühle", "Name eines windigen Flusses", "Name eines alten Klosters"] },
    ],
  },
  fr_jadot_bjv: {
    fact: "Eine höhere Qualitätsstufe aus ausgewählten Gemeinden im Norden des Beaujolais. Das Etikett trägt das Bacchus-Kopf-Emblem, das Wahrzeichen von Louis Jadot.",
    quiz: [
      { q: "Wessen Kopf zeigt das Emblem auf dem Etikett des Louis Jadot Beaujolais-Villages?", a: "Bacchus, Gott des Weines", x: ["Neptun, Gott des Meeres", "Apollon, Gott der Sonne", "Sankt Vinzenz, Schutzpatron der Winzer"] },
      { q: "Wie viele Crus, die höchste Stufe mit eigenem Gemeindenamen, gibt es im Beaujolais?", a: "10", x: ["3", "7", "22"] },
    ],
  },
  fr_duboeuf_fleurie: {
    fact: "Ein Beaujolais-Cru, so duftig und weich, wie der blumige Name verspricht. Bekannt durch Duboeufs Etiketten mit Blumenmotiven.",
    quiz: [
      { q: "Welchen Beinamen tragen Fleurie-Weine wie Georges Duboeufs Fleurie oft wegen ihres duftigen, eleganten Geschmacks?", a: "Königin des Beaujolais", x: ["König des Beaujolais", "Ritter des Beaujolais", "Mönch des Beaujolais"] },
    ],
  },
  fr_guigal_mouline: {
    fact: "Guigals erster Einzellagenwein aus den amphitheaterartigen Hängen der Côte Blonde. Syrah wird mit etwas Viognier gemeinsam vergoren.",
    quiz: [
      { q: "Unter welchem Spitznamen werden Guigals La Mouline, La Landonne und La Turque zusammengefasst?", a: "La La", x: ["Triple Crown", "Les Trois", "Côte-Rôtie-Trio"] },
      { q: "Welches ist der erste Jahrgang von Guigals La Mouline?", a: "1966", x: ["1946", "1978", "1985"] },
    ],
  },
  fr_guigal_landonne: {
    fact: "Reinsortiger Syrah von den Steilhängen der Côte Brune und der dunkelste, kraftvollste der drei „La La“. Die Lage wurde Stück für Stück von vielen Besitzern zusammengekauft und neu bepflanzt.",
    quiz: [
      { q: "Welches ist der erste Jahrgang von Guigals La Landonne?", a: "1978", x: ["1966", "1985", "1995"] },
    ],
  },
  fr_guigal_turque: {
    fact: "Das Nesthäkchen der „La La“: eine lange brachliegende Lage, die Guigal Anfang der 1980er neu bepflanzte. Obwohl an der Côte Brune gelegen, enthält der Wein etwas Viognier.",
    quiz: [
      { q: "Welches ist der erste Jahrgang von Guigals La Turque?", a: "1985", x: ["1966", "1978", "1999"] },
    ],
  },
  fr_guigal_cdr: {
    fact: "Der bekannte Alltagswein des Hauses, das Étienne Guigal 1946 in Ampuis gründete. Wie es sich für ein Spitzenhaus der nördlichen Rhône gehört, ist der Syrah-Anteil hoch.",
    quiz: [
      { q: "Welches alte Schloss in Côte-Rôtie kaufte Guigal, der Erzeuger dieses Côtes du Rhône, 1995 als Stammsitz?", a: "Château d'Ampuis", x: ["Château-Grillet", "Château Rayas", "Château La Nerthe"] },
      { q: "In welchem Jahr gründete Étienne Guigal das Haus Guigal?", a: "1946", x: ["1808", "1834", "1990"] },
    ],
  },
  fr_chapoutier_belleruche: {
    fact: "Der Alltags-Côtes-du-Rhône von Chapoutier, dem seit 1808 bestehenden Traditionshaus aus Hermitage. Auf einer Seite des Etiketts ist ertastbare Blindenschrift eingeprägt.",
    quiz: [
      { q: "Was bringt Chapoutier seit den 1990ern auf allen Etiketten an, auch auf dem des Belleruche?", a: "Blindenschrift (Braille)", x: ["QR-Code", "Unterschrift des Gründers", "Karte des Weinbergs"] },
    ],
  },
  fr_chapoutier_sizeranne: {
    fact: "Wein aus einer Lage, die von der Familie des blinden Maurice Monier de la Sizeranne gekauft wurde, der eine Braille-Kurzschrift entwickelte. 1994 erhielt dieser Wein als erster ein Etikett in Blindenschrift.",
    quiz: [
      { q: "Wer war Maurice Monier de la Sizeranne, Namensgeber dieses Weins und Anlass für Chapoutiers Braille-Etiketten?", a: "Ein Blinder, der die Blindenschrift verbreitete", x: ["Gründer von Chapoutier", "Bischof am Papstpalast in Avignon", "General Napoleons"] },
    ],
  },
  fr_jaboulet_chapelle: {
    fact: "Rhône-Legende, benannt nach der Kapelle auf dem Gipfel des Hermitage-Hügels. Der 1961er gilt als einer der größten Weine des 20. Jahrhunderts.",
    quiz: [
      { q: "Wonach auf dem Hermitage-Hügel ist La Chapelle benannt?", a: "Kleine Kapelle auf dem Hügelgipfel", x: ["Kathedrale eines alten Klosters", "Königliches Jagdschloss", "Römischer Tempel"] },
      { q: "Welche Familie, Besitzerin von Château La Lagune in Bordeaux, kaufte 2006 Paul Jaboulet Aîné, den Erzeuger von La Chapelle?", a: "Familie Frey", x: ["Familie Perrin", "Familie Guigal", "Familie Rothschild"] },
    ],
  },
  fr_jaboulet_p45: {
    fact: "Der bekannte Alltagswein von Paul Jaboulet Aîné, dem 1834 gegründeten Rhône-Haus. Ein unkomplizierter Côtes du Rhône aus Trauben der südlichen Rhône.",
    quiz: [
      { q: "Was bedeutet der Name Parallèle 45?", a: "Der 45. Breitengrad nahe dem Weingut", x: ["45 Jahre seit der Gründung", "45 Rebsorten", "45 Monate Reifung"] },
    ],
  },
  fr_chave_hermitage: {
    fact: "Die beste Domaine der Rhône, die Weine aus mehreren Parzellen des Hermitage-Hügels zu einer Cuvée vereint. Die Familie Chave erwirbt seit 1865 Lagen in Hermitage.",
    quiz: [
      { q: "Welches Jahr nennt das Etikett von Jean-Louis Chave als Beginn des Weinbaus „vom Vater auf den Sohn“?", a: "1481", x: ["1731", "1808", "1946"] },
    ],
  },
  fr_jamet: {
    fact: "Traditionelle Domaine, die Syrah aus mehreren Parzellen der Côte-Rôtie verschneidet. Mit häufiger Ganztraubengärung gilt sie als Musterbeispiel für würzigen Syrah der nördlichen Rhône.",
    quiz: [
      { q: "Worauf verweist der Name „Côte-Rôtie“ („gerösteter Hang“), unter dem die Domaine Jamet ihren Wein erzeugt?", a: "Steile, sonnendurchglühte Südhänge", x: ["Vulkanascheböden", "Reifung in ausgebrannten Eichenfässern", "Alte, von Waldbrand verkohlte Weinberge"] },
    ],
  },
  fr_clape_cornas: {
    fact: "Die Domaine machte Cornas schon in Zeiten bekannt, als niemand die Appellation kannte, mit traditionell vinifiziertem Syrah. Heute führen Sohn und Enkel das Weingut.",
    quiz: [
      { q: "Was soll der Ortsname „Cornas“, die Heimat von Auguste Clape, bedeuten?", a: "Verbranntes Land (keltisch)", x: ["Steiniger Hügel", "Land des Papstes", "Schwarzer Fluss"] },
    ],
  },
  fr_grillet: {
    fact: "Ein Heiligtum des Viognier, bei dem ein einziges Gut die gesamte AOC umfasst. Markenzeichen ist die schlanke, hohe braune Flasche, die kein anderes französisches Weingut verwendet.",
    quiz: [
      { q: "Was ist das Besondere an der AOC Château-Grillet?", a: "Ein einziges Gut umfasst die gesamte AOC", x: ["Einzige Schaumwein-AOC der Rhône", "Rot- und Weißwein müssen verschnitten werden", "Jährlicher Tribut an den Papst"] },
      { q: "Welcher Besitzer von Château Latour in Bordeaux kaufte 2011 Château-Grillet?", a: "François Pinault", x: ["Bernard Arnault", "Martin Bouygues", "Stan Kroenke"] },
    ],
  },
  fr_vernay_condrieu: {
    fact: "Die Domaine von Georges Vernay, der in den 1960ern den fast verschwundenen Viognier rettete. Man nannte ihn den „Papst von Condrieu“.",
    quiz: [
      { q: "Was widerfuhr den Weinbergen von Condrieu in den 1960ern, als Georges Vernay den Viognier rettete?", a: "Die Fläche schrumpfte auf wenige Hektar", x: ["Die Reblaus wurde erstmals entdeckt", "Sie wurden zum Grand Cru erhoben", "Sie wurden auf Rotwein umgestellt"] },
    ],
  },
  fr_rayas: {
    fact: "Kultwein aus Châteauneuf-du-Pape, reinsortig aus Grenache von waldumsäumten Sandböden. Berühmt auch für den altmodischen Keller und das schlichte Etikett.",
    quiz: [
      { q: "Welche Familie führt Château Rayas seit Generationen?", a: "Familie Reynaud", x: ["Familie Perrin", "Familie Brunier", "Familie Avril"] },
    ],
  },
  fr_closdespapes: {
    fact: "Traditionshaus in Châteauneuf-du-Pape, seit Generationen in den Händen der Familie Avril. Der 2007er wurde vom Wine Spectator auf Platz 1 der „Weine des Jahres“ gesetzt.",
    quiz: [
      { q: "Welche Familie führt Clos des Papes seit Generationen?", a: "Familie Avril", x: ["Familie Reynaud", "Familie Brunier", "Familie Féraud"] },
    ],
  },
  fr_vieuxtelegraphe: {
    fact: "Châteauneuf-du-Pape vom Plateau La Crau, das mit runden Kieseln (Galets) bedeckt ist. Die Familie Brunier bewirtschaftet das Gut seit dem späten 19. Jahrhundert.",
    quiz: [
      { q: "Woher stammt der Name Vieux Télégraphe?", a: "Optischer Telegrafenturm von Chappe (spätes 18. Jh.)", x: ["Telegrafenamt aus dem 19. Jahrhundert", "Glockenturm des Papstpalasts", "Eisenbahn-Signalposten"] },
      { q: "Auf welchem mit runden Kieseln bedeckten Plateau liegt Vieux Télégraphe?", a: "La Crau", x: ["La Nerthe", "Côte Blonde", "Les Bessards"] },
    ],
  },
  fr_pegau: {
    fact: "Traditioneller Châteauneuf-du-Pape unter der Leitung von Paul Féraud und seiner Tochter Laurence. Die Trauben werden mit Stielen vergoren und lange in großen Holzfässern (Foudres) ausgebaut.",
    quiz: [
      { q: "Was bedeutet der Name „Pégau“ der Domaine du Pégau?", a: "Mittelalterlicher Weinkrug aus Ton", x: ["Hut des Papstes", "Kieselreicher Weinberg", "Taubennest"] },
    ],
  },
  fr_lanerthe: {
    fact: "Eines der ältesten Güter in Châteauneuf-du-Pape, bereits in Urkunden des 16. Jahrhunderts erwähnt. Grenache wird mit Syrah und Mourvèdre zu ausgewogenen Weinen verschnitten.",
    quiz: [
      { q: "Was bedeutet der Name „Châteauneuf-du-Pape“, der Heimat von Château La Nerthe?", a: "Neue Burg des Papstes", x: ["Alter Weinberg des Papstes", "Wein des neuen Papstes", "Sommergarten des Papstes"] },
    ],
  },
  fr_bonneau_celestins: {
    fact: "Châteauneuf-du-Pape-Legende, lange in einem engen Keller unter dem Dorf gereift und nur in guten Jahren freigegeben. Nach Henri Bonneaus Tod 2016 führt sein Sohn Marcel das Weingut weiter.",
    quiz: [
      { q: "Welche weitere Cuvée erzeugt Henri Bonneau neben der Réserve des Célestins?", a: "Cuvée Marie Beurrier", x: ["Cuvée da Capo", "Hommage à Jacques Perrin", "La Crau"] },
    ],
  },
  fr_perrin_cdr: {
    fact: "Alltags-Côtes-du-Rhône der Familie Perrin, die Château de Beaucastel führt. Grenache wird mit Syrah und Mourvèdre verschnitten.",
    quiz: [
      { q: "Welchen Provence-Rosé erzeugt die Familie Perrin, Erzeuger dieses Côtes du Rhône, gemeinsam mit Hollywoodstars?", a: "Miraval", x: ["Whispering Angel", "Minuty", "Domaines Ott"] },
    ],
  },
  fr_aqueria_tavel: {
    fact: "Führendes Gut der AOC Tavel, in der nur Rosé erlaubt ist. Farbintensiver und kraftvoller als Provence-Rosé und daher ein guter Speisenbegleiter.",
    quiz: [
      { q: "Über Tavel-Rosés wie Château d'Aqueria heißt es: „Rosé der Könige, ○○ der Rosés“. Was fehlt?", a: "König", x: ["Königin", "Papst", "Kaiser"] },
    ],
  },
  fr_dp_rose: {
    fact: "Der Rosé von Dom Pérignon, nur in guten Jahren erzeugt. Der erste Jahrgang 1959 ging fast vollständig an den Schah von Iran.",
    quiz: [
      { q: "Bei welchem historischen Bankett 1971 wurde mit Dom Pérignon Rosé 1959 angestoßen?", a: "2500-Jahr-Feier des Persischen Reiches", x: ["Eröffnungsdiner der Pariser Weltausstellung", "Amtseinführungsdiner von Präsident Kennedy", "Hochzeit von Fürst Rainier III. von Monaco"] },
    ],
  },
  fr_moet_rose: {
    fact: "Die Rosé-Version des Moët Impérial. Durch Zugabe von rotem Pinot-Noir-Wein entsteht ein rosa Farbton mit Aromen von Erdbeere und Kirsche.",
    quiz: [
      { q: "In welchem Jahr wurde Moët & Chandon, der Erzeuger des Rosé Impérial, gegründet?", a: "1743", x: ["1729", "1772", "1811"] },
    ],
  },
  fr_moet_ice: {
    fact: "2011 als erster Champagner der Welt vorgestellt, der auf Eis getrunken wird. Er ist süß und konzentriert gehalten, damit der Geschmack auch bei schmelzendem Eis nicht verwässert.",
    quiz: [
      { q: "Wie soll man Moët & Chandon Ice Impérial laut Empfehlung genießen?", a: "Im großen Glas mit Eiswürfeln", x: ["Erwärmt trinken", "Halb und halb mit Ginger Ale", "Mit Strohhalm direkt aus der Flasche"] },
    ],
  },
  fr_veuve_lgd: {
    fact: "Die Prestige-Cuvée von Veuve Clicquot. Sie wurde 1972, zum 200-jährigen Bestehen des Hauses, mit dem Jahrgang 1962 erstmals vorgestellt.",
    quiz: [
      { q: "Wen ehrt der Name Veuve Clicquot La Grande Dame („die große Dame“)?", a: "Madame Clicquot", x: ["Marie Antoinette", "Kaiserin Joséphine", "Lily Bollinger"] },
    ],
  },
  fr_veuve_rose: {
    fact: "Rosé aus der Yellow-Label-Cuvée mit Zugabe von Rotwein. Veuve Clicquot gilt als das Haus, das Rosé-Champagner nach diesem Verschnittverfahren als erstes herstellte.",
    quiz: [
      { q: "In welchem Jahr stellte Madame Clicquot erstmals Rosé-Champagner durch Zugabe von Rotwein her, wie beim Veuve Clicquot Rosé?", a: "1818", x: ["1729", "1874", "1921"] },
    ],
  },
  fr_roederer_collection: {
    fact: "Der NV von Louis Roederer, der 2021 den langjährigen Brut Premier ablöste. Er entsteht nach dem Prinzip der „ewigen Reserve“, in der Reserveweine Jahr für Jahr angesammelt werden.",
    quiz: [
      { q: "Was bedeuten Zahlen wie „242“ oder „243“ beim Louis Roederer Collection?", a: "Die wievielte Assemblage seit der Gründung 1776", x: ["Anzahl der Reifemonate", "Anzahl der verschnittenen Weine", "Produzierte Flaschen in Tausend"] },
    ],
  },
  fr_krug_gc: {
    fact: "Krugs Flaggschiff, verschnitten aus über 120 Weinen aus mehr als zehn Jahrgängen. Jede Flasche trägt die Nummer ihrer „Edition“.",
    quiz: [
      { q: "Wer gründete 1843 Krug, den Erzeuger der Grande Cuvée?", a: "Joseph Krug", x: ["Nicolas Ruinart", "Florens-Louis Heidsieck", "Claude Moët"] },
    ],
  },
  fr_krug_mesnil: {
    fact: "Nur aus Chardonnay einer 1,84 ha kleinen, von einer Steinmauer umschlossenen Lage mitten im Dorf Le Mesnil-sur-Oger. Krug kaufte sie 1971 und brachte 1979 den ersten Jahrgang heraus.",
    quiz: [
      { q: "In welchem Jahr wurde die Steinmauer um den Weinberg des Krug Clos du Mesnil errichtet?", a: "1698", x: ["1843", "1971", "1979"] },
    ],
  },
  fr_krug_rose: {
    fact: "Rosé nach Krugs Mehrjahrgangsprinzip, ergänzt um roten Pinot-Noir-Wein. Wie die Grande Cuvée trägt er eine Editionsnummer.",
    quiz: [
      { q: "Welcher Konzern besitzt seit 1999 Krug, den Erzeuger des Krug Rosé?", a: "LVMH", x: ["Kering", "Pernod Ricard", "Groupe Laurent-Perrier"] },
    ],
  },
  fr_bollinger_sc: {
    fact: "Das Flaggschiff von Bollinger, 1829 in Aÿ gegründet. Hoher Pinot-Noir-Anteil und teilweise Fassgärung machen ihn kraftvoll.",
    quiz: [
      { q: "Welche Filmfigur ist für ihre lange Verbindung mit Bollinger Special Cuvée bekannt?", a: "James Bond", x: ["Sherlock Holmes", "Indiana Jones", "Jay Gatsby"] },
      { q: "Welche Chefin von Bollinger sagte, sie trinke Champagner, wenn sie glücklich und wenn sie traurig sei?", a: "Lily Bollinger", x: ["Madame Clicquot", "Louise Pommery", "Coco Chanel"] },
    ],
  },
  fr_bollinger_ga: {
    fact: "Bollingers Jahrgangschampagner, nur in guten Jahren erzeugt. Alle Weine werden in kleinen Eichenfässern vergoren.",
    quiz: [
      { q: "Welchen Verschluss verwendet Bollinger La Grande Année während der langen Flaschenreifung?", a: "Naturkorken", x: ["Kronkorken", "Schraubverschluss", "Glasstopfen"] },
    ],
  },
  fr_bollinger_rd: {
    fact: "Bollingers Meisterwerk: lange auf der Hefe gereift und erst kurz vor der Freigabe degorgiert. Erster Jahrgang ist 1952.",
    quiz: [
      { q: "Wofür steht „R.D.“ bei Bollinger R.D.?", a: "Récemment dégorgé (kürzlich degorgiert)", x: ["Royal Delivery (Hoflieferung)", "Red Dry", "Réserve du Domaine"] },
      { q: "Was tat Bollinger R.D. als Erster in der Geschichte der Champagneretiketten?", a: "Das Degorgierdatum aufs Etikett drucken", x: ["Blindenschrift aufs Etikett prägen", "Direkt auf die Flasche drucken statt Etikett", "Einen QR-Code aufs Etikett setzen"] },
    ],
  },
  fr_salon: {
    fact: "Entstand aus dem Champagner, den Eugène-Aimé Salon Anfang des 20. Jahrhunderts für den eigenen Genuss erzeugte. Nur in herausragenden Jahren produziert, erscheint er nur wenige Dutzend Mal pro Jahrhundert.",
    quiz: [
      { q: "Welche besondere Produktionsregel gilt für Salon?", a: "Nur Chardonnay aus Le Mesnil-sur-Oger, nur in Spitzenjahren", x: ["Jährlich erzeugt, nur als Rosé", "Nur als NV aus mehreren Jahrgängen", "Nur aus Pinot Noir"] },
      { q: "Welches Schwesterhaus grenzt Mauer an Mauer an Salon und gehört ebenfalls zur Gruppe Laurent-Perrier?", a: "Delamotte", x: ["Krug", "Bollinger", "Henriot"] },
    ],
  },
  fr_taittinger_br: {
    fact: "Taittingers Flaggschiff-NV, dank relativ hohem Chardonnay-Anteil leicht und elegant. Er reift in Kreidekellern unter der einstigen Abtei Saint-Nicaise in Reims.",
    quiz: [
      { q: "Welches alte Champagnerhaus, Vorläufer von Taittinger, kaufte Pierre Taittinger 1932 und gab ihm seinen Namen?", a: "Forest-Fourneaux", x: ["Heidsieck Monopole", "Ruinart", "Delamotte"] },
    ],
  },
  fr_taittinger_comtes: {
    fact: "Taittingers Prestige-Cuvée, nur in guten Jahren und ausschließlich aus Grand-Cru-Chardonnay der Côte des Blancs erzeugt. Erster Jahrgang ist 1952.",
    quiz: [
      { q: "Wen ehrt der Name Taittinger Comtes de Champagne?", a: "Thibaut IV., Graf der Champagne und Kreuzfahrer", x: ["Karl der Große", "Napoleon I.", "Heiliger Remigius, Erzbischof von Reims"] },
    ],
  },
  fr_polroger_br: {
    fact: "1849 in Épernay gegründetes Familienhaus. Als Hoflieferant des britischen Königshauses wurde es 2011 auch bei der Hochzeit von Prinz William ausgeschenkt.",
    quiz: [
      { q: "Welchen Spitznamen trägt Pol Roger Brut Réserve in Großbritannien wegen der Farbe seiner Halsfolie?", a: "White Foil", x: ["Gold Foil", "Black Label", "Yellow Label"] },
    ],
  },
  fr_polroger_swc: {
    fact: "Prestige-Cuvée, ab Jahrgang 1975 zu Ehren Churchills erzeugt, der Pol Roger zeitlebens liebte. Kraftvoller, Pinot-Noir-betonter Stil, wie Churchill ihn schätzte.",
    quiz: [
      { q: "Was änderte Pol Roger nach dem Tod des Namensgebers Churchill 1965 an den Etiketten für Großbritannien?", a: "Ein schwarzer Trauerrand um das Etikett", x: ["Ein Churchill-Porträt auf dem Etikett", "Stopp der Produktion in jenem Jahr", "Rot bemalte Flaschen"] },
      { q: "Welchen Namen gab Churchill zu Ehren von Odette Pol-Roger seinem Rennpferd?", a: "Pol Roger", x: ["Champagne", "Victory", "Blenheim"] },
    ],
  },
  fr_lp_lacuvee: {
    fact: "Flaggschiff-NV des 1812 in Tours-sur-Marne gegründeten Hauses. Ein hoher Chardonnay-Anteil sorgt für Klarheit und Frische.",
    quiz: [
      { q: "Wer führte Laurent-Perrier ab 1949 und machte es zu einem Haus von Weltrang?", a: "Bernard de Nonancourt", x: ["Pierre Taittinger", "Lily Bollinger", "Joseph Krug"] },
    ],
  },
  fr_lp_rose: {
    fact: "1968 in einer Flasche mit Wappenschild vorgestellt, die einer Flasche aus der Zeit Heinrichs IV. nachempfunden ist. Reinsortig aus Pinot Noir gilt er als Maßstab für Rosé-Champagner.",
    quiz: [
      { q: "Wie erhält Laurent-Perrier Cuvée Rosé seine rosa Farbe?", a: "Mazeration auf den Pinot-Noir-Schalen", x: ["Zugabe von Rotwein", "Zugabe von Pflanzenfarbstoff", "Lange Reifung im Eichenfass"] },
    ],
  },
  fr_lp_gs: {
    fact: "Laurent-Perriers Spitzencuvée, die aus Weinen dreier herausragender Jahrgänge das „perfekte Jahr“ nachbilden will. Jede Edition trägt eine „Itération“-Nummer.",
    quiz: [
      { q: "Was unterscheidet Laurent-Perrier Grand Siècle von den meisten Prestige-Champagnern?", a: "Verschnitt aus drei herausragenden Jahrgängen", x: ["Nur Trauben eines einzigen Jahres", "Nur als Rosé erzeugt", "10 Jahre Reifung im Eichenfass"] },
      { q: "Welcher König regierte in dem Zeitalter, auf das „Grand Siècle“ („großes Jahrhundert“) verweist?", a: "Ludwig XIV.", x: ["Ludwig XVI.", "Napoleon I.", "Heinrich IV."] },
    ],
  },
  fr_r_ruinart: {
    fact: "Flaggschiff-NV von Ruinart, dem 1729 gegründeten ersten Champagnerhaus. Abgefüllt in eine bauchige Flasche nach dem Vorbild des 18. Jahrhunderts.",
    quiz: [
      { q: "Wie heißen die Kellergewölbe von Ruinart, in denen R de Ruinart reift, also seit der Römerzeit ausgehobene Kreidesteinbrüche?", a: "Crayères", x: ["Cuverie", "Chai", "Bodega"] },
    ],
  },
  fr_dom_ruinart: {
    fact: "Ruinarts Prestige-Cuvée, nur in guten Jahren und ausschließlich aus Grand-Cru-Chardonnay. Erkennungszeichen ist das Goldgelb in der klaren, bauchigen Flasche.",
    quiz: [
      { q: "Welcher Mönch, der seinem Neffen das Champagnergeschäft nahegelegt haben soll, ist Namensgeber von Dom Ruinart?", a: "Dom Thierry Ruinart", x: ["Dom Pierre Pérignon", "Heiliger Bernhard", "Heiliger Remigius"] },
    ],
  },
  fr_pj_grandbrut: {
    fact: "Flaggschiff-NV von Perrier-Jouët, 1811 in Épernay gegründet. Ein hoher Anteil an Pinot Noir und Pinot Meunier sorgt für reiche Frucht.",
    quiz: [
      { q: "Woher stammt der Hausname „Perrier-Jouët“ des Grand Brut?", a: "Nachnamen des Gründerehepaars", x: ["Namen zweier Dörfer", "Vornamen der Gründerbrüder", "Namen zweier Weinberge der Champagne"] },
      { q: "Welche Blume, gemalt vom Jugendstilkünstler Émile Gallé, ist das Symbol von Perrier-Jouët?", a: "Anemone", x: ["Rose", "Lilie", "Tulpe"] },
    ],
  },
  fr_pj_blason: {
    fact: "Rosé-Champagner mit einem Etikett nach dem Vorbild des Familienwappens von Perrier-Jouët. Die Zugabe von rotem Pinot-Noir-Wein bringt Aromen roter Früchte.",
    quiz: [
      { q: "Was bedeutet „Blason“ bei Perrier-Jouët Blason Rosé?", a: "Familienwappen (Wappenschild)", x: ["Rosenblüte", "Königin", "Erste Liebe"] },
    ],
  },
  fr_armand_rose: {
    fact: "Rosé in einer rosa metallisch beschichteten Flasche mit Zinn-Etikett in Pik-Form. 2014 übernahm der Rapper Jay-Z die Marke.",
    quiz: [
      { q: "Welchen Spitznamen trägt Armand de Brignac Rosé wegen der Form seines Zinn-Etiketts?", a: "Ace of Spades", x: ["King of Hearts", "Queen of Diamonds", "Joker"] },
      { q: "Welcher US-Rapper übernahm 2014 Armand de Brignac?", a: "Jay-Z", x: ["Kanye West", "Snoop Dogg", "Drake"] },
    ],
  },
  fr_piper: {
    fact: "Ein Champagner, den man sofort am knallroten Etikett erkennt. Lange Jahre war er offizieller Champagner der Filmfestspiele von Cannes.",
    quiz: [
      { q: "Welcher Königin soll der Gründer von Piper-Heidsieck seine erste Cuvée gewidmet haben?", a: "Marie Antoinette", x: ["Kaiserin Joséphine", "Königin Victoria", "Katharina von Medici"] },
    ],
  },
  fr_charles_heidsieck: {
    fact: "1851 von Charles-Camille Heidsieck gegründetes Haus. Bekannt für einen NV mit ausgeprägter Reife dank großzügigem Anteil an Reserveweinen.",
    quiz: [
      { q: "Was erlebte Charles Heidsieck, der Gründer, der in Amerika „Champagne Charlie“ genannt wurde?", a: "Im Bürgerkrieg als Spion inhaftiert", x: ["Überlebte den Untergang der Titanic", "Trat in Napoleons Armee ein", "Wurde im Goldrausch reich"] },
    ],
  },
  fr_feuillatte: {
    fact: "1976 gegründete Marke, hinter der ein Zusammenschluss von Genossenschaften zahlreicher Winzer steht. Einer der meistverkauften Champagner Frankreichs.",
    quiz: [
      { q: "Was zeichnet den Erzeuger des Nicolas Feuillatte aus?", a: "Genossenschaftsverbund mit Tausenden Winzern", x: ["Adelsfamilie seit dem 17. Jahrhundert", "Monopol-Domaine mit nur einer Lage", "Haus exklusiv für den russischen Zarenhof"] },
    ],
  },
  fr_mumm: {
    fact: "1827 von der aus Deutschland stammenden Familie Mumm in Reims gegründetes Haus. Berühmt für das rote Band, das schräg über das Etikett läuft.",
    quiz: [
      { q: "Wovon ist das rote Band des Mumm Cordon Rouge inspiriert?", a: "Rote Schärpe der Ehrenlegion", x: ["Französische Flagge", "Roter Kardinalshut", "Wappen des Zarenhauses"] },
      { q: "Bei welcher Sportveranstaltung war Mumm Cordon Rouge ab 2000 lange der Podiums-Champagner?", a: "Formel 1", x: ["Tour de France", "Wimbledon", "FIFA-Weltmeisterschaft"] },
    ],
  },
  fr_lanson_black: {
    fact: "Flaggschiff-NV des 1760 in Reims gegründeten Hauses. Ohne malolaktische Gärung bleibt eine frische, apfelartige Säure erhalten.",
    quiz: [
      { q: "Welches Symbol des Hauses prangt am Flaschenhals des Lanson Le Black Label?", a: "Malteserkreuz", x: ["Lilienwappen", "Löwe", "Krone"] },
      { q: "Mit welchem Tennisturnier ist Lanson seit 1977 als offizieller Champagner verbunden?", a: "Wimbledon", x: ["Roland Garros", "US Open", "Australian Open"] },
    ],
  },
  fr_billecart_rose: {
    fact: "Rosé-Champagner, berühmt für seine zarte Lachsfarbe in der klaren Flasche. Einer chardonnaybetonten Cuvée wird etwas roter Pinot-Noir-Wein zugesetzt, was ihn fein macht.",
    quiz: [
      { q: "Woher stammt der Name Billecart-Salmon?", a: "Nachnamen des 1818 verheirateten Gründerpaares", x: ["Lachsfarbe (Salmon) des Rosés", "Namen zweier Dörfer", "Spitznamen der Gründerbrüder"] },
    ],
  },
  fr_selosse_initial: {
    fact: "Ausgangspunkt des Booms der „Winzerchampagner“ aus eigenen Trauben. Die Vergärung im Eichenfass nach burgundischer Art ergibt einen Champagner mit Weincharakter.",
    quiz: [
      { q: "Wer löste als Chef von Jacques Selosse den Boom der Winzerchampagner aus?", a: "Anselme Selosse", x: ["Rémi Krug", "Bernard de Nonancourt", "Charles Philipponnat"] },
      { q: "Was bedeutet „RM“ auf dem Etikett von Winzerchampagnern wie Jacques Selosse?", a: "Winzer mit eigenem Anbau und Ausbau (Récoltant-Manipulant)", x: ["Haus mit Traubenzukauf (Négociant-Manipulant)", "Genossenschaft (Coopérative de Manipulation)", "Händlermarke (Marque d’Acheteur)"] },
    ],
  },
  fr_philipponnat_goisses: {
    fact: "5,5 ha große Lage an einem fast 45 Grad steilen Südhang über der Marne. Wärmer als der Rest der Champagne, bringt sie kraftvolle Champagner hervor.",
    quiz: [
      { q: "Welche Bedeutung hat Philipponnats Clos des Goisses in der Geschichte des Champagners?", a: "Gilt als erster Einzellagen-Champagner", x: ["Erster Rosé-Champagner", "Erster Brut-Champagner", "Erster Blanc de Blancs"] },
    ],
  },
  fr_deutz: {
    fact: "1838 von den aus Deutschland stammenden William Deutz und Pierre-Hubert Geldermann in Aÿ gegründetes Haus. Die drei Rebsorten sind zu gleichen Teilen verschnitten, was für gute Balance sorgt.",
    quiz: [
      { q: "Welches Champagnerhaus übernahm 1993 Deutz?", a: "Louis Roederer", x: ["Moët & Chandon", "Bollinger", "Taittinger"] },
    ],
  },
  fr_henriot: {
    fact: "1808 von Apolline Henriot in Reims gegründetes Familienhaus. Bekannt für einen feinen, chardonnaybetonten Stil.",
    quiz: [
      { q: "Welche beiden burgundischen Traditionshäuser kaufte die Familie Henriot in den 1990ern?", a: "Bouchard Père & Fils und William Fèvre", x: ["Louis Jadot und Joseph Drouhin", "Louis Latour und Faiveley", "Leroy und Leflaive"] },
    ],
  },
  fr_gosset: {
    fact: "Das älteste Weinhaus der Champagne, begonnen 1584 in Aÿ, als Pierre Gosset noch Wein ohne Perlage erzeugte. Die Flasche ist einer historischen Form nachempfunden.",
    quiz: [
      { q: "Welches Gründungsjahr macht Gosset zum ältesten Weinhaus der Champagne?", a: "1584", x: ["1729", "1743", "1811"] },
    ],
  },
  fr_pommery: {
    fact: "Das Reimser Haus, das die verwitwete Madame Louise Pommery groß machte. Berühmt für seine riesigen Keller in verbundenen Kreidesteinbrüchen aus der Römerzeit.",
    quiz: [
      { q: "Welchen Stil stellte Pommery, der Erzeuger des Brut Royal, 1874 erstmals vor und veränderte damit die Champagnergeschichte?", a: "Brut mit kaum Restsüße", x: ["Rosé-Champagner", "Jahrgangschampagner", "Blanc de Blancs"] },
      { q: "Welche Frau führte Pommery, als das Haus den ersten Brut-Champagner vorstellte?", a: "Madame Louise Pommery", x: ["Madame Clicquot", "Lily Bollinger", "Carol Duval-Leroy"] },
    ],
  },
  fr_duval_leroy: {
    fact: "1859 im Dorf Vertus an der Côte des Blancs gegründetes Familienhaus. Als eines der wenigen großen Häuser wird es bis heute von der Gründerfamilie geführt.",
    quiz: [
      { q: "Welche Unternehmerin führt Duval-Leroy seit dem Tod ihres Mannes 1991?", a: "Carol Duval-Leroy", x: ["Lily Bollinger", "Madame Clicquot", "Louise Pommery"] },
    ],
  },
  fr_ayala: {
    fact: "1860 von Edmond de Ayala in Aÿ gegründetes Haus. Schon früh bekannt für trockene Champagner mit wenig Süße.",
    quiz: [
      { q: "Welches Champagnerhaus übernahm 2005 Ayala?", a: "Bollinger", x: ["LVMH", "Louis Roederer", "Taittinger"] },
    ],
  },
  fr_delamotte: {
    fact: "1760 gegründet und damit eines der ältesten Häuser der Champagne. Erzeugt aus Grand-Cru-Chardonnay der Côte des Blancs.",
    quiz: [
      { q: "Welcher legendäre Champagner aus dem Schwesterhaus Mauer an Mauer mit Delamotte entsteht nur in guten Jahren aus Chardonnay eines einzigen Dorfes?", a: "Salon", x: ["Krug Clos du Mesnil", "Dom Ruinart", "Taittinger Comtes de Champagne"] },
    ],
  },
  fr_dagueneau_silex: {
    fact: "Das Aushängeschild von Dagueneau, dem „Enfant terrible der Loire“, der Pouilly-Fumé zur Weltklasse-Region für Sauvignon Blanc machte. Nach seinem Tod bei einem Leichtflugzeugabsturz 2008 führt Sohn Louis-Benjamin das Weingut.",
    quiz: [
      { q: "Worauf verweist der Name „Silex“ von Didier Dagueneau?", a: "Feuersteinböden", x: ["Silbernes Etikett", "Lateinisch für „Stille“", "Name des Hundes des Gründers"] },
    ],
  },
  fr_ladoucette: {
    fact: "Wein der Familie Ladoucette, die das größte Gut in Pouilly-Fumé besitzt. Stammsitz ist das märchenhafte Château du Nozet.",
    quiz: [
      { q: "Welches Schloss ist der Stammsitz der Familie Ladoucette, Erzeuger des de Ladoucette Pouilly-Fumé?", a: "Château du Nozet", x: ["Château de Tracy", "Château-Grillet", "Château de Saumur"] },
    ],
  },
  fr_bourgeois_sancerre: {
    fact: "Der Vorzeige-Sancerre eines Familienweinguts, das seit Generationen im Dorf Chavignol ansässig ist. Gilt als Lehrbuchbeispiel für frischen Sauvignon Blanc.",
    quiz: [
      { q: "Wo gründete Henri Bourgeois im Jahr 2000 auf der Suche nach Sauvignon Blanc das neue Weingut „Clos Henri“?", a: "Marlborough, Neuseeland", x: ["Casablanca Valley, Chile", "Stellenbosch, Südafrika", "Napa Valley, USA"] },
      { q: "Wofür ist das Dorf Chavignol, Sitz von Henri Bourgeois, außerdem berühmt?", a: "Ziegenkäse Crottin de Chavignol", x: ["Austern", "Trüffel", "Senf"] },
    ],
  },
  fr_jolivet_sancerre: {
    fact: "Junges Weingut, das ohne eigene Weinberge als Négociant begann und zu einem Aushängeschild der östlichen Loire wurde. Erzeugt sowohl Sancerre als auch Pouilly-Fumé.",
    quiz: [
      { q: "In welchem Jahr gründete Pascal Jolivet sein Weinunternehmen unter eigenem Namen?", a: "1987", x: ["1808", "1920", "1961"] },
    ],
  },
  fr_vacheron_sancerre: {
    fact: "Familiendomaine mitten im Ort Sancerre. Sauvignon Blanc aus biodynamisch bewirtschafteten Lagen wird parzellenweise getrennt ausgebaut.",
    quiz: [
      { q: "Welcher weitere Wein der Domaine Vacheron genießt in Sancerre ungewöhnlich hohes Ansehen?", a: "Roter Pinot Noir", x: ["Roter Cabernet Sauvignon", "Edelsüßer Wein aus Edelfäule", "Aufgespriteter Likörwein"] },
    ],
  },
  fr_huet_vouvray: {
    fact: "Das führende Chenin-Blanc-Haus in Vouvray. Je nach Jahrgang entstehen aus derselben Lage trockene, halbtrockene und süße Weine.",
    quiz: [
      { q: "Welches ist neben Le Mont und Clos du Bourg die dritte berühmte Einzellage der Domaine Huet?", a: "Le Haut-Lieu", x: ["La Roche aux Moines", "Clos de la Dioterie", "Les Baronnes"] },
    ],
  },
  fr_joly_coulee: {
    fact: "Lage, in der Zisterziensermönche 1130 die ersten Reben pflanzten. Eine der wenigen Monopol-AOCs, bei denen eine Familie die gesamte AOC besitzt.",
    quiz: [
      { q: "Welche Anbaumethode machte Nicolas Joly vom Clos de la Coulée de Serrant als Vorreiter weltweit bekannt?", a: "Biodynamischer Anbau", x: ["Hydrokultur", "Massenanbau mit Bewässerung", "Anbau im Folientunnel"] },
    ],
  },
  fr_rougeard: {
    fact: "Cabernet Franc von der Loire, den die Brüder Charly und Nady Foucault auf traditionelle Weise zum weltweiten Kultwein machten.",
    quiz: [
      { q: "Welche Brüder, Besitzer von Château Montrose in Bordeaux, kauften 2017 Clos Rougeard?", a: "Martin und Olivier Bouygues", x: ["Familie Pinault", "Familie Arnault", "Familie Rothschild"] },
    ],
  },
  fr_joguet_chinon: {
    fact: "Die erste Domaine in Chinon, die ihre Lagen als eigene Cuvées abfüllte. Clos de la Dioterie ist die bekannteste Lage mit alten Cabernet-Franc-Reben.",
    quiz: [
      { q: "Was machte Charles Joguet in Paris, bevor er 1957 die Familienweinberge übernahm?", a: "Maler und Bildhauer", x: ["Opernsänger", "Filmregisseur", "Architekt"] },
    ],
  },
  fr_pepiere_briords: {
    fact: "Muscadet von alten Reben aus den 1930er- bis 50er-Jahren. Muscadet ist keine Rebsorte, sondern eine Herkunftsbezeichnung und gilt als idealer Partner für Austern.",
    quiz: [
      { q: "Was bedeutet „sur lie“ auf Muscadet-Etiketten wie dem Clos des Briords?", a: "Auf der Hefe gereift", x: ["Aus Weinbergen am Flussufer", "Spät gelesen", "Im neuen Eichenfass gereift"] },
    ],
  },
  fr_trimbach_csh: {
    fact: "Ein 1,67 ha großes Monopole mitten im Grand Cru Rosacker in Hunawihr. Seit über 200 Jahren von der Familie Trimbach gepflegt und einer der besten trockenen Rieslinge der Welt.",
    quiz: [
      { q: "Was schreibt Trimbach absichtlich nicht auf das Etikett des Clos Sainte Hune?", a: "Die Angabe Grand Cru", x: ["Den Jahrgang", "Die Rebsorte", "Den Erzeugernamen"] },
    ],
  },
  fr_trimbach_gewurz: {
    fact: "Die typische Elsässer Rebsorte mit explosiven Aromen von Litschi und Rose. Trimbach ist dafür bekannt, sie ohne Süße trocken auszubauen.",
    quiz: [
      { q: "Seit welchem Jahr erzeugt Trimbach, der Erzeuger dieses Gewurztraminers, im Elsass Wein?", a: "1626", x: ["1639", "1731", "1919"] },
    ],
  },
  fr_hugel_gentil: {
    fact: "Elsässer Cuvée aus mehreren Rebsorten wie Gewurztraminer, Pinot Gris, Riesling und Silvaner. „Gentil“ war der alte Name für Verschnitte aus edlen Rebsorten.",
    quiz: [
      { q: "Seit welchem Jahr erzeugt die Familie Hugel, Erzeuger des Gentil, in Riquewihr Wein?", a: "1639", x: ["1626", "1789", "1919"] },
    ],
  },
  fr_hugel_riesling: {
    fact: "Hugels bekannter Riesling mit dem berühmten gelben Etikett. Eine der Flaschen, über die Einsteiger am häufigsten Wein aus dem Elsass kennenlernen.",
    quiz: [
      { q: "Welche Etikettenfarbe macht Hugel-Weine wie diesen Riesling schon von Weitem erkennbar?", a: "Gelb", x: ["Schwarz", "Blau", "Rot"] },
      { q: "Für welche elsässischen Süßwein-Prädikate setzte sich Jean Hugel in den 1980ern bei der gesetzlichen Regelung ein?", a: "Vendange Tardive und Sélection de Grains Nobles", x: ["Grand Cru und Premier Cru", "Crémant d'Alsace", "Vin de Table"] },
    ],
  },
  fr_zind_rangen: {
    fact: "Lage auf den vulkanischen Steilhängen des Rangen, des südlichsten Grand Cru im Elsass. Zind-Humbrecht entstand 1959 durch die Zusammenlegung der Weinberge zweier Familien.",
    quiz: [
      { q: "Welchen Titel erwarb Olivier Humbrecht, der Chef von Zind-Humbrecht, 1989 als erster Franzose?", a: "Master of Wine (MW)", x: ["Master Sommelier (MS)", "Staatlich diplomierter Önologe (DNO)", "Meilleur Ouvrier de France (MOF)"] },
    ],
  },
  fr_weinbach_schlossberg: {
    fact: "Domaine im Clos des Capucins, den Kapuzinermönche 1612 anlegten. Seit 1898 wird sie von der Familie Faller geführt.",
    quiz: [
      { q: "Wer legte 1612 den Clos des Capucins der Domaine Weinbach an?", a: "Kapuzinermönche", x: ["Zisterzienserinnen", "Tempelritter", "Jesuitenpatres"] },
      { q: "Welchen Rekord erhielt 1975 der Schlossberg, aus dem Weinbachs Riesling stammt?", a: "Erster Grand Cru des Elsass", x: ["Größte Genossenschaftslage des Elsass", "Erste Bio-zertifizierte Lage des Elsass", "Kleinste AOC Frankreichs"] },
    ],
  },
  fr_deiss_altenberg: {
    fact: "Mehrere Rebsorten werden gemischt in einer Lage gepflanzt, gemeinsam gelesen und vinifiziert. Deshalb steht auf dem Etikett statt der Rebsorte nur groß der Lagenname.",
    quiz: [
      { q: "Welche Weinphilosophie vertrat Jean-Michel Deiss an der Spitze von Marcel Deiss?", a: "Terroir vor Rebsorte, gemischter Satz in einer Lage", x: ["Nur eine Rebsorte zu 100 %", "Amphoren statt Eichenfässer", "Ausschließlich Schaumwein"] },
    ],
  },
  fr_miraval: {
    fact: "Der Inbegriff des Promi-Rosés, erster Jahrgang 2012. Château Miraval liegt im Dorf Correns im Hinterland der Provence.",
    quiz: [
      { q: "Welches Hollywood-Paar brachte den Miraval Rosé gemeinsam mit der Familie Perrin heraus?", a: "Brad Pitt und Angelina Jolie", x: ["Tom Cruise und Katie Holmes", "George und Amal Clooney", "Hugh Jackman und Deborra-Lee Furness"] },
      { q: "Welche Band nahm im Tonstudio von Château Miraval, der Heimat des Miraval Rosé, Teile des Albums „The Wall“ auf?", a: "Pink Floyd", x: ["The Beatles", "The Rolling Stones", "Queen"] },
    ],
  },
  fr_minuty_m: {
    fact: "Leichter, frischer Rosé einer Familie, die seit 1936 auf der Halbinsel von Saint-Tropez Wein erzeugt. Die taillierte „Korsett“-Flasche wurde in den 1960ern von diesem Haus entworfen.",
    quiz: [
      { q: "Welcher Konzern wurde 2023 Mehrheitseigner von Château Minuty, dem Erzeuger des M de Minuty?", a: "LVMH (Moët Hennessy)", x: ["Pernod Ricard", "Groupe Castel", "Artémis"] },
    ],
  },
  fr_minuty_281: {
    fact: "Minutys Spitzen-Rosé, 2015 vorgestellt. Markenzeichen ist das tiefblaue Dekor, das seitlich an der Flasche herabläuft.",
    quiz: [
      { q: "Woher stammt die Zahl in Château Minuty 281?", a: "Pantone-Nummer eines mittelmeerblauen Farbtons", x: ["Flurnummer des Weinbergs", "Flaschenzahl des ersten Jahrgangs", "Höhenlage des Weinbergs (m)"] },
    ],
  },
  fr_garrus: {
    fact: "Einer der teuersten Rosés der Welt, aus Trauben alter Grenache-Reben im Eichenfass vergoren und ausgebaut. 2019 wurde LVMH Mehrheitseigner von Château d'Esclans.",
    quiz: [
      { q: "Worin unterscheidet sich die Vinifikation von Château d'Esclans Garrus von üblichen Provence-Rosés?", a: "Gärung und Ausbau im Eichenfass", x: ["Verschnitt aus Rot- und Weißwein", "Zusatz von Kohlensäure", "Verwendung getrockneter Trauben"] },
      { q: "Wer gründete Château d'Esclans, den Erzeuger von Garrus und Whispering Angel?", a: "Sacha Lichine", x: ["Gérard Bertrand", "Marc Perrin", "Michel Rolland"] },
    ],
  },
  fr_rockangel: {
    fact: "Der große Bruder des Whispering Angel. Ein Teil wird im Eichenfass vergoren, was ihn voller und runder macht.",
    quiz: [
      { q: "Welcher Weinautor war Vater von Sacha Lichine, dem Schöpfer des Rock Angel, und Besitzer von Château Prieuré-Lichine in Bordeaux?", a: "Alexis Lichine", x: ["Robert Parker", "Émile Peynaud", "Hugh Johnson"] },
    ],
  },
  fr_tempier: {
    fact: "Das Traditionshaus, das Bandol mit Mourvèdre weltweit bekannt machte. Die Familie Peyraud half 1941 auch bei der Entstehung der AOC Bandol.",
    quiz: [
      { q: "Wer inspirierte mit Küche und Tafel der Domaine Tempier die US-Köchin Alice Waters?", a: "Lulu Peyraud", x: ["Julia Child", "Paul Bocuse", "Madame Clicquot"] },
    ],
  },
  fr_pibarnon: {
    fact: "Traditionshaus in Bandol, das Mourvèdre an amphitheaterförmigen Kalkhängen mit Blick aufs Meer anbaut.",
    quiz: [
      { q: "Welche Familie kaufte 1977 Château de Pibarnon und führte es an die Spitze von Bandol?", a: "Familie de Saint-Victor", x: ["Familie Peyraud", "Familie Rougier", "Familie Bertrand"] },
    ],
  },
  fr_simone: {
    fact: "Das Gut besitzt etwa die Hälfte der winzigen AOC Palette bei Aix-en-Provence. Auf Basis von Clairette entstehen Weißweine, die Jahrzehnte reifen.",
    quiz: [
      { q: "Welche Familie führt Château Simone seit 1830?", a: "Familie Rougier", x: ["Familie Perrin", "Familie Lichine", "Familie Ott"] },
    ],
  },
  fr_daumas_gassac: {
    fact: "Languedoc-Legende, deren erster Jahrgang 1978 auf Rat eines Geologen entstand, der die eiszeitlichen Ablagerungen erkannte. Man nannte sie den „Grand Cru des Languedoc“.",
    quiz: [
      { q: "Welcher legendäre Önologe aus Bordeaux half beim ersten Jahrgang von Mas de Daumas Gassac?", a: "Émile Peynaud", x: ["Michel Rolland", "Jules Chauvet", "Denis Dubourdieu"] },
      { q: "Wer gründete Mas de Daumas Gassac, stellte sich gegen Robert Mondavis Pläne in Aniane und trat im Film „Mondovino“ auf?", a: "Aimé Guibert", x: ["Gérard Bertrand", "Alain Brumont", "Sacha Lichine"] },
    ],
  },
  fr_bertrand_cdr: {
    fact: "Rosé, dessen Flaschenboden wie eine aufgeblühte Rose geformt ist. Der Entwurf eines jungen Designers gewann 2010 einen Wettbewerb.",
    quiz: [
      { q: "Was ist das Besondere an der Flasche von Gérard Bertrand Côte des Roses?", a: "Der Flaschenboden hat die Form einer Rose", x: ["Die Flasche ist herzförmig", "Die Flasche ist aus blauem Glas", "Das Etikett trägt Blindenschrift"] },
      { q: "In welchem Sport machte sich Gérard Bertrand, Schöpfer des Côte des Roses, einen Namen, bevor er sich ganz dem Wein widmete?", a: "Rugby", x: ["Fußball", "Radsport", "Tennis"] },
    ],
  },
  fr_cedre: {
    fact: "Führendes Familiengut in Cahors, der Heimat des Malbec. Aus biologisch bewirtschafteten Lagen entstehen dunkle, kraftvolle Malbecs.",
    quiz: [
      { q: "Welchen Beinamen trugen Cahors-Weine wie Château du Cèdre früher wegen ihrer dunklen Farbe?", a: "Schwarzer Wein", x: ["Blutwein", "Nachtwein", "Tintenwein"] },
    ],
  },
  fr_montus: {
    fact: "Das Flaggschiff von Madiran, reinsortig aus Tannat. Alain Brumont, der das Gut 1980 kaufte, verwandelte den als ruppig geltenden Tannat in einen Spitzenwein.",
    quiz: [
      { q: "Wer ließ mit Château Montus den Ruf von Madiran wieder aufleben?", a: "Alain Brumont", x: ["Gérard Bertrand", "Aimé Guibert", "Sacha Lichine"] },
    ],
  },
  fr_cauhape: {
    fact: "Süßwein aus spät gelesenem Petit Manseng, der bis in den Spätherbst am Stock eintrocknet. Der Name bedeutet „Novembersinfonie“.",
    quiz: [
      { q: "Welchem französischen König sollen der Legende aus Jurançon, der Herkunft dieses Weins, zufolge bei seiner Geburt Knoblauch und Jurançon-Wein auf die Lippen gestrichen worden sein?", a: "Heinrich IV.", x: ["Ludwig XIV.", "Karl der Große", "Napoleon I."] },
    ],
  },
  fr_macle: {
    fact: "Die Krönung des „Vin Jaune“ (gelber Wein), der über 6 Jahre unter einem Hefeflor im Fass reift. Er duftet nach Walnuss und Gewürzen.",
    quiz: [
      { q: "Welches Volumen hat der Clavelin, die traditionelle Flasche für Vin Jaune wie Jean Macles Château-Chalon?", a: "62 cl", x: ["75 cl", "50 cl", "37,5 cl"] },
      { q: "Wie lange muss Vin Jaune mindestens unter dem Hefeflor im Fass reifen?", a: "6 Jahre und 3 Monate", x: ["1 Jahr", "3 Jahre", "10 Jahre"] },
    ],
  },
  fr_tissot_poulsard: {
    fact: "Führende Domaine des Jura, von Stéphane Tissot biodynamisch bewirtschaftet. Poulsard ist eine autochthone rote Jura-Rebsorte, hell wie ein Rosé.",
    quiz: [
      { q: "Welcher Wissenschaftler wuchs in Arbois auf, wo die Domaine Tissot liegt, pflegte dort einen Weinberg und erforschte die Gärung?", a: "Louis Pasteur", x: ["Marie Curie", "Antoine Lavoisier", "Charles Darwin"] },
    ],
  },
};

export default T;
