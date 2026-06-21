"use client";

import { CalendarDays, Clock, Ticket, Users } from "lucide-react";
import { events } from "@/components/data";
import { Reveal } from "@/components/ui/Reveal";
import { clsx } from "@/lib/clsx";

export function CommunityEvents() {
  return (
    <section id="eventos" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      {/* Brilho de fundo */}
      <div
        aria-hidden
        className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-ether/10 blur-[110px]"
      />

      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <span className="eyebrow">
          <Users size={13} className="text-ether-soft" />
          Comunidade & Eventos
        </span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
          A magia acontece <span className="text-gradient">à mesa</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-silver-muted text-pretty">
          Torneios, ligas e noites casuais na nossa loja. Reserva o teu lugar e
          junta-te a quem fala a mesma língua.
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {events.map((event, i) => {
          const filled = event.slotsTotal - event.slotsLeft;
          const pct = Math.round((filled / event.slotsTotal) * 100);
          const almostFull = event.slotsLeft <= 4;

          return (
            <Reveal
              key={event.id}
              as="article"
              delay={i * 0.08}
              className="group relative flex gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              {/* Bloco de data */}
              <div className="flex shrink-0 flex-col items-center justify-center rounded-2xl border border-white/10 bg-obsidian-500/60 px-4 py-3">
                <span
                  className="font-display text-2xl font-bold leading-none text-white"
                  style={{ color: event.accent }}
                >
                  {event.date.split(" ")[0]}
                </span>
                <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-silver-muted">
                  {event.date.split(" ")[1]}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-lg font-bold text-white">
                      {event.title}
                    </h3>
                    <p className="truncate text-sm text-silver-muted">
                      {event.game}
                    </p>
                  </div>
                  {almostFull && (
                    <span className="shrink-0 rounded-full border border-fuchsia-glow/30 bg-fuchsia-glow/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-fuchsia-glow">
                      Últimos lugares
                    </span>
                  )}
                </div>

                {/* Badges */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge icon={<CalendarDays size={12} />}>
                    {event.weekday}
                  </Badge>
                  <Badge icon={<Clock size={12} />}>{event.time}</Badge>
                  <Badge icon={<Ticket size={12} />}>{event.fee}</Badge>
                </div>

                {/* Vagas */}
                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="text-silver-muted">{event.format}</span>
                    <span className="font-semibold text-silver">
                      {event.slotsLeft} vagas
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className={clsx(
                        "h-full rounded-full transition-all duration-700",
                        almostFull
                          ? "bg-gradient-to-r from-fuchsia-glow to-arcane"
                          : "bg-gradient-to-r from-arcane to-ether"
                      )}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} className="mt-8 text-center">
        <a href="#eventos" className="btn-ghost">
          <CalendarDays size={16} className="text-ether-soft" />
          Ver calendário completo
        </a>
      </Reveal>
    </section>
  );
}

function Badge({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-silver-muted">
      <span className="text-silver-faint">{icon}</span>
      {children}
    </span>
  );
}
