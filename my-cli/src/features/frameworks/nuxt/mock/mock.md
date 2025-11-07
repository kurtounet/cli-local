Parfait. Voici des **templates de fichiers** pret a ecrire par ta CLI.

* Code en **anglais**, explications en **francais sans accents**.
* Minimalistes mais productifs (Nuxt 3/4 compatibles).

---

# layers/core-ui

## `layers/core-ui/nuxt.config.ts`

```ts
// layers/core-ui/nuxt.config.ts
export default defineNuxtConfig({
  extends: [],
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt'],
  components: [{ path: './components', pathPrefix: false }],
  plugins: [{ src: './plugins/dayjs' }],
});
```

## `layers/core-ui/assets/css/main.css`

```css
:root { --brand: #3b82f6; }
html, body { height: 100%; }
body { margin: 0; font-family: system-ui, sans-serif; }
```

## `layers/core-ui/plugins/dayjs.ts`

```ts
import dayjs from 'dayjs';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      dayjs,
    },
  };
});
```

## `layers/core-ui/composables/useTheme.ts`

```ts
export function useTheme() {
  const theme = useState<'light' | 'dark'>('theme', () => 'light');
  function toggle() { theme.value = theme.value === 'light' ? 'dark' : 'light'; }
  return { theme, toggle };
}
```

---

# layers/core-app (squelette complet)

## `layers/core-app/nuxt.config.ts`

```ts
export default defineNuxtConfig({
  extends: ['../core-ui'],
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    // server only
    dbUrl: process.env.DB_URL || '',
    // public
    public: { apiBase: '/api' },
  },
});
```

## `layers/core-app/app.vue`

```vue
<script setup lang="ts">
const { theme } = useTheme();
useHead({ bodyAttrs: { 'data-theme': theme } });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

## `layers/core-app/error.vue`

```vue
<script setup lang="ts">
const props = defineProps<{ error: any }>();
const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div style="padding:2rem">
    <h1>Oops, something went wrong</h1>
    <pre>{{ props.error?.message }}</pre>
    <button @click="handleError">Go Home</button>
  </div>
</template>
```

## `layers/core-app/app.config.ts`

```ts
export default defineAppConfig({
  ui: { primary: 'brand' },
});
```

## `layers/core-app/plugins/axios.ts`

```ts
import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const instance = axios.create({ baseURL: config.public.apiBase });

  instance.interceptors.request.use((req) => {
    const token = useCookie('token').value;
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
  });

  return { provide: { axios: instance } };
});

declare module '#app' {
  interface NuxtApp { $axios: ReturnType<typeof axios.create>; }
}
declare module 'vue' {
  interface ComponentCustomProperties { $axios: ReturnType<typeof axios.create>; }
}
```

## `layers/core-app/middleware/auth.global.ts`

```ts
export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token').value;
  const isProtected = to.path.startsWith('/admin');
  if (isProtected && !token) return navigateTo('/login');
});
```

## `layers/core-app/middleware/admin.ts`

```ts
export default defineNuxtRouteMiddleware(() => {
  const user = useState<{ role?: string }>('user');
  if (user.value?.role !== 'admin') return abortNavigation();
});
```

## `layers/core-app/composables/useFetchApi.ts`

```ts
type FetchOptions<T> = Omit<Parameters<typeof $fetch<T>>[1], 'baseURL'>;

export function useFetchApi() {
  const config = useRuntimeConfig();
  async function get<T>(url: string, opts?: FetchOptions<T>) {
    return $fetch<T>(url, { ...opts, baseURL: config.public.apiBase });
  }
  async function post<T>(url: string, body?: any, opts?: FetchOptions<T>) {
    return $fetch<T>(url, { ...opts, method: 'POST', body, baseURL: config.public.apiBase });
  }
  async function put<T>(url: string, body?: any, opts?: FetchOptions<T>) {
    return $fetch<T>(url, { ...opts, method: 'PUT', body, baseURL: config.public.apiBase });
  }
  async function del<T>(url: string, opts?: FetchOptions<T>) {
    return $fetch<T>(url, { ...opts, method: 'DELETE', baseURL: config.public.apiBase });
  }
  return { get, post, put, del };
}
```

## `layers/core-app/composables/useAuth.ts`

```ts
interface Credentials { email: string; password: string; }
interface Me { id: number; email: string; role?: string; }

export function useAuth() {
  const { post, get } = useFetchApi();
  const user = useState<Me | null>('user', () => null);
  const token = useCookie<string | null>('token');

  async function login(data: Credentials) {
    const res = await post<{ token: string; me: Me }>('/auth/login', data);
    token.value = res.token;
    user.value = res.me;
  }
  async function logout() {
    token.value = null;
    user.value = null;
    await post('/auth/logout');
  }
  async function fetchMe() {
    user.value = await get<Me>('/auth/me');
  }

  return { user, token, login, logout, fetchMe, isLoggedIn: computed(() => !!token.value) };
}
```

## `layers/core-app/layouts/default.vue`

```vue
<template>
  <div>
    <header style="padding:1rem;border-bottom:1px solid #eee">
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/about">About</NuxtLink> |
      <NuxtLink to="/admin">Admin</NuxtLink>
    </header>
    <main><slot /></main>
  </div>
</template>
```

## `layers/core-app/layouts/admin.vue`

```vue
<template>
  <div>
    <header style="padding:1rem;background:#f3f4f6">Admin</header>
    <main><slot /></main>
  </div>
</template>
```

## `layers/core-app/pages/index.vue`

```vue
<script setup lang="ts">
const { theme, toggle } = useTheme();
</script>

<template>
  <section style="padding:2rem">
    <h1>Welcome</h1>
    <p>Theme: {{ theme }}</p>
    <button @click="toggle">Toggle theme</button>
  </section>
</template>
```

## `layers/core-app/pages/about.vue`

```vue
<template>
  <section style="padding:2rem">
    <h1>About</h1>
    <p>This is the base layer page.</p>
  </section>
</template>
```

## `layers/core-app/pages/admin/index.vue`

```vue
<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['auth', 'admin'] });
</script>

<template>
  <section style="padding:2rem">
    <h1>Admin dashboard</h1>
  </section>
</template>
```

## `layers/core-app/pages/[slug].vue`

```vue
<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div style="padding:2rem">
    <h1>Dynamic page: {{ $route.params.slug }}</h1>
  </div>
</template>
```

## `layers/core-app/public/robots.txt`

```
User-agent: *
Disallow:
```

## `layers/core-app/server/api/health.get.ts`

```ts
export default defineEventHandler(() => {
  return { status: 'ok', time: new Date().toISOString() };
});
```

## `layers/core-app/server/middleware/logs.ts`

```ts
export default defineEventHandler((event) => {
  const start = Date.now();
  addResponseHeader(event, 'x-powered-by', 'nuxt-nitro');
  setResponseHeader(event, 'x-request-id', crypto.randomUUID());
  event.node.res.on('finish', () => {
    const ms = Date.now() - start;
    console.info(`${getRequestURL(event).pathname} - ${event.node.res.statusCode} - ${ms}ms`);
  });
});
```

## `layers/core-app/server/services/db.ts`

```ts
// Example: simple in-memory DB stub. Replace with real DB client.
type User = { id: number; email: string; role?: string };
const users: User[] = [{ id: 1, email: 'admin@example.com', role: 'admin' }];

export const db = {
  user: {
    findByEmail(email: string) { return users.find(u => u.email === email) || null; },
    findById(id: number) { return users.find(u => u.id === id) || null; },
  },
};
```

## `layers/core-app/stores/user.store.ts`

```ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const me = ref<{ id: number; email: string; role?: string } | null>(null);
  return { me };
});
```

## `layers/core-app/stores/settings.store.ts`

```ts
import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', () => {
  const sidebar = ref(true);
  function toggleSidebar() { sidebar.value = !sidebar.value; }
  return { sidebar, toggleSidebar };
});
```

## `layers/core-app/types/global.d.ts`

```ts
export {};
declare global {
  interface Window {
    __APP_VERSION__?: string;
  }
}
```

## `layers/core-app/utils/formatDate.ts`

```ts
export function formatDate(input: string | number | Date) {
  const d = new Date(input);
  return d.toISOString();
}
```

## `layers/core-app/utils/validators.ts`

```ts
export const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
```

---

# layers/auth (feature)

## `layers/auth/nuxt.config.ts`

```ts
export default defineNuxtConfig({
  extends: ['../core-app'],
  runtimeConfig: {
    public: { authEndpoint: '/auth' },
  },
});
```

## `layers/auth/pages/login.vue`

```vue
<script setup lang="ts">
const { login } = useAuth();
const form = reactive({ email: '', password: '' });
async function submit() { await login(form); return navigateTo('/admin'); }
</script>

<template>
  <div style="padding:2rem;max-width:420px;margin:auto">
    <h1>Login</h1>
    <input v-model="form.email" placeholder="Email" />
    <input v-model="form.password" type="password" placeholder="Password" />
    <button @click="submit">Sign in</button>
  </div>
</template>
```

## `layers/auth/pages/register.vue`

```vue
<template>
  <div style="padding:2rem">Register page (stub)</div>
</template>
```

## `layers/auth/stores/auth.store.ts`

```ts
import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', () => {
  const token = useCookie<string | null>('token');
  return { token };
});
```

## `layers/auth/composables/useAuth.ts`

```ts
interface Credentials { email: string; password: string; }
interface Me { id: number; email: string; role?: string; }

export function useAuth() {
  const { post, get } = useFetchApi();
  const token = useCookie<string | null>('token');
  const me = useState<Me | null>('me', () => null);

  async function login(data: Credentials) {
    const { token: tkn } = await post<{ token: string }>('/auth/login', data);
    token.value = tkn;
    await fetchMe();
  }
  async function fetchMe() { me.value = await get<Me>('/auth/me'); }
  async function logout() { token.value = null; await post('/auth/logout'); }

  return { token, me, login, logout, fetchMe };
}
```

## `layers/auth/server/api/auth.login.post.ts`

```ts
export default defineEventHandler(async (event) => {
  const body = await readBody<{ email: string; password: string }>(event);
  // TODO: validate and check real DB
  if (!body?.email || !body?.password) {
    throw createError({ statusCode: 400, statusMessage: 'Bad Request' });
  }
  // fake token
  return { token: 'dev-token' };
});
```

---

# apps/web (app finale)

## `apps/web/nuxt.config.ts`

```ts
export default defineNuxtConfig({
  extends: [
    '../../layers/core-ui',
    '../../layers/core-app',
    '../../layers/auth',
  ],
  runtimeConfig: {
    public: {
      appName: 'My SaaS',
      apiBase: '/api',
    },
  },
});
```

## `apps/web/pages/index.vue`

```vue
<template>
  <section style="padding:2rem">
    <h1>Web app shell</h1>
    <NuxtLink to="/login">Login</NuxtLink>
  </section>
</template>
```

---

# racine workspace

## `pnpm-workspace.yaml`

```yaml
packages:
  - 'layers/*'
  - 'apps/*'
```

## `package.json`

```json
{
  "private": true,
  "name": "my-workspace",
  "workspaces": [
    "layers/*",
    "apps/*"
  ],
  "scripts": {
    "dev": "nuxt dev apps/web",
    "build": "nuxt build apps/web",
    "preview": "nuxt preview apps/web"
  },
  "devDependencies": {
    "nuxt": "^3.13.0",
    "@pinia/nuxt": "^0.5.5",
    "typescript": "^5.5.4"
  }
}
```

---

Tu veux que je te **convertisse ces templates en ton format JSON mock** (tableau d objets avec `_type`, `name`, `pathInProject`, et `content` pour les fichiers) pour que ta CLI ecrive tout d un coup ?
