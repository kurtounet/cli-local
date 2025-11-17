// import * as fs from "fs-extra";
// import * as path from "path";
// import { Command } from "commander";
// import inquirer from "inquirer";

// export function registerAddPerfixSuffixFileCommand(program: Command) {
//   program
//     .command("prefix")
//     .argument("<directory>")
//     .description(
//       "Ajouter un préfixe ou suffixe à tous les fichiers d'un dossier",
//     )
//     .option(
//       "-d, --depth <number>",
//       "Profondeur maximale pour la recherche récursive",
//       (val) => parseInt(val, 10),
//       Infinity,
//     )
//     .action(async (directory: string, options: { depth: number }) => {
//       try {
//         // Vérifier si le dossier existe
//         if (!(await fs.pathExists(directory))) {
//           console.error(`${EMOJI.error} Le dossier "${directory}" n'existe pas.`);
//           return;
//         }

//         // Vérifier si c'est bien un dossier
//         const stats = await fs.stat(directory);
//         if (!stats.isDirectory()) {
//           console.error(`${EMOJI.error} "${directory}" n'est pas un dossier.`);
//           return;
//         }

//         // Récupérer tous les fichiers
//         const files = await getFilesRecursively(directory, options.depth);

//         if (files.length === 0) {
//           logInfo("📂 Aucun fichier trouvé dans ce dossier.");
//           return;
//         }

//         logInfo(
//           `📁 ${files.length} fichier(s) trouvé(s) dans "${directory}"`,
//         );

//         // Questions pour l'utilisateur
//         const answers = await inquirer.prompt([
//           {
//             type: "list",
//             name: "action",
//             message: "Que souhaitez-vous faire ?",
//             choices: [
//               { name: "Ajouter un préfixe", value: "prefix" },
//               { name: "Ajouter un suffixe", value: "suffix" },
//               { name: "supprimer un mot", value: "remove" },
//               { name: "Annuler", value: "cancel" },
//             ],
//           },
//         ]);

//         if (answers.action === "cancel") {
//           logInfo("🚫 Opération annulée.");
//           return;
//         }

//         const textAnswer = await inquirer.prompt([
//           {
//             type: "input",
//             name: "text",
//             message: `Entrez le ${answers.action === "prefix" ? "préfixe" : "suffixe"} à ajouter :`,
//             validate: (input: string) => {
//               if (!input.trim()) {
//                 return "Veuillez entrer un texte valide.";
//               }
//               // Vérifier les caractères interdits dans les noms de fichiers
//               const invalidChars = /[<>:"/\\|?*]/;
//               if (invalidChars.test(input)) {
//                 return "Le texte contient des caractères interdits dans les noms de fichiers.";
//               }
//               return true;
//             },
//           },
//         ]);

//         // Aperçu des changements
//         logInfo("\n📋 Aperçu des changements :");
//         const changes = files.map((file) => {
//           const dir = path.dirname(file);
//           const ext = path.extname(file);
//           const baseName = path.basename(file, ext);

//           let newName: string;
//           if (answers.action === "prefix") {
//             newName = `${textAnswer.text}${baseName}${ext}`;
//           } else {
//             newName = `${baseName}${textAnswer.text}${ext}`;
//           }

//           const newPath = path.join(dir, newName);
//           return {
//             oldPath: file,
//             newPath,
//             oldName: path.basename(file),
//             newName,
//           };
//         });

//         // Vérifier les conflits
//         const conflicts = await checkForConflicts(changes);
//         if (conflicts.length > 0) {
//           logInfo("\n⚠️  Conflits détectés :");
//           conflicts.forEach((conflict) => {
//             logInfo(`   - "${conflict.newName}" existe déjà`);
//           });

//           const conflictAnswer = await inquirer.prompt([
//             {
//               type: "confirm",
//               name: "proceed",
//               message:
//                 "Voulez-vous continuer malgré les conflits ? (les fichiers existants seront écrasés)",
//               default: false,
//             },
//           ]);

//           if (!conflictAnswer.proceed) {
//             logInfo("🚫 Opération annulée.");
//             return;
//           }
//         }

//         // Afficher l'aperçu
//         changes.slice(0, 10).forEach((change) => {
//           logInfo(`   📄 "${change.oldName}" → "${change.newName}"`);
//         });

//         if (changes.length > 10) {
//           logInfo(`   ... et ${changes.length - 10} autre(s) fichier(s)`);
//         }

//         // Confirmation finale
//         const confirmAnswer = await inquirer.prompt([
//           {
//             type: "confirm",
//             name: "confirm",
//             message: `Confirmer la modification de ${changes.length} fichier(s) ?`,
//             default: false,
//           },
//         ]);

//         if (!confirmAnswer.confirm) {
//           logInfo("🚫 Opération annulée.");
//           return;
//         }

//         // Effectuer les changements
//         logInfo("\n🔄 Renommage en cours...");
//         let successCount = 0;
//         let errorCount = 0;

//         for (const change of changes) {
//           try {
//             await fs.rename(change.oldPath, change.newPath);
//             successCount++;
//           } catch (error) {
//             console.error(
//               `${EMOJI.error} Erreur lors du renommage de "${change.oldName}" : ${error}`,
//             );
//             errorCount++;
//           }
//         }

//         logInfo(`\n✅ Opération terminée :`);
//         logInfo(`   - ${successCount} fichier(s) renommé(s) avec succès`);
//         if (errorCount > 0) {
//           logInfo(`   - ${errorCount} erreur(s)`);
//         }
//       } catch (error) {
//         console.error("${EMOJI.error} Erreur lors de l'exécution :", error);
//       }
//     });
// }

// async function getFilesRecursively(
//   dir: string,
//   maxDepth: number,
//   currentDepth = 0,
// ): Promise<string[]> {
//   const files: string[] = [];

//   if (currentDepth >= maxDepth) {
//     return files;
//   }

//   try {
//     const entries = await fs.readdir(dir);

//     for (const entry of entries) {
//       const fullPath = path.join(dir, entry);
//       const stats = await fs.stat(fullPath);

//       if (stats.isFile()) {
//         files.push(fullPath);
//       } else if (stats.isDirectory()) {
//         const subFiles = await getFilesRecursively(
//           fullPath,
//           maxDepth,
//           currentDepth + 1,
//         );
//         files.push(...subFiles);
//       }
//     }
//   } catch (error) {
//     console.error(
//       `${EMOJI.error} Erreur lors de la lecture du dossier "${dir}" : ${error}`,
//     );
//   }

//   return files;
// }

// async function checkForConflicts(
//   changes: Array<{
//     oldPath: string;
//     newPath: string;
//     oldName: string;
//     newName: string;
//   }>,
// ): Promise<Array<{ newName: string; newPath: string }>> {
//   const conflicts: Array<{ newName: string; newPath: string }> = [];

//   for (const change of changes) {
//     try {
//       // Vérifier si le fichier de destination existe déjà (et ce n'est pas le fichier source)
//       if (
//         (await fs.pathExists(change.newPath)) &&
//         change.oldPath !== change.newPath
//       ) {
//         conflicts.push({ newName: change.newName, newPath: change.newPath });
//       }
//     } catch (error) {
//       console.error(`${EMOJI.error} Ignorer les erreurs de vérification`);
//     }
//   }

//   return conflicts;
// }
import * as fs from "fs-extra";
import * as path from "path";
import { Command } from "commander";
import inquirer from "inquirer";
import { logInfo } from "@utils/logger";
import { EMOJI } from "@constants/messages";

