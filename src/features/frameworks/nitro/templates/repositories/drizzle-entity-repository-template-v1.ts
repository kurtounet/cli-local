import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function drizzleEntityRepositoryTemplatev1(entity: IEntityJson): string {
  return `// file: server/api/${entity.nameCamelCase}/${entity.nameCamelCase}.repository.ts

import { db } from '~~/server/utils/db'; 
import { eq, desc } from 'drizzle-orm';
import { ${entity.nameCamelCase} } from '../database/schemas/schema';

export const ${entity.nameCamelCase}Repository = {

  findAll: async () => {
    return db.select().from(${entity.nameCamelCase});
  },

  findById: async (id: number) => {
    const result = await db.select().from(${entity.nameCamelCase}).where(eq(${entity.nameCamelCase}.id, id)).limit(1);
    return result[0];
  },
   
  create: async (data: { email: string; name?: string }) => {
    const result = await db.insert(${entity.nameCamelCase}).values(data).returning();
    return result[0];
  },
   
  update: async (id: number, data: { name?: string; email?: string }) => {
    const result = await db.update(${entity.nameCamelCase}).set(data).where(eq(${entity.nameCamelCase}.id, id)).returning();
    return result[0];
  },

  delete: async (id: number) => {
    const result = await db.delete(${entity.nameCamelCase}).where(eq(${entity.nameCamelCase}.id, id)).returning();
    return result[0];
  },
};`;
}
