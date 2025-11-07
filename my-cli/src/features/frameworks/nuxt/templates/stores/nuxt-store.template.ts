import { I } from "@faker-js/faker/dist/airline-CHFQMWko";
import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { nuxtStoreActionsCreateTemplate, nuxtStoreActionsDeleteTemplate, nuxtStoreActionsFindAllTemplate, nuxtStoreActionsFindByIdTemplate, nuxtStoreActionsUpdateTemplate } from "./nuxt-store-actions.template";
import { nuxtStoreGettersTemplate } from "./nuxt-store-getters.template";

export function nuxtStoreTemplate(
    entity: IEntityJson
): string {
  return `import { defineStore } from 'pinia'
import type { ApiResponse } from '~~/shared/models/api-response.model'
import type { ${entity.namePascalCase}, ${entity.namePascalCase}Insert } from '~~/shared/types/db'
//import type { ${entity.namePascalCase}Schema, insert${entity.namePascalCase}Schema, update${entity.namePascalCase}Schema } from '~~/shared/schemas/access-scope.schema'
 
export const use${entity.namePascalCase}Store = defineStore('${entity.namePascalCase}Store', {
  state: () => ({
    apiUrl: '/api/${entity.nameKebabCase}s',
    ${entity.nameCamelCase}s: [] as ${entity.namePascalCase}[],
  }),
  getters: {
  ${nuxtStoreGettersTemplate(entity, false)}
  },
  actions: {
  ${nuxtStoreActionsFindAllTemplate(entity)}
  ${nuxtStoreActionsFindByIdTemplate(entity)}
  ${nuxtStoreActionsCreateTemplate(entity)}
  ${nuxtStoreActionsUpdateTemplate(entity)}
  ${nuxtStoreActionsDeleteTemplate(entity)}
})
`;
}
