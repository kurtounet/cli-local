import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroIdDeleteTemplate(
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

  return `import { defineEventHandler, getRouterParam,  createError  } from 'h3'
import { ${entity.namePascalCase}Service } from './${entity.nameKebabCase}.service'
${handleApiError}

export default defineEventHandler(async (event) => {
  const ${entity.nameCamelCase}Service = new ${entity.namePascalCase}Service()

  const idParam = getRouterParam(event, 'id')
  const id = Number(idParam)

  if (!idParam || id <= 0 || Number.isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'The provided ID is invalid.',
    })    
  }
  try {
    const ${entity.nameCamelCase} = await ${entity.nameCamelCase}Service.delete(id)
    return ${entity.nameCamelCase}
  } catch (error: unknown) {
    handleApiError(error)     
  }
})`;
}
