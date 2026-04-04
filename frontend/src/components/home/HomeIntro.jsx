function HomeIntro() {
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
              What is Palaemon Clinical Services
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
              A clinical service built on frontline experience
            </h2>

            <p
              style={{
                fontSize: "1.08rem",
                lineHeight: "1.75",
                color: "var(--color-text-secondary)",
                maxWidth: "780px",
              }}
            >
              Palaemon Clinical Services is being developed to provide
              professional, accessible care outside traditional clinical
              environments. Built on paramedic experience and a strong
              patient-first approach, the business begins with ear care and is
              designed to grow into a broader range of health-focused
              assessments and mobile clinical services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeIntro;