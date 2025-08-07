import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { nestjsGenerateDto } from "./nestjs-generate-dto.service";
import { DtoGeneratorResult } from "../../models/nestjs-dto-generator-result.model";
import { DtoType } from "../../constant/nestjs-constants.constant";

/**
 * Génère tous les DTOs (Create, Update, Response) pour une entité.
 * @param entity - La représentation JSON de l'entité.
 * @returns Un objet contenant les trois types de DTOs.
 */
export function nestjsGenerateAllDtos(entity: IEntityJson): DtoGeneratorResult {
  return {
    createDto: nestjsGenerateDto(entity, DtoType.CREATE),
    updateDto: nestjsGenerateDto(entity, DtoType.UPDATE),
    responseDto: nestjsGenerateDto(entity, DtoType.RESPONSE),
  };
}
