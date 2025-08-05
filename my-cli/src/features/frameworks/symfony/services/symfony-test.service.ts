import { IFramework } from "@features/frameworks/_global/interface/framework-commun.model";
import { executeCommand } from "@utils/execute-command";

export function createTests(
  framework: IFramework,
  frameworkProjectPath: string,
) {
  // TODO
  // Créer les tests pour chaque route de l'api
}

export function loadTests(framework: IFramework, frameworkProjectPath: string) {
  // TODO
  // Charger les tests pour chaque route de l'api
}
export function launchTests(frameworkProjectPath: string) {
  // TODO
  // Charger les tests pour chaque route de l'api php bin/phpunit
  let command = `php bin/phpunit --configuration phpunit.xml`;
  // créer les databases
  executeCommand(
    command,
    { cwd: `${frameworkProjectPath}`, stdio: "inherit" },
    `🚀 Lancement des test`,
    `✅ Tests lancé avec succès !`,
    `❌ Erreur lors des tests !`,
  );
}
