import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import BrandLogo from "../common/BrandLogo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container glass-card navbar-shell">
        <div className="navbar-top-row">
          <Link
            to="/"
            className="navbar-brand"
            onClick={closeMenu}
            aria-label="Go to homepage"
          >
            <BrandLogo size={38} />
          </Link>

          <button
            className={`navbar-menu-button ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`navbar-links-wrap ${menuOpen ? "is-open" : ""}`}
        >
          <nav className="navbar-nav">
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="/ear-care"
              className={`nav-link ${
                location.pathname === "/ear-care" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Ear Care
            </Link>

            <Link
              to="/clinical-services"
              className={`nav-link ${
                location.pathname === "/clinical-services" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Carehome Services
            </Link>

            <Link
              to="/pricing"
              className={`nav-link ${
                location.pathname === "/pricing" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Pricing
            </Link>

            <Link
              to="/faqs"
              className={`nav-link ${
                location.pathname === "/faqs" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              FAQs
            </Link>

            <Link
              to="/contact"
              className={`nav-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>

          <Link
            to="/booking"
            className="nav-cta-button navbar-cta"
            onClick={closeMenu}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;