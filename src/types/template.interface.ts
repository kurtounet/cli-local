export interface ITemplate {
  name: string; // Nom du dossier (ex: "react-component")
  path: string; // Chemin complet sur le disque
  files: string[]; // Liste des fichiers contenus à l'intérieur
  variables: ITemplateVariable[];
  structure: ITemplateStructure[];
  hooks?: {
    preCreate?: string[];
    postCreate?: string[];
  };
}
export interface ITemplateVariable {
  name: string;
  type: "string" | "number" | "boolean" | "choice";
  description?: string;
  required: boolean;
  default?: any;
  choices?: string[];
}
export interface ITemplateService {
  getTemplates(): Promise<ITemplate[]>;
  getTemplateByName(name: string): Promise<ITemplate | undefined>;
}

export interface ITemplateStructure {
  path: string; // Chemin vers un fichier .hbs
  content?: string; // Contenu textuel direct
  type: "file" | "directory";
  children?: ITemplateStructure[]; // Pour le type 'directory'
  conditional?: string; // Variable de condition
  template?: string; // Chemin vers un fichier .hbs
}
