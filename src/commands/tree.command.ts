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
  public description = `Génère l'arborescence du dossier <pathIn> en json, md ou yaml

  Exemple: mclp tree yaml ./src -s -o ./backup
  `;
  public arguments = "<type> <pathIn> [pathOut]";
  public aliases = ["t"];

  // Ajout de "yaml" dans les extensions autorisées
  private readonly extensions = ["json", "md", "yaml"];

  public options: ICommandOption[] = [
    // ... tes options restent identiques
    {
      flags: "-c, --code",
      description: "Inclure les métadonnées des fichiers de code",
      type: "boolean",
      defaultValue: false,
    },
    {
      flags: "-v, --view",
      description: "Voir l'arborescence dans la console",
      type: "boolean",
      defaultValue: false,
    },
    {
      flags: "-m, --metadata",
      description: "Inclure les métadonnées des fichiers",
      type: "boolean",
      defaultValue: false,
    },
    { flags: "-l, --level", description: "Niveau de profondeur", type: "number", defaultValue: 0 },
    {
      flags: "-s, --save",
      description: "Sauvegarder dans un fichier",
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

    this.validateArgs(args, 2, "Usage: mclp tree <type> <pathIn> [pathOut] [options]");

    const save = this.hasOption(options, "save");
    const view = this.hasOption(options, "view");
    const force = this.hasOption(options, "force");
    const level = this.getOption(options, "level", 0); // Utilisation de getOption pour la valeur
    const dryRun = this.hasOption(options, "dryRun");
    const metadata = this.hasOption(options, "metadata");
    const output = this.getOption(options, "output", "./");
    const [type, ...pathArgs] = args;

    if (!this.extensions.includes(type)) {
      throw new ValidationError(`Type invalide. Types supportés : ${this.extensions.join(", ")}`);
    }

    try {
      const pathIn = path.resolve(pathArgs[0] ?? ".");
      const argOut = pathArgs[1] && pathArgs[1] !== "." ? pathArgs[1] : undefined;
      const pathOut = path.resolve(argOut ?? output ?? pathIn);
      const fileName = path.resolve(pathOut, `tree.${type}`);

      if (!this.cli.fileSystem.exists(pathIn)) {
        throw new FilesystemError(`Le dossier '${pathIn}' n'existe pas.`);
      }

      this.cli.logger.info(`Processing: ${pathIn} -> ${fileName} (${type})`);

      // Récupération de l'objet tree (données brutes)
      const tree = await this.cli.fileSystem.getDirectoryTree(pathIn, 0, level, metadata, {
        excludedDirs,
        analyzeExtensions,
      });

      if (!tree) throw new FilesystemError(`Le dossier '${pathIn}' est vide ou exclu.`);

      // SWITCH pour déterminer le contenu selon le type
      let content = "";
      switch (type) {
        case "json":
          content = JSON.stringify(tree, null, 2);
          break;
        case "md":
          content = this.cli.tool.generateAsciiTree(tree, view);
          break;
        case "yaml":
          content = this.cli.tool.generateYamlTree(tree, view);
          break;
      }

      // Gestion de l'affichage console si pas de sauvegarde ou option view activée
      if (!save && view) {
        // On affiche déjà via view=true dans les générateurs,
        // mais on peut ajouter un log final ici si nécessaire.
        return;
      }

      if (save) {
        if (this.cli.fileSystem.exists(fileName) && !force) {
          throw new FilesystemError(`Le fichier '${fileName}' existe déjà. Utilisez --force.`);
        }

        if (dryRun) {
          this.cli.logger.info(`[dry-run] L'écriture de ${fileName} a été simulée.`);
          return;
        }

        await this.cli.fileSystem.writeFile(fileName, content);
        this.cli.logger.success(`Fichier généré: ${fileName}`);
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      this.cli.logger.error(message);
    }
  }
}
