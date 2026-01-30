import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function baseRepositoryTemplate(): string {
  return `import { MySql2Database } from 'drizzle-orm/mysql2';
import { MySqlTable } from 'drizzle-orm/mysql-core';
import { InferInsertModel, InferSelectModel, eq } from 'drizzle-orm';

// 1. Définir des types génériques pour les tables Drizzle
// TTable: le type de la table Drizzle (ex: 'users')
// TSelect: le type de données retourné par une sélection (ex: { id: number, name: string })
// TInsert: le type de données pour l'insertion (ex: { name: string })
export class BaseRepository<TTable extends MySqlTable, TSelect extends InferSelectModel<TTable>, TInsert extends InferInsertModel<TTable>> {
  // 2. Le constructeur prend en argument l'objet de table Drizzle
  // Cela permet à la classe de connaître la table sur laquelle opérer.
  constructor(
    protected readonly db: MySql2Database<any>,
    protected readonly table: TTable,
  ) { }

  // 3. Récupère tous les enregistrements
  async findAll(): Promise<TSelect[]> {
    return (await this.db.select().from(this.table)) as TSelect[];
  }

  // 4. Récupère un enregistrement par son ID
  // Utilisez eq pour la clause WHERE, et this.table pour accéder aux colonnes
  async findById(id: number): Promise<TSelect | null> {     
    const primaryKeyColumn = (this.table as any).id; // Accéder à la colonne de la clé primaire 
    const result = await this.db.select().from(this.table).where(eq(primaryKeyColumn, id)).limit(1);
    if (result.length === 0) {
      return null;
    }
    return result[0] as TSelect | null; //ldJson;
  }

  // 5. Crée un nouvel enregistrement
  // Utilise le type générique TInsert pour les données d'insertion
  async create(data: TInsert) {
  const result = await this.db.insert(this.table).values(data);
  const newId = result[0].insertId
  return (await this.findById(newId))!
}

  // 6. Met à jour un enregistrement
  async update(id: number, data: Partial<TInsert>) {
  const primaryKeyColumn = (this.table as any).id;
  /*
  if (!primaryKeyColumn) {
    throw new Error('La table n\'a pas de colonne "id"');
  }
  */
  await this.db.update(this.table).set(data).where(eq(primaryKeyColumn, id));
  return (await this.findById(id))!;
}

  // 7. Supprime un enregistrement
  async delete (id: number) {
  const primaryKeyColumn = (this.table as any).id;
  /*
  if (!primaryKeyColumn) {
    throw new Error('La table n\'a pas de colonne "id"');
  }
  */
  return await this.db.delete(this.table).where(eq(primaryKeyColumn, id));
}
}
`;
}
