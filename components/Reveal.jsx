"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps children in the same fade-up-on-scroll behaviour as the
 * original static page's `.reveal` / IntersectionObserver script.
 */
export default function Reveal({ children, delay, className = "", as: Tag = "div", style, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " visible" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: delay, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
