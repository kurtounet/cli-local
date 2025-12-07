import {
  IColumnJson,
  IEntityJson,
} from "@features/parsersMdj/models/entity-json.model";
// export function typeField(col: IColumnJson): string {

//   // Field name-based type mapping (takes priority)
//   const nameTypeMap = {
//     password: "password",
//     email: "email",
//     phone: "tel",
//     url: "url",
//     date: "date",
//     time: "time",
//     datetime: "datetime-local",
//   };

//   // Data type-based mapping
//   const typesHtml = {
//     string: "text",
//     number: "number",
//     boolean: "checkbox",
//     date: "date",
//     datetime: "datetime-local",
//   };

//   // Check field name first (case-insensitive)
//   const fieldNameLower = col.name.toLowerCase();
//   for (const [key, type] of Object.entries(nameTypeMap)) {
//     if (fieldNameLower.includes(key)) {
//       return type;
//     }
//   }

//   // Fall back to data type mapping
//   return typesHtml[col.typeTypeScript as keyof typeof typesHtml] || "text";
// }
export function typeField(col: IColumnJson): string {
  // Mapping basé sur le nom du champ (prioritaire)
  const nameTypeMap: Record<string, string> = {
    password: "password",
    email: "email",
    mail: "email",
    phone: "tel",
    tel: "tel",
    url: "url",
    website: "url",
    search: "search",
    color: "color",
    price: "number",
    amount: "number",
    qty: "number",
    quantity: "number",
    range: "range",
    date: "date",
    birthday: "date",
    time: "time",
    datetime: "datetime-local",
    created: "datetime-local",
    updated: "datetime-local",
    month: "month",
    week: "week",
    file: "file",
    avatar: "file",
    image: "file",
  };

  // Mapping basé sur le type de données du backend / TypeScript
  const typesHtml: Record<string, string> = {
    string: "text",
    number: "number",
    boolean: "checkbox",
    date: "date",
    datetime: "datetime-local",
    float: "number",
    int: "number",
    bigint: "number",
    file: "file",
    binary: "file",
    color: "color",
  };

  const fieldNameLower = col.name.toLowerCase();

  // Priorité au mapping par nom
  for (const [key, type] of Object.entries(nameTypeMap)) {
    if (fieldNameLower.includes(key)) {
      return type;
    }
  }

  // Sinon fallback au mapping par type de donnée
  return typesHtml[col.typeTypeScript.toLowerCase()] || "text";
}

export function angularFormHtmlEntityTemplate(
  entity: IEntityJson,
  typeForm: string = "",
): string {
  const contentForm =
    entity.columns
      ?.map(
        (col: IColumnJson) => `
         <div class="flex flex-col gap-1">
    <label for="${col.name}" class="font-medium">${col.name}</label>
    <input
      id="${col.name}"
      name="${col.name}"
      type="${typeField(col)}"
      formControlName="${col.name}"
      class="border rounded px-3 py-2"
      placeholder="votre.email@domaine.com"
    />

    @if ((f['${col.name}'].touched || submitted) && f['${col.name}'].errors) {
      <p class="text-sm text-red-600">
        @if (f['${col.name}']?.errors?.['required']) {
          L'${col.name} est obligatoire.
        }
        @if (f['${col.name}']?.errors?.['${col.name}']) {
          Format d'${col.name} invalide.
        }
      </p>
    }
  </div>
`,
      )
      .join("\n") || "";

  return ` 
<form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 max-w-md">
  <h1>${entity.namePascalCase}</h1>
${contentForm}
@if (submitted && form.invalid) {
    <p class="text-sm text-red-600">Corrigez les erreurs avant de continuer.</p>
  }

  <button
    type="submit"
    class="mt-2 px-4 py-2 rounded bg-blue-600 text-white font-medium"
  >
    Se connecter
  </button>
</form>
 `;
}
