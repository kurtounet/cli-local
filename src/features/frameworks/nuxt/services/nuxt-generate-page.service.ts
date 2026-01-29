import { BaseGenerator } from "../../common/base-generator.js";

export class NuxtGeneratePageService extends BaseGenerator {
  protected getTargetFolder() {
    return "pages";
  }
  protected getFileSuffix() {
    return "vue";
  } // .vue pour Nuxt !

  protected getTemplate(name: string): string {
    return `<template>
  <div>
    <h1>Page ${name}</h1>
  </div>
</template>

<script setup lang="ts">
// Logic here
</script>`;
  }
}
