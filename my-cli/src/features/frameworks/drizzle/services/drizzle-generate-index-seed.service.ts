import { camelToKebab, capitalize } from "@utils/convert";
import { writeFile } from "@utils/file-utils";
import { logInfo } from "@utils/logger";

export function drizzleGenerateIndexSeedService(
  rootServer: string,
  entities: string[],
) {
  writeFile(
    `${rootServer}/database/seed/index.ts`,
    `import { db } from '../../database/db'
import * as schema from '../schemas'
import { reset } from 'drizzle-seed'
  ${entities.map((entity: string) => `import { seed${capitalize(entity)} } from './${camelToKebab(entity)}.seed'`).join("\n")}     
async function main() {
  
  await reset(db, schema)
  ${entities.map((entity: string) => `await seed${capitalize(entity)}()`).join("\n")}   
}  
main().catch(e => {
 console.error("Error seeding database:", e);
  process.exit(1)
})
`,
  );
  logInfo("✅ Création du fichier index.ts");
}
