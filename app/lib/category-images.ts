import fs from "node:fs";
import path from "node:path";

export type CategoryKey = "extensions" | "renovations" | "new-builds";

const ROOT = path.join(process.cwd(), "public", "projects");

function walk(dir: string): string[] {
  let out: string[] = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out = out.concat(walk(p));
    else out.push(p);
  }
  return out;
}

function isImage(p: string) {
  return /\.(jpg|jpeg|png|webp)$/i.test(p);
}

function toWebPath(absPath: string) {
  return (
    "/" +
    path
      .relative(path.join(process.cwd(), "public"), absPath)
      .split(path.sep)
      .join("/")
  );
}

export function getCategoryImages(category: CategoryKey): string[] {
  const dir = path.join(ROOT, category);
  if (!fs.existsSync(dir)) return [];

  const files = walk(dir).filter(isImage);

  // Sort nicely even if names are IMG_1234
  files.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
  );

  return files.map(toWebPath);
}

export function categoryCover(category: CategoryKey): string {
  const imgs = getCategoryImages(category);
  return imgs[0] ?? "/brand/logo.png";
}
