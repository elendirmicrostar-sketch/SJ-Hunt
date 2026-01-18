import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="wrap hero">
        <div className="hero-grid">
          <div className="panel hero-left">
            <div className="kicker">Established 1998 • Hampshire & Surrey • Local, reliable workmanship</div>
            <h1>Building contractors for extensions, renovations and new-build homes.</h1>
            <p className="lead">
              Established in <strong>1998</strong>, based near <strong>Sandhurst</strong> and covering <strong>Crowthorne</strong>,{" "}
              <strong>Camberley</strong>, <strong>Farnborough</strong> and surrounding areas. From home extensions to full new-builds,
              we deliver clear quotes, tidy sites and a finish you’ll be proud of.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="/#contact">Request a Quote</a>
              <a className="btn" href="/projects">View Recent Work</a>
            </div>

            <div className="trustbar" role="list">
              <div className="pill" role="listitem">Clear written quotes</div>
              <div className="pill" role="listitem">Quality workmanship</div>
              <div className="pill" role="listitem">Respectful, tidy site</div>
              <div className="pill" role="listitem">Local Hampshire/Surrey</div>
            </div>
          </div>

          <div className="panel hero-right" aria-label="Project photo">
            
            <div className="heroPhoto">
  <Image
    src="/projects/renovations/project-13/cover.webp"
    alt="Recent renovation project"
    fill
    priority
    className="heroPhotoImg"
    sizes="(max-width: 900px) 100vw, 45vw"
  />
</div>

            <div className="badge">
              <strong>Recent project</strong>
            </div>
          </div>
        </div>
      </div>

      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Services</h2>
              <p className="sub">From planning support to completion, we deliver a smooth build with clear communication.</p>
            </div>
      
          </div>

          <div className="grid-3">
            <div className="card">
              <span className="tag">Popular</span>
              <h3>House Extensions</h3>
              <p>Extra space, designed to suit your home, with careful attention to structure and finish.</p>
            </div>
            <div className="card">
              <span className="tag">High impact</span>
              <h3>Renovations & Refurbishments</h3>
              <p>Modernising interiors, improving layouts, and upgrading finishes with minimal disruption.</p>
            </div>
            <div className="card">
              <span className="tag">Specialist</span>
              <h3>Brickwork, Roofing & Repairs</h3>
              <p>Structural work, brickwork, roofing repairs and maintenance—done properly and built to last.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Featured projects</h2>
              <p className="sub">A selection of recent work across Hampshire & Surrey.</p>
            </div>
            <a className="btn" href="/projects">See all projects</a>
          </div>

          <div className="grid-3">
          
              <Link className="card" href="/projects/extensions">
  <div className="featThumb">
    <Image
      src="/projects/extensions/project-05/cover.webp"
      alt="Renovation project"
      fill
      className="featThumbImg"
      sizes="(max-width: 900px) 100vw, 33vw"
    />
  </div>
  <h3>Extensions</h3>
  <p></p>
</Link>

            
              <Link className="card" href="/projects/renovations">
  <div className="featThumb">
    <Image
      src="/projects/renovations/project-13/cover.webp"
      alt="Renovation project"
      fill
      className="featThumbImg"
      sizes="(max-width: 900px) 100vw, 33vw"
    />
  </div>
  <h3>Renovation</h3>
  <p></p>
</Link>

          
          
             <Link className="card" href="/projects/new-builds">
  <div className="featThumb">
    <Image
      src="/projects/new-builds/project-01/cover.webp"
      alt="New Build Project"
      fill
      className="featThumbImg"
      sizes="(max-width: 900px) 100vw, 33vw"
    />
  </div>
  <h3>New Build Projects</h3>
  <p></p>
</Link>

          
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap split">
          <div className="card">
            <h2>How we work</h2>
            <p className="sub">A straightforward process so you always know what’s happening and what’s next.</p>
            <div className="steps" style={{ marginTop: 14 }}>
              {[
                ["1", "Enquiry", "Tell us about your project and preferred timescales."],
                ["2", "Site visit", "We discuss options and practical considerations."],
                ["3", "Quote", "Clear written quote with scope and assumptions."],
                ["4", "Build", "Tidy, respectful workmanship with regular updates."],
                ["5", "Handover", "Final walkthrough and finish checks."],
              ].map(([n, title, desc]) => (
                <div className="step" key={n}>
                  <div className="num">{n}</div>
                  <div>
                    <strong>{title}</strong>
                    <br />
                    <span className="sub">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2>Areas we cover</h2>
            <p className="sub">
              We serve <strong>Hampshire</strong> and <strong>Surrey</strong>, including:
            </p>
            <ul style={{ color: "var(--muted)", margin: "12px 0 0", paddingLeft: 18 }}>
              <li>Sandhurst</li>
              <li>Crowthorne</li>
              <li>Camberley</li>
              <li>Farnborough</li>
              <li>Surrounding towns and villages</li>
            </ul>
                      </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="card">
            <h2 style={{ fontSize: 22 }}>Request a Quote</h2>
            <p className="sub">Serving Hampshire & Surrey — including Sandhurst, Crowthorne, Camberley and Farnborough.</p>

            <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn primary" href="tel:01252510109">Call 01252 510109</a>
              <a className="btn" href="tel:07712590713">Mobile 07712 590713</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
