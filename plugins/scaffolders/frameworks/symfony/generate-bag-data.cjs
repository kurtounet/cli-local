const fs = require("fs");
const path = require("path");

// Determine the script's directory for reliable path resolution
const SCRIPT_DIR = __dirname;
const BAG_DATA_PATH = path.join(SCRIPT_DIR, "bag-data.json");
const CLI_LOCAL_DIR = path.join(SCRIPT_DIR, ".cli-local");
const CONFIG_PROJECT_PATH = path.join(CLI_LOCAL_DIR, "config-project.json");
const ENTITIES_PATH = path.join(CLI_LOCAL_DIR, "entities.json");
const MCD_PATH = path.join(CLI_LOCAL_DIR, "mcd.json"); // Also consider mcd.mdj if needed

/**
 * Safely reads and parses a JSON file.
 * @param {string} filePath The path to the JSON file.
 * @returns {object|null} The parsed JSON object, or null if an error occurs.
 */
function readJsonFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    console.error(`Erreur lors de la lecture ou de l'analyse de ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Maps an entity from entities.json format to bag-data.json entity scope format.
 * @param {object} entityData The raw entity object from entities.json.
 * @returns {object} The mapped entity object.
 */
function mapEntityForBagScope(entityData) {
  if (!entityData) {
    return {};
  }

  // Basic mapping, can be extended based on actual needs of templates
  return {
    namePascalCase: entityData.namePascalCase,
    nameKebabCase: entityData.nameKebabCase,
    nameSnakeCase: entityData.nameKebabCase.replace(/-/g, "_"), // Assuming kebab-case to snake_case
    namePluralCamelCase: entityData.namePluralCamelCase || `${entityData.nameCamelCase}s`, // Simple pluralization if not provided
    nameCamelCase: entityData.nameCamelCase,
    tableName: entityData.tableName,
    columns: (entityData.columns || []).map((col) => ({
      phpType:
        col.typeTypeScript === "number" && col.typeDoctrine === "float"
          ? "float"
          : col.typeTypeScript, // Adjust based on common PHP types
      name: col.name,
      nameCamelCase: col.name.replace(/_([a-z])/g, (g) => g[1].toUpperCase()), // snake_case to camelCase
      namePascalCase: col.name
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(""), // snake_case to PascalCase
      foreignKey: col.foreignKey,
      ormType: col.typeDoctrine,
      nullable: col.nullable,
    })),
    relationships: (entityData.relationships || []).map((rel) => ({
      nameCamelCase: rel.relationName, // Or derive from target
      namePascalCase: rel.relationName.charAt(0).toUpperCase() + rel.relationName.slice(1),
      targetPascalCase: rel.target.charAt(0).toUpperCase() + rel.target.slice(1),
      relationType: rel.relationType,
      targetPascalCaseSingular: rel.target.charAt(0).toUpperCase() + rel.target.slice(1), // Assuming target is singular
      mappedBy: rel.mappedBy || "", // Needs to be derived or provided
      ownerPascalCase: rel.ownerPascalCase || "", // Needs to be derived or provided
      nullable: true, // Default to true or derive
      inversedBy: rel.inversedBy || "", // Needs to be derived or provided
    })),
  };
}

async function buildBagData() {
  console.log("Début de la construction de bag-data.json...");

  const existingBagData = readJsonFile(BAG_DATA_PATH);
  if (!existingBagData) {
    console.error(
      "Impossible de charger bag-data.json existant. Création d'une structure de base.",
    );
    // Provide a minimal default structure if the file is missing or invalid
    existingBagData = {
      id: "symfony",
      name: "Symfony Generator",
      templateDir: "./templates",
      service: "symfony.service.js",
      bag: {
        scope: {
          project: {},
          entity: {},
        },
      },
    };
  }

  const configProjectData = readJsonFile(CONFIG_PROJECT_PATH);
  const entitiesData = readJsonFile(ENTITIES_PATH);
  // const mcdData = readJsonFile(MCD_PATH); // Uncomment if mcd.json data is needed

  // --- Populate bag.scope.project ---
  if (configProjectData && configProjectData.projectName) {
    // Example: Map some project data. Customize this mapping as needed.
    existingBagData.bag.scope.project = {
      ...existingBagData.bag.scope.project, // Keep existing properties
      name: configProjectData.projectName,
      version: configProjectData.version,
      // You can extract and map more properties from configProjectData
      // For instance, environment variables or database configurations
      env:
        configProjectData.frameworks
          ?.find((f) => f.name === "symfony")
          ?.environments?.find((e) => e.mode === ".env")?.data || {},
      db: configProjectData.databases?.[0] || {}, // Assuming first database
    };
    // Update specific env vars if they exist in frameworks
    const symfonyFramework = configProjectData.frameworks?.find((f) => f.name === "symfony");
    if (symfonyFramework) {
      const defaultEnv = symfonyFramework.environments?.find((e) => e.mode === ".env");
      if (defaultEnv) {
        existingBagData.bag.scope.project.env = {
          ...existingBagData.bag.scope.project.env,
          APP_DEBUG: defaultEnv.debug,
          APP_URL: defaultEnv.dataUrl,
        };
      }
      existingBagData.bag.scope.project.mailer = existingBagData.bag.scope.project.mailer || {
        dsn: "null",
      };
      existingBagData.bag.scope.project.cors = existingBagData.bag.scope.project.cors || {
        allow_origin: "null",
      };
      existingBagData.bag.scope.project.jwt = existingBagData.bag.scope.project.jwt || {
        passphrase: "some_jwt_passphrase",
      };
    }
  }

  // --- Populate bag.scope.entities (modified to handle all entities) ---
  if (entitiesData && entitiesData.entities && entitiesData.entities.length > 0) {
    // Store all mapped entities in an array under a new key 'entities'
    existingBagData.bag.scope.entities = entitiesData.entities.map((entity) =>
      mapEntityForBagScope(entity),
    );
    // Also keep the first entity for backward compatibility if `bag.scope.entity` is still used in some templates
    existingBagData.bag.scope.entity = mapEntityForBagScope(entitiesData.entities[0]);
  } else {
    console.warn(
      "Aucune entité trouvée dans .cli-local/entities.json. bag.scope.entities et bag.scope.entity ne seront pas mis à jour.",
    );
    existingBagData.bag.scope.entities = []; // Ensure it's an empty array if no entities
    existingBagData.bag.scope.entity = {}; // Ensure it's an empty object if no entities
  }

  // --- Add templateDefinitions (from previous logic) if needed ---
  // If the user still wants the templateDefinitions to be generated based on .ejs files,
  // we can integrate that logic here. For now, I'll keep it commented or remove it if not needed.
  // Based on the user's latest prompt, the focus is on `@.cli-local` files for `bagdata` itself,
  // not listing templates. The `templateDefinitions` part might be separate or no longer desired
  // as part of "construire bagdata a partir des fichiers".
  // I will remove the templateDefinitions logic unless specifically asked to keep it.
  delete existingBagData.templateDefinitions; // Remove if exists from previous runs

  // Write the updated bag-data.json back to the file
  try {
    fs.writeFileSync(BAG_DATA_PATH, JSON.stringify(existingBagData, null, 2), "utf8");
    console.log("bag-data.json a été mis à jour avec succès.");
  } catch (error) {
    console.error("Erreur lors de l'écriture de bag-data.json :", error.message);
  }
}

buildBagData();
