import { EMOJI } from "@constants/messages";
import { IFramework } from "@frameworks-models/framework-commun.model";
import { executeCommand } from "@utils/execute-command";

/**
 *
 * @param framework
 * @param frameworkProjectPath
 */
export function createTests(
  framework: IFramework,
  frameworkProjectPath: string,
) {
  // TODO
  // Créer les tests pour chaque route de l'api
}

/**
 *
 * @param framework
 * @param frameworkProjectPath
 */
export function loadTests(framework: IFramework, frameworkProjectPath: string) {
  // TODO
  // Charger les tests pour chaque route de l'api
}
/**
 *
 * @param frameworkProjectPath
 */
export function launchTests(frameworkProjectPath: string) {
  // TODO
  // Charger les tests pour chaque route de l'api php bin/phpunit
  const command = `php bin/phpunit --configuration phpunit.xml`;
  // créer les databases
  executeCommand(
    command,
    { cwd: `${frameworkProjectPath}`, stdio: "inherit" },
    `🚀 Lancement des test`,
    `✅ Tests lancé avec succès !`,
    `${EMOJI.error} Erreur lors des tests !`,
  );
}
