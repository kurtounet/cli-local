import { IRelation } from "@features/parsersMdj/models/entity-json.model";
import { snakeToCamel, snakeToPascal } from "@utils/convert";

import { symfonyGetAccessorTemplate } from "../templates/symfony-get-accessor.template";
import { symfonySetAccessorTemplate } from "../templates/symfony-set-accessor.template";

/**
 *
 * @param relation
 */
export function symfonyGenerateAccessorsRelationService(relation: IRelation) {
  const propName: string = snakeToCamel(relation.target);
  const type: string = snakeToPascal(relation.target);
  return `
    ${symfonyGetAccessorTemplate(propName, type)}

    ${symfonySetAccessorTemplate(propName, type)}
    `;
}
