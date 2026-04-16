import blockage from "../../assets/images/EarBlockage.jpeg";

function MicrosuctionSuitability() {
  return (
    <section
      className="home-section"
      style={{
        paddingTop: "1.25rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="container">
        <div
          className="home-content-block"
          style={{
            maxWidth: "760px",
            marginBottom: "1.5rem",
          }}
        >
          <p className="home-eyebrow">When it may help</p>

          <h2 className="home-section-title">
            When ear wax build-up may be the cause of blocked ears
          </h2>

          <img
            src={blockage}
            alt="Example of ear wax blockage"
            style={{
              borderRadius: "12px",
              margin: "1.25rem 0",
              maxHeight: "280px",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <p className="home-section-copy">
            A build-up of ear wax can cause blocked ears, reduced hearing, or a
            feeling of fullness. In some cases, ear wax removal may help improve
            comfort and reduce these symptoms.
          </p>
        </div>

        <div className="home-card-grid">
          <div className="glass-card home-info-card">
            <h3 className="home-card-title">Who it may help</h3>
            <p className="home-card-copy">
              Microsuction may help people experiencing blocked ears, reduced
              hearing, a feeling of fullness in the ear, or symptoms related to
              ear wax build-up.
            </p>
          </div>

          <div className="glass-card home-info-card">
            <h3 className="home-card-title">Why people choose it</h3>
            <p className="home-card-copy">
              It is a gentle and precise method of ear wax removal that does not
              use water irrigation. Wax is removed while the ear is clearly
              viewed throughout the procedure.
            </p>
          </div>

          <div className="glass-card home-info-card">
            <h3 className="home-card-title">When to seek advice first</h3>
            <p className="home-card-copy">
              If you have severe pain, discharge, sudden hearing loss, fever, or
              signs of infection, you should seek advice from your GP or another
              appropriate healthcare professional before booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MicrosuctionSuitability;