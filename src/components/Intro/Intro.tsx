import { Reveal } from "@/components/Reveal";

export function Intro() {
  return (
    <section className="dn-section" aria-labelledby="intro-heading">
      <div className="dn-grid-bg" style={{ opacity: 0.5 }} />
      <div className="dn-shell" style={{ position: "relative" }}>
        <Reveal>
          <p className="dn-label">What we believe</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="intro-heading" className="dn-h2" style={{ maxWidth: "16ch" }}>
            We don't just build <span className="dn-green">websites.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="dn-body" style={{ fontSize: "1.1rem", marginTop: "1.5rem" }}>
            Every digital solution should have a purpose. We combine thoughtful design, modern
            technology and practical business goals to create digital experiences that work for
            your business.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
