import { IBaseService } from "./base-service.interface.js";

/**
 * Interface définissant les méthodes pour la manipulation de chaînes de caractères
 * en différents formats de casse (camelCase, kebab-case, snake_case, etc.).
 */
export interface ICaseService extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
  /**
   * Convertit une chaîne de caractères en format "slug" (minuscules, séparées par des tirets).
   * Utile pour les URL ou les identifiants lisibles par l'homme.
   * @param input - La chaîne de caractères à convertir.
   * @returns La chaîne de caractères formatée en slug.
   */
  slugify(input: string): string;
  /**
   * Met la première lettre de chaque mot d'une chaîne en majuscule.
   * @param input - La chaîne de caractères à capitaliser.
   * @returns La chaîne de caractères avec chaque mot capitalisé.
   */
  capitalize(input: string): string;
  /**
   * Convertit une chaîne de caractères en format camelCase.
   * @param input - La chaîne de caractères à convertir.
   * @returns La chaîne de caractères formatée en camelCase.
   */
  toCamelCase(input: string): string;
  /**
   * Convertit une chaîne de caractères en format kebab-case (minuscules, mots séparés par des tirets).
   * @param input - La chaîne de caractères à convertir.
   * @returns La chaîne de caractères formatée en kebab-case.
   */
  toKebabCase(input: string): string;
  /**
   * Convertit une chaîne de caractères en format snake_case (minuscules, mots séparés par des underscores).
   * @param input - La chaîne de caractères à convertir.
   * @returns La chaîne de caractères formatée en snake_case.
   */
  toSnakeCase(input: string): string;
  /**
   * Convertit une chaîne de caractères en format PascalCase (première lettre de chaque mot en majuscule, sans séparateur).
   * @param input - La chaîne de caractères à convertir.
   * @returns La chaîne de caractères formatée en PascalCase.
   */
  toPascalCase(input: string): string;
}
