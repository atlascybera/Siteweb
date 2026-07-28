import React from "react";
import SectionEyebrow from "./SectionEyebrow";
import { SOLUTIONS } from "../data";

export default function Solutions() {
  return (
    <section id="solutions" className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
      <SectionEyebrow>CE QUI NOUS DÉFINIT</SectionEyebrow>
      <h2 className="text-3xl sm:text-4xl font-black text-center uppercase tracking-tight">
        Notre Domaine d'Expertise
      </h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SOLUTIONS.map((s) => (
          <div
            key={s.title}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-8 overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-violet-600/10 blur-2xl" />
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 p-[1px] mb-6">
              <div className="w-full h-full rounded-xl bg-[#0a0a14] flex items-center justify-center">
                <s.icon className="w-6 h-6 text-cyan-300" />
              </div>
            </div>
            <h3 className="font-black tracking-wide text-white">{s.title}</h3>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
