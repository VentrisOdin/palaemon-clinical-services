import { Link } from "react-router-dom";
import pricingImage from "../../assets/images/PricingImage.jpeg";

function PricingHero() {
  return (
    <section className="home-hero-section">
      <div className="container">
        <div className="glass-card pricing-hero-card">
          <div className="pricing-hero-grid">
            <div>
              <p className="home-eyebrow">Pricing</p>

              <h1 className="pricing-hero-title">
                Clear, transparent pricing
              </h1>

              <p className="home-copy pricing-hero-copy">
                Straightforward pricing for home visit ear care, with no hidden
                extras. The focus is on safe, professional treatment delivered
                in the comfort of your own home.
              </p>

              <div className="home-button-row">
                <Link to="/booking" className="home-primary-button">
                  Book Appointment
                </Link>

                <Link to="/ear-care" className="home-secondary-button">
                  Back to Ear Care
                </Link>
              </div>
            </div>

            <div className="pricing-hero-image-wrap">
              <div className="pricing-hero-image-glow" />

              <div className="glass-card pricing-hero-image-card">
                <img
                  src={pricingImage}
                  alt="Clinician discussing care with a patient"
                  className="pricing-hero-image"
                />

                <div className="pricing-hero-image-overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingHero;