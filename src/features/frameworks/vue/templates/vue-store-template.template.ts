// Template pour un store Vue.js (Pinia ou Vuex)
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getVueStoreTemplate(entity: IEntityJson) {
  return `import { defineStore } from 'pinia';\n\nexport const use${entity.namePascalCase}Store = defineStore('${entity.nameKebabCase}', {\n  state: () => ({\n    // État du store\n  }),\n  actions: {\n    // Actions du store\n  },\n  getters: {\n    // Getters du store\n  },\n});\n`;
}
