function MicrosuctionProcess() {
  const steps = [
    "Book your appointment online.",
    "A home visit is arranged at a suitable time.",
    "Your ears are assessed before treatment.",
    "Microsuction is carried out if appropriate.",
    "Aftercare advice is provided if needed.",
  ];

  return (
    <section
      className="home-section"
      style={{
        paddingTop: "1.25rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="container">
        <div className="home-content-block" style={{ maxWidth: "760px" }}>
          <p className="home-eyebrow">What to expect</p>

          <h2 className="home-section-title">
            A simple, professional appointment process
          </h2>

          <ol
            style={{
              paddingLeft: "1.2rem",
              color: "var(--color-text-secondary)",
              lineHeight: "1.9",
              fontSize: "1rem",
              maxWidth: "720px",
              margin: 0,
            }}
          >
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default MicrosuctionProcess;