Voici le code pour un **CRUD** complet sous **Nitro** en utilisant **Drizzle ORM**.

Drizzle est un ORM moderne, sans schéma généré, qui se concentre sur un typage fort et des requêtes optimisées. La structure de l'application reste la même, mais la couche de base de données (le repository) est réécrite pour utiliser Drizzle.

-----

### 1\. Structure du projet

La structure de fichiers est similaire à l'exemple précédent, avec quelques ajustements pour Drizzle.

```
mon-app-nitro-drizzle/
├── server/
│   ├── api/
│   │   ├── users/
│   │   │   ├── [id].delete.ts
│   │   │   ├── [id].get.ts
│   │   │   ├── [id].put.ts
│   │   │   ├── index.get.ts
│   │   │   └── index.post.ts
│   │   │   └── user.service.ts
│   │   │   └── user.repository.ts
│   ├── database/
│   │   ├── schema.ts      (Définition du schéma Drizzle)
│   │   └── index.ts       (Client de base de données)
│   ├── services/
│   │   └── user.service.ts
│   └── utils/
│       └── user.repository.ts
├── drizzle.config.ts
├── package.json
```

-----

### 2\. Le schéma Drizzle et le client (`server/db/schema.ts` et `server/db/index.ts`)

Contrairement à Prisma, le schéma est défini directement en TypeScript.

#### Schéma (`server/database/schema.ts`)

```typescript
// file: server/db/schema.ts

import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  email: text('email').unique().notNull(),
  name: text('name'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});
```

#### Client de base de données (`server/db/index.ts`)

```typescript
// file: server/db/index.ts

import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

const sqlite = new Database('sqlite.db');
export const db = drizzle(sqlite, { schema });
```

-----

### 3\. Le Repository (`server/utils/user.repository.ts`)

Cette couche utilise le client Drizzle (`db`) pour effectuer les opérations CRUD.

```typescript
// file: server/utils/user.repository.ts

import { db } from '../db';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';

export const userRepository = {
  // C: Créer un utilisateur
  create: async (data: { email: string; name?: string }) => {
    const result = await db.insert(users).values(data).returning();
    return result[0];
  },

  // R: Lire un utilisateur par ID
  findById: async (id: number) => {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  },

  // R: Lire un utilisateur par email
  findByEmail: async (email: string) => {
    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    return result[0];
  },

  // R: Lire tous les utilisateurs
  findAll: async () => {
    return db.select().from(users);
  },

  // U: Mettre à jour un utilisateur
  update: async (id: number, data: { name?: string; email?: string }) => {
    const result = await db.update(users).set(data).where(eq(users.id, id)).returning();
    return result[0];
  },

  // D: Supprimer un utilisateur
  delete: async (id: number) => {
    const result = await db.delete(users).where(eq(users.id, id)).returning();
    return result[0];
  },
};
```

-----

### 4\. Le Service (`server/services/user.service.ts`)

Cette couche de logique métier n'a besoin que d'une légère modification pour l'importation.

```typescript
// file: server/services/user.service.ts

import { userRepository } from '../utils/user.repository';

export const userService = {
  // ... Le reste du code du service est identique à l'exemple précédent ...
  // Il suffit d'importer userRepository et d'appeler ses méthodes
  async createUser(email: string, name?: string) {
    if (!email) throw new Error('Email is required.');
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) throw new Error('Email already exists.');
    return userRepository.create({ email, name });
  },

  async getAllUsers() { return userRepository.findAll(); },
  async getUserById(id: number) { return userRepository.findById(id); },
  async updateUser(id: number, data: { name?: string; email?: string }) {
    if (data.email) {
      const existingUser = await userRepository.findByEmail(data.email);
      if (existingUser && existingUser.id !== id) throw new Error('Email already exists.');
    }
    return userRepository.update(id, data);
  },
  async deleteUser(id: number) { return userRepository.delete(id); },
};
```

-----

### 5\. Les routes Nitro

Les routes sont exactement les mêmes que dans l'exemple avec Prisma. Elles interagissent avec le service, qui lui-même s'interface avec le repository Drizzle.

  - **`server/api/entity/routes/index.post.ts`**
  - **`server/api/entity/routes/index.get.ts`**
  - **`server/api/entity/routes/[id].get.ts`**
  - **`server/api/entity/routes/[id].put.ts`**
  - **`server/api/entity/routes/[id].delete.ts`**

Vous pouvez réutiliser le code des routes que j'ai fourni précédemment, car elles n'ont pas de dépendance directe avec l'ORM.

-----

### Configuration et exécution

1.  **Initialisation du projet :**
    ```bash
    npm init -y
    npm install nitro drizzle-orm better-sqlite3 typescript tsx
    npm install -D drizzle-kit
    ```
2.  **Créez le fichier `drizzle.config.ts`** pour les migrations :
    ```typescript
    // file: drizzle.config.ts
    import type { Config } from 'drizzle-kit';

    export default {
      schema: './server/db/schema.ts',
      out: './drizzle',
      driver: 'better-sqlite3',
      dbCredentials: {
        url: './sqlite.db',
      },
    } satisfies Config;
    ```
3.  **Mettez à jour le `package.json`** pour les scripts :
    ```json
    "scripts": {
      "dev": "npx nitropack dev",
      "build": "npx nitropack build",
      "migrate": "npx drizzle-kit migrate"
    }
    ```
4.  **Lancez les migrations** pour créer la table `users` :
    ```bash
    npm run migrate
    ```
5.  **Démarrez le serveur :**
    ```bash
    npm run dev
    ```