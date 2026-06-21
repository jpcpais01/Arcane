import { clsx } from "@/lib/clsx";

type CardArtProps = {
  gradient: string;
  emblem: string;
  label?: string;
  className?: string;
  holo?: boolean;
};

/**
 * Representação estilizada de uma carta de TCG composta apenas por CSS.
 * Sem imagens externas — garante zero links partidos e carregamento instantâneo.
 */
export function CardArt({
  gradient,
  emblem,
  label,
  className,
  holo = true,
}: CardArtProps) {
  return (
    <div
      className={clsx(
        "relative aspect-[5/7] overflow-hidden rounded-2xl border border-white/15 shadow-lift",
        className
      )}
      style={{ background: gradient }}
    >
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

      {/* Emblema central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-5xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-6xl">
          {emblem}
        </span>
      </div>

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
