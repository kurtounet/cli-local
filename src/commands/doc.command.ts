import path from "node:path";

import { dump } from "js-yaml";

import { FilesystemError, ValidationError } from "@/errors/cli-errors.js";
import { AnyOptions } from "@/types/cli-options.type.js";

import { BaseCommand } from "./BaseCommand.js";
export interface IDocOptions extends AnyOptions {
  view?: boolean;
  metadata?: boolean;
  level?: number;
  save?: boolean;
  output?: string;
  force?: boolean;
  dryRun?: boolean;
}
export class DocCommand extends BaseCommand {
  public name = "doc";
  public description = `Génère la documentation md
`;
  public arguments = "[format]";
  public aliases = ["d"];

  async execute(args: string[], options: IDocOptions): Promise<void> {
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

    try {
      const argOut = pathArgs[1] && pathArgs[1] !== "." ? pathArgs[1] : undefined;
      const pathOut = path.resolve(argOut ?? output ?? pathIn);
      const fileName = path.resolve(pathOut, `tree.${type}`);

      if (!this.cli.fileSystem.exists(pathIn)) {
        throw new FilesystemError(`Le dossier '${pathIn}' n'existe pas.`);
      }

      this.cli.logger.info(`Processing: ${pathIn} -> ${fileName} (${type})`);

      // Récupération de l'objet tree (données brutes)
      const tree = await this.cli.fileSystem.getDirectoryTree(pathIn, 0, 0, true, {
        excludedDirs,
        analyzeExtensions,
      });

      if (!tree) throw new FilesystemError(`Le dossier '${pathIn}' est vide ou exclu.`);

      const doc = this.cli.fileSystem.buildDoc(tree, {
        level,
        save,
      });
      await this.cli.fileSystem.writeFile(fileName, doc);
    } catch (error) {
      this.cli.errorHandler.handle(error);
    }
  }
}
