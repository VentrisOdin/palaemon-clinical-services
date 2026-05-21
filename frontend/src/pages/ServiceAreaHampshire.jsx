import { Link } from "react-router-dom";

function ServiceArea() {
  const areas = [
    "Portsmouth",
    "Southsea",
    "Cosham",
    "Havant",
    "Waterlooville",
    "Fareham",
    "Gosport",
    "Emsworth",
    "Basingstoke",
    "Horndean",
  ];

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
          <p className="home-eyebrow">Service Area</p>

          <h1 className="home-section-title" style={{ marginBottom: "1rem" }}>
            Home visit ear care in Portsmouth and surrounding areas
          </h1>

          <p
            className="home-section-copy"
            style={{ marginBottom: "1rem" }}
          >
            Palaemon Ear Care provides professional ear care assessments at home
            across Portsmouth and nearby areas. Appointments are designed to be
            simple, convenient, and carried out in a calm, familiar environment.
          </p>

          <p
            className="home-section-copy"
            style={{ marginBottom: "1.5rem" }}
          >
            All appointments begin with an assessment to determine whether
            microsuction is appropriate. Where suitable, microsuction ear wax
            removal can be carried out during the visit.
          </p>

          <p
            className="home-section-copy"
            style={{ marginBottom: "2rem" }}
          >
            Care is delivered by a HCPC registered paramedic, with all booking
            requests reviewed prior to confirmation.
          </p>

          {/* Areas list */}
          <div style={{ marginBottom: "2rem" }}>
            <h2
              className="home-card-title"
              style={{ marginBottom: "0.75rem" }}
            >
              Areas we cover
            </h2>

            <ul
              style={{
                columns: 2,
                paddingLeft: "1.25rem",
                lineHeight: 1.9,
              }}
            >
              {areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* NHS-style info box */}
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
              If you are unsure whether your location is covered, please get in
              touch or submit a booking request. We will confirm availability
              before your appointment is finalised.
            </p>
          </div>

          {/* CTA */}
          <div className="home-button-row">
            <Link to="/booking" className="home-primary-button">
              Book Home Visit
            </Link>

            <Link to="/contact" className="home-secondary-button">
              Contact Us
            </Link>

            <Link to="/ear-wax-removal-portsmouth" className="home-link">
              Ear wax removal in Portsmouth
            </Link>

            <Link to="/ear-wax-removal-petersfield" className="home-link">
              Ear wax removal in Petersfield
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;