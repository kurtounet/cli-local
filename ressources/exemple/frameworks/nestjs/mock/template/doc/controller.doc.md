D'accord ! Voici un **template EJS** pour **générer automatiquement ton contrôleur NestJS avec DTO et gestion des
erreurs**.

---

### **📝 Template EJS (`controller.ejs`)**

```ejs
import {
  Controller,
  Patch,
  Param,
  Body,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
  NotFoundException,
  InternalServerErrorException
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { <%= serviceName %> } from './<%= serviceFileName %>';
import { <%= dtoName %> } from './dto/<%= dtoFileName %>';
import { <%= entityName %> } from './entities/<%= entityFileName %>';

@ApiTags('<%= controllerName %>') // Documentation Swagger
@Controller('<%= routeName %>')
export class <%= className %> {
  constructor(private readonly <%= serviceVariable %>: <%= serviceName %>) {}

  @Patch(':id')
  @HttpCode(HttpStatus.OK) // Code HTTP correct pour une mise à jour
  @ApiOperation({ summary: 'Mise à jour partielle d’un élément' })
  @ApiResponse({ status: 200, description: 'Mise à jour réussie', type: <%= entityName %> })
  @ApiResponse({ status: 404, description: 'Élément non trouvé' })
  @ApiResponse({ status: 500, description: 'Erreur interne du serveur' })
  async patchUpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: <%= dtoName %>,
  ): Promise<{ message: string; data: <%= entityName %> }> {
    try {
      const item = await this.<%= serviceVariable %>.partialUpdate(id, data);

      if (!item) {
        throw new NotFoundException(`Élément avec l'ID ${id} non trouvé`);
      }

      return { message: 'Mise à jour réussie', data: item };
    } catch (error) {
      throw new InternalServerErrorException('Erreur lors de la mise à jour');
    }
  }
}
```

---

### **📌 Explication des variables dynamiques EJS**

| Variable                 | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| `<%= controllerName %>`  | Nom du contrôleur (ex: `Users`)                              |
| `<%= routeName %>`       | Nom de la route API (ex: `users`)                            |
| `<%= className %>`       | Nom de la classe du contrôleur (ex: `UsersController`)       |
| `<%= serviceName %>`     | Nom du service injecté (ex: `UserService`)                   |
| `<%= serviceFileName %>` | Nom du fichier service (ex: `user.service`)                  |
| `<%= serviceVariable %>` | Variable du service dans le constructeur (ex: `userService`) |
| `<%= dtoName %>`         | Nom du DTO utilisé (ex: `UpdateUserDto`)                     |
| `<%= dtoFileName %>`     | Nom du fichier DTO (ex: `update-user.dto`)                   |
| `<%= entityName %>`      | Nom de l'entité TypeORM (ex: `User`)                         |
| `<%= entityFileName %>`  | Nom du fichier entité (ex: `user.entity`)                    |

---

### **🚀 Génération d'un fichier via EJS en Node.js**

Si tu veux utiliser **EJS pour générer ton fichier**, voici comment faire avec `fs` et `ejs` :

#### **1️⃣ Installer `ejs` si ce n'est pas déjà fait**

```sh
npm install ejs
```

#### **2️⃣ Script Node.js pour générer le fichier**

```javascript
const fs = require('fs');
const ejs = require('ejs');

const templatePath = './templates/controller.ejs'; // Emplacement du template
const outputPath = './src/users/users.controller.ts'; // Où générer le fichier

const data = {
    controllerName: 'Users',
    routeName: 'users',
    className: 'UsersController',
    serviceName: 'UserService',
    serviceFileName: 'user.service',
    serviceVariable: 'userService',
    dtoName: 'UpdateUserDto',
    dtoFileName: 'update-user.dto',
    entityName: 'User',
    entityFileName: 'user.entity',
};

ejs.renderFile(templatePath, data, (err, result) => {
    if (err) {
        console.error('Erreur de rendu EJS :', err);
        return;
    }

    fs.writeFileSync(outputPath, result);
    console.log('✅ Fichier généré avec succès :', outputPath);
});
```

---

### **🛠 Résumé**

1️⃣ **Utilisation d'un template EJS** pour le **contrôleur NestJS**.  
2️⃣ **Remplacement dynamique** des noms (`UsersController`, `UserService`, `UpdateUserDto`, etc.).  
3️⃣ **Exécution d'un script Node.js** pour générer le fichier `.ts`.

Avec ce système, tu peux automatiser la **génération des fichiers** de ton API **NestJS** sans perdre de temps ! 🚀💡
