/* ============================================================
   CRASTEL — DATASET CENTRALE
   Fonte unica del sito. Aggiungere un lavoro = aggiungere un oggetto
   a WORKS: catalogo, filtri, schede, player e "prossima scheda" si
   rigenerano da soli.

   VERIFICA DELLE FONTI (aggiornata al 14/08/2026)
   [CERTO]         = fonte aperta e letta direttamente
   [DA VERIFICARE] = da confermare con Marco/Simone
   ============================================================ */

const STUDIO = {
  name: "CRASTEL",
  claim: "Musica originale per film, documentari e serie",
  base: "Bassano del Grappa, Italia",
  email: "castellansimone@gmail.com",

  members: [
    {
      name: "Marco Crivellaro",
      alias: "Marcus Grimm",
      // [CERTO] scheda ufficiale OperaEstate
      role: "Composizione, pianoforte, orchestrazione",
      nota: "Diplomato in composizione con lode al Conservatorio «Agostino Steffani» di Castelfranco Veneto.",
    },
    {
      name: "Simone Castellan",
      alias: null,
      role: "Programmazione musicale, sound design e post produzione",
      nota: null,
    },
  ],

  links: {
    youtube: "https://www.youtube.com/@crastel3827",
    spotify: "https://open.spotify.com/artist/5VxcMXYiq5CqGUnfnWoj9B",
    spotifyMarco: "https://open.spotify.com/artist/6zOh1DcaVttzIVNSjVspeU",
    facebook: "https://www.facebook.com/crastel",
    linktree: "https://linktr.ee/crastel",
  },
};

