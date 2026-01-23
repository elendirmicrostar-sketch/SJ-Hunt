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
              Established in <strong>1998</strong>, based near <strong>Fleet</strong> and covering{" "}
              <strong>Crowthorne</strong>, <strong>Camberley</strong>, <strong>Farnborough</strong> and surrounding areas. From home
              extensions to full new-builds, we deliver clear quotes, tidy sites and a finish you’ll be proud of.
            </p>

            <div className="hero-actions">
              <a className="btn" href="tel:07712590713">
                Mobile: 07712 590 713
              </a>
              <a className="btn primary" href="#quote">
                Get a Quote
              </a>
            </div>
          </div>

          <div className="panel hero-right">
            <div className="heroPhoto">
              <Image
                src={coverFor("extensions")}
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

  {/* SERVICES (simple, safe default — tweak later) */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Services</h2>
              <p className="sub">Clear quotes, tidy sites, quality finish.</p>
            </div>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3>Extensions</h3>
              <p>Single and double-storey extensions designed to blend with your home.</p>
            </div>
            <div className="card">
              <h3>Renovations</h3>
              <p>Refits, reconfigurations and finishing upgrades — done properly and cleanly.</p>
            </div>
            <div className="card">
              <h3>New Builds</h3>
              <p>From groundworks to completion — structured, reliable project delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Featured work</h2>
              <p className="sub">Browse recent projects by category.</p>
            </div>
            <a className="btn" href="/projects">
              See all projects
            </a>
          </div>

          <div className="grid-3">
            {categories.map((c) => (
              <Link key={c.key} className="card" href={c.href}>
                <div className="featThumb">
                  <Image
                    src={coverFor(c.key)}
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

    {/* QUOTE / CONTACT */}
<section id="contact">
  <div className="wrap">
    <div className="section-head">
      <div>
        <h2>Get a Quote</h2>
        <p className="sub">Call or message and we’ll come back to you quickly.</p>
      </div>
    </div>

    <div className="grid-3">
     <div className="mobileCard">
  <span className="mobileLabel">Mobile</span>
  <a className="mobileNumber" href="tel:07712590713">
    07712 590 713
  </a>
</div>
    </div>
  </div>
</section>
    </main>
  );
}
