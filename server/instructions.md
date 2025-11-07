
Implement ce qu'il a ci dessous.

---

# 🧱 Arborescence

```
.
├─ server/
│  ├─ core/
│  │  ├─ baseRepository.ts
│  │  ├─ baseService.ts
│  │  ├─ errors.ts
│  │  └─ pagination.ts
│  ├─ db/
│  │  ├─ index.ts
│  │  ├─ migrate.ts
│  │  └─ schema.ts
│  ├─ features/
│  │  └─ users/
│  │     ├─ user.repository.ts
│  │     ├─ user.service.ts
│  │     └─ user.schemas.ts
│  └─ routes/
│     └─ api/
│        └─ users/
│           ├─ index.get.ts
│           ├─ index.post.ts
│           ├─ [id].get.ts
│           ├─ [id].put.ts
│           └─ [id].delete.ts
├─ drizzle.config.ts
├─ nitro.config.ts
├─ tsconfig.json
├─ package.json
└─ .env.example
```

---

# ⚙️ Config & Dépendances

## `package.json`

```json
{
  "name": "nitro-drizzle-zod-crud",
  "version": "1.0.0",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "nitro dev",
    "build": "nitro build",
    "start": "node .output/server/index.mjs",
    "db:generate": "drizzle-kit generate",
    "db:migrate": "tsx server/db/migrate.ts"
  },
  "dependencies": {
    "drizzle-orm": "^0.33.0",
    "mysql2": "^3.9.7",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/node": "^20.12.7",
    "drizzle-kit": "^0.24.0",
    "nitropack": "^2.9.0",
    "tsx": "^4.7.0",
    "typescript": "^5.4.0"
  }
}
```

## `tsconfig.json`

```json
{
  "extends": "./.nitro/tsconfig.json",
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "paths": {
      "#db/*": ["./server/db/*"],
      "#core/*": ["./server/core/*"],
      "#users/*": ["./server/features/users/*"]
    }
  },
  "include": ["server", "nitro.config.ts", "drizzle.config.ts"]
}
```

## `nitro.config.ts`

```ts
import { defineNitroConfig } from 'nitropack';

export default defineNitroConfig({
  preset: 'node-server',
  runtimeConfig: {
    DATABASE_URL: '', // lu via process.env en prod
  },
  srcDir: '.',
});
```

## `.env.example`

```
# mysql://USER:PASSWORD@HOST:PORT/DB
DATABASE_URL="mysql://root:root@localhost:3306/cruddb"
PORT=3000
```

## `drizzle.config.ts`

```ts
import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './server/db/schema.ts',
  out: './drizzle',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL!
  },
  strict: true
} satisfies Config;
```

---

# 🗄️ Drizzle (DB)

## `server/db/schema.ts`

```ts
import { mysqlTable, serial, varchar, timestamp, uniqueIndex } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 120 }).notNull(),
  email: varchar('email', { length: 190 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()
}, (t) => ({
  emailUnique: uniqueIndex('users_email_unique').on(t.email)
}));
```

## `server/db/index.ts`

```ts
import 'dotenv/config';
import { createPool } from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';
import * as schema from './schema';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) throw new Error('DATABASE_URL manquant');

export const pool = createPool({
  uri: DATABASE_URL,
  connectionLimit: 10
});

export const db = drizzle(pool, { schema });
export type DB = typeof db;
```

## `server/db/migrate.ts`

```ts
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { db, pool } from './index';

async function main() {
  logInfo('➡️  Migrations…');
  await migrate(db, { migrationsFolder: 'drizzle' });
  logInfo('✅ OK');
  await pool.end();
}
main().catch(async (e) => {
  console.error('❌', e);
  await pool.end();
  process.exit(1);
});
```

---

# 🧩 Core (Base Repository/Service + erreurs)

## `server/core/errors.ts`

```ts
export class AppError extends Error {
  status: number;
  code?: string;
  details?: unknown;
  constructor(message: string, status = 400, code?: string, details?: unknown) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
  }
}
export class NotFoundError extends AppError {
  constructor(message = 'Ressource introuvable') { super(message, 404); }
}
export class ConflictError extends AppError {
  constructor(message = 'Conflit de ressource') { super(message, 409); }
}
export class ValidationError extends AppError {
  constructor(details?: unknown, message = 'Données invalides') { super(message, 400, 'VALIDATION_ERROR', details); }
}
```

## `server/core/pagination.ts`

```ts
export type PageParams = { page?: number; pageSize?: number };
export type PageResult<T> = {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};
```

## `server/core/baseRepository.ts`

```ts
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
```

## `server/core/baseService.ts`

```ts
import type { ZodSchema } from 'zod';
import type { PageParams, PageResult } from './pagination';
import { AppError, NotFoundError, ValidationError } from './errors';

export class BaseService<TEntity, TCreate, TUpdate> {
  protected repo: {
    create: (data: TCreate) => Promise<TEntity>;
    findById: (id: number | string) => Promise<TEntity | undefined>;
    findAll: (args?: any) => Promise<TEntity[]>;
    count: (where?: any) => Promise<number>;
    updateById: (id: number | string, data: Partial<TUpdate>) => Promise<void>;
    deleteById: (id: number | string) => Promise<void>;
  };

  constructor(
    protected deps: {
      repo: BaseService<TEntity, TCreate, TUpdate>['repo'];
      createSchema: ZodSchema<TCreate>;
      updateSchema: ZodSchema<TUpdate>;
    }
  ) {
    this.repo = deps.repo;
  }

  async create(payload: unknown): Promise<TEntity> {
    const parsed = this.deps.createSchema.safeParse(payload);
    if (!parsed.success) {
      throw new ValidationError(parsed.error.format());
    }
    return this.repo.create(parsed.data);
  }

  async getById(id: number | string): Promise<TEntity> {
    const row = await this.repo.findById(id);
    if (!row) throw new NotFoundError();
    return row;
  }

  async list(pageParams: PageParams = {}, options?: { where?: any; orderBy?: any }): Promise<PageResult<TEntity>> {
    const page = Math.max(1, pageParams.page ?? 1);
    const pageSize = Math.min(100, Math.max(1, pageParams.pageSize ?? 20));
    const offset = (page - 1) * pageSize;

    const [data, total] = await Promise.all([
      this.repo.findAll({ ...options, offset, limit: pageSize }),
      this.repo.count(options?.where),
    ]);

    return { data, page, pageSize, total, totalPages: Math.max(1, Math.ceil(total / pageSize)) };
  }

  async update(id: number | string, payload: unknown): Promise<TEntity> {
    const parsed = this.deps.updateSchema.safeParse(payload);
    if (!parsed.success) {
      throw new ValidationError(parsed.error.format());
    }
    await this.getById(id);
    await this.repo.updateById(id, parsed.data as Partial<TUpdate>);
    return this.getById(id);
  }

  async delete(id: number | string): Promise<TEntity> {
    const row = await this.getById(id);
    await this.repo.deleteById(id);
    return row;
  }

  protected fail(message: string, status = 400): never {
    throw new AppError(message, status);
  }
}
```

---

# 👤 Users (Schemas + Repo + Service)

## `server/features/users/user.schemas.ts`

```ts
import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1, 'Le nom est requis').max(120),
  email: z.string().email('Email invalide').max(190),
});

export const updateUserSchema = createUserSchema.partial().refine(
  (d) => Object.keys(d).length > 0,
  { message: 'Fournissez au moins un champ' }
);

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
```

## `server/features/users/user.repository.ts`

```ts
import type { MySql2Database } from 'drizzle-orm/mysql2';
import { BaseRepository } from '#core/baseRepository';
import { users } from '#db/schema';
import type { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import { eq } from 'drizzle-orm';

export type UserEntity = InferSelectModel<typeof users>;
export type UserCreate = InferInsertModel<typeof users>;

export class UserRepository extends BaseRepository<typeof users, UserEntity, UserCreate, 'id'> {
  constructor(db: MySql2Database) {
    super(db, users, (t) => t.id);
  }
  findByEmail(email: string) {
    return this.findOne(eq(users.email, email));
  }
}
```

## `server/features/users/user.service.ts`

```ts
import { BaseService } from '#core/baseService';
import { createUserSchema, updateUserSchema } from './user.schemas';
import type { UserEntity, UserCreate } from './user.repository';
import { UserRepository } from './user.repository';
import { ConflictError } from '#core/errors';

export class UserService extends BaseService<UserEntity, UserCreate, Partial<UserCreate>> {
  private repoImpl: UserRepository;
  constructor(repo: UserRepository) {
    super({ repo, createSchema: createUserSchema, updateSchema: updateUserSchema });
    this.repoImpl = repo;
  }

  async ensureEmailFree(email: string, excludeId?: number) {
    const existing = await this.repoImpl.findByEmail(email);
    if (existing && existing.id !== excludeId) throw new ConflictError('Email déjà utilisé');
  }

  async create(payload: unknown) {
    const parsed = createUserSchema.parse(payload);
    await this.ensureEmailFree(parsed.email);
    return this.repoImpl.create(parsed);
  }

  async update(id: number, payload: unknown) {
    const parsed = updateUserSchema.parse(payload);
    if (parsed.email) await this.ensureEmailFree(parsed.email, id);
    await this.repoImpl.updateById(id, parsed);
    return this.repoImpl.findById(id).then(u => u!);
  }
}
```

---

# 🛣️ Routes Nitro (h3)

