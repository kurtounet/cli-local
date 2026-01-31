import { emoji } from "zod";

export const SUCCESS = "success";
export const ERROR = "error";
export const WARNING = "warning";
export const INFO = "info";
export const DEBUG = "debug";

export function messageInitProject(projectName: string): string {
  return `🔨🔨🔨🔨🔨 INITIALISATION DU PROJET ${projectName.toUpperCase()} 🔨🔨🔨🔨🔨`;
}
export function messageInstallationFramework(frameworkName: string): string {
  return `🔨🔨🔨🔨🔨 INSTALLATION DU FRAMEWORK ${frameworkName.toUpperCase()} 🔨🔨🔨🔨🔨`;
}
export function messageCreateBranch(): string {
  return `🔨🔨🔨🔨🔨 CREATION DES BRANCHES 🔨🔨🔨🔨🔨`;
}
export function messageCreateArchitecture(): string {
  return `🔨🔨🔨🔨🔨 CREATION DE L'ARCHITECTURE 🔨🔨🔨🔨🔨`;
}
export function messageCreateFolderCli(): string {
  return `🔨🔨🔨🔨🔨 CREATION DU DOSSIER POUR LA CLI  🔨🔨🔨🔨🔨`;
}
export function messageCreateFile(filename: string): string {
  return `🔨🔨🔨🔨🔨 CREATION DU DOSSIER POUR LA CLI  🔨🔨🔨🔨🔨`;
}
export const EMOJI = {
  start: "🚀",
  end: "🏁",
  success: "✅",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️",
  debug: "🐛",

  // Etats
  loading: "⌛",
  processing: "🔄",
  ready: "📘",
  done: "🎉",

  // Fichiers / Dossiers
  file: "📄",
  folder: "📁",
  package: "📦",
  config: "⚙️",
  template: "🧩",

  // Projet
  project: "🏗️",
  module: "🔧",
  build: "🔨",
  deploy: "🌐",
  clean: "🧹",
  refresh: "♻️",

  compile: "🛠️",
  bundle: "📦",
  optimize: "⚙️",
  transpile: "🔨",
  generate: "🪄",

  fail: "🔥",
  watch: "👀",

  output: "📤",
  input: "📥",
  test: "🧪",

  // Logs
  log: "📝",
  step: "👉",
  arrow: "➡️",

  // Reseau / API
  connect: "🔌",
  api: "📡",
  request: "🛰️",

  // Base de donnees
  database: "🗄️",
  table: "🗃️",
  migration: "📊",

  // Actions
  add: "➕",
  remove: "➖",
  update: "🔧",
  search: "🔍",
  check: "☑️",

  // Cercles couleurs
  rond_red: "🔴",
  rond_orange: "🟠",
  rond_yellow: "🟡",
  rond_green: "🟢",
  rond_blue: "🔵",
  rond_purple: "🟣",
  rond_black: "⚫",
  rond_white: "⚪",

  // Divers utiles
  star: "⭐",
  spark: "✨",
  lock: "🔒",
  unlock: "🔓",
  settings: "🎛️",
  pinned: "📌",
  help: "❓",
};
