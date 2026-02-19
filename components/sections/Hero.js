"use client";

import { useEffect, useState } from "react";
import { hero1, hero2, hero3, hero4 } from "@/common";

const HERO_SLIDES = [hero1, hero2, hero3, hero4];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="ltg-hero d-flex align-items-center">
      <div className="ltg-hero-slides" data-hero-parallax>
        {HERO_SLIDES.map((src, index) => (
          <div
            key={index}
            className={`ltg-hero-slide ${
              index === activeIndex ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${typeof src === "string" ? src : src.src})`,
            }}
          >
            <span className="visually-hidden">
              Luxury Toys Garage hero background
            </span>
          </div>
        ))}
      </div>
      <div className="ltg-hero-overlay" />
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <p className="ltg-section-title mb-2">
              Dubai&apos;s Premier Exotic Car Workshop
            </p>
            <h1
              className="ltg-serif ltg-section-heading mb-3"
              data-clip-title
            >
              Luxury Toys Garage
            </h1>
            <h2 className="h5 text-secondary fw-normal mb-4">
              One Stop Auto Repair Solutions.
            </h2>
            <p className="text-secondary mb-4">
              Car Mechanical &amp; Electrical Repair, Minor &amp; Major
              Service, Car Service Contract, Regular Maintenance, Autobody
              Repair.
            </p>
            <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
              <a
                href="tel:+971544381641"
                className="btn ltg-cta-gold-btn ltg-interactive"
              >
                Call Now · +971 544 381 641
              </a>
              <a
                href="#services"
                className="btn ltg-outline-gold-btn ltg-interactive"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

