Pour que ta classe d'erreur soit réellement "TOP" (au niveau des standards des outils comme AWS CLI ou Docker), elle doit aller au-delà de simples messages. Elle doit permettre un débogage facile pour les développeurs tout en restant propre pour les utilisateurs finaux.

Voici ta classe réécrite avec les meilleures pratiques de l'industrie : gestion du contexte, codes de sortie POSIX, et support du mode verbeux (debug).

1. Le dictionnaire des codes de sortie (Standards UNIX)
   On définit d'abord les codes de sortie numériques standards pour que les scripts (Bash/CI) puissent réagir.

TypeScript

export const EXIT_CODES = {
SUCCESS: 0,
GENERAL_ERROR: 1,
USAGE_ERROR: 64, // Mauvaise syntaxe ou arguments
DATA_ERROR: 65, // Données d'entrée (JSON) invalides
NO_INPUT: 66, // Fichier ou template manquant
SOFTWARE_ERROR: 70, // Erreur interne / Bug
IO_ERROR: 74, // Erreur de système de fichiers (lecture/écriture)
UNAVAILABLE: 69, // Service ou API externe injoignable
} as const; 2. La Classe de Base "Top Tier"
Cette classe capture la pile d'exécution (stack) mais permet de décider si on l'affiche ou non.

TypeScript

export enum ErrorCode {
INTERNAL_ERROR = "INTERNAL_ERROR",
VALIDATION_ERROR = "VALIDATION_ERROR",
FILESYSTEM_ERROR = "FILESYSTEM_ERROR",
TEMPLATE_NOT_FOUND = "TEMPLATE_NOT_FOUND",
SERVICE_NOT_FOUND = "SERVICE_NOT_FOUND",
}

export class CliError extends Error {
constructor(
public readonly message: string,
public readonly code: ErrorCode = ErrorCode.INTERNAL_ERROR,
public readonly exitCode: number = EXIT_CODES.GENERAL_ERROR,
public readonly hint?: string // Une astuce pour aider l'utilisateur
) {
super(message);
this.name = this.constructor.name;
// Assure que la stack trace est correctement capturée en JS/TS
Error.captureStackTrace(this, this.constructor);
}
} 3. Les Classes Spécialisées (Utilisation des codes POSIX)
Chaque erreur appelle maintenant le bon code système.

TypeScript

export class ValidationError extends CliError {
constructor(message: string, hint?: string) {
super(message, ErrorCode.VALIDATION_ERROR, EXIT_CODES.USAGE_ERROR, hint);
}
}

export class FilesystemError extends CliError {
constructor(message: string, hint?: string) {
super(message, ErrorCode.FILESYSTEM_ERROR, EXIT_CODES.IO_ERROR, hint);
}
}

