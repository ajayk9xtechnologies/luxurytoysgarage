"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { logo } from "@/common";
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Brands", href: "/brands" },
  { label: "COVID-19", href: "/covid-19" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`ltg-navbar ${
        scrolled ? "ltg-navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between ltg-navbar-inner">
          <Link href="/" className="text-decoration-none text-white">
            <Image src={logo} alt="Logo" width={80} height={80} />
          </Link>
          <button
            className="navbar-toggler border-0 d-lg-none ltg-interactive"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="text-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </span>
          </button>
          <nav className="d-none d-lg-flex align-items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="ltg-nav-link text-decoration-none"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn ltg-outline-gold-btn ltg-interactive"
            >
              Contact Us
            </Link>
          </nav>
        </div>
        {open && (
          <div className="d-lg-none pb-3">
            <nav className="d-flex flex-column gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="ltg-nav-link text-decoration-none py-1 capitalize"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn ltg-outline-gold-btn mt-2 ltg-interactive"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

