import { deleteFile, existFile, writeFile } from "@utils/file-utils";
import { readJsonFileSyncSafe } from "@utils/file-utils-sync";
import path from "path";

export function getCliLocalFile<T = unknown>(
  file: string,
  projectPath?: string,
): T {
  const fullPath = projectPath ? path.resolve(projectPath, file) : file;

  if (existFile(fullPath)) {
    throw new Error(`Fichier introuvable : ${fullPath}`);
  }
  try {
    return readJsonFileSyncSafe(fullPath) as T;
  } catch (err) {
    throw new Error(`Erreur de lecture ou JSON invalide dans : ${fullPath}`);
  }
}
export function createCliLocalFile(
  fileName: string,
  cliLocalPath: string,
  content: string,
): string {
  writeFile(`${cliLocalPath}/${fileName}`, JSON.stringify(content, null, 2));
  return `✅ Mise à jour du fichier ${fileName} avec succès !`;
}
export function deleteCliLocalFile(
  fileName: string,
  cliLocalPath: string,
): string {
  deleteFile(`${cliLocalPath}/${fileName}`);
  return `✅ Suppression du fichier ${fileName} avec succès !`;
}

/* 
architecture
cli-local-config
project
cli-local-manager
cli-local-get
file
directory
dot-cli-local
json
dictionaries
to-do

*/
