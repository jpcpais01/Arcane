"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { formatEuro, useCart } from "@/components/cart/CartContext";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, total, count } =
    useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const shipping = total > 0 && total < 50 ? 3.99 : 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-obsidian-500/70 backdrop-blur-sm"
            aria-hidden
          />
          <motion.aside
            role="dialog"
            aria-label="Carrinho de compras"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col glass-strong shadow-lift"
          >
            {/* Cabeçalho */}
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-arcane-deep to-ether-deep">
                  <ShoppingBag size={17} className="text-white" />
                </span>
                <div>
                  <h2 className="font-display text-base font-bold text-white">
                    O teu Carrinho
                  </h2>
                  <p className="text-xs text-silver-muted">
                    {count} {count === 1 ? "artigo" : "artigos"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-silver transition hover:text-white"
                aria-label="Fechar carrinho"
              >
                <X size={18} />
              </button>
            </div>

            {/* Conteúdo */}
            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-silver-faint">
                  <ShoppingBag size={26} />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-white">
                    O carrinho está vazio
                  </p>
                  <p className="mt-1 text-sm text-silver-muted">
                    Explora o catálogo e adiciona as tuas cartas favoritas.
                  </p>
                </div>
                <button onClick={closeCart} className="btn-ghost mt-2 text-sm">
                  Continuar a explorar
                </button>
              </div>
            ) : (
              <>
                <ul className="flex-1 space-y-3 overflow-y-auto p-5">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3"
                    >
                      <div
                        className="h-20 w-14 shrink-0 rounded-lg border border-white/15"
                        style={{ background: item.gradient }}
                      />
                      <div className="flex min-w-0 flex-1 flex-col">
                        <p className="truncate text-sm font-semibold text-white">
                          {item.name}
                        </p>
                        <p className="truncate text-xs text-silver-muted">
                          {item.meta}
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-2">
                          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-0.5">
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, -1)}
                              className="grid h-6 w-6 place-items-center rounded-full text-silver-muted transition hover:bg-white/10 hover:text-white"
                              aria-label="Diminuir quantidade"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-5 text-center text-xs font-semibold text-white">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, 1)}
                              className="grid h-6 w-6 place-items-center rounded-full text-silver-muted transition hover:bg-white/10 hover:text-white"
                              aria-label="Aumentar quantidade"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <span className="text-sm font-semibold text-white">
                            {formatEuro(item.price * item.qty)}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="self-start text-silver-faint transition hover:text-fuchsia-glow"
                        aria-label={`Remover ${item.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Rodapé / resumo */}
                <div className="space-y-3 border-t border-white/10 p-5">
                  <div className="flex items-center justify-between text-sm text-silver-muted">
                    <span>Subtotal</span>
                    <span className="text-silver">{formatEuro(total)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-silver-muted">
                    <span>Envio</span>
                    <span className="text-silver">
                      {shipping === 0 ? "Grátis" : formatEuro(shipping)}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="rounded-xl border border-ether/20 bg-ether/[0.06] px-3 py-2 text-xs text-ether-soft">
                      Faltam {formatEuro(50 - total)} para envio grátis em
                      Portugal continental.
                    </p>
                  )}
                  <div className="flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="font-display text-base font-bold text-white">
                      Total
                    </span>
                    <span className="font-display text-lg font-bold text-gradient">
                      {formatEuro(total + shipping)}
                    </span>
                  </div>
                  <button className="btn-glow w-full">Finalizar compra</button>
                  <p className="text-center text-[11px] text-silver-faint">
                    Pagamento seguro · MB WAY, Multibanco e cartão
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
