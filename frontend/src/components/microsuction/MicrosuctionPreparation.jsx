function MicrosuctionPreparation() {
  return (
    <section
      className="home-section"
      style={{ marginTop: "2.5rem" }}
    >
      <div className="container" style={{ maxWidth: "820px" }}>
        <div
          className="glass-card"
          style={{
            padding: "2rem",
            animation: "riseUp 0.8s ease",
          }}
        >
          {/* EYEBROW */}
          <p
            className="home-eyebrow"
            style={{ marginBottom: "0.75rem" }}
          >
            Before your appointment
          </p>

          {/* TITLE */}
          <h2
            className="home-section-title"
            style={{ marginBottom: "1rem", textAlign: "center" }}
          >
            How to prepare for microsuction
          </h2>

          {/* INTRO */}
          <p
            className="home-section-copy"
            style={{ marginBottom: "1.75rem", textAlign: "center" }}
          >
            Preparing your ears beforehand can help make treatment safer, more
            comfortable, and more likely to be completed successfully in one
            visit.
          </p>

          {/* SECTION */}
          <h3 className="home-card-title" style={{ marginBottom: "0.75rem" }}>
            Soften the wax before your appointment
          </h3>

          <p className="home-section-copy" style={{ marginBottom: "1rem" }}>
            If you believe you have a build-up of ear wax, we recommend using an
            olive oil spray or drops for{" "}
            <strong>3 to 5 days before your appointment</strong>. This helps to
            soften the wax and can make removal easier.
          </p>

          <ul
            style={{
              marginBottom: "1.5rem",
              paddingLeft: "1.25rem",
              lineHeight: 1.8,
            }}
          >
            <li>Use 2 to 3 drops in the affected ear</li>
            <li>Apply twice daily, morning and evening</li>
            <li>Lie on your side for a few minutes after applying</li>
            <li>
              A small amount of oil may come back out afterwards, which is normal
            </li>
          </ul>

          <p className="home-section-copy" style={{ marginBottom: "1.5rem" }}>
            Olive oil ear sprays and drops are available from most pharmacies.
          </p>

          {/* IMPORTANT ADVICE */}
          <h3 className="home-card-title" style={{ marginBottom: "0.75rem" }}>
            Important advice
          </h3>

          <ul
            style={{
              marginBottom: "1.5rem",
              paddingLeft: "1.25rem",
              lineHeight: 1.8,
            }}
          >
            <li>Do not insert cotton buds or any objects into the ear</li>
            <li>Do not use ear candles</li>
            <li>If you wear hearing aids, remove them before applying drops</li>
          </ul>

          {/* NHS BLUE IMPORTANT BOX */}
          <div
            style={{
              background: "#005EB8",
              color: "#ffffff",
              borderRadius: "18px",
              padding: "1.5rem",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.16rem",
                textTransform: "uppercase",
                opacity: 0.9,
                marginBottom: "0.5rem",
              }}
            >
              Important
            </div>

            <div
              style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                fontWeight: "500",
              }}
            >
              Do not use olive oil drops if you have significant ear pain, ear
              discharge, a known perforated eardrum, or recent ear surgery,
              unless you have been advised it is safe to do so. If you are unsure,
              please contact us before your appointment.
            </div>
          </div>

          {/* SUBTLE INFO BOX */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.45)",
              border: "1px solid rgba(0, 94, 184, 0.12)",
              borderRadius: "16px",
              padding: "1rem 1.1rem",
            }}
          >
            <h3
              className="home-card-title"
              style={{ marginBottom: "0.65rem" }}
            >
              What if no wax is found?
            </h3>

            <p className="home-section-copy" style={{ marginBottom: 0 }}>
              In some cases, symptoms such as blocked ears or reduced hearing
              may not be caused by wax. If no wax is found, or if microsuction
              is not clinically appropriate, we will explain what we have found
              and advise you on the next best steps. A consultation and ear
              assessment still takes place during the visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MicrosuctionPreparation;