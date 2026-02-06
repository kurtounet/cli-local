import path from "node:path";

import { EMOJI } from "@/assets/messages.js";
import { FilesystemError, ValidationError } from "@/errors/cli-errors.js";
import { AnyOptions } from "@/types/cli-options.type.js";
import { ICommandOption } from "@/types/command.interface.js";

import { BaseCommand } from "./BaseCommand.js";

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
  public description = `Génère l'arborescence du dossier [pathIn] en json, md ou yaml
  
Commandes disponibles:
  mclp tree <type> [pathIn] [pathOut] [options]
  
${EMOJI.info}  type: json, md, yaml, all
  pathIn: chemin du dossier à analyser (défaut: cwd ".")
  pathOut: chemin du dossier de sortie (défaut: cwd ".")
  Configurable dans tree de .mclprc.json.
`;
  public arguments = "<type> [pathIn] [pathOut]";
  public aliases = ["t"];

  // Ajout de "yaml" dans les extensions autorisées
  private readonly extensions = ["json", "md", "yaml"];

  public options: ICommandOption[] = [
    {
      flags: "-a, --all",
      description: "Générer l'arborescence en json, yaml, md",
      type: "boolean",
      defaultValue: false,
    },
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
    {
      flags: "-l, --level",
      description: "Niveau de profondeur",
      type: "number",
      defaultValue: 0,
    },
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
      flags: "-e, --exclude <path>",
      description: "Exclure un dossier",
      type: "string",
      defaultValue: "",
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
    // {
    //   flags: "-v, --verbose",
    //   description: "Afficher les détails de la création",
    //   type: "boolean",
    //   defaultValue: false,
    // },
    {
      flags: "-h, --help",
      description: "Afficher l'aide",
      type: "boolean",
      defaultValue: false,
    },
  ];

  async execute(args: string[], options: ITreeOptions): Promise<void> {
    // On récupère la config globale via le service
    const config = this.cli.config.current ? this.cli.config.current : this.cli.config.current;

    const level = this.hasOption(options, "level")
      ? this.getOption(options, "level", 0)
      : config.tree.analysis.maxLevel;
    const save = config.tree.analysis.save ?? this.getOption(options, "save", false);
    const excludedDirs = config.tree.exclude;
    const analyzeExtensions = config.tree.analysis.enabled ? config.tree.analysis.extensions : null;

    this.validateArgs(args, 1, "Usage: mclp tree <type> <pathIn> [pathOut] [options]");

    const view = this.hasOption(options, "view");
    const force = this.hasOption(options, "force");
    const dryRun = this.hasOption(options, "dryRun");
    const metadata = this.hasOption(options, "metadata");
    const output = config.tree.pathOut ?? this.getOption(options, "output", "./");
    const pathIn = config.tree.pathIn ?? this.getOption(options, "pathIn", ".");
    const [type, ...pathArgs] = args;

    if (!this.extensions.includes(type)) {
      throw new ValidationError(`Type invalide. Types supportés : ${this.extensions.join(", ")}`);
    }

    try {
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
        case "all":
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

        await this.cli.fileSystem.writeFile(`${fileName}`, content);
        this.cli.logger.success(`Fichier généré: ${fileName}`);
      }
    } catch (error: unknown) {
      this.cli.errorHandler.handle(
        error,
        `Une erreur est survenue lors de la génération de l'arborescence`,
      );
    }
  }
}
