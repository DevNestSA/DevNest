import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";

import { navLinks } from "@/data/navigation";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const reduced = useReducedMotion();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Only observe homepage sections.
    if (!isHomePage) {
      return;
    }

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio,
          )[0];

        if (visible) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    sections.forEach((section) =>
      observer.observe(section),
    );

    return () => observer.disconnect();
  }, [isHomePage]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className="dn-nav"
      data-scrolled={scrolled}
    >
      <div className="dn-shell dn-nav__inner">

        {/* LOGO */}
        <Link
          to="/"
          className="dn-nav__logo"
          aria-label="DevNest home"
          onClick={closeMenu}
        >
          <Logo />
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className="dn-nav__links"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to="/"
              hash={link.href.replace("#", "")}
              className="dn-nav__link"
              aria-current={
                isHomePage &&
                active === link.href
                  ? "true"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/"
          hash="contact"
          className="dn-btn dn-btn--primary dn-nav__cta"
        >
          Start a Project
          <ArrowRight
            size={16}
            aria-hidden="true"
          />
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className="dn-burger"
          aria-expanded={open}
          aria-controls="dn-mobile-menu"
          aria-label={
            open
              ? "Close menu"
              : "Open menu"
          }
          onClick={() =>
            setOpen((value) => !value)
          }
        >
          {open ? (
            <X
              size={20}
              aria-hidden="true"
            />
          ) : (
            <Menu
              size={20}
              aria-hidden="true"
            />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="dn-mobile-menu"
            className="dn-mobile-menu"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: reduced ? 0 : 0.35,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <div className="dn-shell">

              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to="/"
                      hash={link.href.replace("#", "")}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                to="/"
                hash="contact"
                className="dn-btn dn-btn--primary"
                onClick={closeMenu}
              >
                Start a Project
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                />
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}