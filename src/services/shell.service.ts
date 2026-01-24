import { execSync } from "node:child_process";
import { BaseService } from "./base-service.service.js";
import { IShellService } from "@/types/shell-service.interface.js";
import { promisify } from "util";
import { exec } from "child_process";

// On transforme exec en version qui retourne une Promise
const execPromise = promisify(exec);
export class ShellService extends BaseService implements IShellService {
  /**
   * Exécute une commande de manière asynchrone
   * Attention, cela ne bloque pas l'Event Loop.
   */
  async execute(command: string): Promise<string> {
    try {
      console.log(`> Exécution (async) de : ${command}...`);

      // On attend le résultat sans bloquer le reste du serveur
      const { stdout, stderr } = await execPromise(command, {
        encoding: "utf-8",
      });

      if (stderr) {
        console.warn(`Avertissement Shell : ${stderr}`);
      }

      return stdout;
    } catch (error: any) {
      console.error(`Erreur critique : ${error.message}`);
      throw new Error(`Échec de la commande ${command}: ${error.message}`);
    }
  }
  /**
   * Exécute une commande de manière synchrone.
   * Attention, cela bloque l'Event Loop.
   */
  executeSync(command: string): string {
    try {
      console.log(`> Exécution de : ${command}...`);

      // Utilisation de la fonction importée de 'child_process'
      // et non de 'this.executeSync'
      const output = execSync(command, { encoding: "utf-8" });

      return output;
    } catch (error: any) {
      console.error(`Erreur : ${error.message}`);
      return `Erreur lors de l'exécution de ${command}: ${error.message}`;
    }
  }
}
