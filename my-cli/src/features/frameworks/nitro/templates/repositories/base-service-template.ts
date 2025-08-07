import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function baseServiceTemplate(): string {
  return `import { IBaseRepository } from '../interfaces/IBaseRepository';

export abstract class BaseService<T, TInsert, TId = number> {
  constructor(
    protected repository: IBaseRepository<T, TInsert, TId>
  ) {}

  async getById(id: TId): Promise<T | null> {
    this.validateId(id);
    return await this.repository.findById(id);
  }

  async getAll(): Promise<T[]> {
    return await this.repository.findAll();
  }

  async create(entity: TInsert): Promise<T> {
    await this.validateCreate(entity);
    return await this.repository.create(entity);
  }

  async update(id: TId, entity: Partial<TInsert>): Promise<T | null> {
    this.validateId(id);
    await this.validateUpdate(id, entity);
    
    const exists = await this.repository.exists(id);
    if (!exists) {
      throw new Error('Entité introuvable');
    }

    return await this.repository.update(id, entity);
  }

  async delete(id: TId): Promise<boolean> {
    this.validateId(id);
    
    const exists = await this.repository.exists(id);
    if (!exists) {
      throw new Error('Entité introuvable');
    }

    return await this.repository.delete(id);
  }

  async getMany(ids: TId[]): Promise<T[]> {
    if (!Array.isArray(ids) || ids.length === 0) {
      return [];
    }
    return await this.repository.findMany(ids);
  }

  async getPaginated(page: number = 1, limit: number = 10): Promise<T[]> {
    if (page < 1) page = 1;
    if (limit < 1) limit = 10;
    if (limit > 100) limit = 100; // Limite de sécurité
    
    const offset = (page - 1) * limit;
    return await this.repository.findPaginated(offset, limit);
  }

  async getCount(): Promise<number> {
    return await this.repository.count();
  }

  async exists(id: TId): Promise<boolean> {
    this.validateId(id);
    return await this.repository.exists(id);
  }

  // Méthodes de validation à override dans les services enfants
  protected validateId(id: TId): void {
    if (typeof id === 'number' && (id <= 0 || !Number.isInteger(id))) {
      throw new Error('ID invalide');
    }
  }

  protected async validateCreate(entity: TInsert): Promise<void> {
    // À implémenter dans les services enfants
  }

  protected async validateUpdate(id: TId, entity: Partial<TInsert>): Promise<void> {
    // À implémenter dans les services enfants
  }

  // Méthodes utilitaires
  protected async ensureExists(id: TId): Promise<T> {
    const entity = await this.repository.findById(id);
    if (!entity) {
      throw new Error('Entité introuvable');
    }
    return entity;
  }
}
}`;
}