export function SCRIPTS_NITRO_MOCK() {
  return {
    plan: "clinode create:plan gest-project",
    build: "nuxt build",
    seed: "npx tsx server/database/seed/index.ts",
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
    "db:create": "npx tsx scripts/create-database.ts",
    "db:cp": "npx tsx scripts/create-database.ts && npm run db:push",
    "db:g-dev": "npx drizzle-kit generate --config=drizzle-dev.config.ts",
    "db:g-prod": "npx drizzle-kit generate --config=drizzle-prod.config.ts",
  } as Record<string, string>;
}
