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
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>

            <Link
              to="/ear-care"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Ear Care
            </Link>

            <Link
              to="/clinical-services"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Clinical Services
            </Link>

            <Link
              to="/pricing"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Pricing
            </Link>

            <Link
              to="/faqs"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              FAQs
            </Link>
          </nav>

          <Link
            to="/booking"
            style={{
              padding: "0.7rem 1.25rem",
              borderRadius: "var(--radius-md)",
              background: "var(--color-accent)",
              color: "#000",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
              boxShadow: "0 6px 18px rgba(76, 201, 240, 0.28)",
            }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;