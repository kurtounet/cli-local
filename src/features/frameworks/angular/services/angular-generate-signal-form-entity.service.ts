import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";
import { logInfo } from "@utils/logger";
import { angularFormEntityTemplate } from "../templates/angular-entity.template";
import { angularFormSpecEntityTemplate } from "../templates/component/form/angular-form-spec-entity.template";
import { angularFormTscEntityTemplate } from "../templates/component/form/angular-form-ts-entity.template";
import { angularFormHtmlEntityTemplate } from "../templates/component/form/angular-form-html-entity.template";
import { angularFormCssEntityTemplate } from "../templates/component/form/angular-form-css-entity.template";

/**
 * Generates an Angular form entity.
 * @param  componentDir  The entity JSON object.
 * @param entity The entity JSON object.
 * @param prefix  prefix for the files ex : ".component.extension".
 */
export function angularGenerateFormEntityService(
  componentDir: string,
  entity: IEntityJson,
  typeForm: string = "",
  prefix: string,
) {
  writeFile(
    `${componentDir}/${entity.nameKebabCase}/${entity.nameKebabCase}-form${prefix}.css`,
    angularFormCssEntityTemplate(entity),
  );
  writeFile(
    `${componentDir}/${entity.nameKebabCase}/${entity.nameKebabCase}-form${prefix}.html`,
    angularFormHtmlEntityTemplate(entity, typeForm),
  );
  writeFile(
    `${componentDir}/${entity.nameKebabCase}/${entity.nameKebabCase}-form${prefix}.ts`,
    angularFormTscEntityTemplate(entity, typeForm),
  );
  writeFile(
    `${componentDir}/${entity.nameKebabCase}/${entity.nameKebabCase}-form${prefix}.spec.ts`,
    angularFormSpecEntityTemplate(entity, typeForm),
  );
}
/*


import {
  IColumnJson,
  IEntityJson,
} from "@features/parsersMdj/models/entity-json.model";

export function nuxtFromEntityComponentTemplate(entity: IEntityJson): string {
  const contentForm =
    entity.columns
      ?.map(
        (col: IColumnJson) => `        <div>
            <label for="${col.name}">${col.name}</label>
            <input type="${typeField(col)}" id="${col.name}" name="${col.name}">
        </div>`,
      )
      .join("\n") || "";

  return `<template>
    <form>
        <h1>${entity.namePascalCase}</h1>
${contentForm}
    </form>
 `;
}

export function typeField(col: IColumnJson): string {
  // Field name-based type mapping (takes priority)
  const nameTypeMap = {
    password: "password",
    email: "email",
    phone: "tel",
    url: "url",
    date: "date",
    time: "time",
    datetime: "datetime-local",
  };

  // Data type-based mapping
  const typesHtml = {
    string: "text",
    number: "number",
    boolean: "checkbox",
    date: "date",
    datetime: "datetime-local",
  };

  // Check field name first (case-insensitive)
  const fieldNameLower = col.name.toLowerCase();
  for (const [key, type] of Object.entries(nameTypeMap)) {
    if (fieldNameLower.includes(key)) {
      return type;
    }
  }

  // Fall back to data type mapping
  return typesHtml[col.typeTypeScript as keyof typeof typesHtml] || "text";
}







*/
