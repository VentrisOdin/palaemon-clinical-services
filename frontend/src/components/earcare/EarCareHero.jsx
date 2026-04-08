import { Link } from "react-router-dom";

function Hero() {
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
            Palaemon Ear Care
          </p>

          <h1
            style={{
              fontSize: "2.6rem",
              lineHeight: "1.15",
              fontWeight: "700",
              maxWidth: "900px",
            }}
          >
            Professional, clinically delivered ear wax removal at home
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.75",
              color: "var(--color-text-secondary)",
              maxWidth: "760px",
            }}
          >
            Delivered by an HCPC registered paramedic, bringing safe and
            effective microsuction directly to your home. Providing health care
            professional service without the stress of travel or waiting rooms.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              paddingTop: "0.25rem",
            }}
          >
            <Link
              to="/booking"
              style={{
                padding: "0.8rem 1.6rem",
                borderRadius: "var(--radius-md)",
                background: "var(--color-accent)",
                color: "#000",
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Book Appointment
            </Link>

            <Link
              to="/ear-care"
              style={{
                padding: "0.8rem 1.6rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-primary)",
                fontWeight: "500",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Learn More
            </Link>
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
            <span>✓ Home visits</span>
            <span>✓ Paramedic led</span>
            <span>✓ Safe microsuction</span>
            <span>✓ Transparent pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;