import Link from "next/link";
import { projects } from "@/data/projects";
import GalleryGrid from "@/components/GalleryGrid";

export default function ProjectsPage() {
  return (
    <main style={{ padding: "28px 0 48px" }}>
      <div className="wrap">
        <h1 className="h1">Projects</h1>
        <p className="lead">
          Extensions, renovations and new builds across Hampshire & Surrey.
        </p>

        {/* If you already have GalleryGrid built, use it */}
        <GalleryGrid projects={projects} />

        {/* If GalleryGrid isn’t ready, comment the line above and use this simple list:
        <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`}>
              {p.title} — {p.location} ({p.category})
            </Link>
          ))}
        </div>
        */}
      </div>
    </main>
  );
}
