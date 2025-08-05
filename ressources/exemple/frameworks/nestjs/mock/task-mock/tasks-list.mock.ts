import { TYPE_TASK } from '@mocks/manager-project/type-tasks.mock';

export const ELECTRON_TASKS_LIST = [
    {
        label: 'Installation du framework',
        parentTasks: 3,
        action: TYPE_TASK[0],
    },
    {
        label: 'Installation des dépendances',
        parentTasks: 3,
        action: TYPE_TASK[0],
    },
    { label: 'Commit initial', parentTasks: 3, action: TYPE_TASK[0] },
    {
        label: 'Création des branches git',
        parentTasks: 3,
        action: TYPE_TASK[0],
    },
    {
        label: 'Création du dossier .cli-local',
        parentTasks: 9,
        action: TYPE_TASK[1],
    },
    {
        label: "Création des dossier d'architecture",
        parentTasks: 9,
        action: TYPE_TASK[1],
    },
    {
        label: 'Mettre à jour le fichier package.json',
        parentTasks: null,
        action: TYPE_TASK[3],
    },
    {
        label: 'Mettre à jour le fichier tsconfig.json',
        parentTasks: null,
        action: TYPE_TASK[3],
    },
    {
        label: 'Mettre à jour le .gitignore',
        parentTasks: null,
        action: TYPE_TASK[3],
    },
    { label: 'executer commande', parentTasks: null, action: TYPE_TASK[2] },
];
