import { Link } from "react-router-dom";
import consultationImage from "../assets/images/Consultation.jpeg";
import EarCareBrand from "../components/common/EarCareBrand";

function BookingPage() {
  return (
    <section className="home-hero-section">
      <div className="container">
        <div
          className="glass-card"
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            padding: "3rem 2.25rem",
            animation: "riseUp 0.8s ease",
          }}
        >
          {/* Brand Bar */}
          <div style={{ marginBottom: "1rem" }}>
            <EarCareBrand />
          </div>

          <p className="home-eyebrow">Booking</p>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
              lineHeight: "1.08",
              fontWeight: "700",
              margin: "0 0 1rem 0",
              maxWidth: "760px",
            }}
          >
            Book a home visit
          </h1>

          <p
            className="home-copy"
            style={{
              maxWidth: "760px",
              marginBottom: "1.25rem",
            }}
          >
            Request a home visit for ear wax removal using microsuction. All
            booking requests are reviewed before confirmation to check
            availability and whether the service is suitable for your needs.
          </p>

          <div className="glass-card booking-image-card">
            <img
              src={consultationImage}
              alt="Home visit ear wax removal appointment"
              className="booking-image"
            />
          </div>

          <div className="home-pill-row" style={{ marginBottom: "2rem" }}>
            {[
              "Home visits",
              "Microsuction ear wax removal",
              "Transparent pricing",
              "Simple booking process",
            ].map((item) => (
              <span key={item} className="home-pill">
                {item}
              </span>
            ))}
          </div>

          <div
            className="home-card-grid"
            style={{
              marginBottom: "1.5rem",
            }}
          >
            <div
              className="glass-card home-info-card nhs-tile"
              style={{
                padding: "1.6rem",
              }}
            >
              <h2
                style={{
                  fontSize: "1.1rem",
                  margin: "0 0 0.75rem 0",
                }}
              >
                Ear Wax Removal (Home Visit)
              </h2>

              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#ffffff",
                  marginBottom: "0.85rem",
                }}
              >
                £80
              </div>

              <p className="home-card-copy">
                Includes home visit ear wax removal using microsuction. Covers
                both ears if required.
              </p>
            </div>

            <div
              className="glass-card home-info-card nhs-tile"
              style={{
                padding: "1.6rem",
              }}
            >
              <h2
                style={{
                  fontSize: "1.1rem",
                  margin: "0 0 0.75rem 0",
                }}
              >
                Visit Without Wax Removal
              </h2>

              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#ffffff",
                  marginBottom: "0.85rem",
                }}
              >
                £50
              </div>

              <p className="home-card-copy">
                If no wax is present, or if we are unable to proceed on the day,
                the visit charge is £50.
              </p>
            </div>
          </div>

          <div
            className="nhs-info-card"
            style={{
              padding: "1.5rem",
              marginBottom: "2rem",
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <p
              style={{
                margin: "0 0 0.75rem 0",
                color: "var(--color-text-primary)",
                fontWeight: "600",
              }}
            >
              Before you book
            </p>

            <p
              style={{
                margin: 0,
                lineHeight: "1.7",
                color: "var(--color-text-secondary)",
              }}
            >
              This is a booking request, not a confirmed appointment. Your
              details will be reviewed and we will contact you to confirm
              availability and whether this service is suitable for you. If
              we’re unable to proceed on the day, we will explain why and advise
              you on the next steps.
            </p>

            <div style={{ marginTop: "1rem" }}>
              <Link to="/faqs" className="home-link">
                Read FAQs before booking
              </Link>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              padding: "1.5rem",
              borderRadius: "20px",
              background: "#ffffff",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScSRbsEhxitkF7RJSdCN9Z701wBMJ7cDnhDTobllrWAWgcNGw/viewform?embedded=true"
              width="100%"
              height="1600"
              style={{
                border: "none",
                borderRadius: "12px",
                background: "#fff",
              }}
              title="Palaemon Ear Care Booking Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingPage;