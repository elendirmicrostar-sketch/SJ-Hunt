import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main style={{ padding: "28px 0 48px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 20px" }}>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: 40, margin: 0 }}>
          Projects
        </h1>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          Extensions, renovations and new builds across Hampshire & Surrey.
        </p>

        <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`}>
              {p.title} — {p.location} ({p.category})
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
