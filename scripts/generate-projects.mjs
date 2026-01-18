import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const PROJECTS_DIR = path.join(PUBLIC, "projects");
const OUT = path.join(ROOT, "data", "projects.ts");

function exists(p){ try { fs.accessSync(p); return true; } catch { return false; } }

function listDirs(p){
  if(!exists(p)) return [];
  return fs.readdirSync(p, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);
}

function listFiles(p){
  if(!exists(p)) return [];
  return fs.readdirSync(p, { withFileTypes: true })
    .filter(d => d.isFile())
    .map(d => d.name);
}

const labelMap = {
  "extensions": "Extensions",
  "renovations": "Renovations",
  "new-builds": "New Builds",
};

const categories = Object.keys(labelMap);

const projects = [];

for(const cat of categories){
  const catDir = path.join(PROJECTS_DIR, cat);
  const projectFolders = listDirs(catDir).filter(n => n.startsWith("project-")).sort();

  projectFolders.forEach((pf, idx) => {
    const dir = path.join(catDir, pf);
    const files = listFiles(dir).filter(f => f.toLowerCase().endsWith(".webp")).sort();

    const cover = files.find(f => f.toLowerCase() === "cover.webp") ?? files[0];
    const images = cover ? [cover, ...files.filter(f => f !== cover)] : files;

    const slug = `${cat}-${pf}`; // e.g. renovations-project-01

    projects.push({
      slug,
      title: `Project ${String(idx + 1).padStart(2, "0")}`,
      category: cat,
      categoryLabel: labelMap[cat],
      location: "Hampshire & Surrey",
      cover: cover ? `/projects/${cat}/${pf}/${cover}` : "",
      images: images.map(f => `/projects/${cat}/${pf}/${f}`),
    });
  });
}

// sort by category then project number ascending
projects.sort((a,b) => (a.categoryLabel + a.title).localeCompare(b.categoryLabel + b.title));

const content =
`export type Project = {
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  cover: string;
  images: string[];
};

export const projects: Project[] = ${JSON.stringify(projects, null, 2)} as const;
`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, content, "utf8");

console.log(`Wrote ${projects.length} projects to data/projects.ts`);

