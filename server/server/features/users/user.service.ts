import { BaseService } from '#core/baseService.js';
import { createUserSchema, updateUserSchema } from './user.schemas';
import type { UserEntity, UserCreate } from './user.repository';
import { UserRepository } from './user.repository';
import { ConflictError } from '#core/errors.js';

export class UserService extends BaseService<UserEntity, UserCreate, Partial<UserCreate>> {
  private readonly repoImpl: UserRepository;
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