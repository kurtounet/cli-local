import {
  IConfigFramework,
  IDependencies,
} from "@/features/commun/framework.interface.js";

export async function installTSDependencies(
  framework: IConfigFramework,
  path: string,
) {
  const dependencies: IDependencies = framework.dependencies;
  logInfo(`npm install ${dependencies}`);
  logInfo("📦 Début de l'installation des dépendances...");
  framework.dependencies.prod.forEach((dep: string) => {
    logInfo(`npm install ${dep}`);
    executeCommand(
      `npm install ${dep}`,
      { cwd: path, stdio: "inherit" },
      `📦 Installation de ${dep}`,
      `✅ Dépendances de production installées avec succès !`,
      `${EMOJI.error} Erreur lors de l'installation des dépendances de production !`,
    );
  });
  framework.dependencies.dev.forEach((dep: string) => {
    logInfo(`npm install --save-dev ${dep}`);
    executeCommand(
      `npm install --save-dev ${dep}`,
      { cwd: path, stdio: "inherit" },
      `📦 Installation de ${dep}`,
      `✅ Dépendances de production installées avec succès !`,
      `${EMOJI.error} Erreur lors de l'installation des dépendances de production !`,
    );
  });
}

/**
 * Installs Composer dependencies for PHP frameworks.
 * @param framework The framework configuration object.
 * @param path The installation path.
 */
export async function installComposerDependencies(
  framework: IFramework,
  path: string,
) {
  framework.dependencies.prod.forEach((dep: string) => {
    logInfo(`composer require ${dep}`);
    executeCommand(
      `composer require ${dep}`,
      { cwd: path, stdio: "inherit" },
      `📦 Installation de ${dep}`,
      `✅ Dépendances de production installées avec succès !`,
      `${EMOJI.error} Erreur lors de l'installation des dépendances de production !`,
    );
  });
  framework.dependencies.dev.forEach((dep: string) => {
    logInfo(`composer require --dev ${dep}`);
    executeCommand(
      `composer require --dev ${dep}`,
      { cwd: path, stdio: "inherit" },
      `📦 Installation de ${dep}`,
      `✅ Dépendances de production installées avec succès !`,
      `${EMOJI.error} Erreur lors de l'installation des dépendances de production !`,
    );
  });
}
