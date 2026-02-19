const SERVICES = [
  {
    title: "Mechanical Repairs",
    description:
      "Full mechanical workshop, engine work, and routine servicing to keep your performance car at its best.",
  },
  {
    title: "Electrical Systems",
    description:
      "ECU programming, advanced diagnostics, and wiring harness repair for modern luxury vehicles.",
  },
  {
    title: "Minor & Major Service",
    description:
      "Oil, brakes, fluids, tires, and full inspections tailored to your manufacturer guidelines.",
  },
  {
    title: "Car Service Contracts",
    description:
      "Customized scheduled maintenance plans for predictable ownership and peace of mind.",
  },
  {
    title: "Regular Maintenance",
    description:
      "Preventive care programs designed to keep your exotic in peak condition every day.",
  },
  {
    title: "Autobody Repair",
    description:
      "Paintless dent removal, carbon fiber work, and peelable paint solutions under one roof.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="ltg-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-7 reveal">
            <p className="ltg-section-title mb-2">
              Services We Provide
            </p>
            <h2 className="ltg-section-heading ltg-serif mb-3">
              Precision care for every detail of your exotic.
            </h2>
          </div>
          <div className="col-lg-5 reveal">
            <p className="text-secondary">
              Our in-house mechanical workshop is dedicated to ensuring that
              your vehicle runs smoothly and efficiently. From routine servicing
              to detailed inspections, our skilled mechanics are committed to
              delivering top-notch service.
            </p>
          </div>
        </div>
        <div className="row g-4" data-stagger-group>
          {SERVICES.map((service, idx) => (
            <div
              className="col-md-6 col-lg-4"
              key={service.title}
              data-stagger-item
            >
              <div className="ltg-card ltg-card-hover-border h-100 p-4 position-relative">
                <div className="ltg-service-number ltg-serif">
                  0{idx + 1}
                </div>
                <h3 className="h5 mb-2 ltg-underline-animate">
                  {service.title}
                </h3>
                <p className="text-secondary small mb-0">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

