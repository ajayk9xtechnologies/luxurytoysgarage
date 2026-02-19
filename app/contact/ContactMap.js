"use client";

export default function ContactMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3610.178523316692!2d55.2753239!3d25.1972018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a473689%3A0xc391b1062973523!2sMantis%20Dubai!5e0!3m2!1sen!2sae!4v1709123456789!5m2!1sen!2sae"
      width="100%"
      height="500"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="grayscale hover:grayscale-0 transition-all duration-1000 contrast-[1.1] brightness-[0.8] hover:brightness-100"
    />
  );
}