const WORKS = [
  {
    slug: "alex-schwazer",
    title: "Il caso Alex Schwazer",
    titleEn: "Running for the Truth: Alex Schwazer",
    year: "2023",
    type: "Serie documentaria",
    typeLine: "Netflix — 4 episodi",
    featured: true,
    order: 1,

    director: "Massimo Cappello", // [CERTO] Sky TG24, ANSA
    production: "Indigo Stories", // [CERTO]
    distributor: "Netflix",

    role: ["Brano originale «Evo»"], // [CERTO 14/08] confermato da Simone
    firma: "Marco Crivellaro e Simone Castellan", // [CERTO] accrediti Spotify
    awards: [],

    cover: "assets/clean-f-Egf2hQq3Km8-2.jpg",
    focus: "center 24%",
    stills: ["assets/yt-Egf2hQq3Km8.jpg"],

    trailer: {
      platform: "youtube",
      id: "aXWi3--bsq8",
      channel: "Netflix Italia",
      url: "https://www.youtube.com/watch?v=aXWi3--bsq8",
      embedUrl: "https://www.youtube-nocookie.com/embed/aXWi3--bsq8",
      label: "Trailer ufficiale",
    },
    soundtrack: {
      // [CERTO] su Spotify «Evo» è accreditato a Marco Crivellaro e Simone Castellan
      spotify: "https://open.spotify.com/track/4egTVlSWUyAmmIIEL29bZJ",
      appleMusic: "https://music.apple.com/it/album/evo-single/1789223808",
      tracks: 1,
      label: "Ascolta «Evo», il brano nella serie",
    },

    description:
      "La ricostruzione del caso di doping più discusso dell'atletica italiana: quattro episodi fra inchiesta giudiziaria e ritratto umano. Nella serie è entrato «Evo».",
    credits: [
      ["Regia", "Massimo Cappello"],
      ["Produzione", "Indigo Stories"],
      ["Distribuzione", "Netflix — 13 aprile 2023"],
      ["Brano", "Evo — Marco Crivellaro, Simone Castellan"],
    ],
  },

  {
    slug: "il-caso-yara",
    title: "Il caso Yara: oltre ogni ragionevole dubbio",
    titleEn: "The Yara Gambirasio Case: Beyond Reasonable Doubt",
    year: "2024",
    type: "Serie documentaria",
    typeLine: "Netflix — 5 episodi",
    featured: true,
    order: 2,

    director: "Gianluca Neri", // [CERTO] Wikipedia
    production: "Quarantadue", // [CERTO]
    distributor: "Netflix",

    role: ["Musiche"], // [DA VERIFICARE] quale brano, come per Schwazer
    awards: [],

    cover: "assets/clean-f-CXoJFIlEAtc-3.jpg",
    focus: "center 30%",
    stills: [],

    trailer: {
      platform: "youtube",
      id: "CXoJFIlEAtc",
      channel: "Netflix Italia",
      url: "https://www.youtube.com/watch?v=CXoJFIlEAtc",
      embedUrl: "https://www.youtube-nocookie.com/embed/CXoJFIlEAtc",
      label: "Trailer ufficiale",
    },
    soundtrack: {},

    description:
      "Cinque episodi sul caso giudiziario italiano più seguito dell'ultimo decennio, costruiti su sessanta faldoni di atti e sulle testimonianze di chi l'ha vissuto da dentro.",
    credits: [
      ["Regia", "Gianluca Neri"],
      ["Produzione", "Quarantadue"],
      ["Distribuzione", "Netflix — 16 luglio 2024"],
    ],
  },

  {
    slug: "immenso-blu",
    title: "Immenso Blu",
    titleEn: null,
    year: "2021",
    type: "Documentario",
    typeLine: "Documentario di spedizione",
    featured: true,
    order: 3,

    director: "Manrico Dell'Agnola", // [CERTO]
    production: "",
    distributor: "",

    role: ["Musica originale"],
    // [CERTO] Swiss Mountain Film Festival
    awards: ["Menzione speciale della giuria — Swiss Mountain Film Festival"],

    cover: "assets/yt-orK0VpHFPDc.jpg",
    stills: ["assets/cover-immensoblu.jpg"],

    trailer: {
      platform: "youtube",
      id: "orK0VpHFPDc",
      channel: "CRASTEL",
      url: "https://www.youtube.com/watch?v=orK0VpHFPDc",
      embedUrl: "https://www.youtube-nocookie.com/embed/orK0VpHFPDc",
      label: "Trailer ufficiale",
    },
    soundtrack: {
      appleMusic:
        "https://music.apple.com/it/album/immenso-blu-original-motion-picture-soundtrack/1789431593",
      spotify: "https://open.spotify.com/album/70MVmKAEoQTLwahVIVsvhl",
      tracks: 15,
      released: "2024",
      cover: "assets/cover-immensoblu.jpg",
    },

    description:
      "Tre alpinisti attraversano il Passaggio di Drake per raggiungere la Penisola Antartica: nuove linee di salita e campionamenti scientifici sui ghiacci.",
    credits: [
      ["Regia", "Manrico Dell'Agnola"],
      ["Musica originale", "CRASTEL"],
      ["Colonna sonora", "15 brani, 2024"],
    ],
  },

  {
    slug: "donnafugata",
    title: "Donnafugata",
    titleEn: null,
    year: "2021",
    type: "Documentario",
    typeLine: "Film di montagna — Karpos",
    featured: true,
    order: 4,

    director: "", // [DA VERIFICARE]
    production: "Karpos",
    distributor: "",

    role: ["Musica originale"],
    // [CERTO] il cartello di apertura compare nel film
    awards: ["Selezione ufficiale — 67° Trento Film Festival"],

    cover: "assets/yt-cq9qnX32Zos.jpg",
    stills: ["assets/cover-donnafugata.jpg"],

    trailer: {
      platform: "youtube",
      id: "cq9qnX32Zos",
      channel: "Karpos",
      url: "https://www.youtube.com/watch?v=cq9qnX32Zos",
      embedUrl: "https://www.youtube-nocookie.com/embed/cq9qnX32Zos",
      label: "Guarda il film",
    },
    soundtrack: {
      appleMusic:
        "https://music.apple.com/it/album/donnafugata-original-motion-picture-soundtrack-feat/1808211715",
      spotify: "https://open.spotify.com/artist/6zOh1DcaVttzIVNSjVspeU",
      tracks: 6,
      released: "2021",
      cover: "assets/cover-donnafugata.jpg",
    },

    description:
      "Una via nuova su una torre dolomitica, raccontata dal basso verso l'alto. Colonna sonora elettronica e ambientale scritta con Federico Motta.",
    credits: [
      ["Produzione", "Karpos"],
      ["Musica", "Marco Crivellaro, Simone Castellan, Federico Motta"],
      ["Colonna sonora", "6 brani, 2021"],
    ],
  },

  {
    slug: "piccola-storia-damore",
    title: "Piccola Storia d'Amore",
    titleEn: null,
    year: "2022",
    type: "Cortometraggio",
    typeLine: "Corto — Black Aurora Films",
    featured: true,
    order: 8,

    director: "Davide Serra", // [CERTO] IMDb
    production: "Black Aurora Films",
    distributor: "",

    role: ["Compositore"],
    awards: [],

    cover: "assets/f-DZev67wsBo0-1.jpg",
    focus: "center 55%",
    stills: ["assets/cover-piccolastoria.jpg"],

    trailer: {
      platform: "youtube",
      id: "DZev67wsBo0",
      channel: "Black Aurora Films",
      url: "https://www.youtube.com/watch?v=DZev67wsBo0",
      embedUrl: "https://www.youtube-nocookie.com/embed/DZev67wsBo0",
      label: "Trailer ufficiale",
    },
    soundtrack: {
      appleMusic: "https://music.apple.com/it/album/piccola-storia-damore-ep/1789435287",
      spotify: "https://open.spotify.com/album/5cW8cgiCbm6qTtwngUIGt2",
      tracks: 5,
      released: "2022",
      cover: "assets/cover-piccolastoria.jpg",
    },

    description:
      "Un uomo si innamora di una ragazza morta. Cinque miniature per pianoforte e archi: scrittura intima, tempi lunghi, nessun effetto.",
    credits: [
      ["Regia", "Davide Serra"],
      ["Produzione", "Black Aurora Films"],
      ["Colonna sonora", "5 brani, 2022"],
    ],
  },

  {
    slug: "la-ricorrenza",
    title: "La Ricorrenza",
    titleEn: "The Anniversary",
    year: "2020",
    type: "Cortometraggio",
    typeLine: "Corto — regia di Davide Serra",
    featured: true,
    order: 9,

    director: "Davide Serra",
    production: "Alpha Film", // [DA VERIFICARE]
    distributor: "",

    role: ["Musica originale"],
    // [CERTO] allori impressi sulla locandina del corto
    awards: ["Selezioni in festival: Red Wood Film Festival, We Make Films, Aracnea Festival"],

    cover: "assets/yt-am2A8bLgw1g.jpg",
    stills: [],
    trailer: {
      platform: "youtube",
      id: "am2A8bLgw1g",
      channel: "Davide Serra",
      url: "https://www.youtube.com/watch?v=am2A8bLgw1g",
      embedUrl: "https://www.youtube-nocookie.com/embed/am2A8bLgw1g",
      label: "Guarda il corto",
    },
    soundtrack: {},

    description:
      "Una vedova rende omaggio al marito nel giorno del loro anniversario.",
    credits: [
      ["Regia", "Davide Serra"],
      ["Anno", "2020"],
      ["Ruolo", "Musica originale"],
    ],
  },

  {
    slug: "live-ensemble",
    title: "Wanderlust — live",
    titleEn: null,
    year: "2022",
    type: "Concerto",
    typeLine: "Marcus Grimm & Ensemble, Valbrenta",
    featured: true,
    order: 16,

    director: "",
    production: "",
    distributor: "",

    role: ["Composizione", "Pianoforte"],
    awards: [],

    cover: "assets/yt-7x2psSyEOTU.jpg",
    stills: ["assets/yt-PVcxAgewgAU.jpg"],

    trailer: {
      platform: "youtube",
      id: "7x2psSyEOTU",
      channel: "CRASTEL",
      url: "https://www.youtube.com/watch?v=7x2psSyEOTU",
      embedUrl: "https://www.youtube-nocookie.com/embed/7x2psSyEOTU",
      label: "Guarda il live",
    },
    soundtrack: {},

    description:
      "Il repertorio CRASTEL portato dal vivo in quartetto: pianoforte, violoncello, basso e batteria.",
    credits: [
      ["Pianoforte", "Marco Crivellaro"],
      ["Violoncello", "Federico Motta"],
      ["Batteria", "Riccardo Paolini"],
      ["Basso", "Francesco Trento"],
    ],
  },

  {
    slug: "latronico",
    title: "Latronico, una terra di emozioni",
    titleEn: null,
    year: "2021",
    type: "Documentario",
    typeLine: "Ritratto di un territorio",
    featured: true,
    order: 10,

    director: "",
    production: "Pro Loco Latronico",
    distributor: "",
    role: ["Musica originale"],
    awards: [],

    cover: "assets/yt-30FGUJkpow8.jpg",
    stills: [],
    trailer: {
      platform: "youtube",
      id: "30FGUJkpow8",
      channel: "Pro Loco Latronico",
      url: "https://www.youtube.com/watch?v=30FGUJkpow8",
      embedUrl: "https://www.youtube-nocookie.com/embed/30FGUJkpow8",
      label: "Guarda il film",
    },
    soundtrack: {},
    description: "Un territorio lucano fra terme, pietra e montagna.",
    credits: [["Produzione", "Pro Loco Latronico"], ["Anno", "2021"], ["Ruolo", "Musica originale"]],
  },

  {
    slug: "maglificio-pini",
    title: "Maglificio Pini",
    titleEn: null,
    year: "2020",
    type: "Film d'impresa",
    typeLine: "Ritratto d'azienda",
    featured: true,
    order: 11,

    director: "",
    production: "Maglificio Pini",
    distributor: "",
    role: ["Musica originale"],
    awards: [],

    cover: "assets/yt-M1lvrm07Pc8.jpg",
    stills: [],
    trailer: {
      platform: "youtube",
      id: "M1lvrm07Pc8",
      channel: "Maglificio Pini",
      url: "https://www.youtube.com/watch?v=M1lvrm07Pc8",
      embedUrl: "https://www.youtube-nocookie.com/embed/M1lvrm07Pc8",
      label: "Guarda il film",
    },
    soundtrack: {},
    description: "Il gesto artigianale raccontato come processo: mani, macchine, tempo.",
    credits: [["Anno", "2020"], ["Ruolo", "Musica originale"]],
  },

/* ---------- sonorizzazioni e concorsi di composizione ---------- */
  {
    slug: "mercurio-dargento",
    title: "Beslan — partitura per il Mercurio d'Argento",
    titleEn: null,
    year: "2025",
    type: "Sonorizzazione",
    typeLine: "Premio Mercurio d'Argento — VII edizione",
    featured: true,
    order: 5,

    director: "",
    production: "Città di Massa",
    distributor: "",
    firma: "Marco Crivellaro",
    role: ["Composizione", "Orchestrazione"],
    // [CERTO] La Nazione, agosto 2025
    awards: ["Primo premio — Premio Mercurio d'Argento 2025, Città di Massa"],

    cover: "",
    stills: [],
    trailer: null,
    soundtrack: {},

    description:
      "Partitura scritta per immagini sulla strage di Beslan del 2004. La giuria ha premiato «un'orchestrazione con una buonissima varietà timbrica, evocativa senza mai essere ridondante, equilibrata ma con un gusto tematico molto incisivo, in empatia rispettosa con il dramma».",
    credits: [
      ["Premio", "Mercurio d'Argento 2025 — VII edizione"],
      ["Dove", "Città di Massa, 21-23 agosto 2025"],
      ["Firma", "Marco Crivellaro"],
    ],
  },

  {
    slug: "sounds-of-silences",
    title: "Sounds of Silences — Romaeuropa",
    titleEn: null,
    year: "2020",
    type: "Sonorizzazione",
    typeLine: "Concorso internazionale di composizione per le immagini",
    featured: true,
    order: 6,

    director: "",
    production: "Edison Studio, Cineteca di Bologna",
    distributor: "Romaeuropa Festival",
    firma: "Simone Castellan",
    role: ["Composizione", "Elettronica"],
    // [CERTO] archivio Romaeuropa + Edison Studio
    awards: ["Fra i tre premiati su 162 candidature da 36 Paesi"],

    cover: "",
    stills: [],
    trailer: null,
    soundtrack: {},

    description:
      "Colonna sonora originale per un film muto scelto da Edison Studio con la Cineteca di Bologna, eseguita dal vivo in sincrono con le immagini al Foyer 1 dell'Ex Mattatoio di Roma, dentro il Romaeuropa Festival.",
    credits: [
      ["Concorso", "Sounds of Silences — V edizione"],
      ["Dove", "Ex Mattatoio, Roma — 21 ottobre 2020"],
      ["Con", "Edison Studio, Cineteca di Bologna, Romaeuropa Festival"],
      ["Firma", "Simone Castellan"],
    ],
  },

  {
    slug: "lago-film-fest",
    title: "Your sound for silents — Lago Film Fest",
    titleEn: null,
    year: "2023",
    type: "Sonorizzazione",
    typeLine: "Musica per il cinema muto",
    featured: true,
    order: 7,

    director: "",
    production: "Lago Film Fest",
    distributor: "",
    firma: "Marco Crivellaro",
    role: ["Composizione"],
    // [CERTO] scheda ufficiale OperaEstate
    awards: ["Primo premio per la miglior musica — Lago Film Fest 2023"],

    cover: "",
    stills: [],
    trailer: null,
    soundtrack: {},

    description:
      "Sonorizzazione originale per il concorso di musica sul cinema muto del Lago Film Fest, a Revine Lago.",
    credits: [
      ["Premio", "Your sound for silents — primo premio"],
      ["Dove", "Lago Film Fest 2023, Revine Lago"],
      ["Firma", "Marco Crivellaro"],
    ],
  },

  /* ---------- dischi e concerti ---------- */
  {
    slug: "2-planets",
    title: "2 Planets",
    titleEn: null,
    year: "2019",
    type: "Album",
    typeLine: "Marcus Grimm — album d'esordio",
    featured: true,
    order: 12,

    director: "",
    production: "La Valigetta", // [CERTO] rockit, lavaligetta.com
    distributor: "",
    firma: "Marcus Grimm (Marco Crivellaro)",
    role: ["Composizione", "Pianoforte", "Produzione"],
    awards: [],

    cover: "assets/cover-2planets.jpg",
    stills: [],

    trailer: {
      platform: "youtube",
      id: "_rLzc1BEkeo",
      channel: "MarcusGrimmVEVO", // [CERTO] verificato via oEmbed
      url: "https://www.youtube.com/watch?v=_rLzc1BEkeo",
      embedUrl: "https://www.youtube-nocookie.com/embed/_rLzc1BEkeo",
      label: "Guarda «Gaia»",
    },
    soundtrack: {
      appleMusic: "https://music.apple.com/it/album/2-planets/1742696634",
      spotify: "https://open.spotify.com/artist/04rZw1GR1yi7AnM1Z4jxPP",
      tracks: 12,
      released: "2019",
    },

    description:
      "Dodici brani fra pianoforte, archi ed elettronica: un viaggio che parte da «Gaia» e finisce su «Pandora». Registrato al Teatro delle Voci di Treviso e masterizzato ad Abbey Road, Londra.",
    credits: [
      ["Etichetta", "La Valigetta"],
      ["Registrazione", "Teatro delle Voci, Treviso"],
      ["Mastering", "Abbey Road Studios, Londra"],
      ["Firma", "Marcus Grimm — Marco Crivellaro"],
    ],
  },

  {
    slug: "bosco-session",
    title: "BOSCO SESSION",
    titleEn: null,
    year: "2025",
    type: "Album",
    typeLine: "Registrazione dal vivo",
    featured: true,
    order: 13,

    director: "",
    production: "",
    distributor: "",
    firma: "Marcus Grimm con Federico Motta",
    role: ["Composizione", "Pianoforte"],
    awards: [],

    cover: "assets/cover-boscosession.jpg",
    stills: [],
    trailer: null,
    soundtrack: {
      appleMusic: "https://music.apple.com/it/album/bosco-session/1794199142",
      spotify: "https://open.spotify.com/artist/04rZw1GR1yi7AnM1Z4jxPP",
      tracks: 10,
      released: "2025",
    },

    description:
      "Dieci brani registrati dal vivo nel bosco: il repertorio riletto per pianoforte e violoncello, senza rete.",
    credits: [
      ["Anno", "2025 — 10 brani"],
      ["Con", "Federico Motta, violoncello"],
      ["Firma", "Marcus Grimm — Marco Crivellaro"],
    ],
  },

  {
    slug: "by-this-river",
    title: "By this River",
    titleEn: null,
    year: "2024",
    type: "Concerto",
    typeLine: "Composizione originale per OperaEstate",
    featured: true,
    order: 14,

    director: "",
    production: "OperaEstate Festival Veneto, con Veneto Barbaro", // [CERTO]
    distributor: "",
    firma: "Marcus Grimm & Ensemble",
    role: ["Composizione", "Pianoforte"],
    awards: [],

    cover: "",
    stills: [],
    trailer: null,
    soundtrack: {},

    description:
      "Un concerto scritto per il fiume: il Brenta dalla sorgente alla foce, con il suono dell'acqua che entra nell'organico come uno strumento. Composizione originale commissionata per la serata, eseguita in riva al fiume a Campolongo di Valbrenta.",
    credits: [
      ["Dove", "Campolongo, Valbrenta — 30 luglio 2024"],
      ["Produzione", "OperaEstate Festival Veneto con Veneto Barbaro"],
      ["Firma", "Marcus Grimm & Ensemble"],
    ],
  },

  {
    slug: "pianospheres",
    title: "Pianospheres",
    titleEn: null,
    year: "2026",
    type: "Concerto",
    typeLine: "Marcus Grimm feat. Federico Motta",
    featured: true,
    order: 15,

    director: "",
    production: "Alveare Culturale Studio ETS", // [CERTO] Eventbrite
    distributor: "",
    firma: "Marcus Grimm con Federico Motta",
    role: ["Composizione", "Pianoforte"],
    awards: [],

    cover: "",
    stills: [],
    trailer: null,
    soundtrack: {},

    description:
      "Pianoforte e violoncello in dialogo: il repertorio dello studio portato in concerto a Milano.",
    credits: [
      ["Dove", "Milano — 6 marzo 2026"],
      ["Organizzazione", "Alveare Culturale Studio ETS"],
      ["Firma", "Marcus Grimm con Federico Motta"],
    ],
  },
];


// Utility condivise
const featured = () => WORKS.filter((w) => w.featured).sort((a, b) => a.order - b.order);
const bySlug = (s) => WORKS.find((w) => w.slug === s);
const nextOf = (slug) => {
  const f = featured();
  const i = f.findIndex((w) => w.slug === slug);
  return f[(i + 1) % f.length];
};
const embedSrc = (w, { autoplay = 1, mute = 0 } = {}) =>
  `${w.trailer.embedUrl}?autoplay=${autoplay}&mute=${mute}&rel=0&modestbranding=1&playsinline=1`;
