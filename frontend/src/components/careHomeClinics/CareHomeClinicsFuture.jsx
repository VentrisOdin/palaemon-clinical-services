import { Link } from "react-router-dom";

function CareHomeClinicsFuture() {
  return (
    <section className="home-section">
      <div className="container">
        <div
          className="nhs-info-card"
          style={{
            background: "linear-gradient(135deg, #005eb8, #0072ce)",
            color: "#ffffff",
            padding: "3rem",
            borderRadius: "28px",
          }}
        >
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: "800",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: "0.9",
              marginBottom: "1rem",
            }}
          >
            Future development
          </p>

          <h2
            style={{
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Part of a wider care home support vision
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.92)",
              fontSize: "1.05rem",
              lineHeight: "1.7",
              maxWidth: "760px",
              marginBottom: "1.25rem",
            }}
          >
            Palaemon Clinical Services is also developing wider proactive
            clinical support services for care settings as part of our
            long-term vision.
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.92)",
              fontSize: "1.05rem",
              lineHeight: "1.7",
              maxWidth: "760px",
              marginBottom: "2rem",
            }}
          >
            Microsuction clinic days provide a practical, immediate way to
            support residents while building trusted working relationships
            with care homes.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <a
              href="mailto:info@palaemonclinicalservices.co.uk?subject=Care%20Home%20Clinic%20Day%20Enquiry"
              className="qr-book-button"
              style={{
                width: "auto",
                minWidth: "280px",
                textAlign: "center",
                background: "#ffffff",
                color: "#005eb8",
                boxShadow: "0 14px 32px rgba(0, 0, 0, 0.12)",
              }}
            >
              Contact us about a care home clinic day
            </a>

            <Link
              to="/clinical-services"
              className="home-link"
              style={{
                color: "#ffffff",
                fontWeight: "700",
                textDecorationColor: "rgba(255,255,255,0.6)",
              }}
            >
              Learn more about our wider care home support vision
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareHomeClinicsFuture;