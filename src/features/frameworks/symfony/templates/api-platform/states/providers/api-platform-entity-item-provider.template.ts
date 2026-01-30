import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function apiPlatformEntityItemProviderTemplate(entity: IEntityJson) {
  return `<?php

namespace App\\ApiResource\\States\\${entity.namePascalCase};

use ApiPlatform\\Metadata\\IriConverterInterface;
use ApiPlatform\\Metadata\\Operation;
use App\\Entity\\${entity.namePascalCase};
use ApiPlatform\\State\\ProviderInterface;
use Symfony\\Component\\DependencyInjection\\Attribute\\Autowire;
use App\\ApiResource\\Mappers\\${entity.namePascalCase}Mapper;

final readonly class ${entity.namePascalCase}ItemProvider implements ProviderInterface
{
    public function __construct(
        #[Autowire(service: 'api_platform.doctrine.orm.state.item_provider')]
        private ProviderInterface $itemProvider,
        private ${entity.namePascalCase}Mapper $${entity.namePascalCase}Mapper
    ) {}
    public function provide(Operation $operation, array $uriVariables = [], array $context = []): object|array|null
    {
        $entity = $this->itemProvider->provide($operation, $uriVariables, $context);

        if (!$entity instanceof ${entity.namePascalCase}) {
            return $entity;
        }

        return $this->${entity.nameCamelCase}Mapper->entityToItemDto($entity);
    }
}
`;
}
