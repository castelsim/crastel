/* ============================================================
   PAGINE CHE RISPONDONO ALLE RICERCHE COMUNI
   Chi cerca un compositore non scrive «CRASTEL»: scrive «musica per
   documentari», «compositore per film», «jingle pubblicitario». Queste
   pagine rispondono a quelle ricerche, una per intenzione.

   Le parole scelte vengono dai suggerimenti di ricerca di Google (15/09/2026),
   cioè da quello che le persone digitano davvero.

   REGOLE PER CHI LE TOCCA
   - Ogni fatto qui dentro sta anche in data.js o in una fonte citata in fondo
     alla pagina. Niente promesse sul metodo, niente prezzi inventati.
   - I testi sono HTML scritto a mano (possono contenere link interni).
   - I lavori si indicano per slug: titoli, immagini e premi arrivano da data.js.
   ============================================================ */

export const SERVIZI = [
  /* ------------------------------------------------------------ */
  {
    slug: "musica-per-film",
    // ricerche: compositore per film, cercasi compositore per film, compositore colonne sonore italiano,
    // compositore musica per film, musica per cortometraggi, colonna sonora originale
    titolo: "Compositori per film e cortometraggi — colonne sonore originali | CRASTEL Studio",
    sopra: "Compositori per il cinema",
    h1: "Musica originale per film e cortometraggi",
    descrizione:
      "Cercate un compositore per il vostro film? CRASTEL Studio scrive colonne sonore originali per film e cortometraggi a Bassano del Grappa (Vicenza): pianoforte, archi, elettronica, sound design e mix.",
    servizio: "Composizione di colonne sonore per film e cortometraggi",
    paragrafi: [
      "CRASTEL Studio è lo studio di composizione per immagini di Marco Crivellaro e Simone Castellan, a Bassano del Grappa, in provincia di Vicenza. Scriviamo colonne sonore originali per film e cortometraggi: la musica nasce sul montaggio, scena per scena, e non viene scelta da un catalogo di brani già pronti.",
      "La scrittura va dal tema per pianoforte e archi all'elettronica e al sound design, fino al mix: chi scrive la musica segue anche il file che arriva alla post produzione, senza passaggi di mano.",
      "Per i corti di Davide Serra Marco Crivellaro ha scritto le musiche di <a href=\"/lavori/piccola-storia-damore/\">«Piccola Storia d'Amore»</a>, cinque miniature per pianoforte e archi uscite anche in disco, e di <a href=\"/lavori/la-ricorrenza/\">«La Ricorrenza»</a>, selezionato al Red Wood Film Festival, a We Make Films e all'Aracnea Festival. Nel 2025 Marco ha vinto il Premio Mercurio d'Argento della Città di Massa con una partitura originale.",
    ],
    sezioni: [
      {
        h2: "Cosa ci serve per rispondervi",
        paragrafi: ["Non serve un film finito. Bastano poche righe, anche approssimative:"],
        punti: [
          "<b>A che punto è il film</b>: sceneggiatura, riprese, primo montaggio o montaggio chiuso.",
          "<b>Quanti minuti di musica</b> immaginate, anche a occhio.",
          "<b>La data di consegna</b> del mix.",
          "<b>Dove andrà</b>: festival, sala, piattaforma, televisione.",
          "<b>I riferimenti musicali</b> che avete in mente, se ce ne sono.",
        ],
      },
    ],
    lavori: ["piccola-storia-damore", "la-ricorrenza", "immenso-blu", "phandambiri"],
    domande: [
      {
        d: "Quanto costa una colonna sonora per un film?",
        r: "Dipende da quanti minuti di musica servono, da chi suona e dai tempi. In un'indagine del 2025 fra i compositori professionisti dell'ACMF, circa due terzi hanno dichiarato per l'ultima colonna sonora un compenso sotto i 10.000 euro. I fattori che fanno cambiare il prezzo sono nella guida <a href=\"/quanto-costa-una-colonna-sonora/\">Quanto costa una colonna sonora</a>.",
      },
      {
        d: "Lavorate anche con produzioni fuori dal Veneto?",
        r: "Sì. La sede è a Bassano del Grappa, ma le nostre musiche accompagnano serie distribuite da Netflix, film girati in Antartide e in Mozambico e docufilm commissionati da comuni della Basilicata.",
      },
      {
        d: "Si può ascoltare quello che avete scritto?",
        r: "Sì: su Spotify e Apple Music ci sono le colonne sonore di «Immenso Blu» (quindici brani), «Il mistero del Phandambiri» (dodici), «Donnafugata» (sei) e «Piccola Storia d'Amore» (cinque). Ogni pagina dei lavori apre anche il trailer o il film.",
      },
    ],
    correlati: ["/musica-per-documentari/", "/sonorizzazione-film-muto/", "/quanto-costa-una-colonna-sonora/"],
  },

  /* ------------------------------------------------------------ */
  {
    slug: "musica-per-documentari",
    // ricerche: musica per documentari (naturalistici, di viaggio, storici), colonna sonora documentario,
    // colonna sonora documentario avventura, musica documentario netflix
    titolo: "Musica per documentari — colonne sonore originali | CRASTEL Studio",
    sopra: "Documentari e serie documentarie",
    h1: "Musica originale per documentari",
    descrizione:
      "Colonne sonore originali per documentari di montagna, di viaggio e di spedizione e per serie documentarie. Le musiche di CRASTEL Studio accompagnano Immenso Blu, Donnafugata, Il mistero del Phandambiri e due serie Netflix.",
    servizio: "Composizione di musica originale per documentari e serie documentarie",
    paragrafi: [
      "Il documentario è il campo in cui CRASTEL Studio ha lavorato di più: spedizioni alpinistiche, film di montagna, ritratti di territori e due serie documentarie distribuite da Netflix. In un documentario la storia prende forma al montaggio, ed è lì che la musica trova il suo posto.",
      "<a href=\"/lavori/immenso-blu/\">«Immenso Blu»</a> di Manrico Dell'Agnola, con le musiche di Marco Crivellaro, ha vinto il Mountain Film Festival di Verona e ha ricevuto la menzione speciale della giuria allo Swiss Mountain Film Festival. <a href=\"/lavori/donnafugata/\">«Donnafugata»</a>, prodotto da Karpos, è stato selezionato al 67° Trento Film Festival.",
      "Per <a href=\"/lavori/phandambiri/\">«Il mistero del Phandambiri»</a>, girato su una parete di granito in Mozambico, la colonna sonora viene eseguita dal vivo durante le proiezioni, con Marco Crivellaro al pianoforte ed Enrica Bacchia alla voce; l'album è uscito nel 2026 con dodici brani.",
    ],
    sezioni: [
      {
        h2: "Che documentari abbiamo accompagnato",
        punti: [
          "<b>Montagna e alpinismo</b>: <a href=\"/lavori/immenso-blu/\">Immenso Blu</a>, <a href=\"/lavori/donnafugata/\">Donnafugata</a>, <a href=\"/lavori/phandambiri/\">Il mistero del Phandambiri</a>.",
          "<b>Viaggio e spedizione</b>: <a href=\"/lavori/antarctica-karpos/\">Antarctica: Beyond the End of the World</a>, la serie in tre episodi di Karpos sulla traversata del Passaggio di Drake.",
          "<b>Inchiesta</b>: brani entrati nelle serie Netflix <a href=\"/lavori/alex-schwazer/\">«Il caso Alex Schwazer»</a> (2023) e <a href=\"/lavori/il-caso-yara/\">«Il caso Yara: oltre ogni ragionevole dubbio»</a> (2024).",
          "<b>Territorio e cammini</b>: <a href=\"/lavori/in-cammino-con-maria/\">In Cammino con Maria</a>, <a href=\"/lavori/latronico/\">Latronico, una terra di emozioni</a>, <a href=\"/lavori/trodoi-trails/\">Trodoi/Trails</a>.",
        ],
      },
    ],
    lavori: ["immenso-blu", "phandambiri", "donnafugata", "antarctica-karpos", "alex-schwazer", "il-caso-yara", "in-cammino-con-maria"],
    domande: [
      {
        d: "La musica di un documentario si può eseguire dal vivo?",
        r: "Sì. Alle proiezioni del «Mistero del Phandambiri» la colonna sonora viene suonata in sala: Marco Crivellaro al pianoforte ed Enrica Bacchia alla voce, come alla serata del CAI di Conegliano del 18 giugno 2026.",
      },
      {
        d: "Le colonne sonore dei documentari si possono ascoltare?",
        r: "Sì: su Spotify e Apple Music ci sono le colonne sonore di «Immenso Blu» (quindici brani), «Il mistero del Phandambiri» (dodici) e «Donnafugata» (sei).",
      },
      {
        d: "Quanto costa la musica per un documentario?",
        r: "Dipende dai minuti di musica, dall'organico e dai tempi di consegna. Abbiamo raccolto i dati sui compensi e i fattori che contano nella guida <a href=\"/quanto-costa-una-colonna-sonora/\">Quanto costa una colonna sonora</a>.",
      },
    ],
    correlati: ["/musica-per-film/", "/compositore-veneto/", "/quanto-costa-una-colonna-sonora/"],
  },

  /* ------------------------------------------------------------ */
  {
    slug: "musica-per-video-aziendali",
    // ricerche: musica per video aziendali, musica per video promozionale, musica per spot pubblicitari,
    // jingle pubblicitario, musica su misura
    titolo: "Musica per video aziendali, spot e jingle pubblicitari | CRASTEL Studio",
    sopra: "Aziende, marchi e territori",
    h1: "Musica originale per video aziendali, spot e jingle",
    descrizione:
      "Musica su misura per video aziendali e promozionali, spot e jingle pubblicitari e film di territorio. CRASTEL Studio, Bassano del Grappa: il jingle Todis, i film di Karpos, i sentieri della Valle del Brenta.",
    servizio: "Musica originale per video aziendali, spot pubblicitari e jingle",
    paragrafi: [
      "Un video aziendale o uno spot con una musica scritta apposta non rischia di suonare come quello di un altro marchio che ha scelto lo stesso brano di libreria. CRASTEL Studio scrive musica originale per film d'impresa, video promozionali, spot e jingle, e per i progetti con cui comuni e territori si raccontano.",
      "Per Todis Marco Crivellaro ha scritto il jingle della campagna <a href=\"/lavori/todis/\">«Buongiorno Convenienza»</a>: pochi secondi per far riconoscere un marchio. Per <a href=\"/lavori/maglificio-pini/\">Maglificio Pini</a> la musica accompagna il gesto artigianale: mani, macchine, tempo. Per Karpos, marchio di abbigliamento per la montagna, abbiamo scritto le musiche di <a href=\"/lavori/donnafugata/\">«Donnafugata»</a> e della serie <a href=\"/lavori/antarctica-karpos/\">«Antarctica»</a>.",
      "Sul territorio: la colonna sonora originale del video di <a href=\"/lavori/trodoi-trails/\">Trodoi/Trails</a> sui sentieri della Valle del Brenta, presentato nel luglio 2026, è di Marco Crivellaro; <a href=\"/lavori/in-cammino-con-maria/\">«In Cammino con Maria»</a> è stato commissionato da tre comuni lucani per Matera Capitale Europea della Cultura 2019.",
    ],
    sezioni: [
      {
        h2: "Musica originale o musica di libreria?",
        paragrafi: [
          "La musica di libreria costa meno e si usa subito, ma lo stesso brano può finire nel video di chiunque, e la licenza stabilisce dove e per quanto tempo si può usare. La musica originale è scritta sul montaggio, dura quanto serve e ha un carattere che appartiene solo a quel marchio; l'uso si concorda per il progetto.",
        ],
      },
      {
        h2: "Cosa ci serve per un preventivo",
        punti: [
          "<b>La durata</b> del video o dello spot, o delle versioni previste.",
          "<b>Dove verrà usato</b>: web e social, televisione, radio, eventi, punti vendita.",
          "<b>Per quanto tempo</b> e in quali Paesi.",
          "<b>La data</b> in cui vi serve il file finito.",
        ],
      },
    ],
    lavori: ["todis", "maglificio-pini", "trodoi-trails", "antarctica-karpos", "donnafugata", "latronico"],
    domande: [
      {
        d: "Quanto costa un jingle o la musica di un video aziendale?",
        r: "Dipende dalla durata, da dove verrà usato e per quanto tempo. Scriveteci durata e canali e vi rispondiamo con una proposta entro due giorni lavorativi.",
      },
      {
        d: "Potete occuparvi anche del suono del video?",
        r: "Sì: Simone Castellan segue sound design, programmazione musicale e post produzione, quindi musica e suono possono arrivare in un unico mix.",
      },
    ],
    correlati: ["/compositore-veneto/", "/musica-per-documentari/", "/quanto-costa-una-colonna-sonora/"],
  },

  /* ------------------------------------------------------------ */
  {
    slug: "sonorizzazione-film-muto",
    // ricerche: sonorizzazione film muto, musica per cinema muto, sonorizzazione film, cineconcerto
    titolo: "Sonorizzazione di film muti e musica dal vivo per le proiezioni | CRASTEL Studio",
    sopra: "Cinema muto e musica dal vivo",
    h1: "Sonorizzazione di film muti",
    descrizione:
      "Nuove partiture per il cinema muto e musica eseguita dal vivo durante le proiezioni. CRASTEL Studio: premi a Sounds of Silences del Romaeuropa Festival e a «Your sound for silents» del Lago Film Fest.",
    servizio: "Sonorizzazione di film muti e musica dal vivo per proiezioni",
    paragrafi: [
      "Sonorizzare un film muto significa scrivere una partitura nuova per immagini nate senza suono, e spesso eseguirla dal vivo in sincrono con la proiezione. È il lavoro in cui la scrittura per immagini si sente di più, ed è quello in cui entrambi i compositori di CRASTEL sono stati premiati.",
      "Nel 2020 <a href=\"/simone-castellan/\">Simone Castellan</a> è stato fra i tre compositori premiati a «Sounds of Silences», il concorso internazionale del Romaeuropa Festival con Edison Studio e la Cineteca di Bologna, scelto su 162 candidature da 36 Paesi: la sua partitura è stata eseguita dal vivo all'Ex Mattatoio di Roma.",
      "Nel 2023 <a href=\"/marco-crivellaro/\">Marco Crivellaro</a> ha vinto il primo premio di «Your sound for silents» al Lago Film Fest, e nel 2025 il Premio Mercurio d'Argento della Città di Massa con una partitura ispirata alla strage di Beslan.",
      "Lo stesso gesto vale per i film di oggi: alle proiezioni del <a href=\"/lavori/phandambiri/\">«Mistero del Phandambiri»</a> la colonna sonora viene eseguita in sala, al pianoforte e alla voce.",
    ],
    sezioni: [
      {
        h2: "Cosa serve per organizzare una sonorizzazione dal vivo",
        punti: [
          "<b>Il film</b>, con la durata e chi ne gestisce i diritti di proiezione.",
          "<b>La sala</b>: dove si proietta, com'è l'impianto audio, se c'è un pianoforte.",
          "<b>L'organico</b> che immaginate: pianoforte solo, voce, elettronica.",
          "<b>La data</b>, per avere il tempo di scrivere e provare la partitura sulle immagini.",
        ],
      },
    ],
    premi: [
      "«Sounds of Silences» 2020, Romaeuropa Festival — Simone Castellan, fra i tre premiati su 162 candidature da 36 Paesi",
      "«Your sound for silents» 2023, Lago Film Fest — Marco Crivellaro, primo premio",
      "Premio Mercurio d'Argento 2025, Città di Massa — Marco Crivellaro",
    ],
    lavori: ["phandambiri"],
    domande: [
      {
        d: "Che cos'è una sonorizzazione?",
        r: "È la scrittura di una musica nuova per un film, di solito muto, eseguita dal vivo durante la proiezione oppure registrata e montata sul film. Quando la musica è suonata in sala si parla anche di cineconcerto.",
      },
      {
        d: "Avete già eseguito partiture dal vivo con le immagini?",
        r: "Sì: la partitura di Simone Castellan per «Sounds of Silences» è stata eseguita all'Ex Mattatoio di Roma nel 2020, e la colonna sonora del «Mistero del Phandambiri» viene suonata in sala alle proiezioni del film, come a Conegliano il 18 giugno 2026.",
      },
    ],
    fonti: [["Sounds of Silences 2020 — Romaeuropa Festival", "https://romaeuropa.net/en/archive/festival/year-2020/sounds-of-silences-2020/"]],
    correlati: ["/musica-per-film/", "/musica-per-documentari/", "/marco-crivellaro/", "/simone-castellan/"],
  },

  /* ------------------------------------------------------------ */
  {
    slug: "quanto-costa-una-colonna-sonora",
    guida: true,
    // ricerca: quanto costa una colonna sonora
    titolo: "Quanto costa una colonna sonora? Compensi e fattori, dati 2025 | CRASTEL Studio",
    sopra: "Guida",
    h1: "Quanto costa una colonna sonora",
    descrizione:
      "Quanto si paga un compositore per un film, un documentario o un video: i compensi dichiarati dai compositori professionisti italiani nell'indagine ACMF del 2025 e i fattori che fanno cambiare il prezzo.",
    paragrafi: [
      "Non esiste un listino, ma esistono dati. Nel marzo 2025 Kristian Sensini ha pubblicato su Colonnesonore.net un'indagine fra compositori dell'ACMF, l'Associazione Compositori Musica per Film, tutti professionisti che lavorano regolarmente per il cinema e la televisione. Alla domanda su quanto sia stato pagato il «premio partitura» dell'ultima colonna sonora — il compenso per la sola scrittura, esclusi i diritti d'autore e le altre entrate — hanno risposto così:",
    ],
    tabella: {
      intestazioni: ["Compenso per l'ultima colonna sonora", "Quota dei compositori"],
      righe: [
        ["meno di 5.000 euro", "circa un terzo"],
        ["fra 5.000 e 10.000 euro", "circa un terzo"],
        ["fra 10.000 e 20.000 euro", "22%"],
        ["oltre 25.000 euro", "una piccola percentuale"],
      ],
    },
    dopoTabella: [
      "In due casi su tre, quindi, la colonna sonora di un film italiano è stata pagata meno di 10.000 euro. Sono cifre riferite a cinema e televisione: un cortometraggio, un video aziendale o un jingle seguono logiche diverse.",
    ],
    sezioni: [
      {
        h2: "Cosa fa cambiare il prezzo",
        punti: [
          "<b>I minuti di musica.</b> Dieci minuti in un cortometraggio non sono cinquanta in un documentario.",
          "<b>Chi suona.</b> Una partitura realizzata in studio con elettronica e strumenti virtuali costa meno di una registrata con musicisti; un'orchestra è un altro capitolo.",
          "<b>I tempi.</b> Una consegna in poche settimane chiede di scrivere in parallelo al montaggio.",
          "<b>Il suono.</b> Se chi compone segue anche sound design e mix, si risparmia un passaggio di mano.",
          "<b>Dove andrà il lavoro e per quanto.</b> Per pubblicità e video aziendali conta l'uso: canali, Paesi, durata della licenza.",
        ],
      },
      {
        h2: "E i diritti d'autore?",
        paragrafi: [
          "Il compenso per la scrittura è una cosa, i diritti d'autore un'altra: sono un'entrata separata del compositore, gestita da enti come la SIAE. Secondo la stessa indagine il 30% dei compositori incassa meno di 1.000 euro l'anno di diritti, e il 14,6% più di 50.000.",
        ],
      },
      {
        h2: "Se producete in Veneto",
        paragrafi: [
          "Il Fondo di produzione della Regione del Veneto chiede a chi riceve il contributo di spendere sul territorio almeno 20.000 euro per documentari e cortometraggi e 150.000 euro per lungometraggi e serie. Fra le spese che contano ci sono le prestazioni di professionisti dell'audiovisivo residenti o con sede operativa in Veneto: ne parliamo nella pagina <a href=\"/compositore-veneto/\">Compositori in Veneto</a>.",
        ],
      },
      {
        h2: "Cosa ci serve per un preventivo",
        punti: [
          "<b>A che punto è il progetto</b> e quando va consegnato.",
          "<b>Quanti minuti di musica</b> servono, anche a occhio.",
          "<b>Dove andrà</b>: festival, sala, piattaforma, televisione, web.",
          "<b>Che musica immaginate</b>: pianoforte e archi, elettronica, un organico preciso.",
        ],
      },
    ],
    lavori: [],
    domande: [
      {
        d: "Quanto viene pagato un compositore per un film in Italia?",
        r: "Secondo l'indagine ACMF pubblicata nel marzo 2025, circa un terzo dei compositori professionisti ha ricevuto per l'ultima colonna sonora meno di 5.000 euro, un altro terzo fra 5.000 e 10.000, il 22% fra 10.000 e 20.000 e solo una piccola percentuale oltre 25.000 euro.",
      },
      {
        d: "Il compenso comprende i diritti d'autore?",
        r: "No. Il premio partitura paga la scrittura della musica; i diritti d'autore sono un'entrata separata del compositore, gestita da enti come la SIAE.",
      },
    ],
    fonti: [
      ["Kristian Sensini, «Il mestiere del compositore di musica per film in Italia: un'indagine sulla professione», Colonnesonore.net, 19 marzo 2025", "https://www.colonnesonore.net/contenuti-speciali/dossier/10731-il-mestiere-del-compositore-di-musica-per-film-in-italia-un-indagine-sulla-professione.html"],
      ["Veneto Film Commission — Fondo di Produzione 2026", "https://venetofilmcommission.com/it/fondo/fondo-di-produzione-2026/"],
    ],
    correlati: ["/musica-per-film/", "/musica-per-documentari/", "/musica-per-video-aziendali/", "/compositore-veneto/"],
  },

  /* ------------------------------------------------------------ */
  {
    slug: "compositore-veneto",
    // ricerche: compositore veneto, compositore vicenza, bassano compositore, compositore padovano;
    // e chi produce con il Fondo di produzione della Regione del Veneto
    titolo: "Compositori in Veneto per film, documentari e serie | CRASTEL Studio",
    sopra: "Bassano del Grappa, Vicenza",
    h1: "Compositori in Veneto",
    descrizione:
      "CRASTEL Studio è uno studio di composizione per immagini con sede a Bassano del Grappa (Vicenza). Per chi produce con il Fondo di produzione della Regione del Veneto: le prestazioni di professionisti con sede in Veneto contano nella spesa sul territorio.",
    servizio: "Composizione di musica originale per produzioni audiovisive in Veneto",
    paragrafi: [
      "CRASTEL Studio ha sede a Bassano del Grappa, in provincia di Vicenza; Vicenza, Padova e Treviso sono a meno di un'ora di strada. <a href=\"/marco-crivellaro/\">Marco Crivellaro</a> si è diplomato con lode in composizione al Conservatorio «Agostino Steffani» di Castelfranco Veneto, e il suo album «2 Planets» è stato registrato al Teatro delle Voci di Treviso.",
      "In Veneto abbiamo scritto la colonna sonora del video di <a href=\"/lavori/trodoi-trails/\">Trodoi/Trails</a> sui sentieri della Valle del Brenta. I documentari di Manrico Dell'Agnola con le musiche di Marco sono stati proiettati a Mel per il Camminando Festival (<a href=\"/lavori/immenso-blu/\">«Immenso Blu»</a>), a Conegliano e ad Alleghe (<a href=\"/lavori/phandambiri/\">«Il mistero del Phandambiri»</a>), e Marco ha suonato a Operaestate, il festival di Bassano del Grappa.",
    ],
    sezioni: [
      {
        h2: "Il Fondo di produzione 2026 della Regione del Veneto",
        paragrafi: [
          "Il bando PR-FESR 2021-2027 della Regione del Veneto, presentato dalla Veneto Film Commission, sostiene le piccole e medie imprese di produzione cinematografica (codice ATECO 59.11) con una dotazione di 1.840.000 euro per ogni sportello.",
          "Per accedere, il progetto deve sostenere in Veneto una spesa minima di <b>150.000 euro</b> per lungometraggi e serie (tipologia A) e di <b>20.000 euro</b> per documentari e cortometraggi (tipologia B).",
          "Fra le spese sul territorio il bando indica le «prestazioni effettuate da professionisti del settore audiovisivo» da parte di soggetti residenti o con sede operativa in Veneto. Uno studio di composizione con sede a Bassano del Grappa rientra in questa descrizione: la musica originale del film può contribuire alla quota veneta. L'imputazione della singola spesa va sempre verificata sul bando e con chi segue la rendicontazione.",
          "Il <b>secondo sportello 2026 apre il 1° dicembre 2026</b> e chiude il 2 febbraio 2027. I budget si compongono prima: è il momento per mettere la musica nel preventivo.",
        ],
      },
    ],
    lavori: ["trodoi-trails", "immenso-blu", "phandambiri"],
    domande: [
      {
        d: "La musica originale conta nella spesa sul territorio del bando veneto?",
        r: "Il Fondo di produzione 2026 conta fra le spese sul territorio le prestazioni di professionisti del settore audiovisivo residenti o con sede operativa in Veneto. CRASTEL Studio ha sede a Bassano del Grappa. La singola voce va verificata sul bando e con chi cura la rendicontazione del progetto.",
      },
      {
        d: "Quando si presenta la domanda al Fondo di produzione 2026?",
        r: "Il secondo sportello apre il 1° dicembre 2026 alle 10 e chiude il 2 febbraio 2027 alle 17. Il primo sportello si è chiuso il 30 giugno 2026.",
      },
    ],
    fonti: [
      ["Veneto Film Commission — Fondo di Produzione 2026", "https://venetofilmcommission.com/it/fondo/fondo-di-produzione-2026/"],
      ["Regione del Veneto — scheda del bando", "https://bandi.regione.veneto.it/Public/Dettaglio?idAtto=13057&fromPage=Elenco&high=cinematografica"],
    ],
    correlati: ["/musica-per-documentari/", "/musica-per-film/", "/quanto-costa-una-colonna-sonora/"],
  },
];
