import type { MySql2Database } from 'drizzle-orm/mysql2';
import { BaseRepository } from '#core/baseRepository.js';
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