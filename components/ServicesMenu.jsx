"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES_MENU = [
  {
    category: "Digital Marketing & Technology",
    items: [
      "Social Media Management & Marketing",
      "Website Development & UI/UX Design",
      "AI Ads & Video Production",
    ],
  },
  {
    category: "Creative & Media Production",
    items: [
      "Video Production",
      "Photography & Videography",
      "Graphic Design & Video Editing",
      "Studio Rental Services",
    ],
  },
  {
    category: "Events & Brand Solutions",
    items: [
      "Complete Event Management",
      "Audio Visual Setup & Live Streaming",
      "Brand & Company Profiling",
      "Advertisement & Outdoor Campaign",
      "Media & PR Services",
    ],
  },
];

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
        {SERVICES_MENU.map((col) => (
          <div className="nav-dropdown-col" key={col.category}>
            <div className="nav-dropdown-cat">{col.category}</div>
            {col.items.map((item) => (
              <a
                key={item}
                href="#services"
                className="nav-dropdown-item"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
