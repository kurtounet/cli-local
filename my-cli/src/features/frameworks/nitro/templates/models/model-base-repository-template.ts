export function interfaceBaseRepositoryTemplate(): string {
  return `export interface IBaseRepository<T, TInsert, TId = number> {
  findAll(): Promise<T[]>;
  findMany(ids: TId[]): Promise<T[]>;
  findById(id: TId): Promise<T | null>;
  create(entity: TInsert): Promise<T>;
  update(id: TId, entity: Partial<TInsert>): Promise<T | null>;
  delete(id: TId): Promise<boolean>;
  findPaginated(offset: number, limit: number): Promise<T[]>;
  count(): Promise<number>;
  exists(id: TId): Promise<boolean>;
}
`;
}
