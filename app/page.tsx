import Link from "next/link";
import Image from "next/image";
import { categoryCover } from "@/lib/category-images";

function heroForHome() {
  // Pick ONE stable category image for the homepage hero.
  // Change to "renovations" or "new-builds" if you prefer.
  return categoryCover("extensions");
}

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

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <div className="wrap hero">
        <div className="hero-grid">
          <div className="panel hero-left">
            <div className="kicker">Established 1998 • Hampshire & Surrey • Local, reliable workmanship</div>
            <h1>Building contractors for extensions, renovations and new-build homes.</h1>

            <p className="lead">
              Established in <strong>1998</strong>, based near <strong>Sandhurst</strong> and covering{" "}
              <strong>Crowthorne</strong>, <strong>Camberley</strong>, <strong>Farnborough</strong> and surrounding areas. From
              home extensions to full new-builds, we deliver clear quotes, tidy sites and a finish you’ll be proud of.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="/#contact">
                Request a Quote
              </a>
              <Link className="btn" href="/projects">
                View Recent Work
              </Link>
            </div>

            <div className="trustbar" role="list">
              <div className="pill" role="listitem">
                Clear written quotes
              </div>
              <div className="pill" role="listitem">
                Quality workmanship
              </div>
              <div className="pill" role="listitem">
                Respectful, tidy site
              </div>
              <div className="pill" role="listitem">
                Local Hampshire/Surrey
              </div>
            </div>
          </div>

          <div className="panel hero-right" aria-label="Project photo">
            <div className="heroPhoto">
              <Image
                src={heroForHome()}
                alt="Recent project"
                fill
                priority
                className="heroPhotoImg"
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED CATEGORIES */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Featured projects</h2>
              <p className="sub">Browse by category.</p>
            </div>
            <Link className="btn" href="/projects">
              See all projects
            </Link>
          </div>

          <div className="grid-3">
            {categories.map((c) => (
              <Link key={c.key} className="card" href={c.href}>
                <div className="featThumb">
                  <Image
                    src={categoryCover(c.key)}
                    alt={`${c.title} projects`}
                    fill
                    className="featThumbImg"
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT (anchor for Request a Quote button) */}
      <section id="contact">
        <div className="wrap">
          <div className="panel">
            <h2>Request a quote</h2>
            <p className="sub">Tell us about your project and we’ll get back to you.</p>

            {/* Keep whatever contact form / details you already had.
                This is just a placeholder block so the anchor works. */}
            <div style={{ marginTop: 12 }}>
              <p>
                Email: <a href="mailto:hello@sjhunt.co.uk">hello@sjhunt.co.uk</a>
                <br />
                Phone: <a href="tel:+447000000000">+44 7000 000000</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
