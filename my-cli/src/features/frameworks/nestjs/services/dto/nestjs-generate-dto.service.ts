import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";
import { DtoType } from "../../constant/nestjs-constants.constant";
import { nestjsProcessColumnForDto } from "./nestjs-process-column-for-dto.service";
import { nestjsProcessRelationForDto } from "./nestjs-process-relation-for-dto.service";
import { nestjsGenerateDtoFile } from "./nestjs-generate-dto-file.services";
import { DtoProperty } from "../../interfaces/nestjs-dto-property.model";
import { nestjsBuildDtoEntityImports } from "../nestjs-build-imports-dto-entity.service";

export function nestjsGenerateDto(
  entity: IEntityJson,
  dtoType: DtoType,
): string {
  const validationImports = new Set<string>();
  const transformImports = new Set<string>();
  const responseDtoImports = new Set<string>();
  const dtoProperties: DtoProperty[] = [];

  // Traitement des colonnes selon le type de DTO
  if (entity.columns) {
    for (const column of entity.columns) {
      const property = nestjsProcessColumnForDto(
        column,
        dtoType,
        validationImports,
        transformImports,
      );
      if (property) {
        dtoProperties.push(property);
      }
    }
  }

  // Traitement des relations (principalement pour les DTOs de réponse)
  if (dtoType === DtoType.RESPONSE && entity.relationships) {
    for (const relation of entity.relationships) {
      const property = nestjsProcessRelationForDto(
        relation,
        entity.tableName,
        validationImports,
        transformImports,
        responseDtoImports,
      );
      if (property) {
        dtoProperties.push(property);
      }
    }
  }
  // Construction des instructions d'import

  const imports = [
    ...nestjsBuildDtoEntityImports(validationImports, transformImports),
  ];

  // Génération du fichier DTO
  return nestjsGenerateDtoFile(
    entity,
    dtoProperties,
    imports,
    dtoType,
    responseDtoImports,
  );
}
