function HomeWhyChoose() {
  const items = [
  {
    title: "HCPC registered paramedic",
    text: "Treatment delivered by a registered paramedic, providing safe, clinically informed care you can trust.",
  },
  {
    title: "Home visit appointments",
    text: "No travel, no waiting rooms — appointments take place in your own home at a time that suits you.",
  },
  {
    title: "Safe, effective treatment",
    text: "Microsuction is a safe and reliable method of ear wax removal, carried out with a calm and professional approach.",
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