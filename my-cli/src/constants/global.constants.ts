// Frameworks list
export const FRAMEWORKS_LIST = ["angular", "symfony", "electron", "nestjs"];
export const FRAMEWORKS_LIST_BACKEND: string[] = ["Angular", "Vuejs"];
export const FRAMEWORKS_LIST_FRONTEND: string[] = [
  "Nestjs",
  "Symfony",
  "Electron",
  "FastAPI",
];
export const SGBD_LIST = ["Mysql", "Postgres", "Mongodb", "Sqlite"];

export const COMMAND_NESTJS = ["nest", "nestjs"];
export const COMMAND_ANGULAR = ["ng", "angular"];
export const COMMAND_SYMFONY = ["sf", "symfony"];
export const COMMAND_ELECTRON = ["elec", "electron"];
export const COMMAND_VUE = ["vue", "vuejs"];

export const ARCHITECTURE_CLI_LOCAL_MOCK: Record<string, string> = {
  dirCliLocal: ".cli-local",
  mdj: "./cli-local/mcd.mdj",
  globalConfig: "./cli-local/global-config.json",
  thisProjectConfig: "./cli-local/this-project-config.json",
  thisProjectArchitecture: "./cli-local/this-project-architecture.json",
  toDo: "./cli-local/to-do.json",
  entities: "./cli-local/entities.json",
  dictionaryColumns: "./cli-local/dictionary-columns.json",
  dictionaryEntitiesJson: "./cli-local/dictionary-entities-json.json",
  dictionaryEntitiesPivot: "./cli-local/dictionary-entities-pivot.json",
  dictionaryEntitiesRelationships:
    "./cli-local/dictionary-entities-relationships.json",
  dictionaryRelationships: "./cli-local/dictionary-relationships.json",
};
