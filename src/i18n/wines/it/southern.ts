import type { WineText } from "../../index";

const T: Record<string, WineText> = {
  sh_penfolds_bin389: {
    fact: "Assemblaggio di Cabernet e Shiraz creato da Max Schubert nel 1960. È soprannominato «Baby Grange» perché affina nelle botti usate in precedenza per il Grange.",
    quiz: [{ q: "Qual è il soprannome di Penfolds Bin 389?", a: "Baby Grange", x: ["Little Penfolds", "Il Pétrus d’Australia", "Il gioiello della Barossa"] }],
  },
  sh_penfolds_bin407: {
    fact: "Il Cabernet Sauvignon di Penfolds uscito per la prima volta con l’annata 1990. Assemblando uve di diverse zone, è pensato per essere godibile prima del Bin 707.",
    quiz: [{ q: "Che cos’era in origine il numero «Bin» dei vini Penfolds, come il Bin 407?", a: "Il numero dello scomparto della cantina dove si conservava il vino", x: ["Il numero della parcella del vigneto", "Il numero di matricola dell’enologo", "La data della prima uscita"] }],
  },
  sh_penfolds_bin707: {
    fact: "Il miglior Cabernet Sauvignon di Penfolds, con prima annata nel 1964. Negli anni in cui le uve non sono all’altezza, non viene prodotto affatto.",
    quiz: [{ q: "Da che cosa deriva il «707» di Penfolds Bin 707?", a: "Dall’aereo di linea Boeing 707", x: ["Dal 707° anniversario della fondazione", "Da un vigneto a 707 metri d’altitudine", "Dalla 707ª vinificazione di prova"] }],
  },
  sh_penfolds_bin28: {
    fact: "Lo Shiraz simbolo di Penfolds, con prima annata nel 1959. «Kalimna» è il vigneto della Barossa acquistato da Penfolds nel 1945.",
    quiz: [{ q: "Di che cosa è il nome «Kalimna» di Penfolds Bin 28?", a: "Di un vigneto della Barossa acquistato da Penfolds", x: ["Della moglie del fondatore", "Del primo capo enologo", "Della sede di Adelaide"] }],
  },
  sh_penfolds_koonunga: {
    fact: "Il vino quotidiano di Penfolds, uscito per la prima volta nel 1976. Prende il nome dal vigneto Koonunga Hill, nella Barossa Valley.",
    quiz: [{ q: "In che anno uscì per la prima volta Penfolds Koonunga Hill?", a: "1976", x: ["1936", "1996", "2006"] }],
  },
  sh_penfolds_sthenri: {
    fact: "A differenza del Grange, affinato in botti nuove, matura in grandi tini di rovere vecchi di decenni, che valorizzano il frutto invece del legno.",
    quiz: [{ q: "In che cosa affina Penfolds St Henri?", a: "In grandi tini di rovere vecchi di decenni", x: ["In piccole botti nuove di rovere francese", "In giare di terracotta interrate", "In uova di cemento"] }],
  },
  sh_penfolds_yattarna: {
    fact: "Lo Chardonnay di punta di Penfolds, prima annata 1995, frutto di anni di sperimentazione alla ricerca di un «Grange bianco».",
    quiz: [{ q: "Che cosa significa nella lingua aborigena il nome Penfolds Yattarna?", a: "Poco a poco, gradualmente", x: ["Oro bianco", "Vento del sud", "Acqua limpida"] }],
  },
  sh_penfolds_rwt: {
    fact: "Shiraz della Barossa Valley affinato in botti di rovere francese. È l’altro vertice di Penfolds, in contrasto con il Grange che usa rovere americano.",
    quiz: [{ q: "Di che cosa è sigla il nome Penfolds RWT?", a: "Red Winemaking Trial (sperimentazione di vinificazione in rosso)", x: ["Royal Wine Treasure", "Reserve Wine Tasting", "Rare Wine Tradition"] }],
  },
  sh_henschke_hillofgrace: {
    fact: "Shiraz da vigneto singolo dell’Eden Valley, dove crescono le viti «nonne» piantate negli anni ’60 dell’Ottocento. Porta il nome del vigneto in etichetta dal 1958.",
    quiz: [{ q: "Da dove viene il nome Hill of Grace di Henschke?", a: "Dalla traduzione inglese di «Gnadenberg», la chiesa luterana di fronte al vigneto", x: ["Dal nome di Grace, figlia del fondatore", "Da un luogo sacro aborigeno", "Dalla visita della regina d’Inghilterra"] }],
  },
  sh_henschke_edelstone: {
    fact: "Nasce da un vecchio vigneto di Shiraz dell’Eden Valley piantato nel 1912. Henschke lo imbottiglia con il nome del vigneto dal 1952.",
    quiz: [{ q: "In che anno fu piantato lo Shiraz nel vigneto Mount Edelstone di Henschke?", a: "1912", x: ["1812", "1962", "1992"] }],
  },
  sh_torbreck_runrig: {
    fact: "Alle vecchie viti di Shiraz della Barossa aggiunge un po’ di Viognier. «RunRig» prende il nome da un antico sistema scozzese di coltivazione comune.",
    quiz: [{ q: "Da dove viene il nome «Torbreck», la cantina che produce RunRig?", a: "Da una foresta scozzese dove il fondatore lavorò come boscaiolo", x: ["Dal castello del paese natale del fondatore", "Da un toponimo aborigeno della Barossa", "Dal cognome del primo proprietario del vigneto"] }],
  },
  sh_twohands_angelsshare: {
    fact: "Shiraz di McLaren Vale di Two Hands, cantina fondata nel 1999 da Michael Twelftree e Richard Mintz.",
    quiz: [{ q: "A che cosa si riferisce in origine l’espressione «Angels’ Share» (la parte degli angeli) di Two Hands?", a: "Al liquido che evapora durante l’affinamento in botte", x: ["All’uva lasciata nel vigneto dopo la vendemmia", "Al primo bicchiere assaggiato dall’enologo", "Al vino dato in decima alla chiesa"] }],
  },
  sh_clarendon_astralis: {
    fact: "Lo Shiraz di punta di Clarendon Hills, cantina fondata da Roman Bratasiuk, prodotto con uve di vecchie viti.",
    quiz: [{ q: "Che cosa significa in latino il nome Astralis di Clarendon Hills?", a: "Delle stelle, astrale", x: ["Alta collina", "Terra rossa", "Albero antico"] }],
  },
  sh_wolfblass_yellow: {
    fact: "Il vino quotidiano simbolo della cantina fondata nel 1966 dal vinificatore tedesco Wolf Blass. L’etichetta gialla e l’aquila araldica sono il suo marchio.",
    quiz: [{ q: "Da quale paese viene Wolfgang Blass, creatore di Wolf Blass Yellow Label?", a: "Germania", x: ["Austria", "Svizzera", "Paesi Bassi"] }],
  },
  sh_wolfblass_black: {
    fact: "L’assemblaggio di punta di Wolf Blass, prima annata 1973. Si è fatto un nome vincendo per tre anni di fila il più prestigioso premio australiano per i vini rossi.",
    quiz: [{ q: "Quale premio australiano vinse Wolf Blass Black Label tre anni di fila negli anni ’70?", a: "Il Jimmy Watson Trophy", x: ["Il Max Schubert Trophy", "La Canberra Gold Cup", "La Murray River Medal"] }],
  },
  sh_jacobscreek: {
    fact: "Il nome nasce dal vigneto che l’immigrato tedesco Johann Gramp piantò nel 1847 lungo il torrente Jacob’s Creek, nella Barossa. È il marchio d’esportazione che ha fatto conoscere il vino australiano nel mondo.",
    quiz: [{ q: "Da dove viene il nome Jacob’s Creek?", a: "Dal torrente che scorreva accanto al primo vigneto", x: ["Dal nome del figlio del fondatore", "Dal nome della prima nave d’esportazione", "Dal nome di un capo aborigeno"] }],
  },
  sh_lindemans_bin65: {
    fact: "Nasce dal vigneto piantato nella Hunter Valley nel 1843 da Henry Lindeman, chirurgo inglese. È uno degli Chardonnay australiani più venduti al mondo.",
    quiz: [{ q: "Che mestiere faceva in origine Henry Lindeman, fondatore di Lindeman’s?", a: "Il chirurgo", x: ["Il capitano di un piroscafo", "Il cercatore d’oro", "Il sacerdote anglicano"] }],
  },
  sh_rosemount_diamond: {
    fact: "Il vino simbolo di Rosemount, avviata nella Hunter Valley nel 1969 da Robert Oatley. Si chiama «Diamond Label» per l’etichetta a rombo.",
    quiz: [{ q: "Da dove viene il nome Rosemount Diamond Label?", a: "Dall’etichetta a forma di rombo (diamante)", x: ["Da un vigneto vicino a una miniera di diamanti", "Dal 60° anniversario della fondazione", "Da una pietra finta incastonata nella bottiglia"] }],
  },
  sh_hardys_eileen: {
    fact: "Lo Shiraz di punta di Hardys, fondata nel 1853 dall’immigrato inglese Thomas Hardy. Porta il nome di Eileen Hardy, la matriarca che guidò la famiglia.",
    quiz: [{ q: "Chi è l’«Eileen Hardy» di Hardys Eileen Hardy Shiraz?", a: "La matriarca che guidò la famiglia Hardy", x: ["La prima enologa di Hardys", "La madre del fondatore Thomas Hardy", "Una nobildonna inglese che fondò la cantina"] }],
  },
  sh_darenberg_deadarm: {
    fact: "Lo Shiraz simbolo di d’Arenberg, famoso per la fascia rossa diagonale sull’etichetta. È prodotto con uve di vecchie viti in cui una malattia ha fatto seccare un braccio.",
    quiz: [{ q: "A che cosa si riferisce il «Dead Arm» (braccio morto) di d’Arenberg The Dead Arm?", a: "A una malattia che fa seccare un braccio della vite", x: ["Al fondatore ferito a un braccio in guerra", "A un letto di fiume secco accanto al vigneto", "A un torchio rotto alla prima vendemmia"] }],
  },
  sh_leeuwin_art: {
    fact: "Lo Chardonnay della «Art Series», che ogni anno porta in etichetta il quadro di un pittore australiano contemporaneo. Ha reso Margaret River una zona di Chardonnay di fama mondiale.",
    quiz: [{ q: "Quale grande nome del vino americano consigliò Leeuwin Estate nella scelta del sito per il vigneto?", a: "Robert Mondavi", x: ["Ernest Gallo", "Warren Winiarski", "Jess Jackson"] }],
  },
  sh_cullen_diana: {
    fact: "L’assemblaggio a base di Cabernet simbolo di Cullen, fondata nel 1971 da Kevin e Diana Cullen. La figlia Vanya Cullen coltiva i vigneti in biodinamica.",
    quiz: [{ q: "Chi onora il nome Cullen Diana Madeline?", a: "Diana Cullen, cofondatrice della cantina", x: ["La figlia di un vicino che aiutò alla prima vendemmia", "Diana, principessa del Galles", "La prima nipote del fondatore"] }],
  },
  sh_vassefelix: {
    fact: "La prima cantina di Margaret River, fondata nel 1967 dal medico Tom Cullity. «Vasse» viene da un marinaio francese scomparso in quelle acque.",
    quiz: [{ q: "Che cosa significa in latino «Felix» di Vasse Felix?", a: "Fortunato", x: ["Del bosco", "Rosso", "Del mare"] }],
  },
  sh_mosswood: {
    fact: "Cantina pioniera di Margaret River, dove il dottor Bill Pannell piantò le viti nel 1969. È rinomata per Cabernet delicati e longevi.",
    quiz: [{ q: "Qual era il mestiere originale di Bill Pannell, fondatore di Moss Wood?", a: "Medico", x: ["Avvocato", "Ingegnere minerario", "Insegnante di liceo"] }],
  },
  sh_capementelle: {
    fact: "Cabernet Sauvignon di una delle prime cantine di Margaret River, fondata nel 1970 da David Hohnen.",
    quiz: [{ q: "Quale altra cantina fondò David Hohnen di Cape Mentelle in Nuova Zelanda nel 1985?", a: "Cloudy Bay", x: ["Villa Maria", "Oyster Bay", "Kim Crawford"] }],
  },
  sh_grosset_polishhill: {
    fact: "Riesling secco che Jeffrey Grosset ottiene dai terreni sassosi e poveri di Polish Hill River, nella Clare Valley. È considerato il riferimento del Riesling australiano.",
    quiz: [
      { q: "Da dove viene il toponimo «Polish Hill» di Grosset Polish Hill?", a: "Dagli immigrati polacchi stabilitisi nell’Ottocento", x: ["Da rocce lucide (polish)", "Dal cognome del primo proprietario del vigneto", "Da una concessione della corona polacca"] },
      { q: "Quale chiusura cominciarono a usare insieme nel 2000 i produttori di Riesling della Clare Valley come Grosset, al posto del sughero?", a: "Il tappo a vite", x: ["Il tappo di vetro", "Il sigillo di cera", "Il tappo a corona"] },
    ],
  },
  sh_jimbarry_armagh: {
    fact: "Lo Shiraz di punta di Jim Barry, da un vigneto singolo nella zona «Armagh» della Clare Valley. È considerato uno Shiraz icona dell’Australia.",
    quiz: [{ q: "Di quale paese è in origine il toponimo «Armagh» di Jim Barry The Armagh?", a: "Irlanda", x: ["Scozia", "Galles", "Inghilterra"] }],
  },
  sh_wynns_blacklabel: {
    fact: "Il riferimento del Cabernet di Coonawarra, prima annata 1954. L’edificio a tre timpani in etichetta è la cantina costruita da John Riddoch nel 1891.",
    quiz: [{ q: "Qual è la caratteristica della cantina raffigurata sull’etichetta di Wynns Coonawarra Black Label?", a: "Tre timpani appuntiti", x: ["Un tetto a cupola", "Un’alta torre dell’orologio", "Un grande mulino a vento"] }],
  },
  sh_yalumba_signature: {
    fact: "Il rosso simbolo della più antica cantina familiare d’Australia, fondata nel 1849. Ha una propria bottaia dove costruisce le botti.",
    quiz: [
      { q: "Che cosa compare ogni anno sull’etichetta di Yalumba The Signature?", a: "La firma di una persona che ha dato un contributo alla cantina", x: ["Il ritratto del fondatore", "Il grafico delle piogge dell’anno", "Una foto aerea del vigneto"] },
      { q: "Qual era il mestiere originale di Samuel Smith, che fondò Yalumba nel 1849?", a: "Birraio", x: ["Capitano di nave", "Banchiere", "Fabbro"] },
    ],
  },
  sh_brownbrothers_omf: {
    fact: "Vino dolce della famiglia Brown di Milawa, nel Victoria. All’Orange Muscat, profumato di fiori d’arancio, si unisce il Flora.",
    quiz: [{ q: "In che anno la famiglia Brown, produttrice di Orange Muscat & Flora, fece il suo primo vino a Milawa?", a: "1889", x: ["1789", "1939", "1969"] }],
  },
  sh_mollydooker_boxer: {
    fact: "Lo Shiraz simbolo di Mollydooker, fondata nel 2005 da Sparky e Sarah Marquis. È famoso per le etichette da fumetto e il gusto intenso e maturo.",
    quiz: [
      { q: "Che cosa significa «Mollydooker», nome della cantina di The Boxer, nel gergo australiano?", a: "Mancino", x: ["Beone", "Cacciatore di canguri", "Ladro d’uva"] },
      { q: "A che cosa serve lo «scossone Mollydooker», che consiste nell’agitare forte la bottiglia capovolta appena aperta?", a: "A liberare l’azoto aggiunto per preservare la freschezza", x: ["A mescolare il deposito", "A creare le bollicine", "Ad ammorbidire il tappo"] },
    ],
  },
  sh_seppeltsfield_para100: {
    fact: "Ogni anno imbottiglia una botte di Tawny messa in cantina esattamente cento anni prima. Seppeltsfield è l’unica al mondo a farlo ogni anno.",
    quiz: [{ q: "In che anno iniziò la tradizione del Seppeltsfield Para 100 Year Old, mettendo da parte la prima botte da aprire cento anni dopo?", a: "1878", x: ["1778", "1928", "1958"] }],
  },
  sh_debortoli_nobleone: {
    fact: "Il vino dolce simbolo dell’Australia, da Sémillon botritizzato. Fu prodotto per la prima volta nel 1982 da De Bortoli, cantina fondata nel 1928 da una famiglia di immigrati italiani.",
    quiz: [{ q: "Quale vinificatore creò il De Bortoli Noble One nel 1982?", a: "Darren De Bortoli", x: ["Max Schubert", "Wolf Blass", "Peter Lehmann"] }],
  },
  sh_19crimes: {
    fact: "Ogni etichetta riporta il volto di un vero detenuto deportato dall’Inghilterra in Australia. Inquadrandola con un’app sullo smartphone, il detenuto si anima e racconta la sua storia.",
    quiz: [{ q: "Da dove viene il nome 19 Crimes?", a: "Dai 19 reati punibili con la deportazione in Australia", x: ["Dai 19 errori commessi dal fondatore", "Da 19 evasi", "Dalla 19ª nave di detenuti arrivata in Australia"] }],
  },
  sh_tyrrells_vat1: {
    fact: "Leggenda del Sémillon della Hunter: vinificato senza botte e con poco alcol, è leggero, ma con un lungo affinamento in bottiglia sviluppa profumi di pane tostato e miele.",
    quiz: [{ q: "Quale vino, lanciato da Tyrrell’s nel 1971, è considerato il primo Chardonnay commerciale d’Australia?", a: "Vat 47", x: ["Bin 65", "Yattarna", "Art Series"] }],
  },
  sh_cloudybay_tekoko: {
    fact: "Lo speciale Sauvignon Blanc di Cloudy Bay, fermentato e affinato in botte con lieviti indigeni. A differenza del fresco Sauvignon Blanc base, è cremoso e corposo.",
    quiz: [{ q: "Da dove viene il nome Te Koko di Cloudy Bay?", a: "Dal nome maori della baia di Cloudy Bay", x: ["Dal nome maori della figlia del fondatore", "Dal monte alle spalle della cantina", "Dalla costellazione del giorno della prima vendemmia"] }],
  },
  sh_kimcrawford_sb: {
    fact: "Marchio fondato nel 1996 dal vinificatore Kim Crawford e dalla moglie Erica. Il suo Sauvignon Blanc di Marlborough, ricco di frutta tropicale, è diventato popolare in tutto il mondo.",
    quiz: [{ q: "Chi è il «Kim Crawford» di Kim Crawford Sauvignon Blanc?", a: "Il vinificatore neozelandese che fondò la cantina", x: ["Il contadino che vendette il primo vigneto", "Un giocatore della nazionale australiana di cricket", "Il primo sindaco di Marlborough"] }],
  },
  sh_villamaria_privatebin: {
    fact: "Cantina fondata ad Auckland nel 1961 da George Fistonich. È la pioniera che ha diffuso il tappo a vite nel vino neozelandese.",
    quiz: [{ q: "Quale decisione, rara per una grande cantina, prese Villa Maria nel 2001?", a: "Sostituì il sughero con il tappo a vite su tutti i vini", x: ["Smise di produrre vini bianchi", "Iniziò a vendere il vino solo in lattina", "Interruppe tutte le esportazioni"] }],
  },
  sh_oysterbay_sb: {
    fact: "Marchio di Sauvignon Blanc di Marlborough della famiglia Delegat. Fresco e pulito, è esportato in molti paesi.",
    quiz: [{ q: "Qual è l’origine della famiglia Delegat, che produce Oyster Bay?", a: "Immigrati croati", x: ["Immigrati scozzesi", "Immigrati olandesi", "Una tribù maori"] }],
  },
  sh_brancott_sb: {
    fact: "La cantina che nel 1973 piantò il primo vigneto commerciale di Marlborough. È la pioniera che ha aperto l’era del Sauvignon Blanc di Marlborough.",
    quiz: [{ q: "Quale nome di marchio usava un tempo Brancott Estate?", a: "Montana", x: ["Kaikoura", "Blenheim Estate", "Canterbury Hill"] }],
  },
  sh_dogpoint_sb: {
    fact: "Cantina con cui il viticoltore Ivan Sutherland e l’enologo James Healy, entrambi a lungo in Cloudy Bay, hanno prodotto la prima annata nel 2002.",
    quiz: [{ q: "In quale cantina avevano lavorato insieme i due fondatori di Dog Point?", a: "Cloudy Bay", x: ["Villa Maria", "Montana", "Kim Crawford"] }],
  },
  sh_greywacke_sb: {
    fact: "Cantina fondata nel 2009 da Kevin Judd, per 25 anni enologo fondatore di Cloudy Bay. È famoso anche come fotografo dei paesaggi del vino neozelandese.",
    quiz: [{ q: "Che cos’è la «greywacke» di Greywacke Sauvignon Blanc?", a: "Un’arenaria comune nei letti dei fiumi di Marlborough", x: ["Il cane grigio del fondatore", "Il cielo nebbioso dell’alba", "Una balena di una leggenda maori"] }],
  },
};

export default T;
