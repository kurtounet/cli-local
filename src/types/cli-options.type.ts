export type MaybePromise<T> = T | Promise<T>;
/**
 * Options génériques pour une commande.
 * On évite `object` car ce n’est pas indexable proprement et ça casse le typing.
 */
export type AnyOptions = Record<string, unknown>;
/**
 * Clés d'options (string only) pour accès sûr.
 */
export type OptionKey<T extends AnyOptions> = Extract<keyof T, string>;
