import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";
import { nestjsGenerateDto } from "./nestjs-generate-dto.service";
import { DtoType } from "../../constant/nestjs-constants.constant";

/**
 * Génère un DTO de réponse pour une entité.
 */
export function nestjsgenerateResponseDto(entity: IEntityJson): string {
  return nestjsGenerateDto(entity, DtoType.RESPONSE);
}
