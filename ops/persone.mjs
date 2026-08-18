/* ============================================================
   PAGINE DELLE PERSONE
   Chi cerca «Marco Crivellaro» o «Simone Castellan» deve trovare una
   pagina che parla di quella persona, non un paragrafo dentro la home.
   Lo script legge data.js e scrive /marco-crivellaro/ e /simone-castellan/
   con biografia, lavori firmati, premi e dati strutturati Person.

   Uso:  node ops/persone.mjs     (dopo ogni modifica a data.js)
   ============================================================ */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
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

const CSS = `
:root{--paper:#E8E4DA;--ink:#171715;--muted:#66625B;--red:#9F3029;--line:rgba(23,23,21,.22);--card:#EFEBE2;
 --serif:'Fraunces',Georgia,serif;--grot:'Instrument Sans',-apple-system,system-ui,sans-serif;--gut:clamp(16px,3.2vw,40px)}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--grot);line-height:1.6}
a{color:inherit}
.topnav{position:sticky;top:0;z-index:50;background:var(--paper);border-bottom:2px solid var(--ink);
 display:flex;justify-content:space-between;align-items:center;gap:18px;padding:12px var(--gut)}
.topnav .logo{font-family:var(--serif);font-weight:700;font-size:20px;text-decoration:none;letter-spacing:-.01em}
.topnav nav{display:flex;gap:20px}.topnav nav a{font-size:12.5px;font-weight:500;text-decoration:none}
.topnav nav a:hover{color:var(--red)}
main{padding:clamp(30px,5vw,64px) var(--gut) clamp(40px,7vw,90px);max-width:1400px}
.briciole{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
.briciole a{text-decoration:none}.briciole a:hover{color:var(--red)}
h1{font-family:var(--serif);font-weight:700;font-size:clamp(34px,6vw,72px);line-height:.98;margin:0;letter-spacing:-.03em}
h1 em{font-style:normal;color:var(--red);font-size:.5em;display:block;margin-top:10px;letter-spacing:0;font-weight:600}
.mestiere{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);margin:16px 0 0}
.testata{display:flex;gap:26px;align-items:center;flex-wrap:wrap}
.testata>div{min-width:0;flex:1 1 320px}
.testata .ritratto{margin:0;flex:0 0 auto}
.testata .ritratto img{width:140px;height:140px;border-radius:50%;object-fit:cover;display:block;background:var(--ink)}
.testata .ritratto figcaption{font-size:10px;letter-spacing:.11em;text-transform:uppercase;color:var(--muted);
 margin-top:9px;text-align:center;max-width:140px}
@media(max-width:560px){ .testata .ritratto img{width:104px;height:104px} }
.corpo{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(26px,5vw,70px);margin-top:clamp(26px,4vw,48px);align-items:start}
@media(max-width:880px){.corpo{grid-template-columns:1fr}}
.corpo p{font-size:15.5px;line-height:1.68;margin:0 0 15px;max-width:58ch}
.corpo>div:first-child p:first-of-type::first-letter{font-family:var(--serif);font-size:3.4em;line-height:.82;float:left;
 padding:6px 10px 0 0;color:var(--red);font-weight:700}
h2{font-family:var(--serif);font-weight:600;font-size:clamp(21px,2.4vw,28px);margin:34px 0 14px;letter-spacing:-.02em}
.scheda{border-top:1px solid var(--line);padding-top:14px}
.scheda li{margin:0 0 12px;font-size:14px;line-height:1.6;color:var(--muted)}
.scheda ul{margin:0;padding-left:18px}
.premio{border-left:2px solid var(--red);padding-left:14px;margin:0 0 14px;font-size:14px;line-height:1.6}
.lavori{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:18px;margin-top:8px}
.lavoro{border-top:1px solid var(--ink);padding-top:10px;text-decoration:none;display:block}
.lavoro img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block;background:var(--card)}
.lavoro h3{font-family:var(--serif);font-weight:600;font-size:16px;margin:10px 0 4px;line-height:1.15;letter-spacing:-.01em}
.lavoro p{margin:0;font-size:11.5px;color:var(--muted);line-height:1.45}
.lavoro:hover h3{color:var(--red)}
.profili{display:flex;gap:14px;flex-wrap:wrap;margin-top:10px}
.profili a{font-size:12.5px;border-bottom:1px solid var(--line);padding-bottom:3px;text-decoration:none}
.profili a:hover{color:var(--red);border-color:var(--red)}
.piede{border-top:1px solid var(--line);padding:24px var(--gut);font-size:11.5px;color:var(--muted);
 display:flex;gap:18px;flex-wrap:wrap;justify-content:space-between}
.piede a{text-decoration:none}
`;

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
    <a href="/#catalogo">Catalogo</a>
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
        (w) => `<a class="lavoro" href="/#catalogo">
      <img src="/${esc(w.cover)}" alt="${esc(w.title)}" loading="lazy">
      <h3>${esc(w.title)}</h3>
      <p>${esc(w.type)} · ${esc(w.year)}<br>${esc(ruoloIn(w, p.cognome))}</p>
    </a>`
      )
      .join("\n    ")}
  </div>
</main>

<div class="piede">
  <span>© ${new Date().getFullYear()} CRASTEL Studio — Bassano del Grappa (VI), Italia</span>
  <span><a href="/">Torna al catalogo</a> · <a href="/#contatti">Scrivici</a></span>
</div>

</body>
</html>
`;
};

for (const p of PERSONE) {
  const dir = join(radice, p.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), pagina(p));
  console.log(`${p.slug}/index.html — ${lavoriDi(p.cognome).length} lavori firmati`);
}

/* sitemap: la home più le due schede */
const oggi = new Date().toISOString().slice(0, 10);
const url = (loc, pri) =>
  `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${oggi}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${pri}</priority>\n  </url>`;
writeFileSync(
  join(radice, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
    url("https://crastelstudio.com/", "1.0"),
    ...PERSONE.map((p) => url(`https://crastelstudio.com/${p.slug}/`, "0.8")),
  ].join("\n")}\n</urlset>\n`
);
console.log("sitemap.xml aggiornata: 3 indirizzi");
