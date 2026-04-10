function HomeProblem() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="home-content-block">
          <p className="home-eyebrow">Ear problems</p>

          <h2 className="home-section-title">
            Struggling with blocked ears or hearing issues?
          </h2>

          <p className="home-section-copy" style={{ marginBottom: "1rem" }}>
            Ear wax build-up can cause reduced hearing, discomfort, and
            irritation. Microsuction is a safe and effective way to remove ear
            wax and restore normal hearing.
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