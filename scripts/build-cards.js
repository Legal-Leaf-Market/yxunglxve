// Builds a share page for every trading card: /c/<name>/
// Each one has its own link preview (artist photo + name) and then jumps to that
// card on the events page. Runs automatically on every Netlify deploy (see netlify.toml),
// so editing public/events/guests.js is all that's needed.
const fs = require("fs");
const path = require("path");

const SITE = "https://yxunglxve.netlify.app";
const ROOT = path.join(__dirname, "..", "public");
const FLYER = SITE + "/images/flyer-stuff-the-artist.jpg";

global.window = {};
require(path.join(ROOT, "events", "guests.js"));
const all = [Object.assign({ headliner: true }, window.HEADLINER), ...(window.GUESTS || [])];

const esc = (s) => String(s || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const base = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const abs = (u) => (!u ? "" : /^https?:\/\//.test(u) ? u : SITE + (u.startsWith("/") ? u : "/" + u));

const outDir = path.join(ROOT, "c");
fs.rmSync(outDir, { recursive: true, force: true });

for (const g of all) {
  const s = base(g.name);
  const target = "/events/#card-" + s;
  const title = g.headliner ? "Yxung Lxve headlines Stuff the Artist" : g.name + " · Stuff the Artist";
  const desc = g.headliner
    ? "Sat Nov 14 · Columbus Bar, Columbus IN · Doors 7, show 8 · No cover · All ages"
    : "On the lineup with Yxung Lxve · Sat Nov 14 · Columbus Bar, Columbus IN · No cover · All ages";
  const img = g.headliner ? FLYER : abs(g.image) || FLYER;
  const big = img === FLYER;
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <meta property="og:site_name" content="YXUNG LXVE">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:image" content="${esc(img)}">
  <meta property="og:url" content="${SITE}/c/${s}/">
  <meta name="twitter:card" content="${big ? "summary_large_image" : "summary"}">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(desc)}">
  <meta name="twitter:image" content="${esc(img)}">
  <link rel="canonical" href="${SITE}/c/${s}/">
  <meta http-equiv="refresh" content="0; url=${target}">
  <script src="/inapp.js"></script>
  <script>location.replace(${JSON.stringify(target)});</script>
  <style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0b0d1f;color:#e6c27a;font:600 16px system-ui,sans-serif}</style>
</head>
<body><a href="${target}" style="color:inherit">Open ${esc(g.name)}'s card →</a></body>
</html>
`;
  fs.mkdirSync(path.join(outDir, s), { recursive: true });
  fs.writeFileSync(path.join(outDir, s, "index.html"), html);
  console.log("built /c/" + s + "/");
}
