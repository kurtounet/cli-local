export function SCRIPTS_ELECTRON_MOCK() {
  return {
    plan: "clinode create:plan gest-project",
    build: "nuxt build",
    seed: "npx tsx server/database/seeds/index.ts",
    dev: "nuxt dev",
    generate: "nuxt generate",
    preview: "nuxt preview",
    postinstall: "nuxt prepare",
    "db:generate": "drizzle-kit generate",
    "db:migrate": "drizzle-kit migrate",
    "db:push": "drizzle-kit push",
    "db:pull": "drizzle-kit pull",
    lint: "npx eslint . --fix",
    format: "npx prettier --write .",
  } as Record<string, string>;
}
