export function SCRIPTS_ANGULAR_MOCK() {
  return {
    lint: "npx eslint . --fix",
    format: "npx prettier --write .",
  } as Record<string, string>;
}
