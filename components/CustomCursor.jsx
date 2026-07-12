"use client";

import { useEffect, useRef } from "react";

/**
 * Custom mouse cursor (ring + dot) that grows over interactive elements.
 * Ported 1:1 from the original page's cursor script.
 */
export default function CustomCursor() {
  const curRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cur = curRef.current;
    const dot = dotRef.current;
    if (!cur || !dot) return;

    const handleMove = (e) => {
      cur.style.left = e.clientX + "px";
      cur.style.top = e.clientY + "px";
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", handleMove);

    const grow = () => cur.classList.add("big");
    const shrink = () => cur.classList.remove("big");

    const targets = document.querySelectorAll(
      "a,button,.svc,.work-card,.proc-item,.testi-card,.play-ring,.reel-play"
    );
    targets.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", handleMove);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef}></div>
      <div id="cur-dot" ref={dotRef}></div>
    </>
  );
}
