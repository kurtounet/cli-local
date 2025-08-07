import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nitroIndexGetTemplate(entity: IEntityJson): string {
  return `
import { TaskRepository } from '~~/server/repositories/task.repository';
import type { ITask } from '~~/app/shared/models/entities/task.model';  
 
export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        let result
        const repositoryTask = new TaskRepository()


        await repositoryTask.getAll(query).then((tasks: ITask[]) => { result = tasks })
         
        return {
            success: true,
            data: result
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des tâches:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Erreur lors de la récupération des tâches'
        });
    }
})`;
}
