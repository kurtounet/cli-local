import { BaseCommand } from "./BaseCommand.js";
import { AnyOptions } from "@/types/cli-options.type.js";
import { ICommandOption } from "@/types/command.interface.js";

export interface IPluginOptions extends AnyOptions {
  force?: boolean;
  output?: string;
  count?: number;
}
export class PluginCommand extends BaseCommand<IPluginOptions> {
  public name = "plugin";
  public description = "Génère un nouvel élément de la CLI (Service, Command, Template)";
  public arguments = "<pluginId> <type>";
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

  private readonly actions = ["service", "command", "scaffolder", "template", "plugin"];

  async execute(args: string[], options: IPluginOptions): Promise<void> {
    const [pluginId, typePluging] = args;
    try {
      this.cli.logger.info(`Chargement du plugin : ${pluginId}...`);
      switch (typePluging) {
        case "service":
          this.cli.logger.info(`Chargement du service : ${pluginId}...`);
          break;
        case "command":
          this.cli.logger.info(`Chargement de la commande : ${pluginId}...`);
          break;
        case "scaffolder":
          this.cli.logger.info(`Chargement du scaffolder : ${pluginId}...`);
          break;
        case "template":
          this.cli.logger.info(`Chargement du template : ${pluginId}...`);
          break;
        case "plugin":
          this.cli.logger.info(`Chargement du plugin : ${pluginId}...`);
          break;
      }
      // 1. Charger le plugin via le service
      const { project, entitiesJson } = await this.cli.project.loadFileCliLocal(process.cwd());
      const { instance, manifest, pluginDir } = await this.cli.plugin.load(pluginId, typePluging);

      // 2. Préparer des données de test (ceci viendra normalement de tes entités JSON)
      const data = {
        project: project,
        entitiesJson: entitiesJson,
        pluginDir: pluginDir,
        manifest: manifest,
        blueprints: [...manifest.blueprints],
        entities: entitiesJson.entities,
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
