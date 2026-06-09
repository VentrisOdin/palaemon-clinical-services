import { Link } from "react-router-dom";
import EarCareBrand from "../components/common/EarCareBrand";

function NoEarWaxPage() {
  const causes = [
    {
      title: "Fluid behind the eardrum",
      text: "Middle ear fluid can cause pressure, muffled hearing and a blocked sensation even when there is no wax present.",
    },
    {
      title: "Eustachian tube dysfunction",
      text: "Problems equalising pressure can cause fullness, popping, pressure changes and reduced hearing.",
    },
    {
      title: "Ear infection or inflammation",
      text: "Pain, discharge, irritation or inflammation may need medical advice rather than microsuction.",
    },
    {
      title: "Changes to the eardrum",
      text: "The appearance of the tympanic membrane can sometimes suggest an issue that needs GP review.",
    },
    {
      title: "Hearing loss unrelated to wax",
      text: "Some hearing changes are not caused by wax and may need further assessment through routine healthcare pathways.",
    },
    {
      title: "Other ear conditions",
      text: "Some less common ear problems can feel very similar to wax blockage but require different advice.",
    },
  ];

  const assessmentPoints = [
    "A professional examination of the ear canal and eardrum",
    "A clear explanation of what has been seen",
    "Advice on likely causes of symptoms",
    "Guidance on appropriate next steps",
    "GP signposting where further assessment may be needed",
  ];

  return (
    <>
      <section className="home-hero-section">
        <div className="container">
          <div className="glass-card microsuction-hero-card">
            <div className="home-ear-care-brand-wrap">
              <EarCareBrand />
            </div>

            <p className="home-eyebrow">Professional Ear Assessment</p>

            <h1 className="microsuction-hero-title">
              Blocked ears aren&apos;t always caused by ear wax
            </h1>

            <p className="home-copy microsuction-hero-copy">
              Many people book expecting wax to be the cause of blocked ears,
              muffled hearing or ear fullness. Sometimes wax is present and can
              be removed. Sometimes the assessment identifies something else
              that needs a different approach.
            </p>

            <div className="home-button-row">
              <Link to="/booking" className="home-primary-button">
                Book Assessment
              </Link>

              <Link to="/faqs" className="home-secondary-button">
                Back to FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section section-tight">
        <div className="container">
          <div className="nhs-info-card glass-card home-info-card">
            <p className="home-eyebrow">Assessment first</p>

            <h2 className="home-section-title">
              The appointment is not just “wax removal”
            </h2>

            <p className="home-section-copy">
              Every appointment begins with a professional examination of the
              ear canal and eardrum. If wax is present and microsuction is
              clinically appropriate, treatment can usually be carried out
              during the same visit.
            </p>

            <p className="home-section-copy" style={{ marginTop: "1rem" }}>
              If wax is not the cause, you will still receive a clear
              explanation of the findings and advice on the most appropriate
              next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="home-heading-block">
            <p className="home-eyebrow">Why assessment matters</p>

            <h2 className="home-section-title">
              Blocked ears can have several different causes
            </h2>

            <p className="home-section-copy">
              Symptoms can feel very similar even when the underlying cause is
              different. This is why the ear is examined before any procedure is
              considered.
            </p>
          </div>

          <div className="home-card-grid" style={{ marginTop: "2rem" }}>
            {causes.map((cause) => (
              <div key={cause.title} className="glass-card home-info-card">
                <h3 className="home-card-title">{cause.title}</h3>
                <p className="home-card-copy">{cause.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="nhs-tile glass-card home-info-card">
            <p className="home-eyebrow" style={{ color: "#ffffff" }}>
              If no wax is found
            </p>

            <h2 className="home-section-title">
              Your appointment is still valuable
            </h2>

            <p className="home-section-copy" style={{ color: "#ffffff" }}>
              Microsuction will not be carried out unless it is clinically
              appropriate. If no significant wax is present, the appointment
              still provides useful clinical information and reassurance.
            </p>

            <div
              style={{
                display: "grid",
                gap: "0.8rem",
                marginTop: "1.5rem",
              }}
            >
              {assessmentPoints.map((point) => (
                <p
                  key={point}
                  style={{
                    margin: 0,
                    color: "#ffffff",
                    lineHeight: "1.6",
                    fontWeight: 500,
                  }}
                >
                  ✓ {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="home-cta-card glass-card">
            <p className="home-eyebrow">Our approach</p>

            <h2 className="home-section-title" style={{ margin: "0 auto 1rem" }}>
              Honest clinical assessment comes first
            </h2>

            <p className="home-cta-copy">
              Sometimes the most useful outcome is finding that ear wax is not
              the problem. That helps avoid unnecessary treatment and points you
              towards the right next step.
            </p>

            <div className="home-button-row" style={{ justifyContent: "center" }}>
              <Link to="/booking" className="home-primary-button">
                Book Assessment
              </Link>

              <Link to="/contact" className="home-secondary-button">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NoEarWaxPage;