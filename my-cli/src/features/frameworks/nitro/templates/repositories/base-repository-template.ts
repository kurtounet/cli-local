import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function baseRepositoryTemplate(): string {
  return `// 2. Base Repository abstrait (repositories/BaseRepository.ts)
import { MySql2Database } from 'drizzle-orm/mysql2';
import { eq, inArray, sql } from 'drizzle-orm';
import { MySqlTable } from 'drizzle-orm/mysql-core';
import { IBaseRepository } from '../interfaces/IBaseRepository';

// Créez un type générique pour votre base de données Drizzle
// qui accepte n'importe quel schéma (TDbSchema)
export type DrizzleDb = MySql2Database<Record<string, MySqlTable>>;
 

export abstract class BaseRepository<T, TInsert, TId = number> 
  implements IBaseRepository<T, TInsert, TId> {
  
  constructor(
    protected db: DrizzleDb,
    protected table: MySqlTable,
    protected idColumn: any
  ) {}

  async findById(id: TId): Promise<T | null> {
    const result = await this.db
      .select()
      .from(this.table)
      .where(eq(this.idColumn, id))
      .limit(1);
    
    return (result[0] as T) || null;
  }

  async findAll(): Promise<T[]> {
    return await this.db.select().from(this.table) as T[];
  }

  async create(entity: TInsert): Promise<T> {
    const result = await this.db
      .insert(this.table)
      .values({
        ...entity,
        createdAt: new Date(),
        updatedAt: new Date()
      } as any);
    
    const insertId = result[0].insertId;
    const created = await this.findById(insertId as TId);
    
    if (!created) {
      throw new Error('Erreur lors de la création de l'entité');
    }
    
    return created;
  }

  async update(id: TId, entity: Partial<TInsert>): Promise<T | null> {
    await this.db
      .update(this.table)
      .set({
        ...entity,
        updatedAt: new Date()
      } as any)
      .where(eq(this.idColumn, id));
    
    return await this.findById(id);
  }

  async delete(id: TId): Promise<boolean> {
    const result = await this.db
      .delete(this.table)
      .where(eq(this.idColumn, id));
    
    return result[0].affectedRows > 0;
  }

  async findMany(ids: TId[]): Promise<T[]> {
    if (ids.length === 0) return [];
    
    return await this.db
      .select()
      .from(this.table)
      .where(inArray(this.idColumn, ids)) as T[];
  }

  async findPaginated(offset: number, limit: number): Promise<T[]> {
    return await this.db
      .select()
      .from(this.table)
      .limit(limit)
      .offset(offset) as T[];
  }

  async count(): Promise<number> {
    const result = await this.db
      .select({ count: sql$\`count(*)\`.mapWith(Number) })
      .from(this.table);
    
    return result[0].count;
  }

  async exists(id: TId): Promise<boolean> {
    const result = await this.db
      .select({ id: this.idColumn })
      .from(this.table)
      .where(eq(this.idColumn, id))
      .limit(1);
    
    return result.length > 0;
  }

  // Méthodes protégées pour les repositories enfants
  protected async findWhere(condition: any): Promise<T[]> {
    return await this.db
      .select()
      .from(this.table)
      .where(condition) as T[];
  }

  protected async findOneWhere(condition: any): Promise<T | null> {
    const result = await this.db
      .select()
      .from(this.table)
      .where(condition)
      .limit(1);
    
    return (result[0] as T) || null;
  }

  protected async updateWhere(condition: any, entity: Partial<TInsert>): Promise<number> {
    const result = await this.db
      .update(this.table)
      .set({
        ...entity,
        updatedAt: new Date()
      } as any)
      .where(condition);
    
    return result[0].affectedRows;
  }

  protected async deleteWhere(condition: any): Promise<number> {
    const result = await this.db
      .delete(this.table)
      .where(condition);
    
    return result[0].affectedRows;
  }
}`;
}