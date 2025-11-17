import { executeCommand } from "@utils/execute-command";
import { IDependencies, IFramework } from "../models/framework-commun.model";
import { logInfo } from "@utils/logger";
import { EMOJI } from "@constants/messages";

export async function installTSDependencies(
  framework: IFramework,
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
  /*
    // Commandes d'installation
    const packageManager = dependencies.packageManager || "npm";
    switch (packageManager) {
        case "npm" || "npx" || "yarn" || "pnpm":
            installDependencies(dependencies: IDependencies, path: string)
            break;
        case "composer ":
            logInfo("Composer n'est pas supporté pour l'installation des dépendances.");
            installComposerDependencies(dependencies: IDependencies, path: string)
            break;

    }


    // Exécuter les installations en parallèle
    const installPromises = [];

    if (installProdCommand) {
        installPromises.push(
            executeCommand(
                installProdCommand,
                { cwd: path, stdio: "inherit" },
                "📦 Installation des dépendances de production...",
                "✅ Dépendances de production installées avec succès !",
                "${EMOJI.error} Erreur lors de l'installation des dépendances de production !"
            )
        );
    }

    if (installDevCommand) {
        installPromises.push(
            executeCommand(
                installDevCommand,
                { cwd: path, stdio: "inherit" },
                "📦 Installation des dépendances de développement...",
                "✅ Dépendances de développement installées avec succès !",
                "${EMOJI.error} Erreur lors de l'installation des dépendances de développement !"
            )
        );
    }

    // Attente de la fin des installations
    await Promise.all(installPromises);

    // Commit unique après chaque groupe d'installation
    if (dependencies.prod.length) {
        await executeCommand(
            `git add . && git commit -m "install: ${dependencies.prod.join(", ")}"`,
            { cwd: path, stdio: "inherit" },
            "📌 Commit des dépendances de production...",
            "✅ Commit des dépendances de production créé avec succès !",
            "${EMOJI.error} Erreur lors du commit des dépendances de production !"
        );
    }

    if (dependencies.dev.length) {
        await executeCommand(
            `git add . && git commit -m "install: ${dependencies.dev.join(", ")} (dev)"`,
            { cwd: path, stdio: "inherit" },
            "📌 Commit des dépendances de développement...",
            "✅ Commit des dépendances de développement créé avec succès !",
            "${EMOJI.error} Erreur lors du commit des dépendances de développement !"
        );
    }

    logInfo("✅ Toutes les dépendances ont été installées et commit !");
    */
}

/**
 * Installs Composer dependencies for PHP frameworks.
 * @param framework The framework configuration object.
 * @param path The installation path.
 */
export function installComposerDependencies(
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
