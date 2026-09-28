import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import TableReservation from "@/components/TableReservation";
import { Franchise } from "@/components/Franchise";
import { Location } from "@/components/Location";
import FloatingWA from "@/components/FloatingWA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf8f5] text-[#1c1917] selection:bg-[#e05326] selection:text-white">
      {/* 1. Header with Logo + Direct Call Button */}
      <Navbar />

      {/* 2. Main Page Sections */}
      <main className="flex-1">
        <Hero />
        <MenuSection />
        <TableReservation/>
        <Franchise />
        <Location />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Sticky WhatsApp Floating Widget */}
      <FloatingWA />
    </div>
  );
}
