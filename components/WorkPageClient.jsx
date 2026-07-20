"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { CATEGORIES, badgeClass, dotColor, thumb } from "@/lib/work-data";

function truncate(title) {
  return title.length > 30 ? `${title.slice(0, 28)}…` : title;
}

export default function WorkPageClient({ videos }) {
  const [activeCat, setActiveCat] = useState("all");
  const [activeProj, setActiveProj] = useState("overview");
  const [playing, setPlaying] = useState({});

  const filtered = activeCat === "all" ? videos : videos.filter((v) => v.cat === activeCat);
  const feat = filtered.find((v) => v.featured) || filtered[0];
  const rest = filtered.filter((v) => v !== feat);

  function setCategory(cat) {
    setActiveCat(cat);
    setActiveProj("overview");
  }

  function setProj(id) {
    const ids = ["overview", ...filtered.map((v) => v.id)];
    setActiveProj(ids.includes(id) ? id : "overview");
    document.getElementById("projTabBar")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function playVideo(id) {
    setPlaying((p) => ({ ...p, [id]: true }));
  }

  return (
    <div className="page" style={{ paddingTop: "0" }}>
      <Reveal as="div" className="port-hero">
        <p className="sec-tag">Our Work</p>
        <h1>
          Stories We&apos;ve
          <br />
          <span className="outline">Told.</span>
        </h1>
        <p>
          Brand films, real estate showcases, social campaigns, and corporate
          productions — every frame built to convert attention into action.
        </p>
        <div className="port-hero-stats">
          <div className="phstat">
            <div className="phstat-n">{videos.length}+</div>
            <div className="phstat-l">Featured Projects</div>
          </div>
          <div className="phstat">
            <div className="phstat-n">80M+</div>
            <div className="phstat-l">Views Generated</div>
          </div>
          <div className="phstat">
            <div className="phstat-n">120+</div>
            <div className="phstat-l">Brand Partners</div>
          </div>
        </div>
      </Reveal>

      <div className="cat-section">
        <div className="cat-tabs">
          <button
            className={`cat-tab${activeCat === "all" ? " active" : ""}`}
            onClick={() => setCategory("all")}
          >
            All Work <span className="cat-count">{videos.length}</span>
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`cat-tab${activeCat === cat ? " active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}{" "}
              <span className="cat-count">
                {videos.filter((v) => v.cat === cat).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="proj-tab-bar" id="projTabBar">
        <button
          className={`proj-tab${activeProj === "overview" ? " active" : ""}`}
          onClick={() => setProj("overview")}
        >
          <span className="ptdot"></span>Overview
        </button>
        {filtered.map((v) => (
          <button
            key={v.id}
            className={`proj-tab${activeProj === v.id ? " active" : ""}`}
            onClick={() => setProj(v.id)}
          >
            <span className="ptdot" style={{ background: dotColor(v.cat) }}></span>
            {truncate(v.title)}
          </button>
        ))}
      </div>

      <div className="panels-wrap">
        <div className={`panel${activeProj === "overview" ? " active" : ""}`}>
          <div className="featured-wrap">
            {feat && (
              <>
                <div className="featured-label">
                  <div className="fl-line"></div>
                  <span className="fl-text">Featured Project</span>
                  <div className="fl-line"></div>
                </div>
                <div className="featured-card" onClick={() => setProj(feat.id)}>
                  <img
                    src={thumb(feat.id)}
                    onError={(e) => (e.target.src = `https://picsum.photos/seed/feat/1400/600`)}
                    alt={feat.title}
                  />
                  <div className="feat-gradient"></div>
                  <div className="feat-info">
                    <div className="feat-badge">{feat.cat}</div>
                    <div className="feat-title">{feat.title}</div>
                    <div className="feat-sub">
                      {feat.client} &nbsp;·&nbsp; {feat.dur} &nbsp;·&nbsp; {feat.year}
                    </div>
                  </div>
                  <div className="feat-play">
                    <div className="feat-play-ring">
                      <div className="feat-play-icon"></div>
                    </div>
                  </div>
                </div>
                <div style={{ marginBottom: "48px" }}></div>
              </>
            )}
            {rest.length > 0 && (
              <div className="overview-grid">
                {rest.map((v) => (
                  <div className="grid-card" key={v.id} onClick={() => setProj(v.id)}>
                    <div className="gc-thumb">
                      <img
                        src={thumb(v.id)}
                        onError={(e) => (e.target.src = `https://picsum.photos/seed/${v.id}/640/360`)}
                        alt={v.title}
                      />
                      <div className="gc-dur">{v.dur}</div>
                      <div className="gc-overlay"></div>
                      <div className="gc-play">
                        <div className="gc-play-circle">
                          <div className="gc-play-icon"></div>
                        </div>
                      </div>
                    </div>
                    <div className="gc-info">
                      <div className="gc-top">
                        <span className={`gc-badge ${badgeClass(v.cat)}`}>{v.cat}</span>
                        <span className="gc-year">{v.year}</span>
                      </div>
                      <div className="gc-title">{v.title}</div>
                      <div className="gc-client">{v.client}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {filtered.map((v) => (
          <div className={`panel${activeProj === v.id ? " active" : ""}`} key={v.id}>
            <div className="proj-detail">
              <div className="proj-detail-grid">
                <div>
                  <div className="player-wrap">
                    <div className="player-ratio">
                      {playing[v.id] ? (
                        <iframe
                          className="player-iframe"
                          src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1&color=white&cc_load_policy=0&hl=en`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                          allowFullScreen
                        />
                      ) : (
                        <div
                          className="player-thumb"
                          style={{ backgroundImage: `url('${thumb(v.id)}')` }}
                          onClick={() => playVideo(v.id)}
                        >
                          <div className="player-thumb-grad"></div>
                          <div className="player-play-btn">
                            <div className="player-play-outer">
                              <div className="player-play-inner"></div>
                            </div>
                            <span className="player-play-label">Play Video</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="player-bar"></div>
                  </div>
                </div>
                <div className="proj-sidebar">
                  <span className={`proj-badge ${badgeClass(v.cat)}`}>{v.cat}</span>
                  <div className="proj-title-big">{v.title}</div>
                  <div className="proj-client-line">
                    Client: <strong>{v.client}</strong>
                  </div>
                  <div className="meta-divider"></div>
                  <div className="meta-grid">
                    <div className="meta-item">
                      <label>Year</label>
                      <span>{v.year}</span>
                    </div>
                    <div className="meta-item">
                      <label>Duration</label>
                      <span>{v.dur}</span>
                    </div>
                    <div className="meta-item">
                      <label>Category</label>
                      <span>{v.cat}</span>
                    </div>
                    <div className="meta-item">
                      <label>Format</label>
                      <span>16 : 9</span>
                    </div>
                  </div>
                  <div className="proj-desc-text">{v.desc}</div>
                  <button className="proj-watch-btn" onClick={() => playVideo(v.id)}>
                    ▶ &nbsp; Watch Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
