"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { thumb } from "@/lib/work-data";
import { VIDEOS } from "@/lib/video-meta";

const FEATURED_IDS = ["HSSyAMkNc60", "VNdz1Vfj7Jk", "ekNTD9OLdbo"];
const FEATURED = FEATURED_IDS.map((id) => VIDEOS.find((v) => v.id === id)).filter(Boolean);

export default function Work() {
  return (
    <section id="work" className="sec" style={{ paddingTop: "80px" }}>
      <div className="sec-inner">
        <Reveal>
          <p className="sec-tag">Our Work</p>
        </Reveal>
        <Reveal delay=".1s">
          <h2 className="sec-title">
            Stories We&apos;ve <span style={{ color: "#f97316" }}>Told</span>
          </h2>
        </Reveal>
        <div className="work-grid">
          {FEATURED.map((p, i) => (
            <Reveal key={p.id} delay={i ? `${i * 0.1}s` : undefined} className="work-card" as={Link} href="/work">
              <img
                src={thumb(p.id)}
                onError={(e) => (e.target.src = `https://picsum.photos/seed/${p.id}/640/400`)}
                alt={p.title}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="work-overlay"></div>
              <div className="work-content">
                <div className="work-tag">{p.cat}</div>
                <div className="work-title">{p.title}</div>
                <div className="work-cta">View Project →</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay=".3s" style={{ marginTop: "48px", textAlign: "center" }}>
          <Link href="/work" className="btn-fire">
            View All Work →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
