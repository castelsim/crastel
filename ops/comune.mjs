/* ============================================================
   PEZZI COMUNI ALLE PAGINE GENERATE
   persone.mjs e pagine.mjs scrivono pagine con la stessa testata,
   lo stesso piede e lo stesso foglio di stile: stanno qui una volta sola.
   ============================================================ */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const radice = join(dirname(fileURLToPath(import.meta.url)), "..");
export const SITO = "https://crastelstudio.com";

// data.js non è un modulo: lo eseguo in una funzione e mi faccio restituire i dati
export const leggiDati = () =>
  new Function(readFileSync(join(radice, "data.js"), "utf8") + "\nreturn { WORKS, STUDIO, COMPETENZE, DOMANDE };")();

export const esc = (s) =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const MESI = ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];
export const quando = (d) => {
  if (!d) return "—";
  const p = String(d).split("-");
  if (p.length === 3) return `${+p[2]} ${MESI[+p[1] - 1]} ${p[0]}`;
  if (p.length === 2) return `${MESI[+p[1] - 1]} ${p[0]}`;
  return p[0];
};
// dalla più recente; le voci senza data finiscono in fondo, come nella scheda della home
export const ordinaVicende = (v) => [...v].sort((a, b) => (b.data || "").localeCompare(a.data || ""));

// i lavori che hanno una pagina sono gli stessi del catalogo in home
export const inCatalogo = (WORKS) => WORKS.filter((w) => w.featured && w.trailer).sort((a, b) => a.order - b.order);

/* Le pagine che rispondono alle ricerche comuni («musica per documentari»,
   «compositore per film»…). Stanno nel piede di ogni pagina: così ognuna riceve
   un link da tutto il sito, che è il modo in cui Google capisce che contano. */
export const PAGINE_SERVIZIO = [
  ["Musica per film e cortometraggi", "/musica-per-film/"],
  ["Musica per documentari", "/musica-per-documentari/"],
  ["Musica per video aziendali, spot e jingle", "/musica-per-video-aziendali/"],
  ["Sonorizzazione di film muti", "/sonorizzazione-film-muto/"],
  ["Quanto costa una colonna sonora", "/quanto-costa-una-colonna-sonora/"],
  ["Compositori in Veneto", "/compositore-veneto/"],
];

