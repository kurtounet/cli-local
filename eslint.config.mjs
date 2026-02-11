import js from "@eslint/js";
import globals from "globals";
// import css from "@eslint/css";
import json from "@eslint/json";
import jsdoc from "eslint-plugin-jsdoc";
import markdown from "@eslint/markdown";
import tseslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // --- 1. IGNORES GLOBAUX (doit être au début) ---
  {
    ignores: [
      ".cli-local/**",
      ".doc/**",
      "dist/**",
      "bin/**",
      "node_modules/**",
      "old_cli/**",
      "output/**",
      "plugins/**",
      "project-test/**",
      "tree/**",
      "package-lock.json",
    ],
  },

  // --- 2. BASE JS & TS ---
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  jsdoc.configs["flat/recommended-typescript"], // Active la JSDoc version TS

  // --- 3. RÈGLES CLI & NAMING ---
  {
    files: ["**/*.{ts,mts,cts,js,mjs,cjs}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
      jsdoc: jsdoc, // On déclare le plugin ici
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      // Pour une CLI, on autorise le console.log
      "no-console": "off",
      // La règle qui va attraper ton "cliError"
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "class",
          format: ["PascalCase"],
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: { regex: "^I[A-Z]", match: true }, // Force le préfixe 'I'
        },
      ],

      // Autres règles de pro pour CLI
      // 2. Configuration JSDoc (pour qu'elle soit utile sans être chiante)
      "jsdoc/require-jsdoc": "warn", // Demande JSDoc sur l'export public
      "jsdoc/require-description": "warn",
      "jsdoc/require-param-type": "off",
      "jsdoc/require-param-description": "warn",
      "jsdoc/check-values": "error",
      "jsdoc/check-tag-names": "warn",
      "jsdoc/require-hyphen-before-param-description": ["warn", "always"],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "no-process-exit": "off", // Souvent nécessaire dans les scripts CLI
    },
  },

  // --- 4. JSON & CONFIGS ---
  {
    files: ["**/*.json", "**/*.jsonc", "**/*.json5"],
    language: "json/json",
    plugins: { json },
    rules: {
      "json/no-duplicate-keys": "error",
      "json/no-empty-keys": "error",
    },
  },

  // --- 5. DOCUMENTATION (Markdown) ---
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/commonmark",
  },

  // --- 6. STYLING (CSS) ---
  // {
  //   files: ["**/*.css"],
  //   plugins: { css },
  //   language: "css/css",
  //   rules: {
  //     "css/no-duplicate-imports": "error",
  //   },
  // },
]);
