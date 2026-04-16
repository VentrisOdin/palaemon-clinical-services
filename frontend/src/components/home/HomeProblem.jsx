function HomeProblem() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="home-content-block">
          <p className="home-eyebrow">Blocked ears</p>

          <h2 className="home-section-title">
            Struggling with blocked ears or reduced hearing?
          </h2>

          <p className="home-section-copy" style={{ marginBottom: "1rem" }}>
            A build-up of ear wax can lead to reduced hearing, a blocked
            sensation, and general discomfort. Microsuction is a gentle and
            effective way to remove excess wax and help improve comfort.
          </p>

          <ul
            style={{
              paddingLeft: "1.2rem",
              color: "var(--color-text-secondary)",
              lineHeight: "1.8",
              marginBottom: "1rem",
            }}
          >
            <li>Reduced hearing</li>
            <li>Blocked or full feeling in the ear</li>
            <li>Discomfort or irritation</li>
            <li>Ringing in the ears (tinnitus)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomeProblem;