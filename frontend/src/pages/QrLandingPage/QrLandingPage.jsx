import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BrandLogo from "../../components/common/BrandLogo";
import "./QrLandingPage.css";

function QrLandingPage() {
  return (
    <>
      <Helmet>
        <title>Book your home visit | Palaemon Ear Care</title>
        <meta
          name="description"
          content="Book a home visit ear wax removal appointment with Palaemon Ear Care."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="qr-landing-page">
        <div className="container qr-landing-container">
          <div className="qr-landing-card">
            <div className="qr-logo-wrap">
              <BrandLogo className="qr-logo" />
            </div>

            <p className="qr-eyebrow">Palaemon Ear Care</p>

            <h1 className="qr-title">
              Home visit ear wax removal using microsuction
            </h1>

            <p className="qr-copy">
              Professional, reassuring care in the comfort of your own home.
            </p>

            <p className="qr-trust">
              Home visits from an HCPC-registered paramedic
            </p>

            <div className="qr-actions">
              <Link to="/booking" className="qr-book-button">
                Book now
              </Link>

              <Link to="/" className="qr-site-link">
                View full website
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QrLandingPage;