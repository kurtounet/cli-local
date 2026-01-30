import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function drizzleEntityRepositoryTemplate(entity: IEntityJson): string {
  return `// file: server/api/${entity.nameCamelCase}/${entity.nameCamelCase}.repository.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq, and } from 'drizzle-orm';
import { ${entity.nameCamelCase}Table } from '~/server/database/schema/${entity.nameCamelCase}.schema';

// Interface pour l'entité ${entity.namePascalCase}
export interface I${entity.namePascalCase} {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  // TODO: Ajoutez ici les propriétés spécifiques à ${entity.namePascalCase}
}

// Interface pour la création
export interface ICreate${entity.namePascalCase}Data {
  // TODO: Ajoutez ici les champs spécifiques pour la création
  [key: string]: any;
}

// Interface pour la mise à jour
export interface IUpdate${entity.namePascalCase}Data {
  // TODO: Ajoutez ici les champs spécifiques pour la mise à jour
  [key: string]: any;
}

export const ${entity.nameCamelCase}Repository = {
  /**
   * Crée un nouveau ${entity.nameCamelCase}
   */
  async create(data: ICreate${entity.namePascalCase}Data): Promise<I${entity.namePascalCase}> {
    const db = drizzle(/* votre configuration de DB */);
    
    const [created${entity.namePascalCase}] = await db
      .insert(${entity.nameCamelCase}Table)
      .values({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .returning();
    
    return created${entity.namePascalCase};
  },

  /**
   * Récupère tous les ${entity.nameCamelCase}s
   */
  async findAll(): Promise<I${entity.namePascalCase}[]> {
    const db = drizzle(/* votre configuration de DB */);
    
    return await db
      .select()
      .from(${entity.nameCamelCase}Table);
  },

  /**
   * Récupère un ${entity.nameCamelCase} par son ID
   */
  async findById(id: number): Promise<I${entity.namePascalCase} | null> {
    const db = drizzle(/* votre configuration de DB */);
    
    const [${entity.nameCamelCase}] = await db
      .select()
      .from(${entity.nameCamelCase}Table)
      .where(eq(${entity.nameCamelCase}Table.id, id));
    
    return ${entity.nameCamelCase} || null;
  },

  /**
   * Met à jour un ${entity.nameCamelCase}
   */
  async update(id: number, data: IUpdate${entity.namePascalCase}Data): Promise<I${entity.namePascalCase}> {
    const db = drizzle(/* votre configuration de DB */);
    
    const [updated${entity.namePascalCase}] = await db
      .update(${entity.nameCamelCase}Table)
      .set({
        ...data,
        updatedAt: new Date()
      })
      .where(eq(${entity.nameCamelCase}Table.id, id))
      .returning();
    
    return updated${entity.namePascalCase};
  },

  /**
   * Supprime un ${entity.nameCamelCase}
   */
  async delete(id: number): Promise<boolean> {
    const db = drizzle(/* votre configuration de DB */);
    
    const result = await db
      .delete(${entity.nameCamelCase}Table)
      .where(eq(${entity.nameCamelCase}Table.id, id));
    
    return result.rowCount > 0;
  },

  /**
   * Recherche des ${entity.nameCamelCase}s selon des critères
   */
  async findByCriteria(criteria: Partial<I${entity.namePascalCase}>): Promise<I${entity.namePascalCase}[]> {
    const db = drizzle(/* votre configuration de DB */);
    
    // Construction dynamique des conditions WHERE
    const conditions = Object.entries(criteria)
      .filter(([_, value]) => value !== undefined && value !== null)
      .map(([key, value]) => eq(${entity.nameCamelCase}Table[key as keyof typeof ${entity.nameCamelCase}Table], value));
    
    if (conditions.length === 0) {
      return this.findAll();
    }
    
    return await db
      .select()
      .from(${entity.nameCamelCase}Table)
      .where(and(...conditions));
  },

  /**
   * Compte le nombre total de ${entity.nameCamelCase}s
   */
  async count(): Promise<number> {
    const db = drizzle(/* votre configuration de DB */);
    
    const [result] = await db
      .select({ count: sql\`count(*)\` })
      .from(${entity.nameCamelCase}Table);
    
    return Number(result.count);
  },

  /**
   * Vérifie si un ${entity.nameCamelCase} existe par ID
   */
  async exists(id: number): Promise<boolean> {
    const db = drizzle(/* votre configuration de DB */);
    
    const [result] = await db
      .select({ id: ${entity.nameCamelCase}Table.id })
      .from(${entity.nameCamelCase}Table)
      .where(eq(${entity.nameCamelCase}Table.id, id))
      .limit(1);
    
    return !!result;
  }

  // TODO: Ajoutez ici des méthodes spécifiques à votre entité
  // Exemple:
  // async findByEmail(email: string): Promise<I${entity.namePascalCase} | null> {
  //   const db = drizzle(/* votre configuration de DB */);
  //   const [${entity.nameCamelCase}] = await db
  //     .select()
  //     .from(${entity.nameCamelCase}Table)
  //     .where(eq(${entity.nameCamelCase}Table.email, email));
  //   return ${entity.nameCamelCase} || null;
  // }
};

export default ${entity.nameCamelCase}Repository;`;
}
