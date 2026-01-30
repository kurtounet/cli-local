export function getLayoutTemplate(name: string): string {
  return `<template>
  <div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: '${name}Layout',
});
</script>

<style scoped>
/* Add your styles here */
</style>
`;
}
