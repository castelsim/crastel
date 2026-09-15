/* ============================================================
   PAGINE DEI LAVORI E PAGINE DEI SERVIZI
   In home ogni lavoro si apre in un riquadro: comodo per chi guarda, ma per
   Google non esiste, perché non ha un indirizzo. Qui ogni lavoro del catalogo
   diventa una pagina vera (/lavori/<slug>/) con crediti, ascolti e cronologia
   scritti nell'HTML, e ogni ricerca comune ha la sua pagina (vedi servizi.mjs).

   Uso:  node ops/pagine.mjs     (dopo ogni modifica a data.js o a servizi.mjs)
   Scrive: /lavori/, /lavori/<slug>/, le pagine di servizi.mjs, la sitemap
   e il blocco PAGINE di llms.txt.
   ============================================================ */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import {
  radice, SITO, leggiDati, esc, quando, ordinaVicende, inCatalogo,
  PAGINE_SERVIZIO, testa, piede, invito, scriviSitemap,
} from "./comune.mjs";
import { SERVIZI } from "./servizi.mjs";

const dati = leggiDati();
const LAVORI = inCatalogo(dati.WORKS);
const perSlug = new Map(LAVORI.map((w) => [w.slug, w]));
const STUDIO_ID = `${SITO}/#studio`;
const PERSONE = { Crivellaro: ["Marco Crivellaro", "/marco-crivellaro/"], Castellan: ["Simone Castellan", "/simone-castellan/"] };
const nomePagina = new Map([...PAGINE_SERVIZIO.map(([t, u]) => [u, t]), ["/marco-crivellaro/", "Marco Crivellaro"], ["/simone-castellan/", "Simone Castellan"]]);

const scrivi = (percorso, html) => {
  const dir = join(radice, percorso);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
};
const soloTesto = (html) => html.replace(/<[^>]+>/g, "");

// controllo: ogni slug citato in servizi.mjs deve esistere in catalogo
for (const s of SERVIZI) for (const slug of s.lavori) {
  if (!perSlug.has(slug)) throw new Error(`servizi.mjs: «${slug}» (in ${s.slug}) non è nel catalogo`);
}

/* ---------- chi ha scritto la musica ---------- */
const chiMusica = (w) => {
  const c = (w.contributi || []).find((x) => /^Musiche/i.test(x[0]));
  return (c && c[1]) || w.firma || "";
};
const personeDi = (w) => {
  const testo = [w.firma || "", ...(w.contributi || []).map((c) => c[1])].join(" ");
  return Object.entries(PERSONE).filter(([cognome]) => testo.includes(cognome)).map(([, p]) => p);
};
// cosa abbiamo fatto, detto come lo direbbe chi cerca
const ruolo = (w) => {
  const r = (w.role || []).join(" ");
  if (/Brano originale/i.test(r)) return r.replace(/^Brano originale\s*/i, "il brano ");
  if (/jingle/i.test(r)) return "il jingle";
  if (w.soundtrack && w.soundtrack.tracks > 1) return "la colonna sonora originale";
  if (/musica originale/i.test(r)) return "la musica originale";
  return "le musiche";
};
const maiuscola = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const taglia = (s, n = 300) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n)) + "…");

const serviziDi = (w) => SERVIZI.filter((s) => s.lavori.includes(w.slug));

