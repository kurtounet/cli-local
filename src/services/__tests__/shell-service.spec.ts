import { beforeEach, describe, expect, it, vi } from "vitest";

import { IAppContext } from "@/types/context.interface.js";

import { ShellService } from "../shell.service.js";

describe("ShellService", () => {
  let shellService: ShellService;

  beforeEach(() => {
    const mockCli = {} as IAppContext;
    shellService = new ShellService(mockCli);
  });

  // --- 1. TEST EXECUTE (Async Buffer) ---
  describe("execute", () => {
    it("doit retourner la sortie de la commande avec succès", async () => {
      // On demande à Node d'afficher 'Hello'
      const result = await shellService.execute("node -e \"console.log('Hello')\"");
      expect(result).toBe("Hello");
    });

    it("doit lever une erreur si la commande échoue", async () => {
      await expect(shellService.execute("commande_inexistante")).rejects.toThrow();
    });
  });

  // --- 2. TEST EXECUTESYNC (Sync Buffer) ---
  describe("executeSync", () => {
    it("doit retourner la sortie de manière synchrone", () => {
      const result = shellService.executeSync("node -e \"console.log('Sync')\"");
      expect(result).toBe("Sync");
    });

    it("doit lever une erreur synchrone en cas d'échec", () => {
      expect(() => shellService.executeSync("exit 1")).toThrow();
    });
  });

  // --- 3. TEST EXECUTESPAWN (Async Stream) ---
  describe("executeSpawn", () => {
    it("doit gérer les arguments dans un tableau", async () => {
      // On passe 'Hello Spawn' comme argument à un script node
      const result = await shellService.executeSpawn("node", ["-e", "console.log('Hello Spawn')"]);
      expect(result).toBe("Hello Spawn");
    });

    it("doit capturer stderr en cas d'erreur", async () => {
      await expect(shellService.executeSpawn("node", ["-e", "process.exit(1)"])).rejects.toThrow(
        /code 1/i,
      );
    });
  });

  // --- 4. TEST EXECUTESYNCSPAWN (Sync Stream) ---
  describe("executeSyncSpawn", () => {
    it("doit retourner le résultat proprement", () => {
      const result = shellService.executeSyncSpawn("node", ["-v"]);
      // Vérifie que le résultat ressemble à une version (ex: v20.x.x)
      expect(result).toMatch(/^v\d+\.\d+\.\d+/);
    });

    it("doit lever une erreur si le processus échoue", () => {
      // On force un code de sortie 1
      expect(() => shellService.executeSyncSpawn("node", ["-e", "process.exit(1)"])).toThrow();
    });
  });
});
