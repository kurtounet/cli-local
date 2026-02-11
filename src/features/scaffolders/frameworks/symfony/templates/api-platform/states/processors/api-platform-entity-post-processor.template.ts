import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 *
 * @param entity
 */
export function apiPlatformEntityPostProcessorTemplate(entity: IEntityJson) {
  return `<?php

namespace App\\ApiResource\\States\\${entity.namePascalCase};


use ApiPlatform\\Metadata\\Post;
use ApiPlatform\\Metadata\\Operation;
use App\\ApiResource\\Mappers\\${entity.namePascalCase}Mapper;
use ApiPlatform\\State\\ProcessorInterface;
use Symfony\\Component\\DependencyInjection\\Attribute\\Autowire;
use App\\ApiResource\\Dtos\\${entity.namePascalCase}\\${entity.namePascalCase}CreateDto;


final readonly class ${entity.namePascalCase}CreateProcessor implements ProcessorInterface
{
    public function __construct(
        private ${entity.namePascalCase}Mapper $${entity.nameCamelCase}Mapper,
        #[Autowire(service: 'api_platform.doctrine.orm.state.persist_processor')]
        private ProcessorInterface $persistProcessor,
    ) {}

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): mixed
    {
        if (!($operation instanceof Post) || !($data instanceof ${entity.namePascalCase}CreateDto)) {
            return $data;
        }

        $entity = $this->${entity.nameCamelCase}Mapper->createDtoToEntity($data);

        $entity = $this->persistProcessor->process($entity, $operation, $uriVariables, $context);

        return $this->${entity.nameCamelCase}Mapper->entityToItemDto($entity);
    }
}
`;
}
