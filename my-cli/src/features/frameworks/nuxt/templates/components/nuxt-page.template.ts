export function nuxtPageComponentTemplate(title: string = '') {
  return `
<template>
  <section class="section-page">
    <h1 class="pb-2 text-2xl font-bold"> ${title}</h1>  
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  title: '${title}',
  layout: 'dashboard',
  Seo: {
    title: '${title}',
    description: '${title}',
    keywords: '${title}',
    robots: 'index, follow',
  }
})
</script>
<style scoped lang="css"></style>
`
}