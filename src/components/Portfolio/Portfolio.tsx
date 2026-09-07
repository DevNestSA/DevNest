import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

function Preview({ variant }: { variant: Project["preview"] }) {
  const block = (w: string, h = 8, green = false) => (
    <div
      className="dn-skeleton"
      style={{ width: w, height: h, background: green ? "#00D95F" : undefined }}
    />
  );

  return (
    <div style={{ position: "relative", zIndex: 1, display: "grid", gap: 10 }}>
      <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
        <span className="dn-dot" />
        <span className="dn-dot" />
        <span className="dn-dot dn-dot--green" />
      </div>
      {variant === "layout" && (
        <>
          {block("55%", 14, true)}
          {block("80%")}
          {block("68%")}
          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 54,
                  borderRadius: 8,
                  border: "1px solid #123326",
                  background: "rgba(7,18,14,0.9)",
                }}
              />
            ))}
          </div>
        </>
      )}
      {variant === "store" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              style={{
                height: 52,
                borderRadius: 8,
                border: `1px solid ${i === 1 ? "#00D95F" : "#123326"}`,
                background: "rgba(7,18,14,0.9)",
              }}
            />
          ))}
        </div>
      )}
      {variant === "dashboard" && (
        <>
          {block("40%", 12, true)}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 78 }}>
            {[40, 68, 32, 84, 56, 92].map((h) => (
              <div
                key={h}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: "4px 4px 0 0",
                  background: "linear-gradient(to top, rgba(0,217,95,0.15), #00D95F)",
                }}
              />
            ))}
          </div>
        </>
      )}
      {variant === "portal" && (
        <div style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 12 }}>
          <div
            style={{
              height: 96,
              borderRadius: 8,
              border: "1px solid #123326",
              background: "rgba(7,18,14,0.9)",
            }}
          />
          <div style={{ display: "grid", gap: 10, alignContent: "start" }}>
            {block("70%", 10, true)}
            {block("90%")}
            {block("60%")}
            {block("78%")}
          </div>
        </div>
      )}
    </div>
  );
}

export function Portfolio() {
  const reduced = useReducedMotion();

  return (
    <section id="work" className="dn-section" aria-labelledby="work-heading">
      <div className="dn-shell">
        <Reveal>
          <p className="dn-label">Selected work</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="work-heading" className="dn-h2">
            Built with <span className="dn-green">purpose.</span>
          </h2>
        </Reveal>

        <div className="dn-projects">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <motion.article
                className="dn-project"
                whileHover={{ y: reduced ? 0 : -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="dn-project__preview">
                  <Preview variant={project.preview} />
                </div>
                <div className="dn-project__body">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="dn-tags">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <button type="button" className="dn-project__link">
                    View project <ArrowUpRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <p className="dn-placeholder-note">
          Placeholder projects — replace the entries in src/data/projects.ts with real DevNest
          work.
        </p>
      </div>
    </section>
  );
}
