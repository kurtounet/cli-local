export const TYPE_VALIDATOR = {
    string: 'IsString()',
    number: 'IsNumber()',
    boolean: 'IsBoolean()',
    date: 'IsDate()',
};
/* 
Voici une liste des décorateurs de validation disponibles dans la bibliothèque class-validator au format JSON. Cette liste comprend:

Les validations de type (IsBoolean, IsString, IsNumber, etc.)
Les validations de chaînes (IsEmail, IsURL, Length, etc.)
Les validations numériques (Min, Max, IsPositive, etc.)
Les validations de tableaux (ArrayContains, ArrayMinSize, etc.)
Les validations de dates (MinDate, MaxDate)
Les validations d'objets (IsInstance, ValidateNested, etc.)
Les validations conditionnelles
Les décorateurs de transformation (ToBoolean, ToString, etc.)

Pour chaque décorateur, j'ai inclus une description et les options de configuration disponibles.
Avez-vous besoin d'informations supplémentaires sur certains de ces décorateurs en particulier?
*/
export const validationDecorators = {
    typeValidation: [
        {
            name: 'IsBoolean',
            description: 'Vérifie si la valeur est un booléen',
            options: {},
        },
        {
            name: 'IsDate',
            description: 'Vérifie si la valeur est une date',
            options: {},
        },
        {
            name: 'IsString',
            description: 'Vérifie si la valeur est une chaîne de caractères',
            options: {},
        },
        {
            name: 'IsNumber',
            description: 'Vérifie si la valeur est un nombre',
            options: {
                maxDecimalPlaces: 'Nombre maximum de décimales',
                allowNaN: 'Autorise NaN',
                allowInfinity: "Autorise l'infini",
            },
        },
        {
            name: 'IsInt',
            description: 'Vérifie si la valeur est un entier',
            options: {},
        },
        {
            name: 'IsArray',
            description: 'Vérifie si la valeur est un tableau',
            options: {},
        },
        {
            name: 'IsEnum',
            description: 'Vérifie si la valeur est dans une énumération',
            options: {},
        },
        {
            name: 'IsObject',
            description: 'Vérifie si la valeur est un objet',
            options: {},
        },
    ],
    stringValidation: [
        {
            name: 'Contains',
            description:
                'Vérifie si la chaîne contient la sous-chaîne spécifiée',
            options: {
                seed: 'Sous-chaîne à rechercher',
            },
        },
        {
            name: 'NotContains',
            description:
                'Vérifie si la chaîne ne contient pas la sous-chaîne spécifiée',
            options: {
                seed: 'Sous-chaîne à rechercher',
            },
        },
        {
            name: 'IsEmail',
            description: 'Vérifie si la chaîne est un e-mail valide',
            options: {
                allowDisplayName: "Autorise le nom d'affichage",
                allowIpDomain: "Autorise l'adresse IP comme domaine",
                domainSpecificValidation:
                    'Active la validation spécifique au domaine',
                ignoreMaxLength: 'Ignore la longueur maximale',
            },
        },
        {
            name: 'IsFQDN',
            description:
                'Vérifie si la chaîne est un nom de domaine complet valide',
            options: {
                requireTld: 'Exige un TLD',
                allowUnderscores: 'Autorise les underscores',
                allowTrailingDot: 'Autorise le point final',
            },
        },
        {
            name: 'IsURL',
            description: 'Vérifie si la chaîne est une URL valide',
            options: {
                protocols: 'Protocoles autorisés (http, https, etc.)',
                requireProtocol: 'Exige un protocole',
                requireHost: 'Exige un hôte',
                allowTrailingDot: 'Autorise le point final',
            },
        },
        {
            name: 'IsUUID',
            description: 'Vérifie si la chaîne est un UUID valide',
            options: {
                version: "Version d'UUID (3, 4, 5)",
            },
        },
        {
            name: 'Length',
            description:
                'Vérifie si la longueur de la chaîne est dans la plage spécifiée',
            options: {
                min: 'Longueur minimale',
                max: 'Longueur maximale',
            },
        },
        {
            name: 'MinLength',
            description:
                'Vérifie si la longueur de la chaîne est supérieure ou égale au minimum spécifié',
            options: {
                min: 'Longueur minimale',
            },
        },
        {
            name: 'MaxLength',
            description:
                'Vérifie si la longueur de la chaîne est inférieure ou égale au maximum spécifié',
            options: {
                max: 'Longueur maximale',
            },
        },
        {
            name: 'Matches',
            description:
                "Vérifie si la chaîne correspond à l'expression régulière",
            options: {
                pattern: 'Expression régulière à matcher',
                modifiers: 'Modificateurs regex (g, i, m, etc.)',
            },
        },
        {
            name: 'IsAlpha',
            description: 'Vérifie si la chaîne contient uniquement des lettres',
            options: {
                locale: 'Locale pour les règles spécifiques à la langue',
            },
        },
        {
            name: 'IsAlphanumeric',
            description:
                'Vérifie si la chaîne contient uniquement des lettres et des chiffres',
            options: {
                locale: 'Locale pour les règles spécifiques à la langue',
            },
        },
        {
            name: 'IsDecimal',
            description: 'Vérifie si la chaîne est un nombre décimal valide',
            options: {
                decimal_digits: 'Nombre de décimales',
                force_decimal: "Force la présence d'un point décimal",
            },
        },
        {
            name: 'IsAscii',
            description:
                'Vérifie si la chaîne contient uniquement des caractères ASCII',
            options: {},
        },
        {
            name: 'IsBase64',
            description: 'Vérifie si la chaîne est encodée en Base64',
            options: {},
        },
        {
            name: 'IsCreditCard',
            description:
                'Vérifie si la chaîne est un numéro de carte de crédit valide',
            options: {},
        },
        {
            name: 'IsCurrency',
            description: 'Vérifie si la chaîne est une valeur monétaire valide',
            options: {
                symbol: 'Symbole monétaire',
                require_symbol: 'Exige le symbole monétaire',
                allow_space_after_symbol: 'Autorise un espace après le symbole',
                thousands_separator: 'Séparateur des milliers',
                decimal_separator: 'Séparateur décimal',
            },
        },
        {
            name: 'IsJSON',
            description: 'Vérifie si la chaîne est au format JSON valide',
            options: {},
        },
        {
            name: 'IsJWT',
            description: 'Vérifie si la chaîne est un JWT valide',
            options: {},
        },
        {
            name: 'IsLowercase',
            description: 'Vérifie si la chaîne est en minuscules',
            options: {},
        },
        {
            name: 'IsUppercase',
            description: 'Vérifie si la chaîne est en majuscules',
            options: {},
        },
        {
            name: 'IsMobilePhone',
            description:
                'Vérifie si la chaîne est un numéro de téléphone mobile valide',
            options: {
                locale: 'Locale pour la validation spécifique au pays',
                strict: "Mode strict (pas d'espaces, tirets, etc.)",
            },
        },
        {
            name: 'IsPhoneNumber',
            description:
                'Vérifie si la chaîne est un numéro de téléphone valide',
            options: {
                region: 'Code de région (pays)',
            },
        },
        {
            name: 'IsPostalCode',
            description: 'Vérifie si la chaîne est un code postal valide',
            options: {
                locale: 'Locale pour la validation spécifique au pays',
            },
        },
        {
            name: 'IsHexColor',
            description:
                'Vérifie si la chaîne est une couleur hexadécimale valide',
            options: {},
        },
        {
            name: 'IsRgbColor',
            description: 'Vérifie si la chaîne est une couleur RGB/RGBA valide',
            options: {
                includePercentValues: 'Inclut les valeurs en pourcentage',
            },
        },
        {
            name: 'IsHSL',
            description: 'Vérifie si la chaîne est une couleur HSL valide',
            options: {},
        },
        {
            name: 'IsISBN',
            description: 'Vérifie si la chaîne est un ISBN valide',
            options: {
                version: 'Version ISBN (10 ou 13)',
            },
        },
        {
            name: 'IsISSN',
            description: 'Vérifie si la chaîne est un ISSN valide',
            options: {
                case_sensitive: 'Sensible à la casse',
                require_hyphen: 'Exige des tirets',
            },
        },
        {
            name: 'IsMACAddress',
            description: 'Vérifie si la chaîne est une adresse MAC valide',
            options: {
                no_colons: 'Sans deux-points',
            },
        },
        {
            name: 'IsIP',
            description: 'Vérifie si la chaîne est une adresse IP valide',
            options: {
                version: 'Version IP (4 ou 6)',
            },
        },
        {
            name: 'IsPort',
            description: 'Vérifie si la chaîne est un numéro de port valide',
            options: {},
        },
        {
            name: 'IsDataURI',
            description: 'Vérifie si la chaîne est une URI de données valide',
            options: {},
        },
        {
            name: 'IsHash',
            description: 'Vérifie si la chaîne est un hash cryptographique',
            options: {
                algorithm: 'Algorithme de hachage (md5, sha1, etc.)',
            },
        },
        {
            name: 'IsMimeType',
            description: 'Vérifie si la chaîne est un type MIME valide',
            options: {},
        },
        {
            name: 'IsSemVer',
            description:
                'Vérifie si la chaîne est une version sémantique valide',
            options: {},
        },
        {
            name: 'IsISRC',
            description: 'Vérifie si la chaîne est un code ISRC valide',
            options: {},
        },
        {
            name: 'IsLocale',
            description: 'Vérifie si la chaîne est une locale valide',
            options: {},
        },
    ],
    numberValidation: [
        {
            name: 'Min',
            description:
                'Vérifie si la valeur est supérieure ou égale au minimum spécifié',
            options: {
                min: 'Valeur minimale',
            },
        },
        {
            name: 'Max',
            description:
                'Vérifie si la valeur est inférieure ou égale au maximum spécifié',
            options: {
                max: 'Valeur maximale',
            },
        },
        {
            name: 'IsDivisibleBy',
            description:
                'Vérifie si la valeur est divisible par le nombre spécifié',
            options: {
                num: 'Diviseur',
            },
        },
        {
            name: 'IsPositive',
            description: 'Vérifie si la valeur est un nombre positif',
            options: {},
        },
        {
            name: 'IsNegative',
            description: 'Vérifie si la valeur est un nombre négatif',
            options: {},
        },
    ],
    arrayValidation: [
        {
            name: 'ArrayContains',
            description:
                'Vérifie si le tableau contient tous les éléments spécifiés',
            options: {
                values: 'Éléments à rechercher',
            },
        },
        {
            name: 'ArrayNotContains',
            description:
                'Vérifie si le tableau ne contient aucun des éléments spécifiés',
            options: {
                values: 'Éléments à exclure',
            },
        },
        {
            name: 'ArrayNotEmpty',
            description: "Vérifie si le tableau n'est pas vide",
            options: {},
        },
        {
            name: 'ArrayMinSize',
            description:
                'Vérifie si la taille du tableau est supérieure ou égale au minimum spécifié',
            options: {
                min: 'Taille minimale',
            },
        },
        {
            name: 'ArrayMaxSize',
            description:
                'Vérifie si la taille du tableau est inférieure ou égale au maximum spécifié',
            options: {
                max: 'Taille maximale',
            },
        },
        {
            name: 'ArrayUnique',
            description: 'Vérifie si tous les éléments du tableau sont uniques',
            options: {
                identifier: "Fonction pour identifier l'unicité",
            },
        },
    ],
    dateValidation: [
        {
            name: 'MinDate',
            description:
                'Vérifie si la date est postérieure ou égale à la date minimale spécifiée',
            options: {
                date: 'Date minimale',
            },
        },
        {
            name: 'MaxDate',
            description:
                'Vérifie si la date est antérieure ou égale à la date maximale spécifiée',
            options: {
                date: 'Date maximale',
            },
        },
    ],
    objectValidation: [
        {
            name: 'IsInstance',
            description:
                'Vérifie si la valeur est une instance de la classe spécifiée',
            options: {
                type: 'Type à vérifier',
            },
        },
        {
            name: 'IsNotEmptyObject',
            description: "Vérifie si l'objet n'est pas vide",
            options: {},
        },
        {
            name: 'ValidateNested',
            description: 'Valide récursivement les objets imbriqués',
            options: {},
        },
    ],
    customValidation: [
        {
            name: 'Equals',
            description: 'Vérifie si la valeur est égale à la valeur spécifiée',
            options: {
                comparison: 'Valeur de comparaison',
            },
        },
        {
            name: 'NotEquals',
            description:
                "Vérifie si la valeur n'est pas égale à la valeur spécifiée",
            options: {
                comparison: 'Valeur de comparaison',
            },
        },
        {
            name: 'IsEmpty',
            description:
                'Vérifie si la valeur est vide (null, undefined, vide)',
            options: {},
        },
        {
            name: 'IsNotEmpty',
            description: "Vérifie si la valeur n'est pas vide",
            options: {},
        },
        {
            name: 'IsIn',
            description:
                'Vérifie si la valeur est dans la liste des valeurs autorisées',
            options: {
                values: 'Liste des valeurs autorisées',
            },
        },
        {
            name: 'IsNotIn',
            description:
                "Vérifie si la valeur n'est pas dans la liste des valeurs interdites",
            options: {
                values: 'Liste des valeurs interdites',
            },
        },
        {
            name: 'IsDefined',
            description: 'Vérifie si la valeur est définie (non undefined)',
            options: {},
        },
        {
            name: 'Allow',
            description: 'Autorise toute valeur sans validation',
            options: {},
        },
        {
            name: 'ValidateIf',
            description:
                "Valide conditionnellement en fonction d'une condition",
            options: {
                condition: 'Fonction de condition',
            },
        },
        {
            name: 'ValidatePromise',
            description: 'Valide une promesse qui se résout avec une valeur',
            options: {},
        },
        {
            name: 'Validate',
            description: 'Utilise une fonction de validation personnalisée',
            options: {
                validator: 'Fonction de validation',
                validationOptions: 'Options de validation',
            },
        },
    ],
    conditionalValidation: [
        {
            name: 'ValidateBy',
            description: 'Valide par une fonction personnalisée',
            options: {
                name: 'Nom du validateur',
                validator: 'Fonction de validation',
                validationOptions: 'Options de validation',
            },
        },
        {
            name: 'ValidateIf',
            description: 'Valide uniquement si la condition est remplie',
            options: {
                condition: 'Fonction de condition',
            },
        },
        {
            name: 'ValidateNested',
            description: 'Valide les propriétés imbriquées',
            options: {
                each: 'Valider chaque élément dans un tableau',
            },
        },
    ],
    transformationDecorators: [
        {
            name: 'ToBoolean',
            description: 'Convertit la valeur en booléen',
        },
        {
            name: 'ToDate',
            description: 'Convertit la valeur en date',
        },
        {
            name: 'ToArray',
            description: 'Convertit la valeur en tableau',
        },
        {
            name: 'ToNumber',
            description: 'Convertit la valeur en nombre',
        },
        {
            name: 'ToString',
            description: 'Convertit la valeur en chaîne',
        },
        {
            name: 'ToLowerCase',
            description: 'Convertit la chaîne en minuscules',
        },
        {
            name: 'ToUpperCase',
            description: 'Convertit la chaîne en majuscules',
        },
        {
            name: 'Trim',
            description:
                'Supprime les espaces au début et à la fin de la chaîne',
        },
    ],
};
