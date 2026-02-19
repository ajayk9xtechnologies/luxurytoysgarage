 
export const metadata = {
  title: 'COVID-19 Information | Luxury Toys Garage',
  description: 'COVID-19 safety information and guidelines at Luxury Toys Garage.',
};

export default function CovidPage() {
  return (
    <main className="ltg-section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="ltg-section-title mb-2">
            COVID-19 Safety Measures at Luxury Toys Garage
          </p>
          <h1 className="ltg-section-heading ltg-serif mb-3">
            A One Stop Service Workshop for All Exotic Cars
          </h1>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="ltg-card p-4 p-md-5">
              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">Introduction</h2>
                <p className="text-secondary mb-0">
                  Welcome to Luxury Toys Garage! Ensuring your safety is our top priority.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">Safety Protocols Implemented</h2>
                <ul className="text-secondary mb-0">
                  <li>Regular sanitization of premises and vehicles.</li>
                  <li>Staff wearing masks and gloves.</li>
                  <li>Maintaining social distancing.</li>
                  <li>Encouraging online bookings to reduce contact.</li>
                </ul>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">Customer Guidelines</h2>
                <p className="text-secondary mb-0">
                  We kindly request customers to wear masks and maintain social distancing when
                  visiting our garage.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">Appointment and Service Procedures</h2>
                <p className="text-secondary mb-0">
                  To schedule appointments, customers can visit our website or call our service
                  center. When dropping off or picking up vehicles, follow our staff instructions
                  for a contactless experience.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">Health Declarations</h2>
                <p className="text-secondary mb-0">
                  Customers may be required to declare their health condition before visiting or
                  leaving their vehicles for service.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">FAQ</h2>
                <p className="text-secondary mb-1">
                  <strong>Q: Are masks mandatory for customers?</strong>
                </p>
                <p className="text-secondary mb-0">
                  <strong>A:</strong> Yes, we require all customers to wear masks while on our
                  premises.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">Contact Information</h2>
                <p className="text-secondary mb-1">
                  If you have any questions or concerns, please contact us at:
                </p>
                <p className="text-secondary mb-0">
                  Email:{" "}
                  <a
                    href="mailto:info@luxurytoysgarage.com"
                    className="text-decoration-none ltg-gold"
                  >
                    info@luxurytoysgarage.com
                  </a>
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">Updates and Changes</h2>
                <p className="text-secondary mb-0">
                  This page will be regularly updated to reflect any changes in our safety
                  protocols.
                </p>
              </section>

              <section>
                <h2 className="h4 ltg-serif mb-2">Call to Action</h2>
                <p className="text-secondary mb-3">
                  Contact us today to learn more or schedule your service!
                </p>
                <a href="/contact" className="btn ltg-cta-gold-btn ltg-interactive">
                  Contact Us
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

