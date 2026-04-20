import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function StickyCTA() {
  const location = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (location.pathname === "/booking") {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => navigate("/booking")}
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 1000,
        background: "#005EB8",
        color: "#ffffff",
        border: "none",
        cursor: "pointer",
        fontWeight: "700",
        fontSize: "0.95rem",
        padding: "0.85rem 1.15rem",
        borderRadius: "999px",
        boxShadow: "0 10px 24px rgba(0, 0, 0, 0.18)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      Book Home Visit
    </button>
  );
}

export default StickyCTA;