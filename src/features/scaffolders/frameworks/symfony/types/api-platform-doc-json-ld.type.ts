/**
 * Structure racine du fichier documentation-api.json
 */
export interface TApiDocumentation {
  "@context": string;
  "@id": string;
  "@type": "ApiDocumentation";
  title: string;
  entrypoint: string;
  supportedClass: TSupportedClass[];
}

/**
 * Type d'une Classe
 */
export interface TSupportedClass {
  "@id": string;
  "@type": "Class";
  title: string;
  description?: string;
  subClassOf?: string;
  supportedProperty: TSupportedProperty[];
  supportedOperation: TSupportedOperation | TSupportedOperation[];
}

/**
 * Type d'une Propriété
 */
export interface TSupportedProperty {
  "@type": "SupportedProperty";
  property: TPropertyDetail;
  title: string;
  description?: string;
  required?: boolean;
  readable: boolean;
  writeable: boolean;
}

/**
 * Détails RDF de la propriété
 */
export interface TPropertyDetail {
  "@id": string;
  "@type": "rdf:Property";
  label?: string;
  "rdfs:label"?: string;
  domain: string;
  range: string | string[]; // Peut être "xmls:string" ou ["#AutreClasse"]
}

/**
 * Type d'une Opération (Endpoint)
 */
export interface TSupportedOperation {
  "@type": string | string[];
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  title: string;
  description?: string;
  returns?: string; // Type de retour (ex: "#ProjectTnstance")
  expects?: string; // Type attendu pour le Body
  expectsHeader?: TExpectsHeader | TExpectsHeader[];
}

/**
 * Configuration des Headers
 */
export interface TExpectsHeader {
  headerName: string; // ex: "Content-Type"
  possibleValue: string | string[]; // ex: "application/merge-patch+json"
}
