function ServicesOverview() {
  const services = [
    {
      title: "Ear Care",
      status: "Available now",
      text: "Home-based ear wax removal and microsuction delivered with a professional, clinically led approach.",
    },
    {
      title: "Health MOTs",
      status: "In development",
      text: "General health-focused assessment appointments designed to provide reassurance, screening, and early insight.",
    },
    {
      title: "ECG Assessment",
      status: "Planned",
      text: "Cardiovascular screening and ECG-based assessment as part of a wider future clinical service offering.",
    },
    {
      title: "Respiratory Assessment",
      status: "Planned",
      text: "Respiratory-focused review and assessment to support broader community-based clinical appointments.",
    },
    {
      title: "Neurological Screening",
      status: "Planned",
      text: "Structured screening appointments including cranial nerve and related neurological assessment elements.",
    },
    {
      title: "Mobile Clinical Services",
      status: "Future expansion",
      text: "A growing paramedic-led service model designed to bring professional assessment and support into accessible settings.",
    },
  ];

  return (
    <section
      className="home-section"
      id="services"
      style={{
        paddingTop: "2rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="container">
        <div
          className="home-section-stack"
          style={{
            gap: "1.75rem",
          }}
        >
          <div
            className="home-heading-block"
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
              Services
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
              Built to start with ear care and grow beyond it
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.7",
                color: "var(--color-text-secondary)",
                maxWidth: "720px",
              }}
            >
              Ear Care is the first active service under Palaemon Clinical
              Services, with further assessment and health-focused services
              planned as the business develops.
            </p>
          </div>

          <div
            className="home-card-grid"
            style={{
              gap: "1.15rem",
            }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-card home-info-card"
                style={{
                  padding: "1.45rem",
                  animation: "riseUp 0.8s ease",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    marginBottom: "0.8rem",
                    padding: "0.35rem 0.65rem",
                    borderRadius: "999px",
                    background: "rgba(76, 201, 240, 0.1)",
                    color: "var(--color-accent)",
                    fontSize: "0.78rem",
                    fontWeight: "600",
                  }}
                >
                  {service.status}
                </div>

                <h3
                  style={{
                    fontSize: "1.02rem",
                    lineHeight: "1.35",
                    marginBottom: "0.7rem",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.98rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.68",
                    margin: 0,
                  }}
                >
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;