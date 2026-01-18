"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/data/projects";

type CatLabel = "Extensions" | "Renovations" | "New Builds";
const cats: ("All" | CatLabel)[] = ["All", "Extensions", "Renovations", "New Builds"];

export default function GalleryGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof cats)[number]>("All");

const filtered =
  active === "All"
    ? projects
    : projects.filter((p) => p.categoryLabel === active);

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
