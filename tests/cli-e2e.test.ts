import { execa } from "execa";
import { describe, it, expect } from "vitest";
import path from "node:path";
import { runCLI } from "./utils";

describe("CLI End-to-End", () => {
  it("devrait afficher la version", async () => {
    const { stdout } = await runCLI(["--version"]);
    expect(stdout).toContain("1.0.0");
  });

  it("devrait afficher l’aide par défaut", async () => {
    const { stdout } = await runCLI(["--help"]);
    expect(stdout).toContain("Usage:");
  });

  // it("devrait échouer avec une commande inconnue", async () => {
  //   const { stderr, exitCode } = await runCLI(["commande-imaginaire"]);
  //   expect(exitCode).not.toBe(0);
  //   expect(stderr).toContain("Unknown command"); // Adapte selon ton message d'erreur
  // });
});
