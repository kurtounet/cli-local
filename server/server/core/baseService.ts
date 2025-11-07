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