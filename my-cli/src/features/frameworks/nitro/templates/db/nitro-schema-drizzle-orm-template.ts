export function nitroSchemaDrizzleOrmTemplate(): string {
  return ` // file: server/db/schema.ts

import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  email: text('email').unique().notNull(),
  name: text('name'),
  createdAt: text('created_at').default(sql $\`CURRENT_TIMESTAMP\`),
});`;
}
