"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <div className="nav-brand">
        <div className="brand-icon">▶</div>
        <span className="brand-name">
          THE<span>EDGE</span>.{" "}
          <span style={{ fontSize: "13px", opacity: 0.7, letterSpacing: "2px" }}>
            MEDIA
          </span>
        </span>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#contact" className="nav-cta">
          Work With Us
        </a>
      </div>
    </nav>
  );
}
