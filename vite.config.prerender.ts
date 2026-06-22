import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Config Vite usata SOLO per il prerendering (react-snap).
// Differenza dalla config base (vite.config.ts): build.target = "es2017" -> react-snap
// usa un Chromium datato che non capisce "?." / "??"; abbassando il target esbuild
// li trascrive in sintassi compatibile.
// File separato dalla config base: Lovable rigenera vite.config.ts ma NON tocca questo file.
// alias/dedupe replicati identici a vite.config.ts (root) per evitare doppie istanze di React.
//
// base: GitHub Pages gratuito serve il sito da un sottopercorso
// (https://daniel88pl.github.io/studimedicitoscana/), non dalla radice del dominio.
// Se in futuro collegherai un dominio personalizzato, rimetti base a "/".
export default defineConfig({
  base: "/studimedicitoscana/",
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  build: { target: "es2017" },
});
