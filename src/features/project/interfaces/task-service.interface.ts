export interface TaskService {
  id: number;
  title: string;
  description: string;
}

export interface ITaskService {
  serviceName: string;
  init(): Promise<void>;
  runTask(name: string, action: () => Promise<void>): Promise<void>;
}
