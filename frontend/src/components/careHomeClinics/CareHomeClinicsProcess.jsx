function CareHomeClinicsProcess() {
  const steps = [
    {
      title: "1. Residents identified",
      text: "The care home identifies residents who may benefit from ear wax assessment or microsuction.",
    },
    {
      title: "2. Clinic day arranged",
      text: "We agree a suitable date and visit the home with the required equipment and documentation.",
    },
    {
      title: "3. Residents seen on-site",
      text: "Suitable residents are assessed and, where appropriate, microsuction is carried out within the care home setting.",
    },
  ];

  return (
    <section className="home-section">
      <div className="container">
        <div
          className="nhs-info-card"
          style={{
            background: "linear-gradient(135deg, #005eb8, #0072ce)",
            color: "#ffffff",
            padding: "3rem",
            borderRadius: "28px",
          }}
        >
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: "800",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: "0.9",
              marginBottom: "1rem",
            }}
          >
            How it works
          </p>

          <h2 style={{ color: "#ffffff", marginBottom: "1rem" }}>
            A simple clinic day process
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.92)",
              fontSize: "1.05rem",
              lineHeight: "1.7",
              maxWidth: "760px",
              marginBottom: "2rem",
            }}
          >
            We aim to make the process straightforward for care homes,
            residents and families, with organised on-site clinic days designed
            to minimise disruption.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {steps.map((step) => (
              <div
                key={step.title}
                style={{
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  borderRadius: "20px",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    color: "#ffffff",
                    marginBottom: "0.75rem",
                    fontSize: "1.05rem",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareHomeClinicsProcess;