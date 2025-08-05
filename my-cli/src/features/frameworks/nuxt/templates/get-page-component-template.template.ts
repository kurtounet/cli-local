export function getPageComponentTemplate(name: string): string {
  return `<template>
  <div>
    <h1>Welcome to the ${name} page!</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: '${name}Page',
});
</script>

<style scoped>
/* Add your styles here */
</style>
`;
}
