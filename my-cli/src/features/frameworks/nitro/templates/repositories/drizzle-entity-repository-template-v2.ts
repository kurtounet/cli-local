import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function drizzleEntityRepositoryTemplatev2(entity: IEntityJson): string {
  return `// file: server/utils/user.repository.ts

import { db } from '~~/server/utils/db'; 
import { eq, desc } from 'drizzle-orm';
import { ${entity.nameCamelCase} } from '../database/schemas/schema';

export const ${entity.nameCamelCase} Repository = {
  // C: Créer un utilisateur
  create: async (data: { email: string; name?: string }) => {
    const result = await db.insert(${entity.nameCamelCase}).values(data).returning();
    return result[0];
  },

  // R: Lire un utilisateur par ID
  findById: async (id: number) => {
    const result = await db.select().from(${entity.nameCamelCase}).where(eq(${entity.nameCamelCase}.id, id)).limit(1);
    return result[0];
  },

  // R: Lire un utilisateur par email
  findByEmail: async (email: string) => {
    const result = await db.select().from(${entity.nameCamelCase}).where(eq(${entity.nameCamelCase}.email, email)).limit(1);
    return result[0];
  },

  // R: Lire tous les utilisateurs
  findAll: async () => {
    return db.select().from(${entity.nameCamelCase});
  },

  // U: Mettre à jour un utilisateur
  update: async (id: number, data: { name?: string; email?: string }) => {
    const result = await db.update(${entity.nameCamelCase}).set(data).where(eq(${entity.nameCamelCase}.id, id)).returning();
    return result[0];
  },

  // D: Supprimer un utilisateur
  delete: async (id: number) => {
    const result = await db.delete(${entity.nameCamelCase}).where(eq(${entity.nameCamelCase}.id, id)).returning();
    return result[0];
  },
};`;
}
