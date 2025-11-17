import { getEntities } from "@parsersMdj/services/get-entities.service";
import { IGetEntityJson } from "types/common";

export function getFilesEntitiesJson(mdjFile: string): IGetEntityJson | string {
  return getEntities(mdjFile);
  // let cliNodePath = path.join(frameWorkPath, `.cli-local`);
  // if (!fs.existsSync(cliNodePath)) {
  //     fs.mkdirSync(cliNodePath);
  // }
  // fs.writeFileSync(path.join(cliNodePath, 'config.json'), JSON.stringify(configFile, null, 2));
  // fs.writeFileSync(path.join(cliNodePath, 'architecture.json'), JSON.stringify(configFile, null, 2));
  // fs.writeFileSync(path.join(cliNodePath, 'to-do.json'), JSON.stringify(configFile, null, 2));
  // //fs.writeFileSync(path.join(cliNodePath, 'mcd.mdj'), JSON.stringify(mdjFile, null, 2));

  // if (configFile.starUml) {
  //     logInfo(configFile.starUml);
  //     logInfo(cliNodePath);
  //     // fs.copyFileSync(configFile.starUml, cliNodePath);
  // }

  // if (typeof dictionaries === "string") {
  //     return dictionaries;
  // }
  // Object.entries(dictionaries).map(([key, value]) => {
  //     fs.writeFileSync(
  //         path.join(cliNodePath, `${key}.json`),
  //         JSON.stringify(value, null, 2)
  //     );
  // });

  // if (frameWork.architecture.folders.length > 0) {
  //   try {
  //     let [frameWorkFolders, frameWorkFiles] = createStructure(frameWorkPath, frameWork.architecture);
  //     logInfo(frameWorkFolders);
  //     logInfo(frameWorkFiles);
  //     executeCommand(
  //       `git add . && git commit -m "creation structure"`,
  //       { cwd: `${frameWorkPath}`, stdio: "inherit" },
  //       `🚀 Création du commit Initiale`,
  //       `✅ Commit créé avec succès !`,
  //       `${EMOJI.error} Erreur lors du commit !`
  //     );
  //   } catch (error) {
  //     return `${EMOJI.error} Erreur lors de la création de l'architecture !`;
  //   }
  // } else {
  //   return `✅ Aucune architecture à créer !`;
  // }
  // return `✅ CliNodeDirectory créée avec succès !`;
}
