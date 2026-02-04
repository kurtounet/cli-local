import { IBaseService } from "./base-service.interface.js";

/**
 * Interface définissant la structure d'un template utilisé pour la génération de code.
 * Un template peut inclure des variables, des fichiers, et une structure de répertoires.
 */
export interface ITemplate {
  /**
   * Nom du dossier du template (ex: "react-component").
   */
  name: string;
  /**
   * Chemin complet sur le disque où le template est stocké.
   */
  path: string;
  /**
   * Liste des fichiers contenus à l'intérieur du template.
   */
  files: string[];
  /**
   * Définition des variables que le template peut utiliser.
   */
  variables: ITemplateVariable[];
  /**
   * Structure de répertoires et de fichiers que le template générera.
   */
  structure: ITemplateStructure[];
  /**
   * Hooks optionnels à exécuter avant ou après la création du template.
   */
  hooks?: {
    /**
     * Scripts ou commandes à exécuter avant la création.
     */
    preCreate?: string[];
    /**
     * Scripts ou commandes à exécuter après la création.
     */
    postCreate?: string[];
  };
}

/**
 * Interface définissant une variable qu'un template peut utiliser.
 */
export interface ITemplateVariable {
  /**
   * Nom de la variable.
   */
  name: string;
  /**
   * Type de la variable (string, number, boolean, choice).
   */
  type: "string" | "number" | "boolean" | "choice";
  /**
   * Description de la variable, expliquant son rôle.
   */
  description?: string;
  /**
   * Indique si la variable est obligatoire.
   */
  required: boolean;
  /**
   * Valeur par défaut de la variable.
   */
  default?: unknown;
  /**
   * Pour le type 'choice', liste des options disponibles.
   */
  choices?: string[];
}

/**
 * Interface définissant les capacités d'un service de gestion des templates.
 * Permet de récupérer, de gérer et de compiler des templates.
 */
export interface ITemplateService extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
  render(pluginDir: string, templateName: string, data: any): Promise<any>;
  /**
   * Récupère la liste de tous les templates disponibles.
   * @returns Une promesse résolue avec un tableau d'objets ITemplate.
   */
  // getTemplates(): Promise<ITemplate[]>;
  /**
   * Récupère un template spécifique par son nom.
   * @param name - Le nom du template à récupérer.
   * @returns Une promesse résolue avec l'objet ITemplate correspondant, ou undefined si non trouvé.
   */
  // getTemplateByName(name: string): Promise<ITemplate | undefined>;
  /**
   * Compile le contenu d'un template avec les données fournies.
   * @param templateContent - Le contenu brut du template (peut inclure des placeholders).
   * @param data - Les données à injecter dans le template.
   * @returns La chaîne de caractères du template compilé.
   */
  // compile(templateContent: string, data: Record<string, string>): string;
}

/**
 * Interface définissant un élément de la structure d'un template (fichier ou répertoire).
 */
export interface ITemplateStructure {
  /**
   * Chemin relatif de l'élément (ex: "src/components/{{name}}.js").
   */
  path: string;
  /**
   * Contenu textuel direct à écrire dans le fichier (si type est 'file').
   */
  content?: string;
  /**
   * Type de l'élément : 'file' ou 'directory'.
   */
  type: "file" | "directory";
  /**
   * Pour le type 'directory', une liste d'éléments enfants.
   */
  children?: ITemplateStructure[];
  /**
   * Variable de condition pour inclure ou exclure cet élément de la génération.
   */
  conditional?: string;
  /**
   * Chemin vers un fichier de template externe à utiliser pour le contenu (si type est 'file').
   */
  template?: string;
}
