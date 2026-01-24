import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"], // On force l'ESM pour Node moderne
  dts: true, // Génère les fichiers de définition .d.ts
  splitting: false,
  sourcemap: true,
  clean: true, // Nettoie le dossier dist à chaque build
  minify: true, // Réduit la taille du fichier final
  banner: {
    js: "#!/usr/bin/env node", // Crucial : rend le fichier exécutable par Node
  },
});
