/* ============================================================
   PAGINE DELLE PERSONE
   Chi cerca «Marco Crivellaro» o «Simone Castellan» deve trovare una
   pagina che parla di quella persona, non un paragrafo dentro la home.
   Lo script legge data.js e scrive /marco-crivellaro/ e /simone-castellan/
   con biografia, lavori firmati, premi e dati strutturati Person.

   Uso:  node ops/persone.mjs     (dopo ogni modifica a data.js)
   ============================================================ */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { CSS, piede, scriviSitemap } from "./comune.mjs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const qui = dirname(fileURLToPath(import.meta.url));
const radice = join(qui, "..");
const sorgente = readFileSync(join(radice, "data.js"), "utf8");
const dati = new Function(sorgente + "\nreturn { WORKS, STUDIO, COMPETENZE };")();

const esc = (s) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* ---- chi ha fatto cosa: si legge dai contributi delle schede ---- */
const lavoriDi = (cognome) =>
  dati.WORKS.filter((w) => w.featured && w.trailer).filter((w) => {
    const testo = [(w.firma || ""), ...(w.contributi || []).map((c) => c[1])].join(" ");
    return testo.includes(cognome);
  }).sort((a, b) => a.order - b.order);

const ruoloIn = (w, cognome) =>
  (w.contributi || []).filter((c) => c[1].includes(cognome)).map((c) => c[0]).join(", ") || "Musiche";

/* ---- le due schede ---- */
const PERSONE = [
  {
    slug: "marco-crivellaro",
    nome: "Marco Crivellaro",
    alias: "Marcus Grimm",
    cognome: "Crivellaro",
    ruolo: "Compositore, pianista e orchestratore",
    titolo: "Marco Crivellaro — compositore per film e documentari",
    descrizione:
      "Marco Crivellaro, in arte Marcus Grimm, è compositore per immagini a Bassano del Grappa: musiche per serie Netflix, documentari di montagna e cortometraggi. Premio Mercurio d'Argento 2025.",
    bio: dati.STUDIO.members[0].bio,
    ritrattoGrande: dati.STUDIO.members[0].ritrattoGrande,
    fotografo: dati.STUDIO.members[0].fotografo,
    premi: [
      "Premio Mercurio d'Argento 2025 — Città di Massa, VII edizione, per una partitura ispirata alla strage di Beslan",
      "«Your sound for silents» 2023 — primo premio per la miglior musica al Lago Film Fest",
    ],
    formazione:
      "Diplomato con lode in composizione al Conservatorio «Agostino Steffani» di Castelfranco Veneto, sotto la guida del Maestro Gianluca Baldi.",
    dischi: [
      "«2 Planets» (2019), album d'esordio come Marcus Grimm su etichetta La Valigetta, registrato al Teatro delle Voci di Treviso e masterizzato ad Abbey Road, Londra.",
      "«BOSCO SESSION» (2025), registrazione dal vivo con il violoncellista Federico Motta.",
      "Concerti in festival fra cui Operaestate, Time Zones Festival e Porte Aperte Festival.",
    ],
    profili: [
      ["Spotify", dati.STUDIO.links.spotifyMarco],
      ["Canale YouTube CRASTEL", dati.STUDIO.links.youtube],
      ["Scheda OperaEstate", "https://operaestate.it/it/festival/musica?view=article&id=4358"],
    ],
  },
  {
    slug: "simone-castellan",
    nome: "Simone Castellan",
    alias: null,
    cognome: "Castellan",
    ruolo: "Compositore, sound designer e produttore",
    titolo: "Simone Castellan — compositore e sound designer",
    descrizione:
      "Simone Castellan è compositore e sound designer a Bassano del Grappa: programmazione musicale, progettazione del suono e post produzione per film, serie e documentari. Premiato a Sounds of Silences, Romaeuropa Festival.",
    bio: dati.STUDIO.members[1].bio,
    ritrattoGrande: dati.STUDIO.members[1].ritrattoGrande,
    fotografo: dati.STUDIO.members[1].fotografo,
    premi: [
      "«Sounds of Silences» 2020 — fra i tre compositori premiati su 162 candidature da 36 Paesi, al concorso internazionale di composizione per le immagini in movimento del Romaeuropa Festival con Edison Studio e la Cineteca di Bologna, con esecuzione dal vivo all'Ex Mattatoio di Roma",
    ],
    formazione: null,
    dischi: [],
    profili: [
      ["Canale YouTube CRASTEL", dati.STUDIO.links.youtube],
      ["Spotify CRASTEL", dati.STUDIO.links.spotify],
      ["Sounds of Silences, Romaeuropa Festival", "https://romaeuropa.net/en/archive/festival/year-2020/sounds-of-silences-2020/"],
    ],
  },
];


