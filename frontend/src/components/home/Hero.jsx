function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: "4rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            animation: "riseUp 0.8s ease",
          }}
        >
          {/* Tagline */}
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.2rem",
              color: "var(--color-accent)",
              fontSize: "0.9rem",
            }}
          >
            Palaemon Ear Care
          </p>

          {/* Headline */}
          <h1 className="section-title">
            Professional ear wax removal at home
          </h1>

          {/* Subtext */}
          <p className="section-copy">
            Delivered by a clinically trained practitioner, bringing safe,
            effective microsuction directly to your home. No waiting rooms, no
            stress — just straightforward, professional care.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#"
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-md)",
                background: "var(--color-accent)",
                color: "#000",
                fontWeight: "600",
              }}
            >
              Book Appointment
            </a>

            <a
              href="#"
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-primary)",
              }}
            >
              Learn More
            </a>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              marginTop: "1rem",
              color: "var(--color-text-muted)",
              fontSize: "0.9rem",
            }}
          >
            <span>✓ Home visits</span>
            <span>✓ Clinically trained</span>
            <span>✓ Safe microsuction</span>
            <span>✓ Transparent pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;