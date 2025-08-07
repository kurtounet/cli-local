import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroIndexPostTemplate(entity: IEntityJson): string {
  return `// server/api/tasks/index.post.ts

import { task } from '~~/server/database/schemas/schema'
// import { db } from '~~/server/utils/db';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // Validation des données requises
    if (!body.name) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Le nom de la tâche est requis'
      })
    }

    const taskData = {
      projectId: body.projectId || null,
      parentTaskId: body.parentTaskId || null,
      name: body.name,
      description: body.description || null,
      statusId: body.statusId || null,
      priorityId: body.priorityId || null,
      assignedTo: body.assignedTo || null,
      createdBy: body.createdBy || null,
      estimatedHours: body.estimatedHours || null,
      actualHours: body.actualHours || null,
      progress: body.progress || 0,
      startDate: body.startDate ? new Date(body.startDate) : null,
      dueDate: body.dueDate ? new Date(body.dueDate) : null,
      completedAt: body.completedAt ? new Date(body.completedAt) : null,
      position: body.position || null
    }

    const result = await db.insert(task).values(taskData)

    return {
      success: true,
      data: { id: result[0].insertId, ...taskData },
      message: 'Tâche créée avec succès'
    }
  } catch (error) {
    console.error('Erreur lors de la création de la tâches:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Erreur lors de la création de la tâches'
        });     
  }
})
    `;
}
