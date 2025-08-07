import { IEntityJson } from "@parsersMdj/models/entity-json.model";

// Template pour Repository en classe
export function nitroEntityRepositoryClassTemplate(entity: IEntityJson): string {
  return `// file: server/api/${entity.nameCamelCase}/${entity.nameCamelCase}.repository.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq, and, sql } from 'drizzle-orm';
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

export class ${entity.namePascalCase}Repository {
  private db: ReturnType<typeof drizzle>;

  constructor(database?: ReturnType<typeof drizzle>) {
    this.db = database || drizzle(/* votre configuration de DB */);
  }

  /**
   * Crée un nouveau ${entity.nameCamelCase}
   */
  async create(data: ICreate${entity.namePascalCase}Data): Promise<I${entity.namePascalCase}> {
    const [created${entity.namePascalCase}] = await this.db
      .insert(${entity.nameCamelCase}Table)
      .values({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .returning();
    
    return created${entity.namePascalCase};
  }

  /**
   * Récupère tous les ${entity.nameCamelCase}s
   */
  async findAll(): Promise<I${entity.namePascalCase}[]> {
    return await this.db
      .select()
      .from(${entity.nameCamelCase}Table);
  }

  /**
   * Récupère un ${entity.nameCamelCase} par son ID
   */
  async findById(id: number): Promise<I${entity.namePascalCase} | null> {
    const [${entity.nameCamelCase}] = await this.db
      .select()
      .from(${entity.nameCamelCase}Table)
      .where(eq(${entity.nameCamelCase}Table.id, id));
    
    return ${entity.nameCamelCase} || null;
  }

  /**
   * Met à jour un ${entity.nameCamelCase}
   */
  async update(id: number, data: IUpdate${entity.namePascalCase}Data): Promise<I${entity.namePascalCase}> {
    const [updated${entity.namePascalCase}] = await this.db
      .update(${entity.nameCamelCase}Table)
      .set({
        ...data,
        updatedAt: new Date()
      })
      .where(eq(${entity.nameCamelCase}Table.id, id))
      .returning();
    
    return updated${entity.namePascalCase};
  }

  /**
   * Supprime un ${entity.nameCamelCase}
   */
  async delete(id: number): Promise<boolean> {
    const result = await this.db
      .delete(${entity.nameCamelCase}Table)
      .where(eq(${entity.nameCamelCase}Table.id, id));
    
    return result.rowCount > 0;
  }

  /**
   * Recherche des ${entity.nameCamelCase}s selon des critères
   */
  async findByCriteria(criteria: Partial<I${entity.namePascalCase}>): Promise<I${entity.namePascalCase}[]> {
    const conditions = Object.entries(criteria)
      .filter(([_, value]) => value !== undefined && value !== null)
      .map(([key, value]) => eq(${entity.nameCamelCase}Table[key as keyof typeof ${entity.nameCamelCase}Table], value));
    
    if (conditions.length === 0) {
      return this.findAll();
    }
    
    return await this.db
      .select()
      .from(${entity.nameCamelCase}Table)
      .where(and(...conditions));
  }

  /**
   * Compte le nombre total de ${entity.nameCamelCase}s
   */
  async count(): Promise<number> {
    const [result] = await this.db
      .select({ count: sql\`count(*)\` })
      .from(${entity.nameCamelCase}Table);
    
    return Number(result.count);
  }

  /**
   * Vérifie si un ${entity.nameCamelCase} existe par ID
   */
  async exists(id: number): Promise<boolean> {
    const [result] = await this.db
      .select({ id: ${entity.nameCamelCase}Table.id })
      .from(${entity.nameCamelCase}Table)
      .where(eq(${entity.nameCamelCase}Table.id, id))
      .limit(1);
    
    return !!result;
  }

  // TODO: Ajoutez ici des méthodes spécifiques à votre entité
}

// Instance par défaut
export const ${entity.nameCamelCase}Repository = new ${entity.namePascalCase}Repository();
export default ${entity.nameCamelCase}Repository;`;
}

