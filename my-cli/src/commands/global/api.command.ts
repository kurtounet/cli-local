import * as path from "path";
import * as fs from "fs";
import { execa } from "execa";
import { Command } from "commander";
import { logInfo } from "@utils/logger";

function findServerDir(start: string) {
  let dir = start;
  while (true) {
    const candidate = path.join(dir, "server");
    if (
      fs.existsSync(path.join(candidate, "nitro.config.ts")) ||
      fs.existsSync(path.join(candidate, "package.json"))
    ) {
      return candidate;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  throw new Error("Impossible de localiser le dossier server depuis " + start);
}
const apiDir = findServerDir(__dirname);

// quand ce fichier est en dist/commands, on remonte a la racine et pointe "server"
// const apiDir = path.resolve(__dirname, '..', '..', '..', '..', 'server')
logInfo(apiDir);

async function run(
  script: "dev" | "build" | "start",
  env: Record<string, string> = {},
) {
  const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
  await execa(npmCmd, ["run", script], {
    cwd: apiDir,
    stdio: "inherit",
    env: { ...process.env, ...env },
  });
}
export function registerApiCommand(program: Command) {
  program
    .command("api:dev")
    .description("Lance Nitro en mode dev (HMR)")
    .option("-p, --port <port>", "Port HTTP", "3000")
    .action(async (opts) => {
      logInfo("🚀 Api:dev");
      await run("dev", { NITRO_PORT: String(opts.port) });
    });

  program
    .command("api:build")
    .description("Build de l API Nitro")
    .action(async () => {
      logInfo("🚀 Api:build");
      await run("build");
    });

  program
    .command("api:start")
    .description("Demarre l API Nitro build ee")
    .option("-p, --port <port>", "Port HTTP", "3000")
    .action(async (opts) => {
      logInfo("🚀 Api:start");
      await run("start", { NITRO_PORT: String(opts.port) });
    });
}
