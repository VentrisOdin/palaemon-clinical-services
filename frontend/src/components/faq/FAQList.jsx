function FAQList() {
  const faqs = [
    {
      question: "What is microsuction?",
      answer:
        "Microsuction is a method of ear wax removal that uses gentle suction under direct visualisation. It does not use water irrigation and allows treatment to be carried out in a controlled and precise way.",
    },
    {
      question: "Do you offer home visits?",
      answer:
        "Yes. Appointments are carried out as home visits, allowing treatment to take place in the comfort of your own home.",
    },
    {
      question: "Who provides the treatment?",
      answer:
        "Treatment is delivered by an HCPC registered paramedic, providing a calm, professional and clinically informed approach.",
    },
    {
      question: "How much does treatment cost?",
      answer:
        "Home visit ear wax removal using microsuction is £80. This includes assessment and treatment where appropriate, and covers both ears if required.",
    },
    {
      question: "What if I only need an assessment?",
      answer:
        "If no treatment is required following assessment, the consultation fee is £50. If treatment is carried out, this is included in the £80 fee.",
    },
    {
      question: "What symptoms can ear wax build-up cause?",
      answer:
        "Ear wax build-up can cause blocked ears, reduced hearing, discomfort, irritation, or a feeling of fullness in the ear. Some people may also notice ringing in the ears.",
    },
    {
      question: "Is microsuction safe?",
      answer:
        "Microsuction is widely used as a safe and effective method of ear wax removal when carried out appropriately.",
    },
    {
      question: "Will both ears be treated if needed?",
      answer:
        "Yes. The £80 treatment fee covers both ears if treatment is required in both.",
    },
    {
      question: "What happens after I submit the booking form?",
      answer:
        "Your form submission is a booking request, not an automatically confirmed appointment. Your details will be reviewed and you will be contacted to confirm suitability and availability.",
    },
    {
      question: "When should I seek medical advice before booking?",
      answer:
        "If you have severe pain, ear discharge, sudden hearing loss, fever, or signs of infection, you should seek medical advice before booking.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can request an appointment through the booking page. If you are unsure whether the service is suitable, you can review the FAQs first or contact us before booking.",
    },
  ];

  return (
    <section
      className="home-section"
      style={{
        paddingTop: "2rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gap: "1rem",
            maxWidth: "980px",
            margin: "0 auto",
          }}
        >
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="glass-card"
              style={{
                padding: "1.5rem",
              }}
            >
              <h2
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.35",
                  margin: "0 0 0.75rem 0",
                  color: "var(--color-text-primary)",
                }}
              >
                {faq.question}
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.7",
                }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQList;