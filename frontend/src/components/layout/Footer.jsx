import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "3rem",
        padding: "2rem 1rem",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        background: "#f8fafc",
        textAlign: "center",
      }}
    >
      {/* Brand */}
      <div style={{ marginBottom: "0.5rem", fontWeight: "700" }}>
        Palaemon Clinical Services
      </div>

      {/* Main Links */}
      <div
        className="footer-links-primary"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.75rem 1.25rem",
          fontSize: "0.9rem",
        }}
      >
        <Link to="/ear-care">Ear Care</Link>
        <Link to="/microsuction">Microsuction</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/future-services">Future Services</Link>
      </div>

      {/* Secondary / Legal Links */}
      <div
        className="footer-links-secondary"
        style={{
          marginTop: "1rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.75rem 1.25rem",
          fontSize: "0.85rem",
          color: "rgba(0,0,0,0.7)",
        }}
      >
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
        <Link to="/cancellation">Cancellation Policy</Link>
        <Link to="/complaints">Complaints</Link>
        <Link to="/insurance">Insurance</Link>
        <Link to="/service-area">Service Area</Link>
        <Link to="/clinician">Clinician Portal</Link>
      </div>

      {/* Copyright */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "0.8rem",
          color: "rgba(0,0,0,0.5)",
        }}
      >
        © {new Date().getFullYear()} Palaemon Clinical Services. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;