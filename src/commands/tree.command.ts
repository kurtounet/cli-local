import path from "node:path";
import { BaseCommand } from "./BaseCommand.js";
import { ValidationError } from "@/errors/cli-errors.js";
import { ICommandOption } from "@/types/command.interface.js";

export class TreeCommand extends BaseCommand {
  public name = "tree";
  public description = "Génère l'arborecence du dossier <pathIn> en json, md";
  public arguments = "<type> <pathIn> [pathOut]";
  public aliases = ["t"];

  private readonly extensions = ["json", "md"];

  public options: ICommandOption[] = [
    {
      flags: "-c, --code",
      description: "Inclure les métadonnées des fichiers de code",
      type: "boolean",
      defaultValue: false,
    },
    {
      flags: "-m, --metadata",
      description: "Inclure les métadonnées des fichiers",
      type: "boolean",
      defaultValue: false,
    },
    {
      flags: "-l, --level",
      description: "Niveau de profondeur de l'arborecence",
      type: "number",
      defaultValue: 0,
    },
    {
      flags: "-s, --save",
      description: "Sauvegarder l'arborecence dans un fichier",
      type: "boolean",
      defaultValue: false,
    },
    {
      flags: "-o, --output <path>",
      description: "Chemin de sortie",
      type: "string",
      defaultValue: ".",
    },
    {
      flags: "-f, --force",
      description: "Écraser les fichiers existants",
      type: "boolean",
      defaultValue: false,
    },
    {
      flags: "-d, --dry-run",
      description: "Simuler la création sans écrire",
      type: "boolean",
      defaultValue: false,
    },
  ];

  async execute(
    args: string[],
    options: Record<string, unknown>,
  ): Promise<void> {
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
      // await this.cli.architecture.getDirectoryTree(
      //   pathIn,
      //   pathOut,
      //   type,
      //   "save",
      // );
      await this.cli.architecture.createDirectoryTree(pathIn, pathOut);
    } catch (error: any) {
      this.cli.logger.error(error.message);
    }
  }
}
