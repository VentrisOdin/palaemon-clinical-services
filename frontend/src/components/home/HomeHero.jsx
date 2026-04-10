import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section className="home-hero-section">
      <div className="container">
        <div className="home-grid" style={{ animation: "riseUp 0.8s ease" }}>
          
          {/* LEFT */}
          <div className="home-left-column">
            <p className="home-eyebrow">
              Home visit ear wax removal
            </p>

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

          {/* RIGHT PANEL */}
          <div className="glass-card home-panel">
            <div className="home-panel-glow" />

            <div className="home-panel-stack">
              <div className="home-panel-card">
                <p className="home-panel-label">Available now</p>
                <h3 className="home-panel-title">
                  Home-based ear wax removal
                </h3>
              </div>

              <div className="home-panel-card">
                <p className="home-panel-label">Delivered by</p>
                <h3 className="home-panel-title">
                  HCPC registered paramedic
                </h3>
              </div>

              <div className="home-panel-card">
                <p className="home-panel-label">Future services</p>
                <h3 className="home-panel-title">
                  Health checks and clinical assessments
                </h3>
              </div>
            </div>

            <div className="home-panel-footer">
              Palaemon Clinical Services is designed to provide safe,
              professional care in more convenient settings, starting with ear
              care and expanding into a wider range of services.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;