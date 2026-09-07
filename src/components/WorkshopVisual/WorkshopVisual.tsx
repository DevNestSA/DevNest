import { motion, useReducedMotion } from "framer-motion";
import type { MotionStyle } from "framer-motion";

const float = (distance: number, duration: number, delay = 0) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
});

function PanelBar({ title }: { title: string }) {
  return (
    <div className="dn-panel__bar">
      <span className="dn-dot" />
      <span className="dn-dot" />
      <span className="dn-dot dn-dot--green" />
      <span className="dn-panel__title">{title}</span>
    </div>
  );
}

export function WorkshopVisual() {
  const reduced = useReducedMotion();
  const anim = (d: number, dur: number, delay = 0) => (reduced ? {} : float(d, dur, delay));

  const panel = (style: MotionStyle) => style;

  return (
    <div className="dn-workshop" aria-hidden="true">
      <div className="dn-glow" style={{ inset: "18% 12% 22% 14%" }} />

      {/* connection lines */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        {[
          "M 22 26 C 34 34, 40 40, 48 46",
          "M 82 22 C 70 32, 64 38, 56 44",
          "M 26 78 C 36 68, 42 60, 50 56",
          "M 80 74 C 70 66, 62 60, 56 56",
        ].map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="#00D95F"
            strokeWidth={0.35}
            strokeOpacity={0.5}
            strokeDasharray="3 3"
            initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
            animate={reduced ? {} : { pathLength: 1, strokeDashoffset: [0, -12] }}
            transition={{
              pathLength: { duration: 1.4, delay: 0.4 + i * 0.15, ease: "easeOut" },
              strokeDashoffset: { duration: 3, repeat: Infinity, ease: "linear" },
            }}
          />
        ))}
        {[
          [22, 26],
          [82, 22],
          [26, 78],
          [80, 74],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={0.9}
            fill="#16F06D"
            animate={reduced ? {} : { opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 2.6, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {/* central browser */}
      <motion.div
        className="dn-panel"
        style={panel({ left: "14%", top: "30%", width: "72%" })}
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 26, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <PanelBar title="devnest.co.za" />
        <div style={{ padding: "16px", display: "grid", gap: "10px" }}>
          <div className="dn-skeleton" style={{ width: "46%", background: "#00D95F" }} />
          <div className="dn-skeleton" style={{ width: "72%" }} />
          <div className="dn-skeleton" style={{ width: "60%" }} />
          <div style={{ display: "flex", gap: "10px", marginTop: "6px" }}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                style={{
                  flex: 1,
                  height: 46,
                  borderRadius: 8,
                  border: "1px solid #123326",
                  background: "rgba(6,61,37,0.35)",
                }}
                animate={reduced ? {} : { opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* code panel */}
      <motion.div
        className="dn-panel"
        style={panel({ left: "0%", top: "6%", width: "46%" })}
        {...anim(10, 7)}
      >
        <PanelBar title="build.tsx" />
        <pre className="dn-code">
          {`const dev = () => {\n  `}
          <b>build</b>
          {`();\n  `}
          <b>grow</b>
          {`();\n}`}
        </pre>
      </motion.div>

      {/* analytics panel */}
      <motion.div
        className="dn-panel"
        style={panel({ right: "0%", top: "0%", width: "40%" })}
        {...anim(14, 8.5, 0.6)}
      >
        <PanelBar title="growth" />
        <div className="dn-bars">
          {[38, 55, 30, 72, 90].map((h, i) => (
            <motion.span
              key={h}
              style={{ height: `${h}%` }}
              initial={reduced ? {} : { scaleY: 0.35 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.9, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>
      </motion.div>

      {/* component panel */}
      <motion.div
        className="dn-panel"
        style={panel({ left: "4%", bottom: "2%", width: "36%" })}
        {...anim(12, 9, 1.2)}
      >
        <PanelBar title="ui" />
        <div style={{ padding: 12, display: "grid", gap: 8 }}>
          <div className="dn-skeleton" style={{ width: "80%" }} />
          <div
            style={{
              height: 22,
              width: "58%",
              borderRadius: 999,
              background: "#00D95F",
            }}
          />
        </div>
      </motion.div>

      {/* deploy pill */}
      <motion.div
        className="dn-panel"
        style={panel({
          right: "2%",
          bottom: "8%",
          width: "42%",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 14px",
        })}
        {...anim(9, 7.5, 0.3)}
      >
        <motion.span
          style={{
            width: 8,
            height: 8,
            borderRadius: 999,
            background: "#16F06D",
            flexShrink: 0,
          }}
          animate={reduced ? {} : { opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
          }}
        >
          deploy — live
        </span>
      </motion.div>
    </div>
  );
}
