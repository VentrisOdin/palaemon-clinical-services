import { Link } from "react-router-dom";

function PricingLaunchOffer() {
  return (
    <section
      className="home-section"
      style={{
        paddingTop: "2rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="container">
        <div
          className="nhs-info-card"
          style={{
            background: "linear-gradient(135deg, #005eb8, #0072ce)",
            color: "#ffffff",
            padding: "3rem",
            borderRadius: "28px",
            textAlign: "center",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <p
            style={{
              fontSize: "0.85rem",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: "0.9",
              marginBottom: "1rem",
            }}
          >
            Introductory Launch Pricing
          </p>

          <h2
            style={{
              color: "#ffffff",
              marginBottom: "1rem",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: "1.1",
            }}
          >
            Home Visit Microsuction
            <br />
            £50 Both Ears
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto 2rem auto",
              color: "rgba(255,255,255,0.95)",
              lineHeight: "1.8",
              fontSize: "1.05rem",
            }}
          >
            To celebrate the launch of Palaemon Ear Care, home visit ear wax
            removal using microsuction is currently available for £50 for both
            ears.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "2.2rem",
              fontWeight: "600",
              fontSize: "0.98rem",
            }}
          >
            <span>✔ Home visit included</span>
            <span>✔ HCPC-registered paramedic</span>
            <span>✔ Evening & weekend appointments</span>
          </div>

          <Link
            to="/booking"
            className="primary-button"
            style={{
              background: "#ffffff",
              color: "#005eb8",
              border: "2px solid #ffffff",
              padding: "0.95rem 2rem",
              borderRadius: "999px",
              fontWeight: "700",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              transition: "all 0.25s ease",
            }}
          >
            Book Appointment
          </Link>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.92rem",
              opacity: "0.9",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Honest Google reviews are always greatly appreciated following
            appointments.
          </p>
        </div>

        <div
          className="nhs-info-card"
          style={{
            marginTop: "1.5rem",
            padding: "1.5rem",
            maxWidth: "900px",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "var(--color-text-secondary)",
              lineHeight: "1.7",
            }}
          >
            This is a limited introductory launch price. Standard pricing is
            normally £80 for both ears, £50 for one ear, and £40 for consultation
            only if microsuction is not required following assessment.
          </p>

          <div style={{ marginTop: "1rem" }}>
            <Link to="/faqs" className="home-link">
              Read FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingLaunchOffer;