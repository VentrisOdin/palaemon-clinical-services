function BookingPage() {
  return (
    <section
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "60px 20px",
        color: "var(--color-text-primary)",
      }}
    >
      <h1
        style={{
          fontSize: "2.4rem",
          marginBottom: "0.5rem",
        }}
      >
        Book a Home Visit
      </h1>

      <p
        style={{
          marginBottom: "1.5rem",
          lineHeight: "1.6",
          color: "var(--color-text-secondary)",
        }}
      >
        Professional ear wax removal in the comfort of your home.
      </p>

      {/* Trust signals */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          marginBottom: "2rem",
          fontSize: "0.95rem",
          color: "var(--color-text-secondary)",
        }}
      >
        <span>✔ Fully qualified, HCPC registered paramedic</span>
        <span>✔ Safe microsuction technique</span>
        <span>✔ Home visits</span>
      </div>

      <p
        style={{
          marginBottom: "2rem",
          lineHeight: "1.6",
          color: "var(--color-text-secondary)",
        }}
      >
        Please complete the form below to request an appointment. This is a booking request,
        not a confirmed appointment. We will review your details and contact you to confirm
        suitability and availability.
      </p>

      {/* Styled container */}
      <div
        style={{
          width: "100%",
          padding: "1.5rem",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
        }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScSRbsEhxitkF7RJSdCN9Z701wBMJ7cDnhDTobllrWAWgcNGw/viewform?embedded=true"
          width="100%"
          height="1600"
          style={{
            border: "none",
            borderRadius: "12px",
            background: "#fff",
          }}
          title="Palaemon Ear Care Booking Form"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
}

export default BookingPage;