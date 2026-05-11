function ClinicalServicesGovernance() {
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
            Governance and regulation
          </p>

          <h2
            style={{
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Service development supported by governance and professional
            standards
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.92)",
              fontSize: "1.05rem",
              lineHeight: "1.7",
              maxWidth: "780px",
              marginBottom: "1.25rem",
            }}
          >
            Palaemon Clinical Services is being developed with a strong focus on
            clinical governance, professional accountability and appropriate
            regulatory processes.
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.92)",
              fontSize: "1.05rem",
              lineHeight: "1.7",
              maxWidth: "780px",
              marginBottom: "1.5rem",
            }}
          >
            Planned clinical support services are intended to operate within
            structured governance frameworks, including policies, clinical
            documentation standards, infection prevention procedures,
            professional oversight and clear escalation pathways.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {[
              "Clinical governance and oversight",
              "Structured documentation standards",
              "Infection prevention procedures",
              "Professional accountability",
              "Clear escalation processes",
              "Appropriate regulatory pathways",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  borderRadius: "18px",
                  padding: "1rem 1.1rem",
                  color: "#ffffff",
                  fontWeight: "600",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "1rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "0.95rem",
                lineHeight: "1.7",
                maxWidth: "860px",
                marginBottom: 0,
              }}
            >
              Wider clinical support services described on this page are
              currently in development and will only be introduced following
              the appropriate regulatory processes, governance arrangements and
              registration requirements where applicable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesGovernance;