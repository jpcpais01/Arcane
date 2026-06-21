import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep obsidian / slate backgrounds
        obsidian: {
          DEFAULT: "#06060d",
          50: "#13131f",
          100: "#0f0f1a",
          200: "#0b0b14",
          300: "#08080f",
          400: "#06060d",
          500: "#040409",
        },
        // Magical accents
        arcane: {
          DEFAULT: "#8b5cf6",
          soft: "#a78bfa",
          deep: "#6d28d9",
          glow: "#c4b5fd",
        },
        ether: {
          DEFAULT: "#2dd4bf",
          soft: "#5eead4",
          deep: "#0d9488",
        },
        emerald: {
          glow: "#34d399",
        },
        fuchsia: {
          glow: "#d946ef",
        },
        // Typography
        silver: {
          DEFAULT: "#e9e9f3",
          muted: "#a3a3b8",
          faint: "#6f6f87",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139,92,246,0.25), 0 8px 40px -8px rgba(139,92,246,0.45)",
        "glow-ether":
          "0 0 0 1px rgba(45,212,191,0.25), 0 8px 40px -8px rgba(45,212,191,0.4)",
        lift: "0 24px 60px -24px rgba(0,0,0,0.8)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "radial-faded":
          "radial-gradient(60% 60% at 50% 0%, rgba(139,92,246,0.18) 0%, rgba(6,6,13,0) 70%)",
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(var(--tw-rotate, 0deg))" },
          "50%": { transform: "translateY(-18px) rotate(var(--tw-rotate, 0deg))" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-26px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.06)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "float-slow": "float-slow 7s ease-in-out infinite",
        "float-slower": "float-slower 9s ease-in-out infinite",
        "glow-pulse": "glow-pulse 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
