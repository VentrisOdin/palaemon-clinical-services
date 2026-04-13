import faqImage from "../../assets/images/FAQ.jpeg";

function FAQHero() {
  return (
    <section className="home-hero-section">
      <div className="container">
        <div className="glass-card faq-hero-card">
          <div className="pricing-hero-grid">
            <div>
              <p className="home-eyebrow">FAQs</p>

              <h1 className="faq-hero-title">
                Common questions about ear care and microsuction
              </h1>

              <p className="home-copy faq-hero-copy">
                Clear, straightforward answers to help you understand the
                process, what to expect, and whether treatment is right for you.
              </p>
            </div>

            <div className="pricing-hero-image-wrap">
              <div className="pricing-hero-image-glow" />

              <div className="glass-card pricing-hero-image-card">
                <img
                  src={faqImage}
                  alt="Clinician discussing treatment with patient"
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

export default FAQHero;