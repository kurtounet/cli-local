Voici une version améliorée de votre service avec des fonctions plus modulaires et une meilleure séparation des responsabilités :Voici les améliorations apportées à votre service :

## Fonctions principales

- **`symfonyGenerateEntityService()`** : Fonction principale inchangée dans l'interface
- **`generateEntityContent()`** : Orchestrateur pour générer tout le contenu
- **`generatePropertiesContent()`** : Génère uniquement les propriétés
- **`generateAccessorsContent()`** : Génère uniquement les accesseurs
- **`generateRelationsContent()`** : Génère uniquement les relations

## Nouvelles fonctionnalités

- **`validateEntity()`** : Valide une entité avant génération
- **`symfonyGenerateMultipleEntitiesService()`** : Génère plusieurs entités d'un coup
- **`createBaseEntity()`** : Crée une entité de base avec des colonnes par défaut
- **`getEntityStats()`** : Obtient des statistiques sur une entité

## Fonctions utilitaires

- **`getEntityPaths()`** : Centralise la gestion des chemins
- **`saveEntityFiles()`** : Sépare la logique de sauvegarde
- **`generateEntityWithValidation()`** : Génère avec validation et gestion d'erreurs

## Avantages de cette approche

1. **Modularité** : Chaque fonction a une responsabilité claire
2. **Testabilité** : Fonctions plus petites et focalisées
3. **Réutilisabilité** : Possibilité de générer des parties spécifiques
4. **Robustesse** : Validation et gestion d'erreurs améliorées
5. **Maintenance** : Code plus facile à maintenir et étendre

Cette structure vous permet d'utiliser les fonctions individuellement selon vos besoins tout en conservant la compatibilité avec votre code existant.


import path from 'path';
import { symfonyGenerateAccessorsService } from './symfony-generate-accessors.service';
import { IColumnJson, IEntityJson, IRelation, IRelationshipJson } from '@parsersMdj/interfaces/entity-json.model';
import { buildAndsaveFile } from '@utils/file-utils';
import { snakeToCamel } from '@utils/convert';
import { symfonyEntityRepositoryTemplate } from '../templates/symfony-repository.template';
import { symfonyCreateAttributeORM } from './commun/symfony-create-attribute-orm.service';
import { symfonyGetPropertyType } from '../utils/mapping';
import { symfonyEntityTemplate } from '../templates/symfony-entity.template';
import { INDENT } from '../constant/symfony-constants.constant';
import { symfonyGenerateRelationShipsService } from './symfony-generate-relationships.service';

const { execSync } = require('child_process');
const { spawnSync } = require('child_process');

interface IProperty {
  attributeValidation: string;
  attributeOrm: string;
  name: string;
  type: string;
}

interface IEntityGenerationResult {
  properties: string;
  accessors: string;
  relations: string;
}

// Fonction principale pour générer une entité
export function symfonyGenerateEntityService(frameworkPath: string, entity: IEntityJson): void {
  const paths = getEntityPaths(frameworkPath);
  const generatedContent = generateEntityContent(entity);
  
  saveEntityFiles(paths, entity, generatedContent);
}

// Obtenir les chemins des dossiers Entity et Repository
function getEntityPaths(frameworkPath: string): { entity: string; repository: string } {
  return {
    entity: path.join(frameworkPath, 'src', 'Entity'),
    repository: path.join(frameworkPath, 'src', 'Repository')
  };
}

// Générer tout le contenu de l'entité
function generateEntityContent(entity: IEntityJson): IEntityGenerationResult {
  const properties = generatePropertiesContent(entity);
  const accessors = generateAccessorsContent(entity);
  const relations = generateRelationsContent(entity);
  
  return { properties, accessors, relations };
}

// Générer le contenu des propriétés
function generatePropertiesContent(entity: IEntityJson): string {
  if (!entity.columns) return '';
  
  const n = '\n';
  return entity.columns
    .filter(column => column.name !== 'id')
    .map(column => {
      const attributeOrm = symfonyCreateAttributeORM(column.name, column.typeSql, column.length);
      const property = getProperty(entity.nameCamelCase, column.name, column.typeSql);
      return `${attributeOrm}${n}${property}${n}${n}`;
    })
    .join('');
}

// Générer le contenu des accesseurs
function generateAccessorsContent(entity: IEntityJson): string {
  if (!entity.columns) return '';
  
  return entity.columns
    .filter(column => column.name !== 'id')
    .map(column => symfonyGenerateAccessorsService(column.name, column.typeSql))
    .join('');
}

