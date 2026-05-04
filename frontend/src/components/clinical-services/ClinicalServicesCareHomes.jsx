import { Link } from "react-router-dom";

function ClinicalServicesCareHomes() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="nhs-info-card clinical-highlight-card">
          
          <p className="home-eyebrow">Future service</p>

          <h2 className="home-section-title clinical-highlight-title">
            Future Care Home Clinical Support
          </h2>

          <p className="home-section-copy clinical-highlight-copy">
            Palaemon is developing a paramedic-led service to support care home
            residents through regular clinical visits and structured health
            assessments.
          </p>

          <p className="home-section-copy clinical-highlight-copy">
            The aim is to identify early signs of deterioration, improve
            communication with GPs, and support a more proactive approach to
            resident care.
          </p>

          <p className="home-section-copy clinical-highlight-copy">
            This service is not yet available and will be introduced following
            appropriate registration with the Care Quality Commission (CQC).
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