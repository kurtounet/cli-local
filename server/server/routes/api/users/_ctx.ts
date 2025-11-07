// server/routes/api/users/_ctx.ts
import { db } from '#db/index';
import { UserRepository } from '#users/user.repository';
import { UserService } from '#users/user.service';

const repo = new UserRepository(db);
export const userService = new UserService(repo);