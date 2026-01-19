"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/data/projects";

type CatLabel = "Extensions" | "Renovations" | "New Builds";
const cats: ("All" | CatLabel)[] = ["All", "Extensions", "Renovations", "New Builds"];

export default function GalleryGrid({
  projects,
  showFilters = true,
}: {
  projects: Project[];
  showFilters?: boolean;
}) {
  const [active, setActive] = useState<(typeof cats)[number]>("All");

  const filtered = useMemo(() => {
    if (!showFilters) return projects; // <-- important for category pages
    return active === "All" ? projects : projects.filter((p) => p.categoryLabel === active);
  }, [projects, active, showFilters]);

  return (
    <>
      {showFilters && (
        <div className="filters">
          {cats.map((c) => (
            <button
              key={c}
              className="btn filterBtn"
              aria-pressed={active === c}
              onClick={() => setActive(c)}
              type="button"
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="grid-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
