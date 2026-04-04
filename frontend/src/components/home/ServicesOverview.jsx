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
    <section className="section" id="services">
      <div className="container">
        <div
          style={{
            display: "grid",
            gap: "1.75rem",
          }}
        >
          <div
            style={{
              maxWidth: "820px",
              animation: "riseUp 0.8s ease",
            }}
          >
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.18rem",
                color: "var(--color-accent)",
                fontSize: "0.95rem",
                fontWeight: "600",
                marginBottom: "0.9rem",
              }}
            >
              Services
            </p>

            <h2
              style={{
                fontSize: "2.1rem",
                lineHeight: "1.2",
                fontWeight: "700",
                marginBottom: "1rem",
                maxWidth: "760px",
              }}
            >
              Built to start with ear care and grow beyond it
            </h2>

            <p
              style={{
                fontSize: "1.08rem",
                lineHeight: "1.75",
                color: "var(--color-text-secondary)",
                maxWidth: "780px",
              }}
            >
              Ear Care is the first active service under Palaemon Clinical
              Services, with further assessment and health-focused services
              planned as the business develops.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-card"
                style={{
                  padding: "1.6rem",
                  animation: "riseUp 0.8s ease",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    marginBottom: "0.85rem",
                    padding: "0.35rem 0.65rem",
                    borderRadius: "999px",
                    background: "rgba(76, 201, 240, 0.1)",
                    color: "var(--color-accent)",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                  }}
                >
                  {service.status}
                </div>

                <h3
                  style={{
                    fontSize: "1.08rem",
                    lineHeight: "1.35",
                    marginBottom: "0.75rem",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.7",
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