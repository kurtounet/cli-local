import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroIdGetTemplate(entity: IEntityJson): string {
  return `//server/api/${entity.nameCamelCase}s/[id].get.ts
import { defineEventHandler, getRouterParam, } from 'h3'
import { ${entity.namePascalCase}Service } from './${entity.nameKebabCase}.service'
import { handleApiError } from '~~/server/utils/handle-api-error.utils'

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
    const ${entity.nameCamelCase} = await ${entity.nameCamelCase}Service.findById(id)
    // Evite d’exposer des champs sensibles
    // const { password, ...safeUser } = ${entity.nameCamelCase} as any
    return {
      success: true,
      data: ${entity.nameCamelCase},
    }
  } catch (error: unknown) {
    handleApiError(error)
  }
})
`;
}
