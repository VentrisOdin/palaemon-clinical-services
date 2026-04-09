import { Link } from "react-router-dom";

function HomeIntro() {
  return (
    <section
      className="home-section"
      style={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="container">
        <div
          className="home-content-block"
          style={{
            maxWidth: "760px",
          }}
        >
          <p
            className="home-eyebrow"
            style={{
              marginBottom: "0.9rem",
            }}
          >
            About Palaemon
          </p>

          <h2
            style={{
              fontSize: "1.65rem",
              lineHeight: "1.2",
              fontWeight: "700",
              marginBottom: "1rem",
              maxWidth: "680px",
            }}
          >
            A paramedic-led clinical service built for accessible, professional care
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.7",
              color: "var(--color-text-secondary)",
              maxWidth: "720px",
              marginBottom: "0.9rem",
            }}
          >
            Palaemon Clinical Services is built on frontline experience,
            combining clinical professionalism, patient reassurance, and more
            accessible care. Ear Care is the first active service, with wider
            assessment and health-focused appointments planned as the service
            grows.
          </p>

          <Link to="/clinical-services" className="home-link">
            Learn more about Palaemon Clinical Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeIntro;