import {
  IColumnJson,
  IEntityJson,
  IRelation,
} from "@parsersMdj/models/entity-json.model";
import { snakeToCamel } from "@utils/convert";
import { buildAndsaveFile } from "@utils/file-utils";
import path from "path";

import { INDENT } from "../constant/symfony-constants.constant";
import { symfonyEntityTemplate } from "../templates/symfony-entity.template";
import { symfonyEntityRepositoryTemplate } from "../templates/symfony-repository.template";
import { symfonyGetPropertyType } from "../utils/mapping";
import { symfonyCreateAttributeORM } from "./commun/symfony-create-attribute-orm.service";
import { symfonyGenerateAccessorsScalarService } from "./symfony-generate-accessors-scalar.service";
import { symfonyGenerateRelationShipsService } from "./symfony-generate-relationships.service";

const { execSync } = require("child_process");
const { spawnSync } = require("child_process");

interface Iproperty {
  attributeValidation: string;
  attributeOrm: string;
  name: string;
  type: string;
}

/**
 *
 * @param frameworkPath
 * @param entity
 */
export function symfonyGenerateEntityService(
  frameworkPath: string,
  entity: IEntityJson,
) {
  const pathEntity = path.join(frameworkPath, "src", "Entity");
  const pathRepository = path.join(frameworkPath, "src", "Repository");
  const n = "\n";
  // entities.map((entity: IEntityJson) => {

  let properties = "";
  let accessors = "";
  const content = "";
  let relations = "";

  entity.columns?.map((column: IColumnJson) => {
    if (column.name !== "id") {
      properties +=
        symfonyCreateAttributeORM(column.name, column.typeSql, column.length) +
        n +
        getProperty(entity.nameCamelCase, column.name, column.typeSql) +
        n +
        n;

      accessors += symfonyGenerateAccessorsScalarService(
        column.name,
        column.typeSql,
      );
    }
  });
  entity.relationships?.map((relationships: IRelation) => {
    const relation = symfonyGenerateRelationShipsService(relationships);
    relations += relation;
  });

  buildAndsaveFile(
    pathEntity + `/${entity.namePascalCase}.php`,
    symfonyEntityTemplate(
      entity.namePascalCase,
      properties,
      accessors,
      relations,
    ),
  );

  buildAndsaveFile(
    pathRepository + `/${entity.namePascalCase}Repository.php`,
    symfonyEntityRepositoryTemplate(entity),
  );

  // gitCommit(frameworkPath,`add entity ${entity.namePascalCase}`);
  // })
}

/**
 *
 * @param entityName
 * @param propName
 * @param type
 */
export function getProperty(
  entityName: string,
  propName: string,
  type: string,
) {
  const typeProperty = symfonyGetPropertyType(type);
  return `${INDENT}${INDENT}private ?${typeProperty} $${snakeToCamel(propName)} = null;`;
}
