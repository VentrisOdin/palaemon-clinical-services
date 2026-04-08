function HomeTrustStrip() {
  const items = [
    "Paramedic-led",
    "HCPC registered",
    "Home visit service",
    "Professional clinical approach",
    "Clear pricing",
  ];

  return (
    <section
      className="section"
      style={{
        paddingTop: "0",
      }}
    >
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: "1.4rem 1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            animation: "riseUp 0.8s ease",
          }}
        >
          {items.map((item) => (
            <div
              key={item}
              style={{
                padding: "0.5rem 0.9rem",
                borderRadius: "999px",
                background: "rgba(76, 201, 240, 0.08)",
                color: "var(--color-accent)",
                fontSize: "0.92rem",
                fontWeight: "500",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeTrustStrip;