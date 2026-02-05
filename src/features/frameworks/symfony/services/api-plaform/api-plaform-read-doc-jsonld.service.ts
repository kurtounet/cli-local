import { readFile } from "@utils/file-utils";

import { TApiDocumentation } from "../../types/api-platform-doc-json-ld.type";

/**
 * Service pour lire et normaliser le fichier documentation-api.json
 * @param path
 */
export function apiPlatformReadDocJsonldService(
  path: string,
): TApiDocumentation | null {
  try {
    const rawData = readFile(path);
    const data = JSON.parse(rawData) as TApiDocumentation;

    // Normalisation : On s'assure que les champs critiques sont toujours des tableaux
    // Cela facilite grandement la boucle de génération ensuite.
    data.supportedClass = data.supportedClass.map((sClass) => ({
      ...sClass,
      supportedOperation: ensureArray(sClass.supportedOperation),
      supportedProperty: sClass.supportedProperty.map((sProp) => ({
        ...sProp,
        // On normalise aussi les headers dans les opérations
        operation: sClass.supportedOperation, // Type assertion temporaire pour le map
      })),
    }));

    // On peut aussi normaliser les headers à l'intérieur de chaque opération
    data.supportedClass.forEach((sClass) => {
      if (Array.isArray(sClass.supportedOperation)) {
        sClass.supportedOperation.forEach((op) => {
          if (op.expectsHeader) {
            op.expectsHeader = ensureArray(op.expectsHeader);
          }
        });
      }
    });

    return data;
  } catch (error) {
    console.error("Erreur lors de la lecture du fichier JSON-LD:", error);
    return null;
  }
}

/**
 * Utilitaire pour transformer une valeur unique en tableau si nécessaire
 * (Crucial pour le format Hydra/JSON-LD)
 * @param item
 */
function ensureArray<T>(item: T | T[] | undefined): T[] {
  if (!item) return [];
  return Array.isArray(item) ? item : [item];
}
