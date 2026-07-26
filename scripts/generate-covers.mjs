import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const registry = JSON.parse(
  fs.readFileSync(path.join(root, "editorial", "registry.json"), "utf8"),
);

const palettes = {
  "healthcare-responsible-ai": {
    ink: "#102b46",
    field: "#d9e2df",
    accent: "#b86f43",
    motif: "care",
  },
  "autonomous-systems-human-control": {
    ink: "#082d4b",
    field: "#b8c8d3",
    accent: "#c26134",
    motif: "signal",
  },
  "danika-method": {
    ink: "#2d3342",
    field: "#d8cfbf",
    accent: "#9e6848",
    motif: "method",
  },
};

const esc = (value = "") =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

function wrap(text, limit = 34) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    if (`${line} ${word}`.trim().length > limit && line) {
      lines.push(line);
      line = word;
    } else {
      line = `${line} ${word}`.trim();
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

function motif(kind, colors) {
  if (kind === "care") {
    return `<path d="M980 230c-98 40-132 135-79 225 48 82 13 171-93 251" fill="none" stroke="${colors.accent}" stroke-width="3"/>
      <path d="M1070 210c-50 78-42 149 26 214 70 68 66 148-13 241" fill="none" stroke="${colors.ink}" stroke-opacity=".45" stroke-width="2"/>
      <circle cx="906" cy="350" r="112" fill="none" stroke="${colors.ink}" stroke-opacity=".18"/>
      <circle cx="906" cy="350" r="72" fill="none" stroke="${colors.accent}" stroke-opacity=".5"/>`;
  }
  if (kind === "method") {
    return `<path d="M805 268h356M805 350h278M805 432h326M805 514h224" stroke="${colors.ink}" stroke-opacity=".24" stroke-width="2"/>
      <circle cx="805" cy="268" r="8" fill="${colors.accent}"/><circle cx="1083" cy="350" r="8" fill="${colors.accent}"/>
      <circle cx="1131" cy="432" r="8" fill="${colors.accent}"/><circle cx="1029" cy="514" r="8" fill="${colors.accent}"/>`;
  }
  return `<path d="M780 420h90l30-80 45 170 50-245 43 155h150" fill="none" stroke="${colors.accent}" stroke-width="4"/>
    <circle cx="995" cy="420" r="154" fill="none" stroke="${colors.ink}" stroke-opacity=".2"/>
    <circle cx="995" cy="420" r="102" fill="none" stroke="${colors.ink}" stroke-opacity=".18"/>
    <circle cx="995" cy="420" r="48" fill="none" stroke="${colors.accent}" stroke-opacity=".6"/>`;
}

for (const entry of registry.entries) {
  const colors = palettes[entry.series] ?? palettes["danika-method"];
  const lines = wrap(entry.title);
  const title = lines
    .map(
      (line, index) =>
        `<text x="90" y="${350 + index * 78}" class="title">${esc(line)}</text>`,
    )
    .join("\n");
  const series = registry.series.find((item) => item.id === entry.series)?.title ?? "";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-labelledby="title desc">
  <title id="title">${esc(entry.title)} — DLJ ${entry.number}</title>
  <desc id="desc">${esc(entry.summary)}</desc>
  <defs>
    <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="${colors.ink}" stroke-opacity=".055"/></pattern>
    <style>
      .sans{font-family:Inter,Arial,sans-serif;letter-spacing:3px;text-transform:uppercase}
      .title{font-family:Georgia,'Times New Roman',serif;font-size:64px;fill:${colors.ink}}
    </style>
  </defs>
  <rect width="1200" height="675" fill="#f4f0e7"/>
  <rect x="720" width="480" height="675" fill="${colors.field}"/>
  <rect width="1200" height="675" fill="url(#grid)"/>
  <path d="M48 70H1152M48 606H1152" stroke="${colors.accent}" stroke-width="1"/>
  <text x="88" y="112" class="sans" font-size="18" fill="${colors.ink}">Danika Lewis Journal</text>
  <text x="1112" y="112" class="sans" font-size="18" text-anchor="end" fill="${colors.ink}">Entry ${entry.number}</text>
  <text x="90" y="278" class="sans" font-size="16" fill="${colors.accent}">${esc(entry.type)}</text>
  ${title}
  <text x="90" y="566" font-family="Inter,Arial,sans-serif" font-size="22" fill="${colors.ink}" opacity=".72">${esc(entry.subtitle)}</text>
  ${motif(colors.motif, colors)}
  <text x="760" y="632" class="sans" font-size="13" fill="${colors.ink}">${esc(series)}</text>
  <text x="1110" y="632" class="sans" font-size="13" text-anchor="end" fill="${colors.accent}">${esc(entry.stage)}</text>
</svg>`;

  const target = path.join(root, entry.cover_path);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, svg);
}

console.log(`Generated ${registry.entries.length} DLJ covers.`);
