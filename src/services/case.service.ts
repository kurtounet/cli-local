import { ICaseService } from "@/types/services/case-service.interface.js";

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
  readonly serviceName = "CaseService";

  /**
   * Méthode interne pour découper n'importe quelle chaîne en tableau de mots
   * @param str - Chaine de caractères
   * @returns Tableau de mots
   */
  private getWords(str: string): string[] {
    return (
      str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
        )
        ?.map((w) => w.toLowerCase()) ?? []
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
      .normalize("NFD") // 1. Split accents from letters
      .replace(/[\u0300-\u036f]/g, "") // 2. Strip the accent marks
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // 3. Remove non-word chars (except spaces/hyphens)
      .replace(/[\s_-]+/g, "-") // 4. Convert spaces/underscores to hyphens
      .replace(/^-+|-+$/g, ""); // 5. Trim hyphens from ends
  }
}
