export interface ITemplateContext {
  id: string;
  name: string;
  templateDir: string;
  version?: string;
  service: string;
  templateData: ITemplateData;
}

export interface ITemplateData {
  scope: {
    project: IProjectData;
    entities: IEntityDefinition[];
  };
}

// --- Project Section ---

export interface IProjectData {
  name: string;
  version: string;
  env?: Record<string, string | boolean | number> | undefined;
  db?: IConfigDatabase | null;
  service?: IServiceData[];
  cors?: { allow_origin: string };
  jwt?: { passphrase: string };
}
//    mailer: { dsn: string };
export interface IServiceData {
  name: string;
  version: string;
  param: unknown[];
}

export interface IConfigDatabase {
  type: string;
  host: string;
  port: number;
  user: string;
  password: "";
  database: string;
}

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
export interface IProjectTemplateData {
  name: string;
  version: string;
  databases: IConfigDatabase[];
  env?: Record<string, any>;
  db?: IConfigDatabase;
}

export interface IColumnTemplateData {
  phpType: string;
  name: string;
  nameCamelCase: string;
  namePascalCase: string;
  foreignKey: boolean;
  ormType: string;
  nullable: boolean;
  typeSql: string;
  typeTypeScript: string;
  primaryKey: boolean;
  unique: boolean;
}

export interface IRelationshipTemplateData {
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

export interface IEntityTemplateData {
  namePascalCase: string;
  nameKebabCase: string;
  nameSnakeCase: string;
  namePluralCamelCase: string;
  nameCamelCase: string;
  tableName: string;
  columns: IColumnTemplateData[];
  relationships: IRelationshipTemplateData[];
}
