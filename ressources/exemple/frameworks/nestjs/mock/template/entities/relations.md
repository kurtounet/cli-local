Voici les templates **EJS** pour les **4 types de relations** dans **TypeORM** avec **NestJS**, en respectant la syntaxe
propre à TypeORM.

---

### 1️⃣ **OneToOne** (Relation Un-à-Un)

📌 **Exemple : Un `User` a une `Profile`**

#### 📝 **Template EJS (one-to-one.ejs)**

```ejs
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import <%= relatedEntity %> from './<%= relatedEntityFile %>';

@Entity('<%= entityName %>')
export class <%= entityClassName %> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => <%= relatedEntity %>, (relatedEntity) => relatedEntity.<%= inverseSide %>, { cascade: true })
  @JoinColumn()
  <%= relationName %>: <%= relatedEntity %>;
}
```

---

### 2️⃣ **OneToMany & ManyToOne** (Relation Un-à-Plusieurs)

📌 **Exemple : Un `User` peut avoir plusieurs `Posts`**

#### 📝 **Template EJS (one-to-many.ejs)**

```ejs
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import <%= relatedEntity %> from './<%= relatedEntityFile %>';

@Entity('<%= entityName %>')
export class <%= entityClassName %> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => <%= relatedEntity %>, (relatedEntity) => relatedEntity.<%= inverseSide %>, { cascade: true })
  <%= relationName %>: <%= relatedEntity %>[];
}
```

#### 📝 **Template EJS (many-to-one.ejs)**

```ejs
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import <%= relatedEntity %> from './<%= relatedEntityFile %>';

@Entity('<%= entityName %>')
export class <%= entityClassName %> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => <%= relatedEntity %>, (relatedEntity) => relatedEntity.<%= inverseSide %>)
  <%= relationName %>: <%= relatedEntity %>;
}
```

---

### 3️⃣ **ManyToMany** (Relation Plusieurs-à-Plusieurs)

📌 **Exemple : Un `Student` peut être dans plusieurs `Courses` et un `Course` peut avoir plusieurs `Students`**

#### 📝 **Template EJS (many-to-many.ejs)**

```ejs
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import <%= relatedEntity %> from './<%= relatedEntityFile %>';

@Entity('<%= entityName %>')
export class <%= entityClassName %> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => <%= relatedEntity %>, (relatedEntity) => relatedEntity.<%= inverseSide %>, { cascade: true })
  @JoinTable()
  <%= relationName %>: <%= relatedEntity %>[];
}
```

---

### 🔹 **Utilisation des Templates dans un Générateur CLI**

Dans ton **CLI Node.js**, tu peux injecter dynamiquement les variables :

- `<%= entityName %>` → `users`
- `<%= entityClassName %>` → `User`
- `<%= relatedEntity %>` → `Post`
- `<%= relatedEntityFile %>` → `post.entity`
- `<%= inverseSide %>` → `user`
- `<%= relationName %>` → `posts`

Si tu veux ajouter ces templates à ton générateur CLI, il te suffit de les sauvegarder sous forme de fichiers `.ejs` et
de les utiliser avec **EJS** (`ejs.renderFile`).

Besoin d’aide pour intégrer ces templates dans ta CLI ? 🚀
