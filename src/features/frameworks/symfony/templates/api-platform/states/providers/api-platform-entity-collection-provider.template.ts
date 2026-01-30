import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function apiPlatformEntityCollectionProviderTemplate(
  entity: IEntityJson,
) {
  return `<?php

namespace App\\ApiResource\\States\\${entity.namePascalCase};

use App\\Entity\\${entity.namePascalCase};
 
use ApiPlatform\\Metadata\\Operation;
use ApiPlatform\\State\\ProviderInterface;
 
use ApiPlatform\\Metadata\\CollectionOperationInterface;
use Symfony\\Component\\DependencyInjection\\Attribute\\Autowire;
use App\\ApiResource\\Mappers\\${entity.namePascalCase}Mapper;

final readonly class ProjectInstanceCollectionProvider implements ProviderInterface
{
    public function __construct(
        #[Autowire(service: 'api_platform.doctrine.orm.state.collection_provider')]
        private ProviderInterface $collectionProvider,
        private ${entity.namePascalCase}Mapper $${entity.nameCamelCase}Mapper
    ) {}

    public function provide(Operation $operation, array $uriVariables = [], array $context = []): object|array|null
    {
        if (!($operation instanceof CollectionOperationInterface)) {
            throw new \\LogicException(sprintf('%s ne gère que les opérations de collection.', self::class));
        }

        $result = $this->collectionProvider->provide($operation, $uriVariables, $context);

        if (!is_iterable($result)) {
            return $result;
        }

        $items = [];
        foreach ($result as $entity) {

            if (!$entity instanceof ${entity.namePascalCase}) {
                continue;
            }
            $items[] = $this->${entity.nameCamelCase}Mapper->entityToCollectionDto($entity);
        }
        return $items;
    }
}
`;
}
