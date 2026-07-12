import StatCounter from "./StatCounter";

const STATS = [
  { target: 300, suffix: "+", label: "Videos Produced", delay: undefined },
  { target: 80, suffix: "M+", label: "Views Generated", delay: ".1s" },
  { target: 120, suffix: "+", label: "Brand Partners", delay: ".2s" },
  { target: 15, suffix: " Awards", label: "Industry Recognition", delay: ".3s" },
];

export default function Stats() {
  return (
    <section id="stats">
      {STATS.map((s) => (
        <StatCounter key={s.label} {...s} />
      ))}
    </section>
  );
}
