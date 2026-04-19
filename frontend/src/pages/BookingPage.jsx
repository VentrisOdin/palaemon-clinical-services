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
            Choose your preferred appointment time, then pay the booking deposit.
            After payment, you will be redirected to complete the booking form.
            All booking requests are reviewed before confirmation.
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
              "£20 deposit to secure booking",
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
              This is a booking request, not a confirmed appointment. Please
              complete the steps below using the same name and email address
              throughout so we can match your request correctly. A £20 deposit
              is required to secure your booking request and will be deducted
              from the total cost of your appointment. If we are unable to
              proceed or the service is not suitable, your deposit will be fully
              refunded.
            </p>

            <div style={{ marginTop: "1rem" }}>
              <Link to="/faqs" className="home-link">
                Read FAQs before booking
              </Link>
            </div>
          </div>

          {/* Step 1: Calendar */}
          <div
            style={{
              width: "100%",
              padding: "1.5rem",
              borderRadius: "20px",
              background: "#ffffff",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-soft)",
              marginBottom: "1.5rem",
            }}
          >
            <h2
              style={{
                margin: "0 0 0.75rem 0",
                fontSize: "1.35rem",
                color: "var(--color-text-primary)",
              }}
            >
              Step 1: Choose your preferred appointment time
            </h2>

            <p
              style={{
                margin: "0 0 1rem 0",
                lineHeight: "1.7",
                color: "var(--color-text-secondary)",
              }}
            >
              Select a day and time that suits you for your home visit.
            </p>

            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3MkpeOOkXnQZVPx0c08NnSSNnOtXluyq0cSzLsseVoAPO1Rz6PBVTkio5cruGmq6DiOuPXCjpg?gv=true"
              style={{
                border: 0,
                width: "100%",
                height: "600px",
                borderRadius: "12px",
                background: "#fff",
              }}
              frameBorder="0"
              title="Palaemon Clinical Services Appointment Scheduling"
            />
          </div>

          {/* Step 2: Deposit */}
          <div
            style={{
              width: "100%",
              padding: "1.5rem",
              borderRadius: "20px",
              background: "#ffffff",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-soft)",
              marginBottom: "1.5rem",
            }}
          >
            <h2
              style={{
                margin: "0 0 0.75rem 0",
                fontSize: "1.35rem",
                color: "var(--color-text-primary)",
              }}
            >
              Step 2: Pay your £20 booking deposit
            </h2>

            <p
              style={{
                margin: "0 0 1rem 0",
                lineHeight: "1.7",
                color: "var(--color-text-secondary)",
              }}
            >
              Once you have chosen your appointment time, please pay your £20
              booking deposit. After payment, you will be redirected to the
              booking and consent form to complete your request.
            </p>

            <a
              href="https://buy.stripe.com/28EfZh9ro06Mg9V8ff1ZS00"
              className="home-primary-button"
            >
              Pay £20 Deposit
            </a>
          </div>

          {/* Step 3: What happens next */}
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
            <h2
              style={{
                margin: "0 0 0.75rem 0",
                fontSize: "1.35rem",
                color: "var(--color-text-primary)",
              }}
            >
              Step 3: Complete your booking form after payment
            </h2>

            <p
              style={{
                margin: "0 0 1rem 0",
                lineHeight: "1.7",
                color: "var(--color-text-secondary)",
              }}
            >
              After you pay your deposit, you will be redirected to the booking and consent
              form to complete your details. Please use the same name and email
              address throughout so we can match your booking correctly.
            </p>

            <p
              style={{
                margin: 0,
                lineHeight: "1.7",
                color: "var(--color-text-secondary)",
              }}
            >
              Once your appointment time, deposit, and booking form have all
              been received, we will review your request and contact you to
              confirm your appointment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingPage;