import { IColumnJson } from "@parsersMdj/models/entity-json.model";
import { DtoType } from "../../constant/nestjs-constants.constant";
import { nestjsGetExampleValue } from "./nest-get-example-value.service";

/**
 * Construit le décorateur ApiProperty pour Swagger.
 */
export function nestjsBuildApiPropertyDecorator(
  column: IColumnJson,
  dtoType: DtoType,
): string {
  const options: string[] = [];

  if (column.description) {
    options.push(`description: '${column.description}'`);
  }

  options.push(`example: ${nestjsGetExampleValue(column)}`);

  if (column.nullable || dtoType === DtoType.UPDATE) {
    options.push("required: false");
  }

  return `@ApiProperty({ ${options.join(", ")} })`;
}
