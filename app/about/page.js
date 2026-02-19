 import About from "@/components/sections/About";

export const metadata = {
  title: 'About Luxury Toys Garage | Expert Exotic Car Workshop',
  description: 'Learn about our story, expertise, and commitment to premium exotic car service in Dubai. 18+ luxury brands serviced with 100% satisfaction guarantee.',
};
 
export default function AboutPage() {
  return (
    <main>
      <section className="ltg-section">
        <div className="container text-center mb-5">
          <p className="ltg-section-title mb-2">About Luxury Toys Garage</p>
          <h1 className="ltg-section-heading ltg-serif mb-3">
            A One Stop Workshop for Exotic Cars
          </h1>
          <p className="text-secondary mb-0">
            Learn more about our story, philosophy, and commitment to premium service.
          </p>
        </div>
      </section>
      <About />
    </main>
  );
}

