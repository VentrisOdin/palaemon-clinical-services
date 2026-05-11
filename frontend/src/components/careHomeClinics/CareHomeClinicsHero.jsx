import { Link } from "react-router-dom";

function CareHomeClinicsHero() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="home-eyebrow">Care home support</p>

        <h1>Care Home Microsuction Clinic Days</h1>

        <p className="page-hero-copy">
          Professional on-site ear care clinics for care homes, helping
          residents access microsuction in a familiar environment with minimal
          disruption.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <a
  href="mailto:info@palaemonclinicalservices.co.uk?subject=Care%20Home%20Clinic%20Day%20Enquiry"
  className="qr-book-button"
  style={{
    width: "auto",
    minWidth: "260px",
    textAlign: "center",
  }}
>
  Enquire about a clinic day
</a>

          <Link
            to="/booking"
            className="home-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              minHeight: "52px",
              fontWeight: "700",
            }}
          >
            Individual booking
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CareHomeClinicsHero;