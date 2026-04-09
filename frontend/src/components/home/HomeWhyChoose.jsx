function HomeWhyChoose() {
  const items = [
    {
      title: "HCPC registered paramedic",
      text: "Ear care delivered by a registered paramedic, bringing clinical judgement, patient safety awareness, and a professional standard that sets Palaemon apart from non-clinical providers.",
    },
    {
      title: "Home visit convenience",
      text: "Appointments take place in the comfort of your own home, avoiding travel, waiting rooms, and unnecessary disruption to your day.",
    },
    {
      title: "Calm, professional approach",
      text: "A straightforward, reassuring service with clear communication, transparent pricing, and a strong focus on patient experience.",
    },
  ];

  return (
    <section
      className="home-section"
      style={{
        paddingTop: "1.25rem",
        paddingBottom: "2.25rem",
      }}
    >
      <div className="container">
        <div className="home-section-stack">
          <div className="home-heading-block">
            <p className="home-eyebrow">Why choose Palaemon Ear Care</p>

            <h2 className="home-section-title">
              Professional ear care with a clear clinical edge
            </h2>

            <p className="home-section-copy">
              Palaemon Ear Care is designed to feel professional, reassuring,
              and straightforward from the first click onwards — combining
              paramedic-led care with the convenience of home visits.
            </p>
          </div>

          <div className="home-card-grid">
            {items.map((item) => (
              <div key={item.title} className="glass-card home-info-card">
                <h3 className="home-card-title">{item.title}</h3>
                <p className="home-card-copy">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeWhyChoose;