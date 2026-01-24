import { BaseService } from "./base-service.service.js";
import { IArchitectureService } from "@/types/architecture-service.interface.js";

export class ArchitectureService
  extends BaseService
  implements IArchitectureService {}
