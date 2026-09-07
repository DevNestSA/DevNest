import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

function NestGraphic() {
  const reduced = useReducedMotion();
  const nodes = [
    [50, 18],
    [22, 40],
    [78, 40],
    [34, 74],
    [66, 74],
    [50, 52],
  ];

  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Abstract DevNest network graphic">
      <defs>
        <radialGradient id="dn-nest-glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#00D95F" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#00D95F" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#dn-nest-glow)" />
      {[38, 30, 22].map((r, i) => (
        <motion.circle
          key={r}
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#123326"
          strokeWidth="0.5"
          animate={reduced ? {} : { rotate: i % 2 ? -360 : 360 }}
          style={{ transformOrigin: "50% 50%" }}
          transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" }}
        />
      ))}
      {[
        "M 14 56 C 30 34, 70 34, 86 56",
        "M 18 64 C 34 46, 66 46, 82 64",
        "M 24 70 C 38 56, 62 56, 76 70",
      ].map((d) => (
        <path key={d} d={d} fill="none" stroke="#00D95F" strokeOpacity="0.45" strokeWidth="0.6" />
      ))}
      {nodes.map(([cx, cy], i) => (
        <g key={`${cx}-${cy}`}>
          <line x1="50" y1="52" x2={cx} y2={cy} stroke="#123326" strokeWidth="0.4" />
          <motion.circle
            cx={cx}
            cy={cy}
            r="1.6"
            fill="#16F06D"
            animate={reduced ? {} : { opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 3, delay: i * 0.35, repeat: Infinity }}
          />
        </g>
      ))}
      <path
        d="M 41 40 L 34 47 L 41 54 M 59 40 L 66 47 L 59 54"
        fill="none"
        stroke="#00D95F"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="dn-section" aria-labelledby="about-heading">
      <div className="dn-shell dn-about">
        <div>
          <Reveal>
            <p className="dn-label">About DevNest</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="about-heading" className="dn-h2">
              Digital foundations for <span className="dn-green">growth.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="dn-body">
              DevNest is a small digital development studio. We build websites, online stores and
              custom digital tools for businesses that want something considered rather than
              something templated.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="dn-body" style={{ marginTop: "1.2rem" }}>
              We keep the process direct: understand what the business needs, design something
              clear, build it properly and stay available once it is live.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="dn-about__points">
              {[
                "Design and development handled together",
                "Straightforward communication throughout the build",
                "Support and maintenance after launch",
              ].map((point) => (
                <li key={point}>
                  <Check size={18} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <NestGraphic />
        </Reveal>
      </div>
    </section>
  );
}
