import { eq, SQL, and, desc, asc } from 'drizzle-orm';
import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import type { MySql2Database } from 'drizzle-orm/mysql2';
import type { AnyMySqlTable, MySqlColumn } from 'drizzle-orm/mysql-core';

type OrderBy<TTable extends AnyMySqlTable> = {
  column: MySqlColumn | ((t: TTable) => MySqlColumn);
  direction?: 'asc' | 'desc';
};

export class BaseRepository<
  TTable extends AnyMySqlTable,
  TEntity extends InferSelectModel<TTable>,
  TCreate extends InferInsertModel<TTable>,
  TId extends keyof TEntity = 'id' & keyof TEntity
> {
  protected db: MySql2Database;
  protected table: TTable;
  protected idCol: any;

  constructor(db: MySql2Database, table: TTable, idColumn: (t: TTable) => any) {
    this.db = db;
    this.table = table;
    this.idCol = idColumn(table);
  }

  async create(values: TCreate): Promise<TEntity> {
    const res = await this.db.insert(this.table).values(values).execute();
    const insertId = (res as any).insertId as number | string | undefined;

    if (insertId === undefined) {
      const [row] = await this.db.select().from(this.table).orderBy(desc(this.idCol)).limit(1);
      return row as TEntity;
    }

    const [created] = await this.db.select().from(this.table).where(eq(this.idCol, insertId as any)).limit(1);
    return created as TEntity;
  }

  async findById(id: TEntity[TId]): Promise<TEntity | undefined> {
    const [row] = await this.db.select().from(this.table).where(eq(this.idCol, id as any)).limit(1);
    return row as TEntity | undefined;
  }

  async findOne(where: SQL): Promise<TEntity | undefined> {
    const [row] = await this.db.select().from(this.table).where(where).limit(1);
    return row as TEntity | undefined;
  }

  async findAll(options?: {
    where?: SQL | SQL[];
    orderBy?: OrderBy<TTable> | OrderBy<TTable>[];
    offset?: number;
    limit?: number;
  }): Promise<TEntity[]> {
    const { where, orderBy, offset, limit } = options ?? {};
    const qb = this.db.select().from(this.table);

    if (where) {
      const condition = Array.isArray(where) ? and(...where) : where;
      (qb as any).where(condition);
    }
    if (orderBy) {
      const orders = Array.isArray(orderBy) ? orderBy : [orderBy];
      (qb as any).orderBy(
        ...orders.map(o => {
          const col = typeof o.column === 'function' ? o.column(this.table) : o.column;
          return o.direction === 'desc' ? desc(col) : asc(col);
        })
      );
    }
    if (typeof offset === 'number') (qb as any).offset(offset);
    if (typeof limit === 'number') (qb as any).limit(limit);

    return (await (qb as any)) as TEntity[];
  }

  async count(where?: SQL | SQL[]): Promise<number> {
    const qb = this.db.select({ c: (this.db as any).sql<number>`count(*)`.as('c') }).from(this.table);
    if (where) {
      const condition = Array.isArray(where) ? and(...where) : where;
      (qb as any).where(condition);
    }
    const [{ c }] = (await qb) as { c: number }[];
    return Number(c);
  }

  async updateById(id: TEntity[TId], values: Partial<TCreate>): Promise<void> {
    await this.db.update(this.table).set(values as any).where(eq(this.idCol, id as any)).execute();
  }

  async deleteById(id: TEntity[TId]): Promise<void> {
    await this.db.delete(this.table).where(eq(this.idCol, id as any)).execute();
  }
}