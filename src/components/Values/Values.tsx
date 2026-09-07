import { Code2, LifeBuoy, ShieldCheck, Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const values = [
  {
    icon: Code2,
    title: "Clean code",
    copy: "Clean, maintainable development that stays readable long after launch.",
  },
  {
    icon: Target,
    title: "Results driven",
    copy: "Technology should serve a business purpose, not exist for its own sake.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    copy: "Solutions should be reliable, secure and straightforward to maintain.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support",
    copy: "DevNest doesn't simply disappear after launch day.",
  },
];

export function Values() {
  return (
    <section className="dn-section" aria-labelledby="values-heading">
      <div className="dn-shell">
        <Reveal>
          <p className="dn-label">How we work</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="values-heading" className="dn-h2" style={{ maxWidth: "16ch" }}>
            The difference is in the <span className="dn-green">detail.</span>
          </h2>
        </Reveal>

        <div className="dn-values">
          {values.map(({ icon: Icon, title, copy }, i) => (
            <Reveal key={title} delay={i * 0.07} className="dn-value">
              <Icon size={26} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
