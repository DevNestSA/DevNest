import { ArrowUpRight, Cloud, MonitorSmartphone, Network, ShoppingBag } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { services, type Service } from "@/data/services";
import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";

const icons = {
  monitor: MonitorSmartphone,
  cart: ShoppingBag,
  nodes: Network,
  cloud: Cloud,
} as const;

function Deco() {
  return (
    <svg viewBox="0 0 200 200" className="dn-card__deco" fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeOpacity="0.35" />
      <circle cx="100" cy="100" r="46" stroke="currentColor" strokeOpacity="0.25" />
      <path d="M30 120 C 70 60, 130 60, 170 120" stroke="currentColor" strokeOpacity="0.4" />
      <circle cx="30" cy="120" r="3" fill="currentColor" />
      <circle cx="170" cy="120" r="3" fill="currentColor" />
      <circle cx="100" cy="30" r="3" fill="currentColor" />
    </svg>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.icon];
  const reduced = useReducedMotion();

  return (
    <Reveal delay={index * 0.08}>
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="dn-card"
      >
        <motion.div
          whileHover={{ y: reduced ? 0 : -6 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Deco />

          <span className="dn-card__num">{service.number}</span>

          <span className="dn-card__icon">
            <Icon size={24} aria-hidden="true" />
          </span>

          <h3>{service.title}</h3>

          <p>{service.description}</p>

          <span className="dn-card__arrow">
            Learn more
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </motion.div>
      </Link>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="dn-section" aria-labelledby="services-heading">
      <div className="dn-shell">
        <Reveal>
          <p className="dn-label">What we build</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="services-heading" className="dn-h2" style={{ maxWidth: "18ch" }}>
            Solutions that work for your business
          </h2>
        </Reveal>

        <div className="dn-cards">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
