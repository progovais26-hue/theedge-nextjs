"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
        <Link href="/">
          <img src="/logo-full-white.png" alt="The Hedge Media" className="brand-logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link href="/#home">Home</Link>
        <ServicesMenu />
        <Link href="/#work">Work</Link>
        <Link href="/#process">Process</Link>
        <Link href="/#contact" className="nav-cta">
          Work With Us
        </Link>
      </div>
    </nav>
  );
}
