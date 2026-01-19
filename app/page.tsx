import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

type CategoryKey = "extensions" | "renovations" | "new-builds";

function coverFor(category: CategoryKey) {
  return projects.find((p) => p.category === category)?.cover ?? "/brand/logo.png";
}

function homeHeroImage() {
  // Prefer an extensions cover for the homepage hero, fallback to anything, then logo
  const ext = projects.find((p) => p.category === "extensions")?.cover;
  const any = projects[0]?.cover;
  return ext ?? any ?? "/brand/logo.png";
}

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="wrap hero">
        <div className="hero-grid">
          <div className="panel hero-left">
            <div className="kicker">Established 1998 • Hampshire & Surrey • Local, reliable workmanship</div>

            <h1>Building contractors for extensions, renovations and new-build homes.</h1>

            <p className="lead">
              Established in <strong>1998</strong>, based near <strong>Sandhurst</strong> and covering{" "}
              <strong>Crowthorne</strong>, <strong>Camberley</strong>, <strong>Farnborough</strong> and surrounding areas. From home
              extensions to full new-builds, we deliver clear quotes, tidy sites and a finish you’ll be proud of.
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
                src={homeHeroImage()}
                alt="Recent project"
                fill
                priority
                className="heroPhotoImg"
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

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
            <Link className="card" href="/projects/extensions">
              <div className="featThumb">
                <Image
                  src={coverFor("extensions")}
                  alt="Extensions projects"
                  fill
                  className="featThumbImg"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <h3>Extensions</h3>
              <p>Single and multi-storey extensions built to match your home.</p>
            </Link>

            <Link className="card" href="/projects/renovations">
              <div className="featThumb">
                <Image
                  src={coverFor("renovations")}
                  alt="Renovations projects"
                  fill
                  className="featThumbImg"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <h3>Renovations</h3>
              <p>Refurbishments, reconfigurations and finish upgrades.</p>
            </Link>

            <Link className="card" href="/projects/new-builds">
              <div className="featThumb">
                <Image
                  src={coverFor("new-builds")}
                  alt="New builds projects"
                  fill
                  className="featThumbImg"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <h3>New Builds</h3>
              <p>From groundworks to completion — new homes built properly.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT ANCHOR (keeps your /#contact link working even if you build contact later) */}
      <section id="contact">
        <div className="wrap">
          <div className="panel" style={{ padding: 24 }}>
            <h2>Request a quote</h2>
            <p className="sub">Call or email us and we’ll come back to you promptly.</p>
            {/* You can replace this with your real contact form later */}
          </div>
        </div>
      </section>
    </main>
  );
}
