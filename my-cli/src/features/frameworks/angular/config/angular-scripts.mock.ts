export function SCRIPTS_ANGULAR_MOCK() {
  return ` 
    "modules": "clinode nest:mdj:all gest-project .docs/mcd.mdj --force",
    "fixtures": "clinode create:mdj:fixtures gest-project .docs/mcd.mdj src/fixtures --force",
    "seed": "ts-node -r tsconfig-paths/register src/seeds/main.seed.ts",
    "plan": "clinode create:plan gest-project",
    "format":  "prettier --write \"src/**/*.ts\" \"test/**/*.ts\" \"libs/**/*.ts\" \"apps/**/*.ts\" \"apps/**/*.html\" \"apps/**/*.scss\"",
  }`;
}
