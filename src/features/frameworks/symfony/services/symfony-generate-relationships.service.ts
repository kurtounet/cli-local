import { IRelation } from "@parsersMdj/models/entity-json.model";
import { snakeToCamel, snakeToPascal } from "@utils/convert";
import { logInfo } from "@utils/logger";

/**
 *
 * @param relationships
 */
export function symfonyGenerateRelationShipsService(relationships: IRelation) {
  return generatePhpAttribute(relationships);
}
// Fonction principale pour générer les attributs Doctrine
/**
 *
 * @param relation
 */
function generatePhpAttribute(relation: IRelation): string {
  const { relationType } = relation;

  switch (relationType) {
    case "OneToOne":
      return generateOneToOne(relation);

    case "OneToMany":
      return generateOneToMany(relation);

    case "ManyToOne":
      return generateManyToOne(relation);

    case "ManyToMany":
      return generateManyToMany(relation);

    case "Unknown Relation":
      return "";

    default:
      throw new Error(`Type de relation non supporté: ${relationType}`);
  }
}

// Génération OneToOne
/**
 *
 * @param relation
 */
function generateOneToOne(relation: IRelation): string {
  const { relationName, foreignKeySource, target, owner } = relation;

  if (owner) {
    return `#[ORM\\OneToOne(targetEntity: ${snakeToPascal(target)}::class, inversedBy: '${getInversePropertyName(relation)}')] #[ORM\\JoinColumn(nullable: false)] private ?${snakeToCamel(target)} $${relationName} = null; #[ORM\\OneToOne(targetEntity: ${snakeToPascal(target)}::class, inversedBy: '${getInversePropertyName(relation)}')]
#[ORM\\JoinColumn(nullable: false)]
private ?${snakeToPascal(target)} $${snakeToCamel(target)} = null;\n`;
  } else {
    return `#[ORM\\OneToOne(targetEntity: ${snakeToPascal(target)}::class, mappedBy: '${getInversePropertyName(relation)}')]
private ?${snakeToPascal(target)} $${snakeToCamel(foreignKeySource.replace(/_id$/, ""))} = null;\n`;
  }
}

// Génération OneToMany
/**
 *
 * @param relation
 */
function generateOneToMany(relation: IRelation): string {
  const { relationName, foreignKeySource, target } = relation;

  return `#[ORM\\OneToMany(targetEntity: ${snakeToPascal(target)}::class, mappedBy: '${getInversePropertyName(relation)}')]
private Collection $${snakeToCamel(foreignKeySource.replace(/_id$/, ""))};\n`;
}

// Génération ManyToOne
/**
 *
 * @param relation
 */
function generateManyToOne(relation: IRelation): string {
  const { relationName, foreignKeySource, target } = relation;

  return `#[ORM\\ManyToOne(targetEntity: ${snakeToPascal(target)}::class, inversedBy: '${getInversePropertyName(relation)}')]
#[ORM\\JoinColumn(nullable: false)]
private ?${snakeToPascal(target)} $${snakeToCamel(foreignKeySource.replace(/_id$/, ""))} = null;\n`;
}

// Génération ManyToMany
/**
 *
 * @param relation
 */
function generateManyToMany(relation: IRelation): string {
  const { relationName, foreignKeySource, target, owner } = relation;

  if (owner) {
    return `#[ORM\\ManyToMany(targetEntity: ${snakeToPascal(target)}::class, inversedBy: '${getInversePropertyName(relation)}')]
private Collection $${snakeToCamel(foreignKeySource.replace(/_id$/, ""))};`;
  } else {
    return `#[ORM\\ManyToMany(targetEntity: ${snakeToPascal(target)}::class, mappedBy: '${getInversePropertyName(relation)}')]
private Collection $${snakeToCamel(foreignKeySource.replace(/_id$/, ""))};`;
  }
}

// Déterminer le nom de la propriété inverse
/**
 *
 * @param relation
 */
function getInversePropertyName(relation: IRelation): string {
  const { source, relationType } = relation;

  if (relationType === "OneToMany") {
    return source.toLowerCase();
  } else if (relationType === "ManyToOne") {
    return source.toLowerCase() + "s";
  } else if (relationType === "OneToOne") {
    return source.toLowerCase();
  } else if (relationType === "ManyToMany") {
    return source.toLowerCase() + "s";
  }

  return source.toLowerCase();
}

// Générer les getters/setters
/**
 *
 * @param relation
 */
function generateGettersSetters(relation: IRelation): string {
  const { relationName, target, relationType } = relation;

  if (relationType === "OneToOne" || relationType === "ManyToOne") {
    return generateSinglePropertyAccessors(relationName, target);
  } else {
    return generateCollectionAccessors(relationName, target);
  }
}

// Accesseurs pour propriétés simples
/**
 *
 * @param propertyName
 * @param target
 */
