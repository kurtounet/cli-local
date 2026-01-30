import { EMOJI } from "@constants/messages";
import { IFramework } from "@frameworks-models/framework-commun.model";
import { executeCommand } from "@utils/execute-command";

export function symfonyCreateDatabases(
  framework: IFramework,
  frameworkProjectPath: string,
) {
  // TODO
  let command = `symfony console doctrine:database:create --if-not-exists --no-interaction`;
  // créer les databases
  executeCommand(
    command,
    { cwd: `${frameworkProjectPath}`, stdio: "inherit" },
    `🚀 Création de la base de données`,
    `✅ Base de données créée avec succès !`,
    `${EMOJI.error} Erreur lors création de la base de données !`,
  );
  symfonyGenerateMigrate(frameworkProjectPath, "");
  command = `symfony console doctrine:database:create --env=test --if-not-exists --no-interaction`;
  executeCommand(
    command,
    { cwd: `${frameworkProjectPath}`, stdio: "inherit" },
    `🚀 Création de la base de données de test`,
    `✅ Base de données de test créée avec succès !`,
    `${EMOJI.error} Erreur lors création de la base de données de test !`,
  );
  symfonyCreateMigration(frameworkProjectPath, "--env=test");
  // database dev, test, prod
}
export function symfonyGenerateMigrate(
  frameworkProjectPath: string,
  mode?: string,
) {
  if (mode === "") {
    symfonyCreateMigration(frameworkProjectPath);
  }
  // TODO
  let command = `symfony console ${mode} doctrine:migrations:migrate --no-interaction --allow-no-migration`;
  // créer les databases
  executeCommand(
    command,
    { cwd: `${frameworkProjectPath}`, stdio: "inherit" },
    `🚀 Création de la base de données`,
    `✅ Base de données créée avec succès !`,
    `${EMOJI.error} Erreur lors création de la base de données !`,
  );
}
export function symfonyCreateMigration(
  frameworkProjectPath: string,
  mode?: string,
) {
  // TODO
  let command = `symfony console doctrine:migrations:diff --no-interaction`;
  // créer les databases
  executeCommand(
    command,
    { cwd: `${frameworkProjectPath}`, stdio: "inherit" },
    `🚀 Création de la Migration`,
    `✅ Migration créée avec succès !`,
    `${EMOJI.error} Erreur lors création de la Migration !`,
  );
}
