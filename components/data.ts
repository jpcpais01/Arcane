/**
 * Conteúdo da loja Arcane.
 * Todos os preços em euros (EUR) e o texto em Português Europeu (pt-PT).
 * As "artes" das cartas são gradientes CSS — sem imagens externas, sem links partidos.
 */

export type FeaturedSet = {
  id: string;
  name: string;
  tagline: string;
  emblem: string; // símbolo unicode para a arte (fallback)
  items: string; // ex.: "1.240 cartas"
  accent: string; // cor de destaque (texto/glow)
  gradient: string; // gradiente CSS para a arte (fallback)
  image: string; // imagem de fundo do mosaico (sobrepõe-se ao gradiente)
  size: "lg" | "md" | "sm";
};

export const featuredSets: FeaturedSet[] = [
  {
    id: "pokemon",
    name: "Pokémon",
    tagline: "Da Base Set às coleções mais recentes — apanha-as todas.",
    emblem: "◓",
    items: "2.140 referências",
    accent: "#fbbf24",
    gradient:
      "linear-gradient(135deg, #f59e0b 0%, #ef4444 45%, #7c3aed 100%)",
    image: "/images/sets/pokemon.png",
    size: "lg",
  },
  {
    id: "magic",
    name: "Magic: The Gathering",
    tagline: "Os cinco planos de cor à tua espera.",
    emblem: "✦",
    items: "5.860 singles",
    accent: "#a78bfa",
    gradient:
      "linear-gradient(135deg, #6d28d9 0%, #2563eb 50%, #0d9488 100%)",
    image: "/images/sets/magic.png",
    size: "md",
  },
  {
    id: "yugioh",
    name: "Yu-Gi-Oh!",
    tagline: "É hora do duelo. Metas competitivas e clássicos.",
    emblem: "◆",
    items: "3.420 singles",
    accent: "#f472b6",
    gradient:
      "linear-gradient(135deg, #be123c 0%, #9333ea 55%, #1e1b4b 100%)",
    image: "/images/sets/yugioh.png",
    size: "md",
  },
  {
    id: "onepiece",
    name: "One Piece Card Game",
    tagline: "Iça as velas rumo ao topo da Grand Line.",
    emblem: "☠",
    items: "980 referências",
    accent: "#38bdf8",
    gradient:
      "linear-gradient(135deg, #0ea5e9 0%, #6366f1 60%, #db2777 100%)",
    image: "/images/sets/onepiece.png",
    size: "sm",
  },
  {
    id: "lorcana",
    name: "Disney Lorcana",
    tagline: "Encanta a tua coleção com magia ilimitada.",
    emblem: "❉",
    items: "640 referências",
    accent: "#5eead4",
    gradient:
      "linear-gradient(135deg, #0d9488 0%, #6d28d9 65%, #1e1b4b 100%)",
    image: "/images/sets/lorcana.png",
    size: "sm",
  },
];

export type Condition = "Mint" | "Near Mint" | "Excelente" | "Bom";

export type Product = {
  id: string;
  name: string;
  set: string;
  game: string;
  rarity: string;
  condition: Condition;
  price: number;
  gradient: string; // fallback enquanto a imagem não existe
  emblem: string; // fallback enquanto a imagem não existe
  image: string; // arte da carta (sobrepõe-se ao gradiente)
  badge?: string;
};

export const products: Product[] = [
  {
    id: "char-base-4",
    name: "Charizard",
    set: "Base Set · 4/102",
    game: "Pokémon",
    rarity: "Holo Rara",
    condition: "Near Mint",
    price: 489.9,
    gradient: "linear-gradient(150deg, #f97316 0%, #b91c1c 60%, #1e1b4b 100%)",
    emblem: "🔥",
    image: "/images/cards/char-base-4.png",
    badge: "Procurada",
  },
  {
    id: "black-lotus",
    name: "Black Lotus",
    set: "Unlimited · Mox",
    game: "Magic",
    rarity: "Rara",
    condition: "Excelente",
    price: 12500,
    gradient: "linear-gradient(150deg, #111827 0%, #4c1d95 60%, #0d9488 100%)",
    emblem: "✦",
    image: "/images/cards/black-lotus.png",
    badge: "Vault",
  },
  {
    id: "blue-eyes",
    name: "Blue-Eyes White Dragon",
    set: "LOB · 001",
    game: "Yu-Gi-Oh!",
    rarity: "Ultra Rara",
    condition: "Near Mint",
    price: 159.0,
    gradient: "linear-gradient(150deg, #0ea5e9 0%, #4338ca 60%, #1e1b4b 100%)",
    emblem: "🐉",
    image: "/images/cards/blue-eyes.png",
  },
  {
    id: "luffy-leader",
    name: "Monkey D. Luffy",
    set: "OP-01 · Leader",
    game: "One Piece",
    rarity: "Leader",
    condition: "Mint",
    price: 42.5,
    gradient: "linear-gradient(150deg, #ef4444 0%, #db2777 55%, #4c1d95 100%)",
    emblem: "☠",
    image: "/images/cards/luffy-leader.png",
    badge: "Novidade",
  },
  {
    id: "pikachu-illustrator",
    name: "Pikachu Ilustrador",
    set: "Promo · CoroCoro",
    game: "Pokémon",
    rarity: "Promo",
    condition: "Excelente",
    price: 8990,
    gradient: "linear-gradient(150deg, #facc15 0%, #f97316 55%, #7c3aed 100%)",
    emblem: "⚡",
    image: "/images/cards/pikachu-illustrator.png",
    badge: "Graded 9",
  },
  {
    id: "elsa-lorcana",
    name: "Elsa — Rainha das Neves",
    set: "Capítulo 1 · Enchanted",
    game: "Lorcana",
    rarity: "Enchanted",
    condition: "Mint",
    price: 219.0,
    gradient: "linear-gradient(150deg, #22d3ee 0%, #6366f1 55%, #1e1b4b 100%)",
    emblem: "❉",
    image: "/images/cards/elsa-lorcana.png",
  },
  {
    id: "jace-mtg",
    name: "Jace, the Mind Sculptor",
    set: "Worldwake · Mythic",
    game: "Magic",
    rarity: "Mítica",
    condition: "Near Mint",
    price: 74.9,
    gradient: "linear-gradient(150deg, #2563eb 0%, #4c1d95 55%, #0f172a 100%)",
    emblem: "✧",
    image: "/images/cards/jace-mtg.png",
  },
  {
    id: "umbreon-vmax",
    name: "Umbreon VMAX",
    set: "Evolving Skies · Alt Art",
    game: "Pokémon",
    rarity: "Secret Rara",
    condition: "Mint",
    price: 549.0,
    gradient: "linear-gradient(150deg, #6d28d9 0%, #1e293b 55%, #0d9488 100%)",
    emblem: "🌙",
    image: "/images/cards/umbreon-vmax.png",
    badge: "Alt Art",
  },
];

export type GameEvent = {
  id: string;
  title: string;
  game: string;
  format: string;
  date: string; // dia
  weekday: string;
  time: string;
  fee: string;
  slotsLeft: number;
  slotsTotal: number;
  accent: string;
};

export const events: GameEvent[] = [
  {
    id: "mtg-commander",
    title: "Noite de Commander",
    game: "Magic: The Gathering",
    format: "Commander · Casual",
    date: "26 JUN",
    weekday: "Sexta-feira",
    time: "20h30",
    fee: "Entrada livre",
    slotsLeft: 6,
    slotsTotal: 24,
    accent: "#a78bfa",
  },
  {
    id: "pkm-league",
    title: "Liga Pokémon Arcane",
    game: "Pokémon TCG",
    format: "Standard · Ranqueado",
    date: "28 JUN",
    weekday: "Domingo",
    time: "15h00",
    fee: "5 €",
    slotsLeft: 3,
    slotsTotal: 16,
    accent: "#fbbf24",
  },
  {
    id: "op-prerelease",
    title: "Pré-lançamento OP-09",
    game: "One Piece Card Game",
    format: "Sealed · Limitado",
    date: "04 JUL",
    weekday: "Sábado",
    time: "14h00",
    fee: "25 €",
    slotsLeft: 11,
    slotsTotal: 32,
    accent: "#38bdf8",
  },
  {
    id: "ygo-locals",
    title: "Torneio Semanal",
    game: "Yu-Gi-Oh!",
    format: "Advanced · Suíço",
    date: "02 JUL",
    weekday: "Quinta-feira",
    time: "19h00",
    fee: "3 €",
    slotsLeft: 8,
    slotsTotal: 20,
    accent: "#f472b6",
  },
];

export const navLinks = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Cartas Individuais", href: "#stock" },
  { label: "Eventos", href: "#eventos" },
  { label: "A Guilda", href: "#guilda" },
];
