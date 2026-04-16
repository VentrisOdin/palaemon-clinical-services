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
              A gentle and precise method of ear wax removal
            </h2>

            <p
              className="home-section-copy"
              style={{
                marginBottom: "1rem",
              }}
            >
              During microsuction, a small suction device is used to carefully
              remove excess wax while the ear is viewed clearly throughout the
              process. This allows ear wax removal to be carried out in a
              controlled and precise way.
            </p>

            <p className="home-section-copy">
              Because microsuction does not rely on water irrigation, it is often
              chosen as a clean and comfortable method of ear wax removal.
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
                Microsuction removes wax using gentle suction while the ear is
                clearly visualised throughout the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MicrosuctionExplainer;