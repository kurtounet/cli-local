import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";

import { getEntities } from "@parsersMdj/services/get-entities.service";

import { generateTreeJson } from "@features/tools/tree/services/generate-tree-json.service";
import * as fs from "fs-extra";
import * as path from "path";
import { ICliLocalPathFile, IGetEntityJson } from "types/common";
import {
  logDebug,
  logError,
  logInfo,
  logStep,
  logSuccess,
} from "@utils/logger";
import { writeFile } from "@utils/file-utils";
import {
  EMOJI,
  messageCreateFile,
  messageCreateFolderCli,
} from "@constants/messages";
import { log } from "console";
import { updateGitIgnore } from "@features/frameworks/commun/services/git.service";

let cliLocalDiPath = path.join(process.cwd(), `.cli-local`);

const DIRECTORY_CLI_LOCAL = ".cli-local";
const CONFIG_FILE_CLI_LOCAL_NAME = `cli-local-config.json`;
const FILE_CLI_LOCAL = {
  DIRECTORY_CLI_LOCAL: `${DIRECTORY_CLI_LOCAL}`,
  mdj: `${DIRECTORY_CLI_LOCAL}/mcd.mdj`,
  globalConfig: `${DIRECTORY_CLI_LOCAL}/global-config.json`,
  thisProjectConfig: `${DIRECTORY_CLI_LOCAL}/this-project-config.json`,
  thisProjectArchitecture: `${DIRECTORY_CLI_LOCAL}/this-project-architecture.json`,
  toDo: `${DIRECTORY_CLI_LOCAL}/to-do.json`,
  entities: `${DIRECTORY_CLI_LOCAL}/entities.json`,
  dictionaryColumns: `${DIRECTORY_CLI_LOCAL}/dictionary-columns.json`,
  dictionaryEntitiesJson: `${DIRECTORY_CLI_LOCAL}/dictionary-entities-json.json`,
  dictionaryEntitiesPivot: `${DIRECTORY_CLI_LOCAL}/dictionary-entities-pivot.json`,
  dictionaryEntitiesRelationships: `${DIRECTORY_CLI_LOCAL}/dictionary-entities-relationships.json`,
  dictionaryRelationships: `${DIRECTORY_CLI_LOCAL}/dictionary-relationships.json`,
};

export function createCliLocalDirectoryNewProject(
  configFile: IProjectConfig,
  mdjFile: string,
  framework: IFramework,
  rootPathProjectFramework: string,
): any {
  logStep(messageCreateFolderCli());
  let files = {
    "global-config": configFile,
    "this-project-config": framework,
    "this-project-architecture": framework.architecture,
    "to-do": `to-do.json`,
  };
  //création du fichier cli-local-config.json
  let dirDotCliLocal = path.join(rootPathProjectFramework, DIRECTORY_CLI_LOCAL);
  logDebug(`${EMOJI.folder} Création du dossier .cli-local ${dirDotCliLocal}`);
  if (!fs.existsSync(dirDotCliLocal)) {
    logInfo(`${EMOJI.folder} Création du dossier .cli-local...`);
    fs.mkdirSync(dirDotCliLocal, { recursive: true });
  }
  //création du fichier cli-local-config.json
  logInfo(`${EMOJI.folder} Création du fichier : cli-local-config.json`);
  writeFile(
    `${dirDotCliLocal}/${CONFIG_FILE_CLI_LOCAL_NAME}`,
    JSON.stringify(FILE_CLI_LOCAL, null, 2),
  );

  let dictionaries: IGetEntityJson | {} = {};
  const error = "Erreur";
  if (mdjFile != "") {
    dictionaries = getEntities(mdjFile);
    if (typeof dictionaries === "string") {
      return error;
    }
  }

  logInfo("🗄️ Création des fichier dans .cli-local ");
  files = { ...files, ...dictionaries };
  Object.entries(files).forEach(([key, value]) => {
    try {
      let filePath = path.join(dirDotCliLocal, `${key}.json`);
      writeFile(filePath, JSON.stringify(value, null, 2));
      logSuccess(`${EMOJI.file} Fichier créer: ${filePath}`);
    } catch (error) {
      logError(
        `${EMOJI.error} Erreur lors de la création du fichier : ${error}`,
      );
    }
  });

  // creation du fichier mcd.mdj
  if (configFile.starUml) {
    logInfo("🗄️ Copy du fichier mcd.mdj ");
    const result = fs.readFileSync(configFile.starUml, "utf8");
    writeFile(path.join(dirDotCliLocal, "mcd.mdj"), result);
  }

  const ingnore = "###cli-local\n/.cli-local\n/cli-local-config.json\n";
  updateGitIgnore(rootPathProjectFramework, ingnore);

  logSuccess(`✅ .cli-local directory créée avec succès !`);
  return dictionaries;
}

export function getCliLocalFile(file: string, projectPath?: string): any {
  let json;
  if (!fs.existsSync(file)) {
    return `le fichier ${file} introuvable `;
  }
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (e) {
    return `le fichier ${file} introuvable`;
  }
}
export function createCliLocalConfigFile(projectPath: string) {
  if (!fs.existsSync(path.join(projectPath, `cli-local-config.json`))) {
    updateCliLocalFile(`cli-local-config.json`, projectPath, FILE_CLI_LOCAL);
  }
}
export function getCliLocalConfigFile(projectPath: string): ICliLocalPathFile {
  let json: any;
  let configFilePath = path.join(
    projectPath,
    DIRECTORY_CLI_LOCAL,
    `cli-local-config.json`,
  );
  if (!fs.existsSync(configFilePath)) {
    createCliLocalConfigFile(projectPath);
  }
  try {
    json = JSON.parse(fs.readFileSync(configFilePath, "utf8"));
  } catch (e) {
    logError(`Erreur lors de la lecture du fichier cli-local-config.json`);
    process.exit(1);
  }

  return json;
}

export function getTreeArchitectureCliLocalFile(projectPath: string): any {
  logStep(messageCreateFile("architecture-initial.json"));
  const dirDotCliLocal = path.join(projectPath, `.cli-local`);
  const tree = generateTreeJson(projectPath, Infinity);
  writeFile(
    path.join(dirDotCliLocal, "architecture-initial.json"),
    JSON.stringify(tree, null, 2),
  );
  return tree;
}

export function updateCliLocalFile(
  fileName: string,
  cliLocalPath: string,
  content: any,
): string {
  writeFile(
    path.join(cliLocalPath, fileName),
    JSON.stringify(content, null, 2),
  );
  return `✅ Mise à jour du fichier ${fileName} avec succès !`;
}