const pagina = (p) => {
  const lavori = lavoriDi(p.cognome);
  const persona = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `https://crastelstudio.com/${p.slug}/#persona`,
    name: p.nome,
    ...(p.alias ? { alternateName: p.alias } : {}),
    jobTitle: p.ruolo,
    description: p.descrizione,
    url: `https://crastelstudio.com/${p.slug}/`,
    ...(p.ritrattoGrande ? { image: `https://crastelstudio.com/${p.ritrattoGrande}` } : {}),
    nationality: { "@type": "Country", name: "Italia" },
    workLocation: { "@type": "Place", name: "Bassano del Grappa, Vicenza, Italia" },
    memberOf: { "@type": "Organization", "@id": "https://crastelstudio.com/#studio", name: "CRASTEL Studio" },
    knowsAbout: dati.COMPETENZE.argomenti,
    award: p.premi,
    ...(p.formazione
      ? { alumniOf: { "@type": "CollegeOrUniversity", name: "Conservatorio Agostino Steffani, Castelfranco Veneto" } }
      : {}),
    sameAs: p.profili.map((x) => x[1]),
  };

  return `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.titolo)} | CRASTEL Studio</title>
<meta name="description" content="${esc(p.descrizione)}">
<link rel="canonical" href="https://crastelstudio.com/${p.slug}/">
<meta property="og:type" content="profile">
<meta property="og:title" content="${esc(p.titolo)}">
<meta property="og:description" content="${esc(p.descrizione)}">
<meta property="og:url" content="https://crastelstudio.com/${p.slug}/">
${lavori[0] ? `<meta property="og:image" content="https://crastelstudio.com/${esc(lavori[0].cover)}">` : ""}
<script type="application/ld+json">${JSON.stringify(persona)}</script>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23E8E4DA'/%3E%3Ctext y='74' x='50' text-anchor='middle' font-family='Georgia,serif' font-weight='700' font-size='72' fill='%239F3029'%3EC%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..800&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>${CSS}</style>
</head>
<body>

<div class="topnav">
  <a class="logo" href="/">CRASTEL</a>
  <nav>
    <a href="/lavori/">Lavori</a>
    <a href="/#competenze">Cosa scriviamo</a>
    <a href="/#contatti">Contatti</a>
  </nav>
</div>

<main>
  <p class="briciole"><a href="/">CRASTEL Studio</a> — Chi siamo</p>
  <div class="testata">
    ${p.ritrattoGrande ? `<figure class="ritratto">
      <img src="/${esc(p.ritrattoGrande)}" alt="${esc(p.nome)}" width="140" height="140">
      ${p.fotografo ? `<figcaption>Foto ${esc(p.fotografo)}</figcaption>` : ""}
    </figure>` : ""}
    <div>
      <h1>${esc(p.nome)}${p.alias ? `<em>in arte ${esc(p.alias)}</em>` : ""}</h1>
      <p class="mestiere">${esc(p.ruolo)} — Bassano del Grappa (VI), Italia</p>
    </div>
  </div>

  <div class="corpo">
    <div>
      ${p.bio.map((x) => `<p>${esc(x)}</p>`).join("\n      ")}
      ${p.formazione ? `<h2>Formazione</h2><p>${esc(p.formazione)}</p>` : ""}
      ${p.dischi.length ? `<h2>Dischi e concerti</h2><div class="scheda"><ul>${p.dischi.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>` : ""}
    </div>
    <div>
      <h2 style="margin-top:0">Premi</h2>
      ${p.premi.map((x) => `<p class="premio">${esc(x)}</p>`).join("\n      ")}
      <h2>Dove ascoltarlo</h2>
      <div class="profili">${p.profili.map((x) => `<a href="${esc(x[1])}" rel="noopener">${esc(x[0])}</a>`).join("")}</div>
    </div>
  </div>

  <h2>Lavori firmati da ${esc(p.nome.split(" ")[0])}</h2>
  <div class="lavori">
    ${lavori
      .map(
        (w) => `<a class="lavoro" href="/lavori/${esc(w.slug)}/">
      <img src="/${esc(w.cover)}" alt="${esc(w.title)}" loading="lazy">
      <h3>${esc(w.title)}</h3>
      <p>${esc(w.type)} · ${esc(w.year)}<br>${esc(ruoloIn(w, p.cognome))}</p>
    </a>`
      )
      .join("\n    ")}
  </div>
</main>

` + piede();
};

for (const p of PERSONE) {
  const dir = join(radice, p.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), pagina(p));
  console.log(`${p.slug}/index.html — ${lavoriDi(p.cognome).length} lavori firmati`);
}

/* sitemap: si costruisce leggendo le cartelle (comune.mjs), così comprende anche le pagine di pagine.mjs */
scriviSitemap();
