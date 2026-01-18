"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import Lightbox from "@/components/Lightbox";

export default function ProjectClient({ slug }: { slug: string }) {
  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  // IMPORTANT: if it somehow doesn't exist, show something (not blank)
  if (!project) {
    return (
      <main className="wrap pagePad">
        <h1>Project not found</h1>
        <p>Slug: {slug}</p>
        <p>Example slug: {projects[0]?.slug}</p>
      </main>
    );
  }

  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  return (
    <main className="wrap pagePad">
      <header className="pageHead">
        <h1>{project.title}</h1>
        <p>
          {project.categoryLabel} • {project.location}
        </p>
      </header>

      <Lightbox
        images={project.images}
        isOpen={open}
        initialIndex={startIndex}
        onClose={() => setOpen(false)}
      />

      <section className="thumbGrid">
        {project.images.map((src, i) => (
          <button
            key={src}
            type="button"
            className="thumbBtn"
            onClick={() => {
              setStartIndex(i);
              setOpen(true);
            }}
            aria-label={`Open image ${i + 1}`}
          >
            <span className="thumbWrapSm">
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="thumbImgSm"
              />
            </span>
          </button>
        ))}
      </section>
    </main>
  );
}
