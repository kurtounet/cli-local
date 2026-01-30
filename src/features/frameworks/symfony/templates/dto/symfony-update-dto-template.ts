import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function symfonyUpdateDtoTemplate(
  entity: IEntityJson,
  properties: string,
  accessors: string,
) {
  return `<?php

namespace App\\Dto\\${entity.namePascalCase};
use DateTimeImmutable; 
use Symfony\\Component\\Serializer\\Attribute\\Groups;
use Symfony\\Component\\Validator\\Constraints as Assert;

final class ${entity.namePascalCase}UpdateDto
{
    public function __construct() {}
         
    ${properties}
 
    ${accessors}
}`;
}
