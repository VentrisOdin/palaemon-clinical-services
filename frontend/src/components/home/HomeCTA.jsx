import { Link } from "react-router-dom";

function HomeCTA() {
  return (
    <section
      className="home-section"
      style={{
        paddingTop: "0.75rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="container">
        <div className="glass-card home-cta-card">
          <p className="home-eyebrow">Ready to book?</p>

          <h2
            className="home-section-title"
            style={{
              maxWidth: "100%",
            }}
          >
            Book your home ear wax removal appointment
          </h2>

          <p className="home-cta-copy">
            Learn more about the service, see how it works, and take the next
            step toward convenient, professional ear wax removal at home.
          </p>

          <Link to="/ear-care" className="home-primary-button">
            Go to Ear Care
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCTA;