import logo from "../../assets/branding/palaemon-icon.svg";

function EarCareBrand({ size = 40, showText = true, stacked = false }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: stacked ? "column" : "row",
        alignItems: "center",            // ✅ FIXED (always centered)
        justifyContent: "center",
        gap: stacked ? "0.75rem" : "0.85rem",
        textAlign: "center",             // ✅ FIXED
        maxWidth: "100%",
        width: "fit-content",            // ✅ CRITICAL for true centering
        margin: "0 auto",                // ✅ ensures center in parent
      }}
    >
      {/* Logo */}
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

      {/* Text */}
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

              // ✅ SAFE WRAPPING (no broken words)
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