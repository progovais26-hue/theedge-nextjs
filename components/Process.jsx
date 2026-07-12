import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "Brief & Discovery",
    desc: "We dig deep into your brand, audience, and objectives. No templates — every project starts from scratch.",
    delay: undefined,
  },
  {
    num: "02",
    title: "Concept & Script",
    desc: "Our creative team develops concepts, storyboards, and scripts that carry your message and move your audience.",
    delay: ".1s",
  },
  {
    num: "03",
    title: "Production Day",
    desc: "Lights, camera, action — our crews execute with precision. On-location or in-studio, we deliver cinematic quality.",
    delay: ".2s",
  },
  {
    num: "04",
    title: "Post & Delivery",
    desc: "Edit, grade, mix, and master. We deliver broadcast-ready files optimized for every platform you need.",
    delay: ".3s",
  },
];

export default function Process() {
  return (
    <section id="process" className="sec">
      <div className="sec-inner">
        <Reveal>
          <p className="sec-tag">How We Work</p>
        </Reveal>
        <Reveal delay=".1s">
          <h2 className="sec-title">
            The <span style={{ color: "#f97316" }}>Edge</span> Process
          </h2>
        </Reveal>
        <div className="process-list" style={{ marginTop: "48px" }}>
          {STEPS.map((s) => (
            <Reveal key={s.num} delay={s.delay} className="proc-item">
              <div className="proc-num">{s.num}</div>
              <div className="proc-info">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="proc-arrow">→</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
