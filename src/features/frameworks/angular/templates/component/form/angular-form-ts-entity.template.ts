import { ANGULAR_DEFAULT_VALUES_VALIDATORS } from "@constants/global.constants";
import {
  IColumnJson,
  IEntityJson,
} from "@features/parsersMdj/models/entity-json.model";

/**
 *
 * @param entity
 * @param typeForm
 */
export function angularFormTscEntityTemplate(
  entity: IEntityJson,
  typeForm = "",
): string {
  let createProperties = "";
  let updateProperties = "";

  if (Array.isArray(entity.columns))
    entity.columns.forEach((col) => {
      createProperties += `  ${col.name}: ['', ${validators(col, "post")}],\n`;
      updateProperties += `  ${col.name}: ['', ${validators(col, "patch")}],\n`;
      // entity.columns
      //   ?.map(
      //     (col: any) =>
      //       `  ${col.name}: new FormControl('', ${validator}),`,
      //   )
      //   .join("\n") || "";
    });

  return `
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-${entity.nameKebabCase}-form',
  imports: [ReactiveFormsModule],
  templateUrl: './${entity.nameKebabCase}-form.component.html',
  styleUrl: './${entity.nameKebabCase}-form.component.css',
})
export class ${entity.namePascalCase}FormComponent { 
  id = signal<string | number>(0);
  submitted = false;
  private fb = inject(FormBuilder);
  //private ${entity.nameCamelCase}Store = inject(${entity.namePascalCase}Store);

  form!: FormGroup;

  ngOnInit() {
    if (this.id() === 0 || this.id() === null) {
      this.initCreateForm();
    } else {
      this.initUpdateForm();
    }
  }

  private initCreateForm(): void {
    this.form = this.fb.nonNullable.group({
      ${createProperties}
    });
  }
    private initUpdateForm(): void {
   //this.projectInstanceStore.getProjectInstanceById(Number(this.id()));
   // const data: IProjectInstance = this.projectInstanceStore.currentProject();
   // const data: I${entity.namePascalCase} = {};
    const data  = {};

    if (!data) {
      this.initCreateForm();
      return;
    }

    this.form = this.fb.nonNullable.group({
     ${updateProperties}
    });
  }
  

  get getForm() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.value;

    if (this.id() === 0 || this.id() === null) {
      //this.projectInstanceStore.createProjectInstance(formValue);
      console.log('Création:', formValue);
    } else {
      //this.projectInstanceStore.updateProjectInstance(String(this.id()), formValue);
      console.log('Modification:', formValue);
    }
}
}
`;
}
/**
 *
 * @param col
 * @param operation
 */
export function validators(col: IColumnJson, operation: string): string {
  let validators = "";

  if (col.nullable === false) {
    validators += "Validators.required,";
  }

  if (col.typeTypeScript === "string") {
    // MinLength
    if (col.minLength && col.minLength > 0) {
      validators += `Validators.minLength(${col.minLength}),`;
    } else {
      validators += `Validators.minLength(${ANGULAR_DEFAULT_VALUES_VALIDATORS.MIN_LENGTH_STRING}),`;
    }
    //MaxLength
    if (col.maxlength && col.maxlength > 0) {
      validators += `Validators.maxLength(${col.maxlength}),`;
    } else {
      validators += `Validators.maxLength(${ANGULAR_DEFAULT_VALUES_VALIDATORS.MAX_LENGTH_STRING}),`;
    }
  }

  return validators;
}
/* Pour updateProperties
id: [data.id, Validators.required],
status_id: [data.status || ''],
priority_id: [data.priority || ''],
project_template_id: [data.projectTemplate || ''],
comment_id: [data.comment || ''],
name: [data.name, [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
description: [data.description, [Validators.minLength(6), Validators.maxLength(255)]],
start_date: [data.startDate],
end_date: [data.endDate],
created_At: [data.createdAt, Validators.required],
updated_At: [data.updatedAt, Validators.required],



  id: string;
  name: string;
  typeSql: string;
  typeTypeScript: string;
  typeORM?: string;
  typeDoctrine: string;
  parent: string | null;
  length: string | null;
  maxlength?: number | null;
  minLength?: number | null;
  precision?: number | null | undefined;
  isEmpty?: boolean | null;
  unique: boolean;
  nullable: boolean;
  primaryKey: boolean;
  foreignKey: boolean;
  documentation?: string | null;
  description?: string | null;
  referenceTo?: string;
  propsEntiy?: string[];
  validations?: string[];
  import { Component, inject, signal, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IProjectInstance } from '@app/features/dashboard/models/project-instance.model';
import { ProjectInstantStore } from '@app/features/dashboard/stores/project-instant.store';

@Component({
  selector: 'app-project-instance-form',
  imports: [ReactiveFormsModule],
  templateUrl: './project-instance-form.component.html',
  styleUrl: './project-instance-form.component.css',
})
export class ProjectInstanceFormComponent implements OnInit {
  id = signal<string | number>(0);
  submitted = false;
  private fb = inject(FormBuilder);
  private projectInstanceStore = inject(ProjectInstantStore);

  form!: FormGroup;

  ngOnInit() {
    if (this.id() === 0 || this.id() === null) {
      this.initCreateForm();
    } else {
      this.initUpdateForm();
    }
  }

  private initCreateForm(): void {
    this.form = this.fb.nonNullable.group({
      status_id: [''],
      priority_id: [''],
      project_template_id: [''],
      comment_id: [''],
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
      description: ['', [Validators.minLength(6), Validators.maxLength(255)]],
      start_date: [''],
      end_date: [''],
    });
  }

  private initUpdateForm(): void {
    this.projectInstanceStore.getProjectInstanceById(Number(this.id()));
    const data: IProjectInstance = this.projectInstanceStore.currentProject();

    if (!data) {
      console.error('Projet introuvable');
      this.initCreateForm();
      return;
    }

    this.form = this.fb.nonNullable.group({
      id: [data.id, Validators.required],
      status_id: [data.status || ''],
      priority_id: [data.priority || ''],
      project_template_id: [data.projectTemplate || ''],
      comment_id: [data.comment || ''],
      name: [data.name, [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
      description: [data.description, [Validators.minLength(6), Validators.maxLength(255)]],
      start_date: [data.startDate],
      end_date: [data.endDate],
      created_At: [data.createdAt, Validators.required],
      updated_At: [data.updatedAt, Validators.required],
    });
  }

  get getForm() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.value;

    if (this.id() === 0 || this.id() === null) {
      this.projectInstanceStore.createProjectInstance(formValue);
      console.log('Création:', formValue);
    } else {
      this.projectInstanceStore.updateProjectInstance(String(this.id()), formValue);
      console.log('Modification:', formValue);
    }
  }
}

*/
