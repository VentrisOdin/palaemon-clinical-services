function CareHomeClinicsPricing() {
  return (
    <section className="home-section">
      <div className="container">
        <div
          className="nhs-info-card"
          style={{
            background: "#ffffff",
            padding: "3rem",
            borderRadius: "28px",
            border: "1px solid rgba(0, 94, 184, 0.08)",
            boxShadow: "0 24px 60px rgba(0, 56, 101, 0.08)",
          }}
        >
          <p className="home-eyebrow">Pricing</p>

          <h2 style={{ color: "#1d2b36", marginBottom: "1rem" }}>
            Group clinic rates available
          </h2>

          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.05rem",
              lineHeight: "1.7",
              maxWidth: "760px",
              marginBottom: "2rem",
            }}
          >
            Discounted group pricing is available for organised care home
            clinic days where multiple residents are booked during the same
            visit.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #005eb8, #0072ce)",
                borderRadius: "22px",
                padding: "1.75rem",
                color: "#ffffff",
                boxShadow: "0 18px 40px rgba(0, 94, 184, 0.2)",
              }}
            >
              <h3 style={{ color: "#ffffff", marginBottom: "0.75rem" }}>
                Care home clinic day rate
              </h3>

              <p style={{ color: "rgba(255,255,255,0.92)", lineHeight: "1.7" }}>
                Group clinic pricing available from
              </p>

              <p style={{ fontSize: "2rem", fontWeight: "800", margin: 0 }}>
                £40
              </p>

              <p style={{ marginTop: "0.35rem", color: "rgba(255,255,255,0.9)" }}>
                per resident, subject to minimum booking numbers
              </p>
            </div>

            <div
              style={{
                background: "#f4f8fb",
                border: "1px solid rgba(0, 94, 184, 0.08)",
                borderRadius: "22px",
                padding: "1.75rem",
              }}
            >
              <h3 style={{ color: "#1d2b36", marginBottom: "0.75rem" }}>
                Flexible arrangements
              </h3>

              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.7",
                  marginBottom: 0,
                }}
              >
                Pricing may vary depending on travel distance, resident numbers
                and clinic structure. Individual home visit pricing also remains
                available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareHomeClinicsPricing;