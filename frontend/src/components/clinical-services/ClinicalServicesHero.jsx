import clinicalImage from "../../assets/images/ClinicalServices.jpeg";

function ClinicalServicesHero() {
  return (
    <section className="home-hero-section">
      <div className="container">
        <div className="glass-card pricing-hero-card">
          <div className="pricing-hero-grid">
            <div>
              <p className="home-eyebrow">Clinical Services</p>

              <h1 className="pricing-hero-title">
                A growing range of paramedic-led clinical services
              </h1>

              <p className="home-copy pricing-hero-copy">
                Palaemon Clinical Services is being developed to expand beyond
                ear care, offering a range of structured assessments including
                cardiovascular, respiratory, and neurological screening.
              </p>
            </div>

            <div className="pricing-hero-image-wrap">
              <div className="pricing-hero-image-glow" />

              <div className="glass-card pricing-hero-image-card">
                <img
                  src={clinicalImage}
                  alt="Clinical equipment used for health assessments"
                  className="pricing-hero-image"
                />

                <div className="pricing-hero-image-overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesHero;