Voici les **différentes façons d’installer Nuxt avec toutes les options disponibles**, notamment lors de l’utilisation de `npx nuxi init`, qui est la méthode recommandée pour Nuxt 3 / 4.

---

## 🧱 1. `npx nuxi init` – Initialisation du projet avec options

```bash
npx nuxi init mon-projet
cd mon-projet
npm install
npm run dev
```

🔧 Cette commande crée un projet Nuxt **minimaliste**. Pour ajouter des options, tu peux ensuite installer des **modules manuellement** (via `npm install` ou `nuxi add`).

---

## 🔧 2. Options supplémentaires (manuelles ou via modules)

Après création du projet Nuxt, tu peux ajouter des options avec :

### 👉 `nuxi add <module>`

Exemples :

```bash
npx nuxi add tailwindcss        # Ajoute TailwindCSS
npx nuxi add nuxt-icon          # Ajoute le module Nuxt Icon
npx nuxi add @nuxt/ui           # Ajoute Nuxt UI
npx nuxi add @pinia/nuxt        # Ajoute Pinia (gestion d’état)
npx nuxi add @nuxt/content      # Ajoute le CMS Nuxt Content
```

> 📦 Ces commandes configurent automatiquement `nuxt.config.ts`.

---

## 📚 3. Modules courants avec Nuxt

Tu peux aussi installer manuellement des modules selon tes besoins :

| Module         | Commande installation             | Utilité                                  |
| -------------- | --------------------------------- | ---------------------------------------- |
| TailwindCSS    | `npx nuxi add tailwindcss`        | Framework CSS                            |
| Nuxt UI        | `npx nuxi add @nuxt/ui`           | Composants UI + thème                    |
| Nuxt Content   | `npx nuxi add @nuxt/content`      | CMS basé sur Markdown                    |
| Pinia          | `npx nuxi add @pinia/nuxt`        | Gestion d’état                           |
| Auth Nuxt      | `npm install @sidebase/nuxt-auth` | Authentification                         |
| Nuxt Image     | `npm install @nuxt/image`         | Optimisation d’images                    |
| Nuxt SEO Utils | `npm install nuxt-seo-utils`      | SEO automatisé                           |
| Nuxt Devtools  | `npx nuxi add @nuxt/devtools`     | Devtools intégrés                        |
| Nuxt OG Image  | `npm install nuxt-og-image`       | Génération d'images pour réseaux sociaux |

---

## ⚙️ 4. Exemple de configuration `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/content',
    'nuxt-seo-utils',
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: '/api',
    },
  },
})
```

---

## 🐳 5. Avec Docker (option conteneur)

```bash
# Dockerfile
FROM node:20

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
```

---

## 🧪 6. Pour tester rapidement (sans rien installer)

```bash
npx nuxi init mon-projet && cd mon-projet && npm install && npm run dev
```

Puis ajoute les options via :

```bash
npx nuxi add tailwindcss
npx nuxi add @nuxt/ui
```

---

## 🔄 Résumé en une ligne :

```bash
npx nuxi init mon-projet && cd mon-projet && npm install && npx nuxi add tailwindcss @nuxt/ui @pinia/nuxt
```

Souhaites-tu un **template Nuxt complet avec toutes ces options activées** dès le départ ?
