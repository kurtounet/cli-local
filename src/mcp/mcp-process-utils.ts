import { exec } from "node:child_process";
import process from "node:process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

/**
 * Vérifie si un processus MCP est déjà en cours d'exécution
 */
export async function isMcpServerRunning(): Promise<boolean> {
  try {
    if (process.platform === "win32") {
      // Windows
      const { stdout } = await execAsync('tasklist /FI "IMAGENAME eq node.exe" /FO CSV');
      return stdout.includes("mcp-server") || stdout.includes("mclp");
    } else {
      // Linux/Mac
      const { stdout } = await execAsync("ps aux | grep mcp-server | grep -v grep");
      return stdout.trim().length > 0;
    }
  } catch (error) {
    // Pas de processus trouvé
    return false;
  }
}

/**
 * Tue tous les processus MCP en cours
 */
export async function killAllMcpProcesses(): Promise<void> {
  try {
    if (process.platform === "win32") {
      // Windows - tuer les processus node.exe qui contiennent "mcp" ou "mclp"
      await execAsync('taskkill /F /FI "WINDOWTITLE eq *mcp*" /T');
      await execAsync('taskkill /F /FI "WINDOWTITLE eq *mclp*" /T');
    } else {
      // Linux/Mac
      await execAsync("pkill -f mcp-server");
      await execAsync("pkill -f mclp");
    }
    console.log("✅ Tous les processus MCP ont été arrêtés");
  } catch (error) {
    // Ignorer les erreurs si aucun processus n'est trouvé
    console.log("ℹ️ Aucun processus MCP trouvé");
  }
}

/**
 * Liste tous les processus MCP en cours
 */
export async function listMcpProcesses(): Promise<string[]> {
  try {
    if (process.platform === "win32") {
      const { stdout } = await execAsync('tasklist /FI "IMAGENAME eq node.exe" /FO CSV /V');
      const lines = stdout.split("\n");
      return lines.filter(
        (line) => line.toLowerCase().includes("mcp") || line.toLowerCase().includes("mclp"),
      );
    } else {
      const { stdout } = await execAsync("ps aux | grep -E 'mcp-server|mclp' | grep -v grep");
      return stdout
        .trim()
        .split("\n")
        .filter((line) => line.length > 0);
    }
  } catch (error) {
    return [];
  }
}

/**
 * Obtient le PID du processus MCP en cours (s'il existe)
 */
export async function getMcpPid(): Promise<number | null> {
  try {
    if (process.platform === "win32") {
      const { stdout } = await execAsync(
        "wmic process where \"commandline like '%mcp-server%'\" get processid",
      );
      const match = /\d+/.exec(stdout);
      return match ? parseInt(match[0], 10) : null;
    } else {
      const { stdout } = await execAsync("pgrep -f mcp-server");
      return stdout.trim() ? parseInt(stdout.trim().split("\n")[0], 10) : null;
    }
  } catch (error) {
    return null;
  }
}
