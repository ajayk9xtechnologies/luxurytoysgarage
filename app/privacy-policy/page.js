 
export const metadata = {
  title: 'Privacy Policy | Luxury Toys Garage',
  description: 'Luxury Toys Garage privacy policy. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="ltg-section">
      <div className="container">
        <h1 className="ltg-section-heading ltg-serif mb-3">
          Privacy Policy
        </h1>
        <p className="text-secondary mb-4">
          This Privacy Policy explains how Luxury Toys Garage collects, uses,
          and protects your personal information when you interact with our
          workshop and website.
        </p>
        <h2 className="h5 ltg-serif mb-2">Information We Collect</h2>
        <p className="text-secondary small mb-3">
          We may collect personal details such as your name, contact
          information, vehicle details, and service history when you contact us
          or use our services.
        </p>
        <h2 className="h5 ltg-serif mb-2">How We Use Your Information</h2>
        <p className="text-secondary small mb-3">
          Your information is used to manage bookings, provide services, issue
          invoices, and keep you informed about your vehicle. We may also use
          aggregated data for service improvement.
        </p>
        <h2 className="h5 ltg-serif mb-2">Data Sharing</h2>
        <p className="text-secondary small mb-3">
          We do not sell your personal data. We only share information with
          trusted partners when necessary to deliver our services or comply with
          legal obligations.
        </p>
        <h2 className="h5 ltg-serif mb-2">Data Security</h2>
        <p className="text-secondary small mb-3">
          We implement reasonable technical and organisational measures to
          protect your data. However, no method of transmission or storage is
          completely secure.
        </p>
        <h2 className="h5 ltg-serif mb-2">Your Rights</h2>
        <p className="text-secondary small mb-3">
          You may request access, correction, or deletion of your personal data,
          subject to applicable laws. To exercise your rights, please contact us
          via the details provided on this site.
        </p>
      </div>
    </div>
  );
}