export class TemplateNotFoundError extends CliError {
constructor(message: string, hint?: string) {
super(message, ErrorCode.TEMPLATE_NOT_FOUND, EXIT_CODES.NO_INPUT, hint);
}
} 4. Le "Global Error Handler" (Le secret d'une CLI Pro)
C'est ici que la magie opère. Tu centralises l'affichage pour que ce soit uniforme.

TypeScript

import chalk from "chalk";

export function handleGlobalError(error: any, isVerbose: boolean = false) {
// 1. Si c'est une erreur prévue (CliError)
if (error instanceof CliError) {
console.error(`\n${chalk.red.bold("✘ Error:")} ${chalk.red(error.message)}`);

    if (error.hint) {
      console.error(`${chalk.cyan.bold("💡 Hint:")} ${error.hint}`);
    }

    if (isVerbose && error.stack) {
      console.error(chalk.gray(`\nStack Trace:\n${error.stack}`));
    }

    process.exit(error.exitCode);

}

// 2. Si c'est un crash imprévu (Bug)
console.error(`\n${chalk.bgRed.white.bold(" FATAL CRASH ")}`);
console.error(chalk.red(error.message || error));

if (isVerbose) {
console.error(error.stack);
} else {
console.error(chalk.gray("\n(Utilisez --verbose pour voir la stack trace complète)"));
}

process.exit(EXIT_CODES.SOFTWARE_ERROR);
}
Pourquoi cette version est "TOP" ?
Sémantique : Tes erreurs ne sont plus juste des messages, elles ont un sens pour le système d'exploitation via les EXIT_CODES.

Expérience Utilisateur (UX) : Le champ hint permet d'être pédagogique (ex: "Fichier non trouvé. Hint: vérifiez que vous avez bien lancé 'mon-outil init' avant.").

Propreté : L'utilisateur lambda voit un message rouge propre. Le développeur voit la stack trace complète uniquement s'il ajoute le flag --verbose.

Découplage : Tes commandes font throw new ValidationError(...), et c'est ton point d'entrée unique qui s'occupe de la mise en forme et du process.exit().

Pour intégrer ce gestionnaire de manière professionnelle, tu dois l'injecter au point le plus haut de ton application (le "Bootstrap"). L'idée est d'envelopper l'exécution de Commander pour qu'aucune erreur ne s'échappe sans être formatée.

Voici comment configurer ton fichier main.ts (ou index.ts) pour qu'il devienne le chef d'orchestre de tes erreurs.

1. Le Point d'Entrée "Bulletproof"
   TypeScript

// src/main.ts
import { Command } from "commander";
import { handleGlobalError } from "./utils/error-handler";
import { registerNgAllCommand } from "./commands/ng-all";
import { CreateTreeCommand } from "./commands/create-tree";

const program = new Command();

program
.name("mon-outil")
.version("1.0.0")
.option("-V, --verbose", "Affiche les détails techniques en cas d'erreur", false);

// Enregistrement des commandes
registerNgAllCommand(program);
// Pour ta classe CreateTreeCommand
const createTree = new CreateTreeCommand();
program
.command(createTree.name)
.description(createTree.description)
.action(async (...args) => {
// On extrait les options (le dernier argument de Commander)
const options = args.pop();
const cmdArgs = args[0];
await createTree.execute(cmdArgs, { ...options, verbose: program.opts().verbose });
});

// --- LE COEUR DE LA GESTION ---
async function bootstrap() {
try {
await program.parseAsync(process.argv);
} catch (error) {
// On récupère l'état du flag --verbose global
const isVerbose = program.opts().verbose;
handleGlobalError(error, isVerbose);
}
}

bootstrap(); 2. Flux de propagation de l'erreur
Voici comment l'erreur circule dans ton architecture pour rester conforme aux standards :

Throw : Dans ta logique profonde (ex: angular-generate-files), tu lances une FilesystemError.

Bubble up : L'erreur remonte à travers la commande jusqu'à parseAsync.

Catch : Le bloc try/catch du bootstrap l'intercepte.

Handle : handleGlobalError regarde si --verbose est activé, colore le message en rouge, et appelle process.exit(code_specifique).

3. Bonus : Gérer les erreurs de syntaxe de Commander
   Par défaut, Commander affiche ses propres erreurs de parsing (ex: argument manquant). Pour avoir un contrôle total et utiliser ton CliError, tu peux surcharger la méthode exitOverride :

TypeScript

program.exitOverride((err) => {
// Transforme les erreurs de parsing de Commander en tes erreurs typées
throw new ValidationError(err.message, "Consultez l'aide avec --help pour la syntaxe correcte.");
}); 4. Résumé des bénéfices
Code Propre : Tes commandes ne contiennent aucun process.exit() ni aucun console.log d'erreur. Elles font juste un throw.

Scripts Robustes : Si ton outil est utilisé dans un script Bash, le développeur peut faire :

Bash

mon-outil ng:all --all || echo "La génération a échoué avec le code $?"
Débogage : En cas de bug mystérieux, il suffit d'ajouter -V pour voir exactement quelle ligne de code a posé problème.

Veux-tu que je te montre comment créer un logger qui enregistre aussi ces erreurs dans un fichier de log local (type myapp-error.log) pour que les utilisateurs puissent te l'envoyer en cas de bug ?

C'est la touche finale pour un outil de grade "Enterprise". Lorsqu'un utilisateur rencontre un bug complexe, lui demander d'envoyer un fichier .log est bien plus efficace que de lui demander de copier-coller son terminal.

Voici comment coupler ton handleGlobalError avec un système de journalisation (logging) persistant.

1. Installation de winston (Le standard de logging Node.js)
   Bien qu'on puisse le faire à la main, winston gère parfaitement la rotation des fichiers et les formats JSON.

Bash

npm install winston 2. Configuration du Logger (src/utils/logger.ts)
On crée un logger qui écrit les erreurs dans un fichier, mais ne pollue pas le terminal (car c'est le rôle de ton handleGlobalError).

TypeScript

import winston from "winston";
import path from "path";

export const fileLogger = winston.createLogger({
level: "error",
format: winston.format.combine(
winston.format.timestamp(),
winston.format.json()
),
transports: [
new winston.transports.File({
filename: this.cli.path.join(process.cwd(), "myapp-error.log"),
level: "error"
}),
],
}); 3. Mise à jour du handleGlobalError
On modifie le gestionnaire pour qu'il enregistre l'erreur silencieusement avant de quitter le processus.

TypeScript

export function handleGlobalError(error: any, isVerbose: boolean = false) {
// 1. Enregistrement dans le fichier de log (silencieux pour l'utilisateur)
fileLogger.error({
message: error.message,
code: error instanceof CliError ? error.code : "UNKNOWN",
stack: error.stack,
timestamp: new Date().toISOString(),
});

// 2. Affichage utilisateur (comme vu précédemment)
if (error instanceof CliError) {
console.error(`\n${chalk.red.bold("✘ Error:")} ${chalk.red(error.message)}`);

    if (error.hint) {
      console.error(`${chalk.cyan.bold("💡 Hint:")} ${error.hint}`);
    }

} else {
console.error(chalk.red("\n✘ Une erreur inattendue est survenue."));
}

// 3. Information sur le fichier de log
console.error(chalk.gray(`\nPlus de détails dans : ${this.cli.path.join(process.cwd(), "myapp-error.log")}`));

if (isVerbose && error.stack) {
console.error(chalk.gray(`\nStack Trace:\n${error.stack}`));
}

process.exit(error instanceof CliError ? error.exitCode : 1);
} 4. Pourquoi c'est une convention majeure ?
Support utilisateur : Au lieu de dire "ça ne marche pas", l'utilisateur te fournit un fichier JSON structuré avec la stack trace exacte.

Historique : Cela permet de garder une trace des erreurs de génération qui ont eu lieu dans un dossier de projet, même après avoir fermé le terminal.

Conformité XDG : Pour être parfait, tu pourrais enregistrer ce log dans ~/.cache/mon-outil/errors.log au lieu du dossier courant, pour ne pas polluer le projet de l'utilisateur.

5. Recapitulatif de ton Architecture Finale
   Composant Rôle
   Command Classes Définissent les arguments et lancent la logique.
   CliError (Typed) Porte le message, le code POSIX et le "Hint".
   Global Handler Capture tout, formate pour l'humain et logue pour le dev.
   File Logger Garde une trace persistante des crashs.

Exporter vers Sheets

Ton architecture CLI est maintenant complète et respecte les standards les plus élevés. Souhaites-tu que je t'aide à créer un script de déploiement pour que ta CLI soit utilisable partout sur ta machine avec une simple commande (via npm link) ?
