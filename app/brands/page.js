import BrandsSection from "@/components/sections/BrandsSection";

export const metadata = {
  title: 'Luxury Car Brands | Luxury Toys Garage',
  description: 'Luxury Toys Garage services 18+ premium and exotic car brands including Ferrari, Lamborghini, Porsche, and more in Dubai.',
};

export default function BrandsPage() {
  return (
    <main className="ltg-section">
      <div className="container text-center mb-5">
        <p className="ltg-section-title mb-2">Brands We Specialize</p>
        <h1 className="ltg-section-heading ltg-serif mb-3">
          BRANDS WE SPECIALIZE
        </h1>
        <p className="text-secondary mb-0">
          We service and maintain the world&apos;s most desirable performance and luxury marques.
        </p>
      </div>
      <BrandsSection />
    </main>
  );
}

