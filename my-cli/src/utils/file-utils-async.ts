import * as fs from "fs-extra";
import * as path from "path";

export type Result<T = undefined> =
  | ({ ok: true } & (T extends undefined ? {} : { data: T }))
  | { ok: false; error: string; code?: string };

function toResultError(
  err: unknown,
  fallback = "Unexpected error",
): Result<never> {
  if (err instanceof Error) return { ok: false, error: err.message };
  if (typeof err === "string") return { ok: false, error: err };
  return { ok: false, error: fallback };
}

/**
 * Copie un repertoire.
 */
export async function copyDirectory(
  src: string,
  dest: string,
): Promise<Result> {
  try {
    await fs.copy(src, dest, { overwrite: true, errorOnExist: false });
    return { ok: true };
  } catch (err) {
    return toResultError(err, `Erreur lors de la copie de ${src} vers ${dest}`);
  }
}

/**
 * Ecrit un fichier en async (assure le dossier).
 */
export async function writeFileAsync(
  filePath: string,
  content: string,
): Promise<Result> {
  try {
    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, content, "utf8");
    return { ok: true };
  } catch (err) {
    return toResultError(err, `Erreur ecriture fichier: ${filePath}`);
  }
}

/**
 * Ecrit un fichier en sync (assure le dossier).
 */
export function writeFileSync(filePath: string, content: string): Result {
  try {
    fs.ensureDirSync(path.dirname(filePath));
    fs.writeFileSync(filePath, content, "utf8");
    return { ok: true };
  } catch (err) {
    return toResultError(err, `Erreur ecriture fichier: ${filePath}`);
  }
}

/**
 * Lit un fichier en async.
 */
export async function readFileAsync(filePath: string): Promise<Result<string>> {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return { ok: true, data };
  } catch (err) {
    return toResultError(err, `Erreur lecture fichier: ${filePath}`);
  }
}

/**
 * Lit un fichier en sync.
 */
export function readFileSyncSafe(filePath: string): Result<string> {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return { ok: true, data };
  } catch (err) {
    return toResultError(err, `Erreur lecture fichier: ${filePath}`);
  }
}

/**
 * Supprime un repertoire.
 */
export async function deleteDirectory(dirPath: string): Promise<Result> {
  try {
    await fs.remove(dirPath);
    return { ok: true };
  } catch (err) {
    return toResultError(err, `Erreur suppression repertoire: ${dirPath}`);
  }
}

/**
 * Verifie qu un chemin cible existe et est un fichier.
 */
export function existFile(filePath: string): Result<boolean> {
  try {
    const exists = fs.existsSync(filePath) && fs.statSync(filePath).isFile();
    return { ok: true, data: exists };
  } catch (err) {
    return toResultError(err, `Erreur verification fichier: ${filePath}`);
  }
}

/**
 * Assure la presence d un dossier (async).
 */
export async function ensureDir(dirPath: string): Promise<Result> {
  try {
    await fs.ensureDir(dirPath);
    return { ok: true };
  } catch (err) {
    return toResultError(err, `Erreur ensureDir: ${dirPath}`);
  }
}

/**
 * Cree un dossier (async).
 */
export async function createFolderAsync(folderPath: string): Promise<Result> {
  try {
    await fs.mkdir(folderPath, { recursive: true });
    return { ok: true };
  } catch (err) {
    return toResultError(err, `Erreur creation dossier: ${folderPath}`);
  }
}

/**
 * Filtre les fichiers d un dossier selon un motif, avec option recursive.
 * Renvoie des chemins absolus des fichiers correspondants.
 */
export function filterFiles(
  pathDir: string,
  param: string,
  recursive = false,
): Result<string[]> {
  try {
    const out: string[] = [];
    const walk = (dir: string) => {
      const items = fs.readdirSync(dir, { withFileTypes: true });
      for (const it of items) {
        const full = path.join(dir, it.name);
        if (it.isDirectory()) {
          if (recursive) walk(full);
        } else if (it.isFile() && it.name.includes(param)) {
          out.push(full);
        }
      }
    };
    walk(path.resolve(pathDir));
    return { ok: true, data: out };
  } catch (err) {
    return toResultError(err, `Erreur filterFiles sur: ${pathDir}`);
  }
}

/**
 * Construit puis sauvegarde un fichier (sync).
 */
export function buildAndSaveFile(filePath: string, content: string): Result {
  try {
    fs.ensureDirSync(path.dirname(filePath));
    fs.writeFileSync(filePath, content, "utf8");
    return { ok: true };
  } catch (err) {
    return toResultError(err, `Echec sauvegarde: ${filePath}`);
  }
}
