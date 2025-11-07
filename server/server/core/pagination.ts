export type PageParams = { page?: number; pageSize?: number };
export type PageResult<T> = {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};