"use client";

import { useEffect, useState } from "react";
import ServicesMenu from "./ServicesMenu";

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
        <img src="/logo-full-white.png" alt="The Hedge Media" className="brand-logo" />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <ServicesMenu />
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#contact" className="nav-cta">
          Work With Us
        </a>
      </div>
    </nav>
  );
}
