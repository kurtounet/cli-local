import * as fs from "fs-extra";
import * as path from "path";
import {
  IFramework,
  IProjectConfig,
  IScript,
} from "./models/framework-commun.model";
import { IpackageJson } from "./models/package-json.model";
import { fr } from "zod/v4/locales/index.cjs";

export function getConfigFile(pathFile: string) {
  return JSON.parse(fs.readFileSync(pathFile, "utf8"));
}

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function updateTsConfig(frameworkProjectPath: string): string {
  const tsConfigPath = path.join(frameworkProjectPath, "tsconfig.json");
  if (!fs.existsSync(tsConfigPath)) {
    return `Erreur : Aucun fichier tsconfig.json trouvé dans ${frameworkProjectPath}`;
  }
  try {
    const tsConfigData = JSON.parse(fs.readFileSync(tsConfigPath, "utf8"));
    tsConfigData.compilerOptions = tsConfigData.compilerOptions || {};
    // Ajoute ou met à jour baseUrl
    tsConfigData.compilerOptions.baseUrl = ".";
    // Ajoute ou met à jour paths
    tsConfigData.compilerOptions.paths =
      tsConfigData.compilerOptions.paths || {};
    tsConfigData.compilerOptions.paths["@app/*"] = ["src/app/*"];
    tsConfigData.compilerOptions.paths["@environments/*"] = [
      "src/environments/*",
    ];

    fs.writeFileSync(
      tsConfigPath,
      JSON.stringify(tsConfigData, null, 2),
      "utf8",
    );

    return `${frameworkProjectPath} : tsconfig.json mis à jour avec baseUrl et paths ✅`;
  } catch (error) {
    return `Erreur lors de la mise à jour de tsconfig.json : ${error}`;
  }
}

export function updatePackageJson(
  configFile: IProjectConfig,
  framework: IFramework,
  rootPathProjectFramework: string,
  entitiesJsonFile: object,
): string {
  const packageJsonPath = path.join(rootPathProjectFramework, "package.json");

  if (!fs.existsSync(packageJsonPath)) {
    return `Erreur: Aucun fichier package.json trouvé dans ${rootPathProjectFramework}`;
  }

  try {
    const packageJson: IpackageJson = JSON.parse(
      fs.readFileSync(packageJsonPath, "utf8"),
    );
    // Ajout des script personnalisé
    packageJson.scripts = framework.scripts;

    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      "utf8",
    );

    return `${rootPathProjectFramework} : package.json mis à jour ✅`;
  } catch (error) {
    return `Erreur lors de la mise à jour de package.json : ${error}`;
  }
}

/**
 * Adds or modifies a property in a JSON file.
 * @param filePath The path to the JSON file.
 * @param keyPath The dot-separated path to the property (e.g., "compilerOptions.paths").
 * @param value The value to set for the property.
 * @returns A message indicating the success or failure of the operation.
 */
export function addPropertyToJsonFile(
  filePath: string,
  keyPath: string,
  value: any,
): string {
  if (!fs.existsSync(filePath)) {
    return `Erreur : Le fichier ${filePath} est introuvable.`;
  }
  try {
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // Navigation dans les clés imbriquées (ex: "compilerOptions.module")
    const keys = keyPath.split(".");
    let current = jsonData;

    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        // Dernière clé : on assigne la valeur
        current[key] = value;
      } else {
        // On descend dans l'objet
        if (!current[key] || typeof current[key] !== "object") {
          current[key] = {};
        }
        current = current[key];
      }
    });

    // Réécriture du fichier
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf8");

    return `✅ Clé "${keyPath}" ajoutée/modifiée dans ${path.basename(filePath)}.`;
  } catch (error) {
    return `Erreur lors de la modification de ${filePath} : ${error}`;
  }
}
