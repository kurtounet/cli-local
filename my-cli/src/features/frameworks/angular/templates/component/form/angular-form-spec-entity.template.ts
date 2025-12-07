import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function angularFormSpecEntityTemplate(
  entity: IEntityJson,
  typeForm: string = "",
): string {
  return `import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ${entity.namePascalCase}FormComponent } from './${entity.nameKebabCase}-form.component';

describe('${entity.namePascalCase}FormComponent', () => {
  let component: ${entity.namePascalCase}FormComponent;
  let fixture: ComponentFixture<${entity.namePascalCase}FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [${entity.namePascalCase}FormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(${entity.namePascalCase}FormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
`;
}
