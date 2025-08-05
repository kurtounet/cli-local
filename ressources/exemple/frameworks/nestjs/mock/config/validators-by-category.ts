// Décorateurs class-validator par catégorie
/* 
 

1. `stringValidators` - Pour la validation des chaînes de caractères (comme email, URL, formats spécifiques)
2. `numberValidators` - Pour la validation des nombres (min, max, entiers, etc.)
3. `dateValidators` - Pour la validation des dates
4. `arrayValidators` - Pour la validation des tableaux
5. `objectValidators` - Pour la validation des objets
6. `booleanValidators` - Pour la validation des booléens
7. `commonValidators` - Validateurs généraux utilisés fréquemment
8. `conditionalValidators` - Pour la validation conditionnelle
9. `typeValidators` - Pour la validation de types spécifiques
10. `customValidators` - Pour créer des validateurs personnalisés
11. `transformationDecorators` - Pour transformer les données (pas strictement des validateurs)

 */

// Validateurs de chaînes de caractères
export const stringValidators = [
    '@IsAlpha',
    '@IsAlphanumeric',
    '@IsAscii',
    '@IsBase32',
    '@IsBase64',
    '@IsBIC',
    '@IsBtcAddress',
    '@IsByteLength',
    '@IsCreditCard',
    '@IsCurrency',
    '@IsDataURI',
    '@IsDecimal',
    '@IsEAN',
    '@IsEmail',
    '@IsEthereumAddress',
    '@IsFQDN',
    '@IsFullWidth',
    '@IsHSL',
    '@IsHalfWidth',
    '@IsHash',
    '@IsHexColor',
    '@IsHexadecimal',
    '@IsIBAN',
    '@IsIP',
    '@IsISBN',
    '@IsISIN',
    '@IsISO31661Alpha2',
    '@IsISO31661Alpha3',
    '@IsISO4217',
    '@IsISO8601',
    '@IsISRC',
    '@IsISSN',
    '@IsIdentityCard',
    '@IsJSON',
    '@IsJWT',
    '@IsLatLong',
    '@IsLicensePlate',
    '@IsLocale',
    '@IsLowercase',
    '@IsMacAddress',
    '@IsMagnetURI',
    '@IsMilitaryTime',
    '@IsMimeType',
    '@IsMobilePhone',
    '@IsMongoId',
    '@IsMultibyte',
    '@IsNumberString',
    '@IsOctal',
    '@IsPassportNumber',
    '@IsPhoneNumber',
    '@IsPort',
    '@IsPostalCode',
    '@IsRFC3339',
    '@IsRgbColor',
    '@IsSemVer',
    '@IsStrongPassword',
    '@IsSurrogatePair',
    '@IsTimeZone',
    '@IsUppercase',
    '@IsUrl',
    '@IsUUID',
    '@IsVariableWidth',
    '@Length',
    '@Matches',
    '@MaxLength',
    '@MinLength',
    '@NotContains',
    '@Contains',
    '@IsString',
];

// Validateurs numériques
export const numberValidators = [
    '@Max',
    '@Min',
    '@IsInt',
    '@Negative',
    '@Positive',
    '@IsNumber',
    '@PositiveOrZero',
    '@IsDivisibleBy',
    '@NegativeOrZero',
];

// Validateurs de dates
export const dateValidators = ['@IsDate', '@MaxDate', '@MinDate'];

// Validateurs de tableaux
export const arrayValidators = [
    '@IsArray',
    '@ArrayUnique',
    '@ArrayContains',
    '@ArrayNotEmpty',
    '@ArrayNotContains',
];

// Validateurs d'objets
export const objectValidators = [
    '@IsObject',
    '@IsInstance',
    '@IsNotEmptyObject',
];

// Validateurs booléens
export const booleanValidators = ['@IsBoolean'];

// Validateurs généraux/communs
export const commonValidators = [
    '@IsIn',
    '@Allow',
    '@IsEnum',
    '@Equals',
    '@IsEmpty',
    '@IsNotIn',
    '@IsDefined',
    '@NotEquals',
    '@IsNotEmpty',
    '@IsOptional',
    '@IsLatitude',
    '@IsLongitude',
    '@ValidateNested',
    '@ValidatePromise',
];

// Validateurs conditionnels
export const conditionalValidators = ['@ValidateIf', '@ValidateUndefined'];

// Validateurs de type
export const typeValidators = ['@Type', '@IsBooleanString', '@IsNumberString'];

// Décorateurs personnalisés
export const customValidators = ['@Validate', '@ValidatorConstraint'];

// Décorateurs de transformation (pas strictement des validateurs)
export const transformationDecorators = ['@Transform'];

