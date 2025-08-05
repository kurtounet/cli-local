Le code qui gère la génération des entités NestJS se trouve principalement dans le fichier
  src/features/frameworks/nestjs/templates/entities/nestjs-entity.template.ts.

  Ce fichier contient les fonctions clés suivantes :


   * nestjsEntityTemplate(entity: IEntityJson) : C'est la fonction principale qui prend en entrée une
     représentation JSON de l'entité et génère le contenu complet du fichier d'entité NestJS. Elle orchestre
     l'appel aux autres fonctions pour construire les colonnes et les relations.
   * getColumnsDecorators(column: IColumnJson) : Cette fonction génère les décorateurs TypeORM (@Column,
     @PrimaryGeneratedColumn, @CreateDateColumn, @UpdateDateColumn) pour chaque colonne de l'entité, en
     fonction de son type SQL et de ses propriétés (nullable, unique, etc.).
   * getRelationShips(entity: IEntityJson) : Elle parcourt toutes les relations définies pour l'entité et
     collecte les chaînes de relations ainsi que les imports nécessaires pour TypeORM et les entités liées.
   * buildRelation(relation: IRelation, currentEntityTableName: string) : Cette fonction construit la chaîne
     de caractères pour un décorateur de relation unique (@OneToOne, @OneToMany, @ManyToOne, @ManyToMany) et
     la propriété correspondante, en gérant également les @JoinColumn si nécessaire.
   * buildImportEntity(entityName: string) : Génère la déclaration d'importation pour une entité liée.


  Pour la génération des DTOs, le code se trouve dans
  src/features/parsersMdj/services/nestjs-generate-dto.service.ts (pour NestJS) et
  src/features/parsersMdj/services/symfony-generate-dto.service.ts (pour Symfony).


  Souhaitez-vous que je détaille une partie spécifique de ce code ou que je vous montre le contenu des
  fichiers de génération de DTO ?



  Merci pour le retour. Les erreurs sont très instructives. Il semble y avoir principalement deux types de
  problèmes dans le code généré :


   1. Noms de propriété incorrects dans les relations TypeORM : Dans les décorateurs @ManyToOne, la propriété  
      de l'entité cible est incorrectement au singulier alors qu'elle devrait être au pluriel (par exemple,    
      project.webhook au lieu de project.webhooks).
   2. Identifiants dupliqués : Des propriétés sont déclarées plusieurs fois dans les mêmes fichiers d'entité ou
       de DTO, comme calendarEvents dans user.entity.ts.


  Je vais me concentrer sur la correction du premier problème, qui est le plus répandu. Il provient très 
  certainement de la fonction getRelationDecorators dans le fichier nestjs-generate-entity.service.ts. La
  logique actuelle pour déterminer le nom de la propriété inverse dans la relation semble défaillante.   


  Je vais modifier la fonction getRelationDecorators pour corriger la façon dont le nom de la propriété
  inverse est généré. Je vais également améliorer la pluralisation pour gérer des cas comme "activity" qui
  devrait devenir "activities" et non "activitys".


  Voici le plan :
   1. Lire le contenu du fichier src/utils/convert.ts pour voir les fonctions de conversion disponibles.   
   2. Modifier la fonction getRelationDecorators dans
      src/features/parsersMdj/services/nestjs-generate-entity.service.ts pour générer les noms de relations
      inverses corrects et améliorer la pluralisation.
