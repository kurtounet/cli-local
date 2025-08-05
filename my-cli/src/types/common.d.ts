// Définitions de types TypeScript globales pour la CLI

export interface IProjectConfig {
  projectName: string;
  framework: string;
  includeLinter: boolean;
  // Ajoutez d'autres propriétés de configuration ici
}

export interface IGeneratedFile {
  filePath: string;
  content: string;
}
import { IProjectConfig } from "@ frameworks/_global/interface/framework-commun.model";
import {
  IColumnJson,
  IEntityJson,
  IRelation,
  IRelationsEntity,
  IRelationshipJson,
} from "./entityJson.interface";

export interface ICliLocalPathFile {
  dirCliLocal: string;
  mdj: string;
  globalConfig: string;
  thisProjectConfig: string;
  thisProjectArchitecture: string;
  toDo: string;
  entities: string;
  dictionaryColumns: string;
  dictionaryEntitiesJson: string;
  dictionaryEntitiesPivot: string;
  dictionaryEntitiesRelationships: string;
  dictionaryRelationships: string;
}
export interface ICliLocalTypFile {
  dirCliLocal: string;
  mdj: string;
  globalConfig: IProjectConfig;
  thisProjectConfig: string;
  thisProjectArchitecture: string;
  toDo: string;
  entities: IEntityJson[];
  dictionaryColumns: string;
  dictionaryEntitiesJson: string;
  dictionaryEntitiesPivot: string;
  dictionaryEntitiesRelationships: string;
  dictionaryRelationships: string;
}
export interface IGetEntityJson {
  entities: IEntityJson[];
  "dictionary-columns": { [k: string]: IColumnJson };
  "dictionary-entities-json": { [k: string]: IEntityJson };
  "dictionary-entities-pivot": IEntityJson[];
  "dictionary-relationships": { [k: string]: IRelation };
  "dictionary-entities-relationships": { [k: string]: IRelationsEntity };
}
