import { technologies } from "@/data/technologies";
import { Reveal } from "@/components/Reveal";

export function Technologies() {
  return (
    <section className="dn-section" aria-labelledby="tech-heading">
      <div className="dn-shell">
        <Reveal>
          <p className="dn-label">Capabilities</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="tech-heading" className="dn-h2" style={{ maxWidth: "18ch" }}>
            The tools we build with
          </h2>
        </Reveal>

        <div className="dn-tech">
          {technologies.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 0.04} className="dn-tech__item">
              <strong>{tech.name}</strong>
              <span>{tech.category}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
