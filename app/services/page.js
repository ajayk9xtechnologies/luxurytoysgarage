 import ServicesSection from "@/components/sections/ServicesSection";

export const metadata = {
  title: 'Our Services | Luxury Toys Garage',
  description: 'Comprehensive auto repair services including mechanical repairs, electrical systems, maintenance, and autobody work for exotic cars in Dubai.',
};

export default function ServicesPage() {
  return (
    <main>
      <section className="ltg-section">
        <div className="container text-center mb-5">
          <p className="ltg-section-title mb-2">Our Services</p>
          <h1 className="ltg-section-heading ltg-serif mb-3">
            Comprehensive Auto Repair & Maintenance
          </h1>
          <p className="text-secondary mb-0">
            From mechanical repairs to autobody work, we provide precision care for every detail of your exotic car.
          </p>
        </div>
      </section>
      <ServicesSection />
    </main>
  );
}
