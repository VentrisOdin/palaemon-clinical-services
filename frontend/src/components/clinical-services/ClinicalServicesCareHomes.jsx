import { Link } from "react-router-dom";

function ClinicalServicesCareHomes() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="nhs-info-card clinical-highlight-card">
          <p className="home-eyebrow">Future service</p>

          <h2 className="home-section-title clinical-highlight-title">
            Future Care Home Support
          </h2>

          <p className="home-section-copy clinical-highlight-copy">
            Palaemon is developing a future service aimed at supporting care
            homes with additional visiting support designed to improve
            communication, reassurance, and continuity around resident care.
          </p>

          <p className="home-section-copy clinical-highlight-copy">
            This service is not yet available and will only be introduced as
            part of the wider development of Palaemon’s future services and the
            appropriate regulatory process.
          </p>

          <Link
            to="/future-services"
            className="home-link clinical-highlight-link"
          >
            Learn more about future services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesCareHomes;