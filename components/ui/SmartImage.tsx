import { clsx } from "@/lib/clsx";

type SmartImageProps = {
  src: string;
  /** Texto alternativo. Se omitido, a imagem é tratada como decorativa. */
  alt?: string;
  className?: string;
  /** Posição do fundo (ex.: "center", "top"). Default: "center". */
  position?: string;
};

/**
 * Camada de imagem baseada em `background-image`, posicionada sobre o elemento
 * pai (que deve ser `relative`/`absolute`). Se o ficheiro ainda não existir,
 * o browser simplesmente não pinta nada — o gradiente/placeholder por baixo
 * permanece visível. Nunca aparece o ícone de "imagem partida" nem há erros.
 *
 * Basta colocares o ficheiro na pasta indicada e a imagem aparece — sem
 * alterar código.
 */
export function SmartImage({
  src,
  alt,
  className,
  position = "center",
}: SmartImageProps) {
  return (
    <span
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      className={clsx(
        "pointer-events-none absolute inset-0 bg-cover bg-no-repeat",
        className
      )}
      style={{ backgroundImage: `url("${src}")`, backgroundPosition: position }}
    />
  );
}
