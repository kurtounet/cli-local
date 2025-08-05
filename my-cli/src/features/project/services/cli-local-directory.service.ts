import {
  IFramework,
  IProjectConfig,
} from "@features/frameworks/_global/interface/framework-commun.model";
import { updateGitIgnore } from "@features/frameworks/_global/service/git.service";
import { getEntities } from "@features/parsersMdj/services/get-entities.service";
import { generateTreeJson } from "@features/tools/tree/services/generate-tree-json.service";
import * as fs from "fs-extra";
import * as path from "path";
import { ICliLocalPathFile } from "types/common";

let cliLocalDiPath = path.join(process.cwd(), `.cli-local`);

const dirCliLocal = ".cli-local";
const CONFIG_FILE_CLI_LOCAL_NAME = `cli-local-config.json`;
const FILE_CLI_LOCAL = {
  dirCliLocal: `${dirCliLocal}`,
  mdj: `${dirCliLocal}/mcd.mdj`,
  globalConfig: `${dirCliLocal}/global-config.json`,
  thisProjectConfig: `${dirCliLocal}/this-project-config.json`,
  thisProjectArchitecture: `${dirCliLocal}/this-project-architecture.json`,
  toDo: `${dirCliLocal}/to-do.json`,
  entities: `${dirCliLocal}/entities.json`,
  dictionaryColumns: `${dirCliLocal}/dictionary-columns.json`,
  dictionaryEntitiesJson: `${dirCliLocal}/dictionary-entities-json.json`,
  dictionaryEntitiesPivot: `${dirCliLocal}/dictionary-entities-pivot.json`,
  dictionaryEntitiesRelationships: `${dirCliLocal}/dictionary-entities-relationships.json`,
  dictionaryRelationships: `${dirCliLocal}/dictionary-relationships.json`,
};

export function createCliLocalDirectoryNewProject(
  configFile: IProjectConfig,
  mdjFile: string,
  framework: IFramework,
  frameworkPath: string,
): any {
  let files = {
    "global-config": configFile,
    "this-project-config": framework,
    "this-project-architecture": framework.architecture,
    "to-do": `to-do.json`,
  };
  //création du fichier cli-local-config.json
  console.log("🗄️ Création du fichier : cli-local-config.json");
  fs.writeFileSync(
    path.join(frameworkPath, CONFIG_FILE_CLI_LOCAL_NAME),
    JSON.stringify(FILE_CLI_LOCAL, null, 2),
  );
  // createCliLocalConfigFile(frameworkPath);

  let cliNodePath = path.join(frameworkPath, `.cli-local`);
  if (!fs.existsSync(cliNodePath)) {
    console.log("🗄️ Création du dossier .cli-local...");
    fs.mkdirSync(cliNodePath);
  }

  let dictionaries = {};
  const error = "Erreur";
  if (mdjFile != "") {
    dictionaries = getEntities(mdjFile);
    if (typeof dictionaries === "string") {
      return error;
    }
  }

  console.log("🗄️ Création des fichier dans .cli-local ");
  files = { ...files, ...dictionaries };
  Object.entries(files).map(([key, value]) => {
    try {
      let filePath = path.join(cliNodePath, `${key}.json`);
      fs.writeFileSync(filePath, JSON.stringify(value, null, 2));
      console.log(`🗄️ Fichier créer: ${filePath}`);
    } catch (e) {
      console.log(e);
    }
  });

  // creation du fichier mcd.mdj
  if (configFile.starUml) {
    console.log("🗄️ Copy du fichier mcd.mdj ");
    const result = fs.readFileSync(configFile.starUml, "utf8");
    fs.writeFileSync(path.join(cliNodePath, "mcd.mdj"), result, "utf8");
  }

  const ingnore = "###cli-local\n/.cli-local\n/cli-local-config.json\n";
  updateGitIgnore(frameworkPath, ingnore);

  console.log`✅ .cli-local directory créée avec succès !`;
  return dictionaries;
}

export function getCliLocalFile(file: string, projectPath?: string): any {
  let json;
  if (!fs.existsSync(file)) {
    return `le fichier ${file} introuvable `;
    process.exit(1);
  }
  try {
    json = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (e) {
    return `le fichier ${file} introuvable `;
    process.exit(1);
  }

  return json;
}
export function createCliLocalConfigFile(projectPath: string) {
  if (!fs.existsSync(path.join(projectPath, `cli-local-config.json`))) {
    updateCliLocalFile(`cli-local-config.json`, projectPath, FILE_CLI_LOCAL);
  }
}
export function getCliLocalConfigFile(projectPath: string): ICliLocalPathFile {
  let json: any;
  let configFile = path.join(projectPath, `cli-local-config.json`);
  if (!fs.existsSync(configFile)) {
    createCliLocalConfigFile(projectPath);
  }
  try {
    json = JSON.parse(fs.readFileSync(configFile, "utf8"));
  } catch (e) {
    console.log(`Erreur lors de la lecture du fichier cli-local-config.json`);
    process.exit(1);
  }

  return json;
}

export function getTreeArchitectureCliLocalFile(projectPath: string): any {
  const cliNodePath = path.join(projectPath, `.cli-local`);
  const tree = generateTreeJson(projectPath, Infinity);
  fs.writeFileSync(
    path.join(cliNodePath, "architecture-initial.json"),
    JSON.stringify(tree, null, 2),
  );
  return tree;
}

export function updateCliLocalFile(
  fileName: string,
  cliLocalPath: string,
  content: any,
): string {
  fs.writeFileSync(
    path.join(cliLocalPath, fileName),
    JSON.stringify(content, null, 2),
  );
  return `✅ Mise à jour du fichier ${fileName} avec succès !`;
}
