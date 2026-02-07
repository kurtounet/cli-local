export default class TaskManagerCliPlugin {
  static definition = {
    name: "task_manager_cli_plugin",
    description: "Gestionnaire avec persistance SQLite locale et backup MySQL.",
    // ... même schéma que précédemment ...
  };

  async execute(args, context) {
    const { action, description, user, taskId } = args;

    // On récupère le service via le contexte injecté par la CLI
    const db = context.db;

    switch (action) {
      case "add":
        const sql = `INSERT INTO tasks (description, assignee, status) VALUES (?, ?, 'todo')`;
        await db.query(sql, [description, user]);
        return { success: true, message: "Tâche ajoutée via le service Core." };

      case "list":
        const tasks = await db.query("SELECT * FROM tasks ORDER BY id DESC");
        return { success: true, tasks };

      case "update":
        await db.query("UPDATE tasks SET status = ? WHERE id = ?", [
          args.status,
          taskId,
        ]);
        return { success: true, message: "Statut mis à jour." };
    }
  }
}
