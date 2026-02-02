import { BaseService } from "./base-service.service.js";

export class GitService extends BaseService {
  readonly serviceName = "GitService";

  public init(): Promise<void> {
    // Si tu n'as rien à initialiser pour l'instant :
    return Promise.resolve();
  }

  async pull(): Promise<void> {
    await this.cli.shell.executeSyncSpawn("git", ["pull"]);
  }
  async push(): Promise<void> {
    await this.cli.shell.executeSyncSpawn("git", ["push"]);
  }
  async commit(message: string): Promise<void> {
    await this.cli.shell.executeSyncSpawn("git", ["commit -m", message]);
  }
  async addToGitignore(path: string, message: string[]): Promise<void> {}
  async removeInGitignore(path: string, message: string[]): Promise<void> {}
}
