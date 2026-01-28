import path from "node:path";
import { BaseCommand } from "./BaseCommand.js";
import { FilesystemError, ValidationError } from "@/errors/cli-errors.js";
import { AnyOptions } from "@/types/cli-options.type.js";
import { ICommandOption } from "@/types/command.interface.js";
export interface ITreeOptions extends AnyOptions {
  code?: boolean;
  view?: boolean;
  metadata?: boolean;
  level?: number;
  save?: boolean;
  output?: string;
  force?: boolean;
  dryRun?: boolean;
}
export class TreeCommand extends BaseCommand<ITreeOptions> {
  public name = "tree";
  public description = `Génère l'arborecence du dossier <pathIn> en json, md

  Exemple: mclp tree -c -m -l 1 -s -o ./src -f ./src/tests

  `;
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
      flags: "-v, --view",
      description: "Voir l'arborecence dans la console",
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

  async execute(args: string[], options: ITreeOptions): Promise<void> {
    const excludedDirs = ["node_modules", ".git", "dist", ".vscode", ".doc"];
    const analyzeExtensions = [".ts", ".js"];
    // 1. Destructure type and the remaining path arguments
    // const [type, ...pathArgs] = args;
    this.validateArgs(args, 2, "Usage: mclp generate <target> <name...> [options]");

    const save = this.hasOption(options, "save");
    const view = this.hasOption(options, "view");
    // const code = this.hasOption(options, "code");
    const force = this.hasOption(options, "force");
    const level = this.hasOption(options, "level");
    const dryRun = this.hasOption(options, "dryRun");
    const metadata = this.hasOption(options, "metadata");
    const output = this.getOption(options, "output", "./");
    const [type, ...pathArgs] = args;

    // 2. Validation
    if (!type || !this.extensions.includes(type) || pathArgs.length === 0) {
      throw new ValidationError(
        `Veuillez fournir un type (${this.extensions.join(", ")}) et le chemin d'entrée.`,
      );
    }

    try {
      const pathIn = path.resolve(pathArgs[0] ?? ".");
      const argOut = pathArgs[1] && pathArgs[1] !== "." ? pathArgs[1] : undefined;
      const pathOut = path.resolve(argOut ?? output ?? pathIn);

      const fileName = path.resolve(pathOut, `tree.${type}`);

      this.cli.logger.info(`Processing: ${pathIn} -> ${fileName} (${type})`);

      if (!this.cli.fileSystem.exists(pathIn)) {
        throw new FilesystemError(`Le dossier '${pathIn}' n'existe pas.`);
      }

      const tree = await this.cli.fileSystem.getDirectoryTree(pathIn, 0, 0, metadata, {
        excludedDirs,
        analyzeExtensions,
      });
      if (!tree) {
        throw new FilesystemError(`Le dossier '${pathIn}' est vide.`);
      }
      if (!save) {
        if (view) {
          const md = this.cli.tool.generateAsciiTree(tree, true);
          this.cli.logger.info(md);
        }
        return;
      }

      const content =
        type === "json"
          ? JSON.stringify(tree, null, 2)
          : this.cli.tool.generateAsciiTree(tree, view);

      if (this.cli.fileSystem.exists(fileName) && !force) {
        throw new FilesystemError(
          `Le fichier '${fileName}' existe déjà. Utilise --force pour écraser.`,
        );
      }

      if (dryRun) {
        this.cli.logger.info(`[dry-run] write ${fileName}`);
        return;
      }

      await this.cli.fileSystem.writeFile(fileName, content);
      this.cli.logger.success(`Fichier généré: ${fileName}`);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      this.cli.logger.error(message);
    }
  }
}
