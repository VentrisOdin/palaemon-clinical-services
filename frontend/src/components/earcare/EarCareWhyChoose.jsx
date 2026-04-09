import { ShieldCheck, House, ClipboardCheck } from "lucide-react";

function EarCareWhyChoose() {
  const items = [
    {
      title: "HCPC registered paramedic",
      text: "Care delivered by a registered paramedic, bringing clinical judgement, patient safety awareness, and a professional standard that sets Palaemon apart from non-clinical providers.",
      icon: ShieldCheck,
    },
    {
      title: "Home visit convenience",
      text: "Appointments take place in the comfort of your own home, avoiding travel, waiting rooms, and unnecessary disruption to your day.",
      icon: House,
    },
    {
      title: "Clear and professional process",
      text: "Straightforward booking, transparent pricing, and a calm, patient-focused approach from first contact through to treatment.",
      icon: ClipboardCheck,
    },
  ];

  return (
    <section
  className="section section-tight"
  id="why-choose-ear-care"
>
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
              Professional ear care with a calm, clinical approach
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
              Palaemon Ear Care is a paramedic-led service designed to feel
              professional, reassuring, and convenient from the first click
              onwards — combining clinical confidence with the practicality of
              home visits.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="glass-card earcare-feature-card"
                  style={{
                    padding: "1.6rem",
                    animation: "riseUp 0.8s ease",
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
                      background: "rgba(76, 201, 240, 0.06)",
                      border: "1px solid rgba(76, 201, 240, 0.14)",
                      display: "grid",
                      placeItems: "center",
                      color: "var(--color-accent)",
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: "1.35",
                      margin: 0,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.98rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: "1.7",
                      margin: 0,
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