import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureBar from "./components/FeatureBar";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Solutions from "./components/Solutions";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#05050c] text-slate-100 font-sans selection:bg-fuchsia-500/40">
      {/* background ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-700/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-fuchsia-600/10 blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <FeatureBar />
        <Services />
        <Stats />
        <WhyUs />
        <Solutions />
        <Team />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
