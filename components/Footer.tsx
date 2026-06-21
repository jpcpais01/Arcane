"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Sparkles,
  Twitch,
  Youtube,
} from "lucide-react";

const shopLinks = [
  { label: "Pokémon", href: "#catalogo" },
  { label: "Magic: The Gathering", href: "#catalogo" },
  { label: "Yu-Gi-Oh!", href: "#catalogo" },
  { label: "One Piece Card Game", href: "#catalogo" },
  { label: "Acessórios & Sleeves", href: "#catalogo" },
];

const helpLinks = [
  { label: "Envios e devoluções", href: "#" },
  { label: "Estado das encomendas", href: "#" },
  { label: "Autenticação de cartas", href: "#" },
  { label: "Contacto", href: "#" },
  { label: "Perguntas frequentes", href: "#" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Twitch, label: "Twitch", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    window.setTimeout(() => setDone(false), 3000);
  };

  return (
    <footer className="relative mt-10">
      {/* Newsletter */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-arcane-deep/30 via-obsidian-100 to-ether-deep/20 p-8 sm:p-12">
          <div
            aria-hidden
            className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-arcane/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-12 -left-10 h-48 w-48 rounded-full bg-ether/15 blur-3xl"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="eyebrow">
                <Sparkles size={13} className="text-arcane-soft" />
                Newsletter
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white text-balance sm:text-3xl">
                Junta-te à Guilda
              </h2>
              <p className="mt-3 max-w-md text-silver-muted text-pretty">
                Recebe em primeira mão os novos lançamentos, restocks e
                convites para eventos exclusivos. Sem spam, prometido.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Mail
                    className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-silver-faint"
                    size={16}
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="o.teu@email.pt"
                    aria-label="O teu email"
                    className="w-full rounded-full border border-white/10 bg-obsidian-500/60 py-3.5 pl-11 pr-4 text-sm text-silver placeholder:text-silver-faint outline-none transition focus:border-arcane/50 focus:ring-2 focus:ring-arcane/20"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-glow shrink-0 justify-center"
                >
                  {done ? (
                    <>
                      <Check size={17} /> Inscrito!
                    </>
                  ) : (
                    <>
                      Subscrever <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
              <p className="mt-3 text-xs text-silver-faint">
                Ao subscreveres, aceitas a nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Corpo do rodapé */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Marca */}
          <div>
            <a href="#topo" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-arcane-deep to-ether-deep shadow-glow">
                <Sparkles size={18} className="text-white" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Arcane
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-silver-muted">
              O santuário dos Trading Card Games em Portugal. Feito por
              jogadores, para jogadores.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-silver-muted transition hover:-translate-y-0.5 hover:border-arcane/40 hover:text-white"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Loja */}
          <nav aria-label="Loja">
            <h3 className="text-sm font-semibold text-white">Loja</h3>
            <ul className="mt-4 space-y-2.5">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-silver-muted transition hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Ajuda */}
          <nav aria-label="Apoio ao cliente">
            <h3 className="text-sm font-semibold text-white">Apoio</h3>
            <ul className="mt-4 space-y-2.5">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-silver-muted transition hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Loja física */}
          <div>
            <h3 className="text-sm font-semibold text-white">Visita-nos</h3>
            <ul className="mt-4 space-y-3.5 text-sm text-silver-muted">
              <li className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-arcane-soft" />
                <span>
                  Rua dos Encantados, 42
                  <br />
                  1200-109 Lisboa, Portugal
                </span>
              </li>
              <li className="flex gap-3">
                <Clock size={17} className="mt-0.5 shrink-0 text-ether-soft" />
                <span>
                  Seg — Sáb · 10h às 20h
                  <br />
                  Domingo · 14h às 19h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-silver-faint">
            © {new Date().getFullYear()} Arcane. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5 text-xs text-silver-faint">
            <a href="#" className="transition hover:text-silver">
              Termos
            </a>
            <a href="#" className="transition hover:text-silver">
              Privacidade
            </a>
            <a href="#" className="transition hover:text-silver">
              Cookies
            </a>
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden>🇵🇹</span> Português (PT)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
