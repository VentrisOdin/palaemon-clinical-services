import diagram from "../../assets/images/MicrosuctionDiagram.jpeg";

function MicrosuctionExplainer() {
  return (
    <section className="home-section">
      <div className="container">
        <div
          className="glass-card microsuction-explainer-grid"
          style={{
            padding: "2rem",
            animation: "riseUp 0.8s ease",
          }}
        >
          <div
            style={{
              maxWidth: "640px",
            }}
          >
            <p
              className="home-eyebrow"
              style={{
                marginBottom: "0.9rem",
              }}
            >
              How it works
            </p>

            <h2
              className="home-section-title"
              style={{
                marginBottom: "1rem",
                maxWidth: "560px",
              }}
            >
              A precise method of ear wax removal
            </h2>

            <p
              className="home-section-copy"
              style={{
                marginBottom: "1rem",
              }}
            >
              During microsuction, the ear is examined and wax is removed using a
              small suction device under direct visualisation. This allows
              treatment to be carried out carefully and accurately.
            </p>

            <p className="home-section-copy">
              Because microsuction does not rely on water irrigation, it is often
              regarded as a clean and controlled method of ear wax removal and is
              considered one of the gold standards.
            </p>
          </div>

          <div className="microsuction-explainer-image-wrap">
            <div className="microsuction-explainer-image-glow" />

            <div className="microsuction-explainer-image-card">
              <img
                src={diagram}
                alt="Diagram showing microsuction ear wax removal"
                className="microsuction-explainer-image"
              />

              <p className="microsuction-explainer-caption">
                Microsuction removes wax using controlled suction while the ear
                is visualised clearly throughout the procedure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MicrosuctionExplainer;