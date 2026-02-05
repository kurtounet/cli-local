import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

/**
 *
 * @param entity
 */
export function apiPlatformEntityRessourceDtoTemplate(entity: IEntityJson) {
  return `<?php

namespace App\\ApiResource\\Resources\\${entity.namePascalCase};

use App\\Entity\\${entity.namePascalCase};


use ApiPlatform\\Metadata\\Get;
use ApiPlatform\\Metadata\\Post;
use ApiPlatform\\Metadata\\Patch;
use ApiPlatform\\Metadata\\Delete;
use ApiPlatform\\Metadata\\ApiResource;
use ApiPlatform\\Metadata\\GetCollection;
use ApiPlatform\\Doctrine\\Orm\\State\\Options;

use App\\ApiResource\\Dtos\\${entity.namePascalCase}\\${entity.namePascalCase}CreateDto;
use App\\ApiResource\\Dtos\\${entity.namePascalCase}\\${entity.namePascalCase}UpdateDto;
use App\\ApiResource\\Dtos\\${entity.namePascalCase}\\${entity.namePascalCase}ItemDto;
use App\\ApiResource\\Dtos\\${entity.namePascalCase}\\${entity.namePascalCase}CollectionItemDto;

use App\\ApiResource\\States\\${entity.namePascalCase}\\${entity.namePascalCase}CollectionProvider;
use App\\ApiResource\\States\\${entity.namePascalCase}\\${entity.namePascalCase}ItemProvider;
use App\\ApiResource\\States\\${entity.namePascalCase}\\${entity.namePascalCase}CreateProcessor;
use App\\ApiResource\\States\\${entity.namePascalCase}\\${entity.namePascalCase}UpdateProcessor;
use App\\ApiResource\\States\\${entity.namePascalCase}\\${entity.namePascalCase}DeleteProcessor;

use Symfony\\Component\\ObjectMapper\\Attribute\\Map;
use Symfony\\Component\\Serializer\\Attribute\\Groups;
use Symfony\\Component\\Validator\\Constraints as Assert;

#[ApiResource(
    shortName: '${entity.tableName}',
    stateOptions: new Options(entityClass: ${entity.namePascalCase}::class),
    operations: [
        new GetCollection(
            uriTemplate: '${entity.tableName}',
            normalizationContext: ['groups' => ['${entity.namePascalCase}:collection:read']],
            provider: ${entity.namePascalCase}CollectionProvider::class,
            output: ${entity.namePascalCase}CollectionItemDto::class
        ),
        new Get(
            uriTemplate: '${entity.tableName}/{id}',
            normalizationContext: ['groups' => ['${entity.namePascalCase}:item:read']],
            provider: ${entity.namePascalCase}ItemProvider::class,
            output: ${entity.namePascalCase}ItemDto::class
        ),
        new Post(
            uriTemplate: '${entity.tableName}/{id}',
            denormalizationContext: ['groups' => ['${entity.namePascalCase}:create']],
            processor: ${entity.namePascalCase}CreateProcessor::class,
            input: ${entity.namePascalCase}CreateDto::class,
            output: ${entity.namePascalCase}ItemDto::class
        ),
        new Patch(
            uriTemplate: '${entity.tableName}/{id}',
            denormalizationContext: ['groups' => ['${entity.namePascalCase}:update']],
            processor: ${entity.namePascalCase}UpdateProcessor::class,
            input: ${entity.namePascalCase}UpdateDto::class,
            output: ${entity.namePascalCase}ItemDto::class
        ),
        new Delete(
            uriTemplate: '${entity.tableName}/{id}',
            processor: ${entity.namePascalCase}DeleteProcessor::class,
            output: false,
            status: 204
        ),
    ]
)]
//#[Map(source: ${entity.namePascalCase}::class)]
final class ${entity.namePascalCase}Resource
{
    public int $id;
/*
    #[Groups(['${entity.namePascalCase}:collection:read', '${entity.namePascalCase}:item:read'])]
    public int $id;

    #[Groups(['${entity.namePascalCase}:collection:read', '${entity.namePascalCase}:item:read'])]
    public string $label;

    #[Groups(['${entity.namePascalCase}:collection:read', '${entity.namePascalCase}:item:read'])]
    public string $code;

    #[Groups(['${entity.namePascalCase}:collection:read', '${entity.namePascalCase}:item:read'])]
    public string $pathFile;

    #[Groups(['${entity.namePascalCase}:collection:read', '${entity.namePascalCase}:item:read'])]
    public string $feature;

    #[Groups(['${entity.namePascalCase}:collection:read', '${entity.namePascalCase}:item:read'])]
    public \\DateTimeInterface $createdAt;

    #[Groups(['${entity.namePascalCase}:collection:read', '${entity.namePascalCase}:item:read'])]
    public ?\\DateTimeInterface $updatedAt;


*/
}
`;
}
