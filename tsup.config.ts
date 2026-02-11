import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"], // On force l'ESM pour Node moderne
  dts: true, // Génère les fichiers de définition .d.ts
  splitting: false,
  sourcemap: true,
  clean: true, // Nettoie le dossier dist à chaque build
  // esbuildOptions(options) {
  //   options.alias = {
  //     "@": "./src",
  //   };
  // },
  minify: true, // Réduit la taille du fichier final
  shims: true, // Activer les shims pour les modules externes
  tsconfig: "tsconfig.cli.json",
  banner: {
    js: `#!/usr/bin/env node
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
`, // Crucial : rend le fichier exécutable par Node
  },
  platform: "node",
  target: "node22", // Match your Node v22.15.0
  external: ["fs", "path", "util", "url"],
});
