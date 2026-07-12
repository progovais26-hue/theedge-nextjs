"use client";

import { useEffect, useRef } from "react";

const HERO_WORDS = ["BURNS.", "MOVES.", "CONVERTS.", "INSPIRES.", "IGNITES."];
const SPEC_WORDS = [
  "Video Production",
  "Brand Storytelling",
  "Social Content",
  "Live Events",
  "Podcasts & Audio",
];

export default function Hero() {
  const heroRef = useRef(null);
  const specRef = useRef(null);

  useEffect(() => {
    const hEl = heroRef.current;
    let hi = 0,
      hci = 0,
      hDel = false;
    let hTimer;

    function typeHero() {
      const w = HERO_WORDS[hi];
      if (!hDel && hci < w.length) {
        hEl.textContent = w.slice(0, ++hci);
        hTimer = setTimeout(typeHero, 70);
      } else if (!hDel && hci === w.length) {
        hTimer = setTimeout(() => {
          hDel = true;
          typeHero();
        }, 2200);
      } else if (hDel && hci > 0) {
        hEl.textContent = w.slice(0, --hci);
        hTimer = setTimeout(typeHero, 35);
      } else {
        hDel = false;
        hi = (hi + 1) % HERO_WORDS.length;
        hTimer = setTimeout(typeHero, 300);
      }
    }
    typeHero();

    const sEl = specRef.current;
    let si = 0,
      sci = 0,
      sDel = false;
    let sTimer;

    function typeSpec() {
      const w = SPEC_WORDS[si];
      if (!sDel && sci < w.length) {
        sEl.textContent = w.slice(0, ++sci);
        sTimer = setTimeout(typeSpec, 65);
      } else if (!sDel && sci === w.length) {
        sTimer = setTimeout(() => {
          sDel = true;
          typeSpec();
        }, 1800);
      } else if (sDel && sci > 0) {
        sEl.textContent = w.slice(0, --sci);
        sTimer = setTimeout(typeSpec, 30);
      } else {
        sDel = false;
        si = (si + 1) % SPEC_WORDS.length;
        sTimer = setTimeout(typeSpec, 200);
      }
    }
    const initialTimer = setTimeout(typeSpec, 600);

    return () => {
      clearTimeout(hTimer);
      clearTimeout(sTimer);
      clearTimeout(initialTimer);
    };
  }, []);

  return (
    <section id="home">
      <div className="grid-lines"></div>
      <div className="hero-eyebrow">
        <div className="eyebrow-line"></div>
        <span className="eyebrow-text">Where Stories Ignite</span>
      </div>
      <h1 className="hero-h1">
        <span className="h1-solid">WE CREATE</span>
        <br />
        <span className="h1-outline">CONTENT THAT</span>
        <br />
        <span className="h1-solid" ref={heroRef}></span>
        <span className="typed-cursor"></span>
      </h1>
      <div className="hero-typed-wrap">
        <span className="typed-label">Specializing in</span>
        <span className="typed-word" ref={specRef}></span>
        <span className="typed-cursor" style={{ fontSize: "28px", height: ".9em" }}></span>
      </div>
      <p className="hero-desc">
        TheEdge Media is a powerhouse content studio built for brands that refuse to be
        background noise. We film, cut, and deliver stories that move people.
      </p>
      <div className="hero-btns">
        <a href="#work" className="btn-fire">
          View Our Work
        </a>
        <a href="#contact" className="btn-ghost">
          Start a Project
        </a>
      </div>
      <div className="hero-deco">
        <div
          className="play-ring"
          id="play-btn"
          onClick={() => alert("🎬 Showreel coming soon!")}
        >
          <div className="play-icon"></div>
          <span className="deco-label">Watch Showreel</span>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-bar"></div>
      </div>
    </section>
  );
}