export const CSS = `
:root{--paper:#E8E4DA;--ink:#171715;--muted:#66625B;--red:#9F3029;--line:rgba(23,23,21,.22);--card:#EFEBE2;
 --serif:'Fraunces',Georgia,serif;--grot:'Instrument Sans',-apple-system,system-ui,sans-serif;--gut:clamp(16px,3.2vw,40px)}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--grot);line-height:1.6}
a{color:inherit}
img{max-width:100%}
.topnav{position:sticky;top:0;z-index:50;background:var(--paper);border-bottom:2px solid var(--ink);
 display:flex;justify-content:space-between;align-items:center;gap:18px;padding:12px var(--gut)}
.topnav .logo{font-family:var(--serif);font-weight:700;font-size:20px;text-decoration:none;letter-spacing:-.01em}
.topnav nav{display:flex;gap:20px}.topnav nav a{font-size:12.5px;font-weight:500;text-decoration:none}
.topnav nav a:hover{color:var(--red)}
@media(max-width:520px){.topnav nav{gap:12px}.topnav nav a{font-size:11.5px}}
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
.corpo>div{min-width:0}
@media(max-width:880px){.corpo{grid-template-columns:1fr}}
.corpo p{font-size:15.5px;line-height:1.68;margin:0 0 15px;max-width:62ch}
.corpo>div:first-child>p:first-of-type::first-letter{font-family:var(--serif);font-size:3.4em;line-height:.82;float:left;
 padding:6px 10px 0 0;color:var(--red);font-weight:700}
.corpo p a,.corpo li a,.domanda a{text-decoration:underline;text-decoration-color:var(--line);text-underline-offset:3px}
.corpo p a:hover,.corpo li a:hover,.domanda a:hover{color:var(--red);text-decoration-color:var(--red)}
h2{font-family:var(--serif);font-weight:600;font-size:clamp(21px,2.4vw,28px);margin:34px 0 14px;letter-spacing:-.02em}
.scheda{border-top:1px solid var(--line);padding-top:14px}
.scheda li{margin:0 0 12px;font-size:14px;line-height:1.6;color:var(--muted)}
.scheda ul{margin:0;padding-left:18px}
.punti{margin:0 0 18px;padding-left:18px;max-width:62ch}
.punti li{margin:0 0 10px;font-size:15px;line-height:1.6}
.punti li b{font-weight:600}
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
/* pagina di un lavoro */
.video{position:relative;display:block;aspect-ratio:16/9;background:var(--ink);margin:0 0 24px;overflow:hidden}
.video img{width:100%;height:100%;object-fit:cover;display:block;opacity:.9}
.video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.video .play{position:absolute;left:14px;bottom:14px;background:var(--paper);color:var(--ink);padding:9px 14px;
 font-size:11.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;display:flex;gap:9px;align-items:center}
.video .play i{width:0;height:0;border-left:9px solid var(--red);border-top:6px solid transparent;border-bottom:6px solid transparent}
.video:hover .play{background:var(--red);color:var(--paper)}.video:hover .play i{border-left-color:var(--paper)}
.crediti{display:grid;grid-template-columns:minmax(110px,34%) 1fr;gap:8px 16px;margin:0;border-top:1px solid var(--line);padding-top:14px}
.crediti dt{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);padding-top:3px}
.crediti dd{margin:0;font-size:14px;line-height:1.5}
.crediti .chiave{color:var(--red);font-weight:600}
.vicende{border-top:1px solid var(--line)}
.vicenda{display:grid;grid-template-columns:96px 1fr;gap:16px;padding:11px 0;border-bottom:1px solid var(--line)}
.vicenda .quando{font-size:11.5px;color:var(--muted);padding-top:2px}
.vicenda .cosa{font-size:14px;line-height:1.5}
.vicenda .fonte{display:block;font-size:11.5px;color:var(--muted);margin-top:3px}
.vicenda .fonte a{text-decoration:none;border-bottom:1px solid var(--line)}.vicenda .fonte a:hover{color:var(--red)}
.vicenda.premio .cosa{font-weight:600}
.cat{font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
/* domande, tabelle, invito */
.domanda{border-top:1px solid var(--line);padding:14px 0 4px}
.domanda h3{font-family:var(--serif);font-weight:600;font-size:18px;line-height:1.25;margin:0 0 8px;letter-spacing:-.01em}
.domanda p{font-size:14.5px;line-height:1.65;margin:0 0 10px;color:var(--ink)}
.tavola{overflow-x:auto;margin:0 0 18px}
.tavola table{border-collapse:collapse;width:100%;max-width:62ch;font-size:14.5px}
.tavola th,.tavola td{text-align:left;padding:9px 12px 9px 0;border-bottom:1px solid var(--line)}
.tavola th{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);font-weight:500}
.fonti{font-size:12.5px;color:var(--muted);margin-top:30px;border-top:1px solid var(--line);padding-top:14px}
.fonti a{border-bottom:1px solid var(--line);text-decoration:none}
.invito{margin-top:clamp(40px,6vw,70px);border:2px solid var(--ink);padding:clamp(20px,3vw,34px);display:grid;
 grid-template-columns:1fr auto;gap:18px 30px;align-items:center;background:var(--card)}
.invito h2{margin:0 0 6px}.invito p{margin:0;font-size:15px;max-width:60ch}
.invito .bottone{background:var(--red);color:var(--paper);text-decoration:none;padding:13px 20px;font-weight:600;
 font-size:13px;letter-spacing:.06em;text-transform:uppercase;display:inline-block;min-height:44px}
.invito .bottone:hover{background:var(--ink)}
@media(max-width:700px){.invito{grid-template-columns:1fr}}
.correlati{display:flex;gap:10px 18px;flex-wrap:wrap;margin:6px 0 0;padding:0;list-style:none}
.correlati a{font-size:13px;border-bottom:1px solid var(--line);padding-bottom:3px;text-decoration:none}
.correlati a:hover{color:var(--red);border-color:var(--red)}
.piede{border-top:1px solid var(--line);padding:24px var(--gut);font-size:11.5px;color:var(--muted);
 display:flex;gap:14px 28px;flex-wrap:wrap;justify-content:space-between}
.piede a{text-decoration:none}.piede a:hover{color:var(--red)}
.piede nav{display:flex;gap:6px 16px;flex-wrap:wrap}
`;