function generateSinglePropertyAccessors(
  propertyName: string,
  target: string,
): string {
  const capitalizedName =
    propertyName.charAt(0).toUpperCase() + propertyName.slice(1);

  return `public function get${capitalizedName}(): ?${target}
{
    return $this->${propertyName};
}

public function set${capitalizedName}(?${target} $${propertyName}): static
{
    $this->${propertyName} = $${propertyName};
    return $this;
}`;
}

// Accesseurs pour collections
/**
 *
 * @param propertyName
 * @param target
 */
function generateCollectionAccessors(
  propertyName: string,
  target: string,
): string {
  const capitalizedName =
    propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
  const singularName = propertyName.endsWith("s")
    ? propertyName.slice(0, -1)
    : propertyName;
  const capitalizedSingular =
    singularName.charAt(0).toUpperCase() + singularName.slice(1);

  return `/**
 * @return Collection<int, ${target}>
 */
public function get${capitalizedName}(): Collection
{
    return $this->${propertyName};
}

public function add${capitalizedSingular}(${target} $${singularName}): static
{
    if (!$this->${propertyName}->contains($${singularName})) {
        $this->${propertyName}->add($${singularName});
    }
    return $this;
}

public function remove${capitalizedSingular}(${target} $${singularName}): static
{
    $this->${propertyName}->removeElement($${singularName});
    return $this;
}`;
}

// Générer le constructeur pour les collections
/**
 *
 * @param relations
 */
function generateConstructor(relations: IRelation[]): string {
  const collectionsRelations = relations.filter(
    (r) => r.relationType === "OneToMany" || r.relationType === "ManyToMany",
  );

  if (collectionsRelations.length === 0) {
    return "";
  }

  let constructor = `public function __construct()
{
`;

  collectionsRelations.forEach((relation) => {
    constructor += `    $this->${relation.relationName} = new ArrayCollection();\n`;
  });

  constructor += `}`;

  return constructor;
}

// Générer une entité complète
/**
 *
 * @param entityName
 * @param relations
 */
function generateCompleteEntity(
  entityName: string,
  relations: IRelation[],
): string {
  const entityRelations = relations.filter((r) => r.source === entityName);

  let entityCode = `<?php

namespace App\\Entity;

use Doctrine\\Common\\Collections\\ArrayCollection;
use Doctrine\\Common\\Collections\\Collection;
use Doctrine\\ORM\\Mapping as ORM;

#[ORM\\Entity]
class ${entityName}
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

`;

  // Générer les propriétés des relations
  entityRelations.forEach((relation) => {
    entityCode += `    ${generatePhpAttribute(relation)}\n\n`;
  });

  // Générer le constructeur si nécessaire
  const constructor = generateConstructor(entityRelations);
  if (constructor) {
    entityCode += `    ${constructor}\n\n`;
  }

  // Générer les getters/setters
  entityCode += `    public function getId(): ?int
    {
        return $this->id;
    }

`;

  entityRelations.forEach((relation) => {
    entityCode += `    ${generateGettersSetters(relation)}\n\n`;
  });

  entityCode += "}";

  return entityCode;
}

// Générer toutes les entités d'un schéma
/**
 *
 * @param relations
 */
function generateAllEntities(relations: IRelation[]): Record<string, string> {
  const entities: Record<string, string> = {};
  const entityNames = [...new Set(relations.map((r) => r.source))];

  entityNames.forEach((entityName) => {
    entities[entityName] = generateCompleteEntity(entityName, relations);
  });

  return entities;
}

// Valider les relations
/**
 *
 * @param relations
 */
function validateRelations(relations: IRelation[]): string[] {
  const errors: string[] = [];

  relations.forEach((relation, index) => {
    if (!relation.relationName) {
      errors.push(`Relation ${index}: relationName est requis`);
    }

    if (
      !["OneToOne", "OneToMany", "ManyToOne", "ManyToMany"].includes(
        relation.relationType,
      )
    ) {
      errors.push(`Relation ${index}: relationType invalide`);
    }

    if (!relation.source || !relation.target) {
      errors.push(`Relation ${index}: source et target sont requis`);
    }
  });

  return errors;
}

// Valider les relations
/*
const errors = validateRelations(relations);
if (errors.length > 0) {
  logError("Erreurs de validation:", errors);
} else {
  logInfo("Symfony Relations valides ✓");
}
*/
// Générer une entité complète
// logInfo("=== Entité User ===");
// logInfo(generateCompleteEntity("User", relations));

// logInfo("\n=== Entité Article ===");
// logInfo(generateCompleteEntity("Article", relations));

// Générer toutes les entités
// logInfo("\n=== Toutes les entités ===");
// const allEntities = generateAllEntities(relations);
// Object.entries(allEntities).forEach(([entityName, entityCode]) => {
//   logInfo(`\n--- ${entityName} ---`);
//   logInfo(entityCode);
// });

// Générer une relation spécifique
// logInfo("\n=== Relation spécifique ===");
// logInfo(generatePhpAttribute(relations[0]));
