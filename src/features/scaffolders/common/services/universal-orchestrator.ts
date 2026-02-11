// import { IAppContext } from "@/types/context.interface.js";

// export class UniversalOrchestrator {
//   constructor(private cli: IAppContext) {}
//   // Cette méthode charge dynamiquement le portail (index.ts) du framework
//   private async getFrameworkGen(frameworkName: string) {
//     try {
//       // Import dynamique basé sur le nom passé en argument
//       const module = await import(`./features/frameworks/${frameworkName}/services/index.ts`);

//       // On récupère l'objet exporté (ex: NuxtGen, AngularGen)
//       const genName = frameworkName.charAt(0).toUpperCase() + frameworkName.slice(1) + "Gen";
//       return module[genName];
//     } catch (e) {
//       console.error(`Impossible de charger le framework : ${frameworkName}`);
//       return null;
//     }
//   }

//   public async generate(framework: string, type: string, subType: string, entity: IEntityJson) {
//     const gen = await this.getFrameworkGen(framework);

//     if (gen && gen[type] && gen[type][subType]) {
//       const code = gen[type][subType](entity);
//       this.cli.fileSystem.writeFile(`${framework}/${subType}`, `${entity.name}.ts`, code);
//     }
//   }
// }
