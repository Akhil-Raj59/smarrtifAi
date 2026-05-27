import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyCTA } from "@/components/layout/sticky-cta";
import { ChatWidget } from "@/components/layout/chat-widget";
import { useEffect } from "react";

export function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
      <ChatWidget />
    </div>
  );
}

