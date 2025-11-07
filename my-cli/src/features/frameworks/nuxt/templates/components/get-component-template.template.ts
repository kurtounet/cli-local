export function getComponentTemplate(name: string): string {
  return `<template>
  <div>
    <!-- ${name} Component -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: '${name}Component',
});
</script>

<style scoped>
/* Add your styles here */
</style>
`;
}
