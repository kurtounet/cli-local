import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function angularFormCssEntityTemplate(entity: IEntityJson): string {
  return `
    .${entity.nameKebabCase}{
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .${entity.nameKebabCase}_input{
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .${entity.nameKebabCase}_input input{
      width: 100%;
    }
    `;
}
