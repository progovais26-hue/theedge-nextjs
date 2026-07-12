"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({ target, suffix = "", label, delay }) {
  const ref = useRef(null);
  const numRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealObs.observe(el);
    return () => revealObs.disconnect();
  }, []);

  useEffect(() => {
    const numEl = numRef.current;
    if (!numEl) return;
    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let v = 0;
            const step = Math.ceil(target / 55);
            const t = setInterval(() => {
              v = Math.min(v + step, target);
              numEl.textContent = v + suffix;
              if (v >= target) clearInterval(t);
            }, 22);
            countObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    countObs.observe(numEl);
    return () => countObs.disconnect();
  }, [target, suffix]);

  return (
    <div ref={ref} className={`reveal${visible ? " visible" : ""}`} style={delay ? { transitionDelay: delay } : undefined}>
      <div className="stat-n" ref={numRef}>
        0{suffix}
      </div>
      <div className="stat-l">{label}</div>
    </div>
  );
}
