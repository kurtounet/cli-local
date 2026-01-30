import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroIndexGetTemplate(
  entity: IEntityJson,
  mode: string,
): string {
  let handleApiError = "";

  if (mode === "nuxt") {
    handleApiError = `import { handleApiError } from '~~/server/utils/handle-api-error.utils'`;
  }
  if (mode === "nitro") {
    handleApiError = `import { handleApiError } from '../../utils/handle-api-error.utils'`;
  }
  return `import  { ${entity.namePascalCase}Service } from './${entity.nameKebabCase}.service'
import { defineEventHandler } from 'h3';
${handleApiError}

export default defineEventHandler(async event => {
  const ${entity.nameCamelCase}Service = new ${entity.namePascalCase}Service;
  try {
    const ${entity.nameCamelCase}s = await ${entity.nameCamelCase}Service.findAll();
    return {
      success: true,
      data: ${entity.nameCamelCase}s,
    }
  } catch (error: any) {
    handleApiError(error);
  }
})
`;
}
