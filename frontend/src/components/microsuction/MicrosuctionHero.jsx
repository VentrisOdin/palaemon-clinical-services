import { Link } from "react-router-dom";

function MicrosuctionHero() {
  return (
    <section className="home-hero-section">
      <div className="container">
        <div
          className="glass-card microsuction-hero-card"
        >
          <p className="home-eyebrow">Microsuction</p>

          <h1 className="microsuction-hero-title">
            What is microsuction?
          </h1>

          <p className="home-copy microsuction-hero-copy">
            Microsuction is a safe and effective method of ear wax removal that
            uses gentle suction to remove wax under direct visualisation. It does
            not use water irrigation and allows treatment to be carried out in a
            controlled and precise way.
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