import React from "react";
import SectionEyebrow from "./SectionEyebrow";
import { ABOUT, CORE_VALUES } from "../data";

export default function WhyUs() {
  return (
    <section
      id="apropos"
      className="max-w-7xl mx-auto px-5 sm:px-8 py-24 grid lg:grid-cols-2 gap-14 items-center"
    >
      <div>
        <SectionEyebrow>{ABOUT.eyebrow}</SectionEyebrow>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
          Qui Sommes-Nous{" "}
          <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
            ?
          </span>
        </h2>

        <div className="mt-6 space-y-4">
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-400 leading-relaxed">
              {i === 0 ? (
                <>
                  <span className="text-white font-bold">AtlasCybera</span>
                  {p.replace("AtlasCybera", "")}
                </>
              ) : (
                p
              )}
            </p>
          ))}
        </div>
      </div>

      <div className="relative rounded-2xl border border-violet-500/20 bg-white/[0.02] p-8">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-500/10 pointer-events-none" />
        <div className="relative">
          <h3 className="text-sm font-black tracking-wide text-cyan-300 mb-6">
            AU CŒUR D'ATLASCYBERA
          </h3>
          <ul className="space-y-4">
            {CORE_VALUES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-400 shrink-0" />
                <span className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
