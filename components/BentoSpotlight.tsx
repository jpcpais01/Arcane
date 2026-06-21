"use client";

import { ArrowUpRight, Layers } from "lucide-react";
import { featuredSets } from "@/components/data";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { clsx } from "@/lib/clsx";

const spanByIndex = [
  "sm:col-span-2 sm:row-span-2", // Pokémon — destaque
  "", // Magic
  "", // Yu-Gi-Oh!
  "", // One Piece
  "", // Lorcana
];

export function BentoSpotlight() {
  return (
    <section id="catalogo" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <span className="eyebrow">
          <Layers size={13} className="text-arcane-soft" />
          Coleções em destaque
        </span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
          Escolhe o teu <span className="text-gradient">universo</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-silver-muted text-pretty">
          Das lendas clássicas às últimas expansões. Explora cada linha e
          encontra a carta que falta à tua coleção.
        </p>
      </Reveal>

      <div className="grid auto-rows-[minmax(180px,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredSets.map((set, i) => (
          <Reveal
            key={set.id}
            as="article"
            delay={i * 0.07}
            className={clsx("group", spanByIndex[i])}
          >
            <a
              href="#stock"
              className="relative flex h-full w-full flex-col justify-end overflow-hidden rounded-3xl border border-white/10 p-5 transition-all duration-500 hover:-translate-y-1.5"
              style={{ background: set.gradient }}
            >
              {/* Imagem de fundo (sobrepõe-se ao gradiente; cai para o gradiente se faltar) */}
              <SmartImage
                src={set.image}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              {/* Camada escura para legibilidade */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-obsidian-500/90 via-obsidian-500/40 to-transparent transition-opacity duration-500 group-hover:from-obsidian-500/80"
              />
              {/* Emblema marca de água */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-4 select-none text-[120px] leading-none opacity-20 transition-all duration-700 group-hover:scale-110 group-hover:opacity-30"
              >
                {set.emblem}
              </span>
              {/* Brilho no hover */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  boxShadow: `inset 0 0 60px -10px ${set.accent}66`,
                }}
              />

              <div className="relative z-10">
                <span
                  className="text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: set.accent }}
                >
                  {set.items}
                </span>
                <h3
                  className={clsx(
                    "mt-1.5 font-display font-bold text-white",
                    i === 0 ? "text-2xl sm:text-3xl" : "text-xl"
                  )}
                >
                  {set.name}
                </h3>
                <p className="mt-2 max-w-sm text-sm text-silver-muted">
                  {set.tagline}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                  Explorar coleção
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </a>
          </Reveal>
        ))}

        {/* Tile final — ver tudo */}
        <Reveal
          as="article"
          delay={featuredSets.length * 0.07}
          className="group"
        >
          <a
            href="#stock"
            className="glass relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl p-5 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-arcane/40"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-arcane-deep to-ether-deep shadow-glow transition-transform duration-500 group-hover:scale-110">
              <Layers size={20} className="text-white" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-white">
                Ver todo o catálogo
              </p>
              <p className="mt-1 text-sm text-silver-muted">
                Mais de 30 universos disponíveis
              </p>
            </div>
            <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-arcane-soft">
              Entrar na loja <ArrowUpRight size={15} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
