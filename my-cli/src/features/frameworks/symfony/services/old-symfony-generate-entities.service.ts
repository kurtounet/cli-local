import path from "path";
import { symfonyGenerateAccessorsService } from "./symfony-generate-accessors.service";
import {
  IColumnJson,
  IEntityJson,
  IRelation,
} from "@parsersMdj/models/entity-json.model";
import { buildAndsaveFile } from "@utils/file-utils";

import { snakeToCamel } from "@utils/convert";
import { symfonyEntityRepositoryTemplate } from "../templates/symfony-repository.template";

import { symfonyCreateAttributeORM } from "./commun/symfony-create-attribute-orm.service";
import { symfonyGetPropertyType } from "../utils/mapping";
import { symfonyEntityTemplate } from "../templates/symfony-entity.template";
import { INDENT } from "../constant/symfony-constants.constant";
import { symfonyGenerateRelationShipsService } from "./symfony-generate-relationships.service";

const { execSync } = require("child_process");
const { spawnSync } = require("child_process");

interface Iproperty {
  attributeValidation: string;
  attributeOrm: string;
  name: string;
  type: string;
}

export function symfonyGenerateEntityService(
  frameworkPath: string,
  entity: IEntityJson,
) {
  const pathEntity = path.join(frameworkPath, "src", "Entity");
  const pathRepository = path.join(frameworkPath, "src", "Repository");
  const n = "\n";
  // entities.map((entity: IEntityJson) => {

  let properties: string = "";
  let accessors: string = "";
  let content: string = "";
  let relations: string = "";

  entity.columns?.map((column: IColumnJson) => {
    if (column.name !== "id") {
      properties +=
        symfonyCreateAttributeORM(column.name, column.typeSql, column.length) +
        n +
        getProperty(entity.nameCamelCase, column.name, column.typeSql) +
        n +
        n;

      accessors += symfonyGenerateAccessorsService(column.name, column.typeSql);
    }
  });
  entity.relationships?.map((relationships: IRelation) => {
    let relation = symfonyGenerateRelationShipsService(relationships);
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

export function getProperty(
  entityName: string,
  propName: string,
  type: string,
) {
  const typeProperty = symfonyGetPropertyType(type);
  return `${INDENT}${INDENT}private ?${typeProperty} $${snakeToCamel(propName)} = null;`;
}
