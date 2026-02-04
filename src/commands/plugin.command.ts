import { ICommandOption } from "@/types/command.interface.js";
import { BaseCommand } from "./BaseCommand.js";
import { ValidationError } from "@/errors/cli-errors.js";
import { AnyOptions } from "@/types/cli-options.type.js";
import { App } from "@/core/App.js";
export interface IPluginOptions extends AnyOptions {
  force?: boolean;
  output?: string;
  count?: number;
}
export class PluginCommand extends BaseCommand<IPluginOptions> {
  public name = "plugin";
  public description = "Génère un nouvel élément de la CLI (Service, Command, Template)";
  public arguments = "<pluginId>";
  //   public aliases = ["m"];

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

  async execute(args: string[], options: IPluginOptions): Promise<void> {
    const [pluginId] = args;
    try {
      this.cli.logger.info(`Chargement du plugin : ${pluginId}...`);

      // 1. Charger le plugin via le service
      const { instance, manifest, pluginDir } = await this.cli.plugin.load(pluginId); //symfony

      // 2. Préparer des données de test (ceci viendra normalement de tes entités JSON)
      const data = {
        blueprints: [...manifest.blueprints],
        entities: [
          { name: "User", fields: [{ name: "email", type: "string" }] },
          { name: "Post", fields: [{ name: "title", type: "string" }] },
        ],
      };

      // 3. Exécuter
      this.cli.logger.info(`Exécution de ${manifest.name} (v${manifest.version || "1.0.0"})...`);
      this.cli.logger.info(`Chargement du plugin : ${pluginDir}...`);
      await instance.execute({}, data);
      this.cli.logger.success("Plugin exécuté avec succès !");
    } catch (error: any) {
      this.cli.logger.error(`Erreur lors de l'exécution du plugin : ${error.message}`);
    }
  }
}