const embed = (w) =>
  w.trailer.platform === "vimeo"
    ? `${w.trailer.embedUrl}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`
    : `${w.trailer.embedUrl}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

const cartolina = (w, riga) => `<a class="lavoro" href="/lavori/${esc(w.slug)}/">
      <img src="/${esc(w.cover)}" alt="${esc(w.title)}" loading="lazy">
      <h3>${esc(w.title)}</h3>
      <p>${esc(w.type)} · ${esc(w.year)}${riga ? `<br>${esc(riga)}` : ""}</p>
    </a>`;
const rigaCartolina = (w) => (w.awards && w.awards[0]) || (w.distributor ? `Distribuzione ${w.distributor}` : maiuscola(ruolo(w)));

/* ============================================================
   UN LAVORO
   ============================================================ */
const paginaLavoro = (w, i) => {
  const percorso = `/lavori/${w.slug}/`;
  const firma = chiMusica(w);
  const persone = personeDi(w);
  const vicende = ordinaVicende(w.vicende || []);
  const st = w.soundtrack || {};
  const servizi = serviziDi(w);
  const altri = [...new Set(servizi.flatMap((s) => s.lavori))].filter((s) => s !== w.slug).map((s) => perSlug.get(s));
  const vicini = (altri.length >= 3 ? altri : [...altri, ...LAVORI.filter((x) => x.slug !== w.slug && !altri.includes(x))]).slice(0, 4);

  const titolo = `${w.title} (${w.year}): ${ruolo(w)} | CRASTEL Studio`;
  const chi = w.director ? ` di ${w.director}` : w.production ? ` per ${w.production}` : "";
  const descrizione = taglia(
    `${maiuscola(ruolo(w))}${firma ? ` di ${firma}` : " di CRASTEL Studio"} per «${w.title}», ${w.type.toLowerCase()}${chi} (${w.year})${w.distributor ? `, ${w.distributor}` : ""}. ${w.description}`
  );

  const tipoOpera = /serie/i.test(w.type) ? "TVSeries" : "Movie";
  const musicBy = persone.length
    ? persone.map(([nome, url]) => ({ "@type": "Person", name: nome, url: SITO + url }))
    : [{ "@id": STUDIO_ID }];
  const jsonld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": tipoOpera,
        "@id": `${SITO}${percorso}#opera`,
        name: w.title,
        ...(w.titleEn ? { alternateName: w.titleEn } : {}),
        url: SITO + percorso,
        datePublished: w.year,
        description: w.description,
        genre: w.type,
        image: `${SITO}/${w.cover}`,
        inLanguage: "it",
        ...(w.director ? { director: { "@type": "Person", name: w.director } } : {}),
        ...(w.production ? { productionCompany: { "@type": "Organization", name: w.production } } : {}),
        musicBy,
        ...(w.awards && w.awards.length ? { award: w.awards } : {}),
        sameAs: [w.trailer.url, ...(st.spotify ? [st.spotify] : []), ...(st.appleMusic ? [st.appleMusic] : [])],
        ...(vicende.some((v) => v.url)
          ? { subjectOf: vicende.filter((v) => v.url).map((v) => ({
              "@type": "CreativeWork", name: v.cosa,
              ...(v.data ? { datePublished: v.data } : {}),
              ...(v.testata ? { publisher: { "@type": "Organization", name: v.testata } } : {}),
              url: v.url })) }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "CRASTEL Studio", item: `${SITO}/` },
          { "@type": "ListItem", position: 2, name: "Lavori", item: `${SITO}/lavori/` },
          { "@type": "ListItem", position: 3, name: w.title, item: SITO + percorso },
        ],
      },
    ],
  };

  const crediti = [
    ...(w.contributi || []).map((c) => `<dt class="chiave">${esc(c[0])}</dt><dd class="chiave">${esc(c[1])}</dd>`),
    ...(!(w.contributi || []).length ? [`<dt class="chiave">${esc(maiuscola(ruolo(w)))}</dt><dd class="chiave">CRASTEL Studio</dd>`] : []),
    ...w.credits.map((c) => `<dt>${esc(c[0])}</dt><dd>${esc(c[1])}</dd>`),
    `<dt>Video</dt><dd>${esc(w.trailer.channel)} — canale ufficiale</dd>`,
  ].join("\n        ");

  const ascolti = [st.spotify && ["Spotify", st.spotify], st.appleMusic && ["Apple Music", st.appleMusic]].filter(Boolean);
  const etichettaAscolto = st.label || `Ascolta la colonna sonora${st.tracks ? ` — ${st.tracks} bran${st.tracks === 1 ? "o" : "i"}` : ""}`;

  return (
    testa({ titolo, descrizione, percorso, tipo: "video.other", immagine: w.cover, jsonld }) +
    `
<main>
  <p class="briciole"><a href="/">CRASTEL Studio</a> — <a href="/lavori/">Lavori</a> — ${esc(w.gruppo)}</p>
  <h1>${esc(w.title)}<em>${esc(w.typeLine)} — ${esc(w.year)}</em></h1>
  <p class="mestiere">${esc(maiuscola(ruolo(w)))}${firma ? ` · ${esc(firma)}` : " · CRASTEL Studio"}</p>

  <div class="corpo">
    <div>
      <p>${esc(w.description)}</p>
      <a class="video" href="${esc(w.trailer.url)}" data-embed="${esc(embed(w))}" rel="noopener">
        <img src="/${esc(w.cover)}" alt="${esc(w.title)} — ${esc(w.trailer.label)}"${w.focus ? ` style="object-position:${esc(w.focus)}"` : ""}>
        <span class="play"><i></i>${esc(w.trailer.label)}</span>
      </a>
      ${vicende.length ? `<h2>Che cosa è successo</h2>
      <div class="vicende">
        ${vicende.map((v) => `<div class="vicenda ${esc(v.tipo)}"><span class="quando">${esc(quando(v.data))}</span><span class="cosa">${esc(v.cosa)}${
          v.testata ? `<span class="fonte">${v.url ? `<a href="${esc(v.url)}" rel="noopener">${esc(v.testata)}</a>` : esc(v.testata)}</span>` : ""
        }</span></div>`).join("\n        ")}
      </div>` : ""}
    </div>
    <div>
      <h2 style="margin-top:0">Chi ha fatto cosa</h2>
      <dl class="crediti">
        ${crediti}
      </dl>
      ${w.awards && w.awards.length && !vicende.length ? `<h2>Premi e festival</h2>${w.awards.map((a) => `<p class="premio">${esc(a)}</p>`).join("")}` : ""}
      ${ascolti.length ? `<h2>${esc(etichettaAscolto)}</h2>
      <div class="profili">${ascolti.map(([t, u]) => `<a href="${esc(u)}" rel="noopener">${t}</a>`).join("")}</div>` : ""}
      ${w.altri && w.altri.length ? `<h2>Guarda anche</h2>
      <div class="profili">${w.altri.map((a) => `<a href="${esc(a.url)}" rel="noopener">${esc(a.label)}</a>`).join("")}</div>` : ""}
      ${persone.length || servizi.length ? `<h2>Nello studio</h2>
      <ul class="correlati">
        ${persone.map(([nome, url]) => `<li><a href="${url}">${esc(nome)}</a></li>`).join("")}
        ${servizi.map((s) => `<li><a href="/${s.slug}/">${esc(nomePagina.get(`/${s.slug}/`))}</a></li>`).join("")}
      </ul>` : ""}
    </div>
  </div>

  <h2>Altri lavori</h2>
  <div class="lavori">
    ${vicini.map((x) => cartolina(x, rigaCartolina(x))).join("\n    ")}
  </div>
  ${invito()}
</main>
<script>
/* il video si carica solo quando lo si chiede: la pagina resta leggera */
document.querySelectorAll('.video[data-embed]').forEach(function(a){
  a.addEventListener('click', function(e){
    e.preventDefault();
    a.innerHTML = '<iframe src="' + a.dataset.embed + '" allow="autoplay; encrypted-media; fullscreen" allowfullscreen title="' + a.querySelector('img').alt + '"></iframe>';
    a.removeAttribute('href');
  }, { once: true });
});
</script>
` + piede()
  );
};

