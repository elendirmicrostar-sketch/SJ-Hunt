import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";
import Lightbox from "@/components/Lightbox";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main style={{ padding: "28px 0 48px" }}>
      <div className="wrap">
        <a className="btn" href="/projects">← Back to Projects</a>

        <header style={{ marginTop: 14 }}>
          <h1 className="h1">{project.title}</h1>
          <p className="meta">{project.location} • {project.category}</p>
          <p className="lead">{project.summary}</p>
        </header>

        {/* Gallery */}
        <section style={{ marginTop: 10 }}>
          <div className="masonry">
            {project.images.map((src, i) => (
              <button key={src} className="imgBtn" data-index={i} aria-label={`Open photo ${i + 1}`}>
                <Image
                  src={src}
                  alt={`${project.title} photo ${i + 1}`}
                  width={1400}
                  height={900}
                  className="img"
                />
              </button>
            ))}
          </div>

          <Lightbox images={project.images} />
        </section>

        {/* Videos (optional) */}
        {project.videos?.length ? (
          <section style={{ marginTop: 22 }}>
            <h2 style={{ fontFamily: "var(--serif)", margin: "0 0 10px" }}>On-site clips</h2>
            <div className="grid3">
              {project.videos.map((v) => (
                <div key={v.src} className="card">
                  <div className="tag">{v.label ?? "Video"}</div>
                  <div style={{ marginTop: 10 }}>
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={v.poster}
                      style={{ width: "100%", borderRadius: 14, border: "1px solid var(--line)" }}
                    >
                      <source src={v.src} />
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
