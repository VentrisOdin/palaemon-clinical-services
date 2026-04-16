import { ShieldCheck, House, ClipboardCheck } from "lucide-react";

function EarCareWhyChoose() {
  const items = [
    {
      title: "Professional home visits",
      text: "Appointments take place in the comfort of your own home, making ear wax removal simpler, more convenient, and less stressful.",
      icon: House,
    },
    {
      title: "Calm and reassuring approach",
      text: "We focus on making each appointment feel clear, comfortable, and straightforward from start to finish.",
      icon: ShieldCheck,
    },
    {
      title: "Clear and simple process",
      text: "Straightforward booking, transparent pricing, and a professional experience throughout.",
      icon: ClipboardCheck,
    },
  ];

  return (
    <section className="section section-tight" id="why-choose-ear-care">
      <div className="container">
        <div
          style={{
            display: "grid",
            gap: "1.75rem",
          }}
        >
          <div
            style={{
              maxWidth: "860px",
              animation: "riseUp 0.8s ease",
            }}
          >
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.16rem",
                color: "var(--color-accent)",
                fontSize: "0.92rem",
                fontWeight: "600",
                marginBottom: "0.85rem",
              }}
            >
              Why choose Palaemon Ear Care
            </p>

            <h2
              style={{
                fontSize: "2rem",
                lineHeight: "1.18",
                fontWeight: "700",
                marginBottom: "1rem",
                maxWidth: "760px",
              }}
            >
              Ear wax removal designed around comfort and convenience
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.75",
                color: "var(--color-text-secondary)",
                maxWidth: "760px",
                margin: 0,
              }}
            >
              Palaemon Ear Care is designed to feel professional, reassuring,
              and convenient from the first click onwards, combining a careful
              approach with the practicality of home visits.
            </p>
          </div>

          <div
            className="home-card-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="home-info-card nhs-tile earcare-feature-card"
                  style={{
                    padding: "1.6rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.95rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(255, 255, 255, 0.12)",
                      display: "grid",
                      placeItems: "center",
                      color: "#ffffff",
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: "1.35",
                      margin: 0,
                      color: "#ffffff",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.98rem",
                      lineHeight: "1.7",
                      margin: 0,
                      color: "rgba(255, 255, 255, 0.92)",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EarCareWhyChoose;