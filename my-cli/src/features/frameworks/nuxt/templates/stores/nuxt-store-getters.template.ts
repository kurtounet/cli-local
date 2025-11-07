import { I } from "@faker-js/faker/dist/airline-CHFQMWko";
import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function nuxtStoreGettersTemplate(
    entity: IEntityJson,
    isActive: boolean
): string {
  if(!isActive) return '';
  return `
  getters: {
    /** count derive, pas besoin dans le state */
    ${entity.nameCamelCase}sCount: s => s.${entity.nameCamelCase}s.length,

    /** getter curry pour lecture directe */
    getById: s => (id: number) => s.indexById.get(id) ?? null,

    getByType: s => (type: CategoryType) => s.${entity.nameCamelCase}s.filter(c => c.type === type),

    getByParentId: s => (parentId: number | null) =>
      s.${entity.nameCamelCase}s.filter(c => c.parentId === parentId),

    getByUserId: s => (userId: number) => s.${entity.nameCamelCase}s.filter(c => c.userId === userId),

    getIdByName(): (name: string) => number | null {
      return (name: string) => {
        const fromMain = this.${entity.nameCamelCase}s.find(c => c.name === name)?.id
        if (fromMain != null) return fromMain

        const fromImported = this.importedCategories.find(c => c.name === name)?.id
        return fromImported ?? null
      }
    },
    /** ${entity.nameCamelCase} par nom (ou null) */
    getByName(): (name: string) => Category | null {
      return (name: string) => this.${entity.nameCamelCase}s.find(c => c.name === name) ?? null
    },
  },

  `;
}
