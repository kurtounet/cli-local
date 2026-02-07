import { execSync, spawn, spawnSync } from "node:child_process";

import { exec } from "child_process";
import { promisify } from "util";

import { IAppContext } from "@/types/context.interface.js";
import { IShellService } from "@/types/services/shell-service.interface.js";

import { BaseService } from "./base-service.service.js";

// On transforme exec en version qui retourne une Promise
const execPromise = promisify(exec);

export class ShellService extends BaseService implements IShellService {
  readonly serviceName = "ShellService";
  private isWindows = process.platform === "win32";

  constructor(cli: IAppContext) {
    // Remplace 'any' par IAppContext si importé
    super(cli);
  }
  /**
   * Recommandé pour les serveurs Web.
   * Ne bloque pas l'Event Loop (Boucle d'événements).
   * @param command - La commande à exécuter
   * @param cwd - Le dossier de travail
   * @returns - La sortie de la commande
   */
  async execute(command: string, cwd?: string): Promise<string> {
    try {
      console.log(`> Exécution (async) de : ${command}...`);

      const { stdout, stderr } = await execPromise(command, {
        encoding: "utf-8",
        timeout: 30000, // 30 secondes max
        cwd: cwd,
        maxBuffer: 1024 * 1024 * 10, // Augmenté à 10 Mo pour plus de sécurité
      });

      if (stderr) console.warn(`Avertissement Shell : ${stderr}`);

      return stdout.trim(); // .trim() retire les sauts de ligne inutiles
    } catch (error: any) {
      console.error(`Erreur d'exécution : ${error.message}`);
      throw new Error(`Échec de la commande : ${command}. ${error.stderr || error.message}`);
      // if (error instanceof Error) {
      //   console.error(`Erreur : ${error.message}`);
      //   throw new Error(`Échec de la commande ${command}: ${error.message}`);
      // }
    }
  }

  /**
   * À utiliser uniquement pour des scripts CLI ou au démarrage.
   * Bloque l'Event Loop jusqu'à la fin de l'exécution.
   * @param command - La commande à exécuter
   * @param cwd - Le dossier de travail
   * @returns - La sortie de la commande
   */
  executeSync(command: string, cwd: string): string {
    try {
      console.log(`> Exécution (sync) de : ${command}...`);

      // "pipe" est nécessaire pour capturer le résultat dans la variable 'output'.
      // "inherit" afficherait dans le terminal mais retournerait null.
      const output = execSync(command, {
        cwd,
        encoding: "utf-8",
        stdio: "pipe", // Crucial pour récupérer le retour
        timeout: 10000, // Plus court car c'est bloquant
      });

      return output.trim();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Erreur : ${error.message}`);
        throw new Error(`Échec de la commande ${command}: ${error.message}`);
      }
    }
  }
  /**
   * Version asynchrone sécurisée.
   * Idéal pour les processus longs ou les serveurs web.
   * @param command - La commande à exécuter
   * @param args - Les arguments de la commande
   * @param cwd - Le dossier de travail
   * @param shell - Activer le shell
   * @param stdio
   * @returns - La sortie de la commande
   */
  async executeSpawn(
    command: string,
    args: string[] = [],
    shell = true,
    cwd?: string,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      console.log(`> Exécution (spawn async) : ${command} ${args.join(" ")}`);

      const child = spawn(command, args, { cwd, shell });

      let fullOutput = "";

      // On écoute le flux de sortie
      child.stdout.on("data", (data) => {
        const str = data as string;
        fullOutput += str;
        process.stdout.write(data as string); // Affiche en temps réel dans ton terminal
      });

      child.stderr.on("data", (data) => {
        process.stderr.write(data as string); // Affiche les erreurs en temps réel
      });

      child.on("error", (err) => reject(new Error(`Lancement échoué : ${err.message}`)));

      child.on("close", (code) => {
        if (code === 0) resolve(fullOutput.trim());
        else reject(new Error(`La commande a échoué (code ${code})`));
      });
    });
  }

  /**
   * Version synchrone sécurisée.
   * Utile pour des scripts d'initialisation.
   * @param command - La commande shell à exécuter.
   * @param args - Les arguments de la commande.
   * @param cwd - Le dossier de travail.
   * @param stdio - "pipe" ou "inherit".
   * @param shell - Activer le shell
   * @returns La sortie de la commande
   */
  executeSyncSpawn(
    command: string,
    args: string[] = [],
    stdio: "pipe" | "inherit" = "inherit",
    shell = true,
    cwd?: string,
  ): string {
    console.log(`> Exécution (spawnSync) : ${command} ${args.join(" ")}`);

    const result = spawnSync(command, args, {
      cwd,
      encoding: "utf-8",
      stdio: stdio, // Si "inherit", l'affichage se fait tout seul
      shell: shell,
      timeout: 600000, // Augmenté pour Angular (10 min)
    });

    if (result.error) {
      throw new Error(`Erreur lors du lancement : ${result.error.message}`);
    }

    if (result.status !== 0) {
      // Note : avec "inherit", result.stderr sera nul car déjà affiché dans le terminal
      throw new Error(`Échec de la commande ${command} (code ${result.status})`);
    }

    return result.stdout ? result.stdout.trim() : "";
  }
}
// PAS SUPPRIMER POUR LE MOMENT
/*

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
*/
