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

        <nav
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
            color: "var(--color-text-secondary)",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/ear-care">Ear Care</Link>
          <a href="#">Pricing</a>
          <a href="#">FAQs</a>

          <a
            href="#"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "var(--radius-sm)",
              background: "var(--color-accent)",
              color: "#000",
              fontWeight: "500",
              transition: "var(--transition-fast)",
            }}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;