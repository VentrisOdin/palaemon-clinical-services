import { Link } from "react-router-dom";

function ServiceArea() {
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
          <p className="home-eyebrow">Areas We Cover</p>

          <h1 className="home-section-title" style={{ marginBottom: "1rem" }}>
            Home visit ear care across Hampshire and Surrey
          </h1>

          <p
            className="home-section-copy"
            style={{ marginBottom: "2rem" }}
          >
            We provide home visit ear care assessments, with microsuction where
            appropriate, across selected areas of Hampshire and Surrey.
            Appointments are designed to be simple, convenient, and carried out
            in a calm, familiar environment.
          </p>

          <p
            className="home-section-copy"
            style={{ marginBottom: "2rem" }}
          >
            All booking requests are reviewed prior to confirmation to ensure
            the service is appropriate and available for your location.
          </p>

          {/* Region cards */}
          <div className="home-card-grid">
            <div
              className="glass-card home-info-card nhs-tile"
              style={{ padding: "1.6rem" }}
            >
              <h2 style={{ marginBottom: "0.75rem" }}>Hampshire</h2>

              <p className="home-card-copy" style={{ marginBottom: "1rem" }}>
                Including Portsmouth, Southsea, Havant, Waterlooville, Fareham
                and surrounding areas.
              </p>

              <Link
                to="/service-area-hampshire"
                className="home-primary-button"
              >
                View Hampshire Coverage
              </Link>
            </div>

            <div
              className="glass-card home-info-card nhs-tile"
              style={{ padding: "1.6rem" }}
            >
              <h2 style={{ marginBottom: "0.75rem" }}>Surrey</h2>

              <p className="home-card-copy" style={{ marginBottom: "1rem" }}>
                Including Guildford, Godalming, Haslemere and surrounding areas.
              </p>

              <Link
                to="/service-area-surrey"
                className="home-primary-button"
              >
                View Surrey Coverage
              </Link>
            </div>
          </div>

          {/* Small NHS-style reassurance box */}
          <div
            style={{
              background: "rgba(0, 94, 184, 0.08)",
              border: "1px solid rgba(0, 94, 184, 0.18)",
              borderRadius: "16px",
              padding: "1rem 1.1rem",
              marginTop: "2rem",
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
              If you are unsure whether your location is covered, you can submit
              a booking request and we will confirm availability before your
              appointment is finalised.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;