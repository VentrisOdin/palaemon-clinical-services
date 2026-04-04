import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <section className="section">
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: "4rem 2rem",
              animation: "riseUp 0.8s ease",
            }}
          >
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.2rem",
                color: "var(--color-accent)",
                marginBottom: "1rem",
              }}
            >
              Palaemon Ear Care
            </p>

            <h1 className="section-title">
              Professional ear wax removal at home
            </h1>

            <p className="section-copy">
              A clinically led, convenient home-visit service designed to make
              ear care simple, accessible, and reassuring.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default App;