> Dans Nitro, chaque fichier = une route. On utilise `defineEventHandler`, `readBody`, `getQuery`, et on mappe nos erreurs custom vers des `createError`.

### Utilitaire d’injection service

Crée une petite factory pour éviter de recréer repo/service à chaque appel (Nitro garde les modules en mémoire en dev/prod Node).

```ts
// server/routes/api/users/_ctx.ts
import { db } from '#db/index';
import { UserRepository } from '#users/user.repository';
import { UserService } from '#users/user.service';

const repo = new UserRepository(db);
export const userService = new UserService(repo);
```

### Mapper d’erreurs vers h3

```ts
// server/routes/api/users/_errors.ts
import { createError } from 'h3';
import { AppError } from '#core/errors';

export function toHttp(err: any) {
  if (err instanceof AppError) {
    return createError({ statusCode: err.status, statusMessage: err.message, data: err.details ?? { code: err.code } });
  }
  // MySQL duplicate
  if (err?.code === 'ER_DUP_ENTRY') {
    return createError({ statusCode: 409, statusMessage: 'Conflit de ressource (duplication)' });
  }
  return createError({ statusCode: 500, statusMessage: 'Erreur serveur' });
}
```

### `GET /api/users` (list + pagination)

```ts
// server/routes/api/users/index.get.ts
import { defineEventHandler, getQuery } from 'h3';
import { userService } from './_ctx';
import { toHttp } from './_errors';

export default defineEventHandler(async (event) => {
  try {
    const q = getQuery(event);
    const page = Number(q.page ?? '1');
    const pageSize = Number(q.pageSize ?? '20');

    const result = await userService.list({ page, pageSize }, {
      orderBy: { column: (t: any) => t.id, direction: 'asc' }
    });

    return result;
  } catch (err) {
    throw toHttp(err);
  }
});
```

### `POST /api/users` (create)

```ts
// server/routes/api/users/index.post.ts
import { defineEventHandler, readBody } from 'h3';
import { userService } from './_ctx';
import { toHttp } from './_errors';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const created = await userService.create(body);
    event.node.res.statusCode = 201;
    return created;
  } catch (err) {
    throw toHttp(err);
  }
});
```

### `GET /api/users/:id`

```ts
// server/routes/api/users/[id].get.ts
import { defineEventHandler } from 'h3';
import { userService } from './_ctx';
import { toHttp } from './_errors';

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params!.id);
    if (Number.isNaN(id)) throw toHttp(new Error('id invalide'));
    return await userService.getById(id);
  } catch (err) {
    throw toHttp(err);
  }
});
```

### `PUT /api/users/:id`

```ts
// server/routes/api/users/[id].put.ts
import { defineEventHandler, readBody } from 'h3';
import { userService } from './_ctx';
import { toHttp } from './_errors';

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params!.id);
    if (Number.isNaN(id)) throw toHttp(new Error('id invalide'));
    const body = await readBody(event);
    return await userService.update(id, body);
  } catch (err) {
    throw toHttp(err);
  }
});
```

### `DELETE /api/users/:id`

```ts
// server/routes/api/users/[id].delete.ts
import { defineEventHandler } from 'h3';
import { userService } from './_ctx';
import { toHttp } from './_errors';

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params!.id);
    if (Number.isNaN(id)) throw toHttp(new Error('id invalide'));
    return await userService.delete(id);
  } catch (err) {
    throw toHttp(err);
  }
});
```

---

# ▶️ Démarrage

```bash
# 1) Dépendances
npm i

# 2) Env
cp .env.example .env
# (adapte DATABASE_URL si besoin)

# 3) Générer migrations
npm run db:generate

# 4) Appliquer migrations
npm run db:migrate

# 5) Dev server Nitro
npm run dev
# ➜ http://localhost:3000/api/users
```

# 🧪 Tests rapides

```bash
# Create
curl -s -X POST http://localhost:3000/api/users \
 -H 'content-type: application/json' \
 -d '{"name":"Alice","email":"alice@example.com"}' | jq

# List
curl -s 'http://localhost:3000/api/users?page=1&pageSize=10' | jq

# Get
curl -s http://localhost:3000/api/users/1 | jq

# Update
curl -s -X PUT http://localhost:3000/api/users/1 \
 -H 'content-type: application/json' \
 -d '{"name":"Alice Maj"}' | jq

# Delete
curl -s -X DELETE http://localhost:3000/api/users/1 | jq
```

---

## Notes & options 💡

* Nitro gère nativement TS et le hot-reload en `dev`.
* On mappe nos erreurs métiers → `createError` pour des codes HTTP propres.
* Tu veux que j’ajoute **CORS**, **OpenAPI (Swagger via scalar ou rapi-doc)**, **Drizzle Studio**, ou un **logger** (pino) ? Je te plug ça en 2 minutes. ✔️
