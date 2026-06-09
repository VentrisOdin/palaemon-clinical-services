import { Link } from "react-router-dom";

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
      question: "Do you treat children?",
      answer:
        "Yes. We see children aged 11 years and above. A parent or legal guardian must be present during the appointment to provide consent and remain with the child throughout the assessment and any treatment that may be required.",
    },
    {
      question: "How much does treatment cost?",
      answer:
        "Our current introductory home visit price is £50 for both ears, including assessment and microsuction where clinically appropriate. Our standard price is £80 for both ears. Any current offers will always be shown on our booking and pricing pages.",
    },
    {
      question: "What if I only need an assessment or no wax is found?",
      answer:
        "If microsuction is not required because no significant ear wax is present or treatment is not clinically appropriate, the appointment is charged at the introductory consultation rate of £20. The usual rate is £40. You will still receive a professional examination, an explanation of the findings and advice on any appropriate next steps.",
    },
    {
      question: "What if I don't have any ear wax?",
      answer: (
        <>
          Not all blocked ears are caused by ear wax. Every appointment begins
          with a professional examination of the ear canal and eardrum to
          determine the cause of your symptoms. If no wax is present or
          microsuction is not clinically appropriate, we will explain our
          findings and advise on the most appropriate next steps, which may
          include seeing your GP or another healthcare professional.{" "}
          <Link
            to="/what-if-it-isnt-ear-wax"
            style={{
              fontWeight: 600,
              color: "var(--color-primary)",
              textDecoration: "underline",
            }}
          >
            Read more →
          </Link>
        </>
      ),
    },
    {
      question: "Can blocked ears be caused by something other than ear wax?",
      answer:
        "Yes. Symptoms such as muffled hearing, pressure or a feeling of fullness can also be caused by conditions including Eustachian tube dysfunction, fluid behind the eardrum, ear infections and other ear conditions. This is why every appointment includes a thorough examination before treatment is considered.",
    },
    {
      question: "What symptoms can ear wax build-up cause?",
      answer:
        "Ear wax build-up can cause blocked ears, reduced hearing, discomfort, irritation, or a feeling of fullness in the ear. Some people may also notice ringing in the ears.",
    },
    {
      question: "Do I need to use olive oil before my appointment?",
      answer:
        "Using olive oil ear drops for several days before your appointment can help soften ear wax and make removal easier, although this is not always necessary. Advice will be provided when you book depending on your individual circumstances.",
    },
    {
      question: "Will microsuction hurt?",
      answer:
        "Most people find microsuction comfortable and well tolerated. You may hear the sound of the suction and occasionally experience mild temporary discomfort, particularly if the wax is hard or close to the eardrum, but the procedure is generally quick and safe.",
    },
    {
      question: "Is microsuction safe?",
      answer:
        "Microsuction is widely recognised as a safe and effective method of ear wax removal when carried out appropriately by a trained clinician.",
    },
    {
      question: "Will both ears be treated if needed?",
      answer:
        "Yes. The treatment fee covers both ears if microsuction is required in both during the same appointment.",
    },
    {
      question: "What happens after I submit the booking form?",
      answer:
        "Your form submission is a booking request, not an automatically confirmed appointment. Your details will be reviewed and you will then be contacted to confirm suitability and availability.",
    },
    {
      question: "When should I seek medical advice before booking?",
      answer:
        "If you have severe pain, ear discharge, sudden hearing loss, facial weakness, fever, significant dizziness or signs of infection, you should seek medical advice before booking.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can request an appointment through the booking page. If you are unsure whether the service is suitable, you can contact us beforehand and we will be happy to advise.",
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

              <div
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.7",
                }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQList;