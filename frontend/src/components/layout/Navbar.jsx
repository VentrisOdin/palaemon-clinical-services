import { Link } from "react-router-dom";
import BrandLogo from "../common/BrandLogo";

function Navbar() {
  return (
    <header style={{ padding: "1.25rem 0" }}>
      <div
        className="container glass-card"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <BrandLogo size={38} />
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <nav
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
              color: "var(--color-text-secondary)",
            }}
          >
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/ear-care" className="nav-link">
              Ear Care
            </Link>

            <Link to="/clinical-services" className="nav-link">
              Future Services
            </Link>
            
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>

            <Link to="/faqs" className="nav-link">
              FAQs
            </Link>

            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          <Link to="/booking" className="nav-cta-button">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;