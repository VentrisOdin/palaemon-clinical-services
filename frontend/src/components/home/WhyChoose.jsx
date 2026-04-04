function WhyChoose() {
  const items = [
    {
      title: "Clinically led care",
      text: "A professional, clinically grounded service designed to provide reassurance as well as effective treatment.",
    },
    {
      title: "Home visit convenience",
      text: "Appointments delivered in the comfort of your own home, avoiding travel, waiting rooms, and unnecessary hassle.",
    },
    {
      title: "Clear and professional process",
      text: "A straightforward service with transparent pricing, simple booking, and a calm, patient-focused experience.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              maxWidth: "760px",
              animation: "riseUp 0.8s ease",
            }}
          >
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.2rem",
                color: "var(--color-accent)",
                fontSize: "0.9rem",
                marginBottom: "1rem",
              }}
            >
              Why choose Palaemon
            </p>

            <h2 className="section-title">
              Professional ear care with a calm, clinical approach
            </h2>

            <p className="section-copy">
              Palaemon Ear Care is designed to feel professional, reassuring,
              and convenient from the first click onwards. The aim is not just
              treatment, but a high-quality experience people can trust.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {items.map((item) => (
              <div
                key={item.title}
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  animation: "riseUp 0.8s ease",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.15rem",
                    marginBottom: "0.85rem",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;