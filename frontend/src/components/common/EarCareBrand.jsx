import logo from "../../assets/branding/palaemon-icon.png";

function EarCareBrand({ size = 40, showText = true, stacked = false }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: stacked ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        gap: stacked ? "0.75rem" : "0.85rem",
        textAlign: "center",
        maxWidth: "100%",
        width: "fit-content",
        margin: "0 auto",
      }}
    >
      <img
        src={logo}
        alt="Palaemon Ear Care logo"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          objectFit: "contain",
          display: "block",
          flexShrink: 0,
        }}
      />

      {showText && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.15rem",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              fontSize: stacked ? "1.15rem" : "1.05rem",
              fontWeight: "700",
              letterSpacing: stacked ? "0.1rem" : "0.06rem",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              lineHeight: 1.2,
              whiteSpace: "normal",
              wordBreak: "normal",
              overflowWrap: "break-word",
            }}
          >
            Palaemon Ear Care
          </div>

          <div
            style={{
              fontSize: "0.8rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.3,
              whiteSpace: "normal",
              wordBreak: "normal",
              overflowWrap: "break-word",
            }}
          >
            A trading name of Palaemon Clinical Services
          </div>
        </div>
      )}
    </div>
  );
}

export default EarCareBrand;