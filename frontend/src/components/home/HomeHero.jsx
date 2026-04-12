import { Link } from "react-router-dom";
import homePageImage from "../../assets/images/HomePagePicture.jpeg";

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
                Delivered by an HCPC registered paramedic
              </h2>
            </div>

            <p className="home-copy">
              Safe, effective treatment carried out in the comfort of your own
              home. No travel, no waiting rooms — just professional care
              delivered with a calm, clinical approach.
            </p>

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
                "HCPC registered paramedic",
                "Home visit appointments",
                "Microsuction treatment",
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
                alt="Clinician carrying out a home visit consultation"
                className="home-hero-image"
              />

              <div className="home-hero-image-overlay" />

              <div className="home-hero-image-caption">
                <p className="home-hero-image-caption-label">Home visit care</p>

                <p className="home-hero-image-caption-copy">
                  Professional ear care delivered with a calm, clinically led
                  approach in the comfort of your own home.
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