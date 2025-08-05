import { IEntityJson } from '@interfaces/entityJson.interface';

export function entityDtoNestjsMock(entity: IEntityJson): string {
    console.log('Dto', entity.namePascalCase);
    return `export class Create${entity.namePascalCase}Dto {}`;
}
