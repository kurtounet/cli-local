import { IRelation } from "@features/parsersMdj/models/entity-json.model";
import { symfonyGetAccessorTemplate } from "../templates/symfony-get-accessor.template";
import { symfonySetAccessorTemplate } from "../templates/symfony-set-accessor.template";
import { snakeToCamel, snakeToPascal } from "@utils/convert";

export function symfonyGenerateAccessorsRelationService(relation: IRelation) {
  const propName: string = snakeToCamel(relation.target);
  const type: string = snakeToPascal(relation.target);
  return `
    ${symfonyGetAccessorTemplate(propName, type)}

    ${symfonySetAccessorTemplate(propName, type)}
    `;
}
