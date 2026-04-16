function CancellationPage() {
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
            Cancellation Policy
          </h1>

          <p className="home-copy" style={{ marginBottom: "1.5rem" }}>
            We understand that plans can change. This policy explains how
            cancellations, rescheduling, and missed appointments are handled for
            Palaemon Ear Care home visits.
          </p>

          <div className="home-content-block" style={{ maxWidth: "100%" }}>
            <h2 className="home-section-title">Cancelling or rearranging</h2>
            <p className="home-section-copy">
              If you need to cancel or rearrange your appointment, please give
              as much notice as possible so the appointment time can be offered
              to another client.
            </p>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Notice periods
            </h2>
            <ul
              style={{
                paddingLeft: "1.25rem",
                lineHeight: "1.8",
                color: "var(--color-text-secondary)",
              }}
            >
              <li>
                Cancellations or rearrangements made with more than 24 hours’
                notice will not usually incur a charge.
              </li>
              <li>
                Cancellations made with less than 24 hours’ notice may be
                subject to a cancellation charge.
              </li>
              <li>
                Missed appointments, where we attend but are unable to carry out
                the visit because no one is available, may be charged in full or
                in part.
              </li>
            </ul>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Late arrivals and access
            </h2>
            <p className="home-section-copy">
              Please make sure you are available at the agreed appointment time
              and that safe access is available to the property. If access is
              delayed significantly or the appointment cannot go ahead, this may
              be treated as a late cancellation or missed appointment.
            </p>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              If we need to rearrange
            </h2>
            <p className="home-section-copy">
              On rare occasions, we may need to rearrange an appointment due to
              illness, travel delays, emergencies, or other unforeseen
              circumstances. If this happens, we will contact you as soon as
              possible and offer an alternative appointment.
            </p>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Charges
            </h2>
            <p className="home-section-copy">
              Any cancellation or missed appointment charge will be proportionate
              to the notice given and the time lost. Where appropriate, details
              of any charge will be explained clearly.
            </p>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Contacting us
            </h2>
            <p className="home-section-copy">
              To cancel or rearrange an appointment, please contact us as soon
              as possible using the details provided on our Contact page or in
              your booking confirmation.
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

export default CancellationPage;