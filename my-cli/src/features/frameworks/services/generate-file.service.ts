import { writeFile } from "@utils/file-utils";

export function generateFileService(path: string, content: string) {
  writeFile(
    path,
    content
  );
}

