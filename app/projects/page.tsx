import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

type CategoryKey = "extensions" | "renovations" | "new-builds";

function coverFor(category: CategoryKey) {
  return projects.find((p) => p.category === category)?.cover ?? "/brand/logo.png";
}

const categories: { key: CategoryKey; title: string; desc: string; href: string }[] = [
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
];

export default function ProjectsLandingPage() {
  return (
    <main className="wrap pagePad">
      <header className="pageHead">
        <h1>Projects</h1>
        <p>Browse work by category: extensions, renovations and new builds.</p>
      </header>

      <section className="catGrid">
        {categories.map((cat) => (
          <Link key={cat.key} href={cat.href} className="catCard">
            <div className="catHeroReal">
              <Image
                src={coverFor(cat.key)}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                className="catHeroImg"
                priority
              />
            </div>

            <div className="catBody">
              <h2 className="catTitle">{cat.title}</h2>
              <p className="catDesc">{cat.desc}</p>
              <span className="catCta">View {cat.title} →</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
