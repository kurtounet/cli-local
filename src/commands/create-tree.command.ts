import path from "node:path";

import { ValidationError } from "@/errors/cli-errors.js";

import { BaseCommand } from "./BaseCommand.js";

export class CreateTreeCommand extends BaseCommand {
  public name = "create-tree";
  public description = "Génère l'arborecence du dossier courant en json, md";
  public arguments = "<type> <pathIn> [pathOut]";
  public aliases = ["ctr"];

  private readonly extensions = ["json", "md"];

  public options = [
    {
      flags: "-f, --force",
      description: "Écraser les fichiers existants",
      defaultValue: false,
    },
    {
      flags: "-d, --dry-run",
      description: "Simuler la création sans écrire",
      defaultValue: false,
    },
  ];

  public async execute(args: string[], options: any): Promise<void> {
    // 1. Destructure type and the remaining path arguments
    const [type, ...pathArgs] = args;

    // 2. Validation
    if (!type || !this.extensions.includes(type) || pathArgs.length === 0) {
      throw new ValidationError(
        `Veuillez fournir un type (${this.extensions.join(", ")}) et le chemin d'entrée.`,
      );
    }

    try {
      // 3. Extract paths from pathArgs (which starts AFTER the type)
      // pathArgs[0] is <pathIn>, pathArgs[1] is [pathOut]
      const pathIn = path.resolve(pathArgs[0] || ".");

      // 4. Handle pathOut: Default to pathIn if pathOut is missing or "."
      const pathOut =
        pathArgs[1] && pathArgs[1] !== "." ? path.resolve(pathArgs[1]) : pathIn;

      this.cli.logger.info(`Processing: ${pathIn} -> ${pathOut} (${type})`);

      // 5. Action
      await this.cli.architecture.getDirectoryTree(
        pathIn,
        pathOut,
        type,
        "save",
      );
    } catch (error: any) {
      this.cli.logger.error(error.message);
    }
  }
}
