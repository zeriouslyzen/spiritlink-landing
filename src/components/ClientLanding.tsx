"use client";
import dynamic from "next/dynamic";
import AnimatedHeader from "./AnimatedHeader";
import ServicesSection from "./ServicesSection";
import IdealClientsSection from "./IdealClientsSection";
import ConsultationSection from "./ConsultationSection";
import Footer from "./Footer";
import Link from "next/link";
import AccessTerminal from "./AccessTerminal";

const SacredGeometryBackground = dynamic(
  () => import("./SacredGeometryBackground"),
  { ssr: false }
);

export default function ClientLanding() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-black via-[#181a2a] to-black overflow-x-hidden">
      <SacredGeometryBackground />
      <main className="w-full flex-1 flex flex-col items-center justify-center z-10 px-2 sm:px-0">
        <section className="pt-10 sm:pt-16 pb-6 sm:pb-8 w-full flex flex-col items-center relative">
          <div className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl pointer-events-none -z-10" />
          <AnimatedHeader />
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-blue-100 max-w-xs sm:max-w-2xl text-center font-mono">
            <span className="text-[#00fff7]">&gt; execute SYN7H[λ]</span><br />
            <span className="text-slate-400">// Layered intelligence. Adaptive defense. Presence erased.</span><br /><br />
            A living protocol for those who operate outside the visible spectrum.
          </p>
        </section>
        <div className="w-full flex flex-col items-center mb-6 sm:mb-8 px-2 sm:px-0">
          <AccessTerminal />
        </div>
        <section className="relative px-1 sm:px-0">
          <div className="absolute inset-0 w-full h-full bg-black/20 backdrop-blur-sm rounded-xl sm:rounded-2xl pointer-events-none -z-10" />
          <ServicesSection />
        </section>
        <section className="relative px-1 sm:px-0">
          <div className="absolute inset-0 w-full h-full bg-black/20 backdrop-blur-sm rounded-xl sm:rounded-2xl pointer-events-none -z-10" />
          <IdealClientsSection />
        </section>
        <section className="relative px-1 sm:px-0">
          <div className="absolute inset-0 w-full h-full bg-black/20 backdrop-blur-sm rounded-xl sm:rounded-2xl pointer-events-none -z-10" />
          <ConsultationSection />
        </section>
      </main>
      <Footer />
    </div>
  );
} 