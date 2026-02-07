import { EMOJI } from "@constants/messages";
import { executeCommand } from "@utils/execute-command";
import * as fs from "fs";
import path from "path";

/**
 *
 * @param frameworkProjectPath
 * @param contentToAdd
 */
export function updateGitIgnore(frameworkProjectPath: string, contentToAdd: string): string {
  const gitIgnoreFile = path.join(frameworkProjectPath, ".gitignore");

  // Vérifie si le fichier .gitignore existe
  if (!fs.existsSync(gitIgnoreFile)) {
    return `Erreur: Le fichier .gitignore est introuvable dans le dossier du projet !`;
  }

  // const contentToAdd = `${ignoredFile}\n`;
  const currentContent = fs.readFileSync(gitIgnoreFile, "utf8");

  // Évite les doublons
  if (!currentContent.includes(contentToAdd)) {
    fs.appendFileSync(gitIgnoreFile, contentToAdd, "utf8");
    return `${frameworkProjectPath} : "${contentToAdd}" ajouté à .gitignore ✅`;
  }

  return `${frameworkProjectPath} : "${contentToAdd}" est déjà dans .gitignore ⚠️`;
}

/**
 *
 * @param frameworkPath
 * @param message
 */
export function gitCommit(frameworkPath: string, message: string): boolean {
  const gitCommand = `git checkout dev && git add . && git commit -m "${message}"`;
  executeCommand(
    gitCommand,
    { cwd: `${frameworkPath}`, stdio: "inherit" },
    `🚀 Création du commit ${message}`,
    `✅ Commit création avec succès !`,
    `${EMOJI.error} Erreur lors du commit !`,
  );
  return true;
}
/**
 *
 * @param message
 */
export function gitCommitAndPush(message: string): boolean {
  const gitCommand = `git add . && git commit -m "${message}" && git push`;
  executeCommand(
    gitCommand,
    { stdio: "inherit" },
    `🚀 Création du commit Initiale`,
    `✅ Commit création avec succès !`,
    `${EMOJI.error} Erreur lors du commit !`,
  );
  return true;
}
/**
 * Verifies if a directory is present in the .gitignore file.
 * @param pathGitIgnore - The path to the .gitignore file.
 * @param dir - The directory to check.
 * @returns True if the directory is found in .gitignore, false otherwise.
 */
export function verifyInGitIgnoreFile(pathGitIgnore: string, dir: string): boolean {
  if (!fs.existsSync(pathGitIgnore)) {
    // logInfo(`Le fichier .gitignore est introuvable dans le dossier du projet !`);
    return false;
  }

  const content = fs.readFileSync(pathGitIgnore, "utf8");
  const lines = content.split("\n");
  for (const line of lines) {
    if (line.trim().includes(dir)) {
      return true;
    }
  }
  return false;
}
