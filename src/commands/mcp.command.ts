import {
  getMcpPid,
  isMcpServerRunning,
  killAllMcpProcesses,
  listMcpProcesses,
} from "@/mcp/mcp-process-utils.js";
import { runMcpServer, stopMcpServer } from "@/mcp/mcp-server.js";

import { BaseCommand } from "./BaseCommand.js";

export class McpCommand extends BaseCommand {
  public name = "mcp";
  public description = `Démarre, stoppe ou relance le serveur MCP pour interagir avec une IA ou un IDE

Commandes disponibles:
  mclp mcp start      # Démarre le serveur (avec vérification)
  mclp mcp stop       # Arrête proprement le serveur
  mclp mcp restart    # Redémarre le serveur
  mclp mcp status     # Affiche le statut + PID
  mclp mcp ps         # Liste tous les processus MCP
  mclp mcp kill       # Force l'arrêt (si bloqué)`;
  public arguments = "<action>";

  async execute(args: string[]): Promise<void> {
    const [action] = args;

    if (!action) {
      console.error("❌ Action manquante");
      console.error(this.description);
      return;
    }

    switch (action) {
      case "start":
        await this.handleStart();
        break;
      case "stop":
        await this.handleStop();
        break;
      case "restart":
        await this.handleRestart();
        break;
      case "status":
        await this.handleStatus();
        break;
      case "ps":
        await this.handlePs();
        break;
      case "kill":
        await this.handleKill();
        break;
      default:
        console.error(`❌ Action inconnue: ${action}`);
        console.error(this.description);
    }
  }

  private async handleStart(): Promise<void> {
    const isRunning = await isMcpServerRunning();

    if (isRunning) {
      console.error("⚠️ Un serveur MCP est déjà en cours d'exécution");
      console.error("💡 Utilisez 'mclp mcp stop' pour l'arrêter d'abord");
      console.error("💡 Ou utilisez 'mclp mcp restart' pour redémarrer");
      return;
    }

    console.error("🚀 Démarrage du serveur MCP...");
    await runMcpServer();
  }

  private async handleStop(): Promise<void> {
    console.error("🛑 Arrêt du serveur MCP...");
    await stopMcpServer();
    await killAllMcpProcesses();
    console.error("✅ Serveur MCP arrêté");
  }

  private async handleRestart(): Promise<void> {
    console.error("🔄 Redémarrage du serveur MCP...");
    await stopMcpServer();
    await killAllMcpProcesses();

    // Attendre un peu avant de redémarrer
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.error("🚀 Démarrage du serveur MCP...");
    await runMcpServer();
  }

  private async handleStatus(): Promise<void> {
    const isRunning = await isMcpServerRunning();
    const pid = await getMcpPid();

    console.error("\n📊 Statut du serveur MCP:");
    console.error("─".repeat(40));

    if (isRunning && pid) {
      console.error("✅ État: En cours d'exécution");
      console.error(`📌 PID: ${pid}`);
    } else {
      console.error("❌ État: Arrêté");
    }

    console.error("─".repeat(40) + "\n");
  }

  private async handlePs(): Promise<void> {
    console.error("🔍 Recherche de processus MCP...\n");
    const processes = await listMcpProcesses();

    if (processes.length === 0) {
      console.error("❌ Aucun processus MCP trouvé");
    } else {
      console.error(`✅ ${processes.length} processus trouvé(s):\n`);
      console.error("─".repeat(80));
      processes.forEach((proc, index) => {
        console.error(`${index + 1}. ${proc}`);
      });
      console.error("─".repeat(80));
    }
  }

  private async handleKill(): Promise<void> {
    console.error("💀 Arrêt forcé de tous les processus MCP...");
    await killAllMcpProcesses();
    console.error("✅ Tous les processus MCP ont été arrêtés");
  }
}
