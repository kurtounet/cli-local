// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true, // Permet d'utiliser 'describe', 'it', 'expect' sans les importer
    environment: "node", // ou 'jsdom' pour du React/Vue
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/tests/**", // Exclure les fichiers de données pour les tests
      "**/*.manual.test.ts", // Exclure des tests que tu veux lancer à la main
      "src/types/**", // Pas besoin de chercher des tests là-dedans
      "**/project-test/**", // Pas besoin de chercher des tests là-dedans
    ],
  },
});
