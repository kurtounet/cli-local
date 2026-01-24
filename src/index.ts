#!/usr/bin/env node
import { AppContextBuilder } from "./context/context.js";
import { App } from "./core/App.js";

async function main() {
  const context = new AppContextBuilder().buildContext();
  const app = new App(context);

  // app.registerCommand(InitCommand);

  await app.run();
}

main().catch(console.error);
