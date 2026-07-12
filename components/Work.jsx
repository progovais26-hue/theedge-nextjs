import Reveal from "./Reveal";

const PROJECTS = [
  { bg: "wbg1", emoji: "🔥", tag: "Brand Film", title: "Ignite Campaign", delay: undefined },
  { bg: "wbg2", emoji: "🌌", tag: "Documentary", title: "Beyond Borders", delay: ".1s" },
  { bg: "wbg3", emoji: "🌿", tag: "Social Series", title: "EcoVision", delay: ".2s" },
];

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
          {PROJECTS.map((p) => (
            <Reveal key={p.title} delay={p.delay} className="work-card">
              <div
                className={`work-bg ${p.bg}`}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "80px",
                  opacity: 0.15,
                }}
              >
                {p.emoji}
              </div>
              <div className="work-overlay"></div>
              <div className="work-content">
                <div className="work-tag">{p.tag}</div>
                <div className="work-title">{p.title}</div>
                <div className="work-cta">View Project →</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
