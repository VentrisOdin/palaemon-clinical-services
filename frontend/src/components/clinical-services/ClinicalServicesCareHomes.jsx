import { Link } from "react-router-dom";

function ClinicalServicesCareHomes() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="nhs-info-card clinical-highlight-card">
          <p className="home-eyebrow">Upcoming service</p>

          <h2 className="home-section-title clinical-highlight-title">
            Care Home Clinical Support
          </h2>

          <p className="home-section-copy clinical-highlight-copy">
            Palaemon Clinical Services is also being developed to support care
            homes with paramedic-led clinical input. The focus is on early
            identification of deterioration, staff reassurance, escalation
            support, and clear documentation.
          </p>

          <p className="home-section-copy clinical-highlight-copy">
            This service is intended to help care home teams feel more
            supported, improve communication around unwell residents, and add a
            clinically informed layer of decision support where appropriate.
          </p>

          <Link to="/care-home-support" className="home-link clinical-highlight-link">
            Learn more about care home clinical support
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesCareHomes;