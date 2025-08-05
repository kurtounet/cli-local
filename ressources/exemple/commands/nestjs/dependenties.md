Pour une application **NestJS**, voici les **packages essentiels** à installer selon ton besoin :

---

### **1. Installation de base**

Installe NestJS et son CLI :

```sh
npm i -g @nestjs/cli
nest new my-app
cd my-app
```

---

### **2. Dépendances essentielles**

#### **Framework et Core**

```sh
npm i @nestjs/common @nestjs/core @nestjs/platform-express rxjs
```

- `@nestjs/common` → Contient les éléments de base (Controllers, Services, Guards…).
- `@nestjs/core` → Core du framework.
- `@nestjs/platform-express` → Adapte NestJS à Express.js (par défaut).
- `rxjs` → Gestion des flux réactifs.

#### **TypeScript (si besoin)**

```sh
npm i --save-dev @nestjs/cli @nestjs/schematics @nestjs/testing typescript ts-node
```

---

### **3. ORM et Base de données**

#### **TypeORM (SQL)**

```sh
npm i @nestjs/typeorm typeorm mysql2
```

Ou pour PostgreSQL :

```sh
npm i @nestjs/typeorm typeorm pg
```

#### **Prisma (alternative à TypeORM)**

```sh
npm i @nestjs/prisma @prisma/client
npx prisma init
```

#### **Mongoose (MongoDB)**

```sh
npm i @nestjs/mongoose mongoose
```

---

### **4. Authentification & Sécurité**

#### **JWT + Passport.js**

```sh
npm i @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt
npm i --save-dev @types/passport-jwt @types/bcrypt
```

- `@nestjs/jwt` → Gestion des tokens JWT.
- `passport-jwt` → Stratégie JWT pour Passport.js.
- `bcrypt` → Hashage des mots de passe.

#### **Validation des données**

```sh
npm i class-validator class-transformer
```

- `class-validator` → Valide les DTOs avec des décorateurs (`@IsString()`, `@IsEmail()`…).
- `class-transformer` → Transforme les objets JSON en classes TypeScript.

---

### **5. Gestion des Configurations**

```sh
npm i @nestjs/config dotenv
```

Permet de gérer un fichier `.env`.

---

### **6. Logger et Monitoring**

```sh
npm i @nestjs/pino pino pino-pretty
```

- `pino` → Logger performant.
- `pino-pretty` → Formatage lisible des logs.

---

### **7. API REST & GraphQL**

#### **GraphQL (Apollo)**

```sh
npm i @nestjs/graphql @nestjs/apollo graphql graphql-tools apollo-server-express
```

#### **Swagger (Documentation API)**

```sh
npm i @nestjs/swagger swagger-ui-express
```

---

### **8. Websockets (Temps réel)**

```sh
npm i @nestjs/websockets @nestjs/platform-socket.io socket.io
```

---

### **9. Tâches Cron & Background Jobs**

#### **Tâches planifiées (CronJobs)**

```sh
npm i @nestjs/schedule
```

#### **Queue (Bull pour Redis)**

```sh
npm i @nestjs/bull bull redis
```

---

### **10. Cache & Optimisation**

```sh
npm i cache-manager
```

Ou avec Redis :

```sh
npm i cache-manager ioredis
```

---

### **11. Gestion des fichiers (Upload & Stockage)**

```sh
npm i @nestjs/platform-express multer
```

---

### **12. Tests (Jest)**

```sh
npm i --save-dev jest @nestjs/testing ts-jest @types/jest
```

---

### **Résumé des installations courantes**

📌 Commande rapide pour une **API NestJS classique** (PostgreSQL, Auth, Swagger, etc.) :

```sh
npm i @nestjs/common @nestjs/core @nestjs/platform-express rxjs \
    @nestjs/typeorm typeorm pg \
    class-validator class-transformer \
    @nestjs/config dotenv \
    @nestjs/swagger swagger-ui-express \
    @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt \
    @nestjs/schedule \
    @nestjs/websockets @nestjs/platform-socket.io socket.io
```

💡 Tu peux ajouter ou retirer des packages en fonction de ton projet ! 🚀
