function WhyChoose() {
  const items = [
    {
      title: "HCPC registered paramedic",
      text: "Care delivered by a registered paramedic, bringing clinical judgement, patient safety awareness, and a professional standard that sets Palaemon apart from non-clinical providers.",
    },
    {
      title: "Home visit convenience",
      text: "Appointments take place in the comfort of your own home, avoiding travel, waiting rooms, and unnecessary disruption to your day.",
    },
    {
      title: "Clear and professional process",
      text: "Straightforward booking, transparent pricing, and a calm, patient-focused approach from first contact through to treatment.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gap: "1.75rem",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
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
              Why choose Palaemon
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
              Professional ear care with a calm, clinical approach
            </h2>

            <p
              style={{
                fontSize: "1.08rem",
                lineHeight: "1.75",
                color: "var(--color-text-secondary)",
                maxWidth: "760px",
              }}
            >
              Palaemon Ear Care is a paramedic led service ensuring calm,
              professional, reassuring, and convenient service from the first click
              onwards. The aim is not simply treatment, but safe, effective care
              delivered with clinical confidence and a reassuring patient
              experience.
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
                  padding: "1.6rem",
                  animation: "riseUp 0.8s ease",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.08rem",
                    lineHeight: "1.35",
                    marginBottom: "0.75rem",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.7",
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