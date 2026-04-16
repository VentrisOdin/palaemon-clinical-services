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
      <div style={{ marginBottom: "1rem", fontWeight: "600" }}>
        Palaemon Clinical Services
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.75rem 1.25rem",
          fontSize: "0.9rem",
        }}
      >
        <Link to="/ear-care">Ear Care</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/insurance">Insurance</Link>
        <Link to="/complaints">Complaints</Link>
        <Link to="/cancellation">Cancellation Policy</Link>
      </div>

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