// test-error-handler.ts

import { HandlerErrorService } from "./handler-error.service.js";

// Test 1 : CLI complètement initialisé
const goodCli = {
  logger: {
    error: (msg: string) => console.log("LOGGER:", msg),
  },
  config: {
    logLevel: "debug",
  },
};

const handler1 = new HandlerErrorService(goodCli as any);
console.log("Test 1: CLI complet");
// handler1.handle(new Error('Test error'), 'Test context');

// Test 2 : CLI sans config
const badCli = {
  logger: {
    error: (msg: string) => console.log("LOGGER:", msg),
  },
  // config est manquant !
};

const handler2 = new HandlerErrorService(badCli as any);
console.log("Test 2: CLI sans config");
// handler2.handle(new Error('Test error'), 'Test context');

// Test 3 : Pas de CLI du tout
const handler3 = new HandlerErrorService(undefined as any);
console.log("Test 3: Pas de CLI");
// handler3.handle(new Error('Test error'), 'Test context');
