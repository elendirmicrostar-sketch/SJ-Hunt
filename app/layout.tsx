import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S J Hunt Building Contractors | Hampshire & Surrey",
  description:
    "S J Hunt Building Contractors serving Hampshire & Surrey. Established 1998. Extensions, renovations and new-build homes in Sandhurst, Crowthorne, Camberley and Farnborough.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <header>
          <div className="wrap">
            <div className="nav">
              <a className="brand" href="/">
                <div className="logo">SJ</div>
                <div className="name">
                  <strong>S J Hunt</strong>
                  <span>Building Contractors</span>
                </div>
              </a>

              <nav aria-label="Primary">
                <ul>
                  <li><a href="/projects">Projects</a></li>
                  <li><a href="/#services">Services</a></li>
                  <li><a href="/#about">About</a></li>
                  <li><a href="/#contact">Contact</a></li>
                </ul>
              </nav>

              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <a className="btn small" href="tel:01252510109">Call 01252 510109</a>
                <a className="btn small" href="tel:07712590713">Mobile 07712 590713</a>
                <a className="btn primary" href="/#contact">Get a Quote</a>
              </div>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
