import path from "path";

// export const TEMPLATES_DIR = path.resolve(process.cwd(), "templates/nestjs");
export const TEMPLATES_DIR = path.resolve(__dirname, "../../templates");
export const TEMPLATES_DIR_NESTJS = path.resolve(
  __dirname,
  TEMPLATES_DIR,
  "nestjs",
);
