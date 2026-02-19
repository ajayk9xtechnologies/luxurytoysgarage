"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Load the default export from the ContactMap module on the client only
const ContactMap = dynamic(() => import("./ContactMap"), { ssr: false });

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Luxury Toys Garage. We will get back to you shortly.");
    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="ltg-section">
      <div className="container">
        <div className="mb-5 text-center">
          <p className="ltg-section-title mb-2">Contact Us</p>
          <h1 className="ltg-section-heading ltg-serif mb-3">
            Get in Touch with Luxury Toys Garage
          </h1>
          <p className="text-secondary mb-0">
            Warehouse S.4b 22nd Street Al Quoz Industrial Area - 3, Dubai, UAE
          </p>
        </div>

        <div className="row gy-4 align-items-start">
          <div className="col-lg-6">
            <div
              className="rounded-4 overflow-hidden"
              style={{
                border: "1px solid rgba(201,168,76,0.5)",
                minHeight: "320px",
              }}
            >
              <ContactMap />
            </div>
            <div className="mt-3 text-secondary small">
              <p className="mb-1 fw-semibold text-white">Workshop Address</p>
              <p className="mb-1">
                Warehouse S.4b 22nd Street Al Quoz Industrial Area - 3, Dubai, UAE
              </p>
              <p className="mb-1">
                <a
                  href="https://www.google.com/maps/dir//Luxury+Toys+Garage+Warehouse-S+4B+22nd+St+Al+Qouz+Ind.third+-+Al+Quoz+-+Dubai/@25.1279026,55.2259617,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3e5f694edd55c395:0x2c2ad30626844646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none ltg-gold"
                >
                  Open directions in Google Maps
                </a>
              </p>
              <p className="mb-0">
                Phone:{" "}
                <a href="tel:+971544381641" className="text-decoration-none text-secondary">
                  +971 544 381 641
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="ltg-card p-4 p-md-5">
              <h2 className="h4 ltg-serif mb-3">Send Us a Message</h2>
              <p className="text-secondary small mb-4">
                Share your service needs or questions and our team will respond as soon as possible.
              </p>
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                  <label className="form-label small text-uppercase text-secondary">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control bg-black border-dark text-white"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label small text-uppercase text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control bg-black border-dark text-white"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label small text-uppercase text-secondary">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control bg-black border-dark text-white"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label small text-uppercase text-secondary">
                    Message
                  </label>
                  <textarea
                    className="form-control bg-black border-dark text-white"
                    rows="4"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn ltg-cta-gold-btn ltg-interactive w-100 w-md-auto"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
