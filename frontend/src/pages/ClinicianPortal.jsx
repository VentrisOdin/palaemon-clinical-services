import { useState } from "react";

const CLINICIAN_USERNAME = "matt";
const CLINICIAN_PASSWORD = "palaemon";

const portalLinks = [
  {
    section: "Resident management",
    items: [
      {
        title: "1. Register Resident",
        description:
          "Create or identify a resident and generate the active assessment record.",
        url: "https://docs.google.com/forms/d/e/1FAIpQLScVTMi2BXBsI5vh1QjoflkjO_FcHwU0EgFo8d6pETUyEB2C5Q/viewform?usp=dialog",
      },
      {
        title: "8. Resident Record View",
        description:
          "Open the resident lookup sheet to review demographics, baseline values, assessment history and referrals.",
        url: "https://docs.google.com/spreadsheets/d/1FG0mF7i6PKh_r7lD6w1j-hw4iQvJaVk9x1IpHANihcU/edit?gid=1769618290#gid=1769618290",
      },
    ],
  },
  {
    section: "Clinical assessments",
    items: [
      {
        title: "2. Medical History",
        description:
          "PMH, medications, allergies, anticoagulants, DNACPR, RESPECT and background risk.",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSd2BLi3iw6BdaGWWh2Mctdlrz7970y3L-6nX5AU_OC2L9Ztyg/viewform?usp=publish-editor",
      },
      {
        title: "3. General Assessment",
        description:
          "AVPU, appearance, hands, trunk, extremities, frailty and clinical impression.",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdXeB_Pq_p1PEXV69lGE7tP-HfoRMlMPVrQKwcjiIweerrVPA/viewform?usp=dialog",
      },
      {
        title: "4. Cardiovascular Assessment",
        description:
          "Cardiovascular observations, symptoms, pulses, ECG-related findings and escalation.",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSd-oQt3moveMl0MlOvH0CQ_KdwOeSjAK7ZBmnM_WrnebgRRWQ/viewform?usp=dialog",
      },
      {
        title: "5. Respiratory Assessment",
        description:
          "Respiratory history, work of breathing, oxygenation, auscultation and concern.",
        url: "https://docs.google.com/forms/d/e/1FAIpQLScp5g8fXwZ02mcsloNLnkzfuyVgYmPZelSGfCi5yFj0vEVvqw/viewform?usp=dialog",
      },
      {
        title: "6. Neurological Assessment",
        description:
          "Baseline neurological screening, tone, power, sensation, cranial nerves and concerns.",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfkXw8-ytUXA9zsbyxBY624G1Q2PloNJBSJp6QdHUHOshXb8A/viewform?usp=dialog",
      },
      {
        title: "7. Referral / Escalation",
        description:
          "Create a structured referral record linked to the resident and assessment.",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSe2XM7QZVB1S74ScUUq5-XN4bHVcg1aLQ_k_NHWkG3X80mGZw/viewform?usp=dialog",
      },
    ],
  },
  {
    section: "Outputs in development",
    items: [
      {
        title: "GP Referral PDF",
        description:
          "Generate a concise summary for GP or community team escalation. Coming soon.",
        url: "#",
        disabled: true,
      },
      {
        title: "Care Home Summary",
        description:
          "Generate a plain-language summary of findings, actions and recommendations. Coming soon.",
        url: "#",
        disabled: true,
      },
    ],
  },
];

function ClinicianPortal() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("palaemonClinicianLoggedIn") === "true"
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (
      username.trim().toLowerCase() === CLINICIAN_USERNAME &&
      password === CLINICIAN_PASSWORD
    ) {
      localStorage.setItem("palaemonClinicianLoggedIn", "true");
      setLoggedIn(true);
      setError("");
      return;
    }

    setError("Login details not recognised.");
  };

  const handleLogout = () => {
    localStorage.removeItem("palaemonClinicianLoggedIn");
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (!loggedIn) {
    return (
      <section className="home-hero-section">
        <div className="container">
          <div
            className="glass-card"
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              padding: "2.5rem",
            }}
          >
            <p className="home-eyebrow">Secure clinical access</p>
            <h1>Clinician Portal</h1>
            <p style={{ marginBottom: "1.5rem" }}>
              Access the Palaemon care home assessment system.
            </p>

            <form onSubmit={handleLogin}>
              <label style={{ display: "block", marginBottom: "0.75rem" }}>
                Username
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  autoComplete="username"
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    marginTop: "0.35rem",
                    borderRadius: "12px",
                    border: "1px solid rgba(15, 23, 42, 0.18)",
                  }}
                />
              </label>

              <label style={{ display: "block", marginBottom: "1rem" }}>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    marginTop: "0.35rem",
                    borderRadius: "12px",
                    border: "1px solid rgba(15, 23, 42, 0.18)",
                  }}
                />
              </label>

              {error && (
                <p style={{ color: "#b91c1c", fontWeight: "700" }}>{error}</p>
              )}

              <button className="primary-button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="home-section">
      <div className="container">
        <div
          className="nhs-info-card"
          style={{
            background: "linear-gradient(135deg, #005eb8, #0072ce)",
            color: "#ffffff",
            padding: "3rem",
            borderRadius: "28px",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: "800",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: "0.9",
              marginBottom: "1rem",
            }}
          >
            Palaemon Clinical Services
          </p>

          <h1 style={{ color: "#ffffff", marginBottom: "1rem" }}>
            Clinician Portal
          </h1>

          <p style={{ color: "rgba(255,255,255,0.9)", maxWidth: "760px" }}>
            Assessment access for care home clinical monitoring, baseline
            assessment, referral generation and resident record review.
          </p>

          <button
            type="button"
            onClick={handleLogout}
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem 1.1rem",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.45)",
              background: "rgba(255,255,255,0.12)",
              color: "#ffffff",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>

        {portalLinks.map((group) => (
          <div key={group.section} style={{ marginBottom: "2.5rem" }}>
            <h2>{group.section}</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              {group.items.map((item) => {
                const isDisabled = item.disabled || item.url === "#";

                return (
                  <a
                    key={item.title}
                    href={isDisabled ? undefined : item.url}
                    target={isDisabled ? undefined : "_blank"}
                    rel="noreferrer"
                    className="glass-card"
                    aria-disabled={isDisabled ? "true" : "false"}
                    onClick={(event) => {
                      if (isDisabled) {
                        event.preventDefault();
                      }
                    }}
                    style={{
                      display: "block",
                      padding: "1.5rem",
                      textDecoration: "none",
                      color: "inherit",
                      borderRadius: "22px",
                      opacity: isDisabled ? 0.58 : 1,
                      cursor: isDisabled ? "not-allowed" : "pointer",
                    }}
                  >
                    <h3 style={{ marginBottom: "0.5rem" }}>{item.title}</h3>
                    <p style={{ marginBottom: 0 }}>{item.description}</p>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClinicianPortal;