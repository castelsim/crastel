/* ============================================================
   PRE-RENDER DEL CATALOGO
   I motori di ricerca scaricano l'HTML e spesso non aspettano il
   JavaScript: senza questo passaggio la pagina che vedono è vuota.
   Lo script legge data.js e scrive le schede dentro index.html, fra i
   marcatori CATALOGO. A pagina caricata il JS le rigenera identiche,
   quindi il comportamento per chi naviga non cambia.

   Uso:  node ops/prerender.mjs
   Va rilanciato ogni volta che si tocca data.js.
   ============================================================ */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const qui = dirname(fileURLToPath(import.meta.url));
const radice = join(qui, "..");

// data.js non è un modulo: lo eseguo in una funzione e mi faccio restituire i dati
const sorgente = readFileSync(join(radice, "data.js"), "utf8");
const contesto = new Function(sorgente + "\nreturn { WORKS, STUDIO, REWORKS, COMPETENZE, DOMANDE };")();

const WORKS = contesto.WORKS;
const inCatalogo = WORKS.filter((w) => w.featured && w.trailer).sort((a, b) => a.order - b.order);
const numero = new Map(inCatalogo.map((w, i) => [w.slug, i + 1]));
const esercizi = WORKS.filter((w) => w.esercizio);
const numRw = new Map(esercizi.map((w, i) => [w.slug, i + 1]));

const MESI = ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];
const quando = (d) => {
  if (!d) return "";
  const p = String(d).split("-");
  if (p.length === 3) return `${+p[2]} ${MESI[+p[1] - 1]} ${p[0]}`;
  if (p.length === 2) return `${MESI[+p[1] - 1]} ${p[0]}`;
  return p[0];
};

const esc = (s) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const refNo = (w) =>
  w.esercizio
    ? "RW-" + String(numRw.get(w.slug)).padStart(3, "0")
    : "CR-" + String(numero.get(w.slug) || w.order).padStart(3, "0");

const scheda = (w) => `
      <article class="card" data-slug="${esc(w.slug)}">
      <div class="head"><span class="refno">${refNo(w)}</span><span class="cat">${esc(w.year)}</span></div>
      <button class="thumb" onclick="openLB('${esc(w.slug)}')" aria-label="Apri la scheda di ${esc(w.title)}">
        <img src="${esc(w.cover)}" alt="${esc(w.title)}"${w.focus ? ` style="object-position:${esc(w.focus)}"` : ""}>
        ${w.distributor ? `<span class="stamp">${esc(w.distributor)}</span>` : ""}
        <span class="segno"><i></i></span>
        <span class="lente"><span><i></i>${esc(w.trailer.label)}</span></span>
      </button>
      <h3>${esc(w.title)}</h3>
      <p class="riga"><b>${esc(w.type)}</b> · ${esc((w.role || []).join(", "))}${
        w.director ? `<br>Regia ${esc(w.director)}` : w.production ? `<br>${esc(w.production)}` : ""
      }</p>
      ${w.firma ? `<p class="firma">${esc(w.firma)}</p>` : ""}
      ${w.awards && w.awards.length ? `<p class="alloro">${esc(w.awards[0])}</p>` : ""}
      </article>`;

const catalogo = inCatalogo.map(scheda).join("\n");

const competenze = contesto.COMPETENZE.voci
  .map((v) => `      <article><h3>${esc(v.nome)}</h3><p>${esc(v.testo)}</p></article>`)
  .join("\n");

const schede = { "Marco Crivellaro": "/marco-crivellaro/", "Simone Castellan": "/simone-castellan/" };
const persone = contesto.STUDIO.members
  .map(
    (m) => `      <article class="persona">
        <div class="intestazione">
          ${m.ritratto ? `<div class="ritratto"><img src="${esc(m.ritratto)}" alt="${esc(m.name)}" width="92" height="92" loading="lazy"></div>` : ""}
          <div>
            <h3>${esc(m.name)}${m.alias ? ` <em>/ ${esc(m.alias)}</em>` : ""}</h3>
            <p class="mestiere">${esc(m.role)}</p>
          </div>
        </div>
        ${m.bio.map((x) => `<p>${esc(x)}</p>`).join("\n        ")}
        ${schede[m.name] ? `<p class="vaialla"><a href="${schede[m.name]}">Scheda completa di ${esc(m.name.split(" ")[0])} &rarr;</a></p>` : ""}
      </article>`
  )
  .join("\n");

const domande = contesto.DOMANDE
  .map((x) => `      <article class="domanda"><h3>${esc(x.d)}</h3><p>${esc(x.r)}</p></article>`)
  .join("\n");

