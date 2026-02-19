const FAQ_ITEMS = [
  {
    question: "What types of cars do you service?",
    answer:
      "We specialise in exotic and luxury vehicles including Ferrari, Lamborghini, McLaren, Porsche, Bentley, Rolls-Royce, and other high-performance marques.",
  },
  {
    question: "Do you offer service contracts?",
    answer:
      "Yes. We provide tailored service contracts and maintenance plans designed around your driving habits and manufacturer requirements.",
  },
  {
    question: "How long does a typical service take?",
    answer:
      "Most minor services are completed the same day. Major services and complex diagnostics may require additional time, but we always keep you updated.",
  },
  {
    question: "Do you use original/OEM parts?",
    answer:
      "We prioritise OEM and high-quality equivalent parts sourced from trusted suppliers to maintain performance and reliability.",
  },
  {
    question: "Is your workshop warranty-authorized?",
    answer:
      "We follow manufacturer-recommended procedures and standards, and our services are designed to align with warranty requirements. For specific brands, please contact us.",
  },
  {
    question: "How do I book a service?",
    answer:
      "You can call us directly, send us an email, or reach us via WhatsApp. Our team will confirm your slot and requirements.",
  },
];

export default function FaqSection() {
  return (
    <section className="ltg-section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 reveal">
            <p className="ltg-section-title mb-2">
              FAQ
            </p>
            <h2 className="ltg-section-heading ltg-serif mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary mb-4">
              Have a question about servicing your luxury car in Dubai? Start
              here, or speak to our team directly.
            </p>
            <a
              href="tel:+971544381641"
              className="btn ltg-outline-gold-btn ltg-interactive"
            >
              Call Us
            </a>
          </div>
          <div className="col-lg-8">
            <div
              className="accordion ltg-accordion"
              id="ltgFaqAccordion"
            >
              {FAQ_ITEMS.map((item, index) => {
                const collapseId = `faq-collapse-${index}`;
                const headingId = `faq-heading-${index}`;
                const expanded = index === 0;
                return (
                  <div
                    className="accordion-item"
                    key={item.question}
                  >
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className={`accordion-button ${
                          expanded ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={expanded}
                        aria-controls={collapseId}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${
                        expanded ? "show" : ""
                      }`}
                      aria-labelledby={headingId}
                      data-bs-parent="#ltgFaqAccordion"
                    >
                      <div className="accordion-body text-secondary small">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

