import Navbar from "../components/layout/Navbar";

function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;