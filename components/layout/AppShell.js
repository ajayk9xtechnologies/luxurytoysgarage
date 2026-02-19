"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initLenis } from "@/lib/lenis";
import { initScrollAnimations } from "@/lib/scroll-animations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function AppShell({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const destroyLenis = initLenis();
    const killAnimations = initScrollAnimations();

    // Reset scroll position on route change
    window.scrollTo(0, 0);

    return () => {
      if (destroyLenis) destroyLenis();
      if (killAnimations) killAnimations();
    };
  }, [pathname]);

  return (
    <>
      <CustomCursor />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

