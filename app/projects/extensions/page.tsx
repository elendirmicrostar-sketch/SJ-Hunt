import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const CATEGORIES = ["extensions", "renovations", "new-builds"] as const;
type Category = (typeof CATEGORIES)[number];

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!CATEGORIES.includes(category as Category)) return notFound();

  const filtered = projects.filter((p) => p.category === category);

  const title =
    category === "new-builds"
      ? "New Builds"
      : category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <main>
      <div className="wrap" style={{ paddingTop: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
          <h1 style={{ margin: 0 }}>{title}</h1>
          <Link className="btn" href="/projects">
            All projects
          </Link>
        </div>

        <div className="grid-3" style={{ marginTop: 18 }}>
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
