import { writeFile } from "@utils/file-utils";

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
