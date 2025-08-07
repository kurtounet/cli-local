import { writeFile } from "@utils/file-utils";
 
import { logSuccess } from "@utils/logger";

export function nitroGenerateEntityDrizzleService(
  rootServerApi: string,
  schemas: string,
) {
  writeFile(
    `${rootServerApi}/database/schemas.ts`,
    schemas,
  );
  logSuccess(`Génération des schemas pour drizzle`);
 
}