// Générer le contenu des relations
function generateRelationsContent(entity: IEntityJson): string {
  if (!entity.relationships) return '';
  
  return entity.relationships
    .map(relationship => symfonyGenerateRelationShipsService(relationship))
    .join('');
}

// Sauvegarder les fichiers d'entité et de repository
function saveEntityFiles(
  paths: { entity: string; repository: string },
  entity: IEntityJson,
  content: IEntityGenerationResult
): void {
  const entityFilePath = `${paths.entity}/${entity.namePascalCase}.php`;
  const repositoryFilePath = `${paths.repository}/${entity.namePascalCase}Repository.php`;
  
  buildAndsaveFile(
    entityFilePath,
    symfonyEntityTemplate(entity.namePascalCase, content.properties, content.accessors, content.relations)
  );
  
  buildAndsaveFile(
    repositoryFilePath,
    symfonyEntityRepositoryTemplate(entity)
  );
}

// Générer une propriété PHP
export function getProperty(entityName: string, propName: string, type: string): string {
  const typeProperty = symfonyGetPropertyType(type);
  return `${INDENT}${INDENT}private ?${typeProperty} $${snakeToCamel(propName)} = null;`;
}

// Valider une entité avant génération
function validateEntity(entity: IEntityJson): string[] {
  const errors: string[] = [];
  
  if (!entity.namePascalCase) {
    errors.push('Le nom de l\'entité (namePascalCase) est requis');
  }
  
  if (!entity.columns || entity.columns.length === 0) {
    errors.push('L\'entité doit avoir au moins une colonne');
  }
  
  if (entity.columns) {
    entity.columns.forEach((column, index) => {
      if (!column.name) {
        errors.push(`Colonne ${index}: le nom est requis`);
      }
      if (!column.typeSql) {
        errors.push(`Colonne ${index}: le type SQL est requis`);
      }
    });
  }
  
  return errors;
}

// Générer plusieurs entités d'un coup
export function symfonyGenerateMultipleEntitiesService(
  frameworkPath: string, 
  entities: IEntityJson[]
): void {
  entities.forEach(entity => {
    const errors = validateEntity(entity);
    
    if (errors.length > 0) {
      console.error(`Erreurs pour l'entité ${entity.namePascalCase}:`, errors);
      return;
    }
    
    try {
      symfonyGenerateEntityService(frameworkPath, entity);
      logInfo(`Entité ${entity.namePascalCase} générée avec succès`);
    } catch (error) {
      console.error(`Erreur lors de la génération de l'entité ${entity.namePascalCase}:`, error);
    }
  });
}

// Générer seulement les relations d'une entité
export function generateEntityRelationsOnly(entity: IEntityJson): string {
  return generateRelationsContent(entity);
}

// Générer seulement les propriétés d'une entité
export function generateEntityPropertiesOnly(entity: IEntityJson): string {
  return generatePropertiesContent(entity);
}

// Générer seulement les accesseurs d'une entité
export function generateEntityAccessorsOnly(entity: IEntityJson): string {
  return generateAccessorsContent(entity);
}

// Obtenir les statistiques d'une entité
function getEntityStats(entity: IEntityJson): {
  columnsCount: number;
  relationsCount: number;
  hasId: boolean;
} {
  return {
    columnsCount: entity.columns?.length || 0,
    relationsCount: entity.relationships?.length || 0,
    hasId: entity.columns?.some(col => col.name === 'id') || false
  };
}

// Créer une entité de base avec des colonnes par défaut
export function createBaseEntity(
  name: string,
  columns: Omit<IColumnJson, 'name' | 'typeSql'>[] = []
): IEntityJson {
  const defaultColumns: IColumnJson[] = [
    { name: 'id', typeSql: 'int', length: null },
    ...columns.map(col => ({ name: col.name || '', typeSql: col.typeSql || 'string', length: col.length }))
  ];
  
  return {
    namePascalCase: name,
    nameCamelCase: name.charAt(0).toLowerCase() + name.slice(1),
    columns: defaultColumns,
    relationships: []
  };
}

// Exemple d'utilisation avec validation
export function generateEntityWithValidation(frameworkPath: string, entity: IEntityJson): boolean {
  const errors = validateEntity(entity);
  
  if (errors.length > 0) {
    console.error('Erreurs de validation:', errors);
    return false;
  }
  
  const stats = getEntityStats(entity);
  logInfo(`Génération de l'entité ${entity.namePascalCase}:`, stats);
  
  try {
    symfonyGenerateEntityService(frameworkPath, entity);
    logInfo('Entité générée avec succès');
    return true;
  } catch (error) {
    console.error('Erreur lors de la génération:', error);
    return false;
  }
}