/* ============================================================
   L'ELENCO DEI LAVORI
   ============================================================ */
const GRUPPI = [
  ["Serie", "Serie documentarie"],
  ["Docufilm", "Documentari"],
  ["Corti", "Cortometraggi"],
  ["Aziende", "Per aziende e territori"],
];
const paginaElenco = () => {
  const percorso = "/lavori/";
  const titolo = "Lavori — colonne sonore e musiche per film, documentari e video | CRASTEL Studio";
  const descrizione =
    "Il catalogo di CRASTEL Studio: musiche per le serie Netflix Il caso Alex Schwazer e Il caso Yara, per i documentari Immenso Blu, Donnafugata e Il mistero del Phandambiri, per cortometraggi, spot e film d'impresa.";
  const jsonld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": SITO + percorso,
        name: "Lavori di CRASTEL Studio",
        url: SITO + percorso,
        isPartOf: { "@id": STUDIO_ID },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: LAVORI.length,
          itemListElement: LAVORI.map((w, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITO}/lavori/${w.slug}/`, name: w.title })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "CRASTEL Studio", item: `${SITO}/` },
          { "@type": "ListItem", position: 2, name: "Lavori", item: SITO + percorso },
        ],
      },
    ],
  };
  return (
    testa({ titolo, descrizione, percorso, immagine: LAVORI[0].cover, jsonld }) +
    `
<main>
  <p class="briciole"><a href="/">CRASTEL Studio</a> — Lavori</p>
  <h1>Lavori<em>${LAVORI.length} schede, dal 2020 a oggi</em></h1>
  <div class="corpo" style="grid-template-columns:1fr">
    <div>
      <p>Le musiche di Marco Crivellaro e Simone Castellan per serie, documentari, cortometraggi e film su commissione. Ogni scheda apre il trailer o il film, dice chi ha fatto cosa e raccoglie quello che è successo al lavoro dopo l'uscita: festival, proiezioni, articoli.</p>
    </div>
  </div>
  ${GRUPPI.map(([g, nome]) => {
    const qui = LAVORI.filter((w) => w.gruppo === g);
    return qui.length ? `<h2>${esc(nome)}</h2>
  <div class="lavori">
    ${qui.map((w) => cartolina(w, rigaCartolina(w))).join("\n    ")}
  </div>` : "";
  }).join("\n  ")}
  ${LAVORI.filter((w) => !GRUPPI.some(([g]) => g === w.gruppo)).length ? `<h2>Altro</h2><div class="lavori">${LAVORI.filter((w) => !GRUPPI.some(([g]) => g === w.gruppo)).map((w) => cartolina(w, rigaCartolina(w))).join("")}</div>` : ""}
  ${invito()}
</main>
` + piede()
  );
};

/* ============================================================
   UN SERVIZIO (o una guida)
   ============================================================ */
const paginaServizio = (s) => {
  const percorso = `/${s.slug}/`;
  const lavori = s.lavori.map((x) => perSlug.get(x));
  const oggi = new Date().toISOString().slice(0, 10);
  const principale = s.guida
    ? {
        "@type": "Article",
        "@id": `${SITO}${percorso}#guida`,
        headline: s.h1,
        description: s.descrizione,
        url: SITO + percorso,
        inLanguage: "it",
        dateModified: oggi,
        author: { "@id": STUDIO_ID },
        publisher: { "@id": STUDIO_ID },
        ...(s.fonti ? { citation: s.fonti.map(([nome, url]) => ({ "@type": "CreativeWork", name: nome, url })) } : {}),
      }
    : {
        "@type": "Service",
        "@id": `${SITO}${percorso}#servizio`,
        name: s.h1,
        serviceType: s.servizio,
        description: s.descrizione,
        url: SITO + percorso,
        provider: { "@id": STUDIO_ID },
        areaServed: [{ "@type": "Country", name: "Italia" }],
        ...(lavori.length ? { subjectOf: lavori.map((w) => ({ "@type": /serie/i.test(w.type) ? "TVSeries" : "Movie", name: w.title, url: `${SITO}/lavori/${w.slug}/` })) } : {}),
      };
  const jsonld = {
    "@context": "https://schema.org",
    "@graph": [
      principale,
      {
        "@type": "FAQPage",
        "@id": `${SITO}${percorso}#domande`,
        mainEntity: s.domande.map((x) => ({ "@type": "Question", name: x.d, acceptedAnswer: { "@type": "Answer", text: soloTesto(x.r) } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "CRASTEL Studio", item: `${SITO}/` },
          { "@type": "ListItem", position: 2, name: s.h1, item: SITO + percorso },
        ],
      },
    ],
  };

  const sezione = (x) => `
      <h2>${x.h2}</h2>
      ${(x.paragrafi || []).map((p) => `<p>${p}</p>`).join("\n      ")}
      ${x.punti ? `<ul class="punti">${x.punti.map((p) => `<li>${p}</li>`).join("")}</ul>` : ""}`;

  return (
    testa({ titolo: s.titolo, descrizione: s.descrizione, percorso, tipo: s.guida ? "article" : "website", immagine: (lavori[0] || LAVORI[0]).cover, jsonld }) +
    `
<main>
  <p class="briciole"><a href="/">CRASTEL Studio</a> — ${esc(s.sopra)}</p>
  <h1>${esc(s.h1)}<em>${esc(s.sopra)}</em></h1>

  <div class="corpo">
    <div>
      ${s.paragrafi.map((p) => `<p>${p}</p>`).join("\n      ")}
      ${s.tabella ? `<div class="tavola"><table>
        <thead><tr>${s.tabella.intestazioni.map((t) => `<th>${esc(t)}</th>`).join("")}</tr></thead>
        <tbody>${s.tabella.righe.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>` : ""}
      ${(s.dopoTabella || []).map((p) => `<p>${p}</p>`).join("\n      ")}
      ${(s.sezioni || []).map(sezione).join("\n")}
    </div>
    <div>
      <h2 style="margin-top:0">Domande</h2>
      ${s.domande.map((x) => `<article class="domanda"><h3>${esc(x.d)}</h3><p>${x.r}</p></article>`).join("\n      ")}
      ${s.premi ? `<h2>Premi</h2>${s.premi.map((p) => `<p class="premio">${esc(p)}</p>`).join("")}` : ""}
      <h2>Vedi anche</h2>
      <ul class="correlati">
        ${s.correlati.map((u) => `<li><a href="${u}">${esc(nomePagina.get(u) || u)}</a></li>`).join("\n        ")}
      </ul>
    </div>
  </div>

  ${lavori.length ? `<h2>${lavori.length === 1 ? "Il lavoro" : "I lavori"}</h2>
  <div class="lavori">
    ${lavori.map((w) => cartolina(w, rigaCartolina(w))).join("\n    ")}
  </div>` : ""}
  ${s.fonti ? `<p class="fonti">Fonti: ${s.fonti.map(([nome, url]) => `<a href="${esc(url)}" rel="noopener">${esc(nome)}</a>`).join(" · ")}</p>` : ""}
  ${invito()}
</main>
` + piede()
  );
};

/* ============================================================
   SCRITTURA
   ============================================================ */
scrivi("lavori", paginaElenco());
LAVORI.forEach((w, i) => scrivi(`lavori/${w.slug}`, paginaLavoro(w, i)));
console.log(`lavori/: elenco + ${LAVORI.length} pagine`);

for (const s of SERVIZI) scrivi(s.slug, paginaServizio(s));
console.log(`servizi e guide: ${SERVIZI.map((s) => s.slug).join(", ")}`);

/* llms.txt: gli assistenti leggono questo file per sapere dove sta cosa */
const llms = join(radice, "llms.txt");
if (existsSync(llms)) {
  const INIZIO = "<!-- PAGINE:INIZIO -->", FINE = "<!-- PAGINE:FINE -->";
  const blocco = `${INIZIO}
## Pagine
### Cosa scriviamo
${SERVIZI.map((s) => `- [${s.h1}](${SITO}/${s.slug}/): ${s.descrizione}`).join("\n")}

### Lavori
- [Tutti i lavori](${SITO}/lavori/)
${LAVORI.map((w) => `- [${w.title} (${w.year})](${SITO}/lavori/${w.slug}/)`).join("\n")}
${FINE}`;
  let testo = readFileSync(llms, "utf8");
  testo = testo.includes(INIZIO)
    ? testo.slice(0, testo.indexOf(INIZIO)) + blocco + testo.slice(testo.indexOf(FINE) + FINE.length)
    : testo.replace(/\n## Contatti/, `\n${blocco}\n\n## Contatti`);
  writeFileSync(llms, testo);
  console.log("llms.txt: blocco PAGINE aggiornato");
}

scriviSitemap();
