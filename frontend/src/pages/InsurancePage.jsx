function InsurancePage() {
  return (
    <section className="home-section">
      <div className="container" style={{ maxWidth: "900px" }}>
        <div
          className="glass-card"
          style={{
            padding: "2.25rem",
            animation: "riseUp 0.8s ease",
          }}
        >
          <p className="home-eyebrow">Information</p>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              lineHeight: "1.1",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Insurance
          </h1>

          <p className="home-copy" style={{ marginBottom: "1.5rem" }}>
            Palaemon Ear Care is committed to operating professionally and
            responsibly. Appropriate insurance arrangements are maintained in
            relation to the services currently provided.
          </p>

          <div className="home-content-block" style={{ maxWidth: "100%" }}>
            <h2 className="home-section-title">Current position</h2>
            <p className="home-section-copy">
              We maintain insurance relevant to the nature of the services we
              provide, including cover appropriate to home visits and ear wax
              removal services.
            </p>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Our approach
            </h2>
            <p className="home-section-copy">
              Insurance arrangements are reviewed as the business develops to
              make sure cover remains appropriate to the services being offered.
            </p>
            <p className="home-section-copy">
              As Palaemon expands in the future, insurance cover will be updated
              to reflect any new services introduced.
            </p>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Why this matters
            </h2>
            <p className="home-section-copy">
              Maintaining appropriate insurance is part of our wider commitment
              to professionalism, accountability, and safe service delivery.
            </p>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Further information
            </h2>
            <p className="home-section-copy">
              If you would like further information about insurance in relation
              to the services currently offered, please contact us directly.
            </p>

            <p className="home-section-copy" style={{ marginTop: "2rem" }}>
              <strong>Last updated:</strong> 16 April 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InsurancePage;