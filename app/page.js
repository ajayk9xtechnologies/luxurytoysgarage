 import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CtaBanner from "@/components/sections/CtaBanner";
import BrandsSection from "@/components/sections/BrandsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BodyShopSection from "@/components/sections/BodyShopSection";
import FaqSection from "@/components/sections/FaqSection";

export const metadata = {
  title: 'Luxury Toys Garage | Exotic Car Repair Dubai',
  description: 'Premium exotic car repair workshop in Dubai offering mechanical, electrical, maintenance, and autobody services for luxury brands.',
};

export default function HomePage() {
  return (
    <div id="top">
      <Hero />
      <About />
      <CtaBanner />
      <BrandsSection />
      <ServicesSection />
      <BodyShopSection />
      <FaqSection />
    </div>
  );
}

