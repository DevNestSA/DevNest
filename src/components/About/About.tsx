import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const principles = [
  {
    number: "01",
    title: "Think",
    text: "We start by understanding your business, your customers and what you actually need.",
  },
  {
    number: "02",
    title: "Build",
    text: "We turn that understanding into a clear, responsive and purposeful digital experience.",
  },
  {
    number: "03",
    title: "Grow",
    text: "We stay available after launch to help keep your digital presence moving forward.",
  },
];

export function About() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      id="about"
      className="dn-section dn-about-section"
      aria-labelledby="about-heading"
    >
      <div className="dn-shell">

        <Reveal>
          <p className="dn-label">About DevNest</p>
        </Reveal>

        <div className="dn-about-intro">

          <Reveal delay={0.08}>
            <h2 id="about-heading" className="dn-h2">
              Digital foundations for{" "}
              <span className="dn-green">growth.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="dn-about-copy">
              <p className="dn-body">
                DevNest is a small digital development studio focused on
                building websites, online stores and custom digital solutions
                for businesses.
              </p>

              <p className="dn-body">
                We believe good digital work should be clear, useful and built
                around the business — not forced into a template.
              </p>
            </div>
          </Reveal>

        </div>

        <Reveal delay={0.22}>
          <div className="dn-about-divider" />
        </Reveal>

        <div className="dn-about-principles">

          {principles.map((principle, index) => (
            <Reveal
              key={principle.number}
              delay={0.28 + index * 0.08}
            >
              <motion.article
                className="dn-about-principle"
                whileHover={reduced ? {} : { y: -4 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                <div className="dn-about-principle__top">
                  <span>{principle.number}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </div>

                <h3>{principle.title}</h3>

                <p>{principle.text}</p>

              </motion.article>
            </Reveal>
          ))}

        </div>

        <Reveal delay={0.5}>
          <div className="dn-about-build">

            <div className="dn-about-build__label">
              <span className="dn-status-dot" />
              HOW WE WORK
            </div>

            <div className="dn-about-build__steps">
              <span>UNDERSTAND</span>
              <ArrowRight size={15} aria-hidden="true" />
              <span>BUILD</span>
              <ArrowRight size={15} aria-hidden="true" />
              <span>LAUNCH</span>
              <ArrowRight size={15} aria-hidden="true" />
              <span className="dn-green">GROW</span>
            </div>

          </div>
        </Reveal>

        <Reveal delay={0.58}>
          <ul className="dn-about-points">

            <li>
              <Check size={17} aria-hidden="true" />
              <span>Design and development handled together</span>
            </li>

            <li>
              <Check size={17} aria-hidden="true" />
              <span>Straightforward communication throughout the build</span>
            </li>

            <li>
              <Check size={17} aria-hidden="true" />
              <span>Support and maintenance after launch</span>
            </li>

          </ul>
        </Reveal>

      </div>
    </section>
  );
}