import { Link } from "react-router-dom";

function HomeCareHomeClinics() {
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
          <p className="home-eyebrow">
            Care home support
          </p>

          <h2
            style={{
              fontSize: "1.65rem",
              lineHeight: "1.2",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Care Home Microsuction Clinic Days
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.7",
              color: "var(--color-text-secondary)",
              marginBottom: "0.9rem",
            }}
          >
            We offer organised on-site ear care clinic days for residential
            and care settings, helping residents access professional
            microsuction in a familiar and comfortable environment.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.7",
              color: "var(--color-text-secondary)",
              marginBottom: "1.25rem",
            }}
          >
            Group clinic days can reduce disruption for residents, staff,
            and families while allowing multiple residents to be seen
            efficiently during a single visit.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span className="home-pill">
              HCPC-registered paramedic
            </span>

            <span className="home-pill">
              Group booking rates available
            </span>

            <span className="home-pill">
              On-site resident care
            </span>
          </div>

          <Link
            to="/care-home-clinics"
            className="home-link"
          >
            Learn about care home clinic days
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCareHomeClinics;