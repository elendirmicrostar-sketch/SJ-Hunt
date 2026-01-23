import Image from "next/image";
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
    <div className="navHeader">
      <div className="navSide" aria-hidden="true"></div>

      <a className="brand brandCenter" href="https://www.sjhuntbuildingcontractors.co.uk" aria-label="Home">
        <Image
          src="/brand/logo.png"
          alt="S J Hunt Building Contractors"
          width={720}
          height={200}
          priority
          className="brandLogo"
        />
      </a>

     <div className="navSide navRight">
  <a className="btn primary callBtn" href="/#contact">
    Get a Quote
  </a>
</div>
    </div>
  </div>
</header>


        {children}
      </body>
    </html>
  );
}
