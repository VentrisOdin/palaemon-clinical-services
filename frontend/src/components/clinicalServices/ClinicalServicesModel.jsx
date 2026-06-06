import { Link } from "react-router-dom";

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

          <h2 style={{ color: "#ffffff", marginBottom: "1rem" }}>
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

          <div
            style={{
              marginTop: "2rem",
              padding: "1.5rem",
              borderRadius: "22px",
              background: "rgba(255,255,255,0.16)",
              border: "1px solid rgba(255,255,255,0.24)",
            }}
          >
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: "800",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.88)",
                marginBottom: "0.75rem",
              }}
            >
              Demonstration system
            </p>

            <h3
              style={{
                color: "#ffffff",
                fontSize: "1.35rem",
                marginBottom: "0.75rem",
              }}
            >
              See the developing model in action
            </h3>

            <p
              style={{
                color: "rgba(255,255,255,0.92)",
                lineHeight: "1.7",
                maxWidth: "760px",
                marginBottom: "1.25rem",
              }}
            >
              Explore a read-only demonstration showing a sample resident
              journey, assessment records, structured referral, care home
              summary and GP-facing PDF output.
            </p>

            <Link
              to="/demo"
              className="qr-book-button"
              style={{
                width: "auto",
                minWidth: "260px",
                textAlign: "center",
                background: "#ffffff",
                color: "#005eb8",
                boxShadow: "0 14px 32px rgba(0,0,0,0.12)",
              }}
            >
              View Demonstration System
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesModel;