import * as fs from "fs-extra";
import * as path from "path";
import { logError, logInfo, logSuccess } from "./logger";
import { EMOJI } from "@constants/messages";

export async function copyDirectory(src: string, dest: string): Promise<void> {
  try {
    await fs.copy(src, dest, { overwrite: true });
  } catch (err: unknown) {
    throw new Error(
      `Erreur lors de la copie du répertoire ${src} vers ${dest}: ${(err as Error).message}`,
    );
  }
}

export async function writeFile(
  filePath: string,
  content: string,
  successMessage?: string,
  errorMessage?: string,
): Promise<void> {
  try {
    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, content, { encoding: "utf8" });
    //fs.ensureDir(path.dirname(filePath));
    //fs.writeFile(filePath, content, { encoding: "utf8" });
    logSuccess(successMessage || `File ${filePath} written successfully`);
  } catch (err: unknown) {
    logError(
      errorMessage ||
        `Error writing file ${filePath}: ${(err as Error).message}`,
    );
  }
}

export async function deleteFile(Path: string): Promise<void> {
  try {
    await fs.remove(Path);
  } catch (err: unknown) {
    throw new Error(
      `Erreur lors de la suppression du répertoire ${Path}: ${(err as Error).message}`,
    );
  }
}
export async function deleteDirectory(dirPath: string): Promise<void> {
  try {
    await fs.remove(dirPath);
  } catch (err: unknown) {
    throw new Error(
      `Erreur lors de la suppression du répertoire ${dirPath}: ${(err as Error).message}`,
    );
  }
}

export function createFolderAsync(folderPath: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    fs.mkdir(folderPath, { recursive: true }, (err) => {
      if (err) return reject(err);
      resolve(true);
    });
  });
}

export function filterFiles(
  pathDir: string,
  param: string,
  recursive?: boolean,
): string[] {
  return fs.readdirSync(pathDir).filter((file) => file.includes(param));
}

/**
 * Écrit du contenu dans un fichier de manière asynchrone,
 * en créant les dossiers parents si nécessaire.
 * @param filePath - Chemin du fichier.
 * @param content - Contenu à écrire dans le fichier.
 * @returns Promise<boolean> indiquant le succès ou l'échec.
 */
export async function saveFileAsync(
  filePath: string,
  content: string,
): Promise<boolean> {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true }); // Crée les dossiers parents si besoin
  await fs.writeFile(filePath, content, "utf-8");
  return true;
}

export function readFileAsync(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

/**
 * Écrit du contenu dans un fichier de manière synchrone,
 * en créant les dossiers parents si besoin.
 * @param filePath - Chemin complet du fichier.
 * @param content - Contenu à écrire dans le fichier.
 * @returns true si l'écriture a réussi, false sinon.
 */
export function saveFileSync(filePath: string, content: string): boolean {
  // On vérifie que le dossier parent existe
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true }); // Création récursive des dossiers
  }
  fs.writeFileSync(filePath, content, "utf-8");
  return true;
}

export function readFile(filePath: string): string | null {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Fichier introuvable : ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf-8");
}

export function buildAndsaveFile(filePath: string, content: string) {
  try {
    saveFileSync(filePath, content);
    logInfo(filePath);
  } catch (error) {
    logError(`${EMOJI.error} Échec lors de la sauvegarde :  ${error}`);
  }
}
/**
 * Vérifie si un fichier existe.
 * @param filePath - Chemin du fichier à vérifier.
 * @returns true si le fichier existe, false sinon.
 */

export function existFile(filePath: string): boolean {
  try {
    return fs.existsSync(filePath) && fs.statSync(filePath).isFile();
  } catch (error) {
    logError(
      `${EMOJI.error}  Erreur lors de la vérification du fichier : ${error}`,
    );
    return false;
  }
}
export function ensureDir(filePath: string) {
  try {
    fs.ensureDirSync(filePath);
  } catch (err) {
    logError(
      `${EMOJI.error} Erreur lors de la vérification du fichier : $err}`,
    );
    return false;
  }
}
