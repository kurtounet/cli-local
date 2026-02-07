import { BaseService } from "./base-service.service.js";

export class GitService extends BaseService {
  readonly serviceName = "GitService";

  public init(): Promise<void> {
    // Si tu n'as rien à initialiser pour l'instant :
    return Promise.resolve();
  }

  async pull(): Promise<void> {
    this.cli.shell.executeSyncSpawn("git", ["pull"], "inherit", true);
    return Promise.resolve();
  }

  async push(): Promise<void> {
    this.cli.shell.executeSyncSpawn("git", ["push"], "inherit", true);
    return Promise.resolve();
  }

  async commit(message: string): Promise<void> {
    this.cli.shell.executeSyncSpawn("git", ["commit -m", message], "inherit", true);
    return Promise.resolve();
  }

  async add(folder = "."): Promise<void> {
    this.cli.shell.executeSyncSpawn("git", ["add", folder], "inherit", true);
    return Promise.resolve();
  }

  async addToGitignore(path: string, contentToAdd: string): Promise<string> {
    const gitIgnorePath = this.cli.path.join(path, ".gitignore");

    await this.cli.fileSystem.ensureFile(gitIgnorePath);

    const currentContent = await this.cli.fileSystem.readFile(gitIgnorePath);

    const isAlreadyPresent = this.verifyInGitIgnoreFile(currentContent, contentToAdd);

    if (isAlreadyPresent) {
      throw new Error(`${path} : "${contentToAdd}" est déjà présent ⚠️`);
    }
    const entry = currentContent.endsWith("\n") ? `${contentToAdd}\n` : `\n${contentToAdd}\n`;

    await this.cli.fileSystem.appendFile(gitIgnorePath, entry);

    return `${path} : "${contentToAdd}" ajouté à .gitignore ✅`;
  }
  async removeInGitignore(path: string, itemsToRemove: string[]): Promise<string> {
    const gitIgnorePath = this.cli.path.join(path, ".gitignore");

    if (!this.cli.fileSystem.exists(gitIgnorePath)) {
      return "Aucun fichier .gitignore trouvé, rien à supprimer.";
    }

    const currentContent = await this.cli.fileSystem.readFile(gitIgnorePath);
    const lines = currentContent.split("\n");

    // On filtre pour ne garder que les lignes qui ne sont pas dans notre liste à supprimer
    const filteredLines = lines.filter(
      (line) => !itemsToRemove.some((item) => line.trim() === item.trim()),
    );

    if (lines.length === filteredLines.length) {
      return "Aucun changement nécessaire dans .gitignore.";
    }

    await this.cli.fileSystem.writeFile(gitIgnorePath, filteredLines.join("\n"));
    return `Éléments retirés de .gitignore dans ${path} ✅`;
  }

  async gitAddAndCommitAndPush(folder: string, message: string): Promise<boolean> {
    try {
      await this.add(folder);
      await this.commit(message);
      await this.push();
      this.cli.logger.info("Changements poussés avec succès !");
      return true;
    } catch (error) {
      this.cli.errorHandler.handle(error, "Échec de l'opération Git");
      return false;
    }
  }
  /**
   * Vérifie si le contenu à ajouter est déjas dans .gitignore.
   * @param content - Contenu du fichier .gitignore.
   * @param currentContent
   * @param item - Contenu à ajouter.
   * @returns Retourne le nouveau contenu du fichier .gitignore ou un tableau vide.
   */
  verifyInGitIgnoreFile(currentContent: string, item: string): boolean {
    if (!item.trim()) return false; // Ne pas valider si l'item est vide
    return currentContent.split("\n").some((line) => line.trim() === item.trim());
  }
}
