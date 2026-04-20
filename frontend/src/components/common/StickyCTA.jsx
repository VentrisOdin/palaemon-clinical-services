import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function StickyCTA() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  // Hide on booking page
  if (location.pathname === "/booking") {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      to="/booking"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 1000,
        background: "#005EB8",
        color: "#ffffff",
        textDecoration: "none",
        fontWeight: "700",
        fontSize: "0.95rem",
        padding: "0.85rem 1.15rem",
        borderRadius: "999px",
        boxShadow: "0 10px 24px rgba(0, 0, 0, 0.18)",

        // ✨ Animation
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      Book Home Visit
    </Link>
  );
}

export default StickyCTA;