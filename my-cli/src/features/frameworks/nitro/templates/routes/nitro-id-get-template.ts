import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroIdGetTemplate(entity: IEntityJson): string {
  return `// server/api/tasks/[id].get.ts
 
import { task} from '~~/server/database/schemas/schema'
import { eq } from 'drizzle-orm'

import { db } from '~~/server/utils/db';

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id || isNaN(Number(id))) {
      throw createError({
        statusCode: 400,
        statusMessage: 'ID invalide'
      })
    }

    const existingTask = await db.select().from(task)
      .where(eq(task.id, Number(id)))
      .limit(1)

    if (existingTask.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Tâche non trouvée'
      })
    }

    return {
      success: true,
      data: existingTask[0]
    }
  } catch (error) {
console.error('Erreur lors de la récupération la tâche:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de la  récupération la tâche'
    });

     
  }
})
`;
}
