import { describe, it, expect, beforeEach } from "vitest";
import { IAppContext } from "@/types/context.interface.js";
import { LoggerService } from "../logger.service.js";

describe("LoggerService", () => {
  let service: LoggerService;

  beforeEach(() => {
    // 1. Créer un mock minimaliste de IAppContext
    const mockContext = {
      // Ajoute ici les propriétés dont BaseService a besoin
      // par exemple : logger, config, etc.
      // logger: { log: vi.fn(), error: vi.fn() },
      config: {},
    } as unknown as IAppContext;

    // 2. Créer une instance de CaseService en utilisant le mock
    service = new LoggerService(mockContext);
  });

  describe("toPascalCase", () => {
    it.each([["hello-world", "hello-world"]])(
      'info("%s") devrait retourner "%s"',
      (input, expected) => {
        expect(service.info(input)).toBe(expected);
      },
    );

    it.each([["hello-world", "hello-world"]])(
      'success("%s") devrait retourner "%s"',
      (input, expected) => {
        expect(service.success(input)).toBe(expected);
      },
    );
    
    it.each([
      ["hello world", "hello_world"],
      ["camelCase", "camel_case"],
      ["snake-case", "snake_case"],
      ["PascalCase", "pascal_case"],
    ])('toSnakeCase("%s") devrait retourner "%s"', (input, expected) => {
      expect(service.toSnakeCase(input)).toBe(expected);
    });

    it.each([
      ["hello world", "helloWorld"],
      ["camelCase", "camelCase"],
      ["snake_case", "snakeCase"],
      ["PascalCase", "pascalCase"],
    ])('toCamelCase("%s") devrait retourner "%s"', (input, expected) => {
      expect(service.toCamelCase(input)).toBe(expected);
    });
    it.each([
      ["hello world", "Hello world"],
      ["camelCase", "CamelCase"],
      ["snake_case", "Snake_case"],
      ["PascalCase", "PascalCase"],
    ])('toCamelCase("%s") devrait retourner "%s"', (input, expected) => {
      expect(service.capitalize(input)).toBe(expected);
    });

    describe("slugify", () => {
      it("devrait supprimer les accents et les caractères spéciaux", () => {
        const input = `"C'est l'été à Noël ?` + "`" + `!.,:;/\@#$%^&* _ - + = < > ~ ' "`;
        // normalize + replace devraient transformer ça en :
        // "c-est-l-ete-a-noel"
        expect(service.slugify(input)).toBe("cest-lete-a-noel");
      });
    });
 
    //     it("devrait retourner une chaîne vide si l'entrée est invalide", () => {
    //       expect(service.slugify("!!!")).toBe("");
    //     });
    //   });

    //   describe("Combinaisons complexes", () => {
    //     it("devrait extraire les mots correctement via getWords (test indirect)", () => {
    //       // On teste via une méthode publique car getWords est privée
    //       expect(service.toSnakeCase("APIResponse200")).toBe("api_response_200");
    //     });
  });
});
