import {
  IColumnJson,
  IEntityJson,
  IRelation,
} from "@features/parsersMdj/models/entity-json.model";
import { snakeToCamel, snakeToPascal } from "@utils/convert";

import { symfonyGenerateAccessorsRelationService } from "../../services/symfony-generate-accessors-relation.service";
import { symfonyGenerateAccessorsScalarService } from "../../services/symfony-generate-accessors-scalar.service";
import { symfonyGenerateRelationShipsService } from "../../services/symfony-generate-relationships.service";
import {
  symfonyGetAttributeTypeORM,
  symfonyGetPropertyType,
} from "../../utils/mapping";

/**
 *
 * @param entity
 */
function generatePropertiesContent(entity: IEntityJson): string[] {
  const propertiesScalar: string[] = [];
  const accessorsScalar: string[] = [];
  const propertiesRelation: string[] = [];
  const accessorsRelation: string[] = [];

  const excludeColumns = ["id", "created_at", "updated_at"];
  entity.columns?.forEach((col: IColumnJson) => {
    if (!excludeColumns.includes(col.name) && col.foreignKey === false) {
      const nullable: string = col.nullable ? "true" : "false";
      const property = `#[ORM\\Column(type: '${symfonyGetAttributeTypeORM(col.typeSql)}', nullable: ${nullable})]
         public ?${symfonyGetPropertyType(col.typeSql)} $${snakeToCamel(col.name)} = null;
`;
      const propertyAccessors = symfonyGenerateAccessorsScalarService(
        snakeToCamel(col.name),
        symfonyGetPropertyType(col.typeSql),
      );
      propertiesScalar.push(property);
      accessorsScalar.push(propertyAccessors);
    }
  });
  entity.relationships?.forEach((relation: IRelation) => {
    propertiesRelation.push(symfonyGenerateRelationShipsService(relation));
    const propertyAccessors = symfonyGenerateAccessorsRelationService(relation);
    accessorsRelation.push(propertyAccessors);
    /*
    if (relation.name !== "id") {
      let nullable: string = col.nullable ? "true" : "false";
      let property = `#[ORM\\Column(type: '${symfonyGetAttributeTypeORM(col.typeSql)}', nullable: ${nullable})]
         public ?${symfonyGetPropertyType(col.typeSql)} $${snakeToCamel(col.name)} = null;
`;
      let propertyAccessors = symfonyGenerateAccessorsService(
        snakeToCamel(col.name),
        symfonyGetPropertyType(col.typeSql),
      );

      let propertyAccessors = symfonyGenerateRelationsService(
        snakeToCamel(col.name),
        symfonyGetPropertyType(col.typeSql),
      );

      relations.push("");
    }
      */
  });
  return [
    propertiesScalar.join("\n"),
    accessorsScalar.join("\n"),
    propertiesRelation.join("\n"),
    accessorsRelation.join("\n"),
  ];
}

/**
 *
 * @param entity
 */
export function apiPlatformEntityTemplate(entity: IEntityJson) {
  const [
    propertiesScalar,
    accessorsScalar,
    propertiesRelation,
    accessorsRelation,
  ] = generatePropertiesContent(entity);
  return `<?php

namespace App\\Entity;


use App\\Repository\\${entity.namePascalCase}Repository;
use Doctrine\\DBAL\\Types\\Types;
use Doctrine\\ORM\\Mapping as ORM;
use Doctrine\\Common\\Collections\\Collection;

// use App\\Traits\\TimestampTrait;

// #[ORM\\HasLifecycleCallbacks]
#[ORM\\Entity(repositoryClass: ${entity.namePascalCase}Repository::class)]
class ${entity.namePascalCase}
{
    // use TimestampTrait;

    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    ${propertiesScalar}   
    ${propertiesRelation}

    public function getId(): ?int
    {
        return $this->id;
    }
    
    ${accessorsScalar}
    ${accessorsRelation}
}
`;
}
