import {
  dentRemoval,
  carbonFibre,
  peelablePaint,
} from "@/common";

const BODY_SERVICES = [
  {
    tag: "Paintless Dent Removal",
    title: "Flawless dent removal without paintwork.",
    description:
      "Experience flawless perfection with Luxury Toys Garage's Paintless Dent Removal service. Our non-invasive technique restores your vehicle's beauty without compromising its original finish. Swift, cost-effective, and eco-friendly — trust our skilled technicians to erase dents and dings, preserving your luxury car's pristine appearance.",
    image: dentRemoval,
  },
  {
    tag: "Plastic & Carbon Fibre Repairs",
    title: "Precision repairs for carbon fibre & plastics.",
    description:
      "Discover flawless repairs for your luxury vehicle's carbon fiber and plastic components. Trust our expertise and cutting-edge techniques to restore and maintain your car's pristine condition. Contact us today for unparalleled automotive care.",
    image: carbonFibre,
  },
  {
    tag: "Peelable Paint Service",
    title: "Reversible color transformations.",
    description:
      "Revolutionize your ride with our Peelable Paint Service. Transform your car's look without commitment. Our specialized liquid coating allows for easy customization, preserving your car's original finish. Explore endless color options, protect your vehicle, and embrace innovation — hassle-free.",
    image: peelablePaint,
  },
];

export default function BodyShopSection() {
  return (
    <section className="ltg-section">
      <div className="container">
        <div className="row align-items-end mb-4">
          <div className="col-lg-8 reveal">
            <p className="ltg-section-title mb-2">
              In-House Body Shop Services
            </p>
            <h2 className="ltg-section-heading ltg-serif">
              In-House Body Shop Services
            </h2>
          </div>
        </div>
        <div className="row g-4" data-stagger-group>
          {BODY_SERVICES.map((service) => (
            <div
              className="col-md-6 col-lg-4"
              key={service.tag}
              data-stagger-item
            >
              <div className="ltg-card ltg-card-hover-border h-100">
                <div className="ratio ratio-4x3">
                  <img
                    src={typeof service.image === "string" ? service.image : service.image.src}
                    alt={service.tag}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4">
                  <span className="badge rounded-pill text-uppercase small mb-2">
                    {service.tag}
                  </span>
                  <h3 className="h6 ltg-underline-animate mb-2">
                    {service.title}
                  </h3>
                  <p className="text-secondary small mb-0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

