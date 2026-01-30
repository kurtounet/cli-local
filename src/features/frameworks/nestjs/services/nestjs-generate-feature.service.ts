import * as fs from "fs";
import * as path from "path";

import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { buildAndsaveFile } from "@utils/file-utils";
import { nestjsRepositoryTemplate } from "../templates/entities/nestjs-repository-template";
import { nestjsEntityTemplate } from "../templates/entities/nestjs-entity-template-copy";
import { nestjsControlleRestfullTemplate } from "../templates/controller/nestjs-restfull-controller-template";
import { nestjsServiceCrudTemplate } from "../templates/service/nestjs-crud-service-template";
import { nestjsSeederEntityTemplate } from "../templates/seeds/nestjs-entity-seed-template";
import { nestjsSeedModuleTemplate } from "../templates/seeds/nestjs-seed-module-template";
import { nestjsSeedTemplate } from "../templates/seeds/nestjs-seed-template";
import { nestjsEntityModuleTemplate } from "../templates/module/nestjs-entity-module-template";
import { nestjsGenerateAllDtos } from "./dto/nestjs-generate-all-dtos.service";
import { logInfo } from "@utils/logger";

export function nestjsGenerateFeature(
  frameworkPath: string,
  entity: IEntityJson,
) {
  logInfo(`Feature ${entity.nameCamelCase}`);
  const folders = [
    "dto",
    "entity",
    "repository",
    "controller",
    "service",
    "fixture",
  ];
  folders.forEach((folder) => {
    let pathFolder = path.join(
      frameworkPath,
      "src",
      "modules",
      entity.nameKebabCase,
      folder,
    );
    if (!fs.existsSync(pathFolder)) {
      logInfo(`📌 Dossier créer : ${pathFolder}`);
      fs.mkdirSync(pathFolder, { recursive: true });
    }
  });

  logInfo(`"Module : ${entity.nameCamelCase}`);
  createEntityNestjs(frameworkPath, entity);
  createDtoNestjs(frameworkPath, entity);
  createModuleEntityNestjs(frameworkPath, entity);
  createControllerNestjs(frameworkPath, entity);
  createServiceNestjs(frameworkPath, entity);
  // createFixtureNestjs(frameworkPath, entity);
}
export function createEntityNestjs(projectPath: string, entity: IEntityJson) {
  const rootPath = path.join(
    projectPath,
    "src",
    "modules",
    entity.nameKebabCase,
    "entity",
  );
  const pathRepository = path.join(
    projectPath,
    "src",
    "modules",
    entity.nameKebabCase,
    "repository",
  );

  buildAndsaveFile(
    rootPath + `/${entity.nameKebabCase}.entity.ts`,
    nestjsEntityTemplate(entity),
  );

  buildAndsaveFile(
    pathRepository + `/${entity.nameKebabCase}.repository.ts`,
    nestjsRepositoryTemplate(entity),
  );
}
export function createDtoNestjs(projectPath: string, entity: IEntityJson) {
  const rootPath = path.join(
    projectPath,
    "src",
    "modules",
    entity.nameKebabCase,
    "dto",
  );
  const dtos = nestjsGenerateAllDtos(entity);

  // buildAndsaveFile(rootPath + `/${entity.nameKebabCase}.dto.ts`, nestjsEntityTemplate(entity));

  buildAndsaveFile(
    rootPath + `/create-${entity.nameKebabCase}-dto.dto.ts`,
    dtos.createDto,
  );

  buildAndsaveFile(
    rootPath + `/update-${entity.nameKebabCase}-dto.dto.ts`,
    dtos.updateDto,
  );

  buildAndsaveFile(
    rootPath + `/response-${entity.nameKebabCase}-dto.dto.ts`,
    dtos.responseDto,
  );
}
export function createControllerNestjs(
  projectPath: string,
  entity: IEntityJson,
) {
  const rootPath = path.join(
    projectPath,
    "src",
    "modules",
    entity.nameKebabCase,
    "controller",
  );

  buildAndsaveFile(
    rootPath + `/${entity.nameKebabCase}.controller.ts`,
    nestjsControlleRestfullTemplate(entity),
  );
}

export function createServiceNestjs(projectPath: string, entity: IEntityJson) {
  const rootPath = path.join(
    projectPath,
    "src",
    "modules",
    entity.nameKebabCase,
    "service",
  );

  buildAndsaveFile(
    rootPath + `/${entity.nameKebabCase}.service.ts`,
    nestjsServiceCrudTemplate(entity),
  );
}
export function createSeederNestjs(
  projectPath: string,
  entities: IEntityJson[],
) {
  const rootPath = path.join(projectPath, "src", "seeds");

  entities.forEach((entity: IEntityJson) => {
    buildAndsaveFile(
      rootPath + `/${entity.nameKebabCase}.seeder.ts`,
      nestjsSeederEntityTemplate(entity),
    );
  });

  buildAndsaveFile(
    rootPath + `/seed.module.ts`,
    nestjsSeedModuleTemplate(entities),
  );

  buildAndsaveFile(rootPath + `/seed.ts`, nestjsSeedTemplate(entities));
}
export function createModuleEntityNestjs(
  projectPath: string,
  entity: IEntityJson,
) {
  const rootPath = path.join(
    projectPath,
    "src",
    "modules",
    entity.nameKebabCase,
  );

  buildAndsaveFile(
    rootPath + `/${entity.nameKebabCase}.module.ts`,
    nestjsEntityModuleTemplate(entity),
  );
}
