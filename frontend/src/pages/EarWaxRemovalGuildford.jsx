import { Link } from "react-router-dom";

function EarWaxRemovalGuildford() {
  return (
    <section className="home-section">
      <div className="container" style={{ maxWidth: "900px" }}>
        <div
          className="glass-card"
          style={{
            padding: "2.5rem",
            animation: "riseUp 0.8s ease",
          }}
        >
          <p className="home-eyebrow">Guildford</p>

          <h1 className="home-section-title" style={{ marginBottom: "1rem" }}>
            Ear wax removal in Guildford
          </h1>

          <p className="home-section-copy" style={{ marginBottom: "1rem" }}>
            Palaemon Ear Care offers home visit ear care assessments in
            Guildford, with microsuction carried out where appropriate. The aim
            is to provide a calm, convenient service for people who would prefer
            to be seen at home rather than travel to a clinic setting.
          </p>

          <p className="home-section-copy" style={{ marginBottom: "1.5rem" }}>
            All appointments begin with an assessment to determine whether
            microsuction is suitable. Where appropriate, ear wax removal can be
            completed during the same visit.
          </p>

          <div
            style={{
              background: "#005EB8",
              color: "#ffffff",
              borderRadius: "18px",
              padding: "1.25rem 1.4rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.14rem",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
                opacity: 0.9,
              }}
            >
              Local home visits
            </div>

            <div
              style={{
                fontSize: "0.98rem",
                lineHeight: 1.7,
                fontWeight: "500",
              }}
            >
              Home visits are available in Guildford and selected nearby Surrey
              areas, with all booking requests reviewed before confirmation to
              ensure availability and suitability.
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h2
              className="home-card-title"
              style={{ marginBottom: "0.75rem" }}
            >
              Areas nearby
            </h2>

            <p className="home-section-copy" style={{ marginBottom: "1rem" }}>
              This page is focused on Guildford, but appointments may also be
              available in nearby areas such as Godalming, Haslemere, Farnham
              and Woking depending on scheduling.
            </p>

            <Link to="/service-area-surrey" className="home-link">
              View Surrey coverage
            </Link>
          </div>

          <div
            style={{
              background: "rgba(0, 94, 184, 0.08)",
              border: "1px solid rgba(0, 94, 184, 0.18)",
              borderRadius: "16px",
              padding: "1rem 1.1rem",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
                lineHeight: 1.6,
                color: "var(--color-text-primary)",
              }}
            >
              <strong>Preparation advice:</strong> If you believe you have a
              build-up of ear wax, using olive oil drops or spray for{" "}
              <strong>3 to 5 days before your appointment</strong> can help
              soften the wax and make removal easier.
            </p>
          </div>

          <div className="home-button-row">
            <Link to="/booking" className="home-primary-button">
              Book Home Visit
            </Link>

            <Link to="/pricing" className="home-secondary-button">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EarWaxRemovalGuildford;