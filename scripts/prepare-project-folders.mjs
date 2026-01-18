import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function isImage(file) {
  return /\.(jpe?g|png|webp|heic)$/i.test(file);
}

async function toWebp(src, dest, q) {
  ensureDir(path.dirname(dest));
  await sharp(src)
    .rotate()
    .webp({ quality: q })
    .toFile(dest);
}

function listFilesRecursive(dir) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) out.push(...listFilesRecursive(full));
    else out.push(full);
  }
  return out;
}

function findFirstImage(projectDir) {
  const files = fs.readdirSync(projectDir)
    .filter(isImage)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return files.length ? path.join(projectDir, files[0]) : null;
}

async function normalizeOneProject(projectDir, quality) {
  // pick a cover source
  const coverSrc = findFirstImage(projectDir);
  if (!coverSrc) return;

  const coverDest = path.join(projectDir, "cover.webp");
  if (!fs.existsSync(coverDest)) {
    await toWebp(coverSrc, coverDest, quality);
  }

  // convert remaining images to numbered webps if they aren't already
  const imgs = fs.readdirSync(projectDir)
    .filter(isImage)
    .filter(f => !/^cover\.webp$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  let i = 1;
  for (const f of imgs) {
    const src = path.join(projectDir, f);
    const dest = path.join(projectDir, String(i).padStart(2, "0") + ".webp");
    if (!fs.existsSync(dest)) {
      await toWebp(src, dest, quality);
    }
    i++;
  }
}

async function run() {
  const args = Object.fromEntries(process.argv.slice(2).map(s => {
    const [k, ...rest] = s.split("=");
    return [k.replace(/^--/, ""), rest.join("=")];
  }));

  const root = args.root || "public/projects";
  const quality = Number(args.quality || 78);

  const cats = fs.readdirSync(root).filter(d => fs.statSync(path.join(root, d)).isDirectory());
  for (const cat of cats) {
    const catDir = path.join(root, cat);
    const projects = fs.readdirSync(catDir).filter(d => fs.statSync(path.join(catDir, d)).isDirectory());
    for (const proj of projects) {
      const projDir = path.join(catDir, proj);
      try {
        await normalizeOneProject(projDir, quality);
        console.log(`OK: ${cat}/${proj}`);
      } catch (e) {
        console.log(`SKIP (convert manually): ${cat}/${proj} -> ${e?.message || e}`);
      }
    }
  }
}

run();
