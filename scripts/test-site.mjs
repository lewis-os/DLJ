import fs from "node:fs";
import path from "node:path";
const root = path.resolve("docs");
const html = [];
const walk = d => fs.readdirSync(d,{withFileTypes:true}).forEach(x => x.isDirectory()?walk(path.join(d,x.name)):x.name.endsWith(".html")&&html.push(path.join(d,x.name)));
walk(root);
const failures=[];
for(const file of html){
  const body=fs.readFileSync(file,"utf8");
  if(!body.includes("<title>")||!body.includes("<main>")||!body.includes("site.css")) failures.push(file);
  for(const m of body.matchAll(/(?:src|href)="(\/DLJ\/[^"#?]+)"/g)){
    const rel=m[1].replace(/^\/DLJ\//,"").replace(/\/$/,"/index.html");
    const target=path.join(root,rel);
    if(!fs.existsSync(target)) failures.push(`${file} -> ${m[1]}`);
  }
}
if(failures.length){console.error(failures.join("\n"));process.exit(1)}
console.log(`Validated ${html.length} HTML pages and all internal assets.`);
