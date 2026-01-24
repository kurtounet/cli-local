import { BaseService } from "./base-service.service.js";
import { ITaskManagerService } from "@/types/task-manager-service.interface.js";

export class TaskManagerService
  extends BaseService
  implements ITaskManagerService {}
