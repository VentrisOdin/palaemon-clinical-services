function ClinicalServicesPrinciples() {
  const principles = [
    "Structured and consistent clinical observations",
    "Resident-centred assessment",
    "Clear documentation and communication",
    "Working alongside existing healthcare services",
    "Appropriate escalation where required",
    "Professional governance and accountability",
  ];

  return (
    <section className="home-section">
      <div className="container">
        <div className="home-content-block">
          <p className="home-eyebrow">Service principles</p>

          <h2>Built around safe, structured support</h2>

          <p>
            The service is being developed around clear clinical principles,
            with a focus on consistency, communication and working appropriately
            alongside existing care pathways.
          </p>

          <ul className="tick-list">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ClinicalServicesPrinciples;