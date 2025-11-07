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
 * Copie un repertoire (sync).
 */
export function copyDirectorySync(src: string, dest: string): Result {
  try {
    // fs-extra ne fournit pas copySync avec options strictes dans tous les envs,
    // mais cette signature existe generalement. Sinon, fallback: fs.copySync(src, dest)
    fs.copySync(src, dest, { overwrite: true, errorOnExist: false });
    return { ok: true };
  } catch (err) {
    return toResultError(err, `Erreur copie sync de ${src} vers ${dest}`);
  }
}

/**
 * Ecrit un fichier (sync).
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
 * Lit un fichier (sync).
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
 * Lit un fichier (sync).
 */
export function readJsonFileSyncSafe(filePath: string): Result<string> {
  try {
    const data = fs.readJSONSync(filePath, "utf8").toString();
    return { ok: true, data };
  } catch (err) {
    return toResultError(err, `Erreur lecture fichier: ${filePath}`);
  }
}

/**
 * Supprime un repertoire (sync).
 */
export function deleteDirectorySync(dirPath: string): Result {
  try {
    fs.removeSync(dirPath);
    return { ok: true };
  } catch (err) {
    return toResultError(err, `Erreur suppression repertoire: ${dirPath}`);
  }
}

/**
 * Verifie qu un chemin est un fichier (sync).
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
 * Assure la presence d un dossier (sync).
 */
export function ensureDirSync(dirPath: string): Result {
  try {
    fs.ensureDirSync(dirPath);
    return { ok: true };
  } catch (err) {
    return toResultError(err, `Erreur ensureDirSync: ${dirPath}`);
  }
}

/**
 * Cree un dossier (sync).
 */
export function createFolderSync(folderPath: string): Result {
  try {
    fs.mkdirSync(folderPath, { recursive: true });
    return { ok: true };
  } catch (err) {
    return toResultError(err, `Erreur creation dossier: ${folderPath}`);
  }
}

/**
 * Filtre les fichiers par motif, recursive optionnelle (sync).
 */
export function filterFilesSync(
  pathDir: string,
  param: string,
  recursive = false,
): Result<string[]> {
  try {
    const out: string[] = [];
    const root = path.resolve(pathDir);

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

    walk(root);
    return { ok: true, data: out };
  } catch (err) {
    return toResultError(err, `Erreur filterFilesSync sur: ${pathDir}`);
  }
}

/**
 * Construit puis sauvegarde un fichier (sync).
 */
export function buildAndSaveFileSync(
  filePath: string,
  content: string,
): Result {
  try {
    fs.ensureDirSync(path.dirname(filePath));
    fs.writeFileSync(filePath, content, "utf8");
    return { ok: true };
  } catch (err) {
    return toResultError(err, `Echec sauvegarde: ${filePath}`);
  }
}
