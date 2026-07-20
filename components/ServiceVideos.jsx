"use client";

import { useState } from "react";
import Reveal from "./Reveal";

function VideoCard({ video, index }) {
  const [playing, setPlaying] = useState(false);
  const id = typeof video === "string" ? video : video.id;
  const title = typeof video === "object" ? video.title : null;
  const client = typeof video === "object" ? video.client : null;
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <Reveal delay={index ? `${index * 0.08}s` : undefined}>
      <div className="svc-vid-card" onClick={() => setPlaying(true)} style={{ cursor: playing ? "default" : "pointer" }}>
        {playing ? (
          <iframe
            className="svc-vid-iframe"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0&showinfo=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img className="svc-vid-thumb" src={thumb} alt={title || "Video thumbnail"} loading="lazy" />
            <div className="svc-vid-overlay" />
            <div className="svc-vid-play">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="29" stroke="white" strokeWidth="2" />
                <polygon points="24,18 24,42 44,30" fill="white" />
              </svg>
            </div>
          </>
        )}
      </div>
      {(client || title) && (
        <div className="svc-vid-meta">
          {client && <p className="svc-vid-client">{client}</p>}
          {title && <p className="svc-vid-title">{title}</p>}
        </div>
      )}
    </Reveal>
  );
}

export default function ServiceVideos({ videos, sectionLabel, sectionHeading, sectionSubline }) {
  return (
    <div>
      {(sectionLabel || sectionHeading || sectionSubline) && (
        <div className="svc-vid-section-header">
          {sectionLabel && <span className="svc-vid-label">{sectionLabel}</span>}
          {sectionHeading && <h2 className="svc-vid-heading">{sectionHeading}</h2>}
          {sectionSubline && <p className="svc-vid-subline">{sectionSubline}</p>}
        </div>
      )}
      <div className="svc-vid-grid">
        {videos.map((video, i) => (
          <VideoCard key={typeof video === "string" ? video : video.id} video={video} index={i} />
        ))}
      </div>
    </div>
  );
}
