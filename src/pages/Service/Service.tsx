import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Cloud,
  MonitorSmartphone,
  Network,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { Link, useParams } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";

import { services, type Service } from "@/data/services";
import { Reveal } from "@/components/Reveal";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

const icons: Record<Service["icon"], LucideIcon> = {
  monitor: MonitorSmartphone,
  cart: ShoppingBag,
  nodes: Network,
  cloud: Cloud,
};

const visualLabels: Record<Service["icon"], string[]> = {
  monitor: ["design", "develop", "responsive", "launch"],
  cart: ["products", "checkout", "orders", "sales"],
  nodes: ["connect", "integrate", "automate", "scale"],
  cloud: ["hosting", "domains", "security", "support"],
};

function WorkshopPanel({
  service,
  reduced,
}: {
  service: Service;
  reduced: boolean;
}) {
  const Icon = icons[service.icon];
  const labels = visualLabels[service.icon];

  return (
    <motion.div
      className="dn-service-workshop"
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="dn-service-workshop__glow" />

      {/* TOP BAR */}
      <div className="dn-service-workshop__top">
        <div className="dn-service-workshop__dots">
          <span />
          <span />
          <span />
        </div>

        <span className="dn-service-workshop__url">
          devnest.co.za
        </span>

        <span className="dn-service-workshop__status">
          <span />
          LIVE
        </span>
      </div>

      {/* MAIN VISUAL */}
      <div className="dn-service-workshop__body">

        {/* CODE PANEL */}
        <div className="dn-service-workshop__code">
          <div className="dn-code-line">
            <span>01</span>
            <span>
              <b>const</b> project = {"{"}
            </span>
          </div>

          <div className="dn-code-line">
            <span>02</span>
            <span>
              &nbsp;&nbsp;service: <em>"{service.title}"</em>,
            </span>
          </div>

          <div className="dn-code-line">
            <span>03</span>
            <span>
              &nbsp;&nbsp;status: <em>"building"</em>,
            </span>
          </div>

          <div className="dn-code-line">
            <span>04</span>
            <span>
              &nbsp;&nbsp;goal: <em>"growth"</em>,
            </span>
          </div>

          <div className="dn-code-line">
            <span>05</span>
            <span>{"}"}</span>
          </div>
        </div>

        {/* CENTRAL VISUAL */}
        <div className="dn-service-workshop__visual">
          <motion.div
            className="dn-service-workshop__icon"
            animate={
              reduced
                ? {}
                : {
                    y: [0, -6, 0],
                    rotate: [0, 1, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={48} strokeWidth={1.2} />
          </motion.div>

          <div className="dn-service-workshop__rings">
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* CONNECTED NODES */}
        <div className="dn-service-workshop__nodes">
          {labels.map((label, index) => (
            <motion.div
              key={label}
              className="dn-workshop-node"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3 + index * 0.12,
                duration: 0.4,
              }}
            >
              <span className="dn-workshop-node__dot" />
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="dn-service-workshop__bottom">
        <span>BUILD</span>

        <div className="dn-service-workshop__progress">
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "78%" }}
            transition={{
              delay: 0.5,
              duration: 1.2,
            }}
          />
        </div>

        <span>GROW</span>
      </div>
    </motion.div>
  );
}

export function ServicePage() {
  const { slug } = useParams({
    from: "/services/$slug",
  });

  const reduced = useReducedMotion() ?? false;

  const service = services.find(
    (item) => item.slug === slug,
  );

  if (!service) {
    return (
      <>
        <Navbar />

        <main className="dn-service-not-found">
          <div className="dn-shell">
            <p className="dn-label">
              404 / SERVICE
            </p>

            <h1 className="dn-h1">
              Service not found.
            </h1>

            <Link
              to="/"
              className="dn-button"
            >
              <ArrowLeft size={16} />
              Back home
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="dn-service-page">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="dn-service-hero">
          <div className="dn-service-grid-bg" />

          <div className="dn-shell">
            <div className="dn-service-hero__grid">

              <div className="dn-service-hero__content">

                <Reveal>
                  <div className="dn-service-meta">
                    <span>{service.number}</span>
                    <span>/</span>
                    <span>{service.title}</span>
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <h1 className="dn-service-title">
                    {service.headline}
                  </h1>
                </Reveal>

                <Reveal delay={0.16}>
                  <p className="dn-service-intro">
                    {service.intro}
                  </p>
                </Reveal>

                <Reveal delay={0.24}>
                  <div className="dn-service-actions">

                    <a
                        href="https://wa.me/27765808310?text=Hi%20DevNest!%20I%27m%20interested%20in%20starting%20a%20project.%20I%27d%20like%20to%20find%20out%20more%20about%20your%20services."
                        target="_blank"
                        rel="noreferrer"
                        className="dn-button"
                        >
                        Start a Conversation
                        <ArrowUpRight size={17} />
                        </a>

                    <Link
                      to="/"
                      hash="services"
                      className="dn-button dn-button--ghost"
                    >
                      <ArrowLeft size={16} />
                      All Services
                    </Link>

                  </div>
                </Reveal>

              </div>

              <Reveal delay={0.18}>
                <WorkshopPanel
                  service={service}
                  reduced={reduced}
                />
              </Reveal>

            </div>
          </div>

          <div className="dn-service-scroll">
            <span>SCROLL TO EXPLORE</span>
            <span className="dn-service-scroll__line" />
          </div>
        </section>

        {/* =====================================================
            FEATURES
        ====================================================== */}

        <section className="dn-section dn-service-features">
          <div className="dn-shell">

            <div className="dn-service-section-heading">

              <Reveal>
                <p className="dn-label">
                  What we deliver
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="dn-h2">
                  Everything you need to
                  <span> move forward.</span>
                </h2>
              </Reveal>

            </div>

            <div className="dn-feature-grid">

              {service.features.map(
                (feature, index) => (
                  <Reveal
                    key={feature}
                    delay={index * 0.06}
                  >
                    <motion.div
                      className="dn-feature-card"
                      whileHover={
                        reduced
                          ? {}
                          : {
                              y: -5,
                            }
                      }
                    >
                      <div className="dn-feature-card__top">
                        <span>
                          {String(index + 1).padStart(
                            2,
                            "0",
                          )}
                        </span>

                        <Check size={17} />
                      </div>

                      <h3>{feature}</h3>

                      <div className="dn-feature-card__line" />
                    </motion.div>
                  </Reveal>
                ),
              )}

            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <section className="dn-service-process-section">

          <div className="dn-service-grid-bg dn-service-grid-bg--dark" />

          <div className="dn-shell">

            <div className="dn-service-section-heading">

              <Reveal>
                <p className="dn-label">
                  How we build
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="dn-h2">
                  From idea to
                  <span> something that works.</span>
                </h2>
              </Reveal>

            </div>

            <div className="dn-service-timeline">

              {service.process.map(
                (step, index) => (
                  <Reveal
                    key={step}
                    delay={index * 0.08}
                  >
                    <div className="dn-timeline-item">

                      <div className="dn-timeline-number">
                        {String(index + 1).padStart(
                          2,
                          "0",
                        )}
                      </div>

                      <div className="dn-timeline-marker">
                        <span />
                      </div>

                      <div className="dn-timeline-content">
                        <span>
                          STEP{" "}
                          {String(index + 1).padStart(
                            2,
                            "0",
                          )}
                        </span>

                        <h3>{step}</h3>
                      </div>

                    </div>
                  </Reveal>
                ),
              )}

            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section
          id="contact"
          className="dn-service-final-cta"
        >
          <div className="dn-shell">

            <Reveal>
              <div className="dn-service-cta">

                <div className="dn-service-cta__number">
                  {service.number}
                </div>

                <div className="dn-service-cta__content">

                  <p className="dn-label">
                    Ready to build?
                  </p>

                  <h2>
                    Let's create something
                    <span> that works.</span>
                  </h2>

                  <p>
                    Tell us what you're building and
                    let's figure out the next step.
                  </p>

                  <a
                    href="https://wa.me/27765808310?text=Hi%20DevNest!%20I%27m%20interested%20in%20starting%20a%20project.%20I%27d%20like%20to%20find%20out%20more%20about%20your%20services."
                    target="_blank"
                    rel="noreferrer"
                    className="dn-button"
                    >
                    Start a Conversation
                    <ArrowUpRight size={17} />
                    </a>

                </div>

              </div>
            </Reveal>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}