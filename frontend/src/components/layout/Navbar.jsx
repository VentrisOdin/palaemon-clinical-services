function Navbar() {
  return (
    <header style={{ padding: "1.25rem 0" }}>
      <div
        className="container glass-card"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
        }}
      >
        {/* Brand */}
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: "700",
            letterSpacing: "0.12rem",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            whiteSpace: "nowrap",
            fontFamily: "inherit", // ← this keeps whatever font you already had
          }}
        >
          Palaemon Clinical Services
        </div>

        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
            color: "var(--color-text-secondary)",
          }}
        >
          <a href="#">Home</a>
          <a href="#">Ear Care</a>
          <a href="#">Pricing</a>
          <a href="#">FAQs</a>

          <a
            href="#"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "var(--radius-sm)",
              background: "var(--color-accent)",
              color: "#000",
              fontWeight: "500",
              transition: "var(--transition-fast)",
            }}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;