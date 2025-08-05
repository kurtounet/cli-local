import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";
import { nestjsGenerateDto } from "./nestjs-generate-dto.service";
import { DtoType } from "../../constant/nestjs-constants.constant";
/**
 * Génère un DTO de création pour une entité.
 */
export function nestjsGenerateCreateDto(entity: IEntityJson): string {
  return nestjsGenerateDto(entity, DtoType.CREATE);
}
