import { ICaseService } from "@/types/case-service.interface.js";
import { BaseService } from "./base-service.service.js";

/*
Méthode	Résultat	Utilisation typique
PascalCase	MonServiceV1	Classes, Composants (React/Vue)
camelCase	monServiceV1	Variables, clés JSON
kebab-case	mon-service-v1	URLs, Classes CSS
snake_case	mon_service_v1	Bases de données (Colonnes)
slugify	mon-service-v1	URLs propres (nettoyage inclus)
*/
export class CaseService extends BaseService implements ICaseService {
  /**
   * Méthode interne pour découper n'importe quelle chaîne en tableau de mots
   */
  private getWords(str: string): string[] {
    return (
      str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
        )
        ?.map((w) => w.toLowerCase()) || []
    );
  }

  // --- TRANSFORMATIONS GÉNÉRALES ---

  public toPascalCase(str: string): string {
    return this.getWords(str)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  }

  public toCamelCase(str: string): string {
    const words = this.getWords(str);
    if (words.length === 0) return "";
    return (
      words[0] +
      words
        .slice(1)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join("")
    );
  }

  public toKebabCase(str: string): string {
    return this.getWords(str).join("-");
  }

  public toSnakeCase(str: string): string {
    return this.getWords(str).join("_");
  }
  // --- MÉTHODES SPÉCIFIQUES (Raccourcis) ---
  public capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  public slugify(str: string): string {
    return str
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
      .replace(/[\s_-]+/g, "-")
      .replace(/[^\w-]+/g, "");
  }
}
