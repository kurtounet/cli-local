// Template pour un composant Vue.js
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getVueComponentTemplate(entity: IEntityJson) {
  return `<template>\n  <div>\n    <h1>${entity.namePascalCase} Component</h1>\n  </div>\n</template>\n\n<script lang="ts">\nimport { defineComponent } from 'vue';\n\nexport default defineComponent({\n  name: '${entity.namePascalCase}Component',\n});\n</script>\n\n<style scoped>\n/* Styles ici */\n</style>\n`;
}
