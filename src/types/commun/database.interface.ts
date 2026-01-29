export interface IDataBase {
  type: string;
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  //   connect(): Promise<void>;
  //   disconnect(): Promise<void>;
}

export interface IQueryResult {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  serverStatus: number;
  warningCount: number;
  message: string;
  protocol41: boolean;
  changedRows: number;
}
