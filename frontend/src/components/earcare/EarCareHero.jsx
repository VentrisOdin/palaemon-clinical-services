import { Link } from "react-router-dom";
import BrandLogo from "../common/EarCareBrand";
import earImage from "../../assets/images/ear-exam.jpeg";

function EarCareHero() {
  return (
    <section className="section">
      <div className="container">
        <div className="glass-card earcare-hero-card">
          <div className="earcare-hero-grid">
            <div className="earcare-hero-left">
              <div
                className="glass-card"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  padding: "0.8rem 1rem",
                  marginBottom: "1rem",
                  borderRadius: "16px",
                  border: "1px solid rgba(76, 201, 240, 0.16)",
                  background: "rgba(255, 255, 255, 0.72)",
                }}
              >
                <BrandLogo size={34} />
                <div style={{ lineHeight: 1.2 }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1rem",
                      fontWeight: "700",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Palaemon Ear Care
                  </p>
                  <p
                    style={{
                      margin: 0,
                      marginTop: "0.2rem",
                      fontSize: "0.82rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    A trading name of Palaemon Clinical Services
                  </p>
                </div>
              </div>

              <p className="home-eyebrow">Home visit ear wax removal</p>

              <div className="earcare-hero-heading-wrap">
                <h1 className="earcare-hero-title">
                  Ear wax removal at home using microsuction
                </h1>

                <h2 className="earcare-hero-subtitle">
                  Professional, reassuring care in the comfort of your own home
                </h2>
              </div>

              <p className="earcare-hero-copy">
                A convenient home visit service for people experiencing blocked
                ears due to wax build-up. No travel, no waiting rooms — just a
                careful, professional approach designed to make ear wax removal
                as comfortable and straightforward as possible.
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
                  "Home visit appointments",
                  "Microsuction ear wax removal",
                  "Calm, professional approach",
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
                  alt="Professional providing ear wax removal during a home visit"
                  className="earcare-hero-image"
                />

                <div className="earcare-hero-image-overlay" />

                <div className="earcare-hero-image-caption image-caption-strong">
                  <p className="earcare-hero-image-caption-label">
                    Ear care at home
                  </p>

                  <p className="earcare-hero-image-caption-copy">
                    Convenient ear wax removal delivered in a calm and
                    reassuring home environment.
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