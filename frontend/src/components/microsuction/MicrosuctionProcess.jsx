function MicrosuctionProcess() {
  const steps = [
    "Book your appointment online.",
    "A home visit is arranged at a suitable time.",
    "Your ears are checked before the procedure.",
    "Microsuction is carried out where suitable.",
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
            A simple, straightforward appointment process
          </h2>

          <div
            style={{
              background: "#005EB8",
              color: "#ffffff",
              borderRadius: "18px",
              padding: "1.75rem 1.75rem 1.75rem 2rem",
              marginTop: "1.25rem",
              maxWidth: "720px",
            }}
          >
            <ol
              style={{
                paddingLeft: "1.2rem",
                lineHeight: "1.9",
                fontSize: "1rem",
                margin: 0,
              }}
            >
              {steps.map((step) => (
                <li key={step} style={{ marginBottom: "0.5rem" }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MicrosuctionProcess;