import Reveal from "./Reveal";

const SERVICES = [
  {
    num: "01",
    icon: "🎬",
    title: "Video Production",
    desc: "Cinematic brand films, commercials, and documentaries shot with broadcast-grade equipment and a director's eye.",
    delay: undefined,
  },
  {
    num: "02",
    icon: "✂️",
    title: "Post-Production",
    desc: "Color grading, sound design, motion graphics, and editing that transforms raw footage into captivating narratives.",
    delay: ".08s",
  },
  {
    num: "03",
    icon: "📡",
    title: "Live Streaming",
    desc: "Multi-camera live production for events, conferences, and product launches — broadcast-quality, always on.",
    delay: ".16s",
  },
  {
    num: "04",
    icon: "🎙️",
    title: "Podcast & Audio",
    desc: "Studio-quality podcast production — recording, mixing, branding, and distribution across all major platforms.",
    delay: ".24s",
  },
  {
    num: "05",
    icon: "📱",
    title: "Social Content",
    desc: "Reels, Shorts, TikToks — high-volume, platform-native content designed to stop the scroll and drive engagement.",
    delay: ".32s",
  },
  {
    num: "06",
    icon: "🎯",
    title: "Content Strategy",
    desc: "Data-backed content roadmaps that align your media output with real business goals and audience behaviour.",
    delay: ".40s",
  },
];

export default function Services() {
  return (
    <section id="services" className="sec">
      <div className="sec-inner">
        <Reveal>
          <p className="sec-tag">What We Do</p>
        </Reveal>
        <Reveal delay=".1s">
          <h2 className="sec-title">
            Full-Spectrum <span style={{ color: "#f97316" }}>Media</span> Production
          </h2>
        </Reveal>
        <Reveal delay=".15s">
          <p className="sec-desc">
            From concept to final cut — we handle every frame with obsessive precision.
          </p>
        </Reveal>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <Reveal key={s.num} delay={s.delay} className="svc">
              <div className="svc-num">{s.num}</div>
              <div className="svc-icon">{s.icon}</div>
              <div className="svc-title">{s.title}</div>
              <div className="svc-desc">{s.desc}</div>
              <div className="svc-arrow">→</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
