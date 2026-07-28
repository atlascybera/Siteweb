import React from "react";
import { GradientButton, OutlineButton } from "./Buttons";

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
      <div className="relative rounded-2xl overflow-hidden border border-violet-500/30 p-10 sm:p-16 text-center bg-gradient-to-br from-violet-900/40 via-[#0a0a14] to-cyan-900/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.25),transparent_60%)]" />
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
            <span className="bg-gradient-to-r from-fuchsia-400 to-violet-300 bg-clip-text text-transparent">
              Prêt à sécuriser l'avenir avec nous ?
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Discutons de vos enjeux IT et construisons ensemble une
            infrastructure sécurisée, performante et évolutive.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <GradientButton>DEMANDER UN AUDIT GRATUIT</GradientButton>
            <OutlineButton>NOUS CONTACTER</OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}
