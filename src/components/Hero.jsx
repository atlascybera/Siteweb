import React from "react";
import { Play } from "lucide-react";
import { GradientButton, OutlineButton } from "./Buttons";
import HeroArt from "./HeroArt";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10 grid lg:grid-cols-2 gap-12 items-center"
    >
      <div>
        <p className="text-xs sm:text-sm tracking-[0.35em] text-fuchsia-300 font-semibold mb-5">
          SÉCURITÉ <span className="text-slate-500">|</span> PERFORMANCE{" "}
          <span className="text-slate-500">|</span> ÉVOLUTIVITÉ
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight">
          Protégez.
          <br />
          Optimisez.
          <br />
          Faites{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent">
            évoluer.
          </span>
        </h1>
        <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-md leading-relaxed">
          AtlasCybera accompagne les entreprises dans la sécurisation et
          l'optimisation de leur infrastructure IT avec des solutions
          performantes et évolutives.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <GradientButton>DÉCOUVRIR NOS SERVICES</GradientButton>
          <OutlineButton>
            <Play className="w-4 h-4 fill-current" /> VOIR LA VIDÉO
          </OutlineButton>
        </div>
      </div>

      <HeroArt />
    </section>
  );
}
