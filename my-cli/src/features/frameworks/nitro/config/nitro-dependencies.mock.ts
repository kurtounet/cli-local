export function DEPENDENCIES_NITRO_MOCK() {
  return {
    packageManager: "npm",
    prod: ["drizzle-kit", "drizzle-orm", "mysql2", "zod"],
    dev: ["@types/node", "drizzle-seed"],
  };
}
