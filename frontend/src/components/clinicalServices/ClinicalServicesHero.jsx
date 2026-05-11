import { Link } from "react-router-dom";

function ClinicalServicesHero() {
  return (
    <section className="home-section">
      <div className="container">
        <div
          className="nhs-info-card"
          style={{
            background: "linear-gradient(135deg, #005eb8, #0072ce)",
            color: "#ffffff",
            padding: "4rem 3rem",
            borderRadius: "32px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-120px",
              right: "-120px",
              width: "320px",
              height: "320px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.08)",
              filter: "blur(20px)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "860px",
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
              Developing clinical support services
            </p>

            <h1
              style={{
                color: "#ffffff",
                fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                lineHeight: "1.05",
                marginBottom: "1.5rem",
                maxWidth: "900px",
              }}
            >
              Structured clinical support for care settings
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.94)",
                fontSize: "1.15rem",
                lineHeight: "1.8",
                maxWidth: "760px",
                marginBottom: "1.25rem",
              }}
            >
              Palaemon Clinical Services is developing a paramedic-led support
              model centred around regular resident screening, structured
              clinical observations and communication with existing healthcare
              providers.
            </p>

            <p
              style={{
                color: "rgba(255,255,255,0.88)",
                fontSize: "1.05rem",
                lineHeight: "1.75",
                maxWidth: "760px",
                marginBottom: "2.25rem",
              }}
            >
              The long-term aim is to support earlier identification of changes
              in resident condition, improve continuity of information between
              care homes and primary care services, and help facilitate timely
              clinical review where appropriate.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Link
                to="/care-home-clinics"
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
                View current care home clinics
              </Link>

              <a
                href="mailto:info@palaemonclinicalservices.co.uk?subject=Care%20Home%20Clinical%20Support%20Enquiry"
                className="home-link"
                style={{
                  color: "#ffffff",
                  fontWeight: "700",
                  textDecorationColor: "rgba(255,255,255,0.55)",
                }}
              >
                Discuss future support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesHero;