"use client";

import {
  ArrowRight,
  Coins,
  MousePointerClick,
  PackageCheck,
  Truck,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: MousePointerClick,
    step: "01",
    title: "Escolhe as tuas cartas",
    desc: "Explora milhares de singles autenticados e coleções seladas. Adiciona ao carrinho num clique.",
    accent: "from-arcane-deep to-arcane",
  },
  {
    icon: PackageCheck,
    step: "02",
    title: "Verificamos e embalamos",
    desc: "Cada carta é inspecionada à mão e protegida com sleeve, toploader e envelope rígido.",
    accent: "from-ether-deep to-ether",
  },
  {
    icon: Truck,
    step: "03",
    title: "Recebe em casa",
    desc: "Expedição registada em 24h e entrega em 48h para todo o país — ilhas incluídas.",
    accent: "from-fuchsia-glow to-arcane",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28"
    >
      {/* Brilho de fundo */}
      <div
        aria-hidden
        className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-arcane/10 blur-[120px]"
      />

      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <span className="eyebrow">
          <PackageCheck size={13} className="text-ether-soft" />
          Comprar é simples
        </span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
          Da montra à tua mesa em{" "}
          <span className="text-gradient">48 horas</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-silver-muted text-pretty">
          Loja 100% online. Tratamos cada encomenda com o cuidado de um
          colecionador — do clique à entrega.
        </p>
      </Reveal>

      {/* Passos */}
      <div className="grid gap-4 sm:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal
            key={s.step}
            as="article"
            delay={i * 0.1}
            className="glass group relative flex flex-col gap-4 overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20"
          >
            <div className="flex items-center justify-between">
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${s.accent} shadow-glow transition-transform duration-500 group-hover:scale-110`}
              >
                <s.icon size={22} className="text-white" />
              </span>
              <span className="font-display text-4xl font-bold leading-none text-white/10">
                {s.step}
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-silver-muted">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* CTA — compramos as tuas cartas (buylist) */}
      <div id="vender" className="mt-6 scroll-mt-24">
        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ether-deep/25 via-obsidian-100 to-arcane-deep/25 p-8 sm:p-10">
            <div
              aria-hidden
              className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-ether/20 blur-3xl"
            />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-glow to-ether shadow-glow-ether">
                  <Coins size={22} className="text-white" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Também compramos as tuas cartas
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-silver-muted text-pretty">
                    Envia-nos a tua lista e recebe uma avaliação justa em 24h.
                    Pagamento imediato por transferência ou crédito na loja.
                  </p>
                </div>
              </div>
              <a
                href="mailto:ola@arcane.pt"
                className="btn-glow shrink-0 justify-center"
              >
                Vender as minhas cartas
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
