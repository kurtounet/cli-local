import { BaseCommand } from "./BaseCommand.js";
import { ValidationError } from "@/errors/cli-errors.js";

export class TestCommand extends BaseCommand {
  public name = "test";
  public description =
    "Génère un nouvel élément de la CLI (Service, Command, Template)";
  public arguments = "<type> [names...]";
  public aliases = ["m"];

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
    const [type, ...names] = args;
    this.logger.success("✅ test Création de test : Opération terminée.");
  }
}
