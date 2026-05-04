function ServicesOverview() {
  const services = [
    {
      title: "Ear Care",
      status: "Available now",
      text: "Home-based ear wax removal using microsuction, delivered by an HCPC-registered paramedic with a calm, professional, and reassuring approach.",
    },
    {
      title: "Care Home Clinical Support",
      status: "Planned for the future",
      text: "A future paramedic-led service being developed to support care home residents through regular visits, structured assessments, and clearer communication with GPs.",
    },
    {
      title: "Health MOTs",
      status: "Planned for the future",
      text: "A planned future service focused on convenient wellbeing checks, baseline observations, and early identification of changes in health.",
    },
    {
      title: "Cardiovascular Assessment",
      status: "Planned for the future",
      text: "A future regulated service area that may include structured cardiovascular observations and ECG recording where clinically appropriate.",
    },
    {
      title: "Respiratory Assessment",
      status: "Planned for the future",
      text: "A planned area of development focused on structured respiratory observations and identifying changes that may require further clinical review.",
    },
    {
      title: "Neurological Assessment",
      status: "Planned for the future",
      text: "A future service area that may include structured neurological screening, including cranial nerve assessment where appropriate.",
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
              Service Development
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
              Starting with ear care, with a wider clinical model in development
            </h2>

            <p
              style={{
                fontSize: "1.08rem",
                lineHeight: "1.75",
                color: "var(--color-text-secondary)",
                maxWidth: "780px",
                marginBottom: "0.85rem",
              }}
            >
              Ear Care is the first active service under Palaemon Clinical
              Services. Alongside this, we are developing a broader
              paramedic-led model focused on accessible support in home and care
              settings.
            </p>

            <p
              style={{
                fontSize: "1.08rem",
                lineHeight: "1.75",
                color: "var(--color-text-secondary)",
                maxWidth: "780px",
              }}
            >
              We are currently preparing for Care Quality Commission (CQC)
              registration to support the future expansion of regulated
              services. Services shown below are not yet available unless marked
              as available now.
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
                    background: "rgba(0, 94, 184, 0.1)",
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