function SplashScreen() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
      }}
    >
      <div
        className="glass-card"
        style={{
          padding: "2.5rem 3rem",
          textAlign: "center",
          animation: "fadeIn 0.8s ease",
        }}
      >
        <p
          style={{
            letterSpacing: "0.3rem",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: "0.75rem",
            fontSize: "0.9rem",
          }}
        >
          Palaemon
        </p>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            marginBottom: "0.75rem",
          }}
        >
          Clinical Services
        </h1>

        <p
          style={{
            color: "var(--color-text-secondary)",
            maxWidth: "520px",
            lineHeight: 1.6,
          }}
        >
          Professional home-based ear care and future clinical assessment services.
        </p>
      </div>
    </div>
  );
}

export default SplashScreen;