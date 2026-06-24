import { BadgeCheck, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const values = [
  {
    icon: Truck,
    title: "Envios rápidos em Portugal",
    desc: "Expedimos em 24h e entregamos em 48h para todo o país, ilhas incluídas.",
    accent: "from-arcane-deep to-arcane",
  },
  {
    icon: BadgeCheck,
    title: "Cartas autênticas e graded",
    desc: "Cada single é verificado à mão. Trabalhamos com cartas PSA, BGS e CGC.",
    accent: "from-ether-deep to-ether",
  },
  {
    icon: ShieldCheck,
    title: "Compra protegida",
    desc: "Pagamento seguro com MB WAY, Multibanco e cartão. Devoluções sem stress.",
    accent: "from-fuchsia-glow to-arcane",
  },
  {
    icon: PackageCheck,
    title: "Embalagem à prova de coleção",
    desc: "Sleeve, toploader e envelope rígido em todas as encomendas. As tuas cartas chegam impecáveis.",
    accent: "from-emerald-glow to-ether",
  },
];

export function Trust() {
  return (
    <section id="guilda" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <Reveal
            key={v.title}
            delay={i * 0.07}
            className="glass group flex flex-col gap-4 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20"
          >
            <span
              className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${v.accent} shadow-glow transition-transform duration-500 group-hover:scale-110`}
            >
              <v.icon size={22} className="text-white" />
            </span>
            <div>
              <h3 className="font-display text-base font-bold text-white">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-silver-muted">
                {v.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
