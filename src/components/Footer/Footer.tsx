import { Logo } from "@/components/Logo";
import { navLinks } from "@/data/navigation";
import { services } from "@/data/services";

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
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4>Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service.number}>
                  <a href="#services">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="https://devnest.co.za/" target="_blank" rel="noreferrer">
                  devnest.co.za
                </a>
              </li>
              <li>
                <a href="#contact">Start a project</a>
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
