import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

function NetworkBackdrop() {
  const reduced = useReducedMotion();
  const points = [
    [10, 30],
    [26, 68],
    [42, 22],
    [58, 74],
    [74, 34],
    [90, 62],
  ];

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.7 }}
    >
      {points.slice(0, -1).map(([x, y], i) => {
        const [nx, ny] = points[i + 1] as [number, number];
        return (
          <motion.line
            key={`${x}-${y}`}
            x1={x}
            y1={y}
            x2={nx}
            y2={ny}
            stroke="#00D95F"
            strokeOpacity="0.25"
            strokeWidth="0.25"
            initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: i * 0.12, ease: "easeOut" }}
          />
        );
      })}
      {points.map(([cx, cy], i) => (
        <motion.circle
          key={`${cx}-${cy}-n`}
          cx={cx}
          cy={cy}
          r="0.6"
          fill="#16F06D"
          animate={reduced ? {} : { opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 3.2, delay: i * 0.3, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

export function CTA() {
  return (
    <section id="contact" className="dn-section" aria-labelledby="cta-heading">
      <div className="dn-shell">
        <Reveal>
          <div className="dn-cta">
            <div className="dn-grid-bg" />
            <NetworkBackdrop />
            <div className="dn-glow" style={{ inset: "10% 25%" }} />
            <h2 id="cta-heading">
              Ready to <span className="dn-green">build?</span>
            </h2>
            <p>
              Tell us what you're working on and let's find the right digital solution
              for your business.
            </p>
            <a
              href="https://wa.me/27765808310?text=Hi%20DevNest!%20I%27m%20interested%20in%20starting%20a%20project.%20I%27d%20like%20to%20find%20out%20more%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="dn-btn dn-btn--primary"
              style={{ position: "relative" }}
            >
              Start a Conversation <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
