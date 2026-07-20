"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LuExpand } from "react-icons/lu";
import Reveal from "./Reveal";

export default function ServiceGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex === null) return;

    function onPopState() {
      setActiveIndex(null);
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [activeIndex]);

  function openImage(i) {
    window.history.pushState({ lightbox: true }, "");
    setActiveIndex(i);
  }

  function closeImage() {
    if (window.history.state?.lightbox) {
      window.history.back();
    } else {
      setActiveIndex(null);
    }
  }

  return (
    <>
      <div className="service-gallery-grid">
        {images.map((img, i) => (
          <Reveal key={img.src} delay={i ? `${i * 0.08}s` : undefined} as="button" type="button" className="service-gallery-card" onClick={() => openImage(i)}>
            <div className="service-gallery-thumb">
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="(max-width: 700px) 100vw, 400px"
                style={{ objectFit: "cover" }}
              />
              <div className="service-gallery-overlay">
                <span className="service-gallery-view">
                  <LuExpand /> View Full Image
                </span>
              </div>
            </div>
            <span className="service-gallery-caption">{img.caption}</span>
          </Reveal>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="service-lightbox-overlay" onClick={closeImage}>
          <button className="service-lightbox-close" onClick={closeImage}>
            ✕
          </button>
          <div className="service-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images[activeIndex].src} alt={images[activeIndex].caption} className="service-lightbox-img" />
            <p className="service-lightbox-caption">{images[activeIndex].caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
