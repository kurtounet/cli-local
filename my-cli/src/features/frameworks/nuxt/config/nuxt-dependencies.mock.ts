export function DEPENDENCIES_NUXT_MOCK() {
  return {
    packageManager: "npm",
    prod: [
      "zod",
      "pinia",
      "@pinia/nuxt"
    ],
    dev: [
      'drizzle-seed',
      "prettier-eslint",
      "@nuxtjs/tailwindcss",
      "@nuxt/eslint",
      "drizzle-orm",
      "drizzle-kit",
      "mysql2",
      "dotenv",
      "tsx",
      "@types/dotenv",
      "@types/node",
      "@faker-js/faker",
    ],
  };
}
