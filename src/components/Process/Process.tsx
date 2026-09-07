import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const steps = [
  { num: "01", title: "Discover", copy: "Understand the business, the audience and the goals." },
  { num: "02", title: "Design", copy: "Create the visual direction and the user experience." },
  { num: "03", title: "Build", copy: "Develop the website or digital solution." },
  { num: "04", title: "Launch", copy: "Test, optimise and deploy." },
  { num: "05", title: "Grow", copy: "Continue improving the digital presence over time." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.4 });
  const railScale = useTransform(reduced ? scrollYProgress : scaleY, (v) => Math.max(v, 0.02));

  return (
    <section className="dn-section" aria-labelledby="process-heading">
      <div className="dn-shell">
        <Reveal>
          <p className="dn-label">The process</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="process-heading" className="dn-h2">
            From idea to <span className="dn-green">online.</span>
          </h2>
        </Reveal>

        <div className="dn-process" ref={ref}>
          <div className="dn-process__rail">
            <motion.span style={{ scaleY: railScale }} />
          </div>
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.05} className="dn-step">
              <span className="dn-step__node" aria-hidden="true" />
              <span className="dn-step__num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
