import React from "react";
import { ArrowRight } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import { SERVICES } from "../data";

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
      <SectionEyebrow>CE QUE NOUS FAISONS</SectionEyebrow>
      <h2 className="text-3xl sm:text-4xl font-black text-center uppercase tracking-tight">
        Nos Services
      </h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-violet-400/50 hover:bg-white/[0.04] transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-600/25 to-cyan-500/25 border border-violet-400/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <s.icon className="w-6 h-6 text-cyan-300" />
            </div>
            <h3 className="font-bold text-sm tracking-wide text-white">
              {s.title}
            </h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              {s.desc}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 mt-5 text-xs font-bold tracking-wide text-fuchsia-300 hover:text-cyan-300 transition-colors"
            >
              EN SAVOIR PLUS <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
