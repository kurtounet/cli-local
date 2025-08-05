import {
  IColumnJson,
  IEntityJson,
  IRelation,
} from "@features/parsersMdj/interfaces/entity-json.model";
import { nestjsGetColumnsDecoratorsEntity } from "../../services/entity/nestjs-get-columns-decorators-entity-service";
import { EntityProperty } from "../../interfaces/nestjs-entity-property.model";
import { TYPEORM_DECORATORS } from "../../constant/nestjs-constants.constant";
import { nestjsGetRelationshipsEntity } from "../../services/entity/nestjs-get-relationships-entity-service";
import { buildImportStatements } from "../../services/entity/nestjs-build-import-statements-service";
import { nestjsGenerateEntityFile } from "../../services/entity/nestjs-generate-entity-file-service";

/**
 * Génère le contenu complet du fichier d'entité NestJS sous forme de chaîne.
 * @param entity - La représentation JSON de l'entité.
 * @returns Le contenu complet du fichier d'entité.
 */
export function nestjsEntityTemplate(entity: IEntityJson): string {
  const typeormImports = new Set<string>([
    TYPEORM_DECORATORS.ENTITY,
    TYPEORM_DECORATORS.PRIMARY_GENERATED_COLUMN,
  ]);
  const entityImports = new Set<string>();
  const entityProperties: EntityProperty[] = [];

  // Traitement des colonnes
  if (entity.columns) {
    for (const column of entity.columns) {
      const { decorators, typeormImports: colImports } =
        nestjsGetColumnsDecoratorsEntity(column);

      colImports.forEach((imp) => typeormImports.add(imp));

      const property: EntityProperty = {
        name: column.name,
        nullable: column.nullable ? "?" : "!",
        tsType: column.typeTypeScript,
        decorators,
      };

      entityProperties.push(property);
    }
  }

  // Traitement des relations
  const {
    relations: relationStrings,
    entityImports: relEntityImports,
    typeormImports: relTypeormImports,
  } = nestjsGetRelationshipsEntity(entity);

  relEntityImports.forEach((imp) => entityImports.add(imp));
  relTypeormImports.forEach((imp) => {
    if (imp !== "Unknown Relation") {
      typeormImports.add(imp);
    }
  });

  // Construction des instructions d'import
  const allImports = buildImportStatements(typeormImports, entityImports);

  return nestjsGenerateEntityFile(
    entity,
    entityProperties,
    relationStrings,
    allImports,
  );
}
