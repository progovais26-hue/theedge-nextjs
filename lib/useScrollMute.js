"use client";

import { useEffect } from "react";

// Unmutes + plays a video once it's ~50% visible in the viewport, mutes it again
// once it scrolls back out. Actual audio still depends on the browser's autoplay
// policy (unmuted audio without a prior click can be silently blocked).
export function useScrollMute(videoRef, threshold = 0.5) {
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.muted = false;
          el.play().catch(() => {});
        } else {
          el.muted = true;
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [videoRef, threshold]);
}
