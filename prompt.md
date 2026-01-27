pour chaque services :
Ajouter:
readonly serviceName = "NomduService";

public override async init(): Promise<void> {
// Si tu n'as rien à initialiser pour l'instant :
return Promise.resolve();
}

et pour les interface:
Ajouter:
readonly serviceName: string;
init(): Promise<void>;
