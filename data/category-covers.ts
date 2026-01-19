import fs from "node:fs";
import path from "node:path";

export type CategoryKey = "extensions" | "renovations" | "new-builds";

/**
 * Fixed cover images (used by homepage + projects category cards)
 */
export const categoryCovers: Record<CategoryKey, string> = {
  extensions: "/projects/extensions/project-01/IMG_2461.JPG",
  renovations: "/projects/renovations/project-01/IMG_0141.JPG",
  "new-builds": "/projects/new-builds/project-01/cover.webp",
};

export function coverFor(category: CategoryKey) {
  return categoryCovers[category] ?? "/brand/logo.png";
}

/**
 * Category gallery images (loads all images under public/projects/<category>)
 * IMPORTANT: do not import this from a Client Component.
 * Use it only in app route files (server components).
 */
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

function toPublicUrl(absPath: string) {
  const rel = path.relative(path.join(process.cwd(), "public"), absPath);
  return "/" + rel.split(path.sep).join("/");
}

export function getCategoryImages(category: CategoryKey): string[] {
  const dir = path.join(ROOT, category);
  if (!fs.existsSync(dir)) return [];

  return walk(dir)
    .filter(isImage)
    .map(toPublicUrl)
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    );
}
