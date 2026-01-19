import Link from "next/link";
import Image from "next/image";
import { coverFor } from "@/data/category-covers";

const categories = [
  {
    key: "extensions" as const,
    title: "Extensions",
    desc: "Single and multi-storey extensions built to match your home.",
    href: "/projects/extensions",
  },
  {
    key: "renovations" as const,
    title: "Renovations",
    desc: "Refurbishments, reconfigurations and finish upgrades.",
    href: "/projects/renovations",
  },
  {
    key: "new-builds" as const,
    title: "New Builds",
    desc: "From groundworks to completion — new homes built properly.",
    href: "/projects/new-builds",
  },
];

export default function ProjectsLandingPage() {
  return (
    <main className="wrap pagePad">
      <header className="pageHead">
        <h1>Projects</h1>
        <p>Browse work by category: extensions, renovations and new builds.</p>
      </header>

      <section className="catGrid">
        {categories.map((c) => (
          <Link key={c.key} href={c.href} className="catCard">
            <div className="catHeroReal">
              <Image
                src={coverFor(c.key)}
                alt={`${c.title} cover`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="catHeroImg"
                priority
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
