export interface IDatabase {
  type: string;
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  entities?: string;
  synchronize?: boolean;
}
