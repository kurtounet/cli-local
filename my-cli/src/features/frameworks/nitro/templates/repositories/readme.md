Exactement ! C'est un excellent pattern. Voici comment créer un repository de base à étendre :Parfait ! Voici l'architecture avec héritage :

## 🏗️ Architecture proposée :

### 1. **BaseRepository** (classe abstraite)
- Toutes les méthodes CRUD de base
- Gestion générique des entités
- Méthodes communes (count, exists, findByCriteria)

### 2. **Repositories spécifiques** (héritent de BaseRepository)
- Héritent de toutes les méthodes de base
- Ajoutent leurs méthodes spécifiques

## 🎯 Avantages de cette approche :

### ✅ **Réutilisabilité**
```typescript
// Toutes les entités ont automatiquement :
userRepository.create(data)     // ✅ Hérité
userRepository.findById(id)     // ✅ Hérité  
userRepository.update(id, data) // ✅ Hérité
```

### ✅ **Spécialisation**
```typescript
class UserRepository extends BaseRepository<IUser> {
  // Méthodes spécifiques aux users
  async findByEmail(email: string) { ... }
  async findByRole(role: 'admin' | 'user') { ... }
  async findActive() { ... }
}

class ProductRepository extends BaseRepository<IProduct> {
  // Méthodes spécifiques aux produits
  async findByCategory(categoryId: number) { ... }
  async findInStock() { ... }
  async findByPriceRange(min: number, max: number) { ... }
}
```

### ✅ **Type Safety**
- Chaque repository est typé avec son interface spécifique
- IntelliSense parfait avec les bonnes propriétés

### ✅ **Maintenance**
- Modifications dans BaseRepository = impact sur tous les repos
- Ajout de nouvelles fonctionnalités communes facile

## 🚀 Utilisation :

```typescript
// Le repository hérite de toutes les méthodes de base + ses spécifiques
const user = await userRepository.findById(1);           // Base
const userByEmail = await userRepository.findByEmail('test@test.com'); // Spécifique

const product = await productRepository.findById(1);     // Base  
const inStockProducts = await productRepository.findInStock(); // Spécifique
```

Cette architecture vous donne le meilleur des deux mondes : **réutilisabilité** + **spécialisation** !

// base/base.repository.ts - Repository de base
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq, and, sql } from 'drizzle-orm';

export interface IBaseEntity {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateData {
  [key: string]: any;
}

export interface IUpdateData {
  [key: string]: any;
}

export abstract class BaseRepository<T extends IBaseEntity> {
  protected db: ReturnType<typeof drizzle>;
  protected abstract table: any; // Table Drizzle

  constructor(database?: ReturnType<typeof drizzle>) {
    this.db = database || drizzle(/* votre configuration de DB */);
  }

