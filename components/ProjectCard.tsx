import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <div className="thumb">
        <Image
          src={project.cover}
          alt={`${project.title} in ${project.location}`}
          fill
          sizes="(max-width: 920px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </div>

      <div className="tag">{project.category}</div>
      <h3 className="h3">{project.title}</h3>
      <p className="meta">{project.location}</p>
      <p className="meta" style={{ marginTop: 6 }}>{project.summary}</p>
    </article>
  );
}
