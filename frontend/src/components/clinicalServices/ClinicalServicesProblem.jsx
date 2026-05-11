function ClinicalServicesProblem() {
  const challenges = [
    {
      title: "Early concerns can be difficult to evidence",
      text: "Care home staff may recognise subtle changes in a resident, but may not always have structured clinical observations to support that concern.",
    },
    {
      title: "Information can become fragmented",
      text: "Residents may be supported by multiple services, making clear documentation and consistent communication especially important.",
    },
    {
      title: "Timely review matters",
      text: "When changes are identified earlier and communicated clearly, care teams may be better placed to seek appropriate clinical review.",
    },
  ];

  return (
    <section className="home-section">
      <div className="container">
        <div className="home-content-block">
          <p className="home-eyebrow">The challenge</p>

          <h2>
            Supporting earlier recognition of changes in resident condition
          </h2>

          <p>
            Care home staff know their residents well and are often the first
            to recognise when somebody’s condition, behaviour or presentation
            appears to have changed.
          </p>

          <p>
            The challenge is ensuring those concerns are supported by clear,
            structured observations and communicated effectively to the right
            healthcare professionals.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "1.25rem",
            marginTop: "2rem",
          }}
        >
          {challenges.map((challenge) => (
            <div className="info-card" key={challenge.title}>
              <h3>{challenge.title}</h3>
              <p>{challenge.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesProblem;