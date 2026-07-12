import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    text: "The Hedge Media completely transformed how our brand communicates. The video they produced got 4 million organic views in the first week.",
    author: "Rania Al-Hassan",
    role: "CMO · NovaTech",
    delay: undefined,
  },
  {
    text: "Working with The Hedge is a different experience entirely. They don't just shoot — they think, they feel, they execute at a level I haven't seen elsewhere.",
    author: "Khalid Mansour",
    role: "Founder · Bloom Brands",
    delay: ".12s",
  },
  {
    text: "Our product launch film from The Hedge drove a 280% spike in traffic on launch day. The ROI was immediate and undeniable.",
    author: "Sara Nour",
    role: "Director of Marketing · PulseRetail",
    delay: ".24s",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="sec"
      style={{
        paddingTop: "60px",
        background: "rgba(249,115,22,0.02)",
        borderTop: "1px solid rgba(249,115,22,0.08)",
      }}
    >
      <div className="sec-inner">
        <Reveal>
          <p className="sec-tag">Client Words</p>
        </Reveal>
        <Reveal delay=".1s">
          <h2 className="sec-title">
            They <span style={{ color: "#f97316" }}>Said It</span> Best
          </h2>
        </Reveal>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.author} delay={t.delay} className="testi-card">
              <div className="testi-quote">&quot;</div>
              <div className="testi-text">{t.text}</div>
              <div className="testi-author">{t.author}</div>
              <div className="testi-role">{t.role}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
