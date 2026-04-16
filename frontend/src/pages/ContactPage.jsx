import { Link } from "react-router-dom";
import EarCareBrand from "../components/common/EarCareBrand";

function ContactPage() {
  return (
    <section className="home-section" style={{ paddingTop: "3rem" }}>
      <div className="container">
        {/* BRAND */}
        <div
          style={{
            width: "100%",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "fit-content",
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            <EarCareBrand size={180} stacked />
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
            width: "100%",
          }}
        >
          <p className="home-eyebrow">Contact</p>

          <h1 className="home-section-title" style={{ marginBottom: "1rem" }}>
            Get in touch
          </h1>

          <p
            className="home-section-copy"
            style={{ marginBottom: "1.75rem", maxWidth: "100%" }}
          >
            If you have any questions or would like to discuss a booking, you
            can contact us directly using the details below.
          </p>

          {/* EMAIL */}
          <div style={{ marginBottom: "1.25rem", maxWidth: "100%" }}>
            <p className="home-card-title" style={{ marginBottom: "0.25rem" }}>
              Email
            </p>
            <a
              href="mailto:info@palaemonclinicalservices.co.uk"
              className="home-link"
              style={{
                display: "inline-block",
                maxWidth: "100%",
                whiteSpace: "nowrap", // 👈 never break
                fontSize: "clamp(0.8rem, 3.5vw, 1.05rem)", // 👈 responsive scaling
              }}
            >
              info@palaemonclinicalservices.co.uk
            </a>
          </div>

          {/* PHONE */}
          <div style={{ marginBottom: "2rem", maxWidth: "100%" }}>
            <p className="home-card-title" style={{ marginBottom: "0.25rem" }}>
              Phone
            </p>
            <a
              href="tel:07738095862"
              className="home-link"
              style={{
                fontSize: "1.05rem",
                display: "inline-block",
                maxWidth: "100%",
              }}
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