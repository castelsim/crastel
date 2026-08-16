# CRASTEL — sito

Portfolio di **CRASTEL**, duo di composizione per immagini: Marco Crivellaro (Marcus Grimm) e Simone Castellan.
Musica originale per film, documentari e serie.

**Online:** https://crastelstudio.com — dominio su Aruba, sito su GitHub Pages.

I DNS puntano ai quattro IP di GitHub (185.199.108-111.153) e `www` è un CNAME verso
`castelsim.github.io`. Il file `CNAME` in questa cartella dice a GitHub quale dominio servire:
non va cancellato.

## Com'è fatto

Sito statico, nessuna dipendenza da installare.

- `index.html` — la pagina: catalogo, filtri, player, About, contatti
- `data.js` — **il dataset unico**. Per aggiungere un lavoro basta aggiungere un oggetto a `WORKS`:
  catalogo, filtri, schede, player, metadati e "prossima scheda" si rigenerano da soli
- `assets/` — fotogrammi e copertine
- `grazie.html` — pagina di conferma dopo l'invio del form

## ⚠️ Dopo ogni modifica a `data.js`

```bash
node ops/prerender.mjs
```

Riscrive le schede dentro `index.html` e rigenera i dati strutturati. Serve ai motori di
ricerca: senza, l'HTML che scaricano è quasi vuoto perché il catalogo lo costruisce il
JavaScript, e Google quel passaggio lo fa con giorni di ritardo. Va anche alzato il numero
di versione in `<script src="data.js?v=…">`, altrimenti chi torna sul sito vede il catalogo
vecchio (GitHub Pages tiene il file in cache).

## Aggiungere un lavoro

```js
{
  slug: "nome-del-film", title: "Nome del film", year: "2026",
  type: "Documentario",            // diventa anche un filtro
  typeLine: "Netflix Documentary", // riga sotto il titolo nel player
  featured: true, order: 10,
  director: "", production: "", distributor: "",
  role: ["Musica originale"],
  cover: "assets/nome.jpg",
  focus: "center 40%",             // opzionale: come inquadrare l'immagine
  trailer: { platform:"youtube", id:"XXXX", channel:"Canale ufficiale",
             embedUrl:"https://www.youtube-nocookie.com/embed/XXXX", label:"Trailer ufficiale" },
  soundtrack: { appleMusic:"", spotify:"", tracks:0 },
  description: "", credits: [["Regia","..."]]
}
```

## Il form dei contatti

Passa da [FormSubmit](https://formsubmit.co): i messaggi arrivano per email, senza backend.

## Prova in locale

```bash
python3 -m http.server 8713
```

Serve un server (non basta aprire il file): gli embed dei video lo richiedono.

## Immagini

I fotogrammi provengono dai video ufficiali dei rispettivi film e appartengono alle produzioni.
Per la versione definitiva vanno sostituiti con still forniti dalle produzioni.
