import { I } from "@faker-js/faker/dist/airline-CHFQMWko";
import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { snakeToCamel } from "@utils/convert";

/**
 *
 * @param type
 */
export function defaultInitialValueType(type: string): string | number {
  if (type === "string") return '""';
  if (type === "number") return 0;
  if (type === "boolean" || type === "bool") return "false";
  if (type === "Date") return "new Date('now()')";
  return "false";
}
/**
 *
 * @param entity
 */
export function angularInitialEntityState(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map(
        (col: any) =>
          `  ${snakeToCamel(col.name)}: ${defaultInitialValueType(col.typeTypeScript)},`,
      )
      .join("\n") || "";
  // return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
  return `export const initial${entity.namePascalCase}State: I${entity.namePascalCase} = { 
  ${properties} 
};`;
}

/**
 *
 * @param entity
 * @param dir
 */
export function angularSignalStoreEntityTemplate(
  entity: IEntityJson,
  dir: string,
): string {
  return `import { inject, Injectable, signal } from '@angular/core';
import { I${entity.namePascalCase} } from '${dir}/models/${entity.nameKebabCase}.model';
import { ${entity.namePascalCase}Service } from '${dir}/services/${entity.nameKebabCase}.service';

 ${angularInitialEntityState(entity)}

@Injectable({
  providedIn: 'root',
})
export class ${entity.namePascalCase}Store {

  readonly ${entity.nameCamelCase}Service = inject(${entity.namePascalCase}Service);
 

  ${entity.nameCamelCase}s = signal<I${entity.namePascalCase}[]>([]);
  current${entity.namePascalCase} = signal<I${entity.namePascalCase}>(initial${entity.namePascalCase}State);
  ${entity.nameCamelCase}Loading = signal<boolean>(false);
  ${entity.nameCamelCase}Loaded = signal<boolean>(false);

  ${entity.nameCamelCase} = signal<I${entity.namePascalCase}[]>([]);

  getAll${entity.namePascalCase}(): void {
    this.${entity.nameCamelCase}Loading.set(true);
    this.${entity.nameCamelCase}Service.getAll${entity.namePascalCase}().subscribe({
      next: (data) => {
        if (data) {
          this.${entity.nameCamelCase}s.set(data);
          this.${entity.nameCamelCase}Loaded.set(true);
          this.${entity.nameCamelCase}Loading.set(false);
           
        }
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des ${entity.nameCamelCase}', err);
        this.${entity.nameCamelCase}Loading.set(false);
      },
    });
  }
  get${entity.namePascalCase}ById(id: string): void {
    this.${entity.nameCamelCase}Loading.set(true);
    this.${entity.nameCamelCase}Service.get${entity.namePascalCase}ById(id).subscribe({
      next: (data) => {
        if (data) {
          this.current${entity.namePascalCase}.set(data);
          this.${entity.nameCamelCase}Loaded.set(true);
          this.${entity.nameCamelCase}Loading.set(false);           
        }
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du ${entity.nameCamelCase}', err);
        this.${entity.nameCamelCase}Loading.set(false);
      },
    });
  }
  update${entity.namePascalCase}(id: string, body: I${entity.namePascalCase}) {
     
    this.${entity.nameCamelCase}Service.update${entity.namePascalCase}(id, body).subscribe({
      next: (data) => {
        //this.getCurrent${entity.namePascalCase}(data.id);
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour : error', err);        
      },
    });
  }
  create${entity.namePascalCase}(body: I${entity.namePascalCase}) {
     
    this.${entity.nameCamelCase}Service.create${entity.namePascalCase}(body).subscribe({
      next: (data) => {
       // this.getCurrent${entity.namePascalCase}(data.id);
      },
      error: (err) => {
        console.error('Erreur lors de la création : error', err);        
      },
    });
  }
  delete${entity.namePascalCase}(id: string) {
     
    this.${entity.nameCamelCase}Service.delete${entity.namePascalCase}(id).subscribe({
      next: (data) => {
       // this.getCurrent${entity.namePascalCase}(data.id);
      },
      error: (err) => {
        console.error('Erreur lors de la suppression: error', err);        
      },
    });
  }
}
`;
}
