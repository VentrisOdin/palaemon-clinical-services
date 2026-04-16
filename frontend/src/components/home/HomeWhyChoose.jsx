function HomeWhyChoose() {
  const items = [
    {
      title: "Professional home visits",
      text: "Appointments take place in the comfort of your own home, making ear wax removal simpler, more convenient, and less stressful.",
    },
    {
      title: "Calm and reassuring approach",
      text: "We focus on making each appointment feel clear, comfortable, and straightforward from start to finish.",
    },
    {
      title: "Clear, simple service",
      text: "Microsuction ear wax removal is offered with transparent pricing, convenient booking, and a professional standard of care throughout.",
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
              Professional ear care designed around comfort and convenience
            </h2>

            <p className="home-section-copy">
              Palaemon Ear Care is designed to feel professional, reassuring,
              and straightforward from the first click onwards — combining a
              careful approach with the convenience of home visits.
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