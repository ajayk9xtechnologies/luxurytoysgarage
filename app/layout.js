import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import AppShell from "@/components/layout/AppShell";

export const metadata = {
  title: "Luxury Toys Garage | Exotic Car Repair Dubai",
  description:
    "Luxury Toys Garage is a premium exotic car repair workshop in Dubai offering mechanical, electrical, maintenance, and autobody services for luxury brands.",
  icon: "/assets/images/logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="ltg-body">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

