import { Link } from "react-router-dom";

function PricingCards() {
  const prices = [
    {
      title: "Ear Wax Removal (Both Ears)",
      price: "£80",
      text: "Includes full ear assessment and microsuction treatment for both ears where appropriate.",
    },
    {
      title: "Single Ear Treatment",
      price: "£50",
      text: "Includes full ear assessment and microsuction treatment for one ear where required.",
    },
    {
      title: "Consultation Only",
      price: "£40",
      text: "If no microsuction treatment is required following assessment.",
    },
    {
      title: "Follow-up Appointment",
      price: "£50",
      text: "If a second visit is needed for further treatment following the initial appointment.",
    },
  ];

  return (
    <section
      className="home-section"
      style={{
        paddingTop: "2rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="container">
        <div className="home-card-grid">
          {prices.map((item) => (
            <div
              key={item.title}
              className="glass-card home-info-card nhs-tile"
              style={{ padding: "1.6rem" }}
            >
              <h2
                style={{
                  fontSize: "1.1rem",
                  margin: "0 0 0.75rem 0",
                }}
              >
                {item.title}
              </h2>

              <div
                style={{
                  fontSize: "1.9rem",
                  fontWeight: "700",
                  color: "#ffffff",
                  marginBottom: "0.85rem",
                }}
              >
                {item.price}
              </div>

              <p className="home-card-copy">{item.text}</p>
            </div>
          ))}
        </div>

        <div
          className="nhs-info-card"
          style={{
            marginTop: "1.5rem",
            padding: "1.5rem",
            maxWidth: "900px",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "var(--color-text-secondary)",
              lineHeight: "1.7",
            }}
          >
            Treatment suitability is assessed at the appointment. If you are
            unsure whether ear wax removal is required, you can book an
            assessment or review the FAQs before booking. No treatment is
            carried out unless clinically appropriate.
          </p>

          <div style={{ marginTop: "1rem" }}>
            <Link to="/faqs" className="home-link">
              Read FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingCards;