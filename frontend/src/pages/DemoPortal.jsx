const demoResident = {
  name: "Mary Thompson",
  residentId: "PCS-DEMO001",
  dob: "14/03/1938",
  careHome: "Palaemon Demonstration Home",
  context:
    "Long-term resident with atrial fibrillation, hypertension, type 2 diabetes and increased falls risk.",
};

const outcomeStats = [
  ["Residents monitored", "28"],
  ["Assessments completed", "74"],
  ["GP referrals generated", "12"],
  ["Urgent escalations", "2"],
  ["Significant findings", "18"],
  ["Audit-ready summaries", "100%"],
];

const journeySteps = [
  "Resident registered",
  "Baseline profile created",
  "Routine monitoring completed",
  "Change from baseline identified",
  "Structured referral generated",
  "Care home summary produced",
  "Outcome data captured",
];

const demoSections = [
  {
    title: "Resident Overview",
    content: [
      ["Resident", demoResident.name],
      ["Resident ID", demoResident.residentId],
      ["DOB", demoResident.dob],
      ["Care Home", demoResident.careHome],
      ["Baseline NEWS2", "1"],
      ["Baseline Frailty", "5 - Mildly frail"],
    ],
  },
  {
    title: "Medical History",
    content: [
      ["PMH", "Atrial fibrillation, hypertension, type 2 diabetes, recurrent falls"],
      ["Medication", "Apixaban, Ramipril, Metformin"],
      ["Allergies", "Penicillin"],
      ["DNACPR / ReSPECT", "ReSPECT form present - care home copy held"],
    ],
  },
  {
    title: "Baseline Assessment",
    content: [
      ["AVPU", "Alert"],
      ["BP", "138/84"],
      ["SpO2", "96% on air"],
      ["Respiratory Rate", "18"],
      ["Clinical Impression", "Stable baseline with known frailty and falls risk"],
    ],
  },
  {
    title: "Current Clinical Review",
    content: [
      ["General", "Slightly more fatigued than baseline but alert and communicative"],
      ["Cardiovascular", "Pulse 92 and irregular, new change from documented baseline"],
      ["Respiratory", "No acute respiratory distress, SpO2 95% on air"],
      ["Neurological", "No new focal neurological deficit identified"],
    ],
  },
  {
    title: "Referral Generated",
    content: [
      ["Urgency", "Routine GP review"],
      ["Reason", "New irregular pulse identified during routine monitoring"],
      ["Requested Action", "GP review and consideration of ECG / medication review"],
      ["Care Home Action", "Monitor pulse, symptoms, breathlessness, chest pain and deterioration"],
    ],
  },
  {
    title: "PDF Outputs",
    content: [
      ["GP Referral Summary", "Structured GP-facing clinical referral generated"],
      ["Care Home Summary", "Plain-language summary for care home records and monitoring"],
      ["Audit Trail", "PDF output logged against Resident_ID and Assessment_ID"],
    ],
  },
];

function StatCard({ label, value }) {
  return (
    <div
      className="glass-card"
      style={{
        padding: "1.5rem",
        borderRadius: "22px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "800",
          color: "#005eb8",
          marginBottom: "0.25rem",
        }}
      >
        {value}
      </div>
      <p style={{ margin: 0 }}>{label}</p>
    </div>
  );
}

function DemoPortal() {
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
            Demonstration environment
          </p>

          <h1 style={{ color: "#ffffff", marginBottom: "1rem" }}>
            Paramedic-Led Care Home Clinical Monitoring
          </h1>

          <p style={{ color: "rgba(255,255,255,0.92)", maxWidth: "900px" }}>
            A read-only demonstration of how Palaemon Clinical Services supports
            care homes through baseline assessment, routine monitoring, early
            recognition of deterioration, structured escalation and professional
            clinical summaries for care homes and primary care.
          </p>

          <p
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.22)",
              color: "rgba(255,255,255,0.95)",
              maxWidth: "900px",
            }}
          >
            All resident data shown in this demonstration is fictional and
            provided for illustrative purposes only.
          </p>
        </div>

        <div className="glass-card" style={{ padding: "2rem", marginBottom: "2rem" }}>
          <p className="home-eyebrow">The problem</p>
          <h2>Care homes often recognise concern before the system can respond</h2>
          <p>
            Care home staff know their residents well, but subtle deterioration can
            be difficult to communicate clearly to primary care without structured
            clinical evidence. Palaemon creates a bridge between care home
            observation and GP/community review.
          </p>
        </div>

        <div
          className="nhs-info-card"
          style={{
            background: "linear-gradient(135deg, #003f7d, #005eb8)",
            color: "#ffffff",
            padding: "2.5rem",
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
            The Palaemon model
          </p>

          <h2 style={{ color: "#ffffff" }}>
            Baseline → Monitoring → Escalation → Outcomes
          </h2>

          <p style={{ color: "rgba(255,255,255,0.9)", maxWidth: "850px" }}>
            Our model establishes a resident baseline, monitors for deviation,
            supports earlier clinical escalation and creates a clear audit trail.
            This supports proactive care, better communication and earlier
            intervention.
          </p>
        </div>

        <div className="glass-card" style={{ padding: "2rem", marginBottom: "2rem" }}>
          <p className="home-eyebrow">Sample resident journey</p>
          <h2>{demoResident.name}</h2>
          <p>
            <strong>{demoResident.residentId}</strong> · {demoResident.careHome}
          </p>
          <p>{demoResident.context}</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "0.75rem",
              marginTop: "1.5rem",
            }}
          >
            {journeySteps.map((step, index) => (
              <div
                key={step}
                style={{
                  padding: "1rem",
                  borderRadius: "18px",
                  background: "rgba(0,94,184,0.08)",
                  border: "1px solid rgba(0,94,184,0.12)",
                }}
              >
                <strong>
                  {index + 1}. {step}
                </strong>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {demoSections.map((section) => (
            <div
              key={section.title}
              className="glass-card"
              style={{
                padding: "1.5rem",
                borderRadius: "22px",
              }}
            >
              <p className="home-eyebrow">Read-only demo</p>
              <h3>{section.title}</h3>

              <div style={{ marginTop: "1rem" }}>
                {section.content.map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      padding: "0.75rem 0",
                      borderBottom: "1px solid rgba(15,23,42,0.08)",
                    }}
                  >
                    <strong>{label}: </strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card" style={{ padding: "2rem", marginBottom: "2rem" }}>
          <p className="home-eyebrow">Pilot outcome dashboard</p>
          <h2>Designed to produce meaningful evidence</h2>
          <p>
            The live system is designed to generate measurable operational and
            clinical data for care homes, governance review, commissioners and
            future research funding.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {outcomeStats.map(([label, value]) => (
              <StatCard key={label} label={label} value={value} />
            ))}
          </div>
        </div>

        <div
          className="nhs-info-card"
          style={{
            background: "linear-gradient(135deg, #003f7d, #005eb8)",
            color: "#ffffff",
            padding: "2.5rem",
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
            What the care home gains
          </p>

          <h2 style={{ color: "#ffffff" }}>
            More than assessment forms — a clinical support pathway
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {[
              "Clear baseline for each resident",
              "Earlier recognition of deterioration",
              "Better GP and community team communication",
              "Professional care home and GP PDF summaries",
              "Evidence of proactive monitoring",
              "Support for governance, audit and CQC conversations",
              "Reduced avoidable escalation",
              "A repeatable model for high-risk residents",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "1rem",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card" style={{ padding: "2rem", marginBottom: "2rem" }}>
          <p className="home-eyebrow">Governance and safety</p>
          <h2>Built around structured documentation and escalation</h2>
          <p>
            The pilot model supports consistent clinical record keeping,
            structured referral generation, resident-level audit trails and clear
            escalation documentation. It is being developed alongside appropriate
            governance, policy and regulatory preparation.
          </p>
        </div>

        <div className="glass-card" style={{ padding: "2rem" }}>
          <p className="home-eyebrow">Pilot-ready model</p>
          <h2>Designed to support safer, earlier clinical escalation</h2>
          <p>
            This demonstration uses fictional data only. In live use, the system
            records structured assessments, links findings to a resident record,
            supports escalation decisions and generates professional summaries
            for care homes, GPs and community teams.
          </p>
          <p>
            The aim is to bridge the gap between care home observation and
            primary care review, supporting earlier intervention, better
            communication and a stronger evidence base for proactive care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DemoPortal;