import Link from "next/link";
import Image from "next/image";
import { categoryCover } from "@/data/category-covers";

// ✅ EDIT THESE (single source of truth)
const TEL_NUMBER = "01234 567 890";
const MOBILE_NUMBER = "07123 456 789";
const EMAIL = "info@sjhuntbuilders.co.uk"; // change if needed

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
              <strong>Crowthorne</strong>, <strong>Camberley</strong>, <strong>Farnborough</strong> and surrounding areas.
              From home extensions to full new-builds, we deliver clear quotes, tidy sites and a finish you’ll be proud of.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#contact">
                Get a Quote
              </a>

              {/* ✅ Numbers shown on the buttons (not just “Tel/Mobile”) */}
              <a className="btn" href={`tel:${TEL_NUMBER.replace(/\s+/g, "")}`}>
                Tel: {TEL_NUMBER}
              </a>
              <a className="btn" href={`tel:${MOBILE_NUMBER.replace(/\s+/g, "")}`}>
                Mobile: {MOBILE_NUMBER}
              </a>
            </div>

            <div className="hero-badges">
              <div className="badge">Clear written quotes</div>
              <div className="badge">Quality workmanship</div>
              <div className="badge">Respectful, tidy site</div>
              <div className="badge">Local Hampshire/Surrey</div>
            </div>
          </div>

          {/* HERO IMAGE (uses category cover so it always exists) */}
          <div className="panel hero-right">
            <div className="heroPhoto">
              <Image
                src={categoryCover("renovations")}
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
      <section className="wrap">
        <div className="section-head">
          <div>
            <h2>Services</h2>
            <p className="sub">From planning to finishing — we manage the job properly.</p>
          </div>
        </div>

        <div className="grid-3">
          <Link className="card" href="/projects/extensions">
            <h3>Extensions</h3>
            <p>Single and multi-storey extensions built to match your home.</p>
            <span className="miniCta">See extensions →</span>
          </Link>

          <Link className="card" href="/projects/renovations">
            <h3>Renovations</h3>
            <p>Refurbishments, reconfigurations and finish upgrades.</p>
            <span className="miniCta">See renovations →</span>
          </Link>

          <Link className="card" href="/projects/new-builds">
            <h3>New Builds</h3>
            <p>From groundworks to completion — new homes built properly.</p>
            <span className="miniCta">See new builds →</span>
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
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
                  src={categoryCover("extensions")}
                  alt="Extensions projects"
                  fill
                  className="featThumbImg"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <h3>Extensions</h3>
              <p>Extra space built properly — seamless finish, tidy site.</p>
            </Link>

            <Link className="card" href="/projects/renovations">
              <div className="featThumb">
                <Image
                  src={categoryCover("renovations")}
                  alt="Renovations projects"
                  fill
                  className="featThumbImg"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <h3>Renovations</h3>
              <p>Refurbs and upgrades that transform how your home feels.</p>
            </Link>

            <Link className="card" href="/projects/new-builds">
              <div className="featThumb">
                <Image
                  src={categoryCover("new-builds")}
                  alt="New builds projects"
                  fill
                  className="featThumbImg"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <h3>New Builds</h3>
              <p>From groundwork to completion — built to last.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT (Get a Quote anchor target) */}
      <section id="contact">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Get a Quote</h2>
              <p className="sub">Call or email — we’ll come back to you quickly.</p>
            </div>
          </div>

          <div className="grid-3">
            <a className="card" href={`tel:${TEL_NUMBER.replace(/\s+/g, "")}`}>
              <h3>Telephone</h3>
              <p>{TEL_NUMBER}</p>
            </a>

            <a className="card" href={`tel:${MOBILE_NUMBER.replace(/\s+/g, "")}`}>
              <h3>Mobile</h3>
              <p>{MOBILE_NUMBER}</p>
            </a>

            <a className="card" href={`mailto:${EMAIL}`}>
              <h3>Email</h3>
              <p>{EMAIL}</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
