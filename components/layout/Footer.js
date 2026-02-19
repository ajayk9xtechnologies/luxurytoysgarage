import Link from "next/link";
import { logo } from "@/common";
import Image from "next/image";
export default function Footer() {
  return (
    <footer id="contact" className="ltg-footer pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="ltg-logo mb-3">
              <Image src={logo} alt="Logo" width={80} height={80} />
            </div>
            <p className="text-secondary small">
              Premium exotic car repair workshop in Dubai specialising in
              mechanical, electrical, maintenance, and autobody services for the
              world&apos;s finest marques.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="ltg-footer-link text-decoration-none ltg-interactive"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="ltg-footer-link text-decoration-none ltg-interactive"
              >
                Facebook
              </a>
              <a
                href="https://wa.me/971544381641"
                target="_blank"
                rel="noreferrer"
                className="ltg-footer-link text-decoration-none ltg-interactive"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase text-secondary small mb-3">
              Navigation
            </h6>
            <div className="d-flex flex-column gap-1">
              <a href="#top" className="ltg-footer-link text-decoration-none">
                Home
              </a>
              <a href="#about" className="ltg-footer-link text-decoration-none">
                About
              </a>
              <a
                href="#services"
                className="ltg-footer-link text-decoration-none"
              >
                Our Services
              </a>
              <a
                href="#brands"
                className="ltg-footer-link text-decoration-none"
              >
                Brands
              </a>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase text-secondary small mb-3">
              Legal
            </h6>
            <div className="d-flex flex-column gap-1">
              <Link
                href="/terms-and-conditions"
                className="ltg-footer-link text-decoration-none"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="ltg-footer-link text-decoration-none"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="text-uppercase text-secondary small mb-3">
              Contact
            </h6>
            <div className="d-flex flex-column gap-1 small">
              <a
                href="tel:+971544381641"
                className="ltg-footer-link text-decoration-none"
              >
                +971 544 381 641
              </a>
              <a
                href="mailto:info@luxurytoysgarage.com"
                className="ltg-footer-link text-decoration-none"
              >
                info@luxurytoysgarage.com
              </a>
              <span className="text-secondary">
                Dubai, UAE
              </span>
              <span className="text-secondary">
                Mon–Sat 8AM–7PM
              </span>
            </div>
          </div>
        </div>
        <hr className="border-secondary border-opacity-25 mt-4 mb-3" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 small text-secondary">
          <span>
            © {new Date().getFullYear()} Luxury Toys Garage. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

