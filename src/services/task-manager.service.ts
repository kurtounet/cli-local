import { ITaskManagerService } from "@/types/task-manager-service.interface.js";

import { BaseService } from "./base-service.service.js";

export class TaskManagerService
  extends BaseService
  implements ITaskManagerService {}