// Tous les validateurs combinés
export const allValidators = [
    ...stringValidators,
    ...numberValidators,
    ...dateValidators,
    ...arrayValidators,
    ...objectValidators,
    ...booleanValidators,
    ...commonValidators,
    ...conditionalValidators,
    ...typeValidators,
    ...customValidators,
    ...transformationDecorators,
];

export const validatorI: { [category: string]: string[] } = {
    // Types de base
    types: [
        'IsBoolean',
        'IsDate',
        'IsString',
        'IsNumber',
        'IsInt',
        'IsArray',
        'IsEnum',
        'IsObject',
        'IsInstance',
    ],

    // Chaînes de caractères
    string: [
        'Contains',
        'NotContains',
        'IsEmail',
        'IsFQDN',
        'IsURL',
        'IsUUID',
        'Length',
        'MinLength',
        'MaxLength',
        'Matches',
        'IsAlpha',
        'IsAlphanumeric',
        'IsDecimal',
        'IsAscii',
        'IsBase64',
        'IsCreditCard',
        'IsCurrency',
        'IsJSON',
        'IsJWT',
        'IsLowercase',
        'IsUppercase',
        'IsMobilePhone',
        'IsPhoneNumber',
        'IsPostalCode',
        'IsHexColor',
        'IsRgbColor',
        'IsHSL',
        'IsISBN',
        'IsISSN',
        'IsMACAddress',
        'IsIP',
        'IsPort',
        'IsDataURI',
        'IsHash',
        'IsMimeType',
        'IsSemVer',
        'IsISRC',
        'IsLocale',
    ],

    // Nombres
    number: ['Min', 'Max', 'IsDivisibleBy', 'IsPositive', 'IsNegative'],

    // Tableaux
    array: [
        'ArrayContains',
        'ArrayNotContains',
        'ArrayNotEmpty',
        'ArrayMinSize',
        'ArrayMaxSize',
        'ArrayUnique',
    ],

    // Dates
    date: ['MinDate', 'MaxDate'],

    // Objets
    object: ['IsNotEmptyObject', 'ValidateNested'],

    // Comparaison & égalité
    comparison: [
        'Equals',
        'NotEquals',
        'IsEmpty',
        'IsNotEmpty',
        'IsIn',
        'IsNotIn',
    ],

    // Validation conditionnelle
    conditional: [
        'IsDefined',
        'Allow',
        'ValidateIf',
        'ValidatePromise',
        'Validate',
        'ValidateBy',
    ],

    // Transformateurs
    transformer: [
        'ToBoolean',
        'ToDate',
        'ToArray',
        'ToNumber',
        'ToString',
        'ToLowerCase',
        'ToUpperCase',
        'Trim',
    ],
};

export const validatorImport: Array<string> = [
    'IsBoolean',
    'IsDate',
    'IsString',
    'IsNumber',
    'IsInt',
    'IsArray',
    'IsEnum',
    'IsObject',
    'Contains',
    'NotContains',
    'IsEmail',
    'IsFQDN',
    'IsURL',
    'IsUUID',
    'Length',
    'MinLength',
    'MaxLength',
    'Matches',
    'IsAlpha',
    'IsAlphanumeric',
    'IsDecimal',
    'IsAscii',
    'IsBase64',
    'IsCreditCard',
    'IsCurrency',
    'IsJSON',
    'IsJWT',
    'IsLowercase',
    'IsUppercase',
    'IsMobilePhone',
    'IsPhoneNumber',
    'IsPostalCode',
    'IsHexColor',
    'IsRgbColor',
    'IsHSL',
    'IsISBN',
    'IsISSN',
    'IsMACAddress',
    'IsIP',
    'IsPort',
    'IsDataURI',
    'IsHash',
    'IsMimeType',
    'IsSemVer',
    'IsISRC',
    'IsLocale',
    'Min',
    'Max',
    'IsDivisibleBy',
    'IsPositive',
    'IsNegative',
    'ArrayContains',
    'ArrayNotContains',
    'ArrayNotEmpty',
    'ArrayMinSize',
    'ArrayMaxSize',
    'ArrayUnique',
    'MinDate',
    'MaxDate',
    'IsInstance',
    'IsNotEmptyObject',
    'ValidateNested',
    'Equals',
    'NotEquals',
    'IsEmpty',
    'IsNotEmpty',
    'IsIn',
    'IsNotIn',
    'IsDefined',
    'Allow',
    'ValidateIf',
    'ValidatePromise',
    'Validate',
    'ValidateBy',
    'ToBoolean',
    'ToDate',
    'ToArray',
    'ToNumber',
    'ToString',
    'ToLowerCase',
    'ToUpperCase',
    'Trim',
];
