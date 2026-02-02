import { execSync, spawn, spawnSync } from "node:child_process";
import { BaseService } from "./base-service.service.js";

import { promisify } from "util";
import { exec } from "child_process";
import { IShellService } from "@/types/services/shell-service.interface.js";

// On transforme exec en version qui retourne une Promise
const execPromise = promisify(exec);
export class ShellService extends BaseService implements IShellService {
  readonly serviceName = "ShellService";
  /**
   * Recommandé pour les serveurs Web.
   * Ne bloque pas l'Event Loop (Boucle d'événements).
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
      throw new Error(`Erreur lors de l'exécution de ${command}: ${error.message}`);
    }
  }
  /**
   * Version asynchrone sécurisée.
   * Idéal pour les processus longs ou les serveurs web.
   */
  async executeSpawn(command: string, args: string[] = [], cwd?: string): Promise<string> {
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
          reject(new Error(`La commande a échoué (code ${code}): ${stderr.trim()}`));
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
}
