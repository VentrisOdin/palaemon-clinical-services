import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section className="home-hero-section">
      <div className="container">
        <div className="home-grid" style={{ animation: "riseUp 0.8s ease" }}>
          <div className="home-left-column">
            <p className="home-eyebrow">Paramedic-led ear care</p>

            <div className="home-hero-heading-wrap">
              <h1 className="home-hero-title">Professional ear care at home</h1>
              <h2 className="home-hero-subtitle">
                Delivered by an HCPC registered paramedic
              </h2>
            </div>

            <p className="home-copy">
              Safe, professional home-based ear care delivered with a calm,
              clinical approach. Ear Care is the first active service under
              Palaemon Clinical Services, with further health-focused services
              planned as the business grows.
            </p>

            <div className="home-button-row">
              <Link to="/ear-care" className="home-primary-button">
                Explore Ear Care
              </Link>

              <Link to="/clinical-services" className="home-secondary-button">
                Clinical Services
              </Link>
            </div>

            <div className="home-pill-row">
              {[
                "HCPC registered paramedic",
                "Home visits",
                "Ear care available now",
                "Professional clinical approach",
              ].map((item) => (
                <span key={item} className="home-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card home-panel">
            <div className="home-panel-glow" />

            <div className="home-panel-stack">
              <div className="home-panel-card">
                <p className="home-panel-label">Available now</p>
                <h3 className="home-panel-title">
                  Home-based ear care and microsuction
                </h3>
              </div>

              <div className="home-panel-card">
                <p className="home-panel-label">Led by</p>
                <h3 className="home-panel-title">HCPC registered paramedic</h3>
              </div>

              <div className="home-panel-card">
                <p className="home-panel-label">Developing into</p>
                <h3 className="home-panel-title">
                  Wider clinical services and health assessments
                </h3>
              </div>
            </div>

            <div className="home-panel-footer">
              Palaemon Clinical Services is designed to deliver professional,
              accessible care in more convenient settings, starting with Ear
              Care and expanding into a broader range of clinical services.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;