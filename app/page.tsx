import Link from "next/link";
import Image from "next/image";
import { coverFor } from "@/data/category-covers";

export default function Home() {
  return (
    <main>
      <div className="wrap hero">
        <div className="hero-grid">
          <div className="panel hero-left">
            <div className="kicker">
              Established 1998 • Hampshire & Surrey • Local, reliable workmanship
            </div>
            <h1>Building contractors for extensions, renovations and new-build homes.</h1>
            <p className="lead">
              Established in <strong>1998</strong>, based near <strong>Sandhurst</strong> and covering{" "}
              <strong>Crowthorne</strong>, <strong>Camberley</strong>, <strong>Farnborough</strong> and surrounding areas.
              From home extensions to renovations and new-builds, we deliver clear quotes, tidy sites and a finish you’ll be proud of.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="/#contact">Request a Quote</a>
              <Link className="btn" href="/projects">View Recent Work</Link>
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

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Featured work</h2>
              <p className="sub">Browse by category.</p>
            </div>
            <Link className="btn" href="/projects">See all projects</Link>
          </div>

          <div className="grid-3">
            <Link className="card" href="/projects/extensions">
              <div className="featThumb">
                <Image
                  src={coverFor("extensions")}
                  alt="Extensions"
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
                  alt="Renovations"
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
                  alt="New builds"
                  fill
                  className="featThumbImg"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <h3>New builds</h3>
              <p>From groundworks to completion — new homes built properly.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
