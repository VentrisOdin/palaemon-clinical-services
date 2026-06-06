function ClinicalServicesIntro() {
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
            animation: "riseUp 0.8s ease",
          }}
        >
          <p
            className="home-eyebrow"
            style={{
              marginBottom: "0.9rem",
            }}
          >
            Future Service Development
          </p>

          <h2
            style={{
              fontSize: "1.7rem",
              lineHeight: "1.2",
              fontWeight: "700",
              marginBottom: "1rem",
              maxWidth: "680px",
            }}
          >
            Developing a paramedic-led care home monitoring service
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.7",
              color: "var(--color-text-secondary)",
              maxWidth: "720px",
            }}
          >
            Palaemon Clinical Services is currently developing a structured
            care home monitoring model designed to support earlier recognition
            of deterioration, proactive resident review, and improved
            communication between care homes, primary care and community
            services.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.7",
              color: "var(--color-text-secondary)",
              maxWidth: "720px",
              marginTop: "0.75rem",
            }}
          >
            The proposed model uses paramedic-led baseline assessments,
            routine clinical monitoring, structured escalation pathways and
            professional clinical summaries to provide an additional layer of
            support for residents and care home staff.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.7",
              color: "var(--color-text-secondary)",
              maxWidth: "720px",
              marginTop: "0.75rem",
            }}
          >
            This service is currently under development and is not yet
            available clinically. Development is being undertaken alongside
            appropriate governance, regulatory preparation and future Care
            Quality Commission (CQC) registration requirements.
          </p>

          <div
            style={{
              marginTop: "2rem",
            }}
          >
            <Link
              to="/demo"
              className="primary-button"
            >
              View Demonstration System
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesIntro;