"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Check, Plus, ShieldCheck } from "lucide-react";
import { products, type Condition, type Product } from "@/components/data";
import { formatEuro, useCart } from "@/components/cart/CartContext";
import { CardArt } from "@/components/ui/CardArt";
import { Reveal } from "@/components/ui/Reveal";
import { clsx } from "@/lib/clsx";

const filters = ["Tudo", "Pokémon", "Magic", "Yu-Gi-Oh!", "One Piece"] as const;

const conditionStyles: Record<Condition, string> = {
  Mint: "text-emerald-glow border-emerald-glow/30 bg-emerald-glow/10",
  "Near Mint": "text-ether-soft border-ether/30 bg-ether/10",
  Excelente: "text-arcane-soft border-arcane/30 bg-arcane/10",
  Bom: "text-amber-300 border-amber-400/30 bg-amber-400/10",
};

export function LiveStock() {
  const [active, setActive] = useState<(typeof filters)[number]>("Tudo");

  const visible = useMemo(() => {
    if (active === "Tudo") return products;
    return products.filter((p) =>
      p.game.toLowerCase().includes(active.toLowerCase().replace("!", ""))
    );
  }, [active]);

  return (
    <section id="stock" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <Reveal className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <span className="eyebrow">
            <ShieldCheck size={13} className="text-ether-soft" />
            Stock ao vivo
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Cartas Individuais
          </h2>
          <p className="mt-4 text-base text-silver-muted text-pretty">
            Singles autenticados, com estado verificado carta a carta.
            Acabadinhos de chegar à loja.
          </p>
        </div>
      </Reveal>

      {/* Filtros */}
      <Reveal delay={0.1} className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
              active === f
                ? "border-arcane/50 bg-arcane/15 text-white shadow-glow"
                : "border-white/10 bg-white/[0.03] text-silver-muted hover:border-white/20 hover:text-white"
            )}
          >
            {f}
          </button>
        ))}
      </Reveal>

      {/* Grelha de produtos */}
      <motion.div
        layout
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        {visible.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </motion.div>

      {visible.length === 0 && (
        <p className="py-12 text-center text-silver-muted">
          Sem cartas desta linha de momento. Volta em breve!
        </p>
      )}
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      meta: `${product.game} · ${product.condition}`,
      price: product.price,
      gradient: product.gradient,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
      className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-lift"
    >
      <div className="relative">
        <CardArt
          gradient={product.gradient}
          emblem={product.emblem}
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {product.badge && (
          <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full border border-white/20 bg-obsidian-500/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
            <BadgeCheck size={11} className="text-ether-soft" />
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-1 pt-3">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-[11px] font-medium uppercase tracking-wide text-silver-faint">
            {product.game}
          </span>
          <span
            className={clsx(
              "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold",
              conditionStyles[product.condition]
            )}
          >
            {product.condition}
          </span>
        </div>

        <h3 className="mt-1 truncate font-display text-sm font-bold text-white">
          {product.name}
        </h3>
        <p className="truncate text-xs text-silver-muted">{product.set}</p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="font-display text-base font-bold text-white">
            {formatEuro(product.price)}
          </span>
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Adicionar ${product.name} ao carrinho`}
            className={clsx(
              "grid h-9 w-9 shrink-0 place-items-center rounded-full text-white transition-all duration-300",
              added
                ? "bg-emerald-glow/90 shadow-glow-ether"
                : "bg-gradient-to-br from-arcane-deep to-arcane hover:shadow-glow"
            )}
          >
            {added ? <Check size={16} /> : <Plus size={16} />}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
