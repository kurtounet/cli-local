import { writeFile } from "@utils/file-utils";

export function generateZodSchemaDbService(
    rootPathProjectFramework: string,
      entities: string[],
      zodSchemas: string,
    ) {
      writeFile(
        `${rootPathProjectFramework}/shared/zod/db.schemas.ts`,
        `import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
    import type {
       ${entities.join(",\n   ")}
    } from '../../server/database/schemas'
    
     ${zodSchemas}
     `,
      );
}