import logo from "../../assets/branding/palaemon-icon.svg";

function BrandLogo({ size = 40, showText = true, stacked = false }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: stacked ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        gap: stacked ? "1.5rem" : "0.85rem",
        textAlign: "center",
        whiteSpace: stacked ? "normal" : "nowrap",
      }}
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: "var(--color-accent)",
          WebkitMask: `url(${logo}) center / contain no-repeat`,
          mask: `url(${logo}) center / contain no-repeat`,
          flexShrink: 0,
        }}
      />

      {showText && (
        <div
          style={{
            fontSize: stacked ? "1.35rem" : "1.2rem",
            fontWeight: "700",
            letterSpacing: stacked ? "0.14rem" : "0.12rem",
            textTransform: "uppercase",
            color: "var(--color-accent)",
          }}
        >
          Palaemon Clinical Services
        </div>
      )}
    </div>
  );
}

export default BrandLogo;