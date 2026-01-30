import {
  IColumnJson,
  IEntityJson,
  IRelation,
  IRelationshipJson,
} from "@features/parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";
import { toIriListTemplate } from "./mapper/to-iri-list.template";
import { resolveIriTemplate } from "./mapper/resolve-iri.template";
import { NEWLINE } from "../../constant/symfony-constants.constant";
import { snakeToCamel, snakeToPascal } from "@utils/convert";
/*
    Entity to DTO 
 */
export function scalarEntityToDtoTemplate(entity: IEntityJson) {
  const properties: string[] = [];
  entity.columns?.forEach((col: IColumnJson) => {
    if (!col.foreignKey) {
      properties.push(
        `$dto->${snakeToCamel(col.name)} = $entity->get${snakeToPascal(col.name)}();`,
      );
    }
  });
  return properties.join(NEWLINE);
}
export function toOneEntityToDtoTemplate(
  entity: IEntityJson,
  resourceClass = "",
) {
  const properties: string[] = [];
  entity.relationships?.forEach((relation: IRelation) => {
    if (
      relation.relationType === "OneToOne" ||
      relation.relationType === "ManyToOne"
    ) {
      let prop = snakeToCamel(relation.target);
      properties.push(
        `$dto->${snakeToCamel(relation.target)} = $entity->get${snakeToPascal(relation.target)}()
        ? ($this->iriFromResource)(${snakeToPascal(relation.target)}${resourceClass}::class, $entity->get${snakeToPascal(relation.target)}()->getId())
            : null;`,
      );
    }
  });
  return properties.join(NEWLINE);
}

export function toManyEntityToDtoTemplate(
  entity: IEntityJson,
  resourceClass = "",
) {
  const properties = entity.columns
    ?.map(
      (col: IColumnJson) =>
        `$dto->${snakeToCamel(col.name)} = $this->toIriList($entity->get${snakeToPascal(col.name)}(), ${snakeToPascal(col.name)}${resourceClass}::class);`,
    )
    .join("\n");
  return properties;
}
/*
    DTO to Entity
 */
export function scalarDtoToEntityTemplate(entity: IEntityJson) {
  const properties = entity.columns
    ?.map(
      (col: IColumnJson) =>
        `$entity->set${snakeToCamel(col.name)}($dto->${snakeToCamel(col.name)});`,
    )
    .join("\n");
  return properties;
}
export function toOneDtoToEntityTemplate(
  entity: IEntityJson,
  resourceClass = "",
) {
  const properties = entity.columns
    ?.map(
      (col: IColumnJson) =>
        `$entity->set${snakeToCamel(col.name)}($this->resolveIri($data->${snakeToCamel(col.name)}, ${snakeToPascal(col.name)}${resourceClass}::class, '${snakeToCamel(col.name)}', required: true));`,
    )
    .join("\n");
  return properties;
}
export function toManyDtoToEntityTemplate(
  entity: IEntityJson,
  resourceClass = "",
) {
  const properties = entity.columns
    ?.map(
      (col: IColumnJson) =>
        `$entity->set${snakeToCamel(col.name)}($this->resolveIri($data->${snakeToCamel(col.name)}, ${snakeToPascal(col.name)}${resourceClass}::class, '${snakeToCamel(col.name)}', required: true));`,
    )
    .join("\n");
  return properties;
}
/*
    Full Template
 */
export function entityToItemDtoTemplate(entity: IEntityJson) {
  const scalar = scalarEntityToDtoTemplate(entity);
  const toOne = toOneEntityToDtoTemplate(entity);
  const toMany = ""; // toManyEntityToDtoTemplate(entity);
  return `     
    public function entityToItemDto(${entity.namePascalCase} $entity): ${entity.namePascalCase}ItemDto
    {
        $dto = new ${entity.namePascalCase}ItemDto();

        ${scalar}
        ${toOne}
        ${toMany}

         
        return $dto;
    }`;
}
export function entityToCollectionDtoTemplate(entity: IEntityJson) {
  return `     
    public function entityToCollectionDto(${entity.namePascalCase} $entity): ${entity.namePascalCase}CollectionItemDto
    {
        $dto = new ${entity.namePascalCase}CollectionItemDto();
 
        return $dto;
    }`;
}
export function createDtoToEntityTemplate(entity: IEntityJson) {
  return `
    public function createDtoToEntity(${entity.namePascalCase}CreateDto $dto): ${entity.namePascalCase}
    {
        $entity = new ${entity.namePascalCase}();       

        return $entity;
    }`;
}
export function mapEntityToCreateDtoTemplate(entity: IEntityJson) {
  return `
    public function mapEntityToCreateDto(${entity.namePascalCase} $entity): ${entity.namePascalCase}CreateDto
    {
        $dto = new ${entity.namePascalCase}CreateDto();        
        return $dto;
    }`;
}
export function updateDtoToEntityTemplate(entity: IEntityJson) {
  return `
    public function updateDtoToEntity(${entity.namePascalCase} $entity, ${entity.namePascalCase}UpdateDto $data): ${entity.namePascalCase}
    {     

        return $entity;
    }`;
}
export function commonFieldsEntityToDtoTemplate(entity: IEntityJson) {
  return `
    private function commonFieldsEntityToDto(${entity.namePascalCase} $entity, object $dto): void
    {
        
    }`;
}

export function apiPlatformEntityMapperTemplate(entity: IEntityJson) {
  return `<?php

namespace App\\ApiResource\\Mappers;

use App\\ApiResource\\Services\\IriFromResource;
use ApiPlatform\\Metadata\\IriConverterInterface;
use App\\ApiResource\\Dtos\\${entity.namePascalCase}\\${entity.namePascalCase}CollectionItemDto;
use App\\ApiResource\\Dtos\\${entity.namePascalCase}\\${entity.namePascalCase}CreateDto;
use App\\ApiResource\\Dtos\\${entity.namePascalCase}\\${entity.namePascalCase}ItemDto;
use App\\ApiResource\\Dtos\\${entity.namePascalCase}\\${entity.namePascalCase}UpdateDto; 
use App\\ApiResource\\Resources\\${entity.namePascalCase}\\${entity.namePascalCase}Resource;
 
 
use App\\Entity\\${entity.namePascalCase}; 
use Doctrine\\ORM\\EntityManagerInterface;
use Symfony\\Bundle\\SecurityBundle\\Security;
use Symfony\\Component\\HttpKernel\\Exception\\BadRequestHttpException;

class ${entity.namePascalCase}Mapper
{
    public function __construct(
        // private Security $security,
        private EntityManagerInterface $em,
        private IriFromResource $iriFromResource,
        private IriConverterInterface $iriConverter,
    ) {}

    ${entityToItemDtoTemplate(entity)}

    ${entityToCollectionDtoTemplate(entity)}

    ${createDtoToEntityTemplate(entity)}

    ${mapEntityToCreateDtoTemplate(entity)}

    ${updateDtoToEntityTemplate(entity)}

    ${commonFieldsEntityToDtoTemplate(entity)}

    ${toIriListTemplate(entity)}

    ${resolveIriTemplate(entity)}
    
`;
}
