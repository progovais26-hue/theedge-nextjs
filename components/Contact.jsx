import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact">
      <Reveal as="p" className="sec-tag">
        Contact
      </Reveal>
      <Reveal as="h2" delay=".1s" className="sec-title" style={{ maxWidth: "100%" }}>
        Let&apos;s Make Something <span style={{ color: "#f97316" }}>Unforgettable</span>
      </Reveal>
      <Reveal
        delay=".15s"
        style={{ color: "#6b7280", marginBottom: "40px", lineHeight: 1.8, fontSize: "16px" }}
      >
        Tell us about your project and we&apos;ll get back to you within 24 hours.
      </Reveal>
      <div className="contact-grid">
        <Reveal>
          <input className="inp" placeholder="Your Name" />
        </Reveal>
        <Reveal delay=".05s">
          <input className="inp" placeholder="Email Address" />
        </Reveal>
        <Reveal delay=".1s" className="full">
          <input className="inp" placeholder="Company / Brand" />
        </Reveal>
        <Reveal delay=".15s" className="full">
          <select className="inp" style={{ appearance: "none" }} defaultValue="">
            <option value="" disabled style={{ background: "#111" }}>
              Type of Project
            </option>
            <option style={{ background: "#111" }}>Brand Film</option>
            <option style={{ background: "#111" }}>Social Content</option>
            <option style={{ background: "#111" }}>Documentary</option>
            <option style={{ background: "#111" }}>Live Event</option>
            <option style={{ background: "#111" }}>Other</option>
          </select>
        </Reveal>
        <Reveal delay=".2s" className="full">
          <textarea className="inp" rows={5} placeholder="Tell us about your project..." />
        </Reveal>
        <Reveal delay=".25s" className="full">
          <button className="btn-send">Send the Brief →</button>
        </Reveal>
      </div>
    </section>
  );
}
