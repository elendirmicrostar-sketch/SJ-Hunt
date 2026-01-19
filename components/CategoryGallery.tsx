"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";

export default function CategoryGallery({ title, images }: { title: string; images: string[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <main className="wrap pagePad">
      <header className="pageHead">
        <h1>{title}</h1>
        <p>{images.length} photos</p>
      </header>

      <div className="thumbGrid">
        {images.map((src, i) => (
          <button
            key={src + i}
            className="thumbBtn"
            onClick={() => {
              setIdx(i);
              setOpen(true);
            }}
            type="button"
            aria-label={`Open image ${i + 1}`}
          >
            <span className="thumbImgWrap">
              <Image src={src} alt="" fill className="thumbImg" sizes="(max-width: 900px) 50vw, 25vw" />
            </span>
          </button>
        ))}
      </div>

      <Lightbox images={images} initialIndex={idx} isOpen={open} onClose={() => setOpen(false)} />
    </main>
  );
}
