import clinicalImage from "../../assets/images/ClinicalServices.jpeg";

function ClinicalServicesHero() {
  return (
    <section className="home-hero-section">
      <div className="container">
        <div className="glass-card pricing-hero-card">
          <div className="pricing-hero-grid">
            <div>
              <p className="home-eyebrow">Future Services</p>

              <h1 className="pricing-hero-title">
                A growing range of home-based services planned for the future
              </h1>

              <p className="home-copy pricing-hero-copy">
                Palaemon is being developed to expand beyond ear care, with
                additional services planned for the future as the business grows
                and the appropriate regulatory processes are completed.
              </p>
            </div>

            <div className="pricing-hero-image-wrap">
              <div className="pricing-hero-image-glow" />

              <div className="glass-card pricing-hero-image-card">
                <img
                  src={clinicalImage}
                  alt="Professional equipment for planned future home-based services"
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