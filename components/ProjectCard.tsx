import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="projectCard">
      <div className="projectCover">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="projectCoverImg"
          unoptimized
        />
      </div>

      <div className="projectBody">
        <div className="projectMeta">{project.categoryLabel}</div>
        <h3 className="projectTitle">{project.title}</h3>
        <div className="projectMeta">{project.location}</div>
      </div>
    </Link>
  );
}
