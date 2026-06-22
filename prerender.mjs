// prerender.mjs — esegui con:  node prerender.mjs
// Build statica + prerendering di tutte le pagine, SENZA modificare in modo permanente
// package.json (così Lovable non lo rigenera/rompe la prossima volta che editi sul sito).
// Al termine la cartella dist/ contiene ogni route come HTML statico separato,
// pronta da caricare a mano sull'hosting (Apache/cPanel).
import { execSync } from "node:child_process";
import fs from "node:fs";

// Tutte le route reali del progetto (da src/App.tsx, src/data/services.ts, src/data/doctors.ts)
// + "/404" per la pagina di errore. Se aggiungi nuove pagine/route, aggiungile anche qui.
const ROUTES = [
  "/",
  "/grosseto",
  "/privacy",
  "/cookie",
  "/termini",
  "/note-legali",
  "/servizi/medicina-del-lavoro",
  "/servizi/servizi-ambulatorio",
  "/servizi/equipe-pediatrica",
  "/servizi/medicina-legale",
  "/servizi/patente-porto-armi",
  "/servizi/servizio-domicilio",
  "/staff/lucia-paolacci",
  "/staff/margherita-pennesi",
  "/staff/antonella-lodde",
  "/staff/davide-gamelli",
  "/staff/gabriele-solari",
  "/staff/lucia-vaselli",
  "/staff/giada-cencini",
  "/staff/samuele-benanchi",
  "/staff/jurgen-sota",
  "/404",
];

const run = (cmd) => execSync(cmd, { stdio: "inherit" });

console.log("0/3  Installo react-snap in locale (--no-save, non sporca package.json)...");
run("npm install --no-save react-snap@^1.23.0");

console.log("1/3  Build di produzione (config dedicata, target es2017)...");
run("npx vite build --config vite.config.prerender.ts");

console.log("2/3  Inietto temporaneamente la config react-snap in package.json...");
const original = fs.readFileSync("package.json", "utf8");
const pkg = JSON.parse(original);
pkg.reactSnap = {
  source: "dist",
  // Deve combaciare con "base" in vite.config.prerender.ts: il sito gratuito GitHub Pages
  // vive su https://daniel88pl.github.io/studimedicitoscana/, non alla radice.
  publicPath: "/studimedicitoscana/",
  minifyHtml: { collapseWhitespace: false, removeComments: false },
  puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  skipThirdPartyRequests: true,
  include: ROUTES,
};
fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2));

try {
  console.log("3/3  Prerendering con react-snap...");
  run("npx react-snap");
} finally {
  // Ripristina package.json ESATTAMENTE com'era: resta pulito per Lovable.
  fs.writeFileSync("package.json", original);
  console.log("package.json ripristinato pulito.");
}

console.log("4/4  Predispongo dist/ per GitHub Pages (.nojekyll + 404.html)...");
// GitHub Pages esegue Jekyll di default, che ignora file/cartelle che iniziano con "_":
// .nojekyll disattiva questo comportamento (precauzione, anche se Vite non genera cartelle "_").
fs.writeFileSync("dist/.nojekyll", "");
// GitHub Pages cerca un file 404.html alla radice del sito per le pagine non trovate:
// la route "/404" è già stata prerenderizzata in dist/404/index.html, la copiamo al posto giusto.
if (fs.existsSync("dist/404/index.html")) {
  fs.copyFileSync("dist/404/index.html", "dist/404.html");
}

console.log("FATTO: dist/ prerenderizzata, ogni route è un HTML separato.");
