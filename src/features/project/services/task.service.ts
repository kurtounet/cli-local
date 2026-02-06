import { IAppContext } from "@/types/context.interface.js";

import { ITaskService } from "../interfaces/task-service.interface.js";

export class TaskService implements ITaskService {
  readonly serviceName = "TaskService";

  private taskQueue: { name: string; action: () => Promise<unknown> }[] = [];
  private isRunning = false;

  constructor(private cli: IAppContext) {}

  public init(): Promise<void> {
    return Promise.resolve();
  }

  public async runTask<T = void>(name: string, action: () => Promise<T>): Promise<T | undefined> {
    if (this.isRunning) {
      this.cli.logger.warn(`⏳ Tâche "${name}" ajoutée à la file d'attente...`);
      this.taskQueue.push({ name, action: action as () => Promise<unknown> });
      return undefined;
    }

    return await this.executeTask(name, action);
  }

  private async executeTask<T>(name: string, action: () => Promise<T>): Promise<T> {
    this.isRunning = true;
    this.cli.logger.info(`🚀 Exécution de la tâche : ${name}`);

    try {
      const result = await action();
      this.cli.logger.success(`✨ Tâche "${name}" terminée avec succès.`);
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      this.cli.logger.error(`❌ Échec de la tâche "${name}": ${errorMessage}`);
      throw error;
    } finally {
      this.isRunning = false;
      await this.processQueue();
    }
  }

  private async processQueue(): Promise<void> {
    if (this.taskQueue.length > 0 && !this.isRunning) {
      const nextTask = this.taskQueue.shift();
      if (nextTask) {
        await this.executeTask(nextTask.name, nextTask.action);
      }
    }
  }
}