// Template pour Service en classe
export function nitroEntityServiceClassTemplate(entity: IEntityJson): string {
  return `// file: server/api/${entity.nameCamelCase}/${entity.nameCamelCase}.service.ts
import { ${entity.namePascalCase}Repository } from './${entity.nameCamelCase}.repository';
import type { 
  I${entity.namePascalCase}, 
  ICreate${entity.namePascalCase}Data, 
  IUpdate${entity.namePascalCase}Data 
} from './${entity.nameCamelCase}.repository';

export class ${entity.namePascalCase}Service {
  private repository: ${entity.namePascalCase}Repository;

  constructor(repository?: ${entity.namePascalCase}Repository) {
    this.repository = repository || new ${entity.namePascalCase}Repository();
  }

  /**
   * Crée un nouveau ${entity.nameCamelCase}
   */
  async create${entity.namePascalCase}(data: ICreate${entity.namePascalCase}Data): Promise<I${entity.namePascalCase}> {
    this.validateCreateData(data);
    return await this.repository.create(data);
  }

  /**
   * Récupère tous les ${entity.nameCamelCase}s
   */
  async getAll${entity.namePascalCase}s(): Promise<I${entity.namePascalCase}[]> {
    return await this.repository.findAll();
  }

  /**
   * Récupère un ${entity.nameCamelCase} par son ID
   */
  async get${entity.namePascalCase}ById(id: number): Promise<I${entity.namePascalCase} | null> {
    this.validateId(id);
    return await this.repository.findById(id);
  }

  /**
   * Met à jour un ${entity.nameCamelCase}
   */
  async update${entity.namePascalCase}(id: number, data: IUpdate${entity.namePascalCase}Data): Promise<I${entity.namePascalCase}> {
    this.validateId(id);
    this.validateUpdateData(data);
    return await this.repository.update(id, data);
  }

  /**
   * Supprime un ${entity.nameCamelCase}
   */
  async delete${entity.namePascalCase}(id: number): Promise<boolean> {
    this.validateId(id);
    return await this.repository.delete(id);
  }

  /**
   * Recherche des ${entity.nameCamelCase}s selon des critères
   */
  async search${entity.namePascalCase}s(criteria: Partial<I${entity.namePascalCase}>): Promise<I${entity.namePascalCase}[]> {
    if (!criteria || Object.keys(criteria).length === 0) {
      return await this.getAll${entity.namePascalCase}s();
    }
    return await this.repository.findByCriteria(criteria);
  }

  /**
   * Compte le nombre total de ${entity.nameCamelCase}s
   */
  async count${entity.namePascalCase}s(): Promise<number> {
    return await this.repository.count();
  }

  /**
   * Vérifie si un ${entity.nameCamelCase} existe
   */
  async ${entity.nameCamelCase}Exists(id: number): Promise<boolean> {
    this.validateId(id);
    return await this.repository.exists(id);
  }

  // Méthodes privées de validation
  private validateId(id: number): void {
    if (!id || id <= 0) {
      throw new Error('Valid ID is required.');
    }
  }

  private validateCreateData(data: ICreate${entity.namePascalCase}Data): void {
    if (!data || Object.keys(data).length === 0) {
      throw new Error('${entity.namePascalCase} data is required.');
    }
    // TODO: Ajoutez ici les validations spécifiques à votre entité
  }

  private validateUpdateData(data: IUpdate${entity.namePascalCase}Data): void {
    if (!data || Object.keys(data).length === 0) {
      throw new Error('Update data is required.');
    }
    // TODO: Ajoutez ici les validations spécifiques à votre entité
  }

  // TODO: Ajoutez ici des méthodes métier spécifiques
}

// Instance par défaut
export const ${entity.nameCamelCase}Service = new ${entity.namePascalCase}Service();
export default ${entity.nameCamelCase}Service;`;
}
