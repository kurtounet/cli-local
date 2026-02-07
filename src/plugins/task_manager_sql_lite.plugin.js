import sqlite3 from "sqlite3";
import mysql from "mysql2/promise";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class DatabaseManager {
  constructor() {
    // 1. Connexion SQLite (Locale)
    this.sqlite = new sqlite3.Database(this.cli.path.join(__dirname, "tasks.db"));
    this.initSQLite();

    // 2. Configuration MySQL (Sécurité)
    this.mysqlConfig = {
      host: "localhost",
      user: "root",
      password: "password",
      database: "task_backup",
    };
  }

  initSQLite() {
    this.sqlite.run(`CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description TEXT,
      status TEXT,
      priority TEXT,
      assignee TEXT,
      tags TEXT,
      dependsOn TEXT,
      history TEXT,
      createdAt DATETIME
    )`);
  }

  async save(taskData) {
    // Sauvegarde SQLite
    const sql = `INSERT INTO tasks (description, status, priority, assignee, tags, dependsOn, history, createdAt) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [
      taskData.description,
      taskData.status,
      taskData.priority,
      taskData.assignee,
      JSON.stringify(taskData.tags),
      JSON.stringify(taskData.dependsOn),
      JSON.stringify(taskData.history),
      taskData.createdAt,
    ];

    this.sqlite.run(sql, params);

    // Sauvegarde MySQL de sécurité (Async non-bloquant)
    this.syncToMySQL(sql, params).catch((err) => console.error("MySQL Sync Error:", err.message));
  }

  async syncToMySQL(query, params) {
    const connection = await mysql.createConnection(this.mysqlConfig);
    await connection.execute(query, params);
    await connection.end();
  }

  async getAll() {
    return new Promise((resolve) => {
      this.sqlite.all("SELECT * FROM tasks", [], (err, rows) => {
        resolve(
          rows.map((r) => ({
            ...r,
            tags: JSON.parse(r.tags),
            dependsOn: JSON.parse(r.dependsOn),
            history: JSON.parse(r.history),
          })),
        );
      });
    });
  }
}

const db = new DatabaseManager();

export default class TaskManagerPlugin {
  static definition = {
    name: "task_manager_sql_lite",
    description: "Gestionnaire avec persistance SQLite locale et backup MySQL.",
    // ... même schéma que précédemment ...
  };

  async execute(args, context) {
    const { action, description, user, priority, tags } = args;

    switch (action) {
      case "add":
        const newTask = {
          description,
          status: "todo",
          priority: priority || "medium",
          assignee: user,
          tags: tags || [],
          dependsOn: [],
          createdAt: new Date().toISOString(),
          history: [`Créé par ${user}`],
        };

        await db.save(newTask);
        return {
          success: true,
          message: "Tâche sauvegardée en local et répliquée.",
        };

      case "list":
        const tasks = await db.getAll();
        return { success: true, tasks };

      // ... autres cases ...
    }
  }
}
