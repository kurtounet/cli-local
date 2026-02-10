import { IConfigDatabase } from "@/features/commun/database.interface.js";

export interface IBagData {
  id: string;
  name: string;
  templateDir: string;
  version?: string;
  service: string;
  bag: IBag;
}

export interface IBag {
  scope: {
    project: IProjectBag;
    entities: IEntityDefinition[];
  };
}

// --- Project Section ---

export interface IProjectBag {
  name: string;
  version: string;
  env?: Record<string, string | boolean | number>;
  db?: IConfigDatabase | null;
  service?: IServiceBag[];
  cors?: { allow_origin: string };
  jwt?: { passphrase: string };
}
//    mailer: { dsn: string };
export interface IServiceBag {
  name: string;
  version: string;
  param: unknown[];
}

// export interface IConfigDatabase {
//   type: string;
//   host: string;
//   port: number;
//   user: string;
//   password: "";
//   database: string;
// }

// --- Entity Section ---

export interface IEntityDefinition {
  namePascalCase: string;
  nameKebabCase: string;
  nameSnakeCase: string;
  namePluralCamelCase: string;
  nameCamelCase: string;
  tableName: string;
  columns: IEntityRelationship[];
}

export interface IEntityColumn {
  phpType: "number" | "string" | "float" | "Date" | "boolean";
  name: string;
  nameCamelCase: string;
  namePascalCase: string;
  foreignKey: boolean;
  ormType: string;
  nullable: boolean;
}

export interface IEntityRelationship {
  nameCamelCase: string;
  namePascalCase: string;
  targetPascalCase: string;
  relationType: "ManyToOne" | "OneToMany" | "ManyToMany" | "OneToOne";
  targetPascalCaseSingular: string;
  mappedBy: string;
  ownerPascalCase: string;
  nullable: boolean;
  inversedBy: string;
}
