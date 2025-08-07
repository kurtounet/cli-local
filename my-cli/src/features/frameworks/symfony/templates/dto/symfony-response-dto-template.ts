import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function symfonyResponseDtoTemplate(
  entity: IEntityJson,
  properties: string,
  accessors: string,
) {
  return `<?php

namespace App\\Dto\\${entity.namePascalCase};
use DateTimeImmutable; 
use Symfony\\Component\\Serializer\\Annotation\\Groups;
use Symfony\\Component\\Validator\\Constraints as Assert;

final class ${entity.namePascalCase}ResponseDto
{       
    public function __construct() {}
         
    ${properties}    

    ${accessors}
}`;
}
