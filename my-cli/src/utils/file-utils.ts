import * as fs from "fs-extra";
import * as path from "path";

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
): Promise<void> {
  try {
    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, content, "utf8");
  } catch (err: unknown) {
    console.error(`Error writing file ${filePath}: ${(err as Error).message}`);
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

export function readFileSync(filePath: string): string | null {
  return fs.readFileSync(filePath, "utf-8");
}

export function buildAndsaveFile(filePath: string, content: string) {
  try {
    saveFileSync(filePath, content);
    console.log(filePath);
  } catch (err) {
    console.error("❌ Échec lors de la sauvegarde :", err);
  }
}
