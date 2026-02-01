import { sqlToTypeScript } from "@utils/mapping";
import type { IColumnJson } from "../models/entity-json.model";
import type { IERDColumn, IERDEntity, IERDProject } from "../models/mdj.model";
import { logInfo } from "@utils/logger";
import { getEntities } from "./get-entities.service";

export function mdjUpdateHandleColumsService(fileContent: string) {
  const project: IERDProject = JSON.parse(fileContent);
  // const entities = getEntities(project);
  return "";
}
