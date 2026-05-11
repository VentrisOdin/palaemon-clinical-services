import { Link } from "react-router-dom";

function ClinicalServicesCTA() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="home-content-block">
          <p className="home-eyebrow">Current position</p>

          <h2>Starting with practical care home services</h2>

          <p>
            While wider clinical support services are being developed, Palaemon
            currently offers care home microsuction clinic days as a practical
            first step in supporting residents on-site.
          </p>

          <p>
            This gives care homes an immediate, useful service while Palaemon
            continues to build the wider clinical support model.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            <Link
              to="/care-home-clinics"
              className="qr-book-button"
              style={{
                width: "auto",
                minWidth: "260px",
                textAlign: "center",
              }}
            >
              View care home clinic days
            </Link>

            <a
              href="mailto:info@palaemonclinicalservices.co.uk?subject=Care%20Home%20Clinical%20Support%20Enquiry"
              className="home-link"
              style={{ fontWeight: "700" }}
            >
              Discuss future clinical support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesCTA;