"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";

export default function CategoryGallery({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <main className="wrap pagePad">
      <header className="pageHead">
        <h1>{title}</h1>
        <p>{images.length} photos</p>
      </header>

      {/* Inline layout so CSS can't hide it */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 14,
          marginTop: 18,
        }}
      >
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => {
              setIdx(i);
              setOpen(true);
            }}
            aria-label={`Open image ${i + 1}`}
            style={{
              padding: 0,
              border: 0,
              background: "transparent",
              cursor: "pointer",
              width: "100%",
              display: "block",
            }}
          >
            <span
              style={{
                position: "relative",
                width: "100%",
                height: 190,
                overflow: "hidden",
                borderRadius: 14,
                display: "block",
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
                unoptimized
              />
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        initialIndex={idx}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </main>
  );
}
