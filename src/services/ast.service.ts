import ts from "typescript";

import { IMemberInfo } from "@/types/commun/member-info.interface.js";
import { IAstService } from "@/types/services/ast-service.interface.js";

import { BaseService } from "./base-service.service.js";

export class AstService extends BaseService implements IAstService {
  readonly serviceName = "AstService";

  public analyzeFileMetadata(
    filePath: string,
    sourceCode: string,
  ): IMemberInfo[] {
    const members: IMemberInfo[] = [];

    const sourceFile = ts.createSourceFile(
      filePath,
      sourceCode,
      ts.ScriptTarget.Latest,
      true, // Nécessaire pour capturer les commentaires
    );

    /**
     * Extrait la description JSDoc associée à un nœud.
     * @param node - ts.Node
     * @returns Retourne la description
     */
    const getDocumentation = (node: ts.Node): string => {
      const jsDoc = (node as any).jsDoc as ts.JSDoc[];
      if (jsDoc && jsDoc.length > 0) {
        // On récupère le texte du dernier commentaire JSDoc
        const comment = jsDoc[jsDoc.length - 1].comment;
        if (typeof comment === "string") {
          return comment.replace(/\r?\n|\r/g, " ").trim();
        } else if (Array.isArray(comment)) {
          return comment
            .map((c) => c.text)
            .join(" ")
            .trim();
        }
      }
      return "";
    };

    /**
     * Extrait les paramètres (nom, type, optionnel).
     * @param node - ts.SignatureDeclaration
     * @returns Retourne un tableau de paramètres
     */
    const getParams = (node: ts.SignatureDeclaration): unknown[] => {
      if (!node.parameters) return [];
      return node.parameters.map((param) => ({
        name: param.name.getText(sourceFile),
        type: param.type ? param.type.getText(sourceFile) : "any",
        optional: !!(param.questionToken ?? param.initializer),
        isRest: !!param.dotDotDotToken,
      }));
    };

    /**
     * Détermine la visibilité (public, private, protected).
     * @param node - ts.Node
     * @returns Retourne la visibilité
     */
    const getVisibility = (
      node: ts.Node,
    ): "public" | "private" | "protected" => {
      const modifiers = ts.canHaveModifiers(node)
        ? ts.getModifiers(node)
        : undefined;
      if (!modifiers) return "public";

      if (modifiers.some((m) => m.kind === ts.SyntaxKind.PrivateKeyword))
        return "private";
      if (modifiers.some((m) => m.kind === ts.SyntaxKind.ProtectedKeyword))
        return "protected";
      return "public";
    };

    /**
     * Visite un nœud et extrait les membres.
     * @param node - ts.Node
     */
    const visit = (node: ts.Node) => {
      // --- 1. FONCTIONS GLOBALES ---
      if (ts.isFunctionDeclaration(node) && node.name) {
        members.push({
          name: node.name.text,
          type: "function",
          visibility: "public",
          description: getDocumentation(node),
          returnType: node.type ? node.type.getText(sourceFile) : "void",
          arguments: getParams(node),
        });
      }
      // --- 2. FONCTIONS FLÉCHÉES (const f = () => ...) ---
      else if (
        ts.isVariableDeclaration(node) &&
        node.initializer &&
        ts.isArrowFunction(node.initializer) &&
        ts.isIdentifier(node.name)
      ) {
        // Pour les variables, la JSDoc est souvent sur le VariableStatement (parent du parent)
        const docNode = node.parent.parent;
        members.push({
          name: node.name.text,
          type: "function",
          visibility: "public",
          description: getDocumentation(docNode),
          returnType: node.initializer.type
            ? node.initializer.type.getText(sourceFile)
            : "any",
          arguments: getParams(node.initializer),
        });
      }

      // --- 3. CLASSES ---
      if (ts.isClassDeclaration(node) && node.name) {
        const className = node.name.text;
        members.push({
          name: className,
          type: "class",
          visibility: "public",
          description: getDocumentation(node),
          arguments: [],
        });

        node.members.forEach((member) => {
          if (ts.isMethodDeclaration(member) && member.name) {
            members.push({
              name: `${className}.${member.name.getText(sourceFile)}`,
              type: "method",
              visibility: getVisibility(member),
              description: getDocumentation(member),
              returnType: member.type
                ? member.type.getText(sourceFile)
                : "void",
              arguments: getParams(member),
            });
          }
        });
      }

      // --- 4. INTERFACES ---
      if (ts.isInterfaceDeclaration(node) && node.name) {
        const interfaceName = node.name.text;
        members.push({
          name: interfaceName,
          type: "interface",
          visibility: "public",
          description: getDocumentation(node),
          arguments: [],
        });

        node.members.forEach((member) => {
          if (member.name) {
            const memberName = member.name.getText(sourceFile);
            const commonData = {
              name: `${interfaceName}.${memberName}`,
              visibility: "public" as const,
              description: getDocumentation(member),
              returnType: (member as any).type
                ? (member as any).type.getText(sourceFile)
                : "any",
            };

            if (ts.isMethodDeclaration(member)) {
              members.push({
                ...commonData,
                type: "method",
                arguments: getParams(member),
              });
            } else if (ts.isPropertySignature(member)) {
              const isFunc = member.type && ts.isFunctionTypeNode(member.type);
              members.push({
                ...commonData,
                type: isFunc ? "method" : "property",
                arguments: isFunc ? getParams(member.type as any) : [],
              });
            }
          }
        });
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return members;
  }
}
