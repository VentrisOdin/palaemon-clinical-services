import logo from "../../assets/branding/palaemon-icon.svg";

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
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "var(--color-accent)",
          maskImage: `url(${logo})`,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "contain",
          WebkitMaskImage: `url(${logo})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "contain",
          flexShrink: 0,
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