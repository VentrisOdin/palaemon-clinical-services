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
        <div className="home-content-block" style={{ maxWidth: "760px" }}>
          <p className="home-eyebrow">About Palaemon</p>

          <h2
            style={{
              fontSize: "1.65rem",
              lineHeight: "1.2",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Building a more accessible way to deliver clinical care
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.7",
              color: "var(--color-text-secondary)",
              marginBottom: "0.9rem",
            }}
          >
            Palaemon Clinical Services is designed to make professional healthcare
            more accessible outside of traditional settings. Ear Care is the first
            active service, with additional home-based clinical services planned as
            the business develops.
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