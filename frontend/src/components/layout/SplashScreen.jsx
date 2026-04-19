import logo from "../../assets/branding/palaemon-icon.png";

function SplashScreen() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        background:
          "radial-gradient(circle at center, rgba(0, 94, 184, 0.18), transparent 26%), linear-gradient(180deg, var(--color-bg-secondary) 0%, var(--color-bg-primary) 100%)",
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
              background: "rgba(0, 94, 184, 0.18)",
              filter: "blur(30px)",
            }}
          />

          <img
            src={logo}
            alt="Palaemon Clinical Services logo"
            style={{
              width: "280px",
              height: "280px",
              objectFit: "contain",
              display: "block",
              position: "relative",
              zIndex: 1,
            }}
          />
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