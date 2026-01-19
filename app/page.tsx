import Link from "next/link";
import Image from "next/image";
import { categoryCover } from "@/lib/category-images";

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
              <strong>Camberley</strong>, <strong>Farnborough</strong> and surrounding areas.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="/#contact">Request a Quote</a>
              <Link className="btn" href="/projects">View Recent Work</Link>
            </div>
          </div>

          <div className="panel hero-right" aria-label="Project photo">
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
                <Image src={categoryCover("extensions")} alt="Extensions projects" fill className="featThumbImg" sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <h3>Extensions</h3>
            </Link>

            <Link className="card" href="/projects/renovations">
              <div className="featThumb">
                <Image src={categoryCover("renovations")} alt="Renovations projects" fill className="featThumbImg" sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <h3>Renovations</h3>
            </Link>

            <Link className="card" href="/projects/new-builds">
              <div className="featThumb">
                <Image src={categoryCover("new-builds")} alt="New build projects" fill className="featThumbImg" sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <h3>New Builds</h3>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
