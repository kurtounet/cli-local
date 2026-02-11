import { IArchitectureService } from "@/types/services/architecture-service.interface.js";

import { BaseService } from "./base-service.service.js";

export class ArchitectureService
  extends BaseService
  implements IArchitectureService
{
  readonly serviceName = "ArchitectureService";
}
