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