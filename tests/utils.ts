import { execa } from "execa";
import path from "node:path";

const CLI_PATH = path.resolve(__dirname, "../src/index.ts");

export async function runCLI(args: string[]) {
  // On utilise 'tsx' pour ne pas avoir à compiler
  return execa("npx", ["tsx", CLI_PATH, ...args], {
    reject: false, // Empêche le test de crash si la CLI retourne une erreur (on veut tester l'erreur !)
  });
}
