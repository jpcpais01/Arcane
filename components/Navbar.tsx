"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, Sparkles, X } from "lucide-react";
import { navLinks } from "@/components/data";
import { useCart } from "@/components/cart/CartContext";
import { clsx } from "@/lib/clsx";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={clsx(
          "mx-auto flex max-w-6xl items-center gap-3 rounded-full px-3 py-2.5 transition-all duration-500 sm:gap-4 sm:px-4",
          scrolled
            ? "glass-strong shadow-[0_12px_40px_-20px_rgba(0,0,0,0.9)]"
            : "border border-white/[0.06] bg-white/[0.02] backdrop-blur-md"
        )}
      >
        {/* Marca */}
        <a
          href="#topo"
          className="group flex shrink-0 items-center gap-2.5 pl-1"
          aria-label="Arcane — início"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-arcane-deep to-ether-deep shadow-glow">
            <Sparkles className="text-white" size={18} />
            <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Arcane
          </span>
        </a>

        {/* Pesquisa (desktop) */}
        <div className="relative hidden flex-1 items-center lg:flex">
          <Search
            className="pointer-events-none absolute left-3.5 h-4 w-4 text-silver-faint"
            size={16}
          />
          <input
            type="search"
            placeholder="Procurar cartas, coleções ou jogos…"
            aria-label="Procurar cartas, coleções ou jogos"
            className="w-full rounded-full border border-white/10 bg-white/[0.03] py-2 pl-10 pr-4 text-sm text-silver placeholder:text-silver-faint outline-none transition focus:border-arcane/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-arcane/20"
          />
        </div>

        {/* Links (desktop) */}
        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-silver-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          {/* Indicador de idioma */}
          <span className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-silver-muted sm:inline-flex">
            <span aria-hidden>🇵🇹</span> PT-PT
          </span>

          {/* Carrinho */}
          <button
            type="button"
            onClick={openCart}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-silver transition hover:border-white/20 hover:text-white"
            aria-label="Abrir carrinho"
          >
            <ShoppingBag size={18} />
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gradient-to-br from-arcane to-fuchsia-glow px-1 text-[10px] font-bold text-white shadow-glow"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Menu mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-silver transition hover:border-white/20 hover:text-white xl:hidden"
            aria-label="Abrir menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {/* Painel mobile */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-obsidian-500/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-3 top-3 z-50 origin-top rounded-3xl glass-strong p-5 shadow-lift sm:inset-x-5"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-display text-lg font-bold text-white">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-silver"
                  aria-label="Fechar menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative mb-5 flex items-center">
                <Search
                  className="pointer-events-none absolute left-3.5 h-4 w-4 text-silver-faint"
                  size={16}
                />
                <input
                  type="search"
                  placeholder="Procurar cartas…"
                  aria-label="Procurar cartas"
                  className="w-full rounded-full border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm text-silver placeholder:text-silver-faint outline-none focus:border-arcane/50"
                />
              </div>

              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-silver transition hover:bg-white/[0.05] hover:text-white"
                    >
                      {link.label}
                      <span className="text-silver-faint">→</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-silver-muted">
                <span className="inline-flex items-center gap-1.5">
                  <span aria-hidden>🇵🇹</span> Português (PT)
                </span>
                <span>€ EUR</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
