import { Link } from "react-router-dom";

function MicrosuctionHero() {
  return (
    <section className="home-hero-section">
      <div className="container">
        <div className="glass-card microsuction-hero-card">
          <p className="home-eyebrow">Microsuction</p>

          <h1 className="microsuction-hero-title">
            What is microsuction?
          </h1>

          <p className="home-copy microsuction-hero-copy">
            Microsuction is a gentle method of ear wax removal that uses light
            suction to remove excess wax under direct visual guidance. It does
            not use water irrigation and allows ear wax removal to be carried
            out in a careful and precise way.
          </p>

          <div className="home-button-row">
            <Link to="/booking" className="home-primary-button">
              Book Appointment
            </Link>

            <Link to="/ear-care" className="home-secondary-button">
              Back to Ear Care
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MicrosuctionHero;