import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BrandLogo from "../components/common/EarCareBrand";
import "./BookingConfirmed.css";

function BookingConfirmed() {
  return (
    <>
      <Helmet>
        <title>Booking received | Palaemon Ear Care</title>

        <meta
          name="description"
          content="Thank you for your booking request with Palaemon Ear Care."
        />

        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="booking-confirmed-page">
        <div className="booking-background-glow booking-background-glow-one" />
        <div className="booking-background-glow booking-background-glow-two" />

        <div className="container booking-confirmed-container">
          <div className="booking-confirmed-card">
            <div className="booking-logo-wrap">
              <BrandLogo className="booking-logo" />
            </div>

            <div className="booking-content">
              <p className="booking-eyebrow">
                Booking request received
              </p>

              <h1 className="booking-title">
                Thank you — we have received your booking request.
              </h1>

              <p className="booking-copy">
                Your deposit has been received and your booking request
                is now being reviewed.
              </p>

              <p className="booking-copy">
                We will contact you within 48 hours to confirm
                suitability, appointment details, and any next steps.
              </p>

              <p className="booking-trust">
                Please check your inbox, including junk or spam folders,
                for confirmation emails.
              </p>

              <div className="booking-reassurance-row">
                <span className="booking-reassurance-pill">
                  Deposit received
                </span>

                <span className="booking-reassurance-pill">
                  Confirmation email sent
                </span>
              </div>

              <div className="booking-close-note">
                <p>You may now safely close this page.</p>
              </div>

              <div className="booking-actions">
                <Link
                  to="/"
                  className="booking-home-button"
                >
                  Return to homepage
                </Link>

                <Link
                  to="/booking"
                  className="booking-site-link"
                >
                  Back to booking page
                </Link>

                <a
                  href="mailto:info@palaemonclinicalservices.co.uk"
                  className="booking-email-link"
                >
                  Need help? Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingConfirmed;