# Arcane — Loja Online de Trading Card Games

Website moderno e responsivo para uma loja online de TCG (Pokémon, Magic, Yu-Gi-Oh!, One Piece e mais), com estética _"mystical geek"_, modo escuro, glassmorphism e micro-interações. Todo o conteúdo em **Português Europeu (pt-PT)**.

Construído com **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion** e **lucide-react**. Otimizado para deploy na **Vercel**.

## ✨ Destaques

- **Mobile-first** e totalmente responsivo (do smartphone ao monitor ultra-wide).
- **Modo escuro** por defeito, com fundos obsidiana, acentos arcanos (roxo/teal/esmeralda) e profundidade.
- **Navbar flutuante** com glassmorphism, pesquisa, indicador de idioma e carrinho funcional.
- **Hero** com cartas flutuantes e geometria mística (apenas CSS — zero imagens externas).
- **Bento grid** assimétrico para coleções em destaque.
- **Stock ao vivo** com filtros por jogo e botão "Adicionar" ligado a um carrinho real (com drawer animado).
- **Como funciona** — fluxo de compra online em 3 passos + CTA de compra de coleções (buylist).
- **Carrinho** completo: quantidades, subtotal, envio grátis acima de 50 €, total.
- Acessibilidade: `lang="pt-PT"`, `aria-labels`, suporte a `prefers-reduced-motion`.
- Sem dependência de imagens externas → **nenhum link partido**, carregamento instantâneo.

## 🚀 Começar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Scripts

| Comando         | Descrição                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento        |
| `npm run build` | Build de produção                  |
| `npm run start` | Servir o build de produção         |
| `npm run lint`  | Análise estática com ESLint        |

## ☁️ Deploy na Vercel

1. Faz push do repositório para o GitHub/GitLab/Bitbucket.
2. Importa o projeto em [vercel.com/new](https://vercel.com/new).
3. A Vercel deteta o Next.js automaticamente — sem configuração extra.

## 🗂️ Estrutura

```
app/
  layout.tsx        # Metadados pt-PT, fontes, fundo ambiente, providers
  page.tsx          # Composição da página única
  globals.css       # Sistema de design (Tailwind + utilidades)
  icon.svg          # Favicon da marca
components/
  Navbar.tsx        # Cabeçalho flutuante + menu mobile
  Hero.tsx          # Secção de entrada + cartas flutuantes
  BentoSpotlight.tsx# Grelha bento de coleções
  LiveStock.tsx     # Cartas individuais + filtros
  HowItWorks.tsx    # Fluxo de compra online + buylist
  Trust.tsx         # Valores da loja
  Footer.tsx        # Newsletter + rodapé
  data.ts           # Conteúdo (coleções, produtos)
  cart/             # Contexto e drawer do carrinho
  ui/               # CardArt + Reveal (componentes reutilizáveis)
lib/
  clsx.ts           # Utilitário de classes
```

## 🎨 Personalização

- **Paleta e animações:** `tailwind.config.ts`.
- **Conteúdo da loja:** `components/data.ts`.
- **Estilos base / utilidades:** `app/globals.css`.

---

Feito com 🔮 para colecionadores.
