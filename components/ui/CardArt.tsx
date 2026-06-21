import { clsx } from "@/lib/clsx";
import { SmartImage } from "@/components/ui/SmartImage";

type CardArtProps = {
  gradient: string;
  emblem: string;
  label?: string;
  className?: string;
  holo?: boolean;
  /** Caminho da imagem da carta (opcional). Sobrepõe-se ao gradiente. */
  image?: string;
  /** Texto alternativo da imagem. */
  alt?: string;
};

/**
 * Carta de TCG. Por defeito é composta apenas por CSS (gradiente + emblema),
 * mas aceita uma `image` que se sobrepõe ao gradiente. Se a imagem faltar,
 * o gradiente mantém-se — nunca há links partidos.
 */
export function CardArt({
  gradient,
  emblem,
  label,
  className,
  holo = true,
  image,
  alt,
}: CardArtProps) {
  return (
    <div
      className={clsx(
        "relative aspect-[5/7] overflow-hidden rounded-2xl border border-white/15 shadow-lift",
        className
      )}
      style={{ background: gradient }}
    >
      {/* Emblema central (fallback quando não há imagem) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-5xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-6xl">
          {emblem}
        </span>
      </div>

      {/* Imagem da carta (sobrepõe-se ao gradiente + emblema) */}
      {image && <SmartImage src={image} alt={alt} />}

      {/* Brilho holográfico */}
      {holo && (
        <div
          aria-hidden
          className="absolute inset-0 opacity-60 mix-blend-overlay"
          style={{
            background:
              "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0.1) 55%, transparent 80%)",
          }}
        />
      )}

      {/* Vinheta + grão de luz */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(255,255,255,0.25), transparent 55%), radial-gradient(120% 90% at 50% 110%, rgba(0,0,0,0.55), transparent 60%)",
        }}
      />

      {/* Moldura interior */}
      <div className="absolute inset-2 rounded-xl border border-white/20" />

      {/* Etiqueta inferior */}
      {label && (
        <div className="absolute inset-x-2 bottom-2 rounded-lg bg-black/35 px-2.5 py-1.5 backdrop-blur-sm">
          <p className="truncate text-[11px] font-semibold tracking-wide text-white/95">
            {label}
          </p>
        </div>
      )}
    </div>
  );
}
