/* ============================================================
   CRASTEL — DATASET CENTRALE
   Fonte unica per i tre mockup. Aggiungere un progetto = aggiungere
   un oggetto a WORKS. Homepage, selected work, player, metadata e
   "next project" si generano da qui.

   VERIFICA DELLE FONTI (13/08/2026)
   [CERTO]        = aperto e letto direttamente
   [DICHIARATO]   = dichiarato dal canale ufficiale CRASTEL (linktr.ee/crastel)
   [DA VERIFICARE]= da confermare con Marco/Simone
   ============================================================ */

const STUDIO = {
  name: "CRASTEL",
  claim: "Original music for stories on screen",
  claimIt: "Musica originale per storie sullo schermo",
  base: "Bassano del Grappa, Italia",
  // [CERTO] bio ufficiale su linktr.ee/crastel
  bioShort:
    "CRASTEL è il progetto comune di Marco Crivellaro e Simone Castellan: musica originale per film, documentari e produzioni audiovisive. Pianoforte ed elettronica, scrittura tematica e sound design nello stesso gesto.",
  members: [
    {
      name: "Marco Crivellaro",
      alias: "Marcus Grimm",
      role: "Composizione, pianoforte, orchestrazione",
    },
    {
      name: "Simone Castellan",
      alias: null,
      role: "Composizione, sound design, produzione e mix",
    },
  ],
  email: "info@crastelstudio.com", // [DA VERIFICARE] dominio scaduto: DNS non risolve più
  links: {
    youtube: "https://www.youtube.com/@crastel3827",     // [CERTO]
    spotify: "https://open.spotify.com/artist/5VxcMXYiq5CqGUnfnWoj9B", // [CERTO]
    facebook: "https://www.facebook.com/crastel",        // [CERTO]
    linktree: "https://linktr.ee/crastel",               // [CERTO]
  },
};

