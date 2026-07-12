"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient particle network canvas that reacts to the mouse.
 * Ported 1:1 from the original page's canvas script.
 */
export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H, pts;
    let mx = -999,
      my = -999;
    let raf;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function init() {
      const n = Math.min(90, Math.floor((W * H) / 16000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.4 + 0.15,
        warm: Math.random() < 0.6,
      }));
    }

    function handleResize() {
      resize();
      init();
    }

    function handleMouseMove(e) {
      mx = e.clientX;
      my = e.clientY;
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p) => {
        const dx = p.x - mx,
          dy = p.y - my,
          d = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {
          const f = (130 - d) / 130;
          p.vx += (dx / d) * f * 0.28;
          p.vy += (dy / d) * f * 0.28;
        }
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x,
            dy = pts[i].y - pts[j].y,
            d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            const c = pts[i].warm
              ? `rgba(249,115,22,${(1 - d / 100) * 0.18})`
              : `rgba(251,191,36,${(1 - d / 100) * 0.12})`;
            ctx.strokeStyle = c;
            ctx.lineWidth = 0.6;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(pts[i].x, pts[i].y, pts[i].r, 0, Math.PI * 2);
        ctx.fillStyle = pts[i].warm
          ? `rgba(249,115,22,${pts[i].a})`
          : `rgba(251,191,36,${pts[i].a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas id="canvas" ref={canvasRef}></canvas>;
}
