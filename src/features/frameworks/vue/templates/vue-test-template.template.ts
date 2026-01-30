// Template pour un test Vue.js

import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getVueTestTemplate(entity: IEntityJson) {
  return `import { mount } from '@vue/test-utils';\nimport ${entity.namePascalCase}Component from './${entity.namePascalCase}Component.vue';\n\ndescribe('${entity.namePascalCase}Component', () => {\n  it('renders properly', () => {\n    const wrapper = mount(${entity.namePascalCase}Component);\n    expect(wrapper.text()).toContain('${entity.namePascalCase} Component');\n  });\n});\n`;
}
