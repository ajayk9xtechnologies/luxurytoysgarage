import { BRANDS } from "@/lib/brands";

export default function BrandsSection() {
  return (
    <section id="brands" className="ltg-section">
      <div className="container">
        <div className="text-center mb-5 reveal">
          <p className="ltg-section-title mb-2">
            Brands We Specialize
          </p>
          <h2 className="ltg-section-heading ltg-serif">
            Brands We Specialize
          </h2>
        </div>
        <div
          className="row g-3 g-md-4"
          data-stagger-group
        >
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="col-6 col-md-4 col-lg-2"
              data-stagger-item
            >
              <div className="ltg-brand-card h-100">
                <img
                  src={typeof brand.logo === "string" ? brand.logo : brand.logo.src}
                  alt={brand.name}
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

