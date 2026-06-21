type ClassValue = string | number | null | false | undefined;

/** Junta classes de forma condicional, ignorando valores vazios. */
export function clsx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