/* Dati strutturati: dicono ai motori che questo è uno studio musicale
   e quali sono i lavori, senza dipendere dal JavaScript. */
const jsonld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "MusicGroup"],
      "@id": "https://crastelstudio.com/#studio",
      name: "CRASTEL",
      alternateName: "Crastel Studio",
      description:
        "Studio di composizione per immagini di Marco Crivellaro e Simone Castellan: musica originale per film, serie e documentari.",
      url: "https://crastelstudio.com/",
      email: "crastelstudio@gmail.com",
      address: { "@type": "PostalAddress", addressLocality: "Bassano del Grappa", addressRegion: "VI", addressCountry: "IT" },
      member: contesto.STUDIO.members.map((m) => ({
        "@type": "Person",
        name: m.name,
        ...(m.alias ? { alternateName: m.alias } : {}),
        jobTitle: m.role,
        ...(m.ritrattoGrande ? { image: "https://crastelstudio.com/" + m.ritrattoGrande } : {}),
      })),
      sameAs: Object.values(contesto.STUDIO.links),
      knowsAbout: contesto.COMPETENZE.argomenti,
      areaServed: [{ "@type": "Country", name: "Italia" }, { "@type": "Place", name: "Europa" }],
      slogan: contesto.COMPETENZE.intro,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cosa scriviamo",
        itemListElement: contesto.COMPETENZE.voci.map((v) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: v.nome, description: v.testo },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://crastelstudio.com/#domande",
      mainEntity: contesto.DOMANDE.map((x) => ({
        "@type": "Question",
        name: x.d,
        acceptedAnswer: { "@type": "Answer", text: x.r },
      })),
    },
    {
      "@type": "ItemList",
      name: "Lavori di CRASTEL",
      numberOfItems: inCatalogo.length,
      itemListElement: inCatalogo.map((w, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": w.type === "Serie documentaria" ? "TVSeries" : "Movie",
          name: w.title,
          ...(w.year ? { datePublished: w.year } : {}),
          ...(w.director ? { director: { "@type": "Person", name: w.director } } : {}),
          ...(w.production ? { productionCompany: { "@type": "Organization", name: w.production } } : {}),
          description: w.description,
          musicBy: { "@id": "https://crastelstudio.com/#studio" },
          image: "https://crastelstudio.com/" + w.cover,
          // niente VideoObject: richiede uploadDate e descrizione del video, dati che non
          // abbiamo con certezza. Un markup incompleto viene segnalato come errore da Google.
          ...(w.trailer ? { sameAs: w.trailer.url } : {}),
          ...(w.vicende && w.vicende.length
            ? { subjectOf: w.vicende.filter((v) => v.url).map((v) => ({
                "@type": "CreativeWork", name: v.cosa,
                ...(v.data ? { datePublished: v.data } : {}),
                ...(v.testata ? { publisher: { "@type": "Organization", name: v.testata } } : {}),
                url: v.url })) }
            : {}),
        },
      })),
    },
  ],
};

let html = readFileSync(join(radice, "index.html"), "utf8");

const fra = (testo, inizio, fine, nuovo) => {
  const i = testo.indexOf(inizio);
  const j = testo.indexOf(fine);
  if (i === -1 || j === -1) throw new Error("marcatori non trovati: " + inizio);
  return testo.slice(0, i + inizio.length) + nuovo + testo.slice(j);
};

html = fra(html, "<!-- CATALOGO:INIZIO -->", "<!-- CATALOGO:FINE -->", "\n" + catalogo + "\n    ");
html = fra(html, "<!-- COMPETENZE:INIZIO -->", "<!-- COMPETENZE:FINE -->", "\n" + competenze + "\n    ");
html = fra(html, "<!-- DOMANDE:INIZIO -->", "<!-- DOMANDE:FINE -->", "\n" + domande + "\n    ");
html = fra(html, "<!-- PERSONE:INIZIO -->", "<!-- PERSONE:FINE -->", "\n" + persone + "\n    ");
html = fra(
  html,
  "<!-- DATISTRUTTURATI:INIZIO -->",
  "<!-- DATISTRUTTURATI:FINE -->",
  `\n<script type="application/ld+json">${JSON.stringify(jsonld)}</script>\n`
);

writeFileSync(join(radice, "index.html"), html);
console.log(`schede scritte nell'HTML: ${inCatalogo.length}`);
const lista = jsonld["@graph"].find((x) => x["@type"] === "ItemList");
const faq = jsonld["@graph"].find((x) => x["@type"] === "FAQPage");
console.log(`dati strutturati: studio + ${lista.itemListElement.length} lavori + ${faq.mainEntity.length} domande`);
