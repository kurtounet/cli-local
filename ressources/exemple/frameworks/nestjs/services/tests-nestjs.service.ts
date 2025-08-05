import { IEntityJson } from '@interfaces/entityJson.interface';

export function createTestsNestjs(projectPath: string, entity: IEntityJson) {
    console.log('Tests', entity.nameCamelCase);
}
