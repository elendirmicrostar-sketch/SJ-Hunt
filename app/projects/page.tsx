import Link from "next/link";
import Image from "next/image";
import { categoryCover } from "@/lib/category-images";

const categories = [
  {
    key: "extensions",
    title: "Extensions",
    desc: "Single and multi-storey extensions built to match your home.",
    href: "/projects/extensions",
  },
  {
    key: "renovations",
    title: "Renovations",
    desc: "Refurbishments, reconfigurations and finish upgrades.",
    href: "/projects/renovations",
  },
  {
    key: "new-builds",
    title: "New Builds",
    desc: "From groundworks to completion — new homes built properly.",
    href: "/projects/new-builds",
  },
] as const;

export default function ProjectsLandingPage() {
  return (
    <main className="wrap pagePad">
      <header className="pageHead">
        <h1>Projects</h1>
        <p>Browse work by category.</p>
      </header>

      <section className="catGrid">
        {categories.map((c) => (
          <Link key={c.key} href={c.href} className="catCard">
            <div className="catHeroReal">
              <Image
                src={categoryCover(c.key as any)}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="catHeroImg"
                priority
                unoptimized
              />
            </div>

            <div className="catBody">
              <h2 className="catTitle">{c.title}</h2>
              <p className="catDesc">{c.desc}</p>
              <span className="catCta">View {c.title} →</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
