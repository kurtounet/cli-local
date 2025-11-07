export function nuxtTailwindCssTemplate(    
): string {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;
root {
  color: #f9fafb;
}
.light {
  background-color: #f9fafb;
}`;
}
