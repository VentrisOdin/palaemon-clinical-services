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
            About Future Services
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
            Building a broader range of home-based support services
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.7",
              color: "var(--color-text-secondary)",
              maxWidth: "720px",
            }}
          >
            Palaemon is being developed to expand beyond ear care, with a focus
            on making additional services more accessible in the home
            environment. The aim is to gradually introduce a wider range of
            support services as the business grows.
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
            These services are not yet available and will be introduced in line
            with the appropriate regulatory requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesIntro;