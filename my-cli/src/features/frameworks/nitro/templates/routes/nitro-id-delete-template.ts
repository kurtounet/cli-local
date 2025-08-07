import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroIdDeleteTemplate(entity: IEntityJson): string {
  return `// server/api/tasks/[id].delete.ts

import { task } from '~~/server/database/schemas/schema'
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

    // Vérifier si la tâche existe
    const existingTask = await db.select().from(task)
      .where(eq(task.id, Number(id)))
      .limit(1)

    if (existingTask.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Tâche non trouvée'
      })
    }

    await db.delete(task).where(eq(task.id, Number(id)))

    return {
      success: true,
      message: 'Tâche supprimée avec succès'
    }
  } catch (error) {
    console.error('Erreur lors de la suppression de la tâche:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de la suppression de la tâche'
    })
  }
})`;
}
