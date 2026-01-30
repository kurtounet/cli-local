import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroIdPatchTemplate(
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
  return ` import { ${entity.namePascalCase}Service } from './${entity.nameKebabCase}.service'
${handleApiError}
import { createError, defineEventHandler, getRouterParam, readBody } from 'h3'
import { update${entity.namePascalCase}Schema } from '../../../shared/schemas/${entity.nameKebabCase}.schema'

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
        data: validation.error.message,
      })
    }

    const updated = await ${entity.nameCamelCase}Service.update(
      Number(id),
      validation.data
    )

    return {
      success: true,
      data: updated,
      message: '${entity.namePascalCase} mise à jour avec succès',
    }
  } catch (error: any) {
     handleApiError(error)
  }
})`;
}
