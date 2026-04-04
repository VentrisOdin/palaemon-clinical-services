import logo from "../../assets/branding/palaemon-icon.png";

function BrandLogo({ size = 40 }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.85rem",
        whiteSpace: "nowrap",
      }}
    >
      <img
        src={logo}
        alt="Palaemon Clinical Services logo"
        style={{
          height: `${size}px`,
          width: "auto",
          display: "block",
        }}
      />

      <div
        style={{
          fontSize: "1.2rem",
          fontWeight: "700",
          letterSpacing: "0.12rem",
          textTransform: "uppercase",
          color: "var(--color-accent)",
        }}
      >
        Palaemon Clinical Services
      </div>
    </div>
  );
}

export default BrandLogo;