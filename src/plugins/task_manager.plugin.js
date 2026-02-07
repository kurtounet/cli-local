import * as path from "node:path";
import { fileURLToPath } from "node:url";

const DATA_FILE = "task_manager.data.json";

function getDirname() {
  const __filename = fileURLToPath(import.meta.url);
  return path.dirname(__filename);
}

// Détection de cycle (Prévention de boucle infinie)
function wouldCreateCycle(taskId, newDeps, allTasks) {
  const visited = new Set();
  const queue = [...newDeps];
  while (queue.length > 0) {
    const currentId = queue.shift();
    if (currentId === taskId) return true;
    if (!visited.has(currentId)) {
      visited.add(currentId);
      const currentTask = allTasks.find((t) => t.id === currentId);
      if (currentTask && currentTask.dependsOn) queue.push(...currentTask.dependsOn);
    }
  }
  return false;
}

async function loadTasks(context) {
  const dataPath = this.cli.path.join(getDirname(), DATA_FILE);
  try {
    const data = await context.fs.readFile(dataPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return { tasks: [], taskIdCounter: 0 };
  }
}

async function saveTasks(context, data) {
  const dataPath = this.cli.path.join(getDirname(), DATA_FILE);
  await context.fs.writeFile(dataPath, JSON.stringify(data, null, 2));
}

export default class TaskManagerPlugin {
  static definition = {
    name: "task_manager",
    description:
      "Système de gestion de tâches professionnel avec tags, dépendances et traçabilité.",
    inputSchema: {
      type: "object",
      properties: {
        action: { type: "string", enum: ["add", "list", "update", "stats"] },
        description: { type: "string" },
        taskId: { type: "integer" },
        status: { type: "string", enum: ["todo", "progress", "completed"] },
        priority: { type: "string", enum: ["low", "medium", "high"] },
        assignee: { type: "string", description: "Nom du responsable." },
        user: {
          type: "string",
          description: "Utilisateur effectuant l'action.",
        },
        tags: {
          type: "array",
          items: { type: "string" },
          description: "Ex: ['Projet A', 'Urgent']",
        },
        dependsOn: { type: "array", items: { type: "integer" } },
        search: {
          type: "string",
          description: "Recherche par texte ou par tag.",
        },
      },
      required: ["action", "user"],
      allOf: [
        {
          if: { properties: { action: { const: "add" } } },
          then: { required: ["description"] },
        },
        {
          if: { properties: { action: { const: "update" } } },
          then: { required: ["taskId"] },
        },
      ],
    },
  };

  static isWriting = false;

  async execute(args, context) {
    while (TaskManagerPlugin.isWriting) await new Promise((r) => setTimeout(r, 50));

    try {
      TaskManagerPlugin.isWriting = true;
      const {
        action,
        description,
        taskId,
        status,
        priority,
        assignee,
        user,
        tags,
        dependsOn,
        search,
      } = args;
      const data = await loadTasks(context);
      let { tasks, taskIdCounter } = data;

      switch (action) {
        case "add":
          if (dependsOn && wouldCreateCycle(null, dependsOn, tasks))
            return {
              success: false,
              message: "Boucle de dépendance détectée.",
            };

          const nextId = ++taskIdCounter;
          const newTask = {
            id: nextId,
            description,
            status: "todo",
            priority: priority || "medium",
            assignee: assignee || user,
            tags: tags || [],
            dependsOn: dependsOn || [],
            createdBy: user,
            createdAt: new Date().toISOString(),
            history: [`${new Date().toLocaleString()}: Créée par ${user}`],
          };
          tasks.push(newTask);
          await saveTasks(context, { tasks, taskIdCounter });
          return {
            success: true,
            message: `Tâche #${nextId} créée.`,
            task: newTask,
          };

        case "list":
          let results = tasks.map((t) => ({
            ...t,
            isBlocked: t.dependsOn.some(
              (id) => tasks.find((pt) => pt.id === id)?.status !== "completed",
            ),
          }));

          if (status) results = results.filter((t) => t.status === status);
          if (assignee) results = results.filter((t) => t.assignee === assignee);
          if (search) {
            const s = search.toLowerCase();
            results = results.filter(
              (t) =>
                t.description.toLowerCase().includes(s) ||
                t.tags.some((tag) => tag.toLowerCase().includes(s)),
            );
          }

          // Tri : Priorité d'abord, puis ID décroissant
          const pWeight = { high: 3, medium: 2, low: 1 };
          results.sort((a, b) => pWeight[b.priority] - pWeight[a.priority] || b.id - a.id);

          return { success: true, count: results.length, tasks: results };

        case "update":
          const task = tasks.find((t) => t.id === taskId);
          if (!task) return { success: false, message: "Tâche introuvable." };

          if (dependsOn && wouldCreateCycle(taskId, dependsOn, tasks))
            return { success: false, message: "Cycle détecté." };

          // Vérification de blocage pour passer à terminé
          if (status === "completed") {
            const blocking = task.dependsOn.filter(
              (id) => tasks.find((pt) => pt.id === id)?.status !== "completed",
            );
            if (blocking.length > 0)
              return {
                success: false,
                message: `Action bloquée par les IDs: ${blocking.join(", ")}`,
              };
            task.completedBy = user;
          }

          const fields = {
            description,
            status,
            priority,
            assignee,
            tags,
            dependsOn,
          };
          let changed = false;

          Object.keys(fields).forEach((key) => {
            if (
              fields[key] !== undefined &&
              JSON.stringify(fields[key]) !== JSON.stringify(task[key])
            ) {
              task[key] = fields[key];
              task.history.push(`${new Date().toLocaleString()}: ${key} mis à jour par ${user}`);
              changed = true;
            }
          });

          if (changed) await saveTasks(context, { tasks, taskIdCounter });
          return { success: true, task };

        case "stats":
          const tagCloud = {};
          tasks.forEach((t) => t.tags.forEach((tag) => (tagCloud[tag] = (tagCloud[tag] || 0) + 1)));
          return { success: true, total: tasks.length, tags: tagCloud };

        default:
          return { success: false, message: "Action inconnue." };
      }
    } finally {
      TaskManagerPlugin.isWriting = false;
    }
  }
}
