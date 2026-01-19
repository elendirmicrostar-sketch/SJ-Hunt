import fs from "node:fs";
import path from "node:path";

type CategoryKey = "extensions" | "renovations" | "new-builds";

const ROOT = path.join(process.cwd(), "public", "projects");

function isImage(name: string) {
  return /\.(jpg|jpeg|png|webp)$/i.test(name);
}

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (ent.isFile() && isImage(ent.name)) out.push(p);
  }
  return out;
}

export function getCategoryImages(category: CategoryKey): string[] {
  const dir = path.join(ROOT, category);
  const files = walk(dir);

  // map absolute paths to public URLs
  const urls = files
    .map((abs) => "/" + path.relative(path.join(process.cwd(), "public"), abs).replace(/\\/g, "/"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  return urls;
}

export function categoryCover(category: CategoryKey): string {
  const imgs = getCategoryImages(category);
  return imgs[0] ?? "/brand/logo.png";
}
