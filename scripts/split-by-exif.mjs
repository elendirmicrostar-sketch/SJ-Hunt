import fs from "node:fs";
import path from "node:path";
import exifr from "exifr";

const args = Object.fromEntries(process.argv.slice(2).map(s => {
  const [k, ...rest] = s.split("=");
  return [k.replace(/^--/, ""), rest.join("=")];
}));

const sourceDir = args.source;
const outDir = args.out;
const gapDays = Number(args.gapDays ?? 20);

if (!sourceDir || !outDir) {
  console.log("Usage: node scripts/split-by-exif.mjs --source=... --out=... --gapDays=7");
  process.exit(1);
}

function ensureDir(p){ fs.mkdirSync(p, { recursive: true }); }

function walk(dir){
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function isMedia(p){
  return /\.(jpg|jpeg|png|webp)$/i.test(p);
}

async function getTaken(p){
  try{
    const exif = await exifr.parse(p, { tiff: true, exif: true, xmp: true, icc: false, iptc: false });
    const d = exif?.DateTimeOriginal || exif?.CreateDate || exif?.ModifyDate;
    if (d instanceof Date && !isNaN(d.getTime())) return d;
  }catch{}
  const st = fs.statSync(p);
  return st.birthtime < st.mtime ? st.birthtime : st.mtime;
}

const files = walk(sourceDir).filter(isMedia);
if (!files.length){
  console.log("No images found in " + sourceDir);
  process.exit(0);
}

const items = [];
for (const f of files){
  items.push({ file: f, taken: await getTaken(f) });
}

items.sort((a,b) => a.taken - b.taken);

ensureDir(outDir);

let proj = 1;
let last = null;
let copied = 0;

for (const it of items){
  if (last){
    const gap = (it.taken - last) / (1000 * 60 * 60 * 24);
    if (gap > gapDays) proj++;
  }
  const pf = `project-${String(proj).padStart(2,"0")}`;
  const destDir = path.join(outDir, pf);
  ensureDir(destDir);

  const dest = path.join(destDir, path.basename(it.file));
  fs.copyFileSync(it.file, dest);

  last = it.taken;
  copied++;
}

console.log(`OK: Copied ${copied} files into ${proj} projects at ${outDir}`);
