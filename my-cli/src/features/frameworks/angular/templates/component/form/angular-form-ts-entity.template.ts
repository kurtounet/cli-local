import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function angularFormTscEntityTemplate(
  entity: IEntityJson,
  typeForm: string = "",
): string {
  const properties =
    entity.columns
      ?.map(
        (col: any) =>
          `  ${col.name}: ['', [Validators.required, Validators.minLength(8)]],`,
      )
      .join("\n") || "";

  return `
import { Component } from '@angular/core'; 
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-${entity.nameKebabCase}-form',
  imports: [ReactiveFormsModule],
  templateUrl: './${entity.nameKebabCase}-form.component.html',
  styleUrl: './${entity.nameKebabCase}-form.component.css',
})
export class ${entity.namePascalCase}FormComponent { 
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
    ${properties}      
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    // Traitement du form
    console.log(this.form.value);
  }
}

`;
}
