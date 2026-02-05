import { IAppContext } from "@/types/context.interface.js";

import { ITaskService } from "../interfaces/task-service.interface.js";

export class TaskService implements ITaskService {
  readonly serviceName = "TaskService";

  constructor(private cli: IAppContext) {}
  private isRunning = false;

  public init(): Promise<void> {
    return Promise.resolve();
  }

  public async runTask(name: string, action: () => Promise<void>) {
    if (this.isRunning) {
      this.cli.logger.warn(
        `⏳ Tâche "${name}" mise en attente (une autre est en cours)...`,
      );
      return;
    }

    this.isRunning = true;
    this.cli.logger.info(`🚀 Exécution de la tâche : ${name}`);

    try {
      await action();
      this.cli.logger.success(`✨ Tâche "${name}" terminée avec succès.`);
    } catch (e) {
      this.cli.logger.error(`❌ Échec de la tâche "${name}"`);
    } finally {
      this.isRunning = false;
    }
  }
}
