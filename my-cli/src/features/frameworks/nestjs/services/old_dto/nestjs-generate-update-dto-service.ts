import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";
import { DtoType } from "../../constant/nestjs-constants.constant";
import { nestjsGenerateDto } from "./nestjs-generate-dto.service";

/**
 * Génère un DTO de mise à jour pour une entité.
 */
export function generateUpdateDto(entity: IEntityJson): string {
  return nestjsGenerateDto(entity, DtoType.UPDATE);
}
