import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroIndexPostTemplate(
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
  return `import { ${entity.namePascalCase}Service }  from './${entity.nameKebabCase}.service'
${handleApiError}
import { createError, defineEventHandler, readBody } from 'h3'
import { insert${entity.namePascalCase}Schema } from '../../../shared/schemas/${entity.nameKebabCase}.schema'

export default defineEventHandler(async event => {
const ${entity.nameCamelCase}Service = new ${entity.namePascalCase}Service()
  try {
    const body = await readBody(event)

    // Validate body with Zod schema
    const validation = insert${entity.namePascalCase}Schema.safeParse(body)
    if (!validation.success) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid data',
        data: validation.error.message,
      })
    }

    const new${entity.namePascalCase} = await ${entity.nameCamelCase}Service.create(validation.data as any)

    return {
      success: true,
      data: new${entity.namePascalCase},
      message: '${entity.namePascalCase} créée avec succès',
    }
  } catch (error: any) {
    handleApiError(error)
  }
})`;
}
