import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroIdPutTemplate(entity: IEntityJson): string {
  return ` import { ${entity.namePascalCase}Service } from './${entity.nameKebabCase}.service'
import { update${entity.namePascalCase}Schema } from '../../../shared/schemas/${entity.nameKebabCase}.schema'
import { handleApiError } from '~~/server/utils/handle-api-error.utils'

export default defineEventHandler(async event => {
const ${entity.nameCamelCase}Service = new ${entity.namePascalCase}Service()
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)

    if (!id || isNaN(Number(id))) {
      throw createError({
        statusCode: 400,
        statusMessage: 'ID invalide',
      })
    }

    // Validate body with Zod schema
    const validation = update${entity.namePascalCase}Schema.safeParse(body)
    if (!validation.success) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid data',
        data: validation.error.errors,
      })
    }

    const ${entity.nameCamelCase} = await ${entity.nameCamelCase}Service.put(
      Number(id),
      validation.data
    )

    return {
      success: true,
      data: ${entity.nameCamelCase},
      message: '${entity.namePascalCase} mise à jour avec succès',
    }
  } catch (error: any) {
    console.error('Erreur lors de la mise à jour de la ${entity.nameCamelCase}:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Erreur lors de la mise à jour de la ${entity.nameCamelCase}',
    })
  }
})`;
}
