"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
};

export default function Lightbox({ images, initialIndex = 0, isOpen, onClose }: Props) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) setIndex(initialIndex);
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((v) => (v + 1) % safeImages.length);
      if (e.key === "ArrowLeft") setIndex((v) => (v - 1 + safeImages.length) % safeImages.length);
    };

    // lock scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose, safeImages.length]);

  if (!isOpen || safeImages.length === 0) return null;

  const current = safeImages[index];

  return (
    <div className="lbOverlay" role="dialog" aria-modal="true" aria-label="Image viewer">
      {/* click outside closes */}
      <button className="lbBackdrop" onClick={onClose} aria-label="Close" />

      <div className="lbShell">
        <div className="lbTop">
          <div className="lbCounter">
            {index + 1} / {safeImages.length}
          </div>

          <button className="lbIconBtn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="lbStage">
          <button
            className="lbNavBtn left"
            onClick={() => setIndex((v) => (v - 1 + safeImages.length) % safeImages.length)}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="lbImageWrap">
            <Image
              src={current}
              alt=""
              fill
              sizes="100vw"
              className="lbImage"
              priority
            />
          </div>

          <button
            className="lbNavBtn right"
            onClick={() => setIndex((v) => (v + 1) % safeImages.length)}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <div className="lbThumbBar" aria-label="Thumbnails">
          {safeImages.map((src, i) => (
            <button
              key={src + i}
              className={"lbThumb" + (i === index ? " active" : "")}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              type="button"
            >
              <span className="lbThumbImgWrap">
                <Image src={src} alt="" fill sizes="96px" className="lbThumbImg" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
