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
            What is Palaemon Clinical Services
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
            A clinical service built on frontline experience
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.7",
              color: "var(--color-text-secondary)",
              maxWidth: "720px",
            }}
          >
            Palaemon Clinical Services is being developed to provide
            professional, accessible care outside traditional clinical
            environments. Built on paramedic experience and a strong
            patient-first approach, the service begins with ear care and is
            designed to expand into a broader range of mobile clinical
            assessments and health-focused services.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesIntro;