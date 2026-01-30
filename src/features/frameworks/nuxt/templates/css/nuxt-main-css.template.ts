export function nuxtMainCssTemplate(): string {
  return `root {
  color: #f9fafb;
}
.light {
  background-color: #f9fafb;
}
.dark {
  background-color: #333;
}
.section-page {
  @apply w-full space-y-6 px-2;
}
.form-label {
  @apply block w-full text-left text-sm font-medium text-gray-700;
}
.form-input {
  @apply mb-1 mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-300 sm:text-sm;
}
.form-control {
  @apply mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500;
}
.form-panel {
  @apply w-full gap-2 rounded-md border-2 border-gray-100 p-2 sm:grid-cols-1 md:flex;
}`;
}
