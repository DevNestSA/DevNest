import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WorkshopVisual } from "@/components/WorkshopVisual/WorkshopVisual";

export function Hero() {
  const reduced = useReducedMotion();
  const up = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="home" className="dn-hero">
      <div className="dn-grid-bg" />
      <div className="dn-glow" style={{ left: "-10%", top: "10%", width: 520, height: 520 }} />

      <div className="dn-shell dn-hero__grid">
        <div>
          <motion.p className="dn-label" {...up(0)}>
            Digital Solutions • Web Development
          </motion.p>

          <h1>
            <motion.span {...up(0.1)}>We build.</motion.span>
            <motion.span className="dn-green" {...up(0.2)}>
              You grow.
            </motion.span>
          </h1>

          <motion.p className="dn-body" {...up(0.32)}>
            Modern websites and digital solutions designed to help businesses build their
            presence, connect with customers and grow online.
          </motion.p>

          <motion.div className="dn-hero__actions" {...up(0.42)}>
            <a href="#contact" className="dn-btn dn-btn--primary">
              Start a Project <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#work" className="dn-btn dn-btn--ghost">
              Explore Our Work
            </a>
          </motion.div>

          <motion.div className="dn-hero__meta" {...up(0.55)}>
            <span>Design</span>
            <span>Development</span>
            <span>E-Commerce</span>
            <span>Hosting</span>
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <WorkshopVisual />
        </motion.div>
      </div>
    </section>
  );
}
