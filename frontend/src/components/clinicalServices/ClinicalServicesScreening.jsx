function ClinicalServicesScreening() {
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
            Screening focus
          </p>

          <h2
            style={{
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Structured resident screening and observations
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
            The planned service is designed around regular resident screening,
            structured observations and documentation that may support earlier
            identification of changes in condition and clearer communication
            with healthcare providers.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "1.25rem",
            }}
          >
            <div
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
                }}
              >
                Respiratory screening
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: "1.65",
                  margin: 0,
                }}
              >
                Structured respiratory observations and symptom review to help
                identify potential deterioration or changes from baseline.
              </p>
            </div>

            <div
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
                }}
              >
                Cardiovascular observations
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: "1.65",
                  margin: 0,
                }}
              >
                Blood pressure, pulse assessment, ECG recording where
                appropriate and structured cardiovascular observations.
              </p>
            </div>

            <div
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
                }}
              >
                General deterioration review
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: "1.65",
                  margin: 0,
                }}
              >
                Baseline observations, frailty awareness and documentation of
                clinical changes that may warrant further review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesScreening;