// Template pour un test Angular
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 * Generates an Angular test template.
 * @param entity The entity JSON object.
 * @returns The Angular test template string.
 */
export function angularTestTemplate(entity: IEntityJson) {
  return `import { TestBed } from '@angular/core/testing';\n\ndescribe('${entity.namePascalCase}Component', () => {\n  beforeEach(async () => {\n    await TestBed.configureTestingModule({\n      declarations: [ ${entity.namePascalCase}Component ]\n    })\n    .compileComponents();\n  });\n\n  it('should create', () => {\n    const fixture = TestBed.createComponent(${entity.namePascalCase}Component);\n    const app = fixture.componentInstance;\n    expect(app).toBeTruthy();\n  });\n});\n`;
}
