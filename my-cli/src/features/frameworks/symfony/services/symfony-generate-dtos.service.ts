import { IColumnJson, IEntityJson } from "@parsersMdj/models/entity-json.model";
import fs from "fs";
import path from "path";

import { buildAndsaveFile, writeFile } from "@utils/file-utils";

import { snakeToCamel } from "@utils/convert";

import { symfonyCreateDtoTemplate } from "../templates/dto/symfony-create-dto-template";
import { symfonyUpdateDtoTemplate } from "../templates/dto/symfony-update-dto-template";
import { symfonyResponseDtoTemplate } from "../templates/dto/symfony-response-dto-template";
import { symfonyGenerateAccessorsService } from "./symfony-generate-accessors.service";
import {
  getContraintTypeORM,
  INDENT,
  NEWLINE,
} from "../constant/symfony-constants.constant";
import { symfonyGetPropertyType } from "../utils/mapping";
import { logDebug, logInfo } from "@utils/logger";
import { get } from "http";

export function symfonyGenerateDtoService(
  frameworkPath: string,
  entity: IEntityJson,
) {
  // const pathDto = path.join(frameworkPath, "src", "Dto");
  // if (!fs.existsSync(pathDto)) {
  //   fs.mkdirSync(pathDto);
  // }
  const pathDtoEntity = path.join(
    frameworkPath,
    "src",
    "Dto",
    entity.namePascalCase,
  );
  // if (!fs.existsSync(pathDtoEntity)) {
  //   fs.mkdirSync(pathDtoEntity);
  // }
  const n = "\n";
  let properties: string = "";
  let accessors: string = "";
  let content: string = "";
  entity.columns?.map((column: IColumnJson) => {
    if (column.name !== "id") {
      properties +=
        getProperty(entity.nameCamelCase, column) + NEWLINE + NEWLINE;
      accessors += symfonyGenerateAccessorsService(column.name, column.typeSql);
    }
  });
  writeFile(
    pathDtoEntity + `/${entity.namePascalCase}CreateDto.php`,
    // logInfo(`${properties}`),
    symfonyCreateDtoTemplate(entity, properties, accessors),
    `Création du DTO ${entity.namePascalCase}CreateDto.php`,
  );

  writeFile(
    pathDtoEntity + `/${entity.namePascalCase}UpdateDto.php`,
    symfonyUpdateDtoTemplate(entity, properties, accessors),
    `Création du DTO ${entity.namePascalCase}UpdateDto.php`,
  );

  writeFile(
    pathDtoEntity + `/${entity.namePascalCase}ResponseDto.php`,
    symfonyResponseDtoTemplate(entity, properties, accessors),
    `Création du DTO ${entity.namePascalCase}ResponseDto.php`,
  );

  // gitCommit(frameworkPath,`add dtos ${entity.namePascalCase}`);
}

export function getProperty(
  entityName: string,
  column: IColumnJson,
  // propName: string,
  // type: string,
) {
  // logInfo(entityName, propName, type);
  const typeProperty = symfonyGetPropertyType(column.typeSql);
  return `${INDENT}${INDENT}#[Groups(['${entityName}:read', '${entityName}:write'])]
    ${INDENT}${INDENT}${getContraintsPropertyType(column)}
    private ?${typeProperty} $${snakeToCamel(column.name)} = null;
    `;
}
export function getContraintsPropertyType(column: IColumnJson) {
  let assets = "";
  if (column.nullable === false) {
    assets += `${INDENT}${INDENT}${getContraintTypeORM("notblank")?.implantation}\\n`;
  }
  if (column.unique === true) {
    assets += `${INDENT}${INDENT}#[Assert\\Unique]\\n`;
  }
  if (column.length) {
    assets += `${INDENT}${INDENT}#[Assert\\Length(min=${column.minLength},minMessage="minErrorMessage", max=${column.maxlength}, maxMessage="MaxErrorMessage")]\\n`;
  }
  return "";
}
