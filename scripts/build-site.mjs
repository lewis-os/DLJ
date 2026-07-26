import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site, editions, essays } from "../site/content.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "docs");
const registry = JSON.parse(fs.readFileSync(path.join(root, "editorial/registry.json"), "utf8"));
const esc = (s="") => String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
const series = Object.fromEntries(registry.series.map(x => [x.id, x]));
const entryBySlug = Object.fromEntries(registry.entries.map(x => [x.slug, x]));
const base = "/DLJ";

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, "articles"), { recursive: true });
fs.mkdirSync(path.join(out, "editions"), { recursive: true });
fs.cpSync(path.join(root, "assets"), path.join(out, "assets"), { recursive: true });

const icon = `<span class="mark"><img src="${base}/assets/dlj-logo.svg" alt="" aria-hidden="true"></span>`;
const header = () => `<header class="site-header"><a class="brand" href="${base}/">${icon}<span><b>Danika Lewis Journal</b><small>Ideas worth carrying forward</small></span></a><button class="menu" aria-label="Open menu">Menu</button><nav><a href="${base}/#current">Current edition</a><a href="${base}/archive/">Archive</a><a href="${base}/about/">About</a></nav></header>`;
const footer = () => `<footer><div>${icon}<p>A public journal of human-centered reflection by Danika Lewis.</p></div><div class="footer-links"><a href="${site.linkedin}">LinkedIn</a><a href="${site.github}">Source archive</a><a href="${base}/about/">Editorial method</a></div><p class="fine">© 2026 Danika Lewis Journal · Sources and uncertainty are named in every entry.</p></footer>`;
const layout = ({title, description, body, image=""}) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} · DLJ</title><meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="article">${image ? `<meta property="og:image" content="${esc(image)}">` : ""}
<link rel="icon" href="${base}/assets/dlj-logo.svg"><link rel="stylesheet" href="${base}/assets/site.css">
</head><body>${header()}<main>${body}</main>${footer()}<script src="${base}/assets/site.js" defer></script></body></html>`;

const card = (e, featured=false) => `<article class="card ${featured?"featured":""}">
  <a class="cover" href="${base}/articles/${e.slug}/"><img src="${base}/${e.cover_path}" alt="" loading="lazy"></a>
  <div class="card-copy"><p class="eyebrow">${esc(series[e.series].title)} · ${esc(e.number)}</p>
  <h3><a href="${base}/articles/${e.slug}/">${esc(e.title)}</a></h3><p>${esc(e.summary)}</p>
  <div class="card-meta"><span>${esc(e.type.replaceAll("-"," "))}</span><a href="${base}/articles/${e.slug}/">Read reflection <span aria-hidden="true">→</span></a></div></div>
