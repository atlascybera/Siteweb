import React from "react";
import { STATS } from "../data";

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-white/[0.015]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS.map((s) => (
          <div key={s.label} className="flex items-center gap-4">
            <s.icon className="w-8 h-8 text-violet-300 shrink-0" />
            <div>
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
