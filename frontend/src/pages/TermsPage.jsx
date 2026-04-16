function TermsPage() {
  return (
    <section className="home-section">
      <div className="container" style={{ maxWidth: "900px" }}>
        <div
          className="glass-card"
          style={{
            padding: "2.25rem",
            animation: "riseUp 0.8s ease",
          }}
        >
          <p className="home-eyebrow">Legal</p>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              lineHeight: "1.1",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Terms & Conditions
          </h1>

          <p className="home-copy" style={{ marginBottom: "1.5rem" }}>
            These Terms & Conditions apply to all services provided by Palaemon
            Ear Care. By booking an appointment, you agree to the terms set out
            below.
          </p>

          <div className="home-content-block" style={{ maxWidth: "100%" }}>
            <h2 className="home-section-title">About us</h2>
            <p className="home-section-copy">
              Palaemon Ear Care is a trading name of Palaemon Clinical Services.
              Services are provided as home visit appointments for ear wax
              removal using microsuction.
            </p>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Booking and appointments
            </h2>
            <ul className="home-section-copy" style={{ paddingLeft: "1.25rem" }}>
              <li>
                All bookings are requests and are not confirmed until you have
                been contacted and an appointment is agreed.
              </li>
              <li>
                Appointment times are agreed in advance and may be subject to
                change where necessary.
              </li>
              <li>
                We reserve the right to decline or rearrange appointments where
                appropriate.
              </li>
            </ul>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Suitability of service
            </h2>
            <p className="home-section-copy">
              Our service is intended for ear wax removal where appropriate.
              During the visit, we will check whether it is suitable to proceed.
            </p>
            <p className="home-section-copy">
              We reserve the right not to proceed if:
            </p>
            <ul style={{ paddingLeft: "1.25rem", lineHeight: "1.8" }}>
              <li>No ear wax is present</li>
              <li>Wax cannot be safely removed during the visit</li>
              <li>
                There are symptoms that may require further advice from a GP or
                another healthcare professional
              </li>
            </ul>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Pricing and payment
            </h2>
            <ul style={{ paddingLeft: "1.25rem", lineHeight: "1.8" }}>
              <li>
                The standard fee for ear wax removal (home visit) is £80.
              </li>
              <li>
                If we are unable to proceed, or no wax is present, a reduced
                visit fee of £50 applies.
              </li>
              <li>
                Payment terms will be confirmed at the time of booking.
              </li>
            </ul>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Cancellations and rescheduling
            </h2>
            <p className="home-section-copy">
              If you need to cancel or rearrange your appointment, please provide
              as much notice as possible.
            </p>
            <ul style={{ paddingLeft: "1.25rem", lineHeight: "1.8" }}>
              <li>
                Cancellations with sufficient notice will not incur a charge.
              </li>
              <li>
                Late cancellations or missed appointments may be subject to a
                charge.
              </li>
            </ul>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Your responsibilities
            </h2>
            <ul style={{ paddingLeft: "1.25rem", lineHeight: "1.8" }}>
              <li>
                Provide accurate information when booking, including any relevant
                symptoms or history.
              </li>
              <li>
                Follow any preparation advice provided before your appointment.
              </li>
              <li>
                Ensure safe and reasonable access to your home for the
                appointment.
              </li>
            </ul>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Limitation of liability
            </h2>
            <p className="home-section-copy">
              While every effort is made to provide a safe and professional
              service, we cannot guarantee outcomes in all cases.
            </p>
            <p className="home-section-copy">
              To the fullest extent permitted by law, Palaemon Clinical Services
              shall not be liable for any indirect or consequential loss arising
              from the use of our services.
            </p>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Complaints
            </h2>
            <p className="home-section-copy">
              If you are unhappy with any aspect of the service, please contact
              us so we can try to resolve the issue promptly.
            </p>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Changes to these terms
            </h2>
            <p className="home-section-copy">
              We may update these Terms & Conditions from time to time. The
              latest version will always be available on this page.
            </p>

            <p className="home-section-copy" style={{ marginTop: "2rem" }}>
              <strong>Last updated:</strong> 16 April 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsPage;