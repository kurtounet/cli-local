import ts from "typescript";
import { BaseService } from "./base-service.service.js";
import { IMemberInfo } from "@/types/commun/member-info.interface.js";
import { IAstService } from "@/types/services/ast-service.interface.js";

/**
 * Interface représentant les membres extraits du code source.
 */

export class AstService extends BaseService implements IAstService {
  readonly serviceName = "AstService";
  // init(): Promise<void> {
  //   return Promise.resolve();
  // }

  /**
   * Analyse le code source d'un fichier TypeScript/JavaScript pour extraire
   * la structure des classes, méthodes et fonctions.
   * @param filePath - Le chemin du fichier (utilisé par le parseur pour le contexte).
   * @param sourceCode - Le contenu textuel du fichier à analyser.
   * @returns Un tableau d'objets IMemberInfo.
   */
  public analyzeFileMetadata(filePath: string, sourceCode: string): IMemberInfo[] {
    const members: IMemberInfo[] = [];

    // Création de l'Arbre de Syntaxe Abstraite (AST)
    const sourceFile = ts.createSourceFile(
      filePath,
      sourceCode,
      ts.ScriptTarget.Latest,
      true, // Assure la capture des commentaires et du texte original
    );

    /**
     * Helper pour extraire les noms des paramètres et leurs types.
     */
    const getParams = (
      node: ts.FunctionDeclaration | ts.MethodDeclaration | ts.ArrowFunction,
    ): string[] => {
      return node.parameters.map((p) => {
        const name = p.name.getText(sourceFile);
        const type = p.type ? `: ${p.type.getText(sourceFile)}` : "";
        return `${name}${type}`;
      });
    };

    /**
     * Parcours récursif des nœuds de l'AST.
     */
    const visit = (node: ts.Node) => {
      // 1. Détection des fonctions classiques (ex: function maFonction()...)
      if (ts.isFunctionDeclaration(node) && node.name) {
        members.push({
          name: node.name.text,
          type: "function",
          arguments: getParams(node),
        });
      }

      // 2. Détection des fonctions fléchées affectées à des variables (ex: const f = () => ...)
      if (
        ts.isVariableDeclaration(node) &&
        node.initializer &&
        ts.isArrowFunction(node.initializer)
      ) {
        if (ts.isIdentifier(node.name)) {
          members.push({
            name: node.name.text,
            type: "function",
            arguments: getParams(node.initializer),
          });
        }
      }

      // 3. Détection des classes et de leurs méthodes membres
      if (ts.isClassDeclaration(node) && node.name) {
        const className = node.name.text;
        members.push({ name: className, type: "class", arguments: [] });

        node.members.forEach((member) => {
          if (ts.isMethodDeclaration(member) && member.name) {
            members.push({
              name: `${className}.${member.name.getText(sourceFile)}`,
              type: "method",
              arguments: getParams(member),
            });
          }
        });
      }

      // Continue l'exploration dans les enfants du nœud actuel
      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return members;
  }
}
