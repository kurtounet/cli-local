export function SCRIPTS_SYMFONY_MOCK() {
  return ` 
    "modules": "clinode nest:mdj:all gest-project .docs/mcd.mdj --force",
    "fixtures": "clinode create:mdj:fixtures gest-project .docs/mcd.mdj src/fixtures --force",
    "seed": "ts-node -r tsconfig-paths/register src/seeds/main.seed.ts",
    "plan": "clinode create:plan gest-project"
  }`;
}
