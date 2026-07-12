"use client";

import Reveal from "./Reveal";

export default function Showreel() {
  return (
    <section id="showreel">
      <div className="reel-bg"></div>
      <Reveal>
        <div
          className="reel-play"
          id="reel-btn"
          onClick={() => alert("🎬 Showreel coming soon!")}
        >
          <div className="reel-play-icon"></div>
        </div>
        <h2 className="reel-title">
          Watch The
          <br />
          <span style={{ color: "#f97316" }}>Showreel</span>
        </h2>
        <p className="reel-sub">
          Two minutes of fire. See exactly what TheEdge Media is capable of.
        </p>
        <a href="#contact" className="btn-fire" style={{ display: "inline-block" }}>
          Commission Your Film →
        </a>
      </Reveal>
    </section>
  );
}
