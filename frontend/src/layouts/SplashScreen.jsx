import BrandLogo from "../common/BrandLogo";

function SplashScreen() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        background:
          "radial-gradient(circle at center, rgba(76, 201, 240, 0.18), transparent 26%), linear-gradient(180deg, var(--color-bg-secondary) 0%, var(--color-bg-primary) 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          textAlign: "center",
          animation: "logoFloat 0.9s ease",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "320px",
            height: "320px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "220px",
              height: "220px",
              borderRadius: "999px",
              background: "rgba(76, 201, 240, 0.18)",
              filter: "blur(30px)",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <BrandLogo size={260} showText={false} />
          </div>
        </div>

        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: "700",
            letterSpacing: "0.16rem",
            textTransform: "uppercase",
            color: "var(--color-accent)",
          }}
        >
          Palaemon Clinical Services
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;