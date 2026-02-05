import { writeFile } from "@utils/file-utils";

/**
 *
 * @param rootPathProjectFramework
 * @param entities
 * @param types
 */
export function generateTypesDbService(
  rootPathProjectFramework: string,
  entities: string[],
  types: string,
) {
  writeFile(
    `${rootPathProjectFramework}/shared/types/db.d.ts`,
    `import type { InferSelectModel, InferInsertModel } from 'drizzle-orm'
    import type {
       ${entities.join(",\n   ")}
    } from '../../server/database/schemas'
    
     ${types}
     `,
  );
}
