import { IEntityJson } from "@parsersMdj/models/entity-json.model";

import { DtoType } from "../../constant/nestjs-constants.constant";
import { nestjsGenerateDto } from "./nestjs-generate-dto.service";
/**
 * Génère un DTO de création pour une entité.
 * @param entity
 */
export function nestjsGenerateCreateDto(entity: IEntityJson): string {
  return nestjsGenerateDto(entity, DtoType.CREATE);
}
