import { Link } from "react-router-dom";
import homePageImage from "../../assets/images/HomePagePicture.jpeg";
import EarCareBrand from "../common/EarCareBrand";

function HomeHero() {
  return (
    <section
      className="home-hero-section"
      style={{
        paddingTop: "3rem",
      }}
    >
      <div className="container">
        <div
          className="home-grid"
          style={{
            animation: "riseUp 0.8s ease",
          }}
        >
          <div className="home-left-column">
            <p className="home-eyebrow">Home visit ear wax removal</p>

            <div className="home-hero-heading-wrap">
              <h1 className="home-hero-title">
                Ear wax removal at home using microsuction
              </h1>

              <h2 className="home-hero-subtitle">
                Professional, reassuring care in the comfort of your own home
              </h2>
            </div>

            {/* ✅ Ear Care Branding */}
            <div style={{ marginBottom: "1rem" }}>
              <EarCareBrand />
            </div>

            <p className="home-copy">
              A convenient home visit service for people experiencing blocked
              ears due to wax build-up. No travel, no waiting rooms — just a
              careful, professional approach designed to make ear wax removal as
              comfortable and straightforward as possible.
            </p>

            {/* ✅ Service area box */}
            <div
              style={{
                background: "rgba(0, 94, 184, 0.08)",
                border: "1px solid rgba(0, 94, 184, 0.18)",
                borderRadius: "16px",
                padding: "1rem 1.1rem",
                marginBottom: "1.5rem",
                maxWidth: "720px",
              }}
            >
              <p
                style={{
                  margin: "0 0 0.5rem 0",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "var(--color-text-primary)",
                }}
              >
                Providing home visit ear care across Hampshire, with
                availability in selected areas of Surrey.
              </p>

              <Link to="/service-area" className="home-link">
                View areas we cover
              </Link>
            </div>

            <div className="home-button-row">
              <Link to="/booking" className="home-primary-button">
                Book Appointment
              </Link>

              <Link to="/ear-care" className="home-secondary-button">
                Learn More
              </Link>
            </div>

            <div className="home-pill-row">
              {[
                "Home visit appointments",
                "Microsuction ear wax removal",
                "Calm, professional approach",
                "Clear pricing",
              ].map((item) => (
                <span key={item} className="home-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="home-hero-image-wrap">
            <div className="home-hero-image-glow" />

            <div className="glass-card home-hero-image-card">
              <img
                src={homePageImage}
                alt="Professional providing ear wax removal during a home visit"
                className="home-hero-image"
              />

              <div className="home-hero-image-overlay" />

              <div className="home-hero-image-caption image-caption-strong">
                <p className="home-hero-image-caption-label">Home visit ear care</p>

                <p className="home-hero-image-caption-copy">
                  Convenient ear wax removal delivered in a calm and reassuring
                  home environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;