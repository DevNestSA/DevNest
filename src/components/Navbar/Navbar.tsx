import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="dn-nav" data-scrolled={scrolled}>
      <div className="dn-shell dn-nav__inner">
        <a href="#home" className="dn-nav__logo" aria-label="DevNest home">
          <Logo />
        </a>

        <nav className="dn-nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="dn-nav__link"
              aria-current={active === link.href ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="dn-btn dn-btn--primary dn-nav__cta">
          Start a Project <ArrowRight size={16} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="dn-burger"
          aria-expanded={open}
          aria-controls="dn-mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="dn-mobile-menu"
            className="dn-mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="dn-shell">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={() => setOpen(false)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="dn-btn dn-btn--primary"
                onClick={() => setOpen(false)}
              >
                Start a Project <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