</article>`;

for (const e of registry.entries) {
  const essay = essays[e.slug];
  if (!essay) throw new Error(`Missing essay: ${e.slug}`);
  const sections = essay.sections.map(([h,p])=>`<section><h2>${esc(h)}</h2><p>${esc(p)}</p></section>`).join("");
  const sources = essay.sources.length ? `<section class="sources"><h2>Sources & record</h2><ol>${essay.sources.map(([n,u])=>`<li><a href="${u}" rel="noopener">${esc(n)}</a></li>`).join("")}</ol><p class="evidence">Source links support the factual record. Interpretation and editorial judgment are DLJ’s own. Where independent evidence is unavailable, the text says so.</p></section>` : `<section class="sources"><h2>Editorial note</h2><p>This is a conceptual DLJ essay derived from the week’s research dossier. It does not present an external technical claim as independently verified fact.</p></section>`;
  const related = registry.entries.filter(x=>x.series===e.series && x.slug!==e.slug).slice(0,3);
  const body = `<article class="article">
    <div class="article-head"><a class="back" href="${base}/editions/${editions[0].slug}/">← Edition 01</a>
    <p class="eyebrow">${esc(series[e.series].title)} · Entry ${e.number}</p><h1>${esc(e.title)}</h1><p class="dek">${esc(e.subtitle)}</p>
    <div class="byline"><span>Reflection by Danika Lewis</span><span>26 July 2026</span><span>${Math.max(4, Math.round((essay.lede.length+essay.sections.reduce((n,x)=>n+x[1].length,0))/900))} min read</span></div></div>
    <img class="article-cover" src="${base}/${e.cover_path}" alt="${esc(e.title)} cover">
    <div class="article-grid"><aside><p>In this reflection</p><strong>${esc(essay.promise)}</strong><a href="#conversation">Join the conversation ↓</a></aside>
    <div class="prose"><p class="lede">${esc(essay.lede)}</p>${sections}
    <blockquote><p>${esc(essay.promise)}</p><cite>Danika Lewis Journal · 2026</cite></blockquote>${sources}
    <section class="revision"><h2>Revision record</h2><p><b>26 July 2026</b> · First public edition.</p></section></div></div>
    <section class="interaction" id="conversation"><div><p class="eyebrow">Carry the idea forward</p><h2>Reflect, share, respond</h2><p>Share this entry or join the public discussion. Comments and reactions are preserved with the source record.</p></div>
    <div class="share"><button data-share="linkedin">LinkedIn</button><button data-share="x">X</button><button data-share="copy">Copy link</button><a class="button" href="${site.github}/discussions" target="_blank">Discuss on GitHub</a></div>
    <div class="giscus-slot" data-term="${esc(e.id+" "+e.title)}"><p>Conversation is powered by GitHub Discussions. Sign in with GitHub to comment or react.</p></div></section>
    ${related.length?`<section class="more"><p class="eyebrow">Continue this thread</p><div class="grid">${related.map(x=>card(x)).join("")}</div></section>`:""}
  </article>`;
  const dir = path.join(out,"articles",e.slug); fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(path.join(dir,"index.html"), layout({title:e.title,description:e.summary,body,image:`${base}/${e.cover_path}`}));
}

for (const ed of editions) {
  const entries = ed.entrySlugs.map(s=>entryBySlug[s]);
  const body = `<article class="edition"><header class="edition-hero"><p class="eyebrow">Weekly edition ${ed.number}</p><h1>${esc(ed.title)}</h1><p class="dek">${esc(ed.dek)}</p><div class="edition-meta"><span>${esc(ed.label)}</span><span>${entries.length} reflections</span><span>3 editorial threads</span></div></header>
  <div class="edition-intro">${ed.intro.map((p,i)=>i===0?`<p class="lede">${esc(p)}</p>`:`<p>${esc(p)}</p>`).join("")}</div>
  <section><div class="section-head"><div><p class="eyebrow">Inside this edition</p><h2>Follow the week’s connected ideas</h2></div><p>Each entry opens and reads here in DLJ. The GitHub record appears only as supporting provenance.</p></div>
  <div class="grid">${entries.map((e,i)=>card(e,i===0)).join("")}</div></section>
  <section class="closing"><p class="eyebrow">The week in one sentence</p><h2>Trust is not awarded once. It is maintained while the system changes.</h2></section></article>`;
  const dir=path.join(out,"editions",ed.slug); fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(path.join(dir,"index.html"),layout({title:`Edition ${ed.number}: ${ed.title}`,description:ed.dek,body}));
}

const current=editions[0], entries=current.entrySlugs.map(s=>entryBySlug[s]);
const home=`<section class="home-hero"><figure class="hero-stage"><img src="${base}/assets/readme/dlj-home-hero-v2.webp" alt="An open journal at dawn, connecting human reflection with the systems shaping everyday life"><div class="hero-copy"><p class="eyebrow">Danika Lewis Journal · Edition ${current.number}</p><h1>Lessons<br>preserved.<br><em>Questions carried<br>forward.</em></h1><p class="hero-dek">${esc(site.description)}</p><div class="hero-actions"><a class="button primary" href="${base}/editions/${current.slug}/">Read the current edition</a><a class="hero-link" href="#current">Explore the week <span aria-hidden="true">↓</span></a></div></div><figcaption><span>Edition ${current.number} · 20–26 July 2026</span><span>Human insight · living systems</span></figcaption></figure></section>
<section class="manifesto"><p>DLJ pauses over consequential public ideas, separates evidence from claim, and asks what innovation means for the people who must live with it.</p></section>
<section id="current"><div class="edition-banner"><div><p class="eyebrow">${esc(current.label)} · Weekly edition ${current.number}</p><h2>${esc(current.title)}</h2><p>${esc(current.dek)}</p><a href="${base}/editions/${current.slug}/">Read the complete weekly reflection →</a></div><span class="edition-no">${current.number}</span></div>
<div class="section-head"><div><p class="eyebrow">This week’s journal</p><h2>Ten ideas, one connected question</h2></div><p>Healthcare, autonomous systems, open AI, and a method for keeping human judgment visible.</p></div><div class="grid">${entries.slice(0,6).map((e,i)=>card(e,i===0)).join("")}</div><div class="center"><a class="button" href="${base}/editions/${current.slug}/">View all 10 reflections</a></div></section>
<section class="threads"><p class="eyebrow">Editorial threads</p><h2>Three ways into the journal</h2><div class="thread-grid">${registry.series.map(s=>`<article><span>0${registry.entries.filter(e=>e.series===s.id).length}</span><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p><a href="${base}/archive/#${s.id}">Explore thread →</a></article>`).join("")}</div></section>
<section class="method"><img src="${base}/assets/readme/dlj-signal-to-letter.webp" alt=""><div><p class="eyebrow">The Danika Method</p><h2>From signal to reflection</h2><p>Every entry preserves the public source, distinguishes fact from attributed claim, translates the stakes into plain language, and leaves a dated record for future readers.</p><a href="${base}/about/">Read the editorial method →</a></div></section>`;
fs.writeFileSync(path.join(out,"index.html"),layout({title:"Human-centered reflections for a changing world",description:site.description,body:home}));

const archive=`<section class="page-head"><p class="eyebrow">The archive</p><h1>Every reflection,<br>kept in context.</h1><p>Browse by editorial thread. New entries join the current weekly edition automatically.</p></section>${registry.series.map(s=>`<section id="${s.id}" class="archive-series"><div class="section-head"><div><p class="eyebrow">${registry.entries.filter(e=>e.series===s.id).length} entries</p><h2>${esc(s.title)}</h2></div><p>${esc(s.description)}</p></div><div class="grid">${registry.entries.filter(e=>e.series===s.id).map(e=>card(e)).join("")}</div></section>`).join("")}`;
fs.mkdirSync(path.join(out,"archive"),{recursive:true}); fs.writeFileSync(path.join(out,"archive","index.html"),layout({title:"Archive",description:"Browse the complete Danika Lewis Journal.",body:archive}));

const about=`<section class="page-head"><p class="eyebrow">About DLJ</p><h1>A journal for the space<br>between innovation and life.</h1><p>DLJ is a public record of ideas Danika Lewis believes are worth understanding now—and revisiting later.</p></section>
<section class="about-grid"><div><h2>Danika Lewis</h2><p>Danika is a healthcare technology marketing and product leader with more than two decades of experience across medical devices, diagnostics, imaging, commercialization, and human-centered service design.</p><p>Her perspective combines the discipline of bringing complex products into real institutions with a continuing interest in who an innovation serves, where its risks sit, and how trust is built.</p><a class="button" href="${site.linkedin}">Connect on LinkedIn</a></div><div><h2>The editorial promise</h2><ol><li>Preserve before interpreting.</li><li>Name uncertainty.</li><li>Separate claim from fact.</li><li>Keep the human in the frame.</li><li>Write clearly enough to travel.</li><li>Correct visibly and preserve revision.</li></ol></div></section>
<section class="principles"><p class="eyebrow">How an entry is made</p><div class="steps">${["Capture the public signal","Check source and context","Separate evidence from interpretation","Add the human perspective","Publish with sources and revision history"].map((x,i)=>`<div><span>0${i+1}</span><p>${x}</p></div>`).join("")}</div></section>`;
fs.mkdirSync(path.join(out,"about"),{recursive:true}); fs.writeFileSync(path.join(out,"about","index.html"),layout({title:"About",description:"About Danika Lewis and the DLJ editorial method.",body:about}));

fs.writeFileSync(path.join(out,"404.html"),layout({title:"Page not found",description:"",body:`<section class="page-head"><p class="eyebrow">404</p><h1>This page has not been preserved.</h1><a class="button" href="${base}/">Return to the journal</a></section>`}));
fs.writeFileSync(path.join(out,".nojekyll"),"");
console.log(`Built ${registry.entries.length} articles, ${editions.length} edition, archive, and about page.`);
