templates/
  root/
    .gitignore.ejs
    package.json.ejs
    pnpm-workspace.yaml.ejs
  layers/
    core-ui/
      nuxt.config.ts.ejs
      assets/
        css/
          main.css.ejs
      plugins/
        dayjs.ts.ejs
      composables/
        useTheme.ts.ejs
    core-app/
      nuxt.config.ts.ejs
      app.vue.ejs
      error.vue.ejs
      app.config.ts.ejs
      assets/
        css/
          main.css.ejs
      components/
        layout/        (vide)
        shared/        (vide)
      composables/
        useFetchApi.ts.ejs
        useAuth.ts.ejs
      layouts/
        default.vue.ejs
        admin.vue.ejs
      middleware/
        auth.global.ts.ejs
        admin.ts.ejs
      pages/
        index.vue.ejs
        about.vue.ejs
        [slug].vue.ejs
        admin/
          index.vue.ejs
      plugins/
        axios.ts.ejs
      public/
        robots.txt.ejs
        favicon.ico.ejs
      server/
        api/
          health.get.ts.ejs
        middleware/
          logs.ts.ejs
        services/
          db.ts.ejs
      stores/
        user.store.ts.ejs
        settings.store.ts.ejs
      types/
        global.d.ts.ejs
      utils/
        formatDate.ts.ejs
        validators.ts.ejs
    auth/
      nuxt.config.ts.ejs
      pages/
        login.vue.ejs
        register.vue.ejs
      stores/
        auth.store.ts.ejs
      composables/
        useAuth.ts.ejs
      server/
        api/
          auth.login.post.ts.ejs
  apps/
    web/
      nuxt.config.ts.ejs
      pages/
        index.vue.ejs
      package.json.ejs



      Parfait 👍
Je vais te donner :

1. **L’arborescence complète du dossier `templates/`** qui correspond à `ARCHITECTURE_NUXT_MOCK()`
2. **Le contenu minimal de chaque fichier `.ejs`** (fonctionnel mais simplifié, prêt à personnaliser)

---

## **1️⃣ Arborescence `templates/`**

```
templates/
  root/
    .gitignore.ejs
    package.json.ejs
    pnpm-workspace.yaml.ejs
  layers/
    core-ui/
      nuxt.config.ts.ejs
      assets/
        css/
          main.css.ejs
      plugins/
        dayjs.ts.ejs
      composables/
        useTheme.ts.ejs
    core-app/
      nuxt.config.ts.ejs
      app.vue.ejs
      error.vue.ejs
      app.config.ts.ejs
      assets/
        css/
          main.css.ejs
      components/
        layout/        (vide)
        shared/        (vide)
      composables/
        useFetchApi.ts.ejs
        useAuth.ts.ejs
      layouts/
        default.vue.ejs
        admin.vue.ejs
      middleware/
        auth.global.ts.ejs
        admin.ts.ejs
      pages/
        index.vue.ejs
        about.vue.ejs
        [slug].vue.ejs
        admin/
          index.vue.ejs
      plugins/
        axios.ts.ejs
      public/
        robots.txt.ejs
        favicon.ico.ejs
      server/
        api/
          health.get.ts.ejs
        middleware/
          logs.ts.ejs
        services/
          db.ts.ejs
      stores/
        user.store.ts.ejs
        settings.store.ts.ejs
      types/
        global.d.ts.ejs
      utils/
        formatDate.ts.ejs
        validators.ts.ejs
    auth/
      nuxt.config.ts.ejs
      pages/
        login.vue.ejs
        register.vue.ejs
      stores/
        auth.store.ts.ejs
      composables/
        useAuth.ts.ejs
      server/
        api/
          auth.login.post.ts.ejs
  apps/
    web/
      nuxt.config.ts.ejs
      pages/
        index.vue.ejs
      package.json.ejs
```

---

## **2️⃣ Contenus EJS minimaux**

### **root**

**`templates/root/.gitignore.ejs`**

```
node_modules
dist
.nuxt
output-project
```

**`templates/root/package.json.ejs`**

```json
{
  "name": "<%= projectName %>",
  "private": true,
  "scripts": {
    "dev": "nuxt dev apps/web",
    "build": "nuxt build apps/web",
    "preview": "nuxt preview apps/web"
  },
  "devDependencies": {
    "nuxt": "latest"
  }
}
```

**`templates/root/pnpm-workspace.yaml.ejs`**

```yaml
packages:
  - 'apps/*'
  - 'layers/*'
```

---

### **layers/core-ui**

**`nuxt.config.ts.ejs`**

```ts
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt'],
  components: [{ path: './components', pathPrefix: false }],
  plugins: [{ src: './plugins/dayjs' }]
});
```

**`assets/css/main.css.ejs`**

```css
:root { --brand: #3b82f6; }
body { margin: 0; font-family: system-ui, sans-serif; }
```

**`plugins/dayjs.ts.ejs`**

```ts
import dayjs from 'dayjs';
export default defineNuxtPlugin(() => ({ provide: { dayjs } }));
```

