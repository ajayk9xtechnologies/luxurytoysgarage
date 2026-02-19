import { aboutWorkshop } from "@/common";

export default function About() {
  return (
    <section id="about" className="ltg-section">
      <div className="container">
        <div className="ltg-section-divider" />
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6">
            <div className="position-relative reveal">
              <div
                className="rounded-4 overflow-hidden"
                style={{
                  border: "1px solid rgba(201,168,76,0.5)",
                  padding: "6px",
                  background:
                    "radial-gradient(circle at top, #2e2615, #050403)",
                }}
              >
                <div className="rounded-4 overflow-hidden">
                  <img
                    src={typeof aboutWorkshop === "string" ? aboutWorkshop : aboutWorkshop.src}
                    alt="Luxury Toys Garage workshop"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div
                className="position-absolute rounded-4"
                style={{
                  border: "1px solid rgba(201,168,76,0.3)",
                  inset: "-18px -26px auto auto",
                  opacity: 0.7,
                }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="reveal">
              <p className="ltg-section-title mb-2">
                About Us
              </p>
              <h2 className="ltg-section-heading ltg-serif mb-4">
                We are Luxury Toys Garage — a one stop service workshop for all
                Exotic Cars.
              </h2>
              <p className="text-secondary mb-3">
                Luxury Toys Garage has been created by automotive experienced
                professionals to provide top quality auto repair services in
                Dubai. We have seen the problems and complaints car owners have
                from different auto repair workshops.
              </p>
              <p className="text-secondary mb-3">
                Therefore the main goal of our workshop is to provide a friendly
                and transparent environment &amp; Quality Service to our valued
                customers to gain their trust, satisfaction, and loyalty.
              </p>
              <p className="text-secondary mb-4">
                At Luxury Toys Garage we welcome all of our customers and we
                assure that we only provide premium quality auto repair services
                at best prices.
              </p>
              <div className="row text-center text-lg-start">
                <div className="col-4">
                  <div className="fw-semibold">500+</div>
                  <div className="small text-secondary">
                    Cars Serviced
                  </div>
                </div>
                <div className="col-4">
                  <div className="fw-semibold">18+</div>
                  <div className="small text-secondary">
                    Luxury Brands
                  </div>
                </div>
                <div className="col-4">
                  <div className="fw-semibold">100%</div>
                  <div className="small text-secondary">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

