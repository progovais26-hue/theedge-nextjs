"use client";
import { useRef } from "react";
import Reveal from "./Reveal";
import { useScrollMute } from "@/lib/useScrollMute";

export default function Showreel() {
  const videoRef = useRef(null);
  useScrollMute(videoRef);

  return (
    <section id="showreel">
      <div className="reel-bg"></div>
      <Reveal>
        <h2 className="reel-title">
          Our Work<br />
          <span style={{ color: "#f97316" }}>In Motion</span>
        </h2>
        <p className="reel-sub">
          A look inside the projects we&apos;ve built for 20+ brand partners — real estate,
          events, and social content that performs.
        </p>
        <div className="reel-video-wrap">
          <div className="reel-video">
            <video ref={videoRef} src="/showreel/banner.mp4" autoPlay muted loop playsInline controls />
          </div>
        </div>
        <a href="#contact" className="btn-fire" style={{ display: "inline-block" }}>
          Commission Your Film →
        </a>
      </Reveal>
    </section>
  );
}
