function ComplaintsPage() {
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
            Complaints
          </h1>

          <p className="home-copy" style={{ marginBottom: "1.5rem" }}>
            We aim to provide a professional, respectful, and reassuring service
            at all times. If you are unhappy with any part of your experience,
            we want to hear from you so we can try to put things right.
          </p>

          <div className="home-content-block" style={{ maxWidth: "100%" }}>
            <h2 className="home-section-title">How to make a complaint</h2>
            <p className="home-section-copy">
              If you wish to make a complaint, please contact us as soon as
              possible with as much detail as you can provide, including your
              name, the date of your appointment, and the nature of your
              concern.
            </p>
            <p className="home-section-copy">
              Complaints can be made by email, phone, or in writing using the
              contact details below:
            </p>

            <div
              className="glass-card"
              style={{
                padding: "1.25rem",
                marginTop: "1rem",
                borderRadius: "16px",
              }}
            >
              <p className="home-section-copy" style={{ marginBottom: "0.5rem" }}>
                <strong>Email:</strong> info@palaemonclinicalservices.co.uk
              </p>
              <p className="home-section-copy" style={{ marginBottom: "0.5rem" }}>
                <strong>Phone:</strong> 07738095862
              </p>
              <p className="home-section-copy" style={{ marginBottom: 0 }}>
                <strong>Address:</strong> 1 Noreuil Road, Petersfield, Hants,
                GU32 3BA
              </p>
            </div>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              What happens next
            </h2>
            <p className="home-section-copy">
              We will aim to acknowledge your complaint promptly and review the
              information provided carefully.
            </p>
            <p className="home-section-copy">
              Where appropriate, we will investigate the matter and respond with
              an explanation of our findings and any steps we will take in
              response.
            </p>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Timescales
            </h2>
            <p className="home-section-copy">
              We aim to acknowledge complaints within 3 working days and provide
              a full response within 20 working days where possible. If more
              time is needed, we will let you know.
            </p>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              Our approach
            </h2>
            <p className="home-section-copy">
              We take complaints seriously and use them as an opportunity to
              improve our service. Making a complaint will not affect how you
              are treated in future.
            </p>

            <h2 className="home-section-title" style={{ marginTop: "2rem" }}>
              If you remain dissatisfied
            </h2>
            <p className="home-section-copy">
              If you remain unhappy after receiving our response, you may wish
              to seek independent advice or contact any relevant professional,
              legal, or regulatory body where appropriate.
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

export default ComplaintsPage;