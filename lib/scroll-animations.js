"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let initialized = false;

export function initScrollAnimations() {
  if (typeof window === "undefined") return;
  if (initialized) return;

  gsap.registerPlugin(ScrollTrigger);
  initialized = true;

  const reveals = gsap.utils.toArray(".reveal");
  const revealAnimations = [];

  reveals.forEach((el) => {
    const anim = gsap.fromTo(
      el,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
    revealAnimations.push(anim);
  });

  // Hero title clip-path reveal
  const heroTitles = gsap.utils.toArray("[data-clip-title]");
  heroTitles.forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: "inset(0 0 100% 0)" },
      {
        clipPath: "inset(0 0 0% 0)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  });

  // Card stagger in each section
  const cardGroups = gsap.utils.toArray("[data-stagger-group]");
  cardGroups.forEach((group) => {
    const cards = group.querySelectorAll("[data-stagger-item]");
    gsap.from(cards, {
      opacity: 0,
      y: 28,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: group,
        start: "top 80%",
      },
    });
  });

  // Hero parallax image (desktop only to avoid mobile glitches)
  ScrollTrigger.matchMedia({
    "(min-width: 992px)": () => {
      const heroParallax = document.querySelectorAll("[data-hero-parallax]");
      heroParallax.forEach((el) => {
        gsap.to(el, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
  });

  // Scroll indicator subtle movement
  const indicator = document.querySelector(".ltg-hero-scroll-indicator");
  if (indicator) {
    gsap.fromTo(
      indicator,
      { y: 0, opacity: 0.7 },
      { y: -10, opacity: 1, repeat: -1, yoyo: true, duration: 1.5 }
    );
  }

  return () => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
    revealAnimations.forEach((a) => a.kill());
    initialized = false;
  };
}

