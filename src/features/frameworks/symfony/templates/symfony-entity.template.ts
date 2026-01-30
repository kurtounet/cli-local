export function symfonyEntityTemplate(
  entityName: string,
  properties: string,
  accessors: string,
  relations: string,
) {
  const importsDoctrine = `
use Doctrine\\DBAL\\Types\\Types;
use Doctrine\\ORM\\Mapping as ORM;
`;
  const importsApiPlatform = `
use ApiPlatform\\Metadata\\GetCollection;
use ApiPlatform\\Metadata\\Delete;
use ApiPlatform\\Metadata\\Get;
use ApiPlatform\\Metadata\\Patch;
use ApiPlatform\\Metadata\\Post;
`;
  const importsDto = `
use App\\Dto\\${entityName}\\${entityName}ResponseDto;
use App\\Dto\\${entityName}\\${entityName}UpdateDto;
use App\\Dto\\${entityName}\\${entityName}CreateDto;
use App\\State\\${entityName}\\${entityName}Provider;
use App\\State\\${entityName}\\${entityName}Processor;
`;
  const operationsApiPlatform = `
#[GetCollection(    
    provider: ${entityName}Provider::class,
    output: ${entityName}ResponseDto::class
)]
#[Get(     
    provider: ${entityName}Provider::class,
    output: ${entityName}ResponseDto::class
)]
#[Post(
    processor:${entityName}Processor::class,     
    input: ${entityName}CreateDto::class
)]
#[Patch(
    processor: ${entityName}Processor::class,
    input: ${entityName}UpdateDto::class
)]
#[Delete()]
`;

  return `<?php

namespace App\\Entity;


use App\\Repository\\${entityName}Repository;
/*
 ${importsApiPlatform}
*/
${importsDoctrine}
${importsDto}
/*
${operationsApiPlatform}
*/
use DateTimeImmutable;

#[ORM\\Entity(repositoryClass: ${entityName}Repository::class)]
class ${entityName}
{
   
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    ${properties}

    ${relations}


    public function getId(): ?int
    {
        return $this->id;
    }    

    ${accessors}
}`;
}
