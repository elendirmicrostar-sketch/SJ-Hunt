"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import type { Category, Project } from "@/data/projects";

const cats: (Category | "All")[] = ["All", "Extensions", "Renovations", "New Builds"];

export default function GalleryGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof cats)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  return (
    <>
      <div className="filters">
        {cats.map((c) => (
          <button
            key={c}
            className="btn filterBtn"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid3" style={{ marginTop: 14 }}>
        {filtered.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <ProjectCard project={p} />
          </Link>
        ))}
      </div>
    </>
  );
}
