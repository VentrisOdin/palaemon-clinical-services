import clinicalImage from "../../assets/images/ClinicalServices.jpeg";

function ClinicalServicesHero() {
  return (
    <section className="home-hero-section">
      <div className="container">
        <div className="glass-card pricing-hero-card">
          <div className="pricing-hero-grid">
            <div>
              <p className="home-eyebrow">Future services</p>

              <h1 className="pricing-hero-title">
                Developing future clinical support for people at home and in care settings
              </h1>

              <p className="home-copy pricing-hero-copy">
                Palaemon Clinical Services is being developed beyond ear care, with
                future paramedic-led services planned to support vulnerable people
                through structured assessment, reassurance, and clearer communication
                between care providers and clinicians.
              </p>

              <p className="home-copy pricing-hero-copy">
                These services are not yet available and will only be introduced
                following the appropriate regulatory process, including Care Quality
                Commission registration where required.
              </p>
            </div>

            <div className="pricing-hero-image-wrap">
              <div className="pricing-hero-image-glow" />

              <div className="glass-card pricing-hero-image-card">
                <img
                  src={clinicalImage}
                  alt="Clinical equipment representing planned future paramedic-led services"
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