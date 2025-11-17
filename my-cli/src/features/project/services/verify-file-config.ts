import { IProjectConfig } from "@frameworks-models/framework-commun.model";
import { logInfo } from "@utils/logger";

export function verifiedFileConfig(config: IProjectConfig): string | boolean {
  // try {
  // } catch (error) {
  //     return `${EMOJI.error} Erreur de lecture ou de parsing du fichier ${config.projectName}-config.json ! !`;
  //     process.exit(1);
  // }
  // Vérification des propriétés essentielles du fichier de configuration
  if (!config.projectName) {
    return "${EMOJI.error} Le fichier de configuration doit contenir un nom de projet.";
    // process.exit(1);
  }
  if (!config.starUml || config.starUml.length === 0) {
    return "${EMOJI.error} Le fichier starUml n'est pas renseigné dans le fichier de configuration.";
    // process.exit(1);
  }
  if (!config.path || config.path.length === 0) {
    return "${EMOJI.error} Le chemin du projet n' existe pas.";
    // process.exit(1);
  }
  if (!config.frameWorks) {
    return "${EMOJI.error} Le fichier de configuration doit contenir moins 1 frameworks.";
    // process.exit(1);
  }
  // if (!config.databases) {
  //     return "${EMOJI.error} Le fichier de configuration doit contenir les bases de données.";
  //     // process.exit(1);
  // }
  // if (!config.environments) {
  //     return "${EMOJI.error} Le fichier de configuration doit contenir moin 1 environnements.";
  //     // process.exit(1);
  // }
  logInfo("🗄️ Vérification du fichier config.json... OK !!!!!!!");
  return true;
}
