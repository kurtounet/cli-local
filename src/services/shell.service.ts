import { execSync, spawn, spawnSync } from "node:child_process";

import { exec } from "child_process";
import { promisify } from "util";

import { IShellService } from "@/types/services/shell-service.interface.js";

import { BaseService } from "./base-service.service.js";

// On transforme exec en version qui retourne une Promise
const execPromise = promisify(exec);
export class ShellService extends BaseService implements IShellService {
  readonly serviceName = "ShellService";
  private isWindows = process.platform === "win32";
  /**
   * Recommandé pour les serveurs Web.
   * Ne bloque pas l'Event Loop (Boucle d'événements).
   * @param command
   * @param cwd
   */
  async execute(command: string, cwd?: string): Promise<string> {
    try {
      console.log(`> Exécution (async) de : ${command}...`);

      const { stdout, stderr } = await execPromise(command, {
        encoding: "utf-8",
        cwd: cwd,
      });

      if (stderr) {
        console.warn(`Avertissement Shell : ${stderr}`);
      }

      return stdout.trim(); // .trim() retire les sauts de ligne inutiles
    } catch (error: any) {
      console.error(`Erreur critique : ${error.message}`);
      throw new Error(`Échec de la commande ${command}: ${error.message}`);
    }
  }

  /**
   * À utiliser uniquement pour des scripts CLI ou au démarrage.
   * Bloque l'Event Loop jusqu'à la fin de l'exécution.
   * @param command
   * @param cwd
   */
  executeSync(command: string, cwd: string): string {
    try {
      console.log(`> Exécution (sync) de : ${command}...`);

      // "pipe" est nécessaire pour capturer le résultat dans la variable 'output'.
      // "inherit" afficherait dans le terminal mais retournerait null.
      const output = execSync(command, {
        encoding: "utf-8",
        cwd: cwd,
        stdio: "pipe",
      });

      return output.toString().trim();
    } catch (error: any) {
      console.error(`Erreur : ${error.message}`);
      // On throw l'erreur pour garder une cohérence avec la méthode async
      throw new Error(
        `Erreur lors de l'exécution de ${command}: ${error.message}`,
      );
    }
  }
  /**
   * Version asynchrone sécurisée.
   * Idéal pour les processus longs ou les serveurs web.
   * @param command
   * @param args
   * @param cwd
   */
  async executeSpawn(
    command: string,
    args: string[] = [],
    cwd?: string,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      console.log(`> Exécution (spawn) : ${command} ${args.join(" ")}`);

      const child = spawn(command, args, { cwd });

      let stdout = "";
      let stderr = "";

      child.stdout.on("data", (data) => (stdout += data));
      child.stderr.on("data", (data) => (stderr += data));

      child.on("close", (code) => {
        if (code === 0) {
          resolve(stdout.trim());
        } else {
          reject(
            new Error(`La commande a échoué (code ${code}): ${stderr.trim()}`),
          );
        }
      });

      child.on("error", (err) => {
        reject(new Error(`Impossible de lancer le processus : ${err.message}`));
      });
    });
  }

  /**
   * Version synchrone sécurisée.
   * Utile pour des scripts d'initialisation.
   * @param command
   * @param args
   * @param cwd
   */
  executeSyncSpawn(command: string, args: string[] = [], cwd?: string): string {
    console.log(`> Exécution (spawnSync) : ${command} ${args.join(" ")}`);

    const result = spawnSync(command, args, {
      cwd,
      encoding: "utf-8",
      stdio: "inherit",
      shell: true,
    });

    if (result.error) {
      throw new Error(`Erreur lors du lancement : ${result.error.message}`);
    }

    if (result.status !== 0) {
      throw new Error(`Échec de la commande : ${result.stderr.trim()}`);
    }

    // PROTECTION ICI : On vérifie si stdout existe avant de faire trim()
    // Si on est en mode "inherit", stdout est null, donc on renvoie une chaîne vide.
    return result.stdout ? result.stdout.trim() : "";
  }

  /**
   * Liste les fichiers (ls / dir) - Plus rapide que fs.readdir
   * @param path
   */
  async list(path = "."): Promise<string> {
    const cmd = this.isWindows ? `dir "${path}" /b` : `ls "${path}"`;
    return this.execute(cmd);
  }

  /**
   * Création de dossier (mkdir -p)
   * @param path
   */
  async makeDir(path: string): Promise<string> {
    const cmd = this.isWindows ? `mkdir "${path}"` : `mkdir -p "${path}"`;
    return this.execute(cmd);
  }

  /**
   * Suppression radicale (rm -rf / rd /s)
   * @param path
   */
  async remove(path: string): Promise<string> {
    const cmd = this.isWindows ? `rmdir /s /q "${path}"` : `rm -rf "${path}"`;
    return this.execute(cmd);
  }

  /**
   * Déplacement ou Renommage (mv / move)
   * @param source
   * @param destination
   */
  async move(source: string, destination: string): Promise<string> {
    const cmd = this.isWindows
      ? `move "${source}" "${destination}"`
      : `mv "${source}" "${destination}"`;
    return this.execute(cmd);
  }

  /**
   * Copie (cp / copy)
   * @param source
   * @param destination
   */
  async copy(source: string, destination: string): Promise<string> {
    const cmd = this.isWindows
      ? `copy "${source}" "${destination}"`
      : `cp -r "${source}" "${destination}"`;
    return this.execute(cmd);
  }

  /**
   * Recherche de texte dans les fichiers (grep / findstr)
   * Très puissant pour scanner ton dossier /src
   * @param pattern
   * @param path
   */
  async searchInFiles(pattern: string, path = "."): Promise<string> {
    const cmd = this.isWindows
      ? `findstr /s /i "${pattern}" "${path}\\*.*"`
      : `grep -r "${pattern}" "${path}"`;
    return this.execute(cmd);
  }
  /*
  async readDirShell(dirPath: string): Promise<string[]> {
    this.validatePath(dirPath, "dirPath");

    // On choisit la commande selon l'OS
    // Windows: dir /s /b (récursif + format court)
    // Unix: find . -type f (récursif)
    const isWindows = process.platform === "win32";
    const command = isWindows ? `dir "${dirPath}" /s /b` : `find "${dirPath}" -maxdepth 2`; // maxdepth pour limiter si besoin

    try {
      // On utilise ta méthode execute qui capture le stdout
      const output = await this.execute(command);

      if (!output) return [];

      // On transforme la grosse chaîne de caractères en tableau
      // Windows utilise \r\n, Unix utilise \n
      return output.split(/\r?\n/).map((line) => line.trim());
    } catch (error) {
      const message = `Échec de lecture shell du dossier : ${dirPath}`;
      // On garde ta logique de gestion d'erreur
      throw new Error(`${message}: ${error.message}`);
    }
  }
    */
}
