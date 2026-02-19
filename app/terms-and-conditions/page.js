 
export const metadata = {
  title: 'Terms & Conditions | Luxury Toys Garage',
  description: 'Terms and conditions for Luxury Toys Garage services and workshop policies.',
};

export default function TermsPage() {
  return (
    <main className="ltg-section">
      <div className="container">
        <div className="mb-5 text-center">
          <p className="ltg-section-title mb-2">Our Policies</p>
          <h1 className="ltg-section-heading ltg-serif mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-secondary mb-0">
            Please read these Terms &amp; Conditions carefully before using our services.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="ltg-card p-4 p-md-5">
              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">1. Service Scope</h2>
                <p className="text-secondary small mb-0">
                  Luxury Toys Garage provides comprehensive automotive repair, maintenance, and 
                  bodywork services for luxury and exotic vehicles. The specific scope of work 
                  for each job will be confirmed in your job card or service agreement. We 
                  specialize in mechanical repairs, electrical systems, major and minor services, 
                  car service contracts, regular maintenance, and autobody repair.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">2. Quotation &amp; Estimates</h2>
                <p className="text-secondary small mb-0">
                  All quotes and estimates are provided based on the information available at the 
                  time of inspection and are valid for 30 days. If additional work is discovered 
                  during service, we will contact you immediately for approval and provide an 
                  updated estimate before proceeding with work.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">3. Payment Terms</h2>
                <p className="text-secondary small mb-0">
                  Payment is due upon completion of the service unless otherwise agreed in writing. 
                  We accept major credit cards, bank transfers, and cash payments in UAE Dirhams. 
                  A 50% deposit may be required for major repair jobs.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">4. Warranty &amp; Guarantees</h2>
                <p className="text-secondary small mb-0">
                  We provide a 12-month warranty on parts replaced and labor performed under normal 
                  use conditions, unless otherwise specified. Original manufacturer parts carry the 
                  manufacturer's warranty. Aftermarket parts carry the supplier's warranty.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">5. Vehicle Liability</h2>
                <p className="text-secondary small mb-0">
                  While we take utmost care of your vehicle on our premises, Luxury Toys Garage 
                  is not liable for theft, damage, or loss beyond our reasonable control. We 
                  recommend securing valuable items from your vehicle before drop-off. We maintain 
                  comprehensive insurance coverage for vehicles in our care.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">6. Service Cancellation &amp; Refunds</h2>
                <p className="text-secondary small mb-0">
                  Cancellations must be made at least 48 hours before the scheduled service date. 
                  Deposits are refundable if cancellation notice is provided within this timeframe. 
                  No refunds are provided for completed services unless the work does not meet our 
                  quality standards.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">7. Customer Responsibilities</h2>
                <p className="text-secondary small mb-0">
                  Customers must provide accurate vehicle details and service history. Keys and 
                  access codes must be provided. Customer is responsible for vehicle insurance. 
                  We reserve the right to refuse service if vehicle safety standards are not met.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">8. Intellectual Property</h2>
                <p className="text-secondary small mb-0">
                  All diagnostic reports, service records, and documentation created during service 
                  at Luxury Toys Garage are the property of the customer upon payment in full. Our 
                  proprietary diagnostic tools and methodology remain our intellectual property.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">9. Limitation of Liability</h2>
                <p className="text-secondary small mb-0">
                  Luxury Toys Garage's total liability shall not exceed the cost of the service 
                  provided. We are not responsible for any indirect, incidental, or consequential 
                  damages resulting from service delays or vehicle unavailability.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">10. Amendments to Terms</h2>
                <p className="text-secondary small mb-0">
                  Luxury Toys Garage reserves the right to modify these Terms &amp; Conditions at 
                  any time. The latest version will be available on our website. Continued use of 
                  our services constitutes acceptance of any changes.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 ltg-serif mb-2">11. Governing Law</h2>
                <p className="text-secondary small mb-0">
                  These Terms &amp; Conditions are governed by the laws of the United Arab Emirates 
                  and subject to the jurisdiction of Dubai courts.
                </p>
              </section>

              <section>
                <h2 className="h4 ltg-serif mb-2">12. Contact Us</h2>
                <p className="text-secondary small mb-1">
                  For questions regarding these Terms &amp; Conditions:
                </p>
                <p className="text-secondary small mb-0">
                  Email:{" "}
                  <a 
                    href="mailto:info@luxurytoysgarage.com" 
                    className="text-decoration-none ltg-gold"
                  >
                    info@luxurytoysgarage.com
                  </a>
                  <br />
                  Phone:{" "}
                  <a 
                    href="tel:+971544381641" 
                    className="text-decoration-none ltg-gold"
                  >
                    +971 544 381 641
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

