/**
 * Interface pour définir la structure d'une commande CLI.
 * Chaque commande doit implémenter cette interface pour être reconnue par l'application.
 */
export interface ICommand {
  /**
   * Le nom de la commande (ex: 'generate', 'make').
   */
  name: string;
  /**
   * Une brève description de ce que fait la commande.
   */
  description: string;
  /**
   * Des alias optionnels pour la commande, permettant de l'invoquer avec d'autres noms.
   */
  aliases?: string[];
  /**
   * Les options disponibles pour cette commande.
   */
  options?: ICommandOption[];
  /**
   * La méthode principale d'exécution de la commande.
   * @param args - Un tableau de chaînes de caractères représentant les arguments positionnels passés à la commande.
   * @param options - Un objet contenant les valeurs des options de la commande.
   */
  execute(args: string[], options: Record<string, unknown>): Promise<void>;
}

/**
 * Interface pour définir la structure d'une option de commande CLI.
 */
export interface ICommandOption {
  /**
   * Les drapeaux de l'option (ex: '-v, --version').
   */
  flags: string;
  /**
   * Une description de l'option.
   */
  description: string;
  /**
   * La valeur par défaut de l'option si elle n'est pas spécifiée.
   */
  defaultValue?: unknown;
  /**
   * Indique si l'option est obligatoire.
   */
  required?: boolean;
}
