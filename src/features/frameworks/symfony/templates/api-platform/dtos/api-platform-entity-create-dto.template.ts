import { symfonyGetPropertyType } from "@features/frameworks/symfony/utils/mapping";
import {
  IColumnJson,
  IEntityJson,
} from "@features/parsersMdj/models/entity-json.model";
import { snakeToCamel } from "@utils/convert";

export function apiPlatformEntityCreateDtoTemplate(entity: IEntityJson) {
  const properties = entity.columns
    ?.map(
      (col: IColumnJson) =>
        `#[Groups(['${entity.namePascalCase}:create'])]\npublic ?${symfonyGetPropertyType(col.typeSql)} $${snakeToCamel(col.name)} = null;\n`,
    )
    .join("\n");
  return `<?php

namespace App\\ApiResource\\Dtos\\${entity.namePascalCase};

use App\\Entity\\${entity.namePascalCase};
use Symfony\\Component\\ObjectMapper\\Attribute\\Map;
use Symfony\\Component\\Serializer\\Attribute\\Groups;

//#[Map(source: CodeBase::class)]
final class ${entity.namePascalCase}CreateDto
{
  ${properties}
}
`;
}
