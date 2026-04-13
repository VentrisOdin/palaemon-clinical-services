import { Link } from "react-router-dom";
import CareHomeImage from "../assets/images/CareHomeSupport.jpeg";

function CareHomeSupport() {
  const offerItems = [
    {
      title: "Clinical assessment support",
      text: "Paramedic-led visits designed to help assess unwell residents, identify concerns early, and support appropriate next steps.",
    },
    {
      title: "Escalation support",
      text: "Support for care home staff when deciding whether a resident may need further medical review, urgent assessment, or escalation.",
    },
    {
      title: "Staff reassurance",
      text: "Helping staff feel more confident when managing deterioration concerns, uncertainty, or changes in a resident’s condition.",
    },
    {
      title: "Clear documentation",
      text: "Structured clinical documentation to support communication, continuity, and handover where required.",
    },
  ];

  const assessmentItems = [
    {
      title: "Respiratory assessment",
      text: "Focused respiratory review including clinical observations and assessment of breathing, oxygenation, and changes from baseline.",
    },
    {
      title: "Cardiovascular review",
      text: "Assessment of pulse, perfusion, and cardiovascular status to support early identification of concerns.",
    },
    {
      title: "ECG recording",
      text: "ECG assessment where appropriate, providing structured information that may support onward clinical review.",
    },
    {
      title: "Structured observations",
      text: "Recording and documenting key observations to support monitoring, escalation decisions, and communication with other services.",
    },
  ];

  const outcomes = [
    "Earlier recognition of deterioration",
    "Greater confidence for care home staff",
    "Improved communication and documentation",
    "Support for appropriate escalation decisions",
    "An additional clinically informed layer of reassurance",
  ];

  const emailLink =
    "mailto:info@palaemonclinicalservices.co.uk?subject=Care Home Clinical Support Enquiry&body=Hi,%0D%0A%0D%0AI manage a care home and would like to discuss your clinical support service.%0D%0A%0D%0AName:%0D%0ACare Home:%0D%0ALocation:%0D%0A%0D%0AThanks";

  return (
    <>
      {/* HERO */}
      <section className="home-hero-section">
        <div className="container">
          <div className="glass-card pricing-hero-card">
            <div className="pricing-hero-grid">
              <div className="home-content-block">
                <p className="home-eyebrow">Care Home Clinical Support</p>

                <h1 className="pricing-hero-title">
                  Paramedic-led clinical support for care homes
                </h1>

                <p className="home-copy pricing-hero-copy">
                  Palaemon Clinical Services is developing a care home support
                  service designed to help staff identify deterioration earlier,
                  feel more supported when residents become unwell, and make more
                  confident escalation decisions where needed.
                </p>

                <div className="home-button-row">
                  <a href={emailLink} className="home-primary-button">
                    Enquire about care home support
                  </a>

                  <Link
                    to="/clinical-services"
                    className="home-secondary-button"
                  >
                    Back to Clinical Services
                  </Link>
                </div>
              </div>

              <div className="pricing-hero-image-wrap">
                <div className="pricing-hero-image-glow" />

                <div className="glass-card pricing-hero-image-card">
                  <img
                    src={CareHomeImage}
                    alt="Clinician supporting an elderly resident in a care home setting"
                    className="pricing-hero-image"
                  />

                  <div className="pricing-hero-image-overlay" />

                  <div className="home-hero-image-caption image-caption-strong">
                    <p className="home-hero-image-caption-label">
                      Community-based care
                    </p>
                    <p className="home-hero-image-caption-copy">
                      Supporting residents with structured clinical assessment
                      and reassurance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="home-section">
        <div className="container">
          <div className="home-content-block">
            <p className="home-eyebrow">The problem</p>

            <h2 className="home-section-title">
              Care homes often need timely clinical support when a resident
              becomes unwell
            </h2>

            <p className="home-section-copy clinical-highlight-copy">
              Many care home teams are managing residents with increasingly
              complex health needs, often in situations where a resident’s
              condition has changed but the best next step is not always clear.
            </p>

            <p className="home-section-copy clinical-highlight-copy">
              The aim of this service is to provide an additional layer of
              paramedic-led clinical support, helping staff feel more confident,
              supporting earlier identification of deterioration, and improving
              communication around escalation where appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="home-section">
        <div className="container">
          <div className="home-content-block">
            <p className="home-eyebrow">What we will offer</p>

            <h2 className="home-section-title">
              Practical, clinically informed support for care home teams
            </h2>
          </div>

          <div className="home-card-grid">
            {offerItems.map((item) => (
              <div
                key={item.title}
                className="glass-card home-info-card nhs-info-card"
              >
                <h3 className="home-card-title">{item.title}</h3>
                <p className="home-card-copy">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGULAR HEALTH ASSESSMENTS */}
      <section className="home-section">
        <div className="container">
          <div className="home-content-block">
            <p className="home-eyebrow">Regular resident reviews</p>

            <h2 className="home-section-title">
              Structured health assessments to support ongoing care
            </h2>

            <p className="home-section-copy clinical-highlight-copy">
              As part of this service, paramedic-led visits may include
              structured health assessments for residents, helping to identify
              changes early and provide clear, up-to-date clinical information
              when needed.
            </p>

            <p className="home-section-copy clinical-highlight-copy">
              These reviews are designed to support care home teams in
              recognising deterioration, improving communication, and providing
              additional reassurance when a resident’s condition changes.
            </p>
          </div>

          <div className="home-card-grid">
            {assessmentItems.map((item) => (
              <div
                key={item.title}
                className="glass-card home-info-card nhs-info-card"
              >
                <h3 className="home-card-title">{item.title}</h3>
                <p className="home-card-copy">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORTING EXISTING SERVICES */}
      <section className="home-section">
        <div className="container">
          <div className="nhs-info-card clinical-highlight-card">
            <p className="home-eyebrow">Clinical scope</p>

            <h2 className="home-section-title clinical-highlight-title">
              Supporting existing healthcare services
            </h2>

            <p className="home-section-copy clinical-highlight-copy">
              These assessments are intended to provide structured clinical
              information and support care home staff. They do not replace GP
              care, emergency services, or specialist medical review.
            </p>

            <p className="home-section-copy clinical-highlight-copy">
              Any findings are documented clearly and may support communication
              with GPs, ambulance clinicians, and other healthcare professionals
              where escalation is required.
            </p>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="home-section">
        <div className="container">
          <div className="nhs-info-card clinical-highlight-card">
            <p className="home-eyebrow">What this may help with</p>

            <h2 className="home-section-title clinical-highlight-title">
              Better support, clearer decisions, and safer communication
            </h2>

            <div className="clinical-list">
              {outcomes.map((item) => (
                <div key={item} className="clinical-list-item">
                  <span className="clinical-list-icon">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILOT */}
      <section className="home-section">
        <div className="container">
          <div className="home-content-block">
            <p className="home-eyebrow">Pilot approach</p>

            <h2 className="home-section-title">
              Starting with a simple pilot model
            </h2>

            <p className="home-section-copy clinical-highlight-copy">
              The intended go-to-market approach is to begin with a pilot model
              for independent care homes or small groups of homes, allowing the
              service to be tested in a practical and low-risk way before moving
              to longer-term arrangements.
            </p>

            <p className="home-section-copy clinical-highlight-copy">
              This allows care homes to evaluate value, staff experience, and
              service fit before considering an ongoing support arrangement.
            </p>
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="home-section">
        <div className="container">
          <div className="nhs-info-card clinical-highlight-card">
            <p className="home-eyebrow">Important scope note</p>

            <h2 className="home-section-title clinical-highlight-title">
              Additional clinical support, not a replacement for existing
              services
            </h2>

            <p className="home-section-copy clinical-highlight-copy">
              This service is intended to provide an additional layer of
              clinical support for care homes. It is not intended to replace GP
              services, district nursing, emergency services, or established
              pathways for urgent medical care.
            </p>

            <p className="home-section-copy clinical-highlight-copy">
              Any future service would operate within professional scope of
              practice, with clear documentation, appropriate governance, and
              defined escalation boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-section section-tight">
        <div className="container">
          <div className="home-cta-card nhs-tile">
            <h2 className="home-section-title">
              Interested in care home support?
            </h2>

            <p className="home-cta-copy">
              If you run or manage a care home and would like to discuss this
              upcoming service, get in touch to register interest.
            </p>

            <a
              href={emailLink}
              className="home-secondary-button"
              style={{
                background: "#ffffff",
                color: "var(--color-accent)",
                border: "none",
              }}
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareHomeSupport;