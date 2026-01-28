import { BaseService } from "./base-service.service.js";
import { IConfigProjectService } from "@/types/services/config-project-service.interface.js";

export class ConfigProjectService extends BaseService implements IConfigProjectService {
  readonly serviceName = "ConfigProjectService";
}
