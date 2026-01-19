import fs from "node:fs";
import path from "node:path";

export type CategoryKey = "extensions" | "renovations" | "new-builds";

const ROOT = path.join(process.cwd(), "public", "projects");

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function isWebImage(p: string) {
  // IMPORTANT: exclude HEIC (browser won’t render it)
  return /\.(jpg|jpeg|png|webp)$/i.test(p);
}

export function getCategoryImages(category: CategoryKey): string[] {
  const dir = path.join(ROOT, category);
  if (!fs.existsSync(dir)) return [];

  const abs = walk(dir).filter(isWebImage);

  // Convert absolute filesystem path -> public URL
  const urls = abs.map((file) => {
    const rel = path.relative(path.join(process.cwd(), "public"), file);
    return "/" + rel.replace(/\\/g, "/"); // windows -> url
  });

  return urls;
}

export function categoryCover(category: CategoryKey): string {
  // pick first image as cover fallback
  return getCategoryImages(category)[0] ?? "/brand/logo.png";
}
