import React from "react";
import { FEATURES } from "../data";

export default function FeatureBar() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8">
      <div className="rounded-2xl border border-violet-500/20 bg-white/[0.02] p-6 sm:p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((f) => (
          <div key={f.title} className="flex gap-4">
            <div className="w-11 h-11 shrink-0 rounded-lg bg-gradient-to-br from-violet-600/20 to-cyan-500/20 border border-violet-400/30 flex items-center justify-center">
              <f.icon className="w-5 h-5 text-violet-300" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-wide text-white">
                {f.title}
              </div>
              <div className="text-sm text-slate-400 mt-1 leading-snug">
                {f.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
