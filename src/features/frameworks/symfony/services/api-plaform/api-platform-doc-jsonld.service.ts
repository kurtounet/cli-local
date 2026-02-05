import { EMOJI } from "@constants/messages";
import { base } from "@faker-js/faker/.";
import { FILE_CLI_LOCAL } from "@services/cli-conf/services/cli-local-directory.service";
import { pascalToKebab } from "@utils/convert";
import { readFile, writeFile } from "@utils/file-utils";
import { logError, logSuccess } from "@utils/logger";
import { write } from "fs";
import path from "path";

import {
  TApiDocumentation,
  TSupportedClass,
  TSupportedProperty,
} from "../../types/api-platform-doc-json-ld.type";
import { resolveTypeScriptType } from "../../utils/mapping";
import { apiPlatformReadDocJsonldService } from "./api-plaform-read-doc-jsonld.service";
import { apiPlatformSaveDocJsonldService } from "./api-plaform-save-doc-jsonld.service";

/**
 *
 * @param processPath
 */
export function apiPlatformDocJsonldService(processPath: string) {
  const basePath = `${processPath}/${FILE_CLI_LOCAL.DIRECTORY_CLI_LOCAL}/api`;
  const docJsonLd = `${basePath}/documentation-api.json`;
  const docJsonLdError = `${basePath}/documentation-api-error.json`;
  const docJsonLdConstraintViolation = `${basePath}/documentation-api-constraint-violation.json`;
  const docJsonLdConstraintViolationList = `${basePath}/documentation-api-constraint-violation-list.json`;
  const docJsonLdEntrypoint = `${basePath}/documentation-api-entrypoint.json`;
  const docJsonLdResource = `${basePath}/documentation-api-resource.json`;
  /*
  const statusSaveFile: boolean = apiPlatformSaveDocJsonldService(pathDocJsonLd, doc);
  if (statusSaveFile) {
    logSuccess(`${EMOJI.file} Ecriture du fichier JSON-LD réussie`);
  } else {
    logError(`${EMOJI.file} Ecriture du fichier JSON-LD réussie`);
  }*/
  const doc: TApiDocumentation | null =
    apiPlatformReadDocJsonldService(docJsonLd);
  if (!doc) {
    logError(`${EMOJI.file} Lecture du fichier JSON-LD échouée`);
    return;
  }
  const context = doc["@context"];
  const id = doc["@id"];
  const type = doc["@type"];
  const title = doc.title;
  const entrypoint = doc.entrypoint;
  const supportedClass: TSupportedClass[] = doc.supportedClass;
  const supportedClassError: TSupportedClass[] = [];
  const supportedClassConstraintViolation: TSupportedClass[] = [];
  const supportedClassConstraintViolationList: TSupportedClass[] = [];
  const supportedClassEntrypoint: TSupportedClass[] = [];
  const supportedClassResource: TSupportedClass[] = [];
  if (supportedClass && supportedClass.length > 0) {
    supportedClass.forEach((classe: TSupportedClass) => {
      if (classe["@id"] === "#Error") {
        supportedClassError.push(classe);
      } else if (classe["@id"] === "#ConstraintViolation") {
        supportedClassConstraintViolation.push(classe);
      } else if (classe["@id"] === "#ConstraintViolationList") {
        supportedClassConstraintViolationList.push(classe);
      } else if (classe["@id"] === "#Entrypoint") {
        supportedClassEntrypoint.push(classe);
      } else {
        supportedClassResource.push(classe);
      }
    });
  }

  const filesToGenerate = {
    path: basePath,
    errorPath: docJsonLdError,
    errorData: supportedClassError,
    constraintViolationPath: docJsonLdConstraintViolation,
    constraintViolationData: supportedClassConstraintViolation,
    constraintViolationListPath: docJsonLdConstraintViolationList,
    constraintViolationListData: supportedClassConstraintViolationList,
    entrypointPath: docJsonLdEntrypoint,
    entrypointData: supportedClassEntrypoint,
    resourcePath: docJsonLdResource,
    resourceData: supportedClassResource,
  };
  apiPlatformGenerateFilesService(filesToGenerate);
  apiPlatformGenerateInterfaceTypeScriptFromDocJsonldService(
    supportedClassResource,
    basePath,
  );
  console.log("jsonld:", doc);
}

/**
 *
 * @param resources
 * @param path
 */
export function apiPlatformGenerateInterfaceTypeScriptFromDocJsonldService(
  resources: TSupportedClass[],
  path: string,
) {
  resources.forEach((resource: TSupportedClass) => {
    const propertyDefinitions = resource.supportedProperty.map(
      (prop: TSupportedProperty) => {
        const type = resolveTypeScriptType(prop.property.range);
        // Utilisation du ";" pour TS et indentation de 2 espaces
        return `  ${prop.title}: ${type};`;
      },
    );
    const fileName = pascalToKebab(resource.title);

    const jsonData = {
      resource: `${resource.title}`,
      properties: resource.supportedProperty.map((p) => ({
        title: p.title,
        type: resolveTypeScriptType(p.property.range),
        description: p.description || "",
        required: p.required,
        readable: p.readable,
        writeable: p.writeable,
        property: p.property,
      })),
    };

    writeFile(
      `${path}/json/${fileName}.json`,
      JSON.stringify(jsonData, null, 2),
    );

    const interfaceContent = [
      `export interface I${resource.title} {`,
      ...propertyDefinitions,
      `}\n`,
    ].join("\n");

    writeFile(`${path}/models/${fileName}.model.ts`, interfaceContent);
  });
}
/**
 *
 * @param resource
 */
export function apiPlatformGenerateTypeTypeScriptFromDocJsonldService(
  resource: TSupportedClass[],
) {}
/**
 *
 * @param resource
 */
export function apiPlatformGenerateSchemaZodFromDocJsonldService(
  resource: TSupportedClass[],
) {}
/**
 *
 * @param resource
 */
export function apiPlatformGenerateFormFromDocJsonldService(
  resource: TSupportedClass[],
) {}

/**
 *
 * @param files
 */
function apiPlatformGenerateFilesService(files: any) {
  writeFile(files.errorPath, JSON.stringify(files.errorData, null, 2));
  writeFile(
    files.constraintViolationPath,
    JSON.stringify(files.constraintViolationData, null, 2),
  );
  writeFile(
    files.constraintViolationListPath,
    JSON.stringify(files.constraintViolationListData, null, 2),
  );
  writeFile(
    files.entrypointPath,
    JSON.stringify(files.entrypointData, null, 2),
  );
  writeFile(files.resourcePath, JSON.stringify(files.resourceData, null, 2));
  files.resourceData.forEach((classe: TSupportedClass) => {
    writeFile(
      `${files.path}/resources/${pascalToKebab(classe.title)}.json`,
      JSON.stringify(classe, null, 2),
    );
  });
}

/**
 *
 * @param resource
 */
export function apiPlatformFormatResourceFromDocJsonldService(
  resource: TSupportedClass,
) {
  const properties: Record<string, any> = {};
  resource.supportedProperty.forEach((prop: TSupportedProperty) => {
    properties[prop.title] = resolveTypeScriptType(prop.property.range);
    // const propertyName = getPropertyName(prop.property);
    // console.log("Property Name:", propertyName);
  });
  return properties;
}
