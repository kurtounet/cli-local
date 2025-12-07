import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { pascalToKebab } from "@utils/convert";

export function angularSpecComponentTemplate(
  namePascalCase: string = "",
  prefix: string = "",
): string {
  return `import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ${namePascalCase}Component } from './${pascalToKebab(namePascalCase)}${prefix}';

describe('${namePascalCase}Component', () => {
  let component: ${namePascalCase}Component;
  let fixture: ComponentFixture<${namePascalCase}Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [${namePascalCase}Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(${namePascalCase}Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
`;
}
