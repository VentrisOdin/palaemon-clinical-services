import { Link } from "react-router-dom";
import earImage from "../../assets/images/ear-exam.jpeg";

function EarCareHero() {
  return (
    <section className="section">
      <div className="container">
        <div className="glass-card earcare-hero-card">
          <div className="earcare-hero-grid">
            <div className="earcare-hero-left">
              <p className="home-eyebrow">Home visit ear wax removal</p>

              <div className="earcare-hero-heading-wrap">
                <h1 className="earcare-hero-title">
                  Ear wax removal at home using microsuction
                </h1>

                <h2 className="earcare-hero-subtitle">
                  Delivered by an HCPC registered paramedic
                </h2>
              </div>

              <p className="earcare-hero-copy">
                Safe, effective ear wax removal carried out in the comfort of
                your own home. No travel, no waiting rooms — just professional
                care delivered with a calm, clinical approach.
              </p>

              <div className="earcare-hero-button-row">
                <Link to="/booking" className="home-primary-button">
                  Book Appointment
                </Link>

                <Link to="/microsuction" className="home-secondary-button">
                  What is microsuction?
                </Link>
              </div>

              <div className="earcare-hero-pill-row">
                {[
                  "HCPC registered paramedic",
                  "Home visit appointments",
                  "Microsuction treatment",
                  "Transparent pricing",
                ].map((item) => (
                  <div key={item} className="earcare-hero-pill">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="earcare-hero-image-wrap">
              <div className="earcare-hero-image-glow" />

              <div className="glass-card earcare-hero-image-card">
                <img
                  src={earImage}
                  alt="Ear examination using otoscope"
                  className="earcare-hero-image"
                />

                <div className="earcare-hero-image-overlay" />

                <div className="earcare-hero-image-caption">
                  <p className="earcare-hero-image-caption-label">
                    Ear Care at home
                  </p>

                  <p className="earcare-hero-image-caption-copy">
                    Professional, home-based ear care delivered with a calm and
                    clinically led approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EarCareHero;