export function registerAddPerfixSuffixFileCommand(program: Command) {
  program
    .command("prefix")
    .argument("<directory>")
    .description(
      "Ajouter un préfixe ou suffixe à tous les fichiers d'un dossier, ou supprimer un mot",
    )
    .option(
      "-d, --depth <number>",
      "Profondeur maximale pour la recherche récursive",
      (val) => parseInt(val, 10),
      Infinity,
    )
    .action(async (directory: string, options: { depth: number }) => {
      try {
        // Vérifier si le dossier existe
        if (!(await fs.pathExists(directory))) {
          console.error(`${EMOJI.error} Le dossier "${directory}" n'existe pas.`);
          return;
        }

        // Vérifier si c'est bien un dossier
        const stats = await fs.stat(directory);
        if (!stats.isDirectory()) {
          console.error(`${EMOJI.error} "${directory}" n'est pas un dossier.`);
          return;
        }

        // Récupérer tous les fichiers
        const files = await getFilesRecursively(directory, options.depth);

        if (files.length === 0) {
          logInfo("📂 Aucun fichier trouvé dans ce dossier.");
          return;
        }

        logInfo(
          `📁 ${files.length} fichier(s) trouvé(s) dans "${directory}"`,
        );

        // Questions pour l'utilisateur
        const answers = await inquirer.prompt([
          {
            type: "list",
            name: "action",
            message: "Que souhaitez-vous faire ?",
            choices: [
              { name: "Ajouter un préfixe", value: "prefix" },
              { name: "Ajouter un suffixe", value: "suffix" },
              { name: "Supprimer un mot", value: "remove" },
              { name: "Annuler", value: "cancel" },
            ],
          },
        ]);

        if (answers.action === "cancel") {
          logInfo("🚫 Opération annulée.");
          return;
        }

        const textAnswer = await inquirer.prompt([
          {
            type: "input",
            name: "text",
            message: getPromptMessage(answers.action),
            validate: (input: string) => {
              if (!input.trim()) {
                return "Veuillez entrer un texte valide.";
              }
              // Pour la suppression, pas besoin de vérifier les caractères interdits
              if (answers.action !== "remove") {
                const invalidChars = /[<>:"/\\|?*]/;
                if (invalidChars.test(input)) {
                  return "Le texte contient des caractères interdits dans les noms de fichiers.";
                }
              }
              return true;
            },
          },
        ]);

        // Aperçu des changements
        logInfo("\n📋 Aperçu des changements :");
        const changes = files.map((file) => {
          const dir = path.dirname(file);
          const ext = path.extname(file);
          const baseName = path.basename(file, ext);

          let newName: string;
          if (answers.action === "prefix") {
            newName = `${textAnswer.text}${baseName}${ext}`;
          } else if (answers.action === "suffix") {
            newName = `${baseName}${textAnswer.text}${ext}`;
          } else if (answers.action === "remove") {
            // Supprimer toutes les occurrences du mot (insensible à la casse)
            const cleanedBaseName = baseName.replace(
              new RegExp(escapeRegExp(textAnswer.text), "gi"),
              "",
            );
            newName = `${cleanedBaseName}${ext}`;
          } else {
            newName = `${baseName}${ext}`;
          }

          const newPath = path.join(dir, newName);
          return {
            oldPath: file,
            newPath,
            oldName: path.basename(file),
            newName,
          };
        });

        // Filtrer les fichiers qui n'ont pas changé (pour la suppression)
        const actualChanges = changes.filter(
          (change) => change.oldName !== change.newName,
        );

        if (actualChanges.length === 0) {
          logInfo(
            `📂 Aucun fichier ne contient le mot "${textAnswer.text}" à supprimer.`,
          );
          return;
        }

        // Vérifier les conflits
        const conflicts = await checkForConflicts(actualChanges);
        if (conflicts.length > 0) {
          logInfo("\n⚠️  Conflits détectés :");
          conflicts.forEach((conflict) => {
            logInfo(`   - "${conflict.newName}" existe déjà`);
          });

          const conflictAnswer = await inquirer.prompt([
            {
              type: "confirm",
              name: "proceed",
              message:
                "Voulez-vous continuer malgré les conflits ? (les fichiers existants seront écrasés)",
              default: false,
            },
          ]);

          if (!conflictAnswer.proceed) {
            logInfo("🚫 Opération annulée.");
            return;
          }
        }

        // Afficher l'aperçu
        actualChanges.slice(0, 10).forEach((change) => {
          logInfo(`   📄 "${change.oldName}" → "${change.newName}"`);
        });

        if (actualChanges.length > 10) {
          logInfo(
            `   ... et ${actualChanges.length - 10} autre(s) fichier(s)`,
          );
        }

        // Confirmation finale
        const confirmAnswer = await inquirer.prompt([
          {
            type: "confirm",
            name: "confirm",
            message: `Confirmer la modification de ${actualChanges.length} fichier(s) ?`,
            default: false,
          },
        ]);

        if (!confirmAnswer.confirm) {
          logInfo("🚫 Opération annulée.");
          return;
        }

        // Effectuer les changements
        logInfo("\n🔄 Renommage en cours...");
        let successCount = 0;
        let errorCount = 0;

        for (const change of actualChanges) {
          try {
            await fs.rename(change.oldPath, change.newPath);
            successCount++;
          } catch (error) {
            console.error(
              `${EMOJI.error} Erreur lors du renommage de "${change.oldName}" : ${error}`,
            );
            errorCount++;
          }
        }

        logInfo(`\n✅ Opération terminée :`);
        logInfo(`   - ${successCount} fichier(s) renommé(s) avec succès`);
        if (errorCount > 0) {
          logInfo(`   - ${errorCount} erreur(s)`);
        }
      } catch (error) {
        console.error("${EMOJI.error} Erreur lors de l'exécution :", error);
      }
    });
}

function getPromptMessage(action: string): string {
  switch (action) {
    case "prefix":
      return "Entrez le préfixe à ajouter :";
    case "suffix":
      return "Entrez le suffixe à ajouter :";
    case "remove":
      return "Entrez le mot à supprimer des noms de fichiers :";
    default:
      return "Entrez le texte :";
  }
}

function escapeRegExp(string: string): string {
  // Échapper les caractères spéciaux des expressions régulières
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function getFilesRecursively(
  dir: string,
  maxDepth: number,
  currentDepth = 0,
): Promise<string[]> {
  const files: string[] = [];

  if (currentDepth >= maxDepth) {
    return files;
  }

  try {
    const entries = await fs.readdir(dir);

    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stats = await fs.stat(fullPath);

      if (stats.isFile()) {
        files.push(fullPath);
      } else if (stats.isDirectory()) {
        const subFiles = await getFilesRecursively(
          fullPath,
          maxDepth,
          currentDepth + 1,
        );
        files.push(...subFiles);
      }
    }
  } catch (error) {
    console.error(
      `${EMOJI.error} Erreur lors de la lecture du dossier "${dir}" : ${error}`,
    );
  }

  return files;
}

async function checkForConflicts(
  changes: Array<{
    oldPath: string;
    newPath: string;
    oldName: string;
    newName: string;
  }>,
): Promise<Array<{ newName: string; newPath: string }>> {
  const conflicts: Array<{ newName: string; newPath: string }> = [];

  for (const change of changes) {
    try {
      // Vérifier si le fichier de destination existe déjà (et ce n'est pas le fichier source)
      if (
        (await fs.pathExists(change.newPath)) &&
        change.oldPath !== change.newPath
      ) {
        conflicts.push({ newName: change.newName, newPath: change.newPath });
      }
    } catch (error) {
      console.error(`${EMOJI.error} Ignorer les erreurs de vérification`);
    }
  }

  return conflicts;
}
