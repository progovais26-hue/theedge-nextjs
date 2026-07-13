"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/lib/services-data";

export default function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function handleEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div
      className={`nav-dropdown${open ? " open" : ""}`}
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="nav-dropdown-trigger"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Services
        <span className="nav-dropdown-caret"></span>
      </button>

      <div className="nav-dropdown-panel">
        {SERVICE_CATEGORIES.map((col) => (
          <div className="nav-dropdown-col" key={col.category}>
            <div className="nav-dropdown-cat">{col.category}</div>
            {col.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="nav-dropdown-item"
                onClick={() => setOpen(false)}
              >
                {service.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
