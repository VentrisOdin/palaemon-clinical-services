function ServicesOverview() {
  const services = [
    {
      title: "Ear Care",
      status: "Available now",
      text: "Home-based ear wax removal using microsuction, delivered with a calm, professional, and reassuring approach.",
    },
    {
      title: "Care Home Support",
      status: "Planned for the future",
      text: "A future service being developed to provide additional support for care settings, with a focus on communication, reassurance, and continuity.",
    },
    {
      title: "Health MOTs",
      status: "Planned for the future",
      text: "A planned future service intended to offer convenient home-based wellbeing checks and general support appointments.",
    },
    {
      title: "Cardiovascular Assessment",
      status: "Planned for the future",
      text: "A future service being explored as part of a wider expansion into regulated home-based support services.",
    },
    {
      title: "Respiratory Assessment",
      status: "Planned for the future",
      text: "A planned area of future development as Palaemon expands its wider service offering.",
    },
    {
      title: "Cranial Nerve Assessment",
      status: "Planned for the future",
      text: "A future area of service development that may form part of Palaemon’s longer-term regulated service expansion.",
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
              Future Services
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
                marginBottom: "0.85rem",
              }}
            >
              Ear Care is the first active service under Palaemon, with a wider
              range of home-based services planned for the future as the
              business develops.
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