**`composables/useTheme.ts.ejs`**

```ts
export function useTheme() {
  const theme = useState<'light' | 'dark'>('theme', () => 'light');
  function toggle() { theme.value = theme.value === 'light' ? 'dark' : 'light'; }
  return { theme, toggle };
}
```

---

### **layers/core-app**

**`nuxt.config.ts.ejs`**

```ts
export default defineNuxtConfig({
  extends: ['../core-ui'],
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt']
});
```

**`app.vue.ejs`**

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

**`error.vue.ejs`**

```vue
<template>
  <div>
    <h1>Error: {{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
  </div>
</template>
<script setup>
defineProps({ error: Object });
</script>
```

**`app.config.ts.ejs`**

```ts
export default defineAppConfig({
  name: "<%= appName %>"
});
```

**`assets/css/main.css.ejs`**

```css
html, body { height: 100%; }
```

**`composables/useFetchApi.ts.ejs`**

```ts
export function useFetchApi(url: string, opts?: any) {
  const config = useRuntimeConfig();
  return $fetch(config.public.apiBase + url, opts);
}
```

**`composables/useAuth.ts.ejs`**

```ts
export function useAuth() {
  const user = useState('user', () => null);
  return { user };
}
```

**`layouts/default.vue.ejs`**

```vue
<template>
  <header>Default Layout</header>
  <slot />
</template>
```

**`layouts/admin.vue.ejs`**

```vue
<template>
  <header>Admin Layout</header>
  <slot />
</template>
```

**`middleware/auth.global.ts.ejs`**

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState('user').value;
  if (!user) return navigateTo('/login');
});
```

**`middleware/admin.ts.ejs`**

```ts
export default defineNuxtRouteMiddleware(() => {
  const user = useState('user').value;
  if (!user?.isAdmin) return navigateTo('/');
});
```

**`pages/index.vue.ejs`**

```vue
<template><h1>Home</h1></template>
```

**`pages/about.vue.ejs`**

```vue
<template><h1>About</h1></template>
```

**`pages/[slug].vue.ejs`**

```vue
<template><div>Slug: {{ $route.params.slug }}</div></template>
```

**`pages/admin/index.vue.ejs`**

```vue
<template><h1>Admin Dashboard</h1></template>
```

**`plugins/axios.ts.ejs`**

```ts
import axios from 'axios';
export default defineNuxtPlugin(() => ({ provide: { axios } }));
```

**`public/robots.txt.ejs`**

```
User-agent: *
Allow: /
```

**`public/favicon.ico.ejs`**

```
(empty or binary)
```

**`server/api/health.get.ts.ejs`**

```ts
export default defineEventHandler(() => ({ status: 'ok' }));
```

**`server/middleware/logs.ts.ejs`**

```ts
export default defineEventHandler((event) => {
  logInfo('Request:', event.node.req.url);
});
```

**`server/services/db.ts.ejs`**

```ts
export const db = {};
```

**`stores/user.store.ts.ejs`**

```ts
export const useUserStore = defineStore('user', {
  state: () => ({ user: null })
});
```

**`stores/settings.store.ts.ejs`**

```ts
export const useSettingsStore = defineStore('settings', {
  state: () => ({ darkMode: false })
});
```

**`types/global.d.ts.ejs`**

```ts
declare global {
  interface Window {
    myApp: any;
  }
}
```

**`utils/formatDate.ts.ejs`**

```ts
export function formatDate(date: Date) {
  return date.toISOString().split('T')[0];
}
```

**`utils/validators.ts.ejs`**

```ts
export const isEmail = (str: string) => /\S+@\S+\.\S+/.test(str);
```

---

### **layers/auth**

**`nuxt.config.ts.ejs`**

```ts
export default defineNuxtConfig({
  extends: ['../core-app']
});
```

**`pages/login.vue.ejs`**

```vue
<template><h1>Login</h1></template>
```

**`pages/register.vue.ejs`**

```vue
<template><h1>Register</h1></template>
```

**`stores/auth.store.ts.ejs`**

```ts
export const useAuthStore = defineStore('auth', {
  state: () => ({ token: null })
});
```

**`composables/useAuth.ts.ejs`**

```ts
export function useAuth() {
  const token = useState('token', () => null);
  return { token };
}
```

**`server/api/auth.login.post.ts.ejs`**

```ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return { token: "fake-jwt-token" };
});
```

---

### **apps/web**

**`nuxt.config.ts.ejs`**

```ts
export default defineNuxtConfig({
  extends: ['../../layers/auth']
});
```

**`pages/index.vue.ejs`**

```vue
<template><h1>Welcome to <%= appName %></h1></template>
```

**`package.json.ejs`**

```json
{
  "name": "<%= projectName %>-web",
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "preview": "nuxt preview"
  }
}
```

---

Si tu veux, je peux te faire **le script complet CLI (Commander + Inquirer + EJS)** qui prend ce mock + ces templates et génère le projet Nuxt multilayers en une commande.
Veux-tu que je te le prépare ?
