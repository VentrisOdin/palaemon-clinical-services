function HomeHero() {
  return (
    <section className="section">
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: "3.5rem 2.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
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
            }}
          >
            Palaemon Clinical Services
          </p>

          <h1
            style={{
              fontSize: "2.7rem",
              lineHeight: "1.15",
              fontWeight: "700",
              maxWidth: "920px",
            }}
          >
            Paramedic-led clinical services, delivered with professionalism and care
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.75",
              color: "var(--color-text-secondary)",
              maxWidth: "780px",
            }}
          >
            Palaemon Clinical Services is a paramedic-led service designed to
            bring professional, reassuring care into more accessible settings.
            Beginning with home-based ear care, the service is being built to
            expand into a wider range of clinical assessments and health-focused
            appointments.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              paddingTop: "0.25rem",
            }}
          >
            <a
              href="/ear-care"
              style={{
                padding: "0.8rem 1.6rem",
                borderRadius: "var(--radius-md)",
                background: "var(--color-accent)",
                color: "#000",
                fontWeight: "600",
              }}
            >
              Explore Ear Care
            </a>

            <a
              href="#services"
              style={{
                padding: "0.8rem 1.6rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-primary)",
                fontWeight: "500",
              }}
            >
              View Services
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              flexWrap: "wrap",
              marginTop: "0.5rem",
              color: "var(--color-text-muted)",
              fontSize: "0.98rem",
              lineHeight: "1.6",
            }}
          >
            <span>✓ HCPC registered paramedic</span>
            <span>✓ Home visit service</span>
            <span>✓ Professional clinical approach</span>
            <span>✓ Expanding service range</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;