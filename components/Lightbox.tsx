"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
};

export default function Lightbox({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest(
        "button[data-index]"
      ) as HTMLButtonElement | null;

      if (!btn) return;
      const i = Number(btn.dataset.index);
      if (Number.isNaN(i)) return;

      setIndex(i);
      setOpen(true);
    };

    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight")
        setIndex((v) => (v + 1) % images.length);
      if (e.key === "ArrowLeft")
        setIndex((v) => (v - 1 + images.length) % images.length);
    };

    document.addEventListener("click", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, images.length]);

  if (!open || images.length === 0) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true">
      <button
        className="lbClose"
        onClick={() => setOpen(false)}
        aria-label="Close"
      >
        ✕
      </button>

      <button
        className="lbNav"
        onClick={() =>
          setIndex((v) => (v - 1 + images.length) % images.length)
        }
        aria-label="Previous"
      >
        ‹
      </button>

      <div className="lbStage">
        <Image
          src={images[index]}
          alt={`Image ${index + 1}`}
          fill
          sizes="100vw"
          style={{ objectFit: "contain" }}
        />
      </div>

      <button
        className="lbNav"
        onClick={() => setIndex((v) => (v + 1) % images.length)}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