const FAVICON = `<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23E8E4DA'/%3E%3Ctext y='74' x='50' text-anchor='middle' font-family='Georgia,serif' font-weight='700' font-size='72' fill='%239F3029'%3EC%3C/text%3E%3C/svg%3E">`;

export const testa = ({ titolo, descrizione, percorso, tipo = "website", immagine, jsonld }) => `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titolo)}</title>
<meta name="description" content="${esc(descrizione)}">
<link rel="canonical" href="${SITO}${percorso}">
<meta property="og:type" content="${tipo}">
<meta property="og:site_name" content="CRASTEL Studio">
<meta property="og:locale" content="it_IT">
<meta property="og:title" content="${esc(titolo)}">
<meta property="og:description" content="${esc(descrizione)}">
<meta property="og:url" content="${SITO}${percorso}">
${immagine ? `<meta property="og:image" content="${SITO}/${esc(immagine)}">\n<meta name="twitter:card" content="summary_large_image">` : ""}
<script type="application/ld+json">${JSON.stringify(jsonld)}</script>
${FAVICON}
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
`;

export const piede = () => `
<div class="piede">
  <span>© ${new Date().getFullYear()} CRASTEL Studio — Marco Crivellaro e Simone Castellan. Bassano del Grappa (VI), Italia.</span>
  <nav aria-label="Cosa scriviamo">
    ${PAGINE_SERVIZIO.map(([t, u]) => `<a href="${u}">${esc(t)}</a>`).join("\n    ")}
  </nav>
  <span><a href="/lavori/">Tutti i lavori</a> · <a href="/marco-crivellaro/">Marco Crivellaro</a> · <a href="/simone-castellan/">Simone Castellan</a> · <a href="/#contatti">Scrivici</a></span>
</div>

</body>
</html>
`;

export const invito = (testo = "Scriveteci a che punto è il lavoro e che cosa vi serve: rispondiamo entro due giorni lavorativi.") => `
  <section class="invito">
    <div>
      <h2>Avete un progetto in lavorazione?</h2>
      <p>${testo}</p>
    </div>
    <a class="bottone" href="/#contatti">Scriveteci</a>
  </section>`;

/* ---- sitemap ----
   Si costruisce leggendo le cartelle, non da un elenco: così nessuno degli script
   può cancellare le pagine scritte dall'altro, chiunque giri per ultimo. */
const trova = (dir, rel = "") => {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || ["assets", "ops", "node_modules"].includes(e.name)) continue;
    if (e.isDirectory()) out.push(...trova(join(dir, e.name), rel + e.name + "/"));
    else if (e.name === "index.html") {
      const html = readFileSync(join(dir, e.name), "utf8");
      if (!/name="robots"[^>]*noindex/.test(html)) out.push(rel);
    }
  }
  return out;
};

export const scriviSitemap = () => {
  const oggi = new Date().toISOString().slice(0, 10);
  const servizio = (p) => PAGINE_SERVIZIO.some(([, u]) => u === "/" + p);
  const peso = (p) => (p === "" ? "1.0" : servizio(p) ? "0.9" : p.startsWith("lavori/") && p !== "lavori/" ? "0.7" : "0.8");
  const ordine = (p) => (p === "" ? 0 : servizio(p) ? 1 : p.startsWith("lavori/") ? 3 : 2);
  const percorsi = trova(radice).sort((a, b) => ordine(a) - ordine(b) || a.localeCompare(b));
  const righe = percorsi.map(
    (p) => `  <url>\n    <loc>${SITO}/${p}</loc>\n    <lastmod>${oggi}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${peso(p)}</priority>\n  </url>`
  );
  writeFileSync(
    join(radice, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${righe.join("\n")}\n</urlset>\n`
  );
  console.log(`sitemap.xml aggiornata: ${percorsi.length} indirizzi`);
};
