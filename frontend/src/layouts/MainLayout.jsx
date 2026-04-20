import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StickyCTA from "../components/common/StickyCTA";

function MainLayout({ children }) {
  return (
    <div
      className="app-shell"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <main style={{ flex: 1 }}>
        {children}
      </main>

      <StickyCTA /> {/* ← ADDED HERE */}
      <Footer />
    </div>
  );
}

export default MainLayout;