  /**
   * Crée une nouvelle entité
   */
  async create(data: ICreateData): Promise<T> {
    const [created] = await this.db
      .insert(this.table)
      .values({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .returning();
    
    return created;
  }

  /**
   * Récupère toutes les entités
   */
  async findAll(): Promise<T[]> {
    return await this.db
      .select()
      .from(this.table);
  }

  /**
   * Récupère une entité par son ID
   */
  async findById(id: number): Promise<T | null> {
    const [entity] = await this.db
      .select()
      .from(this.table)
      .where(eq(this.table.id, id));
    
    return entity || null;
  }

  /**
   * Met à jour une entité
   */
  async update(id: number, data: IUpdateData): Promise<T> {
    const [updated] = await this.db
      .update(this.table)
      .set({
        ...data,
        updatedAt: new Date()
      })
      .where(eq(this.table.id, id))
      .returning();
    
    return updated;
  }

  /**
   * Supprime une entité
   */
  async delete(id: number): Promise<boolean> {
    const result = await this.db
      .delete(this.table)
      .where(eq(this.table.id, id));
    
    return result.rowCount > 0;
  }

  /**
   * Recherche selon des critères
   */
  async findByCriteria(criteria: Partial<T>): Promise<T[]> {
    const conditions = Object.entries(criteria)
      .filter(([_, value]) => value !== undefined && value !== null)
      .map(([key, value]) => eq(this.table[key], value));
    
    if (conditions.length === 0) {
      return this.findAll();
    }
    
    return await this.db
      .select()
      .from(this.table)
      .where(and(...conditions));
  }

  /**
   * Compte le nombre total d'entités
   */
  async count(): Promise<number> {
    const [result] = await this.db
      .select({ count: sql\`count(*)\` })
      .from(this.table);
    
    return Number(result.count);
  }

  /**
   * Vérifie si une entité existe par ID
   */
  async exists(id: number): Promise<boolean> {
    const [result] = await this.db
      .select({ id: this.table.id })
      .from(this.table)
      .where(eq(this.table.id, id))
      .limit(1);
    
    return !!result;
  }
}

// Template pour générer des repositories spécifiques
import { IEntityJson } from "@parsersMdj/interfaces/entity-json.model";

export function nitroEntityRepositoryTemplate(entity: IEntityJson): string {
  return `// file: server/api/${entity.nameCamelCase}/${entity.nameCamelCase}.repository.ts
import { BaseRepository } from '~/server/base/base.repository';
import { ${entity.nameCamelCase}Table } from '~/server/database/schema/${entity.nameCamelCase}.schema';

// Interface spécifique pour l'entité ${entity.namePascalCase}
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

export class ${entity.namePascalCase}Repository extends BaseRepository<I${entity.namePascalCase}> {
  protected table = ${entity.nameCamelCase}Table;

  // Méthodes spécifiques à ${entity.namePascalCase} ici
  
  /**
   * Exemple: Recherche par email (si applicable)
   */
  async findByEmail(email: string): Promise<I${entity.namePascalCase} | null> {
    const [${entity.nameCamelCase}] = await this.db
      .select()
      .from(this.table)
      .where(eq(this.table.email, email));
    
    return ${entity.nameCamelCase} || null;
  }

  /**
   * Exemple: Recherche par nom (si applicable)
   */
  async findByName(name: string): Promise<I${entity.namePascalCase}[]> {
    return await this.db
      .select()
      .from(this.table)
      .where(eq(this.table.name, name));
  }

  /**
   * Exemple: Recherche avec pagination
   */
  async findWithPagination(page: number = 1, limit: number = 10): Promise<{
    data: I${entity.namePascalCase}[];
    total: number;
    page: number;
    totalPages: number;
  }> {
    const offset = (page - 1) * limit;
    
    const [data, totalResult] = await Promise.all([
      this.db
        .select()
        .from(this.table)
        .limit(limit)
        .offset(offset),
      this.count()
    ]);

    return {
      data,
      total: totalResult,
      page,
      totalPages: Math.ceil(totalResult / limit)
    };
  }

  /**
   * Exemple: Soft delete (si vous avez un champ deletedAt)
   */
  async softDelete(id: number): Promise<boolean> {
    const result = await this.db
      .update(this.table)
      .set({
        deletedAt: new Date(),
        updatedAt: new Date()
      })
      .where(eq(this.table.id, id));
    
    return result.rowCount > 0;
  }

  /**
   * Exemple: Recherche des entités actives (non supprimées)
   */
  async findAllActive(): Promise<I${entity.namePascalCase}[]> {
    return await this.db
      .select()
      .from(this.table)
      .where(eq(this.table.deletedAt, null));
  }

  // TODO: Ajoutez ici d'autres méthodes spécifiques à ${entity.namePascalCase}
  // Exemples possibles selon l'entité:
  // - findByStatus(status: string)
  // - findByDateRange(startDate: Date, endDate: Date)
  // - findByCategory(categoryId: number)
  // - findExpired()
  // - findActive()
  // - etc.
}

// Instance par défaut
export const ${entity.nameCamelCase}Repository = new ${entity.namePascalCase}Repository();
export default ${entity.nameCamelCase}Repository;`;
}

// Exemple concret d'utilisation
/*
EXEMPLE CONCRET:

=== User Repository ===
class UserRepository extends BaseRepository<IUser> {
  protected table = userTable;

  // Méthodes spécifiques aux users
  async findByEmail(email: string) { ... }
  async findByRole(role: string) { ... }
  async findActive() { ... }
}

=== Product Repository ===
class ProductRepository extends BaseRepository<IProduct> {
  protected table = productTable;

  // Méthodes spécifiques aux produits  
  async findByCategory(categoryId: number) { ... }
  async findByPriceRange(min: number, max: number) { ... }
  async findInStock() { ... }
}

=== Order Repository ===
class OrderRepository extends BaseRepository<IOrder> {
  protected table = orderTable;

  // Méthodes spécifiques aux commandes
  async findByUserId(userId: number) { ... }
  async findByStatus(status: OrderStatus) { ... }
  async findByDateRange(start: Date, end: Date) { ... }
}

AVANTAGES:
✅ Code réutilisable (CRUD de base)
✅ Méthodes spécifiques par entité
✅ Type safety complet
✅ Facile à maintenir et étendre
✅ Cohérence dans toute l'application
*/`;