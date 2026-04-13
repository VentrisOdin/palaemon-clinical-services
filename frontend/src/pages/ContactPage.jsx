import { Link } from "react-router-dom";
import BrandLogo from "../components/common/BrandLogo";

function ContactPage() {
  return (
    <section className="home-section" style={{ paddingTop: "3rem" }}>
      <div className="container">
        {/* LARGE LOGO + COMPANY NAME */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          <BrandLogo size={220} />

          <div
            style={{
              marginTop: "1rem",
              fontSize: "1.4rem",
              fontWeight: "700",
              letterSpacing: "0.08rem",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}
          >
          </div>
        </div>

        {/* CONTACT CARD */}
        <div
          className="glass-card"
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "2rem",
            textAlign: "center",
            animation: "riseUp 0.8s ease",
          }}
        >
          <p className="home-eyebrow">Contact</p>

          <h1 className="home-section-title" style={{ marginBottom: "1rem" }}>
            Get in touch
          </h1>

          <p
            className="home-section-copy"
            style={{ marginBottom: "1.75rem" }}
          >
            If you have any questions or would like to discuss a booking, you
            can contact us directly using the details below.
          </p>

          {/* EMAIL */}
          <div style={{ marginBottom: "1.25rem" }}>
            <p className="home-card-title" style={{ marginBottom: "0.25rem" }}>
              Email
            </p>
            <a
              href="mailto:info@palaemonclinicalservices.co.uk"
              className="home-link"
              style={{ fontSize: "1.05rem" }}
            >
              info@palaemonclinicalservices.co.uk
            </a>
          </div>

          {/* PHONE */}
          <div style={{ marginBottom: "2rem" }}>
            <p className="home-card-title" style={{ marginBottom: "0.25rem" }}>
              Phone
            </p>
            <a
              href="tel:07738095862"
              className="home-link"
              style={{ fontSize: "1.05rem" }}
            >
              07738 095862
            </a>
          </div>

          {/* CTA */}
          <Link to="/booking" className="home-primary-button">
            Book a home visit
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;