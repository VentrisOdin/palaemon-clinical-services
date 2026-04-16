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
            A more convenient approach to home-based care
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.7",
              color: "var(--color-text-secondary)",
              marginBottom: "0.9rem",
            }}
          >
            Palaemon is focused on making essential services more accessible at home.
            Ear wax removal is currently available, with additional services planned
            for the future as the business develops.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.7",
              color: "var(--color-text-secondary)",
              marginBottom: "0.9rem",
            }}
          >
            Future services will be introduced following the appropriate regulatory
            processes.
          </p>

          <Link to="/clinical-services" className="home-link">
            Learn more about our future services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeIntro;