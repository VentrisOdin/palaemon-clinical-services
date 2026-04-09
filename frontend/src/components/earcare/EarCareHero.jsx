import { Link } from "react-router-dom";
import { ShieldCheck, House, Ear, BadgePoundSterling } from "lucide-react";

function EarCareHero() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "HCPC registered",
      text: "Professional care delivered by a registered paramedic.",
    },
    {
      icon: House,
      title: "Home visits",
      text: "Treatment carried out in the comfort of your own home.",
    },
    {
      icon: Ear,
      title: "Safe microsuction",
      text: "A calm, clinically led approach to ear wax removal.",
    },
    {
      icon: BadgePoundSterling,
      title: "Clear pricing",
      text: "Straightforward service with transparent fees.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: "3rem 2.25rem",
            animation: "riseUp 0.8s ease",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.2fr) minmax(280px, 0.8fr)",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <p
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.16rem",
                  color: "var(--color-accent)",
                  fontSize: "0.92rem",
                  fontWeight: "600",
                  margin: 0,
                }}
              >
                Paramedic-led ear care
              </p>

              <div
                style={{
                  maxWidth: "760px",
                }}
              >
                <h1
                  style={{
                    fontSize: "2.65rem",
                    lineHeight: "1.08",
                    fontWeight: "700",
                    margin: "0 0 0.65rem 0",
                  }}
                >
                  Professional ear wax removal at home
                </h1>

                <h2
                  style={{
                    fontSize: "1.22rem",
                    lineHeight: "1.4",
                    fontWeight: "600",
                    color: "var(--color-accent)",
                    margin: 0,
                  }}
                >
                  Delivered by an HCPC registered paramedic
                </h2>
              </div>

              <p
                style={{
                  fontSize: "1.06rem",
                  lineHeight: "1.75",
                  color: "var(--color-text-secondary)",
                  maxWidth: "690px",
                  margin: 0,
                }}
              >
                Safe, effective microsuction carried out in the comfort of your
                own home — without the stress of travel or waiting rooms.
                Professional care, delivered with a calm and clinical approach.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  paddingTop: "0.25rem",
                }}
              >
                <Link
                  to="/booking"
                  style={{
                    padding: "0.9rem 1.75rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-accent)",
                    color: "#000",
                    fontWeight: "600",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Book Appointment
                </Link>

                <a
                  href="#why-choose-ear-care"
                  style={{
                    padding: "0.9rem 1.75rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-primary)",
                    fontWeight: "500",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Learn More
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                  marginTop: "0.35rem",
                }}
              >
                {[
                  "HCPC registered paramedic",
                  "Home visits",
                  "Safe microsuction",
                  "Transparent pricing",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: "0.45rem 0.8rem",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-secondary)",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "12% 10%",
                  background: "rgba(76, 201, 240, 0.08)",
                  filter: "blur(35px)",
                  borderRadius: "32px",
                }}
              />

              <div
                className="glass-card"
                style={{
                  position: "relative",
                  padding: "1.4rem",
                  display: "grid",
                  gap: "0.9rem",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <div
                  style={{
                    paddingBottom: "0.25rem",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "0.14rem",
                      color: "var(--color-accent)",
                      fontSize: "0.82rem",
                      fontWeight: "600",
                    }}
                  >
                    Ear Care at a glance
                  </p>
                </div>

                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "44px 1fr",
                        gap: "0.9rem",
                        alignItems: "start",
                        padding: "0.55rem 0",
                      }}
                    >
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "14px",
                          background: "rgba(76, 201, 240, 0.08)",
                          border: "1px solid rgba(76, 201, 240, 0.18)",
                          display: "grid",
                          placeItems: "center",
                          color: "var(--color-accent)",
                        }}
                      >
                        <Icon size={20} />
                      </div>

                      <div>
                        <h3
                          style={{
                            margin: "0 0 0.2rem 0",
                            fontSize: "1rem",
                            fontWeight: "600",
                            color: "var(--color-text-primary)",
                          }}
                        >
                          {item.title}
                        </h3>

                        <p
                          style={{
                            margin: 0,
                            fontSize: "0.95rem",
                            lineHeight: "1.6",
                            color: "var(--color-text-secondary)",
                          }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EarCareHero;