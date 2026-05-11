function ClinicalServicesModel() {
  const points = [
    {
      title: "Regular resident screening",
      text:
        "Planned routine visits designed to support ongoing monitoring and help identify changes in resident condition over time.",
    },
    {
      title: "Structured clinical observations",
      text:
        "Assessment findings documented in a clear and consistent format to support communication with care teams and external healthcare providers.",
    },
    {
      title: "Support for appropriate escalation",
      text:
        "Helping care settings identify when further clinical review or discussion with primary care services may be appropriate.",
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
            The approach
          </p>

          <h2
            style={{
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Structured clinical support for care settings
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
            The long-term aim is to develop a structured, paramedic-led support
            model focused on regular resident screening, clinical observations
            and communication with existing healthcare services.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {points.map((point) => (
              <div
                key={point.title}
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
                  {point.title}
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesModel;