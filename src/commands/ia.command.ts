import { BaseCommand } from "./BaseCommand.js";
export class IaCommand extends BaseCommand {
  public name = "ia";
  public description = "Set pour l'IA";
  public arguments = "<type> [names...]";
  public aliases = ["i"];

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

  async execute(
    args: string[],
    options: Record<string, unknown>,
  ): Promise<void> {
    const [type, ...names] = args;
    this.cli.logger.success("✅ Opération terminée.");
  }
}
