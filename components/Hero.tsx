"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { CardArt } from "@/components/ui/CardArt";
import { SmartImage } from "@/components/ui/SmartImage";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const stats = [
  { value: "14.000+", label: "Cartas em stock" },
  { value: "48h", label: "Envio para todo o país" },
  { value: "4.9★", label: "Avaliação dos clientes" },
];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:pb-24 lg:pt-44"
    >
      {/* Fundo atmosférico full-bleed (opcional) — gradiente ambiente por baixo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[680px] w-screen -translate-x-1/2 overflow-hidden"
      >
        <SmartImage
          src="/images/hero/hero-bg.jpg"
          className="opacity-25 mask-fade-b"
        />
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Coluna de texto */}
        <div className="text-center lg:text-left">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-start"
          >
            <span className="eyebrow">
              <Sparkles size={13} className="text-arcane-soft" />
              O santuário dos colecionadores
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            animate="visible"
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
          >
            Onde cada carta
            <br className="hidden sm:block" />{" "}
            guarda uma <span className="text-gradient">magia própria</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-silver-muted text-pretty sm:text-lg lg:mx-0"
          >
            Bem-vindo à Arcane — a tua loja online de Pokémon, Magic,
            Yu-Gi-Oh! e One Piece. Cartas individuais autenticadas e coleções
            seladas, entregues à tua porta em 48 horas.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.3}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a href="#catalogo" className="btn-glow group w-full sm:w-auto">
              Explorar Catálogo
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a href="#stock" className="btn-ghost w-full sm:w-auto">
              <Zap size={16} className="text-ether-soft" />
              Ver Novidades
            </a>
          </motion.div>

          {/* Estatísticas */}
          <motion.dl
            variants={fadeUp}
            custom={0.45}
            initial="hidden"
            animate="visible"
            className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-6"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {s.value}
                </dd>
                <p className="mt-1 text-xs text-silver-muted sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Showcase de cartas flutuantes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="perspective relative mx-auto h-[380px] w-full max-w-md sm:h-[460px] lg:h-[520px]"
        >
          {/* Anel rúnico de fundo */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 sm:h-[400px] sm:w-[400px]"
          >
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/10" />
            <div className="absolute inset-6 animate-glow-pulse rounded-full bg-arcane/20 blur-3xl" />
            <div className="absolute inset-10 rounded-full border border-white/[0.06]" />
          </div>

          {/* Carta central */}
          <div className="absolute left-1/2 top-1/2 z-20 w-40 -translate-x-1/2 -translate-y-1/2 animate-float-slow sm:w-48">
            <div className="rotate-[-4deg]">
              <CardArt
                gradient="linear-gradient(150deg, #7c3aed 0%, #db2777 55%, #0d9488 100%)"
                emblem="✦"
                label="Arcane · Mythic"
                image="/images/hero/card-arcane.png"
                alt="Carta lendária da Arcane"
                className="shadow-glow"
              />
            </div>
          </div>

          {/* Carta esquerda */}
          <div className="absolute left-[2%] top-[14%] z-10 w-28 animate-float-slower sm:w-32">
            <div className="rotate-[-14deg]">
              <CardArt
                gradient="linear-gradient(150deg, #f59e0b 0%, #ef4444 60%, #1e1b4b 100%)"
                emblem="🔥"
                image="/images/cards/char-base-4.png"
                alt="Charizard"
                holo={false}
              />
            </div>
          </div>

          {/* Carta direita */}
          <div className="absolute right-[2%] top-[20%] z-10 w-28 animate-float-slow sm:w-32">
            <div className="rotate-[12deg]">
              <CardArt
                gradient="linear-gradient(150deg, #0ea5e9 0%, #4338ca 60%, #1e1b4b 100%)"
                emblem="🐉"
                image="/images/cards/blue-eyes.png"
                alt="Blue-Eyes White Dragon"
                holo={false}
              />
            </div>
          </div>

          {/* Carta inferior */}
          <div className="absolute bottom-[2%] left-[26%] z-30 w-24 animate-float-slower sm:w-28">
            <div className="rotate-[6deg]">
              <CardArt
                gradient="linear-gradient(150deg, #22d3ee 0%, #6366f1 60%, #1e1b4b 100%)"
                emblem="❉"
                image="/images/cards/elsa-lorcana.png"
                alt="Elsa — Rainha das Neves"
                holo={false}
              />
            </div>
          </div>

          {/* Partículas / estrelas */}
          <Star
            className="absolute right-[16%] top-[8%] animate-glow-pulse text-arcane-glow"
            size={18}
            fill="currentColor"
          />
          <Sparkles
            className="absolute bottom-[16%] right-[8%] animate-float-slow text-ether-soft"
            size={22}
          />
          <Star
            className="absolute left-[10%] bottom-[28%] animate-glow-pulse text-fuchsia-glow"
            size={14}
            fill="currentColor"
          />
        </motion.div>
      </div>

      {/* Faixa de marcas / marquee */}
      <BrandMarquee />
    </section>
  );
}

function BrandMarquee() {
  const brands = [
    "Pokémon",
    "Magic: The Gathering",
    "Yu-Gi-Oh!",
    "One Piece",
    "Disney Lorcana",
    "Digimon",
    "Flesh and Blood",
  ];
  return (
    <div className="relative mt-16 overflow-hidden">
      <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-silver-faint">
        Trabalhamos com os maiores universos
      </p>
      <div
        className="flex w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="whitespace-nowrap font-display text-lg font-semibold text-silver-faint/80 transition-colors hover:text-silver"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
