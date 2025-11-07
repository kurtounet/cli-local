import { IColumnJson, IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function nuxtFromEntityComponentTemplate(
    entity: IEntityJson
): string {
    const contentForm = entity.columns
        ?.map((col: IColumnJson) => `        <div>
            <label for="${col.name}">${col.name}</label>
            <input type="${typeField(col)}" id="${col.name}" name="${col.name}">
        </div>`)
        .join("\n") || "";
    
    return `<template>
    <form>
        <h1>${entity.namePascalCase}</h1>
${contentForm}
    </form>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Add your styles here */
</style>`;
}

export function typeField(col: IColumnJson): string {
    // Field name-based type mapping (takes priority)
    const nameTypeMap = {
        password: "password",
        email: "email",
        phone: "tel",
        url: "url",
        date: "date",
        time: "time",
        datetime: "datetime-local",
    };
    
    // Data type-based mapping
    const typesHtml = {
        string: "text",
        number: "number",
        boolean: "checkbox",
        date: "date",
        datetime: "datetime-local",
    };

    // Check field name first (case-insensitive)
    const fieldNameLower = col.name.toLowerCase();
    for (const [key, type] of Object.entries(nameTypeMap)) {
        if (fieldNameLower.includes(key)) {
            return type;
        }
    }

    // Fall back to data type mapping
    return typesHtml[col.typeTypeScript as keyof typeof typesHtml] || "text";
}