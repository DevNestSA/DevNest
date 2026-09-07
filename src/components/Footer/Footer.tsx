import { Logo } from "@/components/Logo";
import { navLinks } from "@/data/navigation";
import { services } from "@/data/services";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="dn-footer">
      <div className="dn-shell">
        <div className="dn-footer__grid">
          <div>
            <Logo />
            <p className="dn-footer__tag">
              We build. <span className="dn-green">You grow.</span>
            </p>
          </div>

          <nav aria-label="Footer">
            <h4>Navigation</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to="/"
                    hash={link.href.replace("#", "")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4>Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service.number}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a
                  href="https://wa.me/27765808310?text=Hi%20DevNest!%20I%27m%20interested%20in%20starting%20a%20project.%20I%27d%20like%20to%20find%20out%20more%20about%20your%20services."
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27765808310?text=Hi%20DevNest!%20I%27m%20interested%20in%20starting%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                >
                  Start a conversation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="dn-footer__bottom">
          <span>© {new Date().getFullYear()} DevNest. All rights reserved.</span>
          <span>South Africa</span>
        </div>
      </div>
    </footer>
  );
}