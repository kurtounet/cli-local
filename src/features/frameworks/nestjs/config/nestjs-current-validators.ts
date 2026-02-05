export const currentValidators: string[] = [
  // Types de base
  "IsString",
  "IsNumber",
  "IsBoolean",
  "IsDate",
  "IsInt",

  // Validation de chaîne
  "IsEmail",
  "Length",
  "MinLength",
  "MaxLength",
  "Matches",

  // Tableaux
  "IsArray",
  "ArrayNotEmpty",
  "ArrayMinSize",
  "ArrayMaxSize",

  // Champs obligatoires
  "IsDefined",
  "IsNotEmpty",
  "IsOptional",

  // Nombres
  "Min",
  "Max",
  "IsPositive",
  "IsNegative",

  // Objets imbriqués
  "ValidateNested",
  "Type", // `Type` vient de class-transformer

  // Autres très utiles
  // "IsEnum", "IsUUID", etc. peuvent être ajoutés selon tes besoins
];

export const categoryCurrentValidators: Record<string, string[]> = {
  // 🎯 Types de base
  types: ["IsString", "IsNumber", "IsBoolean", "IsInt", "IsDate"],

  // 📬 Chaînes de caractères
  string: ["IsEmail", "MinLength", "MaxLength", "Length", "Matches"],

  // 🔢 Nombres
  number: ["Min", "Max", "IsPositive", "IsNegative"],

  // 📦 Tableaux
  array: ["IsArray", "ArrayNotEmpty", "ArrayMinSize", "ArrayMaxSize"],

  // 🧩 Champs requis ou optionnels
  required: ["IsDefined", "IsNotEmpty", "IsOptional"],

  // 🧱 Objets imbriqués (nested DTOs)
  object: [
    "ValidateNested",
    "Type", // Type vient de class-transformer
  ],
};
