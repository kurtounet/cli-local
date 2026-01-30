import { writeFile } from "@utils/file-utils";
import { electronIpcRendererTemplate } from "../templates/electron-ipc-renderer.template";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 * Generates an Electron component.
 * @param targetPath The target directory for the component.
 * @param name The name of the component.
 */
export function electronGenerateIpcRendererService(entity: IEntityJson) {
  const content = electronIpcRendererTemplate(entity);
  writeFile(
    `${entity.nameKebabCase}/${entity.nameKebabCase}.ipc-renderer.ts`,
    content,
  );
}
