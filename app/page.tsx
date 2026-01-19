import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="wrap hero">
        <div className="hero-grid">
          <div className="panel hero-left">
            <div className="kicker">
              Established 1998 • Hampshire & Surrey • Local, reliable workmanship
            </div>

            <h1>Building contractors for extensions, renovations and new-build homes.</h1>

            <p className="lead">
              Established in <strong>1998</strong>, based near <strong>Sandhurst</strong> and covering{" "}
              <strong>Crowthorne</strong>, <strong>Camberley</strong>, <strong>Farnborough</strong> and surrounding areas.
              From home extensions to full new-builds, we deliver clear quotes, tidy sites and a finish you’ll be proud of.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="/#contact">
                Get a Quote
              </a>

              {/* Bring back these buttons */}
              <a className="btn" href="tel:01252 510109">
                Tel
              </a>
              <a className="btn" href="tel:07712590713">
                Mobile
              </a>
            </div>

            <div className="trustbar" role="list">
              <div className="pill" role="listitem">Clear written quotes</div>
              <div className="pill" role="listitem">Quality workmanship</div>
              <div className="pill" role="listitem">Respectful, tidy site</div>
              <div className="pill" role="listitem">Local Hampshire/Surrey</div>
            </div>
          </div>

          <div className="panel hero-right" aria-label="Project photo">
            {/* Use a known-good image path you have in git (adjust if needed) */}
            <div className="heroPhoto">
              <Image
                src="/projects/extensions/project-01/IMG_0490.JPG"
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

      {/* SERVICES */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Services</h2>
              <p className="sub">From planning to finishing — we manage the job properly.</p>
            </div>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3>Extensions</h3>
              <p>Single and multi-storey extensions built to match your home.</p>
              <Link className="btn" href="/projects/extensions">See extensions</Link>
            </div>

            <div className="card">
              <h3>Renovations</h3>
              <p>Refurbishments, reconfigurations and finish upgrades.</p>
              <Link className="btn" href="/projects/renovations">See renovations</Link>
            </div>

            <div className="card">
              <h3>New Builds</h3>
              <p>From groundworks to completion — new homes built properly.</p>
              <Link className="btn" href="/projects/new-builds">See new builds</Link>
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
              <p className="sub">A selection of recent work across Hampshire & Surrey.</p>
            </div>
            <Link className="btn" href="/projects">
              See all projects
            </Link>
          </div>

          <div className="grid-3">
            <Link className="card" href="/projects/extensions">
              <div className="featThumb">
                <Image
                  src="/projects/extensions/project-01/IMG_0490.JPG"
                  alt="Extensions project"
                  fill
                  className="featThumbImg"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <h3>Extensions</h3>
              <p>Recent extension work</p>
            </Link>

            <Link className="card" href="/projects/renovations">
              <div className="featThumb">
                <Image
                  src="/projects/renovations/project-01/IMG_1768.JPG"
                  alt="Renovation project"
                  fill
                  className="featThumbImg"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <h3>Renovations</h3>
              <p>Recent renovation work</p>
            </Link>

            <Link className="card" href="/projects/new-builds">
              <div className="featThumb">
                <Image
                  src="/projects/new-builds/project-01/01.webp"
                  alt="New build project"
                  fill
                  className="featThumbImg"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <h3>New Builds</h3>
              <p>Recent new build work</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT ANCHOR (so /#contact works even if your contact form is elsewhere) */}
      <div id="contact" />
    </main>
  );
}
