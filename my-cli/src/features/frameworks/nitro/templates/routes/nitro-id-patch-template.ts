import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroIdPatchTemplate(entity: IEntityJson): string {
  return ` // server/api/tasks/[id].put.ts
import { db } from '~~/server/utils/db';
import { task } from '~~/server/database/schemas/schema'
import { eq } from 'drizzle-orm'


export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)

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

    const updateData: any = {}

    // Mise à jour conditionnelle des champs
    if (body.projectId !== undefined) updateData.projectId = body.projectId
    if (body.parentTaskId !== undefined) updateData.parentTaskId = body.parentTaskId
    if (body.name !== undefined) updateData.name = body.name
    if (body.description !== undefined) updateData.description = body.description
    if (body.statusId !== undefined) updateData.statusId = body.statusId
    if (body.priorityId !== undefined) updateData.priorityId = body.priorityId
    if (body.assignedTo !== undefined) updateData.assignedTo = body.assignedTo
    if (body.createdBy !== undefined) updateData.createdBy = body.createdBy
    if (body.estimatedHours !== undefined) updateData.estimatedHours = body.estimatedHours
    if (body.actualHours !== undefined) updateData.actualHours = body.actualHours
    if (body.progress !== undefined) updateData.progress = body.progress
    if (body.startDate !== undefined) updateData.startDate = body.startDate ? new Date(body.startDate) : null
    if (body.dueDate !== undefined) updateData.dueDate = body.dueDate ? new Date(body.dueDate) : null
    if (body.completedAt !== undefined) updateData.completedAt = body.completedAt ? new Date(body.completedAt) : null
    if (body.position !== undefined) updateData.position = body.position

    await db.update(task)
      .set(updateData)
      .where(eq(task.id, Number(id)))

    return {
      success: true,
      message: 'Tâche mise à jour avec succès'
    }
  } catch (error) {
    console.error('Erreur lors de la  mise à jour la tâches:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de la  mise à jour la tâches'
    });
  }
})`;
}
