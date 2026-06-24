import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartContext";

const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const SITE_URL = "https://arcane-tcg.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arcane — O Santuário dos Trading Card Games",
    template: "%s · Arcane",
  },
  description:
    "A loja online de Trading Card Games em Portugal. Cartas individuais autenticadas, coleções seladas e acessórios. Compramos também a tua coleção. Envios rápidos para todo o país.",
  keywords: [
    "TCG",
    "Trading Card Games",
    "Pokémon",
    "Magic: The Gathering",
    "Yu-Gi-Oh!",
    "One Piece Card Game",
    "cartas colecionáveis",
    "loja de cartas Portugal",
  ],
  authors: [{ name: "Arcane" }],
  creator: "Arcane",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    title: "Arcane — O Santuário dos Trading Card Games",
    description:
      "Loja online de cartas individuais autenticadas e coleções seladas. Envios rápidos para todo o país.",
    siteName: "Arcane",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcane — O Santuário dos Trading Card Games",
    description:
      "A loja definitiva de Trading Card Games em Portugal.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06060d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className={`${display.variable} ${sans.variable}`}>
      <body className="relative min-h-screen font-sans">
        {/* Ambient background layers */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-obsidian-400"
        >
          {/* Top arcane bloom */}
          <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-arcane/20 blur-[120px]" />
          {/* Teal accent bloom */}
          <div className="absolute right-[-10%] top-[30%] h-[420px] w-[420px] rounded-full bg-ether/10 blur-[120px]" />
          {/* Bottom fuchsia bloom */}
          <div className="absolute bottom-[-10%] left-[-5%] h-[420px] w-[520px] rounded-full bg-fuchsia-glow/10 blur-[130px]" />
          {/* Faint grid */}
          <div className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-[0.5] mask-fade-b" />
          {/* Film grain */}
          <div className="noise absolute inset-0 opacity-[0.035] mix-blend-soft-light" />
        </div>

        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