const WORKS = [
  {
    slug: "alex-schwazer",
    title: "Il caso Alex Schwazer",
    titleEn: "Running for the Truth: Alex Schwazer",
    year: "2023",
    type: "Docuserie",
    typeLine: "Netflix Documentary Series",
    featured: true,
    order: 1,

    director: "", // [DA VERIFICARE]
    production: "",
    distributor: "Netflix",

    role: ["Musiche"], // [DICHIARATO] — precisare se score originale o brani in licenza

    cover: "assets/clean-f-Egf2hQq3Km8-2.jpg", // fotogramma da clip ufficiale Netflix Italia, watermark ritagliato
    focus: "center 24%", // taglia il watermark d'angolo: CRASTEL resta il marchio
    stillsNote: "[DA CHIEDERE] still ufficiali alla produzione per il sito definitivo",
    stills: ["assets/yt-Egf2hQq3Km8.jpg"],

    trailer: {
      platform: "youtube",
      id: "aXWi3--bsq8",
      channel: "Netflix Italia", // [CERTO] verificato via oEmbed
      url: "https://www.youtube.com/watch?v=aXWi3--bsq8",
      embedUrl: "https://www.youtube-nocookie.com/embed/aXWi3--bsq8",
      label: "Trailer ufficiale",
    },
    soundtrack: {},

    description:
      "La ricostruzione del caso di doping più discusso dell'atletica italiana: quattro episodi fra inchiesta giudiziaria e ritratto umano.",
    credits: [
      ["Distribuzione", "Netflix"],
      ["Anno", "2023"],
      ["Formato", "Serie documentaria"],
    ],
  },

  {
    slug: "il-caso-yara",
    title: "Il caso Yara: oltre ogni ragionevole dubbio",
    titleEn: "The Yara Gambirasio Case: Beyond Reasonable Doubt",
    year: "2024",
    type: "Documentario",
    typeLine: "Netflix Documentary",
    featured: true,
    order: 2,

    director: "", // [DA VERIFICARE]
    production: "",
    distributor: "Netflix",

    role: ["Musiche"], // [DICHIARATO]

    cover: "assets/clean-f-CXoJFIlEAtc-3.jpg",
    focus: "center 30%",
    stills: [],

    trailer: {
      platform: "youtube",
      id: "CXoJFIlEAtc",
      channel: "Netflix Italia", // [CERTO]
      url: "https://www.youtube.com/watch?v=CXoJFIlEAtc",
      embedUrl: "https://www.youtube-nocookie.com/embed/CXoJFIlEAtc",
      label: "Trailer ufficiale",
    },
    soundtrack: {},

    description:
      "Il caso giudiziario italiano più seguito dell'ultimo decennio, riaperto dalle testimonianze di chi lo ha vissuto da dentro.",
    credits: [
      ["Distribuzione", "Netflix"],
      ["Anno", "2024"],
      ["Formato", "Documentario"],
    ],
  },

  {
    slug: "immenso-blu",
    title: "Immenso Blu",
    titleEn: null,
    year: "2021",
    type: "Docufilm",
    typeLine: "Documentario di montagna e spedizione",
    featured: true,
    order: 3,

    director: "Manrico Dell'Agnola", // [CERTO]
    production: "", // [DA VERIFICARE]
    distributor: "",

    role: ["Musica originale"], // [CERTO] trailer caricato dal canale CRASTEL

    cover: "assets/yt-orK0VpHFPDc.jpg",
    stills: ["assets/cover-immensoblu.jpg"],

    trailer: {
      platform: "youtube",
      id: "orK0VpHFPDc",
      channel: "CRASTEL", // [CERTO]
      url: "https://www.youtube.com/watch?v=orK0VpHFPDc",
      embedUrl: "https://www.youtube-nocookie.com/embed/orK0VpHFPDc",
      label: "Trailer ufficiale",
    },
    soundtrack: {
      // [CERTO] iTunes API: 15 tracce, 04/02/2024
      appleMusic:
        "https://music.apple.com/it/album/immenso-blu-original-motion-picture-soundtrack/1789431593",
      spotify: "https://open.spotify.com/album/70MVmKAEoQTLwahVIVsvhl",
      tracks: 15,
      released: "2024",
      cover: "assets/cover-immensoblu.jpg",
    },

    description:
      "Tre alpinisti attraversano il Passaggio di Drake per raggiungere la Penisola Antartica: nuove linee di salita e campionamenti scientifici sui ghiacci. Menzione speciale della giuria allo Swiss Mountain Film Festival.",
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
    type: "Cortometraggio",
    typeLine: "Film di montagna — Karpos",
    featured: true,
    order: 4,

    director: "", // [DA VERIFICARE]
    production: "Karpos", // [CERTO] il film è pubblicato dal canale ufficiale Karpos
    distributor: "",

    role: ["Musica originale"], // [CERTO] album accreditato a Crastel

    cover: "assets/yt-cq9qnX32Zos.jpg",
    stills: ["assets/cover-donnafugata.jpg"],

    trailer: {
      platform: "youtube",
      id: "cq9qnX32Zos",
      channel: "Karpos", // [CERTO] verificato via oEmbed
      url: "https://www.youtube.com/watch?v=cq9qnX32Zos",
      embedUrl: "https://www.youtube-nocookie.com/embed/cq9qnX32Zos",
      label: "Guarda il film",
    },

    soundtrack: {
      // [CERTO] iTunes API: EP 6 tracce, 19/10/2021
      appleMusic:
        "https://music.apple.com/it/album/donnafugata-original-motion-picture-soundtrack-feat/1808211715",
      spotify: null, // [DA VERIFICARE] id album
      tracks: 6,
      released: "2021",
      cover: "assets/cover-donnafugata.jpg",
      trackNames: ["Beginning", "Echoes", "Drone", "Finale"], // [CERTO] 4 di 6
    },

    description:
      "Selezione ufficiale al 67° Trento Film Festival. Colonna sonora elettronica e ambientale firmata insieme a Federico Motta: pianoforte trattato, droni e code sospese.",
    credits: [
      ["Festival", "67° Trento Film Festival — selezione ufficiale"],
      ["Musica", "Marco Crivellaro, Simone Castellan, Federico Motta"],
      ["Pubblicazione", "2021 — 6 brani"],
    ],
  },

  {
    slug: "piccola-storia-damore",
    title: "Piccola Storia d'Amore",
    titleEn: null,
    year: "2022",
    type: "Cortometraggio",
    typeLine: "Short film",
    featured: true,
    order: 5,

    director: "", // [DA VERIFICARE]
    production: "Black Aurora Films", // [CERTO] trailer pubblicato dal loro canale
    distributor: "",

    role: ["Compositore"], // [CERTO] IMDb tt19460284

    cover: "assets/f-DZev67wsBo0-1.jpg",
    focus: "center 55%",
    stills: ["assets/cover-piccolastoria.jpg"],

    trailer: {
      platform: "youtube",
      id: "DZev67wsBo0",
      channel: "Black Aurora Films", // [CERTO]
      url: "https://www.youtube.com/watch?v=DZev67wsBo0",
      embedUrl: "https://www.youtube-nocookie.com/embed/DZev67wsBo0",
      label: "Trailer ufficiale",
    },

    soundtrack: {
      // [CERTO] iTunes API: EP 5 tracce, 27/05/2022
      appleMusic: "https://music.apple.com/it/album/piccola-storia-damore-ep/1789435287",
      spotify: "https://open.spotify.com/album/5cW8cgiCbm6qTtwngUIGt2",
      tracks: 5,
      released: "2022",
      cover: "assets/cover-piccolastoria.jpg",
    },

    description:
      "Cinque miniature per pianoforte e archi. Scrittura intima, tempi lunghi, nessun effetto.",
    credits: [
      ["Ruolo", "Compositore"],
      ["Anno", "2022"],
    ],
  },

  {
    slug: "la-ricorrenza",
    title: "La Ricorrenza",
    titleEn: null,
    year: "2020",
    type: "Cortometraggio",
    typeLine: "Short film",
    featured: false,
    order: 6,

    director: "Davide Serra", // [CERTO] il corto è pubblicato dal canale del regista
    production: "Alpha Film", // [DA VERIFICARE]
    distributor: "",

    role: ["Musica originale"], // [CERTO] IMDb tt12288134

    cover: "assets/yt-am2A8bLgw1g.jpg",
    stills: [],
    trailer: {
      platform: "youtube",
      id: "am2A8bLgw1g",
      channel: "Davide Serra", // [CERTO]
      url: "https://www.youtube.com/watch?v=am2A8bLgw1g",
      embedUrl: "https://www.youtube-nocookie.com/embed/am2A8bLgw1g",
      label: "Guarda il corto",
    },
    soundtrack: {},

    description:
      "Una vedova rende omaggio al marito nel giorno del loro anniversario. Selezionato in festival, tra cui Aracnea Festival.",
    credits: [["Regia", "Davide Serra"], ["Anno", "2020"], ["Ruolo", "Musica originale"]],
  },

  {
    slug: "latronico",
    title: "Latronico, una terra di emozioni",
    titleEn: null,
    year: "2021",
    type: "Documentario turistico",
    typeLine: "Film territoriale",
    featured: false,
    order: 8,

    director: "",
    production: "Pro Loco Latronico", // [CERTO] canale che pubblica
    distributor: "",
    role: ["Musica originale"],

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
    description: "Ritratto di un territorio lucano fra terme, pietra e montagna.",
    credits: [["Anno", "2021"], ["Ruolo", "Musica originale"]],
  },

  {
    slug: "maglificio-pini",
    title: "Maglificio Pini",
    titleEn: null,
    year: "2020",
    type: "Branded film",
    typeLine: "Film d'impresa",
    featured: false,
    order: 9,

    director: "",
    production: "Maglificio Pini", // [CERTO] canale che pubblica
    distributor: "",
    role: ["Musica originale"],

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

  {
    slug: "live-ensemble",
    title: "Wanderlust — live",
    titleEn: null,
    year: "2022",
    type: "Live",
    typeLine: "Marcus Grimm & Ensemble, Valbrenta",
    featured: false,
    order: 7,

    director: "",
    production: "",
    distributor: "",

    role: ["Composizione", "Pianoforte"],

    cover: "assets/yt-7x2psSyEOTU.jpg",
    stills: ["assets/yt-PVcxAgewgAU.jpg"],

    trailer: {
      platform: "youtube",
      id: "7x2psSyEOTU",
      channel: "CRASTEL", // [CERTO]
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
];

// Utility condivise dai tre mockup
const featured = () => WORKS.filter((w) => w.featured).sort((a, b) => a.order - b.order);
const bySlug = (s) => WORKS.find((w) => w.slug === s);
const nextOf = (slug) => {
  const f = featured();
  const i = f.findIndex((w) => w.slug === slug);
  return f[(i + 1) % f.length];
};
const embedSrc = (w, { autoplay = 1, mute = 0 } = {}) =>
  `${w.trailer.embedUrl}?autoplay=${autoplay}&mute=${mute}&rel=0&modestbranding=1&playsinline=1`;
