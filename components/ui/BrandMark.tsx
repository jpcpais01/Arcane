"use client";

import { Sparkles } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import { clsx } from "@/lib/clsx";

/**
 * Marca da Arcane. Mostra o logótipo em /public/images/logo/arcane-mark.png
 * se existir; caso contrário, recorre ao ícone Sparkles sobre o gradiente.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-arcane-deep to-ether-deep shadow-glow",
        className
      )}
    >
      <Sparkles className="text-white" size={18} />
      <SmartImage src="/images/logo/arcane-mark.png" alt="Arcane" />
      <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
    </span>
  );
}
