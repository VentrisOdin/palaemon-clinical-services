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
            Developing paramedic-led clinical support in the community
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.7",
              color: "var(--color-text-secondary)",
              maxWidth: "720px",
            }}
          >
            Palaemon Clinical Services is being developed beyond ear care, with
            a focus on delivering accessible, paramedic-led support in home and
            care settings. The aim is to introduce structured clinical services
            that provide reassurance, continuity, and improved communication
            around patient care.
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
            All future services will be introduced in line with appropriate
            regulatory requirements, including registration with the Care
            Quality Commission (CQC) where required.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesIntro;