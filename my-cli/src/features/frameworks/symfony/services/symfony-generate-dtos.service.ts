import {
  IColumnJson,
  IEntityJson,
} from "@features/parsersMdj/interfaces/entity-json.model";
import fs from "fs";
import path from "path";

import { buildAndsaveFile } from "@utils/file-utils";

import { snakeToCamel } from "@utils/convert";

import { symfonyCreateDtoTemplate } from "../templates/dto/symfony-create-dto-template";
import { symfonyUpdateDtoTemplate } from "../templates/dto/symfony-update-dto-template";
import { symfonyResponseDtoTemplate } from "../templates/dto/symfony-response-dto-template";
import { symfonyGenerateAccessorsService } from "./symfony-generate-accessors.service";
import { INDENT, NEWLINE } from "../constant/symfony-constants.constant";
import { symfonyGetPropertyType } from "../utils/mapping";

export function symfonyGenerateDtoService(
  frameworkPath: string,
  entity: IEntityJson,
) {
  const pathDto = path.join(frameworkPath, "src", "Dto");
  if (!fs.existsSync(pathDto)) {
    fs.mkdirSync(pathDto);
  }
  const pathDtoEntity = path.join(
    frameworkPath,
    "src",
    "Dto",
    entity.namePascalCase,
  );
  if (!fs.existsSync(pathDtoEntity)) {
    fs.mkdirSync(pathDtoEntity);
  }
  const n = "\n";
  let properties: string = "";
  let accessors: string = "";
  let content: string = "";
  entity.columns?.map((column: IColumnJson) => {
    if (column.name !== "id") {
      properties +=
        getProperty(entity.nameCamelCase, column.name, column.typeSql) +
        NEWLINE +
        NEWLINE;
      accessors += symfonyGenerateAccessorsService(column.name, column.typeSql);
    }
  });
  buildAndsaveFile(
    pathDtoEntity + `/${entity.namePascalCase}CreateDto.php`,
    symfonyCreateDtoTemplate(entity, properties, accessors),
  );

  buildAndsaveFile(
    pathDtoEntity + `/${entity.namePascalCase}UpdateDto.php`,
    symfonyUpdateDtoTemplate(entity, properties, accessors),
  );

  buildAndsaveFile(
    pathDtoEntity + `/${entity.namePascalCase}ResponseDto.php`,
    symfonyResponseDtoTemplate(entity, properties, accessors),
  );

  // gitCommit(frameworkPath,`add dtos ${entity.namePascalCase}`);
}

export function getProperty(
  entityName: string,
  propName: string,
  type: string,
) {
  console.log(entityName, propName, type);
  const typeProperty = symfonyGetPropertyType(type);
  return `${INDENT}${INDENT}#[Groups(['${entityName}:read', '${entityName}:write'])]
    private ?${typeProperty} $${snakeToCamel(propName)} = null;
    `;
}
