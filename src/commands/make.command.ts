import { ICommandOption } from "@/types/command.interface.js";
import { BaseCommand } from "./BaseCommand.js";
import { ValidationError } from "@/errors/cli-errors.js";
import { AnyOptions } from "@/types/cli-options.type.js";
export interface IMakeOptions extends AnyOptions {
  force?: boolean;
  output?: string;
  count?: number;
}
export class MakeCommand extends BaseCommand<IMakeOptions> {
  public name = "make";
  public description =
    "Génère un nouvel élément de la CLI (Service, Command, Template)";
  public arguments = "<type> [names...]";
  public aliases = ["m"];

  public options: ICommandOption[] = [
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

  private readonly actions = ["service", "command", "template", "plugin"];

  async execute(args: string[], options: IMakeOptions): Promise<void> {
    // const output = this.getOption(options, "output", "./dist");
    // const force = this.hasOption(options, "force");

    const [type, ...names] = args;
    console.log("Arguments reçus:", args);
    console.log("Options reçues:", options);

    // 1. Mode interactif si aucun type
    if (!type) {
      this.cli.logger.info(
        "Modes interactifs disponibles : " + this.actions.join(", "),
      );
      // Ici tu pourrais appeler Inquirer pour demander le type
      return;
    }

    const normalizedType = type.toLowerCase();

    // 2. Validation
    if (!this.actions.includes(normalizedType)) {
      throw new ValidationError(
        `Type invalide. Choix : ${this.actions.join(", ")}`,
      );
    }

    // 3. Gestion multiple (noms séparés par espaces ou virgules)
    const namesArray = names
      .flatMap((n) => n.split(","))
      .map((n) => n.trim())
      .filter((n) => n.length > 0);

    if (namesArray.length === 0) {
      this.cli.logger.warn("Veuillez fournir au moins un nom.");
      return;
    }

    // 4. Exécution
    for (const name of namesArray) {
      await this.cli.generator.newComponent(normalizedType, name, options);
    }

    this.cli.logger.success("✅ Opération terminée.");
  }
}
